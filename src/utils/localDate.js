/**
 * localDate.js — parse a date-only string as LOCAL time.
 *
 * `new Date('2026-08-22')` parses as UTC midnight, which shifts to the
 * previous calendar day in any negative-offset timezone — so a student who
 * picked Aug 22 as their test date saw "August 21" and an off-by-one
 * days-until-exam count everywhere. Parse the components explicitly to
 * build a local-midnight Date instead.
 *
 * Use this for any user-entered date-only value (test dates, deadlines).
 *
 * @param {string|Date|null|undefined} value - 'YYYY-MM-DD' (or Date passthrough)
 * @returns {Date|null} local-midnight Date, or null if unparseable
 */
export function parseLocalDate(value) {
  if (!value) return null;
  if (value instanceof Date) return Number.isNaN(value.getTime()) ? null : value;
  if (typeof value !== 'string') return null;
  const m = value.match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (m) {
    const d = new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3]));
    return Number.isNaN(d.getTime()) ? null : d;
  }
  // Non-ISO strings (legacy values): fall back to native parsing.
  const d = new Date(value);
  return Number.isNaN(d.getTime()) ? null : d;
}
