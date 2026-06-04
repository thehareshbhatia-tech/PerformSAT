import React, { useState, useEffect, useRef, useCallback } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './hooks/useAuth';
import { useProgress } from './hooks/useProgress';
import { useAnalytics } from './hooks/useAnalytics';
import {
  dispatchSessionComplete,
  buildFullTestSession,
  buildDrillSession,
  buildReviewSession,
} from './services/sessionComplete';
import LandingPage from './components/LandingPage';
import StudentDashboard from './components/StudentDashboard';
import PushOptInCard from './components/PushOptInCard';
import AiTutorChat, { AiTutorButton } from './components/AiTutorChat';
import QuestionDiagram from './components/QuestionDiagrams';
import PracticeTest from './components/PracticeTest';
import PracticeTestList from './components/PracticeTestList';
import TestResults from './components/TestResults';
import { runDiagnostic } from './services/diagnosticEngine';
import SolutionExplanation from './components/SolutionExplanation';
import { getQuestionsForSection, hasQuestionsForSection, getRandomQuestions } from './data/questions';
import { getDifficultyBadge, calculateWeightedScore } from './services/adaptiveService';
import { addToReviewQueue, getDueReviewCount } from './services/reviewService';
import { calculateOptimalDifficulty } from './services/recommendationService';
import AppShell from './components/ui/AppShell';
import ErrorBoundary from './components/ui/ErrorBoundary';
import Onboarding from './components/Onboarding';
import Profile from './components/Profile';
import StudyPlanDashboard from './components/StudyPlanDashboard';
import AdaptivePracticeShell from './components/AdaptivePracticeShell';
import AssignedPracticeShell from './components/AssignedPracticeShell';
import PacingDrill from './components/PacingDrill';
import PracticeBank from './components/PracticeBank';
import DiagnosticReport from './components/DiagnosticReport';
import LearnWorkspace from './components/learn/LearnWorkspace';
import LessonBrowser from './components/LessonBrowser';
import { allLessons } from './data/lessons';
import PastTestReviewIndex from './components/PastTestReview/PastTestReviewIndex';
import TestReviewDetail from './components/PastTestReview/TestReviewDetail';
import ReviewItemCard from './components/PastTestReview/ReviewItemCard';
import { Toaster, showToast } from './components/ui/Toaster';
import { pickSimilarQuestion } from './services/trySimilarService';
import { buildRounds, classifyRoundBoundary } from './services/buildRounds';
import {
  loadDiagnosticReportData,
  pickMostRecentTest,
} from './services/diagnosticReportLoader';
import {
  getLatestAttempt,
  itemKey,
  findErrorClassForItem,
  extractItemsFromAttempt,
} from './services/selectors/completedTests';
import { getAllPracticeTests, getPracticeTestById } from './data/practiceTests';
import {
  resolveAssignedQuestions,
  resolveQuestionById,
  normalizeDomain,
  buildDomainAdaptiveQueueSeed,
  RW_DOMAIN_ORDER,
  createAdaptiveSessionState,
  getNextAdaptiveQuestion,
  applyAdaptiveResult,
  evaluateAdaptiveCompletion,
  serializeAdaptiveState,
  deserializeAdaptiveState,
} from './services/practiceAssignmentService';
import {
  resolveReviewItemToQuestion,
  reviewDisplaySection,
  BANK_REVIEW_MODULE,
} from './services/reviewQueueResolve';
import { selectPacingQuestions } from './services/pacingService';
import { trackPacingDrillDone, trackReengagementOpened } from './services/analyticsService';
import { buildDailySession } from './services/dailyReviewEngine';
import { getQuestionsByDomain } from './data/questions/bank';
import { patchAdaptivePracticeState } from './services/hybridStudyPlanService';
import { getReadyAiDiagnostic, loadAttemptSnapshot } from './services/practiceTestService';
import { reprioritizePlan } from './services/adaptivePlanService';
import { buildLongitudinalEvidence } from './services/studyPlanMerger';
import { generateStudyPlan as generateAIPlan } from './services/studyPlanService';
import { logInfo, logWarn } from './utils/log';

// ── Past-Test-Review telemetry (Phase 7 of PAST_TEST_REVIEW_PLAN.md) ──
// Events are scoped under [performsat:pastTestReview] so they're filterable
// in DevTools and pre-shaped for a future analytics integration. Suppressed
// in prod unless localStorage['performsat:logVerbose']='1'.
//
// Success thresholds (committed in plan doc, CEO R2-F3):
//   - Adoption:  ≥30% of students-with-tests open the surface within 2 weeks
//   - Engagement: median session reviews ≥5 items
//   - Retry conv: ≥40% of TestReviewDetail visitors click Retry
//   - Sunset gate: <15% adoption by week 4 → re-evaluate
const PTR_LOG_SCOPE = 'pastTestReview';
const logPtrEvent = (event, data = {}) => {
  logInfo(PTR_LOG_SCOPE, event, data);
};

// Premium Design System - Clean, Modern, Professional
const design = {
  // Colors - Refined white/orange palette
  colors: {
    text: {
      primary: '#0a0a0a',      // Near black for maximum contrast
      secondary: '#525252',    // Neutral gray
      tertiary: '#737373',     // Light gray for labels
      muted: '#a3a3a3',        // Very light for subtle text
    },
    accent: {
      orange: '#ea580c',       // Primary accent
      orangeHover: '#c2410c',  // Darker orange for hover
      orangeLight: '#fff7ed',  // Light orange background
      orangeMuted: '#ffedd5',  // Muted orange for subtle backgrounds
    },
    surface: {
      white: '#ffffff',
      offWhite: '#fafafa',     // Subtle off-white
      gray: '#f5f5f5',         // Light gray backgrounds
      grayDark: '#e5e5e5',     // Borders
      dark: '#171717',         // Dark backgrounds for contrast cards
    },
    semantic: {
      success: '#16a34a',
      successLight: '#f0fdf4',
      error: '#dc2626',
      errorLight: '#fef2f2',
      info: '#2563eb',
      infoLight: '#eff6ff',
    }
  },
  // Typography - Premium scale with better hierarchy
  typography: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Arial, sans-serif',
    fontFamilyMath: 'Georgia, "Times New Roman", serif',
    sizes: {
      xs: '11px',
      sm: '13px',
      base: '15px',
      md: '17px',
      lg: '19px',
      xl: '22px',
      '2xl': '28px',
      '3xl': '36px',
      '4xl': '48px',
    },
    weights: {
      regular: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },
    lineHeights: {
      tight: '1.2',
      normal: '1.5',
      relaxed: '1.7',
    },
    letterSpacing: {
      tight: '-0.025em',
      normal: '0',
      wide: '0.025em',
      wider: '0.1em',
    }
  },
  // Spacing - Generous, breathable
  spacing: {
    xs: '8px',
    sm: '12px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    '2xl': '48px',
    '3xl': '64px',
    '4xl': '80px',
  },
  // Border radius - Softer, modern
  radius: {
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '24px',
    '2xl': '32px',
    full: '9999px',
  },
  // Shadows - Refined, subtle
  shadows: {
    none: 'none',
    sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
    md: '0 4px 12px rgba(0, 0, 0, 0.08)',
    lg: '0 8px 24px rgba(0, 0, 0, 0.12)',
    xl: '0 16px 48px rgba(0, 0, 0, 0.16)',
    inner: 'inset 0 2px 4px rgba(0, 0, 0, 0.05)',
  },
  // Transitions
  transitions: {
    fast: '0.15s ease',
    normal: '0.2s ease',
    slow: '0.3s ease',
  }
};

const PerformSAT = () => {
  const [activeModule, setActiveModule] = useState(null);
  const [activeLesson, setActiveLesson] = useState(null);
  const [activeSection, setActiveSection] = useState(null); // For section-based practice
  const [view, setView] = useState('dashboard'); // 'dashboard' | 'practice' | 'practiceTests' | 'takingTest' | 'profile' | 'studyPlan' | 'tutor' | 'viewingResults' | 'diagnosticReport' | 'reviewingPastResults' | 'pastTestReviewIndex' | 'pastTestReviewDetail' | 'pastTestReviewItem' | 'pacingDrill'
  const [showOnboarding, setShowOnboarding] = useState(false);
  // Active pacing drill: { config, questions }. Set by onStartPacing, rendered at view==='pacingDrill'.
  const [pacingSession, setPacingSession] = useState(null);
  const [selectedPracticeTest, setSelectedPracticeTest] = useState(null);
  const [isTestTimed, setIsTestTimed] = useState(true);
  // 'reading-writing' | 'math' | null. When set, PracticeTest jumps to that
  // section's first module on fresh start (instead of always starting at M1).
  const [initialTestSection, setInitialTestSection] = useState(null);
  const [viewingResultsData, setViewingResultsData] = useState(null); // { test, answers, diagnosticData, diagnosticReport }
  const [showAiTutor, setShowAiTutor] = useState(false);

  // Practice state.
  //
  // Shape contract — every full-replacement `setPracticeState({...})` call
  // must explicitly include or omit these optional fields:
  //   • reviewMode (boolean) — past-test-review retry-drill session. When
  //     true, AssignedPracticeShell renders the "Review session" banner
  //     and back-button label flips to "Back to Review". MUST be omitted
  //     (or set false) when starting any non-review session, otherwise a
  //     stale review banner persists into the next drill.
  //   • assignmentMeta (object) — drill metadata (label, weakness, source).
  //     Includes sourceTestId/sourceTestTitle/sourceWrongCount when the
  //     session is a Past-Test-Review retry.
  //   • adaptiveQueueSeed / adaptiveSessionState / adaptiveDomainLabel —
  //     adaptive-mode payload.
  //   • rounds / currentRoundIndex / showRoundComplete — round metadata.
  //
  // The spread setters (`setPracticeState(prev => ({...prev, ...}))`) DO
  // preserve these keys intentionally — that's how round completion +
  // navigation keep review-mode active across question advances.
  const [practiceState, setPracticeState] = useState({
    currentQuestionIndex: 0,
    selectedAnswer: null,
    showFeedback: false,
    showHint: false,
    answers: {},
    isComplete: false,
    shuffledQuestions: [], // Store randomized questions
    practiceMode: 'standard' // 'standard' | 'adaptive'
  });

  // Past-Test-Review state (Phase 6 of PAST_TEST_REVIEW_PLAN.md).
  // The "review bundle" is the result of loadDiagnosticReportData for the
  // selected test — async-fetched once when a test is selected and reused
  // by both TestReviewDetail and ReviewItemCard so the snapshot fetch
  // happens only once per session.
  const [selectedReviewTestId, setSelectedReviewTestId] = useState(null);
  const [selectedReviewItem, setSelectedReviewItem] = useState(null);
  const [reviewBundle, setReviewBundle] = useState(null);
  const [reviewBundleLoading, setReviewBundleLoading] = useState(false);
  const [reviewBundleError, setReviewBundleError] = useState(null);
  // Tracks where the user opened past-test-review FROM, so the back path
  // can return them to the same surface (Dashboard tab vs immersive Study
  // Plan view). Without this, entering from the Dashboard tab and clicking
  // back drops them on the standalone Study Plan view, losing tab context.
  const [pastTestReviewEntryView, setPastTestReviewEntryView] = useState('studyPlan');
  // Monotonic request ID for handleSelectReviewTest — guards against
  // the user clicking a second test card before the first fetch resolves.
  // Without this, fetchB-resolves-first followed by fetchA-resolves-second
  // would clobber B's bundle with A's data and the UI would show A while
  // the user expected B.
  const reviewBundleRequestRef = useRef(0);

  // Calculator state for practice
  const [showCalculator, setShowCalculator] = useState(false);



  // ESC key handler for calculator
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape' && showCalculator) {
        setShowCalculator(false);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [showCalculator]);

  const { user, loading, logout, updateTestDate, updateTargetScore, updateCurrentScore, updateTargetSchools } = useAuth();
  const { completedLessons, practiceProgress, reviewQueue, reviewStreak, skillProgress, answeredQuestionIds, practiceTestResults, inProgressTests, studyPlan, studyPlanMeta, studyPlanArtifact, predictionLog, interventionLog, studentFingerprint, recordPracticeAttempt, recordDrillSkillAttempts, hasPracticed, getBestScore, getDueCount, getReviewStatistics, getSkillDiagnosticSummary, getSkillBreakdown, recordPracticeTestAttempt, getTestBestScore, getTestAttempts, saveTestProgress, clearTestProgress, getTestProgress, hasTestProgress, saveStudyPlan, markStudyActivityComplete, unmarkStudyActivityComplete, markLessonComplete, isLessonCompleted, getModuleProgress } = useProgress(user?.uid);

  // Mount the analytics session lifecycle (session_start / session_end +
  // beforeunload flush). Previously orphaned — the hook existed but was never
  // mounted, so no engagement events ever fired. Completion events are fired
  // separately by the onSessionComplete seam (see dispatchSessionComplete).
  useAnalytics(user?.uid);

  // Start a daily-review session from a list of due review items. Extracted from
  // the dashboard's onStartReview so the re-engagement deep-link (?next=review)
  // can launch the exact same flow. Defined BEFORE the deep-link effects below
  // because they list it in their dependency array (a const referenced before
  // its declaration in the same scope is a temporal-dead-zone ReferenceError).
  const startDailyReview = useCallback((items) => {
    const reviewItems = items || [];
    const questions = [];
    const reviewKeyByQuestionId = {};
    reviewItems.forEach(item => {
      const q = resolveReviewItemToQuestion(item, { resolveQuestionById, getQuestionsForSection, getTestById: getPracticeTestById });
      if (q) {
        questions.push(q);
        if (item.key != null && q.id != null) {
          reviewKeyByQuestionId[q.id] = item.key;
        }
      }
    });
    if (questions.length > 0) {
      setPracticeState({
        currentQuestionIndex: 0,
        selectedAnswer: null,
        showFeedback: false,
        showHint: false,
        answers: {},
        isComplete: false,
        shuffledQuestions: questions.slice(0, 15),
        practiceMode: 'assigned',
        assignmentMeta: { label: 'Review Session', source: 'review-queue' },
        reviewKeyByQuestionId,
      });
      setActiveModule(null);
      setActiveSection('__assigned__');
      setShowCalculator(false);
      setView('practice');
    }
  }, []);

  // ── Re-engagement nudge deep-link (?next=review|tasks) ──────────────────
  // A push nudge's click action lands the student on /course?next=review. Read
  // the param once on mount, strip it (so a refresh/share doesn't re-fire), and
  // record the pending target + a short routing deadline. Navigation in this app
  // is view-state (not URL routes), so we route by setView below once data loads.
  const pendingNudgeRef = useRef(null);
  const nudgeDeadlineRef = useRef(0);
  const nudgeRoutedRef = useRef(false);
  const nudgeOpenLoggedRef = useRef(false);
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const next = params.get('next');
      if (next) {
        pendingNudgeRef.current = next;
        nudgeDeadlineRef.current = Date.now() + 10000; // only auto-route within 10s of arrival
        params.delete('next');
        const qs = params.toString();
        window.history.replaceState({}, '', window.location.pathname + (qs ? `?${qs}` : ''));
      }
    } catch { /* noop */ }
  }, []);

  // Attribution: fire reengagement.opened once the user is known. This is the
  // only place push open/click rate can be measured (the cron can't write
  // analytics). Independent of whether routing ultimately finds due items.
  useEffect(() => {
    if (user?.uid && pendingNudgeRef.current && !nudgeOpenLoggedRef.current) {
      nudgeOpenLoggedRef.current = true;
      trackReengagementOpened(user.uid, { next: pendingNudgeRef.current });
    }
  }, [user?.uid]);

  // Route the pending nudge once the data it needs has hydrated. next=review
  // launches the daily-review session as soon as due items exist; next=tasks
  // just lands on the dashboard. Bounded by a 10s deadline so a late reviewQueue
  // update can never yank a student who has since navigated elsewhere.
  useEffect(() => {
    const next = pendingNudgeRef.current;
    if (!next || nudgeRoutedRef.current || !user?.uid) return;
    if (Date.now() > nudgeDeadlineRef.current) { nudgeRoutedRef.current = true; return; }
    if (next === 'tasks') {
      nudgeRoutedRef.current = true;
      setView('dashboard');
    } else if (next === 'review') {
      const session = buildDailySession(reviewQueue);
      if (session.items.length > 0) {
        nudgeRoutedRef.current = true;
        startDailyReview(session.items);
      }
      // else: no due items yet — wait for reviewQueue to hydrate (effect re-runs).
    } else {
      nudgeRoutedRef.current = true; // unknown target — land on default dashboard.
    }
  }, [reviewQueue, user?.uid, startDailyReview]);

  // Adaptive study plan pipeline: fast path (deterministic) + slow path (AI)
  const handleSaveStudyPlan = async (deterministicPlan, diagnosticReport) => {
    if (!deterministicPlan || !user?.uid) return;

    const isFirstTest = Object.keys(practiceTestResults || {}).length <= 1;

    // Step 1: Re-prioritize (skip on test 1 — no prior plan to reprioritize)
    const planToSave = isFirstTest
      ? deterministicPlan
      : reprioritizePlan(
          deterministicPlan,
          skillProgress,
          practiceTestResults,
          reviewQueue,
          user?.testDate
        );

    // Step 2: Build longitudinal context from all prior tests
    const longitudinalContext = buildLongitudinalEvidence(practiceTestResults);

    // Step 3: Collect previous plan summaries (last 2)
    const previousPlans = [];
    if (studyPlan?.summary) {
      previousPlans.push({ summary: studyPlan.summary });
    }

    // Step 4: Save reprioritized deterministic plan immediately (fast path)
    await saveStudyPlan(planToSave);

    // Step 5: AI augmentation in background (slow path)
    if (diagnosticReport && (longitudinalContext.totalTests > 0 || !isFirstTest)) {
      try {
        const { plan: aiPlan } = await generateAIPlan(
          diagnosticReport,
          { targetScore: user?.targetScore || 700, testDate: user?.testDate },
          previousPlans,
          longitudinalContext
        );

        if (aiPlan?.summary?.diagnosis) {
          // Read-before-merge: use current studyPlan state to preserve any user changes
          const currentPlan = studyPlan || planToSave;
          const enhanced = {
            ...currentPlan,
            summary: {
              ...currentPlan.summary,
              diagnosis: aiPlan.summary.diagnosis,
              headline: aiPlan.summary.headline || currentPlan.summary?.headline,
            },
            nextAction: aiPlan.nextAction || currentPlan.nextAction,
            deltaFromPrevious: aiPlan.deltaFromPrevious || null,
            persistentWeaknessStrategy: aiPlan.persistentWeaknessStrategy || null,
          };
          await saveStudyPlan(enhanced);
        }
      } catch (err) {
        console.warn('[handleSaveStudyPlan] AI augmentation failed, using deterministic plan:', err.message);
      }
    }
  };

  // Prescriptive practice - auto-selects difficulty based on performance
  const startPrescriptivePractice = (moduleId, sectionName) => {
    // Get student's performance for this section
    const practiceKey = `${moduleId}-${sectionName}`;
    const performance = practiceProgress[practiceKey];

    // Calculate optimal difficulty based on past performance
    const difficulty = calculateOptimalDifficulty(performance?.bestScore);

    // Get questions at the recommended difficulty (with fallback)
    let questions = getRandomQuestions(moduleId, sectionName, 5, {
      difficulty,
      shuffle: true
    });

    // Fallback: if not enough questions at that difficulty, get mixed
    if (questions.length < 5) {
      questions = getRandomQuestions(moduleId, sectionName, 5, { shuffle: true });
    }

    // Start practice immediately - no modal
    setPracticeState({
      currentQuestionIndex: 0,
      selectedAnswer: null,
      showFeedback: false,
      showHint: false,
      answers: {},
      isComplete: false,
      shuffledQuestions: questions,
      practiceMode: 'prescriptive',
      recommendedDifficulty: difficulty
    });
    setActiveModule(moduleId);
    setActiveSection(sectionName);
    setShowCalculator(false);
    setView('practice');
  };

  const startSectionPractice = (moduleId, sectionName, mode = 'standard') => {
    // Get shuffled questions for this practice session
    const shuffledQuestions = getRandomQuestions(moduleId, sectionName, null, { shuffle: true });

    setPracticeState({
      currentQuestionIndex: 0,
      selectedAnswer: null,
      showFeedback: false,
      showHint: false,
      answers: {},
      isComplete: false,
      shuffledQuestions,
      practiceMode: mode
    });
    setActiveModule(moduleId);
    setActiveSection(sectionName);
    setShowCalculator(false);
    setView('practice');
  };

  // Launch a timed pacing drill (Phase 2 — pacingService runner). The card
  // passes the chosen mode config; we source MCQ bank questions matching its
  // difficulty filter, then hand off to the self-contained PacingDrill runner.
  const startPacingDrill = (config) => {
    if (!config) return;
    const pool = [];
    ['algebra', 'problem-solving', 'advanced-math', 'geometry'].forEach((domain) => {
      try { pool.push(...(getQuestionsByDomain(domain) || [])); } catch { /* domain absent */ }
    });
    // Fisher-Yates shuffle so each drill draws a fresh, representative set.
    for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }
    const questions = selectPacingQuestions(pool, config);
    if (questions.length === 0) {
      showToast({ type: 'info', message: 'No pacing questions available right now. Try a practice test first.' });
      return;
    }
    setPacingSession({ config, questions });
    setShowAiTutor(false);
    setView('pacingDrill');
  };

  const startAssignedPractice = (questionIds, meta = {}) => {
    const { resolved } = resolveAssignedQuestions(questionIds);
    if (resolved.length === 0) return;

    // Day-2 Acely-polish: split into rounds (default 8 questions each)
    // so the shell can show round progress + an interstitial between rounds.
    const rounds = buildRounds(resolved.map(q => q.id), 8);
    const roundsWithStart = rounds.map((r, i) =>
      i === 0 ? { ...r, startedAt: new Date().toISOString() } : r,
    );

    setPracticeState({
      currentQuestionIndex: 0,
      selectedAnswer: null,
      showFeedback: false,
      showHint: false,
      showRoundComplete: false,
      answers: {},
      isComplete: false,
      shuffledQuestions: resolved,
      rounds: roundsWithStart,
      currentRoundIndex: 0,
      practiceMode: 'assigned',
      assignmentMeta: {
        label: meta.label || 'Assigned Practice',
        weekNumber: meta.weekNumber ?? null,
        source: meta.source || 'study-plan-assigned',
        weakness: meta.weakness || null,
      },
    });
    setActiveModule(null);
    setActiveSection('__assigned__');
    setShowCalculator(false);
    setView('practice');
  };

  const startAdaptivePractice = (opts = {}) => {
    const rawDomain = opts.enforcedDomain;
    const resolvedDomain = rawDomain ? normalizeDomain(rawDomain) : null;
    const label = opts.label;

    let queueSeed;
    let sessionState;

    if (resolvedDomain) {
      // Phase 2 parity: pass math weaknesses so the seed can bias its pool
      // toward currently-missed SAT Patterns within this domain (Tier-1
      // routing for the adaptive flow, matching what AssignedPracticeShell
      // already gets via getTargetedWeaknessSet). When the plan has no
      // weaknesses or none have missedPatterns, the seed falls back to the
      // plain domain shuffle — same behavior as before.
      // Filter weaknesses to the section the enforced domain belongs to. Math
      // keeps its Tier-1 SAT-pattern bias; an R&W domain scopes to R&W
      // weaknesses (no pattern bias — the seed builder gates that to math).
      const domainSection = RW_DOMAIN_ORDER.includes(resolvedDomain) ? 'rw' : 'math';
      const planWeaknesses = Array.isArray(studyPlan?.weaknesses)
        ? studyPlan.weaknesses.filter(w => w && ((w.section === 'rw' ? 'rw' : 'math') === domainSection))
        : [];
      queueSeed = buildDomainAdaptiveQueueSeed({
        enforcedDomain: resolvedDomain,
        existingPoolIds: studyPlan?.adaptivePractice?.poolIds || [],
        seed: resolvedDomain + (studyPlan?.adaptivePractice?.createdAt || ''),
        weaknesses: planWeaknesses,
      });
      if (!queueSeed?.poolIds?.length) return;
      sessionState = createAdaptiveSessionState(queueSeed);
    } else {
      queueSeed = studyPlan?.adaptivePractice;
      if (!queueSeed?.poolIds?.length) return;

      const persisted = studyPlan?.adaptivePracticeState;
      sessionState = (persisted?.answered?.length > 0 && !persisted?.isCompleted)
        ? deserializeAdaptiveState(persisted)
        : createAdaptiveSessionState(queueSeed);
    }

    const { question } = getNextAdaptiveQuestion(queueSeed, sessionState);
    if (!question) return;

    setPracticeState({
      currentQuestionIndex: 0,
      selectedAnswer: null,
      showFeedback: false,
      showHint: false,
      answers: {},
      isComplete: false,
      shuffledQuestions: [question],
      practiceMode: 'adaptive',
      adaptiveQueueSeed: queueSeed,
      adaptiveSessionState: sessionState,
      adaptiveDomainLabel: label || null,
    });
    setActiveModule(null);
    setActiveSection('__adaptive__');
    setShowCalculator(false);
    setView('practice');
  };

  /**
   * startRetryDrillFromTest — opens a retry drill of items from a past
   * practice test (Phase 5 of PAST_TEST_REVIEW_PLAN.md).
   *
   * Bypasses resolveAssignedQuestions because snapshot questions live OUTSIDE
   * the production drill bank — they are CB items the student already saw on
   * the original test, fetched from the per-attempt snapshot subcollection.
   *
   * Sets `reviewMode: true` so the shell renders a "review session" banner.
   * Already-safe constraints (no extra guards needed):
   *   • recordPracticeAttempt at the completion handler is gated by
   *     !isAdaptiveOrAssigned, so review-mode attempts don't pollute skill
   *     mastery counters.
   *   • buildGroundTruthDiagnosis lives in PracticeTest.jsx (not App.jsx),
   *     so a review-mode drill completion can't inflate Predicted vs Actual.
   *
   * @param {object} opts
   * @param {string} opts.testId
   * @param {string} opts.testTitle
   * @param {Array<object>} opts.snapshotQuestions  drill-shape questions from
   *                        the per-attempt snapshot, already filtered by the
   *                        caller (typically to wrong items).
   * @param {number} [opts.originalWrongCount]  total items the student got wrong
   *                        on the source attempt — separate from
   *                        snapshotQuestions.length so retry_completed
   *                        telemetry can compute true retry-conversion.
   */
  const startRetryDrillFromTest = ({ testId, testTitle, snapshotQuestions, originalWrongCount }) => {
    if (!Array.isArray(snapshotQuestions) || snapshotQuestions.length === 0) return;

    const rounds = buildRounds(snapshotQuestions.map(q => q.id), 8);
    const roundsWithStart = rounds.map((r, i) =>
      i === 0 ? { ...r, startedAt: new Date().toISOString() } : r,
    );

    setPracticeState({
      currentQuestionIndex: 0,
      selectedAnswer: null,
      showFeedback: false,
      showHint: false,
      showRoundComplete: false,
      answers: {},
      isComplete: false,
      shuffledQuestions: snapshotQuestions,
      rounds: roundsWithStart,
      currentRoundIndex: 0,
      practiceMode: 'assigned',
      reviewMode: true,
      assignmentMeta: {
        label: `Reviewing ${testTitle}`,
        source: 'past-test-review',
        sourceTestId: testId,
        sourceTestTitle: testTitle,
        sourceWrongCount: typeof originalWrongCount === 'number'
          ? originalWrongCount
          : snapshotQuestions.length,
      },
    });
    setActiveModule(null);
    setActiveSection('__pastTestReview__');
    setShowCalculator(false);
    setView('practice');
  };

  // ── Past-Test-Review handlers (Phase 6 of PAST_TEST_REVIEW_PLAN.md) ──

  /**
   * handleOpenPastTestReview — entry point from the Study Plan dashboard.
   * Resets selection state and routes to the index view. Captures the
   * current view so the back-handler can return the user to the surface
   * they opened from (dashboard tab vs standalone study plan).
   */
  const handleOpenPastTestReview = () => {
    setPastTestReviewEntryView(view === 'dashboard' ? 'dashboard' : 'studyPlan');
    setSelectedReviewTestId(null);
    setSelectedReviewItem(null);
    setReviewBundle(null);
    setReviewBundleError(null);
    setView('pastTestReviewIndex');
    logPtrEvent('opened', { studentId: user?.uid || null });
  };

  /**
   * handleSelectReviewTest — user clicked a test card in the index. Kicks
   * off the async snapshot fetch via loadDiagnosticReportData and routes
   * to the detail view. The detail view renders its own loading + error
   * states (already handled by TestReviewDetail).
   */
  const handleSelectReviewTest = async (testId /*, _attemptId */) => {
    const test = getAllPracticeTests().find(t => t.id === testId);
    const lastAttempt = getLatestAttempt(practiceTestResults, testId);
    if (!test || !lastAttempt) {
      showToast({
        type: 'error',
        message: 'Could not load this test for review. Please try again.',
      });
      return;
    }
    const requestId = ++reviewBundleRequestRef.current;
    setSelectedReviewTestId(testId);
    setSelectedReviewItem(null);
    setReviewBundle(null);
    setReviewBundleError(null);
    setReviewBundleLoading(true);
    setView('pastTestReviewDetail');
    try {
      const data = await loadDiagnosticReportData({
        userId: user?.uid,
        test,
        lastAttempt,
        practiceTestResults,
        skillProgress,
        user,
      });
      // Guard: if a newer fetch superseded this one (user clicked another
      // test card mid-flight), drop this result.
      if (requestId !== reviewBundleRequestRef.current) return;
      setReviewBundle({
        test: data.test,                    // snapshot-reconstructed
        liveTest: data.liveTest,            // for retry-drill field merging
        answers: data.answers || {},
        diagnosticReport: data.diagnosticReport,
        attempt: lastAttempt,
        attemptId: data.attemptId,
        testTitle: test.title || testId,
        snapshotMissing: !!data.snapshotMissing,
      });
      logPtrEvent('test_selected', {
        studentId: user?.uid || null,
        testId,
        attemptId: data.attemptId,
        completedAt: lastAttempt.completedAt || null,
        snapshotMissing: !!data.snapshotMissing,
      });
    } catch (err) {
      if (requestId !== reviewBundleRequestRef.current) return;
      logWarn('pastTestReview', 'select_failed', { message: err?.message || String(err) });
      setReviewBundleError(err?.message || 'load failed');
    } finally {
      // Only the latest request controls the loading flag — earlier
      // resolutions must not flip it off while a newer fetch is pending.
      if (requestId === reviewBundleRequestRef.current) {
        setReviewBundleLoading(false);
      }
    }
  };

  /**
   * handleSelectReviewItem — user clicked a per-item row in TestReviewDetail.
   */
  const handleSelectReviewItem = (item) => {
    setSelectedReviewItem(item);
    setView('pastTestReviewItem');
    // Compute the per-item error class with the same logic the detail
    // chips use, so the telemetry matches what the user saw. Only attach
    // for incorrect items — the 6-class taxonomy is meaningless for items
    // the student got right (a correct item whose skill is in weakSkills
    // would otherwise log as e.g. 'conceptual_gap', distorting analytics).
    const errorClass = (reviewBundle && !item.isCorrect)
      ? findErrorClassForItem(item, reviewBundle.attempt, reviewBundle.diagnosticReport)
      : null;
    logPtrEvent('item_reviewed', {
      studentId: user?.uid || null,
      testId: selectedReviewTestId,
      itemKey: item.key,
      isCorrect: !!item.isCorrect,
      errorClass,
    });
  };

  /**
   * handleRetryWrongFromReview — user clicked "Retry the N wrong" CTA in
   * TestReviewDetail. Maps the telemetry-shape wrong items back to the
   * snapshot question objects (via reviewBundle.test.modules) so they can
   * be fed into startRetryDrillFromTest.
   */
  const handleRetryWrongFromReview = (wrongItems) => {
    if (!reviewBundle || !Array.isArray(wrongItems)) return;
    if (reviewBundle.snapshotMissing) {
      showToast({
        type: 'warn',
        message: 'Original question text isn\'t archived for this attempt — retry isn\'t available.',
      });
      return;
    }

    // Snapshot questions are the canonical "what the student saw", but the
    // loader strips passage/diagram/questionTable/questionFormula at write
    // time (PracticeTest.jsx writes only the fields needed for the diagnostic
    // engine). Re-attach those fields from the live test so R&W passages
    // and math figures render in the retry drill.
    const enrichFromLive = (snapshotQ, modIdx, qIdx) => {
      if (!snapshotQ) return null;
      const liveQ = reviewBundle.liveTest?.modules?.[modIdx]?.questions?.[qIdx];
      // The snapshot reshape in loadDiagnosticReportData strips position
      // metadata. Re-attach moduleIndex/questionIndex so the retry-drill
      // header can show "M1·Q3 (originally missed)" instead of the
      // generic round-position label.
      const withPosition = {
        ...snapshotQ,
        moduleIndex: modIdx,
        questionIndex: qIdx,
      };
      if (!liveQ) return withPosition;
      return {
        ...withPosition,
        passage: snapshotQ.passage ?? liveQ.passage,
        diagram: snapshotQ.diagram ?? liveQ.diagram,
        questionTable: snapshotQ.questionTable ?? liveQ.questionTable,
        questionFormula: snapshotQ.questionFormula ?? liveQ.questionFormula,
        hint: snapshotQ.hint ?? liveQ.hint,
      };
    };

    const snapshotQuestions = wrongItems
      .map(it => {
        const snap = reviewBundle.test?.modules?.[it.moduleIndex]?.questions?.[it.questionIndex];
        return enrichFromLive(snap, it.moduleIndex, it.questionIndex);
      })
      .filter(Boolean);

    if (snapshotQuestions.length === 0) {
      showToast({ type: 'info', message: 'No items available to retry.' });
      return;
    }

    // Surface partial-mapping when some wrong items couldn't be located in
    // the snapshot (rare; happens if test content was edited after the
    // attempt). Telemetry helps us spot it; toast keeps the user oriented.
    if (snapshotQuestions.length < wrongItems.length) {
      logPtrEvent('retry_dropped', {
        studentId: user?.uid || null,
        testId: selectedReviewTestId,
        expected: wrongItems.length,
        mapped: snapshotQuestions.length,
      });
      showToast({
        type: 'info',
        message: `Drilling ${snapshotQuestions.length} of ${wrongItems.length} wrong items — some couldn't be loaded.`,
      });
    }

    startRetryDrillFromTest({
      testId: selectedReviewTestId,
      testTitle: reviewBundle.testTitle,
      snapshotQuestions,
      originalWrongCount: wrongItems.length,
    });
    logPtrEvent('retry_started', {
      studentId: user?.uid || null,
      testId: selectedReviewTestId,
      wrongCount: snapshotQuestions.length,
      originalWrongCount: wrongItems.length,
    });
  };

  const handleShowHint = () => {
    setPracticeState(prev => ({ ...prev, showHint: true }));
  };

  const handleSelectAnswer = (answerId) => {
    if (!practiceState.showFeedback) {
      setPracticeState(prev => ({ ...prev, selectedAnswer: answerId }));
    }
  };

  const handleNavigateToQuestion = (targetIdx) => {
    setPracticeState(prev => {
      if (targetIdx < 0 || targetIdx >= prev.shuffledQuestions.length) return prev;
      return { ...prev, currentQuestionIndex: targetIdx, selectedAnswer: null, showFeedback: false, showHint: false };
    });
  };

  const handleCheckAnswer = (question) => {
    const isCorrect = practiceState.selectedAnswer === question.correctAnswer;
    setPracticeState(prev => ({
      ...prev,
      showFeedback: true,
      answers: {
        ...prev.answers,
        [question.id]: {
          selected: prev.selectedAnswer,
          correct: isCorrect,
          difficulty: question.difficulty,
          skills: question.skills || []
        }
      }
    }));

    const isAdaptiveOrAssigned = practiceState.practiceMode === 'assigned' || practiceState.practiceMode === 'adaptive';
    const isReviewSession = practiceState.assignmentMeta?.source === 'review-queue';
    if (user?.uid && activeModule && activeSection && !isAdaptiveOrAssigned) {
      // Legacy free-practice path: enqueue every answer (index-resolvable).
      addToReviewQueue(user.uid, activeModule, activeSection, question.id, isCorrect);
    } else if (user?.uid && isAdaptiveOrAssigned && !isReviewSession && !isCorrect && question?.id != null) {
      // Phase 2: feed production-drill MISSES into the review queue. Stored
      // bank-resolvable (moduleId='bank' + real question id) so spaced repetition
      // can re-serve the exact item. Skip review sessions (the review-complete
      // path already reschedules those) and correct answers (nothing to review).
      addToReviewQueue(user.uid, BANK_REVIEW_MODULE, reviewDisplaySection(question), question.id, false);
    }
  };

  // onSessionComplete seam for drills (Phase 2). Called from handleNextQuestion's
  // completion branches (adaptive + assigned/standard/review-retry). Fires the
  // drill_completed analytics event and folds assigned/adaptive answers into
  // skillProgress (the drill→mastery loop, 2026-06 audit gap 1). The
  // orchestrator still skips the prediction pipeline for all non-full-test
  // sessions, so drills never pollute the prediction loop (review-retry is
  // doubly gated by reviewMode).
  const fireDrillSessionComplete = (questions) => {
    try {
      const answersMap = practiceState.answers || {};
      const total = Object.keys(answersMap).length || (Array.isArray(questions) ? questions.length : 0);
      const correct = Object.values(answersMap).filter(a => a && a.correct).length;
      const accuracy = total > 0 ? Math.round((correct / total) * 100) : null;

      // Daily-review session: close the SM-2 reschedule + streak loop. Maps each
      // answered question back to its reviewQueue key, then the orchestrator
      // advances the schedule, bumps the streak, and returns a summary to toast.
      if (practiceState.assignmentMeta?.source === 'review-queue') {
        const keyByQ = practiceState.reviewKeyByQuestionId || {};
        const reviewItems = Object.entries(answersMap)
          .map(([qid, a]) => ({ key: keyByQ[qid], wasCorrect: !!(a && a.correct) }))
          .filter(it => it.key);
        const reviewSession = buildReviewSession({ reviewItems, userId: user?.uid ?? null });
        dispatchSessionComplete(reviewSession, { userId: user?.uid ?? null })
          .then(out => {
            const s = out?.summary;
            if (s) {
              showToast({
                type: s.accuracy >= 70 ? 'success' : 'info',
                message: `Review complete · ${s.correct}/${s.total} correct${s.streak?.current ? ` · ${s.streak.current}-day streak` : ''}.`,
                duration: 4000,
              });
            }
          })
          .catch(err => console.error('[App] review sessionComplete dispatch error:', err));
        return;
      }

      // Close the drill→mastery loop: assigned/adaptive drill answers update
      // skillProgress just like free practice and full tests already do, so a
      // week of drilling moves mastery and the weakness lists between tests.
      // Excluded: standard free practice (recordPracticeAttempt already records
      // skills on that path), daily-review sessions (early-returned above; SM-2
      // owns that evidence), and review-retry sessions (the "won't affect your
      // study plan" banner is a promise we keep).
      const isAdaptiveOrAssigned = practiceState.practiceMode === 'assigned' || practiceState.practiceMode === 'adaptive';
      if (user?.uid && isAdaptiveOrAssigned && !practiceState.reviewMode) {
        recordDrillSkillAttempts(answersMap);
      }

      const session = buildDrillSession({
        drillMode: practiceState.practiceMode || 'standard',
        section: activeSection || null,
        accuracy,
        itemCount: total,
        source: practiceState.reviewMode
          ? 'review-retry'
          : (practiceState.assignmentMeta?.source || practiceState.practiceMode || null),
        reviewMode: !!practiceState.reviewMode,
        userId: user?.uid ?? null,
      });
      dispatchSessionComplete(session, { userId: user?.uid ?? null })
        .catch(err => console.error('[App] drill sessionComplete dispatch error:', err));
    } catch (e) {
      console.error('[App] fireDrillSessionComplete error:', e);
    }
  };

  const handleNextQuestion = (questions) => {
    setShowAiTutor(false);
    const isAdaptiveOrAssigned = practiceState.practiceMode === 'assigned' || practiceState.practiceMode === 'adaptive';
    if (!isAdaptiveOrAssigned) {
      sessionStorage.removeItem(`aiTutorChat_${activeModule}_practice-${activeSection}-q${practiceState.currentQuestionIndex}`);
    }

    // Adaptive mode: ask the queue engine for the next question
    if (practiceState.practiceMode === 'adaptive') {
      const currentQ = questions[practiceState.currentQuestionIndex];
      const lastAnswer = practiceState.answers[currentQ?.id];
      const isRetry = practiceState.adaptiveSessionState?.seenIds?.has(currentQ?.id) &&
        practiceState.adaptiveSessionState.answered.some(a => a.id === currentQ?.id);

      let nextState = practiceState.adaptiveSessionState;
      if (currentQ && lastAnswer) {
        nextState = applyAdaptiveResult(nextState, currentQ.id, lastAnswer.correct, isRetry);
      }

      // Evaluate both-rule completion (target + mastery)
      const completion = evaluateAdaptiveCompletion(nextState);

      // Persist state after each answer
      const artId = studyPlanMeta?.artifactId;
      if (user?.uid && artId) {
        const toSave = { ...serializeAdaptiveState(nextState) };
        if (completion.isComplete) {
          toSave.isCompleted = true;
          toSave.completedAt = new Date().toISOString();
          toSave.sessionsCompleted = (nextState.sessionsCompleted || 0) + 1;
        }
        patchAdaptivePracticeState(user.uid, artId, toSave);

        // Also write answered question ID to progress doc for cross-plan dedup
        if (currentQ?.id) {
          import('firebase/firestore').then(({ doc: fsDoc, updateDoc: fsUpdate, arrayUnion: fsUnion, serverTimestamp: fsTs }) => {
            import('./firebase/config').then(({ db: fsDb }) => {
              const progressRef = fsDoc(fsDb, 'progress', user.uid);
              fsUpdate(progressRef, {
                answeredQuestionIds: fsUnion(currentQ.id),
                lastUpdated: fsTs(),
              }).catch(err => console.warn('[App] Failed to save adaptive question ID:', err.message));
            });
          });
        }
      }

      const { question: nextQ, isComplete: queueExhausted } = getNextAdaptiveQuestion(
        practiceState.adaptiveQueueSeed, nextState,
      );

      // Session ends when both rules are met OR queue is exhausted
      if (completion.isComplete || queueExhausted || !nextQ) {
        const finalState = completion.isComplete
          ? { ...nextState, isCompleted: true, completedAt: new Date().toISOString(), sessionsCompleted: (nextState.sessionsCompleted || 0) + 1 }
          : nextState;
        setPracticeState(prev => ({
          ...prev,
          isComplete: true,
          adaptiveSessionState: finalState,
          adaptiveCompletion: completion,
        }));
        fireDrillSessionComplete(questions);
      } else {
        setPracticeState(prev => ({
          ...prev,
          shuffledQuestions: [...prev.shuffledQuestions, nextQ],
          currentQuestionIndex: prev.shuffledQuestions.length,
          selectedAnswer: null,
          showFeedback: false,
          showHint: false,
          adaptiveSessionState: nextState,
        }));
      }
      return;
    }

    // Day-2 Acely-polish: round boundary check (assigned mode only).
    // When the just-answered question was the LAST in its round (and not
    // the last round of the session), pause on a "Round X complete"
    // interstitial in the shell instead of advancing immediately.
    if (practiceState.practiceMode === 'assigned' && Array.isArray(practiceState.rounds)) {
      const currentQ = questions[practiceState.currentQuestionIndex];
      const boundary = classifyRoundBoundary(
        practiceState.rounds,
        currentQ?.id,
        practiceState.answers,
      );
      if (boundary.isLastInRound && !boundary.isLastRound) {
        const nowIso = new Date().toISOString();
        setPracticeState(prev => ({
          ...prev,
          rounds: prev.rounds.map(r =>
            r.index === boundary.roundIndex ? { ...r, completedAt: nowIso } : r,
          ),
          showRoundComplete: true,
          selectedAnswer: null,
          showFeedback: false,
          showHint: false,
        }));
        const round = practiceState.rounds[boundary.roundIndex];
        const correctInRound = round.questionIds.filter(
          id => practiceState.answers[id]?.correct,
        ).length;
        showToast({
          type: 'success',
          message: `Round ${boundary.roundIndex + 1} complete · ${correctInRound}/${round.questionIds.length} correct.`,
          duration: 3500,
        });
        return;
      }
    }

    if (practiceState.currentQuestionIndex < questions.length - 1) {
      setPracticeState(prev => ({
        ...prev,
        currentQuestionIndex: prev.currentQuestionIndex + 1,
        selectedAnswer: null,
        showFeedback: false,
        showHint: false
      }));
    } else {
      const correctCount = Object.values(practiceState.answers).filter(a => a.correct).length;
      if (user && activeModule && activeSection && !isAdaptiveOrAssigned) {
        recordPracticeAttempt(activeModule, activeSection, practiceState.answers, correctCount, questions.length);
      }
      // Past-Test-Review retry-drill completion telemetry (Phase 7).
      // `retryQuestionCount` is the number of items in this retry session
      // (may include Try-Similar additions); `originalWrongCount` is the
      // wrong-on-the-original-test denominator the CEO R2-F3 retry-conversion
      // metric needs. Splitting them prevents the two from being conflated.
      if (practiceState.reviewMode) {
        const meta = practiceState.assignmentMeta || {};
        logPtrEvent('retry_completed', {
          studentId: user?.uid || null,
          testId: meta.sourceTestId || null,
          retryQuestionCount: questions.length,
          originalWrongCount: meta.sourceWrongCount ?? questions.length,
          newCorrectCount: correctCount,
        });
      }
      setPracticeState(prev => ({ ...prev, isComplete: true }));
      fireDrillSessionComplete(questions);
    }
  };

  /**
   * handleAdvanceToNextRound — called by the shell's round-summary
   * interstitial. Closes the interstitial, advances currentQuestionIndex
   * to the first question of the next round, and stamps the next round's
   * startedAt.
   */
  const handleAdvanceToNextRound = () => {
    setPracticeState(prev => {
      const nextRoundIndex = (prev.currentRoundIndex ?? 0) + 1;
      if (!prev.rounds || nextRoundIndex >= prev.rounds.length) return prev;
      return {
        ...prev,
        currentQuestionIndex: prev.currentQuestionIndex + 1,
        currentRoundIndex: nextRoundIndex,
        showRoundComplete: false,
        rounds: prev.rounds.map((r, i) =>
          i === nextRoundIndex ? { ...r, startedAt: new Date().toISOString() } : r,
        ),
        selectedAnswer: null,
        showFeedback: false,
        showHint: false,
      };
    });
  };

  // Skills whose try-similar pool has been exhausted in this session.
  // The shell disables the button when the current skill is in this set
  // (closes Phase-3 GAP-3 "disable on pool exhaustion").
  const [trySimilarExhausted, setTrySimilarExhausted] = useState(() => new Set());

  /**
   * handleTrySimilar — append a fresh question for the same weak skill after
   * a wrong answer. Inserts the new question right after the current index in
   * `shuffledQuestions` and advances, mirroring the adaptive-mode pattern at
   * handleNextQuestion lines 506-514.
   *
   * Dispatch and section routing live in `services/trySimilarService.js`. This
   * wrapper translates the service's tagged result into UI side effects
   * (toasts, state updates).
   *
   * Failure handling (closes Phase-3 GAP-3):
   *   - dispatcher throws  → error toast, no state change
   *   - dispatcher returns [] → mark skill exhausted (button disables), info toast
   *
   * @param {object} currentQuestion
   */
  const handleTrySimilar = useCallback((currentQuestion) => {
    const excludeIds = (practiceState.shuffledQuestions || []).map(q => q.id).filter(Boolean);
    const result = pickSimilarQuestion({ currentQuestion, excludeIds });

    switch (result.kind) {
      case 'invalid':
        return;
      case 'no-skill':
        showToast({ type: 'warn', message: 'No skill is tagged on this question — try the next one.' });
        return;
      case 'error':
        // eslint-disable-next-line no-console
        console.warn('[performsat:trySimilar] dispatcher threw:', result.error && result.error.message);
        showToast({ type: 'error', message: 'Could not load a similar question. Please try again.' });
        return;
      case 'exhausted':
        setTrySimilarExhausted(prev => {
          const next = new Set(prev);
          result.skillIds.forEach(s => next.add(s));
          return next;
        });
        showToast({ type: 'info', message: 'No more similar questions for this skill in the bank — try the next one.' });
        return;
      case 'ok':
        setPracticeState(prev => {
          const insertAt = prev.currentQuestionIndex + 1;
          const next = [
            ...prev.shuffledQuestions.slice(0, insertAt),
            result.question,
            ...prev.shuffledQuestions.slice(insertAt),
          ];
          return {
            ...prev,
            shuffledQuestions: next,
            currentQuestionIndex: insertAt,
            selectedAnswer: null,
            showFeedback: false,
            showHint: false,
          };
        });
        return;
      default:
        return;
    }
  }, [practiceState.shuffledQuestions]);

  /**
   * handleTrySimilarFromReview — launches a 1-question assigned-practice
   * session for the same skill as a snapshot item the student is reviewing.
   * Used by ReviewItemCard's Try-Similar CTA (Plan D4 of
   * PAST_TEST_REVIEW_PLAN.md). Differs from handleTrySimilar above (which
   * INSERTS into a running session) — this LAUNCHES a fresh practice flow.
   *
   * @param {object} snapshotItem  — review snapshot of the wrong item
   */
  const handleTrySimilarFromReview = useCallback((snapshotItem) => {
    if (!snapshotItem) return;
    const result = pickSimilarQuestion({
      currentQuestion: snapshotItem,
      excludeIds: [snapshotItem.id].filter(Boolean),
    });

    switch (result.kind) {
      case 'invalid':
      case 'no-skill':
        showToast({ type: 'warn', message: 'No skill is tagged on this item — cannot drill a similar question.' });
        return;
      case 'error':
        // eslint-disable-next-line no-console
        console.warn('[performsat:trySimilar:review] dispatcher threw:', result.error && result.error.message);
        showToast({ type: 'error', message: 'Could not load a similar question. Please try again.' });
        return;
      case 'exhausted':
        showToast({ type: 'info', message: 'No more similar questions for this skill in the bank.' });
        return;
      case 'ok':
        startAssignedPractice([result.question.id], {
          label: 'Similar Practice',
          source: 'review-try-similar',
        });
        return;
      default:
        return;
    }
  }, [startAssignedPractice]);


  if (loading) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#ffffff'
      }}>
        <div style={{
          width: '48px',
          height: '48px',
          border: '4px solid #e5e7eb',
          borderTop: '4px solid #667eea',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite'
        }} />
        <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  return (
    <ErrorBoundary>
    <BrowserRouter>
      <Toaster />
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={
          !user ? (
            <LandingPage />
          ) : (
            <Navigate to="/course" replace />
          )
        } />

        {/* App route (new) — redirects to /course for now */}
        <Route path="/app/*" element={<Navigate to="/course" replace />} />

        {/* Course Route */}
        <Route path="/course" element={
          user ? (
            <div style={{
              minHeight: '100vh',
              background: '#ffffff',
              fontFamily: design.typography.fontFamily,
              color: design.colors.text.primary,
              WebkitFontSmoothing: 'antialiased'
            }}>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        
        .module-card { transition: all 0.2s ease; cursor: pointer; }
        .module-card:hover { background: #f5f5f7; }
        
        .module-card { 
          transition: all 0.2s ease; 
          cursor: pointer;
        }
        .module-card:hover { 
          border-color: rgba(234, 88, 12, 0.4) !important;
          background: linear-gradient(135deg, rgba(234, 88, 12, 0.02), rgba(249, 115, 22, 0.02)) !important;
        }
        
        .lesson-row { 
          transition: all 0.2s ease; 
          cursor: pointer;
        }
        .lesson-row:hover { 
          background: rgba(234, 88, 12, 0.03);
        }
        
        .back-btn { transition: all 0.2s ease; }
        .back-btn:hover { opacity: 0.7; }
        
        .nav-link {
          transition: color 0.2s ease;
        }
        .nav-link:hover {
          color: #ea580c !important;
        }
        
        ::selection { background: rgba(234, 88, 12, 0.15); }
      `}</style>

      {/* Accessibility: Skip to main content link */}
      <a href="#main-content" className="skip-link">Skip to main content</a>

      <AppShell
        currentView={view}
        onNavigate={(navId) => {
          if (navId === 'dashboard') { setView('dashboard'); setActiveModule(null); setActiveLesson(null); }
          else if (navId === 'modules') { setView('modules'); setActiveModule(null); setActiveLesson(null); }
          else if (navId === 'practiceTests') { setView('practiceTests'); setSelectedPracticeTest(null); }
          else if (navId === 'studyPlan') { setView('studyPlan'); }
          else if (navId === 'tutor') { setView('tutor'); setShowAiTutor(true); }
          else if (navId === 'profile') { setView('profile'); }
          else if (navId === 'practiceBank') { setView('practiceBank'); }
          else { setView(navId); }
        }}
        user={user}
        onLogout={logout}
        hideNav={view === 'takingTest' || view === 'reviewingPastResults' || view === 'practice' || view === 'learn'}
      >
      {/* Main Content */}
      <div id="main-content" style={{
        maxWidth: view === 'takingTest' || view === 'reviewingPastResults' || view === 'practice' || view === 'dashboard' || view === 'learn' || view === 'modules' || view === 'practiceBank' ? '100%' : (view === 'practiceTests' || view === 'studyPlan') ? '960px' : '800px',
        margin: '0 auto',
        padding: (view === 'dashboard' || view === 'reviewingPastResults' || view === 'practice' || view === 'takingTest' || view === 'learn' || view === 'practiceBank') ? '0' : '32px 32px 100px',
        ...(view === 'takingTest' ? { overflow: 'hidden', height: '100vh' } : {})
      }}>
        {/* Standalone AI Tutor View */}
        {view === 'tutor' && (
          <div style={{ maxWidth: '720px', margin: '0 auto' }}>
            <AiTutorChat
              isOpen={true}
              onClose={() => { setView('dashboard'); setShowAiTutor(false); }}
              moduleId={activeModule}
              lessonId={activeLesson}
              currentQuestion={null}
              allQuestions={[]}
              currentQuestionIndex={0}
              userAnswer={null}
              skillProgress={skillProgress}
              practiceTestResults={practiceTestResults}
              completedLessons={completedLessons}
              user={user}
              studentFingerprint={studentFingerprint}
              interventionLog={interventionLog}
              predictionLog={predictionLog}
              standalone={true}
            />
          </div>
        )}

        {/* Profile View */}
        {view === 'profile' && (
          <Profile
            user={user}
            onLogout={logout}
            onUpdateTargetScore={updateTargetScore}
            onUpdateTestDate={updateTestDate}
            onUpdateCurrentScore={updateCurrentScore}
            onUpdateTargetSchools={updateTargetSchools}
            completedLessons={completedLessons}
            practiceTestResults={practiceTestResults}
            skillProgress={skillProgress}
          />
        )}

        {/* Practice Bank — browse question types and drill at will */}
        {view === 'practiceBank' && (
          <PracticeBank onStartPractice={startAssignedPractice} />
        )}

        {/* Learn — Module Catalog View */}
        {view === 'modules' && (
          <LessonBrowser
            completedLessons={completedLessons}
            skillProgress={skillProgress}
            onSelectModule={(moduleId) => {
              const lessons = allLessons[moduleId] || [];
              setActiveModule(moduleId);
              setActiveLesson(lessons[0]?.id || null);
              setView('learn');
            }}
          />
        )}

        {/* Learn — Lesson Workspace View */}
        {view === 'learn' && activeModule && (() => {
          const moduleLessons = allLessons[activeModule] || [];
          const currentLesson = moduleLessons.find(l => l.id === activeLesson) || moduleLessons[0] || null;
          // Find module title from LessonBrowser's MODULES if available; fall back to id.
          const moduleTitleMap = {
            'linear-equations': 'Linear Equations',
            'functions': 'Functions',
            'systems': 'System of Equations',
            'transformations': 'Transformations',
            'exponents': 'Exponents & Exponential Functions',
            'percents': 'Percents',
            'equivalent-expressions': 'Equivalent Expressions',
            'quadratics': 'Quadratic Functions & Equations',
            'radians-degrees': 'Radians & Degrees',
            'triangles': 'Triangles',
            'circles': 'Circles',
            'volume': 'Volume',
            'statistics': 'Statistics',
            'dimensional-analysis': 'Dimensional Analysis',
          };
          const moduleTitle = moduleTitleMap[activeModule] || activeModule;
          const moduleProgress = getModuleProgress
            ? getModuleProgress(activeModule, moduleLessons.length)
            : 0;
          return (
            <LearnWorkspace
              moduleId={activeModule}
              moduleLessons={moduleLessons}
              moduleTitle={moduleTitle}
              activeLessonId={currentLesson?.id || null}
              currentLesson={currentLesson}
              onSelectLesson={(lessonId) => setActiveLesson(lessonId)}
              onBack={() => { setView('modules'); setActiveLesson(null); }}
              onMarkComplete={(modId, lessonId) => {
                if (markLessonComplete) markLessonComplete(modId, lessonId, currentLesson);
              }}
              isLessonCompleted={isLessonCompleted || (() => false)}
              moduleProgress={moduleProgress}
              renderLessonContent={() => null}
              videoTranscript=""
              videoTimestamp={0}
            />
          );
        })()}

        {/* Student Dashboard View */}
        {view === 'dashboard' && (
          <>
          <PushOptInCard userId={user?.uid} />
          <StudentDashboard
            user={user}
            completedLessons={completedLessons}
            practiceProgress={practiceProgress}
            practiceTestResults={practiceTestResults}
            reviewQueue={reviewQueue}
            reviewStreak={reviewStreak}
            dueReviewCount={getDueCount()}
            skillDiagnosticSummary={getSkillDiagnosticSummary()}
            skillBreakdown={getSkillBreakdown()}
            studyPlan={studyPlan}
            studyPlanArtifact={studyPlanArtifact}
            studyPlanMeta={studyPlanMeta}
            predictionLog={predictionLog}
            skillProgress={skillProgress}
            onUpdateTestDate={updateTestDate}
            onUpdateTargetScore={updateTargetScore}
            onUpdateCurrentScore={updateCurrentScore}
            onUpdateTargetSchools={updateTargetSchools}
            onStartPractice={(moduleId, sectionName, opts) => {
              if (opts?.adaptive) { startAdaptivePractice({ enforcedDomain: opts.enforcedDomain, label: opts.label }); return; }
              if (opts?.questionIds?.length) {
                startAssignedPractice(opts.questionIds, {
                  label: opts.label,
                  weekNumber: opts.weekNumber,
                  weakness: opts.weakness,
                });
                return;
              }
              startPrescriptivePractice(moduleId, sectionName);
            }}
            onStartReview={startDailyReview}
            onStartPracticeTest={() => setView('practiceTests')}
            onStartPacing={startPacingDrill}
            onViewFullDiagnosis={async () => {
              // Closes CEO C1: surface DiagnosticReport from the dashboard.
              const { testId, lastAttempt } = pickMostRecentTest(practiceTestResults);
              if (!testId || !lastAttempt) {
                showToast({
                  type: 'info',
                  message: 'Take a practice test to see your diagnostic report.',
                });
                return;
              }
              const test = getAllPracticeTests().find(t => t.id === testId);
              if (!test) {
                showToast({
                  type: 'error',
                  message: 'Could not load the test for your most recent attempt.',
                });
                return;
              }
              try {
                const data = await loadDiagnosticReportData({
                  userId: user?.uid,
                  test,
                  lastAttempt,
                  practiceTestResults,
                  skillProgress,
                  user,
                });
                setViewingResultsData(data);
                setSelectedPracticeTest(test);
                setView('diagnosticReport');
              } catch (err) {
                // eslint-disable-next-line no-console
                console.warn('[App] onViewFullDiagnosis load failed:', err && err.message);
                showToast({
                  type: 'error',
                  message: 'Could not load your diagnostic report. Please try again.',
                });
              }
            }}
            onCompleteActivity={markStudyActivityComplete}
            onUncompleteActivity={unmarkStudyActivityComplete}
            onReviewPastTests={handleOpenPastTestReview}
          />
          </>
        )}

        {/* Practice Tests List View */}
        {view === 'practiceTests' && (
          <PracticeTestList
            onSelectTest={(test) => {
              // Clear any existing progress when starting fresh
              if (hasTestProgress(test.id)) {
                clearTestProgress(test.id);
              }
              setSelectedPracticeTest(test);
              setIsTestTimed(true);
              setView('takingTest');
            }}
            onSelectTestWithMode={(test, timed, section) => {
              // Clear any existing progress when starting fresh
              if (hasTestProgress(test.id)) {
                clearTestProgress(test.id);
              }
              setSelectedPracticeTest(test);
              setIsTestTimed(timed);
              setInitialTestSection(section || null);
              setView('takingTest');
            }}
            onResumeTest={(test, timed) => {
              // Resume with existing progress. Clear initialTestSection so a
              // stale value from a previous fresh-launch can't override the
              // savedProgress.currentModule on resume.
              setSelectedPracticeTest(test);
              setIsTestTimed(timed);
              setInitialTestSection(null);
              setView('takingTest');
            }}
            onBack={() => setView('dashboard')}
            practiceTestResults={practiceTestResults}
            getTestBestScore={getTestBestScore}
            getTestAttempts={getTestAttempts}
            inProgressTests={inProgressTests}
            onViewResults={async (test) => {
              // Get the last attempt from saved results
              const testResults = practiceTestResults?.[test.id];
              const lastAttempt = testResults?.attempts?.[testResults.attempts.length - 1];
              if (!lastAttempt) return;

              // Try to load the per-attempt snapshot. When present, Review Answers
              // renders the *original* question objects the student saw; otherwise
              // we fall back to the live test file and surface a stale-content
              // notice (legacy attempts predate the snapshot subcollection).
              let snapshotDoc = null;
              if (user?.uid && lastAttempt.attemptId) {
                try {
                  snapshotDoc = await loadAttemptSnapshot(user.uid, lastAttempt.attemptId);
                } catch (err) {
                  console.warn('[ViewResults] Snapshot load failed:', err.message);
                }
              }

              // Build a `reviewTest` shaped like the live `test` but populated
              // from the snapshot when available. Falls back to the live test.
              let reviewTest = test;
              let reconstructedAnswers = {};
              const snapshotMissing = !snapshotDoc;

              if (snapshotDoc?.questionsSnapshot?.length) {
                // Group snapshot rows back into modules so the review UI sees the
                // same shape it gets from a live test object.
                const moduleMap = new Map();
                snapshotDoc.questionsSnapshot.forEach(snap => {
                  const modIdx = snap.moduleIndex ?? 0;
                  if (!moduleMap.has(modIdx)) {
                    const liveMod = test.modules?.[modIdx];
                    moduleMap.set(modIdx, {
                      title: liveMod?.title || `Module ${modIdx + 1}`,
                      questions: [],
                    });
                  }
                  moduleMap.get(modIdx).questions.push({
                    id: snap.id,
                    type: snap.type,
                    question: snap.stem,
                    stem: snap.stem,
                    choices: snap.choices,
                    correctAnswer: snap.correctAnswer,
                    explanation: snap.explanation,
                    difficulty: snap.difficulty,
                    band: snap.band,
                    skills: snap.skills || [],
                  });
                });
                reviewTest = {
                  ...test,
                  modules: Array.from(moduleMap.keys())
                    .sort((a, b) => a - b)
                    .map(k => moduleMap.get(k)),
                };
                // Snapshot-derived attempts persist exact answers, so use those.
                reconstructedAnswers = { ...(snapshotDoc.answers || {}) };
              } else {
                // Legacy fallback: rebuild a synthetic answer map from
                // diagnosticData.questionDetails so the review UI can color-code
                // correct/incorrect even without the saved per-attempt snapshot.
                const qDetails = lastAttempt.diagnosticData?.questionDetails || {};
                Object.entries(qDetails).forEach(([key, detail]) => {
                  const [modIdx, qIdx] = key.split('-').map(Number);
                  const question = test.modules[modIdx]?.questions[qIdx];
                  if (!question) return;
                  if (detail.isCorrect) {
                    reconstructedAnswers[key] = question.correctAnswer;
                  } else {
                    reconstructedAnswers[key] = '__wrong__';
                  }
                });
              }

              // Load saved diagnostic report — only regenerate if not saved (legacy attempts)
              const diagReport = lastAttempt.diagnosticReport || runDiagnostic(
                reviewTest, reconstructedAnswers, lastAttempt.diagnosticData,
                skillProgress || {},
                { targetScore: user?.targetScore, currentScore: user?.currentScore, testDate: user?.testDate },
                practiceTestResults || {}
              );

              // Load saved AI diagnostic narrative from Firestore
              let aiState = { status: 'idle', narrative: null, error: null };
              if (user?.uid) {
                try {
                  const savedAi = await getReadyAiDiagnostic(user.uid, test.id, lastAttempt.timestamp);
                  if (savedAi?.narrative) {
                    aiState = { status: 'ready', narrative: savedAi.narrative, error: null };
                  }
                } catch (err) {
                  console.warn('[ViewResults] AI narrative load failed:', err.message);
                }
              }

              setViewingResultsData({
                test: reviewTest,
                liveTest: test,
                answers: reconstructedAnswers,
                diagnosticData: lastAttempt.diagnosticData,
                diagnosticReport: diagReport,
                aiDiagnosticState: aiState,
                attemptId: lastAttempt.attemptId || null,
                snapshotMissing,
              });
              setSelectedPracticeTest(test);
              setView('viewingResults');
            }}
          />
        )}

        {/* Viewing Past Results — same screen as post-test completion */}
        {view === 'viewingResults' && viewingResultsData && (
          <ErrorBoundary message="Unable to load test results. Please go back and try again.">
          <div style={{
            minHeight: '100vh',
            background: '#F5F5F7',
            backgroundImage: 'radial-gradient(circle at 50% 0%, rgba(255,255,255,0.8) 0%, rgba(245,245,247,0) 100%)',
            padding: '32px',
          }}>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <TestResults
                test={viewingResultsData.test}
                answers={viewingResultsData.answers}
                diagnosticData={viewingResultsData.diagnosticData}
                diagnosticReport={viewingResultsData.diagnosticReport}
                practiceTestResults={practiceTestResults}
                aiDiagnosticState={viewingResultsData.aiDiagnosticState}
                onBack={() => {
                  setView('practiceTests');
                  setViewingResultsData(null);
                }}
                onRetake={() => {
                  setViewingResultsData(null);
                  setSelectedPracticeTest(viewingResultsData.test);
                  setView('takingTest');
                }}
                onReview={() => {
                  setViewingResultsData(prev => ({ ...prev, reviewModule: 0 }));
                  setView('reviewingPastResults');
                }}
                onReviewModule={(moduleIndex) => {
                  setViewingResultsData(prev => ({ ...prev, reviewModule: moduleIndex }));
                  setView('reviewingPastResults');
                }}
                onGoToStudyPlan={() => { setViewingResultsData(null); setView('studyPlan'); }}
                savedStudyPlan={studyPlan}
                user={user}
              />
            </div>
          </div>
          </ErrorBoundary>
        )}

        {/* Full Diagnostic Report — surfaces the deeper analysis that
            TestResults summarizes. Mounted from StudentDashboard's
            onViewFullDiagnosis (closes CEO C1 of the /autoplan review). */}
        {view === 'diagnosticReport' && viewingResultsData && (
          <ErrorBoundary message="Unable to load your diagnostic report. Please go back and try again.">
            <div style={{
              minHeight: '100vh',
              background: '#F5F5F7',
              padding: '32px',
            }}>
              <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                <DiagnosticReport
                  test={viewingResultsData.test}
                  answers={viewingResultsData.answers}
                  diagnosticData={viewingResultsData.diagnosticData}
                  skillProgress={skillProgress}
                  user={user}
                  practiceTestResults={practiceTestResults}
                  completedLessons={completedLessons}
                  practiceProgress={practiceProgress}
                  savedStudyPlan={studyPlan}
                  onStartPractice={(moduleId, sectionName) => {
                    setViewingResultsData(null);
                    setActiveModule(moduleId);
                    setActiveSection(sectionName);
                    setView('practice');
                  }}
                  onStartPracticeTest={() => {
                    setViewingResultsData(null);
                    setView('practiceTests');
                  }}
                  onSaveStudyPlan={handleSaveStudyPlan}
                  onGoToStudyPlan={() => {
                    setViewingResultsData(null);
                    setView('studyPlan');
                  }}
                  onBack={() => {
                    setViewingResultsData(null);
                    setView('studyPlan');
                  }}
                />
              </div>
            </div>
          </ErrorBoundary>
        )}

        {/* Reviewing answers from past results */}
        {view === 'reviewingPastResults' && viewingResultsData && (
          <ErrorBoundary message="Unable to load answer review. Please go back and try again.">
          <PracticeTest
            test={viewingResultsData.test}
            savedProgress={{ answers: viewingResultsData.answers }}
            initialReviewModule={viewingResultsData.reviewModule ?? 0}
            isTimed={false}
            skillProgress={skillProgress}
            user={user}
            practiceTestResults={practiceTestResults}
            completedLessons={completedLessons}
            practiceProgress={practiceProgress}
            answeredQuestionIds={answeredQuestionIds}
            reviewSnapshotMissing={viewingResultsData.snapshotMissing}
            reviewAttemptId={viewingResultsData.attemptId}
            onBack={() => {
              setView('viewingResults');
            }}
          />
          </ErrorBoundary>
        )}

        {/* Taking a Practice Test View */}
        {view === 'takingTest' && selectedPracticeTest && (
          <ErrorBoundary message="Something went wrong during the test. Your progress has been saved.">
          <PracticeTest
            test={selectedPracticeTest}
            isTimed={isTestTimed}
            initialSection={initialTestSection}
            savedProgress={getTestProgress(selectedPracticeTest.id)}
            skillProgress={skillProgress}
            user={user}
            practiceTestResults={practiceTestResults}
            completedLessons={completedLessons}
            practiceProgress={practiceProgress}
            answeredQuestionIds={answeredQuestionIds}
            onSaveStudyPlan={handleSaveStudyPlan}
            onGoToStudyPlan={() => { setSelectedPracticeTest(null); setView('studyPlan'); }}
            onStartPractice={(moduleId, sectionName, opts) => {
              if (opts?.adaptive) { startAdaptivePractice({ enforcedDomain: opts.enforcedDomain, label: opts.label }); setSelectedPracticeTest(null); return; }
              if (opts?.questionIds?.length) {
                startAssignedPractice(opts.questionIds, {
                  label: opts.label,
                  weekNumber: opts.weekNumber,
                });
                setSelectedPracticeTest(null);
                return;
              }
              setActiveModule(moduleId);
              setActiveSection(sectionName);
              startPrescriptivePractice(moduleId, sectionName);
              setSelectedPracticeTest(null);
              setView('practice');
            }}
            onBack={() => {
              setSelectedPracticeTest(null);
              setView('practiceTests');
            }}
            onComplete={() => {
              setSelectedPracticeTest(null);
              setView('practiceTests');
            }}
            onSaveProgress={(progressData) => {
              if (user && selectedPracticeTest) {
                saveTestProgress(selectedPracticeTest.id, progressData);
              }
            }}
            onClearProgress={() => {
              if (user && selectedPracticeTest) {
                clearTestProgress(selectedPracticeTest.id);
              }
            }}
            onSaveResult={(results) => {
              console.log('[App.jsx] onSaveResult called with:', results);
              console.log('[App.jsx] User:', user);
              console.log('[App.jsx] selectedPracticeTest:', selectedPracticeTest);
              if (user) {
                console.log('[App.jsx] Calling recordPracticeTestAttempt...');
                recordPracticeTestAttempt(selectedPracticeTest.id, selectedPracticeTest.title, results);
              } else {
                console.error('[App.jsx] No user - cannot save results!');
              }
            }}
            onSessionComplete={(raw) => {
              // Full-test seam: analytics (test_completed) + the intelligence
              // pipeline (validate prior prediction -> update fingerprint ->
              // generate next prediction -> save). Fire-and-forget; the
              // orchestrator is fully guarded internally.
              const session = buildFullTestSession({ ...raw, userId: user?.uid ?? null });
              dispatchSessionComplete(session, {
                userId: user?.uid ?? null,
                skillProgress,
                practiceTestResults,
                interventionLog,
              }).catch(err => console.error('[App] full-test sessionComplete dispatch error:', err));
            }}
          />
          </ErrorBoundary>
        )}

        {/* Timed Pacing Drill */}
        {view === 'pacingDrill' && pacingSession && (
          <ErrorBoundary message="The pacing drill hit a snag. Your progress is safe — head back to the dashboard.">
            <PacingDrill
              config={pacingSession.config}
              questions={pacingSession.questions}
              user={user}
              onComplete={(summary) => {
                if (user?.uid && summary) {
                  trackPacingDrillDone(user.uid, pacingSession.config.id, summary.accuracy, summary.avgTimePerQuestion);
                }
              }}
              onExit={() => { setPacingSession(null); setView('dashboard'); }}
            />
          </ErrorBoundary>
        )}

        {view === 'studyPlan' && (
          <StudyPlanDashboard
            variant="immersive"
            studyPlan={studyPlan}
            practiceTestResults={practiceTestResults}
            practiceProgress={practiceProgress}
            skillProgress={skillProgress}
            reviewQueue={reviewQueue}
            answeredQuestionIds={answeredQuestionIds}
            predictionLog={predictionLog}
            user={user}
            onStartPractice={(moduleId, sectionName, opts) => {
              if (opts?.adaptive) { startAdaptivePractice({ enforcedDomain: opts.enforcedDomain, label: opts.label }); return; }
              if (opts?.questionIds?.length) {
                startAssignedPractice(opts.questionIds, {
                  label: opts.label,
                  weekNumber: opts.weekNumber,
                  weakness: opts.weakness,
                });
                return;
              }
              setActiveModule(moduleId);
              startPrescriptivePractice(moduleId, sectionName);
              setView('practice');
            }}
            onStartPracticeTest={() => setView('practiceTests')}
            onCompleteActivity={markStudyActivityComplete}
            onUncompleteActivity={unmarkStudyActivityComplete}
            onReviewPastTests={handleOpenPastTestReview}
          />
        )}

        {/* ── Past-Test-Review surfaces (Phases 2-6 of PAST_TEST_REVIEW_PLAN.md) ── */}
        {view === 'pastTestReviewIndex' && (
          <ErrorBoundary message="Couldn't load your test review. Please go back and try again.">
            <div style={{ minHeight: '100vh', background: '#F5F5F7', padding: '32px' }}>
              <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                <PastTestReviewIndex
                  practiceTestResults={practiceTestResults}
                  onSelectTest={handleSelectReviewTest}
                  onTakeTest={() => setView('practiceTests')}
                  onBack={() => setView(pastTestReviewEntryView)}
                />
              </div>
            </div>
          </ErrorBoundary>
        )}

        {view === 'pastTestReviewDetail' && (
          <ErrorBoundary message="Couldn't load this test's review. Please go back and try again.">
            <div style={{ minHeight: '100vh', background: '#F5F5F7', padding: '32px' }}>
              <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                <TestReviewDetail
                  testTitle={reviewBundle?.testTitle || selectedReviewTestId || 'Test review'}
                  attempt={reviewBundle?.attempt}
                  diagnosticReport={reviewBundle?.diagnosticReport}
                  loading={reviewBundleLoading}
                  error={reviewBundleError}
                  snapshotMissing={!!reviewBundle?.snapshotMissing}
                  onSelectItem={handleSelectReviewItem}
                  onRetryWrong={handleRetryWrongFromReview}
                  onBack={() => setView('pastTestReviewIndex')}
                />
              </div>
            </div>
          </ErrorBoundary>
        )}

        {view === 'pastTestReviewItem' && reviewBundle && selectedReviewItem && (() => {
          const { moduleIndex, questionIndex } = selectedReviewItem;
          const snapshotItem =
            reviewBundle.test?.modules?.[moduleIndex]?.questions?.[questionIndex] || null;
          const rawAnswer =
            reviewBundle.answers?.[itemKey(moduleIndex, questionIndex)] ?? null;
          // Legacy attempts (no per-attempt snapshot) feed the sentinel
          // string '__wrong__' here from diagnosticReportLoader's fallback.
          // Don't render that as the user's literal answer.
          const studentAnswer = rawAnswer === '__wrong__' ? null : rawAnswer;
          // Map this item's primary skill to its 6-class error type so the
          // chip matches what TestReviewDetail showed. Only surface for
          // wrong items — the chip is meaningless for correct ones.
          const errorClass = !selectedReviewItem.isCorrect
            ? findErrorClassForItem(
                selectedReviewItem,
                reviewBundle.attempt,
                reviewBundle.diagnosticReport,
              )
            : null;

          // Prev/Next walk the SAME slice the user was viewing in
          // TestReviewDetail. Default to wrong-only (matches the detail
          // view's default filter). Items already arrive sorted by
          // (moduleIndex, questionIndex) from extractItemsFromAttempt.
          const wrongItems = reviewBundle.attempt
            ? extractItemsFromAttempt(reviewBundle.attempt).filter(it => !it.isCorrect)
            : [];
          const currentIdx = wrongItems.findIndex(it => it.key === selectedReviewItem.key);
          const prev = currentIdx > 0 ? wrongItems[currentIdx - 1] : null;
          const next = currentIdx >= 0 && currentIdx < wrongItems.length - 1
            ? wrongItems[currentIdx + 1]
            : null;
          return (
            <ErrorBoundary message="Couldn't render this question. Please go back and try again.">
              <div style={{ minHeight: '100vh', background: '#F5F5F7', padding: '32px' }}>
                <div style={{ maxWidth: '780px', margin: '0 auto' }}>
                  <ReviewItemCard
                    snapshotItem={snapshotItem}
                    studentAnswer={studentAnswer}
                    isCorrect={selectedReviewItem.isCorrect}
                    errorClass={errorClass}
                    timeSpent={selectedReviewItem.timeSpent}
                    testTitle={reviewBundle.testTitle}
                    snapshotMissing={!!reviewBundle.snapshotMissing}
                    onPrev={prev ? () => setSelectedReviewItem(prev) : undefined}
                    onNext={next ? () => setSelectedReviewItem(next) : undefined}
                    onBack={() => setView('pastTestReviewDetail')}
                    onTrySimilar={() => handleTrySimilarFromReview(snapshotItem)}
                  />
                </div>
              </div>
            </ErrorBoundary>
          );
        })()}


        {/* Practice View */}
        {view === 'practice' && activeSection && (() => {
          const isAssigned = practiceState.practiceMode === 'assigned';
          const isAdaptive = practiceState.practiceMode === 'adaptive';
          const isStudyPlanMode = isAssigned || isAdaptive;
          const questions = practiceState.shuffledQuestions.length > 0
            ? practiceState.shuffledQuestions
            : getQuestionsForSection(activeModule, activeSection);
          if (questions.length === 0) return null;
          const currentQuestion = questions[practiceState.currentQuestionIndex];
          const difficultyBadge = currentQuestion?.difficulty ? getDifficultyBadge(currentQuestion.difficulty) : null;

          const studyPlanBackHandler = () => {
            setActiveSection(null);
            setActiveModule(null);
            setShowCalculator(false);
            setView('studyPlan');
          };
          // Past-Test-Review retry drill: route back to the per-test review
          // detail (Phase 5 of PAST_TEST_REVIEW_PLAN.md). The view route is
          // mounted in Phase 6.
          const pastTestReviewBackHandler = () => {
            setActiveSection(null);
            setActiveModule(null);
            setShowCalculator(false);
            setView('pastTestReviewDetail');
          };
          const practiceBankBackHandler = () => {
            setActiveSection(null);
            setActiveModule(null);
            setShowCalculator(false);
            setView('practiceBank');
          };
          // The legacy moduleBackHandler returned to view='learn' (the
          // deleted LearnWorkspace). Practice is now reachable via the
          // study plan, the Practice tab (browse by question type), or,
          // for review-mode drills, the past-test-review detail page.
          const source = practiceState.assignmentMeta?.source;
          const backHandler = practiceState.reviewMode
            ? pastTestReviewBackHandler
            : (source === 'practice-bank' || source === 'practice-bank-domain')
              ? practiceBankBackHandler
              : studyPlanBackHandler;
          const headerTitle = isAdaptive
            ? (practiceState.adaptiveDomainLabel ? `Adaptive Practice — ${practiceState.adaptiveDomainLabel}` : 'Adaptive Practice')
            : isAssigned
              ? (practiceState.assignmentMeta?.label || 'Assigned Practice')
              : activeSection;

          const adaptiveProgress = isAdaptive && practiceState.adaptiveSessionState
            ? `${practiceState.adaptiveSessionState.answered.length + (practiceState.showFeedback ? 0 : 0)}/${practiceState.adaptiveSessionState.sessionLength}`
            : null;

          // Assigned practice uses its own dedicated shell
          if (isAssigned) {
            // Surface pool-exhaustion as a per-skill flag so the shell can
            // disable the Try-Similar button after the bank returns [].
            const cqSkills = Array.isArray(currentQuestion?.skills)
              ? currentQuestion.skills
              : (currentQuestion?.skill ? [currentQuestion.skill] : []);
            const isTrySimilarExhausted = cqSkills.some(s => trySimilarExhausted.has(s));
            return (
              <AssignedPracticeShell
                practiceState={practiceState}
                questions={questions}
                currentQuestion={currentQuestion}
                headerTitle={headerTitle}
                onBack={backHandler}
                onSelectAnswer={handleSelectAnswer}
                onCheckAnswer={handleCheckAnswer}
                onNextQuestion={handleNextQuestion}
                onAdvanceToNextRound={handleAdvanceToNextRound}
                onTrySimilar={handleTrySimilar}
                isTrySimilarExhausted={isTrySimilarExhausted}
                onShowHint={handleShowHint}
                onNavigateToQuestion={handleNavigateToQuestion}
                onToggleCalculator={() => setShowCalculator(!showCalculator)}
                showCalculator={showCalculator}
                onRetry={() => {
                  // Review-mode retries can't use startAssignedPractice
                  // because snapshot question IDs aren't in the drill bank.
                  // Re-launch with the snapshot questions in hand.
                  if (practiceState.reviewMode) {
                    startRetryDrillFromTest({
                      testId: practiceState.assignmentMeta?.sourceTestId,
                      testTitle: practiceState.assignmentMeta?.sourceTestTitle,
                      snapshotQuestions: practiceState.shuffledQuestions,
                    });
                  } else {
                    startAssignedPractice(
                      practiceState.shuffledQuestions.map(q => q.id),
                      practiceState.assignmentMeta,
                    );
                  }
                }}
                getDifficultyBadge={getDifficultyBadge}
                user={user}
                skillProgress={skillProgress}
                practiceTestResults={practiceTestResults}
                studentFingerprint={studentFingerprint}
                interventionLog={interventionLog}
                predictionLog={predictionLog}
              />
            );
          }

          // Adaptive practice uses the adaptive shell
          if (isAdaptive) {
            return (
              <AdaptivePracticeShell
                practiceState={practiceState}
                questions={questions}
                currentQuestion={currentQuestion}
                headerTitle={headerTitle}
                onBack={studyPlanBackHandler}
                onSelectAnswer={handleSelectAnswer}
                onCheckAnswer={handleCheckAnswer}
                onNextQuestion={handleNextQuestion}
                onShowHint={handleShowHint}
                onNavigateToQuestion={handleNavigateToQuestion}
                onToggleCalculator={() => setShowCalculator(!showCalculator)}
                showCalculator={showCalculator}
                onRelaunch={() => startAdaptivePractice({
                  enforcedDomain: practiceState.adaptiveQueueSeed?.enforcedDomain,
                  label: practiceState.adaptiveDomainLabel,
                })}
                getDifficultyBadge={getDifficultyBadge}
                user={user}
              />
            );
          }

          // Results screen
          if (practiceState.isComplete) {
            const answeredEntries = Object.values(practiceState.answers);
            const totalQuestions = questions.length;
            const correctCount = answeredEntries.filter(a => a.correct).length;
            const percentage = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;
            const isGood = percentage >= 80;
            const isOkay = percentage >= 40;

            // Calculate scores by difficulty
            const difficultyStats = { easy: { total: 0, correct: 0 }, medium: { total: 0, correct: 0 }, hard: { total: 0, correct: 0 } };
            questions.forEach(q => {
              const diff = q.difficulty || 'medium';
              difficultyStats[diff].total++;
              if (practiceState.answers[q.id]?.correct) {
                difficultyStats[diff].correct++;
              }
            });

            return (
              <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
                <button
                  onClick={backHandler}
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    fontSize: '14px',
                    color: '#ea580c',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    marginBottom: '48px',
                    fontWeight: '500'
                  }}
                >
                  ← Back to Study Plan
                </button>

                <div style={{
                  width: '120px',
                  height: '120px',
                  borderRadius: '50%',
                  background: isGood ? 'rgba(16, 185, 129, 0.1)' : isOkay ? 'rgba(234, 179, 8, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 32px'
                }}>
                  <span style={{
                    fontSize: '48px',
                    fontWeight: '700',
                    color: isGood ? '#10b981' : isOkay ? '#eab308' : '#ef4444'
                  }}>
                    {correctCount}
                  </span>
                  <span style={{ fontSize: '24px', color: '#6b7280' }}>/{totalQuestions}</span>
                </div>

                <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#1d1d1f', marginBottom: '12px' }}>
                  {isGood ? 'Excellent!' : isOkay ? 'Good effort!' : 'Keep practicing!'}
                </h2>
                <p style={{ fontSize: '16px', color: '#6b7280', marginBottom: '32px' }}>
                  You got {correctCount} out of {totalQuestions} questions correct ({percentage}%)
                </p>

                {/* Difficulty Breakdown */}
                <div style={{
                  background: '#f9fafb',
                  borderRadius: '16px',
                  padding: '24px',
                  marginBottom: '32px',
                  textAlign: 'left'
                }}>
                  <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#6b7280', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    By Difficulty
                  </h3>
                  {[
                    { key: 'easy', label: 'Easy', color: '#10b981', bg: 'rgba(16, 185, 129, 0.12)' },
                    { key: 'medium', label: 'Medium', color: '#f59e0b', bg: 'rgba(245, 158, 11, 0.12)' },
                    { key: 'hard', label: 'Hard', color: '#ef4444', bg: 'rgba(239, 68, 68, 0.12)' }
                  ].map(({ key, label, color, bg }) => {
                    const stats = difficultyStats[key];
                    if (stats.total === 0) return null;
                    const pct = Math.round((stats.correct / stats.total) * 100);
                    return (
                      <div key={key} style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                        <span style={{
                          fontSize: '12px',
                          fontWeight: '600',
                          padding: '4px 10px',
                          borderRadius: '10px',
                          background: bg,
                          color: color,
                          width: '70px',
                          textAlign: 'center'
                        }}>
                          {label}
                        </span>
                        <div style={{ flex: 1, marginLeft: '16px', marginRight: '12px' }}>
                          <div style={{ height: '8px', background: '#e5e7eb', borderRadius: '4px', overflow: 'hidden' }}>
                            <div style={{ height: '100%', width: `${pct}%`, background: color, borderRadius: '4px', transition: 'width 0.3s' }} />
                          </div>
                        </div>
                        <span style={{ fontSize: '14px', fontWeight: '600', color: '#374151', minWidth: '80px', textAlign: 'right' }}>
                          {stats.correct}/{stats.total} ({pct}%)
                        </span>
                      </div>
                    );
                  })}
                </div>

                <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
                  <button
                    onClick={() => startSectionPractice(activeModule, activeSection)}
                    style={{
                      padding: '16px 32px',
                      borderRadius: '12px',
                      border: '2px solid #ea580c',
                      background: '#fff',
                      color: '#ea580c',
                      fontSize: '16px',
                      fontWeight: '600',
                      cursor: 'pointer'
                    }}
                  >
                    Try Again
                  </button>
                  <button
                    onClick={backHandler}
                    style={{
                      padding: '16px 32px',
                      borderRadius: '12px',
                      border: 'none',
                      background: '#ea580c',
                      color: '#fff',
                      fontSize: '16px',
                      fontWeight: '600',
                      cursor: 'pointer'
                    }}
                  >
                    {isStudyPlanMode ? 'Back to Study Plan' : 'Done'}
                  </button>
                </div>
              </div>
            );
          }

          return (
            <>
              {/* Practice Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
                <button
                  onClick={backHandler}
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    fontSize: '14px',
                    color: '#ea580c',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontWeight: '500'
                  }}
                >
                  ← Back
                </button>

                <h1 style={{ fontSize: '20px', fontWeight: '600', color: '#1d1d1f' }}>
                  {headerTitle}
                  {adaptiveProgress && (
                    <span style={{ fontSize: '13px', fontWeight: '500', color: '#6b7280', marginLeft: '8px' }}>
                      {adaptiveProgress}
                    </span>
                  )}
                </h1>

                <button
                  onClick={() => setShowCalculator(!showCalculator)}
                  style={{
                    background: showCalculator ? '#ea580c' : '#1d1d1f',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '10px 16px',
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#fff',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="4" y="2" width="16" height="20" rx="2" />
                    <line x1="8" y1="6" x2="16" y2="6" />
                    <line x1="8" y1="10" x2="8" y2="10.01" />
                    <line x1="12" y1="10" x2="12" y2="10.01" />
                    <line x1="16" y1="10" x2="16" y2="10.01" />
                  </svg>
                  {showCalculator ? 'Hide Calculator' : 'DESMOS Calculator'}
                </button>
              </div>

              {/* Recommended Difficulty Indicator - Prescriptive Mode */}
              {practiceState.practiceMode === 'prescriptive' && practiceState.recommendedDifficulty && (
                <div style={{
                  background: 'linear-gradient(135deg, rgba(234, 88, 12, 0.08) 0%, rgba(234, 88, 12, 0.04) 100%)',
                  padding: '14px 20px',
                  borderRadius: '12px',
                  marginBottom: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  border: '1px solid rgba(234, 88, 12, 0.15)'
                }}>
                  <span style={{ fontSize: '16px' }}>
                    {practiceState.recommendedDifficulty === 'easy' ? '🌱' :
                     practiceState.recommendedDifficulty === 'medium' ? '🎯' : '🔥'}
                  </span>
                  <span style={{ fontSize: '14px', color: '#ea580c', fontWeight: '500' }}>
                    <strong style={{ textTransform: 'capitalize' }}>{practiceState.recommendedDifficulty}</strong> difficulty selected based on your performance
                  </span>
                </div>
              )}

              {/* Full Screen Calculator Modal — Math only; the calculator is
                  not a Reading & Writing affordance on the digital SAT. Gated
                  here too (not just the toggle button) so a calculator left
                  open during a math drill doesn't carry into an R&W item. */}
              {showCalculator && currentQuestion?.section !== 'rw' && (
                <div style={{
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'rgba(0,0,0,0.92)',
                  zIndex: 9999,
                  display: 'flex',
                  padding: '24px',
                  gap: '24px'
                }}>
                  {/* Left: Question Panel (50%) */}
                  <div style={{
                    flex: '1 1 50%',
                    background: '#fff',
                    borderRadius: '20px',
                    padding: '40px',
                    overflow: 'auto',
                    display: 'flex',
                    flexDirection: 'column'
                  }}>
                    {/* Modal Progress indicator */}
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      marginBottom: '32px'
                    }}>
                      {questions.map((_, idx) => (
                        <div
                          key={idx}
                          style={{
                            flex: 1,
                            height: '6px',
                            borderRadius: '3px',
                            background: practiceState.answers[questions[idx]?.id]
                              ? (practiceState.answers[questions[idx].id].correct ? '#10b981' : '#ef4444')
                              : idx === practiceState.currentQuestionIndex
                                ? '#ea580c'
                                : '#e5e5e5'
                          }}
                        />
                      ))}
                    </div>

                    {/* Modal Question number and difficulty */}
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '20px'
                    }}>
                      <span style={{
                        fontSize: '15px',
                        fontWeight: '600',
                        color: '#6b7280'
                      }}>
                        Question {practiceState.currentQuestionIndex + 1} of {questions.length}
                      </span>
                      {difficultyBadge && (
                        <span style={{
                          fontSize: '13px',
                          fontWeight: '600',
                          padding: '5px 12px',
                          borderRadius: '12px',
                          background: difficultyBadge.color === '#10b981' ? 'rgba(16, 185, 129, 0.12)'
                            : difficultyBadge.color === '#f59e0b' ? 'rgba(245, 158, 11, 0.12)'
                            : 'rgba(239, 68, 68, 0.12)',
                          color: difficultyBadge.color
                        }}>
                          {difficultyBadge.label}
                        </span>
                      )}
                    </div>

                    {/* Question Diagram (if present) */}
                    {currentQuestion.diagram && (
                      <div style={{
                        marginBottom: '24px',
                        display: 'flex',
                        justifyContent: 'center'
                      }}>
                        <QuestionDiagram
                          type={currentQuestion.diagram.type}
                          params={currentQuestion.diagram.params}
                        />
                      </div>
                    )}

                    {/* Modal Question text */}
                    <h2 style={{
                      fontSize: '26px',
                      fontWeight: '600',
                      color: '#1d1d1f',
                      lineHeight: 1.4,
                      marginBottom: currentQuestion.questionFormula ? '16px' : '36px',
                      whiteSpace: 'pre-line'
                    }}>
                      {currentQuestion.question}
                    </h2>

                    {/* Question Formula (if present) */}
                    {currentQuestion.questionFormula && (
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '36px',
                        fontSize: '22px',
                        fontFamily: 'Georgia, serif',
                        fontStyle: 'italic',
                        color: '#1d1d1f'
                      }}>
                        {currentQuestion.questionFormula.text}
                        {currentQuestion.questionFormula.fraction && (
                          <span style={{
                            display: 'inline-flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            marginLeft: currentQuestion.questionFormula.text ? '4px' : '0'
                          }}>
                            <span style={{ padding: '0 8px' }}>{currentQuestion.questionFormula.fraction.numerator}</span>
                            <span style={{
                              width: '100%',
                              height: '2px',
                              background: '#1d1d1f',
                              margin: '3px 0'
                            }} />
                            <span style={{ padding: '0 8px' }}>{currentQuestion.questionFormula.fraction.denominator}</span>
                          </span>
                        )}
                        {currentQuestion.questionFormula.textAfter && (
                          <span style={{ marginLeft: '4px' }}>{currentQuestion.questionFormula.textAfter}</span>
                        )}
                      </div>
                    )}

                    {/* Modal Answer choices */}
                    <div style={{ marginBottom: '28px', flex: 1 }}>
                      {currentQuestion.choices.map((choice) => {
                        const isSelected = practiceState.selectedAnswer === choice.id;
                        const isCorrect = choice.id === currentQuestion.correctAnswer;
                        const showResult = practiceState.showFeedback;

                        let borderColor = 'rgba(0,0,0,0.1)';
                        let bgColor = '#fff';

                        if (showResult) {
                          if (isCorrect) {
                            borderColor = '#10b981';
                            bgColor = 'rgba(16, 185, 129, 0.08)';
                          } else if (isSelected && !isCorrect) {
                            borderColor = '#ef4444';
                            bgColor = 'rgba(239, 68, 68, 0.08)';
                          }
                        } else if (isSelected) {
                          borderColor = '#ea580c';
                          bgColor = 'rgba(234, 88, 12, 0.05)';
                        }

                        return (
                          <div
                            key={choice.id}
                            onClick={() => handleSelectAnswer(choice.id)}
                            style={{
                              padding: '18px 24px',
                              borderRadius: '14px',
                              border: `2px solid ${borderColor}`,
                              background: bgColor,
                              cursor: practiceState.showFeedback ? 'default' : 'pointer',
                              marginBottom: '14px',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '14px',
                              transition: 'all 0.15s ease'
                            }}
                          >
                            <span style={{
                              width: '32px',
                              height: '32px',
                              borderRadius: '8px',
                              background: showResult
                                ? (isCorrect ? '#10b981' : isSelected ? '#ef4444' : '#f5f5f7')
                                : (isSelected ? '#ea580c' : '#f5f5f7'),
                              color: (showResult && (isCorrect || isSelected)) || isSelected ? '#fff' : '#6b7280',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              fontSize: '15px',
                              fontWeight: '600'
                            }}>
                              {showResult && isCorrect ? '✓' : showResult && isSelected && !isCorrect ? '✗' : choice.id}
                            </span>
                            <span style={{
                              fontSize: '18px',
                              color: '#1d1d1f',
                              display: 'flex',
                              alignItems: 'center'
                            }}>
                              {choice.text}
                              {choice.fraction && (
                                <span style={{
                                  display: 'inline-flex',
                                  flexDirection: 'column',
                                  alignItems: 'center',
                                  marginLeft: choice.text ? '4px' : '0',
                                  fontFamily: 'Georgia, serif',
                                  fontStyle: 'italic'
                                }}>
                                  <span style={{ padding: '0 4px' }}>{choice.fraction.numerator}</span>
                                  <span style={{
                                    width: '100%',
                                    height: '1px',
                                    background: '#1d1d1f',
                                    margin: '2px 0'
                                  }} />
                                  <span style={{ padding: '0 4px' }}>{choice.fraction.denominator}</span>
                                </span>
                              )}
                              {choice.textAfter && (
                                <span style={{ marginLeft: '4px' }}>{choice.textAfter}</span>
                              )}
                            </span>
                          </div>
                        );
                      })}
                    </div>

                    {/* Modal Hint Section */}
                    {currentQuestion.hint && !practiceState.showFeedback && (
                      <div style={{ marginBottom: '16px' }}>
                        {!practiceState.showHint ? (
                          <button
                            onClick={handleShowHint}
                            style={{
                              background: 'none',
                              border: '1px solid #d1d5db',
                              borderRadius: '8px',
                              padding: '12px 18px',
                              fontSize: '15px',
                              fontWeight: '500',
                              color: '#6b7280',
                              cursor: 'pointer',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '8px'
                            }}
                          >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <circle cx="12" cy="12" r="10" />
                              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                              <line x1="12" y1="17" x2="12.01" y2="17" />
                            </svg>
                            Need a hint?
                          </button>
                        ) : (
                          <div style={{
                            background: 'rgba(59, 130, 246, 0.08)',
                            borderRadius: '14px',
                            padding: '18px 22px',
                            borderLeft: '4px solid #3b82f6'
                          }}>
                            <div style={{
                              fontSize: '14px',
                              fontWeight: '600',
                              color: '#3b82f6',
                              marginBottom: '10px',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '6px'
                            }}>
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="12" cy="12" r="10" />
                                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                                <line x1="12" y1="17" x2="12.01" y2="17" />
                              </svg>
                              Hint
                            </div>
                            <p style={{
                              fontSize: '16px',
                              color: '#1d1d1f',
                              lineHeight: 1.5,
                              margin: 0
                            }}>
                              {currentQuestion.hint}
                            </p>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Modal Ask Perform for Practice Questions */}
                    <div style={{ marginBottom: '16px' }}>
                      <AiTutorButton
                        onClick={() => setShowAiTutor(!showAiTutor)}
                        isOpen={showAiTutor}
                      />
                      <AiTutorChat
                        isOpen={showAiTutor}
                        onClose={() => setShowAiTutor(false)}
                        moduleId={activeModule}
                        lessonId={`practice-${activeSection}-q${practiceState.currentQuestionIndex}`}
                        lessonTitle={`Practice: ${activeSection}`}
                        isVideoLesson={false}
                        isPracticeQuestion={true}
                        practiceContext={{
                          question: currentQuestion.question,
                          choices: currentQuestion.choices,
                          hint: currentQuestion.hint,
                          answerRevealed: practiceState.showFeedback,
                          correctAnswer: practiceState.showFeedback ? currentQuestion.correctAnswer : null,
                          explanation: practiceState.showFeedback ? currentQuestion.explanation : null,
                          skills: currentQuestion.skills || (currentQuestion.skill ? [currentQuestion.skill] : []),
                          // R&W stimulus + classification (undefined for math items → tutor stays math)
                          section: currentQuestion.section || 'math',
                          domain: currentQuestion.domain,
                          passage: currentQuestion.passage,
                          passages: currentQuestion.passages,
                          studentNotes: currentQuestion.studentNotes,
                          questionTable: currentQuestion.questionTable
                        }}
                      />
                    </div>

                    {/* Modal Check Answer / Feedback */}
                    {!practiceState.showFeedback ? (
                      <button
                        onClick={() => handleCheckAnswer(currentQuestion)}
                        disabled={!practiceState.selectedAnswer}
                        style={{
                          width: '100%',
                          padding: '18px',
                          borderRadius: '14px',
                          border: 'none',
                          background: practiceState.selectedAnswer ? '#ea580c' : '#e5e5e5',
                          color: '#fff',
                          fontSize: '18px',
                          fontWeight: '600',
                          cursor: practiceState.selectedAnswer ? 'pointer' : 'default'
                        }}
                      >
                        Check Answer
                      </button>
                    ) : (
                      <>
                        {/* Modal Feedback panel */}
                        <div style={{
                          background: practiceState.answers[currentQuestion.id]?.correct
                            ? 'rgba(16, 185, 129, 0.08)'
                            : 'rgba(239, 68, 68, 0.08)',
                          borderRadius: '14px',
                          padding: '24px',
                          marginBottom: '20px',
                          borderLeft: `4px solid ${practiceState.answers[currentQuestion.id]?.correct ? '#10b981' : '#ef4444'}`
                        }}>
                          <div style={{
                            fontSize: '16px',
                            fontWeight: '600',
                            color: practiceState.answers[currentQuestion.id]?.correct ? '#10b981' : '#ef4444',
                            marginBottom: '12px'
                          }}>
                            {practiceState.answers[currentQuestion.id]?.correct ? 'Correct!' : 'Incorrect'}
                          </div>
                          <SolutionExplanation explanation={currentQuestion.explanation} />
                        </div>

                        {/* Modal Next button */}
                        <button
                          onClick={() => handleNextQuestion(questions)}
                          style={{
                            width: '100%',
                            padding: '18px',
                            borderRadius: '14px',
                            border: 'none',
                            background: '#ea580c',
                            color: '#fff',
                            fontSize: '18px',
                            fontWeight: '600',
                            cursor: 'pointer'
                          }}
                        >
                          {practiceState.currentQuestionIndex < questions.length - 1 ? 'Next Question' : 'See Results'}
                        </button>
                      </>
                    )}
                  </div>

                  {/* Right: Calculator (50%) */}
                  <div style={{
                    flex: '1 1 50%',
                    background: '#fff',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column'
                  }}>
                    {/* Calculator Header */}
                    <div style={{
                      padding: '16px 24px',
                      borderBottom: '1px solid rgba(0,0,0,0.08)',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      background: '#1d1d1f'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
                          <rect x="4" y="2" width="16" height="20" rx="2" />
                          <line x1="8" y1="6" x2="16" y2="6" />
                          <line x1="8" y1="10" x2="8" y2="10.01" />
                          <line x1="12" y1="10" x2="12" y2="10.01" />
                          <line x1="16" y1="10" x2="16" y2="10.01" />
                          <line x1="8" y1="14" x2="8" y2="14.01" />
                          <line x1="12" y1="14" x2="12" y2="14.01" />
                          <line x1="16" y1="14" x2="16" y2="14.01" />
                        </svg>
                        <span style={{ fontWeight: '600', color: '#fff', fontSize: '16px' }}>
                          DESMOS Calculator
                        </span>
                      </div>
                      <button
                        onClick={() => setShowCalculator(false)}
                        style={{
                          background: 'rgba(255,255,255,0.15)',
                          border: 'none',
                          borderRadius: '8px',
                          padding: '10px 16px',
                          fontSize: '14px',
                          fontWeight: '600',
                          color: '#fff',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px'
                        }}
                      >
                        <span style={{ fontSize: '18px' }}>×</span>
                        Close (ESC)
                      </button>
                    </div>

                    {/* Calculator iframe */}
                    <iframe
                      src="https://www.desmos.com/calculator"
                      title="DESMOS Calculator"
                      style={{
                        flex: 1,
                        width: '100%',
                        border: 'none'
                      }}
                    />
                  </div>
                </div>
              )}

              {/* Regular Question Panel (when calculator is closed) */}
              <div style={{ display: showCalculator ? 'none' : 'block', maxWidth: '700px', margin: '0 auto' }}>
                {/* Progress indicator */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '32px'
                }}>
                  {questions.map((_, idx) => (
                    <div
                      key={idx}
                      style={{
                        flex: 1,
                        height: '4px',
                        borderRadius: '2px',
                        background: practiceState.answers[questions[idx]?.id]
                          ? (practiceState.answers[questions[idx].id].correct ? '#10b981' : '#ef4444')
                          : idx === practiceState.currentQuestionIndex
                            ? '#ea580c'
                            : '#e5e5e5'
                      }}
                    />
                  ))}
                </div>

                {/* Question number and difficulty */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '16px'
                }}>
                  <span style={{
                    fontSize: '13px',
                    fontWeight: '600',
                    color: '#6b7280'
                  }}>
                    Question {practiceState.currentQuestionIndex + 1} of {questions.length}
                  </span>
                  {difficultyBadge && (
                    <span style={{
                      fontSize: '12px',
                      fontWeight: '600',
                      padding: '4px 10px',
                      borderRadius: '12px',
                      background: difficultyBadge.color === '#10b981' ? 'rgba(16, 185, 129, 0.12)'
                        : difficultyBadge.color === '#f59e0b' ? 'rgba(245, 158, 11, 0.12)'
                        : 'rgba(239, 68, 68, 0.12)',
                      color: difficultyBadge.color
                    }}>
                      {difficultyBadge.label}
                    </span>
                  )}
                </div>

                {/* Question Diagram (if present) */}
                {currentQuestion.diagram && (
                  <div style={{
                    marginBottom: '20px',
                    display: 'flex',
                    justifyContent: 'center'
                  }}>
                    <QuestionDiagram
                      type={currentQuestion.diagram.type}
                      params={currentQuestion.diagram.params}
                    />
                  </div>
                )}

                {/* Question text */}
                <h2 style={{
                  fontSize: '22px',
                  fontWeight: '600',
                  color: '#1d1d1f',
                  lineHeight: 1.4,
                  marginBottom: currentQuestion.questionFormula ? '14px' : '32px',
                  whiteSpace: 'pre-line'
                }}>
                  {currentQuestion.question}
                </h2>

                {/* Question Formula (if present) */}
                {currentQuestion.questionFormula && (
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '32px',
                    fontSize: '20px',
                    fontFamily: 'Georgia, serif',
                    fontStyle: 'italic',
                    color: '#1d1d1f'
                  }}>
                    {currentQuestion.questionFormula.text}
                    {currentQuestion.questionFormula.fraction && (
                      <span style={{
                        display: 'inline-flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        marginLeft: currentQuestion.questionFormula.text ? '4px' : '0'
                      }}>
                        <span style={{ padding: '0 6px' }}>{currentQuestion.questionFormula.fraction.numerator}</span>
                        <span style={{
                          width: '100%',
                          height: '2px',
                          background: '#1d1d1f',
                          margin: '2px 0'
                        }} />
                        <span style={{ padding: '0 6px' }}>{currentQuestion.questionFormula.fraction.denominator}</span>
                      </span>
                    )}
                    {currentQuestion.questionFormula.textAfter && (
                      <span style={{ marginLeft: '4px' }}>{currentQuestion.questionFormula.textAfter}</span>
                    )}
                  </div>
                )}

                {/* Answer choices */}
                <div style={{ marginBottom: '24px' }}>
                  {currentQuestion.choices.map((choice) => {
                    const isSelected = practiceState.selectedAnswer === choice.id;
                    const isCorrect = choice.id === currentQuestion.correctAnswer;
                    const showResult = practiceState.showFeedback;

                    let borderColor = 'rgba(0,0,0,0.08)';
                    let bgColor = '#fff';

                    if (showResult) {
                      if (isCorrect) {
                        borderColor = '#10b981';
                        bgColor = 'rgba(16, 185, 129, 0.08)';
                      } else if (isSelected && !isCorrect) {
                        borderColor = '#ef4444';
                        bgColor = 'rgba(239, 68, 68, 0.08)';
                      }
                    } else if (isSelected) {
                      borderColor = '#ea580c';
                      bgColor = 'rgba(234, 88, 12, 0.05)';
                    }

                    return (
                      <div
                        key={choice.id}
                        onClick={() => handleSelectAnswer(choice.id)}
                        style={{
                          padding: '16px 20px',
                          borderRadius: '12px',
                          border: `2px solid ${borderColor}`,
                          background: bgColor,
                          cursor: practiceState.showFeedback ? 'default' : 'pointer',
                          marginBottom: '12px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '12px',
                          transition: 'all 0.15s ease'
                        }}
                      >
                        <span style={{
                          width: '28px',
                          height: '28px',
                          borderRadius: '6px',
                          background: showResult
                            ? (isCorrect ? '#10b981' : isSelected ? '#ef4444' : '#f5f5f7')
                            : (isSelected ? '#ea580c' : '#f5f5f7'),
                          color: (showResult && (isCorrect || isSelected)) || isSelected ? '#fff' : '#6b7280',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '14px',
                          fontWeight: '600'
                        }}>
                          {showResult && isCorrect ? '✓' : showResult && isSelected && !isCorrect ? '✗' : choice.id}
                        </span>
                        <span style={{
                          fontSize: '16px',
                          color: '#1d1d1f',
                          display: 'flex',
                          alignItems: 'center'
                        }}>
                          {choice.text}
                          {choice.fraction && (
                            <span style={{
                              display: 'inline-flex',
                              flexDirection: 'column',
                              alignItems: 'center',
                              marginLeft: choice.text ? '4px' : '0',
                              fontFamily: 'Georgia, serif',
                              fontStyle: 'italic'
                            }}>
                              <span style={{ padding: '0 4px' }}>{choice.fraction.numerator}</span>
                              <span style={{
                                width: '100%',
                                height: '1px',
                                background: '#1d1d1f',
                                margin: '2px 0'
                              }} />
                              <span style={{ padding: '0 4px' }}>{choice.fraction.denominator}</span>
                            </span>
                          )}
                          {choice.textAfter && (
                            <span style={{ marginLeft: '4px' }}>{choice.textAfter}</span>
                          )}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Hint Section */}
                {currentQuestion.hint && !practiceState.showFeedback && (
                  <div style={{ marginBottom: '16px' }}>
                    {!practiceState.showHint ? (
                      <button
                        onClick={handleShowHint}
                        style={{
                          background: 'none',
                          border: '1px solid #d1d5db',
                          borderRadius: '8px',
                          padding: '10px 16px',
                          fontSize: '14px',
                          fontWeight: '500',
                          color: '#6b7280',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px'
                        }}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="10" />
                          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                          <line x1="12" y1="17" x2="12.01" y2="17" />
                        </svg>
                        Need a hint?
                      </button>
                    ) : (
                      <div style={{
                        background: 'rgba(59, 130, 246, 0.08)',
                        borderRadius: '12px',
                        padding: '16px 20px',
                        borderLeft: '4px solid #3b82f6'
                      }}>
                        <div style={{
                          fontSize: '13px',
                          fontWeight: '600',
                          color: '#3b82f6',
                          marginBottom: '8px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px'
                        }}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10" />
                            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                            <line x1="12" y1="17" x2="12.01" y2="17" />
                          </svg>
                          Hint
                        </div>
                        <p style={{
                          fontSize: '14px',
                          color: '#1d1d1f',
                          lineHeight: 1.5,
                          margin: 0
                        }}>
                          {currentQuestion.hint}
                        </p>
                      </div>
                    )}
                  </div>
                )}

                {/* Ask Perform for Practice Questions */}
                <div style={{ marginBottom: '16px' }}>
                  <AiTutorButton
                    onClick={() => setShowAiTutor(!showAiTutor)}
                    isOpen={showAiTutor}
                  />
                  <AiTutorChat
                    isOpen={showAiTutor}
                    onClose={() => setShowAiTutor(false)}
                    moduleId={activeModule}
                    lessonId={`practice-${activeSection}-q${practiceState.currentQuestionIndex}`}
                    lessonTitle={`Practice: ${activeSection}`}
                    isVideoLesson={false}
                    isPracticeQuestion={true}
                    practiceContext={{
                      question: currentQuestion.question,
                      choices: currentQuestion.choices,
                      hint: currentQuestion.hint,
                      answerRevealed: practiceState.showFeedback,
                      correctAnswer: practiceState.showFeedback ? currentQuestion.correctAnswer : null,
                      explanation: practiceState.showFeedback ? currentQuestion.explanation : null,
                      skills: currentQuestion.skills || (currentQuestion.skill ? [currentQuestion.skill] : []),
                      // R&W stimulus + classification (undefined for math items → tutor stays math)
                      section: currentQuestion.section || 'math',
                      domain: currentQuestion.domain,
                      passage: currentQuestion.passage,
                      passages: currentQuestion.passages,
                      studentNotes: currentQuestion.studentNotes,
                      questionTable: currentQuestion.questionTable
                    }}
                  />
                </div>

                {/* Check Answer / Feedback */}
                {!practiceState.showFeedback ? (
                  <button
                    onClick={() => handleCheckAnswer(currentQuestion)}
                    disabled={!practiceState.selectedAnswer}
                    style={{
                      width: '100%',
                      padding: '16px',
                      borderRadius: '12px',
                      border: 'none',
                      background: practiceState.selectedAnswer ? '#ea580c' : '#e5e5e5',
                      color: '#fff',
                      fontSize: '16px',
                      fontWeight: '600',
                      cursor: practiceState.selectedAnswer ? 'pointer' : 'default'
                    }}
                  >
                    Check Answer
                  </button>
                ) : (
                  <>
                    {/* Feedback panel */}
                    <div style={{
                      background: practiceState.answers[currentQuestion.id]?.correct
                        ? 'rgba(16, 185, 129, 0.08)'
                        : 'rgba(239, 68, 68, 0.08)',
                      borderRadius: '12px',
                      padding: '24px',
                      marginBottom: '24px',
                      borderLeft: `4px solid ${practiceState.answers[currentQuestion.id]?.correct ? '#10b981' : '#ef4444'}`
                    }}>
                      <div style={{
                        fontSize: '14px',
                        fontWeight: '600',
                        color: practiceState.answers[currentQuestion.id]?.correct ? '#10b981' : '#ef4444',
                        marginBottom: '12px'
                      }}>
                        {practiceState.answers[currentQuestion.id]?.correct ? 'Correct!' : 'Incorrect'}
                      </div>
                      <SolutionExplanation explanation={currentQuestion.explanation} />
                    </div>

                    {/* Next button */}
                    <button
                      onClick={() => handleNextQuestion(questions)}
                      style={{
                        width: '100%',
                        padding: '16px',
                        borderRadius: '12px',
                        border: 'none',
                        background: '#ea580c',
                        color: '#fff',
                        fontSize: '16px',
                        fontWeight: '600',
                        cursor: 'pointer'
                      }}
                    >
                      {practiceState.currentQuestionIndex < questions.length - 1 ? 'Next Question' : 'See Results'}
                    </button>
                  </>
                )}
              </div>
            </>
          );
        })()}

      </div>

      </AppShell>
    </div>
          ) : (
            <Navigate to="/" replace />
          )
        } />
      </Routes>
    </BrowserRouter>
    </ErrorBoundary>
  );
};

export default PerformSAT;
