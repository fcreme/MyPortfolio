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
        <span className="syn-heading">Frontend Developer</span>
      </Line>
      <Empty n={4} />
      <Line n={5}>
        Specialized in React and modern web applications. Building software
      </Line>
      <Line n={6}>
        from scratch by collaborating with business stakeholders to translate
      </Line>
      <Line n={7}>
        workflows into scalable applications. Strong focus on performance,
      </Line>
      <Line n={8}>
        responsive and pixel-perfect UI.
      </Line>
      <Empty n={9} />
      <Line n={10}>
        <span className="syn-hr">---</span>
      </Line>
      <Empty n={11} />
      <Line n={12}>
        <span className="syn-heading-marker">### </span>
        <span className="syn-heading">Quick Navigation</span>
      </Line>
      <Empty n={13} />
      <Line n={14}>
        <span className="syn-list-marker">- </span>
        <span className="syn-link-bracket">[</span>
        <button className="nav-file-link" onClick={() => onNavigate('about.md')}>About Me</button>
        <span className="syn-link-bracket">]</span>
        <span className="syn-comment"> — Who am I?</span>
      </Line>
      <Line n={15}>
        <span className="syn-list-marker">- </span>
        <span className="syn-link-bracket">[</span>
        <button className="nav-file-link" onClick={() => onNavigate('experience.md')}>Experience</button>
        <span className="syn-link-bracket">]</span>
        <span className="syn-comment"> — Professional timeline</span>
      </Line>
      <Line n={16}>
        <span className="syn-list-marker">- </span>
        <span className="syn-link-bracket">[</span>
        <button className="nav-file-link" onClick={() => onNavigate('skills.tsx')}>Skills & Tech</button>
        <span className="syn-link-bracket">]</span>
        <span className="syn-comment"> — Technologies I use</span>
      </Line>
      <Line n={17}>
        <span className="syn-list-marker">- </span>
        <span className="syn-link-bracket">[</span>
        <button className="nav-file-link" onClick={() => onNavigate('projects.tsx')}>Projects</button>
        <span className="syn-link-bracket">]</span>
        <span className="syn-comment"> — Featured work</span>
      </Line>
      <Line n={18}>
        <span className="syn-list-marker">- </span>
        <span className="syn-link-bracket">[</span>
        <button className="nav-file-link" onClick={() => onNavigate('contact.sh')}>Contact</button>
        <span className="syn-link-bracket">]</span>
        <span className="syn-comment"> — Get in touch</span>
      </Line>
      <Empty n={19} />
      <Line n={20}>
        <span className="syn-hr">---</span>
      </Line>
      <Empty n={21} />
      <Line n={22}>
        <span className="syn-heading-marker">### </span>
        <span className="syn-heading">Download</span>
      </Line>
      <Empty n={23} />
      <Line n={24}>
        <span className="syn-list-marker">📄 </span>
        <span className="syn-link" onClick={downloadCV}>[Download CV (PDF)]</span>
      </Line>
      <Empty n={25} />
      <Line n={26}>
        <span className="syn-heading-marker">### </span>
        <span className="syn-heading">Connect</span>
      </Line>
      <Empty n={27} />
      <Line n={28}>
        <span className="syn-list-marker">- </span>
        <span className="syn-bold">GitHub: </span>
        <a className="syn-link" href="https://github.com/fcreme" target="_blank" rel="noopener noreferrer">github.com/fcreme</a>
      </Line>
      <Line n={29}>
        <span className="syn-list-marker">- </span>
        <span className="syn-bold">LinkedIn: </span>
        <a className="syn-link" href="https://www.linkedin.com/in/felipecremerius" target="_blank" rel="noopener noreferrer">linkedin.com/in/felipecremerius</a>
      </Line>
      <Line n={30}>
        <span className="syn-list-marker">- </span>
        <span className="syn-bold">Email: </span>
        <a className="syn-link" href="mailto:felipecremerius1@gmail.com">felipecremerius1@gmail.com</a>
      </Line>
      <Line n={31}>
        <span className="syn-list-marker">- </span>
        <span className="syn-bold">Resume: </span>
        <a className="syn-link" href="/Felipe_Cremerius_CV.pdf" download>Download CV (PDF)</a>
      </Line>
      <Empty n={32} />
      <Line n={33}>
        <span className="syn-comment">{'<!-- Built with React • Styled as Neovim -->'}</span>
      </Line>
    </div>
  );
};

export default ReadmeView;
