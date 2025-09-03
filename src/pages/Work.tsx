import { motion } from 'framer-motion';
import '../styles/Work.css';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link?: string;
}

const Work = () => {
  // Sample projects data - replace with your actual projects
  const projects: Project[] = [
    {
      id: 1,
      title: 'The Neptune App',
      description: 'A scalable backend system for an e-commerce platform with inventory management, order processing, and payment integration.',
      technologies: ['AWS', 'Node.js', 'Python', 'TypeScript'],
      image: 'project1.jpg'
    },
    {
      id: 2,
      title: 'Alfred: The Chatbot',
      description: 'A real-time messaging API with WebSocket integration, message persistence, and user presence tracking.',
      technologies: ['Python', 'Django', 'PostgreSQL', 'WebSockets'],
      image: 'project2.jpg'
    },
    {
      id: 3,
      title: 'Content Management System',
      description: 'A headless CMS with a RESTful API for content delivery, user management, and media handling.',
      technologies: ['Java', 'Spring Boot', 'MySQL', 'AWS S3'],
      image: 'project3.jpg'
    },
    {
      id: 4,
      title: 'Data Analytics Pipeline',
      description: 'An ETL pipeline for processing and analyzing large datasets with visualization capabilities.',
      technologies: ['Python', 'Apache Airflow', 'Pandas', 'PostgreSQL'],
      image: 'project4.jpg'
    }
  ];

  return (
    <div className="work-container">
      <motion.div 
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
            key={project.id}
            className="project-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -10, boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}
          >
            <div className="project-image-container">
              <div className="project-image-placeholder">
                <span>{project.title}</span>
              </div>
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
                <a href={project.link || '#'} className="project-link" target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* <motion.div 
        className="contact-cta"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>Interested in working together?</h2>
        <p>I'm always open to discussing new projects and opportunities.</p>
        <a href="#contact" className="contact-button">Get In Touch</a>
      </motion.div> */}
    </div>
  );
};

export default Work;