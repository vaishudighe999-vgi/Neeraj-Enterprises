import { Link } from "react-router-dom";
import "./About.css";

const About = () => {
  return (
    <main className="about-page">

      {/* HERO */}

      <section className="about-hero">

        <span className="about-badge">
          About Us
        </span>

        <h1>
          We Help Businesses{" "}
          <span>Grow Digitally</span>
        </h1>

        <p>
          We are a results-driven digital marketing team helping
          businesses build strong brands, generate leads and
          achieve sustainable online growth.
        </p>

      </section>

      {/* ABOUT COMPANY */}

      <section className="about-company">

        <div className="about-content">

          <span className="about-badge">
            Who We Are
          </span>

          <h2>
            Your Partner for{" "}
            <span>Digital Growth</span>
          </h2>

          <p>
            We provide complete digital marketing solutions
            designed around your business goals. From social
            media marketing and paid advertising to SEO,
            websites and branding, we help businesses build
            a powerful online presence.
          </p>

          <p>
            Our approach combines creativity, technology and
            data-driven strategies to create marketing campaigns
            that deliver measurable business results.
          </p>

          <Link to="/contact" className="about-btn">
            Work With Us →
          </Link>

        </div>

        <div className="about-visual">

          <div className="about-card">

            <div className="about-card-icon">
              🚀
            </div>

            <h3>
              Digital Growth
            </h3>

            <p>
              Strategy + Creativity + Technology
            </p>

          </div>

          <div className="about-stat stat-one">
            <strong>100+</strong>
            <span>Projects</span>
          </div>

          <div className="about-stat stat-two">
            <strong>50+</strong>
            <span>Happy Clients</span>
          </div>

        </div>

      </section>

      {/* MISSION & VISION */}

      <section className="mission-section">

        <div className="mission-card">

          <div className="mission-icon">
            🎯
          </div>

          <h3>
            Our Mission
          </h3>

          <p>
            Our mission is to help businesses grow through
            innovative, effective and result-oriented digital
            marketing strategies.
          </p>

        </div>

        <div className="mission-card">

          <div className="mission-icon">
            👁️
          </div>

          <h3>
            Our Vision
          </h3>

          <p>
            Our vision is to become a trusted digital growth
            partner for businesses looking to build successful
            and sustainable brands online.
          </p>

        </div>

        <div className="mission-card">

          <div className="mission-icon">
            🤝
          </div>

          <h3>
            Our Values
          </h3>

          <p>
            Transparency, creativity, performance and long-term
            client relationships are at the heart of everything
            we do.
          </p>

        </div>

      </section>

      {/* WHY US */}

      <section className="about-why">

        <div className="about-why-heading">

          <span className="about-badge">
            Why Choose Us
          </span>

          <h2>
            Why Businesses{" "}
            <span>Choose Us</span>
          </h2>

        </div>

        <div className="about-features">

          <div className="about-feature">
            <span>🎯</span>
            <h3>Result Driven</h3>
            <p>
              We focus on measurable business outcomes and
              meaningful growth.
            </p>
          </div>

          <div className="about-feature">
            <span>📊</span>
            <h3>Data Driven</h3>
            <p>
              We use data and analytics to make smarter
              marketing decisions.
            </p>
          </div>

          <div className="about-feature">
            <span>⚡</span>
            <h3>Fast Execution</h3>
            <p>
              We execute campaigns efficiently while maintaining
              quality and consistency.
            </p>
          </div>

          <div className="about-feature">
            <span>🤝</span>
            <h3>Dedicated Support</h3>
            <p>
              We work closely with clients and provide
              continuous support.
            </p>
          </div>

        </div>

      </section>

      {/* STATS */}

      <section className="about-stats">

        <div>
          <strong>100+</strong>
          <span>Projects Completed</span>
        </div>

        <div>
          <strong>50+</strong>
          <span>Happy Clients</span>
        </div>

        <div>
          <strong>95%</strong>
          <span>Client Satisfaction</span>
        </div>

        <div>
          <strong>5+</strong>
          <span>Years Experience</span>
        </div>

      </section>

      {/* CTA */}

      <section className="about-cta">

        <h2>
          Ready to Grow Your Business?
        </h2>

        <p>
          Let's build a powerful digital presence for your brand.
        </p>

        <Link to="/contact">
          Get Free Consultation →
        </Link>

      </section>

    </main>
  );
};

export default About;