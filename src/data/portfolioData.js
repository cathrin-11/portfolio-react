export const PERSONAL_INFO = {
  name: "CATHRIN R",
  title: "FULL STACK DEVELOPER",
  email: "cathrin1103@gmail.com",
  phone: "+91 6369838636",
  location: "Coimbatore, India",
  github: "https://github.com/Cathrin-11",
  linkedin: "https://linkedin.com/in/Cathrin-R",
  bio: "I’m driven by a passion for coding and problem-solving. I'm excited to join a team where I can grow, innovate, and make a real impact. With a strong foundation in programming, I'm eager to learn and contribute to a dynamic organization. I'm looking for a collaborative environment that fosters creativity and growth.",
  objective: "I’m driven by a passion for coding and problem-solving. I'm excited to join a team where I can grow, innovate, and make a real impact. With a strong foundation in programming, I'm eager to learn and contribute to a dynamic organization. I'm looking for a collaborative environment that fosters creativity and growth."
};

export const SKILLS = [
  "React",
  "REST API",
  "C++",
  "Java",
  "Python",
  "MYSQL",
  "Machine Learning",
  "Data Analysis",
  "AWS Cloud"
];

export const SKILL_CATEGORIES = [
  {
    id: "core-stack",
    title: "Core Technical Stack",
    skills: SKILLS.map(skill => ({ name: skill, level: 90, tag: "PRO" }))
  }
];

export const PROJECTS = [
  {
    id: "yoga-instructor-app",
    title: "Yoga Instructor Application",
    shortDesc: "Built a full-stack Yoga Instructor Booking application using React.js, Node.js and MongoDB.",
    badge: "Full Stack",
    accentColor: "#a3e635",
    techStack: ["React.js", "Node.js", "MongoDB", "RESTful APIs"],
    tech: ["React.js", "Node.js", "MongoDB", "RESTful APIs"],
    bullets: [
      "Built a full-stack Yoga Instructor Booking application using React.js, Node.js and MongoDB.",
      "Developed RESTful APIs to manage user authentication, instructor profiles, session bookings, and schedules.",
      "Designed responsive frontend interfaces with React for seamless user experience and real-time interaction.",
      "Implemented secure login, booking management, and role-based access for users and instructors.",
      "Integrated database operations using MongoDB and optimized backend performance for efficient data handling."
    ],
    highlights: [
      "Full-stack booking application using React.js, Node.js and MongoDB",
      "RESTful APIs for authentication, profiles, and schedules",
      "Secure login & role-based access for users and instructors"
    ]
  },
  {
    id: "vehicle-service-portal",
    title: "Vehicle Service Booking Portal",
    shortDesc: "Built a Vehicle Service Booking Portal using React with modular components and Hooks-based state management.",
    badge: "Frontend & Auth",
    accentColor: "#6366f1",
    techStack: ["React", "Custom Hooks", "JWT", "Firebase", "WebSockets"],
    tech: ["React", "Custom Hooks", "JWT", "Firebase", "WebSockets"],
    bullets: [
      "Built a Vehicle Service Booking Portal using React with modular, reusable components and Hooks-based state management.",
      "Integrated service listings, booking workflow, and secure authentication (JWT/Firebase/Auth libraries).",
      "Introduced live order tracking through API polling/Web Sockets for real-time status updates.",
      "Developed a responsive, optimized UI with clean navigation and seamless user interactions."
    ],
    highlights: [
      "Modular components & Hooks-based state management",
      "Live order tracking through API polling & WebSockets",
      "Integrated JWT/Firebase authentication workflows"
    ]
  },
  {
    id: "ai-nurse-matching",
    title: "AI-Based Clinical-Fit Matching System for Home Nursing",
    shortDesc: "Built an AI-driven healthcare matching system using React.js, FastAPI, and NLP techniques.",
    badge: "AI Healthcare",
    accentColor: "#34d399",
    techStack: ["React.js", "FastAPI", "NLP", "MiniLM", "Haversine GIS"],
    tech: ["React.js", "FastAPI", "NLP", "MiniLM", "Haversine GIS"],
    bullets: [
      "Built an AI-driven healthcare matching system using React.js, FastAPI, and NLP techniques for intelligent nurse patient allocation.",
      "Implemented semantic matching using MiniLM embeddings and cosine similarity to accurately map patient requirements with nurse skills.",
      "Integrated location-based filtering using the Haversine formula to ensure efficient and practical nurse assignment.",
      "Developed an interactive pre-confirmation chat system to improve communication, transparency, and trust between patients and nurses."
    ],
    highlights: [
      "Semantic matching using MiniLM embeddings & cosine similarity",
      "Location-based GIS filtering via Haversine formula",
      "Interactive pre-confirmation WebSocket chat system"
    ]
  },
  {
    id: "digital-coupon-platform",
    title: "Digital Coupon Platform",
    shortDesc: "Developed a RESTful backend using Spring Boot and Spring Data JPA with full CRUD functionality.",
    badge: "Backend Microservice",
    accentColor: "#fbbf24",
    techStack: ["Spring Boot", "Spring Data JPA", "REST API", "AOP Logging"],
    tech: ["Spring Boot", "Spring Data JPA", "REST API", "AOP Logging"],
    bullets: [
      "Developed a RESTful backend using Spring Boot and Spring Data JPA with full CRUD functionality.",
      "Added pagination, sorting, and custom query endpoints for flexible data retrieval.",
      "Applied AOP-based logging to maintain clean observability and modular architecture.",
      "Utilized Dependency Injection and layered design to support scalability and maintainability."
    ],
    highlights: [
      "Full CRUD RESTful backend using Spring Boot & Spring Data JPA",
      "AOP-based logging for observability & clean architecture",
      "Custom query endpoints with pagination & sorting"
    ]
  }
];

export const INTERNSHIPS = [
  {
    role: "Junior Web Developer",
    company: "Nanlogical Consultancy Services Pvt Ltd",
    location: "Chennai , India",
    period: "07/2024 – 09/2024 & 05/2025 - 06/2025",
    type: "Internship",
    description: "Built responsive web applications, RESTful API integrations, and database operations during junior web developer tenure.",
    tags: ["React", "Web Development", "REST APIs", "Node.js"]
  }
];

export const EXPERIENCE = INTERNSHIPS;

export const EDUCATION_AND_CERTIFICATIONS = [
  "B.E Computer Science and Engineering - Sri Krishna College of Technology, Coimbatore, TN CGPA - 8.6/10",
  "Python Essentials 1 & 2 Cisco Networking Academy",
  "Introduction to Cybersecurity Cisco Networking Academy",
  "Cybersecurity Analyst Job Simulation – Forage TATA",
  "Cloud Computing , Mobile Virtual Reality and Artificial Intelligence, Effective Writing- NPTEL Elite + Silver certification",
  "Java Programming, Data Structures and Algorithms - Infosys springboard"
];

export const EDUCATION = [
  {
    degree: "B.E Computer Science and Engineering",
    institution: "Sri Krishna College of Technology",
    location: "Coimbatore, TN",
    grade: "8.6 / 10 CGPA",
    details: "Specialized in Full Stack Web Development, Software Engineering, Data Structures, Algorithms, and Cloud Computing."
  }
];

export const CERTIFICATIONS = [
  { title: "Python Essentials 1 & 2", issuer: "Cisco Networking Academy", year: "Verified", badge: "Cisco" },
  { title: "Introduction to Cybersecurity", issuer: "Cisco Networking Academy", year: "Verified", badge: "Cisco" },
  { title: "Cybersecurity Analyst Simulation", issuer: "Forage TATA", year: "Verified", badge: "TATA" },
  { title: "Cloud Computing, Mobile VR & AI, Effective Writing", issuer: "NPTEL", year: "Verified", badge: "Elite + Silver" },
  { title: "Java Programming, Data Structures & Algorithms", issuer: "Infosys Springboard", year: "Verified", badge: "Infosys" }
];
