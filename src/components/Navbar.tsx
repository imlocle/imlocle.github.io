import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-text">Loc Le</span>
        </Link>

        {/* Hamburger Icon */}
        <div
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className={`navbar-links ${menuOpen ? 'mobile-open' : ''}`}>
          <Link
            to="/about"
            className={`nav-link ${pathname === '/about' ? 'active' : ''}`}
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>

          <Link
            to="/services"
            className={`nav-link ${pathname === '/services' ? 'active' : ''}`}
            onClick={() => setMenuOpen(false)}
          >
            Services
          </Link>

          <Link
            to="/portfolio"
            className={`nav-link ${pathname === '/portfolio' ? 'active' : ''}`}
            onClick={() => setMenuOpen(false)}
          >
            Portfolio
          </Link>

          <Link
            to="/contact"
            className="nav-link cta-link"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
