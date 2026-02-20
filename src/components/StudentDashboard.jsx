import React, { useState, useMemo, useEffect } from 'react';
import { generateRecommendations } from '../services/recommendationService';
import SkillDiagnosticSummary from './SkillDiagnosticSummary';
import ScoreSlider from './ScoreSlider';
import CollegePicker from './CollegePicker';
import StudyPlanDashboard from './StudyPlanDashboard';
import DashboardDiagnosticWidget from './DashboardDiagnosticWidget';
import { colors, typography, spacing, radius, shadows, transitions, breakpoints } from '../design/tokens';
import { cardStyles, buttonStyles } from '../design/components';
import { PlayIcon, ChartBarIcon, TrendingUpIcon } from '../design/icons';
import { injectAnimations, useCountUp } from '../design/animations';

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
  { name: 'March 2027 SAT', date: '2027-03-13' },
  { name: 'May 2027 SAT', date: '2027-05-01' },
  { name: 'June 2027 SAT', date: '2027-06-05' },
];

// Module data
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

// Simple donut chart component
const DonutChart = ({ percent, size = 120, strokeWidth = 10, color = colors.semantic.success }) => {
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
        stroke={colors.surface.grayDark}
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

  // Filter to only show future SAT dates
  const getUpcomingSATDates = () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return SAT_TEST_DATES.filter(sat => new Date(sat.date) >= today);
  };

  // Get the SAT test name from a date
  const getSATNameFromDate = (dateStr) => {
    const sat = SAT_TEST_DATES.find(s => s.date === dateStr);
    return sat ? sat.name : null;
  };

  // Calculate total completed
  const totalCompleted = Object.values(completedLessons).filter(l => l?.completed).length;
  const completionPercent = Math.round((totalCompleted / TOTAL_LESSONS) * 100);

  // Get completed count per module
  const getModuleCompleted = (moduleId) => {
    return Object.keys(completedLessons).filter(key =>
      key.startsWith(`${moduleId}-`) && completedLessons[key]?.completed
    ).length;
  };

  // Calculate module progress for strongest/weakest
  const moduleProgress = MODULES.map(m => ({
    ...m,
    completed: getModuleCompleted(m.id),
    percent: Math.round((getModuleCompleted(m.id) / m.lessonCount) * 100)
  }));

  // Get practice stats
  const practiceEntries = Object.entries(practiceProgress || {});
  const totalPracticed = practiceEntries.length;
  const totalCorrect = practiceEntries.reduce((sum, [_, p]) => sum + (p.bestScore || 0), 0);
  const totalQuestions = totalPracticed * 5;
  const practicePercent = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;

  // Calculate projected SAT score from practice tests
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

  // Find strongest and weakest modules (only those with progress)
  const startedModules = moduleProgress.filter(m => m.completed > 0);
  const strongest = startedModules.length > 0
    ? startedModules.reduce((a, b) => a.percent > b.percent ? a : b)
    : null;
  const weakest = startedModules.length > 1
    ? startedModules.reduce((a, b) => a.percent < b.percent ? a : b)
    : null;

  // Calculate days until test
  const getDaysUntilTest = () => {
    if (!user?.testDate) return null;
    const testDate = new Date(user.testDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    testDate.setHours(0, 0, 0, 0);
    const diffTime = testDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const daysUntilTest = getDaysUntilTest();

  // Generate prescriptive recommendations
  const recommendations = useMemo(() => {
    return generateRecommendations({
      completedLessons,
      practiceProgress,
      reviewQueue,
      testDate: user?.testDate,
      allLessons
    });
  }, [completedLessons, practiceProgress, reviewQueue, user?.testDate, allLessons]);

  // Handle target score selection (legacy - kept for backwards compatibility)
  const handleSelectTargetScore = (score) => {
    if (score && onUpdateTargetScore) {
      onUpdateTargetScore(score);
    }
    setShowTargetPicker(false);
  };

  // Handle target schools selection
  const handleSelectTargetSchools = (schools) => {
    if (schools && schools.length > 0 && onUpdateTargetSchools) {
      onUpdateTargetSchools(schools);
    }
    setShowTargetPicker(false);
  };

  // Handle current score selection
  const handleSelectCurrentScore = (score) => {
    if (score && onUpdateCurrentScore) {
      onUpdateCurrentScore(score);
    }
    setShowCurrentScorePicker(false);
  };


  // Handle recommendation click
  const handleRecommendationClick = (rec) => {
    console.log('Recommendation clicked:', rec);
    if (!rec || !rec.action) return;

    if (rec.action.type === 'startPractice' && onStartPractice) {
      onStartPractice(rec.action.moduleId, rec.action.sectionName);
    } else if (rec.action.type === 'startReview' && onStartReview) {
      onStartReview();
    } else if (rec.action.type === 'startLesson' && onNavigateToModule) {
      onNavigateToModule(rec.action.moduleId);
    } else if (rec.action.type === 'browseModules') {
      // Navigate to modules view
      onNavigateToModule && onNavigateToModule('linear-equations'); // Default to first module
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

  // Inject animations on mount
  useEffect(() => { injectAnimations(); }, []);

  // Responsive hook
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const isMobile = windowWidth < breakpoints.tablet;

  // Time-of-day greeting
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 17) return 'Good afternoon';
    return 'Good evening';
  };

  // Animated score count-up for hero
  const animatedScore = useCountUp(projectedScore || user?.currentScore || 0, 800, 300);

  // Score Ring SVG component for hero
  const ScoreRing = ({ score, target, size = 120 }) => {
    const strokeWidth = 8;
    const r = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * r;
    const progress = target ? Math.min((score || 0) / target, 1) : 0;
    const offset = circumference - progress * circumference;

    return (
      <svg width={size} height={size} role="progressbar" aria-valuenow={score || 0} aria-valuemax={target || 800} aria-label={`Score: ${score || 0} out of ${target || 800}`} style={{ transform: 'rotate(-90deg)' }}>
        <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth={strokeWidth} />
        <circle
          cx={size/2} cy={size/2} r={r} fill="none"
          stroke={colors.accent.orange}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          style={{ transition: 'stroke-dashoffset 1s ease-in-out' }}
        />
      </svg>
    );
  };

  return (
    <div style={{ maxWidth: '960px', margin: '0 auto' }}>
      {/* Greeting */}
      <h1 style={{
        fontSize: typography.sizes['2xl'],
        fontWeight: typography.weights.bold,
        color: colors.text.primary,
        marginBottom: spacing.lg,
        fontFamily: typography.fontFamily,
      }}>
        {getGreeting()}, {user?.firstName || 'Student'}
      </h1>

      {/* Score Hero Card */}
      <div style={{
        ...cardStyles.dark,
        marginBottom: spacing.lg,
        padding: isMobile ? spacing.lg : spacing.xl,
        display: 'flex',
        alignItems: isMobile ? 'flex-start' : 'center',
        flexDirection: isMobile ? 'column' : 'row',
        gap: spacing.lg,
        animation: 'fadeInUp 500ms ease',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Background glow */}
        <div style={{
          position: 'absolute',
          top: '-50%',
          right: '-20%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: `radial-gradient(circle, rgba(234,88,12,0.15) 0%, transparent 70%)`,
          pointerEvents: 'none',
        }} />

        {/* Score Ring */}
        <div style={{ position: 'relative', flexShrink: 0 }}>
          <ScoreRing
            score={projectedScore || user?.currentScore || 0}
            target={user?.targetScore || 800}
            size={isMobile ? 100 : 120}
          />
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
          }}>
            <div style={{
              fontSize: isMobile ? typography.sizes['2xl'] : typography.sizes['3xl'],
              fontWeight: typography.weights.bold,
              color: colors.text.inverse,
              lineHeight: 1,
            }}>
              {animatedScore || '--'}
            </div>
            <div style={{
              fontSize: typography.sizes.xs,
              color: 'rgba(255,255,255,0.6)',
              marginTop: '2px',
            }}>
              {projectedScore ? 'Projected' : 'Current'}
            </div>
          </div>
        </div>

        {/* Score Details */}
        <div style={{ flex: 1, zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: spacing.xs, marginBottom: spacing.xs }}>
            {user?.targetScore && (
              <span style={{
                fontSize: typography.sizes.md,
                color: 'rgba(255,255,255,0.7)',
              }}>
                Target: <strong style={{ color: colors.text.inverse }}>{user.targetScore}</strong>
              </span>
            )}
            {user?.targetScore && (projectedScore || user?.currentScore) && (
              <span style={{
                fontSize: typography.sizes.sm,
                color: colors.accent.orange,
                fontWeight: typography.weights.semibold,
              }}>
                {user.targetScore - (projectedScore || user.currentScore || 0)} points to go
              </span>
            )}
          </div>

          {/* Quick stats row */}
          <div style={{
            display: 'flex',
            gap: isMobile ? spacing.md : spacing.xl,
            flexWrap: 'wrap',
          }}>
            {daysUntilTest !== null && daysUntilTest > 0 && (
              <div>
                <div style={{ fontSize: typography.sizes.xl, fontWeight: typography.weights.bold, color: colors.text.inverse }}>
                  {daysUntilTest}
                </div>
                <div style={{ fontSize: typography.sizes.xs, color: 'rgba(255,255,255,0.5)' }}>
                  days until test
                </div>
              </div>
            )}
            <div>
              <div style={{ fontSize: typography.sizes.xl, fontWeight: typography.weights.bold, color: colors.text.inverse }}>
                {projectedTestsCount || 0}
              </div>
              <div style={{ fontSize: typography.sizes.xs, color: 'rgba(255,255,255,0.5)' }}>
                tests taken
              </div>
            </div>
            <div>
              <div style={{ fontSize: typography.sizes.xl, fontWeight: typography.weights.bold, color: colors.text.inverse }}>
                {completionPercent}%
              </div>
              <div style={{ fontSize: typography.sizes.xs, color: 'rgba(255,255,255,0.5)' }}>
                lessons done
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions Row */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr 1fr 1fr' : 'repeat(3, 1fr)',
        gap: spacing.sm,
        marginBottom: spacing.lg,
      }}>
        {/* Continue / Take Test */}
        <button
          onClick={onStartPracticeTest}
          aria-label={projectedTestsCount > 0 ? 'Next Test' : 'Take Test'}
          style={{
            ...cardStyles.interactive,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: spacing.xs,
            padding: spacing.md,
            textAlign: 'center',
          }}
        >
          <span aria-hidden="true"><PlayIcon size={24} color="currentColor" /></span>
          <span style={{
            fontSize: isMobile ? typography.sizes.xs : typography.sizes.sm,
            fontWeight: typography.weights.medium,
            color: colors.text.primary,
          }}>
            {projectedTestsCount > 0 ? 'Next Test' : 'Take Test'}
          </span>
        </button>

        {/* Review Mistakes */}
        <button
          onClick={onStartReview || (() => {})}
          aria-label={dueReviewCount > 0 ? `Review ${dueReviewCount} items` : 'Review mistakes'}
          style={{
            ...cardStyles.interactive,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: spacing.xs,
            padding: spacing.md,
            textAlign: 'center',
          }}
        >
          <span aria-hidden="true"><ChartBarIcon size={24} color="currentColor" /></span>
          <span style={{
            fontSize: isMobile ? typography.sizes.xs : typography.sizes.sm,
            fontWeight: typography.weights.medium,
            color: colors.text.primary,
          }}>
            {dueReviewCount > 0 ? `Review (${dueReviewCount})` : 'Review'}
          </span>
        </button>

        {/* View Diagnosis */}
        <button
          onClick={onViewFullDiagnosis || (() => {})}
          aria-label="View diagnostic report"
          style={{
            ...cardStyles.interactive,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: spacing.xs,
            padding: spacing.md,
            textAlign: 'center',
          }}
        >
          <span aria-hidden="true"><TrendingUpIcon size={24} color="currentColor" /></span>
          <span style={{
            fontSize: isMobile ? typography.sizes.xs : typography.sizes.sm,
            fontWeight: typography.weights.medium,
            color: colors.text.primary,
          }}>
            Diagnostic
          </span>
        </button>
      </div>

      {/* Test Date Section */}
      {showDatePicker ? (
        <div style={{
          ...cardStyles.subtle,
          marginBottom: spacing.lg,
          padding: '28px'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '20px'
          }}>
            <div>
              <div style={{ fontSize: '18px', fontWeight: '600', color: colors.text.primary }}>
                Which SAT are you taking?
              </div>
              <div style={{ fontSize: '13px', color: colors.text.secondary, marginTop: '4px' }}>
                Select your upcoming test date
              </div>
            </div>
            <button
              onClick={() => setShowDatePicker(false)}
              style={{
                padding: '6px 12px',
                background: 'transparent',
                color: colors.text.secondary,
                border: 'none',
                fontSize: '14px',
                cursor: 'pointer'
              }}
            >
              Cancel
            </button>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
            gap: '10px'
          }}>
            {getUpcomingSATDates().map(sat => {
              const satDate = new Date(sat.date);
              const month = satDate.toLocaleDateString('en-US', { month: 'short' });
              const day = satDate.getDate();
              const year = satDate.getFullYear();
              const isSelected = selectedDate === sat.date || user?.testDate === sat.date;

              return (
                <button
                  key={sat.date}
                  onClick={() => handleSelectDate(sat.date)}
                  style={{
                    padding: '14px 12px',
                    background: isSelected ? colors.text.primary : colors.surface.offWhite,
                    color: isSelected ? colors.surface.white : colors.text.primary,
                    border: isSelected ? 'none' : `1px solid ${colors.surface.grayDark}`,
                    borderRadius: radius.md,
                    cursor: 'pointer',
                    textAlign: 'center',
                    transition: `all ${transitions.fast}`
                  }}
                  onMouseEnter={(e) => {
                    if (!isSelected) {
                      e.target.style.background = colors.surface.gray;
                      e.target.style.borderColor = colors.surface.grayMedium;
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSelected) {
                      e.target.style.background = colors.surface.offWhite;
                      e.target.style.borderColor = colors.surface.grayDark;
                    }
                  }}
                >
                  <div style={{
                    fontSize: '13px',
                    fontWeight: '600',
                    marginBottom: '2px',
                    opacity: isSelected ? 1 : 0.9
                  }}>
                    {month} {year}
                  </div>
                  <div style={{
                    fontSize: '11px',
                    opacity: isSelected ? 0.8 : 0.6
                  }}>
                    {month} {day}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      ) : (
        <div style={{
          ...cardStyles.subtle,
          marginBottom: spacing.lg,
          background: user?.testDate
            ? (daysUntilTest !== null && daysUntilTest <= 14 ? colors.semantic.warningBg : colors.semantic.infoLight)
            : colors.surface.white,
          border: user?.testDate
            ? (daysUntilTest !== null && daysUntilTest <= 14 ? `1px solid ${colors.semantic.warning}` : `1px solid ${colors.semantic.infoBg}`)
            : `1px solid ${colors.surface.grayDark}`,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div>
            {user?.testDate ? (
              <>
                <div style={{ fontSize: '13px', color: colors.text.secondary, marginBottom: '4px' }}>
                  Your SAT Date
                </div>
                <div style={{ fontSize: '18px', fontWeight: '600', color: colors.text.primary }}>
                  {getSATNameFromDate(user.testDate) || formatTestDate(user.testDate)}
                  {daysUntilTest !== null && (
                    <span style={{
                      marginLeft: '12px',
                      fontSize: '14px',
                      fontWeight: '500',
                      color: daysUntilTest <= 14 ? colors.badge.bronze : colors.semantic.info
                    }}>
                      {daysUntilTest === 0 ? "Today!" :
                       daysUntilTest === 1 ? "Tomorrow!" :
                       daysUntilTest < 0 ? "Completed" :
                       `${daysUntilTest} days left`}
                    </span>
                  )}
                </div>
              </>
            ) : (
              <>
                <div style={{ fontSize: '15px', fontWeight: '500', color: colors.text.primary }}>
                  Which SAT are you taking?
                </div>
                <div style={{ fontSize: '13px', color: colors.text.secondary }}>
                  Select your test date to track your countdown
                </div>
              </>
            )}
          </div>
          <button
            onClick={() => {
              setSelectedDate(user?.testDate || '');
              setShowDatePicker(true);
            }}
            style={{
              padding: '8px 16px',
              background: user?.testDate ? 'transparent' : colors.text.primary,
              color: user?.testDate ? colors.text.secondary : colors.surface.white,
              border: user?.testDate ? `1px solid ${colors.surface.grayMedium}` : 'none',
              borderRadius: radius.sm,
              fontSize: '14px',
              cursor: 'pointer'
            }}
          >
            {user?.testDate ? 'Change' : 'Select SAT'}
          </button>
        </div>
      )}

      {/* Target Schools Section */}
      {showTargetPicker ? (
        <CollegePicker
          selectedSchools={user?.targetSchools || []}
          onSave={(schools) => {
            handleSelectTargetSchools(schools);
          }}
          onCancel={() => setShowTargetPicker(false)}
          maxSelections={3}
        />
      ) : (
        <div style={{
          ...cardStyles.subtle,
          marginBottom: spacing.lg
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start'
          }}>
            <div style={{ flex: 1 }}>
              {user?.targetSchools && user.targetSchools.length > 0 ? (
                <>
                  <div style={{ fontSize: '13px', color: colors.text.secondary, marginBottom: '6px' }}>
                    Target Schools
                  </div>
                  <div style={{ fontSize: '15px', fontWeight: '500', color: colors.text.primary, marginBottom: '8px' }}>
                    {user.targetSchools.map(s => s.name).join(', ')}
                  </div>
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    background: colors.semantic.successLight,
                    padding: '6px 12px',
                    borderRadius: radius.sm
                  }}>
                    <span style={{ fontSize: '13px', color: colors.semantic.success }}>Target:</span>
                    <span style={{ fontSize: '16px', fontWeight: '700', color: colors.semantic.success }}>
                      {user.targetScore}
                    </span>
                    <span style={{ fontSize: '13px', color: colors.semantic.success }}>Math</span>
                  </div>
                </>
              ) : (
                <>
                  <div style={{ fontSize: '15px', fontWeight: '500', color: colors.text.primary }}>
                    Set your target schools
                  </div>
                  <div style={{ fontSize: '13px', color: colors.text.secondary }}>
                    Pick 3 schools you're aiming for
                  </div>
                </>
              )}
            </div>
            <button
              onClick={() => setShowTargetPicker(true)}
              style={{
                padding: '8px 16px',
                background: user?.targetSchools?.length > 0 ? 'transparent' : colors.text.primary,
                color: user?.targetSchools?.length > 0 ? colors.text.secondary : colors.surface.white,
                border: user?.targetSchools?.length > 0 ? `1px solid ${colors.surface.grayMedium}` : 'none',
                borderRadius: radius.sm,
                fontSize: '14px',
                cursor: 'pointer',
                flexShrink: 0
              }}
            >
              {user?.targetSchools?.length > 0 ? 'Change' : 'Select Schools'}
            </button>
          </div>
        </div>
      )}

      {/* Current SAT Score Section */}
      {showCurrentScorePicker ? (
        <ScoreSlider
          value={tempCurrentScore}
          onChange={setTempCurrentScore}
          label="What's your current SAT Math score?"
          description="Enter your most recent practice test or official score"
          onSave={() => {
            handleSelectCurrentScore(tempCurrentScore);
          }}
          onCancel={() => setShowCurrentScorePicker(false)}
        />
      ) : (
        <div style={{
          ...cardStyles.subtle,
          marginBottom: spacing.lg,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div>
            {user?.currentScore ? (
              <>
                <div style={{ fontSize: '13px', color: colors.text.secondary, marginBottom: '4px' }}>
                  Current Score
                </div>
                <div style={{ fontSize: '18px', fontWeight: '600', color: colors.text.primary }}>
                  {user.currentScore}
                  {user?.targetScore && user.currentScore < user.targetScore && (
                    <span style={{
                      marginLeft: '12px',
                      fontSize: '14px',
                      fontWeight: '500',
                      color: colors.semantic.success
                    }}>
                      +{user.targetScore - user.currentScore} to goal
                    </span>
                  )}
                </div>
              </>
            ) : (
              <>
                <div style={{ fontSize: '15px', fontWeight: '500', color: colors.text.primary }}>
                  What's your current SAT Math score?
                </div>
                <div style={{ fontSize: '13px', color: colors.text.secondary }}>
                  Track your progress from where you started
                </div>
              </>
            )}
          </div>
          <button
            onClick={() => {
              setTempCurrentScore(user?.currentScore || 500);
              setShowCurrentScorePicker(true);
            }}
            style={{
              padding: '8px 16px',
              background: user?.currentScore ? 'transparent' : colors.text.primary,
              color: user?.currentScore ? colors.text.secondary : colors.surface.white,
              border: user?.currentScore ? `1px solid ${colors.surface.grayMedium}` : 'none',
              borderRadius: radius.sm,
              fontSize: '14px',
              cursor: 'pointer'
            }}
          >
            {user?.currentScore ? 'Change' : 'Add Score'}
          </button>
        </div>
      )}

      {/* ═══ AI DIAGNOSTIC & INSIGHTS — The Intelligence Layer ═══ */}
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

      {/* ═══ AI STUDY PLAN — The Core Feature ═══ */}
      <div style={{ marginBottom: spacing.lg }}>
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

      {/* Top Stats Row */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
        gap: spacing.md,
        marginBottom: spacing.lg
      }}>
        {/* Lessons Completed */}
        <div style={cardStyles.subtle}>
          <div style={{ fontSize: '13px', color: colors.text.secondary, marginBottom: '12px' }}>
            Lessons Completed
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: spacing.md }}>
            <div style={{ position: 'relative' }}>
              <DonutChart percent={completionPercent} size={80} strokeWidth={8} color={colors.semantic.success} />
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                fontSize: '18px',
                fontWeight: '600',
                color: colors.text.primary
              }}>
                {completionPercent}%
              </div>
            </div>
            <div>
              <div style={{ fontSize: '24px', fontWeight: '600', color: colors.text.primary }}>
                {totalCompleted}
              </div>
              <div style={{ fontSize: '13px', color: colors.text.secondary }}>
                of {TOTAL_LESSONS} lessons
              </div>
            </div>
          </div>
        </div>

        {/* Modules Started */}
        <div style={cardStyles.subtle}>
          <div style={{ fontSize: '13px', color: colors.text.secondary, marginBottom: '12px' }}>
            Modules Started
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: spacing.md }}>
            <div style={{ position: 'relative' }}>
              <DonutChart
                percent={Math.round((startedModules.length / MODULES.length) * 100)}
                size={80}
                strokeWidth={8}
                color={colors.semantic.info}
              />
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                fontSize: '18px',
                fontWeight: '600',
                color: colors.text.primary
              }}>
                {startedModules.length}
              </div>
            </div>
            <div>
              <div style={{ fontSize: '24px', fontWeight: '600', color: colors.text.primary }}>
                {moduleProgress.filter(m => m.percent === 100).length}
              </div>
              <div style={{ fontSize: '13px', color: colors.text.secondary }}>
                completed
              </div>
            </div>
          </div>
        </div>

        {/* Practice Accuracy */}
        <div style={cardStyles.subtle}>
          <div style={{ fontSize: '13px', color: colors.text.secondary, marginBottom: '12px' }}>
            Practice Accuracy
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: spacing.md }}>
            <div style={{ position: 'relative' }}>
              <DonutChart percent={practicePercent} size={80} strokeWidth={8} color={colors.semantic.warning} />
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                fontSize: '18px',
                fontWeight: '600',
                color: colors.text.primary
              }}>
                {practicePercent}%
              </div>
            </div>
            <div>
              <div style={{ fontSize: '24px', fontWeight: '600', color: colors.text.primary }}>
                {totalCorrect}/{totalQuestions}
              </div>
              <div style={{ fontSize: '13px', color: colors.text.secondary }}>
                questions correct
              </div>
            </div>
          </div>
        </div>

        {/* Projected Score */}
        <div style={cardStyles.subtle}>
          <div style={{ fontSize: '13px', color: colors.text.secondary, marginBottom: '12px' }}>
            Projected Score
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '80px' }}>
            {projectedScore ? (
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '42px', fontWeight: '700', color: colors.accent.orange }}>
                  {projectedScore}
                </div>
                <div style={{ fontSize: '13px', color: colors.text.secondary, marginTop: '4px' }}>
                  Based on {projectedTestsCount} test{projectedTestsCount !== 1 ? 's' : ''}
                </div>
              </div>
            ) : (
              <div style={{ textAlign: 'center', color: colors.text.muted }}>
                <div style={{ fontSize: '32px', fontWeight: '600' }}>—</div>
                <div style={{ fontSize: '12px', marginTop: '4px' }}>
                  Complete a practice test
                </div>
              </div>
            )}
          </div>
        </div>
      </div>


      {/* YOUR NEXT STEP - Simple, Clean */}
      {recommendations[0] && (
        <div
          onClick={() => handleRecommendationClick(recommendations[0])}
          style={{
            ...cardStyles.subtle,
            marginBottom: spacing.lg,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            cursor: 'pointer',
            border: `2px solid ${colors.accent.orange}`,
            background: colors.accent.orangeLight
          }}
        >
          <div>
            <div style={{ fontSize: '13px', color: colors.accent.orange, fontWeight: '500', marginBottom: '4px' }}>
              Your Next Step
            </div>
            <div style={{ fontSize: '16px', fontWeight: '600', color: colors.text.primary }}>
              {recommendations[0].title}
            </div>
            {recommendations[0].subtitle && (
              <div style={{ fontSize: '13px', color: colors.text.secondary }}>
                {recommendations[0].subtitle}
              </div>
            )}
          </div>
          <button
            style={{
              padding: '10px 20px',
              background: colors.accent.orange,
              color: colors.text.inverse,
              border: 'none',
              borderRadius: radius.sm,
              fontSize: '14px',
              fontWeight: '600',
              cursor: 'pointer'
            }}
          >
            Start →
          </button>
        </div>
      )}

      {/* Strongest / Weakest Row */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
        gap: spacing.md,
        marginBottom: spacing.lg
      }}>
        <div style={{
          ...cardStyles.subtle,
          display: 'flex',
          alignItems: 'center',
          gap: spacing.md
        }}>
          <div style={{
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            background: colors.semantic.successBg,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '16px',
            fontWeight: '600',
            color: colors.semantic.success
          }}>
            {strongest?.percent || 0}%
          </div>
          <div>
            <div style={{ fontSize: '12px', color: colors.text.secondary, marginBottom: '2px' }}>
              Strongest Section
            </div>
            <div style={{ fontSize: '15px', fontWeight: '500', color: colors.text.primary }}>
              {strongest?.title || 'Start learning to see'}
            </div>
          </div>
        </div>

        <div style={{
          ...cardStyles.subtle,
          display: 'flex',
          alignItems: 'center',
          gap: spacing.md
        }}>
          <div style={{
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            background: colors.semantic.warningBg,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '16px',
            fontWeight: '600',
            color: colors.badge.bronze
          }}>
            {weakest?.percent || 0}%
          </div>
          <div>
            <div style={{ fontSize: '12px', color: colors.text.secondary, marginBottom: '2px' }}>
              Needs Work
            </div>
            <div style={{ fontSize: '15px', fontWeight: '500', color: colors.text.primary }}>
              {weakest?.title || 'Keep going!'}
            </div>
          </div>
        </div>
      </div>

      {/* Skill Diagnostic Summary */}
      {skillDiagnosticSummary && (
        <div style={{ marginBottom: spacing.lg }}>
          <SkillDiagnosticSummary
            diagnosticSummary={skillDiagnosticSummary}
            onPracticeSkill={null}
          />
        </div>
      )}

    </div>
  );
};

export default StudentDashboard;
