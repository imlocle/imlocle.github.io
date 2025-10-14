import { motion } from 'framer-motion';
import ButtonLink from '../button/ButtonLink';
import '../../styles/card/BaseCard.css';

const BaseCard = ({
    title,
    description,
    highlights,
    icon,
    img,
    link,
    linkText,
    buttonClassName = 'primary-button',
}: {
    title: string;
    description: string;
    highlights?: string[];
    icon?: string;
    img?: string;
    link?: string;
    linkText?: string;
    buttonClassName?: string;
}) => {
    return (
        <motion.div
            className="base-card"
            initial={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -10, boxShadow: 'var(--box-shadow-hover)' }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
        >
            {img && <img src={img} alt={title} className="base-card-image" />}
            {icon && <div className="base-card-icon">{icon}</div>}
            <h2 className="base-card-title">{title}</h2>
            <p className="base-card-desc">{description}</p>
            {highlights && (
                <ul className="base-card-highlights">
                    {highlights.map((highlight, index) => (
                        <li key={index} className="base-card-highlight">
                            {highlight}
                        </li>
                    ))}
                </ul>
            )}
            {link && linkText && (
                <ButtonLink link={link} text={linkText} className={buttonClassName} />
            )}
        </motion.div>
    );
}

export default BaseCard;
