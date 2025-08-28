import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Palette, Globe, Smartphone, Server } from 'lucide-react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code size={24} />,
      title: 'Frontend',
      skills: [
        { name: 'React', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'TypeScript', level: 80 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'WordPress', level: 85 },
        { name: 'Liquid', level: 85 },
        { name: 'Vue.js', level: 50 }
      ]
    },
    {
      icon: <Server size={24} />,
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 80 },
        
        
       
      ]
    },
    {
      icon: <Database size={24} />,
      title: 'Bases de Datos',
      skills: [
        { name: 'MySQL', level: 95 },
        { name: 'MongoDB', level: 80 },
        { name: 'PostgreSQL', level: 75 },
        
        
      ]
    },
    {
      icon: <Palette size={24} />,
      title: 'Diseño & UI/UX',
      skills: [
        { name: 'Photoshop', level: 95 },
        { name: 'CSS Grid/Flexbox', level: 90 },
        { name: 'Responsive Design', level: 90 }
      ]
    },
    {
      icon: <Globe size={24} />,
      title: 'Herramientas & DevOps',
            skills: [
        { name: 'Git', level: 90 },
        { name: 'GitHub', level: 90 },
        
        
        
      ]
    },
    {
      icon: <Smartphone size={24} />,
      title: 'Mobile & Otros',
      skills: [
        { name: 'React Native', level: 75 },
        { name: 'REST APIs', level: 90 }
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Habilidades & Tecnologías</h2>
          <p className="section-subtitle">
            Tecnologías y herramientas que utilizo para crear soluciones digitales
          </p>
        </motion.div>

        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="skill-category"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="category-header">
                <div className="category-icon">{category.icon}</div>
                <h3 className="category-title">{category.title}</h3>
              </div>
              
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="skill-item"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                    viewport={{ once: true }}
                  >
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) + 0.3 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="additional-skills"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3>Otras Habilidades</h3>
          <div className="skills-tags">
            {[
              'FTP', 'Testing', 'Performance', 'SEO', 'Analytics',
              'WordPress', 'Shopify', 'Stripe', 'PayPal', 'OAuth',
              'Webpack', 'Prettier', 'Jest',
              'Sass/SCSS', 'Tailwind CSS', 'Bootstrap', 'Ant Design'
            ].map((skill, index) => (
              <motion.span
                key={index}
                className="skill-tag"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.8 + (index * 0.02) }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 