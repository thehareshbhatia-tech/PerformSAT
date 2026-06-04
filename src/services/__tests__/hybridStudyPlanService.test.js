import {
  buildLongitudinalEvidence,
  computePlanDelta,
  mergeHybridPlan,
  stripEmojis,
  MERGE_VERSION,
} from '../studyPlanMerger';

describe('stripEmojis', () => {
  test('removes common emojis from text', () => {
    expect(stripEmojis('Fix algebra errors 🎯 and geometry gaps 📚')).toBe('Fix algebra errors and geometry gaps');
  });

  test('returns non-string values unchanged', () => {
    expect(stripEmojis(42)).toBe(42);
    expect(stripEmojis(null)).toBe(null);
  });

  test('collapses leftover whitespace after removal', () => {
    expect(stripEmojis('Hello  🔥  world')).toBe('Hello world');
  });
});

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

  test('identifies persistent weaknesses from array-shaped questionDetails', () => {
    const results = {
      'test-1': {
        testId: 'test-1',
        testTitle: 'Test 1',
        attempts: [{
          completedAt: '2026-01-01T00:00:00Z',
          scaledScore: 600,
          diagnosticData: {
            questionDetails: [
              { skills: ['slope-intercept-form'], isCorrect: false },
              { skills: ['slope-intercept-form'], isCorrect: false },
              { skills: ['quadratic-formula'], isCorrect: true },
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
              { skills: ['slope-intercept-form'], isCorrect: false },
              { skills: ['slope-intercept-form'], isCorrect: true },
              { skills: ['quadratic-formula'], isCorrect: true },
            ],
          },
        }],
      },
    };

    const evidence = buildLongitudinalEvidence(results);
    expect(evidence.persistentWeaknesses.length).toBeGreaterThanOrEqual(1);
    const slopeWeak = evidence.persistentWeaknesses.find(w => w.skillId === 'slope-intercept-form');
    expect(slopeWeak).toBeTruthy();
    expect(slopeWeak.accuracy).toBe(25);
    expect(slopeWeak.testCount).toBe(2);
  });

  test('handles object-shaped questionDetails (keyed by mod-q)', () => {
    const results = {
      'test-1': {
        testId: 'test-1',
        testTitle: 'Test 1',
        attempts: [{
          completedAt: '2026-01-01T00:00:00Z',
          scaledScore: 580,
          diagnosticData: {
            questionDetails: {
              '0-0': { skills: ['factoring'], isCorrect: false },
              '0-1': { skills: ['factoring'], isCorrect: false },
              '0-2': { skills: ['slope-intercept-form'], isCorrect: true },
            },
          },
        }],
      },
      'test-2': {
        testId: 'test-2',
        testTitle: 'Test 2',
        attempts: [{
          completedAt: '2026-02-01T00:00:00Z',
          scaledScore: 600,
          diagnosticData: {
            questionDetails: {
              '0-0': { skills: ['factoring'], isCorrect: false },
              '0-1': { skills: ['factoring'], isCorrect: true },
            },
          },
        }],
      },
    };

    const evidence = buildLongitudinalEvidence(results);
    const factoringWeak = evidence.persistentWeaknesses.find(w => w.skillId === 'factoring');
    expect(factoringWeak).toBeTruthy();
    expect(factoringWeak.accuracy).toBe(25);
    expect(factoringWeak.testCount).toBe(2);
  });

  test('correct answers are counted (a mastered skill is NOT flagged persistent)', () => {
    // Regression: buildLongitudinalEvidence used to read q.correct while the
    // producer writes q.isCorrect, so every answer counted as wrong and every
    // repeated skill was flagged a persistent weakness.
    const results = {
      'test-1': {
        testId: 'test-1',
        attempts: [{
          completedAt: '2026-01-01T00:00:00Z',
          scaledScore: 600,
          diagnosticData: {
            questionDetails: [
              { skills: ['circle-equations'], isCorrect: true },
              { skills: ['circle-equations'], isCorrect: true },
            ],
          },
        }],
      },
      'test-2': {
        testId: 'test-2',
        attempts: [{
          completedAt: '2026-02-01T00:00:00Z',
          scaledScore: 620,
          diagnosticData: {
            questionDetails: [
              { skills: ['circle-equations'], isCorrect: true },
            ],
          },
        }],
      },
    };

    const evidence = buildLongitudinalEvidence(results);
    expect(evidence.skillHistory['circle-equations'].correct).toBe(3);
    expect(evidence.persistentWeaknesses.find(w => w.skillId === 'circle-equations')).toBeUndefined();
  });

  test('falls back to legacy `correct` field on old persisted attempts', () => {
    const results = {
      'test-1': {
        testId: 'test-1',
        attempts: [{
          completedAt: '2026-01-01T00:00:00Z',
          scaledScore: 600,
          diagnosticData: {
            questionDetails: [
              { skills: ['exponent-rules'], correct: true },   // legacy shape
              { skills: ['exponent-rules'], isCorrect: false }, // current shape
            ],
          },
        }],
      },
    };

    const evidence = buildLongitudinalEvidence(results);
    expect(evidence.skillHistory['exponent-rules'].attempts).toBe(2);
    expect(evidence.skillHistory['exponent-rules'].correct).toBe(1);
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
      weeks: [{ weekNumber: 1, title: 'Week 1', activities: [{ title: 'Activity 1', subtitle: 'Sub', type: 'lesson', duration: 10 }] }],
    };
    const result = mergeHybridPlan(det);
    expect(result.summary.headline).toBe('Det Plan');
    expect(result.weeks).toHaveLength(1);
  });

  test('overlays AI headline and diagnosis onto deterministic plan', () => {
    const det = {
      summary: { headline: 'Det Plan', stats: { weeksInPlan: 4 } },
      weeks: [{ weekNumber: 1, title: 'Week 1', activities: [] }],
    };
    const ai = {
      plan: {
        summary: { headline: 'AI Headline', diagnosis: 'AI diagnosis text' },
        weeks: [{ title: 'AI W1', goalDescription: 'AI goal' }],
      },
      generatedAt: '2026-01-01',
      model: 'claude',
    };
    const result = mergeHybridPlan(det, ai);
    expect(result.summary.headline).toBe('AI Headline');
    expect(result.summary.diagnosis).toBe('AI diagnosis text');
    expect(result.summary.stats.weeksInPlan).toBe(4);
  });

  test('strips emojis from all merged text fields', () => {
    const det = {
      summary: { headline: '🎯 Fix algebra first' },
      weeks: [{
        weekNumber: 1,
        title: '📚 Week 1 Focus',
        goalDescription: 'Learn slope ✅',
        activities: [{ title: '🔥 Master slope', subtitle: '📈 You missed 3/4', type: 'lesson', duration: 10, icon: '📝' }],
      }],
    };
    const result = mergeHybridPlan(det);
    expect(result.summary.headline).toBe('Fix algebra first');
    expect(result.weeks[0].title).toBe('Week 1 Focus');
    expect(result.weeks[0].goalDescription).toBe('Learn slope');
    expect(result.weeks[0].activities[0].title).toBe('Master slope');
    expect(result.weeks[0].activities[0].subtitle).toBe('You missed 3/4');
    expect(result.weeks[0].activities[0].icon).toBeNull();
  });

  test('derives nextAction from first incomplete activity when not provided', () => {
    const det = {
      summary: { headline: 'Plan' },
      weeks: [{
        weekNumber: 1, title: 'W1', activities: [
          { title: 'Done task', subtitle: 'Done', type: 'lesson', duration: 10, completed: true },
          { title: 'Next task', subtitle: 'Why this matters', type: 'practice', duration: 15, moduleId: 'algebra' },
        ],
      }],
    };
    const result = mergeHybridPlan(det);
    expect(result.nextAction).toBeTruthy();
    expect(result.nextAction.title).toBe('Next task');
    expect(result.nextAction.reason).toBe('Why this matters');
    expect(result.nextAction.type).toBe('practice');
    expect(result.nextAction.moduleId).toBe('algebra');
  });

  test('prefers AI nextAction over derived one', () => {
    const det = {
      summary: { headline: 'Plan' },
      weeks: [{ weekNumber: 1, title: 'W1', activities: [{ title: 'Det first', subtitle: 'Sub', type: 'lesson', duration: 10 }] }],
    };
    const ai = {
      plan: {
        nextAction: { title: 'AI priority action', reason: 'Biggest ROI', type: 'practice', duration: 20, moduleId: 'geometry' },
      },
    };
    const result = mergeHybridPlan(det, ai);
    expect(result.nextAction.title).toBe('AI priority action');
    expect(result.nextAction.reason).toBe('Biggest ROI');
    expect(result.nextAction.moduleId).toBe('geometry');
  });

  test('preserves targeted questions from AI plan', () => {
    const det = { summary: { headline: 'X' }, weeks: [] };
    const ai = { plan: { targetedQuestions: [{ id: 'q1' }] }, generatedAt: '2026-01-01', model: 'c' };
    const result = mergeHybridPlan(det, ai);
    expect(result.targetedQuestions).toEqual([{ id: 'q1' }]);
  });

  test('preserves deterministic summary.diagnosis when AI has none', () => {
    const det = {
      summary: { headline: 'Fix careless errors', diagnosis: 'You had 4 careless mistakes costing ~30 points.' },
      weeks: [{ weekNumber: 1, title: 'W1', activities: [] }],
    };
    const result = mergeHybridPlan(det);
    expect(result.summary.diagnosis).toBe('You had 4 careless mistakes costing ~30 points.');
  });

  test('AI diagnosis overrides deterministic when present', () => {
    const det = {
      summary: { headline: 'Det', diagnosis: 'Deterministic diagnosis' },
      weeks: [],
    };
    const ai = {
      plan: {
        summary: { headline: 'AI head', diagnosis: 'AI-generated evidence-linked diagnosis' },
      },
    };
    const result = mergeHybridPlan(det, ai);
    expect(result.summary.diagnosis).toBe('AI-generated evidence-linked diagnosis');
  });

  test('preserves rationale from AI weeks', () => {
    const det = {
      summary: { headline: 'Plan' },
      weeks: [{ weekNumber: 1, title: 'W1', goalDescription: 'Goal 1', activities: [] }],
    };
    const ai = {
      plan: {
        weeks: [{ title: 'AI W1', goalDescription: 'AI goal', rationale: 'Slope-intercept is 25% accuracy — biggest gap' }],
      },
    };
    const result = mergeHybridPlan(det, ai);
    expect(result.weeks[0].rationale).toBe('Slope-intercept is 25% accuracy — biggest gap');
  });

  test('preserves deltaFromPrevious and persistentWeaknessStrategy from AI', () => {
    const det = { summary: { headline: 'X' }, weeks: [] };
    const ai = {
      plan: {
        deltaFromPrevious: 'Score improved 20 points; factoring is now a strength',
        persistentWeaknessStrategy: 'Reteach slope-intercept from scratch — 3 tests at <30%',
      },
    };
    const result = mergeHybridPlan(det, ai);
    expect(result.deltaFromPrevious).toBe('Score improved 20 points; factoring is now a strength');
    expect(result.persistentWeaknessStrategy).toBe('Reteach slope-intercept from scratch — 3 tests at <30%');
  });

  test('preserves deterministic targetedQuestionIds through AI merge', () => {
    const det = {
      summary: { headline: 'Plan' },
      weeks: [],
      targetedQuestionIds: ['q-1', 'q-2', 'q-3'],
      practiceAssignments: [{ weekNumber: 1, questionIds: ['q-1', 'q-2', 'q-3'], count: 3 }],
      assignmentSummary: { totalAssigned: 3 },
    };
    const ai = { plan: { targetedQuestions: [{ id: 'ai-q' }] } };
    const result = mergeHybridPlan(det, ai);
    expect(result.targetedQuestionIds).toEqual(['q-1', 'q-2', 'q-3']);
    expect(result.practiceAssignments).toEqual(det.practiceAssignments);
    expect(result.assignmentSummary).toEqual(det.assignmentSummary);
    expect(result.targetedQuestions).toEqual([{ id: 'ai-q' }]);
  });

  test('carries assignment fields when no AI plan provided', () => {
    const det = {
      summary: { headline: 'Solo' },
      weeks: [{ weekNumber: 1, title: 'W1', activities: [] }],
      targetedQuestionIds: ['bank-off-alg-001'],
      practiceAssignments: [{ weekNumber: 1, questionIds: ['bank-off-alg-001'], count: 1 }],
    };
    const result = mergeHybridPlan(det);
    expect(result.targetedQuestionIds).toEqual(['bank-off-alg-001']);
    expect(result.practiceAssignments).toHaveLength(1);
  });
});
