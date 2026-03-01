import { useState, useEffect, useCallback, useRef } from 'react';
import QuestionDiagram from './QuestionDiagrams';
import AiTutorChat from './AiTutorChat';
import TestResults from './TestResults';
import { MathText } from './MathText';
import SolutionExplanation from './SolutionExplanation';
import QuestionRenderer from './QuestionRenderer';
import { recordSkillAttempts } from '../services/skillService';
import DiagnosticReport from './DiagnosticReport';
import { colors, typography, spacing, radius, shadows, transitions } from '../design/tokens';
import { cardStyles, buttonStyles } from '../design/components';
import { CheckIcon, CrossIcon, LightBulbIcon, MicroscopeIcon } from '../design/icons';

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
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [calcMode, setCalcMode] = useState('graphing'); // 'graphing' or 'scientific'
  const [isMinimized, setIsMinimized] = useState(false);

  const CALC_WIDTH = 480;
  const CALC_HEIGHT = 420;
  const CALC_MOBILE_HEIGHT = '60vh';

  const isMobileCalc = typeof window !== 'undefined' && window.innerWidth < 768;

  // Drag handlers
  const handleMouseDown = (e) => {
    if (e.target.tagName === 'BUTTON') return; // Don't drag when clicking buttons
    setIsDragging(true);
    setDragOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isDragging) {
        setPosition({
          x: Math.max(0, Math.min(window.innerWidth - CALC_WIDTH, e.clientX - dragOffset.x)),
          y: Math.max(0, Math.min(window.innerHeight - 50, e.clientY - dragOffset.y))
        });
      }
    };

    const handleMouseUp = () => setIsDragging(false);

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, dragOffset]);

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
          lockViewport: false
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
        script.src = 'https://www.desmos.com/api/v1.9/calculator.js?apiKey=dcb31709b452b1cf9dc26972add0fda6';
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
        onMouseDown={isMobileCalc ? undefined : handleMouseDown}
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
const Timer = ({ initialMinutes, onTimeUp, isPaused, timeRef, initialSeconds: savedSeconds }) => {
  const [seconds, setSeconds] = useState(() => savedSeconds != null ? savedSeconds : initialMinutes * 60);

  useEffect(() => {
    if (isPaused || seconds <= 0) return;

    const interval = setInterval(() => {
      setSeconds(s => {
        const next = s <= 1 ? 0 : s - 1;
        if (timeRef) timeRef.current = next;
        if (next === 0) onTimeUp?.();
        return next;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isPaused, seconds, onTimeUp, timeRef]);

  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  const isLow = seconds < 300; // Less than 5 minutes

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
const QuestionGrid = ({ questions, currentIndex, answers, markedForReview, onNavigate }) => {
  const gridCols = questions.length <= 22 ? 'repeat(11, 1fr)' : `repeat(${Math.ceil(questions.length / 2)}, 1fr)`;
  return (
    <div style={{
      overflowX: 'auto',
      WebkitOverflowScrolling: 'touch',
      marginBottom: '24px'
    }}>
    <div style={{
      display: 'grid',
      gridTemplateColumns: gridCols,
      gap: '6px',
      padding: '16px',
      background: SAT_COLORS.background.page,
      border: `1px solid ${SAT_COLORS.border.light}`,
      borderRadius: '0',
      minWidth: 'min-content'
    }}>
      {questions.map((_, idx) => {
        const isAnswered = answers[idx] !== undefined;
        const isMarked = markedForReview.includes(idx);
        const isCurrent = idx === currentIndex;

        return (
          <button
            key={idx}
            onClick={() => onNavigate(idx)}
            title={isMarked ? `Question ${idx + 1} - Flagged for later` : `Question ${idx + 1}`}
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '4px',
              border: isCurrent ? `2px solid ${SAT_COLORS.border.dark}` : `1px solid ${SAT_COLORS.border.light}`,
              background: isMarked ? colors.semantic.warningBg : isAnswered ? colors.accent.orangeMuted : SAT_COLORS.background.page,
              color: isMarked ? colors.semantic.warning : isAnswered ? colors.accent.orangeHover : SAT_COLORS.text.primary,
              fontFamily: SAT_TYPOGRAPHY.diagramFont,
              fontSize: '13px',
              fontWeight: isCurrent ? '700' : '500',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative'
            }}
          >
            {idx + 1}
            {/* Dot indicator for flagged questions */}
            {isMarked && (
              <span style={{
                position: 'absolute',
                top: '-5px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: colors.accent.orange,
                border: `1px solid ${colors.surface.white}`,
                boxShadow: shadows.sm
              }} />
            )}
          </button>
        );
      })}
    </div>
    </div>
  );
};

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

const PracticeTest = ({ test, onBack, onComplete, onSaveResult, onSaveProgress, onClearProgress, savedProgress, isTimed = true, skillProgress = null, user = null, practiceTestResults = null, completedLessons = {}, practiceProgress = {}, onNavigateToModule, onStartPractice }) => {
  // Initialize state from saved progress if available
  const [currentModule, setCurrentModule] = useState(savedProgress?.currentModule || 0);
  const [currentQuestion, setCurrentQuestion] = useState(savedProgress?.currentQuestion || 0);
  const [answers, setAnswers] = useState(savedProgress?.answers || {});
  const [markedForReview, setMarkedForReview] = useState(savedProgress?.markedForReview || []);
  const [eliminatedChoices, setEliminatedChoices] = useState(savedProgress?.eliminatedChoices || {});
  const [showTimer, setShowTimer] = useState(isTimed);
  const [moduleCompleted, setModuleCompleted] = useState(false);
  const [testCompleted, setTestCompleted] = useState(false);
  const [fillInValue, setFillInValue] = useState('');
  const [showCalculator, setShowCalculator] = useState(false);
  const [reviewMode, setReviewMode] = useState(false);
  const [reviewModule, setReviewModule] = useState(0);
  const [reviewQuestion, setReviewQuestion] = useState(0);
  const [resultSaved, setResultSaved] = useState(false);
  const [showDiagnosticReport, setShowDiagnosticReport] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [confirmAction, setConfirmAction] = useState(null);
  const [resumeTimeRemaining, setResumeTimeRemaining] = useState(savedProgress?.timeRemaining ?? null);

  // Responsive: track window width for mobile layout
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
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
  const currentModuleRef = useRef(currentModule);
  const diagnosticDataRef = useRef(null);

  const module = test.modules[currentModule];
  const questions = module?.questions || [];
  const question = questions[currentQuestion];

  // Reset fill-in value when question changes
  useEffect(() => {
    if (question?.type === 'fill-in') {
      const existingAnswer = answers[`${currentModule}-${currentQuestion}`];
      setFillInValue(existingAnswer !== undefined ? String(existingAnswer) : '');
    }
  }, [currentQuestion, currentModule, question?.type, answers]);

  // Keep currentModuleRef in sync for handleTimeUp
  useEffect(() => {
    currentModuleRef.current = currentModule;
  }, [currentModule]);

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

  // Auto-save progress when answers, module, or question changes
  useEffect(() => {
    // Don't save if test is completed or we're in review mode
    if (testCompleted || reviewMode || !onSaveProgress) return;

    // Only save if there are answers (user has started the test)
    if (Object.keys(answers).length > 0) {
      const progressData = {
        currentModule,
        currentQuestion,
        answers,
        markedForReview,
        eliminatedChoices,
        isTimed,
        timeRemaining: timerSecondsRef.current,
      };
      console.log('[PracticeTest] Auto-saving progress:', progressData);
      onSaveProgress(progressData);
    }
  }, [answers, currentModule, currentQuestion, markedForReview, eliminatedChoices, testCompleted, reviewMode, onSaveProgress, isTimed]);

  useEffect(() => {
    if (testCompleted || reviewMode) return;
    const onBeforeUnload = (e) => { e.preventDefault(); e.returnValue = ''; };
    window.addEventListener('beforeunload', onBeforeUnload);
    return () => window.removeEventListener('beforeunload', onBeforeUnload);
  }, [testCompleted, reviewMode]);

  // Save test results when test completes
  useEffect(() => {
    console.log('[PracticeTest] Save effect triggered:', { testCompleted, hasOnSaveResult: !!onSaveResult, resultSaved });

    if (testCompleted && onSaveResult && !resultSaved) {
      console.log('[PracticeTest] Attempting to save results...');
      const totalQuestions = test.modules.reduce((sum, m) => sum + m.questions.length, 0);

      // Calculate total score
      let totalScore = 0;
      test.modules.forEach((mod, modIdx) => {
        mod.questions.forEach((q, qIdx) => {
          const key = `${modIdx}-${qIdx}`;
          const userAnswer = answers[key];
          if (q.type === 'fill-in') {
            if (userAnswer === q.correctAnswer || parseFloat(userAnswer) === q.correctAnswer) {
              totalScore++;
            }
          } else {
            if (userAnswer === q.correctAnswer) {
              totalScore++;
            }
          }
        });
      });

      // Calculate module scores
      const moduleScores = test.modules.map((mod, modIdx) => {
        let modScore = 0;
        mod.questions.forEach((q, qIdx) => {
          const key = `${modIdx}-${qIdx}`;
          const userAnswer = answers[key];
          if (q.type === 'fill-in') {
            if (userAnswer === q.correctAnswer || parseFloat(userAnswer) === q.correctAnswer) {
              modScore++;
            }
          } else {
            if (userAnswer === q.correctAnswer) {
              modScore++;
            }
          }
        });
        return { moduleTitle: mod.title, score: modScore, total: mod.questions.length };
      });

      // Convert to SAT score
      const scoringTable = {
        44: 800, 43: 790, 42: 780, 41: 770, 40: 760,
        39: 750, 38: 740, 37: 730, 36: 720, 35: 710,
        34: 700, 33: 690, 32: 680, 31: 670, 30: 660,
        29: 650, 28: 640, 27: 630, 26: 620, 25: 610,
        24: 600, 23: 590, 22: 580, 21: 570, 20: 560,
        19: 550, 18: 540, 17: 530, 16: 520, 15: 510,
        14: 500, 13: 490, 12: 480, 11: 470, 10: 450,
        9: 430, 8: 410, 7: 390, 6: 370, 5: 350,
        4: 330, 3: 310, 2: 280, 1: 240, 0: 200
      };
      let scaledScore;
      if (totalQuestions !== 44) {
        const scaledRaw = Math.round((totalScore / totalQuestions) * 44);
        scaledScore = scoringTable[Math.min(44, Math.max(0, scaledRaw))];
      } else {
        scaledScore = scoringTable[Math.min(44, Math.max(0, totalScore))];
      }

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
      test.modules.forEach((mod, modIdx) => {
        mod.questions.forEach((q, qIdx) => {
          const key = `${modIdx}-${qIdx}`;
          const userAnswer = answers[key];
          let isCorrect = false;
          if (q.type === 'fill-in') {
            isCorrect = userAnswer === q.correctAnswer || parseFloat(userAnswer) === q.correctAnswer;
          } else {
            isCorrect = userAnswer === q.correctAnswer;
          }
          const telem = questionTelemetry.current[key] || {};
          questionDetails[key] = {
            timeSpent: Math.round((telem.timeSpent || 0) * 10) / 10,
            visits: telem.visits || 0,
            answerChanges: (telem.answerChanges || []).length,
            usedCalculator: telem.usedCalculator || false,
            markedForReview: telem.markedForReview || false,
            isCorrect,
            difficulty: q.difficulty || null,
            skills: q.skills || [],
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

      const resultsToSave = {
        rawScore: totalScore,
        totalQuestions,
        scaledScore,
        timedMode: isTimed,
        moduleScores,
        diagnosticData
      };
      console.log('[PracticeTest] Calling onSaveResult with:', resultsToSave);
      onSaveResult(resultsToSave);
      setResultSaved(true);
      console.log('[PracticeTest] Results saved, resultSaved set to true');

      // Record skill attempts — aggregate first, then record sequentially to avoid race conditions
      if (user?.uid) {
        console.log('[PracticeTest] Starting skill recording for user:', user.uid);
        // Build list of {skills, isCorrect} entries
        const skillEntries = [];
        test.modules.forEach((mod, modIdx) => {
          mod.questions.forEach((q, qIdx) => {
            if (q.skills && q.skills.length > 0) {
              const key = `${modIdx}-${qIdx}`;
              const userAnswer = answers[key];
              let isCorrect = false;
              if (q.type === 'fill-in') {
                isCorrect = userAnswer === q.correctAnswer || parseFloat(userAnswer) === q.correctAnswer;
              } else {
                isCorrect = userAnswer === q.correctAnswer;
              }
              skillEntries.push({ skills: q.skills, isCorrect });
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
    }
  }, [testCompleted, onSaveResult, onClearProgress, resultSaved, test, answers, isTimed, user]);

  const handleSelectAnswer = (answerId) => {
    const key = `${currentModule}-${currentQuestion}`;
    const telemetry = getOrCreateTelemetry(currentModule, currentQuestion);
    const now = Date.now();

    setAnswers(prev => {
      const oldAnswer = prev[key];
      // Track answer change
      telemetry.answerChanges.push({ from: oldAnswer || null, to: answerId, timestamp: now });
      if (!telemetry.firstAnswerTime) telemetry.firstAnswerTime = now;
      telemetry.finalAnswerTime = now;

      // If clicking the already-selected answer, deselect it
      if (prev[key] === answerId) {
        const newAnswers = { ...prev };
        delete newAnswers[key];
        return newAnswers;
      }
      // Otherwise, select the new answer
      return { ...prev, [key]: answerId };
    });
  };

  const handleFillInSubmit = () => {
    if (fillInValue.trim()) {
      const key = `${currentModule}-${currentQuestion}`;
      const numValue = parseFloat(fillInValue);
      const value = isNaN(numValue) ? fillInValue : numValue;

      const telemetry = getOrCreateTelemetry(currentModule, currentQuestion);
      const now = Date.now();
      telemetry.answerChanges.push({ from: answers[key] || null, to: value, timestamp: now });
      if (!telemetry.firstAnswerTime) telemetry.firstAnswerTime = now;
      telemetry.finalAnswerTime = now;

      setAnswers(prev => ({ ...prev, [key]: value }));
    }
  };

  const handleToggleMark = () => {
    const telemetry = getOrCreateTelemetry(currentModule, currentQuestion);
    setMarkedForReview(prev => {
      if (prev.includes(currentQuestion)) {
        return prev.filter(i => i !== currentQuestion);
      }
      // Mark for review — record in telemetry
      telemetry.markedForReview = true;
      return [...prev, currentQuestion];
    });
  };

  const handleToggleEliminate = (choiceId) => {
    const key = `${currentModule}-${currentQuestion}`;
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
  };

  const handleNext = () => {
    if (question?.type === 'fill-in') {
      handleFillInSubmit();
    }
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrev = () => {
    if (question?.type === 'fill-in') {
      handleFillInSubmit();
    }
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleNavigate = (idx) => {
    if (question?.type === 'fill-in') {
      handleFillInSubmit();
    }
    setCurrentQuestion(idx);
  };

  const handleSubmitModule = () => {
    if (question?.type === 'fill-in') {
      handleFillInSubmit();
    }
    // Record time spent on current question before submitting
    const now = Date.now();
    const elapsed = (now - questionStartTime.current) / 1000;
    if (elapsed > 0 && elapsed < 3600) {
      const telemetry = getOrCreateTelemetry(currentModule, currentQuestion);
      telemetry.timeSpent += elapsed;
    }
    moduleTimeRemaining.current[currentModule] = timerSecondsRef.current;
    setModuleCompleted(true);
  };

  const handleNextModule = () => {
    if (currentModule < test.modules.length - 1) {
      setCurrentModule(currentModule + 1);
      setCurrentQuestion(0);
      setMarkedForReview([]);
      setEliminatedChoices({});
      setModuleCompleted(false);
      setResumeTimeRemaining(null);
      questionStartTime.current = Date.now();
      prevQuestion.current = { module: currentModule + 1, question: 0 };
    } else {
      setTestCompleted(true);
    }
  };

  const handleTimeUp = useCallback(() => {
    moduleTimeRemaining.current[currentModuleRef.current] = 0;
    setModuleCompleted(true);
  }, []);

  const handlePauseToggle = () => setIsPaused(p => !p);

  const handleRequestEndTest = () => {
    setConfirmAction('endTest');
    setIsPaused(true);
  };

  const handleRequestLeave = () => {
    setConfirmAction('leave');
    setIsPaused(true);
  };

  const handleConfirmEndTest = () => {
    setConfirmAction(null);
    setIsPaused(false);
    if (question?.type === 'fill-in' && fillInValue.trim()) {
      const key = `${currentModule}-${currentQuestion}`;
      const numValue = parseFloat(fillInValue);
      setAnswers(prev => ({ ...prev, [key]: isNaN(numValue) ? fillInValue : numValue }));
    }
    const now = Date.now();
    const elapsed = (now - questionStartTime.current) / 1000;
    if (elapsed > 0 && elapsed < 3600) {
      const telemetry = getOrCreateTelemetry(currentModule, currentQuestion);
      telemetry.timeSpent += elapsed;
    }
    moduleTimeRemaining.current[currentModule] = timerSecondsRef.current;
    setTestCompleted(true);
  };

  const handleConfirmLeave = () => {
    setConfirmAction(null);
    setIsPaused(false);
    let finalAnswers = answers;
    if (question?.type === 'fill-in' && fillInValue.trim()) {
      const key = `${currentModule}-${currentQuestion}`;
      const numValue = parseFloat(fillInValue);
      finalAnswers = { ...answers, [key]: isNaN(numValue) ? fillInValue : numValue };
    }
    if (onSaveProgress) {
      onSaveProgress({
        currentModule,
        currentQuestion,
        answers: finalAnswers,
        markedForReview,
        eliminatedChoices,
        isTimed,
        timeRemaining: timerSecondsRef.current,
      });
    }
    onBack();
  };

  const handleCancelAction = () => {
    setConfirmAction(null);
    setIsPaused(false);
  };

  // Calculate score for current module
  const calculateModuleScore = () => {
    let correct = 0;
    questions.forEach((q, idx) => {
      const key = `${currentModule}-${idx}`;
      const userAnswer = answers[key];
      if (q.type === 'fill-in') {
        if (userAnswer === q.correctAnswer || parseFloat(userAnswer) === q.correctAnswer) {
          correct++;
        }
      } else {
        if (userAnswer === q.correctAnswer) {
          correct++;
        }
      }
    });
    return correct;
  };

  // Calculate total score
  const calculateTotalScore = () => {
    let total = 0;
    test.modules.forEach((mod, modIdx) => {
      mod.questions.forEach((q, qIdx) => {
        const key = `${modIdx}-${qIdx}`;
        const userAnswer = answers[key];
        if (q.type === 'fill-in') {
          if (userAnswer === q.correctAnswer || parseFloat(userAnswer) === q.correctAnswer) {
            total++;
          }
        } else {
          if (userAnswer === q.correctAnswer) {
            total++;
          }
        }
      });
    });
    return total;
  };

  // Convert raw score (0-44) to SAT scaled score (200-800)
  // Based on official College Board Digital SAT scoring tables
  const convertToSATScore = (rawScore, totalQuestions = 44) => {
    // SAT Math section scoring conversion table
    // Raw scores map to scaled scores on a curve
    // This is an approximation based on official College Board data
    const scoringTable = {
      44: 800, 43: 790, 42: 780, 41: 770, 40: 760,
      39: 750, 38: 740, 37: 730, 36: 720, 35: 710,
      34: 700, 33: 690, 32: 680, 31: 670, 30: 660,
      29: 650, 28: 640, 27: 630, 26: 620, 25: 610,
      24: 600, 23: 590, 22: 580, 21: 570, 20: 560,
      19: 550, 18: 540, 17: 530, 16: 520, 15: 510,
      14: 500, 13: 490, 12: 480, 11: 470, 10: 450,
      9: 430, 8: 410, 7: 390, 6: 370, 5: 350,
      4: 330, 3: 310, 2: 280, 1: 240, 0: 200
    };

    // If test has different number of questions, scale proportionally
    if (totalQuestions !== 44) {
      const scaledRaw = Math.round((rawScore / totalQuestions) * 44);
      return scoringTable[Math.min(44, Math.max(0, scaledRaw))];
    }

    return scoringTable[Math.min(44, Math.max(0, rawScore))];
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
    const isLastModule = currentModule === test.modules.length - 1;
    const totalQuestions = test.modules.reduce((sum, m) => sum + m.questions.length, 0);
    // Estimate projected score based on current module performance
    const projectedRaw = Math.round((score / questions.length) * totalQuestions);
    const projectedSATScore = convertToSATScore(projectedRaw, totalQuestions);

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

        {/* Projected Score */}
        <div style={{
          background: colors.semantic.infoLight,
          border: `1px solid ${colors.semantic.infoBg}`,
          borderRadius: radius.md,
          padding: '16px 20px',
          marginBottom: '32px',
          fontSize: '14px',
          color: colors.semantic.info
        }}>
          <p style={{ marginBottom: '4px' }}>
            <strong>Projected SAT Score:</strong> ~{projectedSATScore}
          </p>
          <p style={{ fontSize: '12px', opacity: 0.8 }}>
            Based on current performance. Complete Module 2 for your final score.
          </p>
        </div>

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
          {isLastModule ? 'See Final Results' : 'Continue to Module 2'}
        </button>
      </div>
    );
  }

  // Review mode screen - shows all questions with explanations
  // IMPORTANT: This must come BEFORE testCompleted check so review mode can render
  if (reviewMode) {
    const reviewMod = test.modules[reviewModule];
    const reviewQuestions = reviewMod?.questions || [];
    const reviewQ = reviewQuestions[reviewQuestion];
    const reviewKey = `${reviewModule}-${reviewQuestion}`;
    const userAnswer = answers[reviewKey];

    // Check if answer is correct
    const isCorrect = reviewQ?.type === 'fill-in'
      ? userAnswer === reviewQ.correctAnswer || parseFloat(userAnswer) === reviewQ.correctAnswer
      : userAnswer === reviewQ?.correctAnswer;

    // Build flat list of all questions for navigation
    const allQuestions = [];
    test.modules.forEach((mod, modIdx) => {
      mod.questions.forEach((q, qIdx) => {
        const key = `${modIdx}-${qIdx}`;
        const ans = answers[key];
        const correct = q.type === 'fill-in'
          ? ans === q.correctAnswer || parseFloat(ans) === q.correctAnswer
          : ans === q.correctAnswer;
        allQuestions.push({ modIdx, qIdx, correct, answered: ans !== undefined });
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

    return (
      <div style={{ maxWidth: '100%', margin: '0 auto', padding: '16px 32px', background: colors.surface.offWhite, minHeight: '100vh' }}>
        {/* Review Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '16px',
          padding: '14px 20px',
          background: `linear-gradient(135deg, ${colors.surface.dark} 0%, ${colors.text.secondary} 100%)`,
          borderRadius: radius.md,
          boxShadow: shadows.md
        }}>
          <div>
            <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '6px' }}>
              Review Mode
            </p>
            <h1 style={{ fontSize: '18px', fontWeight: '700', color: colors.text.inverse, marginBottom: '2px' }}>
              {test.title}
            </h1>
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.85)' }}>
              {reviewMod.title} • Question {reviewQuestion + 1} of {reviewQuestions.length}
            </p>
          </div>
          <button
            onClick={() => setReviewMode(false)}
            style={{
              padding: '12px 24px',
              background: colors.surface.white,
              color: colors.surface.dark,
              border: 'none',
              borderRadius: radius.md,
              fontSize: '14px',
              fontWeight: '600',
              cursor: 'pointer',
              boxShadow: shadows.sm,
              transition: `transform ${transitions.normal}`
            }}
          >
            ← Back to Results
          </button>
        </div>

        {/* Compact Question Navigator - Current Module Only */}
        <div style={{
          background: colors.surface.white,
          borderRadius: radius.md,
          padding: '14px 20px',
          marginBottom: '20px',
          boxShadow: shadows.sm,
          border: `1px solid ${colors.surface.grayDark}`
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'nowrap' }}>
            {/* Module tabs */}
            <div style={{ display: 'flex', gap: '6px', flexShrink: 0 }}>
              {test.modules.map((mod, modIdx) => {
                const modQuestions = mod.questions.map((q, qIdx) => {
                  const key = `${modIdx}-${qIdx}`;
                  const ans = answers[key];
                  const correct = q.type === 'fill-in'
                    ? ans === q.correctAnswer || parseFloat(ans) === q.correctAnswer
                    : ans === q.correctAnswer;
                  return { correct, answered: ans !== undefined };
                });
                const correctCount = modQuestions.filter(q => q.answered && q.correct).length;
                const isActiveModule = modIdx === reviewModule;
                return (
                  <button
                    key={modIdx}
                    onClick={() => { setReviewModule(modIdx); setReviewQuestion(0); }}
                    style={{
                      padding: '6px 14px',
                      borderRadius: radius.sm,
                      border: 'none',
                      background: isActiveModule ? colors.surface.dark : colors.surface.gray,
                      color: isActiveModule ? colors.text.inverse : colors.text.secondary,
                      fontSize: '13px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      whiteSpace: 'nowrap',
                      transition: `all ${transitions.fast}`
                    }}
                  >
                    Module {modIdx + 1} ({correctCount}/{mod.questions.length})
                  </button>
                );
              })}
            </div>

            {/* Divider */}
            <div style={{ width: '1px', height: '28px', background: colors.surface.grayDark, flexShrink: 0 }} />

            {/* Question buttons for current module only */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', flex: 1 }}>
              {(() => {
                const currentMod = test.modules[reviewModule];
                return currentMod.questions.map((q, qIdx) => {
                  const key = `${reviewModule}-${qIdx}`;
                  const ans = answers[key];
                  const correct = q.type === 'fill-in'
                    ? ans === q.correctAnswer || parseFloat(ans) === q.correctAnswer
                    : ans === q.correctAnswer;
                  const answered = ans !== undefined;
                  const isActive = qIdx === reviewQuestion;
                  const bgColor = !answered ? colors.surface.grayMedium : correct ? colors.semantic.success : colors.semantic.error;
                  return (
                    <button
                      key={qIdx}
                      onClick={() => handleReviewJump(reviewModule, qIdx)}
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '6px',
                        border: isActive ? `2.5px solid ${colors.text.primary}` : '1.5px solid transparent',
                        background: bgColor,
                        color: colors.text.inverse,
                        fontSize: '12px',
                        fontWeight: '600',
                        cursor: 'pointer',
                        boxShadow: isActive ? shadows.md : shadows.none,
                        transform: isActive ? 'scale(1.15)' : 'scale(1)',
                        transition: `all ${transitions.fast}`
                      }}
                    >
                      {qIdx + 1}
                    </button>
                  );
                });
              })()}
            </div>

            {/* Legend */}
            <div style={{ display: 'flex', gap: '12px', fontSize: '11px', flexShrink: 0 }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <span style={{ width: '10px', height: '10px', borderRadius: '2px', background: colors.semantic.success }}></span>
                <span style={{ color: colors.text.secondary }}>Correct</span>
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <span style={{ width: '10px', height: '10px', borderRadius: '2px', background: colors.semantic.error }}></span>
                <span style={{ color: colors.text.secondary }}>Incorrect</span>
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <span style={{ width: '10px', height: '10px', borderRadius: '2px', background: colors.surface.grayMedium }}></span>
                <span style={{ color: colors.text.secondary }}>Skipped</span>
              </span>
            </div>
          </div>
        </div>

        {/* Answer Status Banner */}
        <div style={{
          padding: '12px 16px',
          borderRadius: radius.md,
          marginBottom: '14px',
          background: !userAnswer ? `linear-gradient(135deg, ${colors.surface.gray} 0%, ${colors.surface.grayDark} 100%)` : isCorrect ? `linear-gradient(135deg, ${colors.semantic.successBg} 0%, ${colors.semantic.successBg} 100%)` : `linear-gradient(135deg, ${colors.semantic.errorLight} 0%, ${colors.semantic.errorBg} 100%)`,
          border: `2px solid ${!userAnswer ? colors.surface.grayMedium : isCorrect ? colors.semantic.success : colors.semantic.error}`,
          boxShadow: shadows.sm
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              background: !userAnswer ? colors.text.muted : isCorrect ? colors.semantic.success : colors.semantic.error,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: colors.text.inverse,
              fontSize: '18px',
              fontWeight: '700',
              boxShadow: shadows.md
            }}>
              {!userAnswer ? '?' : isCorrect ? <CheckIcon size={18} color={colors.text.inverse} /> : <CrossIcon size={18} color={colors.text.inverse} />}
            </div>
            <div style={{ flex: 1 }}>
              <p style={{
                fontWeight: '700',
                fontSize: '15px',
                color: !userAnswer ? colors.text.secondary : isCorrect ? colors.semantic.success : colors.semantic.error,
                marginBottom: '4px'
              }}>
                {!userAnswer ? 'Question Skipped' : isCorrect ? 'Correct Answer!' : 'Incorrect Answer'}
              </p>
              <p style={{ fontSize: '14px', color: colors.text.secondary, lineHeight: '1.5' }}>
                <span style={{ fontWeight: '500' }}>Your answer:</span> {userAnswer !== undefined ? (reviewQ?.type === 'fill-in' ? userAnswer : reviewQ?.choices?.find(c => c.id === userAnswer)?.text || userAnswer) : 'Not answered'}
                {!isCorrect && userAnswer !== undefined && (
                  <span style={{ marginLeft: '16px', color: colors.semantic.success, fontWeight: '600' }}>
                    • Correct: {reviewQ?.type === 'fill-in' ? reviewQ.correctAnswer : reviewQ?.choices?.find(c => c.id === reviewQ.correctAnswer)?.text}
                  </span>
                )}
              </p>
            </div>
          </div>
        </div>

        {/* Question Content */}
        <div style={{
          background: colors.surface.white,
          border: `1px solid ${colors.surface.grayDark}`,
          borderRadius: radius.md,
          padding: '20px',
          marginBottom: '16px',
          boxShadow: shadows.sm
        }}>
          {/* Question Number Badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '4px 12px',
            background: colors.surface.gray,
            borderRadius: radius.full,
            marginBottom: '14px'
          }}>
            <span style={{ fontSize: '13px', fontWeight: '600', color: colors.text.secondary }}>
              Question {currentFlatIndex + 1}
            </span>
            {reviewQ?.difficulty && (
              <span style={{
                fontSize: '11px',
                fontWeight: '600',
                padding: '2px 8px',
                borderRadius: radius.md,
                background: reviewQ.difficulty === 'hard' ? colors.semantic.errorLight : reviewQ.difficulty === 'medium' ? colors.semantic.warningBg : colors.semantic.successLight,
                color: reviewQ.difficulty === 'hard' ? colors.semantic.error : reviewQ.difficulty === 'medium' ? colors.semantic.warning : colors.semantic.success
              }}>
                {reviewQ.difficulty.charAt(0).toUpperCase() + reviewQ.difficulty.slice(1)}
              </span>
            )}
          </div>

          {/* Question Text */}
          <div style={{
            marginBottom: '16px',
            fontSize: '15px',
            lineHeight: '1.6',
            color: colors.text.primary
          }}>
            {Array.isArray(reviewQ?.question) || (reviewQ?.question && typeof reviewQ.question === 'object')
              ? <QuestionRenderer content={reviewQ.question} />
              : <MathText text={reviewQ?.question || ''} />
            }
          </div>

          {/* Diagram if present */}
          {reviewQ?.diagram && (
            <div style={{
              marginBottom: '24px',
              padding: '16px',
              background: colors.surface.offWhite,
              borderRadius: radius.md,
              border: `1px solid ${colors.surface.grayDark}`
            }}>
              <QuestionDiagram type={reviewQ.diagram.type} params={reviewQ.diagram.params} />
            </div>
          )}

          {/* Question Table if present */}
          {reviewQ?.questionTable && (
            <div style={{
              marginBottom: '24px',
              display: 'flex',
              justifyContent: 'center'
            }}>
              <table style={{
                borderCollapse: 'collapse',
                fontSize: '15px'
              }}>
                <thead>
                  <tr>
                    {reviewQ.questionTable.headers.map((header, i) => (
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
                  {reviewQ.questionTable.rows.map((row, i) => (
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

          {/* Answer choices */}
          {reviewQ?.type === 'multiple-choice' && reviewQ?.choices && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <p style={{ fontSize: '13px', fontWeight: '600', color: colors.text.secondary, marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                Answer Choices
              </p>
              {reviewQ.choices.map((choice) => {
                const isUserChoice = userAnswer === choice.id;
                const isCorrectChoice = reviewQ.correctAnswer === choice.id;
                let bgColor = colors.surface.offWhite;
                let borderColor = colors.surface.grayDark;

                if (isCorrectChoice) {
                  bgColor = `linear-gradient(135deg, ${colors.semantic.successBg} 0%, ${colors.semantic.successBg} 100%)`;
                  borderColor = colors.semantic.success;
                } else if (isUserChoice && !isCorrect) {
                  bgColor = `linear-gradient(135deg, ${colors.semantic.errorLight} 0%, ${colors.semantic.errorBg} 100%)`;
                  borderColor = colors.semantic.error;
                }

                return (
                  <div
                    key={choice.id}
                    style={{
                      padding: '16px 20px',
                      borderRadius: radius.md,
                      border: `2px solid ${borderColor}`,
                      background: bgColor,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '16px',
                      transition: `all ${transitions.fast}`
                    }}
                  >
                    <div style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '4px',
                      background: isCorrectChoice ? colors.semantic.success : isUserChoice ? colors.semantic.error : colors.surface.grayMedium,
                      color: colors.text.inverse,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: '500',
                      fontSize: '14px',
                      flexShrink: 0,
                      boxShadow: (isCorrectChoice || isUserChoice) ? shadows.md : shadows.none
                    }}>
                      {choice.id}
                    </div>
                    <div style={{ flex: 1, fontSize: '15px', color: colors.text.primary }}>
                      {renderChoice(choice)}
                    </div>
                    {isCorrectChoice && (
                      <span style={{
                        color: colors.semantic.success,
                        fontWeight: '700',
                        fontSize: '13px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                        background: colors.semantic.successBg,
                        padding: '4px 10px',
                        borderRadius: radius.lg
                      }}>
                        <CheckIcon size={14} color={colors.semantic.success} /> Correct
                      </span>
                    )}
                    {isUserChoice && !isCorrect && (
                      <span style={{
                        color: colors.semantic.error,
                        fontWeight: '700',
                        fontSize: '13px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                        background: colors.semantic.errorLight,
                        padding: '4px 10px',
                        borderRadius: radius.lg
                      }}>
                        <CrossIcon size={14} color={colors.semantic.error} /> Your answer
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {/* Fill-in answer display */}
          {reviewQ?.type === 'fill-in' && (
            <div style={{
              padding: '20px',
              background: `linear-gradient(135deg, ${colors.semantic.successBg} 0%, ${colors.semantic.successBg} 100%)`,
              borderRadius: radius.md,
              border: `2px solid ${colors.semantic.success}`
            }}>
              <p style={{ fontSize: '13px', fontWeight: '600', color: colors.semantic.success, marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                Correct Answer
              </p>
              <p style={{ fontSize: '28px', fontWeight: '700', color: colors.semantic.success }}>
                {reviewQ.correctAnswer}
              </p>
            </div>
          )}
        </div>

        {/* Explanation + AI Chat Side-by-Side */}
        <div style={{
          display: 'flex',
          gap: '20px',
          alignItems: 'stretch',
          marginBottom: '16px',
        }}>
          {/* LEFT: Solution Explanation */}
          <div style={{
            flex: '1 1 0',
            minWidth: 0,
            background: `linear-gradient(135deg, ${colors.semantic.infoLight} 0%, ${colors.semantic.infoBg} 100%)`,
            border: `1px solid ${colors.semantic.info}`,
            borderRadius: radius.md,
            padding: '18px',
            boxShadow: shadows.sm
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '16px',
              paddingBottom: '12px',
              borderBottom: `1px solid ${colors.semantic.infoBg}`
            }}>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: radius.md,
                background: colors.semantic.info,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: colors.text.inverse,
                fontSize: '18px'
              }}>
                <LightBulbIcon size={20} color={colors.text.inverse} />
              </div>
              <h3 style={{
                fontSize: '18px',
                fontWeight: '700',
                color: colors.semantic.info,
                margin: 0
              }}>
                Solution Explanation
              </h3>
            </div>
            {reviewQ?.explanation ? (
              <SolutionExplanation explanation={reviewQ.explanation} />
            ) : (
              <p style={{ color: colors.text.secondary, fontStyle: 'italic' }}>
                No explanation available for this question.
              </p>
            )}
          </div>

          {/* RIGHT: Always-open AI Tutor Chat */}
          <div style={{
            flex: '1 1 0',
            minWidth: 0,
            display: 'flex',
            flexDirection: 'column',
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
                skills: reviewQ?.skills || []
              }}
            />
          </div>
        </div>

        {/* Navigation Buttons */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: colors.surface.white,
          padding: '12px 16px',
          borderRadius: radius.md,
          boxShadow: shadows.sm,
          border: `1px solid ${colors.surface.grayDark}`
        }}>
          <button
            onClick={() => handleReviewNav(-1)}
            disabled={currentFlatIndex === 0}
            style={{
              padding: '10px 22px',
              background: currentFlatIndex === 0 ? colors.surface.gray : colors.surface.white,
              color: currentFlatIndex === 0 ? colors.text.muted : colors.text.primary,
              border: currentFlatIndex === 0 ? `2px solid ${colors.surface.grayDark}` : `2px solid ${colors.text.primary}`,
              borderRadius: radius.md,
              fontSize: '15px',
              fontWeight: '600',
              cursor: currentFlatIndex === 0 ? 'not-allowed' : 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              transition: `all ${transitions.fast}`
            }}
          >
            ← Previous
          </button>
          <div style={{ textAlign: 'center' }}>
            <span style={{ color: colors.text.primary, fontSize: '15px', fontWeight: '600' }}>
              {currentFlatIndex + 1}
            </span>
            <span style={{ color: colors.text.muted, fontSize: '14px' }}>
              {' '}/ {allQuestions.length}
            </span>
          </div>
          <button
            onClick={() => handleReviewNav(1)}
            disabled={currentFlatIndex === allQuestions.length - 1}
            style={{
              padding: '10px 22px',
              background: currentFlatIndex === allQuestions.length - 1 ? colors.surface.gray : `linear-gradient(135deg, ${colors.surface.dark} 0%, ${colors.text.secondary} 100%)`,
              color: currentFlatIndex === allQuestions.length - 1 ? colors.text.muted : colors.text.inverse,
              border: 'none',
              borderRadius: radius.md,
              fontSize: '15px',
              fontWeight: '600',
              cursor: currentFlatIndex === allQuestions.length - 1 ? 'not-allowed' : 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              boxShadow: currentFlatIndex === allQuestions.length - 1 ? shadows.none : shadows.md,
              transition: `all ${transitions.fast}`
            }}
          >
            Next →
          </button>
        </div>
      </div>
    );
  }

  // Test completion screen - using TestResults or DiagnosticReport
  if (testCompleted) {
    // Show the full Diagnostic Report & Study Plan
    if (showDiagnosticReport) {
      return (
        <DiagnosticReport
          test={test}
          answers={answers}
          diagnosticData={diagnosticDataRef.current}
          skillProgress={skillProgress || {}}
          user={user || {}}
          practiceTestResults={practiceTestResults || {}}
          completedLessons={completedLessons}
          practiceProgress={practiceProgress}
          onNavigateToModule={onNavigateToModule}
          onStartPractice={onStartPractice}
          onBack={() => setShowDiagnosticReport(false)}
        />
      );
    }

    return (
      <div>
        <TestResults
          test={test}
          answers={answers}
          diagnosticData={diagnosticDataRef.current}
          onBack={onBack}
          onRetake={() => {
            setCurrentModule(0);
            setCurrentQuestion(0);
            setAnswers({});
            setMarkedForReview([]);
            setEliminatedChoices({});
            setModuleCompleted(false);
            setTestCompleted(false);
            setShowDiagnosticReport(false);
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
        />
        {/* Diagnostic Report CTA - the core feature */}
        <div style={{
          maxWidth: '900px', margin: '0 auto', padding: '0 20px 40px',
        }}>
          <div
            onClick={() => setShowDiagnosticReport(true)}
            style={{
              cursor: 'pointer',
              background: `linear-gradient(135deg, ${colors.accent.orange} 0%, ${colors.accent.orangeHover} 100%)`,
              borderRadius: radius.lg,
              padding: '24px 28px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              boxShadow: '0 8px 24px rgba(234, 88, 12, 0.3)',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(234, 88, 12, 0.4)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(234, 88, 12, 0.3)'; }}
          >
            <div>
              <div style={{ fontSize: '18px', fontWeight: '700', color: colors.text.inverse, marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <MicroscopeIcon size={20} color={colors.text.inverse} /> View Your Diagnosis & Study Plan
              </div>
              <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.85)', lineHeight: '1.5' }}>
                See exactly why you missed each question, what to fix first, and your personalized week-by-week plan to reach your target score
              </div>
            </div>
            <div style={{ fontSize: '28px', color: colors.text.inverse, marginLeft: '16px', flexShrink: 0 }}>→</div>
          </div>
        </div>
      </div>
    );
  }

  const currentAnswer = answers[`${currentModule}-${currentQuestion}`];
  const isMarked = markedForReview.includes(currentQuestion);

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: isMobile ? '16px' : '0 32px' }}>
      {/* Header */}
      <div style={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        justifyContent: 'space-between',
        alignItems: isMobile ? 'flex-start' : 'center',
        marginBottom: '24px',
        paddingBottom: '16px',
        borderBottom: `1px solid ${colors.surface.grayDark}`,
        gap: isMobile ? '12px' : '0'
      }}>
        <div>
          <button
            onClick={handleRequestLeave}
            style={{
              display: 'flex', alignItems: 'center', gap: '6px',
              background: 'none', border: 'none', color: colors.text.secondary,
              fontSize: '13px', cursor: 'pointer', padding: '0', marginBottom: '8px',
            }}
          >
            ← Exit
          </button>
          <h1 style={{ fontSize: isMobile ? '17px' : '20px', fontWeight: '600', color: colors.text.primary, marginBottom: '4px' }}>
            {test.title} - {module.title}
          </h1>
          <p style={{ fontSize: isMobile ? '13px' : '14px', color: colors.text.secondary }}>
            Question {currentQuestion + 1} of {questions.length}
          </p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? '8px' : '12px', flexWrap: 'wrap' }}>
          {/* Calculator Button */}
          <button
            onClick={() => {
              const telemetry = getOrCreateTelemetry(currentModule, currentQuestion);
              telemetry.usedCalculator = true;
              setShowCalculator(true);
            }}
            style={{
              padding: isMobile ? '6px 10px' : '8px 14px',
              background: colors.semantic.info,
              border: 'none',
              borderRadius: radius.sm,
              fontSize: isMobile ? '12px' : '13px',
              fontWeight: '500',
              color: colors.text.inverse,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="4" y="2" width="16" height="20" rx="2" />
              <line x1="8" y1="6" x2="16" y2="6" />
              <line x1="8" y1="10" x2="10" y2="10" />
              <line x1="14" y1="10" x2="16" y2="10" />
              <line x1="8" y1="14" x2="10" y2="14" />
              <line x1="14" y1="14" x2="16" y2="14" />
              <line x1="8" y1="18" x2="16" y2="18" />
            </svg>
            Calculator
          </button>
          <button
            onClick={handlePauseToggle}
            style={{
              padding: isMobile ? '6px 10px' : '8px 14px',
              background: isPaused ? colors.semantic.success : 'transparent',
              border: isPaused ? 'none' : `1px solid ${colors.surface.grayMedium}`,
              borderRadius: radius.sm,
              fontSize: isMobile ? '12px' : '13px',
              fontWeight: '600',
              color: isPaused ? colors.text.inverse : colors.text.secondary,
              cursor: 'pointer',
              display: 'flex', alignItems: 'center', gap: '6px',
            }}
          >
            {isPaused ? '▶ Resume' : '⏸ Pause'}
          </button>
          {isTimed ? (
            <>
              <button
                onClick={() => setShowTimer(!showTimer)}
                style={{
                  padding: isMobile ? '5px 8px' : '6px 12px',
                  background: 'transparent',
                  border: `1px solid ${colors.surface.grayMedium}`,
                  borderRadius: radius.sm,
                  fontSize: isMobile ? '12px' : '13px',
                  color: colors.text.secondary,
                  cursor: 'pointer'
                }}
              >
                {showTimer ? 'Hide Timer' : 'Show Timer'}
              </button>
              {showTimer && (
                <Timer
                  initialMinutes={module.timeLimit || 35}
                  onTimeUp={handleTimeUp}
                  isPaused={isPaused}
                  timeRef={timerSecondsRef}
                  initialSeconds={resumeTimeRemaining}
                />
              )}
            </>
          ) : (
            <span style={{
              padding: isMobile ? '6px 10px' : '8px 16px',
              background: colors.semantic.successLight,
              color: colors.semantic.success,
              borderRadius: radius.sm,
              fontSize: isMobile ? '12px' : '13px',
              fontWeight: '500'
            }}>
              Untimed Mode
            </span>
          )}
          <button
            onClick={handleRequestEndTest}
            style={{
              padding: isMobile ? '6px 10px' : '8px 14px',
              background: 'transparent',
              border: `1px solid ${colors.semantic.error}`,
              borderRadius: radius.sm,
              fontSize: isMobile ? '12px' : '13px',
              fontWeight: '600',
              color: colors.semantic.error,
              cursor: 'pointer',
            }}
          >
            End Test
          </button>
        </div>
      </div>

      {/* Desmos Calculator Modal */}
      <DesmosCalculator isOpen={showCalculator} onClose={() => setShowCalculator(false)} />

      {/* Question Navigation Grid */}
      <QuestionGrid
        questions={questions}
        currentIndex={currentQuestion}
        answers={Object.fromEntries(
          Object.entries(answers)
            .filter(([key]) => key.startsWith(`${currentModule}-`))
            .map(([key, val]) => [parseInt(key.split('-')[1]), val])
        )}
        markedForReview={markedForReview}
        onNavigate={handleNavigate}
      />

      {/* Navigation Legend */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
        marginBottom: '20px',
        fontSize: '12px',
        color: colors.text.secondary
      }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span style={{
            width: '14px',
            height: '14px',
            borderRadius: '3px',
            background: colors.accent.orangeMuted,
            border: `1px solid ${colors.accent.orange}`
          }}></span>
          Answered
        </span>
        <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span style={{
            width: '14px',
            height: '14px',
            borderRadius: '3px',
            background: colors.semantic.warningBg,
            border: `1px solid ${colors.semantic.warning}`,
            position: 'relative'
          }}>
            <span style={{
              position: 'absolute',
              top: '-4px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              backgroundColor: colors.accent.orange,
              border: `1px solid ${colors.surface.white}`
            }} />
          </span>
          Flagged for Later
        </span>
        <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span style={{
            width: '14px',
            height: '14px',
            borderRadius: '3px',
            background: colors.surface.white,
            border: `1px solid ${colors.surface.grayMedium}`
          }}></span>
          Unanswered
        </span>
      </div>

      {/* Question Card - SAT Style */}
      <div style={{
        background: SAT_COLORS.background.page,
        border: 'none',
        borderRadius: '0',
        padding: '24px 0',
        marginBottom: '24px',
        borderBottom: `1px solid ${SAT_COLORS.border.light}`
      }}>
        {/* Question number badge and mark button */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '20px'
        }}>
          {/* SAT-style black box with white number */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '32px',
            height: '32px',
            backgroundColor: SAT_COLORS.ui.questionBadgeBg,
            color: SAT_COLORS.ui.questionBadgeText,
            fontFamily: SAT_TYPOGRAPHY.diagramFont,
            fontWeight: '700',
            fontSize: SAT_TYPOGRAPHY.sizes.questionNumber,
          }}>
            {currentQuestion + 1}
          </div>
          <button
            onClick={handleToggleMark}
            style={{
              padding: '8px 14px',
              background: isMarked ? colors.semantic.warningBg : 'transparent',
              border: `2px solid ${isMarked ? colors.semantic.warning : colors.surface.grayMedium}`,
              borderRadius: radius.sm,
              fontSize: '13px',
              fontWeight: '600',
              color: isMarked ? colors.semantic.warning : colors.text.secondary,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              transition: `all ${transitions.fast}`
            }}
          >
            {/* Flag Icon */}
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill={isMarked ? colors.semantic.warning : 'none'}
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
              <line x1="4" y1="22" x2="4" y2="15" />
            </svg>
            {isMarked ? 'Flagged - Come Back Later' : 'Flag for Later'}
          </button>
        </div>

        {/* Formula if present */}
        {question?.questionFormula && renderFormula(question.questionFormula)}

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

        {/* Question text - SAT Style */}
        {(() => {
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
        {question?.questionContinued && (
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
                  handleFillInSubmit();
                  handleNext();
                }
              }}
            />
          </div>
        ) : (
          <div style={{ marginTop: '24px' }}>
            {question?.choices?.map((choice) => {
              const isSelected = currentAnswer === choice.id;
              const elimKey = `${currentModule}-${currentQuestion}`;
              const isEliminated = (eliminatedChoices[elimKey] || []).includes(choice.id);
              return (
                <div
                  key={choice.id}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    width: '100%',
                    padding: '12px 16px',
                    marginBottom: '10px',
                    background: isSelected && !isEliminated ? colors.accent.orangeLight : colors.surface.white,
                    border: `1px solid ${isSelected && !isEliminated ? colors.accent.orange : colors.surface.grayDark}`,
                    borderRadius: radius.sm,
                    textAlign: 'left',
                    fontFamily: SAT_TYPOGRAPHY.questionFont,
                    transition: 'all 0.15s ease',
                    opacity: isEliminated ? 0.5 : 1,
                  }}
                >
                  {/* Cross-out toggle button — LEFT side */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleToggleEliminate(choice.id);
                    }}
                    title={isEliminated ? 'Undo cross-out' : 'Cross out choice'}
                    aria-label={isEliminated ? `Undo elimination of choice ${choice.id}` : `Eliminate choice ${choice.id}`}
                    style={{
                      marginRight: '10px',
                      width: '22px',
                      height: '22px',
                      borderRadius: '4px',
                      border: `1px solid ${colors.surface.grayMedium}`,
                      background: isEliminated ? colors.semantic.errorBg : 'transparent',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      color: isEliminated ? colors.semantic.error : colors.text.muted,
                      padding: 0,
                      transition: `all ${transitions.fast}`,
                    }}
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <line x1="2" y1="2" x2="10" y2="10" />
                      <line x1="10" y1="2" x2="2" y2="10" />
                    </svg>
                  </button>
                  {/* Clickable area for answer selection */}
                  <div
                    onClick={() => handleSelectAnswer(choice.id)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      flex: 1,
                      cursor: 'pointer',
                    }}
                  >
                    {/* Letter badge with X overlay when eliminated */}
                    <div style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '4px',
                      backgroundColor: isEliminated ? colors.surface.gray : isSelected ? colors.accent.orange : colors.surface.white,
                      border: `1px solid ${isEliminated ? colors.surface.grayMedium : isSelected ? colors.accent.orange : colors.surface.grayMedium}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: '500',
                      fontSize: '14px',
                      color: isEliminated ? colors.text.muted : isSelected ? colors.text.inverse : colors.text.secondary,
                      marginRight: '14px',
                      flexShrink: 0,
                      position: 'relative',
                    }}>
                      {choice.id}
                      {/* X overlay on the badge */}
                      {isEliminated && (
                        <svg
                          width="28" height="28"
                          viewBox="0 0 28 28"
                          fill="none"
                          stroke={colors.semantic.error}
                          strokeWidth="2"
                          strokeLinecap="round"
                          style={{ position: 'absolute', top: 0, left: 0 }}
                        >
                          <line x1="6" y1="6" x2="22" y2="22" />
                          <line x1="22" y1="6" x2="6" y2="22" />
                        </svg>
                      )}
                    </div>
                    <span style={{
                      fontFamily: SAT_TYPOGRAPHY.questionFont,
                      fontSize: SAT_TYPOGRAPHY.sizes.choiceText,
                      color: isEliminated ? colors.text.muted : SAT_COLORS.text.primary,
                      lineHeight: SAT_TYPOGRAPHY.lineHeights.choice,
                      textDecoration: isEliminated ? 'line-through' : 'none',
                      textDecorationColor: isEliminated ? colors.text.muted : undefined,
                    }}>
                      {renderChoice(choice)}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Navigation buttons */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <button
          onClick={handlePrev}
          disabled={currentQuestion === 0}
          style={{
            padding: '12px 24px',
            background: currentQuestion === 0 ? colors.surface.gray : colors.surface.white,
            color: currentQuestion === 0 ? colors.text.muted : colors.text.secondary,
            border: `1px solid ${colors.surface.grayMedium}`,
            borderRadius: radius.sm,
            fontSize: '15px',
            fontWeight: '500',
            cursor: currentQuestion === 0 ? 'not-allowed' : 'pointer'
          }}
        >
          Previous
        </button>

        <div style={{ display: 'flex', gap: '12px' }}>
          {currentQuestion === questions.length - 1 ? (
            <button
              onClick={handleSubmitModule}
              style={{
                padding: '12px 32px',
                background: colors.semantic.success,
                color: colors.text.inverse,
                border: 'none',
                borderRadius: radius.sm,
                fontSize: '15px',
                fontWeight: '600',
                cursor: 'pointer'
              }}
            >
              Submit {module.title}
            </button>
          ) : (
            <button
              onClick={handleNext}
              style={{
                padding: '12px 24px',
                background: colors.text.primary,
                color: colors.text.inverse,
                border: 'none',
                borderRadius: radius.sm,
                fontSize: '15px',
                fontWeight: '600',
                cursor: 'pointer'
              }}
            >
              Next
            </button>
          )}
        </div>
      </div>

      {/* Pause Overlay */}
      {isPaused && !confirmAction && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 2000,
          background: 'rgba(0, 0, 0, 0.6)',
          backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <div style={{
            background: colors.surface.white, borderRadius: radius.lg,
            padding: '48px 40px', maxWidth: '420px', width: '90%',
            textAlign: 'center', boxShadow: '0 25px 50px rgba(0,0,0,0.25)',
          }}>
            <div style={{
              width: '64px', height: '64px', borderRadius: '50%',
              background: colors.surface.gray, display: 'flex',
              alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 24px', fontSize: '28px',
            }}>⏸</div>
            <h2 style={{ fontSize: '24px', fontWeight: '700', color: colors.text.primary, marginBottom: '8px' }}>
              Test Paused
            </h2>
            <p style={{ fontSize: '15px', color: colors.text.secondary, marginBottom: '32px', lineHeight: '1.6' }}>
              {isTimed ? 'Timer is frozen. ' : ''}Your progress has been saved.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <button
                onClick={handlePauseToggle}
                style={{
                  padding: '14px 32px', width: '100%',
                  background: colors.text.primary, color: colors.text.inverse,
                  border: 'none', borderRadius: radius.sm,
                  fontSize: '16px', fontWeight: '600', cursor: 'pointer',
                }}
              >
                Resume Test
              </button>
              <div style={{ display: 'flex', gap: '12px' }}>
                <button
                  onClick={handleRequestEndTest}
                  style={{
                    flex: 1, padding: '12px 20px',
                    background: 'transparent', color: colors.semantic.error,
                    border: `1.5px solid ${colors.semantic.error}`,
                    borderRadius: radius.sm, fontSize: '14px', fontWeight: '600', cursor: 'pointer',
                  }}
                >
                  End Test
                </button>
                <button
                  onClick={handleRequestLeave}
                  style={{
                    flex: 1, padding: '12px 20px',
                    background: 'transparent', color: colors.text.secondary,
                    border: `1.5px solid ${colors.surface.grayMedium}`,
                    borderRadius: radius.sm, fontSize: '14px', fontWeight: '600', cursor: 'pointer',
                  }}
                >
                  Save & Leave
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Confirmation Modal */}
      {confirmAction && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 2001,
          background: 'rgba(0, 0, 0, 0.6)',
          backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <div style={{
            background: colors.surface.white, borderRadius: radius.lg,
            padding: '40px 36px', maxWidth: '420px', width: '90%',
            boxShadow: '0 25px 50px rgba(0,0,0,0.25)',
          }}>
            {confirmAction === 'endTest' ? (
              <>
                <div style={{
                  width: '48px', height: '48px', borderRadius: '50%',
                  background: colors.semantic.errorLight,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '20px', fontSize: '22px',
                }}>⚠</div>
                <h2 style={{ fontSize: '20px', fontWeight: '700', color: colors.text.primary, marginBottom: '8px' }}>
                  End Test Early?
                </h2>
                <p style={{ fontSize: '14px', color: colors.text.secondary, marginBottom: '28px', lineHeight: '1.6' }}>
                  Unanswered questions will be marked wrong. Your score will be calculated from what you've completed so far.
                </p>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <button
                    onClick={handleCancelAction}
                    style={{
                      flex: 1, padding: '12px 20px',
                      background: 'transparent', color: colors.text.primary,
                      border: `1.5px solid ${colors.surface.grayMedium}`,
                      borderRadius: radius.sm, fontSize: '14px', fontWeight: '600', cursor: 'pointer',
                    }}
                  >
                    Continue Test
                  </button>
                  <button
                    onClick={handleConfirmEndTest}
                    style={{
                      flex: 1, padding: '12px 20px',
                      background: colors.semantic.error, color: colors.text.inverse,
                      border: 'none', borderRadius: radius.sm,
                      fontSize: '14px', fontWeight: '600', cursor: 'pointer',
                    }}
                  >
                    End Test
                  </button>
                </div>
              </>
            ) : (
              <>
                <div style={{
                  width: '48px', height: '48px', borderRadius: '50%',
                  background: colors.semantic.infoLight,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '20px', fontSize: '22px',
                }}>💾</div>
                <h2 style={{ fontSize: '20px', fontWeight: '700', color: colors.text.primary, marginBottom: '8px' }}>
                  Save & Leave?
                </h2>
                <p style={{ fontSize: '14px', color: colors.text.secondary, marginBottom: '28px', lineHeight: '1.6' }}>
                  Your progress will be saved. You can resume this test later from the test list.
                </p>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <button
                    onClick={handleCancelAction}
                    style={{
                      flex: 1, padding: '12px 20px',
                      background: 'transparent', color: colors.text.primary,
                      border: `1.5px solid ${colors.surface.grayMedium}`,
                      borderRadius: radius.sm, fontSize: '14px', fontWeight: '600', cursor: 'pointer',
                    }}
                  >
                    Continue Test
                  </button>
                  <button
                    onClick={handleConfirmLeave}
                    style={{
                      flex: 1, padding: '12px 20px',
                      background: colors.text.primary, color: colors.text.inverse,
                      border: 'none', borderRadius: radius.sm,
                      fontSize: '14px', fontWeight: '600', cursor: 'pointer',
                    }}
                  >
                    Save & Leave
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default PracticeTest;
