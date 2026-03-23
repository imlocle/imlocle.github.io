import { motion } from "framer-motion";
import { FiArrowRight, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";

import "@styles/pages/Home.css";
import { getFeaturedProjects } from "../data/projects";
import mediumPosts from "../data/medium-posts.json";

const Home = () => {
  const featuredProjects = getFeaturedProjects().slice(0, 3);
  const recentPosts = mediumPosts.slice(0, 3);

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <motion.div
            className="status-badge"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="status-dot" />
            <span>Senior Backend Lead @ Neptune App</span>
          </motion.div>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Building <span className="gradient-text">Scalable Systems</span>
            <br />
            with Python & AWS
          </motion.h1>

          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Senior Software Engineer specializing in backend architecture, cloud infrastructure,
            and AI platforms. 8+ years building production systems at scale.
          </motion.p>

          <motion.div
            className="hero-cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link to="/work" className="btn-primary">
              View My Work <FiArrowRight />
            </Link>
            <Link to="/about" className="btn-secondary">
              About Me
            </Link>
          </motion.div>

          <motion.div
            className="tech-stack"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <span className="tech-pill">Python</span>
            <span className="tech-pill">TypeScript</span>
            <span className="tech-pill">AWS Lambda</span>
            <span className="tech-pill">DynamoDB</span>
            <span className="tech-pill">Terraform</span>
            <span className="tech-pill">AI/LLM</span>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="bento-section">
        <div className="section-header">
          <h2 className="section-title">Featured Work</h2>
          <p className="section-subtitle">
            Production systems, open source projects, and technical experiments
          </p>
        </div>

        <div className="home-featured-grid">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="home-project-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {project.image && (
                <div className="project-image">
                  <img src={project.image} alt={project.name} />
                </div>
              )}
              <div className="project-content">
                <h3 className="project-title">{project.name}</h3>
                <p className="project-description">{project.tagline}</p>
                <div className="project-tags">
                  {project.metrics?.slice(0, 3).map((metric, i) => (
                    <span key={i} className="project-tag">{metric}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.links?.caseStudy && (
                    <Link
                      to={project.links.caseStudy}
                      className="project-link"
                    >
                      <FiArrowRight /> Case Study
                    </Link>
                  )}
                  {project.links?.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <FiGithub /> Code
                    </a>
                  )}
                  {project.links?.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <FiArrowRight /> Live
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 'var(--space-xl)' }}>
          <Link to="/work" className="btn-secondary">
            View All Projects <FiArrowRight />
          </Link>
        </div>
      </section>

      {/* Recent Writing */}
      <section className="bento-section">
        <div className="section-header">
          <h2 className="section-title">Recent Writing</h2>
          <p className="section-subtitle">
            Thoughts on system architecture, cloud infrastructure, and AI engineering
          </p>
        </div>

        <div className="blog-grid">
          {recentPosts.map((post, index) => (
            <motion.a
              key={index}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="blog-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="blog-date">
                {new Date(post.pubDate).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
              <h3 className="blog-title">{post.title}</h3>
              {post.subtitle && (
                <p className="blog-subtitle">{post.subtitle}</p>
              )}
              <span className="blog-link">
                Read on Medium <FiArrowRight />
              </span>
            </motion.a>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 'var(--space-xl)' }}>
          <Link to="/writing" className="btn-secondary">
            View All Posts <FiArrowRight />
          </Link>
        </div>
      </section>

      {/* Connect Section */}
      <section className="bento-section">
        <div className="bento-grid">
          <motion.div
            className="bento-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="bento-card-content">
              <div className="bento-card-icon">
                <FiGithub />
              </div>
              <h3 className="bento-card-title">Open Source</h3>
              <p className="bento-card-description">
                Check out my open source projects and contributions on GitHub
              </p>
              <a
                href="https://github.com/imlocle"
                target="_blank"
                rel="noopener noreferrer"
                className="bento-card-link"
              >
                View GitHub <FiArrowRight />
              </a>
            </div>
          </motion.div>

          <motion.div
            className="bento-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="bento-card-content">
              <div className="bento-card-icon">
                <FiLinkedin />
              </div>
              <h3 className="bento-card-title">Connect</h3>
              <p className="bento-card-description">
                Let's connect on LinkedIn and discuss backend architecture
              </p>
              <a
                href="https://linkedin.com/in/imlocle"
                target="_blank"
                rel="noopener noreferrer"
                className="bento-card-link"
              >
                Connect on LinkedIn <FiArrowRight />
              </a>
            </div>
          </motion.div>

          <motion.div
            className="bento-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="bento-card-content">
              <div className="bento-card-icon">
                <FiMail />
              </div>
              <h3 className="bento-card-title">Get in Touch</h3>
              <p className="bento-card-description">
                Interested in working together? Let's talk about your project
              </p>
              <Link to="/contact" className="bento-card-link">
                Send Message <FiArrowRight />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
