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

          {/* Left Content */}
          <div className="hero-content">

            <span className="hero-badge">
              🚀 Digital Marketing Agency
            </span>

            <h1>
              Grow Your Business
              <span> With Digital Marketing</span>
            </h1>

            <p>
              We help businesses build a powerful online presence,
              generate quality leads and grow faster with result-driven
              digital marketing solutions.
            </p>

            <div className="hero-buttons">

              <Link to="/contact" className="primary-btn">
                Get Free Consultation
              </Link>

              <Link to="/services" className="secondary-btn">
                Explore Services
              </Link>

            </div>

            <div className="hero-trust">

              <div>
                <strong>100+</strong>
                <span>Projects</span>
              </div>

              <div>
                <strong>50+</strong>
                <span>Happy Clients</span>
              </div>

              <div>
                <strong>5+</strong>
                <span>Years Experience</span>
              </div>

            </div>

          </div>


          {/* Right Visual */}
          <div className="hero-visual">

            <div className="dashboard-card">

              <div className="card-header">
                <span>Marketing Growth</span>
                <span className="status">● Live</span>
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
                  <small>Monthly Growth</small>
                  <strong>+78.4%</strong>
                </div>

                <div>
                  <small>New Leads</small>
                  <strong>1,248</strong>
                </div>

              </div>

            </div>


            {/* Floating Cards */}

            <div className="floating-card leads-card">
              <span>New Leads</span>
              <strong>+248</strong>
            </div>

            <div className="floating-card revenue-card">
              <span>Revenue</span>
              <strong>+42.8%</strong>
            </div>

          </div>

        </div>

      </section>


      {/* =========================
          SERVICES SECTION
      ========================= */}

      <section className="services-section">

        {/* Section Heading */}

        <div className="section-heading">

          <span className="section-badge">
            Our Services
          </span>

          <h2>
            Everything You Need to
            <span> Grow Online</span>
          </h2>

          <p>
            Powerful digital marketing solutions designed to help
            your business attract customers, build your brand and
            increase revenue.
          </p>

        </div>


        {/* Services Grid */}

        <div className="services-grid">


          {/* Service 1 */}
          <div className="service-card">

            <div className="service-icon">
              📱
            </div>

            <h3>
              Social Media Marketing
            </h3>

            <p>
              Build your brand presence and engage your audience
              across social media platforms.
            </p>

            <Link to="/services">
              Learn More →
            </Link>

          </div>


          {/* Service 2 */}
          <div className="service-card">

            <div className="service-icon">
              📣
            </div>

            <h3>
              Meta Ads
            </h3>

            <p>
              Reach the right customers with high-performing
              Facebook and Instagram advertising campaigns.
            </p>

            <Link to="/services">
              Learn More →
            </Link>

          </div>


          {/* Service 3 */}
          <div className="service-card">

            <div className="service-icon">
              🎯
            </div>

            <h3>
              Google Ads (PPC)
            </h3>

            <p>
              Generate quality leads and sales with targeted
              Google Pay-Per-Click advertising campaigns.
            </p>

            <Link to="/services">
              Learn More →
            </Link>

          </div>


          {/* Service 4 */}
          <div className="service-card">

            <div className="service-icon">
              🔍
            </div>

            <h3>
              Search Engine Optimization
            </h3>

            <p>
              Improve your Google rankings and get more organic
              traffic with our SEO strategies.
            </p>

            <Link to="/services">
              Learn More →
            </Link>

          </div>


          {/* Service 5 */}
          <div className="service-card">

            <div className="service-icon">
              💻
            </div>

            <h3>
              Website Design & Development
            </h3>

            <p>
              Modern, responsive and conversion-focused websites
              built for your business.
            </p>

            <Link to="/services">
              Learn More →
            </Link>

          </div>


          {/* Service 6 */}
          <div className="service-card">

            <div className="service-icon">
              🛒
            </div>

            <h3>
              E-commerce Development
            </h3>

            <p>
              Create powerful online stores that provide a smooth
              shopping experience for your customers.
            </p>

            <Link to="/services">
              Learn More →
            </Link>

          </div>


          {/* Service 7 */}
          <div className="service-card">

            <div className="service-icon">
              🚀
            </div>

            <h3>
              Landing Page Design
            </h3>

            <p>
              High-converting landing pages designed to turn
              visitors into leads and customers.
            </p>

            <Link to="/services">
              Learn More →
            </Link>

          </div>


          {/* Service 8 */}
          <div className="service-card">

            <div className="service-icon">
              💬
            </div>

            <h3>
              WhatsApp Business API
            </h3>

            <p>
              Connect with customers instantly using WhatsApp
              automation and business messaging.
            </p>

            <Link to="/services">
              Learn More →
            </Link>

          </div>


          {/* Service 9 */}
          <div className="service-card">

            <div className="service-icon">
              📍
            </div>

            <h3>
              Google Business Profile
            </h3>

            <p>
              Improve your local visibility and attract more
              customers from Google Search and Maps.
            </p>

            <Link to="/services">
              Learn More →
            </Link>

          </div>


          {/* Service 10 */}
          <div className="service-card">

            <div className="service-icon">
              🎨
            </div>

            <h3>
              Graphic Design & Branding
            </h3>

            <p>
              Build a memorable brand identity with professional
              graphics and creative designs.
            </p>

            <Link to="/services">
              Learn More →
            </Link>

          </div>


          {/* Service 11 */}
          <div className="service-card">

            <div className="service-icon">
              🎬
            </div>

            <h3>
              Video Editing & Reels
            </h3>

            <p>
              Create engaging short-form videos and reels that
              capture attention and increase engagement.
            </p>

            <Link to="/services">
              Learn More →
            </Link>

          </div>


          {/* Service 12 */}
          <div className="service-card">

            <div className="service-icon">
              ✍️
            </div>

            <h3>
              Content Marketing
            </h3>

            <p>
              Create valuable content that attracts your audience
              and builds long-term brand authority.
            </p>

            <Link to="/services">
              Learn More →
            </Link>

          </div>

        </div>


        {/* View All Services */}

        <div className="services-button">

          <Link
            to="/services"
            className="view-services-btn"
          >
            View All Services →
          </Link>

        </div>

```jsx
{/* =========================
    WHY CHOOSE US SECTION
========================= */}

<section className="why-section">

  <div className="why-container">

    {/* Left Content */}

    <div className="why-content">

      <span className="section-badge">
        Why Choose Us
      </span>

      <h2>
        We Don't Just Market,
        <span> We Grow Businesses.</span>
      </h2>

      <p>
        We combine creativity, technology and data-driven
        strategies to create digital marketing campaigns
        that deliver real business results.
      </p>

      <Link to="/contact" className="why-btn">
        Start Your Growth Journey →
      </Link>

    </div>


    {/* Right Features */}

    <div className="why-features">

      {/* Feature 1 */}

      <div className="feature-card">

        <div className="feature-icon">
          🎯
        </div>

        <div>
          <h3>
            Result Driven Strategy
          </h3>

          <p>
            Every campaign is planned around your business
            goals, audience and measurable results.
          </p>
        </div>

      </div>


      {/* Feature 2 */}

      <div className="feature-card">

        <div className="feature-icon">
          📊
        </div>

        <div>
          <h3>
            Data Driven Decisions
          </h3>

          <p>
            We use analytics and performance data to
            continuously improve your campaigns.
          </p>
        </div>

      </div>


      {/* Feature 3 */}

      <div className="feature-card">

        <div className="feature-icon">
          ⚡
        </div>

        <div>
          <h3>
            Fast & Transparent
          </h3>

          <p>
            Clear communication, regular updates and
            transparent reporting keep you informed.
          </p>
        </div>

      </div>


      {/* Feature 4 */}

      <div className="feature-card">

        <div className="feature-icon">
          🤝
        </div>

        <div>
          <h3>
            Dedicated Support
          </h3>

          <p>
            Our team works closely with you to understand
            your needs and achieve your business goals.
          </p>
        </div>

      </div>

    </div>

  </div>


  {/* Statistics */}

  <div className="stats-container">

    <div className="stat-item">

      <strong>
        100+
      </strong>

      <span>
        Projects Completed
      </span>

    </div>


    <div className="stat-item">

      <strong>
        50+
      </strong>

      <span>
        Happy Clients
      </span>

    </div>


    <div className="stat-item">

      <strong>
        95%
      </strong>

      <span>
        Client Satisfaction
      </span>

    </div>


    <div className="stat-item">

      <strong>
        5+
      </strong>

      <span>
        Years Experience
      </span>

    </div>

  </div>

</section>

```jsx
{/* =========================
    PORTFOLIO SECTION
========================= */}

<section className="portfolio-section">

  {/* Section Heading */}

  <div className="section-heading">

    <span className="section-badge">
      Our Portfolio
    </span>

    <h2>
      Work That
      <span> Delivers Results</span>
    </h2>

    <p>
      Explore some of our recent digital marketing projects
      and see how we help businesses grow online.
    </p>

  </div>


  {/* Portfolio Grid */}

  <div className="portfolio-grid">


    {/* Project 1 */}

    <div className="portfolio-card">

      <div className="portfolio-image portfolio-bg-1">

        <span className="portfolio-category">
          Social Media
        </span>

        <div className="portfolio-overlay">
          <span>View Project →</span>
        </div>

      </div>

      <div className="portfolio-content">

        <h3>
          Fashion Brand Campaign
        </h3>

        <p>
          Social media strategy and content campaign
          for a growing fashion brand.
        </p>

      </div>

    </div>


    {/* Project 2 */}

    <div className="portfolio-card">

      <div className="portfolio-image portfolio-bg-2">

        <span className="portfolio-category">
          Google Ads
        </span>

        <div className="portfolio-overlay">
          <span>View Project →</span>
        </div>

      </div>

      <div className="portfolio-content">

        <h3>
          Local Business PPC Campaign
        </h3>

        <p>
          Google Ads campaign designed to generate
          high-quality local leads.
        </p>

      </div>

    </div>


    {/* Project 3 */}

    <div className="portfolio-card">

      <div className="portfolio-image portfolio-bg-3">

        <span className="portfolio-category">
          Website Development
        </span>

        <div className="portfolio-overlay">
          <span>View Project →</span>
        </div>

      </div>

      <div className="portfolio-content">

        <h3>
          Business Website
        </h3>

        <p>
          Modern responsive website designed to
          increase enquiries and conversions.
        </p>

      </div>

    </div>


    {/* Project 4 */}

    <div className="portfolio-card">

      <div className="portfolio-image portfolio-bg-4">

        <span className="portfolio-category">
          SEO
        </span>

        <div className="portfolio-overlay">
          <span>View Project →</span>
        </div>

      </div>

      <div className="portfolio-content">

        <h3>
          SEO Growth Campaign
        </h3>

        <p>
          Search engine optimization campaign focused
          on increasing organic traffic.
        </p>

      </div>

    </div>


    {/* Project 5 */}

    <div className="portfolio-card">

      <div className="portfolio-image portfolio-bg-5">

        <span className="portfolio-category">
          Branding
        </span>

        <div className="portfolio-overlay">
          <span>View Project →</span>
        </div>

      </div>

      <div className="portfolio-content">

        <h3>
          Startup Brand Identity
        </h3>

        <p>
          Complete branding and visual identity
          designed for a new startup.
        </p>

      </div>

    </div>


    {/* Project 6 */}

    <div className="portfolio-card">

      <div className="portfolio-image portfolio-bg-6">

        <span className="portfolio-category">
          E-commerce
        </span>

        <div className="portfolio-overlay">
          <span>View Project →</span>
        </div>

      </div>

      <div className="portfolio-content">

        <h3>
          E-commerce Growth
        </h3>

        <p>
          Digital marketing strategy focused on
          increasing online sales and conversions.
        </p>

      </div>

    </div>

  </div>


  {/* CTA */}

  <div className="portfolio-button">

    <Link
      to="/portfolio"
      className="view-portfolio-btn"
    >
      View All Projects →
    </Link>

  </div>

</section>

```jsx
{/* =========================
    TESTIMONIALS SECTION
========================= */}

<section className="testimonials-section">

  {/* Section Heading */}

  <div className="section-heading">

    <span className="section-badge">
      Client Reviews
    </span>

    <h2>
      What Our
      <span> Clients Say</span>
    </h2>

    <p>
      We focus on delivering real results and building
      long-term relationships with our clients.
    </p>

  </div>


  {/* Testimonials Grid */}

  <div className="testimonials-grid">


    {/* Review 1 */}

    <div className="testimonial-card">

      <div className="testimonial-stars">
        ★★★★★
      </div>

      <p className="testimonial-text">
        "The team completely transformed our online presence.
        Our social media engagement and enquiries increased
        significantly within a few months."
      </p>

      <div className="client-info">

        <div className="client-avatar">
          AS
        </div>

        <div>
          <h3>
            Amit Sharma
          </h3>

          <span>
            Founder, Sharma Fashion
          </span>
        </div>

      </div>

    </div>


    {/* Review 2 */}

    <div className="testimonial-card">

      <div className="testimonial-stars">
        ★★★★★
      </div>

      <p className="testimonial-text">
        "Their Google Ads strategy helped us generate better
        quality leads while reducing our advertising cost.
        Highly recommended for growing businesses."
      </p>

      <div className="client-info">

        <div className="client-avatar">
          PR
        </div>

        <div>
          <h3>
            Priya Rane
          </h3>

          <span>
            Business Owner, Rane Interiors
          </span>
        </div>

      </div>

    </div>


    {/* Review 3 */}

    <div className="testimonial-card">

      <div className="testimonial-stars">
        ★★★★★
      </div>

      <p className="testimonial-text">
        "From website development to SEO, everything was
        handled professionally. We now receive consistent
        enquiries through our website."
      </p>

      <div className="client-info">

        <div className="client-avatar">
          RK
        </div>

        <div>
          <h3>
            Rahul Kulkarni
          </h3>

          <span>
            Director, RK Solutions
          </span>
        </div>

      </div>

    </div>

  </div>


  {/* Overall Rating */}

  <div className="overall-rating">

    <strong>
      4.9/5
    </strong>

    <div>
      <span className="rating-stars">
        ★★★★★
      </span>

      <small>
        Average Client Rating
      </small>
    </div>

  </div>

</section>
```
```jsx
{/* =========================
    FAQ SECTION
========================= */}

<section className="faq-section">

  {/* Section Heading */}

  <div className="section-heading">

    <span className="section-badge">
      FAQ
    </span>

    <h2>
      Frequently Asked
      <span> Questions</span>
    </h2>

    <p>
      Find answers to some of the most common questions
      about our digital marketing services.
    </p>

  </div>


  {/* FAQ List */}

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
          What digital marketing services do you provide?
        </span>

        <span className="faq-icon">
          {openFaq === 0 ? "−" : "+"}
        </span>

      </button>

      <div className="faq-answer">

        <p>
          We provide Social Media Marketing, Meta Ads,
          Google Ads, SEO, Website Development, E-commerce
          Development, Landing Pages, WhatsApp Business API,
          Google Business Profile Optimization, Branding,
          Video Editing and Content Marketing.
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
          How can digital marketing help my business?
        </span>

        <span className="faq-icon">
          {openFaq === 1 ? "−" : "+"}
        </span>

      </button>

      <div className="faq-answer">

        <p>
          Digital marketing can help your business reach
          the right audience, generate leads, increase brand
          awareness, improve online visibility and generate
          more sales.
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
          How long does it take to see results?
        </span>

        <span className="faq-icon">
          {openFaq === 2 ? "−" : "+"}
        </span>

      </button>

      <div className="faq-answer">

        <p>
          Results depend on the service and business goals.
          Paid advertising can generate leads quickly,
          while SEO and content marketing usually require
          consistent effort over several months.
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
          Do you provide customized marketing strategies?
        </span>

        <span className="faq-icon">
          {openFaq === 3 ? "−" : "+"}
        </span>

      </button>

      <div className="faq-answer">

        <p>
          Yes. We understand that every business is
          different. We create customized strategies based
          on your industry, target audience, budget and
          business objectives.
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
          Do you provide monthly digital marketing services?
        </span>

        <span className="faq-icon">
          {openFaq === 4 ? "−" : "+"}
        </span>

      </button>

      <div className="faq-answer">

        <p>
          Yes. We offer flexible monthly marketing plans
          that can include social media management, paid
          advertising, SEO, content creation and reporting.
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
          How can I get started?
        </span>

        <span className="faq-icon">
          {openFaq === 5 ? "−" : "+"}
        </span>

      </button>

      <div className="faq-answer">

        <p>
          Simply contact us through WhatsApp, phone or our
          contact form. We will understand your requirements
          and recommend the right digital marketing solution
          for your business.
        </p>

      </div>

    </div>

  </div>


  {/* FAQ CTA */}

  <div className="faq-cta">

    <h3>
      Still have questions?
    </h3>

    <p>
      Talk to our team and get the right solution for your business.
    </p>

    <Link
      to="/contact"
      className="faq-btn"
    >
      Contact Us →
    </Link>

  </div>

</section>
```
```jsx id="r8nq4m"
{/* =========================
    CONTACT / LEAD GENERATION
========================= */}

<section className="contact-section">

  <div className="contact-container">

    {/* =========================
        LEFT CONTENT
    ========================= */}

    <div className="contact-info">

      <span className="section-badge">
        Let's Talk
      </span>

      <h2>
        Ready to Grow Your
        <span> Business Online?</span>
      </h2>

      <p>
        Tell us about your business and your goals.
        Our team will help you choose the right digital
        marketing strategy to grow your business.
      </p>


      {/* Contact Options */}

      <div className="contact-options">


        {/* WhatsApp */}

        <a
          href="https://wa.me/919999999999"
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


        {/* Call */}

        <a
          href="tel:+919999999999"
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
              +91 99999 99999
            </strong>
          </div>

        </a>


        {/* Email */}

        <a
          href="mailto:hello@youragency.com"
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
              hello@youragency.com
            </strong>
          </div>

        </a>

      </div>

    </div>


    {/* =========================
        CONTACT FORM
    ========================= */}

    <div className="contact-form-card">

      <h3>
        Get a Free Consultation
      </h3>

      <p>
        Fill out the form and our team will contact you.
      </p>


      <form>

        {/* Name */}

        <div className="form-group">

          <label>
            Full Name
          </label>

          <input
            type="text"
            placeholder="Enter your name"
            required
          />

        </div>


        {/* Email */}

        <div className="form-group">

          <label>
            Email Address
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            required
          />

        </div>


        {/* Phone */}

        <div className="form-group">

          <label>
            Phone Number
          </label>

          <input
            type="tel"
            placeholder="Enter your phone number"
            required
          />

        </div>


        {/* Service */}

        <div className="form-group">

          <label>
            Interested Service
          </label>

          <select required>

            <option value="">
              Select a service
            </option>

            <option>
              Social Media Marketing
            </option>

            <option>
              Meta Ads
            </option>

            <option>
              Google Ads
            </option>

            <option>
              SEO
            </option>

            <option>
              Website Development
            </option>

            <option>
              E-commerce Development
            </option>

            <option>
              Other
            </option>

          </select>

        </div>


        {/* Message */}

        <div className="form-group">

          <label>
            Message
          </label>

          <textarea
            rows="4"
            placeholder="Tell us about your requirements..."
          ></textarea>

        </div>


        {/* Submit */}

        <button
          type="submit"
          className="contact-submit-btn"
        >
          Send Enquiry →
        </button>

      </form>

    </div>

  </div>

</section>
```


      </section>

    </main>
  );
};

export default Home;

