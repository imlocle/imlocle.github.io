import codeIntelPlatformLogo from "@assets/code-intel-platform-logo.png";
import stockTrackerLogo from "@assets/stock-tracker-logo.png";
import hachikoLogo from "@assets/hachiko_logo.png";
import llLogo from "@assets/ll-logo.png";
import raxLogo from "@assets/rax-logo-2020.svg";
import mdsLogo from "@assets/mds.png";
import wayviaLogo from "@assets/wayvia-logo.svg";
import pisyncLogo from "@assets/pisync_logo.png";
import type {
  CompanyCardData,
  MainCardData,
  PreviewCardData,
  PricingCardData,
} from "@models/card";
import {
  NEPTUNE_MAIN_CARD,
  NEPTUNE_PREVIEW_CARD,
  NEPTUNE_COMPANY_CARD,
} from "@data/neptune";
import { ALFRED_MAIN_CARD, ALFRED_PREVIEW_CARD } from "@data/alfred";

export const GITHUB_LINK = "https://github.com/imlocle";
export const LINKEDIN_LINK = "https://linkedin.com/in/imlocle";
export const WEB3FORMS_API_URL = "https://api.web3forms.com/submit";
export const CALENDLY_URL = "https://calendly.com/loc-le/30-min-meeting";

const AI_AUTOMATION = "ai-automation";
const BACKEND_MVP = "backend-mvp";
const CLOUD_ARCHITECTURE = "cloud-architecture";

/* ---------- Services Page ---------- */

export const SERVICES: MainCardData[] = [
  {
    id: BACKEND_MVP,
    icon: "⚡",
    title: "Backend MVP in 14 Days",
    description:
      "A production-ready backend you can ship with confidence: API, auth, database, and AWS deployment—built fast with clean docs and a smooth handoff.",
    outcomes:
      "You leave with a deployed backend + documentation so your frontend can move immediately.",
    highlights: [
      "Kickoff call + scope lock (no endless revisions)",
      "APIs + Auth (Cognito/JWT) + Roles",
      "Database design (DynamoDB or Postgres) + migrations where needed",
      "Deployed on AWS with logs/monitoring basics",
      "Docs + examples + next-steps plan",
    ],
    technologies: [
      "AWS",
      "Lambda",
      "API Gateway",
      "DynamoDB/Postgres",
      "Cognito/JWT",
      "Terraform/SAM",
    ],
    link: "/contact",
    ctaLabel: "Book a Free Build Call",
  },
  {
    id: AI_AUTOMATION,
    icon: "🤖",
    title: "AI Features That Ship",
    description:
      "Add real AI to your product—chat, recommendations, summarization, automation—without turning your backend into a fragile science project.",
    outcomes:
      "AI features integrated safely with guardrails, caching, and costs under control.",
    highlights: [
      "LLM integration (OpenAI / Anthropic / Bedrock)",
      "Prompt + tool orchestration patterns",
      "Caching, rate limits, and cost controls",
    ],
    technologies: ["Bedrock", "OpenAI", "Anthropic", "Queues/Async", "Caching"],
    link: "/contact",
    ctaLabel: "Discuss an AI Feature",
  },
  {
    id: CLOUD_ARCHITECTURE,
    icon: "☁️",
    title: "Fix My AWS (Cost + Reliability)",
    description:
      "If AWS bills are climbing or deployments are flaky, I'll stabilize your system and reduce waste—without a full rewrite.",
    outcomes:
      "Lower cloud spend + fewer incidents + a clearer architecture you can maintain.",
    highlights: [
      "Cost review + quick wins (top offenders first)",
      "Logging/monitoring improvements",
      "Infrastructure cleanup (IaC, permissions, environments)",
    ],
    technologies: ["AWS", "Terraform", "CloudWatch", "IAM", "CI/CD"],
    link: "/contact",
    ctaLabel: "Review My AWS Setup",
  },
];

export const PRICING_CARDS: PricingCardData[] = [
  {
    title: "MVP Core",
    price: "2,500",
    bestFor: "Validate Fast",
    details: [
      "API endpoints",
      "Auth + Roles",
      "Database Setup",
      "AWS Deployment",
      "Docs + Handoff",
    ],
  },
  {
    title: "MVP + AI",
    price: "3,500",
    bestFor: "AI Features",
    details: [
      "Everything in MVP Core",
      "LLM Integration",
      "Guardrails + Caching",
      "Cost Controls",
    ],
    isFeatured: true,
  },
  {
    title: "MVP Core",
    price: "4,000",
    bestFor: "Ongoing Help",
    details: [
      "Everything in MVP Core",
      "30 Days Support",
      "Small Improvements + Fixes",
      "Priority Responses",
    ],
  },
];

export const SERVICE_TIMELINE = [
  {
    day: "Day 1",
    title: "Scope lock + plan",
    body: "We define endpoints, auth, database choices, and success criteria.",
  },
  {
    day: "Days 2-7",
    title: "Build core backend",
    body: "API + auth + DB + deployment foundation. You get updates as we go.",
  },
  {
    day: "Days 8-12",
    title: "Hardening",
    body: "Edge cases, logging, basic monitoring, performance, docs.",
  },
  {
    day: "Days 13-14",
    title: "Handoff",
    body: "Documentation, examples, and a clean “next steps” plan.",
  },
];

/* ---------- Work Page ---------- */

export const CLIENT_PROJECTS: MainCardData[] = [
  NEPTUNE_MAIN_CARD,
  {
    id: "hachiko",
    title: "Hachiko Sushi House — Small Business Website",
    description:
      "Designed and shipped a fast, mobile-first restaurant website to showcase menu, hours, and location with a clean UX that drives calls and visits.",
    outcomes:
      "Shipped a lightweight static site with near-zero hosting costs and fast load performance, improving the customer experience and local business visibility.",
    technologies: ["GitHub Pages", "React", "Vite"],
    image: hachikoLogo,
    link: "https://hachikosushihouse.com/",
  },
];

export const TECHNICAL_PROJECTS: MainCardData[] = [
  ALFRED_MAIN_CARD,
  {
    id: "code-intelligence-platform",
    title: "Code Intelligence Platform — RAG for Local Codebases",
    description:
      "Python CLI that indexes a codebase, generates embeddings, retrieves relevant snippets, and answers questions using the OpenAI API.",
    outcomes:
      "Speeds up debugging and onboarding by turning large codebases into a searchable assistant for explanations and code discovery.",
    technologies: ["Python", "OpenAI"],
    image: codeIntelPlatformLogo,
    ctaLabel: "View Repo",
    link: "https://github.com/imlocle/code-query",
  },
  {
    id: "pisync",
    title: "PiSync — Automated File Transfer + Cleanup",
    description:
      "Automation system that monitors a folder, securely transfers files to a Raspberry Pi via SSH/SCP, then cleans up completed files.",
    outcomes:
      "Eliminated manual file handling with reliable background transfers, a layered architecture, and safe cleanup workflows.",
    technologies: [
      "Python",
      "Watchdog",
      "SCP/SSH",
      "Send2Trash",
      "Raspberry Pi",
    ],
    image: pisyncLogo,
    ctaLabel: "View Repo",
    link: "https://github.com/imlocle/pisync",
  },
  {
    id: "stock-tracker",
    title: "Stock Tracker — Full-Stack Data App",
    description:
      "Full-stack app that pulls market data and displays real-time + historical charts for multiple companies.",
    outcomes:
      "Delivered a working product demonstrating API integration, backend routing, and data visualization patterns.",
    technologies: ["React", "Next.js", "TypeScript", "FastAPI", "Python"],
    image: stockTrackerLogo,
    ctaLabel: "View Repo",
    link: "https://github.com/imlocle/stock-tracker",
  },
  {
    id: "imlocle",
    title: "imlocle.com — Backend Consulting & Case Study Platform",
    description:
      "A services-focused engineering site built to showcase real production systems, backend case studies, and a clear path to booking work.",
    outcomes:
      "Designed a conversion-oriented funnel that guides visitors from services and proof (case studies) to pricing and booking a call—without feeling like a traditional portfolio.",
    technologies: ["React", "TypeScript", "Vite", "GitHub Pages"],
    image: llLogo,
    ctaLabel: "View Repo",
    link: "https://github.com/imlocle/imlocle.github.io",
  },
];

/* ---------- Home Page ---------- */

export const PREVIEW_SERVICES: PreviewCardData[] = [
  {
    icon: "⚡",
    title: "Backend MVP in 14 Days",
    description:
      "APIs + Auth + Database + AWS deployment — production-ready with clean docs and handoff.",
    link: `/services#${BACKEND_MVP}`,
  },
  {
    icon: "🤖",
    title: "AI Features That Ship",
    description:
      "Add AI chat, recommendations, or automation on top of your product — safely and maintainably.",
    link: `/services#${AI_AUTOMATION}`,
  },
  {
    icon: "☁️",
    title: "Fix My AWS (Cost + Reliability)",
    description:
      "Reduce cloud spend, stabilize deployments, and clean up architecture without a full rewrite.",
    link: `/services#${CLOUD_ARCHITECTURE}`,
  },
];

export const PREVIEW_PROJECTS: PreviewCardData[] = [
  ALFRED_PREVIEW_CARD,
  {
    title: "Code Intelligence Platform",
    description: "RAG CLI that answers questions about your codebase.",
    image: codeIntelPlatformLogo,
    link: "/work/technical#code-intelligence-platform",
  },
  NEPTUNE_PREVIEW_CARD,
];

export const COMPANIES_WORKED: CompanyCardData[] = [
  {
    alt: "Method Data Science",
    imageLogo: mdsLogo,
    link: "https://www.methoddatascience.com/",
  },
  NEPTUNE_COMPANY_CARD,
  {
    alt: "Rackspace Technology",
    imageLogo: raxLogo,
    link: "https://www.rackspace.com/",
  },
  {
    alt: "Wayvia",
    imageLogo: wayviaLogo,
    link: "https://www.wayvia.com/",
  },
];
