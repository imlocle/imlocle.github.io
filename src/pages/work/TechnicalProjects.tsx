import { useLocation } from "react-router-dom";

import "@styles/pages/Portfolio.css";
import ButtonLink from "@components/button/ButtonLink";
import MainCard from "@components/card/MainCard";
import TitleHeader from "@/components/header/TitleHeader";
import CtaSection from "@components/section/CtaSection";
import { TECHNICAL_PROJECTS, CALENDLY_URL } from "@utils/constants";

const TechnicalProjects = () => {
  const { pathname } = useLocation();

  return (
    <div className="page-container">
      <TitleHeader pathname={pathname} title="Technical Work" />

      <section className="work-hero">
        <h2>Backend + AI engineering samples</h2>
        <p>
          Systems work that maps directly to shipping MVP backends: APIs, auth,
          orchestration, and AI integrations.
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
              ctaLabel={project.ctaLabel}
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
