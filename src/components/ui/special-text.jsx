import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";
import { usePrefersReducedMotion } from "../../lib/usePrefersReducedMotion";

const RANDOM_CHARS = "_!X$0-+*#";

function getRandomChar(prevChar) {
  let char;
  do {
    char = RANDOM_CHARS[Math.floor(Math.random() * RANDOM_CHARS.length)];
  } while (char === prevChar);
  return char;
}

/**
 * The characters that give a line somewhere to break: whitespace, and the
 * hyphen and slash a break is allowed after. Every frame has to leave them at
 * the indices the finished text puts them — scramble them, or replace them with
 * the non-breaking filler below, and the line re-wraps mid-animation. A long
 * string then gains a row and shoves the rest of the buffer down.
 *
 * Measured across 240-1500px in 2px steps: with these preserved, every frame
 * occupies exactly the rows the finished text does.
 */
const BREAKABLE = /[\s\-/]/;

/** Blank filler that still takes up a character's width. */
const FILLER = "\u00A0";

/** Same footprint as `text`, drawn blank. */
const blankLike = (text) => text.replace(/[^\s\-/]/g, FILLER);

export function SpecialText({
  children,
  speed = 20,
  delay = 0,
  className = "",
  inView = false,
  once = true,
  onComplete,
}) {
  const containerRef = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const isInView = useInView(containerRef, { once, margin: "-100px" });
  const shouldAnimate = inView ? isInView : true;
  const [hasStarted, setHasStarted] = useState(() => !inView && delay <= 0);
  const text = typeof children === "string" ? children : String(children ?? "");
  const [displayText, setDisplayText] = useState(() => blankLike(text));
  const [currentPhase, setCurrentPhase] = useState("phase1");
  const [animationStep, setAnimationStep] = useState(0);
  const intervalRef = useRef(null);
  const startTimeoutRef = useRef(null);
  const onCompleteRef = useRef(null);
  onCompleteRef.current = onComplete;

  function clearStartTimeout() {
    if (startTimeoutRef.current === null) return;
    window.clearTimeout(startTimeoutRef.current);
    startTimeoutRef.current = null;
  }

  function startAnimation() {
    setHasStarted(true);
    setDisplayText(blankLike(text));
    setCurrentPhase("phase1");
    setAnimationStep(0);
  }

  const runPhase1 = () => {
    const maxSteps = text.length;
    const currentLength = Math.min((animationStep + 1) * 2, text.length);

    const chars = [];
    for (let i = 0; i < currentLength; i++) {
      const prevChar = i > 0 ? chars[i - 1] : undefined;
      chars.push(BREAKABLE.test(text[i]) ? text[i] : getRandomChar(prevChar));
    }

    for (let i = currentLength; i < text.length; i++) {
      chars.push(BREAKABLE.test(text[i]) ? text[i] : FILLER);
    }

    setDisplayText(chars.join(""));

    if (animationStep < maxSteps - 1) {
      setAnimationStep((prev) => prev + 1);
    } else {
      setCurrentPhase("phase2");
      setAnimationStep(0);
    }
  };

  const runPhase2 = () => {
    const revealedCount = animationStep;
    const chars = [];

    for (let i = 0; i < text.length; i++) {
      if (i < revealedCount) {
        chars.push(text[i]);
      } else {
        chars.push(BREAKABLE.test(text[i]) ? text[i] : getRandomChar());
      }
    }

    setDisplayText(chars.join(""));

    if (animationStep < text.length - 1) {
      setAnimationStep((prev) => prev + 1);
    } else {
      setDisplayText(text);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      if (onCompleteRef.current) onCompleteRef.current();
    }
  };

  useEffect(() => {
    if (!prefersReducedMotion) return;
    clearStartTimeout();
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setHasStarted(true);
    setDisplayText(text);
    if (onCompleteRef.current) onCompleteRef.current();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prefersReducedMotion, text]);

  useEffect(() => {
    if (prefersReducedMotion) return;
    if (shouldAnimate && !hasStarted) {
      clearStartTimeout();
      if (delay <= 0) {
        startAnimation();
        return;
      }
      startTimeoutRef.current = window.setTimeout(() => {
        startTimeoutRef.current = null;
        startAnimation();
      }, delay * 1000);
    }
    return () => clearStartTimeout();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shouldAnimate, hasStarted, delay, text.length, prefersReducedMotion]);

  useEffect(() => {
    if (!hasStarted || prefersReducedMotion) {
      return;
    }

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      if (currentPhase === "phase1") {
        runPhase1();
      } else {
        runPhase2();
      }
    }, speed);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPhase, animationStep, text, speed, hasStarted, prefersReducedMotion]);

  useEffect(() => {
    if (hasStarted && !prefersReducedMotion) {
      setDisplayText(blankLike(text));
      setCurrentPhase("phase1");
      setAnimationStep(0);
    }

    return () => {
      clearStartTimeout();
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, hasStarted, prefersReducedMotion]);

  return (
    <span
      ref={containerRef}
      className={className}
      style={hasStarted ? undefined : { visibility: 'hidden' }}
    >
      {displayText}
    </span>
  );
}
