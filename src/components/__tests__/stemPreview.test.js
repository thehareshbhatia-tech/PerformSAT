/**
 * Pins the sidebar stem-preview LaTeX stripping in AssignedPracticeShell.
 *
 * Regression: money amounts written as escaped dollars inside math spans
 * (`$\$8{,}400$`) rendered as `\8,400` in the drill navigator because the
 * naive $-pair strip consumed `$\$` as an empty pair, leaving the backslash
 * and mis-pairing every later `$` on the line.
 */
import { stemPreview } from '../AssignedPracticeShell';

jest.mock('../MathText', () => ({ MathText: () => null }));
jest.mock('../QuestionDiagrams', () => () => null);
jest.mock('../QuestionRenderer', () => () => null);
jest.mock('../SolutionExplanation', () => () => null);
jest.mock('../AiTutorChat', () => () => null);
jest.mock('../../services/analyticsService', () => ({
  trackDrillStarted: jest.fn(),
  trackDrillChipShown: jest.fn(),
}));

describe('stemPreview', () => {
  it('keeps escaped dollar amounts as $ (the \\8,400 regression)', () => {
    const q = {
      question:
        'A solar-panel installation has a fixed upfront cost of $\\$8{,}400$ and generates approximately $\\$1{,}050$ in savings per year.',
    };
    const out = stemPreview(q);
    expect(out).toContain('$8,400');
    expect(out).not.toContain('\\8');
    expect(out).not.toContain('\\$');
  });

  it('strips plain math delimiters and LaTeX commands', () => {
    const q = { question: 'The function $f$ is defined by $f(x) = \\frac{1}{2}x - 2$. What is $f(4)$?' };
    const out = stemPreview(q);
    expect(out).toBe('The function f is defined by f(x) = 12x - 2. What is f(4)?');
  });

  it('prefers the passage for R&W questions', () => {
    const q = { passage: 'While researching a topic, a student has taken notes.', question: 'Which choice?' };
    expect(stemPreview(q)).toBe('While researching a topic, a student has taken notes.');
  });

  it('handles segment-array questions and falls back to id', () => {
    expect(stemPreview({ question: [{ text: 'If ' }, { math: 'x = 3' }, { text: ', find y.' }] })).toBe('If x = 3 , find y.');
    expect(stemPreview({ id: 'q-77' })).toBe('q-77');
  });

  it('caps the preview at 80 characters', () => {
    const q = { question: 'a'.repeat(200) };
    expect(stemPreview(q).length).toBe(80);
  });
});
