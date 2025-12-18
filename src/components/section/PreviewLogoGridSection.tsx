import { motion } from "framer-motion";
import CompanyCard from "../card/CompanyCard";
import "@styles/components/section/PreviewLogoGridSection.css";
import type { ICompanyCard } from "@/models/interfaces";

const PreviewLogoGridSection = ({
  cards,
  title,
}: {
  cards: ICompanyCard[];
  title: string;
}) => {
  return (
    <motion.section
      className="preview-logo-section"
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <h2 className="section-title">{title}</h2>
      <div className="preview-logo-grid">
        {cards.map((card, index) => (
          <CompanyCard
            key={index}
            link={card.link}
            imgLogo={card.imageLogo}
            alt={card.alt}
          />
        ))}
      </div>
    </motion.section>
  );
};

export default PreviewLogoGridSection;
