import type { CaseStudyConfig } from "@models/caseStudy";
import neptuneLogo from "@assets/neptune-logo.svg";
import neptuneLogo2 from "@assets/neptune-logo2.png";
import type {
  CompanyCardData,
  MainCardData,
  PreviewCardData,
} from "@models/card";

export const NEPTUNE_TITLE = "Neptune — Video Social Platform";
export const NEPTUNE_CASE_STUDY_PATH = "/work/client/neptune";

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

export const NEPTUNE_MAIN_CARD: MainCardData = {
  id: "neptune",
  title: NEPTUNE_TITLE,
  description:
    "Platform and backend engineering for a video-first social product—core APIs, authentication, uploads, and event tracking built to scale without constant firefighting.",
  outcomes:
    "Delivered a production-ready foundation for real users: safer iteration with dev/prod isolation, improved reliability, and scalable workflows for high-volume uploads and activity.",
  technologies: NEPTUNE_TECHNOLOGIES,
  image: neptuneLogo,
  link: NEPTUNE_CASE_STUDY_PATH,
  ctaLabel: "View Case Study",
  appStore: "https://apps.apple.com/us/app/neptune-be-yourself/id6745182224",
  target: "_self",
};

export const NEPTUNE_PREVIEW_CARD: PreviewCardData = {
  title: NEPTUNE_TITLE,
  description: "Platform overhaul for a video-first app on AWS.",
  image: neptuneLogo,
  link: NEPTUNE_CASE_STUDY_PATH,
};

export const NEPTUNE_CASE_STUDY_CONFIG: CaseStudyConfig = {
  pageTitle: `${NEPTUNE_TITLE}: Case Study`,

  heroTopline: "Client Project • Platform & Backend Engineering",
  heroTitle: "Neptune — Engineering a Scalable Social Video Platform",
  heroSubtitle:
    "Architected and delivered a production-ready platform overhaul for a video-first social app: TypeScript migration, authentication, DynamoDB modeling, async workflows, and analytics optimized for scale and cost.",

  stats: [
    { label: "Delivery", value: "Production-ready foundation" },
    { label: "Auth", value: "Cognito + JWT flows" },
    { label: "Analytics", value: "DDB → Parquet → Athena" },
    { label: "Cost", value: "Significant egress savings" }, // safer than "~90%" unless verified
  ],

  sections: [
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
        "I owned backend delivery end-to-end and partnered directly with the CTO on architecture and decisions. I led implementation details: code standards, system organization, DynamoDB modeling (PK/SK/GSIs), environment strategy, and delivery.",
      callout:
        "Core APIs (profiles, follows, likes, comments, uploads), auth flows, infrastructure patterns, and the analytics/ETL system.",
    },
    {
      id: "solution",
      title: "The Solution",
      highlights: [
        "JavaScript → TypeScript migration with safer patterns",
        "Layered architecture (handlers/controllers → services → repositories)",
        "AWS Cognito auth (signup/confirm/login/logout) + JWT",
        "DynamoDB redesign (models, PK/SK strategy, GSIs)",
        "Dev & Prod environment separation via SAM configuration",
        "Queues + async processing for scalable workflows",
        "CloudWatch logging + improved operational visibility",
        "Consistent token handling and encryption practices",
      ],
    },
    {
      id: "moderation",
      title: "Trust & Safety — Content Moderation",
      description:
        "To protect the platform and its users, I implemented an automated content moderation system using AWS Rekognition.",
      highlights: [
        "Uploads scanned with AWS Rekognition for unsafe content",
        "Flagged content triggers async processing in a separate reporting service",
        "Violations recorded and routed into moderation workflows",
        "Decoupled design keeps the core app responsive under load",
      ],
    },
    {
      id: "etl",
      title: "Analytics & ETL",
      description:
        "I designed and implemented a custom ETL pipeline for user event tracking optimized for low cost and reliability. Glue crawling wasn't stable for the data shape, so I built a controlled hourly ETL job.",
      highlights: [
        "DynamoDB events → S3 Parquet → Athena for SQL analytics",
        "Scheduled pipeline with predictable schemas and output",
        "Built for cost control and low operational overhead",
      ],
    },
    {
      id: "impact",
      title: "Impact",
      highlights: [
        "Production-ready backend foundation for beta + App Store workflows",
        "Safer iteration through dev/prod environment isolation",
        "More reliable, scalable codebase with less duplication",
        "Major infrastructure savings through CDN strategy improvements",
        "Automated moderation pipeline (Rekognition → reporting service) to support safe scaling",
      ],
    },
  ],

  technologies: NEPTUNE_TECHNOLOGIES,

  nextStepsBody:
    "Add architecture diagrams, pipeline visuals, and a short “before vs after” section with measurable improvements (deploy speed, error rate, cost).",

  showCta: true,
};

export const NEPTUNE_COMPANY_CARD: CompanyCardData = {
  alt: NEPTUNE_TITLE,
  imageLogo: neptuneLogo2,
  link: "https://www.theneptuneapp.com/",
};
