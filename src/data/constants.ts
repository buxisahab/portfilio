export enum SkillCategory {
  LANGUAGES = "Programming Languages",
  FRAMEWORKS = "Frameworks & Platforms",
  BACKEND_CLOUD = "Backend & Cloud",
  AI_ML = "AI / ML & Vision",
  DRONE_ROBOTICS = "Drone & Robotics",
  TOOLS = "Development Tools",
}

export enum SkillNames {
  JS = "js",
  TS = "ts",
  HTML = "html",
  CSS = "css",
  REACT = "react",
  VUE = "vue",
  NEXTJS = "nextjs",
  TAILWIND = "tailwind",
  NODEJS = "nodejs",
  EXPRESS = "express",
  POSTGRES = "postgres",
  MONGODB = "mongodb",
  GIT = "git",
  GITHUB = "github",
  PRETTIER = "prettier",
  NPM = "npm",
  FIREBASE = "firebase",
  WORDPRESS = "wordpress",
  LINUX = "linux",
  DOCKER = "docker",
  NGINX = "nginx",
  AWS = "aws",
  VIM = "vim",
  VERCEL = "vercel",
}

export type Skill = {
  id: string | number;
  name: string;
  label: string;
  category?: SkillCategory;
  shortDescription: string;
  color: string;
  icon: string;
};

export const SKILLS: Record<SkillNames, Skill> = {
  [SkillNames.JS]: {
    id: 1,
    name: "js",
    label: "JavaScript",
    shortDescription: "Building interactive web dashboards and real-time logic.",
    color: "#f0db4f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  [SkillNames.TS]: {
    id: 2,
    name: "ts",
    label: "TypeScript",
    shortDescription: "Adding types and safety to large-scale applications.",
    color: "#007acc",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  [SkillNames.HTML]: {
    id: 3,
    name: "html",
    label: "HTML",
    shortDescription: "Creating clean semantic web structures.",
    color: "#e34c26",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  [SkillNames.CSS]: {
    id: 4,
    name: "css",
    label: "CSS",
    shortDescription: "Styling responsive layouts and glassmorphic UI.",
    color: "#563d7c",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  [SkillNames.REACT]: {
    id: 5,
    name: "react",
    label: "React",
    shortDescription: "Building component-driven user interfaces.",
    color: "#61dafb",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  [SkillNames.VUE]: {
    id: 6,
    name: "vue",
    label: "Vue",
    shortDescription: "Reactive frontend framework.",
    color: "#41b883",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
  },
  [SkillNames.NEXTJS]: {
    id: 7,
    name: "nextjs",
    label: "Next.js",
    shortDescription: "Shipping fast React apps with SSR and routing.",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  [SkillNames.TAILWIND]: {
    id: 8,
    name: "tailwind",
    label: "Tailwind",
    shortDescription: "Utility-first CSS framework for rapid styling.",
    color: "#38bdf8",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  },
  [SkillNames.NODEJS]: {
    id: 9,
    name: "nodejs",
    label: "Node.js",
    shortDescription: "Server-side JavaScript runtime.",
    color: "#6cc24a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  [SkillNames.EXPRESS]: {
    id: 10,
    name: "express",
    label: "Express",
    shortDescription: "Minimal web framework for APIs.",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  [SkillNames.POSTGRES]: {
    id: 11,
    name: "postgres",
    label: "PostgreSQL",
    shortDescription: "Relational database system.",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  [SkillNames.MONGODB]: {
    id: 12,
    name: "mongodb",
    label: "MongoDB",
    shortDescription: "NoSQL document database.",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  [SkillNames.GIT]: {
    id: 13,
    name: "git",
    label: "Git",
    shortDescription: "Distributed version control system.",
    color: "#f1502f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  [SkillNames.GITHUB]: {
    id: 14,
    name: "github",
    label: "GitHub",
    shortDescription: "Code hosting and team collaboration platform.",
    color: "#000000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  [SkillNames.PRETTIER]: {
    id: 15,
    name: "prettier",
    label: "Prettier",
    shortDescription: "Code formatter.",
    color: "#f7b93a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prettier/prettier-original.svg",
  },
  [SkillNames.NPM]: {
    id: 16,
    name: "npm",
    label: "NPM",
    shortDescription: "Package manager for JavaScript.",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
  },
  [SkillNames.FIREBASE]: {
    id: 17,
    name: "firebase",
    label: "Firebase",
    shortDescription: "Realtime backend platform suite.",
    color: "#ffca28",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },
  [SkillNames.WORDPRESS]: {
    id: 18,
    name: "wordpress",
    label: "WordPress",
    shortDescription: "CMS platform.",
    color: "#007acc",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
  },
  [SkillNames.LINUX]: {
    id: 19,
    name: "linux",
    label: "Linux",
    shortDescription: "Operating system kernel.",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  },
  [SkillNames.DOCKER]: {
    id: 20,
    name: "docker",
    label: "Docker",
    shortDescription: "Containerization platform.",
    color: "#2496ed",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  [SkillNames.NGINX]: {
    id: 21,
    name: "nginx",
    label: "NginX",
    shortDescription: "Web server and reverse proxy.",
    color: "#008000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
  },
  [SkillNames.AWS]: {
    id: 22,
    name: "aws",
    label: "AWS",
    shortDescription: "Cloud infrastructure platform.",
    color: "#ff9900",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aws/aws-original.svg",
  },
  [SkillNames.VIM]: {
    id: 23,
    name: "vim",
    label: "Vim",
    shortDescription: "Text editor.",
    color: "#e34c26",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vim/vim-original.svg",
  },
  [SkillNames.VERCEL]: {
    id: 24,
    name: "vercel",
    label: "Vercel",
    shortDescription: "Deployment platform for Next.js.",
    color: "#6cc24a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
  },
};

export const SKILL_LIST: Skill[] = [
  // Programming Languages
  {
    id: "java",
    name: "java",
    label: "Java",
    category: SkillCategory.LANGUAGES,
    shortDescription: "Object-oriented core for Android apps, enterprise backend, and modular software logic.",
    color: "#e76f51",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  {
    id: "kotlin",
    name: "kotlin",
    label: "Kotlin",
    category: SkillCategory.LANGUAGES,
    shortDescription: "Modern language of choice for high-performance native Android apps like AI Music.",
    color: "#7f5af0",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
  },
  {
    id: "python",
    name: "python",
    label: "Python",
    category: SkillCategory.LANGUAGES,
    shortDescription: "Core powering AI models, OpenCV computer vision pipelines, MAVProxy & drone automation.",
    color: "#2cb67d",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    id: "js",
    name: "js",
    label: "JavaScript",
    category: SkillCategory.LANGUAGES,
    shortDescription: "Building dynamic interactive web dashboards, Leaflet maps, and real-time frontend logic.",
    color: "#f0db4f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    id: "dart",
    name: "dart",
    label: "Dart",
    category: SkillCategory.LANGUAGES,
    shortDescription: "Language behind multi-platform Flutter apps for mobile and telemetry ground stations.",
    color: "#00b4d8",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
  },
  {
    id: "html",
    name: "html",
    label: "HTML5",
    category: SkillCategory.LANGUAGES,
    shortDescription: "Creating clean semantic web structures and dashboard views.",
    color: "#e34c26",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    id: "css",
    name: "css",
    label: "CSS3",
    category: SkillCategory.LANGUAGES,
    shortDescription: "Crafting fluid responsive layouts, glassmorphic UI, and custom theme systems.",
    color: "#563d7c",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    id: "cpp",
    name: "cpp",
    label: "C / C++",
    category: SkillCategory.LANGUAGES,
    shortDescription: "Embedded hardware programming for Arduino, microcontrollers, and low-level firmware.",
    color: "#00599c",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  },
  {
    id: "smali",
    name: "smali",
    label: "Smali",
    category: SkillCategory.LANGUAGES,
    shortDescription: "Android bytecode disassembly and low-level reverse engineering inspection.",
    color: "#d4af37",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg",
  },
  {
    id: "sql",
    name: "sql",
    label: "SQL",
    category: SkillCategory.LANGUAGES,
    shortDescription: "Relational database querying, schema structuring, and data management.",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },

  // Frameworks & Platforms
  {
    id: "android",
    name: "android",
    label: "Android SDK",
    category: SkillCategory.FRAMEWORKS,
    shortDescription: "Building robust native mobile applications, media players, and hardware integrations.",
    color: "#3ddc84",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg",
  },
  {
    id: "flutter",
    name: "flutter",
    label: "Flutter",
    category: SkillCategory.FRAMEWORKS,
    shortDescription: "Cross-platform framework for building AVIRON ground telemetry mobile interface.",
    color: "#02569b",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
  },
  {
    id: "firebase",
    name: "firebase",
    label: "Firebase",
    category: SkillCategory.FRAMEWORKS,
    shortDescription: "Realtime backend suite for cloud storage, live databases, FCM alerts, and auth.",
    color: "#ffca28",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },
  {
    id: "tensorflow",
    name: "tensorflow",
    label: "TensorFlow",
    category: SkillCategory.FRAMEWORKS,
    shortDescription: "Machine learning platform for training custom vision and risk identification models.",
    color: "#ff6f00",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
  },
  {
    id: "tflite",
    name: "tflite",
    label: "TensorFlow Lite",
    category: SkillCategory.FRAMEWORKS,
    shortDescription: "Quantized edge AI models optimized for onboard Raspberry Pi & mobile execution.",
    color: "#ff6f00",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
  },
  {
    id: "opencv",
    name: "opencv",
    label: "OpenCV",
    category: SkillCategory.FRAMEWORKS,
    shortDescription: "Real-time computer vision library for image processing, object tracking, and thermal feeds.",
    color: "#5c3ee8",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg",
  },
  {
    id: "tailwind",
    name: "tailwind",
    label: "Tailwind CSS",
    category: SkillCategory.FRAMEWORKS,
    shortDescription: "Utility-first framework for rapid futuristic web UI development.",
    color: "#38bdf8",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  },

  // Backend & Cloud
  {
    id: "fb_auth",
    name: "fb_auth",
    label: "Firebase Authentication",
    category: SkillCategory.BACKEND_CLOUD,
    shortDescription: "Secure multi-factor user identity & session management across web and mobile platforms.",
    color: "#ffca28",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },
  {
    id: "firestore",
    name: "firestore",
    label: "Cloud Firestore",
    category: SkillCategory.BACKEND_CLOUD,
    shortDescription: "Scalable NoSQL document database for structured app data and mission logs.",
    color: "#ffa000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },
  {
    id: "realtime_db",
    name: "realtime_db",
    label: "Firebase Realtime DB",
    category: SkillCategory.BACKEND_CLOUD,
    shortDescription: "Low-latency JSON state syncing for real-time telemetry and active drone tracking.",
    color: "#ffca28",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },
  {
    id: "cloud_functions",
    name: "cloud_functions",
    label: "Firebase Cloud Functions",
    category: SkillCategory.BACKEND_CLOUD,
    shortDescription: "Serverless backend triggers for automated event processing and alert routing.",
    color: "#ffab00",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },
  {
    id: "fcm",
    name: "fcm",
    label: "Cloud Messaging (FCM)",
    category: SkillCategory.BACKEND_CLOUD,
    shortDescription: "Push notifications for emergency alerts, system status updates, and user prompts.",
    color: "#ffc107",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },

  // AI / ML & Vision
  {
    id: "edge_ai",
    name: "edge_ai",
    label: "Edge AI & Embedded ML",
    category: SkillCategory.AI_ML,
    shortDescription: "Deploying lightweight neural networks directly on edge micro-processors and drones.",
    color: "#d4af37",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    id: "obj_detection",
    name: "obj_detection",
    label: "Object Detection",
    category: SkillCategory.AI_ML,
    shortDescription: "Detecting survivors, obstacles, and risk zones in real time using bounding box models.",
    color: "#f5d76e",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
  },
  {
    id: "img_processing",
    name: "img_processing",
    label: "Image Processing & Vision",
    category: SkillCategory.AI_ML,
    shortDescription: "Filtering, optical flow analysis, thermal image fusion, and feature extraction.",
    color: "#00b4d8",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg",
  },

  // Drone & Robotics
  {
    id: "pixhawk",
    name: "pixhawk",
    label: "Pixhawk Flight Controller",
    category: SkillCategory.DRONE_ROBOTICS,
    shortDescription: "Hardware flight controller integration for autonomous navigation and failsafe handling.",
    color: "#d4af37",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  },
  {
    id: "rpi",
    name: "rpi",
    label: "Raspberry Pi 4 (8GB)",
    category: SkillCategory.DRONE_ROBOTICS,
    shortDescription: "Onboard companion computer running vision inference, telemetry parsing, and MAVLink.",
    color: "#c51a4a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg",
  },
  {
    id: "arduino",
    name: "arduino",
    label: "Arduino Systems",
    category: SkillCategory.DRONE_ROBOTICS,
    shortDescription: "Microcontroller boards for payload release mechanisms, sensor polling, and actuators.",
    color: "#00979d",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg",
  },
  {
    id: "dronekit",
    name: "dronekit",
    label: "DroneKit & MAVProxy",
    category: SkillCategory.DRONE_ROBOTICS,
    shortDescription: "Python APIs for controlling drone movement, programmatic waypoints, and telemetry link.",
    color: "#f5d76e",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    id: "qgroundcontrol",
    name: "qgroundcontrol",
    label: "QGroundControl",
    category: SkillCategory.DRONE_ROBOTICS,
    shortDescription: "Ground control station configuration, vehicle setup, mission planning, and parameters.",
    color: "#d4af37",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  },
  {
    id: "sensors_hardware",
    name: "sensors_hardware",
    label: "GPS / IMU / LiDAR / Thermal",
    category: SkillCategory.DRONE_ROBOTICS,
    shortDescription: "Multi-sensor fusion combining GPS position, IMU orientation, LiDAR altitude & FLIR thermal vision.",
    color: "#00b4d8",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  },

  // Tools
  {
    id: "android_studio",
    name: "android_studio",
    label: "Android Studio",
    category: SkillCategory.TOOLS,
    shortDescription: "IDE for Android app development, profiling audio threads, and layout design.",
    color: "#3ddc84",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg",
  },
  {
    id: "vscode",
    name: "vscode",
    label: "VS Code",
    category: SkillCategory.TOOLS,
    shortDescription: "Primary development workspace for web, Python AI scripts, and Flutter code.",
    color: "#007acc",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  },
  {
    id: "git",
    name: "git",
    label: "Git & GitHub",
    category: SkillCategory.TOOLS,
    shortDescription: "Distributed version control, team collaboration, and code management.",
    color: "#f1502f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    id: "arduino_ide",
    name: "arduino_ide",
    label: "Arduino IDE",
    category: SkillCategory.TOOLS,
    shortDescription: "Environment for compiling and flashing C++ firmware to microcontrollers.",
    color: "#00979d",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg",
  }
];

export type Achievement = {
  id: number;
  title: string;
  badge: string;
  event: string;
  description: string;
  projectAssociated?: string;
  team?: string;
  highlights: string[];
};

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 1,
    title: "Selected for Pragati / Prototype Phase",
    badge: "Prototype Development Phase",
    event: "5G Innovation Hackathon 2025",
    description: "Shortlisted and selected for the prestigious prototype development stage to build the AVIRON 5G-connected emergency rescue drone system.",
    projectAssociated: "AVIRON — Autonomous Virtual Innovative Rescue for Operations in Natural-disasters",
    highlights: [
      "Selected among top nationwide technology teams",
      "Demonstrated 5G high-bandwidth telemetry and virtual doctor communication concept",
      "Integrated edge AI obstacle avoidance on Raspberry Pi 4 companion hardware"
    ]
  },
  {
    id: 2,
    title: "1st Prize Winner",
    badge: "1st Place",
    event: "Synergy 2K25 — SGT University",
    description: "Secured First Position representing Team BeGenX with innovative technology solutions and prototype demonstration.",
    team: "Team BeGenX",
    highlights: [
      "Awarded 1st Prize for technical architecture & implementation",
      "Recognized for practical engineering execution and pitch",
      "Led technical development for product features"
    ]
  },
  {
    id: 3,
    title: "Shortlisted Hackathon Innovator",
    badge: "Shortlisted",
    event: "INSTINCT 4.0 — IntelliSmart Hackathon",
    description: "Shortlisted in IntelliSmart's nationwide innovation hackathon for smart systems and connected digital product concepts.",
    highlights: [
      "Developed intelligent data monitoring concept",
      "Designed low-latency telemetry workflow"
    ]
  },
  {
    id: 4,
    title: "Hackathon Participant & Spatial Tech Innovator",
    badge: "Participant",
    event: "ISRO Bharatiya Antariksh Hackathon",
    description: "Participated in space technology exploration, geo-spatial data workflows, and autonomous system research.",
    highlights: [
      "Explored satellite telemetry and GIS data integration",
      "Applied spatial coordinate mapping to autonomous systems"
    ]
  }
];

export type Certification = {
  id: number;
  title: string;
  issuer: string;
  credentialId?: string;
  issueDate?: string;
  badge: string;
  description: string;
  skills: string[];
};

export const CERTIFICATIONS: Certification[] = [
  {
    id: 1,
    title: "Google Certified Associate Android Developer — Flutter",
    issuer: "Google Developers",
    credentialId: "#194637",
    badge: "Google Certified",
    description: "Demonstrated proficiency in building production-grade mobile applications with Flutter, state management, native platform bridges, and performant UI architectures.",
    skills: ["Flutter", "Dart", "Android", "Cross-Platform", "State Management"]
  },
  {
    id: 2,
    title: "Google Certified Associate Android Developer — Kotlin",
    issuer: "Google Developers",
    credentialId: "#571394",
    badge: "Google Certified",
    description: "Validated advanced competencies in Kotlin coroutines, modern Android architecture (MVVM/MVI), Jetpack libraries, and reactive application development.",
    skills: ["Kotlin", "Android SDK", "Jetpack", "Coroutines", "Room"]
  },
  {
    id: 3,
    title: "Google Certified Associate Android Developer — Java",
    issuer: "Google Developers",
    credentialId: "#268416",
    badge: "Google Certified",
    description: "Certified deep foundation in native Java Android development, threading, memory optimization, lifecycle management, and enterprise app stability.",
    skills: ["Java", "Android SDK", "OOP", "Concurrency", "Services"]
  },
  {
    id: 4,
    title: "Google Certified Mobile Web Specialist",
    issuer: "Google Developers",
    credentialId: "#115139",
    badge: "Google Certified",
    description: "Demonstrated expertise in responsive web design, progressive web apps (PWAs), performance auditing, caching, and modern web APIs.",
    skills: ["PWA", "JavaScript", "Web APIs", "Performance", "HTML5/CSS3"]
  },
  {
    id: 5,
    title: "Instagram Insider: Program by Meta",
    issuer: "Meta / Instagram",
    badge: "Meta Program",
    description: "Selected participant exploring creator ecosystems, algorithmic content distribution, developer APIs, and social media technology landscapes.",
    skills: ["Meta APIs", "Social Graph", "Creator Tech", "Digital Distribution"]
  }
];

export type Education = {
  id: number;
  degree: string;
  institution: string;
  location: string;
  period: string;
  field: string;
  details?: string[];
};

export const EDUCATION: Education[] = [
  {
    id: 1,
    degree: "Bachelor of Engineering (B.E.)",
    institution: "Ganga Institute of Technology and Management",
    location: "Delhi NCR, India",
    period: "2024 – 2028",
    field: "Computer Science & Engineering",
    details: [
      "Rigorous core curriculum in algorithms, data structures, computer architecture, and distributed systems",
      "Active technology builder leading hackathon prototypes in autonomous robotics and AI"
    ]
  },
  {
    id: 2,
    degree: "Intermediate (12th Grade)",
    institution: "Vanijya Inter College",
    location: "Bihar, India",
    period: "2022 – 2024",
    field: "Higher Secondary Education",
    details: [
      "Strengthened quantitative, mathematical, and logical reasoning foundational for software engineering"
    ]
  },
  {
    id: 3,
    degree: "Matriculation (10th Grade)",
    institution: "Uchch Madhyamik Vidyalaya Aurai",
    location: "Bihar, India",
    period: "2021 – 2022",
    field: "Secondary School Examination",
    details: [
      "Solid academic foundation with early passion for computers, programming, and electronics"
    ]
  }
];

export type Experience = {
  id: number;
  startDate: string;
  endDate: string;
  title: string;
  company: string;
  description: string[];
  skills: string[];
};

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    startDate: "2022",
    endDate: "Present",
    title: "Independent Software Developer & Tech Entrepreneur",
    company: "Autonomous & Software Product Builds",
    description: [
      "Initiated independent software development journey building multi-domain digital products, mobile apps, and autonomous hardware-software systems.",
      "Engineered AVIRON — an autonomous emergency response drone system featuring AI vision, telemetry, and payload delivery.",
      "Created Buxi AI — an intelligent voice assistant & workflow automation mobile app built with Flutter and custom NLP pipelines.",
      "Developed AI Music (Buxi Music), an Android audio processing & discovery platform built with Kotlin and custom DSP audio pipelines.",
      "Architected Remote Android Control Dashboard and Secure Licensing anti-tamper security frameworks.",
      "Built B Educational Consultancy web platform for student admissions, leads, and college management workflows.",
    ],
    skills: ["Java", "Kotlin", "Python", "Flutter", "Firebase", "Pixhawk", "TensorFlow Lite", "WebRTC"],
  },
  {
    id: 2,
    startDate: "2024",
    endDate: "Present",
    title: "Autonomous Systems & AI Hardware Engineer",
    company: "AVIRON & AIFRIS Systems",
    description: [
      "Integrated Pixhawk flight controllers with Raspberry Pi 4 8GB companion computers running Python & DroneKit.",
      "Implemented Edge AI models using TensorFlow Lite and OpenCV for real-time obstacle detection and thermal vision.",
      "Designed AVIRON Command Web Dashboard using Leaflet.js, WebRTC, FCM, and Tailwind CSS for live drone fleet monitoring.",
      "Conceived AIFRIS (Autonomous Intelligent Forest Risk Identification System) for early forest-fire risk identification via sensor networks and computer vision.",
    ],
    skills: ["Python", "Pixhawk", "Raspberry Pi", "OpenCV", "TensorFlow Lite", "Leaflet.js", "WebRTC"],
  },
  {
    id: 3,
    startDate: "2024",
    endDate: "2025",
    title: "Hackathon Competitor & Prototype Innovator",
    company: "5G Innovation Hackathon, Synergy 2K25 & INSTINCT 4.0",
    description: [
      "Selected for Pragati Prototype Development Phase in 5G Innovation Hackathon 2025 for AVIRON system.",
      "Won 1st Prize at Synergy 2K25 (SGT University) with Team BeGenX for outstanding technical solution execution.",
      "Shortlisted for INSTINCT 4.0 IntelliSmart Hackathon and participated in ISRO Bharatiya Antariksh Hackathon.",
    ],
    skills: ["Kotlin", "Android", "Flutter", "Firebase", "IoT", "DroneKit", "QGroundControl"],
  },
];

export const themeDisclaimers = {
  light: [
    "Illuminating the workspace...",
    "Switching to light mode.",
  ],
  dark: [
    "Welcome to the high-tech dark studio.",
    "Dark theme activated. Gold accents engaged.",
  ],
};
