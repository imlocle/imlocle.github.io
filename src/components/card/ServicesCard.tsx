import { motion } from 'framer-motion';

const ServicesCard = ({
  icon,
  title,
  description,
  highlights,
}: {
  icon: string;
  title: string;
  description: string;
  highlights: string[];
}) => {
  return (
    <motion.div
      className="service-card"
      initial={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -10, boxShadow: 'var(--box-shadow-hover)' }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
    >
      <div className="service-icon">{icon}</div>
      <h2 className="service-title">{title}</h2>
      <p className="service-description">{description}</p>
      <ul className="service-highlights">
        {highlights.map((highlight, index) => (
          <li key={index} className="service-highlight">
            {highlight}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default ServicesCard;
