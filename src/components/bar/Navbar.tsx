import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

import "@styles/components/bar/Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 50);

      if (currentScrollY < 100) {
        setHidden(false);
      } else if (currentScrollY > lastScrollY.current + 5) {
        setHidden(true);
      } else if (currentScrollY < lastScrollY.current - 5) {
        setHidden(false);
      }

      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Keep navbar visible when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      setHidden(false);
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  const isActive = (pathPrefix: string) => pathname.startsWith(pathPrefix);

  return (
    <>
      <nav
        className={`navbar ${scrolled ? "scrolled" : ""} ${hidden && !menuOpen ? "navbar-hidden" : ""}`}
      >
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <img
              src="/ll-logo.png"
              alt="Loc Le logo"
              className="navbar-logo-img"
            />
            <span className="logo-text">Loc Le</span>
          </Link>

          {/* Hamburger Icon */}
          <div
            className={`hamburger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          {/* Desktop nav links (visible on desktop, hidden on mobile) */}
          <div className="navbar-links navbar-links--desktop">
            <Link
              to="/work"
              className={`nav-link ${isActive("/work") ? "active" : ""}`}
            >
              Work
            </Link>
            <Link
              to="/writing"
              className={`nav-link ${isActive("/writing") ? "active" : ""}`}
            >
              Writing
            </Link>
            <Link
              to="/about"
              className={`nav-link ${isActive("/about") ? "active" : ""}`}
            >
              About
            </Link>
            <Link to="/contact" className="nav-cta">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay with backdrop blur */}
      <div
        className={`nav-mobile-overlay ${menuOpen ? "visible" : ""}`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile Drawer (outside nav for correct stacking) */}
      <div className={`mobile-drawer ${menuOpen ? "open" : ""}`}>
        <button
          className="mobile-close"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          ✕
        </button>

        <Link
          to="/work"
          className={`nav-link ${isActive("/work") ? "active" : ""}`}
          onClick={() => setMenuOpen(false)}
        >
          Work
        </Link>
        <Link
          to="/writing"
          className={`nav-link ${isActive("/writing") ? "active" : ""}`}
          onClick={() => setMenuOpen(false)}
        >
          Writing
        </Link>
        <Link
          to="/about"
          className={`nav-link ${isActive("/about") ? "active" : ""}`}
          onClick={() => setMenuOpen(false)}
        >
          About
        </Link>
        <Link
          to="/contact"
          className="nav-cta"
          onClick={() => setMenuOpen(false)}
        >
          Contact
        </Link>
      </div>
    </>
  );
};

export default Navbar;
