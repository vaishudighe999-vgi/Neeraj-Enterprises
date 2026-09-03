
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <main className="home">

      {/* =========================
          HERO SECTION
      ========================= */}

      <section className="hero">

        <div className="hero-container">

          {/* LEFT CONTENT */}

          <div className="hero-content">

            <span className="hero-badge">
              🏢 NEERAJ ENTERPRISES
            </span>

            <h1>
              Fresh Fruits & Vegetables
              <span> Wholesale Trading</span>
            </h1>

            <p>
              NEERAJ ENTERPRISES is a Micro Proprietary Enterprise based in
              Indore, Madhya Pradesh, engaged in wholesale trading of fresh
              fruits and vegetables and business supply.
            </p>

            <div className="hero-buttons">

              <Link to="/contact" className="primary-btn">
                Contact Us
              </Link>

              <a
                href="https://wa.me/919907406837"
                target="_blank"
                rel="noopener noreferrer"
                className="secondary-btn"
              >
                WhatsApp Us
              </a>

            </div>

            {/* BUSINESS HIGHLIGHTS */}

            <div className="hero-trust">

              <div>
                <strong>2022</strong>
                <span>Established</span>
              </div>

              <div>
                <strong>Micro</strong>
                <span>Enterprise</span>
              </div>

              <div>
                <strong>Indore</strong>
                <span>Madhya Pradesh</span>
              </div>

            </div>

          </div>


          {/* RIGHT VISUAL */}

          <div className="hero-visual">

            <div className="dashboard-card">

              <div className="card-header">

                <span>Business Information</span>

                <span className="status">
                  ● Active
                </span>

              </div>


              <div className="growth-chart">

                <div className="chart-line"></div>

                <div className="chart-point point-1"></div>
                <div className="chart-point point-2"></div>
                <div className="chart-point point-3"></div>
                <div className="chart-point point-4"></div>
                <div className="chart-point point-5"></div>

              </div>


              <div className="growth-info">

                <div>
                  <small>Business Type</small>
                  <strong>Proprietary</strong>
                </div>

                <div>
                  <small>Activity</small>
                  <strong>Wholesale</strong>
                </div>

              </div>

            </div>


            {/* FLOATING CARDS */}

            <div className="floating-card leads-card">

              <span>Products</span>

              <strong>🍎 Fruits</strong>

            </div>


            <div className="floating-card revenue-card">

              <span>Supply</span>

              <strong>🥦 Vegetables</strong>

            </div>

          </div>

        </div>

      </section>


      {/* =========================
          ABOUT BUSINESS SECTION
      ========================= */}

      <section className="services-section">

        <div className="section-heading">

          <span className="section-badge">
            About Our Business
          </span>

          <h2>
            Trusted Wholesale
            <span> Trading Business</span>
          </h2>

          <p>
            NEERAJ ENTERPRISES operates from Indore, Madhya Pradesh and
            focuses on wholesale trading of fruits and vegetables for
            business requirements.
          </p>

        </div>


        <div className="services-grid">


          {/* CARD 1 */}

          <div className="service-card">

            <div className="service-icon">
              🍎
            </div>

            <h3>
              Fruits Wholesale
            </h3>

            <p>
              Wholesale trading and supply of fruits for business and
              commercial requirements.
            </p>

            <Link to="/contact">
              Make Enquiry →
            </Link>

          </div>


          {/* CARD 2 */}

          <div className="service-card">

            <div className="service-icon">
              🥦
            </div>

            <h3>
              Vegetables Wholesale
            </h3>

            <p>
              Wholesale trading of vegetables for business supply and
              commercial requirements.
            </p>

            <Link to="/contact">
              Make Enquiry →
            </Link>

          </div>


          {/* CARD 3 */}

          <div className="service-card">

            <div className="service-icon">
              📦
            </div>

            <h3>
              Bulk Supply
            </h3>

            <p>
              Wholesale supply solutions for customers looking for
              fruits and vegetables in bulk quantities.
            </p>

            <Link to="/contact">
              Make Enquiry →
            </Link>

          </div>


          {/* CARD 4 */}

          <div className="service-card">

            <div className="service-icon">
              🚚
            </div>

            <h3>
              Fresh Produce Trading
            </h3>

            <p>
              Business focused on wholesale trading of fresh fruits and
              vegetables.
            </p>

            <Link to="/contact">
              Make Enquiry →
            </Link>

          </div>


          {/* CARD 5 */}

          <div className="service-card">

            <div className="service-icon">
              🤝
            </div>

            <h3>
              Business Supply
            </h3>

            <p>
              Supporting business customers with wholesale produce
              requirements.
            </p>

            <Link to="/contact">
              Make Enquiry →
            </Link>

          </div>


          {/* CARD 6 */}

          <div className="service-card">

            <div className="service-icon">
              📍
            </div>

            <h3>
              Indore Based Business
            </h3>

            <p>
              Based in Indore, Madhya Pradesh with a focus on wholesale
              trading activities.
            </p>

            <Link to="/contact">
              Contact Us →
            </Link>

          </div>

        </div>


        <div className="services-button">

          <Link
            to="/contact"
            className="view-services-btn"
          >
            Send Business Enquiry →
          </Link>

        </div>

      </section>


      {/* =========================
          WHY CHOOSE US
      ========================= */}

      <section className="why-section">

        <div className="why-container">


          {/* LEFT CONTENT */}

          <div className="why-content">

            <span className="section-badge">
              Why Choose NEERAJ ENTERPRISES
            </span>

            <h2>
              Business Focused
              <span> Wholesale Trading</span>
            </h2>

            <p>
              NEERAJ ENTERPRISES is a registered Micro Proprietary
              Enterprise operating in the wholesale trading sector.
              Our business activity focuses on fruits and vegetables.
            </p>

            <Link
              to="/contact"
              className="why-btn"
            >
              Contact For Enquiry →
            </Link>

          </div>


          {/* RIGHT FEATURES */}

          <div className="why-features">


            {/* FEATURE 1 */}

            <div className="feature-card">

              <div className="feature-icon">
                🏢
              </div>

              <div>

                <h3>
                  Registered Enterprise
                </h3>

                <p>
                  NEERAJ ENTERPRISES is registered as a Micro Enterprise
                  under Udyam Registration.
                </p>

              </div>

            </div>


            {/* FEATURE 2 */}

            <div className="feature-card">

              <div className="feature-icon">
                🍎
              </div>

              <div>

                <h3>
                  Fruits & Vegetables
                </h3>

                <p>
                  Our registered business activity includes wholesale
                  trading of fruits and vegetables.
                </p>

              </div>

            </div>


            {/* FEATURE 3 */}

            <div className="feature-card">

              <div className="feature-icon">
                📍
              </div>

              <div>

                <h3>
                  Indore Based
                </h3>

                <p>
                  Business premises are located in BK Sindhi Colony,
                  Indore, Madhya Pradesh.
                </p>

              </div>

            </div>


            {/* FEATURE 4 */}

            <div className="feature-card">

              <div className="feature-icon">
                🤝
              </div>

              <div>

                <h3>
                  Business Enquiries
                </h3>

                <p>
                  Contact us for wholesale fruits and vegetables
                  trading and supply enquiries.
                </p>

              </div>

            </div>

          </div>

        </div>


        {/* BUSINESS STATS */}

        <div className="stats-container">

          <div className="stat-item">

            <strong>
              2022
            </strong>

            <span>
              Business Started
            </span>

          </div>


          <div className="stat-item">

            <strong>
              Micro
            </strong>

            <span>
              Enterprise Type
            </span>

          </div>


          <div className="stat-item">

            <strong>
              Indore
            </strong>

            <span>
              Business Location
            </span>

          </div>


          <div className="stat-item">

            <strong>
              1
            </strong>

            <span>
              Registered Employment
            </span>

          </div>

        </div>

      </section>


      {/* =========================
          BUSINESS INFORMATION
      ========================= */}

      <section className="portfolio-section">

        <div className="section-heading">

          <span className="section-badge">
            Business Information
          </span>

          <h2>
            NEERAJ ENTERPRISES
            <span> At A Glance</span>
          </h2>

          <p>
            Basic business information based on the enterprise
            registration details.
          </p>

        </div>


        <div className="portfolio-grid">


          {/* BUSINESS NAME */}

          <div className="portfolio-card">

            <div className="portfolio-image portfolio-bg-1">

              <span className="portfolio-category">
                Enterprise
              </span>

              <div className="portfolio-overlay">
                <span>
                  NEERAJ ENTERPRISES
                </span>
              </div>

            </div>

            <div className="portfolio-content">

              <h3>
                NEERAJ ENTERPRISES
              </h3>

              <p>
                A Micro Proprietary Enterprise based in Indore,
                Madhya Pradesh.
              </p>

            </div>

          </div>


          {/* BUSINESS ACTIVITY */}

          <div className="portfolio-card">

            <div className="portfolio-image portfolio-bg-2">

              <span className="portfolio-category">
                Business Activity
              </span>

              <div className="portfolio-overlay">
                <span>
                  Wholesale Trading
                </span>
              </div>

            </div>

            <div className="portfolio-content">

              <h3>
                Wholesale Trading
              </h3>

              <p>
                Wholesale trading activity focused on fruits and
                vegetables.
              </p>

            </div>

          </div>


          {/* OWNER */}

          <div className="portfolio-card">

            <div className="portfolio-image portfolio-bg-3">

              <span className="portfolio-category">
                Proprietor
              </span>

              <div className="portfolio-overlay">
                <span>
                  Shri Neeraj Sen
                </span>
              </div>

            </div>

            <div className="portfolio-content">

              <h3>
                Shri Neeraj Sen
              </h3>

              <p>
                Proprietor of NEERAJ ENTERPRISES.
              </p>

            </div>

          </div>


          {/* ESTABLISHED */}

          <div className="portfolio-card">

            <div className="portfolio-image portfolio-bg-4">

              <span className="portfolio-category">
                Since 2022
              </span>

              <div className="portfolio-overlay">
                <span>
                  01 August 2022
                </span>
              </div>

            </div>

            <div className="portfolio-content">

              <h3>
                Established in 2022
              </h3>

              <p>
                Date of incorporation and commencement of business:
                01/08/2022.
              </p>

            </div>

          </div>


          {/* LOCATION */}

          <div className="portfolio-card">

            <div className="portfolio-image portfolio-bg-5">

              <span className="portfolio-category">
                Location
              </span>

              <div className="portfolio-overlay">
                <span>
                  Indore
                </span>
              </div>

            </div>

            <div className="portfolio-content">

              <h3>
                Indore, Madhya Pradesh
              </h3>

              <p>
                Business premises located in BK Sindhi Colony,
                Sindhi Colony Main Road, Indore.
              </p>

            </div>

          </div>


          {/* UDYAM */}

          <div className="portfolio-card">

            <div className="portfolio-image portfolio-bg-6">

              <span className="portfolio-category">
                Udyam Registration
              </span>

              <div className="portfolio-overlay">
                <span>
                  Registered Enterprise
                </span>
              </div>

            </div>

            <div className="portfolio-content">

              <h3>
                UDYAM-MP-20-0027028
              </h3>

              <p>
                Registered as a Micro Enterprise under Udyam
                Registration.
              </p>

            </div>

          </div>

        </div>


        <div className="portfolio-button">

          <Link
            to="/contact"
            className="view-portfolio-btn"
          >
            Contact NEERAJ ENTERPRISES →
          </Link>

        </div>

      </section>


      {/* =========================
          BUSINESS HIGHLIGHTS
      ========================= */}

      <section className="testimonials-section">

        <div className="section-heading">

          <span className="section-badge">
            Our Business
          </span>

          <h2>
            Focused On
            <span> Wholesale Trading</span>
          </h2>

          <p>
            Our business is focused on wholesale trading of fruits
            and vegetables.
          </p>

        </div>


        <div className="testimonials-grid">


          {/* CARD 1 */}

          <div className="testimonial-card">

            <div className="testimonial-stars">
              🍎
            </div>

            <p className="testimonial-text">
              Wholesale trading of fruits for business and commercial
              requirements.
            </p>

            <div className="client-info">

              <div className="client-avatar">
                F
              </div>

              <div>

                <h3>
                  Fruits
                </h3>

                <span>
                  Wholesale Trading
                </span>

              </div>

            </div>

          </div>


          {/* CARD 2 */}

          <div className="testimonial-card">

            <div className="testimonial-stars">
              🥦
            </div>

            <p className="testimonial-text">
              Wholesale trading of vegetables for business and
              commercial requirements.
            </p>

            <div className="client-info">

              <div className="client-avatar">
                V
              </div>

              <div>

                <h3>
                  Vegetables
                </h3>

                <span>
                  Wholesale Trading
                </span>

              </div>

            </div>

          </div>


          {/* CARD 3 */}

          <div className="testimonial-card">

            <div className="testimonial-stars">
              📦
            </div>

            <p className="testimonial-text">
              Business enquiries are welcome for wholesale fruits and
              vegetables supply requirements.
            </p>

            <div className="client-info">

              <div className="client-avatar">
                B
              </div>

              <div>

                <h3>
                  Business Supply
                </h3>

                <span>
                  Wholesale Enquiries
                </span>

              </div>

            </div>

          </div>

        </div>


        {/* BUSINESS STATUS */}

        <div className="overall-rating">

          <strong>
            MICRO
          </strong>

          <div>

            <span className="rating-stars">
              ✓ ✓ ✓
            </span>

            <small>
              Registered Enterprise
            </small>

          </div>

        </div>

      </section>


      {/* =========================
          FAQ SECTION
      ========================= */}

      <section className="faq-section">

        <div className="section-heading">

          <span className="section-badge">
            FAQ
          </span>

          <h2>
            Frequently Asked
            <span> Questions</span>
          </h2>

          <p>
            Find answers to common questions about NEERAJ ENTERPRISES.
          </p>

        </div>


        <div className="faq-container">


          {/* FAQ 1 */}

          <div
            className={`faq-item ${
              openFaq === 0 ? "active" : ""
            }`}
          >

            <button
              className="faq-question"
              onClick={() => toggleFaq(0)}
            >

              <span>
                What is NEERAJ ENTERPRISES?
              </span>

              <span className="faq-icon">
                {openFaq === 0 ? "−" : "+"}
              </span>

            </button>

            <div className="faq-answer">

              <p>
                NEERAJ ENTERPRISES is a Micro Proprietary Enterprise
                based in Indore, Madhya Pradesh.
              </p>

            </div>

          </div>


          {/* FAQ 2 */}

          <div
            className={`faq-item ${
              openFaq === 1 ? "active" : ""
            }`}
          >

            <button
              className="faq-question"
              onClick={() => toggleFaq(1)}
            >

              <span>
                What is the main business activity?
              </span>

              <span className="faq-icon">
                {openFaq === 1 ? "−" : "+"}
              </span>

            </button>

            <div className="faq-answer">

              <p>
                The registered business activity is wholesale trading,
                including wholesale of fruits and vegetables.
              </p>

            </div>

          </div>


          {/* FAQ 3 */}

          <div
            className={`faq-item ${
              openFaq === 2 ? "active" : ""
            }`}
          >

            <button
              className="faq-question"
              onClick={() => toggleFaq(2)}
            >

              <span>
                Where is the business located?
              </span>

              <span className="faq-icon">
                {openFaq === 2 ? "−" : "+"}
              </span>

            </button>

            <div className="faq-answer">

              <p>
                NEERAJ ENTERPRISES is located at M1 48, BK Sindhi
                Colony, Sindhi Colony Main Road, Indore, Madhya
                Pradesh - 452001.
              </p>

            </div>

          </div>


          {/* FAQ 4 */}

          <div
            className={`faq-item ${
              openFaq === 3 ? "active" : ""
            }`}
          >

            <button
              className="faq-question"
              onClick={() => toggleFaq(3)}
            >

              <span>
                When was the business started?
              </span>

              <span className="faq-icon">
                {openFaq === 3 ? "−" : "+"}
              </span>

            </button>

            <div className="faq-answer">

              <p>
                The date of incorporation and commencement of business
                is 01/08/2022.
              </p>

            </div>

          </div>


          {/* FAQ 5 */}

          <div
            className={`faq-item ${
              openFaq === 4 ? "active" : ""
            }`}
          >

            <button
              className="faq-question"
              onClick={() => toggleFaq(4)}
            >

              <span>
                How can I contact NEERAJ ENTERPRISES?
              </span>

              <span className="faq-icon">
                {openFaq === 4 ? "−" : "+"}
              </span>

            </button>

            <div className="faq-answer">

              <p>
                You can contact NEERAJ ENTERPRISES through phone,
                WhatsApp, email or the website contact form.
              </p>

            </div>

          </div>


          {/* FAQ 6 */}

          <div
            className={`faq-item ${
              openFaq === 5 ? "active" : ""
            }`}
          >

            <button
              className="faq-question"
              onClick={() => toggleFaq(5)}
            >

              <span>
                What is the Udyam Registration Number?
              </span>

              <span className="faq-icon">
                {openFaq === 5 ? "−" : "+"}
              </span>

            </button>

            <div className="faq-answer">

              <p>
                The Udyam Registration Number of NEERAJ ENTERPRISES
                is UDYAM-MP-20-0027028.
              </p>

            </div>

          </div>

        </div>


        {/* FAQ CTA */}

        <div className="faq-cta">

          <h3>
            Looking For Wholesale Supply?
          </h3>

          <p>
            Contact NEERAJ ENTERPRISES for your business enquiry.
          </p>

          <Link
            to="/contact"
            className="faq-btn"
          >
            Contact Us →
          </Link>

        </div>

      </section>


      {/* =========================
          CONTACT CTA
      ========================= */}

      <section className="contact-section">

        <div className="contact-container">


          {/* LEFT */}

          <div className="contact-info">

            <span className="section-badge">
              Let's Connect
            </span>

            <h2>
              Need Wholesale
              <span> Fruits & Vegetables?</span>
            </h2>

            <p>
              Get in touch with NEERAJ ENTERPRISES for business and
              wholesale trading enquiries.
            </p>


            <div className="contact-options">


              {/* WHATSAPP */}

              <a
                href="https://wa.me/919907406837"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-option"
              >

                <div className="contact-icon">
                  💬
                </div>

                <div>

                  <span>
                    WhatsApp
                  </span>

                  <strong>
                    Chat With Us
                  </strong>

                </div>

              </a>


              {/* CALL */}

              <a
                href="tel:+919907406837"
                className="contact-option"
              >

                <div className="contact-icon">
                  📞
                </div>

                <div>

                  <span>
                    Call Now
                  </span>

                  <strong>
                    +91 99074 06837
                  </strong>

                </div>

              </a>


              {/* EMAIL */}

              <a
                href="mailto:senneerajdabra257@gmail.com"
                className="contact-option"
              >

                <div className="contact-icon">
                  ✉️
                </div>

                <div>

                  <span>
                    Email
                  </span>

                  <strong>
                    senneerajdabra257@gmail.com
                  </strong>

                </div>

              </a>

            </div>

          </div>


          {/* RIGHT BUSINESS CARD */}

          <div className="contact-form-card">

            <h3>
              NEERAJ ENTERPRISES
            </h3>

            <p>
              Business Information
            </p>


            <div className="business-details">

              <div className="business-detail-row">

                <span>
                  Proprietor
                </span>

                <strong>
                  Shri Neeraj Sen
                </strong>

              </div>


              <div className="business-detail-row">

                <span>
                  Enterprise Type
                </span>

                <strong>
                  Micro
                </strong>

              </div>


              <div className="business-detail-row">

                <span>
                  Organisation
                </span>

                <strong>
                  Proprietary
                </strong>

              </div>


              <div className="business-detail-row">

                <span>
                  Business Activity
                </span>

                <strong>
                  Wholesale Trading
                </strong>

              </div>


              <div className="business-detail-row">

                <span>
                  Products
                </span>

                <strong>
                  Fruits & Vegetables
                </strong>

              </div>


              <div className="business-detail-row">

                <span>
                  Established
                </span>

                <strong>
                  01/08/2022
                </strong>

              </div>


              <div className="business-detail-row">

                <span>
                  Location
                </span>

                <strong>
                  Indore, MP
                </strong>

              </div>


              <div className="business-detail-row">

                <span>
                  Udyam No.
                </span>

                <strong>
                  UDYAM-MP-20-0027028
                </strong>

              </div>

            </div>


            <Link
              to="/contact"
              className="contact-submit-btn"
            >
              Send Business Enquiry →
            </Link>

          </div>

        </div>

      </section>


    </main>
  );
};

export default Home;

