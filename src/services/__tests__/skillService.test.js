/**
 * Tests for skillService's mastery fold math.
 *
 * foldSkillAttempt is the single source of truth for how one answered
 * question moves a skill's attempts/mastery/confidence/history.
 * recordSkillAttemptsBatch folds a whole drill session into ONE Firestore
 * read + write — the drill→mastery loop closed by the 2026-06
 * personalization audit (assigned/adaptive drill answers previously never
 * updated skillProgress at all).
 *
 * Firestore is mocked; only the fold + batching contracts are under test.
 */

jest.mock('../../firebase/config', () => ({ db: {} }));
jest.mock('firebase/firestore', () => ({
  doc: jest.fn(),
  getDoc: jest.fn(),
  updateDoc: jest.fn(),
  serverTimestamp: jest.fn(),
}));

import { getDoc, updateDoc, serverTimestamp } from 'firebase/firestore';
import { foldSkillAttempt, recordSkillAttemptsBatch } from '../skillService';

// CRA's jest config sets resetMocks: true, so implementations must be
// (re)installed per test, not in the module factory.
beforeEach(() => {
  updateDoc.mockResolvedValue(undefined);
  serverTimestamp.mockReturnValue('SERVER_TS');
});

describe('foldSkillAttempt', () => {
  test('first attempt on a fresh skill', () => {
    const folded = foldSkillAttempt(null, true);
    expect(folded.attempts).toBe(1);
    expect(folded.correct).toBe(1);
    expect(folded.mastery).toBe(100);
    expect(folded.confidenceLevel).toBe('low');
    expect(folded.history).toHaveLength(1);
    expect(folded.history[0].correct).toBe(true);
  });

  test('wrong answer lowers mastery', () => {
    const folded = foldSkillAttempt({ attempts: 3, correct: 3, mastery: 100, confidenceLevel: 'low', history: [] }, false);
    expect(folded.attempts).toBe(4);
    expect(folded.correct).toBe(3);
    expect(folded.mastery).toBe(75);
  });

  test('confidence thresholds: 5 attempts → medium, 10 → high', () => {
    const atFive = foldSkillAttempt({ attempts: 4, correct: 2, mastery: 50, confidenceLevel: 'low', history: [] }, true);
    expect(atFive.confidenceLevel).toBe('medium');
    const atTen = foldSkillAttempt({ attempts: 9, correct: 5, mastery: 56, confidenceLevel: 'medium', history: [] }, false);
    expect(atTen.confidenceLevel).toBe('high');
  });

  test('history keeps the last 10 attempts', () => {
    const longHistory = Array.from({ length: 10 }, (_, i) => ({ correct: true, timestamp: i }));
    const folded = foldSkillAttempt({ attempts: 10, correct: 10, mastery: 100, confidenceLevel: 'high', history: longHistory }, false);
    expect(folded.history).toHaveLength(10);
    expect(folded.history[0].timestamp).toBe(1); // oldest entry dropped
    expect(folded.history[9].correct).toBe(false); // newest appended
  });
});

describe('recordSkillAttemptsBatch', () => {
  const mockProgressDoc = (skillProgress = {}) => {
    getDoc.mockResolvedValue({
      exists: () => true,
      data: () => ({ skillProgress }),
    });
  };

  test('folds a whole session with one read and one write', async () => {
    mockProgressDoc({});

    await recordSkillAttemptsBatch('u1', [
      { skills: ['slope-intercept-form'], correct: false },
      { skills: ['slope-intercept-form'], correct: true },
      { skills: ['circle-equations'], correct: true },
    ]);

    expect(getDoc).toHaveBeenCalledTimes(1);
    expect(updateDoc).toHaveBeenCalledTimes(1);

    const payload = updateDoc.mock.calls[0][1];
    const slope = payload['skillProgress.slope-intercept-form'];
    expect(slope.attempts).toBe(2);
    expect(slope.correct).toBe(1);
    expect(slope.mastery).toBe(50);
    expect(slope.history).toHaveLength(2);
    expect(slope.lastAttemptAt).toBe('SERVER_TS');

    const circle = payload['skillProgress.circle-equations'];
    expect(circle.attempts).toBe(1);
    expect(circle.mastery).toBe(100);

    expect(payload.lastUpdated).toBe('SERVER_TS');
  });

  test('folds on top of the existing Firestore record', async () => {
    mockProgressDoc({
      'slope-intercept-form': { attempts: 8, correct: 4, mastery: 50, confidenceLevel: 'medium', history: [] },
    });

    await recordSkillAttemptsBatch('u1', [
      { skills: ['slope-intercept-form'], correct: true },
      { skills: ['slope-intercept-form'], correct: true },
    ]);

    const slope = updateDoc.mock.calls[0][1]['skillProgress.slope-intercept-form'];
    expect(slope.attempts).toBe(10);
    expect(slope.correct).toBe(6);
    expect(slope.mastery).toBe(60);
    expect(slope.confidenceLevel).toBe('high');
  });

  test('a question tagged with multiple skills updates each of them', async () => {
    mockProgressDoc({});

    await recordSkillAttemptsBatch('u1', [
      { skills: ['systems-of-equations', 'linear-equations'], correct: true },
    ]);

    const payload = updateDoc.mock.calls[0][1];
    expect(payload['skillProgress.systems-of-equations'].attempts).toBe(1);
    expect(payload['skillProgress.linear-equations'].attempts).toBe(1);
  });

  test('no-ops without touching Firestore when there is nothing to record', async () => {
    await recordSkillAttemptsBatch('u1', []);
    await recordSkillAttemptsBatch('u1', [{ skills: [], correct: true }, null]);
    await recordSkillAttemptsBatch(null, [{ skills: ['factoring'], correct: true }]);

    expect(getDoc).not.toHaveBeenCalled();
    expect(updateDoc).not.toHaveBeenCalled();
  });

  test('bails cleanly when the progress doc does not exist', async () => {
    getDoc.mockResolvedValue({ exists: () => false });

    await recordSkillAttemptsBatch('u1', [{ skills: ['factoring'], correct: true }]);

    expect(updateDoc).not.toHaveBeenCalled();
  });
});
