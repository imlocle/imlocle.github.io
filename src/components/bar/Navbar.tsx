import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

import "@styles/components/bar/Navbar.css";
import { CALENDLY_URL } from "@utils/constants";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [_workOpen, setWorkOpen] = useState(false);  // Keep for now, used in click handlers
  const { pathname } = useLocation();

  const navbarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`} ref={navbarRef}>
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

          <Link
            to="/consulting"
            className={`nav-link ${isActive("/consulting") ? "active" : ""}`}
            onClick={() => {
              setMenuOpen(false);
              setWorkOpen(false);
            }}
          >
            Consulting
          </Link>

          {/* Primary CTA: Book Call (Calendly) */}
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-cta"
            onClick={() => {
              setMenuOpen(false);
              setWorkOpen(false);
            }}
          >
            Book Call
          </a>

          {/* Secondary: Contact page (email form) */}
          <Link
            to="/contact"
            className={`nav-link ${isActive("/contact") ? "active" : ""}`}
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
