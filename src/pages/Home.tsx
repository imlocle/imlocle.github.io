import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import "../styles/Home.css";

import {
  CALENDLY_URL,
  COMPANIES_WORKED,
  PREVIEW_PROJECTS,
  PREVIEW_SERVICES,
} from "../utils/constants";

import ButtonLink from "../components/button/ButtonLink";
import CtaSection from "../components/section/CtaSection";
import PreviewSectionGrid from "../components/section/PreviewSectionGrid";
import PreviewLogoGridSection from "../components/section/PreviewLogoGridSection";

const Home = () => {
  const { pathname } = useLocation();

  return (
    <div className="home-container">
      <section className="hero-container" aria-label="Homepage hero">
        <div className="hero-inner">
          <motion.div
            key={pathname}
            className="hero-section"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="hero-card"
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.6 }}
            >
              <div className="hero-badge-row">
                <span className="hero-badge">Taking on limited client work</span>
                <span className="hero-badge subtle">Las Vegas • Remote</span>
              </div>

              <motion.h1
                className="hero-title"
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.22, duration: 0.6 }}
              >
                Ship your <span className="highlight">backend MVP</span> in{" "}
                <span className="highlight">14 days</span>
              </motion.h1>

              <motion.p
                className="hero-subtitle"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                I build APIs, auth, databases, and AWS deployments—fast, secure,
                and easy to hand off.
              </motion.p>

              <div className="hero-points" role="list">
                <div className="hero-point" role="listitem">
                  <span className="dot" aria-hidden="true" />
                  <span>
                    <strong>Production-ready stack:</strong> AWS serverless,
                    clean architecture, CI-friendly setup.
                  </span>
                </div>

                <div className="hero-point" role="listitem">
                  <span className="dot" aria-hidden="true" />
                  <span>
                    <strong>Core features:</strong> Auth, roles, API endpoints,
                    DB schema + migrations.
                  </span>
                </div>

                <div className="hero-point" role="listitem">
                  <span className="dot" aria-hidden="true" />
                  <span>
                    <strong>Handoff that doesn't hurt:</strong> docs, examples,
                    and a “next steps” plan.
                  </span>
                </div>
              </div>

              <motion.div
                className="cta-buttons"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.38, duration: 0.6 }}
              >
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
              </motion.div>

              <div className="hero-tech">
                AWS • Python • TypeScript • Serverless APIs • Auth • Databases
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          whileHover={{ y: 6 }}
        >
          <p>Scroll</p>
          <div className="arrow-down" />
        </motion.div>

        <div className="hero-fade-divider" aria-hidden="true" />
      </section>

      <div className="page-container">
        <PreviewSectionGrid title="Services" cards={PREVIEW_SERVICES} />
        <PreviewSectionGrid title="Featured Projects" cards={PREVIEW_PROJECTS} />
        <PreviewLogoGridSection
          title="Who I've Worked With"
          cards={COMPANIES_WORKED}
        />
        <CtaSection />
      </div>
    </div>
  );
};

export default Home;
