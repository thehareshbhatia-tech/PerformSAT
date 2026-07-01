/**
 * dailyReviewEngine.test.js — streak correctness.
 *
 * Two regressions pinned here:
 *  1. Day keys must be LOCAL calendar days (matching practicedDays.js'
 *     localDateKey), not UTC — evening US reviewers straddle the UTC
 *     boundary and saw streaks wrongly reset (or wrongly no-op).
 *  2. Second-device clobber: localStorage is per-device, so a fresh device
 *     computed streak 1 and the caller persisted it to Firestore, wiping a
 *     long server-side streak. `recordReviewSessionComplete(serverStreak)`
 *     seeds from the hydrated server value when it is fresher/higher.
 */

// dailyReviewEngine → reviewService → firebase/config; mock the chain the
// same way the sibling suites do so getAuth never runs under Jest.
jest.mock('../../firebase/config', () => ({ db: {}, auth: {} }));
jest.mock('firebase/firestore', () => ({
  doc: jest.fn(),
  getDoc: jest.fn(),
  updateDoc: jest.fn(),
  setDoc: jest.fn(),
  serverTimestamp: jest.fn(),
}));

import {
  getReviewStreak,
  recordReviewSessionComplete,
  buildSessionSummary,
} from '../dailyReviewEngine';

const STREAK_KEY = 'performsat_review_streak';

// Same zero-padded LOCAL format the engine (and practicedDays.js) uses.
const localKey = (d) => {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
};

const seedLocal = (streak) => localStorage.setItem(STREAK_KEY, JSON.stringify(streak));

describe('recordReviewSessionComplete — local day keys', () => {
  beforeEach(() => {
    localStorage.clear();
    jest.useFakeTimers();
  });
  afterEach(() => {
    jest.useRealTimers();
  });

  it('increments across a LOCAL day boundary regardless of the UTC date', () => {
    // 23:30 LOCAL time — in any negative-offset timezone the UTC date is
    // already "tomorrow", which made the old toISOString() keys skip a day.
    const now = new Date(2026, 5, 15, 23, 30, 0); // local June 15
    jest.setSystemTime(now);
    const yesterday = new Date(2026, 5, 14, 12, 0, 0);
    seedLocal({ current: 3, best: 5, lastDate: localKey(yesterday) });

    const updated = recordReviewSessionComplete();
    expect(updated.current).toBe(4);
    expect(updated.best).toBe(5);
    expect(updated.lastDate).toBe('2026-06-15'); // LOCAL today, not the UTC date
  });

  it('stores today as a LOCAL key just after local midnight', () => {
    jest.setSystemTime(new Date(2026, 5, 16, 0, 10, 0)); // local June 16, 00:10
    const updated = recordReviewSessionComplete();
    expect(updated.current).toBe(1);
    expect(updated.lastDate).toBe('2026-06-16');
  });

  it('is a no-op on a same-local-day repeat', () => {
    jest.setSystemTime(new Date(2026, 5, 15, 9, 0, 0));
    seedLocal({ current: 4, best: 6, lastDate: '2026-06-15' });
    const updated = recordReviewSessionComplete();
    expect(updated).toEqual({ current: 4, best: 6, lastDate: '2026-06-15' });
  });

  it('resets to 1 after a missed local day', () => {
    jest.setSystemTime(new Date(2026, 5, 15, 9, 0, 0));
    seedLocal({ current: 7, best: 9, lastDate: '2026-06-12' });
    const updated = recordReviewSessionComplete();
    expect(updated.current).toBe(1);
    expect(updated.best).toBe(9);
  });
});

describe('recordReviewSessionComplete — server streak seeding (second device)', () => {
  beforeEach(() => {
    localStorage.clear();
    jest.useFakeTimers();
    jest.setSystemTime(new Date(2026, 5, 15, 20, 0, 0)); // local June 15
  });
  afterEach(() => {
    jest.useRealTimers();
  });

  it('fresh device: continues the server streak instead of restarting at 1', () => {
    const updated = recordReviewSessionComplete({ current: 10, best: 12, lastDate: '2026-06-14' });
    expect(updated.current).toBe(11); // consecutive with the server lastDate
    expect(updated.best).toBe(12);
    expect(updated.lastDate).toBe('2026-06-15');
  });

  it('fresh device, server already recorded today: no double increment', () => {
    const updated = recordReviewSessionComplete({ current: 10, best: 12, lastDate: '2026-06-15' });
    expect(updated).toEqual({ current: 10, best: 12, lastDate: '2026-06-15' });
    // The device cache catches up so a later persist can't regress the server.
    expect(getReviewStreak()).toEqual({ current: 10, best: 12, lastDate: '2026-06-15' });
  });

  it('local state ahead of server: local wins, best merges as max', () => {
    seedLocal({ current: 5, best: 5, lastDate: '2026-06-15' });
    const updated = recordReviewSessionComplete({ current: 2, best: 8, lastDate: '2026-06-13' });
    expect(updated.current).toBe(5);
    expect(updated.best).toBe(8); // max(local 5, server 8)
    expect(updated.lastDate).toBe('2026-06-15');
  });

  it('same-day, server further along: server current wins', () => {
    seedLocal({ current: 1, best: 1, lastDate: '2026-06-15' });
    const updated = recordReviewSessionComplete({ current: 6, best: 6, lastDate: '2026-06-15' });
    expect(updated.current).toBe(6);
    expect(updated.best).toBe(6);
  });

  it('stale server streak: restarts at 1 but preserves server best', () => {
    const updated = recordReviewSessionComplete({ current: 9, best: 15, lastDate: '2026-05-01' });
    expect(updated.current).toBe(1);
    expect(updated.best).toBe(15);
  });

  it('no serverStreak arg keeps the plain local behavior', () => {
    seedLocal({ current: 2, best: 4, lastDate: '2026-06-14' });
    const updated = recordReviewSessionComplete();
    expect(updated.current).toBe(3);
    expect(updated.best).toBe(4);
  });
});

describe('buildSessionSummary', () => {
  beforeEach(() => {
    localStorage.clear();
    jest.useFakeTimers();
    jest.setSystemTime(new Date(2026, 5, 15, 20, 0, 0));
  });
  afterEach(() => {
    jest.useRealTimers();
  });

  it('computes accuracy and threads serverStreak into the streak', () => {
    const summary = buildSessionSummary(
      [{ wasCorrect: true }, { wasCorrect: true }, { wasCorrect: false }],
      { current: 10, best: 12, lastDate: '2026-06-14' },
    );
    expect(summary.correct).toBe(2);
    expect(summary.total).toBe(3);
    expect(summary.accuracy).toBe(67);
    expect(summary.streak.current).toBe(11); // seeded from server, then incremented
    expect(summary.streak.best).toBe(12);
  });
});
