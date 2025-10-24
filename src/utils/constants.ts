import neptuneLogo from '../assets/neptune-logo.svg';
import neptuneLogo2 from '../assets/neptune-logo2.png';
import llLogo from '../assets/ll-logo.png';
import alfredLogo from '../assets/alfred-logo.png';
import stockTrackerLogo from '../assets/stock-tracker-logo.png';
import raxLogo from '../assets/rax-logo-2020.svg';
import mdsLogo from '../assets/mds.png';
import wayviaLogo from '../assets/wayvia-logo.svg';
import pisyncLogo from '../assets/pisync_logo.png';
import type { IMainCard, IPreviewCard } from '../models/interfaces';

export const GITHUB_LINK = 'https://github.com/imlocle';
export const LINKEDIN_LINK = 'https://linkedin.com/in/imlocle';
export const WEB3FORMS_API_URL = 'https://api.web3forms.com/submit';
export const CALENDLY_URL = 'https://calendly.com/loc-le/30-min-meeting';
export const NEPTUNE_URL = 'https://www.theneptuneapp.com/';

export const POSITION_TITLE = 'Backend Cloud Engineer';
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
    title: 'Languages',
    skills: ['Python', 'TypeScript', 'JavaScript', 'C#'],
  },
  {
    title: 'AI & Machine Learning',
    skills: ['AWS Bedrock', 'LLMs', 'AI Chatbots', 'AI Agents'],
  },
  {
    title: 'Infrastructure',
    skills: [
      'AWS Cloudformation',
      'Terraform',
      'Serverless Framework',
      'Serverless Stack',
    ],
  },
  {
    title: 'APIs & Frameworks',
    skills: ['AWS API Gateway', 'FastAPI', 'Flask', '.NET'],
  },
  {
    title: 'Databases',
    skills: ['AWS DynamoDB', 'MongoDB', 'NoSQL', 'SQL'],
  },
];

// SERVICES PAGE

export const SERVICES: IMainCard[] = [
  {
    id: 1,
    icon: '🧠',
    title: 'AI Product Integration',
    description: `Integrate powerful AI models into your existing product or build new intelligent features from scratch. I specialize in backend orchestration for AI services like OpenAI, Anthropic, and custom ML models.`,
    highlights: [
      'API design & integration',
      'Model orchestration with LangChain / serverless functions',
      'Secure prompt handling & caching',
    ],
  },
  {
    id: 2,
    icon: '🚀',
    title: 'Backend MVP in Weeks',
    description: `Need to validate your startup fast? I build production-grade AWS backend systems that are scalable, serverless, and cost-efficient — ready for launch in just a few weeks.`,
    highlights: [
      'Serverless AWS architecture',
      'Auth, database, and CI/CD setup',
      'Ready for your frontend team immediately',
    ],
  },
  {
    id: 3,
    icon: '☁️',
    title: 'Cloud Modernization',
    description: `Migrate or refactor existing infrastructure to modern serverless solutions. Reduce costs, improve reliability, and simplify maintenance without interrupting your existing operations.`,
    highlights: [
      'Lift-and-shift to AWS Lambda / API Gateway',
      'Performance tuning and monitoring',
      'Gradual migration strategy to avoid downtime',
    ],
  },
];

// PORTFOLIO PAGE

export const PROJECTS: IMainCard[] = [
  {
    id: 1,
    title: 'Neptune - Be Yourself',
    description:
      'A creator-first social media platform offering customizable feeds, ghost metrics (hidden likes/followers), and monetization tools to empower emerging artists and entertainers.',
    outcomes:
      'Engineered a robust AWS-based backend infrastructure capable of ingesting and processing millions of video uploads per day; enabled creator monetization workflows and custom feed logic, increasing system throughput and reliability by X% while supporting creator-centric controls over visibility and algorithmic routing.',
    technologies: ['AWS SAM', 'Python', 'TypeScript', 'Node.js', 'Terraform'],
    image: neptuneLogo,
    link: NEPTUNE_URL,
    appStore: 'https://apps.apple.com/us/app/neptune-be-yourself/id6745182224',
  },
  {
    id: 2,
    title: 'PiSync: Automated Media Transfer and File Cleanup System',
    description:
      'Automation tool that continuously monitors a local directory and transfers Movies and TV Shows to a Raspberry Pi 4 over SSH (SCP). After successful transfers, files are automatically moved to the Trash for seamless cleanup.',
    outcomes:
      'Developed a reliable file synchronization and cleanup system with a layered architecture using watchdog for real-time monitoring, subprocess for secure SCP transfers, and send2trash for safe file removal. Designed to streamline home media management with minimal manual intervention.',
    technologies: [
      'Python',
      'Watchdog',
      'SCP/SSH',
      'Send2Trash',
      'Raspberry Pi',
      'macOS',
      'Automation',
    ],
    image: pisyncLogo,
    link: 'https://github.com/imlocle/pisync',
  },
  {
    id: 3,
    title: 'Alfred - AI Chatbot',
    description:
      'A conversational AI assistant built with AWS Bedrock and Python to handle inquiries about me and my consulting services, automatically guiding users from curiosity to booking a call.',
    outcomes:
      'Deployed a serverless architecture featuring AWS Lambda, S3, Bedrock, and a custom rate-limiter to support multiple concurrent users; integrated natural-language intent detection that triggers booking flows, streamlining client outreach and automating initial conversations for consultancy engagements.',
    technologies: ['AWS Bedrock', 'Lambda', 'Python', 'S3', 'Terraform'],
    image: alfredLogo,
    link: 'https://github.com/imlocle/alfred-chatbot',
  },
  {
    id: 4,
    title: 'Stock Tracker',
    description:
      'Stock Tracker is a full-stack web application that provides real-time and historical stock market data powered by the Alpha Vantage API. Built with a FastAPI backend and a Next.js (React) frontend, it delivers a modern, responsive user experience with an emphasis on performance, scalability, and clean data visualization.',
    outcomes:
      'Developed a performant, cloud-ready stock analysis platform capable of fetching and caching live financial data. Implemented pagination, historical trend charting, and responsive UI design for accessibility across devices. Strengthened API design and data handling using FastAPI and async Python patterns, achieving efficient real-time data rendering in the frontend.',
    technologies: [
      'React',
      'Next.js',
      'Node.js',
      'Python',
      'FastAPI',
      'Alpha Vantage API',
      'Uvicorn',
    ],
    image: stockTrackerLogo,
    link: 'https://github.com/imlocle/stock-tracker',
  },
  {
    id: 5,
    title: 'Portfolio Website',
    description:
      'My professional site showcasing consulting expertise in backend cloud engineering & AI, project case-studies, and service-offerings for startups and creators.',
    outcomes:
      'Built a fully responsive React + Vite application with AI-powered project previews, service-to-lead conversion elements, and a deployable cloud infrastructure; improved lead engagement by providing a seamless experience connecting visitors to consulting services and bookings.',
    technologies: ['React', 'TypeScript', 'Node.js', 'Vite', 'GenAI', 'TRAE'],
    image: llLogo,
    link: 'https://github.com/imlocle/imlocle.github.io',
  },
];

// HOME PAGE

export const SERVICES_SECTION: IPreviewCard[] = [
  {
    icon: '🧠',
    title: 'AI Product Integration',
    description: 'I build scalable AI-powered backend systems for startups.',
    link: '/services#ai-product-integration',
  },
  {
    icon: '🚀',
    title: 'Backend MVP in Weeks',
    description:
      'Fast, production-ready AWS backend architecture for startups. Serverless, scalable, and cost-efficient.',
    link: '/services#backend-mvp-in-2-weeks',
  },
  {
    icon: '☁️',
    title: 'Cloud Modernization',
    description:
      'Refactor or migrate existing infrastructure to modern serverless solutions for better performance and lower costs.',
    link: '/services#cloud-modernization',
  },
];

export const PROJECTS_SECTION: IPreviewCard[] = [
  {
    title: 'Neptune - Be Yourself',
    description:
      'A video-based social media platform for artists, entertainers, and dreamers.',
    image: neptuneLogo,
    link: '/portfolio',
  },
  {
    title: 'PiSync: Automated Media Transfer and File Cleanup System',
    description:
      'Automation tool that continuously monitors a local directory and transfers Movies and TV Shows to a Raspberry Pi 4 over SSH (SCP).',
    image: pisyncLogo,
    link: '/portfolio',
  },
  {
    title: 'Alfred - AI Chatbot',
    description: 'An AI chatbot using AWS Bedrock and Python.',
    image: alfredLogo,
    link: '/portfolio',
  },
];

export const COMPANIES_WORKED = [
  {
    alt: 'The Neptune App',
    imageLogo: neptuneLogo2,
    link: NEPTUNE_URL,
  },
  {
    alt: 'Rackspace Technology',
    imageLogo: raxLogo,
    link: 'https://www.rackspace.com/',
  },
  {
    alt: 'Method Data Science',
    imageLogo: mdsLogo,
    link: 'https://www.methoddatascience.com/',
  },
  {
    alt: 'Wayvia',
    imageLogo: wayviaLogo,
    link: 'https://www.wayvia.com/',
  },
];
