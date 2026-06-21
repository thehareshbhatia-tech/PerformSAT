/**
 * rwExplanationFormat.test.js — pins the R&W explanation contract.
 *
 * R&W explanations were dense single paragraphs that hit SolutionExplanation's
 * plain-prose fallback (one grey wall). The fix rewrites them into the structured
 * format the renderer already understands: a bold verdict, a one-line why
 * (answerDetail, always visible), and a collapsible "Why the other choices are
 * wrong" (whyWrong). This test guards the FORMAT — that the canonical string
 * parses into those sections — so the rewrite can't silently regress to a wall.
 */

import { parseExplanation } from '../SolutionExplanation';

const SAMPLE =
  '**The correct answer is C.** The sentence contrasts whales that "travel thousands of miles" with this group, which stays "year-round," so the blank needs a verb for staying put — "remains."\n\n' +
  '**Why the other choices are wrong:**\n' +
  'The other options break the contrast: "departs" and "surfaces" point away from staying, and "lingers" implies only a brief stay, not the permanent, single-region residence the passage describes.';

describe('R&W structured explanation format', () => {
  const parsed = parseExplanation(SAMPLE);

  test('verdict is extracted (renders as the big bold answer, not the prose wall)', () => {
    expect(parsed.answer).toBeTruthy();
    expect(parsed.answer).toMatch(/\bC\b/);
  });

  test('the one-line "why" lands in answerDetail (always visible)', () => {
    expect(parsed.answerDetail).toMatch(/remains/i);
    expect(parsed.answerDetail).not.toMatch(/Why the other choices/i);
  });

  test('the combined "why not" lands in the collapsible whyWrong section', () => {
    expect(parsed.whyWrong).toBeTruthy();
    expect(parsed.whyWrong.content + (parsed.whyWrong.bullets || []).join(' ')).toMatch(/departs|lingers|surfaces/i);
  });

  test('it does NOT fall through to the plain-prose fallback', () => {
    // Fallback fires only when no structured answer was extracted.
    expect(parsed.answer).not.toBe('');
  });
});
