import React, { useState, useMemo, useEffect } from 'react';
import { generateRecommendations } from '../services/recommendationService';
import SkillDiagnosticSummary from './SkillDiagnosticSummary';
import ScoreSlider from './ScoreSlider';
import CollegePicker from './CollegePicker';
import StudyPlanDashboard from './StudyPlanDashboard';
import DashboardDiagnosticWidget from './DashboardDiagnosticWidget';
import DailyReviewCard from './DailyReviewCard';
import PacingDrillCard from './PacingDrillCard';
import { PlayIcon, ChartBarIcon, TrendingUpIcon } from '../design/icons';
import { injectAnimations, useCountUp } from '../design/animations';
import { DataCard } from './ui/DataCard';
import { PrimaryButton, SecondaryButton } from './ui/Button';
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
  dueReviewCount = 0,
  onNavigateToModule,
  onUpdateTestDate,
  onUpdateTargetScore,
  onUpdateCurrentScore,
  onUpdateTargetSchools,
  onStartPractice,
  onStartReview,
  onStartPracticeTest,
  onViewFullDiagnosis,
  allLessons,
  skillDiagnosticSummary,
  studyPlan,
  studyPlanArtifact,
  studyPlanMeta,
  skillProgress,
  onCompleteActivity,
  onUncompleteActivity
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

  const practiceEntries = Object.entries(practiceProgress || {});
  const totalCorrect = practiceEntries.reduce((sum, [_, p]) => sum + (p.bestScore || 0), 0);
  const totalQuestions = practiceEntries.reduce((sum, [_, p]) => sum + (p.totalQuestions || 5), 0);
  const practicePercent = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;

  const { projectedScore, projectedTestsCount, scoreHistory } = useMemo(() => {
    if (!practiceTestResults || Object.keys(practiceTestResults).length === 0) {
      return { projectedScore: null, projectedTestsCount: 0, scoreHistory: [] };
    }
    const tests = Object.values(practiceTestResults)
      .filter(t => t.bestScaledScore)
      .sort((a, b) => {
        const dateA = a.lastAttemptAt?.toDate?.() || new Date(a.lastAttemptAt);
        const dateB = b.lastAttemptAt?.toDate?.() || new Date(b.lastAttemptAt);
        return dateA - dateB;
      });
    if (tests.length === 0) return { projectedScore: null, projectedTestsCount: 0, scoreHistory: [] };
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
      scoreHistory: history
    };
  }, [practiceTestResults]);

  const startedModules = moduleProgress.filter(m => m.completed > 0);
  const strongest = startedModules.length > 0
    ? startedModules.reduce((a, b) => a.percent > b.percent ? a : b)
    : null;
  const weakest = startedModules.length > 1
    ? startedModules.reduce((a, b) => a.percent < b.percent ? a : b)
    : null;

  const getDaysUntilTest = () => {
    if (!user?.testDate) return null;
    const testDate = new Date(user.testDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    testDate.setHours(0, 0, 0, 0);
    const diffTime = testDate - today;
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };
  const daysUntilTest = getDaysUntilTest();

  const recommendations = useMemo(() => {
    return generateRecommendations({
      completedLessons,
      practiceProgress,
      reviewQueue,
      testDate: user?.testDate,
      allLessons
    });
  }, [completedLessons, practiceProgress, reviewQueue, user?.testDate, allLessons]);

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
      onStartReview();
    } else if (rec.action.type === 'startLesson' && onNavigateToModule) {
      onNavigateToModule(rec.action.moduleId);
    } else if (rec.action.type === 'browseModules') {
      onNavigateToModule && onNavigateToModule('linear-equations');
    }
  };

  const formatTestDate = (dateStr) => {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
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

  return (
    <div className="student-dashboard-container">
      {/* Greeting */}
      <div className="dashboard-header-row">
        <h1 className="dashboard-greeting">
          {getGreeting()}{user?.displayName ? `, ${user.displayName.split(' ')[0]}` : ''}
        </h1>
        <p className="dashboard-subtitle">
          Study with your personalized AI learning plan and get instant hints, explanations, and more with our AI Tutor.
        </p>
        <div className="dashboard-top-tabs">
          <button
            className={`dashboard-top-tab${activeTab === 'dashboard' ? ' active' : ''}`}
            onClick={() => setActiveTab('dashboard')}
          >
            Dashboard
          </button>
          <button
            className={`dashboard-top-tab${activeTab === 'studyPlan' ? ' active' : ''}`}
            onClick={() => setActiveTab('studyPlan')}
          >
            Study Plan
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
              studyPlan={studyPlan}
              studyPlanArtifact={studyPlanArtifact}
              studyPlanMeta={studyPlanMeta}
              practiceTestResults={practiceTestResults}
              practiceProgress={practiceProgress}
              skillProgress={skillProgress}
              reviewQueue={reviewQueue}
              user={user}
              onNavigateToModule={onNavigateToModule}
              onStartPractice={onStartPractice}
              onStartPracticeTest={onStartPracticeTest}
              onCompleteActivity={onCompleteActivity}
              onUncompleteActivity={onUncompleteActivity}
            />
          ) : (
            <div className="studyplan-empty-state">
              <div className="empty-state-icon">📋</div>
              <h3>No Study Plan Yet</h3>
              <p>Take a practice test to generate your personalized study plan. Our AI will analyze your strengths and weaknesses to create a targeted plan.</p>
              <button className="btn-primary" onClick={onStartPracticeTest}>Start Practice Test</button>
            </div>
          )}
        </div>
      ) : (
      <>
      {/* Performance Panel */}
      <div className="acely-performance-grid">
        <div className="acely-metric-card acely-accuracy-card">
          <div className="acely-metric-label">Practice Accuracy</div>
          <div className="acely-metric-value">{practicePercent || 0}%</div>
          <div className="acely-metric-detail">
            {totalCorrect} of {totalQuestions} questions correct
          </div>
        </div>
        <div className="acely-metric-stack">
          <div className="acely-split-card acely-strongest-card">
            {strongest ? (
              <>
                <div className="acely-split-left">{strongest.percent}%</div>
                <div className="acely-split-right">
                  <div className="acely-metric-label">Strongest Section</div>
                  <div className="acely-section-name">{strongest.title}</div>
                </div>
              </>
            ) : (
              <div className="acely-split-empty">
                <div className="acely-metric-label">Strongest Section</div>
                <div className="acely-empty-hint">Complete a module to see your strongest area</div>
              </div>
            )}
          </div>
          <div className="acely-split-card acely-weakest-card">
            {weakest ? (
              <>
                <div className="acely-split-left">{weakest.percent}%</div>
                <div className="acely-split-right">
                  <div className="acely-metric-label">Biggest Opportunity</div>
                  <div className="acely-section-name">{weakest.title}</div>
                </div>
              </>
            ) : (
              <div className="acely-split-empty">
                <div className="acely-metric-label">Biggest Opportunity</div>
                <div className="acely-empty-hint">Start two modules to compare strengths</div>
              </div>
            )}
          </div>
        </div>
      </div>
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

          {/* YOUR NEXT STEP - AI Banner */}
          <h2 className="section-heading">Practice the Math Section</h2>
          {recommendations[0] && (
            <div className="ai-practice-banner">
              <div className="ai-banner-content">
                <div className="ai-banner-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
                </div>
                <div className="ai-banner-text-group">
                  <div className="ai-banner-title">
                    {recommendations[0].title}
                  </div>
                  <div className="ai-banner-desc">
                    Practice all Math domains and subdomains
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
          )}

          <h2 className="section-heading">Targeted Practice by Domain & Subdomain</h2>
          <div className="dashboard-actions-grid">
            {/* DAILY REVIEW LOOP */}
            <DailyReviewCard
              reviewQueue={reviewQueue}
              onStartReview={onStartReview}
            />

            {/* PACING TRAINING */}
            <PacingDrillCard
              questionTelemetry={(() => {
                const allAttempts = Object.values(practiceTestResults || {}).flatMap(t => t.attempts || []);
                return allAttempts.flatMap(a =>
                  (a.diagnosticData?.questionTelemetry || []).map((q, i) => ({ ...q, questionIndex: i }))
                );
              })()}
              onStartPacing={onStartPracticeTest}
            />
          </div>

          {/* STUDY PLAN TEASER — full plan lives in the Study Plan tab */}
          {studyPlan?.weeks?.length ? (
            <div className="studyplan-teaser-card" onClick={() => setActiveTab('studyPlan')} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && setActiveTab('studyPlan')}>
              <div className="teaser-header">
                <span className="teaser-icon">📋</span>
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
          {/* AI DIAGNOSTIC & INSIGHTS */}
          <DashboardDiagnosticWidget
            practiceTestResults={practiceTestResults}
            skillProgress={skillProgress}
            user={user}
            completedLessons={completedLessons}
            practiceProgress={practiceProgress}
            onViewFullDiagnosis={onViewFullDiagnosis}
            onStartPracticeTest={onStartPracticeTest}
            onNavigateToModule={onNavigateToModule}
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