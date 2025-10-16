import { motion } from 'framer-motion';
import '../../styles/card/MainCard.css';
import downloadOnAppStore from '../../assets/download-on-the-app-store.svg';
import ButtonLink from '../button/ButtonLink';

const MainCard = ({
    key,
    title,
    description,
    icon,
    image,
    highlights,
    outcomes,
    link,
    appStore,
    technologies,
}: {
    key: number;
    title: string;
    description: string;
    icon?: string;
    image?: string;
    highlights?: string[];
    outcomes?: string;
    link?: string;
    appStore?: string;
    technologies?: string[];
}) => {
    return (
        <motion.div
            className="main-card"
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: key * 0.1 }}
            whileHover={{ y: -10, boxShadow: 'var(--box-shadow-hover)' }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            {icon && <div className="main-icon">{icon}</div>}
            {image && (
                <div className="main-image-container">
                    <img
                        src={image}
                        alt={title}
                        className="main-image"
                    />
                </div>
            )}
            <div className="main-content">
                <h2 className="main-title">{title}</h2>
                <p className="main-description">{description}</p>
                {outcomes && (
                    <p className="main-outcomes">💡 {outcomes}</p>
                )}
                {highlights && (
                    <ul className="main-highlights">
                        {highlights.map((highlight, i) => (
                            <li key={i} className="main-highlight">
                                {highlight}
                            </li>
                        ))}
                    </ul>
                )}
                {technologies && (
                    <ul className="main-technologies">
                        {technologies.map((technology, i) => (
                            <span key={i} className="main-technology">
                                {technology}
                            </span>
                        ))}
                    </ul>
                )}
                {link && (
                    <div className="main-links">
                        <div className="main-buttons">
                            <ButtonLink link={link} text="View Project" />
                            {appStore && (
                                <a
                                    href={appStore}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src={downloadOnAppStore}
                                        alt="Download on App Store"
                                        className="app-store-button"
                                    />
                                </a>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </motion.div>
    );
};

export default MainCard;
