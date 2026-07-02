import { motion } from "framer-motion";

import "@styles/components/card/PreviewCard.css";
import ButtonLink from "@components/button/ButtonLink";

type PreviewCardProps = {
  title: string;
  description: string;
  icon?: string;
  image?: string;
  link?: string;
};

const PreviewCard = ({
  title,
  description,
  icon,
  image,
  link,
}: PreviewCardProps) => {
  return (
    <motion.div
      className="preview-card"
      initial={{ opacity: 0, y: 18 }}
      transition={{ duration: 0.45 }}
      whileHover={{ y: -6, boxShadow: "var(--box-shadow-hover)" }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
    >
      {(image || icon) && (
        <div className="preview-card-top">
          {image && (
            <div className="preview-card-image-wrap">
              <img src={image} alt={title} className="preview-card-image" />
            </div>
          )}
          {icon && <div className="preview-card-icon">{icon}</div>}
        </div>
      )}

      <div className="preview-card-content">
        <h3 className="preview-card-title">{title}</h3>
        <p className="preview-card-description">{description}</p>

        {link && (
          <div className="preview-card-footer">
            <ButtonLink
              link={link}
              text="See details →"
              className="arrow-link"
            />
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default PreviewCard;
