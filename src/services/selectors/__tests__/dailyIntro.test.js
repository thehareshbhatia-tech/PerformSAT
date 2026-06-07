import { formatDailyIntro } from '../dailyIntro';

const slice = (overrides = {}) => ({
  kind: 'ready',
  activities: [
    { duration: 20, moduleId: 'a', title: 'Practice: Slope-intercept' },
    { duration: 15, moduleId: 'b', title: 'Practice: Functions' },
  ],
  day: 'Wednesday',
  ...overrides,
});

describe('formatDailyIntro — empty / hidden states', () => {
  it('returns empty string for missing todaySlice', () => {
    expect(formatDailyIntro({})).toBe('');
    expect(formatDailyIntro({ todaySlice: null })).toBe('');
  });

  it('returns empty string for no-plan kind', () => {
    expect(formatDailyIntro({ todaySlice: { kind: 'no-plan' } })).toBe('');
  });

  it('returns empty string for refreshing kind', () => {
    expect(formatDailyIntro({ todaySlice: { kind: 'refreshing' } })).toBe('');
  });

  it('returns empty string for rest-day kind (card already messages this)', () => {
    expect(formatDailyIntro({ todaySlice: { kind: 'rest-day', activities: [] } })).toBe('');
  });

  it('returns empty string for all-done / plan-complete kinds', () => {
    expect(formatDailyIntro({ todaySlice: { kind: 'all-done', activities: [] } })).toBe('');
    expect(formatDailyIntro({ todaySlice: { kind: 'plan-complete', activities: [] } })).toBe('');
  });

  it('returns empty when ready/partial but no score AND no weakness', () => {
    expect(formatDailyIntro({ todaySlice: slice() })).toBe('');
  });
});

describe('formatDailyIntro — score-only branch', () => {
  it('renders score + activity context', () => {
    const out = formatDailyIntro({ todaySlice: slice(), latestScore: 540 });
    expect(out).toMatch(/Last test you scored 540/);
    expect(out).toMatch(/2 practice sets/);
    expect(out).toMatch(/~35 min/);
  });

  it('handles 1 activity (singular)', () => {
    const out = formatDailyIntro({
      todaySlice: slice({ activities: [{ duration: 20, moduleId: 'a' }] }),
      latestScore: 540,
    });
    expect(out).toMatch(/1 practice set\b/);
    expect(out).toMatch(/~20 min/);
  });

  it('omits minutes parenthetical when no activity has duration', () => {
    const out = formatDailyIntro({
      todaySlice: slice({ activities: [{ moduleId: 'a' }] }),
      latestScore: 540,
    });
    expect(out).not.toMatch(/~/);
  });
});

describe('formatDailyIntro — weakness-only branch', () => {
  it('renders weakness + activity context', () => {
    const out = formatDailyIntro({
      todaySlice: slice(),
      topWeakness: { skill: 'Slope-intercept form', accuracy: 42 },
    });
    expect(out).toMatch(/Slope-intercept form/);
    expect(out).toMatch(/42% accuracy/);
    expect(out).toMatch(/2 practice sets/);
  });

  it('omits the accuracy parenthetical when accuracy is missing', () => {
    const out = formatDailyIntro({
      todaySlice: slice(),
      topWeakness: { skill: 'Slope-intercept form' },
    });
    expect(out).toMatch(/Slope-intercept form/);
    expect(out).not.toMatch(/% accuracy/);
  });

  it('rounds non-integer accuracy', () => {
    const out = formatDailyIntro({
      todaySlice: slice(),
      topWeakness: { skill: 'Algebra', accuracy: 41.7 },
    });
    expect(out).toMatch(/42% accuracy/);
  });
});

describe('formatDailyIntro — both score and weakness (richest)', () => {
  it('renders the two-sentence form', () => {
    const out = formatDailyIntro({
      todaySlice: slice(),
      latestScore: 540,
      topWeakness: { skill: 'Slope-intercept form', accuracy: 42 },
    });
    expect(out).toMatch(/Last test you scored 540/);
    expect(out).toMatch(/Slope-intercept form/);
    expect(out).toMatch(/42% accuracy/);
    expect(out).toMatch(/Today's 2 practice sets/);
    expect(out).toMatch(/closing that gap/);
    expect(out).toMatch(/~35 min/);
  });

  it('coheres as two sentences', () => {
    const out = formatDailyIntro({
      todaySlice: slice(),
      latestScore: 540,
      topWeakness: { skill: 'Algebra', accuracy: 50 },
    });
    expect(out.split('. ').length).toBe(2);
  });
});

describe('formatDailyIntro — firstName echo (at most once, designated frames only)', () => {
  it('score-only frame lands the name mid-sentence, once', () => {
    const out = formatDailyIntro({ todaySlice: slice(), latestScore: 540, firstName: 'Haresh' });
    expect(out).toMatch(/Last test you scored 540, Haresh\./);
    expect(out.match(/Haresh/g)).toHaveLength(1);
  });

  it('weakness-only frame leads with the name, once', () => {
    const out = formatDailyIntro({
      todaySlice: slice(),
      topWeakness: { skill: 'Slope-intercept form', accuracy: 42 },
      firstName: 'Haresh',
    });
    expect(out).toMatch(/^Haresh, your weakest area/);
    expect(out.match(/Haresh/g)).toHaveLength(1);
  });

  it('the richest (both) frame stays nameless — it already carries the most signal', () => {
    const out = formatDailyIntro({
      todaySlice: slice(),
      latestScore: 540,
      topWeakness: { skill: 'Algebra', accuracy: 50 },
      firstName: 'Haresh',
    });
    expect(out).not.toMatch(/Haresh/);
  });

  it('drops cleanly when firstName is absent — byte-identical to the pre-name copy', () => {
    const withOut = formatDailyIntro({ todaySlice: slice(), latestScore: 540 });
    expect(withOut).toBe("Last test you scored 540. Today's 2 practice sets build on what's working (~35 min).");
    expect(withOut).not.toMatch(/, \./);
  });
});

describe('formatDailyIntro — defensive against bad inputs', () => {
  it('treats missing activities array as empty', () => {
    const out = formatDailyIntro({
      todaySlice: { kind: 'ready', day: 'Wednesday' },
      latestScore: 540,
    });
    expect(out).toMatch(/0 practice sets/);
  });

  it('handles activities without duration safely', () => {
    const out = formatDailyIntro({
      todaySlice: slice({ activities: [{ moduleId: 'a' }, { moduleId: 'b' }] }),
      latestScore: 540,
    });
    expect(out).not.toMatch(/NaN|undefined/);
    expect(out).toMatch(/2 practice sets/);
  });
});
