import React from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/cv-felipe-cremerius.pdf';
    link.download = 'CV-Felipe-Cremerius.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
      url: 'mailto:felipecremerius1@gmail.com',
      label: 'Email'
    }
  ];

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="hero-title"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Hola, soy{' '}
              <span className="highlight">Felipe Cremerius</span>
            </motion.h1>
            
            <motion.h2
              className="hero-subtitle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Desarrollador Frontend & Diseñador Multimedia
            </motion.h2>
            
            <motion.p
              className="hero-description"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Apasionado por crear experiencias digitales únicas y soluciones innovadoras. 
              Licencenciatura en Curso de Diseño Multimedia de la Universidad de Palermo y diplomado en Full Stack de la UTN.
            </motion.p>

            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <motion.button
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('projects')}
              >
                Ver Proyectos
                <ArrowRight size={18} />
              </motion.button>
              
              <motion.button
                className="btn btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={downloadCV}
              >
                <Download size={18} />
                Descargar CV
              </motion.button>
            </motion.div>

            <motion.div
              className="social-links"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="code-window">
              <div className="window-header">
                <div className="window-buttons">
                  <div className="btn-red"></div>
                  <div className="btn-yellow"></div>
                  <div className="btn-green"></div>
                </div>
                <span className="window-title">portfolio.js</span>
              </div>
              <div className="window-content">
                <pre>
                  <code>
{`const developer = {
  name: "Felipe Cremerius",
  role: "Frontend Developer & Multimedia Designer",
  education: ["UTN - Full Stack", "UP - Licenciatura en Diseño Multimedia"],
  skills: ["React", "JavaScript", "Node.js","MySQL"],
  passion: "Creating amazing digital experiences",
  location: "Buenos Aires, Argentina"
};

console.log("¡Hola Mundo! 👋");`}
                  </code>
                </pre>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 