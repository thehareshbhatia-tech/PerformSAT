import React, { useMemo } from 'react';
import { buildPacingSession } from '../services/pacingService';

const PacingDrillCard = ({ questionTelemetry = [], onStartPacing }) => {
  const session = useMemo(() => buildPacingSession(questionTelemetry), [questionTelemetry]);

  return (
    <div className="action-card">
      <div className="action-card-header">
        <div className="action-card-title">Pacing & Timing</div>
        <div className="accuracy-group">
          <span className="accuracy-label">Speed</span>
          <span className="accuracy-pill" style={{ background: '#fef08a', color: '#4d7c0f' }}>Avg</span>
        </div>
      </div>

      <div className="action-card-desc">
        This domain analyzes your speed per question. You currently average {session.profile.stats?.avgTimePerQuestion || '--'}s per question.
      </div>
      
      <button className="btn-ghost-blue" onClick={() => onStartPacing && onStartPacing(session.config)} style={{ textAlign: 'left', marginBottom: '1.25rem' }}>
        Practice This Domain
      </button>

      <div className="action-card-footer">
        <div style={{ fontSize: '0.8125rem', color: '#6b7280', marginBottom: '0.75rem' }}>Practice a subdomain:</div>
        <div className="domain-list">
          <div className="domain-item">
            <span>Speed Rounds</span>
            <span className="accuracy-pill">Ready</span>
          </div>
          <div className="domain-item">
            <span>Checkpoint Pacing</span>
            <span className="accuracy-pill">Ready</span>
          </div>
          <div className="domain-item">
            <span>Endurance (Last 8 Min)</span>
            <span className="accuracy-pill" style={{ background: '#fef08a', color: '#a16207' }}>Warmup</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PacingDrillCard;
