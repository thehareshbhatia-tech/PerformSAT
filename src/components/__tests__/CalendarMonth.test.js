/**
 * CalendarMonth — pure-helper tests for buildMonthCells.
 *
 * The component itself is presentational SVG-ish — without RTL we don't
 * mount it. The grid-construction helper that drives it (buildMonthCells)
 * is pure and the layout-correctness contract worth locking in.
 */

import { buildMonthCells } from '../CalendarMonth';

describe('buildMonthCells', () => {
  it('returns exactly 42 cells (6 rows × 7 cols)', () => {
    const cells = buildMonthCells(2026, 4); // May 2026
    expect(cells).toHaveLength(42);
  });

  it('starts on the Sunday on or before the 1st of the month', () => {
    const cells = buildMonthCells(2026, 4); // May 2026 — May 1 is a Friday
    // The first row should run Sunday Apr 26 → Saturday May 2.
    expect(cells[0].day).toBe(26);
    expect(cells[0].inMonth).toBe(false);
    expect(cells[5].day).toBe(1);
    expect(cells[5].inMonth).toBe(true);
  });

  it('marks adjacent-month dates inMonth: false', () => {
    const cells = buildMonthCells(2026, 4); // May 2026
    const inMonthCount = cells.filter(c => c.inMonth).length;
    // May has 31 days
    expect(inMonthCount).toBe(31);
  });

  it('produces YYYY-MM-DD-style keys', () => {
    const cells = buildMonthCells(2026, 4);
    const may1 = cells.find(c => c.day === 1 && c.inMonth);
    expect(may1.key).toBe('2026-05-01');
  });

  it('keys sort chronologically', () => {
    const cells = buildMonthCells(2026, 4);
    const sorted = [...cells].sort((a, b) => a.key.localeCompare(b.key));
    expect(sorted.map(c => c.key)).toEqual(cells.map(c => c.key));
  });

  it('every cell has an aria label', () => {
    const cells = buildMonthCells(2026, 4);
    for (const c of cells) {
      expect(typeof c.aria).toBe('string');
      expect(c.aria.length).toBeGreaterThan(0);
    }
  });

  it('handles month boundaries across years (December → January)', () => {
    const dec = buildMonthCells(2026, 11); // December 2026
    const lastInMonth = dec.filter(c => c.inMonth).pop();
    expect(lastInMonth.day).toBe(31);
    expect(lastInMonth.key).toBe('2026-12-31');

    const jan = buildMonthCells(2027, 0); // January 2027
    const firstInMonth = jan.find(c => c.inMonth);
    expect(firstInMonth.day).toBe(1);
    expect(firstInMonth.key).toBe('2027-01-01');
  });

  it('handles leap-year February (2028 has 29 days)', () => {
    const feb = buildMonthCells(2028, 1);
    const inMonth = feb.filter(c => c.inMonth);
    expect(inMonth).toHaveLength(29);
  });

  it('handles a 1st-of-month that falls on Sunday (no padding)', () => {
    // November 2026 — Nov 1 is a Sunday.
    const nov = buildMonthCells(2026, 10);
    expect(nov[0].day).toBe(1);
    expect(nov[0].inMonth).toBe(true);
  });
});
