import { useState, useRef, useEffect } from 'react';
import { getAllPracticeTests } from '../data/practiceTests';
import { ArrowLeftIcon, ArrowRightIcon, ChevronDownIcon, TimerIcon, CircleDotIcon } from '../design/icons';
import { Modal } from './ui/Modal';
import { showToast } from './ui/Toaster';
import './PracticeTestList.css';

// SAT section scores top out at 800; used for the section progress bars.
const SECTION_MAX = 800;

const fmtShortDate = (v) => {
  if (!v) return '';
  const d = v?.toDate?.() || new Date(v);
  return Number.isNaN(d.getTime()) ? '' : d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
};
const attemptDate = (result) => {
  const v = result?.lastAttemptAt;
  const d = v?.toDate?.() || new Date(v || 0);
  return Number.isNaN(d.getTime()) ? new Date(0) : d;
};
// sectionScores is persisted PER ATTEMPT, not on the aggregate row — reading
// result.sectionScores was always null, so the section chips/bars never showed.
// Pick the attempt backing the displayed TOTAL (max scaledScore; newest
// completedAt as tiebreak — by score/date, not array position, since the
// attempts array orientation is not a stable contract).
const bestAttempt = (result) => {
  const attempts = Array.isArray(result?.attempts) ? result.attempts : [];
  return attempts.reduce((best, a) => {
    if (!a) return best;
    if (!best) return a;
    const as = a.scaledScore ?? -Infinity;
    const bs = best.scaledScore ?? -Infinity;
    if (as !== bs) return as > bs ? a : best;
    return new Date(a.completedAt || 0) >= new Date(best.completedAt || 0) ? a : best;
  }, null);
};
const sectionScore = (result, key) => {
  const best = bestAttempt(result);
  if (!best) return null;
  // bestScaledScore is a persisted monotonic max that can outlive its backing
  // attempt (trimAttempts keeps only the 5 newest). If the best RETAINED
  // attempt isn't the one driving the displayed TOTAL, suppress the section
  // chips rather than show numbers that won't sum to the TOTAL.
  if (typeof result?.bestScaledScore === 'number' && best.scaledScore !== result.bestScaledScore) {
    return null;
  }
  const s = best.sectionScores;
  return s && typeof s[key] === 'number' ? s[key] : null;
};

const PracticeTestList = ({
  user,
  practiceTestResults,
  onSelectTest,
  onBack,
  onSelectTestWithMode,
  getTestBestScore,
  getTestAttempts,
  inProgressTests,
  onResumeTest,
  onViewResults,
  onResetTest,
  billingLocked = false,
  onSubscribe,
}) => {
  const tests = getAllPracticeTests();
  // One open launch dropdown at a time, keyed by `${testId}:launch`.
  const [openDropdown, setOpenDropdown] = useState(null);
  const [expandedTestId, setExpandedTestId] = useState(null);
  const [userToggled, setUserToggled] = useState(false);
  const dropdownRef = useRef(null);
  const [resetTarget, setResetTarget] = useState(null);
  const [resetting, setResetting] = useState(false);

  const closeResetModal = () => {
    if (resetting) return;
    setResetTarget(null);
  };

  const handleConfirmReset = async () => {
    if (!resetTarget || resetting) return;
    const { test, testNum } = resetTarget;
    setResetting(true);
    try {
      await onResetTest?.(test);
      showToast({ type: 'success', message: `Digital SAT #${testNum} has been reset.` });
      setResetTarget(null);
    } catch {
      showToast({ type: 'error', message: 'Could not reset the test. Please try again.' });
    } finally {
      setResetting(false);
    }
  };

  // Default-expand the most recently completed test (until the user toggles a card).
  useEffect(() => {
    if (userToggled || expandedTestId) return;
    const completed = tests
      .filter((t) => getTestBestScore?.(t.id) != null && !inProgressTests?.[t.id])
      .sort((a, b) => attemptDate(practiceTestResults?.[a.id]) - attemptDate(practiceTestResults?.[b.id]));
    if (completed.length) setExpandedTestId(completed[completed.length - 1].id);
  }, [tests, getTestBestScore, inProgressTests, practiceTestResults, userToggled, expandedTestId]);

  useEffect(() => {
    if (!openDropdown) return;
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) setOpenDropdown(null);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [openDropdown]);

  const toggleExpand = (id) => {
    setOpenDropdown(null);
    setUserToggled(true);
    setExpandedTestId((prev) => (prev === id ? null : id));
  };

  // ── Summary stats (latest score / completed / goal progress) ──────────
  const completedList = tests
    .map((t) => ({ id: t.id, score: getTestBestScore?.(t.id) ?? null, result: practiceTestResults?.[t.id] }))
    .filter((x) => x.score != null)
    .sort((a, b) => attemptDate(a.result) - attemptDate(b.result));
  const latestScore = completedList.length ? completedList[completedList.length - 1].score : null;
  const prevScore = completedList.length >= 2 ? completedList[completedList.length - 2].score : null;
  const scoreDelta = latestScore != null && prevScore != null ? latestScore - prevScore : null;
  const completedCount = completedList.length;
  const goal = typeof user?.targetScore === 'number' ? user.targetScore : null;
  const remaining = goal != null && latestScore != null ? goal - latestScore : null;
  const goalPct = goal && latestScore != null ? Math.max(4, Math.min(100, Math.round((latestScore / goal) * 100))) : 0;

  return (
    <div className="pt-screen" data-theme="light">
      <div className="pt-inner">
      <button type="button" className="pt-back" onClick={onBack}>
        <ArrowLeftIcon size={14} color="currentColor" /> Back to Dashboard
      </button>
      <h1 className="pt-title">Practice Tests</h1>
      <p className="pt-subtitle">Full-length digital SAT practice tests — Reading &amp; Writing, then Math.</p>

      {latestScore != null && (
        <div className="pt-summary">
          <div className="pt-summary-stat">
            <span className="pt-summary-num">{latestScore}</span>
            <span className="pt-summary-label">Latest score</span>
          </div>
          <div className="pt-summary-divider" aria-hidden="true" />
          <div className="pt-summary-stat">
            <span className="pt-summary-num">{completedCount}<small> / {tests.length}</small></span>
            <span className="pt-summary-label">Completed</span>
          </div>
          {goal != null && (
            <>
              <div className="pt-summary-divider" aria-hidden="true" />
              <div className="pt-summary-goal">
                <div className="pt-summary-goal-row">
                  <span className="pt-summary-goal-text">
                    {remaining > 0
                      ? <><strong>{remaining}</strong> points to your {goal} goal</>
                      : `You're at your ${goal} goal`}
                  </span>
                  {scoreDelta != null && scoreDelta !== 0 && (
                    <span className={`pt-summary-goal-delta${scoreDelta < 0 ? ' is-down' : ''}`}>
                      {scoreDelta > 0 ? '+' : ''}{scoreDelta} last test
                    </span>
                  )}
                </div>
                <div className="pt-summary-bar">
                  <div className="pt-summary-bar-fill" style={{ width: `${goalPct}%` }} />
                </div>
              </div>
            </>
          )}
        </div>
      )}

      <div className="pt-list">
        {tests.map((test, idx) => (
          <TestCard
            key={test.id}
            test={test}
            testNum={idx + 1}
            result={practiceTestResults?.[test.id]}
            bestScore={getTestBestScore?.(test.id) ?? null}
            attempts={getTestAttempts?.(test.id) ?? 0}
            inProgress={inProgressTests?.[test.id]}
            isExpanded={expandedTestId === test.id}
            onToggleExpand={() => toggleExpand(test.id)}
            openDropdown={openDropdown}
            setOpenDropdown={setOpenDropdown}
            dropdownRef={dropdownRef}
            onSelectTest={onSelectTest}
            onSelectTestWithMode={onSelectTestWithMode}
            onResumeTest={onResumeTest}
            onViewResults={onViewResults}
            onRequestReset={onResetTest ? () => setResetTarget({ test, testNum: idx + 1, inProgress: !!inProgressTests?.[test.id] }) : undefined}
            billingLocked={billingLocked}
            onSubscribe={onSubscribe}
          />
        ))}
      </div>

      </div>{/* /.pt-inner */}

      <Modal
        isOpen={!!resetTarget}
        onClose={closeResetModal}
        disabled={resetting}
        title="Reset this test?"
        maxWidth="440px"
        footer={(
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
            <button
              type="button"
              onClick={closeResetModal}
              disabled={resetting}
              style={{
                padding: '9px 16px', background: 'var(--color-white)', border: '1px solid var(--color-slate-300)',
                borderRadius: 'var(--radius-md)', color: 'var(--color-slate-600)', fontSize: '14px', fontWeight: 600,
                cursor: resetting ? 'default' : 'pointer',
              }}
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleConfirmReset}
              disabled={resetting}
              style={{
                padding: '9px 16px', background: 'var(--color-error-600)', border: 'none',
                borderRadius: 'var(--radius-md)', color: 'var(--color-white)', fontSize: '14px', fontWeight: 700,
                cursor: resetting ? 'default' : 'pointer', opacity: resetting ? 0.7 : 1,
              }}
            >
              {resetting ? 'Resetting…' : 'Reset test'}
            </button>
          </div>
        )}
      >
        <p style={{ margin: 0, fontSize: '15px', lineHeight: 1.6, color: 'var(--color-slate-600)' }}>
          {resetTarget?.inProgress ? (
            <>This discards your saved progress for{' '}
            <strong style={{ color: 'var(--color-slate-900)' }}>Digital SAT #{resetTarget?.testNum}</strong>
            {' '}— as if you never started it. You&rsquo;ll begin again from question 1. Your other tests aren&rsquo;t affected, and this can&rsquo;t be undone.</>
          ) : (
            <>This permanently erases your scores, attempt history, and saved progress for{' '}
            <strong style={{ color: 'var(--color-slate-900)' }}>Digital SAT #{resetTarget?.testNum}</strong>
            {' '}— as if you never took it. Your other tests aren&rsquo;t affected, and this can&rsquo;t be undone.</>
          )}
        </p>
      </Modal>
    </div>
  );
};

const LaunchMenu = ({ totalTime, onPick, up }) => (
  <div className={`pt-dropdown${up ? ' opens-up' : ''}`}>
    <button type="button" className="pt-dropdown-btn" onClick={() => onPick(true)}>
      <TimerIcon size={16} color="var(--sp-text-2)" /> Timed
      <span className="pt-dropdown-hint">~{totalTime}m</span>
    </button>
    <button type="button" className="pt-dropdown-btn" onClick={() => onPick(false)}>
      <CircleDotIcon size={16} color="var(--sp-text-2)" /> Untimed
      <span className="pt-dropdown-hint">No limit</span>
    </button>
  </div>
);

const SectionScoreRow = ({ kind, title, q, time, score }) => {
  const pct = typeof score === 'number' ? Math.max(3, Math.min(100, Math.round((score / SECTION_MAX) * 100))) : 0;
  return (
    <div className="pt-secrow">
      <span className={`pt-secrow-dot is-${kind}`} aria-hidden="true" />
      <div className="pt-secrow-info">
        <div className="pt-secrow-title">{title}</div>
        <div className="pt-secrow-meta">{q} questions · {time} min</div>
      </div>
      <div className="pt-secrow-track">
        <div className={`pt-secrow-fill is-${kind}`} style={{ width: `${pct}%` }} />
      </div>
      <span className="pt-secrow-score">{score != null ? score : '—'}</span>
    </div>
  );
};

const TestCard = ({
  test,
  testNum,
  result,
  bestScore,
  attempts,
  inProgress,
  isExpanded,
  onToggleExpand,
  openDropdown,
  setOpenDropdown,
  dropdownRef,
  onSelectTest,
  onSelectTestWithMode,
  onResumeTest,
  onViewResults,
  onRequestReset,
  billingLocked = false,
  onSubscribe,
}) => {
  const status = inProgress ? 'progress' : (bestScore != null || attempts > 0) ? 'completed' : 'notstarted';
  const rwMods = test.modules.filter((m) => m.section === 'reading-writing');
  const mathMods = test.modules.filter((m) => m.section === 'math');
  const rwTime = rwMods.reduce((s, m) => s + (m.timeLimit || 0), 0);
  const mathTime = mathMods.reduce((s, m) => s + (m.timeLimit || 0), 0);
  const rwQ = rwMods.reduce((s, m) => s + (m.questions?.length || 0), 0);
  const mathQ = mathMods.reduce((s, m) => s + (m.questions?.length || 0), 0);
  const totalQ = rwQ + mathQ;
  const totalTime = rwTime + mathTime;
  const rwScore = sectionScore(result, 'reading-writing');
  const mathScore = sectionScore(result, 'math');
  const answered = inProgress ? Object.keys(inProgress.answers || {}).length : 0;
  const dateStr = fmtShortDate(result?.lastAttemptAt);

  const dropKey = `${test.id}:launch`;
  const launchOpen = openDropdown === dropKey;
  const launch = (timed) => {
    setOpenDropdown(null);
    if (onSelectTestWithMode) onSelectTestWithMode(test, timed, null);
    else if (onSelectTest) onSelectTest(test);
  };

  if (status === 'progress') {
    const pct = totalQ ? Math.max(3, Math.round((answered / totalQ) * 100)) : 0;
    return (
      <div className="pt-card is-progress">
        <div className="pt-card-row">
          <span className="pt-badge is-progress">#{testNum}</span>
          <div className="pt-card-main">
            <div className="pt-card-titlerow">
              <span className="pt-card-title">Digital SAT #{testNum}</span>
              <span className="pt-pill is-progress">In progress</span>
            </div>
            <div className="pt-progress">
              <div className="pt-progress-track"><div className="pt-progress-fill" style={{ width: `${pct}%` }} /></div>
              <span className="pt-progress-label">{answered}/{totalQ}</span>
            </div>
          </div>
          <div className="pt-progress-actions">
            {onRequestReset && (
              <button
                type="button"
                className="pt-reset"
                onClick={onRequestReset}
                title="Discard your progress on this test and start over from question 1"
              >
                Reset
              </button>
            )}
            {billingLocked ? (
              <button type="button" className="pt-btn is-outline" onClick={() => onSubscribe && onSubscribe()}>
                Subscribe to continue
              </button>
            ) : (
              <button type="button" className="pt-btn is-primary" onClick={() => onResumeTest && onResumeTest(test, inProgress?.isTimed)}>
                Continue <ArrowRightIcon size={16} color="currentColor" />
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (status === 'notstarted') {
    return (
      <div className="pt-card">
        <div className="pt-card-row">
          <span className="pt-badge is-notstarted">#{testNum}</span>
          <div className="pt-card-main">
            <div className="pt-card-titlerow">
              <span className="pt-card-title">Digital SAT #{testNum}</span>
              <span className="pt-pill is-notstarted">Not started</span>
            </div>
            <div className="pt-card-meta">Full-length · {totalQ} questions · ~{totalTime} min</div>
          </div>
          <div className="pt-launch" ref={launchOpen ? dropdownRef : null}>
            {billingLocked ? (
              <button type="button" className="pt-btn is-outline" onClick={() => onSubscribe && onSubscribe()}>
                Subscribe to unlock
              </button>
            ) : (
              <button type="button" className="pt-btn is-outline" onClick={() => setOpenDropdown(launchOpen ? null : dropKey)}>
                Start test
              </button>
            )}
            {!billingLocked && launchOpen && <LaunchMenu totalTime={totalTime} onPick={launch} />}
          </div>
        </div>
      </div>
    );
  }

  // Completed (expandable)
  return (
    <div className="pt-card is-completed">
      <button type="button" className={`pt-card-head${isExpanded ? ' is-open' : ''}`} onClick={onToggleExpand} aria-expanded={isExpanded}>
        <span className="pt-badge is-completed">#{testNum}</span>
        <div className="pt-card-main">
          <div className="pt-card-titlerow">
            <span className="pt-card-title">Digital SAT #{testNum}</span>
            <span className="pt-pill is-completed">Completed</span>
          </div>
          {(rwScore != null || mathScore != null || dateStr) && (
            <div className="pt-chips">
              {rwScore != null && <span className="pt-chip is-rw">R&amp;W {rwScore}</span>}
              {mathScore != null && <span className="pt-chip is-math">Math {mathScore}</span>}
              {dateStr && <span className="pt-chip-date">· {dateStr}</span>}
            </div>
          )}
        </div>
        <div className="pt-card-total">
          <span className="pt-card-total-num">{bestScore}</span>
          <span className="pt-card-total-label">TOTAL</span>
        </div>
        <span className={`pt-card-chev${isExpanded ? ' is-open' : ''}`} aria-hidden="true">
          <ChevronDownIcon size={18} color="currentColor" />
        </span>
      </button>

      {isExpanded && (
        <div className="pt-card-body">
          <SectionScoreRow kind="rw" title="Reading and Writing" q={rwQ} time={rwTime} score={rwScore} />
          <SectionScoreRow kind="math" title="Math" q={mathQ} time={mathTime} score={mathScore} />
          <div className="pt-card-foot">
            <div className="pt-foot-left">
              <span className="pt-foot-date">{dateStr ? `Completed ${dateStr}` : 'Completed'}</span>
              {onRequestReset && (
                <button
                  type="button"
                  className="pt-reset"
                  onClick={(e) => { e.stopPropagation(); onRequestReset(); }}
                  title="Erase this test's scores and progress — as if you never took it"
                >
                  Reset
                </button>
              )}
            </div>
            <div className="pt-foot-actions">
              <div className="pt-launch" ref={launchOpen ? dropdownRef : null}>
                <button type="button" className="pt-btn is-outline is-sm" onClick={() => setOpenDropdown(launchOpen ? null : dropKey)}>
                  Retake
                </button>
                {launchOpen && <LaunchMenu totalTime={totalTime} onPick={launch} up />}
              </div>
              {onViewResults && attempts > 0 && (
                <button type="button" className="pt-btn is-primary is-sm" onClick={() => onViewResults(test)}>
                  Review answers <ArrowRightIcon size={16} color="currentColor" />
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PracticeTestList;
