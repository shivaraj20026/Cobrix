import { motion } from 'framer-motion';
import '../styles/ProjectCard.css';

const ProjectCard = ({ image, title }) => {
  return (
    <motion.div
      className="project-card"
      whileHover={{
        y: -10,
        transition: { duration: 0.3 }
      }}
    >
      <div className="project-image">
        <img src={image} alt={title} />
      </div>
      <div className="project-info">
        <h3>{title}</h3>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
