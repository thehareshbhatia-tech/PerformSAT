import {
  buildLongitudinalEvidence,
  computePlanDelta,
  mergeHybridPlan,
  MERGE_VERSION,
} from '../studyPlanMerger';

describe('buildLongitudinalEvidence', () => {
  test('returns empty structure for no results', () => {
    const result = buildLongitudinalEvidence({});
    expect(result.totalTests).toBe(0);
    expect(result.totalAttempts).toBe(0);
    expect(result.scoreTrajectory).toEqual([]);
    expect(result.persistentWeaknesses).toEqual([]);
    expect(result.latestAttempt).toBeNull();
  });

  test('builds trajectory from multiple test attempts', () => {
    const results = {
      'test-1': {
        testId: 'test-1',
        testTitle: 'Test 1',
        attempts: [
          { completedAt: '2026-01-01T00:00:00Z', scaledScore: 600, diagnosticData: { questionDetails: [] } },
          { completedAt: '2026-01-15T00:00:00Z', scaledScore: 620, diagnosticData: { questionDetails: [] } },
        ],
      },
      'test-2': {
        testId: 'test-2',
        testTitle: 'Test 2',
        attempts: [
          { completedAt: '2026-02-01T00:00:00Z', scaledScore: 650, diagnosticData: { questionDetails: [] } },
        ],
      },
    };

    const evidence = buildLongitudinalEvidence(results);
    expect(evidence.totalTests).toBe(2);
    expect(evidence.totalAttempts).toBe(3);
    expect(evidence.scoreTrajectory).toHaveLength(3);
    expect(evidence.scoreTrajectory[0].scaledScore).toBe(600);
    expect(evidence.scoreTrajectory[2].scaledScore).toBe(650);
    expect(evidence.latestAttempt.scaledScore).toBe(650);
  });

  test('identifies persistent weaknesses from question details', () => {
    const results = {
      'test-1': {
        testId: 'test-1',
        testTitle: 'Test 1',
        attempts: [{
          completedAt: '2026-01-01T00:00:00Z',
          scaledScore: 600,
          diagnosticData: {
            questionDetails: [
              { skills: ['slope-intercept-form'], correct: false },
              { skills: ['slope-intercept-form'], correct: false },
              { skills: ['quadratic-formula'], correct: true },
            ],
          },
        }],
      },
      'test-2': {
        testId: 'test-2',
        testTitle: 'Test 2',
        attempts: [{
          completedAt: '2026-02-01T00:00:00Z',
          scaledScore: 620,
          diagnosticData: {
            questionDetails: [
              { skills: ['slope-intercept-form'], correct: false },
              { skills: ['slope-intercept-form'], correct: true },
              { skills: ['quadratic-formula'], correct: true },
            ],
          },
        }],
      },
    };

    const evidence = buildLongitudinalEvidence(results);
    expect(evidence.persistentWeaknesses.length).toBeGreaterThanOrEqual(1);
    const slopeWeak = evidence.persistentWeaknesses.find(w => w.skillId === 'slope-intercept-form');
    expect(slopeWeak).toBeTruthy();
    expect(slopeWeak.accuracy).toBe(25); // 1/4
    expect(slopeWeak.testCount).toBe(2);
  });
});

describe('computePlanDelta', () => {
  test('returns isFirst:true when no previous plan', () => {
    const current = { currentScore: 600, skillGaps: [], intensity: 'moderate' };
    const delta = computePlanDelta(null, current);
    expect(delta.isFirst).toBe(true);
    expect(delta.changes).toEqual([]);
  });

  test('detects score change', () => {
    const prev = { currentScore: 580, skillGaps: [], intensity: 'moderate' };
    const curr = { currentScore: 620, skillGaps: [], intensity: 'moderate' };
    const delta = computePlanDelta(prev, curr);
    expect(delta.isFirst).toBe(false);
    const scoreChange = delta.changes.find(c => c.type === 'score');
    expect(scoreChange).toBeTruthy();
    expect(scoreChange.direction).toBe('up');
    expect(scoreChange.magnitude).toBe(40);
  });

  test('detects new and resolved skill gaps', () => {
    const prev = {
      currentScore: 600,
      skillGaps: [{ skillId: 'skill-a' }, { skillId: 'skill-b' }],
      intensity: 'moderate',
    };
    const curr = {
      currentScore: 600,
      skillGaps: [{ skillId: 'skill-b' }, { skillId: 'skill-c' }],
      intensity: 'moderate',
    };
    const delta = computePlanDelta(prev, curr);
    const newGaps = delta.changes.find(c => c.type === 'new_gaps');
    const resolved = delta.changes.find(c => c.type === 'resolved_gaps');
    expect(newGaps.skillIds).toEqual(['skill-c']);
    expect(resolved.skillIds).toEqual(['skill-a']);
  });

  test('detects intensity change', () => {
    const prev = { currentScore: 600, skillGaps: [], intensity: 'moderate' };
    const curr = { currentScore: 600, skillGaps: [], intensity: 'intensive' };
    const delta = computePlanDelta(prev, curr);
    const intensityChange = delta.changes.find(c => c.type === 'intensity');
    expect(intensityChange).toBeTruthy();
  });
});

describe('mergeHybridPlan', () => {
  test('returns null for null deterministic plan', () => {
    expect(mergeHybridPlan(null)).toBeNull();
  });

  test('returns deterministic plan when no AI plan', () => {
    const det = {
      summary: { headline: 'Det Plan' },
      weeks: [{ weekNumber: 1, title: 'Week 1', activities: [] }],
    };
    const result = mergeHybridPlan(det);
    expect(result.summary.headline).toBe('Det Plan');
    expect(result.weeks).toHaveLength(1);
  });

  test('overlays AI headline onto deterministic plan', () => {
    const det = {
      summary: { headline: 'Det Plan', stats: { weeksInPlan: 4 } },
      weeks: [{ weekNumber: 1, title: 'Week 1', activities: [] }],
    };
    const ai = {
      plan: {
        summary: { headline: 'AI Headline', diagnosis: 'AI diagnosis text' },
        weeks: [{ title: 'AI Week 1', goalDescription: 'AI goal' }],
      },
      generatedAt: '2026-01-01',
      model: 'claude',
    };
    const result = mergeHybridPlan(det, ai);
    expect(result.summary.headline).toBe('AI Headline');
    expect(result.summary.aiDiagnosis).toBe('AI diagnosis text');
    expect(result.summary.stats.weeksInPlan).toBe(4);
    expect(result.weeks[0].aiTitle).toBe('AI Week 1');
    expect(result.weeks[0].title).toBe('Week 1');
  });

  test('preserves targeted questions from AI plan', () => {
    const det = { summary: { headline: 'X' }, weeks: [] };
    const ai = { plan: { targetedQuestions: [{ id: 'q1' }] }, generatedAt: '2026-01-01', model: 'c' };
    const result = mergeHybridPlan(det, ai);
    expect(result.targetedQuestions).toEqual([{ id: 'q1' }]);
  });
});
