import alfredLogo from "@assets/alfred-logo.png";
import type { CaseStudyConfig } from "@models/caseStudy";
import type { MainCardData, PreviewCardData } from "@models/card";

export const ALFRED_GREETINGS = [
  "Good day. I am Alfred, Mr. Loc Le's trusted AI butler. How may I be of service to you today?",
  "Ah, welcome. I'm Alfred, Mr. Loc Le's ever-prepared AI butler. Ask away, and I shall do my best to assist.",
  "Greetings! I'm Alfred, Loc's AI butler. I know all about his experience, projects, and interests. What would you like to know?",
  "Hello there. I'm Alfred, Mr. Loc Le's AI butler. I'm here to answer any questions you may have about him. How may I assist you?",
  "A pleasure to make your acquaintance. I'm Alfred, Mr. Loc Le's loyal AI butler. How might I help today?",
  "Welcome. I am Alfred, at your service. Feel free to inquire about Mr. Loc Le's work, skills, or interests.",
  "Salutations. Alfred here — Mr. Loc Le's digital butler. How may I lend my assistance?",
];

export const ALFRED_TITLE = "Alfred — AI Assistant Platform";
export const ALFRED_CASE_STUDY_PATH = "/work/technical/alfred";

export const ALFRED_TECHNOLOGIES = [
  "AWS Bedrock",
  "Nova (Foundation Model)",
  "Python",
  "AWS Lambda",
  "API Gateway",
  "RAG",
  "DynamoDB",
  "Terraform",
  "Prompt Engineering",
  "LLM Guardrails",
  "IP-based Rate Limiting",
  "Serverless Architecture",
];

export const ALFRED_MAIN_CARD: MainCardData = {
  id: "alfred",
  title: `${ALFRED_TITLE} (AWS Bedrock)`,
  description:
    "Production-ready AI assistant platform built with AWS Bedrock and Lambda, designed with strict guardrails, rate limiting, and cost-aware infrastructure.",
  outcomes:
    "Implemented rate limiting and a stable serverless architecture so the chatbot can handle real traffic without spiking cost or failing under load.",
  technologies: ALFRED_TECHNOLOGIES,
  image: alfredLogo,
  link: ALFRED_CASE_STUDY_PATH,
  ctaLabel: "View Case Study",
  target: "_self",
};

export const ALFRED_PREVIEW_CARD: PreviewCardData = {
  title: ALFRED_TITLE,
  description:
    "Production AI assistant with strict guardrails and low-cost AWS infrastructure.",
  image: alfredLogo,
  link: ALFRED_CASE_STUDY_PATH,
};

export const ALFRED_CASE_STUDY_CONFIG: CaseStudyConfig = {
  pageTitle: `${ALFRED_TITLE}: Case Study`,
  pageSubtitle: "Production-ready LLM system with strict guardrails, cost optimization, and serverless infrastructure.",

  heroTopline: "Technical Project • LLM Systems Engineering",
  heroTitle: "Alfred — Building a Constrained LLM System in Production",
  heroSubtitle:
    "Implemented a secure, production-ready LLM system using AWS Bedrock, Terraform, and serverless infrastructure, emphasizing guardrails, request throttling, cost controls, and deterministic system behavior.",

  stats: [
    { label: "LLM", value: "AWS Bedrock (Nova)" },
    { label: "Infra", value: "Terraform-managed AWS stack" },
    { label: "Guardrails", value: "Strict system + KB constraints" },
    { label: "Cost", value: "Low-cost model + deterministic token limits" },
  ],

  sections: [
    {
      id: "problem",
      title: "The Problem",
      description:
        "I wanted a public-facing AI assistant to demonstrate real-world chatbot architecture, but my previous production chatbots were built for Rackspace and could not be shared publicly. I needed something live, constrained, and demonstrably safe.",
    },
    {
      id: "goal",
      title: "The Goal",
      description:
        "Build an AI assistant that can only speak about me, my work, and my projects—never drifting into general chatbot behavior—while showcasing my skills in AWS, Terraform, and LLM guardrail design.",
    },
    {
      id: "ownership",
      title: "My Role",
      description:
        "I owned the entire system end-to-end: architecture, infrastructure, backend implementation, prompt design, and deployment.",
      callout:
        "Full ownership across Terraform, AWS services, Python backend, Bedrock integration, data modeling, and guardrail logic.",
    },
    {
      id: "architecture",
      title: "Architecture",
      description:
        "Alfred follows a layered backend architecture designed for safety, observability, and extensibility.",
      highlights: [
        "Client request → API → handler → controller → service → repository",
        "Rate limits enforced per IP (x-forwarded-for) via DynamoDB (daily counter + TTL)",
        "Bedrock invoked with strict system prompt + injected KB; off-topic requests are forced to refuse.",
        "Single synchronous request/response flow optimized for low-latency chat UX (no async orchestration required).",
      ],
    },
    {
      id: "guardrails",
      title: "Guardrails & Safety",
      description:
        "The system is intentionally constrained to prevent hallucinations and off-topic responses.",
      highlights: [
        "Daily usage counters with TTL + hard cap (e.g., 50/day/IP)",
        "Inference config tuned for stability (maxTokens 200, temp 0.2)",
        "Strict system prompt limiting scope to Loc Le only",
        "Hard-decline behavior for all unrelated questions",
        "Knowledge base injected directly into the system context",
        "Formal, consistent response tone enforced at the prompt level",
      ],
    },
    {
      id: "tradeoffs",
      title: "Trade-offs & Decisions",
      description:
        "I chose AWS Bedrock Nova primarily for cost efficiency while retaining the ability to switch to Anthropic models if needed.",
      highlights: [
        "Nova selected for low operating cost",
        "Model ID is configuration-driven (swap to Anthropic without refactor)",
        "Tight inference config (maxTokens/temperature) to reduce drift and cost",
        "Optimized as a production service: IaC, logging, rate-limits, and deterministic behavior",
      ],
    },
    {
      id: "impact",
      title: "Impact",
      highlights: [
        "Live AI assistant deployed on my website",
        "Demonstrates real-world LLM guardrails and infra design",
        "Reusable architecture for future Neptune chatbot features",
        "Minimal operating cost with production-grade structure",
      ],
    },
  ],

  technologies: ALFRED_TECHNOLOGIES,

  projectLinks: {
    github: 'https://github.com/imlocle/alfred-ai-assistant',
    live: 'https://imlocle.com?chat=true',
  },

  nextStepsBody:
    "Introduce streaming responses, via Bedrock's Invoke Model with Response Stream, for better chat UX, add multi-model routing, enhance observability, and optionally enable Anthropic support to compare LLM behavior under identical guardrails.",

  showCta: true,
};
