export const PERSONAL_INFO = {
  name: "CATHRIN R",
  title: "SOFTWARE DEVELOPMENT ENGINEER",
  role: "Full Stack & AI Engineer",
  email: "cathrin1103@gmail.com",
  phone: "+91 6369838636",
  location: "Coimbatore, India",
  github: "https://github.com/Cathrin-11",
  linkedin: "https://linkedin.com/in/Cathrin-R",
  bio: "Software Development Engineer specializing in full-stack web architectures, distributed backend APIs, and computer vision / machine learning systems. Experienced in React, Node.js, Spring Boot, Python, and AI-driven interactive applications with a relentless commitment to clean code and high performance.",
  objective: "I’m driven by a passion for coding and problem-solving. I'm excited to join a team where I can grow, innovate, and make a real impact. With a strong foundation in programming, I'm eager to learn and contribute to a dynamic organization. I'm looking for a collaborative environment that fosters creativity and growth."
};

export const SKILLS = [
  "React.js",
  "Node.js",
  "REST APIs",
  "Spring Boot",
  "Python",
  "Java",
  "C++",
  "MySQL",
  "MongoDB",
  "AWS Cloud",
  "Machine Learning",
  "Data Analysis",
  "TensorFlow & CNN",
  "OpenCV & MediaPipe",
  "FastAPI",
  "WebSockets"
];

export const SKILL_CATEGORIES = [
  {
    id: "languages",
    title: "Programming Languages",
    skills: ["Java", "Python", "C++", "JavaScript", "SQL"]
  },
  {
    id: "frontend",
    title: "Frontend & UI Systems",
    skills: ["React.js", "Hooks / State Management", "Tailwind CSS", "HTML5 & CSS3", "Responsive UI/UX"]
  },
  {
    id: "backend",
    title: "Backend & APIs",
    skills: ["Node.js", "Spring Boot", "Spring Data JPA", "RESTful APIs", "FastAPI", "WebSockets & Polling"]
  },
  {
    id: "ai-cloud-data",
    title: "AI, Vision & Cloud",
    skills: ["OpenCV & MediaPipe", "TensorFlow & CNN", "Machine Learning & NLP", "MySQL & MongoDB", "AWS Cloud", "Data Analysis"]
  }
];

export const PROJECTS = [
  {
    id: "vehicle-service-portal",
    title: "Vehicle Service Booking Portal",
    shortDesc: "Built a Vehicle Service Booking Portal using React with modular, reusable components and Hooks-based state management, integrating live order tracking and secure auth.",
    badge: "Frontend & Realtime Auth",
    accentColor: "#6366f1",
    techStack: ["React", "Custom Hooks", "JWT", "Firebase", "WebSockets", "REST APIs"],
    tech: ["React", "Custom Hooks", "JWT", "Firebase", "WebSockets", "REST APIs"],
    bullets: [
      "Built a Vehicle Service Booking Portal using React with modular, reusable components and Hooks-based state management.",
      "Integrated service listings, booking workflow, and secure authentication (JWT/Firebase/Auth libraries).",
      "Introduced live order tracking through API polling/WebSockets for real-time status updates.",
      "Developed a responsive, optimized UI with clean navigation and seamless user interactions."
    ],
    highlights: [
      "Modular components & Hooks-based state management",
      "Live order tracking through API polling & WebSockets",
      "Integrated JWT/Firebase authentication workflows"
    ]
  },
  {
    id: "yoga-instructor-app",
    title: "Yoga Instructor Application",
    shortDesc: "Built a full-stack Yoga Instructor Booking application using React.js, Node.js, and MongoDB with secure role-based session scheduling.",
    badge: "Full Stack System",
    accentColor: "#a3e635",
    techStack: ["React.js", "Node.js", "MongoDB", "RESTful APIs", "JWT Auth"],
    tech: ["React.js", "Node.js", "MongoDB", "RESTful APIs", "JWT Auth"],
    bullets: [
      "Built a full-stack Yoga Instructor Booking application using React.js, Node.js, and MongoDB.",
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
    id: "ai-nurse-matching",
    title: "AI-Based Clinical-Fit Matching System for Home Nursing",
    shortDesc: "Built an AI-driven healthcare matching system using React.js, FastAPI, and NLP techniques for intelligent nurse-patient allocation.",
    badge: "AI Healthcare & GIS",
    accentColor: "#34d399",
    techStack: ["React.js", "FastAPI", "NLP", "MiniLM", "Haversine GIS", "WebSockets"],
    tech: ["React.js", "FastAPI", "NLP", "MiniLM", "Haversine GIS", "WebSockets"],
    bullets: [
      "Built an AI-driven healthcare matching system using React.js, FastAPI, and NLP techniques for intelligent nurse-patient allocation.",
      "Implemented semantic matching using MiniLM embeddings and cosine similarity to accurately map patient requirements with nurse skills.",
      "Integrated location-based filtering using the Haversine formula to ensure efficient and practical nurse assignment.",
      "Developed an interactive pre-confirmation chat system to improve communication, transparency, and trust between patients and nurses.",
      "Designed a scalable architecture combining AI models, REST APIs, and a responsive frontend for real-time healthcare service delivery."
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
    shortDesc: "Developed a RESTful backend using Spring Boot and Spring Data JPA with full CRUD functionality, pagination, and AOP-based logging.",
    badge: "Backend Microservice",
    accentColor: "#fbbf24",
    techStack: ["Spring Boot", "Spring Data JPA", "REST API", "AOP Logging", "MySQL"],
    tech: ["Spring Boot", "Spring Data JPA", "REST API", "AOP Logging", "MySQL"],
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
  },
  {
    id: "ai-sign-language-detection",
    title: "AI-Based Sign Language Detection",
    shortDesc: "Built an AI-powered Sign Language Recognition system using TensorFlow, CNN, OpenCV, and MediaPipe for live real-time alphabet translation.",
    badge: "Deep Learning & Vision",
    accentColor: "#38bdf8",
    techStack: ["TensorFlow", "CNN", "OpenCV", "MediaPipe", "Python", "Sign MNIST"],
    tech: ["TensorFlow", "CNN", "OpenCV", "MediaPipe", "Python", "Sign MNIST"],
    bullets: [
      "Built an AI-powered Sign Language Recognition system using TensorFlow, CNN, OpenCV, and MediaPipe.",
      "Designed a pipeline that interprets hand signs in real time using live webcam input.",
      "Trained and optimized the model on the Sign MNIST dataset, achieving high classification accuracy.",
      "Delivered instant translation of gestures into alphabet characters for improved accessibility."
    ],
    highlights: [
      "Real-time hand sign interpretation from live webcam input",
      "High accuracy CNN model trained on Sign MNIST dataset",
      "Instant alphabet translation for enhanced accessibility"
    ]
  },
  {
    id: "gesture-driven-drone-simulator",
    title: "Gesture-Driven Drone Simulator",
    shortDesc: "Developed an interactive gesture-controlled drone simulator using Python, OpenCV, and MediaPipe mapping hand actions in a 3D environment.",
    badge: "Computer Vision & Simulation",
    accentColor: "#a855f7",
    techStack: ["Python", "OpenCV", "MediaPipe", "3D Simulation", "Gesture Mapping"],
    tech: ["Python", "OpenCV", "MediaPipe", "3D Simulation", "Gesture Mapping"],
    bullets: [
      "Developed a gesture-controlled drone simulator using Python, OpenCV, and MediaPipe.",
      "Applied hand-gesture commands for actions such as hovering, landing, and directional control in a 3D environment.",
      "Crafted an interactive simulation showcasing gesture-to-action mapping and intuitive drone control.",
      "Designed a smooth visualization layer to support responsive, real-time interaction."
    ],
    highlights: [
      "Hand-gesture commands for 3D drone hovering, landing & directional control",
      "Interactive real-time gesture-to-action mapping pipeline",
      "Smooth computer vision visualization layer in Python"
    ]
  },
  {
    id: "emotion-detection-app",
    title: "Emotion Detection App",
    shortDesc: "Created a real-time facial emotion recognition application using Deep Learning, Computer Vision, and CNNs to classify affective states via webcam.",
    badge: "Affective Computing",
    accentColor: "#f43f5e",
    techStack: ["Deep Learning", "Computer Vision", "CNN", "OpenCV", "Python"],
    tech: ["Deep Learning", "Computer Vision", "CNN", "OpenCV", "Python"],
    bullets: [
      "Created a real-time facial emotion recognition application using Deep Learning and Computer Vision.",
      "Applied a CNN-based architecture to classify emotions such as happy, sad, angry, and neutral through webcam input.",
      "Developed a live facial analysis module for accurate affective state detection.",
      "Demonstrated expertise in affective computing and intelligent human–machine interaction."
    ],
    highlights: [
      "CNN-based real-time facial emotion classification (happy, sad, angry, neutral)",
      "Live webcam facial analysis module for affective state detection",
      "Intelligent human-machine interaction pipeline"
    ]
  },
  {
    id: "air-canvas",
    title: "Air Canvas Gesture Drawing",
    shortDesc: "Designed an AI-driven Air Canvas using OpenCV and MediaPipe for midair finger-tracking drawing with gesture-based color selection.",
    badge: "AI Vision & Interaction",
    accentColor: "#eab308",
    techStack: ["OpenCV", "MediaPipe", "Python", "Gesture Recognition", "HCI"],
    tech: ["OpenCV", "MediaPipe", "Python", "Gesture Recognition", "HCI"],
    bullets: [
      "Designed an AI-driven Air Canvas using OpenCV and MediaPipe for gesture-based drawing.",
      "Engineered finger-tracking to draw in midair without any physical input device.",
      "Added gesture-controlled color selection, eraser mode, and smooth drawing flow.",
      "Delivered real-time gesture recognition to enhance natural human–computer interaction."
    ],
    highlights: [
      "Touchless midair drawing via optical finger-tracking",
      "Gesture-controlled color selection, brush sizing, and eraser modes",
      "Real-time computer vision pipeline powered by MediaPipe & OpenCV"
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
    description: "Built responsive web applications, integrated secure RESTful API endpoints, and optimized database handling during Junior Web Developer tenure.",
    tags: ["React", "Web Development", "REST APIs", "Node.js", "MySQL"]
  }
];

export const EXPERIENCE = INTERNSHIPS;

export const EDUCATION_AND_CERTIFICATIONS = [
  "B.E Computer Science and Engineering — Sri Krishna College of Technology, Coimbatore, TN (CGPA: 8.5 / 10)",
  "Python Essentials 1 & 2 — Cisco Networking Academy",
  "Introduction to Cybersecurity — Cisco Networking Academy",
  "Cybersecurity Analyst Job Simulation — Forage TATA",
  "Cloud Computing — NPTEL Elite + Silver Certification",
  "Mobile Virtual Reality and Artificial Intelligence — NPTEL Elite + Silver Certification",
  "Effective Writing — NPTEL Elite + Silver Certification",
  "Java Programming, Data Structures and Algorithms — Infosys Springboard"
];

export const EDUCATION = [
  {
    degree: "B.E Computer Science and Engineering",
    institution: "Sri Krishna College of Technology",
    location: "Coimbatore, TN",
    grade: "8.5 / 10 CGPA",
    details: "Specialized in Computer Science, Full Stack Web Development, Deep Learning, Computer Vision, Algorithms, and Cloud Systems."
  }
];

export const CERTIFICATIONS = [
  { title: "Python Essentials 1 & 2", issuer: "Cisco Networking Academy", year: "Verified", badge: "Cisco" },
  { title: "Introduction to Cybersecurity", issuer: "Cisco Networking Academy", year: "Verified", badge: "Cisco" },
  { title: "Cybersecurity Analyst Simulation", issuer: "Forage TATA", year: "Verified", badge: "TATA" },
  { title: "Cloud Computing", issuer: "NPTEL", year: "Verified", badge: "Elite + Silver" },
  { title: "Mobile VR & Artificial Intelligence", issuer: "NPTEL", year: "Verified", badge: "Elite + Silver" },
  { title: "Effective Writing", issuer: "NPTEL", year: "Verified", badge: "Elite + Silver" },
  { title: "Java Programming, Data Structures & Algorithms", issuer: "Infosys Springboard", year: "Verified", badge: "Infosys" }
];
