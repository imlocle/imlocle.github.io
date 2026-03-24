import { motion } from "framer-motion";
import { FiExternalLink, FiCalendar } from "react-icons/fi";

import mediumPosts from "../data/medium-posts.json";
import "@styles/pages/Writing.css";
import TitleHeader from "@/components/header/TitleHeader";

interface MediumPost {
  title: string;
  link: string;
  pubDate: string;
  subtitle: string | null;
  description: string;
  image: string | null;
  categories: string[];
}

const Writing = () => {
  const posts = mediumPosts as MediumPost[];

  return (
    <div className="writing-container">
      <TitleHeader
        title="Writing"
        subtitle="Thoughts on system architecture, cloud infrastructure, AI engineering, and lessons learned from building production systems."
      />

      <section className="posts-section">
        <div className="posts-header">
          <h2 className="section-title">Recent Posts</h2>
          <a
            href="https://medium.com/@imlocle"
            target="_blank"
            rel="noopener noreferrer"
            className="medium-link"
          >
            View all on Medium <FiExternalLink />
          </a>
        </div>

        <div className="posts-grid">
          {posts.map((post, index) => (
            <PostCard key={post.link} post={post} index={index} />
          ))}
        </div>
      </section>

      <section className="topics-section">
        <h2 className="section-title">Topics I Write About</h2>
        <div className="topics-grid">
          <TopicCard
            title="Software Engineering"
            description="Production systems, technical decisions, and what actually matters in real-world development"
          />
          <TopicCard
            title="Career & Job Search"
            description="Reflections on interviews, job searching, and the gap between evaluation and real engineering work"
          />
          <TopicCard
            title="Personal Growth & ADHD"
            description="Managing ADHD, building systems for focus, and turning challenges into momentum"
          />
          <TopicCard
            title="Learning & Adaptation"
            description="How to learn effectively, turn failures into systems, and prepare for what matters"
          />
        </div>
      </section>
    </div>
  );
};

interface PostCardProps {
  post: MediumPost;
  index: number;
}

const PostCard = ({ post, index }: PostCardProps) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <motion.a
      href={post.link}
      target="_blank"
      rel="noopener noreferrer"
      className="post-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
    >
      {post.image && (
        <div className="post-image">
          <img
            src={post.image}
            alt={post.title}
            loading="lazy"
            onError={e => {
              // Hide image container if image fails to load
              const target = e.target as HTMLImageElement;
              const container = target.parentElement;
              if (container) {
                container.style.display = "none";
              }
            }}
          />
        </div>
      )}
      <div className="post-content">
        <h3 className="post-title">{post.title}</h3>
        {post.subtitle && <p className="post-subtitle">{post.subtitle}</p>}
        <p className="post-description">{post.description}</p>
        <div className="post-meta">
          <FiCalendar />
          <span>{formatDate(post.pubDate)}</span>
        </div>
        {post.categories.length > 0 && (
          <div className="post-categories">
            {post.categories.map((category, i) => (
              <span key={i} className="post-category">
                {category}
              </span>
            ))}
          </div>
        )}
        <div className="post-link-indicator">
          Read on Medium <FiExternalLink />
        </div>
      </div>
    </motion.a>
  );
};

interface TopicCardProps {
  title: string;
  description: string;
}

const TopicCard = ({ title, description }: TopicCardProps) => (
  <div className="topic-card">
    <h3 className="topic-title">{title}</h3>
    <p className="topic-description">{description}</p>
  </div>
);

export default Writing;
