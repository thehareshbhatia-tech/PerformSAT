/**
 * Versioned scoring data model for the SAT IRT scoring engine.
 *
 * Defines item parameters, module routing metadata, form calibration,
 * and the scored-result contract consumed by the rest of the app.
 */

// Current scoring algorithm version — bump when the calibration or
// algorithm changes so stored results remain interpretable.
export const SCORING_VERSION = '2.0.0';

// ── Section identifiers ────────────────────────────────────────────────────
export const SECTIONS = {
  MATH: 'math',
  RW: 'reading-writing',
};

// ── Difficulty labels (match existing question metadata) ───────────────────
export const DIFFICULTY = {
  EASY: 'easy',
  MEDIUM: 'medium',
  HARD: 'hard',
};

// ── Module route labels ────────────────────────────────────────────────────
export const MODULE_ROUTE = {
  EASY: 'easy',
  HARD: 'hard',
};

// ── Default IRT item parameters ────────────────────────────────────────────
// Used when a question has no calibrated parameters yet.
export const DEFAULT_IRT_PARAMS = {
  [DIFFICULTY.EASY]:   { a: 1.0, b: -1.0, c: 0.25 },
  [DIFFICULTY.MEDIUM]: { a: 1.0, b:  0.0, c: 0.25 },
  [DIFFICULTY.HARD]:   { a: 1.0, b:  1.5, c: 0.25 },
};

// ── CB score_band → IRT b-parameter ────────────────────────────────────────
// Mirrors CollegeBoard's score_band_range_cd (1-7) where 1 is easiest,
// 7 is hardest.  More granular than the easy/medium/hard difficulty buckets
// and used when question content has been pinned to a specific CB band.
export const BAND_TO_B = {
  1: -1.5,
  2: -1.0,
  3: -0.5,
  4: -0.2,
  5:  0.0,
  6:  0.7,
  7:  1.5,
};

// Internal: validate that a band value is an integer in [1, 7].
function isValidBand(band) {
  return (
    typeof band === 'number' &&
    Number.isInteger(band) &&
    band >= 1 &&
    band <= 7
  );
}

/**
 * Build an item parameter set for a single question.
 *
 * Resolution priority for the b-parameter:
 *   1. explicit `calibrationOverrides.b` (if provided)
 *   2. `question.band` mapped via BAND_TO_B (if a valid integer 1-7)
 *   3. `question.difficulty` mapped via DEFAULT_IRT_PARAMS
 *   4. medium default
 *
 * Invalid bands (0, 8, "abc", null, [], etc.) silently fall back to the
 * difficulty-based default — they never throw.
 *
 * The `a` and `c` parameters always come from the difficulty defaults
 * (a=1.0, c=0.25) unless explicitly overridden.  Only `b` is band-driven.
 */
export function resolveItemParams(question, calibrationOverrides = null) {
  const diff = question.difficulty || DIFFICULTY.MEDIUM;
  const defaults = DEFAULT_IRT_PARAMS[diff] || DEFAULT_IRT_PARAMS[DIFFICULTY.MEDIUM];

  // Start from difficulty defaults, then refine `b` from band if available.
  const bandB = isValidBand(question.band) ? BAND_TO_B[question.band] : null;
  const baseB = bandB !== null ? bandB : defaults.b;

  if (calibrationOverrides) {
    return {
      a: calibrationOverrides.a ?? defaults.a,
      b: calibrationOverrides.b ?? baseB,
      c: calibrationOverrides.c ?? defaults.c,
    };
  }
  return {
    a: defaults.a,
    b: baseB,
    c: defaults.c,
  };
}

/**
 * Shape of a scored result stored per practice-test attempt.
 * Factory that creates a default/empty result structure.
 */
export function createScoredResult({
  sectionScore,
  rawScore,
  totalQuestions,
  thetaEstimate,
  standardError,
  routeTaken,
  itemsScored,
  itemsExcluded = 0,
  moduleScores = [],
  diagnosticData = null,
  timedMode = false,
  sectionScores = {},
  isMultiSection = false,
}) {
  return {
    scoringVersion: SCORING_VERSION,
    sectionScore,
    rawScore,
    totalQuestions,
    thetaEstimate,
    standardError,
    routeTaken,
    itemsScored,
    itemsExcluded,
    moduleScores,
    diagnosticData,
    timedMode,

    // Per-section breakdown for full-length SAT (R&W + Math = 400-1600)
    // sectionScores: { 'reading-writing': N, 'math': N }
    sectionScores,
    isMultiSection,

    // Aliases for backward-compatible consumption
    scaledScore: sectionScore,
  };
}
