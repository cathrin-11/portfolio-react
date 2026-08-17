export const PERSONAL_INFO = {
  name: "CATHRIN R",
  title: "FULL STACK & NODE.JS DEVELOPER",
  email: "cathrin1103@gmail.com",
  phone: "+91 6369838636",
  location: "Coimbatore, India",
  github: "https://github.com/Cathrin-11",
  linkedin: "https://linkedin.com/in/Cathrin-R",
  bio: "High-performance Full Stack & Node.js Engineer specializing in distributed backend microservices, real-time event architectures, and reactive frontend experiences. Proven expertise across Node.js, Spring Boot, React, and AI-driven algorithmic workflows with a relentless commitment to clean architecture, sub-second API latency, and scalable cloud deployments.",
  objective: "High-performance Full Stack & Node.js Engineer specializing in distributed backend microservices, real-time event architectures, and reactive frontend experiences. Proven expertise across Node.js, Spring Boot, React, and AI-driven algorithmic workflows with a relentless commitment to clean architecture, sub-second API latency, and scalable cloud deployments."
};

export const SKILLS = [
  "React.js",
  "Node.js",
  "Spring Boot",
  "REST API",
  "Java",
  "C++",
  "Python",
  "MySQL",
  "MongoDB",
  "Machine Learning",
  "FastAPI",
  "AWS Cloud"
];

export const SKILL_CATEGORIES = [
  {
    id: "languages",
    title: "Languages",
    skills: ["Java", "C++", "JavaScript", "Python", "SQL"]
  },
  {
    id: "frontend",
    title: "Frontend Development",
    skills: ["React.js", "HTML5", "CSS3 / Vanilla CSS", "Tailwind CSS", "Hooks / State Management"]
  },
  {
    id: "backend",
    title: "Backend Development",
    skills: ["Node.js", "Express.js", "Spring Boot", "Spring Data JPA", "RESTful APIs", "FastAPI"]
  },
  {
    id: "databases-cloud",
    title: "Databases & Cloud & AI",
    skills: ["MySQL", "MongoDB", "AWS Cloud", "Machine Learning", "NLP / MiniLM", "Git & Docker"]
  }
];

export const PROJECTS = [
  {
    id: "yoga-instructor-app",
    title: "Yoga Instructor Application",
    shortDesc: "Engineered a high-concurrency booking platform utilizing React.js, Node.js microservices, and MongoDB with role-based JWT authentication and real-time scheduling APIs.",
    badge: "Full Stack System",
    accentColor: "#a3e635",
    techStack: ["React.js", "Node.js", "MongoDB", "RESTful APIs"],
    tech: ["React.js", "Node.js", "MongoDB", "RESTful APIs"],
    bullets: [
      "Engineered an enterprise-ready Yoga Instructor Booking platform leveraging React.js, Node.js, and MongoDB.",
      "Architected high-throughput RESTful API endpoints managing user auth, instructor matchmaking, and transactional scheduling.",
      "Designed responsive, optimized UI with sub-100ms interaction feedback and reactive state caching.",
      "Implemented secure JWT session protocols and strict granular RBAC (Role-Based Access Control).",
      "Optimized MongoDB indexing and query pipelines, reducing data retrieval latency by over 35%."
    ],
    highlights: [
      "High-concurrency full-stack architecture with React.js & Node.js",
      "Sub-second RESTful API pipelines for auth, matching, and schedules",
      "Granular RBAC security protocols & indexed MongoDB data engine"
    ]
  },
  {
    id: "vehicle-service-portal",
    title: "Vehicle Service Booking Portal",
    shortDesc: "Built an enterprise-grade vehicle service lifecycle portal with reactive custom hooks, WebSocket-powered live dispatch tracking, and zero-trust auth integrations.",
    badge: "Frontend & Realtime Auth",
    accentColor: "#6366f1",
    techStack: ["React", "Custom Hooks", "JWT", "Firebase", "WebSockets"],
    tech: ["React", "Custom Hooks", "JWT", "Firebase", "WebSockets"],
    bullets: [
      "Built an enterprise Vehicle Service Booking Portal featuring modular atomic components and reactive custom hook architectures.",
      "Integrated multi-stage service workflows, payment reconciliation, and resilient JWT/Firebase authentication layers.",
      "Engineered live telemetric order tracking via bi-directional WebSockets and intelligent API polling fallback.",
      "Optimized frontend bundle and asset caching for instantaneous page loads and fluid cross-device experiences."
    ],
    highlights: [
      "Modular atomic architecture with reactive custom hooks",
      "Bi-directional WebSocket live telemetry and order tracking",
      "Hardened JWT & Firebase zero-trust authentication workflows"
    ]
  },
  {
    id: "ai-nurse-matching",
    title: "AI-Based Clinical-Fit Matching System for Home Nursing",
    shortDesc: "Architected an intelligent healthcare dispatch engine utilizing FastAPI, MiniLM semantic vector embeddings, and Haversine geospatial proximity routing.",
    badge: "AI & GIS Infrastructure",
    accentColor: "#34d399",
    techStack: ["React.js", "FastAPI", "NLP", "MiniLM", "Haversine GIS"],
    tech: ["React.js", "FastAPI", "NLP", "MiniLM", "Haversine GIS"],
    bullets: [
      "Architected an AI-powered clinical matching engine using FastAPI, React.js, and advanced NLP for optimal nurse-patient allocation.",
      "Deployed semantic vector embeddings via MiniLM and cosine similarity to match complex patient diagnoses with clinical skill matrices.",
      "Engineered geospatial filtering utilizing Haversine proximity formulas, slashing emergency nurse response dispatch times.",
      "Constructed a real-time pre-confirmation WebSocket messaging hub to maintain clinical transparency and patient safety."
    ],
    highlights: [
      "Semantic vector matching via MiniLM embeddings & cosine similarity",
      "Haversine GIS spatial proximity algorithms for rapid nurse routing",
      "Low-latency real-time pre-confirmation clinical communication hub"
    ]
  },
  {
    id: "digital-coupon-platform",
    title: "Digital Coupon Platform",
    shortDesc: "Developed a distributed Spring Boot microservice with Spring Data JPA, AOP-driven telemetry logging, and dynamic multi-criteria query optimization.",
    badge: "Backend Microservice",
    accentColor: "#fbbf24",
    techStack: ["Spring Boot", "Spring Data JPA", "REST API", "AOP Logging"],
    tech: ["Spring Boot", "Spring Data JPA", "REST API", "AOP Logging"],
    bullets: [
      "Developed a robust RESTful microservice backend with Spring Boot and Spring Data JPA delivering full transactional CRUD operations.",
      "Designed dynamic multi-criteria query endpoints with pagination, cursor sorting, and cached metadata retrieval.",
      "Applied Aspect-Oriented Programming (AOP) for distributed tracing, execution logging, and audit compliance.",
      "Leveraged Dependency Injection and multi-tier architectural separation to ensure horizontal scalability."
    ],
    highlights: [
      "Transactional Spring Boot & Spring Data JPA microservice architecture",
      "AOP-based execution tracing and audit logging infrastructure",
      "Dynamic multi-criteria query optimization with pagination & caching"
    ]
  }
];

export const INTERNSHIPS = [
  {
    role: "Junior Web Developer",
    company: "Nanlogical Consultancy Services Pvt Ltd",
    location: "Chennai, India",
    period: "07/2024 – 09/2024 & 05/2025 – 06/2025",
    type: "Internship",
    description: "Architected production-ready web interfaces, integrated secure RESTful API microservices, and optimized database pipelines for enterprise web applications.",
    tags: ["React", "Web Development", "REST APIs", "Node.js"]
  }
];

export const EXPERIENCE = INTERNSHIPS;

export const EDUCATION_AND_CERTIFICATIONS = [
  "B.E Computer Science and Engineering — Sri Krishna College of Technology, Coimbatore, TN (8.6 / 10 CGPA)",
  "Python Essentials 1 & 2 — Cisco Networking Academy",
  "Introduction to Cybersecurity — Cisco Networking Academy",
  "Cybersecurity Analyst Job Simulation — Forage TATA",
  "Cloud Computing, Mobile VR & AI, Effective Writing — NPTEL Elite + Silver Certification",
  "Java Programming, Data Structures & Algorithms — Infosys Springboard"
];

export const EDUCATION = [
  {
    degree: "B.E Computer Science and Engineering",
    institution: "Sri Krishna College of Technology",
    location: "Coimbatore, TN",
    grade: "8.6 / 10 CGPA",
    details: "Specialized in Full Stack Web Development, Distributed Systems, Algorithms, Machine Learning, and Cloud Computing."
  }
];

export const CERTIFICATIONS = [
  { title: "Python Essentials 1 & 2", issuer: "Cisco Networking Academy", year: "Verified", badge: "Cisco" },
  { title: "Introduction to Cybersecurity", issuer: "Cisco Networking Academy", year: "Verified", badge: "Cisco" },
  { title: "Cybersecurity Analyst Simulation", issuer: "Forage TATA", year: "Verified", badge: "TATA" },
  { title: "Cloud Computing, Mobile VR & AI, Effective Writing", issuer: "NPTEL", year: "Verified", badge: "Elite + Silver" },
  { title: "Java Programming, Data Structures & Algorithms", issuer: "Infosys Springboard", year: "Verified", badge: "Infosys" }
];
