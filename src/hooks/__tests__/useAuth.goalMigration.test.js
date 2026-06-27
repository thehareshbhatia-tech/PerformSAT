/**
 * Tests for normalizeProfileGoal — the load-time legacy-goal migration in
 * useAuth. SEVA was originally math-only, so legacy accounts stored a
 * section-scale (≤800) `targetScore` (e.g. a 750 Math goal). The app now covers
 * both sections, so on every profile load the goal is converted onto the
 * composite (400-1600) scale and best-effort persisted, so the stale math-only
 * number never resurfaces. This is a pure-ish helper (the only side effect is a
 * fire-and-forget setDoc), so it's testable without a renderer.
 *
 * Firebase is mocked following the useAuth.signup.test.js convention.
 */

jest.mock('../../firebase/config', () => ({ auth: {}, db: {} }));
jest.mock('firebase/auth', () => ({
  signInWithEmailAndPassword: jest.fn(),
  createUserWithEmailAndPassword: jest.fn(),
  onAuthStateChanged: jest.fn(() => jest.fn()),
  signOut: jest.fn(),
}));
jest.mock('firebase/firestore', () => ({
  doc: jest.fn((db, col, id) => ({ col, id })),
  getDoc: jest.fn(),
  setDoc: jest.fn(),
  serverTimestamp: jest.fn(),
}));

import { setDoc } from 'firebase/firestore';
import { normalizeProfileGoal } from '../useAuth';

// CRA's jest config sets resetMocks: true, so implementations are reinstalled per test.
beforeEach(() => {
  setDoc.mockResolvedValue(undefined);
});

describe('normalizeProfileGoal', () => {
  test('migrates the reported bug: a legacy 750 Math goal becomes 1500 composite', () => {
    const out = normalizeProfileGoal({ uid: 'u1', email: 'a@b.com', targetScore: 750 });
    expect(out.targetScore).toBe(1500);
  });

  test('persists the migrated goal back to Firestore (merge write)', () => {
    normalizeProfileGoal({ uid: 'u1', email: 'a@b.com', targetScore: 750 });
    expect(setDoc).toHaveBeenCalledTimes(1);
    const [, payload, opts] = setDoc.mock.calls[0];
    expect(payload).toEqual({ targetScore: 1500 });
    expect(opts).toEqual({ merge: true });
  });

  test('preserves all other profile fields while swapping only the goal', () => {
    const out = normalizeProfileGoal({
      uid: 'u1',
      email: 'a@b.com',
      firstName: 'Ana',
      currentScore: 1100,
      targetScore: 700,
    });
    expect(out).toEqual({
      uid: 'u1',
      email: 'a@b.com',
      firstName: 'Ana',
      currentScore: 1100,
      targetScore: 1400,
    });
  });

  test('is a no-op for an already-composite goal — no write, unchanged object', () => {
    const profile = { uid: 'u1', email: 'a@b.com', targetScore: 1500 };
    const out = normalizeProfileGoal(profile);
    expect(out).toBe(profile); // same reference, untouched
    expect(setDoc).not.toHaveBeenCalled();
  });

  test('is a no-op when no goal is set (new account)', () => {
    const profile = { uid: 'u1', email: 'a@b.com' };
    const out = normalizeProfileGoal(profile);
    expect(out).toBe(profile);
    expect(setDoc).not.toHaveBeenCalled();
  });

  test('does not write when there is no uid (cannot persist), but still migrates in-memory', () => {
    const out = normalizeProfileGoal({ email: 'a@b.com', targetScore: 750 });
    expect(out.targetScore).toBe(1500);
    expect(setDoc).not.toHaveBeenCalled();
  });

  test('a failed persistence write is swallowed — the migrated profile is still returned', async () => {
    const errSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    setDoc.mockRejectedValue(new Error('offline'));
    const out = normalizeProfileGoal({ uid: 'u1', email: 'a@b.com', targetScore: 750 });
    expect(out.targetScore).toBe(1500); // in-memory value is authoritative this session
    // The write-back is fire-and-forget; flush microtasks so the rejection's
    // .catch runs (and is swallowed) while the console.error spy is still active.
    await new Promise((resolve) => setTimeout(resolve, 0));
    expect(errSpy).toHaveBeenCalledWith('Error persisting goal-scale migration:', expect.any(Error));
    errSpy.mockRestore();
  });

  test('handles a null/undefined profile gracefully', () => {
    expect(normalizeProfileGoal(null)).toBeNull();
    expect(normalizeProfileGoal(undefined)).toBeUndefined();
    expect(setDoc).not.toHaveBeenCalled();
  });
});
