import React from 'react';
import { rootFiles, srcFiles } from './files';

const FileTree = ({ activeFile, expandedDirs, onToggleDir, onSelectFile, sidebarOpen }) => {
  const isSrcExpanded = expandedDirs.includes('src');

  const handleDirClick = () => {
    onToggleDir('src');
  };

  // Enter and Space are what a focused role="button" is expected to answer to.
  const activateOnKey = (fn) => (e) => {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    e.preventDefault();
    fn();
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

        <div
          className="netrw-item netrw-dir clickable"
          onClick={handleDirClick}
          onKeyDown={activateOnKey(handleDirClick)}
          role="button"
          tabIndex={0}
          aria-expanded={isSrcExpanded}
        >
          {isSrcExpanded ? '▾ ' : '▸ '}src/
        </div>

        {rootFiles.map((item) => (
          <div
            key={item.name}
            className={`netrw-item netrw-file clickable${item.name === activeFile ? ' active' : ''}`}
            onClick={() => onSelectFile(item.name)}
            onKeyDown={activateOnKey(() => onSelectFile(item.name))}
            role="button"
            tabIndex={0}
            aria-current={item.name === activeFile ? 'true' : undefined}
          >
            {item.name}
          </div>
        ))}

        {isSrcExpanded && srcFiles.map((item) => (
          <div
            key={item.name}
            className={`netrw-item netrw-file netrw-child clickable${item.name === activeFile ? ' active' : ''}`}
            onClick={() => onSelectFile(item.name)}
            onKeyDown={activateOnKey(() => onSelectFile(item.name))}
            role="button"
            tabIndex={0}
            aria-current={item.name === activeFile ? 'true' : undefined}
          >
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FileTree;
