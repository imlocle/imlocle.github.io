import { FiCheck, FiX } from 'react-icons/fi';

import '@styles/pages/Consulting.css';
import CtaSection from '@/components/section/CtaSection';
import TitleHeader from '@/components/header/TitleHeader';

const Consulting = () => {
  return (
    <div className="consulting-container">
      <TitleHeader
        title="Consulting"
        subtitle="I occasionally take on strategic consulting projects that align with my expertise in backend systems, cloud architecture, and AI platforms."
      />

      {/* Availability Status */}
      <section className="availability-section">
        <div className="availability-card">
          <div className="status-indicator">
            <span className="status-dot active" />
            <span className="status-text">Currently: Fully engaged with Neptune App</span>
          </div>
          <div className="status-indicator">
            <span className="status-dot" />
            <span className="status-text">Next Opening: Q2 2026 (limited slots)</span>
          </div>
        </div>
      </section>

      {/* What I Work On */}
      <section className="work-on-section">
        <h2 className="section-title">What I Work On</h2>
        <p className="section-intro">
          I focus on projects where deep technical expertise makes a significant impact:
        </p>

        <div className="services-grid">
          <ServiceCard
            title="Backend Architecture & APIs"
            items={[
              'Serverless systems design',
              'API design and implementation',
              'Database architecture and optimization',
              'Authentication and authorization'
            ]}
          />
          <ServiceCard
            title="Cloud Infrastructure (AWS)"
            items={[
              'Serverless architecture (Lambda, API Gateway)',
              'Infrastructure as Code (Terraform, CDK)',
              'Cost optimization and monitoring',
              'Migration and modernization'
            ]}
          />
          <ServiceCard
            title="AI/LLM Integration"
            items={[
              'RAG system implementation',
              'LLM integration (Bedrock, OpenAI, Anthropic)',
              'Prompt engineering and evaluation',
              'Guardrails and cost controls'
            ]}
          />
          <ServiceCard
            title="System Optimization"
            items={[
              'Performance tuning',
              'Cost reduction strategies',
              'Reliability improvements',
              'Technical debt resolution'
            ]}
          />
        </div>
      </section>

      {/* What I Don't Do */}
      <section className="dont-do-section">
        <h2 className="section-title">What I Don't Do</h2>
        <div className="dont-do-grid">
          <DontDoItem text="Frontend development" />
          <DontDoItem text="Mobile app development" />
          <DontDoItem text="WordPress/CMS sites" />
          <DontDoItem text="Quick fixes or maintenance work" />
        </div>
      </section>

      {/* How I Work */}
      <section className="how-work-section">
        <h2 className="section-title">How I Work</h2>
        <div className="process-grid">
          <ProcessStep
            number="1"
            title="Discovery"
            duration="1-2 weeks"
            items={[
              'Technical assessment',
              'Architecture review',
              'Scope definition',
              'Proposal and timeline'
            ]}
          />
          <ProcessStep
            number="2"
            title="Engagement"
            duration="4-12 weeks typical"
            items={[
              'Weekly check-ins',
              'Iterative delivery',
              'Code reviews and documentation',
              'Knowledge transfer'
            ]}
          />
          <ProcessStep
            number="3"
            title="Handoff"
            duration="Ongoing support"
            items={[
              'Complete documentation',
              'Architecture diagrams',
              'Deployment guides',
              'Post-engagement support (30 days)'
            ]}
          />
        </div>
      </section>

      {/* Investment */}
      <section className="investment-section">
        <h2 className="section-title">Investment</h2>
        <div className="investment-card">
          <p className="investment-text">
            Projects typically range from <strong>$15K - $50K</strong> depending on scope and
            complexity. I don't publish fixed pricing because every system is different.
          </p>
          <p className="investment-text">
            We'll discuss your specific needs and I'll provide a detailed proposal with timeline and
            investment.
          </p>
        </div>
      </section>

      {/* Contact CTA */}
      <CtaSection/>
    </div>
  );
};

interface ServiceCardProps {
  title: string;
  items: string[];
}

const ServiceCard = ({ title, items }: ServiceCardProps) => (
  <div className="service-card">
    <h3 className="service-title">{title}</h3>
    <ul className="service-list">
      {items.map((item, index) => (
        <li key={index} className="service-item">
          <FiCheck className="check-icon" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

interface DontDoItemProps {
  text: string;
}

const DontDoItem = ({ text }: DontDoItemProps) => (
  <div className="dont-do-item">
    <FiX className="x-icon" />
    <span>{text}</span>
  </div>
);

interface ProcessStepProps {
  number: string;
  title: string;
  duration: string;
  items: string[];
}

const ProcessStep = ({ number, title, duration, items }: ProcessStepProps) => (
  <div className="process-step">
    <div className="step-number">{number}</div>
    <h3 className="step-title">{title}</h3>
    <p className="step-duration">{duration}</p>
    <ul className="step-list">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

export default Consulting;
