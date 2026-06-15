import React, { useMemo } from 'react';
import { buildDailySession, getReviewStreak } from '../services/dailyReviewEngine';

const DailyReviewCard = ({ reviewQueue, reviewStreak, onStartReview }) => {
  const session = useMemo(() => buildDailySession(reviewQueue), [reviewQueue]);
  // Prefer the Firestore-persisted streak (set via the onSessionComplete seam,
  // readable across devices and by the re-engagement cron); fall back to the
  // localStorage cache for users who predate the write-through.
  const streak = useMemo(() => reviewStreak || getReviewStreak(), [reviewStreak]);

  // Group items by sectionName for subdomain display
  const sectionGroups = useMemo(() => {
    const groups = {};
    session.items.forEach(item => {
      const key = item.sectionName || 'General';
      if (!groups[key]) groups[key] = { name: key, items: [], hasOverdue: false };
      groups[key].items.push(item);
      if (item.daysOverdue) groups[key].hasOverdue = true;
    });
    return Object.values(groups);
  }, [session.items]);

  return (
    <div className="action-card">
      <div className="action-card-header">
        <div className="action-card-title">Review Queue</div>
        <div className="accuracy-group">
          <span className="accuracy-label">Due</span>
          <span className="accuracy-pill blue">{session.sessionSize}</span>
        </div>
      </div>

      {streak.current > 0 && (
        <div className="review-streak" style={{ fontSize: '0.8125rem', color: 'var(--color-slate-500)', marginBottom: '0.5rem' }}>
          <strong style={{ color: 'var(--color-brand-green-text)' }}>{streak.current}-day</strong> review streak{streak.best > streak.current ? ` · best ${streak.best}` : ''}
        </div>
      )}

      <div className="action-card-desc">
        {session.sessionSize > 0
          ? `${session.hasMore ? session.totalDue : session.sessionSize} questions waiting for spaced repetition review.`
          : 'No questions due for review right now.'}
      </div>

      {session.sessionSize > 0 && (
        <button className="btn-ghost-blue" onClick={() => onStartReview && onStartReview(session.items)} style={{ textAlign: 'left', marginBottom: '1.25rem' }}>
          Review All ({session.sessionSize})
        </button>
      )}

      <div className="action-card-footer">
        {sectionGroups.length > 0 && (
          <div style={{ fontSize: '0.8125rem', color: 'var(--color-slate-500)', marginBottom: '0.75rem' }}>Review by topic:</div>
        )}
        <div className="domain-list">
          {session.items.length === 0 ? (
            <div className="domain-item" style={{ color: 'var(--color-success-text)' }}>✓ All caught up!</div>
          ) : sectionGroups.slice(0, 4).map(group => (
            <div
              className="domain-item domain-item-clickable"
              key={group.name}
              onClick={() => onStartReview && onStartReview(group.items)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && onStartReview && onStartReview(group.items)}
            >
              <span>{group.name} ({group.items.length})</span>
              <span className={group.hasOverdue ? "accuracy-pill blue" : "accuracy-pill"} style={{ background: group.hasOverdue ? 'var(--color-error-100)' : 'var(--color-brand-green-soft)', color: group.hasOverdue ? 'var(--color-error-text)' : 'var(--color-brand-green-text)' }}>
                {group.hasOverdue ? 'Overdue' : 'Due'}
              </span>
            </div>
          ))}
          {sectionGroups.length > 4 && (
            <div className="domain-item">
              <span>+ {sectionGroups.length - 4} more topics</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DailyReviewCard;
