import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const services = [
    {
      icon: "📱",
      title: "Social Media Marketing",
      text: "Build your brand presence and engage your audience across social media platforms."
    },
    {
      icon: "📢",
      title: "Meta Ads",
      text: "Reach the right customers with high-performing Facebook and Instagram advertising campaigns."
    },
    {
      icon: "🔎",
      title: "Google Ads",
      text: "Generate targeted traffic, leads and sales with result-driven Google PPC campaigns."
    },
    {
      icon: "🚀",
      title: "Search Engine Optimization",
      text: "Improve your Google rankings and attract more organic visitors to your website."
    },
    {
      icon: "💻",
      title: "Website Development",
      text: "Professional, responsive and conversion-focused websites for modern businesses."
    },
    {
      icon: "🛒",
      title: "E-commerce Development",
      text: "Create powerful online stores designed to increase customer engagement and sales."
    },
    {
      icon: "🎯",
      title: "Landing Page Design",
      text: "High-converting landing pages designed specifically for your marketing campaigns."
    },
    {
      icon: "💬",
      title: "WhatsApp Business API",
      text: "Connect with customers, automate communication and improve business conversions."
    },
    {
      icon: "📍",
      title: "Google Business Profile",
      text: "Improve your local visibility and help nearby customers discover your business."
    },
    {
      icon: "🎨",
      title: "Graphic Design & Branding",
      text: "Create a strong and professional visual identity for your business."
    },
    {
      icon: "🎬",
      title: "Video Editing & Reels",
      text: "Create engaging short-form videos and reels that capture attention."
    },
    {
      icon: "✍️",
      title: "Content Marketing",
      text: "Create valuable content that builds trust, attracts customers and grows your brand."
    }
  ];

  const faqs = [
    {
      question: "What digital marketing services do you provide?",
      answer:
        "We provide Social Media Marketing, Meta Ads, Google Ads, SEO, Website Development, E-commerce Development, Landing Pages, WhatsApp Business API, Google Business Profile Optimization, Branding, Video Editing and Content Marketing."
    },
    {
      question: "Can you help a new business grow online?",
      answer:
        "Yes. We can create a customized digital marketing strategy based on your business goals, target audience and budget."
    },
    {
      question: "Do you provide website development?",
      answer:
        "Yes. We develop responsive, modern and business-focused websites designed to provide a professional online presence."
    },
    {
      question: "Do you manage Facebook and Instagram Ads?",
      answer:
        "Yes. We can help plan, create and optimize Meta advertising campaigns for better reach, leads and conversions."
    },
    {
      question: "How can I get started?",
      answer:
        "Simply contact us through the Contact Us page or WhatsApp. Our team can understand your requirements and suggest the right digital marketing solution."
    }
  ];

  return (
    <div className="home">

      {/* ================= HERO ================= */}
      <section className="hero-section">
        <div className="hero-container">

          <div className="hero-content">
            <span className="hero-badge">
              DIGITAL MARKETING AGENCY
            </span>

            <h1>
              Grow Your Business
              <span> With Digital Marketing</span>
            </h1>

            <p>
              We help businesses build a powerful online presence,
              reach the right audience, generate quality leads and
              increase sales through result-driven digital marketing
              strategies.
            </p>

            <div className="hero-buttons">
              <Link to="/contact" className="primary-btn">
                Get Started
              </Link>

              <Link to="/services" className="secondary-btn">
                Explore Services
              </Link>
            </div>

            <div className="hero-trust">
              <div>
                <strong>12+</strong>
                <span>Services</span>
              </div>

              <div>
                <strong>100%</strong>
                <span>Business Focused</span>
              </div>

              <div>
                <strong>24/7</strong>
                <span>Support</span>
              </div>
            </div>
          </div>

          <div className="hero-card-wrapper">
            <div className="hero-main-card">
              <div className="marketing-icon">📈</div>

              <h3>Digital Growth</h3>

              <p>
                Smart strategies. Better visibility.
                More customers.
              </p>

              <div className="growth-chart">
                <div className="chart-bar bar-one"></div>
                <div className="chart-bar bar-two"></div>
                <div className="chart-bar bar-three"></div>
                <div className="chart-bar bar-four"></div>
                <div className="chart-bar bar-five"></div>
              </div>

              <div className="growth-info">
                <span>Business Growth</span>
                <strong>+85%</strong>
              </div>
            </div>

            <div className="floating-card floating-one">
              <span>🎯</span>
              <div>
                <strong>Target Audience</strong>
                <small>Right People</small>
              </div>
            </div>

            <div className="floating-card floating-two">
              <span>🚀</span>
              <div>
                <strong>Online Growth</strong>
                <small>Result Driven</small>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="services-section">
        <div className="section-heading">
          <span>WHAT WE DO</span>

          <h2>
            Digital Marketing Services
            <br />
            <strong>That Grow Your Business</strong>
          </h2>

          <p>
            Everything you need to build your brand, reach your audience
            and grow your business online.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>

              <div className="service-icon">
                {service.icon}
              </div>

              <h3>{service.title}</h3>

              <p>{service.text}</p>

              <Link to="/services">
                Learn More →
              </Link>

            </div>
          ))}
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="why-section">
        <div className="why-container">

          <div className="why-content">
            <span className="section-label">
              WHY CHOOSE US
            </span>

            <h2>
              We Don't Just Market.
              <span> We Grow Businesses.</span>
            </h2>

            <p>
              Your business deserves more than random marketing.
              We focus on understanding your goals, your audience
              and your market before creating a digital strategy.
            </p>

            <div className="why-list">

              <div className="why-item">
                <div className="why-number">01</div>
                <div>
                  <h3>Result-Oriented Strategy</h3>
                  <p>
                    Every campaign is planned around measurable
                    business objectives.
                  </p>
                </div>
              </div>

              <div className="why-item">
                <div className="why-number">02</div>
                <div>
                  <h3>Data-Driven Approach</h3>
                  <p>
                    We use insights and performance data to improve
                    marketing decisions.
                  </p>
                </div>
              </div>

              <div className="why-item">
                <div className="why-number">03</div>
                <div>
                  <h3>Customized Solutions</h3>
                  <p>
                    We create strategies according to your business,
                    audience and budget.
                  </p>
                </div>
              </div>

              <div className="why-item">
                <div className="why-number">04</div>
                <div>
                  <h3>Continuous Support</h3>
                  <p>
                    We stay connected with you throughout your
                    digital growth journey.
                  </p>
                </div>
              </div>

            </div>
          </div>

          <div className="why-stats">

            <div className="stat-box">
              <strong>12+</strong>
              <span>Digital Services</span>
            </div>

            <div className="stat-box">
              <strong>360°</strong>
              <span>Marketing Solutions</span>
            </div>

            <div className="stat-box">
              <strong>100%</strong>
              <span>Business Focus</span>
            </div>

            <div className="stat-box">
              <strong>24/7</strong>
              <span>Support</span>
            </div>

          </div>

        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="process-section">

        <div className="section-heading">
          <span>OUR PROCESS</span>

          <h2>
            Simple Process.
            <strong> Powerful Results.</strong>
          </h2>

          <p>
            We follow a clear and transparent process to help your
            business grow online.
          </p>
        </div>

        <div className="process-grid">

          <div className="process-card">
            <span>01</span>
            <h3>Understand</h3>
            <p>
              We understand your business, goals and target audience.
            </p>
          </div>

          <div className="process-card">
            <span>02</span>
            <h3>Plan</h3>
            <p>
              We create a customized digital marketing strategy.
            </p>
          </div>

          <div className="process-card">
            <span>03</span>
            <h3>Execute</h3>
            <p>
              Our team implements campaigns and creative strategies.
            </p>
          </div>

          <div className="process-card">
            <span>04</span>
            <h3>Optimize</h3>
            <p>
              We analyze performance and continuously improve results.
            </p>
          </div>

        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="about-home-section">

        <div className="about-home-container">

          <div className="about-home-content">
            <span className="section-label">
              ABOUT OUR AGENCY
            </span>

            <h2>
              Your Digital Growth
              <span> Is Our Priority</span>
            </h2>

            <p>
              We help businesses establish a strong digital presence
              through creative, strategic and performance-focused
              marketing solutions.
            </p>

            <p>
              From social media and paid advertising to SEO,
              website development and branding, we provide
              complete digital solutions under one roof.
            </p>

            <Link to="/about" className="about-btn">
              Learn More About Us →
            </Link>
          </div>

          <div className="about-home-card">

            <div className="about-card-icon">
              💡
            </div>

            <h3>
              Smart Digital Strategies
            </h3>

            <p>
              We combine creativity, technology and marketing
              to create solutions that help businesses move forward.
            </p>

            <div className="about-points">
              <span>✓ Creative Thinking</span>
              <span>✓ Modern Technology</span>
              <span>✓ Performance Marketing</span>
              <span>✓ Customer Focused</span>
            </div>

          </div>

        </div>

      </section>

      {/* ================= FAQ ================= */}
      <section className="faq-section">

        <div className="section-heading">

          <span>FAQ</span>

          <h2>
            Frequently Asked
            <strong> Questions</strong>
          </h2>

          <p>
            Find answers to some common questions about our services.
          </p>

        </div>

        <div className="faq-container">

          {faqs.map((faq, index) => (

            <div
              className={`faq-item ${
                openFaq === index ? "active" : ""
              }`}
              key={index}
            >

              <button
                onClick={() =>
                  setOpenFaq(
                    openFaq === index ? null : index
                  )
                }
              >

                <span>{faq.question}</span>

                <span className="faq-icon">
                  {openFaq === index ? "−" : "+"}
                </span>

              </button>

              {openFaq === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}

            </div>

          ))}

        </div>

      </section>

      {/* ================= CTA ================= */}
      <section className="cta-section">

        <div className="cta-container">

          <div>
            <span>LET'S GROW TOGETHER</span>

            <h2>
              Ready To Grow Your
              <strong> Business Online?</strong>
            </h2>

            <p>
              Let's create a powerful digital marketing strategy
              for your business.
            </p>
          </div>

          <div className="cta-buttons">

            <Link to="/contact" className="cta-primary">
              Contact Us
            </Link>

            <a
              href="https://wa.me/919907406837"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-whatsapp"
            >
              WhatsApp Us
            </a>

          </div>

        </div>

      </section>

    </div>
  );
};

export default Home;