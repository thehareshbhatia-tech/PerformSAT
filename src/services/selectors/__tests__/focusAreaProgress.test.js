import {
  getLastTestMs,
  getRecentDrillStats,
  isMasteredInPractice,
  annotateFocusAreas,
  MASTERY_ACCURACY_THRESHOLD,
  MASTERY_MIN_RECENT_ATTEMPTS,
  DRILL_SIGNAL_MIN_ATTEMPTS,
  TEST_WRITE_GRACE_MS,
} from '../focusAreaProgress';

// ── Fixtures ────────────────────────────────────────────────────────────────

const TEST_MS = Date.parse('2026-06-01T10:00:00');

const testResults = {
  'practice-test-1': {
    attempts: [
      { completedAt: '2026-05-01T10:00:00', scaledScore: 540 },
      { completedAt: '2026-06-01T10:00:00', scaledScore: 580 },
    ],
  },
  'practice-test-2': {
    attempts: [{ completedAt: '2026-05-15T10:00:00', scaledScore: 560 }],
  },
};

// History entries: n attempts after the cutoff, k of them correct.
const historyAfter = (n, correctCount, startMs = TEST_MS + TEST_WRITE_GRACE_MS + 1000) =>
  Array.from({ length: n }, (_, i) => ({
    correct: i < correctCount,
    timestamp: startMs + i * 60000,
  }));

// ── getLastTestMs ───────────────────────────────────────────────────────────

describe('getLastTestMs', () => {
  it('returns null for empty/invalid input', () => {
    expect(getLastTestMs(null)).toBeNull();
    expect(getLastTestMs(undefined)).toBeNull();
    expect(getLastTestMs({})).toBeNull();
  });

  it('picks the newest attempt across all tests', () => {
    expect(getLastTestMs(testResults)).toBe(TEST_MS);
  });

  it('falls back to row-level lastAttemptAt when attempts are missing', () => {
    const r = getLastTestMs({ t1: { lastAttemptAt: '2026-04-01T08:00:00' } });
    expect(r).toBe(Date.parse('2026-04-01T08:00:00'));
  });
});

// ── getRecentDrillStats ─────────────────────────────────────────────────────

describe('getRecentDrillStats', () => {
  it('returns null for empty history', () => {
    expect(getRecentDrillStats(null, TEST_MS)).toBeNull();
    expect(getRecentDrillStats({}, TEST_MS)).toBeNull();
    expect(getRecentDrillStats({ history: [] }, TEST_MS)).toBeNull();
  });

  it('counts only entries after the last test + grace window', () => {
    const record = {
      history: [
        // before the test — old work
        { correct: false, timestamp: TEST_MS - 86400000 },
        // INSIDE the grace window — these are the test's OWN skill writes,
        // they must NOT count as drill evidence
        { correct: false, timestamp: TEST_MS + 1000 },
        { correct: false, timestamp: TEST_MS + TEST_WRITE_GRACE_MS - 1 },
        // after the grace — genuine drill work
        { correct: true, timestamp: TEST_MS + TEST_WRITE_GRACE_MS + 1000 },
        { correct: true, timestamp: TEST_MS + TEST_WRITE_GRACE_MS + 2000 },
        { correct: false, timestamp: TEST_MS + TEST_WRITE_GRACE_MS + 3000 },
      ],
    };
    const stats = getRecentDrillStats(record, TEST_MS);
    expect(stats).toEqual({ attempts: 3, correct: 2, accuracy: 67 });
  });

  it('returns null when all entries predate the test', () => {
    const record = { history: [{ correct: true, timestamp: TEST_MS - 1000 }] };
    expect(getRecentDrillStats(record, TEST_MS)).toBeNull();
  });

  it('counts ALL history when there is no test on record', () => {
    const record = {
      history: [
        { correct: true, timestamp: 1000 },
        { correct: false, timestamp: 2000 },
      ],
    };
    expect(getRecentDrillStats(record, null)).toEqual({ attempts: 2, correct: 1, accuracy: 50 });
  });

  it('skips malformed entries (no numeric timestamp)', () => {
    const record = {
      history: [
        { correct: true },
        { correct: true, timestamp: 'yesterday' },
        { correct: true, timestamp: TEST_MS + TEST_WRITE_GRACE_MS + 1000 },
      ],
    };
    expect(getRecentDrillStats(record, TEST_MS)).toEqual({ attempts: 1, correct: 1, accuracy: 100 });
  });
});

// ── isMasteredInPractice (retirement threshold) ─────────────────────────────

describe('isMasteredInPractice', () => {
  it('requires both the attempt floor and the accuracy threshold', () => {
    expect(isMasteredInPractice(null)).toBe(false);
    // 9/10 = 90% over 10 attempts — mastered
    expect(isMasteredInPractice({ attempts: MASTERY_MIN_RECENT_ATTEMPTS, accuracy: 90 })).toBe(true);
    // exactly at the threshold counts
    expect(isMasteredInPractice({
      attempts: MASTERY_MIN_RECENT_ATTEMPTS,
      accuracy: MASTERY_ACCURACY_THRESHOLD,
    })).toBe(true);
    // high accuracy but too few attempts — not yet
    expect(isMasteredInPractice({ attempts: MASTERY_MIN_RECENT_ATTEMPTS - 1, accuracy: 100 })).toBe(false);
    // enough attempts but below the accuracy bar — not mastered
    expect(isMasteredInPractice({
      attempts: MASTERY_MIN_RECENT_ATTEMPTS,
      accuracy: MASTERY_ACCURACY_THRESHOLD - 1,
    })).toBe(false);
  });
});

// ── annotateFocusAreas ──────────────────────────────────────────────────────

describe('annotateFocusAreas', () => {
  const weaknesses = [
    { skillId: 'slope-intercept-form', skill: 'Slope-intercept form', accuracy: 40 },
    { skillId: 'quadratic-formula', skill: 'Quadratic formula', accuracy: 45 },
    { skillId: 'circle-equations', skill: 'Circle equations', accuracy: 50 },
  ];

  it('returns [] for empty input', () => {
    expect(annotateFocusAreas()).toEqual([]);
    expect(annotateFocusAreas({ weaknesses: [] })).toEqual([]);
  });

  it('passes weaknesses through untouched when there is no drill evidence', () => {
    const rows = annotateFocusAreas({ weaknesses, skillProgress: {}, practiceTestResults: testResults });
    expect(rows.map(r => r.skillId)).toEqual(weaknesses.map(w => w.skillId));
    rows.forEach((r, i) => {
      expect(r.drillStats).toBeNull();
      expect(r.hasDrillSignal).toBe(false);
      expect(r.isMastered).toBe(false);
      expect(r.displayAccuracy).toBe(weaknesses[i].accuracy);
      expect(r.adaptiveLine).toBeNull();
    });
  });

  it('blends recent drill accuracy into displayAccuracy when the signal exists', () => {
    const skillProgress = {
      'slope-intercept-form': { history: historyAfter(5, 4) }, // 80% in drills since
    };
    const rows = annotateFocusAreas({ weaknesses, skillProgress, practiceTestResults: testResults });
    const slope = rows.find(r => r.skillId === 'slope-intercept-form');
    expect(slope.drillStats).toEqual({ attempts: 5, correct: 4, accuracy: 80 });
    expect(slope.hasDrillSignal).toBe(true);
    expect(slope.displayAccuracy).toBe(80); // live signal, not the frozen 40
  });

  it(`keeps the test baseline until ${DRILL_SIGNAL_MIN_ATTEMPTS} recent attempts exist`, () => {
    const skillProgress = {
      'slope-intercept-form': { history: historyAfter(DRILL_SIGNAL_MIN_ATTEMPTS - 1, DRILL_SIGNAL_MIN_ATTEMPTS - 1) },
    };
    const rows = annotateFocusAreas({ weaknesses, skillProgress, practiceTestResults: testResults });
    const slope = rows.find(r => r.skillId === 'slope-intercept-form');
    expect(slope.hasDrillSignal).toBe(false);
    expect(slope.displayAccuracy).toBe(40);
  });

  it('retires a weakness to the bottom when mastery threshold is crossed', () => {
    const skillProgress = {
      // first weakness: 10 attempts, 9 correct = 90% — mastered
      'slope-intercept-form': { history: historyAfter(10, 9) },
    };
    const rows = annotateFocusAreas({ weaknesses, skillProgress, practiceTestResults: testResults });
    const last = rows[rows.length - 1];
    expect(last.skillId).toBe('slope-intercept-form');
    expect(last.isMastered).toBe(true);
    expect(last.adaptiveLine).toBeNull(); // green note carries the story
    // the other two keep their relative order
    expect(rows.map(r => r.skillId)).toEqual(['quadratic-formula', 'circle-equations', 'slope-intercept-form']);
  });

  it('does NOT retire at 10 attempts below the accuracy bar', () => {
    const skillProgress = {
      'slope-intercept-form': { history: historyAfter(10, 8) }, // 80% < 85%
    };
    const rows = annotateFocusAreas({ weaknesses, skillProgress, practiceTestResults: testResults });
    expect(rows[0].skillId).toBe('slope-intercept-form');
    expect(rows[0].isMastered).toBe(false);
  });

  it('respects the overlay ordering: declined rises, improved sinks', () => {
    const overlay = {
      focusSkills: [
        { skillId: 'slope-intercept-form', delta: 'improved', currentAccuracy: 75 },
        { skillId: 'circle-equations', delta: 'declined', currentAccuracy: 30 },
      ],
    };
    const rows = annotateFocusAreas({ weaknesses, practiceTestResults: testResults, overlay });
    expect(rows.map(r => r.skillId)).toEqual([
      'circle-equations',       // declined — rises to the top
      'quadratic-formula',      // unclassified — keeps the middle
      'slope-intercept-form',   // improved — sinks
    ]);
  });

  it('writes the editorial line for improved and declined cards only', () => {
    const overlay = {
      focusSkills: [
        { skillId: 'slope-intercept-form', delta: 'improved', currentAccuracy: 75 },
        { skillId: 'circle-equations', delta: 'declined', currentAccuracy: 30 },
        { skillId: 'quadratic-formula', delta: 'stagnant', currentAccuracy: 45 },
      ],
    };
    const rows = annotateFocusAreas({ weaknesses, practiceTestResults: testResults, overlay });
    const byId = Object.fromEntries(rows.map(r => [r.skillId, r]));
    expect(byId['slope-intercept-form'].adaptiveLine).toMatch(/Improving since your last test/);
    expect(byId['slope-intercept-form'].adaptiveLine).toMatch(/75%/);
    expect(byId['circle-equations'].adaptiveLine).toMatch(/Slipping since your last test/);
    expect(byId['circle-equations'].adaptiveLine).toMatch(/30%.*50%/);
    expect(byId['quadratic-formula'].adaptiveLine).toBeNull();
  });

  it('mastered beats declined for bottom placement', () => {
    const skillProgress = {
      'slope-intercept-form': { history: historyAfter(10, 10) }, // mastered
    };
    const overlay = {
      focusSkills: [{ skillId: 'slope-intercept-form', delta: 'declined', currentAccuracy: 20 }],
    };
    const rows = annotateFocusAreas({ weaknesses, skillProgress, practiceTestResults: testResults, overlay });
    expect(rows[rows.length - 1].skillId).toBe('slope-intercept-form');
    expect(rows[rows.length - 1].isMastered).toBe(true);
  });
});
