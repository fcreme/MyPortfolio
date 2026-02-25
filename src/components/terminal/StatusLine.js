import React, { useRef, useEffect, useState } from 'react';

const lineCountMap = {
  'README.md': 32,
  'about.md': 31,
  'experience.md': 30,
  'skills.tsx': 100,
  'projects.tsx': 24,
  'contact.sh': 22,
  'package.json': 24,
};

const StatusLine = ({ vimMode, activeFile, commandText, commandMode, onCommand, onCommandCancel }) => {
  const lineCount = lineCountMap[activeFile] || 0;
  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState('');

  // Focus input when command mode activates
  useEffect(() => {
    if (commandMode && inputRef.current) {
      setInputValue('');
      inputRef.current.focus();
    }
  }, [commandMode]);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onCommand(inputValue);
      setInputValue('');
    } else if (e.key === 'Escape') {
      onCommandCancel();
      setInputValue('');
    }
  };

  const renderCommandLine = () => {
    // Active command input mode
    if (commandMode) {
      return (
        <div className="commandline-input-wrap">
          <span className="commandline-colon">:</span>
          <input
            ref={inputRef}
            className="commandline-input"
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            onBlur={onCommandCancel}
            spellCheck={false}
            autoComplete="off"
          />
        </div>
      );
    }

    // Echo of last command (e.g. ":e about.md")
    if (commandText) {
      return (
        <span className="commandline-echo">
          <span className="commandline-echo-cmd">
            {commandText.split(' ')[0]}
          </span>
          {commandText.includes(' ') && (
            <span className="commandline-echo-arg">
              {' '}{commandText.split(' ').slice(1).join(' ')}
            </span>
          )}
        </span>
      );
    }

    // Default: show mode
    return (
      <span className={`commandline-mode ${vimMode.toLowerCase()}`}>
        -- {vimMode} --
      </span>
    );
  };

  return (
    <div className="nvim-statusline-wrap">
      <div className="nvim-statusline-bar">
        <span className="statusline-left">
          <span className="statusline-filename">{activeFile}</span>
          <span className="statusline-ro">[RO]</span>
          <span className="statusline-lines">{lineCount}L</span>
        </span>
        <span className="statusline-right">
          <span className="statusline-pos">1,1</span>
          <span className="statusline-pct">All</span>
        </span>
      </div>
      <div className="nvim-commandline">
        {renderCommandLine()}
      </div>
    </div>
  );
};

export default StatusLine;
