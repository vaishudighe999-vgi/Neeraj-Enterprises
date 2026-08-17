import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">

        <Link to="/" className="logo">
          Digi<span>Growth</span>
        </Link>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <Link to="/contact" className="nav-btn">
          Get Started
        </Link>

      </div>
    </nav>
  );
};

export default Navbar;