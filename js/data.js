const portfolioData = {

    // ---------------hero section--------------------
    hero: {
    intro: "WELCOME TO MY WORLD",
    name: "Anna Smith",
    title: "Full Stack Learner | Aspiring Software Developer",
    description:
      "I build modern web experiences that are clean, responsive, and user-friendly.",
    image: "./assets/profile.jpg",

    socials: [
      { icon: "fab fa-github", link: "https://github.com/Anna-Smith" },
      { icon: "fab fa-linkedin", link: "https://www.linkedin.com/in/anna-smith" },
      { icon: "fab fa-instagram", link: "https://www.instagram.com/anna.smith" }
    ]
  },

  // ---------------about section--------------------
  about: {
    intro: "Hello! I'm Anna, a software developer based in India.",
    strengths: [
      "Problem-solving",
      "Adaptability",
      "Collaboration"
    ],
    goals: "To continuously learn and grow as a developer while contributing to meaningful projects."
  },

  // ---------------skills section--------------------
  skillsData: [
     {
    name: "HTML / CSS",
    years: 3,
    projects: 12,
    level: 90
  },
  {
    name: "JavaScript",
    years: 2,
    projects: 8,
    level: 80
  },
  {
    name: "React",
    years: 1,
    projects: 5,
    level: 70
  },
  {
    name: "Python",
    years: 2,
    projects: 6,
    level: 75
  }
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
    name: "Portfolio Website",
    tag: "Frontend",
    description: "A responsive personal portfolio with dynamic rendering and modern UI.",
    github: "https://github.com/Anna-Smith/portfolio",
    tech: ["HTML", "CSS", "JavaScript"]
  },
  {
    name: "Banking App",
    tag: "Full Stack",
    description: "A banking application with user authentication and transaction management.",
    github: "https://github.com/Anna-Smith/banking-app",
    tech: ["HTML", "CSS", "Flask", "SQLite"]
  },
  {
    name: "Mood Map",
    tag: "AI chatbot",
    description: "An AI-powered chatbot and mental health scoring platform for user support.",
    github: "https://github.com/Anna-Smith/mood-map",
    tech: ["HTML", "CSS", "JavaScript","Flask", "API", "Gemini"]
  }
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
      "Collaborated with backend team"
    ]
  },
  {
    tag: "Virtual Internship",
    duration: "Dec 2025 – Jan 2026",
    role: "Frontend Intern",
    location: "Remote",
    tasks: [
      "Developed modular UI components",
      "Improved responsiveness",
      "Optimized page performance"
    ]
  },
  {
    tag: "Team Project",
    duration: "Nov 2025",
    role: "Full Stack Contributor",
    location: "Academic Project",
    tasks: [
      "Designed database schema",
      "Implemented REST API",
      "Handled Git collaboration"
    ]
  }
  ],

  // ---------------education section--------------------
  education: [
    {
      degree: "",
      institution: "",
      highlights: []
    }
  ],

  // ---------------certifications section--------------------

  certifications: [
  ],

  // ---------------contact section--------------------

  contact: {
    email: "anna.smith@example.com",
    linkedin: "https://www.linkedin.com/in/anna-smith",
    github: "https://github.com/Anna-Smith"
  },

  interests: ["UI/UX Design", "Open Source Contribution", "Tech Blogging"]


};
