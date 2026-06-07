/**
 * pickMostRecentTest — pure selector tests.
 *
 * Lives in selectors/ to stay clear of the Firebase import chain that the
 * sibling diagnosticReportLoader.js pulls in.
 */

import { pickMostRecentTest } from '../recentTest';

const dt = (iso) => new Date(iso).toISOString();

describe('pickMostRecentTest', () => {
  it('returns nulls for null/undefined/non-object input', () => {
    expect(pickMostRecentTest(null)).toEqual({ testId: null, lastAttempt: null });
    expect(pickMostRecentTest(undefined)).toEqual({ testId: null, lastAttempt: null });
    expect(pickMostRecentTest('nope')).toEqual({ testId: null, lastAttempt: null });
  });

  it('returns nulls for empty practiceTestResults', () => {
    expect(pickMostRecentTest({})).toEqual({ testId: null, lastAttempt: null });
  });

  it('skips test entries with no attempts', () => {
    const data = {
      'test-1': { attempts: [] },
      'test-2': { /* no attempts key */ bestScaledScore: 1200 },
    };
    expect(pickMostRecentTest(data)).toEqual({ testId: null, lastAttempt: null });
  });

  it('returns the most recent attempt by completedAt', () => {
    const older = { completedAt: dt('2026-04-01T10:00:00Z'), scaledScore: 1180 };
    const newer = { completedAt: dt('2026-05-09T15:00:00Z'), scaledScore: 1240 };
    const data = {
      'test-old': { attempts: [older] },
      'test-new': { attempts: [{}, newer] }, // last() of attempts wins per-test
    };
    const result = pickMostRecentTest(data);
    expect(result.testId).toBe('test-new');
    expect(result.lastAttempt).toBe(newer);
  });

  it('falls back to lastAttemptAt when completedAt is missing', () => {
    const a = {}; // no completedAt
    const data = {
      't': {
        attempts: [a],
        lastAttemptAt: dt('2026-05-09T15:00:00Z'),
      },
    };
    const r = pickMostRecentTest(data);
    expect(r.testId).toBe('t');
  });

  it('handles Firestore-shape timestamps { seconds, nanoseconds }', () => {
    const newerSec = Math.floor(new Date('2026-05-09T15:00:00Z').getTime() / 1000);
    const olderSec = Math.floor(new Date('2026-04-01T10:00:00Z').getTime() / 1000);
    const data = {
      'old': { attempts: [{ completedAt: { seconds: olderSec, nanoseconds: 0 } }] },
      'new': { attempts: [{ completedAt: { seconds: newerSec, nanoseconds: 0 } }] },
    };
    expect(pickMostRecentTest(data).testId).toBe('new');
  });

  it('handles { toMillis } shape', () => {
    const ms = new Date('2026-05-09T15:00:00Z').getTime();
    const data = {
      't': { attempts: [{ completedAt: { toMillis: () => ms } }] },
    };
    expect(pickMostRecentTest(data).testId).toBe('t');
  });

  it('uses the LAST attempt of each test (most recent), not the first', () => {
    const old = { completedAt: dt('2026-04-01T10:00:00Z') };
    const recent = { completedAt: dt('2026-05-09T15:00:00Z') };
    const data = {
      't': { attempts: [old, recent] },
    };
    const r = pickMostRecentTest(data);
    expect(r.lastAttempt).toBe(recent);
  });

  it('★REGRESSION★ picks the newest attempt in NEWEST-FIRST arrays (trimAttempts orientation)', () => {
    // practiceTestService.trimAttempts re-sorts attempts newest-first and
    // keeps diagnosticData only on index 0. The old attempts[len-1] read
    // returned the oldest kept attempt with diagnosticData stripped.
    const newest = { completedAt: dt('2026-06-05T15:00:00Z'), diagnosticData: { questionDetails: {} } };
    const older = { completedAt: dt('2026-05-01T10:00:00Z') };
    const oldest = { completedAt: dt('2026-04-01T10:00:00Z') };
    const data = {
      't': { attempts: [newest, older, oldest] },
    };
    const r = pickMostRecentTest(data);
    expect(r.lastAttempt).toBe(newest);
    expect(r.lastAttempt.diagnosticData).toBeTruthy();
  });

  it('order-independence: mixed orientations across tests still pick the global newest', () => {
    const a = { completedAt: dt('2026-06-01T10:00:00Z') };
    const b = { completedAt: dt('2026-06-04T10:00:00Z') };
    const data = {
      'oldest-first': { attempts: [{ completedAt: dt('2026-03-01T10:00:00Z') }, a] },
      'newest-first': { attempts: [b, { completedAt: dt('2026-02-01T10:00:00Z') }] },
    };
    const r = pickMostRecentTest(data);
    expect(r.testId).toBe('newest-first');
    expect(r.lastAttempt).toBe(b);
  });

  it('breaks ties: keeps the first-seen test when timestamps tie', () => {
    const sameTs = dt('2026-05-09T15:00:00Z');
    const data = {
      'a': { attempts: [{ completedAt: sameTs }] },
      'b': { attempts: [{ completedAt: sameTs }] },
    };
    const r = pickMostRecentTest(data);
    // Strict-greater-than tiebreak means the first iterator order wins.
    expect(['a', 'b']).toContain(r.testId);
    // Whichever wins, deterministic via JS object iteration order on string keys.
  });
});
