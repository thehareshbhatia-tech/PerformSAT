import { composeCustomPool } from '../customDrillPool';

// Fixture: 10 candidates across the three difficulties (+ one untagged → medium)
// and the three pool statuses (unseen / missed / seen-correct).
//
//   id  difficulty        history
//   e1  easy              missed  (c:false)
//   e2  easy              seen    (c:true)
//   e3  easy              unseen
//   m1  medium            missed
//   m2  medium            unseen
//   h1  hard              seen
//   h2  hard              missed
//   h3  hard              unseen
//   h4  hard              seen
//   x1  (untagged→medium) unseen
const QIDS = ['e1', 'e2', 'e3', 'm1', 'm2', 'h1', 'h2', 'h3', 'h4', 'x1'];
const DIFFICULTY_BY_ID = {
  e1: 'easy', e2: 'easy', e3: 'easy',
  m1: 'medium', m2: 'medium',
  h1: 'hard', h2: 'hard', h3: 'hard', h4: 'hard',
  // x1 deliberately omitted → treated as medium
};
const BANK_PRACTICE = {
  e1: { c: false, n: 1 }, e2: { c: true, n: 1 },
  m1: { c: false, n: 2 },
  h1: { c: true, n: 1 }, h2: { c: false, n: 1 }, h4: { c: true, n: 3 },
  // e3, m2, h3, x1 have no record → unseen
};

const base = (over = {}) => composeCustomPool({
  qids: QIDS, difficultyById: DIFFICULTY_BY_ID, bankPractice: BANK_PRACTICE, ...over,
});

describe('composeCustomPool — no filters (all / all)', () => {
  it('returns every candidate in input order', () => {
    const { ids } = base({ difficulty: 'all', poolFilter: 'all' });
    expect(ids).toEqual(QIDS);
  });

  it('counts difficulty buckets with untagged folded into medium', () => {
    const { counts } = base();
    // easy: e1,e2,e3=3 · medium: m1,m2,x1=3 · hard: h1..h4=4
    expect(counts.byDifficulty).toEqual({ all: 10, easy: 3, medium: 3, hard: 4 });
  });

  it('counts pool buckets: unseen=4, missed=3', () => {
    const { counts } = base();
    // unseen: e3,m2,h3,x1=4 · missed: e1,m1,h2=3 · (seen-correct e2,h1,h4 not surfaced)
    expect(counts.byPool).toEqual({ all: 10, unseen: 4, missed: 3 });
  });
});

describe('composeCustomPool — difficulty filter alone', () => {
  it('filters ids to the chosen difficulty', () => {
    const { ids } = base({ difficulty: 'hard' });
    expect(ids).toEqual(['h1', 'h2', 'h3', 'h4']);
  });

  it('byDifficulty is unchanged by the difficulty selection (pool="all")', () => {
    const { counts } = base({ difficulty: 'hard' });
    expect(counts.byDifficulty).toEqual({ all: 10, easy: 3, medium: 3, hard: 4 });
  });

  it('byPool is cross-computed against the chosen difficulty only', () => {
    const { counts } = base({ difficulty: 'hard' });
    // among hard {h1 seen, h2 missed, h3 unseen, h4 seen}
    expect(counts.byPool).toEqual({ all: 4, unseen: 1, missed: 1 });
  });

  it('folds untagged questions into the medium filter', () => {
    const { ids } = base({ difficulty: 'medium' });
    expect(ids).toEqual(['m1', 'm2', 'x1']);
  });
});

describe('composeCustomPool — pool filter alone', () => {
  it('unseen keeps only questions with no history', () => {
    const { ids } = base({ poolFilter: 'unseen' });
    expect(ids).toEqual(['e3', 'm2', 'h3', 'x1']);
  });

  it('missed keeps only questions whose last attempt was wrong', () => {
    const { ids } = base({ poolFilter: 'missed' });
    expect(ids).toEqual(['e1', 'm1', 'h2']);
  });

  it('byDifficulty is cross-computed against the chosen pool only', () => {
    const { counts } = base({ poolFilter: 'missed' });
    // among missed {e1 easy, m1 medium, h2 hard}
    expect(counts.byDifficulty).toEqual({ all: 3, easy: 1, medium: 1, hard: 1 });
  });

  it('byPool is unchanged by the pool selection (difficulty="all")', () => {
    const { counts } = base({ poolFilter: 'missed' });
    expect(counts.byPool).toEqual({ all: 10, unseen: 4, missed: 3 });
  });
});

describe('composeCustomPool — combined filters', () => {
  it('applies difficulty AND pool to ids', () => {
    const { ids } = base({ difficulty: 'hard', poolFilter: 'missed' });
    expect(ids).toEqual(['h2']);
  });

  it('cross-computes each count row against the OTHER row selection', () => {
    const { counts } = base({ difficulty: 'hard', poolFilter: 'missed' });
    // byDifficulty after pool=missed: {e1 easy, m1 medium, h2 hard}
    expect(counts.byDifficulty).toEqual({ all: 3, easy: 1, medium: 1, hard: 1 });
    // byPool after difficulty=hard: {h1 seen, h2 missed, h3 unseen, h4 seen}
    expect(counts.byPool).toEqual({ all: 4, unseen: 1, missed: 1 });
  });

  it('keeps the invariant byDifficulty[difficulty] === byPool[poolFilter] === ids.length', () => {
    const { ids, counts } = base({ difficulty: 'easy', poolFilter: 'unseen' });
    expect(ids).toEqual(['e3']);
    expect(counts.byDifficulty.easy).toBe(1);
    expect(counts.byPool.unseen).toBe(1);
    expect(ids.length).toBe(1);
  });
});

describe('composeCustomPool — difficulty lookup', () => {
  it('treats a missing difficultyById entry as medium', () => {
    const r = composeCustomPool({
      qids: ['x1'], difficultyById: {}, bankPractice: {}, difficulty: 'medium', poolFilter: 'all',
    });
    expect(r.ids).toEqual(['x1']);
    expect(r.counts.byDifficulty).toEqual({ all: 1, easy: 0, medium: 1, hard: 0 });
  });

  it('treats an unrecognized difficulty value as medium', () => {
    const r = composeCustomPool({
      qids: ['q'], difficultyById: { q: 'insane' }, bankPractice: {}, difficulty: 'hard',
    });
    expect(r.ids).toEqual([]);
    expect(r.counts.byDifficulty.medium).toBe(1);
  });

  it('accepts a Map for difficultyById, including numeric ids', () => {
    const map = new Map([[1, 'easy'], [2, 'hard']]);
    const r = composeCustomPool({
      qids: [1, 2, 3], difficultyById: map, bankPractice: {}, difficulty: 'hard',
    });
    expect(r.ids).toEqual([2]);
    // id 3 is untagged → medium
    expect(r.counts.byDifficulty).toEqual({ all: 3, easy: 1, medium: 1, hard: 1 });
  });
});

describe('composeCustomPool — empty & null-safe inputs', () => {
  it('returns empty pool and zero counts for empty qids', () => {
    expect(composeCustomPool({ qids: [], difficultyById: {}, bankPractice: {} })).toEqual({
      ids: [],
      counts: { byDifficulty: { all: 0, easy: 0, medium: 0, hard: 0 }, byPool: { all: 0, unseen: 0, missed: 0 } },
    });
  });

  it('tolerates a call with no argument at all', () => {
    const r = composeCustomPool();
    expect(r.ids).toEqual([]);
    expect(r.counts.byPool.all).toBe(0);
  });

  it('tolerates null qids / difficultyById / bankPractice', () => {
    const r = composeCustomPool({ qids: null, difficultyById: null, bankPractice: null });
    expect(r.ids).toEqual([]);
    expect(r.counts.byDifficulty.all).toBe(0);
  });

  it('treats every question as unseen when bankPractice is absent', () => {
    const r = composeCustomPool({ qids: ['a', 'b'], difficultyById: { a: 'easy', b: 'hard' }, poolFilter: 'unseen' });
    expect(r.ids).toEqual(['a', 'b']);
    expect(r.counts.byPool).toEqual({ all: 2, unseen: 2, missed: 0 });
  });
});
