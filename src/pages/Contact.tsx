import { useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useLocation } from "react-router-dom";

import "@styles/pages/Contact.css";
import ContactForm from "@components/form/ContactForm";
import TitleHeader from "@/components/header/TitleHeader";
import { GITHUB_LINK, LINKEDIN_LINK } from "@utils/constants";

const Contact = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const timeout = window.setTimeout(() => {
      const el = document.querySelector(hash);
      if (!el) return;
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 60);

    return () => window.clearTimeout(timeout);
  }, [hash]);

  return (
    <div className="contact-container">
      <TitleHeader
        title="Contact"
        subtitle="Want to connect, collaborate, or discuss ideas? Send me a message."
      />

      {/* Main Content - Light Background */}
      <section className="contact-main">
        <div className="contact-grid">
          <motion.section
            className="contact-card"
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.6 }}
          >
            <h2 className="contact-card-title">Let's Connect</h2>

            <p className="card-description">
              I'm always open to conversations about{" "}
              <strong>engineering</strong>, <strong>collaborations</strong>, or
              interesting projects. For business inquiries, head to{" "}
              <a
                href="https://aethrasystems.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Aethra Systems
              </a>
              .
            </p>

            <div className="contact-callout">
              <div className="contact-callout-title">Reach out about:</div>
              <ul className="contact-bullets">
                <li>Collaboration or open source projects</li>
                <li>Speaking, writing, or community</li>
                <li>General networking or questions</li>
              </ul>
            </div>

            <div className="contact-divider" />

            <div className="contact-socials">
              <h3 className="contact-socials-title">Socials</h3>
              <div className="social-links">
                <a
                  href={GITHUB_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <FaGithub className="social-icon" /> GitHub
                </a>
                <a
                  href={LINKEDIN_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <FaLinkedin className="social-icon" /> LinkedIn
                </a>
              </div>
            </div>
          </motion.section>

          <section id="message" className="contact-card contact-card--form">
            <h2 className="contact-card-title">Send a Message</h2>
            <p className="contact-card-subtitle">
              {
                "Drop me a note — whether it's a question, an idea, or just to say hi. I'll get back to you."
              }
            </p>
            <ContactForm />
          </section>
        </div>
      </section>
    </div>
  );
};

export default Contact;
