/**
 * studyPlanGenerator.reinsertion.test.js — pins cross-session wrong-answer
 * reinsertion. The previous plan's missed adaptive questions must be folded
 * into the NEW plan's adaptivePractice seed (front-loaded into their matching
 * difficulty bucket) so the adaptive session engine actually re-serves them.
 * Previously they were written to weeklyPlan[0].targetedQuestionIds, which
 * nothing read — a dead feature.
 */

import { generateStudyPlan } from '../studyPlanGenerator';

const mkDiag = (over = {}) => ({
  testId: 'synthetic-reinsert',
  score: { scaled: 920, isMultiSection: true, sections: { math: 480, rw: 440 }, percentCorrect: 45 },
  skillAnalysis: {
    weakSkills: [
      { skillId: 'exponent-rules', name: 'Exponent Rules', domain: 'advanced-math', section: 'math', testAccuracy: 0, correct: 0, total: 2, primaryErrorType: 'CONCEPTUAL_GAP', missedPatterns: [], modules: ['exponents'], sections: [] },
      { skillId: 'linear-equations', name: 'Linear Equations', domain: 'algebra', section: 'math', testAccuracy: 20, correct: 1, total: 5, primaryErrorType: 'CONCEPTUAL_GAP', missedPatterns: [], modules: ['linear-equations'], sections: [] },
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

describe('generateStudyPlan — cross-session wrong-answer reinsertion', () => {
  test('a missed id from the prior plan is front-loaded into the new adaptive seed', () => {
    // A first plan gives us a real, resolvable MCQ id from the bank.
    const first = generateStudyPlan(mkDiag(), { targetScore: 750 });
    const missedId = first.adaptivePractice.poolIds[0];
    expect(missedId).toBeTruthy();

    const previousPlan = {
      adaptivePracticeState: {
        answered: [{ id: missedId, correct: false, isRetry: false }],
      },
    };

    // 5th positional arg is previousPlan.
    const next = generateStudyPlan(mkDiag(), { targetScore: 750 }, {}, {}, previousPlan);
    const seed = next.adaptivePractice;

    // The missed id is recorded as reinserted and lives in the pool.
    expect(seed.reinsertedWrongIds).toContain(missedId);
    expect(seed.wrongAnswerReinsertion).toBeGreaterThanOrEqual(1);
    expect(seed.poolIds).toContain(missedId);

    // And it is at the FRONT of its matching difficulty bucket, so the engine
    // (which reads byDifficulty[currentDifficulty] in order) serves it first.
    const atFrontOfSomeBucket = Object.values(seed.byDifficulty)
      .some(ids => Array.isArray(ids) && ids[0] === missedId);
    expect(atFrontOfSomeBucket).toBe(true);

    // Deduped: the id appears exactly once across all buckets.
    const occurrences = Object.values(seed.byDifficulty)
      .flat()
      .filter(id => id === missedId).length;
    expect(occurrences).toBe(1);
  });

  test('correct/retry answers from the prior plan are NOT reinserted', () => {
    const first = generateStudyPlan(mkDiag(), { targetScore: 750 });
    const someId = first.adaptivePractice.poolIds[0];
    const previousPlan = {
      adaptivePracticeState: {
        answered: [
          { id: someId, correct: true, isRetry: false },   // right — skip
          { id: someId, correct: false, isRetry: true },    // retry — skip
        ],
      },
    };
    const next = generateStudyPlan(mkDiag(), { targetScore: 750 }, {}, {}, previousPlan);
    expect(next.adaptivePractice.wrongAnswerReinsertion).toBeUndefined();
  });

  test('no previous plan → no reinsertion marker on the seed', () => {
    const plan = generateStudyPlan(mkDiag(), { targetScore: 750 });
    expect(plan.adaptivePractice.wrongAnswerReinsertion).toBeUndefined();
    expect(plan.adaptivePractice.reinsertedWrongIds).toBeUndefined();
  });
});
