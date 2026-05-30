/**
 * goalProgress — safe-by-default "did the student hit their goal?" comparison.
 *
 * `targetScore` (from onboarding) is always a SECTION-scale value (200-800).
 * A test's headline `scaledScore` is a 200-800 section score for single-section
 * tests but a 400-1600 COMPOSITE once a test carries more than one section
 * (irtEngine `isMultiSection`). The dashboards used to compare them raw, so the
 * day an R&W section ships a ~900 composite would trivially clear a 700 section
 * target and falsely celebrate "Goal Achieved" with a nonsense "+200 pts above
 * target" (1.4). These helpers compare ONLY when the latest score is provably on
 * the same (section) scale as the target, and default to "not achieved" /
 * "no delta" whenever the scale is composite or unknown — never a false positive.
 *
 * Use in any view that renders a goal-achieved state or a "points vs goal" delta.
 */

/** Top of the SAT section scale; a target is always at or below this. */
export const SECTION_SCALE_MAX = 800;

/**
 * Is `score` provably on the section (200-800) scale, i.e. directly comparable
 * to a section-scale target? Proven composite → false. Section flag false, or a
 * legacy row with no flag, is trusted only within the section ceiling so a
 * legacy composite (> 800) can never sneak through.
 *
 * @param {number} score - the headline scaled score
 * @param {object} [opts]
 * @param {boolean} [opts.isMultiSection] - composite flag from the test result
 * @returns {boolean}
 */
export function isSectionScaleScore(score, { isMultiSection } = {}) {
  if (typeof score !== 'number' || Number.isNaN(score)) return false;
  if (isMultiSection === true) return false; // proven composite (400-1600)
  return score <= SECTION_SCALE_MAX;
}

/**
 * True only when latestScore and targetScore are provably on the same scale AND
 * latestScore >= targetScore. False for any missing value, composite score, or
 * unknown-scale score above the section ceiling.
 *
 * @param {object} args
 * @param {number|null} [args.latestScore]
 * @param {number|null} [args.targetScore]
 * @param {boolean} [args.isMultiSection] - composite flag from the latest result
 * @returns {boolean}
 */
export function isGoalAchieved({ latestScore, targetScore, isMultiSection } = {}) {
  if (targetScore == null || latestScore == null) return false;
  if (!isSectionScaleScore(latestScore, { isMultiSection })) return false;
  return latestScore >= targetScore;
}

/**
 * Points the latest score sits above (or below) the target — but only when the
 * two are on the same scale. Returns null otherwise so callers never render a
 * cross-scale "+N pts" delta.
 *
 * @param {object} args
 * @param {number|null} [args.latestScore]
 * @param {number|null} [args.targetScore]
 * @param {boolean} [args.isMultiSection]
 * @returns {number|null}
 */
export function goalDelta({ latestScore, targetScore, isMultiSection } = {}) {
  if (targetScore == null || latestScore == null) return null;
  if (!isSectionScaleScore(latestScore, { isMultiSection })) return null;
  return latestScore - targetScore;
}
