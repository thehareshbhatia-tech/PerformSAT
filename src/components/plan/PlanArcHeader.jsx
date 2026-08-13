/**
 * PlanArcHeader — the study plan's mission control (Plan v3 B1).
 *
 * The first thing a student sees on the plan page: where they are, where
 * this plan is taking them, and what the next checkpoint is. Renders the
 * score→goal arc with phase segments and dated milestone markers, one
 * personalized "why this plan" sentence, this week's session progress, and
 * (when available) the single strongest identity insight — the content that
 * used to be stranded below the fold as "How you test."
 *
 * Data comes from plan.arc (studyPlanGenerator.buildPlanArc). Older plans
 * have no arc — the component renders a compact fallback with just score,
 * goal, and week progress, so legacy artifacts never break the page.
 *
 * Visual language: reuses the page's existing sp-* token palette (fonts,
 * warm card surfaces, tri-color accents) — reskin-only rule; no new design
 * system.
 */
import React from 'react';

const MILESTONE_GLYPHS = {
  checkIn: '◆',
  fullTest: '■',
  exam: '★',
};

const MILESTONE_LABELS = {
  checkIn: 'Check-in',
  fullTest: 'Full test',
  exam: 'SAT day',
};

/** Resolve a milestone's calendar date from the plan's week grid. */
const milestoneDate = (m, mondayForWeek, weekdayIndex) => {
  if (m.date) {
    const d = new Date(m.date);
    return Number.isNaN(d.getTime()) ? null : d;
  }
  if (!m.weekNumber || typeof mondayForWeek !== 'function') return null;
  const monday = mondayForWeek(m.weekNumber - 1);
  if (!monday) return null;
  const d = new Date(monday);
  const dayIdx = weekdayIndex(m.day);
  d.setDate(monday.getDate() + (dayIdx >= 0 ? dayIdx : 5));
  return d;
};

const fmtShort = (d) => d?.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) || null;

export default function PlanArcHeader({
  arc,
  startScoreLabel,       // resolved display score ("870" latest / estimated mid)
  startScoreIsEstimate,  // true → "Estimated" eyebrow on the start node
  targetScore,
  currentWeekNumber,
  totalWeeks,
  weekSessionsDone,
  weekSessionsTotal,
  personalizedLine,      // one sentence: what this plan is built from + where the points are
  insightLine,           // strongest identity insight ("Fatigue takes these points…") or null
  mondayForWeek,         // (weekIdx) => Date — the page's existing week-date resolver
  weekdayIndex,          // (dayName) => number
}) {
  const phases = arc?.phases || [];
  const milestones = (arc?.milestones || [])
    .map((m) => ({ ...m, resolvedDate: milestoneDate(m, mondayForWeek, weekdayIndex) }))
    .sort((a, b) => (a.resolvedDate?.getTime() || Infinity) - (b.resolvedDate?.getTime() || Infinity));
  const now = new Date();
  const nextMilestone = milestones.find((m) => m.resolvedDate && m.resolvedDate >= new Date(now.getFullYear(), now.getMonth(), now.getDate()));

  return (
    <section className="sp-arc" aria-label="Your plan at a glance">
      <div className="sp-arc-top">
        <div className="sp-arc-node sp-arc-node--start">
          <span className="sp-arc-node-eyebrow">{startScoreIsEstimate ? 'Estimated now' : 'Now'}</span>
          <span className="sp-arc-node-score">{startScoreLabel ?? '—'}</span>
        </div>

        <div className="sp-arc-rail" role="presentation">
          {phases.length > 0 ? phases.map((phase) => {
            const isCurrent = phase.weekNumbers.includes(currentWeekNumber);
            return (
              <div
                key={phase.index}
                className={`sp-arc-phase${isCurrent ? ' is-current' : ''}`}
                style={{ flexGrow: phase.weekNumbers.length }}
              >
                <span className="sp-arc-phase-label">{phase.label}</span>
                <span className="sp-arc-phase-weeks">
                  {phase.weekNumbers.length === 1
                    ? `Week ${phase.weekNumbers[0]}`
                    : `Weeks ${phase.weekNumbers[0]}–${phase.weekNumbers[phase.weekNumbers.length - 1]}`}
                  {phase.projectedGain ? ` · ≈ +${phase.projectedGain} pts` : ''}
                </span>
              </div>
            );
          }) : (
            <div className="sp-arc-phase is-current" style={{ flexGrow: 1 }}>
              <span className="sp-arc-phase-label">Your plan</span>
              <span className="sp-arc-phase-weeks">{totalWeeks} week{totalWeeks === 1 ? '' : 's'}</span>
            </div>
          )}
        </div>

        <div className="sp-arc-node sp-arc-node--goal">
          <span className="sp-arc-node-eyebrow">Goal</span>
          <span className="sp-arc-node-score">{targetScore ?? '—'}</span>
        </div>
      </div>

      {milestones.length > 0 && (
        <div className="sp-arc-milestones" aria-label="Milestones">
          {milestones.map((m, i) => {
            const isNext = m === nextMilestone;
            const dateLabel = fmtShort(m.resolvedDate);
            return (
              <span key={`${m.type}-${m.weekNumber || m.date || i}`} className={`sp-arc-milestone${isNext ? ' is-next' : ''}`}>
                <span className="sp-arc-milestone-glyph" aria-hidden="true">{MILESTONE_GLYPHS[m.type] || '•'}</span>
                {MILESTONE_LABELS[m.type] || m.title}
                {dateLabel ? ` · ${dateLabel}` : m.weekNumber ? ` · Week ${m.weekNumber}` : ''}
                {isNext && <span className="sp-arc-milestone-next">next</span>}
              </span>
            );
          })}
        </div>
      )}

      {(personalizedLine || weekSessionsTotal > 0) && (
        <div className="sp-arc-footer">
          {personalizedLine && <p className="sp-arc-line">{personalizedLine}</p>}
          {weekSessionsTotal > 0 && (
            <span className="sp-arc-week-progress">
              Week {currentWeekNumber} of {totalWeeks} · {weekSessionsDone} of {weekSessionsTotal} sessions done
            </span>
          )}
        </div>
      )}

      {insightLine && <p className="sp-arc-insight">{insightLine}</p>}
    </section>
  );
}
