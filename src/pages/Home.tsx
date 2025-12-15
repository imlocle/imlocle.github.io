import { motion } from "framer-motion";
import "../styles/Home.css";
import { useLocation } from "react-router-dom";
import {
  COMPANIES_WORKED,
  POSITION_TITLE,
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
      <div className="hero-container">
        <motion.div
          key={pathname}
          className="hero-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="hero-title"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Hi, I'm <span className="highlight">Loc Le</span>
          </motion.h1>

          <motion.h2
            className="position-title"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {POSITION_TITLE}
          </motion.h2>

          <motion.p
            className="hero-subtitle"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            I build scalable AI-powered backend systems for startups.
          </motion.p>

          <motion.div
            className="cta-buttons"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <ButtonLink
              link="/contact"
              text="🚀 Let's Build Together"
              className="highlight-primary-button"
            />
            <ButtonLink
              link="/work/technical"
              text="View My Work"
              className="highlight-secondary-button"
            />
          </motion.div>
        </motion.div>

        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          whileHover={{ y: 10 }}
        >
          <p>Scroll Down</p>
          <div className="arrow-down"></div>
        </motion.div>
      </div>
      <div className="page-container">
        <PreviewSectionGrid title="Services" cards={PREVIEW_SERVICES} />
        <PreviewSectionGrid
          title="Featured Projects"
          cards={PREVIEW_PROJECTS}
        />
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
