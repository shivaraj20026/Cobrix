import { motion } from 'framer-motion';
import '../styles/TestimonialCard.css';

const TestimonialCard = ({ name, project, quote, rating }) => {
  // Function to render stars based on rating
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(
          <motion.i
            key={i}
            className="fas fa-star"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 * i, duration: 0.3 }}
          />
        );
      } else {
        stars.push(
          <motion.i
            key={i}
            className="far fa-star"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 * i, duration: 0.3 }}
          />
        );
      }
    }
    return stars;
  };

  return (
    <motion.div
      className="testimonial-card"
      whileHover={{
        y: -10,
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
        transition: { duration: 0.3 }
      }}
    >
      <div className="testimonial-header">
        <div className="testimonial-icon">
          <i className="fas fa-quote-left"></i>
        </div>
      </div>

      <div className="testimonial-content">
        <p>{quote}</p>
      </div>

      <div className="testimonial-footer">
        <div className="testimonial-rating">
          {renderStars(rating)}
        </div>
        <div className="testimonial-divider"></div>
        <div className="testimonial-author">
          <h4>{name}</h4>
          {project && <p>{project}</p>}
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
