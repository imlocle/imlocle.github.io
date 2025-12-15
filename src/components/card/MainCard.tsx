import { motion } from "framer-motion";
import "../../styles/card/MainCard.css";
import downloadOnAppStore from "../../assets/download-on-the-app-store.svg";
import ButtonLink from "../button/ButtonLink";

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
      key={key}
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: key * 0.1 }}
      whileHover={{ y: -10, boxShadow: "var(--box-shadow-hover)" }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {icon && <div className="main-card-icon">{icon}</div>}
      {image && (
        <div className="main-card-image-container">
          <img src={image} alt={title} className="main-card-image" />
        </div>
      )}
      <div className="main-card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        {outcomes && <p className="main-card-outcomes">💡 {outcomes}</p>}
        {highlights && (
          <ul className="main-card-highlights">
            {highlights.map((highlight, i) => (
              <li key={i} className="main-card-highlight">
                {highlight}
              </li>
            ))}
          </ul>
        )}
        {technologies && (
          <ul className="main-card-technologies">
            {technologies.map((technology, i) => (
              <span key={i} className="main-card-technology">
                {technology}
              </span>
            ))}
          </ul>
        )}
        {link && (
          <div className="main-card-links">
            <div className="main-card-buttons">
              <ButtonLink link={link} text="View Project" target="_blank" />
              {appStore && (
                <a href={appStore} target="_blank" rel="noopener noreferrer">
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
