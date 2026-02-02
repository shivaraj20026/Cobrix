import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import '../styles/ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

  const [focused, setFocused] = useState({
    name: false,
    email: false,
    phone: false,
    serviceType: false,
    message: false
  });

  const handleFocus = (field) => {
    setFocused({
      ...focused,
      [field]: true
    });
  };

  const handleBlur = (field) => {
    if (!formData[field]) {
      setFocused({
        ...focused,
        [field]: false
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      serviceType: formData.serviceType,
      message: formData.message
    };

    emailjs.send(
      'service_8vmnfsl',       // Replace with your EmailJS service ID
      'template_nthjbpl',      // Replace with your EmailJS template ID
      templateParams,
      'PBRoImwpZQqiQ48Ky'        // Replace with your EmailJS public key
    ).then((response) => {
      console.log('Email sent successfully:', response.text);

      setFormStatus({
        submitted: true,
        success: true,
        message: 'Thank you for your message! We will get back to you soon.'
      });

      setFormData({
        name: '',
        email: '',
        phone: '',
        serviceType: '',
        message: ''
      });

      setFocused({
        name: false,
        email: false,
        phone: false,
        serviceType: false,
        message: false
      });

      setTimeout(() => {
        setFormStatus({
          submitted: false,
          success: false,
          message: ''
        });
      }, 3000);
    }).catch((error) => {
      console.error('Email sending error:', error);

      setFormStatus({
        submitted: true,
        success: false,
        message: 'Oops! Something went wrong. Please try again later.'
      });
    });
  };

  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const inputVariants = {
    focused: { scale: 0.98, boxShadow: "0 0 0 2px #0A3A5E" },
    unfocused: { scale: 1, boxShadow: "0 0 0 1px #ddd" }
  };

  return (
    <motion.div
      className="contact-form-container"
      initial="hidden"
      animate="visible"
      variants={formVariants}
    >
      <h2>Request a Consultation</h2>
      <div className="accent-line"></div>

      {formStatus.submitted ? (
        <motion.div
          className={`form-message ${formStatus.success ? 'success' : 'error'}`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <i className={formStatus.success ? 'fas fa-check-circle' : 'fas fa-exclamation-circle'}></i>
          <p>{formStatus.message}</p>
        </motion.div>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className={`form-group ${focused.name || formData.name ? 'focused' : ''}`}>
            <motion.input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onFocus={() => handleFocus('name')}
              onBlur={() => handleBlur('name')}
              variants={inputVariants}
              animate={focused.name ? "focused" : "unfocused"}
              required
            />
            <label htmlFor="name">Your Name</label>
            <div className="form-icon">
              <i className="fas fa-user"></i>
            </div>
          </div>

          <div className={`form-group ${focused.email || formData.email ? 'focused' : ''}`}>
            <motion.input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onFocus={() => handleFocus('email')}
              onBlur={() => handleBlur('email')}
              variants={inputVariants}
              animate={focused.email ? "focused" : "unfocused"}
              required
            />
            <label htmlFor="email">Email Address</label>
            <div className="form-icon">
              <i className="fas fa-envelope"></i>
            </div>
          </div>

          <div className={`form-group ${focused.phone || formData.phone ? 'focused' : ''}`}>
            <motion.input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              onFocus={() => handleFocus('phone')}
              onBlur={() => handleBlur('phone')}
              variants={inputVariants}
              animate={focused.phone ? "focused" : "unfocused"}
              required
            />
            <label htmlFor="phone">Phone Number</label>
            <div className="form-icon">
              <i className="fas fa-phone"></i>
            </div>
          </div>

          <div className={`form-group ${focused.serviceType || formData.serviceType ? 'focused' : ''}`}>
            <motion.select
              id="serviceType"
              name="serviceType"
              value={formData.serviceType}
              onChange={handleChange}
              onFocus={() => handleFocus('serviceType')}
              onBlur={() => handleBlur('serviceType')}
              variants={inputVariants}
              animate={focused.serviceType ? "focused" : "unfocused"}
              required
            >
              <option value="" disabled></option>
              <option value="residential">Residential Construction</option>
              <option value="commercial">Commercial Construction</option>
              <option value="renovation">Renovation</option>
              <option value="consultation">Consultation</option>
              <option value="other">Other Services</option>
            </motion.select>
            <label htmlFor="serviceType">Service Type</label>
            <div className="form-icon">
              <i className="fas fa-tools"></i>
            </div>
          </div>

          <div className={`form-group ${focused.message || formData.message ? 'focused' : ''}`}>
            <motion.textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              onFocus={() => handleFocus('message')}
              onBlur={() => handleBlur('message')}
              rows="5"
              variants={inputVariants}
              animate={focused.message ? "focused" : "unfocused"}
              required
            ></motion.textarea>
            <label htmlFor="message">Your Message</label>
            <div className="form-icon">
              <i className="fas fa-comment"></i>
            </div>
          </div>

          <motion.button
            type="submit"
            className="btn btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
            <i className="fas fa-paper-plane"></i>
          </motion.button>
        </form>
      )}
    </motion.div>
  );
};

export default ContactForm;
