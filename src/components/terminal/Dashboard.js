import React, { useEffect, useCallback } from 'react';

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

const TILDE_COUNT = 8;

const Dashboard = ({ onSelectFile }) => {
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
            <div key={i} className="dashboard-ascii-line">{line}</div>
          ))}
        </div>

        <div className="dashboard-subtitle">Frontend Developer</div>

        <div className="dashboard-actions">
          {ACTIONS.map((action) => (
            <button
              key={action.key}
              className="dashboard-action"
              onClick={() => handleAction(action.file)}
            >
              <span className="dashboard-action-key">[{action.key}]</span>
              <span className="dashboard-action-file">{action.label}</span>
              <span className="dashboard-action-sep">—</span>
              <span className="dashboard-action-desc">{action.desc}</span>
            </button>
          ))}
        </div>

        <div className="dashboard-tildes">
          {Array.from({ length: TILDE_COUNT }, (_, i) => (
            <div key={i} className="tilde-line">~</div>
          ))}
        </div>

        <div className="dashboard-footer">
          felipe-portfolio v2.0 — neovim edition
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
