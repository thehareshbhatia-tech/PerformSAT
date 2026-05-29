import { runDiagnostic } from '../diagnosticEngine';
import { scoreTest } from '../scoring';

// Regression tests for the Phase-1 correctness batch (autoplan, 2026-05-29):
//   1.1 — grading follows the modules actually passed (effectiveModules),
//         not a stale/Hard key.
//   1.2 — the 6-class taxonomy works on the FIRST diagnostic (empty
//         skillProgress), because in-test accuracy seeds classifyError.
//   1.7 — a single 0/1 miss does not flag a skill weak.
//
// Choices use non-numeric text so detectTrapAnswer (which parses numbers out
// of choice text) stays out of the way and items fall through to the
// mastery-based branches we are exercising.

const mkQ = ({ id, skills, correctAnswer = 'B', difficulty = 'medium' }) => ({
  id,
  type: 'multiple-choice',
  difficulty,
  skills,
  correctAnswer,
  choices: [
    { id: 'A', text: 'alpha' },
    { id: 'B', text: 'bravo' },
    { id: 'C', text: 'charlie' },
    { id: 'D', text: 'delta' },
  ],
  explanation: 'Plain explanation, no SAT Pattern header.',
});

const mkTest = (questions, extra = {}) => ({
  id: 'synthetic-test',
  title: 'Synthetic test',
  modules: [{ id: 'module-1', section: 'math', questions }],
  ...extra,
});

// Telemetry that avoids the time-pressure and careless branches so a wrong
// item is classified purely on mastery.
const calmTelemetry = (keys) => ({
  questionDetails: Object.fromEntries(keys.map((k) => [k, { timeSpent: 60 }])),
});

describe('1.1 — grading follows the modules passed to runDiagnostic', () => {
  // PracticeTest passes `{ ...test, modules: effectiveModules }`; when a
  // student routes to Easy Module 2, effectiveModules carries the Easy keys.
  // Grading against the original (Hard) test.modules would score Easy answers
  // against Hard keys. This pins that runDiagnostic grades the modules it is
  // given.
  it('all-correct against the passed (Easy) key scores 100%', () => {
    const easyTest = mkTest([
      mkQ({ id: 1, skills: ['ratios'], correctAnswer: 'B' }),
      mkQ({ id: 2, skills: ['ratios'], correctAnswer: 'B' }),
    ]);
    const answers = { '0-0': 'B', '0-1': 'B' };
    const result = runDiagnostic(easyTest, answers, { questionDetails: {} });
    expect(result.score.percentCorrect).toBe(100);
  });

  it('the SAME answers graded against a different (Hard) key are NOT 100%', () => {
    const hardTest = mkTest([
      mkQ({ id: 1, skills: ['ratios'], correctAnswer: 'A' }),
      mkQ({ id: 2, skills: ['ratios'], correctAnswer: 'A' }),
    ]);
    const answers = { '0-0': 'B', '0-1': 'B' }; // would be correct on the Easy key
    const result = runDiagnostic(hardTest, answers, { questionDetails: {} });
    expect(result.score.percentCorrect).toBeLessThan(100);
  });
});

describe('1.2 — 6-class taxonomy works on the first diagnostic (empty skillProgress)', () => {
  const bombed = mkTest([
    mkQ({ id: 1, skills: ['ratios'] }),
    mkQ({ id: 2, skills: ['ratios'] }),
    mkQ({ id: 3, skills: ['ratios'] }),
    mkQ({ id: 4, skills: ['ratios'] }),
  ]);
  const allWrong = { '0-0': 'A', '0-1': 'A', '0-2': 'A', '0-3': 'A' };
  const telemetry = calmTelemetry(['0-0', '0-1', '0-2', '0-3']);

  it('classifies a bombed skill as a conceptual gap, not a default heuristic', () => {
    // With empty skillProgress, the old code saw mastery=50 for every skill
    // and never produced CONCEPTUAL_GAP. The in-test seed makes mastery=0 for
    // a 0/4 skill, so the weak-mastery branch fires.
    const result = runDiagnostic(bombed, allWrong, telemetry, {});
    const weak = result.skillAnalysis.weakSkills.find((w) => w.skillId === 'ratios');
    expect(weak).toBeDefined();
    expect(weak.primaryErrorType).toBe('conceptual_gap');
  });

  it('real historical mastery wins over the in-test seed', () => {
    // A student with strong history who bombs today should NOT be diagnosed
    // as a conceptual gap — the merge lets history take precedence.
    const result = runDiagnostic(bombed, allWrong, telemetry, {
      ratios: { mastery: 90, attempts: 10 },
    });
    const weak = result.skillAnalysis.weakSkills.find((w) => w.skillId === 'ratios');
    expect(weak).toBeDefined();
    expect(weak.primaryErrorType).not.toBe('conceptual_gap');
  });
});

describe('1.7 — isWeak requires >= 2 attempts', () => {
  it('does NOT flag a skill weak on a single 0/1 miss', () => {
    const test = mkTest([mkQ({ id: 1, skills: ['ratios'] })]);
    const result = runDiagnostic(test, { '0-0': 'A' }, { questionDetails: {} });
    const weak = result.skillAnalysis.weakSkills.find((w) => w.skillId === 'ratios');
    expect(weak).toBeUndefined();
  });

  it('DOES flag a skill weak on 0/2', () => {
    const test = mkTest([
      mkQ({ id: 1, skills: ['ratios'] }),
      mkQ({ id: 2, skills: ['ratios'] }),
    ]);
    const result = runDiagnostic(test, { '0-0': 'A', '0-1': 'A' }, { questionDetails: {} });
    const weak = result.skillAnalysis.weakSkills.find((w) => w.skillId === 'ratios');
    expect(weak).toBeDefined();
  });
});

describe('1.3 — diagnostic score + projections use the real response vector', () => {
  const test = mkTest([
    mkQ({ id: 1, skills: ['ratios'], correctAnswer: 'B', difficulty: 'easy' }),
    mkQ({ id: 2, skills: ['ratios'], correctAnswer: 'B', difficulty: 'medium' }),
    mkQ({ id: 3, skills: ['ratios'], correctAnswer: 'B', difficulty: 'hard' }),
    mkQ({ id: 4, skills: ['ratios'], correctAnswer: 'B', difficulty: 'medium' }),
  ]);
  // 2 right (easy + a medium), 2 wrong (hard + a medium)
  const answers = { '0-0': 'B', '0-1': 'A', '0-2': 'A', '0-3': 'B' };

  it('diagnostic score.scaled equals the headline scoreTest score (no two-path disagreement)', () => {
    const diag = runDiagnostic(test, answers, { questionDetails: {} });
    const scored = scoreTest(test, answers, {});
    expect(diag.score.scaled).toBe(scored.sectionScore);
  });

  it('the projection baseline equals the diagnostic score (one baseline)', () => {
    const diag = runDiagnostic(test, answers, { questionDetails: {} });
    expect(diag.scoreProjection.currentScore).toBe(diag.score.scaled);
  });

  it('fixing missed items projects a non-negative point gain', () => {
    const diag = runDiagnostic(test, answers, { questionDetails: {} });
    expect(diag.scoreProjection.quickWins.projectedGain).toBeGreaterThanOrEqual(0);
  });
});
