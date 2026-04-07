import React from 'react';
import { Line, Empty } from '../Line';
import { SpecialText } from '../../ui/special-text';

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
        <SpecialText speed={10} delay={0.05} className="syn-heading">Felipe Cremerius</SpecialText>
      </Line>
      <Empty n={2} />
      <Line n={3}>
        <span className="syn-heading-marker">## </span>
        <SpecialText speed={10} delay={0.12} className="syn-heading">Full Stack Developer</SpecialText>
      </Line>
      <Empty n={4} />
      <Line n={5}>
        <SpecialText speed={8} delay={0.2}>Full Stack Developer specialized in React, Node.js, and modern web</SpecialText>
      </Line>
      <Line n={6}>
        <SpecialText speed={8} delay={0.23}>applications. Building end-to-end solutions from frontend interfaces</SpecialText>
      </Line>
      <Line n={7}>
        <SpecialText speed={8} delay={0.26}>to backend APIs, collaborating with business stakeholders to translate</SpecialText>
      </Line>
      <Line n={8}>
        <SpecialText speed={8} delay={0.29}>workflows into scalable applications. Strong focus on performance,</SpecialText>
      </Line>
      <Line n={9}>
        <SpecialText speed={8} delay={0.32}>clean architecture, and pixel-perfect UI.</SpecialText>
      </Line>
      <Empty n={10} />
      <Line n={11}>
        <span className="syn-hr">---</span>
      </Line>
      <Empty n={12} />
      <Line n={13}>
        <span className="syn-heading-marker">### </span>
        <SpecialText speed={10} delay={0.38} className="syn-heading">Quick Navigation</SpecialText>
      </Line>
      <Empty n={14} />
      <Line n={15}>
        <span className="syn-list-marker">- </span>
        <span className="syn-link-bracket">[</span>
        <button className="nav-file-link" onClick={() => onNavigate('about.md')}>About Me</button>
        <span className="syn-link-bracket">]</span>
        <SpecialText speed={8} delay={0.42} className="syn-comment">{' — Who am I?'}</SpecialText>
      </Line>
      <Line n={16}>
        <span className="syn-list-marker">- </span>
        <span className="syn-link-bracket">[</span>
        <button className="nav-file-link" onClick={() => onNavigate('experience.md')}>Experience</button>
        <span className="syn-link-bracket">]</span>
        <SpecialText speed={8} delay={0.45} className="syn-comment">{' — Professional timeline'}</SpecialText>
      </Line>
      <Line n={17}>
        <span className="syn-list-marker">- </span>
        <span className="syn-link-bracket">[</span>
        <button className="nav-file-link" onClick={() => onNavigate('skills.tsx')}>Skills & Tech</button>
        <span className="syn-link-bracket">]</span>
        <SpecialText speed={8} delay={0.48} className="syn-comment">{' — Technologies I use'}</SpecialText>
      </Line>
      <Line n={18}>
        <span className="syn-list-marker">- </span>
        <span className="syn-link-bracket">[</span>
        <button className="nav-file-link" onClick={() => onNavigate('projects.tsx')}>Projects</button>
        <span className="syn-link-bracket">]</span>
        <SpecialText speed={8} delay={0.51} className="syn-comment">{' — Featured work'}</SpecialText>
      </Line>
      <Line n={19}>
        <span className="syn-list-marker">- </span>
        <span className="syn-link-bracket">[</span>
        <button className="nav-file-link" onClick={() => onNavigate('contact.sh')}>Contact</button>
        <span className="syn-link-bracket">]</span>
        <SpecialText speed={8} delay={0.54} className="syn-comment">{' — Get in touch'}</SpecialText>
      </Line>
      <Empty n={20} />
      <Line n={21}>
        <span className="syn-hr">---</span>
      </Line>
      <Empty n={22} />
      <Line n={23}>
        <span className="syn-heading-marker">### </span>
        <SpecialText speed={10} delay={0.58} className="syn-heading">Download</SpecialText>
      </Line>
      <Empty n={24} />
      <Line n={25}>
        <span className="syn-list-marker">📄 </span>
        <span className="syn-link" onClick={downloadCV}>[Download CV (PDF)]</span>
      </Line>
      <Empty n={26} />
      <Line n={27}>
        <span className="syn-heading-marker">### </span>
        <SpecialText speed={10} delay={0.62} className="syn-heading">Connect</SpecialText>
      </Line>
      <Empty n={28} />
      <Line n={29}>
        <span className="syn-list-marker">- </span>
        <SpecialText speed={8} delay={0.65} className="syn-bold">{'GitHub: '}</SpecialText>
        <a className="syn-link" href="https://github.com/fcreme" target="_blank" rel="noopener noreferrer">github.com/fcreme</a>
      </Line>
      <Line n={30}>
        <span className="syn-list-marker">- </span>
        <SpecialText speed={8} delay={0.68} className="syn-bold">{'LinkedIn: '}</SpecialText>
        <a className="syn-link" href="https://www.linkedin.com/in/felipecremerius" target="_blank" rel="noopener noreferrer">linkedin.com/in/felipecremerius</a>
      </Line>
      <Line n={31}>
        <span className="syn-list-marker">- </span>
        <SpecialText speed={8} delay={0.71} className="syn-bold">{'Email: '}</SpecialText>
        <a className="syn-link" href="mailto:felipecremerius1@gmail.com">felipecremerius1@gmail.com</a>
      </Line>
      <Line n={32}>
        <span className="syn-list-marker">- </span>
        <SpecialText speed={8} delay={0.74} className="syn-bold">{'Resume: '}</SpecialText>
        <a className="syn-link" href="/Felipe_Cremerius_CV.pdf" download>Download CV (PDF)</a>
      </Line>
      <Empty n={33} />
      <Line n={34}>
        <SpecialText speed={5} delay={0.8} className="syn-comment">{'<!-- Built with React • Styled as Neovim -->'}</SpecialText>
      </Line>
    </div>
  );
};

export default ReadmeView;
