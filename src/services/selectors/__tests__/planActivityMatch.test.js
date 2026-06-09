import { findMatchingPlanActivity } from '../planActivityMatch';

const TODAY = 'Wednesday';

const makePlan = (activities, moreWeeks = []) => ({
  weeks: [{ weekNumber: 1, activities }, ...moreWeeks],
});

const practiceAct = (overrides = {}) => ({
  type: 'practice',
  day: TODAY,
  skillId: 'slope-intercept-form',
  skillName: 'Slope-intercept form',
  title: 'Practice: Linear Equations',
  completed: false,
  ...overrides,
});

describe('findMatchingPlanActivity — guards', () => {
  it('returns null for missing plan / weakness / day', () => {
    expect(findMatchingPlanActivity(null, { weakness: { skillId: 'x' }, todayDayName: TODAY })).toBeNull();
    expect(findMatchingPlanActivity({ weeks: [] }, { weakness: { skillId: 'x' }, todayDayName: TODAY })).toBeNull();
    expect(findMatchingPlanActivity(makePlan([practiceAct()]), { weakness: null, todayDayName: TODAY })).toBeNull();
    expect(findMatchingPlanActivity(makePlan([practiceAct()]), { weakness: {}, todayDayName: TODAY })).toBeNull();
    expect(findMatchingPlanActivity(makePlan([practiceAct()]), { weakness: { skillId: 'slope-intercept-form' } })).toBeNull();
  });
});

describe('findMatchingPlanActivity — tier 1 exact skillId', () => {
  it('finds today\'s incomplete practice activity with the same skillId', () => {
    const plan = makePlan([
      practiceAct({ skillId: 'quadratic-formula', skillName: 'Quadratic' }),
      practiceAct(),
    ]);
    const match = findMatchingPlanActivity(plan, {
      weakness: { skillId: 'slope-intercept-form' },
      todayDayName: TODAY,
    });
    expect(match).toEqual({ weekIndex: 0, activityIndex: 1, activity: plan.weeks[0].activities[1] });
  });

  it('skips activities already completed', () => {
    const plan = makePlan([practiceAct({ completed: true })]);
    expect(findMatchingPlanActivity(plan, {
      weakness: { skillId: 'slope-intercept-form' },
      todayDayName: TODAY,
    })).toBeNull();
  });

  it('skips activities scheduled on other days', () => {
    const plan = makePlan([practiceAct({ day: 'Friday' })]);
    expect(findMatchingPlanActivity(plan, {
      weakness: { skillId: 'slope-intercept-form' },
      todayDayName: TODAY,
    })).toBeNull();
  });

  it('skips non-practice activities (strategy/review/test)', () => {
    const plan = makePlan([
      practiceAct({ type: 'strategy' }),
      practiceAct({ type: 'review' }),
      practiceAct({ type: 'test' }),
    ]);
    expect(findMatchingPlanActivity(plan, {
      weakness: { skillId: 'slope-intercept-form' },
      todayDayName: TODAY,
    })).toBeNull();
  });
});

describe('findMatchingPlanActivity — tier 2 missed-pattern bridge', () => {
  it('matches a granular activity skillId via the weakness missedPatterns prefix', () => {
    // Plan activity carries the granular gap id ('vertex-form'); the drill's
    // weakness is the skill-level 'function-interpretation' whose missed
    // pattern slug prefix-extends the activity id — the same bridge
    // activityDrillRouter uses in the launch direction.
    const plan = makePlan([practiceAct({ skillId: 'vertex-form', skillName: 'Vertex' })]);
    const match = findMatchingPlanActivity(plan, {
      weakness: {
        skillId: 'function-interpretation',
        missedPatterns: ['vertex-form-from-two-conditions'],
      },
      todayDayName: TODAY,
    });
    expect(match).not.toBeNull();
    expect(match.activity.skillId).toBe('vertex-form');
  });

  it('matches an exact missed-pattern slug too', () => {
    const plan = makePlan([practiceAct({ skillId: 'cylinder-volume' })]);
    const match = findMatchingPlanActivity(plan, {
      weakness: { skillId: 'geometry-volume', missedPatterns: ['cylinder-volume'] },
      todayDayName: TODAY,
    });
    expect(match).not.toBeNull();
  });

  it('does NOT match an unrelated pattern that merely shares leading characters', () => {
    const plan = makePlan([practiceAct({ skillId: 'vertex' })]);
    // The bridge requires `p === skillId` or `p.startsWith(skillId + '-')`,
    // so 'vertexes-of-polygons' (no hyphen boundary after 'vertex') must
    // not be treated as a match for the 'vertex' activity.
    const match = findMatchingPlanActivity(plan, {
      weakness: { skillId: 'geometry', missedPatterns: ['vertexes-of-polygons'] },
      todayDayName: TODAY,
    });
    expect(match).toBeNull();
  });
});

describe('findMatchingPlanActivity — week scanning', () => {
  it('returns the first match scanning weeks in order', () => {
    const week2 = { weekNumber: 2, activities: [practiceAct()] };
    const plan = makePlan([practiceAct({ skillId: 'other-skill' })], [week2]);
    const match = findMatchingPlanActivity(plan, {
      weakness: { skillId: 'slope-intercept-form' },
      todayDayName: TODAY,
    });
    expect(match.weekIndex).toBe(1);
    expect(match.activityIndex).toBe(0);
  });

  it('tolerates malformed weeks/activities', () => {
    const plan = { weeks: [null, { activities: null }, { activities: [null, practiceAct()] }] };
    const match = findMatchingPlanActivity(plan, {
      weakness: { skillId: 'slope-intercept-form' },
      todayDayName: TODAY,
    });
    expect(match).toEqual({ weekIndex: 2, activityIndex: 1, activity: plan.weeks[2].activities[1] });
  });
});
