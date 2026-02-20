/**
 * ===================================================================
 * DASHBOARD DIAGNOSTIC WIDGET
 * ===================================================================
 *
 * Compact at-a-glance diagnostic summary displayed on the student dashboard.
 * Shows: latest score, error patterns, quick wins, study plan progress,
 * learning velocity, student archetype, and percentile.
 *
 * This is the "intelligence layer" that makes PerformSAT's dashboard
 * dramatically more powerful than competitors.
 */

import React, { useState, useMemo } from 'react';
import {
  runDiagnostic,
  ERROR_TYPES,
  ERROR_TYPE_LABELS,
  ERROR_TYPE_ICONS,
  ERROR_TYPE_COLORS,
  estimatePercentile,
} from '../services/diagnosticEngine';
import { generateStudyPlan } from '../services/studyPlanGenerator';
import { colors, typography, spacing, radius, shadows, transitions } from '../design/tokens';
import { cardStyles, buttonStyles } from '../design/components';
import {
  MicroscopeIcon,
  BooksIcon,
  PuzzleIcon,
  TargetIcon,
  LightningIcon,
  StarIcon,
  LinkIcon,
  ChartBarIcon,
  WarningIcon,
  PencilIcon,
  CalendarIcon,
  BookOpenIcon,
  CheckIcon,
  RocketIcon,
  TrendingUpIcon,
  TrendingDownIcon,
  ChevronUpIcon,
  ChevronDownIcon,
} from '../design/icons';

// ===================================================================
// MINI COMPONENTS
// ===================================================================

const ScoreRingMini = ({ score, target, size = 90 }) => {
  const ringRadius = (size - 10) / 2;
  const circumference = 2 * Math.PI * ringRadius;
  const progress = Math.min(1, score / 800);
  const targetProgress = Math.min(1, target / 800);
  const offset = circumference * (1 - progress);
  const targetOffset = circumference * (1 - targetProgress);

  return (
    <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
      {/* Background track */}
      <circle cx={size/2} cy={size/2} r={ringRadius} fill="none" stroke={colors.surface.gray} strokeWidth="6" />
      {/* Target marker */}
      <circle cx={size/2} cy={size/2} r={ringRadius} fill="none" stroke={colors.accent.orangeMuted} strokeWidth="6"
        strokeDasharray={circumference} strokeDashoffset={targetOffset} strokeLinecap="round" opacity="0.5" />
      {/* Current score */}
      <circle cx={size/2} cy={size/2} r={ringRadius} fill="none"
        stroke={score >= target ? colors.semantic.success : colors.accent.orange}
        strokeWidth="6" strokeDasharray={circumference} strokeDashoffset={offset} strokeLinecap="round" />
      {/* Center text */}
      <text x={size/2} y={size/2 - 6} textAnchor="middle" dominantBaseline="middle"
        style={{ transform: 'rotate(90deg)', transformOrigin: `${size/2}px ${size/2}px`, fontSize: '22px', fontWeight: '700', fill: colors.text.primary }}>
        {score}
      </text>
      <text x={size/2} y={size/2 + 12} textAnchor="middle" dominantBaseline="middle"
        style={{ transform: 'rotate(90deg)', transformOrigin: `${size/2}px ${size/2}px`, fontSize: '10px', fill: colors.text.muted }}>
        / 800
      </text>
    </svg>
  );
};

const MiniProgressBar = ({ value, max = 100, color = colors.accent.orange, height = 6, label }) => (
  <div style={{ flex: 1 }}>
    {label && <div style={{ fontSize: '11px', color: colors.text.secondary, marginBottom: '3px' }}>{label}</div>}
    <div style={{ background: colors.surface.gray, borderRadius: height / 2, height, overflow: 'hidden' }}>
      <div style={{
        width: `${Math.min(100, (value / max) * 100)}%`,
        height: '100%',
        background: color,
        borderRadius: height / 2,
        transition: `width 0.5s ease`,
      }} />
    </div>
  </div>
);

const TrendArrow = ({ change }) => {
  if (change > 0) return <span style={{ color: colors.semantic.success, fontWeight: '600', fontSize: '14px' }}>+{change}</span>;
  if (change < 0) return <span style={{ color: colors.semantic.error, fontWeight: '600', fontSize: '14px' }}>{change}</span>;
  return <span style={{ color: colors.text.muted, fontWeight: '600', fontSize: '14px' }}>0</span>;
};

// ===================================================================
// MAIN WIDGET
// ===================================================================

const DashboardDiagnosticWidget = ({
  practiceTestResults,
  skillProgress,
  user,
  completedLessons,
  practiceProgress,
  onViewFullDiagnosis,
  onStartPracticeTest,
  onNavigateToModule,
  onStartPractice,
}) => {
  const [expanded, setExpanded] = useState(false);

  // Get most recent test result with full data
  const latestTest = useMemo(() => {
    if (!practiceTestResults) return null;
    const tests = Object.entries(practiceTestResults)
      .filter(([_, t]) => t.answers && t.test)
      .sort((a, b) => new Date(b[1].completedAt || 0) - new Date(a[1].completedAt || 0));
    return tests.length > 0 ? tests[0][1] : null;
  }, [practiceTestResults]);

  // Run diagnostic on latest test
  const diagnostic = useMemo(() => {
    if (!latestTest?.test || !latestTest?.answers) return null;
    try {
      return runDiagnostic(
        latestTest.test,
        latestTest.answers,
        latestTest.diagnosticData || {},
        skillProgress || {},
        user || {},
        practiceTestResults || {}
      );
    } catch (e) {
      console.error('Diagnostic failed:', e);
      return null;
    }
  }, [latestTest, skillProgress, user, practiceTestResults]);

  // Generate study plan from diagnostic
  const studyPlan = useMemo(() => {
    if (!diagnostic) return null;
    try {
      return generateStudyPlan(
        diagnostic,
        user || {},
        completedLessons || {},
        practiceProgress || {}
      );
    } catch (e) {
      console.error('Study plan generation failed:', e);
      return null;
    }
  }, [diagnostic, user, completedLessons, practiceProgress]);

  // No tests taken yet — show CTA
  if (!diagnostic) {
    return (
      <div style={{
        ...cardStyles.dark,
        marginBottom: spacing.lg,
        textAlign: 'center',
        padding: `${spacing.xl} ${spacing.lg}`,
      }}>
        <div style={{ marginBottom: spacing.sm, display: 'flex', justifyContent: 'center' }}>
          <MicroscopeIcon size={32} color={colors.text.inverse} />
        </div>
        <div style={{ fontSize: '20px', fontWeight: '700', marginBottom: spacing.xs }}>
          Take a Practice Test to Unlock Your Diagnosis
        </div>
        <div style={{ fontSize: '14px', opacity: 0.8, marginBottom: '20px', maxWidth: '500px', margin: '0 auto 20px' }}>
          Our AI will analyze exactly why you miss each question, predict your score improvement, and build a personalized week-by-week study plan.
        </div>
        <button
          onClick={onStartPracticeTest}
          style={{
            ...buttonStyles.base,
            ...buttonStyles.primary,
          }}
          onMouseEnter={e => e.target.style.transform = 'scale(1.03)'}
          onMouseLeave={e => e.target.style.transform = 'scale(1)'}
        >
          Start Practice Test
        </button>
      </div>
    );
  }

  const { score, errorPatterns, scoreProjection, percentile, mistakeFingerprint,
    confidenceInterval, learningVelocity, stamina, trendAnalysis, skillClusters,
    answerPatterns, domainAnalysis, prioritizedActions, timeAllocation } = diagnostic;

  const topActions = (prioritizedActions || []).slice(0, 3);
  const quickWinPoints = scoreProjection?.quickWins?.potentialGain || 0;

  // Calculate study plan progress for current week
  const currentWeekProgress = useMemo(() => {
    if (!studyPlan?.weeks?.length) return null;
    const currentWeek = studyPlan.weeks[0];
    const totalActivities = currentWeek.activities?.length || 0;
    // Check against completed activities
    const completed = 0; // Would check completedActivities from storage
    return { total: totalActivities, completed, percent: totalActivities > 0 ? Math.round((completed / totalActivities) * 100) : 0 };
  }, [studyPlan]);

  const archetypeIcon = () => {
    switch (mistakeFingerprint?.archetype) {
      case 'knowledge_builder': return <BooksIcon size={22} color={colors.text.primary} />;
      case 'trap_prone': return <PuzzleIcon size={22} color={colors.text.primary} />;
      case 'precision_seeker': return <TargetIcon size={22} color={colors.text.primary} />;
      case 'speed_builder': return <LightningIcon size={22} color={colors.text.primary} />;
      default: return <StarIcon size={22} color={colors.text.primary} />;
    }
  };

  const velocityTrendLabel = (trend) => {
    switch (trend) {
      case 'rapid': return <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}><RocketIcon size={14} color={colors.semantic.success} /> Exceptional pace</span>;
      case 'strong': return <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}><LightningIcon size={14} color={colors.semantic.success} /> Solid progress</span>;
      case 'steady': return <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}><TrendingUpIcon size={14} color={colors.semantic.info} /> Steady improvement</span>;
      case 'plateau': return <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}><WarningIcon size={14} color={colors.semantic.warning} /> Plateau detected</span>;
      default: return <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}><TrendingDownIcon size={14} color={colors.semantic.error} /> Needs adjustment</span>;
    }
  };

  return (
    <div style={{ marginBottom: spacing.lg }}>

      {/* === MAIN DIAGNOSTIC CARD === */}
      <div style={{
        ...cardStyles.subtle,
        padding: '0',
        overflow: 'hidden',
        marginBottom: expanded ? '0' : '0',
      }}>

        {/* Header with Archetype Banner */}
        <div style={{
          background: colors.surface.dark,
          padding: '20px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <ScoreRingMini score={score.scaled} target={score.target} />
            <div>
              <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)', marginBottom: '4px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                Latest Practice Test Score
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px' }}>
                <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.9)' }}>
                  Target: {score.target}
                </span>
                {score.gap > 0 && (
                  <span style={{
                    fontSize: '12px',
                    color: colors.accent.orange,
                    background: 'rgba(234,88,12,0.15)',
                    padding: '2px 8px',
                    borderRadius: radius.full,
                  }}>
                    {score.gap} pts to go
                  </span>
                )}
                {score.gap <= 0 && (
                  <span style={{
                    fontSize: '12px',
                    color: colors.semantic.success,
                    background: 'rgba(22,163,74,0.15)',
                    padding: '2px 8px',
                    borderRadius: radius.full,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}>
                    <CheckIcon size={12} color={colors.semantic.success} /> Target reached!
                  </span>
                )}
              </div>
              {trendAnalysis?.hasHistory && (
                <div style={{ marginTop: '6px' }}>
                  <TrendArrow change={trendAnalysis.scoreChange} />
                  <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', marginLeft: '6px' }}>vs last test</span>
                </div>
              )}
            </div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{
              background: 'rgba(255,255,255,0.1)',
              borderRadius: radius.sm,
              padding: '8px 14px',
            }}>
              <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)', marginBottom: '2px' }}>Percentile</div>
              <div style={{ fontSize: '20px', fontWeight: '700', color: colors.text.inverse }}>
                {percentile?.percentile || '--'}<span style={{ fontSize: '12px', fontWeight: '400' }}>th</span>
              </div>
            </div>
          </div>
        </div>

        {/* Archetype + Quick Stats Row */}
        <div style={{ padding: '16px 24px', borderBottom: `1px solid ${colors.surface.grayDark}` }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ display: 'inline-flex' }}>
                {archetypeIcon()}
              </span>
              <div>
                <div style={{ fontSize: '14px', fontWeight: '600', color: colors.text.primary }}>
                  {mistakeFingerprint?.archetypeLabel || 'All-Rounder'}
                </div>
                <div style={{ fontSize: '12px', color: colors.text.secondary }}>
                  {mistakeFingerprint?.archetypeDescription?.substring(0, 80)}...
                </div>
              </div>
            </div>
            {confidenceInterval && (
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '11px', color: colors.text.muted }}>True Score Range</div>
                <div style={{ fontSize: '13px', fontWeight: '600', color: colors.text.primary }}>
                  {confidenceInterval.scaled80.low} -- {confidenceInterval.scaled80.high}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Error Pattern Mini Bar */}
        <div style={{ padding: '16px 24px', borderBottom: `1px solid ${colors.surface.grayDark}` }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
            <div style={{ fontSize: '13px', fontWeight: '600', color: colors.text.primary }}>Why You Missed Questions</div>
            <div style={{ fontSize: '12px', color: colors.text.muted }}>{errorPatterns?.totalWrong || 0} wrong</div>
          </div>
          {/* Stacked bar showing error types */}
          <div style={{ display: 'flex', height: '24px', borderRadius: '6px', overflow: 'hidden', background: colors.surface.gray }}>
            {(errorPatterns?.summary || []).filter(s => s.count > 0).map((errType, i) => (
              <div
                key={errType.type}
                title={`${errType.label}: ${errType.count} (${errType.percentage}%)`}
                style={{
                  width: `${errType.percentage}%`,
                  background: ERROR_TYPE_COLORS[errType.type] || colors.text.secondary,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '10px',
                  color: colors.text.inverse,
                  fontWeight: '600',
                  minWidth: errType.percentage > 10 ? '0' : '0',
                  transition: `width 0.5s ease`,
                }}
              >
                {errType.percentage >= 15 && (
                  <span>{ERROR_TYPE_ICONS[errType.type]} {errType.percentage}%</span>
                )}
              </div>
            ))}
          </div>
          {/* Legend */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: spacing.xs, marginTop: spacing.xs }}>
            {(errorPatterns?.summary || []).filter(s => s.count > 0).map(errType => (
              <div key={errType.type} style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '11px', color: colors.text.secondary }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '2px', background: ERROR_TYPE_COLORS[errType.type] || colors.text.secondary }} />
                {errType.label} ({errType.count})
              </div>
            ))}
          </div>
        </div>

        {/* Quick Win + Learning Velocity Row */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderBottom: `1px solid ${colors.surface.grayDark}` }}>
          {/* Quick Wins */}
          <div style={{ padding: '16px 24px', borderRight: `1px solid ${colors.surface.grayDark}` }}>
            <div style={{ fontSize: '12px', color: colors.text.muted, marginBottom: '6px' }}>Quick Win Opportunity</div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
              <span style={{ fontSize: '24px', fontWeight: '700', color: colors.semantic.success }}>
                +{quickWinPoints}
              </span>
              <span style={{ fontSize: '12px', color: colors.text.secondary }}>points available</span>
            </div>
            <div style={{ fontSize: '11px', color: colors.text.muted, marginTop: '4px' }}>
              From easy/medium questions you missed
            </div>
          </div>
          {/* Learning Velocity */}
          <div style={{ padding: '16px 24px' }}>
            <div style={{ fontSize: '12px', color: colors.text.muted, marginBottom: '6px' }}>Learning Velocity</div>
            {learningVelocity?.hasData ? (
              <>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                  <span style={{ fontSize: '24px', fontWeight: '700', color: learningVelocity.velocity >= 0 ? colors.semantic.info : colors.semantic.error }}>
                    {learningVelocity.velocity > 0 ? '+' : ''}{learningVelocity.velocity}
                  </span>
                  <span style={{ fontSize: '12px', color: colors.text.secondary }}>pts/week</span>
                </div>
                <div style={{ fontSize: '11px', color: colors.text.muted, marginTop: '4px' }}>
                  {velocityTrendLabel(learningVelocity.trend)}
                </div>
              </>
            ) : (
              <div style={{ fontSize: '13px', color: colors.text.secondary }}>
                Take another test to track
              </div>
            )}
          </div>
        </div>

        {/* Domain Performance Mini */}
        <div style={{ padding: '16px 24px', borderBottom: expanded ? `1px solid ${colors.surface.grayDark}` : 'none' }}>
          <div style={{ fontSize: '13px', fontWeight: '600', color: colors.text.primary, marginBottom: '10px' }}>Domain Performance</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: spacing.xs }}>
            {(domainAnalysis || []).slice(0, 4).map(domain => {
              const acc = domain.accuracy || 0;
              const barColor = acc >= 80 ? colors.semantic.success : acc >= 60 ? colors.semantic.warning : colors.semantic.error;
              return (
                <div key={domain.domain} style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '11px', color: colors.text.secondary, marginBottom: '6px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {domain.displayName?.replace('& Data Analysis', '& Data')}
                  </div>
                  <div style={{ position: 'relative', height: '40px', background: colors.surface.gray, borderRadius: '6px', overflow: 'hidden' }}>
                    <div style={{
                      position: 'absolute',
                      bottom: 0,
                      width: '100%',
                      height: `${acc}%`,
                      background: barColor,
                      borderRadius: '6px',
                      transition: 'height 0.5s ease',
                    }} />
                  </div>
                  <div style={{ fontSize: '13px', fontWeight: '700', color: colors.text.primary, marginTop: '4px' }}>{acc}%</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* === EXPANDED SECTION === */}
        {expanded && (
          <>
            {/* Stamina Score */}
            {stamina?.hasData && (
              <div style={{ padding: '16px 24px', borderBottom: `1px solid ${colors.surface.grayDark}` }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <div style={{ fontSize: '13px', fontWeight: '600', color: colors.text.primary }}>Test Stamina</div>
                  <div style={{
                    fontSize: '12px', fontWeight: '600',
                    color: stamina.rating === 'excellent' ? colors.semantic.success :
                           stamina.rating === 'good' ? colors.semantic.info :
                           stamina.rating === 'fair' ? colors.semantic.warning : colors.semantic.error,
                  }}>
                    {stamina.staminaScore}/100
                  </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '6px', marginBottom: '8px' }}>
                  {stamina.quarters.map((q, i) => (
                    <div key={i} style={{ textAlign: 'center' }}>
                      <div style={{
                        height: '28px',
                        background: q.accuracy >= 80 ? colors.semantic.successBg :
                                    q.accuracy >= 60 ? colors.semantic.warningBg :
                                    q.accuracy >= 40 ? colors.accent.orangeMuted : colors.semantic.errorLight,
                        borderRadius: '4px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '12px',
                        fontWeight: '600',
                        color: colors.text.primary,
                      }}>
                        {q.accuracy}%
                      </div>
                      <div style={{ fontSize: '10px', color: colors.text.muted, marginTop: '2px' }}>{q.label}</div>
                    </div>
                  ))}
                </div>
                <div style={{ fontSize: '12px', color: colors.text.secondary }}>{stamina.message}</div>
              </div>
            )}

            {/* Skill Clusters */}
            {skillClusters?.length > 0 && (
              <div style={{ padding: '16px 24px', borderBottom: `1px solid ${colors.surface.grayDark}` }}>
                <div style={{ fontSize: '13px', fontWeight: '600', color: colors.text.primary, marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <LinkIcon size={16} color={colors.text.primary} /> Related Skill Gaps
                </div>
                {skillClusters.slice(0, 3).map((cluster, i) => (
                  <div key={i} style={{
                    background: cluster.severity === 'critical' ? colors.semantic.errorLight : colors.semantic.warningLight,
                    borderRadius: radius.sm,
                    padding: '10px 14px',
                    marginBottom: i < 2 ? '8px' : '0',
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                      <span style={{ fontSize: '13px', fontWeight: '600', color: colors.text.primary }}>{cluster.name}</span>
                      <span style={{
                        fontSize: '11px', fontWeight: '600',
                        color: cluster.severity === 'critical' ? colors.semantic.error : colors.semantic.warning,
                      }}>
                        {cluster.failedSkills.length}/{cluster.totalSkillsInFamily} skills weak
                      </span>
                    </div>
                    <div style={{ fontSize: '12px', color: colors.text.secondary }}>{cluster.recommendation}</div>
                  </div>
                ))}
              </div>
            )}

            {/* Answer Pattern Insights */}
            {answerPatterns && (
              <div style={{ padding: '16px 24px', borderBottom: `1px solid ${colors.surface.grayDark}` }}>
                <div style={{ fontSize: '13px', fontWeight: '600', color: colors.text.primary, marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <ChartBarIcon size={16} color={colors.text.primary} /> Answer Pattern Insights
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                  {answerPatterns.hasPositionBias && (
                    <div style={{ background: colors.semantic.warningLight, borderRadius: radius.sm, padding: '10px 12px' }}>
                      <div style={{ fontSize: '12px', fontWeight: '600', color: colors.semantic.warning, display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <WarningIcon size={14} color={colors.semantic.warning} /> Position Bias
                      </div>
                      <div style={{ fontSize: '11px', color: colors.text.secondary, marginTop: '2px' }}>
                        {answerPatterns.biasWarning}
                      </div>
                    </div>
                  )}
                  {answerPatterns.answerChanges.total > 0 && (
                    <div style={{ background: colors.semantic.infoLight, borderRadius: radius.sm, padding: '10px 12px' }}>
                      <div style={{ fontSize: '12px', fontWeight: '600', color: colors.semantic.info, display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <PencilIcon size={14} color={colors.semantic.info} /> Changed {answerPatterns.answerChanges.total} Answer{answerPatterns.answerChanges.total !== 1 ? 's' : ''}
                      </div>
                      <div style={{ fontSize: '11px', color: colors.text.secondary, marginTop: '2px' }}>
                        {answerPatterns.answerChanges.advice}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Top 3 Priorities */}
            <div style={{ padding: '16px 24px', borderBottom: `1px solid ${colors.surface.grayDark}` }}>
              <div style={{ fontSize: '13px', fontWeight: '600', color: colors.text.primary, marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <TargetIcon size={16} color={colors.text.primary} /> Your Top 3 Priorities
              </div>
              {topActions.map((action, i) => (
                <div key={i} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '10px 0',
                  borderBottom: i < topActions.length - 1 ? `1px solid ${colors.surface.grayDark}` : 'none',
                }}>
                  <div style={{
                    width: '28px', height: '28px', borderRadius: '50%',
                    background: i === 0 ? colors.accent.orange : i === 1 ? colors.semantic.warning : colors.semantic.info,
                    color: colors.text.inverse, display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '13px', fontWeight: '700', flexShrink: 0,
                  }}>
                    {i + 1}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '13px', fontWeight: '500', color: colors.text.primary }}>{action.title}</div>
                    <div style={{ fontSize: '11px', color: colors.text.secondary }}>{action.description}</div>
                  </div>
                  {action.estimatedGain > 0 && (
                    <div style={{
                      fontSize: '12px', fontWeight: '700', color: colors.semantic.success,
                      background: colors.semantic.successLight, padding: '3px 8px', borderRadius: radius.full,
                    }}>
                      +{action.estimatedGain} pts
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Study Plan Preview */}
            {studyPlan && (
              <div style={{ padding: '16px 24px', borderBottom: `1px solid ${colors.surface.grayDark}` }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                  <div style={{ fontSize: '13px', fontWeight: '600', color: colors.text.primary, display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <CalendarIcon size={16} color={colors.text.primary} /> Your Study Plan
                  </div>
                  <span style={{ fontSize: '12px', color: colors.text.muted }}>
                    {studyPlan.weeksUntilTest} weeks {studyPlan.summary?.stats?.minutesPerDay} min/day
                  </span>
                </div>

                {/* Adherence Projection */}
                {studyPlan.adherenceProjection && (
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '6px', marginBottom: '12px' }}>
                    {studyPlan.adherenceProjection.scenarios.map(s => (
                      <div key={s.adherence} style={{
                        textAlign: 'center',
                        background: s.adherence === 100 ? colors.semantic.successLight : s.adherence === 75 ? colors.semantic.infoLight : s.adherence === 50 ? colors.semantic.warningLight : colors.surface.offWhite,
                        borderRadius: radius.sm,
                        padding: '8px 6px',
                      }}>
                        <div style={{ fontSize: '14px', marginBottom: '2px' }}>{s.emoji}</div>
                        <div style={{ fontSize: '16px', fontWeight: '700', color: colors.text.primary }}>{s.projectedScore}</div>
                        <div style={{ fontSize: '10px', color: colors.text.secondary }}>{s.label}</div>
                      </div>
                    ))}
                  </div>
                )}

                {/* This Week Preview */}
                {studyPlan.weeks?.[0] && (
                  <div style={{
                    background: colors.surface.offWhite,
                    borderRadius: radius.sm,
                    padding: spacing.sm,
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: spacing.xs }}>
                      <span style={{ fontSize: '12px', fontWeight: '600', color: colors.text.primary }}>
                        Week 1: {studyPlan.weeks[0].title}
                      </span>
                      <span style={{ fontSize: '11px', color: colors.text.muted }}>
                        {studyPlan.weeks[0].activities?.length} activities
                      </span>
                    </div>
                    {studyPlan.weeks[0].activities?.slice(0, 4).map((activity, i) => (
                      <div key={i} style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: spacing.xs,
                        padding: '6px 0',
                        borderTop: i > 0 ? `1px solid ${colors.surface.grayDark}` : 'none',
                        fontSize: '12px',
                      }}>
                        <BookOpenIcon size={14} color={colors.text.muted} />
                        <span style={{ flex: 1, color: colors.text.primary }}>{activity.title}</span>
                        <span style={{ color: colors.text.muted }}>{activity.duration}m</span>
                      </div>
                    ))}
                    {(studyPlan.weeks[0].activities?.length || 0) > 4 && (
                      <div style={{ fontSize: '11px', color: colors.text.muted, textAlign: 'center', marginTop: '6px' }}>
                        +{studyPlan.weeks[0].activities.length - 4} more activities
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* Confidence Interval */}
            {confidenceInterval && (
              <div style={{ padding: '16px 24px' }}>
                <div style={{ fontSize: '12px', color: colors.text.muted, textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
                  <ChartBarIcon size={14} color={colors.text.muted} /> {confidenceInterval.message} | Reliability: {confidenceInterval.reliability}
                </div>
              </div>
            )}
          </>
        )}

        {/* Expand/Collapse + Action Row */}
        <div style={{
          padding: '12px 24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderTop: `1px solid ${colors.surface.grayDark}`,
          background: colors.surface.offWhite,
        }}>
          <button
            onClick={() => setExpanded(!expanded)}
            style={{
              ...buttonStyles.base,
              ...buttonStyles.tertiary,
              height: 'auto',
              padding: '4px 0',
              fontSize: '13px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
            }}
          >
            {expanded ? (
              <><ChevronUpIcon size={14} color={colors.accent.orange} /> Show Less</>
            ) : (
              <><ChevronDownIcon size={14} color={colors.accent.orange} /> Show More Insights</>
            )}
          </button>
          <div style={{ display: 'flex', gap: spacing.xs }}>
            <button
              onClick={onViewFullDiagnosis}
              style={{
                ...buttonStyles.base,
                ...buttonStyles.secondary,
                height: 'auto',
                padding: '8px 16px',
                fontSize: '12px',
                borderColor: colors.accent.orange,
                color: colors.accent.orange,
              }}
            >
              Full Diagnosis & Plan
            </button>
            <button
              onClick={onStartPracticeTest}
              style={{
                ...buttonStyles.base,
                ...buttonStyles.primary,
                height: 'auto',
                padding: '8px 16px',
                fontSize: '12px',
              }}
            >
              Retake Test
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardDiagnosticWidget;
