/**
 * rwExplanationStructure.test.js — the gate for the R&W explanation rewrite.
 *
 * Every R&W explanation must render through SolutionExplanation's STRUCTURED
 * path (bold verdict + one-line why + collapsible "why other choices are
 * wrong"), never the plain-prose fallback that produced the paragraph walls.
 * For each of the ~678 items this asserts:
 *   1. a verdict is extracted (so it does not hit the fallback),
 *   2. the verdict's letter equals the item's correctAnswer,
 *   3. a "why the other choices are wrong" section is present,
 *   4. the explanation stays short (no reverting to a paragraph).
 */

import { rwQuestionBank } from '../index';
import { parseExplanation } from '../../../../components/SolutionExplanation';

const MAX_LEN = 750; // a short structured explanation; the old walls ran 600-950+

const letterOf = (verdict) => {
  const m = (verdict || '').match(/\b([A-D])\b/);
  return m ? m[1] : null;
};

describe('R&W explanations are structured + scannable', () => {
  const items = rwQuestionBank.filter((q) => typeof q.explanation === 'string' && q.explanation.trim());

  test('the bank actually has R&W items with explanations', () => {
    expect(items.length).toBeGreaterThan(600);
  });

  test('every explanation parses into the structured (non-wall) layout', () => {
    const fails = [];
    for (const q of items) {
      const p = parseExplanation(q.explanation);
      if (!p.answer) fails.push(`${q.id}: no verdict extracted (hits prose fallback)`);
    }
    if (fails.length) throw new Error(`${fails.length} explanations hit the wall:\n` + fails.slice(0, 25).join('\n'));
  });

  test('every verdict letter matches the item correctAnswer', () => {
    const fails = [];
    for (const q of items) {
      const p = parseExplanation(q.explanation);
      const letter = letterOf(p.answer);
      if (letter && letter !== q.correctAnswer) {
        fails.push(`${q.id}: verdict says ${letter}, correctAnswer is ${q.correctAnswer}`);
      }
    }
    if (fails.length) throw new Error(`${fails.length} verdict/answer mismatches:\n` + fails.slice(0, 25).join('\n'));
  });

  test('every explanation includes a "why other choices are wrong" section', () => {
    const fails = [];
    for (const q of items) {
      const p = parseExplanation(q.explanation);
      if (!p.whyWrong) fails.push(`${q.id}: no why-wrong section`);
    }
    if (fails.length) throw new Error(`${fails.length} missing why-wrong:\n` + fails.slice(0, 25).join('\n'));
  });

  test('explanations stay short (no paragraph walls)', () => {
    const longOnes = items
      .filter((q) => q.explanation.length > MAX_LEN)
      .map((q) => `${q.id}: ${q.explanation.length} chars`);
    if (longOnes.length) throw new Error(`${longOnes.length} explanations over ${MAX_LEN} chars:\n` + longOnes.slice(0, 25).join('\n'));
  });
});
