import { motion } from 'framer-motion';
import ButtonLink from './button/ButtonLink';
import '../styles/Cta.css';

const Cta = () => {
  return (
    <motion.div
      className="cta"
      whileHover={{ y: -10, boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <h2>🚀 Let's Build Something Together</h2>
      <p>
        Whether you need a fast MVP, AI integration, or a full cloud migration —
        I can help bring your vision to life with speed and reliability.
      </p>
      <ButtonLink link="/contact" text="Book a Call" />
    </motion.div>
  );
};

export default Cta;
