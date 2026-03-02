import React, { useState, useMemo } from 'react';
import { colors, typography, spacing, radius, transitions, breakpoints } from '../design/tokens';
import { cardStyles } from '../design/components';
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

  if (!studyPlan || !studyPlan.weeks || studyPlan.weeks.length === 0) {
    return (
      <div style={{ padding: `${spacing.xl} 0` }}>
        <DataCard style={{ textAlign: 'center', padding: `${spacing.xl} ${spacing.lg}` }}>
          <div style={{ marginBottom: spacing.xs, display: 'flex', justifyContent: 'center' }}>
            <ClipboardIcon size={28} color={colors.text.secondary} />
          </div>
          <div style={{ fontSize: typography.sizes.lg, fontWeight: typography.weights.semibold, color: colors.text.primary, marginBottom: '4px' }}>
            No Study Plan Yet
          </div>
          <div style={{ fontSize: typography.sizes.sm, color: colors.text.secondary, maxWidth: '360px', margin: '0 auto', lineHeight: '1.6' }}>
            Complete a practice test and your personalized AI study plan will appear here automatically.
          </div>
          {onStartPracticeTest && (
            <PrimaryButton onClick={onStartPracticeTest} style={{ marginTop: spacing.md }}>
              Take a Practice Test
            </PrimaryButton>
          )}
        </DataCard>
      </div>
    );
  }

  const { weeks, summary, strengths, weaknesses, deltaFromPrevious, calculatorDependency, eliminationEffectiveness, persistentWeaknesses, staminaInsight } = studyPlan;

  const totalActivities = weeks.reduce((sum, w) => sum + (w.activities?.length || 0), 0);
  const completedActivities = weeks.reduce(
    (sum, w) => sum + (w.activities?.filter(a => a.completed).length || 0),
    0
  );
  const progressPercent = totalActivities > 0 ? Math.round((completedActivities / totalActivities) * 100) : 0;

  const currentWeekIndex = weeks.findIndex(w => w.activities?.some(a => !a.completed));
  const displayCurrentWeek = currentWeekIndex >= 0 ? currentWeekIndex : weeks.length - 1;
  const activeExpanded = expandedWeek !== null ? expandedWeek : displayCurrentWeek;

  const handleActivityClick = (activity) => {
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
    const map = { lesson: 'Lesson', practice: 'Practice', strategy: 'Strategy', review: 'Review', test: 'Practice Test' };
    return map[activity.type] || 'Activity';
  };

  const getActivityTypeColor = (activity) => {
    const map = {
      lesson: { bg: colors.semantic.infoLight, text: colors.semantic.info },
      practice: { bg: colors.semantic.successLight, text: colors.semantic.success },
      strategy: { bg: colors.semantic.warningLight, text: colors.semantic.warning },
      review: { bg: colors.semantic.warningBg, text: colors.badge.bronze },
      test: { bg: colors.accent.purpleLight, text: colors.accent.purple },
    };
    return map[activity.type] || { bg: colors.surface.gray, text: colors.text.secondary };
  };

  return (
    <div style={{ padding: `${spacing.lg} 0`, display: 'flex', flexDirection: 'column', gap: spacing.lg }}>

      {/* Page Header */}
      <div>
        <h1 style={{ fontSize: typography.sizes['2xl'], fontWeight: typography.weights.bold, color: colors.text.primary, marginBottom: '4px' }}>
          Your Study Plan
        </h1>
        <p style={{ fontSize: typography.sizes.sm, color: colors.text.secondary }}>
          AI-generated after your last practice test. Updated every time you complete a test.
        </p>
      </div>

      {/* Progress + Summary Card */}
      <DataCard>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: typography.sizes.sm, color: colors.text.secondary, marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <ClipboardIcon size={14} color={colors.text.secondary} /> AI Study Plan
            </div>
            <div style={{ fontSize: typography.sizes.lg, fontWeight: typography.weights.semibold, color: colors.text.primary }}>
              {summary?.headline
                ? (summary.headline.length > 80 ? summary.headline.slice(0, 80) + '...' : summary.headline)
                : `${weeks.length}-Week Plan`}
            </div>
            {summary?.diagnosis && (
              <p style={{ fontSize: typography.sizes.sm, color: colors.text.secondary, marginTop: '6px', lineHeight: '1.5', maxWidth: '560px' }}>
                {summary.diagnosis}
              </p>
            )}
          </div>
          <div style={{ textAlign: 'right', minWidth: '80px' }}>
            <div style={{ fontSize: typography.sizes['2xl'], fontWeight: typography.weights.bold, color: colors.accent.orange }}>
              {progressPercent}%
            </div>
            <div style={{ fontSize: typography.sizes.xs, color: colors.text.secondary }}>
              {completedActivities}/{totalActivities} done
            </div>
          </div>
        </div>

        <div
          role="progressbar"
          aria-valuenow={progressPercent}
          aria-valuemin={0}
          aria-valuemax={100}
          style={{ height: '6px', background: colors.surface.gray, borderRadius: radius.sm, marginBottom: '16px', overflow: 'hidden' }}
        >
          <div style={{
            height: '100%',
            width: `${progressPercent}%`,
            background: progressPercent >= 75 ? colors.semantic.success : progressPercent >= 40 ? colors.semantic.warning : colors.accent.orange,
            borderRadius: radius.sm,
            transition: `width ${transitions.slow}`,
          }} />
        </div>

        {summary?.stats && (
          <div style={{ display: 'flex', gap: spacing.md, flexWrap: 'wrap' }}>
            {summary.stats.weeksInPlan && (
              <Stat label="weeks" value={summary.stats.weeksInPlan} />
            )}
            {summary.stats.totalLessons > 0 && (
              <Stat label="lessons" value={summary.stats.totalLessons} />
            )}
            {summary.stats.totalPractice > 0 && (
              <Stat label="practice sets" value={summary.stats.totalPractice} />
            )}
            {summary.stats.minutesPerDay && (
              <Stat label="min/day" value={summary.stats.minutesPerDay} />
            )}
          </div>
        )}
      </DataCard>

      {/* Delta from Previous Plan */}
      {deltaFromPrevious && (
        <DataCard style={{
          background: `linear-gradient(135deg, ${colors.semantic.infoLight}, ${colors.semantic.infoBg || colors.semantic.infoLight})`,
          border: `1px solid ${colors.semantic.info}20`,
        }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
            <span style={{ fontSize: '18px', flexShrink: 0 }}>&#x1F504;</span>
            <div>
              <div style={{ fontSize: typography.sizes.sm, fontWeight: typography.weights.semibold, color: colors.semantic.info, marginBottom: '4px' }}>
                What Changed From Your Last Plan
              </div>
              <div style={{ fontSize: typography.sizes.sm, color: colors.text.primary, lineHeight: '1.5' }}>
                {deltaFromPrevious}
              </div>
            </div>
          </div>
        </DataCard>
      )}

      {/* Strengths & Weaknesses */}
      {(strengths?.length > 0 || weaknesses?.length > 0) && (
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: spacing.md }}>
          {weaknesses?.length > 0 && (
            <DataCard>
              <div style={{ fontSize: typography.sizes.sm, fontWeight: typography.weights.semibold, color: colors.semantic.error, marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: colors.semantic.error }} />
                Focus Areas
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {weaknesses.slice(0, 5).map((w, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: typography.sizes.sm, fontWeight: typography.weights.medium, color: colors.text.primary, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {w.skill}
                      </div>
                      <div style={{ fontSize: typography.sizes.xs, color: colors.text.muted }}>
                        {w.evidence || w.errorType}
                      </div>
                    </div>
                    <span style={{
                      fontSize: typography.sizes.xs, fontWeight: typography.weights.bold,
                      color: w.accuracy < 30 ? colors.semantic.error : colors.semantic.warning,
                      padding: '2px 8px', borderRadius: radius.sm,
                      background: w.accuracy < 30 ? colors.semantic.errorLight : colors.semantic.warningBg,
                      flexShrink: 0, marginLeft: '8px',
                    }}>
                      {w.accuracy}%
                    </span>
                  </div>
                ))}
              </div>
            </DataCard>
          )}
          {strengths?.length > 0 && (
            <DataCard>
              <div style={{ fontSize: typography.sizes.sm, fontWeight: typography.weights.semibold, color: colors.semantic.success, marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: colors.semantic.success }} />
                Your Strengths
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {strengths.slice(0, 5).map((s, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: typography.sizes.sm, fontWeight: typography.weights.medium, color: colors.text.primary, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {s.skill}
                      </div>
                      {s.evidence && (
                        <div style={{ fontSize: typography.sizes.xs, color: colors.text.muted }}>{s.evidence}</div>
                      )}
                    </div>
                    <span style={{
                      fontSize: typography.sizes.xs, fontWeight: typography.weights.bold,
                      color: colors.semantic.success,
                      padding: '2px 8px', borderRadius: radius.sm,
                      background: colors.semantic.successLight,
                      flexShrink: 0, marginLeft: '8px',
                    }}>
                      {s.accuracy}%
                    </span>
                  </div>
                ))}
              </div>
            </DataCard>
          )}
        </div>
      )}

      {/* Diagnostic Insights Row */}
      {(calculatorDependency || eliminationEffectiveness || staminaInsight || persistentWeaknesses?.length > 0) && (
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(200px, 1fr))', gap: spacing.md }}>
          {staminaInsight && (
            <DataCard style={{ padding: '16px' }}>
              <div style={{ fontSize: typography.sizes.xs, fontWeight: typography.weights.semibold, color: colors.text.secondary, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '8px' }}>
                Stamina
              </div>
              <div style={{ fontSize: typography.sizes['2xl'], fontWeight: typography.weights.bold, color: staminaInsight.score >= 70 ? colors.semantic.success : staminaInsight.score >= 50 ? colors.semantic.warning : colors.semantic.error, marginBottom: '4px' }}>
                {staminaInsight.score}
              </div>
              <div style={{ fontSize: typography.sizes.xs, color: colors.text.secondary, lineHeight: '1.4' }}>
                {staminaInsight.message}
              </div>
            </DataCard>
          )}
          {calculatorDependency && (
            <DataCard style={{ padding: '16px' }}>
              <div style={{ fontSize: typography.sizes.xs, fontWeight: typography.weights.semibold, color: colors.text.secondary, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '8px' }}>
                Calculator Use
              </div>
              <div style={{ fontSize: typography.sizes['2xl'], fontWeight: typography.weights.bold, color: calculatorDependency.usagePercent > 60 ? colors.semantic.warning : colors.text.primary, marginBottom: '4px' }}>
                {calculatorDependency.usagePercent}%
              </div>
              <div style={{ fontSize: typography.sizes.xs, color: colors.text.secondary, lineHeight: '1.4' }}>
                {calculatorDependency.insight}
                {calculatorDependency.easyQuestionsWithCalculator > 0 && (
                  <span style={{ display: 'block', marginTop: '4px', color: colors.semantic.warning }}>
                    {calculatorDependency.easyQuestionsWithCalculator} easy question{calculatorDependency.easyQuestionsWithCalculator > 1 ? 's' : ''} used calculator
                  </span>
                )}
              </div>
            </DataCard>
          )}
          {eliminationEffectiveness && (
            <DataCard style={{ padding: '16px' }}>
              <div style={{ fontSize: typography.sizes.xs, fontWeight: typography.weights.semibold, color: colors.text.secondary, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '8px' }}>
                Answer Changes
              </div>
              <div style={{ fontSize: typography.sizes['2xl'], fontWeight: typography.weights.bold, color: eliminationEffectiveness.changedToCorrect >= eliminationEffectiveness.changedToWrong ? colors.semantic.success : colors.semantic.error, marginBottom: '4px' }}>
                {eliminationEffectiveness.totalChanges}
              </div>
              <div style={{ fontSize: typography.sizes.xs, color: colors.text.secondary, lineHeight: '1.4' }}>
                {eliminationEffectiveness.changedToCorrect} changed to correct, {eliminationEffectiveness.changedToWrong} changed to wrong.
                {eliminationEffectiveness.insight && <span style={{ display: 'block', marginTop: '4px' }}>{eliminationEffectiveness.insight}</span>}
              </div>
            </DataCard>
          )}
          {persistentWeaknesses?.length > 0 && (
            <DataCard style={{ padding: '16px' }}>
              <div style={{ fontSize: typography.sizes.xs, fontWeight: typography.weights.semibold, color: colors.semantic.error, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '8px' }}>
                Persistent Gaps
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {persistentWeaknesses.map((pw, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: typography.sizes.xs, color: colors.text.primary, flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {pw.skill}
                    </span>
                    <span style={{ fontSize: '10px', color: colors.semantic.error, flexShrink: 0 }}>
                      {pw.testsWeak} tests
                    </span>
                  </div>
                ))}
              </div>
            </DataCard>
          )}
        </div>
      )}

      {/* Adaptive "Today's Focus" overlay */}
      {adaptiveOverlay?.today?.length > 0 && (
        <DataCard style={{
          background: adaptiveOverlay.isTriage ? 'rgba(220, 38, 38, 0.04)' : 'rgba(255, 149, 0, 0.04)',
          border: `1px solid ${adaptiveOverlay.isTriage ? 'rgba(220, 38, 38, 0.15)' : 'rgba(255, 149, 0, 0.15)'}`,
        }}>
          <div style={{
            fontSize: typography.sizes.xs, fontWeight: typography.weights.semibold,
            color: adaptiveOverlay.isTriage ? '#dc2626' : colors.accent.orange,
            textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '6px',
          }}>
            {adaptiveOverlay.isTriage ? 'Triage Mode — Test in ' + adaptiveOverlay.daysUntilTest + ' days' : "Today's Focus"}
          </div>
          <div style={{ fontSize: typography.sizes.xs, color: colors.text.secondary, marginBottom: '8px' }}>
            {adaptiveOverlay.reprioritisationSummary}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {adaptiveOverlay.today.slice(0, 4).map((action, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: typography.sizes.xs, color: colors.text.primary }}>
                <span style={{
                  width: '6px', height: '6px', borderRadius: '50%',
                  background: action.type === 'review' ? colors.accent.orange : action.type === 'recovery' ? '#dc2626' : colors.semantic.success,
                  flexShrink: 0,
                }} />
                <span>{action.label}</span>
                <span style={{ color: colors.text.tertiary, marginLeft: 'auto', fontSize: '11px' }}>~{action.minutes} min</span>
              </div>
            ))}
          </div>
        </DataCard>
      )}

      {/* Weekly Plan Accordion */}
      <div>
        <h2 style={{ fontSize: typography.sizes.lg, fontWeight: typography.weights.semibold, color: colors.text.primary, marginBottom: spacing.sm }}>
          Weekly Plan
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.xs }}>
          {weeks.map((week, weekIdx) => {
            const isExpanded = activeExpanded === weekIdx;
            const weekCompleted = (week.activities || []).filter(a => a.completed).length;
            const weekTotal = (week.activities || []).length;
            const weekPercent = weekTotal > 0 ? Math.round((weekCompleted / weekTotal) * 100) : 0;
            const isCurrent = weekIdx === displayCurrentWeek;

            return (
              <div key={weekIdx} style={{
                border: isCurrent ? `2px solid ${colors.accent.orange}` : `1px solid ${colors.surface.grayDark}`,
                borderRadius: radius.md,
                overflow: 'hidden',
                background: colors.surface.white,
              }}>
                <button
                  onClick={() => setExpandedWeek(isExpanded ? null : weekIdx)}
                  aria-expanded={isExpanded}
                  style={{
                    width: '100%', padding: '14px 16px',
                    background: isCurrent ? colors.accent.orangeLight : weekPercent === 100 ? colors.semantic.successLight : colors.surface.offWhite,
                    border: 'none', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', textAlign: 'left',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flex: 1 }}>
                    <div style={{
                      width: '28px', height: '28px', borderRadius: radius.full,
                      background: weekPercent === 100 ? colors.semantic.success : isCurrent ? colors.accent.orange : colors.surface.grayMedium,
                      color: colors.text.inverse, display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: typography.sizes.xs, fontWeight: typography.weights.bold, flexShrink: 0,
                    }}>
                      {weekPercent === 100 ? <CheckIcon size={14} color={colors.text.inverse} /> : week.weekNumber}
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{
                        fontSize: typography.sizes.base, fontWeight: typography.weights.semibold, color: colors.text.primary,
                        whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
                      }}>
                        {week.title || `Week ${week.weekNumber}`}
                        {isCurrent && (
                          <span style={{
                            marginLeft: spacing.xs, fontSize: typography.sizes.xs, fontWeight: typography.weights.medium,
                            color: colors.accent.orange, background: colors.accent.orangeLight,
                            padding: '2px 6px', borderRadius: radius.sm,
                          }}>Current</span>
                        )}
                      </div>
                      {week.focusSkills && week.focusSkills.length > 0 && (
                        <div style={{ fontSize: typography.sizes.xs, color: colors.text.secondary, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                          {week.focusSkills.join(', ')}
                        </div>
                      )}
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
                    <div style={{ fontSize: typography.sizes.xs, color: colors.text.secondary }}>{weekCompleted}/{weekTotal}</div>
                    <span style={{
                      color: colors.text.muted, transform: isExpanded ? 'rotate(180deg)' : 'none',
                      transition: `transform ${transitions.fast}`, display: 'flex', alignItems: 'center',
                    }}>
                      <ChevronDownIcon size={14} color={colors.text.muted} />
                    </span>
                  </div>
                </button>

                {isExpanded && (
                  <div style={{ padding: `${spacing.xs} ${spacing.md} ${spacing.md}`, background: colors.surface.white }}>
                    {week.goalDescription && (
                      <div style={{
                        fontSize: typography.sizes.xs, color: colors.text.secondary, fontStyle: 'italic',
                        padding: `${spacing.xs} 0`, marginBottom: spacing.xs,
                        borderBottom: `1px solid ${colors.surface.gray}`,
                      }}>
                        Goal: {week.goalDescription}
                      </div>
                    )}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      {(week.activities || []).map((activity, actIdx) => {
                        const isCompleted = activity.completed;
                        const typeColor = getActivityTypeColor(activity);

                        return (
                          <div
                            key={actIdx}
                            style={{
                              display: 'flex', alignItems: 'center', gap: '10px',
                              padding: '10px 12px', borderRadius: radius.sm,
                              background: isCompleted ? colors.surface.offWhite : colors.surface.white,
                              border: `1px solid ${colors.surface.gray}`, cursor: 'pointer',
                              opacity: isCompleted ? 0.7 : 1, transition: `all ${transitions.fast}`, minWidth: 0,
                            }}
                            onClick={() => handleActivityClick(activity)}
                          >
                            <button
                              onClick={(e) => handleToggleComplete(e, weekIdx, actIdx, isCompleted)}
                              role="checkbox"
                              aria-checked={isCompleted}
                              style={{
                                width: '22px', height: '22px', borderRadius: '6px',
                                border: isCompleted ? 'none' : `2px solid ${colors.surface.grayMedium}`,
                                background: isCompleted ? colors.semantic.success : colors.surface.white,
                                color: colors.text.inverse, fontSize: typography.sizes.xs,
                                cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                flexShrink: 0, padding: 0,
                              }}
                            >
                              {isCompleted && <CheckIcon size={12} color={colors.text.inverse} />}
                            </button>

                            <span style={{ flexShrink: 0, display: 'flex', alignItems: 'center' }}>
                              {getActivityIcon(activity)}
                            </span>

                            <div style={{ flex: 1, minWidth: 0 }}>
                              <div style={{
                                fontSize: typography.sizes.sm, fontWeight: typography.weights.medium,
                                color: isCompleted ? colors.text.muted : colors.text.primary,
                                textDecoration: isCompleted ? 'line-through' : 'none',
                                whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
                              }}>
                                {activity.title}
                              </div>
                              {activity.subtitle && (
                                <div style={{ fontSize: typography.sizes.xs, color: colors.text.muted, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                  {activity.subtitle}
                                </div>
                              )}
                            </div>

                            <span style={{
                              fontSize: typography.sizes.caption, fontWeight: typography.weights.semibold,
                              color: typeColor.text, background: typeColor.bg,
                              padding: `2px ${spacing.xs}`, borderRadius: radius.sm, flexShrink: 0,
                            }}>
                              {getActivityTypeLabel(activity)}
                            </span>

                            {activity.duration && (
                              <span style={{ fontSize: typography.sizes.xs, color: colors.text.muted, flexShrink: 0 }}>
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
    </div>
  );
};

function Stat({ label, value }) {
  return (
    <div style={{ fontSize: typography.sizes.xs, color: colors.text.secondary }}>
      <span style={{ fontWeight: typography.weights.semibold, color: colors.text.primary }}>{value}</span> {label}
    </div>
  );
}

export default StudyPlanDashboard;
