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

// PORTFOLIO PAGE

export const PROJECTS: IMainCard[] = [
  {
    id: 1,
    title: 'Neptune - Be Yourself',
    description:
      'A video-based social media platform for artists, entertainers, and dreamers.',
    outcomes:
      'Designed and deployed a scalable AWS backend capable of handling millions of video uploads daily, improving system reliability and performance.',
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
      'An AI chatbot using AWS Bedrock and Python that answers questions about me.',
    outcomes:
      'Built a fully functional AI chatbot using AWS Bedrock, implementing a custom rate limiter to efficiently handle multiple users and ensure stable performance.',
    technologies: ['AWS Bedrock', 'Lambda', 'Python', 'S3', 'Terraform'],
    image: alfredLogo,
    link: 'https://github.com/imlocle/alfred-chatbot',
  },
  {
    id: 4,
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
    title: 'Neptune - Be Yourself',
    description:
      'A video-based social media platform for artists, entertainers, and dreamers.',
    image: neptuneLogo,
    link: '/portfolio',
  },
  {
    title: 'PiSync: Automated Media Transfer and File Cleanup System',
    description: 'Automation tool that continuously monitors a local directory and transfers Movies and TV Shows to a Raspberry Pi 4 over SSH (SCP).',
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
