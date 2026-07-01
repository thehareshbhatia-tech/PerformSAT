/**
 * diagnosticEngine.answerPatterns.test.js — position-bias correctness.
 *
 * Regression: questionAnalysis entries only carried `userAnswer` on WRONG
 * answers while the bias denominator counted ALL answered entries, so every
 * letter read far below 25% and a fabricated "systematic bias" warning was
 * injected into the AI diagnosis prompt for nearly every student. Pins:
 *  - correct answers count toward letter shares (userAnswer now on both
 *    branches);
 *  - the denominator is letter-answered entries only;
 *  - only an OVER-picked letter (positive deviation) warns — an under-picked
 *    letter is just the arithmetic complement of the others.
 */

import { runDiagnostic } from '../diagnosticEngine';

const CHOICES = [
  { id: 'A', text: 'alpha' },
  { id: 'B', text: 'bravo' },
  { id: 'C', text: 'charlie' },
  { id: 'D', text: 'delta' },
];

// Non-numeric choice text keeps detectTrapAnswer out of the way (mirrors the
// phase1Correctness fixture).
const mkQ = ({ id, correctAnswer = 'B', difficulty = 'medium' }) => ({
  id,
  type: 'multiple-choice',
  difficulty,
  skills: ['ratios'],
  correctAnswer,
  choices: CHOICES,
  explanation: 'Plain explanation, no SAT Pattern header.',
});

const mkTest = (questions) => ({
  id: 'synthetic-test',
  title: 'Synthetic test',
  modules: [{ id: 'module-1', section: 'math', questions }],
});

// Build a test + answers from [pickedLetter, correctLetter] pairs.
const buildScenario = (pairs) => {
  const questions = pairs.map(([, correct], i) => mkQ({ id: i + 1, correctAnswer: correct }));
  const answers = Object.fromEntries(pairs.map(([picked], i) => [`0-${i}`, picked]));
  return { test: mkTest(questions), answers };
};

describe('analyzeAnswerPatterns (via runDiagnostic) — position bias', () => {
  it('mixed right/wrong answers evenly distributed across letters yield NO bias warning', () => {
    // 12 answered, letters picked A/B/C/D exactly 3 times each; the only two
    // misses are both "A" picks. The old wrong-answers-only counting saw
    // {A: 2} over 12 -> B/C/D at "0%" -> fabricated warning.
    const { test, answers } = buildScenario([
      ['A', 'A'], ['B', 'B'], ['C', 'C'], ['D', 'D'],
      ['A', 'B'], ['B', 'B'], ['C', 'C'], ['D', 'D'],
      ['A', 'C'], ['B', 'B'], ['C', 'C'], ['D', 'D'],
    ]);
    const report = runDiagnostic(test, answers, { questionDetails: {} });
    const ap = report.answerPatterns;

    expect(ap.hasPositionBias).toBe(false);
    expect(ap.biasWarning).toBeNull();
    // Correct answers count toward the shares: every letter sits at 25%.
    for (const letter of ['A', 'B', 'C', 'D']) {
      const entry = ap.positionBias.find(p => p.letter === letter);
      expect(entry.count).toBe(3);
      expect(entry.percent).toBe(25);
    }
  });

  it('picking "C" for 60% of answered questions yields a C-overpick warning', () => {
    // 10 answered, 6 of them "C" (3 right, 3 wrong) -> 60%, deviation +35.
    const { test, answers } = buildScenario([
      ['C', 'C'], ['C', 'C'], ['C', 'C'],           // C picked, right
      ['C', 'A'], ['C', 'A'], ['C', 'A'],           // C picked, wrong
      ['A', 'A'], ['B', 'D'], ['D', 'D'], ['A', 'B'],
    ]);
    const report = runDiagnostic(test, answers, { questionDetails: {} });
    const ap = report.answerPatterns;

    expect(ap.hasPositionBias).toBe(true);
    expect(ap.biasWarning).toContain('"C"');
    expect(ap.biasWarning).toContain('60%');
  });

  it('an under-picked letter alone never warns (negative deviation is not bias)', () => {
    // 8 answered: A x3, B x3, C x2, D x0. D deviates -25 but nothing is
    // over-picked past the threshold -> no warning.
    const { test, answers } = buildScenario([
      ['A', 'A'], ['A', 'A'], ['A', 'B'],
      ['B', 'B'], ['B', 'B'], ['B', 'C'],
      ['C', 'C'], ['C', 'A'],
    ]);
    const report = runDiagnostic(test, answers, { questionDetails: {} });
    const ap = report.answerPatterns;

    expect(ap.hasPositionBias).toBe(false);
    expect(ap.biasWarning).toBeNull();
  });
});
