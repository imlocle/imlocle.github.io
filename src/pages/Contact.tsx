import { motion } from "framer-motion";
import ContactForm from "../components/ContactForm";
import "../styles/Contact.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { CALENDLY_URL, GITHUB_LINK, LINKEDIN_LINK } from "../utils/constants";
import { useLocation } from "react-router-dom";
import Title from "../components/page/Title";

const Contact = () => {
  const { pathname } = useLocation();

  const handleCalendly = () => {
    window.open(CALENDLY_URL, "_blank");
  };

  return (
    <div id="contact" className="page-container">
      <Title pathname={pathname} title="Contact Me" />

      <div className="contact-content">
        <motion.div
          className="connect-section"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <h2 className="contact-title">Let's Talk</h2>
          <p className="card-description">
            Whether you have a project in mind, a question about my work, or
            just want to say hello, I'd love to hear from you.
          </p>
          <p className="card-description">
            Fill out the form on the right to send an email, or schedule a 30
            minute meeting with me, using the Calendly button below.
          </p>
          <div className="contact-details">
            <div className="contact-item">
              <h3>Socials:</h3>
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
          </div>
          <div>
            <button
              type="submit"
              onClick={handleCalendly}
              className="submit-button"
            >
              Book A Consultation
            </button>
          </div>
        </motion.div>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
