import { motion } from 'framer-motion';
import '../styles/Portfolio.css';
import { useLocation } from 'react-router-dom';
import Title from '../components/page/Title';
import neptuneLogo from '../assets/neptune-logo.svg';
import llLogo from '../assets/ll-logo.png';
import alfredLogo from '../assets/alfred-logo.png';
import ButtonLink from '../components/button/ButtonLink';
import downloadOnAppStore from '../assets/download-on-the-app-store.svg';
import Cta from '../components/Cta';

interface Project {
  id: number;
  title: string;
  description: string;
  outcomes?: string;
  technologies: string[];
  image?: string;
  link?: string;
  appStore?: string;
}

const Portfolio = () => {
  const { pathname } = useLocation();
  const projects: Project[] = [
    {
      id: 1,
      title: 'Neptune - Be Yourself',
      description:
        'A video-based social media platform for artists, entertainers, and dreamers.',
      outcomes:
        'Designed and deployed a scalable AWS backend capable of handling millions of video uploads daily, improving system reliability and performance.',
      technologies: ['AWS SAM', 'Python', 'TypeScript', 'Node.js', 'Terraform'],
      image: neptuneLogo,
      link: 'https://www.theneptuneapp.com/',
      appStore:
        'https://apps.apple.com/us/app/neptune-be-yourself/id6745182224',
    },
    {
      id: 2,
      title: 'Portfolio Website',
      description: 'My personal portfolio website that you are viewing now.',
      outcomes:
        'Built a fully responsive React + Vite site with AI-powered project previews, enabling clients to quickly understand my consulting capabilities.',
      technologies: ['React', 'TypeScript', 'Node.js', 'Vite', 'GenAI', 'TRAE'],
      image: llLogo,
      link: 'https://github.com/imlocle/imlocle.github.io',
    },
    {
      id: 3,
      title: 'Alfred - AI Chatbot',
      description:
        'An AI chatbot using AWS Bedrock and Python that answers questions about me.',
      outcomes:
        'Built a fully functional AI chatbot using AWS Bedrock, implementing a custom rate limiter to efficiently handle multiple users and ensure stable performance.',
      technologies: ['AWS Bedrock', 'Lambda', 'Python', 'S3', 'Terraform'],
      image: alfredLogo,
      link: 'https://github.com/imlocle/alfred-chatbot',
    },
  ];

  return (
    <div className="page-container">
      <Title pathname={pathname} title="Portfolio" />

      <div className="portfolio-grid">
        {projects.map((project, index) => (
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

      <Cta />
    </div>
  );
};

export default Portfolio;
