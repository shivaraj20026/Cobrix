import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../styles/ServicesOverview.css';

const ServicesOverview = () => {
  const [selectedService, setSelectedService] = useState(null);
  
  const services = [
    {
      id: 'residential',
      title: 'Residential Construction',
      shortDesc: 'Custom homes and renovations tailored to your lifestyle.',
      description: 'We specialize in building custom homes that reflect your unique style and meet your specific needs. From initial design to final touches, our team works closely with you to create the home of your dreams.',
      image: 'https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?q=80&w=1000&auto=format&fit=crop',
      features: [
        'Custom home building',
        'Home additions and extensions',
        'Kitchen and bathroom remodeling',
        'Basement finishing',
        'Outdoor living spaces'
      ]
    },
    {
      id: 'commercial',
      title: 'Commercial Construction',
      shortDesc: 'Functional, attractive spaces for businesses of all sizes.',
      description: 'Our commercial construction services cater to businesses of all sizes. We understand the importance of functional, attractive spaces that enhance productivity and make a positive impression on clients and customers.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop',
      features: [
        'Office buildings',
        'Retail spaces',
        'Restaurants',
        'Medical facilities',
        'Warehouses and industrial buildings'
      ]
    },
    {
      id: 'renovations',
      title: 'Interior Renovations',
      shortDesc: 'Transform your existing space with our renovation expertise.',
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
      shortDesc: 'Comprehensive plans balancing aesthetics and functionality.',
      description: 'Our in-house architectural team works closely with clients to develop comprehensive plans that balance aesthetics, functionality, and budget considerations.',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1000&auto=format&fit=crop',
      features: [
        'Architectural design',
        'Space planning',
        'Permit acquisition',
        '3D modeling and visualization',
        'Sustainable design solutions'
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  const handleClose = () => {
    setSelectedService(null);
  };

  return (
    <div className="services-overview">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Our Services
      </motion.h2>
      
      <motion.div 
        className="section-divider"
        initial={{ width: 0 }}
        animate={{ width: '80px' }}
        transition={{ duration: 0.8, delay: 0.3 }}
      ></motion.div>
      
      <motion.p 
        className="section-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        Explore our comprehensive range of construction services
      </motion.p>
      
      <motion.div 
        className="services-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {services.map((service, index) => (
          <motion.div 
            key={service.id}
            className="service-item"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.03,
              boxShadow: "0 10px 30px rgba(0,0,0,0.15)"
            }}
            onClick={() => handleServiceClick(service)}
          >
            <div className="service-image">
              <img src={service.image} alt={service.title} />
              <div className="service-overlay">
                <span>Learn More</span>
              </div>
            </div>
            <div className="service-content">
              <h3>{service.title}</h3>
              <p>{service.shortDesc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
      
      <AnimatePresence>
        {selectedService && (
          <motion.div 
            className="service-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          >
            <motion.div 
              className="service-modal"
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="close-button" onClick={handleClose}>
                <i className="fas fa-times"></i>
              </button>
              
              <div className="modal-content">
                <div className="modal-image">
                  <img src={selectedService.image} alt={selectedService.title} />
                </div>
                
                <div className="modal-details">
                  <h2>{selectedService.title}</h2>
                  <div className="modal-divider"></div>
                  <p className="modal-description">{selectedService.description}</p>
                  
                  <h3>Key Features</h3>
                  <ul className="feature-list">
                    {selectedService.features.map((feature, index) => (
                      <motion.li 
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * index }}
                      >
                        <i className="fas fa-check"></i> {feature}
                      </motion.li>
                    ))}
                  </ul>
                  
                  <Link to={`/services#${selectedService.id}`} className="view-details-btn">
                    View Full Details <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ServicesOverview;
