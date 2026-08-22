import React from 'react';
import { rootFiles, srcFiles } from './files';

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

        <div className="netrw-item netrw-dir clickable" onClick={handleDirClick}>
          {isSrcExpanded ? '▾ ' : '▸ '}src/
        </div>

        {rootFiles.map((item) => (
          <div
            key={item.name}
            className={`netrw-item netrw-file clickable${item.name === activeFile ? ' active' : ''}`}
            onClick={() => onSelectFile(item.name)}
          >
            {item.name}
          </div>
        ))}

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
