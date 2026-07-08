import {
  rescheduleActivity,
  setActivitySkipped,
  removeActivity,
  addCustomActivity,
  setFocusAreas,
  setPacing,
  intensityForMinutes,
} from '../studyPlanEditor';

// Minimal plan factory
const makePlan = () => ({
  intensity: 'moderate',
  intensityConfig: { minutesPerDay: 30 },
  summary: { stats: { minutesPerDay: 30, intensity: 'moderate', daysUntilTest: 40 } },
  weaknesses: [
    { skillId: 'slope', skill: 'Slope', section: 'math' },
    { skillId: 'commas', skill: 'Commas', section: 'rw' },
  ],
  weeks: [
    {
      weekNumber: 1,
      totalMinutes: 60,
      practiceCount: 2,
      strategyCount: 1,
      lessonCount: 0,
      activities: [
        { type: 'practice', title: 'Practice: Slope', skillId: 'slope', duration: 20, day: 'Monday' },
        { type: 'practice', title: 'Practice: Commas', skillId: 'commas', duration: 20, day: 'Tuesday' },
        { type: 'strategy', title: 'Strategy drill', duration: 20, day: 'Wednesday' },
      ],
    },
  ],
});

describe('rescheduleActivity', () => {
  it('changes the day and marks userEdited without mutating the input', () => {
    const plan = makePlan();
    const next = rescheduleActivity(plan, 0, 0, 'Friday');
    expect(next.weeks[0].activities[0].day).toBe('Friday');
    expect(next.weeks[0].activities[0].userEdited).toBe(true);
    expect(plan.weeks[0].activities[0].day).toBe('Monday'); // input untouched
    expect(next).not.toBe(plan);
  });
  it('returns the plan unchanged for an invalid day or index', () => {
    const plan = makePlan();
    expect(rescheduleActivity(plan, 0, 0, 'Funday')).toBe(plan);
    expect(rescheduleActivity(plan, 9, 0, 'Friday')).toBe(plan);
  });
});

describe('setActivitySkipped', () => {
  it('toggles skipped on and off', () => {
    const plan = makePlan();
    const skipped = setActivitySkipped(plan, 0, 1, true);
    expect(skipped.weeks[0].activities[1].skipped).toBe(true);
    const unskipped = setActivitySkipped(skipped, 0, 1, false);
    expect(unskipped.weeks[0].activities[1].skipped).toBe(false);
  });
  it('recomputes week totalMinutes and practiceCount (skipped excluded)', () => {
    const plan = makePlan(); // 2 practice + 1 strategy, all 20min
    const skipped = setActivitySkipped(plan, 0, 1, true); // skip a practice
    expect(skipped.weeks[0].totalMinutes).toBe(40); // skipped 20min excluded
    expect(skipped.weeks[0].practiceCount).toBe(1);
    // Un-skipping restores the rollup.
    const unskipped = setActivitySkipped(skipped, 0, 1, false);
    expect(unskipped.weeks[0].totalMinutes).toBe(60);
    expect(unskipped.weeks[0].practiceCount).toBe(2);
  });
});

describe('removeActivity', () => {
  it('splices the activity out', () => {
    const plan = makePlan();
    const next = removeActivity(plan, 0, 0);
    expect(next.weeks[0].activities).toHaveLength(2);
    expect(next.weeks[0].activities.find((a) => a.skillId === 'slope')).toBeUndefined();
    expect(plan.weeks[0].activities).toHaveLength(3); // input untouched
  });
  it('recomputes week totalMinutes and practiceCount', () => {
    const plan = makePlan(); // 3 × 20min: 2 practice + 1 strategy
    const next = removeActivity(plan, 0, 0); // drop a practice
    expect(next.weeks[0].totalMinutes).toBe(40);
    expect(next.weeks[0].practiceCount).toBe(1);
    expect(next.weeks[0].strategyCount).toBe(1);
  });
});

describe('addCustomActivity', () => {
  it('appends a custom task with sensible defaults', () => {
    const plan = makePlan();
    const next = addCustomActivity(plan, 0, { title: 'Redo Test 3 misses', day: 'Saturday' });
    const added = next.weeks[0].activities.at(-1);
    expect(added.title).toBe('Redo Test 3 misses');
    expect(added.custom).toBe(true);
    expect(added.day).toBe('Saturday');
    expect(added.duration).toBe(20);
    expect(added.type).toBe('custom');
  });
  it('recomputes week totalMinutes (custom is not a practice, so practiceCount holds)', () => {
    const plan = makePlan(); // 60 min, practiceCount 2
    const next = addCustomActivity(plan, 0, { title: 'Redo misses', day: 'Saturday', duration: 30 });
    expect(next.weeks[0].totalMinutes).toBe(90);
    expect(next.weeks[0].practiceCount).toBe(2); // custom type != practice
  });
  it('ignores a blank title', () => {
    const plan = makePlan();
    expect(addCustomActivity(plan, 0, { title: '   ' })).toBe(plan);
  });
  it('does not throw when the target week has no activities array (legacy plan)', () => {
    const plan = { weeks: [{ weekNumber: 1 }] }; // no activities array
    const next = addCustomActivity(plan, 0, { title: 'New task' });
    expect(next.weeks[0].activities).toHaveLength(1);
    expect(next.weeks[0].activities[0].title).toBe('New task');
  });
});

describe('setFocusAreas', () => {
  it('drops practice activities for de-focused skills', () => {
    const plan = makePlan();
    const next = setFocusAreas(plan, [{ skillId: 'slope', skill: 'Slope', section: 'math' }]);
    expect(next.weaknesses).toHaveLength(1);
    // Commas practice should be gone; slope + strategy remain
    expect(next.weeks[0].activities.find((a) => a.skillId === 'commas')).toBeUndefined();
    expect(next.weeks[0].activities.find((a) => a.skillId === 'slope')).toBeTruthy();
    expect(next.weeks[0].activities.find((a) => a.type === 'strategy')).toBeTruthy();
  });
  it('adds a practice activity for a newly-focused skill', () => {
    const plan = makePlan();
    const next = setFocusAreas(plan, [
      ...plan.weaknesses,
      { skillId: 'circles', skill: 'Circles', section: 'math' },
    ]);
    const added = next.weeks[0].activities.find((a) => a.skillId === 'circles');
    expect(added).toBeTruthy();
    expect(added.userEdited).toBe(true);
  });
  it('keeps a completed practice activity even if its skill is de-focused', () => {
    const plan = makePlan();
    plan.weeks[0].activities[1].completed = true; // Commas done
    const next = setFocusAreas(plan, [{ skillId: 'slope', skill: 'Slope', section: 'math' }]);
    expect(next.weeks[0].activities.find((a) => a.skillId === 'commas')).toBeTruthy();
  });
  it('a pure ADD never removes scheduled activities (incl. beyond-the-cap skills)', () => {
    // plan.weaknesses is capped at 8 but weekly activities are generated from
    // UNCAPPED skill gaps — a scheduled task can reference a skill that never
    // made the focus list. Adding a focus area must not delete it.
    const plan = makePlan();
    plan.weeks[0].activities.push({
      type: 'practice', title: 'Practice: Exponents', skillId: 'exponents', duration: 20, day: 'Thursday',
    });
    const next = setFocusAreas(plan, [
      ...plan.weaknesses,
      { skillId: 'circles', skill: 'Circles', section: 'math' },
    ]);
    expect(next.weeks[0].activities.find((a) => a.skillId === 'slope')).toBeTruthy();
    expect(next.weeks[0].activities.find((a) => a.skillId === 'commas')).toBeTruthy();
    expect(next.weeks[0].activities.find((a) => a.skillId === 'exponents')).toBeTruthy();
    expect(next.weeks[0].activities.find((a) => a.type === 'strategy')).toBeTruthy();
    expect(next.weeks[0].activities.find((a) => a.skillId === 'circles')).toBeTruthy();
  });
  it('removing a focus area drops only that skill\'s incomplete generated activities', () => {
    const plan = makePlan();
    plan.weeks[0].activities.push({
      type: 'practice', title: 'Practice: Exponents', skillId: 'exponents', duration: 20, day: 'Thursday',
    });
    // De-focus commas (keep slope). The never-focused exponents work survives.
    const next = setFocusAreas(plan, [{ skillId: 'slope', skill: 'Slope', section: 'math' }]);
    expect(next.weeks[0].activities.find((a) => a.skillId === 'commas')).toBeUndefined();
    expect(next.weeks[0].activities.find((a) => a.skillId === 'slope')).toBeTruthy();
    expect(next.weeks[0].activities.find((a) => a.skillId === 'exponents')).toBeTruthy();
  });
  it('returns the plan unchanged for an empty focus set', () => {
    const plan = makePlan();
    expect(setFocusAreas(plan, [])).toBe(plan);
  });
});

describe('setPacing', () => {
  it('updates minutes/day, intensity, and userPrefs', () => {
    const plan = makePlan();
    const next = setPacing(plan, { minutesPerDay: 60 }, '2026-06-23');
    expect(next.summary.stats.minutesPerDay).toBe(60);
    expect(next.intensity).toBe('intensive');
    expect(next.userPrefs.minutesPerDay).toBe(60);
    expect(next.userPrefs.edited).toBe(true);
  });
  it('recomputes daysUntilTest from a new exam date', () => {
    const plan = makePlan();
    const next = setPacing(plan, { examDate: '2026-07-23' }, '2026-06-23');
    expect(next.daysUntilTest).toBe(30);
    expect(next.examDate).toBe('2026-07-23');
  });
  it('redistributes activities so each day stays near the cap', () => {
    const plan = makePlan(); // three 20-min activities
    const next = setPacing(plan, { minutesPerDay: 20 }, '2026-06-23');
    const days = next.weeks[0].activities.map((a) => a.day);
    // With a 20-min cap, the three tasks spread to three distinct days
    expect(new Set(days).size).toBe(3);
  });
  it('recomputes week practiceCount alongside totalMinutes (shared helper)', () => {
    const plan = makePlan();
    const next = setPacing(plan, { minutesPerDay: 40 }, '2026-06-23');
    expect(next.weeks[0].totalMinutes).toBe(60);
    expect(next.weeks[0].practiceCount).toBe(2);
    expect(next.weeks[0].strategyCount).toBe(1);
  });
});

describe('intensityForMinutes', () => {
  it('maps minutes to the right band', () => {
    expect(intensityForMinutes(15)).toBe('light');
    expect(intensityForMinutes(30)).toBe('moderate');
    expect(intensityForMinutes(50)).toBe('focused');
    expect(intensityForMinutes(70)).toBe('intensive');
    expect(intensityForMinutes(120)).toBe('marathon');
  });
});
