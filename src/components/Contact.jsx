import React, { useRef } from 'react';
import './Contact.css';
import { motion } from 'framer-motion';
import { FiSend, FiUser, FiMail, FiMessageSquare } from 'react-icons/fi';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

export default function Contact() {
  const formRef = useRef();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic here
    formRef.current.reset();
    // Animation/confirmation could be added
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <motion.div 
          className="contact-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            Get In <span className="highlight">Touch</span>
          </motion.h2>

          <motion.p className="section-subtitle" variants={itemVariants}>
            Have a project in mind or want to collaborate? Feel free to reach out!
          </motion.p>

          <div className="contact-grid">
            <motion.form 
              ref={formRef}
              onSubmit={handleSubmit}
              className="contact-form"
              variants={itemVariants}
            >
              <div className="input-group">
                <FiUser className="input-icon" />
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  required 
                  className="form-input"
                />
                <span className="input-highlight"></span>
              </div>

              <div className="input-group">
                <FiMail className="input-icon" />
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  required 
                  className="form-input"
                />
                <span className="input-highlight"></span>
              </div>

              <div className="input-group textarea-group">
                <FiMessageSquare className="input-icon" />
                <textarea 
                  placeholder="Your Message" 
                  required 
                  className="form-textarea"
                ></textarea>
                <span className="input-highlight"></span>
              </div>

              <motion.button 
                type="submit" 
                className="submit-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
                <FiSend className="send-icon" />
              </motion.button>
            </motion.form>

            <motion.div className="contact-info" variants={itemVariants}>
              <div className="info-card">
                <h3>Contact Information</h3>
                

                <div className="social-links">
                  <a href="https://www.linkedin.com/in/srushti-bhilare/" className="social-link" aria-label="LinkedIn">
                    <FaLinkedin />
                  </a>
                  <a href="https://github.com/srushtibhilare" className="social-link" aria-label="GitHub">
                    <FaGithub />
                  </a>
                  <a href="#" className="social-link" aria-label="Twitter">
                    <FaTwitter />
                  </a>
                </div>
              </div>

              
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}