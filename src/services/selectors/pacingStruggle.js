/**
 * pacingStruggle.js — does the student's plan show a timing struggle?
 *
 * Single source of truth, reusing the generator's own signal: studyPlanGenerator
 * emits a "Pacing Reset" strategy activity whenever the diagnostic shows
 * timePressureCount >= 3 || fadeEffect > 15 (studyPlanGenerator.js:619-639).
 * The presence of that activity IS the authoritative "struggles with timing"
 * flag, and its subtitle is human-readable evidence we can surface verbatim
 * ("The clock cost you 4 questions last test").
 *
 * Pure: no React, no Firebase. Keeping the struggle signal a selector lets the
 * Study Plan's Pacing section gate its prominence without re-deriving the
 * diagnostic, and keeps the threshold in one place.
 */

/**
 * getPacingStruggle — read the timing-struggle signal off the persisted plan.
 *
 * @param {object|null} studyPlan — { weeks: [{ activities: [...] }] }
 * @returns {{ struggling: boolean, reason: string|null }}
 *          `struggling` true when a Pacing Reset activity exists; `reason` is
 *          its evidence subtitle (or null).
 *
 * When to use: gate/boost the Pacing & Timing section in StudyPlanDashboard —
 * prominent when struggling, quiet otherwise.
 */
export const getPacingStruggle = (studyPlan) => {
  const weeks = studyPlan?.weeks;
  if (!Array.isArray(weeks)) return { struggling: false, reason: null };

  for (const week of weeks) {
    const activities = week?.activities;
    if (!Array.isArray(activities)) continue;
    for (const a of activities) {
      if (!a) continue;
      const isStrategy = a.type === 'strategy' || a.activityType === 'strategyDrill';
      const titled = typeof a.title === 'string' && /pacing/i.test(a.title);
      if (isStrategy && titled) {
        return { struggling: true, reason: a.subtitle || null };
      }
    }
  }
  return { struggling: false, reason: null };
};

export default getPacingStruggle;
