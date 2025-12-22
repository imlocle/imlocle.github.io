import { motion } from "framer-motion";

import "@styles/components/card/MainCard.css";
import downloadOnAppStore from "@assets/download-on-the-app-store.svg";
import ButtonLink from "@components/button/ButtonLink";

type MainCardProps = {
  index?: number;
  id?: string;
  title: string;
  description: string;
  icon?: string;
  image?: string;
  highlights?: string[];
  outcomes?: string;
  link?: string;
  ctaLabel?: string;
  appStore?: string;
  technologies?: string[];
  target?: "_blank" | "_self";
};

const MainCard = ({
  index = 0,
  id,
  title,
  description,
  icon,
  image,
  highlights,
  outcomes,
  link,
  ctaLabel,
  appStore,
  technologies,
  target,
}: MainCardProps) => {
  return (
    <motion.article
      id={id}
      className="main-card"
      initial={{ opacity: 0, y: 24 }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      whileHover={{ y: -6, boxShadow: "var(--box-shadow-hover)" }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {(image || icon) && (
        <div className="main-card-media">
          {image && (
            <div className="main-card-image-container">
              <img src={image} alt={title} className="main-card-image" />
            </div>
          )}
          {!image && icon && <div className="main-card-icon">{icon}</div>}
        </div>
      )}

      <div className="main-card-content">
        <header className="main-card-header">
          <h2 className="main-card-title">{title}</h2>
          <p className="main-card-description">{description}</p>
        </header>

        {outcomes && <p className="main-card-outcomes">💡 {outcomes}</p>}

        {highlights && highlights.length > 0 && (
          <ul className="main-card-highlights">
            {highlights.map((highlight, i) => (
              <li key={i} className="main-card-highlight">
                {highlight}
              </li>
            ))}
          </ul>
        )}

        <footer className="main-card-footer">
          {technologies && technologies.length > 0 && (
            <ul className="main-card-technologies">
              {technologies.map((technology, i) => (
                <li key={i} className="main-card-technology">
                  {technology}
                </li>
              ))}
            </ul>
          )}

          {link && (
            <div className="main-card-links">
              <div className="main-card-buttons">
                <ButtonLink
                  link={link}
                  text={ctaLabel || "View Project"}
                  target={target}
                />
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
        </footer>
      </div>
    </motion.article>
  );
};

export default MainCard;
