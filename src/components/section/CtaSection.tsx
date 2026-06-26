import { motion } from "framer-motion";

import "@styles/components/section/CtaSection.css";
import ButtonLink from "@components/button/ButtonLink";

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
        <h2 className="cta-title">Get In Touch</h2>
        <p className="cta-text">
          Want to connect, collaborate, or chat about engineering? Drop me a
          message. For business inquiries, visit{" "}
          <a
            href="https://aethrasystems.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Aethra Systems
          </a>
          .
        </p>
        <ButtonLink
          link="/contact"
          text="Send a Message"
          className="highlight-primary-button"
        />
      </div>
    </motion.section>
  );
};

export default CtaSection;
