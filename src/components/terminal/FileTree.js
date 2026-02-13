import React from 'react';

const netrwFiles = [
  { type: 'dir', name: 'src/' },
  { type: 'file', name: 'README.md' },
  { type: 'file', name: 'about.md' },
  { type: 'file', name: 'experience.md' },
  { type: 'file', name: 'contact.sh' },
  { type: 'file', name: 'package.json' },
];

const srcFiles = [
  { type: 'file', name: 'skills.tsx' },
  { type: 'file', name: 'projects.tsx' },
  { type: 'file', name: 'dither-demo.jsx' },
];

const FileTree = ({ activeFile, expandedDirs, onToggleDir, onSelectFile, sidebarOpen }) => {
  const isSrcExpanded = expandedDirs.includes('src');

  const handleDirClick = () => {
    onToggleDir('src');
  };

  return (
    <div className={`nvim-filetree${sidebarOpen ? ' open' : ''}`}>
      <div className="netrw-header">
        <div className="netrw-comment">" ========================================</div>
        <div className="netrw-comment">" Netrw Directory Listing    (netrw v175)</div>
        <div className="netrw-comment">"   ~/felipe-portfolio/</div>
        <div className="netrw-comment">"   Sorted by      name</div>
        <div className="netrw-comment">" ========================================</div>
      </div>
      <div className="netrw-listing">
        <div className="netrw-item netrw-dir">../</div>
        <div className="netrw-item netrw-dir">./</div>

        {netrwFiles.map((item) => {
          if (item.type === 'dir') {
            return (
              <div
                key={item.name}
                className="netrw-item netrw-dir clickable"
                onClick={handleDirClick}
              >
                {isSrcExpanded ? '▾ ' : '▸ '}{item.name}
              </div>
            );
          }
          return (
            <div
              key={item.name}
              className={`netrw-item netrw-file clickable${item.name === activeFile ? ' active' : ''}`}
              onClick={() => onSelectFile(item.name)}
            >
              {item.name}
            </div>
          );
        })}

        {isSrcExpanded && srcFiles.map((item) => (
          <div
            key={item.name}
            className={`netrw-item netrw-file netrw-child clickable${item.name === activeFile ? ' active' : ''}`}
            onClick={() => onSelectFile(item.name)}
          >
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FileTree;
