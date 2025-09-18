import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CompanyCard = ({
  link,
  imgLogo,
  alt,
}: {
  link: string;
  imgLogo: string;
  alt: string;
}) => {
  return (
    <Link to={link} target="_blank" rel="noopener noreferrer">
      <motion.div
        className="company-logo"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        whileHover={{ y: -10, boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}
      >
        <img src={imgLogo} alt={alt} />
      </motion.div>
    </Link>
  );
};

export default CompanyCard;
