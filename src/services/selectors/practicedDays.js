/**
 * practicedDays.js — extract the set of YYYY-MM-DD keys representing
 * calendar days the student practiced, for the CalendarMonth widget's
 * filled-dot rendering.
 *
 * Shares the lastAttemptAt timestamp-parsing logic with sessionAdherence
 * (the selector that produces "X of last 7 days"). Same caveat: this
 * approximates from `practiceProgress` per-section lastAttemptAt, which
 * undercounts when a single section is repeated across days. A precise
 * per-attempt log is deferred to a future batch.
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

function localDateKey(d) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

/**
 * Return the Set of YYYY-MM-DD keys (local time) where the student practiced.
 * Pulls from `practiceProgress` (per-section drill attempts) and optionally
 * from `practiceTestResults` so completing a full mock test counts as a
 * practiced day too.
 *
 * @param {object} args
 * @param {Object<string, {lastAttemptAt: any}>|null|undefined} [args.practiceProgress]
 * @param {Object<string, {attempts?: Array<{completedAt:any}>, lastAttemptAt?:any}>|null|undefined} [args.practiceTestResults]
 * @returns {Set<string>}
 */
export function getPracticedDayKeys({ practiceProgress, practiceTestResults } = {}) {
  const out = new Set();

  if (practiceProgress && typeof practiceProgress === 'object') {
    for (const entry of Object.values(practiceProgress)) {
      const ms = toMillis(entry && entry.lastAttemptAt);
      if (ms !== null) out.add(localDateKey(new Date(ms)));
    }
  }

  if (practiceTestResults && typeof practiceTestResults === 'object') {
    for (const entry of Object.values(practiceTestResults)) {
      // Each test attempt is a separate practice day.
      const attempts = (entry && Array.isArray(entry.attempts)) ? entry.attempts : [];
      for (const a of attempts) {
        const ms = toMillis(a && a.completedAt);
        if (ms !== null) out.add(localDateKey(new Date(ms)));
      }
      // Fallback: if no per-attempt data, use the test's lastAttemptAt.
      if (attempts.length === 0) {
        const ms = toMillis(entry && entry.lastAttemptAt);
        if (ms !== null) out.add(localDateKey(new Date(ms)));
      }
    }
  }

  return out;
}
