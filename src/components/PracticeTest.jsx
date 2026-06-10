import { useState, useEffect, useCallback, useRef, useMemo, memo } from 'react';
import QuestionDiagram from './QuestionDiagrams';
import AiTutorChat from './AiTutorChat';
import TestResults from './TestResults';
import { MathText } from './MathText';
import SolutionExplanation from './SolutionExplanation';
import QuestionRenderer from './QuestionRenderer';
import SATReferenceSheet from './SATReferenceSheet';
import AnswerChoiceList from './shared/AnswerChoiceList';
import { recordSkillAttempts } from '../services/skillService';
import { showToast } from './ui/Toaster';
import { buildTestReviewEntry } from '../services/reviewQueueResolve';
import { pickInitialModuleIndex } from '../services/selectors/initialModule';
import { generateDiagnosticNarrative } from '../services/diagnosticNarrativeService';
import {
  createAiDiagnosticArtifact,
  completeAiDiagnosticArtifact,
  failAiDiagnosticArtifact,
  getReadyAiDiagnostic,
  generateAttemptId,
  linkArtifactToAttempt,
} from '../services/practiceTestService';
import { generateAndPersistHybridPlan, fetchCurrentStudyPlan, persistDeterministicArtifact } from '../services/hybridStudyPlanService';
import { buildLongitudinalEvidence, computePlanDelta } from '../services/studyPlanMerger';
import { generateStudyPlan as generateDeterministicPlan } from '../services/studyPlanGenerator';
import { runDiagnostic, getQuestionSkills } from '../services/diagnosticEngine';
import { buildGroundTruthDiagnosis, enrichPlanWithGroundTruth } from '../services/groundTruth';
import { scoreTest, isAnswerCorrect, convertToSATScore } from '../services/scoring';
import { computeRemaining, deriveDeadline, shiftDeadlineForPause } from '../services/timerClock';
import { colors, typography, spacing, radius, shadows, transitions } from '../design/tokens';
import { cardStyles } from '../design/components';
import { Modal } from './ui/Modal';
import { Button } from './ui/Button';
import './PracticeTest.css';
import { CheckIcon, CrossIcon, LightBulbIcon, MicroscopeIcon, WarningIcon, DocumentIcon } from '../design/icons';

// buildGroundTruthDiagnosis + enrichPlanWithGroundTruth moved verbatim to
// src/services/groundTruth.js (imported above) so the mini-diagnostic
// onboarding flow can share them without copy-paste drift.

// SAT-Style Typography Constants - matches College Board format
const SAT_TYPOGRAPHY = {
  questionFont: "'Times New Roman', 'Georgia', 'Cambria', serif",
  diagramFont: "'Arial', 'Helvetica', sans-serif",
  sizes: {
    questionText: '17px',
    choiceText: '16px',
    questionNumber: '14px',
    smallText: '13px',
  },
  lineHeights: {
    question: '1.7',
    choice: '1.5',
  }
};

// SAT-Style Color Palette - mapped to design tokens
const SAT_COLORS = {
  text: {
    primary: colors.text.primary,
    secondary: colors.text.secondary,
    muted: colors.text.muted,
  },
  background: {
    page: colors.surface.white,
    selected: colors.surface.gray,
  },
  border: {
    dark: colors.text.primary,
    medium: colors.text.secondary,
    light: colors.surface.grayDark,
  },
  ui: {
    questionBadgeBg: colors.text.primary,
    questionBadgeText: colors.surface.white,
  }
};

// SAT-Style Draggable Desmos Calculator Component
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

// Timer component
// Timestamp-delta countdown (1.8). Remaining time is derived from an absolute
// deadline against the wall clock — NOT by counting setInterval ticks, which
// browsers throttle in background tabs (the old model gifted free time). The
// interval is now just a render cadence; visibilitychange/focus snap the clock
// to true remaining time on refocus. Mount once per module via key={currentModule}.
const Timer = ({ initialMinutes, onTimeUp, isPaused, timeRef, initialSeconds: savedSeconds }) => {
  const initialRemaining = savedSeconds != null ? savedSeconds : initialMinutes * 60;

  const deadlineRef = useRef(null);
  const pauseStartedRef = useRef(null);
  const firedRef = useRef(false); // onTimeUp must fire exactly once
  // Lazy-anchor the deadline on first render (and on remount via key change).
  if (deadlineRef.current === null) {
    deadlineRef.current = deriveDeadline(initialRemaining, Date.now());
  }

  const [displaySeconds, setDisplaySeconds] = useState(initialRemaining);

  const onTimeUpRef = useRef(onTimeUp);
  useEffect(() => { onTimeUpRef.current = onTimeUp; }, [onTimeUp]);

  const tick = useCallback(() => {
    const { remainingSeconds, isUp } = computeRemaining({
      deadlineTs: deadlineRef.current,
      nowTs: Date.now(),
      isPaused,
      pauseStartedTs: pauseStartedRef.current,
    });
    setDisplaySeconds(remainingSeconds);
    if (timeRef) timeRef.current = remainingSeconds;
    if (isUp && !firedRef.current) {
      firedRef.current = true;
      onTimeUpRef.current?.();
    }
  }, [isPaused, timeRef]);

  // Pause freezes the clock; resume shifts the deadline forward by the paused
  // duration so frozen time is never consumed. ORDER MATTERS: this effect is
  // declared BEFORE the interval effect so that on resume the deadline shift
  // lands before the interval's first tick reads it. Don't reorder.
  useEffect(() => {
    if (isPaused) {
      pauseStartedRef.current = Date.now();
      tick();
    } else if (pauseStartedRef.current != null) {
      deadlineRef.current = shiftDeadlineForPause(
        deadlineRef.current, pauseStartedRef.current, Date.now()
      );
      pauseStartedRef.current = null;
      tick();
    }
  }, [isPaused, tick]);

  // Render-cadence interval (running only); immediate tick keeps first paint and
  // the resume frame accurate.
  useEffect(() => {
    if (isPaused) return;
    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, [isPaused, tick]);

  // Snap to true remaining time the instant the tab regains visibility/focus —
  // this is what defeats background-tab interval throttling.
  useEffect(() => {
    const onVisible = () => { if (!document.hidden) tick(); };
    document.addEventListener('visibilitychange', onVisible);
    window.addEventListener('focus', onVisible);
    return () => {
      document.removeEventListener('visibilitychange', onVisible);
      window.removeEventListener('focus', onVisible);
    };
  }, [tick]);

  const mins = Math.floor(displaySeconds / 60);
  const secs = displaySeconds % 60;
  const isLow = displaySeconds < 300; // Less than 5 minutes

  return (
    <div style={{
      fontSize: '18px',
      fontWeight: '600',
      color: isLow ? colors.semantic.error : colors.text.secondary,
      fontFamily: 'monospace',
      padding: '8px 16px',
      background: isLow ? colors.semantic.errorLight : colors.surface.gray,
      borderRadius: radius.sm
    }}>
      {String(mins).padStart(2, '0')}:{String(secs).padStart(2, '0')}
    </div>
  );
};

// Question navigation grid - SAT Style
const QuestionGrid = memo(({ questions, currentIndex, answers, markedForReview, onNavigate }) => {
  return (
    <div className="nav-grid">
      {questions.map((_, idx) => {
        const isAnswered = answers[idx] !== undefined;
        const isMarked = markedForReview.includes(idx);
        const isCurrent = idx === currentIndex;

        let className = "nav-grid-item";
        if (isCurrent) className += " is-current";
        if (isMarked) className += " is-flagged";
        else if (isAnswered) className += " is-answered"; // Only show answered if not flagged (flagged overrides)

        return (
          <button
            key={idx}
            onClick={() => onNavigate(idx)}
            title={isMarked ? `Question ${idx + 1} - Flagged for later` : `Question ${idx + 1}`}
            className={className}
          >
            {idx + 1}
          </button>
        );
      })}
    </div>
  );
});

// OLD MathText component - NOW USING KaTeX-based version from ./MathText.jsx
// Keeping for reference only
const OldMathText_DISABLED = ({ text, style = {} }) => {
  if (!text) return null;

  const baseStyle = {
    fontFamily: 'Times New Roman, Georgia, serif',
    ...style
  };

  // Parse and render math expressions
  const renderMath = (str) => {
    if (typeof str !== 'string') return str;

    const elements = [];
    let remaining = str;
    let key = 0;

    while (remaining.length > 0) {
      // Match fraction pattern: numerator/denominator or (expr)/(expr)
      const fractionMatch = remaining.match(/^\(([^)]+)\)\/\(([^)]+)\)/);
      if (fractionMatch) {
        elements.push(
          <span key={key++} style={{
            display: 'inline-flex',
            flexDirection: 'column',
            alignItems: 'center',
            verticalAlign: 'middle',
            margin: '0 2px'
          }}>
            <span style={{ borderBottom: '1px solid currentColor', padding: '0 4px', lineHeight: '1.2' }}>
              {renderMath(fractionMatch[1])}
            </span>
            <span style={{ padding: '0 4px', lineHeight: '1.2' }}>
              {renderMath(fractionMatch[2])}
            </span>
          </span>
        );
        remaining = remaining.slice(fractionMatch[0].length);
        continue;
      }

      // Match square root pattern: √(content) or √content
      const sqrtMatch = remaining.match(/^√\(([^)]+)\)/) || remaining.match(/^√(\d+)/);
      if (sqrtMatch) {
        elements.push(
          <span key={key++} style={{
            display: 'inline-flex',
            alignItems: 'center',
            verticalAlign: 'middle'
          }}>
            <span style={{ fontSize: '1.2em', marginRight: '1px' }}>√</span>
            <span style={{
              borderTop: '1px solid currentColor',
              paddingTop: '2px',
              paddingLeft: '2px',
              paddingRight: '2px'
            }}>
              {renderMath(sqrtMatch[1])}
            </span>
          </span>
        );
        remaining = remaining.slice(sqrtMatch[0].length);
        continue;
      }

      // Match exponent patterns: x^2, x^(expr), base^exp
      const expMatch = remaining.match(/^(\w+|\))\^(\d+)/) || remaining.match(/^(\w+|\))\^\(([^)]+)\)/);
      if (expMatch) {
        // Don't add the base if we just added it (e.g., for cases like "x^2")
        const base = expMatch[1];
        const exp = expMatch[2];

        // Check if base was already added as last element
        if (elements.length > 0 && typeof elements[elements.length - 1] === 'string' &&
            elements[elements.length - 1].endsWith(base)) {
          // Remove the base from the last string element
          elements[elements.length - 1] = elements[elements.length - 1].slice(0, -base.length);
        } else if (base !== ')') {
          elements.push(<span key={key++}>{base}</span>);
        }

        elements.push(
          <sup key={key++} style={{ fontSize: '0.75em', verticalAlign: 'super' }}>
            {renderMath(exp)}
          </sup>
        );
        remaining = remaining.slice(expMatch[0].length);
        continue;
      }

      // Match Unicode superscript numbers and convert them
      const superMatch = remaining.match(/^([⁰¹²³⁴⁵⁶⁷⁸⁹]+)/);
      if (superMatch) {
        const superMap = { '⁰': '0', '¹': '1', '²': '2', '³': '3', '⁴': '4', '⁵': '5', '⁶': '6', '⁷': '7', '⁸': '8', '⁹': '9' };
        const converted = superMatch[1].split('').map(c => superMap[c] || c).join('');
        elements.push(
          <sup key={key++} style={{ fontSize: '0.75em', verticalAlign: 'super' }}>
            {converted}
          </sup>
        );
        remaining = remaining.slice(superMatch[0].length);
        continue;
      }

      // Match subscript pattern: x_n or x_(expr)
      const subMatch = remaining.match(/^(\w)_(\w)/) || remaining.match(/^(\w)_\(([^)]+)\)/);
      if (subMatch) {
        elements.push(
          <span key={key++}>
            {subMatch[1]}
            <sub style={{ fontSize: '0.75em', verticalAlign: 'sub' }}>
              {renderMath(subMatch[2])}
            </sub>
          </span>
        );
        remaining = remaining.slice(subMatch[0].length);
        continue;
      }

      // Match pi symbol
      if (remaining.startsWith('π') || remaining.toLowerCase().startsWith('pi')) {
        const len = remaining.startsWith('π') ? 1 : 2;
        elements.push(<span key={key++} style={{ fontStyle: 'normal' }}>π</span>);
        remaining = remaining.slice(len);
        continue;
      }

      // Match degree symbol
      if (remaining.startsWith('°')) {
        elements.push(<span key={key++}>°</span>);
        remaining = remaining.slice(1);
        continue;
      }

      // Match ± symbol
      if (remaining.startsWith('+-') || remaining.startsWith('±')) {
        const len = remaining.startsWith('±') ? 1 : 2;
        elements.push(<span key={key++}>±</span>);
        remaining = remaining.slice(len);
        continue;
      }

      // Match infinity
      if (remaining.startsWith('∞') || remaining.toLowerCase().startsWith('infinity')) {
        const len = remaining.startsWith('∞') ? 1 : 8;
        elements.push(<span key={key++}>∞</span>);
        remaining = remaining.slice(len);
        continue;
      }

      // Match ≤, ≥, ≠
      if (remaining.startsWith('<=')) {
        elements.push(<span key={key++}>≤</span>);
        remaining = remaining.slice(2);
        continue;
      }
      if (remaining.startsWith('>=')) {
        elements.push(<span key={key++}>≥</span>);
        remaining = remaining.slice(2);
        continue;
      }
      if (remaining.startsWith('!=')) {
        elements.push(<span key={key++}>≠</span>);
        remaining = remaining.slice(2);
        continue;
      }

      // Default: add character as-is
      elements.push(remaining[0]);
      remaining = remaining.slice(1);
    }

    // Combine adjacent strings
    const combined = [];
    let currentString = '';
    for (const el of elements) {
      if (typeof el === 'string') {
        currentString += el;
      } else {
        if (currentString) {
          combined.push(currentString);
          currentString = '';
        }
        combined.push(el);
      }
    }
    if (currentString) {
      combined.push(currentString);
    }

    return combined.length === 1 ? combined[0] : combined;
  };

  return <span style={baseStyle}>{renderMath(text)}</span>;
};

// Fraction component for standalone fractions
const Fraction = ({ numerator, denominator, style = {} }) => (
  <span style={{
    display: 'inline-flex',
    flexDirection: 'column',
    alignItems: 'center',
    verticalAlign: 'middle',
    margin: '0 4px',
    ...style
  }}>
    <span style={{ borderBottom: '1px solid currentColor', padding: '0 6px', lineHeight: '1.3' }}>
      <MathText text={numerator} />
    </span>
    <span style={{ padding: '0 6px', lineHeight: '1.3' }}>
      <MathText text={denominator} />
    </span>
  </span>
);

// Render math formulas
const renderFormula = (formula) => {
  if (!formula) return null;

  if (formula.lines) {
    return (
      <div style={{ marginBottom: '16px' }}>
        {formula.lines.map((line, i) => (
          <div key={i} style={{
            fontFamily: 'Times New Roman, Georgia, serif',
            fontSize: '18px',
            fontStyle: 'italic',
            textAlign: 'center',
            marginBottom: '4px'
          }}>
            <MathText text={line} />
          </div>
        ))}
      </div>
    );
  }

  if (formula.equation) {
    return (
      <div style={{
        fontFamily: 'Times New Roman, Georgia, serif',
        fontSize: '18px',
        fontStyle: 'italic',
        textAlign: 'center',
        marginBottom: '16px'
      }}>
        <MathText text={formula.equation} />
      </div>
    );
  }

  if (formula.fraction) {
    return (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '16px',
        fontFamily: 'Times New Roman, Georgia, serif',
        fontSize: '18px',
        fontStyle: 'italic'
      }}>
        {formula.textBefore && <MathText text={formula.textBefore} />}
        <Fraction numerator={formula.fraction.numerator} denominator={formula.fraction.denominator} />
        {formula.text && <MathText text={formula.text} />}
      </div>
    );
  }

  return null;
};

// Render choice text (handles fractions and math)
const renderChoice = (choice) => {
  if (choice.fraction) {
    return (
      <Fraction
        numerator={choice.fraction.numerator}
        denominator={choice.fraction.denominator}
        style={{ fontSize: '14px' }}
      />
    );
  }
  if (choice.table) {
    return (
      <table style={{ borderCollapse: 'collapse', fontSize: '14px' }}>
        <thead>
          <tr>
            {choice.table.headers.map((h, i) => (
              <th key={i} style={{
                border: `1px solid ${colors.surface.grayMedium}`,
                padding: '4px 12px',
                background: colors.surface.offWhite,
                fontWeight: '600',
                fontStyle: 'italic'
              }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {choice.table.rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j} style={{
                  border: `1px solid ${colors.surface.grayMedium}`,
                  padding: '4px 12px',
                  textAlign: 'center'
                }}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  // Handle structured content (arrays or objects) with QuestionRenderer
  if (Array.isArray(choice.text) || (choice.text && typeof choice.text === 'object')) {
    return <QuestionRenderer content={choice.text} />;
  }
  // Handle string content with MathText
  return <MathText text={choice.text} />;
};

// ============================================
// Bluebook-style highlightable passage (R&W)
// ============================================

function getCharOffsetWithin(container, node, offset) {
  if (!container || !node) return 0;
  let charOffset = 0;
  const walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT, null);
  let curr;
  while ((curr = walker.nextNode())) {
    if (curr === node) return charOffset + offset;
    charOffset += curr.textContent.length;
  }
  return charOffset;
}

function mergeHighlights(highlights) {
  if (!highlights || highlights.length === 0) return [];
  const sorted = [...highlights].sort((a, b) => a.start - b.start);
  const merged = [sorted[0]];
  for (let i = 1; i < sorted.length; i++) {
    const last = merged[merged.length - 1];
    if (sorted[i].start <= last.end) last.end = Math.max(last.end, sorted[i].end);
    else merged.push({ ...sorted[i] });
  }
  return merged;
}

/**
 * Strip markup `*...*` (italic) and `__...__` (underline) from passage text
 * to produce a plain string AND a list of formatting ranges over the plain
 * string. Highlight char offsets are computed against the plain string, so
 * markup-aware rendering and selection-based highlighting stay aligned.
 *
 * Returns: { plain, formats: [{start,end,kind}] }
 *   - kind: 'em' | 'u'
 */
function parsePassageMarkup(text) {
  if (!text) return { plain: '', formats: [] };
  const formats = [];
  let plain = '';
  let i = 0;
  while (i < text.length) {
    // Convention-question blank: 4+ consecutive underscores → render as styled placeholder.
    // Replace with a non-breaking-space token so highlights still align cleanly.
    if (text[i] === '_' && text[i + 1] === '_' && text[i + 2] === '_' && text[i + 3] === '_') {
      let j = i;
      while (j < text.length && text[j] === '_') j++;
      const start = plain.length;
      plain += ' ';
      formats.push({ start, end: plain.length, kind: 'blank' });
      i = j;
      continue;
    }
    if (text[i] === '_' && text[i + 1] === '_') {
      // underline (paired __...__)
      const end = text.indexOf('__', i + 2);
      if (end !== -1) {
        const inner = text.slice(i + 2, end);
        const start = plain.length;
        plain += inner;
        formats.push({ start, end: plain.length, kind: 'u' });
        i = end + 2;
        continue;
      }
    }
    if (text[i] === '*') {
      const end = text.indexOf('*', i + 1);
      if (end !== -1 && end > i + 1) {
        const inner = text.slice(i + 1, end);
        const start = plain.length;
        plain += inner;
        formats.push({ start, end: plain.length, kind: 'em' });
        i = end + 1;
        continue;
      }
    }
    plain += text[i];
    i++;
  }
  return { plain, formats };
}

/**
 * Build a flat list of segments for rendering, where each segment has:
 *   { text, highlight, em, u, key, start?, end? }
 * Boundaries are unioned over highlight ranges and format ranges so that
 * formatting + highlight can co-occur on the same span.
 */
function buildSegments(plain, highlights, formats, hidden) {
  if (!plain) return [];
  const safeHighlights = (hidden ? [] : mergeHighlights(highlights || []));
  const cuts = new Set([0, plain.length]);
  safeHighlights.forEach((h) => { cuts.add(h.start); cuts.add(h.end); });
  (formats || []).forEach((f) => { cuts.add(f.start); cuts.add(f.end); });
  const sortedCuts = [...cuts].sort((a, b) => a - b);
  const segments = [];
  for (let i = 0; i < sortedCuts.length - 1; i++) {
    const a = sortedCuts[i];
    const b = sortedCuts[i + 1];
    if (a === b) continue;
    const hl = safeHighlights.find((h) => h.start <= a && b <= h.end);
    const em = (formats || []).find((f) => f.kind === 'em' && f.start <= a && b <= f.end);
    const u = (formats || []).find((f) => f.kind === 'u' && f.start <= a && b <= f.end);
    const blank = (formats || []).find((f) => f.kind === 'blank' && f.start <= a && b <= f.end);
    segments.push({
      text: plain.slice(a, b),
      highlight: !!hl,
      em: !!em,
      u: !!u,
      blank: !!blank,
      key: `s${i}`,
      start: hl ? hl.start : undefined,
      end: hl ? hl.end : undefined,
    });
  }
  return segments;
}

const HighlightablePassage = memo(function HighlightablePassage({ text, highlights, hidden, onAddHighlight, onRemoveHighlight, ariaLabel }) {
  const ref = useRef(null);

  const { plain, formats } = useMemo(() => parsePassageMarkup(text), [text]);

  const segments = useMemo(() => buildSegments(plain, highlights, formats, hidden), [plain, highlights, formats, hidden]);

  const handleMouseUp = useCallback(() => {
    const sel = window.getSelection();
    if (!sel || sel.isCollapsed || !ref.current) return;
    const range = sel.getRangeAt(0);
    if (!ref.current.contains(range.startContainer) || !ref.current.contains(range.endContainer)) return;
    const start = getCharOffsetWithin(ref.current, range.startContainer, range.startOffset);
    const end = getCharOffsetWithin(ref.current, range.endContainer, range.endOffset);
    if (start < end) onAddHighlight({ start, end });
    sel.removeAllRanges();
  }, [onAddHighlight]);

  const renderSegment = (s) => {
    if (s.blank) {
      return <span key={s.key} className="rw-blank" aria-label="blank" />;
    }
    let node = s.text;
    if (s.em) node = <em>{node}</em>;
    if (s.u) node = <u>{node}</u>;
    if (s.highlight) {
      return (
        <mark
          key={s.key}
          className="rw-highlight"
          onClick={(e) => {
            e.stopPropagation();
            onRemoveHighlight && onRemoveHighlight({ start: s.start, end: s.end });
          }}
          title="Click to remove highlight"
        >
          {node}
        </mark>
      );
    }
    return <span key={s.key}>{node}</span>;
  };

  return (
    <div
      ref={ref}
      className="rw-passage"
      style={{ whiteSpace: 'pre-wrap' }}
      onMouseUp={handleMouseUp}
      aria-label={ariaLabel}
    >
      {segments.map(renderSegment)}
    </div>
  );
});

const PracticeTest = ({ test, onBack, onComplete, onSaveResult, onSessionComplete, onSaveProgress, onClearProgress, onSaveStudyPlan, onGoToStudyPlan, savedProgress, isTimed = true, skillProgress = null, user = null, practiceTestResults = null, completedLessons = {}, practiceProgress = {}, onStartPractice, answeredQuestionIds = [], initialReviewModule = null, reviewSnapshotMissing = false, reviewAttemptId = null, initialSection = null, resultSaveStatus = null, onRetrySave = null }) => {
  const [currentModule, setCurrentModule] = useState(
    pickInitialModuleIndex(test, savedProgress, initialSection)
  );
  const [currentQuestion, setCurrentQuestion] = useState(savedProgress?.currentQuestion || 0);
  const [answers, setAnswers] = useState(savedProgress?.answers || {});
  const [markedForReview, setMarkedForReview] = useState(savedProgress?.markedForReview || []);
  const [showQuestionGridPopover, setShowQuestionGridPopover] = useState(false);
  // Bluebook-style highlights, keyed by `${moduleIdx}-${questionIdx}-${passageKey}`
  const [highlightsByKey, setHighlightsByKey] = useState({});
  const [highlightsHidden, setHighlightsHidden] = useState(false);
  const [eliminatedChoices, setEliminatedChoices] = useState(savedProgress?.eliminatedChoices || {});
  const [showTimer, setShowTimer] = useState(isTimed);
  const [moduleCompleted, setModuleCompleted] = useState(false);
  const [testCompleted, setTestCompleted] = useState(initialReviewModule !== null);
  const [fillInValue, setFillInValue] = useState('');
  const [showCalculator, setShowCalculator] = useState(false);
  const [showReference, setShowReference] = useState(false);
  const [reviewMode, setReviewMode] = useState(initialReviewModule !== null);
  const [reviewModule, setReviewModule] = useState(initialReviewModule !== null ? initialReviewModule : 0);
  const [reviewQuestion, setReviewQuestion] = useState(0);
  const [reviewTab, setReviewTab] = useState('question');
  const [reviewRightPane, setReviewRightPane] = useState('both');

  // Stale-content notice: shown only when the per-attempt snapshot is missing
  // (legacy attempts predate the snapshot subcollection). Dismissible per attempt
  // via localStorage so the user only sees it once per legacy attempt.
  const snapshotNoticeKey = reviewAttemptId ? `dismissedSnapshotNotice:${reviewAttemptId}` : null;
  const [snapshotNoticeDismissed, setSnapshotNoticeDismissed] = useState(() => {
    if (!snapshotNoticeKey || typeof window === 'undefined') return false;
    try { return window.localStorage.getItem(snapshotNoticeKey) === '1'; }
    catch (_) { return false; }
  });
  const showSnapshotNotice = reviewSnapshotMissing && !snapshotNoticeDismissed;
  const dismissSnapshotNotice = () => {
    setSnapshotNoticeDismissed(true);
    if (snapshotNoticeKey && typeof window !== 'undefined') {
      try { window.localStorage.setItem(snapshotNoticeKey, '1'); } catch (_) { /* ignore */ }
    }
  };
  const [resultSaved, setResultSaved] = useState(false);
  const [savedStudyPlan, setSavedStudyPlan] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const [confirmAction, setConfirmAction] = useState(null);
  const [resumeTimeRemaining, setResumeTimeRemaining] = useState(savedProgress?.timeRemaining ?? null);

  // Adaptive routing: which Module 2 variant to serve. Default 'hard' (current behavior).
  // Switches to 'easy' when Math Module 1 score < EASY_ROUTING_THRESHOLD (60% by default).
  const [module2Variant, setModule2Variant] = useState(savedProgress?.module2Variant || 'hard');
  // True when the user explicitly chose a Module 2 variant via the inline
  // switcher rendered above the Module 2 question grid. Disables the auto-
  // route below so a student who got routed to Easy can switch to Hard
  // (and vice versa). Persisted to savedProgress so the override survives
  // a tab reload mid-test.
  const [m2VariantManuallySet, setM2VariantManuallySet] = useState(
    savedProgress?.m2VariantManuallySet ?? false,
  );
  // When the user requests an M2 variant swap while they already have
  // answers in M2, defer the swap to a confirmation modal. Null when no
  // swap is pending; `{ newVariant, answerCount }` when one is queued.
  const [pendingM2Switch, setPendingM2Switch] = useState(null);

  // Responsive: track window width for mobile layout
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);
  useEffect(() => {
    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => setWindowWidth(window.innerWidth), 150);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      clearTimeout(resizeTimer);
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const isMobile = windowWidth < 768;

  // Diagnostic tracking refs (refs avoid re-renders on every data point)
  const questionTelemetry = useRef({});
  const questionStartTime = useRef(Date.now());
  const prevQuestion = useRef({ module: 0, question: 0 });
  const navigationHistory = useRef([]);
  const moduleTimeRemaining = useRef({});
  const visitedQuestions = useRef(new Set());
  const timerSecondsRef = useRef(null);
  const leftPaneRef = useRef(null);
  const rightPaneRef = useRef(null);
  const currentModuleRef = useRef(currentModule);
  const currentQuestionRef = useRef(currentQuestion);
  const diagnosticDataRef = useRef(null);
  const diagnosticReportRef = useRef(null);
  const attemptTimestampRef = useRef(null);
  const attemptIdRef = useRef(null);

  // Identify which test.modules indices are math (vs Reading & Writing).
  // For math-only tests, all modules are math. For full SATs (Test 1), R&W modules come first.
  const mathModuleIndices = useMemo(
    () => test.modules
      .map((m, i) => (!m.section || m.section === 'math') ? i : -1)
      .filter(i => i >= 0),
    [test.modules]
  );
  const mathM1Index = mathModuleIndices[0];
  const mathM2Index = mathModuleIndices[1];

  // Score Math Module 1 (raw correct/total/percent) for the M2 routing
  // decision and the toggle UI on the M1-complete screen. Recomputes only
  // when relevant answers change. Returns null on tests without an M1.
  const M2_ROUTING_THRESHOLD = 0.6;
  const m1Score = useMemo(() => {
    if (mathM1Index === undefined) return null;
    const m1Qs = test.modules[mathM1Index]?.questions || [];
    if (m1Qs.length === 0) return null;
    let correct = 0;
    m1Qs.forEach((q, idx) => {
      const ans = answers[`${mathM1Index}-${idx}`];
      if (ans === undefined || ans === null) return;
      if (q.type === 'fill-in') {
        const expected = String(q.correctAnswer).trim();
        const given = String(ans).trim();
        if (expected === given) { correct++; return; }
        const en = parseFloat(expected); const gn = parseFloat(given);
        if (!isNaN(en) && !isNaN(gn) && Math.abs(en - gn) < 1e-9) correct++;
      } else if (ans === q.correctAnswer) {
        correct++;
      }
    });
    return { correct, total: m1Qs.length, pct: correct / m1Qs.length };
  }, [test, mathM1Index, answers]);

  // Recommended Module 2 variant. Mirrors the historical auto-route logic:
  // sub-threshold M1 score → Easy. Null when the test has no Easy variant.
  const recommendedM2Variant = useMemo(() => {
    if (!test.module2Easy || !m1Score) return null;
    return m1Score.pct < M2_ROUTING_THRESHOLD ? 'easy' : 'hard';
  }, [test.module2Easy, m1Score]);

  // Effective modules: swap in Module 2 Easy variant when routing decision is 'easy'.
  // Falls back to standard test.modules if no Easy variant is defined.
  const effectiveModules = useMemo(() => {
    if (module2Variant !== 'easy' || !test.module2Easy || mathM2Index === undefined) {
      return test.modules;
    }
    const replaced = [...test.modules];
    // Preserve module index/title metadata from the slot, only swap in the easy questions
    const slot = test.modules[mathM2Index];
    replaced[mathM2Index] = {
      ...slot,
      ...test.module2Easy,
      title: slot.title,         // keep "Module 2" or "Module 4" labeling
      section: slot.section,     // preserve section ('math')
    };
    return replaced;
  }, [test, module2Variant, mathM2Index]);

  const module = effectiveModules[currentModule];
  const questions = module?.questions || [];
  const question = questions[currentQuestion];
  // R&W detection prefers per-module section (so a full SAT can mix R&W and Math modules);
  // falls back to test-level section for legacy R&W-only or Math-only tests.
  const isReadingWriting = (module?.section || test?.section) === 'reading-writing';

  // Highlight handlers — scoped per question via passageKey
  const buildHighlightKey = (passageKey) => `${currentModule}-${currentQuestion}-${passageKey}`;
  const handleAddHighlight = useCallback((passageKey, range) => {
    setHighlightsByKey((prev) => {
      const k = `${currentModule}-${currentQuestion}-${passageKey}`;
      const existing = prev[k] || [];
      return { ...prev, [k]: mergeHighlights([...existing, range]) };
    });
  }, [currentModule, currentQuestion]);
  const handleRemoveHighlight = useCallback((passageKey, range) => {
    setHighlightsByKey((prev) => {
      const k = `${currentModule}-${currentQuestion}-${passageKey}`;
      const existing = prev[k] || [];
      return { ...prev, [k]: existing.filter((h) => !(h.start === range.start && h.end === range.end)) };
    });
  }, [currentModule, currentQuestion]);
  const handleClearHighlights = useCallback(() => {
    setHighlightsByKey((prev) => {
      const out = { ...prev };
      const prefix = `${currentModule}-${currentQuestion}-`;
      Object.keys(out).forEach((k) => { if (k.startsWith(prefix)) delete out[k]; });
      return out;
    });
  }, [currentModule, currentQuestion]);

  // Memoize the per-module answers for QuestionGrid (avoids O(n) filter on every render)
  const moduleAnswersForGrid = useMemo(() => {
    return Object.fromEntries(
      Object.entries(answers)
        .filter(([key]) => key.startsWith(`${currentModule}-`))
        .map(([key, val]) => [parseInt(key.split('-')[1]), val])
    );
  }, [answers, currentModule]);

  // Reset fill-in value when question changes
  // Reset fill-in value when navigating to a different question
  const answersRef = useRef(answers);
  useEffect(() => { answersRef.current = answers; }, [answers]);
  useEffect(() => {
    if (question?.type === 'fill-in') {
      const existingAnswer = answersRef.current[`${currentModule}-${currentQuestion}`];
      setFillInValue(existingAnswer !== undefined ? String(existingAnswer) : '');
    }
  }, [currentQuestion, currentModule, question?.type]);

  // Keep refs in sync so useCallback handlers always read current values
  useEffect(() => {
    currentModuleRef.current = currentModule;
  }, [currentModule]);

  useEffect(() => {
    currentQuestionRef.current = currentQuestion;
    // Scroll both panes to top when question changes
    leftPaneRef.current?.scrollTo(0, 0);
    rightPaneRef.current?.scrollTo(0, 0);
  }, [currentQuestion]);

  // Helper: get or create telemetry entry for a question
  const getOrCreateTelemetry = (modIdx, qIdx) => {
    const key = `${modIdx}-${qIdx}`;
    if (!questionTelemetry.current[key]) {
      questionTelemetry.current[key] = {
        timeSpent: 0,
        visits: 0,
        answerChanges: [],
        usedCalculator: false,
        markedForReview: false,
        firstAnswerTime: null,
        finalAnswerTime: null,
      };
    }
    return questionTelemetry.current[key];
  };

  // Track question navigation and time spent
  useEffect(() => {
    const now = Date.now();
    const prevMod = prevQuestion.current.module;
    const prevQ = prevQuestion.current.question;
    const prevKey = `${prevMod}-${prevQ}`;
    const newKey = `${currentModule}-${currentQuestion}`;

    // Record time spent on previous question
    const elapsed = (now - questionStartTime.current) / 1000;
    if (elapsed > 0 && elapsed < 3600) {
      const prevTelemetry = getOrCreateTelemetry(prevMod, prevQ);
      prevTelemetry.timeSpent += elapsed;
    }

    // Record navigation event
    if (prevKey !== newKey) {
      navigationHistory.current.push({ from: prevKey, to: newKey, timestamp: now });
    }

    // Increment visits on new question
    const newTelemetry = getOrCreateTelemetry(currentModule, currentQuestion);
    newTelemetry.visits += 1;
    visitedQuestions.current.add(newKey);

    // Reset start time and update prev
    questionStartTime.current = now;
    prevQuestion.current = { module: currentModule, question: currentQuestion };
  }, [currentModule, currentQuestion]);

  // Auto-save progress when answers, module, or question changes (debounced to reduce I/O)
  const saveTimerRef = useRef(null);
  useEffect(() => {
    if (testCompleted || reviewMode || !onSaveProgress) return;
    if (Object.keys(answers).length === 0) return;

    clearTimeout(saveTimerRef.current);
    saveTimerRef.current = setTimeout(() => {
      const telemetrySnapshot = {};
      Object.entries(questionTelemetry.current).forEach(([k, v]) => {
        telemetrySnapshot[k] = {
          timeSpent: Math.round((v.timeSpent || 0) * 10) / 10,
          visits: v.visits || 0,
          answerChanges: v.answerChanges || [],
          usedCalculator: v.usedCalculator || false,
          markedForReview: v.markedForReview || false,
        };
      });
      const progressData = {
        currentModule,
        currentQuestion,
        answers,
        markedForReview,
        eliminatedChoices,
        isTimed,
        timeRemaining: timerSecondsRef.current,
        questionTelemetry: telemetrySnapshot,
        module2Variant,
        m2VariantManuallySet,
      };
      onSaveProgress(progressData);
    }, 2000);

    return () => clearTimeout(saveTimerRef.current);
  }, [answers, currentModule, currentQuestion, markedForReview, eliminatedChoices, testCompleted, reviewMode, onSaveProgress, isTimed, module2Variant, m2VariantManuallySet]);

  useEffect(() => {
    if (testCompleted || reviewMode) return;
    const onBeforeUnload = (e) => { e.preventDefault(); e.returnValue = ''; };
    window.addEventListener('beforeunload', onBeforeUnload);
    return () => window.removeEventListener('beforeunload', onBeforeUnload);
  }, [testCompleted, reviewMode]);

  // Flush any pending auto-save when test completes
  useEffect(() => {
    if (testCompleted && saveTimerRef.current) {
      clearTimeout(saveTimerRef.current);
    }
  }, [testCompleted]);

  const planGenerationAttempted = useRef(false);

  // Save test results when test completes
  const completionInFlight = useRef(false);
  useEffect(() => {
    if (!testCompleted || !onSaveResult || resultSaved || completionInFlight.current) return;
    completionInFlight.current = true;

    // Yield to browser so the completion UI paints before heavy scoring computation
    const completionTimer = setTimeout(() => {
      console.log('[PracticeTest] Attempting to save results...');

      // Record time spent on the last question before test completion
      const now = Date.now();
      const lastElapsed = (now - questionStartTime.current) / 1000;
      if (lastElapsed > 0 && lastElapsed < 3600) {
        const lastKey = `${prevQuestion.current.module}-${prevQuestion.current.question}`;
        if (questionTelemetry.current[lastKey]) {
          questionTelemetry.current[lastKey].timeSpent += lastElapsed;
        }
      }

      // Build per-question diagnostic details
      const questionDetails = {};
      effectiveModules.forEach((mod, modIdx) => {
        mod.questions.forEach((q, qIdx) => {
          const key = `${modIdx}-${qIdx}`;
          const userAnswer = answers[key];
          const correct = isAnswerCorrect(q, userAnswer);
          const telem = questionTelemetry.current[key] || {};
          const elimKey = key;
          questionDetails[key] = {
            timeSpent: Math.round((telem.timeSpent || 0) * 10) / 10,
            visits: telem.visits || 0,
            answerChanges: (telem.answerChanges || []).length,
            answerChangeEvents: (telem.answerChanges || []).map(ev => ({
              from: ev.from, to: ev.to, timestamp: ev.timestamp
            })),
            usedCalculator: telem.usedCalculator || false,
            markedForReview: telem.markedForReview || false,
            eliminatedChoices: eliminatedChoices[elimKey] || [],
            isCorrect: correct,
            difficulty: q.difficulty || null,
            // getQuestionSkills normalizes math (q.skills: array) and R&W
            // (q.skill: string) shapes — reading q.skills directly persisted
            // empty skills for every R&W item.
            skills: getQuestionSkills(q),
          };
        });
      });

      // Classify navigation pattern
      const navHistory = navigationHistory.current;
      let navigationPattern = 'linear';
      if (navHistory.length > 0) {
        let backwardCount = 0;
        let skipCount = 0;
        for (const nav of navHistory) {
          const [, fromQ] = nav.from.split('-').map(Number);
          const [, toQ] = nav.to.split('-').map(Number);
          if (toQ < fromQ) backwardCount++;
          if (Math.abs(toQ - fromQ) > 1) skipCount++;
        }
        if (skipCount > navHistory.length * 0.3) {
          navigationPattern = 'jumping';
        } else if (backwardCount > 2 || skipCount > 2) {
          navigationPattern = 'strategic-skip';
        }
      }

      const telemetryValues = Object.values(questionTelemetry.current);
      const diagnosticData = {
        questionDetails,
        navigationPattern,
        totalNavigationEvents: navHistory.length,
        moduleTimeRemaining: { ...moduleTimeRemaining.current },
        questionsVisitedMultipleTimes: telemetryValues.filter(t => t.visits > 1).length,
        calculatorUsageCount: telemetryValues.filter(t => t.usedCalculator).length,
        markedForReviewCount: telemetryValues.filter(t => t.markedForReview).length,
      };

      diagnosticDataRef.current = diagnosticData;

      // Grade against the modules the student actually answered. When the
      // student routes to the Easy Module 2, effectiveModules swaps in the
      // Easy variant; test.modules is still the original (Hard) key. Scoring
      // or diagnosing against test.modules would grade Easy answers against
      // Hard keys and silently corrupt the score, diagnosis, and every
      // downstream drill route — for exactly the lowest scorers. (1.1)
      const effectiveTest = { ...test, modules: effectiveModules };

      diagnosticReportRef.current = runDiagnostic(
        effectiveTest, answers, diagnosticData,
        skillProgress || {},
        { targetScore: user?.targetScore, currentScore: user?.currentScore, testDate: user?.testDate },
        practiceTestResults || {}
      );

      // IRT-based scoring via central engine
      const scored = scoreTest(effectiveTest, answers, { timedMode: isTimed, diagnosticData });
      const newAttemptId = generateAttemptId();
      attemptIdRef.current = newAttemptId;

      // Build per-question snapshot of the exact items the student saw.
      // Persisted to progress/{userId}/attempts/{attemptId} so Review Answers
      // shows the original problem even after content swaps under the same id.
      const questionsSnapshot = [];
      effectiveModules.forEach((mod, modIdx) => {
        mod.questions.forEach((q, qIdx) => {
          questionsSnapshot.push({
            id: q.id,
            type: q.type,
            stem: q.stem ?? q.question ?? null,
            choices: q.choices || null,
            correctAnswer: q.correctAnswer,
            explanation: q.explanation ?? null,
            difficulty: q.difficulty || null,
            band: q.band ?? null,
            skills: getQuestionSkills(q),
            // Section axis ('reading-writing' | 'math') so snapshot-
            // reconstructed tests stay multi-section-aware even if the live
            // catalog changes (the report loader reads snap.section first).
            section: mod.section ?? null,
            moduleIndex: modIdx,
            questionIndex: qIdx,
          });
        });
      });

      // Feed this test's misses into the SM-2 review queue (2026-06 audit
      // gap 4: full-test wrong answers — the richest evidence source — never
      // reached spaced repetition; only drill misses did). Entries are
      // position-addressed (test catalog + module/question index + M2
      // variant) because raw test ids restart at 1 in every module. Attempted
      // misses outrank blanks, and the feed is capped so one rough test can't
      // flood the daily review queue. Review-retakes are excluded here AND
      // re-gated by the orchestrator.
      const MAX_REVIEW_FEED = 20;
      const reviewFeed = [];
      if (!reviewMode && test?.id) {
        const missed = [];
        effectiveModules.forEach((mod, modIdx) => {
          mod.questions.forEach((q, qIdx) => {
            const key = `${modIdx}-${qIdx}`;
            if (questionDetails[key]?.isCorrect) return;
            missed.push({
              entry: buildTestReviewEntry(test.id, {
                modIdx,
                qIdx,
                question: q,
                servedEasyVariant: module2Variant === 'easy' && modIdx === mathM2Index,
              }),
              wasAttempted: answers[key] != null,
            });
          });
        });
        missed.sort((a, b) => Number(b.wasAttempted) - Number(a.wasAttempted));
        reviewFeed.push(...missed.slice(0, MAX_REVIEW_FEED).map(m => m.entry));
      }

      const resultsToSave = {
        attemptId: newAttemptId,
        rawScore: scored.rawScore,
        totalQuestions: scored.totalQuestions,
        scaledScore: scored.sectionScore,
        sectionScores: scored.sectionScores,
        isMultiSection: scored.isMultiSection,
        timedMode: isTimed,
        moduleScores: scored.moduleScores,
        diagnosticData,
        diagnosticReport: diagnosticReportRef.current || null,
        scoringVersion: scored.scoringVersion,
        thetaEstimate: scored.thetaEstimate,
        standardError: scored.standardError,
        routeTaken: scored.routeTaken,
        questionsSnapshot,
        answers: { ...answers },
      };
      console.log('[PracticeTest] Calling onSaveResult with:', resultsToSave);
      onSaveResult(resultsToSave);
      attemptTimestampRef.current = new Date().toISOString();
      setResultSaved(true);
      console.log('[PracticeTest] Results saved, resultSaved set to true');

      // onSessionComplete seam (Phase 2). Fires exactly once per completed full
      // test: we're inside the resultSaved + completionInFlight guard, so it
      // inherits the existing dedup. Carries the runDiagnostic() report (the
      // rich object the fingerprint + prediction loop consume) and the HEADLINE
      // scaledScore + isMultiSection so predictions stay on the dashboard's scale.
      if (onSessionComplete) {
        try {
          onSessionComplete({
            attemptId: newAttemptId,
            testId: test?.id ?? null,
            testTitle: test?.title ?? null,
            userId: user?.uid ?? null,
            scaledScore: scored.sectionScore,
            rawScore: scored.rawScore,
            totalQuestions: scored.totalQuestions,
            sectionScores: scored.sectionScores,
            isMultiSection: scored.isMultiSection,
            timedMode: isTimed,
            diagnosticReport: diagnosticReportRef.current || null,
            reviewMode,
            completedAt: attemptTimestampRef.current,
            reviewFeed,
          });
        } catch (e) {
          console.error('[PracticeTest] onSessionComplete handler error:', e);
        }
      }

      // Record skill attempts — aggregate first, then record sequentially to avoid race conditions
      if (user?.uid) {
        console.log('[PracticeTest] Starting skill recording for user:', user.uid);
        // Build list of {skills, isCorrect} entries
        const skillEntries = [];
        effectiveModules.forEach((mod, modIdx) => {
          mod.questions.forEach((q, qIdx) => {
            // getQuestionSkills handles the R&W singular q.skill shape too —
            // before this, R&W items were skipped and skillProgress never got
            // R&W mastery from full tests (only from drills).
            const qSkills = getQuestionSkills(q);
            if (qSkills.length > 0) {
              const key = `${modIdx}-${qIdx}`;
              skillEntries.push({ skills: qSkills, isCorrect: isAnswerCorrect(q, answers[key]) });
            }
          });
        });
        console.log('[PracticeTest] Skill entries to record:', skillEntries.length);
        // Record sequentially to prevent concurrent Firestore read-modify-write conflicts
        (async () => {
          try {
            for (const entry of skillEntries) {
              await recordSkillAttempts(user.uid, entry.skills, entry.isCorrect);
            }
            console.log('[PracticeTest] All skill recordings complete');
          } catch (err) {
            console.error('[PracticeTest] Skill recording error:', err);
          }
        })();
      } else {
        console.warn('[PracticeTest] No user.uid — skipping skill recording');
      }

      // Clear in-progress data since test is complete
      if (onClearProgress) {
        console.log('[PracticeTest] Clearing in-progress data');
        onClearProgress();
      }

      // Generate study plan and persist via artifact subcollection.
      // This runs inline so there is zero chance of a missed effect.
      if (user?.uid && diagnosticReportRef.current && !planGenerationAttempted.current) {
        planGenerationAttempted.current = true;
        console.log('[PracticeTest] Study plan generation starting (artifact-first)');
        try {
          const diagReport = diagnosticReportRef.current;
          const groundTruth = buildGroundTruthDiagnosis(diagReport, questionTelemetry.current);
          const longitudinalEvidence = buildLongitudinalEvidence(practiceTestResults || {});
          const detPlan = generateDeterministicPlan(
            diagReport,
            { targetScore: user.targetScore, testDate: user.testDate },
            completedLessons,
            practiceProgress,
            savedStudyPlan,
            longitudinalEvidence,
            answeredQuestionIds || [],
          );
          // Attach plan diff for the "What Changed" banner
          detPlan._diff = computePlanDelta(savedStudyPlan, detPlan);
          const plan = enrichPlanWithGroundTruth({ ...detPlan }, groundTruth);
          // Attach difficulty profile so dashboard can match question difficulty to student level
          if (diagReport.difficultyAnalysis) {
            plan.difficultyAnalysis = diagReport.difficultyAnalysis;
          }
          setSavedStudyPlan(plan);

          // Phase 1: persist deterministic artifact (subcollection write)
          persistDeterministicArtifact(user.uid, plan, {
            attemptId: attemptIdRef.current,
            sourceTestId: test?.id || null,
          }).then((result) => {
            console.log('[PracticeTest] Phase 1 artifact persisted:', result?.artifactId);
          }).catch((err) => {
            console.error('[PracticeTest] Phase 1 artifact write FAILED:', err);
          });

          // Propagate to in-memory state for immediate rendering (pass diagnostic for AI augmentation)
          if (onSaveStudyPlan) {
            try { onSaveStudyPlan(plan, diagReport); } catch (e) { console.error('[PracticeTest] onSaveStudyPlan error:', e); }
          }

          // Phase 2: async hybrid plan (AI-augmented) — replaces Phase 1 artifact
          (async () => {
            try {
              console.log('[PracticeTest] Phase 2 — hybrid plan generation starting...');
              const existingPlan = await fetchCurrentStudyPlan(user.uid);
              const { artifactId, artifact } = await generateAndPersistHybridPlan({
                userId: user.uid,
                diagnostic: diagReport,
                userProfile: { targetScore: user.targetScore, testDate: user.testDate },
                completedLessons,
                practiceProgress,
                practiceTestResults: practiceTestResults || {},
                previousPlan: existingPlan,
                attemptId: attemptIdRef.current,
                aiArtifactId: null,
                groundTruth,
              });

              const hybridPlan = enrichPlanWithGroundTruth(
                { ...(artifact.plan || {}) },
                groundTruth,
              );

              if (attemptIdRef.current && artifactId) {
                linkArtifactToAttempt(user.uid, test.id, attemptIdRef.current, {
                  studyPlanArtifactId: artifactId,
                }).catch(() => {});
              }

              setSavedStudyPlan(hybridPlan);
              if (onSaveStudyPlan) {
                try { onSaveStudyPlan(hybridPlan, null); } catch (e) { /* already logged */ }
              }
              console.log('[PracticeTest] Phase 2 — hybrid artifact saved:', artifactId);
            } catch (err) {
              console.error('[PracticeTest] Hybrid plan generation failed; deterministic artifact remains:', err);
            }
          })();
        } catch (err) {
          console.error('[PracticeTest] Study plan generation CRASHED:', err);
        }
      }
    }, 0);

    return () => {
      clearTimeout(completionTimer);
      completionInFlight.current = false;
    };
  }, [testCompleted, onSaveResult, onSessionComplete, onClearProgress, resultSaved, test, answers, isTimed, user, completedLessons, practiceProgress, practiceTestResults, onSaveStudyPlan]);

  // Post-test: generate AI diagnostic narrative automatically
  const diagnosticNarrativeAttempted = useRef(false);
  const [aiDiagnosticState, setAiDiagnosticState] = useState({ status: 'idle', narrative: null, error: null });

  const retryAiDiagnostic = useCallback(() => {
    const diagReport = diagnosticReportRef.current;
    const attemptTs = attemptTimestampRef.current;
    if (!diagReport || !user?.uid || !attemptTs) return;

    setAiDiagnosticState({ status: 'generating', narrative: null, error: null });

    (async () => {
      let artifactId = null;
      try {
        console.log('[PracticeTest] Generating AI diagnostic narrative...');

        try {
          artifactId = await createAiDiagnosticArtifact(user.uid, test.id, attemptTs, attemptIdRef.current);
        } catch (storeErr) {
          console.warn('[PracticeTest] Artifact creation failed (non-blocking):', storeErr.message);
        }

        const { narrative, generatedAt, model, promptVersion, quality } = await generateDiagnosticNarrative(
          diagReport,
          { targetScore: user.targetScore, testDate: user.testDate },
        );

        if (artifactId) {
          await completeAiDiagnosticArtifact(user.uid, artifactId, narrative, { generatedAt, model, promptVersion, quality }).catch(() => {});
          if (attemptIdRef.current) {
            linkArtifactToAttempt(user.uid, test.id, attemptIdRef.current, {
              aiArtifactId: artifactId,
            }).catch(() => {});
          }
        }

        setAiDiagnosticState({ status: 'ready', narrative, error: null });
        console.log('[PracticeTest] AI diagnostic narrative ready');
      } catch (err) {
        console.error('[PracticeTest] AI diagnostic narrative failed:', err);
        if (artifactId) {
          await failAiDiagnosticArtifact(user.uid, artifactId, err.message).catch(() => {});
        }
        setAiDiagnosticState({ status: 'failed', narrative: null, error: err.message || 'Failed to generate AI analysis' });
      }
    })();
  }, [user, test]);

  useEffect(() => {
    if (!resultSaved || diagnosticNarrativeAttempted.current || !user?.uid) return;
    diagnosticNarrativeAttempted.current = true;

    const diagReport = diagnosticReportRef.current;
    if (!diagReport) {
      console.warn('[PracticeTest] No diagnostic report — skipping AI narrative generation');
      return;
    }

    const attemptTs = attemptTimestampRef.current;

    (async () => {
      try {
        const existing = await getReadyAiDiagnostic(user.uid, test.id, attemptTs);
        if (existing?.narrative) {
          console.log('[PracticeTest] Rehydrated AI diagnostic from Firestore');
          setAiDiagnosticState({ status: 'ready', narrative: existing.narrative, error: null });
          return;
        }
      } catch (err) {
        console.warn('[PracticeTest] Rehydration lookup failed (non-blocking):', err.message);
      }
      retryAiDiagnostic();
    })();
  }, [resultSaved, user, test, retryAiDiagnostic]);

  const handleSelectAnswer = useCallback((answerId) => {
    const mod = currentModuleRef.current;
    const q = currentQuestionRef.current;
    const key = `${mod}-${q}`;
    const telemetry = getOrCreateTelemetry(mod, q);
    const now = Date.now();

    // Track telemetry outside setState to avoid side effects in updater
    const oldAnswer = answersRef.current[key];
    telemetry.answerChanges.push({ from: oldAnswer || null, to: answerId, timestamp: now });
    if (!telemetry.firstAnswerTime) telemetry.firstAnswerTime = now;
    telemetry.finalAnswerTime = now;

    setAnswers(prev => {
      // If clicking the already-selected answer, deselect it
      if (prev[key] === answerId) {
        const newAnswers = { ...prev };
        delete newAnswers[key];
        return newAnswers;
      }
      // Otherwise, select the new answer
      return { ...prev, [key]: answerId };
    });
  }, []);

  const handleFillInSubmit = () => {
    if (fillInValue.trim()) {
      const key = `${currentModule}-${currentQuestion}`;
      const value = fillInValue.trim();

      const telemetry = getOrCreateTelemetry(currentModule, currentQuestion);
      const now = Date.now();
      telemetry.answerChanges.push({ from: answers[key] || null, to: value, timestamp: now });
      if (!telemetry.firstAnswerTime) telemetry.firstAnswerTime = now;
      telemetry.finalAnswerTime = now;

      setAnswers(prev => ({ ...prev, [key]: value }));
    }
  };

  const handleToggleMark = useCallback(() => {
    const mod = currentModuleRef.current;
    const q = currentQuestionRef.current;
    const telemetry = getOrCreateTelemetry(mod, q);
    setMarkedForReview(prev => {
      if (prev.includes(q)) {
        return prev.filter(i => i !== q);
      }
      // Mark for review — record in telemetry
      telemetry.markedForReview = true;
      return [...prev, q];
    });
  }, []);

  const handleToggleEliminate = useCallback((choiceId) => {
    const key = `${currentModuleRef.current}-${currentQuestionRef.current}`;
    setEliminatedChoices(prev => {
      const current = prev[key] || [];
      if (current.includes(choiceId)) {
        const updated = current.filter(id => id !== choiceId);
        if (updated.length === 0) {
          const newState = { ...prev };
          delete newState[key];
          return newState;
        }
        return { ...prev, [key]: updated };
      }
      return { ...prev, [key]: [...current, choiceId] };
    });
  }, []);

  // Frame-based debounce prevents rapid clicks from overwhelming KaTeX re-renders
  const navDebounceRef = useRef(false);

  const handleNext = useCallback(() => {
    if (navDebounceRef.current) return;
    navDebounceRef.current = true;
    requestAnimationFrame(() => { navDebounceRef.current = false; });
    fillInSubmitRef.current?.();
    setCurrentQuestion(prev => (prev < questions.length - 1 ? prev + 1 : prev));
  }, [questions.length]);

  const handlePrev = useCallback(() => {
    if (navDebounceRef.current) return;
    navDebounceRef.current = true;
    requestAnimationFrame(() => { navDebounceRef.current = false; });
    fillInSubmitRef.current?.();
    setCurrentQuestion(prev => (prev > 0 ? prev - 1 : prev));
  }, []);

  const fillInSubmitRef = useRef(null);
  useEffect(() => {
    fillInSubmitRef.current = () => {
      if (question?.type === 'fill-in') handleFillInSubmit();
    };
  });

  // answersRef only syncs in an effect, so an in-flight fill-in committed by
  // fillInSubmitRef isn't visible to a synchronous read. Tracked separately so
  // the End-Test blank-attempt guard can't discard a test whose only answer
  // is the fill-in being committed at end time.
  const fillInHasValueRef = useRef(false);
  useEffect(() => {
    fillInHasValueRef.current = question?.type === 'fill-in' && String(fillInValue ?? '').trim() !== '';
  });

  const handleNavigate = useCallback((idx) => {
    if (navDebounceRef.current) return;
    navDebounceRef.current = true;
    requestAnimationFrame(() => { navDebounceRef.current = false; });
    fillInSubmitRef.current?.();
    setCurrentQuestion(idx);
  }, []);

  const handleSubmitModule = useCallback(() => {
    fillInSubmitRef.current?.();
    // Record time spent on current question before submitting (read from refs, not stale closures)
    const mod = currentModuleRef.current;
    const q = currentQuestionRef.current;
    const now = Date.now();
    const elapsed = (now - questionStartTime.current) / 1000;
    if (elapsed > 0 && elapsed < 3600) {
      const telemetry = getOrCreateTelemetry(mod, q);
      telemetry.timeSpent += elapsed;
    }
    moduleTimeRemaining.current[mod] = timerSecondsRef.current;
    setModuleCompleted(true);
  }, []);

  const handleNextModule = useCallback(() => {
    const curMod = currentModuleRef.current;
    if (curMod < test.modules.length - 1) {
      const nextMod = curMod + 1;

      // Adaptive routing: when leaving Math Module 1 and an Easy variant exists,
      // score Math Module 1 to decide which Module 2 variant to serve. Threshold = 60%.
      // Skipped when the user explicitly chose a variant on the M1-complete screen
      // (`m2VariantManuallySet`), or when the test has no Easy variant.
      //
      // In typical flow the useEffect above already pre-set module2Variant to
      // the recommendation by the time the user clicks Continue, so this block
      // is a defensive fallback for paths that skip the M1-complete screen.
      if (
        test.module2Easy
        && curMod === mathM1Index
        && !m2VariantManuallySet
        && module2Variant === 'hard'
      ) {
        const m1Questions = test.modules[mathM1Index]?.questions || [];
        let correct = 0;
        m1Questions.forEach((q, qIdx) => {
          const ans = answers[`${mathM1Index}-${qIdx}`];
          if (ans === undefined || ans === null) return;
          if (q.type === 'fill-in') {
            const expected = String(q.correctAnswer).trim();
            const given = String(ans).trim();
            // Allow simple numeric equivalence (e.g., "3" === "3.0")
            if (expected === given) { correct++; return; }
            const en = parseFloat(expected); const gn = parseFloat(given);
            if (!isNaN(en) && !isNaN(gn) && Math.abs(en - gn) < 1e-9) correct++;
          } else if (ans === q.correctAnswer) {
            correct++;
          }
        });
        const pct = m1Questions.length > 0 ? correct / m1Questions.length : 0;
        if (pct < M2_ROUTING_THRESHOLD) {
          setModule2Variant('easy');
        }
      }

      setCurrentModule(nextMod);
      setCurrentQuestion(0);
      setMarkedForReview([]);
      setEliminatedChoices({});
      setModuleCompleted(false);
      setResumeTimeRemaining(null);
      questionStartTime.current = Date.now();
      prevQuestion.current = { module: nextMod, question: 0 };
    } else {
      setTestCompleted(true);
    }
  }, [test.modules.length, test.module2Easy, test.modules, mathM1Index, module2Variant, m2VariantManuallySet, answers]);

  const moduleCompletedRef = useRef(false);
  useEffect(() => { moduleCompletedRef.current = moduleCompleted; }, [moduleCompleted]);

  const handleTimeUp = useCallback(() => {
    if (moduleCompletedRef.current) return; // Guard against double-fire with manual submit
    moduleTimeRemaining.current[currentModuleRef.current] = 0;
    setModuleCompleted(true);
  }, []);

  const handlePauseToggle = () => {
    setIsPaused(p => {
      if (!p) setShowCalculator(false); // close calculator when pausing
      return !p;
    });
  };

  // Switch the active Module 2 variant from the inline switcher rendered
  // above the M2 question grid. The variant determines which question set
  // `effectiveModules` swaps in, so switching mid-module makes the existing
  // M2 answers point at a different question (the same `${modIdx}-${qIdx}`
  // key now refers to a Hard-variant question instead of Easy, or vice
  // versa). Clearing the M2 keys is the safe move; we confirm first when
  // any are present so the student doesn't lose work by accident.
  const applyM2VariantSwitch = useCallback((newVariant) => {
    setModule2Variant(newVariant);
    setM2VariantManuallySet(true);
    if (mathM2Index !== undefined) {
      const prefix = `${mathM2Index}-`;
      setAnswers(prev => {
        const out = { ...prev };
        Object.keys(out).forEach(k => { if (k.startsWith(prefix)) delete out[k]; });
        return out;
      });
      setEliminatedChoices(prev => {
        const out = { ...prev };
        Object.keys(out).forEach(k => { if (k.startsWith(prefix)) delete out[k]; });
        return out;
      });
      setMarkedForReview([]);  // M2-only list at this point in the test
    }
    setCurrentQuestion(0);
  }, [mathM2Index]);

  const handleRequestM2Switch = useCallback((newVariant) => {
    if (!test.module2Easy || mathM2Index === undefined) return;
    if (newVariant === module2Variant) return;
    const prefix = `${mathM2Index}-`;
    const answerCount = Object.keys(answers).filter(k => k.startsWith(prefix)).length;
    if (answerCount === 0) {
      applyM2VariantSwitch(newVariant);
    } else {
      setPendingM2Switch({ newVariant, answerCount });
    }
  }, [test.module2Easy, mathM2Index, module2Variant, answers, applyM2VariantSwitch]);

  const handleConfirmM2Switch = useCallback(() => {
    if (!pendingM2Switch) return;
    applyM2VariantSwitch(pendingM2Switch.newVariant);
    setPendingM2Switch(null);
  }, [pendingM2Switch, applyM2VariantSwitch]);

  const handleCancelM2Switch = useCallback(() => setPendingM2Switch(null), []);

  const isDevMode = typeof window !== 'undefined' && window.location.hostname === 'localhost';

  const handleDevAutoSubmit = () => {
    if (!isDevMode) return;
    const autoAnswers = {};
    const choices = ['A', 'B', 'C', 'D'];
    effectiveModules.forEach((mod, modIdx) => {
      mod.questions.forEach((q, qIdx) => {
        const key = `${modIdx}-${qIdx}`;
        if (q.type === 'fill-in') {
          autoAnswers[key] = Math.floor(Math.random() * 20) + 1;
        } else {
          const correct = q.correctAnswer;
          const shouldGetRight = Math.random() < 0.55;
          if (shouldGetRight) {
            autoAnswers[key] = correct;
          } else {
            const wrong = choices.filter(c => c !== correct);
            autoAnswers[key] = wrong[Math.floor(Math.random() * wrong.length)];
          }
        }
        // Dev auto-submit generates ANSWERS to exercise scoring + the skill
        // diagnostic, but must NOT fabricate behavioral telemetry: random
        // usedCalculator / markedForReview / answerChanges would feed the
        // calculator-dependency, elimination, and rushing diagnostics pure
        // noise. Use neutral, deterministic values so only the right/wrong
        // signal drives the dev diagnosis. (1.9 — dev-only, localhost-gated)
        const telem = getOrCreateTelemetry(modIdx, qIdx);
        telem.timeSpent = 45; // neutral: above "rushed", below "slow"
        telem.visits = 1;
      });
    });
    setAnswers(autoAnswers);
    setCurrentModule(effectiveModules.length - 1);
    setCurrentQuestion(effectiveModules[effectiveModules.length - 1].questions.length - 1);
    setTimeout(() => setTestCompleted(true), 100);
  };

  const handleRequestEndTest = () => {
    setConfirmAction('endTest');
    setIsPaused(true);
  };

  const handleRequestLeave = () => {
    setConfirmAction('leave');
    setIsPaused(true);
  };

  const handleConfirmEndTest = useCallback(() => {
    setConfirmAction(null);
    setIsPaused(false);
    fillInSubmitRef.current?.();

    // A test ended with nothing answered is an abandon, not a result. Scoring
    // it persists an IRT-floor attempt (200/section → composite 400, 0%
    // accuracy) that becomes the dashboard's "latest result" and the next
    // real test's delta baseline.
    const answeredCount = Object.values(answersRef.current || {})
      .filter(v => v !== null && v !== undefined && v !== '').length;
    if (answeredCount === 0 && !fillInHasValueRef.current) {
      onClearProgress?.();
      showToast({ type: 'info', message: 'Test ended with no answers — this attempt was not scored.' });
      onBack?.();
      return;
    }

    const mod = currentModuleRef.current;
    const q = currentQuestionRef.current;
    const now = Date.now();
    const elapsed = (now - questionStartTime.current) / 1000;
    if (elapsed > 0 && elapsed < 3600) {
      const telemetry = getOrCreateTelemetry(mod, q);
      telemetry.timeSpent += elapsed;
    }
    moduleTimeRemaining.current[mod] = timerSecondsRef.current;
    setTestCompleted(true);
  }, [onBack, onClearProgress]);

  const handleConfirmLeave = useCallback(() => {
    setConfirmAction(null);
    setIsPaused(false);
    // Save fill-in value via ref (reads current question type and value)
    fillInSubmitRef.current?.();
    if (onSaveProgress) {
      const mod = currentModuleRef.current;
      const q = currentQuestionRef.current;
      const telemetrySnapshot = {};
      Object.entries(questionTelemetry.current).forEach(([k, v]) => {
        telemetrySnapshot[k] = {
          timeSpent: Math.round((v.timeSpent || 0) * 10) / 10,
          visits: v.visits || 0,
          answerChanges: v.answerChanges || [],
          usedCalculator: v.usedCalculator || false,
          markedForReview: v.markedForReview || false,
        };
      });
      onSaveProgress({
        currentModule: mod,
        currentQuestion: q,
        answers: answersRef.current,
        markedForReview,
        eliminatedChoices,
        isTimed,
        timeRemaining: timerSecondsRef.current,
        questionTelemetry: telemetrySnapshot,
      });
    }
    onBack();
  }, [onSaveProgress, markedForReview, eliminatedChoices, isTimed, onBack]);

  const handleCancelAction = () => {
    setConfirmAction(null);
    setIsPaused(false);
  };

  // Calculate score for current module
  const calculateModuleScore = () => {
    let correct = 0;
    questions.forEach((q, idx) => {
      const key = `${currentModule}-${idx}`;
      if (isAnswerCorrect(q, answers[key])) correct++;
    });
    return correct;
  };

  // Calculate total score
  const calculateTotalScore = () => {
    let total = 0;
    effectiveModules.forEach((mod, modIdx) => {
      mod.questions.forEach((q, qIdx) => {
        if (isAnswerCorrect(q, answers[`${modIdx}-${qIdx}`])) total++;
      });
    });
    return total;
  };

  // Get score level description
  const getScoreLevel = (scaledScore) => {
    if (scaledScore >= 750) return { level: 'Excellent', color: colors.semantic.success };
    if (scaledScore >= 650) return { level: 'Good', color: colors.semantic.success };
    if (scaledScore >= 550) return { level: 'Average', color: colors.semantic.warning };
    if (scaledScore >= 450) return { level: 'Below Average', color: colors.accent.orange };
    return { level: 'Needs Improvement', color: colors.semantic.error };
  };

  // Module completion screen
  if (moduleCompleted && !testCompleted) {
    const score = calculateModuleScore();
    const isLastModule = currentModule === effectiveModules.length - 1;
    const remainingModules = effectiveModules.length - currentModule - 1;

    return (
      <div style={{ maxWidth: '600px', margin: '0 auto', padding: '40px 20px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '16px', color: colors.text.primary }}>
          {module.title} Complete
        </h2>
        <div style={{
          fontSize: '48px',
          fontWeight: '700',
          color: colors.semantic.success,
          marginBottom: '8px'
        }}>
          {score}/{questions.length}
        </div>
        <p style={{ color: colors.text.muted, marginBottom: '24px' }}>
          {Math.round((score / questions.length) * 100)}% correct
        </p>

        {!isLastModule && (
          <p style={{
            color: colors.text.secondary,
            fontSize: '14px',
            marginBottom: '32px',
          }}>
            {remainingModules === 1
              ? 'One more module to go before your final score.'
              : `${remainingModules} modules remaining before your final score.`}
          </p>
        )}

        <button
          onClick={handleNextModule}
          style={{
            padding: '14px 32px',
            background: colors.text.primary,
            color: colors.text.inverse,
            border: 'none',
            borderRadius: radius.sm,
            fontSize: '16px',
            fontWeight: '600',
            cursor: 'pointer'
          }}
        >
          {isLastModule ? 'See Final Results' : `Continue to Module ${currentModule + 2}`}
        </button>
      </div>
    );
  }

  // Review mode screen - shows all questions with explanations
  // IMPORTANT: This must come BEFORE testCompleted check so review mode can render
  if (reviewMode) {
    const reviewMod = effectiveModules[reviewModule];
    const reviewQuestions = reviewMod?.questions || [];
    const reviewQ = reviewQuestions[reviewQuestion];
    const reviewKey = `${reviewModule}-${reviewQuestion}`;
    const userAnswer = answers[reviewKey];

    // Check if answer is correct
    const isCorrect = reviewQ ? isAnswerCorrect(reviewQ, userAnswer) : false;

    // Build flat list of all questions for navigation
    const allQuestions = [];
    effectiveModules.forEach((mod, modIdx) => {
      mod.questions.forEach((q, qIdx) => {
        const key = `${modIdx}-${qIdx}`;
        const ans = answers[key];
        allQuestions.push({ modIdx, qIdx, correct: isAnswerCorrect(q, ans), answered: ans !== undefined });
      });
    });

    const currentFlatIndex = allQuestions.findIndex(
      q => q.modIdx === reviewModule && q.qIdx === reviewQuestion
    );

    const handleReviewNav = (direction) => {
      const newIndex = currentFlatIndex + direction;
      if (newIndex >= 0 && newIndex < allQuestions.length) {
        const target = allQuestions[newIndex];
        setReviewModule(target.modIdx);
        setReviewQuestion(target.qIdx);
      }
    };

    const handleReviewJump = (modIdx, qIdx) => {
      setReviewModule(modIdx);
      setReviewQuestion(qIdx);
    };

    const userAnswerDisplay = userAnswer !== undefined
      ? (reviewQ?.type === 'fill-in' ? userAnswer : reviewQ?.choices?.find(c => c.id === userAnswer)?.text || userAnswer)
      : 'Not answered';
    const correctAnswerDisplay = reviewQ?.type === 'fill-in'
      ? reviewQ.correctAnswer
      : reviewQ?.choices?.find(c => c.id === reviewQ.correctAnswer)?.text;
    const difficultyColor = reviewQ?.difficulty === 'hard' ? colors.semantic.error : reviewQ?.difficulty === 'medium' ? colors.semantic.warning : colors.semantic.success;
    const difficultyBg = reviewQ?.difficulty === 'hard' ? colors.semantic.errorLight : reviewQ?.difficulty === 'medium' ? colors.semantic.warningBg : colors.semantic.successLight;

    return (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', background: '#F5F5F7', overflow: 'hidden' }}>

        {/* Stale-content notice (legacy attempts only, dismissible per-attempt) */}
        {showSnapshotNotice && (
          <div
            role="status"
            style={{
              flexShrink: 0,
              background: '#FEF3C7',
              borderBottom: '1px solid #F59E0B',
              color: '#78350F',
              padding: isMobile ? '10px 14px' : '12px 24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '12px',
              fontSize: isMobile ? '12px' : '13px',
              fontWeight: 500,
            }}
          >
            <span>
              Questions have been updated since this attempt. Original problems are not available for review — what you see may differ from what you answered.
            </span>
            <button
              onClick={dismissSnapshotNotice}
              aria-label="Dismiss notice"
              style={{
                flexShrink: 0,
                background: 'transparent',
                border: '1px solid #B45309',
                color: '#78350F',
                borderRadius: '8px',
                padding: '4px 10px',
                fontSize: '12px',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              Dismiss
            </button>
          </div>
        )}

        {/* ── TOP BAR: Back + Progress + Nav ─────────────────────── */}
        <div style={{
          flexShrink: 0,
          background: 'rgba(255, 255, 255, 0.85)',
          backdropFilter: 'saturate(180%) blur(20px)',
          WebkitBackdropFilter: 'saturate(180%) blur(20px)',
          borderBottom: `1px solid rgba(0, 0, 0, 0.05)`,
          padding: isMobile ? '8px 16px' : '10px 28px',
          display: 'flex', alignItems: 'center', gap: isMobile ? '8px' : '16px',
          overflowX: 'auto',
          WebkitOverflowScrolling: 'touch',
          zIndex: 10,
        }}>
          <button
            onClick={() => initialReviewModule !== null ? onBack?.() : setReviewMode(false)}
            style={{
              padding: isMobile ? '6px 10px' : '8px 16px', background: 'rgba(0,0,0,0.04)', border: `none`,
              borderRadius: '12px', fontSize: isMobile ? '12px' : '13px', fontWeight: typography.weights.semibold,
              color: colors.text.primary, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px',
              transition: `all ${transitions.fast}`, flexShrink: 0,
            }}
            onMouseOver={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.08)'}
            onMouseOut={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.04)'}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 3L5 7l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            {!isMobile && "Results"}
          </button>

          <div style={{ width: '1px', height: '20px', background: 'rgba(0,0,0,0.1)', flexShrink: 0 }} />

          {/* Module tabs */}
          <div style={{ display: 'flex', gap: '4px', flexShrink: 0 }}>
            {effectiveModules.map((mod, modIdx) => {
              const modQuestions = mod.questions.map((q, qIdx) => {
                const key = `${modIdx}-${qIdx}`;
                const ans = answers[key];
                return { correct: isAnswerCorrect(q, ans), answered: ans !== undefined };
              });
              const correctCount = modQuestions.filter(q => q.answered && q.correct).length;
              const isActiveModule = modIdx === reviewModule;
              return (
                <button
                  key={modIdx}
                  onClick={() => { setReviewModule(modIdx); setReviewQuestion(0); }}
                  style={{
                    padding: isMobile ? '4px 10px' : '6px 14px', borderRadius: '12px', border: 'none',
                    background: isActiveModule ? colors.text.primary : 'transparent',
                    color: isActiveModule ? colors.text.inverse : colors.text.secondary,
                    fontSize: isMobile ? '12px' : '13px', fontWeight: typography.weights.semibold,
                    cursor: 'pointer', whiteSpace: 'nowrap', transition: `all ${transitions.fast}`
                  }}
                >
                  M{modIdx + 1} <span style={{ opacity: 0.7, marginLeft: '2px', fontWeight: 'normal' }}>({correctCount}/{mod.questions.length})</span>
                </button>
              );
            })}
          </div>

          <div style={{ width: '1px', height: '20px', background: 'rgba(0,0,0,0.1)', flexShrink: 0 }} />

          {/* Question pills */}
          <div style={{ display: 'flex', gap: '6px', flex: 1, overflowX: 'auto', paddingRight: '10px', alignItems: 'center' }}>
            {(() => {
              const currentMod = effectiveModules[reviewModule];
              return currentMod.questions.map((q, qIdx) => {
                const key = `${reviewModule}-${qIdx}`;
                const ans = answers[key];
                const correct = isAnswerCorrect(q, ans);
                const answered = ans !== undefined;
                const isActive = qIdx === reviewQuestion;
                
                let bgColor = !answered ? 'rgba(0,0,0,0.06)' : correct ? colors.semantic.success : colors.semantic.error;
                let textColor = !answered ? colors.text.secondary : colors.text.inverse;
                
                return (
                  <button
                    key={qIdx}
                    onClick={() => handleReviewJump(reviewModule, qIdx)}
                    style={{
                      width: isMobile ? '28px' : '32px', height: isMobile ? '28px' : '32px', borderRadius: '10px',
                      border: isActive ? `2px solid ${colors.text.primary}` : '2px solid transparent',
                      background: bgColor, color: textColor,
                      fontSize: isMobile ? '11px' : '12px', fontWeight: typography.weights.bold,
                      cursor: 'pointer', transition: `all ${transitions.fast}`,
                      transform: isActive ? 'scale(1.08)' : 'scale(1)',
                      flexShrink: 0,
                      boxShadow: isActive ? '0 2px 8px rgba(0,0,0,0.1)' : 'none',
                    }}
                  >
                    {qIdx + 1}
                  </button>
                );
              });
            })()}
          </div>

          {/* Legend */}
          {!isMobile && (
            <div style={{ display: 'flex', gap: '12px', fontSize: '12px', flexShrink: 0, fontWeight: '500' }}>
              {[
                { color: colors.semantic.success, label: 'Correct' },
                { color: colors.semantic.error, label: 'Wrong' },
                { color: 'rgba(0,0,0,0.15)', label: 'Skipped' },
              ].map(({ color, label }) => (
                <span key={label} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: color }} />
                  <span style={{ color: colors.text.secondary }}>{label}</span>
                </span>
              ))}
            </div>
          )}
        </div>

        {/* ── WORKSPACE ──────────────────────────────────── */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', padding: isMobile ? 0 : '16px', gap: isMobile ? 0 : '16px' }}>

          {/* DESKTOP RIGHT PANE TOGGLE (Apple Segmented Control Style) */}
          {!isMobile && (
            <div style={{ display: 'flex', justifyContent: 'center', flexShrink: 0 }}>
              <div style={{
                display: 'flex', background: 'rgba(118, 118, 128, 0.12)', borderRadius: '10px', padding: '3px',
              }}>
                {['explanation', 'both', 'ai'].map(pane => (
                  <button
                    key={pane}
                    onClick={() => setReviewRightPane(pane)}
                    style={{
                      padding: '6px 20px', 
                      background: reviewRightPane === pane ? colors.surface.white : 'transparent',
                      border: 'none', 
                      borderRadius: '7px',
                      color: reviewRightPane === pane ? colors.text.primary : colors.text.secondary,
                      fontSize: '13px', fontWeight: typography.weights.semibold, textTransform: 'capitalize',
                      boxShadow: reviewRightPane === pane ? '0 3px 8px rgba(0,0,0,0.12), 0 3px 1px rgba(0,0,0,0.04)' : 'none',
                      cursor: 'pointer', transition: `all ${transitions.fast}`,
                    }}
                  >
                    {pane === 'ai' ? 'AI Tutor' : pane}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div style={{
            flex: 1, display: 'flex', overflow: 'hidden',
            flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? 0 : '16px'
          }}>
            {/* LEFT / QUESTION PANE */}
            {(!isMobile || reviewTab === 'question') && (
              <div style={{
                flex: isMobile ? 1 : '1 1 0%',
                maxWidth: isMobile ? 'none' : '540px',
                minWidth: isMobile ? 'none' : '340px',
                borderRadius: isMobile ? 0 : '20px',
                boxShadow: isMobile ? 'none' : '0 4px 20px rgba(0,0,0,0.03)',
                border: isMobile ? 'none' : `1px solid rgba(0,0,0,0.06)`,
                overflowY: 'auto',
                background: colors.surface.white,
                padding: isMobile ? '16px' : '32px',
                display: 'flex', flexDirection: 'column'
              }}>
                {/* ── CONTEXT ZONE: Status + Question ──────────────────── */}
                <div style={{
                  display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap'
                }}>
                  {/* Correctness badge */}
                  <div style={{
                    display: 'flex', alignItems: 'center', gap: '8px',
                    padding: '6px 12px', borderRadius: radius.full,
                    background: !userAnswer ? colors.surface.gray : isCorrect ? colors.semantic.successLight : colors.semantic.errorLight,
                    border: `1px solid ${!userAnswer ? colors.surface.grayDark : isCorrect ? colors.semantic.success : colors.semantic.error}`,
                  }}>
                    <div style={{
                      width: '18px', height: '18px', borderRadius: '50%',
                      background: !userAnswer ? colors.text.muted : isCorrect ? colors.semantic.success : colors.semantic.error,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: colors.text.inverse, fontSize: '10px',
                    }}>
                      {!userAnswer ? '?' : isCorrect ? <CheckIcon size={10} color={colors.text.inverse} /> : <CrossIcon size={10} color={colors.text.inverse} />}
                    </div>
                    <span style={{
                      fontSize: '12px', fontWeight: typography.weights.semibold,
                      color: !userAnswer ? colors.text.secondary : isCorrect ? colors.semantic.success : colors.semantic.error,
                    }}>
                      {!userAnswer ? 'Skipped' : isCorrect ? 'Correct' : 'Incorrect'}
                    </span>
                  </div>

                  {/* Question number */}
                  <span style={{
                    fontSize: '12px', fontWeight: typography.weights.semibold,
                    color: colors.text.muted,
                  }}>
                    Q{currentFlatIndex + 1} of {allQuestions.length}
                  </span>

                  {/* Difficulty chip */}
                  {reviewQ?.difficulty && (
                    <span style={{
                      fontSize: '10px', fontWeight: typography.weights.bold,
                      padding: '2px 8px', borderRadius: radius.full,
                      background: difficultyBg, color: difficultyColor,
                      letterSpacing: '0.02em',
                    }}>
                      {reviewQ.difficulty.charAt(0).toUpperCase() + reviewQ.difficulty.slice(1)}
                    </span>
                  )}

                  {/* Skill chips */}
                  {reviewQ?.skills?.slice(0, 2).map(skill => (
                    <span key={skill} style={{
                      fontSize: '10px', fontWeight: typography.weights.medium,
                      padding: '2px 8px', borderRadius: radius.full,
                      background: colors.surface.gray, color: colors.text.muted,
                    }}>
                      {skill.replace(/-/g, ' ')}
                    </span>
                  ))}
                </div>

                {/* Answer summary */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '13px', marginBottom: '20px', padding: '12px', background: colors.surface.offWhite, borderRadius: radius.md, border: `1px solid ${colors.surface.grayDark}` }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: colors.text.muted }}>Your Answer:</span>
                    <span style={{ fontWeight: typography.weights.semibold, color: isCorrect ? colors.semantic.success : colors.semantic.error, textAlign: 'right' }}>{userAnswerDisplay}</span>
                  </div>
                  {!isCorrect && userAnswer !== undefined && (
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: colors.text.muted }}>Correct Answer:</span>
                      <span style={{ fontWeight: typography.weights.semibold, color: colors.semantic.success, textAlign: 'right' }}>{correctAnswerDisplay}</span>
                    </div>
                  )}
                </div>

                {/* Passage(s) — for R&W questions, with italic/underline/blank markup */}
                {reviewQ?.passage && (
                  <HighlightablePassage
                    text={reviewQ.passage}
                    highlights={[]}
                    hidden={false}
                    onAddHighlight={() => {}}
                    onRemoveHighlight={() => {}}
                  />
                )}
                {reviewQ?.passages && Array.isArray(reviewQ.passages) && (
                  <div className="rw-passage-stack">
                    {reviewQ.passages.map((p, i) => (
                      <div key={i}>
                        <div className="rw-passage-label">{p.label || `Text ${i + 1}`}</div>
                        <HighlightablePassage
                          text={p.text}
                          highlights={[]}
                          hidden={false}
                          onAddHighlight={() => {}}
                          onRemoveHighlight={() => {}}
                        />
                      </div>
                    ))}
                  </div>
                )}
                {reviewQ?.studentNotes && (
                  <div className="rw-passage">
                    {reviewQ.studentNotes.intro && (
                      <div style={{ marginBottom: '0.5rem' }}>{reviewQ.studentNotes.intro}</div>
                    )}
                    <ul style={{ paddingLeft: '1.25rem', margin: '0.5rem 0' }}>
                      {reviewQ.studentNotes.bullets.map((b, i) => (
                        <li key={i} style={{ marginBottom: '0.25rem' }}>
                          <MathText text={b} />
                        </li>
                      ))}
                    </ul>
                    {reviewQ.studentNotes.goal && (
                      <div style={{ marginTop: '0.5rem', fontStyle: 'italic' }}>
                        <MathText text={reviewQ.studentNotes.goal} />
                      </div>
                    )}
                  </div>
                )}

                {/* Question Text */}
                <div style={{
                  marginBottom: '16px', fontSize: '15px', lineHeight: '1.7',
                  color: colors.text.primary, fontFamily: SAT_TYPOGRAPHY.questionFont,
                }}>
                  {Array.isArray(reviewQ?.question) || (reviewQ?.question && typeof reviewQ.question === 'object')
                    ? <QuestionRenderer content={reviewQ.question} />
                    : <MathText text={reviewQ?.question || ''} />
                  }
                </div>

                {/* Formula if present */}
                {reviewQ?.questionFormula && renderFormula(reviewQ.questionFormula)}

                {/* Diagram */}
                {reviewQ?.diagram && (
                  <div style={{
                    marginBottom: '16px', padding: '12px',
                    background: colors.surface.offWhite, borderRadius: radius.md,
                    border: `1px solid ${colors.surface.grayDark}`, display: 'flex', justifyContent: 'center',
                  }}>
                    <QuestionDiagram type={reviewQ.diagram.type} params={reviewQ.diagram.params} />
                  </div>
                )}

                {/* Table */}
                {reviewQ?.questionTable && (
                  <div style={{ marginBottom: '16px', display: 'flex', justifyContent: 'center' }}>
                    <table style={{ borderCollapse: 'collapse', fontSize: '14px' }}>
                      <thead>
                        <tr>
                          {reviewQ.questionTable.headers.map((header, i) => (
                            <th key={i} style={{
                              border: `1px solid ${colors.surface.grayMedium}`,
                              padding: '6px 14px', background: colors.surface.gray, fontWeight: typography.weights.semibold,
                            }}>
                              <MathText text={header} />
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {reviewQ.questionTable.rows.map((row, i) => (
                          <tr key={i}>
                            {row.map((cell, j) => (
                              <td key={j} style={{
                                border: `1px solid ${colors.surface.grayMedium}`,
                                padding: '6px 14px', textAlign: 'center',
                              }}>
                                <MathText text={cell} />
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* Answer choices */}
                {reviewQ?.type === 'multiple-choice' && reviewQ?.choices && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', flex: 1 }}>
                    {reviewQ.choices.map((choice) => {
                      const isUserChoice = userAnswer === choice.id;
                      const isCorrectChoice = reviewQ.correctAnswer === choice.id;
                      let bgColor = colors.surface.offWhite;
                      let borderColor = colors.surface.grayDark;
                      if (isCorrectChoice) { bgColor = colors.semantic.successLight; borderColor = colors.semantic.success; }
                      else if (isUserChoice && !isCorrect) { bgColor = colors.semantic.errorLight; borderColor = colors.semantic.error; }

                      return (
                        <div key={choice.id} style={{
                          padding: '10px 14px', borderRadius: radius.md,
                          border: `1.5px solid ${borderColor}`, background: bgColor,
                          display: 'flex', alignItems: 'center', gap: '12px',
                        }}>
                          <div style={{
                            width: '24px', height: '24px', borderRadius: '4px',
                            background: isCorrectChoice ? colors.semantic.success : isUserChoice ? colors.semantic.error : colors.surface.grayMedium,
                            color: colors.text.inverse, display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontWeight: typography.weights.semibold, fontSize: '12px', flexShrink: 0,
                          }}>
                            {choice.id}
                          </div>
                          <div style={{ flex: 1, fontSize: '14px', color: colors.text.primary }}>
                            {renderChoice(choice)}
                          </div>
                          {isCorrectChoice && (
                            <CheckIcon size={14} color={colors.semantic.success} />
                          )}
                          {isUserChoice && !isCorrect && (
                            <CrossIcon size={14} color={colors.semantic.error} />
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* Fill-in display */}
                {reviewQ?.type === 'fill-in' && (
                  <div style={{
                    padding: '16px', background: colors.semantic.successLight,
                    borderRadius: '16px', border: `1px solid rgba(0,0,0,0.05)`,
                    textAlign: 'center', flex: 1, boxShadow: '0 4px 12px rgba(0,0,0,0.02)'
                  }}>
                    <p style={{ fontSize: '11px', fontWeight: typography.weights.bold, color: colors.semantic.success, textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '6px' }}>
                      Correct Answer
                    </p>
                    <p style={{ fontSize: '28px', fontWeight: typography.weights.bold, color: colors.semantic.success, letterSpacing: '-0.02em' }}>
                      {reviewQ.correctAnswer}
                    </p>
                    {!isCorrect && userAnswer !== undefined && (
                      <p style={{ fontSize: '14px', color: colors.semantic.error, marginTop: '8px', fontWeight: '500' }}>
                        Your answer: <strong>{userAnswer}</strong>
                      </p>
                    )}
                  </div>
                )}
                
                {/* Empty block to pad bottom for the floating navigation */}
                <div style={{ height: '80px', flexShrink: 0 }}></div>

              </div>
            )}

            {/* RIGHT / EXPLANATION + AI TUTOR PANE */}
            {(!isMobile || reviewTab !== 'question') && (
              <div style={{
                flex: '1.2 1 0%', minWidth: 0, display: 'flex', flexDirection: reviewRightPane === 'both' && !isMobile ? 'row' : 'column',
                overflow: 'hidden', background: 'transparent', gap: isMobile ? 0 : '16px'
              }}>
                {/* Explanation */}
                {(!isMobile && (reviewRightPane === 'explanation' || reviewRightPane === 'both')) || (isMobile && reviewTab === 'explanation') ? (
                  <div style={{
                    flex: reviewRightPane === 'both' ? 1.2 : 1, overflowY: 'auto', 
                    padding: isMobile ? '16px' : '32px',
                    background: colors.surface.white,
                    borderRadius: isMobile ? 0 : '20px',
                    boxShadow: isMobile ? 'none' : '0 4px 20px rgba(0,0,0,0.03)',
                    border: isMobile ? 'none' : `1px solid rgba(0,0,0,0.06)`,
                  }}>
                    <div style={{
                      display: 'flex', alignItems: 'center', gap: '12px',
                      marginBottom: '24px', paddingBottom: '16px',
                      borderBottom: `1px solid rgba(0,0,0,0.06)`,
                    }}>
                      <div style={{
                        width: '36px', height: '36px', borderRadius: '12px',
                        background: colors.semantic.info, display: 'flex', alignItems: 'center', justifyContent: 'center',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
                      }}>
                        <LightBulbIcon size={20} color={colors.text.inverse} />
                      </div>
                      <h3 style={{
                        fontSize: typography.sizes.lg, fontWeight: typography.weights.bold,
                        color: colors.text.primary, margin: 0, letterSpacing: '-0.01em'
                      }}>
                        Solution Explanation
                      </h3>
                    </div>
                    {reviewQ?.explanation ? (
                      <SolutionExplanation explanation={reviewQ.explanation} isCorrect={isCorrect} />
                    ) : (
                      <p style={{ color: colors.text.muted, fontStyle: 'italic', fontSize: typography.sizes.sm }}>
                        No explanation available for this question.
                      </p>
                    )}
                  </div>
                ) : null}

                {/* AI Tutor Chat */}
                {(!isMobile && (reviewRightPane === 'ai' || reviewRightPane === 'both')) || (isMobile && reviewTab === 'ai') ? (
                  <div style={{
                    flex: 1, display: 'flex', flexDirection: 'column',
                    background: 'transparent',
                    borderRadius: isMobile ? 0 : '20px',
                    boxShadow: isMobile ? 'none' : '0 4px 20px rgba(0,0,0,0.03)',
                    border: isMobile ? 'none' : `1px solid rgba(0,0,0,0.06)`,
                    overflow: 'hidden'
                  }}>
                    <AiTutorChat
                        isOpen={true}
                        onClose={() => {}}
                        moduleId={test.id}
                        lessonId={`review-${reviewModule}-${reviewQuestion}`}
                        lessonTitle={`${test.title} - Question ${currentFlatIndex + 1}`}
                        isVideoLesson={false}
                        isPracticeQuestion={true}
                        skillProgress={skillProgress}
                        testDate={user?.testDate}
                        user={user}
                        practiceTestResults={practiceTestResults}
                        practiceContext={{
                          question: reviewQ?.question || '',
                          choices: reviewQ?.choices || [],
                          hint: reviewQ?.hint || '',
                          answerRevealed: true,
                          correctAnswer: reviewQ?.type === 'fill-in'
                            ? reviewQ?.correctAnswer
                            : reviewQ?.choices?.find(c => c.id === reviewQ?.correctAnswer)?.text || reviewQ?.correctAnswer,
                          explanation: reviewQ?.explanation || '',
                          skills: reviewQ?.skills || (reviewQ?.skill ? [reviewQ.skill] : []),
                          // R&W stimulus + classification (undefined for math items → tutor stays math)
                          section: reviewQ?.section || 'math',
                          domain: reviewQ?.domain,
                          passage: reviewQ?.passage,
                          passages: reviewQ?.passages,
                          studentNotes: reviewQ?.studentNotes,
                          questionTable: reviewQ?.questionTable
                        }}
                        embedded={true}
                        headerCompact={true}
                        standalone={false}
                      />
                  </div>
                ) : null}
              </div>
            )}
          </div>

          {/* ── FLOATING NAVIGATION PILL ────────────────────────────────── */}
          <div style={{
            position: 'absolute',
            bottom: isMobile ? '24px' : '32px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '16px',
            background: 'rgba(255, 255, 255, 0.85)',
            backdropFilter: 'saturate(180%) blur(24px)',
            WebkitBackdropFilter: 'saturate(180%) blur(24px)',
            padding: '8px 12px',
            borderRadius: '100px', 
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.04)',
            border: `1px solid rgba(255, 255, 255, 0.5)`,
            zIndex: 100,
          }}>
            <button
              onClick={() => handleReviewNav(-1)}
              disabled={currentFlatIndex === 0}
              style={{
                padding: '10px',
                background: currentFlatIndex === 0 ? 'transparent' : colors.surface.white,
                color: currentFlatIndex === 0 ? 'rgba(0,0,0,0.2)' : colors.text.primary,
                border: 'none',
                borderRadius: '50%', 
                width: '40px', height: '40px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: currentFlatIndex === 0 ? 'not-allowed' : 'pointer',
                transition: `all ${transitions.fast}`,
                boxShadow: currentFlatIndex === 0 ? 'none' : '0 2px 8px rgba(0,0,0,0.06)',
              }}
            >
              <svg width="18" height="18" viewBox="0 0 14 14" fill="none"><path d="M9 3L5 7l4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <div style={{ textAlign: 'center', minWidth: '60px' }}>
              <span style={{ color: colors.text.primary, fontSize: '14px', fontWeight: typography.weights.bold }}>
                {currentFlatIndex + 1}
              </span>
              <span style={{ color: colors.text.secondary, fontSize: '13px', fontWeight: '500' }}>
                <span style={{ opacity: 0.5, margin: '0 4px' }}>/</span>{allQuestions.length}
              </span>
            </div>
            <button
              onClick={() => handleReviewNav(1)}
              disabled={currentFlatIndex === allQuestions.length - 1}
              style={{
                padding: '10px',
                background: currentFlatIndex === allQuestions.length - 1 ? 'transparent' : colors.text.primary,
                color: currentFlatIndex === allQuestions.length - 1 ? 'rgba(0,0,0,0.2)' : colors.text.inverse,
                border: 'none', 
                borderRadius: '50%',
                width: '40px', height: '40px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: currentFlatIndex === allQuestions.length - 1 ? 'not-allowed' : 'pointer',
                transition: `all ${transitions.fast}`,
                boxShadow: currentFlatIndex === allQuestions.length - 1 ? 'none' : '0 4px 12px rgba(0,0,0,0.15)',
              }}
            >
              <svg width="18" height="18" viewBox="0 0 14 14" fill="none"><path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>

        </div>
      </div>
    );
  }
  // Test completion screen - TestResults with direct navigation to Study Plan tab
  if (testCompleted) {
    return (
      // App.jsx's #main-content locks to `height: 100vh; overflow: hidden`
      // while view === 'takingTest' (required so the active-test
      // `.test-session-shell` two-pane layout can manage its own scroll).
      // When the test ends we stay on the same view but flip to rendering
      // <TestResults>, whose content runs taller than the viewport. Without
      // our own scroll container here, the parent clips everything below
      // the fold and the student can't reach 'Diagnostic Insights' or any
      // tab content past the first ~900 px. Take the full 100vh from the
      // locked parent and scroll inside this wrapper.
      <div style={{
        height: '100vh',
        overflowY: 'auto',
        boxSizing: 'border-box',
        background: '#F5F5F7',
        backgroundImage: 'radial-gradient(circle at 50% 0%, rgba(255,255,255,0.8) 0%, rgba(245,245,247,0) 100%)',
        padding: isMobile ? '16px' : '32px'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <TestResults
            test={test}
            answers={answers}
            diagnosticData={diagnosticDataRef.current}
            diagnosticReport={diagnosticReportRef.current}
            practiceTestResults={practiceTestResults}
            aiDiagnosticState={aiDiagnosticState}
            onRetryAiDiagnostic={retryAiDiagnostic}
            onGoToStudyPlan={onGoToStudyPlan}
            onBack={onBack}
            user={user}
            saveStatus={resultSaveStatus}
            onRetrySave={onRetrySave}
            onRetake={() => {
              setCurrentModule(0);
              setCurrentQuestion(0);
              setAnswers({});
              setMarkedForReview([]);
              setEliminatedChoices({});
              setModuleCompleted(false);
              setTestCompleted(false);
              setResultSaved(false);
              setSavedStudyPlan(null);
              setAiDiagnosticState({ status: 'idle', narrative: null, error: null });
              diagnosticNarrativeAttempted.current = false;
              diagnosticDataRef.current = null;
              diagnosticReportRef.current = null;
              attemptTimestampRef.current = null;
              questionTelemetry.current = {};
              navigationHistory.current = [];
            }}
            onReview={() => {
              setReviewMode(true);
              setReviewModule(0);
              setReviewQuestion(0);
            }}
            onReviewModule={(moduleIndex) => {
              setReviewMode(true);
              setReviewModule(moduleIndex);
              setReviewQuestion(0);
            }}
            savedStudyPlan={savedStudyPlan}
          />
        </div>
      </div>
    );
  }

  const currentAnswer = answers[`${currentModule}-${currentQuestion}`];
  const isMarked = markedForReview.includes(currentQuestion);

  return (
    <div className="test-session-shell" data-section={isReadingWriting ? 'reading-writing' : 'math'}>
      {/* Header */}
      <div className="test-session-header">
        <div className="header-left">
          <button
            onClick={handleRequestLeave}
            className="btn-icon-subtle"
            style={{ width: 'auto', padding: '0 0.75rem', fontSize: '0.875rem', fontWeight: 500 }}
          >
            ← Exit
          </button>
          {!isMobile && <div className="header-title">{test.title}</div>}
        </div>

        <div className="header-center">
          <div className="header-title">{module.title}</div>
          <div className="header-subtitle">Question {currentQuestion + 1} of {questions.length}</div>
        </div>

        <div className="header-right">
          {/* Calculator Button — Math only */}
          {!isReadingWriting && (
            <button
              className="btn-launch"
              onClick={() => {
                const telemetry = getOrCreateTelemetry(currentModuleRef.current, currentQuestionRef.current);
                telemetry.usedCalculator = true;
                setShowCalculator(true);
              }}
              style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="4" y="2" width="16" height="20" rx="2" />
                <line x1="8" y1="6" x2="16" y2="6" />
                <line x1="8" y1="10" x2="10" y2="10" />
                <line x1="14" y1="10" x2="16" y2="10" />
                <line x1="8" y1="14" x2="10" y2="14" />
                <line x1="8" y1="18" x2="16" y2="18" />
                <line x1="14" y1="18" x2="16" y2="18" />
              </svg>
              Calculator
            </button>
          )}
          {!isReadingWriting && (
            <button
              className="btn-launch"
              onClick={() => setShowReference(true)}
              style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
              </svg>
              Reference
            </button>
          )}
          <button
            onClick={handlePauseToggle}
            className="btn-ghost-blue"
          >
            {isPaused ? '▶ Resume' : '⏸ Pause'}
          </button>
          {isTimed ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <button
                onClick={() => setShowTimer(!showTimer)}
                className="btn-ghost-blue"
              >
                {showTimer ? 'Hide Timer' : 'Show Timer'}
              </button>
              <div style={{ display: showTimer ? undefined : 'none' }}>
                <Timer
                  key={currentModule}
                  initialMinutes={module.timeLimit || 35}
                  onTimeUp={handleTimeUp}
                  isPaused={isPaused}
                  timeRef={timerSecondsRef}
                  initialSeconds={resumeTimeRemaining}
                />
              </div>
            </div>
          ) : (
            <span style={{
              padding: '0.25rem 0.75rem',
              background: 'var(--color-success-100)',
              color: 'var(--color-success-600)',
              borderRadius: '9999px',
              fontSize: isMobile ? '0.75rem' : '0.875rem',
              fontWeight: 700,
              whiteSpace: 'nowrap'
            }}>
              {isMobile ? 'Untimed' : 'Untimed Mode'}
            </span>
          )}
          {!isMobile && (
            <button
              onClick={handleRequestEndTest}
              className="btn-ghost-blue"
              style={{ color: 'var(--color-error-600)' }}
            >
              End Test
            </button>
          )}
          {isDevMode && (
            <button
              onClick={handleDevAutoSubmit}
              className="btn-launch"
              style={{ background: '#7c3aed' }}
            >
              DEV: Auto-Submit
            </button>
          )}
        </div>
      </div>

      {/* Module 2 variant switcher — surfaces only on Math Module 2 when the
          test ships an Easy variant. Active variant tile is highlighted; the
          other is clickable. Click triggers handleRequestM2Switch, which
          confirms first if there are answers to discard. */}
      {currentModule === mathM2Index && !!test.module2Easy && !testCompleted && !moduleCompleted && (
        <div style={{
          maxWidth: '1100px',
          margin: '12px auto 0',
          padding: '0 16px',
          display: 'flex',
          gap: '10px',
          alignItems: 'stretch',
        }}>
          {[
            {
              variant: 'easy',
              label: 'Module 2 (Easy)',
              blurb: 'Eases up after Module 1. Confidence-builders, fewer traps.',
            },
            {
              variant: 'hard',
              label: 'Module 2 (Hard)',
              blurb: 'Full College Board Module 2 Hard calibration.',
            },
          ].map(({ variant, label, blurb }) => {
            const active = module2Variant === variant;
            const isRecommended = recommendedM2Variant === variant;
            return (
              <button
                key={variant}
                type="button"
                onClick={active ? undefined : () => handleRequestM2Switch(variant)}
                aria-pressed={active}
                disabled={active}
                style={{
                  flex: 1,
                  padding: '10px 14px',
                  textAlign: 'left',
                  background: active ? 'rgba(234, 88, 12, 0.06)' : '#fff',
                  border: `2px solid ${active ? colors.focus : '#e5e7eb'}`,
                  borderRadius: radius.md,
                  cursor: active ? 'default' : 'pointer',
                  transition: 'border-color 0.15s, background 0.15s',
                  position: 'relative',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
                  <span style={{ fontWeight: 600, fontSize: '14px', color: colors.text.primary }}>
                    {label}
                  </span>
                  <span style={{
                    fontSize: '11px',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                    color: active ? colors.focus : 'var(--color-slate-500)',
                  }}>
                    {active
                      ? (isRecommended ? 'Active · Recommended' : 'Active')
                      : `Switch to ${variant === 'easy' ? 'Easy' : 'Hard'} →`}
                  </span>
                </div>
                <div style={{ fontSize: '12px', color: colors.text.secondary, marginTop: '2px', lineHeight: 1.4 }}>
                  {blurb}
                </div>
              </button>
            );
          })}
        </div>
      )}

      {/* Desktop Nav Strip — visible on top for both Math and R&W. */}
      {!isMobile && (
        <div className="test-session-nav-strip">
          <QuestionGrid
            questions={questions}
            currentIndex={currentQuestion}
            answers={moduleAnswersForGrid}
            markedForReview={markedForReview}
            onNavigate={handleNavigate}
          />
        </div>
      )}

      <div className="test-session-body">
        <div className="test-workspace-main">

          {/* Left Pane - Question Stem */}
          <div className="test-workspace-left" ref={leftPaneRef}>

            {/* Desmos Calculator Modal */}
            <DesmosCalculator isOpen={showCalculator} onClose={() => setShowCalculator(false)} />
            {/* SAT Reference Sheet Modal */}
            <SATReferenceSheet isOpen={showReference} onClose={() => setShowReference(false)} />

            {/* Question Card - SAT Style */}
            <div className="question-panel">
        {/* Question number badge — hidden for R&W (rendered in right pane instead) */}
        {!isReadingWriting && (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '2rem'
          }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '32px',
              height: '32px',
              backgroundColor: 'var(--color-slate-900)',
              color: 'var(--color-white)',
              fontFamily: 'var(--font-ui)',
              fontWeight: '700',
              fontSize: '14px',
              borderRadius: 'var(--radius-sm)'
            }}>
              {currentQuestion + 1}
            </div>
          </div>
        )}

        {/* Formula if present */}
        {question?.questionFormula && renderFormula(question.questionFormula)}

        {/* R&W passage toolbar — Bluebook-style annotate tools */}
        {isReadingWriting && (question?.passage || question?.passages || question?.studentNotes) && (
          <div className="rw-passage-toolbar">
            <span className="rw-toolbar-hint">Select text in the passage to highlight it. Click a highlight to remove it.</span>
            <div className="rw-toolbar-actions">
              <button
                type="button"
                className="rw-toolbar-btn"
                onClick={() => setHighlightsHidden((v) => !v)}
                aria-pressed={highlightsHidden}
                title={highlightsHidden ? 'Show highlights' : 'Hide highlights'}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {highlightsHidden ? (
                    <>
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                      <line x1="1" y1="1" x2="23" y2="23" />
                    </>
                  ) : (
                    <>
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </>
                  )}
                </svg>
                {highlightsHidden ? 'Show Highlights' : 'Hide Highlights'}
              </button>
              <button
                type="button"
                className="rw-toolbar-btn"
                onClick={handleClearHighlights}
                title="Clear all highlights on this question"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="3 6 5 6 21 6" />
                  <path d="M19 6l-2 14a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2L5 6" />
                </svg>
                Clear All
              </button>
            </div>
          </div>
        )}

        {/* R&W single passage — Bluebook-style plain serif text with selection-to-highlight */}
        {question?.passage && (
          isReadingWriting ? (
            <HighlightablePassage
              text={question.passage}
              highlights={highlightsByKey[buildHighlightKey('main')] || []}
              hidden={highlightsHidden}
              onAddHighlight={(r) => handleAddHighlight('main', r)}
              onRemoveHighlight={(r) => handleRemoveHighlight('main', r)}
            />
          ) : (
            <div className="rw-passage" style={{ whiteSpace: 'pre-wrap' }}>
              <MathText text={question.passage} />
            </div>
          )
        )}

        {/* R&W dual-passage (Cross-Text Connections) — stacked vertically with Text 1 / Text 2 labels */}
        {question?.passages && Array.isArray(question.passages) && (
          <div className="rw-passage-stack">
            {question.passages.map((p, i) => (
              <div key={i}>
                <div className="rw-passage-label">{p.label || `Text ${i + 1}`}</div>
                {isReadingWriting ? (
                  <HighlightablePassage
                    text={p.text}
                    highlights={highlightsByKey[buildHighlightKey(`p${i}`)] || []}
                    hidden={highlightsHidden}
                    onAddHighlight={(r) => handleAddHighlight(`p${i}`, r)}
                    onRemoveHighlight={(r) => handleRemoveHighlight(`p${i}`, r)}
                  />
                ) : (
                  <div className="rw-passage" style={{ whiteSpace: 'pre-wrap' }}>
                    <MathText text={p.text} />
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* R&W student notes (Rhetorical Synthesis) if present */}
        {question?.studentNotes && (
          <div className="rw-passage">
            {question.studentNotes.intro && (
              <div style={{ marginBottom: '0.5rem' }}>{question.studentNotes.intro}</div>
            )}
            <ul style={{ paddingLeft: '1.25rem', margin: '0.5rem 0' }}>
              {question.studentNotes.bullets.map((b, i) => (
                <li key={i} style={{ marginBottom: '0.25rem' }}>
                  <MathText text={b} />
                </li>
              ))}
            </ul>
            {question.studentNotes.goal && (
              <div style={{ marginTop: '0.5rem', fontStyle: 'italic' }}>
                <MathText text={question.studentNotes.goal} />
              </div>
            )}
          </div>
        )}

        {/* Diagram if present */}
        {question?.diagram && (
          <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
            <QuestionDiagram type={question.diagram.type} params={question.diagram.params} />
          </div>
        )}

        {/* Question Table if present */}
        {question?.questionTable && (
          <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
            <table style={{
              borderCollapse: 'collapse',
              fontFamily: SAT_TYPOGRAPHY.questionFont,
              fontSize: SAT_TYPOGRAPHY.sizes.choiceText
            }}>
              <thead>
                <tr>
                  {question.questionTable.headers.map((header, i) => (
                    <th key={i} style={{
                      border: `1px solid ${colors.surface.grayMedium}`,
                      padding: '8px 16px',
                      background: colors.surface.gray,
                      fontWeight: '600'
                    }}>
                      <MathText text={header} />
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {question.questionTable.rows.map((row, i) => (
                  <tr key={i}>
                    {row.map((cell, j) => (
                      <td key={j} style={{
                        border: `1px solid ${colors.surface.grayMedium}`,
                        padding: '8px 16px',
                        textAlign: 'center'
                      }}>
                        <MathText text={cell} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Question text - SAT Style. For R&W, this renders in the right pane instead. */}
        {!isReadingWriting && (() => {
          const questionText = question?.question;
          // Check if question has standalone equation blocks separated by \n\n
          // A standalone equation block is a paragraph where every line is purely math ($...$)
          if (typeof questionText === 'string' && questionText.includes('\n\n')) {
            const parts = questionText.split(/\n\n/);
            const isStandaloneEquation = (part) => {
              const trimmed = part.trim();
              const lines = trimmed.split('\n');
              return lines.length > 0 && lines.every(line => {
                const t = line.trim();
                return t.startsWith('$') && t.endsWith('$') && t.length > 2;
              });
            };
            const hasEquationBlocks = parts.some(p => isStandaloneEquation(p));

            if (hasEquationBlocks) {
              return (
                <>
                  {parts.map((part, idx) => {
                    if (isStandaloneEquation(part)) {
                      return (
                        <div key={idx} style={{
                          fontFamily: SAT_TYPOGRAPHY.questionFont,
                          fontSize: SAT_TYPOGRAPHY.sizes.questionText,
                          lineHeight: '2',
                          color: SAT_COLORS.text.primary,
                          textAlign: 'center',
                          marginBottom: '16px'
                        }}>
                          <MathText text={part} />
                        </div>
                      );
                    }
                    return (
                      <p key={idx} style={{
                        fontFamily: SAT_TYPOGRAPHY.questionFont,
                        fontSize: SAT_TYPOGRAPHY.sizes.questionText,
                        lineHeight: SAT_TYPOGRAPHY.lineHeights.question,
                        color: SAT_COLORS.text.primary,
                        marginBottom: '8px'
                      }}>
                        <MathText text={part} />
                      </p>
                    );
                  })}
                </>
              );
            }
          }

          // Default rendering for non-equation questions
          return (
            <p style={{
              fontFamily: SAT_TYPOGRAPHY.questionFont,
              fontSize: SAT_TYPOGRAPHY.sizes.questionText,
              lineHeight: SAT_TYPOGRAPHY.lineHeights.question,
              color: SAT_COLORS.text.primary,
              marginBottom: '8px'
            }}>
              {Array.isArray(questionText) || (questionText && typeof questionText === 'object')
                ? <QuestionRenderer content={questionText} />
                : <MathText text={questionText} />
              }
            </p>
          );
        })()}

        {/* Continued question text if present */}
        {!isReadingWriting && question?.questionContinued && (
          <p style={{
            fontFamily: SAT_TYPOGRAPHY.questionFont,
            fontSize: SAT_TYPOGRAPHY.sizes.questionText,
            lineHeight: SAT_TYPOGRAPHY.lineHeights.question,
            color: SAT_COLORS.text.primary,
            marginBottom: '24px'
          }}>
            {Array.isArray(question.questionContinued) || (typeof question.questionContinued === 'object')
              ? <QuestionRenderer content={question.questionContinued} />
              : <MathText text={question.questionContinued} />
            }
          </p>
        )}
      </div> {/* End question-panel */}
      </div> {/* End test-workspace-left */}

      <div className="test-workspace-right" ref={rightPaneRef}>
        {/* Navigation buttons top right — Math only. R&W uses bottom bar. */}
        {!isReadingWriting && (
        <div className="test-controls-top">
          <button
            onClick={handlePrev}
            disabled={currentQuestion === 0}
            style={{
              padding: '0.625rem 1.25rem',
              background: 'transparent',
              color: currentQuestion === 0 ? 'var(--color-slate-400)' : 'var(--color-slate-600)',
              border: '1px solid var(--color-slate-200)',
              borderRadius: '8px',
              fontSize: '0.75rem',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              cursor: currentQuestion === 0 ? 'not-allowed' : 'pointer',
              opacity: currentQuestion === 0 ? 0.5 : 1,
              transition: 'all 0.2s ease'
            }}
          >
            Prev. Question
          </button>

          {currentQuestion === questions.length - 1 ? (
            <button
              className="btn-launch"
              onClick={handleSubmitModule}
              style={{ textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '0.05em', padding: '0.625rem 1.25rem' }}
            >
              Submit Section
            </button>
          ) : (
            <button
              className="btn-launch"
              onClick={handleNext}
              style={{ textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '0.05em', padding: '0.625rem 1.25rem' }}
            >
              Next Question
            </button>
          )}
        </div>
        )}

        {/* R&W: question number badge + stem rendered in right pane (Bluebook layout) */}
        {isReadingWriting && (
          <div className="rw-stem-block">
            <div className="rw-stem-header">
              <div className="rw-stem-number">{currentQuestion + 1}</div>
              <button
                onClick={handleToggleMark}
                className={`rw-mark-toggle ${isMarked ? 'is-marked' : ''}`}
                aria-pressed={isMarked}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill={isMarked ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                </svg>
                Mark for Review
              </button>
            </div>
            <p className="rw-stem-text">
              {Array.isArray(question?.question) || (question?.question && typeof question.question === 'object')
                ? <QuestionRenderer content={question.question} />
                : <MathText text={question?.question} />
              }
            </p>
            {question?.questionContinued && (
              <p className="rw-stem-text">
                {Array.isArray(question.questionContinued) || (typeof question.questionContinued === 'object')
                  ? <QuestionRenderer content={question.questionContinued} />
                  : <MathText text={question.questionContinued} />
                }
              </p>
            )}
          </div>
        )}

        {/* Answer choices or fill-in */}
        {question?.type === 'fill-in' ? (
          <div style={{ marginTop: '24px' }}>
            <input
              type="text"
              value={fillInValue}
              onChange={(e) => setFillInValue(e.target.value)}
              onBlur={handleFillInSubmit}
              placeholder="Enter your answer"
              style={{
                width: '180px',
                padding: '12px 16px',
                fontFamily: SAT_TYPOGRAPHY.questionFont,
                fontSize: '18px',
                border: `2px solid ${SAT_COLORS.border.dark}`,
                borderRadius: '0',
                outline: 'none',
                backgroundColor: SAT_COLORS.background.page,
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  // handleNext already calls fillInSubmitRef which saves the fill-in value
                  handleNext();
                }
              }}
            />
          </div>
        ) : (
          // Shared <AnswerChoiceList> — same component the drill flow
          // (AssignedPracticeShell) uses, so visuals stay in lockstep.
          // R&W section overrides at .test-session-shell[data-section=
          // "reading-writing"] .answer-choice-card still apply since the
          // shared component renders those exact class names.
          (() => {
            const elimKey = `${currentModule}-${currentQuestion}`;
            return (
              <AnswerChoiceList
                choices={question?.choices || []}
                selectedId={currentAnswer}
                eliminatedIds={eliminatedChoices[elimKey] || []}
                onSelect={handleSelectAnswer}
                onToggleEliminate={handleToggleEliminate}
              />
            );
          })()
        )}
      {/* Action bottom right — hidden for R&W (mark toggle is up top in stem header) */}
      {!isReadingWriting && (
      <div className="test-controls-bottom" style={{ justifyContent: 'center', marginTop: '1.5rem', borderTop: 'none', padding: '1rem 0' }}>
        <button
          onClick={handleToggleMark}
          style={{
            padding: '0.625rem 1.25rem',
            background: isMarked ? 'var(--color-slate-100)' : 'transparent',
            border: '1px solid var(--color-slate-300)',
            borderRadius: '8px',
            fontSize: '0.75rem',
            fontWeight: '600',
            color: 'var(--color-slate-600)',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            transition: 'all 0.2s ease'
          }}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill={isMarked ? 'currentColor' : 'none'}
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
            <line x1="4" y1="22" x2="4" y2="15" />
          </svg>
          Come Back Later
        </button>
      </div>
      )}
      </div> {/* End test-workspace-right */}

      {/* Mobile Nav Grid & Legend */}
      {isMobile && (
        <div style={{ marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--color-slate-200)' }}>
          <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '1rem', color: 'var(--color-slate-900)' }}>Question Navigation</h3>
          <QuestionGrid
            questions={questions}
            currentIndex={currentQuestion}
            answers={moduleAnswersForGrid}
            markedForReview={markedForReview}
            onNavigate={handleNavigate}
          />
          <div className="nav-legend" style={{ marginTop: '1rem' }}>
            <div className="nav-legend-item">
              <div className="nav-legend-icon answered"></div>
              <span>Answered</span>
            </div>
            <div className="nav-legend-item">
              <div className="nav-legend-icon flagged"></div>
              <span>Flagged for Later</span>
            </div>
            <div className="nav-legend-item">
              <div className="nav-legend-icon"></div>
              <span>Unanswered</span>
            </div>
          </div>
        </div>
      )}
      
      </div> {/* End test-workspace-main */}


      </div> {/* End test-session-body */}

      {/* Bluebook-style bottom nav bar — R&W only */}
      {isReadingWriting && !isMobile && (
        <div className="test-session-bottom-bar">
          {/* firstName, not displayName — the user doc never carries displayName,
              so this bar always fell back to "Student". */}
          <div className="bottom-bar-left">{user?.firstName || 'Student'}</div>
          <div className="bottom-bar-center">
            {showQuestionGridPopover && (
              <div className="question-grid-popover">
                <div className="question-grid-popover-title">Question Navigator — Module {currentModule + 1}</div>
                <QuestionGrid
                  questions={questions}
                  currentIndex={currentQuestion}
                  answers={moduleAnswersForGrid}
                  markedForReview={markedForReview}
                  onNavigate={(idx) => {
                    handleNavigate(idx);
                    setShowQuestionGridPopover(false);
                  }}
                />
                <div className="nav-legend" style={{ marginTop: '0.75rem', paddingTop: '0.75rem', borderTop: '1px solid var(--color-slate-200)' }}>
                  <div className="nav-legend-item"><div className="nav-legend-icon answered"></div><span>Answered</span></div>
                  <div className="nav-legend-item"><div className="nav-legend-icon flagged"></div><span>For Review</span></div>
                  <div className="nav-legend-item"><div className="nav-legend-icon"></div><span>Unanswered</span></div>
                </div>
              </div>
            )}
            <button
              className="question-grid-toggle"
              onClick={() => setShowQuestionGridPopover((v) => !v)}
              aria-expanded={showQuestionGridPopover}
            >
              Question {currentQuestion + 1} of {questions.length}
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ transform: showQuestionGridPopover ? 'rotate(0deg)' : 'rotate(180deg)', transition: 'transform 0.15s ease' }}>
                <polyline points="18 15 12 9 6 15" />
              </svg>
            </button>
          </div>
          <div className="bottom-bar-right">
            <button
              className="bottom-nav-btn"
              onClick={handlePrev}
              disabled={currentQuestion === 0}
            >
              Back
            </button>
            {currentQuestion === questions.length - 1 ? (
              <button className="bottom-nav-btn is-primary" onClick={handleSubmitModule}>Next</button>
            ) : (
              <button className="bottom-nav-btn is-primary" onClick={handleNext}>Next</button>
            )}
          </div>
        </div>
      )}

      {/* Pause Overlay */}
      <Modal
        isOpen={isPaused && !confirmAction}
        onClose={handlePauseToggle}
        title="Test Paused"
        hideCloseButton
        footer={
          <div style={{ display: 'flex', width: '100%', gap: '0.75rem' }}>
            <Button onClick={handleRequestEndTest} variant="destructive" style={{ flex: 1 }}>End Test</Button>
            <Button onClick={handleRequestLeave} variant="secondary" style={{ flex: 1 }}>Save & Leave</Button>
            <Button onClick={handlePauseToggle} variant="primary" style={{ flex: 2 }}>Resume Test</Button>
          </div>
        }
      >
        <div style={{
          width: '64px', height: '64px', borderRadius: '50%',
          background: 'var(--color-slate-100)', display: 'flex',
          alignItems: 'center', justifyContent: 'center',
          margin: '0 auto 1.5rem', fontSize: '28px',
          border: '1px solid var(--color-slate-200)'
        }}>⏸</div>
        <p className="modal-text" style={{ textAlign: 'center' }}>
          {isTimed ? 'Timer is frozen. ' : ''}Your progress has been saved.
        </p>
      </Modal>

      {/* Module 2 variant switch confirmation — surfaces only when the user
          has already answered something in M2 and clicks the other variant
          tile above the Q grid. Confirming discards those answers and resets
          M2 to question 1 (because the same key on the other variant points
          at a different question). */}
      <Modal
        isOpen={!!pendingM2Switch}
        onClose={handleCancelM2Switch}
        title={pendingM2Switch
          ? `Switch to Module 2 (${pendingM2Switch.newVariant === 'hard' ? 'Hard' : 'Easy'})?`
          : ''}
        footer={
          <div style={{ display: 'flex', width: '100%', gap: '0.75rem' }}>
            <Button onClick={handleCancelM2Switch} variant="secondary" style={{ flex: 1 }}>
              Keep current
            </Button>
            <Button onClick={handleConfirmM2Switch} variant="destructive" style={{ flex: 1 }}>
              Switch and restart
            </Button>
          </div>
        }
      >
        <div style={{
          width: '48px', height: '48px', borderRadius: '50%',
          background: 'var(--color-warning-100)', color: 'var(--color-warning-600)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          margin: '0 auto 1.25rem',
        }}><WarningIcon size={24} /></div>
        <p className="modal-text" style={{ textAlign: 'center' }}>
          {pendingM2Switch && (
            <>
              Switching restarts Module 2 from question 1. Your{' '}
              {pendingM2Switch.answerCount}{' '}
              current {pendingM2Switch.answerCount === 1 ? 'answer' : 'answers'} on
              {' '}Module 2 will be cleared.
            </>
          )}
        </p>
      </Modal>

      {/* Confirmation Modal */}
      <Modal
        isOpen={!!confirmAction}
        onClose={handleCancelAction}
        title={confirmAction === 'endTest' ? "End Test Early?" : "Save & Leave?"}
        footer={
          <div style={{ display: 'flex', width: '100%', gap: '0.75rem' }}>
            <Button onClick={handleCancelAction} variant="secondary" style={{ flex: 1 }}>Continue Test</Button>
            <Button 
              onClick={confirmAction === 'endTest' ? handleConfirmEndTest : handleConfirmLeave} 
              variant={confirmAction === 'endTest' ? "destructive" : "primary"}
              style={{ flex: 1 }}
            >
              {confirmAction === 'endTest' ? "End Test" : "Save & Leave"}
            </Button>
          </div>
        }
      >
        {confirmAction === 'endTest' ? (
          <div style={{
            width: '48px', height: '48px', borderRadius: '50%',
            background: 'var(--color-error-100)', color: 'var(--color-error-600)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            margin: '0 auto 1.25rem',
          }}><WarningIcon size={24} /></div>
        ) : (
          <div style={{
            width: '48px', height: '48px', borderRadius: '50%',
            background: 'var(--color-info-100)', color: 'var(--color-info-600)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            margin: '0 auto 1.25rem',
          }}><DocumentIcon size={24} /></div>
        )}
        <p className="modal-text" style={{ textAlign: 'center' }}>
          {confirmAction === 'endTest' 
            ? "Unanswered questions will be marked wrong. Your score will be calculated from what you've completed so far."
            : "Your progress will be saved. You can resume this test later from the test list."
          }
        </p>
      </Modal>
    </div>
  );
};

export default PracticeTest;
