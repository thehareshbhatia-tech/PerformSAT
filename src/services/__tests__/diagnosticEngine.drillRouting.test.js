import { runDiagnostic } from '../diagnosticEngine';

// ── Test fixtures ──────────────────────────────────────────────────────────
// Minimal synthetic tests sized to exercise the runDiagnostic →
// analyzeSkills → skillMap[skillId].missedPatterns pipeline introduced
// by docs/DRILL_ROUTING_PLAN.md. The chosen skill ('ratios') is a real
// skill in the bank taxonomy. SAT Pattern titles match the test-bundle
// authoring convention so extractSatPattern normalizes them cleanly.

const mkQ = ({ id, skills, satPatternTitle, correctAnswer = 'B', difficulty = 'easy' }) => ({
  id,
  type: 'multiple-choice',
  difficulty,
  skills,
  correctAnswer,
  choices: [
    { id: 'A', text: 'wrong' },
    { id: 'B', text: 'right' },
    { id: 'C', text: 'also-wrong' },
    { id: 'D', text: 'still-wrong' },
  ],
  explanation: satPatternTitle
    ? `**SAT Pattern: ${satPatternTitle}**\n\nChoice ${correctAnswer} is correct.\n\nDetails.`
    : 'No SAT Pattern header here.',
});

const mkTest = (questions) => ({
  id: 'synthetic-test',
  title: 'Synthetic test',
  modules: [{ id: 'module-1', questions }],
});

describe('runDiagnostic → missedPatterns aggregation', () => {
  it('captures the SAT Pattern of a single wrong item into the weakness', () => {
    // 5 questions on the same skill, student gets 3 wrong (≥50% wrong
    // is needed to trip `isWeak` — see analyzeSkills `< 0.5` rule).
    const test = mkTest([
      mkQ({ id: 1, skills: ['ratios'], satPatternTitle: 'Sum of Parts Ratio' }),
      mkQ({ id: 2, skills: ['ratios'], satPatternTitle: 'Reverse-Percent' }),
      mkQ({ id: 3, skills: ['ratios'], satPatternTitle: 'Sum of Parts Ratio' }),
      mkQ({ id: 4, skills: ['ratios'], satPatternTitle: 'Linear Cost Model' }),
      mkQ({ id: 5, skills: ['ratios'], satPatternTitle: 'Linear Cost Model' }),
    ]);
    // Student gets Q1, Q2, Q3 wrong (3/5 = 60% wrong → isWeak true)
    const answers = { '0-0': 'A', '0-1': 'A', '0-2': 'A', '0-3': 'B', '0-4': 'B' };

    const result = runDiagnostic(test, answers, { questionDetails: {} });

    const weak = result.skillAnalysis.weakSkills.find(w => w.skillId === 'ratios');
    expect(weak).toBeDefined();
    // 3 wrong items contribute their distinct SAT Patterns. Q1+Q3 share
    // 'Sum of Parts Ratio' (deduped), Q2 contributes 'Reverse-Percent'.
    expect(weak.missedPatterns).toEqual(
      expect.arrayContaining(['sum-of-parts-ratio', 'reverse-percent']),
    );
    // 'Linear Cost Model' came from correct items → must NOT be present.
    expect(weak.missedPatterns).not.toContain('linear-cost-model');
  });

  it('dedupes when multiple wrong items share the same SAT Pattern', () => {
    const test = mkTest([
      mkQ({ id: 1, skills: ['ratios'], satPatternTitle: 'Reverse-Percent' }),
      mkQ({ id: 2, skills: ['ratios'], satPatternTitle: 'Reverse-Percent' }),
      mkQ({ id: 3, skills: ['ratios'], satPatternTitle: 'Reverse-Percent' }),
    ]);
    const answers = { '0-0': 'A', '0-1': 'A', '0-2': 'A' }; // all 3 wrong
    const result = runDiagnostic(test, answers, { questionDetails: {} });
    const weak = result.skillAnalysis.weakSkills.find(w => w.skillId === 'ratios');
    expect(weak.missedPatterns).toEqual(['reverse-percent']);
  });

  it('handles wrong items lacking a SAT Pattern header (graceful skip)', () => {
    const test = mkTest([
      mkQ({ id: 1, skills: ['ratios'], satPatternTitle: 'Reverse-Percent' }),
      mkQ({ id: 2, skills: ['ratios'], satPatternTitle: null }), // no header
      mkQ({ id: 3, skills: ['ratios'], satPatternTitle: null }),
    ]);
    const answers = { '0-0': 'A', '0-1': 'A', '0-2': 'A' };
    const result = runDiagnostic(test, answers, { questionDetails: {} });
    const weak = result.skillAnalysis.weakSkills.find(w => w.skillId === 'ratios');
    expect(weak.missedPatterns).toEqual(['reverse-percent']);
  });

  it('correct items never contribute to missedPatterns', () => {
    const test = mkTest([
      mkQ({ id: 1, skills: ['ratios'], satPatternTitle: 'Should Not Appear' }),
      mkQ({ id: 2, skills: ['ratios'], satPatternTitle: 'Reverse-Percent' }),
      mkQ({ id: 3, skills: ['ratios'], satPatternTitle: 'Should Not Appear Either' }),
    ]);
    // Only Q2 is wrong; Q1 and Q3 are correct.
    const answers = { '0-0': 'B', '0-1': 'A', '0-2': 'B' };
    const result = runDiagnostic(test, answers, { questionDetails: {} });
    const skill = result.skillAnalysis.allSkills.find(s => s.skillId === 'ratios');
    expect(skill.missedPatterns).toEqual(['reverse-percent']);
    expect(skill.missedPatterns).not.toContain('should-not-appear');
    expect(skill.missedPatterns).not.toContain('should-not-appear-either');
  });

  it('weakness output is always serialized as an Array, never a Set', () => {
    // Set instances do not survive Firestore serialization. Ensure
    // missedPatterns is a plain array at the analyzeSkills exit.
    const test = mkTest([
      mkQ({ id: 1, skills: ['ratios'], satPatternTitle: 'Reverse-Percent' }),
      mkQ({ id: 2, skills: ['ratios'], satPatternTitle: 'Reverse-Percent' }),
    ]);
    const answers = { '0-0': 'A', '0-1': 'A' };
    const result = runDiagnostic(test, answers, { questionDetails: {} });
    const skill = result.skillAnalysis.allSkills.find(s => s.skillId === 'ratios');
    expect(Array.isArray(skill.missedPatterns)).toBe(true);
    expect(skill.missedPatterns).not.toBeInstanceOf(Set);
  });

  it('strong skills (≥80% correct) still carry an empty missedPatterns array', () => {
    const test = mkTest([
      mkQ({ id: 1, skills: ['ratios'], satPatternTitle: 'A' }),
      mkQ({ id: 2, skills: ['ratios'], satPatternTitle: 'B' }),
      mkQ({ id: 3, skills: ['ratios'], satPatternTitle: 'C' }),
      mkQ({ id: 4, skills: ['ratios'], satPatternTitle: 'D' }),
      mkQ({ id: 5, skills: ['ratios'], satPatternTitle: 'E' }),
    ]);
    // 100% correct
    const answers = { '0-0': 'B', '0-1': 'B', '0-2': 'B', '0-3': 'B', '0-4': 'B' };
    const result = runDiagnostic(test, answers, { questionDetails: {} });
    const skill = result.skillAnalysis.allSkills.find(s => s.skillId === 'ratios');
    expect(skill.missedPatterns).toEqual([]);
    // Sanity: this skill flowed into the strong path.
    expect(skill.isStrong).toBe(true);
  });

  it('satPattern is stored on every questionAnalysis record (correct + wrong)', () => {
    const test = mkTest([
      mkQ({ id: 1, skills: ['ratios'], satPatternTitle: 'Correct Item' }),
      mkQ({ id: 2, skills: ['ratios'], satPatternTitle: 'Wrong Item' }),
    ]);
    const answers = { '0-0': 'B', '0-1': 'A' };
    const result = runDiagnostic(test, answers, { questionDetails: {} });
    expect(result.questionAnalysis[0].satPattern).toBe('correct-item');
    expect(result.questionAnalysis[1].satPattern).toBe('wrong-item');
  });

  it('satPattern is null on records whose explanation lacks the header', () => {
    const test = mkTest([
      mkQ({ id: 1, skills: ['ratios'], satPatternTitle: null }),
    ]);
    const answers = { '0-0': 'A' };
    const result = runDiagnostic(test, answers, { questionDetails: {} });
    expect(result.questionAnalysis[0].satPattern).toBeNull();
  });
});
