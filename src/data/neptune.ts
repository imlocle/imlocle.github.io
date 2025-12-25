import type { CaseStudyConfig } from "@models/caseStudy";
import neptuneLogo from "@assets/neptune-logo.svg";
import neptuneLogo2 from "@assets/neptune-logo2.png";
import type {
  CompanyCardData,
  MainCardData,
  PreviewCardData,
} from "@models/card";

export const NEPTUNE_URL = "https://www.theneptuneapp.com/";
export const NEPTUNE_TITLE = "Neptune - Video Social Platform";
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
    "Built and deployed a scalable AWS backend for a video-first social product (uploads, user activity, and core platform APIs) designed to support growth without constant firefighting.",
  outcomes:
    "Delivered a production-ready backend foundation that can handle high-volume uploads and real usage, with a system designed for reliability, scaling, and rapid iteration.",
  technologies: NEPTUNE_TECHNOLOGIES,
  image: neptuneLogo,
  link: "/work/client/neptune",
  ctaLabel: "View Case Study",
  appStore: "https://apps.apple.com/us/app/neptune-be-yourself/id6745182224",
  target: "_self",
};

export const NEPTUNE_PREVIEW_CARD: PreviewCardData = {
  title: NEPTUNE_TITLE,
  description: "Scalable AWS backend for a video-first platform.",
  image: neptuneLogo,
  link: "/work/client/neptune",
};

export const NEPTUNE_CASE_STUDY_CONFIG: CaseStudyConfig = {
  pageTitle: "Neptune Case Study",

  heroTopline: "Client Project • Backend Rebuild",
  heroTitle: "Neptune — Scalable Backend Rebuild",
  heroSubtitle:
    "A complete backend overhaul for a video-first social platform preparing for public launch—TypeScript migration, Cognito auth, DynamoDB modeling, and a cost-optimized analytics pipeline.",

  stats: [
    { label: "Delivery", value: "Production-ready foundation" },
    { label: "Auth", value: "Cognito + JWT flows" },
    { label: "Analytics", value: "DDB → Parquet → Athena" },
    { label: "Cost", value: "~90% egress reduction" },
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
      title: "Trust & Safety — Content Moderation",
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
  ],

  technologies: NEPTUNE_TECHNOLOGIES,

  nextStepsBody:
    "Add architecture diagrams, pipeline screenshots, and a short “before vs after” section with measurable reliability/cost improvements.",

  showCta: true,
};

export const NEPTUNE_COMPANY_CARD: CompanyCardData = {
  alt: NEPTUNE_TITLE,
  imageLogo: neptuneLogo2,
  link: NEPTUNE_URL,
};
