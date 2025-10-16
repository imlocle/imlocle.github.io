import '../styles/Portfolio.css';
import { useLocation } from 'react-router-dom';
import Title from '../components/page/Title';
import CtaSection from '../components/section/CtaSection';
import { PROJECTS } from '../utils/constants';
import MainCard from '../components/card/MainCard';

const Portfolio = () => {
  const { pathname } = useLocation();

  return (
    <div className="page-container">
      <Title pathname={pathname} title="Portfolio" />

      <div className="portfolio-grid">
        {PROJECTS.map((project, index) => (
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

      <CtaSection />
    </div>
  );
};

export default Portfolio;
