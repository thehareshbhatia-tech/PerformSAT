import React, { useState, useMemo } from 'react';

/**
 * StudyPlanDashboard — Compact study plan widget for the StudentDashboard.
 * Shows the AI-generated weekly study plan with expandable weeks,
 * activity completion checkboxes, and progress tracking.
 */

const cardStyle = {
  background: 'white',
  borderRadius: '12px',
  border: '1px solid #e5e7eb',
  padding: '24px',
};

const StudyPlanDashboard = ({
  studyPlan,
  practiceTestResults,
  user,
  onNavigateToModule,
  onStartPractice,
  onStartPracticeTest,
  onCompleteActivity,
  onUncompleteActivity,
}) => {
  const [expandedWeek, setExpandedWeek] = useState(null);

  // If no study plan, show a prompt
  if (!studyPlan || !studyPlan.weeks || studyPlan.weeks.length === 0) {
    return (
      <div style={{
        ...cardStyle,
        textAlign: 'center',
        padding: '32px 24px',
      }}>
        <div style={{ fontSize: '28px', marginBottom: '8px' }}>📋</div>
        <div style={{ fontSize: '16px', fontWeight: '600', color: '#111827', marginBottom: '4px' }}>
          No Study Plan Yet
        </div>
        <div style={{ fontSize: '13px', color: '#6b7280', maxWidth: '320px', margin: '0 auto' }}>
          Complete a practice test and view your diagnostic report to generate a personalized study plan.
        </div>
        {onStartPracticeTest && (
          <button
            onClick={onStartPracticeTest}
            style={{
              marginTop: '16px',
              padding: '10px 20px',
              background: '#111827',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: '500',
              cursor: 'pointer',
            }}
          >
            Take a Practice Test
          </button>
        )}
      </div>
    );
  }

  const { weeks, summary, intensity, currentScore, targetScore, milestones } = studyPlan;

  // Calculate overall progress
  const totalActivities = weeks.reduce((sum, w) => sum + w.activities.length, 0);
  const completedActivities = weeks.reduce(
    (sum, w) => sum + w.activities.filter(a => a.completed).length,
    0
  );
  const progressPercent = totalActivities > 0 ? Math.round((completedActivities / totalActivities) * 100) : 0;

  // Find current week (first week with incomplete activities)
  const currentWeekIndex = weeks.findIndex(
    w => w.activities.some(a => !a.completed)
  );
  const displayCurrentWeek = currentWeekIndex >= 0 ? currentWeekIndex : weeks.length - 1;

  // Auto-expand current week on first render
  const activeExpanded = expandedWeek !== null ? expandedWeek : displayCurrentWeek;

  const handleActivityClick = (activity, weekIndex, activityIndex) => {
    if (activity.type === 'lesson' && onNavigateToModule && activity.moduleId) {
      onNavigateToModule(activity.moduleId, activity.lessonId);
    } else if (activity.type === 'practice' && onStartPractice && activity.moduleId) {
      onStartPractice(activity.moduleId, activity.sectionName);
    } else if (activity.type === 'test' && onStartPracticeTest) {
      onStartPracticeTest();
    }
  };

  const handleToggleComplete = (e, weekIndex, activityIndex, isCompleted) => {
    e.stopPropagation();
    if (isCompleted) {
      onUncompleteActivity && onUncompleteActivity(weekIndex, activityIndex);
    } else {
      onCompleteActivity && onCompleteActivity(weekIndex, activityIndex);
    }
  };

  const getActivityIcon = (activity) => {
    if (activity.icon) return activity.icon;
    if (activity.type === 'lesson') return activity.activityType === 'watchLesson' ? '🎥' : '📖';
    if (activity.type === 'practice') return '✏️';
    if (activity.type === 'strategy') return '🧠';
    if (activity.type === 'review') return '🔍';
    if (activity.type === 'test') return '📝';
    return '📌';
  };

  const getActivityTypeLabel = (activity) => {
    if (activity.type === 'lesson') return 'Lesson';
    if (activity.type === 'practice') return 'Practice';
    if (activity.type === 'strategy') return 'Strategy';
    if (activity.type === 'review') return 'Review';
    if (activity.type === 'test') return 'Practice Test';
    return 'Activity';
  };

  const getActivityTypeColor = (activity) => {
    if (activity.type === 'lesson') return { bg: '#eff6ff', text: '#2563eb' };
    if (activity.type === 'practice') return { bg: '#f0fdf4', text: '#16a34a' };
    if (activity.type === 'strategy') return { bg: '#fefce8', text: '#ca8a04' };
    if (activity.type === 'review') return { bg: '#fef3c7', text: '#d97706' };
    if (activity.type === 'test') return { bg: '#fce7f3', text: '#db2777' };
    return { bg: '#f3f4f6', text: '#6b7280' };
  };

  return (
    <div style={cardStyle}>
      {/* Header */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: '20px',
      }}>
        <div>
          <div style={{
            fontSize: '13px',
            color: '#6b7280',
            marginBottom: '4px',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
          }}>
            <span>📋</span> AI Study Plan
          </div>
          <div style={{ fontSize: '18px', fontWeight: '600', color: '#111827' }}>
            {summary?.headline
              ? (summary.headline.length > 60 ? summary.headline.slice(0, 60) + '...' : summary.headline)
              : `${weeks.length}-Week Plan`
            }
          </div>
        </div>
        <div style={{
          textAlign: 'right',
          minWidth: '80px',
        }}>
          <div style={{ fontSize: '28px', fontWeight: '700', color: '#ea580c' }}>
            {progressPercent}%
          </div>
          <div style={{ fontSize: '11px', color: '#6b7280' }}>
            {completedActivities}/{totalActivities} done
          </div>
        </div>
      </div>

      {/* Progress bar */}
      <div style={{
        height: '6px',
        background: '#f3f4f6',
        borderRadius: '3px',
        marginBottom: '20px',
        overflow: 'hidden',
      }}>
        <div style={{
          height: '100%',
          width: `${progressPercent}%`,
          background: progressPercent >= 75 ? '#22c55e' : progressPercent >= 40 ? '#f59e0b' : '#ea580c',
          borderRadius: '3px',
          transition: 'width 0.3s ease',
        }} />
      </div>

      {/* Summary stats row */}
      {summary?.stats && (
        <div style={{
          display: 'flex',
          gap: '16px',
          marginBottom: '20px',
          flexWrap: 'wrap',
        }}>
          {summary.stats.weeksInPlan && (
            <div style={{ fontSize: '12px', color: '#6b7280' }}>
              <span style={{ fontWeight: '600', color: '#111827' }}>{summary.stats.weeksInPlan}</span> weeks
            </div>
          )}
          {summary.stats.totalLessons > 0 && (
            <div style={{ fontSize: '12px', color: '#6b7280' }}>
              <span style={{ fontWeight: '600', color: '#111827' }}>{summary.stats.totalLessons}</span> lessons
            </div>
          )}
          {summary.stats.totalPractice > 0 && (
            <div style={{ fontSize: '12px', color: '#6b7280' }}>
              <span style={{ fontWeight: '600', color: '#111827' }}>{summary.stats.totalPractice}</span> practice sets
            </div>
          )}
          {summary.stats.minutesPerDay && (
            <div style={{ fontSize: '12px', color: '#6b7280' }}>
              <span style={{ fontWeight: '600', color: '#111827' }}>{summary.stats.minutesPerDay}</span> min/day
            </div>
          )}
        </div>
      )}

      {/* Weekly plan accordion */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {weeks.map((week, weekIdx) => {
          const isExpanded = activeExpanded === weekIdx;
          const weekCompleted = week.activities.filter(a => a.completed).length;
          const weekTotal = week.activities.length;
          const weekPercent = weekTotal > 0 ? Math.round((weekCompleted / weekTotal) * 100) : 0;
          const isCurrent = weekIdx === displayCurrentWeek;

          return (
            <div key={weekIdx} style={{
              border: isCurrent ? '2px solid #ea580c' : '1px solid #e5e7eb',
              borderRadius: '10px',
              overflow: 'hidden',
            }}>
              {/* Week header */}
              <button
                onClick={() => setExpandedWeek(isExpanded ? null : weekIdx)}
                style={{
                  width: '100%',
                  padding: '14px 16px',
                  background: isCurrent ? '#fff7ed' : weekPercent === 100 ? '#f0fdf4' : '#fafafa',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  textAlign: 'left',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flex: 1 }}>
                  <div style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    background: weekPercent === 100 ? '#22c55e' : isCurrent ? '#ea580c' : '#d1d5db',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '12px',
                    fontWeight: '700',
                    flexShrink: 0,
                  }}>
                    {weekPercent === 100 ? '✓' : week.weekNumber}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{
                      fontSize: '14px',
                      fontWeight: '600',
                      color: '#111827',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}>
                      {week.title || `Week ${week.weekNumber}`}
                      {isCurrent && (
                        <span style={{
                          marginLeft: '8px',
                          fontSize: '11px',
                          fontWeight: '500',
                          color: '#ea580c',
                          background: '#fff7ed',
                          padding: '2px 6px',
                          borderRadius: '4px',
                        }}>
                          Current
                        </span>
                      )}
                    </div>
                    {week.focusSkills && week.focusSkills.length > 0 && (
                      <div style={{
                        fontSize: '12px',
                        color: '#6b7280',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                      }}>
                        {week.focusSkills.join(', ')}
                      </div>
                    )}
                  </div>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  flexShrink: 0,
                }}>
                  <div style={{ fontSize: '12px', color: '#6b7280' }}>
                    {weekCompleted}/{weekTotal}
                  </div>
                  <span style={{
                    fontSize: '12px',
                    color: '#9ca3af',
                    transform: isExpanded ? 'rotate(180deg)' : 'none',
                    transition: 'transform 0.2s ease',
                  }}>
                    ▼
                  </span>
                </div>
              </button>

              {/* Week activities (expanded) */}
              {isExpanded && (
                <div style={{
                  padding: '8px 16px 16px',
                  background: 'white',
                }}>
                  {week.goalDescription && (
                    <div style={{
                      fontSize: '12px',
                      color: '#6b7280',
                      fontStyle: 'italic',
                      padding: '8px 0',
                      marginBottom: '8px',
                      borderBottom: '1px solid #f3f4f6',
                    }}>
                      Goal: {week.goalDescription}
                    </div>
                  )}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {week.activities.map((activity, actIdx) => {
                      const isCompleted = activity.completed;
                      const typeColor = getActivityTypeColor(activity);

                      return (
                        <div
                          key={actIdx}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            padding: '10px 12px',
                            borderRadius: '8px',
                            background: isCompleted ? '#f9fafb' : 'white',
                            border: '1px solid #f3f4f6',
                            cursor: 'pointer',
                            opacity: isCompleted ? 0.7 : 1,
                            transition: 'all 0.15s ease',
                          }}
                          onClick={() => handleActivityClick(activity, weekIdx, actIdx)}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = isCompleted ? '#f3f4f6' : '#fafafa';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = isCompleted ? '#f9fafb' : 'white';
                          }}
                        >
                          {/* Checkbox */}
                          <button
                            onClick={(e) => handleToggleComplete(e, weekIdx, actIdx, isCompleted)}
                            style={{
                              width: '22px',
                              height: '22px',
                              borderRadius: '6px',
                              border: isCompleted ? 'none' : '2px solid #d1d5db',
                              background: isCompleted ? '#22c55e' : 'white',
                              color: 'white',
                              fontSize: '12px',
                              cursor: 'pointer',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              flexShrink: 0,
                              padding: 0,
                            }}
                          >
                            {isCompleted && '✓'}
                          </button>

                          {/* Icon */}
                          <span style={{ fontSize: '16px', flexShrink: 0 }}>
                            {getActivityIcon(activity)}
                          </span>

                          {/* Content */}
                          <div style={{ flex: 1, minWidth: 0 }}>
                            <div style={{
                              fontSize: '13px',
                              fontWeight: '500',
                              color: isCompleted ? '#9ca3af' : '#111827',
                              textDecoration: isCompleted ? 'line-through' : 'none',
                              whiteSpace: 'nowrap',
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                            }}>
                              {activity.title}
                            </div>
                            {activity.subtitle && (
                              <div style={{
                                fontSize: '11px',
                                color: '#9ca3af',
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                              }}>
                                {activity.subtitle}
                              </div>
                            )}
                          </div>

                          {/* Type badge */}
                          <span style={{
                            fontSize: '10px',
                            fontWeight: '600',
                            color: typeColor.text,
                            background: typeColor.bg,
                            padding: '2px 8px',
                            borderRadius: '4px',
                            flexShrink: 0,
                          }}>
                            {getActivityTypeLabel(activity)}
                          </span>

                          {/* Duration */}
                          {activity.duration && (
                            <span style={{
                              fontSize: '11px',
                              color: '#9ca3af',
                              flexShrink: 0,
                            }}>
                              {activity.duration}m
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StudyPlanDashboard;
