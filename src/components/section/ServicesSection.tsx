import { motion } from 'framer-motion';
import ServicesSectionCard from '../card/ServicesSectionCard';
import '../../styles/section/ServicesSection.css';
import { SERVICES_SECTION } from '../../utils/constants';

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
        {SERVICES_SECTION.map(service => (
          <ServicesSectionCard
            key={service.id}
            icon={service.icon}
            title={service.title}
            description={service.description}
            link={service.link}
            linkText={service.linkText}
            buttonClassName={service.buttonClassName}
          />
        ))}
      </div>
    </motion.section>
  );
};

export default ServicesSection;
