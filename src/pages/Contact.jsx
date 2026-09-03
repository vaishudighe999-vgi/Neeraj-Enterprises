import { useState } from "react";
import Swal from "sweetalert2";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    Swal.fire({
      icon: "success",
      title: "Thank You!",
      text: "Your enquiry has been submitted successfully. Neeraj Enterprises will contact you soon.",
      confirmButtonColor: "#0a4dcc",
    });

    console.log("Enquiry Data:", formData);

    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  return (
    <main className="contact-page">

      {/* =========================
          HERO
      ========================= */}

      <section className="contact-hero">

        <span className="section-badge">
          NEERAJ ENTERPRISES
        </span>

        <h1>
          Let's Connect With{" "}
          <span>Neeraj Enterprises</span>
        </h1>

        <p>
          Contact us for wholesale fruits and vegetables trading,
          bulk supply and business enquiries.
        </p>

      </section>


      {/* =========================
          CONTACT AREA
      ========================= */}

      <section className="contact-main">

        {/* =========================
            CONTACT INFO
        ========================= */}

        <div className="contact-info">

          <span className="section-badge">
            Let's Talk
          </span>

          <h2>
            Looking for
            <span> Wholesale Fruits & Vegetables?</span>
          </h2>

          <p>
            Neeraj Enterprises is a Micro Enterprise based in
            Indore, Madhya Pradesh, engaged in wholesale trading
            of fruits and vegetables.
          </p>


          {/* =========================
              BUSINESS BENEFITS
          ========================= */}

          <div className="contact-benefits">

            <div>
              <span>✓</span>
              Wholesale Fruits Supply
            </div>

            <div>
              <span>✓</span>
              Wholesale Vegetables Supply
            </div>

            <div>
              <span>✓</span>
              Bulk Trading & Supply
            </div>

            <div>
              <span>✓</span>
              Business Enquiries
            </div>

          </div>


          {/* =========================
              CONTACT OPTIONS
          ========================= */}

          <div className="contact-options">

            {/* =========================
                WHATSAPP
            ========================= */}

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
                <span>WhatsApp</span>
                <strong>Chat With Us</strong>
              </div>

            </a>


            {/* =========================
                CALL
            ========================= */}

            <a
              href="tel:+919907406837"
              className="contact-option"
            >

              <div className="contact-icon">
                📞
              </div>

              <div>
                <span>Call Now</span>
                <strong>+91 99074 06837</strong>
              </div>

            </a>


            {/* =========================
                EMAIL
            ========================= */}

            <a
              href="mailto:senneerajdabra257@gmail.com"
              className="contact-option"
            >

              <div className="contact-icon">
                ✉️
              </div>

              <div>
                <span>Email</span>
                <strong>
                  senneerajdabra257@gmail.com
                </strong>
              </div>

            </a>


            {/* =========================
                ADDRESS
            ========================= */}

            <div className="contact-option">

              <div className="contact-icon">
                📍
              </div>

              <div>
                <span>Business Address</span>

                <strong>
                  M1 48, BK Sindhi Colony,
                  Sindhi Colony Main Road,
                  Indore, Madhya Pradesh - 452001
                </strong>

              </div>

            </div>

          </div>


          {/* =========================
              BUSINESS DETAILS
          ========================= */}

          <div className="business-details">

            <h3>
              Business Information
            </h3>

            <div className="business-detail-row">
              <span>Business Name</span>
              <strong>NEERAJ ENTERPRISES</strong>
            </div>

            <div className="business-detail-row">
              <span>Owner</span>
              <strong>Shri Neeraj Sen</strong>
            </div>

            <div className="business-detail-row">
              <span>Organisation</span>
              <strong>Proprietorship</strong>
            </div>

            <div className="business-detail-row">
              <span>Enterprise Type</span>
              <strong>Micro Enterprise</strong>
            </div>

            <div className="business-detail-row">
              <span>Business Activity</span>
              <strong>Wholesale Trading</strong>
            </div>

            <div className="business-detail-row">
              <span>Products</span>
              <strong>Fruits & Vegetables</strong>
            </div>

            <div className="business-detail-row">
              <span>Established</span>
              <strong>01/08/2022</strong>
            </div>

            <div className="business-detail-row">
              <span>Udyam Registration</span>
              <strong>UDYAM-MP-20-0027028</strong>
            </div>

          </div>

        </div>


        {/* =========================
            CONTACT FORM
        ========================= */}

        <div className="contact-form-card">

          <h3>
            Send a Business Enquiry
          </h3>

          <p>
            Fill out the form below and contact us regarding
            your wholesale fruits and vegetables requirements.
          </p>


          <form onSubmit={handleSubmit}>

            {/* =========================
                NAME
            ========================= */}

            <div className="form-group">

              <label>
                Full Name *
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
              />

            </div>


            {/* =========================
                EMAIL
            ========================= */}

            <div className="form-group">

              <label>
                Email Address *
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />

            </div>


            {/* =========================
                PHONE
            ========================= */}

            <div className="form-group">

              <label>
                Phone Number *
              </label>

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                required
              />

            </div>


            {/* =========================
                REQUIREMENT
            ========================= */}

            <div className="form-group">

              <label>
                Business Requirement *
              </label>

              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
              >

                <option value="">
                  Select your requirement
                </option>

                <option value="Fruits Wholesale">
                  Fruits Wholesale
                </option>

                <option value="Vegetables Wholesale">
                  Vegetables Wholesale
                </option>

                <option value="Bulk Supply">
                  Bulk Supply
                </option>

                <option value="Fresh Produce Trading">
                  Fresh Produce Trading
                </option>

                <option value="Trader Supply">
                  Trader Supply
                </option>

                <option value="Business Enquiry">
                  Business Enquiry
                </option>

                <option value="Other">
                  Other
                </option>

              </select>

            </div>


            {/* =========================
                MESSAGE
            ========================= */}

            <div className="form-group">

              <label>
                Message *
              </label>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                placeholder="Tell us about your wholesale requirement..."
                required
              ></textarea>

            </div>


            {/* =========================
                SUBMIT
            ========================= */}

            <button
              type="submit"
              className="contact-submit-btn"
            >
              Send Business Enquiry →
            </button>

          </form>

        </div>

      </section>

    </main>
  );
};

export default Contact;