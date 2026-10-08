/**
 * studyPlanGenerator.sessionCap.test.js — diagnostic-v3 spec §6.1 / §6.5
 * (Phase 0). The plan obeys the session length the student chose in the
 * funnel (schedule.sessionCapMinutes): a day holds at most 2 cap-sized
 * sessions (1 on the plan's first day and on every day of a first plan built
 * from the diagnostic), an activity never spans sessions, and nothing is
 * placed on a full day. Before this, Riley (15-minute sessions, Mon/Wed/Fri)
 * got a 95-minute, 7-activity Wednesday from the "marathon" band.
 */
import { generateStudyPlan } from '../studyPlanGenerator';
import { generateRileyPlan, rileyFixture, RILEY_NOW } from '../__fixtures__/rileySitting';

jest.mock('../practiceTestService', () => ({ loadAttemptSnapshot: jest.fn() }));
jest.mock('../miniDiagnostic/buildDiagnosticTest', () => ({
  rebuildDiagnosticTest: jest.fn(),
  manifestFromServedItemIds: jest.fn(),
}));

const allActivities = (plan) => plan.weeks.flatMap((w) => w.activities || []);
const isMeasurement = (a) => a.type === 'test';

/** { 'w1:Wednesday': minutes } over non-test work, per week + day. */
const workMinutesByDay = (plan) => {
  const out = {};
  plan.weeks.forEach((w) => {
    (w.activities || []).filter((a) => !isMeasurement(a)).forEach((a) => {
      const key = `w${w.weekNumber}:${a.day}`;
      out[key] = (out[key] || 0) + (a.duration || 0);
    });
  });
  return out;
};

beforeEach(() => {
  jest.useFakeTimers({ doNotFake: ['performance'] });
  jest.setSystemTime(RILEY_NOW);
});
afterEach(() => { jest.useRealTimers(); });

describe("Riley's first plan (15-minute sessions, Mon/Wed/Fri, created Wednesday)", () => {
  test('the funnel answer reaches the schedule as a 15-minute cap', () => {
    const { plan } = generateRileyPlan();
    expect(rileyFixture.user.onboardingProfile.answers.sessionLength).toBe('15m');
    expect(plan.schedule.sessionCapMinutes).toBe(15);
  });

  test('day 1 is exactly one session: one activity, at most 15 minutes', () => {
    const { plan } = generateRileyPlan();
    const day1 = plan.weeks[0].activities.filter((a) => a.day === 'Wednesday');
    expect(day1).toHaveLength(1);
    expect(day1[0].duration).toBeLessThanOrEqual(15);
    expect(day1[0].duration).toBeGreaterThan(0);
  });

  test('no day carries more than one 15-minute session of work', () => {
    const { plan } = generateRileyPlan();
    const byDay = workMinutesByDay(plan);
    expect(Object.keys(byDay).length).toBeGreaterThan(0);
    Object.values(byDay).forEach((minutes) => expect(minutes).toBeLessThanOrEqual(15));
  });

  test('every activity fits the cap; the full test is its day\'s only session', () => {
    const { plan } = generateRileyPlan();
    allActivities(plan).filter((a) => !isMeasurement(a)).forEach((a) => {
      expect(a.duration).toBeLessThanOrEqual(15);
    });
    plan.weeks.forEach((w) => {
      const tests = (w.activities || []).filter(isMeasurement);
      tests.forEach((t) => {
        const sameDay = w.activities.filter((a) => a.day === t.day);
        expect(sameDay).toEqual([t]);
      });
    });
  });

  test('the week budget is the cap times the study days, not the intensity band', () => {
    const { plan } = generateRileyPlan();
    expect(plan.intensityConfig.minutesPerDay).toBeGreaterThan(15); // the band still says more
    expect(plan.minutesPerWeek).toBe(15 * 3);
    plan.weeks.forEach((w) => expect(w.totalMinutes).toBeLessThanOrEqual(45));
  });

  test('week 1 schedules only Wednesday and Friday, and no strength maintenance', () => {
    const { plan } = generateRileyPlan();
    const week1 = plan.weeks[0].activities;
    week1.forEach((a) => expect(['Wednesday', 'Friday']).toContain(a.day));
    expect(week1.some((a) => a.planRole === 'maintain' || /^Keep sharp:/.test(a.title || ''))).toBe(false);
  });

  test('because-lines cite the diagnostic, never a "last test" the student never took', () => {
    const { plan } = generateRileyPlan();
    const copy = allActivities(plan)
      .flatMap((a) => [a.because, a.subtitle, a.title])
      .filter(Boolean);
    expect(copy.length).toBeGreaterThan(0);
    copy.forEach((line) => expect(line).not.toMatch(/last test/i));
    const evidence = allActivities(plan).map((a) => a.because || '').filter((b) => /You scored/.test(b));
    expect(evidence.length).toBeGreaterThan(0);
    evidence.forEach((b) => expect(b).toMatch(/on your diagnostic/));
  });

  test('no pacing session: this sitting carries no real timing evidence', () => {
    const { plan } = generateRileyPlan();
    expect(allActivities(plan).some((a) => a.activityType === 'pacingDrill')).toBe(false);
  });
});

// ── Synthetic diagnoses: the same budget rules off the diagnostic path ──

const weak = (over) => ({
  name: over.skillId, domain: 'craft-and-structure', section: 'rw', testAccuracy: 20,
  contentAccuracy: 20, correct: 1, total: 5, primaryErrorType: 'conceptual_gap',
  missedPatterns: [], modules: [], sections: [], ...over,
});
const RW_SKILLS = ['words-in-context', 'transitions', 'boundaries', 'inferences', 'rhetorical-synthesis', 'cross-text-connections'];
const mkDiag = (over = {}) => ({
  testId: 'practice-test-3',
  score: { scaled: 900, isMultiSection: true, sections: { math: 450, rw: 450 }, percentCorrect: 45 },
  skillAnalysis: {
    weakSkills: RW_SKILLS.map((skillId) => weak({ skillId })),
    strongSkills: [],
    allSkills: [],
  },
  prioritizedActions: [],
  errorPatterns: { totalWrong: 20, counts: {}, dominantPattern: null, summary: [] },
  difficultyAnalysis: {},
  timeAnalysis: { fadeEffect: 0 },
  trendAnalysis: { persistentWeaknesses: [] },
  scoreProjection: { easyWins: { count: 0 } },
  ...over,
});
const testDate = new Date(RILEY_NOW.getTime() + 60 * 86400000).toISOString().slice(0, 10);

describe('session budget on any plan', () => {
  test('a stated 30-minute cap: day 1 is one session, later days at most two', () => {
    const plan = generateStudyPlan(mkDiag(), {
      targetScore: 1400, testDate, studyDaysPerWeek: 5, sessionLength: '30m',
    });
    expect(plan.schedule.sessionCapMinutes).toBe(30);
    const byDay = workMinutesByDay(plan);
    const day1 = plan.weeks[0].activities.find((a) => !isMeasurement(a))?.day;
    expect(byDay[`w1:${day1}`]).toBeLessThanOrEqual(30);
    Object.values(byDay).forEach((minutes) => expect(minutes).toBeLessThanOrEqual(60));
    allActivities(plan).filter((a) => !isMeasurement(a)).forEach((a) => expect(a.duration).toBeLessThanOrEqual(30));
  });

  test('no stated session length falls back to a 30-minute cap', () => {
    const plan = generateStudyPlan(mkDiag(), { targetScore: 1500, testDate, studyDaysPerWeek: 3 });
    expect(plan.schedule.sessionCapMinutes).toBeNull();
    expect(plan.minutesPerWeek).toBeLessThanOrEqual(3 * 60);
    Object.values(workMinutesByDay(plan)).forEach((minutes) => expect(minutes).toBeLessThanOrEqual(60));
  });

  test('a day never over-fills: work that does not fit carries to a later week', () => {
    // 6 weak skills of 15 minutes against 15-minute single sessions on a
    // first diagnostic plan: 2 week-1 slots (Wed + Fri), the rest carries.
    const plan = generateStudyPlan(
      mkDiag({ testId: 'mini-diagnostic', isDiagnosticSitting: true }),
      { targetScore: 1400, testDate, studyDaysPerWeek: 3, sessionLength: '15m' },
    );
    Object.values(workMinutesByDay(plan)).forEach((minutes) => expect(minutes).toBeLessThanOrEqual(15));
    const week1Skills = plan.weeks[0].activities.map((a) => a.skillId).filter(Boolean);
    const week2Skills = (plan.weeks[1]?.activities || []).map((a) => a.skillId).filter(Boolean);
    expect(week1Skills.length).toBe(2);
    expect(week2Skills.some((id) => !week1Skills.includes(id))).toBe(true);
  });

  test("an explicit pacing edit is honored as cap-sized sessions after day 1", () => {
    const first = generateStudyPlan(mkDiag(), { targetScore: 1400, testDate, studyDaysPerWeek: 3, sessionLength: '15m' });
    const previousPlan = {
      ...first,
      generatedAt: new Date(RILEY_NOW.getTime() - 3 * 86400000).toISOString(),
      userPrefs: { edited: true, minutesPerDay: 45 },
    };
    const plan = generateStudyPlan(
      mkDiag({ testId: 'practice-test-4' }),
      { targetScore: 1400, testDate, studyDaysPerWeek: 3, sessionLength: '15m' },
      {}, {}, previousPlan,
    );
    expect(plan.minutesPerWeek).toBe(3 * 45);
    Object.values(workMinutesByDay(plan)).forEach((minutes) => expect(minutes).toBeLessThanOrEqual(45));
  });
});
