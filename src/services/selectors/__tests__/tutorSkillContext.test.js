import { buildTutorSkillContext } from '../tutorSkillContext';

// A minimal practiceTestResults fixture. buildLongitudinalEvidence reads
// attempts[].diagnosticData.questionDetails[].{ isCorrect, skills }, so a
// non-blank attempt (rawScore > 0) with question details is all we need.
const attempt = (testId, completedAt, questionDetails) => ({
  testId,
  testTitle: testId,
  completedAt,
  rawScore: 20,
  scaledScore: 600,
  diagnosticData: { questionDetails },
});

const q = (isCorrect, skills) => ({ isCorrect, skills });

describe('buildTutorSkillContext', () => {
  it('returns "" with no data', () => {
    expect(buildTutorSkillContext({})).toBe('');
    expect(buildTutorSkillContext({ practiceTestResults: {}, skills: ['slope-from-points'] })).toBe('');
    expect(buildTutorSkillContext({ practiceTestResults: { t1: { attempts: [] } }, skills: [] })).toBe('');
    expect(buildTutorSkillContext({ practiceTestResults: { t1: { attempts: [] } } })).toBe('');
  });

  it('includes demonstrated accuracy and attempt count for the current skill', () => {
    const practiceTestResults = {
      t1: {
        attempts: [
          attempt('t1', '2026-01-01', [
            q(true, ['slope-from-points']),
            q(false, ['slope-from-points']),
            q(false, ['slope-from-points']),
            q(false, ['slope-from-points']),
          ]),
        ],
      },
    };
    const block = buildTutorSkillContext({ practiceTestResults, skills: ['slope-from-points'] });
    expect(block).toContain('>>> STUDENT SKILL HISTORY <<<');
    expect(block).toContain('This question tests:');
    expect(block).toContain('25% over 4 past attempts'); // 1/4 correct
  });

  it('lists weakest OTHER skills in the same domain as related weak areas', () => {
    const practiceTestResults = {
      t1: {
        attempts: [
          attempt('t1', '2026-01-01', [
            q(true, ['slope-from-points']),
            // Same-domain (algebra) other skills, both weak.
            q(false, ['slope-intercept-form']),
            q(false, ['slope-intercept-form']),
            q(false, ['word-problem-to-equation']),
            q(true, ['word-problem-to-equation']),
          ]),
        ],
      },
    };
    const block = buildTutorSkillContext({ practiceTestResults, skills: ['slope-from-points'] });
    expect(block).toContain('Related weak areas:');
    // slope-intercept-form (0%) should rank before word-problem-to-equation (50%).
    expect(block).toContain('Writing in Slope-Intercept Form (0%)');
  });

  it('respects the ~600 character cap', () => {
    const details = [];
    // Many attempts across many algebra skills to bloat the candidate block.
    const skillsBank = ['slope-from-points', 'slope-intercept-form', 'word-problem-to-equation', 'table-to-equation'];
    skillsBank.forEach((s) => { for (let i = 0; i < 4; i++) details.push(q(i % 2 === 0, [s])); });
    const practiceTestResults = { t1: { attempts: [attempt('t1', '2026-01-01', details)] } };
    const block = buildTutorSkillContext({ practiceTestResults, skills: skillsBank });
    expect(block.length).toBeLessThanOrEqual(600);
  });

  it('does not crash on malformed history and returns a string', () => {
    const practiceTestResults = {
      t1: { attempts: [{ completedAt: '2026-01-01', rawScore: 5, diagnosticData: { questionDetails: null } }] },
      t2: { attempts: null },
      t3: null,
    };
    expect(() => buildTutorSkillContext({ practiceTestResults, skills: ['slope-from-points'] })).not.toThrow();
    expect(typeof buildTutorSkillContext({ practiceTestResults, skills: ['slope-from-points'] })).toBe('string');
  });
});
