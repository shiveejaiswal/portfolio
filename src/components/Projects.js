import React from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform built with React, Node.js, and MongoDB.",
      image: "/images/project1.png",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/yourusername/project1",
      live: "https://project1.com"
    },
    {
      title: "AI Chat Application",
      description: "Real-time chat application with AI-powered responses.",
      image: "/images/project2.pngx",
      technologies: ["React", "Socket.io", "OpenAI", "Firebase"],
      github: "https://github.com/yourusername/project2",
      live: "https://project2.com"
    },
    // Add more projects as needed
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

