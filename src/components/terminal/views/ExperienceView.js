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
        <SpecialText speed={8} delay={next()}>Development of modular enterprise dashboards and management tools</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={8} delay={next()}>using React with API integrations, state management, and data</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={8} delay={next()}>visualization. Internal dashboards used by multiple business areas</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={8} delay={next()}>for daily operations. Backend integration with Node.js (NestJS)</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={8} delay={next()}>services.</SpecialText>
      </Line>
      <Empty n={l()} />
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-list-marker">{'- '}</SpecialText>
        <SpecialText speed={8} delay={next(0.01)}>React + TypeScript enterprise dashboards</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-list-marker">{'- '}</SpecialText>
        <SpecialText speed={8} delay={next(0.01)}>REST API integration & state management (Zustand, TanStack Query)</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-list-marker">{'- '}</SpecialText>
        <SpecialText speed={8} delay={next(0.01)}>Data visualization with ECharts & Recharts</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-list-marker">{'- '}</SpecialText>
        <SpecialText speed={8} delay={next(0.01)}>Real-time features with Socket.io</SpecialText>
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
        <SpecialText speed={8} delay={next()}>Responsive web interfaces, REST API integrations, Google Sheets</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={8} delay={next()}>automation, and Tienda Nube customization via FTP.</SpecialText>
      </Line>
      <Empty n={l()} />
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-list-marker">{'- '}</SpecialText>
        <SpecialText speed={8} delay={next(0.01)}>Custom responsive web interfaces</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-list-marker">{'- '}</SpecialText>
        <SpecialText speed={8} delay={next(0.01)}>REST API integrations</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-list-marker">{'- '}</SpecialText>
        <SpecialText speed={8} delay={next(0.01)}>Google Sheets automation (Apps Script)</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-list-marker">{'- '}</SpecialText>
        <SpecialText speed={8} delay={next(0.01)}>Tienda Nube / Nuvemshop customization via FTP</SpecialText>
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
    </div>
  );
};

export default ExperienceView;
