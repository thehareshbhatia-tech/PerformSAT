import React, { useMemo } from 'react';
import { buildDailySession, getReviewStreak } from '../services/dailyReviewEngine';

const DailyReviewCard = ({ reviewQueue, onStartReview }) => {
  const session = useMemo(() => buildDailySession(reviewQueue), [reviewQueue]);
  const streak = useMemo(() => getReviewStreak(), []);

  return (
    <div className="action-card">
      <div className="action-card-header">
        <div className="action-card-title">Review Queue</div>
        <div className="accuracy-group">
          <span className="accuracy-label">Due</span>
          <span className="accuracy-pill blue">{session.sessionSize}</span>
        </div>
      </div>

      <div className="action-card-desc">
        This domain contains {session.hasMore ? session.totalDue : session.sessionSize} total questions waiting for your spaced repetition review.
      </div>
      
      <button className="btn-ghost-blue" onClick={() => onStartReview && onStartReview(session.items)} style={{ textAlign: 'left', marginBottom: '1.25rem' }}>
        Practice This Domain
      </button>

      <div className="action-card-footer">
        <div style={{ fontSize: '0.8125rem', color: '#6b7280', marginBottom: '0.75rem' }}>Practice a subdomain:</div>
        <div className="domain-list">
          {session.items.length === 0 ? (
            <div className="domain-item" style={{ color: '#10b981' }}>✓ All caught up!</div>
          ) : session.items.slice(0, 4).map(item => (
            <div className="domain-item" key={item.key}>
              <span>{item.sectionName}</span>
              <span className={item.daysOverdue ? "accuracy-pill blue" : "accuracy-pill"} style={{ background: item.daysOverdue ? '#fee2e2' : '#bef264', color: item.daysOverdue ? '#991b1b' : '#3f6212' }}>
                {item.daysOverdue ? 'Overdue' : 'Due'}
              </span>
            </div>
          ))}
          {session.items.length > 4 && (
            <div className="domain-item">
              <span>+ {session.items.length - 4} more topics</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DailyReviewCard;
