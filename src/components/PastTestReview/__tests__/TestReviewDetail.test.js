/**
 * TestReviewDetail — pure-helper tests.
 *
 * Visual coverage is manual QA per project convention (no @testing-library/
 * react in this codebase). Tests below lock in the pure logic exported
 * from the file: filter resolution, error-class chip building, time format.
 */

import {
  selectVisibleItems,
  buildErrorClassChips,
  formatTime,
} from '../TestReviewDetail';

describe('selectVisibleItems', () => {
  const allItems = [{ key: '0-0' }, { key: '0-1' }, { key: '0-2' }];
  const wrongItems = [{ key: '0-1' }, { key: '0-2' }];
  const groups = {
    conceptual_gap: [{ key: '0-1' }],
    procedural_error: [{ key: '0-2' }],
  };

  it('returns allItems for filter "all"', () => {
    expect(selectVisibleItems('all', allItems, wrongItems, groups)).toBe(allItems);
  });

  it('returns wrongItems for filter "wrong"', () => {
    expect(selectVisibleItems('wrong', allItems, wrongItems, groups)).toBe(wrongItems);
  });

  it('returns the matching error class group', () => {
    const result = selectVisibleItems('conceptual_gap', allItems, wrongItems, groups);
    expect(result).toEqual([{ key: '0-1' }]);
  });

  it('returns [] for an unknown filter', () => {
    expect(selectVisibleItems('unknown_class', allItems, wrongItems, groups)).toEqual([]);
  });

  it('handles missing input arrays gracefully', () => {
    expect(selectVisibleItems('all', null, null, null)).toEqual([]);
    expect(selectVisibleItems('wrong', null, null, null)).toEqual([]);
    expect(selectVisibleItems('any_class', null, null, null)).toEqual([]);
  });
});

describe('buildErrorClassChips', () => {
  it('returns [] for null/undefined/empty input', () => {
    expect(buildErrorClassChips(null)).toEqual([]);
    expect(buildErrorClassChips(undefined)).toEqual([]);
    expect(buildErrorClassChips({})).toEqual([]);
  });

  it('drops empty groups', () => {
    const out = buildErrorClassChips({
      conceptual_gap: [{ key: '0-1' }],
      careless_error: [],
      time_pressure: null,
    });
    expect(out.map(c => c.cls)).toEqual(['conceptual_gap']);
  });

  it('sorts chips by count descending', () => {
    const out = buildErrorClassChips({
      conceptual_gap: [{ k: 1 }],
      careless_error: [{ k: 1 }, { k: 2 }, { k: 3 }],
      time_pressure: [{ k: 1 }, { k: 2 }],
    });
    expect(out.map(c => c.cls)).toEqual(['careless_error', 'time_pressure', 'conceptual_gap']);
    expect(out.map(c => c.count)).toEqual([3, 2, 1]);
  });

  it('uses ERROR_TYPE_LABELS / ICONS / COLORS when available', () => {
    const out = buildErrorClassChips({ conceptual_gap: [{ k: 1 }] });
    expect(out[0]).toHaveProperty('label');
    expect(out[0]).toHaveProperty('icon');
    expect(out[0]).toHaveProperty('color');
    expect(out[0].count).toBe(1);
    // Label should be human-readable, not the raw key
    expect(out[0].label.toLowerCase()).toContain('conceptual');
  });

  it('falls back to prettified key for unknown error classes', () => {
    const out = buildErrorClassChips({ unknown_class_label: [{ k: 1 }] });
    expect(out[0].label).toBe('Unknown Class Label');
    expect(out[0].icon).toBe('•');
  });
});

describe('formatTime', () => {
  it('returns em-dash for invalid input', () => {
    expect(formatTime(null)).toBe('—');
    expect(formatTime(undefined)).toBe('—');
    expect(formatTime(-5)).toBe('—');
    expect(formatTime('30')).toBe('—');
  });

  it('formats seconds-only when < 60', () => {
    expect(formatTime(0)).toBe('0s');
    expect(formatTime(12.5)).toBe('13s');
    expect(formatTime(45)).toBe('45s');
    expect(formatTime(59)).toBe('59s');
  });

  it('formats minutes-only when seconds round to 0', () => {
    expect(formatTime(60)).toBe('1m');
    expect(formatTime(120)).toBe('2m');
    expect(formatTime(120.4)).toBe('2m');
  });

  it('formats minutes + seconds when both present', () => {
    expect(formatTime(75)).toBe('1m 15s');
    expect(formatTime(90.7)).toBe('1m 31s');
    expect(formatTime(125)).toBe('2m 5s');
  });

  it('rounds up to the next minute instead of showing "1m 60s"', () => {
    // 119.6 → 120s → "2m" (was "1m 60s" before rounding-first).
    expect(formatTime(119.6)).toBe('2m');
    expect(formatTime(119.5)).toBe('2m');
    expect(formatTime(59.6)).toBe('1m');
  });
});
