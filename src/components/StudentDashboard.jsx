import React, { useState, useMemo } from 'react';
import { generateRecommendations } from '../services/recommendationService';
import { generatePersonalizedPlan } from '../services/studyPlanService';

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

// Common target scores
const TARGET_SCORES = [1200, 1300, 1400, 1500, 1550, 1600];

const StudentDashboard = ({
  user,
  completedLessons,
  practiceProgress,
  reviewQueue,
  dueReviewCount = 0,
  onNavigateToModule,
  onUpdateTestDate,
  onUpdateTargetScore,
  onStartPractice,
  onStartReview,
  allLessons
}) => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTargetPicker, setShowTargetPicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(user?.testDate || '');

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

  // Generate personalized study plan
  const studyPlan = useMemo(() => {
    return generatePersonalizedPlan({
      completedLessons,
      practiceProgress,
      reviewQueue,
      testDate: user?.testDate,
      targetScore: user?.targetScore
    });
  }, [completedLessons, practiceProgress, reviewQueue, user?.testDate, user?.targetScore]);

  // Handle target score selection
  const handleSelectTargetScore = (score) => {
    if (score && onUpdateTargetScore) {
      onUpdateTargetScore(score);
    }
    setShowTargetPicker(false);
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
        Your SAT Math Progress
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

      {/* Target Score Section */}
      {showTargetPicker ? (
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
                What's your target SAT score?
              </div>
              <div style={{ fontSize: '13px', color: '#6b7280', marginTop: '4px' }}>
                We'll personalize your study plan to help you reach it
              </div>
            </div>
            <button
              onClick={() => setShowTargetPicker(false)}
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
            gridTemplateColumns: 'repeat(6, 1fr)',
            gap: '10px'
          }}>
            {TARGET_SCORES.map(score => {
              const isSelected = user?.targetScore === score;
              return (
                <button
                  key={score}
                  onClick={() => handleSelectTargetScore(score)}
                  style={{
                    padding: '16px 8px',
                    background: isSelected ? '#111827' : '#f9fafb',
                    color: isSelected ? 'white' : '#111827',
                    border: isSelected ? 'none' : '1px solid #e5e7eb',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    textAlign: 'center',
                    fontSize: '16px',
                    fontWeight: '600',
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
                  {score}
                </button>
              );
            })}
          </div>
        </div>
      ) : (
        <div style={{
          ...cardStyle,
          marginBottom: '24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div>
            {user?.targetScore ? (
              <>
                <div style={{ fontSize: '13px', color: '#6b7280', marginBottom: '4px' }}>
                  Target Score
                </div>
                <div style={{ fontSize: '18px', fontWeight: '600', color: '#111827' }}>
                  {user.targetScore}
                </div>
              </>
            ) : (
              <>
                <div style={{ fontSize: '15px', fontWeight: '500', color: '#111827' }}>
                  Set your target score
                </div>
                <div style={{ fontSize: '13px', color: '#6b7280' }}>
                  Get a personalized plan to reach your goal
                </div>
              </>
            )}
          </div>
          <button
            onClick={() => setShowTargetPicker(true)}
            style={{
              padding: '8px 16px',
              background: user?.targetScore ? 'transparent' : '#111827',
              color: user?.targetScore ? '#374151' : 'white',
              border: user?.targetScore ? '1px solid #d1d5db' : 'none',
              borderRadius: '8px',
              fontSize: '14px',
              cursor: 'pointer'
            }}
          >
            {user?.targetScore ? 'Change' : 'Set Goal'}
          </button>
        </div>
      )}

      {/* Study Plan Summary (only show if test date and target are set) */}
      {user?.testDate && user?.targetScore && studyPlan && (
        <div style={{
          ...cardStyle,
          marginBottom: '24px',
          background: '#f9fafb'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '16px'
          }}>
            <h2 style={{ fontSize: '16px', fontWeight: '600', color: '#111827', margin: 0 }}>
              Your Study Plan
            </h2>
            <div style={{ fontSize: '13px', color: '#6b7280' }}>
              {studyPlan.summary.weeksLeft} week{studyPlan.summary.weeksLeft !== 1 ? 's' : ''} to go
            </div>
          </div>

          {/* Score Progress Bar */}
          <div style={{
            background: 'white',
            borderRadius: '8px',
            padding: '16px',
            marginBottom: '16px',
            border: '1px solid #e5e7eb'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '8px' }}>
              <div>
                <div style={{ fontSize: '12px', color: '#6b7280' }}>Estimated</div>
                <div style={{ fontSize: '20px', fontWeight: '600', color: '#111827' }}>
                  ~{studyPlan.summary.currentEstimate}
                </div>
              </div>
              <div style={{
                fontSize: '13px',
                color: '#ea580c',
                fontWeight: '500'
              }}>
                {studyPlan.summary.dailyMinutes} min/day
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '12px', color: '#6b7280' }}>Target</div>
                <div style={{ fontSize: '20px', fontWeight: '600', color: '#111827' }}>
                  {studyPlan.summary.targetScore}
                </div>
              </div>
            </div>

            {/* Visual progress bar */}
            <div style={{
              height: '8px',
              background: '#e5e7eb',
              borderRadius: '4px',
              overflow: 'hidden'
            }}>
              <div style={{
                height: '100%',
                width: `${Math.min(100, (studyPlan.summary.currentEstimate / studyPlan.summary.targetScore) * 100)}%`,
                background: studyPlan.onTrack ? '#22c55e' : '#ea580c',
                borderRadius: '4px',
                transition: 'width 0.3s ease'
              }} />
            </div>
          </div>

          {/* Focus Areas */}
          {studyPlan.summary.focusAreas.length > 0 && (
            <div>
              <div style={{ fontSize: '13px', color: '#6b7280', marginBottom: '8px' }}>
                This week: Focus on
              </div>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {studyPlan.summary.focusAreas.map((area, i) => (
                  <span key={i} style={{
                    background: '#fff7ed',
                    color: '#ea580c',
                    padding: '6px 12px',
                    borderRadius: '16px',
                    fontSize: '13px',
                    fontWeight: '500'
                  }}>
                    {area}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Motivational message */}
          <div style={{
            marginTop: '12px',
            fontSize: '13px',
            color: '#6b7280',
            fontStyle: 'italic'
          }}>
            {studyPlan.message}
          </div>
        </div>
      )}

      {/* Top Stats Row */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
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
      </div>

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

      {/* All Modules */}
      <div style={cardStyle}>
        <div style={{
          fontSize: '16px',
          fontWeight: '600',
          color: '#111827',
          marginBottom: '16px'
        }}>
          All Modules
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '8px'
        }}>
          {moduleProgress.map(module => (
            <div
              key={module.id}
              onClick={() => onNavigateToModule(module.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '12px 16px',
                background: module.percent === 100 ? '#f0fdf4' : '#f9fafb',
                borderRadius: '8px',
                cursor: 'pointer',
                border: module.percent === 100 ? '1px solid #bbf7d0' : '1px solid transparent'
              }}
            >
              <span style={{
                fontSize: '14px',
                color: '#111827',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                flex: 1,
                marginRight: '8px'
              }}>
                {module.title}
              </span>
              <span style={{
                fontSize: '13px',
                fontWeight: '500',
                color: module.percent === 100 ? '#16a34a' : module.percent > 0 ? '#ea580c' : '#9ca3af'
              }}>
                {module.percent}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
