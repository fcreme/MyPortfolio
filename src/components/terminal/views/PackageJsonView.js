import React from 'react';
import { Line } from '../Line';
import { SpecialText } from '../../ui/special-text';

const PackageJsonView = () => {
  let d = 0;
  const next = (step = 0.03) => { d += step; return d; };

  return (
    <div className="content-view">
      <Line n={1}>
        <span className="syn-json-brace">{'{'}</span>
      </Line>
      <Line n={2}>
        <SpecialText speed={5} delay={next()} className="syn-json-key">{'  "name"'}</SpecialText>
        <span className="syn-punctuation">: </span>
        <SpecialText speed={6} delay={next(0.01)} className="syn-json-string">"felipe-portfolio"</SpecialText>
        <span className="syn-punctuation">,</span>
      </Line>
      <Line n={3}>
        <SpecialText speed={5} delay={next()} className="syn-json-key">{'  "version"'}</SpecialText>
        <span className="syn-punctuation">: </span>
        <SpecialText speed={6} delay={next(0.01)} className="syn-json-string">"2.0.0"</SpecialText>
        <span className="syn-punctuation">,</span>
      </Line>
      <Line n={4}>
        <SpecialText speed={5} delay={next()} className="syn-json-key">{'  "description"'}</SpecialText>
        <span className="syn-punctuation">: </span>
        <SpecialText speed={6} delay={next(0.01)} className="syn-json-string">{"\"Full Stack Developer portfolio — neovim edition\""}</SpecialText>
        <span className="syn-punctuation">,</span>
      </Line>
      <Line n={5}>
        <SpecialText speed={5} delay={next()} className="syn-json-key">{'  "author"'}</SpecialText>
        <span className="syn-punctuation">: </span>
        <SpecialText speed={6} delay={next(0.01)} className="syn-json-string">"Felipe Cremerius"</SpecialText>
        <span className="syn-punctuation">,</span>
      </Line>
      <Line n={6}>
        <SpecialText speed={5} delay={next()} className="syn-json-key">{'  "license"'}</SpecialText>
        <span className="syn-punctuation">: </span>
        <SpecialText speed={6} delay={next(0.01)} className="syn-json-string">"MIT"</SpecialText>
        <span className="syn-punctuation">,</span>
      </Line>
      <Line n={7}>
        <SpecialText speed={5} delay={next()} className="syn-json-key">{'  "homepage"'}</SpecialText>
        <span className="syn-punctuation">: </span>
        <span className="syn-json-string">"</span>
        <a className="syn-link" href="https://github.com/fcreme" target="_blank" rel="noopener noreferrer">https://github.com/fcreme</a>
        <span className="syn-json-string">"</span>
        <span className="syn-punctuation">,</span>
      </Line>
      <Line n={8}>
        <SpecialText speed={5} delay={next()} className="syn-json-key">{'  "repository"'}</SpecialText>
        <span className="syn-punctuation">: </span>
        <span className="syn-json-brace">{'{'}</span>
      </Line>
      <Line n={9}>
        <SpecialText speed={5} delay={next()} className="syn-json-key">{'    "type"'}</SpecialText>
        <span className="syn-punctuation">: </span>
        <SpecialText speed={6} delay={next(0.01)} className="syn-json-string">"git"</SpecialText>
        <span className="syn-punctuation">,</span>
      </Line>
      <Line n={10}>
        <SpecialText speed={5} delay={next()} className="syn-json-key">{'    "url"'}</SpecialText>
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
        <SpecialText speed={5} delay={next()} className="syn-json-key">{'  "keywords"'}</SpecialText>
        <span className="syn-punctuation">: </span>
        <span className="syn-json-brace">[</span>
        <SpecialText speed={5} delay={next(0.01)} className="syn-json-string">"react"</SpecialText>
        <span className="syn-punctuation">, </span>
        <SpecialText speed={5} delay={next(0.01)} className="syn-json-string">"portfolio"</SpecialText>
        <span className="syn-punctuation">, </span>
        <SpecialText speed={5} delay={next(0.01)} className="syn-json-string">"fullstack"</SpecialText>
        <span className="syn-punctuation">, </span>
        <SpecialText speed={5} delay={next(0.01)} className="syn-json-string">"neovim"</SpecialText>
        <span className="syn-json-brace">]</span>
        <span className="syn-punctuation">,</span>
      </Line>
      <Line n={13}>
        <SpecialText speed={5} delay={next()} className="syn-json-key">{'  "socials"'}</SpecialText>
        <span className="syn-punctuation">: </span>
        <span className="syn-json-brace">{'{'}</span>
      </Line>
      <Line n={14}>
        <SpecialText speed={5} delay={next()} className="syn-json-key">{'    "github"'}</SpecialText>
        <span className="syn-punctuation">: </span>
        <span className="syn-json-string">"</span>
        <a className="syn-link" href="https://github.com/fcreme" target="_blank" rel="noopener noreferrer">https://github.com/fcreme</a>
        <span className="syn-json-string">"</span>
        <span className="syn-punctuation">,</span>
      </Line>
      <Line n={15}>
        <SpecialText speed={5} delay={next()} className="syn-json-key">{'    "linkedin"'}</SpecialText>
        <span className="syn-punctuation">: </span>
        <span className="syn-json-string">"</span>
        <a className="syn-link" href="https://www.linkedin.com/in/felipecremerius" target="_blank" rel="noopener noreferrer">https://linkedin.com/in/felipecremerius</a>
        <span className="syn-json-string">"</span>
        <span className="syn-punctuation">,</span>
      </Line>
      <Line n={16}>
        <SpecialText speed={5} delay={next()} className="syn-json-key">{'    "email"'}</SpecialText>
        <span className="syn-punctuation">: </span>
        <span className="syn-json-string">"</span>
        <a className="syn-link" href="mailto:felipecremerius1@gmail.com">felipecremerius1@gmail.com</a>
        <span className="syn-json-string">"</span>
        <span className="syn-punctuation">,</span>
      </Line>
      <Line n={17}>
        <SpecialText speed={5} delay={next()} className="syn-json-key">{'    "resume"'}</SpecialText>
        <span className="syn-punctuation">: </span>
        <span className="syn-json-string">"</span>
        <a className="syn-link" href="/Felipe_Cremerius_CV.pdf" download>Download CV (PDF)</a>
        <span className="syn-json-string">"</span>
      </Line>
      <Line n={18}>
        <span className="syn-json-brace">{'  }'}</span>
        <span className="syn-punctuation">,</span>
      </Line>
      <Line n={18}>
        <SpecialText speed={5} delay={next()} className="syn-json-key">{'  "contact"'}</SpecialText>
        <span className="syn-punctuation">: </span>
        <span className="syn-json-brace">{'{'}</span>
      </Line>
      <Line n={19}>
        <SpecialText speed={5} delay={next()} className="syn-json-key">{'    "phone"'}</SpecialText>
        <span className="syn-punctuation">: </span>
        <SpecialText speed={6} delay={next(0.01)} className="syn-json-string">"+54 11 6200 7718"</SpecialText>
        <span className="syn-punctuation">,</span>
      </Line>
      <Line n={20}>
        <SpecialText speed={5} delay={next()} className="syn-json-key">{'    "location"'}</SpecialText>
        <span className="syn-punctuation">: </span>
        <SpecialText speed={6} delay={next(0.01)} className="syn-json-string">"Buenos Aires, Argentina"</SpecialText>
      </Line>
      <Line n={21}>
        <span className="syn-json-brace">{'  }'}</span>
        <span className="syn-punctuation">,</span>
      </Line>
      <Line n={22}>
        <SpecialText speed={5} delay={next()} className="syn-json-key">{'  "stack"'}</SpecialText>
        <span className="syn-punctuation">: </span>
        <span className="syn-json-brace">[</span>
        <SpecialText speed={5} delay={next(0.01)} className="syn-json-string">"React"</SpecialText>
        <span className="syn-punctuation">, </span>
        <SpecialText speed={5} delay={next(0.01)} className="syn-json-string">"TypeScript"</SpecialText>
        <span className="syn-punctuation">, </span>
        <SpecialText speed={5} delay={next(0.01)} className="syn-json-string">"Tailwind CSS"</SpecialText>
        <span className="syn-punctuation">, </span>
        <SpecialText speed={5} delay={next(0.01)} className="syn-json-string">"Node.js"</SpecialText>
        <span className="syn-punctuation">, </span>
        <SpecialText speed={5} delay={next(0.01)} className="syn-json-string">"Jest"</SpecialText>
        <span className="syn-json-brace">]</span>
        <span className="syn-punctuation">,</span>
      </Line>
      <Line n={23}>
        <SpecialText speed={5} delay={next()} className="syn-json-key">{'  "available"'}</SpecialText>
        <span className="syn-punctuation">: </span>
        <SpecialText speed={5} delay={next(0.01)} className="syn-json-bool">true</SpecialText>
      </Line>
      <Line n={24}>
        <span className="syn-json-brace">{'}'}</span>
      </Line>
    </div>
  );
};

export default PackageJsonView;
