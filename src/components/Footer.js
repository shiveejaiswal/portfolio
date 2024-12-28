import React from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from "react-icons/fi";
import "./Footer.css";

const Footer = () => {
  const socialLinks = [
    { icon: <FiGithub />, url: "https://github.com/yourusername" },
    { icon: <FiLinkedin />, url: "https://linkedin.com/in/yourusername" },
    { icon: <FiTwitter />, url: "https://twitter.com/yourusername" },
    { icon: <FiMail />, url: "mailto:your.email@example.com" },
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-top">
          <motion.div
            className="footer-logo"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h3>Let's Connect</h3>
            <p>Open for opportunities and collaborations</p>
          </motion.div>
          <motion.div
            className="social-links"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

