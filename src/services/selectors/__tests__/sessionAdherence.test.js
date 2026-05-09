import { getSessionAdherence } from '../sessionAdherence';

// ── Helpers ──────────────────────────────────────────────────────────────────

const NOW_FIXED = new Date('2026-05-09T15:00:00');

const ts = (isoOrDaysAgo) => {
  if (typeof isoOrDaysAgo === 'string') return new Date(isoOrDaysAgo);
  // number = days ago from NOW_FIXED at noon
  const d = new Date(NOW_FIXED);
  d.setDate(d.getDate() - isoOrDaysAgo);
  d.setHours(12, 0, 0, 0);
  return d;
};

// ── Empty / invalid input ────────────────────────────────────────────────────

describe('getSessionAdherence — empty input', () => {
  it('returns 0 unique days for null', () => {
    const r = getSessionAdherence(null, { now: NOW_FIXED });
    expect(r.uniqueDays).toBe(0);
    expect(r.totalDays).toBe(7);
    expect(r.label).toBe('0 of last 7 days');
  });

  it('returns 0 for undefined', () => {
    expect(getSessionAdherence(undefined, { now: NOW_FIXED }).uniqueDays).toBe(0);
  });

  it('returns 0 for an empty object', () => {
    expect(getSessionAdherence({}, { now: NOW_FIXED }).uniqueDays).toBe(0);
  });

  it('returns 0 for non-object input', () => {
    expect(getSessionAdherence('nope', { now: NOW_FIXED }).uniqueDays).toBe(0);
    expect(getSessionAdherence(42, { now: NOW_FIXED }).uniqueDays).toBe(0);
  });
});

// ── Counting ─────────────────────────────────────────────────────────────────

describe('getSessionAdherence — counting unique days', () => {
  it('counts distinct calendar days from lastAttemptAt timestamps', () => {
    const progress = {
      a: { lastAttemptAt: ts(0) }, // today
      b: { lastAttemptAt: ts(1) }, // yesterday
      c: { lastAttemptAt: ts(2) }, // 2 days ago
    };
    const r = getSessionAdherence(progress, { now: NOW_FIXED });
    expect(r.uniqueDays).toBe(3);
    expect(r.label).toBe('3 of last 7 days');
  });

  it('dedupes multiple entries on the same calendar day', () => {
    const progress = {
      a: { lastAttemptAt: ts(0) },
      b: { lastAttemptAt: ts(0) },
      c: { lastAttemptAt: ts(0) },
    };
    expect(getSessionAdherence(progress, { now: NOW_FIXED }).uniqueDays).toBe(1);
  });

  it('excludes entries older than the window', () => {
    const progress = {
      recent: { lastAttemptAt: ts(0) },
      ancient: { lastAttemptAt: ts(30) }, // 30 days ago — outside the 7-day window
    };
    expect(getSessionAdherence(progress, { now: NOW_FIXED }).uniqueDays).toBe(1);
  });

  it('respects a custom window length', () => {
    const progress = {
      a: { lastAttemptAt: ts(0) },
      b: { lastAttemptAt: ts(8) },  // 8 days ago — outside default 7, inside 14
    };
    const r7 = getSessionAdherence(progress, { now: NOW_FIXED, days: 7 });
    const r14 = getSessionAdherence(progress, { now: NOW_FIXED, days: 14 });
    expect(r7.uniqueDays).toBe(1);
    expect(r14.uniqueDays).toBe(2);
    expect(r14.label).toBe('2 of last 14 days');
  });

  it('handles maximum: window contains every possible day', () => {
    const progress = {
      d0: { lastAttemptAt: ts(0) },
      d1: { lastAttemptAt: ts(1) },
      d2: { lastAttemptAt: ts(2) },
      d3: { lastAttemptAt: ts(3) },
      d4: { lastAttemptAt: ts(4) },
      d5: { lastAttemptAt: ts(5) },
      d6: { lastAttemptAt: ts(6) },
    };
    const r = getSessionAdherence(progress, { now: NOW_FIXED });
    expect(r.uniqueDays).toBe(7);
    expect(r.label).toBe('7 of last 7 days');
  });
});

// ── Timestamp shape support ──────────────────────────────────────────────────

describe('getSessionAdherence — timestamp shapes', () => {
  it('accepts Date objects', () => {
    const progress = { a: { lastAttemptAt: ts(1) } };
    expect(getSessionAdherence(progress, { now: NOW_FIXED }).uniqueDays).toBe(1);
  });

  it('accepts numeric millisecond timestamps', () => {
    const progress = { a: { lastAttemptAt: ts(1).getTime() } };
    expect(getSessionAdherence(progress, { now: NOW_FIXED }).uniqueDays).toBe(1);
  });

  it('accepts ISO string timestamps', () => {
    const progress = { a: { lastAttemptAt: ts(1).toISOString() } };
    expect(getSessionAdherence(progress, { now: NOW_FIXED }).uniqueDays).toBe(1);
  });

  it('accepts Firestore-shape { seconds, nanoseconds }', () => {
    const seconds = Math.floor(ts(1).getTime() / 1000);
    const progress = { a: { lastAttemptAt: { seconds, nanoseconds: 0 } } };
    expect(getSessionAdherence(progress, { now: NOW_FIXED }).uniqueDays).toBe(1);
  });

  it('accepts Firestore Timestamp-like { toMillis }', () => {
    const millis = ts(1).getTime();
    const progress = { a: { lastAttemptAt: { toMillis: () => millis } } };
    expect(getSessionAdherence(progress, { now: NOW_FIXED }).uniqueDays).toBe(1);
  });

  it('skips entries with missing or unparseable lastAttemptAt', () => {
    const progress = {
      a: { lastAttemptAt: null },
      b: {},
      c: { lastAttemptAt: 'not-a-date' },
      d: { lastAttemptAt: ts(0) }, // valid
    };
    expect(getSessionAdherence(progress, { now: NOW_FIXED }).uniqueDays).toBe(1);
  });
});
