import type { CaseStudyConfig } from "@models/caseStudy";
import { ALFRED_TECHNOLOGIES } from "@utils/constants";

export const alfredConfig: CaseStudyConfig = {
  pageTitle: "Alfred AI Assistant Case Study",

  heroTopline: "Technical Project • AI Assistant",
  heroTitle: "Alfred — Personal AI Assistant & Automation Bot",
  heroSubtitle:
    "A cost-efficient, production-ready AI assistant built to answer questions exclusively about me, schedule meetings, and demonstrate real-world AWS, Terraform, and LLM guardrail design.",

  stats: [
    { label: "LLM", value: "AWS Bedrock (Nova)" },
    { label: "Infra", value: "Terraform-managed AWS stack" },
    { label: "Guardrails", value: "Strict system + KB constraints" },
    { label: "Cost", value: "Ultra-low runtime spend" },
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
        "Usage tracking and rate limits enforced per IP via DynamoDB",
        "Bedrock invoked only after guardrail and scope validation",
        "All responses returned synchronously to the UI",
      ],
    },
    {
      id: "guardrails",
      title: "Guardrails & Safety",
      description:
        "The system is intentionally constrained to prevent hallucinations and off-topic responses.",
      highlights: [
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
        "Nova selected for low-cost experimentation",
        "Architecture allows easy model swaps (Anthropic-ready)",
        "Optimized for recruiters reviewing real infrastructure, not demos",
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

  nextStepsBody:
    "Add multi-model routing, enhanced observability, and optional Anthropic support to demonstrate comparative LLM behavior under identical guardrails.",

  showCta: true,
};
