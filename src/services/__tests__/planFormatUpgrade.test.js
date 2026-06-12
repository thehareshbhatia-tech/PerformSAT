/**
 * planFormatUpgrade.test.js — pins the format-v2 drill-shaped activity shape
 * and the one-time legacy-plan upgrade (both-section weekly activities).
 */

import {
  buildSkillDrillActivity,
  upgradeLegacyPlanWeeks,
  planNeedsUpgrade,
  PLAN_FORMAT_VERSION,
} from '../planFormatUpgrade';

describe('buildSkillDrillActivity', () => {
  test('R&W gap gets the official CB label, section tag, and NO module coords', () => {
    const a = buildSkillDrillActivity({ skillId: 'form-structure-and-sense', skillName: 'Form Structure And Sense', section: 'rw' });
    expect(a.title).toBe('Practice: Form, Structure, and Sense'); // not the mangled humanized name
    expect(a.skillName).toBe('Form, Structure, and Sense');
    expect(a.section).toBe('rw');
    expect(a.type).toBe('practice');
    expect(a.activityType).toBe('skillDrill');
    expect(a.moduleId).toBeUndefined(); // the module fallback route is math-only
    expect(a.sectionName).toBeUndefined();
  });

  test('math gap keeps its display name and defaults section math', () => {
    const a = buildSkillDrillActivity({ skillId: 'exponent-rules', skillName: 'Exponent Rules' });
    expect(a.title).toBe('Practice: Exponent Rules');
    expect(a.section).toBe('math');
    expect(a.skillId).toBe('exponent-rules');
  });
});

describe('upgradeLegacyPlanWeeks', () => {
  const legacyPlan = () => ({
    weeks: [
      {
        weekNumber: 1,
        isTestWeek: false,
        activities: [
          { type: 'review', title: 'Review Your Missed Questions' },
          { type: 'strategy', title: 'Trap Answer Recognition Drill' },
        ],
        totalMinutes: 35,
        practiceCount: 0,
      },
      { weekNumber: 2, isTestWeek: false, activities: [], totalMinutes: 0, practiceCount: 0 },
      { weekNumber: 3, isTestWeek: true, activities: [{ type: 'test', title: 'Practice test' }], totalMinutes: 70, practiceCount: 0 },
    ],
    weaknesses: [
      { skillId: 'exponent-rules', skill: 'Exponent Rules', section: 'math', accuracy: 0 },
      { skillId: 'words-in-context', skill: 'Words In Context', section: 'rw', accuracy: 0 },
      { skillId: 'geometry', skill: 'Geometry', section: 'math', accuracy: 10 },
    ],
  });

  test('guards: null / weekless / already-current plans', () => {
    expect(upgradeLegacyPlanWeeks(null)).toBeNull();
    expect(upgradeLegacyPlanWeeks({ weeks: [] })).toBeNull();
    expect(upgradeLegacyPlanWeeks({ weeks: [{ activities: [] }], planFormatVersion: PLAN_FORMAT_VERSION })).toBeNull();
  });

  test('backfills empty targeted weeks with BOTH sections, R&W first in the interleave', () => {
    const up = upgradeLegacyPlanWeeks(legacyPlan());
    expect(up.planFormatVersion).toBe(PLAN_FORMAT_VERSION);
    const week2 = up.weeks[1];
    expect(week2.activities.length).toBe(2);
    const sections = week2.activities.map(a => a.section);
    expect(sections).toContain('rw');
    expect(sections).toContain('math');
    expect(week2.activities.every(a => a.type === 'practice' && a.skillId && !a.moduleId)).toBe(true);
    expect(week2.activities.every(a => a.augmented === true)).toBe(true);
  });

  test('additions carry a day assignment so getTodaySlice can surface them', () => {
    const up = upgradeLegacyPlanWeeks(legacyPlan());
    const added = up.weeks.flatMap(w => (w.activities || []).filter(a => a.augmented));
    expect(added.length).toBeGreaterThan(0);
    added.forEach(a => {
      expect(typeof a.day).toBe('string');
      expect(a.day.length).toBeGreaterThan(2);
    });
    // Two additions in one week land on distinct days.
    const week2Days = up.weeks[1].activities.map(a => a.day);
    expect(new Set(week2Days).size).toBe(week2Days.length);
  });

  test('STAMP-CURRENT plan with day-less augmented activities still upgrades (partial-write self-heal)', () => {
    // A hot-reload race once stamped a plan current while its additions
    // lacked days — the structural planNeedsUpgrade check catches that
    // state regardless of the version stamp.
    const plan = legacyPlan();
    plan.planFormatVersion = PLAN_FORMAT_VERSION; // stamp says current...
    plan.weeks[1].activities = [
      { type: 'practice', activityType: 'skillDrill', title: 'Practice: Words in Context', skillId: 'words-in-context', skillName: 'Words in Context', section: 'rw', duration: 15, augmented: true }, // ...but no day
    ];
    plan.weeks[1].practiceCount = 1;
    expect(planNeedsUpgrade(plan)).toBe(true);
    const up = upgradeLegacyPlanWeeks(plan);
    expect(up).not.toBeNull();
    expect(typeof up.weeks[1].activities[0].day).toBe('string');
    expect(planNeedsUpgrade(up)).toBe(false);
  });

  test('repairs day-less augmented activities from earlier dev formats IN PLACE', () => {
    const plan = legacyPlan();
    plan.planFormatVersion = 2; // dev-era stamp: backfilled but day-less
    plan.weeks[1].activities = [
      { type: 'practice', activityType: 'skillDrill', title: 'Practice: Words in Context', skillId: 'words-in-context', skillName: 'Words in Context', section: 'rw', duration: 15, augmented: true },
      { type: 'practice', activityType: 'skillDrill', title: 'Practice: Geometry', skillId: 'geometry', skillName: 'Geometry', section: 'math', duration: 15, augmented: true },
    ];
    plan.weeks[1].practiceCount = 2;
    const up = upgradeLegacyPlanWeeks(plan);
    expect(up.planFormatVersion).toBe(PLAN_FORMAT_VERSION);
    const week2 = up.weeks[1];
    expect(week2.activities).toHaveLength(2); // no double-append
    expect(week2.activities[0].skillId).toBe('words-in-context'); // position preserved
    week2.activities.forEach(a => expect(typeof a.day).toBe('string'));
  });

  test('APPEND-ONLY: existing activity positions never shift (completion is index-keyed)', () => {
    const plan = legacyPlan();
    const up = upgradeLegacyPlanWeeks(plan);
    expect(up.weeks[0].activities[0]).toEqual(plan.weeks[0].activities[0]);
    expect(up.weeks[0].activities[1]).toEqual(plan.weeks[0].activities[1]);
    // additions only ever after the originals
    expect(up.weeks[0].activities.length).toBeGreaterThan(2);
    expect(up.weeks[0].activities.slice(2).every(a => a.augmented)).toBe(true);
  });

  test('test weeks are untouched', () => {
    const up = upgradeLegacyPlanWeeks(legacyPlan());
    expect(up.weeks[2].activities).toHaveLength(1);
  });

  test('idempotent: upgrading an upgraded plan is a no-op', () => {
    const up = upgradeLegacyPlanWeeks(legacyPlan());
    expect(upgradeLegacyPlanWeeks(up)).toBeNull();
  });

  test('weeks with enough practice already are left alone (but still stamped)', () => {
    const plan = legacyPlan();
    plan.weeks[1].activities = [
      { type: 'practice', title: 'Practice: A', skillId: 'a', moduleId: 'm' },
      { type: 'practice', title: 'Practice: B', skillId: 'b', moduleId: 'm' },
    ];
    plan.weeks[1].practiceCount = 2;
    const up = upgradeLegacyPlanWeeks(plan);
    expect(up.weeks[1].activities).toHaveLength(2);
    expect(up.planFormatVersion).toBe(PLAN_FORMAT_VERSION);
  });

  test('no weaknesses → weeks unchanged but version stamped (persist once, never re-run)', () => {
    const plan = { ...legacyPlan(), weaknesses: [] };
    const up = upgradeLegacyPlanWeeks(plan);
    expect(up.planFormatVersion).toBe(PLAN_FORMAT_VERSION);
    expect(up.weeks[1].activities).toHaveLength(0);
  });

  test('totalMinutes and practiceCount track the additions', () => {
    const up = upgradeLegacyPlanWeeks(legacyPlan());
    const week2 = up.weeks[1];
    expect(week2.totalMinutes).toBe(30); // 2 × 15-minute drills
    expect(week2.practiceCount).toBe(2);
  });

  test('heals the cross-scale "past your target" headline', () => {
    const plan = {
      ...legacyPlan(),
      currentScore: 920,  // composite
      targetScore: 750,   // legacy math-section goal
      summary: { headline: "You're past your target. Hold 900 and stretch higher.", diagnosis: 'x' },
    };
    const up = upgradeLegacyPlanWeeks(plan);
    expect(up.summary.headline).toBe('The plan front-loads your costliest gaps.');
    expect(up.summary.diagnosis).toBe('x'); // rest of summary untouched
  });

  test('same-scale "past your target" headline is left alone (it may be true)', () => {
    const plan = {
      ...legacyPlan(),
      currentScore: 700,
      targetScore: 650,
      summary: { headline: "You're past your target. Hold 700 and stretch higher." },
    };
    const up = upgradeLegacyPlanWeeks(plan);
    expect(up.summary.headline).toMatch(/past your target/);
  });
});
