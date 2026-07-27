import { useState, useEffect, useRef } from 'react';
import { colors, radius, transitions } from '../design/tokens';

const DESMOS_SRC = 'https://www.desmos.com/api/v1.11/calculator.js?apiKey=dcb31709b452b1cf9dc26972add0fda6';

// Module-level singleton loader. The Desmos <script> is fetched AT MOST ONCE
// per page regardless of how many calculators mount or how fast the student
// toggles graphing/scientific on a slow connection. Previously the init effect
// appended a fresh <script> on every run while window.Desmos was still
// undefined, leaving two pending tags with two stale onload closures that each
// built a calculator into the same container (the first never destroyed).
// One shared promise fixes that: concurrent callers await the same load, and
// the onload/onerror handlers live here (not in the effect), so there is no
// per-effect closure to leak. On failure the tag AND the cached promise are
// dropped so a later Retry re-fetches from scratch.
let desmosScriptPromise = null;
const loadDesmosScript = () => {
  if (typeof window !== 'undefined' && window.Desmos) return Promise.resolve();
  if (desmosScriptPromise) return desmosScriptPromise;
  desmosScriptPromise = new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = DESMOS_SRC;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => {
      script.remove();
      desmosScriptPromise = null; // let the next call (Retry) start clean
      reject(new Error('desmos-script-load-failed'));
    };
    document.head.appendChild(script);
  });
  return desmosScriptPromise;
};

// SAT-Style Draggable Desmos Calculator
//
// Extracted from PracticeTest.jsx (2026-06-18) so BOTH the full practice test
// AND the App-driven practice-bank / study-plan drill shells can render it.
// Previously this lived inline in PracticeTest, so clicking "Calculator" in a
// drill (AssignedPracticeShell / AdaptivePracticeShell) toggled App state and
// lit the button but rendered no calculator — the bug this extraction fixes.
//
// Loads the Desmos script lazily on first open. Returns null when closed.
const DesmosCalculator = ({ isOpen, onClose }) => {
  const containerRef = useRef(null);
  const calculatorRef = useRef(null);
  const [position, setPosition] = useState({ x: 50, y: 80 });
  const [isDragging, setIsDragging] = useState(false);
  const [calcMode, setCalcMode] = useState('graphing'); // 'graphing' or 'scientific'
  const [isMinimized, setIsMinimized] = useState(false);
  // True after the Desmos script fails to load; Retry flips it back to false,
  // which re-runs the init effect and re-attempts the load.
  const [scriptError, setScriptError] = useState(false);
  // Bluebook parity: closing the calculator HIDES it — it does not destroy the
  // student's expressions. The instance is created on first open and lives
  // until this component unmounts (module change / leaving the test). Tracked
  // as "ever opened" so the init effect is keyed to first-open, not to every
  // open/close toggle (which used to destroy on close).
  const [everOpened, setEverOpened] = useState(false);
  useEffect(() => { if (isOpen) setEverOpened(true); }, [isOpen]);

  const CALC_WIDTH = 560;
  const CALC_HEIGHT = 500;
  const CALC_MOBILE_HEIGHT = '70vh';

  const isMobileCalc = typeof window !== 'undefined' && window.innerWidth < 768;

  // Drag handlers — use ref for offset so the effect only re-subscribes on isDragging change
  const dragOffsetRef = useRef({ x: 0, y: 0 });

  const handleDragStart = (e) => {
    if (e.target.tagName === 'BUTTON') return;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    dragOffsetRef.current = {
      x: clientX - position.x,
      y: clientY - position.y
    };
    setIsDragging(true);
  };

  useEffect(() => {
    if (!isDragging) return;

    const getClientPos = (e) => {
      if (e.touches) return { x: e.touches[0].clientX, y: e.touches[0].clientY };
      return { x: e.clientX, y: e.clientY };
    };

    const handleMove = (e) => {
      const pos = getClientPos(e);
      setPosition({
        x: Math.max(0, Math.min(window.innerWidth - CALC_WIDTH, pos.x - dragOffsetRef.current.x)),
        y: Math.max(0, Math.min(window.innerHeight - 50, pos.y - dragOffsetRef.current.y))
      });
    };

    const handleEnd = () => setIsDragging(false);

    document.addEventListener('mousemove', handleMove);
    document.addEventListener('mouseup', handleEnd);
    document.addEventListener('touchmove', handleMove, { passive: true });
    document.addEventListener('touchend', handleEnd);

    return () => {
      document.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseup', handleEnd);
      document.removeEventListener('touchmove', handleMove);
      document.removeEventListener('touchend', handleEnd);
    };
  }, [isDragging]);

  // Initialize/switch calculator. isMinimized is deliberately NOT a dep and
  // the container stays mounted (display:none) while minimized — minimizing
  // used to unmount the container AND run this effect's destroy() cleanup,
  // wiping the student's graphs/expressions on every minimize.
  useEffect(() => {
    if (!(everOpened && containerRef.current && !scriptError)) return undefined;

    // Effect-scoped guard: a mode switch (or unmount) mid-load must not let a
    // late script resolve build a calculator into a container the effect has
    // already torn down.
    let cancelled = false;

    // Destroy existing calculator if switching modes
    if (calculatorRef.current) {
      calculatorRef.current.destroy();
      calculatorRef.current = null;
    }

    const initCalculator = () => {
      if (cancelled || !containerRef.current) return;

      const options = {
        keypad: true,
        expressions: true,
        settingsMenu: true,
        zoomButtons: true,
        expressionsTopbar: true,
        pointsOfInterest: true,
        trace: true,
        border: false,
        lockViewport: false,
        notes: true,
        sliders: true,
        links: false,
        images: false,
        folders: true,
        actions: true,
        advancedStyling: true,
        autosize: true,
      };

      if (calcMode === 'scientific') {
        calculatorRef.current = window.Desmos.ScientificCalculator(containerRef.current, options);
      } else {
        calculatorRef.current = window.Desmos.GraphingCalculator(containerRef.current, options);
      }
    };

    // Single shared load (see loadDesmosScript). The cancelled guard makes the
    // resolve/reject inert once this effect run is superseded.
    loadDesmosScript()
      .then(() => { if (!cancelled) initCalculator(); })
      .catch(() => {
        // Offline/blocked CDN: surface a retryable error instead of a
        // permanent white panel.
        if (!cancelled) setScriptError(true);
      });

    return () => {
      cancelled = true;
      if (calculatorRef.current) {
        calculatorRef.current.destroy();
        calculatorRef.current = null;
      }
    };
  }, [everOpened, calcMode, scriptError]);

  // Un-minimizing or reopening restores the container's real size; nudge
  // Desmos to re-measure (autosize covers live resizes, but a display:none →
  // visible flip doesn't reliably emit one).
  useEffect(() => {
    if (isOpen && !isMinimized && calculatorRef.current && typeof calculatorRef.current.resize === 'function') {
      calculatorRef.current.resize();
    }
  }, [isMinimized, isOpen]);

  const handleRetryScriptLoad = () => setScriptError(false);

  // Never opened: nothing to render or preserve. After first open the panel
  // stays mounted and is hidden via display so the Desmos instance (and the
  // student's work) survives close/reopen within the module.
  if (!everOpened) return null;

  const modeButtonStyle = (active) => ({
    padding: '4px 12px',
    fontSize: '12px',
    fontWeight: '600',
    border: 'none',
    borderRadius: radius.sm,
    cursor: 'pointer',
    background: active ? colors.semantic.info : colors.surface.grayDark,
    color: active ? colors.surface.white : colors.text.secondary,
    transition: `all ${transitions.fast}`
  });

  const iconButtonStyle = {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: radius.sm,
    color: colors.text.secondary
  };

  return (
    <>
    {/* Backdrop overlay for mobile */}
    {isMobileCalc && isOpen && (
      <div
        onClick={onClose}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: colors.overlay,
          zIndex: 999,
        }}
      />
    )}
    <div
      style={isMobileCalc ? {
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        width: '100%',
        height: isMinimized ? 'auto' : CALC_MOBILE_HEIGHT,
        zIndex: 1000,
        background: colors.surface.white,
        borderRadius: `${radius.lg} ${radius.lg} 0 0`,
        overflow: 'hidden',
        boxShadow: '0 -10px 40px -10px rgba(0, 0, 0, 0.3)',
        display: isOpen ? 'flex' : 'none',
        flexDirection: 'column',
        userSelect: 'none'
      } : {
        position: 'fixed',
        left: position.x,
        top: position.y,
        width: CALC_WIDTH,
        height: isMinimized ? 'auto' : CALC_HEIGHT,
        zIndex: 1000,
        background: colors.surface.white,
        borderRadius: radius.sm,
        overflow: 'hidden',
        boxShadow: '0 10px 40px -10px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(0, 0, 0, 0.1)',
        display: isOpen ? 'flex' : 'none',
        flexDirection: 'column',
        userSelect: 'none'
      }}
    >
      {/* Calculator Header - Draggable on desktop only */}
      <div
        onMouseDown={isMobileCalc ? undefined : handleDragStart}
        onTouchStart={isMobileCalc ? undefined : handleDragStart}
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '8px 12px',
          borderBottom: isMinimized ? 'none' : `1px solid ${colors.surface.grayDark}`,
          background: colors.surface.dark,
          cursor: isMobileCalc ? 'default' : (isDragging ? 'grabbing' : 'grab')
        }}
      >
        {/* Mode Toggle Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <button
            onClick={() => setCalcMode('graphing')}
            style={modeButtonStyle(calcMode === 'graphing')}
          >
            Graphing
          </button>
          <button
            onClick={() => setCalcMode('scientific')}
            style={modeButtonStyle(calcMode === 'scientific')}
          >
            Scientific
          </button>
        </div>

        {/* Title */}
        <span style={{
          fontWeight: '600',
          color: colors.text.inverse,
          fontSize: '13px',
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)'
        }}>
          {calcMode === 'graphing' ? 'Graphing' : 'Scientific'} Calculator
        </span>

        {/* Control Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          {/* Minimize Button */}
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            style={{ ...iconButtonStyle, color: colors.text.inverse }}
            title={isMinimized ? 'Expand' : 'Minimize'}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {isMinimized ? (
                <polyline points="15 3 21 3 21 9" />
              ) : (
                <line x1="5" y1="12" x2="19" y2="12" />
              )}
            </svg>
          </button>
          {/* Close Button */}
          <button
            onClick={onClose}
            style={{ ...iconButtonStyle, color: colors.text.inverse }}
            title="Close Calculator"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
      </div>

      {/* Script-load failure state (retryable) */}
      {scriptError && !isMinimized && (
        <div style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '12px',
          padding: '24px',
          textAlign: 'center'
        }}>
          <span style={{ fontSize: '13px', color: colors.text.secondary }}>
            The calculator failed to load. Check your connection and try again.
          </span>
          <button onClick={handleRetryScriptLoad} style={modeButtonStyle(true)}>
            Retry
          </button>
        </div>
      )}

      {/* Calculator Container — stays MOUNTED while minimized (hidden via
          display) so the Desmos instance, and the student's work, survive
          minimize/expand. */}
      <div
        ref={containerRef}
        style={{
          flex: 1,
          width: '100%',
          minHeight: isMobileCalc ? 'auto' : CALC_HEIGHT - 50,
          display: (isMinimized || scriptError) ? 'none' : undefined
        }}
      />
    </div>
    </>
  );
};

export default DesmosCalculator;
