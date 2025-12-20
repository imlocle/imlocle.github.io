import { motion } from "framer-motion";
import { fadeUp } from "@utils/motionVariants";

import "@styles/components/card/PricingCard.css";

type PricingCardProps = {
  title: string;
  price: string;
  bestFor: string;
  details: string[];
  isFeatured?: boolean;
};

const PricingCard = ({
  title,
  price,
  bestFor,
  details,
  isFeatured = false,
}: PricingCardProps) => {
  return (
    <motion.div
      className={isFeatured ? "pricing-card featured" : "pricing-card"}
      variants={fadeUp}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -6, boxShadow: "var(--box-shadow-hover)" }}
    >
      <div className="pricing-top">
        <h4>{title}</h4>
        <p className="price">${price}</p>
        <p className="pricing-note">Best for: {bestFor}</p>
      </div>
      <ul>
        {details.map((detail, i) => (
          <li key={i}>{detail}</li>
        ))}
      </ul>
    </motion.div>
  );
};

export default PricingCard;
