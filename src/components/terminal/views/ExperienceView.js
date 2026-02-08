import React from 'react';
import { Line, Empty } from '../Line';

const ExperienceView = () => {
  return (
    <div className="content-view">
      <Line n={1}>
        <span className="syn-heading-marker"># </span>
        <span className="syn-heading">Professional Experience</span>
      </Line>
      <Empty n={2} />
      <Line n={3}>
        <span className="syn-hr">---</span>
      </Line>
      <Empty n={4} />
      <Line n={5}>
        <span className="syn-heading-marker">## </span>
        <span className="syn-heading">Frontend Developer</span>
      </Line>
      <Line n={6}>
        <span className="syn-bold">Reino Ceramicos</span>
        <span className="syn-comment"> | </span>
        <span className="syn-italic">2025 - Present</span>
      </Line>
      <Empty n={7} />
      <Line n={8}>
        Development of modular enterprise dashboards and management tools
      </Line>
      <Line n={9}>
        using React with API integrations, state management, and data
      </Line>
      <Line n={10}>
        visualization. Internal dashboards used by multiple business areas
      </Line>
      <Line n={11}>
        for daily operations. Backend integration with Node.js (NestJS)
      </Line>
      <Line n={12}>
        services.
      </Line>
      <Empty n={13} />
      <Line n={14}>
        <span className="syn-list-marker">- </span>
        React + TypeScript enterprise dashboards
      </Line>
      <Line n={15}>
        <span className="syn-list-marker">- </span>
        REST API integration & state management (Zustand, TanStack Query)
      </Line>
      <Line n={16}>
        <span className="syn-list-marker">- </span>
        Data visualization with ECharts & Recharts
      </Line>
      <Line n={17}>
        <span className="syn-list-marker">- </span>
        Real-time features with Socket.io
      </Line>
      <Empty n={18} />
      <Line n={19}>
        <span className="syn-hr">---</span>
      </Line>
      <Empty n={20} />
      <Line n={21}>
        <span className="syn-heading-marker">## </span>
        <span className="syn-heading">Freelance Web Developer</span>
      </Line>
      <Line n={22}>
        <span className="syn-bold">Freelance</span>
        <span className="syn-comment"> | </span>
        <span className="syn-italic">2023 - 2024</span>
      </Line>
      <Empty n={23} />
      <Line n={24}>
        Responsive web interfaces, REST API integrations, Google Sheets
      </Line>
      <Line n={25}>
        automation, and Tienda Nube customization via FTP.
      </Line>
      <Empty n={26} />
      <Line n={27}>
        <span className="syn-list-marker">- </span>
        Custom responsive web interfaces
      </Line>
      <Line n={28}>
        <span className="syn-list-marker">- </span>
        REST API integrations
      </Line>
      <Line n={29}>
        <span className="syn-list-marker">- </span>
        Google Sheets automation (Apps Script)
      </Line>
      <Line n={30}>
        <span className="syn-list-marker">- </span>
        Tienda Nube / Nuvemshop customization via FTP
      </Line>
    </div>
  );
};

export default ExperienceView;
