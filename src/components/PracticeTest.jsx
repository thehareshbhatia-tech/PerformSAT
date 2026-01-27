import { useState, useEffect, useCallback, useRef } from 'react';
import QuestionDiagram from './QuestionDiagrams';
import AiTutorChat, { AiTutorButton } from './AiTutorChat';
import TestResults from './TestResults';

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

// SAT-Style Color Palette - minimal, professional
const SAT_COLORS = {
  text: {
    primary: '#000000',
    secondary: '#333333',
    muted: '#666666',
  },
  background: {
    page: '#ffffff',
    selected: '#f5f5f5',
  },
  border: {
    dark: '#000000',
    medium: '#666666',
    light: '#e5e5e5',
  },
  ui: {
    questionBadgeBg: '#000000',
    questionBadgeText: '#ffffff',
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
    borderRadius: '4px',
    cursor: 'pointer',
    background: active ? '#2563eb' : '#e5e7eb',
    color: active ? 'white' : '#374151',
    transition: 'all 0.15s ease'
  });

  const iconButtonStyle = {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '4px',
    color: '#6b7280'
  };

  return (
    <div
      style={{
        position: 'fixed',
        left: position.x,
        top: position.y,
        width: CALC_WIDTH,
        height: isMinimized ? 'auto' : CALC_HEIGHT,
        zIndex: 1000,
        background: 'white',
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: '0 10px 40px -10px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        userSelect: 'none'
      }}
    >
      {/* Calculator Header - Draggable */}
      <div
        onMouseDown={handleMouseDown}
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '8px 12px',
          borderBottom: isMinimized ? 'none' : '1px solid #e5e7eb',
          background: '#1e3a5f',
          cursor: isDragging ? 'grabbing' : 'grab'
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
          color: 'white',
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
            style={{ ...iconButtonStyle, color: 'white' }}
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
            style={{ ...iconButtonStyle, color: 'white' }}
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
            minHeight: CALC_HEIGHT - 50
          }}
        />
      )}
    </div>
  );
};

// Timer component
const Timer = ({ initialMinutes, onTimeUp, isPaused }) => {
  const [seconds, setSeconds] = useState(initialMinutes * 60);

  useEffect(() => {
    if (isPaused || seconds <= 0) return;

    const interval = setInterval(() => {
      setSeconds(s => {
        if (s <= 1) {
          onTimeUp?.();
          return 0;
        }
        return s - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isPaused, seconds, onTimeUp]);

  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  const isLow = seconds < 300; // Less than 5 minutes

  return (
    <div style={{
      fontSize: '18px',
      fontWeight: '600',
      color: isLow ? '#dc2626' : '#374151',
      fontFamily: 'monospace',
      padding: '8px 16px',
      background: isLow ? '#fef2f2' : '#f3f4f6',
      borderRadius: '8px'
    }}>
      {String(mins).padStart(2, '0')}:{String(secs).padStart(2, '0')}
    </div>
  );
};

// Question navigation grid - SAT Style
const QuestionGrid = ({ questions, currentIndex, answers, markedForReview, onNavigate }) => {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(11, 1fr)',
      gap: '6px',
      padding: '16px',
      background: SAT_COLORS.background.page,
      border: `1px solid ${SAT_COLORS.border.light}`,
      borderRadius: '0',
      marginBottom: '24px'
    }}>
      {questions.map((_, idx) => {
        const isAnswered = answers[idx] !== undefined;
        const isMarked = markedForReview.includes(idx);
        const isCurrent = idx === currentIndex;

        return (
          <button
            key={idx}
            onClick={() => onNavigate(idx)}
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '0',
              border: isCurrent ? `2px solid ${SAT_COLORS.border.dark}` : `1px solid ${SAT_COLORS.border.light}`,
              background: isMarked ? '#fff3cd' : isAnswered ? '#e8e8e8' : SAT_COLORS.background.page,
              color: SAT_COLORS.text.primary,
              fontFamily: SAT_TYPOGRAPHY.diagramFont,
              fontSize: '13px',
              fontWeight: isCurrent ? '700' : '500',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {idx + 1}
          </button>
        );
      })}
    </div>
  );
};

// MathText component - renders mathematical notation properly
const MathText = ({ text, style = {} }) => {
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
  return <MathText text={choice.text} />;
};

const PracticeTest = ({ test, onBack, onComplete, onSaveResult, onSaveProgress, onClearProgress, savedProgress, isTimed = true, skillProgress = null, user = null }) => {
  // Initialize state from saved progress if available
  const [currentModule, setCurrentModule] = useState(savedProgress?.currentModule || 0);
  const [currentQuestion, setCurrentQuestion] = useState(savedProgress?.currentQuestion || 0);
  const [answers, setAnswers] = useState(savedProgress?.answers || {});
  const [markedForReview, setMarkedForReview] = useState(savedProgress?.markedForReview || []);
  const [showTimer, setShowTimer] = useState(isTimed);
  const [moduleCompleted, setModuleCompleted] = useState(false);
  const [testCompleted, setTestCompleted] = useState(false);
  const [fillInValue, setFillInValue] = useState('');
  const [showCalculator, setShowCalculator] = useState(false);
  const [reviewMode, setReviewMode] = useState(false);
  const [reviewModule, setReviewModule] = useState(0);
  const [reviewQuestion, setReviewQuestion] = useState(0);
  const [resultSaved, setResultSaved] = useState(false);
  const [showAiTutor, setShowAiTutor] = useState(false);

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
        isTimed
      };
      console.log('[PracticeTest] Auto-saving progress:', progressData);
      onSaveProgress(progressData);
    }
  }, [answers, currentModule, currentQuestion, markedForReview, testCompleted, reviewMode, onSaveProgress, isTimed]);

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

      const resultsToSave = {
        rawScore: totalScore,
        totalQuestions,
        scaledScore,
        timedMode: isTimed,
        moduleScores
      };
      console.log('[PracticeTest] Calling onSaveResult with:', resultsToSave);
      onSaveResult(resultsToSave);
      setResultSaved(true);
      console.log('[PracticeTest] Results saved, resultSaved set to true');

      // Clear in-progress data since test is complete
      if (onClearProgress) {
        console.log('[PracticeTest] Clearing in-progress data');
        onClearProgress();
      }
    }
  }, [testCompleted, onSaveResult, onClearProgress, resultSaved, test, answers, isTimed]);

  const handleSelectAnswer = (answerId) => {
    const key = `${currentModule}-${currentQuestion}`;
    setAnswers(prev => ({ ...prev, [key]: answerId }));
  };

  const handleFillInSubmit = () => {
    if (fillInValue.trim()) {
      const key = `${currentModule}-${currentQuestion}`;
      const numValue = parseFloat(fillInValue);
      setAnswers(prev => ({ ...prev, [key]: isNaN(numValue) ? fillInValue : numValue }));
    }
  };

  const handleToggleMark = () => {
    setMarkedForReview(prev => {
      if (prev.includes(currentQuestion)) {
        return prev.filter(i => i !== currentQuestion);
      }
      return [...prev, currentQuestion];
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
    setModuleCompleted(true);
  };

  const handleNextModule = () => {
    if (currentModule < test.modules.length - 1) {
      setCurrentModule(currentModule + 1);
      setCurrentQuestion(0);
      setMarkedForReview([]);
      setModuleCompleted(false);
    } else {
      setTestCompleted(true);
    }
  };

  const handleTimeUp = useCallback(() => {
    setModuleCompleted(true);
  }, []);

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
    if (scaledScore >= 750) return { level: 'Excellent', color: '#059669' };
    if (scaledScore >= 650) return { level: 'Good', color: '#16a34a' };
    if (scaledScore >= 550) return { level: 'Average', color: '#ca8a04' };
    if (scaledScore >= 450) return { level: 'Below Average', color: '#ea580c' };
    return { level: 'Needs Improvement', color: '#dc2626' };
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
        <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '16px', color: '#111827' }}>
          {module.title} Complete
        </h2>
        <div style={{
          fontSize: '48px',
          fontWeight: '700',
          color: '#16a34a',
          marginBottom: '8px'
        }}>
          {score}/{questions.length}
        </div>
        <p style={{ color: '#6b7280', marginBottom: '24px' }}>
          {Math.round((score / questions.length) * 100)}% correct
        </p>

        {/* Projected Score */}
        <div style={{
          background: '#f0f9ff',
          border: '1px solid #bae6fd',
          borderRadius: '12px',
          padding: '16px 20px',
          marginBottom: '32px',
          fontSize: '14px',
          color: '#0369a1'
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
            background: '#111827',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
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
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '24px 20px', background: '#f8fafc', minHeight: '100vh' }}>
        {/* Review Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '24px',
          padding: '20px 24px',
          background: 'linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%)',
          borderRadius: '16px',
          boxShadow: '0 4px 12px rgba(30, 58, 95, 0.15)'
        }}>
          <div>
            <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '6px' }}>
              Review Mode
            </p>
            <h1 style={{ fontSize: '22px', fontWeight: '700', color: 'white', marginBottom: '4px' }}>
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
              background: 'white',
              color: '#1e3a5f',
              border: 'none',
              borderRadius: '10px',
              fontSize: '14px',
              fontWeight: '600',
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              transition: 'transform 0.2s ease'
            }}
          >
            ← Back to Results
          </button>
        </div>

        {/* Question Navigation Grid - Organized by Module */}
        <div style={{
          background: 'white',
          borderRadius: '16px',
          padding: '20px',
          marginBottom: '24px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
          border: '1px solid #e2e8f0'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
            <p style={{ fontSize: '14px', fontWeight: '600', color: '#334155' }}>
              Question Navigator
            </p>
            <div style={{ display: 'flex', gap: '16px', fontSize: '12px' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ width: '12px', height: '12px', borderRadius: '3px', background: '#16a34a' }}></span>
                <span style={{ color: '#6b7280' }}>Correct</span>
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ width: '12px', height: '12px', borderRadius: '3px', background: '#dc2626' }}></span>
                <span style={{ color: '#6b7280' }}>Incorrect</span>
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ width: '12px', height: '12px', borderRadius: '3px', background: '#cbd5e1' }}></span>
                <span style={{ color: '#6b7280' }}>Skipped</span>
              </span>
            </div>
          </div>

          {/* Module-based navigation */}
          {test.modules.map((mod, modIdx) => {
            // Calculate module stats
            const moduleQuestions = mod.questions.map((q, qIdx) => {
              const key = `${modIdx}-${qIdx}`;
              const ans = answers[key];
              const correct = q.type === 'fill-in'
                ? ans === q.correctAnswer || parseFloat(ans) === q.correctAnswer
                : ans === q.correctAnswer;
              return { modIdx, qIdx, correct, answered: ans !== undefined };
            });
            const correctCount = moduleQuestions.filter(q => q.answered && q.correct).length;

            return (
              <div key={modIdx} style={{ marginBottom: modIdx < test.modules.length - 1 ? '20px' : 0 }}>
                {/* Module Header */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '12px',
                  paddingBottom: '8px',
                  borderBottom: '1px solid #e2e8f0'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '28px',
                      height: '28px',
                      borderRadius: '6px',
                      background: modIdx === 0 ? '#3b82f6' : '#10b981',
                      color: 'white',
                      fontSize: '14px',
                      fontWeight: '700'
                    }}>
                      {modIdx + 1}
                    </span>
                    <span style={{ fontSize: '15px', fontWeight: '600', color: '#1e293b' }}>
                      {mod.title}
                    </span>
                  </div>
                  <div style={{
                    fontSize: '13px',
                    fontWeight: '600',
                    color: correctCount === mod.questions.length ? '#16a34a' : '#64748b'
                  }}>
                    {correctCount}/{mod.questions.length} correct
                  </div>
                </div>

                {/* Module Questions Grid */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {moduleQuestions.map((q, qIdx) => {
                    const isActive = q.modIdx === reviewModule && q.qIdx === reviewQuestion;
                    const bgColor = !q.answered ? '#cbd5e1' : q.correct ? '#16a34a' : '#dc2626';
                    return (
                      <button
                        key={qIdx}
                        onClick={() => handleReviewJump(q.modIdx, q.qIdx)}
                        style={{
                          width: '36px',
                          height: '36px',
                          borderRadius: '8px',
                          border: isActive ? '3px solid #111827' : '2px solid transparent',
                          background: bgColor,
                          color: 'white',
                          fontSize: '13px',
                          fontWeight: '600',
                          cursor: 'pointer',
                          boxShadow: isActive ? '0 2px 8px rgba(0,0,0,0.2)' : 'none',
                          transform: isActive ? 'scale(1.1)' : 'scale(1)',
                          transition: 'all 0.15s ease'
                        }}
                      >
                        {qIdx + 1}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Answer Status Banner */}
        <div style={{
          padding: '16px 20px',
          borderRadius: '12px',
          marginBottom: '20px',
          background: !userAnswer ? 'linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)' : isCorrect ? 'linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%)' : 'linear-gradient(135deg, #fef2f2 0%, #fecaca 100%)',
          border: `2px solid ${!userAnswer ? '#cbd5e1' : isCorrect ? '#4ade80' : '#f87171'}`,
          boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              background: !userAnswer ? '#94a3b8' : isCorrect ? '#16a34a' : '#dc2626',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '24px',
              fontWeight: '700',
              boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
            }}>
              {!userAnswer ? '?' : isCorrect ? '✓' : '✗'}
            </div>
            <div style={{ flex: 1 }}>
              <p style={{
                fontWeight: '700',
                fontSize: '18px',
                color: !userAnswer ? '#475569' : isCorrect ? '#15803d' : '#b91c1c',
                marginBottom: '4px'
              }}>
                {!userAnswer ? 'Question Skipped' : isCorrect ? 'Correct Answer!' : 'Incorrect Answer'}
              </p>
              <p style={{ fontSize: '14px', color: '#64748b', lineHeight: '1.5' }}>
                <span style={{ fontWeight: '500' }}>Your answer:</span> {userAnswer !== undefined ? (reviewQ?.type === 'fill-in' ? userAnswer : reviewQ?.choices?.find(c => c.id === userAnswer)?.text || userAnswer) : 'Not answered'}
                {!isCorrect && userAnswer !== undefined && (
                  <span style={{ marginLeft: '16px', color: '#15803d', fontWeight: '600' }}>
                    • Correct: {reviewQ?.type === 'fill-in' ? reviewQ.correctAnswer : reviewQ?.choices?.find(c => c.id === reviewQ.correctAnswer)?.text}
                  </span>
                )}
              </p>
            </div>
          </div>
        </div>

        {/* Question Content */}
        <div style={{
          background: 'white',
          border: '1px solid #e2e8f0',
          borderRadius: '16px',
          padding: '28px',
          marginBottom: '24px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
        }}>
          {/* Question Number Badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 14px',
            background: '#f1f5f9',
            borderRadius: '20px',
            marginBottom: '20px'
          }}>
            <span style={{ fontSize: '13px', fontWeight: '600', color: '#475569' }}>
              Question {currentFlatIndex + 1}
            </span>
            {reviewQ?.difficulty && (
              <span style={{
                fontSize: '11px',
                fontWeight: '600',
                padding: '2px 8px',
                borderRadius: '10px',
                background: reviewQ.difficulty === 'hard' ? '#fef2f2' : reviewQ.difficulty === 'medium' ? '#fefce8' : '#f0fdf4',
                color: reviewQ.difficulty === 'hard' ? '#dc2626' : reviewQ.difficulty === 'medium' ? '#ca8a04' : '#16a34a'
              }}>
                {reviewQ.difficulty.charAt(0).toUpperCase() + reviewQ.difficulty.slice(1)}
              </span>
            )}
          </div>

          {/* Question Text */}
          <div style={{
            marginBottom: '24px',
            fontSize: '16px',
            lineHeight: '1.7',
            color: '#1e293b'
          }}>
            <MathText text={reviewQ?.question || ''} />
          </div>

          {/* Diagram if present */}
          {reviewQ?.diagram && (
            <div style={{
              marginBottom: '24px',
              padding: '16px',
              background: '#f8fafc',
              borderRadius: '12px',
              border: '1px solid #e2e8f0'
            }}>
              <QuestionDiagram type={reviewQ.diagram.type} params={reviewQ.diagram.params} />
            </div>
          )}

          {/* Answer choices */}
          {reviewQ?.type === 'multiple-choice' && reviewQ?.choices && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <p style={{ fontSize: '13px', fontWeight: '600', color: '#64748b', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                Answer Choices
              </p>
              {reviewQ.choices.map((choice) => {
                const isUserChoice = userAnswer === choice.id;
                const isCorrectChoice = reviewQ.correctAnswer === choice.id;
                let bgColor = '#f8fafc';
                let borderColor = '#e2e8f0';

                if (isCorrectChoice) {
                  bgColor = 'linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%)';
                  borderColor = '#4ade80';
                } else if (isUserChoice && !isCorrect) {
                  bgColor = 'linear-gradient(135deg, #fef2f2 0%, #fecaca 100%)';
                  borderColor = '#f87171';
                }

                return (
                  <div
                    key={choice.id}
                    style={{
                      padding: '16px 20px',
                      borderRadius: '12px',
                      border: `2px solid ${borderColor}`,
                      background: bgColor,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '16px',
                      transition: 'all 0.15s ease'
                    }}
                  >
                    <div style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      background: isCorrectChoice ? '#16a34a' : isUserChoice ? '#dc2626' : '#cbd5e1',
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: '700',
                      fontSize: '14px',
                      flexShrink: 0,
                      boxShadow: (isCorrectChoice || isUserChoice) ? '0 2px 6px rgba(0,0,0,0.15)' : 'none'
                    }}>
                      {choice.id}
                    </div>
                    <div style={{ flex: 1, fontSize: '15px', color: '#334155' }}>
                      {renderChoice(choice)}
                    </div>
                    {isCorrectChoice && (
                      <span style={{
                        color: '#15803d',
                        fontWeight: '700',
                        fontSize: '13px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                        background: '#dcfce7',
                        padding: '4px 10px',
                        borderRadius: '16px'
                      }}>
                        ✓ Correct
                      </span>
                    )}
                    {isUserChoice && !isCorrect && (
                      <span style={{
                        color: '#b91c1c',
                        fontWeight: '700',
                        fontSize: '13px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                        background: '#fef2f2',
                        padding: '4px 10px',
                        borderRadius: '16px'
                      }}>
                        ✗ Your answer
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
              background: 'linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%)',
              borderRadius: '12px',
              border: '2px solid #4ade80'
            }}>
              <p style={{ fontSize: '13px', fontWeight: '600', color: '#15803d', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                Correct Answer
              </p>
              <p style={{ fontSize: '28px', fontWeight: '700', color: '#15803d' }}>
                {reviewQ.correctAnswer}
              </p>
            </div>
          )}
        </div>

        {/* Explanation Section */}
        <div style={{
          background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
          border: '1px solid #7dd3fc',
          borderRadius: '16px',
          padding: '24px',
          marginBottom: '24px',
          boxShadow: '0 2px 8px rgba(14, 165, 233, 0.1)'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '16px',
            paddingBottom: '12px',
            borderBottom: '1px solid #bae6fd'
          }}>
            <div style={{
              width: '36px',
              height: '36px',
              borderRadius: '10px',
              background: '#0ea5e9',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '18px'
            }}>
              💡
            </div>
            <h3 style={{
              fontSize: '18px',
              fontWeight: '700',
              color: '#0c4a6e',
              margin: 0
            }}>
              Solution Explanation
            </h3>
          </div>
          <div style={{
            color: '#1e3a5f',
            fontSize: '15px',
            lineHeight: '1.8',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
          }}>
            {reviewQ?.explanation ? (
              <div style={{ whiteSpace: 'pre-wrap' }}>
                <MathText text={reviewQ.explanation} />
              </div>
            ) : (
              <p style={{ color: '#64748b', fontStyle: 'italic' }}>
                No explanation available for this question.
              </p>
            )}

          </div>
        </div>

        {/* AI Tutor Section */}
        <div style={{ marginBottom: '24px' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '8px' }}>
            <AiTutorButton
              onClick={() => setShowAiTutor(!showAiTutor)}
              isOpen={showAiTutor}
            />
          </div>
          {!showAiTutor && (
            <p style={{
              textAlign: 'center',
              fontSize: '13px',
              color: '#64748b',
              margin: 0
            }}>
              Need more help understanding this question?
            </p>
          )}
          <AiTutorChat
            isOpen={showAiTutor}
            onClose={() => setShowAiTutor(false)}
            moduleId={test.id}
            lessonId={`review-${reviewModule}-${reviewQuestion}`}
            lessonTitle={`${test.title} - Question ${currentFlatIndex + 1}`}
            isVideoLesson={false}
            isPracticeQuestion={true}
            skillProgress={skillProgress}
            testDate={user?.testDate}
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

        {/* Navigation Buttons */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: 'white',
          padding: '16px 20px',
          borderRadius: '12px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
          border: '1px solid #e2e8f0'
        }}>
          <button
            onClick={() => handleReviewNav(-1)}
            disabled={currentFlatIndex === 0}
            style={{
              padding: '14px 28px',
              background: currentFlatIndex === 0 ? '#f1f5f9' : 'white',
              color: currentFlatIndex === 0 ? '#94a3b8' : '#334155',
              border: currentFlatIndex === 0 ? '2px solid #e2e8f0' : '2px solid #334155',
              borderRadius: '10px',
              fontSize: '15px',
              fontWeight: '600',
              cursor: currentFlatIndex === 0 ? 'not-allowed' : 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'all 0.15s ease'
            }}
          >
            ← Previous
          </button>
          <div style={{ textAlign: 'center' }}>
            <span style={{ color: '#334155', fontSize: '15px', fontWeight: '600' }}>
              {currentFlatIndex + 1}
            </span>
            <span style={{ color: '#94a3b8', fontSize: '14px' }}>
              {' '}/ {allQuestions.length}
            </span>
          </div>
          <button
            onClick={() => handleReviewNav(1)}
            disabled={currentFlatIndex === allQuestions.length - 1}
            style={{
              padding: '14px 28px',
              background: currentFlatIndex === allQuestions.length - 1 ? '#f1f5f9' : 'linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%)',
              color: currentFlatIndex === allQuestions.length - 1 ? '#94a3b8' : 'white',
              border: 'none',
              borderRadius: '10px',
              fontSize: '15px',
              fontWeight: '600',
              cursor: currentFlatIndex === allQuestions.length - 1 ? 'not-allowed' : 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              boxShadow: currentFlatIndex === allQuestions.length - 1 ? 'none' : '0 2px 8px rgba(30, 58, 95, 0.25)',
              transition: 'all 0.15s ease'
            }}
          >
            Next →
          </button>
        </div>
      </div>
    );
  }

  // Test completion screen - using TestResults component
  if (testCompleted) {
    return (
      <TestResults
        test={test}
        answers={answers}
        onBack={onBack}
        onRetake={() => {
          setCurrentModule(0);
          setCurrentQuestion(0);
          setAnswers({});
          setMarkedForReview([]);
          setModuleCompleted(false);
          setTestCompleted(false);
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
    );
  }

  const currentAnswer = answers[`${currentModule}-${currentQuestion}`];
  const isMarked = markedForReview.includes(currentQuestion);

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '20px' }}>
      {/* Header */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '24px',
        paddingBottom: '16px',
        borderBottom: '1px solid #e5e7eb'
      }}>
        <div>
          <h1 style={{ fontSize: '20px', fontWeight: '600', color: '#111827', marginBottom: '4px' }}>
            {test.title} - {module.title}
          </h1>
          <p style={{ fontSize: '14px', color: '#6b7280' }}>
            Question {currentQuestion + 1} of {questions.length}
          </p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {/* Calculator Button */}
          <button
            onClick={() => setShowCalculator(true)}
            style={{
              padding: '8px 14px',
              background: '#2563eb',
              border: 'none',
              borderRadius: '6px',
              fontSize: '13px',
              fontWeight: '500',
              color: 'white',
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
          {isTimed ? (
            <>
              <button
                onClick={() => setShowTimer(!showTimer)}
                style={{
                  padding: '6px 12px',
                  background: 'transparent',
                  border: '1px solid #d1d5db',
                  borderRadius: '6px',
                  fontSize: '13px',
                  color: '#6b7280',
                  cursor: 'pointer'
                }}
              >
                {showTimer ? 'Hide Timer' : 'Show Timer'}
              </button>
              {showTimer && (
                <Timer
                  initialMinutes={module.timeLimit || 35}
                  onTimeUp={handleTimeUp}
                  isPaused={false}
                />
              )}
            </>
          ) : (
            <span style={{
              padding: '8px 16px',
              background: '#f0fdf4',
              color: '#16a34a',
              borderRadius: '8px',
              fontSize: '13px',
              fontWeight: '500'
            }}>
              Untimed Mode
            </span>
          )}
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
              padding: '6px 12px',
              background: isMarked ? '#fef3c7' : 'transparent',
              border: `1px solid ${isMarked ? '#fcd34d' : '#d1d5db'}`,
              borderRadius: '6px',
              fontSize: '13px',
              color: isMarked ? '#92400e' : '#6b7280',
              cursor: 'pointer'
            }}
          >
            {isMarked ? 'Marked for Review' : 'Mark for Review'}
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

        {/* Question text - SAT Style */}
        <p style={{
          fontFamily: SAT_TYPOGRAPHY.questionFont,
          fontSize: SAT_TYPOGRAPHY.sizes.questionText,
          lineHeight: SAT_TYPOGRAPHY.lineHeights.question,
          color: SAT_COLORS.text.primary,
          marginBottom: '8px'
        }}>
          <MathText text={question?.question} />
        </p>

        {/* Continued question text if present */}
        {question?.questionContinued && (
          <p style={{
            fontFamily: SAT_TYPOGRAPHY.questionFont,
            fontSize: SAT_TYPOGRAPHY.sizes.questionText,
            lineHeight: SAT_TYPOGRAPHY.lineHeights.question,
            color: SAT_COLORS.text.primary,
            marginBottom: '24px'
          }}>
            <MathText text={question.questionContinued} />
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
              return (
                <div
                  key={choice.id}
                  onClick={() => handleSelectAnswer(choice.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    width: '100%',
                    padding: '10px 12px',
                    marginBottom: '8px',
                    background: isSelected ? SAT_COLORS.background.selected : 'transparent',
                    border: 'none',
                    borderRadius: '0',
                    cursor: 'pointer',
                    textAlign: 'left',
                    fontFamily: SAT_TYPOGRAPHY.questionFont,
                  }}
                >
                  {/* SAT-style choice label: A) B) C) D) */}
                  <span style={{
                    fontFamily: SAT_TYPOGRAPHY.questionFont,
                    fontSize: SAT_TYPOGRAPHY.sizes.choiceText,
                    fontWeight: '600',
                    color: SAT_COLORS.text.primary,
                    marginRight: '12px',
                    minWidth: '28px',
                    lineHeight: SAT_TYPOGRAPHY.lineHeights.choice,
                  }}>
                    {choice.id})
                  </span>
                  <span style={{
                    fontFamily: SAT_TYPOGRAPHY.questionFont,
                    fontSize: SAT_TYPOGRAPHY.sizes.choiceText,
                    color: SAT_COLORS.text.primary,
                    lineHeight: SAT_TYPOGRAPHY.lineHeights.choice,
                  }}>
                    {renderChoice(choice)}
                  </span>
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
            background: currentQuestion === 0 ? '#f3f4f6' : 'white',
            color: currentQuestion === 0 ? '#9ca3af' : '#374151',
            border: '1px solid #d1d5db',
            borderRadius: '8px',
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
                background: '#16a34a',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
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
                background: '#111827',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
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
    </div>
  );
};

export default PracticeTest;
