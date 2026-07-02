// Comprehensive project data for portfolio
import alfredLogo from "@assets/alfred-logo.png";
import fileslingLogo from "@assets/filesling-logo.png";
import codeIntelLogo from "@assets/code-intel-platform-logo.png";
import neptuneLogo from "@assets/neptune-logo.svg";
import enviaLogo from "@assets/envia-logo.jpeg";
import raxLogo from "@assets/rax-logo-2020.svg";
import mdsLogo from "@assets/mds.png";
import { ALFRED_CASE_STUDY_PATH } from "./alfred";
import { FILESLING_CASE_STUDY_PATH } from "./filesling";
import { CODE_INTELLIGENCE_CASE_STUDY_PATH } from "./codeIntelligence";
import { NEPTUNE_CASE_STUDY_PATH } from "./neptune";
import { ENVIA_CASE_STUDY_PATH } from "./envia";

export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  role?: string;
  category: "production" | "opensource" | "client";
  featured: boolean;
  metrics?: string[];
  techStack: string[];
  highlights: string[];
  links?: {
    github?: string;
    live?: string;
    demo?: string;
    docs?: string;
    caseStudy?: string;
  };
  image?: string;
  status?: "active" | "completed" | "in-progress" | "ongoing";
}

export const PROJECTS: Project[] = [
  // TIER 1: FEATURED PROJECTS WITH CASE STUDIES
  {
    id: "alfred-ai-assistant",
    name: "Alfred AI Assistant Platform",
    tagline: "Production-style AI assistant with strict LLM guardrails",
    description:
      "Demonstrates real-world GenAI system design with cost optimization, safety guardrails, and infrastructure-as-code. Features rate limiting, response caching, and deterministic behavior.",
    category: "opensource",
    featured: true,
    status: "ongoing",
    metrics: [
      "$0.50-1.00/month for 1K requests",
      "30-50% cost reduction via caching",
      "50 requests/day/IP limit",
      "Production-ready",
    ],
    techStack: [
      "Python 3.13",
      "AWS",
      "Bedrock",
      "Nova Lite",
      "Lambda",
      "DynamoDB",
      "S3",
      "Terraform",
    ],
    highlights: [
      "LLM guardrails with strict scope control",
      "Agent-centric architecture pattern",
      "Response caching (1-hour TTL)",
      "Rate limiting with DynamoDB TTL",
      "Cost-optimized inference settings",
      "Structured JSON logging with CloudWatch",
    ],
    links: {
      github: "https://github.com/imlocle/alfred-ai-assistant",
      live: "https://imlocle.com",
      caseStudy: ALFRED_CASE_STUDY_PATH,
    },
    image: alfredLogo,
  },
  {
    id: "filesling",
    name: "FileSling",
    tagline: "A file manager for Mac that sends files to connected devices",
    description:
      "Native macOS desktop application for transferring files to SSH servers, Raspberry Pis, Android phones (USB + WiFi), iPhones/iPads, tablets, and VR headsets through a clean drag-and-drop interface. Features rsync delta transfers, auto-reconnect, resilient transfer queue with retry/resume, remote video conversion, and multi-device management. Distributed as a .dmg via GitHub Releases.",
    category: "opensource",
    featured: true,
    status: "ongoing",
    metrics: [
      "Desktop GUI application",
      "SSH/SFTP + rsync + ADB + iOS AFC",
      "DMG distribution via CI/CD",
    ],
    techStack: [
      "Python 3.11+",
      "PySide6",
      "Paramiko (SSH/SFTP)",
      "rsync",
      "ADB",
      "pymobiledevice3",
      "Pydantic",
      "PyInstaller",
    ],
    highlights: [
      "Backend abstraction — new protocols (SMB, WebDAV, S3) can be added without changing UI",
      "rsync fast-path delta transfers for SSH — only sends changed bytes",
      "iPhone/iPad USB support via AFC protocol (no jailbreak needed)",
      "Android USB + WiFi via ADB with wireless pairing (Android 11+)",
      "Remote video conversion — runs ffmpeg on server over SSH",
      "Resilient transfer queue with auto-retry, resume, and crash recovery",
      "Auto-reconnect with latency monitoring and health checks",
    ],
    links: {
      github: "https://github.com/imlocle/filesling",
      caseStudy: FILESLING_CASE_STUDY_PATH,
    },
    image: fileslingLogo,
  },
  {
    id: "code-intelligence-platform",
    name: "Code Intelligence Platform",
    tagline: "RAG-based code analysis CLI tool",
    description:
      "Python CLI for analyzing codebases using Retrieval-Augmented Generation with OpenAI. Implements RAG pipeline with embeddings, vector search, and LLM queries.",
    category: "opensource",
    featured: true,
    status: "completed",
    metrics: [
      "RAG implementation",
      "CLI tool",
      "OpenAI integration",
      "Unit tested",
    ],
    techStack: [
      "Python 3.13",
      "OpenAI API",
      "GPT-4o-mini",
      "Click",
      "Pydantic",
      "NumPy",
      "pytest",
    ],
    highlights: [
      "Scans Python codebases and generates embeddings",
      "RAG pipeline for code analysis",
      "Cosine similarity for retrieval",
      "Progress bars and structured output",
      "Comprehensive CLI documentation",
      "Unit tests with mocking",
    ],
    links: {
      github: "https://github.com/imlocle/code-intelligence-platform",
      caseStudy: CODE_INTELLIGENCE_CASE_STUDY_PATH,
    },
    image: codeIntelLogo,
  },
  // {
  //   id: "self-growth-backend",
  //   name: "Self-Growth Backend",
  //   tagline:
  //     "Production-ready serverless backend for personal development tracking",
  //   description:
  //     "Personal open-source project: comprehensive SaaS backend supporting habits, todos, blog posts, and multi-user households with analytics. Built with 37 Lambda functions, single-table DynamoDB design, and complete API documentation. Frontend still in development.",
  //   category: "opensource",
  //   featured: true,
  //   status: "ongoing",
  //   metrics: [
  //     "37 Lambda functions",
  //     "Multi-user households",
  //     "Production-ready",
  //     "Comprehensive docs",
  //   ],
  //   techStack: [
  //     "Python 3.13",
  //     "AWS Lambda",
  //     "API Gateway",
  //     "DynamoDB",
  //     "Cognito",
  //     "Terraform",
  //     "CloudWatch",
  //   ],
  //   highlights: [
  //     "Layered architecture (Handler → Controller → Service → Repository)",
  //     "Single-table DynamoDB design with GSIs",
  //     "JWT authentication with Cognito",
  //     "Rate limiting and input sanitization",
  //     "Habit analytics with streaks and completion rates",
  //     "Comprehensive API documentation and integration guides",
  //   ],
  //   links: {
  //     github: "https://github.com/imlocle/self-growth-backend",
  //     docs: "https://github.com/imlocle/self-growth-backend#readme",
  //   },
  // },
  {
    id: "envia",
    name: "Envia",
    tagline: "Serverless microservices for family communication platform",
    description:
      "Restructured and built core backend services across 7 microservices for a family communication platform. Designed notification scheduling with AI nudges, media processing infrastructure, multi-provider OAuth management, and invitation delivery systems.",
    role: "Lead Software Engineer",
    category: "production",
    featured: true,
    status: "completed",
    metrics: [
      "7 microservices",
      "80+ Lambda functions",
      "Event-driven architecture",
      "AI-powered notifications",
    ],
    techStack: [
      "Python 3.13",
      "TypeScript",
      "Node.js",
      "AWS Lambda",
      "DynamoDB",
      "MariaDB",
      "SQS FIFO",
      "Step Functions",
      "CloudFront",
      "Terraform",
      "Bedrock",
    ],
    highlights: [
      "Restructured 5 legacy services into clean layered architectures",
      "Designed Notification Scheduler Sender from scratch (15 notification types, AI nudges)",
      "Built media processing with S3 + CloudFront CDN",
      "Implemented event-driven communication with SQS FIFO across all services",
      "Multi-provider OAuth (Gmail, Microsoft, Auth0, Apple) with auto-refresh",
      "Invitation delivery via Step Functions orchestration",
    ],
    links: {
      live: "https://enviatogether.com/",
      caseStudy: ENVIA_CASE_STUDY_PATH,
    },
    image: enviaLogo,
  },
  {
    id: "neptune-app",
    name: "Neptune App",
    tagline: "Serverless backend for social video platform",
    description:
      "Cloud-native SaaS platform supporting 10K+ iOS users with scalable APIs, real-time data, and analytics. Event-driven architecture with content moderation, social features, ETL pipelines (Jupiter), and AI chatbot integration (Moody). Backend completed January 2026 with app live on iOS.",
    role: "Founding Engineer (Lead)",
    category: "production",
    featured: true,
    status: "completed",
    metrics: [
      "10K+ active users",
      "Event-driven architecture",
      "Analytics ETL pipeline",
      "AI chatbot integration",
    ],
    techStack: [
      "TypeScript",
      "Python 3.13",
      "Node.js",
      "AWS SAM",
      "Lambda",
      "API Gateway",
      "DynamoDB",
      "S3",
      "Rekognition",
      "Cognito",
      "Bedrock",
      "Terraform",
    ],
    highlights: [
      "Designed event-driven architecture for video processing",
      "Built ETL pipeline for analytics data ingestion and Parquet generation",
      "Implemented Moody AI chatbot using AWS Bedrock Nova Lite",
      "AWS Rekognition integration for content moderation",
      "Social features (follow, votes, engagement)",
      "Guided team of 4 engineers",
      "Improved delivery velocity by ~20%",
    ],
    links: {
      caseStudy: NEPTUNE_CASE_STUDY_PATH,
    },
    image: neptuneLogo,
  },

  // TIER 3: CLIENT WORK (from previous consulting experience)
  {
    id: "rackspace-ai-assistant",
    name: "AI Assistant (Client Project at Rackspace)",
    tagline: "Enterprise AI assistant with 40% response time reduction",
    description:
      "Client project developed while working at Rackspace Technology. Built production AI chatbot using AWS Bedrock and prompt engineering. Achieved significant performance improvements and cost optimization.",
    role: "Software Engineer (Cloud & Backend Systems)",
    category: "client",
    featured: false,
    status: "completed",
    metrics: [
      "40% response time reduction",
      "Enterprise scale",
      "AWS Bedrock",
      "Production deployment",
    ],
    techStack: [
      "Python",
      "AWS Bedrock",
      "Lambda",
      "API Gateway",
      "Prompt Engineering",
    ],
    highlights: [
      "Reduced response time by 40%",
      "Implemented prompt engineering pipelines",
      "Built evaluation frameworks",
      "Production deployment at enterprise scale",
      "Cost optimization strategies",
    ],
    image: raxLogo,
  },
  {
    id: "method-data-science-ml-platform",
    name: "ML Platform (Client Project at Method Data Science)",
    tagline: "ML-based pricing models with 90% accuracy",
    description:
      "Client project developed while working at Method Data Science. Built machine learning pipelines for pricing optimization generating $100K+ revenue. Implemented data pipelines and CRM migration improving productivity by 27%.",
    role: "Software Engineer",
    category: "client",
    featured: false,
    status: "completed",
    metrics: [
      "90% pricing accuracy",
      "$100K+ revenue",
      "27% productivity gain",
      "ML pipelines",
    ],
    techStack: [
      "Python",
      "Machine Learning",
      "Data Pipelines",
      "ETL",
      "CRM Integration",
    ],
    highlights: [
      "ML-based pricing models with 90% accuracy",
      "Data pipelines generating $100K+ revenue",
      "CRM migration improving productivity by 27%",
      "ETL pipeline development",
      "Production ML deployment",
    ],
    image: mdsLogo,
  },
];

// Helper functions
export const getFeaturedProjects = () => PROJECTS.filter(p => p.featured);
export const getProductionProjects = () =>
  PROJECTS.filter(p => p.category === "production");
export const getOpenSourceProjects = () =>
  PROJECTS.filter(p => p.category === "opensource");
export const getClientProjects = () =>
  PROJECTS.filter(p => p.category === "client");
export const getProjectById = (id: string) => PROJECTS.find(p => p.id === id);
