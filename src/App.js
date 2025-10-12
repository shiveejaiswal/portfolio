import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from "framer-motion";
import { FiDownload } from "react-icons/fi";
import { FaLock } from "react-icons/fa";
import { AiFillCode } from "react-icons/ai";
import { FaUserGear } from "react-icons/fa6";
import { TbApi } from "react-icons/tb";
import { FaCode, FaJava, FaDatabase, FaGitAlt } from "react-icons/fa";
import { MdOutlineEmojiObjects } from "react-icons/md";
import { GrSystem } from "react-icons/gr";
import { IoLogoJavascript } from "react-icons/io5";
import emailjs from '@emailjs/browser';
import { emailConfig } from './config/emailConfig';
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

  // Form state management
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSuccess: false,
    isError: false,
    message: ''
  });

  useEffect(() => {
    document.body.style.overflow = 'auto';
    document.body.style.overflowX = 'hidden';
    
    // Initialize EmailJS with your public key
    emailjs.init(emailConfig.publicKey);
    
    // Test EmailJS connection (remove this after testing)
    console.log('EmailJS Config:', {
      serviceId: emailConfig.serviceId,
      templateId: emailConfig.templateId,
      publicKey: emailConfig.publicKey ? 'Set' : 'Not Set'
    });
  }, []);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormStatus({
        isSubmitting: false,
        isSuccess: false,
        isError: true,
        message: 'Please fill in all fields.'
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus({
        isSubmitting: false,
        isSuccess: false,
        isError: true,
        message: 'Please enter a valid email address.'
      });
      return;
    }

    setFormStatus({
      isSubmitting: true,
      isSuccess: false,
      isError: false,
      message: ''
    });

    try {
      // Prepare template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: emailConfig.toEmail,
        reply_to: formData.email,
      };

      // Send email using EmailJS
      const response = await emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateId,
        templateParams,
        emailConfig.publicKey
      );

      console.log('Email sent successfully:', response);
      
      setFormStatus({
        isSubmitting: false,
        isSuccess: true,
        isError: false,
        message: 'Thank you! Your message has been sent successfully. I\'ll get back to you soon!'
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });

      // Clear success message after 5 seconds
      setTimeout(() => {
        setFormStatus(prev => ({
          ...prev,
          isSuccess: false,
          message: ''
        }));
      }, 5000);

    } catch (error) {
      console.error('Email sending failed:', error);
      console.error('Error details:', {
        status: error.status,
        text: error.text,
        message: error.message
      });
      
      let errorMessage = 'Sorry, there was an error sending your message. Please try again or contact me directly at shiveejaiswal25@gmail.com';
      
      // More specific error messages
      if (error.status === 400) {
        errorMessage = 'Invalid email configuration. Please check your EmailJS setup.';
      } else if (error.status === 401) {
        errorMessage = 'Authentication failed. Please check your EmailJS public key.';
      } else if (error.status === 403) {
        errorMessage = 'Access denied. Please check your EmailJS service permissions.';
      } else if (error.status === 404) {
        errorMessage = 'Email service not found. Please check your service ID.';
      }
      
      setFormStatus({
        isSubmitting: false,
        isSuccess: false,
        isError: true,
        message: errorMessage
      });
    }
  };

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
              <a href="#contact" className="primary-button" style={{ marginBottom: '30px', marginRight: "3px" }}>Get in Touch</a> 
              <a href="https://raw.githubusercontent.com/shiveejaiswal/portfolio/main/public/docs/resume.pdf" className="secondary-button" download>
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
                  Hello, my name is Shivee Jaiswal, and I am a software engineer based in Bengaluru with a Bachelor’s in Information Science Engineering from Nitte Meenakshi Institute of Technology, where I graduated with a CGPA of 8.68. Currently, I work as an Associate Software Engineer at Solera, where I contribute as a full stack developer to a localization management system, focusing on building and securing RESTful APIs, implementing role-based access control, and designing responsive UI dashboards that streamline resource tracking and collaboration.
                </p>
                <p>
                 My technical skills include Java, React.js, C++, SQL, RESTful APIs, JWT Authentication, and microservices architecture, while my strengths in teamwork, adaptability, and clear communication help me thrive in collaborative and challenging environments. Alongside my professional work, I have undertaken projects such as developing a bank management system using Java and SQL, and building a movie recommendation app integrating Python, Node.js, and real-time movie data using the TMDB API, all of which have helped me deepen my problem-solving abilities and deliver practical, user-friendly solutions.
                </p>
                
                <div className="about-stats">
                  <div className="stat-item">
                    <h3>500+</h3>
                    <p>DSA Problems solved</p>
                  </div>
                  <div className="stat-item">
                    <h3>8.68</h3>
                    <p>CGPA</p>
                  </div>
                  <div className="stat-item">
                    <h3>10+</h3>
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
        { name: 'Java', level: 85, icon: <FaJava /> },
        { name: 'React.js', level: 78, icon: <IoLogoJavascript /> },
        { name: 'C#', level: 75, icon: <AiFillCode  /> },
        { name: 'C', level: 70, icon: <AiFillCode  /> },
        { name: 'SQL', level: 80, icon: <FaDatabase /> },
        { name: 'RESTful APIs', level: 75, icon: <TbApi  /> },
        { name: 'JWT Authentication', level: 70, icon: <FaLock /> },
        { name: 'Microservices MVC', level: 65, icon: <FaUserGear /> },
        { name: 'OOPs', level: 83, icon: <MdOutlineEmojiObjects /> },
        { name: 'OS', level: 70, icon: <GrSystem /> },
        { name: 'DSA', level: 80, icon: <FaCode /> },
        { name: 'Version Control System', level: 78, icon: <FaGitAlt /> },
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
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <input 
                    type="text" 
                    name="name"
                    placeholder="Your Name" 
                    value={formData.name}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
                <div className="form-group">
                  <input 
                    type="email" 
                    name="email"
                    placeholder="Your Email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
                <div className="form-group">
                  <textarea 
                    name="message"
                    placeholder="Your Message" 
                    rows={6} 
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </div>
                
                {/* Form Status Messages */}
                {formStatus.message && (
                  <div className={`form-message ${formStatus.isSuccess ? 'success' : 'error'}`}>
                    {formStatus.message}
                  </div>
                )}
                
                <button 
                  type="submit" 
                  className="primary-button"
                  disabled={formStatus.isSubmitting}
                >
                  {formStatus.isSubmitting ? 'Sending...' : 'Send Message'}
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
