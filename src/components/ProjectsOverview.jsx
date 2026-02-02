import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../styles/ProjectsOverview.css';

const ProjectsOverview = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('All');
  
  const projects = [
    {
      id: 1,
      title: 'Modern Office Complex',
      location: 'Downtown Business District',
      description: 'A state-of-the-art office complex with sustainable features including solar panels, rainwater harvesting, and energy-efficient systems.',
      completionDate: 'June 2023',
      category: 'Commercial',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1000&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1000&auto=format&fit=crop'
      ],
      features: [
        'LEED Gold Certified',
        '50,000 square feet',
        'Rooftop solar array',
        'Smart building technology',
        'Rainwater collection system'
      ]
    },
    {
      id: 2,
      title: 'Luxury Residential Development',
      location: 'Hillside Estates',
      description: 'Premium residential homes with custom finishes, smart home technology, and panoramic views of the surrounding landscape.',
      completionDate: 'March 2023',
      category: 'Residential',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1000&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=1000&auto=format&fit=crop'
      ],
      features: [
        'Custom architectural design',
        'Smart home integration',
        'Energy-efficient systems',
        'Premium finishes',
        'Landscaped gardens'
      ]
    },
    {
      id: 3,
      title: 'Historic Building Renovation',
      location: 'Old Town District',
      description: 'Careful restoration of a 100-year-old building, preserving its historic character while updating systems and interiors for modern use.',
      completionDate: 'November 2022',
      category: 'Renovation',
      image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=1000&auto=format&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=1000&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=1000&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1000&auto=format&fit=crop'
      ],
      features: [
        'Historic preservation',
        'Modern infrastructure',
        'Restored original features',
        'Seismic retrofitting',
        'Updated interior design'
      ]
    },
    {
      id: 4,
      title: 'Manufacturing Facility',
      location: 'Industrial Park',
      description: 'Design and construction of a 50,000 sq ft manufacturing facility with specialized equipment installations and logistics considerations.',
      completionDate: 'August 2022',
      category: 'Industrial',
      image: 'https://images.unsplash.com/photo-1565636291267-c03b2a0f8c5e?q=80&w=1000&auto=format&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1565636291267-c03b2a0f8c5e?q=80&w=1000&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?q=80&w=1000&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=1000&auto=format&fit=crop'
      ],
      features: [
        'High-bay construction',
        'Specialized equipment foundations',
        'Advanced HVAC systems',
        'Loading dock facilities',
        'Employee amenities'
      ]
    }
  ];

  const categories = ['All', 'Residential', 'Commercial', 'Renovation', 'Industrial'];

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

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleClose = () => {
    setSelectedProject(null);
  };

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const Stats = [
    { value: '1+', label: 'Years Experience' },
    { value: '10+', label: 'Projects Completed' },
    { value: '150+', label: 'Expert Team Members' },
    { value: '98%', label: 'Client Satisfaction' }
  ];

  return (
    <div className="projects-overview">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Our Projects
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
        Explore our portfolio of completed construction projects
      </motion.p>
      
      <motion.div 
        className="filter-buttons"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        {categories.map(category => (
          <motion.button 
            key={category} 
            className={filter === category ? 'filter-btn active' : 'filter-btn'}
            onClick={() => setFilter(category)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category}
          </motion.button>
        ))}
      </motion.div>
      
      <motion.div 
        className="projects-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {filteredProjects.map((project) => (
          <motion.div 
            key={project.id}
            className="project-item"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.03,
              boxShadow: "0 10px 30px rgba(0,0,0,0.15)"
            }}
            onClick={() => handleProjectClick(project)}
          >
            <div className="project-image">
              <img src={project.image} alt={project.title} />
              <div className="project-overlay">
                <span>View Details</span>
              </div>
              <div className="project-category-tag">{project.category}</div>
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p className="project-location"><i className="fas fa-map-marker-alt"></i> {project.location}</p>
              <p className="project-date"><i className="fas fa-calendar-alt"></i> Completed: {project.completionDate}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
      
      {filteredProjects.length === 0 && (
        <motion.div 
          className="no-projects"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p>No projects found in this category. Please check back later or select another category.</p>
        </motion.div>
      )}
      
      <motion.div 
        className="view-all-projects"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.9 }}
      >
        <Link to="/projects" className="btn btn-primary">
          View All Projects <i className="fas fa-arrow-right"></i>
        </Link>
      </motion.div>
      
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            className="project-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          >
            <motion.div 
              className="project-modal"
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
                <div className="modal-gallery">
                  {selectedProject.gallery.map((image, index) => (
                    <div key={index} className="gallery-image">
                      <img src={image} alt={`${selectedProject.title} - ${index + 1}`} />
                    </div>
                  ))}
                </div>
                
                <div className="modal-details">
                  <div className="project-category-badge">{selectedProject.category}</div>
                  <h2>{selectedProject.title}</h2>
                  <div className="modal-divider"></div>
                  
                  <div className="project-meta">
                    <div className="meta-item">
                      <i className="fas fa-map-marker-alt"></i>
                      <span>{selectedProject.location}</span>
                    </div>
                    <div className="meta-item">
                      <i className="fas fa-calendar-alt"></i>
                      <span>Completed: {selectedProject.completionDate}</span>
                    </div>
                  </div>
                  
                  <p className="modal-description">{selectedProject.description}</p>
                  
                  <h3>Project Features</h3>
                  <ul className="feature-list">
                    {selectedProject.features.map((feature, index) => (
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
                  
                  <Link to={`/projects`} className="view-details-btn">
                    View All Projects <i className="fas fa-arrow-right"></i>
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

export default ProjectsOverview;
