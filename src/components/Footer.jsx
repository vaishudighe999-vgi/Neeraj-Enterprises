import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-brand">
          <h2>NEERAJ ENTERPRISES</h2>
          <p>
            Wholesale trading and supply of fresh fruits and vegetables.
          </p>
        </div>

        <div className="footer-legal">
          <h3>Legal</h3>

          <Link to="/terms">
            Terms & Conditions
          </Link>

          <Link to="/privacy-policy">
            Privacy Policy
          </Link>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} NEERAJ ENTERPRISES. All Rights Reserved.
        </p>
      </div>

    </footer>
  );
};

export default Footer;