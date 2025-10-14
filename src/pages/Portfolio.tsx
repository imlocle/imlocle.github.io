import { motion } from 'framer-motion';
import '../styles/Portfolio.css';
import { useLocation } from 'react-router-dom';
import Title from '../components/page/Title';
import ButtonLink from '../components/button/ButtonLink';
import downloadOnAppStore from '../assets/download-on-the-app-store.svg';
import CtaSection from '../components/section/CtaSection';
import { PROJECTS } from '../utils/constants';

const Portfolio = () => {
  const { pathname } = useLocation();

  return (
    <div className="page-container">
      <Title pathname={pathname} title="Portfolio" />

      <div className="portfolio-grid">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={project.id}
            className="portfolio-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}
          >
            {project.image && (
              <div className="portfolio-image-container">
                <img
                  src={project.image}
                  alt={project.title}
                  className="portfolio-image"
                />
              </div>
            )}
            <div className="portfolio-content">
              <h3 className="portfolio-title">{project.title}</h3>
              <p className="portfolio-description">{project.description}</p>
              {project.outcomes && (
                <p className="portfolio-outcomes">💡 {project.outcomes}</p>
              )}
              <div className="portfolio-tech">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="portfolio-links">
                {project.link && (
                  <div className="portfolio-buttons">
                    <ButtonLink link={project.link} text="View Project" />
                    {project.appStore && (
                      <a
                        href={project.appStore}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={downloadOnAppStore}
                          alt="Download on the App Store"
                          className="app-store-badge"
                        />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <CtaSection />
    </div>
  );
};

export default Portfolio;
