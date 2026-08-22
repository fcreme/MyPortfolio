import { TSTYLES_THEMES } from './tstylesThemes';

/**
 * The editor's own colourschemes, hand-written in NeovimTerminal.css.
 * Swatches are that theme's tag / function / type colours, so the dots in the
 * picker are the palette rather than a guess at it.
 */
export const EDITOR_THEMES = [
  { id: 'tokyonight', blurb: 'Cool blues & purples', swatch: ['#f87171', '#fbbf24', '#60a5fa'] },
  { id: 'gruvbox', blurb: 'Warm browns & oranges', swatch: ['#fb4934', '#b8bb26', '#fabd2f'] },
  { id: 'catppuccin', blurb: 'Soft pastels (mocha)', swatch: ['#f38ba8', '#f9e2af', '#89b4fa'] },
];

/** Everything `:tstyles` can page through, and `:colorscheme` can name. */
export const THEMES = [...EDITOR_THEMES, ...TSTYLES_THEMES];

export const DEFAULT_THEME = 'tokyonight';

export const isTheme = (id) => THEMES.some((t) => t.id === id);

export const themeIndex = (id) => {
  const i = THEMES.findIndex((t) => t.id === id);
  return i === -1 ? 0 : i;
};
