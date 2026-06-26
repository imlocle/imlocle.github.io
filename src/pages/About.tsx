import { motion } from "framer-motion";

import "@styles/pages/About.css";
import profilePhoto from "@assets/loc-headshot.jpg";
import { EXPERIENCE, SKILLS, EDUCATION, LANGUAGES } from "@data/experience";
import CtaSection from "@/components/section/CtaSection";
import TagList from "@/components/ui/TagList";
import TitleHeader from "@/components/header/TitleHeader";

const About = () => {
  return (
    <div className="about-container">
      <TitleHeader
        title="About"
        subtitle="CTO & Software Engineer with 8+ years building production backend systems, cloud infrastructure, and AI platforms."
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
          <div className="about-role">CTO & Cofounder</div>
          <div className="about-subtitle">Aethra Systems</div>
          <div className="about-location">Las Vegas • Remote</div>
        </div>

        <div className="about-right-content">
          <div className="about-intro">
            <h2>CTO & Cofounder, Aethra Systems</h2>
            <p className="about-lead">
              8+ years building scalable backend systems, cloud infrastructure,
              and AI platforms. Previously led backend at Envia and Neptune App
              (10K+ users). Now building{" "}
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

      {/* Current Focus */}
      <motion.section
        className="about-current"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3>Current Focus</h3>
        <div className="current-card card-hover">
          <p>
            Leading engineering at{" "}
            <a
              href="https://aethrasystems.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Aethra Systems
            </a>
            , helping businesses modernize operations through cloud
            architecture, AI integration, and scalable digital solutions.
          </p>
          <div className="current-tech">
            Cloud Architecture • AI/LLM Systems • Serverless Infrastructure •
            System Modernization
          </div>
        </div>
      </motion.section>

      {/* Expertise */}
      <motion.section
        className="about-expertise"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3>Expertise</h3>
        <div className="expertise-grid">
          <div className="expertise-item card-hover">
            <strong>Backend Systems</strong>
            <p>Python, TypeScript, REST APIs, Event-Driven Architecture</p>
          </div>
          <div className="expertise-item card-hover">
            <strong>Cloud Infrastructure</strong>
            <p>AWS Lambda, API Gateway, DynamoDB, S3, Terraform</p>
          </div>
          <div className="expertise-item card-hover">
            <strong>AI/LLM Integration</strong>
            <p>AWS Bedrock, RAG Systems, Prompt Engineering</p>
          </div>
          <div className="expertise-item card-hover">
            <strong>Architecture</strong>
            <p>Serverless, Microservices, Domain-Driven Design</p>
          </div>
        </div>
      </motion.section>

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
              viewport={{ once: true }}
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
                <TagList
                  items={exp.techStack.slice(0, 6)}
                  variant="tech"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Technical Skills */}
      <section className="skills-section">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          <div className="skill-category card-hover">
            <h3>Languages</h3>
            <TagList
              items={[...SKILLS.languages.expert, ...SKILLS.languages.proficient, ...SKILLS.languages.familiar]}
              variant="skill"
            />
          </div>

          <div className="skill-category card-hover">
            <h3>Backend & APIs</h3>
            <TagList items={SKILLS.backend.frameworks} variant="skill" />
            <TagList items={SKILLS.backend.patterns} variant="skill" />
          </div>

          <div className="skill-category card-hover">
            <h3>Cloud & Infrastructure</h3>
            <TagList items={SKILLS.cloud.aws} variant="skill" />
            <TagList items={SKILLS.cloud.iac} variant="skill" />
          </div>

          <div className="skill-category card-hover">
            <h3>AI & Data</h3>
            <TagList items={SKILLS.ai.llms} variant="skill" />
            <TagList items={SKILLS.ai.rag} variant="skill" />
          </div>
        </div>
      </section>

      {/* Education & Languages */}
      <section className="additional-section">
        <div className="additional-grid">
          <div className="additional-card card-hover">
            <h3>Education</h3>
            <p>
              <strong>{EDUCATION.degree}</strong>
            </p>
            <p>{EDUCATION.school}</p>
            <p className="year">{EDUCATION.year}</p>
          </div>

          <div className="additional-card card-hover">
            <h3>Languages</h3>
            {LANGUAGES.map((lang, i) => (
              <p key={i}>
                <strong>{lang.language}:</strong> {lang.proficiency}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CtaSection />
    </div>
  );
};

export default About;
