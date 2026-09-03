import { Link } from "react-router-dom";
import "./Services.css";

const services = [
  {
    icon: "📱",
    title: "Social Media Marketing",
    description:
      "Build your brand presence and engage your audience across social media platforms.",
  },
  {
    icon: "📣",
    title: "Meta Ads",
    description:
      "Reach the right customers with high-performing Facebook and Instagram advertising campaigns.",
  },
  {
    icon: "🎯",
    title: "Google Ads (PPC)",
    description:
      "Generate quality leads and sales with targeted Google Pay-Per-Click advertising campaigns.",
  },
  {
    icon: "🔍",
    title: "Search Engine Optimization (SEO)",
    description:
      "Improve your Google rankings and get more organic traffic with our SEO strategies.",
  },
  {
    icon: "💻",
    title: "Website Design & Development",
    description:
      "Modern, responsive and conversion-focused websites built for your business.",
  },
  {
    icon: "🛒",
    title: "E-commerce Website Development",
    description:
      "Create powerful online stores with a smooth shopping experience.",
  },
  {
    icon: "🚀",
    title: "Landing Page Design",
    description:
      "High-converting landing pages designed to turn visitors into leads.",
  },
  {
    icon: "💬",
    title: "WhatsApp Business API Integration",
    description:
      "Connect with customers instantly using WhatsApp automation and business messaging.",
  },
  {
    icon: "📍",
    title: "Google Business Profile Optimization",
    description:
      "Improve your local visibility and attract more customers from Google Search and Maps.",
  },
  {
    icon: "🎨",
    title: "Graphic Design & Branding",
    description:
      "Build a memorable brand identity with professional graphics and creative designs.",
  },
  {
    icon: "🎬",
    title: "Video Editing & Reels",
    description:
      "Create engaging short-form videos and reels that capture attention.",
  },
  {
    icon: "✍️",
    title: "Content Marketing",
    description:
      "Create valuable content that attracts your audience and builds brand authority.",
  },
];

const Services = () => {
  return (
    <main className="services-page">

      {/* Hero */}
      <section className="services-hero">
        <span className="section-badge">Our Services</span>

        <h1>
          Digital Marketing Services That{" "}
          <span>Grow Your Business</span>
        </h1>

        <p>
          From social media marketing to SEO, paid advertising and
          website development, we provide complete digital solutions
          for your business.
        </p>
      </section>

      {/* Services */}
      <section className="all-services">

        <div className="services-heading">
          <span className="section-badge">What We Do</span>

          <h2>
            Everything You Need to{" "}
            <span>Grow Online</span>
          </h2>

          <p>
            Choose the right digital marketing services for your
            business and start generating better results.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>

              <div className="service-icon">
                {service.icon}
              </div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <Link to="/contact">
                Get Started →
              </Link>

            </div>
          ))}
        </div>

      </section>

      {/* CTA */}
      <section className="services-cta">

        <h2>Ready to Grow Your Business?</h2>

        <p>
          Let's create a digital marketing strategy that works
          for your business.
        </p>

        <Link to="/contact">
          Get Free Consultation →
        </Link>

      </section>

    </main>
  );
};

export default Services;