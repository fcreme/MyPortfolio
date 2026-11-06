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
        <SpecialText speed={10} delay={next(0.01)} className="syn-heading">AI Evaluation & Data Annotation</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={8} delay={next()} className="syn-bold">Confidential (NDA)</SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-comment">{' | '}</SpecialText>
        <SpecialText speed={8} delay={next(0.01)} className="syn-italic">May 2026 - Present</SpecialText>
      </Line>
      <Empty n={l()} />
      <Line n={l()}>
        <SpecialText speed={8} delay={next()}>Reviewing and evaluating AI model outputs for an AI company under NDA.</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={8} delay={next()}>Work centers on two tracks: pull request evaluation, assessing</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={8} delay={next()}>model-generated code changes for correctness and quality, and reasoning</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={8} delay={next()}>evaluation, grading multi-step reasoning against detailed rubrics.</SpecialText>
      </Line>
      <Empty n={l()} />
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-list-marker">{'- '}</SpecialText>
        <SpecialText speed={8} delay={next(0.01)}>PR evaluation: reviewing AI-generated code changes for correctness</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-list-marker">{'- '}</SpecialText>
        <SpecialText speed={8} delay={next(0.01)}>Reasoning evaluation: grading multi-step reasoning & chain-of-thought</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-list-marker">{'- '}</SpecialText>
        <SpecialText speed={8} delay={next(0.01)}>Applying detailed annotation rubrics consistently across large volumes</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-list-marker">{'- '}</SpecialText>
        <SpecialText speed={8} delay={next(0.01)}>Writing structured justifications supporting each rating decision</SpecialText>
      </Line>
      <Empty n={l()} />
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-hr">---</SpecialText>
      </Line>
      <Empty n={l()} />
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-heading-marker">{'## '}</SpecialText>
        <SpecialText speed={10} delay={next(0.01)} className="syn-heading">Full-Stack / AI Engineer</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={8} delay={next()} className="syn-bold">Reino Ceramicos</SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-comment">{' | '}</SpecialText>
        <SpecialText speed={8} delay={next(0.01)} className="syn-italic">Jul 2025 - Jun 2026</SpecialText>
      </Line>
      <Empty n={l()} />
      <Line n={l()}>
        <SpecialText speed={8} delay={next()}>Built a multi-provider AI chatbot from scratch, with MCP connections</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={8} delay={next()}>and SAP HANA views, plus enterprise analytics modules that turn</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={8} delay={next()}>operational data into actionable metrics. Designed the complete backend</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={8} delay={next()}>and frontend architecture for internal tools used across business areas.</SpecialText>
      </Line>
      <Empty n={l()} />
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
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-list-marker">{'- '}</SpecialText>
        <SpecialText speed={8} delay={next(0.01)}>Agent-based automation with MCP & Claude Code across Slack & internal tools</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-list-marker">{'- '}</SpecialText>
        <SpecialText speed={8} delay={next(0.01)}>LLM-powered data analysis, automated reports & workflow suggestions</SpecialText>
      </Line>
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
      <Empty n={l()} />
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-hr">---</SpecialText>
      </Line>
      <Empty n={l()} />
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-heading-marker">{'## '}</SpecialText>
        <SpecialText speed={10} delay={next(0.01)} className="syn-heading">Freelance Full-Stack Developer & AI Automation</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={8} delay={next()} className="syn-bold">Freelance</SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-comment">{' | '}</SpecialText>
        <SpecialText speed={8} delay={next(0.01)} className="syn-italic">2022 - Present</SpecialText>
      </Line>
      <Empty n={l()} />
      <Line n={l()}>
        <SpecialText speed={8} delay={next()}>Automation workflows integrating REST APIs, Google Apps Script, and n8n</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={8} delay={next()}>across CRMs, email, and internal systems. React web applications for</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={8} delay={next()}>clients with AI-assisted features and LLM-powered content generation,</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={8} delay={next()}>plus e-commerce development, deployment, and ongoing maintenance.</SpecialText>
      </Line>
      <Empty n={l()} />
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-list-marker">{'- '}</SpecialText>
        <SpecialText speed={8} delay={next(0.01)}>AI automation: n8n & API workflows across CRMs, email & internal systems</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-list-marker">{'- '}</SpecialText>
        <SpecialText speed={8} delay={next(0.01)}>LLM-powered content generation & AI-assisted features for client apps</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-list-marker">{'- '}</SpecialText>
        <SpecialText speed={8} delay={next(0.01)}>REST API integrations & Google Sheets automation (Apps Script)</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-list-marker">{'- '}</SpecialText>
        <SpecialText speed={8} delay={next(0.01)}>React web apps: personal brand sites, landing pages & portfolios</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-list-marker">{'- '}</SpecialText>
        <SpecialText speed={8} delay={next(0.01)}>E-commerce stores: Tienda Nube customization via FTP (FileZilla)</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-list-marker">{'- '}</SpecialText>
        <SpecialText speed={8} delay={next(0.01)}>SEO optimization, server deployment & ongoing maintenance</SpecialText>
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
        <SpecialText speed={10} delay={next(0.01)} className="syn-heading">Data Mining</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={8} delay={next()} className="syn-bold">CoderHouse</SpecialText>
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
