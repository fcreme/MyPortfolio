import React from 'react';
import { Line } from '../Line';

const PackageJsonView = () => {
  return (
    <div className="content-view">
      <Line n={1}>
        <span className="syn-json-brace">{'{'}</span>
      </Line>
      <Line n={2}>
        <span className="syn-json-key">  "name"</span>
        <span className="syn-punctuation">: </span>
        <span className="syn-json-string">"felipe-portfolio"</span>
        <span className="syn-punctuation">,</span>
      </Line>
      <Line n={3}>
        <span className="syn-json-key">  "version"</span>
        <span className="syn-punctuation">: </span>
        <span className="syn-json-string">"2.0.0"</span>
        <span className="syn-punctuation">,</span>
      </Line>
      <Line n={4}>
        <span className="syn-json-key">  "description"</span>
        <span className="syn-punctuation">: </span>
        <span className="syn-json-string">"Frontend Developer portfolio — neovim edition"</span>
        <span className="syn-punctuation">,</span>
      </Line>
      <Line n={5}>
        <span className="syn-json-key">  "author"</span>
        <span className="syn-punctuation">: </span>
        <span className="syn-json-string">"Felipe Cremerius"</span>
        <span className="syn-punctuation">,</span>
      </Line>
      <Line n={6}>
        <span className="syn-json-key">  "license"</span>
        <span className="syn-punctuation">: </span>
        <span className="syn-json-string">"MIT"</span>
        <span className="syn-punctuation">,</span>
      </Line>
      <Line n={7}>
        <span className="syn-json-key">  "homepage"</span>
        <span className="syn-punctuation">: </span>
        <span className="syn-json-string">"</span>
        <a className="syn-link" href="https://github.com/fcreme" target="_blank" rel="noopener noreferrer">https://github.com/fcreme</a>
        <span className="syn-json-string">"</span>
        <span className="syn-punctuation">,</span>
      </Line>
      <Line n={8}>
        <span className="syn-json-key">  "repository"</span>
        <span className="syn-punctuation">: </span>
        <span className="syn-json-brace">{'{'}</span>
      </Line>
      <Line n={9}>
        <span className="syn-json-key">    "type"</span>
        <span className="syn-punctuation">: </span>
        <span className="syn-json-string">"git"</span>
        <span className="syn-punctuation">,</span>
      </Line>
      <Line n={10}>
        <span className="syn-json-key">    "url"</span>
        <span className="syn-punctuation">: </span>
        <span className="syn-json-string">"</span>
        <a className="syn-link" href="https://github.com/fcreme" target="_blank" rel="noopener noreferrer">https://github.com/fcreme</a>
        <span className="syn-json-string">"</span>
      </Line>
      <Line n={11}>
        <span className="syn-json-brace">{'  }'}</span>
        <span className="syn-punctuation">,</span>
      </Line>
      <Line n={12}>
        <span className="syn-json-key">  "keywords"</span>
        <span className="syn-punctuation">: </span>
        <span className="syn-json-brace">[</span>
        <span className="syn-json-string">"react"</span>
        <span className="syn-punctuation">, </span>
        <span className="syn-json-string">"portfolio"</span>
        <span className="syn-punctuation">, </span>
        <span className="syn-json-string">"frontend"</span>
        <span className="syn-punctuation">, </span>
        <span className="syn-json-string">"neovim"</span>
        <span className="syn-json-brace">]</span>
        <span className="syn-punctuation">,</span>
      </Line>
      <Line n={13}>
        <span className="syn-json-key">  "socials"</span>
        <span className="syn-punctuation">: </span>
        <span className="syn-json-brace">{'{'}</span>
      </Line>
      <Line n={14}>
        <span className="syn-json-key">    "github"</span>
        <span className="syn-punctuation">: </span>
        <span className="syn-json-string">"</span>
        <a className="syn-link" href="https://github.com/fcreme" target="_blank" rel="noopener noreferrer">https://github.com/fcreme</a>
        <span className="syn-json-string">"</span>
        <span className="syn-punctuation">,</span>
      </Line>
      <Line n={15}>
        <span className="syn-json-key">    "linkedin"</span>
        <span className="syn-punctuation">: </span>
        <span className="syn-json-string">"</span>
        <a className="syn-link" href="https://www.linkedin.com/in/felipe-cremerius-6b6389208/" target="_blank" rel="noopener noreferrer">https://linkedin.com/in/felipe-cremerius</a>
        <span className="syn-json-string">"</span>
        <span className="syn-punctuation">,</span>
      </Line>
      <Line n={16}>
        <span className="syn-json-key">    "email"</span>
        <span className="syn-punctuation">: </span>
        <span className="syn-json-string">"</span>
        <a className="syn-link" href="mailto:felipecremerius1@gmail.com">felipecremerius1@gmail.com</a>
        <span className="syn-json-string">"</span>
      </Line>
      <Line n={17}>
        <span className="syn-json-brace">{'  }'}</span>
        <span className="syn-punctuation">,</span>
      </Line>
      <Line n={18}>
        <span className="syn-json-key">  "contact"</span>
        <span className="syn-punctuation">: </span>
        <span className="syn-json-brace">{'{'}</span>
      </Line>
      <Line n={19}>
        <span className="syn-json-key">    "phone"</span>
        <span className="syn-punctuation">: </span>
        <span className="syn-json-string">"+54 11 6200 7718"</span>
        <span className="syn-punctuation">,</span>
      </Line>
      <Line n={20}>
        <span className="syn-json-key">    "location"</span>
        <span className="syn-punctuation">: </span>
        <span className="syn-json-string">"Buenos Aires, Argentina"</span>
      </Line>
      <Line n={21}>
        <span className="syn-json-brace">{'  }'}</span>
        <span className="syn-punctuation">,</span>
      </Line>
      <Line n={22}>
        <span className="syn-json-key">  "stack"</span>
        <span className="syn-punctuation">: </span>
        <span className="syn-json-brace">[</span>
        <span className="syn-json-string">"React"</span>
        <span className="syn-punctuation">, </span>
        <span className="syn-json-string">"TypeScript"</span>
        <span className="syn-punctuation">, </span>
        <span className="syn-json-string">"Tailwind CSS"</span>
        <span className="syn-punctuation">, </span>
        <span className="syn-json-string">"Node.js"</span>
        <span className="syn-json-brace">]</span>
        <span className="syn-punctuation">,</span>
      </Line>
      <Line n={23}>
        <span className="syn-json-key">  "available"</span>
        <span className="syn-punctuation">: </span>
        <span className="syn-json-bool">true</span>
      </Line>
      <Line n={24}>
        <span className="syn-json-brace">{'}'}</span>
      </Line>
    </div>
  );
};

export default PackageJsonView;
