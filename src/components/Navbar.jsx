import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import '../styles/Navbar.css';
import logo from '../assets/images/logo.jpeg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setIsServicesOpen(false);
    }
  };

  const toggleServices = (e) => {
    e.preventDefault();
    setIsServicesOpen(!isServicesOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setIsServicesOpen(false);
  }, [location]);

  const navbarVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15
      }
    }
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5
      }
    })
  };

  return (
    <motion.nav
      className={scrolled ? "navbar scrolled" : "navbar"}
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
    >
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <div className="logo-container">
            {/* COBRIXA Logo */}
            <img src={logo} alt="COBRIXA" className="logo-image" />
            <div className="logo-text">
              <span className="company-name">COBRIXA</span>
            </div>
          </div>
        </Link>

        <div className="menu-icon" onClick={toggleMenu}>
          <div className={isOpen ? 'hamburger active' : 'hamburger'}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          {/* Home link */}
          <motion.li
            className="nav-item"
            key="/"
            custom={0}
            variants={navItemVariants}
            initial="hidden"
            animate="visible"
          >
            <Link
              to="/"
              className={location.pathname === "/" ? "nav-links active" : "nav-links"}
            >
              Home
            </Link>
          </motion.li>

          {/* About link - shows About page then redirects to home */}
          <motion.li
            className="nav-item"
            key="/about"
            custom={1}
            variants={navItemVariants}
            initial="hidden"
            animate="visible"
          >
            <Link
              to="/about"
              className={location.pathname === "/about" ? "nav-links active" : "nav-links"}
            >
              About
            </Link>
          </motion.li>

          {/* Services link with dropdown */}
          <motion.li
            className={`nav-item dropdown ${isServicesOpen ? 'services-open' : ''}`}
            key="/services"
            custom={2}
            variants={navItemVariants}
            initial="hidden"
            animate="visible"
          >
            <Link
              to="/services"
              className={location.pathname === "/services" ? "nav-links active" : "nav-links"}
              onClick={toggleServices}
            >
              Services <i className={`fas fa-chevron-down dropdown-icon ${isServicesOpen ? 'rotated' : ''}`}></i>
            </Link>
            <ul className={`dropdown-menu ${isServicesOpen ? 'show' : ''}`}>
              <li>
                <Link to="/construction" className="dropdown-link">
                  Construction
                </Link>
              </li>
              <li>
                <Link to="/interior-design" className="dropdown-link">
                  Interior Design
                </Link>
              </li>
            </ul>
          </motion.li>

          {/* Projects link - shows Projects page then redirects to home */}
          <motion.li
            className="nav-item"
            key="/projects"
            custom={3}
            variants={navItemVariants}
            initial="hidden"
            animate="visible"
          >
            <Link
              to="/projects"
              className={location.pathname === "/projects" ? "nav-links active" : "nav-links"}
            >
              Projects
            </Link>
          </motion.li>

          {/* Gallery link */}
          <motion.li
            className="nav-item"
            key="/gallery"
            custom={4}
            variants={navItemVariants}
            initial="hidden"
            animate="visible"
          >
            <Link
              to="/gallery"
              className={location.pathname === "/gallery" ? "nav-links active" : "nav-links"}
            >
              Gallery
            </Link>
          </motion.li>

          <motion.li
            className="nav-item contact-item"
            custom={5}
            variants={navItemVariants}
            initial="hidden"
            animate="visible"
          >
            <Link to="/contact" className="nav-links-btn">
              Contact Us
            </Link>
          </motion.li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
