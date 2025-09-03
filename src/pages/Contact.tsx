import { motion } from 'framer-motion';
import ContactForm from '../components/ContactForm';
import '../styles/Contact.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <div id="contact" className="contact-container">
      <motion.div 
        className="contact-header"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1 
          className="contact-title"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Contact Me
        </motion.h1>
        <motion.div 
          className="title-underline"
          initial={{ width: 0 }}
          animate={{ width: '80px' }}
          transition={{ delay: 0.5, duration: 0.8 }}
        />
      </motion.div>
      
      <div className="contact-content">
        <motion.div 
          className="contact-info"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <h2>Let's Talk</h2>
          <p>
            Whether you have a project in mind, a question about my work, or just want to say hello, 
            I'd love to hear from you. Fill out the form or reach out directly through the contact 
            information below.
          </p>
          
          <div className="contact-details">
            {/* <div className="contact-item">
              <h3>Email</h3>
              <p>your.email@example.com</p>
            </div>
            
            <div className="contact-item">
              <h3>Location</h3>
              <p>San Francisco, CA</p>
            </div> */}
            
            <div className="contact-item">
              <h3>Social</h3>
              <div className="social-links">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link-contact">
                  <FaGithub className="social-icon-contact" /> GitHub
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link-contact">
                  <FaLinkedin className="social-icon-contact" /> LinkedIn
                </a>
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="contact-form-wrapper"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <ContactForm />
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;