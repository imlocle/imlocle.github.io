import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

import Title from "../components/page/Title";
import MainCard from "../components/card/MainCard";
import ButtonLink from "../components/button/ButtonLink";
import CtaSection from "../components/section/CtaSection";

import "../styles/Services.css";
import { CALENDLY_URL, SERVICES } from "../utils/constants";

const Services = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const timeout = window.setTimeout(() => {
      const el = document.querySelector(hash);
      if (!el) return;
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 60);

    return () => window.clearTimeout(timeout);
  }, [hash]);

  return (
    <div className="page-container">
      <Title pathname={pathname} title="Services" />

      {/* Sales Intro */}
      <section className="services-hero">
        <h2 className="services-hero-title">Backend MVP in 14 Days</h2>
        <p className="services-hero-subtitle">
          Clear scope. Fast delivery. Production-ready AWS backend with docs and
          handoff.
        </p>

        <div className="services-hero-ctas">
          <ButtonLink
            link={CALENDLY_URL}
            text="Book a Free 30-Min Build Call"
            target="_blank"
            className="highlight-primary-button"
          />

          {/* Use React Router Link so hash updates are consistent */}
          <Link
            className="services-hero-link"
            to={{ pathname: "/services", hash: "#pricing" }}
          >
            See pricing ↓
          </Link>
        </div>

        <div className="services-trust">
          AWS • Python • TypeScript • Serverless APIs • Auth • Databases
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="pricing-section">
        <h3 className="section-title">Pricing</h3>

        <div className="pricing-grid">
          <div className="pricing-card">
            <div className="pricing-top">
              <h4>MVP Core</h4>
              <p className="price">$2,500</p>
              <p className="pricing-note">Best for: validate fast</p>
            </div>
            <ul>
              <li>API endpoints</li>
              <li>Auth + roles</li>
              <li>Database setup</li>
              <li>AWS deployment</li>
              <li>Docs + handoff</li>
            </ul>
          </div>

          <div className="pricing-card featured">
            <div className="pricing-top">
              <h4>MVP + AI</h4>
              <p className="price">$3,500</p>
              <p className="pricing-note">Best for: AI features</p>
            </div>
            <ul>
              <li>Everything in MVP Core</li>
              <li>LLM integration</li>
              <li>Guardrails + caching</li>
              <li>Cost controls</li>
            </ul>
          </div>

          <div className="pricing-card">
            <div className="pricing-top">
              <h4>MVP + Support</h4>
              <p className="price">$4,000</p>
              <p className="pricing-note">Best for: ongoing help</p>
            </div>
            <ul>
              <li>Everything in MVP Core</li>
              <li>30 days support</li>
              <li>Small improvements + fixes</li>
              <li>Priority responses</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="timeline-section">
        <h3 className="section-title">How it works</h3>

        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-day">Day 1</div>
            <div className="timeline-body">
              <strong>Scope lock + plan</strong>
              <p>
                We define endpoints, auth, database choices, and success
                criteria.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-day">Days 2-7</div>
            <div className="timeline-body">
              <strong>Build core backend</strong>
              <p>
                API + auth + DB + deployment foundation. You get updates as we
                go.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-day">Days 8-12</div>
            <div className="timeline-body">
              <strong>Hardening</strong>
              <p>Edge cases, logging, basic monitoring, performance, docs.</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-day">Days 13-14</div>
            <div className="timeline-body">
              <strong>Handoff</strong>
              <p>Documentation, examples, and a clean “next steps” plan.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <motion.section
        className="services-section"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="services-list">
          {SERVICES.map((service, i) => (
            <MainCard
              key={service.id}
              index={i}
              id={String(service.id)}
              title={service.title}
              description={service.description}
              icon={service.icon}
              highlights={service.highlights}
              outcomes={service.outcomes}
              technologies={service.technologies}
              link={service.link}
              ctaLabel={service.ctaLabel}
            />
          ))}
        </div>
      </motion.section>

      <CtaSection />
    </div>
  );
};

export default Services;
