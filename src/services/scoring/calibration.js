/**
 * Calibration ingestion layer.
 *
 * Provides item-level IRT parameters, module-routing rules, and
 * theta-to-scale conversion tables for each practice-test form.
 *
 * The system is designed so official/proprietary calibration data can
 * be plugged in later without replacing the scoring engine.  Until then
 * it falls back to sensible research-based estimates.
 */

import {
  DIFFICULTY,
  MODULE_ROUTE,
  DEFAULT_IRT_PARAMS,
  resolveItemParams,
} from './scoringSchema';

// ═══════════════════════════════════════════════════════════════════════════
// 1. ITEM PARAMETER STORE
// ═══════════════════════════════════════════════════════════════════════════

// Map questionId -> { a, b, c } for items that have been individually
// calibrated.  Empty by default — filled when external calibration is loaded.
const _calibratedItems = new Map();

/**
 * Load official or proprietary item calibration data.
 * Call this at app startup if calibration JSON is available.
 *
 * @param {Array<{questionId: string, a: number, b: number, c: number}>} items
 */
export function loadItemCalibration(items) {
  items.forEach(({ questionId, a, b, c }) => {
    _calibratedItems.set(questionId, { a, b, c });
  });
}

/**
 * Get IRT parameters for a question, using calibrated values if available,
 * otherwise falling back to difficulty-based defaults.
 */
export function getItemParams(question) {
  const qId = question.id != null ? String(question.id) : null;
  const override = qId ? _calibratedItems.get(qId) : null;
  return resolveItemParams(question, override);
}

// ═══════════════════════════════════════════════════════════════════════════
// 2. MODULE ROUTING
// ═══════════════════════════════════════════════════════════════════════════

// Default: route to "hard" Module 2 if Module 1 accuracy >= 60 %.
const DEFAULT_ROUTING_THRESHOLD = 0.60;

// Per-form overrides (formId -> threshold).
const _routingOverrides = new Map();

export function loadRoutingOverrides(overrides) {
  overrides.forEach(({ formId, threshold }) => {
    _routingOverrides.set(formId, threshold);
  });
}

/**
 * Determine Module 2 route based on Module 1 performance.
 *
 * @param {string} formId  Practice-test ID
 * @param {number} mod1Correct  Correct answers in Module 1
 * @param {number} mod1Total    Total items in Module 1
 * @returns {'easy'|'hard'}
 */
export function determineRoute(formId, mod1Correct, mod1Total) {
  const threshold = _routingOverrides.get(formId) ?? DEFAULT_ROUTING_THRESHOLD;
  const accuracy = mod1Total > 0 ? mod1Correct / mod1Total : 0;
  return accuracy >= threshold ? MODULE_ROUTE.HARD : MODULE_ROUTE.EASY;
}

// ═══════════════════════════════════════════════════════════════════════════
// 3. THETA-TO-SCALE CONVERSION
// ═══════════════════════════════════════════════════════════════════════════

/**
 * Default theta-to-scaled-score conversion for SAT Math (200-800).
 *
 * This is a piecewise-linear mapping derived from publicly available
 * College Board score distribution data.  The shape reflects the
 * non-uniform relationship between ability and reported score on the SAT.
 *
 * Replace with official equating tables when available.
 */
const DEFAULT_THETA_SCALE = [
  // { theta, score }
  { theta: -4.0, score: 200 },
  { theta: -3.0, score: 230 },
  { theta: -2.5, score: 280 },
  { theta: -2.0, score: 330 },
  { theta: -1.5, score: 390 },
  { theta: -1.0, score: 450 },
  { theta: -0.5, score: 500 },
  { theta:  0.0, score: 540 },
  { theta:  0.5, score: 580 },
  { theta:  1.0, score: 630 },
  { theta:  1.5, score: 680 },
  { theta:  2.0, score: 730 },
  { theta:  2.5, score: 770 },
  { theta:  3.0, score: 790 },
  { theta:  4.0, score: 800 },
];

// Per-form scale overrides (formId -> scale array).
const _scaleOverrides = new Map();

export function loadScaleOverrides(overrides) {
  overrides.forEach(({ formId, scale }) => {
    _scaleOverrides.set(formId, scale);
  });
}

/**
 * Convert an ability estimate (theta) to the SAT reported scale.
 * Uses piecewise linear interpolation over the scale table.
 */
export function thetaToScaledScore(theta, formId = null) {
  const table = (formId && _scaleOverrides.get(formId)) || DEFAULT_THETA_SCALE;

  if (theta <= table[0].theta) return table[0].score;
  if (theta >= table[table.length - 1].theta) return table[table.length - 1].score;

  for (let i = 0; i < table.length - 1; i++) {
    const lo = table[i];
    const hi = table[i + 1];
    if (theta >= lo.theta && theta <= hi.theta) {
      const t = (theta - lo.theta) / (hi.theta - lo.theta);
      const raw = lo.score + t * (hi.score - lo.score);
      return Math.round(raw / 10) * 10; // SAT scores are multiples of 10
    }
  }

  return 500; // defensive fallback
}

// ═══════════════════════════════════════════════════════════════════════════
// 4. PERCENTILE TABLE
// ═══════════════════════════════════════════════════════════════════════════

export const PERCENTILE_TABLE = {
  200: 1, 210: 1, 220: 1, 230: 1, 240: 2, 250: 3, 260: 4, 270: 5,
  280: 6, 290: 8, 300: 10, 310: 12, 320: 14, 330: 16, 340: 19,
  350: 22, 360: 25, 370: 28, 380: 31, 390: 34, 400: 37, 410: 40,
  420: 43, 430: 46, 440: 49, 450: 52, 460: 55, 470: 57, 480: 60,
  490: 63, 500: 65, 510: 68, 520: 70, 530: 73, 540: 75, 550: 77,
  560: 79, 570: 81, 580: 83, 590: 85, 600: 86, 610: 88, 620: 89,
  630: 90, 640: 91, 650: 92, 660: 93, 670: 94, 680: 95, 690: 96,
  700: 96, 710: 97, 720: 97, 730: 98, 740: 98, 750: 99, 760: 99,
  770: 99, 780: 99, 790: 99, 800: 99,
};

export function estimatePercentile(scaledScore) {
  const rounded = Math.round(scaledScore / 10) * 10;
  return PERCENTILE_TABLE[Math.min(800, Math.max(200, rounded))] || 50;
}
