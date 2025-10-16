import { motion } from 'framer-motion';
import '../../styles/section/PreviewSectionGrid.css';
import PreviewCard from '../card/PreviewCard';

const PreviewSectionGrid = ({
  cards,
  title,
}: {
  cards: any[];
  title?: string;
}) => {
  return (
    <motion.section
      className="preview-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {title && <h2 className="preview-section-title">{title}</h2>}
      <div className="preview-grid">
        {cards.map(service => (
          <PreviewCard
            key={service.id}
            image={service.image}
            icon={service.icon}
            title={service.title}
            description={service.description}
            link={service.link}
            linkText={service.linkText}
            buttonClassName={service.buttonClassName}
          />
        ))}
      </div>
    </motion.section>
  );
};

export default PreviewSectionGrid;
