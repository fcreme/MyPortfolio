import React from 'react';
import { Line, Empty } from '../Line';
import { SpecialText } from '../../ui/special-text';

const ExperienceView = () => {
  let n = 0;
  const l = () => ++n;
  let d = 0;
  const next = (step = 0.03) => { d += step; return d; };

  return (
    <div className="content-view">
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-heading-marker">{'# '}</SpecialText>
        <SpecialText speed={10} delay={next(0.01)} className="syn-heading">Professional Experience</SpecialText>
      </Line>
      <Empty n={l()} />
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-hr">---</SpecialText>
      </Line>
      <Empty n={l()} />
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-heading-marker">{'## '}</SpecialText>
        <SpecialText speed={10} delay={next(0.01)} className="syn-heading">Full Stack Developer</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={8} delay={next()} className="syn-bold">Reino Ceramicos</SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-comment">{' | '}</SpecialText>
        <SpecialText speed={8} delay={next(0.01)} className="syn-italic">2025 - Present</SpecialText>
      </Line>
      <Empty n={l()} />
      <Line n={l()}>
        <SpecialText speed={8} delay={next()}>Built full business logic modules from scratch for enterprise analytics,</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={8} delay={next()}>processing and comparing operational data against SAP HANA to surface</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={8} delay={next()}>actionable metrics. Designed and implemented the complete backend and</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={8} delay={next()}>frontend architecture for internal tools used across business areas.</SpecialText>
      </Line>
      <Empty n={l()} />
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-list-marker">{'- '}</SpecialText>
        <SpecialText speed={8} delay={next(0.01)}>Full business logic modules: data analysis & metrics vs SAP HANA</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-list-marker">{'- '}</SpecialText>
        <SpecialText speed={8} delay={next(0.01)}>Backend services with Node.js (NestJS), REST APIs & database design</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-list-marker">{'- '}</SpecialText>
        <SpecialText speed={8} delay={next(0.01)}>React + TypeScript dashboards with data visualization (ECharts, Recharts)</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-list-marker">{'- '}</SpecialText>
        <SpecialText speed={8} delay={next(0.01)}>State management (Zustand, TanStack Query) & real-time features (Socket.io)</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-list-marker">{'- '}</SpecialText>
        <SpecialText speed={8} delay={next(0.01)}>AI Chatbot from scratch: multi-provider (Anthropic, Gemini) with ReactFlow</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-list-marker">{'  '}</SpecialText>
        <SpecialText speed={8} delay={next(0.01)}>fallback, tool parameterization, MCP connections & SAP HANA views</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-list-marker">{'- '}</SpecialText>
        <SpecialText speed={8} delay={next(0.01)}>Token usage limiting, bot configuration UI & user-built flow editor</SpecialText>
      </Line>
      <Empty n={l()} />
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-hr">---</SpecialText>
      </Line>
      <Empty n={l()} />
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-heading-marker">{'## '}</SpecialText>
        <SpecialText speed={10} delay={next(0.01)} className="syn-heading">Freelance Web Developer</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={8} delay={next()} className="syn-bold">Freelance</SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-comment">{' | '}</SpecialText>
        <SpecialText speed={8} delay={next(0.01)} className="syn-italic">2022 - Present</SpecialText>
      </Line>
      <Empty n={l()} />
      <Line n={l()}>
        <SpecialText speed={8} delay={next()}>E-commerce development via Tienda Nube, modifying native platform</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={8} delay={next()}>code through FTP. Built React web applications for clients including</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={8} delay={next()}>personal brand pages with SEO optimization, server deployment and</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={8} delay={next()}>ongoing maintenance.</SpecialText>
      </Line>
      <Empty n={l()} />
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-list-marker">{'- '}</SpecialText>
        <SpecialText speed={8} delay={next(0.01)}>E-commerce stores: Tienda Nube customization via FTP (FileZilla)</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-list-marker">{'- '}</SpecialText>
        <SpecialText speed={8} delay={next(0.01)}>React web apps: personal brand sites, landing pages & portfolios</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-list-marker">{'- '}</SpecialText>
        <SpecialText speed={8} delay={next(0.01)}>SEO optimization, server deployment & ongoing maintenance</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-list-marker">{'- '}</SpecialText>
        <SpecialText speed={8} delay={next(0.01)}>REST API integrations & Google Sheets automation (Apps Script)</SpecialText>
      </Line>
      <Empty n={l()} />
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-hr">---</SpecialText>
      </Line>
      <Empty n={l()} />
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-heading-marker">{'# '}</SpecialText>
        <SpecialText speed={10} delay={next(0.01)} className="syn-heading">Education</SpecialText>
      </Line>
      <Empty n={l()} />
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-heading-marker">{'## '}</SpecialText>
        <SpecialText speed={10} delay={next(0.01)} className="syn-heading">Audiovisual Design Degree</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={8} delay={next()} className="syn-bold">Universidad de Palermo</SpecialText>
      </Line>
      <Empty n={l()} />
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-heading-marker">{'## '}</SpecialText>
        <SpecialText speed={10} delay={next(0.01)} className="syn-heading">Full Stack Developer Diploma</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={8} delay={next()} className="syn-bold">{'Universidad Tecnológica de Buenos Aires (UTN)'}</SpecialText>
      </Line>
      <Empty n={l()} />
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-heading-marker">{'## '}</SpecialText>
        <SpecialText speed={10} delay={next(0.01)} className="syn-heading">Data Mining</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={8} delay={next()} className="syn-bold">CoderHouse</SpecialText>
      </Line>
      <Empty n={l()} />
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-hr">---</SpecialText>
      </Line>
      <Empty n={l()} />
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-heading-marker">{'# '}</SpecialText>
        <SpecialText speed={10} delay={next(0.01)} className="syn-heading">Certifications</SpecialText>
      </Line>
      <Empty n={l()} />
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-list-marker">{'- '}</SpecialText>
        <SpecialText speed={8} delay={next(0.01)} className="syn-bold">Model Context Protocol: Advanced Topics</SpecialText>
        <SpecialText speed={5} delay={next(0.01)} className="syn-comment">{' — Anthropic, Feb 2026'}</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-list-marker">{'- '}</SpecialText>
        <SpecialText speed={8} delay={next(0.01)} className="syn-bold">Introduction to Model Context Protocol</SpecialText>
        <SpecialText speed={5} delay={next(0.01)} className="syn-comment">{' — Anthropic, Feb 2026'}</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-list-marker">{'- '}</SpecialText>
        <SpecialText speed={8} delay={next(0.01)} className="syn-bold">Claude Code in Action</SpecialText>
        <SpecialText speed={5} delay={next(0.01)} className="syn-comment">{' — Anthropic, Jan 2026'}</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-list-marker">{'- '}</SpecialText>
        <SpecialText speed={8} delay={next(0.01)} className="syn-bold">Claude 101</SpecialText>
        <SpecialText speed={5} delay={next(0.01)} className="syn-comment">{' — Anthropic, Feb 2026'}</SpecialText>
      </Line>
    </div>
  );
};

export default ExperienceView;
