import { motion } from 'framer-motion';
import ButtonLink from '../button/ButtonLink';
import '../../styles/card/PreviewCard.css';

const PreviewCard = ({
  title,
  description,
  icon,
  image,
  link,
  linkText,
  buttonClassName = 'primary-button',
}: {
  title: string;
  description: string;
  icon?: string;
  image?: string;
  link?: string;
  linkText?: string;
  buttonClassName?: string;
}) => {
  return (
    <motion.div
      className="preview-card"
      initial={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -10, boxShadow: 'var(--box-shadow-hover)' }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
    >
      {image && <img src={image} alt={title} className="preview-card-image" />}
      {icon && <div className="preview-card-icon">{icon}</div>}
      <div className="preview-card-content">
        <h2 className="preview-card-title">{title}</h2>
        <p className="preview-card-description">{description}</p>
        {link && linkText && (
          <ButtonLink link={link} text={linkText} className={buttonClassName} />
        )}
      </div>
    </motion.div>
  );
};

export default PreviewCard;
