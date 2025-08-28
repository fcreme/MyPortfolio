import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Eye } from 'lucide-react';
import './Projects.css';

const Projects = () => {

  const projects = [
    {
      id: 1,
      title: 'TIDE Active - Personal Brand',
      description: 'Sitio web personal de marca para entrenador fitness y estilo de vida. Plataforma completa con diseño moderno, responsive y optimizada para conversión.',
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
      description: 'Tienda online premium de vinos con diseño elegante y responsive. Plataforma completa de e-commerce con catálogo de productos, carrito de compras, filtros avanzados y sistema de pagos integrado.',
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
      description: 'Sitio web corporativo para empresa de carpintería y muebles de madera. Diseño personalizado con WordPress, optimizado para SEO y experiencia de usuario moderna.',
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
      description: 'Dashboard meteorológico con mapas interactivos, pronósticos detallados y widgets personalizables.',
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
      description: 'API RESTful completa con autenticación JWT, documentación automática y tests unitarios.',
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
      description: 'Sitio web personal responsive con animaciones, SEO optimizado y diseño moderno.',
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
      description: 'Aplicación de chat en tiempo real con salas, mensajes privados y notificaciones push.',
      image: '/viewinespagina.jpg',
      technologies: ['React', 'Socket.io', 'MongoDB', 'Redis'],
      category: 'fullstack',
      liveUrl: 'https://ejemplo-chat.com',
      githubUrl: 'https://github.com/tu-usuario/chat-app',
      featured: false
    }
  ];



  // Solo mostrar proyectos destacados
  const featuredProjects = projects.filter(project => project.featured);

  // Función para manejar errores de imagen
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
          <h2 className="section-title">Proyectos Destacados</h2>
          <p className="section-subtitle">
            Una muestra de mis trabajos más recientes y proyectos personales
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
                        <span>Ver Demo</span>
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
                          <span>Código</span>
                        </motion.a>
                      )}
                    </div>
                  </div>
                  {project.featured && (
                    <div className="featured-badge">
                      <span>Destacado</span>
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
          <p>¿Te gusta lo que ves? ¡Echa un vistazo a más proyectos en mi GitHub!</p>
          <motion.a
            href="https://github.com/fcreme"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={20} />
            Ver más en GitHub
            <ExternalLink size={16} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 