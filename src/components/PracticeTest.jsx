import { useState, useEffect, useCallback } from 'react';
import QuestionDiagram from './QuestionDiagrams';

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

const PracticeTest = ({ test, onBack, onComplete }) => {
  const [currentModule, setCurrentModule] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [markedForReview, setMarkedForReview] = useState([]);
  const [showTimer, setShowTimer] = useState(true);
  const [moduleCompleted, setModuleCompleted] = useState(false);
  const [testCompleted, setTestCompleted] = useState(false);
  const [fillInValue, setFillInValue] = useState('');

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

        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
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
        </div>
      </div>

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
