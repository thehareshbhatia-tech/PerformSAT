/**
 * diagnosticEngine.diagnosticFade.test.js — diagnostic-v3 spec §1.2 fault 2,
 * §6.5 (Phase 0). On the diagnostic, each section's first half is Module 1
 * (medium) and its second half Module 2 (hard or easy): a half split measures
 * the difficulty step, not fatigue. Riley's R&W 6/10 → 3/10 read as "Your
 * accuracy dropped 30% in the second half", "Stamina 20/100" and a pacing
 * session as the first thing to do. Fade/stamina are suppressed for every
 * diagnostic sitting, and pacing claims need real timing evidence.
 */
import { runDiagnostic, isDiagnosticSitting } from '../diagnosticEngine';
import { generateStudyPlan } from '../studyPlanGenerator';
import { runRileyDiagnostic, rileyTest, rileyFixture, RILEY_NOW } from '../__fixtures__/rileySitting';

jest.mock('../practiceTestService', () => ({ loadAttemptSnapshot: jest.fn() }));
jest.mock('../miniDiagnostic/buildDiagnosticTest', () => ({
  rebuildDiagnosticTest: jest.fn(),
  manifestFromServedItemIds: jest.fn(),
}));

const AS_PRACTICE_TEST = { id: 'practice-test-9', isMiniDiagnostic: false };

describe('fade / stamina on the diagnostic', () => {
  test('every diagnostic shape is recognized (re-opened v1 id, live v2 runner)', () => {
    expect(isDiagnosticSitting(rileyTest())).toBe(true);
    expect(isDiagnosticSitting({ id: 'mini-diagnostic', isDiagnostic: true, modules: [] })).toBe(true);
    expect(isDiagnosticSitting({ id: 'mini-diagnostic-v1', modules: [] })).toBe(true);
    expect(isDiagnosticSitting({ id: 'practice-test-3', modules: [] })).toBe(false);
  });

  test("Riley's sitting reports no fade, no stamina, and no fatigue finding", () => {
    const diag = runRileyDiagnostic();
    expect(diag.isDiagnosticSitting).toBe(true);
    expect(diag.timeAnalysis.fadeSuppressed).toBe(true);
    expect(diag.timeAnalysis.fadeEffect).toBeNull();
    expect(diag.timeAnalysis.firstHalfAccuracy).toBeNull();
    expect(diag.timeAnalysis.secondHalfAccuracy).toBeNull();
    expect(diag.timeAnalysis.insights.some((i) => /second half/i.test(i.message))).toBe(false);
    expect(diag.stamina.hasData).toBe(false);
    expect(diag.rootCauseClusters.some((c) => c.id === 'fatigue-related-decline')).toBe(false);
    expect(diag.mistakeFingerprint.traits.some((t) => /fatigue/i.test(t.trait))).toBe(false);
  });

  test('the same answers outside the diagnostic DO show the half-split drop (suppression is the reason)', () => {
    const diag = runRileyDiagnostic(AS_PRACTICE_TEST);
    expect(diag.isDiagnosticSitting).toBe(false);
    expect(diag.timeAnalysis.fadeEffect).toBeGreaterThan(15);
    expect(diag.stamina.hasData).toBe(true);
  });

  test('the live v2 test object (id "mini-diagnostic", isDiagnostic) is suppressed too', () => {
    const diag = runRileyDiagnostic({ id: 'mini-diagnostic', isDiagnostic: true, isMiniDiagnostic: undefined });
    expect(diag.timeAnalysis.fadeEffect).toBeNull();
    expect(diag.stamina.hasData).toBe(false);
  });
});

describe('pacing needs real timing evidence (§6.5)', () => {
  test("Riley's uniform 45s timing with no module clocks is not reliable", () => {
    const { timingEvidence, timingReliable } = runRileyDiagnostic().timeAnalysis;
    expect(timingEvidence.uniform).toBe(true);
    expect(timingEvidence.hasModuleClocks).toBe(false);
    expect(timingReliable).toBe(false);
  });

  test('uniform timing produces no dwell-based pacing findings', () => {
    const diag = runRileyDiagnostic(AS_PRACTICE_TEST);
    expect(diag.rootCauseClusters.some((c) => c.id === 'pacing-related-misses')).toBe(false);
    expect(diag.timeAnalysis.insights.some((i) => /time-related|faster than correct/i.test(i.message))).toBe(false);
  });

  test('varied per-item times plus module clocks are reliable', () => {
    const { attempt } = rileyFixture;
    const questionDetails = {};
    Object.entries(attempt.diagnosticData.questionDetails).forEach(([key, d], i) => {
      questionDetails[key] = { ...d, timeSpent: 35 + ((i * 17) % 60) };
    });
    const diag = runDiagnostic(
      rileyTest(), { ...attempt.answers },
      { ...attempt.diagnosticData, questionDetails, moduleTimeRemaining: { 0: 140, 1: 60, 2: 300, 3: 12 } },
      {}, { targetScore: 1400 }, {},
    );
    expect(diag.timeAnalysis.timingEvidence.uniform).toBe(false);
    expect(diag.timeAnalysis.timingReliable).toBe(true);
    // Still the diagnostic: reliable timing never re-enables the half split.
    expect(diag.timeAnalysis.fadeEffect).toBeNull();
  });

  describe('the generator', () => {
    beforeEach(() => {
      jest.useFakeTimers({ doNotFake: ['performance'] });
      jest.setSystemTime(RILEY_NOW);
    });
    afterEach(() => { jest.useRealTimers(); });

    const planWith = (timeAnalysis) => {
      const diag = runRileyDiagnostic();
      return generateStudyPlan(
        {
          ...diag,
          score: { ...diag.score, scaled: 860 },
          errorPatterns: { ...diag.errorPatterns, counts: { ...diag.errorPatterns.counts, time_pressure: 5 } },
          timeAnalysis: { ...diag.timeAnalysis, ...timeAnalysis },
        },
        { targetScore: 1400, testDate: rileyFixture.user.testDate, studyDaysPerWeek: 3, sessionLength: '15m' },
      );
    };
    const hasPacing = (plan) => plan.weeks.some((w) => (w.activities || []).some((a) => a.activityType === 'pacingDrill'));

    test('5 time-pressure misses on unreliable timing schedule no pacing session', () => {
      const plan = planWith({});
      expect(hasPacing(plan)).toBe(false);
      expect(plan.summary.diagnosis).not.toMatch(/time pressure/i);
      expect(plan.summary.keyInsight.type).not.toBe('time');
    });

    test('the same misses on reliable timing do', () => {
      expect(hasPacing(planWith({ timingReliable: true }))).toBe(true);
    });
  });
});
