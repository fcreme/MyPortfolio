import React from 'react';
import { motion } from 'framer-motion';
import { User, MapPin, Calendar, Mail, Phone } from 'lucide-react';
import './About.css';

const About = () => {
        const personalInfo = [
        { icon: <User size={20} />, label: 'Name', value: 'Felipe Cremerius' },
        { icon: <MapPin size={20} />, label: 'Location', value: 'Buenos Aires, Argentina' },
        { icon: <Calendar size={20} />, label: 'Experience', value: 'Frontend Developer' },
        { icon: <Mail size={20} />, label: 'Email', value: 'felipecremerius1@gmail.com' },
        { icon: <Phone size={20} />, label: 'Phone', value: '+54 11 6200 7718' }
      ];

        const experience = [
        {
          year: '2024 - Present',
          title: 'Frontend Developer',
          company: 'Freelance',
          description: 'Development of modern and responsive user interfaces with React, JavaScript and frontend technologies.'
        },
        {
          year: '2022 - 2023',
          title: 'Full Stack Diploma',
          company: 'UTN - National Technological University',
          description: 'Complete training in full stack web development with modern technologies.'
        },
        {
          year: '2020 - 2023',
          title: 'Bachelor in Image and Sound Design',
          company: 'University of Palermo',
          description: 'Degree in progress in multimedia design, specializing in digital design.'
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
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Learn more about my experience, passion and professional journey
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
                            <h3>Who am I?</h3>
                <p>
                  I'm Felipe Cremerius, a Frontend Developer and Multimedia Designer
                  passionate about creating unique digital experiences and innovative solutions.
                  My background combines the creativity of multimedia design with the logic
                  of frontend development, allowing me to create exceptional user interfaces.
                </p>
                <p>
                  I'm currently studying for a Bachelor's degree in Multimedia Design at the University of Palermo, where I develop
                  my creativity and digital design skills. Subsequently, I completed
                  the Full Stack diploma at UTN, where I acquired solid knowledge
                  in modern web development, specializing in frontend technologies.
                </p>
                <p>
                  My approach focuses on creating user interfaces that not only work
                  perfectly, but also offer exceptional user experiences,
                  combining my technical knowledge with my artistic sensibility.
                </p>
          </motion.div>

          <motion.div
            className="about-info"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3>Personal Information</h3>
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
          <h3>Professional Experience</h3>
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