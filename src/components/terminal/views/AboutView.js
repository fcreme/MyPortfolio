import React from 'react';
import { Line, Empty } from '../Line';
import { DitherShader } from '../../ui/dither-shader';
import { SpecialText } from '../../ui/special-text';
import { CvLink } from '../CvLink';

const AboutView = () => {
  let n = 0;
  const l = () => ++n;
  let d = 0;
  const next = (step = 0.03) => { d += step; return d; };

  return (
    <div className="content-view">
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-heading-marker">{'# '}</SpecialText>
        <SpecialText speed={10} delay={next(0.01)} className="syn-heading">About Me</SpecialText>
      </Line>
      <Empty n={l()} />
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-comment">{'<!-- Profile Image -->'}</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-tag">{'<img'}</SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-attr">{' src'}</SpecialText>
        <SpecialText speed={5} delay={next(0.005)}>=</SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-string">"./felinn.jpeg"</SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-attr">{' alt'}</SpecialText>
        <SpecialText speed={5} delay={next(0.005)}>=</SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-string">"Felipe Cremerius"</SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-attr">{' width'}</SpecialText>
        <SpecialText speed={5} delay={next(0.005)}>=</SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-string">"200"</SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-tag">{' />'}</SpecialText>
      </Line>
      <Empty n={l()} />
      <div className="image-glitch-reveal" style={{
        width: '200px',
        height: '200px',
        margin: '10px 0 10px 40px',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        overflow: 'hidden',
        opacity: 0.9
      }}>
        <DitherShader
          src="/felinn.jpeg"
          gridSize={2}
          ditherMode="bayer"
          colorMode="grayscale"
          className="w-full h-full"
        />
      </div>
      <Empty n={l()} />
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-heading-marker">{'## '}</SpecialText>
        <SpecialText speed={10} delay={next(0.01)} className="syn-heading">Who am I?</SpecialText>
      </Line>
      <Empty n={l()} />
      <Line n={l()}>
        <SpecialText speed={8} delay={next()}>{"I'm Felipe Cremerius, an AI Engineer who builds LLM-powered products"}</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={8} delay={next()}>end to end. At Reino Ceramicos I built a multi-provider AI chatbot</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={8} delay={next()}>(Anthropic, Gemini) from scratch, with MCP connections, tool</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={8} delay={next()}>parameterization, and SAP HANA data, on a full-stack base of React,</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={8} delay={next()}>Node.js, and NestJS.</SpecialText>
      </Line>
      <Empty n={l()} />
      <Line n={l()}>
        <SpecialText speed={8} delay={next()}>I currently work in AI evaluation for a company under NDA, reviewing</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={8} delay={next()}>model-generated pull requests and grading multi-step reasoning.</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={8} delay={next()}>I also freelance, building AI automation workflows and React</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={8} delay={next()}>applications for clients.</SpecialText>
      </Line>
      <Empty n={l()} />
      <Line n={l()}>
        <SpecialText speed={8} delay={next()}>My approach focuses on clean architecture, performance optimization,</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={8} delay={next()}>{"and reliable systems. I'm currently deepening my skills in agent"}</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={8} delay={next()}>orchestration, LLM system design, RAG pipelines, and workflow</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={8} delay={next()}>automation with n8n.</SpecialText>
      </Line>
      <Empty n={l()} />
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-hr">---</SpecialText>
      </Line>
      <Empty n={l()} />
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-heading-marker">{'## '}</SpecialText>
        <SpecialText speed={10} delay={next(0.01)} className="syn-heading">Personal Information</SpecialText>
      </Line>
      <Empty n={l()} />
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-table-border">{'| '}</SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-table-key">Field</SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-table-border">{'    | '}</SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-table-key">Value</SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-table-border">{'                          |'}</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-table-border">|----------|-------------------------------|</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-table-border">{'| '}</SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-table-key">Name</SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-table-border">{'     | '}</SpecialText>
        <SpecialText speed={8} delay={next(0.01)} className="syn-table-value">Felipe Cremerius</SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-table-border">{'              |'}</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-table-border">{'| '}</SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-table-key">Location</SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-table-border">{' | '}</SpecialText>
        <SpecialText speed={8} delay={next(0.01)} className="syn-table-value">Worldwide</SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-table-border">{'                     |'}</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-table-border">{'| '}</SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-table-key">Role</SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-table-border">{'     | '}</SpecialText>
        <SpecialText speed={8} delay={next(0.01)} className="syn-table-value">AI Engineer</SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-table-border">{'                   |'}</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-table-border">{'| '}</SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-table-key">Email</SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-table-border">{'    | '}</SpecialText>
        <SpecialText speed={8} delay={next(0.01)} className="syn-table-value">felipecremerius1@gmail.com</SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-table-border">{'     |'}</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-table-border">{'| '}</SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-table-key">Phone</SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-table-border">{'    | '}</SpecialText>
        <SpecialText speed={8} delay={next(0.01)} className="syn-table-value">+54 11 6200 7718</SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-table-border">{'              |'}</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-table-border">{'| '}</SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-table-key">Resume</SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-table-border">{'   | '}</SpecialText>
        <CvLink>
          <SpecialText speed={8} delay={next(0.01)}>Download CV</SpecialText>
        </CvLink>
        <SpecialText speed={5} delay={next(0.005)} className="syn-table-border">{'                |'}</SpecialText>
      </Line>
      <Empty n={l()} />
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-comment">{'<!-- Learn more about my experience in experience.md -->'}</SpecialText>
      </Line>
    </div>
  );
};

export default AboutView;
