import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import "@styles/components/card/CompanyCard.css";

type CompanyCardProps = {
  link: string;
  imgLogo: string;
  alt: string;
};

const CompanyCard = ({ link, imgLogo, alt }: CompanyCardProps) => {
  return (
    <Link to={link} target="_blank" rel="noopener noreferrer">
      <motion.div
        className="company-logo-card"
        initial={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5 }}
        whileHover={{ y: -10, boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)" }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <img src={imgLogo} alt={alt} />
      </motion.div>
    </Link>
  );
};

export default CompanyCard;
