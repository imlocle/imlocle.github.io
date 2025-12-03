import codeQueryLogo from '../assets/code-query-logo.png';
import stockTrackerLogo from '../assets/stock-tracker-logo.png';
import hachikoLogo from '../assets/hachiko_logo.png';
import neptuneLogo from '../assets/neptune-logo.svg';
import neptuneLogo2 from '../assets/neptune-logo2.png';
import llLogo from '../assets/ll-logo.png';
import alfredLogo from '../assets/alfred-logo.png';
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

export const CLIENT_PROJECTS: IMainCard[] = [
  {
    id: 1,
    title: 'Neptune - Be Yourself',
    description:
      'A next-generation video-based social platform empowering artists, entertainers, and creators to share their work authentically. Neptune focuses on high-quality video storytelling with a simple and engaging user experience.',
    outcomes:
      'Architected and deployed a highly scalable AWS backend capable of supporting massive daily video uploads and real-time user activity. Improved system reliability, reduced infrastructure overhead, and enabled Neptune to scale rapidly as user adoption grew.',
    technologies: ['AWS SAM', 'Python', 'TypeScript', 'Node.js', 'Terraform'],
    image: neptuneLogo,
    link: 'https://www.theneptuneapp.com/',
    appStore: 'https://apps.apple.com/us/app/neptune-be-yourself/id6745182224',
  },
  {
    id: 2,
    title: 'Hachiko Sushi House',
    description:
      'A modern, lightweight website for a local sushi restaurant to showcase their menu, hours, and location. Designed for clarity, speed, and mobile usability to help new customers quickly explore the restaurant’s offerings.',
    outcomes:
      'Delivered a fully optimized static site using Cloudflare and GitHub Pages, achieving fast load times and near-zero hosting costs. Enhanced user engagement through clean UI, intuitive navigation, and responsive design tailored for local small business visibility.',
    technologies: ['Cloudflare', 'GitHub Pages', 'React', 'Vite'],
    image: hachikoLogo,
    link: 'https://hachikosushihouse.com/',
  },
];

export const TECHNICAL_PROJECTS: IMainCard[] = [
  {
    id: 1,
    title: 'Alfred - AI Chatbot',
    description:
      'An AI chatbot using AWS Bedrock and Python that answers questions about me.',
    outcomes:
      'Built a fully functional AI chatbot using AWS Bedrock, implementing a custom rate limiter to efficiently handle multiple users and ensure stable performance.',
    technologies: ['AWS Bedrock', 'Lambda', 'Python', 'S3', 'Terraform'],
    image: alfredLogo,
    link: 'https://github.com/imlocle/alfred-chatbot',
  },
  {
    id: 2,
    title: 'Code Query',
    description:
      'A Python CLI tool that uses a Retrieval-Augmented Generation (RAG) pipeline to answer questions about a local codebase. It scans source files, generates embeddings, retrieves relevant code snippets, and uses the OpenAI API to provide accurate, context-aware answers.',
    outcomes:
      'Enhanced developer productivity by enabling fast code discovery and automated explanations, reducing time spent searching through large codebases.',
    technologies: ['Python', 'OpenAI'],
    image: codeQueryLogo,
    link: 'https://github.com/imlocle/code-query',
  },
  {
    id: 3,
    title: 'PiSync: Automated Media Transfer and File Cleanup System',
    description:
      'An automated media-transfer system that monitors a local directory, securely sends files to a Raspberry Pi via SCP, and performs automatic cleanup by moving completed files to Trash. Designed with a layered architecture for reliability and maintainability.',
    outcomes:
      'Delivered a hands-free media management workflow with real-time file monitoring, secure transfers, and automated cleanup—eliminating manual file handling and streamlining home media organization.',
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
    id: 4,
    title: 'Stock Tracker',
    description:
      'A full-stack web application that provides real-time and historical stock market data for 15 companies using the Alpha Vantage API.',
    outcomes:
      'Built a stock tracker web application that offers real-time stock data and historical analysis, enabling users to make informed investment decisions.',
    technologies: [
      'React',
      'Next.js',
      'TypeScript',
      'Node.js',
      'FastAPI',
      'Python',
      'Alpha Vantage API',
    ],
    image: stockTrackerLogo,
    link: 'https://github.com/imlocle/stock-tracker',
  },
  {
    id: 5,
    title: 'Portfolio Website',
    description: 'My personal portfolio website that you are viewing now.',
    outcomes:
      'Built a fully responsive React + Vite site with AI-powered project previews, enabling clients to quickly understand my consulting capabilities.',
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
    title: 'Alfred - AI Chatbot',
    description: 'An AI chatbot using AWS Bedrock and Python.',
    image: alfredLogo,
    link: '/work/technical',
  },
  {
    title: 'Code Query',
    description:
      'This project implements a Python command-line interface (CLI) to answer questions about a local codebase using the OpenAI API.',
    image: codeQueryLogo,
    link: '/work/technical',
  },
  {
    title: 'Neptune - Be Yourself',
    description:
      'A video-based social media platform for artists, entertainers, and dreamers.',
    image: neptuneLogo,
    link: '/work/client',
  },
];

export const COMPANIES_WORKED = [
  {
    alt: 'Method Data Science',
    imageLogo: mdsLogo,
    link: 'https://www.methoddatascience.com/',
  },
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
    alt: 'Wayvia',
    imageLogo: wayviaLogo,
    link: 'https://www.wayvia.com/',
  },
];
