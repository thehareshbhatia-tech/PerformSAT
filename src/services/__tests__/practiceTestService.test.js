/**
 * Tests for recordPracticeTestResult + loadAttemptSnapshot.
 *
 * Firestore is mocked with a small in-memory shim so we can verify:
 *  - main aggregate doc + per-attempt subcollection doc are written together
 *    via writeBatch (atomic)
 *  - trimAttempts strips diagnosticData/Report from non-latest attempts but
 *    leaves subcollection snapshots untouched
 *  - loadAttemptSnapshot returns the snapshot for an existing attemptId, null
 *    otherwise (legacy attempt)
 *  - missing questionsSnapshot logs a warning and skips the snapshot write but
 *    still writes the main doc
 *
 * NOTE on Jest hoisting: jest.mock() factories run before module-level vars
 * are initialized, so all helpers used by the mock live INSIDE the factory.
 * Tests grab the in-memory store via getMockStore() exported from the mock.
 */

jest.mock('../../firebase/config', () => ({ db: { __isFakeDb: true } }));

jest.mock('firebase/firestore', () => {
  // Variables prefixed with `mock` are the only out-of-scope refs jest's babel
  // plugin allows — but here we keep everything self-contained instead.
  const store = new Map();
  let nextBatchShouldFail = false;

  const deepClone = (v) => {
    if (v === null || typeof v !== 'object') return v;
    if (Array.isArray(v)) return v.map(deepClone);
    const out = {};
    Object.keys(v).forEach(k => { out[k] = deepClone(v[k]); });
    return out;
  };

  const applyDotted = (target, updates) => {
    const out = deepClone(target);
    Object.entries(updates).forEach(([key, value]) => {
      if (!key.includes('.')) {
        out[key] = deepClone(value);
        return;
      }
      const parts = key.split('.');
      let cursor = out;
      for (let i = 0; i < parts.length - 1; i++) {
        const part = parts[i];
        if (!cursor[part] || typeof cursor[part] !== 'object') {
          cursor[part] = {};
        }
        cursor = cursor[part];
      }
      cursor[parts[parts.length - 1]] = deepClone(value);
    });
    return out;
  };

  class FakeWriteBatch {
    constructor() { this.ops = []; }
    set(ref, data, options) {
      this.ops.push({ kind: 'set', path: ref.__path, data, merge: !!options?.merge });
    }
    update(ref, data) {
      this.ops.push({ kind: 'update', path: ref.__path, data });
    }
    delete(ref) {
      this.ops.push({ kind: 'delete', path: ref.__path });
    }
    async commit() {
      if (nextBatchShouldFail) {
        nextBatchShouldFail = false;
        throw new Error('Simulated batch commit failure');
      }
      const rollback = new Map(store);
      try {
        for (const op of this.ops) {
          if (op.kind === 'set') {
            if (op.merge) {
              const existing = store.get(op.path) || {};
              store.set(op.path, applyDotted(existing, op.data));
            } else {
              store.set(op.path, deepClone(op.data));
            }
          } else if (op.kind === 'update') {
            const existing = store.get(op.path) || {};
            store.set(op.path, applyDotted(existing, op.data));
          } else if (op.kind === 'delete') {
            store.delete(op.path);
          }
        }
      } catch (err) {
        store.clear();
        rollback.forEach((v, k) => store.set(k, v));
        throw err;
      }
    }
  }

  return {
    // ── test helpers (not exported by the real firebase/firestore module) ──
    __getStore: () => store,
    __resetStore: () => { store.clear(); nextBatchShouldFail = false; },
    __setBatchShouldFail: (v) => { nextBatchShouldFail = v; },

    // ── Firestore API surface ────────────────────────────────────────────
    doc: (...args) => ({ __path: args.slice(1).join('/') }),
    collection: (...args) => ({ __path: args.slice(1).join('/') }),
    getDoc: async (ref) => {
      const data = store.get(ref.__path);
      return {
        exists: () => data !== undefined,
        data: () => deepClone(data),
        id: ref.__path.split('/').pop(),
      };
    },
    setDoc: async (ref, data, options) => {
      if (options?.merge) {
        const existing = store.get(ref.__path) || {};
        store.set(ref.__path, applyDotted(existing, data));
      } else {
        store.set(ref.__path, deepClone(data));
      }
    },
    updateDoc: async (ref, data) => {
      const existing = store.get(ref.__path) || {};
      store.set(ref.__path, applyDotted(existing, data));
    },
    serverTimestamp: () => ({ __serverTimestamp: true }),
    arrayUnion: (...items) => ({ __arrayUnion: items }),
    addDoc: async (colRef, data) => {
      const id = `auto-${Math.random().toString(36).slice(2, 10)}`;
      store.set(`${colRef.__path}/${id}`, deepClone(data));
      return { id };
    },
    query: (...args) => ({ __query: args }),
    where: (...args) => ({ __where: args }),
    orderBy: (...args) => ({ __orderBy: args }),
    limit: (n) => ({ __limit: n }),
    getDocs: async () => ({ empty: true, docs: [] }),
    writeBatch: () => new FakeWriteBatch(),
  };
});

// ── module under test (after jest.mock calls) ───────────────────────────────

const {
  recordPracticeTestResult,
  loadAttemptSnapshot,
  generateAttemptId,
  SNAPSHOT_VERSION,
} = require('../practiceTestService');

const firestoreMock = require('firebase/firestore');
const getStore = () => firestoreMock.__getStore();

// ── helpers ─────────────────────────────────────────────────────────────────

const buildSnapshot = (count = 4) => {
  const out = [];
  for (let i = 0; i < count; i++) {
    out.push({
      id: `q-${i}`,
      type: 'mcq',
      stem: `Question ${i}: solve $x = ${i}$`,
      choices: [
        { id: 'A', text: 'A' },
        { id: 'B', text: 'B' },
        { id: 'C', text: 'C' },
        { id: 'D', text: 'D' },
      ],
      correctAnswer: 'A',
      explanation: `Explanation ${i}`,
      difficulty: 'easy',
      band: 3,
      skills: ['linear-equations'],
      moduleIndex: 0,
      questionIndex: i,
    });
  }
  return out;
};

const buildResults = (overrides = {}) => ({
  attemptId: 'attempt-fixed-1',
  rawScore: 18,
  totalQuestions: 22,
  scaledScore: 620,
  timedMode: true,
  moduleScores: [
    { module: 1, correct: 18, total: 22, scaledScore: 320 },
  ],
  diagnosticData: { questionDetails: {} },
  diagnosticReport: { score: { scaled: 620 } },
  scoringVersion: 'v1',
  thetaEstimate: 0.5,
  standardError: 0.3,
  routeTaken: 'easy',
  questionsSnapshot: buildSnapshot(4),
  answers: { '0-0': 'A', '0-1': 'B' },
  ...overrides,
});

// Helper: pull the test row off the (properly nested) main doc
const getTestRow = (mainDoc, testId) => mainDoc?.practiceTestResults?.[testId];

beforeEach(() => {
  firestoreMock.__resetStore();
  jest.clearAllMocks();
});

// ── tests ───────────────────────────────────────────────────────────────────

describe('generateAttemptId', () => {
  test('returns a non-empty string and is unique across calls', () => {
    const a = generateAttemptId();
    const b = generateAttemptId();
    expect(typeof a).toBe('string');
    expect(a.length).toBeGreaterThan(5);
    expect(a).not.toBe(b);
  });
});

describe('recordPracticeTestResult — new attempt', () => {
  test('writes main doc + per-attempt subcollection doc atomically', async () => {
    await recordPracticeTestResult('user-1', 'practice-test-1', 'Practice Test 1', buildResults());

    const main = getStore().get('progress/user-1');
    expect(main).toBeTruthy();
    expect(main.userId).toBe('user-1');
    const row = getTestRow(main, 'practice-test-1');
    expect(row).toBeTruthy();
    expect(row.attempts).toHaveLength(1);
    expect(row.attempts[0].attemptId).toBe('attempt-fixed-1');

    const snap = getStore().get('progress/user-1/attempts/attempt-fixed-1');
    expect(snap).toBeTruthy();
    expect(snap.attemptId).toBe('attempt-fixed-1');
    expect(snap.testId).toBe('practice-test-1');
    expect(snap.snapshotVersion).toBe(SNAPSHOT_VERSION);
    expect(snap.questionsSnapshot).toHaveLength(4);
    expect(snap.questionsSnapshot[0]).toMatchObject({
      id: 'q-0', type: 'mcq', correctAnswer: 'A', moduleIndex: 0, questionIndex: 0,
    });
    expect(snap.answers).toEqual({ '0-0': 'A', '0-1': 'B' });
  });

  test('throws when userId missing', async () => {
    await expect(
      recordPracticeTestResult(null, 'practice-test-1', 'Practice Test 1', buildResults())
    ).rejects.toThrow(/User ID is required/);
  });
});

describe('recordPracticeTestResult — update attempt', () => {
  test('appends a new subcollection doc per attempt (does not overwrite prior snapshots)', async () => {
    await recordPracticeTestResult('user-1', 'practice-test-1', 'Practice Test 1',
      buildResults({ attemptId: 'a-1', scaledScore: 540, rawScore: 16 }));
    // Move clock forward so trimAttempts ordering is deterministic
    await new Promise(r => setTimeout(r, 5));
    await recordPracticeTestResult('user-1', 'practice-test-1', 'Practice Test 1',
      buildResults({ attemptId: 'a-2', scaledScore: 660, rawScore: 19 }));

    const main = getStore().get('progress/user-1');
    const testRow = getTestRow(main, 'practice-test-1');
    expect(testRow.attempts).toHaveLength(2);
    expect(testRow.totalAttempts).toBe(2);
    expect(testRow.bestScaledScore).toBe(660);
    expect(testRow.bestRawScore).toBe(19);
    // Latest attempt sorts to index 0
    expect(testRow.attempts[0].attemptId).toBe('a-2');

    // Both subcollection docs survive — ONE PER ATTEMPT
    expect(getStore().get('progress/user-1/attempts/a-1')).toBeTruthy();
    expect(getStore().get('progress/user-1/attempts/a-2')).toBeTruthy();
  });

  test('keeps best scores when subsequent attempts score lower', async () => {
    await recordPracticeTestResult('user-1', 'practice-test-1', 'Practice Test 1',
      buildResults({ attemptId: 'a-1', scaledScore: 700, rawScore: 20 }));
    await new Promise(r => setTimeout(r, 5));
    await recordPracticeTestResult('user-1', 'practice-test-1', 'Practice Test 1',
      buildResults({ attemptId: 'a-2', scaledScore: 500, rawScore: 12 }));

    const main = getStore().get('progress/user-1');
    const testRow = getTestRow(main, 'practice-test-1');
    expect(testRow.bestScaledScore).toBe(700);
    expect(testRow.bestRawScore).toBe(20);
  });
});

describe('recordPracticeTestResult — trimAttempts', () => {
  test('keeps only MAX_ATTEMPTS=5 in the main doc but preserves all subcollection snapshots', async () => {
    for (let i = 0; i < 7; i++) {
      // Stagger completedAt explicitly via real-time delays so trimAttempts ordering is deterministic
      await recordPracticeTestResult('user-1', 'practice-test-1', 'Practice Test 1',
        buildResults({ attemptId: `a-${i}`, scaledScore: 500 + i, rawScore: 10 + i }));
      await new Promise(r => setTimeout(r, 3));
    }

    const main = getStore().get('progress/user-1');
    const testRow = getTestRow(main, 'practice-test-1');
    expect(testRow.attempts.length).toBe(5);
    expect(testRow.totalAttempts).toBe(7); // counter NOT trimmed

    // Newest first
    expect(testRow.attempts[0].attemptId).toBe('a-6');
    expect(testRow.attempts[4].attemptId).toBe('a-2');

    // Non-latest attempts keep aggregate fields but lose diagnosticReport/Data
    for (let i = 1; i < 5; i++) {
      expect(testRow.attempts[i].diagnosticReport).toBeUndefined();
      expect(testRow.attempts[i].diagnosticData).toBeUndefined();
      expect(testRow.attempts[i].attemptId).toBeTruthy();
    }
    // Latest keeps diagnosticData (read by trend/prediction services) but
    // strips diagnosticReport (regenerated on demand from diagnosticData by
    // App.jsx's ViewResults fallback) to keep the main doc under 1MB.
    expect(testRow.attempts[0].diagnosticReport).toBeUndefined();
    expect(testRow.attempts[0].diagnosticData).toBeTruthy();

    // ALL 7 subcollection snapshots survive — Review Answers can still find them
    for (let i = 0; i < 7; i++) {
      expect(getStore().get(`progress/user-1/attempts/a-${i}`)).toBeTruthy();
    }
  });
});

describe('recordPracticeTestResult — missing snapshot', () => {
  test('logs warning and skips snapshot write when questionsSnapshot is absent', async () => {
    const warnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});

    const results = buildResults({ attemptId: 'no-snap-1' });
    delete results.questionsSnapshot;

    await recordPracticeTestResult('user-1', 'practice-test-1', 'Practice Test 1', results);

    // Main doc still written
    const main = getStore().get('progress/user-1');
    expect(main).toBeTruthy();
    expect(getTestRow(main, 'practice-test-1').attempts[0].attemptId).toBe('no-snap-1');

    // No subcollection doc
    expect(getStore().get('progress/user-1/attempts/no-snap-1')).toBeUndefined();

    expect(warnSpy).toHaveBeenCalledWith(
      expect.stringContaining('No questionsSnapshot provided')
    );
    warnSpy.mockRestore();
  });

  test('also skips snapshot when questionsSnapshot is an empty array', async () => {
    const warnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});

    await recordPracticeTestResult('user-1', 'practice-test-1', 'Practice Test 1',
      buildResults({ attemptId: 'empty-snap', questionsSnapshot: [] }));

    expect(getStore().get('progress/user-1/attempts/empty-snap')).toBeUndefined();
    expect(warnSpy).toHaveBeenCalled();
    warnSpy.mockRestore();
  });
});

describe('recordPracticeTestResult — atomicity', () => {
  test('batch commit failure rolls back: neither main nor snapshot is written', async () => {
    firestoreMock.__setBatchShouldFail(true);

    await expect(
      recordPracticeTestResult('user-1', 'practice-test-1', 'Practice Test 1',
        buildResults({ attemptId: 'will-fail' }))
    ).rejects.toThrow(/Simulated batch commit failure/);

    // Verify NEITHER doc was created — atomic rollback
    expect(getStore().get('progress/user-1')).toBeUndefined();
    expect(getStore().get('progress/user-1/attempts/will-fail')).toBeUndefined();
  });
});

describe('loadAttemptSnapshot', () => {
  test('returns the snapshot for an existing attemptId', async () => {
    await recordPracticeTestResult('user-1', 'practice-test-1', 'Practice Test 1',
      buildResults({ attemptId: 'attempt-load-1' }));

    const loaded = await loadAttemptSnapshot('user-1', 'attempt-load-1');
    expect(loaded).toBeTruthy();
    expect(loaded.attemptId).toBe('attempt-load-1');
    expect(loaded.testId).toBe('practice-test-1');
    expect(loaded.questionsSnapshot).toHaveLength(4);
    expect(loaded.snapshotVersion).toBe(SNAPSHOT_VERSION);
    expect(loaded.id).toBe('attempt-load-1');
  });

  test('returns null for a non-existent attemptId (legacy attempt)', async () => {
    const result = await loadAttemptSnapshot('user-1', 'never-existed');
    expect(result).toBeNull();
  });

  test('returns null when userId or attemptId is missing', async () => {
    expect(await loadAttemptSnapshot(null, 'a-1')).toBeNull();
    expect(await loadAttemptSnapshot('user-1', null)).toBeNull();
    expect(await loadAttemptSnapshot('', '')).toBeNull();
  });
});

describe('snapshot payload shape', () => {
  test('payload includes all required fields', async () => {
    await recordPracticeTestResult('user-1', 'practice-test-1', 'Practice Test 1',
      buildResults({ attemptId: 'shape-check' }));

    const snap = getStore().get('progress/user-1/attempts/shape-check');
    expect(snap).toMatchObject({
      attemptId: 'shape-check',
      testId: 'practice-test-1',
      snapshotVersion: SNAPSHOT_VERSION,
    });
    expect(typeof snap.completedAt).toBe('string');
    expect(Array.isArray(snap.questionsSnapshot)).toBe(true);
    expect(typeof snap.answers).toBe('object');

    // Per-question fields preserved verbatim
    snap.questionsSnapshot.forEach(q => {
      expect(q).toHaveProperty('id');
      expect(q).toHaveProperty('type');
      expect(q).toHaveProperty('stem');
      expect(q).toHaveProperty('choices');
      expect(q).toHaveProperty('correctAnswer');
      expect(q).toHaveProperty('moduleIndex');
      expect(q).toHaveProperty('questionIndex');
    });
  });

  test('uses attemptId from results when provided, generates one otherwise', async () => {
    const results = buildResults();
    delete results.attemptId;

    await recordPracticeTestResult('user-1', 'practice-test-1', 'Practice Test 1', results);

    const main = getStore().get('progress/user-1');
    const written = getTestRow(main, 'practice-test-1').attempts[0];
    expect(written.attemptId).toBeTruthy();
    expect(typeof written.attemptId).toBe('string');

    // The matching subcollection doc should exist under that generated id
    const snap = getStore().get(`progress/user-1/attempts/${written.attemptId}`);
    expect(snap).toBeTruthy();
  });
});
