import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

import "@styles/components/bar/Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [, setWorkOpen] = useState(false); // Keep for now, used in click handlers
  const { pathname } = useLocation();

  const navbarRef = useRef<HTMLDivElement>(null);
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
    if (menuOpen) setHidden(false);
  }, [menuOpen]);

  //** Navbar Click Outside Handler */
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target as Node)
      ) {
        setWorkOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isActive = (pathPrefix: string) => pathname.startsWith(pathPrefix);

  return (
    <nav
      className={`navbar ${scrolled ? "scrolled" : ""} ${hidden && !menuOpen ? "navbar-hidden" : ""}`}
      ref={navbarRef}
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

        <div className={`navbar-links ${menuOpen ? "mobile-open" : ""}`}>
          <Link
            to="/work"
            className={`nav-link ${isActive("/work") ? "active" : ""}`}
            onClick={() => {
              setMenuOpen(false);
              setWorkOpen(false);
            }}
          >
            Work
          </Link>

          <Link
            to="/writing"
            className={`nav-link ${isActive("/writing") ? "active" : ""}`}
            onClick={() => {
              setMenuOpen(false);
              setWorkOpen(false);
            }}
          >
            Writing
          </Link>

          <Link
            to="/about"
            className={`nav-link ${isActive("/about") ? "active" : ""}`}
            onClick={() => {
              setMenuOpen(false);
              setWorkOpen(false);
            }}
          >
            About
          </Link>

          {/* Primary CTA */}
          <Link
            to="/contact"
            className="nav-cta"
            onClick={() => {
              setMenuOpen(false);
              setWorkOpen(false);
            }}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
