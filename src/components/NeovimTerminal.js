import React, { useState, useCallback, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import emailjs from 'emailjs-com';
import TitleBar from './terminal/TitleBar';
import FileTree from './terminal/FileTree';
import StatusLine from './terminal/StatusLine';
import CursorContext from './terminal/CursorContext';
import LazyLoader from './terminal/LazyLoader';
import Dashboard from './terminal/Dashboard';
import Telescope from './terminal/Telescope';
import TerminalPanel from './terminal/TerminalPanel';
import ReadmeView from './terminal/views/ReadmeView';
import AboutView from './terminal/views/AboutView';
import ExperienceView from './terminal/views/ExperienceView';
import SkillsView from './terminal/views/SkillsView';
import ProjectsView from './terminal/views/ProjectsView';
import ContactView from './terminal/views/ContactView';
import PackageJsonView from './terminal/views/PackageJsonView';
import HelpView from './terminal/views/HelpView';
import { findFile } from './terminal/files';
import TStyles from './terminal/TStyles';
import { isTheme, DEFAULT_THEME } from './terminal/themes';
import './tstyles-themes.css';
import './NeovimTerminal.css';


const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MOBILE_BREAKPOINT = 768;

// localStorage throws outright when a browser blocks site data, and the stored
// name can be stale after a theme is renamed — either way, fall back rather
// than putting an unknown value in data-theme and rendering an unstyled page.
const readStoredTheme = () => {
  try {
    const saved = localStorage.getItem('nvim-theme');
    return isTheme(saved) ? saved : DEFAULT_THEME;
  } catch {
    return DEFAULT_THEME;
  }
};

const QUIT_MESSAGES = [
  'E32: Can\'t quit vim... You\'re here forever.',
  'E37: No write since last change (use :q! to override)... just kidding.',
  'This is your life now. Welcome to Neovim.',
  'sudo rm -rf /? Nice try.',
  'Have you tried turning it off and on again?',
  'Alt+F4? We don\'t do that here.',
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
  const [isMobile, setIsMobile] = useState(() => window.innerWidth <= MOBILE_BREAKPOINT);
  const [sidebarOpen, setSidebarOpen] = useState(() => window.innerWidth > MOBILE_BREAKPOINT);
  const [expandedDirs, setExpandedDirs] = useState(['src']);
  const [vimMode, setVimMode] = useState('NORMAL');
  const [cursorLine, setCursorLine] = useState(1);
  const [commandText, setCommandText] = useState('');
  const [commandMode, setCommandMode] = useState(false);
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [tstylesOpen, setTstylesOpen] = useState(false);
  // What to fall back to if the picker is dismissed instead of confirmed.
  const themeBeforePicker = useRef(null);
  const [theme, setTheme] = useState(readStoredTheme);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState('idle');
  const [lineCount, setLineCount] = useState(0);
  const contentRef = useRef(null);
  const lastGPress = useRef(0);
  const commandTimeoutRef = useRef(null);
  const quitCounter = useRef(0);
  const formTimeoutRef = useRef(null);

  // Every form outcome schedules a reset back to 'idle'; without this the timer
  // outlives the component and fires setState on an unmounted tree.
  useEffect(() => () => clearTimeout(formTimeoutRef.current), []);

  // Apply theme to data attribute. Previews are deliberately excluded: a style
  // you arrowed past and backed out of should not outlive the session.
  useEffect(() => {
    if (tstylesOpen) return;
    try {
      localStorage.setItem('nvim-theme', theme);
    } catch {
      // Storage blocked — the theme still applies for this session.
    }
  }, [theme, tstylesOpen]);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= MOBILE_BREAKPOINT;
      setIsMobile(mobile);
      if (!mobile) {
        setSidebarOpen(true);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Views build their lines imperatively — some inside a `.map()`, some behind
  // a conditional (contact.sh grows a line while a status message shows) — so a
  // hand-kept table drifts. Count what the buffer actually rendered instead.
  useEffect(() => {
    if (appPhase !== 'editor') return undefined;
    const el = contentRef.current;
    if (!el) return undefined;

    const recount = () => {
      const n = el.querySelectorAll('.nvim-line').length;
      // Mid-transition the outgoing view has unmounted and the incoming one
      // hasn't mounted yet; keeping the previous count avoids a "0L" flash.
      if (n > 0) setLineCount(n);
    };

    recount();
    const observer = new MutationObserver(recount);
    observer.observe(el, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, [appPhase]);

  // Reset cursor when switching files
  useEffect(() => {
    setCursorLine(1);
    if (contentRef.current) {
      contentRef.current.scrollTop = 0;
    }
  }, [activeFile]);

  const showCommandEcho = useCallback((text, duration = 800) => {
    if (commandTimeoutRef.current) clearTimeout(commandTimeoutRef.current);
    setCommandText(text);
    commandTimeoutRef.current = setTimeout(() => setCommandText(''), duration);
  }, []);

  const handleSelectFile = useCallback((file) => {
    showCommandEcho(`:e ${file}`);
    setActiveFile(file);
    if (isMobile) {
      setSidebarOpen(false);
    }
  }, [showCommandEcho, isMobile]);

  const handleCommand = useCallback((input) => {
    setCommandMode(false);
    const trimmed = input.trim();
    if (!trimmed) return;

    // :e <filename>
    const eMatch = trimmed.match(/^e\s+(.+)/);
    if (eMatch) {
      const match = findFile(eMatch[1]);
      if (match) {
        showCommandEcho(`:e ${match.name}`);
        setActiveFile(match.name);
        return;
      }
      showCommandEcho(`E492: Not an editor command: e ${eMatch[1]}`, 3000);
      return;
    }

    // :q / :q! / :wq — cycle through funny messages
    if (trimmed === 'q' || trimmed === 'q!' || trimmed === 'wq') {
      const msg = QUIT_MESSAGES[quitCounter.current % QUIT_MESSAGES.length];
      quitCounter.current++;
      showCommandEcho(msg, 3000);
      return;
    }

    // :help — open help view
    if (trimmed === 'help') {
      showCommandEcho(':help');
      setActiveFile('help.txt');
      return;
    }

    // :colorscheme <name>
    // :tstyles — the TerminalStyles picker, live-previewing every style
    if (trimmed.toLowerCase() === 'tstyles') {
      showCommandEcho(':tstyles');
      themeBeforePicker.current = theme;
      setTstylesOpen(true);
      return;
    }

    const csMatch = trimmed.match(/^colorscheme\s+(.+)/);
    if (csMatch) {
      const name = csMatch[1].toLowerCase().trim();
      if (isTheme(name)) {
        setTheme(name);
        showCommandEcho(`:colorscheme ${name}`);
      } else {
        showCommandEcho(`E185: Cannot find color scheme '${csMatch[1]}'`, 3000);
      }
      return;
    }

    // :Telescope
    if (trimmed === 'Telescope' || trimmed === 'telescope') {
      showCommandEcho(':Telescope');
      setTelescopeOpen(true);
      return;
    }

    // :terminal / :term
    if (trimmed === 'terminal' || trimmed === 'term') {
      showCommandEcho(`:${trimmed}`);
      setTerminalOpen(true);
      return;
    }

    // :version
    if (trimmed === 'version') {
      showCommandEcho('NVIM v0.10.0 — Felipe Portfolio Edition', 3000);
      return;
    }

    // Unknown command
    showCommandEcho(`E492: Not an editor command: ${trimmed}`, 3000);
  }, [showCommandEcho, theme]);

  const openTstyles = useCallback(() => {
    themeBeforePicker.current = theme;
    setTstylesOpen(true);
  }, [theme]);

  const handleTstylesPreview = useCallback((id) => setTheme(id), []);

  const handleTstylesCommit = useCallback((id) => {
    themeBeforePicker.current = null;
    setTheme(id);
    setTstylesOpen(false);
    showCommandEcho(`:colorscheme ${id}`);
  }, [showCommandEcho]);

  const handleTstylesCancel = useCallback(() => {
    const previous = themeBeforePicker.current;
    themeBeforePicker.current = null;
    if (previous) setTheme(previous);
    setTstylesOpen(false);
  }, []);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Ctrl+P opens telescope from any phase (except loading)
      if (e.ctrlKey && e.key === 'p' && appPhase !== 'loading') {
        e.preventDefault();
        setTelescopeOpen(true);
        return;
      }

      // Ctrl+` toggles terminal panel
      if (e.ctrlKey && e.key === '`' && appPhase === 'editor') {
        e.preventDefault();
        setTerminalOpen((prev) => !prev);
        return;
      }

      // Don't handle editor shortcuts unless in editor phase
      if (appPhase !== 'editor') return;
      // Don't intercept when telescope is open
      if (telescopeOpen) return;
      // Don't intercept while the style picker has the keyboard
      if (tstylesOpen) return;
      // Don't intercept when terminal panel is focused
      if (terminalOpen) return;
      // Don't intercept when in INSERT mode (contact form)
      if (vimMode === 'INSERT') return;
      // Don't intercept when command mode is active (handled by StatusLine input)
      if (commandMode) return;

      const maxLine = Math.max(lineCount, 1);

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
  }, [vimMode, commandMode, appPhase, telescopeOpen, terminalOpen, tstylesOpen, lineCount]);

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

    const resetLater = (delay) => {
      clearTimeout(formTimeoutRef.current);
      formTimeoutRef.current = setTimeout(() => setFormStatus('idle'), delay);
    };

    if (!EMAIL_PATTERN.test(contactForm.email)) {
      setFormStatus('invalid-email');
      resetLater(4000);
      return;
    }

    setFormStatus('sending');

    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const userID = process.env.REACT_APP_EMAILJS_USER_ID;

    // Without credentials the send would fire at placeholder IDs and fail with
    // a generic error, so surface the real problem and offer a mailto instead.
    if (!serviceID || !templateID || !userID) {
      console.error(
        'EmailJS is not configured. Set REACT_APP_EMAILJS_SERVICE_ID, ' +
        'REACT_APP_EMAILJS_TEMPLATE_ID and REACT_APP_EMAILJS_USER_ID ' +
        '(see .env.example) and rebuild.'
      );
      setFormStatus('unconfigured');
      resetLater(6000);
      return;
    }

    const templateParams = {
      from_name: contactForm.name,
      from_email: contactForm.email,
      subject: contactForm.subject || 'No subject',
      message: contactForm.message,
      to_name: 'Felipe Cremerius',
    };

    emailjs.send(serviceID, templateID, templateParams, userID)
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        setFormStatus('sent');
        setContactForm({ name: '', email: '', subject: '', message: '' });
        resetLater(4000);
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        setFormStatus('error');
        resetLater(4000);
      });
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

  const handleTerminalClose = useCallback(() => {
    setTerminalOpen(false);
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
        return <ProjectsView onRunTstyles={openTstyles} />;
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
      case 'help.txt':
        return <HelpView />;
      default:
        return <ReadmeView {...props} />;
    }
  };

  return (
    <div className="nvim-bg-wrapper" data-theme={theme}>
      <div
        className="nvim-bg-gif"
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/residentevil.webp)` }}
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
              className={`sidebar-overlay${sidebarOpen && isMobile ? ' visible' : ''}`}
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

          {terminalOpen && (
            <TerminalPanel onClose={handleTerminalClose} theme={theme} />
          )}

          <StatusLine
            vimMode={vimMode}
            activeFile={activeFile}
            commandText={commandText}
            commandMode={commandMode}
            onCommand={handleCommand}
            onCommandCancel={() => setCommandMode(false)}
            cursorLine={cursorLine}
            lineCount={lineCount}
            contentRef={contentRef}
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

      {tstylesOpen && (
        <TStyles
          startedOn={theme}
          onPreview={handleTstylesPreview}
          onCommit={handleTstylesCommit}
          onCancel={handleTstylesCancel}
        />
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
