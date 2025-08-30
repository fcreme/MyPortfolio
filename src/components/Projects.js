import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Eye } from 'lucide-react';
import './Projects.css';

const Projects = () => {

  const projects = [
    {
      id: 1,
      title: 'TIDE Active - Personal Brand',
      description: 'Personal brand website for fitness and lifestyle trainer. Complete platform with modern design, responsive and optimized for conversion.',
      image: '/tomipagina.jpg',
      technologies: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
      category: 'frontend',
      liveUrl: 'https://tideactive.com/',
      githubUrl: 'https://github.com/fcreme/tideactive-personal-brand',
      featured: true
    },
    {
      id: 2,
      title: 'Vie Wines - E-commerce',
      description: 'Premium online wine store with elegant and responsive design. Complete e-commerce platform with product catalog, shopping cart, advanced filters and integrated payment system.',
      image: '/viewinespagina.jpg',
      technologies: ['HTML5', 'SCSS', 'JavaScript', 'Liquid', 'TiendaNube/Nuvemshop', 'FTP'],
      category: 'frontend',
      liveUrl: 'https://viewines.com.ar/',
      githubUrl: 'https://github.com/fcreme/Vie-Wines---E-commerce',
      featured: true
    },
    {
      id: 3,
      title: 'Espacios en Madera - WordPress',
      description: 'Corporate website for woodworking and wooden furniture company. Custom design with WordPress, optimized for SEO and modern user experience.',
      image: '/espaciosenmadera.jpg',
      technologies: ['WordPress', 'PHP', 'CSS3', 'JavaScript', 'SEO', 'Responsive Design'],
      category: 'frontend',
      liveUrl: 'https://espaciosenmadera.com.ar/',
      githubUrl: null,
      featured: true
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      description: 'Weather dashboard with interactive maps, detailed forecasts and customizable widgets.',
      image: '/tomipagina.jpg',
      technologies: ['Vue.js', 'OpenWeather API', 'Chart.js', 'PWA'],
      category: 'frontend',
      liveUrl: 'https://ejemplo-weather.com',
      githubUrl: 'https://github.com/tu-usuario/weather-app',
      featured: false
    },
    {
      id: 5,
      title: 'REST API Service',
      description: 'Complete RESTful API with JWT authentication, automatic documentation and unit tests.',
      image: '/viewinespagina.jpg',
      technologies: ['Node.js', 'Express', 'PostgreSQL', 'Jest'],
      category: 'backend',
      liveUrl: 'https://api.ejemplo.com',
      githubUrl: 'https://github.com/tu-usuario/api-service',
      featured: false
    },
    {
      id: 6,
      title: 'Portfolio Website',
      description: 'Responsive personal website with animations, SEO optimized and modern design.',
      image: '/tomipagina.jpg',
      technologies: ['React', 'Framer Motion', 'CSS Grid', 'SEO'],
      category: 'frontend',
      liveUrl: 'https://tu-portfolio.com',
      githubUrl: 'https://github.com/tu-usuario/portfolio',
      featured: false
    },
    {
      id: 7,
      title: 'Chat Application',
      description: 'Real-time chat application with rooms, private messages and push notifications.',
      image: '/viewinespagina.jpg',
      technologies: ['React', 'Socket.io', 'MongoDB', 'Redis'],
      category: 'fullstack',
      liveUrl: 'https://ejemplo-chat.com',
      githubUrl: 'https://github.com/tu-usuario/chat-app',
      featured: false
    }
  ];



  // Only show featured projects
  const featuredProjects = projects.filter(project => project.featured);

  // Function to handle image errors
  const handleImageError = (e) => {
    e.target.src = '/tomipagina.jpg';
  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A showcase of my most recent work and personal projects
          </p>
        </motion.div>



        <motion.div
          className="projects-grid"
          layout
        >
          <AnimatePresence mode="wait">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className={`project-card ${project.featured ? 'featured' : ''}`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                layout
              >
                <div className="project-image">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    onError={handleImageError}
                  />
                  <div className="project-overlay">
                    <div className="project-links">
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Eye size={20} />
                        <span>View Demo</span>
                      </motion.a>
                      {project.githubUrl && (
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Github size={20} />
                          <span>Code</span>
                        </motion.a>
                      )}
                    </div>
                  </div>
                  {project.featured && (
                    <div className="featured-badge">
                      <span>Featured</span>
                    </div>
                  )}
                </div>
                
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-technologies">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div
          className="more-projects"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p>Like what you see? Check out more projects on my GitHub!</p>
          <motion.a
            href="https://github.com/fcreme"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={20} />
            See more on GitHub
            <ExternalLink size={16} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 