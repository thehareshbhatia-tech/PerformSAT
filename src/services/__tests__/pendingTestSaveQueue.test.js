/**
 * pendingTestSaveQueue — pure unit tests over jsdom localStorage.
 *
 * The queue is a pure module (no React, no Firebase), so we exercise the
 * full matrix here: roundtrip, attemptId dedupe, the 3-entry cap, per-uid
 * key isolation, diagnosticReport stripping, the quota fallback (slim
 * entries), flush success/failure/mixed, and corrupted-JSON resilience.
 * Banner/hook visual states live in the manual QA list (no
 * @testing-library/react in the codebase yet — see TodaysTasksCard.test.js).
 */

import {
  enqueuePendingSave,
  readPendingSaves,
  removePendingSave,
  clearPendingSaves,
  flushPendingSaves,
} from '../pendingTestSaveQueue';

const UID = 'user-1';

const buildResults = (overrides = {}) => ({
  attemptId: 'attempt-1',
  rawScore: 18,
  totalQuestions: 22,
  scaledScore: 620,
  timedMode: true,
  moduleScores: [{ module: 1, correct: 18, total: 22 }],
  questionsSnapshot: [{ id: 'q-0', stem: 'Solve $x = 1$', choices: ['A', 'B'] }],
  diagnosticData: { questionDetails: { 'q-0': { correct: true } } },
  diagnosticReport: { score: { scaled: 620 }, narrative: 'big regenerable blob' },
  ...overrides,
});

const buildEntry = ({ results: resultOverrides, ...rest } = {}) => ({
  testId: 'practice-test-1',
  testTitle: 'Practice Test 1',
  ...rest,
  results: buildResults(resultOverrides || {}),
});

beforeEach(() => {
  window.localStorage.clear();
  jest.restoreAllMocks();
});

describe('enqueuePendingSave + readPendingSaves roundtrip', () => {
  test('stores an entry and reads it back with queuedAt stamped', () => {
    const ok = enqueuePendingSave(UID, buildEntry());
    expect(ok).toBe(true);

    const entries = readPendingSaves(UID);
    expect(entries).toHaveLength(1);
    expect(entries[0].testId).toBe('practice-test-1');
    expect(entries[0].testTitle).toBe('Practice Test 1');
    expect(entries[0].results.attemptId).toBe('attempt-1');
    expect(entries[0].results.scaledScore).toBe(620);
    expect(typeof entries[0].queuedAt).toBe('string');
    expect(Number.isNaN(Date.parse(entries[0].queuedAt))).toBe(false);
  });

  test('returns false / [] for missing userId or results', () => {
    expect(enqueuePendingSave(null, buildEntry())).toBe(false);
    expect(enqueuePendingSave(UID, null)).toBe(false);
    expect(enqueuePendingSave(UID, { testId: 't', testTitle: 'T' })).toBe(false);
    expect(readPendingSaves(null)).toEqual([]);
    expect(readPendingSaves(UID)).toEqual([]);
  });

  test('always strips diagnosticReport from the stored entry (regenerable)', () => {
    enqueuePendingSave(UID, buildEntry());

    const [stored] = readPendingSaves(UID);
    expect(stored.results.diagnosticReport).toBeUndefined();
    // The lossy-but-acceptable fields survive the normal (non-quota) path.
    expect(stored.results.questionsSnapshot).toBeDefined();
    expect(stored.results.diagnosticData).toBeDefined();
  });
});

describe('dedupe by attemptId', () => {
  test('re-enqueueing the same attemptId replaces the entry, length stays 1', () => {
    enqueuePendingSave(UID, buildEntry({ results: { scaledScore: 500 } }));
    enqueuePendingSave(UID, buildEntry({ results: { scaledScore: 660 } }));

    const entries = readPendingSaves(UID);
    expect(entries).toHaveLength(1);
    expect(entries[0].results.scaledScore).toBe(660);
  });
});

describe('cap at 3 entries', () => {
  test('fourth enqueue drops the oldest entry', () => {
    enqueuePendingSave(UID, buildEntry({ results: { attemptId: 'a-1' } }));
    enqueuePendingSave(UID, buildEntry({ results: { attemptId: 'a-2' } }));
    enqueuePendingSave(UID, buildEntry({ results: { attemptId: 'a-3' } }));
    enqueuePendingSave(UID, buildEntry({ results: { attemptId: 'a-4' } }));

    const ids = readPendingSaves(UID).map((e) => e.results.attemptId);
    expect(ids).toEqual(['a-2', 'a-3', 'a-4']);
  });
});

describe('removePendingSave + clearPendingSaves', () => {
  test('removes only the matching attemptId', () => {
    enqueuePendingSave(UID, buildEntry({ results: { attemptId: 'a-1' } }));
    enqueuePendingSave(UID, buildEntry({ results: { attemptId: 'a-2' } }));

    removePendingSave(UID, 'a-1');

    const ids = readPendingSaves(UID).map((e) => e.results.attemptId);
    expect(ids).toEqual(['a-2']);
  });

  test('removing the last entry clears the storage key entirely', () => {
    enqueuePendingSave(UID, buildEntry({ results: { attemptId: 'a-1' } }));
    removePendingSave(UID, 'a-1');

    expect(window.localStorage.getItem(`seva:pendingTestSaves:${UID}`)).toBeNull();
    expect(readPendingSaves(UID)).toEqual([]);
  });

  test('clearPendingSaves drops the whole queue', () => {
    enqueuePendingSave(UID, buildEntry({ results: { attemptId: 'a-1' } }));
    enqueuePendingSave(UID, buildEntry({ results: { attemptId: 'a-2' } }));

    clearPendingSaves(UID);
    expect(readPendingSaves(UID)).toEqual([]);
  });
});

describe('per-uid key isolation', () => {
  test('queues for different users never bleed into each other', () => {
    enqueuePendingSave('user-a', buildEntry({ results: { attemptId: 'a-1' } }));
    enqueuePendingSave('user-b', buildEntry({ results: { attemptId: 'b-1' } }));

    expect(readPendingSaves('user-a').map((e) => e.results.attemptId)).toEqual(['a-1']);
    expect(readPendingSaves('user-b').map((e) => e.results.attemptId)).toEqual(['b-1']);

    removePendingSave('user-a', 'a-1');
    expect(readPendingSaves('user-a')).toEqual([]);
    expect(readPendingSaves('user-b')).toHaveLength(1);
  });
});

describe('quota fallback', () => {
  test('retries once with questionsSnapshot + diagnosticData stripped', () => {
    jest.spyOn(Storage.prototype, 'setItem').mockImplementationOnce(() => {
      throw new DOMException('quota exceeded', 'QuotaExceededError');
    });

    const ok = enqueuePendingSave(UID, buildEntry());
    expect(ok).toBe(true);

    const [stored] = readPendingSaves(UID);
    // Critical payload survives...
    expect(stored.results.attemptId).toBe('attempt-1');
    expect(stored.results.scaledScore).toBe(620);
    expect(stored.results.rawScore).toBe(18);
    // ...heavy fields are gone in the slim shape.
    expect(stored.results.questionsSnapshot).toBeUndefined();
    expect(stored.results.diagnosticData).toBeUndefined();
    expect(stored.results.diagnosticReport).toBeUndefined();
  });

  test('returns false when even the slim retry throws', () => {
    const spy = jest.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
      throw new DOMException('quota exceeded', 'QuotaExceededError');
    });

    expect(enqueuePendingSave(UID, buildEntry())).toBe(false);
    expect(spy).toHaveBeenCalledTimes(2); // full attempt + slim retry, then give up
  });
});

describe('flushPendingSaves', () => {
  test('successful saveFn removes entries and tallies flushed', async () => {
    enqueuePendingSave(UID, buildEntry({ results: { attemptId: 'a-1' } }));
    enqueuePendingSave(UID, buildEntry({ results: { attemptId: 'a-2' } }));

    const saveFn = jest.fn().mockResolvedValue(undefined);
    const result = await flushPendingSaves(UID, saveFn);

    expect(result).toEqual({ flushed: 2, failed: 0 });
    expect(saveFn).toHaveBeenCalledTimes(2);
    // Sequential, oldest first
    expect(saveFn.mock.calls[0][0].results.attemptId).toBe('a-1');
    expect(saveFn.mock.calls[1][0].results.attemptId).toBe('a-2');
    expect(readPendingSaves(UID)).toEqual([]);
  });

  test('failing saveFn keeps the entry queued for the next boot', async () => {
    const errorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    enqueuePendingSave(UID, buildEntry({ results: { attemptId: 'a-1' } }));

    const saveFn = jest.fn().mockRejectedValue(new Error('still offline'));
    const result = await flushPendingSaves(UID, saveFn);

    expect(result).toEqual({ flushed: 0, failed: 1 });
    expect(readPendingSaves(UID).map((e) => e.results.attemptId)).toEqual(['a-1']);
    errorSpy.mockRestore();
  });

  test('mixed outcomes: failures stay, successes leave, both tallied', async () => {
    const errorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    enqueuePendingSave(UID, buildEntry({ results: { attemptId: 'a-ok' } }));
    enqueuePendingSave(UID, buildEntry({ results: { attemptId: 'a-bad' } }));
    enqueuePendingSave(UID, buildEntry({ results: { attemptId: 'a-ok-2' } }));

    const saveFn = jest.fn((entry) =>
      entry.results.attemptId === 'a-bad'
        ? Promise.reject(new Error('boom'))
        : Promise.resolve()
    );
    const result = await flushPendingSaves(UID, saveFn);

    expect(result).toEqual({ flushed: 2, failed: 1 });
    expect(readPendingSaves(UID).map((e) => e.results.attemptId)).toEqual(['a-bad']);
    errorSpy.mockRestore();
  });

  test('empty queue is a no-op', async () => {
    const saveFn = jest.fn();
    expect(await flushPendingSaves(UID, saveFn)).toEqual({ flushed: 0, failed: 0 });
    expect(saveFn).not.toHaveBeenCalled();
  });
});

describe('corrupted storage payloads', () => {
  test('readPendingSaves returns [] for invalid JSON', () => {
    window.localStorage.setItem(`seva:pendingTestSaves:${UID}`, '{not valid json');
    expect(readPendingSaves(UID)).toEqual([]);
  });

  test('readPendingSaves returns [] for a non-array payload', () => {
    window.localStorage.setItem(`seva:pendingTestSaves:${UID}`, JSON.stringify({ nope: true }));
    expect(readPendingSaves(UID)).toEqual([]);
  });

  test('enqueue recovers on top of corrupted storage', () => {
    window.localStorage.setItem(`seva:pendingTestSaves:${UID}`, '{not valid json');
    expect(enqueuePendingSave(UID, buildEntry())).toBe(true);
    expect(readPendingSaves(UID)).toHaveLength(1);
  });
});
