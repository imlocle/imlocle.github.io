import { motion } from 'framer-motion';
import ButtonLink from '../button/ButtonLink';
import '../../styles/section/CtaSection.css';

const CtaSection = () => {
  return (
    <motion.section
      className="cta-section"
      initial={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -10, boxShadow: 'var(--box-shadow-hover)' }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
    >
      <h2>🚀 Let's Build Something Together</h2>
      <p>
        Whether you need a fast MVP, AI integration, or a full cloud migration —
        I can help bring your vision to life with speed and reliability.
      </p>
      <ButtonLink link="/contact" text="Book a Call" />
    </motion.section>
  );
};

export default CtaSection;
