import { motion } from "framer-motion";
import "@styles/components/section/PreviewSectionGrid.css";
import PreviewCard from "@components/card/PreviewCard";
import type { PreviewCardData } from "@/models/card";

const PreviewGridSection = ({
  title,
  cards,
}: {
  title: string;
  cards: PreviewCardData[];
}) => {
  return (
    <motion.section
      className="preview-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <h2 className="section-title">{title}</h2>
      <div className="preview-grid">
        {cards.map((service, i) => (
          <PreviewCard
            key={i}
            image={service.image}
            icon={service.icon}
            title={service.title}
            description={service.description}
            link={service.link}
          />
        ))}
      </div>
    </motion.section>
  );
};

export default PreviewGridSection;
