/**
 * studyPlanGenerator.firstPlan.test.js — pins the first-plan gating:
 * a single diagnostic produces a short, focused 2-week plan that ends with a
 * "Take Practice Test 2" unlock checkpoint; once a second test has produced
 * data, the generator opens up to the full horizon.
 */

import { generateStudyPlan } from '../studyPlanGenerator';

const mkDiag = (over = {}) => ({
  testId: 'synthetic-1',
  score: { scaled: 920, isMultiSection: true, sections: { math: 480, rw: 440 }, percentCorrect: 45 },
  skillAnalysis: {
    weakSkills: [
      { skillId: 'exponent-rules', name: 'Exponent Rules', domain: 'advanced-math', section: 'math', testAccuracy: 0, correct: 0, total: 2, primaryErrorType: 'CONCEPTUAL_GAP', missedPatterns: [], modules: ['exponents'], sections: [] },
      { skillId: 'words-in-context', name: 'Words In Context', domain: 'craft-and-structure', section: 'rw', testAccuracy: 0, correct: 0, total: 6, primaryErrorType: 'CONCEPTUAL_GAP', missedPatterns: [], modules: [], sections: [] },
    ],
    strongSkills: [],
  },
  prioritizedActions: [],
  errorPatterns: { totalWrong: 20, counts: {}, dominantPattern: null, summary: [] },
  difficultyAnalysis: {},
  timeAnalysis: { fadeEffect: 0 },
  trendAnalysis: { persistentWeaknesses: [] },
  scoreProjection: { easyWins: { count: 0, points: 0 } },
  ...over,
});

const allActivities = (plan) => plan.weeks.flatMap((w) => w.activities || []);

describe('generateStudyPlan — first-plan gating', () => {
  // A test date 9 weeks out would otherwise generate a ~9-week plan.
  const farTestDate = new Date(Date.now() + 63 * 24 * 60 * 60 * 1000).toISOString();

  test('the first plan (one test of data) is capped to 2 weeks', () => {
    const plan = generateStudyPlan(mkDiag(), { targetScore: 750, testDate: farTestDate });
    expect(plan.weeks.length).toBeLessThanOrEqual(2);
    expect(plan.weeksUntilTest).toBe(2);
  });

  test('the first plan ends with a "Take Practice Test 2" unlock checkpoint', () => {
    const plan = generateStudyPlan(mkDiag(), { targetScore: 750, testDate: farTestDate });
    const retest = allActivities(plan).find((a) => a.type === 'test');
    expect(retest).toBeTruthy();
    expect(retest.title).toBe('Take Practice Test 2');
    expect(retest.subtitle).toMatch(/unlock your full/i);
  });

  test('the first plan still places the student\'s weaknesses', () => {
    const plan = generateStudyPlan(mkDiag(), { targetScore: 750, testDate: farTestDate });
    const skillIds = allActivities(plan).map((a) => a.skillId).filter(Boolean);
    expect(skillIds).toContain('words-in-context');
  });

  test('once a second test has data, the plan opens past 2 weeks', () => {
    const longitudinal = {
      scoreTrajectory: [
        { testId: 'prior-1', scaledScore: 900, date: '2026-05-01' },
        { testId: 'synthetic-1', scaledScore: 920, date: '2026-06-01' },
      ],
      persistentWeaknesses: [],
      skillHistory: {},
    };
    const plan = generateStudyPlan(
      mkDiag(), { targetScore: 750, testDate: farTestDate }, {}, {}, null, longitudinal,
    );
    expect(plan.weeks.length).toBeGreaterThan(2);
  });
});
