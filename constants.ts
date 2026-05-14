
import { PortfolioData } from './types';

export const PORTFOLIO_DATA: PortfolioData = {
  name: "Souhridya Patra",
  role: "2nd-Year B.Tech CSE Student at SRMIST Tiruchirappalli",
  bio: "Certified by HackerRank in Python and SQL, and by Accenture in Digital Skills. Passionate developer with 2 industry-oriented projects in Protein Structure Prediction and Bridge Cost Estimation. Building intelligent systems through clean code, open-source contributions, and AI research.",
  email: "souhridyapatra@gmail.com",
  phone: "9475993696",
  location: "Kharagpur, West Bengal - 721301",
  github: "https://github.com/Souhridya-Patra",
  linkedin: "https://linkedin.com/in/souhridyapatra",
  skills: [
    { name: 'Python', level: 92, category: 'Languages' },
    { name: 'Java', level: 85, category: 'Languages' },
    { name: 'C/C++', level: 88, category: 'Languages' },
    { name: 'JavaScript', level: 84, category: 'Frontend' },
    { name: 'HTML', level: 86, category: 'Frontend' },
    { name: 'SQL', level: 90, category: 'Backend' },
    { name: 'SQLite3', level: 88, category: 'Backend' },
    { name: 'MongoDB', level: 85, category: 'Backend' },
    { name: 'MATLAB', level: 89, category: 'Languages' },
    { name: 'Simulink', level: 87, category: 'Languages' },
    { name: 'RAG AI', level: 82, category: 'AI/ML' },
    { name: 'Generative AI', level: 80, category: 'AI/ML' },
    { name: 'Data Structures & Algorithms', level: 89, category: 'Languages' },
    { name: 'PyQt5', level: 84, category: 'Frontend' },
    { name: 'Spring Boot', level: 83, category: 'Backend' },
    { name: 'Git & GitHub', level: 87, category: 'Cloud/DevOps' },
  ],
  projects: [
    {
      id: '1',
      title: "Secondary Structure Prediction Tool using Chou-Fasman Method",
      description: "Command-line protein structure prediction tool analyzing amino acid sequences to predict alpha-helices, beta-sheets, and random coils.",
      problemStatement: "Protein structure prediction requires efficient algorithms to analyze conformational propensities and generate predictions based on amino acid properties.",
      impact: "Enables computational analysis of protein secondary structures with visual terminal-based representation for immediate graphical feedback.",
      architecture: "Implemented Chou-Fasman algorithm using NumPy for amino acid conformational propensity calculations. Features versatile input system (protein name lookup, taxonomy ID, custom sequence). Integrated plotext for terminal visualization.",
      tags: ["Python", "NumPy", "Bioinformatics", "Algorithm Implementation"],
      imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1200",
      githubUrl: "https://github.com/Souhridya-Patra",
    },
    {
      id: '2',
      title: "Steel vs. Concrete Bridge Cost Comparison Tool",
      description: "Desktop GUI application for comprehensive bridge lifecycle cost estimation and comparison between steel and concrete materials.",
      problemStatement: "Engineers need reliable tools to project bridge lifecycle costs (construction through social impact) for accurate decision-making in cost-sensitive environments.",
      impact: "Delivers accuracy and reliability in dynamic user-driven environments with integrated data visualization for cost component comparison.",
      architecture: "Built with Python, PyQt5 GUI, SQLite database, and Matplotlib visualization. Implements cost estimation algorithms, data validation, and modular programming for extensibility. Includes export functionality for project reporting.",
      tags: ["Python", "PyQt5", "SQLite", "GUI Development", "Data Visualization"],
      imageUrl: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?auto=format&fit=crop&q=80&w=1200",
      githubUrl: "https://github.com/Souhridya-Patra",
    },
    {
      id: '3',
      title: "YouTube Audio & Video Downloader",
      description: "Desktop application with intuitive GUI for downloading high-resolution videos and audio-only streams from YouTube.",
      problemStatement: "Users need reliable, easy-to-use tools for downloading YouTube content with flexible format options and reliable stream selection.",
      impact: "Provides seamless media downloading experience with automatic highest-resolution stream selection based on user preferences.",
      architecture: "Desktop GUI using Tkinter with Python backend. Integrates pytube library for direct YouTube streaming service interaction. Supports concurrent downloads and multiple quality formats.",
      tags: ["Python", "Tkinter", "pytube", "Desktop Application"],
      imageUrl: "https://images.unsplash.com/photo-1611339555312-e607c25352ca?auto=format&fit=crop&q=80&w=1200",
      githubUrl: "https://github.com/Souhridya-Patra",
    },
    {
      id: '4',
      title: "JEE DoubtDesk - AI-Powered Doubt Solving Platform",
      description: "Intelligent doubt-solving platform for JEE aspirants with RAG-powered AI providing syllabus-bound answers and personalized learning sessions.",
      problemStatement: "JEE aspirants need accurate, syllabus-aligned answers to complex doubts with session management for personalized learning continuity.",
      impact: "Enables aspirants to get precise, exam-relevant answers while maintaining individual learning sessions and answer history.",
      architecture: "Multi-stack architecture: Java Spring Boot backend, ReactJS frontend, TiDB database with B+ Trees for efficient data retrieval, Gemini API for intelligent answer generation. Each student has isolated sessions ensuring data privacy and personalization.",
      tags: ["Java", "Spring Boot", "ReactJS", "TiDB", "Gemini API", "RAG", "B+ Trees"],
      imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1200",
      githubUrl: "https://github.com/Souhridya-Patra",
    },
  ],
  experience: [
    {
      company: "NeuralBI Pvt. Ltd., Killorglin, Co.Kerry, Ireland",
      position: "AI Research Intern",
      period: "Jun 2025 - Aug 2025",
      description: [
        "Developed AI-authorship detection models to distinguish between human and AI-generated code.",
        "Worked on code modification techniques to make code more reliable and protected.",
        "Gained hands-on experience in RAG AI ChatBot development and methodology.",
        "Learned best practices in generative AI implementation and deployment."
      ]
    },
    {
      company: "FOSSEE, IIT Bombay, Mumbai, India",
      position: "Osdag Intern",
      period: "Feb 2025 - May 2025",
      description: [
        "Contributed to Osdag open-source software project for bridge analysis and sustainable infrastructure.",
        "Developed Life Cycle Cost Assessment (LCCA) desktop application using Python, PyQt5, and SQLite3.",
        "Designed database tables and relationships for storing bridge material properties.",
        "Implemented graphical user interface for efficient user interaction and data input.",
        "Participated in team collaboration using Discord server for communication and project coordination."
      ]
    },
  ],
  education: [
    {
      institution: "SRM Institute of Science and Technology, Trichy Campus",
      degree: "B.Tech in Computer Science and Engineering",
      year: "Current (2nd Year)",
      grade: "CGPA: 9.76/10.00"
    },
    {
      institution: "Kendriya Vidyalaya I.I.T Kharagpur, West Bengal",
      degree: "CBSE Higher Secondary",
      year: "2024",
      grade: "91.4%"
    },
    {
      institution: "Kendriya Vidyalaya I.I.T Kharagpur, West Bengal",
      degree: "CBSE Secondary",
      year: "2022",
      grade: "91.6%"
    }
  ],
  reflections: [
    {
      semester: "2025 H2",
      focus: "Leadership and Applied AI",
      milestones: ["Led technical initiatives at E-Cell", "Completed NeuralBI research internship", "Expanded open-source project contributions"],
      growth: "I learned to balance technical depth with team leadership, improving both delivery and communication."
    },
    {
      semester: "2025 H1",
      focus: "Open Source and Engineering Foundations",
      milestones: ["Interned at FOSSEE IIT Bombay", "Contributed to StellarX and Tiffin_Fusion", "Conducted MATLAB workshop sessions"],
      growth: "I moved from academic-only coding to collaborative, production-minded development workflows."
    },
    {
      semester: "2024",
      focus: "Core CS and Community Building",
      milestones: ["Started B.Tech CSE at SRMIST", "Participated in GSSoC'24 Extended", "Built stronger Python and MATLAB fundamentals"],
      growth: "This phase established my technical base and confidence to pursue larger research and open-source goals."
    }
  ],
  publications: [
    {
      id: '1',
      title: "Database Engine with Smart Workload Balancer and Crash Revival",
      journal: "IEEE",
      conference: "International Conference on Electronics and Communication Engineering (ICECMSN)",
      authors: "Souhridya Patra",
      publicationDate: "17 February 2026",
      doi: "https://doi.org/10.1109/ICECMSN68058.2025.11383249",
      abstract: "This paper presents a database engine design focused on resilient query execution and failure recovery. The engine implements intelligent workload balancing and crash-revival logic inspired by production database behavior, demonstrating improved reliability and continuity through recovery-first design principles.",
      keywords: ["Database Systems", "Crash Recovery", "Load Balancing", "System Architecture"],
      impact: "Published research validating distributed database design patterns and resilience mechanisms.",
    }
  ],
  certifications: [
    {
      name: "Python Certification",
      issuer: "HackerRank",
      date: "2025",
      link: "https://www.hackerrank.com/certificates/ca9159a97b0c",
      badgeUrl: "https://www.hackerrank.com/certificates/iframe/ca9159a97b0c?auto=format&fit=crop&q=80&w=256"
    },
    {
      name: "SQL Certification",
      issuer: "HackerRank",
      date: "2025",
      link: "https://www.hackerrank.com/certificates/f7a338a9974c",
      badgeUrl: "https://www.hackerrank.com/certificates/iframe/f7a338a9974c?auto=format&fit=crop&q=80&w=256"
    },
    // {
    //   name: "Advanced Softwar-Engineering Job Simulation",
    //   issuer: "Walmart Global Tech",
    //   date: "2025",
    //   link: "https://www.accenture.com",
    //   badgeUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=256"
    // },
  ],
  certificates: [
    {
      title: "Introduction to Programming Using Python",
      platform: "Online Certification",
      date: "2024",
      skills: ["Python", "Programming Fundamentals"],
      link: "#"
    },
    {
      title: "Application of Space Technology",
      platform: "Space Technology Programme",
      date: "2024",
      skills: ["Space Tech", "Systems Thinking"],
      link: "#"
    },
    {
      title: "MATLAB EXPO Workshop Participation",
      platform: "MathWorks / Academic Workshop",
      date: "2025",
      skills: ["MATLAB", "Simulink", "Autonomous Systems"],
      link: "#"
    }
  ]
};
