import { useLocation } from 'react-router-dom';
import Title from '../components/page/Title';
import '../styles/Services.css';
import { SERVICES } from '../utils/constants';
import CtaSection from '../components/section/CtaSection';
import MainCard from '../components/card/MainCard';
import { motion } from 'framer-motion';

const Services = () => {
  const { pathname } = useLocation();

  return (
    <div className="page-container">
      <Title pathname={pathname} title="Services" />
      <motion.div
        className="services-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="services-grid">
          {SERVICES.map((service, i) => (
            <MainCard
              key={i}
              title={service.title}
              description={service.description}
              icon={service.icon}
              highlights={service.highlights}
            />
          ))}
        </div>
      </motion.div>
      <CtaSection />
    </div>
  );
};

export default Services;
