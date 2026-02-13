import React, { useState, useCallback, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TitleBar from './terminal/TitleBar';
import FileTree from './terminal/FileTree';
import StatusLine from './terminal/StatusLine';
import CursorContext from './terminal/CursorContext';
import LazyLoader from './terminal/LazyLoader';
import Dashboard from './terminal/Dashboard';
import Telescope from './terminal/Telescope';
import ReadmeView from './terminal/views/ReadmeView';
import AboutView from './terminal/views/AboutView';
import ExperienceView from './terminal/views/ExperienceView';
import SkillsView from './terminal/views/SkillsView';
import ProjectsView from './terminal/views/ProjectsView';
import ContactView from './terminal/views/ContactView';
import PackageJsonView from './terminal/views/PackageJsonView';
import DitherDemoView from './terminal/views/DitherDemoView';
import './NeovimTerminal.css';

const lineCountMap = {
  'README.md': 32,
  'about.md': 35,
  'experience.md': 30,
  'skills.tsx': 65,
  'projects.tsx': 24,
  'contact.sh': 22,
  'package.json': 24,
  'dither-demo.jsx': 45,
};

const allFiles = [
  'README.md', 'about.md', 'experience.md',
  'skills.tsx', 'projects.tsx', 'contact.sh', 'package.json', 'dither-demo.jsx',
];

const TildeFiller = () => {
  const containerRef = useRef(null);
  const [tildeCount, setTildeCount] = useState(20);

  useEffect(() => {
    const update = () => {
      if (containerRef.current) {
        const parent = containerRef.current.parentElement;
        if (parent) {
          const contentHeight = parent.scrollHeight - containerRef.current.offsetHeight;
          const viewHeight = parent.clientHeight;
          const remaining = Math.max(0, viewHeight - contentHeight);
          const lines = Math.floor(remaining / 22);
          setTildeCount(lines);
        }
      }
    };
    update();
    const timer = setTimeout(update, 100);
    window.addEventListener('resize', update);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', update);
    };
  }, []);

  if (tildeCount <= 0) return null;

  return (
    <div ref={containerRef} className="tilde-filler">
      {Array.from({ length: tildeCount }, (_, i) => (
        <div key={i} className="tilde-line">~</div>
      ))}
    </div>
  );
};

const NeovimTerminal = () => {
  const [appPhase, setAppPhase] = useState('loading');
  const [telescopeOpen, setTelescopeOpen] = useState(false);
  const [activeFile, setActiveFile] = useState('README.md');
  const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth > 768);
  const [expandedDirs, setExpandedDirs] = useState(['src']);
  const [vimMode, setVimMode] = useState('NORMAL');
  const [cursorLine, setCursorLine] = useState(1);
  const [commandText, setCommandText] = useState('');
  const [commandMode, setCommandMode] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState('idle');
  const contentRef = useRef(null);
  const lastGPress = useRef(0);
  const commandTimeoutRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setSidebarOpen(true);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Reset cursor when switching files
  useEffect(() => {
    setCursorLine(1);
    if (contentRef.current) {
      contentRef.current.scrollTop = 0;
    }
  }, [activeFile]);

  const showCommandEcho = useCallback((text) => {
    if (commandTimeoutRef.current) clearTimeout(commandTimeoutRef.current);
    setCommandText(text);
    commandTimeoutRef.current = setTimeout(() => setCommandText(''), 800);
  }, []);

  const handleSelectFile = useCallback((file) => {
    showCommandEcho(`:e ${file}`);
    setActiveFile(file);
    if (window.innerWidth <= 768) {
      setSidebarOpen(false);
    }
  }, [showCommandEcho]);

  const handleCommand = useCallback((input) => {
    setCommandMode(false);
    const trimmed = input.trim();
    if (!trimmed) return;

    // :e <filename>
    const eMatch = trimmed.match(/^e\s+(.+)/);
    if (eMatch) {
      const query = eMatch[1].toLowerCase();
      const match = allFiles.find((f) => f.toLowerCase().includes(query));
      if (match) {
        showCommandEcho(`:e ${match}`);
        setActiveFile(match);
        return;
      }
    }

    // :q — do nothing visible, just show the command
    if (trimmed === 'q' || trimmed === 'q!' || trimmed === 'wq') {
      showCommandEcho(`:${trimmed}`);
      return;
    }

    showCommandEcho(`:${trimmed}`);
  }, [showCommandEcho]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Ctrl+P opens telescope from any phase (except loading)
      if (e.ctrlKey && e.key === 'p' && appPhase !== 'loading') {
        e.preventDefault();
        setTelescopeOpen(true);
        return;
      }

      // Don't handle editor shortcuts unless in editor phase
      if (appPhase !== 'editor') return;
      // Don't intercept when telescope is open
      if (telescopeOpen) return;
      // Don't intercept when in INSERT mode (contact form)
      if (vimMode === 'INSERT') return;
      // Don't intercept when command mode is active (handled by StatusLine input)
      if (commandMode) return;

      const maxLine = lineCountMap[activeFile] || 30;

      switch (e.key) {
        case 'j': {
          e.preventDefault();
          setCursorLine((prev) => Math.min(prev + 1, maxLine));
          if (contentRef.current) {
            contentRef.current.scrollBy({ top: 22, behavior: 'auto' });
          }
          break;
        }
        case 'k': {
          e.preventDefault();
          setCursorLine((prev) => Math.max(prev - 1, 1));
          if (contentRef.current) {
            contentRef.current.scrollBy({ top: -22, behavior: 'auto' });
          }
          break;
        }
        case 'G': {
          e.preventDefault();
          setCursorLine(maxLine);
          if (contentRef.current) {
            contentRef.current.scrollTo({ top: contentRef.current.scrollHeight, behavior: 'smooth' });
          }
          break;
        }
        case 'g': {
          e.preventDefault();
          const now = Date.now();
          if (now - lastGPress.current < 500) {
            setCursorLine(1);
            if (contentRef.current) {
              contentRef.current.scrollTo({ top: 0, behavior: 'smooth' });
            }
            lastGPress.current = 0;
          } else {
            lastGPress.current = now;
          }
          break;
        }
        case ':': {
          e.preventDefault();
          setCommandMode(true);
          break;
        }
        default:
          break;
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [vimMode, commandMode, activeFile, appPhase, telescopeOpen]);

  const handleToggleDir = useCallback((dir) => {
    setExpandedDirs((prev) =>
      prev.includes(dir) ? prev.filter((d) => d !== dir) : [...prev, dir]
    );
  }, []);

  const handleFormChange = useCallback((e) => {
    const { name, value } = e.target;
    setContactForm((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleFormFocus = useCallback(() => {
    setVimMode('INSERT');
  }, []);

  const handleFormBlur = useCallback(() => {
    setVimMode('NORMAL');
  }, []);

  const handleFormSubmit = useCallback(() => {
    if (!contactForm.name || !contactForm.email || !contactForm.message) return;
    setFormStatus('sending');
    setTimeout(() => {
      setFormStatus('sent');
      setContactForm({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setFormStatus('idle'), 4000);
    }, 1500);
  }, [contactForm]);

  const handleLoadingComplete = useCallback(() => {
    setAppPhase('dashboard');
  }, []);

  const handleDashboardSelect = useCallback((file) => {
    setActiveFile(file);
    setAppPhase('editor');
  }, []);

  const handleTelescopeSelect = useCallback((file) => {
    showCommandEcho(`:e ${file}`);
    setActiveFile(file);
    setTelescopeOpen(false);
    if (appPhase === 'dashboard') {
      setAppPhase('editor');
    }
  }, [showCommandEcho, appPhase]);

  const handleTelescopeClose = useCallback(() => {
    setTelescopeOpen(false);
  }, []);

  const cursorValue = useMemo(() => ({ cursorLine }), [cursorLine]);

  const renderView = () => {
    const props = { onNavigate: handleSelectFile };

    switch (activeFile) {
      case 'README.md':
        return <ReadmeView {...props} />;
      case 'about.md':
        return <AboutView />;
      case 'experience.md':
        return <ExperienceView />;
      case 'skills.tsx':
        return <SkillsView />;
      case 'projects.tsx':
        return <ProjectsView />;
      case 'contact.sh':
        return (
          <ContactView
            contactForm={contactForm}
            onFormChange={handleFormChange}
            onSubmit={handleFormSubmit}
            onFocus={handleFormFocus}
            onBlur={handleFormBlur}
            formStatus={formStatus}
          />
        );
      case 'package.json':
        return <PackageJsonView />;
      case 'dither-demo.jsx':
        return <DitherDemoView />;
      default:
        return <ReadmeView {...props} />;
    }
  };

  return (
    <div className="nvim-bg-wrapper">
      <div
        className="nvim-bg-gif"
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/residentevil.gif)` }}
      />

      {appPhase === 'loading' && (
        <LazyLoader onComplete={handleLoadingComplete} />
      )}

      {appPhase === 'dashboard' && (
        <Dashboard onSelectFile={handleDashboardSelect} />
      )}

      {appPhase === 'editor' && (
        <div className="nvim-terminal">
          <TitleBar />
          <div className="nvim-editor-area">
            <div
              className={`sidebar-overlay${sidebarOpen && window.innerWidth <= 768 ? ' visible' : ''}`}
              onClick={() => setSidebarOpen(false)}
            />
            <FileTree
              activeFile={activeFile}
              expandedDirs={expandedDirs}
              onToggleDir={handleToggleDir}
              onSelectFile={handleSelectFile}
              sidebarOpen={sidebarOpen}
            />
            <CursorContext.Provider value={cursorValue}>
              <div className="nvim-content-pane" ref={contentRef}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeFile}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    {renderView()}
                  </motion.div>
                </AnimatePresence>
                <TildeFiller key={`tilde-${activeFile}`} />
              </div>
            </CursorContext.Provider>
          </div>
          <StatusLine
            vimMode={vimMode}
            activeFile={activeFile}
            commandText={commandText}
            commandMode={commandMode}
            onCommand={handleCommand}
            onCommandCancel={() => setCommandMode(false)}
          />

          <button
            className="mobile-sidebar-toggle"
            onClick={() => setSidebarOpen((prev) => !prev)}
            aria-label="Toggle sidebar"
          >
            {sidebarOpen ? '✕' : '☰'}
          </button>
        </div>
      )}

      {telescopeOpen && (
        <Telescope
          onSelect={handleTelescopeSelect}
          onClose={handleTelescopeClose}
        />
      )}
    </div>
  );
};

export default NeovimTerminal;
