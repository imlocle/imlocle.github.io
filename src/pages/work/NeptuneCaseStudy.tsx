import { useLocation } from "react-router-dom";

import "@styles/pages/CaseStudy.css";
import Title from "@components/page/Title";
import CtaSection from "@components/section/CtaSection";
import CaseStudyMediaSection from "@components/section/CaseStudyMediaSection";
import CaseCard from "@components/card/CaseCard";
import { NEPTUNE_TECHNOLOGIES } from "@utils/constants";

type CaseItem = {
  id: string;
  title: string;
  callout?: string;
  description?: string;
  highlights?: string[];
};

const NEPTUNE_CASES: CaseItem[] = [
  {
    id: "problem",
    title: "The Problem",
    description:
      "Neptune's backend started as an early prototype: JavaScript-only, no authentication, no dev/prod environments, minimal structure, and repeated code. Scaling and safe iteration were difficult without a rebuild.",
  },
  {
    id: "role",
    title: "My Role",
    description:
      "I owned the backend end-to-end and partnered directly with the CTO on architecture and decisions. I led implementation details: code standards, system organization, DynamoDB modeling (PK/SK/GSIs), environments, and delivery.",
    callout:
      "CRUD services (profiles, follows, likes, comments, uploads), auth flows, infrastructure patterns, and the analytics/ETL system.",
  },
  {
    id: "solution",
    title: "The Solution",
    highlights: [
      "JavaScript → TypeScript migration with safer patterns",
      "Layered architecture (handlers/controllers → services → repositories)",
      "AWS Cognito auth (signup/confirm/login/logout) + JWT",
      "DynamoDB redesign (models, PK/SK strategy, GSIs)",
      "Dev & Prod environment separation via SAM config",
      "Queues + async processing for scalable workflows",
      "CloudWatch logging + improved operational visibility",
      "Encryption and consistent token handling",
    ],
  },
  {
    id: "moderation",
    title: "Trust & Safety - Content Moderation",
    description:
      "To protect the platform and its users, I implemented an automated content moderation system using AWS Rekognition.",
    highlights: [
      "Uploads are scanned with AWS Rekognition for unsafe content",
      "When flagged, an async Lambda in a separate reporting service is invoked",
      "Violations are recorded and routed into moderation workflows",
      "Decoupled design keeps the core app responsive under load",
    ],
  },
  {
    id: "etl",
    title: "Analytics & ETL",
    description:
      "I designed and implemented a custom ETL pipeline for user event tracking optimized for low cost and reliability. Glue crawling wasn't reliable for our data shape, so I built a controlled hourly ETL job.",
    highlights: [
      "DynamoDB events → S3 Parquet → Athena for SQL analytics",
      "Scheduled cron-based pipeline with predictable output",
      "Designed to control cost and reduce operational risk",
    ],
  },
  {
    id: "impact",
    title: "Impact",
    highlights: [
      "Production-ready backend foundation for beta + App Store workflows",
      "Safer iteration via dev/prod environment isolation",
      "More reliable and scalable codebase with less duplication",
      "Major infrastructure savings (CloudFront → Cloudflare collaboration)",
      "Automated moderation pipeline (Rekognition → reporting service) to support safe scaling",
    ],
  },
];

const NeptuneCaseStudy = () => {
  const { pathname } = useLocation();

  return (
    <div className="page-container">
      <Title pathname={pathname} title="Neptune Case Study" />

      <header className="case-hero">
        <div className="case-hero-topline">Client Work • Backend Rebuild</div>

        <h2 className="case-title">Neptune — Scalable Backend Rebuild</h2>

        <p className="case-subtitle">
          A complete backend overhaul for a video-first social platform
          preparing for public launch—TypeScript migration, Cognito auth,
          DynamoDB modeling, and a cost-optimized analytics pipeline.
        </p>

        <div className="case-stats" aria-label="Key outcomes">
          <div className="case-stat">
            <div className="case-stat-label">Delivery</div>
            <div className="case-stat-value">Production-ready foundation</div>
          </div>
          <div className="case-stat">
            <div className="case-stat-label">Auth</div>
            <div className="case-stat-value">Cognito + JWT flows</div>
          </div>
          <div className="case-stat">
            <div className="case-stat-label">Analytics</div>
            <div className="case-stat-value">DDB → Parquet → Athena</div>
          </div>
          <div className="case-stat">
            <div className="case-stat-label">Cost</div>
            <div className="case-stat-value">~90% egress reduction</div>
          </div>
        </div>
      </header>

      <div className="case-grid">
        <main className="case-main">
          {NEPTUNE_CASES.map(item => (
            <CaseCard
              key={item.id}
              title={item.title}
              callout={item.callout}
              description={item.description}
              highlights={item.highlights}
            />
          ))}

          <section className="case-card">
            <h3 className="case-h2">Architecture & Analytics</h3>
            <CaseStudyMediaSection />
          </section>
        </main>

        <aside className="case-sidebar" aria-label="Case study sidebar">
          <section className="case-card">
            <h3 className="case-h2">Technologies</h3>
            <div className="case-chips">
              {NEPTUNE_TECHNOLOGIES.map(tech => (
                <span className="case-chip" key={tech}>
                  {tech}
                </span>
              ))}
            </div>
          </section>

          <section className="case-card">
            <h3 className="case-h2">{"What I'd Do Next"}</h3>
            <p className="case-p">
              {
                "Add architecture diagrams, pipeline screenshots, and a short “before vs after” section with measurable reliability/cost improvements."
              }
            </p>
          </section>
        </aside>
      </div>

      <CtaSection />
    </div>
  );
};

export default NeptuneCaseStudy;
