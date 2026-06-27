/**
 * Regression for the "1370 composite, then Math 210 on review" bug.
 *
 * Root cause: a reconstructed review test that lost its per-module `section`
 * makes scoreTest bucket EVERY module into 'default' (a MATH key), collapsing the
 * whole 98-item test into one Math section scored on the 44-item curve — which
 * surfaces as ~200-210. These tests pin that:
 *   1. a full test WITH per-module sections scores as a multi-section composite, and
 *   2. stripping `section` collapses it (documents why the field is load-bearing),
 * so the App.jsx review reconstruction must always preserve `section`.
 */

import { scoreTest } from '../irtEngine';

const q = (id) => ({
  id,
  type: 'multiple-choice',
  question: `Q${id}`,
  choices: [{ id: 'a', text: 'A' }, { id: 'b', text: 'B' }, { id: 'c', text: 'C' }, { id: 'd', text: 'D' }],
  correctAnswer: 'a',
  difficulty: 'medium',
  band: 'medium',
  skills: ['x'],
});

const mod = (title, section, n) => ({
  title,
  section,
  questions: Array.from({ length: n }, (_, i) => q(`${title}-${i}`)),
});

// A full-length SAT shape: R&W (54) + Math (44), NO top-level test.section
// (real full tests rely entirely on per-module section — see data/practiceTests).
const buildFullTest = () => ({
  id: 'regression-full-test',
  modules: [
    mod('RW1', 'reading-writing', 27),
    mod('RW2', 'reading-writing', 27),
    mod('M1', 'math', 22),
    mod('M2', 'math', 22),
  ],
});

const allCorrect = (test) => {
  const answers = {};
  test.modules.forEach((m, mi) => m.questions.forEach((_, qi) => { answers[`${mi}-${qi}`] = 'a'; }));
  return answers;
};

const stripSections = (test) => ({
  ...test,
  modules: test.modules.map(({ section, ...rest }) => rest),
});

describe('scoreTest section integrity', () => {
  it('scores a full test (sections intact) as a multi-section composite = sum of sections', () => {
    const test = buildFullTest();
    const scored = scoreTest(test, allCorrect(test), { mathRoute: 'hard' });

    expect(scored.isMultiSection).toBe(true);
    expect(scored.sectionScores.math).toBeGreaterThan(0);
    expect(scored.sectionScores['reading-writing']).toBeGreaterThan(0);
    // Composite is the SUM of two 200-800 sections — far above any single section.
    expect(scored.sectionScore).toBe(
      scored.sectionScores.math + scored.sectionScores['reading-writing']
    );
    expect(scored.sectionScore).toBeGreaterThan(1010);
  });

  it('COLLAPSES to a single Math bucket when modules lose their section (the bug)', () => {
    const test = stripSections(buildFullTest());
    const scored = scoreTest(test, allCorrect(test), { mathRoute: 'hard' });

    // Every module -> 'default' (a MATH key): one bucket, not a composite.
    expect(scored.isMultiSection).toBe(false);
    expect(scored.sectionScores.math).toBeUndefined();
    expect(scored.sectionScores['reading-writing']).toBeUndefined();
    expect(scored.sectionScores.default).toBeDefined();
    // A single 200-800 section, never the ~1370 composite the student earned.
    expect(scored.sectionScore).toBeLessThanOrEqual(800);
  });

  it('a collapsed test with no graded-correct answers lands at the ~200-210 floor (the fingerprint)', () => {
    const test = stripSections(buildFullTest());
    const scored = scoreTest(test, {}, { mathRoute: 'hard' }); // 0/98 correct

    expect(scored.isMultiSection).toBe(false);
    expect(scored.sectionScore).toBeLessThanOrEqual(220);
  });
});
