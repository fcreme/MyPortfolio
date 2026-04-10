import React from 'react';
import { Line, Empty } from '../Line';
import { SpecialText } from '../../ui/special-text';

const SkillsView = () => {
  let n = 0;
  const l = () => ++n;
  let d = 0;
  const next = (step = 0.03) => { d += step; return d; };

  return (
    <div className="content-view">
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-comment">{'// skills.tsx — Skills & Technologies'}</SpecialText>
      </Line>
      <Empty n={l()} />
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-keyword">{'import '}</SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-punctuation">{'{ '}</SpecialText>
        <SpecialText speed={5} delay={next(0.01)} className="syn-type">SkillCategory</SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-punctuation">{' } '}</SpecialText>
        <SpecialText speed={5} delay={next(0.01)} className="syn-keyword">{'from '}</SpecialText>
        <SpecialText speed={5} delay={next(0.01)} className="syn-string">{"'@/types'"}</SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-punctuation">;</SpecialText>
      </Line>
      <Empty n={l()} />
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-keyword">{'const '}</SpecialText>
        <SpecialText speed={5} delay={next(0.01)} className="syn-variable">skills</SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-operator">: </SpecialText>
        <SpecialText speed={5} delay={next(0.01)} className="syn-type">SkillCategory</SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-punctuation">[]</SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-operator">{' = '}</SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-punctuation">[</SpecialText>
      </Line>

      {/* Frontend */}
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-punctuation">{'  {'}</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-property">{'    title'}</SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-operator">: </SpecialText>
        <SpecialText speed={8} delay={next(0.01)} className="syn-string">"Frontend"</SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-punctuation">,</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-property">{'    skills'}</SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-operator">: </SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-punctuation">[</SpecialText>
      </Line>
      {[
        'React', 'JavaScript', 'TypeScript',
        'HTML5/CSS3', 'Tailwind CSS', 'Next.js',
        'Framer Motion', 'Shadcn/ui', 'Wagmi / RainbowKit', 'Liquid'
      ].map((name, i) => (
        <Line key={i} n={l()}>
          <SpecialText speed={5} delay={next(0.02)} className="syn-string">{'      "'}</SpecialText>
          <SpecialText speed={6} delay={next(0.005)} className="syn-string">{name}</SpecialText>
          <SpecialText speed={5} delay={next(0.005)} className="syn-string">{'",'}</SpecialText>
        </Line>
      ))}
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-punctuation">{'    ]'}</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-punctuation">{'  },'}</SpecialText>
      </Line>

      {/* Backend & APIs */}
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-punctuation">{'  {'}</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-property">{'    title'}</SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-operator">: </SpecialText>
        <SpecialText speed={8} delay={next(0.01)} className="syn-string">"Backend & APIs"</SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-punctuation">,</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-property">{'    skills'}</SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-operator">: </SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-punctuation">[</SpecialText>
      </Line>
      {[
        'Node.js (NestJS)', 'Express', 'REST APIs', 'Socket.io', 'Google Apps Script'
      ].map((name, i) => (
        <Line key={i} n={l()}>
          <SpecialText speed={5} delay={next(0.02)} className="syn-string">{'      "'}</SpecialText>
          <SpecialText speed={6} delay={next(0.005)} className="syn-string">{name}</SpecialText>
          <SpecialText speed={5} delay={next(0.005)} className="syn-string">{'",'}</SpecialText>
        </Line>
      ))}
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-punctuation">{'    ]'}</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-punctuation">{'  },'}</SpecialText>
      </Line>

      {/* State & Data */}
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-punctuation">{'  {'}</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-property">{'    title'}</SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-operator">: </SpecialText>
        <SpecialText speed={8} delay={next(0.01)} className="syn-string">"State & Data"</SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-punctuation">,</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-property">{'    skills'}</SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-operator">: </SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-punctuation">[</SpecialText>
      </Line>
      {[
        'MySQL / Prisma', 'SQLite', 'Zustand', 'TanStack Query', 'Axios'
      ].map((name, i) => (
        <Line key={i} n={l()}>
          <SpecialText speed={5} delay={next(0.02)} className="syn-string">{'      "'}</SpecialText>
          <SpecialText speed={6} delay={next(0.005)} className="syn-string">{name}</SpecialText>
          <SpecialText speed={5} delay={next(0.005)} className="syn-string">{'",'}</SpecialText>
        </Line>
      ))}
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-punctuation">{'    ]'}</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-punctuation">{'  },'}</SpecialText>
      </Line>

      {/* Architecture & Performance */}
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-punctuation">{'  {'}</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-property">{'    title'}</SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-operator">: </SpecialText>
        <SpecialText speed={8} delay={next(0.01)} className="syn-string">"Architecture & Performance"</SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-punctuation">,</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-property">{'    skills'}</SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-operator">: </SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-punctuation">[</SpecialText>
      </Line>
      {[
        'Component-based Architecture', 'Design Systems',
        'Code Splitting / Lazy Loading', 'Caching Strategies'
      ].map((name, i) => (
        <Line key={i} n={l()}>
          <SpecialText speed={5} delay={next(0.02)} className="syn-string">{'      "'}</SpecialText>
          <SpecialText speed={6} delay={next(0.005)} className="syn-string">{name}</SpecialText>
          <SpecialText speed={5} delay={next(0.005)} className="syn-string">{'",'}</SpecialText>
        </Line>
      ))}
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-punctuation">{'    ]'}</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-punctuation">{'  },'}</SpecialText>
      </Line>

      {/* Data Viz & Testing */}
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-punctuation">{'  {'}</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-property">{'    title'}</SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-operator">: </SpecialText>
        <SpecialText speed={8} delay={next(0.01)} className="syn-string">"Data Visualization & Testing"</SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-punctuation">,</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-property">{'    skills'}</SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-operator">: </SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-punctuation">[</SpecialText>
      </Line>
      {[
        'ECharts', 'Recharts', 'Jest / Vitest'
      ].map((name, i) => (
        <Line key={i} n={l()}>
          <SpecialText speed={5} delay={next(0.02)} className="syn-string">{'      "'}</SpecialText>
          <SpecialText speed={6} delay={next(0.005)} className="syn-string">{name}</SpecialText>
          <SpecialText speed={5} delay={next(0.005)} className="syn-string">{'",'}</SpecialText>
        </Line>
      ))}
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-punctuation">{'    ]'}</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-punctuation">{'  },'}</SpecialText>
      </Line>

      {/* Tools */}
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-punctuation">{'  {'}</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-property">{'    title'}</SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-operator">: </SpecialText>
        <SpecialText speed={8} delay={next(0.01)} className="syn-string">"Tools"</SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-punctuation">,</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-property">{'    skills'}</SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-operator">: </SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-punctuation">[</SpecialText>
      </Line>
      {[
        'Git / GitHub / LazyGit', 'Neovim / VS Code',
        'LLM Tools (Claude Code, Codex, ChatGPT)', 'Postman / Bruno'
      ].map((name, i) => (
        <Line key={i} n={l()}>
          <SpecialText speed={5} delay={next(0.02)} className="syn-string">{'      "'}</SpecialText>
          <SpecialText speed={6} delay={next(0.005)} className="syn-string">{name}</SpecialText>
          <SpecialText speed={5} delay={next(0.005)} className="syn-string">{'",'}</SpecialText>
        </Line>
      ))}
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-punctuation">{'    ]'}</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-punctuation">{'  }'}</SpecialText>
      </Line>

      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-punctuation">];</SpecialText>
      </Line>
      <Empty n={l()} />

      {/* Other skills */}
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-comment">{'// Other skills & interests'}</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-keyword">{'const '}</SpecialText>
        <SpecialText speed={5} delay={next(0.01)} className="syn-variable">otherSkills</SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-operator">: </SpecialText>
        <SpecialText speed={5} delay={next(0.01)} className="syn-type">string</SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-punctuation">[]</SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-operator">{' = '}</SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-punctuation">[</SpecialText>
      </Line>
      {[
        'Three.js', 'FTP / FileZilla', 'JSON Data Modeling', 'Database Design',
        'WebSocket Integration', 'Screaming Architecture',
        'Modular Architecture', 'n8n Automation', 'Orange Data Mining',
        'Responsive Design', 'Pixel-perfect UI', 'Performance Optimization',
        'CI/CD', 'Web3 / Blockchain', 'SSR / SSG'
      ].map((skill, i) => (
        <Line key={i} n={l()}>
          <SpecialText speed={5} delay={next(0.02)} className="syn-string">{'  "'}</SpecialText>
          <SpecialText speed={6} delay={next(0.005)} className="syn-string">{skill}</SpecialText>
          <SpecialText speed={5} delay={next(0.005)} className="syn-string">"</SpecialText>
          <SpecialText speed={5} delay={next(0.005)} className="syn-punctuation">,</SpecialText>
        </Line>
      ))}
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-punctuation">];</SpecialText>
      </Line>
      <Empty n={l()} />
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-keyword">{'export default '}</SpecialText>
        <SpecialText speed={5} delay={next(0.01)} className="syn-variable">skills</SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-punctuation">;</SpecialText>
      </Line>
    </div>
  );
};

export default SkillsView;
