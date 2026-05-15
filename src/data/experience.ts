// Professional experience timeline
import enviaLogo from "@assets/envia-logo.jpeg";
import neptuneLogo from "@assets/neptune-logo.svg";
import raxLogo from "@assets/rax-logo-2020.svg";
import mdsLogo from "@assets/mds.png";
import wayvia from "@assets/wayvia-logo.svg";
import exsilioLogo from "@assets/exsilio-logo.jpeg";

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  techStack: string[];
  logo?: string;
}

export const EXPERIENCE: Experience[] = [
  {
    id: "envia",
    company: "Envia",
    role: "Senior Software Engineer (Backend Lead)",
    period: "Feb 2026 - May 2026",
    location: "Remote",
    description:
      "Restructured and built core backend services for a family communication platform across 7 serverless microservices",
    achievements: [
      "Restructured user-api, Ingest, OAuth Forge, custom authorizer, and invitation processing into clean layered architectures",
      "Designed and implemented Notification Scheduler Sender from scratch (12 Lambda functions, 6 DynamoDB tables, AI nudges)",
      "Built media processing infrastructure with S3, CloudFront CDN, and presigned URL uploads",
      "Established event-driven patterns with SQS FIFO queues across all services",
      "Delivered 80+ Lambda functions across 7 production microservices",
    ],
    techStack: [
      "Python",
      "TypeScript",
      "Node.js",
      "Lambda",
      "DynamoDB",
      "MariaDB",
      "SQS",
      "Step Functions",
      "Terraform",
    ],
    logo: enviaLogo,
  },
  {
    id: "neptune",
    company: "Neptune App",
    role: "Senior Software Engineer (Backend Lead)",
    period: "Nov 2024 - Jan 2026",
    location: "Remote",
    description:
      "Leading backend development for cloud-native SaaS platform supporting 10K+ iOS users",
    achievements: [
      "Designed event-driven serverless architecture",
      "Implemented analytics pipelines for user engagement tracking",
      "Guided team of 4 engineers",
      "Improved delivery velocity by ~20%",
      "Built scalable APIs with AWS Lambda and API Gateway",
    ],
    techStack: [
      "Python",
      "TypeScript",
      "Node.js",
      "Lambda",
      "API Gateway",
      "DynamoDB",
      "S3",
      "AWS SAM",
      "Terraform",
    ],
    logo: neptuneLogo,
  },
  {
    id: "rackspace",
    company: "Rackspace Technology",
    role: "Software Engineer (Cloud & Backend Systems)",
    period: "Feb 2021 - Nov 2024",
    location: "Remote",
    description: "Built cloud-native backend systems and AI-powered solutions",
    achievements: [
      "Reduced AI chatbot response time by 40% using AWS Bedrock",
      "Built cloud-native ride broker platform saving $1.4M annually",
      "Implemented prompt engineering and evaluation pipelines",
      "Designed serverless APIs with Lambda and API Gateway",
      "Led technical initiatives across multiple teams",
    ],
    techStack: [
      "Python",
      "TypeScript",
      "AWS (CDK, SAM)",
      "AWS Bedrock",
      "RAG",
      "Lambda",
      "API Gateway",
      "DynamoDB",
      "Serverless Framework",
      "React",
    ],
    logo: raxLogo,
  },
  {
    id: "method",
    company: "Method Data Science",
    role: "Software Engineer",
    period: "Mar 2020 - Jan 2021",
    location: "Remote",
    description: "Developed ML pipelines and data infrastructure",
    achievements: [
      "Built ML-based pricing models with 90% accuracy",
      "Developed data pipelines generating $100K+ revenue",
      "Led CRM migration improving productivity by 27%",
      "Implemented ETL pipelines for data processing",
      "Deployed production ML models",
    ],
    techStack: [
      "Python",
      "Machine Learning",
      "Data Pipelines",
      "ETL",
      "SQL",
      "CRM Integration",
    ],
    logo: mdsLogo,
  },
  {
    id: "exsilio",
    company: "Exsilio Solutions",
    role: "Application Developer",
    period: "Apr 2019 - Mar 2020",
    location: "Irvine, CA",
    description: "Built enterprise backend services and integrations",
    achievements: [
      "Developed C#/.NET backend services",
      "Built Skype billing and invoicing systems",
      "Implemented enterprise integrations",
      "Maintained production systems",
    ],
    techStack: [
      "C#",
      ".NET",
      "SQL Server",
      "REST APIs",
      "Enterprise Integration",
    ],
    logo: exsilioLogo,
  },
  {
    id: "wayvia",
    company: "Wayvia (formerly PriceSpider)",
    role: "Software Developer",
    period: "Jan 2017 - Apr 2019",
    location: "Irvine, CA",
    description: "Developed e-commerce monitoring and analytics systems",
    achievements: [
      "Resolved 800+ production issues",
      "Reduced error rates by 25%",
      "Built e-commerce monitoring systems",
      "Implemented data collection pipelines",
      "Maintained high-traffic production systems",
    ],
    techStack: [
      "C#",
      ".NET",
      "JavaScript",
      "Node.js",
      "Python",
      "SQL",
      "Web Scraping",
      "Data Processing",
    ],
    logo: wayvia,
  },
];

export const SKILLS = {
  languages: {
    expert: ["Python", "TypeScript"],
    proficient: ["JavaScript", "C#"],
    familiar: ["Ruby", "SQL"],
  },
  backend: {
    frameworks: ["FastAPI", "Flask", "Django", "Express", "ASP.NET"],
    patterns: ["REST APIs", "Event-Driven", "Microservices", "DDD"],
    tools: ["Distributed Systems", "Message Queues", "Caching"],
  },
  cloud: {
    aws: [
      "Lambda",
      "API Gateway",
      "DynamoDB",
      "S3",
      "CloudWatch",
      "Bedrock",
      "Cognito",
    ],
    iac: ["Terraform", "AWS CDK", "AWS SAM"],
    serverless: ["Lambda", "API Gateway", "Step Functions"],
    monitoring: ["CloudWatch", "Structured Logging", "Alarms"],
  },
  ai: {
    llms: ["AWS Bedrock", "OpenAI", "Anthropic"],
    rag: ["Vector Search", "Embeddings", "Prompt Engineering"],
    data: ["SQL", "NoSQL", "Pipelines", "ETL"],
  },
};

export const EDUCATION = {
  degree: "Bachelor of Arts, History",
  school: "University of California, Santa Cruz",
  year: "2012",
};

export const LANGUAGES = [
  { language: "English", proficiency: "Native" },
  { language: "Vietnamese", proficiency: "Fluent" },
  { language: "Japanese", proficiency: "Conversational" },
];
