/**
 * sessionAdherence.js — "You've practiced 4 of last 7 days" inline metric.
 *
 * Pure read accessor over `practiceProgress` (the per-section progress map
 * Firestore stores under /progress/{userId}). Lives in selectors/ alongside
 * the other dashboard-card derived-state helpers (e.g., weaknesses.js).
 *
 * The plan (`Day 4` of the Acely-parity batch) called for this to "reuse
 * dailyReviewEngine.js:74-106" — that's the streak primitives. Conceptually
 * adherence and streak share the "did the user show up?" idea, but the
 * implementations are different (streak = consecutive days from localStorage,
 * adherence = unique days from practiceProgress timestamps), and bundling
 * adherence into dailyReviewEngine.js would drag its Firebase import chain
 * into adherence's test file. Cleaner to keep them separate.
 *
 * Approximation note:
 *   `practiceProgress` keeps one entry per `${moduleId}-${sectionName}`, with
 *   `lastAttemptAt` updated on each attempt. If a student re-attempts the
 *   SAME section on different days, only the latest timestamp survives.
 *   For users who spread attempts across multiple sections this reads
 *   correctly; a single-section repeater undercounts. A precise per-attempt
 *   log is deferred to a future batch (TODOS).
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
  // YYYY-MM-DD in local time so an 11pm Tuesday session and a 1am Wednesday
  // session count as two distinct days, matching user mental model.
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

/**
 * Count unique calendar days the student practiced within the last N days.
 *
 * @param {Object<string, {lastAttemptAt: any}>|null|undefined} practiceProgress
 * @param {{ days?: number, now?: Date }} [options]
 * @returns {{ uniqueDays: number, totalDays: number, label: string }}
 */
export function getSessionAdherence(practiceProgress, options = {}) {
  const days = (typeof options.days === 'number' && options.days > 0) ? options.days : 7;
  const now = options.now instanceof Date ? options.now : new Date();

  const empty = {
    uniqueDays: 0,
    totalDays: days,
    label: `0 of last ${days} days`,
  };

  if (!practiceProgress || typeof practiceProgress !== 'object') return empty;

  const entries = Object.values(practiceProgress);
  if (entries.length === 0) return empty;

  // Sliding window: from (days-1) days ago at start-of-day local time, to now.
  const startOfWindow = new Date(now);
  startOfWindow.setHours(0, 0, 0, 0);
  startOfWindow.setDate(startOfWindow.getDate() - (days - 1));
  const cutoffMs = startOfWindow.getTime();

  const dayKeys = new Set();
  for (const entry of entries) {
    const ms = toMillis(entry && entry.lastAttemptAt);
    if (ms === null || ms < cutoffMs) continue;
    dayKeys.add(localDateKey(new Date(ms)));
  }

  const uniqueDays = dayKeys.size;
  return {
    uniqueDays,
    totalDays: days,
    label: `${uniqueDays} of last ${days} days`,
  };
}
