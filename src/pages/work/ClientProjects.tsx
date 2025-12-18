import { useLocation } from "react-router-dom";
import Title from "../../components/page/Title";
import { CLIENT_PROJECTS } from "../../utils/constants";
import MainCard from "../../components/card/MainCard";
import CtaSection from "../../components/section/CtaSection";
import "../../styles/Portfolio.css";
import ButtonLink from "../../components/button/ButtonLink";
import { CALENDLY_URL } from "../../utils/constants";

const ClientProjects = () => {
  const { pathname } = useLocation();

  return (
    <div className="page-container">
      <Title pathname={pathname} title="Client Work" />

      <section className="work-hero">
        <h2>Proof I can ship</h2>
        <p>
          Selected projects where I delivered real outcomes—fast launches,
          stable deployments, and scalable backends.
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
          {CLIENT_PROJECTS.map((project, index) => (
            <MainCard
              key={String(project.id)}
              id={String(project.id)}
              index={index}
              title={project.title}
              description={project.description}
              image={project.image}
              outcomes={project.outcomes}
              link={project.link}
              ctaLabel="View Live"
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

export default ClientProjects;
