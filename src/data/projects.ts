// Comprehensive project data for portfolio

export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  role?: string;
  period?: string;
  category: 'production' | 'opensource' | 'client';
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
  status?: 'active' | 'completed' | 'in-progress';
}

export const PROJECTS: Project[] = [
  // TIER 1: PRODUCTION SYSTEMS
  {
    id: 'self-growth-backend',
    name: 'Self-Growth Backend',
    tagline: 'Production-ready serverless backend for personal development tracking',
    description: 'Comprehensive SaaS backend supporting habits, todos, blog posts, and multi-user households with analytics. Built with 37 Lambda functions, single-table DynamoDB design, and complete API documentation.',
    category: 'production',
    featured: true,
    status: 'completed',
    metrics: [
      '37 Lambda functions',
      'Multi-user households',
      'Production-ready',
      'Comprehensive docs'
    ],
    techStack: [
      'Python 3.13',
      'AWS Lambda',
      'API Gateway',
      'DynamoDB',
      'Cognito',
      'Terraform',
      'CloudWatch'
    ],
    highlights: [
      'Layered architecture (Handler → Controller → Service → Repository)',
      'Single-table DynamoDB design with GSIs',
      'JWT authentication with Cognito',
      'Rate limiting and input sanitization',
      'Habit analytics with streaks and completion rates',
      'Comprehensive API documentation and integration guides'
    ],
    links: {
      github: 'https://github.com/imlocle/self-growth-backend',
      docs: '/Users/locle/Desktop/coding/github/self-growth-backend/docs'
    }
  },
  {
    id: 'alfred-ai-assistant',
    name: 'Alfred AI Assistant Platform',
    tagline: 'Production-style AI assistant with strict LLM guardrails',
    description: 'Demonstrates real-world GenAI system design with cost optimization, safety guardrails, and infrastructure-as-code. Features rate limiting, response caching, and deterministic behavior.',
    category: 'opensource',
    featured: true,
    status: 'completed',
    metrics: [
      '$0.50-1.00/month for 1K requests',
      '30-50% cost reduction via caching',
      '50 requests/day/IP limit',
      'Production-ready'
    ],
    techStack: [
      'Python 3.13',
      'AWS Bedrock',
      'Nova Lite',
      'Lambda',
      'DynamoDB',
      'S3',
      'Terraform'
    ],
    highlights: [
      'LLM guardrails with strict scope control',
      'Agent-centric architecture pattern',
      'Response caching (1-hour TTL)',
      'Rate limiting with DynamoDB TTL',
      'Cost-optimized inference settings',
      'Structured JSON logging with CloudWatch'
    ],
    links: {
      github: 'https://github.com/imlocle/alfred-ai-assistant',
      live: 'https://imlocle.com',
      caseStudy: '/work/technical/alfred'
    },
    image: '/src/assets/alfred-logo.png'
  },
  {
    id: 'neptune-putterapp',
    name: 'Neptune App',
    tagline: 'Serverless backend for social video platform',
    description: 'Cloud-native SaaS platform supporting 10K+ iOS users with scalable APIs, real-time data, and analytics. Event-driven architecture with content moderation and social features.',
    role: 'Senior Backend Lead',
    period: 'Nov 2024 - Present',
    category: 'production',
    featured: true,
    status: 'active',
    metrics: [
      '10K+ active users',
      'Event-driven architecture',
      'Multi-environment deployment',
      'Content moderation'
    ],
    techStack: [
      'TypeScript',
      'Node.js 20.x',
      'AWS SAM',
      'Lambda',
      'API Gateway',
      'DynamoDB',
      'S3',
      'Rekognition',
      'Cognito'
    ],
    highlights: [
      'Designed event-driven architecture for video processing',
      'Implemented analytics pipelines with Jupiter ETL',
      'AWS Rekognition integration for content moderation',
      'Social features (follow, comments, votes, engagement)',
      'Guided team of 4 engineers',
      'Improved delivery velocity by ~20%'
    ],
    links: {
      live: 'https://www.theneptuneapp.com/',
      caseStudy: '/work/client/neptune'
    },
    image: '/src/assets/neptune-logo2.png'
  },

  // TIER 2: OPEN SOURCE / SPECIALIZED
  {
    id: 'pisync',
    name: 'PiSync',
    tagline: 'Automated media transfer system for macOS to Raspberry Pi',
    description: 'Modern desktop application with PySide6 featuring automatic file monitoring, dual-pane explorers, drag & drop support, and real-time activity logging. Clean architecture with protocol-based design.',
    category: 'opensource',
    featured: true,
    status: 'completed',
    metrics: [
      'Desktop GUI application',
      '500+ line dark theme stylesheet',
      'Thread-safe transfers',
      'Clean architecture'
    ],
    techStack: [
      'Python 3.9+',
      'PySide6',
      'Paramiko (SSH/SFTP)',
      'Watchdog',
      'Pydantic',
      'PyInstaller'
    ],
    highlights: [
      'Layered architecture (Presentation → Application → Domain → Infrastructure)',
      'Protocol-based design for testability',
      'Automatic file monitoring with stability checking',
      'Modern dark theme UI with real-time progress',
      'SSH key-based authentication',
      'Settings management with auto-migration'
    ],
    links: {
      github: 'https://github.com/imlocle/pisync'
    },
    image: '/src/assets/pisync_logo.png'
  },
  {
    id: 'code-intelligence-platform',
    name: 'Code Intelligence Platform',
    tagline: 'RAG-based code analysis CLI tool',
    description: 'Python CLI for analyzing codebases using Retrieval-Augmented Generation with OpenAI. Implements RAG pipeline with embeddings, vector search, and LLM queries.',
    category: 'opensource',
    featured: false,
    status: 'completed',
    metrics: [
      'RAG implementation',
      'CLI tool',
      'OpenAI integration',
      'Unit tested'
    ],
    techStack: [
      'Python 3.13',
      'OpenAI API',
      'GPT-4o-mini',
      'Click',
      'Pydantic',
      'NumPy',
      'pytest'
    ],
    highlights: [
      'Scans Python codebases and generates embeddings',
      'RAG pipeline for code analysis',
      'Cosine similarity for retrieval',
      'Progress bars and structured output',
      'Comprehensive CLI documentation',
      'Unit tests with mocking'
    ],
    links: {
      github: 'https://github.com/imlocle/code-intelligence-platform',
      caseStudy: '/work/technical/code-intelligence'
    },
    image: '/src/assets/code-intel-platform-logo.png'
  },
  {
    id: 'jupiter-etl',
    name: 'Jupiter',
    tagline: 'ETL pipeline for Neptune App analytics',
    description: 'Serverless data pipeline for ingesting and analyzing user engagement data. Lambda-based ETL with Parquet file generation and multi-environment deployment.',
    category: 'production',
    featured: false,
    status: 'active',
    metrics: [
      'Serverless ETL',
      'Analytics pipeline',
      'Parquet generation',
      'Multi-environment'
    ],
    techStack: [
      'Python 3.13',
      'AWS Lambda',
      'Terraform',
      'Docker',
      'PyArrow',
      'Jupyter'
    ],
    highlights: [
      'Analytics data ingestion from Neptune App',
      'Parquet file generation for analysis',
      'Lambda-based processing',
      'Infrastructure as Code with Terraform',
      'Docker for Lambda layer builds',
      'Multi-environment deployment (dev/prod)'
    ]
  },
  {
    id: 'moody-chatbot',
    name: 'Moody Chatbot Stack',
    tagline: 'AI chatbot for Neptune App (In Progress)',
    description: 'AWS Bedrock-powered chatbot for Neptune App using Nova Lite. Similar architecture to Alfred with knowledge base injection and LLM integration.',
    category: 'production',
    featured: false,
    status: 'in-progress',
    metrics: [
      'AWS Bedrock',
      'Nova Lite',
      'Serverless',
      'In Progress'
    ],
    techStack: [
      'Python',
      'AWS Bedrock',
      'Nova Lite',
      'Lambda',
      'S3',
      'Terraform'
    ],
    highlights: [
      'Knowledge base injection from S3',
      'LLM integration with AWS Bedrock',
      'Serverless deployment',
      'Similar structure to Alfred AI',
      'Terraform-managed infrastructure'
    ]
  },

  // CLIENT WORK (from previous experience)
  {
    id: 'rackspace-ai-chatbot',
    name: 'Rackspace AI Chatbot',
    tagline: 'Enterprise AI assistant with 40% response time reduction',
    description: 'Built production AI chatbot for Rackspace Technology using AWS Bedrock and prompt engineering. Achieved significant performance improvements and cost optimization.',
    role: 'Software Engineer',
    period: '2021 - 2024',
    category: 'client',
    featured: true,
    status: 'completed',
    metrics: [
      '40% response time reduction',
      'Enterprise scale',
      'AWS Bedrock',
      'Production deployment'
    ],
    techStack: [
      'Python',
      'AWS Bedrock',
      'Lambda',
      'API Gateway',
      'Prompt Engineering'
    ],
    highlights: [
      'Reduced response time by 40%',
      'Implemented prompt engineering pipelines',
      'Built evaluation frameworks',
      'Production deployment at enterprise scale',
      'Cost optimization strategies'
    ],
    image: '/src/assets/rax-logo-2020.svg'
  },
  {
    id: 'method-data-science',
    name: 'Method Data Science ML Platform',
    tagline: 'ML-based pricing models with 90% accuracy',
    description: 'Built machine learning pipelines for pricing optimization generating $100K+ revenue. Implemented data pipelines and CRM migration improving productivity by 27%.',
    role: 'Software Engineer',
    period: '2020 - 2021',
    category: 'client',
    featured: false,
    status: 'completed',
    metrics: [
      '90% pricing accuracy',
      '$100K+ revenue',
      '27% productivity gain',
      'ML pipelines'
    ],
    techStack: [
      'Python',
      'Machine Learning',
      'Data Pipelines',
      'ETL',
      'CRM Integration'
    ],
    highlights: [
      'ML-based pricing models with 90% accuracy',
      'Data pipelines generating $100K+ revenue',
      'CRM migration improving productivity by 27%',
      'ETL pipeline development',
      'Production ML deployment'
    ],
    image: '/src/assets/mds.png'
  }
];

// Helper functions
export const getFeaturedProjects = () => PROJECTS.filter(p => p.featured);
export const getProductionProjects = () => PROJECTS.filter(p => p.category === 'production');
export const getOpenSourceProjects = () => PROJECTS.filter(p => p.category === 'opensource');
export const getClientProjects = () => PROJECTS.filter(p => p.category === 'client');
export const getProjectById = (id: string) => PROJECTS.find(p => p.id === id);
