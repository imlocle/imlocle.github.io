import type { CaseStudyConfig } from "@models/caseStudy";
import type { PreviewCardData } from "@models/card";

export const FILESLING_TITLE = "FileSling — File Manager for Mac";
export const FILESLING_CASE_STUDY_PATH = "/work/case-study/filesling";

export const FILESLING_TECHNOLOGIES = [
  "Python 3.11+",
  "PySide6",
  "Paramiko",
  "SSH/SFTP",
  "rsync",
  "ADB",
  "pymobiledevice3",
  "Pydantic",
  "PyInstaller",
  "macOS Keychain",
];

export const FILESLING_PREVIEW_CARD: PreviewCardData = {
  title: FILESLING_TITLE,
  description:
    "A file manager for Mac that sends files to connected devices — SSH servers, Raspberry Pis, Android phones, iPhones, tablets, and VR headsets — through a clean drag-and-drop interface.",
  link: FILESLING_CASE_STUDY_PATH,
};

export const FILESLING_CASE_STUDY_CONFIG: CaseStudyConfig = {
  pageTitle: `${FILESLING_TITLE}: Case Study`,
  pageSubtitle:
    "A native macOS file manager for sending files to connected devices via SSH, SFTP, rsync, ADB, and iOS AFC with drag-and-drop, transfer queue, and auto-reconnect.",

  heroTopline: "Open Source Project • Desktop Application",
  heroTitle: "FileSling — A File Manager for Connected Devices",
  heroSubtitle:
    "Designed and built a native macOS desktop application with PySide6 for transferring files to SSH servers, Raspberry Pis, Android phones (USB + WiFi), iPhones/iPads, tablets, and VR headsets. Features rsync delta transfers, a remote file explorer, resilient transfer queue, auto-reconnect, remote video conversion, and multi-device management. Distributed as a .dmg via GitHub Releases.",

  stats: [
    { label: "Framework", value: "PySide6 (Qt)" },
    { label: "Protocols", value: "SSH/SFTP, rsync, ADB, iOS AFC" },
    { label: "Distribution", value: "DMG via GitHub Releases" },
    { label: "Status", value: "Actively Maintained (v3.2)" },
  ],

  sections: [
    {
      id: "problem",
      title: "The Problem",
      description:
        "Transferring files from a Mac to connected devices — Raspberry Pis, Android phones, VR headsets, iPhones, NAS boxes — was fragmented across multiple tools. SSH required terminal commands, Android needed MTP (unreliable on macOS) or third-party apps, iPhones required iTunes/Finder or iCloud workarounds, and there was no unified interface for managing multiple devices with a proper transfer queue.",
    },
    {
      id: "goal",
      title: "The Goal",
      description:
        "Build a native macOS file manager that unifies file transfers to any connected device through a single, polished drag-and-drop interface. Support SSH servers (with rsync delta transfers), Android devices via ADB (USB and WiFi), and iPhones/iPads via AFC. Provide a resilient transfer queue with retry and resume, and deliver it as a standalone .dmg that non-technical users can install.",
    },
    {
      id: "ownership",
      title: "My Role",
      description:
        "I own the entire project end-to-end: architecture design, UI/UX, protocol integrations (SSH/SFTP, rsync, ADB, and iOS AFC), transfer queue system, theming, crash handling, CI/CD pipeline, and distribution via GitHub Releases.",
      callout:
        "Full ownership across architecture, multi-protocol file transfer, macOS-native integrations, CI/CD, and distribution.",
    },
    {
      id: "architecture",
      title: "Architecture",
      description:
        "FileSling uses a backend abstraction where each connection type (SSH, ADB, iOS) implements the same interface (listdir, stat, put, get, rename, mkdir, remove). The explorer UI doesn't know or care which protocol is underneath — new backends can be added without touching the UI layer.",
      highlights: [
        "Presentation Layer: PySide6 UI with remote file explorer, drag-and-drop (including onto specific folders), transfer queue, bookmarks, and breadcrumb navigation",
        "Transfer Engine: Queue-based system with speed/ETA calculation, auto-retry (3 attempts), resume interrupted uploads, queue persistence across crashes, and rsync fast-path for SSH servers (delta-only transfers)",
        "Backend Abstraction: Unified interface — ADBClient and IOSClient mimic SFTPClient. New protocols (SMB, WebDAV, S3) can be added without changing the UI",
        "SSH/SFTP Backend: Paramiko with separate sessions for explorer vs transfers (thread-safe), auto-reconnect with 15s health checks, latency monitoring, rsync for delta transfers",
        "ADB Backend: Android device support via USB and WiFi with progressive directory loading (batches of 50), auto-detect on plug-in, wireless pairing (Android 11+)",
        "iOS Backend: iPhone/iPad support via AFC protocol (pymobiledevice3) — access DCIM, Downloads, Photos without jailbreak",
        "Remote Video Conversion: Right-click → Convert to H.264 runs ffmpeg on the remote server over SSH",
        "Configuration: Pydantic-validated JSON config at ~/.FileSling/config.json with per-server bookmarks, download dirs, and extension filters",
        "Distribution: PyInstaller → DMG, automated via GitHub Actions on tag push",
      ],
    },
    {
      id: "features",
      title: "Key Features",
      description:
        "Built for daily use with keyboard-driven workflows, resilient transfers, and macOS-native behavior.",
      highlights: [
        "Remote File Explorer: Browse SSH servers, Android devices, and iPhones with sortable columns, recursive search, colored file-type icons, and tooltips",
        "Drag-and-Drop: Drop files from Finder into the explorer — including onto specific folders with visual drop-target highlighting. Drag remote files to Finder to download",
        "rsync Fast Path: Delta transfers for SSH servers — only sends changed bytes. Automatic fallback to SFTP if rsync isn't available",
        "Transfer Queue: Queue uploads and downloads with per-file speed, ETA, auto-retry, resume on interrupted uploads, and queue persistence across crashes",
        "Auto-Reconnect: Detects dropped connections via 15s health checks and reconnects automatically. Color-coded latency indicator in toolbar",
        "Android USB + WiFi: Connect phones, tablets, and VR headsets via ADB. Wireless pairing for Android 11+. Progressive directory loading for large folders",
        "iPhone/iPad USB: Browse and back up camera roll photos/videos via AFC protocol. No jailbreak required — device must be unlocked and trusted",
        "Remote Video Convert: Right-click → Convert to H.264 runs ffmpeg on the remote server. Monitor progress in the activity panel",
        "Multi-Server Management: Named device profiles with per-server bookmarks, default start folder, download directory, and extension filters",
        "macOS Notifications: Alerts on transfer complete/fail with optional sound and Dock badge for pending transfer count",
        "Batch Operations: Multi-select download, move, delete, and batch rename with find/replace in filenames",
        "Theming: Follow System, Light, or Dark mode. Export/import settings between machines. Crash handler with one-click GitHub issue reporting",
      ],
    },
    {
      id: "design-decisions",
      title: "Design Decisions",
      description:
        "Intentional choices that shaped the architecture and user experience.",
      highlights: [
        "Backend Abstraction: ADBClient and IOSClient mimic SFTPClient interface — the explorer doesn't know which protocol it's talking to. This makes adding SMB/WebDAV/S3 trivial",
        "rsync First, SFTP Fallback: For SSH key-based connections, rsync is attempted first for delta transfers. If it fails (server doesn't have rsync), falls back to SFTP silently",
        "Separate SFTP Sessions: Explorer and transfers use independent sessions — no locks needed, no blocking the UI during large uploads",
        "Queue Persistence: Active and pending transfers are saved to disk. If the app crashes, queued items are restored on next launch",
        "Auto-Reconnect over Manual: 15-second health checks detect drops and reconnect silently. Users shouldn't have to click 'reconnect'",
        "ADB over MTP: MTP is unreliable on macOS. ADB provides consistent, fast file access to any Android device with Developer Mode. WiFi mode eliminates USB cables entirely",
        "iOS via AFC: pymobiledevice3 talks the Apple File Conduit protocol directly — no jailbreak, no iTunes dependency. Optional dependency keeps the base install lightweight",
        "DMG Distribution: PyInstaller + GitHub Actions builds a .dmg on every tagged release. Users download and drag to Applications",
        "Pydantic Config: Settings are validated on load. Invalid configs fail fast with clear errors instead of silent corruption",
      ],
    },
    {
      id: "challenges",
      title: "Challenges & Solutions",
      description: "Real-world problems encountered and how they were solved.",
      highlights: [
        "Challenge: Large Android directories (10K+ files) freezing the UI → Solution: Progressive/chunked loading that streams items in batches of 50",
        "Challenge: SSH connections dropping silently during idle → Solution: 15-second keepalive health checks with auto-reconnect and latency display",
        "Challenge: Losing queued transfers on crash → Solution: Queue state persisted to JSON on every change, restored on next launch",
        "Challenge: Users not knowing if a file was already uploaded → Solution: Transfer history with search + duplicate detection before upload/download",
        "Challenge: macOS blocking unsigned apps → Solution: Documented xattr workaround, working toward proper code signing",
        "Challenge: Managing credentials securely → Solution: macOS Keychain integration for SSH passwords and passphrases",
      ],
    },
    {
      id: "impact",
      title: "Impact",
      highlights: [
        "Unified file transfer workflow across SSH servers, Raspberry Pis, Android phones (USB + WiFi), iPhones/iPads, tablets, and VR headsets in a single native app",
        "rsync delta transfers reduce upload time by only sending changed bytes — no more re-uploading entire files",
        "Eliminated the need for terminal SSH commands, unreliable MTP, iTunes, or multiple transfer tools",
        "Distributed as a standalone .dmg — non-technical users can install and use it immediately",
        "Daily-driver tool for personal media management and homelab workflows",
        "Open source project with automated CI/CD pipeline, quality checks, and GitHub Releases distribution",
        "Architecture designed for extensibility — new backends (SMB, WebDAV, S3) require no UI changes",
      ],
    },
  ],

  technologies: FILESLING_TECHNOLOGIES,

  projectLinks: {
    github: "https://github.com/imlocle/filesling",
  },

  nextStepsBody:
    "Next major direction is a workflow automation rules engine: watch folders that auto-upload new files, pattern-based transfer routing (e.g. *.mp4 always goes to NAS), and device-aware actions when specific devices connect. Further out: additional backends (SMB, WebDAV, S3), multi-server dashboard with split-pane transfers, and macOS-native integrations like a Finder extension and menu bar drop zone.",

  showCta: true,
};
