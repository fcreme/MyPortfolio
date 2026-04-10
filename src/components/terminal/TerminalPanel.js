import React, { useState, useRef, useEffect, useCallback } from 'react';

const PROMPT = 'felipe@portfolio:~$ ';

const ASCII_ART = [
  '    ___       ___   ',
  '   /  /      /  /   ',
  '  /  /___   /  /___ ',
  ' /  ____/  /  ____/ ',
  '/  /      /  /___   ',
  '/__/      /______/  ',
];

const TerminalPanel = ({ onClose, theme }) => {
  const [history, setHistory] = useState([
    { type: 'output', content: 'Welcome to the portfolio terminal. Type "help" for commands.' },
  ]);
  const [input, setInput] = useState('');
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const bodyRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [history]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const addOutput = useCallback((lines) => {
    setHistory((prev) => [...prev, ...lines]);
  }, []);

  const handleCommand = useCallback((cmd) => {
    const trimmed = cmd.trim();
    if (!trimmed) return;

    setCommandHistory((prev) => [...prev, trimmed]);
    setHistoryIndex(-1);

    // Add the command line to history
    const commandLine = { type: 'command', content: trimmed };

    const parts = trimmed.split(/\s+/);
    const command = parts[0].toLowerCase();
    const args = parts.slice(1).join(' ');

    let outputLines = [];

    switch (command) {
      case 'neofetch': {
        outputLines = [{
          type: 'neofetch',
          ascii: ASCII_ART,
          info: [
            { label: null, value: 'felipe@portfolio', isTitle: true },
            { label: null, value: '-------------------', isSep: true },
            { label: 'Role', value: 'Full Stack Developer' },
            { label: 'Location', value: 'Germany' },
            { label: 'Stack', value: 'React, Node.js, TypeScript' },
            { label: 'Editor', value: 'Neovim (btw)' },
            { label: 'Theme', value: theme },
            { label: 'Shell', value: 'bash 5.2.0' },
            { label: 'Terminal', value: 'portfolio-term' },
          ],
        }];
        break;
      }
      case 'ls': {
        outputLines = [
          { type: 'output', content: 'README.md    about.md       experience.md  skills.tsx' },
          { type: 'output', content: 'projects.tsx contact.sh     package.json   dither-demo.jsx' },
        ];
        break;
      }
      case 'cat': {
        if (!args) {
          outputLines = [{ type: 'error', content: 'cat: missing operand' }];
        } else {
          const fileMap = {
            'readme.md': '# Felipe Cremerius\n## Full Stack Developer\nPortfolio built with React, styled as Neovim.',
            'about.md': '# About Me\nFull Stack Developer based in Germany.\nPassionate about clean code and modern web tech.',
            'package.json': '{\n  "name": "felipe-portfolio",\n  "version": "1.0.0",\n  "dependencies": { "react": "^18.2.0" }\n}',
          };
          const key = args.toLowerCase();
          const content = fileMap[key];
          if (content) {
            outputLines = content.split('\n').map((line) => ({ type: 'output', content: line }));
          } else {
            outputLines = [{ type: 'error', content: `cat: ${args}: No such file or directory` }];
          }
        }
        break;
      }
      case 'whoami': {
        outputLines = [{ type: 'output', content: 'felipe' }];
        break;
      }
      case 'pwd': {
        outputLines = [{ type: 'output', content: '/home/felipe/portfolio' }];
        break;
      }
      case 'echo': {
        outputLines = [{ type: 'output', content: args || '' }];
        break;
      }
      case 'date': {
        outputLines = [{ type: 'output', content: new Date().toString() }];
        break;
      }
      case 'uname': {
        outputLines = [{ type: 'output', content: 'PortfolioOS 1.0.0 felipe-portfolio x86_64 ReactJS/Neovim' }];
        break;
      }
      case 'help': {
        outputLines = [
          { type: 'output', content: 'Available commands:' },
          { type: 'output', content: '  neofetch   System info with ASCII art' },
          { type: 'output', content: '  ls         List portfolio files' },
          { type: 'output', content: '  cat <file> Preview file contents' },
          { type: 'output', content: '  whoami     Display current user' },
          { type: 'output', content: '  pwd        Print working directory' },
          { type: 'output', content: '  echo       Print text' },
          { type: 'output', content: '  date       Show current date' },
          { type: 'output', content: '  uname      System information' },
          { type: 'output', content: '  clear      Clear terminal' },
          { type: 'output', content: '  exit       Close terminal panel' },
          { type: 'output', content: '  help       Show this message' },
        ];
        break;
      }
      case 'clear': {
        setHistory([commandLine]);
        setHistory([]);
        return;
      }
      case 'exit': {
        onClose();
        return;
      }
      default: {
        outputLines = [{ type: 'error', content: `bash: ${command}: command not found` }];
        break;
      }
    }

    addOutput([commandLine, ...outputLines]);
  }, [addOutput, onClose, theme]);

  const handleKeyDown = (e) => {
    e.stopPropagation();

    if (e.key === 'Enter') {
      handleCommand(input);
      setInput('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex === -1
          ? commandHistory.length - 1
          : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1;
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1);
          setInput('');
        } else {
          setHistoryIndex(newIndex);
          setInput(commandHistory[newIndex]);
        }
      }
    }
  };

  const handleBodyClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const renderLine = (entry, i) => {
    if (entry.type === 'command') {
      return (
        <div key={i} className="terminal-panel-line">
          <span className="terminal-panel-prompt">{PROMPT}</span>
          <span className="terminal-panel-cmd">{entry.content}</span>
        </div>
      );
    }

    if (entry.type === 'neofetch') {
      const maxLines = Math.max(entry.ascii.length, entry.info.length);
      return (
        <div key={i} className="terminal-panel-neofetch">
          <div className="terminal-panel-neofetch-ascii">
            {entry.ascii.join('\n')}
          </div>
          <div className="terminal-panel-neofetch-info">
            {Array.from({ length: maxLines }, (_, j) => {
              const info = entry.info[j];
              if (!info) return <div key={j} className="terminal-panel-line">&nbsp;</div>;
              if (info.isTitle) {
                return (
                  <div key={j} className="terminal-panel-line">
                    <span className="terminal-panel-neofetch-title">{info.value}</span>
                  </div>
                );
              }
              if (info.isSep) {
                return (
                  <div key={j} className="terminal-panel-line">
                    <span className="terminal-panel-neofetch-sep">{info.value}</span>
                  </div>
                );
              }
              return (
                <div key={j} className="terminal-panel-line">
                  <span className="terminal-panel-neofetch-label">{info.label}</span>
                  <span className="terminal-panel-neofetch-sep">: </span>
                  <span className="terminal-panel-neofetch-value">{info.value}</span>
                </div>
              );
            })}
            <div className="terminal-panel-neofetch-colors">
              {['#f87171', '#fbbf24', '#4ade80', '#60a5fa', '#c084fc', '#f472b6', '#5fdfdf', '#e2e8f0'].map((c) => (
                <div key={c} className="terminal-panel-neofetch-color" style={{ background: c }} />
              ))}
            </div>
          </div>
        </div>
      );
    }

    if (entry.type === 'error') {
      return (
        <div key={i} className="terminal-panel-line">
          <span className="terminal-panel-error">{entry.content}</span>
        </div>
      );
    }

    return (
      <div key={i} className="terminal-panel-line">
        <span className="terminal-panel-output">{entry.content}</span>
      </div>
    );
  };

  return (
    <div className="terminal-panel" onClick={handleBodyClick}>
      <div className="terminal-panel-header">
        <span className="terminal-panel-title">TERMINAL</span>
        <button className="terminal-panel-close" onClick={(e) => { e.stopPropagation(); onClose(); }}>
          ✕
        </button>
      </div>
      <div className="terminal-panel-body" ref={bodyRef}>
        {history.map((entry, i) => renderLine(entry, i))}
        <div className="terminal-panel-input-line">
          <span className="terminal-panel-prompt">{PROMPT}</span>
          <input
            ref={inputRef}
            className="terminal-panel-input"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            spellCheck={false}
            autoComplete="off"
          />
        </div>
      </div>
    </div>
  );
};

export default TerminalPanel;
