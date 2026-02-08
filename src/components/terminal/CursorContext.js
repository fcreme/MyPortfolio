import { createContext, useContext } from 'react';

const CursorContext = createContext({ cursorLine: 1 });

export const useCursor = () => useContext(CursorContext);

export default CursorContext;
