import React from "react";
import { Link } from "react-router-dom";
import "./PrivacyPolicy.css";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-page">
      <div className="privacy-container">

        <div className="privacy-header">
          <h1>Privacy Policy</h1>
          <p>
            How NEERAJ ENTERPRISES handles information submitted through
            this website.
          </p>
        </div>

        <section className="privacy-section">
          <h2>1. Introduction</h2>
          <p>
            NEERAJ ENTERPRISES respects your privacy and is committed to
            handling personal information responsibly.
          </p>
          <p>
            This Privacy Policy explains how information may be collected
            and used when you visit or contact us through this website.
          </p>
        </section>

        <section className="privacy-section">
          <h2>2. Information We May Collect</h2>
          <p>
            Depending on how you contact us, you may voluntarily provide
            information such as:
          </p>

          <ul>
            <li>Name</li>
            <li>Phone number</li>
            <li>Email address</li>
            <li>Business or company information</li>
            <li>Message or enquiry details</li>
          </ul>
        </section>

        <section className="privacy-section">
          <h2>3. How We Use Information</h2>
          <p>
            Information submitted through the website may be used to:
          </p>

          <ul>
            <li>Respond to your enquiries.</li>
            <li>Provide information about our products or services.</li>
            <li>Discuss wholesale business requirements.</li>
            <li>Communicate regarding a business enquiry.</li>
            <li>Improve our website and customer communication.</li>
          </ul>
        </section>

        <section className="privacy-section">
          <h2>4. Information Protection</h2>
          <p>
            We take reasonable steps to protect information shared with us
            from unauthorized access, misuse, or disclosure.
          </p>
          <p>
            However, no method of electronic transmission or storage can be
            guaranteed to be completely secure.
          </p>
        </section>

        <section className="privacy-section">
          <h2>5. Sharing of Information</h2>
          <p>
            We do not intend to sell or commercially trade personal
            information submitted through this website.
          </p>
          <p>
            Information may be shared when reasonably necessary to respond
            to a business enquiry, fulfill a requested service, comply with
            applicable law, or protect our legal rights.
          </p>
        </section>

        <section className="privacy-section">
          <h2>6. Cookies</h2>
          <p>
            This website may use basic browser technologies such as cookies
            or similar technologies depending on the features implemented
            on the website.
          </p>
          <p>
            Cookies may help improve website functionality and user
            experience.
          </p>
        </section>

        <section className="privacy-section">
          <h2>7. Third-Party Services</h2>
          <p>
            The website may use third-party services, platforms, or links.
            Their privacy practices may be governed by their own privacy
            policies.
          </p>
          <p>
            We recommend reviewing the privacy policy of any third-party
            service you choose to use.
          </p>
        </section>

        <section className="privacy-section">
          <h2>8. Data Retention</h2>
          <p>
            Information may be retained for as long as reasonably necessary
            to respond to enquiries, maintain business records, or meet
            applicable legal and business requirements.
          </p>
        </section>

        <section className="privacy-section">
          <h2>9. Your Choices</h2>
          <p>
            You may choose not to provide personal information. However,
            certain information may be necessary for us to respond to a
            specific enquiry.
          </p>
        </section>

        <section className="privacy-section">
          <h2>10. Children's Privacy</h2>
          <p>
            This website is intended for general business communication and
            is not specifically directed toward children.
          </p>
        </section>

        <section className="privacy-section">
          <h2>11. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Changes will
            be reflected on this page when the policy is updated.
          </p>
        </section>

        <section className="privacy-section">
          <h2>12. Contact Us</h2>

          <div className="privacy-contact-box">
            <p><strong>NEERAJ ENTERPRISES</strong></p>
            <p>Indore, Madhya Pradesh - 452001</p>
            <p>Phone: 9907406837</p>
            <p>Email: senneerajdabra257@gmail.com</p>
          </div>
        </section>

        <div className="privacy-back">
          <Link to="/">← Back to Home</Link>
          <Link to="/terms">Terms & Conditions →</Link>
        </div>

      </div>
    </div>
  );
};

export default PrivacyPolicy;