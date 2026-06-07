import { getDaysUntilTest } from '../daysUntilTest';

// Boundary tests are CRITICAL (eng review): three surfaces render this count
// simultaneously (CalendarMonth "TODAY", hero subtitle, goal tile) — they must
// agree at every time of day.
describe('getDaysUntilTest', () => {
  const at = (y, m, d, h = 0, min = 0) => new Date(y, m - 1, d, h, min);

  it('returns 0 when the test is today, at any time of day', () => {
    expect(getDaysUntilTest('2026-06-06', at(2026, 6, 6, 0, 1))).toBe(0);
    expect(getDaysUntilTest('2026-06-06', at(2026, 6, 6, 12, 0))).toBe(0);
    expect(getDaysUntilTest('2026-06-06', at(2026, 6, 6, 23, 59))).toBe(0);
  });

  it('returns 1 when the test is tomorrow, even late in the evening', () => {
    expect(getDaysUntilTest('2026-06-07', at(2026, 6, 6, 18, 0))).toBe(1);
    expect(getDaysUntilTest('2026-06-07', at(2026, 6, 6, 23, 59))).toBe(1);
  });

  it('returns -1 when the test was yesterday', () => {
    expect(getDaysUntilTest('2026-06-05', at(2026, 6, 6, 0, 1))).toBe(-1);
  });

  it('counts a multi-week span exactly', () => {
    expect(getDaysUntilTest('2026-10-03', at(2026, 6, 6))).toBe(119);
  });

  it('is exact across the US fall-back DST boundary (the old ceil over-counted)', () => {
    // Nov 1 2026 is the US fall-back date; Oct 31 → Nov 2 spans a 25-hour day.
    expect(getDaysUntilTest('2026-11-02', at(2026, 10, 31))).toBe(2);
    // And the spring-forward 23-hour day (Mar 8 2026).
    expect(getDaysUntilTest('2026-03-09', at(2026, 3, 7))).toBe(2);
  });

  it('returns null for missing or unparseable input', () => {
    expect(getDaysUntilTest(null)).toBeNull();
    expect(getDaysUntilTest(undefined)).toBeNull();
    expect(getDaysUntilTest('')).toBeNull();
    expect(getDaysUntilTest('not-a-date')).toBeNull();
  });

  it('accepts a Date passthrough for testDate', () => {
    expect(getDaysUntilTest(at(2026, 6, 8), at(2026, 6, 6, 22, 0))).toBe(2);
  });

  it('does not mutate the caller-supplied today Date', () => {
    const today = at(2026, 6, 6, 15, 30);
    getDaysUntilTest('2026-06-07', today);
    expect(today.getHours()).toBe(15);
    expect(today.getMinutes()).toBe(30);
  });
});
