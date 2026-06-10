/**
 * Integration test: the finish pipeline runs the REAL diagnostic engine,
 * ground-truth builder, and plan generator on a real sampled 24-item
 * check-in. Only the Firestore-touching writes are mocked.
 */
import { buildMiniDiagnosticPlan, selectStage2 } from '../sampler';
import {
  finishMiniDiagnostic,
  buildSyntheticTest,
  MINI_DIAGNOSTIC_TEST_ID,
  MINI_DIAGNOSTIC_PLAN_SOURCE,
} from '../finishMiniDiagnostic';
import { persistDeterministicArtifact } from '../../hybridStudyPlanService';
import { recordSkillAttemptsBatch } from '../../skillService';

jest.mock('../../hybridStudyPlanService', () => ({
  persistDeterministicArtifact: jest.fn(),
}));
jest.mock('../../skillService', () => ({
  recordSkillAttemptsBatch: jest.fn(),
}));

const USER = {
  uid: 'test-uid-finish',
  targetScore: 1300,
  testDate: '2026-10-03',
};

/** Serve a full 24-item session the way the shell would. */
async function buildServedSession() {
  const plan = await buildMiniDiagnosticPlan({
    userId: USER.uid,
    attemptId: 'attempt-finish-test',
    excludeIds: [],
  });
  // Answer stage 1 with a deliberate split so stage 2 has weak domains to
  // target: first 4 of each section correct, last 4 wrong.
  const stage1Answers = (items, modIdx) => {
    const answers = {};
    items.forEach((q, qIdx) => {
      answers[`${modIdx}-${qIdx}`] = qIdx < 4
        ? q.correctAnswer
        : (q.choices.find(c => c.id !== q.correctAnswer)?.id || 'A');
    });
    return answers;
  };
  const rwAnswers = stage1Answers(plan.rw.stage1, 0);
  const mathAnswers = stage1Answers(plan.math.stage1, 1);

  const byId = (items, answers, modIdx) => {
    const out = {};
    items.forEach((q, qIdx) => { out[q.id] = answers[`${modIdx}-${qIdx}`]; });
    return out;
  };
  const rwServed = [
    ...plan.rw.stage1,
    ...selectStage2(plan.rw.stage1, byId(plan.rw.stage1, rwAnswers, 0), plan.rw.stage2Pools),
  ];
  const mathServed = [
    ...plan.math.stage1,
    ...selectStage2(plan.math.stage1, byId(plan.math.stage1, mathAnswers, 1), plan.math.stage2Pools),
  ];

  // Answer the stage-2 items too (alternate right/wrong).
  const answers = { ...rwAnswers, ...mathAnswers };
  const telemetry = {};
  [rwServed, mathServed].forEach((served, modIdx) => {
    served.forEach((q, qIdx) => {
      const key = `${modIdx}-${qIdx}`;
      if (answers[key] === undefined && qIdx >= 8) {
        answers[key] = qIdx % 2 === 0
          ? q.correctAnswer
          : (q.choices.find(c => c.id !== q.correctAnswer)?.id || 'A');
      }
      telemetry[key] = {
        timeSpent: 30 + qIdx,
        visits: 1,
        answerChanges: [{ from: null, to: answers[key], timestamp: 1000 + qIdx }],
        markedForReview: false,
        usedCalculator: false,
      };
    });
  });

  return { rwServed, mathServed, answers, telemetry };
}

describe('finishMiniDiagnostic (real engine, mocked persistence)', () => {
  beforeEach(() => {
    persistDeterministicArtifact.mockResolvedValue({ artifactId: 'artifact-1' });
    recordSkillAttemptsBatch.mockResolvedValue(undefined);
  });

  it('produces a tagged starter plan with drill routing and an honest band', async () => {
    const { rwServed, mathServed, answers, telemetry } = await buildServedSession();

    const result = await finishMiniDiagnostic({
      user: USER,
      rwQuestions: rwServed,
      mathQuestions: mathServed,
      answers,
      telemetry,
      eliminatedChoices: {},
      attemptId: 'attempt-finish-test',
      answeredQuestionIds: [],
    });

    // Plan identity + framing tags
    expect(result.plan.planSource).toBe(MINI_DIAGNOSTIC_PLAN_SOURCE);
    expect(result.plan.basedOnTest).toBe(MINI_DIAGNOSTIC_TEST_ID);
    expect(Array.isArray(result.plan.weeks) || Array.isArray(result.plan.weeklyPlan)).toBe(true);

    // The real diagnosis ran: weaknesses exist (we answered 1/3 wrong) and
    // carry the section-tag contract.
    expect(result.groundTruth.weaknesses.length).toBeGreaterThan(0);
    result.groundTruth.weaknesses.forEach(w => {
      expect(['math', 'rw']).toContain(w.section || 'math');
    });

    // Honest composite band, never a point estimate.
    const band = result.scoreBand;
    expect(band.low).toBeGreaterThanOrEqual(400);
    expect(band.high).toBeLessThanOrEqual(1600);
    expect(band.high - band.low).toBeGreaterThanOrEqual(40);

    // Lean record: 24 item ids, both section folds, no question bodies.
    expect(result.miniDiagnosticRecord.itemIds).toHaveLength(24);
    expect(Object.keys(result.miniDiagnosticRecord.domains.rw).length).toBeGreaterThan(0);
    expect(Object.keys(result.miniDiagnosticRecord.domains.math).length).toBeGreaterThan(0);
    expect(result.miniDiagnosticRecord.totalCount).toBe(24);
    expect(JSON.stringify(result.miniDiagnosticRecord)).not.toContain('choices');

    // Persistence: artifact written once with the synthetic source id;
    // skill seeding fired with one entry per skill-tagged question.
    expect(persistDeterministicArtifact).toHaveBeenCalledTimes(1);
    expect(persistDeterministicArtifact).toHaveBeenCalledWith(
      USER.uid,
      expect.objectContaining({ planSource: MINI_DIAGNOSTIC_PLAN_SOURCE }),
      expect.objectContaining({ sourceTestId: MINI_DIAGNOSTIC_TEST_ID }),
    );
    expect(recordSkillAttemptsBatch).toHaveBeenCalledTimes(1);
    const [, skillEntries] = recordSkillAttemptsBatch.mock.calls[0];
    expect(skillEntries.length).toBeGreaterThanOrEqual(20);

    // NEVER a practiceTestResults write — that path is mocked out entirely
    // here, but pin the absence of any score history field on the record.
    expect(result.miniDiagnosticRecord.bestScaledScore).toBeUndefined();
  });

  it('buildSyntheticTest keeps official section order (R&W then Math)', () => {
    const test = buildSyntheticTest([{ id: 'rw1' }], [{ id: 'm1' }]);
    expect(test.modules[0].section).toBe('reading-writing');
    expect(test.modules[1].section).toBe('math');
    expect(test.id).toBe(MINI_DIAGNOSTIC_TEST_ID);
    expect(test.isMiniDiagnostic).toBe(true);
  });

  it('throws without a user id (caller bug guard)', async () => {
    await expect(finishMiniDiagnostic({ user: null, rwQuestions: [], mathQuestions: [], answers: {} }))
      .rejects.toThrow('user.uid required');
  });
});
