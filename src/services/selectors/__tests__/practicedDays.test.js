import { getPracticedDayKeys } from '../practicedDays';

describe('getPracticedDayKeys — empty / invalid input', () => {
  it('returns an empty Set for no input', () => {
    const r = getPracticedDayKeys();
    expect(r).toBeInstanceOf(Set);
    expect(r.size).toBe(0);
  });

  it('returns an empty Set for empty maps', () => {
    expect(getPracticedDayKeys({ practiceProgress: {}, practiceTestResults: {} }).size).toBe(0);
  });

  it('skips entries without a parseable timestamp', () => {
    const r = getPracticedDayKeys({
      practiceProgress: {
        a: {},                                // no lastAttemptAt
        b: { lastAttemptAt: null },
        c: { lastAttemptAt: 'not-a-date' },
      },
    });
    expect(r.size).toBe(0);
  });
});

describe('getPracticedDayKeys — practiceProgress source', () => {
  it('produces YYYY-MM-DD keys', () => {
    const r = getPracticedDayKeys({
      practiceProgress: {
        a: { lastAttemptAt: new Date('2026-04-15T10:00:00') },
      },
    });
    expect([...r]).toEqual(['2026-04-15']);
  });

  it('dedupes multiple entries on the same day', () => {
    const day = new Date('2026-04-15T10:00:00');
    const r = getPracticedDayKeys({
      practiceProgress: {
        a: { lastAttemptAt: day },
        b: { lastAttemptAt: day },
        c: { lastAttemptAt: day },
      },
    });
    expect(r.size).toBe(1);
  });

  it('keeps distinct days', () => {
    const r = getPracticedDayKeys({
      practiceProgress: {
        a: { lastAttemptAt: new Date('2026-04-15T10:00:00') },
        b: { lastAttemptAt: new Date('2026-04-16T10:00:00') },
        c: { lastAttemptAt: new Date('2026-05-01T10:00:00') },
      },
    });
    expect(r.size).toBe(3);
  });
});

describe('getPracticedDayKeys — practiceTestResults source', () => {
  it('counts each attempt as a separate practice day', () => {
    const r = getPracticedDayKeys({
      practiceTestResults: {
        't1': {
          attempts: [
            { completedAt: new Date('2026-04-01T09:00:00') },
            { completedAt: new Date('2026-04-15T09:00:00') },
          ],
        },
      },
    });
    expect(r.size).toBe(2);
    expect(r.has('2026-04-01')).toBe(true);
    expect(r.has('2026-04-15')).toBe(true);
  });

  it('falls back to lastAttemptAt when attempts array is empty', () => {
    const r = getPracticedDayKeys({
      practiceTestResults: {
        't1': {
          attempts: [],
          lastAttemptAt: new Date('2026-04-01T09:00:00'),
        },
      },
    });
    expect(r.has('2026-04-01')).toBe(true);
  });
});

describe('getPracticedDayKeys — combined sources', () => {
  it('merges practiceProgress + practiceTestResults into one Set', () => {
    const r = getPracticedDayKeys({
      practiceProgress: {
        a: { lastAttemptAt: new Date('2026-04-10T10:00:00') },
      },
      practiceTestResults: {
        t: { attempts: [{ completedAt: new Date('2026-04-12T09:00:00') }] },
      },
    });
    expect(r.size).toBe(2);
    expect(r.has('2026-04-10')).toBe(true);
    expect(r.has('2026-04-12')).toBe(true);
  });

  it('dedupes across sources when same day appears in both', () => {
    const sameDay = new Date('2026-04-10T10:00:00');
    const r = getPracticedDayKeys({
      practiceProgress: {
        a: { lastAttemptAt: sameDay },
      },
      practiceTestResults: {
        t: { attempts: [{ completedAt: sameDay }] },
      },
    });
    expect(r.size).toBe(1);
  });
});

describe('getPracticedDayKeys — timestamp shape support', () => {
  it('accepts Firestore-shape { seconds }', () => {
    const seconds = Math.floor(new Date('2026-04-15T10:00:00').getTime() / 1000);
    const r = getPracticedDayKeys({
      practiceProgress: { a: { lastAttemptAt: { seconds, nanoseconds: 0 } } },
    });
    expect(r.has('2026-04-15')).toBe(true);
  });

  it('accepts ISO string', () => {
    const r = getPracticedDayKeys({
      practiceProgress: { a: { lastAttemptAt: '2026-04-15T10:00:00.000Z' } },
    });
    // ISO is parsed as UTC; the local-date key may shift in some timezones,
    // but the function should at least produce a key (no crash).
    expect(r.size).toBe(1);
  });

  it('accepts numeric millisecond', () => {
    const ms = new Date('2026-04-15T10:00:00').getTime();
    const r = getPracticedDayKeys({
      practiceProgress: { a: { lastAttemptAt: ms } },
    });
    expect(r.has('2026-04-15')).toBe(true);
  });
});

describe('getPracticedDayKeys — drillDays source (drill-completion log)', () => {
  it('includes valid YYYY-MM-DD keys from drillDays', () => {
    const r = getPracticedDayKeys({ drillDays: ['2026-06-08', '2026-06-09'] });
    expect(r.has('2026-06-08')).toBe(true);
    expect(r.has('2026-06-09')).toBe(true);
    expect(r.size).toBe(2);
  });

  it('ignores malformed drillDays entries', () => {
    const r = getPracticedDayKeys({
      drillDays: ['2026-06-08', 'not-a-day', null, 42, '2026-6-8', ''],
    });
    expect([...r]).toEqual(['2026-06-08']);
  });

  it('dedupes drillDays against the other sources', () => {
    const r = getPracticedDayKeys({
      practiceProgress: { a: { lastAttemptAt: new Date('2026-06-08T10:00:00') } },
      drillDays: ['2026-06-08'],
    });
    expect(r.size).toBe(1);
  });

  it('tolerates a non-array drillDays', () => {
    expect(getPracticedDayKeys({ drillDays: 'nope' }).size).toBe(0);
    expect(getPracticedDayKeys({ drillDays: null }).size).toBe(0);
  });
});
