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
        ['React', 90], ['JavaScript', 90], ['TypeScript', 80],
        ['HTML5/CSS3', 95], ['Tailwind CSS', 85], ['Framer Motion', 80], ['Liquid', 75]
      ].map(([name, level], i) => (
        <Line key={i} n={l()}>
          <span className="syn-punctuation">{'      { '}</span>
          <span className="syn-property">name</span>
          <span className="syn-operator">: </span>
          <span className="syn-string">"{name}"</span>
          <span className="syn-punctuation">, </span>
          <span className="syn-property">level</span>
          <span className="syn-operator">: </span>
          <span className="syn-number">{level}</span>
          <span className="syn-punctuation">{' },'}</span>
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
        ['Node.js (NestJS)', 80], ['REST APIs', 90], ['Socket.io', 75], ['Google Apps Script', 80]
      ].map(([name, level], i) => (
        <Line key={i} n={l()}>
          <span className="syn-punctuation">{'      { '}</span>
          <span className="syn-property">name</span>
          <span className="syn-operator">: </span>
          <span className="syn-string">"{name}"</span>
          <span className="syn-punctuation">, </span>
          <span className="syn-property">level</span>
          <span className="syn-operator">: </span>
          <span className="syn-number">{level}</span>
          <span className="syn-punctuation">{' },'}</span>
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
        ['MySQL', 90], ['Zustand', 85], ['TanStack Query', 85], ['Axios', 90]
      ].map(([name, level], i) => (
        <Line key={i} n={l()}>
          <span className="syn-punctuation">{'      { '}</span>
          <span className="syn-property">name</span>
          <span className="syn-operator">: </span>
          <span className="syn-string">"{name}"</span>
          <span className="syn-punctuation">, </span>
          <span className="syn-property">level</span>
          <span className="syn-operator">: </span>
          <span className="syn-number">{level}</span>
          <span className="syn-punctuation">{' },'}</span>
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
        ['Component-based Architecture', 90], ['Design Systems', 85],
        ['Code Splitting / Lazy Loading', 85], ['Caching Strategies', 80]
      ].map(([name, level], i) => (
        <Line key={i} n={l()}>
          <span className="syn-punctuation">{'      { '}</span>
          <span className="syn-property">name</span>
          <span className="syn-operator">: </span>
          <span className="syn-string">"{name}"</span>
          <span className="syn-punctuation">, </span>
          <span className="syn-property">level</span>
          <span className="syn-operator">: </span>
          <span className="syn-number">{level}</span>
          <span className="syn-punctuation">{' },'}</span>
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
        ['ECharts', 85], ['Recharts', 80], ['Jest / Vitest', 75]
      ].map(([name, level], i) => (
        <Line key={i} n={l()}>
          <span className="syn-punctuation">{'      { '}</span>
          <span className="syn-property">name</span>
          <span className="syn-operator">: </span>
          <span className="syn-string">"{name}"</span>
          <span className="syn-punctuation">, </span>
          <span className="syn-property">level</span>
          <span className="syn-operator">: </span>
          <span className="syn-number">{level}</span>
          <span className="syn-punctuation">{' },'}</span>
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
        ['Git / GitHub', 90], ['Neovim / VS Code', 90],
        ['Claude Code', 85], ['Postman / Bruno', 85]
      ].map(([name, level], i) => (
        <Line key={i} n={l()}>
          <span className="syn-punctuation">{'      { '}</span>
          <span className="syn-property">name</span>
          <span className="syn-operator">: </span>
          <span className="syn-string">"{name}"</span>
          <span className="syn-punctuation">, </span>
          <span className="syn-property">level</span>
          <span className="syn-operator">: </span>
          <span className="syn-number">{level}</span>
          <span className="syn-punctuation">{' },'}</span>
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
