import React, { useEffect, useMemo, useRef, useState } from 'react';
import { MathText } from './MathText';
import QuestionDiagram from './QuestionDiagrams';
import QuestionRenderer from './QuestionRenderer';
import SolutionExplanation from './SolutionExplanation';
import AiTutorChat from './AiTutorChat';
import HandAuthoredStamp from './HandAuthoredStamp';
import AnswerChoiceList from './shared/AnswerChoiceList';
import { formatDiagnosticSentence } from '../services/diagnosticEngine';
import { findRoundIndexForQuestion, computeRoundProgress } from '../services/buildRounds';
import { getDrillChipForWeakness } from '../services/selectors/drillChip';
import { getDesmosTip } from '../services/selectors/desmosTip';
import { decideTier } from '../data/questions/bank';
import { trackDrillStarted, trackDrillChipShown } from '../services/analyticsService';
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

// ── Sidebar: persistent question list (Acely-style left pane) ──────────
// One row per question. Status icon + 2-line stem preview. Current row
// gets an orange highlight; answered rows get green ✓ or red ✗.
function QuestionSidebar({ questions, currentIndex, answers, onNavigate, onBack, headerTitle, drillPatternLabel }) {
  return (
    <aside className="aps-sidebar">
      <button onClick={onBack} className="aps-sidebar-back" type="button">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <path d="M15 18l-6-6 6-6"/>
        </svg>
        Back to Study Plan
      </button>

      <div className="aps-sidebar-title">{drillPatternLabel || headerTitle}</div>

      <div className="aps-sidebar-divider" />

      <div className="aps-sidebar-list">
        {questions.map((q, idx) => {
          const ans = answers[q.id];
          const isCurrent = idx === currentIndex;
          const stem = stemPreview(q);
          let rowClass = 'aps-sidebar-row';
          if (isCurrent) rowClass += ' is-current';
          else if (ans?.correct) rowClass += ' is-correct';
          else if (ans && !ans.correct) rowClass += ' is-wrong';
          else if (idx > currentIndex && !ans) rowClass += ' is-locked';

          return (
            <button
              key={idx}
              onClick={() => onNavigate(idx)}
              className={rowClass}
              type="button"
              title={stem}
            >
              <span className="aps-sidebar-status" aria-hidden="true">
                {ans?.correct
                  ? <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  : ans
                    ? <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                    : isCurrent
                      ? <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="6"/></svg>
                      : <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9"/></svg>
                }
              </span>
              <span className="aps-sidebar-stem">{stem}</span>
            </button>
          );
        })}
      </div>
    </aside>
  );
}

// Extracts a clean text preview from a question. Handles the various
// question shapes: plain string, segments array, object form, fill-in
// stems with passages, etc. Always returns a single-line string.
function stemPreview(q) {
  // Prefer the passage's first sentence for R&W; otherwise the question.
  let raw = '';
  if (typeof q?.passage === 'string') raw = q.passage;
  else if (Array.isArray(q?.passages) && q.passages.length > 0 && q.passages[0]?.text) raw = q.passages[0].text;
  else if (typeof q?.question === 'string') raw = q.question;
  else if (Array.isArray(q?.question)) raw = q.question.map(s => s.text || s.math || '').join(' ');
  else if (q?.question?.segments) raw = q.question.segments.map(s => s.text || s.math || '').join(' ');
  else if (q?.question && typeof q.question === 'object') raw = q.question.text || '';
  if (!raw) return q?.id || 'Question';
  // Strip LaTeX delimiters and collapse whitespace
  return raw
    .replace(/\$([^$]*)\$/g, '$1')
    .replace(/\\[a-zA-Z]+/g, '')
    .replace(/[{}]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 80);
}

// Top progress strip — segmented dots like Acely's question-bar chips.
function ProgressDots({ total, currentIndex, answers, questions, onNavigate }) {
  return (
    <div className="aps-progress-dots" role="progressbar" aria-valuemin={1} aria-valuemax={total} aria-valuenow={currentIndex + 1}>
      {Array.from({ length: total }).map((_, i) => {
        const q = questions[i];
        const ans = q ? answers[q.id] : null;
        const isCurrent = i === currentIndex;
        let cls = 'aps-progress-dot';
        if (isCurrent) cls += ' is-current';
        else if (ans?.correct) cls += ' is-correct';
        else if (ans) cls += ' is-wrong';
        return (
          <button
            key={i}
            type="button"
            onClick={() => onNavigate(i)}
            aria-label={`Go to question ${i + 1}${ans ? (ans.correct ? ' (correct)' : ' (incorrect)') : ''}`}
            className={cls}
          >
            {isCurrent && <span className="aps-progress-dot-num">{i + 1}</span>}
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
  studentFingerprint = null,
  interventionLog = null,
  predictionLog = null,
}) => {
  const [eliminatedChoices, setEliminatedChoices] = useState({});
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

  // Phase 2 surfacing: when the weakness that triggered this drill carries
  // a specific SAT Pattern (e.g., 'reverse-percent'), show a "Practicing:"
  // chip in the header. Makes Tier-1 routing precision visible — students
  // see WHY their drill was assembled (not just "Algebra Practice" but
  // "Practicing: Reverse Percent"). Falls back to no chip when the weakness
  // is legacy/skill-only — graceful, never a worse experience.
  //
  // `getDrillChipForWeakness` returns null when the bank pool for the
  // weakness's pattern is below TIER1_PATTERN_THRESHOLD, so chip-shown ≡
  // Tier-1 fired ≡ exact pattern match was viable.
  const drillChip = useMemo(
    () => getDrillChipForWeakness(practiceState?.assignmentMeta?.weakness),
    [practiceState?.assignmentMeta?.weakness],
  );
  const drillPatternLabel = drillChip?.label || null;
  const drillPatternSlug = drillChip?.slug || null;

  // Drill-launch + chip-shown telemetry. Fires once per shell mount.
  // Tier classification comes from `decideTier` — the source-of-truth
  // cascade mirror of `getTargetedWeaknessSet`. So `tier: 'pattern'` here
  // ≡ Tier 1 actually fired, `tier: 'style'` ≡ Tier 2 fired, etc. Pairs
  // with `recovery_drill_done` downstream to measure completion-rate-by-tier.
  // Stable userId guard prevents anonymous mounts from logging.
  const drillStartTrackedRef = useRef(false);
  useEffect(() => {
    if (drillStartTrackedRef.current) return;
    const uid = user?.uid;
    if (!uid) return;
    const weakness = practiceState?.assignmentMeta?.weakness;
    const section = weakness?.section || null;
    const source = practiceState?.reviewMode
      ? 'review-retry'
      : (practiceState?.assignmentMeta?.source || 'assigned');
    const decision = weakness ? decideTier({ weakSkills: [weakness] }) : { tier: 'empty' };
    trackDrillStarted(uid, {
      tier: decision.tier,
      pattern: drillPatternSlug || decision.matchedPatterns?.[0] || null,
      section,
      source,
      questionCount: Array.isArray(questions) ? questions.length : 0,
    });
    if (drillPatternLabel && drillPatternSlug) {
      trackDrillChipShown(uid, {
        pattern: drillPatternSlug,
        section,
        source,
      });
    }
    drillStartTrackedRef.current = true;
  }, [user?.uid, drillPatternLabel, drillPatternSlug, practiceState?.assignmentMeta, practiceState?.reviewMode, questions]);

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

  // ── ACTIVE PRACTICE — Acely-style 3-pane ──────────────────────────────

  return (
    <div className="aps-shell">

      {/* ── LEFT: Persistent question sidebar ── */}
      <QuestionSidebar
        questions={questions}
        currentIndex={idx}
        answers={practiceState.answers}
        onNavigate={handleNavigate}
        onBack={onBack}
        headerTitle={headerTitle}
        drillPatternLabel={drillPatternLabel}
      />

      {/* ── CENTER: Question card ── */}
      <main className="aps-center">

        {/* Progress dots strip */}
        <div className="aps-progress-strip">
          <ProgressDots
            total={total}
            currentIndex={idx}
            answers={practiceState.answers}
            questions={questions}
            onNavigate={handleNavigate}
          />
        </div>

        {/* Review-mode banner */}
        {practiceState.reviewMode && (
          <div className="aps-review-banner" role="status" aria-live="polite">
            <span aria-hidden="true">👁</span>
            <span><strong>Review session.</strong> This won't affect your study plan or skill mastery.</span>
          </div>
        )}

        <div className="aps-card">
          {/* Card eyebrow header (round label + tools) */}
          <header className="aps-card-header">
            <div className="aps-card-eyebrow">
              <div className="aps-card-round">
                {practiceState.reviewMode && typeof currentQuestion?.moduleIndex === 'number'
                  ? 'REVIEW SESSION'
                  : currentRound
                    ? currentRound.label.toUpperCase()
                    : `QUESTION ${idx + 1}`}
              </div>
              <div className="aps-card-subtitle">
                {practiceState.reviewMode && typeof currentQuestion?.moduleIndex === 'number'
                  ? `M${currentQuestion.moduleIndex + 1}·Q${(currentQuestion.questionIndex ?? 0) + 1} (originally missed)`
                  : currentRound
                    ? `${drillPatternLabel || headerTitle} — ${currentRound.questionIds.length} questions`
                    : `Question ${idx + 1} of ${total}`}
              </div>
            </div>

            <div className="aps-card-tools">
              {diffBadge && (
                <span className={`aps-diff-badge aps-diff-${diffBadge.label.toLowerCase()}`}>
                  {diffBadge.label}
                </span>
              )}
              <HandAuthoredStamp />
              {/* Calculator is a Math-only tool — the digital SAT does not
                  offer it on Reading & Writing. Hide it for R&W items. */}
              {currentQuestion?.section !== 'rw' && (
                <button
                  onClick={onToggleCalculator}
                  className={`aps-tool-btn ${showCalculator ? 'is-active' : ''}`}
                  type="button"
                  title="Toggle calculator"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="4" y="3" width="16" height="18" rx="2"/>
                    <line x1="8" y1="7" x2="16" y2="7"/>
                    <line x1="8" y1="12" x2="8.01" y2="12"/>
                    <line x1="12" y1="12" x2="12.01" y2="12"/>
                    <line x1="16" y1="12" x2="16.01" y2="12"/>
                    <line x1="8" y1="16" x2="8.01" y2="16"/>
                    <line x1="12" y1="16" x2="12.01" y2="16"/>
                    <line x1="16" y1="16" x2="16.01" y2="16"/>
                  </svg>
                  Calculator
                </button>
              )}
            </div>
          </header>

          {/* Scrollable card body */}
          <div className="aps-card-body">

          {/* R&W passage — basic plain-serif rendering (no Bluebook
              highlighting; that lives in PracticeTest for the timed flow).
              Covers all three R&W content shapes: single `passage`, paired
              `passages` array (cross-text-connections), and `studentNotes`
              object (rhetorical-synthesis). Without this, R&W drills show
              only the stem ("Which choice most logically completes the
              text?") with no passage to read. */}
          {currentQuestion.passage && (
            <div style={{
              fontFamily: "'Georgia', 'Cambria', 'Times New Roman', serif",
              fontSize: '17px',
              lineHeight: '1.65',
              color: C.text,
              marginBottom: '20px',
              whiteSpace: 'pre-wrap',
            }}>
              <MathText>{currentQuestion.passage}</MathText>
            </div>
          )}

          {Array.isArray(currentQuestion.passages) && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '20px' }}>
              {currentQuestion.passages.map((p, i) => (
                <div key={i}>
                  <div style={{
                    fontFamily: 'var(--font-ui)',
                    fontSize: '13px',
                    fontWeight: 700,
                    letterSpacing: '0.04em',
                    color: C.textSec,
                    textTransform: 'uppercase',
                    marginBottom: '6px',
                  }}>
                    {p.label || `Text ${i + 1}`}
                  </div>
                  <div style={{
                    fontFamily: "'Georgia', 'Cambria', 'Times New Roman', serif",
                    fontSize: '17px',
                    lineHeight: '1.65',
                    color: C.text,
                    whiteSpace: 'pre-wrap',
                  }}>
                    <MathText>{p.text}</MathText>
                  </div>
                </div>
              ))}
            </div>
          )}

          {currentQuestion.studentNotes && (
            <div style={{
              fontFamily: "'Georgia', 'Cambria', 'Times New Roman', serif",
              fontSize: '17px',
              lineHeight: '1.65',
              color: C.text,
              marginBottom: '20px',
            }}>
              {currentQuestion.studentNotes.intro && (
                <div style={{ marginBottom: '8px' }}>{currentQuestion.studentNotes.intro}</div>
              )}
              {Array.isArray(currentQuestion.studentNotes.bullets) && (
                <ul style={{ paddingLeft: '1.25rem', margin: '8px 0' }}>
                  {currentQuestion.studentNotes.bullets.map((b, i) => (
                    <li key={i} style={{ marginBottom: '4px' }}>
                      <MathText>{b}</MathText>
                    </li>
                  ))}
                </ul>
              )}
              {currentQuestion.studentNotes.goal && (
                <div style={{ marginTop: '8px', fontStyle: 'italic' }}>
                  <MathText>{currentQuestion.studentNotes.goal}</MathText>
                </div>
              )}
            </div>
          )}

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
          <div className="aps-answers" style={{ borderTop: `1px solid ${C.border}`, paddingTop: '20px' }}>
            <AnswerChoiceList
              choices={currentQuestion.choices || []}
              selectedId={practiceState.selectedAnswer}
              eliminatedIds={eliminated}
              showResult={practiceState.showFeedback}
              correctId={currentQuestion.correctAnswer}
              onSelect={onSelectAnswer}
              onToggleEliminate={handleToggleEliminate}
            />
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

              {/* Desmos route — the calculator play for this question family (math only) */}
              {(() => {
                const tip = getDesmosTip(currentQuestion);
                if (!tip) return null;
                return (
                  <div style={{ marginTop: '12px', background: 'rgba(71,85,105,0.07)', borderRadius: '10px', padding: '12px 16px', borderLeft: '3px solid #475569' }}>
                    <div style={{ fontSize: '12px', fontWeight: '600', color: '#475569', marginBottom: '4px' }}>
                      Desmos route — {tip.name} ({tip.timeEstimate})
                    </div>
                    <p style={{ fontSize: '14px', color: C.text, lineHeight: 1.5, margin: 0 }}>{tip.technique}</p>
                  </div>
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

          </div>{/* /aps-card-body */}

          {/* Footer: Previous · counter · Continue (or Check Answer) */}
          <footer className="aps-card-footer">
            <button
              type="button"
              onClick={() => handleNavigate(idx - 1)}
              disabled={idx === 0}
              className="aps-footer-prev"
              aria-label="Previous question"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M15 18l-6-6 6-6"/>
              </svg>
              Previous
            </button>

            <span className="aps-footer-counter">
              {answeredCount} of {total} answered
              {correctCount > 0 && <span className="aps-footer-correct"> · {correctCount} correct</span>}
            </span>

            {!practiceState.showFeedback ? (
              <button
                type="button"
                onClick={() => onCheckAnswer(currentQuestion)}
                disabled={!practiceState.selectedAnswer}
                className="aps-footer-cta"
              >
                Check Answer
              </button>
            ) : (
              <button
                type="button"
                onClick={() => onNextQuestion(questions)}
                className="aps-footer-cta"
              >
                {idx < total - 1 ? 'Continue' : 'See Results'}
              </button>
            )}
          </footer>

        </div>{/* /aps-card */}
      </main>{/* /aps-center */}

      {/* ── RIGHT: AI Tutor ── */}
      <aside className="aps-right">
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
            skills: currentQuestion?.skills || (currentQuestion?.skill ? [currentQuestion.skill] : []),
            // R&W stimulus + classification (undefined for math items → tutor stays math)
            section: currentQuestion?.section || 'math',
            domain: currentQuestion?.domain,
            passage: currentQuestion?.passage,
            passages: currentQuestion?.passages,
            studentNotes: currentQuestion?.studentNotes,
            questionTable: currentQuestion?.questionTable,
          }}
          embedded={true}
          headerCompact={true}
          standalone={false}
          reviewMode={!!practiceState.reviewMode}
          skillProgress={skillProgress}
          testDate={user?.testDate}
          user={user}
          practiceTestResults={practiceTestResults}
          studentFingerprint={studentFingerprint}
          interventionLog={interventionLog}
          predictionLog={predictionLog}
        />
      </aside>

    </div>
  );
};

export default AssignedPracticeShell;
