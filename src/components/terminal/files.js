/**
 * The one list of buffers the editor knows about.
 *
 * Everything that needs to know which files exist reads from here: the netrw
 * tree, the Telescope picker and the `:e` command's fuzzy match. Adding a
 * buffer means adding a row here plus a case in NeovimTerminal's renderView.
 *
 * `dir` places the file in the tree and the picker — '' for the project root,
 * 'src' for the src/ folder. `null` keeps a buffer openable by `:e` but out of
 * both listings, the way nvim's own help buffer behaves.
 *
 * Line counts are deliberately absent: views build their lines imperatively
 * (some inside a `.map()`, some behind a conditional), so NeovimTerminal counts
 * the rendered lines instead of trusting a table that has to be kept in sync.
 */
const ROOT = '~/felipe-portfolio';

export const FILES = [
  { name: 'README.md', dir: '' },
  { name: 'about.md', dir: '' },
  { name: 'experience.md', dir: '' },
  { name: 'contact.sh', dir: '' },
  { name: 'package.json', dir: '' },
  { name: 'skills.tsx', dir: 'src' },
  { name: 'projects.tsx', dir: 'src' },
  { name: 'help.txt', dir: null },
];

export const filePath = (file) =>
  `${ROOT}/${file.dir ? `${file.dir}/` : ''}${file.name}`;

/** Files netrw and Telescope list, in tree order. */
export const listedFiles = FILES.filter((f) => f.dir !== null);
export const rootFiles = FILES.filter((f) => f.dir === '');
export const srcFiles = FILES.filter((f) => f.dir === 'src');

/** Substring match for `:e <name>`, over every buffer including help.txt. */
export const findFile = (query) => {
  const q = query.trim().toLowerCase();
  if (!q) return null;
  return FILES.find((f) => f.name.toLowerCase().includes(q)) || null;
};
