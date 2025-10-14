import { motion } from 'framer-motion';
import '../../styles/section/BaseSectionGrid.css';
import BaseCard from '../card/BaseCard';

const BaseSectionGrid = ({ cards, title }: { cards: any[], title?: string }) => {
    return (
        <motion.section
            className="base-section"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
        >
            {title && (
                <h2 className="base-section-title">{title}</h2>
            )}
            <div className="base-grid">
                {cards.map(service => (
                    <BaseCard
                        key={service.id}
                        img={service.image}
                        icon={service.icon}
                        title={service.title}
                        description={service.description}
                        highlights={service.highlights}
                        link={service.link}
                        linkText={service.linkText}
                        buttonClassName={service.buttonClassName}
                    />
                ))}
            </div>
        </motion.section>
    );
};

export default BaseSectionGrid;
