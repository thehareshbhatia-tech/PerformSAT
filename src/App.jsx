import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './hooks/useAuth';
import { useProgress } from './hooks/useProgress';
import { useAnalytics } from './hooks/useAnalytics';
import { useFeatureFlag } from './hooks/useFeatureFlag';
import {
  dispatchSessionComplete,
  buildFullTestSession,
  buildDrillSession,
  buildReviewSession,
} from './services/sessionComplete';
import LandingPage from './components/LandingPage';
import PrivacyPolicy from './components/legal/PrivacyPolicy';
import TermsOfService from './components/legal/TermsOfService';
import PushOptInCard from './components/PushOptInCard';
import { runDiagnostic } from './services/diagnosticEngine';
import { getDifficultyBadge } from './services/adaptiveService';
import { addToReviewQueue } from './services/reviewService';
import { calculateOptimalDifficulty } from './services/recommendationService';
import AppShell from './components/ui/AppShell';
import Wordmark from './components/ui/Wordmark';
import ErrorBoundary from './components/ui/ErrorBoundary';
import Skeleton, { CardSkeleton } from './components/ui/Skeleton';
import { allLessons } from './data/lessons';
import ReviewItemCard from './components/PastTestReview/ReviewItemCard';
import { Toaster, showToast } from './components/ui/Toaster';
import CommandPalette from './components/ui/CommandPalette';
import { ChartBarIcon, PlayIcon, ClipboardIcon, TargetIcon, CalendarIcon, BrainIcon } from './design/icons';
import { buildRounds, classifyRoundBoundary, findRoundIndexForQuestion } from './services/buildRounds';
import { restoreAnswerStateForQuestion, buildResumableDrill } from './services/practiceNavigation';
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
// Corpus access (Stage 2b of the bundle-split plan): the question banks,
// practice-test bundles, and the two corpus-coupled services load as their
// own chunks via these memoized dynamic-import loaders. Handlers `await`
// them; the idle pre-warm effect below makes that await a cache hit.
import {
  loadMathBank,
  loadTopicQuestions,
  loadPracticeTests,
  loadPracticeRouting,
  loadTrySimilar,
  preloadCorpus,
} from './data/corpusLoader';
import {
  resolveReviewItemToQuestion,
  reviewDisplaySection,
  BANK_REVIEW_MODULE,
} from './services/reviewQueueResolve';
import { selectPacingQuestions } from './services/pacingService';
import { trackPacingDrillDone, trackReengagementOpened } from './services/analyticsService';
import { buildDailySession } from './services/dailyReviewEngine';
import { getReadyAiDiagnostic, loadAttemptSnapshot } from './services/practiceTestService';
import { reprioritizePlan } from './services/adaptivePlanService';
import { findMatchingPlanActivity } from './services/selectors/planActivityMatch';
import { buildLongitudinalEvidence } from './services/studyPlanMerger';
import { generateStudyPlan as generateAIPlan } from './services/studyPlanService';
import { logInfo, logWarn } from './utils/log';

// ── Code-split view components (Stage 1 of the bundle-split plan) ──────────
// Each heavy view loads as its own webpack chunk on first render. The single
// Suspense boundary inside #main-content (below) shows a skeleton while a
// chunk fetches; key={view} on that div remounts the boundary per navigation.
// KEEP EAGER: LandingPage, PrivacyPolicy/TermsOfService (render via early
// return BEFORE the router), AppShell, ErrorBoundary, Toaster, CommandPalette,
// PushOptInCard, ReviewItemCard, icons.
const StudentDashboard = React.lazy(() => import('./components/StudentDashboard'));
const AiTutorChat = React.lazy(() => import('./components/AiTutorChat'));
const PracticeTest = React.lazy(() => import('./components/PracticeTest'));
const PracticeTestList = React.lazy(() => import('./components/PracticeTestList'));
const TestResults = React.lazy(() => import('./components/TestResults'));
const Onboarding = React.lazy(() => import('./components/Onboarding'));
// On-ramp check-in: lazy chunk carries the sampler + diagnosis pipeline
// (banks, studyPlanGenerator) — never import it statically (bundle guard).
const MiniDiagnosticShell = React.lazy(() => import('./components/MiniDiagnostic/MiniDiagnosticShell'));
const Profile = React.lazy(() => import('./components/Profile'));
const StudyPlanDashboard = React.lazy(() => import('./components/StudyPlanDashboard'));
const AdaptivePracticeShell = React.lazy(() => import('./components/AdaptivePracticeShell'));
const AssignedPracticeShell = React.lazy(() => import('./components/AssignedPracticeShell'));
const PacingDrill = React.lazy(() => import('./components/PacingDrill'));
const PracticeBank = React.lazy(() => import('./components/PracticeBank'));
const DiagnosticReport = React.lazy(() => import('./components/DiagnosticReport'));
const LearnWorkspace = React.lazy(() => import('./components/learn/LearnWorkspace'));
const LessonBrowser = React.lazy(() => import('./components/LessonBrowser'));
const PastTestReviewIndex = React.lazy(() => import('./components/PastTestReview/PastTestReviewIndex'));
const TestReviewDetail = React.lazy(() => import('./components/PastTestReview/TestReviewDetail'));

// Text-free skeleton shown while a lazy view chunk loads. Composed from the
// shared Skeleton primitives. Renders INSIDE #main-content, so the takingTest
// scroll-lock (height/overflow on the wrapper div) still applies around it.
const ViewChunkFallback = () => (
  <div style={{
    maxWidth: '960px',
    margin: '0 auto',
    padding: '32px',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  }}>
    <Skeleton width="38%" height="28px" />
    <CardSkeleton lines={3} />
    <CardSkeleton lines={2} />
  </div>
);

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
  // On-ramp (signup mini-diagnostic) state. `onRampActive` is tri-state:
  // null = eligibility not yet decided, true = flow mounted instead of the
  // app shell, false = dismissed for this session. The activation effect
  // below decides ONCE per session so mid-flow profile stamps
  // (onboardingCompletedAt) can't unmount the results screen.
  const ffOnRamp = useFeatureFlag('onRamp');
  const [onRampActive, setOnRampActive] = useState(null);
  const [onRampStage, setOnRampStage] = useState('wizard'); // 'wizard' | 'check-in'
  // Active pacing drill: { config, questions }. Set by onStartPacing, rendered at view==='pacingDrill'.
  const [pacingSession, setPacingSession] = useState(null);
  // Which view a pacing drill was launched from, so onExit returns there
  // instead of always dumping the student on the Dashboard (a plan-launched
  // drill should return to the plan).
  const [pacingDrillEntryView, setPacingDrillEntryView] = useState('dashboard');
  // StudentDashboard's active tab, lifted here so it persists while the
  // dashboard unmounts during a pacing drill / past-test review and remounts
  // on return — a flow launched from the inline Study Plan tab then comes back
  // to that tab rather than the Dashboard tab.
  const [dashboardTab, setDashboardTab] = useState('dashboard');
  const [selectedPracticeTest, setSelectedPracticeTest] = useState(null);
  const [isTestTimed, setIsTestTimed] = useState(true);
  // 'reading-writing' | 'math' | null. When set, PracticeTest jumps to that
  // section's first module on fresh start (instead of always starting at M1).
  const [initialTestSection, setInitialTestSection] = useState(null);
  const [viewingResultsData, setViewingResultsData] = useState(null); // { test, answers, diagnosticData, diagnosticReport }

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
    practiceMode: 'standard' // pre-launch default; every live launcher sets 'assigned' | 'adaptive'
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
  // True when the per-test review was opened by deep-linking from the plan's
  // Review Queue (vs browsing the index). Controls the detail view's back
  // target: deep-linked → back to the plan; browsed → back to the index.
  const [reviewEnteredViaDeepLink, setReviewEnteredViaDeepLink] = useState(false);
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

  const { user, loading, logout, updateTestDate, updateTargetScore, updateCurrentScore, updateTargetSchools, updateProfilePhoto, updateFirstName, markOnboardingComplete, markOnboardingSkipped } = useAuth();
  const { loading: progressLoading, hydrated: progressHydrated, completedLessons, practiceProgress, drillDays, reviewQueue, reviewStreak, skillProgress, answeredQuestionIds, practiceTestResults, inProgressTests, studyPlan, studyPlanMeta, studyPlanArtifact, predictionLog, interventionLog, studentFingerprint, miniDiagnostic, bankPractice, activeDrill, recordDrillSkillAttempts, recordPracticedDay, recordBankPractice, saveActiveDrill, clearActiveDrill, getDueCount, getReviewStatistics, getSkillDiagnosticSummary, getSkillBreakdown, recordPracticeTestAttempt, getTestBestScore, getTestAttempts, saveTestProgress, clearTestProgress, resetPracticeTest, getTestProgress, hasTestProgress, saveMiniDiagnostic, saveStudyPlan, markStudyActivityComplete, unmarkStudyActivityComplete, markLessonComplete, isLessonCompleted, getModuleProgress, lastSaveStatus, retryLastSave } = useProgress(user?.uid);

  // Mount the analytics session lifecycle (session_start / session_end +
  // beforeunload flush). Previously orphaned — the hook existed but was never
  // mounted, so no engagement events ever fired. Completion events are fired
  // separately by the onSessionComplete seam (see dispatchSessionComplete).
  useAnalytics(user?.uid);

  // ── Live plan reprioritization (adaptivity audit item 3) ─────────────────
  // reprioritizePlan used to run ONLY in the post-test save path, so its
  // improved/declined/triage read never moved between tests. It is pure and
  // cheap (a few O(n) passes over skillProgress / test attempts / the review
  // queue — no Firestore, no corpus), so we recompute it render-side: the
  // memo re-fires when the study-plan view loads with fresh data and after
  // every drill completion (recordDrillSkillAttempts → Firestore snapshot →
  // new skillProgress identity). Falls back to the persisted overlay (now
  // grafted through artifact hydration — see useProgress) when live
  // computation has nothing to say.
  const adaptiveOverlay = useMemo(() => {
    if (!studyPlan?.weeks?.length) return null;
    try {
      const live = reprioritizePlan(studyPlan, skillProgress, practiceTestResults, reviewQueue, user?.testDate);
      return live?.adaptiveOverlay || studyPlan.adaptiveOverlay || null;
    } catch (err) {
      logWarn('adaptivePlan', 'live reprioritization failed', err?.message);
      return studyPlan.adaptiveOverlay || null;
    }
  }, [studyPlan, skillProgress, practiceTestResults, reviewQueue, user?.testDate]);

  // Pre-warm the heaviest view chunks AND the corpus chunks (banks, practice
  // tests, routing services — see data/corpusLoader.js) once auth resolves so
  // the first post-login navigation and the first drill/test launch are cache
  // hits instead of a skeleton + fetch. requestIdleCallback keeps the fetches
  // off the critical path; the setTimeout(1500) branch covers Safari (no rIC).
  // Dynamic import() is idempotent — webpack caches the module record and
  // corpusLoader caches its promises — so StrictMode's double-invoke and
  // re-runs on uid change are free.
  useEffect(() => {
    if (!user?.uid) return undefined;
    const warmChunks = () => {
      import('./components/StudentDashboard');
      import('./components/PracticeTest');
      import('./components/StudyPlanDashboard');
      preloadCorpus().catch(() => { /* handlers re-await with their own error paths */ });
    };
    if (typeof window.requestIdleCallback === 'function') {
      const idleId = window.requestIdleCallback(warmChunks, { timeout: 3000 });
      return () => window.cancelIdleCallback(idleId);
    }
    const timerId = setTimeout(warmChunks, 1500);
    return () => clearTimeout(timerId);
  }, [user]);

  // Adaptive-session routing module (practiceAssignmentService namespace).
  // startAdaptivePractice resolves the loader and stashes the namespace HERE
  // BEFORE creating any session state, so handleNextQuestion — which runs
  // synchronously per answer mid-session — can read it without awaiting.
  // An adaptive session cannot exist without this ref being set first.
  const practiceRoutingRef = useRef(null);

  // Start a daily-review session from a list of due review items. Extracted from
  // the dashboard's onStartReview so the re-engagement deep-link (?next=review)
  // can launch the exact same flow. Defined BEFORE the deep-link effects below
  // because they list it in their dependency array (a const referenced before
  // its declaration in the same scope is a temporal-dead-zone ReferenceError).
  const startDailyReview = useCallback(async (items) => {
    const reviewItems = items || [];
    if (reviewItems.length === 0) return;
    // Queue items resolve against the bank (routing service), the legacy
    // topic files, and the test catalog — load all three corpus slices.
    const [routingMod, topicsMod, testsMod] = await Promise.all([
      loadPracticeRouting(),
      loadTopicQuestions(),
      loadPracticeTests(),
    ]);
    const questions = [];
    const reviewKeyByQuestionId = {};
    reviewItems.forEach(item => {
      const q = resolveReviewItemToQuestion(item, {
        resolveQuestionById: routingMod.resolveQuestionById,
        getQuestionsForSection: topicsMod.getQuestionsForSection,
        getTestById: testsMod.getPracticeTestById,
      });
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

  // Holds the latest unsaved resumable bank-drill session so it can be FLUSHED
  // synchronously when the student leaves the drill before the debounce fires.
  const pendingBankDrillRef = useRef(null);

  // Auto-persist the in-flight Practice-Bank drill so it survives leaving or
  // refreshing (the "Continue your last drill" banner resumes it). Bank-sourced
  // 'assigned' drills only — study-plan / adaptive / review sessions are out of
  // scope. Clears the saved drill on completion. Debounced (600ms) so rapid
  // answer/navigation changes coalesce into a single Firestore write; the latest
  // session is mirrored into pendingBankDrillRef so the leave-flush below can
  // persist an answer made within the debounce window before navigating away.
  useEffect(() => {
    if (!user?.uid || view !== 'practice') return undefined;
    const ps = practiceState;
    const isBank = ps.practiceMode === 'assigned'
      && (ps.assignmentMeta?.source || '').startsWith('practice-bank');
    if (!isBank) { pendingBankDrillRef.current = null; return undefined; }
    if (ps.isComplete) { pendingBankDrillRef.current = null; clearActiveDrill(); return undefined; }
    const session = buildResumableDrill(ps, activeSection);
    if (!session) return undefined;
    pendingBankDrillRef.current = session;
    const timer = setTimeout(() => { saveActiveDrill(session); pendingBankDrillRef.current = null; }, 600);
    return () => clearTimeout(timer);
  }, [user?.uid, view, practiceState.currentQuestionIndex, practiceState.answers, practiceState.currentRoundIndex, practiceState.isComplete]);

  // Flush a pending bank-drill save when the student LEAVES the practice view by
  // any route (Back, a nav click, etc.). Without this, answering and then
  // leaving within the 600ms debounce window would cancel the pending save and
  // resume one answer stale. Tracks the previous view so it fires only on the
  // practice → elsewhere transition.
  const prevViewRef = useRef(view);
  useEffect(() => {
    const leftPractice = prevViewRef.current === 'practice' && view !== 'practice';
    prevViewRef.current = view;
    if (leftPractice && pendingBankDrillRef.current) {
      saveActiveDrill(pendingBankDrillRef.current);
      pendingBankDrillRef.current = null;
    }
  }, [view]);

  // Best-effort flush when the tab is hidden / closed (covers a hard refresh
  // mid-answer). Firestore web writes are not guaranteed to complete on unload,
  // so this is a backstop on top of the reliable leave-flush above.
  useEffect(() => {
    const flush = () => {
      if (document.visibilityState === 'hidden' && pendingBankDrillRef.current) {
        saveActiveDrill(pendingBankDrillRef.current);
        pendingBankDrillRef.current = null;
      }
    };
    document.addEventListener('visibilitychange', flush);
    return () => document.removeEventListener('visibilitychange', flush);
  }, [saveActiveDrill]);

  // On-ramp eligibility — decided once per session after progress hydrates.
  // Eligible: flagged on, no completion stamp, zero test attempts, no plan.
  // An in-flight check-in (inProgressTests['mini-diagnostic']) re-enters the
  // flow directly at the runner, even past a skip stamp.
  useEffect(() => {
    if (onRampActive !== null) return; // decided already this session
    // `progressHydrated` (not !progressLoading): in the commit where the
    // user first resolves, loading still reads false from the boot no-user
    // state, and deciding there would miss an in-flight check-in resume.
    if (!ffOnRamp || !user || !progressHydrated) return;
    const hasTests = Object.keys(practiceTestResults || {}).length > 0;
    const hasResume = !!(inProgressTests && inProgressTests['mini-diagnostic']);
    if (user.onboardingCompletedAt || hasTests) { setOnRampActive(false); return; }
    if (hasResume) {
      setOnRampStage('check-in');
      setOnRampActive(true);
      return;
    }
    if (user.onboardingSkippedAt || studyPlan) { setOnRampActive(false); return; }
    setOnRampStage('wizard');
    setOnRampActive(true);
  }, [onRampActive, ffOnRamp, user, progressHydrated, practiceTestResults, inProgressTests, studyPlan]);

  const handleOnRampSkip = () => {
    setOnRampActive(false);
    markOnboardingSkipped().catch((e) => console.error('[onramp] skip stamp failed:', e));
  };

  // Re-entry from the dashboard "finish your check-in" card. Students who
  // already answered the wizard (targetScore set) jump straight to the runner.
  const handleResumeOnRamp = () => {
    setOnRampStage(user?.targetScore ? 'check-in' : 'wizard');
    setOnRampActive(true);
  };

  const handleOnRampFinished = async ({ plan, diagReport, miniDiagnosticRecord }) => {
    // Order matters for resilience: plan mirror first (the artifact is already
    // persisted by the pipeline), then the lean record, then the stamp. Each
    // step is independently recoverable; a failed stamp just re-offers the
    // flow next session, which resumes into the existing plan gate.
    try {
      await handleSaveStudyPlan(plan, diagReport);
    } catch (e) {
      console.error('[onramp] plan mirror failed (artifact already persisted):', e);
    }
    try {
      await saveMiniDiagnostic(miniDiagnosticRecord);
    } catch (e) {
      console.error('[onramp] mini-diagnostic record save failed:', e);
    }
    try {
      await markOnboardingComplete();
    } catch (e) {
      console.error('[onramp] completion stamp failed:', e);
    }
  };

  const renderOnRamp = () => (
    <React.Suspense fallback={<div style={{ minHeight: '100vh', background: '#ffffff' }} />}>
      {onRampStage === 'wizard' ? (
        <Onboarding
          user={user}
          onUpdateTargetScore={updateTargetScore}
          onUpdateTestDate={updateTestDate}
          onUpdateCurrentScore={updateCurrentScore}
          onComplete={() => setOnRampStage('check-in')}
          onSkip={handleOnRampSkip}
        />
      ) : (
        <MiniDiagnosticShell
          user={user}
          savedProgress={getTestProgress('mini-diagnostic')}
          onSaveProgress={saveTestProgress}
          onClearProgress={clearTestProgress}
          answeredQuestionIds={answeredQuestionIds}
          completedLessons={completedLessons}
          practiceProgress={practiceProgress}
          onFinished={handleOnRampFinished}
          onViewPlan={() => { setOnRampActive(false); setView('studyPlan'); }}
          onSkip={handleOnRampSkip}
        />
      )}
    </React.Suspense>
  );

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
  const startPrescriptivePractice = async (moduleId, sectionName) => {
    const { getRandomQuestions } = await loadTopicQuestions();

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

    if (questions.length === 0) {
      showToast({ type: 'info', message: 'No practice questions available for this topic right now.' });
      return;
    }

    // Launch in the modern assigned shell — the legacy 'prescriptive' view
    // diverged from the production drill experience (no rounds, no Assisted
    // Help panel) and study-plan fallbacks kept landing students on it.
    const rounds = buildRounds(questions.map(q => q.id), 8);
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
      shuffledQuestions: questions,
      rounds: roundsWithStart,
      currentRoundIndex: 0,
      practiceMode: 'assigned',
      assignmentMeta: {
        label: `${sectionName} Practice`,
        source: 'module-section',
        recommendedDifficulty: difficulty,
        weakness: null,
      },
    });
    setActiveModule(null);
    setActiveSection('__assigned__');
    setShowCalculator(false);
    setView('practice');
  };

  // Launch a timed pacing drill (Phase 2 — pacingService runner). The card
  // passes the chosen mode config; we source MCQ bank questions matching its
  // difficulty filter, then hand off to the self-contained PacingDrill runner.
  const startPacingDrill = async (config) => {
    if (!config) return;
    // Remember where we launched from so onExit can return there. The plan
    // (inline tab or standalone) launches via the embedded Pacing section;
    // everything else falls back to the Dashboard.
    setPacingDrillEntryView(view === 'studyPlan' ? 'studyPlan' : 'dashboard');
    const { getQuestionsByDomain } = await loadMathBank();
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
    setView('pacingDrill');
  };

  const startAssignedPractice = async (questionIds, meta = {}) => {
    const { resolveAssignedQuestions } = await loadPracticeRouting();
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

  // Resume a previously-saved, in-flight Practice-Bank drill (the "Continue
  // your last drill" banner). Re-resolves the saved question IDs from the bank,
  // restores answers + position + rounds, and re-paints the current question's
  // recorded answer so the student lands exactly where they left off.
  const resumeActiveDrill = async () => {
    if (!activeDrill || !Array.isArray(activeDrill.questionIds) || activeDrill.questionIds.length === 0) return;
    const { resolveAssignedQuestions } = await loadPracticeRouting();
    // resolveAssignedQuestions preserves input order and drops only stale ids.
    const { resolved } = resolveAssignedQuestions(activeDrill.questionIds);
    if (resolved.length === 0) { clearActiveDrill(); return; }

    const savedIds = activeDrill.questionIds.map(String);
    const answers = activeDrill.answers || {};

    // Realign the resume position by the saved CURRENT question's id, not its
    // numeric index: if an earlier id went stale and was dropped, `resolved` is
    // shorter and a raw index would land on the wrong question.
    const savedCurrentId = savedIds[activeDrill.currentQuestionIndex] ?? null;
    let idx = savedCurrentId != null
      ? resolved.findIndex(q => String(q.id) === savedCurrentId)
      : -1;
    if (idx < 0) idx = Math.min(activeDrill.currentQuestionIndex || 0, resolved.length - 1);

    // Trust the saved rounds only when nothing was dropped — otherwise they
    // still reference missing ids and their boundaries desync (the celebration
    // interstitial can never fire). Rebuild from the resolved ids and recompute
    // the current round from the realigned position.
    const dropped = resolved.length !== savedIds.length;
    const rounds = (!dropped && Array.isArray(activeDrill.rounds))
      ? activeDrill.rounds
      : buildRounds(resolved.map(q => q.id), 8);
    const roundIdx = findRoundIndexForQuestion(rounds, resolved[idx]?.id);
    const currentRoundIndex = roundIdx >= 0 ? roundIdx : (activeDrill.currentRoundIndex || 0);

    const restored = restoreAnswerStateForQuestion(answers, resolved[idx]);

    setPracticeState({
      currentQuestionIndex: idx,
      selectedAnswer: restored.selectedAnswer,
      showFeedback: restored.showFeedback,
      showHint: false,
      showRoundComplete: false,
      answers,
      isComplete: false,
      shuffledQuestions: resolved,
      rounds,
      currentRoundIndex,
      practiceMode: 'assigned',
      // Keep the original 'practice-bank-*' source so the auto-persist effect
      // keeps tracking this resumed session.
      assignmentMeta: activeDrill.assignmentMeta || { label: 'Practice Bank', source: 'practice-bank-resumed' },
    });
    setActiveModule(null);
    setActiveSection(activeDrill.section || '__assigned__');
    setShowCalculator(false);
    setView('practice');
  };

  const startAdaptivePractice = async (opts = {}) => {
    // Resolve + stash the routing namespace BEFORE any session state exists:
    // handleNextQuestion reads practiceRoutingRef synchronously per answer.
    const routing = await loadPracticeRouting();
    practiceRoutingRef.current = routing;
    const {
      normalizeDomain,
      RW_DOMAIN_ORDER,
      buildDomainAdaptiveQueueSeed,
      createAdaptiveSessionState,
      deserializeAdaptiveState,
      getNextAdaptiveQuestion,
    } = routing;

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
   *   • legacy free-practice recording was removed with the standard/
   *     prescriptive UI, so review-mode attempts can't pollute skill
   *     mastery counters.
   *   • buildGroundTruthDiagnosis lives in services/groundTruth.js and is
   *     only invoked from PracticeTest.jsx (not App.jsx), so a review-mode
   *     drill completion can't inflate Predicted vs Actual.
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
    setReviewEnteredViaDeepLink(false);
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
  const handleSelectReviewTest = async (testId, { landOn = 'detail' } = {}) => {
    const { getAllPracticeTests } = await loadPracticeTests();
    const test = getAllPracticeTests().find(t => t.id === testId);
    const lastAttempt = getLatestAttempt(practiceTestResults, testId);
    if (!test || !lastAttempt) {
      // The queue can outlive its source test (deleted/archived from the
      // catalog, or an attempt that was reset). Log it so deep-link failures
      // are debuggable, then surface a toast.
      logWarn('pastTestReview', 'test_or_attempt_missing', {
        testId, hasTest: !!test, hasAttempt: !!lastAttempt,
      });
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
      // Deep-link from the plan's Review Queue: step straight into the first
      // wrong question. The detail view's loading spinner shows during the
      // fetch above, then flips to the single-question stepper here, whose
      // prev/next walk the wrong-only slice (see the pastTestReviewItem route).
      if (landOn === 'firstWrong') {
        const firstWrong = extractItemsFromAttempt(lastAttempt).find(it => !it.isCorrect);
        if (firstWrong) {
          setSelectedReviewItem(firstWrong);
          setView('pastTestReviewItem');
          logPtrEvent('item_reviewed', {
            studentId: user?.uid || null,
            testId,
            itemKey: firstWrong.key,
            isCorrect: false,
            source: 'review-queue-deeplink',
          });
        } else {
          // Defensive: a test in the review queue should have wrong items, but
          // stale/corrupted data could land here. Stay on the detail view
          // (already set above) and tell the student why.
          showToast({ type: 'info', message: 'No wrong answers to review on this test.' });
        }
      }
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
   * handleReviewTestWrong — deep-link from the plan's Review Queue into the
   * specific wrong questions on a test. Reuses handleSelectReviewTest (same
   * snapshot fetch) but lands on the single-question stepper at the first
   * miss. Sets the back-target so the detail view returns to the plan.
   *
   * @param {string} testId
   */
  const handleReviewTestWrong = (testId) => {
    if (!testId) return;
    setPastTestReviewEntryView(view === 'dashboard' ? 'dashboard' : 'studyPlan');
    setReviewEnteredViaDeepLink(true);
    handleSelectReviewTest(testId, { landOn: 'firstWrong' });
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
      // Restore the answer already recorded for the target question so going
      // back shows the student's choice + feedback instead of a blank slate.
      // (Unanswered target → blank, same as advancing to a fresh question.)
      const restored = restoreAnswerStateForQuestion(prev.answers, prev.shuffledQuestions[targetIdx]);
      return { ...prev, currentQuestionIndex: targetIdx, ...restored, showHint: false };
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
          // Omit when absent — this map is persisted into activeDrill, and
          // Firestore rejects `undefined` field values (config has no
          // ignoreUndefinedProperties).
          ...(question.difficulty != null ? { difficulty: question.difficulty } : {}),
          skills: question.skills || []
        }
      }
    }));

    // Practice-Bank progress: record every answered bank question (right and
    // wrong) into the per-question bankPractice store so the bank can show
    // per-question-type progress. Bank-sourced drills only; kept out of the
    // study-plan dedup set on purpose.
    const isBankDrill = (practiceState.assignmentMeta?.source || '').startsWith('practice-bank');
    if (user?.uid && isBankDrill && question?.id != null) {
      recordBankPractice(question.id, isCorrect);
    }

    const isAdaptiveOrAssigned = practiceState.practiceMode === 'assigned' || practiceState.practiceMode === 'adaptive';
    const isReviewSession = practiceState.assignmentMeta?.source === 'review-queue';
    if (user?.uid && isAdaptiveOrAssigned && !isReviewSession && !isCorrect && question?.id != null) {
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
      // skillProgress just like full tests already do, so a week of drilling
      // moves mastery and the weakness lists between tests.
      // Excluded: daily-review sessions (early-returned above; SM-2 owns that
      // evidence) and review-retry sessions (the "won't affect your study
      // plan" banner is a promise we keep).
      const isAdaptiveOrAssigned = practiceState.practiceMode === 'assigned' || practiceState.practiceMode === 'adaptive';
      if (user?.uid && isAdaptiveOrAssigned && !practiceState.reviewMode) {
        recordDrillSkillAttempts(answersMap);

        // Effort registers (adaptivity audit item 4): a completed drill is
        // real practice — log the day so CalendarMonth + adherence count it.
        // Drill sessions never touch practiceProgress, so without this write
        // both surfaces ignored drill work entirely. Review-retry sessions
        // are excluded above ("won't affect your study plan" promise).
        recordPracticedDay();

        // …and auto-check the matching plan task. Same activity identity the
        // manual checkbox uses ({weekIndex, activityIndex} →
        // markStudyActivityComplete); matching lives in the pure selector
        // findMatchingPlanActivity (exact skillId, then the missed-pattern
        // granularity bridge). Assigned drills only — adaptive sessions have
        // no single skill identity to match against.
        if (practiceState.practiceMode === 'assigned') {
          const weakness = practiceState.assignmentMeta?.weakness;
          const todayDayName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][new Date().getDay()];
          const match = findMatchingPlanActivity(studyPlan, { weakness, todayDayName });
          if (match) {
            markStudyActivityComplete(match.weekIndex, match.activityIndex);
            const skillLabel = weakness?.skill || weakness?.skillName || match.activity?.skillName || match.activity?.title || 'assigned';
            showToast({
              type: 'success',
              message: `Today's ${skillLabel} practice checked off your plan.`,
              duration: 4500,
            });
          }
        }
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
    // Adaptive mode: ask the queue engine for the next question
    if (practiceState.practiceMode === 'adaptive') {
      // Routing namespace was stashed by startAdaptivePractice before this
      // session could exist. The guard covers the impossible-by-construction
      // case (e.g. a future code path mounting adaptive state another way).
      const routing = practiceRoutingRef.current;
      if (!routing) {
        logWarn('adaptive', 'routing module missing in handleNextQuestion — session cannot advance');
        return;
      }
      const {
        applyAdaptiveResult,
        evaluateAdaptiveCompletion,
        serializeAdaptiveState,
        getNextAdaptiveQuestion,
      } = routing;
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
        // hybridStudyPlanService statically imports studyPlanGenerator (which
        // pulls bank getQuestionById), so a static import here would weld the
        // math corpus back into the main chunk. Fire-and-forget persistence —
        // the call was never awaited — so a dynamic import is a drop-in.
        import('./services/hybridStudyPlanService')
          .then(({ patchAdaptivePracticeState }) => patchAdaptivePracticeState(user.uid, artId, toSave))
          .catch(err => console.warn('[App] Failed to persist adaptive state:', err?.message));

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
  const handleTrySimilar = useCallback(async (currentQuestion) => {
    const excludeIds = (practiceState.shuffledQuestions || []).map(q => q.id).filter(Boolean);
    const { pickSimilarQuestion } = await loadTrySimilar();
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
  const handleTrySimilarFromReview = useCallback(async (snapshotItem) => {
    if (!snapshotItem) return;
    const { pickSimilarQuestion } = await loadTrySimilar();
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


  // Legal pages are real URLs that must render for logged-out AND logged-in
  // users without waiting on Firebase auth init. They are full-page navs
  // (plain <a> links), so pathname is immutable for this component's lifetime.
  const legalPath = (typeof window !== 'undefined' ? window.location.pathname : '/').replace(/\/+$/, '') || '/';
  if (legalPath === '/privacy') return <ErrorBoundary><PrivacyPolicy /></ErrorBoundary>;
  if (legalPath === '/terms') return <ErrorBoundary><TermsOfService /></ErrorBoundary>;

  if (loading) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1.75rem',
        background: 'var(--color-slate-50)',
      }}>
        {/* Branded boot screen — warm canvas + the seva lockup, not a bare
            spinner on white. Presumes nothing about the post-auth route. */}
        <Wordmark fontSize={40} tone="dark" />
        <div style={{
          width: '32px',
          height: '32px',
          border: '3px solid var(--color-slate-200)',
          borderTop: '3px solid var(--color-brand-primary)',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite'
        }} />
        <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  const paletteCommands = [
    { id: 'home', label: 'Go to Home', hint: 'Dashboard', icon: <ChartBarIcon size={16} />, run: () => { setView('dashboard'); setActiveModule(null); setActiveLesson(null); } },
    { id: 'practice', label: 'Practice', hint: 'Practice bank', icon: <TargetIcon size={16} />, run: () => setView('practiceBank') },
    { id: 'studyPlan', label: 'Open Study Plan', hint: 'Your plan', icon: <CalendarIcon size={16} />, run: () => setView('studyPlan') },
    { id: 'tests', label: 'Practice Tests', hint: 'Full-length', icon: <ClipboardIcon size={16} />, run: () => { setView('practiceTests'); setSelectedPracticeTest(null); } },
    { id: 'tutor', label: 'Open AI Tutor', hint: 'Ask anything', icon: <BrainIcon size={16} />, run: () => { setView('tutor'); } },
    { id: 'videos', label: 'Videos', hint: 'Lessons', icon: <PlayIcon size={16} />, run: () => { setView('modules'); setActiveModule(null); setActiveLesson(null); } },
    { id: 'profile', label: 'Profile & settings', run: () => setView('profile') },
  ];

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
            onRampActive === true ? renderOnRamp() : (
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

      {/* Cmd/Ctrl+K command palette (owns its own open state + global listener) */}
      <CommandPalette commands={paletteCommands} />

      <AppShell
        currentView={view}
        onNavigate={(navId) => {
          if (navId === 'dashboard') { setView('dashboard'); setActiveModule(null); setActiveLesson(null); }
          else if (navId === 'modules') { setView('modules'); setActiveModule(null); setActiveLesson(null); }
          else if (navId === 'practiceTests') { setView('practiceTests'); setSelectedPracticeTest(null); }
          else if (navId === 'studyPlan') { setView('studyPlan'); }
          else if (navId === 'tutor') { setView('tutor'); }
          else if (navId === 'profile') { setView('profile'); }
          else if (navId === 'practiceBank') { setView('practiceBank'); }
          else { setView(navId); }
        }}
        user={user}
        onLogout={logout}
        hideNav={view === 'takingTest' || view === 'reviewingPastResults' || view === 'practice' || view === 'learn'}
      >
      {/* Main Content — key={view} re-mounts the region on navigation so it fades
          in (fadeInUp keyframe in design/animations.js; reduced-motion handled
          globally). takingTest is excluded so the test-runner scroll-lock and the
          internal test->results flip (view stays 'takingTest') never animate. */}
      <div id="main-content" key={view} style={{
        maxWidth: view === 'takingTest' || view === 'reviewingPastResults' || view === 'practice' || view === 'dashboard' || view === 'learn' || view === 'modules' || view === 'practiceBank' ? '100%' : (view === 'practiceTests' || view === 'studyPlan') ? '960px' : '800px',
        margin: '0 auto',
        padding: (view === 'dashboard' || view === 'reviewingPastResults' || view === 'practice' || view === 'takingTest' || view === 'learn' || view === 'practiceBank') ? '0' : '32px 32px 100px',
        ...(view === 'takingTest' ? { overflow: 'hidden', height: '100vh' } : { animation: 'fadeInUp 300ms cubic-bezier(0.25, 0.1, 0.25, 1)' })
      }}>
      {/* ONE Suspense boundary for the whole view-switch region: every lazy
          view below suspends into the same skeleton fallback. It sits INSIDE
          the #main-content wrapper so the takingTest scroll-lock (style on
          the div above) stays applied while a chunk loads. */}
      <React.Suspense fallback={<ViewChunkFallback />}>
        {/* Standalone AI Tutor View */}
        {view === 'tutor' && (
          <div style={{ maxWidth: '720px', margin: '0 auto' }}>
            <AiTutorChat
              isOpen={true}
              onClose={() => { setView('dashboard'); }}
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
            onUpdateProfilePhoto={updateProfilePhoto}
            onUpdateFirstName={updateFirstName}
            completedLessons={completedLessons}
            practiceTestResults={practiceTestResults}
            skillProgress={skillProgress}
          />
        )}

        {/* Practice Bank — browse question types and drill at will */}
        {view === 'practiceBank' && (
          <PracticeBank
            onStartPractice={startAssignedPractice}
            bankPractice={bankPractice}
            activeDrill={activeDrill}
            onResumeDrill={resumeActiveDrill}
            onDiscardDrill={clearActiveDrill}
          />
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
            drillDays={drillDays}
            practiceTestResults={practiceTestResults}
            reviewQueue={reviewQueue}
            adaptiveOverlay={adaptiveOverlay}
            reviewStreak={reviewStreak}
            dueReviewCount={getDueCount()}
            skillDiagnosticSummary={getSkillDiagnosticSummary()}
            skillBreakdown={getSkillBreakdown()}
            studyPlan={studyPlan}
            studyPlanArtifact={studyPlanArtifact}
            studyPlanMeta={studyPlanMeta}
            dataLoading={progressLoading}
            predictionLog={predictionLog}
            skillProgress={skillProgress}
            answeredQuestionIds={answeredQuestionIds}
            showCheckInCard={
              ffOnRamp && !user?.onboardingCompletedAt && !studyPlan &&
              Object.keys(practiceTestResults || {}).length === 0
            }
            onStartCheckIn={handleResumeOnRamp}
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
            onReviewTestWrong={handleReviewTestWrong}
            activeTab={dashboardTab}
            onTabChange={setDashboardTab}
            onOpenProfile={() => setView('profile')}
            onRetrySimilar={handleTrySimilarFromReview}
            onBrowseLessons={() => {
              // "Or warm up first" link on the day-0 banner → the Videos/
              // lessons view (same destination as the sidebar Videos item).
              setActiveModule(null);
              setActiveLesson(null);
              setView('modules');
            }}
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
              const { getAllPracticeTests } = await loadPracticeTests();
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
            onResetTest={(test) => resetPracticeTest(test.id)}
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
                  answeredQuestionIds={answeredQuestionIds}
                  onStartPractice={(moduleId, sectionName, opts) => {
                    setViewingResultsData(null);
                    // Drill-shaped next actions (format v2) arrive as resolved
                    // question ids — same contract as the results-path mount.
                    if (opts?.questionIds?.length) {
                      startAssignedPractice(opts.questionIds, { label: opts.label, weakness: opts.weakness });
                      return;
                    }
                    // Must go through startPrescriptivePractice — it populates
                    // practiceState.shuffledQuestions (the practice view no
                    // longer has a synchronous corpus fallback) and sets the
                    // module/section/view itself once questions are in hand.
                    startPrescriptivePractice(moduleId, sectionName);
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
                  weakness: opts.weakness,
                });
                setSelectedPracticeTest(null);
                return;
              }
              // startPrescriptivePractice (async) sets module/section/view
              // itself once questions load — no bare setView('practice')
              // here, or the view would flash empty before state populates.
              startPrescriptivePractice(moduleId, sectionName);
              setSelectedPracticeTest(null);
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
            resultSaveStatus={lastSaveStatus}
            onRetrySave={retryLastSave}
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
              onExit={() => { setPacingSession(null); setView(pacingDrillEntryView); }}
            />
          </ErrorBoundary>
        )}

        {view === 'studyPlan' && (
          <StudyPlanDashboard
            variant="immersive"
            studyPlan={studyPlan}
            practiceTestResults={practiceTestResults}
            practiceProgress={practiceProgress}
            drillDays={drillDays}
            skillProgress={skillProgress}
            reviewQueue={reviewQueue}
            adaptiveOverlay={adaptiveOverlay}
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
              // startPrescriptivePractice (async) sets module/section/view
              // itself once questions load.
              startPrescriptivePractice(moduleId, sectionName);
            }}
            onStartPracticeTest={() => setView('practiceTests')}
            onCompleteActivity={markStudyActivityComplete}
            onUncompleteActivity={unmarkStudyActivityComplete}
            onReviewPastTests={handleOpenPastTestReview}
            onStartReview={startDailyReview}
            onStartPacing={startPacingDrill}
            onReviewTestWrong={handleReviewTestWrong}
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
                  onBack={() => {
                    // Deep-linked from the plan → back returns to the plan;
                    // browsed from the index → back returns to the index.
                    if (reviewEnteredViaDeepLink) {
                      setReviewEnteredViaDeepLink(false);
                      setView(pastTestReviewEntryView);
                    } else {
                      setView('pastTestReviewIndex');
                    }
                  }}
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
          // Every path into view==='practice' populates shuffledQuestions
          // via an async start* handler (Stage 2b: the render path can no
          // longer reach the topic-question corpus synchronously). The empty
          // fallback + the length guard below render nothing for the brief
          // window between a handler's setView and its state population.
          const questions = practiceState.shuffledQuestions.length > 0
            ? practiceState.shuffledQuestions
            : [];
          if (questions.length === 0) return null;
          const currentQuestion = questions[practiceState.currentQuestionIndex];

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
          // Every Practice-Bank launcher emits a 'practice-bank-*' source
          // (quick / full / mix / domain / skill / pattern / resumed), so match
          // on the prefix — otherwise finishing or backing out of a bank drill
          // lands the student on the Study Plan instead of the Practice Bank.
          const backHandler = practiceState.reviewMode
            ? pastTestReviewBackHandler
            : (typeof source === 'string' && source.startsWith('practice-bank'))
              ? practiceBankBackHandler
              : studyPlanBackHandler;
          const headerTitle = isAdaptive
            ? (practiceState.adaptiveDomainLabel ? `Adaptive Practice — ${practiceState.adaptiveDomainLabel}` : 'Adaptive Practice')
            : isAssigned
              ? (practiceState.assignmentMeta?.label || 'Assigned Practice')
              : activeSection;

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

          // All live paths are assigned/adaptive (828dc0a unified routing);
          // the legacy standard/prescriptive inline UI was removed.
          return null;
        })()}

      </React.Suspense>
      </div>

      </AppShell>
    </div>
          )) : (
            <Navigate to="/" replace />
          )
        } />
      </Routes>
    </BrowserRouter>
    </ErrorBoundary>
  );
};

export default PerformSAT;
