import { progressForIds } from '../bankProgress';

describe('progressForIds', () => {
  const bankPractice = {
    a: { c: true, n: 1 },
    b: { c: false, n: 2 },
    c: { c: true, n: 1 },
    420: { c: true, n: 1 }, // numeric-id key stored as string
  };

  it('counts practiced + correct over the given ids and computes accuracy', () => {
    expect(progressForIds(['a', 'b', 'c', 'd'], bankPractice)).toEqual({
      total: 4, practiced: 3, correct: 2, accuracy: 67,
    });
  });

  it('matches numeric ids against string keys', () => {
    expect(progressForIds([420], bankPractice)).toEqual({
      total: 1, practiced: 1, correct: 1, accuracy: 100,
    });
  });

  it('returns null accuracy when nothing in the set was practiced', () => {
    expect(progressForIds(['x', 'y'], bankPractice)).toEqual({
      total: 2, practiced: 0, correct: 0, accuracy: null,
    });
  });

  it('is null-safe for empty/missing inputs', () => {
    expect(progressForIds(null, null)).toEqual({ total: 0, practiced: 0, correct: 0, accuracy: null });
    expect(progressForIds(['a'], undefined)).toEqual({ total: 1, practiced: 0, correct: 0, accuracy: null });
  });
});
