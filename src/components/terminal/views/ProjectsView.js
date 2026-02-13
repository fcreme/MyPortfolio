import React from 'react';
import { Line, Empty } from '../Line';

const ProjectsView = () => {
  const projects = [
    {
      title: 'TIDE Active - Personal Brand',
      description: 'Personal brand website for fitness and lifestyle trainer. Complete platform with modern design, responsive and optimized for conversion.',
      technologies: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
      liveUrl: 'https://tideactive.com/',
      githubUrl: 'https://github.com/fcreme/tideactive-personal-brand',
    },
    {
      title: 'ClientDash - Project Management',
      description: 'Full-stack project management dashboard with Kanban board, drag-and-drop tasks, real-time stats, authentication (email + Google OAuth), dark mode, and aurora animated backgrounds.',
      technologies: ['React', 'Express', 'Prisma', 'Tailwind CSS', 'Framer Motion', 'SQLite'],
      liveUrl: 'https://github.com/fcreme/client-dashboard',
      githubUrl: 'https://github.com/fcreme/client-dashboard',
    },
    {
      title: 'OnChain - DeFi Interface',
      description: 'Modern DeFi interface for interacting with ERC20 tokens on Ethereum Sepolia testnet. Multi-wallet connectivity, real-time balances, token transfers, approvals and minting with glassmorphism UI.',
      technologies: ['React', 'TypeScript', 'Wagmi', 'RainbowKit', 'Material-UI', 'Zustand'],
      liveUrl: 'https://tokenflow-app.vercel.app/',
      githubUrl: 'https://github.com/fcreme/OnChainApp',
    },
  ];

  let n = 0;
  const l = () => ++n;

  return (
    <div className="content-view">
      <Line n={l()}>
        <span className="syn-comment">{'// projects.tsx — Featured Projects'}</span>
      </Line>
      <Empty n={l()} />
      <Line n={l()}>
        <span className="syn-keyword">interface </span>
        <span className="syn-type">Project</span>
        <span className="syn-punctuation">{' {'}</span>
      </Line>
      <Line n={l()}>
        <span className="syn-property">  title</span>
        <span className="syn-operator">: </span>
        <span className="syn-type">string</span>
        <span className="syn-punctuation">;</span>
      </Line>
      <Line n={l()}>
        <span className="syn-property">  description</span>
        <span className="syn-operator">: </span>
        <span className="syn-type">string</span>
        <span className="syn-punctuation">;</span>
      </Line>
      <Line n={l()}>
        <span className="syn-property">  technologies</span>
        <span className="syn-operator">: </span>
        <span className="syn-type">string</span>
        <span className="syn-punctuation">[];</span>
      </Line>
      <Line n={l()}>
        <span className="syn-property">  liveUrl</span>
        <span className="syn-operator">: </span>
        <span className="syn-type">string</span>
        <span className="syn-punctuation">;</span>
      </Line>
      <Line n={l()}>
        <span className="syn-property">  githubUrl</span>
        <span className="syn-operator">: </span>
        <span className="syn-type">string</span>
        <span className="syn-operator"> | </span>
        <span className="syn-type">null</span>
        <span className="syn-punctuation">;</span>
      </Line>
      <Line n={l()}>
        <span className="syn-punctuation">{'}'}</span>
      </Line>
      <Empty n={l()} />
      <Line n={l()}>
        <span className="syn-keyword">const </span>
        <span className="syn-variable">projects</span>
        <span className="syn-operator">: </span>
        <span className="syn-type">Project</span>
        <span className="syn-punctuation">[]</span>
        <span className="syn-operator"> = </span>
        <span className="syn-punctuation">[</span>
      </Line>

      {projects.map((project, idx) => (
        <React.Fragment key={idx}>
          <Line n={l()}>
            <span className="syn-punctuation">{'  {'}</span>
          </Line>
          <Line n={l()}>
            <span className="syn-property">    title</span>
            <span className="syn-operator">: </span>
            <span className="syn-string">"{project.title}"</span>
            <span className="syn-punctuation">,</span>
          </Line>
          <Line n={l()}>
            <span className="syn-property">    description</span>
            <span className="syn-operator">: </span>
            <span className="syn-string">"{project.description}"</span>
            <span className="syn-punctuation">,</span>
          </Line>
          <Line n={l()}>
            <span className="syn-property">    technologies</span>
            <span className="syn-operator">: </span>
            <span className="syn-punctuation">[</span>
            {project.technologies.map((t, i) => (
              <React.Fragment key={i}>
                <span className="syn-string">"{t}"</span>
                {i < project.technologies.length - 1 && <span className="syn-punctuation">, </span>}
              </React.Fragment>
            ))}
            <span className="syn-punctuation">],</span>
          </Line>
          <Line n={l()}>
            <span className="syn-property">    liveUrl</span>
            <span className="syn-operator">: </span>
            <span className="syn-string">"</span>
            <a className="syn-link" href={project.liveUrl} target="_blank" rel="noopener noreferrer">{project.liveUrl}</a>
            <span className="syn-string">"</span>
            <span className="syn-punctuation">,</span>
          </Line>
          <Line n={l()}>
            <span className="syn-property">    githubUrl</span>
            <span className="syn-operator">: </span>
            {project.githubUrl ? (
              <>
                <span className="syn-string">"</span>
                <a className="syn-link" href={project.githubUrl} target="_blank" rel="noopener noreferrer">{project.githubUrl}</a>
                <span className="syn-string">"</span>
              </>
            ) : (
              <span className="syn-keyword">null</span>
            )}
            <span className="syn-punctuation">,</span>
          </Line>
          <Line n={l()}>
            <span className="syn-punctuation">{'  }'}</span>
            {idx < projects.length - 1 && <span className="syn-punctuation">,</span>}
          </Line>
        </React.Fragment>
      ))}

      <Line n={l()}>
        <span className="syn-punctuation">];</span>
      </Line>
      <Empty n={l()} />
      <Line n={l()}>
        <span className="syn-comment">{'// More projects at: '}</span>
        <a className="syn-link" href="https://github.com/fcreme" target="_blank" rel="noopener noreferrer">github.com/fcreme</a>
      </Line>
      <Empty n={l()} />
      <Line n={l()}>
        <span className="syn-keyword">export default </span>
        <span className="syn-variable">projects</span>
        <span className="syn-punctuation">;</span>
      </Line>
    </div>
  );
};

export default ProjectsView;
