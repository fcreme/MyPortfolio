import React from 'react';

const TitleBar = () => {
  return (
    <div className="nvim-titlebar">
      <div className="titlebar-dots">
        <span className="titlebar-dot red" />
        <span className="titlebar-dot yellow" />
        <span className="titlebar-dot green" />
      </div>
      <span className="titlebar-text">
        felipe@portfolio:~/felipe-portfolio — nvim .
      </span>
      <div style={{ width: 52 }} />
    </div>
  );
};

export default TitleBar;
