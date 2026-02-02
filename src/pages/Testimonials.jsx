import TestimonialCard from '../components/TestimonialCard';
import { Link } from 'react-router-dom';
import '../styles/Testimonials.css';

const Testimonials = () => {
  // Sample testimonial data
  const testimonials = [
    {
      id: 1,
      name: 'John Smith',
      project: 'Office Renovation',
      quote: 'BuildMaster Construction exceeded our expectations. They completed our office renovation on time and within budget. The team was professional, responsive, and attentive to our specific needs. We are extremely satisfied with the quality of work and would highly recommend them to anyone looking for construction services.',
      rating: 5
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      project: 'Custom Home',
      quote: 'We are thrilled with our new home. The attention to detail and quality of work is outstanding. The BuildMaster team guided us through every step of the process, from initial design to final walkthrough. Their expertise and commitment to excellence made building our dream home a positive experience.',
      rating: 5
    },
    {
      id: 3,
      name: 'Michael Brown',
      project: 'Commercial Building',
      quote: 'As a business owner, I needed a construction company that understood my commercial needs. BuildMaster delivered a beautiful, functional space that has received numerous compliments from both staff and clients. Their project management was impeccable, and they handled all regulatory requirements seamlessly.',
      rating: 4
    },
    {
      id: 4,
      name: 'Emily Davis',
      project: 'Kitchen Remodel',
      quote: 'Our kitchen remodel was completed with exceptional craftsmanship. The BuildMaster team was creative in finding solutions to our unique space challenges, and the result is better than we imagined. They were clean, respectful of our home, and maintained clear communication throughout the project.',
      rating: 5
    },
    {
      id: 5,
      name: 'Robert Wilson',
      project: 'Retail Store Construction',
      quote: 'BuildMaster constructed our flagship retail store, and we couldn\'t be happier with the results. They understood our brand vision and translated it into a physical space that enhances the customer experience. The project was completed ahead of schedule, allowing us to open earlier than planned.',
      rating: 5
    },
    {
      id: 6,
      name: 'Jennifer Martinez',
      project: 'Home Addition',
      quote: 'Adding an extension to our existing home was a complex project, but BuildMaster made it stress-free. Their team seamlessly integrated the new construction with our existing structure, creating a cohesive look and feel. Their attention to detail and quality craftsmanship is evident in every aspect of the work.',
      rating: 4
    }
  ];

  return (
    <div className="testimonials-page">
      <div className="page-header">
        <div className="container">
          <h1>Client Testimonials</h1>
          <p>Read what our satisfied clients have to say about our construction services.</p>
        </div>
      </div>

      <section className="testimonials-intro">
        <div className="container">
          <p>At BuildMaster Construction, client satisfaction is our top priority. We{"'"}re proud of the relationships we{"'"}ve built and the trust our clients place in us. Here are some testimonials from clients who have experienced our commitment to quality, reliability, and excellence.</p>
        </div>
      </section>

      <section className="testimonials-grid-section">
        <div className="container">
          <div className="testimonials-grid">
            {testimonials.map(testimonial => (
              <TestimonialCard
                key={testimonial.id}
                name={testimonial.name}
                project={testimonial.project}
                quote={testimonial.quote}
                rating={testimonial.rating}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="testimonial-cta">
        <div className="container">
          <h2>Ready to Experience the BuildMaster Difference?</h2>
          <p>Join our growing list of satisfied clients. Contact us today to discuss your construction project.</p>
          <Link to="/contact" className="btn btn-primary">Get Started</Link>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
