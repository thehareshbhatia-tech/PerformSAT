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

/**
 * Build an item parameter set for a single question.
 * Merges any calibrated overrides on top of difficulty-based defaults.
 */
export function resolveItemParams(question, calibrationOverrides = null) {
  const diff = question.difficulty || DIFFICULTY.MEDIUM;
  const defaults = DEFAULT_IRT_PARAMS[diff] || DEFAULT_IRT_PARAMS[DIFFICULTY.MEDIUM];

  if (calibrationOverrides) {
    return {
      a: calibrationOverrides.a ?? defaults.a,
      b: calibrationOverrides.b ?? defaults.b,
      c: calibrationOverrides.c ?? defaults.c,
    };
  }
  return { ...defaults };
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

    // Aliases for backward-compatible consumption
    scaledScore: sectionScore,
  };
}
