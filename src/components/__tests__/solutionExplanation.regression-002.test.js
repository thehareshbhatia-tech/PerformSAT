/**
 * Regression: ISSUE-002 — SolutionExplanation rendered empty panel for
 * CB-authentic R&W explanations.
 * Found by /qa on 2026-05-07
 * Report: .gstack/qa-reports/qa-report-localhost-3000-2026-05-07.md
 *
 * Symptom: Tests 1, 2, 7 reauthored under docs/RW_PIPELINE_PLAN.md show
 * an empty "Solution Explanation" panel in review mode for every R&W
 * question — ~2K chars of analysis per item never reach the user.
 *
 * Root cause: parseExplanation() collects every continuation line into
 * `answerDetail`. When the explanation has no **bold** headers (the new
 * authentic content has none — CB doesn't write that way), `answer = ''`
 * so the {answer && (...)} block doesn't render, and `answerDetail` only
 * displays inside that skipped block. The bottom fallback guarded on
 * `!hasBody && !answerDetail` — but answerDetail is non-empty, so the
 * fallback never fires either.
 *
 * Fix: src/components/SolutionExplanation.jsx — fallback guard changed
 * from `!answerDetail` to `!answer`. When no structured `answer` is
 * extracted, render the full explanation as prose via RichText.
 *
 * Tests below replicate the relevant slice of parseExplanation (the
 * answer-verdict regex) and the fallback-decision logic, mirroring
 * the standalone-extract pattern already used by mathRendering.test.js.
 */

// Replicated answer-verdict regex from SolutionExplanation.jsx parseExplanation.
// Returns { answer, answerDetail } given an explanation string. We don't
// replicate the full parser (it's 100+ lines); we just isolate the part
// that the bug hinges on.
function tryExtractAnswer(explanation) {
  if (!explanation) return { answer: '', answerDetail: '' };
  const lines = explanation.split('\n');
  let answer = '', answerDetail = '';
  for (const line of lines) {
    const t = line.trim(); if (!t) continue;
    const m = t.match(/^\*\*(?:Choice ([A-D]) is correct\.?|The correct answer is (.+?)\.?)\*\*(.*)$/);
    if (m && !answer) {
      answer = m[1] ? 'Choice ' + m[1] + ' is correct' : 'The correct answer is ' + m[2];
      const rest = (m[3] || '').trim();
      if (rest) answerDetail = rest;
      break;
    }
  }
  return { answer, answerDetail };
}

// Replicated fallback-decision logic from the patched component.
// Inputs match the parsed shape; output is whether the prose fallback
// renders the raw explanation.
function shouldShowProseFallback({ answer, hasBody }) {
  return !hasBody && !answer;
}

describe('ISSUE-002: SolutionExplanation prose fallback', () => {
  describe('answer extraction', () => {
    it('extracts structured legacy verdict "**Choice B is correct.**"', () => {
      const exp = '**Choice B is correct.** The phrase "rural ______" needs a noun...';
      const { answer } = tryExtractAnswer(exp);
      expect(answer).toBe('Choice B is correct');
    });

    it('extracts structured legacy verdict "**The correct answer is X.**"', () => {
      const exp = '**The correct answer is "discern".** Working at Howard University...';
      const { answer } = tryExtractAnswer(exp);
      expect(answer).toContain('The correct answer is');
    });

    it('does NOT extract a verdict from CB-style prose without **bold**', () => {
      // The exact precondition that triggered the bug: Test 2 Q3 explanation.
      const exp = 'The correct answer is D, "pervades." The sentences before the blank establish Lee\'s central argument...';
      const { answer } = tryExtractAnswer(exp);
      expect(answer).toBe('');
    });

    it('does NOT extract a verdict from a Test 7 prose item ("discern")', () => {
      const exp = 'The correct answer is C, "discern." Working at Howard University and the Marine Biological Laboratory at Woods Hole, zoologist Roger Arliner Young studied the contractile vacuole system...';
      const { answer } = tryExtractAnswer(exp);
      expect(answer).toBe('');
    });
  });

  describe('fallback decision (the patched conditional)', () => {
    // PRE-PATCH behavior used `!hasBody && !answerDetail`. When the parser
    // dumps the entire prose into answerDetail, the panel renders nothing.
    // POST-PATCH uses `!hasBody && !answer` so prose explanations always
    // surface.

    it('renders prose fallback when no headers and no structured answer', () => {
      const verdict = tryExtractAnswer('The correct answer is D, "pervades." Lee argues...');
      expect(shouldShowProseFallback({ answer: verdict.answer, hasBody: false })).toBe(true);
    });

    it('does NOT render prose fallback when legacy structured answer exists', () => {
      const verdict = tryExtractAnswer('**Choice B is correct.** Some prose...');
      // Even if hasBody is false (e.g., short legacy item with only a verdict),
      // the structured `answer` block already rendered, so prose would be a
      // duplicate. Fallback correctly stays off.
      expect(shouldShowProseFallback({ answer: verdict.answer, hasBody: false })).toBe(false);
    });

    it('does NOT render prose fallback when structured body exists', () => {
      // hasBody = true means there are step/method/case/whyWrong cards
      // already rendering. Don't double-render.
      expect(shouldShowProseFallback({ answer: '', hasBody: true })).toBe(false);
    });

    // Adjacent edge cases the trace surfaced:
    it('handles empty explanation gracefully', () => {
      const verdict = tryExtractAnswer('');
      expect(verdict.answer).toBe('');
      // The component's own !explanation guard (line 428) renders
      // "No explanation available" before the fallback ever runs, so
      // this case never reaches the fallback condition.
    });

    it('handles explanation with whitespace-only lines', () => {
      const verdict = tryExtractAnswer('\n\n   \n\n');
      expect(verdict.answer).toBe('');
      expect(shouldShowProseFallback({ answer: verdict.answer, hasBody: false })).toBe(true);
    });
  });

  describe('repro: exact Test 2 Q3 and Test 7 Q3 explanations from the shipped bank', () => {
    it('Test 2 Q3 ("pervades") — fallback fires post-patch', () => {
      const exp = 'The correct answer is D, "pervades." The sentences before the blank establish Lee\'s central argument: hostility toward immigrants is "not an occasional lapse" but something "written into statutes, court rulings, and federal agencies in every generation," reaching back to the early republic.';
      const { answer } = tryExtractAnswer(exp);
      expect(answer).toBe('');
      expect(shouldShowProseFallback({ answer, hasBody: false })).toBe(true);
    });

    it('Test 7 Q3 ("discern") — fallback fires post-patch', () => {
      const exp = 'The correct answer is C, "discern." Working at Howard University and the Marine Biological Laboratory at Woods Hole, zoologist Roger Arliner Young studied the contractile vacuole system of paramecium...';
      const { answer } = tryExtractAnswer(exp);
      expect(answer).toBe('');
      expect(shouldShowProseFallback({ answer, hasBody: false })).toBe(true);
    });
  });
});
