import React, { useState, useEffect, useRef, useCallback } from 'react';
import { THEMES, EDITOR_THEMES, themeIndex } from './themes';

/**
 * A standing-in-for-the-real-thing version of the TerminalStyles picker.
 *
 * The behaviour that makes the actual tool worth using is that moving through
 * the list restyles the live session rather than showing a swatch, and backing
 * out puts everything back exactly as it was. Both hold here: the arrow keys
 * re-theme the whole page, Enter keeps what you are looking at, and Escape
 * returns to whatever was set when the picker opened.
 */
const TStyles = ({ startedOn, onPreview, onCommit, onCancel }) => {
  const [index, setIndex] = useState(() => themeIndex(startedOn));
  const listRef = useRef(null);

  const move = useCallback((delta) => {
    setIndex((prev) => {
      const next = (prev + delta + THEMES.length) % THEMES.length;
      onPreview(THEMES[next].id);
      return next;
    });
  }, [onPreview]);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'ArrowDown' || e.key === 'j' || (e.ctrlKey && e.key === 'n')) {
        e.preventDefault(); move(1);
      } else if (e.key === 'ArrowUp' || e.key === 'k' || (e.ctrlKey && e.key === 'p')) {
        e.preventDefault(); move(-1);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        onCommit(THEMES[index].id);
      } else if (e.key === 'Escape') {
        e.preventDefault();
        onCancel();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [move, onCommit, onCancel, index]);

  useEffect(() => {
    const el = listRef.current?.children[index];
    if (el) el.scrollIntoView({ block: 'nearest' });
  }, [index]);

  const select = (i) => {
    setIndex(i);
    onPreview(THEMES[i].id);
  };

  return (
    <div className="tstyles-panel" role="dialog" aria-label="TerminalStyles theme picker">
      <div className="tstyles-header">
        <span className="tstyles-title">tstyles</span>
        <span className="tstyles-count">{index + 1}/{THEMES.length}</span>
      </div>

      <div className="tstyles-list" ref={listRef} role="listbox" aria-label="Styles">
        {THEMES.map((theme, i) => (
          <div
            key={theme.id}
            className={`tstyles-row${i === index ? ' tstyles-row-selected' : ''}`}
            onClick={() => select(i)}
            onMouseEnter={() => select(i)}
            onDoubleClick={() => onCommit(theme.id)}
            role="option"
            aria-selected={i === index}
          >
            <span className="tstyles-marker">{i === index ? '>' : ' '}</span>
            <span className="tstyles-swatch" aria-hidden="true">
              {theme.swatch.map((c) => (
                <span key={c} className="tstyles-dot" style={{ background: c }} />
              ))}
            </span>
            <span className="tstyles-name">{theme.id}</span>
            {EDITOR_THEMES.some((t) => t.id === theme.id) && (
              <span className="tstyles-origin">nvim</span>
            )}
          </div>
        ))}
      </div>

      <div className="tstyles-blurb">{THEMES[index].blurb}</div>

      <div className="tstyles-footer">
        <span className="tstyles-hint">↑↓ preview</span>
        <button
          type="button"
          className="tstyles-hint tstyles-action"
          onClick={() => onCommit(THEMES[index].id)}
        >
          ⏎ keep
        </button>
        <button
          type="button"
          className="tstyles-hint tstyles-action"
          onClick={onCancel}
        >
          esc revert
        </button>
      </div>
    </div>
  );
};

export default TStyles;
