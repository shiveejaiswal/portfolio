import React, { useEffect } from 'react';
import { motion, useScroll, useSpring } from "framer-motion";
import { FiDownload } from "react-icons/fi";
import { SiJavascript, SiReact, SiNodedotjs, SiPython, SiMongodb, SiDocker } from "react-icons/si";
import Header from './components/Header';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './App.css';
import './assets/css/animation.css';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    document.body.style.overflow = 'auto';
    document.body.style.overflowX = 'hidden';
  }, []);

  const skills = [
    { name: "JavaScript", icon: <SiJavascript />, level: 90 },
    { name: "React", icon: <SiReact />, level: 85 },
    { name: "Node.js", icon: <SiNodedotjs />, level: 80 },
    { name: "Python", icon: <SiPython />, level: 75 },
    { name: "MongoDB", icon: <SiMongodb />, level: 70 },
    { name: "Docker", icon: <SiDocker />, level: 65 },
  ];

  return (
    <div className="app">
      <motion.div className="progress-bar" style={{ scaleX }} />
      <Header />
      <main>
        {/* Hero Section */}
        <section id="home" className="hero-section">
          <div className="hero-content">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="hero-title"
            >
              Hi, I'm <span className="highlight">Your Name</span>
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="hero-subtitle"
            >
              Full Stack Developer
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="hero-description"
            >
              Turning ideas into reality through code
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="hero-buttons"
            >
              <a href="#contact" className="primary-button">
                Get in Touch
              </a>
              <a href="/resume.pdf" className="secondary-button" download>
                <FiDownload /> Resume
              </a>
            </motion.div>
          </div>
          <div className="hero-background">
            <div className="gradient-sphere"></div>
            <div className="gradient-sphere"></div>
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.2, 0.3],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="gradient-sphere"
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                background: 'radial-gradient(circle, rgba(196, 181, 253, 0.1) 0%, transparent 70%)',
              }}
            />
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="about-section">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-container"
          >
            <h2 className="section-title">About <span className="highlight">Me</span></h2>
            <div className="about-content">
              <div className="about-text">
                <p>
                  I'm a passionate Full Stack Developer with a strong foundation in web technologies
                  and a keen eye for creating engaging user experiences. With several years of
                  experience in the field, I've had the opportunity to work on diverse projects
                  that have sharpened my skills in both frontend and backend development.
                </p>
                <p>
                  My journey in technology began with a curiosity about how things work, which
                  led me to pursue a degree in Computer Science. Since then, I've been
                  continuously learning and adapting to new technologies while building
                  applications that make a difference.
                </p>
                <div className="about-stats">
                  <div className="stat-item">
                    <h3>3+</h3>
                    <p>Years of Experience</p>
                  </div>
                  <div className="stat-item">
                    <h3>50+</h3>
                    <p>Projects Completed</p>
                  </div>
                  <div className="stat-item">
                    <h3>20+</h3>
                    <p>Happy Clients</p>
                  </div>
                </div>
              </div>
              <div className="about-image">
                <img src="/images/AboutMe.jpg" alt="Your Name" />
              </div>
            </div>
          </motion.div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="skills-section">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-container"
          >
            <h2 className="section-title">My <span className="highlight">Skills</span></h2>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="skill-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="skill-icon">{skill.icon}</div>
                  <h3>{skill.name}</h3>
                  <div className="skill-bar-container">
                    <motion.div
                      className="skill-bar"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Projects Section */}
        <Projects />

        {/* Contact Section */}
        <section id="contact" className="contact-section">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-container"
          >
            <h2 className="section-title">Get in <span className="highlight">Touch</span></h2>
            <div className="contact-content">
              <div className="contact-info">
                <h3>Let's talk about everything!</h3>
                <p>
                  Don't like forms? Send me an email directly at{" "}
                  <a href="mailto:your.email@example.com" className="highlight-link">
                    your.email@example.com
                  </a>
                </p>
              </div>
              <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                  <input type="text" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <textarea placeholder="Your Message" rows={6} required></textarea>
                </div>
                <button type="submit" className="primary-button">
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;

