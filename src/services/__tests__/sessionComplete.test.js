/**
 * Tests for the onSessionComplete seam (sessionComplete.js).
 *
 * The orchestrator's three contracts:
 *  - analytics fires for every session type (test_completed vs drill_completed)
 *  - the intelligence pipeline (validate -> fingerprint -> predict -> save)
 *    fires ONLY for real, non-review full tests, and always in that order
 *  - subscribers are isolated: one throwing never blocks another, and dispatch
 *    never rejects out to the caller
 *
 * All downstream services are mocked so this test never touches Firestore.
 */

jest.mock('../analyticsService', () => ({
  trackTestCompleted: jest.fn(),
  trackDrillCompleted: jest.fn(),
  trackReviewSessionDone: jest.fn(),
  flushEvents: jest.fn().mockResolvedValue(undefined),
}));

jest.mock('../studentFingerprintService', () => ({
  updateFingerprint: jest.fn().mockResolvedValue({ archetype: 'balanced', learningVelocity: 55 }),
}));

jest.mock('../predictionEngine', () => ({
  generatePredictions: jest.fn().mockReturnValue({ id: 'pred_test', predictions: {} }),
  savePrediction: jest.fn().mockResolvedValue(undefined),
  validateAndUpdatePredictions: jest.fn().mockResolvedValue(undefined),
}));

jest.mock('../reviewService', () => ({
  updateReviewItem: jest.fn().mockResolvedValue(undefined),
}));

jest.mock('../dailyReviewEngine', () => ({
  buildSessionSummary: jest.fn().mockReturnValue({
    correct: 2, total: 3, accuracy: 67,
    streak: { current: 4, best: 9, lastDate: '2026-05-30' },
    message: 'Solid session.',
  }),
}));

jest.mock('../interventionTracker', () => ({
  getUnresolvedInterventions: jest.fn().mockResolvedValue([]),
  resolveIntervention: jest.fn().mockResolvedValue(undefined),
}));

import {
  buildFullTestSession,
  buildDrillSession,
  buildReviewSession,
  dispatchSessionComplete,
} from '../sessionComplete';
import { trackTestCompleted, trackDrillCompleted, trackReviewSessionDone, flushEvents } from '../analyticsService';
import { updateFingerprint } from '../studentFingerprintService';
import { generatePredictions, savePrediction, validateAndUpdatePredictions } from '../predictionEngine';
import { updateReviewItem } from '../reviewService';
import { buildSessionSummary } from '../dailyReviewEngine';
import { getUnresolvedInterventions, resolveIntervention } from '../interventionTracker';

const DIAG = { score: { scaled: 640 }, skillAnalysis: { weakSkills: [] }, errorPatterns: { counts: {} } };

const fullTestRaw = (over = {}) => ({
  attemptId: 'att_1',
  testId: 'digital-sat-2',
  testTitle: 'Digital SAT 2',
  userId: 'u1',
  scaledScore: 1240,
  rawScore: 70,
  totalQuestions: 98,
  sectionScores: { 'reading-writing': 640, math: 600 },
  isMultiSection: true,
  timedMode: true,
  diagnosticReport: DIAG,
  ...over,
});

beforeEach(() => {
  jest.clearAllMocks();
  // CRA's jest resets mock implementations between tests, so re-establish the
  // happy-path defaults here (per-test .mock*Once overrides still take effect).
  flushEvents.mockResolvedValue(undefined);
  updateFingerprint.mockResolvedValue({ archetype: 'balanced', learningVelocity: 55 });
  generatePredictions.mockReturnValue({ id: 'pred_test', predictions: {} });
  savePrediction.mockResolvedValue(undefined);
  validateAndUpdatePredictions.mockResolvedValue(undefined);
  getUnresolvedInterventions.mockResolvedValue([]);
  resolveIntervention.mockResolvedValue(undefined);
  updateReviewItem.mockResolvedValue(undefined);
  buildSessionSummary.mockReturnValue({
    correct: 2, total: 3, accuracy: 67,
    streak: { current: 4, best: 9, lastDate: '2026-05-30' },
    message: 'Solid session.',
  });
});

describe('builders', () => {
  test('buildFullTestSession stamps sessionType and coerces flags', () => {
    const s = buildFullTestSession(fullTestRaw());
    expect(s.sessionType).toBe('full-test');
    expect(s.sessionId).toBe('att_1');
    expect(s.isMultiSection).toBe(true);
    expect(s.reviewMode).toBe(false);
    expect(typeof s.completedAt).toBe('string');
  });

  test('buildDrillSession discriminates mode and review-retry', () => {
    expect(buildDrillSession({ drillMode: 'adaptive' }).sessionType).toBe('drill-adaptive');
    expect(buildDrillSession({ drillMode: 'assigned' }).sessionType).toBe('drill-assigned');
    expect(buildDrillSession({ drillMode: 'standard' }).sessionType).toBe('drill-standard');
    // reviewMode wins over mode — a review-retry runs through the assigned path
    expect(buildDrillSession({ drillMode: 'assigned', reviewMode: true }).sessionType).toBe('review-retry');
  });

  test('buildReviewSession carries items + count', () => {
    const s = buildReviewSession({ reviewItems: [{ key: 'm-s-1', wasCorrect: true }, { key: 'm-s-2', wasCorrect: false }], userId: 'u1' });
    expect(s.sessionType).toBe('review');
    expect(s.itemCount).toBe(2);
    expect(s.reviewItems).toHaveLength(2);
  });
});

describe('dispatchSessionComplete — daily review', () => {
  const reviewSession = (items) => buildReviewSession({
    reviewItems: items ?? [
      { key: 'm1-math-3', wasCorrect: true },
      { key: 'm1-math-7', wasCorrect: false },
      { key: 'm1-math-9', wasCorrect: true },
    ],
    userId: 'u1',
  });

  test('reschedules each item (SM-2), bumps streak, fires review analytics, returns summary', async () => {
    const out = await dispatchSessionComplete(reviewSession(), {});

    expect(out.review).toBe(true);
    expect(out.analytics).toBe(true);
    expect(out.summary).toEqual(expect.objectContaining({ correct: 2, total: 3, accuracy: 67 }));

    // one reschedule per answered item, with the right key + correctness
    expect(updateReviewItem).toHaveBeenCalledTimes(3);
    expect(updateReviewItem).toHaveBeenCalledWith('u1', 'm1-math-3', true);
    expect(updateReviewItem).toHaveBeenCalledWith('u1', 'm1-math-7', false);

    expect(buildSessionSummary).toHaveBeenCalledWith([
      { wasCorrect: true }, { wasCorrect: false }, { wasCorrect: true },
    ]);
    expect(trackReviewSessionDone).toHaveBeenCalledWith('u1', 3, 67, 4);

    // review never runs the prediction pipeline
    expect(updateFingerprint).not.toHaveBeenCalled();
    expect(savePrediction).not.toHaveBeenCalled();
    expect(trackTestCompleted).not.toHaveBeenCalled();
  });

  test('reschedules run sequentially before the summary (avoids RMW clobber)', async () => {
    await dispatchSessionComplete(reviewSession(), {});
    const lastReschedule = Math.max(...updateReviewItem.mock.invocationCallOrder);
    expect(lastReschedule).toBeLessThan(buildSessionSummary.mock.invocationCallOrder[0]);
  });

  test('empty item set skips reschedule but still records the session', async () => {
    const out = await dispatchSessionComplete(reviewSession([]), {});
    expect(out.review).toBe(false);
    expect(out.skippedReason).toBe('no-items');
    expect(updateReviewItem).not.toHaveBeenCalled();
    expect(buildSessionSummary).toHaveBeenCalledWith([]); // still bumps streak (review attempted)
    expect(trackReviewSessionDone).toHaveBeenCalled();
  });

  test('a reschedule failure does not block streak/analytics', async () => {
    updateReviewItem.mockRejectedValueOnce(new Error('firestore boom'));
    const out = await dispatchSessionComplete(reviewSession(), {});
    expect(out.review).toBe(false);          // reschedule loop threw
    expect(out.summary).not.toBeNull();      // summary still built
    expect(out.analytics).toBe(true);        // analytics still fired
  });
});

describe('dispatchSessionComplete — full test', () => {
  test('fires analytics + full intelligence pipeline in order', async () => {
    const out = await dispatchSessionComplete(buildFullTestSession(fullTestRaw()), {
      skillProgress: { algebra: { mastery: 40, attempts: 3 } },
      practiceTestResults: {},
      interventionLog: [],
    });

    expect(out).toEqual({ analytics: true, prediction: true, interventionsResolved: 0, skippedReason: null });

    expect(trackTestCompleted).toHaveBeenCalledWith('u1', 1240, 70, true);
    expect(trackDrillCompleted).not.toHaveBeenCalled();
    expect(flushEvents).toHaveBeenCalledWith('u1');

    expect(validateAndUpdatePredictions).toHaveBeenCalledWith('u1', DIAG, 'digital-sat-2', {
      actualScore: 1240,
      isMultiSection: true,
    });
    expect(updateFingerprint).toHaveBeenCalledWith('u1', DIAG, expect.any(Object), 'digital-sat-2', 1240);
    expect(generatePredictions).toHaveBeenCalledWith(
      { archetype: 'balanced', learningVelocity: 55 },
      {},
      expect.any(Object),
      [],
      'digital-sat-2',
      { isMultiSection: true, currentScore: 1240 },
    );
    expect(savePrediction).toHaveBeenCalledWith('u1', { id: 'pred_test', predictions: {} });

    // Ordering: validate the prior prediction BEFORE generating/saving the next.
    const order = (fn) => fn.mock.invocationCallOrder[0];
    expect(order(validateAndUpdatePredictions)).toBeLessThan(order(updateFingerprint));
    expect(order(updateFingerprint)).toBeLessThan(order(generatePredictions));
    expect(order(generatePredictions)).toBeLessThan(order(savePrediction));
  });

  test('review-mode full test fires analytics but SKIPS the pipeline', async () => {
    const out = await dispatchSessionComplete(buildFullTestSession(fullTestRaw({ reviewMode: true })), {});
    expect(out).toEqual({ analytics: true, prediction: false, skippedReason: 'review-mode' });
    expect(trackTestCompleted).toHaveBeenCalled();
    expect(updateFingerprint).not.toHaveBeenCalled();
    expect(savePrediction).not.toHaveBeenCalled();
  });

  test('missing diagnosticReport skips the pipeline', async () => {
    const out = await dispatchSessionComplete(buildFullTestSession(fullTestRaw({ diagnosticReport: null })), {});
    expect(out.prediction).toBe(false);
    expect(out.skippedReason).toBe('missing-user-or-diagnostic');
    expect(updateFingerprint).not.toHaveBeenCalled();
  });

  test('missing userId skips the pipeline', async () => {
    const out = await dispatchSessionComplete(buildFullTestSession(fullTestRaw({ userId: null })), {});
    expect(out.skippedReason).toBe('missing-user-or-diagnostic');
    expect(savePrediction).not.toHaveBeenCalled();
  });

  test('resolves only the interventions whose skills this test measured', async () => {
    getUnresolvedInterventions.mockResolvedValueOnce([
      { id: 'int_a', skillIds: ['slope-intercept-form'] },   // measured below -> resolve
      { id: 'int_b', skillIds: ['circle-equations'] },        // NOT measured -> leave open
    ]);
    const diag = {
      score: { scaled: 1240 },
      skillAnalysis: {
        weakSkills: [{ skillId: 'slope-intercept-form', testAccuracy: 55 }],
        strongSkills: [{ skillId: 'linear-functions', testAccuracy: 90 }],
      },
      errorPatterns: { counts: { CONCEPTUAL_GAP: 2 } },
    };
    const out = await dispatchSessionComplete(buildFullTestSession(fullTestRaw({ diagnosticReport: diag })), {});

    expect(out.interventionsResolved).toBe(1);
    expect(resolveIntervention).toHaveBeenCalledTimes(1);
    expect(resolveIntervention).toHaveBeenCalledWith('u1', 'int_a', {
      skillMastery: { 'slope-intercept-form': 55, 'linear-functions': 90 },
      errorTypes: { CONCEPTUAL_GAP: 2 },
    });
  });

  test('review-mode full test does NOT resolve interventions', async () => {
    getUnresolvedInterventions.mockResolvedValueOnce([{ id: 'int_a', skillIds: ['x'] }]);
    await dispatchSessionComplete(buildFullTestSession(fullTestRaw({ reviewMode: true })), {});
    expect(resolveIntervention).not.toHaveBeenCalled();
  });
});

describe('dispatchSessionComplete — drills', () => {
  test('fires drill_completed analytics and never runs the pipeline', async () => {
    const out = await dispatchSessionComplete(
      buildDrillSession({ drillMode: 'assigned', section: 'math', accuracy: 75, itemCount: 8, userId: 'u1' }),
      {},
    );
    expect(out).toEqual({ analytics: true, prediction: false, skippedReason: 'not-full-test' });
    expect(trackDrillCompleted).toHaveBeenCalledWith('u1', expect.objectContaining({
      mode: 'assigned', section: 'math', accuracy: 75, itemCount: 8, reviewMode: false,
    }));
    expect(trackTestCompleted).not.toHaveBeenCalled();
    expect(updateFingerprint).not.toHaveBeenCalled();
  });

  test('review-retry drill is analytics-only', async () => {
    const out = await dispatchSessionComplete(
      buildDrillSession({ drillMode: 'assigned', reviewMode: true, userId: 'u1' }),
      {},
    );
    expect(out.prediction).toBe(false);
    expect(trackDrillCompleted).toHaveBeenCalledWith('u1', expect.objectContaining({ reviewMode: true }));
    expect(savePrediction).not.toHaveBeenCalled();
  });
});

describe('subscriber isolation', () => {
  test('an analytics failure does not block the pipeline', async () => {
    trackTestCompleted.mockImplementationOnce(() => { throw new Error('analytics boom'); });
    const out = await dispatchSessionComplete(buildFullTestSession(fullTestRaw()), {});
    expect(out.analytics).toBe(false);
    expect(out.prediction).toBe(true); // pipeline still ran
    expect(savePrediction).toHaveBeenCalled();
  });

  test('a pipeline failure does not throw out of dispatch and analytics still counts', async () => {
    updateFingerprint.mockRejectedValueOnce(new Error('firestore boom'));
    const out = await dispatchSessionComplete(buildFullTestSession(fullTestRaw()), {});
    expect(out.analytics).toBe(true);
    expect(out.prediction).toBe(false);
    expect(savePrediction).not.toHaveBeenCalled();
  });

  test('null session returns a no-session result without throwing', async () => {
    const out = await dispatchSessionComplete(null, {});
    expect(out).toEqual({ analytics: false, prediction: false, skippedReason: 'no-session' });
  });
});
