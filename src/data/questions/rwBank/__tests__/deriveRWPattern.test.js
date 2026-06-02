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
  };

  const counts = {};
  for (const item of rwQuestionBank) {
    const p = deriveRWPattern(item);
    if (p) counts[p] = (counts[p] || 0) + 1;
  }

  it('produces the frozen pattern distribution over the live 648-item bank', () => {
    expect(counts).toEqual(EXPECTED_COUNTS);
  });

  it('tags exactly 204 of 648 items deterministically', () => {
    const tagged = Object.values(counts).reduce((a, b) => a + b, 0);
    expect(tagged).toBe(204);
    expect(rwQuestionBank.length).toBe(648);
  });

  it('every routing-useful pattern (label map) clears the Tier-1 threshold of 8', () => {
    for (const slug of Object.keys(RW_PATTERN_LABELS)) {
      expect(counts[slug]).toBeGreaterThanOrEqual(8);
    }
  });

  it('label map covers the 11 routing patterns and omits the tag-only coe-textual', () => {
    expect(Object.keys(RW_PATTERN_LABELS)).toHaveLength(11);
    expect(RW_PATTERN_LABELS['coe-textual-illustrate-claim']).toBeUndefined();
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
