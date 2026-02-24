/**
 * PacingDrillCard — dashboard widget that recommends the right pacing mode
 * based on the student's telemetry and lets them start a session with one tap.
 */

import React, { useMemo } from 'react';
import { DataCard } from './ui/DataCard';
import { PrimaryButton } from './ui/Button';
import { buildPacingSession } from '../services/pacingService';

const MODE_ACCENTS = {
  speed_rounds: { emoji: '⚡', color: '#f59e0b' },
  checkpoint_pacing: { emoji: '🏁', color: '#2563eb' },
  last_8_min: { emoji: '⏳', color: '#dc2626' },
};

const PacingDrillCard = ({ questionTelemetry = [], onStartPacing }) => {
  const session = useMemo(() => buildPacingSession(questionTelemetry), [questionTelemetry]);
  const accent = MODE_ACCENTS[session.mode.id] || MODE_ACCENTS.speed_rounds;

  return (
    <DataCard hoverable style={{ padding: '1.5rem 2rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
        <div style={{ flex: 1 }}>
          <div style={{
            fontSize: '0.75rem',
            fontWeight: '600',
            color: accent.color,
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
            marginBottom: '0.25rem',
          }}>
            {accent.emoji} Pacing Training
          </div>
          <div style={{ fontSize: '1.125rem', fontWeight: '700', color: 'var(--color-slate-900)', marginBottom: '0.25rem' }}>
            {session.mode.label}
          </div>
          <div style={{ fontSize: '0.8125rem', color: 'var(--color-slate-500)', lineHeight: '1.5' }}>
            {session.profile.reason}
          </div>
          {session.profile.stats && (
            <div style={{ display: 'flex', gap: '1rem', marginTop: '0.75rem', fontSize: '0.75rem', color: 'var(--color-slate-500)' }}>
              <span>Avg {session.profile.stats.avgTimePerQuestion}s/q</span>
              <span>{session.profile.stats.rushedCount} rushed</span>
              <span>{session.profile.stats.overtimeCount} overtime</span>
            </div>
          )}
        </div>

        <div style={{ textAlign: 'right', flexShrink: 0 }}>
          <div style={{ fontSize: '0.75rem', color: 'var(--color-slate-500)', marginBottom: '0.5rem' }}>
            ~{session.mode.estimatedMinutes} min
          </div>
          <PrimaryButton
            onClick={() => onStartPacing && onStartPacing(session.config)}
            style={{ borderRadius: 'var(--radius-full)', padding: '0.5rem 1.25rem' }}
          >
            Start Drill
          </PrimaryButton>
        </div>
      </div>
    </DataCard>
  );
};

export default PacingDrillCard;
