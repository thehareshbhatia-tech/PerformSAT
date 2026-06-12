/**
 * predictionSummary.js — Day 5 Predicted vs Actual card support.
 *
 * Pure read accessor over a `predictionLog` (the bounded array of
 * predictions stored at progress/{userId}.predictionLog[]) and the
 * `practiceTestResults` map. Surfaces the most recent validated
 * prediction + a hit-rate summary for the card to render.
 *
 * Lives in selectors/ to avoid the Firebase import chain that
 * predictionEngine.js itself drags in (the card has no business
 * depending on Firestore at render time).
 */

// Zero-import sibling selector — blank/abandoned attempts must not be
// presented as "You scored N" (their score is the IRT floor, not a result).
import { isBlankAttempt } from './latestTestStats';

/**
 * @typedef {Object} ValidatedPrediction
 * @property {{ low: number, high: number }} predictions.expectedScoreRange
 * @property {string} createdAt
 * @property {string} createdAfterTestId
 * @property {boolean} resolved
 * @property {string|null} actualTestId
 * @property {{ scoreInRange: boolean|null, actualScore?: number|null,
 *              actualScale?: string|null }|null} accuracy
 *   `actualScore`/`actualScale` (2026-06+) record the validation-time score
 *   the verdict was computed against. Legacy records lack them — their
 *   verdict cannot be trusted next to a re-derived display score.
 */

function pickActualScoreForTest(practiceTestResults, testId) {
  if (!practiceTestResults || !testId) return null;
  const entry = practiceTestResults[testId];
  if (!entry) return null;
  // Most recent NON-BLANK attempt's scaledScore (best fits the prediction
  // validation moment which captured a specific test attempt). A blank
  // submission's floor score was never the validated attempt — dogfood
  // caught the card reading "You scored 400" off one.
  const attempts = Array.isArray(entry.attempts) ? entry.attempts : [];
  for (let i = attempts.length - 1; i >= 0; i--) {
    const a = attempts[i];
    if (a && typeof a.scaledScore === 'number' && !isBlankAttempt(a)) return a.scaledScore;
  }
  if (typeof entry.bestScaledScore === 'number') return entry.bestScaledScore;
  return null;
}

/**
 * Pull the latest validated prediction + summary stats.
 *
 * Returns null when:
 *   - predictionLog is missing or empty
 *   - no entry has been validated (resolved=true, accuracy populated)
 *
 * The card hides itself in that case ("after 2nd test" gate).
 *
 * @param {Array<ValidatedPrediction>|null|undefined} predictionLog
 * @param {Object<string, any>} [practiceTestResults={}]
 * @returns {{
 *   latest: {
 *     low: number, high: number,
 *     actualScore: number|null,
 *     scoreInRange: boolean|null,
 *   } | null,
 *   hits: number,
 *   total: number,
 *   hitRate: number,
 * } | null}
 *   latest.scoreInRange is null when no trustworthy verdict exists for the
 *   displayed score — legacy records (no persisted validation-time score)
 *   and couldn't-compare validations. The card renders no within/outside
 *   clause for null. hits/total count only decided (boolean) verdicts, so
 *   couldn't-compare records don't read as misses.
 */
export function summarizePredictions(predictionLog, practiceTestResults = {}) {
  if (!Array.isArray(predictionLog) || predictionLog.length === 0) return null;

  const validated = predictionLog.filter(
    p => p && p.resolved === true && p.accuracy && p.predictions && p.predictions.expectedScoreRange,
  );
  if (validated.length === 0) return null;

  // Sort by createdAt desc — newest first. Predictions are pushed in order;
  // sorting defends against unordered writes.
  const sorted = [...validated].sort((a, b) => {
    const at = Date.parse(a.createdAt || '');
    const bt = Date.parse(b.createdAt || '');
    if (Number.isNaN(at) || Number.isNaN(bt)) return 0;
    return bt - at;
  });

  const latest = sorted[0];
  const range = latest.predictions.expectedScoreRange;

  // The validation-time score persisted on the record (2026-06+) is THE
  // number the verdict was computed against. The re-derived current-attempt
  // score is only a display fallback for legacy records — and those never
  // get a verdict, because the two numbers can disagree (even in scale).
  const persisted = typeof latest.accuracy.actualScore === 'number'
    ? latest.accuracy.actualScore
    : null;
  const actualScore = persisted !== null
    ? persisted
    : pickActualScoreForTest(practiceTestResults, latest.actualTestId);

  // Hit history counts only decided verdicts on NEW-FORMAT records (the
  // persisted-score gate mirrors the headline's): legacy boolean verdicts
  // are the cross-scale-corrupt class this fix exists to suppress — counting
  // them would print "0 of 1 correct (0%)" under a sentence whose verdict we
  // just suppressed for the same reason. Couldn't-compare (null) records are
  // neither hits nor misses.
  const decided = validated.filter(p => typeof p.accuracy.scoreInRange === 'boolean'
    && typeof p.accuracy.actualScore === 'number');
  const hits = decided.filter(p => p.accuracy.scoreInRange === true).length;
  const total = decided.length;

  return {
    latest: {
      low: range.low,
      high: range.high,
      actualScore,
      scoreInRange: persisted !== null && typeof latest.accuracy.scoreInRange === 'boolean'
        ? latest.accuracy.scoreInRange
        : null,
    },
    hits,
    total,
    hitRate: total > 0 ? hits / total : 0,
  };
}
