import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './NotFound.css';

const NotFound = () => {
  const navigate = useNavigate();
  const [command, setCommand] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="notfound-container">
      <div className="notfound-terminal">
        <div className="terminal-header">
          <div className="terminal-buttons">
            <span className="btn-close"></span>
            <span className="btn-minimize"></span>
            <span className="btn-maximize"></span>
          </div>
          <div className="terminal-title">nvim — 404.txt</div>
        </div>

        <div className="terminal-body">
          <motion.div
            className="error-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <pre className="ascii-art">
{`
 _  _    ___  _  _
| || |  / _ \\| || |
| || |_| | | | || |_
|__   _| | | |__   _|
   | | | |_| |  | |
   |_|  \\___/   |_|
`}
            </pre>

            <motion.div
              className="error-message"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <p className="error-line">
                <span className="error-type">E404:</span>
                <span className="error-text"> Page not found</span>
              </p>
              <p className="error-line">
                <span className="error-prefix">~</span>
              </p>
              <p className="error-line">
                <span className="error-comment">-- The requested path does not exist --</span>
              </p>
              <p className="error-line">
                <span className="error-prefix">~</span>
              </p>
            </motion.div>

            <motion.div
              className="command-section"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <p className="command-line">
                <span className="prompt">:</span>
                <span className="command-text">Available commands:</span>
              </p>
              <p className="command-line">
                <span className="key-hint">:q</span>
                <span className="command-desc"> - Return to homepage</span>
              </p>
              <p className="command-line">
                <span className="key-hint">:help</span>
                <span className="command-desc"> - View navigation help</span>
              </p>
            </motion.div>

            <motion.div
              className="navigation-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <button onClick={handleGoHome} className="vim-button">
                <span className="button-prefix">:</span>
                <span>q </span>
                <span className="button-desc">Return Home</span>
              </button>
            </motion.div>

            <motion.div
              className="status-line"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <div className="status-left">
                <span className="status-mode">NORMAL</span>
                <span className="status-file">404.txt</span>
                <span className="status-modified">[Error]</span>
              </div>
              <div className="status-right">
                <span>utf-8</span>
                <span>1/1</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
