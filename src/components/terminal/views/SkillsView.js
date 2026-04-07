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
        <span className="syn-punctuation">{'{ '}</span>
        <SpecialText speed={5} delay={next(0.01)} className="syn-type">SkillCategory</SpecialText>
        <span className="syn-punctuation">{' } '}</span>
        <SpecialText speed={5} delay={next(0.01)} className="syn-keyword">{'from '}</SpecialText>
        <SpecialText speed={5} delay={next(0.01)} className="syn-string">{"'@/types'"}</SpecialText>
        <span className="syn-punctuation">;</span>
      </Line>
      <Empty n={l()} />
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-keyword">{'const '}</SpecialText>
        <SpecialText speed={5} delay={next(0.01)} className="syn-variable">skills</SpecialText>
        <span className="syn-operator">: </span>
        <SpecialText speed={5} delay={next(0.01)} className="syn-type">SkillCategory</SpecialText>
        <span className="syn-punctuation">[]</span>
        <span className="syn-operator"> = </span>
        <span className="syn-punctuation">[</span>
      </Line>

      {/* Frontend */}
      <Line n={l()}>
        <span className="syn-punctuation">{'  {'}</span>
      </Line>
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-property">{'    title'}</SpecialText>
        <span className="syn-operator">: </span>
        <SpecialText speed={8} delay={next(0.01)} className="syn-string">"Frontend"</SpecialText>
        <span className="syn-punctuation">,</span>
      </Line>
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-property">{'    skills'}</SpecialText>
        <span className="syn-operator">: </span>
        <span className="syn-punctuation">[</span>
      </Line>
      {[
        'React', 'JavaScript', 'TypeScript',
        'HTML5/CSS3', 'Tailwind CSS', 'Next.js',
        'Framer Motion', 'Shadcn/ui', 'Wagmi / RainbowKit', 'Liquid'
      ].map((name, i) => (
        <Line key={i} n={l()}>
          <span className="syn-string">{'      "'}</span>
          <SpecialText speed={6} delay={next(0.02)} className="syn-string">{name}</SpecialText>
          <span className="syn-string">{'",'}
          </span>
        </Line>
      ))}
      <Line n={l()}>
        <span className="syn-punctuation">{'    ]'}</span>
      </Line>
      <Line n={l()}>
        <span className="syn-punctuation">{'  },'}</span>
      </Line>

      {/* Backend & APIs */}
      <Line n={l()}>
        <span className="syn-punctuation">{'  {'}</span>
      </Line>
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-property">{'    title'}</SpecialText>
        <span className="syn-operator">: </span>
        <SpecialText speed={8} delay={next(0.01)} className="syn-string">"Backend & APIs"</SpecialText>
        <span className="syn-punctuation">,</span>
      </Line>
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-property">{'    skills'}</SpecialText>
        <span className="syn-operator">: </span>
        <span className="syn-punctuation">[</span>
      </Line>
      {[
        'Node.js (NestJS)', 'Express', 'REST APIs', 'Socket.io', 'Google Apps Script'
      ].map((name, i) => (
        <Line key={i} n={l()}>
          <span className="syn-string">{'      "'}</span>
          <SpecialText speed={6} delay={next(0.02)} className="syn-string">{name}</SpecialText>
          <span className="syn-string">{'",'}
          </span>
        </Line>
      ))}
      <Line n={l()}>
        <span className="syn-punctuation">{'    ]'}</span>
      </Line>
      <Line n={l()}>
        <span className="syn-punctuation">{'  },'}</span>
      </Line>

      {/* State & Data */}
      <Line n={l()}>
        <span className="syn-punctuation">{'  {'}</span>
      </Line>
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-property">{'    title'}</SpecialText>
        <span className="syn-operator">: </span>
        <SpecialText speed={8} delay={next(0.01)} className="syn-string">"State & Data"</SpecialText>
        <span className="syn-punctuation">,</span>
      </Line>
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-property">{'    skills'}</SpecialText>
        <span className="syn-operator">: </span>
        <span className="syn-punctuation">[</span>
      </Line>
      {[
        'MySQL / Prisma', 'SQLite', 'Zustand', 'TanStack Query', 'Axios'
      ].map((name, i) => (
        <Line key={i} n={l()}>
          <span className="syn-string">{'      "'}</span>
          <SpecialText speed={6} delay={next(0.02)} className="syn-string">{name}</SpecialText>
          <span className="syn-string">{'",'}
          </span>
        </Line>
      ))}
      <Line n={l()}>
        <span className="syn-punctuation">{'    ]'}</span>
      </Line>
      <Line n={l()}>
        <span className="syn-punctuation">{'  },'}</span>
      </Line>

      {/* Architecture & Performance */}
      <Line n={l()}>
        <span className="syn-punctuation">{'  {'}</span>
      </Line>
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-property">{'    title'}</SpecialText>
        <span className="syn-operator">: </span>
        <SpecialText speed={8} delay={next(0.01)} className="syn-string">"Architecture & Performance"</SpecialText>
        <span className="syn-punctuation">,</span>
      </Line>
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-property">{'    skills'}</SpecialText>
        <span className="syn-operator">: </span>
        <span className="syn-punctuation">[</span>
      </Line>
      {[
        'Component-based Architecture', 'Design Systems',
        'Code Splitting / Lazy Loading', 'Caching Strategies'
      ].map((name, i) => (
        <Line key={i} n={l()}>
          <span className="syn-string">{'      "'}</span>
          <SpecialText speed={6} delay={next(0.02)} className="syn-string">{name}</SpecialText>
          <span className="syn-string">{'",'}
          </span>
        </Line>
      ))}
      <Line n={l()}>
        <span className="syn-punctuation">{'    ]'}</span>
      </Line>
      <Line n={l()}>
        <span className="syn-punctuation">{'  },'}</span>
      </Line>

      {/* Data Viz & Testing */}
      <Line n={l()}>
        <span className="syn-punctuation">{'  {'}</span>
      </Line>
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-property">{'    title'}</SpecialText>
        <span className="syn-operator">: </span>
        <SpecialText speed={8} delay={next(0.01)} className="syn-string">"Data Visualization & Testing"</SpecialText>
        <span className="syn-punctuation">,</span>
      </Line>
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-property">{'    skills'}</SpecialText>
        <span className="syn-operator">: </span>
        <span className="syn-punctuation">[</span>
      </Line>
      {[
        'ECharts', 'Recharts', 'Jest / Vitest'
      ].map((name, i) => (
        <Line key={i} n={l()}>
          <span className="syn-string">{'      "'}</span>
          <SpecialText speed={6} delay={next(0.02)} className="syn-string">{name}</SpecialText>
          <span className="syn-string">{'",'}
          </span>
        </Line>
      ))}
      <Line n={l()}>
        <span className="syn-punctuation">{'    ]'}</span>
      </Line>
      <Line n={l()}>
        <span className="syn-punctuation">{'  },'}</span>
      </Line>

      {/* Tools */}
      <Line n={l()}>
        <span className="syn-punctuation">{'  {'}</span>
      </Line>
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-property">{'    title'}</SpecialText>
        <span className="syn-operator">: </span>
        <SpecialText speed={8} delay={next(0.01)} className="syn-string">"Tools"</SpecialText>
        <span className="syn-punctuation">,</span>
      </Line>
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-property">{'    skills'}</SpecialText>
        <span className="syn-operator">: </span>
        <span className="syn-punctuation">[</span>
      </Line>
      {[
        'Git / GitHub / LazyGit', 'Neovim / VS Code',
        'LLM Tools (Claude Code, Codex, ChatGPT)', 'Postman / Bruno'
      ].map((name, i) => (
        <Line key={i} n={l()}>
          <span className="syn-string">{'      "'}</span>
          <SpecialText speed={6} delay={next(0.02)} className="syn-string">{name}</SpecialText>
          <span className="syn-string">{'",'}
          </span>
        </Line>
      ))}
      <Line n={l()}>
        <span className="syn-punctuation">{'    ]'}</span>
      </Line>
      <Line n={l()}>
        <span className="syn-punctuation">{'  }'}</span>
      </Line>

      <Line n={l()}>
        <span className="syn-punctuation">];</span>
      </Line>
      <Empty n={l()} />

      {/* Other skills */}
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-comment">{'// Other skills & interests'}</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-keyword">{'const '}</SpecialText>
        <SpecialText speed={5} delay={next(0.01)} className="syn-variable">otherSkills</SpecialText>
        <span className="syn-operator">: </span>
        <SpecialText speed={5} delay={next(0.01)} className="syn-type">string</SpecialText>
        <span className="syn-punctuation">[]</span>
        <span className="syn-operator"> = </span>
        <span className="syn-punctuation">[</span>
      </Line>
      {[
        'Three.js', 'FTP / FileZilla', 'JSON Data Modeling', 'Database Design',
        'WebSocket Integration', 'Screaming Architecture',
        'Modular Architecture', 'n8n Automation', 'Orange Data Mining',
        'Responsive Design', 'Pixel-perfect UI', 'Performance Optimization',
        'CI/CD', 'Web3 / Blockchain', 'SSR / SSG'
      ].map((skill, i) => (
        <Line key={i} n={l()}>
          <span className="syn-string">  "</span>
          <SpecialText speed={6} delay={next(0.02)} className="syn-string">{skill}</SpecialText>
          <span className="syn-string">"</span>
          <span className="syn-punctuation">,</span>
        </Line>
      ))}
      <Line n={l()}>
        <span className="syn-punctuation">];</span>
      </Line>
      <Empty n={l()} />
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-keyword">{'export default '}</SpecialText>
        <SpecialText speed={5} delay={next(0.01)} className="syn-variable">skills</SpecialText>
        <span className="syn-punctuation">;</span>
      </Line>
    </div>
  );
};

export default SkillsView;
