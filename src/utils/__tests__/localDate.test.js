import { parseLocalDate } from '../localDate';

describe('parseLocalDate', () => {
  it('parses YYYY-MM-DD as LOCAL midnight (no UTC shift)', () => {
    const d = parseLocalDate('2026-08-22');
    expect(d.getFullYear()).toBe(2026);
    expect(d.getMonth()).toBe(7);
    expect(d.getDate()).toBe(22); // the regression: UTC parse showed 21 in negative offsets
    expect(d.getHours()).toBe(0);
  });

  it('passes through Date instances', () => {
    const src = new Date(2026, 7, 22);
    expect(parseLocalDate(src)).toBe(src);
  });

  it('returns null for empty/invalid input', () => {
    expect(parseLocalDate(null)).toBeNull();
    expect(parseLocalDate(undefined)).toBeNull();
    expect(parseLocalDate('')).toBeNull();
    expect(parseLocalDate('not-a-date')).toBeNull();
    expect(parseLocalDate(42)).toBeNull();
  });

  it('handles ISO strings with a time component via the date part', () => {
    const d = parseLocalDate('2026-08-22T15:30:00Z');
    expect(d.getDate()).toBe(22);
    expect(d.getMonth()).toBe(7);
  });
});
