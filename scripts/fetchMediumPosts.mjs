import fs from "node:fs";
import path from "node:path";
import { XMLParser } from "fast-xml-parser";

const MEDIUM_RSS = "https://medium.com/feed/@imlocle";
const OUT_PATH = path.resolve("src/data/medium-posts.json");

function extractSubtitle(content) {
  // Medium puts subtitle in <h4> tags at the beginning
  const h4Match = content.match(/<h4>(.*?)<\/h4>/);
  if (h4Match) {
    return h4Match[1].replace(/<[^>]*>/g, "").trim();
  }
  return null;
}

function extractFirstImage(content) {
  // Extract first image URL from content
  const imgMatch = content.match(/<img[^>]+src="([^">]+)"/);
  if (imgMatch) {
    return imgMatch[1];
  }
  return null;
}

function extractDescription(content, subtitle) {
  // Remove HTML tags
  let text = content.replace(/<[^>]*>/g, " ");
  
  // Remove extra whitespace
  text = text.replace(/\s+/g, " ").trim();
  
  // If we have a subtitle, use it as the description
  if (subtitle) {
    return subtitle;
  }
  
  // Otherwise, get first paragraph (skip subtitle if it exists)
  const paragraphs = text.split(/\.\s+/);
  for (const para of paragraphs) {
    const cleaned = para.trim();
    // Skip very short paragraphs and the subtitle
    if (cleaned.length > 50 && cleaned.length < 300) {
      return cleaned + ".";
    }
  }
  
  // Fallback: first 200 characters
  return text.slice(0, 200).trim() + "...";
}

function extractCategories(item) {
  // Medium includes categories in the RSS feed
  if (Array.isArray(item.category)) {
    return item.category.slice(0, 3); // Get first 3 categories
  } else if (item.category) {
    return [item.category];
  }
  return [];
}

async function run() {
  const res = await fetch(MEDIUM_RSS);
  if (!res.ok) throw new Error(`Failed RSS fetch: ${res.status}`);

  const xml = await res.text();
  const parser = new XMLParser({ 
    ignoreAttributes: false,
    attributeNamePrefix: "@_"
  });
  const data = parser.parse(xml);

  const items = data?.rss?.channel?.item ?? [];
  const posts = items.slice(0, 12).map((item) => {
    const content = item["content:encoded"] || item.description || "";
    const subtitle = extractSubtitle(content);
    const image = extractFirstImage(content);
    const description = extractDescription(content, subtitle);
    const categories = extractCategories(item);

    return {
      title: item.title,
      link: item.link,
      pubDate: item.pubDate,
      subtitle: subtitle,
      description: description,
      image: image,
      categories: categories,
    };
  });

  fs.mkdirSync(path.dirname(OUT_PATH), { recursive: true });
  fs.writeFileSync(OUT_PATH, JSON.stringify(posts, null, 2));
  console.log(`✓ Wrote ${posts.length} posts → ${OUT_PATH}`);
  console.log(`✓ Extracted subtitles: ${posts.filter(p => p.subtitle).length}`);
  console.log(`✓ Extracted images: ${posts.filter(p => p.image).length}`);
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
