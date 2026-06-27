/**
 * goalProgress — safe-by-default "did the student hit their goal?" comparison.
 *
 * `targetScore` lives on one of two scales: legacy onboarding stored a SECTION
 * (200-800) target; the on-ramp wizard (2026-06) stores a COMPOSITE (400-1600)
 * target. A target above 800 is provably composite — no section goal exceeds
 * 800. A test's headline `scaledScore` is a 200-800 section score for
 * single-section tests but a 400-1600 COMPOSITE once a test carries more than
 * one section (irtEngine `isMultiSection`). The dashboards used to compare them
 * raw, so the day an R&W section ships a ~900 composite would trivially clear a
 * 700 section target and falsely celebrate "Goal Achieved" with a nonsense
 * "+200 pts above target" (1.4). These helpers compare ONLY when score and
 * target are provably on the SAME scale (section-vs-section or
 * composite-vs-composite), and default to "not achieved" / "no delta" whenever
 * the scales are mixed or unknown — never a false positive.
 *
 * Use in any view that renders a goal-achieved state or a "points vs goal" delta.
 */

/** Top of the SAT section scale. */
export const SECTION_SCALE_MAX = 800;

/** Top of the SAT composite scale. */
export const COMPOSITE_SCALE_MAX = 1600;

/**
 * Default goal when a student hasn't set one. The app covers BOTH sections, so
 * the default is a composite (400-1600) target — 1500 is "750 in each section,"
 * the original math-only goal applied across both. Must stay above
 * SECTION_SCALE_MAX so the scale helpers above treat it as composite. Legacy
 * accounts that stored a 200-800 section goal are left as-is and still compare
 * correctly via the section path.
 */
export const DEFAULT_GOAL_SCORE = 1500;

/**
 * Is `target` provably on the composite (400-1600) scale? A target above the
 * section ceiling can only be a composite goal (set by onboarding's 400-1600
 * slider); a target at or below 800 is treated as the legacy section scale.
 *
 * @param {number} target - the student's goal score
 * @returns {boolean}
 */
export function isCompositeScaleTarget(target) {
  if (typeof target !== 'number' || Number.isNaN(target)) return false;
  return target > SECTION_SCALE_MAX && target <= COMPOSITE_SCALE_MAX;
}

/**
 * Convert a legacy section-scale (200-800) goal to the composite (400-1600)
 * scale. SEVA used to be math-only, so a stored math-section target of N
 * ("N in Math") maps to a composite of 2N ("N in each section"), clamped to the
 * composite ceiling — exactly how DEFAULT_GOAL_SCORE frames 1500 as "750 each."
 *
 * Idempotent and safe to call on every load: a value already above the section
 * ceiling (already composite) or a non-number passes through unchanged, and a
 * degenerate low goal that wouldn't clear the section ceiling once doubled falls
 * back to the default so the result is ALWAYS provably composite (> 800) — which
 * keeps the migration from looping (a result ≤ 800 would be re-migrated forever).
 *
 * Use when hydrating a stored profile goal, or when adopting a college math
 * median (collegeData carries only `satMath`) as a composite target.
 *
 * @param {number} goal - a goal that may still be on the section (≤800) scale
 * @returns {number} a composite-scale goal (>800, ≤1600); the input unchanged when not a section-scale number
 */
export function toCompositeGoal(goal) {
  if (typeof goal !== 'number' || Number.isNaN(goal)) return goal;
  if (goal > SECTION_SCALE_MAX) return goal; // already composite — idempotent
  const doubled = Math.round(goal * 2);
  return doubled > SECTION_SCALE_MAX ? Math.min(COMPOSITE_SCALE_MAX, doubled) : DEFAULT_GOAL_SCORE;
}

/**
 * Is `score` provably on the composite (400-1600) scale? True for a flagged
 * multi-section result, or any score above the section ceiling (no section
 * score exceeds 800). An unflagged score at or below 800 stays ambiguous —
 * it could be a low composite, so it never matches a composite target.
 *
 * @param {number} score - the headline scaled score
 * @param {object} [opts]
 * @param {boolean} [opts.isMultiSection] - composite flag from the test result
 * @returns {boolean}
 */
export function isCompositeScaleScore(score, { isMultiSection } = {}) {
  if (typeof score !== 'number' || Number.isNaN(score)) return false;
  if (isMultiSection === true) return true;
  return score > SECTION_SCALE_MAX && score <= COMPOSITE_SCALE_MAX;
}

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
  if (isCompositeScaleTarget(targetScore)) {
    if (!isCompositeScaleScore(latestScore, { isMultiSection })) return false;
    return latestScore >= targetScore;
  }
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
  if (isCompositeScaleTarget(targetScore)) {
    if (!isCompositeScaleScore(latestScore, { isMultiSection })) return null;
    return latestScore - targetScore;
  }
  if (!isSectionScaleScore(latestScore, { isMultiSection })) return null;
  return latestScore - targetScore;
}
