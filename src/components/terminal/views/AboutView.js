import React from 'react';
import { Line, Empty } from '../Line';

const AboutView = () => {
  return (
    <div className="content-view">
      <Line n={1}>
        <span className="syn-heading-marker"># </span>
        <span className="syn-heading">About Me</span>
      </Line>
      <Empty n={2} />
      <Line n={3}>
        <span className="syn-heading-marker">## </span>
        <span className="syn-heading">Who am I?</span>
      </Line>
      <Empty n={4} />
      <Line n={5}>
        I'm Felipe Cremerius, a Frontend Developer specialized in React and
      </Line>
      <Line n={6}>
        modern web applications. I have experience building software from
      </Line>
      <Line n={7}>
        scratch by collaborating with business stakeholders to translate
      </Line>
      <Line n={8}>
        workflows into scalable applications.
      </Line>
      <Empty n={9} />
      <Line n={10}>
        Currently working at Reino Ceramicos, developing modular enterprise
      </Line>
      <Line n={11}>
        dashboards and management tools with React, API integrations, and
      </Line>
      <Line n={12}>
        data visualization. Previously worked as a freelance developer
      </Line>
      <Line n={13}>
        building responsive interfaces and automating workflows.
      </Line>
      <Empty n={14} />
      <Line n={15}>
        My approach focuses on performance, responsive and pixel-perfect UI.
      </Line>
      <Line n={16}>
        I'm currently deepening my skills in Three.js, frontend performance
      </Line>
      <Line n={17}>
        optimization, testing strategies, and automation with n8n.
      </Line>
      <Empty n={18} />
      <Line n={19}>
        <span className="syn-hr">---</span>
      </Line>
      <Empty n={20} />
      <Line n={21}>
        <span className="syn-heading-marker">## </span>
        <span className="syn-heading">Personal Information</span>
      </Line>
      <Empty n={22} />
      <Line n={23}>
        <span className="syn-table-border">| </span>
        <span className="syn-table-key">Field</span>
        <span className="syn-table-border">    | </span>
        <span className="syn-table-key">Value</span>
        <span className="syn-table-border">                          |</span>
      </Line>
      <Line n={24}>
        <span className="syn-table-border">|----------|-------------------------------|</span>
      </Line>
      <Line n={25}>
        <span className="syn-table-border">| </span>
        <span className="syn-table-key">Name</span>
        <span className="syn-table-border">     | </span>
        <span className="syn-table-value">Felipe Cremerius</span>
        <span className="syn-table-border">              |</span>
      </Line>
      <Line n={26}>
        <span className="syn-table-border">| </span>
        <span className="syn-table-key">Location</span>
        <span className="syn-table-border"> | </span>
        <span className="syn-table-value">Buenos Aires, Argentina</span>
        <span className="syn-table-border">       |</span>
      </Line>
      <Line n={27}>
        <span className="syn-table-border">| </span>
        <span className="syn-table-key">Role</span>
        <span className="syn-table-border">     | </span>
        <span className="syn-table-value">Frontend Developer</span>
        <span className="syn-table-border">            |</span>
      </Line>
      <Line n={28}>
        <span className="syn-table-border">| </span>
        <span className="syn-table-key">Email</span>
        <span className="syn-table-border">    | </span>
        <span className="syn-table-value">felipecremerius1@gmail.com</span>
        <span className="syn-table-border">     |</span>
      </Line>
      <Line n={29}>
        <span className="syn-table-border">| </span>
        <span className="syn-table-key">Phone</span>
        <span className="syn-table-border">    | </span>
        <span className="syn-table-value">+54 11 6200 7718</span>
        <span className="syn-table-border">              |</span>
      </Line>
      <Empty n={30} />
      <Line n={31}>
        <span className="syn-comment">{'<!-- Learn more about my experience in experience.md -->'}</span>
      </Line>
    </div>
  );
};

export default AboutView;
