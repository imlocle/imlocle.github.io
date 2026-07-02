import { motion } from "framer-motion";
import {
  FiExternalLink,
  FiCode,
  FiBriefcase,
  FiZap,
  FiBookOpen,
} from "react-icons/fi";

import mediumPosts from "@data/medium-posts.json";
import type { MediumPost } from "@models/medium";
import "@styles/pages/Writing.css";
import IconCard from "@/components/card/IconCard";
import Reveal from "@/components/ui/Reveal";
import TitleHeader from "@/components/header/TitleHeader";

const Writing = () => {
  const posts = mediumPosts as MediumPost[];

  return (
    <div className="writing-container">
      <TitleHeader
        title="Writing"
        subtitle="Thoughts on system architecture, cloud infrastructure, AI engineering, and lessons learned from building production systems."
      />

      <section className="topics-section">
        <h2 className="section-title">Topics I Write About</h2>
        <div className="topics-grid">
          <Reveal>
            <IconCard
              icon={<FiCode />}
              title="Software Engineering"
              items={[
                "Production systems & real-world decisions",
                "Technical architecture patterns",
                "What actually matters in development",
              ]}
            />
          </Reveal>
          <Reveal delay={100}>
            <IconCard
              icon={<FiBriefcase />}
              title="Career & Job Search"
              items={[
                "Interview reflections & insights",
                "Evaluation vs. real engineering",
                "Navigating the job market",
              ]}
            />
          </Reveal>
          <Reveal delay={200}>
            <IconCard
              icon={<FiZap />}
              title="Personal Growth & ADHD"
              items={[
                "Building systems for focus",
                "Managing ADHD as an engineer",
                "Turning challenges into momentum",
              ]}
            />
          </Reveal>
          <Reveal delay={300}>
            <IconCard
              icon={<FiBookOpen />}
              title="Learning & Adaptation"
              items={[
                "Learning effectively as a developer",
                "Turning failures into systems",
                "Preparing for what matters",
              ]}
            />
          </Reveal>
        </div>
      </section>

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
    </div>
  );
};

interface PostCardProps {
  post: MediumPost;
  index: number;
}

const PostCard = ({ post, index }: PostCardProps) => {
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

export default Writing;
