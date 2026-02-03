import { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../styles/InteriorDesign.css';

const InteriorDesign = () => {
  // Refs for scroll animations
  const headerRef = useRef(null);
  const introRef = useRef(null);
  const servicesRef = useRef(null);
  const projectsRef = useRef(null);
  const approachRef = useRef(null);
  const ctaRef = useRef(null);

  // Animation controls
  const headerControls = useAnimation();
  const introControls = useAnimation();
  const servicesControls = useAnimation();
  const projectsControls = useAnimation();
  const approachControls = useAnimation();
  const ctaControls = useAnimation();

  // InView states
  const headerInView = useInView(headerRef, { once: true, amount: 0.3 });
  const introInView = useInView(introRef, { once: true, amount: 0.3 });
  const servicesInView = useInView(servicesRef, { once: true, amount: 0.1 });
  const projectsInView = useInView(projectsRef, { once: true, amount: 0.3 });
  const approachInView = useInView(approachRef, { once: true, amount: 0.3 });
  const ctaInView = useInView(ctaRef, { once: true, amount: 0.5 });

  // Trigger animations when sections come into view
  useEffect(() => {
    if (headerInView) headerControls.start('visible');
    if (introInView) introControls.start('visible');
    if (servicesInView) servicesControls.start('visible');
    if (projectsInView) projectsControls.start('visible');
    if (approachInView) approachControls.start('visible');
    if (ctaInView) ctaControls.start('visible');
  }, [headerInView, introInView, servicesInView, projectsInView, approachInView, ctaInView,
      headerControls, introControls, servicesControls, projectsControls, approachControls, ctaControls]);

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

  // Interior design services data
  const designServices = [
    {
      title: 'Residential Interior Design',
      description: 'Transform your home into a personalized sanctuary with our custom residential interior design services.',
      image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=2074&auto=format&fit=crop',
      icon: 'fa-home'
    },
    {
      title: 'Commercial Interior Design',
      description: 'Create inspiring workspaces that enhance productivity, reflect your brand, and impress clients.',
      image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop',
      icon: 'fa-building'
    },
    {
      title: 'Hospitality Design',
      description: 'Design memorable guest experiences for hotels, restaurants, and leisure facilities.',
      image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070&auto=format&fit=crop',
      icon: 'fa-concierge-bell'
    },
   
  ];

  // Featured projects data
  const featuredProjects = [
    {
      title: 'Luxury Penthouse Interior',
      description: 'Sophisticated penthouse design with custom furnishings and panoramic city views.',
      image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=2074&auto=format&fit=crop',
      location: 'Downtown Highrise',
      year: '2023'
    },
    {
      title: 'Modern Office Interior',
      description: 'Contemporary workspace designed for productivity, collaboration, and employee well-being.',
      image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop',
      location: 'Innovation District',
      year: '2022'
    },
    {
      title: 'Boutique Hotel Lobby',
      description: 'Elegant hotel entrance featuring custom artwork, luxury furnishings, and sophisticated lighting.',
      image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070&auto=format&fit=crop',
      location: 'Arts District',
      year: '2023'
    }
  ];

  // Design approach steps
  const designApproach = [
    { 
      title: "Discovery & Consultation", 
      description: "We begin by understanding your vision, preferences, lifestyle, and functional requirements through in-depth consultations.",
      icon: "fa-comments"
    },
    { 
      title: "Concept Development", 
      description: "Our designers create preliminary concepts, mood boards, and material palettes that align with your aesthetic and functional goals.",
      icon: "fa-lightbulb"
    },
    { 
      title: "Space Planning", 
      description: "We develop detailed floor plans and spatial layouts that optimize flow, functionality, and visual harmony.",
      icon: "fa-ruler-combined"
    },
    { 
      title: "Material & Finish Selection", 
      description: "Together we select the perfect materials, finishes, furnishings, and decorative elements for your space.",
      icon: "fa-swatchbook"
    },
    { 
      title: "Implementation", 
      description: "Our team coordinates with contractors and vendors to ensure flawless execution of the design vision.",
      icon: "fa-tools"
    },
    { 
      title: "Styling & Final Touches", 
      description: "We complete the space with carefully curated accessories, artwork, and styling elements that bring the design to life.",
      icon: "fa-magic"
    }
  ];

  return (
    <div className="interior-design-page">
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
            Interior Design Services
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
            Creating beautiful, functional spaces that inspire and delight
          </motion.p>
        </div>
      </motion.div>

      {/* Introduction Section */}
      <motion.section
        className="interior-intro"
        ref={introRef}
        variants={fadeIn}
        initial="hidden"
        animate={introControls}
      >
        <div className="container">
          <motion.p>
            At COBRIX Interior Design, we transform spaces into beautiful, functional environments that reflect your unique style and meet your specific needs. Our team of talented designers combines creativity, technical expertise, and attention to detail to create interiors that are both aesthetically pleasing and perfectly tailored to your lifestyle or business requirements. From concept to completion, we guide you through every step of the design process, ensuring a seamless and enjoyable experience.
          </motion.p>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        className="interior-services"
        ref={servicesRef}
        variants={staggerContainer}
        initial="hidden"
        animate={servicesControls}
      >
        <div className="container">
          <motion.h2 variants={fadeIn}>Our Design Services</motion.h2>
          <motion.div className="accent-line" variants={fadeIn}></motion.div>
          <motion.p className="section-intro" variants={fadeIn}>
            We offer comprehensive interior design services for residential and commercial spaces, tailored to your unique vision and requirements.
          </motion.p>

          <div className="services-grid">
            {designServices.map((service, index) => (
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
          <motion.h2 variants={fadeIn}>Featured Design Projects</motion.h2>
          <motion.div className="accent-line" variants={fadeIn}></motion.div>
          <motion.p className="section-intro" variants={fadeIn}>
            Explore some of our recent interior design projects that showcase our creativity, attention to detail, and commitment to excellence.
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
                  <Link to="/gallery" className="project-link">
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

      {/* Design Approach Section */}
      <motion.section
        className="design-approach"
        ref={approachRef}
        variants={staggerContainer}
        initial="hidden"
        animate={approachControls}
      >
        <div className="container">
          <motion.h2 variants={fadeIn}>Our Design Approach</motion.h2>
          <motion.div className="accent-line" variants={fadeIn}></motion.div>
          <motion.p className="section-intro" variants={fadeIn}>
            We follow a comprehensive design process to ensure your vision is brought to life with precision and creativity.
          </motion.p>

          <div className="approach-grid">
            {designApproach.map((step, index) => (
              <motion.div
                className="approach-card"
                key={index}
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  boxShadow: "0 15px 30px rgba(0,0,0,0.1)",
                  transition: { duration: 0.3 }
                }}
              >
                <div className="approach-icon">
                  <i className={`fas ${step.icon}`}></i>
                </div>
                <div className="approach-content">
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
        className="interior-cta"
        ref={ctaRef}
        variants={staggerContainer}
        initial="hidden"
        animate={ctaControls}
      >
        <div className="container">
          <motion.h2 variants={fadeIn}>Ready to Transform Your Space?</motion.h2>
          <motion.div className="accent-line" variants={fadeIn}></motion.div>
          <motion.p variants={fadeIn}>
            Contact us today to schedule a consultation with one of our expert interior designers and begin your journey to a beautifully designed space.
          </motion.p>
          <motion.div
            variants={fadeIn}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/contact" className="btn btn-primary">
              Schedule a Consultation
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

export default InteriorDesign;
