import { useLocation } from 'react-router-dom';
import Title from '../components/page/Title';
import { motion } from 'framer-motion';
import { FaBrain, FaCloud } from 'react-icons/fa';
import { FaGear } from 'react-icons/fa6';
import '../styles/Services.css';
import Cta from '../components/Cta';

const Services = () => {
  const { pathname } = useLocation();

  const services = [
    {
      icon: <FaBrain />,
      title: 'AI Product Integration',
      description: `Integrate powerful AI models into your existing product or build new intelligent features from scratch. I specialize in backend orchestration for AI services like OpenAI, Anthropic, and custom ML models.`,
      highlights: [
        'API design & integration',
        'Model orchestration with LangChain / serverless functions',
        'Secure prompt handling & caching',
      ],
    },
    {
      icon: <FaCloud />,
      title: 'Backend MVP in 2 Weeks',
      description: `Need to validate your startup fast? I build production-grade AWS backend systems that are scalable, serverless, and cost-efficient — ready for launch in just two weeks.`,
      highlights: [
        'Serverless AWS architecture',
        'Auth, database, and CI/CD setup',
        'Ready for your frontend team immediately',
      ],
    },
    {
      icon: <FaGear />,
      title: 'Cloud Modernization',
      description: `Migrate or refactor existing infrastructure to modern serverless solutions. Reduce costs, improve reliability, and simplify maintenance without interrupting your existing operations.`,
      highlights: [
        'Lift-and-shift to AWS Lambda / API Gateway',
        'Performance tuning and monitoring',
        'Gradual migration strategy to avoid downtime',
      ],
    },
  ];

  return (
    <div className="page-container">
      <Title pathname={pathname} title="Services" />

      <div className="services-list">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="service-card"
            whileHover={{ y: -10, boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="service-icon">{service.icon}</div>
            <h2 className="service-title">{service.title}</h2>
            <p className="service-description">{service.description}</p>
            <ul className="service-highlights">
              {service.highlights.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
      <Cta />
    </div>
  );
};

export default Services;
