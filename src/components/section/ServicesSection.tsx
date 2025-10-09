import { motion } from 'framer-motion';
import SkillCard from '../SkillCard';
import { FaBrain, FaCloud } from 'react-icons/fa';
import '../../styles/section/ServicesSection.css';
import { FaGear } from 'react-icons/fa6';

const ServicesSection = () => {
  return (
    <motion.section
      className="services-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <h2 className="section-title">Services</h2>
      <div className="services-grid">
        <SkillCard
          icon={FaBrain}
          title="AI Product Integration"
          description="I build scalable AI-powered backend systems for startups."
          link="/services#ai-product-integration"
          linkText="Learn More ->"
          buttonClassName="arrow-link"
        />
        <SkillCard
          icon={FaCloud}
          title="Backend MVP in 2 weeks"
          description="Fast, production-ready AWS backend architecture for startups. Serverless, scalable, and cost-efficient."
          link="/services#backend-mvp-in-2-weeks"
          linkText="Learn More ->"
          buttonClassName="arrow-link"
        />
        <SkillCard
          icon={FaGear}
          title="Cloud Modernization"
          description="Refactor or migrate existing infrastructure to modern serverless solutions for better performance and lower costs."
          link="/services#cloud-modernization"
          linkText="Learn More ->"
          buttonClassName="arrow-link"
        />
      </div>
    </motion.section>
  );
};

export default ServicesSection;
