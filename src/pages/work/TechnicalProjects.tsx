import { useLocation } from "react-router-dom";
import Title from "../../components/page/Title";
import { TECHNICAL_PROJECTS } from "../../utils/constants";
import MainCard from "../../components/card/MainCard";
import "../../styles/Portfolio.css";
import CtaSection from "../../components/section/CtaSection";
import ButtonLink from "../../components/button/ButtonLink";
import { CALENDLY_URL } from "../../utils/constants";

const TechnicalProjects = () => {
  const { pathname } = useLocation();

  return (
    <div className="page-container">
      <Title pathname={pathname} title="Technical Work" />

      <section className="work-hero">
        <h2>Backend + AI engineering samples</h2>
        <p>
          Systems work that maps directly to shipping MVP backends: APIs, auth, orchestration,
          and AI integrations.
        </p>
        <div className="work-hero-ctas">
          <ButtonLink
            link={CALENDLY_URL}
            text="Book a Free Build Call"
            className="highlight-primary-button"
            target="_blank"
          />
          <ButtonLink
            link="/services#pricing"
            text="See Pricing & Timeline"
            className="highlight-secondary-button"
          />
        </div>
      </section>

      <section className="portfolio-section">
        <div className="portfolio-grid">
          {TECHNICAL_PROJECTS.map((project, index) => (
            <MainCard
              id={String(project.id)}
              key={String(project.id)}
              index={index}
              title={project.title}
              description={project.description}
              image={project.image}
              outcomes={project.outcomes}
              link={project.link}
              ctaLabel="View Repo"
              appStore={project.appStore}
              technologies={project.technologies}
            />
          ))}
        </div>
      </section>

      <CtaSection />
    </div>
  );
};

export default TechnicalProjects;
