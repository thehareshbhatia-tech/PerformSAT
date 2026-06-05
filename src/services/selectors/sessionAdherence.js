/**
 * sessionAdherence.js — "You've practiced 4 of last 7 days" inline metric.
 *
 * Pure read accessor over the same sources as the CalendarMonth widget:
 * `practiceProgress` (per-section drill attempts) AND `practiceTestResults`
 * (full mock-test attempts). Both surfaces MUST read the same day set —
 * they previously diverged (calendar said "2 days practiced" while this
 * said "0 of last 7 days" for a student who only took tests), which reads
 * as the app contradicting itself. Day extraction is delegated to
 * `getPracticedDayKeys` so the two can never drift again.
 *
 * Approximation note:
 *   `practiceProgress` keeps one entry per `${moduleId}-${sectionName}`, with
 *   `lastAttemptAt` updated on each attempt. If a student re-attempts the
 *   SAME section on different days, only the latest timestamp survives.
 *   For users who spread attempts across multiple sections this reads
 *   correctly; a single-section repeater undercounts. A precise per-attempt
 *   log is deferred to a future batch (TODOS).
 */

import { getPracticedDayKeys } from './practicedDays';

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
 * Counts drill sessions (`practiceProgress`) and full practice tests
 * (`practiceTestResults`) — the same definition CalendarMonth renders.
 *
 * Accepts either the new bundle form `{ practiceProgress, practiceTestResults }`
 * or (legacy) the bare practiceProgress map.
 *
 * @param {{ practiceProgress?: object, practiceTestResults?: object }
 *         | Object<string, {lastAttemptAt: any}>
 *         | null | undefined} sources
 * @param {{ days?: number, now?: Date }} [options]
 * @returns {{ uniqueDays: number, totalDays: number, label: string }}
 */
export function getSessionAdherence(sources, options = {}) {
  const days = (typeof options.days === 'number' && options.days > 0) ? options.days : 7;
  const now = options.now instanceof Date ? options.now : new Date();

  const empty = {
    uniqueDays: 0,
    totalDays: days,
    label: `0 of last ${days} days`,
  };

  if (!sources || typeof sources !== 'object') return empty;

  // Bundle vs legacy bare-map detection: the bundle form names its sources;
  // a practiceProgress map's values are progress entries, not source maps.
  const isBundle = 'practiceProgress' in sources || 'practiceTestResults' in sources;
  const bundle = isBundle ? sources : { practiceProgress: sources };

  const allDayKeys = getPracticedDayKeys(bundle);
  if (allDayKeys.size === 0) return empty;

  // Sliding window: from (days-1) days ago at start-of-day local time, to now.
  // YYYY-MM-DD keys compare correctly as strings.
  const startOfWindow = new Date(now);
  startOfWindow.setHours(0, 0, 0, 0);
  startOfWindow.setDate(startOfWindow.getDate() - (days - 1));
  const startKey = localDateKey(startOfWindow);
  const nowKey = localDateKey(now);

  let uniqueDays = 0;
  for (const key of allDayKeys) {
    if (key >= startKey && key <= nowKey) uniqueDays++;
  }

  return {
    uniqueDays,
    totalDays: days,
    label: `${uniqueDays} of last ${days} days`,
  };
}
