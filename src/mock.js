// Mock data for the portfolio
import me from "./components/ui/me.jpg";
import bookStore from "./components/ui/BookStore.png"
import LMS from "./components/ui/lms.png"
import jobPortal from "./components/ui/jobPortal.png"
import resume from "./assets/resume.pdf"


export const portfolioData = {
  personal: {
    name: "Pankaj Yadav",
    title: "Full Stack Web Developer",
    tagline: "Crafting seamless digital experiences with modern web technologies",
    bio: "Passionate full-stack developer with 1+ years of experience building scalable web applications. Specialized in React, Node.js, and cloud technologies. I transform ideas into elegant, high-performance solutions.",
    email: "pankajyadav95834@gmail.com",
    phone: "+91 9721610350",
    location: "Lucknow, India",
    image:me,
    resume: resume,
    yearsOfExperience: 0
  },

  social: [
    { name: "GitHub", url: "https://github.com", icon: "Github" },
    { name: "LinkedIn", url: "https://linkedin.com", icon: "Linkedin" },
   
  ],

  skillCategories: {
    frontend: [
      {
        id: 1,
        name: "React",
        percentage: 95,
        icon: "Code2",
        color: "#61DAFB"
      },
      {
        id: 2,
        name: "JavaScript",
        percentage: 92,
        icon: "Code2",
        color: "#F7DF1E"
      },
     
      {
        id: 5,
        name: "Tailwind CSS",
        percentage: 90,
        icon: "Paintbrush",
        color: "#06B6D4"
      },
      {
        id: 6,
        name: "HTML/CSS",
        percentage: 95,
        icon: "Code2",
        color: "#E34F26"
      }
    ],
    backend: [
      {
        id: 7,
        name: "Node.js",
        percentage: 90,
        icon: "Server",
        color: "#339933"
      },
      
      {
        id: 9,
        name: "FastAPI",
        percentage: 82,
        icon: "Server",
        color: "#009688"
      },
      {
        id: 10,
        name: "Express.js",
        percentage: 88,
        icon: "Server",
        color: "#000000"
      },
      {
        id: 11,
        name: "MongoDB",
        percentage: 87,
        icon: "Database",
        color: "#47A248"
      },
      {
        id: 12,
        name: "PostgreSQL",
        percentage: 83,
        icon: "Database",
        color: "#4169E1"
      }
    ],
    tools: [
      {
        id: 13,
        name: "Git",
        percentage: 93,
        icon: "GitBranch",
        color: "#F05032"
      },
      
      {
        id: 16,
        name: "VS Code",
        percentage: 95,
        icon: "Code2",
        color: "#007ACC"
      },
      
      {
        id: 18,
        name: "Postman",
        percentage: 88,
        icon: "Package",
        color: "#FF6C37"
      }
    ]
  },

  projects: [
    {
      id: 1,
      title: "Hire Sphere",
      description:" job portal web application with AI-driven job matching, resume analysis, and interview scheduling features",
      image:jobPortal,
      technologies: ["React", "Node.js", "MongoDB", "Express.js", "Tailwind","Cloudinary","Redux"],
      category: "Full Stack",
      github: "https://github.com/Pankajyadav-123/Webjob",
      live: "https://webjob-1.onrender.com/",
      featured: true
    },
    {
      id: 2,
      title: "Lume",
      description: "Learning management system (LMS) with personalized learning paths, interactive content, and real-time progress tracking",
      image:LMS,
      technologies: ["React", "Tailwind", "stripe", "Node.js", "Express.js","MongoDB"],
      category: "Full Stack",
      github: "https://github.com/Pankajyadav-123/LMS",
      live: "https://lms-seven-ruby.vercel.app/",
      featured: true
    },
    {
      id: 3,
      title: "Gyan (Book Store)",
      description:"Online book store with  book recommendations, user reviews, and seamless checkout experience",
      image:bookStore,
      technologies: ["React", "FastAPI", "stripe", "Node.js", "Express.js","MongoDB", "Tailwind"],
      category: "AI/ML",
      github: "https://github.com/Pankajyadav-123/Book-Store",
      live: "https://book-store-liart-zeta-95.vercel.app/",
      featured: true
    },
    
  ],

  

  stats: []
};

export default portfolioData;
