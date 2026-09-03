import { Link } from "react-router-dom";
import "./Portfolio.css";

const projects = [
  {
    category: "Social Media Marketing",
    title: "Fashion Brand Campaign",
    description:
      "Social media strategy and creative content campaign designed to increase brand awareness and engagement.",
    icon: "📱",
  },
  {
    category: "Google Ads",
    title: "Local Business PPC Campaign",
    description:
      "Targeted Google Ads campaign focused on generating high-quality local leads and enquiries.",
    icon: "🎯",
  },
  {
    category: "Website Development",
    title: "Business Website",
    description:
      "Modern, responsive and conversion-focused website designed to increase enquiries.",
    icon: "💻",
  },
  {
    category: "SEO",
    title: "SEO Growth Campaign",
    description:
      "Search engine optimization strategy focused on improving organic visibility and traffic.",
    icon: "🔍",
  },
  {
    category: "Branding",
    title: "Startup Brand Identity",
    description:
      "Complete visual identity and branding solution created for a growing startup.",
    icon: "🎨",
  },
  {
    category: "E-commerce",
    title: "E-commerce Growth",
    description:
      "Digital marketing strategy focused on increasing online sales and customer conversions.",
    icon: "🛒",
  },
];

const Portfolio = () => {
  return (
    <main className="portfolio-page">

      {/* HERO */}

      <section className="portfolio-hero">
        <span className="portfolio-badge">
          Our Portfolio
        </span>

        <h1>
          Work That{" "}
          <span>Delivers Results</span>
        </h1>

        <p>
          Explore our recent digital marketing, website development,
          SEO, advertising and branding projects.
        </p>
      </section>

      {/* PROJECTS */}

      <section className="portfolio-projects">

        <div className="portfolio-heading">
          <span className="portfolio-badge">
            Recent Projects
          </span>

          <h2>
            Our Work &{" "}
            <span>Success Stories</span>
          </h2>

          <p>
            We combine creativity, strategy and technology to
            create digital experiences that help businesses grow.
          </p>
        </div>

        <div className="portfolio-grid">

          {projects.map((project, index) => (
            <div className="portfolio-card" key={index}>

              <div className={`portfolio-image portfolio-bg-${index + 1}`}>

                <span className="portfolio-category">
                  {project.category}
                </span>

                <div className="portfolio-icon">
                  {project.icon}
                </div>

                <div className="portfolio-overlay">
                  <span>View Project →</span>
                </div>

              </div>

              <div className="portfolio-content">

                <h3>
                  {project.title}
                </h3>

                <p>
                  {project.description}
                </p>

                <Link to="/contact">
                  Start Similar Project →
                </Link>

              </div>

            </div>
          ))}

        </div>

      </section>

      {/* CTA */}

      <section className="portfolio-cta">

        <h2>
          Have a Project in Mind?
        </h2>

        <p>
          Let's discuss your business goals and create
          something that delivers real results.
        </p>

        <Link to="/contact">
          Get Free Consultation →
        </Link>

      </section>

    </main>
  );
};

export default Portfolio;