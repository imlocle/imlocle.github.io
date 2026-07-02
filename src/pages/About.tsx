import { motion } from "framer-motion";
import { FiCode, FiCloud, FiCpu, FiLayers } from "react-icons/fi";

import "@styles/pages/About.css";
import profilePhoto from "@assets/loc-headshot.jpg";
import { EXPERIENCE, SKILLS } from "@data/experience";
import CtaSection from "@/components/section/CtaSection";
import IconCard from "@/components/card/IconCard";
import Reveal from "@/components/ui/Reveal";
import TagList from "@/components/ui/TagList";
import TitleHeader from "@/components/header/TitleHeader";

const About = () => {
  return (
    <div className="about-container">
      <TitleHeader
        title="About"
        subtitle="CTO & Co-Founder with 9+ years building production systems, cloud infrastructure, and AI platforms."
      />

      {/* Hero Section with Profile Card */}
      <motion.section
        className="about-hero"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="about-image-card card-hover">
          <img src={profilePhoto} alt="Loc Le" className="profile-photo" />
          <div className="about-name">Loc Le</div>
          <div className="about-role">CTO & Co-Founder</div>
          <div className="about-subtitle">Aethra Systems</div>
          <div className="about-location">Las Vegas • Remote</div>
        </div>

        <div className="about-right-content">
          <div className="about-intro">
            <h2>CTO & Co-Founder, Aethra Systems</h2>
            <p className="about-lead">
              <strong>9+ years</strong> building{" "}
              <strong>scalable systems</strong>,{" "}
              <strong>cloud infrastructure</strong>, and{" "}
              <strong>AI platforms</strong>. Previously led engineering at{" "}
              <strong>Envia</strong> and <strong>Neptune App</strong> (10K+
              users). Now building{" "}
              <a
                href="https://aethrasystems.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Aethra Systems
              </a>
              , helping businesses modernize through cloud architecture, AI
              integration, and scalable engineering.
            </p>
          </div>

          {/* Personal Story */}
          <details className="about-story">
            <summary>Personal Story</summary>
            <div className="about-story-body">
              <p>
                My journey into technology began in <strong>Japan</strong>,
                while I was teaching English. My brother suggested coding as a{" "}
                <strong>balance of logic and creativity</strong>
                {", and it clicked instantly. I've always been a "}
                <strong>problem solver</strong>
                —through dance, filmmaking, and a teenage dream of becoming a
                detective.
              </p>

              <p>
                That curiosity evolved into what I call an{" "}
                <strong>
                  <em>"Academic Detective"</em>
                </strong>
                —driven to uncover patterns, question assumptions, and piece
                together complex narratives. I studied{" "}
                <strong>History at UC Santa Cruz</strong>, where I learned how
                to investigate, analyze, and synthesize information with rigor.
              </p>

              <p>
                My first programming language was <strong>Python</strong>. Early
                projects led me to <strong>Coding Dojo</strong>, where I learned{" "}
                <strong>Python, JavaScript, and Ruby</strong>. My career started
                at <strong>PriceSpider</strong>, then deepened at{" "}
                <strong>Rackspace</strong>, where a mentor helped me grow into{" "}
                <strong>cloud engineering</strong>.
              </p>

              <p>
                These days, my focus is{" "}
                <strong>
                  backend engineering, cloud systems, and AI/automation
                </strong>
                . I love building tools that overlap with my hobbies (like{" "}
                <strong>sim racing</strong>)
                {
                  ", and I'm driven by building things that create a positive impact."
                }
              </p>

              <p>
                {
                  "Outside of work, I've studied abroad in Vietnam, taught and bartended in Japan, and traveled through multiple countries. I'm fluent in Vietnamese, conversational in Japanese, and I practice mindfulness to stay grounded and focused."
                }
              </p>
            </div>
          </details>
        </div>
      </motion.section>

      {/* Expertise */}
      <section className="about-expertise">
        <div className="about-expertise-inner">
          <h2 className="section-title">Expertise</h2>
          <div className="expertise-grid">
            <Reveal>
              <IconCard
                icon={<FiCode />}
                title="Backend Systems"
                items={[
                  "Python, TypeScript, Node.js",
                  "REST APIs & Event-Driven Architecture",
                  "Layered service design patterns",
                ]}
              />
            </Reveal>
            <Reveal delay={100}>
              <IconCard
                icon={<FiCloud />}
                title="Cloud Infrastructure"
                items={[
                  "AWS Lambda, API Gateway, DynamoDB",
                  "S3, SQS, Step Functions",
                  "Terraform & Infrastructure as Code",
                ]}
              />
            </Reveal>
            <Reveal delay={200}>
              <IconCard
                icon={<FiCpu />}
                title="AI/LLM Integration"
                items={[
                  "AWS Bedrock & Foundation Models",
                  "RAG systems & knowledge bases",
                  "Guardrails & prompt engineering",
                ]}
              />
            </Reveal>
            <Reveal delay={300}>
              <IconCard
                icon={<FiLayers />}
                title="Architecture"
                items={[
                  "Serverless & microservices",
                  "Domain-Driven Design",
                  "Cost optimization & scalability",
                ]}
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Professional Timeline */}
      <section className="timeline-section">
        <h2 className="section-title">Professional Timeline</h2>
        <div className="timeline">
          {EXPERIENCE.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="timeline-item card-hover"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: false }}
            >
              <div className="timeline-logo">
                {exp.logo ? (
                  <img src={exp.logo} alt={exp.company} />
                ) : (
                  <span>💼</span>
                )}
              </div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-company">{exp.company}</h3>
                    <p className="timeline-role">{exp.role}</p>
                  </div>
                  <span className="timeline-period">{exp.period}</span>
                </div>
                <p className="timeline-description">{exp.description}</p>
                <ul className="timeline-achievements">
                  {exp.achievements.slice(0, 3).map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
                <TagList items={exp.techStack.slice(0, 6)} variant="tech" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Technical Skills */}
      <section className="skills-section">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          <Reveal>
            <div className="skill-category card-hover">
              <h3>Languages</h3>
              <TagList
                items={[
                  ...SKILLS.languages.expert,
                  ...SKILLS.languages.proficient,
                  ...SKILLS.languages.familiar,
                ]}
                variant="skill"
              />
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="skill-category card-hover">
              <h3>Backend & APIs</h3>
              <TagList items={SKILLS.backend.frameworks} variant="skill" />
              <TagList items={SKILLS.backend.patterns} variant="skill" />
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="skill-category card-hover">
              <h3>Cloud & Infrastructure</h3>
              <TagList items={SKILLS.cloud.aws} variant="skill" />
              <TagList items={SKILLS.cloud.iac} variant="skill" />
            </div>
          </Reveal>

          <Reveal delay={300}>
            <div className="skill-category card-hover">
              <h3>AI & Data</h3>
              <TagList items={SKILLS.ai.llms} variant="skill" />
              <TagList items={SKILLS.ai.rag} variant="skill" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA Section */}
      <CtaSection />
    </div>
  );
};

export default About;
