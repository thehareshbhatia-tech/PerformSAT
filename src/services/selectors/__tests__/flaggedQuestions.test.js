import {
  flagKeyFor,
  snippetOf,
  buildFlagEntry,
  buildTestFlagEntries,
  flaggedList,
  flaggedCount,
  groupFlaggedBySection,
  isFlagged,
  toDrillSeeds,
  SNIPPET_MAX,
} from '../flaggedQuestions';

describe('flagKeyFor', () => {
  it('keys bank/drill items on questionId alone (globally unique ids)', () => {
    expect(flagKeyFor({ questionId: 'bank-ps-026' })).toBe('q_bank-ps-026');
  });

  it('keys test items on testId + moduleIndex + questionId (ids reset per module)', () => {
    expect(flagKeyFor({ questionId: 5, testId: 'practice-test-5', moduleIndex: 2 }))
      .toBe('t_practice-test-5_2_5');
  });

  it('disambiguates the same test question id across modules', () => {
    const m1 = flagKeyFor({ questionId: 1, testId: 't1', moduleIndex: 0 });
    const m2 = flagKeyFor({ questionId: 1, testId: 't1', moduleIndex: 1 });
    expect(m1).not.toBe(m2);
  });

  it('sanitizes characters illegal in a Firestore map key', () => {
    const key = flagKeyFor({ questionId: 'a.b/c[d]' });
    expect(key).not.toMatch(/[.$/[\]#*~]/);
  });

  it('returns null without a questionId', () => {
    expect(flagKeyFor({})).toBeNull();
    expect(flagKeyFor(null)).toBeNull();
  });
});

describe('snippetOf', () => {
  it('collapses whitespace and trims', () => {
    expect(snippetOf('  hello   world \n ')).toBe('hello world');
  });

  it('caps long stems with an ellipsis', () => {
    const long = 'x'.repeat(SNIPPET_MAX + 40);
    const out = snippetOf(long);
    expect(out.endsWith('…')).toBe(true);
    expect(out.length).toBeLessThanOrEqual(SNIPPET_MAX + 1);
  });

  it('returns null for empty / non-string input', () => {
    expect(snippetOf('')).toBeNull();
    expect(snippetOf(null)).toBeNull();
    expect(snippetOf(42)).toBeNull();
  });
});

describe('buildFlagEntry', () => {
  it('normalizes section, fills flaggedAt, and computes the key', () => {
    const { key, entry } = buildFlagEntry(
      { questionId: 'bank-alg-001', section: 'reading-writing', source: 'practice-bank', snippet: 'Solve for x' },
      1000,
    );
    expect(key).toBe('q_bank-alg-001');
    expect(entry.section).toBe('rw');
    expect(entry.source).toBe('practice-bank');
    expect(entry.snippet).toBe('Solve for x');
    expect(entry.flaggedAt).toBe(new Date(1000).toISOString());
  });

  it('defaults an unknown section to math and drops empty missedPatterns', () => {
    const { entry } = buildFlagEntry({ questionId: 'q1', missedPatterns: [] });
    expect(entry.section).toBe('math');
    expect(entry.missedPatterns).toBeNull();
  });

  it('keeps missedPatterns (capped) for exact-pattern routing', () => {
    const { entry } = buildFlagEntry({
      questionId: 'q1',
      missedPatterns: ['vertex-form', 'slope-from-two-points', null],
    });
    expect(entry.missedPatterns).toEqual(['vertex-form', 'slope-from-two-points']);
  });
});

describe('buildTestFlagEntries — de-dup + context', () => {
  const refs = [
    { id: 3, section: 'math', moduleIndex: 0, questionIndex: 2, skills: ['slope-intercept-form'], snippet: 'Q3' },
    { id: 3, section: 'math', moduleIndex: 1, questionIndex: 2, skills: ['linear-systems'], snippet: 'Q3 M2' },
    // duplicate of the first ref (same test + module + id) — must collapse
    { id: 3, section: 'math', moduleIndex: 0, questionIndex: 2, skills: ['slope-intercept-form'], snippet: 'Q3 again' },
  ];

  it('de-dups by test+module+id and does NOT create duplicate keys', () => {
    const map = buildTestFlagEntries(refs, { testId: 'practice-test-4', testLabel: 'Practice Test 4' });
    expect(Object.keys(map)).toHaveLength(2);
    expect(map['t_practice-test-4_0_3']).toBeDefined();
    expect(map['t_practice-test-4_1_3']).toBeDefined();
  });

  it('stamps test source + label + first skill', () => {
    const map = buildTestFlagEntries(refs, { testId: 'practice-test-4', testLabel: 'Practice Test 4' });
    const e = map['t_practice-test-4_0_3'];
    expect(e.source).toBe('test::practice-test-4');
    expect(e.testLabel).toBe('Practice Test 4');
    expect(e.skillId).toBe('slope-intercept-form');
    expect(e.testId).toBe('practice-test-4');
  });

  it('returns an empty map for non-array input', () => {
    expect(buildTestFlagEntries(null)).toEqual({});
  });
});

describe('flaggedList / flaggedCount', () => {
  const map = {
    a: { questionId: 'a', flaggedAt: '2026-01-01T00:00:00.000Z', section: 'math' },
    b: { questionId: 'b', flaggedAt: '2026-03-01T00:00:00.000Z', section: 'rw' },
    c: { questionId: 'c', flaggedAt: '2026-02-01T00:00:00.000Z', section: 'math' },
  };

  it('returns entries newest-first with the key attached', () => {
    const list = flaggedList(map);
    expect(list.map((f) => f.key)).toEqual(['b', 'c', 'a']);
  });

  it('counts entries and tolerates empty/undefined', () => {
    expect(flaggedCount(map)).toBe(3);
    expect(flaggedCount(null)).toBe(0);
    expect(flaggedList(undefined)).toEqual([]);
  });
});

describe('groupFlaggedBySection', () => {
  it('partitions math vs rw', () => {
    const map = {
      a: { questionId: 'a', section: 'math', flaggedAt: '2026-01-01T00:00:00.000Z' },
      b: { questionId: 'b', section: 'rw', flaggedAt: '2026-01-02T00:00:00.000Z' },
      c: { questionId: 'c', section: 'math', flaggedAt: '2026-01-03T00:00:00.000Z' },
    };
    const { math, rw } = groupFlaggedBySection(map);
    expect(math.map((f) => f.key)).toEqual(['c', 'a']);
    expect(rw.map((f) => f.key)).toEqual(['b']);
  });
});

describe('isFlagged', () => {
  const map = { q_bank1: { questionId: 'bank1', section: 'math' } };
  it('matches a built entry', () => {
    expect(isFlagged(map, { questionId: 'bank1' })).toBe(true);
    expect(isFlagged(map, { questionId: 'bank2' })).toBe(false);
  });
  it('matches a raw key', () => {
    expect(isFlagged(map, 'q_bank1')).toBe(true);
  });
  it('is false for empty store', () => {
    expect(isFlagged(null, { questionId: 'bank1' })).toBe(false);
  });
});

describe('toDrillSeeds', () => {
  it('groups by skill and unions missedPatterns (Tier-1 routing seeds)', () => {
    const flags = [
      { questionId: 'q1', skillId: 'scatterplots', domain: 'data', missedPatterns: ['line-of-best-fit'] },
      { questionId: 'q2', skillId: 'scatterplots', domain: 'data', missedPatterns: ['scatterplot-prediction'] },
      { questionId: 'q3', skillId: 'vertex-form', missedPatterns: ['vertex-form-from-two-conditions'] },
    ];
    const seeds = toDrillSeeds(flags);
    expect(seeds).toHaveLength(2);
    const scatter = seeds.find((s) => s.skillId === 'scatterplots');
    expect(scatter.missedPatterns.sort()).toEqual(['line-of-best-fit', 'scatterplot-prediction']);
    expect(scatter.questionIds).toEqual(['q1', 'q2']);
    expect(scatter.domain).toBe('data');
  });

  it('buckets skill-less flags by questionId and omits empty missedPatterns', () => {
    const seeds = toDrillSeeds([{ questionId: 'q9' }]);
    expect(seeds).toHaveLength(1);
    expect(seeds[0].skillId).toBeNull();
    expect(seeds[0].missedPatterns).toBeUndefined();
    expect(seeds[0].questionIds).toEqual(['q9']);
  });

  it('tolerates empty input', () => {
    expect(toDrillSeeds(null)).toEqual([]);
  });
});
