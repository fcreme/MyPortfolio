import React, { useState } from 'react';
import { Line, Empty } from '../Line';
import { DitherShader } from '../../ui/dither-shader';
import { LinkPreview } from '../../ui/link-preview';
import { SpecialText } from '../../ui/special-text';

const AboutView = () => {
  const [linkReady, setLinkReady] = useState(false);
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
        <SpecialText speed={8} delay={next()}>{"I'm Felipe Cremerius, a Full Stack Developer specialized in React,"}</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={8} delay={next()}>Node.js, and modern web applications. I build end-to-end solutions</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={8} delay={next()}>from frontend interfaces to backend APIs, collaborating with business</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={8} delay={next()}>stakeholders to translate workflows into scalable applications.</SpecialText>
      </Line>
      <Empty n={l()} />
      <Line n={l()}>
        <SpecialText speed={8} delay={next()}>{'Currently working at '}</SpecialText>
        <LinkPreview url="#" isStatic={true} imageSrc="/reino2.png" className="text-cyan-400 hover:text-cyan-300 cursor-pointer" disabled={!linkReady}>
          <SpecialText speed={8} delay={next(0.01)} onComplete={() => setLinkReady(true)}>Reino Ceramicos</SpecialText>
        </LinkPreview>
        <SpecialText speed={8} delay={next(0.01)}>{', developing modular enterprise'}</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={8} delay={next()}>dashboards and management tools with React, API integrations, and</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={8} delay={next()}>data visualization. Previously worked as a freelance developer</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={8} delay={next()}>building responsive interfaces and automating workflows.</SpecialText>
      </Line>
      <Empty n={l()} />
      <Line n={l()}>
        <SpecialText speed={8} delay={next()}>My approach focuses on performance, responsive and pixel-perfect UI.</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={8} delay={next()}>{"I'm currently deepening my skills in Three.js, frontend performance"}</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={8} delay={next()}>optimization, testing strategies, and automation with n8n.</SpecialText>
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
        <SpecialText speed={8} delay={next(0.01)} className="syn-table-value">Buenos Aires, Argentina</SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-table-border">{'       |'}</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-table-border">{'| '}</SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-table-key">Role</SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-table-border">{'     | '}</SpecialText>
        <SpecialText speed={8} delay={next(0.01)} className="syn-table-value">Full Stack Developer</SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-table-border">{'            |'}</SpecialText>
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
        <a className="syn-link" href="/Felipe_Cremerius_CV.pdf" download>
          <SpecialText speed={8} delay={next(0.01)}>Download CV</SpecialText>
        </a>
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
