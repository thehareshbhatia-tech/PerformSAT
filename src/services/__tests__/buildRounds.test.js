import {
  buildRounds,
  findRoundIndexForQuestion,
  computeRoundProgress,
  classifyRoundBoundary,
} from '../buildRounds';

const ids = (n, prefix = 'q') => Array.from({ length: n }, (_, i) => `${prefix}${i + 1}`);

describe('buildRounds', () => {
  it('returns empty for empty / non-array input', () => {
    expect(buildRounds([])).toEqual([]);
    expect(buildRounds(null)).toEqual([]);
    expect(buildRounds(undefined)).toEqual([]);
  });

  it('splits 24 ids into 3 rounds of 8 by default', () => {
    const r = buildRounds(ids(24));
    expect(r).toHaveLength(3);
    r.forEach(round => expect(round.questionIds).toHaveLength(8));
    expect(r[0].questionIds[0]).toBe('q1');
    expect(r[1].questionIds[0]).toBe('q9');
    expect(r[2].questionIds[0]).toBe('q17');
  });

  it('respects a custom round size', () => {
    const r = buildRounds(ids(20), 5);
    expect(r).toHaveLength(4);
    r.forEach(round => expect(round.questionIds).toHaveLength(5));
  });

  it('produces a partial last round when size does not divide evenly', () => {
    const r = buildRounds(ids(10), 4);
    expect(r).toHaveLength(3);
    expect(r[0].questionIds).toHaveLength(4);
    expect(r[1].questionIds).toHaveLength(4);
    expect(r[2].questionIds).toHaveLength(2);
  });

  it('handles a single round when size >= ids.length', () => {
    const r = buildRounds(ids(5), 8);
    expect(r).toHaveLength(1);
    expect(r[0].questionIds).toHaveLength(5);
  });

  it('falls back to default size when size is invalid', () => {
    expect(buildRounds(ids(8), 0)).toHaveLength(1);    // 8/8 default = 1 round
    expect(buildRounds(ids(8), -1)).toHaveLength(1);
    expect(buildRounds(ids(8), 'nope')).toHaveLength(1);
  });

  it('floors fractional round sizes', () => {
    const r = buildRounds(ids(10), 3.7);
    expect(r).toHaveLength(4);                 // 3 rounds of 3 + 1 of 1
    expect(r[0].questionIds).toHaveLength(3);
  });

  it('every round has a label, index, and null timestamps', () => {
    const r = buildRounds(ids(16));
    r.forEach((round, i) => {
      expect(round.index).toBe(i);
      expect(round.label).toBe(`Round ${i + 1}`);
      expect(round.startedAt).toBeNull();
      expect(round.completedAt).toBeNull();
    });
  });
});

describe('findRoundIndexForQuestion', () => {
  const rounds = buildRounds(ids(24));

  it('returns the right round for a question in round 0', () => {
    expect(findRoundIndexForQuestion(rounds, 'q3')).toBe(0);
  });

  it('returns the right round for a question in round 1', () => {
    expect(findRoundIndexForQuestion(rounds, 'q12')).toBe(1);
  });

  it('returns the right round for a question in round 2', () => {
    expect(findRoundIndexForQuestion(rounds, 'q24')).toBe(2);
  });

  it('returns -1 for an unknown question id', () => {
    expect(findRoundIndexForQuestion(rounds, 'nope')).toBe(-1);
  });

  it('returns -1 for falsy / missing inputs', () => {
    expect(findRoundIndexForQuestion(null, 'q1')).toBe(-1);
    expect(findRoundIndexForQuestion(rounds, null)).toBe(-1);
    expect(findRoundIndexForQuestion(rounds, '')).toBe(-1);
  });
});

describe('computeRoundProgress', () => {
  const rounds = buildRounds(ids(24));

  it('reports zero progress when no answers', () => {
    const p = computeRoundProgress(rounds, {});
    expect(p).toHaveLength(3);
    p.forEach(r => {
      expect(r.answered).toBe(0);
      expect(r.correct).toBe(0);
      expect(r.isComplete).toBe(false);
      expect(r.isInProgress).toBe(false);
    });
  });

  it('marks a round as complete when all its questions are answered', () => {
    const answers = {};
    for (let i = 1; i <= 8; i++) answers[`q${i}`] = { correct: i % 2 === 0 };
    const p = computeRoundProgress(rounds, answers);
    expect(p[0].answered).toBe(8);
    expect(p[0].correct).toBe(4);
    expect(p[0].isComplete).toBe(true);
    expect(p[0].isInProgress).toBe(false);
    expect(p[1].isComplete).toBe(false);
  });

  it('marks a round as in-progress when partially answered', () => {
    const answers = { q9: { correct: true }, q10: { correct: false } };
    const p = computeRoundProgress(rounds, answers);
    expect(p[0].isInProgress).toBe(false); // round 0 untouched
    expect(p[1].answered).toBe(2);
    expect(p[1].isInProgress).toBe(true);
    expect(p[1].isComplete).toBe(false);
  });
});

describe('classifyRoundBoundary', () => {
  const rounds = buildRounds(ids(24));

  it('returns isLastInRound:false when other round questions remain', () => {
    const answers = { q1: { correct: true }, q2: { correct: false } };
    const r = classifyRoundBoundary(rounds, 'q2', answers);
    expect(r.isLastInRound).toBe(false);
    expect(r.roundIndex).toBe(0);
    expect(r.isLastRound).toBe(false);
  });

  it('returns isLastInRound:true when answering the round\'s last question', () => {
    const answers = {};
    for (let i = 1; i <= 8; i++) answers[`q${i}`] = { correct: true };
    const r = classifyRoundBoundary(rounds, 'q8', answers);
    expect(r.isLastInRound).toBe(true);
    expect(r.roundIndex).toBe(0);
    expect(r.isLastRound).toBe(false);
  });

  it('returns isLastRound:true on the final round\'s final question', () => {
    const answers = {};
    for (let i = 1; i <= 24; i++) answers[`q${i}`] = { correct: true };
    const r = classifyRoundBoundary(rounds, 'q24', answers);
    expect(r.isLastInRound).toBe(true);
    expect(r.isLastRound).toBe(true);
    expect(r.roundIndex).toBe(2);
  });

  it('returns roundIndex:-1 for unknown question id', () => {
    const r = classifyRoundBoundary(rounds, 'nope', {});
    expect(r.roundIndex).toBe(-1);
  });
});
