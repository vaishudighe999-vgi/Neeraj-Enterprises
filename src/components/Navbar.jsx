import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">

      <div className="navbar-container">

        {/* Logo */}
        <Link to="/" className="logo" onClick={closeMenu}>
Digital Growth   
        </Link>

        {/* Desktop Menu */}
        <div className="desktop-nav">
          <Link to="/" onClick={closeMenu}>Home</Link>
          <Link to="/about" onClick={closeMenu}>About</Link>
          <Link to="/services" onClick={closeMenu}>Services</Link>
          <Link to="/portfolio" onClick={closeMenu}>Portfolio</Link>
          <Link to="/contact" onClick={closeMenu}>Contact</Link>
        </div>

        {/* 3 Line Menu */}
        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>

      {/* Mobile / Hamburger Menu */}
      {menuOpen && (
        <div className="mobile-menu">

          <Link to="/" onClick={closeMenu}>
            Home
          </Link>

          <Link to="/about" onClick={closeMenu}>
            About
          </Link>

          <Link to="/services" onClick={closeMenu}>
            Services
          </Link>

          <Link to="/portfolio" onClick={closeMenu}>
            Portfolio
          </Link>

          <Link to="/contact" onClick={closeMenu}>
            Contact
          </Link>

          <Link to="/terms" onClick={closeMenu}>
            Terms & Conditions
          </Link>

          <Link to="/privacy-policy" onClick={closeMenu}>
            Privacy Policy
          </Link>

          <Link to="/refund-policy" onClick={closeMenu}>
            Refund Policy
          </Link>

        </div>
      )}

    </nav>
  );
};

export default Navbar;