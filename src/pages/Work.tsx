import { motion } from 'framer-motion';
import '../styles/Work.css';
import { useLocation } from 'react-router-dom';
import neptuneLogo from '../assets/neptune-logo.svg';
import llLogo from '../assets/ll-logo.png';
import alfredLogo from "../assets/alfred-logo.png";
import downloadOnAppStore from '../assets/download-on-the-app-store.svg';
import GetInTouch from '../components/GetInTouch';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  link?: string;
  appStore?: string;
}

const Work = () => {
  const { pathname } = useLocation();
  const projects: Project[] = [
    {
      id: 1,
      title: 'Neptune - Be Yourself',
      description: 'A video-based social media platform for artists, entertainers, and dreamers.',
      technologies: ['AWS SAM', 'Python', 'TypeScript', "Node.js", "Terraform"],
      image: neptuneLogo,
      link: "https://www.theneptuneapp.com/",
      appStore: "https://apps.apple.com/us/app/neptune-be-yourself/id6745182224"
    },
    {
      id: 2,
      title: 'Portfolio Website',
      description: 'My current personal portfolio website that you are seeing',
      technologies: ["React",'TypeScript', "Node.js", 'Vite', 'GenAI', "TRAE"],
      image: llLogo,
      link: "https://github.com/imlocle/imlocle.github.io",
    },
    {
      id: 3,
      title: 'Alfred - AI Chatbot',
      description: 'An AI chatbot using AWS Bedrock and Python that answers questions about Loc.',
      technologies: ["AWS Bedrock", "Lambda", "Python", "S3", "Terraform"],
      image: alfredLogo,
      link: "https://github.com/imlocle/alfred-chatbot",
    },
    // {
    //   id: 4,
    //   title: 'Data Analytics Pipeline',
    //   description: 'An ETL pipeline for processing and analyzing large datasets with visualization capabilities.',
    //   technologies: ['Python', 'Apache Airflow', 'Pandas', 'PostgreSQL'],
    //   // image: 'project4.jpg'
    // }
  ];

  return (
    <div className="work-container">
      <motion.div 
        key={pathname}
        className="work-header"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1 
          className="work-title"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          My Work
        </motion.h1>
        <motion.div 
          className="title-underline"
          initial={{ width: 0 }}
          animate={{ width: '80px' }}
          transition={{ delay: 0.5, duration: 0.8 }}
        />
        <motion.p 
          className="work-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          Here are some of the projects I've worked on
        </motion.p>
      </motion.div>
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div 
            key={pathname + project.id}
            className="project-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -10, boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}
          >
            <div className="project-image-container">
              {project.image ? (
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="project-image" 
                />
              ) : (
                <div className="project-image-placeholder">
                  <span>{project.title}</span>
                </div>
              )}
            </div>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                {project.link && (
                  <a
                    href={project.link}
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                  </a>
                )}
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
            </div>
          </motion.div>
        ))}
      </div>
      <GetInTouch />
    </div>
  );
};

export default Work;