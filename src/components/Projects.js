import React from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import "./Projects.css";
import project1Image from "../assets/images/project1.png";
import project2Image from "../assets/images/project2.jpg";
import project3Image from "../assets/images/project3.png";
import project4Image from "../assets/images/project4.png";
import project5Image from "../assets/images/project5.png";
import project6Image from "../assets/images/project6.png";

const Projects = () => {
  const projects = [
    {
      title: "Bank Management System",
      description: "Developed a bank management system, to manage customer accounts, transactions, and employee details. It's a user-friendly GUI with elegant user experience and enable smooth interactions like account creation, balance inquiry, and transaction history.",
      image: project2Image,
      technologies: ["Java", "MySQL", "Swing"],
      github: "https://github.com/shiveejaiswal/Bank-Management-System",
      live: "https://github.com/shiveejaiswal/Bank-Management-System"
    },
    {
      title: "Proviz-AI website",
      description: "Designed and developed a responsive landing page, showcasing the AI programs offered by Proviz School of AI.Integrated smooth animations, enhancing user interaction and engagement as users explore the website.",
      image: project1Image,
      technologies: ["React", "Node.js","Tailwind CSS", "AOS"],
      github: "https://github.com/shiveejaiswal/Proviz-AI_website",
      live: "https://proviz-ai-website.vercel.app/"
    },
    {
      title: "CodeAnt-AI",
      description: "Developed a fully responsive frontend implementation based on a Figma design. It focuses on clean, maintainable code and optimized performance across all devices and screen sizes.",
      image: project4Image,
      technologies: ["React", "HTML", "CSS"],
      github: "https://github.com/shiveejaiswal/CodeAnt-AI",
      live: "https://code-ant-ai-chi.vercel.app/"
    },
    {
      title: "Dynamic Form Generator",
      description: "A dynamic form generator that creates real-time, responsive forms from a JSON schema. It provides a split-screen interface with a JSON editor on the left and a live form preview on the right.",
      image: project5Image,
      technologies: ["TypeScript", "React", "HTML", "CSS"],
      github: "https://github.com/shiveejaiswal/dynamic-form-submission",
      live: "https://dynamic-form-submission.vercel.app/"
    },
    {
      title: "Tourism-Website",
      description: "Developed an interactive user interface, enabling easy navigation and access to travel destination information.Integrated dynamic features like image sliders and booking inquiry forms to enhance user engagement and experience.",
      image: project3Image,
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/shiveejaiswal/Tourism-Website",
      live: "https://tourism-website-black.vercel.app/"
    },
    {
      title: "My-LMS",
      description: "It is a frontend landing page for managing courses, users, and learning content.",
      image: project6Image,
      technologies: ["React", "Tailwind CSS", "My-SQL"],
      github: "https://github.com/shiveejaiswal/my-lms",
      live: "https://my-lms-red.vercel.app/"
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="projects-container"
      >
        <h2 className="section-title">
          <span className="highlight">Featured</span> Projects
        </h2>
        <p className="section-subtitle">
          Here are some of my recent works
        </p>
        <div className="project-grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;