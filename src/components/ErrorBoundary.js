import React from 'react';
import { isTheme, DEFAULT_THEME } from './terminal/themes';

const CONTACT_EMAIL = 'felipecremerius1@gmail.com';

// the same read NeovimTerminal does, duplicated rather than imported: this is
// the component that runs once everything else has failed, so it takes no
// dependency on the module that just crashed. localStorage throws outright
// when a browser blocks site data, and a stale name would put an unknown
// value in data-theme and render the fallback unstyled.
const readStoredTheme = () => {
  try {
    const saved = localStorage.getItem('nvim-theme');
    return isTheme(saved) ? saved : DEFAULT_THEME;
  } catch {
    return DEFAULT_THEME;
  }
};

// 100vh counts the strip under the mobile URL bar, which is why the
// stylesheets pair it with a 100dvh override. A style object holds one value
// per property, so the pair becomes a feature test instead.
const viewportHeight =
  typeof CSS !== 'undefined' && CSS.supports && CSS.supports('height', '100dvh')
    ? '100dvh'
    : '100vh';

const screen = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: viewportHeight,
  width: '100vw',
  padding: '24px',
  background: 'var(--nvim-bg, #0f0f1e)',
  color: 'var(--nvim-fg, #e2e8f0)',
  fontFamily: "var(--nvim-font, 'JetBrains Mono', 'Fira Code', 'Consolas', monospace)",
  fontSize: '14px',
  lineHeight: 1.7,
};

const panel = {
  width: '100%',
  maxWidth: '620px',
  border: '1px solid var(--nvim-border-strong, rgba(255, 255, 255, 0.08))',
  borderRadius: '6px',
  overflow: 'hidden',
  background: 'var(--nvim-bg-transparent, rgba(15, 15, 30, 0.75))',
};

const titlebar = {
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  height: '36px',
  padding: '0 12px',
  background: 'var(--nvim-bg-titlebar, rgba(10, 10, 20, 0.8))',
  borderBottom: '1px solid var(--nvim-border, rgba(255, 255, 255, 0.06))',
};

const dot = (color) => ({
  width: '12px',
  height: '12px',
  borderRadius: '50%',
  background: color,
});

const titlebarText = {
  marginLeft: '4px',
  fontSize: '12px',
  color: 'var(--nvim-fg-dim, rgba(255, 255, 255, 0.5))',
};

const body = { padding: '20px 20px 16px' };

const tilde = {
  display: 'inline-block',
  width: '20px',
  color: 'var(--nvim-tilde, #3a5faa)',
};

const errorLine = { color: 'var(--nvim-error, #f87171)' };

const comment = { color: 'var(--nvim-comment, rgba(255, 255, 255, 0.3))' };

const actions = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '10px',
  marginTop: '16px',
  marginLeft: '20px',
};

const action = {
  padding: '6px 12px',
  border: '1px solid var(--nvim-border-stronger, rgba(255, 255, 255, 0.15))',
  borderRadius: '4px',
  background: 'var(--nvim-bg-hover, rgba(255, 255, 255, 0.05))',
  color: 'var(--nvim-link-hover, #60a5fa)',
  fontFamily: 'inherit',
  fontSize: '13px',
  textDecoration: 'none',
  cursor: 'pointer',
};

const statusline = {
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  padding: '3px 12px',
  background: 'var(--nvim-bg-statusbar, rgba(200, 200, 200, 0.95))',
  color: 'var(--nvim-fg-statusbar, #0a0a14)',
  fontSize: '12px',
};

const reload = () => window.location.reload();

class ErrorBoundary extends React.Component {
  // a thrown non-Error (or a bare `throw null`) still has to trip the fallback,
  // so the flag decides, not the payload.
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    console.error('NeovimTerminal crashed:', error, info.componentStack);
  }

  render() {
    const { hasError, error } = this.state;
    if (!hasError) return this.props.children;

    return (
      // the --nvim-* palette is declared under [data-theme], and the element
      // carrying that attribute went down with the crash — without it here
      // every var() below falls through to its literal. Read at render time so
      // a visitor who picked gruvbox doesn't get the crash screen in tokyonight.
      <div style={screen} data-theme={readStoredTheme()}>
        <div style={panel}>
          <div style={titlebar}>
            <span style={dot('var(--nvim-dot-red, #ff5f57)')} />
            <span style={dot('var(--nvim-dot-yellow, #febc2e)')} />
            <span style={dot('var(--nvim-dot-green, #28c840)')} />
            <span style={titlebarText}>portfolio — recovered</span>
          </div>

          <div style={body}>
            <div style={errorLine}>E5108: Error executing render callback</div>
            {error && error.message && <div style={comment}>-- {error.message} --</div>}
            <div><span style={tilde}>~</span></div>
            <div>
              <span style={tilde}>~</span>
              A component threw and Neovim dropped the buffer.
            </div>
            <div>
              <span style={tilde}>~</span>
              Reloading usually brings the editor straight back.
            </div>
            <div><span style={tilde}>~</span></div>
            <div>
              <span style={tilde}>~</span>
              <span style={comment}>
                If it keeps happening, mail me — I would genuinely like to know.
              </span>
            </div>

            <div style={actions}>
              <button type="button" style={action} onClick={reload}>:e! reload</button>
              <a style={action} href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </div>
          </div>

          <div style={statusline}>
            <strong>NORMAL</strong>
            <span>portfolio.jsx</span>
            <span style={{ marginLeft: 'auto' }}>1:1</span>
          </div>
        </div>
      </div>
    );
  }
}

export default ErrorBoundary;
