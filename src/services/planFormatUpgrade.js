/**
 * planFormatUpgrade.js — plan format versioning + the drill-shaped activity
 * builder shared by the generator (new plans) and the read-time upgrade of
 * persisted plans (legacy plans).
 *
 * ZERO corpus imports by design: useProgress (main chunk) runs the upgrade on
 * hydration, so this module may only depend on pure-constant taxonomy files
 * (bundleGuard). The generator imports buildSkillDrillActivity from here so
 * generated and upgraded activities share one shape.
 *
 * Format history:
 *   1 (implicit) — weeks[].activities only contained math module/section
 *       practice + strategy/review/test items. R&W gaps and math gaps that
 *       missed the hand-authored module map emitted NOTHING ("targeted
 *       practice" weeks could be entirely empty).
 *   2 — drill-shaped activities (skillId + section, no moduleId) cover both
 *       sections; upgradeLegacyPlanWeeks backfills them into persisted plans
 *       from plan.weaknesses. (Dev-only stamp, never shipped.)
 *   3 — also heals the cross-scale "past your target" headline on upgraded
 *       plans. The weeks backfill is idempotent, so re-running on a v2 plan
 *       only applies the heal.
 */

import { CB_RW_SKILLS } from '../data/questions/cbSkillTaxonomy';

export const PLAN_FORMAT_VERSION = 3;

// Official display labels for R&W activity titles — weakness.name comes from
// humanizeSkillId kebab title-casing, which mangles official names
// ('Form Structure And Sense' vs 'Form, Structure, and Sense').
export const RW_SKILL_LABELS = Object.fromEntries(CB_RW_SKILLS.map(s => [s.slug, s.label]));

/**
 * Build a drill-shaped practice activity for a skill gap with no math-module
 * coordinates: every R&W gap, and any math gap whose skillId misses the
 * hand-authored module map. Launches through resolveActivityDrill →
 * AssignedPracticeShell (the focus-area Practice route), so it carries
 * skillId + section and deliberately NO moduleId — the module fallback route
 * serves the math topic corpus only.
 *
 * @param {{skillId: string, skillName?: string, section?: string, priority?: number}} gap
 * @returns {Object} a weeks[].activities[] entry
 */
export const buildSkillDrillActivity = (gap) => {
  const section = gap.section === 'rw' ? 'rw' : 'math';
  const label = section === 'rw'
    ? (RW_SKILL_LABELS[gap.skillId] || gap.skillName || gap.skillId)
    : (gap.skillName || gap.skillId);
  return {
    type: 'practice',
    activityType: 'skillDrill',
    title: `Practice: ${label}`,
    subtitle: section === 'rw' ? 'Reading & Writing drill' : 'Targeted drill',
    skillId: gap.skillId,
    skillName: label,
    section,
    duration: 15,
    priority: gap.priority ?? 50,
    icon: null,
  };
};

/**
 * One-time upgrade of a persisted format-1 plan: backfill drill-shaped
 * activities (both sections) into light weeks, derived from the plan's own
 * section-tagged weaknesses. APPEND-ONLY — completion marks are keyed by
 * (weekIndex, activityIndex), so existing positions must never shift.
 *
 * Returns the upgraded plan (always stamped with PLAN_FORMAT_VERSION so the
 * caller persists exactly once), or null when the plan is missing, has no
 * weeks, or is already current.
 *
 * @param {Object|null} plan - the persisted study plan
 * @returns {Object|null} upgraded plan or null when no upgrade applies
 */
export const upgradeLegacyPlanWeeks = (plan) => {
  if (!plan || !Array.isArray(plan.weeks) || plan.weeks.length === 0) return null;
  if ((plan.planFormatVersion || 1) >= PLAN_FORMAT_VERSION) return null;

  const weaknesses = Array.isArray(plan.weaknesses) ? plan.weaknesses : [];

  // Interleave sections so a math-heavy weakness list can't push every R&W
  // drill to the tail (and vice versa).
  const bySection = { math: [], rw: [] };
  weaknesses.forEach(w => {
    if (!w || !w.skillId) return;
    const section = w.section === 'rw' ? 'rw' : 'math';
    bySection[section].push(buildSkillDrillActivity({
      skillId: w.skillId,
      skillName: w.skill || w.name,
      section,
    }));
  });
  const interleaved = [];
  for (let i = 0; i < Math.max(bySection.math.length, bySection.rw.length); i++) {
    if (bySection.rw[i]) interleaved.push(bySection.rw[i]);
    if (bySection.math[i]) interleaved.push(bySection.math[i]);
  }

  let cursor = 0;
  const weeks = plan.weeks.map(week => {
    if (!week || week.isTestWeek || interleaved.length === 0) return week;
    const activities = Array.isArray(week.activities) ? week.activities : [];
    const practiceCount = activities.filter(a => a && a.type === 'practice').length;
    const wanted = Math.max(0, 2 - practiceCount);
    if (wanted === 0) return week;

    const additions = [];
    for (let i = 0; i < wanted && i < interleaved.length; i++) {
      const candidate = interleaved[cursor % interleaved.length];
      cursor += 1;
      const dupe = activities.some(a => a && a.skillId === candidate.skillId)
        || additions.some(a => a.skillId === candidate.skillId);
      if (dupe) continue;
      additions.push({ ...candidate, augmented: true });
    }
    if (additions.length === 0) return week;

    const addedMinutes = additions.reduce((s, a) => s + (a.duration || 0), 0);
    return {
      ...week,
      activities: [...activities, ...additions],
      totalMinutes: typeof week.totalMinutes === 'number' ? week.totalMinutes + addedMinutes : week.totalMinutes,
      practiceCount: typeof week.practiceCount === 'number' ? week.practiceCount + additions.length : week.practiceCount,
    };
  });

  // Heal the cross-scale headline lie: format-1 plans computed scoreGap by
  // raw subtraction, so a composite current score vs a legacy section-scale
  // target rendered "You're past your target". Detect that exact shape and
  // neutralize — the next real regeneration recomputes honestly.
  let summary = plan.summary;
  const crossScale = typeof plan.currentScore === 'number' && typeof plan.targetScore === 'number'
    && plan.currentScore > 800 && plan.targetScore <= 800;
  if (crossScale && summary?.headline && /past your target/i.test(summary.headline)) {
    summary = { ...summary, headline: 'The plan front-loads your costliest gaps.' };
  }

  // Always stamp, even when no week needed backfill — the caller persists
  // once and the upgrade never re-runs for this plan.
  return { ...plan, weeks, summary, planFormatVersion: PLAN_FORMAT_VERSION };
};
