import React, { useState, useMemo, useEffect } from 'react';
import { generateRecommendations } from '../services/recommendationService';
import SkillDiagnosticSummary from './SkillDiagnosticSummary';
import ScoreSlider from './ScoreSlider';
import CollegePicker from './CollegePicker';
import StudyPlanDashboard from './StudyPlanDashboard';
import DashboardDiagnosticWidget from './DashboardDiagnosticWidget';
import { PlayIcon, ChartBarIcon, TrendingUpIcon } from '../design/icons';
import { injectAnimations, useCountUp } from '../design/animations';
import { DataCard } from './ui/DataCard';
import { PrimaryButton, SecondaryButton } from './ui/Button';

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

const DonutChart = ({ percent, size = 120, strokeWidth = 10, color = 'var(--color-success-600)' }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;

  return (
    <svg width={size} height={size} role="progressbar" aria-valuenow={percent} aria-valuemin={0} aria-valuemax={100} style={{ transform: 'rotate(-90deg)' }}>
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="var(--color-slate-200)"
        strokeWidth={strokeWidth}
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
      />
    </svg>
  );
};

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
  skillProgress,
  onCompleteActivity,
  onUncompleteActivity
}) => {
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
  const totalPracticed = practiceEntries.length;
  const totalCorrect = practiceEntries.reduce((sum, [_, p]) => sum + (p.bestScore || 0), 0);
  const totalQuestions = totalPracticed * 5;
  const practicePercent = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;

  const calculateProjectedScore = () => {
    if (!practiceTestResults || Object.keys(practiceTestResults).length === 0) {
      return { score: null, testsCount: 0 };
    }
    const tests = Object.values(practiceTestResults)
      .filter(t => t.bestScaledScore)
      .sort((a, b) => {
        const dateA = a.lastAttemptAt?.toDate?.() || new Date(a.lastAttemptAt);
        const dateB = b.lastAttemptAt?.toDate?.() || new Date(b.lastAttemptAt);
        return dateB - dateA;
      });
    if (tests.length === 0) return { score: null, testsCount: 0 };
    const recentTests = tests.slice(0, 3);
    const weights = [0.5, 0.3, 0.2];
    let totalWeight = 0;
    let weightedSum = 0;
    recentTests.forEach((test, i) => {
      const weight = weights[i] || 0.2;
      weightedSum += test.bestScaledScore * weight;
      totalWeight += weight;
    });
    return {
      score: Math.round(weightedSum / totalWeight),
      testsCount: tests.length
    };
  };

  const { score: projectedScore, testsCount: projectedTestsCount } = calculateProjectedScore();

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

  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const isMobile = windowWidth < 768;

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 17) return 'Good afternoon';
    return 'Good evening';
  };

  const animatedScore = useCountUp(projectedScore || user?.currentScore || 0, 800, 300);

  const ScoreRing = ({ score, target, size = 120 }) => {
    const strokeWidth = 10;
    const r = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * r;
    const progress = target ? Math.min((score || 0) / target, 1) : 0;
    const offset = circumference - progress * circumference;

    return (
      <svg width={size} height={size} role="progressbar" style={{ transform: 'rotate(-90deg)' }}>
        <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="var(--color-slate-100)" strokeWidth={strokeWidth} />
        <circle
          cx={size/2} cy={size/2} r={r} fill="none"
          stroke="url(#orange-gradient)"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          style={{ transition: 'stroke-dashoffset 1s cubic-bezier(0.25, 0.1, 0.25, 1)' }}
        />
        <defs>
          <linearGradient id="orange-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--color-brand-orange-400)" />
            <stop offset="100%" stopColor="var(--color-brand-orange-600)" />
          </linearGradient>
        </defs>
      </svg>
    );
  };

  return (
    <div style={{ maxWidth: '1440px', margin: '0 auto', padding: isMobile ? '1rem' : '2rem 3rem', fontFamily: 'var(--font-ui)' }}>
      {/* Greeting */}
      <h1 style={{
        fontSize: '2rem',
        fontWeight: '700',
        letterSpacing: '-0.03em',
        color: 'var(--color-slate-900)',
        marginBottom: '1.5rem',
      }}>
        {getGreeting()}{user?.firstName ? `, ${user.firstName}` : ''}
      </h1>

      {/* Score Hero Card - Apple Style (Clean, White, Content-First) */}
      <div style={{
        background: 'rgba(255, 255, 255, 0.65)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        borderRadius: 'var(--radius-2xl)',
        boxShadow: 'var(--shadow-md)',
        border: '1px solid rgba(255, 255, 255, 0.8)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.4)',
        borderRight: '1px solid rgba(255, 255, 255, 0.4)',
        marginBottom: '1.5rem',
        padding: isMobile ? '1.5rem' : '2rem',
        display: 'flex',
        alignItems: isMobile ? 'flex-start' : 'center',
        flexDirection: isMobile ? 'column' : 'row',
        gap: '2.5rem',
        position: 'relative',
        overflow: 'hidden',
        color: 'var(--color-slate-900)'
      }}>
        {/* Score Ring */}
        <div style={{ position: 'relative', flexShrink: 0 }}>
          <ScoreRing
            score={projectedScore || user?.currentScore || 0}
            target={user?.targetScore || 800}
            size={isMobile ? 120 : 160}
          />
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
          }}>
            <div style={{
              fontSize: isMobile ? '2.25rem' : '2.75rem',
              fontWeight: '700',
              lineHeight: 1,
              letterSpacing: '-0.03em',
            }}>
              {animatedScore || '--'}
            </div>
            <div style={{
              fontSize: '0.8125rem',
              color: 'var(--color-slate-500)',
              fontWeight: '500',
              marginTop: '4px',
              textTransform: 'uppercase',
              letterSpacing: '0.04em'
            }}>
              {projectedScore ? 'Projected' : 'Current'}
            </div>
          </div>
        </div>

        {/* Score Details */}
        <div style={{ flex: 1, zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem', marginBottom: '0.5rem' }}>
            {user?.targetScore && (
              <span style={{ fontSize: '1.25rem', fontWeight: '500', letterSpacing: '-0.01em', color: 'var(--color-slate-700)' }}>
                Target: <strong style={{ color: 'var(--color-slate-900)' }}>{user.targetScore}</strong>
              </span>
            )}
            {user?.targetScore && (projectedScore || user?.currentScore) && (
              <span style={{
                fontSize: '0.875rem',
                background: 'var(--color-brand-peach-100)',
                color: 'var(--color-brand-orange-600)',
                padding: '0.25rem 0.75rem',
                borderRadius: 'var(--radius-full)',
                fontWeight: '600',
                letterSpacing: '-0.01em'
              }}>
                {user.targetScore - (projectedScore || user.currentScore || 0)} points to go
              </span>
            )}
          </div>

          <div style={{ display: 'flex', gap: isMobile ? '1.5rem' : '3rem', flexWrap: 'wrap', marginTop: '1.5rem' }}>
            {daysUntilTest !== null && daysUntilTest > 0 && (
              <div>
                <div style={{ fontSize: '1.75rem', fontWeight: '700', letterSpacing: '-0.02em', color: 'var(--color-slate-900)' }}>{daysUntilTest}</div>
                <div style={{ fontSize: '0.8125rem', color: 'var(--color-slate-500)', fontWeight: '500' }}>days to test</div>
              </div>
            )}
            <div>
              <div style={{ fontSize: '1.75rem', fontWeight: '700', letterSpacing: '-0.02em', color: 'var(--color-slate-900)' }}>{projectedTestsCount || 0}</div>
              <div style={{ fontSize: '0.8125rem', color: 'var(--color-slate-500)', fontWeight: '500' }}>tests taken</div>
            </div>
            <div>
              <div style={{ fontSize: '1.75rem', fontWeight: '700', letterSpacing: '-0.02em', color: 'var(--color-slate-900)' }}>{completionPercent}%</div>
              <div style={{ fontSize: '0.8125rem', color: 'var(--color-slate-500)', fontWeight: '500' }}>lessons done</div>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', marginLeft: isMobile ? '0' : 'auto', marginTop: isMobile ? '0.5rem' : '0' }}>
              <SecondaryButton onClick={() => { setTempCurrentScore(user?.currentScore || 500); setShowCurrentScorePicker(true); }} style={{ padding: '0.5rem 1rem', fontSize: '0.875rem', background: 'rgba(255,255,255,0.5)' }}>
                Update Score
              </SecondaryButton>
            </div>
          </div>
        </div>
      </div>


      {/* Dashboard Content */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
        marginBottom: '2rem'
      }}>
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

        {/* YOUR NEXT STEP */}
        {recommendations[0] && (
          <DataCard style={{ background: 'rgba(255, 255, 255, 0.65)', border: '1px solid rgba(255,255,255,0.8)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: '0.8125rem', color: 'var(--color-brand-orange-600)', fontWeight: '600', marginBottom: '0.25rem', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                  Recommended Next Step
                </div>
                <div style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--color-slate-900)', letterSpacing: '-0.02em' }}>
                  {recommendations[0].title}
                </div>
                {recommendations[0].subtitle && (
                  <div style={{ fontSize: '0.875rem', color: 'var(--color-slate-500)', marginTop: '0.25rem' }}>
                    {recommendations[0].subtitle}
                  </div>
                )}
              </div>
              <PrimaryButton onClick={() => handleRecommendationClick(recommendations[0])} style={{ borderRadius: 'var(--radius-full)', padding: '0.5rem 1.25rem' }}>
                Start →
              </PrimaryButton>
            </div>
          </DataCard>
        )}

        {/* AI STUDY PLAN */}
        <StudyPlanDashboard
          studyPlan={studyPlan}
          practiceTestResults={practiceTestResults}
          user={user}
          onNavigateToModule={onNavigateToModule}
          onStartPractice={onStartPractice}
          onStartPracticeTest={onStartPracticeTest}
          onCompleteActivity={onCompleteActivity}
          onUncompleteActivity={onUncompleteActivity}
        />
      </div>

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
  );
};

export default StudentDashboard;