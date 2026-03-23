import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiGithub, FiExternalLink, FiFileText } from 'react-icons/fi';

import { PROJECTS, type Project } from '../data/projects';
import '@styles/pages/Work.css';
import { useChat } from '@context/ChatContext';
import TitleHeader from '@/components/header/TitleHeader';

type FilterType = 'all' | 'production' | 'opensource' | 'client';

const Work = () => {
  const [filter, setFilter] = useState<FilterType>('all');

  const filteredProjects = PROJECTS.filter(project => {
    if (filter === 'all') return true;
    return project.category === filter;
  });

  const featuredProjects = PROJECTS.filter(p => p.featured);

  return (
    <div className="work-container">
      <TitleHeader
        title="Technical Work"
        subtitle="Production systems, open source projects, and client work spanning backend architecture, cloud infrastructure, and AI platforms."
      />

      {/* Featured Projects */}
      <section className="featured-section">
        <h2 className="section-title">Featured Projects</h2>
        <div className="featured-grid">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} featured />
          ))}
        </div>
      </section>

      {/* All Projects with Filter */}
      <section className="all-projects-section">
        <div className="filter-header">
          <h2 className="section-title">All Projects</h2>
          <div className="filter-buttons">
            <FilterButton
              active={filter === 'all'}
              onClick={() => setFilter('all')}
              label="All"
            />
            <FilterButton
              active={filter === 'production'}
              onClick={() => setFilter('production')}
              label="Production"
            />
            <FilterButton
              active={filter === 'opensource'}
              onClick={() => setFilter('opensource')}
              label="Open Source"
            />
            <FilterButton
              active={filter === 'client'}
              onClick={() => setFilter('client')}
              label="Client Work"
            />
          </div>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
};

interface FilterButtonProps {
  active: boolean;
  onClick: () => void;
  label: string;
}

const FilterButton = ({ active, onClick, label }: FilterButtonProps) => (
  <button
    className={`filter-button ${active ? 'active' : ''}`}
    onClick={onClick}
  >
    {label}
  </button>
);

interface ProjectCardProps {
  project: Project;
  index: number;
  featured?: boolean;
}

const ProjectCard = ({ project, index, featured = false }: ProjectCardProps) => {
  const { openChat } = useChat();

  return (
    <motion.div
      className={`project-card ${featured ? 'featured-card' : ''}`}
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

        {project.role && project.period && (
          <div className="project-meta">
            <span className="project-role">{project.role}</span>
            <span className="project-period">{project.period}</span>
          </div>
        )}

        <p className="project-description">{project.description}</p>

        {project.metrics && project.metrics.length > 0 && (
          <div className="project-metrics">
            {project.metrics.map((metric, i) => (
              <span key={i} className="metric-badge">{metric}</span>
            ))}
          </div>
        )}

        <div className="project-tech">
          <span className="tech-label">Tech:</span>
          <div className="tech-tags">
            {project.techStack.slice(0, 5).map((tech, i) => (
              <span key={i} className="tech-tag">{tech}</span>
            ))}
            {project.techStack.length > 5 && (
              <span className="tech-tag more">+{project.techStack.length - 5}</span>
            )}
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
            {project.links.live && (
              project.id === 'alfred-ai-assistant' ? (
                <button
                  onClick={openChat}
                  className="project-link"
                >
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
              )
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Work;
