const portfolioData = {
  // ---------------hero section--------------------
  hero: {
    intro: "WELCOME TO MY WORLD",
    name: "Gauri Bhasme",
    title: "Full Stack Learner | Aspiring Software Developer",
    description:
      "I build modern web experiences that are clean, responsive, and user-friendly.",
    image: "./assets/profile-photo.jpeg",
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
      { icon: "fa-solid fa-envelope", link: "mailto:gauribhasme43@gmail.com" },
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
    //   result: "",
    //   reflection: "",
    //   github: "#",
    //   demo: "#"
    // }
    {
      name: "HackTrack - Hackathon Management Platform",
      id: "project-hacktrack",
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
      live: "https://hacktrack-six.vercel.app/",
      problem: "Hackathon workflows were scattered across multiple tools, making teams, tasks, deadlines, and submissions difficult to track.",
      approach: "Built a centralized platform with role-aware workflows, a live dashboard, and REST APIs for managing the full hackathon lifecycle.",
      impact: "Gives organizers and participants one place to coordinate work and follow progress.",
    },
    {
      name: "SkillSync AI",
      id: "project-skillsync-ai",
      tag: "AI Automation",
      description:
        "An AI-powered platform for matching skills and learning opportunities to support personalized growth.",
      github: "https://github.com/Gauri-2044/SkillSync-AI",
      features: [
        "Multi-stage AI workflow orchestration",
        "Semantic matching of projects and job requirements",
        "Human-in-the-loop recommendations",
        "Reduced preparation time from ~25 to ~7 minutes per application",
      ],
      tech: ["Node.js", "Express.js", "Gemini API", "n8n", "LaTeX"],
      live: "https://skill-sync-brown.vercel.app/",
      problem: "Learners need clearer, more personalized ways to connect their skills with useful learning opportunities.",
      approach: "Built an AI-assisted platform that analyzes skills and supports personalized recommendations.",
      impact: "Helps users understand their skills and plan more focused learning.",
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
      problem: "Important college notifications and academic documents were difficult to discover in scattered sources.",
      approach: "Combined retrieval-augmented generation with ID-card scanning to make trusted college information searchable.",
      impact: "Creates a faster, more accessible way for students to find relevant academic information.",
    },
    {
      name: "AmraSetu - AI-Powered Community Platform",
      id: "project-amrasetu",
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
      live: "https://amra-setu-j4no.vercel.app",
      video: "https://drive.google.com/file/d/1ixHjSotQOtfg94KeA9iHkrjksNvZ1Ken/view?usp=sharing",
      problem: "Local information was hard to access across language and information barriers.",
      approach: "Built multilingual intent detection and database-backed retrieval with an AI conversational layer.",
      impact: "Won the Amravati AI Community Hackathon and connects users with relevant local information.",
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
      video: "https://drive.google.com/file/d/1QvhiVRHYUr3v0-D0zetlY4nkU7pl8XIM/view?usp=sharing",
      problem: "Sensitive personal information can be accidentally exposed when sending OSINT context to external AI services.",
      approach: "Detected and masked PII before analysis, then returned structured risk insights through a containerized service.",
      impact: "Adds a privacy layer between sensitive research data and LLM processing.",
    },
    {
      name: "MoodMap",
      id: "project-moodmap",
      tag: "AI/ML + Full Stack Development",
      description:
        "An AI/ML-powered mental well-being platform for interactive assessments and personalized feedback.",
      github: "https://github.com/Amisha-1580/Mental_Health_Web_App",
      live: "https://moodmap-yjyt.onrender.com/",
      features: [
        "User registration and authentication",
        "Interactive mental well-being assessments",
        "AI/ML-powered assessment functionality",
        "Personalized feedback and user dashboard",
      ],
      tech: ["React.js", "Python", "Flask", "MySQL", "JWT", "Machine Learning"],
      problem:
        "People need an accessible way to understand their mental well-being through a guided digital experience.",
      approach:
        "Built a React frontend, Flask APIs, JWT authentication, MySQL persistence, and AI/ML-powered assessment workflows.",
      impact:
        "Helps users better understand their mental well-being through structured assessments and meaningful feedback.",
    },
    {
      name: "Pharmacy AI",
      id: "project-pharmacyai",
      tag: "AI / Full Stack",
      description:
        "An AI-powered pharmacy application that supports conversational medicine discovery, ordering, and pharmacy operations.",
      github: "https://github.com/Gauri-2044/pharmacyautomation",
      live: "https://pharmacy-ai-tan.vercel.app/",
      features: [
        "Conversational medicine ordering",
        "Natural-language medicine search",
        "Pharmacy inventory management",
        "Order creation and cancellation",
      ],
      tech: ["Python", "PostgreSQL", "LangChain", "LangFuse"],
      problem:
        "Medicine discovery and pharmacy operations can be difficult to manage through disconnected workflows.",
      approach:
        "Built a natural-language chatbot connected to pharmacy inventory, ordering, payment, and database workflows.",
      impact:
        "Makes medicine discovery and pharmacy ordering more accessible through conversation.",
    },
    {
      name: "Digital Waste Cleaner",
      id: "project-digital-waste-cleaner",
      tag: "AI / Environmental Technology",
      description:
        "An AI-powered platform designed to simplify garbage-cleaning activities through smart technology.",
      github: "https://github.com/GauriBhasme/EcoByteAI",
      live: "",
      features: [
        "AI-powered intelligent functionality",
        "Technology-driven garbage-cleaning assistance",
        "Smart approach towards environmental cleanliness",
      ],
      tech: ["AI / ML"],
      problem:
        "Traditional garbage-cleaning processes require significant manual effort.",
      approach:
        "Designed an intelligent platform to support and simplify garbage-cleaning activities.",
      impact:
        "Aims to make environmental cleanliness activities easier and more efficient.",
    },
    {
      name: "Food Save App",
      id: "project-food-save-app",
      tag: "Mobile / AI",
      description:
        "A food redistribution application connecting surplus food from individuals and events with NGOs and people in need.",
      github: "",
      live: "",
      features: [
        "Food donation and sharing",
        "Connection between donors and NGOs",
        "Google Gemini AI integration",
      ],
      tech: ["Mobile Development", "Google Gemini"],
      problem:
        "Food wastage and communication gaps make it difficult to connect surplus food with people who need it.",
      approach:
        "Built a platform for donors, event organizers, NGOs, and recipients to coordinate food redistribution.",
      impact:
        "Supports more effective food sharing and helps reduce avoidable food waste.",
    },
    {
      name: "Maza Pandurang App",
      id: "project-maza-pandurang",
      tag: "Community Technology",
      description:
        "A technology-based solution focused on addressing the needs and challenges of the Warkari community.",
      github: "",
      live: "",
      features: ["Community-focused digital experience", "Technology-assisted support for Warkaris"],
      tech: ["Mobile Development"],
      problem: "Warkaris face challenges that can be supported through accessible technology.",
      approach:
        "Designed a digital solution focused on the needs and challenges of the Warkari community.",
      impact: "Aims to make useful support and information more accessible to Warkaris.",
    },
    {
      name: "StudentSharedLearning",
      id: "project-student-shared-learning",
      tag: "Education Platform",
      description:
        "A collaborative platform for students to share learning resources and support peer learning.",
      github: "https://github.com/GauriBhasme/StudentSharedLearning",
      live: "",
      features: ["Student resource sharing", "Peer learning support"],
      tech: ["Web Development"],
      problem: "Students benefit from a central space to share useful academic resources.",
      approach: "Created a student-focused platform for sharing and discovering learning material.",
      impact: "Encourages collaborative learning and easier access to peer resources.",
    },
    {
      name: "LedgerLens",
      id: "project-ledgerlens",
      tag: "AI Automation",
      description:
        "An AI agent application for working with ledger and financial data.",
      github: "https://github.com/Gauri-2044/LedgerLens_Agent",
      live: "https://ledger-lens-frontend.vercel.app/",
      video: "https://drive.google.com/file/d/1uPqbbQvLXoAkKc6lGCumBTjgfue5DIa1/view",
      features: ["AI-assisted ledger analysis", "Financial data workflow automation"],
      tech: ["AI", "Agentic AI"],
      problem: "Ledger data can be time-consuming to inspect and interpret manually.",
      approach: "Built an AI agent workflow to help users work with ledger information more efficiently.",
      impact: "Supports faster exploration and understanding of ledger data.",
    },
  ],

  qaExperience: [
    {
      id: "qa-experience-01",
      title: "Software Testing & Quality Assurance",
      experienceType: "Hands-on Project Testing",
      description:
        "Practical manual testing experience across personal projects and peer-developed web applications, including final-year projects.",
      contributions: [
        "Performed manual testing of small web applications and peer-developed projects.",
        "Explored application workflows and verified expected behaviour.",
        "Identified unexpected behaviour and usability issues.",
        "Validated user flows and documented reproducible observations.",
        "Currently building a structured QA approach with test cases and scenarios.",
      ],
      testingSkills: [
        "Manual Website Testing",
        "Functional Testing",
        "User Flow Validation",
        "UI Testing",
        "Issue Identification",
        "Test Case Development",
        "Bug Reporting",
        "Postman",
        "Git",
        "GitHub",
        "SDLC",
        "STLC",
      ],
      testingActivities: [
        "Functional validation",
        "UI and usability checks",
        "Workflow testing",
        "Expected vs actual behaviour verification",
        "Issue documentation",
      ],
    },
  ],

  internships: [
    {
      id: "deloitte-cybersecurity-2025",
      title: "Cybersecurity Job Simulation",
      organization: "Deloitte Australia",
      platform: "Forage",
      experienceType: "Virtual Job Simulation",
      date: "July 2025",
      domain: "Cybersecurity",
      description:
        "Completed a simulated cybersecurity incident investigation experience.",
      contributions: [
        "Analyzed web activity logs in a simulated incident scenario.",
        "Identified suspicious behaviour and documented investigation observations.",
        "Worked through cybersecurity investigation workflows.",
      ],
      skills: [
        "Log Analysis",
        "Incident Investigation",
        "Threat Detection",
        "Cybersecurity Analysis",
      ],
    },
    {
      id: "mastercard-cybersecurity-2025",
      title: "Cybersecurity Analyst Virtual Experience",
      organization: "Mastercard",
      platform: "Forage",
      experienceType: "Virtual Job Simulation",
      date: "August 2025",
      domain: "Cybersecurity",
      description:
        "Completed a cybersecurity analyst simulation focused on phishing-related analysis and security awareness.",
      contributions: [
        "Worked through phishing-related analysis.",
        "Evaluated simulated cybersecurity findings.",
        "Considered security awareness measures based on the identified findings.",
      ],
      skills: [
        "Phishing Analysis",
        "Security Awareness",
        "Cybersecurity Analysis",
        "Risk Assessment",
      ],
    },
  ],

  hackathons: [
    {
      id: "technoverse-01",
      name: "Techsprint",
      organizer: "GDG on Campus",
      challengeType: "Open Innovation",
      problemSolved:
        "Food wastage and the communication gap between food donors, event organizers, NGOs, and people in need.",
      solution: {
        description:
          "Developed a mobile application connecting individuals and event organizers with surplus food to NGOs and people who need it.",
        features: [
          "Food donation and sharing platform",
          "Connection between donors and NGOs",
          "Google Gemini AI integration",
          "Smart features to make food redistribution more impactful",
        ],
        aiIntegration: "Google Gemini",
      },
      team: { role: "Team Lead" },
      linkedProjectId: "project-food-save-app",
      certificate: "./assets/images/hackathons/certs/techsprint.pdf",
      coverImage: "./assets/images/hackathons/cover_images/technoverse_hackathon.jpg",
    },
    {
      id: "hack-fusion-01",
      name: "Hack Fusion 3",
      organizer: "Manipal",
      location: "Nanded, Maharashtra",
      challengeType: "Hackathon",
      problemSolved:
        "Simplifying medicine discovery, ordering, and pharmacy operations through an intelligent conversational interface.",
      solution: {
        projectName: "AI Pharmacy",
        description:
          "Developed an AI-powered pharmacy application with a natural-language chatbot that allows users to interact with a pharmacy system and place medicine orders conversationally.",
        features: [
          "AI-powered conversational medicine ordering",
          "Natural-language medicine search",
          "Pharmacy inventory management",
          "Order creation and management",
          "Order cancellation functionality",
          "Payment workflow integration",
          "Database-backed pharmacy operations",
        ],
        aiIntegration: ["LangChain", "LangFuse for LLM monitoring and observability"],
      },
      techStack: ["Python", "PostgreSQL", "LangChain", "LangFuse"],
      linkedProjectId: "project-pharmacyai",
      certificate: "./assets/images/hackathons/certs/hackfusion3.png",
      coverImage: "./assets/images/hackathons/cover_images/hackfusion_hackathon.jpg",
    },
    {
      id: "warithon-01",
      name: "Warithon",
      location: "Pune, Maharashtra",
      challengeType: "Hackathon",
      problemSolved: "Addressing challenges faced by Warkaris through technology.",
      solution: {
        description:
          "Developed a technology-based solution focused on addressing the needs and challenges of the Warkari community.",
      },
      linkedProjectId: "project-maza-pandurang",
      certificate: "./assets/images/hackathons/certs/varithon.pdf",
      coverImage: "./assets/images/hackathons/cover_images/varithon_hackathon.jpg",
    },
    {
      id: "ai-amravati-01",
      name: "AI Amravati Hackathon",
      location: "Amravati, Maharashtra",
      challengeType: "AI / Innovation Hackathon",
      problemSolved:
        "The lack of a centralized, intelligent, and trustworthy digital platform providing residents with easy access to local information, businesses, services, events, and community resources.",
      solution: {
        projectName: "AmraSetu",
        description:
          "Developed AmraSetu, an AI-powered hyperlocal digital platform designed to connect Amravati residents with local businesses, services, events, and useful city information.",
        features: [
          "AI-powered conversational city assistant",
          "Hyperlocal business and service discovery",
          "Smart recommendations based on relevance and location",
          "Community-driven information and reviews",
          "Multilingual support for Marathi, Hindi, and English",
          "Local events and announcements discovery",
          "AI-powered search and information retrieval",
          "RAG-based chatbot for contextual local information",
        ],
        aiIntegration: [
          "Generative AI",
          "Retrieval-Augmented Generation (RAG)",
          "Intelligent recommendations",
          "AI-powered conversational search",
        ],
      },
      techStack: ["React", "Tailwind CSS", "Node.js", "Python", "AI / LLM", "RAG", "PostgreSQL"],
      team: { role: "Project Lead" },
      achievement: {
        position: "2nd Rank",
        recognition: "Second Rank in AI Amravati Hackathon",
      },
      linkedProjectId: "project-amrasetu",
      certificate: "./assets/images/hackathons/certs/Amravati_Hackathon_Cert.jpg",
      coverImage: "./assets/images/hackathons/cover_images/AI_hackathon.jpg",
    },
    {
      id: "ecothon-01",
      name: "Ecothon",
      organizer: "SIP College of Engineering",
      location: "Amravati, Maharashtra",
      challengeType: "Environmental Innovation / Hackathon",
      problemSolved:
        "Traditional garbage-cleaning processes require significant manual effort and smarter technology-driven assistance.",
      solution: {
        description:
          "Developed an AI-powered intelligent platform focused on simplifying garbage-cleaning activities.",
        features: [
          "AI-powered intelligent functionality",
          "Technology-driven garbage-cleaning assistance",
          "Smart approach towards environmental cleanliness",
        ],
        aiIntegration: "AI-powered intelligent functionality",
      },
      linkedProjectId: "project-digital-waste-cleaner",
      certificate: "./assets/images/hackathons/certs/ecothon_cert.jpg",
      coverImage: "./assets/images/hackathons/cover_images/ecothon.jpg",
    },
    {
      id: "ensperanza-2024",
      name: "Ensperanza Project Competition 2024",
      challengeType: "Project Competition",
      problemSolved:
        "Developing an accessible digital experience to help users understand their mental well-being.",
      solution: {
        projectName: "MoodMap",
        description:
          "Developed an AI/ML-powered mental well-being platform with interactive assessments and personalized feedback.",
      },
      linkedProjectId: "project-moodmap",
    },
  ],

  // ---------------education section--------------------
  education: [
    {
      id: "education-01",
      degree: "B.Tech",
      field: "Computer Science and Engineering",
      institution: "Prof. Ram Meghe Institute of Technology and Research",
      startDate: "July 2023",
      endDate: "May 2027",
      status: "Pursuing",
      currentCGPA: "9.17/10",
      specialization: "Honors in Artificial Intelligence and Data Science",
      achievements: [
        "Current CGPA: 9.17/10.",
        "Recognized as an academic topper in the Computer Science and Engineering department.",
        "Received academic excellence recognition 3 Times.",
        "Recipient of the Lila Poonawalla Foundation scholarship.",
      ],
    },
    {
      id: "education-hsc-01",
      degree: "Higher Secondary Certificate (HSC)",
      field: "General Science (PCMB)",
      institution: "—",
      endDate: "Completed",
      achievements: ["Physics, Chemistry, Mathematics and Biology", "85.50%"],
    },
  ],

  // ---------------certifications section--------------------

  certifications: [
    { id: "cert-01", name: "CCNA 1 & CCNA 2", issuer: "Cisco Networking Academy", domain: "Networking", certificate: "./assets/images/certificates/CCNA_certificate.pdf", whatILearned: ["Networking fundamentals", "Network communication and protocols", "Network infrastructure concepts"] },
    { id: "cert-02", name: "Cybersecurity Essentials", issuer: "Cisco Networking Academy", domain: "Cybersecurity", whatILearned: ["Cybersecurity fundamentals", "Common cyber threats and vulnerabilities", "Security principles and risk awareness"] },
    { id: "cert-03", name: "CyberOps Associate", issuer: "Cisco Networking Academy", domain: "Security Operations", certificate: "./assets/images/certificates/CyberOps_Certificate_Cisco.pdf", whatILearned: ["Security operations fundamentals", "Security monitoring and incident analysis", "Cyber threat detection concepts"] },
    { id: "cert-04", name: "Cyber Threat Intelligence", issuer: "Cisco Networking Academy", domain: "Threat Intelligence", whatILearned: ["Cyber threat intelligence fundamentals", "Threat identification and analysis"] },
    { id: "cert-05", name: "Junior Cybersecurity Analyst Career Path", issuer: "Cisco Networking Academy", domain: "Cybersecurity", certificate: "./assets/images/certificates/Junior_Cybersecurity_Analyst_Career_Path.pdf", whatILearned: ["Cybersecurity analysis fundamentals", "Security monitoring", "Threat investigation"] },
    { id: "cert-06", name: "Ethical Hacking", issuer: "NPTEL", domain: "Ethical Hacking", certificate: "./assets/images/certificates/NPTEL_Ethical_Hacking_Cert.pdf", whatILearned: ["Ethical hacking fundamentals", "Security assessment concepts", "Vulnerability analysis"] },
    { id: "cert-07", name: "AWS Cloud Quest - Security Badge", issuer: "Amazon Web Services", domain: "Cloud Security", whatILearned: ["AWS cloud security concepts", "Identity and Access Management", "Cloud security best practices"] },
    { id: "cert-08", name: "Python 101 for Security", issuer: "TCM Security", domain: "Programming / Cybersecurity", certificate: "./assets/images/certificates/Python100_TCM.pdf", whatILearned: ["Python programming fundamentals", "Security-focused Python scripting", "Automation concepts"] },
    { id: "cert-09", name: "JavaScript Essentials 1", issuer: "Cisco Networking Academy", domain: "Programming", certificate: "./assets/images/certificates/JavaScript_Essentials_1 (1).pdf", whatILearned: ["JavaScript fundamentals", "Programming logic", "Core language concepts"] },
    { id: "cert-10", name: "Network Technician Career Path", issuer: "Cisco Networking Academy", domain: "Networking", certificate: "./assets/images/certificates/Network_Technician_Career_Path.pdf", whatILearned: ["Networking foundations", "Network troubleshooting", "Network technician skills"] },
    { id: "cert-11", name: "Postman API Fundamentals Student Expert", issuer: "Postman", domain: "API Development", certificate: "./assets/images/certificates/Postman - Postman API Fundamentals Student Expert - 2025-09-27.png", coverImage: "./assets/images/certificates/Postman - Postman API Fundamentals Student Expert - 2025-09-27.png", whatILearned: ["API requests and responses", "API testing with Postman", "Collection workflows"] },
    { id: "cert-12", name: "Postman Student Program", issuer: "Postman", domain: "API Development", certificate: "./assets/images/certificates/Postman_Student_Program_Certificate.pdf", whatILearned: ["API development fundamentals", "Testing and documentation workflows"] },
    { id: "cert-13", name: "Data Analytics Essentials", issuer: "Cisco Networking Academy", domain: "Data Analytics", certificate: "./assets/images/certificates/Data_Analytics_Essentials.pdf", whatILearned: ["Data analysis fundamentals", "Data interpretation", "Analytical workflows"] },
    { id: "cert-14", name: "Operating Systems Basics", issuer: "Cisco Networking Academy", domain: "Operating Systems", certificate: "./assets/images/certificates/Operating_Systems_cert.pdf", whatILearned: ["Operating system concepts", "System management fundamentals"] },
    {
      id: "cert-hackfusion-03",
      name: "Hack Fusion 3 Certificate",
      issuer: "Manipal",
      domain: "Hackathon",
      certificate: "./assets/images/hackathons/certs/hackfusion3.png",
      coverImage: "./assets/images/hackathons/certs/hackfusion3.png",
      whatILearned: ["Built an AI-powered pharmacy application", "Collaborated in a hackathon team"],
    },
    {
      id: "cert-ecothon",
      name: "Ecothon Certificate",
      issuer: "SIP College of Engineering",
      domain: "Environmental Innovation / Hackathon",
      certificate: "./assets/images/hackathons/certs/ecothon_cert.jpg",
      coverImage: "./assets/images/hackathons/certs/ecothon_cert.jpg",
      whatILearned: ["Developed an AI-powered environmental solution", "Applied technology to garbage-cleaning challenges"],
    },
    {
      id: "cert-ai-amravati",
      name: "AI Amravati Hackathon Certificate",
      issuer: "AI Amravati Hackathon",
      domain: "AI / Innovation Hackathon",
      certificate: "./assets/images/hackathons/certs/Amravati_Hackathon_Cert.jpg",
      coverImage: "./assets/images/hackathons/certs/Amravati_Hackathon_Cert.jpg",
      whatILearned: ["Built AmraSetu, an AI-powered hyperlocal platform", "Achieved second rank in the hackathon"],
    },
  ],

  leadershipAndContributions: [
    {
      id: "cisco-coordinator-01",
      title: "Cisco Networking Academy Coordinator",
      organization: "Cisco Networking Academy",
      organizationType: "Campus Community",
      role: "Campus Coordinator",
      description:
        "Served as a campus coordinator, contributing to Web Development and Cybersecurity through workshops, events, and peer learning.",
      contributions: [
        "Contributed as a member of the Web Development domain.",
        "Contributed as a member of the Cybersecurity domain.",
        "Conducted Web Development workshops for students.",
        "Conducted Cybersecurity workshops to promote technical awareness.",
        "Organized and supported technical events and peer learning activities.",
      ],
      skills: ["Technical Leadership", "Workshop Coordination", "Web Development", "Cybersecurity", "Community Engagement"],
    },
  ],

  communities: [
    {
      id: "kc7-participant-01",
      title: "KC7 Cyber Investigation Challenges",
      organization: "KC7",
      role: "Active Participant",
      description:
        "Actively participate in cybersecurity investigation and threat-hunting scenarios through KC7, a platform developed by Microsoft employees.",
      contributions: [
        "Participate in simulated cyber incident investigations.",
        "Analyze clues and evidence to understand security incidents.",
        "Practice threat hunting through interactive scenarios.",
        "Develop practical cybersecurity investigation skills.",
      ],
      skills: ["Threat Hunting", "Cyber Investigation", "Incident Analysis", "Analytical Reasoning"],
      platform: "https://kc7cyber.com/",
    },
  ],

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
