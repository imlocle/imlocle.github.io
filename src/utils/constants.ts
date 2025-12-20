import codeQueryLogo from "@assets/code-query-logo.png";
import stockTrackerLogo from "@assets/stock-tracker-logo.png";
import hachikoLogo from "@assets/hachiko_logo.png";
import neptuneLogo from "@assets/neptune-logo.svg";
import neptuneLogo2 from "@assets/neptune-logo2.png";
import llLogo from "@assets/ll-logo.png";
import alfredLogo from "@assets/alfred-logo.png";
import raxLogo from "@assets/rax-logo-2020.svg";
import mdsLogo from "@assets/mds.png";
import wayviaLogo from "@assets/wayvia-logo.svg";
import pisyncLogo from "@assets/pisync_logo.png";
import type {
  ICompanyCard,
  IMainCard,
  IPreviewCard,
  IPricingCard,
} from "@models/interfaces";

export const GITHUB_LINK = "https://github.com/imlocle";
export const LINKEDIN_LINK = "https://linkedin.com/in/imlocle";
export const WEB3FORMS_API_URL = "https://api.web3forms.com/submit";
export const CALENDLY_URL = "https://calendly.com/loc-le/30-min-meeting";
export const NEPTUNE_URL = "https://www.theneptuneapp.com/";

export const POSITION_TITLE = "Backend Cloud Engineer";
export const ALFRED_GREETINGS = [
  "Good day. I am Alfred, Mr. Loc Le's trusted AI butler. How may I be of service to you today?",
  "Ah, welcome. I'm Alfred, Mr. Loc Le's ever-prepared AI butler. Ask away, and I shall do my best to assist.",
  "Greetings! I'm Alfred, Loc's AI butler. I know all about his experience, projects, and interests. What would you like to know?",
  "Hello there. I'm Alfred, Mr. Loc Le's AI butler. I'm here to answer any questions you may have about him. How may I assist you?",
  "A pleasure to make your acquaintance. I'm Alfred, Mr. Loc Le's loyal AI butler. How might I help today?",
  "Welcome. I am Alfred, at your service. Feel free to inquire about Mr. Loc Le's work, skills, or interests.",
  "Salutations. Alfred here — Mr. Loc Le's digital butler. How may I lend my assistance?",
];

export const NEPTUNE_TECHNOLOGIES = [
  "AWS SAM",
  "TypeScript",
  "Cognito",
  "DynamoDB",
  "SQS",
  "S3",
  "AWS Rekognition",
  "Terraform",
  "Python",
  "Parquet",
  "Athena",
  "CloudWatch",
  "Cloudflare",
];

const AI_AUTOMATION = "ai-automation";
const BACKEND_MVP = "backend-mvp";
const CLOUD_ARCHITECTURE = "cloud-architecture";

/* ---------- Services Page ---------- */

export const SERVICES: IMainCard[] = [
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

export const PRICING_CARDS: IPricingCard[] = [
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

export const CLIENT_PROJECTS: IMainCard[] = [
  {
    id: "neptune",
    title: "Neptune — Video Social Platform",
    description:
      "Built and deployed a scalable AWS backend for a video-first social product (uploads, user activity, and core platform APIs) designed to support growth without constant firefighting.",
    outcomes:
      "Delivered a production-ready backend foundation that can handle high-volume uploads and real usage, with a system designed for reliability, scaling, and rapid iteration.",
    technologies: NEPTUNE_TECHNOLOGIES,
    image: neptuneLogo,
    link: "/work/client/neptune",
    ctaLabel: "View Case Study",
    appStore: "https://apps.apple.com/us/app/neptune-be-yourself/id6745182224",
    target: "_self",
  },
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

/* ---------- Work Page ---------- */

export const TECHNICAL_PROJECTS: IMainCard[] = [
  {
    id: "alfred",
    title: "Alfred — AI Chatbot (AWS Bedrock)",
    description:
      "Production-style AI chatbot backend using AWS Bedrock + Lambda, designed for reliability and multiple users.",
    outcomes:
      "Implemented rate limiting and a stable serverless architecture so the chatbot can handle real traffic without spiking cost or failing under load.",
    technologies: ["AWS Bedrock", "Lambda", "Python", "S3", "Terraform"],
    image: alfredLogo,
    link: "https://github.com/imlocle/alfred-chatbot",
  },
  {
    id: "codequery",
    title: "Code Query — RAG for Local Codebases",
    description:
      "Python CLI that indexes a codebase, generates embeddings, retrieves relevant snippets, and answers questions using the OpenAI API.",
    outcomes:
      "Speeds up debugging and onboarding by turning large codebases into a searchable assistant for explanations and code discovery.",
    technologies: ["Python", "OpenAI"],
    image: codeQueryLogo,
    link: "https://github.com/imlocle/code-query",
  },
  {
    id: 3,
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
    link: "https://github.com/imlocle/pisync",
  },
  {
    id: 4,
    title: "Stock Tracker — Full-Stack Data App",
    description:
      "Full-stack app that pulls market data and displays real-time + historical charts for multiple companies.",
    outcomes:
      "Delivered a working product demonstrating API integration, backend routing, and data visualization patterns.",
    technologies: ["React", "Next.js", "TypeScript", "FastAPI", "Python"],
    image: stockTrackerLogo,
    link: "https://github.com/imlocle/stock-tracker",
  },
  {
    id: 5,
    title: "Portfolio Website",
    description:
      "My consulting site focused on backend MVP delivery, pricing, and case-study style proof.",
    outcomes:
      "Built a conversion-focused site that routes visitors into a simple funnel: Services → Pricing → Book Call.",
    technologies: ["React", "TypeScript", "Vite"],
    image: llLogo,
    link: "https://github.com/imlocle/imlocle.github.io",
  },
];

/* ---------- Home Page ---------- */

export const PREVIEW_SERVICES: IPreviewCard[] = [
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

export const PREVIEW_PROJECTS: IPreviewCard[] = [
  {
    title: "Alfred — AI Chatbot",
    description: "Serverless AI chatbot backend on AWS Bedrock.",
    image: alfredLogo,
    link: "/work/technical#alfred",
  },
  {
    title: "Code Query",
    description: "RAG CLI that answers questions about your codebase.",
    image: codeQueryLogo,
    link: "/work/technical#codequery",
  },
  {
    title: "Neptune — Video Social App",
    description: "Scalable AWS backend for a video-first platform.",
    image: neptuneLogo,
    link: "/work/client/neptune",
  },
];

export const COMPANIES_WORKED: ICompanyCard[] = [
  {
    alt: "Method Data Science",
    imageLogo: mdsLogo,
    link: "https://www.methoddatascience.com/",
  },
  {
    alt: "The Neptune App",
    imageLogo: neptuneLogo2,
    link: NEPTUNE_URL,
  },
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
