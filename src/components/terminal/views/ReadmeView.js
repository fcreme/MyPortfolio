import React from 'react';
import { Line, Empty } from '../Line';

const ReadmeView = ({ onNavigate }) => {
  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Felipe_Cremerius_CV.pdf';
    link.download = 'Felipe_Cremerius_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="content-view">
      <Line n={1}>
        <span className="syn-heading-marker"># </span>
        <span className="syn-heading">Felipe Cremerius</span>
      </Line>
      <Empty n={2} />
      <Line n={3}>
        <span className="syn-heading-marker">## </span>
        <span className="syn-heading">Full Stack Developer</span>
      </Line>
      <Empty n={4} />
      <Line n={5}>
        Full Stack Developer specialized in React, Node.js, and modern web
      </Line>
      <Line n={6}>
        applications. Building end-to-end solutions from frontend interfaces
      </Line>
      <Line n={7}>
        to backend APIs, collaborating with business stakeholders to translate
      </Line>
      <Line n={8}>
        workflows into scalable applications. Strong focus on performance,
      </Line>
      <Line n={9}>
        clean architecture, and pixel-perfect UI.
      </Line>
      <Empty n={10} />
      <Line n={11}>
        <span className="syn-hr">---</span>
      </Line>
      <Empty n={12} />
      <Line n={13}>
        <span className="syn-heading-marker">### </span>
        <span className="syn-heading">Quick Navigation</span>
      </Line>
      <Empty n={14} />
      <Line n={15}>
        <span className="syn-list-marker">- </span>
        <span className="syn-link-bracket">[</span>
        <button className="nav-file-link" onClick={() => onNavigate('about.md')}>About Me</button>
        <span className="syn-link-bracket">]</span>
        <span className="syn-comment"> — Who am I?</span>
      </Line>
      <Line n={16}>
        <span className="syn-list-marker">- </span>
        <span className="syn-link-bracket">[</span>
        <button className="nav-file-link" onClick={() => onNavigate('experience.md')}>Experience</button>
        <span className="syn-link-bracket">]</span>
        <span className="syn-comment"> — Professional timeline</span>
      </Line>
      <Line n={17}>
        <span className="syn-list-marker">- </span>
        <span className="syn-link-bracket">[</span>
        <button className="nav-file-link" onClick={() => onNavigate('skills.tsx')}>Skills & Tech</button>
        <span className="syn-link-bracket">]</span>
        <span className="syn-comment"> — Technologies I use</span>
      </Line>
      <Line n={18}>
        <span className="syn-list-marker">- </span>
        <span className="syn-link-bracket">[</span>
        <button className="nav-file-link" onClick={() => onNavigate('projects.tsx')}>Projects</button>
        <span className="syn-link-bracket">]</span>
        <span className="syn-comment"> — Featured work</span>
      </Line>
      <Line n={19}>
        <span className="syn-list-marker">- </span>
        <span className="syn-link-bracket">[</span>
        <button className="nav-file-link" onClick={() => onNavigate('contact.sh')}>Contact</button>
        <span className="syn-link-bracket">]</span>
        <span className="syn-comment"> — Get in touch</span>
      </Line>
      <Empty n={20} />
      <Line n={21}>
        <span className="syn-hr">---</span>
      </Line>
      <Empty n={22} />
      <Line n={23}>
        <span className="syn-heading-marker">### </span>
        <span className="syn-heading">Download</span>
      </Line>
      <Empty n={24} />
      <Line n={25}>
        <span className="syn-list-marker">📄 </span>
        <span className="syn-link" onClick={downloadCV}>[Download CV (PDF)]</span>
      </Line>
      <Empty n={26} />
      <Line n={27}>
        <span className="syn-heading-marker">### </span>
        <span className="syn-heading">Connect</span>
      </Line>
      <Empty n={28} />
      <Line n={29}>
        <span className="syn-list-marker">- </span>
        <span className="syn-bold">GitHub: </span>
        <a className="syn-link" href="https://github.com/fcreme" target="_blank" rel="noopener noreferrer">github.com/fcreme</a>
      </Line>
      <Line n={30}>
        <span className="syn-list-marker">- </span>
        <span className="syn-bold">LinkedIn: </span>
        <a className="syn-link" href="https://www.linkedin.com/in/felipecremerius" target="_blank" rel="noopener noreferrer">linkedin.com/in/felipecremerius</a>
      </Line>
      <Line n={31}>
        <span className="syn-list-marker">- </span>
        <span className="syn-bold">Email: </span>
        <a className="syn-link" href="mailto:felipecremerius1@gmail.com">felipecremerius1@gmail.com</a>
      </Line>
      <Line n={32}>
        <span className="syn-list-marker">- </span>
        <span className="syn-bold">Resume: </span>
        <a className="syn-link" href="/Felipe_Cremerius_CV.pdf" download>Download CV (PDF)</a>
      </Line>
      <Empty n={33} />
      <Line n={34}>
        <span className="syn-comment">{'<!-- Built with React • Styled as Neovim -->'}</span>
      </Line>
    </div>
  );
};

export default ReadmeView;
