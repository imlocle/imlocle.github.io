import { motion } from 'framer-motion';
import '../../styles/section/ProjectPreviewSection.css';
import ButtonLink from '../button/ButtonLink';
import { PROJECTS_SECTION } from '../../utils/constants';

const ProjectsPreviewSection = () => {
  return (
    <motion.section
      className="projects-preview"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <h2 className="section-title">Featured Projects</h2>
      <div className="projects-preview-grid">
        {PROJECTS_SECTION.map((project, index) => (
          <motion.div
            key={project.id}
            className="preview-card"
            initial={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10, boxShadow: 'var(--box-shadow-hover)' }}
            whileInView={{ opacity: 1, scale: 1 }}
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
    </motion.section>
  );
};

export default ProjectsPreviewSection;
