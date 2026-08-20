/**
 * Rendered line count per buffer, used by the status line (the "NNL" readout)
 * and by the G motion to clamp the cursor.
 *
 * These must match the number of <Line>/<Empty> elements a view actually
 * renders. To recompute after editing a view:
 *
 *   grep -c 'n={l()}' src/components/terminal/views/<View>.js
 *
 * (DitherDemoView numbers its lines literally, so count `n={<digit>}` there.)
 */
const LINE_COUNTS = {
  'README.md': 34,
  'about.md': 38,
  'experience.md': 71,
  'skills.tsx': 49,
  'projects.tsx': 23,
  'contact.sh': 24,
  'package.json': 25,
  'dither-demo.jsx': 9,
  'help.txt': 41,
};

export const getLineCount = (file) => LINE_COUNTS[file] || 0;

export default LINE_COUNTS;
