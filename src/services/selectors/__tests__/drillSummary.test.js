import { extractMissedIds } from '../drillSummary';

const q = (id) => ({ id });

describe('extractMissedIds', () => {
  it('includes questions answered wrong, in question order', () => {
    const questions = [q('a'), q('b'), q('c'), q('d')];
    const answers = {
      a: { correct: true },
      b: { correct: false },
      c: { correct: false },
      d: { correct: true },
    };
    expect(extractMissedIds(questions, answers)).toEqual(['b', 'c']);
  });

  it('excludes correct answers', () => {
    const questions = [q('a'), q('b')];
    const answers = { a: { correct: true }, b: { correct: true } };
    expect(extractMissedIds(questions, answers)).toEqual([]);
  });

  it('excludes unanswered questions (no answer entry)', () => {
    const questions = [q('a'), q('b'), q('c')];
    // 'b' was never answered — no entry — so it is not a "miss".
    const answers = { a: { correct: false }, c: { correct: true } };
    expect(extractMissedIds(questions, answers)).toEqual(['a']);
  });

  it('preserves the original question order for the re-drill', () => {
    const questions = [q('q3'), q('q1'), q('q2')];
    const answers = {
      q1: { correct: false },
      q2: { correct: false },
      q3: { correct: false },
    };
    expect(extractMissedIds(questions, answers)).toEqual(['q3', 'q1', 'q2']);
  });

  it('supports numeric ids', () => {
    const questions = [q(1), q(2), q(3)];
    const answers = { 1: { correct: false }, 2: { correct: true }, 3: { correct: false } };
    expect(extractMissedIds(questions, answers)).toEqual([1, 3]);
  });

  it('treats an answer entry with no correct flag as a miss', () => {
    const questions = [q('a')];
    const answers = { a: { selected: 'B' } }; // answered, correctness falsy
    expect(extractMissedIds(questions, answers)).toEqual(['a']);
  });

  it('returns [] for empty/null answers safely', () => {
    const questions = [q('a'), q('b')];
    expect(extractMissedIds(questions, {})).toEqual([]);
    expect(extractMissedIds(questions, null)).toEqual([]);
    expect(extractMissedIds(questions, undefined)).toEqual([]);
  });

  it('returns [] for a non-array / empty questions list', () => {
    expect(extractMissedIds(null, { a: { correct: false } })).toEqual([]);
    expect(extractMissedIds(undefined, { a: { correct: false } })).toEqual([]);
    expect(extractMissedIds([], { a: { correct: false } })).toEqual([]);
  });

  it('skips malformed question entries without an id', () => {
    const questions = [q('a'), null, {}, q('b')];
    const answers = { a: { correct: false }, b: { correct: false } };
    expect(extractMissedIds(questions, answers)).toEqual(['a', 'b']);
  });
});
