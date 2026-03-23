import { motion } from "framer-motion";
import "@styles/components/header/TitleHeader.css";

type TitleHeaderProps = {
  title: string;
  subtitle: string;
};

const TitleHeader = ({ title, subtitle }: TitleHeaderProps) => {
  return (
    <section className="header-hero">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="header-title">{title}</h1>
        <p className="header-subtitle">{subtitle}</p>
      </motion.div>
    </section>
  );
};

export default TitleHeader;
