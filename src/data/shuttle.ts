import type { CaseStudyConfig } from "@models/caseStudy";
import type { PreviewCardData } from "@models/card";

export const SHUTTLE_TITLE = "Shuttle — File Manager for Mac";
export const SHUTTLE_CASE_STUDY_PATH = "/work/case-study/shuttle";

export const SHUTTLE_TECHNOLOGIES = [
  "Python 3.11+",
  "PySide6",
  "Paramiko",
  "SSH/SFTP",
  "ADB",
  "Pydantic",
  "PyInstaller",
  "Clean Architecture",
];

export const SHUTTLE_PREVIEW_CARD: PreviewCardData = {
  title: SHUTTLE_TITLE,
  description:
    "A file manager for Mac that sends files to connected devices — SSH servers, Raspberry Pis, Android phones, tablets, and VR headsets — through a clean drag-and-drop interface.",
  link: SHUTTLE_CASE_STUDY_PATH,
};

export const SHUTTLE_CASE_STUDY_CONFIG: CaseStudyConfig = {
  pageTitle: `${SHUTTLE_TITLE}: Case Study`,
  pageSubtitle:
    "A macOS file manager for sending files to connected devices via SSH, SFTP, and ADB with a polished drag-and-drop interface.",

  heroTopline: "Open Source Project • Desktop Application",
  heroTitle: "Shuttle — A File Manager for Connected Devices",
  heroSubtitle:
    "Designed and built a macOS desktop application with PySide6 for transferring files to SSH servers, Raspberry Pis, Android phones, tablets, and VR headsets. Features a remote file explorer, drag-and-drop uploads, transfer queue with progress tracking, and multi-device management.",

  stats: [
    { label: "Framework", value: "PySide6 (Qt)" },
    { label: "Protocols", value: "SSH/SFTP + ADB" },
    { label: "Key Features", value: "Multi-Device + Transfer Queue" },
    { label: "Status", value: "Actively Maintained" },
  ],

  sections: [
    {
      id: "problem",
      title: "The Problem",
      description:
        "Transferring files from a Mac to connected devices — Raspberry Pis, Android phones, VR headsets — was fragmented across multiple tools. SSH required terminal commands, Android needed MTP (unreliable on macOS) or third-party apps, and there was no unified interface for managing multiple devices.",
    },
    {
      id: "goal",
      title: "The Goal",
      description:
        "Build a native macOS file manager that unifies file transfers to any connected device through a single, polished drag-and-drop interface. Support SSH servers, Android devices via ADB, and provide a transfer queue with real-time progress tracking.",
    },
    {
      id: "ownership",
      title: "My Role",
      description:
        "I owned the entire project end-to-end: architecture design, UI/UX implementation, protocol integrations (SSH/SFTP and ADB), transfer queue system, and distribution via PyInstaller.",
      callout:
        "Full ownership across UI design, multi-protocol file transfer, device management, and application packaging.",
    },
    {
      id: "architecture",
      title: "Architecture",
      description:
        "Shuttle uses a clean architecture with clear separation between the UI layer, transfer logic, and device communication protocols.",
      highlights: [
        "Presentation Layer: PySide6 UI with remote file explorer, drag-and-drop, and transfer queue visualization",
        "Transfer Engine: Queue-based system with speed calculation, ETA, and progress tracking per file",
        "SSH/SFTP Backend: Paramiko-based connections with multi-server management and auto-connect",
        "ADB Backend: Android device support via USB debugging — no MTP required",
        "Configuration: JSON-based device profiles stored at ~/.Shuttle/config.json",
        "Auto-cleanup: Optional move-to-trash after successful upload",
      ],
    },
    {
      id: "features",
      title: "Key Features",
      description:
        "Built for daily use with keyboard-driven workflows and a focus on reliability.",
      highlights: [
        "Remote File Explorer: Browse any SSH server or Android device with full navigation",
        "Drag-and-Drop Upload: Drop files from Finder directly into the remote explorer",
        "Transfer Queue: Queue multiple uploads with per-file speed, ETA, and progress bars",
        "Android USB Support: Connect phones, tablets, and VR headsets via ADB without MTP",
        "Multi-Server Management: Save multiple device profiles with a default for auto-connect",
        "Recursive Search: Search across subdirectories with Enter key",
        "Inline Rename: Slow-click to rename files directly in the explorer",
        "Disk Space Visualization: See how full the remote drive is at a glance",
        "Auto-Cleanup: Move local files to trash after successful upload",
        "Keyboard Shortcuts: ⌘+R (refresh), ⌘+N (new folder), ⌘+F (search), ⌘+Delete (delete)",
      ],
    },
    {
      id: "design-decisions",
      title: "Design Decisions",
      description:
        "Intentional choices that shaped the architecture and user experience.",
      highlights: [
        "ADB over MTP: MTP is unreliable on macOS — ADB provides consistent, fast file access to Android devices",
        "Transfer Queue: Batch operations with progress tracking instead of one-at-a-time blocking transfers",
        "Multi-Server Profiles: JSON config allows quick switching between devices without re-entering credentials",
        "Auto-Connect Default: Set a default device to connect on launch for zero-friction daily use",
        "Keyboard-First: Full keyboard shortcut support for power users who transfer files frequently",
        "PyInstaller Packaging: Distributes as standalone macOS app without requiring Python installation",
      ],
    },
    {
      id: "challenges",
      title: "Challenges & Solutions",
      description: "Real-world problems encountered and how they were solved.",
      highlights: [
        "Challenge: MTP unreliability on macOS → Solution: ADB-based file access for Android devices, bypassing MTP entirely",
        "Challenge: Large file transfers blocking the UI → Solution: Threaded transfer queue with Qt signal callbacks for progress updates",
        "Challenge: Managing multiple device connections → Solution: JSON config with named profiles and default device selection",
        "Challenge: Calculating accurate transfer speed/ETA → Solution: Rolling average speed calculation with per-file progress tracking",
        "Challenge: macOS code signing for distribution → Solution: PyInstaller configuration with proper signing for trusted app delivery",
        "Challenge: Handling disconnected devices gracefully → Solution: Connection state management with auto-reconnect and user-friendly error messages",
      ],
    },
    {
      id: "impact",
      title: "Impact",
      highlights: [
        "Unified file transfer workflow across SSH servers, Raspberry Pis, Android phones, tablets, and VR headsets",
        "Eliminated the need for terminal SSH commands or unreliable MTP connections",
        "Daily-driver tool for personal media management workflows",
        "Open source project helping others with cross-device file management",
        "Continuously maintained and improved based on personal usage",
      ],
    },
  ],

  technologies: SHUTTLE_TECHNOLOGIES,

  projectLinks: {
    github: "https://github.com/imlocle/shuttle",
  },

  nextStepsBody:
    "Planned enhancements include content moderation for uploaded media, support for wireless ADB connections, batch rename operations, and a plugin system for custom transfer rules.",

  showCta: true,
};
