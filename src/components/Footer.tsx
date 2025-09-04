import { Link } from 'react-router-dom';
import '../styles/Footer.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { GITHUB_LINK, LINKEDIN_LINK, POSITION_TITLE } from '../utils/constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-title">Loc Le</h3>
          <p className="footer-description">
            {POSITION_TITLE} looking to explore.
          </p>
        </div>
        
        <div className="footer-section">
          <h3 className="footer-title">Quick Links</h3>
          <div className="footer-links">
            <Link to="/" className="footer-link">Home</Link>
            <Link to="/about" className="footer-link">About</Link>
            <Link to="/work" className="footer-link">Work</Link>
            <Link to="/contact" className="footer-link">Contact</Link>
          </div>
        </div>
        
        <div className="footer-section">
          <h3 className="footer-title">Connect</h3>
          <div className="social-links">
            <a href={GITHUB_LINK} target="_blank" rel="noopener noreferrer" className="social-link">
              <FaGithub className="social-icon" /> GitHub
            </a>
            <a href={LINKEDIN_LINK} target="_blank" rel="noopener noreferrer" className="social-link">
              <FaLinkedin className="social-icon" /> LinkedIn
            </a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>© {currentYear} Loc Le. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;