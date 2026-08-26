import { useState, useEffect, useCallback, useRef, useMemo, memo } from 'react';
import QuestionDiagram from './QuestionDiagrams';
import AiTutorChat from './AiTutorChat';
import TestResults from './TestResults';
import { MathText } from './MathText';
import SolutionExplanation from './SolutionExplanation';
import QuestionRenderer from './QuestionRenderer';
import SATReferenceSheet from './SATReferenceSheet';
import DesmosCalculator from './DesmosCalculator';
import AnswerChoiceList from './shared/AnswerChoiceList';
import HighlightablePassage, { mergeHighlights } from './rw/HighlightablePassage';
import { sectionModuleShort } from '../services/selectors/moduleLabel';
import { recordSkillAttemptsBatch } from '../services/skillService';
import { showToast } from './ui/Toaster';
import { buildTestReviewEntry } from '../services/reviewQueueResolve';
import { pickInitialModuleIndex } from '../services/selectors/initialModule';
import { generateDiagnosticNarrative } from '../services/diagnosticNarrativeService';
import { getLastTestMs, getRecentDrillStats, DRILL_SIGNAL_MIN_ATTEMPTS, toMillis } from '../services/selectors/focusAreaProgress';
import {
  createAiDiagnosticArtifact,
  completeAiDiagnosticArtifact,
  failAiDiagnosticArtifact,
  getReadyAiDiagnostic,
  generateAttemptId,
  linkArtifactToAttempt,
} from '../services/practiceTestService';
import { generateAndPersistHybridPlan, fetchCurrentStudyPlan, persistDeterministicArtifact } from '../services/hybridStudyPlanService';
import { buildLongitudinalEvidence, computePlanDelta, reconcileDrillEvidenceWithTest } from '../services/studyPlanMerger';
import { generateStudyPlan as generateDeterministicPlan } from '../services/studyPlanGenerator';
import { buildPlanProfile } from '../services/studySchedule';
import { STARTER_PLAN_SOURCE } from '../services/starterPlanService';
import { runDiagnostic, getQuestionSkills } from '../services/diagnosticEngine';
import { finishMiniDiagnostic } from '../services/miniDiagnostic/finishMiniDiagnostic';
import MiniDiagnosticResults from './MiniDiagnostic/MiniDiagnosticResults';
import { buildGroundTruthDiagnosis, enrichPlanWithGroundTruth } from '../services/groundTruth';
import { scoreTest, isAnswerCorrect } from '../services/scoring';
import { computeRemaining, deriveDeadline, shiftDeadlineForPause } from '../services/timerClock';
import { colors, typography, spacing, radius, shadows, transitions } from '../design/tokens';
import { cardStyles } from '../design/components';
import { Modal } from './ui/Modal';
import { Button } from './ui/Button';
import './PracticeTest.css';
import { CheckIcon, CrossIcon, LightBulbIcon, MicroscopeIcon, WarningIcon, DocumentIcon } from '../design/icons';

// buildGroundTruthDiagnosis + enrichPlanWithGroundTruth moved verbatim to
// src/services/groundTruth.js (imported above) so the mini-diagnostic
// onboarding flow can share them without copy-paste drift.

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

// SAT-Style Color Palette - mapped to design tokens
const SAT_COLORS = {
  text: {
    primary: colors.text.primary,
    secondary: colors.text.secondary,
    muted: colors.text.muted,
  },
  background: {
    page: colors.surface.white,
    selected: colors.surface.gray,
  },
  border: {
    dark: colors.text.primary,
    medium: colors.text.secondary,
    light: colors.surface.grayDark,
  },
  ui: {
    questionBadgeBg: colors.text.primary,
    questionBadgeText: colors.surface.white,
  }
};


// Timer component
// Timestamp-delta countdown (1.8). Remaining time is derived from an absolute
// deadline against the wall clock — NOT by counting setInterval ticks, which
// browsers throttle in background tabs (the old model gifted free time). The
// interval is now just a render cadence; visibilitychange/focus snap the clock
// to true remaining time on refocus. Mount once per module via key={currentModule}.
const Timer = ({ initialMinutes, onTimeUp, onFiveMinutes, isPaused, timeRef, initialSeconds: savedSeconds }) => {
  const initialRemaining = savedSeconds != null ? savedSeconds : initialMinutes * 60;

  const deadlineRef = useRef(null);
  const pauseStartedRef = useRef(null);
  const firedRef = useRef(false); // onTimeUp must fire exactly once
  const fiveMinFiredRef = useRef(false); // 5-minute warning fires exactly once per module
  // Lazy-anchor the deadline on first render (and on remount via key change).
  if (deadlineRef.current === null) {
    deadlineRef.current = deriveDeadline(initialRemaining, Date.now());
  }

  const [displaySeconds, setDisplaySeconds] = useState(initialRemaining);

  const onTimeUpRef = useRef(onTimeUp);
  useEffect(() => { onTimeUpRef.current = onTimeUp; }, [onTimeUp]);
  const onFiveMinutesRef = useRef(onFiveMinutes);
  useEffect(() => { onFiveMinutesRef.current = onFiveMinutes; }, [onFiveMinutes]);

  const tick = useCallback(() => {
    const { remainingSeconds, isUp } = computeRemaining({
      deadlineTs: deadlineRef.current,
      nowTs: Date.now(),
      isPaused,
      pauseStartedTs: pauseStartedRef.current,
    });
    setDisplaySeconds(remainingSeconds);
    if (timeRef) timeRef.current = remainingSeconds;
    // Bluebook: crossing the 5-minute mark force-reveals a hidden timer and
    // surfaces a one-time warning. Fires immediately when a resumed module
    // starts under 5:00 — the student still needs the signal.
    if (remainingSeconds <= 300 && !isUp && !fiveMinFiredRef.current) {
      fiveMinFiredRef.current = true;
      onFiveMinutesRef.current?.();
    }
    if (isUp && !firedRef.current) {
      firedRef.current = true;
      onTimeUpRef.current?.();
    }
  }, [isPaused, timeRef]);

  // Pause freezes the clock; resume shifts the deadline forward by the paused
  // duration so frozen time is never consumed. ORDER MATTERS: this effect is
  // declared BEFORE the interval effect so that on resume the deadline shift
  // lands before the interval's first tick reads it. Don't reorder.
  useEffect(() => {
    if (isPaused) {
      pauseStartedRef.current = Date.now();
      tick();
    } else if (pauseStartedRef.current != null) {
      deadlineRef.current = shiftDeadlineForPause(
        deadlineRef.current, pauseStartedRef.current, Date.now()
      );
      pauseStartedRef.current = null;
      tick();
    }
  }, [isPaused, tick]);

  // Render-cadence interval (running only); immediate tick keeps first paint and
  // the resume frame accurate.
  useEffect(() => {
    if (isPaused) return;
    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, [isPaused, tick]);

  // Snap to true remaining time the instant the tab regains visibility/focus —
  // this is what defeats background-tab interval throttling.
  useEffect(() => {
    const onVisible = () => { if (!document.hidden) tick(); };
    document.addEventListener('visibilitychange', onVisible);
    window.addEventListener('focus', onVisible);
    return () => {
      document.removeEventListener('visibilitychange', onVisible);
      window.removeEventListener('focus', onVisible);
    };
  }, [tick]);

  const mins = Math.floor(displaySeconds / 60);
  const secs = displaySeconds % 60;
  const isLow = displaySeconds < 300; // Less than 5 minutes

  return (
    <div style={{
      fontSize: '18px',
      fontWeight: '600',
      color: isLow ? colors.semantic.error : colors.text.secondary,
      fontFamily: 'monospace',
      padding: '8px 16px',
      background: isLow ? colors.semantic.errorLight : colors.surface.gray,
      borderRadius: radius.sm
    }}>
      {String(mins).padStart(2, '0')}:{String(secs).padStart(2, '0')}
    </div>
  );
};

// Bluebook-parity section break (between R&W and Math on a full test).
// 10:00 countdown; "Resume Testing" advances early (Bluebook allows this in
// PRACTICE mode — the real administration is proctored); at 0:00 the next
// section starts on its own, exactly like Bluebook. Same wall-clock deadline
// math as Timer so a backgrounded tab can't stretch the break.
const BREAK_SECONDS = 600;
const BreakScreen = ({ nextModuleTitle, onResume }) => {
  const deadlineRef = useRef(null);
  if (deadlineRef.current === null) {
    deadlineRef.current = deriveDeadline(BREAK_SECONDS, Date.now());
  }
  const [displaySeconds, setDisplaySeconds] = useState(BREAK_SECONDS);
  const firedRef = useRef(false); // resume must fire exactly once (auto or click)
  const onResumeRef = useRef(onResume);
  useEffect(() => { onResumeRef.current = onResume; }, [onResume]);

  useEffect(() => {
    const tick = () => {
      const { remainingSeconds, isUp } = computeRemaining({
        deadlineTs: deadlineRef.current,
        nowTs: Date.now(),
        isPaused: false,
        pauseStartedTs: null,
      });
      setDisplaySeconds(remainingSeconds);
      if (isUp && !firedRef.current) {
        firedRef.current = true;
        onResumeRef.current?.();
      }
    };
    tick();
    const interval = setInterval(tick, 1000);
    const onVisible = () => { if (!document.hidden) tick(); };
    document.addEventListener('visibilitychange', onVisible);
    window.addEventListener('focus', onVisible);
    return () => {
      clearInterval(interval);
      document.removeEventListener('visibilitychange', onVisible);
      window.removeEventListener('focus', onVisible);
    };
  }, []);

  const handleResumeClick = () => {
    if (firedRef.current) return;
    firedRef.current = true;
    onResumeRef.current?.();
  };

  const mins = Math.floor(displaySeconds / 60);
  const secs = displaySeconds % 60;

  return (
    <div className="test-module-complete">
      <div className="test-module-complete-card">
        <div className="test-module-complete-eyebrow">Break</div>
        <h2 className="test-module-complete-title">Take a 10-minute break</h2>
        <div style={{
          fontFamily: 'monospace', fontSize: '44px', fontWeight: 700,
          margin: '12px 0 4px', letterSpacing: '0.02em',
        }}>
          {String(mins).padStart(2, '0')}:{String(secs).padStart(2, '0')}
        </div>
        <p className="test-module-complete-note">
          {nextModuleTitle} starts on its own when the break ends. Stand up,
          stretch, get water — or resume early if you're ready.
        </p>
        <button className="test-module-complete-cta" onClick={handleResumeClick} type="button">
          Resume Testing
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
        </button>
      </div>
    </div>
  );
};

// Question navigation grid - SAT Style
const QuestionGrid = memo(({ questions, currentIndex, answers, markedForReview, onNavigate }) => {
  return (
    <div className="nav-grid">
      {questions.map((_, idx) => {
        const isAnswered = answers[idx] !== undefined;
        const isMarked = markedForReview.includes(idx);
        const isCurrent = idx === currentIndex;

        let className = "nav-grid-item";
        if (isCurrent) className += " is-current";
        if (isMarked) className += " is-flagged";
        else if (isAnswered) className += " is-answered"; // Only show answered if not flagged (flagged overrides)

        return (
          <button
            key={idx}
            onClick={() => onNavigate(idx)}
            title={isMarked ? `Question ${idx + 1} - Flagged for later` : `Question ${idx + 1}`}
            className={className}
          >
            {idx + 1}
          </button>
        );
      })}
    </div>
  );
});

// OLD MathText component - NOW USING KaTeX-based version from ./MathText.jsx
// Keeping for reference only
const OldMathText_DISABLED = ({ text, style = {} }) => {
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
  if (choice.table) {
    return (
      <table style={{ borderCollapse: 'collapse', fontSize: '14px', fontFamily: 'Times New Roman, Georgia, serif', background: '#fff', color: '#111' }}>
        <thead>
          <tr>
            {choice.table.headers.map((h, i) => (
              <th key={i} style={{
                border: `1px solid ${colors.surface.grayMedium}`,
                padding: '4px 12px',
                background: colors.surface.offWhite,
                fontWeight: '600',
                fontStyle: 'italic'
              }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {choice.table.rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j} style={{
                  border: `1px solid ${colors.surface.grayMedium}`,
                  padding: '4px 12px',
                  textAlign: 'center'
                }}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  // Handle structured content (arrays or objects) with QuestionRenderer
  if (Array.isArray(choice.text) || (choice.text && typeof choice.text === 'object')) {
    return <QuestionRenderer content={choice.text} />;
  }
  // Handle string content with MathText
  return <MathText text={choice.text} />;
};

// Restrict a grid-in (fill-in) entry to the Bluebook SPR rules as the student
// types or pastes: digits, at most one decimal point, at most one fraction
// slash, a minus only as the leading character, and the official length cap —
// 5 characters, or 6 when the answer is negative. Folds a unicode minus / en /
// em dash to ASCII '-' and strips everything else (commas, "$", spaces,
// letters) so "1,000", "19 / 5", "5-3" and "1..2" can never reach the grader
// as ungradeable strings. The grader (isAnswerCorrect) normalizes the same
// way as a second line of defense.
const sanitizeGridIn = (raw) => {
  let s = String(raw)
    .replace(/[−–—]/g, '-')      // unicode minus / en / em dash to hyphen
    .replace(/[^0-9./-]/g, '');   // keep only the SAT grid-in charset
  // '-' is legal only as the first character
  s = (s[0] === '-' ? '-' : '') + s.replace(/-/g, '');
  // at most one '.' and one '/' — extra occurrences are dropped as typed
  let seenDot = false;
  let seenSlash = false;
  s = s.split('').filter((ch) => {
    if (ch === '.') { if (seenDot) return false; seenDot = true; }
    if (ch === '/') { if (seenSlash) return false; seenSlash = true; }
    return true;
  }).join('');
  // Bluebook length cap: 5 characters, 6 when negative
  return s.slice(0, s[0] === '-' ? 6 : 5);
};

const PracticeTest = ({ test, onBack, onComplete, onSaveResult, onSessionComplete, onSaveProgress, onClearProgress, onSaveStudyPlan, onGoToStudyPlan, savedProgress, isTimed = true, skillProgress = null, user = null, practiceTestResults = null, completedLessons = {}, practiceProgress = {}, onStartPractice, answeredQuestionIds = [], initialReviewModule = null, reviewSnapshotMissing = false, reviewAnswersMissing = false, reviewBackLabel = 'Results', reviewAttemptId = null, initialSection = null, resultSaveStatus = null, onRetrySave = null, tutorLocked = false, onSubscribe = null, onDiagnosticFinished = null, diagnosticScoreAnchor = null }) => {
  const [currentModule, setCurrentModule] = useState(
    pickInitialModuleIndex(test, savedProgress, initialSection)
  );
  const [currentQuestion, setCurrentQuestion] = useState(savedProgress?.currentQuestion || 0);
  const [answers, setAnswers] = useState(savedProgress?.answers || {});
  const [markedForReview, setMarkedForReview] = useState(savedProgress?.markedForReview || []);
  const [showQuestionGridPopover, setShowQuestionGridPopover] = useState(false);
  // Bluebook-style highlights, keyed by `${moduleIdx}-${questionIdx}-${passageKey}`.
  // Restored from savedProgress so a reload/resume keeps the student's markup.
  const [highlightsByKey, setHighlightsByKey] = useState(savedProgress?.highlightsByKey || {});
  const [highlightsHidden, setHighlightsHidden] = useState(false);
  // Bluebook "Check Your Work" page: Next on the last question routes here
  // (grid of answered/unanswered/flagged) before the module can end.
  const [onReviewPage, setOnReviewPage] = useState(false);
  // True when the module ended on the clock (vs a manual submit) — drives the
  // "Time's up" interstitial copy and the Bluebook auto-advance.
  const [timeExpired, setTimeExpired] = useState(false);
  // Bluebook ABC answer-eliminator toggle: cross-out controls stay hidden
  // until the student turns the tool on. Existing strikethroughs remain
  // visible either way (matching Bluebook).
  const [eliminatorMode, setEliminatorMode] = useState(false);
  // Section directions overlay — auto-opens at the start of a fresh test and
  // again when the Math section begins; reopenable from the header. The clock
  // keeps running while it's open, exactly like Bluebook.
  const [directionsOpen, setDirectionsOpen] = useState(() => !savedProgress && initialReviewModule === null);
  const [eliminatedChoices, setEliminatedChoices] = useState(savedProgress?.eliminatedChoices || {});
  const [showTimer, setShowTimer] = useState(isTimed);
  // Persisted + restored so a resume lands on the module-complete screen (or the
  // next module) rather than re-entering an already-submitted module with the
  // frozen clock and editable answers.
  const [moduleCompleted, setModuleCompleted] = useState(savedProgress?.moduleCompleted || false);
  const [testCompleted, setTestCompleted] = useState(initialReviewModule !== null);
  const [fillInValue, setFillInValue] = useState('');
  const [showCalculator, setShowCalculator] = useState(false);
  const [showReference, setShowReference] = useState(false);
  const [reviewMode, setReviewMode] = useState(initialReviewModule !== null);
  const [reviewModule, setReviewModule] = useState(initialReviewModule !== null ? initialReviewModule : 0);
  const [reviewQuestion, setReviewQuestion] = useState(0);
  const [reviewTab, setReviewTab] = useState('question');
  const [reviewRightPane, setReviewRightPane] = useState('both');

  // Stale-content notice: shown only when the per-attempt snapshot is missing
  // (legacy attempts predate the snapshot subcollection). Dismissible per attempt
  // via localStorage so the user only sees it once per legacy attempt.
  const snapshotNoticeKey = reviewAttemptId ? `dismissedSnapshotNotice:${reviewAttemptId}` : null;
  const [snapshotNoticeDismissed, setSnapshotNoticeDismissed] = useState(() => {
    if (!snapshotNoticeKey || typeof window === 'undefined') return false;
    try { return window.localStorage.getItem(snapshotNoticeKey) === '1'; }
    catch (_) { return false; }
  });
  // Two degraded-review flavors share the notice: the practice-test snapshot
  // is gone (questions may have changed) vs. a diagnostic rebuilt from its
  // item ids (exact questions, but the answer choices were never saved).
  const showSnapshotNotice = (reviewSnapshotMissing || reviewAnswersMissing) && !snapshotNoticeDismissed;
  const dismissSnapshotNotice = () => {
    setSnapshotNoticeDismissed(true);
    if (snapshotNoticeKey && typeof window !== 'undefined') {
      try { window.localStorage.setItem(snapshotNoticeKey, '1'); } catch (_) { /* ignore */ }
    }
  };
  const [resultSaved, setResultSaved] = useState(false);
  const [savedStudyPlan, setSavedStudyPlan] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const [confirmAction, setConfirmAction] = useState(null);
  const [resumeTimeRemaining, setResumeTimeRemaining] = useState(savedProgress?.timeRemaining ?? null);

  // Adaptive routing: which Module 2 variant to serve. Default 'hard' (current behavior).
  // Switches to 'easy' when Math Module 1 score < EASY_ROUTING_THRESHOLD (60% by default).
  const [module2Variant, setModule2Variant] = useState(savedProgress?.module2Variant || 'hard');
  // R&W mirror of the math route — which R&W Module 2 variant to serve.
  // Independent axis: on the official digital SAT both sections route their
  // own Module 2 off that section's Module 1 performance.
  const [rwModule2Variant, setRwModule2Variant] = useState(savedProgress?.rwModule2Variant || 'hard');
  // True when the user explicitly chose a Module 2 variant via the inline
  // switcher rendered above the Module 2 question grid. Disables the auto-
  // route below so a student who got routed to Easy can switch to Hard
  // (and vice versa). Persisted to savedProgress so the override survives
  // a tab reload mid-test.
  const [m2VariantManuallySet, setM2VariantManuallySet] = useState(
    savedProgress?.m2VariantManuallySet ?? false,
  );
  const [rwM2VariantManuallySet, setRwM2VariantManuallySet] = useState(
    savedProgress?.rwM2VariantManuallySet ?? false,
  );
  // When the user requests an M2 variant swap while they already have
  // answers in M2, defer the swap to a confirmation modal. Null when no
  // swap is pending; `{ section, newVariant, answerCount }` when one is
  // queued (section: 'math' | 'rw').
  const [pendingM2Switch, setPendingM2Switch] = useState(null);

  // Responsive: track window width for mobile layout
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);
  useEffect(() => {
    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => setWindowWidth(window.innerWidth), 150);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      clearTimeout(resizeTimer);
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const isMobile = windowWidth < 768;

  // Diagnostic tracking refs (refs avoid re-renders on every data point)
  // Seed from a resumed session so pre-resume answers keep their real dwell
  // time / visit counts — otherwise the diagnostic re-reads every pre-resume
  // miss as timeSpent 0 and misclassifies it as rushing. Normalized to the
  // full working shape getOrCreateTelemetry expects.
  const questionTelemetry = useRef(
    savedProgress?.questionTelemetry && typeof savedProgress.questionTelemetry === 'object'
      ? Object.fromEntries(Object.entries(savedProgress.questionTelemetry).map(([k, v]) => [k, {
          timeSpent: (v && v.timeSpent) || 0,
          visits: (v && v.visits) || 0,
          answerChanges: Array.isArray(v && v.answerChanges) ? v.answerChanges : [],
          usedCalculator: !!(v && v.usedCalculator),
          markedForReview: !!(v && v.markedForReview),
          firstAnswerTime: (v && v.firstAnswerTime) ?? null,
          finalAnswerTime: (v && v.finalAnswerTime) ?? null,
        }]))
      : {}
  );
  const questionStartTime = useRef(Date.now());
  const prevQuestion = useRef({ module: 0, question: 0 });
  const navigationHistory = useRef([]);
  const moduleTimeRemaining = useRef({});
  const visitedQuestions = useRef(new Set());
  const timerSecondsRef = useRef(null);
  const leftPaneRef = useRef(null);
  const rightPaneRef = useRef(null);
  const currentModuleRef = useRef(currentModule);
  const currentQuestionRef = useRef(currentQuestion);
  const diagnosticDataRef = useRef(null);
  const diagnosticReportRef = useRef(null);
  const attemptTimestampRef = useRef(null);
  const attemptIdRef = useRef(null);
  // The authoritative score from completion (scored against the exact modules
  // the student saw + the served math route). The results screen reads this
  // instead of re-deriving from scoreTest(test, answers), which can diverge.
  const scoredRef = useRef(null);

  // Identify which test.modules indices are math (vs Reading & Writing).
  // For math-only tests, all modules are math. For full SATs (Test 1), R&W modules come first.
  const mathModuleIndices = useMemo(
    () => test.modules
      .map((m, i) => (!m.section || m.section === 'math') ? i : -1)
      .filter(i => i >= 0),
    [test.modules]
  );
  const mathM1Index = mathModuleIndices[0];
  const mathM2Index = mathModuleIndices[1];

  // R&W module slots — same axis as the math indices above. Undefined on
  // math-only tests, so every R&W-routing branch below no-ops there.
  const rwModuleIndices = useMemo(
    () => test.modules
      .map((m, i) => (m.section === 'reading-writing') ? i : -1)
      .filter(i => i >= 0),
    [test.modules]
  );
  const rwM1Index = rwModuleIndices[0];
  const rwM2Index = rwModuleIndices[1];

  // Score Math Module 1 (raw correct/total/percent) for the M2 routing
  // decision and the toggle UI on the M1-complete screen. Recomputes only
  // when relevant answers change. Returns null on tests without an M1.
  const M2_ROUTING_THRESHOLD = 0.6;
  const m1Score = useMemo(() => {
    if (mathM1Index === undefined) return null;
    const m1Qs = test.modules[mathM1Index]?.questions || [];
    if (m1Qs.length === 0) return null;
    let correct = 0;
    m1Qs.forEach((q, idx) => {
      const ans = answers[`${mathM1Index}-${idx}`];
      if (ans === undefined || ans === null) return;
      // Use the canonical grader so the route decision matches scoreTest. A
      // hand-rolled parseFloat compare miscounts fraction grid-ins
      // (parseFloat("19/5") === 19) — counting the SAT-valid "3.8" wrong and
      // bare "19" right — which can misroute a borderline student to Easy M2.
      if (isAnswerCorrect(q, ans)) correct++;
    });
    return { correct, total: m1Qs.length, pct: correct / m1Qs.length };
  }, [test, mathM1Index, answers]);

  // Recommended Module 2 variant. Mirrors the historical auto-route logic:
  // sub-threshold M1 score → Easy. Null when the test has no Easy variant.
  const recommendedM2Variant = useMemo(() => {
    if (!test.module2Easy || !m1Score) return null;
    return m1Score.pct < M2_ROUTING_THRESHOLD ? 'easy' : 'hard';
  }, [test.module2Easy, m1Score]);

  // R&W Module 1 score + recommendation — same shape and threshold as math.
  const rwM1Score = useMemo(() => {
    if (rwM1Index === undefined) return null;
    const m1Qs = test.modules[rwM1Index]?.questions || [];
    if (m1Qs.length === 0) return null;
    let correct = 0;
    m1Qs.forEach((q, idx) => {
      const ans = answers[`${rwM1Index}-${idx}`];
      if (ans === undefined || ans === null) return;
      if (isAnswerCorrect(q, ans)) correct++;
    });
    return { correct, total: m1Qs.length, pct: correct / m1Qs.length };
  }, [test, rwM1Index, answers]);

  const recommendedRwM2Variant = useMemo(() => {
    if (!test.rwModule2Easy || !rwM1Score) return null;
    return rwM1Score.pct < M2_ROUTING_THRESHOLD ? 'easy' : 'hard';
  }, [test.rwModule2Easy, rwM1Score]);

  // Effective modules: swap in each section's Module 2 Easy variant when that
  // section's routing decision is 'easy'. Falls back to standard test.modules
  // when neither section routed easy (or the test ships no variants).
  const effectiveModules = useMemo(() => {
    let replaced = test.modules;
    const swapSlot = (slotIndex, easyModule) => {
      if (replaced === test.modules) replaced = [...test.modules];
      // Preserve module index/title metadata from the slot, only swap in the easy questions
      const slot = test.modules[slotIndex];
      replaced[slotIndex] = {
        ...slot,
        ...easyModule,
        title: slot.title,         // keep the section-relative "Module 2" label
        section: slot.section,     // preserve section axis
      };
    };
    if (module2Variant === 'easy' && test.module2Easy && mathM2Index !== undefined) {
      swapSlot(mathM2Index, test.module2Easy);
    }
    if (rwModule2Variant === 'easy' && test.rwModule2Easy && rwM2Index !== undefined) {
      swapSlot(rwM2Index, test.rwModule2Easy);
    }
    return replaced;
  }, [test, module2Variant, mathM2Index, rwModule2Variant, rwM2Index]);

  const module = effectiveModules[currentModule];
  const questions = module?.questions || [];
  const question = questions[currentQuestion];
  // R&W detection prefers per-module section (so a full SAT can mix R&W and Math modules);
  // falls back to test-level section for legacy R&W-only or Math-only tests.
  const isReadingWriting = (module?.section || test?.section) === 'reading-writing';

  // Highlight handlers — scoped per question via passageKey
  const buildHighlightKey = (passageKey) => `${currentModule}-${currentQuestion}-${passageKey}`;
  const handleAddHighlight = useCallback((passageKey, range) => {
    setHighlightsByKey((prev) => {
      const k = `${currentModule}-${currentQuestion}-${passageKey}`;
      const existing = prev[k] || [];
      return { ...prev, [k]: mergeHighlights([...existing, range]) };
    });
  }, [currentModule, currentQuestion]);
  const handleRemoveHighlight = useCallback((passageKey, range) => {
    setHighlightsByKey((prev) => {
      const k = `${currentModule}-${currentQuestion}-${passageKey}`;
      const existing = prev[k] || [];
      return { ...prev, [k]: existing.filter((h) => !(h.start === range.start && h.end === range.end)) };
    });
  }, [currentModule, currentQuestion]);
  const handleClearHighlights = useCallback(() => {
    setHighlightsByKey((prev) => {
      const out = { ...prev };
      const prefix = `${currentModule}-${currentQuestion}-`;
      Object.keys(out).forEach((k) => { if (k.startsWith(prefix)) delete out[k]; });
      return out;
    });
  }, [currentModule, currentQuestion]);

  // Memoize the per-module answers for QuestionGrid (avoids O(n) filter on every render)
  const moduleAnswersForGrid = useMemo(() => {
    return Object.fromEntries(
      Object.entries(answers)
        .filter(([key]) => key.startsWith(`${currentModule}-`))
        .map(([key, val]) => [parseInt(key.split('-')[1]), val])
    );
  }, [answers, currentModule]);

  // Reset fill-in value when question changes
  // Reset fill-in value when navigating to a different question
  const answersRef = useRef(answers);
  useEffect(() => { answersRef.current = answers; }, [answers]);
  useEffect(() => {
    if (question?.type === 'fill-in') {
      const existingAnswer = answersRef.current[`${currentModule}-${currentQuestion}`];
      setFillInValue(existingAnswer !== undefined ? String(existingAnswer) : '');
    }
  }, [currentQuestion, currentModule, question?.type]);

  // Keep refs in sync so useCallback handlers always read current values
  useEffect(() => {
    currentModuleRef.current = currentModule;
  }, [currentModule]);

  useEffect(() => {
    currentQuestionRef.current = currentQuestion;
    // Scroll both panes to top when question changes
    leftPaneRef.current?.scrollTo(0, 0);
    rightPaneRef.current?.scrollTo(0, 0);
  }, [currentQuestion]);

  // Helper: get or create telemetry entry for a question
  const getOrCreateTelemetry = (modIdx, qIdx) => {
    const key = `${modIdx}-${qIdx}`;
    if (!questionTelemetry.current[key]) {
      questionTelemetry.current[key] = {
        timeSpent: 0,
        visits: 0,
        answerChanges: [],
        usedCalculator: false,
        markedForReview: false,
        firstAnswerTime: null,
        finalAnswerTime: null,
      };
    }
    return questionTelemetry.current[key];
  };

  // Track question navigation and time spent
  useEffect(() => {
    const now = Date.now();
    const prevMod = prevQuestion.current.module;
    const prevQ = prevQuestion.current.question;
    const prevKey = `${prevMod}-${prevQ}`;
    const newKey = `${currentModule}-${currentQuestion}`;

    // Record time spent on previous question
    const elapsed = (now - questionStartTime.current) / 1000;
    if (elapsed > 0 && elapsed < 3600) {
      const prevTelemetry = getOrCreateTelemetry(prevMod, prevQ);
      prevTelemetry.timeSpent += elapsed;
    }

    // Record navigation event
    if (prevKey !== newKey) {
      navigationHistory.current.push({ from: prevKey, to: newKey, timestamp: now });
    }

    // Increment visits on new question
    const newTelemetry = getOrCreateTelemetry(currentModule, currentQuestion);
    newTelemetry.visits += 1;
    visitedQuestions.current.add(newKey);

    // Reset start time and update prev
    questionStartTime.current = now;
    prevQuestion.current = { module: currentModule, question: currentQuestion };
  }, [currentModule, currentQuestion]);

  // Auto-save progress when answers, module, or question changes (debounced to reduce I/O)
  const saveTimerRef = useRef(null);
  const buildProgressRef = useRef(null);
  // The save callback is an inline arrow in App.jsx, so it gets a fresh
  // identity on every App render. It must NOT sit in the auto-save effect's
  // dep array: writing progress fires useProgress's onSnapshot on the same
  // doc, which setStates fresh objects, which re-renders App, which mints a
  // new callback identity — re-running the effect and scheduling ANOTHER
  // write. That feedback loop ran for as long as a test was open, with no
  // user input at all, and is what exhausted the project's Firestore write
  // bandwidth. Measured with the callback in the deps: one answer click then
  // produced 2/3/3/4 writes across four consecutive idle 8s windows; with
  // the ref, 1/0/0/0. Hold it in a ref and read it at fire time so only real
  // answer/navigation changes schedule a save.
  const onSaveProgressRef = useRef(onSaveProgress);
  useEffect(() => { onSaveProgressRef.current = onSaveProgress; });
  useEffect(() => {
    if (testCompleted || reviewMode || !onSaveProgressRef.current) return;
    if (Object.keys(answers).length === 0) return;

    const buildProgressData = () => {
      const telemetrySnapshot = {};
      Object.entries(questionTelemetry.current).forEach(([k, v]) => {
        telemetrySnapshot[k] = {
          timeSpent: Math.round((v.timeSpent || 0) * 10) / 10,
          visits: v.visits || 0,
          answerChanges: v.answerChanges || [],
          usedCalculator: v.usedCalculator || false,
          markedForReview: v.markedForReview || false,
        };
      });
      return {
        currentModule,
        currentQuestion,
        answers,
        markedForReview,
        eliminatedChoices,
        highlightsByKey,
        isTimed,
        timeRemaining: timerSecondsRef.current,
        questionTelemetry: telemetrySnapshot,
        module2Variant,
        m2VariantManuallySet,
        rwModule2Variant,
        rwM2VariantManuallySet,
        moduleCompleted,
        // Diagnostic v2: the manifest (item ids per module slot) rides the
        // in-progress record so a resume REBUILDS the identical synthetic
        // test instead of re-sampling — saved modIdx-qIdx answers stay
        // aligned to the questions they were given for.
        ...(test?.isDiagnostic && test.diagnosticManifest
          ? { isDiagnostic: true, diagnosticManifest: test.diagnosticManifest }
          : {}),
      };
    };
    // Freshest builder for the visibility flush below — timeRemaining reads
    // a ref, so a flush between interactions still captures the live clock.
    buildProgressRef.current = buildProgressData;

    clearTimeout(saveTimerRef.current);
    saveTimerRef.current = setTimeout(() => {
      onSaveProgressRef.current?.(buildProgressData());
    }, 2000);

    return () => clearTimeout(saveTimerRef.current);
    // NOTE: onSaveProgress is deliberately absent from the deps — see the ref
    // note above. Adding it back re-opens the write loop (measured: a single
    // answer click then produced ~3 writes per 8 idle seconds, forever).
  }, [answers, currentModule, currentQuestion, markedForReview, eliminatedChoices, highlightsByKey, testCompleted, reviewMode, isTimed, module2Variant, m2VariantManuallySet, rwModule2Variant, rwM2VariantManuallySet, moduleCompleted]);

  useEffect(() => {
    if (testCompleted || reviewMode) return;
    const onBeforeUnload = (e) => { e.preventDefault(); e.returnValue = ''; };
    window.addEventListener('beforeunload', onBeforeUnload);
    return () => window.removeEventListener('beforeunload', onBeforeUnload);
  }, [testCompleted, reviewMode]);

  // Flush progress the moment the tab hides (refresh/close/app-switch).
  // The debounced save above only fires on interaction, so without this a
  // refresh restored the clock to its value at the LAST answer — an
  // unbounded time refund on a timed module.
  useEffect(() => {
    if (testCompleted || reviewMode) return;
    const flushOnHide = () => {
      if (document.visibilityState !== 'hidden') return;
      if (!buildProgressRef.current || !onSaveProgressRef.current) return;
      clearTimeout(saveTimerRef.current);
      onSaveProgressRef.current(buildProgressRef.current());
    };
    document.addEventListener('visibilitychange', flushOnHide);
    return () => document.removeEventListener('visibilitychange', flushOnHide);
    // NOTE: onSaveProgress is read through the ref (not a dep) so App
    // re-renders don't churn this listener.
  }, [testCompleted, reviewMode]);

  // Flush any pending auto-save when test completes
  useEffect(() => {
    if (testCompleted && saveTimerRef.current) {
      clearTimeout(saveTimerRef.current);
    }
  }, [testCompleted]);

  const planGenerationAttempted = useRef(false);

  // ── Diagnostic v2 finish (test.isDiagnostic) ──────────────────────────────
  // The diagnostic runs the on-ramp pipeline (finishMiniDiagnostic: real
  // diagnosis → starter/check-in plan → artifact persist → skillProgress
  // seed) instead of the practice-test save path. Nothing here may touch
  // practiceTestResults or the review queue — a diagnostic must never enter
  // score history. Phase: null | 'finishing' | 'results' | 'error'.
  const [diagnosticFinish, setDiagnosticFinish] = useState({ phase: null, result: null });
  const diagnosticFinishingRef = useRef(false);
  const runDiagnosticFinish = useCallback(async () => {
    if (diagnosticFinishingRef.current) return;
    diagnosticFinishingRef.current = true;
    setDiagnosticFinish({ phase: 'finishing', result: null });
    try {
      // Navigation classification — same rules as the practice-test path.
      const navHistory = navigationHistory.current;
      let navigationPattern = 'linear';
      if (navHistory.length > 0) {
        let backwardCount = 0;
        let skipCount = 0;
        for (const nav of navHistory) {
          const [, fromQ] = nav.from.split('-').map(Number);
          const [, toQ] = nav.to.split('-').map(Number);
          if (toQ < fromQ) backwardCount++;
          if (Math.abs(toQ - fromQ) > 1) skipCount++;
        }
        if (skipCount > navHistory.length * 0.3) navigationPattern = 'jumping';
        else if (backwardCount > 2 || skipCount > 2) navigationPattern = 'strategic-skip';
      }
      const result = await finishMiniDiagnostic({
        user,
        effectiveTest: { ...test, modules: effectiveModules },
        answers,
        telemetry: questionTelemetry.current,
        eliminatedChoices,
        attemptId: attemptIdRef.current || generateAttemptId(),
        // Route provenance only where routing actually HAPPENED — the
        // check-in variant ships no Module-2 variants, so recording 'hard'
        // there would assert a routing decision that never occurred.
        routes: {
          math: test.module2Easy ? (module2Variant === 'easy' ? 'easy' : 'hard') : null,
          rw: test.rwModule2Easy ? (rwModule2Variant === 'easy' ? 'easy' : 'hard') : null,
        },
        navigation: {
          navigationPattern,
          totalNavigationEvents: navHistory.length,
          // Pacing evidence — the timed diagnostic's whole pitch is authentic
          // pace; without this the diagnosis runs blind on the time dimension.
          moduleTimeRemaining: { ...moduleTimeRemaining.current },
        },
        answeredQuestionIds,
        completedLessons,
        practiceProgress,
        scoreAnchor: diagnosticScoreAnchor,
      });
      if (onDiagnosticFinished) {
        try { await onDiagnosticFinished({ ...result, attemptId: attemptIdRef.current }); } catch (e) {
          // App-level persistence (record/stamp) failing must not hide the
          // student's diagnosis — same resilience order as the on-ramp sink.
          console.error('[PracticeTest] onDiagnosticFinished handler error (continuing to results):', e);
        }
      }
      // Success: the resumable in-progress record is now stale — clear it so
      // the Tests/on-ramp surfaces stop offering a resume of a finished run.
      if (onClearProgress) onClearProgress();
      setDiagnosticFinish({ phase: 'results', result });
    } catch (err) {
      console.error('[PracticeTest] Diagnostic finish pipeline failed:', err);
      // Keep the in-progress record — "Try again" re-runs the finish, and a
      // reload resumes the completed sitting instead of losing 40 answers.
      setDiagnosticFinish({ phase: 'error', result: null });
    } finally {
      diagnosticFinishingRef.current = false;
    }
  }, [user, test, effectiveModules, answers, eliminatedChoices, module2Variant, rwModule2Variant, answeredQuestionIds, completedLessons, practiceProgress, onDiagnosticFinished, onClearProgress, diagnosticScoreAnchor]);

  // Save test results when test completes
  const completionInFlight = useRef(false);
  useEffect(() => {
    // Diagnostic mode has no onSaveResult (nothing to save to score history) —
    // it routes to the finish pipeline instead.
    if (!testCompleted || resultSaved || completionInFlight.current) return;
    if (!test?.isDiagnostic && !onSaveResult) return;
    completionInFlight.current = true;

    // Yield to browser so the completion UI paints before heavy scoring computation
    const completionTimer = setTimeout(() => {
      // Record time spent on the last question before test completion
      const now = Date.now();
      const lastElapsed = (now - questionStartTime.current) / 1000;
      if (lastElapsed > 0 && lastElapsed < 3600) {
        const lastKey = `${prevQuestion.current.module}-${prevQuestion.current.question}`;
        if (questionTelemetry.current[lastKey]) {
          questionTelemetry.current[lastKey].timeSpent += lastElapsed;
        }
      }

      // Diagnostic v2: the entire practice-test completion path below
      // (snapshot, score row, session-complete seam, review feed, flag
      // fanout, skill batch, plan generation) is replaced by the finish
      // pipeline. Mint the attempt id here so retries reuse it.
      if (test?.isDiagnostic) {
        if (!attemptIdRef.current) attemptIdRef.current = generateAttemptId();
        setResultSaved(true); // arm the same completion latch the save path uses
        runDiagnosticFinish();
        return;
      }
      console.log('[PracticeTest] Attempting to save results...');

      // Build per-question diagnostic details
      const questionDetails = {};
      effectiveModules.forEach((mod, modIdx) => {
        mod.questions.forEach((q, qIdx) => {
          const key = `${modIdx}-${qIdx}`;
          const userAnswer = answers[key];
          const correct = isAnswerCorrect(q, userAnswer);
          const telem = questionTelemetry.current[key] || {};
          const elimKey = key;
          questionDetails[key] = {
            timeSpent: Math.round((telem.timeSpent || 0) * 10) / 10,
            visits: telem.visits || 0,
            answerChanges: (telem.answerChanges || []).length,
            answerChangeEvents: (telem.answerChanges || []).map(ev => ({
              from: ev.from, to: ev.to, timestamp: ev.timestamp
            })),
            usedCalculator: telem.usedCalculator || false,
            markedForReview: telem.markedForReview || false,
            eliminatedChoices: eliminatedChoices[elimKey] || [],
            isCorrect: correct,
            // The chosen answer (null when blank). Without it the persisted
            // record couldn't distinguish blank from wrong, and longitudinal
            // distractor/trap analysis was impossible.
            userAnswer: userAnswer ?? null,
            difficulty: q.difficulty || null,
            // getQuestionSkills normalizes math (q.skills: array) and R&W
            // (q.skill: string) shapes — reading q.skills directly persisted
            // empty skills for every R&W item.
            skills: getQuestionSkills(q),
          };
        });
      });

      // Classify navigation pattern
      const navHistory = navigationHistory.current;
      let navigationPattern = 'linear';
      if (navHistory.length > 0) {
        let backwardCount = 0;
        let skipCount = 0;
        for (const nav of navHistory) {
          const [, fromQ] = nav.from.split('-').map(Number);
          const [, toQ] = nav.to.split('-').map(Number);
          if (toQ < fromQ) backwardCount++;
          if (Math.abs(toQ - fromQ) > 1) skipCount++;
        }
        if (skipCount > navHistory.length * 0.3) {
          navigationPattern = 'jumping';
        } else if (backwardCount > 2 || skipCount > 2) {
          navigationPattern = 'strategic-skip';
        }
      }

      const telemetryValues = Object.values(questionTelemetry.current);
      const diagnosticData = {
        questionDetails,
        navigationPattern,
        totalNavigationEvents: navHistory.length,
        moduleTimeRemaining: { ...moduleTimeRemaining.current },
        questionsVisitedMultipleTimes: telemetryValues.filter(t => t.visits > 1).length,
        calculatorUsageCount: telemetryValues.filter(t => t.usedCalculator).length,
        markedForReviewCount: telemetryValues.filter(t => t.markedForReview).length,
        // The Module-2 variants actually served (per section). Both
        // runDiagnostic and scoreTest read these so the diagnosis score and
        // the headline score use the identical raw→scaled table column
        // (easy routes cap at ~600 for math, 600 for R&W).
        mathRoute: module2Variant,
        rwRoute: rwModule2Variant,
      };

      diagnosticDataRef.current = diagnosticData;

      // Grade against the modules the student actually answered. When the
      // student routes to the Easy Module 2, effectiveModules swaps in the
      // Easy variant; test.modules is still the original (Hard) key. Scoring
      // or diagnosing against test.modules would grade Easy answers against
      // Hard keys and silently corrupt the score, diagnosis, and every
      // downstream drill route — for exactly the lowest scorers. (1.1)
      const effectiveTest = { ...test, modules: effectiveModules };

      diagnosticReportRef.current = runDiagnostic(
        effectiveTest, answers, diagnosticData,
        skillProgress || {},
        { targetScore: user?.targetScore, currentScore: user?.currentScore, testDate: user?.testDate },
        practiceTestResults || {}
      );

      // Central scoring engine — reported score from the route-aware raw→scaled
      // table; mathRoute/rwRoute are the variants the student actually saw.
      const scored = scoreTest(effectiveTest, answers, { timedMode: isTimed, diagnosticData, mathRoute: module2Variant, rwRoute: rwModule2Variant });
      scoredRef.current = scored;
      const newAttemptId = generateAttemptId();
      attemptIdRef.current = newAttemptId;

      // Build per-question snapshot of the exact items the student saw.
      // Persisted to progress/{userId}/attempts/{attemptId} so Review Answers
      // shows the original problem even after content swaps under the same id.
      const questionsSnapshot = [];
      effectiveModules.forEach((mod, modIdx) => {
        mod.questions.forEach((q, qIdx) => {
          questionsSnapshot.push({
            id: q.id,
            type: q.type,
            stem: q.stem ?? q.question ?? null,
            choices: q.choices || null,
            correctAnswer: q.correctAnswer,
            explanation: q.explanation ?? null,
            difficulty: q.difficulty || null,
            band: q.band ?? null,
            skills: getQuestionSkills(q),
            // Stimulus fields — without them a snapshot-reconstructed review
            // shows R&W stems with no passage and math stems with no figure/
            // table (the readers backfill from the live test for OLD
            // snapshots, but the snapshot is the ground truth of what the
            // student actually saw).
            passage: q.passage ?? null,
            passages: q.passages ?? null,
            studentNotes: q.studentNotes ?? null,
            questionContinued: q.questionContinued ?? null,
            diagram: q.diagram ?? null,
            questionTable: q.questionTable ?? null,
            questionFormula: q.questionFormula ?? null,
            // Section axis ('reading-writing' | 'math') so snapshot-
            // reconstructed tests stay multi-section-aware even if the live
            // catalog changes (the report loader reads snap.section first).
            section: mod.section ?? null,
            moduleIndex: modIdx,
            questionIndex: qIdx,
          });
        });
      });

      // Feed this test's misses into the SM-2 review queue (2026-06 audit
      // gap 4: full-test wrong answers — the richest evidence source — never
      // reached spaced repetition; only drill misses did). Entries are
      // position-addressed (test catalog + module/question index + M2
      // variant) because raw test ids restart at 1 in every module. Attempted
      // misses outrank blanks, and the feed is capped so one rough test can't
      // flood the daily review queue. Review-retakes are excluded here AND
      // re-gated by the orchestrator.
      const MAX_REVIEW_FEED = 20;
      const reviewFeed = [];
      if (!reviewMode && test?.id) {
        const missed = [];
        effectiveModules.forEach((mod, modIdx) => {
          mod.questions.forEach((q, qIdx) => {
            const key = `${modIdx}-${qIdx}`;
            if (questionDetails[key]?.isCorrect) return;
            // MCQ-only: the daily-review drill shell has no fill-in input, so
            // a fill-in entry could never be served — it would sit due forever
            // and block its session from completing.
            if (!Array.isArray(q.choices) || q.choices.length < 2) return;
            missed.push({
              entry: buildTestReviewEntry(test.id, {
                modIdx,
                qIdx,
                question: q,
                servedEasyVariant: (module2Variant === 'easy' && modIdx === mathM2Index)
                  || (rwModule2Variant === 'easy' && modIdx === rwM2Index),
                section: mod.section || null,
              }),
              wasAttempted: answers[key] != null,
            });
          });
        });
        missed.sort((a, b) => Number(b.wasAttempted) - Number(a.wasAttempted));
        reviewFeed.push(...missed.slice(0, MAX_REVIEW_FEED).map(m => m.entry));
      }

      // "Mark for Review" refs — the questions the student flagged during the
      // test (from the durable per-question telemetry, not the module-scoped
      // nav-grid array which resets between modules). Persisted onto the attempt
      // record so they survive reload, and fanned out to the flag store by the
      // App-level onSaveResult handler so they appear in the Review Queue's
      // Flagged group. No correctness signal — flagging stays user-driven.
      const markedForReviewRefs = [];
      if (!reviewMode) {
        effectiveModules.forEach((mod, modIdx) => {
          mod.questions.forEach((q, qIdx) => {
            const key = `${modIdx}-${qIdx}`;
            if (!questionDetails[key]?.markedForReview) return;
            markedForReviewRefs.push({
              questionId: q.id,
              section: mod.section ?? null,
              moduleIndex: modIdx,
              questionIndex: qIdx,
              skills: getQuestionSkills(q),
              snippet: q.stem ?? q.question ?? null,
            });
          });
        });
      }

      const resultsToSave = {
        attemptId: newAttemptId,
        rawScore: scored.rawScore,
        totalQuestions: scored.totalQuestions,
        scaledScore: scored.sectionScore,
        sectionScores: scored.sectionScores,
        isMultiSection: scored.isMultiSection,
        timedMode: isTimed,
        moduleScores: scored.moduleScores,
        diagnosticData,
        diagnosticReport: diagnosticReportRef.current || null,
        scoringVersion: scored.scoringVersion,
        thetaEstimate: scored.thetaEstimate,
        standardError: scored.standardError,
        routeTaken: scored.routeTaken,
        questionsSnapshot,
        answers: { ...answers },
        markedForReview: markedForReviewRefs,
      };
      console.log('[PracticeTest] Calling onSaveResult with:', resultsToSave);
      onSaveResult(resultsToSave);
      attemptTimestampRef.current = new Date().toISOString();
      setResultSaved(true);
      console.log('[PracticeTest] Results saved, resultSaved set to true');

      // onSessionComplete seam (Phase 2). Fires exactly once per completed full
      // test: we're inside the resultSaved + completionInFlight guard, so it
      // inherits the existing dedup. Carries the runDiagnostic() report (the
      // rich object the fingerprint + prediction loop consume) and the HEADLINE
      // scaledScore + isMultiSection so predictions stay on the dashboard's scale.
      if (onSessionComplete) {
        try {
          onSessionComplete({
            attemptId: newAttemptId,
            testId: test?.id ?? null,
            testTitle: test?.title ?? null,
            userId: user?.uid ?? null,
            scaledScore: scored.sectionScore,
            rawScore: scored.rawScore,
            totalQuestions: scored.totalQuestions,
            sectionScores: scored.sectionScores,
            isMultiSection: scored.isMultiSection,
            timedMode: isTimed,
            diagnosticReport: diagnosticReportRef.current || null,
            reviewMode,
            completedAt: attemptTimestampRef.current,
            reviewFeed,
          });
        } catch (e) {
          console.error('[PracticeTest] onSessionComplete handler error:', e);
        }
      }

      // Record skill attempts — aggregate first, then record sequentially to avoid race conditions
      if (user?.uid) {
        console.log('[PracticeTest] Starting skill recording for user:', user.uid);
        // Build list of {skills, isCorrect} entries
        const skillEntries = [];
        effectiveModules.forEach((mod, modIdx) => {
          mod.questions.forEach((q, qIdx) => {
            // getQuestionSkills handles the R&W singular q.skill shape too —
            // before this, R&W items were skipped and skillProgress never got
            // R&W mastery from full tests (only from drills).
            const qSkills = getQuestionSkills(q);
            if (qSkills.length > 0) {
              const key = `${modIdx}-${qIdx}`;
              skillEntries.push({ skills: qSkills, isCorrect: isAnswerCorrect(q, answers[key]) });
            }
          });
        });
        console.log('[PracticeTest] Skill entries to record:', skillEntries.length);
        // ONE transaction for the whole test. The old per-question loop ran
        // ~98 sequential runTransactions against the same progress doc —
        // 30-60s of writes that contended with the result-save transaction
        // (spurious "save failed" banners) and fired a snapshot →
        // artifact-refetch cycle per question on the results screen.
        (async () => {
          try {
            await recordSkillAttemptsBatch(
              user.uid,
              skillEntries.map(e => ({ skills: e.skills, correct: e.isCorrect })),
            );
            console.log('[PracticeTest] All skill recordings complete');
          } catch (err) {
            console.error('[PracticeTest] Skill recording error:', err);
          }
        })();
      } else {
        console.warn('[PracticeTest] No user.uid — skipping skill recording');
      }

      // Clear in-progress data since test is complete
      if (onClearProgress) {
        console.log('[PracticeTest] Clearing in-progress data');
        onClearProgress();
      }

      // Generate study plan and persist via artifact subcollection.
      // This runs inline so there is zero chance of a missed effect.
      if (user?.uid && diagnosticReportRef.current && !planGenerationAttempted.current) {
        planGenerationAttempted.current = true;
        // Capture generation identity NOW. A retake overwrites attemptIdRef
        // while the async phases run; every post-await write below must use
        // this captured id, and persistence aborts once a newer attempt owns
        // the plan-of-record — otherwise attempt A's slow Phase 2 could link
        // its artifact to attempt B and regress the pointer to A's diagnosis.
        const genAttemptId = attemptIdRef.current;
        const genIsStale = () => attemptIdRef.current !== genAttemptId;
        console.log('[PracticeTest] Study plan generation starting (artifact-first)');
        (async () => {
          try {
            const diagReport = diagnosticReportRef.current;
            const groundTruth = buildGroundTruthDiagnosis(diagReport, questionTelemetry.current);

            // The GENUINE previous plan, fetched once before any write of
            // ours, and shared by both phases. Using local savedStudyPlan
            // (null on every fresh mount) made every Phase-1 delta read
            // "first plan" and dropped the student's sticky userPrefs; letting
            // Phase 2 re-fetch AFTER Phase 1 persisted made the generator
            // read its own seconds-old artifact as "the previous plan" and
            // step intensity down against its trivially-0% completion.
            const fetchedPlan = await fetchCurrentStudyPlan(user.uid).catch(() => null);
            // An onboarding starter plan is a scaffold, not adherence
            // evidence: it starts at 0% completion (stepping the FIRST real
            // plan's intensity down a band) and its self-reported "suspected"
            // skills would pollute the What-Changed delta against a real
            // diagnosis. Treat it as no previous plan — same as the check-in
            // path (finishMiniDiagnostic passes previousPlan: null). It sets
            // no edited userPrefs, so nothing sticky is lost.
            const previousPlan = fetchedPlan?.basedOnTest === STARTER_PLAN_SOURCE ? null : fetchedPlan;

            // Drill evidence the just-finished test contradicted must not be
            // credited (transfer failure) — reconcile before generating.
            const longitudinalEvidence = reconcileDrillEvidenceWithTest(
              buildLongitudinalEvidence(practiceTestResults || {}, skillProgress || null),
              diagReport,
            );
            const detPlan = generateDeterministicPlan(
              diagReport,
              buildPlanProfile(user),
              completedLessons,
              practiceProgress,
              previousPlan,
              longitudinalEvidence,
              answeredQuestionIds || [],
            );
            // Attach plan diff for the "What Changed" banner
            detPlan._diff = computePlanDelta(previousPlan, detPlan, longitudinalEvidence.recoveredSkills);
            const plan = enrichPlanWithGroundTruth({ ...detPlan }, groundTruth);
            // Attach difficulty profile so dashboard can match question difficulty to student level
            if (diagReport.difficultyAnalysis) {
              plan.difficultyAnalysis = diagReport.difficultyAnalysis;
            }
            if (!genIsStale()) {
              setSavedStudyPlan(plan);
              // Propagate to in-memory state for immediate rendering
              if (onSaveStudyPlan) {
                try { onSaveStudyPlan(plan, diagReport); } catch (e) { console.error('[PracticeTest] onSaveStudyPlan error:', e); }
              }
            }

            // Phase 1: persist deterministic artifact — AWAITED so the
            // Phase-2 pointer write can never race it (the un-awaited version
            // let a fast-failing AI call land Phase 2's pointer first, then
            // Phase 1 regressed it and orphaned the richer artifact).
            if (!genIsStale()) {
              try {
                const result = await persistDeterministicArtifact(user.uid, plan, {
                  attemptId: genAttemptId,
                  sourceTestId: test?.id || null,
                });
                console.log('[PracticeTest] Phase 1 artifact persisted:', result?.artifactId);
              } catch (err) {
                console.error('[PracticeTest] Phase 1 artifact write FAILED:', err);
              }
            }

            // Phase 2: hybrid plan (AI-narrated) — sequential after Phase 1,
            // same pre-test previousPlan, stale-abort threaded through.
            try {
              console.log('[PracticeTest] Phase 2 — hybrid plan generation starting...');
              const phase2 = await generateAndPersistHybridPlan({
                userId: user.uid,
                diagnostic: diagReport,
                userProfile: buildPlanProfile(user),
                completedLessons,
                practiceProgress,
                practiceTestResults: practiceTestResults || {},
                skillProgress: skillProgress || null,
                previousPlan,
                // Without answeredQuestionIds the Phase-2 plan re-assigns
                // questions the student already answered (Phase 1 passes it).
                answeredQuestionIds: answeredQuestionIds || [],
                attemptId: genAttemptId,
                aiArtifactId: null,
                groundTruth,
                abortIfStale: genIsStale,
              });
              if (!phase2) {
                console.log('[PracticeTest] Phase 2 skipped — superseded by a newer attempt');
                return;
              }

              const hybridPlan = enrichPlanWithGroundTruth(
                { ...(phase2.artifact.plan || {}) },
                groundTruth,
              );

              if (genIsStale()) return;

              if (genAttemptId && phase2.artifactId) {
                linkArtifactToAttempt(user.uid, test.id, genAttemptId, {
                  studyPlanArtifactId: phase2.artifactId,
                }).catch(() => {});
              }

              setSavedStudyPlan(hybridPlan);
              if (onSaveStudyPlan) {
                try { onSaveStudyPlan(hybridPlan, null); } catch (e) { /* already logged */ }
              }
              console.log('[PracticeTest] Phase 2 — hybrid artifact saved:', phase2.artifactId);
            } catch (err) {
              console.error('[PracticeTest] Hybrid plan generation failed; deterministic artifact remains:', err);
            }
          } catch (err) {
            console.error('[PracticeTest] Study plan generation CRASHED:', err);
          }
        })();
      }
    }, 0);

    return () => {
      clearTimeout(completionTimer);
      completionInFlight.current = false;
    };
  }, [testCompleted, onSaveResult, onSessionComplete, onClearProgress, resultSaved, test, answers, isTimed, user, completedLessons, practiceProgress, practiceTestResults, onSaveStudyPlan, runDiagnosticFinish]);

  // Post-test: generate AI diagnostic narrative automatically
  const diagnosticNarrativeAttempted = useRef(false);
  const [aiDiagnosticState, setAiDiagnosticState] = useState({ status: 'idle', narrative: null, error: null });

  const retryAiDiagnostic = useCallback(() => {
    const diagReport = diagnosticReportRef.current;
    const attemptTs = attemptTimestampRef.current;
    // Captured now: a retake overwrites attemptIdRef while the narrative
    // generates, and linking the finished artifact to the NEW attempt would
    // attach this test's diagnosis to a different test's record.
    const genAttemptId = attemptIdRef.current;
    if (!diagReport || !user?.uid || !attemptTs) return;

    setAiDiagnosticState({ status: 'generating', narrative: null, error: null });

    (async () => {
      let artifactId = null;
      try {
        console.log('[PracticeTest] Generating AI diagnostic narrative...');

        try {
          artifactId = await createAiDiagnosticArtifact(user.uid, test.id, attemptTs, attemptIdRef.current);
        } catch (storeErr) {
          console.warn('[PracticeTest] Artifact creation failed (non-blocking):', storeErr.message);
        }

        // Pre-test drill work on the skills THIS test covered — the
        // drill-to-test transfer signal. Everything is windowed to strictly
        // BEFORE this attempt: the just-finished test may already be in
        // practiceTestResults and its own skillProgress writes land at
        // completion time, and either would masquerade as drill work.
        const attemptMs = Date.parse(attemptTs) || Date.now();
        const cutoffMs = attemptMs - 60000;
        const priorResults = {};
        Object.entries(practiceTestResults || {}).forEach(([id, t]) => {
          const priorAttempts = (t.attempts || []).filter(
            // toMillis tolerates ISO strings, Date objects, and Firestore
            // Timestamp shapes — bare Date.parse turned a Timestamp into NaN,
            // which made the just-finished attempt count as "prior" and
            // silently emptied the drill-transfer signal.
            a => (toMillis(a.completedAt) || 0) < cutoffMs
          );
          if (priorAttempts.length) priorResults[id] = { ...t, attempts: priorAttempts };
        });
        const prevTestMs = getLastTestMs(priorResults);
        const testedSkills = new Set();
        (diagReport.questionAnalysis || []).forEach(q => (q.skills || []).forEach(s => testedSkills.add(s)));
        const recentDrills = [];
        Object.entries(skillProgress || {}).forEach(([skillId, record]) => {
          if (!testedSkills.has(skillId) || !Array.isArray(record?.history)) return;
          const preTest = { ...record, history: record.history.filter(h => h.timestamp < cutoffMs) };
          const stats = getRecentDrillStats(preTest, prevTestMs);
          if (stats && stats.attempts >= DRILL_SIGNAL_MIN_ATTEMPTS) {
            recentDrills.push({ skillId, accuracy: stats.accuracy, attempts: stats.attempts });
          }
        });

        const { narrative, generatedAt, model, promptVersion, quality } = await generateDiagnosticNarrative(
          diagReport,
          { targetScore: user.targetScore, testDate: user.testDate },
          recentDrills.length > 0 ? { recentDrills } : null,
        );

        if (artifactId) {
          await completeAiDiagnosticArtifact(user.uid, artifactId, narrative, { generatedAt, model, promptVersion, quality }).catch(() => {});
          if (genAttemptId) {
            linkArtifactToAttempt(user.uid, test.id, genAttemptId, {
              aiArtifactId: artifactId,
            }).catch(() => {});
          }
        }

        setAiDiagnosticState({ status: 'ready', narrative, error: null });
        console.log('[PracticeTest] AI diagnostic narrative ready');
      } catch (err) {
        console.error('[PracticeTest] AI diagnostic narrative failed:', err);
        if (artifactId) {
          await failAiDiagnosticArtifact(user.uid, artifactId, err.message).catch(() => {});
        }
        setAiDiagnosticState({ status: 'failed', narrative: null, error: err.message || 'Failed to generate AI analysis' });
      }
    })();
  }, [user, test, practiceTestResults, skillProgress]);

  useEffect(() => {
    // Diagnostics never generate the AI results narrative — their end screen
    // is the diagnosis handoff, not the TestResults insights tab.
    if (test?.isDiagnostic) return;
    if (!resultSaved || diagnosticNarrativeAttempted.current || !user?.uid) return;
    diagnosticNarrativeAttempted.current = true;

    const diagReport = diagnosticReportRef.current;
    if (!diagReport) {
      console.warn('[PracticeTest] No diagnostic report — skipping AI narrative generation');
      return;
    }

    const attemptTs = attemptTimestampRef.current;

    (async () => {
      try {
        const existing = await getReadyAiDiagnostic(user.uid, test.id, attemptTs);
        if (existing?.narrative) {
          console.log('[PracticeTest] Rehydrated AI diagnostic from Firestore');
          setAiDiagnosticState({ status: 'ready', narrative: existing.narrative, error: null });
          return;
        }
      } catch (err) {
        console.warn('[PracticeTest] Rehydration lookup failed (non-blocking):', err.message);
      }
      retryAiDiagnostic();
    })();
  }, [resultSaved, user, test, retryAiDiagnostic]);

  const handleSelectAnswer = useCallback((answerId) => {
    const mod = currentModuleRef.current;
    const q = currentQuestionRef.current;
    const key = `${mod}-${q}`;
    const telemetry = getOrCreateTelemetry(mod, q);
    const now = Date.now();

    // Track telemetry outside setState to avoid side effects in updater
    const oldAnswer = answersRef.current[key];
    telemetry.answerChanges.push({ from: oldAnswer || null, to: answerId, timestamp: now });
    if (!telemetry.firstAnswerTime) telemetry.firstAnswerTime = now;
    telemetry.finalAnswerTime = now;

    setAnswers(prev => {
      // If clicking the already-selected answer, deselect it
      if (prev[key] === answerId) {
        const newAnswers = { ...prev };
        delete newAnswers[key];
        return newAnswers;
      }
      // Otherwise, select the new answer
      return { ...prev, [key]: answerId };
    });
  }, []);

  const handleFillInSubmit = () => {
    const key = `${currentModule}-${currentQuestion}`;
    const value = fillInValue.trim();
    if (!value) {
      // Clearing a previously-committed fill-in: drop the stored key so the
      // answered-count and the review screen reflect the cleared state. Without
      // this, a committed grid-in could never be un-answered (score is
      // unaffected either way — a blank grid-in never scores correct).
      if (answers[key] !== undefined) {
        setAnswers(prev => {
          if (prev[key] === undefined) return prev;
          const next = { ...prev };
          delete next[key];
          return next;
        });
      }
      return;
    }

    const telemetry = getOrCreateTelemetry(currentModule, currentQuestion);
    const now = Date.now();
    telemetry.answerChanges.push({ from: answers[key] || null, to: value, timestamp: now });
    if (!telemetry.firstAnswerTime) telemetry.firstAnswerTime = now;
    telemetry.finalAnswerTime = now;

    setAnswers(prev => ({ ...prev, [key]: value }));
  };

  const handleToggleMark = useCallback(() => {
    const mod = currentModuleRef.current;
    const q = currentQuestionRef.current;
    const telemetry = getOrCreateTelemetry(mod, q);
    setMarkedForReview(prev => {
      if (prev.includes(q)) {
        // Unmark — clear the durable telemetry flag too, else this question
        // would still be captured as marked-for-review at submission (and land
        // in the flag store) despite the student toggling it back off.
        telemetry.markedForReview = false;
        return prev.filter(i => i !== q);
      }
      // Mark for review — record in telemetry
      telemetry.markedForReview = true;
      return [...prev, q];
    });
  }, []);

  const handleToggleEliminate = useCallback((choiceId) => {
    const key = `${currentModuleRef.current}-${currentQuestionRef.current}`;
    const current = eliminatedChoices[key] || [];
    if (current.includes(choiceId)) {
      // Un-eliminate.
      setEliminatedChoices(prev => {
        const cur = (prev[key] || []).filter(id => id !== choiceId);
        if (cur.length === 0) {
          const newState = { ...prev };
          delete newState[key];
          return newState;
        }
        return { ...prev, [key]: cur };
      });
      return;
    }
    // Bluebook parity: crossing out the currently-selected choice also
    // deselects it — leaving it recorded would grade a visibly-struck
    // choice as the student's final answer.
    if (answers[key] === choiceId) {
      setAnswers(prev => {
        if (prev[key] !== choiceId) return prev;
        const next = { ...prev };
        delete next[key];
        return next;
      });
    }
    setEliminatedChoices(prev => ({ ...prev, [key]: [...(prev[key] || []), choiceId] }));
  }, [eliminatedChoices, answers]);

  // Frame-based debounce prevents rapid clicks from overwhelming KaTeX re-renders
  const navDebounceRef = useRef(false);

  const handleNext = useCallback(() => {
    if (navDebounceRef.current) return;
    navDebounceRef.current = true;
    requestAnimationFrame(() => { navDebounceRef.current = false; });
    fillInSubmitRef.current?.();
    setCurrentQuestion(prev => (prev < questions.length - 1 ? prev + 1 : prev));
  }, [questions.length]);

  const handlePrev = useCallback(() => {
    if (navDebounceRef.current) return;
    navDebounceRef.current = true;
    requestAnimationFrame(() => { navDebounceRef.current = false; });
    fillInSubmitRef.current?.();
    setCurrentQuestion(prev => (prev > 0 ? prev - 1 : prev));
  }, []);

  const fillInSubmitRef = useRef(null);
  useEffect(() => {
    fillInSubmitRef.current = () => {
      if (question?.type === 'fill-in') handleFillInSubmit();
    };
  });

  // answersRef only syncs in an effect, so an in-flight fill-in committed by
  // fillInSubmitRef isn't visible to a synchronous read. Tracked separately so
  // the End-Test blank-attempt guard can't discard a test whose only answer
  // is the fill-in being committed at end time.
  const fillInHasValueRef = useRef(false);
  // Declared here (above handleSubmitModule) so the synchronous ref-set inside
  // it beats the effect that lags it by a render.
  const moduleCompletedRef = useRef(false);
  useEffect(() => {
    fillInHasValueRef.current = question?.type === 'fill-in' && String(fillInValue ?? '').trim() !== '';
  });

  const handleNavigate = useCallback((idx) => {
    if (navDebounceRef.current) return;
    navDebounceRef.current = true;
    requestAnimationFrame(() => { navDebounceRef.current = false; });
    fillInSubmitRef.current?.();
    setCurrentQuestion(idx);
  }, []);

  // Bluebook parity: Next on the last question goes to the "Check Your Work"
  // page, not straight out of the module. The module only ends from that page
  // (or when the clock runs out).
  const handleGoToReview = useCallback(() => {
    fillInSubmitRef.current?.();
    setOnReviewPage(true);
  }, []);

  const handleSubmitModule = useCallback(() => {
    setOnReviewPage(false);
    fillInSubmitRef.current?.();
    // Record time spent on current question before submitting (read from refs, not stale closures)
    const mod = currentModuleRef.current;
    const q = currentQuestionRef.current;
    const now = Date.now();
    const elapsed = (now - questionStartTime.current) / 1000;
    if (elapsed > 0 && elapsed < 3600) {
      const telemetry = getOrCreateTelemetry(mod, q);
      telemetry.timeSpent += elapsed;
    }
    // Reset the clock so the completion effect's final-question re-stamp
    // (now - questionStartTime) doesn't double-count the dwell we just recorded
    // plus the time spent sitting on the module-complete screen.
    questionStartTime.current = now;
    moduleTimeRemaining.current[mod] = timerSecondsRef.current;
    // Set the ref synchronously (the effect that syncs it lags a render): a
    // timer tick between this paint and the effect would otherwise see the ref
    // still false, re-stamp telemetry, and zero moduleTimeRemaining.
    moduleCompletedRef.current = true;
    setModuleCompleted(true);
  }, []);

  const handleNextModule = useCallback(() => {
    const curMod = currentModuleRef.current;
    if (curMod < test.modules.length - 1) {
      const nextMod = curMod + 1;

      // Adaptive routing: when leaving Math Module 1 and an Easy variant exists,
      // score Math Module 1 to decide which Module 2 variant to serve. Threshold = 60%.
      // Skipped when the user explicitly chose a variant on the M1-complete screen
      // (`m2VariantManuallySet`), or when the test has no Easy variant.
      //
      // In typical flow the useEffect above already pre-set module2Variant to
      // the recommendation by the time the user clicks Continue, so this block
      // is a defensive fallback for paths that skip the M1-complete screen.
      if (
        test.module2Easy
        && curMod === mathM1Index
        && !m2VariantManuallySet
        && module2Variant === 'hard'
      ) {
        const m1Questions = test.modules[mathM1Index]?.questions || [];
        let correct = 0;
        m1Questions.forEach((q, qIdx) => {
          const ans = answers[`${mathM1Index}-${qIdx}`];
          if (ans === undefined || ans === null) return;
          // Canonical grader — matches scoreTest and is fraction-aware (see m1Score).
          if (isAnswerCorrect(q, ans)) correct++;
        });
        const pct = m1Questions.length > 0 ? correct / m1Questions.length : 0;
        if (pct < M2_ROUTING_THRESHOLD) {
          setModule2Variant('easy');
        }
      }

      // R&W mirror: when leaving R&W Module 1 and the test ships an R&W Easy
      // variant, route the same way off the R&W M1 score.
      if (
        test.rwModule2Easy
        && curMod === rwM1Index
        && !rwM2VariantManuallySet
        && rwModule2Variant === 'hard'
      ) {
        const m1Questions = test.modules[rwM1Index]?.questions || [];
        let correct = 0;
        m1Questions.forEach((q, qIdx) => {
          const ans = answers[`${rwM1Index}-${qIdx}`];
          if (ans === undefined || ans === null) return;
          if (isAnswerCorrect(q, ans)) correct++;
        });
        const pct = m1Questions.length > 0 ? correct / m1Questions.length : 0;
        if (pct < M2_ROUTING_THRESHOLD) {
          setRwModule2Variant('easy');
        }
      }

      setCurrentModule(nextMod);
      setCurrentQuestion(0);
      setMarkedForReview([]);
      // Do NOT clear eliminatedChoices here: keys are module-scoped
      // (`${modIdx}-${qIdx}`) so prior modules' entries can't collide with the
      // new module's, and the completion path reads eliminations across ALL
      // modules for the elimination-evidence diagnostic. Clearing here erased
      // that evidence for every already-submitted module.
      setModuleCompleted(false);
      setResumeTimeRemaining(null);
      setOnReviewPage(false);
      setTimeExpired(false);
      // Bluebook shows the section directions again when the Math section
      // begins (after the break). Module 0's directions come from initial state.
      if (mathM1Index !== undefined && nextMod === mathM1Index && mathM1Index > 0) {
        setDirectionsOpen(true);
      }
      questionStartTime.current = Date.now();
      prevQuestion.current = { module: nextMod, question: 0 };
    } else {
      // A whole test submitted with nothing answered is an abandon, not a
      // result — mirror handleConfirmEndTest's blank-attempt guard so the
      // normal last-module flow can't mint an IRT-floor 400 attempt that
      // becomes the dashboard's "latest result" + next test's delta baseline.
      const answeredCount = Object.values(answers)
        .filter(v => v !== null && v !== undefined && v !== '').length;
      if (answeredCount === 0 && !fillInHasValueRef.current) {
        onClearProgress?.();
        showToast({ type: 'info', message: 'Test ended with no answers — this attempt was not scored.' });
        onBack?.();
        return;
      }
      setTestCompleted(true);
    }
  }, [test.modules.length, test.module2Easy, test.rwModule2Easy, test.modules, mathM1Index, rwM1Index, module2Variant, m2VariantManuallySet, rwModule2Variant, rwM2VariantManuallySet, answers, onClearProgress, onBack]);

  useEffect(() => { moduleCompletedRef.current = moduleCompleted; }, [moduleCompleted]);

  const handleTimeUp = useCallback(() => {
    if (moduleCompletedRef.current) return; // Guard against double-fire with manual submit
    // Commit a typed-but-unconfirmed fill-in before the module closes —
    // every manual submit path does this, and on the real SAT whatever is
    // in the box counts when time expires. Also stamp the final question's
    // time so pacing telemetry doesn't lose the last dwell.
    fillInSubmitRef.current?.();
    const elapsed = (Date.now() - questionStartTime.current) / 1000;
    if (elapsed > 0 && elapsed < 3600) {
      const telemetry = getOrCreateTelemetry(currentModuleRef.current, currentQuestionRef.current);
      telemetry.timeSpent += elapsed;
    }
    moduleTimeRemaining.current[currentModuleRef.current] = 0;
    setOnReviewPage(false);
    setTimeExpired(true);
    setModuleCompleted(true);
  }, []);

  // Bluebook parity: when the clock ends a module, the test moves on by
  // itself — a short beat on the "Time's up" screen, then the next module (or
  // scoring, on the last one). The R&W→Math boundary is excluded: the break
  // screen owns that transition and starts Math on its own 10:00 schedule.
  useEffect(() => {
    if (!moduleCompleted || testCompleted || !timeExpired) return undefined;
    const cur = effectiveModules[currentModule];
    const nxt = effectiveModules[currentModule + 1];
    const isLast = currentModule === effectiveModules.length - 1;
    const isSectionBreak = !isLast && isTimed && !test?.isDiagnostic
      && cur?.section === 'reading-writing'
      && ((nxt?.section || 'math') !== 'reading-writing');
    if (isSectionBreak) return undefined;
    const t = setTimeout(() => handleNextModule(), 5000);
    return () => clearTimeout(t);
  }, [moduleCompleted, testCompleted, timeExpired, currentModule, effectiveModules, isTimed, handleNextModule, test]);

  // Bluebook: at 5:00 remaining a hidden timer force-reveals and the student
  // gets a one-time warning. Timer remounts per module, so this fires once
  // per module.
  const handleFiveMinutesLeft = useCallback(() => {
    setShowTimer(true);
    showToast({ type: 'info', message: '5 minutes remaining in this module.' });
  }, []);

  const handlePauseToggle = () => {
    setIsPaused(p => {
      if (!p) setShowCalculator(false); // close calculator when pausing
      return !p;
    });
  };

  // Switch the active Module 2 variant from the inline switcher rendered
  // above the M2 question grid. The variant determines which question set
  // `effectiveModules` swaps in, so switching mid-module makes the existing
  // M2 answers point at a different question (the same `${modIdx}-${qIdx}`
  // key now refers to a Hard-variant question instead of Easy, or vice
  // versa). Clearing the M2 keys is the safe move; we confirm first when
  // any are present so the student doesn't lose work by accident.
  const applyM2VariantSwitch = useCallback((section, newVariant) => {
    const slotIndex = section === 'rw' ? rwM2Index : mathM2Index;
    if (section === 'rw') {
      setRwModule2Variant(newVariant);
      setRwM2VariantManuallySet(true);
    } else {
      setModule2Variant(newVariant);
      setM2VariantManuallySet(true);
    }
    if (slotIndex !== undefined) {
      const prefix = `${slotIndex}-`;
      setAnswers(prev => {
        const out = { ...prev };
        Object.keys(out).forEach(k => { if (k.startsWith(prefix)) delete out[k]; });
        return out;
      });
      setEliminatedChoices(prev => {
        const out = { ...prev };
        Object.keys(out).forEach(k => { if (k.startsWith(prefix)) delete out[k]; });
        return out;
      });
      // Drop the abandoned variant's telemetry too — the `${slotIndex}-*`
      // keys now point at the OTHER variant's questions, so leaving them would
      // attribute the discarded variant's dwell time / marks / flags to the
      // freshly-served questions.
      Object.keys(questionTelemetry.current).forEach(k => {
        if (k.startsWith(prefix)) delete questionTelemetry.current[k];
      });
      setMarkedForReview([]);  // M2-only list at this point in the section
    }
    setCurrentQuestion(0);
  }, [mathM2Index, rwM2Index]);

  const handleRequestM2Switch = useCallback((section, newVariant) => {
    const easyModule = section === 'rw' ? test.rwModule2Easy : test.module2Easy;
    const slotIndex = section === 'rw' ? rwM2Index : mathM2Index;
    const activeVariant = section === 'rw' ? rwModule2Variant : module2Variant;
    if (!easyModule || slotIndex === undefined) return;
    if (newVariant === activeVariant) return;
    const prefix = `${slotIndex}-`;
    const answerCount = Object.keys(answers).filter(k => k.startsWith(prefix)).length;
    if (answerCount === 0) {
      applyM2VariantSwitch(section, newVariant);
    } else {
      setPendingM2Switch({ section, newVariant, answerCount });
    }
  }, [test.module2Easy, test.rwModule2Easy, mathM2Index, rwM2Index, module2Variant, rwModule2Variant, answers, applyM2VariantSwitch]);

  const handleConfirmM2Switch = useCallback(() => {
    if (!pendingM2Switch) return;
    applyM2VariantSwitch(pendingM2Switch.section || 'math', pendingM2Switch.newVariant);
    setPendingM2Switch(null);
  }, [pendingM2Switch, applyM2VariantSwitch]);

  const handleCancelM2Switch = useCallback(() => setPendingM2Switch(null), []);

  const isDevMode = typeof window !== 'undefined' && window.location.hostname === 'localhost';

  const handleDevAutoSubmit = () => {
    if (!isDevMode) return;
    const autoAnswers = {};
    const choices = ['A', 'B', 'C', 'D'];
    effectiveModules.forEach((mod, modIdx) => {
      mod.questions.forEach((q, qIdx) => {
        const key = `${modIdx}-${qIdx}`;
        if (q.type === 'fill-in') {
          autoAnswers[key] = Math.floor(Math.random() * 20) + 1;
        } else {
          const correct = q.correctAnswer;
          const shouldGetRight = Math.random() < 0.55;
          if (shouldGetRight) {
            autoAnswers[key] = correct;
          } else {
            const wrong = choices.filter(c => c !== correct);
            autoAnswers[key] = wrong[Math.floor(Math.random() * wrong.length)];
          }
        }
        // Dev auto-submit generates ANSWERS to exercise scoring + the skill
        // diagnostic, but must NOT fabricate behavioral telemetry: random
        // usedCalculator / markedForReview / answerChanges would feed the
        // calculator-dependency, elimination, and rushing diagnostics pure
        // noise. Use neutral, deterministic values so only the right/wrong
        // signal drives the dev diagnosis. (1.9 — dev-only, localhost-gated)
        const telem = getOrCreateTelemetry(modIdx, qIdx);
        telem.timeSpent = 45; // neutral: above "rushed", below "slow"
        telem.visits = 1;
      });
    });
    setAnswers(autoAnswers);
    setCurrentModule(effectiveModules.length - 1);
    setCurrentQuestion(effectiveModules[effectiveModules.length - 1].questions.length - 1);
    setTimeout(() => setTestCompleted(true), 100);
  };

  const handleRequestEndTest = () => {
    setConfirmAction('endTest');
    setIsPaused(true);
  };

  const handleRequestLeave = () => {
    setConfirmAction('leave');
    setIsPaused(true);
  };

  const handleConfirmEndTest = useCallback(() => {
    setConfirmAction(null);
    setIsPaused(false);
    fillInSubmitRef.current?.();

    // A test ended with nothing answered is an abandon, not a result. Scoring
    // it persists an IRT-floor attempt (200/section → composite 400, 0%
    // accuracy) that becomes the dashboard's "latest result" and the next
    // real test's delta baseline.
    const answeredCount = Object.values(answersRef.current || {})
      .filter(v => v !== null && v !== undefined && v !== '').length;
    if (answeredCount === 0 && !fillInHasValueRef.current) {
      onClearProgress?.();
      showToast({ type: 'info', message: 'Test ended with no answers — this attempt was not scored.' });
      onBack?.();
      return;
    }

    // Diagnostic floor: a diagnosis (and the study plan minted from it) needs
    // real evidence. Ending below half the sitting SAVES progress and exits —
    // it must not run the finish pipeline, which would persist a near-empty
    // plan, write the miniDiagnostic record (permanently demoting future
    // sittings to the short check-in), and stamp onboarding complete.
    if (test?.isDiagnostic) {
      const totalQ = effectiveModules.reduce((s2, m) => s2 + (m.questions?.length || 0), 0);
      // A just-typed SPR value commits via setState and isn't in answersRef
      // yet (same hazard the zero-answer guard compensates for) — count it,
      // or a student at exactly the floor gets bounced and their final
      // answer read as missing.
      const effectiveAnswered = answeredCount + (fillInHasValueRef.current ? 1 : 0);
      if (effectiveAnswered < Math.ceil(totalQ * 0.5)) {
        // Flush after the fill-in commit renders so the snapshot carries it.
        setTimeout(() => {
          if (buildProgressRef.current && onSaveProgressRef.current) {
            onSaveProgressRef.current(buildProgressRef.current());
          }
        }, 60);
        showToast({ type: 'info', message: `Progress saved (${effectiveAnswered} of ${totalQ} answered). Finish the diagnostic to build your plan.` });
        setTimeout(() => onBack?.(), 80);
        return;
      }
    }

    const mod = currentModuleRef.current;
    const q = currentQuestionRef.current;
    const now = Date.now();
    const elapsed = (now - questionStartTime.current) / 1000;
    if (elapsed > 0 && elapsed < 3600) {
      const telemetry = getOrCreateTelemetry(mod, q);
      telemetry.timeSpent += elapsed;
    }
    // Reset the clock so the completion effect doesn't re-add (now -
    // questionStartTime) on top of the dwell we just recorded (double-count).
    questionStartTime.current = now;
    moduleTimeRemaining.current[mod] = timerSecondsRef.current;
    setTestCompleted(true);
  }, [onBack, onClearProgress, test, effectiveModules]);

  const handleConfirmLeave = useCallback(() => {
    setConfirmAction(null);
    setIsPaused(false);
    // Save fill-in value via ref (reads current question type and value)
    fillInSubmitRef.current?.();
    // Reuse the auto-save builder so the leave payload carries the FULL progress
    // shape — module2Variant / m2VariantManuallySet / moduleCompleted / slim
    // telemetry. The old hand-built payload dropped module2Variant, so an
    // Easy-routed student who Save-&-Left resumed on the HARD module and their
    // positional answers regraded against the wrong questions. buildProgressRef
    // is null only before any answer exists (nothing worth resuming).
    if (onSaveProgressRef.current && buildProgressRef.current) {
      onSaveProgressRef.current(buildProgressRef.current());
    }
    onBack();
  }, [onBack]);

  const handleCancelAction = () => {
    setConfirmAction(null);
    setIsPaused(false);
  };

  // Calculate total score
  const calculateTotalScore = () => {
    let total = 0;
    effectiveModules.forEach((mod, modIdx) => {
      mod.questions.forEach((q, qIdx) => {
        if (isAnswerCorrect(q, answers[`${modIdx}-${qIdx}`])) total++;
      });
    });
    return total;
  };

  // Get score level description
  const getScoreLevel = (scaledScore) => {
    if (scaledScore >= 750) return { level: 'Excellent', color: colors.semantic.success };
    if (scaledScore >= 650) return { level: 'Good', color: colors.semantic.success };
    if (scaledScore >= 550) return { level: 'Average', color: colors.semantic.warning };
    if (scaledScore >= 450) return { level: 'Below Average', color: colors.accent.orange };
    return { level: 'Needs Improvement', color: colors.semantic.error };
  };

  // Module completion screen
  if (moduleCompleted && !testCompleted) {
    const isLastModule = currentModule === effectiveModules.length - 1;
    const remainingModules = effectiveModules.length - currentModule - 1;
    // Like the real digital SAT, the per-module score is never revealed mid-test;
    // the score appears only on the final results screen after the whole test.
    const nextModuleMeta = effectiveModules[currentModule + 1];
    const nextModuleTitle = nextModuleMeta?.title;

    // Bluebook: a 10-minute break sits between the R&W and Math sections.
    // Timed tests only — untimed mode has no clocks to break from. The
    // diagnostic skips it too: a half-length sitting doesn't earn a 10-minute
    // hole, and the module-complete card already gives a breather.
    const isSectionBreak = !isLastModule && isTimed && !test?.isDiagnostic
      && module?.section === 'reading-writing'
      && ((nextModuleMeta?.section || 'math') !== 'reading-writing');
    if (isSectionBreak) {
      return <BreakScreen nextModuleTitle={nextModuleTitle} onResume={handleNextModule} />;
    }

    return (
      <div className="test-module-complete">
        <div className="test-module-complete-card">
          <div className="test-module-complete-eyebrow">{timeExpired ? "Time's up" : 'Module complete'}</div>
          <h2 className="test-module-complete-title">{module.title}</h2>

          {!isLastModule && (
            <p className="test-module-complete-note">
              {timeExpired
                ? `Moving to ${nextModuleTitle} automatically — just like test day, unused time doesn't carry over.`
                : remainingModules === 1
                  ? 'One more module to go before your final score.'
                  : `${remainingModules} modules remaining before your final score.`}
            </p>
          )}
          {isLastModule && timeExpired && (
            <p className="test-module-complete-note">
              That was the last module — scoring your test automatically.
            </p>
          )}

          <button className="test-module-complete-cta" onClick={handleNextModule} type="button">
            {isLastModule ? 'See Final Results' : `Continue to ${nextModuleTitle}`}
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </button>
        </div>
      </div>
    );
  }

  // Review mode screen - shows all questions with explanations
  // IMPORTANT: This must come BEFORE testCompleted check so review mode can render
  if (reviewMode) {
    const reviewMod = effectiveModules[reviewModule];
    const reviewQuestions = reviewMod?.questions || [];
    const reviewQ = reviewQuestions[reviewQuestion];
    const reviewKey = `${reviewModule}-${reviewQuestion}`;
    const userAnswer = answers[reviewKey];

    // Check if answer is correct
    const isCorrect = reviewQ ? isAnswerCorrect(reviewQ, userAnswer) : false;

    // Build flat list of all questions for navigation
    const allQuestions = [];
    effectiveModules.forEach((mod, modIdx) => {
      mod.questions.forEach((q, qIdx) => {
        const key = `${modIdx}-${qIdx}`;
        const ans = answers[key];
        allQuestions.push({ modIdx, qIdx, correct: isAnswerCorrect(q, ans), answered: ans !== undefined });
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

    const userAnswerDisplay = userAnswer !== undefined
      ? (reviewQ?.type === 'fill-in' ? userAnswer : reviewQ?.choices?.find(c => c.id === userAnswer)?.text || userAnswer)
      : 'Not answered';
    const correctAnswerDisplay = reviewQ?.type === 'fill-in'
      ? reviewQ.correctAnswer
      : reviewQ?.choices?.find(c => c.id === reviewQ.correctAnswer)?.text;
    const difficultyColor = reviewQ?.difficulty === 'hard' ? colors.semantic.error : reviewQ?.difficulty === 'medium' ? colors.semantic.warning : colors.semantic.success;
    const difficultyBg = reviewQ?.difficulty === 'hard' ? colors.semantic.errorLight : reviewQ?.difficulty === 'medium' ? colors.semantic.warningBg : colors.semantic.successLight;

    return (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', background: 'var(--color-slate-100)', overflow: 'hidden' }}>

        {/* Stale-content notice (legacy attempts only, dismissible per-attempt) */}
        {showSnapshotNotice && (
          <div
            role="status"
            style={{
              flexShrink: 0,
              background: '#FEF3C7',
              borderBottom: '1px solid #F59E0B',
              color: '#78350F',
              padding: isMobile ? '10px 14px' : '12px 24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '12px',
              fontSize: isMobile ? '12px' : '13px',
              fontWeight: 500,
            }}
          >
            <span>
              {reviewAnswersMissing
                ? 'These are the exact questions from your diagnostic, with the correct answers and explanations. Your own answer choices weren\u2019t saved for this sitting, so every question shows as unanswered.'
                : 'Questions have been updated since this attempt. Original problems are not available for review \u2014 what you see may differ from what you answered.'}
            </span>
            <button
              onClick={dismissSnapshotNotice}
              aria-label="Dismiss notice"
              style={{
                flexShrink: 0,
                background: 'transparent',
                border: '1px solid #B45309',
                color: '#78350F',
                borderRadius: '8px',
                padding: '4px 10px',
                fontSize: '12px',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              Dismiss
            </button>
          </div>
        )}

        {/* ── TOP BAR: Back + Progress + Nav ─────────────────────── */}
        <div style={{
          flexShrink: 0,
          background: 'rgba(255, 255, 255, 0.85)',
          backdropFilter: 'saturate(180%) blur(20px)',
          WebkitBackdropFilter: 'saturate(180%) blur(20px)',
          borderBottom: `1px solid rgba(0, 0, 0, 0.05)`,
          padding: isMobile ? '8px 16px' : '10px 28px',
          display: 'flex', alignItems: 'center', gap: isMobile ? '8px' : '16px',
          overflowX: 'auto',
          WebkitOverflowScrolling: 'touch',
          zIndex: 10,
        }}>
          <button
            onClick={() => initialReviewModule !== null ? onBack?.() : setReviewMode(false)}
            style={{
              padding: isMobile ? '6px 10px' : '8px 16px', background: 'rgba(0,0,0,0.04)', border: `none`,
              borderRadius: '12px', fontSize: isMobile ? '12px' : '13px', fontWeight: typography.weights.semibold,
              color: colors.text.primary, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px',
              transition: `all ${transitions.fast}`, flexShrink: 0,
            }}
            onMouseOver={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.08)'}
            onMouseOut={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.04)'}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 3L5 7l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            {!isMobile && reviewBackLabel}
          </button>

          <div style={{ width: '1px', height: '20px', background: 'rgba(0,0,0,0.1)', flexShrink: 0 }} />

          {/* Module tabs */}
          <div style={{ display: 'flex', gap: '4px', flexShrink: 0 }}>
            {effectiveModules.map((mod, modIdx) => {
              const modQuestions = mod.questions.map((q, qIdx) => {
                const key = `${modIdx}-${qIdx}`;
                const ans = answers[key];
                return { correct: isAnswerCorrect(q, ans), answered: ans !== undefined };
              });
              const correctCount = modQuestions.filter(q => q.answered && q.correct).length;
              const isActiveModule = modIdx === reviewModule;
              return (
                <button
                  key={modIdx}
                  onClick={() => { setReviewModule(modIdx); setReviewQuestion(0); }}
                  style={{
                    padding: isMobile ? '4px 10px' : '6px 14px', borderRadius: '12px', border: 'none',
                    background: isActiveModule ? colors.text.primary : 'transparent',
                    color: isActiveModule ? colors.text.inverse : colors.text.secondary,
                    fontSize: isMobile ? '12px' : '13px', fontWeight: typography.weights.semibold,
                    cursor: 'pointer', whiteSpace: 'nowrap', transition: `all ${transitions.fast}`
                  }}
                >
                  {sectionModuleShort(mod.section, modIdx)} <span style={{ opacity: 0.7, marginLeft: '2px', fontWeight: 'normal' }}>({correctCount}/{mod.questions.length})</span>
                </button>
              );
            })}
          </div>

          <div style={{ width: '1px', height: '20px', background: 'rgba(0,0,0,0.1)', flexShrink: 0 }} />

          {/* Question pills */}
          <div style={{ display: 'flex', gap: '6px', flex: 1, overflowX: 'auto', paddingRight: '10px', alignItems: 'center' }}>
            {(() => {
              const currentMod = effectiveModules[reviewModule];
              return currentMod.questions.map((q, qIdx) => {
                const key = `${reviewModule}-${qIdx}`;
                const ans = answers[key];
                const correct = isAnswerCorrect(q, ans);
                const answered = ans !== undefined;
                const isActive = qIdx === reviewQuestion;
                
                let bgColor = !answered ? 'rgba(0,0,0,0.06)' : correct ? colors.semantic.success : colors.semantic.error;
                let textColor = !answered ? colors.text.secondary : colors.text.inverse;
                
                return (
                  <button
                    key={qIdx}
                    onClick={() => handleReviewJump(reviewModule, qIdx)}
                    style={{
                      width: isMobile ? '28px' : '32px', height: isMobile ? '28px' : '32px', borderRadius: '10px',
                      border: isActive ? `2px solid ${colors.text.primary}` : '2px solid transparent',
                      background: bgColor, color: textColor,
                      fontSize: isMobile ? '11px' : '12px', fontWeight: typography.weights.bold,
                      cursor: 'pointer', transition: `all ${transitions.fast}`,
                      transform: isActive ? 'scale(1.08)' : 'scale(1)',
                      flexShrink: 0,
                      boxShadow: isActive ? '0 2px 8px rgba(0,0,0,0.1)' : 'none',
                    }}
                  >
                    {qIdx + 1}
                  </button>
                );
              });
            })()}
          </div>

          {/* Legend */}
          {!isMobile && (
            <div style={{ display: 'flex', gap: '12px', fontSize: '12px', flexShrink: 0, fontWeight: '500' }}>
              {[
                { color: colors.semantic.success, label: 'Correct' },
                { color: colors.semantic.error, label: 'Wrong' },
                { color: 'rgba(0,0,0,0.15)', label: 'Skipped' },
              ].map(({ color, label }) => (
                <span key={label} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: color }} />
                  <span style={{ color: colors.text.secondary }}>{label}</span>
                </span>
              ))}
            </div>
          )}
        </div>

        {/* ── WORKSPACE ──────────────────────────────────── */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', padding: isMobile ? 0 : '16px', gap: isMobile ? 0 : '16px' }}>

          {/* DESKTOP RIGHT PANE TOGGLE (Apple Segmented Control Style) */}
          {!isMobile && (
            <div style={{ display: 'flex', justifyContent: 'center', flexShrink: 0 }}>
              <div style={{
                display: 'flex', background: 'rgba(118, 118, 128, 0.12)', borderRadius: '10px', padding: '3px',
              }}>
                {['explanation', 'both', 'ai'].map(pane => (
                  <button
                    key={pane}
                    onClick={() => setReviewRightPane(pane)}
                    style={{
                      padding: '6px 20px', 
                      background: reviewRightPane === pane ? colors.surface.white : 'transparent',
                      border: 'none', 
                      borderRadius: '7px',
                      color: reviewRightPane === pane ? colors.text.primary : colors.text.secondary,
                      fontSize: '13px', fontWeight: typography.weights.semibold, textTransform: 'capitalize',
                      boxShadow: reviewRightPane === pane ? '0 3px 8px rgba(0,0,0,0.12), 0 3px 1px rgba(0,0,0,0.04)' : 'none',
                      cursor: 'pointer', transition: `all ${transitions.fast}`,
                    }}
                  >
                    {pane === 'ai' ? 'AI Tutor' : pane}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div style={{
            flex: 1, display: 'flex', overflow: 'hidden',
            flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? 0 : '16px'
          }}>
            {/* LEFT / QUESTION PANE */}
            {(!isMobile || reviewTab === 'question') && (
              <div style={{
                flex: isMobile ? 1 : '1 1 0%',
                maxWidth: isMobile ? 'none' : '540px',
                // No 340px floor below 1024px (iPad portrait) — let the question
                // pane shrink instead of overflowing the screen.
                minWidth: isMobile || windowWidth < 1024 ? 'none' : '340px',
                borderRadius: isMobile ? 0 : '20px',
                boxShadow: isMobile ? 'none' : '0 4px 20px rgba(0,0,0,0.03)',
                border: isMobile ? 'none' : `1px solid rgba(0,0,0,0.06)`,
                overflowY: 'auto',
                background: colors.surface.white,
                padding: isMobile ? '16px' : '32px',
                display: 'flex', flexDirection: 'column'
              }}>
                {/* ── CONTEXT ZONE: Status + Question ──────────────────── */}
                <div style={{
                  display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap'
                }}>
                  {/* Correctness badge */}
                  <div style={{
                    display: 'flex', alignItems: 'center', gap: '8px',
                    padding: '6px 12px', borderRadius: radius.full,
                    background: !userAnswer ? colors.surface.gray : isCorrect ? colors.semantic.successLight : colors.semantic.errorLight,
                    border: `1px solid ${!userAnswer ? colors.surface.grayDark : isCorrect ? colors.semantic.success : colors.semantic.error}`,
                  }}>
                    <div style={{
                      width: '18px', height: '18px', borderRadius: '50%',
                      background: !userAnswer ? colors.text.muted : isCorrect ? colors.semantic.success : colors.semantic.error,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: colors.text.inverse, fontSize: '10px',
                    }}>
                      {!userAnswer ? '?' : isCorrect ? <CheckIcon size={10} color={colors.text.inverse} /> : <CrossIcon size={10} color={colors.text.inverse} />}
                    </div>
                    <span style={{
                      fontSize: '12px', fontWeight: typography.weights.semibold,
                      color: !userAnswer ? colors.text.secondary : isCorrect ? colors.semantic.success : colors.semantic.error,
                    }}>
                      {!userAnswer ? 'Skipped' : isCorrect ? 'Correct' : 'Incorrect'}
                    </span>
                  </div>

                  {/* Question number */}
                  <span style={{
                    fontSize: '12px', fontWeight: typography.weights.semibold,
                    color: colors.text.muted,
                  }}>
                    Q{currentFlatIndex + 1} of {allQuestions.length}
                  </span>

                  {/* Difficulty chip */}
                  {reviewQ?.difficulty && (
                    <span style={{
                      fontSize: '10px', fontWeight: typography.weights.bold,
                      padding: '2px 8px', borderRadius: radius.full,
                      background: difficultyBg, color: difficultyColor,
                      letterSpacing: '0.02em',
                    }}>
                      {reviewQ.difficulty.charAt(0).toUpperCase() + reviewQ.difficulty.slice(1)}
                    </span>
                  )}

                </div>

                {/* Answer summary */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '13px', marginBottom: '20px', padding: '12px', background: colors.surface.offWhite, borderRadius: radius.md, border: `1px solid ${colors.surface.grayDark}` }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: colors.text.muted }}>Your Answer:</span>
                    <span style={{ fontWeight: typography.weights.semibold, color: isCorrect ? colors.semantic.success : colors.semantic.error, textAlign: 'right' }}>{userAnswerDisplay}</span>
                  </div>
                  {!isCorrect && userAnswer !== undefined && (
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: colors.text.muted }}>Correct Answer:</span>
                      <span style={{ fontWeight: typography.weights.semibold, color: colors.semantic.success, textAlign: 'right' }}>{correctAnswerDisplay}</span>
                    </div>
                  )}
                </div>

                {/* Passage(s) — for R&W questions, with italic/underline/blank markup */}
                {reviewQ?.passage && (
                  <HighlightablePassage
                    text={reviewQ.passage}
                    highlights={[]}
                    hidden={false}
                    onAddHighlight={() => {}}
                    onRemoveHighlight={() => {}}
                  />
                )}
                {reviewQ?.passages && Array.isArray(reviewQ.passages) && (
                  <div className="rw-passage-stack">
                    {reviewQ.passages.map((p, i) => (
                      <div key={i}>
                        <div className="rw-passage-label">{p.label || `Text ${i + 1}`}</div>
                        <HighlightablePassage
                          text={p.text}
                          highlights={[]}
                          hidden={false}
                          onAddHighlight={() => {}}
                          onRemoveHighlight={() => {}}
                        />
                      </div>
                    ))}
                  </div>
                )}
                {reviewQ?.studentNotes && (
                  <div className="rw-passage">
                    {reviewQ.studentNotes.intro && (
                      <div style={{ marginBottom: '0.5rem' }}>{reviewQ.studentNotes.intro}</div>
                    )}
                    <ul style={{ paddingLeft: '1.25rem', margin: '0.5rem 0' }}>
                      {reviewQ.studentNotes.bullets.map((b, i) => (
                        <li key={i} style={{ marginBottom: '0.25rem' }}>
                          <MathText text={b} />
                        </li>
                      ))}
                    </ul>
                    {reviewQ.studentNotes.goal && (
                      <div style={{ marginTop: '0.5rem' }}>
                        <MathText text={reviewQ.studentNotes.goal} />
                      </div>
                    )}
                  </div>
                )}

                {/* Question Text */}
                <div style={{
                  marginBottom: '16px', fontSize: '15px', lineHeight: '1.7',
                  color: colors.text.primary, fontFamily: SAT_TYPOGRAPHY.questionFont,
                }}>
                  {Array.isArray(reviewQ?.question) || (reviewQ?.question && typeof reviewQ.question === 'object')
                    ? <QuestionRenderer content={reviewQ.question} />
                    : <MathText text={reviewQ?.question || ''} />
                  }
                </div>

                {/* Formula if present */}
                {reviewQ?.questionFormula && renderFormula(reviewQ.questionFormula)}

                {/* Diagram */}
                {reviewQ?.diagram && (
                  <div style={{
                    marginBottom: '16px', padding: '12px',
                    background: colors.surface.offWhite, borderRadius: radius.md,
                    border: `1px solid ${colors.surface.grayDark}`, display: 'flex', justifyContent: 'center',
                  }}>
                    <QuestionDiagram type={reviewQ.diagram.type} params={reviewQ.diagram.params} />
                  </div>
                )}

                {/* Table */}
                {reviewQ?.questionTable && (
                  <div style={{ marginBottom: '16px', display: 'flex', justifyContent: 'center' }}>
                    <table style={{ borderCollapse: 'collapse', fontSize: '14px', fontFamily: 'Times New Roman, Georgia, serif', background: '#fff', color: '#111' }}>
                      <thead>
                        <tr>
                          {reviewQ.questionTable.headers.map((header, i) => (
                            <th key={i} style={{
                              border: '1.5px solid #111',
                              padding: '6px 14px', background: '#fff', fontWeight: 'bold',
                              fontFamily: 'system-ui, -apple-system, sans-serif', fontSize: '13px',
                            }}>
                              <MathText text={header} />
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {reviewQ.questionTable.rows.map((row, i) => (
                          <tr key={i}>
                            {row.map((cell, j) => (
                              <td key={j} style={{
                                border: '1px solid #111',
                                padding: '6px 14px', textAlign: 'center', background: '#fff',
                              }}>
                                <MathText text={cell} />
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* Answer choices */}
                {reviewQ?.type === 'multiple-choice' && reviewQ?.choices && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', flex: 1 }}>
                    {reviewQ.choices.map((choice) => {
                      const isUserChoice = userAnswer === choice.id;
                      const isCorrectChoice = reviewQ.correctAnswer === choice.id;
                      let bgColor = colors.surface.offWhite;
                      let borderColor = colors.surface.grayDark;
                      if (isCorrectChoice) { bgColor = colors.semantic.successLight; borderColor = colors.semantic.success; }
                      else if (isUserChoice && !isCorrect) { bgColor = colors.semantic.errorLight; borderColor = colors.semantic.error; }

                      return (
                        <div key={choice.id} style={{
                          padding: '10px 14px', borderRadius: radius.md,
                          border: `1.5px solid ${borderColor}`, background: bgColor,
                          display: 'flex', alignItems: 'center', gap: '12px',
                        }}>
                          <div style={{
                            width: '24px', height: '24px', borderRadius: '4px',
                            background: isCorrectChoice ? colors.semantic.success : isUserChoice ? colors.semantic.error : colors.surface.grayMedium,
                            color: colors.text.inverse, display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontWeight: typography.weights.semibold, fontSize: '12px', flexShrink: 0,
                          }}>
                            {choice.id}
                          </div>
                          <div style={{ flex: 1, fontSize: '14px', color: colors.text.primary }}>
                            {renderChoice(choice)}
                          </div>
                          {isCorrectChoice && (
                            <CheckIcon size={14} color={colors.semantic.success} />
                          )}
                          {isUserChoice && !isCorrect && (
                            <CrossIcon size={14} color={colors.semantic.error} />
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* Fill-in display */}
                {reviewQ?.type === 'fill-in' && (
                  <div style={{
                    padding: '16px', background: colors.semantic.successLight,
                    borderRadius: '16px', border: `1px solid rgba(0,0,0,0.05)`,
                    textAlign: 'center', flex: 1, boxShadow: '0 4px 12px rgba(0,0,0,0.02)'
                  }}>
                    <p style={{ fontSize: '11px', fontWeight: typography.weights.bold, color: colors.semantic.success, textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '6px' }}>
                      Correct Answer
                    </p>
                    <p style={{ fontSize: '28px', fontWeight: typography.weights.bold, color: colors.semantic.success, letterSpacing: '-0.02em' }}>
                      {reviewQ.correctAnswer}
                    </p>
                    {!isCorrect && userAnswer !== undefined && (
                      <p style={{ fontSize: '14px', color: colors.semantic.error, marginTop: '8px', fontWeight: '500' }}>
                        Your answer: <strong>{userAnswer}</strong>
                      </p>
                    )}
                  </div>
                )}
                
                {/* Empty block to pad bottom for the floating navigation */}
                <div style={{ height: '80px', flexShrink: 0 }}></div>

              </div>
            )}

            {/* RIGHT / EXPLANATION + AI TUTOR PANE */}
            {(!isMobile || reviewTab !== 'question') && (
              <div style={{
                flex: '1.2 1 0%', minWidth: 0, display: 'flex', flexDirection: reviewRightPane === 'both' && windowWidth >= 1024 ? 'row' : 'column',
                overflow: 'hidden', background: 'transparent', gap: isMobile ? 0 : '16px'
              }}>
                {/* Explanation */}
                {(!isMobile && (reviewRightPane === 'explanation' || reviewRightPane === 'both')) || (isMobile && reviewTab === 'explanation') ? (
                  <div style={{
                    flex: reviewRightPane === 'both' ? 1.2 : 1, overflowY: 'auto', 
                    padding: isMobile ? '16px' : '32px',
                    background: colors.surface.white,
                    borderRadius: isMobile ? 0 : '20px',
                    boxShadow: isMobile ? 'none' : '0 4px 20px rgba(0,0,0,0.03)',
                    border: isMobile ? 'none' : `1px solid rgba(0,0,0,0.06)`,
                  }}>
                    <div style={{
                      display: 'flex', alignItems: 'center', gap: '12px',
                      marginBottom: '24px', paddingBottom: '16px',
                      borderBottom: `1px solid rgba(0,0,0,0.06)`,
                    }}>
                      <div style={{
                        width: '36px', height: '36px', borderRadius: '12px',
                        background: colors.semantic.info, display: 'flex', alignItems: 'center', justifyContent: 'center',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
                      }}>
                        <LightBulbIcon size={20} color={colors.text.inverse} />
                      </div>
                      <h3 style={{
                        fontSize: typography.sizes.lg, fontWeight: typography.weights.bold,
                        color: colors.text.primary, margin: 0, letterSpacing: '-0.01em'
                      }}>
                        Solution Explanation
                      </h3>
                    </div>
                    {reviewQ?.explanation ? (
                      <SolutionExplanation explanation={reviewQ.explanation} isCorrect={isCorrect} />
                    ) : (
                      <p style={{ color: colors.text.muted, fontStyle: 'italic', fontSize: typography.sizes.sm }}>
                        No explanation available for this question.
                      </p>
                    )}
                  </div>
                ) : null}

                {/* AI Tutor Chat. Review stays read-only post-trial, but the
                    tutor burns tokens — locked accounts get a subscribe note
                    instead (the server enforces the same rule with a 402). */}
                {((!isMobile && (reviewRightPane === 'ai' || reviewRightPane === 'both')) || (isMobile && reviewTab === 'ai')) && tutorLocked ? (
                  <div style={{
                    flex: 1, display: 'flex', flexDirection: 'column',
                    alignItems: 'center', justifyContent: 'center', gap: '12px',
                    background: '#ffffff',
                    borderRadius: isMobile ? 0 : '20px',
                    border: isMobile ? 'none' : '1px solid rgba(0,0,0,0.06)',
                    padding: '32px 24px', textAlign: 'center',
                  }}>
                    <p style={{ margin: 0, fontWeight: 700, color: colors.text.primary }}>
                      The AI tutor is a Premium feature
                    </p>
                    <p style={{ margin: 0, fontSize: typography.sizes.sm, color: colors.text.muted, maxWidth: '320px' }}>
                      Subscribe to ask the tutor about any question in this review.
                    </p>
                    {onSubscribe && (
                      <button
                        type="button"
                        onClick={onSubscribe}
                        style={{
                          border: 'none', borderRadius: '10px', padding: '10px 18px',
                          background: '#ea580c', color: '#ffffff', fontWeight: 700,
                          fontSize: typography.sizes.sm, cursor: 'pointer',
                        }}
                      >
                        See plans
                      </button>
                    )}
                  </div>
                ) : null}
                {(!isMobile && (reviewRightPane === 'ai' || reviewRightPane === 'both')) || (isMobile && reviewTab === 'ai') ? (!tutorLocked && (
                  <div style={{
                    flex: 1, display: 'flex', flexDirection: 'column',
                    background: 'transparent',
                    borderRadius: isMobile ? 0 : '20px',
                    boxShadow: isMobile ? 'none' : '0 4px 20px rgba(0,0,0,0.03)',
                    border: isMobile ? 'none' : `1px solid rgba(0,0,0,0.06)`,
                    overflow: 'hidden'
                  }}>
                    <AiTutorChat
                        key={`review-tutor-${reviewModule}-${reviewQuestion}`}
                        isOpen={true}
                        onClose={() => {}}
                        moduleId={test.id}
                        lessonId={`review-${reviewModule}-${reviewQuestion}`}
                        lessonTitle={`${test.title} - Question ${currentFlatIndex + 1}`}
                        isVideoLesson={false}
                        isPracticeQuestion={true}
                        skillProgress={skillProgress}
                        testDate={user?.testDate}
                        user={user}
                        practiceTestResults={practiceTestResults}
                        practiceContext={{
                          question: reviewQ?.question || '',
                          choices: reviewQ?.choices || [],
                          hint: reviewQ?.hint || '',
                          answerRevealed: true,
                          correctAnswer: reviewQ?.type === 'fill-in'
                            ? reviewQ?.correctAnswer
                            : reviewQ?.choices?.find(c => c.id === reviewQ?.correctAnswer)?.text || reviewQ?.correctAnswer,
                          explanation: reviewQ?.explanation || '',
                          // Revive trap-analysis coaching: what the student picked + whether right.
                          isCorrect,
                          selectedAnswer: userAnswer !== undefined
                            ? (reviewQ?.type === 'fill-in' ? userAnswer : `${userAnswer}) ${userAnswerDisplay}`)
                            : undefined,
                          userAnswer,
                          skills: reviewQ?.skills || (reviewQ?.skill ? [reviewQ.skill] : []),
                          // R&W stimulus + classification (undefined for math items → tutor stays math)
                          section: reviewQ?.section || 'math',
                          domain: reviewQ?.domain,
                          passage: reviewQ?.passage,
                          passages: reviewQ?.passages,
                          studentNotes: reviewQ?.studentNotes,
                          questionTable: reviewQ?.questionTable
                        }}
                        embedded={true}
                        headerCompact={true}
                        standalone={false}
                      />
                  </div>
                )) : null}
              </div>
            )}
          </div>

          {/* ── FLOATING NAVIGATION PILL ────────────────────────────────── */}
          <div style={{
            position: 'absolute',
            bottom: isMobile ? '24px' : '32px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '16px',
            background: 'rgba(255, 255, 255, 0.85)',
            backdropFilter: 'saturate(180%) blur(24px)',
            WebkitBackdropFilter: 'saturate(180%) blur(24px)',
            padding: '8px 12px',
            borderRadius: '100px', 
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.04)',
            border: `1px solid rgba(255, 255, 255, 0.5)`,
            zIndex: 100,
          }}>
            <button
              onClick={() => handleReviewNav(-1)}
              disabled={currentFlatIndex === 0}
              style={{
                padding: '10px',
                background: currentFlatIndex === 0 ? 'transparent' : colors.surface.white,
                color: currentFlatIndex === 0 ? 'rgba(0,0,0,0.2)' : colors.text.primary,
                border: 'none',
                borderRadius: '50%', 
                width: '40px', height: '40px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: currentFlatIndex === 0 ? 'not-allowed' : 'pointer',
                transition: `all ${transitions.fast}`,
                boxShadow: currentFlatIndex === 0 ? 'none' : '0 2px 8px rgba(0,0,0,0.06)',
              }}
            >
              <svg width="18" height="18" viewBox="0 0 14 14" fill="none"><path d="M9 3L5 7l4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <div style={{ textAlign: 'center', minWidth: '60px' }}>
              <span style={{ color: colors.text.primary, fontSize: '14px', fontWeight: typography.weights.bold }}>
                {currentFlatIndex + 1}
              </span>
              <span style={{ color: colors.text.secondary, fontSize: '13px', fontWeight: '500' }}>
                <span style={{ opacity: 0.5, margin: '0 4px' }}>/</span>{allQuestions.length}
              </span>
            </div>
            <button
              onClick={() => handleReviewNav(1)}
              disabled={currentFlatIndex === allQuestions.length - 1}
              style={{
                padding: '10px',
                background: currentFlatIndex === allQuestions.length - 1 ? 'transparent' : colors.text.primary,
                color: currentFlatIndex === allQuestions.length - 1 ? 'rgba(0,0,0,0.2)' : colors.text.inverse,
                border: 'none', 
                borderRadius: '50%',
                width: '40px', height: '40px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: currentFlatIndex === allQuestions.length - 1 ? 'not-allowed' : 'pointer',
                transition: `all ${transitions.fast}`,
                boxShadow: currentFlatIndex === allQuestions.length - 1 ? 'none' : '0 4px 12px rgba(0,0,0,0.15)',
              }}
            >
              <svg width="18" height="18" viewBox="0 0 14 14" fill="none"><path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>

        </div>
      </div>
    );
  }
  // Diagnostic v2 completion — the finish pipeline's phases replace the
  // TestResults page entirely: a diagnostic ends in the diagnosis + plan
  // handoff (MiniDiagnosticResults), never in score-history results.
  if (testCompleted && test?.isDiagnostic) {
    if (diagnosticFinish.phase === 'results' && diagnosticFinish.result) {
      return (
        <div style={{ height: '100vh', overflowY: 'auto', boxSizing: 'border-box', background: 'var(--color-slate-100)', display: 'flex', justifyContent: 'center', padding: '0 16px' }}>
          <MiniDiagnosticResults
            result={diagnosticFinish.result}
            user={user}
            onViewPlan={onGoToStudyPlan}
          />
        </div>
      );
    }
    if (diagnosticFinish.phase === 'error') {
      return (
        <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--color-slate-100)', padding: '24px' }}>
          <div style={{ ...cardStyles.elevated, maxWidth: '440px', padding: '32px', textAlign: 'center' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', margin: '0 0 8px' }}>
              We couldn't build your plan
            </h2>
            <p style={{ color: colors.text.secondary, fontSize: '15px', margin: '0 0 20px' }}>
              Your answers are saved on this device. Check your connection and try again.
            </p>
            <Button onClick={runDiagnosticFinish}>Try again</Button>
          </div>
        </div>
      );
    }
    // 'finishing' (and the pre-effect frame): building diagnosis + plan —
    // same composition as the old shell's finishing screen.
    return (
      <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--color-slate-100)' }}>
        <div style={{ textAlign: 'center', padding: '24px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '24px', fontWeight: 700, color: colors.text.primary, margin: '0 0 8px' }}>
            Building your study plan
          </h2>
          <p style={{ fontFamily: 'var(--font-ui)', color: colors.text.secondary, fontSize: '15px', margin: 0 }}>
            Scoring your answers and mapping your focus areas...
          </p>
        </div>
      </div>
    );
  }
  // Test completion screen - TestResults with direct navigation to Study Plan tab
  if (testCompleted) {
    return (
      // App.jsx's #main-content locks to `height: 100vh; overflow: hidden`
      // while view === 'takingTest' (required so the active-test
      // `.test-session-shell` two-pane layout can manage its own scroll).
      // When the test ends we stay on the same view but flip to rendering
      // <TestResults>, whose content runs taller than the viewport. Without
      // our own scroll container here, the parent clips everything below
      // the fold and the student can't reach 'Diagnostic Insights' or any
      // tab content past the first ~900 px. Take the full 100vh from the
      // locked parent and scroll inside this wrapper.
      <div style={{
        height: '100vh',
        overflowY: 'auto',
        boxSizing: 'border-box',
        background: 'var(--color-slate-100)',
        backgroundImage: 'radial-gradient(circle at 50% 0%, rgba(255,255,255,0.8) 0%, rgba(245,245,247,0) 100%)',
        padding: isMobile ? '16px' : '32px'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {/* Easy-route students answered the EASY Module 2; grade the breakdown /
              domain / difficulty aggregates + review grid against the modules they
              actually saw (effectiveModules), matching the authoritative headline.
              Hard/no-variant: effectiveModules === test.modules, so gate on the
              variant to avoid minting a new object ref every render. */}
          <TestResults
            test={(module2Variant === 'easy' || rwModule2Variant === 'easy') ? { ...test, modules: effectiveModules } : test}
            answers={answers}
            storedResult={scoredRef.current ? {
              scaledScore: scoredRef.current.sectionScore,
              sectionScores: scoredRef.current.sectionScores,
              isMultiSection: scoredRef.current.isMultiSection,
            } : null}
            servedMathRoute={module2Variant}
            servedRwRoute={rwModule2Variant}
            diagnosticData={diagnosticDataRef.current}
            diagnosticReport={diagnosticReportRef.current}
            practiceTestResults={practiceTestResults}
            aiDiagnosticState={aiDiagnosticState}
            onRetryAiDiagnostic={retryAiDiagnostic}
            onGoToStudyPlan={onGoToStudyPlan}
            onBack={onBack}
            user={user}
            saveStatus={resultSaveStatus}
            onRetrySave={onRetrySave}
            onRetake={() => {
              setCurrentModule(0);
              setCurrentQuestion(0);
              setAnswers({});
              setMarkedForReview([]);
              setEliminatedChoices({});
              // Highlights + timing refs are per-attempt state too — without
              // these resets the retake shows the prior attempt's highlights
              // and its telemetry inherits the results-screen dwell time.
              setHighlightsByKey({});
              setHighlightsHidden(false);
              moduleTimeRemaining.current = {};
              questionStartTime.current = Date.now();
              prevQuestion.current = { module: 0, question: 0 };
              visitedQuestions.current = new Set();
              setModuleCompleted(false);
              setTestCompleted(false);
              setResultSaved(false);
              setSavedStudyPlan(null);
              setAiDiagnosticState({ status: 'idle', narrative: null, error: null });
              diagnosticNarrativeAttempted.current = false;
              diagnosticDataRef.current = null;
              diagnosticReportRef.current = null;
              attemptTimestampRef.current = null;
              questionTelemetry.current = {};
              navigationHistory.current = [];
              // A retake is a fresh attempt. Re-arm study-plan generation
              // (otherwise the plan stays frozen on the prior attempt's
              // diagnosis) and reset the Module-2 route so the retake
              // re-evaluates Easy/Hard instead of inheriting the prior route
              // (which would re-cap a recovered student at the Easy ceiling).
              planGenerationAttempted.current = false;
              setModule2Variant('hard');
              setM2VariantManuallySet(false);
              setRwModule2Variant('hard');
              setRwM2VariantManuallySet(false);
              setResumeTimeRemaining(null);
              setOnReviewPage(false);
              setTimeExpired(false);
              setEliminatorMode(false);
              setDirectionsOpen(true); // fresh attempt starts at the section directions
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
            savedStudyPlan={savedStudyPlan}
          />
        </div>
      </div>
    );
  }

  const currentAnswer = answers[`${currentModule}-${currentQuestion}`];
  const isMarked = markedForReview.includes(currentQuestion);

  // Derived chrome for the SEVA Test redesign (presentational only).
  const answeredInModule = Object.keys(moduleAnswersForGrid).length;
  const moduleProgressPct = questions.length ? ((currentQuestion + 1) / questions.length) * 100 : 0;
  const RING_C = 106.81; // 2π·17 for the answered-progress ring
  const ringOffset = questions.length ? RING_C * (1 - answeredInModule / questions.length) : RING_C;

  // Shared answer block (choices or fill-in) — the timed test uses the
  // Bluebook always-visible cross-out (crossOut="bluebook"); the drill does not.
  const answerBlock = question?.type === 'fill-in' ? (
    <div style={{ marginTop: '8px' }}>
      <input
        type="text"
        inputMode="text"
        value={fillInValue}
        onChange={(e) => setFillInValue(sanitizeGridIn(e.target.value))}
        onBlur={handleFillInSubmit}
        placeholder="Enter your answer"
        onKeyDown={(e) => { if (e.key === 'Enter') handleNext(); }}
        style={{
          width: '200px', padding: '12px 16px', fontFamily: 'var(--pt-font-serif)',
          fontSize: '18px', border: '1.5px solid var(--pt-line-strong)', borderRadius: '10px',
          outline: 'none', background: 'var(--pt-surface)', color: 'var(--pt-text)',
        }}
      />
      {/* Bluebook Answer Preview: echoes exactly what will be graded */}
      {fillInValue !== '' && (
        <div style={{ marginTop: '10px', fontSize: '13px', color: 'var(--pt-text-soft, #6b7280)' }}>
          Answer Preview:{' '}
          <span style={{
            fontFamily: 'var(--pt-font-serif)', fontSize: '19px',
            color: 'var(--pt-text)', fontWeight: 600,
          }}>{fillInValue}</span>
        </div>
      )}
      <div style={{ marginTop: '8px', fontSize: '12px', color: 'var(--pt-text-soft, #6b7280)', lineHeight: 1.5 }}>
        Up to 5 characters (6 with a minus sign). Enter fractions like 7/2 or
        decimals like 3.5 — no mixed numbers, symbols, or units.
      </div>
    </div>
  ) : (
    <AnswerChoiceList
      choices={question?.choices || []}
      selectedId={currentAnswer}
      eliminatedIds={eliminatedChoices[`${currentModule}-${currentQuestion}`] || []}
      onSelect={handleSelectAnswer}
      onToggleEliminate={handleToggleEliminate}
      crossOut="bluebook"
      crossOutControls={eliminatorMode}
    />
  );

  return (
    <div className="test-session-shell" data-section={isReadingWriting ? 'reading-writing' : 'math'}>
      {/* Header */}
      <div className="test-session-header">
        <div className="header-left">
          <button onClick={handleRequestLeave} className="test-exit-btn" type="button">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            Exit
          </button>
          {!isMobile && (
            <>
              <span className="test-session-divider" aria-hidden="true" />
              <span className="test-wordmark"><span className="wm-s">S</span><span className="wm-e">E</span><span className="wm-v">V</span><span className="wm-a">A</span></span>
              <span className="test-name-tag">{test.title}</span>
            </>
          )}
          <button className="test-top-btn" onClick={() => setDirectionsOpen(true)} type="button">
            Directions
          </button>
        </div>

        <div className="header-center">
          <div className="header-title">{module.title}</div>
          <div className="header-subtitle">Question {currentQuestion + 1} of {questions.length}</div>
        </div>

        <div className="header-right">
          {/* Bluebook ABC answer-eliminator toggle — cross-out controls stay
              hidden until the tool is on; existing strikethroughs always show. */}
          {question?.type !== 'fill-in' && (
            <button
              className="test-top-btn"
              onClick={() => setEliminatorMode(v => !v)}
              aria-pressed={eliminatorMode}
              title={eliminatorMode ? 'Turn off answer eliminator' : 'Turn on answer eliminator'}
              type="button"
              style={eliminatorMode ? { textDecoration: 'underline', fontWeight: 700 } : undefined}
            >
              <span style={{ textDecoration: 'line-through' }}>ABC</span>
            </button>
          )}
          {/* Calculator Button — Math only */}
          {!isReadingWriting && (
            <button
              className="btn-launch"
              onClick={() => {
                const telemetry = getOrCreateTelemetry(currentModuleRef.current, currentQuestionRef.current);
                telemetry.usedCalculator = true;
                setShowCalculator(true);
              }}
              style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="4" y="2" width="16" height="20" rx="2" />
                <line x1="8" y1="6" x2="16" y2="6" />
                <line x1="8" y1="10" x2="10" y2="10" />
                <line x1="14" y1="10" x2="16" y2="10" />
                <line x1="8" y1="14" x2="10" y2="14" />
                <line x1="8" y1="18" x2="16" y2="18" />
                <line x1="14" y1="18" x2="16" y2="18" />
              </svg>
              Calculator
            </button>
          )}
          {!isReadingWriting && (
            <button
              className="btn-launch"
              onClick={() => setShowReference(true)}
              style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
              </svg>
              Reference
            </button>
          )}
          <button onClick={handlePauseToggle} className="test-top-btn" type="button">
            {isPaused ? (
              <><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M8 5v14l11-7z"/></svg>Resume</>
            ) : (
              <><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/></svg>Pause</>
            )}
          </button>
          {isTimed ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <button
                onClick={() => setShowTimer(!showTimer)}
                className="test-top-btn"
                type="button"
              >
                {showTimer ? 'Hide Timer' : 'Show Timer'}
              </button>
              <div style={{ display: showTimer ? undefined : 'none' }}>
                <Timer
                  key={currentModule}
                  initialMinutes={module.timeLimit || 35}
                  onTimeUp={handleTimeUp}
                  onFiveMinutes={handleFiveMinutesLeft}
                  isPaused={isPaused}
                  timeRef={timerSecondsRef}
                  initialSeconds={resumeTimeRemaining}
                />
              </div>
            </div>
          ) : (
            <span className="test-untimed-pill">
              <span className="pill-dot" aria-hidden="true" />
              {isMobile ? 'Untimed' : 'Untimed Mode'}
            </span>
          )}
          {!isMobile && (
            <button onClick={handleRequestEndTest} className="test-end-btn" type="button">
              End Test
            </button>
          )}
          {isDevMode && (
            <button
              onClick={handleDevAutoSubmit}
              className="btn-launch"
              style={{ background: '#7c3aed' }}
            >
              DEV: Auto-Submit
            </button>
          )}
        </div>
        <div className="test-session-progress" aria-hidden="true">
          <div className="test-session-progress-fill" style={{ width: `${moduleProgressPct}%` }} />
        </div>
      </div>

      {/* Module 2 variant switcher — surfaces on a section's Module 2 when the
          test ships an Easy variant for that section (math and R&W each route
          independently, like the official adaptive SAT). Active variant tile
          is highlighted; the other is clickable. Click triggers
          handleRequestM2Switch, which confirms first if there are answers to
          discard. */}
      {/* Diagnostics NEVER show the switcher: the whole point is measuring
          the route the engine picks — a manual override corrupts the score
          band, the record's routing provenance, and the starter plan. */}
      {!test?.isDiagnostic && ((currentModule === mathM2Index && !!test.module2Easy) || (currentModule === rwM2Index && !!test.rwModule2Easy)) && !testCompleted && !moduleCompleted && !onReviewPage && (
        <div style={{
          maxWidth: '1100px',
          margin: '12px auto 0',
          padding: '0 16px',
          display: 'flex',
          gap: '10px',
          alignItems: 'stretch',
        }}>
          {[
            {
              variant: 'easy',
              label: 'Module 2 (Easy)',
              blurb: 'Eases up after Module 1. Confidence-builders, fewer traps.',
            },
            {
              variant: 'hard',
              label: 'Module 2 (Hard)',
              blurb: 'Full College Board Module 2 Hard calibration.',
            },
          ].map(({ variant, label, blurb }) => {
            const switcherSection = currentModule === rwM2Index ? 'rw' : 'math';
            const active = (switcherSection === 'rw' ? rwModule2Variant : module2Variant) === variant;
            const isRecommended = (switcherSection === 'rw' ? recommendedRwM2Variant : recommendedM2Variant) === variant;
            return (
              <button
                key={variant}
                type="button"
                onClick={active ? undefined : () => handleRequestM2Switch(switcherSection, variant)}
                aria-pressed={active}
                disabled={active}
                style={{
                  flex: 1,
                  padding: '10px 14px',
                  textAlign: 'left',
                  background: active ? 'rgba(234, 88, 12, 0.06)' : 'var(--color-white)',
                  border: `2px solid ${active ? colors.focus : 'var(--color-slate-200)'}`,
                  borderRadius: radius.md,
                  cursor: active ? 'default' : 'pointer',
                  transition: 'border-color 0.15s, background 0.15s',
                  position: 'relative',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
                  <span style={{ fontWeight: 600, fontSize: '14px', color: colors.text.primary }}>
                    {label}
                  </span>
                  <span style={{
                    fontSize: '11px',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                    color: active ? colors.focus : 'var(--color-slate-500)',
                  }}>
                    {active
                      ? (isRecommended ? 'Active · Recommended' : 'Active')
                      : `Switch to ${variant === 'easy' ? 'Easy' : 'Hard'} →`}
                  </span>
                </div>
                <div style={{ fontSize: '12px', color: colors.text.secondary, marginTop: '2px', lineHeight: 1.4 }}>
                  {blurb}
                </div>
              </button>
            );
          })}
        </div>
      )}

      {/* Desktop Nav Strip — chip grid + answered ring (both Math and R&W). */}
      {!isMobile && !onReviewPage && (
        <div className="test-session-nav-strip">
          <QuestionGrid
            questions={questions}
            currentIndex={currentQuestion}
            answers={moduleAnswersForGrid}
            markedForReview={markedForReview}
            onNavigate={handleNavigate}
          />
          <div className="nav-strip-ring">
            <div className="nav-ring-wrap">
              <svg width="42" height="42" viewBox="0 0 42 42">
                <circle className="nav-ring-track" cx="21" cy="21" r="17" fill="none" strokeWidth="5" />
                <circle
                  className="nav-ring-fill"
                  cx="21" cy="21" r="17" fill="none" strokeWidth="5" strokeLinecap="round"
                  strokeDasharray={RING_C}
                  strokeDashoffset={ringOffset}
                  transform="rotate(-90 21 21)"
                />
              </svg>
              <div className="nav-ring-num">{answeredInModule}</div>
            </div>
            <div className="nav-ring-label">
              <div className="ring-count">{answeredInModule} of {questions.length}</div>
              <div className="ring-sub">answered</div>
            </div>
          </div>
        </div>
      )}

      <div className="test-session-body">
        {/* Floating tools live OUTSIDE the workspace so entering the review
            page doesn't unmount them — unmounting the calculator destroys the
            student's Desmos work. Both render position:fixed. */}
        <DesmosCalculator isOpen={showCalculator} onClose={() => setShowCalculator(false)} />
        <SATReferenceSheet isOpen={showReference} onClose={() => setShowReference(false)} />

        {onReviewPage ? (
          /* Bluebook "Check Your Work" page — the only route out of a module
             besides the clock. Timer stays mounted in the header above. */
          <div className="test-review-check" style={{ width: '100%', maxWidth: '760px', margin: '0 auto', padding: '40px 20px', overflowY: 'auto' }}>
            <h2 style={{ fontFamily: 'var(--pt-font-serif)', fontSize: '26px', margin: 0, textAlign: 'center', color: 'var(--pt-text)' }}>
              Check Your Work
            </h2>
            <p style={{ textAlign: 'center', color: 'var(--pt-text-soft, #6b7280)', margin: '10px auto 24px', maxWidth: '540px', fontSize: '14px', lineHeight: 1.6 }}>
              On test day, you can review and edit this module until time runs
              out. In practice you can continue when you're ready — unused time
              doesn't carry over.
            </p>
            <QuestionGrid
              questions={questions}
              currentIndex={-1}
              answers={moduleAnswersForGrid}
              markedForReview={markedForReview}
              onNavigate={(idx) => { setOnReviewPage(false); handleNavigate(idx); }}
            />
            <div className="nav-legend" style={{ marginTop: '16px', justifyContent: 'center' }}>
              <div className="nav-legend-item"><div className="nav-legend-icon answered"></div><span>Answered</span></div>
              <div className="nav-legend-item"><div className="nav-legend-icon flagged"></div><span>For Review</span></div>
              <div className="nav-legend-item"><div className="nav-legend-icon"></div><span>Unanswered</span></div>
            </div>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', marginTop: '28px' }}>
              <button className="bottom-nav-btn" onClick={() => setOnReviewPage(false)} type="button">
                Back
              </button>
              <button className="bottom-nav-btn is-primary" onClick={handleSubmitModule} type="button">
                Next
              </button>
            </div>
          </div>
        ) : (
        <div className="test-workspace-main">

          {/* Left Pane - Question Stem */}
          <div className="test-workspace-left" ref={leftPaneRef}>

            {isReadingWriting ? (
            <>
              {/* R&W passage toolbar — Bluebook-style annotate tools (pinned) */}
              {(question?.passage || question?.passages || question?.studentNotes) && (
                <div className="rw-passage-toolbar">
                  <span className="rw-toolbar-hint">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--pt-hl-edge)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 11l-4 4v3h3l4-4"/><path d="M13 7l4 4"/><path d="M3 21h7"/><path d="M14.5 5.5l4 4L21 7l-4-4z"/></svg>
                    Select text to highlight it · click a highlight to remove
                  </span>
                  <div className="rw-toolbar-actions">
                    <button
                      type="button"
                      className="rw-toolbar-btn"
                      onClick={() => setHighlightsHidden((v) => !v)}
                      aria-pressed={highlightsHidden}
                      title={highlightsHidden ? 'Show highlights' : 'Hide highlights'}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        {highlightsHidden ? (
                          <>
                            <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                            <line x1="1" y1="1" x2="23" y2="23" />
                          </>
                        ) : (
                          <>
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                            <circle cx="12" cy="12" r="3" />
                          </>
                        )}
                      </svg>
                      {highlightsHidden ? 'Show Highlights' : 'Hide Highlights'}
                    </button>
                    <button
                      type="button"
                      className="rw-toolbar-btn"
                      onClick={handleClearHighlights}
                      title="Clear all highlights on this question"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="3 6 5 6 21 6" />
                        <path d="M19 6l-2 14a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2L5 6" />
                      </svg>
                      Clear All
                    </button>
                  </div>
                </div>
              )}

              {/* Passage scroll area (independent of the question pane) */}
              <div className="rw-passage-scroll">
                {question?.passage && (
                  <HighlightablePassage
                    text={question.passage}
                    highlights={highlightsByKey[buildHighlightKey('main')] || []}
                    hidden={highlightsHidden}
                    onAddHighlight={(r) => handleAddHighlight('main', r)}
                    onRemoveHighlight={(r) => handleRemoveHighlight('main', r)}
                  />
                )}
                {question?.passages && Array.isArray(question.passages) && (
                  <div className="rw-passage-stack">
                    {question.passages.map((p, i) => (
                      <div key={i}>
                        <div className="rw-passage-label">{p.label || `Text ${i + 1}`}</div>
                        <HighlightablePassage
                          text={p.text}
                          highlights={highlightsByKey[buildHighlightKey(`p${i}`)] || []}
                          hidden={highlightsHidden}
                          onAddHighlight={(r) => handleAddHighlight(`p${i}`, r)}
                          onRemoveHighlight={(r) => handleRemoveHighlight(`p${i}`, r)}
                        />
                      </div>
                    ))}
                  </div>
                )}
                {question?.studentNotes && (
                  <div className="rw-passage">
                    {/* Bluebook: the notes are highlightable like any passage;
                        the GOAL line is NOT part of the notes — it leads the
                        question stem in the right pane. */}
                    {question.studentNotes.intro && (
                      <div style={{ marginBottom: '0.5rem' }}>
                        <HighlightablePassage
                          text={question.studentNotes.intro}
                          className="rw-note-segment"
                          highlights={highlightsByKey[buildHighlightKey('notesIntro')] || []}
                          hidden={highlightsHidden}
                          onAddHighlight={(r) => handleAddHighlight('notesIntro', r)}
                          onRemoveHighlight={(r) => handleRemoveHighlight('notesIntro', r)}
                        />
                      </div>
                    )}
                    <ul style={{ paddingLeft: '1.25rem', margin: '0.5rem 0' }}>
                      {question.studentNotes.bullets.map((b, i) => (
                        <li key={i} style={{ marginBottom: '0.25rem' }}>
                          <HighlightablePassage
                            text={b}
                            className="rw-note-segment"
                            highlights={highlightsByKey[buildHighlightKey(`note${i}`)] || []}
                            hidden={highlightsHidden}
                            onAddHighlight={(r) => handleAddHighlight(`note${i}`, r)}
                            onRemoveHighlight={(r) => handleRemoveHighlight(`note${i}`, r)}
                          />
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {question?.diagram && (
                  <div style={{ margin: '20px 0', display: 'flex', justifyContent: 'center' }}>
                    <QuestionDiagram type={question.diagram.type} params={question.diagram.params} />
                  </div>
                )}
                {question?.questionTable && (
                  <div style={{ margin: '20px 0', display: 'flex', justifyContent: 'center' }}>
                    <table style={{ borderCollapse: 'collapse', fontFamily: 'var(--pt-font-serif)', fontSize: '16px' }}>
                      <thead>
                        <tr>
                          {question.questionTable.headers.map((header, i) => (
                            <th key={i} style={{ border: '1px solid var(--pt-line-strong)', padding: '8px 16px', background: 'var(--pt-surface-2)', fontWeight: '600' }}>
                              <MathText text={header} />
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {question.questionTable.rows.map((row, i) => (
                          <tr key={i}>
                            {row.map((cell, j) => (
                              <td key={j} style={{ border: '1px solid var(--pt-line-strong)', padding: '8px 16px', textAlign: 'center' }}>
                                <MathText text={cell} />
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </>
            ) : (
            <div className="question-panel">
        {/* Math question number badge */}
        <div className="test-qnum-row">
          <span className="test-qnum-badge">{currentQuestion + 1}</span>
        </div>

        {/* Formula if present */}
        {question?.questionFormula && renderFormula(question.questionFormula)}

        {/* Diagram if present */}
        {question?.diagram && (
          <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
            <QuestionDiagram type={question.diagram.type} params={question.diagram.params} />
          </div>
        )}

        {/* Question Table if present */}
        {question?.questionTable && (
          <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
            <table style={{
              borderCollapse: 'collapse',
              fontFamily: 'var(--pt-font-serif)',
              fontSize: SAT_TYPOGRAPHY.sizes.choiceText
            }}>
              <thead>
                <tr>
                  {question.questionTable.headers.map((header, i) => (
                    <th key={i} style={{
                      border: '1.5px solid #111',
                      padding: '7px 16px',
                      background: '#fff',
                      fontWeight: 'bold',
                      fontFamily: 'system-ui, -apple-system, sans-serif',
                      fontSize: '14px',
                    }}>
                      <MathText text={header} />
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {question.questionTable.rows.map((row, i) => (
                  <tr key={i}>
                    {row.map((cell, j) => (
                      <td key={j} style={{
                        border: '1px solid #111',
                        padding: '6px 16px',
                        background: '#fff',
                        textAlign: 'center'
                      }}>
                        <MathText text={cell} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Question text - SAT Style. For R&W, this renders in the right pane instead. */}
        {(() => {
          const questionText = question?.question;
          // Check if question has standalone equation blocks separated by \n\n
          // A standalone equation block is a paragraph where every line is purely math ($...$)
          if (typeof questionText === 'string' && questionText.includes('\n\n')) {
            const parts = questionText.split(/\n\n/);
            const isStandaloneEquation = (part) => {
              const trimmed = part.trim();
              const lines = trimmed.split('\n');
              return lines.length > 0 && lines.every(line => {
                const t = line.trim();
                return t.startsWith('$') && t.endsWith('$') && t.length > 2;
              });
            };
            const hasEquationBlocks = parts.some(p => isStandaloneEquation(p));

            if (hasEquationBlocks) {
              return (
                <>
                  {parts.map((part, idx) => {
                    if (isStandaloneEquation(part)) {
                      return (
                        <div key={idx} style={{
                          fontFamily: SAT_TYPOGRAPHY.questionFont,
                          fontSize: SAT_TYPOGRAPHY.sizes.questionText,
                          lineHeight: '2',
                          color: SAT_COLORS.text.primary,
                          textAlign: 'center',
                          marginBottom: '16px'
                        }}>
                          <MathText text={part} />
                        </div>
                      );
                    }
                    return (
                      <p key={idx} style={{
                        fontFamily: SAT_TYPOGRAPHY.questionFont,
                        fontSize: SAT_TYPOGRAPHY.sizes.questionText,
                        lineHeight: SAT_TYPOGRAPHY.lineHeights.question,
                        color: SAT_COLORS.text.primary,
                        marginBottom: '8px'
                      }}>
                        <MathText text={part} />
                      </p>
                    );
                  })}
                </>
              );
            }
          }

          // Default rendering for non-equation questions
          return (
            <p style={{
              fontFamily: SAT_TYPOGRAPHY.questionFont,
              fontSize: SAT_TYPOGRAPHY.sizes.questionText,
              lineHeight: SAT_TYPOGRAPHY.lineHeights.question,
              color: SAT_COLORS.text.primary,
              marginBottom: '8px'
            }}>
              {Array.isArray(questionText) || (questionText && typeof questionText === 'object')
                ? <QuestionRenderer content={questionText} />
                : <MathText text={questionText} />
              }
            </p>
          );
        })()}

        {/* Continued question text if present */}
        {question?.questionContinued && (
          <p style={{
            fontFamily: SAT_TYPOGRAPHY.questionFont,
            fontSize: SAT_TYPOGRAPHY.sizes.questionText,
            lineHeight: SAT_TYPOGRAPHY.lineHeights.question,
            color: SAT_COLORS.text.primary,
            marginBottom: '24px'
          }}>
            {Array.isArray(question.questionContinued) || (typeof question.questionContinued === 'object')
              ? <QuestionRenderer content={question.questionContinued} />
              : <MathText text={question.questionContinued} />
            }
          </p>
        )}
            </div>
            )}
          </div> {/* End test-workspace-left */}

      <div className="test-workspace-right" ref={rightPaneRef}>
        {isReadingWriting ? (
          <>
            {/* Pinned question header — number + Mark */}
            <div className="rw-question-head">
              <div className="rw-question-head-left">
                <span className="rw-stem-number">{currentQuestion + 1}</span>
              </div>
              <button
                onClick={handleToggleMark}
                className={`rw-mark-toggle ${isMarked ? 'is-marked' : ''}`}
                aria-pressed={isMarked}
                type="button"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill={isMarked ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                </svg>
                {isMarked ? 'Marked for Review' : 'Mark for Review'}
              </button>
            </div>

            {/* Question scroll area — stem + choices */}
            <div className="rw-question-scroll">
              <div className="rw-stem-block">
                <p className="rw-stem-text">
                  {(() => {
                    // Bluebook: a notes question's GOAL sentence ("The student
                    // wants to…") belongs to the QUESTION pane, leading the
                    // stem as one paragraph — not to the notes in the left pane.
                    const goal = question?.studentNotes?.goal || null;
                    const stem = question?.question;
                    const stemIsRich = Array.isArray(stem) || (stem && typeof stem === 'object');
                    if (stemIsRich) {
                      return (
                        <>
                          {goal && <><MathText text={goal} />{' '}</>}
                          <QuestionRenderer content={stem} />
                        </>
                      );
                    }
                    return <MathText text={goal ? `${goal} ${stem || ''}`.trim() : stem} />;
                  })()}
                </p>
                {question?.questionContinued && (
                  <p className="rw-stem-text">
                    {Array.isArray(question.questionContinued) || (typeof question.questionContinued === 'object')
                      ? <QuestionRenderer content={question.questionContinued} />
                      : <MathText text={question.questionContinued} />
                    }
                  </p>
                )}
              </div>
              {answerBlock}
            </div>
          </>
        ) : (
          <>
            {/* Math top controls */}
            <div className="test-controls-top">
              <button onClick={handlePrev} disabled={currentQuestion === 0} className="bottom-nav-btn" type="button">
                Previous
              </button>
              {/* Bluebook: the last question's Next goes to Check Your Work,
                  never straight out of the module. */}
              <button
                className="bottom-nav-btn is-primary"
                onClick={currentQuestion === questions.length - 1 ? handleGoToReview : handleNext}
                type="button"
              >
                Next Question
              </button>
            </div>

            <div className="question-panel">
              {answerBlock}
              <div className="test-controls-bottom" style={{ justifyContent: 'center', borderTop: 'none', marginTop: '1.5rem' }}>
                <button onClick={handleToggleMark} className={`rw-mark-toggle ${isMarked ? 'is-marked' : ''}`} type="button">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill={isMarked ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                  </svg>
                  {isMarked ? 'Marked for Review' : 'Mark for Review'}
                </button>
              </div>
            </div>
          </>
        )}
      </div> {/* End test-workspace-right */}

      {/* R&W mobile navigation — the fixed Bluebook bottom bar below is
          desktop-only, so without this row a phone-width R&W module had no
          Back/Next/Submit at all: a student could answer all 27 questions
          and never be able to advance to the next module. */}
      {isReadingWriting && isMobile && (
        <div className="test-controls-top" style={{ marginTop: '1.5rem' }}>
          <button onClick={handlePrev} disabled={currentQuestion === 0} className="bottom-nav-btn" type="button">
            Back
          </button>
          <button
            className="bottom-nav-btn is-primary"
            onClick={currentQuestion === questions.length - 1 ? handleGoToReview : handleNext}
            type="button"
          >
            Next
          </button>
        </div>
      )}

      {/* Mobile Nav Grid & Legend */}
      {isMobile && (
        <div style={{ marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--color-slate-200)' }}>
          <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '1rem', color: 'var(--color-slate-900)' }}>Question Navigation</h3>
          <QuestionGrid
            questions={questions}
            currentIndex={currentQuestion}
            answers={moduleAnswersForGrid}
            markedForReview={markedForReview}
            onNavigate={handleNavigate}
          />
          <div className="nav-legend" style={{ marginTop: '1rem' }}>
            <div className="nav-legend-item">
              <div className="nav-legend-icon answered"></div>
              <span>Answered</span>
            </div>
            <div className="nav-legend-item">
              <div className="nav-legend-icon flagged"></div>
              <span>Flagged for Later</span>
            </div>
            <div className="nav-legend-item">
              <div className="nav-legend-icon"></div>
              <span>Unanswered</span>
            </div>
          </div>
        </div>
      )}
      
      </div>
      )} {/* End test-workspace-main / review-page swap */}


      </div> {/* End test-session-body */}

      {/* Bluebook-style bottom nav bar — R&W only */}
      {isReadingWriting && !isMobile && !onReviewPage && (
        <div className="test-session-bottom-bar">
          {/* firstName, not displayName — the user doc never carries displayName,
              so this bar always fell back to "Student". */}
          <div className="bottom-bar-left">{user?.firstName || 'Student'}</div>
          <div className="bottom-bar-center">
            {showQuestionGridPopover && (
              <div className="question-grid-popover">
                <div className="question-grid-popover-title">Question Navigator — {module.title}</div>
                <QuestionGrid
                  questions={questions}
                  currentIndex={currentQuestion}
                  answers={moduleAnswersForGrid}
                  markedForReview={markedForReview}
                  onNavigate={(idx) => {
                    handleNavigate(idx);
                    setShowQuestionGridPopover(false);
                  }}
                />
                <div className="nav-legend" style={{ marginTop: '0.75rem', paddingTop: '0.75rem', borderTop: '1px solid var(--color-slate-200)' }}>
                  <div className="nav-legend-item"><div className="nav-legend-icon answered"></div><span>Answered</span></div>
                  <div className="nav-legend-item"><div className="nav-legend-icon flagged"></div><span>For Review</span></div>
                  <div className="nav-legend-item"><div className="nav-legend-icon"></div><span>Unanswered</span></div>
                </div>
                {/* Bluebook: the navigator links to the Check Your Work page */}
                <button
                  className="bottom-nav-btn"
                  style={{ width: '100%', marginTop: '0.75rem' }}
                  onClick={() => { setShowQuestionGridPopover(false); handleGoToReview(); }}
                  type="button"
                >
                  Go to Review Page
                </button>
              </div>
            )}
            <button
              className="question-grid-toggle"
              onClick={() => setShowQuestionGridPopover((v) => !v)}
              aria-expanded={showQuestionGridPopover}
            >
              Question {currentQuestion + 1} of {questions.length}
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ transform: showQuestionGridPopover ? 'rotate(0deg)' : 'rotate(180deg)', transition: 'transform 0.15s ease' }}>
                <polyline points="18 15 12 9 6 15" />
              </svg>
            </button>
          </div>
          <div className="bottom-bar-right">
            <button
              className="bottom-nav-btn"
              onClick={handlePrev}
              disabled={currentQuestion === 0}
            >
              Back
            </button>
            <button
              className="bottom-nav-btn is-primary"
              onClick={currentQuestion === questions.length - 1 ? handleGoToReview : handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}

      {/* Pause Overlay */}
      <Modal
        isOpen={isPaused && !confirmAction}
        onClose={handlePauseToggle}
        title="Test Paused"
        hideCloseButton
        footer={
          <div style={{ display: 'flex', width: '100%', gap: '0.75rem' }}>
            <Button onClick={handleRequestEndTest} variant="destructive" style={{ flex: 1 }}>End Test</Button>
            <Button onClick={handleRequestLeave} variant="secondary" style={{ flex: 1 }}>Save & Leave</Button>
            <Button onClick={handlePauseToggle} variant="primary" style={{ flex: 2 }}>Resume Test</Button>
          </div>
        }
      >
        <div style={{
          width: '64px', height: '64px', borderRadius: '50%',
          background: 'var(--color-slate-100)', display: 'flex',
          alignItems: 'center', justifyContent: 'center',
          margin: '0 auto 1.5rem', fontSize: '28px',
          border: '1px solid var(--color-slate-200)'
        }}>⏸</div>
        <p className="modal-text" style={{ textAlign: 'center' }}>
          {isTimed ? 'Timer is frozen. ' : ''}Your progress has been saved.
        </p>
      </Modal>

      {/* Section directions — auto-opens at the start of each section and
          reopenable from the header, like Bluebook. The clock keeps running
          while it's open (also like Bluebook). */}
      <Modal
        isOpen={directionsOpen}
        onClose={() => setDirectionsOpen(false)}
        title={isReadingWriting ? 'Reading and Writing — Directions' : 'Math — Directions'}
        footer={
          <Button onClick={() => setDirectionsOpen(false)} variant="primary" style={{ width: '100%' }}>
            Begin
          </Button>
        }
      >
        {isReadingWriting ? (
          <div className="modal-text" style={{ fontSize: '14px', lineHeight: 1.65, textAlign: 'left' }}>
            <p style={{ marginTop: 0 }}>
              Each question in this section is based on the passage (or pair of
              passages) shown beside it, which may include a table or graph.
              Read carefully, then choose the best answer supported by the
              passage.
            </p>
            <p style={{ marginBottom: 0 }}>
              Every question is multiple-choice with four answer choices and
              exactly one best answer. You can move freely among the questions
              in this module until its time runs out.
            </p>
          </div>
        ) : (
          <div className="modal-text" style={{ fontSize: '14px', lineHeight: 1.65, textAlign: 'left' }}>
            <p style={{ marginTop: 0 }}>
              A calculator is allowed on every question — the built-in graphing
              calculator and the reference sheet stay available from the
              toolbar. Unless a question says otherwise, variables represent
              real numbers and figures are drawn to scale.
            </p>
            <p style={{ marginBottom: 0 }}>
              <strong>Student-produced responses:</strong> type up to 5
              characters (6 if the answer is negative). Enter fractions like
              7/2 or decimals like 3.5 — no mixed numbers, symbols, or units.
            </p>
          </div>
        )}
      </Modal>

      {/* Module 2 variant switch confirmation — surfaces only when the user
          has already answered something in M2 and clicks the other variant
          tile above the Q grid. Confirming discards those answers and resets
          M2 to question 1 (because the same key on the other variant points
          at a different question). */}
      <Modal
        isOpen={!!pendingM2Switch}
        onClose={handleCancelM2Switch}
        title={pendingM2Switch
          ? `Switch to Module 2 (${pendingM2Switch.newVariant === 'hard' ? 'Hard' : 'Easy'})?`
          : ''}
        footer={
          <div style={{ display: 'flex', width: '100%', gap: '0.75rem' }}>
            <Button onClick={handleCancelM2Switch} variant="secondary" style={{ flex: 1 }}>
              Keep current
            </Button>
            <Button onClick={handleConfirmM2Switch} variant="destructive" style={{ flex: 1 }}>
              Switch and restart
            </Button>
          </div>
        }
      >
        <div style={{
          width: '48px', height: '48px', borderRadius: '50%',
          background: 'var(--color-warning-100)', color: 'var(--color-warning-600)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          margin: '0 auto 1.25rem',
        }}><WarningIcon size={24} /></div>
        <p className="modal-text" style={{ textAlign: 'center' }}>
          {pendingM2Switch && (
            <>
              Switching restarts Module 2 from question 1. Your{' '}
              {pendingM2Switch.answerCount}{' '}
              current {pendingM2Switch.answerCount === 1 ? 'answer' : 'answers'} on
              {' '}Module 2 will be cleared.
            </>
          )}
        </p>
      </Modal>

      {/* Confirmation Modal */}
      <Modal
        isOpen={!!confirmAction}
        onClose={handleCancelAction}
        title={confirmAction === 'endTest' ? "End Test Early?" : "Save & Leave?"}
        footer={
          <div style={{ display: 'flex', width: '100%', gap: '0.75rem' }}>
            <Button onClick={handleCancelAction} variant="secondary" style={{ flex: 1 }}>Continue Test</Button>
            <Button 
              onClick={confirmAction === 'endTest' ? handleConfirmEndTest : handleConfirmLeave} 
              variant={confirmAction === 'endTest' ? "destructive" : "primary"}
              style={{ flex: 1 }}
            >
              {confirmAction === 'endTest' ? "End Test" : "Save & Leave"}
            </Button>
          </div>
        }
      >
        {confirmAction === 'endTest' ? (
          <div style={{
            width: '48px', height: '48px', borderRadius: '50%',
            background: 'var(--color-error-100)', color: 'var(--color-error-600)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            margin: '0 auto 1.25rem',
          }}><WarningIcon size={24} /></div>
        ) : (
          <div style={{
            width: '48px', height: '48px', borderRadius: '50%',
            background: 'var(--color-info-100)', color: 'var(--color-info-600)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            margin: '0 auto 1.25rem',
          }}><DocumentIcon size={24} /></div>
        )}
        <p className="modal-text" style={{ textAlign: 'center' }}>
          {test?.isDiagnostic
            ? (confirmAction === 'endTest'
              ? 'Your diagnosis and study plan are built from what you answer — ending early with under half answered saves your progress instead of building a thin plan.'
              : 'Your progress is saved. Pick the diagnostic back up from Home whenever you are ready.')
            : (confirmAction === 'endTest'
              ? "Unanswered questions will be marked wrong. Your score will be calculated from what you've completed so far."
              : 'Your progress will be saved. You can resume this test later from the test list.')
          }
        </p>
      </Modal>
    </div>
  );
};

export default PracticeTest;
