import { summarizePredictions } from '../predictionSummary';

const mkPrediction = ({
  id = 'p1',
  createdAt = '2026-05-01T10:00:00Z',
  low = 1340,
  high = 1420,
  resolved = true,
  actualTestId = 'test-3',
  scoreInRange = true,
} = {}) => ({
  id,
  createdAt,
  createdAfterTestId: 'test-2',
  predictions: { expectedScoreRange: { low, high } },
  resolved,
  actualTestId,
  accuracy: resolved ? { scoreInRange } : null,
});

const mkResults = (testId, scaledScore) => ({
  [testId]: {
    attempts: [{ scaledScore }],
    bestScaledScore: scaledScore,
  },
});

describe('summarizePredictions — empty input', () => {
  it('returns null for null/undefined log', () => {
    expect(summarizePredictions(null)).toBeNull();
    expect(summarizePredictions(undefined)).toBeNull();
  });
  it('returns null for empty array', () => {
    expect(summarizePredictions([])).toBeNull();
  });
  it('returns null when nothing is resolved (pre-2nd-test gate)', () => {
    const log = [mkPrediction({ resolved: false })];
    expect(summarizePredictions(log)).toBeNull();
  });
  it('returns null when entries are malformed', () => {
    const log = [
      { resolved: true }, // missing predictions
      { resolved: true, predictions: {} }, // missing expectedScoreRange
    ];
    expect(summarizePredictions(log)).toBeNull();
  });
});

describe('summarizePredictions — single validated prediction', () => {
  const log = [
    mkPrediction({ low: 1340, high: 1420, scoreInRange: true, actualTestId: 'test-3' }),
  ];
  const results = mkResults('test-3', 1395);

  it('returns the latest prediction with actualScore', () => {
    const r = summarizePredictions(log, results);
    expect(r).not.toBeNull();
    expect(r.latest.low).toBe(1340);
    expect(r.latest.high).toBe(1420);
    expect(r.latest.actualScore).toBe(1395);
    expect(r.latest.scoreInRange).toBe(true);
  });

  it('counts hits/total/hitRate for one validated entry', () => {
    const r = summarizePredictions(log, results);
    expect(r.hits).toBe(1);
    expect(r.total).toBe(1);
    expect(r.hitRate).toBe(1);
  });

  it('returns null actualScore when test result is missing', () => {
    const r = summarizePredictions(log, {});
    expect(r.latest.actualScore).toBeNull();
  });
});

describe('summarizePredictions — multi-entry history', () => {
  const log = [
    mkPrediction({ id: 'p1', createdAt: '2026-04-01T10:00:00Z', scoreInRange: true,  actualTestId: 't1' }),
    mkPrediction({ id: 'p2', createdAt: '2026-04-15T10:00:00Z', scoreInRange: false, actualTestId: 't2' }),
    mkPrediction({ id: 'p3', createdAt: '2026-05-01T10:00:00Z', scoreInRange: true,  actualTestId: 't3' }),
    mkPrediction({ id: 'p4', createdAt: '2026-05-09T10:00:00Z', scoreInRange: true,  actualTestId: 't4', low: 1380, high: 1480 }),
  ];
  const results = {
    ...mkResults('t1', 1300),
    ...mkResults('t2', 1500),
    ...mkResults('t3', 1395),
    ...mkResults('t4', 1410),
  };

  it('picks the newest validated entry by createdAt', () => {
    const r = summarizePredictions(log, results);
    expect(r.latest.low).toBe(1380);
    expect(r.latest.high).toBe(1480);
    expect(r.latest.actualScore).toBe(1410);
    expect(r.latest.scoreInRange).toBe(true);
  });

  it('aggregates hits across all validated entries', () => {
    const r = summarizePredictions(log, results);
    expect(r.hits).toBe(3);
    expect(r.total).toBe(4);
    expect(r.hitRate).toBe(0.75);
  });

  it('skips entries that are still unresolved when computing total', () => {
    const mixed = [
      ...log,
      mkPrediction({ id: 'p5', createdAt: '2026-05-09T11:00:00Z', resolved: false }),
    ];
    const r = summarizePredictions(mixed, results);
    expect(r.total).toBe(4);
  });
});

describe('summarizePredictions — degraded inputs', () => {
  it('handles unparseable createdAt by falling back to insertion order', () => {
    const log = [
      mkPrediction({ id: 'a', createdAt: 'not-a-date', scoreInRange: true,  actualTestId: 'a' }),
      mkPrediction({ id: 'b', createdAt: 'also-bad',   scoreInRange: false, actualTestId: 'b' }),
    ];
    const r = summarizePredictions(log, {});
    // Just shouldn't crash + still produces hits/total counts.
    expect(r.total).toBe(2);
    expect(r.hits).toBe(1);
  });

  it('uses bestScaledScore when latest attempt lacks a scaledScore', () => {
    const log = [mkPrediction({ actualTestId: 't1', scoreInRange: true })];
    const results = {
      t1: {
        attempts: [{}],            // attempt has no scaledScore
        bestScaledScore: 1380,
      },
    };
    const r = summarizePredictions(log, results);
    expect(r.latest.actualScore).toBe(1380);
  });
});
