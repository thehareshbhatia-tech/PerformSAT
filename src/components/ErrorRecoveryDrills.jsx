/**
 * ErrorRecoveryDrills — renders one-tap recovery drill cards
 * wired from diagnostic engine error breakdown.
 */

import React from 'react';
import { DataCard } from './ui/DataCard';
import { PrimaryButton } from './ui/Button';
import { generateRecoveryDrills } from '../services/errorRecoveryService';

const ErrorRecoveryDrills = ({ diagnostic, onStartDrill }) => {
  const drills = React.useMemo(() => generateRecoveryDrills(diagnostic), [diagnostic]);

  if (!drills.length) return null;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div style={{
        fontSize: '0.75rem',
        fontWeight: '600',
        color: 'var(--color-brand-orange-600)',
        letterSpacing: '0.04em',
        textTransform: 'uppercase',
      }}>
        Recovery Drills — Fix Your Point Leaks
      </div>

      {drills.map((drill) => (
        <DataCard key={drill.errorType} hoverable style={{ padding: '1.25rem 1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem' }}>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.375rem' }}>
                <span style={{ fontSize: '1.125rem' }}>{drill.icon}</span>
                <span style={{ fontWeight: '700', fontSize: '1rem', color: 'var(--color-slate-900)' }}>
                  {drill.label}
                </span>
                <span style={{
                  fontSize: '0.6875rem',
                  background: drill.color + '18',
                  color: drill.color,
                  padding: '0.125rem 0.5rem',
                  borderRadius: 'var(--radius-full)',
                  fontWeight: '600',
                }}>
                  {drill.questionCount} {drill.questionCount === 1 ? 'error' : 'errors'}
                </span>
              </div>

              <div style={{ fontSize: '0.8125rem', color: 'var(--color-slate-600)', lineHeight: '1.5', marginBottom: '0.5rem' }}>
                {drill.strategy}
              </div>

              {drill.affectedSkills.length > 0 && (
                <div style={{ display: 'flex', gap: '0.375rem', flexWrap: 'wrap' }}>
                  {drill.affectedSkills.map((skill, i) => (
                    <span key={i} style={{
                      fontSize: '0.6875rem',
                      background: 'var(--color-slate-100)',
                      color: 'var(--color-slate-600)',
                      padding: '0.125rem 0.5rem',
                      borderRadius: 'var(--radius-full)',
                    }}>
                      {typeof skill === 'string' ? skill : skill.name || skill.id}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <div style={{ textAlign: 'right', flexShrink: 0 }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--color-slate-500)', marginBottom: '0.5rem' }}>
                ~{drill.minutes} min &middot; +{drill.potentialPoints} pts
              </div>
              <PrimaryButton
                onClick={() => onStartDrill && onStartDrill(drill)}
                style={{ borderRadius: 'var(--radius-full)', padding: '0.375rem 1rem', fontSize: '0.8125rem' }}
              >
                Fix This
              </PrimaryButton>
            </div>
          </div>
        </DataCard>
      ))}
    </div>
  );
};

export default ErrorRecoveryDrills;
