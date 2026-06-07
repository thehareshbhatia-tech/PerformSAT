import React, { useState, useMemo, useEffect } from 'react';
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
import { getTodaySlice } from '../services/studyPlanGenerator';
import { getSessionAdherence } from '../services/selectors/sessionAdherence';
import { summarizePredictions } from '../services/selectors/predictionSummary';
import { getPracticedDayKeys } from '../services/selectors/practicedDays';
import { formatDailyIntro } from '../services/selectors/dailyIntro';
import { getMathWeaknesses, getRWWeaknesses } from '../services/selectors/weaknesses';
import { isGoalAchieved, goalDelta } from '../services/selectors/goalProgress';
import { getDaysUntilTest } from '../services/selectors/daysUntilTest';
import { buildPacingTelemetry } from '../services/selectors/pacingTelemetry';
import { formatHeroSubtitle } from '../services/selectors/heroSubtitle';
import { getRecentMisses } from '../services/selectors/recentMisses';
import { getIdentityInsights } from '../services/selectors/identityInsights';
import { formatPatternLabel } from '../services/selectors/missedPatternLabel';
import { getPracticeTestById } from '../data/practiceTests';
import { MathText } from './MathText';
import { trackAddPhotoClicked } from '../services/analyticsService';
import { PlayIcon, ChartBarIcon, TrendingUpIcon, ClipboardIcon, CameraIcon } from '../design/icons';
import { parseLocalDate } from '../utils/localDate';
import { injectAnimations, useCountUp } from '../design/animations';
import { DataCard } from './ui/DataCard';
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
  completedLessons,
  practiceProgress,
  practiceTestResults,
  reviewQueue,
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
}) => {
  const [activeTab, setActiveTab] = useState('dashboard');
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
  const totalCorrect = practiceEntries.reduce((sum, [_, p]) => sum + (p.bestScore || 0), 0);
  const totalQuestions = practiceEntries.reduce((sum, [_, p]) => sum + (p.totalQuestions || 5), 0);
  const practicePercent = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;

  const { projectedScore, projectedTestsCount, scoreHistory, latestIsMultiSection } = useMemo(() => {
    if (!practiceTestResults || Object.keys(practiceTestResults).length === 0) {
      return { projectedScore: null, projectedTestsCount: 0, scoreHistory: [], latestIsMultiSection: undefined };
    }
    const tests = Object.values(practiceTestResults)
      .filter(t => t.bestScaledScore)
      .sort((a, b) => {
        const dateA = a.lastAttemptAt?.toDate?.() || new Date(a.lastAttemptAt);
        const dateB = b.lastAttemptAt?.toDate?.() || new Date(b.lastAttemptAt);
        return dateA - dateB;
      });
    if (tests.length === 0) return { projectedScore: null, projectedTestsCount: 0, scoreHistory: [], latestIsMultiSection: undefined };
    const history = tests.map(t => t.bestScaledScore);
    const recentTests = tests.slice(-3).reverse();
    const weights = [0.5, 0.3, 0.2];
    let totalWeight = 0;
    let weightedSum = 0;
    recentTests.forEach((test, i) => {
      const weight = weights[i] || 0.2;
      weightedSum += test.bestScaledScore * weight;
      totalWeight += weight;
    });
    return {
      projectedScore: Math.round(weightedSum / totalWeight),
      projectedTestsCount: tests.length,
      scoreHistory: history,
      // Scale of the most recent test, so the goal tile compares like-for-like (1.4).
      latestIsMultiSection: tests[tests.length - 1]?.isMultiSection,
    };
  }, [practiceTestResults]);

  // Compute per-module practice accuracy (correct / total questions attempted)
  const moduleAccuracy = useMemo(() => {
    const acc = {};
    const moduleIds = MODULES.map(m => m.id);
    Object.entries(practiceProgress || {}).forEach(([key, data]) => {
      if (data.bestScore === undefined) return;
      // Match key against known module IDs (handles hyphenated IDs like "linear-equations")
      const matchedModule = moduleIds.find(id => key.startsWith(id + '-'));
      if (!matchedModule) return;
      if (!acc[matchedModule]) acc[matchedModule] = { correct: 0, total: 0 };
      acc[matchedModule].correct += (data.bestScore || 0);
      acc[matchedModule].total += (data.totalQuestions || 5);
    });
    return acc;
  }, [practiceProgress]);

  const practicedModules = MODULES
    .map(m => {
      const a = moduleAccuracy[m.id];
      if (!a || a.total === 0) return null;
      return { ...m, accuracy: Math.round((a.correct / a.total) * 100) };
    })
    .filter(Boolean);

  const strongest = practicedModules.length > 0
    ? practicedModules.reduce((a, b) => a.accuracy > b.accuracy ? a : b)
    : null;
  const weakest = practicedModules.length > 1
    ? practicedModules.reduce((a, b) => a.accuracy < b.accuracy ? a : b)
    : null;

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
    () => getSessionAdherence({ practiceProgress, practiceTestResults }),
    [practiceProgress, practiceTestResults],
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
    () => getPracticedDayKeys({ practiceProgress, practiceTestResults }),
    [practiceProgress, practiceTestResults],
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
  // Hero subtitle — exactly ONE editorial fact (supersedes the D-IH-2 pitch
  // line). New users get a FIXED string, never composer output; returning
  // users with nothing fresh to say get an identity-only hero (null).
  const heroLine = useMemo(() => {
    const composed = formatHeroSubtitle({
      todaySlice,
      latestScore,
      targetScore: user?.targetScore,
      isMultiSection: latestIsMultiSection,
      daysUntilTest,
    });
    // No fixed new-user fallback here: when there's no plan, the AI Practice
    // Banner below carries the one "first test unlocks your plan" promise
    // (with its CTA). Repeating it 200px apart is exactly the slop the
    // register rule bans — the hero degrades to identity-only instead.
    return composed;
  }, [todaySlice, latestScore, user?.targetScore, latestIsMultiSection, daysUntilTest]);
  // "Questions you struggled with" (item 16) — wrong answers from the last
  // test, hardest first, each with a retry-similar path into the bank.
  const recentMisses = useMemo(
    () => getRecentMisses(practiceTestResults, { resolveTest: getPracticeTestById }),
    [practiceTestResults],
  );
  // One significance-gated "How you test" fact (item 17) — the FACT only
  // (stat + label); the prescriptive text stays on the study-plan tab.
  const homeInsight = useMemo(() => getIdentityInsights(studyPlan)[0] || null, [studyPlan]);
  // Tab count badges (Day 1 Acely-polish):
  //   dashboardCount = activities scheduled today that aren't completed
  //   studyPlanCount = total incomplete activities across all weeks
  const dashboardCount = useMemo(() => {
    if (!todaySlice || todaySlice.kind === 'no-plan' || todaySlice.kind === 'refreshing') return 0;
    return Array.isArray(todaySlice.activities) ? todaySlice.activities.length : 0;
  }, [todaySlice]);
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

  const handleAddPhoto = () => {
    trackAddPhotoClicked(user?.uid);
    if (onOpenProfile) onOpenProfile();
  };

  return (
    <div className="student-dashboard-container">
      {/* IDENTITY HERO — the page's sole anchor (made-for-me batch).
          Left-aligned lockup: avatar lg 56 / eyebrow / h1 name / ONE
          editorial subtitle. firstName, not displayName (the user doc never
          carries displayName); when firstName is absent the greeting itself
          becomes the h1 — no email-localpart in a heading. The subtitle
          renders on the dashboard tab only (the plan tab's sp-hero owns its
          own copy — one identity, not two competing heroes). */}
      <div className="dashboard-header-row">
        <header className="dashboard-hero">
          <div className="dashboard-hero-avatar-col">
            <div className="dashboard-hero-avatar-wrap">
              <Avatar user={user} size={AVATAR_SIZES.lg} />
              {!user?.photoDataUrl && (
                <span className="dashboard-hero-camera-badge" aria-hidden="true">
                  <CameraIcon size={12} />
                </span>
              )}
            </div>
            {!user?.photoDataUrl && (
              <button
                type="button"
                className="dashboard-hero-addphoto"
                aria-label="Add a profile photo"
                onClick={handleAddPhoto}
              >
                Add a photo
              </button>
            )}
          </div>
          <div className="dashboard-hero-text">
            {user?.firstName ? (
              <>
                <div className="dashboard-hero-eyebrow">{getGreeting()}</div>
                <h1 className="dashboard-hero-name">{user.firstName}</h1>
              </>
            ) : (
              <h1 className="dashboard-hero-name">{getGreeting()}</h1>
            )}
            {activeTab === 'dashboard' && heroLine && (
              <p className="dashboard-hero-subtitle">{heroLine}</p>
            )}
          </div>
        </header>
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
              skillProgress={skillProgress}
              reviewQueue={reviewQueue}
              predictionLog={predictionLog}
              user={user}
              onStartPractice={onStartPractice}
              onStartPracticeTest={onStartPracticeTest}
              onCompleteActivity={onCompleteActivity}
              onUncompleteActivity={onUncompleteActivity}
              onReviewPastTests={onReviewPastTests}
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
              <TodaysTasksCard
                slice={todaySlice}
                adherence={sessionAdherence}
                dailyIntro={dailyIntro}
                firstName={user?.firstName}
                onStartActivity={(activity) => {
                  if (activity?.moduleId) {
                    onStartPractice(activity.moduleId, activity.sectionName);
                  }
                }}
                onTakeTest={onStartPracticeTest}
              />
              {predictionSummary && (
                <div style={{ marginTop: '16px' }}>
                  <PredictedVsActualCard summary={predictionSummary} />
                </div>
              )}
            </>
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
                      Or warm up first: {recommendations[0].title.toLowerCase()}
                    </div>
                  </div>
                </div>
                <div className="ai-banner-controls">
                  <div className="accuracy-group">
                    <span className="accuracy-label">Accuracy <span style={{fontSize: '0.75rem'}}>ⓘ</span></span>
                    <span className="accuracy-pill">{practicePercent || 0}%</span>
                  </div>
                  <button className="btn-launch" onClick={() => handleRecommendationClick(recommendations[0])}>
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

          {/* QUIET METRIC STRIP (item 18 / FINDING-003) — the old saturated
              3-card grid demoted to label-value pairs below Today's Tasks so
              the identity hero stays the page's only anchor. Empty-hint
              variants are gone (subtraction): only real data renders. */}
          {practiceEntries.length > 0 && (
            <div className="dashboard-metric-strip">
              <div className="metric-strip-item">
                <span className="metric-strip-label">Practice Accuracy</span>
                <span className="metric-strip-value">{practicePercent || 0}%</span>
                <span className="metric-strip-detail">{totalCorrect} of {totalQuestions} correct</span>
              </div>
              {strongest && (
                <div className="metric-strip-item">
                  <span className="metric-strip-label">Strongest Section</span>
                  <span className="metric-strip-value">{strongest.accuracy}%</span>
                  <span className="metric-strip-detail">{strongest.title}</span>
                </div>
              )}
              {weakest && (
                <div className="metric-strip-item">
                  <span className="metric-strip-label">Biggest Opportunity</span>
                  <span className="metric-strip-value">{weakest.accuracy}%</span>
                  <span className="metric-strip-detail">{weakest.title}</span>
                </div>
              )}
            </div>
          )}
          {/* Projected score moves with the strip's section (D-IH-4 gate kept:
              the trend line is decorative noise under 2 tests). */}
          {scoreHistory.length >= 2 && (
          <div className="acely-projected-card">
            <div className="acely-projected-graph">
              <svg width="100%" height="100%" viewBox="0 0 400 120" preserveAspectRatio="none">
                {[60, 120, 180, 240].map(x => (
                  <line key={x} x1={x} y1="0" x2={x} y2="120" stroke="rgba(0,0,0,0.06)" strokeWidth="1" />
                ))}
                <path d={buildScorePath()} fill="none" stroke="var(--color-brand-primary)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="acely-projected-info">
              <div className="acely-metric-value">{animatedScore || '--'}</div>
              <div className="acely-metric-label">Projected Score</div>
              {projectedTestsCount > 0 && (
                <div className="acely-metric-detail">Based on {projectedTestsCount} test{projectedTestsCount !== 1 ? 's' : ''}</div>
              )}
            </div>
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