import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiCode,
  FiGithub,
  FiZap,
  FiTrendingUp,
} from "react-icons/fi";
import { Link } from "react-router-dom";

import "@styles/pages/Home.css";
import CtaSection from "@components/section/CtaSection";
import IconCard from "@/components/card/IconCard";
import SectionHeader from "@/components/header/SectionHeader";
import TagList from "@components/ui/TagList";
import alfredLogo from "@assets/alfred-logo.png";
import { useChat } from "@context/ChatContext";
import { ALFRED_CASE_STUDY_PATH } from "@data/alfred";

const Home = () => {
  const { openChat } = useChat();
  const motionVariants = {
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.2,
          delayChildren: 0.1,
        },
      },
    },
    item: {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
      },
    },
  };

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <motion.div
            className="status-badge"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="status-dot" />
            <span>CTO at Aethra Systems</span>
          </motion.div>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Building <span className="gradient-text">Intelligent Systems</span>
            <br />
            {/* with Python & AWS */}
          </motion.h1>

          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            CTO & Software Engineer with 8+ years building production backend
            systems, cloud infrastructure, and AI platforms. Currently leading
            engineering at Aethra Systems.
          </motion.p>

          <motion.div
            className="hero-cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link to="/work" className="btn-primary">
              View My Work <FiArrowRight />
            </Link>
            <a
              href="https://aethrasystems.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Aethra Systems
            </a>
          </motion.div>

          <motion.div
            className="tech-stack"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <TagList
              items={["Python", "TypeScript", "AWS", "Lambda", "DynamoDB", "IaC", "AI/LLM"]}
              variant="pill"
            />
          </motion.div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="social-proof-section">
        <div className="page-container">
        <motion.div
          className="social-proof-grid"
          variants={motionVariants.container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="proof-card card-hover" variants={motionVariants.item}>
            <div className="proof-metric">10K+</div>
            <div className="proof-label">Active Users Supported</div>
            <div className="proof-detail">Neptune App production platform</div>
          </motion.div>

          <motion.div className="proof-card card-hover" variants={motionVariants.item}>
            <div className="proof-metric">$1.4M</div>
            <div className="proof-label">Annual Savings Delivered</div>
            <div className="proof-detail">Through optimization & scale</div>
          </motion.div>

          <motion.div className="proof-card card-hover" variants={motionVariants.item}>
            <div className="proof-metric">40%</div>
            <div className="proof-label">Response Time Improvement</div>
            <div className="proof-detail">AI-powered systems optimization</div>
          </motion.div>

          <motion.div className="proof-card card-hover" variants={motionVariants.item}>
            <div className="proof-metric">8+</div>
            <div className="proof-label">Years Building Systems</div>
            <div className="proof-detail">Across backend, cloud & AI</div>
          </motion.div>
        </motion.div>
        </div>
      </section>

      {/* Featured Case Study - Alfred */}
      <section className="page-container featured-case-section">
        <SectionHeader
          title="See It In Action"
          subtitle="Here's a live example of production system design thinking"
        />

        <motion.div
          className="case-study-card card-hover"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="case-study-left">
            <div className="case-study-badge">Production LLM System</div>
            <h3 className="case-study-title">Alfred — AI Assistant</h3>
            <p className="case-study-subtitle">
              A production-ready AI assistant designed with strict guardrails,
              cost controls, and serverless infrastructure.
            </p>

            <div className="case-study-metrics">
              <div className="metric">
                <div className="metric-value">$0.50-1.00</div>
                <div className="metric-label">/month for 1K requests</div>
              </div>
              <div className="metric">
                <div className="metric-value">50 req/day</div>
                <div className="metric-label">Per IP rate limit</div>
              </div>
              <div className="metric">
                <div className="metric-value">1-hour TTL</div>
                <div className="metric-label">Response caching</div>
              </div>
            </div>

            <p className="case-study-description">
              This demonstrates real-world system design decisions: How do you
              build an LLM feature that won't cost you $500/month? How do you
              ensure it stays on-topic? How do you make it production-ready on
              day one?
            </p>

            <div className="case-study-tech">
              <TagList
                items={["AWS Bedrock", "Lambda", "DynamoDB", "Terraform", "LLM Guardrails"]}
                variant="pill"
              />
            </div>

            <div className="case-study-links">
              <button onClick={openChat} className="btn-primary">
                Try Alfred Live <FiArrowRight />
              </button>
              <Link to={ALFRED_CASE_STUDY_PATH} className="btn-secondary">
                View Full Case Study
              </Link>
            </div>
          </div>

          <div className="case-study-right">
            <img
              src={alfredLogo}
              alt="Alfred AI Assistant"
              className="case-study-image"
            />
          </div>
        </motion.div>
      </section>

      {/* Expertise Grid */}
      <section className="expertise-section">
        <div className="page-container">
        <SectionHeader
          title="What I Specialize In"
          subtitle="Domains where deep expertise creates value"
        />

        <div className="expertise-grid">
          <IconCard
            icon={<FiCode />}
            title="Backend Architecture & APIs"
            items={[
              "Serverless systems design",
              "Scalable API architecture",
              "Database design & optimization",
              "Auth & authorization patterns",
            ]}
          />
          <IconCard
            icon={<FiZap />}
            title="Cloud Infrastructure (AWS)"
            items={[
              "Lambda-first architecture",
              "Infrastructure as Code",
              "Cost optimization strategies",
              "Migration & modernization",
            ]}
          />
          <IconCard
            icon={<FiTrendingUp />}
            title="AI/LLM Integration"
            items={[
              "Production LLM systems",
              "Guardrails & safety controls",
              "RAG & knowledge bases",
              "Cost-aware inference",
            ]}
          />
          <IconCard
            icon={<FiGithub />}
            title="System Optimization"
            items={[
              "Performance tuning",
              "Cost reduction initiatives",
              "Reliability improvements",
              "Technical debt resolution",
            ]}
          />
        </div>
        </div>
      </section>

      {/* Personal Story Section */}
      <section className="page-container story-section">
        <motion.div
          className="story-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Why I Build This Way</h2>

          <div className="story-text">
            <p>
              I started as an <strong>English teacher in Japan</strong>—a
              problem solver by nature, drawn to logic and creativity in equal
              measure. That curiosity evolved into an &quot;Academic
              Detective&quot; mindset: obsessed with patterns, assumptions, and
              the unseen architecture behind systems.
            </p>

            <p>
              I moved into software the same way I approached teaching—by asking{" "}
              <em>
                Why does this work this way? What breaks it? How would you know?
              </em>
            </p>

            <p>
              Eight years later, I've built backend systems at scale, optimized
              chaos into serverless elegance, and cofounded{" "}
              <a
                href="https://aethrasystems.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--accent-primary)" }}
              >
                Aethra Systems
              </a>{" "}
              to help other organizations do the same. The best
              engineers solve invisible problems: 
              <strong>
                cost spirals, scaling cliffs, production failures nobody
                expected
              </strong>
              .
            </p>

            <p>
              That's where I thrive. Not in shiny features—in the foundation
              that makes features possible.
            </p>

            <Link to="/about" className="btn-secondary">
              Read My Full Story
            </Link>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section id="contact-cta">
        <CtaSection />
      </section>
    </div>
  );
};

export default Home;
