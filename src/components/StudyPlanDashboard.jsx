import React, { useState, useMemo } from 'react';
import { colors, typography, spacing, radius, transitions, breakpoints } from '../design/tokens';
import { cardStyles } from '../design/components';
import { MathText } from './MathText';
import { DataCard } from './ui/DataCard';
import { PrimaryButton } from './ui/Button';
import { reprioritizePlan } from '../services/adaptivePlanService';
import { getQuestionById } from '../data/questions/bank';
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
  skillProgress,
  reviewQueue,
  user,
  onNavigateToModule,
  onStartPractice,
  onStartPracticeTest,
  onCompleteActivity,
  onUncompleteActivity,
  studyPlanHistory,
  onSelectPlanVersion,
}) => {
  const [expandedWeek, setExpandedWeek] = useState(null);
  const [showTargeted, setShowTargeted] = useState(false);

  const targetedQuestions = useMemo(() => {
    const ids = studyPlan?.targetedQuestionIds || [];
    if (ids.length === 0) return [];
    return ids.map(id => getQuestionById(id)).filter(Boolean);
  }, [studyPlan?.targetedQuestionIds]);

  const adaptiveOverlay = useMemo(() => {
    if (!studyPlan?.weeks?.length) return null;
    const adapted = reprioritizePlan(
      studyPlan,
      skillProgress || {},
      practiceTestResults,
      reviewQueue,
      user?.testDate
    );
    return adapted?.adaptiveOverlay || null;
  }, [studyPlan, skillProgress, practiceTestResults, reviewQueue, user?.testDate]);

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

  const [howYouTestOpen, setHowYouTestOpen] = useState(false);
  const hasHowYouTestData = calculatorDependency || eliminationEffectiveness || staminaInsight || persistentWeaknesses?.length > 0;

  const nextAction = (() => {
    const currentWeek = weeks[displayCurrentWeek];
    const nextTodo = currentWeek?.activities?.find(a => !a.completed);
    return nextTodo || null;
  })();

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
                <MathText>{summary.diagnosis}</MathText>
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

      {/* Do This Now — prominent single action */}
      {nextAction && (
        <DataCard style={{
          background: `linear-gradient(135deg, ${colors.accent.orange} 0%, ${colors.accent.orangeHover} 100%)`,
          border: 'none', cursor: 'pointer', padding: '18px 20px',
        }} onClick={() => handleActivityClick(nextAction)}>
          <div style={{ fontSize: typography.sizes.xs, fontWeight: typography.weights.semibold, color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '6px' }}>
            Do This Now
          </div>
          <div style={{ fontSize: typography.sizes.base, fontWeight: typography.weights.bold, color: '#fff', marginBottom: '4px' }}>
            <MathText>{nextAction.title}</MathText>
          </div>
          {nextAction.subtitle && (
            <div style={{ fontSize: typography.sizes.sm, color: 'rgba(255,255,255,0.85)', lineHeight: '1.4' }}>
              <MathText>{nextAction.subtitle}</MathText>
            </div>
          )}
          {nextAction.duration && (
            <span style={{ display: 'inline-block', marginTop: '8px', fontSize: typography.sizes.xs, background: 'rgba(255,255,255,0.2)', color: '#fff', padding: '3px 10px', borderRadius: radius.sm }}>
              ~{nextAction.duration} min
            </span>
          )}
        </DataCard>
      )}

      {/* Targeted Practice Set */}
      {targetedQuestions.length > 0 && (
        <DataCard style={{ padding: '16px 18px' }}>
          <div
            onClick={() => setShowTargeted(!showTargeted)}
            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}
          >
            <div>
              <div style={{ fontSize: typography.sizes.sm, fontWeight: typography.weights.bold, color: colors.text.primary, marginBottom: '2px' }}>
                Targeted Practice ({targetedQuestions.length} questions)
              </div>
              <div style={{ fontSize: typography.sizes.xs, color: colors.text.secondary }}>
                Questions matched to your weak skills
              </div>
            </div>
            <span style={{ fontSize: '16px', color: colors.text.muted, transform: showTargeted ? 'rotate(180deg)' : 'none', transition: `transform ${transitions.fast}` }}>
              &#9660;
            </span>
          </div>
          {showTargeted && (
            <div style={{ marginTop: '12px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {targetedQuestions.map((q, i) => {
                const diffColor = q.difficulty === 'hard' ? colors.semantic.error : q.difficulty === 'medium' ? colors.semantic.warning : colors.semantic.success;
                const domainLabels = { algebra: 'ALG', 'problem-solving': 'PS', 'advanced-math': 'AM', geometry: 'GEO' };
                return (
                  <div key={q.id} style={{
                    display: 'flex', alignItems: 'center', gap: '8px',
                    padding: '8px 10px', borderRadius: radius.sm,
                    background: colors.surface.offWhite, fontSize: typography.sizes.xs,
                  }}>
                    <span style={{ fontWeight: typography.weights.bold, color: colors.text.muted, minWidth: '22px' }}>{i + 1}</span>
                    <span style={{ fontWeight: typography.weights.medium, padding: '1px 6px', borderRadius: '3px', background: diffColor, color: '#fff', textTransform: 'capitalize', fontSize: '10px' }}>
                      {q.difficulty}
                    </span>
                    <span style={{ fontWeight: typography.weights.semibold, color: colors.accent.teal, fontSize: '10px' }}>
                      {domainLabels[q.domain] || q.domain}
                    </span>
                    <span style={{ flex: 1, color: colors.text.secondary, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      <MathText>{q.question.length > 80 ? q.question.slice(0, 80) + '...' : q.question}</MathText>
                    </span>
                  </div>
                );
              })}
              <div style={{ marginTop: '8px', fontSize: typography.sizes.xs, color: colors.text.muted }}>
                These questions target your weakest skills. Practice them through the module sections listed in your weekly plan.
              </div>
            </div>
          )}
        </DataCard>
      )}

      {/* Delta from Previous Plan */}
      {(deltaFromPrevious || adaptiveOverlay?.focusSkills?.some(s => s.delta !== 'stagnant')) && (
        <DataCard style={{
          background: `linear-gradient(135deg, ${colors.semantic.infoLight}, ${colors.semantic.infoBg || colors.semantic.infoLight})`,
          border: `1px solid ${colors.semantic.info}20`, padding: '14px 16px',
        }}>
          <div style={{ fontSize: typography.sizes.xs, fontWeight: typography.weights.semibold, color: colors.semantic.info, marginBottom: '6px' }}>
            What Changed Since Last Plan
          </div>
          {deltaFromPrevious && (
            <div style={{ fontSize: typography.sizes.sm, color: colors.text.primary, lineHeight: '1.5', marginBottom: '8px' }}>
              {deltaFromPrevious}
            </div>
          )}
          {adaptiveOverlay?.focusSkills?.filter(s => s.delta !== 'stagnant' && s.delta !== 'new').length > 0 && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {adaptiveOverlay.focusSkills
                .filter(s => s.delta === 'improved' || s.delta === 'declined')
                .slice(0, 6)
                .map((skill, i) => (
                  <span key={i} style={{
                    display: 'inline-flex', alignItems: 'center', gap: '4px',
                    fontSize: '11px', padding: '3px 8px', borderRadius: radius.sm,
                    background: skill.delta === 'improved' ? colors.semantic.successLight : 'rgba(220,38,38,0.08)',
                    color: skill.delta === 'improved' ? colors.semantic.success : '#dc2626',
                  }}>
                    <span>{skill.delta === 'improved' ? '↑' : '↓'}</span>
                    <span>{skill.skillName}</span>
                    {skill.currentAccuracy !== null && (
                      <span style={{ opacity: 0.7 }}>({skill.currentAccuracy}%)</span>
                    )}
                  </span>
                ))}
            </div>
          )}
        </DataCard>
      )}

      {/* Strengths & Weaknesses — trimmed to top 3 */}
      {(strengths?.length > 0 || weaknesses?.length > 0) && (
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: spacing.md }}>
          {weaknesses?.length > 0 && (
            <DataCard>
              <div style={{ fontSize: typography.sizes.sm, fontWeight: typography.weights.semibold, color: colors.semantic.error, marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: colors.semantic.error }} />
                Focus Areas
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {weaknesses.slice(0, 3).map((w, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: typography.sizes.sm, fontWeight: typography.weights.medium, color: colors.text.primary, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        <MathText>{w.skill}</MathText>
                      </div>
                      <div style={{ fontSize: typography.sizes.xs, color: colors.text.muted }}>
                        <MathText>{w.evidence || w.errorType}</MathText>
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
              <div style={{ fontSize: typography.sizes.sm, fontWeight: typography.weights.semibold, color: colors.semantic.success, marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: colors.semantic.success }} />
                Your Strengths
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {strengths.slice(0, 3).map((s, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: typography.sizes.sm, fontWeight: typography.weights.medium, color: colors.text.primary, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {s.skill}
                      </div>
                    </div>
                    <span style={{
                      fontSize: typography.sizes.xs, fontWeight: typography.weights.bold,
                      color: colors.semantic.success, padding: '2px 8px', borderRadius: radius.sm,
                      background: colors.semantic.successLight, flexShrink: 0, marginLeft: '8px',
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

      {/* How You Test — collapsible diagnostic group */}
      {hasHowYouTestData && (
        <DataCard style={{ padding: 0, overflow: 'hidden' }}>
          <button
            onClick={() => setHowYouTestOpen(o => !o)}
            style={{
              width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              padding: '14px 16px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left',
            }}
          >
            <div>
              <div style={{ fontSize: typography.sizes.sm, fontWeight: typography.weights.semibold, color: colors.text.primary }}>How You Test</div>
              {!howYouTestOpen && (
                <div style={{ fontSize: typography.sizes.xs, color: colors.text.tertiary, marginTop: '2px' }}>
                  {[
                    staminaInsight && `Stamina: ${staminaInsight.score}/100`,
                    calculatorDependency && `Calc: ${calculatorDependency.usagePercent}%`,
                    eliminationEffectiveness && `${eliminationEffectiveness.totalChanges} answer changes`,
                  ].filter(Boolean).join(' · ')}
                </div>
              )}
            </div>
            <span style={{ display: 'flex', alignItems: 'center', transition: `transform ${transitions.fast}`, transform: howYouTestOpen ? 'rotate(180deg)' : 'none' }}>
              <ChevronDownIcon size={14} color={colors.text.muted} />
            </span>
          </button>
          {howYouTestOpen && (
            <div style={{ padding: '0 16px 16px', borderTop: `1px solid ${colors.surface.gray}` }}>
              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(180px, 1fr))', gap: spacing.sm, marginTop: '12px' }}>
                {staminaInsight && (
                  <div style={{ padding: '12px', background: colors.surface.offWhite, borderRadius: radius.sm }}>
                    <div style={{ fontSize: typography.sizes.xs, fontWeight: typography.weights.semibold, color: colors.text.secondary, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '4px' }}>Stamina</div>
                    <div style={{ fontSize: typography.sizes.xl, fontWeight: typography.weights.bold, color: staminaInsight.score >= 70 ? colors.semantic.success : staminaInsight.score >= 50 ? colors.semantic.warning : colors.semantic.error }}>{staminaInsight.score}</div>
                    <div style={{ fontSize: typography.sizes.xs, color: colors.text.secondary, lineHeight: '1.3', marginTop: '4px' }}><MathText>{staminaInsight.message}</MathText></div>
                  </div>
                )}
                {calculatorDependency && (
                  <div style={{ padding: '12px', background: colors.surface.offWhite, borderRadius: radius.sm }}>
                    <div style={{ fontSize: typography.sizes.xs, fontWeight: typography.weights.semibold, color: colors.text.secondary, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '4px' }}>Calculator</div>
                    <div style={{ fontSize: typography.sizes.xl, fontWeight: typography.weights.bold, color: calculatorDependency.usagePercent > 60 ? colors.semantic.warning : colors.text.primary }}>{calculatorDependency.usagePercent}%</div>
                    <div style={{ fontSize: typography.sizes.xs, color: colors.text.secondary, lineHeight: '1.3', marginTop: '4px' }}><MathText>{calculatorDependency.insight}</MathText></div>
                  </div>
                )}
                {eliminationEffectiveness && (
                  <div style={{ padding: '12px', background: colors.surface.offWhite, borderRadius: radius.sm }}>
                    <div style={{ fontSize: typography.sizes.xs, fontWeight: typography.weights.semibold, color: colors.text.secondary, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '4px' }}>Answer Changes</div>
                    <div style={{ fontSize: typography.sizes.xl, fontWeight: typography.weights.bold, color: eliminationEffectiveness.changedToCorrect >= eliminationEffectiveness.changedToWrong ? colors.semantic.success : colors.semantic.error }}>{eliminationEffectiveness.totalChanges}</div>
                    <div style={{ fontSize: typography.sizes.xs, color: colors.text.secondary, lineHeight: '1.3', marginTop: '4px' }}>{eliminationEffectiveness.changedToCorrect} correct, {eliminationEffectiveness.changedToWrong} wrong</div>
                  </div>
                )}
                {persistentWeaknesses?.length > 0 && (
                  <div style={{ padding: '12px', background: colors.surface.offWhite, borderRadius: radius.sm }}>
                    <div style={{ fontSize: typography.sizes.xs, fontWeight: typography.weights.semibold, color: colors.semantic.error, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '4px' }}>Persistent Gaps</div>
                    {persistentWeaknesses.slice(0, 3).map((pw, i) => (
                      <div key={i} style={{ fontSize: typography.sizes.xs, color: colors.text.primary, marginTop: '2px' }}>
                        {pw.skill} <span style={{ color: colors.semantic.error }}>({pw.testsWeak} tests)</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </DataCard>
      )}

      {/* Plan Version History */}
      {studyPlanHistory?.length > 1 && (
        <DataCard style={{ padding: '14px 16px' }}>
          <div style={{
            fontSize: typography.sizes.xs, fontWeight: typography.weights.semibold,
            color: colors.text.secondary, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '10px',
          }}>
            Plan History ({studyPlanHistory.length} versions)
          </div>
          <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '4px' }}>
            {studyPlanHistory.map((entry, i) => {
              const isActive = i === 0;
              const dateLabel = entry.generatedAt
                ? new Date(entry.generatedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
                : `v${studyPlanHistory.length - i}`;
              return (
                <button
                  key={entry.id || i}
                  onClick={() => !isActive && onSelectPlanVersion?.(entry.id)}
                  style={{
                    padding: '8px 14px', borderRadius: radius.sm, border: 'none',
                    background: isActive ? colors.accent.orange : colors.surface.offWhite,
                    color: isActive ? '#fff' : colors.text.primary,
                    fontSize: typography.sizes.xs, fontWeight: typography.weights.medium,
                    cursor: isActive ? 'default' : 'pointer', flexShrink: 0,
                    opacity: isActive ? 1 : 0.85,
                    transition: `all ${transitions.fast}`,
                  }}
                >
                  <div style={{ fontWeight: typography.weights.semibold }}>{dateLabel}</div>
                  {entry.currentScore && (
                    <div style={{ fontSize: '10px', marginTop: '2px', opacity: 0.8 }}>{entry.currentScore} pts</div>
                  )}
                  {entry.deltaChanges > 0 && !isActive && (
                    <div style={{ fontSize: '10px', marginTop: '1px', color: isActive ? 'rgba(255,255,255,0.7)' : colors.text.muted }}>
                      {entry.deltaChanges} change{entry.deltaChanges !== 1 ? 's' : ''}
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </DataCard>
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
          <div style={{ fontSize: typography.sizes.xs, color: colors.text.secondary, marginBottom: '10px' }}>
            {adaptiveOverlay.reprioritisationSummary}
          </div>

          {/* Score trajectory mini-chart */}
          {adaptiveOverlay.scoreTrajectory?.length > 1 && (
            <div style={{
              display: 'flex', alignItems: 'flex-end', gap: '4px', marginBottom: '12px',
              padding: '8px 10px', background: 'rgba(255,255,255,0.6)', borderRadius: radius.sm,
            }}>
              <span style={{ fontSize: '10px', color: colors.text.muted, marginRight: '4px', alignSelf: 'center' }}>Scores:</span>
              {adaptiveOverlay.scoreTrajectory.map((s, i) => {
                const maxScore = Math.max(...adaptiveOverlay.scoreTrajectory.map(x => x.scaledScore || 0));
                const minScore = Math.min(...adaptiveOverlay.scoreTrajectory.map(x => x.scaledScore || 0));
                const range = Math.max(maxScore - minScore, 20);
                const height = 8 + ((s.scaledScore - minScore) / range) * 24;
                const isLast = i === adaptiveOverlay.scoreTrajectory.length - 1;
                return (
                  <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px' }}>
                    <div style={{
                      width: '16px', height: `${height}px`, borderRadius: '3px',
                      background: isLast ? colors.accent.orange : colors.surface.grayMedium,
                    }} />
                    <span style={{ fontSize: '9px', color: isLast ? colors.accent.orange : colors.text.muted, fontWeight: isLast ? typography.weights.bold : 'normal' }}>
                      {s.scaledScore}
                    </span>
                  </div>
                );
              })}
            </div>
          )}

          {/* Persistent weaknesses callout */}
          {adaptiveOverlay.persistentWeaknesses?.length > 0 && (
            <div style={{
              padding: '8px 10px', marginBottom: '10px', borderRadius: radius.sm,
              background: 'rgba(220, 38, 38, 0.05)', border: '1px solid rgba(220, 38, 38, 0.1)',
            }}>
              <div style={{ fontSize: '10px', fontWeight: typography.weights.semibold, color: '#dc2626', textTransform: 'uppercase', marginBottom: '4px' }}>
                Persistent Weaknesses (across tests)
              </div>
              {adaptiveOverlay.persistentWeaknesses.slice(0, 3).map((pw, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: typography.sizes.xs, color: colors.text.primary, marginTop: '3px' }}>
                  <span style={{ color: '#dc2626', fontSize: '8px' }}>●</span>
                  <span>{pw.skillId?.replace(/-/g, ' ')}</span>
                  <span style={{ color: colors.text.muted, marginLeft: 'auto', fontSize: '10px' }}>
                    {pw.accuracy}% · {pw.testCount} test{pw.testCount !== 1 ? 's' : ''} · {pw.trend}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Today's action items */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {adaptiveOverlay.today.slice(0, 5).map((action, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: typography.sizes.xs, color: colors.text.primary }}>
                <span style={{
                  width: '6px', height: '6px', borderRadius: '50%',
                  background: action.type === 'review' ? colors.accent.orange
                    : action.type === 'recovery' ? '#dc2626'
                    : action.type === 'deep_review' ? '#b45309'
                    : colors.semantic.success,
                  flexShrink: 0,
                }} />
                <span style={{ flex: 1 }}>{action.label}</span>
                {action.isPersistent && (
                  <span style={{ fontSize: '9px', color: '#dc2626', background: 'rgba(220,38,38,0.08)', padding: '1px 4px', borderRadius: '3px' }}>persistent</span>
                )}
                <span style={{ color: colors.text.tertiary, fontSize: '11px' }}>~{action.minutes} min</span>
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
                        Goal: <MathText>{week.goalDescription}</MathText>
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
                                <MathText>{activity.title}</MathText>
                              </div>
                              {activity.subtitle && (
                                <div style={{ fontSize: typography.sizes.xs, color: colors.text.muted, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                  <MathText>{activity.subtitle}</MathText>
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
