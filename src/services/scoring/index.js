/**
 * SAT IRT Scoring — public API.
 *
 * Every consumer of scoring logic should import from this module.
 * No scoring tables or conversion functions should exist elsewhere.
 */

// Core scoring
export { scoreTest, convertToSATScore, isAnswerCorrect, estimatePercentile } from './irtEngine';

// Schema / constants
export { SCORING_VERSION, SECTIONS, DIFFICULTY, MODULE_ROUTE, createScoredResult } from './scoringSchema';

// Calibration management (for app-init or admin tooling)
export {
  loadItemCalibration,
  loadRoutingOverrides,
  loadScaleOverrides,
  getItemParams,
  determineRoute,
  thetaToScaledScore,
  PERCENTILE_TABLE,
} from './calibration';
