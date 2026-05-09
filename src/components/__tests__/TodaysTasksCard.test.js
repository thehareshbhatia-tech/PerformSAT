/**
 * TodaysTasksCard — pure-helper tests.
 *
 * The component itself is a thin presentation layer over `getTodaySlice` +
 * `getSessionAdherence`, both of which are independently tested in their
 * own service-level test files. We test only the pure logic exported from
 * this file (`pickStartableActivity`) here. Visual-state coverage lives in
 * the manual QA list per the eng-review test plan (no @testing-library/
 * react in the codebase yet).
 */

import { pickStartableActivity } from '../TodaysTasksCard';

const act = (overrides = {}) => ({
  type: 'practice',
  activityType: 'practiceSection',
  title: 'Practice: Linear Equations',
  moduleId: 'linear-equations',
  duration: 20,
  ...overrides,
});

describe('pickStartableActivity', () => {
  it('returns null for empty input', () => {
    expect(pickStartableActivity([])).toBeNull();
    expect(pickStartableActivity(null)).toBeNull();
    expect(pickStartableActivity(undefined)).toBeNull();
  });

  it('returns null for non-array input', () => {
    expect(pickStartableActivity('nope')).toBeNull();
    expect(pickStartableActivity({})).toBeNull();
  });

  it('returns the first activity when all activities have a moduleId', () => {
    const a1 = act({ moduleId: 'first' });
    const a2 = act({ moduleId: 'second' });
    expect(pickStartableActivity([a1, a2])).toBe(a1);
  });

  it('skips strategy-only activities (no moduleId) when a startable one follows', () => {
    const strategy = act({ activityType: 'strategyDrill', moduleId: undefined, title: 'Trap drill' });
    const startable = act({ moduleId: 'percents', title: 'Practice: Percents' });
    expect(pickStartableActivity([strategy, startable])).toBe(startable);
  });

  it('falls back to the first activity when EVERY activity is strategy-only (FM-13)', () => {
    // Failure mode #13: silent-fail when first activity has no moduleId.
    // We always render a CTA so the user has something to click; the actual
    // routing handler decides what to do with strategy-only activities.
    const strategyA = act({ activityType: 'strategyDrill', moduleId: undefined, title: 'A' });
    const strategyB = act({ activityType: 'strategyDrill', moduleId: undefined, title: 'B' });
    const result = pickStartableActivity([strategyA, strategyB]);
    expect(result).toBe(strategyA);
  });

  it('handles falsy entries gracefully', () => {
    const a = act({ moduleId: 'real' });
    // null / undefined entries don't crash the find.
    expect(pickStartableActivity([null, undefined, a])).toBe(a);
  });
});
