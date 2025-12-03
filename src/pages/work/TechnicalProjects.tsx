import { useLocation } from 'react-router-dom';
import Title from '../../components/page/Title';
import { TECHNICAL_PROJECTS } from '../../utils/constants';
import MainCard from '../../components/card/MainCard';
import '../../styles/Portfolio.css';
import CtaSection from '../../components/section/CtaSection';

const TechnicalProjects = () => {
  const { pathname } = useLocation();
  return (
    <div className="page-container">
      <Title pathname={pathname} title="Technical Projects" />
      <section className="portfolio-section">
        <div className="portfolio-grid">
          {TECHNICAL_PROJECTS.map((project, index) => (
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

export default TechnicalProjects;
