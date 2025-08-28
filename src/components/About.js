import React from 'react';
import { motion } from 'framer-motion';
import { User, MapPin, Calendar, Mail, Phone } from 'lucide-react';
import './About.css';

const About = () => {
        const personalInfo = [
        { icon: <User size={20} />, label: 'Nombre', value: 'Felipe Cremerius' },
        { icon: <MapPin size={20} />, label: 'Ubicación', value: 'Buenos Aires, Argentina' },
        { icon: <Calendar size={20} />, label: 'Experiencia', value: 'Desarrollador Frontend' },
        { icon: <Mail size={20} />, label: 'Email', value: 'felipecremerius1@gmail.com' },
        { icon: <Phone size={20} />, label: 'Teléfono', value: '+54 11 6200 7718' }
      ];

        const experience = [
        {
          year: '2024 - Presente',
          title: 'Desarrollador Frontend',
          company: 'Freelance',
          description: 'Desarrollo de interfaces de usuario modernas y responsivas con React, JavaScript y tecnologías frontend.'
        },
        {
          year: '2022 - 2023',
          title: 'Diplomatura Full Stack',
          company: 'UTN - Universidad Tecnológica Nacional',
          description: 'Formación completa en desarrollo web full stack con tecnologías modernas.'
        },
        {
          year: '2020 - 2023',
          title: 'Licenciatura en Diseño de Imagen y Sonido',
          company: 'Universidad de Palermo',
          description: 'Carrera en curso diseño multimedia, especialización en diseño digital.'
        }
      ];

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Sobre Mí</h2>
          <p className="section-subtitle">
            Conoce más sobre mi experiencia, pasión y trayectoria profesional
          </p>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
                            <h3>¿Quién soy?</h3>
                <p>
                  Soy Felipe Cremerius, un desarrollador Frontend y diseñador multimedia
                  apasionado por crear experiencias digitales únicas y soluciones innovadoras.
                  Mi formación combina la creatividad del diseño multimedia con la lógica
                  del desarrollo frontend, lo que me permite crear interfaces de usuario excepcionales.
                </p>
                <p>
                  Actualmente estoy estudiando la Licencenciatura en Diseño Multimedia en la Universidad de Palermo, donde desarrollo
                  mi creatividad y habilidades de diseño digital. Posteriormente, completé
                  la diplomatura Full Stack en la UTN, donde adquirí sólidos conocimientos
                  en desarrollo web moderno, especializándome en tecnologías frontend.
                </p>
                <p>
                  Mi enfoque se centra en crear interfaces de usuario que no solo funcionen
                  perfectamente, sino que también ofrezcan experiencias de usuario excepcionales,
                  combinando mis conocimientos técnicos con mi sensibilidad artística.
                </p>
          </motion.div>

          <motion.div
            className="about-info"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3>Información Personal</h3>
            <div className="info-grid">
              {personalInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="info-item"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="info-icon">{info.icon}</div>
                  <div className="info-content">
                    <span className="info-label">{info.label}</span>
                    <span className="info-value">{info.value}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="experience-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3>Experiencia Profesional</h3>
          <div className="timeline">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                className="timeline-item"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 + index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="timeline-year">{exp.year}</div>
                  <h4 className="timeline-title">{exp.title}</h4>
                  <div className="timeline-company">{exp.company}</div>
                  <p className="timeline-description">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 