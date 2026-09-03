import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand">

          <Link to="/" className="footer-logo">
            <span>DM</span>
            Digital Growth
          </Link>

          <p>
            We help businesses grow online through strategic
            digital marketing, creative branding and
            performance-driven solutions.
          </p>

          <div className="footer-social">
            <a href="#" aria-label="Facebook">
              f
            </a>

            <a href="#" aria-label="Instagram">
              ◎
            </a>

            <a href="#" aria-label="LinkedIn">
              in
            </a>
          </div>

        </div>


        {/* Services */}
        <div className="footer-column">

          <h3>Services</h3>

          <Link to="/services">
            Social Media Marketing
          </Link>

          <Link to="/services">
            Meta Ads
          </Link>

          <Link to="/services">
            Google Ads
          </Link>

          <Link to="/services">
            SEO
          </Link>

          <Link to="/services">
            Website Development
          </Link>

          <Link to="/services">
            Branding
          </Link>

        </div>


        {/* Company */}
        <div className="footer-column">

          <h3>Company</h3>

          <Link to="/">
            Home
          </Link>

          <Link to="/about">
            About Us
          </Link>

          <Link to="/portfolio">
            Portfolio
          </Link>

          <Link to="/contact">
            Contact
          </Link>

        </div>


        {/* Contact */}
        <div className="footer-contact">

          <h3>Let's Talk</h3>

          <p>
            Have a project in mind?
            Let's discuss how we can help
            your business grow online.
          </p>

          <a href="tel:+919907406837">
            +91 99074 06837
          </a>

          <a href="mailto:senneerajdabra257@gmail.com">
            senneerajdabra257@gmail.com
          </a>

          <a
            href="https://wa.me/919907406837"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp Us
          </a>

        </div>

      </div>


      {/* Bottom */}

      <div className="footer-bottom">

        <div className="footer-bottom-container">

          <p>
            © {new Date().getFullYear()} Digital Growth.
            All Rights Reserved.
          </p>

          <div className="legal-links">

            <Link to="/terms">
              Terms & Conditions
            </Link>

            <Link to="/privacy-policy">
              Privacy Policy
            </Link>

            <Link to="/refund-policy">
              Refund Policy
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;