import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

import "@styles/pages/Contact.css";
import ButtonLink from "@components/button/ButtonLink";
import ContactForm from "@components/form/ContactForm";
import Title from "@components/page/Title";
import { CALENDLY_URL, GITHUB_LINK, LINKEDIN_LINK } from "@utils/constants";

const Contact = () => {
  const { pathname, hash } = useLocation();

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
    <div id="contact" className="page-container">
      <Title pathname={pathname} title="Book a Free Build Call" />

      <div className="contact-grid">
        <motion.section
          className="contact-card"
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.6 }}
        >
          <h2 className="contact-card-title">Fastest way to work together</h2>

          <p className="card-description">
            Book a <strong>free 30-minute build call</strong>.
            {
              " I'll map the backend you need (APIs, auth, database, AWS deployment) and give you a clear 14-day plan."
            }
          </p>

          <div className="contact-callout">
            <div className="contact-callout-title">
              {"On the call, you'll get:"}
            </div>
            <ul className="contact-bullets">
              <li>{"A clear scope (what we will/won't build)"}</li>
              <li>Architecture + tech choices (AWS, DB, auth)</li>
              <li>Timeline + next steps to ship</li>
            </ul>
          </div>

          <div className="contact-actions">
            <ButtonLink
              link={CALENDLY_URL}
              text="Book a Free 30-Min Build Call"
              className="highlight-primary-button"
              target="_blank"
            />
            <Link
              className="contact-link"
              to={{ pathname: "/contact", hash: "#message" }}
            >
              Prefer email? Send a message
              <span className="contact-link-arrow" aria-hidden="true" />
            </Link>
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

        {/* Right column: make it a true card too so both columns align */}
        <section id="message" className="contact-card contact-card--form">
          <h2 className="contact-card-title">Send a quick message</h2>
          <p className="contact-card-subtitle">
            {
              "Tell me what you're building and what you need (API, auth, database, AWS). I'll reply with a recommended scope and next steps."
            }
          </p>
          <ContactForm />
        </section>
      </div>
    </div>
  );
};

export default Contact;
