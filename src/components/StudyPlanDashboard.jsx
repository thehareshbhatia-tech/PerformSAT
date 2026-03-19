import React, { useState, useMemo } from 'react';
import { colors, typography, spacing, radius, transitions, breakpoints } from '../design/tokens';
import { MathText } from './MathText';
import { DataCard } from './ui/DataCard';
import { PrimaryButton } from './ui/Button';
import { reprioritizePlan } from '../services/adaptivePlanService';
import { getQuestionById } from '../data/questions/bank';
import { resolveAssignedQuestions, normalizeDomain, CANONICAL_DOMAINS } from '../services/practiceAssignmentService';
import ImmersiveStudyPlanView from './ImmersiveStudyPlanView';
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

// ---------------------------------------------------------------------------
// Shared helpers
// ---------------------------------------------------------------------------

const TYPE_META = {
  lesson:   { label: 'Lesson',   bg: colors.semantic.infoLight,    fg: colors.semantic.info },
  practice: { label: 'Practice', bg: colors.semantic.successLight, fg: colors.semantic.success },
  strategy: { label: 'Strategy', bg: colors.semantic.warningLight, fg: colors.semantic.warning },
  review:   { label: 'Review',   bg: colors.semantic.warningBg,    fg: colors.badge.bronze },
  test:     { label: 'Test',     bg: colors.accent.orangeLight,    fg: colors.accent.orange },
};

function activityIcon(activity) {
  if (activity.type === 'lesson') {
    return activity.activityType === 'watchLesson'
      ? <VideoCameraIcon size={16} color={colors.semantic.info} />
      : <BookOpenIcon size={16} color={colors.semantic.info} />;
  }
  if (activity.type === 'practice') return <PencilIcon size={16} color={colors.semantic.success} />;
  if (activity.type === 'strategy') return <BrainIcon size={16} color={colors.semantic.warning} />;
  if (activity.type === 'review')   return <SearchIcon size={16} color={colors.badge.bronze} />;
  if (activity.type === 'test')     return <DocumentIcon size={16} color={colors.accent.orange} />;
  return <PinIcon size={16} color={colors.text.secondary} />;
}

// ---------------------------------------------------------------------------
// Tiny presentational components
// ---------------------------------------------------------------------------

function StatBox({ value, label }) {
  return (
    <div style={{
      flex: 1, textAlign: 'center', padding: '10px 6px',
      background: 'rgba(255,255,255,0.06)',
    }}>
      <div style={{ fontSize: typography.sizes.lg, fontWeight: typography.weights.bold, color: 'inherit' }}>{value}</div>
      <div style={{ fontSize: '10px', opacity: 0.6, marginTop: '2px' }}>{label}</div>
    </div>
  );
}

function CollapsibleSection({ title, summary, defaultOpen = false, children }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div style={{
      border: `1px solid ${colors.surface.grayDark}`, borderRadius: radius.md,
      overflow: 'hidden', background: colors.surface.white,
    }}>
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          padding: '12px 16px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left',
        }}
      >
        <div>
          <div style={{ fontSize: typography.sizes.sm, fontWeight: typography.weights.semibold, color: colors.text.primary }}>{title}</div>
          {!open && summary && (
            <div style={{ fontSize: typography.sizes.xs, color: colors.text.tertiary, marginTop: '2px' }}>{summary}</div>
          )}
        </div>
        <span style={{ display: 'flex', alignItems: 'center', transition: `transform ${transitions.fast}`, transform: open ? 'rotate(180deg)' : 'none' }}>
          <ChevronDownIcon size={14} color={colors.text.muted} />
        </span>
      </button>
      {open && (
        <div style={{ padding: '0 16px 14px', borderTop: `1px solid ${colors.surface.gray}` }}>
          <div style={{ marginTop: '12px' }}>{children}</div>
        </div>
      )}
    </div>
  );
}

function Badge({ text, bg, fg }) {
  return (
    <span style={{
      fontSize: typography.sizes.caption, fontWeight: typography.weights.semibold,
      color: fg, background: bg, padding: '2px 8px', borderRadius: radius.full,
      flexShrink: 0, lineHeight: '1.4',
    }}>
      {text}
    </span>
  );
}

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------

const StudyPlanDashboard = ({
  variant = 'default',
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

  const adaptivePoolSize = studyPlan?.adaptivePractice?.poolIds?.length || 0;
  const hasAdaptivePool = adaptivePoolSize > 0;

  const adaptiveState = studyPlan?.adaptivePracticeState || null;
  const adaptiveAnswered = adaptiveState?.answered?.length || 0;
  const adaptiveTarget = adaptiveState?.targetQuestions || studyPlan?.adaptivePractice?.targetQuestions || 15;
  const adaptiveMastery = adaptiveAnswered > 0 ? Math.round(((adaptiveState?.correct || 0) / adaptiveAnswered) * 100) : 0;
  const adaptiveIsCompleted = adaptiveState?.isCompleted || false;
  const adaptiveHasProgress = adaptiveAnswered > 0 && !adaptiveIsCompleted;

  const { targetedQuestions, staleCount } = useMemo(() => {
    if (hasAdaptivePool) return { targetedQuestions: [], staleCount: 0 };
    const ids = studyPlan?.targetedQuestionIds || [];
    if (ids.length === 0) return { targetedQuestions: [], staleCount: 0 };
    const resolved = ids.map(id => getQuestionById(id)).filter(Boolean);
    return { targetedQuestions: resolved, staleCount: ids.length - resolved.length };
  }, [studyPlan?.targetedQuestionIds, hasAdaptivePool]);

  const adaptiveOverlay = useMemo(() => {
    if (!studyPlan?.weeks?.length) return null;
    try {
      const adapted = reprioritizePlan(
        studyPlan,
        skillProgress || {},
        practiceTestResults,
        reviewQueue,
        user?.testDate,
      );
      return adapted?.adaptiveOverlay || null;
    } catch (err) {
      console.error('[StudyPlanDashboard] reprioritizePlan crashed — rendering plan without adaptive overlay:', err);
      return null;
    }
  }, [studyPlan, skillProgress, practiceTestResults, reviewQueue, user?.testDate]);

  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);
  React.useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const isMobile = windowWidth < breakpoints.tablet;

  // ── Empty state ──────────────────────────────────────────────────────
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

  // ── Derived data ────────────────────────────────────────────────────
  const { weeks, summary, strengths, weaknesses, deltaFromPrevious, persistentWeaknessStrategy, calculatorDependency, eliminationEffectiveness, persistentWeaknesses, staminaInsight } = studyPlan;

  const totalActivities = weeks.reduce((s, w) => s + (w.activities?.length || 0), 0);
  const completedActivities = weeks.reduce((s, w) => s + (w.activities?.filter(a => a.completed).length || 0), 0);
  const progressPercent = totalActivities > 0 ? Math.round((completedActivities / totalActivities) * 100) : 0;

  const currentWeekIndex = weeks.findIndex(w => w.activities?.some(a => !a.completed));
  const displayCurrentWeek = currentWeekIndex >= 0 ? currentWeekIndex : weeks.length - 1;
  const activeExpanded = expandedWeek !== null ? expandedWeek : displayCurrentWeek;

  const nextAction = studyPlan.nextAction || (() => {
    const cw = weeks[displayCurrentWeek];
    const next = cw?.activities?.find(a => !a.completed);
    if (!next) return null;
    return { title: next.title, reason: next.subtitle || '', type: next.type, duration: next.duration, moduleId: next.moduleId || null, lessonId: next.lessonId || null, sectionName: next.sectionName || null };
  })();

  const hasHowYouTestData = calculatorDependency || eliminationEffectiveness || staminaInsight || persistentWeaknesses?.length > 0;
  const hasDelta = deltaFromPrevious || adaptiveOverlay?.focusSkills?.some(s => s.delta !== 'stagnant');
  const hasInsights = hasHowYouTestData || hasDelta || (strengths?.length > 0 || weaknesses?.length > 0) || targetedQuestions.length > 0 || adaptiveOverlay?.today?.length > 0 || studyPlanHistory?.length > 1;

  // ── Handlers ────────────────────────────────────────────────────────
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

  // ====================================================================
  // RENDER
  // ====================================================================

  if (variant === 'immersive') {
    return (
      <ImmersiveStudyPlanView
        studyPlan={studyPlan}
        targetedQuestions={targetedQuestions}
        adaptiveOverlay={adaptiveOverlay}
        isMobile={isMobile}
        progressPercent={progressPercent}
        completedActivities={completedActivities}
        totalActivities={totalActivities}
        weeks={weeks}
        displayCurrentWeek={displayCurrentWeek}
        activeExpanded={activeExpanded}
        expandedWeek={expandedWeek}
        setExpandedWeek={setExpandedWeek}
        nextAction={nextAction}
        handleActivityClick={handleActivityClick}
        handleToggleComplete={handleToggleComplete}
        hasHowYouTestData={hasHowYouTestData}
        hasDelta={hasDelta}
        hasInsights={hasInsights}
        studyPlanHistory={studyPlanHistory}
        onSelectPlanVersion={onSelectPlanVersion}
        onStartPractice={onStartPractice}
      />
    );
  }

  return (
    <div style={{ padding: `${spacing.lg} 0`, display: 'flex', flexDirection: 'column', gap: spacing.md }}>

      {/* ── 1. HERO SUMMARY ──────────────────────────────────────────── */}
      <div style={{
        background: colors.surface.dark, color: 'white', borderRadius: radius.lg,
        padding: isMobile ? '20px 16px' : '24px',
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '14px' }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: '11px', fontWeight: typography.weights.semibold, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '6px' }}>
              {weeks.length}-Week Study Plan
            </div>
            <div style={{ fontSize: isMobile ? typography.sizes.base : typography.sizes.lg, fontWeight: typography.weights.bold, lineHeight: '1.3' }}>
              <MathText>{summary?.headline || 'Your Personalized Plan'}</MathText>
            </div>
            {summary?.diagnosis && (
              <p style={{ fontSize: typography.sizes.sm, color: 'rgba(255,255,255,0.7)', marginTop: '6px', lineHeight: '1.5', maxWidth: '520px' }}>
                <MathText>{summary.diagnosis}</MathText>
              </p>
            )}
          </div>
          <div style={{ textAlign: 'right', minWidth: '60px', flexShrink: 0, marginLeft: '12px' }}>
            <div style={{ fontSize: typography.sizes.xl, fontWeight: typography.weights.bold, color: colors.accent.orange }}>{progressPercent}%</div>
            <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.5)' }}>{completedActivities}/{totalActivities}</div>
          </div>
        </div>

        {/* Progress bar */}
        <div role="progressbar" aria-valuenow={progressPercent} aria-valuemin={0} aria-valuemax={100}
          style={{ height: '4px', background: 'rgba(255,255,255,0.12)', borderRadius: radius.sm, marginBottom: '14px', overflow: 'hidden' }}
        >
          <div style={{
            height: '100%', width: `${progressPercent}%`, borderRadius: radius.sm,
            background: progressPercent >= 75 ? colors.semantic.success : colors.accent.orange,
            transition: `width ${transitions.slow}`,
          }} />
        </div>

        {/* Stat boxes */}
        {summary?.stats && (
          <div style={{ display: 'flex', gap: '1px', background: 'rgba(255,255,255,0.08)', borderRadius: radius.sm, overflow: 'hidden' }}>
            {summary.stats.weeksInPlan && <StatBox value={summary.stats.weeksInPlan} label="Weeks" />}
            {summary.stats.totalLessons > 0 && <StatBox value={summary.stats.totalLessons} label="Lessons" />}
            {summary.stats.totalPractice > 0 && <StatBox value={summary.stats.totalPractice} label="Practice" />}
            {summary.stats.minutesPerDay && <StatBox value={`${summary.stats.minutesPerDay}m`} label="Per Day" />}
          </div>
        )}
      </div>

      {/* ── 2. DO THIS NOW ───────────────────────────────────────────── */}
      {nextAction && (
        <div
          onClick={() => handleActivityClick(nextAction)}
          style={{
            background: `linear-gradient(135deg, ${colors.accent.orange} 0%, ${colors.accent.orangeHover} 100%)`,
            borderRadius: radius.lg, padding: isMobile ? '16px' : '20px 24px',
            cursor: 'pointer', color: '#fff',
          }}
        >
          <div style={{ fontSize: '10px', fontWeight: typography.weights.bold, color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '6px' }}>
            Do This Now
          </div>
          <div style={{ fontSize: typography.sizes.base, fontWeight: typography.weights.bold, marginBottom: '4px' }}>
            <MathText>{nextAction.title}</MathText>
          </div>
          {(nextAction.reason || nextAction.subtitle) && (
            <div style={{ fontSize: typography.sizes.sm, color: 'rgba(255,255,255,0.85)', lineHeight: '1.4' }}>
              <MathText>{nextAction.reason || nextAction.subtitle}</MathText>
            </div>
          )}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '10px' }}>
            {nextAction.duration && (
              <span style={{ fontSize: '11px', background: 'rgba(255,255,255,0.2)', padding: '3px 10px', borderRadius: radius.sm }}>
                ~{nextAction.duration} min
              </span>
            )}
            <span style={{ fontSize: typography.sizes.xs, fontWeight: typography.weights.semibold, display: 'flex', alignItems: 'center', gap: '4px' }}>
              Start now &rarr;
            </span>
          </div>
        </div>
      )}

      {/* ── 3. WEEKLY PLAN ───────────────────────────────────────────── */}
      <div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.xs }}>
          {weeks.map((week, weekIdx) => {
            const isExpanded = activeExpanded === weekIdx;
            const done = (week.activities || []).filter(a => a.completed).length;
            const total = (week.activities || []).length;
            const pct = total > 0 ? Math.round((done / total) * 100) : 0;
            const isCurrent = weekIdx === displayCurrentWeek;

            return (
              <div key={weekIdx} style={{
                border: isCurrent ? `2px solid ${colors.accent.orange}` : `1px solid ${colors.surface.grayDark}`,
                borderRadius: radius.md, overflow: 'hidden', background: colors.surface.white,
              }}>
                <button
                  onClick={() => setExpandedWeek(isExpanded ? null : weekIdx)}
                  aria-expanded={isExpanded}
                  style={{
                    width: '100%', padding: '12px 16px',
                    background: isCurrent ? colors.accent.orangeLight : pct === 100 ? colors.semantic.successLight : colors.surface.offWhite,
                    border: 'none', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', textAlign: 'left',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flex: 1, minWidth: 0 }}>
                    <div style={{
                      width: '26px', height: '26px', borderRadius: radius.full,
                      background: pct === 100 ? colors.semantic.success : isCurrent ? colors.accent.orange : colors.surface.grayMedium,
                      color: colors.text.inverse, display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: typography.sizes.xs, fontWeight: typography.weights.bold, flexShrink: 0,
                    }}>
                      {pct === 100 ? <CheckIcon size={12} color={colors.text.inverse} /> : week.weekNumber}
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{
                        fontSize: typography.sizes.sm, fontWeight: typography.weights.semibold, color: colors.text.primary,
                        whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
                      }}>
                        {week.title || `Week ${week.weekNumber}`}
                        {isCurrent && (
                          <span style={{
                            marginLeft: spacing.xs, fontSize: '10px', fontWeight: typography.weights.medium,
                            color: colors.accent.orange, background: colors.accent.orangeLight,
                            padding: '2px 6px', borderRadius: radius.sm,
                          }}>Current</span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
                    <span style={{ fontSize: typography.sizes.xs, color: colors.text.secondary }}>
                      {done}/{total}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', transition: `transform ${transitions.fast}`, transform: isExpanded ? 'rotate(180deg)' : 'none' }}>
                      <ChevronDownIcon size={14} color={colors.text.muted} />
                    </span>
                  </div>
                </button>

                {isExpanded && (
                  <div style={{ padding: `${spacing.xs} ${spacing.md} ${spacing.md}` }}>
                    {(week.rationale || week.goalDescription) && (
                      <div style={{
                        fontSize: typography.sizes.xs, color: colors.text.tertiary,
                        padding: `6px 0`, marginBottom: spacing.xs,
                        borderBottom: `1px solid ${colors.surface.gray}`,
                      }}>
                        <MathText>{week.rationale || week.goalDescription}</MathText>
                      </div>
                    )}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      {(week.activities || []).map((activity, actIdx) => {
                        const done = activity.completed;
                        const meta = TYPE_META[activity.type] || { label: 'Activity', bg: colors.surface.gray, fg: colors.text.secondary };

                        return (
                          <div
                            key={actIdx}
                            onClick={() => handleActivityClick(activity)}
                            style={{
                              display: 'flex', alignItems: 'center', gap: '10px',
                              padding: '10px 12px', borderRadius: radius.sm,
                              background: done ? colors.surface.offWhite : colors.surface.white,
                              border: `1px solid ${colors.surface.gray}`, cursor: 'pointer',
                              opacity: done ? 0.65 : 1, transition: `opacity ${transitions.fast}`, minWidth: 0,
                            }}
                          >
                            {/* Checkbox */}
                            <button
                              onClick={(e) => handleToggleComplete(e, weekIdx, actIdx, done)}
                              role="checkbox"
                              aria-checked={done}
                              style={{
                                width: '20px', height: '20px', borderRadius: '5px',
                                border: done ? 'none' : `2px solid ${colors.surface.grayMedium}`,
                                background: done ? colors.semantic.success : colors.surface.white,
                                color: colors.text.inverse, cursor: 'pointer',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                flexShrink: 0, padding: 0,
                              }}
                            >
                              {done && <CheckIcon size={11} color={colors.text.inverse} />}
                            </button>

                            {/* Icon */}
                            <span style={{ flexShrink: 0, display: 'flex' }}>{activityIcon(activity)}</span>

                            {/* Title + subtitle */}
                            <div style={{ flex: 1, minWidth: 0 }}>
                              <div style={{
                                fontSize: typography.sizes.sm, fontWeight: typography.weights.medium,
                                color: done ? colors.text.muted : colors.text.primary,
                                textDecoration: done ? 'line-through' : 'none',
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

                            {/* Type pill */}
                            <Badge text={meta.label} bg={meta.bg} fg={meta.fg} />

                            {/* Duration */}
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

      {/* ── 4. INSIGHTS (collapsed by default) ──────────────────────── */}
      {hasInsights && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.xs }}>
          <div style={{ fontSize: typography.sizes.xs, fontWeight: typography.weights.semibold, color: colors.text.muted, textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: spacing.xs }}>
            Insights
          </div>

          {/* Strengths & Focus Areas with per-domain assigned practice */}
          {(strengths?.length > 0 || weaknesses?.length > 0) && (() => {
            const DOMAIN_LABELS = { algebra: 'Algebra', 'problem-solving': 'Problem Solving', 'advanced-math': 'Advanced Math', geometry: 'Geometry' };
            const groupByDomain = (items) => {
              const map = {};
              (items || []).forEach(item => {
                const d = normalizeDomain(item.domain) || 'other';
                if (!map[d]) map[d] = [];
                map[d].push(item);
              });
              return map;
            };
            const weakByDomain = groupByDomain(weaknesses);
            const strongByDomain = groupByDomain(strengths);

            const domainAssign = studyPlan?.domainAssignments || {};

            const domainsFromAssign = Object.keys(domainAssign);
            const domainsFromItems = [...new Set([...Object.keys(weakByDomain), ...Object.keys(strongByDomain)])].filter(d => d !== 'other');
            const allDomains = [...new Set([...domainsFromAssign, ...domainsFromItems])];
            if (allDomains.length === 0) {
              CANONICAL_DOMAINS.forEach(d => allDomains.push(d));
            }

            return (
            <CollapsibleSection
              title="Strengths & Focus Areas"
              summary={[
                weaknesses?.length > 0 && `${weaknesses.length} area${weaknesses.length !== 1 ? 's' : ''} to improve`,
                strengths?.length > 0 && `${strengths.length} strength${strengths.length !== 1 ? 's' : ''}`,
              ].filter(Boolean).join(' · ')}
              defaultOpen={true}
            >
              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: spacing.sm }}>
                {weaknesses?.length > 0 && (
                  <div>
                    <div style={{ fontSize: typography.sizes.xs, fontWeight: typography.weights.semibold, color: colors.semantic.error, marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: colors.semantic.error }} /> Focus Areas
                    </div>
                    {weaknesses.slice(0, 4).map((w, i) => (
                      <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                        <span style={{ fontSize: typography.sizes.sm, color: colors.text.primary, flex: 1, minWidth: 0, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                          <MathText>{w.skill}</MathText>
                        </span>
                        <Badge
                          text={`${w.accuracy}%`}
                          bg={w.accuracy < 30 ? colors.semantic.errorLight : colors.semantic.warningBg}
                          fg={w.accuracy < 30 ? colors.semantic.error : colors.semantic.warning}
                        />
                      </div>
                    ))}
                  </div>
                )}
                {strengths?.length > 0 && (
                  <div>
                    <div style={{ fontSize: typography.sizes.xs, fontWeight: typography.weights.semibold, color: colors.semantic.success, marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: colors.semantic.success }} /> Strengths
                    </div>
                    {strengths.slice(0, 4).map((s, i) => (
                      <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                        <span style={{ fontSize: typography.sizes.sm, color: colors.text.primary, flex: 1, minWidth: 0, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                          {s.skill}
                        </span>
                        <Badge text={`${s.accuracy}%`} bg={colors.semantic.successLight} fg={colors.semantic.success} />
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Per-domain fixed assigned practice */}
              {allDomains.length > 0 && (
                <div style={{ marginTop: spacing.sm, paddingTop: spacing.sm, borderTop: `1px solid ${colors.surface.grayDark}` }}>
                  <div style={{ fontSize: typography.sizes.xs, fontWeight: typography.weights.semibold, color: colors.text.muted, marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Assigned Practice by Domain
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {allDomains.map(domain => {
                      const label = DOMAIN_LABELS[domain] || domain;
                      const isWeak = !!weakByDomain[domain];
                      const assignment = domainAssign[domain];
                      const qIds = assignment?.questionIds || [];
                      const previewQs = qIds.slice(0, 3).map(id => getQuestionById(id)).filter(Boolean);
                      const totalAssigned = qIds.length;

                      return (
                        <div key={domain} style={{
                          border: `1px solid ${isWeak ? 'rgba(239,68,68,0.25)' : 'rgba(34,197,94,0.25)'}`,
                          borderRadius: radius.sm, overflow: 'hidden',
                          background: isWeak ? 'rgba(239,68,68,0.03)' : 'rgba(34,197,94,0.03)',
                        }}>
                          <div style={{ padding: '10px 12px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: previewQs.length > 0 ? '8px' : '0' }}>
                              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <span style={{
                                  width: '7px', height: '7px', borderRadius: '50%',
                                  background: isWeak ? colors.semantic.error : colors.semantic.success,
                                  flexShrink: 0,
                                }} />
                                <span style={{ fontSize: typography.sizes.sm, fontWeight: typography.weights.bold, color: colors.text.primary }}>
                                  {label}
                                </span>
                                <span style={{ fontSize: '11px', color: colors.text.muted }}>
                                  {totalAssigned} question{totalAssigned !== 1 ? 's' : ''} assigned
                                </span>
                              </div>
                              {onStartPractice && totalAssigned > 0 && (
                                <button
                                  onClick={() => onStartPractice(null, null, {
                                    questionIds: qIds,
                                    source: 'study-plan-assigned',
                                    label: `${label} Assigned Practice`,
                                  })}
                                  style={{
                                    padding: '5px 12px', borderRadius: radius.sm,
                                    border: `1px solid ${isWeak ? colors.semantic.error : colors.semantic.success}`,
                                    background: isWeak ? colors.semantic.error : colors.semantic.success,
                                    color: '#fff',
                                    fontSize: '11px', fontWeight: typography.weights.bold,
                                    cursor: 'pointer', transition: `opacity ${transitions.fast}`,
                                    flexShrink: 0,
                                  }}
                                  onMouseEnter={e => { e.currentTarget.style.opacity = '0.85'; }}
                                  onMouseLeave={e => { e.currentTarget.style.opacity = '1'; }}
                                >
                                  Practice {label}
                                </button>
                              )}
                            </div>

                            {/* Question previews from assigned IDs */}
                            {previewQs.length > 0 && (
                              <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                                {previewQs.map((q, qi) => (
                                  <div key={q.id} style={{
                                    display: 'flex', alignItems: 'center', gap: '6px',
                                    padding: '4px 8px', borderRadius: '4px',
                                    background: 'rgba(255,255,255,0.7)', fontSize: typography.sizes.xs,
                                  }}>
                                    <span style={{ fontWeight: typography.weights.bold, color: colors.text.muted, minWidth: '16px' }}>{qi + 1}</span>
                                    <span style={{
                                      fontWeight: typography.weights.medium, padding: '1px 5px', borderRadius: '3px',
                                      background: q.difficulty === 'hard' ? colors.semantic.error : q.difficulty === 'medium' ? colors.semantic.warning : colors.semantic.success,
                                      color: '#fff', fontSize: '10px',
                                    }}>
                                      {q.difficulty}
                                    </span>
                                    <span style={{ flex: 1, color: colors.text.secondary, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                      <MathText>{q.question?.length > 60 ? q.question.slice(0, 60) + '...' : (q.question || q.stem || '')}</MathText>
                                    </span>
                                  </div>
                                ))}
                                {totalAssigned > previewQs.length && (
                                  <div style={{ fontSize: '11px', color: colors.text.muted, paddingLeft: '8px', marginTop: '2px' }}>
                                    + {totalAssigned - previewQs.length} more questions
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </CollapsibleSection>
            );
          })()}

          {/* Delta from previous plan */}
          {hasDelta && (
            <CollapsibleSection
              title="What Changed"
              summary={adaptiveOverlay?.focusSkills?.filter(s => s.delta === 'improved').length > 0
                ? `${adaptiveOverlay.focusSkills.filter(s => s.delta === 'improved').length} skill${adaptiveOverlay.focusSkills.filter(s => s.delta === 'improved').length !== 1 ? 's' : ''} improved`
                : 'See skill changes'}
            >
              {deltaFromPrevious && (
                <div style={{ fontSize: typography.sizes.sm, color: colors.text.primary, lineHeight: '1.5', marginBottom: '8px' }}>
                  {deltaFromPrevious}
                </div>
              )}
              {adaptiveOverlay?.focusSkills?.filter(s => s.delta === 'improved' || s.delta === 'declined').length > 0 && (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {adaptiveOverlay.focusSkills
                    .filter(s => s.delta === 'improved' || s.delta === 'declined')
                    .slice(0, 6)
                    .map((skill, i) => (
                      <span key={i} style={{
                        display: 'inline-flex', alignItems: 'center', gap: '3px',
                        fontSize: '11px', padding: '3px 8px', borderRadius: radius.sm,
                        background: skill.delta === 'improved' ? colors.semantic.successLight : colors.semantic.errorLight,
                        color: skill.delta === 'improved' ? colors.semantic.success : colors.semantic.error,
                      }}>
                        {skill.delta === 'improved' ? '\u2191' : '\u2193'} {skill.skillName}
                        {skill.currentAccuracy !== null && <span style={{ opacity: 0.7 }}>({skill.currentAccuracy}%)</span>}
                      </span>
                    ))}
                </div>
              )}
            </CollapsibleSection>
          )}

          {/* Adaptive Practice (Acely-style) */}
          {hasAdaptivePool && (
            <div style={{
              border: adaptiveIsCompleted
                ? `2px solid ${colors.semantic.success}`
                : `1px solid ${colors.surface.grayDark}`,
              borderRadius: radius.md,
              overflow: 'hidden', background: colors.surface.white,
            }}>
              <div style={{ padding: '16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                  <div style={{ fontSize: typography.sizes.sm, fontWeight: typography.weights.bold, color: colors.text.primary }}>
                    Adaptive Practice
                  </div>
                  {adaptiveIsCompleted && (
                    <span style={{ fontSize: '11px', fontWeight: typography.weights.bold, color: colors.semantic.success, background: colors.semantic.successLight, padding: '3px 10px', borderRadius: radius.sm }}>
                      Completed
                    </span>
                  )}
                </div>
                <div style={{ fontSize: typography.sizes.xs, color: colors.text.secondary, marginBottom: '12px', lineHeight: '1.4' }}>
                  {adaptiveIsCompleted
                    ? `You answered ${adaptiveAnswered} questions with ${adaptiveMastery}% mastery.`
                    : 'Questions adapt to your level after each answer. Difficulty adjusts as you go, and missed questions come back for review.'}
                </div>

                {/* Progress indicators */}
                {adaptiveAnswered > 0 && (
                  <div style={{ marginBottom: '12px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: colors.text.muted, marginBottom: '4px' }}>
                      <span>{adaptiveAnswered}/{adaptiveTarget} questions</span>
                      <span>{adaptiveMastery}% mastery {adaptiveMastery >= (adaptiveState?.minMasteryPercent || 80) ? '(met)' : `(need ${adaptiveState?.minMasteryPercent || 80}%)`}</span>
                    </div>
                    <div style={{ height: '4px', background: colors.surface.gray, borderRadius: radius.sm, overflow: 'hidden' }}>
                      <div style={{
                        height: '100%',
                        width: `${Math.min(100, Math.round((adaptiveAnswered / adaptiveTarget) * 100))}%`,
                        background: adaptiveIsCompleted ? colors.semantic.success : colors.accent.orange,
                        borderRadius: radius.sm,
                        transition: `width ${transitions.slow}`,
                      }} />
                    </div>
                  </div>
                )}

                <div style={{ display: 'flex', gap: '8px', marginBottom: '12px', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '11px', color: colors.text.muted, background: colors.surface.offWhite, padding: '3px 8px', borderRadius: radius.sm }}>
                    {adaptivePoolSize} questions in pool
                  </span>
                  {studyPlan?.adaptivePractice?.weakSkillIds?.length > 0 && (
                    <span style={{ fontSize: '11px', color: colors.accent.teal, background: 'rgba(0,180,160,0.08)', padding: '3px 8px', borderRadius: radius.sm }}>
                      Targeting {studyPlan.adaptivePractice.weakSkillIds.length} weak skill{studyPlan.adaptivePractice.weakSkillIds.length !== 1 ? 's' : ''}
                    </span>
                  )}
                </div>

                {!adaptiveIsCompleted && (
                  <button
                    onClick={() => {
                      if (onStartPractice) {
                        onStartPractice(null, null, {
                          source: 'study-plan-adaptive',
                          adaptive: true,
                        });
                      }
                    }}
                    style={{
                      width: '100%', padding: '14px 0',
                      borderRadius: radius.sm, border: 'none',
                      background: colors.accent.orange, color: '#fff',
                      fontSize: typography.sizes.sm, fontWeight: typography.weights.bold,
                      cursor: 'pointer', transition: `opacity ${transitions.fast}`,
                    }}
                    onMouseEnter={e => { e.currentTarget.style.opacity = '0.9'; }}
                    onMouseLeave={e => { e.currentTarget.style.opacity = '1'; }}
                  >
                    {adaptiveHasProgress ? 'Resume Adaptive Practice' : 'Start Adaptive Practice'}
                  </button>
                )}
              </div>
            </div>
          )}

          {/* Legacy Targeted Practice fallback */}
          {!hasAdaptivePool && targetedQuestions.length > 0 && (
            <CollapsibleSection
              title={`Targeted Practice (${targetedQuestions.length}${staleCount > 0 ? `, ${staleCount} unavailable` : ''})`}
              summary="Questions matched to your weak skills"
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                {targetedQuestions.slice(0, 10).map((q, i) => (
                  <QuestionRow key={q.id} q={q} index={i} />
                ))}
                {onStartPractice && (
                  <button
                    onClick={() => {
                      onStartPractice(null, null, {
                        questionIds: targetedQuestions.map(q => q.id),
                        source: 'study-plan-assigned',
                        label: 'Targeted Practice',
                      });
                    }}
                    style={{
                      marginTop: '8px', width: '100%', padding: '10px 0',
                      borderRadius: radius.sm, border: `1.5px solid ${colors.accent.orange}`,
                      background: '#fff', color: colors.accent.orange,
                      fontSize: typography.sizes.xs, fontWeight: typography.weights.bold,
                      cursor: 'pointer',
                    }}
                  >
                    Start Practice ({targetedQuestions.length} questions)
                  </button>
                )}
              </div>
            </CollapsibleSection>
          )}

          {/* How You Test */}
          {hasHowYouTestData && (
            <CollapsibleSection
              title="How You Test"
              summary={[
                staminaInsight && `Stamina ${staminaInsight.score}/100`,
                calculatorDependency && `Calc ${calculatorDependency.usagePercent}%`,
                eliminationEffectiveness && `${eliminationEffectiveness.totalChanges} answer changes`,
              ].filter(Boolean).join(' \u00B7 ')}
            >
              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(160px, 1fr))', gap: spacing.sm }}>
                {staminaInsight && (
                  <InsightTile
                    label="Stamina"
                    value={staminaInsight.score}
                    valueColor={staminaInsight.score >= 70 ? colors.semantic.success : staminaInsight.score >= 50 ? colors.semantic.warning : colors.semantic.error}
                    detail={staminaInsight.message}
                  />
                )}
                {calculatorDependency && (
                  <InsightTile
                    label="Calculator"
                    value={`${calculatorDependency.usagePercent}%`}
                    valueColor={calculatorDependency.usagePercent > 60 ? colors.semantic.warning : colors.text.primary}
                    detail={calculatorDependency.insight}
                  />
                )}
                {eliminationEffectiveness && (
                  <InsightTile
                    label="Answer Changes"
                    value={eliminationEffectiveness.totalChanges}
                    valueColor={eliminationEffectiveness.changedToCorrect >= eliminationEffectiveness.changedToWrong ? colors.semantic.success : colors.semantic.error}
                    detail={`${eliminationEffectiveness.changedToCorrect} correct, ${eliminationEffectiveness.changedToWrong} wrong`}
                  />
                )}
                {persistentWeaknesses?.length > 0 && (
                  <div style={{ padding: '12px', background: colors.surface.offWhite, borderRadius: radius.sm }}>
                    <div style={{ fontSize: '10px', fontWeight: typography.weights.semibold, color: colors.semantic.error, textTransform: 'uppercase', marginBottom: '6px' }}>Persistent Gaps</div>
                    {persistentWeaknesses.slice(0, 3).map((pw, i) => (
                      <div key={i} style={{ fontSize: typography.sizes.xs, color: colors.text.primary, marginTop: '3px' }}>
                        {pw.skill} <span style={{ color: colors.semantic.error }}>({pw.testsWeak} tests)</span>
                      </div>
                    ))}
                    {persistentWeaknessStrategy && (
                      <div style={{ fontSize: typography.sizes.xs, color: colors.text.secondary, marginTop: '8px', lineHeight: '1.45', fontStyle: 'italic' }}>
                        {persistentWeaknessStrategy}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </CollapsibleSection>
          )}

          {/* Today's Focus (adaptive) */}
          {adaptiveOverlay?.today?.length > 0 && (
            <CollapsibleSection
              title={adaptiveOverlay.isTriage ? `Triage Mode \u2014 ${adaptiveOverlay.daysUntilTest}d left` : "Today's Focus"}
              summary={`${adaptiveOverlay.today.length} action${adaptiveOverlay.today.length !== 1 ? 's' : ''} suggested`}
            >
              {adaptiveOverlay.reprioritisationSummary && (
                <div style={{ fontSize: typography.sizes.xs, color: colors.text.secondary, marginBottom: '10px' }}>
                  {adaptiveOverlay.reprioritisationSummary}
                </div>
              )}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                {adaptiveOverlay.today.slice(0, 5).map((action, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: typography.sizes.xs, color: colors.text.primary }}>
                    <span style={{
                      width: '6px', height: '6px', borderRadius: '50%', flexShrink: 0,
                      background: action.type === 'review' ? colors.accent.orange
                        : action.type === 'recovery' ? colors.semantic.error
                        : action.type === 'deep_review' ? colors.semantic.warning
                        : colors.semantic.success,
                    }} />
                    <span style={{ flex: 1 }}>{action.label}</span>
                    {action.isPersistent && <Badge text="persistent" bg={colors.semantic.errorLight} fg={colors.semantic.error} />}
                    <span style={{ color: colors.text.tertiary, fontSize: '11px' }}>~{action.minutes}m</span>
                  </div>
                ))}
              </div>
            </CollapsibleSection>
          )}

          {/* Plan Version History */}
          {studyPlanHistory?.length > 1 && (
            <CollapsibleSection
              title={`Plan History (${studyPlanHistory.length})`}
              summary="Compare previous versions"
            >
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
                      {entry.currentScore && <div style={{ fontSize: '10px', marginTop: '2px', opacity: 0.8 }}>{entry.currentScore} pts</div>}
                    </button>
                  );
                })}
              </div>
            </CollapsibleSection>
          )}
        </div>
      )}
    </div>
  );
};

// ---------------------------------------------------------------------------
// Per-question row (shared between flat list and weekly view)
// ---------------------------------------------------------------------------
const DOMAIN_LABELS = { algebra: 'ALG', 'problem-solving': 'PS', 'advanced-math': 'AM', geometry: 'GEO' };

function QuestionRow({ q, index }) {
  const diffColor = q.difficulty === 'hard' ? colors.semantic.error
    : q.difficulty === 'medium' ? colors.semantic.warning : colors.semantic.success;
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: '8px',
      padding: '6px 8px', borderRadius: radius.sm,
      background: colors.surface.offWhite, fontSize: typography.sizes.xs,
    }}>
      <span style={{ fontWeight: typography.weights.bold, color: colors.text.muted, minWidth: '18px' }}>{index + 1}</span>
      <span style={{ fontWeight: typography.weights.medium, padding: '1px 6px', borderRadius: '3px', background: diffColor, color: '#fff', fontSize: '10px' }}>
        {q.difficulty}
      </span>
      <span style={{ fontWeight: typography.weights.semibold, color: colors.accent.teal, fontSize: '10px' }}>
        {DOMAIN_LABELS[q.domain] || q.domain}
      </span>
      <span style={{ flex: 1, color: colors.text.secondary, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
        <MathText>{q.question.length > 70 ? q.question.slice(0, 70) + '...' : q.question}</MathText>
      </span>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Weekly assignment groups (structured practiceAssignments)
// ---------------------------------------------------------------------------
function WeeklyAssignmentView({ weekAssignments, isMobile, onStartWeekPractice }) {
  const [openWeek, setOpenWeek] = useState(null);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      {weekAssignments.map((wa) => {
        const isOpen = openWeek === wa.weekNumber;
        const questions = (wa.questionIds || []).map(id => getQuestionById(id)).filter(Boolean);
        const diff = wa.difficultyBreakdown || {};
        return (
          <div key={wa.weekNumber} style={{
            border: `1px solid ${colors.surface.gray}`, borderRadius: radius.sm, overflow: 'hidden',
          }}>
            <button
              onClick={() => setOpenWeek(isOpen ? null : wa.weekNumber)}
              style={{
                width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '8px 12px', background: colors.surface.offWhite, border: 'none', cursor: 'pointer', textAlign: 'left',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{
                  fontSize: typography.sizes.xs, fontWeight: typography.weights.bold, color: colors.accent.orange,
                  background: colors.accent.orangeLight, padding: '2px 8px', borderRadius: radius.sm,
                }}>
                  Wk {wa.weekNumber}
                </span>
                <span style={{ fontSize: typography.sizes.xs, color: colors.text.secondary }}>
                  {wa.count} question{wa.count !== 1 ? 's' : ''}
                </span>
                {Object.entries(wa.domainBreakdown || {}).map(([d, n]) => (
                  <span key={d} style={{ fontSize: '10px', color: colors.text.muted }}>
                    {DOMAIN_LABELS[d] || d}:{n}
                  </span>
                ))}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                {diff.easy > 0 && <span style={{ fontSize: '10px', color: colors.semantic.success }}>E:{diff.easy}</span>}
                {diff.medium > 0 && <span style={{ fontSize: '10px', color: colors.semantic.warning }}>M:{diff.medium}</span>}
                {diff.hard > 0 && <span style={{ fontSize: '10px', color: colors.semantic.error }}>H:{diff.hard}</span>}
                <ChevronDownIcon size={12} color={colors.text.muted} style={{ transition: `transform ${transitions.fast}`, transform: isOpen ? 'rotate(180deg)' : 'none' }} />
              </div>
            </button>
            {isOpen && (
              <div style={{ padding: '6px 10px 10px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                {questions.map((q, i) => (
                  <QuestionRow key={q.id} q={q} index={i} />
                ))}
                {questions.length === 0 && (
                  <div style={{ fontSize: typography.sizes.xs, color: colors.text.muted, padding: '8px' }}>
                    No questions available for this week.
                  </div>
                )}
                {onStartWeekPractice && questions.length > 0 && (
                  <button
                    onClick={() => onStartWeekPractice(wa.questionIds, wa.weekNumber)}
                    style={{
                      marginTop: '8px', width: '100%', padding: '10px 0',
                      borderRadius: radius.sm, border: `1.5px solid ${colors.accent.orange}`,
                      background: '#fff', color: colors.accent.orange,
                      fontSize: typography.sizes.xs, fontWeight: typography.weights.bold,
                      cursor: 'pointer', transition: `background ${transitions.fast}`,
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = colors.accent.orangeLight; }}
                    onMouseLeave={e => { e.currentTarget.style.background = '#fff'; }}
                  >
                    Start Week {wa.weekNumber} Practice ({questions.length} questions)
                  </button>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Small insight tile used inside "How You Test"
// ---------------------------------------------------------------------------
function InsightTile({ label, value, valueColor, detail }) {
  return (
    <div style={{ padding: '12px', background: colors.surface.offWhite, borderRadius: radius.sm }}>
      <div style={{ fontSize: '10px', fontWeight: typography.weights.semibold, color: colors.text.secondary, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '4px' }}>{label}</div>
      <div style={{ fontSize: typography.sizes.xl, fontWeight: typography.weights.bold, color: valueColor }}>{value}</div>
      {detail && <div style={{ fontSize: typography.sizes.xs, color: colors.text.secondary, lineHeight: '1.3', marginTop: '4px' }}><MathText>{detail}</MathText></div>}
    </div>
  );
}

export default StudyPlanDashboard;
