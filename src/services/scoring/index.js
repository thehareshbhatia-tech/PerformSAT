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

// Domain inference
export { inferDomain, SAT_MATH_DOMAINS, DOMAIN_DISPLAY_NAMES, getDomainDisplayOrder } from './domainInference';

// Diagnostic → UI adapter
export { adaptDiagnosticForUI, mergeAiIntoReport } from './diagnosticAdapter';

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
