import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import '../styles/Services.css';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
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

const scaleIn = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.6 }
  }
};

const Services = () => {
  // State for expanded service sections
  const [expandedService, setExpandedService] = useState(null);
  const location = useLocation();

  // Refs for scroll animations
  const introRef = useRef(null);
  const expertiseRef = useRef(null);
  const processRef = useRef(null);
  const servicesListRef = useRef(null);
  const ctaRef = useRef(null);
  const constructionRef = useRef(null);
  const interiorDesignRef = useRef(null);

  // Animation controls
  const introControls = useAnimation();
  const expertiseControls = useAnimation();
  const processControls = useAnimation();
  const servicesListControls = useAnimation();
  const ctaControls = useAnimation();

  // InView states
  const introInView = useInView(introRef, { once: true, amount: 0.3 });
  const expertiseInView = useInView(expertiseRef, { once: true, amount: 0.3 });
  const processInView = useInView(processRef, { once: true, amount: 0.3 });
  const servicesListInView = useInView(servicesListRef, { once: true, amount: 0.1 });
  const ctaInView = useInView(ctaRef, { once: true, amount: 0.5 });

  // Check for hash in URL to expand specific service
  useEffect(() => {
    if (location.hash) {
      const serviceId = location.hash.replace('#', '');
      if (serviceId === 'construction' || serviceId === 'interior-design') {
        setExpandedService(serviceId);
        // Scroll to the service section
        setTimeout(() => {
          document.getElementById(serviceId)?.scrollIntoView({ behavior: 'smooth' });
        }, 500);
      }
    }
  }, [location]);

  // Function to toggle expanded service
  const toggleServiceDetails = (serviceId) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  // Trigger animations when sections come into view
  useEffect(() => {
    if (introInView) introControls.start("visible");
    if (expertiseInView) expertiseControls.start("visible");
    if (processInView) processControls.start("visible");
    if (servicesListInView) servicesListControls.start("visible");
    if (ctaInView) ctaControls.start("visible");
  }, [introInView, expertiseInView, processInView, servicesListInView, ctaInView,
      introControls, expertiseControls, processControls, servicesListControls, ctaControls]);

  // Company expertise data
  const expertise = [
    { title: "2+ Years Experience", description: "Excellence in the construction industry", icon: "fa-medal" },
    { title: "Certified Professionals", description: "Team of licensed and certified construction experts", icon: "fa-certificate" },
    { title: "Award-Winning Projects", description: "Recognition for outstanding construction achievements", icon: "fa-trophy" },
    { title: "Sustainable Practices", description: "Commitment to environmentally responsible construction", icon: "fa-leaf" }
  ];

  // Process steps
  const processSteps = [
    { number: "01", title: "Consultation", description: "We begin with a thorough consultation to understand your vision, requirements, and budget constraints." },
    { number: "02", title: "Planning & Design", description: "Our expert team develops comprehensive plans and designs tailored to your specific needs." },
    { number: "03", title: "Construction", description: "We execute the project with precision, adhering to the highest quality standards and safety protocols." },
    { number: "04", title: "Quality Assurance", description: "Rigorous quality checks ensure every aspect of the project meets our exacting standards." },
    { number: "05", title: "Completion & Handover", description: "We deliver the finished project on time and provide complete documentation and support." }
  ];
  const services = [
    {
      id: 'construction',
      title: 'Construction',
      description: 'We specialize in building custom structures that reflect your unique style and meet your specific needs. From initial design to final touches, our team works closely with you to create the building of your dreams.',
      image: 'https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?q=80&w=1000&auto=format&fit=crop',
      features: [
        'Custom building construction',
        'Building additions and extensions',
        'Structural renovations',
        'Foundation and framework',
        'Exterior and interior construction'
      ]
    },
    {
      id: 'interior-design',
      title: 'Interior Design',
      description: 'Our interior design services transform spaces into beautiful, functional environments. We understand the importance of creating attractive spaces that reflect your style and enhance your quality of life.',
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1000&auto=format&fit=crop',
      features: [
        'Space planning and layout',
        'Color and material selection',
        'Custom furniture design',
        'Lighting design',
        'Decorative elements and accessories'
      ]
    },
    {
      id: 'renovations',
      title: 'Interior Renovations',
      description: "Transform your existing space with our comprehensive renovation services. Whether you're looking to update a single room or completely reimagine your interior, our skilled team can bring your vision to life.",
      image: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?q=80&w=1000&auto=format&fit=crop',
      features: [
        'Complete interior redesigns',
        'Kitchen renovations',
        'Bathroom renovations',
        'Flooring installation',
        'Custom cabinetry and built-ins'
      ]
    },
    {
      id: 'architecture',
      title: 'Architecture & Planning',
      description: 'Our in-house architectural team works closely with clients to develop comprehensive plans that balance aesthetics, functionality, and budget considerations.',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1000&auto=format&fit=crop',
      features: [
        'Architectural design',
        'Space planning',
        'Permit acquisition',
        '3D modeling and visualization',
        'Sustainable design solutions'
      ]
    },
    {
      id: 'project-management',
      title: 'Project Management',
      description: 'Our experienced project managers oversee every aspect of your construction project, ensuring it progresses smoothly, stays on budget, and meets all quality standards.',
      image: 'https://mpmait.com/wp-content/uploads/2023/10/PM2.jpeg',
      features: [
        'Timeline development and management',
        'Budget oversight',
        'Subcontractor coordination',
        'Quality control',
        'Regular progress updates'
      ]
    },
    {
      id: 'custom',
      title: 'Custom Projects',
      description: 'Have a unique construction need? Our team excels at tackling custom projects that require specialized expertise and creative problem-solving.',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1000&auto=format&fit=crop',
      features: [
        'Historic renovations',
        'Sustainable/green building',
        'Smart home integration',
        'Accessibility modifications',
        'Disaster recovery and restoration'
      ]
    }
  ];

  return (
    <div className="services-page">
      {/* Animated Header Section */}
      <motion.div
        className="page-header"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Our Services
          </motion.h1>
          <motion.div
            className="accent-line"
            initial={{ width: 0 }}
            animate={{ width: 100 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          ></motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Comprehensive construction solutions tailored to your needs.
          </motion.p>
        </div>
      </motion.div>

      {/* Introduction Section */}
      <motion.section
        className="services-intro"
        ref={introRef}
        variants={fadeIn}
        initial="hidden"
        animate={introControls}
      >
        <div className="container">
          <motion.p>
            At COBRIX Construction, we offer a wide range of premium construction services to meet the diverse needs of our clients. With over 2+ years of industry experience, our team of skilled professionals is committed to delivering exceptional quality and craftsmanship on every project. Whether you're looking to build a new home, renovate your existing space, or develop a commercial property, our experienced team is here to help transform your vision into reality.
          </motion.p>
        </div>
      </motion.section>

      {/* Company Expertise Section */}
      <motion.section
        className="company-expertise"
        ref={expertiseRef}
        variants={staggerContainer}
        initial="hidden"
        animate={expertiseControls}
      >
        <div className="container">
          <motion.h2 variants={fadeIn}>Why Choose COBRIX</motion.h2>
          <motion.div className="accent-line" variants={fadeIn}></motion.div>
          <motion.p className="section-intro" variants={fadeIn}>
            With decades of experience and a commitment to excellence, COBRIX Construction stands apart as a leader in the industry.
          </motion.p>

          <div className="expertise-grid">
            {expertise.map((item, index) => (
              <motion.div
                className="expertise-card"
                key={index}
                variants={scaleIn}
                whileHover={{
                  y: -10,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
                  transition: { duration: 0.3 }
                }}
              >
                <div className="expertise-icon">
                  <i className={`fas ${item.icon}`}></i>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Our Process Section */}
      <motion.section
        className="our-process"
        ref={processRef}
        variants={staggerContainer}
        initial="hidden"
        animate={processControls}
      >
        <div className="container">
          <motion.h2 variants={fadeIn}>Our Process</motion.h2>
          <motion.div className="accent-line" variants={fadeIn}></motion.div>
          <motion.p className="section-intro" variants={fadeIn}>
            We follow a structured approach to ensure every project is completed to the highest standards of quality and efficiency.
          </motion.p>

          <div className="process-timeline">
            {processSteps.map((step, index) => (
              <motion.div
                className="process-step"
                key={index}
                variants={fadeIn}
                custom={index}
                whileHover={{
                  scale: 1.03,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="step-number">{step.number}</div>
                <div className="step-content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Services List Section */}
      <motion.section
        className="services-list"
        ref={servicesListRef}
        variants={staggerContainer}
        initial="hidden"
        animate={servicesListControls}
      >
        <div className="container">
          <motion.h2 variants={fadeIn}>Our Premium Services</motion.h2>
          <motion.div className="accent-line" variants={fadeIn}></motion.div>
          <motion.p className="section-intro" variants={fadeIn}>
            Explore our comprehensive range of construction services, each delivered with uncompromising attention to detail and quality.
          </motion.p>

          {services.map((service, index) => (
            <motion.div
              id={service.id}
              key={service.id}
              className="service-item"
              variants={fadeIn}
              custom={index}
              ref={service.id === 'construction' ? constructionRef : service.id === 'interior-design' ? interiorDesignRef : null}
            >
              <div className="service-content">
                <motion.div
                  className="service-text"
                  variants={index % 2 === 0 ? slideFromLeft : slideFromRight}
                >
                  <h2>{service.title}</h2>
                  <div className="service-accent-line"></div>
                  <p>{service.description}</p>
                  <motion.ul
                    className="service-features"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {service.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        variants={fadeIn}
                        custom={idx}
                      >
                        <i className="fas fa-check"></i> {feature}
                      </motion.li>
                    ))}
                  </motion.ul>

                  {/* Show More Details Button for Construction and Interior Design */}
                  {(service.id === 'construction' || service.id === 'interior-design') && (
                    <motion.div
                      className="service-actions"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => toggleServiceDetails(service.id)}
                      style={{ marginBottom: '20px', cursor: 'pointer' }}
                    >
                      <button className="btn btn-secondary">
                        {expandedService === service.id ? 'Show Less' : 'Show More Details'}
                        <motion.i
                          className={`fas ${expandedService === service.id ? 'fa-chevron-up' : 'fa-chevron-down'} ml-2`}
                          animate={{ y: [0, 3, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        ></motion.i>
                      </button>
                    </motion.div>
                  )}

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link to="/contact" className="btn btn-secondary">
                      Inquire About This Service
                      <motion.i
                        className="fas fa-arrow-right ml-2"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      ></motion.i>
                    </Link>
                  </motion.div>
                </motion.div>
                <motion.div
                  className="service-image"
                  variants={index % 2 === 0 ? slideFromRight : slideFromLeft}
                  whileHover={{
                    scale: 1.03,
                    transition: { duration: 0.3 }
                  }}
                >
                  <img src={service.image} alt={service.title} />
                  <motion.div
                    className="image-overlay"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span>{service.title}</span>
                  </motion.div>
                </motion.div>
              </div>

              {/* Expanded Content for Construction */}
              {service.id === 'construction' && (
                <AnimatePresence>
                  {expandedService === 'construction' && (
                    <motion.div
                      className="expanded-service-content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="expanded-service-inner">
                        <h3>Our Construction Expertise</h3>
                        <p>At COBRIX, we understand that your building is more than just a structure—it's where life and business happen. Our construction services are designed to create spaces that reflect your unique requirements and preferences while providing exceptional quality and value.</p>

                        <div className="expanded-service-grid">
                          <div className="expanded-service-item">
                            <h4>Custom Building Construction</h4>
                            <p>From concept to completion, we work closely with you to design and build structures that perfectly suit your needs, preferences, and budget. Our team of architects, engineers, and craftsmen collaborate to create custom buildings that exceed your expectations.</p>
                            <ul>
                              <li>Architectural design and planning</li>
                              <li>Site preparation and foundation work</li>
                              <li>Structural framing and exterior finishing</li>
                              <li>Interior finishing and custom details</li>
                              <li>Landscaping and outdoor spaces</li>
                            </ul>
                          </div>

                          <div className="expanded-service-item">
                            <h4>Building Renovations</h4>
                            <p>Transform your existing structure with our comprehensive renovation services. Whether you're looking to update a single area or completely reimagine your space, our team has the expertise to bring your vision to life.</p>
                            <ul>
                              <li>Structural modifications</li>
                              <li>Space conversions and repurposing</li>
                              <li>Building additions and extensions</li>
                              <li>Complete building renovations</li>
                              <li>Historic building restorations</li>
                            </ul>
                          </div>

                          <div className="expanded-service-item">
                            <h4>Premium Features</h4>
                            <p>Elevate your building with premium features and finishes that add both beauty and functionality. Our attention to detail ensures that every element reflects the highest standards of quality and craftsmanship.</p>
                            <ul>
                              <li>Custom architectural elements</li>
                              <li>Smart building technology integration</li>
                              <li>Energy-efficient systems</li>
                              <li>Premium materials and finishes</li>
                              <li>Indoor-outdoor integrated spaces</li>
                            </ul>
                          </div>

                          <div className="expanded-service-item">
                            <h4>Our Construction Process</h4>
                            <p>We follow a structured approach to ensure your construction project is completed to the highest standards of quality and efficiency, with clear communication at every stage.</p>
                            <ol>
                              <li><strong>Initial Consultation:</strong> We discuss your vision, requirements, and budget</li>
                              <li><strong>Design Development:</strong> Our team creates detailed plans and specifications</li>
                              <li><strong>Proposal and Contract:</strong> We provide a comprehensive proposal and clear contract</li>
                              <li><strong>Construction:</strong> Our skilled craftsmen bring your project to life</li>
                              <li><strong>Quality Assurance:</strong> We conduct thorough inspections throughout the process</li>
                              <li><strong>Final Walkthrough:</strong> We ensure every detail meets your expectations</li>
                            </ol>
                          </div>
                        </div>

                        <div className="expanded-service-cta">
                          <Link to="/contact" className="btn btn-primary">
                            Schedule a Construction Consultation
                            <i className="fas fa-arrow-right ml-2"></i>
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}

              {/* Expanded Content for Interior Design */}
              {service.id === 'interior-design' && (
                <AnimatePresence>
                  {expandedService === 'interior-design' && (
                    <motion.div
                      className="expanded-service-content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="expanded-service-inner">
                        <h3>Our Interior Design Expertise</h3>
                        <p>COBRIX delivers exceptional interior design solutions that combine functionality, aesthetics, and personal expression. We understand that your interior space reflects your personality and lifestyle, and we work diligently to create environments that inspire, comfort, and impress.</p>

                        <div className="expanded-service-grid">
                          <div className="expanded-service-item">
                            <h4>Residential Interior Design</h4>
                            <p>Create a home that reflects your personal style and enhances your daily life. Our residential interior design services encompass everything from single-room makeovers to complete home transformations.</p>
                            <ul>
                              <li>Living and dining spaces</li>
                              <li>Kitchen and bathroom design</li>
                              <li>Bedroom and private spaces</li>
                              <li>Home offices and specialty rooms</li>
                              <li>Multi-room design cohesion</li>
                            </ul>
                          </div>

                          <div className="expanded-service-item">
                            <h4>Commercial Interior Design</h4>
                            <p>Develop commercial interiors that enhance your brand and improve functionality. We specialize in creating spaces that work for your business while making a lasting impression on clients and employees.</p>
                            <ul>
                              <li>Office and workspace design</li>
                              <li>Retail and hospitality interiors</li>
                              <li>Corporate branding integration</li>
                              <li>Space planning and optimization</li>
                              <li>Commercial furniture selection</li>
                            </ul>
                          </div>

                          <div className="expanded-service-item">
                            <h4>Custom Design Elements</h4>
                            <p>Elevate your space with custom-designed elements that are uniquely yours. Our team creates bespoke features that add character and functionality to your interior.</p>
                            <ul>
                              <li>Custom furniture design</li>
                              <li>Built-in cabinetry and shelving</li>
                              <li>Specialty lighting solutions</li>
                              <li>Custom wall treatments</li>
                              <li>Art and accessory curation</li>
                            </ul>
                          </div>

                          <div className="expanded-service-item">
                            <h4>Interior Design Process</h4>
                            <p>When you choose COBRIX for your interior design project, you benefit from our comprehensive approach and commitment to excellence.</p>
                            <ul>
                              <li><strong>Consultation:</strong> Understanding your style, needs, and vision</li>
                              <li><strong>Concept Development:</strong> Creating design concepts and mood boards</li>
                              <li><strong>Space Planning:</strong> Optimizing layout and functionality</li>
                              <li><strong>Material Selection:</strong> Choosing finishes, fabrics, and materials</li>
                              <li><strong>Implementation:</strong> Coordinating installation and styling</li>
                            </ul>
                          </div>
                        </div>

                        <div className="expanded-service-cta">
                          <Link to="/contact" className="btn btn-primary">
                            Schedule an Interior Design Consultation
                            <i className="fas fa-arrow-right ml-2"></i>
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="cta-section"
        ref={ctaRef}
        variants={staggerContainer}
        initial="hidden"
        animate={ctaControls}
      >
        <div className="container">
          <motion.h2 variants={fadeIn}>Need a Service Not Listed?</motion.h2>
          <motion.div className="accent-line" variants={fadeIn}></motion.div>
          <motion.p variants={fadeIn}>
            Contact us to discuss your specific construction needs. We offer customized solutions for unique projects and are always ready to take on new challenges.
          </motion.p>
          <motion.div
            variants={scaleIn}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/contact" className="btn btn-primary">
              Contact Us
              <motion.i
                className="fas fa-arrow-right ml-2"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              ></motion.i>
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Services;
