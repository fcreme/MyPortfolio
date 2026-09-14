import React from 'react';
import NeovimTerminal from './components/NeovimTerminal';
import ErrorBoundary from './components/ErrorBoundary';
import './App.css';

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <NeovimTerminal />
      </ErrorBoundary>
    </div>
  );
}

export default App;
