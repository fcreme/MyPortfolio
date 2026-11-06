import React from 'react';
import { Line, Empty } from '../Line';
import { SpecialText } from '../../ui/special-text';
import { CvLink } from '../CvLink';

const ReadmeView = ({ onNavigate }) => {
  let n = 0;
  const l = () => ++n;
  let d = 0;
  const next = (step = 0.03) => { d += step; return d; };

  return (
    <div className="content-view">
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-heading-marker">{'# '}</SpecialText>
        <SpecialText speed={10} delay={next(0.01)} className="syn-heading">Felipe Cremerius</SpecialText>
      </Line>
      <Empty n={l()} />
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-heading-marker">{'## '}</SpecialText>
        <SpecialText speed={10} delay={next(0.01)} className="syn-heading">AI Engineer</SpecialText>
      </Line>
      <Empty n={l()} />
      <Line n={l()}>
        <SpecialText speed={8} delay={next()}>AI Engineer building LLM-powered applications and agent workflows:</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={8} delay={next()}>multi-provider chatbots, MCP tool integrations, and automation, on</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={8} delay={next()}>a full-stack base of React, Node.js, and TypeScript. I also evaluate</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={8} delay={next()}>AI model output, reviewing generated code and grading reasoning,</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={8} delay={next()}>which shapes how I test what I ship.</SpecialText>
      </Line>
      <Empty n={l()} />
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-hr">---</SpecialText>
      </Line>
      <Empty n={l()} />
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-heading-marker">{'### '}</SpecialText>
        <SpecialText speed={10} delay={next(0.01)} className="syn-heading">Quick Navigation</SpecialText>
      </Line>
      <Empty n={l()} />
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-list-marker">{'- '}</SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-link-bracket">[</SpecialText>
        <button className="nav-file-link" onClick={() => onNavigate('about.md')}>
          <SpecialText speed={8} delay={next(0.01)}>About Me</SpecialText>
        </button>
        <SpecialText speed={5} delay={next(0.005)} className="syn-link-bracket">]</SpecialText>
        <SpecialText speed={8} delay={next(0.01)} className="syn-comment">{' — Who am I?'}</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-list-marker">{'- '}</SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-link-bracket">[</SpecialText>
        <button className="nav-file-link" onClick={() => onNavigate('experience.md')}>
          <SpecialText speed={8} delay={next(0.01)}>Experience</SpecialText>
        </button>
        <SpecialText speed={5} delay={next(0.005)} className="syn-link-bracket">]</SpecialText>
        <SpecialText speed={8} delay={next(0.01)} className="syn-comment">{' — Professional timeline'}</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-list-marker">{'- '}</SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-link-bracket">[</SpecialText>
        <button className="nav-file-link" onClick={() => onNavigate('skills.tsx')}>
          <SpecialText speed={8} delay={next(0.01)}>Skills & Tech</SpecialText>
        </button>
        <SpecialText speed={5} delay={next(0.005)} className="syn-link-bracket">]</SpecialText>
        <SpecialText speed={8} delay={next(0.01)} className="syn-comment">{' — Technologies I use'}</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-list-marker">{'- '}</SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-link-bracket">[</SpecialText>
        <button className="nav-file-link" onClick={() => onNavigate('projects.tsx')}>
          <SpecialText speed={8} delay={next(0.01)}>Projects</SpecialText>
        </button>
        <SpecialText speed={5} delay={next(0.005)} className="syn-link-bracket">]</SpecialText>
        <SpecialText speed={8} delay={next(0.01)} className="syn-comment">{' — Featured work'}</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-list-marker">{'- '}</SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-link-bracket">[</SpecialText>
        <button className="nav-file-link" onClick={() => onNavigate('contact.sh')}>
          <SpecialText speed={8} delay={next(0.01)}>Contact</SpecialText>
        </button>
        <SpecialText speed={5} delay={next(0.005)} className="syn-link-bracket">]</SpecialText>
        <SpecialText speed={8} delay={next(0.01)} className="syn-comment">{' — Get in touch'}</SpecialText>
      </Line>
      <Empty n={l()} />
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-hr">---</SpecialText>
      </Line>
      <Empty n={l()} />
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-heading-marker">{'### '}</SpecialText>
        <SpecialText speed={10} delay={next(0.01)} className="syn-heading">Download</SpecialText>
      </Line>
      <Empty n={l()} />
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-list-marker">{'📄 '}</SpecialText>
        <CvLink>
          <SpecialText speed={8} delay={next(0.01)}>[Download CV (PDF)]</SpecialText>
        </CvLink>
      </Line>
      <Empty n={l()} />
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-heading-marker">{'### '}</SpecialText>
        <SpecialText speed={10} delay={next(0.01)} className="syn-heading">Connect</SpecialText>
      </Line>
      <Empty n={l()} />
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-list-marker">{'- '}</SpecialText>
        <SpecialText speed={8} delay={next(0.01)} className="syn-bold">{'GitHub: '}</SpecialText>
        <a className="syn-link" href="https://github.com/fcreme" target="_blank" rel="noopener noreferrer">
          <SpecialText speed={8} delay={next(0.01)}>github.com/fcreme</SpecialText>
        </a>
      </Line>
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-list-marker">{'- '}</SpecialText>
        <SpecialText speed={8} delay={next(0.01)} className="syn-bold">{'LinkedIn: '}</SpecialText>
        <a className="syn-link" href="https://www.linkedin.com/in/felipecremerius" target="_blank" rel="noopener noreferrer">
          <SpecialText speed={8} delay={next(0.01)}>linkedin.com/in/felipecremerius</SpecialText>
        </a>
      </Line>
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-list-marker">{'- '}</SpecialText>
        <SpecialText speed={8} delay={next(0.01)} className="syn-bold">{'Email: '}</SpecialText>
        <a className="syn-link" href="mailto:felipecremerius1@gmail.com">
          <SpecialText speed={8} delay={next(0.01)}>felipecremerius1@gmail.com</SpecialText>
        </a>
      </Line>
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-list-marker">{'- '}</SpecialText>
        <SpecialText speed={8} delay={next(0.01)} className="syn-bold">{'Resume: '}</SpecialText>
        <CvLink>
          <SpecialText speed={8} delay={next(0.01)}>Download CV (PDF)</SpecialText>
        </CvLink>
      </Line>
      <Empty n={l()} />
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-comment">{'<!-- Built with React • Styled as Neovim -->'}</SpecialText>
      </Line>
    </div>
  );
};

export default ReadmeView;
