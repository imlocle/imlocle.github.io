import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

import "@styles/pages/Services.css";
import PricingCard from "@components/card/PricingCard";
import MainCard from "@components/card/MainCard";
import ButtonLink from "@components/button/ButtonLink";
import Title from "@components/page/Title";
import CtaSection from "@components/section/CtaSection";
import {
  CALENDLY_URL,
  SERVICES,
  PRICING_CARDS,
  SERVICE_TIMELINE,
} from "@utils/constants";
import { containerStagger, fadeUp } from "@utils/motionVariants";

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
      <motion.section
        className="services-hero"
        variants={fadeUp}
        initial="hidden"
        animate="show"
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
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

          {/* Link so hash updates consistently */}
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
      </motion.section>

      {/* Pricing */}
      <section id="pricing" className="pricing-section">
        <h3 className="section-title">Pricing</h3>

        <motion.div
          className="pricing-grid"
          variants={containerStagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          {PRICING_CARDS.map((pricing, i) => (
            <PricingCard
              key={i}
              title={pricing.title}
              price={pricing.price}
              bestFor={pricing.bestFor}
              details={pricing.details}
              isFeatured={pricing.isFeatured}
            />
          ))}
        </motion.div>
      </section>

      {/* Timeline */}
      <section className="timeline-section">
        <h3 className="section-title">How It Works</h3>

        <motion.div
          className="timeline"
          variants={containerStagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          {SERVICE_TIMELINE.map(item => (
            <motion.div
              key={item.day}
              className="timeline-item"
              variants={fadeUp}
              transition={{ duration: 0.5 }}
            >
              <div className="timeline-day">{item.day}</div>
              <div className="timeline-body">
                <strong>{item.title}</strong>
                <p>{item.body}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Services List */}
      <motion.section
        className="services-section"
        variants={containerStagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
      >
        <div className="services-list">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.id}
              variants={fadeUp}
              transition={{ duration: 0.45 }}
            >
              <MainCard
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
            </motion.div>
          ))}
        </div>
      </motion.section>

      <CtaSection />
    </div>
  );
};

export default Services;
