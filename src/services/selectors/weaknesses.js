/**
 * weaknesses.js — single source of truth for the section-tagged weakness shape.
 *
 * Background:
 * Until 2026-05-09, `studyPlan.weaknesses` was math-only (math is the only
 * section that fed the diagnostic loop). Adding R&W focus area drills (item
 * #1 of the Acely-parity ship list) means weaknesses now span two sections —
 * math and R&W — and consumers (the focus-area drill dispatcher,
 * `getTargetedWeaknessSet`, `practiceAssignmentService`, etc.) need to route
 * by section.
 *
 * Contract:
 * Every weakness has a `section` field. Allowed values: `'math'`, `'rw'`.
 * For backward compatibility (rollback safety + cross-cohort reads where an
 * older client may produce the un-tagged shape), readers default missing
 * `section` to `'math'`. Writers MUST set `section: 'math'` explicitly on new
 * data — the default is for legacy reads only.
 *
 * Naming note:
 * Weaknesses also have a pre-existing `sections` field (plural array) that
 * lists the test modules where the skill appears (e.g.
 * `['module-1', 'module-2']`). The new singular `section` is on a different
 * axis (test subject — math vs R&W) and is not interchangeable. This module
 * uses `getWeaknessSection(w)` to read the singular field with the default
 * fallback.
 *
 * Drill weakness shape (the one fed to `getTargetedWeaknessSet`):
 *   {
 *     skillId: string,        // e.g. 'slope-intercept-form'
 *     skill: string,          // display name
 *     evidence: string,       // narrative evidence
 *     accuracy: number,       // testAccuracy %
 *     errorType: string,      // ERROR_TYPE_LABELS[primaryErrorType]
 *     domain: string,         // e.g. 'algebra' | 'craft-and-structure'
 *     modules: string[],      // legacy plural list
 *     sections: string[],     // legacy plural list (NOT this module's `section`)
 *     section: 'math' | 'rw'  // NEW — test subject axis
 *   }
 *
 * (The narrative weakness shape produced by
 * `services/scoring/diagnosticAdapter.js` is a different object — id, name,
 * why, proof, impact, severity — and is NOT in scope for this selector.)
 */

const DEFAULT_SECTION = 'math';
export const VALID_SECTIONS = ['math', 'rw'];

/**
 * @param {object} weakness  A drill-shaped weakness.
 * @returns {'math' | 'rw'}  The section, defaulting to 'math' if missing.
 */
export function getWeaknessSection(weakness) {
  if (!weakness) return DEFAULT_SECTION;
  const s = weakness.section;
  if (s === 'math' || s === 'rw') return s;
  return DEFAULT_SECTION;
}

/**
 * Tag a weakness with `section: 'math' | 'rw'` (idempotent — won't overwrite
 * an explicit value, but normalizes invalid values to the default).
 *
 * Use at write sites where the data is unambiguously math (or unambiguously
 * R&W) so the consumer doesn't depend on the read-time default.
 *
 * @param {object} weakness  A drill-shaped weakness (may lack `section`).
 * @param {'math' | 'rw'} section  The section to set if not already present.
 * @returns {object}  A new object with `section` set.
 */
export function tagWeaknessSection(weakness, section) {
  if (!weakness) return weakness;
  const target = section === 'rw' ? 'rw' : 'math';
  // Preserve a pre-existing valid section; otherwise set the requested one.
  const existing = getWeaknessSection(weakness);
  if (existing === 'math' && weakness.section === undefined) {
    return { ...weakness, section: target };
  }
  if (weakness.section === target) return weakness;
  return { ...weakness, section: target };
}

/**
 * Return all drill-shaped weaknesses on a study plan, normalized to always
 * carry a `section` field.
 *
 * @param {object | null | undefined} plan  A study plan object.
 * @returns {object[]}  The plan's weaknesses, each guaranteed to have `section`.
 */
export function getAllWeaknesses(plan) {
  const list = (plan && Array.isArray(plan.weaknesses)) ? plan.weaknesses : [];
  return list.map(w => (w && w.section ? w : { ...w, section: getWeaknessSection(w) }));
}

/**
 * Filter `studyPlan.weaknesses` to math-section entries only. Use at consumer
 * sites that route into the math drill bank.
 *
 * @param {object | null | undefined} plan  A study plan object.
 * @returns {object[]}  Math-section weaknesses only.
 */
export function getMathWeaknesses(plan) {
  return getAllWeaknesses(plan).filter(w => getWeaknessSection(w) === 'math');
}

/**
 * Filter `studyPlan.weaknesses` to R&W-section entries only. Use at consumer
 * sites that route into the R&W drill bank (e.g. StudyPlanDashboard's
 * skillPracticeRows section dispatcher).
 *
 * @param {object | null | undefined} plan  A study plan object.
 * @returns {object[]}  R&W-section weaknesses only.
 */
export function getRWWeaknesses(plan) {
  return getAllWeaknesses(plan).filter(w => getWeaknessSection(w) === 'rw');
}

/**
 * Group weaknesses by section. Returns `{ math: [...], rw: [...] }`.
 *
 * @param {object | null | undefined} plan  A study plan object.
 * @returns {{ math: object[], rw: object[] }}
 */
export function getWeaknessesBySection(plan) {
  const out = { math: [], rw: [] };
  getAllWeaknesses(plan).forEach(w => {
    const s = getWeaknessSection(w);
    out[s].push(w);
  });
  return out;
}
