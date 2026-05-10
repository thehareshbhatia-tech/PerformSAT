import React, { useMemo, useRef, useState } from 'react';
import { MathText } from './MathText';
import QuestionDiagram from './QuestionDiagrams';
import QuestionRenderer from './QuestionRenderer';
import SolutionExplanation from './SolutionExplanation';
import AiTutorChat from './AiTutorChat';
import HandAuthoredStamp from './HandAuthoredStamp';
import AnswerChoiceList from './shared/AnswerChoiceList';
import { formatDiagnosticSentence } from '../services/diagnosticEngine';
import { findRoundIndexForQuestion, computeRoundProgress } from '../services/buildRounds';
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
  onAdvanceToNextRound,
  onTrySimilar,
  isTrySimilarExhausted = false,
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
  // Debounce trap so a rapid double-click doesn't insert two questions.
  const trySimilarLockRef = useRef(0);

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

  // Closes E4 (gate) + GAP-3 (debounce). The lock is a timestamp, not a flag,
  // so it self-clears when the next click is >=500ms after the previous and
  // we never need a setTimeout that could leak across question advances.
  const handleTrySimilarClick = () => {
    if (typeof onTrySimilar !== 'function') return;
    const now = Date.now();
    if (now - trySimilarLockRef.current < 500) return;
    trySimilarLockRef.current = now;
    onTrySimilar(currentQuestion);
  };

  // Day-2 Acely-polish: round-aware question header. The current round is
  // determined by the question id, not by currentRoundIndex (which may lag
  // briefly during state transitions).
  const rounds = Array.isArray(practiceState.rounds) ? practiceState.rounds : [];
  const currentRoundIdx = currentQuestion
    ? findRoundIndexForQuestion(rounds, currentQuestion.id)
    : -1;
  const currentRound = currentRoundIdx >= 0 ? rounds[currentRoundIdx] : null;
  const positionInRound = currentRound
    ? currentRound.questionIds.indexOf(currentQuestion?.id) + 1
    : 0;
  const roundProgress = useMemo(
    () => computeRoundProgress(rounds, practiceState.answers || {}),
    [rounds, practiceState.answers],
  );

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

  // ── ROUND-COMPLETE INTERSTITIAL (Day-2 Acely-polish) ──
  // Renders between rounds — celebrates the just-finished round + offers a
  // pause point before the user clicks into the next one.
  if (practiceState.showRoundComplete && currentRound && rounds.length > 1) {
    const justFinished = roundProgress[currentRoundIdx];
    const nextRound = rounds[currentRoundIdx + 1];
    const correctText = justFinished
      ? `${justFinished.correct} of ${justFinished.total} correct`
      : '';
    return (
      <div className="aps-interstitial" role="status" aria-live="polite">
        <div className="aps-interstitial-card">
          <div className="aps-interstitial-eyebrow">Round complete</div>
          <h2 className="aps-interstitial-title">{currentRound.label} ✓</h2>
          {correctText && <p className="aps-interstitial-sub">{correctText}</p>}
          <div className="aps-interstitial-circles" aria-hidden="true">
            {rounds.map((r, i) => {
              const p = roundProgress[i];
              const cls = [
                'aps-circle',
                p?.isComplete && 'aps-circle-complete',
                p?.isInProgress && 'aps-circle-progress',
              ].filter(Boolean).join(' ');
              return <span key={r.index} className={cls}>{i + 1}</span>;
            })}
          </div>
          <button
            type="button"
            className="aps-interstitial-cta"
            onClick={() => onAdvanceToNextRound && onAdvanceToNextRound()}
          >
            Continue to {nextRound?.label || 'next round'} →
          </button>
          <button
            type="button"
            className="aps-interstitial-secondary"
            onClick={() => onBack && onBack()}
          >
            Pause and resume later
          </button>
        </div>
      </div>
    );
  }

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
            {practiceState.reviewMode ? 'Back to Review' : 'Back to Study Plan'}
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

      {/* ── REVIEW-MODE BANNER (Phase 5 of PAST_TEST_REVIEW_PLAN.md) ── */}
      {practiceState.reviewMode && (
        <div
          role="status"
          aria-live="polite"
          style={{
            background: '#fef3c7', border: `1px solid ${C.warning}`, borderRadius: '10px',
            padding: '8px 14px', marginBottom: '10px',
            display: 'flex', alignItems: 'center', gap: '10px',
            fontSize: '12.5px', color: '#92400e',
          }}
        >
          <span aria-hidden="true">👁</span>
          <span>
            <strong>Review session.</strong>{' '}
            This won't affect your study plan or skill mastery.
          </span>
        </div>
      )}

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
          {/* Question header. In review mode the rounds-of-8 framing is
              just noise — the session is "items you got wrong on this
              test," not a skill drill. Instead show the original
              moduleIndex·questionIndex (e.g., "M1·Q3") so the user can
              place which item from the original test they're retrying. */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
            <HandAuthoredStamp />
            <span style={{ fontSize: '14px', fontWeight: '700', color: C.textSec }}>
              {practiceState.reviewMode && typeof currentQuestion?.moduleIndex === 'number'
                ? `M${currentQuestion.moduleIndex + 1}·Q${(currentQuestion.questionIndex ?? 0) + 1} (originally missed)`
                : currentRound
                  ? `${currentRound.label} · Q ${positionInRound} of ${currentRound.questionIds.length}`
                  : `Question ${idx + 1}`}
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

          {/* Question text — serif (Times) to match the official Bluebook
              test stem; same family the shared AnswerChoiceList uses. */}
          <div style={{
            fontFamily: "'Times New Roman', 'Georgia', 'Cambria', serif",
            fontSize: '17px',
            fontWeight: '400',
            color: C.text,
            lineHeight: '1.7',
            marginBottom: '24px',
          }}>
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
            <div style={{
              fontFamily: "'Times New Roman', 'Georgia', 'Cambria', serif",
              fontSize: '16px',
              color: C.text,
              lineHeight: '1.7',
              marginBottom: '20px',
            }}>
              {Array.isArray(currentQuestion.questionContinued) || (typeof currentQuestion.questionContinued === 'object')
                ? <QuestionRenderer content={currentQuestion.questionContinued} />
                : <MathText>{currentQuestion.questionContinued}</MathText>
              }
            </div>
          )}

          {/* ── Answer choices (shared component — same look as the
                full mock test, driven by AnswerChoiceList.css) ── */}
          <div style={{ borderTop: `1px solid ${C.border}`, paddingTop: '20px' }}>
            <AnswerChoiceList
              choices={currentQuestion.choices || []}
              selectedId={practiceState.selectedAnswer}
              eliminatedIds={eliminated}
              showResult={practiceState.showFeedback}
              correctId={currentQuestion.correctAnswer}
              onSelect={onSelectAnswer}
              onToggleEliminate={handleToggleEliminate}
            />

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

              {/* Day 5 D3 — italic editorial sentence after a wrong answer.
                  Only renders when the assignment carries a weakness shape
                  (focus-area drills do; review-queue and ad-hoc don't). */}
              {!practiceState.answers[currentQuestion.id]?.correct
                && practiceState.assignmentMeta?.weakness
                && (() => {
                  const sentence = formatDiagnosticSentence(practiceState.assignmentMeta.weakness);
                  if (!sentence) return null;
                  return (
                    <p style={{
                      margin: '12px 0 0',
                      fontFamily: 'var(--font-reading)',
                      fontStyle: 'italic',
                      fontSize: '14px',
                      lineHeight: 1.5,
                      color: C.textSec,
                    }}>
                      {sentence}
                    </p>
                  );
                })()}

              {/* Try-similar — only when wrong (E4) and skill pool isn't exhausted (GAP-3) */}
              {!practiceState.answers[currentQuestion.id]?.correct && typeof onTrySimilar === 'function' && (
                <button
                  type="button"
                  onClick={handleTrySimilarClick}
                  disabled={isTrySimilarExhausted}
                  aria-label={isTrySimilarExhausted
                    ? 'No more similar questions for this skill'
                    : 'Try a similar question for the same skill'}
                  style={{
                    marginTop: '14px',
                    minHeight: '44px',                /* D-A11Y-1: WCAG/iOS HIG tap target */
                    padding: '12px 18px', borderRadius: '8px',
                    border: `1px solid ${isTrySimilarExhausted ? C.border : C.brand}`,
                    background: isTrySimilarExhausted ? C.bg : C.white,
                    color: isTrySimilarExhausted ? C.textMuted : C.brand,
                    fontSize: '14px', fontWeight: '600',
                    cursor: isTrySimilarExhausted ? 'not-allowed' : 'pointer',
                  }}
                >
                  {isTrySimilarExhausted
                    ? 'No more similar questions'
                    : '↻ Try a similar question'}
                </button>
              )}
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
