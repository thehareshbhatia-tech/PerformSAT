import { rwQuestionBank } from '../index';
import { deriveRWPattern, RW_PATTERN_LABELS } from '../deriveRWPattern';

describe('deriveRWPattern', () => {
  // Frozen distribution snapshot — a tripwire. If anyone re-authors R&W items
  // these counts shift; update them intentionally and re-check that every
  // routing-useful pattern still clears the Tier-1 threshold (>=8).
  const EXPECTED_COUNTS = {
    'boundaries-semicolon': 27,
    'boundaries-comma': 21,
    'boundaries-dash': 11,
    'boundaries-colon': 9,
    'transitions-contrast': 17,
    'transitions-example-emphasis': 11,
    'transitions-cause-effect': 10,
    'transitions-sequence-time': 8,
    'tsp-main-purpose': 20,
    'tsp-overall-structure': 14,
    'tsp-function-of-underlined': 13,
    'coe-textual-illustrate-claim': 43,
    // form-structure-and-sense grammar sub-patterns (P3b). First 4 are >=8 and
    // labeled; pronoun/possessive/comparison are emitted for diagnostic-signal
    // completeness but route Tier-3 (sub-threshold) and carry no chip label.
    'fss-subject-verb-agreement': 20,
    'fss-verb-tense': 15,
    'fss-modifier-placement': 13,
    'fss-parallelism': 9,
    'fss-pronoun': 6,
    'fss-possessive': 5,
    'fss-comparison': 2,
  };

  const counts = {};
  for (const item of rwQuestionBank) {
    const p = deriveRWPattern(item);
    if (p) counts[p] = (counts[p] || 0) + 1;
  }

  it('produces the frozen pattern distribution over the live 648-item bank', () => {
    expect(counts).toEqual(EXPECTED_COUNTS);
  });

  it('tags exactly 274 of 648 items deterministically', () => {
    const tagged = Object.values(counts).reduce((a, b) => a + b, 0);
    expect(tagged).toBe(274);
    expect(rwQuestionBank.length).toBe(648);
  });

  it('every routing-useful pattern (label map) clears the Tier-1 threshold of 8', () => {
    for (const slug of Object.keys(RW_PATTERN_LABELS)) {
      expect(counts[slug]).toBeGreaterThanOrEqual(8);
    }
  });

  it('label map covers the 15 routing patterns and omits the tag-only / sub-threshold slugs', () => {
    expect(Object.keys(RW_PATTERN_LABELS)).toHaveLength(15);
    expect(RW_PATTERN_LABELS['coe-textual-illustrate-claim']).toBeUndefined();
    expect(RW_PATTERN_LABELS['fss-pronoun']).toBeUndefined();
    expect(RW_PATTERN_LABELS['fss-possessive']).toBeUndefined();
    expect(RW_PATTERN_LABELS['fss-comparison']).toBeUndefined();
  });

  it('form-structure-and-sense: scopes to the first paragraph + verb-tense is the fallback', () => {
    const mk = (explanation) => ({ skill: 'form-structure-and-sense', explanation, correctAnswer: 'A', choices: [{ id: 'A', text: 'x' }] });
    // Parallelism wins even though the distractor prose later mentions verb forms.
    expect(deriveRWPattern(mk('The items in a coordinated list must be parallel. Why the wrong answers are tempting: they use a different verb tense.'))).toBe('fss-parallelism');
    // Subject-verb agreement is detected before the generic verb-tense fallback.
    expect(deriveRWPattern(mk('The singular subject requires subject-verb agreement with a singular verb.'))).toBe('fss-subject-verb-agreement');
    // Plain tense item falls to the verb-tense bucket.
    expect(deriveRWPattern(mk('A completed historical event requires the simple past tense.'))).toBe('fss-verb-tense');
    // Subjunctive has no bucket → null → Tier-3.
    expect(deriveRWPattern(mk('Standard English uses the subjunctive mood in a that-clause governed by a verb of recommendation.'))).toBeNull();
  });

  it('returns null for math skills (no misfire on the diagnostic seam)', () => {
    expect(deriveRWPattern({ skill: 'slope-intercept-form', correctAnswer: 'A', choices: [{ id: 'A', text: 'x = 5;' }], question: 'Solve.' })).toBeNull();
    expect(deriveRWPattern({ skills: ['quadratic-formula'], correctAnswer: 'A', choices: [] })).toBeNull();
    expect(deriveRWPattern(null)).toBeNull();
  });

  it('boundaries: punctuation priority dash > semicolon > colon > comma', () => {
    const mk = (text) => ({ skill: 'boundaries', correctAnswer: 'A', choices: [{ id: 'A', text }] });
    expect(deriveRWPattern(mk('one thing—and, another'))).toBe('boundaries-dash'); // dash wins over comma
    expect(deriveRWPattern(mk('a clause; a clause'))).toBe('boundaries-semicolon');
    expect(deriveRWPattern(mk('a clause: a list'))).toBe('boundaries-colon');
    expect(deriveRWPattern(mk('a phrase, a phrase'))).toBe('boundaries-comma');
    expect(deriveRWPattern(mk('no marks here'))).toBeNull();
  });

  it('transitions: longest-phrase-first wins, addition stays Tier-3', () => {
    const mk = (text) => ({ skill: 'transitions', correctAnswer: 'A', choices: [{ id: 'A', text }] });
    expect(deriveRWPattern(mk('On the other hand,'))).toBe('transitions-contrast');
    expect(deriveRWPattern(mk('Therefore,'))).toBe('transitions-cause-effect');
    expect(deriveRWPattern(mk('For example,'))).toBe('transitions-example-emphasis');
    expect(deriveRWPattern(mk('Meanwhile,'))).toBe('transitions-sequence-time');
    expect(deriveRWPattern(mk('Moreover,'))).toBeNull(); // addition bucket is below threshold
  });

  it('text-structure-and-purpose: derives from the question stem', () => {
    const mk = (question) => ({ skill: 'text-structure-and-purpose', question, correctAnswer: 'A', choices: [{ id: 'A', text: 'x' }] });
    expect(deriveRWPattern(mk('Which choice best states the main purpose of the text?'))).toBe('tsp-main-purpose');
    expect(deriveRWPattern(mk('Which choice best describes the overall structure of the text?'))).toBe('tsp-overall-structure');
    expect(deriveRWPattern(mk('Which choice best describes the function of the underlined sentence?'))).toBe('tsp-function-of-underlined');
  });
});
