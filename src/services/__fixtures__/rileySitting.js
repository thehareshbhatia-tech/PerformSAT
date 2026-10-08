/**
 * rileySitting — test helpers over the diagnostic-v3 spec fixture
 * (diagnosticSitting.riley.json): Riley's persisted diagnostic snapshot and
 * user doc, replayed through the REAL engine and generator the way
 * finishMiniDiagnostic does (band midpoint as the plan's current score,
 * buildPlanProfile for the schedule inputs).
 *
 * The sitting was submitted with the localhost DEV auto-submit, so its
 * per-item timing is a uniform 45s with no module clocks — useful precisely
 * because pacing claims must NOT be made from it.
 *
 * Callers must jest.mock('../practiceTestService') and
 * ('../miniDiagnostic/buildDiagnosticTest') — diagnosticSittingLoader imports
 * them, and neither is needed to rebuild a snapshot.
 */
import fixture from './diagnosticSitting.riley.json';
import { rebuildSittingTest } from '../diagnosticSittingLoader';
import { runDiagnostic } from '../diagnosticEngine';
import { generateStudyPlan } from '../studyPlanGenerator';
import { buildPlanProfile } from '../studySchedule';

/** The sitting's local day: Wednesday 2026-10-07, midday (any timezone). */
export const RILEY_NOW = new Date(2026, 9, 7, 12, 0, 0);

export const rileyFixture = fixture;

/** The multi-module test object the report path rebuilds from the snapshot. */
export const rileyTest = () => rebuildSittingTest(fixture.attempt);

/**
 * runDiagnostic on Riley's sitting (fresh copy each call).
 * @param {object} [testOverrides] - shallow overrides on the rebuilt test
 * @returns {object} diagnosis
 */
export const runRileyDiagnostic = (testOverrides = {}) => {
  const { attempt, user } = fixture;
  const test = { ...rileyTest(), ...testOverrides };
  return runDiagnostic(
    test,
    { ...attempt.answers },
    attempt.diagnosticData,
    {},
    { targetScore: user.targetScore, currentScore: user.currentScore, testDate: user.testDate },
    {},
  );
};

/**
 * Riley's starter plan exactly as finishMiniDiagnostic generates it.
 * Call under fake timers pinned to RILEY_NOW.
 * @returns {{plan: object, diagnosis: object}}
 */
export const generateRileyPlan = () => {
  const diagnosis = runRileyDiagnostic();
  const band = fixture.attempt.scoreBand;
  const midpoint = Math.round((band.low + band.high) / 2 / 10) * 10;
  const plan = generateStudyPlan(
    { ...diagnosis, score: { ...diagnosis.score, scaled: midpoint } },
    buildPlanProfile(fixture.user),
    {}, {}, null, null, [],
  );
  return { plan, diagnosis };
};
