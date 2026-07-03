import { MASTERY_BANDS, masteryForIds, masterySummary } from '../bankMastery';

// Builds ids q0..q{total-1} where the first `practiced` are attempted and the
// first `correct` of those were answered correctly.
const fixture = (total, practiced, correct) => {
  const ids = Array.from({ length: total }, (_, i) => `q${i}`);
  const bankPractice = {};
  for (let i = 0; i < practiced; i++) {
    bankPractice[`q${i}`] = { c: i < correct, n: 1 };
  }
  return { ids, bankPractice };
};

describe('MASTERY_BANDS', () => {
  it('is frozen with the four band slugs', () => {
    expect(MASTERY_BANDS).toEqual({
      UNSEEN: 'unseen', LEARNING: 'learning', STRONG: 'strong', FOCUS: 'focus',
    });
    expect(Object.isFrozen(MASTERY_BANDS)).toBe(true);
  });
});

describe('masteryForIds', () => {
  it('handles empty ids: zero coverage, unseen band', () => {
    expect(masteryForIds([], {})).toEqual({
      total: 0, practiced: 0, correct: 0, accuracy: null, coveragePct: 0, band: 'unseen',
    });
    expect(masteryForIds(null, null).band).toBe('unseen');
  });

  it('returns unseen when nothing in the set was practiced', () => {
    const { ids } = fixture(6, 0, 0);
    const m = masteryForIds(ids, { other: { c: true, n: 1 } });
    expect(m.band).toBe(MASTERY_BANDS.UNSEEN);
    expect(m.coveragePct).toBe(0);
    expect(m.accuracy).toBeNull();
  });

  it('stays learning at 1-2 practiced, even at 0% accuracy', () => {
    const one = fixture(10, 1, 0);
    expect(masteryForIds(one.ids, one.bankPractice).band).toBe(MASTERY_BANDS.LEARNING);
    const two = fixture(10, 2, 0);
    expect(masteryForIds(two.ids, two.bankPractice).band).toBe(MASTERY_BANDS.LEARNING);
  });

  it('enters focus at exactly 3 practiced with low accuracy', () => {
    const { ids, bankPractice } = fixture(10, 3, 1); // 33%
    expect(masteryForIds(ids, bankPractice).band).toBe(MASTERY_BANDS.FOCUS);
  });

  it('splits focus vs learning at the 60% accuracy line', () => {
    const at59 = fixture(20, 17, 10); // 10/17 = 58.8 → rounds to 59
    expect(masteryForIds(at59.ids, at59.bankPractice).accuracy).toBe(59);
    expect(masteryForIds(at59.ids, at59.bankPractice).band).toBe(MASTERY_BANDS.FOCUS);

    const at60 = fixture(20, 5, 3); // exactly 60
    expect(masteryForIds(at60.ids, at60.bankPractice).accuracy).toBe(60);
    expect(masteryForIds(at60.ids, at60.bankPractice).band).toBe(MASTERY_BANDS.LEARNING);
  });

  it('requires 4 practiced for strong: 3/3 correct is still learning', () => {
    const { ids, bankPractice } = fixture(10, 3, 3); // 100% but only 3 practiced
    expect(masteryForIds(ids, bankPractice).band).toBe(MASTERY_BANDS.LEARNING);
  });

  it('splits strong vs learning at the 80% accuracy line', () => {
    const at80 = fixture(20, 5, 4); // exactly 80
    expect(masteryForIds(at80.ids, at80.bankPractice).accuracy).toBe(80);
    expect(masteryForIds(at80.ids, at80.bankPractice).band).toBe(MASTERY_BANDS.STRONG);

    const at79 = fixture(20, 14, 11); // 11/14 = 78.6 → rounds to 79
    expect(masteryForIds(at79.ids, at79.bankPractice).accuracy).toBe(79);
    expect(masteryForIds(at79.ids, at79.bankPractice).band).toBe(MASTERY_BANDS.LEARNING);
  });

  it('rounds coveragePct', () => {
    const third = fixture(3, 1, 1); // 1/3 = 33.3 → 33
    expect(masteryForIds(third.ids, third.bankPractice).coveragePct).toBe(33);
    const twoThirds = fixture(3, 2, 2); // 2/3 = 66.7 → 67
    expect(masteryForIds(twoThirds.ids, twoThirds.bankPractice).coveragePct).toBe(67);
  });
});

describe('masterySummary', () => {
  it('counts strong and focus nodes, ignoring unseen and learning', () => {
    const strong = fixture(10, 5, 5);     // 100%, 5 practiced → strong
    const focus = fixture(10, 4, 1);      // 25%, 4 practiced → focus
    const learning = fixture(10, 2, 2);   // 2 practiced → learning
    const unseen = fixture(10, 0, 0);     // → unseen
    const bankPractice = {
      ...prefix(strong.bankPractice, 's'),
      ...prefix(focus.bankPractice, 'f'),
      ...prefix(learning.bankPractice, 'l'),
    };
    const nodes = [
      { qids: strong.ids.map(id => `s-${id}`) },
      { qids: focus.ids.map(id => `f-${id}`) },
      { qids: learning.ids.map(id => `l-${id}`) },
      { qids: unseen.ids.map(id => `u-${id}`) },
    ];
    expect(masterySummary(nodes, bankPractice)).toEqual({ strongCount: 1, focusCount: 1 });
  });

  it('is null-safe for missing nodes and qids', () => {
    expect(masterySummary(null, {})).toEqual({ strongCount: 0, focusCount: 0 });
    expect(masterySummary([{}, { qids: null }], {})).toEqual({ strongCount: 0, focusCount: 0 });
  });
});

// Re-keys a bankPractice fixture so multiple fixtures can share one map.
function prefix(bankPractice, tag) {
  return Object.fromEntries(Object.entries(bankPractice).map(([k, v]) => [`${tag}-${k}`, v]));
}
