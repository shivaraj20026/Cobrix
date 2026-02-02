import { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import '../styles/Projects.css';

// Using direct image URLs for each project

const Projects = () => {
  // Categories for filtering
  const categories = ['All', 'Residential', 'Commercial', 'Renovation', 'Industrial'];

  // State for active filter
  const [activeFilter, setActiveFilter] = useState('All');

  // Sample project data with different images
  const projects = [
    {
      id: 1,
      title: 'MODERN OFFICE COMPLEX',
      category: 'Commercial',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop'
    },
    {
      id: 2,
      title: 'LUXURY RESIDENTIAL DEVELOPMENT',
      category: 'Residential',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop'
    },
    {
      id: 3,
      title: 'HISTORIC BUILDING RENOVATION',
      category: 'Renovation',
      image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=1000&auto=format&fit=crop'
    },
    {
      id: 4,
      title: 'MANUFACTURING FACILITY',
      category: 'Industrial',
      image: 'https://media.istockphoto.com/id/2155901088/photo/exterior-view-of-a-contemporary-new-home-in-los-angeles.jpg?s=1024x1024&w=is&k=20&c=TUqgqAPUlBrs2kaZFN6dkUNyEcrkNclVh3f-p7vcQNU='
    },
    {
      id: 5,
      title: 'RETAIL SHOPPING CENTER',
      category: 'Commercial',
      image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bHV4dXJ5JTIwYnVpbGRpbmd8ZW58MHx8MHx8fDA%3D'
    },
    {
      id: 6,
      title: 'CUSTOM LAKEFRONT HOME',
      category: 'Residential',
      image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=1000&auto=format&fit=crop'
    }
  ];

  // Filter projects based on active category
  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="projects-page">
      <div className="page-header">
        <div className="container">
          <h1>Our Projects</h1>
          <p>Explore our portfolio of completed construction projects.</p>
        </div>
      </div>

      <section className="projects-filter">
        <div className="container">
          <div className="filter-buttons">
            {categories.map(category => (
              <button
                key={category}
                className={activeFilter === category ? 'filter-btn active' : 'filter-btn'}
                onClick={() => setActiveFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="projects-gallery">
        <div className="container">
          <div className="projects-grid">
            {filteredProjects.map(project => (
              <ProjectCard
                key={project.id}
                image={project.image}
                title={project.title}
              />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="no-projects">
              <p>No projects found in this category. Please check back later or select another category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Projects;
