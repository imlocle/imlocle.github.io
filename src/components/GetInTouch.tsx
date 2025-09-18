import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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
      <Link to="/contact" className="contact-button">
        Get In Touch
      </Link>
    </motion.div>
  );
};

export default GetInTouch;
