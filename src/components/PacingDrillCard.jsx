import React, { useMemo } from 'react';
import { buildPacingSession } from '../services/pacingService';

const PacingDrillCard = ({ questionTelemetry = [], onStartPacing }) => {
  const session = useMemo(() => buildPacingSession(questionTelemetry), [questionTelemetry]);
  const avgTime = session.profile.stats?.avgTimePerQuestion;
  const hasTelemetry = questionTelemetry.length > 0;

  // Determine speed badge based on actual data
  const speedBadge = useMemo(() => {
    if (!avgTime) return { label: '--', bg: '#f3f4f6', color: '#6b7280' };
    if (avgTime <= 75) return { label: 'Fast', bg: '#bef264', color: '#3f6212' };
    if (avgTime <= 105) return { label: 'Avg', bg: '#fef08a', color: '#4d7c0f' };
    return { label: 'Slow', bg: '#fee2e2', color: '#991b1b' };
  }, [avgTime]);

  // Recommended mode is highlighted
  const recommendedMode = session.profile.mode;

  return (
    <div className="action-card">
      <div className="action-card-header">
        <div className="action-card-title">Pacing & Timing</div>
        <div className="accuracy-group">
          <span className="accuracy-label">Speed</span>
          <span className="accuracy-pill" style={{ background: speedBadge.bg, color: speedBadge.color }}>{speedBadge.label}</span>
        </div>
      </div>

      <div className="action-card-desc">
        {hasTelemetry
          ? `You average ${avgTime}s per question (target: 95s). ${session.profile.reason}`
          : 'Take a practice test to unlock personalized pacing drills based on your timing data.'}
      </div>

      <button className="btn-ghost-blue" onClick={() => onStartPacing && onStartPacing(session.config)} style={{ textAlign: 'left', marginBottom: '1.25rem' }}>
        Start Timed Practice
      </button>

      {hasTelemetry && (
        <div className="action-card-footer">
          <div style={{ fontSize: '0.8125rem', color: '#6b7280', marginBottom: '0.75rem' }}>Recommended drill:</div>
          <div className="domain-list">
            <div className="domain-item" style={{ fontWeight: recommendedMode === 'speed_rounds' ? 600 : 400 }}>
              <span>Speed Rounds (~10 min)</span>
              {recommendedMode === 'speed_rounds' && <span className="accuracy-pill" style={{ background: '#dbeafe', color: '#1d4ed8' }}>Best for you</span>}
            </div>
            <div className="domain-item" style={{ fontWeight: recommendedMode === 'checkpoint_pacing' ? 600 : 400 }}>
              <span>Checkpoint Pacing (~18 min)</span>
              {recommendedMode === 'checkpoint_pacing' && <span className="accuracy-pill" style={{ background: '#dbeafe', color: '#1d4ed8' }}>Best for you</span>}
            </div>
            <div className="domain-item" style={{ fontWeight: recommendedMode === 'last_8_min' ? 600 : 400 }}>
              <span>Endurance (Last 8 Min)</span>
              {recommendedMode === 'last_8_min' && <span className="accuracy-pill" style={{ background: '#dbeafe', color: '#1d4ed8' }}>Best for you</span>}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PacingDrillCard;
