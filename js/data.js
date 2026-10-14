const portfolioData = {
  // ---------------hero section--------------------
  hero: {
    intro: "WELCOME TO MY WORLD",
    name: "Gauri Bhasme",
    title: "Full Stack Learner | Aspiring Software Developer",
    description:
      "I build modern web experiences that are clean, responsive, and user-friendly.",
    image: "./assets/profile-cutout.png",
    headline:
      "Building intelligent software. Engineering with security in mind.",
    // rotating role line (edit freely; keep to what is true for you)
    roles: [
      "Aspiring Software Developer",
      "Full-Stack Learner",
      "AI Application Builder",
      "Security-Minded Builder",
    ],
    floatingTech: [
      { icon: "fa-brands fa-js", label: "JavaScript" },
      { icon: "fa-brands fa-react", label: "React" },
      { icon: "fa-brands fa-python", label: "Python" },
      { icon: "fa-brands fa-html5", label: "HTML5" },
    ],

    socials: [
      { icon: "fab fa-github", link: "https://github.com/Gauri-2044" },
      {
        icon: "fab fa-linkedin",
        link: "https://www.linkedin.com/in/gauri-bhasme",
      },
      { icon: "fab fa-email", link: "mailto:gauribhasme43@gmail.com" },
    ],
  },

  // ---------------about section--------------------
  about: {
    intro: "Hello! I'm Gauri, a software developer based in India.",
    strengths: ["Problem-solving", "Adaptability", "Collaboration"],
    goals:
      "To continuously learn and grow as a developer while contributing to meaningful projects.",
    lead: "I learn by building things that work end to end.",
    paragraphs: [
      "I'm a passionate developer focused on creating modern, responsive, and user-friendly web experiences. I enjoy solving real problems through clean design and efficient code.",
      "I like understanding how the pieces of an application fit together: the interface, the Flask and REST API layer, the database, and AI services such as Gemini. Along the way I try to think about reliability, security, and the person using the product.",
    ],
    focus: [
      {
        icon: "fa-solid fa-code",
        title: "Full-stack development",
        text: "Responsive interfaces connected to Python/Flask back ends and SQLite databases.",
        tags: ["HTML/CSS", "JavaScript", "React", "Flask"],
      },
      {
        icon: "fa-solid fa-brain",
        title: "AI applications",
        text: "Adding LLM-powered features, like the Gemini chatbot in Mood Map, to real products.",
        tags: ["Python", "Gemini API"],
      },
      {
        icon: "fa-solid fa-shield-halved",
        title: "Security-minded engineering",
        text: "Authentication, input handling and safe defaults considered from the start.",
        tags: ["Auth", "Validation"],
      },
    ],
  },
  skillGroups: [
    {
      title: "Frontend",
      icon: "fa-solid fa-display",
      note: "Responsive, accessible interfaces.",
      items: ["HTML / CSS", "JavaScript", "React"],
    },
    {
      title: "Backend & data",
      icon: "fa-solid fa-server",
      note: "APIs and databases behind the UI.",
      items: ["Python", "Flask", "SQLite", "REST APIs"],
    },
    {
      title: "AI applications",
      icon: "fa-solid fa-brain",
      note: "LLM features inside real apps.",
      items: ["Gemini API", "RAG", "Model Training", "ML", "DL", "Agentic AI"],
    },
    {
      title: "Tools & teamwork",
      icon: "fa-solid fa-code-branch",
      note: "Collaboration workflow.",
      items: ["Git&Github", "Docker", "Linux"],
    },
  ],

  // ---------------skills section--------------------
  skillsData: [
    {
      name: "HTML / CSS",
      years: 3,
      projects: 12,
      level: 90,
    },
    {
      name: "JavaScript",
      years: 2,
      projects: 8,
      level: 80,
    },
    {
      name: "React",
      years: 1,
      projects: 5,
      level: 70,
    },
    {
      name: "Python",
      years: 2,
      projects: 6,
      level: 75,
    },
  ],

  // ---------------projects section--------------------
  projects: [
    // {
    //   title: "",
    //   problem: "",
    //   approach: "",
    //   tech: [],
    //   result: "",
    //   reflection: "",
    //   github: "#",
    //   demo: "#"
    // }
    {
      name: "HackTrack - Hackathon Management Platform",
      tag: "Full Stack",
      description:
        "Simplifies scattered hackathon workflows with a centralized platform for team management, tasks, deadlines, and submissions.",
      github: "https://github.com/Gauri-2044/HackTrack",
      features: [
        "15+ REST APIs",
        "JWT authentication and role-based access control",
        "Centralized hackathon and team workflows",
        "Live dashboard for managing activities",
      ],
      tech: ["React", "Node.js", "Express.js", "PostgreSQL", "Prisma"],
      live: "https://hack-track-dusky.vercel.app/",
    },
    {
      name: "AI Resume Agent",
      tag: "AI Automation",
      description:
        "Reduces repetitive job-application preparation by automating company research, job-description analysis, project matching, and resume generation.",
      github: "https://github.com/Gauri-2044/resume_agent",
      features: [
        "Multi-stage AI workflow orchestration",
        "Semantic matching of projects and job requirements",
        "Human-in-the-loop recommendations",
        "Reduced preparation time from ~25 to ~7 minutes per application",
      ],
      tech: ["Node.js", "Express.js", "Gemini API", "n8n", "LaTeX"],
      live: "",
    },
    {
      name: "College Document Intelligence Assistant",
      tag: "AI / RAG / Computer Vision",
      description:
        "Simplifies access to scattered college notifications, syllabi, and important documents through a RAG-based assistant with ID-card scanning.",
      github: "https://github.com/Gauri-2044/PRMITR_DOCUMENTRY",
      features: [
        "Retrieval-augmented generation over college documents",
        "Centralized access to academic information",
        "Computer-vision-based ID-card scanning",
        "AI-powered document discovery",
      ],
      tech: ["RAG", "LLM APIs", "Computer Vision"],
      live: "https://enterprise-rag-platf-q02e.bolt.host",
    },
    {
      name: "AmraSetu - AI-Powered Community Platform",
      tag: "AI / Full Stack",
      description:
        "Helps users discover relevant local information through a multilingual AI platform combining intent detection, database retrieval, and RAG.",
      github: "https://github.com/GauriBhasme/AmraSetu",
      features: [
        "Marathi, Hindi, and English support",
        "LLM-based intent detection",
        "PostgreSQL-backed information retrieval",
        "Winner of the Amravati AI Community Hackathon",
      ],
      tech: ["React", "Node.js", "Gemini API", "PostgreSQL", "RAG"],
      live: "https://amra-setu.vercel.app/",
    },
    {
      name: "AI OSINT Privacy Shield",
      tag: "Cybersecurity / Applied AI",
      description:
        "Reduces accidental exposure of sensitive information by detecting and masking personally identifiable information before external LLM processing.",
      github: "https://github.com/Gauri-2044/OSINTGuard",
      features: [
        "PII detection and masking with Microsoft Presidio",
        "Custom recognizers for sensitive data",
        "LLM-based contextual OSINT risk analysis",
        "Structured AI outputs and Docker deployment",
      ],
      tech: ["Python", "Microsoft Presidio", "Gemini", "Pydantic", "Docker"],
      live: "https://osint-guard-frontend.vercel.app/",
    },
  ],

  // ---------------experience section--------------------
  experience: [
    // {
    //   role: "",
    //   organization: "",
    //   responsibilities: [

    //   ],
    //   skillsUsed: [],
    //   outcome: ""
    // }
    {
      tag: "Hackathon",
      duration: "Jan 2026",
      role: "Team Web Developer — Smart Complaint System",
      location: "College Hackathon",
      tasks: [
        "Built responsive UI for complaint dashboard",
        "Integrated dynamic data rendering",
        "Collaborated with backend team",
      ],
    },
    {
      tag: "Virtual Internship",
      duration: "Dec 2025 – Jan 2026",
      role: "Frontend Intern",
      location: "Remote",
      tasks: [
        "Developed modular UI components",
        "Improved responsiveness",
        "Optimized page performance",
      ],
    },
    {
      tag: "Team Project",
      duration: "Nov 2025",
      role: "Full Stack Contributor",
      location: "Academic Project",
      tasks: [
        "Designed database schema",
        "Implemented REST API",
        "Handled Git collaboration",
      ],
    },
  ],

  // ---------------education section--------------------
  education: [
    {
      degree: "",
      institution: "",
      highlights: [],
    },
  ],

  // ---------------certifications section--------------------

  certifications: [],

  // ---------------contact section--------------------

  contact: {
    email: "gauribhasme43@gmail.com", // the address shown on the page (data previously had anna.smith@example.com)
    phone: "+91 9373932044",
    location: "Maharashtra, India",
    inquiryTypes: [
      "Job or internship",
      "Project collaboration",
      "Question",
      "Other",
    ],
    linkedin: "https://www.linkedin.com/in/gauri-bhasme",
    github: "https://github.com/Gauri-2044",
  },

  interests: ["UI/UX Design", "Open Source Contribution", "Tech Blogging"],

  // ---------------security & engineering principles--------------------
  principles: [
    {
      icon: "fa-solid fa-filter",
      title: "Validate every input",
      text: "Check data on the client for usability and again on the server for safety.",
    },
    {
      icon: "fa-solid fa-user-lock",
      title: "Authenticate, then authorize",
      text: "Know who the user is, then check what they may do, on every request.",
    },
    {
      icon: "fa-solid fa-key",
      title: "Keep secrets off the browser",
      text: "API keys and credentials live in server-side configuration, never in front-end code.",
    },
    {
      icon: "fa-solid fa-database",
      title: "Least-privilege data access",
      text: "Parameterised queries and narrow permissions around the database.",
    },
    {
      icon: "fa-solid fa-robot",
      title: "Treat AI input as untrusted",
      text: "Limit what goes to an LLM API and handle its output defensively.",
    },
    {
      icon: "fa-solid fa-bug",
      title: "Fail safely",
      text: "Clear errors for users, no internal details leaked, and tests for failure paths.",
    },
  ],
};
