import codeQueryLogo from "../assets/code-query-logo.png";
import stockTrackerLogo from "../assets/stock-tracker-logo.png";
import hachikoLogo from "../assets/hachiko_logo.png";
import neptuneLogo from "../assets/neptune-logo.svg";
import neptuneLogo2 from "../assets/neptune-logo2.png";
import llLogo from "../assets/ll-logo.png";
import alfredLogo from "../assets/alfred-logo.png";
import raxLogo from "../assets/rax-logo-2020.svg";
import mdsLogo from "../assets/mds.png";
import wayviaLogo from "../assets/wayvia-logo.svg";
import pisyncLogo from "../assets/pisync_logo.png";
import type { IMainCard, IPreviewCard } from "../models/interfaces";

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

// ABOUT PAGE

export const SKILLS = [
  {
    title: "Languages",
    skills: ["Python", "TypeScript", "JavaScript", "C#"],
  },
  {
    title: "AI & Machine Learning",
    skills: ["AWS Bedrock", "LLMs", "AI Chatbots", "AI Agents"],
  },
  {
    title: "Infrastructure",
    skills: [
      "AWS Cloudformation",
      "Terraform",
      "Serverless Framework",
      "Serverless Stack",
    ],
  },
  {
    title: "APIs & Frameworks",
    skills: ["AWS API Gateway", "FastAPI", "Flask", ".NET"],
  },
  {
    title: "Databases",
    skills: ["AWS DynamoDB", "MongoDB", "NoSQL", "SQL"],
  },
];

// SERVICES PAGE

export const SERVICES: IMainCard[] = [
  {
    id: 1,
    icon: "🧠",
    title: "AI & Automation Solutions",
    description:
      "Design and integrate intelligent AI-driven features into existing products or build new automation workflows from scratch. Focused on reliable backend orchestration and production readiness.",
    highlights: [
      "LLM integration (OpenAI, Anthropic, Bedrock)",
      "Backend orchestration & async workflows",
      "Prompt design, caching, and rate limiting",
    ],
  },
  {
    id: 2,
    icon: "🚀",
    title: "Backend MVP in Weeks",
    description:
      "Rapidly validate your startup idea with a production-grade backend built for scale. Designed to support real users from day one without overengineering.",
    highlights: [
      "Serverless AWS architecture (Lambda, API Gateway)",
      "Auth, database, and CI/CD setup",
      "Ready for frontend or mobile teams immediately",
    ],
  },
  {
    id: 3,
    icon: "☁️",
    title: "Cloud Architecture & Infrastructure",
    description:
      "Modernize or migrate existing systems to cloud-native and serverless architectures to reduce costs, improve reliability, and simplify operations.",
    highlights: [
      "AWS serverless & infrastructure as code (Terraform)",
      "Performance tuning, logging, and monitoring",
      "Zero-downtime migration strategies",
    ],
  },
  {
    id: 4,
    icon: "🛠️",
    title: "Product Engineering & Development",
    description:
      "End-to-end product engineering for founders and small teams—from idea validation and system design to scalable backend implementation and deployment.",
    highlights: [
      "System architecture & API design",
      "Scalable backend development",
      "Production deployment & handoff",
    ],
  },
  {
    id: 5,
    icon: "🖥️",
    title: "Full-Stack Web Development",
    description:
      "Build fast, modern, and cost-efficient websites and web applications using a lightweight, cloud-native stack—ideal for small businesses and early-stage startups.",
    highlights: [
      "React + Vite frontend development",
      "Static hosting with near-zero monthly costs",
      "Responsive design & SEO-friendly structure",
    ],
  },
  {
    id: 6,
    icon: "📊",
    title: "Data & Analytics Engineering",
    description:
      "Design and implement analytics pipelines that turn raw data into actionable insights for product, business, and operational decision-making.",
    highlights: [
      "ETL pipelines & API-based data ingestion",
      "Analytics-ready backend design",
      "Usage, growth, and performance tracking",
    ],
  },
];

export const CLIENT_PROJECTS: IMainCard[] = [
  {
    id: 1,
    title: "Hachiko Sushi House",
    description:
      "A modern, lightweight website for a local sushi restaurant to showcase their menu, hours, and location. Designed for clarity, speed, and mobile usability to help new customers quickly explore the restaurant's offerings.",
    outcomes:
      "Delivered a fully optimized static site using Cloudflare and GitHub Pages, achieving fast load times and near-zero hosting costs. Enhanced user engagement through clean UI, intuitive navigation, and responsive design tailored for local small business visibility.",
    technologies: ["Cloudflare", "GitHub Pages", "React", "Vite"],
    image: hachikoLogo,
    link: "https://hachikosushihouse.com/",
  },
  {
    id: 2,
    title: "Neptune - Be Yourself",
    description:
      "A next-generation video-based social platform empowering artists, entertainers, and creators to share their work authentically. Neptune focuses on high-quality video storytelling with a simple and engaging user experience.",
    outcomes:
      "Architected and deployed a highly scalable AWS backend capable of supporting massive daily video uploads and real-time user activity. Improved system reliability, reduced infrastructure overhead, and enabled Neptune to scale rapidly as user adoption grew.",
    technologies: ["AWS SAM", "Python", "TypeScript", "Node.js", "Terraform"],
    image: neptuneLogo,
    link: "https://www.theneptuneapp.com/",
    appStore: "https://apps.apple.com/us/app/neptune-be-yourself/id6745182224",
  },
];

export const TECHNICAL_PROJECTS: IMainCard[] = [
  {
    id: 1,
    title: "Alfred - AI Chatbot",
    description:
      "An AI chatbot using AWS Bedrock and Python that answers questions about me.",
    outcomes:
      "Built a fully functional AI chatbot using AWS Bedrock, implementing a custom rate limiter to efficiently handle multiple users and ensure stable performance.",
    technologies: ["AWS Bedrock", "Lambda", "Python", "S3", "Terraform"],
    image: alfredLogo,
    link: "https://github.com/imlocle/alfred-chatbot",
  },
  {
    id: 2,
    title: "Code Query",
    description:
      "A Python CLI tool that uses a Retrieval-Augmented Generation (RAG) pipeline to answer questions about a local codebase. It scans source files, generates embeddings, retrieves relevant code snippets, and uses the OpenAI API to provide accurate, context-aware answers.",
    outcomes:
      "Enhanced developer productivity by enabling fast code discovery and automated explanations, reducing time spent searching through large codebases.",
    technologies: ["Python", "OpenAI"],
    image: codeQueryLogo,
    link: "https://github.com/imlocle/code-query",
  },
  {
    id: 3,
    title: "PiSync: Automated Media Transfer and File Cleanup System",
    description:
      "An automated media-transfer system that monitors a local directory, securely sends files to a Raspberry Pi via SCP, and performs automatic cleanup by moving completed files to Trash. Designed with a layered architecture for reliability and maintainability.",
    outcomes:
      "Delivered a hands-free media management workflow with real-time file monitoring, secure transfers, and automated cleanup—eliminating manual file handling and streamlining home media organization.",
    technologies: [
      "Python",
      "Watchdog",
      "SCP/SSH",
      "Send2Trash",
      "Raspberry Pi",
      "macOS",
      "Automation",
    ],
    image: pisyncLogo,
    link: "https://github.com/imlocle/pisync",
  },
  {
    id: 4,
    title: "Stock Tracker",
    description:
      "A full-stack web application that provides real-time and historical stock market data for 15 companies using the Alpha Vantage API.",
    outcomes:
      "Built a stock tracker web application that offers real-time stock data and historical analysis, enabling users to make informed investment decisions.",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "FastAPI",
      "Python",
      "Alpha Vantage API",
    ],
    image: stockTrackerLogo,
    link: "https://github.com/imlocle/stock-tracker",
  },
  {
    id: 5,
    title: "Portfolio Website",
    description:
      "My professional site showcasing consulting expertise in backend cloud engineering & AI, project case-studies, and service-offerings for startups and creators.",
    outcomes:
      "Built a fully responsive React + Vite application with AI-powered project previews, service-to-lead conversion elements, and a deployable cloud infrastructure; improved lead engagement by providing a seamless experience connecting visitors to consulting services and bookings.",
    technologies: ["React", "TypeScript", "Node.js", "Vite", "GenAI", "TRAE"],
    image: llLogo,
    link: "https://github.com/imlocle/imlocle.github.io",
  },
];

// HOME PAGE

export const PREVIEW_SERVICES: IPreviewCard[] = [
  {
    icon: "🧠",
    title: "AI & Automation",
    description:
      "Production-ready AI features and automation built on scalable backend systems.",
    link: "/services#ai-automation",
  },
  {
    icon: "🚀",
    title: "Backend MVP",
    description: "Launch-ready AWS backends designed to scale from day one.",
    link: "/services#backend-mvp",
  },
  {
    icon: "☁️",
    title: "Cloud Architecture",
    description:
      "Modern serverless infrastructure that reduces cost and complexity.",
    link: "/services#cloud-architecture",
  },
];

export const PREVIEW_PROJECTS: IPreviewCard[] = [
  {
    title: "Alfred - AI Chatbot",
    description: "An AI chatbot using AWS Bedrock and Python.",
    image: alfredLogo,
    link: "/work/technical",
  },
  {
    title: "Code Query",
    description:
      "A Python CLI tool that uses a Retrieval-Augmented Generation (RAG) pipeline to answer questions about a local codebase using the OpenAI API.",
    image: codeQueryLogo,
    link: "/work/technical",
  },
  {
    title: "Neptune - Be Yourself",
    description:
      "A video-based social media platform for artists, entertainers, and dreamers.",
    image: neptuneLogo,
    link: "/work/client",
  },
];

export const COMPANIES_WORKED = [
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
