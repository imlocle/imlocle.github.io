import { useLocation } from 'react-router-dom';
import Title from '../components/page/Title';
import '../styles/Services.css';
import { SERVICES } from '../utils/constants';
import CtaSection from '../components/section/CtaSection';
import MainCard from '../components/card/MainCard';

const Services = () => {
  const { pathname } = useLocation();

  return (
    <div className="page-container">
      <Title pathname={pathname} title="Services" />

      <div className="services-grid">
        {SERVICES.map((service, i) => (
          <MainCard
            key={i}
            title={service.title}
            description={service.description}
            icon={service.icon}
            highlights={service.highlights}
          />
        ))}
      </div>
      <CtaSection />
    </div>
  );
};

export default Services;
