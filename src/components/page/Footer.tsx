import { Link } from "react-router-dom";
import "@styles/components/page/Footer.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GITHUB_LINK, LINKEDIN_LINK } from "@utils/constants";

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
              Backend cloud + AI engineering for startups — fast MVPs, reliable
              infrastructure, clean handoff.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <div className="footer-links">
              <Link to="/about" className="footer-link">
                About
              </Link>
              <Link to="/services" className="footer-link">
                Services
              </Link>
              <Link to="/contact" className="footer-link">
                Contact
              </Link>
            </div>
          </div>

          {/* Work */}
          <div className="footer-section">
            <h3 className="footer-title">Work</h3>
            <div className="footer-links">
              <Link to="/work/client" className="footer-link">
                Client Projects
              </Link>
              <Link to="/work/technical" className="footer-link">
                Technical Projects
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
