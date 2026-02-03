import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import '../styles/About.css';


// Premium color theme for the about page
const colorTheme = {
  primary: "#c8a45c", // Rich gold
  secondary: "#2c3e50", // Deep blue-gray
  accent: "#d4af37", // Metallic gold
  dark: "#1a1a1a", // Almost black
  light: "#f5f5f5" // Off-white
};

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const scaleIn = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.6 }
  }
};

const slideFromLeft = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const slideFromRight = {
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const About = () => {
  // State for scroll position
  const [scrollY, setScrollY] = useState(0);
  const aboutRef = useRef(null);

  // Handle scroll for parallax effects and update background position
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      // Apply parallax effect to header background
      if (aboutRef.current) {
        const header = aboutRef.current.querySelector('.page-header');
        if (header) {
          header.style.backgroundPositionY = `${scrollY * 0.5}px`;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollY]);
  return (
    <div className="about-page" ref={aboutRef}>
      {/* Animated Header Section */}
      <motion.div
        className="page-header"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1000&auto=format&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="container">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="header-content"
          >
            <motion.div
              className="accent-line"
              initial={{ width: 0 }}
              animate={{
                width: 100,
                background: [
                  colorTheme.primary,
                  colorTheme.accent,
                  colorTheme.primary
                ]
              }}
              transition={{
                width: { duration: 1 },
                background: { duration: 3, repeat: Infinity }
              }}
            ></motion.div>

            <motion.h2
              variants={fadeIn}
              className="gradient-text"
              style={{
                backgroundImage: `linear-gradient(to right, ${colorTheme.primary}, ${colorTheme.accent}, ${colorTheme.primary})`
              }}
            >
              ABOUT OUR COMPANY
            </motion.h2>

            <motion.p variants={fadeIn}>
              Discover the story, values, and expertise that make COBRIX the premier choice for your construction needs.
            </motion.p>

            <motion.div
              className="header-stats"
              variants={staggerContainer}
            >
              <motion.div className="stat-item" variants={scaleIn}>
                <h3>2+</h3>
                <p>Years Experience</p>
              </motion.div>

              <motion.div className="stat-item" variants={scaleIn}>
                <h3>10+</h3>
                <p>Projects Completed</p>
              </motion.div>

              <motion.div className="stat-item" variants={scaleIn}>
                <h3>100%</h3>
                <p>Client Satisfaction</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Who We Are Section with Animations */}
      <motion.section
        className="who-we-are-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
      >
        <div className="container">
          <motion.div
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="accent-line"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              style={{ background: colorTheme.primary }}
            ></motion.div>
            <h2>Our Story</h2>
          </motion.div>

          <div className="about-content">
            <motion.div
              className="about-text"
              variants={slideFromLeft}
            >
              <h3 className="subtitle">Who We Are</h3>
              <p>Founded in 2020, COBRIX has grown from a small local contractor to a leading construction company serving the entire region. With a team of highly skilled professionals and a commitment to quality, we have successfully completed hundreds of projects ranging from residential homes to commercial complexes.</p>

              <p>Our journey has been defined by our unwavering dedication to craftsmanship, innovation, and client satisfaction. We believe that every project, regardless of size, deserves the highest level of attention and expertise.</p>

              <motion.div
                className="timeline"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                <h3 className="subtitle">Our Journey</h3>
                <motion.div className="timeline-item" variants={fadeIn}>
                  <div className="year">2000</div>
                  <div className="content">
                    <h4>Company Founded</h4>
                    <p>COBRIX was established with a vision to transform the construction industry with quality and innovation.</p>
                  </div>
                </motion.div>

                <motion.div className="timeline-item" variants={fadeIn}>
                  <div className="year">2005</div>
                  <div className="content">
                    <h4>Regional Expansion</h4>
                    <p>After completing over 100 successful projects, we expanded our operations to cover the entire region.</p>
                  </div>
                </motion.div>

                <motion.div className="timeline-item" variants={fadeIn}>
                  <div className="year">2010</div>
                  <div className="content">
                    <h4>Commercial Division Launch</h4>
                    <p>We established our dedicated commercial construction division to serve growing business needs.</p>
                  </div>
                </motion.div>

                <motion.div className="timeline-item" variants={fadeIn}>
                  <div className="year">2015</div>
                  <div className="content">
                    <h4>Sustainability Initiative</h4>
                    <p>We launched our green building program, committing to sustainable construction practices.</p>
                  </div>
                </motion.div>

                <motion.div className="timeline-item" variants={fadeIn}>
                  <div className="year">2020</div>
                  <div className="content">
                    <h4>Technology Integration</h4>
                    <p>Implemented cutting-edge construction technologies to enhance efficiency and project outcomes.</p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              className="about-image-container"
              variants={slideFromRight}
            >
              <motion.div
                className="about-image main-image"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1000&auto=format&fit=crop" alt="COBRIX Team" />
              </motion.div>

              <motion.div
                className="image-grid"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                <motion.div className="small-image" variants={scaleIn}>
                  <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1000&auto=format&fit=crop" alt="Construction Site" />
                </motion.div>

                <motion.div className="small-image" variants={scaleIn}>
                  <img src="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=1000&auto=format&fit=crop" alt="Building Process" />
                </motion.div>

                <motion.div className="small-image" variants={scaleIn}>
                  <img src="https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?q=80&w=1000&auto=format&fit=crop" alt="Completed Project" />
                </motion.div>
              </motion.div>

              <motion.div
                className="experience-badge"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                style={{
                  background: colorTheme.primary,
                  color: colorTheme.dark
                }}
              >
                <span className="years">2+</span>
                <span className="text">Years of Excellence</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Mission & Vision Section with Animations */}
      <motion.section
        className="mission-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
        style={{
          background: `linear-gradient(rgba(44, 62, 80, 0.9), rgba(44, 62, 80, 0.9)), url('https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=1000&auto=format&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="container">
          <motion.div
            className="section-title light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="accent-line"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              style={{ background: colorTheme.accent }}
            ></motion.div>
            <h2>Our Purpose</h2>
          </motion.div>

          <div className="mission-vision-container">
            <motion.div
              className="mission-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="card-icon">
                <i className="fas fa-bullseye" style={{ color: colorTheme.accent }}></i>
              </div>
              <h3>Our Mission</h3>
              <div className="mission-statement">
                <p>"To deliver safe, high-quality, and cost-effective construction services on time, exceeding our clients' expectations through innovation, expertise, and unwavering commitment to excellence."</p>
              </div>

              <motion.ul
                className="mission-points"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                <motion.li variants={fadeIn}>
                  <i className="fas fa-check-circle" style={{ color: colorTheme.accent }}></i>
                  <span>Deliver exceptional quality in every project</span>
                </motion.li>
                <motion.li variants={fadeIn}>
                  <i className="fas fa-check-circle" style={{ color: colorTheme.accent }}></i>
                  <span>Maintain the highest safety standards</span>
                </motion.li>
                <motion.li variants={fadeIn}>
                  <i className="fas fa-check-circle" style={{ color: colorTheme.accent }}></i>
                  <span>Complete projects on time and within budget</span>
                </motion.li>
                <motion.li variants={fadeIn}>
                  <i className="fas fa-check-circle" style={{ color: colorTheme.accent }}></i>
                  <span>Exceed client expectations at every opportunity</span>
                </motion.li>
              </motion.ul>
            </motion.div>

            <motion.div
              className="vision-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="card-icon">
                <i className="fas fa-eye" style={{ color: colorTheme.accent }}></i>
              </div>
              <h3>Our Vision</h3>
              <div className="vision-statement">
                <p>"To be the most trusted and respected construction company, known for transforming communities through innovative building solutions while setting new standards of excellence in the industry."</p>
              </div>

              <motion.div
                className="core-values"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                <h4>Core Values</h4>
                <div className="values-flex">
                  <motion.div className="value-item" variants={scaleIn}>
                    <span>Integrity</span>
                  </motion.div>
                  <motion.div className="value-item" variants={scaleIn}>
                    <span>Excellence</span>
                  </motion.div>
                  <motion.div className="value-item" variants={scaleIn}>
                    <span>Innovation</span>
                  </motion.div>
                  <motion.div className="value-item" variants={scaleIn}>
                    <span>Teamwork</span>
                  </motion.div>
                  <motion.div className="value-item" variants={scaleIn}>
                    <span>Sustainability</span>
                  </motion.div>
                  <motion.div className="value-item" variants={scaleIn}>
                    <span>Client Focus</span>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Why Choose Us Section with Animations */}
      <motion.section
        className="why-choose-us-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        <div className="container">
          <motion.div
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="accent-line"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              style={{ background: colorTheme.primary }}
            ></motion.div>
            <h2>Why Choose Us</h2>
            <p className="section-subtitle">What sets COBRIX apart from the competition</p>
          </motion.div>

          <motion.div
            className="values-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.div
              className="value-card"
              variants={scaleIn}
              whileHover={{
                y: -10,
                boxShadow: `0 10px 25px rgba(0, 0, 0, 0.1), 0 0 10px ${colorTheme.primary}33`
              }}
            >
              <div className="value-icon" style={{ background: `${colorTheme.primary}15` }}>
                <i className="fas fa-medal" style={{ color: colorTheme.primary }}></i>
              </div>
              <h3>Experience & Expertise</h3>
              <p>With over 20 years in the industry, our team brings unmatched expertise to every project, ensuring superior results.</p>
              <motion.div
                className="card-accent"
                initial={{ width: 0 }}
                whileInView={{ width: '50%' }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                style={{ background: colorTheme.primary }}
              ></motion.div>
            </motion.div>

            <motion.div
              className="value-card"
              variants={scaleIn}
              whileHover={{
                y: -10,
                boxShadow: `0 10px 25px rgba(0, 0, 0, 0.1), 0 0 10px ${colorTheme.primary}33`
              }}
            >
              <div className="value-icon" style={{ background: `${colorTheme.primary}15` }}>
                <i className="fas fa-certificate" style={{ color: colorTheme.primary }}></i>
              </div>
              <h3>Licensed & Certified</h3>
              <p>We hold all necessary licenses and certifications, ensuring compliance with industry standards and regulations.</p>
              <motion.div
                className="card-accent"
                initial={{ width: 0 }}
                whileInView={{ width: '50%' }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                style={{ background: colorTheme.primary }}
              ></motion.div>
            </motion.div>

            <motion.div
              className="value-card"
              variants={scaleIn}
              whileHover={{
                y: -10,
                boxShadow: `0 10px 25px rgba(0, 0, 0, 0.1), 0 0 10px ${colorTheme.primary}33`
              }}
            >
              <div className="value-icon" style={{ background: `${colorTheme.primary}15` }}>
                <i className="fas fa-hard-hat" style={{ color: colorTheme.primary }}></i>
              </div>
              <h3>Safety First</h3>
              <p>Safety is our top priority on every job site, protecting both our team and our clients with rigorous protocols.</p>
              <motion.div
                className="card-accent"
                initial={{ width: 0 }}
                whileInView={{ width: '50%' }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                style={{ background: colorTheme.primary }}
              ></motion.div>
            </motion.div>

            <motion.div
              className="value-card"
              variants={scaleIn}
              whileHover={{
                y: -10,
                boxShadow: `0 10px 25px rgba(0, 0, 0, 0.1), 0 0 10px ${colorTheme.primary}33`
              }}
            >
              <div className="value-icon" style={{ background: `${colorTheme.primary}15` }}>
                <i className="fas fa-clock" style={{ color: colorTheme.primary }}></i>
              </div>
              <h3>On-Time Delivery</h3>
              <p>We pride ourselves on completing projects within the agreed timeframe, respecting your schedule and deadlines.</p>
              <motion.div
                className="card-accent"
                initial={{ width: 0 }}
                whileInView={{ width: '50%' }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                style={{ background: colorTheme.primary }}
              ></motion.div>
            </motion.div>

            <motion.div
              className="value-card"
              variants={scaleIn}
              whileHover={{
                y: -10,
                boxShadow: `0 10px 25px rgba(0, 0, 0, 0.1), 0 0 10px ${colorTheme.primary}33`
              }}
            >
              <div className="value-icon" style={{ background: `${colorTheme.primary}15` }}>
                <i className="fas fa-leaf" style={{ color: colorTheme.primary }}></i>
              </div>
              <h3>Sustainable Practices</h3>
              <p>We incorporate eco-friendly materials and methods whenever possible, minimizing environmental impact.</p>
              <motion.div
                className="card-accent"
                initial={{ width: 0 }}
                whileInView={{ width: '50%' }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                style={{ background: colorTheme.primary }}
              ></motion.div>
            </motion.div>

            <motion.div
              className="value-card"
              variants={scaleIn}
              whileHover={{
                y: -10,
                boxShadow: `0 10px 25px rgba(0, 0, 0, 0.1), 0 0 10px ${colorTheme.primary}33`
              }}
            >
              <div className="value-icon" style={{ background: `${colorTheme.primary}15` }}>
                <i className="fas fa-handshake" style={{ color: colorTheme.primary }}></i>
              </div>
              <h3>Client Satisfaction</h3>
              <p>Our success is measured by the satisfaction and trust of our clients, with over 95% client retention rate.</p>
              <motion.div
                className="card-accent"
                initial={{ width: 0 }}
                whileInView={{ width: '50%' }}
                transition={{ duration: 0.8, delay: 0.7 }}
                viewport={{ once: true }}
                style={{ background: colorTheme.primary }}
              ></motion.div>
            </motion.div>
          </motion.div>

          {/* Added Achievements Section */}
          <motion.div
            className="achievements-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3>Our Achievements</h3>
            <div className="achievements-container">
              <motion.div
                className="achievement-item"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="achievement-icon">
                  <i className="fas fa-trophy" style={{ color: colorTheme.accent }}></i>
                </div>
                <h4>Best Construction Company 2022</h4>
                <p>Regional Business Excellence Awards</p>
              </motion.div>

              <motion.div
                className="achievement-item"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="achievement-icon">
                  <i className="fas fa-award" style={{ color: colorTheme.accent }}></i>
                </div>
                <h4>Safety Excellence Award</h4>
                <p>Construction Safety Association</p>
              </motion.div>

              <motion.div
                className="achievement-item"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="achievement-icon">
                  <i className="fas fa-star" style={{ color: colorTheme.accent }}></i>
                </div>
                <h4>Green Building Certification</h4>
                <p>LEED Gold Standard</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Team Section with Animations */}
      <motion.section
        className="team-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
        style={{
          background: `linear-gradient(rgba(245, 245, 245, 0.95), rgba(245, 245, 245, 0.95)), url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1000&auto=format&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="container">
          


          {/* Team Stats */}
          <motion.div
            className="team-stats"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="stats-container">
              <motion.div
                className="stat-item"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3>10+</h3>
                <p>Team Members</p>
              </motion.div>

              <motion.div
                className="stat-item"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3>5+</h3>
                <p>Professional Certifications</p>
              </motion.div>

              <motion.div
                className="stat-item"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h3>2+</h3>
                <p>Years Combined Experience</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section with Animations */}
      <motion.section
        className="cta-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
        style={{
          background: `linear-gradient(rgba(44, 62, 80, 0.9), rgba(44, 62, 80, 0.9)), url('https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?q=80&w=1000&auto=format&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="container">
          <motion.div
            className="cta-content"
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeIn}
              className="gradient-text"
              style={{
                backgroundImage: `linear-gradient(to right, ${colorTheme.primary}, ${colorTheme.accent}, ${colorTheme.primary})`
              }}
            >
              Ready to Transform Your Vision Into Reality?
            </motion.h2>

            <motion.p variants={fadeIn}>
              Contact us today to discuss your construction needs and how we can help bring your vision to life with our expertise and dedication to excellence.
            </motion.p>

            <motion.div
              className="cta-buttons"
              variants={fadeIn}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contact"
                  className="btn btn-primary"
                  style={{
                    backgroundColor: colorTheme.primary,
                    borderColor: colorTheme.primary
                  }}
                >
                  Get in Touch
                  <motion.i
                    className="fas fa-arrow-right ml-2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  ></motion.i>
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/projects"
                  className="btn btn-secondary"
                  style={{
                    backgroundColor: 'transparent',
                    borderColor: colorTheme.light,
                    color: colorTheme.light
                  }}
                >
                  View Our Projects
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              className="contact-info"
              variants={staggerContainer}
            >
              <motion.div className="contact-item" variants={fadeIn}>
                <i className="fas fa-phone" style={{ color: colorTheme.accent }}></i>
                <span>+91 87627 85555</span>
              </motion.div>

              <motion.div className="contact-item" variants={fadeIn}>
                <i className="fas fa-envelope" style={{ color: colorTheme.accent }}></i>
                <span>info@cobrixa.com</span>
              </motion.div>

              <motion.div className="contact-item" variants={fadeIn}>
                <i className="fas fa-map-marker-alt" style={{ color: colorTheme.accent }}></i>
                <span>VJJF+87W Bengaluru, Karnataka 12°52'51.1"N 77°37'23.6"E</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default About;







