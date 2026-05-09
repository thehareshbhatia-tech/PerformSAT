/**
 * recentTest.js — pick the most recently attempted test from
 * `practiceTestResults`. Pure selector with no Firebase dependency, so it's
 * unit-testable in isolation.
 *
 * Lives in selectors/ alongside the other dashboard-card derived-state
 * helpers (weaknesses, sessionAdherence). The async snapshot/AI-narrative
 * loader that goes WITH this stays in `services/diagnosticReportLoader.js`
 * because it pulls Firestore.
 */

function toMillis(ts) {
  if (!ts) return null;
  if (typeof ts === 'number') return ts;
  if (ts instanceof Date) return ts.getTime();
  if (typeof ts === 'object') {
    if (typeof ts.toMillis === 'function') return ts.toMillis();
    if (typeof ts.seconds === 'number') return ts.seconds * 1000;
  }
  if (typeof ts === 'string') {
    const t = Date.parse(ts);
    return Number.isFinite(t) ? t : null;
  }
  return null;
}

/**
 * Find the test+lastAttempt pair with the latest `completedAt` (or
 * `lastAttemptAt` fallback) timestamp.
 *
 * @param {Object<string, {attempts?: Array, lastAttemptAt?: any}>} practiceTestResults
 * @returns {{ testId: string|null, lastAttempt: object|null }}
 */
export function pickMostRecentTest(practiceTestResults) {
  if (!practiceTestResults || typeof practiceTestResults !== 'object') {
    return { testId: null, lastAttempt: null };
  }

  let bestTestId = null;
  let bestLastAttempt = null;
  let bestMs = -Infinity;

  for (const [testId, results] of Object.entries(practiceTestResults)) {
    const attempts = (results && Array.isArray(results.attempts)) ? results.attempts : [];
    if (attempts.length === 0) continue;
    const last = attempts[attempts.length - 1];
    const ms = toMillis(last.completedAt) ?? toMillis(results.lastAttemptAt);
    if (ms !== null && ms > bestMs) {
      bestMs = ms;
      bestTestId = testId;
      bestLastAttempt = last;
    }
  }

  return { testId: bestTestId, lastAttempt: bestLastAttempt };
}
