import { rwQuestionBank } from '../index';
import { deriveRWPattern } from '../deriveRWPattern';

/**
 * Pins the data behind the practice-bank "question types" breakdown for R&W
 * (PracticeBank.jsx buildRWCategories). Grammar/structure skills must surface
 * multiple drillable sub-types via deriveRWPattern, mirroring how math topics
 * show "· N question types". Reading-comprehension skills, which carry no
 * deterministic mechanical sub-type, must surface NONE.
 *
 * Regression guard: if deriveRWPattern coverage ever collapses, grammar would
 * silently revert to a flat, uncategorized topic (the gap this test pins shut).
 */
const MIN_PATTERN_POOL = 4; // matches PracticeBank.MIN_PATTERN_POOL

const skillOf = (q) => q.skill || (Array.isArray(q.skills) ? q.skills[0] : null);
const isDrillable = (q) => Array.isArray(q.choices) && q.choices.length >= 2;

function summarizeSkill(skillSlug) {
  const counts = new Map();
  let items = 0;
  for (const q of rwQuestionBank) {
    if (!isDrillable(q) || skillOf(q) !== skillSlug) continue;
    items += 1;
    const p = deriveRWPattern(q);
    if (p) counts.set(p, (counts.get(p) || 0) + 1);
  }
  const types = [...counts.entries()].filter(([, n]) => n >= MIN_PATTERN_POOL).map(([s]) => s);
  return { items, types };
}

describe('R&W practice bank — question-type breakdown data', () => {
  it('Boundaries surfaces multiple punctuation question types', () => {
    const { items, types } = summarizeSkill('boundaries');
    expect(items).toBeGreaterThan(0);
    expect(types.length).toBeGreaterThanOrEqual(3);
    expect(types).toEqual(expect.arrayContaining(['boundaries-dash', 'boundaries-semicolon']));
  });

  it('Form, Structure, and Sense surfaces multiple grammar question types', () => {
    const { items, types } = summarizeSkill('form-structure-and-sense');
    expect(items).toBeGreaterThan(0);
    expect(types.length).toBeGreaterThanOrEqual(4);
    expect(types).toEqual(expect.arrayContaining([
      'fss-subject-verb-agreement', 'fss-verb-tense', 'fss-parallelism',
    ]));
  });

  it('reading-comprehension skills have items but NO mechanical question types', () => {
    for (const slug of ['central-ideas-and-details', 'words-in-context']) {
      const { items, types } = summarizeSkill(slug);
      expect(items).toBeGreaterThan(0);
      expect(types).toHaveLength(0);
    }
  });
});
