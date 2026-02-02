import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ContactForm from '../components/ContactForm';
import '../styles/Contact.css';

const Contact = () => {
  const [expandedFaq, setExpandedFaq] = useState(null);

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
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

  // FAQ data
  const faqItems = [
    {
      question: "What areas do you serve?",
      answer: "We primarily serve the Building City metropolitan area and surrounding communities within a 50-mile radius."
    },
    {
      question: "Do you offer free estimates?",
      answer: "Yes, we provide free initial consultations and estimates for all potential projects."
    },
    {
      question: "Are you licensed and insured?",
      answer: "Absolutely. COBRIXA Construction is fully licensed, bonded, and insured for all types of construction work we perform."
    },
    {
      question: "How long does a typical construction project take?",
      answer: "Project timelines vary greatly depending on scope and complexity. A small renovation might take a few weeks, while a custom home could take 6-12 months. We provide detailed timelines during the planning phase."
    },
    {
      question: "What types of projects do you handle?",
      answer: "We handle a wide range of construction projects including residential homes, commercial buildings, renovations, additions, and specialized construction services. Our team has expertise in both new construction and remodeling projects."
    }
  ];

  return (
    <div className="contact-page">
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
            Contact Us
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
            Get in touch with our team to discuss your construction needs
          </motion.p>
        </div>
      </motion.div>

      {/* Contact Info and Form Section */}
      <motion.section
        className="contact-info-section"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <div className="container">
          <div className="contact-grid">
            <motion.div
              className="contact-info"
              variants={fadeIn}
            >
              <h2>Our Contact Information</h2>
              <div className="accent-line"></div>

              <motion.div
                className="info-item"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="info-icon">
                  <motion.i
                    className="fas fa-map-marker-alt"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  ></motion.i>
                </div>
                <div className="info-content">
                  <h3>Office Location</h3>
                  <p>VJJF+87W<br />Bengaluru, Karnataka<br />12°52'51.1"N 77°37'23.6"E</p>
                </div>
              </motion.div>

              <motion.div
                className="info-item"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="info-icon">
                  <motion.i
                    className="fas fa-phone"
                    animate={{ rotate: [0, 15, -15, 0] }}
                    transition={{ duration: 1, repeat: Infinity, repeatDelay: 4 }}
                  ></motion.i>
                </div>
                <div className="info-content">
                  <h3>Phone</h3>
                  <p>+91 87627 85555</p>
                </div>
              </motion.div>

              <motion.div
                className="info-item"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="info-icon">
                  <motion.i
                    className="fas fa-envelope"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3.5 }}
                  ></motion.i>
                </div>
                <div className="info-content">
                  <h3>Email</h3>
                  <p>info@cobrixa.com</p>
                </div>
              </motion.div>

              <motion.div
                className="info-item"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="info-icon">
                  <motion.i
                    className="fas fa-clock"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  ></motion.i>
                </div>
                <div className="info-content">
                  <h3>Working Hours</h3>
                  <p>Monday - Friday: 8:00 AM - 5:00 PM<br />Saturday: 9:00 AM - 2:00 PM<br />Sunday: Closed</p>
                </div>
              </motion.div>

              <motion.div
                className="social-media"
                variants={fadeIn}
              >
                <h3>Connect With Us</h3>
                <div className="social-icons">
                  <motion.a
                    href="#"
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <i className="fab fa-facebook-f"></i>
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <i className="fab fa-twitter"></i>
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <i className="fab fa-instagram"></i>
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className="contact-form-section"
              variants={fadeIn}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Map Section */}
      <motion.section
        className="map-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
      >
        <div className="container">
          <motion.h2
            variants={fadeIn}
          >
            Find Us
          </motion.h2>
          <motion.div
            className="accent-line"
            initial={{ width: 0 }}
            whileInView={{ width: 100 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          ></motion.div>

          <motion.div
            className="map-container"
            variants={fadeIn}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.4868087606146!2d77.62321931482233!3d12.880862990915492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDUyJzUxLjEiTiA3N8KwMzcnMjMuNiJF!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location Map"
            ></iframe>
          </motion.div>
        </div>
      </motion.section>

      {/* FAQ Section with Accordion */}
      <motion.section
        className="faq-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
      >
        <div className="container">
          <motion.h2 variants={fadeIn}>Frequently Asked Questions</motion.h2>
          <motion.div
            className="accent-line"
            initial={{ width: 0 }}
            whileInView={{ width: 100 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          ></motion.div>

          <motion.div
            className="faq-container"
            variants={fadeIn}
          >
            {faqItems.map((faq, index) => (
              <motion.div
                key={index}
                className={`faq-item ${expandedFaq === index ? 'active' : ''}`}
                variants={fadeIn}
                custom={index}
                whileHover={{ scale: expandedFaq === index ? 1 : 1.01 }}
              >
                <div
                  className="faq-question"
                  onClick={() => toggleFaq(index)}
                >
                  <h3>{faq.question}</h3>
                  <motion.div
                    className="faq-icon"
                    animate={{ rotate: expandedFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <i className="fas fa-chevron-down"></i>
                  </motion.div>
                </div>

                <AnimatePresence>
                  {expandedFaq === index && (
                    <motion.div
                      className="faq-answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p>{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Contact;
