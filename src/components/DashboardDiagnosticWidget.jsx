/**
 * ═══════════════════════════════════════════════════════════════════════════
 * DASHBOARD DIAGNOSTIC WIDGET
 * ═══════════════════════════════════════════════════════════════════════════
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

// ═══════════════════════════════════════════════════════════════════════════
// DESIGN TOKENS (matches dashboard aesthetic)
// ═══════════════════════════════════════════════════════════════════════════

const colors = {
  bg: '#ffffff',
  bgSubtle: '#fafafa',
  bgDark: '#111827',
  text: '#111827',
  textSecondary: '#6b7280',
  textMuted: '#9ca3af',
  border: '#e5e7eb',
  accent: '#ea580c',
  accentLight: '#fff7ed',
  accentBg: '#ffedd5',
  success: '#16a34a',
  successLight: '#f0fdf4',
  successBg: '#dcfce7',
  error: '#dc2626',
  errorLight: '#fef2f2',
  warning: '#f59e0b',
  warningLight: '#fffbeb',
  info: '#2563eb',
  infoLight: '#eff6ff',
  purple: '#7c3aed',
  purpleLight: '#f5f3ff',
};

const cardStyle = {
  background: colors.bg,
  borderRadius: '12px',
  padding: '20px',
  border: `1px solid ${colors.border}`,
};

// ═══════════════════════════════════════════════════════════════════════════
// MINI COMPONENTS
// ═══════════════════════════════════════════════════════════════════════════

const ScoreRingMini = ({ score, target, size = 90 }) => {
  const radius = (size - 10) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = Math.min(1, score / 800);
  const targetProgress = Math.min(1, target / 800);
  const offset = circumference * (1 - progress);
  const targetOffset = circumference * (1 - targetProgress);
  
  return (
    <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
      {/* Background track */}
      <circle cx={size/2} cy={size/2} r={radius} fill="none" stroke="#f3f4f6" strokeWidth="6" />
      {/* Target marker */}
      <circle cx={size/2} cy={size/2} r={radius} fill="none" stroke={colors.accentBg} strokeWidth="6"
        strokeDasharray={circumference} strokeDashoffset={targetOffset} strokeLinecap="round" opacity="0.5" />
      {/* Current score */}
      <circle cx={size/2} cy={size/2} r={radius} fill="none"
        stroke={score >= target ? colors.success : colors.accent}
        strokeWidth="6" strokeDasharray={circumference} strokeDashoffset={offset} strokeLinecap="round" />
      {/* Center text */}
      <text x={size/2} y={size/2 - 6} textAnchor="middle" dominantBaseline="middle"
        style={{ transform: 'rotate(90deg)', transformOrigin: `${size/2}px ${size/2}px`, fontSize: '22px', fontWeight: '700', fill: colors.text }}>
        {score}
      </text>
      <text x={size/2} y={size/2 + 12} textAnchor="middle" dominantBaseline="middle"
        style={{ transform: 'rotate(90deg)', transformOrigin: `${size/2}px ${size/2}px`, fontSize: '10px', fill: colors.textMuted }}>
        / 800
      </text>
    </svg>
  );
};

const MiniProgressBar = ({ value, max = 100, color = colors.accent, height = 6, label }) => (
  <div style={{ flex: 1 }}>
    {label && <div style={{ fontSize: '11px', color: colors.textSecondary, marginBottom: '3px' }}>{label}</div>}
    <div style={{ background: '#f3f4f6', borderRadius: height / 2, height, overflow: 'hidden' }}>
      <div style={{
        width: `${Math.min(100, (value / max) * 100)}%`,
        height: '100%',
        background: color,
        borderRadius: height / 2,
        transition: 'width 0.5s ease',
      }} />
    </div>
  </div>
);

const TrendArrow = ({ change }) => {
  if (change > 0) return <span style={{ color: colors.success, fontWeight: '600', fontSize: '14px' }}>↑ +{change}</span>;
  if (change < 0) return <span style={{ color: colors.error, fontWeight: '600', fontSize: '14px' }}>↓ {change}</span>;
  return <span style={{ color: colors.textMuted, fontWeight: '600', fontSize: '14px' }}>→ 0</span>;
};

// ═══════════════════════════════════════════════════════════════════════════
// MAIN WIDGET
// ═══════════════════════════════════════════════════════════════════════════

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
        ...cardStyle,
        marginBottom: '24px',
        background: 'linear-gradient(135deg, #111827 0%, #1f2937 100%)',
        border: 'none',
        color: 'white',
        textAlign: 'center',
        padding: '32px 24px',
      }}>
        <div style={{ fontSize: '32px', marginBottom: '12px' }}>🔬</div>
        <div style={{ fontSize: '20px', fontWeight: '700', marginBottom: '8px' }}>
          Take a Practice Test to Unlock Your Diagnosis
        </div>
        <div style={{ fontSize: '14px', opacity: 0.8, marginBottom: '20px', maxWidth: '500px', margin: '0 auto 20px' }}>
          Our AI will analyze exactly why you miss each question, predict your score improvement, and build a personalized week-by-week study plan.
        </div>
        <button
          onClick={onStartPracticeTest}
          style={{
            padding: '12px 32px',
            background: colors.accent,
            color: 'white',
            border: 'none',
            borderRadius: '10px',
            fontSize: '15px',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'transform 0.15s ease',
          }}
          onMouseEnter={e => e.target.style.transform = 'scale(1.03)'}
          onMouseLeave={e => e.target.style.transform = 'scale(1)'}
        >
          Start Practice Test →
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

  return (
    <div style={{ marginBottom: '24px' }}>

      {/* ═══ MAIN DIAGNOSTIC CARD ═══ */}
      <div style={{
        ...cardStyle,
        padding: '0',
        overflow: 'hidden',
        border: '1px solid #e5e7eb',
        marginBottom: expanded ? '0' : '0',
      }}>

        {/* Header with Archetype Banner */}
        <div style={{
          background: 'linear-gradient(135deg, #111827 0%, #1e293b 100%)',
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
                    color: colors.accent,
                    background: 'rgba(234,88,12,0.15)',
                    padding: '2px 8px',
                    borderRadius: '10px',
                  }}>
                    {score.gap} pts to go
                  </span>
                )}
                {score.gap <= 0 && (
                  <span style={{
                    fontSize: '12px',
                    color: colors.success,
                    background: 'rgba(22,163,74,0.15)',
                    padding: '2px 8px',
                    borderRadius: '10px',
                  }}>
                    ✓ Target reached!
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
              borderRadius: '10px',
              padding: '8px 14px',
            }}>
              <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)', marginBottom: '2px' }}>Percentile</div>
              <div style={{ fontSize: '20px', fontWeight: '700', color: 'white' }}>
                {percentile?.percentile || '—'}<span style={{ fontSize: '12px', fontWeight: '400' }}>th</span>
              </div>
            </div>
          </div>
        </div>

        {/* Archetype + Quick Stats Row */}
        <div style={{ padding: '16px 24px', borderBottom: `1px solid ${colors.border}` }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontSize: '22px' }}>
                {mistakeFingerprint?.archetype === 'knowledge_builder' ? '📚' :
                 mistakeFingerprint?.archetype === 'trap_prone' ? '🪤' :
                 mistakeFingerprint?.archetype === 'precision_seeker' ? '🎯' :
                 mistakeFingerprint?.archetype === 'speed_builder' ? '⚡' : '🌟'}
              </span>
              <div>
                <div style={{ fontSize: '14px', fontWeight: '600', color: colors.text }}>
                  {mistakeFingerprint?.archetypeLabel || 'All-Rounder'}
                </div>
                <div style={{ fontSize: '12px', color: colors.textSecondary }}>
                  {mistakeFingerprint?.archetypeDescription?.substring(0, 80)}...
                </div>
              </div>
            </div>
            {confidenceInterval && (
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '11px', color: colors.textMuted }}>True Score Range</div>
                <div style={{ fontSize: '13px', fontWeight: '600', color: colors.text }}>
                  {confidenceInterval.scaled80.low} — {confidenceInterval.scaled80.high}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Error Pattern Mini Bar */}
        <div style={{ padding: '16px 24px', borderBottom: `1px solid ${colors.border}` }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
            <div style={{ fontSize: '13px', fontWeight: '600', color: colors.text }}>Why You Missed Questions</div>
            <div style={{ fontSize: '12px', color: colors.textMuted }}>{errorPatterns?.totalWrong || 0} wrong</div>
          </div>
          {/* Stacked bar showing error types */}
          <div style={{ display: 'flex', height: '24px', borderRadius: '6px', overflow: 'hidden', background: '#f3f4f6' }}>
            {(errorPatterns?.summary || []).filter(s => s.count > 0).map((errType, i) => (
              <div
                key={errType.type}
                title={`${errType.label}: ${errType.count} (${errType.percentage}%)`}
                style={{
                  width: `${errType.percentage}%`,
                  background: ERROR_TYPE_COLORS[errType.type] || '#6b7280',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '10px',
                  color: 'white',
                  fontWeight: '600',
                  minWidth: errType.percentage > 10 ? '0' : '0',
                  transition: 'width 0.5s ease',
                }}
              >
                {errType.percentage >= 15 && (
                  <span>{ERROR_TYPE_ICONS[errType.type]} {errType.percentage}%</span>
                )}
              </div>
            ))}
          </div>
          {/* Legend */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '8px' }}>
            {(errorPatterns?.summary || []).filter(s => s.count > 0).map(errType => (
              <div key={errType.type} style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '11px', color: colors.textSecondary }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '2px', background: ERROR_TYPE_COLORS[errType.type] || '#6b7280' }} />
                {errType.label} ({errType.count})
              </div>
            ))}
          </div>
        </div>

        {/* Quick Win + Learning Velocity Row */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderBottom: `1px solid ${colors.border}` }}>
          {/* Quick Wins */}
          <div style={{ padding: '16px 24px', borderRight: `1px solid ${colors.border}` }}>
            <div style={{ fontSize: '12px', color: colors.textMuted, marginBottom: '6px' }}>Quick Win Opportunity</div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
              <span style={{ fontSize: '24px', fontWeight: '700', color: colors.success }}>
                +{quickWinPoints}
              </span>
              <span style={{ fontSize: '12px', color: colors.textSecondary }}>points available</span>
            </div>
            <div style={{ fontSize: '11px', color: colors.textMuted, marginTop: '4px' }}>
              From easy/medium questions you missed
            </div>
          </div>
          {/* Learning Velocity */}
          <div style={{ padding: '16px 24px' }}>
            <div style={{ fontSize: '12px', color: colors.textMuted, marginBottom: '6px' }}>Learning Velocity</div>
            {learningVelocity?.hasData ? (
              <>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                  <span style={{ fontSize: '24px', fontWeight: '700', color: learningVelocity.velocity >= 0 ? colors.info : colors.error }}>
                    {learningVelocity.velocity > 0 ? '+' : ''}{learningVelocity.velocity}
                  </span>
                  <span style={{ fontSize: '12px', color: colors.textSecondary }}>pts/week</span>
                </div>
                <div style={{ fontSize: '11px', color: colors.textMuted, marginTop: '4px' }}>
                  {learningVelocity.trend === 'rapid' ? '🚀 Exceptional pace' :
                   learningVelocity.trend === 'strong' ? '💪 Solid progress' :
                   learningVelocity.trend === 'steady' ? '📈 Steady improvement' :
                   learningVelocity.trend === 'plateau' ? '⚠️ Plateau detected' :
                   '📉 Needs adjustment'}
                </div>
              </>
            ) : (
              <div style={{ fontSize: '13px', color: colors.textSecondary }}>
                Take another test to track
              </div>
            )}
          </div>
        </div>

        {/* Domain Performance Mini */}
        <div style={{ padding: '16px 24px', borderBottom: expanded ? `1px solid ${colors.border}` : 'none' }}>
          <div style={{ fontSize: '13px', fontWeight: '600', color: colors.text, marginBottom: '10px' }}>Domain Performance</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px' }}>
            {(domainAnalysis || []).slice(0, 4).map(domain => {
              const acc = domain.accuracy || 0;
              const barColor = acc >= 80 ? colors.success : acc >= 60 ? colors.warning : colors.error;
              return (
                <div key={domain.domain} style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '11px', color: colors.textSecondary, marginBottom: '6px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {domain.displayName?.replace('& Data Analysis', '& Data')}
                  </div>
                  <div style={{ position: 'relative', height: '40px', background: '#f3f4f6', borderRadius: '6px', overflow: 'hidden' }}>
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
                  <div style={{ fontSize: '13px', fontWeight: '700', color: colors.text, marginTop: '4px' }}>{acc}%</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ═══ EXPANDED SECTION ═══ */}
        {expanded && (
          <>
            {/* Stamina Score */}
            {stamina?.hasData && (
              <div style={{ padding: '16px 24px', borderBottom: `1px solid ${colors.border}` }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <div style={{ fontSize: '13px', fontWeight: '600', color: colors.text }}>Test Stamina</div>
                  <div style={{
                    fontSize: '12px', fontWeight: '600',
                    color: stamina.rating === 'excellent' ? colors.success :
                           stamina.rating === 'good' ? colors.info :
                           stamina.rating === 'fair' ? colors.warning : colors.error,
                  }}>
                    {stamina.staminaScore}/100
                  </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '6px', marginBottom: '8px' }}>
                  {stamina.quarters.map((q, i) => (
                    <div key={i} style={{ textAlign: 'center' }}>
                      <div style={{
                        height: '28px',
                        background: q.accuracy >= 80 ? colors.successBg :
                                    q.accuracy >= 60 ? '#fef9c3' :
                                    q.accuracy >= 40 ? colors.accentBg : colors.errorLight,
                        borderRadius: '4px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '12px',
                        fontWeight: '600',
                        color: colors.text,
                      }}>
                        {q.accuracy}%
                      </div>
                      <div style={{ fontSize: '10px', color: colors.textMuted, marginTop: '2px' }}>{q.label}</div>
                    </div>
                  ))}
                </div>
                <div style={{ fontSize: '12px', color: colors.textSecondary }}>{stamina.message}</div>
              </div>
            )}

            {/* Skill Clusters */}
            {skillClusters?.length > 0 && (
              <div style={{ padding: '16px 24px', borderBottom: `1px solid ${colors.border}` }}>
                <div style={{ fontSize: '13px', fontWeight: '600', color: colors.text, marginBottom: '10px' }}>
                  🔗 Related Skill Gaps
                </div>
                {skillClusters.slice(0, 3).map((cluster, i) => (
                  <div key={i} style={{
                    background: cluster.severity === 'critical' ? colors.errorLight : colors.warningLight,
                    borderRadius: '8px',
                    padding: '10px 14px',
                    marginBottom: i < 2 ? '8px' : '0',
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                      <span style={{ fontSize: '13px', fontWeight: '600', color: colors.text }}>{cluster.name}</span>
                      <span style={{
                        fontSize: '11px', fontWeight: '600',
                        color: cluster.severity === 'critical' ? colors.error : colors.warning,
                      }}>
                        {cluster.failedSkills.length}/{cluster.totalSkillsInFamily} skills weak
                      </span>
                    </div>
                    <div style={{ fontSize: '12px', color: colors.textSecondary }}>{cluster.recommendation}</div>
                  </div>
                ))}
              </div>
            )}

            {/* Answer Pattern Insights */}
            {answerPatterns && (
              <div style={{ padding: '16px 24px', borderBottom: `1px solid ${colors.border}` }}>
                <div style={{ fontSize: '13px', fontWeight: '600', color: colors.text, marginBottom: '10px' }}>
                  📊 Answer Pattern Insights
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                  {answerPatterns.hasPositionBias && (
                    <div style={{ background: colors.warningLight, borderRadius: '8px', padding: '10px 12px' }}>
                      <div style={{ fontSize: '12px', fontWeight: '600', color: colors.warning }}>⚠️ Position Bias</div>
                      <div style={{ fontSize: '11px', color: colors.textSecondary, marginTop: '2px' }}>
                        {answerPatterns.biasWarning}
                      </div>
                    </div>
                  )}
                  {answerPatterns.answerChanges.total > 0 && (
                    <div style={{ background: colors.infoLight, borderRadius: '8px', padding: '10px 12px' }}>
                      <div style={{ fontSize: '12px', fontWeight: '600', color: colors.info }}>
                        ✏️ Changed {answerPatterns.answerChanges.total} Answer{answerPatterns.answerChanges.total !== 1 ? 's' : ''}
                      </div>
                      <div style={{ fontSize: '11px', color: colors.textSecondary, marginTop: '2px' }}>
                        {answerPatterns.answerChanges.advice}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Top 3 Priorities */}
            <div style={{ padding: '16px 24px', borderBottom: `1px solid ${colors.border}` }}>
              <div style={{ fontSize: '13px', fontWeight: '600', color: colors.text, marginBottom: '10px' }}>
                🎯 Your Top 3 Priorities
              </div>
              {topActions.map((action, i) => (
                <div key={i} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '10px 0',
                  borderBottom: i < topActions.length - 1 ? `1px solid ${colors.border}` : 'none',
                }}>
                  <div style={{
                    width: '28px', height: '28px', borderRadius: '50%',
                    background: i === 0 ? colors.accent : i === 1 ? colors.warning : colors.info,
                    color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '13px', fontWeight: '700', flexShrink: 0,
                  }}>
                    {i + 1}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '13px', fontWeight: '500', color: colors.text }}>{action.title}</div>
                    <div style={{ fontSize: '11px', color: colors.textSecondary }}>{action.description}</div>
                  </div>
                  {action.estimatedGain > 0 && (
                    <div style={{
                      fontSize: '12px', fontWeight: '700', color: colors.success,
                      background: colors.successLight, padding: '3px 8px', borderRadius: '10px',
                    }}>
                      +{action.estimatedGain} pts
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Study Plan Preview */}
            {studyPlan && (
              <div style={{ padding: '16px 24px', borderBottom: `1px solid ${colors.border}` }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                  <div style={{ fontSize: '13px', fontWeight: '600', color: colors.text }}>📅 Your Study Plan</div>
                  <span style={{ fontSize: '12px', color: colors.textMuted }}>
                    {studyPlan.weeksUntilTest} weeks • {studyPlan.summary?.stats?.minutesPerDay} min/day
                  </span>
                </div>

                {/* Adherence Projection */}
                {studyPlan.adherenceProjection && (
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '6px', marginBottom: '12px' }}>
                    {studyPlan.adherenceProjection.scenarios.map(s => (
                      <div key={s.adherence} style={{
                        textAlign: 'center',
                        background: s.adherence === 100 ? colors.successLight : s.adherence === 75 ? colors.infoLight : s.adherence === 50 ? colors.warningLight : '#f9fafb',
                        borderRadius: '8px',
                        padding: '8px 6px',
                      }}>
                        <div style={{ fontSize: '14px', marginBottom: '2px' }}>{s.emoji}</div>
                        <div style={{ fontSize: '16px', fontWeight: '700', color: colors.text }}>{s.projectedScore}</div>
                        <div style={{ fontSize: '10px', color: colors.textSecondary }}>{s.label}</div>
                      </div>
                    ))}
                  </div>
                )}

                {/* This Week Preview */}
                {studyPlan.weeks?.[0] && (
                  <div style={{
                    background: colors.bgSubtle,
                    borderRadius: '8px',
                    padding: '12px',
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                      <span style={{ fontSize: '12px', fontWeight: '600', color: colors.text }}>
                        Week 1: {studyPlan.weeks[0].title}
                      </span>
                      <span style={{ fontSize: '11px', color: colors.textMuted }}>
                        {studyPlan.weeks[0].activities?.length} activities
                      </span>
                    </div>
                    {studyPlan.weeks[0].activities?.slice(0, 4).map((activity, i) => (
                      <div key={i} style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '6px 0',
                        borderTop: i > 0 ? `1px solid ${colors.border}` : 'none',
                        fontSize: '12px',
                      }}>
                        <span>{activity.icon || '📘'}</span>
                        <span style={{ flex: 1, color: colors.text }}>{activity.title}</span>
                        <span style={{ color: colors.textMuted }}>{activity.duration}m</span>
                      </div>
                    ))}
                    {(studyPlan.weeks[0].activities?.length || 0) > 4 && (
                      <div style={{ fontSize: '11px', color: colors.textMuted, textAlign: 'center', marginTop: '6px' }}>
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
                <div style={{ fontSize: '12px', color: colors.textMuted, textAlign: 'center' }}>
                  📊 {confidenceInterval.message} • Reliability: {confidenceInterval.reliability}
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
          borderTop: `1px solid ${colors.border}`,
          background: colors.bgSubtle,
        }}>
          <button
            onClick={() => setExpanded(!expanded)}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '13px',
              fontWeight: '500',
              color: colors.accent,
              cursor: 'pointer',
              padding: '4px 0',
            }}
          >
            {expanded ? '▲ Show Less' : '▼ Show More Insights'}
          </button>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button
              onClick={onViewFullDiagnosis}
              style={{
                padding: '8px 16px',
                background: 'transparent',
                border: `1px solid ${colors.accent}`,
                borderRadius: '8px',
                fontSize: '12px',
                fontWeight: '600',
                color: colors.accent,
                cursor: 'pointer',
              }}
            >
              Full Diagnosis & Plan →
            </button>
            <button
              onClick={onStartPracticeTest}
              style={{
                padding: '8px 16px',
                background: colors.accent,
                border: 'none',
                borderRadius: '8px',
                fontSize: '12px',
                fontWeight: '600',
                color: 'white',
                cursor: 'pointer',
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
