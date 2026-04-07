import React, { useState, useEffect, useRef } from 'react';
import { SpecialText } from '../ui/special-text';

const PLUGINS = [
  { name: 'lazy.nvim', time: '1.2ms' },
  { name: 'nvim-treesitter', time: '8.1ms' },
  { name: 'telescope.nvim', time: '3.2ms' },
  { name: 'nvim-lspconfig', time: '5.7ms' },
  { name: 'gitsigns.nvim', time: '2.4ms' },
  { name: 'lualine.nvim', time: '4.1ms' },
  { name: 'nvim-cmp', time: '6.3ms' },
  { name: 'alpha-nvim', time: '1.8ms' },
  { name: 'tokyonight.nvim', time: '2.9ms' },
  { name: 'nvim-autopairs', time: '1.1ms' },
  { name: 'comment.nvim', time: '0.8ms' },
  { name: 'indent-blankline.nvim', time: '3.5ms' },
];

const SPINNER_FRAMES = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'];

const LazyLoader = ({ onComplete }) => {
  const [loadedCount, setLoadedCount] = useState(0);
  const [loadingIndex, setLoadingIndex] = useState(0);
  const [spinnerFrame, setSpinnerFrame] = useState(0);
  const [done, setDone] = useState(false);
  const intervalRef = useRef(null);

  // Spinner animation
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setSpinnerFrame((prev) => (prev + 1) % SPINNER_FRAMES.length);
    }, 80);
    return () => clearInterval(intervalRef.current);
  }, []);

  // Staggered plugin loading
  useEffect(() => {
    if (loadingIndex >= PLUGINS.length) {
      const timer = setTimeout(() => {
        setDone(true);
        setTimeout(onComplete, 400);
      }, 300);
      return () => clearTimeout(timer);
    }

    const delay = 150 + Math.random() * 250;
    const timer = setTimeout(() => {
      setLoadedCount(loadingIndex + 1);
      setLoadingIndex((prev) => prev + 1);
    }, delay);

    return () => clearTimeout(timer);
  }, [loadingIndex, onComplete]);

  const progressFilled = Math.floor((loadedCount / PLUGINS.length) * 20);
  const progressEmpty = 20 - progressFilled;

  return (
    <div className={`lazy-loader${done ? ' lazy-loader-fade' : ''}`}>
      <div className="lazy-loader-content">
        <div className="lazy-header">
          <span className="lazy-icon">💤</span>
          <span className="lazy-title">
            <SpecialText speed={18} delay={0.1}>lazy.nvim</SpecialText>
          </span>
          <span className="lazy-subtitle">
            <SpecialText speed={15} delay={0.3}>{' — loading plugins...'}</SpecialText>
          </span>
        </div>

        <div className="lazy-plugin-list">
          {PLUGINS.map((plugin, i) => {
            let icon, timeDisplay, statusClass;

            if (i < loadedCount) {
              icon = '✓';
              timeDisplay = plugin.time;
              statusClass = 'lazy-plugin-done';
            } else if (i === loadedCount && loadingIndex < PLUGINS.length) {
              icon = SPINNER_FRAMES[spinnerFrame];
              timeDisplay = '...';
              statusClass = 'lazy-plugin-loading';
            } else {
              icon = ' ';
              timeDisplay = '—';
              statusClass = 'lazy-plugin-pending';
            }

            return (
              <div key={plugin.name} className={`lazy-plugin-row ${statusClass}`}>
                <span className="lazy-plugin-icon">{icon}</span>
                <span className="lazy-plugin-name">
                  {i <= loadedCount && loadingIndex > 0 ? (
                    <SpecialText speed={14} delay={0}>{plugin.name}</SpecialText>
                  ) : (
                    plugin.name
                  )}
                </span>
                <span className="lazy-plugin-time">
                  {i < loadedCount ? (
                    <SpecialText speed={12} delay={0}>{timeDisplay}</SpecialText>
                  ) : (
                    timeDisplay
                  )}
                </span>
              </div>
            );
          })}
        </div>

        <div className="lazy-progress-section">
          <div className="lazy-progress-bar">
            <span className="lazy-progress-filled">{'█'.repeat(progressFilled)}</span>
            <span className="lazy-progress-empty">{'░'.repeat(progressEmpty)}</span>
          </div>
          <span className="lazy-progress-count">
            {loadedCount}/{PLUGINS.length}
          </span>
        </div>
      </div>
    </div>
  );
};

export default LazyLoader;
