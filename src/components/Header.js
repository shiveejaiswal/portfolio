import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import "./Header.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { title: "Home", to: "home" },
    { title: "About", to: "about" },
    { title: "Skills", to: "skills" },
    { title: "Projects", to: "projects" },
    { title: "Contact", to: "contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`header ${isScrolled ? "scrolled" : ""}`}
    >
      <div className="header-content">
        <motion.h1 
          className="logo"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <span className="logo-text">Shivee Jaiswal</span>
        </motion.h1>

        <nav className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
          <ul>
            {menuItems.map((item) => (
              <motion.li
                key={item.to}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link
                  to={item.to}
                  smooth={true}
                  duration={500}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.title}
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>

        <div className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
