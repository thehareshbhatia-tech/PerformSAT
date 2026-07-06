import {
  SAT_TEST_DATES,
  getUpcomingSATDates,
  getSATNameFromDate,
  formatSatChipLabel,
} from '../satTestDates';

describe('satTestDates canonical source', () => {
  test('the list is non-empty and every entry has a YYYY-MM-DD date + name', () => {
    expect(SAT_TEST_DATES.length).toBeGreaterThan(0);
    for (const s of SAT_TEST_DATES) {
      expect(s.date).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(typeof s.name).toBe('string');
      expect(s.name.length).toBeGreaterThan(0);
    }
  });

  test('getUpcomingSATDates drops past dates and returns chronological order', () => {
    const from = new Date(2026, 10, 15); // Nov 15 2026, local — after the Nov 7 date
    const upcoming = getUpcomingSATDates(from);
    expect(upcoming.length).toBeGreaterThan(0);
    // all on/after the cutoff day
    for (const s of upcoming) expect(s.date >= '2026-11-15').toBe(true);
    // Aug–Nov 2026 dropped, Dec 2026 survives and leads
    expect(upcoming.find((s) => s.date === '2026-08-22')).toBeUndefined();
    expect(upcoming[0].date).toBe('2026-12-05');
    // sorted ascending
    const sorted = [...upcoming].sort((a, b) => a.date.localeCompare(b.date));
    expect(upcoming).toEqual(sorted);
  });

  test('the confirmed 2026 dates match the official College Board schedule', () => {
    const byName = Object.fromEntries(SAT_TEST_DATES.map((s) => [s.name, s.date]));
    expect(byName['August 2026 SAT']).toBe('2026-08-22');
    expect(byName['September 2026 SAT']).toBe('2026-09-12');
    expect(byName['October 2026 SAT']).toBe('2026-10-03');
    expect(byName['November 2026 SAT']).toBe('2026-11-07');
    expect(byName['December 2026 SAT']).toBe('2026-12-05');
  });

  test('registration deadlines are valid and fall before the test date; anticipated dates carry no deadlines', () => {
    for (const s of SAT_TEST_DATES) {
      if (s.anticipated) {
        expect(s.regDeadline).toBeUndefined();
        expect(s.lateDeadline).toBeUndefined();
        continue;
      }
      expect(s.regDeadline).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(s.lateDeadline).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(s.regDeadline < s.date).toBe(true);        // register before test day
      expect(s.regDeadline <= s.lateDeadline).toBe(true); // late window is after regular
      expect(s.lateDeadline < s.date).toBe(true);
    }
  });

  test('getUpcomingSATDates includes a date falling exactly on the cutoff day', () => {
    const onOct3 = new Date(2026, 9, 3); // Oct 3 2026 — an official date
    const upcoming = getUpcomingSATDates(onOct3);
    expect(upcoming[0].date).toBe('2026-10-03');
  });

  test('getSATNameFromDate maps known dates and returns null otherwise', () => {
    expect(getSATNameFromDate('2026-10-03')).toBe('October 2026 SAT');
    expect(getSATNameFromDate('2099-01-01')).toBeNull();
    expect(getSATNameFromDate('')).toBeNull();
  });

  test('formatSatChipLabel renders a compact month + day', () => {
    expect(formatSatChipLabel('2026-10-03')).toBe('Oct 3');
    expect(formatSatChipLabel('2026-11-07')).toBe('Nov 7');
  });
});
