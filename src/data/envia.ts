import type { CaseStudyConfig } from "@models/caseStudy";
import type {
  MainCardData,
  PreviewCardData,
  CompanyCardData,
} from "@models/card";
import enviaLogo from "@assets/envia-logo.jpeg";

export const ENVIA_TITLE = "Envia — Family Communication Platform";
export const ENVIA_CASE_STUDY_PATH = "/work/case-study/envia";

export const ENVIA_TECHNOLOGIES = [
  "Python 3.13",
  "TypeScript",
  "Node.js 20.x",
  "AWS Lambda",
  "API Gateway",
  "DynamoDB",
  "MariaDB (RDS)",
  "S3",
  "CloudFront",
  "SQS FIFO",
  "Step Functions",
  "EventBridge",
  "SES",
  "Firebase Cloud Messaging",
  "Amazon Bedrock",
  "Auth0",
  "Terraform",
  "SQLAlchemy",
];

export const ENVIA_MAIN_CARD: MainCardData = {
  id: "envia",
  title: ENVIA_TITLE,
  description:
    "Restructured and built core backend services for a family communication platform. Designed notification scheduling, media processing infrastructure, OAuth token management, and invitation delivery systems across 7 microservices.",
  outcomes:
    "Delivered production-ready microservices architecture with event-driven communication, multi-provider OAuth, AI-powered notifications, and CDN-backed media delivery. Restructured legacy services into clean layered architectures.",
  highlights: [
    "Restructured user-api with layered architecture (Handler → Controller → Service → Repository)",
    "Designed and built Notification Scheduler Sender with 12 Lambda functions and 6 DynamoDB tables",
    "Implemented media processing infrastructure with S3, CloudFront CDN, and presigned URL uploads",
    "Built invitation processing system with SQS FIFO, Step Functions, and SES email delivery",
    "Restructured OAuth Forge for multi-provider token management (Gmail, Microsoft, Auth0, Apple)",
    "Redesigned custom authorizer supporting Auth0, Google, and Microsoft JWT validation",
    "Restructured Ingest pipeline with 28 Lambda functions for email/calendar ingestion",
  ],
  technologies: ENVIA_TECHNOLOGIES,
  link: ENVIA_CASE_STUDY_PATH,
  ctaLabel: "View Case Study",
  target: "_self",
};

export const ENVIA_PREVIEW_CARD: PreviewCardData = {
  title: "Envia",
  description:
    "Family communication platform with serverless microservices architecture.",
  link: ENVIA_CASE_STUDY_PATH,
};

export const ENVIA_COMPANY_CARD: CompanyCardData = {
  alt: "Envia",
  imageLogo: enviaLogo,
  link: "https://enviatogether.com/",
};

export const ENVIA_CASE_STUDY_CONFIG: CaseStudyConfig = {
  pageTitle: `${ENVIA_TITLE}: Case Study`,
  pageSubtitle:
    "Restructured and built core backend services for a family communication platform across 7 serverless microservices.",

  heroTopline: "Production System • Lead Software Engineer",
  heroTitle: "Envia — Building a Serverless Microservices Platform",
  heroSubtitle:
    "Restructured legacy services and designed new systems for a family communication platform. Built notification scheduling, media processing, OAuth management, and invitation delivery across 7 microservices using Python, TypeScript, and AWS.",

  stats: [
    { label: "Services", value: "7 microservices" },
    { label: "Architecture", value: "Event-Driven Serverless" },
    { label: "Lambda Functions", value: "80+ across platform" },
    { label: "Period", value: "Feb 2026 - May 2026" },
  ],

  sections: [
    {
      id: "challenge",
      title: "The Challenge",
      description:
        "Envia needed its backend services restructured for maintainability and scalability, while also requiring new systems for notifications, media handling, and invitation delivery. The existing codebase lacked consistent architecture patterns, making it difficult to extend and debug.",
    },
    {
      id: "role",
      title: "My Role",
      description:
        "As Lead Software Engineer, I restructured existing services (user-api, Ingest, OAuth Forge, custom authorizer, invitation processing) into clean layered architectures, and designed and implemented two new services from scratch (Notification Scheduler Sender and media processing).",
      callout:
        "Full ownership of backend architecture across 7 services — restructuring legacy code and designing new systems.",
    },
    {
      id: "architecture",
      title: "Architecture & Services",
      description:
        "Built a microservices platform with event-driven communication via SQS FIFO queues, shared authentication through custom Lambda authorizers, and infrastructure as code with Terraform.",
      highlights: [
        "User API (Python 3.13): Core REST API with SQLAlchemy, layered architecture, Swagger UI docs, HTTP API v2 for 70% cost savings",
        "Notification Scheduler Sender (Python 3.13): 12 Lambda functions, 6 DynamoDB tables, FCM push delivery, AI-driven nudges via Bedrock, timezone-aware scheduling",
        "Ingest (TypeScript/Node.js): 28 Lambda functions for Gmail and Microsoft 365 email/calendar ingestion, S3 storage, AI context retrieval",
        "OAuth Forge (TypeScript/Node.js): 17 Lambda functions for multi-provider OAuth (Gmail, Microsoft, Auth0, Apple), automatic token refresh via EventBridge",
        "Custom Authorizer (TypeScript/Node.js): JWT validation for Auth0/Google/Microsoft, family context resolution, JWKS caching in Secrets Manager",
        "Invitation Processing (Python 3.13): SQS FIFO → Step Functions → SES email delivery with 6-digit codes and status tracking",
        "Media Processing (Terraform): S3 + CloudFront CDN for avatar storage and delivery, presigned URL uploads, SSM cross-service integration",
      ],
    },
    {
      id: "technical-highlights",
      title: "Technical Highlights",
      highlights: [
        "Designed Notification Scheduler Sender from scratch: 15 notification types, quiet hours, AI nudges with feedback learning, multi-timezone support",
        "Restructured user-api from unstructured handlers into clean Handler → Controller → Service → Repository layers with dependency injection",
        "Built media processing infrastructure: private S3 bucket, CloudFront CDN with OAC, presigned URL upload flow, 21 default avatars",
        "Implemented event-driven communication: SQS FIFO queues connecting user-api, Ingest, calendar-api, and NSS with dead-letter queues",
        "Redesigned OAuth Forge with automatic token refresh (EventBridge every 9 min), redirect URI security validation, and multi-provider support",
        "Built invitation processing with Step Functions orchestration: init → send email → update status, with error handling states",
        "Restructured Ingest pipeline: scheduled ingestion (EventBridge), real-time Google Calendar push notifications, AI-powered context retrieval",
        "Implemented custom authorizer supporting REST v1 and HTTP v2 API Gateway with JWKS caching and family member resolution",
      ],
    },
    {
      id: "challenges",
      title: "Key Challenges & Solutions",
      description:
        "Restructuring a live platform while building new features required careful planning and incremental delivery.",
      highlights: [
        "Challenge: Legacy code without consistent patterns → Solution: Introduced layered architecture across all Python services with clear separation of concerns",
        "Challenge: Multi-provider authentication complexity → Solution: Custom authorizer with JWKS caching, provider detection from JWT issuer, and fallback resolution",
        "Challenge: Notification delivery at scale with user preferences → Solution: DynamoDB with TTL auto-cleanup, quiet hours enforcement, and timezone-aware scheduling",
        "Challenge: Cross-service communication without tight coupling → Solution: SQS FIFO queues with dead-letter queues and SSM Parameter Store for service discovery",
        "Challenge: Media delivery performance → Solution: CloudFront CDN with Origin Access Control, presigned URLs for direct S3 uploads from frontend",
        "Challenge: OAuth token expiration across 4 providers → Solution: EventBridge-scheduled token refresh with SQS-decoupled processing pipeline",
      ],
    },
    {
      id: "impact",
      title: "Impact & Results",
      highlights: [
        "Delivered 7 production-ready microservices with consistent architecture patterns",
        "Designed notification system handling 15 notification types with AI-powered nudges",
        "Restructured legacy services into maintainable, testable codebases",
        "Built media infrastructure serving assets via CloudFront CDN",
        "Established event-driven patterns enabling independent service scaling",
        "Implemented comprehensive Terraform IaC across all services for reproducible deployments",
        "Created documentation and architecture guides for each service",
      ],
    },
  ],

  technologies: ENVIA_TECHNOLOGIES,

  projectLinks: {
    live: "https://enviatogether.com/",
  },

  nextStepsBody:
    "Continue scaling the platform with content moderation for uploaded media, advanced AI features for smart scheduling, and expanding notification channels beyond push.",

  showCta: true,
};
