import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FiGithub, FiExternalLink, FiFileText, FiChevronDown, FiChevronUp } from "react-icons/fi";

import { PROJECTS, type Project } from "@data/projects";
import "@styles/pages/Work.css";
import { useChat } from "@context/ChatContext";
import TitleHeader from "@/components/header/TitleHeader";

const Work = () => {
  const [showMore, setShowMore] = useState(false);

  const featuredProjects = PROJECTS.filter(p => p.featured);
  const moreProjects = PROJECTS.filter(p => !p.featured);

  return (
    <div className="work-container">
      <TitleHeader
        title="Work"
        subtitle="Production systems, open source projects, and client work spanning backend architecture, cloud infrastructure, and AI platforms."
      />

      {/* Projects */}
      <section className="featured-section">
        <h2 className="section-title">Projects</h2>
        <div className="featured-grid">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              featured
            />
          ))}
        </div>

        {moreProjects.length > 0 && (
          <>
            {showMore && (
              <div className="featured-grid more-projects">
                {moreProjects.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                  />
                ))}
              </div>
            )}
            <div className="show-more-container">
              <button
                className="show-more-button"
                onClick={() => setShowMore(!showMore)}
              >
                {showMore ? (
                  <>Show Less <FiChevronUp /></>
                ) : (
                  <>Show More Projects <FiChevronDown /></>
                )}
              </button>
            </div>
          </>
        )}
      </section>
    </div>
  );
};

interface ProjectCardProps {
  project: Project;
  index: number;
  featured?: boolean;
}

const ProjectCard = ({
  project,
  index,
  featured = false,
}: ProjectCardProps) => {
  const { openChat } = useChat();

  return (
    <motion.div
      className={`project-card card-hover ${featured ? "featured-card" : ""}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {project.image ? (
        <div className="project-image">
          <img src={project.image} alt={project.name} />
        </div>
      ) : (
        <div className="project-image project-image--empty">
          <span>📦</span>
        </div>
      )}

      <div className="project-content">
        <div className="project-header">
          <div>
            <h3 className="project-name">{project.name}</h3>
            <p className="project-tagline">{project.tagline}</p>
          </div>
          {project.status && (
            <span className={`status-badge status-${project.status}`}>
              {project.status}
            </span>
          )}
        </div>

        {project.role && (
          <div className="project-meta">
            <span className="project-role">{project.role}</span>
          </div>
        )}

        <p className="project-description">{project.description}</p>

        {project.metrics && project.metrics.length > 0 && (
          <div className="project-metrics">
            {project.metrics.map((metric, i) => (
              <span key={i} className="metric-badge">
                {metric}
              </span>
            ))}
          </div>
        )}

        <div className="project-tech">
          <span className="tech-label">Tech:</span>
          <div className="tech-tags">
            {project.techStack.map((tech, i) => (
              <span key={i} className="tech-tag">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {project.highlights && project.highlights.length > 0 && (
          <div className="project-highlights">
            <span className="highlights-label">Highlights:</span>
            <ul className="highlights-list">
              {project.highlights.slice(0, 3).map((highlight, i) => (
                <li key={i}>{highlight}</li>
              ))}
            </ul>
          </div>
        )}

        {project.links && (
          <div className="project-links">
            {project.links.caseStudy && (
              <Link to={project.links.caseStudy} className="project-link">
                <FiFileText /> Case Study
              </Link>
            )}
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                <FiGithub /> GitHub
              </a>
            )}
            {project.links.live &&
              (project.id === "alfred-ai-assistant" ? (
                <button onClick={openChat} className="project-link">
                  <FiExternalLink /> Live
                </button>
              ) : (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <FiExternalLink /> Live
                </a>
              ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Work;
