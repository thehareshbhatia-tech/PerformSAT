/**
 * ReviewItemCard — pure-helper tests.
 *
 * Visual coverage (correct/wrong chip, choice highlighting, explanation
 * render, Try-Similar button) is manual QA per project convention. Tests
 * lock in the pure logic exported from the file: error-meta build with
 * fallback, time formatter.
 */

import { buildErrorMeta, formatTime } from '../ReviewItemCard';

describe('buildErrorMeta', () => {
  it('returns null for null/undefined/empty', () => {
    expect(buildErrorMeta(null)).toBeNull();
    expect(buildErrorMeta(undefined)).toBeNull();
    expect(buildErrorMeta('')).toBeNull();
  });

  it('returns label/icon/description/color for known error classes', () => {
    const meta = buildErrorMeta('conceptual_gap');
    expect(meta).not.toBeNull();
    expect(meta.label).toBeDefined();
    expect(meta.label.toLowerCase()).toContain('conceptual');
    expect(meta.icon).toBeDefined();
    expect(meta.description).toBeDefined();
    expect(meta.color).toBeDefined();
  });

  it('falls back to prettified key for unknown classes', () => {
    const meta = buildErrorMeta('unknown_class_label');
    expect(meta.label).toBe('Unknown Class Label');
    expect(meta.icon).toBe('•');
    expect(meta.color).toBe('#64748b');
    // The fallback description names the prettified class so the user
    // sees what bucket the item landed in.
    expect(meta.description).toContain('Unknown Class Label');
  });

  it('relabels the mixed bucket to "Outside a pattern"', () => {
    const meta = buildErrorMeta('mixed');
    expect(meta.label).toBe('Outside a pattern');
    expect(meta.description.toLowerCase()).toContain('one-off');
  });

  it('returns canonical descriptions for each of the 6 classes', () => {
    // Spot-check 3 of the 6 to verify wiring without locking in copy
    expect(buildErrorMeta('procedural_error').description.length).toBeGreaterThan(10);
    expect(buildErrorMeta('time_pressure').description.length).toBeGreaterThan(10);
    expect(buildErrorMeta('careless_error').description.length).toBeGreaterThan(10);
  });
});

describe('formatTime', () => {
  it('returns em-dash for invalid input', () => {
    expect(formatTime(null)).toBe('—');
    expect(formatTime(undefined)).toBe('—');
    expect(formatTime(-1)).toBe('—');
    expect(formatTime('45')).toBe('—');
  });

  it('formats seconds for < 60', () => {
    expect(formatTime(0)).toBe('0s');
    expect(formatTime(45.7)).toBe('46s');
  });

  it('formats minutes-only when seconds round to 0', () => {
    expect(formatTime(60)).toBe('1m');
    expect(formatTime(180)).toBe('3m');
  });

  it('formats minutes + seconds when both nonzero', () => {
    expect(formatTime(75)).toBe('1m 15s');
    expect(formatTime(125)).toBe('2m 5s');
  });

  it('rounds up to the next minute instead of showing "1m 60s"', () => {
    // 119.6 → 120s → "2m" (was "1m 60s" before rounding-first).
    expect(formatTime(119.6)).toBe('2m');
    expect(formatTime(59.6)).toBe('1m');
  });
});
