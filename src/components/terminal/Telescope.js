import React, { useState, useEffect, useRef, useCallback } from 'react';
import { listedFiles, filePath } from './files';

const Telescope = ({ onSelect, onClose }) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);

  const filtered = listedFiles.filter((f) =>
    f.name.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  const handleSelect = useCallback((file) => {
    onSelect(file.name);
  }, [onSelect]);

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') {
      e.preventDefault();
      e.stopPropagation();
      onClose();
      return;
    }

    if (e.key === 'Enter') {
      e.preventDefault();
      if (filtered.length > 0) {
        handleSelect(filtered[selectedIndex]);
      }
      return;
    }

    if (e.key === 'ArrowDown' || (e.ctrlKey && e.key === 'n')) {
      e.preventDefault();
      setSelectedIndex((prev) => Math.min(prev + 1, filtered.length - 1));
      return;
    }

    if (e.key === 'ArrowUp' || (e.ctrlKey && e.key === 'p')) {
      e.preventDefault();
      setSelectedIndex((prev) => Math.max(prev - 1, 0));
      return;
    }
  }, [filtered, selectedIndex, handleSelect, onClose]);

  const highlightMatch = (text) => {
    if (!query) return text;
    const lower = text.toLowerCase();
    const qLower = query.toLowerCase();
    const idx = lower.indexOf(qLower);
    if (idx === -1) return text;

    return (
      <>
        {text.slice(0, idx)}
        <span className="telescope-match">{text.slice(idx, idx + query.length)}</span>
        {text.slice(idx + query.length)}
      </>
    );
  };

  return (
    <div className="telescope-overlay" onClick={onClose}>
      <div className="telescope-modal" onClick={(e) => e.stopPropagation()}>
        <div className="telescope-header">
          <span className="telescope-title">Telescope — Find Files</span>
        </div>

        <div className="telescope-input-row">
          <span className="telescope-prompt">&gt; </span>
          <input
            ref={inputRef}
            className="telescope-input"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search files..."
            spellCheck={false}
            autoComplete="off"
            role="combobox"
            aria-expanded="true"
            aria-controls="telescope-results"
            aria-activedescendant={
              filtered.length ? `telescope-result-${filtered[selectedIndex]?.name}` : undefined
            }
            aria-label="Find files"
          />
        </div>

        <div className="telescope-divider" />

        <div className="telescope-results" id="telescope-results" role="listbox" aria-label="Files">
          {filtered.length === 0 ? (
            <div className="telescope-empty">No files found</div>
          ) : (
            filtered.map((file, i) => (
              <div
                key={file.name}
                id={`telescope-result-${file.name}`}
                className={`telescope-result${i === selectedIndex ? ' telescope-result-selected' : ''}`}
                onClick={() => handleSelect(file)}
                onMouseEnter={() => setSelectedIndex(i)}
                role="option"
                aria-selected={i === selectedIndex}
              >
                <span className="telescope-result-name">
                  {highlightMatch(file.name)}
                </span>
                <span className="telescope-result-path">{filePath(file)}</span>
              </div>
            ))
          )}
        </div>

        <div className="telescope-footer">
          <span className="telescope-hint">↑↓ navigate</span>
          <span className="telescope-hint">⏎ open</span>
          <span className="telescope-hint">esc close</span>
        </div>
      </div>
    </div>
  );
};

export default Telescope;
