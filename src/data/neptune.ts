import type { CaseStudyConfig } from "@models/caseStudy";
import type {
  MainCardData,
  PreviewCardData,
  CompanyCardData,
} from "@models/card";
import neptuneLogo from "@assets/neptune-logo.svg";

export const NEPTUNE_TITLE = "Neptune App — Cloud-Native SaaS Platform";
export const NEPTUNE_CASE_STUDY_PATH = "/work/client/neptune";

export const NEPTUNE_TECHNOLOGIES = [
  "TypeScript",
  "Python 3.13",
  "Node.js 20.x",
  "AWS Lambda",
  "API Gateway",
  "DynamoDB",
  "S3",
  "CloudWatch",
  "AWS SAM",
  "Terraform",
  "AWS Bedrock",
  "Nova Lite",
  "Rekognition",
  "Cognito",
  "PyArrow",
  "Serverless Architecture",
  "Event-Driven Design",
  "Analytics Pipelines",
];

export const NEPTUNE_MAIN_CARD: MainCardData = {
  id: "neptune",
  title: NEPTUNE_TITLE,
  description:
    "Led backend architecture and delivery for a cloud-native SaaS platform supporting 10,000+ active iOS users with scalable serverless APIs, real-time data processing, analytics pipelines (Jupiter ETL), and AI chatbot integration (Moody).",
  outcomes:
    "Designed and delivered production-ready serverless backend that scaled to 10K+ users while maintaining high reliability and improving team delivery velocity by ~20%. Built Jupiter ETL for analytics and Moody AI chatbot using AWS Bedrock.",
  highlights: [
    "Architected serverless backend using TypeScript, Python, AWS Lambda, and API Gateway",
    "Built Jupiter ETL pipeline for analytics data ingestion and Parquet generation",
    "Implemented Moody AI chatbot using AWS Bedrock Nova Lite with knowledge base injection",
    "Designed scalable data models and analytics pipelines for product insights",
    "Guided team of 4 engineers through system design and technical planning",
    "Implemented operational tooling to support AI-driven features",
    "Translated product requirements into reliable, scalable backend systems",
  ],
  technologies: NEPTUNE_TECHNOLOGIES,
  // image: neptuneLogo,
  link: NEPTUNE_CASE_STUDY_PATH,
  ctaLabel: "View Case Study",
  target: "_self",
};

export const NEPTUNE_PREVIEW_CARD: PreviewCardData = {
  title: "Neptune App",
  description:
    "Cloud-native SaaS platform serving 10K+ users with serverless architecture.",
  // image: neptuneLogo,
  link: NEPTUNE_CASE_STUDY_PATH,
};

export const NEPTUNE_COMPANY_CARD: CompanyCardData = {
  alt: "Neptune App",
  imageLogo: neptuneLogo,
  link: "https://www.theneptuneapp.com/",
};

export const NEPTUNE_CASE_STUDY_CONFIG: CaseStudyConfig = {
  pageTitle: `${NEPTUNE_TITLE}: Case Study`,
  pageSubtitle:
    "Cloud-native SaaS platform supporting 10K+ users with serverless architecture, AI integration, and analytics pipelines.",

  heroTopline: "Production System • Senior Backend Lead",
  heroTitle: "Neptune App — Building a Serverless SaaS Platform at Scale",
  heroSubtitle:
    "Led backend architecture and delivery for a cloud-native SaaS platform supporting 10,000+ active iOS users, implementing scalable serverless APIs, event-driven systems, analytics pipelines (Jupiter ETL), and AI chatbot integration (Moody) using TypeScript, Python, and AWS.",

  stats: [
    { label: "Users", value: "10,000+ active iOS users" },
    { label: "Architecture", value: "Serverless (Lambda + API Gateway)" },
    { label: "Team", value: "Led 4 engineers" },
    { label: "Components", value: "Main API + Jupiter ETL + Moody AI" },
  ],

  sections: [
    {
      id: "challenge",
      title: "The Challenge",
      description:
        "Neptune App needed a scalable, cost-effective backend to support a growing iOS user base while enabling rapid feature development and maintaining high reliability. The system needed to handle real-time data processing, analytics (Jupiter ETL), AI chatbot features (Moody), and support future AI-driven capabilities.",
    },
    {
      id: "role",
      title: "My Role",
      description:
        "As Senior Backend Lead, I owned the complete backend architecture and delivery, from system design to deployment and monitoring. This included the main API, Jupiter ETL pipeline, and Moody AI chatbot integration.",
      callout:
        "Full ownership of backend architecture, API design, data modeling, team leadership, operational tooling, and AI integration.",
    },
    {
      id: "architecture",
      title: "Architecture & Design",
      description:
        "Built a serverless-first architecture optimized for scalability, cost-efficiency, and developer velocity with three main components: Main API, Jupiter ETL, and Moody AI Chatbot.",
      highlights: [
        "Main API: TypeScript + Node.js 20.x + AWS Lambda + API Gateway for auto-scaling social video platform",
        "Jupiter ETL: Python 3.13 + Lambda + Terraform for analytics data ingestion and Parquet generation",
        "Moody AI Chatbot: Python + AWS Bedrock Nova Lite + S3 knowledge base injection",
        "Data Layer: DynamoDB for high-performance NoSQL storage with single-table design patterns",
        "Content Moderation: AWS Rekognition integration for automated content safety",
        "Analytics: Event-driven pipelines for user engagement tracking and product insights",
        "Infrastructure: AWS SAM + Terraform for infrastructure as code and reproducible deployments",
        "Monitoring: CloudWatch for logging, metrics, and operational visibility",
      ],
    },
    {
      id: "technical-highlights",
      title: "Technical Highlights",
      highlights: [
        "Main API: Event-driven architecture for video processing with social features (follow, comments, votes)",
        "Jupiter ETL: Serverless data pipeline with PyArrow for Parquet generation and multi-environment deployment",
        "Moody AI: AWS Bedrock integration with knowledge base injection from S3, similar architecture to Alfred AI",
        "Designed scalable backend data models and analytics pipelines to support product insights",
        "Implemented operational tooling for monitoring, debugging, and supporting AI-driven features",
        "Guided team of 4 engineers through system design, code reviews, and technical planning",
        "Translated product requirements into reliable, scalable backend systems",
        "Improved team delivery velocity by approximately 20% through better architecture and processes",
      ],
    },
    {
      id: "challenges",
      title: "Key Challenges & Solutions",
      description:
        "Building a production system at scale with multiple components requires solving complex technical and organizational challenges.",
      highlights: [
        "Challenge: Supporting 10K+ users with cost-effective infrastructure → Solution: Serverless architecture with auto-scaling and pay-per-use pricing",
        "Challenge: Analytics data processing at scale → Solution: Jupiter ETL with Lambda-based processing and Parquet file generation",
        "Challenge: AI chatbot integration → Solution: Moody using AWS Bedrock Nova Lite with knowledge base injection from S3",
        "Challenge: Rapid feature development without sacrificing reliability → Solution: Event-driven design with clear service boundaries and comprehensive testing",
        "Challenge: Team coordination and technical alignment → Solution: Code reviews, technical planning sessions, and clear architecture documentation",
        "Challenge: Operational visibility across multiple systems → Solution: Structured logging, CloudWatch dashboards, and operational runbooks",
      ],
    },
    {
      id: "impact",
      title: "Impact & Results",
      highlights: [
        "Successfully scaled to 10,000+ active iOS users with high reliability",
        "Built Jupiter ETL pipeline for analytics data ingestion and Parquet generation",
        "Implemented Moody AI chatbot using AWS Bedrock for enhanced user experience",
        "Improved team delivery velocity by ~20% through better architecture and processes",
        "Enabled product team to ship AI-driven features with backend support",
        "Maintained cost-effective infrastructure through serverless architecture",
        "Built foundation for future growth and feature development",
      ],
    },
  ],

  technologies: NEPTUNE_TECHNOLOGIES,

  projectLinks: {
    live: "https://www.theneptuneapp.com/",
  },

  nextStepsBody:
    "Continue scaling the platform to support growing user base, implement advanced analytics features, optimize costs through caching and query optimization, and expand AI-driven capabilities with LLM integration.",

  showCta: true,
};
