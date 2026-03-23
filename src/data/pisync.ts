import type { CaseStudyConfig } from "@models/caseStudy";
import type { PreviewCardData } from "@models/card";

export const PISYNC_TITLE = "PiSync — Media Transfer System";
export const PISYNC_CASE_STUDY_PATH = "/work/technical/pisync";

export const PISYNC_TECHNOLOGIES = [
  "Python 3.9+",
  "PySide6",
  "Paramiko",
  "SSH/SFTP",
  "Watchdog",
  "Pydantic",
  "PyInstaller",
  "Clean Architecture",
  "Protocol-Based Design",
];

export const PISYNC_PREVIEW_CARD: PreviewCardData = {
  title: PISYNC_TITLE,
  description:
    "Desktop app for automated media transfers from macOS to Raspberry Pi with modern UI and real-time monitoring.",
  link: PISYNC_CASE_STUDY_PATH,
};

export const PISYNC_CASE_STUDY_CONFIG: CaseStudyConfig = {
  pageTitle: `${PISYNC_TITLE}: Case Study`,
  pageSubtitle: "Desktop application with modern UI for automated media transfers to Raspberry Pi using clean architecture and protocol-based design.",

  heroTopline: "Open Source Project • Desktop Application",
  heroTitle: "PiSync — Building a Modern Desktop Media Transfer System",
  heroSubtitle:
    "Designed and built a macOS desktop application with PySide6 for automated media transfers to Raspberry Pi. Features automatic file monitoring, dual-pane explorers, drag-and-drop support, and a polished dark theme UI with 500+ lines of custom styling.",

  stats: [
    { label: "Framework", value: "PySide6 (Qt)" },
    { label: "Architecture", value: "Layered + Protocol-Based" },
    { label: "Key Features", value: "File Monitoring + SFTP Transfer" },
    { label: "Status", value: "Actively Maintained" },
  ],

  sections: [
    {
      id: "problem",
      title: "The Problem",
      description:
        "Transferring media files from a macOS machine to a Raspberry Pi was tedious and error-prone. I needed a seamless, user-friendly desktop application that could monitor directories for new files and automatically transfer them over SSH, handling connection issues gracefully.",
    },
    {
      id: "goal",
      title: "The Goal",
      description:
        "Build a production-quality desktop application that simplifies media transfer workflows with a modern UI, automatic file monitoring, and robust error handling. Demonstrate clean architecture principles and protocol-based design for testability.",
    },
    {
      id: "ownership",
      title: "My Role",
      description:
        "I owned the entire project end-to-end: architecture design, UI/UX implementation, backend logic, testing, and deployment via PyInstaller.",
      callout:
        "Full ownership across UI design, file system integration, SSH/SFTP handling, application packaging, and documentation.",
    },
    {
      id: "architecture",
      title: "Architecture",
      description:
        "PiSync follows a clean, layered architecture with protocol-based design for maximum testability and maintainability.",
      highlights: [
        "Presentation Layer: PySide6 UI with real-time progress updates and responsive controls",
        "Application Layer: Business logic orchestration with protocol-based services",
        "Domain Layer: Core models and entities (FileTransfer, ConnectionSettings, etc.)",
        "Infrastructure Layer: SSH/SFTP implementation, file system watching, settings persistence",
        "Protocol-based design allows easy mocking and testing without external dependencies",
        "Single-responsibility principle keeps each component focused and reusable",
      ],
    },
    {
      id: "features",
      title: "Key Features",
      description:
        "Built with both developer experience and user experience in mind.",
      highlights: [
        "Automatic File Monitoring: Watchdog-based filesystem monitoring with stability checking (prevents partial file transfers)",
        "Dual-Pane Explorer: Browser for local files and browse remote Raspberry Pi filesystem",
        "Drag & Drop Transfer: Intuitive file selection and transfer initiation",
        "Dark Theme UI: Professional 500+ line custom stylesheet with smooth animations",
        "Real-Time Activity Log: Live transfer progress, connection status, and error notifications",
        "SSH Key Authentication: Secure passwordless connections with key management",
        "Settings Persistence: Remembers connection details and user preferences across sessions",
        "Auto-Migration: Handles settings format changes gracefully during updates",
      ],
    },
    {
      id: "design-decisions",
      title: "Design Decisions",
      description:
        "Intentional choices that shaped the architecture and user experience.",
      highlights: [
        "Protocol-Based Design: Services implement protocols (interfaces) instead of concrete implementations, enabling easy testing with mock objects",
        "Layered Architecture: Clear separation of concerns makes each layer independently testable and replaceable",
        "Simple State Management: No complex state machine—clean event-driven updates using Qt signals",
        "Configuration-Driven: Connection settings and UI preferences stored cleanly with Pydantic models",
        "PyInstaller Packaging: Distributes as standalone macOS app without requiring Python installation",
        "Watchdog over Polling: Efficient file system monitoring that's responsive and CPU-friendly",
      ],
    },
    {
      id: "challenges",
      title: "Challenges & Solutions",
      description:
        "Real-world problems encountered and how they were solved.",
      highlights: [
        "Challenge: Detecting incomplete file transfers → Solution: Stability checking (file size doesn't change for 1 second before transfer)",
        "Challenge: SSH connection drops during transfer → Solution: Retry logic with exponential backoff and user-friendly error messages",
        "Challenge: macOS code signing for distribution → Solution: PyInstaller configuration with proper signing for trusted app delivery",
        "Challenge: UI responsiveness during large transfers → Solution: Async file operations on separate threads with Qt signal callbacks",
        "Challenge: Managing SSH keys securely → Solution: Keychain integration for secure credential storage (future enhancement)",
      ],
    },
    {
      id: "impact",
      title: "Impact",
      highlights: [
        "Eliminated manual file transfer workflows—now automated with zero user intervention",
        "Demonstrates clean architecture and protocol-based design patterns applicable to larger projects",
        "Serves as foundation for future desktop applications with similar architecture",
        "Open source project helping others with media management workflows",
        "Continuously maintained and improved based on personal usage feedback",
      ],
    },
  ],

  technologies: PISYNC_TECHNOLOGIES,

  projectLinks: {
    github: 'https://github.com/imlocle/pisync',
  },

  nextStepsBody:
    "Planned enhancements include keychain integration for secure SSH key management, support for multiple simultaneous transfers with queue management, plugin system for custom transfer rules, and mobile companion app for remote monitoring.",

  showCta: true,
};
