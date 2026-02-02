import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles/Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="container">
          <div className="footer-container">
            <div className="footer-section">
              <h3>About Us</h3>
              <div className="footer-divider"></div>
              <p>
                COBRIXA Construction is a premier luxury construction firm
                specializing in high-end residential and commercial projects.
              </p>
              <Link to="/about" className="footer-more-link">
                Learn More <i className="fas fa-arrow-right"></i>
              </Link>
            </div>

            <div className="footer-section">
              <h3>Our Services</h3>
              <div className="footer-divider"></div>
              <ul className="footer-links">
                <li>
                  <Link to="/construction">
                    <i className="fas fa-angle-right"></i> Construction
                  </Link>
                </li>
                <li>
                  <Link to="/interior-design">
                    <i className="fas fa-angle-right"></i> Interior Design
                  </Link>
                </li>
                <li>
                  <Link to="/services#renovations">
                    <i className="fas fa-angle-right"></i> Interior Renovations
                  </Link>
                </li>
                <li>
                  <Link to="/services#architecture">
                    <i className="fas fa-angle-right"></i> Architecture &
                    Planning
                  </Link>
                </li>
                <li>
                  <Link to="/services#project-management">
                    <i className="fas fa-angle-right"></i> Project Management
                  </Link>
                </li>
              </ul>
            </div>

            <div className="footer-section">
              <h3>Quick Links</h3>
              <div className="footer-divider"></div>
              <ul className="footer-links">
                <li>
                  <Link to="/">
                    <i className="fas fa-angle-right"></i> Home
                  </Link>
                </li>
                <li>
                  <Link to="/about">
                    <i className="fas fa-angle-right"></i> About Us
                  </Link>
                </li>
                <li>
                  <Link to="/projects">
                    <i className="fas fa-angle-right"></i> Projects
                  </Link>
                </li>
                <li>
                  <Link to="/gallery">
                    <i className="fas fa-angle-right"></i> Gallery
                  </Link>
                </li>
                <li>
                  <Link to="/contact">
                    <i className="fas fa-angle-right"></i> Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div className="footer-section">
              <h3>Contact Info</h3>
              <div className="footer-divider"></div>
              <div className="contact-info">
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="contact-text">
                    <p>
                      VJJF+87W Bengaluru, Karnataka 12°52'51.1"N 77°37'23.6"E
                    </p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div className="contact-text">
                    <p>+91 87627 85555</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="contact-text">
                    <p>info@cobrixa.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {currentYear} COBRIXA Construction. All Rights Reserved.</p>
          <p>
            Designed with <i className="fas fa-heart"></i> for Innomatrics tech
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
