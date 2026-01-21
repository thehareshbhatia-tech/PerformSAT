import { useState, useEffect, useCallback, useRef } from 'react';
import QuestionDiagram from './QuestionDiagrams';

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

// Question navigation grid
const QuestionGrid = ({ questions, currentIndex, answers, markedForReview, onNavigate }) => {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(11, 1fr)',
      gap: '6px',
      padding: '16px',
      background: '#f9fafb',
      borderRadius: '8px',
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
              borderRadius: '4px',
              border: isCurrent ? '2px solid #2563eb' : '1px solid #d1d5db',
              background: isMarked ? '#fef3c7' : isAnswered ? '#dcfce7' : 'white',
              color: '#374151',
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

const PracticeTest = ({ test, onBack, onComplete, isTimed = true }) => {
  const [currentModule, setCurrentModule] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [markedForReview, setMarkedForReview] = useState([]);
  const [showTimer, setShowTimer] = useState(isTimed);
  const [moduleCompleted, setModuleCompleted] = useState(false);
  const [testCompleted, setTestCompleted] = useState(false);
  const [fillInValue, setFillInValue] = useState('');
  const [showCalculator, setShowCalculator] = useState(false);

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

  // Module completion screen
  if (moduleCompleted && !testCompleted) {
    const score = calculateModuleScore();
    const isLastModule = currentModule === test.modules.length - 1;

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
        <p style={{ color: '#6b7280', marginBottom: '32px' }}>
          {Math.round((score / questions.length) * 100)}% correct
        </p>

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

  // Test completion screen
  if (testCompleted) {
    const totalScore = calculateTotalScore();
    const totalQuestions = test.modules.reduce((sum, m) => sum + m.questions.length, 0);

    return (
      <div style={{ maxWidth: '700px', margin: '0 auto', padding: '40px 20px' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '28px', fontWeight: '600', marginBottom: '16px', color: '#111827' }}>
            {test.title} Complete!
          </h2>
          <div style={{
            fontSize: '64px',
            fontWeight: '700',
            color: '#16a34a',
            marginBottom: '8px'
          }}>
            {totalScore}/{totalQuestions}
          </div>
          <p style={{ fontSize: '18px', color: '#6b7280' }}>
            {Math.round((totalScore / totalQuestions) * 100)}% correct
          </p>
        </div>

        {/* Module breakdown */}
        <div style={{
          background: '#f9fafb',
          borderRadius: '12px',
          padding: '24px',
          marginBottom: '32px'
        }}>
          <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '16px', color: '#111827' }}>
            Score Breakdown
          </h3>
          {test.modules.map((mod, modIdx) => {
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
            return (
              <div key={modIdx} style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '12px 0',
                borderBottom: modIdx < test.modules.length - 1 ? '1px solid #e5e7eb' : 'none'
              }}>
                <span style={{ color: '#374151' }}>{mod.title}</span>
                <span style={{ fontWeight: '600', color: '#111827' }}>
                  {modScore}/{mod.questions.length} ({Math.round((modScore / mod.questions.length) * 100)}%)
                </span>
              </div>
            );
          })}
        </div>

        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
          <button
            onClick={onBack}
            style={{
              padding: '14px 32px',
              background: 'white',
              color: '#374151',
              border: '1px solid #d1d5db',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer'
            }}
          >
            Back to Practice Tests
          </button>
          <button
            onClick={() => {
              setCurrentModule(0);
              setCurrentQuestion(0);
              setAnswers({});
              setMarkedForReview([]);
              setModuleCompleted(false);
              setTestCompleted(false);
            }}
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
            Retake Test
          </button>
        </div>
      </div>
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

      {/* Question Card */}
      <div style={{
        background: 'white',
        border: '1px solid #e5e7eb',
        borderRadius: '12px',
        padding: '32px',
        marginBottom: '24px'
      }}>
        {/* Question number and mark button */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '20px'
        }}>
          <span style={{
            fontSize: '14px',
            fontWeight: '600',
            color: '#6b7280'
          }}>
            Question {currentQuestion + 1}
          </span>
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

        {/* Question text */}
        <p style={{
          fontSize: '17px',
          lineHeight: '1.7',
          color: '#111827',
          marginBottom: '8px'
        }}>
          <MathText text={question?.question} />
        </p>

        {/* Continued question text if present */}
        {question?.questionContinued && (
          <p style={{
            fontSize: '17px',
            lineHeight: '1.7',
            color: '#111827',
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
                width: '200px',
                padding: '12px 16px',
                fontSize: '18px',
                border: '2px solid #d1d5db',
                borderRadius: '8px',
                outline: 'none'
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
                <button
                  key={choice.id}
                  onClick={() => handleSelectAnswer(choice.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    width: '100%',
                    padding: '14px 16px',
                    marginBottom: '12px',
                    background: isSelected ? '#eff6ff' : 'white',
                    border: `2px solid ${isSelected ? '#2563eb' : '#e5e7eb'}`,
                    borderRadius: '8px',
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'all 0.15s ease'
                  }}
                >
                  <span style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    border: `2px solid ${isSelected ? '#2563eb' : '#d1d5db'}`,
                    background: isSelected ? '#2563eb' : 'white',
                    color: isSelected ? 'white' : '#374151',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '12px',
                    fontSize: '13px',
                    fontWeight: '600',
                    flexShrink: 0
                  }}>
                    {choice.id}
                  </span>
                  <span style={{
                    fontSize: '16px',
                    color: '#111827'
                  }}>
                    {renderChoice(choice)}
                  </span>
                </button>
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
