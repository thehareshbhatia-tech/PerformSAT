import React, { useMemo } from 'react';
import { buildPacingSession } from '../services/pacingService';
import { TimerIcon, ChevronRightIcon } from '../design/icons';

/**
 * StudyPlanPacingSection — Pacing & Timing, a quiet "tune-up" strip BELOW the
 * Study Plan (sibling to the Review Queue strip).
 *
 * Always renders as one compact, muted row so it never out-shouts the plan.
 * When the plan shows a timing struggle (getPacingStruggle → struggle.struggling)
 * it picks up a subtle orange flag dot + a one-line reason and a "Start drill"
 * action; otherwise it's a plain "Practice pacing" affordance. Reuses
 * buildPacingSession for the speed read + the drill config the existing
 * onStartPacing handler consumes.
 *
 * Renders nothing before the first test (no telemetry) or once the exam date
 * has passed (pacing prominence would be noise after the exam).
 *
 * @param {object} props
 * @param {Array} props.questionTelemetry — from buildPacingTelemetry(practiceTestResults)
 * @param {{ struggling: boolean, reason: string|null }} props.struggle
 * @param {(config: object) => void} props.onStartPacing
 * @param {boolean} [props.testDateIsPast=false]
 */
function StudyPlanPacingSection({
  questionTelemetry = [],
  struggle,
  onStartPacing,
  testDateIsPast = false,
  prominent = false,
}) {
  const session = useMemo(() => buildPacingSession(questionTelemetry), [questionTelemetry]);

  if (questionTelemetry.length === 0 || testDateIsPast) return null;

  const avgTime = session.profile.stats?.avgTimePerQuestion ?? null;
  const struggling = !!struggle?.struggling;
  const reason = (struggling && strugglingReason(struggle, session)) || null;
  const launch = () => onStartPacing && onStartPacing(session.config);

  // Prominent variant — a full card (orange left rail) for the weekly
  // "Beyond this week" section, vs the quiet strip used below the plan.
  if (prominent) {
    return (
      <section className={`sp-bq-pacing${struggling ? ' is-flagged' : ''}`} aria-label="Pacing and timing">
        <div className="sp-bq-pacing-icon" aria-hidden="true"><TimerIcon size={20} /></div>
        <div className="sp-bq-pacing-text">
          <div className="sp-bq-pacing-head">
            <span className="sp-bq-pacing-title">Pacing &amp; Timing</span>
            <span className="sp-bq-pacing-meta">{avgTime != null ? `${avgTime}s avg · target 95s` : 'on track'}</span>
          </div>
          {reason && <div className="sp-bq-pacing-note">{reason}</div>}
        </div>
        <button type="button" className="sp-bq-pacing-btn" onClick={launch}>
          {struggling ? 'Start drill' : 'Practice'}
          <ChevronRightIcon size={14} />
        </button>
      </section>
    );
  }

  return (
    <section
      className={`sp-tuneup sp-tuneup-pacing${struggling ? ' is-flagged' : ''}`}
      aria-label="Pacing and timing"
    >
      <div className="sp-tuneup-bar sp-tuneup-static">
        <span className="sp-tuneup-icon" aria-hidden="true"><TimerIcon size={16} /></span>
        <span className="sp-tuneup-label">Pacing &amp; Timing</span>
        <span className="sp-tuneup-meta">
          {avgTime != null ? `${avgTime}s avg · target 95s` : 'on track'}
        </span>
        <button type="button" className="sp-tuneup-action" onClick={launch}>
          {struggling ? 'Start drill' : 'Practice'}
          <ChevronRightIcon size={14} />
        </button>
      </div>
      {reason && <p className="sp-tuneup-note">{reason}</p>}
    </section>
  );
}

function strugglingReason(struggle, session) {
  return struggle?.reason || session?.profile?.reason || null;
}

export default StudyPlanPacingSection;
