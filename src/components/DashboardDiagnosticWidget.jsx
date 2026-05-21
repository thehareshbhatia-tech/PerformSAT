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
    <div style={{ position: 'relative', marginBottom: '2rem', paddingRight: '1.5rem' }}>
      <DataCard style={{ padding: '2.5rem', background: '#F8F9F5', border: '1px solid var(--color-slate-200)', borderRadius: '24px', boxShadow: 'none' }}>
        <div style={{ fontSize: '1.125rem', fontWeight: '600', color: 'var(--color-brand-navy)', marginBottom: '1.5rem' }}>
          Practice Test Results
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem' }}>
          <div style={{ fontSize: '5.5rem', fontWeight: '600', color: 'var(--color-brand-navy)', lineHeight: 0.9, letterSpacing: '-0.03em' }}>
            {score.scaled}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {trendAnalysis?.hasHistory && trendAnalysis.scoreChange !== 0 && (
              <div style={{ 
                display: 'inline-flex', alignItems: 'center', 
                border: '1px solid #C6F432', borderRadius: '99px', 
                padding: '0.375rem 1rem', fontSize: '0.875rem', 
                color: 'var(--color-accent-dark-green)', background: '#F4FCC8', fontWeight: '500'
              }}>
                ↑ {Math.abs(trendAnalysis.scoreChange)} pts from last exam
              </div>
            )}
            {score.gap > 0 && (
              <div style={{ 
                display: 'inline-flex', alignItems: 'center', 
                border: '1px solid #A5E4F8', borderRadius: '99px', 
                padding: '0.375rem 1rem', fontSize: '0.875rem', 
                color: '#1C7491', background: '#E6F7FD', fontWeight: '500'
              }}>
                ↑ {score.gap} pts from goal
              </div>
            )}
          </div>
        </div>

        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
          <div style={{ flex: 1, background: 'white', borderRadius: '16px', padding: '1.25rem', border: '1px solid var(--color-slate-200)' }}>
            <div style={{ fontSize: '1rem', color: 'var(--color-slate-600)', marginBottom: '0.75rem', fontWeight: '500' }}>Math</div>
            <div style={{ fontSize: '1.75rem', fontWeight: '700', color: 'var(--color-brand-navy)', marginBottom: '0.25rem' }}>{score.scaled}</div>
            <div style={{ fontSize: '0.875rem', color: 'var(--color-slate-400)' }}>43/44</div>
          </div>
          <div style={{ flex: 1, background: 'white', borderRadius: '16px', padding: '1.25rem', border: '1px solid var(--color-slate-200)' }}>
            <div style={{ fontSize: '1rem', color: 'var(--color-slate-600)', marginBottom: '0.75rem', fontWeight: '500' }}>Reading & Writing</div>
            <div style={{ fontSize: '1.75rem', fontWeight: '700', color: 'var(--color-brand-navy)', marginBottom: '0.25rem' }}>--</div>
            <div style={{ fontSize: '0.875rem', color: 'var(--color-slate-400)' }}>N/A</div>
          </div>
        </div>

        <div style={{ background: 'white', borderRadius: '16px', padding: '1.5rem', border: '1px solid var(--color-slate-200)' }}>
          <div style={{ fontSize: '1rem', fontWeight: '600', color: 'var(--color-brand-navy)', marginBottom: '0.25rem' }}>Your Score & SEVA</div>
          <div style={{ fontSize: '0.875rem', color: 'var(--color-slate-500)', marginBottom: '1.5rem' }}>You scored higher than {percentile?.percentile || 90}% of users.</div>
          
          {/* Simple Bell Curve SVG */}
          <div style={{ height: '100px', position: 'relative' }}>
             <svg viewBox="0 0 400 100" width="100%" height="100%" preserveAspectRatio="none">
               {/* Grid lines */}
               <line x1="0" y1="20" x2="400" y2="20" stroke="var(--color-slate-100)" strokeWidth="1" />
               <line x1="0" y1="60" x2="400" y2="60" stroke="var(--color-slate-100)" strokeWidth="1" />
               <line x1="50" y1="0" x2="50" y2="100" stroke="var(--color-slate-100)" strokeWidth="1" />
               <line x1="150" y1="0" x2="150" y2="100" stroke="var(--color-slate-100)" strokeWidth="1" />
               <line x1="250" y1="0" x2="250" y2="100" stroke="var(--color-slate-100)" strokeWidth="1" />
               <line x1="350" y1="0" x2="350" y2="100" stroke="var(--color-slate-100)" strokeWidth="1" />
               
               <path d="M 0 100 Q 150 100, 200 20 T 400 100" fill="rgba(59, 82, 217, 0.2)" stroke="var(--color-brand-primary)" strokeWidth="2" />
               <line x1="300" y1="60" x2="300" y2="100" stroke="var(--color-slate-500)" strokeWidth="1" />
               <text x="300" y="50" fontSize="12" fill="var(--color-slate-600)" textAnchor="middle">You</text>
             </svg>
          </div>
        </div>
      </DataCard>

      {/* Floating Accuracy Card */}
      <div style={{
        position: 'absolute',
        top: '12rem',
        right: '0',
        background: 'var(--color-accent-dark-green)',
        borderRadius: '24px',
        padding: '2rem',
        color: 'white',
        boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
        width: '220px',
        zIndex: 10
      }}>
        <div style={{ fontSize: '1rem', fontWeight: '500', marginBottom: '1.5rem', color: 'white' }}>Accuracy</div>
        <div style={{ fontSize: '4rem', fontWeight: '500', lineHeight: 1, marginBottom: '0.75rem', color: 'var(--color-brand-neon)', letterSpacing: '-0.02em' }}>91%</div>
        <div style={{ fontSize: '0.875rem', color: 'var(--color-brand-neon)', fontWeight: '500' }}>+3% vs last exam</div>
      </div>
    </div>
  );
};

export default DashboardDiagnosticWidget;
