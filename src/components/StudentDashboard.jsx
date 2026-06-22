import React, { useState, useMemo, useEffect } from 'react';
import { showToast } from './ui/Toaster';
import { generateRecommendations } from '../services/recommendationService';
import SkillDiagnosticSummary from './SkillDiagnosticSummary';
import ScoreSlider from './ScoreSlider';
import CollegePicker from './CollegePicker';
import StudyPlanDashboard from './StudyPlanDashboard';
import DashboardDiagnosticWidget from './DashboardDiagnosticWidget';
import DailyReviewCard from './DailyReviewCard';
import PacingDrillCard from './PacingDrillCard';
import TodaysTasksCard from './TodaysTasksCard';
import PredictedVsActualCard from './PredictedVsActualCard';
import CalendarMonth from './CalendarMonth';
import { getTodaySlice, countRemainingTodayTasks } from '../services/selectors/todaySlice';
import { resolveActivityDrill } from '../services/activityDrillRouter';
import { getSessionAdherence } from '../services/selectors/sessionAdherence';
import { summarizePredictions } from '../services/selectors/predictionSummary';
import { getPracticedDayKeys } from '../services/selectors/practicedDays';
import { formatDailyIntro } from '../services/selectors/dailyIntro';
import { getMathWeaknesses, getRWWeaknesses } from '../services/selectors/weaknesses';
import { isGoalAchieved, goalDelta } from '../services/selectors/goalProgress';
import { isScoreableAttempt } from '../services/selectors/latestTestStats';
import { buildPerformanceTiles } from '../services/selectors/performanceTiles';
import { snapToScale } from '../services/scoring/scaleTables';
import { getDaysUntilTest } from '../services/selectors/daysUntilTest';
import { buildPacingTelemetry } from '../services/selectors/pacingTelemetry';
import { buildPacingSession } from '../services/pacingService';
import { getRecentMisses } from '../services/selectors/recentMisses';
import { getIdentityInsights } from '../services/selectors/identityInsights';
import { formatPatternLabel } from '../services/selectors/missedPatternLabel';
import { loadPracticeTests, loadMathBank, loadRWBank } from '../data/corpusLoader';
import { MathText } from './MathText';
import { trackAddPhotoClicked } from '../services/analyticsService';
import { PlayIcon, ChartBarIcon, TrendingUpIcon, ClipboardIcon, CameraIcon } from '../design/icons';
import { parseLocalDate } from '../utils/localDate';
import { injectAnimations, useCountUp } from '../design/animations';
import { DataCard } from './ui/DataCard';
import { DashboardSkeleton } from './ui/Skeleton';
import { PrimaryButton, SecondaryButton } from './ui/Button';
import Avatar, { AVATAR_SIZES } from './ui/Avatar';
import './StudentDashboard.css';

// Official SAT Test Dates (from College Board)
const SAT_TEST_DATES = [
  { name: 'March 2026 SAT', date: '2026-03-14' },
  { name: 'May 2026 SAT', date: '2026-05-02' },
  { name: 'June 2026 SAT', date: '2026-06-06' },
  { name: 'August 2026 SAT', date: '2026-08-15' },
  { name: 'September 2026 SAT', date: '2026-09-12' },
  { name: 'October 2026 SAT', date: '2026-10-03' },
  { name: 'November 2026 SAT', date: '2026-11-07' },
  { name: 'December 2026 SAT', date: '2026-12-05' },
];

const MODULES = [
  { id: 'linear-equations', title: 'Linear Equations', lessonCount: 24 },
  { id: 'functions', title: 'Functions', lessonCount: 10 },
  { id: 'systems', title: 'System of Equations', lessonCount: 14 },
  { id: 'transformations', title: 'Transformations', lessonCount: 15 },
  { id: 'exponents', title: 'Exponents & Exponential Functions', lessonCount: 12 },
  { id: 'percents', title: 'Percents', lessonCount: 17 },
  { id: 'equivalent-expressions', title: 'Equivalent Expressions', lessonCount: 3 },
  { id: 'quadratics', title: 'Quadratic Functions & Equations', lessonCount: 18 },
  { id: 'radians-degrees', title: 'Radians & Degrees', lessonCount: 4 },
  { id: 'triangles', title: 'Triangles', lessonCount: 35 },
  { id: 'circles', title: 'Circles', lessonCount: 22 },
  { id: 'volume', title: 'Volume', lessonCount: 9 },
  { id: 'statistics', title: 'Statistics', lessonCount: 12 },
  { id: 'dimensional-analysis', title: 'Dimensional Analysis', lessonCount: 4 }
];

const TOTAL_LESSONS = 199;


const StudentDashboard = ({
  user,
  dataLoading = false,
  completedLessons,
  practiceProgress,
  drillDays = [],
  practiceTestResults,
  reviewQueue,
  adaptiveOverlay = null,
  reviewStreak,
  dueReviewCount = 0,
  onUpdateTestDate,
  onUpdateTargetScore,
  onUpdateCurrentScore,
  onUpdateTargetSchools,
  onStartPractice,
  onStartReview,
  onStartPracticeTest,
  onStartPacing,
  onOpenProfile,
  onRetrySimilar,
  onViewFullDiagnosis,
  onBrowseLessons,
  answeredQuestionIds = [],
  allLessons,
  skillDiagnosticSummary,
  studyPlan,
  studyPlanArtifact,
  studyPlanMeta,
  predictionLog,
  skillProgress,
  onCompleteActivity,
  onUncompleteActivity,
  onReviewPastTests,
  onReviewTestWrong,
  activeTab: controlledActiveTab,
  onTabChange,
  showCheckInCard = false,
  onStartCheckIn,
}) => {
  // Tab state is lifted to App when controlled (activeTab + onTabChange) so it
  // survives this component unmounting during a pacing drill / test review and
  // remounting on return — that's what lets a plan-launched flow come back to
  // the Study Plan tab instead of the Dashboard tab. Falls back to local state
  // when mounted without the controlled props.
  const [internalActiveTab, setInternalActiveTab] = useState('dashboard');
  const activeTab = controlledActiveTab ?? internalActiveTab;
  const setActiveTab = onTabChange || setInternalActiveTab;
  // Practice-test resolver for the recent-misses card (Stage 2c of the
  // bundle-split plan). The test catalog is its own async chunk now, so we
  // hold the resolver FUNCTION in state once the chunk arrives — note the
  // updater form: setState(fn) would otherwise CALL the resolver as an
  // updater. Until it lands, recentMisses below short-circuits to [].
  const [resolveTest, setResolveTest] = useState(null);
  useEffect(() => {
    let cancelled = false;
    loadPracticeTests()
      .then((mod) => { if (!cancelled) setResolveTest(() => mod.getPracticeTestById); })
      .catch(() => { /* card stays empty; non-fatal */ });
    return () => { cancelled = true; };
  }, []);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTargetPicker, setShowTargetPicker] = useState(false);
  const [showCurrentScorePicker, setShowCurrentScorePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(user?.testDate || '');
  const [tempTargetScore, setTempTargetScore] = useState(user?.targetScore || 600);
  const [tempCurrentScore, setTempCurrentScore] = useState(user?.currentScore || 500);

  const getUpcomingSATDates = () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return SAT_TEST_DATES.filter(sat => new Date(sat.date) >= today);
  };

  const getSATNameFromDate = (dateStr) => {
    const sat = SAT_TEST_DATES.find(s => s.date === dateStr);
    return sat ? sat.name : null;
  };

  const totalCompleted = Object.values(completedLessons || {}).filter(l => l?.completed).length;
  const completionPercent = Math.round((totalCompleted / TOTAL_LESSONS) * 100);

  const getModuleCompleted = (moduleId) => {
    return Object.keys(completedLessons || {}).filter(key =>
      key.startsWith(`${moduleId}-`) && completedLessons[key]?.completed
    ).length;
  };

  const moduleProgress = MODULES.map(m => ({
    ...m,
    completed: getModuleCompleted(m.id),
    percent: Math.round((getModuleCompleted(m.id) / m.lessonCount) * 100)
  }));

  const practiceEntries = Object.entries(practiceProgress || {}).filter(([_, p]) => p.bestScore !== undefined);
  // Performance data for the three colorful tiles, derived from the most
  // recent full-length practice test (the only clean, true-count, per-section
  // accuracy source — see services/selectors/performanceTiles.js).
  const performanceTiles = useMemo(
    () => buildPerformanceTiles(practiceTestResults),
    [practiceTestResults],
  );
  const totalCorrect = performanceTiles.overall.correct;
  const totalQuestions = performanceTiles.overall.total;
  const practicePercent = performanceTiles.overall.percent;

  const { projectedScore, projectedRange, projectedTestsCount, scoreHistory, latestIsMultiSection } = useMemo(() => {
    if (!practiceTestResults || Object.keys(practiceTestResults).length === 0) {
      return { projectedScore: null, projectedRange: null, projectedTestsCount: 0, scoreHistory: [], latestIsMultiSection: undefined };
    }
    // Recompute each row's best from its REAL attempts — the row-level
    // bestScaledScore can be poisoned by a blank/abandoned submission (IRT
    // floor: composite 400), which would feed the Current Score tile, the
    // projection, and the score-trend chart.
    const tests = Object.values(practiceTestResults)
      .map(t => {
        const scoreable = Array.isArray(t.attempts) ? t.attempts.filter(isScoreableAttempt) : [];
        if (scoreable.length > 0) {
          return { ...t, bestScaledScore: Math.max(...scoreable.map(a => a.scaledScore)) };
        }
        // No attempts array at all (legacy aggregate-only row): trust the
        // stored best. Rows whose every attempt is junk are dropped.
        return Array.isArray(t.attempts) ? null : t;
      })
      .filter(t => t && t.bestScaledScore)
      .sort((a, b) => {
        const dateA = a.lastAttemptAt?.toDate?.() || new Date(a.lastAttemptAt);
        const dateB = b.lastAttemptAt?.toDate?.() || new Date(b.lastAttemptAt);
        return dateA - dateB;
      });
    if (tests.length === 0) return { projectedScore: null, projectedRange: null, projectedTestsCount: 0, scoreHistory: [], latestIsMultiSection: undefined };

    // Project on ONE consistent scale: the latest test's. Averaging a 200-800
    // section-only row together with a 400-1600 composite produced impossible
    // numbers (e.g. 886, neither a valid section nor composite score). Restrict
    // the basis to same-scale tests before averaging.
    const latestIsMultiSection = !!tests[tests.length - 1]?.isMultiSection;
    const sameScale = tests.filter(t => !!t.isMultiSection === latestIsMultiSection);
    const basis = sameScale.length > 0 ? sameScale : tests;

    const history = basis.map(t => t.bestScaledScore);
    const recentTests = basis.slice(-3).reverse();
    const weights = [0.5, 0.3, 0.2];
    let totalWeight = 0;
    let weightedSum = 0;
    recentTests.forEach((t, i) => {
      const weight = weights[i] || 0.2;
      weightedSum += t.bestScaledScore * weight;
      totalWeight += weight;
    });

    // Center + band, snapped to the 10-point SAT grid and clamped to the valid
    // band for the scale — so the projection is always a real, possible score.
    const center = snapToScale(weightedSum / totalWeight, latestIsMultiSection);
    const halfWidth = latestIsMultiSection ? 40 : 30; // ±1-SE-equivalent (mirrors scoreBand)
    const low = snapToScale(center - halfWidth, latestIsMultiSection);
    const high = snapToScale(center + halfWidth, latestIsMultiSection);

    return {
      projectedScore: center,
      projectedRange: { low, high },
      projectedTestsCount: basis.length,
      scoreHistory: history,
      // Scale of the most recent test, so the goal tile compares like-for-like (1.4).
      latestIsMultiSection,
    };
  }, [practiceTestResults]);

  // Strongest / biggest-opportunity SECTION (Math vs R&W), derived from the
  // combined per-section signal above. Replaces the old per-math-module pick,
  // which could never surface R&W (it matched frozen practiceProgress against
  // a hardcoded math-only module list).
  const strongest = performanceTiles.strongest;
  const opportunity = performanceTiles.opportunity;

  // Shared selector — one day-count for the SAT date everywhere (CalendarMonth,
  // study-plan hero, and this rail all consume the same signed integer).
  const daysUntilTest = getDaysUntilTest(user?.testDate);

  const recommendations = useMemo(() => {
    return generateRecommendations({
      completedLessons,
      practiceProgress,
      reviewQueue,
      testDate: user?.testDate,
      allLessons
    });
  }, [completedLessons, practiceProgress, reviewQueue, user?.testDate, allLessons]);

  // Today's Tasks slice + session adherence (Day 4 of Acely-parity batch).
  // Day name comes from the user's local clock at component-mount time —
  // no auto-refresh on midnight rollover (the user can refresh).
  const DAY_NAMES = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const todayDayName = DAY_NAMES[new Date().getDay()];
  const todaySlice = useMemo(() => getTodaySlice(studyPlan, todayDayName), [studyPlan, todayDayName]);
  const sessionAdherence = useMemo(
    () => getSessionAdherence({ practiceProgress, practiceTestResults, drillDays }),
    [practiceProgress, practiceTestResults, drillDays],
  );
  const hasStudyPlan = !!(studyPlan && Array.isArray(studyPlan.weeks) && studyPlan.weeks.length > 0);
  // Predicted vs Actual (Day 5 ADD B). summarizePredictions returns null when
  // no validated prediction exists yet, so the card hides itself pre-2nd-test.
  const predictionSummary = useMemo(
    () => summarizePredictions(predictionLog, practiceTestResults),
    [predictionLog, practiceTestResults],
  );
  // Acely-polish (Day 1): derived state for the right-rail composition.
  const practicedDayKeys = useMemo(
    () => getPracticedDayKeys({ practiceProgress, practiceTestResults, drillDays }),
    [practiceProgress, practiceTestResults, drillDays],
  );
  const latestScore = useMemo(() => {
    if (!Array.isArray(scoreHistory) || scoreHistory.length === 0) return null;
    return scoreHistory[scoreHistory.length - 1];
  }, [scoreHistory]);
  const scoreDelta = useMemo(() => {
    if (!Array.isArray(scoreHistory) || scoreHistory.length < 2) return null;
    return scoreHistory[scoreHistory.length - 1] - scoreHistory[0];
  }, [scoreHistory]);
  const topWeakness = useMemo(() => {
    if (!studyPlan) return null;
    const math = getMathWeaknesses(studyPlan);
    const rw = getRWWeaknesses(studyPlan);
    const merged = [...math, ...rw].sort((a, b) => (a.accuracy ?? 100) - (b.accuracy ?? 100));
    return merged[0] || null;
  }, [studyPlan]);
  const dailyIntro = useMemo(
    () => formatDailyIntro({ todaySlice, latestScore, topWeakness, firstName: user?.firstName }),
    [todaySlice, latestScore, topWeakness, user?.firstName],
  );
  // "Questions you struggled with" (item 16) — wrong answers from the last
  // test, hardest first, each with a retry-similar path into the bank.
  // Empty until the practice-tests chunk delivers the resolver (effect
  // above) — getRecentMisses tolerates a null resolveTest, but rendering
  // stem-less rows for one frame and then re-rendering is worse than
  // rendering the card a beat later.
  const recentMisses = useMemo(
    () => (resolveTest ? getRecentMisses(practiceTestResults, { resolveTest }) : []),
    [practiceTestResults, resolveTest],
  );
  // One significance-gated "How you test" fact (item 17) — the FACT only
  // (stat + label); the prescriptive text stays on the study-plan tab.
  const homeInsight = useMemo(() => getIdentityInsights(studyPlan)[0] || null, [studyPlan]);
  // Tab count badges (Day 1 Acely-polish):
  //   dashboardCount = activities scheduled today that aren't completed
  //   studyPlanCount = total incomplete activities across all weeks
  // countRemainingTodayTasks re-derives from the slice KIND — for 'all-done',
  // slice.activities holds the COMPLETED list, so the old `.length` read kept
  // the badge nagging after the day's work was finished (stale-badge defect).
  const dashboardCount = useMemo(() => countRemainingTodayTasks(todaySlice), [todaySlice]);
  const studyPlanCount = useMemo(() => {
    if (!studyPlan || !Array.isArray(studyPlan.weeks)) return 0;
    return studyPlan.weeks.reduce((sum, w) => {
      const acts = Array.isArray(w?.activities) ? w.activities : [];
      return sum + acts.filter(a => !a.completed).length;
    }, 0);
  }, [studyPlan]);

  const handleSelectTargetSchools = (schools) => {
    if (schools && schools.length > 0 && onUpdateTargetSchools) {
      onUpdateTargetSchools(schools);
    }
    setShowTargetPicker(false);
  };

  const handleSelectCurrentScore = (score) => {
    if (score && onUpdateCurrentScore) {
      onUpdateCurrentScore(score);
    }
    setShowCurrentScorePicker(false);
  };

  const handleRecommendationClick = (rec) => {
    if (!rec || !rec.action) return;
    if (rec.action.type === 'startPractice' && onStartPractice) {
      onStartPractice(rec.action.moduleId, rec.action.sectionName);
    } else if (rec.action.type === 'startReview' && onStartReview) {
      onStartReview(rec.action.questions);
    }
    // 'startLesson' and 'browseModules' branches removed — both routed
    // into the legacy LearnWorkspace flow which is gone.
  };

  // "Or warm up first" link in the day-0 banner. Actionable recommendations
  // (drill / review) run directly; lesson-flavored ones ('startLesson',
  // 'browseModules' — e.g. the day-0 fallback "Start Learning") route to the
  // Videos/lessons view instead of silently no-opping.
  const handleWarmUpClick = (rec) => {
    const actionType = rec?.action?.type;
    if (actionType === 'startPractice' || actionType === 'startReview') {
      handleRecommendationClick(rec);
      return;
    }
    if (onBrowseLessons) onBrowseLessons();
  };

  // Today's Tasks "Start" from the HOME dashboard mount. Routes through the
  // SAME 3-tier lookup as the sidebar Study Plan view (commit 994933e) so
  // both mounts land in AssignedPracticeShell with Tier-1 precision. The
  // bank modules are corpus chunks (bundleGuard), so they're awaited via
  // corpusLoader; the drillChip selector statically imports both banks, so
  // it rides along as a dynamic import too. On any load failure we fall back
  // to the legacy module/section path rather than a dead button.
  const handleStartTodaysActivity = async (activity) => {
    if (!activity || !onStartPractice) return;
    try {
      const [bank, rwBank, chipMod] = await Promise.all([
        loadMathBank(),
        loadRWBank(),
        import('../services/selectors/drillChip'),
      ]);
      const route = resolveActivityDrill(
        {
          activity,
          weaknesses: Array.isArray(studyPlan?.weaknesses) ? studyPlan.weaknesses : [],
          cachedRows: [],
          answeredQuestionIds,
        },
        {
          getTargetedWeaknessSet: bank.getTargetedWeaknessSet,
          getQuestionsBySkillIds: bank.getQuestionsBySkillIds,
          getRWTargetedWeaknessSet: rwBank.getTargetedWeaknessSet,
          getRWQuestionsBySkillIds: rwBank.getQuestionsBySkillIds,
          getDrillChipForWeakness: chipMod.getDrillChipForWeakness,
        },
      );
      if (route?.kind === 'assigned') {
        onStartPractice(null, null, {
          questionIds: route.questionIds,
          source: 'home-todays-tasks',
          label: route.label,
          weakness: route.weakness,
        });
        return;
      }
      if (route?.kind === 'module') {
        // Legacy prescriptive shell — reachable as a FALLBACK only.
        onStartPractice(route.moduleId, route.sectionName);
        return;
      }
      // Unroutable activity (no drill pool, no module) — never leave a dead
      // button: send the student to the plan view where the activity's full
      // context (and its Weekly View fallbacks) live.
      showToast({ type: 'info', message: 'No drill set is available for this activity yet — opening your Study Plan.' });
      setActiveTab('plan');
    } catch {
      if (activity?.moduleId) onStartPractice(activity.moduleId, activity.sectionName);
    }
  };

  // Strategy activities (Pacing Reset etc.) carry no moduleId/skillId — they
  // route to the timed pacing runner with the same personalized config the
  // PacingDrillCard builds from real test telemetry.
  const handleStartStrategyActivity = () => {
    const session = buildPacingSession(buildPacingTelemetry(practiceTestResults));
    const launch = onStartPacing || onStartPracticeTest;
    if (typeof launch === 'function') launch(session.config);
  };

  const formatTestDate = (dateStr) => {
    if (!dateStr) return '';
    // parseLocalDate: date-only strings must parse as LOCAL midnight (UTC
    // parse shows the previous day in negative-offset timezones).
    const date = parseLocalDate(dateStr);
    return date ? date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : '';
  };

  const handleSelectDate = (dateValue) => {
    if (dateValue && onUpdateTestDate) {
      onUpdateTestDate(dateValue);
      setSelectedDate(dateValue);
    }
    setShowDatePicker(false);
  };

  useEffect(() => { injectAnimations(); }, []);

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 17) return 'Good afternoon';
    return 'Good evening';
  };

  const animatedScore = useCountUp(projectedScore || user?.currentScore || 0, 800, 300);

  // For the projected-score line draw-on (#15) — skip the reveal entirely for
  // reduced-motion users so the chart just appears static (no delayed flash).
  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia
    && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const dismissedDelta = useMemo(() => {
    try { return studyPlanMeta?.artifactId ? localStorage.getItem(`dismissedDelta:${studyPlanMeta.artifactId}`) : null; }
    catch { return null; }
  }, [studyPlanMeta?.artifactId]);

  const buildScorePath = () => {
    if (!scoreHistory || scoreHistory.length === 0) {
      return "M 20 100 Q 60 90, 100 60 T 180 50 T 260 20 L 300 10";
    }
    const minScore = Math.min(...scoreHistory) - 20;
    const maxScore = Math.max(...scoreHistory) + 20;
    const range = maxScore - minScore || 1;
    const points = scoreHistory.map((s, i) => {
      const x = 20 + (i / Math.max(scoreHistory.length - 1, 1)) * 280;
      const y = 110 - ((s - minScore) / range) * 100;
      return { x, y };
    });
    if (points.length === 1) {
      return `M ${points[0].x} ${points[0].y} L ${points[0].x + 1} ${points[0].y}`;
    }
    let path = `M ${points[0].x} ${points[0].y}`;
    for (let i = 1; i < points.length; i++) {
      const cpx = (points[i - 1].x + points[i].x) / 2;
      path += ` C ${cpx} ${points[i - 1].y}, ${cpx} ${points[i].y}, ${points[i].x} ${points[i].y}`;
    }
    return path;
  };

  const handleAvatarClick = () => {
    trackAddPhotoClicked(user?.uid);
    if (onOpenProfile) onOpenProfile();
  };

  // #9b — while a returning user's data hydrates, show a skeleton instead of
  // flashing the empty/teaser state. Placed after all hooks; a genuinely new
  // account (not loading, no data) falls through to the designed empty states.
  const hasAnyData = !!studyPlan || practiceEntries.length > 0 || performanceTiles.hasData || (practiceTestResults?.length > 0);
  if (dataLoading && !hasAnyData) {
    return <DashboardSkeleton />;
  }

  return (
    <div className="student-dashboard-container">
      {/* Greeting — original layout, plus the profile pic (user call
          2026-06-06: the hero-card redesign was reverted; identity is a
          small avatar beside the greeting, nothing more). Avatar click
          opens Profile; camera badge signals add-a-photo when none set.
          firstName, not displayName — the user doc never carries
          displayName, so the old read rendered a nameless greeting. */}
      <div className="dashboard-header-row">
        <div className="dashboard-greeting-row">
          <button
            type="button"
            className="dashboard-avatar-btn"
            aria-label={user?.photoDataUrl ? 'Open your profile' : 'Add a profile photo'}
            onClick={handleAvatarClick}
          >
            <Avatar user={user} size={AVATAR_SIZES.md} />
            {!user?.photoDataUrl && (
              <span className="dashboard-avatar-camera" aria-hidden="true">
                <CameraIcon size={11} />
              </span>
            )}
          </button>
          <h1 className="dashboard-greeting">
            {getGreeting()}{user?.firstName ? `, ${user.firstName}` : ''}
          </h1>
        </div>
        {/* D-IH-2: hide the subtitle when TodaysTasksCard already anchors
            the user — it has its own copy. Brand-new users still see the
            longer pitch. */}
        {!(activeTab === 'dashboard' && hasStudyPlan) && (
          <p className="dashboard-subtitle">
            Study with your personalized AI learning plan and get instant hints, explanations, and more with our AI Tutor.
          </p>
        )}
        <div className="dashboard-top-tabs">
          <button
            className={`dashboard-top-tab${activeTab === 'dashboard' ? ' active' : ''}`}
            onClick={() => setActiveTab('dashboard')}
          >
            Dashboard
            {dashboardCount > 0 && (
              <span className="tab-count" aria-label={`${dashboardCount} tasks today`}>
                {dashboardCount}
              </span>
            )}
          </button>
          <button
            className={`dashboard-top-tab${activeTab === 'studyPlan' ? ' active' : ''}`}
            onClick={() => setActiveTab('studyPlan')}
          >
            Study Plan
            {studyPlanCount > 0 && (
              <span className="tab-count" aria-label={`${studyPlanCount} activities remaining`}>
                {studyPlanCount}
              </span>
            )}
            {studyPlanArtifact?.delta?.skillChanges?.length > 0 && !dismissedDelta && (
              <span className="tab-badge">Updated</span>
            )}
          </button>
        </div>
      </div>

      {activeTab === 'studyPlan' ? (
        <div className="studyplan-tab-content">
          {studyPlan?.weeks?.length ? (
            <StudyPlanDashboard
              variant="inline"
              studyPlan={studyPlan}
              studyPlanArtifact={studyPlanArtifact}
              studyPlanMeta={studyPlanMeta}
              practiceTestResults={practiceTestResults}
              practiceProgress={practiceProgress}
              drillDays={drillDays}
              skillProgress={skillProgress}
              reviewQueue={reviewQueue}
              adaptiveOverlay={adaptiveOverlay}
              predictionLog={predictionLog}
              answeredQuestionIds={answeredQuestionIds}
              user={user}
              onStartPractice={onStartPractice}
              onStartPracticeTest={onStartPracticeTest}
              onCompleteActivity={onCompleteActivity}
              onUncompleteActivity={onUncompleteActivity}
              onReviewPastTests={onReviewPastTests}
              onStartReview={onStartReview}
              onStartPacing={onStartPacing}
              onReviewTestWrong={onReviewTestWrong}
            />
          ) : (
            <div className="studyplan-empty-state">
              <div className="empty-state-icon"><ClipboardIcon size={36} /></div>
              <h3>No Study Plan Yet</h3>
              <p>
                {user?.firstName
                  ? `${user.firstName}, here's where your plan will live. One practice test builds it — which skills cost you points, where you rush, and what to fix first.`
                  : 'Take one practice test. Your plan gets built from every answer — which skills cost you points, where you rush, and what to fix first.'}
              </p>
              <button className="btn-primary" onClick={onStartPracticeTest}>Start Practice Test</button>
            </div>
          )}
        </div>
      ) : (
      <>
      {/* Performance Panel — D-IH-3: hide until the user has at least one
          practice attempt. An empty 3-card grid is dead pixels above the fold.
          (Restored 2026-06-06 by user call — the colorful tiles ARE the look.) */}
      {performanceTiles.hasData && (
      <div className="acely-performance-grid">
        <div className="acely-metric-card acely-accuracy-card">
          <div className="acely-metric-label">Practice Accuracy</div>
          <div className="acely-metric-value">{practicePercent || 0}%</div>
          <div className="acely-metric-detail">
            {totalCorrect} of {totalQuestions} correct · latest practice test
          </div>
        </div>
        <div className="acely-metric-stack">
          <div className="acely-split-card acely-strongest-card">
            {strongest ? (
              <>
                <div className="acely-split-left">{strongest.accuracy}%</div>
                <div className="acely-split-right">
                  <div className="acely-metric-label">Strongest Section</div>
                  <div className="acely-section-name">{strongest.label}</div>
                  <div className="acely-split-detail">{strongest.correct} of {strongest.total} correct</div>
                </div>
              </>
            ) : (
              <div className="acely-split-empty">
                <div className="acely-metric-label">Strongest Section</div>
                <div className="acely-empty-hint">Take a practice test to see your strongest section</div>
              </div>
            )}
          </div>
          <div className="acely-split-card acely-weakest-card">
            {opportunity && !opportunity.empty ? (
              <>
                <div className="acely-split-left">{opportunity.accuracy}%</div>
                <div className="acely-split-right">
                  <div className="acely-metric-label">Biggest Opportunity</div>
                  <div className="acely-section-name">{opportunity.label}</div>
                  <div className="acely-split-detail">{opportunity.correct} of {opportunity.total} correct</div>
                </div>
              </>
            ) : (
              <div className="acely-split-empty">
                <div className="acely-metric-label">Biggest Opportunity</div>
                <div className="acely-empty-hint">{opportunity?.empty ? `Take a test with ${opportunity.label} to compare your sections` : 'Take a practice test to compare your sections'}</div>
              </div>
            )}
          </div>
        </div>
      </div>
      )}
      {/* D-IH-4: hide the projected score chart until the user has at
          least 2 tests on file. With 0 or 1 tests the trend line is
          decorative noise. */}
      {scoreHistory.length >= 2 && (
      <div className="acely-projected-card">
        <div className="acely-projected-graph">
          <svg width="100%" height="100%" viewBox="0 0 400 120" preserveAspectRatio="none">
            {[60, 120, 180, 240].map(x => (
              <line key={x} x1={x} y1="0" x2={x} y2="120" stroke="rgba(0,0,0,0.06)" strokeWidth="1" />
            ))}
            <path
              d={buildScorePath()}
              fill="none"
              stroke="var(--color-brand-primary)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              pathLength="100"
              style={prefersReducedMotion ? undefined : {
                strokeDasharray: 100,
                animation: 'drawLine 800ms cubic-bezier(0.25, 0.1, 0.25, 1) 300ms both',
              }}
            />
          </svg>
        </div>
        <div className="acely-projected-info">
          <div className="acely-metric-value">{animatedScore || '--'}</div>
          <div className="acely-metric-label">Projected Score</div>
          {projectedRange && (
            <div className="acely-metric-detail">Likely range {projectedRange.low}–{projectedRange.high}</div>
          )}
          {projectedTestsCount > 0 && (
            <div className="acely-metric-detail">Based on {projectedTestsCount} test{projectedTestsCount !== 1 ? 's' : ''}</div>
          )}
        </div>
      </div>
      )}

      {/* Dashboard Content Grid */}
      <div className="dashboard-grid">
        <div className="dashboard-main-col">
          {/* Current SAT Score Section (When Edit is clicked) */}
          {showCurrentScorePicker && (
            <ScoreSlider
              value={tempCurrentScore}
              onChange={setTempCurrentScore}
              label="What's your current SAT Math score?"
              description="Enter your most recent practice test or official score"
              onSave={() => handleSelectCurrentScore(tempCurrentScore)}
              onCancel={() => setShowCurrentScorePicker(false)}
            />
          )}

          {/* Today's Tasks (Day 4) — replaces AI Practice Banner when a plan exists (D-IH-1).
              The legacy banner stays as the no-plan fallback so brand-new users still
              see a clear CTA before their first diagnostic. */}
          <h2 className="section-heading">Targeted Practice</h2>
          {hasStudyPlan ? (
            <>
              {/* Starter-plan framing: a plan built from the 15-minute
                  check-in is honest about its resolution. The line retires
                  itself the moment a full test supersedes the plan (the new
                  plan no longer carries planSource: 'mini-diagnostic'). */}
              {studyPlan?.planSource === 'mini-diagnostic' && (
                <div className="starter-plan-banner">
                  <span className="starter-plan-banner-text">
                    Starter plan, built from your 15-minute check-in.
                    A full practice test sharpens it into a complete diagnosis.
                  </span>
                  <button type="button" className="starter-plan-banner-cta" onClick={onStartPracticeTest}>
                    Take a full test
                  </button>
                </div>
              )}
              <TodaysTasksCard
                slice={todaySlice}
                adherence={sessionAdherence}
                dailyIntro={dailyIntro}
                firstName={user?.firstName}
                onStartActivity={handleStartTodaysActivity}
                onStartStrategy={handleStartStrategyActivity}
                onTakeTest={onStartPracticeTest}
              />
              {predictionSummary && (
                <div style={{ marginTop: '16px' }}>
                  <PredictedVsActualCard summary={predictionSummary} />
                </div>
              )}
            </>
          ) : showCheckInCard ? (
            /* On-ramp re-entry for students who skipped the signup check-in.
               Replaces (not joins) the "first test unlocks your plan" banner
               so day 0 keeps exactly one primary CTA. */
            <div className="ai-practice-banner">
              <div className="ai-banner-content">
                <div className="ai-banner-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </div>
                <div className="ai-banner-text-group">
                  <div className="ai-banner-title">
                    {user?.firstName
                      ? `${user.firstName}, a 15-minute check-in builds your starter plan.`
                      : 'A 15-minute check-in builds your starter plan.'}
                  </div>
                  <div className="ai-banner-desc">
                    24 quick questions, no prep needed. Prefer the real thing?{' '}
                    <button
                      type="button"
                      className="btn-ghost-blue ai-banner-warmup-link"
                      onClick={onStartPracticeTest}
                    >
                      take a full practice test
                    </button>
                  </div>
                </div>
              </div>
              <div className="ai-banner-controls">
                <button className="btn-launch" onClick={onStartCheckIn}>
                  Start the check-in
                </button>
              </div>
            </div>
          ) : (
            recommendations[0] && (
              <div className="ai-practice-banner">
                <div className="ai-banner-content">
                  <div className="ai-banner-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
                  </div>
                  <div className="ai-banner-text-group">
                    {/* Name-aware new-user promise (item 13) — this banner owns
                        the ONE "first test unlocks your plan" line; the hero
                        stays identity-only so the promise never repeats. */}
                    <div className="ai-banner-title">
                      {user?.firstName
                        ? `Hi ${user.firstName} — take your first practice test to unlock your plan.`
                        : 'Take your first practice test to unlock your plan.'}
                    </div>
                    <div className="ai-banner-desc">
                      Or warm up first:{' '}
                      <button
                        type="button"
                        className="btn-ghost-blue ai-banner-warmup-link"
                        onClick={() => handleWarmUpClick(recommendations[0])}
                      >
                        {recommendations[0].title.toLowerCase()}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="ai-banner-controls">
                  <div className="accuracy-group">
                    <span className="accuracy-label">Accuracy <span style={{fontSize: '0.75rem'}}>ⓘ</span></span>
                    <span className="accuracy-pill">{practicePercent || 0}%</span>
                  </div>
                  {/* The first practice test is the personalization on-ramp —
                      this banner only renders when no study plan exists, and a
                      plan is built FROM a test, so the practice-test list is
                      the right destination here. (Once a plan exists this
                      banner is replaced by TodaysTasksCard, which IS today's
                      plan.) Previously this ran recommendations[0].action,
                      which for day-0 users is 'browseModules' — a no-op. */}
                  <button className="btn-launch" onClick={onStartPracticeTest}>
                    Launch Practice
                  </button>
                </div>
              </div>
            )
          )}

          {/* QUESTIONS YOU STRUGGLED WITH (item 16) — the page's strongest
              proof it knows this student: their actual missed questions,
              actionable in one tap. Hidden entirely without misses. */}
          {recentMisses.length > 0 && (
            <div className="recent-misses-card">
              <div className="rm-header">
                <h3 className="rm-title">Questions you struggled with</h3>
                <span className="rm-sub">From your last test</span>
              </div>
              {recentMisses.map((m) => (
                <div className="rm-row" key={m.key}>
                  <div className="rm-row-main">
                    <div className="rm-skill">
                      {m.skills.length > 0 ? formatPatternLabel(m.skills[0]) : 'Mixed skills'}
                      {m.difficulty ? <span className="rm-difficulty"> · {m.difficulty}</span> : null}
                    </div>
                    {/* Full stem rendered, CSS line-clamped — never string-cut
                        (a JS clamp mid-LaTeX breaks MathText rendering). */}
                    {m.stem && (
                      <div className="rm-stem"><MathText text={m.stem} /></div>
                    )}
                  </div>
                  {onRetrySimilar && m.question?.skills?.length > 0 && (
                    <button
                      type="button"
                      className="rm-retry"
                      onClick={() => onRetrySimilar(m.question)}
                    >
                      Retry similar
                    </button>
                  )}
                </div>
              ))}
            </div>
          )}

          <h2 className="section-heading">Review & Pacing</h2>
          {/* "How you test" (item 17) — one significance-gated identity FACT
              in the diagnostic-sentence editorial register. Pure narrative;
              the prescriptive coaching for it lives on the study-plan tab. */}
          {homeInsight && (
            <p className="home-insight-line">
              How you test: {homeInsight.stat} {homeInsight.label}.
            </p>
          )}
          <div className="dashboard-actions-grid">
            {/* DAILY REVIEW LOOP */}
            <DailyReviewCard
              reviewQueue={reviewQueue}
              reviewStreak={reviewStreak}
              onStartReview={onStartReview}
            />

            {/* PACING TRAINING */}
            <PacingDrillCard
              questionTelemetry={buildPacingTelemetry(practiceTestResults)}
              onStartPacing={onStartPacing || onStartPracticeTest}
            />
          </div>

          {/* STUDY PLAN TEASER — full plan lives in the Study Plan tab */}
          {studyPlan?.weeks?.length ? (
            <div className="studyplan-teaser-card" onClick={() => setActiveTab('studyPlan')} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && setActiveTab('studyPlan')}>
              <div className="teaser-header">
                <span className="teaser-icon"><ClipboardIcon size={18} /></span>
                <h3>Your Study Plan</h3>
                {studyPlanArtifact?.delta?.skillChanges?.length > 0 && (
                  <span className="teaser-badge">Updated</span>
                )}
              </div>
              <p className="teaser-summary">
                {studyPlan.weeks.length}-week plan &bull; {studyPlan.weeks.reduce((sum, w) => sum + (w.activities?.length || 0), 0)} activities
                {studyPlan.summary?.headline ? ` — ${studyPlan.summary.headline}` : ''}
              </p>
              <span className="teaser-cta">View Full Plan &rarr;</span>
            </div>
          ) : null}
        </div>
        
        <div className="dashboard-side-col">
          {/* Acely-polish (Day 1): right-rail composition.
              Order matches the Acely reference: calendar (effort) → current
              score (delta) → goal/countdown two-up. The legacy
              DashboardDiagnosticWidget stays below the new tiles. */}
          {hasStudyPlan && (
            <CalendarMonth practicedDays={practicedDayKeys} testDate={user?.testDate} />
          )}

          {latestScore !== null && (
            <div className="dashboard-tile">
              <div className="dashboard-tile-eyebrow">Current Score</div>
              <div className="dashboard-tile-row">
                <span className="dashboard-tile-num">{latestScore}</span>
                {scoreDelta !== null && (
                  <span className={`dashboard-tile-delta ${scoreDelta >= 0 ? 'is-up' : 'is-down'}`}>
                    {scoreDelta >= 0 ? '↑' : '↓'} {Math.abs(scoreDelta)} pts
                  </span>
                )}
              </div>
              {projectedTestsCount > 0 && (
                <div className="dashboard-tile-sub">
                  Across {projectedTestsCount} test{projectedTestsCount !== 1 ? 's' : ''}
                </div>
              )}
            </div>
          )}

          {(user?.targetScore || user?.testDate) && (() => {
            const testDateIsPast = daysUntilTest !== null && daysUntilTest < 0;
            // Scale-safe goal comparison (1.4): a 400-1600 composite must never
            // "achieve" a 200-800 section target.
            const goalArgs = { latestScore, targetScore: user?.targetScore, isMultiSection: latestIsMultiSection };
            const goalAchieved = isGoalAchieved(goalArgs);
            const goalAboveDelta = goalDelta(goalArgs);
            return (
              <div className="dashboard-tile-pair">
                {user?.targetScore && (
                  <div className={`dashboard-tile ${goalAchieved ? 'is-positive' : ''}`}>
                    <div className="dashboard-tile-eyebrow">
                      {goalAchieved ? 'Goal Achieved' : 'Goal Score'}
                    </div>
                    <div className="dashboard-tile-num">{user.targetScore}</div>
                    <div className="dashboard-tile-sub">
                      {goalAchieved
                        ? `+${goalAboveDelta} pts above target`
                        : (user?.targetSchools?.[0]
                          // School anchor (item 14) — WHY the target matters.
                          // Single median, not a range: collegeData.satMath is
                          // the 50th percentile only.
                          ? (
                            <span className="dashboard-tile-school">
                              <span className="tile-school-name">{user.targetSchools[0].name}</span>
                              <span className="tile-school-median">Median Math: {user.targetSchools[0].satMath}</span>
                            </span>
                          )
                          : 'From onboarding')}
                    </div>
                  </div>
                )}
                {user?.testDate && (
                  <div className={`dashboard-tile ${testDateIsPast ? 'is-warn' : ''}`}>
                    <div className="dashboard-tile-eyebrow">
                      {testDateIsPast ? 'Test Date' : 'Days Until Exam'}
                    </div>
                    <div className="dashboard-tile-num">
                      {testDateIsPast ? '—' : (daysUntilTest ?? '—')}
                    </div>
                    <div className="dashboard-tile-sub">
                      {testDateIsPast
                        ? `Was ${Math.abs(daysUntilTest)} days ago — update in settings`
                        : parseLocalDate(user.testDate)?.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </div>
                  </div>
                )}
              </div>
            );
          })()}

          {/* AI DIAGNOSTIC & INSIGHTS — kept; visually below the new tiles. */}
          <DashboardDiagnosticWidget
            practiceTestResults={practiceTestResults}
            skillProgress={skillProgress}
            user={user}
            completedLessons={completedLessons}
            practiceProgress={practiceProgress}
            onViewFullDiagnosis={onViewFullDiagnosis}
            onStartPracticeTest={onStartPracticeTest}
            onStartPractice={onStartPractice}
          />
        </div>
      </div>
      </>
      )}
    </div>
  );
};

export default StudentDashboard;