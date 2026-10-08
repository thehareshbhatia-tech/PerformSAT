/**
 * diagnosticEngine.trapSubstring.test.js — diagnostic-v3 spec §1.2 fault 1
 * (Phase 0). detectTrapAnswer used to label a miss a "trap" when the
 * explanation said "trap" ANYWHERE and contained the picked letter anywhere —
 * a single letter always matches. Riley's R&W Module 2 Q4 (item 1130, picked
 * C) was a "Trap Answer" because the D line called D the trap. Only the
 * explicit per-choice line for the picked choice may carry the call-out now.
 */
import { detectTrapAnswer, findChoiceRationaleLines } from '../diagnosticEngine';
import { runRileyDiagnostic, rileyFixture } from '../__fixtures__/rileySitting';

jest.mock('../practiceTestService', () => ({ loadAttemptSnapshot: jest.fn() }));
jest.mock('../miniDiagnostic/buildDiagnosticTest', () => ({
  rebuildDiagnosticTest: jest.fn(),
  manifestFromServedItemIds: jest.fn(),
}));

// Word choices: no numeric heuristic can fire, only the explanation check.
const wordItem = (explanation) => ({
  type: 'multiple-choice',
  choices: [
    { id: 'A', text: 'supersede' },
    { id: 'B', text: 'ratify' },
    { id: 'C', text: 'conceal' },
    { id: 'D', text: 'replicate' },
  ],
  correctAnswer: 'A',
  skills: ['words-in-context'],
  explanation,
});

const RW_EXPLANATION = [
  '**Choice A is correct.** The new tables would "supersede" the older ones.',
  '',
  '**Why the other choices are wrong:**',
  '- B: "Ratify" means to confirm or approve.',
  '- C: "Conceal" would mean hiding the older tables.',
  '- D: "Replicate" is the trap — copying would reproduce the errors.',
].join('\n');

describe('detectTrapAnswer — explanation call-outs are per choice', () => {
  test('a miss on C is not a trap because the D line names a trap', () => {
    expect(detectTrapAnswer(wordItem(RW_EXPLANATION), 'C').isTrap).toBe(false);
  });

  test('a miss on D is a trap: its own line calls it the trap', () => {
    const r = detectTrapAnswer(wordItem(RW_EXPLANATION), 'D');
    expect(r.isTrap).toBe(true);
    expect(r.trapType).toBe('explanation_identified');
  });

  test('the math "* Choice X (...):" shape counts, under any header', () => {
    const exp = [
      '**Common Mistakes:**',
      '* Choice B ($13): distributes as $-3x - 12$.',
      '* Choice C ($5): a common mistake — reports $a$ instead of $b$.',
    ].join('\n');
    expect(detectTrapAnswer(wordItem(exp), 'C').isTrap).toBe(true);
    // B is listed under a "Common Mistakes" header but its own line has no call-out.
    expect(detectTrapAnswer(wordItem(exp), 'B').isTrap).toBe(false);
  });

  test('a letter in prose, or "trapezoid", never reads as a trap call-out', () => {
    const exp = [
      'This is a common error: students grab the first value they see. Choose C only if the ratio holds.',
      '- C: uses the trapezoid area formula on a triangle.',
    ].join('\n');
    expect(detectTrapAnswer(wordItem(exp), 'C').isTrap).toBe(false);
  });

  test('findChoiceRationaleLines matches only explicit per-choice lines', () => {
    expect(findChoiceRationaleLines(RW_EXPLANATION, 'C')).toEqual(['- C: "Conceal" would mean hiding the older tables.']);
    expect(findChoiceRationaleLines('Pick C if unsure. A C-grade answer.', 'C')).toEqual([]);
    expect(findChoiceRationaleLines('* Choice C ($5): stops early.', 'C')).toHaveLength(1);
    expect(findChoiceRationaleLines('- (C): stops early.', 'C')).toHaveLength(1);
    expect(findChoiceRationaleLines('* Choice CD is not a choice', 'C')).toEqual([]);
    expect(findChoiceRationaleLines(RW_EXPLANATION, '12')).toEqual([]);
    expect(findChoiceRationaleLines(null, 'C')).toEqual([]);
  });
});

describe("Riley's sitting", () => {
  const ITEM_1130 = 'rw-test11-module-2-1130';

  test('item 1130 (picked C; the explanation calls D the trap) is not a trap', () => {
    const snap = rileyFixture.attempt.questionsSnapshot.find((q) => q.id === ITEM_1130);
    const key = `${snap.moduleIndex}-${snap.questionIndex}`;
    expect(rileyFixture.attempt.answers[key]).toBe('C');
    expect(snap.explanation).toMatch(/the trap/);

    const diag = runRileyDiagnostic();
    const entry = diag.questionAnalysis.find((q) => q.key === key);
    expect(entry.isCorrect).toBe(false);
    expect(entry.errorType).not.toBe('trap_susceptibility');
  });

  test('no miss in the sitting is labelled a trap by the explanation check', () => {
    const diag = runRileyDiagnostic();
    const byExplanation = diag.questionAnalysis.filter(
      (q) => q.reasoning === 'This wrong answer is specifically called out as a common mistake in the explanation',
    );
    // Every explanation-identified trap must be backed by its own choice line.
    byExplanation.forEach((q) => {
      const snap = rileyFixture.attempt.questionsSnapshot.find(
        (s) => `${s.moduleIndex}-${s.questionIndex}` === q.key,
      );
      const lines = findChoiceRationaleLines(snap.explanation, q.userAnswer);
      expect(lines.some((l) => /\btraps?\b|common (mistake|error)/i.test(l))).toBe(true);
    });
  });
});
