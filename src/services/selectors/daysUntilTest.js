import { parseLocalDate } from '../../utils/localDate';

/**
 * daysUntilTest.js — ONE day-count for the SAT date, everywhere.
 *
 * Before this selector the computation lived in three places with two
 * shapes: CalendarMonth used Math.round on day-keys, StudentDashboard and
 * StudyPlanDashboard used Math.ceil on midnight-normalized dates. With both
 * dates at local midnight the results were identical — EXCEPT across a
 * fall-back DST boundary, where a 25-hour "day" made ceil report one day
 * too many. Math.round on midnight-normalized dates is exact for normal
 * days and correct across DST.
 *
 * Returns the SIGNED day count; each call site keeps its own display
 * mapping ("Test day is TODAY" / "in N days" / "Was N days ago").
 *
 * @param {string|Date|null|undefined} testDate - 'YYYY-MM-DD' (or Date)
 * @param {Date} [today] - injection point for tests; defaults to now
 * @returns {number|null} 0 = today, positive = future, negative = past;
 *   null when testDate is missing/unparseable
 */
export function getDaysUntilTest(testDate, today = new Date()) {
  if (!testDate) return null;
  const test = parseLocalDate(testDate);
  if (!test) return null;
  const t = today instanceof Date && !Number.isNaN(today.getTime()) ? new Date(today) : new Date();
  t.setHours(0, 0, 0, 0);
  test.setHours(0, 0, 0, 0);
  return Math.round((test - t) / 86400000);
}
