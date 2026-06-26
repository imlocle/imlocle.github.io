import { Link } from "react-router-dom";
import "@styles/components/page/Footer.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GITHUB_LINK, LINKEDIN_LINK } from "@utils/constants";
import { ALFRED_CASE_STUDY_PATH } from "@data/alfred";
import { NEPTUNE_CASE_STUDY_PATH } from "@data/neptune";
import { ENVIA_CASE_STUDY_PATH } from "@data/envia";
import { FILESLING_CASE_STUDY_PATH } from "@data/filesling";

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
              CTO & Cofounder at Aethra Systems. Building intelligent systems
              with cloud architecture, AI, and serverless infrastructure.
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
              <Link to="/about" className="footer-link">
                About
              </Link>
              <Link to="/contact" className="footer-link">
                Contact
              </Link>
              <a
                href="https://aethrasystems.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                Aethra Systems
              </a>
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
              <Link to={FILESLING_CASE_STUDY_PATH} className="footer-link">
                FileSling
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
