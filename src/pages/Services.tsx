import { useLocation } from 'react-router-dom';
import Title from '../components/page/Title';
import '../styles/Services.css';
import ServicesCard from '../components/card/ServicesCard';
import { SERVICES } from '../utils/constants';
import CtaSection from '../components/section/CtaSection';

const Services = () => {
  const { pathname } = useLocation();

  return (
    <div className="page-container">
      <Title pathname={pathname} title="Services" />

      <div className="services-list">
        {SERVICES.map(service => (
          <ServicesCard
            icon={service.icon}
            title={service.title}
            description={service.description}
            highlights={service.highlights}
          />
        ))}
      </div>
      <CtaSection />
    </div>
  );
};

export default Services;
