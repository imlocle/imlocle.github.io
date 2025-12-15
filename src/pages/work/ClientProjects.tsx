import { useLocation } from "react-router-dom";
import Title from "../../components/page/Title";
import { CLIENT_PROJECTS } from "../../utils/constants";
import MainCard from "../../components/card/MainCard";
import CtaSection from "../../components/section/CtaSection";
import "../../styles/Portfolio.css";

const ClientProjects = () => {
  const { pathname } = useLocation();
  return (
    <div className="page-container">
      <Title pathname={pathname} title="Client Projects" />
      <section className="portfolio-section">
        <div className="portfolio-grid">
          {CLIENT_PROJECTS.map((project, index) => (
            <MainCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              outcomes={project.outcomes}
              link={project.link}
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
