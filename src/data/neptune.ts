import type { CaseStudyConfig } from "@models/caseStudy";
import type { MainCardData, PreviewCardData, CompanyCardData } from "@models/card";

// Note: Neptune logo to be added
// import neptuneLogo from "@assets/neptune-logo.png";

export const NEPTUNE_TITLE = "Neptune App — Cloud-Native SaaS Platform";
export const NEPTUNE_CASE_STUDY_PATH = "/work/production/neptune";

export const NEPTUNE_TECHNOLOGIES = [
  "Python",
  "AWS Lambda",
  "API Gateway",
  "DynamoDB",
  "S3",
  "CloudWatch",
  "AWS CDK",
  "Serverless Architecture",
  "Event-Driven Design",
  "Analytics Pipelines",
];

export const NEPTUNE_MAIN_CARD: MainCardData = {
  id: "neptune",
  title: NEPTUNE_TITLE,
  description:
    "Led backend architecture and delivery for a cloud-native SaaS platform supporting 10,000+ active iOS users with scalable serverless APIs, real-time data processing, and analytics pipelines.",
  outcomes:
    "Designed and delivered production-ready serverless backend that scaled to 10K+ users while maintaining high reliability and improving team delivery velocity by ~20%.",
  highlights: [
    "Architected serverless backend using Python, AWS Lambda, and API Gateway",
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
  imageLogo: "", // To be added
  link: "https://www.theneptuneapp.com/",
};

export const NEPTUNE_CASE_STUDY_CONFIG: CaseStudyConfig = {
  pageTitle: `${NEPTUNE_TITLE}: Case Study`,

  heroTopline: "Production System • Senior Backend Lead",
  heroTitle: "Neptune App — Building a Serverless SaaS Platform at Scale",
  heroSubtitle:
    "Led backend architecture and delivery for a cloud-native SaaS platform supporting 10,000+ active iOS users, implementing scalable serverless APIs, event-driven systems, and analytics pipelines using Python and AWS.",

  stats: [
    { label: "Users", value: "10,000+ active iOS users" },
    { label: "Architecture", value: "Serverless (Lambda + API Gateway)" },
    { label: "Team", value: "Led 4 engineers" },
    { label: "Impact", value: "~20% delivery velocity improvement" },
  ],

  sections: [
    {
      id: "challenge",
      title: "The Challenge",
      description:
        "Neptune App needed a scalable, cost-effective backend to support a growing iOS user base while enabling rapid feature development and maintaining high reliability. The system needed to handle real-time data processing, analytics, and support future AI-driven features.",
    },
    {
      id: "role",
      title: "My Role",
      description:
        "As Senior Backend Lead, I owned the complete backend architecture and delivery, from system design to deployment and monitoring.",
      callout:
        "Full ownership of backend architecture, API design, data modeling, team leadership, and operational tooling.",
    },
    {
      id: "architecture",
      title: "Architecture & Design",
      description:
        "Built a serverless-first architecture optimized for scalability, cost-efficiency, and developer velocity.",
      highlights: [
        "Serverless APIs: Python + AWS Lambda + API Gateway for auto-scaling and pay-per-use pricing",
        "Data Layer: DynamoDB for high-performance NoSQL storage with single-table design patterns",
        "Analytics: Event-driven pipelines for user engagement tracking and product insights",
        "Infrastructure: AWS CDK/SAM for infrastructure as code and reproducible deployments",
        "Monitoring: CloudWatch for logging, metrics, and operational visibility",
      ],
    },
    {
      id: "technical-highlights",
      title: "Technical Highlights",
      highlights: [
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
        "Building a production system at scale requires solving complex technical and organizational challenges.",
      highlights: [
        "Challenge: Supporting 10K+ users with cost-effective infrastructure → Solution: Serverless architecture with auto-scaling and pay-per-use pricing",
        "Challenge: Rapid feature development without sacrificing reliability → Solution: Event-driven design with clear service boundaries and comprehensive testing",
        "Challenge: Team coordination and technical alignment → Solution: Code reviews, technical planning sessions, and clear architecture documentation",
        "Challenge: Operational visibility and debugging → Solution: Structured logging, CloudWatch dashboards, and operational runbooks",
      ],
    },
    {
      id: "impact",
      title: "Impact & Results",
      highlights: [
        "Successfully scaled to 10,000+ active iOS users with high reliability",
        "Improved team delivery velocity by ~20% through better architecture and processes",
        "Enabled product team to ship AI-driven features with backend support",
        "Maintained cost-effective infrastructure through serverless architecture",
        "Built foundation for future growth and feature development",
      ],
    },
  ],

  technologies: NEPTUNE_TECHNOLOGIES,

  nextStepsBody:
    "Continue scaling the platform to support growing user base, implement advanced analytics features, optimize costs through caching and query optimization, and expand AI-driven capabilities with LLM integration.",

  showCta: true,
};
