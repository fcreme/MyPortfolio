import React from 'react';
import { Line, Empty } from '../Line';

const HelpView = () => {
  let n = 0;
  const l = () => ++n;

  return (
    <div className="content-view">
      <Line n={l()}>
        <span className="syn-heading-marker">{'# '}</span>
        <span className="syn-heading">Help — Keybindings & Commands</span>
      </Line>
      <Empty n={l()} />
      <Line n={l()}>
        <span className="syn-heading-marker">{'## '}</span>
        <span className="syn-heading">Navigation</span>
      </Line>
      <Empty n={l()} />
      <Line n={l()}>
        <span className="syn-function">{'  j / k      '}</span>
        <span className="syn-comment">{'Move cursor down / up'}</span>
      </Line>
      <Line n={l()}>
        <span className="syn-function">{'  gg         '}</span>
        <span className="syn-comment">{'Jump to top of file'}</span>
      </Line>
      <Line n={l()}>
        <span className="syn-function">{'  G          '}</span>
        <span className="syn-comment">{'Jump to bottom of file'}</span>
      </Line>
      <Line n={l()}>
        <span className="syn-function">{'  Ctrl+P     '}</span>
        <span className="syn-comment">{'Open Telescope file finder'}</span>
      </Line>
      <Line n={l()}>
        <span className="syn-function">{'  Ctrl+`     '}</span>
        <span className="syn-comment">{'Toggle terminal panel'}</span>
      </Line>
      <Empty n={l()} />
      <Line n={l()}>
        <span className="syn-heading-marker">{'## '}</span>
        <span className="syn-heading">Commands</span>
      </Line>
      <Empty n={l()} />
      <Line n={l()}>
        <span className="syn-keyword">{'  :e <file>          '}</span>
        <span className="syn-comment">{'Open a file (fuzzy match)'}</span>
      </Line>
      <Line n={l()}>
        <span className="syn-keyword">{'  :q / :q! / :wq     '}</span>
        <span className="syn-comment">{"You can't quit vim..."}</span>
      </Line>
      <Line n={l()}>
        <span className="syn-keyword">{'  :help              '}</span>
        <span className="syn-comment">{'Show this help file'}</span>
      </Line>
      <Line n={l()}>
        <span className="syn-keyword">{'  :Telescope          '}</span>
        <span className="syn-comment">{'Open Telescope picker'}</span>
      </Line>
      <Line n={l()}>
        <span className="syn-keyword">{'  :terminal / :term  '}</span>
        <span className="syn-comment">{'Toggle terminal panel'}</span>
      </Line>
      <Line n={l()}>
        <span className="syn-keyword">{'  :colorscheme <name>'}</span>
        <span className="syn-comment">{'Switch color theme'}</span>
      </Line>
      <Line n={l()}>
        <span className="syn-keyword">{'  :version           '}</span>
        <span className="syn-comment">{'Show version info'}</span>
      </Line>
      <Empty n={l()} />
      <Line n={l()}>
        <span className="syn-heading-marker">{'## '}</span>
        <span className="syn-heading">Available Themes</span>
      </Line>
      <Empty n={l()} />
      <Line n={l()}>
        <span className="syn-string">{'  tokyonight   '}</span>
        <span className="syn-comment">{'Cool blues & purples (default)'}</span>
      </Line>
      <Line n={l()}>
        <span className="syn-string">{'  gruvbox      '}</span>
        <span className="syn-comment">{'Warm browns & oranges'}</span>
      </Line>
      <Line n={l()}>
        <span className="syn-string">{'  catppuccin   '}</span>
        <span className="syn-comment">{'Soft pastels (mocha)'}</span>
      </Line>
      <Empty n={l()} />
      <Line n={l()}>
        <span className="syn-heading-marker">{'## '}</span>
        <span className="syn-heading">Terminal Commands</span>
      </Line>
      <Empty n={l()} />
      <Line n={l()}>
        <span className="syn-type">{'  neofetch    '}</span>
        <span className="syn-comment">{'System info with ASCII art'}</span>
      </Line>
      <Line n={l()}>
        <span className="syn-type">{'  ls          '}</span>
        <span className="syn-comment">{'List portfolio files'}</span>
      </Line>
      <Line n={l()}>
        <span className="syn-type">{'  cat <file>  '}</span>
        <span className="syn-comment">{'Preview file contents'}</span>
      </Line>
      <Line n={l()}>
        <span className="syn-type">{'  whoami      '}</span>
        <span className="syn-comment">{'Display current user'}</span>
      </Line>
      <Line n={l()}>
        <span className="syn-type">{'  pwd         '}</span>
        <span className="syn-comment">{'Print working directory'}</span>
      </Line>
      <Line n={l()}>
        <span className="syn-type">{'  echo <text> '}</span>
        <span className="syn-comment">{'Print text to terminal'}</span>
      </Line>
      <Line n={l()}>
        <span className="syn-type">{'  date        '}</span>
        <span className="syn-comment">{'Show current date'}</span>
      </Line>
      <Line n={l()}>
        <span className="syn-type">{'  uname       '}</span>
        <span className="syn-comment">{'System information'}</span>
      </Line>
      <Line n={l()}>
        <span className="syn-type">{'  clear       '}</span>
        <span className="syn-comment">{'Clear terminal output'}</span>
      </Line>
      <Line n={l()}>
        <span className="syn-type">{'  exit        '}</span>
        <span className="syn-comment">{'Close terminal panel'}</span>
      </Line>
      <Line n={l()}>
        <span className="syn-type">{'  help        '}</span>
        <span className="syn-comment">{'Show terminal help'}</span>
      </Line>
      <Empty n={l()} />
      <Line n={l()}>
        <span className="syn-comment">{'  " Type :help in command mode to see this file'}</span>
      </Line>
    </div>
  );
};

export default HelpView;
