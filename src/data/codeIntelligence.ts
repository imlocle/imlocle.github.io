import codeIntelPlatformLogo from "@assets/code-intel-platform-logo.png";
import type { MainCardData, PreviewCardData } from "@models/card";
import type { CaseStudyConfig } from "@models/caseStudy";

export const CODE_INTELLIGENCE_TITLE = "Code Intelligence Platform";
export const CODE_INTELLIGENCE_CASE_STUDY_PATH =
  "/work/technical/code-intelligence";

export const CODE_INTELLIGENCE_TECHNOLOGIES = [
  "Python",
  "OpenAI API",
  "Embeddings",
  "RAG",
  "Vector Search",
  "CLI Tooling",
];

export const CODE_INTELLIGENCE_MAIN_CARD: MainCardData = {
  id: "code-intelligence-platform",
  title: `${CODE_INTELLIGENCE_TITLE} — RAG for Local Codebases`,
  description:
    "Python CLI that indexes a repository, generates embeddings, retrieves relevant context, and answers questions with grounded code-aware responses.",
  outcomes:
    "Speeds up onboarding and debugging by turning large codebases into a searchable assistant for code discovery and explanations.",
  technologies: CODE_INTELLIGENCE_TECHNOLOGIES,
  image: codeIntelPlatformLogo,
  ctaLabel: "View Case Study",
  link: CODE_INTELLIGENCE_CASE_STUDY_PATH,
  target: "_self",
};

export const CODE_INTELLIGENCE_PREVIEW_CARD: PreviewCardData = {
  title: CODE_INTELLIGENCE_TITLE,
  description: "RAG CLI that answers questions about your repo.",
  image: codeIntelPlatformLogo,
  link: CODE_INTELLIGENCE_CASE_STUDY_PATH,
};

export const CODE_INTELLIGENCE_CASE_STUDY_CONFIG: CaseStudyConfig = {
  pageTitle: `${CODE_INTELLIGENCE_TITLE}: Case Study`,
  pageSubtitle:
    "RAG-powered developer tool that turns your codebase into a searchable knowledge base for semantic code discovery and understanding.",

  heroTopline: "Technical Project • AI Developer Tooling",
  heroTitle: "Code Intelligence Platform — AI-Powered Codebase Understanding",
  heroSubtitle:
    "A RAG-powered system that indexes a local repository and answers natural-language questions about the code with grounded, context-aware responses—built to improve developer onboarding, debugging, and code discovery.",

  stats: [
    { label: "Category", value: "Developer Productivity" },
    { label: "Core Pattern", value: "RAG + Embeddings" },
    { label: "Interface", value: "Python CLI" },
    { label: "Focus", value: "Code Search & Explanation" },
  ],

  technologies: CODE_INTELLIGENCE_TECHNOLOGIES,

  sections: [
    {
      id: "overview",
      title: "Overview",
      description:
        "Large repositories slow teams down: onboarding takes longer, debugging becomes harder, and tribal knowledge turns into a bottleneck. Code Intelligence Platform solves this by turning a codebase into a searchable knowledge layer that developers can query in plain English.",
      highlights: [
        "Indexes a local repository into semantically searchable chunks",
        "Retrieves relevant context before generating an answer to reduce hallucinations",
        "Designed for fast iteration and easy adoption as a CLI",
      ],
    },
    {
      id: "problem",
      title: "Problem",
      description:
        "Traditional search tools (grep, IDE search) are great for keywords but weak at semantic understanding. Engineers often need answers like “where is this behavior implemented?” or “how does this flow work end-to-end?”—especially in unfamiliar codebases.",
      highlights: [
        "Keyword search misses intent and architectural context",
        "Understanding behavior requires stitching across many files",
        "Onboarding and debugging become time sinks without strong documentation",
      ],
    },
    {
      id: "solution",
      title: "Solution",
      description:
        "I built a RAG pipeline tailored for code understanding. The system scans source files, chunks them into meaningful units, generates embeddings, retrieves the most relevant segments for a user's question, then uses an LLM to generate a response grounded in the retrieved code.",
      highlights: [
        "Repository ingestion and filtering for relevant files",
        "Chunking strategy optimized for code structure and context windows",
        "Retrieval-first prompting to keep answers tied to real code",
      ],
    },
    {
      id: "architecture",
      title: "Architecture",
      description:
        "The platform is structured as a modular pipeline so each stage can evolve independently—chunking, embeddings, retrieval strategy, and prompting. This makes it easy to improve accuracy, performance, and developer UX over time.",
      highlights: [
        "Ingestion → chunking → embeddings → retrieval → LLM answer generation",
        "Separation of concerns between indexing and query-time execution",
        "Built for future expansion into a web UI or team workflows",
      ],
    },
    {
      id: "impact",
      title: "Outcomes",
      callout: "End-to-end ownership (design → implementation → iteration)",
      description:
        "The result is a practical developer productivity tool that reduces time spent searching and interpreting unfamiliar code. It demonstrates real-world application of RAG beyond chatbots—focused on accuracy, usability, and maintainable architecture.",
      highlights: [
        "Faster code discovery and explanation for large repositories",
        "Reduced time spent tracing logic across files and modules",
        "A strong foundation for internal tooling or SaaS-style expansion",
      ],
    },
  ],

  nextStepsBody:
    "If I productized this further, I'd add persistent indexing (so large repos don't reprocess each run), support for more languages and file types, and a lightweight web UI. I'd also add evaluation metrics for retrieval quality, caching, and optional integrations with GitHub or IDE workflows.",

  showCta: true,
};
