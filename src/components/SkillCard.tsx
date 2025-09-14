import { motion } from 'framer-motion';
import type { IconType } from 'react-icons';

const SkillCard = ({ icon, title, description }: { icon: IconType; title: string; description: string }) => {
  return (
    <motion.div 
        className="skill-card"
        whileHover={{ y: -10, boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
    >
        <div className="skill-icon">{icon({})}</div>
        <h3>{title}</h3>
        <p>{description}</p>
    </motion.div>
  );
};

export default SkillCard;