/**
 * PacingDrill — the timed runner for pacingService's three modes.
 *
 *   speed_rounds     : per-question countdown (60s), auto-advance on answer or expiry.
 *   checkpoint_pacing: one cumulative countdown + checkpoint banners at Q4/8/11.
 *   last_8_min       : cumulative countdown, triage framing.
 *
 * The point is time PRESSURE, so the rhythm is fast: pick a choice -> brief
 * correct/incorrect flash -> next. On finish it grades via evaluatePacingSession
 * and shows an A/B/C summary. Wall-clock timing reuses timerClock (no drift).
 *
 * Self-contained: App sources the questions + the mode config and renders this;
 * onComplete(summary, results) is for analytics, onExit returns to the dashboard.
 */

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { MathText } from './MathText';
import QuestionRenderer from './QuestionRenderer';
import AnswerChoiceList from './shared/AnswerChoiceList';
import { evaluatePacingSession } from '../services/pacingService';
import { deriveDeadline, computeRemaining } from '../services/timerClock';

const ORANGE = 'var(--color-brand-primary)';
const GREEN = 'var(--color-success-700)';
const RED = 'var(--color-error-700)';
const RESULT_FLASH_MS = 800;

const fmtTime = (secs) => {
  const s = Math.max(0, Math.round(secs));
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
};

const PacingDrill = ({ config = {}, questions = [], onComplete, onExit, user = null }) => {
  const total = questions.length;
  const isPerQuestion = !!config.showTimerPerQuestion;
  const perQ = config.timePerQuestion || 60;
  const sessionSeconds = config.totalTimeSeconds || (isPerQuestion ? perQ * Math.max(1, total) : 600);

  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [remaining, setRemaining] = useState(isPerQuestion ? perQ : sessionSeconds);
  const [phase, setPhase] = useState('running'); // 'running' | 'done'
  const [summary, setSummary] = useState(null);
  const [checkpointMsg, setCheckpointMsg] = useState(null);

  // Refs the tick loop reads (avoids stale closures without re-creating the interval).
  const indexRef = useRef(0);
  const phaseRef = useRef('running');
  const answeredRef = useRef(false);
  const resultsRef = useRef([]);
  const deadlineRef = useRef(deriveDeadline(isPerQuestion ? perQ : sessionSeconds, Date.now()));
  const qStartRef = useRef(Date.now());
  const advanceTimer = useRef(null);
  const checkpointTimer = useRef(null);

  const finish = useCallback(() => {
    if (phaseRef.current === 'done') return;
    phaseRef.current = 'done';
    // Unanswered questions (ran out of time) count as wrong attempts.
    const padded = [...resultsRef.current];
    while (padded.length < total) padded.push({ wasCorrect: false, timeSpent: 0 });
    const result = evaluatePacingSession(config, padded);
    setSummary(result);
    setPhase('done');
    if (advanceTimer.current) clearTimeout(advanceTimer.current);
    try { onComplete?.(result, padded); } catch (e) { console.error('[PacingDrill] onComplete error:', e); }
  }, [config, total, onComplete]);

  const advance = useCallback(() => {
    if (advanceTimer.current) { clearTimeout(advanceTimer.current); advanceTimer.current = null; }
    const next = indexRef.current + 1;
    if (next >= total) { finish(); return; }
    indexRef.current = next;
    answeredRef.current = false;
    qStartRef.current = Date.now();
    if (isPerQuestion) deadlineRef.current = deriveDeadline(perQ, Date.now());
    setIndex(next);
    setSelected(null);
    setShowResult(false);
    // Checkpoint banner (checkpoint_pacing): config.checkpoints are 1-indexed question numbers.
    if (Array.isArray(config.checkpoints) && config.checkpoints.includes(next + 1)) {
      setCheckpointMsg(`Checkpoint: question ${next + 1}. Stay on pace.`);
      if (checkpointTimer.current) clearTimeout(checkpointTimer.current);
      checkpointTimer.current = setTimeout(() => setCheckpointMsg(null), 3000);
    }
  }, [total, isPerQuestion, perQ, config.checkpoints, finish]);

  const record = useCallback((wasCorrect, timeSpent) => {
    if (answeredRef.current) return;
    answeredRef.current = true;
    resultsRef.current = [...resultsRef.current, { wasCorrect, timeSpent }];
  }, []);

  const handleSelect = useCallback((choiceId) => {
    if (answeredRef.current || phaseRef.current !== 'running') return;
    const q = questions[indexRef.current];
    const wasCorrect = choiceId === q?.correctAnswer;
    const timeSpent = Math.round((Date.now() - qStartRef.current) / 1000);
    record(wasCorrect, timeSpent);
    setSelected(choiceId);
    setShowResult(true);
    advanceTimer.current = setTimeout(advance, RESULT_FLASH_MS);
  }, [questions, record, advance]);

  // Single tick loop: drives the countdown + expiry for both timer styles.
  useEffect(() => {
    const id = setInterval(() => {
      if (phaseRef.current !== 'running') return;
      const { remainingSeconds, isUp } = computeRemaining({ deadlineTs: deadlineRef.current, nowTs: Date.now() });
      setRemaining(remainingSeconds);
      if (!isUp) return;
      if (isPerQuestion) {
        // Per-question expiry: mark unanswered as wrong, then advance behind the
        // same brief flash as a manual answer (handleSelect) instead of jumping
        // instantly. Schedule once: advance() nulls advanceTimer when it runs, so
        // the guard stops later ticks (still firing every 250ms past the deadline)
        // from re-scheduling and deferring the advance forever.
        if (!answeredRef.current) { record(false, perQ); setShowResult(true); }
        if (!advanceTimer.current) advanceTimer.current = setTimeout(advance, RESULT_FLASH_MS);
      } else {
        finish(); // cumulative budget exhausted
      }
    }, 250);
    // Only tear down the interval here. The advance/checkpoint timeouts are NOT
    // owned by this effect: `advance`/`finish` change identity on every parent
    // render (onComplete is an inline prop), so this effect re-runs constantly —
    // clearing the pending advance timer on a re-run cancels an in-flight
    // answer-flash advance, and in cumulative modes nothing reschedules it
    // (the drill would freeze on the current question).
    return () => { clearInterval(id); };
  }, [isPerQuestion, perQ, record, advance, finish]);

  // Unmount-only cleanup for the pending advance/checkpoint timeouts (prevents a
  // setState-after-unmount without cancelling advances on benign effect re-runs).
  useEffect(() => () => {
    if (advanceTimer.current) clearTimeout(advanceTimer.current);
    if (checkpointTimer.current) clearTimeout(checkpointTimer.current);
  }, []);

  if (!total) {
    return (
      <div style={{ maxWidth: 720, margin: '40px auto', padding: 24, textAlign: 'center', color: 'var(--color-slate-500)' }}>
        <p>No questions available for this pacing drill right now.</p>
        <button onClick={onExit} style={btnStyle(true)}>Back to dashboard</button>
      </div>
    );
  }

  if (phase === 'done' && summary) {
    const gradeColor = summary.grade === 'A' ? 'var(--color-success-700)' : summary.grade === 'B' ? 'var(--color-warning-700)' : 'var(--color-error-700)';
    return (
      <div style={{ maxWidth: 560, margin: '48px auto', padding: '0 20px', textAlign: 'center' }}>
        <div style={{ fontSize: 13, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-slate-500)', marginBottom: 8 }}>
          {config.label} complete
        </div>
        <div style={{ fontSize: 64, fontWeight: 800, color: gradeColor, lineHeight: 1 }}>{summary.grade}</div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 28, margin: '24px 0', color: 'var(--color-slate-700)' }}>
          <Stat label="Accuracy" value={`${summary.accuracy}%`} />
          <Stat label="Avg / question" value={`${summary.avgTimePerQuestion}s`} />
          {summary.underBudget != null && (
            <Stat label="Under budget" value={`${summary.underBudget}/${summary.total}`} />
          )}
        </div>
        <p style={{ color: 'var(--color-slate-600)', fontSize: 15, lineHeight: 1.6, marginBottom: 28 }}>{summary.message}</p>
        <button onClick={onExit} style={btnStyle(true)}>Done</button>
      </div>
    );
  }

  const q = questions[index];
  const lowTime = remaining <= 10;
  // Pacing timer reads by function: ample time = GREEN, getting tight = ORANGE,
  // critical = RED. Threshold is the remaining fraction of the budget (color only;
  // timing logic above is untouched). The <=10s hard floor stays critical.
  const timerBudget = isPerQuestion ? perQ : sessionSeconds;
  const remainingFraction = remaining / Math.max(1, timerBudget);
  const timerColor = lowTime || remainingFraction <= 0.15
    ? RED
    : remainingFraction <= 0.4
      ? ORANGE
      : GREEN;

  return (
    <div style={{ maxWidth: 760, margin: '24px auto', padding: '0 20px' }}>
      {/* Header: mode + timer */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
        <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--color-slate-500)' }}>
          {config.label} · Q{index + 1} of {total}
        </div>
        <div
          aria-label="Time remaining"
          style={{
            fontVariantNumeric: 'tabular-nums',
            fontSize: 22, fontWeight: 700,
            color: timerColor,
            transition: 'color 0.2s ease',
          }}
        >
          {fmtTime(remaining)}{isPerQuestion ? ' / q' : ''}
        </div>
      </div>

      {/* Progress / time bar */}
      <div style={{ height: 4, background: 'var(--color-slate-200)', borderRadius: 999, overflow: 'hidden', marginBottom: 16 }}>
        <div style={{
          height: '100%',
          width: `${Math.max(0, Math.min(100, (remaining / (isPerQuestion ? perQ : sessionSeconds)) * 100))}%`,
          background: timerColor,
          transition: 'width 0.25s linear',
        }} />
      </div>

      {config.personalizedReason && index === 0 && !showResult && (
        <div style={{ fontSize: 13, color: 'var(--color-slate-500)', marginBottom: 14, fontStyle: 'italic' }}>
          {config.personalizedReason}
        </div>
      )}

      {checkpointMsg && (
        <div style={{ background: '#fff7ed', border: `1px solid ${ORANGE}`, color: '#9a3412', borderRadius: 8, padding: '8px 12px', fontSize: 13, fontWeight: 600, marginBottom: 14 }}>
          {checkpointMsg}
        </div>
      )}

      {/* Question */}
      <div style={{ fontFamily: "'Times New Roman', Georgia, serif", fontSize: 17, color: 'var(--color-slate-800)', lineHeight: 1.7, marginBottom: 20 }}>
        {Array.isArray(q.question) || (q.question && typeof q.question === 'object')
          ? <QuestionRenderer content={q.question} />
          : <MathText>{q.question}</MathText>}
      </div>

      <AnswerChoiceList
        choices={q.choices || []}
        selectedId={selected}
        showResult={showResult}
        correctId={q.correctAnswer}
        onSelect={handleSelect}
      />

      <div style={{ marginTop: 20, textAlign: 'right' }}>
        <button onClick={onExit} style={btnStyle(false)}>Exit drill</button>
      </div>
    </div>
  );
};

const Stat = ({ label, value }) => (
  <div>
    <div style={{ fontSize: 22, fontWeight: 700, color: 'var(--color-slate-900)' }}>{value}</div>
    <div style={{ fontSize: 12, color: 'var(--color-slate-400)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{label}</div>
  </div>
);

const btnStyle = (primary) => ({
  padding: '10px 22px',
  borderRadius: 999,
  border: primary ? 'none' : '1px solid var(--color-slate-300)',
  background: primary ? ORANGE : 'transparent',
  color: primary ? '#fff' : 'var(--color-slate-500)',
  fontSize: 14,
  fontWeight: 600,
  cursor: 'pointer',
});

export default PacingDrill;
