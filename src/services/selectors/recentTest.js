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
    // Pick the newest attempt by completedAt, ORDER-INDEPENDENT. The array
    // orientation is not a stable contract: legacy rows appended oldest-first,
    // but practiceTestService's trimAttempts re-sorts newest-first (and keeps
    // diagnosticData only on that newest entry) — the old `attempts[len - 1]`
    // read returned the OLDEST kept attempt on trimmed rows, with its
    // diagnosticData stripped.
    let candidate = null;
    let candidateMs = -Infinity;
    for (const a of attempts) {
      const ms = toMillis(a?.completedAt);
      if (ms !== null && ms > candidateMs) {
        candidate = a;
        candidateMs = ms;
      }
    }
    if (!candidate) {
      // No attempt carries a usable completedAt — fall back to the last
      // element + the row-level lastAttemptAt (legacy shape).
      candidate = attempts[attempts.length - 1];
      candidateMs = toMillis(results.lastAttemptAt) ?? -Infinity;
    }
    if (candidateMs !== -Infinity && candidateMs > bestMs) {
      bestMs = candidateMs;
      bestTestId = testId;
      bestLastAttempt = candidate;
    }
  }

  return { testId: bestTestId, lastAttempt: bestLastAttempt };
}
