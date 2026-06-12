import { runDiagnostic } from '../diagnosticEngine';

// Pins that analyzeTrends delegates blank-attempt filtering to the shared
// isBlankAttempt selector (latestTestStats.js). The legacy "Test 23" class —
// rawScore null + score pinned at the IRT floor, written by the 2026-04→06
// era before answeredCount existed — must not chart in the diagnosis Score
// Trend or feed its deltas.

const mkQ = ({ id, correctAnswer = 'B' }) => ({
  id,
  type: 'multiple-choice',
  difficulty: 'medium',
  skills: ['ratios'],
  correctAnswer,
  choices: [
    { id: 'A', text: 'alpha' },
    { id: 'B', text: 'bravo' },
    { id: 'C', text: 'charlie' },
    { id: 'D', text: 'delta' },
  ],
  explanation: 'Plain explanation, no SAT Pattern header.',
});

const mkTest = (questions) => ({
  id: 'synthetic-test',
  title: 'Synthetic test',
  modules: [{ id: 'module-1', section: 'math', questions }],
});

describe('analyzeTrends (via runDiagnostic) — legacy blank rows', () => {
  const test = mkTest([mkQ({ id: 1 })]);
  const answers = { '0-0': 'B' };
  const previousTests = {
    't1': {
      testTitle: 'Practice Test 1',
      attempts: [{
        scaledScore: 680,
        rawScore: 40,
        totalQuestions: 44,
        completedAt: '2026-06-01T10:00:00.000Z',
      }],
    },
    't23': {
      testTitle: 'Practice Test 23',
      attempts: [{
        // THE TEST-23 SHAPE: era-E row, rawScore coerced to null, composite floor
        scaledScore: 400,
        isMultiSection: true,
        rawScore: null,
        totalQuestions: null,
        completedAt: '2026-06-08T10:00:00.000Z',
      }],
    },
  };

  it('excludes rawScore-null floor rows from testHistory', () => {
    const result = runDiagnostic(test, answers, { questionDetails: {} }, {}, {}, previousTests);
    const ids = result.trendAnalysis.testHistory.map((h) => h.testId);
    expect(ids).toContain('t1');
    expect(ids).not.toContain('t23');
  });

  it('still excludes the explicit-signal blanks (answeredCount 0)', () => {
    const withExplicitBlank = {
      ...previousTests,
      't9': {
        attempts: [{
          scaledScore: 400,
          isMultiSection: true,
          rawScore: 0,
          answeredCount: 0,
          completedAt: '2026-06-09T10:00:00.000Z',
        }],
      },
    };
    const result = runDiagnostic(test, answers, { questionDetails: {} }, {}, {}, withExplicitBlank);
    const ids = result.trendAnalysis.testHistory.map((h) => h.testId);
    expect(ids).not.toContain('t9');
  });

  it('keeps a participated floor row (rawScore > 0) in testHistory', () => {
    const withParticipatedFloor = {
      ...previousTests,
      't7': {
        attempts: [{
          scaledScore: 400,
          isMultiSection: true,
          rawScore: 3,
          totalQuestions: 98,
          completedAt: '2026-06-07T10:00:00.000Z',
        }],
      },
    };
    const result = runDiagnostic(test, answers, { questionDetails: {} }, {}, {}, withParticipatedFloor);
    const ids = result.trendAnalysis.testHistory.map((h) => h.testId);
    expect(ids).toContain('t7');
  });
});
