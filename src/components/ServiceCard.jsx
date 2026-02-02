import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/ServiceCard.css';

const ServiceCard = ({ title, description, icon, link, index }) => {
  return (
    <motion.div
      className="service-card"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        type: "spring",
        stiffness: 100
      }}
    >
      <div className="service-card-content">
        <div className="service-icon">
          <i className={icon}></i>
        </div>
        <h3>{title}</h3>
        <div className="service-divider"></div>
        <p>{description}</p>
        <Link to={link} className="service-link">
          Explore Service <i className="fas fa-long-arrow-alt-right"></i>
        </Link>
      </div>
      <div className="service-card-overlay"></div>
    </motion.div>
  );
};

export default ServiceCard;
