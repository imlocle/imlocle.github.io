import { motion } from "framer-motion";
import "@styles/pages/About.css";
import profilePhoto from "@assets/loc_headshot.jpg";
import { useLocation } from "react-router-dom";
import Title from "@components/page/Title";
import CtaSection from "@components/section/CtaSection";
import ButtonLink from "@components/button/ButtonLink";
import { CALENDLY_URL } from "@utils/constants";

const About = () => {
  const { pathname } = useLocation();

  return (
    <div className="page-container">
      <Title pathname={pathname} title="About" />

      <div className="about-content">
        <motion.div
          className="about-image-container"
          initial={{ x: -24, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="about-image-card">
            <img src={profilePhoto} alt="Loc Le" className="profile-photo" />
            <div className="about-image-meta">
              <div className="about-name">Loc Le</div>
              <div className="about-role">Backend MVP Specialist</div>
              <div className="about-location">Las Vegas • Remote</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="about-text"
          initial={{ x: 24, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>I build production-ready backends for startups</h2>

          <p className="about-lead">
            {
              "If you're building a product and backend is slowing you down, I can ship your "
            }
            <strong>API + auth + database + AWS deployment</strong> fast—with
            clean docs and a smooth handoff.
          </p>

          <div className="about-proof">
            <div className="about-proof-item">
              <span className="dot" />
              <span>
                <strong>Speed with structure:</strong> clean architecture,
                CI-friendly setup, no chaos.
              </span>
            </div>
            <div className="about-proof-item">
              <span className="dot" />
              <span>
                <strong>AWS-focused delivery:</strong> serverless, scalable, and
                cost-aware.
              </span>
            </div>
            <div className="about-proof-item">
              <span className="dot" />
              <span>
                <strong>Founder-friendly:</strong> clear scope, weekly
                check-ins, zero fluff.
              </span>
            </div>
          </div>

          <div className="about-ctas">
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

          <div className="about-workstyle">
            <h3>How I work</h3>
            <ul>
              <li>
                <strong>Day 1:</strong>
                {" scope lock + plan (you always know what you're getting)"}
              </li>
              <li>
                <strong>Days 2-12:</strong> build + harden (API, auth, DB,
                deploy, logging)
              </li>
              <li>
                <strong>Days 13-14:</strong> docs + handoff (examples + next
                steps)
              </li>
            </ul>
          </div>

          <details className="about-story">
            <summary>My story (optional)</summary>
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
                  <em>“Academic Detective”</em>
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
        </motion.div>
      </div>

      <CtaSection />
    </div>
  );
};

export default About;
