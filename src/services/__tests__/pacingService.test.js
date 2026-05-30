/**
 * Tests for pacingService — mode selection, question selection, and grading.
 * Pure module (no Firebase), so this exercises the real logic the dedicated
 * PacingDrill runner depends on.
 */

import {
  analyzePacingProfile,
  selectPacingQuestions,
  evaluatePacingSession,
  PACING_MODES,
} from '../pacingService';

const mcq = (over = {}) => ({ id: 'q', choices: [{ id: 'A' }, { id: 'B' }], difficulty: 'medium', ...over });

describe('analyzePacingProfile — mode selection', () => {
  test('no telemetry -> speed_rounds default', () => {
    expect(analyzePacingProfile([]).mode).toBe('speed_rounds');
  });

  test('3+ unanswered late questions -> last_8_min', () => {
    const tel = Array.from({ length: 20 }, (_, i) => ({ timeSpent: 60, wasCorrect: true, questionIndex: i }));
    // three late, fast, wrong = abandoned endgame
    [18, 19, 20].forEach((qi) => tel.push({ timeSpent: 3, wasCorrect: false, questionIndex: qi }));
    expect(analyzePacingProfile(tel).mode).toBe('last_8_min');
  });

  test('>20% overtime -> checkpoint_pacing', () => {
    const tel = [
      ...Array.from({ length: 6 }, () => ({ timeSpent: 200, wasCorrect: true, questionIndex: 0 })), // overtime
      ...Array.from({ length: 14 }, () => ({ timeSpent: 80, wasCorrect: true, questionIndex: 0 })),
    ];
    expect(analyzePacingProfile(tel).mode).toBe('checkpoint_pacing');
  });

  test('>15% rushed-and-wrong -> speed_rounds', () => {
    const tel = [
      ...Array.from({ length: 4 }, () => ({ timeSpent: 10, wasCorrect: false, questionIndex: 0 })), // rushed wrong
      ...Array.from({ length: 16 }, () => ({ timeSpent: 80, wasCorrect: true, questionIndex: 0 })),
    ];
    expect(analyzePacingProfile(tel).mode).toBe('speed_rounds');
  });
});

describe('selectPacingQuestions', () => {
  const pool = [
    mcq({ id: 'e1', difficulty: 'easy' }),
    mcq({ id: 'm1', difficulty: 'medium' }),
    mcq({ id: 'h1', difficulty: 'hard' }),
    { id: 'fill1', difficulty: 'easy' },              // no choices -> not MCQ
    mcq({ id: 'e2', difficulty: 'easy' }),
  ];

  test('filters by difficulty + MCQ-only + caps at questionCount', () => {
    const out = selectPacingQuestions(pool, PACING_MODES.speed_rounds); // easy/medium, count 10
    expect(out.map(q => q.id).sort()).toEqual(['e1', 'e2', 'm1']);   // hard + fill excluded
  });

  test('respects questionCount cap', () => {
    const out = selectPacingQuestions(pool, { difficultyFilter: ['easy', 'medium'], questionCount: 2 });
    expect(out).toHaveLength(2);
  });

  test('null difficultyFilter keeps all MCQ', () => {
    const out = selectPacingQuestions(pool, { difficultyFilter: null, questionCount: 10 });
    expect(out.map(q => q.id).sort()).toEqual(['e1', 'e2', 'h1', 'm1']); // all MCQ, fill excluded
  });

  test('empty pool -> empty', () => {
    expect(selectPacingQuestions([], PACING_MODES.speed_rounds)).toEqual([]);
  });
});

describe('evaluatePacingSession', () => {
  test('A grade: high accuracy + under budget', () => {
    const results = Array.from({ length: 10 }, () => ({ wasCorrect: true, timeSpent: 40 }));
    const out = evaluatePacingSession(PACING_MODES.speed_rounds, results); // timePerQuestion 60
    expect(out.accuracy).toBe(100);
    expect(out.underBudget).toBe(10);
    expect(out.grade).toBe('A');
  });

  test('C grade: low accuracy', () => {
    const results = Array.from({ length: 10 }, (_, i) => ({ wasCorrect: i < 5, timeSpent: 40 }));
    expect(evaluatePacingSession(PACING_MODES.speed_rounds, results).grade).toBe('C');
  });

  test('underBudget is null for cumulative modes (no per-question budget)', () => {
    const results = [{ wasCorrect: true, timeSpent: 90 }];
    expect(evaluatePacingSession(PACING_MODES.checkpoint_pacing, results).underBudget).toBeNull();
  });

  test('empty results -> 0% accuracy', () => {
    expect(evaluatePacingSession(PACING_MODES.last_8_min, []).accuracy).toBe(0);
  });
});
