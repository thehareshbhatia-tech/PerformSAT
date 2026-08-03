import React, { useEffect, useMemo, useRef, useState } from 'react';
import './InnerOnboarding.css';
import Wordmark from '../ui/Wordmark';
import {
  CheckIcon, ArrowLeftIcon, ArrowRightIcon, CalendarIcon, TargetIcon,
} from '../../design/icons';
import { getUpcomingSATDates, formatSatChipLabel } from '../../data/satTestDates';

/**
 * InnerOnboarding — the post-signup "inner boarding" flow.
 *
 * Runs AFTER the account exists (the pre-signup funnel already captured goal +
 * context) and BEFORE the student lands on the home screen. It never launches
 * the diagnostic itself: on finish it hands the collected profile up and the
 * app drops the student on the first-run home, where the "Take your diagnostic"
 * CTA is waiting.
 *
 * Overlap handling (per product decision): the funnel already asked "feeling"
 * and the goal score, so those two screens arrive PRE-FILLED from the user doc
 * and read as confirm/adjust — the other screens (exam date, current score,
 * confident area, worry area, grad year) collect genuinely new data.
 *
 * @param {Object} props
 * @param {Object} props.user - the signed-in user doc (targetScore, testDate,
 *   currentScore, feeling, onboardingProfile.answers.feeling read for pre-fill)
 * @param {(payload:Object)=>void} props.onComplete - called with the collected
 *   profile { feeling, testDate, currentScore, targetScore, confidentArea,
 *   worryArea, gradYear }; the app persists it and navigates home.
 */

const DEFAULT_GOAL = 1400;
const clampGoal = (n) => {
  const v = Number(n);
  if (!Number.isFinite(v)) return DEFAULT_GOAL;
  return Math.min(1600, Math.max(400, Math.round(v / 10) * 10));
};
const clampSection = (n) => {
  const v = Number(n);
  if (!Number.isFinite(v)) return null;
  return Math.min(800, Math.max(200, Math.round(v / 10) * 10));
};

// "2026-08-22" → "Aug 22, 2026" (local, no Date-parse TZ drift).
const RECAP_MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const formatRecapDate = (iso) => {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso || '');
  if (!m) return iso;
  return `${RECAP_MONTHS[Number(m[2]) - 1]} ${Number(m[3])}, ${m[1]}`;
};

const FEELING_OPTIONS = [
  { value: 'confident', label: 'Confident. I just need reps' },
  { value: 'fine', label: 'Mostly fine, a little on edge' },
  { value: 'stressed', label: 'Stressed when I think about it' },
  { value: 'heavy', label: "It's genuinely weighing on me" },
];

const SECTION_OPTIONS = [
  { value: 'math', label: 'Math' },
  { value: 'rw', label: 'Reading and Writing' },
  { value: 'timing', label: 'Time management' },
  { value: 'strategy', label: 'Test-taking strategy' },
];

// Module scope so its identity is stable across renders — defined inline it
// remounted the whole option subtree on every state change, cutting the
// is-selected transition short and dropping keyboard focus to <body>.
const OptionList = ({ options, selected, onSelect }) => (
  <div className="io-options">
    {options.map((o) => {
      const isSel = selected === o.value;
      return (
        <button
          key={o.value}
          type="button"
          className={`io-option${isSel ? ' is-selected' : ''}`}
          onClick={() => onSelect(o.value)}
        >
          <span>{o.label}</span>
          {isSel && (
            <CheckIcon className="io-option-check" width={20} height={20} aria-hidden="true" />
          )}
        </button>
      );
    })}
  </div>
);

const InnerOnboarding = ({ user, onComplete }) => {
  const firstName = (user?.firstName || '').trim();

  const initialFeeling = user?.feeling || user?.onboardingProfile?.answers?.feeling || null;
  const initialGoal = clampGoal(user?.targetScore ?? DEFAULT_GOAL);

  const [step, setStep] = useState(0);
  const [feeling, setFeeling] = useState(initialFeeling);
  const [testDate, setTestDate] = useState(
    typeof user?.testDate === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(user.testDate) ? user.testDate : ''
  );
  const [scoreMode, setScoreMode] = useState('total'); // 'total' | 'section'
  const [totalScore, setTotalScore] = useState(
    Number.isFinite(user?.currentScore) ? String(user.currentScore) : ''
  );
  const [rwScore, setRwScore] = useState('');
  const [mathScore, setMathScore] = useState('');
  const [goal, setGoal] = useState(initialGoal);
  const [confidentArea, setConfidentArea] = useState(null);
  const [worryArea, setWorryArea] = useState(null);
  const [gradYear, setGradYear] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  // Guards the auto-advance so a double-click on an option can't queue two
  // goNext calls (which would skip an entire screen). Mirrors OnboardingFunnel.
  const [pendingAdvance, setPendingAdvance] = useState(false);
  const advanceTimer = useRef(null);
  useEffect(() => () => { if (advanceTimer.current) clearTimeout(advanceTimer.current); }, []);

  const nowYear = new Date().getFullYear();
  const gradYears = [nowYear, nowYear + 1, nowYear + 2, nowYear + 3, nowYear + 4];
  // Quick-pick chips from the canonical College Board list (src/data/satTestDates).
  const upcomingSatDates = useMemo(() => getUpcomingSATDates().slice(0, 4), []);

  // Derived current composite score (null if the student skipped it).
  const currentScore = useMemo(() => {
    if (scoreMode === 'total') {
      const v = Number(totalScore);
      return Number.isFinite(v) && v >= 400 ? Math.min(1600, Math.round(v / 10) * 10) : null;
    }
    const rw = clampSection(rwScore);
    const m = clampSection(mathScore);
    if (rw == null || m == null) return null;
    return rw + m;
  }, [scoreMode, totalScore, rwScore, mathScore]);

  const TOTAL_STEPS = 9;
  const goNext = () => setStep((s) => Math.min(TOTAL_STEPS - 1, s + 1));
  const clearPendingAdvance = () => {
    if (advanceTimer.current) { clearTimeout(advanceTimer.current); advanceTimer.current = null; }
    setPendingAdvance(false);
  };
  const goBack = () => {
    clearPendingAdvance();
    setStep((s) => Math.max(0, s - 1));
  };
  const pick = (setter) => (value) => {
    if (pendingAdvance) return; // ignore double-taps mid-transition
    setter(value);
    setPendingAdvance(true);
    advanceTimer.current = setTimeout(() => {
      advanceTimer.current = null;
      setPendingAdvance(false);
      goNext();
    }, 160);
  };

  const finish = () => {
    if (submitting) return;
    setSubmitting(true);
    onComplete({
      feeling: feeling || undefined,
      testDate: testDate || undefined,
      currentScore: currentScore ?? undefined,
      targetScore: goal,
      confidentArea: confidentArea || undefined,
      worryArea: worryArea || undefined,
      gradYear: gradYear || undefined,
    });
  };

  const progress = Math.round((step / (TOTAL_STEPS - 1)) * 100);

  const renderStep = () => {
    switch (step) {
      // 0 — Feeling (pre-selected from the funnel) ---------------------------
      case 0:
        return (
          <div className="io-step" key="feeling">
            <span className="io-eyebrow io-eyebrow--orange">
              <span className="io-eyebrow-sep" />Getting started
            </span>
            <h1 className="io-title">
              {firstName ? `${firstName}, where's your head at with the SAT right now?` : "Where's your head at with the SAT right now?"}
            </h1>
            <p className="io-body">No wrong answer. It just helps us set the tone.</p>
            <OptionList options={FEELING_OPTIONS} selected={feeling} onSelect={pick(setFeeling)} />
          </div>
        );

      // 1 — Exam date -------------------------------------------------------
      case 1:
        return (
          <div className="io-step" key="examDate">
            <span className="io-eyebrow io-eyebrow--orange">
              <span className="io-eyebrow-sep" />Your timeline
            </span>
            <h1 className="io-title">Have you locked in a test date yet?</h1>
            <p className="io-body">Nothing's final here. You can change it whenever.</p>

            {upcomingSatDates.length > 0 && (
              <>
                <div className="io-field-label">Upcoming SAT dates</div>
                <div className="io-chip-grid">
                  {upcomingSatDates.map((sat) => (
                    <button
                      key={sat.date}
                      type="button"
                      className={`io-chip${testDate === sat.date ? ' is-selected' : ''}`}
                      onClick={() => setTestDate(sat.date)}
                    >
                      {formatSatChipLabel(sat.date)}
                    </button>
                  ))}
                </div>
              </>
            )}

            <div className="io-field-label">{upcomingSatDates.length > 0 ? 'Or pick a different date' : 'Pick your test date'}</div>
            <label className="io-date-field">
              <CalendarIcon width={20} height={20} aria-hidden="true" />
              <input
                type="date"
                value={testDate}
                min={new Date().toISOString().slice(0, 10)}
                onChange={(e) => setTestDate(e.target.value)}
                aria-label="Test date"
              />
            </label>

            <button type="button" className="io-cta" disabled={!testDate} onClick={goNext}>
              Continue
            </button>
            <button type="button" className="io-skip" onClick={() => { setTestDate(''); goNext(); }}>
              I haven't registered yet <ArrowRightIcon width={16} height={16} aria-hidden="true" />
            </button>
          </div>
        );

      // 2 — Current score ---------------------------------------------------
      case 2:
        return (
          <div className="io-step" key="currentScore">
            <span className="io-eyebrow io-eyebrow--purple">
              <span className="io-eyebrow-sep" />Where you're starting
            </span>
            <h1 className="io-title">Have you taken the SAT or a full practice test?</h1>
            <p className="io-body">Even a rough number helps us aim your plan. No score yet is completely fine.</p>

            <div className="io-toggle" role="tablist" aria-label="Score type">
              <button
                type="button"
                role="tab"
                aria-selected={scoreMode === 'total'}
                className={`io-toggle-btn${scoreMode === 'total' ? ' is-active' : ''}`}
                onClick={() => setScoreMode('total')}
              >
                Total
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={scoreMode === 'section'}
                className={`io-toggle-btn${scoreMode === 'section' ? ' is-active' : ''}`}
                onClick={() => setScoreMode('section')}
              >
                By section
              </button>
            </div>

            {scoreMode === 'total' ? (
              <input
                className="io-score-input"
                type="number" inputMode="numeric"
                min={400} max={1600} step={10}
                placeholder="Enter total score (400–1600)"
                value={totalScore}
                onChange={(e) => setTotalScore(e.target.value)}
                aria-label="Total score"
              />
            ) : (
              <div className="io-score-pair">
                <label className="io-score-cell">
                  <span>Reading and Writing</span>
                  <input
                    type="number" inputMode="numeric" min={200} max={800} step={10}
                    placeholder="200–800" value={rwScore}
                    onChange={(e) => setRwScore(e.target.value)}
                  />
                </label>
                <label className="io-score-cell">
                  <span>Math</span>
                  <input
                    type="number" inputMode="numeric" min={200} max={800} step={10}
                    placeholder="200–800" value={mathScore}
                    onChange={(e) => setMathScore(e.target.value)}
                  />
                </label>
              </div>
            )}

            <button type="button" className="io-cta" disabled={currentScore == null} onClick={goNext}>
              Continue
            </button>
            <button type="button" className="io-skip" onClick={() => { setTotalScore(''); setRwScore(''); setMathScore(''); goNext(); }}>
              I haven't tested yet <ArrowRightIcon width={16} height={16} aria-hidden="true" />
            </button>
          </div>
        );

      // 3 — Goal score (pre-filled from the funnel) -------------------------
      case 3: {
        const base = currentScore ?? 400;
        const delta = currentScore != null ? Math.max(0, goal - currentScore) : null;
        const pct = (score) => ((Math.min(1600, Math.max(400, score)) - 400) / 1200) * 100;
        const basePct = pct(Math.min(base, goal));
        const goalPct = pct(goal);
        const gainPct = delta != null && delta > 0 ? Math.max(0, goalPct - basePct) : 0;
        return (
          <div className="io-step" key="goal">
            <span className="io-eyebrow io-eyebrow--lime">
              <span className="io-eyebrow-sep" />Your target
            </span>
            <h1 className="io-title">What score are you aiming for?</h1>
            <p className="io-body">We pulled in the goal you set earlier. Adjust it if you'd like.</p>

            <div className="io-goal-track" aria-hidden="true">
              <div className="io-goal-runway">
                <span className="io-goal-seg io-goal-seg--base" style={{ width: `${basePct}%` }} />
                {gainPct > 0 && (
                  <span className="io-goal-seg io-goal-seg--gain" style={{ left: `${basePct}%`, width: `${gainPct}%` }} />
                )}
                <span className="io-goal-marker" style={{ left: `${goalPct}%` }} />
                {gainPct > 0 && (
                  <span className="io-goal-gain" style={{ left: `${basePct + gainPct / 2}%` }}>+{delta} pts</span>
                )}
              </div>
              <div className="io-goal-scale">
                <span>{currentScore != null ? `Now ${currentScore}` : 'Start 400'}</span>
                <span>Top 1600</span>
              </div>
            </div>

            <div className="io-goal-readout">{goal}</div>
            <div className="io-goal-slider" style={{ '--io-slider-pct': `${((goal - 400) / 1200) * 100}%` }}>
              <input
                type="range" min={400} max={1600} step={10}
                value={goal} onChange={(e) => setGoal(clampGoal(e.target.value))}
                aria-label="Goal score"
              />
              <div className="io-goal-ticks"><span>400</span><span>1600</span></div>
            </div>

            <button type="button" className="io-cta" onClick={goNext}>Continue</button>
            <button type="button" className="io-skip" onClick={() => { setGoal(DEFAULT_GOAL); goNext(); }}>
              Not sure yet? Use a starting target <ArrowRightIcon width={16} height={16} aria-hidden="true" />
            </button>
          </div>
        );
      }

      // 4 — Interlude -------------------------------------------------------
      case 4:
        return (
          <div className="io-step io-step--center" key="interlude">
            <div className="io-recap-card">
              <div className="io-recap-head">
                <span className="io-recap-eyebrow">What we have so far</span>
                <span className="io-recap-target"><TargetIcon width={15} height={15} aria-hidden="true" /> {goal}</span>
              </div>
              <dl className="io-recap-list">
                <div className="io-recap-row"><dt>Goal score</dt><dd>{goal}</dd></div>
                <div className="io-recap-row"><dt>Test date</dt><dd>{testDate ? formatRecapDate(testDate) : 'Flexible for now'}</dd></div>
                <div className="io-recap-row"><dt>Starting point</dt><dd>{currentScore != null ? currentScore : "We'll find it together"}</dd></div>
              </dl>
            </div>
            <h1 className="io-title">That's the picture{firstName ? `, ${firstName}` : ''}. Now let's build your plan.</h1>
            <p className="io-body">A couple more details and your plan is ready.</p>
            <button type="button" className="io-cta" onClick={goNext}>Keep going</button>
          </div>
        );

      // 5 — Most confident --------------------------------------------------
      case 5:
        return (
          <div className="io-step" key="confident">
            <span className="io-eyebrow io-eyebrow--lime">
              <span className="io-eyebrow-sep" />Your strengths
            </span>
            <h1 className="io-title">What are you strongest at right now?</h1>
            <OptionList options={SECTION_OPTIONS} selected={confidentArea} onSelect={pick(setConfidentArea)} />
          </div>
        );

      // 6 — Biggest worry ---------------------------------------------------
      case 6:
        return (
          <div className="io-step" key="worry">
            <span className="io-eyebrow io-eyebrow--purple">
              <span className="io-eyebrow-sep" />Your focus
            </span>
            <h1 className="io-title">And what's tripping you up the most?</h1>
            <p className="io-body">This is where we'll spend the most time together.</p>
            <OptionList options={SECTION_OPTIONS} selected={worryArea} onSelect={pick(setWorryArea)} />
          </div>
        );

      // 7 — Grad year -------------------------------------------------------
      case 7:
        return (
          <div className="io-step" key="gradYear">
            <span className="io-eyebrow io-eyebrow--orange">
              <span className="io-eyebrow-sep" />Almost done
            </span>
            <h1 className="io-title">Last one: when do you graduate?</h1>
            <p className="io-body">It helps us pace your plan to your timeline.</p>
            <div className="io-chip-grid io-chip-grid--years">
              {gradYears.map((y) => (
                <button
                  key={y}
                  type="button"
                  className={`io-chip${gradYear === y ? ' is-selected' : ''}`}
                  onClick={() => pick(setGradYear)(y)}
                >
                  {y}
                </button>
              ))}
            </div>
          </div>
        );

      // 8 — Finish ----------------------------------------------------------
      case 8:
      default:
        return (
          <div className="io-step io-step--center" key="finish">
            <div className="io-finish-mark"><TargetIcon width={40} height={40} aria-hidden="true" /></div>
            <h1 className="io-title">
              {firstName ? `Ready to see your plan, ${firstName}?` : 'Ready to see your plan?'}
            </h1>
            <p className="io-body">
              Next up: a quick 15-minute check-in on your home screen. It's how SEVA builds a study plan that's actually yours.
            </p>
            <button type="button" className="io-cta io-cta--lg" onClick={finish} disabled={submitting}>
              {submitting ? 'Setting things up…' : 'Show me my plan'}
            </button>
          </div>
        );
    }
  };

  return (
    <div className="inner-onboarding">
      <div className="io-topbar">
        {step > 0 ? (
          <button type="button" className="io-back" onClick={goBack}>
            <ArrowLeftIcon width={16} height={16} aria-hidden="true" /> Back
          </button>
        ) : (
          <span className="io-back io-back--ghost" aria-hidden="true" />
        )}
        <div className="io-progress" role="progressbar" aria-label="Setup progress" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100}>
          {/* Floor at 6% so the first screen shows a started bar, not an empty gray track. */}
          <div className="io-progress-fill" style={{ width: `${Math.max(progress, 6)}%` }} />
        </div>
        <div className="io-topbar-brand"><Wordmark fontSize={20} /></div>
      </div>
      <div className="io-content">{renderStep()}</div>
    </div>
  );
};

export default InnerOnboarding;
