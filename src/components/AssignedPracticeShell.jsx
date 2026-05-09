import React, { useState } from 'react';
import { MathText } from './MathText';
import QuestionDiagram from './QuestionDiagrams';
import QuestionRenderer from './QuestionRenderer';
import SolutionExplanation from './SolutionExplanation';
import AiTutorChat from './AiTutorChat';
import './AssignedPracticeShell.css';

const C = {
  brand: 'var(--color-brand-primary)',
  brandHover: 'var(--color-brand-primary-hover)',
  brandLight: 'rgba(234,88,12,0.06)', // 0.06 alpha — softer than --color-brand-primary-light's 0.1
  success: '#10b981',
  successBg: 'rgba(16,185,129,0.08)',
  error: '#ef4444',
  errorBg: 'rgba(239,68,68,0.08)',
  warning: '#f59e0b',
  warningBg: 'rgba(245,158,11,0.08)',
  text: '#1d1d1f',
  textSec: '#6b7280',
  textMuted: '#a3a3a3',
  border: 'rgba(0,0,0,0.08)',
  bg: '#f9fafb',
  white: '#ffffff',
  dark: '#1e293b',
};

function QuestionNav({ questions, currentIndex, answers, onNavigate }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
      {questions.map((q, idx) => {
        const ans = answers[q.id];
        const isCurrent = idx === currentIndex;
        let bg = C.white;
        let border = C.border;
        let color = C.textSec;
        if (ans) {
          bg = ans.correct ? C.successBg : C.errorBg;
          border = ans.correct ? C.success : C.error;
          color = ans.correct ? C.success : C.error;
        }
        if (isCurrent) {
          border = C.brand;
          if (!ans) bg = C.brandLight;
        }
        return (
          <button
            key={idx}
            onClick={() => onNavigate(idx)}
            style={{
              width: '36px', height: '36px', borderRadius: '8px',
              border: `2px solid ${border}`, background: bg, color,
              fontSize: '13px', fontWeight: '700', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'all 0.15s',
            }}
          >
            {idx + 1}
          </button>
        );
      })}
    </div>
  );
}

const AssignedPracticeShell = ({
  practiceState,
  questions,
  currentQuestion,
  headerTitle,
  onBack,
  onSelectAnswer,
  onCheckAnswer,
  onNextQuestion,
  onShowHint,
  onNavigateToQuestion,
  onToggleCalculator,
  showCalculator,
  onRetry,
  getDifficultyBadge,
  user,
  skillProgress,
  practiceTestResults,
}) => {
  const [eliminatedChoices, setEliminatedChoices] = useState({});
  const [showNav, setShowNav] = useState(false);

  const idx = practiceState.currentQuestionIndex;
  const total = questions.length;
  const answeredCount = Object.keys(practiceState.answers).length;
  const correctCount = Object.values(practiceState.answers).filter(a => a.correct).length;
  const diffBadge = currentQuestion?.difficulty ? getDifficultyBadge(currentQuestion.difficulty) : null;

  const currentElimKey = `${idx}`;
  const eliminated = eliminatedChoices[currentElimKey] || [];

  const handleNavigate = (targetIdx) => {
    if (targetIdx >= 0 && targetIdx < total) {
      const q = questions[targetIdx];
      const hasAnswer = !!practiceState.answers[q?.id];
      if (hasAnswer || targetIdx <= idx) {
        onNavigateToQuestion(targetIdx);
      }
    }
  };

  const handleToggleEliminate = (choiceId) => {
    setEliminatedChoices(prev => {
      const current = prev[currentElimKey] || [];
      return {
        ...prev,
        [currentElimKey]: current.includes(choiceId)
          ? current.filter(c => c !== choiceId)
          : [...current, choiceId],
      };
    });
  };

  // ── COMPLETION SCREEN ──
  if (practiceState.isComplete) {
    const answeredEntries = Object.values(practiceState.answers);
    const totalQ = answeredEntries.length;
    const correct = answeredEntries.filter(a => a.correct).length;
    const pct = totalQ > 0 ? Math.round((correct / totalQ) * 100) : 0;
    const isGood = pct >= 80;
    const isOkay = pct >= 40;

    const difficultyStats = { easy: { total: 0, correct: 0 }, medium: { total: 0, correct: 0 }, hard: { total: 0, correct: 0 } };
    questions.forEach(q => {
      const d = q.difficulty || 'medium';
      if (difficultyStats[d]) {
        difficultyStats[d].total++;
        if (practiceState.answers[q.id]?.correct) difficultyStats[d].correct++;
      }
    });

    return (
      <div style={{ maxWidth: '580px', margin: '0 auto', padding: '48px 24px' }}>
        <button onClick={onBack} style={{
          background: 'none', border: 'none', padding: 0, fontSize: '14px',
          color: C.brand, cursor: 'pointer', display: 'flex', alignItems: 'center',
          gap: '6px', marginBottom: '48px', fontWeight: '500',
        }}>
          ← Back to Study Plan
        </button>

        {/* Score circle */}
        <div style={{
          width: '120px', height: '120px', borderRadius: '50%',
          background: isGood ? C.successBg : isOkay ? C.warningBg : C.errorBg,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          margin: '0 auto 28px',
        }}>
          <span style={{ fontSize: '44px', fontWeight: '700', color: isGood ? C.success : isOkay ? C.warning : C.error }}>{correct}</span>
          <span style={{ fontSize: '22px', color: C.textSec }}>/{totalQ}</span>
        </div>

        <h2 style={{ fontSize: '26px', fontWeight: '700', color: C.text, marginBottom: '10px', textAlign: 'center' }}>
          {isGood ? 'Excellent work!' : isOkay ? 'Good effort!' : 'Keep practicing!'}
        </h2>
        <p style={{ fontSize: '15px', color: C.textSec, marginBottom: '12px', textAlign: 'center' }}>
          You got {correct} out of {totalQ} correct ({pct}%)
        </p>
        <p style={{ fontSize: '13px', color: C.textMuted, marginBottom: '32px', textAlign: 'center' }}>
          {headerTitle}
        </p>

        {/* Difficulty breakdown */}
        <div style={{ background: C.bg, borderRadius: '14px', padding: '22px', marginBottom: '32px', textAlign: 'left' }}>
          <h3 style={{ fontSize: '13px', fontWeight: '600', color: C.textSec, marginBottom: '14px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            By Difficulty
          </h3>
          {[
            { key: 'easy', label: 'Easy', color: C.success, bg: C.successBg },
            { key: 'medium', label: 'Medium', color: C.warning, bg: C.warningBg },
            { key: 'hard', label: 'Hard', color: C.error, bg: C.errorBg },
          ].map(({ key, label, color, bg }) => {
            const s = difficultyStats[key];
            if (s.total === 0) return null;
            const p = Math.round((s.correct / s.total) * 100);
            return (
              <div key={key} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                <span style={{ fontSize: '12px', fontWeight: '600', padding: '3px 10px', borderRadius: '10px', background: bg, color, width: '68px', textAlign: 'center' }}>{label}</span>
                <div style={{ flex: 1, marginLeft: '14px', marginRight: '12px' }}>
                  <div style={{ height: '7px', background: '#e5e7eb', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: `${p}%`, background: color, borderRadius: '4px', transition: 'width 0.3s' }} />
                  </div>
                </div>
                <span style={{ fontSize: '13px', fontWeight: '600', color: '#374151', minWidth: '76px', textAlign: 'right' }}>{s.correct}/{s.total} ({p}%)</span>
              </div>
            );
          })}
        </div>

        {/* Question review grid */}
        <div style={{ background: C.bg, borderRadius: '14px', padding: '22px', marginBottom: '32px' }}>
          <h3 style={{ fontSize: '13px', fontWeight: '600', color: C.textSec, marginBottom: '14px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            Question Review
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {questions.map((q, i) => {
              const ans = practiceState.answers[q.id];
              const isCorrect = ans?.correct;
              return (
                <button
                  key={i}
                  onClick={() => {
                    onNavigateToQuestion(i);
                    // The parent will need to un-complete to review — we just navigate
                  }}
                  style={{
                    width: '38px', height: '38px', borderRadius: '8px',
                    border: `2px solid ${isCorrect ? C.success : C.error}`,
                    background: isCorrect ? C.successBg : C.errorBg,
                    color: isCorrect ? C.success : C.error,
                    fontSize: '13px', fontWeight: '700', cursor: 'pointer',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}
                >
                  {isCorrect ? '✓' : '✗'}
                </button>
              );
            })}
          </div>
        </div>

        <div style={{ display: 'flex', gap: '14px', justifyContent: 'center' }}>
          <button onClick={onRetry} style={{
            padding: '14px 28px', borderRadius: '12px', border: `2px solid ${C.brand}`,
            background: C.white, color: C.brand, fontSize: '15px', fontWeight: '600', cursor: 'pointer',
          }}>
            Try Again
          </button>
          <button onClick={onBack} style={{
            padding: '14px 28px', borderRadius: '12px', border: 'none',
            background: C.brand, color: C.white, fontSize: '15px', fontWeight: '600', cursor: 'pointer',
          }}>
            Back to Study Plan
          </button>
        </div>
      </div>
    );
  }

  // ── ACTIVE PRACTICE ──
  const progressPct = total > 0 ? Math.round((answeredCount / total) * 100) : 0;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', padding: '16px', boxSizing: 'border-box' }}>

      {/* ── HEADER ── */}
      <div style={{
        background: C.white, padding: '14px 24px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        borderRadius: '14px', marginBottom: '12px',
        border: `1px solid ${C.border}`,
        boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <button onClick={onBack} style={{
            background: 'none', border: 'none', color: C.brand,
            fontSize: '14px', fontWeight: '600', cursor: 'pointer',
            display: 'flex', alignItems: 'center', gap: '4px',
          }}>
            ← Exit
          </button>
          <div style={{ width: '1px', height: '20px', background: C.border }} />
          <span style={{ fontSize: '15px', fontWeight: '600', color: C.text }}>{headerTitle}</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <span style={{ fontSize: '13px', fontWeight: '600', color: C.textSec }}>
            Question {idx + 1} of {total}
          </span>
          <span style={{
            fontSize: '12px', fontWeight: '600', padding: '4px 10px', borderRadius: '10px',
            background: correctCount > 0 ? C.successBg : C.bg,
            color: correctCount > 0 ? C.success : C.textMuted,
          }}>
            {correctCount} correct
          </span>
          <button onClick={() => setShowNav(n => !n)} style={{
            background: showNav ? C.brandLight : C.bg,
            border: `1px solid ${showNav ? C.brand : C.border}`, borderRadius: '8px',
            padding: '6px 12px', cursor: 'pointer', color: showNav ? C.brand : C.textSec,
            fontSize: '12px', fontWeight: '600',
          }}>
            {showNav ? 'Hide' : 'Navigate'}
          </button>
          <button onClick={onToggleCalculator} style={{
            background: showCalculator ? C.brand : C.bg,
            border: `1px solid ${showCalculator ? C.brand : C.border}`, borderRadius: '8px',
            padding: '6px 12px', cursor: 'pointer',
            color: showCalculator ? C.white : C.textSec,
            fontSize: '12px', fontWeight: '600',
          }}>
            Calculator
          </button>
        </div>
      </div>

      {/* ── PROGRESS BAR ── */}
      <div style={{ marginBottom: '10px', padding: '0 4px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '12px', color: C.textSec, fontWeight: '600' }}>
          <div style={{ flex: 1, height: '5px', background: 'rgba(0,0,0,0.06)', borderRadius: '3px', overflow: 'hidden' }}>
            <div style={{
              height: '100%', width: `${progressPct}%`, borderRadius: '3px',
              background: C.brand, transition: 'width 0.3s',
            }} />
          </div>
          <span>{answeredCount}/{total} answered</span>
        </div>
      </div>

      {/* ── QUESTION NAV (collapsible) ── */}
      {showNav && (
        <div style={{
          background: C.bg, borderRadius: '12px', padding: '14px',
          marginBottom: '12px', border: `1px solid ${C.border}`,
        }}>
          <QuestionNav
            questions={questions}
            currentIndex={idx}
            answers={practiceState.answers}
            onNavigate={handleNavigate}
          />
        </div>
      )}

      {/* ── MAIN CONTENT ── */}
      <div className="aps-main" style={{ flex: 1, display: 'flex', gap: '16px', minHeight: 0 }}>

        {/* Left: Question + Answers */}
        <div className="aps-left" style={{
          flex: '3 1 0%', background: C.white, borderRadius: '16px',
          border: `1px solid ${C.border}`, padding: '32px',
          overflow: 'auto', display: 'flex', flexDirection: 'column',
        }}>
          {/* Question header */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
            <span style={{ fontSize: '14px', fontWeight: '700', color: C.textSec }}>
              Question {idx + 1}
            </span>
            {diffBadge && (
              <span style={{
                fontSize: '11px', fontWeight: '700', padding: '3px 10px', borderRadius: '10px',
                background: diffBadge.color === '#10b981' ? C.successBg : diffBadge.color === '#f59e0b' ? C.warningBg : C.errorBg,
                color: diffBadge.color,
              }}>
                {diffBadge.label}
              </span>
            )}
          </div>

          {/* Diagram */}
          {currentQuestion.diagram && (
            <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
              <QuestionDiagram type={currentQuestion.diagram.type} params={currentQuestion.diagram.params} />
            </div>
          )}

          {/* Question table */}
          {currentQuestion.questionTable && (
            <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
              <table style={{ borderCollapse: 'collapse', fontSize: '15px' }}>
                <thead>
                  <tr>
                    {currentQuestion.questionTable.headers.map((header, i) => (
                      <th key={i} style={{
                        border: `1px solid ${C.border}`, padding: '8px 16px',
                        background: '#f5f5f7', fontWeight: '600'
                      }}>
                        <MathText>{header}</MathText>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {currentQuestion.questionTable.rows.map((row, i) => (
                    <tr key={i}>
                      {row.map((cell, j) => (
                        <td key={j} style={{
                          border: `1px solid ${C.border}`, padding: '8px 16px', textAlign: 'center'
                        }}>
                          <MathText>{cell}</MathText>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Question text */}
          <div style={{ fontSize: '17px', fontWeight: '500', color: C.text, lineHeight: '1.6', marginBottom: '24px' }}>
            {Array.isArray(currentQuestion.question) || (currentQuestion.question && typeof currentQuestion.question === 'object')
              ? <QuestionRenderer content={currentQuestion.question} />
              : <MathText>{currentQuestion.question}</MathText>
            }
          </div>

          {/* Formula */}
          {currentQuestion.questionFormula && (
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              marginBottom: '24px', fontSize: '20px', fontFamily: 'Georgia, serif', fontStyle: 'italic', color: C.text,
            }}>
              {currentQuestion.questionFormula.text}
              {currentQuestion.questionFormula.fraction && (
                <span style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', marginLeft: currentQuestion.questionFormula.text ? '4px' : '0' }}>
                  <span style={{ padding: '0 6px' }}>{currentQuestion.questionFormula.fraction.numerator}</span>
                  <span style={{ width: '100%', height: '2px', background: C.text, margin: '2px 0' }} />
                  <span style={{ padding: '0 6px' }}>{currentQuestion.questionFormula.fraction.denominator}</span>
                </span>
              )}
              {currentQuestion.questionFormula.textAfter && (
                <span style={{ marginLeft: '4px' }}>{currentQuestion.questionFormula.textAfter}</span>
              )}
            </div>
          )}

          {/* Continued text */}
          {currentQuestion.questionContinued && (
            <div style={{ fontSize: '16px', color: C.text, lineHeight: '1.6', marginBottom: '20px' }}>
              {Array.isArray(currentQuestion.questionContinued) || (typeof currentQuestion.questionContinued === 'object')
                ? <QuestionRenderer content={currentQuestion.questionContinued} />
                : <MathText>{currentQuestion.questionContinued}</MathText>
              }
            </div>
          )}

          {/* ── Answer choices (inline below question) ── */}
          <div style={{ borderTop: `1px solid ${C.border}`, paddingTop: '20px' }}>
            <div>
            {currentQuestion.choices?.map((choice) => {
              const isSelected = practiceState.selectedAnswer === choice.id;
              const isCorrect = choice.id === currentQuestion.correctAnswer;
              const showResult = practiceState.showFeedback;
              const isEliminated = eliminated.includes(choice.id);

              let borderColor = C.border;
              let bgColor = C.white;

              if (showResult) {
                if (isCorrect) { borderColor = C.success; bgColor = C.successBg; }
                else if (isSelected && !isCorrect) { borderColor = C.error; bgColor = C.errorBg; }
              } else if (isSelected && !isEliminated) {
                borderColor = C.brand; bgColor = C.brandLight;
              }

              return (
                <div
                  key={choice.id}
                  onClick={() => !showResult && !isEliminated && onSelectAnswer(choice.id)}
                  style={{
                    padding: '14px 18px', borderRadius: '10px',
                    border: `2px solid ${borderColor}`, background: bgColor,
                    cursor: showResult || isEliminated ? 'default' : 'pointer',
                    marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '12px',
                    transition: 'all 0.15s', opacity: isEliminated && !showResult ? 0.4 : 1,
                    textDecoration: isEliminated && !showResult ? 'line-through' : 'none',
                    position: 'relative',
                  }}
                >
                  {/* Eliminate button */}
                  {!showResult && (
                    <button
                      onClick={(e) => { e.stopPropagation(); handleToggleEliminate(choice.id); }}
                      title={isEliminated ? 'Undo cross-out' : 'Cross out'}
                      style={{
                        position: 'absolute', top: '6px', right: '6px',
                        background: 'none', border: 'none', cursor: 'pointer',
                        color: isEliminated ? C.error : C.textMuted, fontSize: '10px', padding: '2px',
                        opacity: 0.6,
                      }}
                    >
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <line x1="2" y1="2" x2="10" y2="10" />
                        <line x1="10" y1="2" x2="2" y2="10" />
                      </svg>
                    </button>
                  )}

                  <span style={{
                    width: '28px', height: '28px', borderRadius: '6px',
                    background: showResult
                      ? (isCorrect ? C.success : isSelected ? C.error : '#f5f5f7')
                      : (isSelected && !isEliminated ? C.brand : '#f5f5f7'),
                    color: (showResult && (isCorrect || isSelected)) || (isSelected && !isEliminated) ? C.white : C.textSec,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '13px', fontWeight: '700', flexShrink: 0,
                  }}>
                    {showResult && isCorrect ? '✓' : showResult && isSelected && !isCorrect ? '✗' : choice.id}
                  </span>
                  <span style={{ fontSize: '15px', color: C.text, display: 'flex', alignItems: 'center', flex: 1 }}>
                    {choice.table ? (
                      <table style={{ borderCollapse: 'collapse', fontSize: '14px' }}>
                        <thead>
                          <tr>
                            {choice.table.headers.map((h, i) => (
                              <th key={i} style={{
                                border: `1px solid ${C.border}`, padding: '4px 12px',
                                background: '#f5f5f7', fontWeight: '600', fontStyle: 'italic'
                              }}>{h}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {choice.table.rows.map((row, i) => (
                            <tr key={i}>
                              {row.map((cell, j) => (
                                <td key={j} style={{
                                  border: `1px solid ${C.border}`, padding: '4px 12px', textAlign: 'center'
                                }}>{cell}</td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    ) : choice.fraction ? (
                      <span style={{ display: 'inline-flex', alignItems: 'center' }}>
                        {choice.text && <MathText>{choice.text}</MathText>}
                        <span style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', marginLeft: choice.text ? '4px' : '0', fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
                          <span style={{ padding: '0 4px' }}>{choice.fraction.numerator}</span>
                          <span style={{ width: '100%', height: '1px', background: C.text, margin: '2px 0' }} />
                          <span style={{ padding: '0 4px' }}>{choice.fraction.denominator}</span>
                        </span>
                        {choice.textAfter && <span style={{ marginLeft: '4px' }}>{choice.textAfter}</span>}
                      </span>
                    ) : Array.isArray(choice.text) || (choice.text && typeof choice.text === 'object') ? (
                      <QuestionRenderer content={choice.text} />
                    ) : (
                      <MathText>{choice.text || ''}</MathText>
                    )}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Hint */}
          {currentQuestion.hint && !practiceState.showFeedback && (
            <div style={{ marginBottom: '12px' }}>
              {!practiceState.showHint ? (
                <button onClick={onShowHint} style={{
                  background: 'none', border: `1px solid ${C.border}`, borderRadius: '8px',
                  padding: '8px 14px', fontSize: '13px', fontWeight: '500', color: C.textSec,
                  cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px',
                }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><line x1="12" y1="17" x2="12.01" y2="17" />
                  </svg>
                  Hint
                </button>
              ) : (
                <div style={{ background: 'rgba(59,130,246,0.08)', borderRadius: '10px', padding: '14px 18px', borderLeft: '3px solid #3b82f6' }}>
                  <div style={{ fontSize: '12px', fontWeight: '600', color: '#3b82f6', marginBottom: '6px' }}>Hint</div>
                  <p style={{ fontSize: '14px', color: C.text, lineHeight: 1.5, margin: 0 }}>{currentQuestion.hint}</p>
                </div>
              )}
            </div>
          )}

          {/* Feedback / explanation */}
          {practiceState.showFeedback && (
            <div style={{
              background: practiceState.answers[currentQuestion.id]?.correct ? C.successBg : C.errorBg,
              borderRadius: '10px', padding: '18px', marginBottom: '12px',
              borderLeft: `3px solid ${practiceState.answers[currentQuestion.id]?.correct ? C.success : C.error}`,
            }}>
              <div style={{ fontSize: '13px', fontWeight: '600', color: practiceState.answers[currentQuestion.id]?.correct ? C.success : C.error, marginBottom: '8px' }}>
                {practiceState.answers[currentQuestion.id]?.correct ? 'Correct!' : 'Incorrect'}
              </div>
              <SolutionExplanation explanation={currentQuestion.explanation} />
            </div>
          )}

          {/* Action button */}
          {!practiceState.showFeedback ? (
            <button
              onClick={() => onCheckAnswer(currentQuestion)}
              disabled={!practiceState.selectedAnswer}
              style={{
                width: '100%', padding: '14px', borderRadius: '10px', border: 'none',
                background: practiceState.selectedAnswer ? C.brand : '#e5e5e5',
                color: C.white, fontSize: '15px', fontWeight: '600',
                cursor: practiceState.selectedAnswer ? 'pointer' : 'default',
              }}
            >
              Check Answer
            </button>
          ) : (
            <button
              onClick={() => onNextQuestion(questions)}
              style={{
                width: '100%', padding: '14px', borderRadius: '10px', border: 'none',
                background: C.brand, color: C.white, fontSize: '15px', fontWeight: '600', cursor: 'pointer',
              }}
            >
              {idx < total - 1 ? 'Next Question →' : 'See Results'}
            </button>
          )}
          </div>
        </div>

        {/* Right: AI Tutor */}
        <div className="aps-right" style={{
          flex: '2 1 0%', display: 'flex', flexDirection: 'column',
          borderRadius: '16px', overflow: 'hidden', minWidth: 0,
          border: `1px solid ${C.border}`,
          boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
        }}>
          <AiTutorChat
            key={`assigned-${idx}`}
            isOpen={true}
            onClose={() => {}}
            moduleId="assigned-practice"
            lessonId={`assigned-${currentQuestion?.id || idx}`}
            lessonTitle={headerTitle}
            isVideoLesson={false}
            isPracticeQuestion={true}
            practiceContext={{
              question: currentQuestion?.question || '',
              choices: currentQuestion?.choices || [],
              hint: currentQuestion?.hint || '',
              answerRevealed: practiceState.showFeedback,
              correctAnswer: practiceState.showFeedback
                ? (currentQuestion?.type === 'fill-in'
                    ? currentQuestion?.correctAnswer
                    : currentQuestion?.choices?.find(c => c.id === currentQuestion?.correctAnswer)?.text || currentQuestion?.correctAnswer)
                : undefined,
              explanation: practiceState.showFeedback ? (currentQuestion?.explanation || '') : '',
              skills: currentQuestion?.skills || [],
            }}
            embedded={true}
            headerCompact={true}
            standalone={false}
            skillProgress={skillProgress}
            testDate={user?.testDate}
            user={user}
            practiceTestResults={practiceTestResults}
          />
        </div>
      </div>

      {/* ── BOTTOM NAV ── */}
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '12px 0', marginTop: '12px',
        borderTop: `1px solid ${C.border}`,
      }}>
        <button
          onClick={() => handleNavigate(idx - 1)}
          disabled={idx === 0}
          style={{
            padding: '8px 18px', borderRadius: '8px',
            border: `1px solid ${C.border}`,
            background: idx === 0 ? C.bg : C.white,
            color: idx === 0 ? C.textMuted : C.textSec,
            fontSize: '13px', fontWeight: '600', cursor: idx === 0 ? 'not-allowed' : 'pointer',
          }}
        >
          ← Previous
        </button>

        <span style={{ fontSize: '13px', color: C.textSec, fontWeight: '500' }}>
          {answeredCount} of {total} answered
        </span>

        <button
          onClick={() => {
            if (practiceState.showFeedback) {
              onNextQuestion(questions);
            } else if (idx < total - 1) {
              handleNavigate(idx + 1);
            }
          }}
          disabled={!practiceState.showFeedback && idx >= total - 1}
          style={{
            padding: '8px 18px', borderRadius: '8px', border: 'none',
            background: practiceState.showFeedback ? C.brand : (idx < total - 1 ? '#3b82f6' : '#e5e5e5'),
            color: C.white, fontSize: '13px', fontWeight: '600',
            cursor: (!practiceState.showFeedback && idx >= total - 1) ? 'not-allowed' : 'pointer',
          }}
        >
          {practiceState.showFeedback ? 'Next Question →' : 'Next →'}
        </button>
      </div>
    </div>
  );
};

export default AssignedPracticeShell;
