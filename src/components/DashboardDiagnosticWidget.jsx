/**
 * ===================================================================
 * DASHBOARD DIAGNOSTIC WIDGET
 * ===================================================================
 *
 * Compact at-a-glance "Practice Test Results" card in the dashboard right
 * rail: latest scaled score, score delta vs the previous attempt, points to
 * goal, per-section breakdown, a floating accuracy card, and the entry
 * point into the full DiagnosticReport (onViewFullDiagnosis).
 *
 * Every number is derived from the student's own attempts via
 * `getLatestTestStats(practiceTestResults)` — lines whose value can't be
 * proven from real data are hidden, never faked. (This card previously
 * rendered hardcoded placeholders: '43/44', '91%', '+3% vs last exam',
 * 'higher than 90% of users'. The percentile-vs-users line was removed
 * outright — there is no other-users dataset to rank against.)
 */

import React, { useMemo } from 'react';
import { getLatestTestStats } from '../services/selectors/latestTestStats';
import { goalDelta } from '../services/selectors/goalProgress';
import { DataCard } from './ui/DataCard';
import { PrimaryButton, SecondaryButton } from './ui/Button';
import { MicroscopeIcon } from '../design/icons';

/** Sub-line for a section tile: real raw count when we have it, the scale
 * anchor when we only have a scaled score, 'N/A' when the section wasn't
 * taken. Mirrors the old '43/44' format — with the student's own numbers. */
const sectionSubline = (section) => {
  if (!section) return 'N/A';
  if (section.correct !== null && section.total !== null) {
    return `${section.correct}/${section.total}`;
  }
  return 'out of 800';
};

const DashboardDiagnosticWidget = ({
  practiceTestResults,
  user,
  onViewFullDiagnosis,
  onStartPracticeTest,
}) => {
  // Real latest-attempt stats. Null until the student has a scored attempt.
  const stats = useMemo(
    () => getLatestTestStats(practiceTestResults),
    [practiceTestResults],
  );

  // No tests taken yet — show CTA
  if (!stats) {
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

  // Points still to go to the onboarding target — scale-safe (goalDelta
  // returns null when the latest score is a 400-1600 composite and the
  // target is a 200-800 section score, so we never render a cross-scale
  // delta). Negative delta = below goal.
  const ptsToGoal = goalDelta({
    latestScore: stats.scaledScore,
    targetScore: user?.targetScore,
    isMultiSection: stats.isMultiSection,
  });

  return (
    <div style={{ position: 'relative', marginBottom: '2rem', paddingRight: '1.5rem' }}>
      <DataCard style={{ padding: '2.5rem', background: '#F8F9F5', border: '1px solid var(--color-slate-200)', borderRadius: '24px', boxShadow: 'none' }}>
        <div style={{ fontSize: '1.125rem', fontWeight: '600', color: 'var(--color-brand-navy)', marginBottom: '1.5rem' }}>
          Practice Test Results
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem' }}>
          <div style={{ fontSize: '5.5rem', fontWeight: '600', color: 'var(--color-brand-navy)', lineHeight: 0.9, letterSpacing: '-0.03em' }}>
            {stats.scaledScore}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {stats.scoreDelta !== null && stats.scoreDelta !== 0 && (
              <div style={{
                display: 'inline-flex', alignItems: 'center',
                border: '1px solid #C6F432', borderRadius: '99px',
                padding: '0.375rem 1rem', fontSize: '0.875rem',
                color: 'var(--color-accent-dark-green)', background: '#F4FCC8', fontWeight: '500'
              }}>
                {stats.scoreDelta > 0 ? '↑' : '↓'} {Math.abs(stats.scoreDelta)} pts from last exam
              </div>
            )}
            {ptsToGoal !== null && ptsToGoal < 0 && (
              <div style={{
                display: 'inline-flex', alignItems: 'center',
                border: '1px solid #A5E4F8', borderRadius: '99px',
                padding: '0.375rem 1rem', fontSize: '0.875rem',
                color: '#1C7491', background: '#E6F7FD', fontWeight: '500'
              }}>
                ↑ {Math.abs(ptsToGoal)} pts to goal
              </div>
            )}
          </div>
        </div>

        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
          <div style={{ flex: 1, background: 'white', borderRadius: '16px', padding: '1.25rem', border: '1px solid var(--color-slate-200)' }}>
            <div style={{ fontSize: '1rem', color: 'var(--color-slate-600)', marginBottom: '0.75rem', fontWeight: '500' }}>Math</div>
            <div style={{ fontSize: '1.75rem', fontWeight: '700', color: 'var(--color-brand-navy)', marginBottom: '0.25rem' }}>
              {stats.math?.scaled ?? '--'}
            </div>
            <div style={{ fontSize: '0.875rem', color: 'var(--color-slate-400)' }}>{sectionSubline(stats.math)}</div>
          </div>
          <div style={{ flex: 1, background: 'white', borderRadius: '16px', padding: '1.25rem', border: '1px solid var(--color-slate-200)' }}>
            <div style={{ fontSize: '1rem', color: 'var(--color-slate-600)', marginBottom: '0.75rem', fontWeight: '500' }}>Reading & Writing</div>
            <div style={{ fontSize: '1.75rem', fontWeight: '700', color: 'var(--color-brand-navy)', marginBottom: '0.25rem' }}>
              {stats.rw?.scaled ?? '--'}
            </div>
            <div style={{ fontSize: '0.875rem', color: 'var(--color-slate-400)' }}>{sectionSubline(stats.rw)}</div>
          </div>
        </div>

        {/* Entry point into the full DiagnosticReport — the deep "why your
            score happened" artifact. Loader path lives in App.jsx
            (onViewFullDiagnosis → diagnosticReportLoader → view='diagnosticReport'). */}
        {onViewFullDiagnosis && (
          <SecondaryButton onClick={onViewFullDiagnosis} style={{ width: '100%' }}>
            View Full Diagnosis
          </SecondaryButton>
        )}
      </DataCard>

      {/* Floating Accuracy Card */}
      {stats.accuracy !== null && (
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
          <div style={{ fontSize: '4rem', fontWeight: '500', lineHeight: 1, marginBottom: '0.75rem', color: 'var(--color-brand-neon)', letterSpacing: '-0.02em' }}>
            {stats.accuracy}%
          </div>
          {stats.accuracyDelta !== null && stats.accuracyDelta !== 0 && (
            <div style={{ fontSize: '0.875rem', color: 'var(--color-brand-neon)', fontWeight: '500' }}>
              {stats.accuracyDelta > 0 ? '+' : ''}{stats.accuracyDelta}% vs last exam
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default DashboardDiagnosticWidget;
