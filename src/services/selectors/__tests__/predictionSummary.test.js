import { summarizePredictions } from '../predictionSummary';

const mkPrediction = ({
  id = 'p1',
  createdAt = '2026-05-01T10:00:00Z',
  low = 1340,
  high = 1420,
  resolved = true,
  actualTestId = 'test-3',
  scoreInRange = true,
  // accuracy.actualScore/actualScale (2026-06+): the validation-time score
  // the verdict was computed against. Omit for legacy-shaped records.
  validatedScore,
  validatedScale = 'composite',
} = {}) => ({
  id,
  createdAt,
  createdAfterTestId: 'test-2',
  predictions: { expectedScoreRange: { low, high } },
  resolved,
  actualTestId,
  accuracy: resolved
    ? {
        scoreInRange,
        ...(validatedScore !== undefined
          ? { actualScore: validatedScore, actualScale: validatedScale }
          : {}),
      }
    : null,
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

  it('returns the latest prediction with actualScore (legacy record: verdict suppressed)', () => {
    const r = summarizePredictions(log, results);
    expect(r).not.toBeNull();
    expect(r.latest.low).toBe(1340);
    expect(r.latest.high).toBe(1420);
    expect(r.latest.actualScore).toBe(1395);
    // Legacy record (no persisted validation-time score): the re-derived
    // display score may not be the one the verdict judged, so no verdict.
    expect(r.latest.scoreInRange).toBeNull();
  });

  it('legacy entries are excluded from hit history (their verdicts are untrusted)', () => {
    const r = summarizePredictions(log, results);
    expect(r.hits).toBe(0);
    expect(r.total).toBe(0);
    expect(r.hitRate).toBe(0);
  });

  it('returns null actualScore when test result is missing', () => {
    const r = summarizePredictions(log, {});
    expect(r.latest.actualScore).toBeNull();
  });
});

describe('summarizePredictions — multi-entry history (new-format records)', () => {
  const log = [
    mkPrediction({ id: 'p1', createdAt: '2026-04-01T10:00:00Z', scoreInRange: true,  actualTestId: 't1', validatedScore: 1300 }),
    mkPrediction({ id: 'p2', createdAt: '2026-04-15T10:00:00Z', scoreInRange: false, actualTestId: 't2', validatedScore: 1500 }),
    mkPrediction({ id: 'p3', createdAt: '2026-05-01T10:00:00Z', scoreInRange: true,  actualTestId: 't3', validatedScore: 1395 }),
    mkPrediction({ id: 'p4', createdAt: '2026-05-09T10:00:00Z', scoreInRange: true,  actualTestId: 't4', low: 1380, high: 1480, validatedScore: 1410 }),
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
    expect(r.latest.scoreInRange).toBe(true); // new-format record — verdict trusted
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
      mkPrediction({ id: 'a', createdAt: 'not-a-date', scoreInRange: true,  actualTestId: 'a', validatedScore: 1200 }),
      mkPrediction({ id: 'b', createdAt: 'also-bad',   scoreInRange: false, actualTestId: 'b', validatedScore: 900 }),
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

describe('summarizePredictions — validation-time score vs re-derived score', () => {
  it('REGRESSION: displays the validated score, not the re-derived current one', () => {
    // The live bug: verdict computed against composite 1060 (outside band),
    // but the card re-derived the current attempt's section-scale 530 and
    // printed it next to that verdict. Number and verdict must describe the
    // same value.
    const log = [mkPrediction({
      low: 490, high: 610, scoreInRange: false,
      actualTestId: 't9', validatedScore: 1060,
    })];
    const results = mkResults('t9', 530);
    const r = summarizePredictions(log, results);
    expect(r.latest.actualScore).toBe(1060);
    expect(r.latest.scoreInRange).toBe(false);
  });

  it('legacy record: falls back to re-derived score AND suppresses the verdict', () => {
    // The owner-account case: legacy false verdict (cross-scale corrupt) +
    // re-derived 530 inside the printed band. Verdict must not render.
    const log = [mkPrediction({
      low: 490, high: 610, scoreInRange: false, actualTestId: 't9',
    })];
    const results = mkResults('t9', 530);
    const r = summarizePredictions(log, results);
    expect(r.latest.actualScore).toBe(530);
    expect(r.latest.scoreInRange).toBeNull();
  });

  it('new record with couldn\'t-compare verdict stays null, never false', () => {
    const log = [mkPrediction({
      scoreInRange: null, validatedScore: 700, validatedScale: 'section',
      actualTestId: 't9',
    })];
    const r = summarizePredictions(log, mkResults('t9', 530));
    expect(r.latest.actualScore).toBe(700);
    expect(r.latest.scoreInRange).toBeNull();
  });

  it('persisted score wins even when the test result row is gone entirely', () => {
    const log = [mkPrediction({ validatedScore: 1240, scoreInRange: true, actualTestId: 'gone' })];
    const r = summarizePredictions(log, {});
    expect(r.latest.actualScore).toBe(1240);
    expect(r.latest.scoreInRange).toBe(true);
  });

  it('hit history counts only decided verdicts — nulls are not misses', () => {
    const log = [
      mkPrediction({ id: 'a', createdAt: '2026-05-01T10:00:00Z', scoreInRange: true,  validatedScore: 1200 }),
      mkPrediction({ id: 'b', createdAt: '2026-05-02T10:00:00Z', scoreInRange: null,  validatedScore: 700, validatedScale: 'section' }),
      mkPrediction({ id: 'c', createdAt: '2026-05-03T10:00:00Z', scoreInRange: false, validatedScore: 900 }),
    ];
    const r = summarizePredictions(log, {});
    expect(r.hits).toBe(1);
    expect(r.total).toBe(2); // the null-verdict entry is excluded
    expect(r.hitRate).toBe(0.5);
  });

  it('REGRESSION: legacy boolean verdicts never reach the stats line', () => {
    // The owner-account self-contradiction: headline suppresses the legacy
    // cross-scale-corrupt verdict, so the stats line must not count that
    // same verdict as "0 of 1 correct (0%)" one row below.
    const log = [mkPrediction({
      low: 490, high: 610, scoreInRange: false, actualTestId: 't9',
    })];
    const r = summarizePredictions(log, mkResults('t9', 530));
    expect(r.latest.scoreInRange).toBeNull();
    expect(r.total).toBe(0); // card hides the stats line entirely
    expect(r.hits).toBe(0);
  });

  it('display fallback skips blank attempts (never "You scored 400" off an abandoned submit)', () => {
    const log = [mkPrediction({ actualTestId: 't9', scoreInRange: false })]; // legacy record
    const results = {
      t9: {
        attempts: [
          { scaledScore: 1080, rawScore: 60, isMultiSection: true },
          // newer blank submit at the IRT floor — must not become the display score
          { scaledScore: 400, rawScore: null, isMultiSection: true },
        ],
        bestScaledScore: 1080,
      },
    };
    const r = summarizePredictions(log, results);
    expect(r.latest.actualScore).toBe(1080);
    expect(r.latest.scoreInRange).toBeNull();
  });

  it('all-null history yields total 0 (card hides the stats line)', () => {
    const log = [
      mkPrediction({ id: 'a', scoreInRange: null, validatedScore: 700, validatedScale: 'section' }),
    ];
    const r = summarizePredictions(log, {});
    expect(r.total).toBe(0);
    expect(r.hits).toBe(0);
    expect(r.hitRate).toBe(0);
    expect(r.latest).not.toBeNull();
  });

  it('REGRESSION: display fallback picks the NEWEST non-blank attempt by completedAt, order-independent', () => {
    // Hydrated rows are newest-FIRST (trimAttempts sorts desc); the old
    // tail-first scan read the OLDEST attempt and printed "You scored 910"
    // when the student's latest attempt scored 1080.
    const log = [mkPrediction({ actualTestId: 't9' })]; // legacy record -> display fallback path
    const newest = { scaledScore: 1080, rawScore: 60, completedAt: '2026-05-09T10:00:00Z' };
    const oldest = { scaledScore: 910, rawScore: 40, completedAt: '2026-04-01T10:00:00Z' };

    // Newest-first (hydrated) order.
    const hydrated = { t9: { attempts: [newest, oldest], bestScaledScore: 1080 } };
    expect(summarizePredictions(log, hydrated).latest.actualScore).toBe(1080);

    // Newest-last (in-session optimistic append) order.
    const optimistic = { t9: { attempts: [oldest, newest], bestScaledScore: 1080 } };
    expect(summarizePredictions(log, optimistic).latest.actualScore).toBe(1080);
  });
});
