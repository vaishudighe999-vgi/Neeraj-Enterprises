import React from "react";
import { Link } from "react-router-dom";
import "./Terms.css";

const Terms = () => {
  return (
    <div className="policy-page">
      <div className="policy-container">

        <div className="policy-header">
          <h1>Terms & Conditions</h1>
          <p>Terms and conditions for using the NEERAJ ENTERPRISES website.</p>
        </div>

        <section className="policy-section">
          <h2>1. Introduction</h2>
          <p>
            Welcome to the website of <strong>NEERAJ ENTERPRISES</strong>.
            By accessing or using this website, you agree to follow these
            Terms & Conditions.
          </p>
          <p>
            If you do not agree with any part of these terms, please do not
            use this website.
          </p>
        </section>

        <section className="policy-section">
          <h2>2. About Our Business</h2>
          <p>
            NEERAJ ENTERPRISES is a proprietary micro enterprise based in
            Indore, Madhya Pradesh, engaged in wholesale trading of fruits
            and vegetables.
          </p>

          <div className="business-info">
            <p><strong>Business Name:</strong> NEERAJ ENTERPRISES</p>
            <p><strong>Owner:</strong> Shri Neeraj Sen</p>
            <p><strong>Location:</strong> Indore, Madhya Pradesh</p>
            <p><strong>Udyam Registration:</strong> UDYAM-MP-20-0027028</p>
          </div>
        </section>

        <section className="policy-section">
          <h2>3. Website Information</h2>
          <p>
            The information provided on this website is intended for general
            business and informational purposes.
          </p>
          <p>
            We make reasonable efforts to keep the information accurate and
            updated. However, we do not guarantee that all information will
            always be complete, accurate, or current.
          </p>
        </section>

        <section className="policy-section">
          <h2>4. Products and Services</h2>
          <p>
            NEERAJ ENTERPRISES deals in wholesale trading and supply of
            fruits and vegetables.
          </p>
          <p>
            Product availability, quantity, quality, pricing, delivery
            arrangements, and other commercial terms may vary depending on
            the specific business enquiry and agreement between the parties.
          </p>
        </section>

        <section className="policy-section">
          <h2>5. Business Enquiries</h2>
          <p>
            Customers or businesses may contact us through the contact
            details provided on this website for product enquiries,
            wholesale requirements, and other business-related communication.
          </p>
          <p>
            Any quotation, order, supply, payment, or delivery arrangement
            will be subject to mutually agreed commercial terms.
          </p>
        </section>

        <section className="policy-section">
          <h2>6. Website Usage</h2>
          <p>You agree not to:</p>

          <ul>
            <li>Use the website for any unlawful purpose.</li>
            <li>Attempt to damage or disrupt the website.</li>
            <li>Copy or misuse website content without permission.</li>
            <li>Submit false or misleading information.</li>
            <li>Attempt unauthorized access to any part of the website.</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>7. Intellectual Property</h2>
          <p>
            Unless otherwise stated, the content, text, design, graphics,
            branding, and other materials displayed on this website belong
            to or are used by NEERAJ ENTERPRISES.
          </p>
          <p>
            Reproduction, modification, distribution, or commercial use of
            website content without prior permission is not permitted.
          </p>
        </section>

        <section className="policy-section">
          <h2>8. Third-Party Links</h2>
          <p>
            This website may contain links or references to third-party
            websites or services. We are not responsible for the content,
            availability, or privacy practices of third-party websites.
          </p>
        </section>

        <section className="policy-section">
          <h2>9. Limitation of Liability</h2>
          <p>
            NEERAJ ENTERPRISES shall not be responsible for any loss or
            damage arising from reliance on general information provided
            through this website.
          </p>
          <p>
            Specific business transactions will be governed by the terms
            agreed between the concerned parties.
          </p>
        </section>

        <section className="policy-section">
          <h2>10. Changes to These Terms</h2>
          <p>
            We reserve the right to update or modify these Terms & Conditions
            from time to time. Any changes may be published on this page.
          </p>
        </section>

        <section className="policy-section">
          <h2>11. Contact Us</h2>
          <p>
            If you have any questions regarding these Terms & Conditions,
            please contact us.
          </p>

          <div className="contact-box">
            <p><strong>NEERAJ ENTERPRISES</strong></p>
            <p>Indore, Madhya Pradesh - 452001</p>
            <p>Phone: 9907406837</p>
            <p>Email: senneerajdabra257@gmail.com</p>
          </div>
        </section>

        <div className="policy-back">
          <Link to="/">← Back to Home</Link>
          <Link to="/privacy-policy">Privacy Policy →</Link>
        </div>

      </div>
    </div>
  );
};

export default Terms;