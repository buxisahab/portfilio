export type ProjectCategory =
  | "All"
  | "Mobile"
  | "Web"
  | "AI/ML"
  | "Drone & Robotics"
  | "IoT"
  | "Game Development"
  | "Experimental";

export type Project = {
  id: string;
  name: string;
  tagline?: string;
  category: ProjectCategory;
  additionalCategories?: ProjectCategory[];
  description: string;
  technologies: string[];
  features: string[];
  status: "Flagship Project" | "Completed" | "Under Development" | "Experimental Project" | "Hackathon Prototype";
  gradient: [string, string];
  githubUrl?: string;
  demoUrl?: string;
  imageKey?: string;
  featured?: boolean;
  historyNote?: string;
};

export const PROJECTS: Project[] = [
  {
    id: "buxi-ai",
    name: "Buxi AI",
    tagline: "Intelligent Voice Assistant & Workflow Automation System",
    category: "Mobile",
    additionalCategories: ["AI/ML"],
    description:
      "An intelligent voice assistant and personal productivity application built with Flutter, integrating speech recognition, custom NLP intent parsing, device automation, and conversational AI capabilities.",
    technologies: [
      "Flutter",
      "Dart",
      "Speech-to-Text",
      "TTS Engine",
      "NLP",
      "Firebase",
      "Android Intents",
      "REST APIs"
    ],
    features: [
      "Voice-driven task execution and device automations",
      "Offline speech recognition and NLP intent classification",
      "Dynamic conversational voice synthesis (TTS)",
      "Custom hotword activation and quick command workflows",
      "Cross-platform responsiveness and clean modern interface"
    ],
    status: "Flagship Project",
    gradient: ["#D4AF37", "#1A1A1A"],
    githubUrl: "https://github.com/buxisahab/Buxi-AI-Assistant",
    demoUrl: "#",
    featured: true
  },
  {
    id: "aviron",
    name: "AVIRON",
    tagline: "Autonomous Virtual Innovative Rescue for Operations in Natural-disasters",
    category: "Drone & Robotics",
    additionalCategories: ["AI/ML", "Web", "IoT"],
    description:
      "An autonomous emergency-response drone concept designed to support rescue and medical assistance using AI, computer vision, real-time communication, autonomous flight technologies, and intelligent payload delivery.",
    technologies: [
      "Pixhawk",
      "Raspberry Pi 4 8GB",
      "Python",
      "TensorFlow Lite",
      "Flutter",
      "Firebase",
      "GPS",
      "IMU",
      "LiDAR",
      "Thermal FLIR Camera",
      "RGB Camera",
      "Telemetry",
      "QGroundControl"
    ],
    features: [
      "AI-assisted obstacle detection",
      "Thermal and RGB vision fusion",
      "Autonomous flight navigation",
      "Emergency medical payload delivery system",
      "Real-time telemetry and GPS tracking",
      "Remote monitoring & 5G connectivity concept",
      "Virtual doctor communication concept",
      "Return-to-launch failsafe mechanism",
      "Modular payload delivery system"
    ],
    status: "Hackathon Prototype",
    gradient: ["#D4AF37", "#050505"],
    githubUrl: "https://github.com/buxisahab/AVIRON-Drone-System",
    demoUrl: "#",
    featured: true,
    historyNote: "Selected for Pragati Prototype Development Phase in 5G Innovation Hackathon 2025. Evolved from the earlier project concept ADVICA."
  },
  {
    id: "ai-music",
    name: "AI Music / Buxi Music",
    tagline: "Immersive Next-Gen Android Audio Experience",
    category: "Mobile",
    additionalCategories: ["Experimental"],
    description:
      "A modern Android music application focused on immersive playback, advanced audio processing, music discovery, and a highly interactive user experience.",
    technologies: [
      "Kotlin",
      "Android SDK",
      "DSP Processing",
      "Audio Processing APIs",
      "YouTube Music Integration",
      "Android Media APIs"
    ],
    features: [
      "Reels-style vertical music browsing",
      "Custom high-fidelity music player",
      "Real-time audio visualization",
      "Bass enhancement & custom equalizer",
      "Buxi Atmos & Buxi Aura spatial audio concepts",
      "Advanced DSP audio experiments",
      "Ambient Rain & Thunder background mode",
      "Offline playback concepts & dynamic music discovery"
    ],
    status: "Flagship Project",
    gradient: ["#F5D76E", "#111827"],
    githubUrl: "https://github.com/buxisahab/AI-Music-Android",
    demoUrl: "#",
    featured: true
  },
  {
    id: "aifris",
    name: "AIFRIS",
    tagline: "Autonomous Intelligent Forest Risk Identification System",
    category: "AI/ML",
    additionalCategories: ["IoT", "Drone & Robotics"],
    description:
      "An intelligent forest monitoring and risk-identification concept focused on detecting and identifying potential forest-fire risks using AI, computer vision, sensors, and connected systems.",
    technologies: [
      "Python",
      "AI/ML",
      "Computer Vision",
      "TensorFlow",
      "IoT Sensors",
      "Edge Analytics"
    ],
    features: [
      "AI forest risk evaluation algorithms",
      "Computer vision for smoke/heat pattern detection",
      "Multi-sensor environmental monitoring",
      "Early risk alert generation and dispatch",
      "Edge-to-cloud data synchronization"
    ],
    status: "Experimental Project",
    gradient: ["#10B981", "#050505"],
    githubUrl: "https://github.com/buxisahab/AIFRIS-Forest-Risk",
    demoUrl: "#",
    featured: true
  },
  {
    id: "aviron-dashboard",
    name: "AVIRON Command Dashboard",
    tagline: "Real-time Ground Station & Fleet Operations Web Platform",
    category: "Web",
    additionalCategories: ["Drone & Robotics"],
    description:
      "A web dashboard for real-time telemetry tracking, drone position rendering on live maps, camera stream control, and mission management.",
    technologies: [
      "HTML5",
      "Tailwind CSS",
      "Vanilla JavaScript",
      "Firebase",
      "Leaflet.js",
      "WebRTC",
      "Firebase Cloud Messaging"
    ],
    features: [
      "Interactive live map with drone trajectory",
      "Real-time telemetry indicators (Battery, Altitude, Speed)",
      "Emergency notification dispatch panel",
      "Mission flight plan viewer",
      "WebRTC live camera stream view",
      "Remote command triggers & failsafe buttons"
    ],
    status: "Completed",
    gradient: ["#3B82F6", "#050505"],
    githubUrl: "https://github.com/buxisahab/AVIRON-Web-Dashboard",
    demoUrl: "#",
    featured: true
  },
  {
    id: "b-educational-consultancy",
    name: "B Educational Consultancy",
    tagline: "Digital Ecosystem for Student Management & College Admissions",
    category: "Web",
    additionalCategories: ["Mobile"],
    description:
      "A comprehensive digital platform and business ecosystem focused on admission guidance, student management, college coordination, and education consultancy operations.",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Firebase Firestore",
      "Firebase Auth",
      "Web Technologies"
    ],
    features: [
      "Student registration and application tracking",
      "Admission workflow pipeline management",
      "Partner college catalog & requirement matching",
      "Lead generation and inquiry management",
      "Comprehensive Admin dashboard",
      "Automated notification and communication workflows"
    ],
    status: "Completed",
    gradient: ["#8B5CF6", "#050505"],
    githubUrl: "https://github.com/buxisahab/B-Educational-Consultancy",
    demoUrl: "#",
    featured: true
  },
  {
    id: "game-dev-experiments",
    name: "Game Development / Experiments",
    tagline: "Interactive Mechanics, 2D/3D Physics & Custom UI",
    category: "Game Development",
    additionalCategories: ["Experimental"],
    description:
      "A collection of technical game development experiments exploring custom gameplay programming, 2D/3D physics engines, particle systems, and interactive user interface optimizations.",
    technologies: [
      "Unity",
      "C#",
      "Android Studio",
      "Kotlin",
      "JavaScript",
      "Blender"
    ],
    features: [
      "2D physics controller & collision detection",
      "3D environment lighting & camera controls",
      "Custom game HUD and interactive touch controls",
      "Mobile frame-rate optimization and memory pooling",
      "Animation state machines & particle effects"
    ],
    status: "Experimental Project",
    gradient: ["#EC4899", "#050505"],
    githubUrl: "https://github.com/buxisahab/Game-Dev-Experiments",
    demoUrl: "#",
    featured: false
  },
  {
    id: "iot-sensor-node",
    name: "Smart IoT Sensor Node Network",
    tagline: "Hardware-Integrated Multi-Sensor Array for Environmental Telemetry",
    category: "IoT",
    additionalCategories: ["Drone & Robotics", "Experimental"],
    description:
      "Hardware engineering experiment creating low-cost distributed IoT telemetry nodes using Arduino microcontrollers and Raspberry Pi companion hubs.",
    technologies: [
      "Arduino",
      "Raspberry Pi",
      "C/C++",
      "MQTT",
      "Firebase",
      "Gas & Temperature Sensors"
    ],
    features: [
      "Multi-sensor hardware data polling",
      "Low-power wireless telemetry transmission",
      "Automated threshold alert triggers",
      "Cloud database state synchronization"
    ],
    status: "Experimental Project",
    gradient: ["#14B8A6", "#050505"],
    githubUrl: "https://github.com/buxisahab/IoT-Sensor-Nodes",
    demoUrl: "#",
    featured: false
  },
  {
    id: "edge-vision-engine",
    name: "Edge AI Computer Vision Module",
    tagline: "Optimized Embedded Vision for Autonomous Hardware",
    category: "AI/ML",
    additionalCategories: ["Drone & Robotics", "Experimental"],
    description:
      "Lightweight Computer Vision pipeline running on edge microcomputers to identify objects, calculate optical flow, and stream annotated video.",
    technologies: [
      "Python",
      "OpenCV",
      "TensorFlow Lite",
      "Edge AI",
      "C++"
    ],
    features: [
      "Real-time object detection at 30+ FPS",
      "Bounding box tracking across video frames",
      "Thermal image histogram equalization",
      "Low RAM & CPU power footprint optimization"
    ],
    status: "Experimental Project",
    gradient: ["#EAB308", "#050505"],
    githubUrl: "https://github.com/buxisahab/Edge-Vision-Engine",
    demoUrl: "#",
    featured: false
  },
  {
    id: "remote-android-control",
    name: "Remote Android Control Dashboard",
    tagline: "Non-Rooted Android Fleet Administration & Teleoperation Platform",
    category: "Web",
    additionalCategories: ["Mobile"],
    description:
      "A comprehensive remote management platform enabling real-time teleoperation, device status monitoring, file operations, and remote input simulation on non-rooted Android devices via WebSocket and Accessibility APIs.",
    technologies: [
      "Kotlin",
      "Android Accessibility API",
      "WebSocket",
      "Node.js",
      "React",
      "REST APIs",
      "MediaProjection"
    ],
    features: [
      "Real-time screen mirroring without root requirements",
      "Bidirectional WebSocket low-latency command protocol",
      "Remote input dispatch via Android Accessibility Services",
      "Device teleoperation, battery, network, and storage telemetry",
      "Secure end-to-end token authorization"
    ],
    status: "Completed",
    gradient: ["#F59E0B", "#050505"],
    githubUrl: "https://github.com/buxisahab/Remote-Android-Control",
    demoUrl: "#",
    featured: true
  },
  {
    id: "secure-licensing-framework",
    name: "Secure Licensing Framework",
    tagline: "Anti-Tamper, Dynamic Verification & Smali Code Protection Architecture",
    category: "Mobile",
    additionalCategories: ["Experimental"],
    description:
      "An advanced Android software protection framework designed to prevent reverse engineering, unauthorized repackaging, Smali bytecode modification, and license cracking.",
    technologies: [
      "Android NDK",
      "C++",
      "Smali",
      "Java",
      "Cryptography",
      "Signature Verification"
    ],
    features: [
      "Native C++ cryptographic integrity checks via NDK",
      "APK signature and package hash verification",
      "Anti-debugging, ptrace detection, and emulator evasion",
      "Dynamic server-side license verification handshake",
      "Code obfuscation resilience against decompilation tools"
    ],
    status: "Completed",
    gradient: ["#EF4444", "#050505"],
    githubUrl: "https://github.com/buxisahab/Secure-Licensing-Framework",
    demoUrl: "#",
    featured: true
  }
];
