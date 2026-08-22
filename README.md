# Felipe Cremerius — Portfolio

A developer portfolio built with React, styled as a fully interactive **Neovim terminal**. Features a file tree, tabbed buffers, a status line, Telescope fuzzy finder, and a dashboard — all rendered in the browser.

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss&logoColor=white)
![Motion](https://img.shields.io/badge/Motion-12-FF0055?logo=framer&logoColor=white)

## Features

- **Neovim UI** — File tree, buffer tabs, status line, and line numbers that mimic a real Neovim session
- **Telescope Integration** — Fuzzy finder overlay for quick navigation between sections
- **Dashboard** — Start screen inspired by Neovim dashboard plugins
- **Lazy Loading** — Components load on demand for fast initial paint
- **Smooth Animations** — Transitions powered by Motion
- **Fully Responsive** — Optimized for desktop, tablet, and mobile
- **Contact Form** — Functional email form via EmailJS

## Theme artwork

The backdrops behind the `:tstyles` styles are the animated GIFs each style
pairs itself with, taken verbatim from the `gifs` branch of
[TerminalStyles](https://github.com/fcreme/TerminalStyles). They are loaded only
when their style is selected, so the page's own background is all a visitor
downloads unless they go looking. They are other people's work, used here as
decoration:
the pixel-art pieces carry their artists' signatures (several are by
[anasabdin](https://anasabdin.itch.io/)), and the film and game stills remain
the property of their rights holders. Nothing here is claimed as original art.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| UI Library | React 18 |
| Styling | Tailwind CSS 3 |
| Animations | Motion |
| Email | EmailJS |
| Build Tool | Create React App |

## Getting Started

### Prerequisites

- Node.js 16+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start the dev server
npm start
```

The app will be available at `http://localhost:3000`.

### Production Build

```bash
npm run build
```

Output is generated in the `build/` directory, ready for static hosting.

## Project Structure

```
portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── NeovimTerminal.js      # Main terminal wrapper
│   │   ├── terminal/
│   │   │   ├── Dashboard.js       # Neovim start screen
│   │   │   ├── FileTree.js        # Side panel file explorer
│   │   │   ├── StatusLine.js      # Bottom status bar
│   │   │   ├── TitleBar.js        # Terminal title bar
│   │   │   ├── Line.js            # Line rendering with numbers
│   │   │   ├── Telescope.js       # Fuzzy finder overlay
│   │   │   ├── TerminalPanel.js   # Ctrl+` shell panel
│   │   │   ├── LazyLoader.js      # lazy.nvim style boot screen
│   │   │   ├── CursorContext.js   # Cursor state management
│   │   │   └── views/
│   │   │       ├── ReadmeView.js
│   │   │       ├── AboutView.js
│   │   │       ├── ExperienceView.js
│   │   │       ├── SkillsView.js
│   │   │       ├── ProjectsView.js
│   │   │       ├── ContactView.js
│   │   │       ├── PackageJsonView.js
│   │   │       ├── HelpView.js
│   │   │       └── HologramView.js
│   │   └── ui/
│   │       ├── special-text.jsx   # Scramble-in text effect
│   │       ├── link-preview.jsx   # Hover link previews
│   │       ├── dither-shader.jsx  # WebGL dither effect
│   │       └── HologramCube.jsx   # three.js hologram
│   ├── lib/
│   │   └── utils.js
│   ├── App.js
│   └── index.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## Deployment

### Vercel

```bash
npm i -g vercel
vercel
```

### Netlify

Set the build command to `npm run build` and the publish directory to `build`.

### GitHub Pages

```bash
npm install --save-dev gh-pages
```

Add to `package.json`:

```json
"homepage": "https://your-username.github.io/portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

Then run:

```bash
npm run deploy
```

## License

MIT
