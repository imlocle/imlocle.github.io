import { motion } from "framer-motion";
import "@styles/components/card/BlogPreviewCard.css";

type BlogPreviewCardProps = {
  title: string;
  description: string;
  link: string;
  pubDate?: string;
  sourceLabel?: string; //
};

const BlogPreviewCard = ({
  title,
  description,
  link,
  pubDate,
  sourceLabel = "Medium",
}: BlogPreviewCardProps) => {
  return (
    <motion.a
      className="blog-card"
      href={link}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      whileHover={{ y: -6, boxShadow: "var(--box-shadow-hover)" }}
      viewport={{ once: true }}
      aria-label={`Read article: ${title}`}
    >
      <div className="blog-card-top">
        <span className="blog-pill">{sourceLabel}</span>
        {pubDate && <span className="blog-date">{pubDate}</span>}
      </div>

      <h3 className="blog-title">{title}</h3>

      <p className="blog-description">{description}</p>

      <div className="blog-footer">
        <span className="blog-link">Read article →</span>
      </div>
    </motion.a>
  );
};

export default BlogPreviewCard;
