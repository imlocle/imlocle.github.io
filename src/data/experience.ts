// Professional experience timeline
import neptuneLogo from "@assets/neptune-logo.svg";
import raxLogo from "@assets/rax-logo-2020.svg";
import mdsLogo from "@assets/mds.png";
import wayvia from "@assets/wayvia-logo.svg";

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
    id: "neptune",
    company: "Neptune App",
    role: "Senior Software Engineer (Backend Lead)",
    period: "2024 - 2026",
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
    period: "2021 - 2024",
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
    period: "2020 - 2021",
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
    period: "2019 - 2020",
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
  },
  {
    id: "wayvia",
    company: "Wayvia (formerly PriceSpider)",
    role: "Software Developer",
    period: "2017 - 2019",
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
