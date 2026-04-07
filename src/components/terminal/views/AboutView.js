import React from 'react';
import { Line, Empty } from '../Line';
import { DitherShader } from '../../ui/dither-shader';
import { LinkPreview } from '../../ui/link-preview';
import { SpecialText } from '../../ui/special-text';

const AboutView = () => {
  return (
    <div className="content-view">
      <Line n={1}>
        <span className="syn-heading-marker"># </span>
        <SpecialText speed={10} delay={0.05} className="syn-heading">About Me</SpecialText>
      </Line>
      <Empty n={2} />
      <Line n={3}>
        <SpecialText speed={5} delay={0.1} className="syn-comment">{'<!-- Profile Image -->'}</SpecialText>
      </Line>
      <Line n={4}>
        <span className="syn-tag">{'<img'}</span>
        <SpecialText speed={5} delay={0.13} className="syn-attr">{' src'}</SpecialText>
        <span>=</span>
        <SpecialText speed={5} delay={0.13} className="syn-string">"./felinn.jpeg"</SpecialText>
        <SpecialText speed={5} delay={0.15} className="syn-attr">{' alt'}</SpecialText>
        <span>=</span>
        <SpecialText speed={5} delay={0.15} className="syn-string">"Felipe Cremerius"</SpecialText>
        <SpecialText speed={5} delay={0.17} className="syn-attr">{' width'}</SpecialText>
        <span>=</span>
        <SpecialText speed={5} delay={0.17} className="syn-string">"200"</SpecialText>
        <span className="syn-tag">{' />'}</span>
      </Line>
      <Empty n={5} />
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
      <Empty n={6} />
      <Line n={7}>
        <span className="syn-heading-marker">## </span>
        <SpecialText speed={10} delay={0.22} className="syn-heading">Who am I?</SpecialText>
      </Line>
      <Empty n={8} />
      <Line n={9}>
        <SpecialText speed={8} delay={0.28}>{"I'm Felipe Cremerius, a Full Stack Developer specialized in React,"}</SpecialText>
      </Line>
      <Line n={10}>
        <SpecialText speed={8} delay={0.31}>Node.js, and modern web applications. I build end-to-end solutions</SpecialText>
      </Line>
      <Line n={11}>
        <SpecialText speed={8} delay={0.34}>from frontend interfaces to backend APIs, collaborating with business</SpecialText>
      </Line>
      <Line n={12}>
        <SpecialText speed={8} delay={0.37}>stakeholders to translate workflows into scalable applications.</SpecialText>
      </Line>
      <Empty n={13} />
      <Line n={14}>
        Currently working at <LinkPreview url="#" isStatic={true} imageSrc="/reino2.png" className="text-cyan-400 hover:text-cyan-300 cursor-pointer">Reino Ceramicos</LinkPreview>, developing modular enterprise
      </Line>
      <Line n={15}>
        <SpecialText speed={8} delay={0.43}>dashboards and management tools with React, API integrations, and</SpecialText>
      </Line>
      <Line n={16}>
        <SpecialText speed={8} delay={0.46}>data visualization. Previously worked as a freelance developer</SpecialText>
      </Line>
      <Line n={17}>
        <SpecialText speed={8} delay={0.49}>building responsive interfaces and automating workflows.</SpecialText>
      </Line>
      <Empty n={18} />
      <Line n={19}>
        <SpecialText speed={8} delay={0.52}>My approach focuses on performance, responsive and pixel-perfect UI.</SpecialText>
      </Line>
      <Line n={20}>
        <SpecialText speed={8} delay={0.55}>{"I'm currently deepening my skills in Three.js, frontend performance"}</SpecialText>
      </Line>
      <Line n={21}>
        <SpecialText speed={8} delay={0.58}>optimization, testing strategies, and automation with n8n.</SpecialText>
      </Line>
      <Empty n={22} />
      <Line n={23}>
        <span className="syn-hr">---</span>
      </Line>
      <Empty n={24} />
      <Line n={25}>
        <span className="syn-heading-marker">## </span>
        <SpecialText speed={10} delay={0.62} className="syn-heading">Personal Information</SpecialText>
      </Line>
      <Empty n={26} />
      <Line n={27}>
        <span className="syn-table-border">| </span>
        <SpecialText speed={5} delay={0.65} className="syn-table-key">Field</SpecialText>
        <span className="syn-table-border">    | </span>
        <SpecialText speed={5} delay={0.65} className="syn-table-key">Value</SpecialText>
        <span className="syn-table-border">                          |</span>
      </Line>
      <Line n={28}>
        <span className="syn-table-border">|----------|-------------------------------|</span>
      </Line>
      <Line n={29}>
        <span className="syn-table-border">| </span>
        <SpecialText speed={5} delay={0.68} className="syn-table-key">Name</SpecialText>
        <span className="syn-table-border">     | </span>
        <SpecialText speed={8} delay={0.68} className="syn-table-value">Felipe Cremerius</SpecialText>
        <span className="syn-table-border">              |</span>
      </Line>
      <Line n={30}>
        <span className="syn-table-border">| </span>
        <SpecialText speed={5} delay={0.71} className="syn-table-key">Location</SpecialText>
        <span className="syn-table-border"> | </span>
        <SpecialText speed={8} delay={0.71} className="syn-table-value">Buenos Aires, Argentina</SpecialText>
        <span className="syn-table-border">       |</span>
      </Line>
      <Line n={31}>
        <span className="syn-table-border">| </span>
        <SpecialText speed={5} delay={0.74} className="syn-table-key">Role</SpecialText>
        <span className="syn-table-border">     | </span>
        <SpecialText speed={8} delay={0.74} className="syn-table-value">Full Stack Developer</SpecialText>
        <span className="syn-table-border">            |</span>
      </Line>
      <Line n={32}>
        <span className="syn-table-border">| </span>
        <SpecialText speed={5} delay={0.77} className="syn-table-key">Email</SpecialText>
        <span className="syn-table-border">    | </span>
        <SpecialText speed={8} delay={0.77} className="syn-table-value">felipecremerius1@gmail.com</SpecialText>
        <span className="syn-table-border">     |</span>
      </Line>
      <Line n={33}>
        <span className="syn-table-border">| </span>
        <SpecialText speed={5} delay={0.8} className="syn-table-key">Phone</SpecialText>
        <span className="syn-table-border">    | </span>
        <SpecialText speed={8} delay={0.8} className="syn-table-value">+54 11 6200 7718</SpecialText>
        <span className="syn-table-border">              |</span>
      </Line>
      <Line n={34}>
        <span className="syn-table-border">| </span>
        <SpecialText speed={5} delay={0.83} className="syn-table-key">Resume</SpecialText>
        <span className="syn-table-border">   | </span>
        <a className="syn-link" href="/Felipe_Cremerius_CV.pdf" download>Download CV</a>
        <span className="syn-table-border">                |</span>
      </Line>
      <Empty n={35} />
      <Line n={36}>
        <SpecialText speed={5} delay={0.86} className="syn-comment">{'<!-- Learn more about my experience in experience.md -->'}</SpecialText>
      </Line>
    </div>
  );
};

export default AboutView;
