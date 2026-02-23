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
import { DataCard } from './ui/DataCard';
import { PrimaryButton, SecondaryButton } from './ui/Button';
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
      <circle cx={size/2} cy={size/2} r={ringRadius} fill="none" stroke="var(--color-slate-200)" strokeWidth="6" />
      {/* Target marker */}
      <circle cx={size/2} cy={size/2} r={ringRadius} fill="none" stroke="var(--color-brand-orange-500)" strokeWidth="6"
        strokeDasharray={circumference} strokeDashoffset={targetOffset} strokeLinecap="round" opacity="0.3" />
      {/* Current score */}
      <circle cx={size/2} cy={size/2} r={ringRadius} fill="none"
        stroke={score >= target ? "var(--color-success-600)" : "var(--color-brand-orange-500)"}
        strokeWidth="6" strokeDasharray={circumference} strokeDashoffset={offset} strokeLinecap="round" />
      {/* Center text */}
      <text x={size/2} y={size/2 - 6} textAnchor="middle" dominantBaseline="middle"
        style={{ transform: 'rotate(90deg)', transformOrigin: `${size/2}px ${size/2}px`, fontSize: '22px', fontWeight: '700', fill: 'var(--color-slate-900)' }}>
        {score}
      </text>
      <text x={size/2} y={size/2 + 12} textAnchor="middle" dominantBaseline="middle"
        style={{ transform: 'rotate(90deg)', transformOrigin: `${size/2}px ${size/2}px`, fontSize: '10px', fontWeight: '500', fill: 'var(--color-slate-500)' }}>
        / 800
      </text>
    </svg>
  );
};

const MiniProgressBar = ({ value, max = 100, color = "var(--color-brand-orange-500)", height = 6, label }) => (
  <div style={{ flex: 1 }}>
    {label && <div style={{ fontSize: '11px', color: 'var(--color-slate-500)', marginBottom: '3px' }}>{label}</div>}
    <div style={{ background: 'var(--color-slate-200)', borderRadius: height / 2, height, overflow: 'hidden' }}>
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
  if (change > 0) return <span style={{ color: "var(--color-success-600)", fontWeight: '600', fontSize: '14px' }}>+{change}</span>;
  if (change < 0) return <span style={{ color: "var(--color-error-600)", fontWeight: '600', fontSize: '14px' }}>{change}</span>;
  return <span style={{ color: "var(--color-slate-500)", fontWeight: '600', fontSize: '14px' }}>0</span>;
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
      <DataCard style={{ textAlign: 'center', padding: '3rem 2rem' }}>
        <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'center', color: 'var(--color-slate-400)' }}>
          <MicroscopeIcon size={48} color="currentColor" />
        </div>
        <div style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.5rem', color: 'var(--color-slate-900)' }}>
          Take a Practice Test to Unlock Your Diagnosis
        </div>
        <div style={{ fontSize: '0.875rem', color: 'var(--color-slate-500)', marginBottom: '1.5rem', maxWidth: '500px', margin: '0 auto 1.5rem' }}>
          Our AI will analyze exactly why you miss each question, predict your score improvement, and build a personalized week-by-week study plan.
        </div>
        <PrimaryButton onClick={onStartPracticeTest}>
          Start Practice Test
        </PrimaryButton>
      </DataCard>
    );
  }

  const { score, errorPatterns, scoreProjection, percentile, mistakeFingerprint,
    confidenceInterval, learningVelocity, stamina, trendAnalysis, skillClusters,
    answerPatterns, domainAnalysis, prioritizedActions, timeAllocation } = diagnostic;

  const topActions = (prioritizedActions || []).slice(0, 3);
  const quickWinPoints = scoreProjection?.quickWins?.potentialGain || 0;

  const archetypeIcon = () => {
    switch (mistakeFingerprint?.archetype) {
      case 'knowledge_builder': return <BooksIcon size={22} color="var(--color-slate-800)" />;
      case 'trap_prone': return <PuzzleIcon size={22} color="var(--color-slate-800)" />;
      case 'precision_seeker': return <TargetIcon size={22} color="var(--color-slate-800)" />;
      case 'speed_builder': return <LightningIcon size={22} color="var(--color-slate-800)" />;
      default: return <StarIcon size={22} color="var(--color-slate-800)" />;
    }
  };

  const velocityTrendLabel = (trend) => {
    switch (trend) {
      case 'rapid': return <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}><RocketIcon size={14} color="var(--color-success-600)" /> Exceptional pace</span>;
      case 'strong': return <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}><LightningIcon size={14} color="var(--color-success-600)" /> Solid progress</span>;
      case 'steady': return <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}><TrendingUpIcon size={14} color="var(--color-info-600)" /> Steady improvement</span>;
      case 'plateau': return <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}><WarningIcon size={14} color="var(--color-warning-600)" /> Plateau detected</span>;
      default: return <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}><TrendingDownIcon size={14} color="var(--color-error-600)" /> Needs adjustment</span>;
    }
  };

  return (
    <div style={{ marginBottom: '2rem' }}>
      <DataCard style={{ padding: '0', overflow: 'hidden' }}>

        {/* Header with Archetype Banner */}
        <div style={{
          background: 'var(--color-slate-50)',
          padding: '1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1px solid var(--color-slate-200)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <ScoreRingMini score={score.scaled} target={score.target} />
            <div>
              <div style={{ fontSize: '0.75rem', color: 'var(--color-slate-500)', marginBottom: '0.25rem', letterSpacing: '0.04em', textTransform: 'uppercase', fontWeight: '600' }}>
                Latest Practice Test Score
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                <span style={{ fontSize: '0.875rem', color: 'var(--color-slate-900)', fontWeight: '500' }}>
                  Target: {score.target}
                </span>
                {score.gap > 0 && (
                  <span style={{
                    fontSize: '0.75rem',
                    color: 'var(--color-brand-orange-600)',
                    background: 'var(--color-brand-peach-100)',
                    padding: '2px 8px',
                    borderRadius: 'var(--radius-full)',
                    fontWeight: '600',
                  }}>
                    {score.gap} pts to go
                  </span>
                )}
                {score.gap <= 0 && (
                  <span style={{
                    fontSize: '0.75rem',
                    color: 'var(--color-success-600)',
                    background: 'var(--color-success-100)',
                    padding: '2px 8px',
                    borderRadius: 'var(--radius-full)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    fontWeight: '600',
                  }}>
                    <CheckIcon size={12} color="currentColor" /> Target reached!
                  </span>
                )}
              </div>
              {trendAnalysis?.hasHistory && (
                <div style={{ marginTop: '0.5rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <TrendArrow change={trendAnalysis.scoreChange} />
                  <span style={{ fontSize: '0.75rem', color: 'var(--color-slate-500)', fontWeight: '500' }}>vs last test</span>
                </div>
              )}
            </div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{
              background: 'var(--color-white)',
              borderRadius: 'var(--radius-md)',
              padding: '0.5rem 1rem',
              boxShadow: 'var(--shadow-sm)',
              border: '1px solid var(--color-slate-200)'
            }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--color-slate-500)', fontWeight: '500', marginBottom: '2px' }}>Percentile</div>
              <div style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--color-slate-900)', letterSpacing: '-0.02em' }}>
                {percentile?.percentile || '--'}<span style={{ fontSize: '0.75rem', fontWeight: '500', color: 'var(--color-slate-500)' }}>th</span>
              </div>
            </div>
          </div>
        </div>

        {/* Archetype + Quick Stats Row */}
        <div style={{ padding: '1rem 1.5rem', borderBottom: '1px solid var(--color-slate-200)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span style={{ display: 'inline-flex', padding: '0.5rem', background: 'var(--color-slate-100)', borderRadius: 'var(--radius-full)' }}>
                {archetypeIcon()}
              </span>
              <div>
                <div style={{ fontSize: '0.875rem', fontWeight: '600', color: 'var(--color-slate-900)' }}>
                  {mistakeFingerprint?.archetypeLabel || 'All-Rounder'}
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-slate-500)' }}>
                  {mistakeFingerprint?.archetypeDescription?.substring(0, 80)}...
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Win + Learning Velocity Row */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderBottom: '1px solid var(--color-slate-200)' }}>
          {/* Quick Wins */}
          <div style={{ padding: '1rem 1.5rem', borderRight: '1px solid var(--color-slate-200)' }}>
            <div style={{ fontSize: '0.75rem', color: 'var(--color-slate-500)', marginBottom: '0.5rem' }}>Quick Win Opportunity</div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.25rem' }}>
              <span style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--color-success-600)' }}>
                +{quickWinPoints}
              </span>
              <span style={{ fontSize: '0.75rem', color: 'var(--color-slate-500)' }}>points available</span>
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--color-slate-500)', marginTop: '0.25rem' }}>
              From easy/medium questions you missed
            </div>
          </div>
          {/* Learning Velocity */}
          <div style={{ padding: '1rem 1.5rem' }}>
            <div style={{ fontSize: '0.75rem', color: 'var(--color-slate-500)', marginBottom: '0.5rem' }}>Learning Velocity</div>
            {learningVelocity?.hasData ? (
              <>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.25rem' }}>
                  <span style={{ fontSize: '1.5rem', fontWeight: '700', color: learningVelocity.velocity >= 0 ? 'var(--color-info-600)' : 'var(--color-error-600)' }}>
                    {learningVelocity.velocity > 0 ? '+' : ''}{learningVelocity.velocity}
                  </span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--color-slate-500)' }}>pts/week</span>
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-slate-500)', marginTop: '0.25rem' }}>
                  {velocityTrendLabel(learningVelocity.trend)}
                </div>
              </>
            ) : (
              <div style={{ fontSize: '0.875rem', color: 'var(--color-slate-500)' }}>
                Take another test to track
              </div>
            )}
          </div>
        </div>

        {/* Domain Performance Mini */}
        <div style={{ padding: '1rem 1.5rem', borderBottom: expanded ? '1px solid var(--color-slate-200)' : 'none' }}>
          <div style={{ fontSize: '0.875rem', fontWeight: '600', color: 'var(--color-slate-900)', marginBottom: '1rem' }}>Domain Performance</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
            {(domainAnalysis || []).slice(0, 4).map(domain => {
              const acc = domain.accuracy || 0;
              const barColor = acc >= 80 ? 'var(--color-success-600)' : acc >= 60 ? 'var(--color-warning-600)' : 'var(--color-error-600)';
              return (
                <div key={domain.domain} style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--color-slate-500)', marginBottom: '0.5rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {domain.displayName?.replace('& Data Analysis', '& Data')}
                  </div>
                  <div style={{ position: 'relative', height: '40px', background: 'var(--color-slate-100)', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
                    <div style={{
                      position: 'absolute',
                      bottom: 0,
                      width: '100%',
                      height: `${acc}%`,
                      background: barColor,
                      borderRadius: 'var(--radius-md)',
                      transition: 'height 0.5s ease',
                    }} />
                  </div>
                  <div style={{ fontSize: '0.875rem', fontWeight: '700', color: 'var(--color-slate-900)', marginTop: '0.25rem' }}>{acc}%</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Expand/Collapse + Action Row */}
        <div style={{
          padding: '1rem 1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: 'var(--color-slate-50)',
          borderTop: '1px solid var(--color-slate-200)'
        }}>
          <button
            onClick={() => setExpanded(!expanded)}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--color-brand-orange-600)',
              fontSize: '0.875rem',
              fontWeight: '600',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.25rem'
            }}
          >
            {expanded ? 'Show Less' : 'Show More Insights'}
          </button>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <SecondaryButton onClick={onViewFullDiagnosis} style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}>
              Full Diagnosis
            </SecondaryButton>
            <PrimaryButton onClick={onStartPracticeTest} style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}>
              Retake Test
            </PrimaryButton>
          </div>
        </div>

      </DataCard>
    </div>
  );
};

export default DashboardDiagnosticWidget;
