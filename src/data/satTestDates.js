import { parseLocalDate } from '../utils/localDate';

/**
 * Canonical list of official College Board SAT administration dates (US).
 *
 * SINGLE SOURCE OF TRUTH. Every place that needs an official SAT date — the
 * post-signup inner-onboarding date chips, the dashboard exam tile, any
 * date-select UI — reads from here. Do not re-declare this list anywhere else.
 *
 * MAINTENANCE: College Board publishes dates ~13 months out. Once per cycle,
 * verify + extend this array against the official page:
 *   https://satsuite.collegeboard.org/sat/dates-deadlines
 * Every consumer updates automatically. Past dates are filtered out at read
 * time (getUpcomingSATDates), and the inner-onboarding screen always offers a
 * native date picker, so a stale list only means fewer quick-pick chips —
 * never a wrong stored date.
 *
 * `date` is 'YYYY-MM-DD' (local) to match the users/{uid}.testDate contract.
 * `name` is the human label used by getSATNameFromDate.
 */
export const SAT_TEST_DATES = [
  { name: 'March 2026 SAT', date: '2026-03-14' },
  { name: 'May 2026 SAT', date: '2026-05-02' },
  { name: 'June 2026 SAT', date: '2026-06-06' },
  { name: 'August 2026 SAT', date: '2026-08-15' },
  { name: 'September 2026 SAT', date: '2026-09-12' },
  { name: 'October 2026 SAT', date: '2026-10-03' },
  { name: 'November 2026 SAT', date: '2026-11-07' },
  { name: 'December 2026 SAT', date: '2026-12-05' },
];

const MONTHS_SHORT = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

/**
 * Official SAT dates on or after `from` (today by default), soonest first.
 * Parses via parseLocalDate so the "is it still upcoming?" comparison happens
 * at local midnight (avoids the `new Date('YYYY-MM-DD')`-is-UTC off-by-one).
 *
 * @param {Date} [from=new Date()] - reference "now"; entries before its day are dropped
 * @returns {{name:string, date:string}[]} upcoming dates in chronological order
 */
export function getUpcomingSATDates(from = new Date()) {
  const cutoff = new Date(from);
  cutoff.setHours(0, 0, 0, 0);
  return SAT_TEST_DATES
    .filter((sat) => {
      const d = parseLocalDate(sat.date);
      return d && d >= cutoff;
    })
    .sort((a, b) => a.date.localeCompare(b.date));
}

/**
 * Map a stored 'YYYY-MM-DD' back to its official SAT name (e.g. "October 2026
 * SAT"), or null if the date isn't an official administration.
 *
 * @param {string} dateStr - 'YYYY-MM-DD'
 * @returns {string|null}
 */
export function getSATNameFromDate(dateStr) {
  const sat = SAT_TEST_DATES.find((s) => s.date === dateStr);
  return sat ? sat.name : null;
}

/**
 * Compact chip label for a date string, e.g. '2026-10-03' → 'Oct 3'.
 * Presentation helper for the onboarding date chips.
 *
 * @param {string} dateStr - 'YYYY-MM-DD'
 * @returns {string}
 */
export function formatSatChipLabel(dateStr) {
  const [, m, d] = String(dateStr).split('-');
  return `${MONTHS_SHORT[Number(m) - 1]} ${Number(d)}`;
}
