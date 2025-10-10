import { motion } from 'framer-motion';
import ButtonLink from '../button/ButtonLink';
import '../../styles/card/ServicesSectionCard.css';

const ServicesSectionCard = ({
  icon,
  title,
  description,
  link,
  linkText,
  buttonClassName = 'primary-button',
}: {
  icon: string;
  title: string;
  description: string;
  link?: string;
  linkText?: string;
  buttonClassName?: string;
}) => {
  return (
    <motion.div
      className="service-sec-card"
      initial={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -10, boxShadow: 'var(--box-shadow-hover)' }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
    >
      <div className="service-sec-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
      {link && linkText && (
        <ButtonLink link={link} text={linkText} className={buttonClassName} />
      )}
    </motion.div>
  );
};

export default ServicesSectionCard;
