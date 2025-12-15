import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [workOpen, setWorkOpen] = useState(false);
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
        <Link
          to="/"
          className="navbar-logo"
          onClick={() => {
            setMenuOpen(false);
            setWorkOpen(false);
          }}
        >
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
            to="/services"
            className={`nav-link ${isActive("/services") ? "active" : ""}`}
            onClick={() => {
              setMenuOpen(false);
              setWorkOpen(false);
            }}
          >
            Services
          </Link>

          {/* WORK DROPDOWN */}
          <div
            className="nav-dropdown"
            onMouseEnter={() => !menuOpen && setWorkOpen(true)}
          >
            <button
              type="button"
              className={`nav-link dropdown-toggle ${
                isActive("/work") ? "active" : ""
              }`}
              onClick={() => setWorkOpen(prev => !prev)}
            >
              Work ▾
            </button>

            {workOpen && (
              <div className="dropdown-menu">
                <Link
                  to="/work/client"
                  className={`dropdown-item ${
                    isActive("/work/client") ? "active" : ""
                  }`}
                  onClick={() => {
                    setMenuOpen(false);
                    setWorkOpen(false);
                  }}
                >
                  Client Projects
                </Link>
                <Link
                  to="/work/technical"
                  className={`dropdown-item ${
                    isActive("/work/technical") ? "active" : ""
                  }`}
                  onClick={() => {
                    setMenuOpen(false);
                    setWorkOpen(false);
                  }}
                >
                  Technical Projects
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/contact"
            className="nav-link cta-link"
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
