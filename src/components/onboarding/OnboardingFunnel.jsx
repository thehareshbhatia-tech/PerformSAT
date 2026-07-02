import React, { useState, useEffect, useMemo, useRef } from 'react';
import Wordmark from '../ui/Wordmark';
import {
  FUNNEL_QUESTIONS,
  FUNNEL_INTERSTITIALS,
  FUNNEL_STEPS,
  FUNNEL_STORAGE_KEY,
  FUNNEL_VERSION,
  DEFAULT_FUNNEL_GOAL,
  goalContextLine,
  normalizeFunnelGoal,
  buildFunnelProfile,
} from './funnelConfig';
import './OnboardingFunnel.css';

/**
 * Pre-signup onboarding funnel — the flow behind every "Get started" CTA
 * on the landing page. One question per screen (tap to advance), three
 * product-truth interstitials, a goal slider, a personalized path summary,
 * then the account form. Answers are staged in localStorage until signup
 * hands them to buildSignupUserDoc via additionalInfo.funnelProfile.
 *
 * @param {Function} signup - useAuth signup(email, password, firstName, additionalInfo)
 * @param {Function} onExit - leave the funnel back to the landing page
 * @param {Function} onLogIn - open the login modal (existing accounts)
 * @param {boolean} billingLive - billing flag; keeps pricing copy honest
 */
const QUESTION_BY_ID = Object.fromEntries(FUNNEL_QUESTIONS.map((q) => [q.id, q]));

const readSavedState = () => {
  try {
    const raw = window.localStorage.getItem(FUNNEL_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (parsed?.version !== FUNNEL_VERSION) return null;
    return parsed;
  } catch {
    return null;
  }
};

const writeSavedState = (state) => {
  try {
    window.localStorage.setItem(FUNNEL_STORAGE_KEY, JSON.stringify(state));
  } catch {
    /* storage unavailable (private mode) — the funnel still works in-memory */
  }
};

const clearSavedState = () => {
  try {
    window.localStorage.removeItem(FUNNEL_STORAGE_KEY);
  } catch {
    /* ignore */
  }
};

/** Rising projected-score sketch — echoes the app's real projected-score chart. */
const TrajectoryVisual = () => (
  <div className="of-visual-card" aria-hidden="true">
    <div className="of-visual-label">Projected score</div>
    <svg className="of-trajectory" viewBox="0 0 320 130" role="presentation" focusable="false">
      <path
        d="M16 104 C 70 98, 105 88, 150 72 C 200 54, 250 44, 304 30 L 304 74 C 250 84, 200 92, 150 102 C 105 110, 70 114, 16 116 Z"
        fill="rgba(124, 92, 199, 0.12)"
      />
      <path
        d="M16 110 C 70 106, 110 96, 152 84 C 202 70, 252 58, 304 48"
        fill="none"
        stroke="#EA580C"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="16" cy="110" r="5" fill="#D9D4C7" />
      <circle cx="304" cy="48" r="6" fill="#5A8A16" />
      <text x="16" y="94" className="of-trajectory-tick">check-in</text>
      <text x="304" y="34" className="of-trajectory-tick" textAnchor="end">your target</text>
    </svg>
    <div className="of-visual-caption">Updated after every practice session — so you always know where you stand.</div>
  </div>
);

/** Example weak-spot diagnosis card — the shape a real check-in produces. */
const DiagnosisVisual = () => (
  <div className="of-visual-card" aria-hidden="true">
    <div className="of-visual-label">Example diagnosis</div>
    <div className="of-diag-rows">
      {[
        { name: 'Algebra', pct: 58, tone: 'orange' },
        { name: 'Craft and Structure', pct: 64, tone: 'purple' },
        { name: 'Problem-Solving and Data', pct: 71, tone: 'lime' },
      ].map((row) => (
        <div className="of-diag-row" key={row.name}>
          <div className="of-diag-meta">
            <span className="of-diag-name">{row.name}</span>
            <span className="of-diag-pct">{row.pct}% accuracy</span>
          </div>
          <div className="of-diag-track">
            <div className={`of-diag-fill of-diag-fill--${row.tone}`} style={{ width: `${row.pct}%` }} />
          </div>
        </div>
      ))}
    </div>
    <div className="of-visual-caption">Your check-in builds yours — down to the exact question types.</div>
  </div>
);

/** Tutor exchange sketch — the ask-anything explanation loop. */
const TutorVisual = () => (
  <div className="of-visual-card" aria-hidden="true">
    <div className="of-visual-label">SEVA tutor</div>
    <div className="of-chat">
      <div className="of-chat-bubble of-chat-bubble--student">
        I still don&rsquo;t see why B is wrong.
      </div>
      <div className="of-chat-bubble of-chat-bubble--tutor">
        B repeats the claim from the first sentence — but the blank needs the
        contrast that &ldquo;however&rdquo; sets up. Look at what follows it&hellip;
      </div>
    </div>
    <div className="of-visual-caption">Ask as many times as it takes. It never gets tired.</div>
  </div>
);

const VISUALS = {
  trajectory: TrajectoryVisual,
  diagnosis: DiagnosisVisual,
  tutor: TutorVisual,
};

const OnboardingFunnel = ({ signup, onExit, onLogIn, billingLive }) => {
  const saved = useMemo(readSavedState, []);
  const [stepIndex, setStepIndex] = useState(() => {
    const idx = saved?.stepIndex;
    return Number.isInteger(idx) && idx >= 0 && idx < FUNNEL_STEPS.length ? idx : 0;
  });
  const [answers, setAnswers] = useState(() => saved?.answers || {});
  const [goal, setGoal] = useState(() => normalizeFunnelGoal(saved?.goal ?? DEFAULT_FUNNEL_GOAL));
  const [pendingAdvance, setPendingAdvance] = useState(null); // option value mid tap-animation

  // Signup form state (last step)
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const advanceTimer = useRef(null);
  useEffect(() => () => clearTimeout(advanceTimer.current), []);

  // Stage progress for reload-resume; cleared on successful signup.
  useEffect(() => {
    writeSavedState({ version: FUNNEL_VERSION, stepIndex, answers, goal });
  }, [stepIndex, answers, goal]);

  // Each step is its own "screen" — put focus/scroll back at the top.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [stepIndex]);

  const step = FUNNEL_STEPS[stepIndex];
  const totalSteps = FUNNEL_STEPS.length;
  const progressPct = Math.round((stepIndex / (totalSteps - 1)) * 100);

  const goNext = () => setStepIndex((i) => Math.min(i + 1, totalSteps - 1));
  const goBack = () => {
    if (submitting) return;
    setError('');
    if (stepIndex === 0) {
      onExit();
      return;
    }
    setStepIndex((i) => Math.max(i - 1, 0));
  };

  const handleOption = (questionId, value) => {
    if (pendingAdvance) return; // ignore double-taps mid-transition
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
    setPendingAdvance(value);
    const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches;
    advanceTimer.current = setTimeout(() => {
      setPendingAdvance(null);
      goNext();
    }, reduceMotion ? 60 : 240);
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setError('');
    if (!agreedToTerms) {
      setError('Please confirm you are 13 or older and agree to the Terms of Service and Privacy Policy.');
      return;
    }
    setSubmitting(true);
    try {
      const funnelProfile = buildFunnelProfile(answers, goal);
      await signup(email, password, firstName, {
        agreedToTerms: true,
        hasTakenSAT: funnelProfile.hasTakenSAT,
        satScore: null,
        funnelProfile,
      });
      clearSavedState();
      // No navigation here — App.jsx's auth listener flips `user` and the
      // "/" route redirects to /course (same contract as the modal form).
    } catch (err) {
      setError(err.message);
      setSubmitting(false);
    }
  };

  const renderQuestion = (question) => (
    <div className="of-step" key={question.id}>
      <h1 className="of-title">{question.title}</h1>
      <div className="of-options" role="group" aria-label={question.title}>
        {question.options.map((opt) => {
          const selected = answers[question.id] === opt.value;
          return (
            <button
              key={opt.value}
              type="button"
              className={`of-option${selected ? ' is-selected' : ''}`}
              aria-pressed={selected}
              onClick={() => handleOption(question.id, opt.value)}
            >
              {opt.label}
            </button>
          );
        })}
      </div>
    </div>
  );

  const renderInterstitial = (interstitial) => {
    const Visual = VISUALS[interstitial.visual];
    const heading = interstitial.headingByFeeling
      ? interstitial.headingByFeeling[answers.feeling] || interstitial.defaultHeading
      : interstitial.heading;
    return (
      <div className="of-step" key={interstitial.id}>
        <h1 className="of-title">{heading}</h1>
        <p className="of-body">{interstitial.body}</p>
        {Visual ? <Visual /> : null}
        <button type="button" className="of-cta" onClick={goNext}>
          {interstitial.cta}
        </button>
      </div>
    );
  };

  const renderGoal = () => (
    <div className="of-step" key="goal">
      <h1 className="of-title">Set your target score.</h1>
      <p className="of-body">You can change this anytime — your plan bends around it.</p>
      <div className="of-goal-readout" aria-live="polite">{goal}</div>
      <div className="of-goal-slider">
        <input
          type="range"
          min="400"
          max="1600"
          step="10"
          value={goal}
          aria-label="Target SAT score"
          onChange={(e) => setGoal(normalizeFunnelGoal(e.target.value))}
          style={{ '--of-slider-pct': `${((goal - 400) / 1200) * 100}%` }}
        />
        <div className="of-goal-ticks" aria-hidden="true">
          <span>400</span>
          <span>1000</span>
          <span>1600</span>
        </div>
      </div>
      <div className="of-goal-context">{goalContextLine(goal)}</div>
      <button type="button" className="of-cta" onClick={goNext}>
        Continue
      </button>
    </div>
  );

  const renderPath = () => (
    <div className="of-step" key="path">
      <div className="of-goal-chip" aria-label={`Target score ${goal}`}>
        <span className="of-goal-chip-label">Target</span>
        <span className="of-goal-chip-score">{goal}</span>
      </div>
      <h1 className="of-title">This is exactly what SEVA was built for.</h1>
      <p className="of-body">Here&rsquo;s the path to {goal}:</p>
      <ol className="of-path">
        <li className="of-path-step">
          <span className="of-path-num of-path-num--orange">01</span>
          <div>
            <div className="of-path-head">Create your free account</div>
            <div className="of-path-sub">Everything you just told us is saved into your plan.</div>
          </div>
        </li>
        <li className="of-path-step">
          <span className="of-path-num of-path-num--purple">02</span>
          <div>
            <div className="of-path-head">Take the 15-minute check-in</div>
            <div className="of-path-sub">24 adaptive questions find your real starting point.</div>
          </div>
        </li>
        <li className="of-path-step">
          <span className="of-path-num of-path-num--lime">03</span>
          <div>
            <div className="of-path-head">Watch the plan work</div>
            <div className="of-path-sub">It rebuilds itself around what you miss, every session.</div>
          </div>
        </li>
      </ol>
      <button type="button" className="of-cta" onClick={goNext}>
        Create my free account
      </button>
      <p className="of-fineprint">
        {billingLive
          ? '7 days free — full product, no credit card to start.'
          : 'Free during early access — full product, no credit card.'}
      </p>
    </div>
  );

  const renderSignup = () => (
    <div className="of-step" key="signup">
      <h1 className="of-title">Last step — save your plan.</h1>
      <p className="of-body">Your check-in and study plan are waiting on the other side.</p>
      <form className="of-form" onSubmit={handleSignup}>
        <label className="of-field">
          <span className="of-field-label">First name</span>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Your first name"
            autoComplete="given-name"
            required
          />
        </label>
        <label className="of-field">
          <span className="of-field-label">Email</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            autoComplete="email"
            required
          />
        </label>
        <label className="of-field">
          <span className="of-field-label">Password</span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="At least 6 characters"
            autoComplete="new-password"
            minLength={6}
            required
          />
        </label>
        <label className="of-consent">
          <input
            type="checkbox"
            checked={agreedToTerms}
            onChange={(e) => setAgreedToTerms(e.target.checked)}
            required
          />
          <span>
            I am 13 or older and agree to the{' '}
            <a href="/terms" target="_blank" rel="noopener noreferrer">Terms of Service</a>
            {' '}and{' '}
            <a href="/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
          </span>
        </label>
        {error && <div className="of-error" role="alert">{error}</div>}
        <button type="submit" className="of-cta" disabled={submitting}>
          {submitting ? 'Creating your account…' : 'Create my free account'}
        </button>
      </form>
      <button type="button" className="of-switch" onClick={onLogIn}>
        Already have an account? Log in
      </button>
    </div>
  );

  let content;
  if (step.type === 'question') content = renderQuestion(QUESTION_BY_ID[step.id]);
  else if (step.type === 'interstitial') content = renderInterstitial(FUNNEL_INTERSTITIALS[step.id]);
  else if (step.type === 'goal') content = renderGoal();
  else if (step.type === 'path') content = renderPath();
  else content = renderSignup();

  return (
    <div className="onboarding-funnel">
      <header className="of-topbar">
        <button type="button" className="of-back" onClick={goBack} aria-label={stepIndex === 0 ? 'Back to home' : 'Back'}>
          <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true" focusable="false">
            <path d="M10.5 2.5 5 8l5.5 5.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span>Back</span>
        </button>
        <div
          className="of-progress"
          role="progressbar"
          aria-label="Onboarding progress"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={progressPct}
        >
          <div className="of-progress-fill" style={{ width: `${progressPct}%` }} />
        </div>
        <div className="of-topbar-brand" aria-hidden="true">
          <Wordmark size="sm" tone="dark" />
        </div>
      </header>
      <main className="of-content">{content}</main>
    </div>
  );
};

export default OnboardingFunnel;
