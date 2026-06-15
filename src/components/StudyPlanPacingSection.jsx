import React, { useMemo } from 'react';
import { buildPacingSession } from '../services/pacingService';
import { TimerIcon } from '../design/icons';

/**
 * StudyPlanPacingSection — Pacing & Timing inside the Study Plan.
 *
 * Quiet by default; boosts to a prominent purple-accented card when the plan
 * shows a timing struggle (getPacingStruggle → struggle.struggling). Reuses
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
}) {
  const session = useMemo(() => buildPacingSession(questionTelemetry), [questionTelemetry]);

  if (questionTelemetry.length === 0 || testDateIsPast) return null;

  const avgTime = session.profile.stats?.avgTimePerQuestion ?? null;
  const struggling = !!struggle?.struggling;
  const reason = (struggling && struggle.reason) || session.profile.reason;
  const launch = () => onStartPacing && onStartPacing(session.config);

  if (struggling) {
    return (
      <section className="sp-section sp-pacing sp-pacing-boost" aria-label="Pacing and timing">
        <div className="sp-pacing-head">
          <span className="sp-pacing-icon" aria-hidden="true"><TimerIcon size={18} /></span>
          <h3 className="sp-pacing-title">Pacing &amp; Timing</h3>
          {avgTime != null && (
            <span className="sp-pacing-badge">{avgTime}s avg · target 95s</span>
          )}
        </div>
        {reason && <p className="sp-pacing-reason">{reason}</p>}
        <button type="button" className="sp-pacing-cta" onClick={launch}>
          Start pacing drill
        </button>
      </section>
    );
  }

  return (
    <section className="sp-section sp-pacing sp-pacing-quiet" aria-label="Pacing and timing">
      <span className="sp-pacing-icon" aria-hidden="true"><TimerIcon size={16} /></span>
      <span className="sp-pacing-quiet-text">
        Pacing &amp; Timing · {avgTime != null ? `${avgTime}s avg` : 'on track'}
      </span>
      <button type="button" className="sp-pacing-quiet-cta" onClick={launch}>
        Practice pacing
      </button>
    </section>
  );
}

export default StudyPlanPacingSection;
