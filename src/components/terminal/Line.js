import React from 'react';
import { useCursor } from './CursorContext';

const Line = ({ n, children }) => {
  const { cursorLine } = useCursor();
  const isCursor = n === cursorLine;
  const display = isCursor ? n : Math.abs(n - cursorLine);

  return (
    <div className={`nvim-line${isCursor ? ' cursor-line' : ''}`}>
      <span className={`line-number${isCursor ? ' line-number-current' : ''}`}>
        {display}
      </span>
      <span className="line-content">{children}</span>
    </div>
  );
};

const Empty = ({ n }) => {
  const { cursorLine } = useCursor();
  const isCursor = n === cursorLine;
  const display = isCursor ? n : Math.abs(n - cursorLine);

  return (
    <div className={`nvim-line empty${isCursor ? ' cursor-line' : ''}`}>
      <span className={`line-number${isCursor ? ' line-number-current' : ''}`}>
        {display}
      </span>
      <span className="line-content"> </span>
    </div>
  );
};

export { Line, Empty };
