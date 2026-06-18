import { useState, useEffect, useRef } from 'react';
import { colors, radius, transitions } from '../design/tokens';

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

  // Initialize/switch calculator
  useEffect(() => {
    if (isOpen && containerRef.current && !isMinimized) {
      // Destroy existing calculator if switching modes
      if (calculatorRef.current) {
        calculatorRef.current.destroy();
        calculatorRef.current = null;
      }

      const initCalculator = () => {
        if (!containerRef.current) return;

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

      // Load Desmos script if not already loaded
      if (!window.Desmos) {
        const script = document.createElement('script');
        script.src = 'https://www.desmos.com/api/v1.11/calculator.js?apiKey=dcb31709b452b1cf9dc26972add0fda6';
        script.async = true;
        script.onload = initCalculator;
        document.head.appendChild(script);
      } else {
        initCalculator();
      }
    }

    return () => {
      if (calculatorRef.current) {
        calculatorRef.current.destroy();
        calculatorRef.current = null;
      }
    };
  }, [isOpen, calcMode, isMinimized]);

  if (!isOpen) return null;

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
    {isMobileCalc && (
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
        display: 'flex',
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
        display: 'flex',
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

      {/* Calculator Container */}
      {!isMinimized && (
        <div
          ref={containerRef}
          style={{
            flex: 1,
            width: '100%',
            minHeight: isMobileCalc ? 'auto' : CALC_HEIGHT - 50
          }}
        />
      )}
    </div>
    </>
  );
};

export default DesmosCalculator;
