import { rwQuestionBank } from '../index';
import { deriveRWQuestionType } from '../deriveRWPattern';

/**
 * Pins the data behind the practice-bank "question types" breakdown for R&W
 * (PracticeBank.jsx buildRWCategories). EVERY R&W skill must surface multiple
 * drillable sub-types via deriveRWPattern, mirroring how math topics show
 * "· N question types": grammar/structure skills via the mechanical signal in
 * the correct answer, and the seven reading-comprehension skills via the
 * authoritative rwReadingType.js map (added 2026-06-18 — before that, reading
 * skills surfaced NO types and rendered as a flat "Drill" button).
 *
 * Regression guard: if deriveRWPattern coverage ever collapses, a topic would
 * silently revert to a flat, uncategorized button (the gap this test pins shut).
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
    const p = deriveRWQuestionType(q);
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

  it('Central Ideas surfaces main-idea vs supporting-detail types', () => {
    const { items, types } = summarizeSkill('central-ideas-and-details');
    expect(items).toBeGreaterThan(0);
    expect(types).toEqual(expect.arrayContaining(['cid-main-idea', 'cid-supporting-detail']));
  });

  it('Words in Context surfaces multiple context-clue question types', () => {
    const { items, types } = summarizeSkill('words-in-context');
    expect(items).toBeGreaterThan(0);
    expect(types.length).toBeGreaterThanOrEqual(3);
    expect(types).toEqual(expect.arrayContaining(['wic-restatement', 'wic-contrast', 'wic-cause-effect']));
  });

  it('Inferences surfaces multiple logical-relation question types', () => {
    const { items, types } = summarizeSkill('inferences');
    expect(items).toBeGreaterThan(0);
    expect(types).toEqual(expect.arrayContaining(['inf-cause-effect', 'inf-generalization-conclusion']));
  });

  it('every reading-comprehension skill now surfaces at least one drillable type', () => {
    // The gap this whole change closes: these seven skills used to render as a
    // flat "Drill" button with zero sub-types.
    const READING = [
      'words-in-context', 'central-ideas-and-details', 'inferences',
      'command-of-evidence-quantitative', 'command-of-evidence-textual',
      'cross-text-connections', 'rhetorical-synthesis',
    ];
    for (const slug of READING) {
      const { items, types } = summarizeSkill(slug);
      expect(items).toBeGreaterThan(0);
      expect(types.length).toBeGreaterThanOrEqual(1);
    }
  });
});
