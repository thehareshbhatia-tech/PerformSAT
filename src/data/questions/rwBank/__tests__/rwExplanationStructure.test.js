/**
 * rwExplanationStructure.test.js — the gate for the R&W explanation rewrite.
 *
 * Every R&W explanation must render through SolutionExplanation's STRUCTURED
 * path (bold verdict + reasoning + per-choice "why other choices are wrong"
 * bullets), never the plain-prose fallback that produced the paragraph walls.
 * The goal is SCANNABLE WITH FULL DETAIL — NOT short. (A 2026-06 over-
 * compression to a 750-char cap gutted the actual teaching; this gate now
 * guards STRUCTURE, not brevity — see feedback-explanations-reformat-not-shorten.)
 * For each of the ~678 items this asserts:
 *   1. a verdict is extracted (so it does not hit the fallback),
 *   2. the verdict's letter equals the item's correctAnswer,
 *   3. a "why the other choices are wrong" section is present,
 *   4. the wrong choices are broken into per-choice bullets (scannable),
 *   5. detail is uncapped — only a generous runaway ceiling applies.
 */

import { rwQuestionBank } from '../index';
import { parseExplanation } from '../../../../components/SolutionExplanation';

const MAX_LEN = 4000; // generous runaway ceiling ONLY — detail is intentionally uncapped (scannability ≠ brevity)

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

  test('the wrong choices are broken into per-choice bullets (scannable, not a wall)', () => {
    const fails = [];
    for (const q of items) {
      const p = parseExplanation(q.explanation);
      const bullets = (p.whyWrong && p.whyWrong.bullets) || [];
      if (bullets.length < 2) fails.push(`${q.id}: why-wrong has ${bullets.length} bullet(s) — renders as a wall`);
    }
    if (fails.length) throw new Error(`${fails.length} explanations are not bulleted:\n` + fails.slice(0, 25).join('\n'));
  });

  test('explanations stay within a sane ceiling (runaway guard, NOT a brevity cap)', () => {
    const tooLong = items
      .filter((q) => q.explanation.length > MAX_LEN)
      .map((q) => `${q.id}: ${q.explanation.length} chars`);
    if (tooLong.length) throw new Error(`${tooLong.length} explanations over ${MAX_LEN} chars (runaway):\n` + tooLong.slice(0, 25).join('\n'));
  });
});
