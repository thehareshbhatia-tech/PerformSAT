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

/**
 * @typedef {Object} ValidatedPrediction
 * @property {{ low: number, high: number }} predictions.expectedScoreRange
 * @property {string} createdAt
 * @property {string} createdAfterTestId
 * @property {boolean} resolved
 * @property {string|null} actualTestId
 * @property {{ scoreInRange: boolean }|null} accuracy
 */

function pickActualScoreForTest(practiceTestResults, testId) {
  if (!practiceTestResults || !testId) return null;
  const entry = practiceTestResults[testId];
  if (!entry) return null;
  // Most recent attempt's scaledScore (best fits the prediction
  // validation moment which captured a specific test attempt).
  const attempts = Array.isArray(entry.attempts) ? entry.attempts : [];
  const last = attempts[attempts.length - 1];
  if (last && typeof last.scaledScore === 'number') return last.scaledScore;
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
 *     scoreInRange: boolean,
 *   } | null,
 *   hits: number,
 *   total: number,
 *   hitRate: number,
 * } | null}
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
  const actualScore = pickActualScoreForTest(practiceTestResults, latest.actualTestId);

  const hits = validated.filter(p => p.accuracy && p.accuracy.scoreInRange === true).length;
  const total = validated.length;

  return {
    latest: {
      low: range.low,
      high: range.high,
      actualScore,
      scoreInRange: latest.accuracy.scoreInRange === true,
    },
    hits,
    total,
    hitRate: total > 0 ? hits / total : 0,
  };
}
