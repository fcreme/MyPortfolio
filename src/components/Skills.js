import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Palette, Globe, Smartphone, Server, Link } from 'lucide-react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code size={24} />,
      title: 'Frontend',
      skills: [
        { name: 'React', level: 90 },
        { name: 'Next.js', level: 80 },
        { name: 'JavaScript', level: 90 },
        { name: 'TypeScript', level: 80 },
        { name: 'HTML5/CSS3', level: 95 },
        { name: 'Tailwind CSS', level: 85 },
        { name: 'Framer Motion', level: 80 },
        { name: 'Material-UI', level: 75 },
        { name: 'Liquid', level: 75 }
      ]
    },
    {
      icon: <Server size={24} />,
      title: 'Backend & APIs',
      skills: [
        { name: 'Node.js', level: 80 },
        { name: 'NestJS', level: 80 },
        { name: 'Golang', level: 60 },
        { name: 'Prisma', level: 75 },
        { name: 'REST APIs', level: 90 },
        { name: 'Socket.io', level: 75 },
        { name: 'Google Apps Script', level: 80 }
      ]
    },
    {
      icon: <Database size={24} />,
      title: 'State & Data',
      skills: [
        { name: 'MySQL', level: 90 },
        { name: 'SQLite', level: 75 },
        { name: 'Zustand', level: 85 },
        { name: 'TanStack Query', level: 85 },
        { name: 'Axios', level: 90 }
      ]
    },
    {
      icon: <Palette size={24} />,
      title: 'Architecture & Performance',
      skills: [
        { name: 'Component-based Architecture', level: 90 },
        { name: 'Design Systems', level: 85 },
        { name: 'Code Splitting / Lazy Loading', level: 85 },
        { name: 'Caching Strategies', level: 80 }
      ]
    },
    {
      icon: <Globe size={24} />,
      title: 'Data Visualization & Testing',
      skills: [
        { name: 'ECharts', level: 85 },
        { name: 'Recharts', level: 80 },
        { name: 'Jest / Vitest', level: 75 }
      ]
    },
    {
      icon: <Smartphone size={24} />,
      title: 'Tools',
      skills: [
        { name: 'Git / GitHub', level: 90 },
        { name: 'Docker', level: 70 },
        { name: 'Neovim / VS Code', level: 90 },
        { name: 'Linux / WSL', level: 80 },
        { name: 'Claude Code', level: 85 },
        { name: 'LLMs', level: 80 },
        { name: 'Model Context Protocol', level: 75 },
        { name: 'Vercel', level: 80 },
        { name: 'Postman / Bruno', level: 85 }
      ]
    },
    {
      icon: <Link size={24} />,
      title: 'Web3 / Blockchain',
      skills: [
        { name: 'Wagmi', level: 70 },
        { name: 'RainbowKit', level: 70 },
        { name: 'Ethers.js', level: 70 }
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
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            Technologies and tools I use to create digital solutions
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
          <h3>Other Skills</h3>
          <div className="skills-tags">
            {[
              'Three.js', 'FTP / FileZilla', 'JSON Data Modeling', 'Screaming Architecture',
              'Modular Architecture', 'n8n Automation', 'Orange Data Mining',
              'Responsive Design', 'Pixel-perfect UI', 'Performance Optimization',
              'CI/CD', 'Web3 / Blockchain', 'SSR / SSG'
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