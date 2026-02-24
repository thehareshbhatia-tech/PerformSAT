/**
 * DailyReviewCard — prominent dashboard widget that surfaces
 * today's spaced-repetition review session as a first-class daily loop.
 */

import React, { useMemo } from 'react';
import { DataCard } from './ui/DataCard';
import { PrimaryButton, SecondaryButton } from './ui/Button';
import { buildDailySession, getReviewStreak } from '../services/dailyReviewEngine';

const DailyReviewCard = ({ reviewQueue, onStartReview }) => {
  const session = useMemo(() => buildDailySession(reviewQueue), [reviewQueue]);
  const streak = useMemo(() => getReviewStreak(), []);

  if (session.totalDue === 0) {
    return (
      <DataCard style={{ textAlign: 'center', padding: '2rem' }}>
        <div style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>All caught up</div>
        <div style={{ fontSize: '0.875rem', color: 'var(--color-slate-500)' }}>
          No reviews due right now. Keep practicing and they'll appear here.
        </div>
        {streak.current > 0 && (
          <div style={{ marginTop: '1rem', fontSize: '0.8125rem', color: 'var(--color-brand-orange-600)', fontWeight: '600' }}>
            {streak.current}-day review streak
          </div>
        )}
      </DataCard>
    );
  }

  return (
    <DataCard style={{ padding: '0', overflow: 'hidden' }}>
      <div style={{
        padding: '1.5rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid rgba(255,255,255,0.4)',
      }}>
        <div>
          <div style={{
            fontSize: '0.75rem',
            color: 'var(--color-brand-orange-600)',
            fontWeight: '600',
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
            marginBottom: '0.25rem',
          }}>
            Today's Reviews
          </div>
          <div style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--color-slate-900)' }}>
            {session.sessionSize} {session.sessionSize === 1 ? 'question' : 'questions'} due
          </div>
          <div style={{ fontSize: '0.8125rem', color: 'var(--color-slate-500)', marginTop: '0.25rem' }}>
            ~{session.estimatedMinutes} min &middot; {session.hasMore ? `${session.totalDue} total in queue` : 'full queue'}
          </div>
        </div>

        <div style={{ textAlign: 'right' }}>
          {streak.current > 0 && (
            <div style={{
              fontSize: '0.8125rem',
              color: 'var(--color-brand-orange-600)',
              fontWeight: '600',
              marginBottom: '0.5rem',
            }}>
              {streak.current}-day streak
            </div>
          )}
          <PrimaryButton
            onClick={() => onStartReview && onStartReview(session.items)}
            style={{ borderRadius: 'var(--radius-full)', padding: '0.5rem 1.25rem' }}
          >
            Start Reviews
          </PrimaryButton>
        </div>
      </div>

      {session.items.length > 0 && (
        <div style={{ padding: '1rem 2rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          {session.items.slice(0, 6).map((item) => (
            <span key={item.key} style={{
              fontSize: '0.75rem',
              background: item.daysOverdue ? 'var(--color-error-100, #fef2f2)' : 'var(--color-slate-100)',
              color: item.daysOverdue ? 'var(--color-error-600, #dc2626)' : 'var(--color-slate-600)',
              padding: '0.25rem 0.625rem',
              borderRadius: 'var(--radius-full)',
              fontWeight: '500',
            }}>
              {item.sectionName}
            </span>
          ))}
          {session.items.length > 6 && (
            <span style={{
              fontSize: '0.75rem',
              color: 'var(--color-slate-500)',
              padding: '0.25rem 0.625rem',
            }}>
              +{session.items.length - 6} more
            </span>
          )}
        </div>
      )}
    </DataCard>
  );
};

export default DailyReviewCard;
