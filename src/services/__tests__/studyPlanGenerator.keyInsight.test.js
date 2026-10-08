/**
 * studyPlanGenerator.keyInsight.test.js — diagnostic-v3 spec §1.1 root cause A
 * (Phase 0). The key insight said "Fixing just these would add ~650 points":
 * it summed two independent error-type re-scorings (the top two by gain, not
 * the careless + trap it named), and on a 20-item diagnostic section each
 * flipped item rescales to ~30 points. No branch may project points for a
 * subset of misses — counts only.
 */
import { generateStudyPlan } from '../studyPlanGenerator';
import { generateRileyPlan, RILEY_NOW } from '../__fixtures__/rileySitting';

jest.mock('../practiceTestService', () => ({ loadAttemptSnapshot: jest.fn() }));
jest.mock('../miniDiagnostic/buildDiagnosticTest', () => ({
  rebuildDiagnosticTest: jest.fn(),
  manifestFromServedItemIds: jest.fn(),
}));

// Any points figure, gain, or approximation in the insight copy.
const POINTS_PROJECTION = /\bpoints?\b|\bpts\b|~\s*\d|\+\s*\d|\bwould add\b/i;

const expectNoProjection = (keyInsight) => {
  expect(keyInsight).toBeTruthy();
  expect(`${keyInsight.title} ${keyInsight.message}`).not.toMatch(POINTS_PROJECTION);
};

const mkDiag = (over = {}) => ({
  testId: 'practice-test-3',
  score: { scaled: 900, isMultiSection: true, sections: { math: 450, rw: 450 }, percentCorrect: 45 },
  skillAnalysis: {
    weakSkills: [{
      skillId: 'words-in-context', name: 'Words in Context', domain: 'craft-and-structure', section: 'rw',
      testAccuracy: 20, contentAccuracy: 20, correct: 1, total: 5, primaryErrorType: 'conceptual_gap',
      missedPatterns: [], modules: [], sections: [],
    }],
    strongSkills: [],
    allSkills: [],
  },
  prioritizedActions: [],
  errorPatterns: { totalWrong: 20, counts: {}, dominantPattern: null, summary: [] },
  difficultyAnalysis: {},
  timeAnalysis: { fadeEffect: 0 },
  trendAnalysis: { persistentWeaknesses: [] },
  scoreProjection: {
    easyWins: { count: 0, projectedGain: 0, description: 'Just fixing the 0 missed easy questions would add +0 points' },
    // The inflated per-error-type re-scorings the old copy summed.
    errorTypeProjections: [
      { errorType: 'conceptual_gap', projectedPointGain: 510 },
      { errorType: 'trap_susceptibility', projectedPointGain: 140 },
    ],
  },
  ...over,
});
const profile = { targetScore: 1400, testDate: new Date(RILEY_NOW.getTime() + 40 * 86400000).toISOString().slice(0, 10), studyDaysPerWeek: 3 };

beforeEach(() => {
  jest.useFakeTimers({ doNotFake: ['performance'] });
  jest.setSystemTime(RILEY_NOW);
});
afterEach(() => { jest.useRealTimers(); });

describe('key insight — counts only, never a points projection', () => {
  test("Riley's diagnostic: no projection, counts that match the diagnosis", () => {
    const { plan, diagnosis } = generateRileyPlan();
    const { keyInsight } = plan.summary;
    expectNoProjection(keyInsight);
    expect(keyInsight.message).toContain(`${diagnosis.errorPatterns.totalWrong} misses`);
    expect(keyInsight.message).toMatch(/diagnostic/);
    // Riley made no careless errors: the copy must not claim any.
    expect(diagnosis.errorPatterns.counts.careless_error).toBe(0);
    expect(keyInsight.message).not.toMatch(/careless|slip/i);
  });

  test.each([
    ['quick wins (careless + trap)', { errorPatterns: { totalWrong: 20, counts: { careless_error: 3, trap_susceptibility: 5 }, dominantPattern: null, summary: [] } }, 'quick_win'],
    ['trap only', { errorPatterns: { totalWrong: 20, counts: { trap_susceptibility: 5 }, dominantPattern: null, summary: [] } }, 'quick_win'],
    ['easy misses', { scoreProjection: { ...mkDiag().scoreProjection, easyWins: { count: 4, projectedGain: 120, description: 'Just fixing the 4 missed easy questions would add +120 points' } } }, 'easy_wins'],
    ['conceptual', { errorPatterns: { totalWrong: 20, counts: { conceptual_gap: 14 }, dominantPattern: { type: 'conceptual_gap', count: 14 }, summary: [] } }, 'conceptual'],
    ['time pressure', { errorPatterns: { totalWrong: 20, counts: { time_pressure: 9 }, dominantPattern: { type: 'time_pressure', count: 9 }, summary: [] } }, 'time'],
    ['general', {}, 'general'],
    ['clean run', { errorPatterns: { totalWrong: 0, counts: {}, dominantPattern: null, summary: [] } }, 'clean_run'],
  ])('%s', (_label, over, type) => {
    const plan = generateStudyPlan(mkDiag(over), profile);
    expect(plan.summary.keyInsight.type).toBe(type);
    expectNoProjection(plan.summary.keyInsight);
  });

  test('the quick-win copy names only the kinds that occurred, with their counts', () => {
    const trapsOnly = generateStudyPlan(mkDiag({
      errorPatterns: { totalWrong: 20, counts: { trap_susceptibility: 5 }, dominantPattern: null, summary: [] },
    }), profile).summary.keyInsight.message;
    expect(trapsOnly).toMatch(/\b5 were designed-to-tempt/);
    expect(trapsOnly).not.toMatch(/careless|slip/i);

    const both = generateStudyPlan(mkDiag({
      errorPatterns: { totalWrong: 20, counts: { careless_error: 3, trap_susceptibility: 5 }, dominantPattern: null, summary: [] },
    }), profile).summary.keyInsight.message;
    expect(both).toMatch(/\b3 were slips/);
    expect(both).toMatch(/\b5 were designed-to-tempt/);
  });

  test('time pressure on unreliable timing does not become the insight', () => {
    const plan = generateStudyPlan(mkDiag({
      errorPatterns: { totalWrong: 20, counts: { time_pressure: 9 }, dominantPattern: { type: 'time_pressure', count: 9 }, summary: [] },
      timeAnalysis: { fadeEffect: null, timingReliable: false },
    }), profile);
    expect(plan.summary.keyInsight.type).not.toBe('time');
  });
});
