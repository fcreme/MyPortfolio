import React from 'react';
import { Line } from '../Line';
import { SpecialText } from '../../ui/special-text';

const PackageJsonView = () => {
  let n = 0;
  const l = () => ++n;
  let d = 0;
  const next = (step = 0.03) => { d += step; return d; };

  return (
    <div className="content-view">
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-json-brace">{'{'}</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-json-key">{'  "name"'}</SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-punctuation">: </SpecialText>
        <SpecialText speed={6} delay={next(0.01)} className="syn-json-string">"felipe-portfolio"</SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-punctuation">,</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-json-key">{'  "version"'}</SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-punctuation">: </SpecialText>
        <SpecialText speed={6} delay={next(0.01)} className="syn-json-string">"2.0.0"</SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-punctuation">,</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-json-key">{'  "description"'}</SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-punctuation">: </SpecialText>
        <SpecialText speed={6} delay={next(0.01)} className="syn-json-string">{"\"Full Stack Developer portfolio — neovim edition\""}</SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-punctuation">,</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-json-key">{'  "author"'}</SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-punctuation">: </SpecialText>
        <SpecialText speed={6} delay={next(0.01)} className="syn-json-string">"Felipe Cremerius"</SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-punctuation">,</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-json-key">{'  "license"'}</SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-punctuation">: </SpecialText>
        <SpecialText speed={6} delay={next(0.01)} className="syn-json-string">"MIT"</SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-punctuation">,</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-json-key">{'  "homepage"'}</SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-punctuation">: </SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-json-string">"</SpecialText>
        <a className="syn-link" href="https://github.com/fcreme" target="_blank" rel="noopener noreferrer">
          <SpecialText speed={5} delay={next(0.01)}>https://github.com/fcreme</SpecialText>
        </a>
        <SpecialText speed={5} delay={next(0.005)} className="syn-json-string">"</SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-punctuation">,</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-json-key">{'  "repository"'}</SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-punctuation">: </SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-json-brace">{'{'}</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-json-key">{'    "type"'}</SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-punctuation">: </SpecialText>
        <SpecialText speed={6} delay={next(0.01)} className="syn-json-string">"git"</SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-punctuation">,</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-json-key">{'    "url"'}</SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-punctuation">: </SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-json-string">"</SpecialText>
        <a className="syn-link" href="https://github.com/fcreme" target="_blank" rel="noopener noreferrer">
          <SpecialText speed={5} delay={next(0.01)}>https://github.com/fcreme</SpecialText>
        </a>
        <SpecialText speed={5} delay={next(0.005)} className="syn-json-string">"</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-json-brace">{'  }'}</SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-punctuation">,</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-json-key">{'  "keywords"'}</SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-punctuation">: </SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-json-brace">[</SpecialText>
        <SpecialText speed={5} delay={next(0.01)} className="syn-json-string">"react"</SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-punctuation">, </SpecialText>
        <SpecialText speed={5} delay={next(0.01)} className="syn-json-string">"portfolio"</SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-punctuation">, </SpecialText>
        <SpecialText speed={5} delay={next(0.01)} className="syn-json-string">"fullstack"</SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-punctuation">, </SpecialText>
        <SpecialText speed={5} delay={next(0.01)} className="syn-json-string">"neovim"</SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-json-brace">]</SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-punctuation">,</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-json-key">{'  "socials"'}</SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-punctuation">: </SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-json-brace">{'{'}</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-json-key">{'    "github"'}</SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-punctuation">: </SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-json-string">"</SpecialText>
        <a className="syn-link" href="https://github.com/fcreme" target="_blank" rel="noopener noreferrer">
          <SpecialText speed={5} delay={next(0.01)}>https://github.com/fcreme</SpecialText>
        </a>
        <SpecialText speed={5} delay={next(0.005)} className="syn-json-string">"</SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-punctuation">,</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-json-key">{'    "linkedin"'}</SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-punctuation">: </SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-json-string">"</SpecialText>
        <a className="syn-link" href="https://www.linkedin.com/in/felipecremerius" target="_blank" rel="noopener noreferrer">
          <SpecialText speed={5} delay={next(0.01)}>https://linkedin.com/in/felipecremerius</SpecialText>
        </a>
        <SpecialText speed={5} delay={next(0.005)} className="syn-json-string">"</SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-punctuation">,</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-json-key">{'    "email"'}</SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-punctuation">: </SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-json-string">"</SpecialText>
        <a className="syn-link" href="mailto:felipecremerius1@gmail.com">
          <SpecialText speed={5} delay={next(0.01)}>felipecremerius1@gmail.com</SpecialText>
        </a>
        <SpecialText speed={5} delay={next(0.005)} className="syn-json-string">"</SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-punctuation">,</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-json-key">{'    "resume"'}</SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-punctuation">: </SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-json-string">"</SpecialText>
        <a className="syn-link" href="/Felipe_Cremerius_CV.pdf" download>
          <SpecialText speed={5} delay={next(0.01)}>Download CV (PDF)</SpecialText>
        </a>
        <SpecialText speed={5} delay={next(0.005)} className="syn-json-string">"</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-json-brace">{'  }'}</SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-punctuation">,</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-json-key">{'  "contact"'}</SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-punctuation">: </SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-json-brace">{'{'}</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-json-key">{'    "phone"'}</SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-punctuation">: </SpecialText>
        <SpecialText speed={6} delay={next(0.01)} className="syn-json-string">"+54 11 6200 7718"</SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-punctuation">,</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-json-key">{'    "location"'}</SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-punctuation">: </SpecialText>
        <SpecialText speed={6} delay={next(0.01)} className="syn-json-string">"Buenos Aires, Argentina"</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-json-brace">{'  }'}</SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-punctuation">,</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-json-key">{'  "stack"'}</SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-punctuation">: </SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-json-brace">[</SpecialText>
        <SpecialText speed={5} delay={next(0.01)} className="syn-json-string">"React"</SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-punctuation">, </SpecialText>
        <SpecialText speed={5} delay={next(0.01)} className="syn-json-string">"TypeScript"</SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-punctuation">, </SpecialText>
        <SpecialText speed={5} delay={next(0.01)} className="syn-json-string">"Tailwind CSS"</SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-punctuation">, </SpecialText>
        <SpecialText speed={5} delay={next(0.01)} className="syn-json-string">"Node.js"</SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-punctuation">, </SpecialText>
        <SpecialText speed={5} delay={next(0.01)} className="syn-json-string">"Jest"</SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-json-brace">]</SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-punctuation">,</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-json-key">{'  "available"'}</SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-punctuation">: </SpecialText>
        <SpecialText speed={5} delay={next(0.01)} className="syn-json-bool">true</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-json-brace">{'}'}</SpecialText>
      </Line>
    </div>
  );
};

export default PackageJsonView;
