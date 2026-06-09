jest.mock('../reviewService', () => ({
  getDueReviewCount: jest.fn(() => 0),
}));

import { reprioritizePlan } from '../adaptivePlanService';

const makePlan = (overrides = {}) => ({
  weeks: [{ weekNumber: 1, title: 'W1', activities: [{ type: 'lesson', title: 'L1' }] }],
  skillGaps: [
    { skillId: 'slope-intercept-form', skillName: 'Slope Intercept', testAccuracy: 30, priority: 120, estimatedMinutes: 20, modules: [] },
    { skillId: 'quadratic-formula', skillName: 'Quadratic Formula', testAccuracy: 50, priority: 90, estimatedMinutes: 15, modules: [] },
    { skillId: 'statistics', skillName: 'Statistics', testAccuracy: 60, priority: 80, estimatedMinutes: 15, modules: [] },
  ],
  intensityConfig: { minutesPerDay: 35 },
  currentScore: 600,
  ...overrides,
});

describe('reprioritizePlan', () => {
  test('returns plan unchanged if no weeks', () => {
    const result = reprioritizePlan({ weeks: [] });
    expect(result.weeks).toEqual([]);
    expect(result.adaptiveOverlay).toBeUndefined();
  });

  test('classifies skills as improved when accuracy rises', () => {
    const plan = makePlan();
    const skillProgress = {
      'slope-intercept-form': { correct: 8, attempts: 10, lastAttemptAt: '2026-01-10' },
    };
    const result = reprioritizePlan(plan, skillProgress, {}, {});
    const overlay = result.adaptiveOverlay;
    expect(overlay).toBeTruthy();
    const slopeSkill = overlay.focusSkills.find(s => s.skillId === 'slope-intercept-form');
    expect(slopeSkill.delta).toBe('improved');
  });

  test('classifies skills as declined when accuracy drops', () => {
    const plan = makePlan();
    const skillProgress = {
      'statistics': { correct: 1, attempts: 10, lastAttemptAt: '2026-01-10' },
    };
    const result = reprioritizePlan(plan, skillProgress, {}, {});
    const overlay = result.adaptiveOverlay;
    const stat = overlay.focusSkills.find(s => s.skillId === 'statistics');
    expect(stat.delta).toBe('declined');
    expect(stat.adjustedPriority).toBeGreaterThan(80);
  });

  test('detects persistent weaknesses and boosts priority', () => {
    const plan = makePlan();
    const testResults = {
      'test-1': {
        testId: 'test-1', testTitle: 'T1',
        attempts: [{
          completedAt: '2026-01-01', scaledScore: 600,
          diagnosticData: { questionDetails: [
            { skills: ['slope-intercept-form'], correct: false },
            { skills: ['slope-intercept-form'], correct: false },
          ] },
        }],
      },
      'test-2': {
        testId: 'test-2', testTitle: 'T2',
        attempts: [{
          completedAt: '2026-02-01', scaledScore: 610,
          diagnosticData: { questionDetails: [
            { skills: ['slope-intercept-form'], correct: false },
            { skills: ['slope-intercept-form'], correct: false },
          ] },
        }],
      },
    };
    const result = reprioritizePlan(plan, {}, testResults, {});
    const overlay = result.adaptiveOverlay;
    expect(overlay.persistentWeaknesses.length).toBeGreaterThan(0);
    const slopeSkill = overlay.focusSkills.find(s => s.skillId === 'slope-intercept-form');
    expect(slopeSkill.isPersistent).toBe(true);
  });

  test('activates triage mode when test is < 7 days away', () => {
    const plan = makePlan();
    const testDate = new Date();
    testDate.setDate(testDate.getDate() + 3);
    const result = reprioritizePlan(plan, {}, {}, {}, testDate.toISOString());
    const overlay = result.adaptiveOverlay;
    expect(overlay.isTriage).toBe(true);
    expect(overlay.focusSkills.length).toBeLessThanOrEqual(3);
  });

  test('generates today actions from focus skills', () => {
    const plan = makePlan();
    const result = reprioritizePlan(plan, {}, {}, {});
    const overlay = result.adaptiveOverlay;
    expect(overlay.today.length).toBeGreaterThan(0);
    expect(overlay.today[0].minutes).toBeGreaterThan(0);
  });

  test('injects new weak skills not in plan baseline', () => {
    const plan = makePlan();
    const skillProgress = {
      'brand-new-skill': { correct: 1, attempts: 10, lastAttemptAt: '2026-01-10' },
    };
    const result = reprioritizePlan(plan, skillProgress, {}, {});
    const overlay = result.adaptiveOverlay;
    const newSkill = overlay.focusSkills.find(s => s.skillId === 'brand-new-skill');
    expect(newSkill).toBeTruthy();
    expect(newSkill.delta).toBe('new');
  });

  test('includes score trajectory from test results', () => {
    const plan = makePlan();
    const testResults = {
      'test-1': {
        testId: 'test-1', testTitle: 'T1',
        attempts: [
          { completedAt: '2026-01-01', scaledScore: 580, diagnosticData: { questionDetails: [] } },
          { completedAt: '2026-01-15', scaledScore: 610, diagnosticData: { questionDetails: [] } },
        ],
      },
    };
    const result = reprioritizePlan(plan, {}, testResults, {});
    const overlay = result.adaptiveOverlay;
    expect(overlay.scoreTrajectory.length).toBe(2);
    expect(overlay.latestScaledScore).toBe(610);
  });

  test('builds reprioritisation summary', () => {
    const plan = makePlan();
    const result = reprioritizePlan(plan, {}, {}, {});
    const overlay = result.adaptiveOverlay;
    expect(overlay.reprioritisationSummary).toBeTruthy();
    expect(typeof overlay.reprioritisationSummary).toBe('string');
  });

  // Adaptivity audit (2026-06): the latest-test snapshot used to win over
  // everything for any skill it sampled twice, freezing the classification
  // until the NEXT test. Recent drill history (post-test, past the
  // test-write grace window) must now take precedence so drilling between
  // tests moves the improved/declined read.
  test('recent drill history outranks the latest-test snapshot', () => {
    const plan = makePlan();
    const testMs = Date.parse('2026-01-05T10:00:00');
    const testResults = {
      'test-1': {
        testId: 'test-1', testTitle: 'T1',
        attempts: [{
          completedAt: '2026-01-05T10:00:00', scaledScore: 600,
          diagnosticData: { questionDetails: [
            // 1/3 on slope on the latest test — would classify 'stagnant'
            // vs the 30% plan baseline if the snapshot won.
            { skills: ['slope-intercept-form'], correct: true },
            { skills: ['slope-intercept-form'], correct: false },
            { skills: ['slope-intercept-form'], correct: false },
          ] },
        }],
      },
    };
    // 10 drill attempts well after the test, 9 correct = 90%.
    const drillStart = testMs + 24 * 60 * 60 * 1000;
    const skillProgress = {
      'slope-intercept-form': {
        correct: 12, attempts: 23, // cumulative — NOT what should win
        history: Array.from({ length: 10 }, (_, i) => ({
          correct: i < 9,
          timestamp: drillStart + i * 60000,
        })),
      },
    };
    const result = reprioritizePlan(plan, skillProgress, testResults, {});
    const slope = result.adaptiveOverlay.focusSkills.find(s => s.skillId === 'slope-intercept-form');
    expect(slope.currentAccuracy).toBe(90);
    expect(slope.delta).toBe('improved');
  });

  test('drill history inside the test-write grace window does NOT override', () => {
    const plan = makePlan();
    const testMs = Date.parse('2026-01-05T10:00:00');
    const testResults = {
      'test-1': {
        testId: 'test-1', testTitle: 'T1',
        attempts: [{
          completedAt: '2026-01-05T10:00:00', scaledScore: 600,
          diagnosticData: { questionDetails: [
            { skills: ['slope-intercept-form'], correct: false },
            { skills: ['slope-intercept-form'], correct: false },
          ] },
        }],
      },
    };
    // History stamped seconds after completedAt — these are the test's own
    // skill writes, not drills; the snapshot (0%) must stand.
    const skillProgress = {
      'slope-intercept-form': {
        correct: 0, attempts: 2,
        history: [
          { correct: false, timestamp: testMs + 1000 },
          { correct: false, timestamp: testMs + 2000 },
        ],
      },
    };
    const result = reprioritizePlan(plan, skillProgress, testResults, {});
    const slope = result.adaptiveOverlay.focusSkills.find(s => s.skillId === 'slope-intercept-form');
    expect(slope.currentAccuracy).toBe(0);
    expect(slope.delta).toBe('declined');
  });
});
