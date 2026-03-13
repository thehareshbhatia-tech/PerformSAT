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
});
