import { buildBankRecommendations, assembleSmartMix } from '../bankRecommendations';

const NOW = Date.parse('2026-07-02T12:00:00Z');

// ── Fixture builders ────────────────────────────────────────────────────────
const makeType = (slug, qids) => ({ slug, label: slug, count: qids.length, qids });
const makeSkill = (slug, { patterns = [], qids = [] } = {}) => ({
  slug, label: slug, count: qids.length, total: qids.length, patterns, qids,
});
const makeCat = (domain, cbSkills, qids) => ({
  domain, label: domain, total: (qids || []).length, cbSkills, qids: qids || [],
});

// A practice record `hoursAgo` before NOW, correct flag `c`.
const rec = (c, hoursAgo) => ({ c, n: 1, t: new Date(NOW - hoursAgo * 3600 * 1000).toISOString() });
const miss = (hoursAgo) => rec(false, hoursAgo);
const hit = (hoursAgo) => rec(true, hoursAgo);

const kinds = (recs) => recs.map(r => r.kind);
const byKind = (recs, kind) => recs.find(r => r.kind === kind);

// ── fix-misses ──────────────────────────────────────────────────────────────
describe('buildBankRecommendations — fix-misses', () => {
  it('does not fire below the 4-miss threshold', () => {
    const cats = [makeCat('algebra', [], ['m0', 'm1', 'm2'])];
    const bp = { m0: miss(30), m1: miss(30), m2: miss(30) };
    const recs = buildBankRecommendations({ categories: cats, bankPractice: bp, now: NOW });
    expect(byKind(recs, 'fix-misses')).toBeUndefined();
  });

  it('fires at exactly 4 misses', () => {
    const cats = [makeCat('algebra', [], ['m0', 'm1', 'm2', 'm3'])];
    const bp = { m0: miss(30), m1: miss(30), m2: miss(30), m3: miss(30) };
    const r = byKind(buildBankRecommendations({ categories: cats, bankPractice: bp, now: NOW }), 'fix-misses');
    expect(r).toBeDefined();
    expect(r.title).toBe('Fix your misses');
    expect(r.reason).toBe('4 questions you answered wrong in practice');
    expect(r.count).toBe(4);
  });

  it('ignores correct answers and other sections', () => {
    const cats = [makeCat('algebra', [], ['m0', 'm1', 'm2', 'm3', 'ok'])];
    const bp = { m0: miss(30), m1: miss(30), m2: miss(30), m3: miss(30), ok: hit(30), stray: miss(30) };
    const r = byKind(buildBankRecommendations({ categories: cats, bankPractice: bp, now: NOW }), 'fix-misses');
    expect(r.qids).not.toContain('ok');
    expect(r.qids).not.toContain('stray');
    expect(r.count).toBe(4);
  });

  it('prefers aged (>20h) misses and drops younger ones when >=4 aged exist', () => {
    const cats = [makeCat('algebra', [], ['a0', 'a1', 'a2', 'a3', 'y0', 'y1'])];
    const bp = {
      a0: miss(40), a1: miss(35), a2: miss(30), a3: miss(25),
      y0: miss(2), y1: miss(1),
    };
    const r = byKind(buildBankRecommendations({ categories: cats, bankPractice: bp, now: NOW }), 'fix-misses');
    // pool = the 4 aged only; younger misses excluded
    expect(r.reason).toBe('4 questions you answered wrong in practice');
    expect(r.qids.sort()).toEqual(['a0', 'a1', 'a2', 'a3']);
    expect(r.qids).not.toContain('y0');
    expect(r.qids).not.toContain('y1');
  });

  it('falls back to younger misses when fewer than 4 have aged', () => {
    const cats = [makeCat('algebra', [], ['a0', 'a1', 'y0', 'y1'])];
    const bp = { a0: miss(40), a1: miss(30), y0: miss(2), y1: miss(1) };
    const r = byKind(buildBankRecommendations({ categories: cats, bankPractice: bp, now: NOW }), 'fix-misses');
    expect(r.reason).toBe('4 questions you answered wrong in practice');
    expect(r.qids.sort()).toEqual(['a0', 'a1', 'y0', 'y1']);
  });

  it('sorts served qids most-recent-first', () => {
    const cats = [makeCat('algebra', [], ['old', 'mid', 'new', 'newest'])];
    const bp = { old: miss(40), mid: miss(30), new: miss(25), newest: miss(21) };
    const r = byKind(buildBankRecommendations({ categories: cats, bankPractice: bp, now: NOW }), 'fix-misses');
    expect(r.qids).toEqual(['newest', 'new', 'mid', 'old']);
  });

  it('caps served qids at 10 but reason reflects the full found pool', () => {
    const ids = Array.from({ length: 14 }, (_, i) => `m${i}`);
    const cats = [makeCat('algebra', [], ids)];
    const bp = {};
    ids.forEach((id, i) => { bp[id] = miss(40 + i); });
    const r = byKind(buildBankRecommendations({ categories: cats, bankPractice: bp, now: NOW }), 'fix-misses');
    expect(r.qids).toHaveLength(10);
    expect(r.count).toBe(10);
    expect(r.reason).toBe('14 questions you answered wrong in practice');
  });
});

// ── test-weakness ───────────────────────────────────────────────────────────
describe('buildBankRecommendations — test-weakness', () => {
  const patQids = ['p0', 'p1', 'p2', 'p3', 'p4', 'p5']; // 6 → viable pattern pool
  const catWithPattern = (weaknessExtras = {}) => makeCat(
    'algebra',
    [makeSkill('linear-skill', { patterns: [makeType('slope-pattern', patQids)], qids: patQids })],
    patQids,
  );

  it('builds a pattern-level pool from missedPatterns and reads accuracy', () => {
    const weaknesses = [{ skillId: 'linear-skill', skill: 'Slope-intercept form', accuracy: 42, missedPatterns: ['slope-pattern'], section: 'math' }];
    const r = byKind(buildBankRecommendations({ categories: [catWithPattern()], weaknesses, now: NOW }), 'test-weakness');
    expect(r).toBeDefined();
    expect(r.title).toBe('Slope-intercept form');
    expect(r.reason).toBe('42% on your last test');
    expect(r.qids).toEqual(patQids);
  });

  it('falls back to the cb-skill topic when the pattern pool is thin', () => {
    const skillQids = ['s0', 's1', 's2', 's3', 's4', 's5', 's6'];
    const cats = [makeCat('algebra',
      [makeSkill('topic-skill', { patterns: [makeType('tiny-pattern', ['t0', 't1'])], qids: skillQids })],
      skillQids)];
    const weaknesses = [{ skillId: 'topic-skill', skill: 'Topic Skill', missedPatterns: ['tiny-pattern'], section: 'math' }];
    const r = byKind(buildBankRecommendations({ categories: cats, weaknesses, now: NOW }), 'test-weakness');
    expect(r.qids).toEqual(skillQids);
    expect(r.reason).toBe('Flagged in your last test diagnosis'); // no accuracy
  });

  it('skips a weakness whose pattern and topic pools are both thin', () => {
    const cats = [makeCat('algebra',
      [makeSkill('thin-skill', { patterns: [makeType('thin-pattern', ['t0', 't1'])], qids: ['t0', 't1', 't2'] })],
      ['t0', 't1', 't2'])];
    const weaknesses = [{ skillId: 'thin-skill', missedPatterns: ['thin-pattern'], section: 'math' }];
    expect(byKind(buildBankRecommendations({ categories: cats, weaknesses, now: NOW }), 'test-weakness')).toBeUndefined();
  });

  it('advances to a later weakness when the first is too thin', () => {
    const skillQids = ['s0', 's1', 's2', 's3', 's4', 's5'];
    const cats = [makeCat('algebra', [
      makeSkill('thin-skill', { patterns: [], qids: ['t0'] }),
      makeSkill('good-skill', { patterns: [], qids: skillQids }),
    ], skillQids)];
    const weaknesses = [
      { skillId: 'thin-skill', missedPatterns: [], section: 'math' },
      { skillId: 'good-skill', skill: 'Good Skill', accuracy: 55, missedPatterns: [], section: 'math' },
    ];
    const r = byKind(buildBankRecommendations({ categories: cats, weaknesses, now: NOW }), 'test-weakness');
    expect(r.title).toBe('Good Skill');
    expect(r.qids).toEqual(skillQids);
  });

  it('excludes qids already served by fix-misses', () => {
    const patternQids = ['m0', 'm1', 'w0', 'w1', 'w2', 'w3', 'w4']; // 7 → viable
    const catQids = ['m0', 'm1', 'm2', 'm3', 'w0', 'w1', 'w2', 'w3', 'w4'];
    const cats = [makeCat('algebra',
      [makeSkill('sk', { patterns: [makeType('pat', patternQids)], qids: patternQids })],
      catQids)];
    const bp = { m0: miss(40), m1: miss(35), m2: miss(30), m3: miss(25) };
    const weaknesses = [{ skillId: 'sk', missedPatterns: ['pat'], accuracy: 30, section: 'math' }];
    const recs = buildBankRecommendations({ categories: cats, bankPractice: bp, weaknesses, now: NOW });
    const fix = byKind(recs, 'fix-misses');
    const weak = byKind(recs, 'test-weakness');
    expect(fix).toBeDefined();
    expect(weak.qids).toEqual(['w0', 'w1', 'w2', 'w3', 'w4']);
    expect(weak.qids.some(id => fix.qids.includes(id))).toBe(false);
  });

  it('routes by section: an rw weakness is ignored for math categories', () => {
    const skillQids = ['s0', 's1', 's2', 's3', 's4', 's5'];
    const cats = [makeCat('algebra', [makeSkill('math-skill', { qids: skillQids })], skillQids)];
    const weaknesses = [{ skillId: 'math-skill', missedPatterns: [], section: 'rw' }];
    expect(byKind(buildBankRecommendations({ categories: cats, weaknesses, now: NOW }), 'test-weakness')).toBeUndefined();
  });

  it('matches rw-section weaknesses for rw categories', () => {
    const skillQids = ['s0', 's1', 's2', 's3', 's4', 's5'];
    const cats = [makeCat('craft-and-structure', [makeSkill('rw-skill', { qids: skillQids })], skillQids)];
    const weaknesses = [{ skillId: 'rw-skill', skill: 'Words in Context', missedPatterns: [], section: 'rw' }];
    const r = byKind(buildBankRecommendations({ categories: cats, weaknesses, now: NOW }), 'test-weakness');
    expect(r).toBeDefined();
    expect(r.title).toBe('Words in Context');
  });
});

// ── new-territory ───────────────────────────────────────────────────────────
describe('buildBankRecommendations — new-territory', () => {
  it('picks the largest unseen type and skips small / seen ones', () => {
    const small = makeType('small', ['sm0', 'sm1', 'sm2', 'sm3', 'sm4']);        // count 5 → skipped
    const big = makeType('big', ['b0', 'b1', 'b2', 'b3', 'b4', 'b5', 'b6', 'b7']); // count 8, unseen → winner
    const bigger = makeType('bigger', Array.from({ length: 10 }, (_, i) => `x${i}`)); // count 10 but seen → skipped
    const cats = [makeCat('algebra', [
      makeSkill('sk', { patterns: [small, big, bigger], qids: [] }),
    ], [])];
    const bp = { x0: hit(5) }; // makes 'bigger' seen
    const r = byKind(buildBankRecommendations({ categories: cats, bankPractice: bp, now: NOW }), 'new-territory');
    expect(r).toBeDefined();
    expect(r.title).toBe('big');
    expect(r.reason).toBe('8 questions · you haven\'t tried this type yet');
    expect(r.qids).toEqual(big.qids);
    expect(r.count).toBe(8);
  });

  it('returns no new-territory rec when every large type has been touched', () => {
    const t = makeType('touched', ['a0', 'a1', 'a2', 'a3', 'a4', 'a5']);
    const cats = [makeCat('algebra', [makeSkill('sk', { patterns: [t] })], [])];
    const bp = { a0: hit(5) };
    expect(byKind(buildBankRecommendations({ categories: cats, bankPractice: bp, now: NOW }), 'new-territory')).toBeUndefined();
  });
});

// ── ordering + combined ─────────────────────────────────────────────────────
describe('buildBankRecommendations — ordering', () => {
  it('orders fix-misses, test-weakness, new-territory and one per kind', () => {
    const missIds = ['m0', 'm1', 'm2', 'm3'];
    const weakQids = ['wq0', 'wq1', 'wq2', 'wq3', 'wq4', 'wq5'];
    const newQids = ['n0', 'n1', 'n2', 'n3', 'n4', 'n5', 'n6'];
    const cats = [makeCat('algebra', [
      makeSkill('weak-skill', { qids: weakQids }),
      makeSkill('new-skill', { patterns: [makeType('new-type', newQids)], qids: newQids }),
    ], [...missIds, ...weakQids, ...newQids])];
    const bp = { m0: miss(40), m1: miss(40), m2: miss(40), m3: miss(40) };
    const weaknesses = [{ skillId: 'weak-skill', missedPatterns: [], section: 'math' }];
    const recs = buildBankRecommendations({ categories: cats, bankPractice: bp, weaknesses, now: NOW });
    expect(kinds(recs)).toEqual(['fix-misses', 'test-weakness', 'new-territory']);
    expect(recs.filter(r => r.kind === 'fix-misses')).toHaveLength(1);
  });
});

// ── null-safety ─────────────────────────────────────────────────────────────
describe('buildBankRecommendations — null safety', () => {
  it('returns [] for missing / empty inputs', () => {
    expect(buildBankRecommendations()).toEqual([]);
    expect(buildBankRecommendations({})).toEqual([]);
    expect(buildBankRecommendations({ categories: null })).toEqual([]);
    expect(buildBankRecommendations({ categories: [] })).toEqual([]);
  });

  it('survives null bankPractice / weaknesses / entries', () => {
    const cats = [makeCat('algebra', [makeSkill('sk', { qids: ['a', 'b'] })], ['a', 'b'])];
    expect(buildBankRecommendations({ categories: cats, bankPractice: null, weaknesses: null, now: NOW })).toEqual([]);
    expect(() => buildBankRecommendations({ categories: cats, weaknesses: [null, undefined, {}], now: NOW })).not.toThrow();
  });

  it('defaults now to Date.now() without throwing', () => {
    const cats = [makeCat('algebra', [], ['m0', 'm1', 'm2', 'm3'])];
    const bp = { m0: miss(40), m1: miss(40), m2: miss(40), m3: miss(40) };
    expect(() => buildBankRecommendations({ categories: cats, bankPractice: bp })).not.toThrow();
  });
});

// ── assembleSmartMix ────────────────────────────────────────────────────────
describe('assembleSmartMix', () => {
  const seq = (prefix, n) => Array.from({ length: n }, (_, i) => `${prefix}${i}`);

  it('fills the 40/30/30 proportions with weakness taking the remainder', () => {
    const weakness = seq('w', 20);
    const missed = seq('m', 20);
    const unseen = seq('u', 20);
    const all = seq('a', 40);
    const mix = assembleSmartMix({ size: 20, weaknessQids: weakness, missedQids: missed, unseenQids: unseen, allQids: all });
    expect(mix).toHaveLength(20);
    expect(mix.filter(id => id.startsWith('w'))).toHaveLength(8); // 40%
    expect(mix.filter(id => id.startsWith('m'))).toHaveLength(6); // 30%
    expect(mix.filter(id => id.startsWith('u'))).toHaveLength(6); // 30%
  });

  it('preserves given order within a bucket and dedupes across buckets', () => {
    const mix = assembleSmartMix({
      size: 10,
      weaknessQids: ['x0', 'x1', 'x2', 'x3'],   // want 4
      missedQids: ['x2', 'x3', 'm0', 'm1', 'm2'], // x2/x3 dup → skipped
      unseenQids: ['u0', 'u1', 'u2'],           // want 3
      allQids: [],
    });
    expect(mix.slice(0, 4)).toEqual(['x0', 'x1', 'x2', 'x3']);
    // missed bucket (limit 3) draws m0,m1,m2 after skipping the two dups
    expect(mix).toContain('m0');
    expect(mix).toContain('m1');
    expect(mix).toContain('m2');
    // no id appears twice
    expect(new Set(mix).size).toBe(mix.length);
  });

  it('backfills shortfalls from allQids in order, skipping duplicates', () => {
    const mix = assembleSmartMix({
      size: 10,
      weaknessQids: ['w0'],       // 1 of 4
      missedQids: [],             // 0 of 3
      unseenQids: ['u0'],         // 1 of 3
      allQids: ['w0', 'a0', 'a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'a7', 'a8'],
    });
    expect(mix).toHaveLength(10);
    expect(mix[0]).toBe('w0');
    expect(mix).toContain('u0');
    expect(mix).not.toContain(undefined);
    expect(new Set(mix).size).toBe(10); // w0 not double-counted from allQids
  });

  it('returns fewer than size only when the whole bank is smaller', () => {
    const mix = assembleSmartMix({
      size: 20,
      weaknessQids: ['w0', 'w1'],
      missedQids: ['m0'],
      unseenQids: [],
      allQids: ['w0', 'w1', 'm0', 'a0'],
    });
    expect(mix.sort()).toEqual(['a0', 'm0', 'w0', 'w1']);
  });

  it('never exceeds size', () => {
    const mix = assembleSmartMix({
      size: 5,
      weaknessQids: seq('w', 10),
      missedQids: seq('m', 10),
      unseenQids: seq('u', 10),
      allQids: seq('a', 10),
    });
    expect(mix).toHaveLength(5);
  });

  it('is null-safe on every input', () => {
    expect(assembleSmartMix()).toEqual([]);
    expect(assembleSmartMix({})).toEqual([]);
    expect(assembleSmartMix({ size: null })).toEqual([]);
    expect(assembleSmartMix({ size: 0 })).toEqual([]);
    expect(assembleSmartMix({ size: 5 })).toEqual([]);
    expect(assembleSmartMix({ size: 5, weaknessQids: null, missedQids: null, unseenQids: null, allQids: null })).toEqual([]);
    expect(assembleSmartMix({ size: 3, allQids: ['a0', 'a1', 'a2', 'a3'] })).toEqual(['a0', 'a1', 'a2']);
  });
});
