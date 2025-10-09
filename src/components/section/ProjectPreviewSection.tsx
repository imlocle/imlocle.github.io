import { motion } from 'framer-motion';
import neptuneLogo from '../../assets/neptune-logo.svg';
import llLogo from '../../assets/ll-logo.png';
import alfredLogo from '../../assets/alfred-logo.png';
import '../../styles/section/ProjectPreviewSection.css';
import ButtonLink from '../button/ButtonLink';

const projects = [
  {
    id: 1,
    title: 'Neptune - Be Yourself',
    description:
      'A video-based social media platform for artists, entertainers, and dreamers.',
    image: neptuneLogo,
    link: 'https://www.theneptuneapp.com/',
  },
  {
    id: 2,
    title: 'Portfolio Website',
    description: 'My personal portfolio website that you are viewing now.',
    image: llLogo,
    link: 'https://github.com/imlocle/imlocle.github.io',
  },
  {
    id: 3,
    title: 'Alfred - AI Chatbot',
    description: 'An AI chatbot using AWS Bedrock and Python.',
    image: alfredLogo,
    link: 'https://github.com/imlocle/alfred-chatbot',
  },
];

const ProjectsPreviewSection = () => {
  return (
    <section className="projects-preview">
      <h2 className="section-title">Featured Projects</h2>
      <div className="projects-preview-grid">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="preview-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="preview-image"
            />
            <h3 className="preview-title">{project.title}</h3>
            <p className="preview-description">{project.description}</p>
            <ButtonLink
              link="/portfolio"
              text="Learn More ->"
              className="arrow-link"
            ></ButtonLink>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsPreviewSection;
