import React, { useEffect, useCallback } from 'react';
import { SpecialText } from '../ui/special-text';

const ASCII_ART = [
  '███████╗███████╗██╗     ██╗██████╗ ███████╗',
  '██╔════╝██╔════╝██║     ██║██╔══██╗██╔════╝',
  '█████╗  █████╗  ██║     ██║██████╔╝█████╗  ',
  '██╔══╝  ██╔══╝  ██║     ██║██╔═══╝ ██╔══╝  ',
  '██║     ███████╗███████╗██║██║     ███████╗',
  '╚═╝     ╚══════╝╚══════╝╚═╝╚═╝     ╚══════╝',
  '',
  ' ██████╗██████╗ ███████╗███╗   ███╗███████╗██████╗ ██╗██╗   ██╗███████╗',
  '██╔════╝██╔══██╗██╔════╝████╗ ████║██╔════╝██╔══██╗██║██║   ██║██╔════╝',
  '██║     ██████╔╝█████╗  ██╔████╔██║█████╗  ██████╔╝██║██║   ██║███████╗',
  '██║     ██╔══██╗██╔══╝  ██║╚██╔╝██║██╔══╝  ██╔══██╗██║██║   ██║╚════██║',
  '╚██████╗██║  ██║███████╗██║ ╚═╝ ██║███████╗██║  ██║██║╚██████╔╝███████║',
  ' ╚═════╝╚═╝  ╚═╝╚══════╝╚═╝     ╚═╝╚══════╝╚═╝  ╚═╝╚═╝ ╚═════╝ ╚══════╝',
];

const ACTIONS = [
  { key: 'r', file: 'README.md', label: 'README.md', desc: 'Home' },
  { key: 'a', file: 'about.md', label: 'about.md', desc: 'About Me' },
  { key: 'e', file: 'experience.md', label: 'experience.md', desc: 'Experience' },
  { key: 's', file: 'skills.tsx', label: 'skills.tsx', desc: 'Skills & Tech' },
  { key: 'p', file: 'projects.tsx', label: 'projects.tsx', desc: 'Projects' },
  { key: 'c', file: 'contact.sh', label: 'contact.sh', desc: 'Contact' },
];

const getTildeCount = () => {
  if (typeof window === 'undefined') return 6;
  if (window.innerHeight <= 650) return 2;
  if (window.innerHeight <= 800) return 4;
  return 8;
};

const Dashboard = ({ onSelectFile }) => {
  const TILDE_COUNT = getTildeCount();
  let d = 0;
  const next = (step = 0.05) => { d += step; return d; };

  const handleAction = useCallback((file) => {
    onSelectFile(file);
  }, [onSelectFile]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      const action = ACTIONS.find((a) => a.key === e.key.toLowerCase());
      if (action) {
        e.preventDefault();
        handleAction(action.file);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleAction]);

  return (
    <div className="dashboard-overlay">
      <div className="dashboard-content">
        <div className="dashboard-ascii">
          {ASCII_ART.map((line, i) => (
            <div key={i} className="dashboard-ascii-line">
              <SpecialText speed={40} delay={next(0.04)} className="text-inherit">{line || ' '}</SpecialText>
            </div>
          ))}
        </div>

        <div className="dashboard-subtitle">
          <SpecialText speed={12} delay={next(0.1)} className="text-inherit">Full Stack Developer</SpecialText>
        </div>

        <div className="dashboard-actions">
          {ACTIONS.map((action) => (
            <button
              key={action.key}
              className="dashboard-action"
              onClick={() => handleAction(action.file)}
            >
              <SpecialText speed={5} delay={next(0.06)} className="dashboard-action-key">[{action.key}]</SpecialText>
              <SpecialText speed={8} delay={next(0.01)} className="dashboard-action-file">{action.label}</SpecialText>
              <SpecialText speed={5} delay={next(0.005)} className="dashboard-action-sep">—</SpecialText>
              <SpecialText speed={8} delay={next(0.005)} className="dashboard-action-desc">{action.desc}</SpecialText>
            </button>
          ))}
        </div>

        <div className="dashboard-tildes">
          {Array.from({ length: TILDE_COUNT }, (_, i) => (
            <div key={i} className="tilde-line">
              <SpecialText speed={5} delay={next(0.03)} className="text-inherit">~</SpecialText>
            </div>
          ))}
        </div>

        <div className="dashboard-footer">
          <SpecialText speed={8} delay={next(0.1)} className="text-inherit">felipe-portfolio v2.0 — neovim edition</SpecialText>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
