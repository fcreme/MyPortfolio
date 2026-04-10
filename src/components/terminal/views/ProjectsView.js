import React, { useState } from 'react';
import { Line, Empty } from '../Line';
import { LinkPreview } from '../../ui/link-preview';
import { SpecialText } from '../../ui/special-text';

const ProjectsView = () => {
  const [linkReady, setLinkReady] = useState({});
  const projects = [
    {
      title: 'TIDE Active - Personal Brand',
      descBefore: '',
      descLinkText: 'Personal brand website',
      descLinkUrl: 'https://tideactive.com/',
      descLinkImg: '/tide2.png',
      descAfter: ' for fitness and lifestyle trainer. Complete platform with modern design, responsive and optimized for conversion.',
      technologies: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
      liveUrl: 'https://tideactive.com/',
      githubUrl: 'https://github.com/fcreme/tideactive-personal-brand',
    },
    {
      title: 'ClientDash - Project Management',
      descBefore: '',
      descLinkText: null,
      descLinkUrl: null,
      descLinkImg: null,
      descAfter: 'Full-stack project management dashboard with Kanban board, drag-and-drop tasks, real-time stats, authentication (email + Google OAuth), dark mode, and aurora animated backgrounds.',
      technologies: ['React', 'Express', 'Prisma', 'Tailwind CSS', 'Framer Motion', 'SQLite'],
      liveUrl: 'https://github.com/fcreme/client-dashboard',
      githubUrl: 'https://github.com/fcreme/client-dashboard',
    },
    {
      title: 'OnChain - DeFi Interface',
      descBefore: '',
      descLinkText: 'Modern DeFi interface',
      descLinkUrl: '#',
      descLinkImg: '/img.png',
      descAfter: ' for interacting with ERC20 tokens on Ethereum Sepolia testnet. Multi-wallet connectivity, real-time balances, token transfers, approvals and minting with glassmorphism UI.',
      technologies: ['React', 'TypeScript', 'Wagmi', 'RainbowKit', 'Material-UI', 'Zustand'],
      liveUrl: 'https://tokenflow-app.vercel.app/',
      githubUrl: 'https://github.com/fcreme/OnChainApp',
    },
    {
      title: 'Strudel Live Coding [Experimental]',
      descBefore: 'Experimental explorations in ',
      descLinkText: 'algorithmic music composition',
      descLinkUrl: '#',
      descLinkImg: '/strudel.png',
      descAfter: ' through live coding. Features multi-layered drum patterns, synthesizers, and real-time performance with Strudel and TidalCycles.',
      technologies: ['Strudel', 'TidalCycles', 'JavaScript', 'Web Audio API'],
      liveUrl: 'https://strudel.cc/',
      githubUrl: 'https://github.com/fcreme/strudel-livecoding',
    },
  ];

  let n = 0;
  const l = () => ++n;
  let d = 0;
  const next = (step = 0.03) => { d += step; return d; };

  return (
    <div className="content-view">
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-comment">{'// projects.tsx — Featured Projects'}</SpecialText>
      </Line>
      <Empty n={l()} />
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-keyword">{'interface '}</SpecialText>
        <SpecialText speed={5} delay={next(0.01)} className="syn-type">Project</SpecialText>
        <SpecialText speed={5} delay={next(0.01)} className="syn-punctuation">{' {'}</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={5} delay={next(0.02)} className="syn-property">{'  title'}</SpecialText>
        <SpecialText speed={5} delay={next(0.01)} className="syn-operator">{': '}</SpecialText>
        <SpecialText speed={5} delay={next(0.01)} className="syn-type">string</SpecialText>
        <SpecialText speed={5} delay={next(0.01)} className="syn-punctuation">;</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={5} delay={next(0.02)} className="syn-property">{'  description'}</SpecialText>
        <SpecialText speed={5} delay={next(0.01)} className="syn-operator">{': '}</SpecialText>
        <SpecialText speed={5} delay={next(0.01)} className="syn-type">string</SpecialText>
        <SpecialText speed={5} delay={next(0.01)} className="syn-punctuation">;</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={5} delay={next(0.02)} className="syn-property">{'  technologies'}</SpecialText>
        <SpecialText speed={5} delay={next(0.01)} className="syn-operator">{': '}</SpecialText>
        <SpecialText speed={5} delay={next(0.01)} className="syn-type">string</SpecialText>
        <SpecialText speed={5} delay={next(0.01)} className="syn-punctuation">{'[];'}</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={5} delay={next(0.02)} className="syn-property">{'  liveUrl'}</SpecialText>
        <SpecialText speed={5} delay={next(0.01)} className="syn-operator">{': '}</SpecialText>
        <SpecialText speed={5} delay={next(0.01)} className="syn-type">string</SpecialText>
        <SpecialText speed={5} delay={next(0.01)} className="syn-punctuation">;</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={5} delay={next(0.02)} className="syn-property">{'  githubUrl'}</SpecialText>
        <SpecialText speed={5} delay={next(0.01)} className="syn-operator">{': '}</SpecialText>
        <SpecialText speed={5} delay={next(0.01)} className="syn-type">string</SpecialText>
        <SpecialText speed={5} delay={next(0.01)} className="syn-operator">{' | '}</SpecialText>
        <SpecialText speed={5} delay={next(0.01)} className="syn-type">null</SpecialText>
        <SpecialText speed={5} delay={next(0.01)} className="syn-punctuation">;</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={5} delay={next(0.02)} className="syn-punctuation">{'}'}</SpecialText>
      </Line>
      <Empty n={l()} />
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-keyword">{'const '}</SpecialText>
        <SpecialText speed={5} delay={next(0.01)} className="syn-variable">projects</SpecialText>
        <SpecialText speed={5} delay={next(0.01)} className="syn-operator">{': '}</SpecialText>
        <SpecialText speed={5} delay={next(0.01)} className="syn-type">Project</SpecialText>
        <SpecialText speed={5} delay={next(0.01)} className="syn-punctuation">{'[]'}</SpecialText>
        <SpecialText speed={5} delay={next(0.01)} className="syn-operator">{' = '}</SpecialText>
        <SpecialText speed={5} delay={next(0.01)} className="syn-punctuation">[</SpecialText>
      </Line>

      {projects.map((project, idx) => (
        <React.Fragment key={idx}>
          <Line n={l()}>
            <SpecialText speed={5} delay={next(0.03)} className="syn-punctuation">{'  {'}</SpecialText>
          </Line>
          <Line n={l()}>
            <SpecialText speed={5} delay={next(0.02)} className="syn-property">{'    title'}</SpecialText>
            <SpecialText speed={5} delay={next(0.01)} className="syn-operator">{': '}</SpecialText>
            <SpecialText speed={5} delay={next(0.01)} className="syn-string">{'"'}</SpecialText>
            <SpecialText speed={8} delay={next(0.01)} className="syn-string">{project.title}</SpecialText>
            <SpecialText speed={5} delay={next(0.01)} className="syn-string">{'"'}</SpecialText>
            <SpecialText speed={5} delay={next(0.01)} className="syn-punctuation">,</SpecialText>
          </Line>
          <Line n={l()}>
            <SpecialText speed={5} delay={next(0.02)} className="syn-property">{'    description'}</SpecialText>
            <SpecialText speed={5} delay={next(0.01)} className="syn-operator">{': '}</SpecialText>
            <SpecialText speed={5} delay={next(0.01)} className="syn-string">{'"'}</SpecialText>
            {project.descBefore && (
              <SpecialText speed={6} delay={next(0.01)} className="syn-string">{project.descBefore}</SpecialText>
            )}
            {project.descLinkText ? (
              <LinkPreview url={project.descLinkUrl} isStatic={true} imageSrc={project.descLinkImg} className="text-cyan-400 hover:text-cyan-300 cursor-pointer" disabled={!linkReady[idx]}>
                <SpecialText speed={6} delay={next(0.01)} onComplete={() => setLinkReady(prev => ({...prev, [idx]: true}))}>{project.descLinkText}</SpecialText>
              </LinkPreview>
            ) : null}
            <SpecialText speed={6} delay={next(0.01)} className="syn-string">{project.descAfter}</SpecialText>
            <SpecialText speed={5} delay={next(0.01)} className="syn-string">{'"'}</SpecialText>
            <SpecialText speed={5} delay={next(0.01)} className="syn-punctuation">,</SpecialText>
          </Line>
          <Line n={l()}>
            <SpecialText speed={5} delay={next(0.02)} className="syn-property">{'    technologies'}</SpecialText>
            <SpecialText speed={5} delay={next(0.01)} className="syn-operator">{': '}</SpecialText>
            <SpecialText speed={5} delay={next(0.01)} className="syn-punctuation">[</SpecialText>
            {project.technologies.map((t, i) => (
              <React.Fragment key={i}>
                <SpecialText speed={5} delay={next(0.01)} className="syn-string">{'"'}</SpecialText>
                <SpecialText speed={5} delay={next(0.01)} className="syn-string">{t}</SpecialText>
                <SpecialText speed={5} delay={next(0.01)} className="syn-string">{'"'}</SpecialText>
                {i < project.technologies.length - 1 && <SpecialText speed={5} delay={next(0.01)} className="syn-punctuation">{', '}</SpecialText>}
              </React.Fragment>
            ))}
            <SpecialText speed={5} delay={next(0.01)} className="syn-punctuation">{'],'}</SpecialText>
          </Line>
          <Line n={l()}>
            <SpecialText speed={5} delay={next(0.02)} className="syn-property">{'    liveUrl'}</SpecialText>
            <SpecialText speed={5} delay={next(0.01)} className="syn-operator">{': '}</SpecialText>
            <SpecialText speed={5} delay={next(0.01)} className="syn-string">{'"'}</SpecialText>
            <a className="syn-link" href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <SpecialText speed={5} delay={next(0.01)}>{project.liveUrl}</SpecialText>
            </a>
            <SpecialText speed={5} delay={next(0.01)} className="syn-string">{'"'}</SpecialText>
            <SpecialText speed={5} delay={next(0.01)} className="syn-punctuation">,</SpecialText>
          </Line>
          <Line n={l()}>
            <SpecialText speed={5} delay={next(0.02)} className="syn-property">{'    githubUrl'}</SpecialText>
            <SpecialText speed={5} delay={next(0.01)} className="syn-operator">{': '}</SpecialText>
            {project.githubUrl ? (
              <>
                <SpecialText speed={5} delay={next(0.01)} className="syn-string">{'"'}</SpecialText>
                <a className="syn-link" href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <SpecialText speed={5} delay={next(0.01)}>{project.githubUrl}</SpecialText>
                </a>
                <SpecialText speed={5} delay={next(0.01)} className="syn-string">{'"'}</SpecialText>
              </>
            ) : (
              <SpecialText speed={5} delay={next(0.01)} className="syn-keyword">null</SpecialText>
            )}
            <SpecialText speed={5} delay={next(0.01)} className="syn-punctuation">,</SpecialText>
          </Line>
          <Line n={l()}>
            <SpecialText speed={5} delay={next(0.02)} className="syn-punctuation">{'  }'}</SpecialText>
            {idx < projects.length - 1 && <SpecialText speed={5} delay={next(0.01)} className="syn-punctuation">,</SpecialText>}
          </Line>
        </React.Fragment>
      ))}

      <Line n={l()}>
        <SpecialText speed={5} delay={next(0.03)} className="syn-punctuation">{'];'}</SpecialText>
      </Line>
      <Empty n={l()} />
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-comment">{'// More projects at: '}</SpecialText>
        <a className="syn-link" href="https://github.com/fcreme" target="_blank" rel="noopener noreferrer">
          <SpecialText speed={5} delay={next(0.01)}>github.com/fcreme</SpecialText>
        </a>
      </Line>
      <Empty n={l()} />
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-keyword">{'export default '}</SpecialText>
        <SpecialText speed={5} delay={next(0.01)} className="syn-variable">projects</SpecialText>
        <SpecialText speed={5} delay={next(0.01)} className="syn-punctuation">;</SpecialText>
      </Line>
    </div>
  );
};

export default ProjectsView;
