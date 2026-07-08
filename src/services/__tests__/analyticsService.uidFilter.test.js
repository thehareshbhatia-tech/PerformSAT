/**
 * Tests for analyticsService's cross-account isolation.
 *
 * The EVENT_BUFFER + flushTimer are module globals shared across accounts in a
 * single tab. Before this fix, flushEvents(userId) wrote WHATEVER was buffered
 * to that uid's doc — so events queued under account A could bleed into account
 * B after a logout→login, and a timer armed under A could flush to a signed-out
 * A. Each event is now tagged with its owner at enqueue time; the flush writes
 * only matching-uid events and drops the rest.
 *
 * Firestore is mocked; only the tagging + partition contract is under test.
 */

jest.mock('../../firebase/config', () => ({ db: {} }));
jest.mock('firebase/firestore', () => ({
  doc: jest.fn(() => ({ __ref: true })),
  getDoc: jest.fn(),
  updateDoc: jest.fn(),
  setDoc: jest.fn(),
  serverTimestamp: jest.fn(),
}));

import { getDoc, updateDoc, setDoc, serverTimestamp } from 'firebase/firestore';
import { trackEvent, flushEvents, selectEventsForUid } from '../analyticsService';

beforeEach(() => {
  jest.useFakeTimers();
  getDoc.mockResolvedValue({ exists: () => false });
  setDoc.mockResolvedValue(undefined);
  updateDoc.mockResolvedValue(undefined);
  serverTimestamp.mockReturnValue('TS');
});
afterEach(() => {
  jest.useRealTimers();
});

describe('selectEventsForUid', () => {
  test('keeps only events tagged with the given uid, ignoring nullish entries', () => {
    const events = [
      { uid: 'a', event: 'x' },
      { uid: 'b', event: 'y' },
      { uid: 'a', event: 'z' },
      null,
    ];
    expect(selectEventsForUid(events, 'a')).toEqual([
      { uid: 'a', event: 'x' },
      { uid: 'a', event: 'z' },
    ]);
    expect(selectEventsForUid(undefined, 'a')).toEqual([]);
  });
});

describe('flushEvents cross-account isolation', () => {
  test('writes only the flushing account and drops other-uid residue', async () => {
    // Account A queues, then (after a logout→login) account B queues.
    trackEvent('userA', 'engagement', 'session_start');
    trackEvent('userB', 'drill', 'drill_started', { tier: 'pattern' });

    await flushEvents('userB');

    // Persisted to userB's doc, userB's event only.
    expect(setDoc).toHaveBeenCalledTimes(1);
    const [, payload] = setDoc.mock.calls[0];
    expect(payload.userId).toBe('userB');
    expect(payload.analyticsEvents).toHaveLength(1);
    expect(payload.analyticsEvents[0].event).toBe('drill_started');
    // The internal uid tag is stripped before persisting (doc is per-uid).
    expect(payload.analyticsEvents[0].uid).toBeUndefined();
  });

  test('a flush under a different account drops the prior account residue', async () => {
    trackEvent('userA', 'engagement', 'session_start');

    // Flushing under userB writes nothing for B (no B events) AND clears the
    // buffer, discarding A's residue — the deliberate "correct destination over
    // completeness" tradeoff that kills cross-account bleed.
    await flushEvents('userB');
    expect(setDoc).not.toHaveBeenCalled();
    expect(updateDoc).not.toHaveBeenCalled();

    // A's residue is gone — a later flush under A has nothing to write.
    await flushEvents('userA');
    expect(setDoc).not.toHaveBeenCalled();
  });
});
