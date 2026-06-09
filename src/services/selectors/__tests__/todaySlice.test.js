/**
 * todaySlice.test.js — countRemainingTodayTasks (the Dashboard tab badge).
 * Pins the stale-badge fix: for 'all-done' slices, `slice.activities` holds
 * the COMPLETED list (getTodaySlice contract), so the badge must derive
 * from the slice KIND, not from `activities.length`.
 */

import { getTodaySlice, countRemainingTodayTasks } from '../todaySlice';

const act = (day, completed = false, over = {}) => ({
  day,
  type: 'practice',
  title: 'Drill',
  completed,
  ...over,
});

describe('countRemainingTodayTasks', () => {
  test('null / malformed slice → 0', () => {
    expect(countRemainingTodayTasks(null)).toBe(0);
    expect(countRemainingTodayTasks(undefined)).toBe(0);
    expect(countRemainingTodayTasks({})).toBe(0);
  });

  test("'ready' counts the (all-incomplete) activities", () => {
    const slice = getTodaySlice(
      { weeks: [{ weekNumber: 1, activities: [act('Monday'), act('Monday')] }] },
      'Monday',
    );
    expect(slice.kind).toBe('ready');
    expect(countRemainingTodayTasks(slice)).toBe(2);
  });

  test("'partial' counts only the remaining activities", () => {
    const slice = getTodaySlice(
      { weeks: [{ weekNumber: 1, activities: [act('Monday', true), act('Monday')] }] },
      'Monday',
    );
    expect(slice.kind).toBe('partial');
    expect(countRemainingTodayTasks(slice)).toBe(1);
  });

  test("'all-done' → 0 even though slice.activities holds the completed list (stale-badge fix)", () => {
    const slice = getTodaySlice(
      {
        weeks: [{
          weekNumber: 1,
          activities: [act('Monday', true), act('Monday', true), act('Tuesday')],
        }],
      },
      'Monday',
    );
    expect(slice.kind).toBe('all-done');
    expect(slice.activities.length).toBe(2); // the trap the old badge fell into
    expect(countRemainingTodayTasks(slice)).toBe(0);
  });

  test("'rest-day', 'plan-complete', 'no-plan', 'refreshing' → 0", () => {
    const restDay = getTodaySlice(
      { weeks: [{ weekNumber: 1, activities: [act('Tuesday')] }] },
      'Monday',
    );
    expect(restDay.kind).toBe('rest-day');
    expect(countRemainingTodayTasks(restDay)).toBe(0);

    const planComplete = getTodaySlice(
      { weeks: [{ weekNumber: 1, activities: [act('Monday', true)] }] },
      'Monday',
    );
    expect(planComplete.kind).toBe('plan-complete');
    expect(countRemainingTodayTasks(planComplete)).toBe(0);

    expect(countRemainingTodayTasks(getTodaySlice(null, 'Monday'))).toBe(0);
    expect(countRemainingTodayTasks(getTodaySlice({ isRefreshing: true }, 'Monday'))).toBe(0);
  });
});
