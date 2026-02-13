import React from 'react';
import { Line, Empty } from '../Line';
import { DitherShader } from '../../ui/dither-shader';
import { LinkPreview } from '../../ui/link-preview';

const AboutView = () => {
  return (
    <div className="content-view">
      <Line n={1}>
        <span className="syn-heading-marker"># </span>
        <span className="syn-heading">About Me</span>
      </Line>
      <Empty n={2} />
      <Line n={3}>
        <span className="syn-comment">{'<!-- Profile Image -->'}</span>
      </Line>
      <Line n={4}>
        <span className="syn-tag">{'<img'}</span>
        <span className="syn-attr"> src</span>
        <span>=</span>
        <span className="syn-string">"./felinn.jpeg"</span>
        <span className="syn-attr"> alt</span>
        <span>=</span>
        <span className="syn-string">"Felipe Cremerius"</span>
        <span className="syn-attr"> width</span>
        <span>=</span>
        <span className="syn-string">"200"</span>
        <span className="syn-tag">{' />'}</span>
      </Line>
      <Empty n={5} />
      <div style={{
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
        <span className="syn-heading">Who am I?</span>
      </Line>
      <Empty n={8} />
      <Line n={9}>
        I'm Felipe Cremerius, a Frontend Developer specialized in React and
      </Line>
      <Line n={10}>
        modern web applications. I have experience building software from
      </Line>
      <Line n={11}>
        scratch by collaborating with business stakeholders to translate
      </Line>
      <Line n={12}>
        workflows into scalable applications.
      </Line>
      <Empty n={13} />
      <Line n={14}>
        Currently working at <LinkPreview url="#" isStatic={true} imageSrc="/reino2.png" className="text-cyan-400 hover:text-cyan-300 cursor-pointer">Reino Ceramicos</LinkPreview>, developing modular enterprise
      </Line>
      <Line n={15}>
        dashboards and management tools with React, API integrations, and
      </Line>
      <Line n={16}>
        data visualization. Previously worked as a freelance developer
      </Line>
      <Line n={17}>
        building responsive interfaces and automating workflows.
      </Line>
      <Empty n={18} />
      <Line n={19}>
        My approach focuses on performance, responsive and pixel-perfect UI.
      </Line>
      <Line n={20}>
        I'm currently deepening my skills in Three.js, frontend performance
      </Line>
      <Line n={21}>
        optimization, testing strategies, and automation with n8n.
      </Line>
      <Empty n={22} />
      <Line n={23}>
        <span className="syn-hr">---</span>
      </Line>
      <Empty n={24} />
      <Line n={25}>
        <span className="syn-heading-marker">## </span>
        <span className="syn-heading">Personal Information</span>
      </Line>
      <Empty n={26} />
      <Line n={27}>
        <span className="syn-table-border">| </span>
        <span className="syn-table-key">Field</span>
        <span className="syn-table-border">    | </span>
        <span className="syn-table-key">Value</span>
        <span className="syn-table-border">                          |</span>
      </Line>
      <Line n={28}>
        <span className="syn-table-border">|----------|-------------------------------|</span>
      </Line>
      <Line n={29}>
        <span className="syn-table-border">| </span>
        <span className="syn-table-key">Name</span>
        <span className="syn-table-border">     | </span>
        <span className="syn-table-value">Felipe Cremerius</span>
        <span className="syn-table-border">              |</span>
      </Line>
      <Line n={30}>
        <span className="syn-table-border">| </span>
        <span className="syn-table-key">Location</span>
        <span className="syn-table-border"> | </span>
        <span className="syn-table-value">Buenos Aires, Argentina</span>
        <span className="syn-table-border">       |</span>
      </Line>
      <Line n={31}>
        <span className="syn-table-border">| </span>
        <span className="syn-table-key">Role</span>
        <span className="syn-table-border">     | </span>
        <span className="syn-table-value">Frontend Developer</span>
        <span className="syn-table-border">            |</span>
      </Line>
      <Line n={32}>
        <span className="syn-table-border">| </span>
        <span className="syn-table-key">Email</span>
        <span className="syn-table-border">    | </span>
        <span className="syn-table-value">felipecremerius1@gmail.com</span>
        <span className="syn-table-border">     |</span>
      </Line>
      <Line n={33}>
        <span className="syn-table-border">| </span>
        <span className="syn-table-key">Phone</span>
        <span className="syn-table-border">    | </span>
        <span className="syn-table-value">+54 11 6200 7718</span>
        <span className="syn-table-border">              |</span>
      </Line>
      <Empty n={34} />
      <Line n={35}>
        <span className="syn-comment">{'<!-- Learn more about my experience in experience.md -->'}</span>
      </Line>
    </div>
  );
};

export default AboutView;
