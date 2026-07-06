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
    const from = new Date(2026, 6, 6); // Jul 6 2026, local
    const upcoming = getUpcomingSATDates(from);
    expect(upcoming.length).toBeGreaterThan(0);
    // all on/after the cutoff day
    for (const s of upcoming) expect(s.date >= '2026-07-06').toBe(true);
    // none of the spring 2026 dates survive
    expect(upcoming.find((s) => s.date === '2026-03-14')).toBeUndefined();
    // sorted ascending
    const sorted = [...upcoming].sort((a, b) => a.date.localeCompare(b.date));
    expect(upcoming).toEqual(sorted);
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
