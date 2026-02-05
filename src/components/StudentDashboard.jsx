import React, { useState, useMemo } from 'react';
import { generateRecommendations } from '../services/recommendationService';
import SkillDiagnosticSummary from './SkillDiagnosticSummary';
import ScoreSlider from './ScoreSlider';
import CollegePicker from './CollegePicker';

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
const DonutChart = ({ percent, size = 120, strokeWidth = 10, color = '#22c55e' }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;

  return (
    <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="#e5e7eb"
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
  allLessons,
  skillDiagnosticSummary
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

  // Card style
  const cardStyle = {
    background: 'white',
    borderRadius: '12px',
    border: '1px solid #e5e7eb',
    padding: '24px'
  };

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto' }}>
      {/* Header */}
      <h1 style={{
        fontSize: '28px',
        fontWeight: '600',
        color: '#111827',
        marginBottom: '32px'
      }}>
        {user?.firstName ? `${user.firstName}'s SAT Math Progress` : 'Your SAT Math Progress'}
      </h1>

      {/* Test Date Section */}
      {showDatePicker ? (
        <div style={{
          ...cardStyle,
          marginBottom: '24px',
          padding: '28px'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '20px'
          }}>
            <div>
              <div style={{ fontSize: '18px', fontWeight: '600', color: '#111827' }}>
                Which SAT are you taking?
              </div>
              <div style={{ fontSize: '13px', color: '#6b7280', marginTop: '4px' }}>
                Select your upcoming test date
              </div>
            </div>
            <button
              onClick={() => setShowDatePicker(false)}
              style={{
                padding: '6px 12px',
                background: 'transparent',
                color: '#6b7280',
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
                    background: isSelected ? '#111827' : '#f9fafb',
                    color: isSelected ? 'white' : '#111827',
                    border: isSelected ? 'none' : '1px solid #e5e7eb',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    textAlign: 'center',
                    transition: 'all 0.15s ease'
                  }}
                  onMouseEnter={(e) => {
                    if (!isSelected) {
                      e.target.style.background = '#f3f4f6';
                      e.target.style.borderColor = '#d1d5db';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSelected) {
                      e.target.style.background = '#f9fafb';
                      e.target.style.borderColor = '#e5e7eb';
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
          ...cardStyle,
          marginBottom: '24px',
          background: user?.testDate
            ? (daysUntilTest !== null && daysUntilTest <= 14 ? '#fef3c7' : '#f0f9ff')
            : 'white',
          border: user?.testDate
            ? (daysUntilTest !== null && daysUntilTest <= 14 ? '1px solid #fcd34d' : '1px solid #bae6fd')
            : '1px solid #e5e7eb',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div>
            {user?.testDate ? (
              <>
                <div style={{ fontSize: '13px', color: '#6b7280', marginBottom: '4px' }}>
                  Your SAT Date
                </div>
                <div style={{ fontSize: '18px', fontWeight: '600', color: '#111827' }}>
                  {getSATNameFromDate(user.testDate) || formatTestDate(user.testDate)}
                  {daysUntilTest !== null && (
                    <span style={{
                      marginLeft: '12px',
                      fontSize: '14px',
                      fontWeight: '500',
                      color: daysUntilTest <= 14 ? '#d97706' : '#0369a1'
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
                <div style={{ fontSize: '15px', fontWeight: '500', color: '#111827' }}>
                  Which SAT are you taking?
                </div>
                <div style={{ fontSize: '13px', color: '#6b7280' }}>
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
              background: user?.testDate ? 'transparent' : '#111827',
              color: user?.testDate ? '#374151' : 'white',
              border: user?.testDate ? '1px solid #d1d5db' : 'none',
              borderRadius: '8px',
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
          ...cardStyle,
          marginBottom: '24px'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start'
          }}>
            <div style={{ flex: 1 }}>
              {user?.targetSchools && user.targetSchools.length > 0 ? (
                <>
                  <div style={{ fontSize: '13px', color: '#6b7280', marginBottom: '6px' }}>
                    Target Schools
                  </div>
                  <div style={{ fontSize: '15px', fontWeight: '500', color: '#111827', marginBottom: '8px' }}>
                    {user.targetSchools.map(s => s.name).join(', ')}
                  </div>
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    background: '#f0fdf4',
                    padding: '6px 12px',
                    borderRadius: '6px'
                  }}>
                    <span style={{ fontSize: '13px', color: '#16a34a' }}>Target:</span>
                    <span style={{ fontSize: '16px', fontWeight: '700', color: '#16a34a' }}>
                      {user.targetScore}
                    </span>
                    <span style={{ fontSize: '13px', color: '#16a34a' }}>Math</span>
                  </div>
                </>
              ) : (
                <>
                  <div style={{ fontSize: '15px', fontWeight: '500', color: '#111827' }}>
                    Set your target schools
                  </div>
                  <div style={{ fontSize: '13px', color: '#6b7280' }}>
                    Pick 3 schools you're aiming for
                  </div>
                </>
              )}
            </div>
            <button
              onClick={() => setShowTargetPicker(true)}
              style={{
                padding: '8px 16px',
                background: user?.targetSchools?.length > 0 ? 'transparent' : '#111827',
                color: user?.targetSchools?.length > 0 ? '#374151' : 'white',
                border: user?.targetSchools?.length > 0 ? '1px solid #d1d5db' : 'none',
                borderRadius: '8px',
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
          ...cardStyle,
          marginBottom: '24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div>
            {user?.currentScore ? (
              <>
                <div style={{ fontSize: '13px', color: '#6b7280', marginBottom: '4px' }}>
                  Current Score
                </div>
                <div style={{ fontSize: '18px', fontWeight: '600', color: '#111827' }}>
                  {user.currentScore}
                  {user?.targetScore && user.currentScore < user.targetScore && (
                    <span style={{
                      marginLeft: '12px',
                      fontSize: '14px',
                      fontWeight: '500',
                      color: '#16a34a'
                    }}>
                      +{user.targetScore - user.currentScore} to goal
                    </span>
                  )}
                </div>
              </>
            ) : (
              <>
                <div style={{ fontSize: '15px', fontWeight: '500', color: '#111827' }}>
                  What's your current SAT Math score?
                </div>
                <div style={{ fontSize: '13px', color: '#6b7280' }}>
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
              background: user?.currentScore ? 'transparent' : '#111827',
              color: user?.currentScore ? '#374151' : 'white',
              border: user?.currentScore ? '1px solid #d1d5db' : 'none',
              borderRadius: '8px',
              fontSize: '14px',
              cursor: 'pointer'
            }}
          >
            {user?.currentScore ? 'Change' : 'Add Score'}
          </button>
        </div>
      )}

      {/* Top Stats Row */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '16px',
        marginBottom: '24px'
      }}>
        {/* Lessons Completed */}
        <div style={cardStyle}>
          <div style={{ fontSize: '13px', color: '#6b7280', marginBottom: '12px' }}>
            Lessons Completed
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ position: 'relative' }}>
              <DonutChart percent={completionPercent} size={80} strokeWidth={8} color="#22c55e" />
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                fontSize: '18px',
                fontWeight: '600',
                color: '#111827'
              }}>
                {completionPercent}%
              </div>
            </div>
            <div>
              <div style={{ fontSize: '24px', fontWeight: '600', color: '#111827' }}>
                {totalCompleted}
              </div>
              <div style={{ fontSize: '13px', color: '#6b7280' }}>
                of {TOTAL_LESSONS} lessons
              </div>
            </div>
          </div>
        </div>

        {/* Modules Started */}
        <div style={cardStyle}>
          <div style={{ fontSize: '13px', color: '#6b7280', marginBottom: '12px' }}>
            Modules Started
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ position: 'relative' }}>
              <DonutChart
                percent={Math.round((startedModules.length / MODULES.length) * 100)}
                size={80}
                strokeWidth={8}
                color="#3b82f6"
              />
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                fontSize: '18px',
                fontWeight: '600',
                color: '#111827'
              }}>
                {startedModules.length}
              </div>
            </div>
            <div>
              <div style={{ fontSize: '24px', fontWeight: '600', color: '#111827' }}>
                {moduleProgress.filter(m => m.percent === 100).length}
              </div>
              <div style={{ fontSize: '13px', color: '#6b7280' }}>
                completed
              </div>
            </div>
          </div>
        </div>

        {/* Practice Accuracy */}
        <div style={cardStyle}>
          <div style={{ fontSize: '13px', color: '#6b7280', marginBottom: '12px' }}>
            Practice Accuracy
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ position: 'relative' }}>
              <DonutChart percent={practicePercent} size={80} strokeWidth={8} color="#f59e0b" />
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                fontSize: '18px',
                fontWeight: '600',
                color: '#111827'
              }}>
                {practicePercent}%
              </div>
            </div>
            <div>
              <div style={{ fontSize: '24px', fontWeight: '600', color: '#111827' }}>
                {totalCorrect}/{totalQuestions}
              </div>
              <div style={{ fontSize: '13px', color: '#6b7280' }}>
                questions correct
              </div>
            </div>
          </div>
        </div>

        {/* Projected Score */}
        <div style={cardStyle}>
          <div style={{ fontSize: '13px', color: '#6b7280', marginBottom: '12px' }}>
            Projected Score
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '80px' }}>
            {projectedScore ? (
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '42px', fontWeight: '700', color: '#ea580c' }}>
                  {projectedScore}
                </div>
                <div style={{ fontSize: '13px', color: '#6b7280', marginTop: '4px' }}>
                  Based on {projectedTestsCount} test{projectedTestsCount !== 1 ? 's' : ''}
                </div>
              </div>
            ) : (
              <div style={{ textAlign: 'center', color: '#9ca3af' }}>
                <div style={{ fontSize: '32px', fontWeight: '600' }}>—</div>
                <div style={{ fontSize: '12px', marginTop: '4px' }}>
                  Complete a practice test
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Practice Test Scores */}
      {practiceTestResults && Object.keys(practiceTestResults).length > 0 && (
        <div style={{
          ...cardStyle,
          marginBottom: '24px'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '16px'
          }}>
            <h2 style={{ fontSize: '16px', fontWeight: '600', color: '#111827', margin: 0 }}>
              Practice Test Scores
            </h2>
            {onStartPracticeTest && (
              <button
                onClick={onStartPracticeTest}
                style={{
                  padding: '6px 12px',
                  background: 'transparent',
                  color: '#3b82f6',
                  border: '1px solid #3b82f6',
                  borderRadius: '6px',
                  fontSize: '13px',
                  cursor: 'pointer'
                }}
              >
                Take a Test
              </button>
            )}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {Object.values(practiceTestResults)
              .sort((a, b) => {
                const dateA = a.lastAttemptAt?.toDate?.() || new Date(a.lastAttemptAt) || new Date(0);
                const dateB = b.lastAttemptAt?.toDate?.() || new Date(b.lastAttemptAt) || new Date(0);
                return dateB - dateA;
              })
              .map(test => (
                <div
                  key={test.testId}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '12px 16px',
                    background: '#f9fafb',
                    borderRadius: '8px'
                  }}
                >
                  <div>
                    <div style={{ fontSize: '15px', fontWeight: '500', color: '#111827' }}>
                      {test.testTitle}
                    </div>
                    <div style={{ fontSize: '12px', color: '#6b7280', marginTop: '2px' }}>
                      {test.totalAttempts} attempt{test.totalAttempts !== 1 ? 's' : ''}
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{
                      fontSize: '24px',
                      fontWeight: '700',
                      color: test.bestScaledScore >= 700 ? '#16a34a' :
                             test.bestScaledScore >= 600 ? '#ca8a04' : '#111827'
                    }}>
                      {test.bestScaledScore}
                    </div>
                    <div style={{ fontSize: '11px', color: '#6b7280' }}>
                      Best Score
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}

      {/* YOUR NEXT STEP - Simple, Clean */}
      {recommendations[0] && (
        <div
          onClick={() => handleRecommendationClick(recommendations[0])}
          style={{
            ...cardStyle,
            marginBottom: '24px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            cursor: 'pointer',
            border: '2px solid #ea580c',
            background: '#fff7ed'
          }}
        >
          <div>
            <div style={{ fontSize: '13px', color: '#ea580c', fontWeight: '500', marginBottom: '4px' }}>
              Your Next Step
            </div>
            <div style={{ fontSize: '16px', fontWeight: '600', color: '#111827' }}>
              {recommendations[0].title}
            </div>
            {recommendations[0].subtitle && (
              <div style={{ fontSize: '13px', color: '#6b7280' }}>
                {recommendations[0].subtitle}
              </div>
            )}
          </div>
          <button
            style={{
              padding: '10px 20px',
              background: '#ea580c',
              color: '#fff',
              border: 'none',
              borderRadius: '8px',
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
        gridTemplateColumns: '1fr 1fr',
        gap: '16px',
        marginBottom: '24px'
      }}>
        <div style={{
          ...cardStyle,
          display: 'flex',
          alignItems: 'center',
          gap: '16px'
        }}>
          <div style={{
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            background: '#dcfce7',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '16px',
            fontWeight: '600',
            color: '#16a34a'
          }}>
            {strongest?.percent || 0}%
          </div>
          <div>
            <div style={{ fontSize: '12px', color: '#6b7280', marginBottom: '2px' }}>
              Strongest Section
            </div>
            <div style={{ fontSize: '15px', fontWeight: '500', color: '#111827' }}>
              {strongest?.title || 'Start learning to see'}
            </div>
          </div>
        </div>

        <div style={{
          ...cardStyle,
          display: 'flex',
          alignItems: 'center',
          gap: '16px'
        }}>
          <div style={{
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            background: '#fef3c7',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '16px',
            fontWeight: '600',
            color: '#d97706'
          }}>
            {weakest?.percent || 0}%
          </div>
          <div>
            <div style={{ fontSize: '12px', color: '#6b7280', marginBottom: '2px' }}>
              Needs Work
            </div>
            <div style={{ fontSize: '15px', fontWeight: '500', color: '#111827' }}>
              {weakest?.title || 'Keep going!'}
            </div>
          </div>
        </div>
      </div>

      {/* Skill Diagnostic Summary */}
      {skillDiagnosticSummary && (
        <div style={{ marginBottom: '24px' }}>
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
