import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleEmailClick = (e) => {
    e.preventDefault();
    
    // Open Gmail web directly (more reliable)
    window.open('https://mail.google.com/mail/?view=cm&fs=1&to=felipecremerius1@gmail.com&su=Contact from Portfolio', '_blank');
  };

  const socialLinks = [
    {
      icon: <Github size={20} />,
      url: 'https://github.com/fcreme',
      label: 'GitHub'
    },
    {
      icon: <Linkedin size={20} />,
      url: 'https://www.linkedin.com/in/felipe-cremerius-6b6389208/',
      label: 'LinkedIn'
    },
    {
      icon: <Mail size={20} />,
      url: '#',
      label: 'Email',
      onClick: handleEmailClick
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
                        <motion.div
                className="footer-section"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="footer-title">Felipe Cremerius</h3>
                <p className="footer-description">
                  Frontend Developer specialized in React and modern web applications.
                  Strong focus on performance, responsive and pixel-perfect UI.
                </p>
              </motion.div>

          <motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="footer-subtitle">Quick Links</h4>
            <ul className="footer-links">
              <li>
                <button onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}>
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
                  About
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}>
                  Skills
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                  Projects
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                  Contact
                </button>
              </li>
            </ul>
          </motion.div>

                        <motion.div
                className="footer-section"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h4 className="footer-subtitle">Contact</h4>
                <div className="footer-contact">
                  <p>felipecremerius1@gmail.com</p>
                  <p>+54 11 6200 7718</p>
                  <p>Buenos Aires, Argentina</p>
                </div>
              </motion.div>

          <motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="footer-subtitle">Follow Me</h4>
            <div className="footer-social">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                  onClick={social.onClick}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="footer-copyright">
            <p>
              © {currentYear} Felipe Cremerius. Made with{' '}
              <Heart size={16} className="heart-icon" />
              {' '}and React
            </p>
          </div>
          
          <motion.button
            className="scroll-to-top"
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Back to top"
          >
            ↑
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 