/**
 * =========================================================================
 * 🌟 PORTFOLIO DATA CONFIGURATION FILE
 * =========================================================================
 * 
 * Edit anything in this file to instantly update your portfolio!
 * - Personal Information, Social Links, Bio
 * - Work Experience / Internships
 * - Featured Projects & Highlights
 * - Patents & Research Publications
 * - Technical & Soft Skills
 * - Education & Certifications
 * 
 * =========================================================================
 */

export const portfolioData = {
  // 1. Personal & Contact Information
  personal: {
    name: "Pandeeshwari M",
    title: "Computer Science Engineer & Software Developer",
    avatarUrl: "./profile.jpg",
    location: "Tamil Nadu, India",
    email: "pandeeshwarimp@gmail.com",
    phone: "+91 63744 73075",
    whatsappUrl: "https://wa.me/916374473075?text=Hi%20Pandeeshwari,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!",
    github: "https://github.com/Pandeeshwari2119",
    linkedin: "https://www.linkedin.com/in/pandeeshwari-mp/",
    status: "Available for Full-time Roles & Internships",
    typingTitles: [
      "Computer Science Engineer",
      "Full Stack React Developer",
      "AI & Data Analytics Enthusiast",
      "Patent Published Innovator"
    ],
    careerObjective:
      "Enthusiastic Computer Science Engineering student with a keen interest in Full-Stack Development, Software Engineering, Data Analytics, and emerging technologies. Experienced in transforming ideas into practical solutions through internships, academic projects, and patent-related work. Possess strong problem-solving abilities, a willingness to learn, and a passion for building efficient and user-focused applications. Seeking an opportunity to apply my technical skills, explore new technologies, and contribute meaningfully to impactful software projects while developing into a well-rounded technology professional.",
    stats: [
      { label: "B.E CGPA", value: "8.55", suffix: " / 10", note: "VSB Technical Campus" },
      { label: "Patents Published", value: "2", suffix: "", note: "Indian Patent Journal" },
      { label: "Research Papers", value: "1", suffix: "", note: "Journal Publication" },
      { label: "Internships Completed", value: "3", suffix: "+", note: "Web, AI & Data Science" }
    ]
  },

  // 2. Work & Internship Experience
  experience: [
    {
      id: "exp-3",
      role: "Data Science & Analytics Intern",
      company: "Future Interns",
      location: "Remote",
      period: "01/2026 (1 Month)",
      type: "Internship",
      description:
        "Analyzed business sales data to identify customer trends, sales patterns, and key business insights using Power BI and Python.",
      highlights: [
        "Analyzed business sales data to identify customer trends, sales patterns, and key business insights.",
        "Cleaned and organized datasets to prepare them for effective analysis and visualization.",
        "Created an interactive Power BI dashboard to present important sales and customer-related metrics.",
        "Used data visualization techniques to transform raw data into clear and meaningful business insights."
      ],
      techStack: ["Power BI", "Python", "Data Cleaning", "Data Analysis", "Data Visualization"]
    },
    {
      id: "exp-2",
      role: "Software Web Developer Intern",
      company: "Qbatzclay",
      location: "Remote",
      period: "03/06/2025 – 20/06/2025",
      type: "Internship",
      description:
        "Developed a responsive ticket booking webpage using HTML, CSS, JavaScript, and React.js.",
      highlights: [
        "Developed a responsive ticket booking webpage using HTML, CSS, JavaScript, and React.js.",
        "Created reusable React components to build an interactive and user-friendly booking interface.",
        "Implemented responsive layouts to ensure a consistent experience across desktop, tablet, and mobile devices.",
        "Applied frontend development practices to improve page structure, navigation, and overall usability."
      ],
      techStack: ["React.js", "JavaScript", "HTML", "CSS", "Responsive Web Design"]
    },
    {
      id: "exp-1",
      role: "Artificial Intelligence Intern",
      company: "Viruzverse Solutions",
      location: "Remote",
      period: "29/12/2025 – 27/01/2026",
      type: "Internship",
      description:
        "Developed an AI-based hand gesture recognition model to identify different hand gestures from visual input.",
      highlights: [
        "Developed an AI-based hand gesture recognition model to identify different hand gestures from visual input.",
        "Worked with image data and applied machine learning techniques for gesture classification.",
        "Performed data preparation and model evaluation to improve the accuracy and reliability of gesture predictions.",
        "Gained practical exposure to the AI/ML development workflow, including data preprocessing, model training, and testing."
      ],
      techStack: ["Artificial Intelligence", "Machine Learning", "Python", "Image Processing", "Computer Vision"]
    }
  ],

  // 3. Featured Projects
  projects: [
    {
      id: "project-1",
      title: "Pantry Chef – Your Kitchen Companion",
      category: "Full Stack / Web App",
      badge: "Featured React App",
      shortDescription:
        "A React.js-based web application that suggests dishes based on the ingredients available to the user to reduce food wastage.",
      detailedDescription:
        "Developed a React.js-based web application that suggests dishes based on the ingredients available to the user. Built the project to make meal planning easier and reduce food wastage by utilizing available ingredients.",
      highlights: [
        "Designed an interactive interface where users can enter available ingredients and receive suitable recipe suggestions.",
        "Built the project to make meal planning easier and reduce food wastage by utilizing available ingredients.",
        "Implemented a responsive and user-friendly interface to provide a seamless experience across desktop and mobile devices.",
        "Integrated backend services and database functionality to manage user data and support dynamic recipe-related operations."
      ],
      techStack: ["React.js", "JavaScript", "HTML", "CSS", "Responsive UI", "Database"],
      githubUrl: "https://github.com/Pandeeshwari2119",
      liveUrl: "https://your-kitchen-companion.netlify.app/",
      featured: true,
      gradient: "from-cyan-500/20 via-blue-500/10 to-transparent"
    },
    {
      id: "project-2",
      title: "Nourish360 – Personalized Wellness Platform",
      category: "MERN Full-Stack",
      badge: "Full-Stack MERN",
      shortDescription:
        "Full-stack wellness platform using React.js, Node.js, Express.js and MongoDB providing personalized health and lifestyle recommendations.",
      detailedDescription:
        "Developed a full-stack wellness platform using React.js, Node.js, Express.js and MongoDB to provide personalized health and lifestyle recommendations. Designed an onboarding interface to collect user health and lifestyle data, and built a recommendation engine for custom wellness plans.",
      highlights: [
        "Designed an interactive React.js onboarding interface to collect user health, dietary, lifestyle, activity, sleep and goal-related information.",
        "Built a Node.js and Express.js recommendation engine to generate personalized meal plans, hydration goals, activity suggestions, sleep routines and daily wellness habits.",
        "Implemented MongoDB database functionality to securely store user profiles, preferences and wellness-related data for dynamic personalization.",
        "Developed a responsive and user-friendly UI using React.js, CSS and Tailwind CSS, ensuring a seamless experience across desktop and mobile devices."
      ],
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "REST APIs"],
      githubUrl: "https://github.com/Pandeeshwari2119",
      liveUrl: "https://nourish360-1.onrender.com/",
      featured: true,
      gradient: "from-emerald-500/20 via-teal-500/10 to-transparent"
    },
    {
      id: "project-3",
      title: "AI Hand Gesture Recognition System",
      category: "AI & Computer Vision",
      badge: "Viruzverse Internship",
      shortDescription:
        "AI-based hand gesture recognition model utilizing image data and machine learning techniques to classify gestures from visual camera input.",
      detailedDescription:
        "Developed an AI-based hand gesture recognition model to identify different hand gestures from visual input. Worked with image data and applied machine learning techniques for gesture classification.",
      highlights: [
        "Developed an AI-based hand gesture recognition model to identify different hand gestures from visual input.",
        "Worked with image data and applied machine learning techniques for gesture classification.",
        "Performed data preparation and model evaluation to improve the accuracy and reliability of gesture predictions.",
        "Gained practical exposure to the AI/ML development workflow, including data preprocessing, model training, and testing."
      ],
      techStack: ["Python", "Machine Learning", "Computer Vision", "Image Processing", "AI Workflow"],
      githubUrl: "https://github.com/Pandeeshwari2119",
      liveUrl: "#",
      featured: true,
      gradient: "from-purple-500/20 via-indigo-500/10 to-transparent"
    }
  ],

  // 4. Patents Published (Special Highlight)
  patents: [
    {
      id: "patent-1",
      title: "Fraud Detection in Voting System Using Hybrid Biometric Scanner",
      journal: "Indian Patent Journal",
      year: "2025",
      status: "Published",
      category: "Biometrics & Security",
      abstract:
        "Proposed and developed a state-of-the-art dual-layer authentication framework combining optical fingerprint recognition with 3D facial feature verification to eliminate proxy voting, duplicate voter registration, and electoral fraud.",
      keyInnovations: [
        "Hybrid dual-modal biometric validation pipeline combining fingerprint minutiae and face landmark verification.",
        "Real-time anti-spoofing and liveness detection mechanism to prevent synthetic media/latex finger replication.",
        "Decentralized or encrypted voter verification record ledger ensuring 100% tamper-evident election security."
      ],
      tags: ["Biometric Security", "Fraud Prevention", "Computer Vision", "Hardware/Software Integration", "Patent 2025"]
    },
    {
      id: "patent-2",
      title: "Fault Prediction in Computer using IOT and ML Algorithms",
      journal: "Indian Patent Journal",
      year: "2026",
      status: "Published",
      category: "IoT & Predictive AI",
      abstract:
        "Designed a smart predictive maintenance architecture combining real-time IoT hardware telemetry sensors (thermal, voltage, vibrational, fan RPM) with Machine Learning classification models to detect computer hardware anomalies and flag component failures before system crashes.",
      keyInnovations: [
        "Multi-sensor IoT embedded layer tracking CPU/GPU thermal dissipation, current spikes, and hardware wear.",
        "Predictive Machine Learning model trained on time-series telemetry to calculate Mean-Time-To-Failure (MTTF).",
        "Early warning automated alerting daemon that triggers proactive diagnostic backups and cooling adjustments."
      ],
      tags: ["Internet of Things (IoT)", "Machine Learning", "Predictive Maintenance", "Hardware Telemetry", "Patent 2026"]
    }
  ],

  // 5. Journal Publications
  publications: [
    {
      id: "pub-1",
      title: "Legal status and Liability of Data Brokers and Third-Party Data Processors",
      year: "01/12/2024",
      type: "Journal Publication",
      focus: "Data Privacy, Cybersecurity & Governance",
      description:
        "In-depth legal and computational research exploring the ethical obligations, regulatory compliance mandates (GDPR/DPDP), and corporate liability frameworks surrounding digital data brokers aggregating and monetizing consumer metadata.",
      keyTakeaways: [
        "Comprehensive analysis of cross-border data transmission liabilities and security loopholes.",
        "Evaluation of user consent models, privacy rights, and algorithmic data harvesting practices.",
        "Recommendations for modern cryptographic audit trails to enforce third-party accountability."
      ]
    }
  ],

  // 6. Skills Matrix
  skills: {
    programming: [
      { name: "Python", level: 90, icon: "Code2", color: "from-blue-400 to-cyan-400" },
      { name: "Java", level: 82, icon: "Coffee", color: "from-orange-400 to-red-400" },
      { name: "JavaScript (ES6+)", level: 88, icon: "FileCode", color: "from-yellow-400 to-amber-400" },
      { name: "SQL", level: 85, icon: "Database", color: "from-emerald-400 to-teal-400" }
    ],
    webDevelopment: [
      { name: "React.js", level: 88, icon: "Atom", color: "from-cyan-400 to-blue-500" },
      { name: "Node.js & Express.js", level: 85, icon: "Server", color: "from-emerald-500 to-teal-500" },
      { name: "MongoDB & Database", level: 84, icon: "Database", color: "from-green-500 to-emerald-600" },
      { name: "HTML5 & Semantic Web", level: 95, icon: "Layout", color: "from-orange-500 to-amber-500" },
      { name: "CSS3 & Tailwind CSS", level: 92, icon: "Palette", color: "from-sky-400 to-indigo-500" },
      { name: "Responsive Web Design", level: 94, icon: "Smartphone", color: "from-purple-400 to-pink-500" }
    ],
    dataAndAI: [
      { name: "Power BI & Dashboards", level: 90, icon: "BarChart3", color: "from-amber-400 to-yellow-500" },
      { name: "Data Cleaning & Prep", level: 88, icon: "Sparkles", color: "from-emerald-400 to-green-500" },
      { name: "Machine Learning Concepts", level: 82, icon: "Cpu", color: "from-purple-400 to-violet-500" },
      { name: "Computer Vision / AI Gestures", level: 80, icon: "Eye", color: "from-indigo-400 to-cyan-400" },
      { name: "IoT Sensor Integration", level: 78, icon: "Wifi", color: "from-blue-400 to-indigo-400" }
    ],
    softSkills: [
      { name: "Creativity & Innovation", description: "Driven approach to inventing patentable solutions" },
      { name: "Adaptability", description: "Rapid mastery of new frameworks, AI tools, and domains" },
      { name: "Multitasking", description: "Balancing academic excellence, internships, and research" },
      { name: "Working Under Pressure", description: "Calm and focused problem solving during deadlines" },
      { name: "Leadership & Teamwork", description: "Effective collaboration and project coordination" }
    ]
  },

  // 7. Education History
  education: [
    {
      id: "edu-1",
      degree: "B.E. Computer Science and Engineering",
      institution: "VSB College of Engineering Technical Campus",
      location: "Coimbatore, Tamil Nadu",
      period: "2023 – 2027",
      score: "8.55 CGPA",
      scoreDetail: "Cumulative Grade Point Average: 8.55",
      highlights: [
        "Consistent academic top-tier performer in core CSE curriculum.",
        "Published 2 patents and 1 journal publication during undergraduate study.",
        "Active participant in technical symposiums, hackathons, and research clubs."
      ],
      current: true
    },
    {
      id: "edu-2",
      degree: "Higher Secondary Education (Class XII)",
      institution: "Government Girls Higher Secondary School",
      location: "Kadayanallur, Tenkasi District",
      period: "Completed",
      score: "78.7%",
      scoreDetail: "State Board Examination",
      highlights: [
        "Strong foundation in Mathematics, Physics, and Computer Science fundamentals.",
        "Developed early passion for technology and computer programming."
      ],
      current: false
    }
  ],

  // 8. Professional Certifications
  certifications: [
    {
      id: "cert-1",
      title: "Microsoft Certified: Power BI Data Analyst Associate",
      issuer: "Microsoft / NASSCOM",
      badge: "Industry Verified",
      category: "Data & BI",
      icon: "Award",
      description: "Validation of expertise in designing data models, creating actionable Power BI dashboards, and executing complex DAX transformations."
    },
    {
      id: "cert-2",
      title: "Big Data Computing",
      issuer: "NPTEL",
      badge: "National Certification",
      category: "Big Data",
      icon: "Database",
      description: "Comprehensive certification covering distributed computing, Hadoop/Spark architectures, and high-volume data pipelines."
    },
    {
      id: "cert-3",
      title: "Data Science for Beginners",
      issuer: "Board Infinity",
      badge: "Completed",
      category: "Data Science",
      icon: "TrendingUp",
      description: "Fundamental training in Python for data science, NumPy, Pandas, exploratory data analysis, and predictive modeling."
    },
    {
      id: "cert-4",
      title: "Typewriting Certification",
      issuer: "Department of Technical Education",
      badge: "First Class with Distinction",
      category: "Speed & Accuracy",
      icon: "CheckCircle2",
      description: "Demonstrated high-speed, error-free typing proficiency with First Class Distinction."
    }
  ],

  // 9. Theme presets & Customizer settings
  themePresets: {
    cyan: {
      name: "Cyber Cyan",
      primary: "from-cyan-400 to-blue-500",
      accent: "#06B6D4",
      glow: "shadow-glow-cyan",
      border: "border-cyan-500/30",
      bgBadge: "bg-cyan-500/10 text-cyan-300 border-cyan-500/30"
    },
    purple: {
      name: "Electric Violet",
      primary: "from-purple-400 to-pink-500",
      accent: "#8B5CF6",
      glow: "shadow-glow-purple",
      border: "border-purple-500/30",
      bgBadge: "bg-purple-500/10 text-purple-300 border-purple-500/30"
    },
    emerald: {
      name: "Emerald Matrix",
      primary: "from-emerald-400 to-teal-500",
      accent: "#10B981",
      glow: "shadow-glow-emerald",
      border: "border-emerald-500/30",
      bgBadge: "bg-emerald-500/10 text-emerald-300 border-emerald-500/30"
    },
    amber: {
      name: "Warm Amber",
      primary: "from-amber-400 to-orange-500",
      accent: "#F59E0B",
      glow: "shadow-glow-amber",
      border: "border-amber-500/30",
      bgBadge: "bg-amber-500/10 text-amber-300 border-amber-500/30"
    }
  }
};
