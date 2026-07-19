// generateAndPersistHybridPlan touches Firestore + the AI cloud function —
// stub both so only the generation/merge pipeline is under test (per the
// setupTests convention; CRA jest sets resetMocks:true, so resolved values
// are installed per-test in beforeEach, not in the factories).
jest.mock('../../firebase/config', () => ({ db: {} }));
jest.mock('firebase/firestore', () => ({
  doc: jest.fn(),
  getDoc: jest.fn(),
  updateDoc: jest.fn(),
  setDoc: jest.fn(),
  collection: jest.fn(),
  addDoc: jest.fn(),
  getDocs: jest.fn(),
  query: jest.fn(),
  orderBy: jest.fn(),
  limit: jest.fn(),
  serverTimestamp: jest.fn(),
}));
jest.mock('../studyPlanService', () => ({ generateStudyPlan: jest.fn() }));

import { getDoc, updateDoc, setDoc, addDoc, serverTimestamp } from 'firebase/firestore';
import { generateStudyPlan as generateAIPlan } from '../studyPlanService';
import { generateAndPersistHybridPlan } from '../hybridStudyPlanService';
import * as generatorModule from '../studyPlanGenerator';
import {
  buildLongitudinalEvidence,
  buildSkillHistoryForAI,
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

  test('REGRESSION: blank attempts never enter trajectory, counts, or latestAttempt', () => {
    const results = {
      'test-1': {
        testId: 'test-1',
        testTitle: 'Test 1',
        attempts: [
          { completedAt: '2026-01-01T00:00:00Z', scaledScore: 600, rawScore: 30, diagnosticData: { questionDetails: [] } },
          // newer blank submit at the composite IRT floor — the exact row that
          // charted as a 400 node in the Study Plan Score History strip
          { completedAt: '2026-02-01T00:00:00Z', scaledScore: 400, isMultiSection: true, rawScore: null },
        ],
      },
    };
    const evidence = buildLongitudinalEvidence(results);
    expect(evidence.totalAttempts).toBe(1);
    expect(evidence.scoreTrajectory).toHaveLength(1);
    expect(evidence.scoreTrajectory[0].scaledScore).toBe(600);
    expect(evidence.latestAttempt.scaledScore).toBe(600); // never the blank row
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
    // Recency-weighted: latest test (1/2 = 50%) at weight 1.0, older test
    // (0/2 = 0%) at 0.65 → (50 + 0×0.65)/1.65 ≈ 30. Was 25 (lifetime avg).
    expect(slopeWeak.accuracy).toBe(30);
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
    // Recency-weighted (see comment above): (50×1.0 + 0×0.65)/1.65 ≈ 30.
    expect(factoringWeak.accuracy).toBe(30);
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

describe('buildSkillHistoryForAI', () => {
  // Local (per-question) skillHistory shape, as buildLongitudinalEvidence
  // produces it: appearances pushed in attempt-completion order.
  const perQuestion = (entries) => ({ appearances: entries });

  test('aggregates per-question appearances into one per-test entry with accuracy %', () => {
    const skillHistory = {
      quadratics: perQuestion([
        { testId: 'test-1', date: '2026-05-01T00:00:00Z', correct: false },
        { testId: 'test-1', date: '2026-05-01T00:00:00Z', correct: false },
        { testId: 'test-1', date: '2026-05-01T00:00:00Z', correct: true },
        { testId: 'test-2', date: '2026-06-01T00:00:00Z', correct: true },
        { testId: 'test-2', date: '2026-06-01T00:00:00Z', correct: true },
      ]),
    };
    const out = buildSkillHistoryForAI(skillHistory);
    // One appearance PER TEST, chronological, each carrying aggregate accuracy —
    // the exact shape the Cloud Function's first-vs-last comparison consumes.
    expect(out.quadratics.appearances).toEqual([
      { testId: 'test-1', date: '2026-05-01T00:00:00Z', accuracy: 33 },
      { testId: 'test-2', date: '2026-06-01T00:00:00Z', accuracy: 100 },
    ]);
    // Server logic: last - first >= 20 → "improved since last test".
    const apps = out.quadratics.appearances;
    expect(apps[apps.length - 1].accuracy - apps[0].accuracy).toBeGreaterThanOrEqual(20);
  });

  test('detectable regression: first >= 70 and last < 50 survive aggregation', () => {
    const skillHistory = {
      statistics: perQuestion([
        { testId: 'test-1', date: '2026-05-01T00:00:00Z', correct: true },
        { testId: 'test-1', date: '2026-05-01T00:00:00Z', correct: true },
        { testId: 'test-1', date: '2026-05-01T00:00:00Z', correct: true },
        { testId: 'test-1', date: '2026-05-01T00:00:00Z', correct: false },
        { testId: 'test-2', date: '2026-06-01T00:00:00Z', correct: false },
        { testId: 'test-2', date: '2026-06-01T00:00:00Z', correct: true },
        { testId: 'test-2', date: '2026-06-01T00:00:00Z', correct: false },
      ]),
    };
    const apps = buildSkillHistoryForAI(skillHistory).statistics.appearances;
    expect(apps[0].accuracy).toBe(75);
    expect(apps[apps.length - 1].accuracy).toBe(33);
  });

  test('caps skills at maxSkills, prioritizing multi-test skills over single-test ones', () => {
    const skillHistory = {
      // Single-test skill seen most recently — would win on recency alone.
      'single-recent': perQuestion([
        { testId: 'test-9', date: '2026-07-01T00:00:00Z', correct: true },
      ]),
      // Multi-test skills — only these can show improvement/regression.
      'multi-a': perQuestion([
        { testId: 'test-1', date: '2026-05-01T00:00:00Z', correct: true },
        { testId: 'test-2', date: '2026-06-01T00:00:00Z', correct: false },
      ]),
      'multi-b': perQuestion([
        { testId: 'test-1', date: '2026-05-01T00:00:00Z', correct: false },
        { testId: 'test-2', date: '2026-06-01T00:00:00Z', correct: true },
      ]),
    };
    const out = buildSkillHistoryForAI(skillHistory, { maxSkills: 2 });
    expect(Object.keys(out).sort()).toEqual(['multi-a', 'multi-b']);
  });

  test('keeps only the most recent appearances per skill (chronological order intact)', () => {
    const appearances = [];
    for (let i = 1; i <= 9; i++) {
      appearances.push({ testId: `test-${i}`, date: `2026-01-0${i}T00:00:00Z`, correct: i % 2 === 0 });
    }
    const out = buildSkillHistoryForAI({ algebra: perQuestion(appearances) }, { maxAppearancesPerSkill: 6 });
    const apps = out.algebra.appearances;
    expect(apps).toHaveLength(6);
    expect(apps[0].testId).toBe('test-4'); // oldest 3 trimmed
    expect(apps[apps.length - 1].testId).toBe('test-9');
  });

  test('handles empty / malformed input', () => {
    expect(buildSkillHistoryForAI({})).toEqual({});
    expect(buildSkillHistoryForAI(undefined)).toEqual({});
    expect(buildSkillHistoryForAI({ broken: {} })).toEqual({ broken: { appearances: [] } });
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

  test('AI nextActionReason overlays the reason; deterministic action stands', () => {
    // Narration contract (2026-07-19): the AI never authors nextAction — its
    // unvalidated title/moduleId/lessonId could point at content that doesn't
    // exist. It contributes only the coach-voice reason for the deterministic
    // first action.
    const det = {
      summary: { headline: 'Plan' },
      weeks: [{ weekNumber: 1, title: 'W1', activities: [{ title: 'Det first', subtitle: 'Sub', type: 'lesson', duration: 10, moduleId: 'algebra' }] }],
    };
    const ai = {
      plan: {
        nextActionReason: '3/4 wrong in linear equations — rebuild the concept first',
        // Legacy full-object shape is ignored entirely:
        nextAction: { title: 'AI priority action', reason: 'Biggest ROI', type: 'practice', duration: 20, moduleId: 'geometry' },
      },
    };
    const result = mergeHybridPlan(det, ai);
    expect(result.nextAction.title).toBe('Det first');
    expect(result.nextAction.moduleId).toBe('algebra');
    expect(result.nextAction.reason).toBe('3/4 wrong in linear equations — rebuild the concept first');
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

  test('preserves rationale from AI weeks (matched by weekNumber)', () => {
    const det = {
      summary: { headline: 'Plan' },
      weeks: [{ weekNumber: 1, title: 'W1', goalDescription: 'Goal 1', activities: [] }],
    };
    const ai = {
      plan: {
        weeks: [{ weekNumber: 1, title: 'AI W1', goalDescription: 'AI goal', rationale: 'Slope-intercept is 25% accuracy — biggest gap' }],
      },
    };
    const result = mergeHybridPlan(det, ai);
    expect(result.weeks[0].rationale).toBe('Slope-intercept is 25% accuracy — biggest gap');
  });

  test('AI week narration without a matching weekNumber does NOT graft onto other weeks', () => {
    // The old positional merge let the AI label week 2 "Quadratics deep-dive"
    // over deterministic statistics activities. weekNumber matching kills that.
    const det = {
      summary: { headline: 'Plan' },
      weeks: [
        { weekNumber: 1, title: 'Det W1', goalDescription: 'G1', activities: [] },
        { weekNumber: 2, title: 'Det W2', goalDescription: 'G2', activities: [] },
      ],
    };
    const ai = {
      plan: {
        weeks: [{ weekNumber: 5, title: 'Stray', goalDescription: 'Wrong week', rationale: 'nope' }],
      },
    };
    const result = mergeHybridPlan(det, ai);
    expect(result.weeks[0].title).toBe('Det W1');
    expect(result.weeks[1].title).toBe('Det W2');
    expect(result.weeks[1].goalDescription).toBe('G2');
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

describe('generateAndPersistHybridPlan — longitudinal threading', () => {
  // Diagnostic fixture matching studyPlanGenerator.firstPlan.test.js.
  const mkDiag = (over = {}) => ({
    testId: 'test-2',
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

  // Two completed tests worth of history — enough that the generator's
  // testsWithData count must exceed 1 (i.e. NOT a first plan).
  const mkResults = () => ({
    'test-1': {
      testId: 'test-1',
      testTitle: 'Test 1',
      attempts: [
        { completedAt: '2026-05-01T00:00:00Z', scaledScore: 900, diagnosticData: { questionDetails: [] } },
      ],
    },
    'test-2': {
      testId: 'test-2',
      testTitle: 'Test 2',
      attempts: [
        { completedAt: '2026-06-01T00:00:00Z', scaledScore: 920, diagnosticData: { questionDetails: [] } },
      ],
    },
  });

  // A test date 9 weeks out would otherwise allow a ~5-week (max) plan.
  const farTestDate = new Date(Date.now() + 63 * 24 * 60 * 60 * 1000).toISOString();

  beforeEach(() => {
    getDoc.mockResolvedValue({ exists: () => true, data: () => ({}) });
    addDoc.mockResolvedValue({ id: 'artifact-1' });
    updateDoc.mockResolvedValue(undefined);
    setDoc.mockResolvedValue(undefined);
    serverTimestamp.mockReturnValue('server-ts');
    // AI generation fails — the pipeline must fall back to deterministic-only.
    generateAIPlan.mockRejectedValue(new Error('AI offline (test)'));
  });

  test('REGRESSION: with 2+ completed tests the plan is NOT first-plan-capped', async () => {
    // The service used to drop `longitudinal` when calling the deterministic
    // generator, so testsWithData was always 1 and EVERY plan (even after
    // test 5) stayed capped at 2 weeks with the unlock checkpoint.
    const { artifact } = await generateAndPersistHybridPlan({
      userId: 'u1',
      diagnostic: mkDiag(),
      userProfile: { targetScore: 750, testDate: farTestDate },
      practiceTestResults: mkResults(),
    });
    expect(artifact.plan.weeks.length).toBeGreaterThan(2);
    const titles = artifact.plan.weeks.flatMap((w) => (w.activities || []).map((a) => a.title));
    expect(titles).not.toContain('Take Practice Test 2');
  });

  test('forwards longitudinal + answeredQuestionIds to the deterministic generator', async () => {
    const spy = jest.spyOn(generatorModule, 'generateStudyPlan');
    try {
      await generateAndPersistHybridPlan({
        userId: 'u1',
        diagnostic: mkDiag(),
        userProfile: { targetScore: 750, testDate: farTestDate },
        practiceTestResults: mkResults(),
        answeredQuestionIds: ['seen-q-1', 'seen-q-2'],
      });
      expect(spy).toHaveBeenCalledTimes(1);
      const args = spy.mock.calls[0];
      // 6th param: the longitudinal evidence built from practiceTestResults.
      expect(args[5]).toEqual(expect.objectContaining({ totalTests: 2 }));
      // 7th param: answeredQuestionIds passed by the caller.
      expect(args[6]).toEqual(['seen-q-1', 'seen-q-2']);
    } finally {
      spy.mockRestore();
    }
  });

  test('sends per-test aggregated skillHistory (with accuracy) to the AI plan call', async () => {
    const results = mkResults();
    results['test-1'].attempts[0].diagnosticData.questionDetails = [
      { skills: ['exponent-rules'], isCorrect: false },
      { skills: ['exponent-rules'], isCorrect: false },
    ];
    results['test-2'].attempts[0].diagnosticData.questionDetails = [
      { skills: ['exponent-rules'], isCorrect: true },
      { skills: ['exponent-rules'], isCorrect: true },
    ];

    await generateAndPersistHybridPlan({
      userId: 'u1',
      diagnostic: mkDiag(),
      userProfile: { targetScore: 750, testDate: farTestDate },
      practiceTestResults: results,
    });

    expect(generateAIPlan).toHaveBeenCalledTimes(1);
    const longitudinalForAI = generateAIPlan.mock.calls[0][3];
    // The Cloud Function's prompt builder reads appearances[i].accuracy and
    // compares first vs last — the payload must be per-test aggregates, not
    // the local per-question {correct} shape.
    expect(longitudinalForAI.skillHistory['exponent-rules'].appearances).toEqual([
      { testId: 'test-1', date: '2026-05-01T00:00:00Z', accuracy: 0 },
      { testId: 'test-2', date: '2026-06-01T00:00:00Z', accuracy: 100 },
    ]);
  });

  test('backward compatible: callers that omit answeredQuestionIds still generate', async () => {
    const spy = jest.spyOn(generatorModule, 'generateStudyPlan');
    try {
      const { artifact } = await generateAndPersistHybridPlan({
        userId: 'u1',
        diagnostic: mkDiag({ testId: 'solo-test' }),
        userProfile: { targetScore: 750, testDate: farTestDate },
        practiceTestResults: {},
      });
      expect(spy.mock.calls[0][6]).toEqual([]);
      expect(artifact.plan.weeks.length).toBeGreaterThan(0);
    } finally {
      spy.mockRestore();
    }
  });
});
