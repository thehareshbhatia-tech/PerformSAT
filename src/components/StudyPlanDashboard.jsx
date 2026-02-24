import React, { useState, useMemo } from 'react';
import { colors, typography, spacing, radius, transitions, breakpoints } from '../design/tokens';
import { cardStyles, buttonStyles } from '../design/components';
import { DataCard } from './ui/DataCard';
import { PrimaryButton } from './ui/Button';
import { reprioritizePlan } from '../services/adaptivePlanService';
import {
  ClipboardIcon,
  VideoCameraIcon,
  BookOpenIcon,
  PencilIcon,
  BrainIcon,
  SearchIcon,
  DocumentIcon,
  PinIcon,
  CheckIcon,
  ChevronDownIcon,
} from '../design/icons';

/**
 * StudyPlanDashboard — Compact study plan widget for the StudentDashboard.
 * Shows the AI-generated weekly study plan with expandable weeks,
 * activity completion checkboxes, and progress tracking.
 */

const StudyPlanDashboard = ({
  studyPlan,
  practiceTestResults,
  practiceProgress,
  reviewQueue,
  user,
  onNavigateToModule,
  onStartPractice,
  onStartPracticeTest,
  onCompleteActivity,
  onUncompleteActivity,
}) => {
  const [expandedWeek, setExpandedWeek] = useState(null);

  const adaptiveOverlay = useMemo(() => {
    if (!studyPlan?.weeks?.length) return null;
    const adapted = reprioritizePlan(
      studyPlan,
      practiceProgress,
      practiceTestResults,
      reviewQueue,
      user?.testDate
    );
    return adapted?.adaptiveOverlay || null;
  }, [studyPlan, practiceProgress, practiceTestResults, reviewQueue, user?.testDate]);

  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);
  React.useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const isMobile = windowWidth < breakpoints.tablet;

  // If no study plan, show a prompt
  if (!studyPlan || !studyPlan.weeks || studyPlan.weeks.length === 0) {
    return (
      <DataCard style={{
        textAlign: 'center',
        padding: `${spacing.xl} ${spacing.lg}`,
      }}>
        <div style={{ marginBottom: spacing.xs, display: 'flex', justifyContent: 'center' }}>
          <ClipboardIcon size={28} color={colors.text.secondary} />
        </div>
        <div style={{ fontSize: typography.sizes.md, fontWeight: typography.weights.semibold, color: colors.text.primary, marginBottom: '4px' }}>
          No Study Plan Yet
        </div>
        <div style={{ fontSize: typography.sizes.sm, color: colors.text.secondary, maxWidth: '320px', margin: '0 auto' }}>
          Complete a practice test and view your diagnostic report to generate a personalized study plan.
        </div>
        {onStartPracticeTest && (
          <PrimaryButton
            onClick={onStartPracticeTest}
            style={{
              marginTop: spacing.md,
            }}
          >
            Take a Practice Test
          </PrimaryButton>
        )}
      </DataCard>
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
    if (activity.type === 'lesson') {
      return activity.activityType === 'watchLesson'
        ? <VideoCameraIcon size={16} color={colors.semantic.info} />
        : <BookOpenIcon size={16} color={colors.semantic.info} />;
    }
    if (activity.type === 'practice') return <PencilIcon size={16} color={colors.semantic.success} />;
    if (activity.type === 'strategy') return <BrainIcon size={16} color={colors.semantic.warning} />;
    if (activity.type === 'review') return <SearchIcon size={16} color={colors.badge.bronze} />;
    if (activity.type === 'test') return <DocumentIcon size={16} color={colors.accent.purple} />;
    return <PinIcon size={16} color={colors.text.secondary} />;
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
    if (activity.type === 'lesson') return { bg: colors.semantic.infoLight, text: colors.semantic.info };
    if (activity.type === 'practice') return { bg: colors.semantic.successLight, text: colors.semantic.success };
    if (activity.type === 'strategy') return { bg: colors.semantic.warningLight, text: colors.semantic.warning };
    if (activity.type === 'review') return { bg: colors.semantic.warningBg, text: colors.badge.bronze };
    if (activity.type === 'test') return { bg: colors.accent.purpleLight, text: colors.accent.purple };
    return { bg: colors.surface.gray, text: colors.text.secondary };
  };

  return (
    <DataCard>
      {/* Header */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: '20px',
      }}>
        <div>
          <div style={{
            fontSize: typography.sizes.sm,
            color: colors.text.secondary,
            marginBottom: '4px',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
          }}>
            <ClipboardIcon size={14} color={colors.text.secondary} /> AI Study Plan
          </div>
          <div style={{ fontSize: typography.sizes.lg, fontWeight: typography.weights.semibold, color: colors.text.primary }}>
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
          <div style={{ fontSize: typography.sizes['2xl'], fontWeight: typography.weights.bold, color: colors.accent.orange }}>
            {progressPercent}%
          </div>
          <div style={{ fontSize: typography.sizes.xs, color: colors.text.secondary }}>
            {completedActivities}/{totalActivities} done
          </div>
        </div>
      </div>

      {/* Progress bar */}
      <div
        role="progressbar"
        aria-valuenow={progressPercent}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`Study plan progress: ${progressPercent}%`}
        style={{
          height: '6px',
          background: colors.surface.gray,
          borderRadius: radius.sm,
          marginBottom: '20px',
          overflow: 'hidden',
        }}
      >
        <div style={{
          height: '100%',
          width: `${progressPercent}%`,
          background: progressPercent >= 75 ? colors.semantic.success : progressPercent >= 40 ? colors.semantic.warning : colors.accent.orange,
          borderRadius: radius.sm,
          transition: `width ${transitions.slow}`,
        }} />
      </div>

      {/* Adaptive "Today's Focus" overlay */}
      {adaptiveOverlay?.today?.length > 0 && (
        <div style={{
          padding: '12px 16px',
          background: adaptiveOverlay.isTriage ? 'rgba(220, 38, 38, 0.06)' : 'rgba(255, 149, 0, 0.06)',
          borderRadius: radius.md,
          marginBottom: '16px',
          border: `1px solid ${adaptiveOverlay.isTriage ? 'rgba(220, 38, 38, 0.15)' : 'rgba(255, 149, 0, 0.15)'}`,
        }}>
          <div style={{
            fontSize: typography.sizes.xs,
            fontWeight: typography.weights.semibold,
            color: adaptiveOverlay.isTriage ? '#dc2626' : colors.accent.orange,
            textTransform: 'uppercase',
            letterSpacing: '0.04em',
            marginBottom: '6px',
          }}>
            {adaptiveOverlay.isTriage ? 'Triage Mode — Test in ' + adaptiveOverlay.daysUntilTest + ' days' : "Today's Focus"}
          </div>
          <div style={{ fontSize: typography.sizes.xs, color: colors.text.secondary, marginBottom: '8px' }}>
            {adaptiveOverlay.reprioritisationSummary}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {adaptiveOverlay.today.slice(0, 4).map((action, i) => (
              <div key={i} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: typography.sizes.xs,
                color: colors.text.primary,
              }}>
                <span style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: action.type === 'review' ? colors.accent.orange :
                    action.type === 'recovery' ? '#dc2626' : colors.semantic.success,
                  flexShrink: 0,
                }} />
                <span>{action.label}</span>
                <span style={{ color: colors.text.tertiary, marginLeft: 'auto', fontSize: '11px' }}>
                  ~{action.minutes} min
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Summary stats row */}
      {summary?.stats && (
        <div style={{
          display: 'flex',
          gap: spacing.sm,
          marginBottom: '20px',
          flexWrap: 'wrap',
        }}>
          {summary.stats.weeksInPlan && (
            <div style={{ fontSize: typography.sizes.xs, color: colors.text.secondary, minWidth: isMobile ? '45%' : 'auto' }}>
              <span style={{ fontWeight: typography.weights.semibold, color: colors.text.primary }}>{summary.stats.weeksInPlan}</span> weeks
            </div>
          )}
          {summary.stats.totalLessons > 0 && (
            <div style={{ fontSize: typography.sizes.xs, color: colors.text.secondary, minWidth: isMobile ? '45%' : 'auto' }}>
              <span style={{ fontWeight: typography.weights.semibold, color: colors.text.primary }}>{summary.stats.totalLessons}</span> lessons
            </div>
          )}
          {summary.stats.totalPractice > 0 && (
            <div style={{ fontSize: typography.sizes.xs, color: colors.text.secondary, minWidth: isMobile ? '45%' : 'auto' }}>
              <span style={{ fontWeight: typography.weights.semibold, color: colors.text.primary }}>{summary.stats.totalPractice}</span> practice sets
            </div>
          )}
          {summary.stats.minutesPerDay && (
            <div style={{ fontSize: typography.sizes.xs, color: colors.text.secondary, minWidth: isMobile ? '45%' : 'auto' }}>
              <span style={{ fontWeight: typography.weights.semibold, color: colors.text.primary }}>{summary.stats.minutesPerDay}</span> min/day
            </div>
          )}
        </div>
      )}

      {/* Weekly plan accordion */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.xs }}>
        {weeks.map((week, weekIdx) => {
          const isExpanded = activeExpanded === weekIdx;
          const weekCompleted = week.activities.filter(a => a.completed).length;
          const weekTotal = week.activities.length;
          const weekPercent = weekTotal > 0 ? Math.round((weekCompleted / weekTotal) * 100) : 0;
          const isCurrent = weekIdx === displayCurrentWeek;

          return (
            <div key={weekIdx} style={{
              border: isCurrent ? `2px solid ${colors.accent.orange}` : `1px solid ${colors.surface.grayDark}`,
              borderRadius: radius.md,
              overflow: 'hidden',
            }}>
              {/* Week header */}
              <button
                onClick={() => setExpandedWeek(isExpanded ? null : weekIdx)}
                aria-expanded={isExpanded}
                aria-label={`Week ${week.weekNumber}: ${week.title || `Week ${week.weekNumber}`}, ${weekCompleted} of ${weekTotal} activities completed`}
                style={{
                  width: '100%',
                  padding: '14px 16px',
                  background: isCurrent ? colors.accent.orangeLight : weekPercent === 100 ? colors.semantic.successLight : colors.surface.offWhite,
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
                    borderRadius: radius.full,
                    background: weekPercent === 100 ? colors.semantic.success : isCurrent ? colors.accent.orange : colors.surface.grayMedium,
                    color: colors.text.inverse,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: typography.sizes.xs,
                    fontWeight: typography.weights.bold,
                    flexShrink: 0,
                  }}>
                    {weekPercent === 100 ? <CheckIcon size={14} color={colors.text.inverse} /> : week.weekNumber}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{
                      fontSize: typography.sizes.base,
                      fontWeight: typography.weights.semibold,
                      color: colors.text.primary,
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}>
                      {week.title || `Week ${week.weekNumber}`}
                      {isCurrent && (
                        <span style={{
                          marginLeft: spacing.xs,
                          fontSize: typography.sizes.xs,
                          fontWeight: typography.weights.medium,
                          color: colors.accent.orange,
                          background: colors.accent.orangeLight,
                          padding: '2px 6px',
                          borderRadius: radius.sm,
                        }}>
                          Current
                        </span>
                      )}
                    </div>
                    {week.focusSkills && week.focusSkills.length > 0 && (
                      <div style={{
                        fontSize: typography.sizes.xs,
                        color: colors.text.secondary,
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
                  <div style={{ fontSize: typography.sizes.xs, color: colors.text.secondary }}>
                    {weekCompleted}/{weekTotal}
                  </div>
                  <span style={{
                    color: colors.text.muted,
                    transform: isExpanded ? 'rotate(180deg)' : 'none',
                    transition: `transform ${transitions.fast}`,
                    display: 'flex',
                    alignItems: 'center',
                  }}>
                    <ChevronDownIcon size={14} color={colors.text.muted} />
                  </span>
                </div>
              </button>

              {/* Week activities (expanded) */}
              {isExpanded && (
                <div style={{
                  padding: `${spacing.xs} ${spacing.md} ${spacing.md}`,
                  background: colors.surface.white,
                }}>
                  {week.goalDescription && (
                    <div style={{
                      fontSize: typography.sizes.xs,
                      color: colors.text.secondary,
                      fontStyle: 'italic',
                      padding: `${spacing.xs} 0`,
                      marginBottom: spacing.xs,
                      borderBottom: `1px solid ${colors.surface.gray}`,
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
                            borderRadius: radius.sm,
                            background: isCompleted ? colors.surface.offWhite : colors.surface.white,
                            border: `1px solid ${colors.surface.gray}`,
                            cursor: 'pointer',
                            opacity: isCompleted ? 0.7 : 1,
                            transition: `all ${transitions.fast}`,
                            minWidth: 0,
                          }}
                          onClick={() => handleActivityClick(activity, weekIdx, actIdx)}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = isCompleted ? colors.surface.gray : colors.surface.offWhite;
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = isCompleted ? colors.surface.offWhite : colors.surface.white;
                          }}
                        >
                          {/* Checkbox */}
                          <button
                            onClick={(e) => handleToggleComplete(e, weekIdx, actIdx, isCompleted)}
                            role="checkbox"
                            aria-checked={isCompleted}
                            aria-label={`Mark "${activity.title}" as ${isCompleted ? 'incomplete' : 'complete'}`}
                            style={{
                              width: '22px',
                              height: '22px',
                              borderRadius: '6px',
                              border: isCompleted ? 'none' : `2px solid ${colors.surface.grayMedium}`,
                              background: isCompleted ? colors.semantic.success : colors.surface.white,
                              color: colors.text.inverse,
                              fontSize: typography.sizes.xs,
                              cursor: 'pointer',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              flexShrink: 0,
                              padding: 0,
                            }}
                          >
                            {isCompleted && <CheckIcon size={12} color={colors.text.inverse} />}
                          </button>

                          {/* Icon */}
                          <span style={{ flexShrink: 0, display: 'flex', alignItems: 'center' }}>
                            {getActivityIcon(activity)}
                          </span>

                          {/* Content */}
                          <div style={{ flex: 1, minWidth: 0 }}>
                            <div style={{
                              fontSize: typography.sizes.sm,
                              fontWeight: typography.weights.medium,
                              color: isCompleted ? colors.text.muted : colors.text.primary,
                              textDecoration: isCompleted ? 'line-through' : 'none',
                              whiteSpace: 'nowrap',
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                            }}>
                              {activity.title}
                            </div>
                            {activity.subtitle && (
                              <div style={{
                                fontSize: typography.sizes.xs,
                                color: colors.text.muted,
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
                            fontSize: typography.sizes.caption,
                            fontWeight: typography.weights.semibold,
                            color: typeColor.text,
                            background: typeColor.bg,
                            padding: `2px ${spacing.xs}`,
                            borderRadius: radius.sm,
                            flexShrink: 0,
                          }}>
                            {getActivityTypeLabel(activity)}
                          </span>

                          {/* Duration */}
                          {activity.duration && (
                            <span style={{
                              fontSize: typography.sizes.xs,
                              color: colors.text.muted,
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
    </DataCard>
  );
};

export default StudyPlanDashboard;
