import { motion } from 'framer-motion';
import ButtonLink from './button/ButtonLink';

const GetInTouch = () => {
  return (
    <motion.div
      className="contact-cta"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2>Interested in working together?</h2>
      <p>I'm always open to discussing new projects and opportunities.</p>
      <ButtonLink link="/contact" text="Get In Touch" />
    </motion.div>
  );
};

export default GetInTouch;
