import BlogPreviewCard from "@components/card/BlogPreviewCard";
import rawPosts from "@data/medium-posts.json";
import type { MediumPost } from "@models/medium";

import "@styles/components/section/BlogPreviewGrid.css";

const posts = rawPosts as MediumPost[];

type Props = {
  limit?: number;
};

const BlogPreviewGrid = ({ limit = 3 }: Props) => {
  return (
    <div className="blog-preview-grid">
      {posts.slice(0, limit).map(p => (
        <BlogPreviewCard
          key={p.link}
          title={p.title}
          description={p.description}
          link={p.link}
          pubDate={p.pubDate}
          sourceLabel="Medium"
        />
      ))}
    </div>
  );
};

export default BlogPreviewGrid;
