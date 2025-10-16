import { motion } from 'framer-motion';
import '../styles/Home.css';
import { useLocation } from 'react-router-dom';
import raxLogo from '../assets/rax-logo-2020.svg';
import neptuneLogo from '../assets/neptune-logo2.png';
import mdsLogo from '../assets/mds.png';
import wayviaLogo from '../assets/wayvia-logo.svg';
import {
  POSITION_TITLE,
  PROJECTS_SECTION,
  SERVICES_SECTION,
} from '../utils/constants';
import CompanyCard from '../components/card/CompanyCard';
import ButtonLink from '../components/button/ButtonLink';
import CtaSection from '../components/section/CtaSection';
import PreviewSectionGrid from '../components/section/PreviewSectionGrid';

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
              link="/portfolio"
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

      <PreviewSectionGrid title="Services" cards={SERVICES_SECTION} />
      <PreviewSectionGrid title="Featured Projects" cards={PROJECTS_SECTION} />

      <motion.section
        className="companies-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="section-title">Who I've Worked With</h2>
        <div className="companies-grid">
          <CompanyCard
            link="https://www.theneptuneapp.com/"
            imgLogo={neptuneLogo}
            alt="The Neptune App"
          />
          <CompanyCard
            link="https://www.rackspace.com/"
            imgLogo={raxLogo}
            alt="Rackspace Technology"
          />
          <CompanyCard
            link="https://www.methoddatascience.com/"
            imgLogo={mdsLogo}
            alt="Method Data Science"
          />
          <CompanyCard
            link="https://www.wayvia.com/"
            imgLogo={wayviaLogo}
            alt="Wayvia"
          />
        </div>
        <CtaSection />
      </motion.section>
    </div>
  );
};

export default Home;
