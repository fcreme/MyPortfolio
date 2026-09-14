import { useEffect } from 'react';

// True when a text field owns the keyboard. Global shortcut handlers have to
// bail on these or they swallow the characters someone is trying to type.
export const isTypingTarget = (target) =>
  !!target &&
  (target.tagName === 'INPUT' ||
    target.tagName === 'TEXTAREA' ||
    target.isContentEditable);

// A window-level keydown that goes quiet unless this layer owns the keyboard.
// Overlays stack, and nothing arbitrates between the listeners underneath them,
// so without an explicit owner the dashboard and the style picker keep claiming
// the same bare letters the overlay on top is trying to read.
// allowTyping is for a foreground overlay that owns the keyboard outright: the
// style picker floats over a still-clickable buffer, so a focused field behind it
// must not be able to swallow its Escape.
export const useGlobalKeys = (handler, enabled = true, allowTyping = false) => {
  useEffect(() => {
    if (!enabled) return undefined;
    const onKeyDown = (e) => {
      if (!allowTyping && isTypingTarget(e.target)) return;
      handler(e);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [handler, enabled, allowTyping]);
};
