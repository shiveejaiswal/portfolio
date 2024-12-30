import React, { useEffect } from 'react';
import { motion, useScroll, useSpring } from "framer-motion";
import { FiDownload } from "react-icons/fi";
import { FaCode, FaJava, FaDatabase, FaHtml5, FaJsSquare, FaGitAlt } from "react-icons/fa";
import { MdOutlineEmojiObjects } from "react-icons/md";
import { GrSystem } from "react-icons/gr";
import Header from './components/Header';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './App.css';
import './assets/css/animation.css';
import backgroundImage from './assets/images/background.jpg';
import aboutMeImage from './assets/images/profile.jpg';

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

  return (
    <div className="app">
      <motion.div className="progress-bar" style={{ scaleX }} />
      <Header />
      <main>
        {/* Hero Section */}
        <section id="home" className="hero-section" style={{ backgroundImage: `url(${backgroundImage})` }}>
          <div className="hero-content">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="hero-title"
            >
              Hi, I'm <span className="highlight">Shivee Jaiswal</span>
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
              <a href="#contact" className="primary-button" style={{ marginRight: '50px' }}>Get in Touch</a> 
              <a href="/docs/resume.pdf" className="secondary-button" download>
              <FiDownload /> Resume</a>

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
                  I am a final-year B.E. student in Information Science at Nitte Meenakshi Institute of Technology, Bengaluru, with a strong passion for coding, problem-solving, and building impactful software solutions. My technical expertise spans frontend and backend development, including proficiency in HTML, CSS, JavaScript, React.js and Java, coupled with hands-on experience in developing user-friendly web applications and efficient systems.
                </p>
                <p>
                  I thrive in collaborative environments and have successfully contributed to diverse projects, such as building dynamic websites and creating management systems. Committed to continuous learning, I actively seek opportunities to explore new technologies and enhance my skills. My goal is to contribute to a team that values innovation, quality, and meaningful impact while fostering personal and professional growth.
                </p>
                
                <div className="about-stats">
                  <div className="stat-item">
                    <h3>250+</h3>
                    <p>DSA Problems solved</p>
                  </div>
                  <div className="stat-item">
                    <h3>8.46</h3>
                    <p>CGPA</p>
                  </div>
                  <div className="stat-item">
                    <h3>6+</h3>
                    <p>Projects Completed</p>
                  </div>
                </div>
              </div>
              <div className="about-image">
                <img src={aboutMeImage} alt="Shivee Jaiswal" />
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
      {[
        { name: 'DSA', level: 80, icon: <FaCode /> },
        { name: 'OOPs', level: 90, icon: <MdOutlineEmojiObjects /> }, 
        { name: 'Java', level: 85, icon: <FaJava /> },
        { name: 'SQL', level: 80, icon: <FaDatabase /> },
        { name: 'OS', level: 85, icon: <GrSystem /> }, 
        { name: 'HTML/CSS', level: 85, icon: <FaHtml5 /> },
        { name: 'JavaScript', level: 60, icon: <FaJsSquare /> },
        { name: 'Version Control System', level: 90, icon: <FaGitAlt /> }
      ].map((skill, index) => (
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
                    shiveejaiswal25@gmail.com
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
