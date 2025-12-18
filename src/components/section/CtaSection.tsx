import { motion } from "framer-motion";
import ButtonLink from "../button/ButtonLink";
import "../../styles/section/CtaSection.css";
import { CALENDLY_URL } from "../../utils/constants";

const CtaSection = () => {
  return (
    <motion.section
      className="cta-section"
      initial={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -10, boxShadow: "var(--box-shadow-hover)" }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
    >
      <h2>Let's ship your backend in 14 days</h2>
      <p>
        Book a free 30-minute build call. I'll map the backend you need, give you a clear
        timeline, and tell you the exact next steps—no pressure.
      </p>
      <ButtonLink link={CALENDLY_URL} text="Book a Free Build Call" target="_blank" />

    </motion.section>
  );
};

export default CtaSection;
