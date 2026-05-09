import { getTodaySlice } from '../studyPlanGenerator';

// ── Helpers ──────────────────────────────────────────────────────────────────

const act = (overrides = {}) => ({
  day: 'Wednesday',
  activityType: 'practiceSection',
  moduleId: 'linear-equations',
  completed: false,
  ...overrides,
});

const week = (weekNumber, activities) => ({
  weekNumber,
  title: `Week ${weekNumber}`,
  activities,
});

const plan = (weeks) => ({ weeks });

// ── kind: no-plan ────────────────────────────────────────────────────────────

describe('getTodaySlice — no-plan paths', () => {
  it('returns no-plan when plan is null', () => {
    const r = getTodaySlice(null, 'Wednesday');
    expect(r.kind).toBe('no-plan');
    expect(r.activities).toEqual([]);
    expect(r.day).toBe('Wednesday');
    expect(r.weekNumber).toBeNull();
  });

  it('returns no-plan when plan is undefined', () => {
    expect(getTodaySlice(undefined, 'Wednesday').kind).toBe('no-plan');
  });

  it('returns no-plan when plan has no weeks array', () => {
    expect(getTodaySlice({}, 'Wednesday').kind).toBe('no-plan');
    expect(getTodaySlice({ weeks: null }, 'Wednesday').kind).toBe('no-plan');
  });

  it('returns no-plan when plan.weeks is empty', () => {
    expect(getTodaySlice({ weeks: [] }, 'Wednesday').kind).toBe('no-plan');
  });
});

// ── kind: refreshing ─────────────────────────────────────────────────────────

describe('getTodaySlice — refreshing', () => {
  it('returns refreshing when plan.isRefreshing === true', () => {
    const r = getTodaySlice({ weeks: [week(1, [act()])], isRefreshing: true }, 'Wednesday');
    expect(r.kind).toBe('refreshing');
    expect(r.activities).toEqual([]);
  });

  it('does NOT return refreshing for falsy values other than literal true', () => {
    // Defensive — only the explicit `true` flag should trip refreshing.
    expect(getTodaySlice({ weeks: [week(1, [act()])], isRefreshing: 1 }, 'Wednesday').kind)
      .not.toBe('refreshing');
  });
});

// ── kind: plan-complete ──────────────────────────────────────────────────────

describe('getTodaySlice — plan-complete', () => {
  it('returns plan-complete when every activity in every week is completed', () => {
    const p = plan([
      week(1, [act({ completed: true }), act({ completed: true, day: 'Friday' })]),
      week(2, [act({ completed: true })]),
    ]);
    const r = getTodaySlice(p, 'Wednesday');
    expect(r.kind).toBe('plan-complete');
    expect(r.activities).toEqual([]);
    expect(r.weekNumber).toBe(2);
  });
});

// ── kind: rest-day ───────────────────────────────────────────────────────────

describe('getTodaySlice — rest-day', () => {
  it('returns rest-day when current week has activities but none scheduled today', () => {
    const p = plan([week(1, [act({ day: 'Monday' }), act({ day: 'Friday' })])]);
    const r = getTodaySlice(p, 'Wednesday');
    expect(r.kind).toBe('rest-day');
    expect(r.weekNumber).toBe(1);
    expect(r.activities).toEqual([]);
    expect(r.nextScheduledDay).toBe('Friday');
  });

  it('Sunday-cycles to find next scheduled day across the week boundary', () => {
    const p = plan([week(1, [act({ day: 'Monday' }), act({ day: 'Sunday' })])]);
    const r = getTodaySlice(p, 'Saturday');
    expect(r.kind).toBe('rest-day');
    // Saturday → Sunday is the next scheduled day
    expect(r.nextScheduledDay).toBe('Sunday');
  });

  it('nextScheduledDay is null when no other day in the week has activities', () => {
    // Single-day week: only Wednesday has activities, but it's all completed.
    // Day-asked-for is Thursday — rest-day with no next day.
    const p = plan([week(1, [act({ day: 'Wednesday', completed: false })])]);
    // Currently Thursday — Wednesday's activity is the only one, and it's incomplete (current week)
    // but no Thursday activity exists, so rest-day with cycle finding Wednesday
    const r = getTodaySlice(p, 'Thursday');
    expect(r.kind).toBe('rest-day');
    expect(r.nextScheduledDay).toBe('Wednesday'); // cycles to the only scheduled day
  });
});

// ── kind: ready / partial / all-done ─────────────────────────────────────────

describe('getTodaySlice — ready', () => {
  it('returns ready when all of today’s activities are incomplete', () => {
    const p = plan([week(1, [act({ day: 'Wednesday' }), act({ day: 'Wednesday', moduleId: 'percents' })])]);
    const r = getTodaySlice(p, 'Wednesday');
    expect(r.kind).toBe('ready');
    expect(r.activities).toHaveLength(2);
    expect(r.completedToday).toHaveLength(0);
  });

  it('returns ready and excludes completed activities from `activities`', () => {
    const p = plan([week(1, [
      act({ day: 'Wednesday', moduleId: 'a' }),
      act({ day: 'Wednesday', moduleId: 'b', completed: true }),
    ])]);
    const r = getTodaySlice(p, 'Wednesday');
    // Some completed → partial, not ready.
    expect(r.kind).toBe('partial');
    expect(r.activities).toHaveLength(1);
    expect(r.activities[0].moduleId).toBe('a');
    expect(r.completedToday).toHaveLength(1);
  });
});

describe('getTodaySlice — partial', () => {
  it('returns partial when some today-activities are completed and some are not', () => {
    const p = plan([week(1, [
      act({ day: 'Wednesday', completed: true, moduleId: 'done' }),
      act({ day: 'Wednesday', completed: false, moduleId: 'todo' }),
    ])]);
    const r = getTodaySlice(p, 'Wednesday');
    expect(r.kind).toBe('partial');
    expect(r.activities).toHaveLength(1);
    expect(r.completedToday).toHaveLength(1);
  });
});

describe('getTodaySlice — all-done', () => {
  it('returns all-done when every today-activity is complete but other days remain', () => {
    const p = plan([week(1, [
      act({ day: 'Wednesday', completed: true }),
      act({ day: 'Friday', completed: false }),
    ])]);
    const r = getTodaySlice(p, 'Wednesday');
    expect(r.kind).toBe('all-done');
    expect(r.activities).toHaveLength(1); // shows what was done today
    expect(r.completedToday).toHaveLength(1);
    expect(r.nextScheduledDay).toBe('Friday');
  });
});

// ── current-week selection ───────────────────────────────────────────────────

describe('getTodaySlice — current week selection', () => {
  it('skips fully-complete earlier weeks and points at the first week with any incomplete', () => {
    const p = plan([
      week(1, [act({ completed: true }), act({ day: 'Friday', completed: true })]),
      week(2, [act({ day: 'Wednesday', completed: false, moduleId: 'in-week-2' })]),
    ]);
    const r = getTodaySlice(p, 'Wednesday');
    expect(r.kind).toBe('ready');
    expect(r.weekNumber).toBe(2);
    expect(r.activities[0].moduleId).toBe('in-week-2');
  });
});

// ── string day-name match (HC2 contract) ─────────────────────────────────────

describe('getTodaySlice — string day match (HC2)', () => {
  it('matches by exact day-name string, not by index or partial', () => {
    const p = plan([week(1, [act({ day: 'Wednesday' })])]);
    expect(getTodaySlice(p, 'Wednesday').kind).toBe('ready');
    // Whitespace and case variants do NOT match (caller must normalize)
    expect(getTodaySlice(p, ' Wednesday').kind).toBe('rest-day');
    expect(getTodaySlice(p, 'wednesday').kind).toBe('rest-day');
    // Index-style argument is treated as an unmatched name
    expect(getTodaySlice(p, '3').kind).toBe('rest-day');
  });
});
