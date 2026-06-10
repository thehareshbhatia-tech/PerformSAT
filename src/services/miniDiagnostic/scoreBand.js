/**
 * scoreBand.js — honest score-band estimate for the 24-question
 * mini-diagnostic (12 R&W + 12 Math).
 *
 * ── Scoring approach (and why) ──────────────────────────────────────────────
 * Each section's band CENTER comes from the existing IRT machinery via
 * `convertToSATScore(rawCorrect, total)` — the engine's raw -> scaled path
 * (synthetic difficulty-distributed response vector -> estimateTheta ->
 * thetaToScaledScore), which uses the SAME theta scale full tests are
 * scored on, so a mini-diagnostic band lands on the same ruler as a later
 * full-test `score.scaled`.
 *
 * We deliberately do NOT run MLE over the actual sampled items' params:
 *   1. With per-item params, WHICH items were right moves theta — a student
 *      with k+1 correct could band below one with k correct, violating the
 *      hard monotonicity guarantee. A raw-count mapping is monotone by
 *      construction.
 *   2. The honest Fisher SE at 12 items/section is ~0.65 theta (~±60
 *      section points), a 170+ point composite band — true but useless as
 *      a product surface. Instead the band carries an explicit, fixed
 *      ±1-SE-EQUIVALENT margin: ±30 per section, ±40 composite
 *      (~sqrt(2) * 30, snapped to the 10-point grid) — honest about being
 *      a 24-question estimate without drowning the signal.
 *
 * All values are multiples of 10 and clamped to [200, 800] per section /
 * [400, 1600] composite.
 */

import { convertToSATScore, isAnswerCorrect } from '../scoring/irtEngine';

const SECTION_MIN = 200;
const SECTION_MAX = 800;
const COMPOSITE_MIN = 400;
const COMPOSITE_MAX = 1600;

// ±1-SE-equivalent margins (see module comment). Section margins do not sum
// to the composite margin because section errors are treated as independent:
// composite ~ sqrt(30^2 + 30^2) ~ 42 -> 40 on the 10-point grid.
export const SECTION_MARGIN = 30;
export const COMPOSITE_MARGIN = 40;

const roundTo10 = (n) => Math.round(n / 10) * 10;
const clamp = (n, min, max) => Math.min(max, Math.max(min, n));

/** Count correct answers for a section's items against answersById. */
function countCorrect(items, answers) {
  return items.reduce(
    (sum, item) => sum + (isAnswerCorrect(item, answers[item.id]) ? 1 : 0),
    0,
  );
}

/** Section band center on 200-800 via the engine's raw -> scaled path. */
function sectionCenter(items, answers) {
  if (items.length === 0) return SECTION_MIN;
  return clamp(
    roundTo10(convertToSATScore(countCorrect(items, answers), items.length)),
    SECTION_MIN,
    SECTION_MAX,
  );
}

function sectionBand(center) {
  return {
    low: clamp(roundTo10(center - SECTION_MARGIN), SECTION_MIN, SECTION_MAX),
    high: clamp(roundTo10(center + SECTION_MARGIN), SECTION_MIN, SECTION_MAX),
  };
}

/**
 * Compute the projected score band from a completed mini-diagnostic.
 * Pure and deterministic; monotone in correct-answer count (more correct
 * answers never lower any band edge). Use it once after the 24th answer.
 *
 * @param {object} args
 * @param {object[]} args.rwItems — the 12 R&W items served (stage 1 + stage 2)
 * @param {object[]} args.mathItems — the 12 Math items served
 * @param {Object<string, string>} args.answersById — item id -> chosen choice id
 * @returns {{low: number, high: number, rwBand: {low: number, high: number}, mathBand: {low: number, high: number}}}
 *   composite band on 400-1600; per-section bands on 200-800; all multiples of 10
 */
export function computeScoreBand({ rwItems = [], mathItems = [], answersById = {} } = {}) {
  const rwCenter = sectionCenter(rwItems.filter(Boolean), answersById);
  const mathCenter = sectionCenter(mathItems.filter(Boolean), answersById);

  const composite = rwCenter + mathCenter;
  return {
    low: clamp(roundTo10(composite - COMPOSITE_MARGIN), COMPOSITE_MIN, COMPOSITE_MAX),
    high: clamp(roundTo10(composite + COMPOSITE_MARGIN), COMPOSITE_MIN, COMPOSITE_MAX),
    rwBand: sectionBand(rwCenter),
    mathBand: sectionBand(mathCenter),
  };
}
