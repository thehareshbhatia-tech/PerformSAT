/**
 * planActivityMatch.js — find the plan activity a completed drill session
 * satisfies, so finishing an assigned drill auto-checks today's matching
 * task off the study plan (adaptivity audit item 4 — effort registers).
 *
 * Pure selector — corpus-free, imported statically by App.jsx (a guarded
 * main-chunk file, see bundleGuard.test.js).
 *
 * Matching mirrors the granularity bridge in activityDrillRouter.js, in the
 * reverse direction: plan activities carry the (possibly granular) gap
 * skillId from studyPlanGenerator, while the drill's weakness carries the
 * skill-level skillId plus missed-pattern slugs from the diagnostic engine.
 */

/**
 * Locate today's first incomplete practice activity matching a drill's
 * weakness. Returns the {weekIndex, activityIndex} pair the caller can feed
 * straight into markStudyActivityComplete (the same identity the manual
 * checkbox path uses).
 *
 * Match tiers, per activity (must be type='practice', incomplete, scheduled
 * for `todayDayName`):
 *   1. activity.skillId === weakness.skillId (exact)
 *   2. a weakness missedPattern slug equals — or prefix-extends — the
 *      activity's skillId (the granular-to-pattern bridge)
 *
 * @param {object|null} plan          studyPlan with weeks[].activities[]
 * @param {object} args
 * @param {object|null} args.weakness      drill-shape weakness ({skillId, missedPatterns?})
 * @param {string} args.todayDayName       e.g. 'Wednesday' (activity.day is a NAME)
 * @returns {{ weekIndex: number, activityIndex: number, activity: object } | null}
 */
export function findMatchingPlanActivity(plan, { weakness, todayDayName } = {}) {
  if (!plan || !Array.isArray(plan.weeks)) return null;
  if (!weakness || !weakness.skillId || !todayDayName) return null;

  const skillId = weakness.skillId;
  const missedPatterns = Array.isArray(weakness.missedPatterns) ? weakness.missedPatterns : [];

  const matches = (act) => {
    if (!act || act.completed || act.type !== 'practice') return false;
    if (act.day !== todayDayName) return false;
    if (!act.skillId) return false;
    if (act.skillId === skillId) return true;
    return missedPatterns.some(p =>
      typeof p === 'string' && (p === act.skillId || p.startsWith(act.skillId + '-'))
    );
  };

  for (let weekIndex = 0; weekIndex < plan.weeks.length; weekIndex++) {
    const activities = (plan.weeks[weekIndex] && Array.isArray(plan.weeks[weekIndex].activities))
      ? plan.weeks[weekIndex].activities
      : [];
    for (let activityIndex = 0; activityIndex < activities.length; activityIndex++) {
      if (matches(activities[activityIndex])) {
        return { weekIndex, activityIndex, activity: activities[activityIndex] };
      }
    }
  }
  return null;
}
