import { Link } from "react-router-dom";
import "@styles/components/page/Footer.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GITHUB_LINK, LINKEDIN_LINK } from "@utils/constants";
import { ALFRED_CASE_STUDY_PATH } from "@data/alfred";
import { NEPTUNE_CASE_STUDY_PATH } from "@data/neptune";
import { ENVIA_CASE_STUDY_PATH } from "@data/envia";
import { CODE_INTELLIGENCE_CASE_STUDY_PATH } from "@data/codeIntelligence";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-container">
          {/* Brand */}
          <div className="footer-section footer-brand">
            <h3 className="footer-title">Loc Le</h3>
            <p className="footer-description">
              Senior Backend Engineer specializing in cloud infrastructure,
              serverless architectures, and AI platform development.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <div className="footer-links">
              <Link to="/work" className="footer-link">
                Work
              </Link>
              <Link to="/writing" className="footer-link">
                Writing
              </Link>
              <Link to="/consulting" className="footer-link">
                Consulting
              </Link>
              <Link to="/about" className="footer-link">
                About
              </Link>
              <Link to="/contact" className="footer-link">
                Contact
              </Link>
            </div>
          </div>

          {/* Featured Projects */}
          <div className="footer-section">
            <h3 className="footer-title">Featured Projects</h3>
            <div className="footer-links">
              <Link to={ENVIA_CASE_STUDY_PATH} className="footer-link">
                Envia
              </Link>
              <Link to={ALFRED_CASE_STUDY_PATH} className="footer-link">
                Alfred AI Assistant
              </Link>
              <Link to={NEPTUNE_CASE_STUDY_PATH} className="footer-link">
                Neptune App
              </Link>
              <Link
                to={CODE_INTELLIGENCE_CASE_STUDY_PATH}
                className="footer-link"
              >
                Code Intelligence
              </Link>
            </div>
          </div>

          {/* Connect */}
          <div className="footer-section">
            <h3 className="footer-title">Connect</h3>
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

        <div className="footer-bottom">
          <p>© {currentYear} Loc Le. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
