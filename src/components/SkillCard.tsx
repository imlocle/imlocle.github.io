import { motion } from 'framer-motion';
import type { IconType } from 'react-icons';
import ButtonLink from './button/ButtonLink';
import '../styles/card/SkillCard.css';

const SkillCard = ({
  icon,
  title,
  description,
  link,
  linkText
}: {
  icon: IconType;
  title: string;
  description: string;
  link?: string;
  linkText?: string;
}) => {
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
      {link && linkText && <ButtonLink link={link} text={linkText} />}
    </motion.div>
  );
};

export default SkillCard;
