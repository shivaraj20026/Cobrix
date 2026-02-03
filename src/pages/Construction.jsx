import { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../styles/Construction.css';

const Construction = () => {
  // Refs for scroll animations
  const headerRef = useRef(null);
  const introRef = useRef(null);
  const servicesRef = useRef(null);
  const projectsRef = useRef(null);
  const processRef = useRef(null);
  const ctaRef = useRef(null);

  // Animation controls
  const headerControls = useAnimation();
  const introControls = useAnimation();
  const servicesControls = useAnimation();
  const projectsControls = useAnimation();
  const processControls = useAnimation();
  const ctaControls = useAnimation();

  // InView states
  const headerInView = useInView(headerRef, { once: true, amount: 0.3 });
  const introInView = useInView(introRef, { once: true, amount: 0.3 });
  const servicesInView = useInView(servicesRef, { once: true, amount: 0.1 });
  const projectsInView = useInView(projectsRef, { once: true, amount: 0.3 });
  const processInView = useInView(processRef, { once: true, amount: 0.3 });
  const ctaInView = useInView(ctaRef, { once: true, amount: 0.5 });

  // Trigger animations when sections come into view
  useEffect(() => {
    if (headerInView) headerControls.start('visible');
    if (introInView) introControls.start('visible');
    if (servicesInView) servicesControls.start('visible');
    if (projectsInView) projectsControls.start('visible');
    if (processInView) processControls.start('visible');
    if (ctaInView) ctaControls.start('visible');
  }, [headerInView, introInView, servicesInView, projectsInView, processInView, ctaInView,
      headerControls, introControls, servicesControls, projectsControls, processControls, ctaControls]);

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

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  // Construction services data
  const constructionServices = [
    {
      title: 'Residential Construction',
      description: 'Custom homes, multi-family buildings, and luxury residences built with precision and attention to detail.',
      image: 'https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?q=80&w=2070&auto=format&fit=crop',
      icon: 'fa-home'
    },
    {
      title: 'Commercial Construction',
      description: 'Office buildings, retail spaces, and commercial facilities designed for functionality and aesthetic appeal.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
      icon: 'fa-building'
    },
    {
      title: 'Industrial Construction',
      description: 'Manufacturing facilities, warehouses, and industrial complexes built to meet specific operational requirements.',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop',
      icon: 'fa-industry'
    },
    // {
    //   title: 'Institutional Construction',
    //   description: 'Schools, hospitals, and government buildings constructed with a focus on durability and public safety.',
    //   image: 'https://images.unsplash.com/photo-1562516710-38a6fa229b23?q=80&w=2070&auto=format&fit=crop',
    //   icon: 'fa-university'
    // }
  ];

  // Featured projects data
  const featuredProjects = [
    {
      title: 'Modern Office Complex',
      description: 'A state-of-the-art office complex featuring sustainable design and smart building technology.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
      location: 'Downtown Metro City',
      year: '2023'
    },
    {
      title: 'Luxury Residential Tower',
      description: 'High-end residential tower with premium amenities and panoramic city views.',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop',
      location: 'Waterfront District',
      year: '2022'
    },
    {
      title: 'Sustainable Community Center',
      description: 'Community center built with eco-friendly materials and renewable energy systems.',
      image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2070&auto=format&fit=crop',
      location: 'Greenville',
      year: '2023'
    }
  ];

  // Construction process steps
  const processSteps = [
    { number: "01", title: "Consultation", description: "We begin with a thorough consultation to understand your vision, requirements, and budget constraints." },
    { number: "02", title: "Planning & Design", description: "Our expert team develops comprehensive plans and designs tailored to your specific needs." },
    { number: "03", title: "Permitting", description: "We handle all necessary permits and regulatory approvals to ensure your project proceeds smoothly." },
    { number: "04", title: "Construction", description: "We execute the project with precision, adhering to the highest quality standards and safety protocols." },
    { number: "05", title: "Quality Assurance", description: "Rigorous quality checks ensure every aspect of the project meets our exacting standards." },
    { number: "06", title: "Completion & Handover", description: "We deliver the finished project on time and provide complete documentation and support." }
  ];

  return (
    <div className="construction-page">
      {/* Header Section */}
      <motion.div
        className="page-header"
        ref={headerRef}
        variants={fadeIn}
        initial="hidden"
        animate={headerControls}
      >
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Construction Services
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
            Building excellence with precision, innovation, and quality
          </motion.p>
        </div>
      </motion.div>

      {/* Introduction Section */}
      <motion.section
        className="construction-intro"
        ref={introRef}
        variants={fadeIn}
        initial="hidden"
        animate={introControls}
      >
        <div className="container">
          <motion.p>
            At COBRIX Construction, we deliver exceptional construction services across residential, commercial, and industrial sectors. With decades of experience and a team of skilled professionals, we bring your vision to life with meticulous attention to detail, innovative solutions, and unwavering commitment to quality. Our comprehensive approach ensures that every project is completed on time, within budget, and to the highest standards of craftsmanship.
          </motion.p>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        className="construction-services"
        ref={servicesRef}
        variants={staggerContainer}
        initial="hidden"
        animate={servicesControls}
      >
        <div className="container">
          <motion.h2 variants={fadeIn}>Our Construction Services</motion.h2>
          <motion.div className="accent-line" variants={fadeIn}></motion.div>
          <motion.p className="section-intro" variants={fadeIn}>
            We offer a comprehensive range of construction services tailored to meet the unique needs of each client and project.
          </motion.p>

          <div className="services-grid">
            {constructionServices.map((service, index) => (
              <motion.div
                className="service-card"
                key={index}
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  boxShadow: "0 15px 30px rgba(0,0,0,0.2)",
                  transition: { duration: 0.3 }
                }}
              >
                <div className="service-icon">
                  <i className={`fas ${service.icon}`}></i>
                </div>
                <div className="service-image">
                  <img src={service.image} alt={service.title} />
                </div>
                <div className="service-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Featured Projects Section */}
      <motion.section
        className="featured-projects"
        ref={projectsRef}
        variants={staggerContainer}
        initial="hidden"
        animate={projectsControls}
      >
        <div className="container">
          <motion.h2 variants={fadeIn}>Featured Construction Projects</motion.h2>
          <motion.div className="accent-line" variants={fadeIn}></motion.div>
          <motion.p className="section-intro" variants={fadeIn}>
            Explore some of our recent construction projects that showcase our expertise and commitment to excellence.
          </motion.p>

          <div className="projects-grid">
            {featuredProjects.map((project, index) => (
              <motion.div
                className="project-card"
                key={index}
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  boxShadow: "0 15px 30px rgba(0,0,0,0.2)",
                  transition: { duration: 0.3 }
                }}
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <span className="project-year">{project.year}</span>
                    <span className="project-location">{project.location}</span>
                  </div>
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <Link to="/projects" className="project-link">
                    View Details <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="view-all-projects"
            variants={fadeIn}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/gallery" className="btn btn-secondary">
              View All Projects
              <motion.i
                className="fas fa-arrow-right ml-2"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              ></motion.i>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Construction Process Section */}
      <motion.section
        className="construction-process"
        ref={processRef}
        variants={staggerContainer}
        initial="hidden"
        animate={processControls}
      >
        <div className="container">
          <motion.h2 variants={fadeIn}>Our Construction Process</motion.h2>
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

      {/* CTA Section */}
      <motion.section
        className="construction-cta"
        ref={ctaRef}
        variants={staggerContainer}
        initial="hidden"
        animate={ctaControls}
      >
        <div className="container">
          <motion.h2 variants={fadeIn}>Ready to Start Your Construction Project?</motion.h2>
          <motion.div className="accent-line" variants={fadeIn}></motion.div>
          <motion.p variants={fadeIn}>
            Contact us today to discuss how COBRIX Construction can bring your vision to life with our expertise and commitment to excellence.
          </motion.p>
          <motion.div
            variants={fadeIn}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/contact" className="btn btn-primary">
              Get in Touch
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

export default Construction;
