import { motion } from "framer-motion";

import "@styles/components/section/CtaSection.css";
import ButtonLink from "@components/button/ButtonLink";
import { CALENDLY_URL } from "@utils/constants";

const CtaSection = () => {
  return (
    <motion.section 
      className="contact-cta-section"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="contact-cta-card">
        <h2 className="cta-title">Let's Talk</h2>
        <p className="cta-text">
          If you have a challenging backend, cloud, or AI project and think my expertise would be
          valuable, let's schedule a discovery call.
        </p>
        <p className="cta-subtext">
          Please include: brief project description, technical challenges, timeline, and how you
          found me.
        </p>
        <ButtonLink
          link={CALENDLY_URL}
          text="Schedule Discovery Call"
          className="highlight-primary-button"
          target="_blank"
        />
        <p className="response-time">I respond within 48 hours</p>
      </div>
    </motion.section>
  );
};

export default CtaSection;
