import React from 'react';
import { Line, Empty } from '../Line';

const SkillsView = () => {
  let n = 0;
  const l = () => ++n;

  return (
    <div className="content-view">
      <Line n={l()}>
        <span className="syn-comment">{'// skills.tsx — Skills & Technologies'}</span>
      </Line>
      <Empty n={l()} />
      <Line n={l()}>
        <span className="syn-keyword">import </span>
        <span className="syn-punctuation">{'{ '}</span>
        <span className="syn-type">SkillCategory</span>
        <span className="syn-punctuation">{' } '}</span>
        <span className="syn-keyword">from </span>
        <span className="syn-string">'@/types'</span>
        <span className="syn-punctuation">;</span>
      </Line>
      <Empty n={l()} />
      <Line n={l()}>
        <span className="syn-keyword">const </span>
        <span className="syn-variable">skills</span>
        <span className="syn-operator">: </span>
        <span className="syn-type">SkillCategory</span>
        <span className="syn-punctuation">[]</span>
        <span className="syn-operator"> = </span>
        <span className="syn-punctuation">[</span>
      </Line>

      {/* Frontend */}
      <Line n={l()}>
        <span className="syn-punctuation">{'  {'}</span>
      </Line>
      <Line n={l()}>
        <span className="syn-property">    title</span>
        <span className="syn-operator">: </span>
        <span className="syn-string">"Frontend"</span>
        <span className="syn-punctuation">,</span>
      </Line>
      <Line n={l()}>
        <span className="syn-property">    skills</span>
        <span className="syn-operator">: </span>
        <span className="syn-punctuation">[</span>
      </Line>
      {[
        'React', 'JavaScript', 'TypeScript',
        'HTML5/CSS3', 'Tailwind CSS', 'Framer Motion', 'Liquid'
      ].map((name, i) => (
        <Line key={i} n={l()}>
          <span className="syn-string">{'      "'}{name}{'",'}</span>
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
        <span className="syn-property">    title</span>
        <span className="syn-operator">: </span>
        <span className="syn-string">"Backend & APIs"</span>
        <span className="syn-punctuation">,</span>
      </Line>
      <Line n={l()}>
        <span className="syn-property">    skills</span>
        <span className="syn-operator">: </span>
        <span className="syn-punctuation">[</span>
      </Line>
      {[
        'Node.js (NestJS)', 'REST APIs', 'Socket.io', 'Google Apps Script'
      ].map((name, i) => (
        <Line key={i} n={l()}>
          <span className="syn-string">{'      "'}{name}{'",'}</span>
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
        <span className="syn-property">    title</span>
        <span className="syn-operator">: </span>
        <span className="syn-string">"State & Data"</span>
        <span className="syn-punctuation">,</span>
      </Line>
      <Line n={l()}>
        <span className="syn-property">    skills</span>
        <span className="syn-operator">: </span>
        <span className="syn-punctuation">[</span>
      </Line>
      {[
        'MySQL', 'Zustand', 'TanStack Query', 'Axios'
      ].map((name, i) => (
        <Line key={i} n={l()}>
          <span className="syn-string">{'      "'}{name}{'",'}</span>
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
        <span className="syn-property">    title</span>
        <span className="syn-operator">: </span>
        <span className="syn-string">"Architecture & Performance"</span>
        <span className="syn-punctuation">,</span>
      </Line>
      <Line n={l()}>
        <span className="syn-property">    skills</span>
        <span className="syn-operator">: </span>
        <span className="syn-punctuation">[</span>
      </Line>
      {[
        'Component-based Architecture', 'Design Systems',
        'Code Splitting / Lazy Loading', 'Caching Strategies'
      ].map((name, i) => (
        <Line key={i} n={l()}>
          <span className="syn-string">{'      "'}{name}{'",'}</span>
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
        <span className="syn-property">    title</span>
        <span className="syn-operator">: </span>
        <span className="syn-string">"Data Visualization & Testing"</span>
        <span className="syn-punctuation">,</span>
      </Line>
      <Line n={l()}>
        <span className="syn-property">    skills</span>
        <span className="syn-operator">: </span>
        <span className="syn-punctuation">[</span>
      </Line>
      {[
        'ECharts', 'Recharts', 'Jest / Vitest'
      ].map((name, i) => (
        <Line key={i} n={l()}>
          <span className="syn-string">{'      "'}{name}{'",'}</span>
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
        <span className="syn-property">    title</span>
        <span className="syn-operator">: </span>
        <span className="syn-string">"Tools"</span>
        <span className="syn-punctuation">,</span>
      </Line>
      <Line n={l()}>
        <span className="syn-property">    skills</span>
        <span className="syn-operator">: </span>
        <span className="syn-punctuation">[</span>
      </Line>
      {[
        'Git / GitHub', 'Neovim / VS Code',
        'Claude Code', 'Postman / Bruno'
      ].map((name, i) => (
        <Line key={i} n={l()}>
          <span className="syn-string">{'      "'}{name}{'",'}</span>
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
        <span className="syn-comment">{'// Other skills & interests'}</span>
      </Line>
      <Line n={l()}>
        <span className="syn-keyword">const </span>
        <span className="syn-variable">otherSkills</span>
        <span className="syn-operator">: </span>
        <span className="syn-type">string</span>
        <span className="syn-punctuation">[]</span>
        <span className="syn-operator"> = </span>
        <span className="syn-punctuation">[</span>
      </Line>
      {[
        'Three.js', 'FTP / FileZilla', 'JSON Data Modeling', 'Screaming Architecture',
        'Modular Architecture', 'n8n Automation', 'Orange Data Mining',
        'Responsive Design', 'Pixel-perfect UI', 'Performance Optimization'
      ].map((skill, i) => (
        <Line key={i} n={l()}>
          <span className="syn-string">  "{skill}"</span>
          <span className="syn-punctuation">,</span>
        </Line>
      ))}
      <Line n={l()}>
        <span className="syn-punctuation">];</span>
      </Line>
      <Empty n={l()} />
      <Line n={l()}>
        <span className="syn-keyword">export default </span>
        <span className="syn-variable">skills</span>
        <span className="syn-punctuation">;</span>
      </Line>
    </div>
  );
};

export default SkillsView;
