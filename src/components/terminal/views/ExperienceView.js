import React from 'react';
import { Line, Empty } from '../Line';
import { SpecialText } from '../../ui/special-text';

const ExperienceView = () => {
  return (
    <div className="content-view">
      <Line n={1}>
        <span className="syn-heading-marker"># </span>
        <SpecialText speed={10} delay={0.05} className="syn-heading">Professional Experience</SpecialText>
      </Line>
      <Empty n={2} />
      <Line n={3}>
        <span className="syn-hr">---</span>
      </Line>
      <Empty n={4} />
      <Line n={5}>
        <span className="syn-heading-marker">## </span>
        <SpecialText speed={10} delay={0.12} className="syn-heading">Full Stack Developer</SpecialText>
      </Line>
      <Line n={6}>
        <SpecialText speed={8} delay={0.17} className="syn-bold">Reino Ceramicos</SpecialText>
        <span className="syn-comment"> | </span>
        <SpecialText speed={8} delay={0.19} className="syn-italic">2025 - Present</SpecialText>
      </Line>
      <Empty n={7} />
      <Line n={8}>
        <SpecialText speed={8} delay={0.23}>Development of modular enterprise dashboards and management tools</SpecialText>
      </Line>
      <Line n={9}>
        <SpecialText speed={8} delay={0.26}>using React with API integrations, state management, and data</SpecialText>
      </Line>
      <Line n={10}>
        <SpecialText speed={8} delay={0.29}>visualization. Internal dashboards used by multiple business areas</SpecialText>
      </Line>
      <Line n={11}>
        <SpecialText speed={8} delay={0.32}>for daily operations. Backend integration with Node.js (NestJS)</SpecialText>
      </Line>
      <Line n={12}>
        <SpecialText speed={8} delay={0.35}>services.</SpecialText>
      </Line>
      <Empty n={13} />
      <Line n={14}>
        <span className="syn-list-marker">- </span>
        <SpecialText speed={8} delay={0.38}>React + TypeScript enterprise dashboards</SpecialText>
      </Line>
      <Line n={15}>
        <span className="syn-list-marker">- </span>
        <SpecialText speed={8} delay={0.41}>REST API integration & state management (Zustand, TanStack Query)</SpecialText>
      </Line>
      <Line n={16}>
        <span className="syn-list-marker">- </span>
        <SpecialText speed={8} delay={0.44}>Data visualization with ECharts & Recharts</SpecialText>
      </Line>
      <Line n={17}>
        <span className="syn-list-marker">- </span>
        <SpecialText speed={8} delay={0.47}>Real-time features with Socket.io</SpecialText>
      </Line>
      <Empty n={18} />
      <Line n={19}>
        <span className="syn-hr">---</span>
      </Line>
      <Empty n={20} />
      <Line n={21}>
        <span className="syn-heading-marker">## </span>
        <SpecialText speed={10} delay={0.52} className="syn-heading">Freelance Web Developer</SpecialText>
      </Line>
      <Line n={22}>
        <SpecialText speed={8} delay={0.56} className="syn-bold">Freelance</SpecialText>
        <span className="syn-comment"> | </span>
        <SpecialText speed={8} delay={0.58} className="syn-italic">2022 - Present</SpecialText>
      </Line>
      <Empty n={23} />
      <Line n={24}>
        <SpecialText speed={8} delay={0.62}>Responsive web interfaces, REST API integrations, Google Sheets</SpecialText>
      </Line>
      <Line n={25}>
        <SpecialText speed={8} delay={0.65}>automation, and Tienda Nube customization via FTP.</SpecialText>
      </Line>
      <Empty n={26} />
      <Line n={27}>
        <span className="syn-list-marker">- </span>
        <SpecialText speed={8} delay={0.68}>Custom responsive web interfaces</SpecialText>
      </Line>
      <Line n={28}>
        <span className="syn-list-marker">- </span>
        <SpecialText speed={8} delay={0.71}>REST API integrations</SpecialText>
      </Line>
      <Line n={29}>
        <span className="syn-list-marker">- </span>
        <SpecialText speed={8} delay={0.74}>Google Sheets automation (Apps Script)</SpecialText>
      </Line>
      <Line n={30}>
        <span className="syn-list-marker">- </span>
        <SpecialText speed={8} delay={0.77}>Tienda Nube / Nuvemshop customization via FTP</SpecialText>
      </Line>
      <Empty n={31} />
      <Line n={32}>
        <span className="syn-hr">---</span>
      </Line>
      <Empty n={33} />
      <Line n={34}>
        <span className="syn-heading-marker"># </span>
        <SpecialText speed={10} delay={0.82} className="syn-heading">Education</SpecialText>
      </Line>
      <Empty n={35} />
      <Line n={36}>
        <span className="syn-heading-marker">## </span>
        <SpecialText speed={10} delay={0.86} className="syn-heading">Audiovisual Design Degree</SpecialText>
      </Line>
      <Line n={37}>
        <SpecialText speed={8} delay={0.89} className="syn-bold">Universidad de Palermo</SpecialText>
      </Line>
      <Empty n={38} />
      <Line n={39}>
        <span className="syn-heading-marker">## </span>
        <SpecialText speed={10} delay={0.92} className="syn-heading">Full Stack Developer Diploma</SpecialText>
      </Line>
      <Line n={40}>
        <SpecialText speed={8} delay={0.95} className="syn-bold">{'Universidad Tecnológica de Buenos Aires (UTN)'}</SpecialText>
      </Line>
      <Empty n={41} />
      <Line n={42}>
        <span className="syn-heading-marker">## </span>
        <SpecialText speed={10} delay={0.98} className="syn-heading">Data Mining</SpecialText>
      </Line>
      <Line n={43}>
        <SpecialText speed={8} delay={1.0} className="syn-bold">CoderHouse</SpecialText>
      </Line>
    </div>
  );
};

export default ExperienceView;
