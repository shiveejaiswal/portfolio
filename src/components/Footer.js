import React from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiInstagram, FiTwitter } from "react-icons/fi";
import "./Footer.css";

const Footer = () => {
  const socialLinks = [
    { icon: <img src={process.env.PUBLIC_URL + "/assets/images/leetcode.png"} alt="LeetCode" className="icon-img" />, url: "https://leetcode.com/u/shivee25/" },
    { icon: <img src={process.env.PUBLIC_URL + "/assets/images/gfg.png"} alt="GeeksForGeeks" className="icon-img" />, url: "https://www.geeksforgeeks.org/user/shivee_jaiswal/" },
    { icon: <FiGithub />, url: "https://github.com/shiveejaiswal", alt: "GitHub" },
    { icon: <FiLinkedin />, url: "https://www.linkedin.com/in/shivee-jaiswal-819b761b7/", alt: "LinkedIn" },
    { icon: <FiMail />, url: "mailto:shiveejaiswal25@gmail.com", alt: "Email" },
    { icon: <FiInstagram />, url: "https://www.instagram.com/shiveejaiswal25/", alt: "Instagram" },
    { icon: <FiTwitter />, url: "https://x.com/Shiveejaiswal25", alt: "Twitter" },
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
                className="social-link"
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Shivee Jaiswal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
