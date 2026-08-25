import { loadDiagnosticSitting, rebuildSittingTest, DIAGNOSTIC_SITTING_TEST_ID } from '../diagnosticSittingLoader';
import { loadAttemptSnapshot } from '../practiceTestService';

jest.mock('../practiceTestService', () => ({ loadAttemptSnapshot: jest.fn() }));

const SNAP = {
  isDiagnostic: true,
  testId: 'mini-diagnostic-v1',
  diagnosticVariant: 'full',
  completedAt: '2026-08-24T00:00:00.000Z',
  questionsSnapshot: [
    { id: 'rw-2', type: 'mc', stem: 'Second R&W', choices: [{ id: 'A', text: 'a' }], correctAnswer: 'A', skills: ['transitions'], domain: 'expression-of-ideas', section: 'reading-writing', moduleIndex: 0, questionIndex: 1, passage: 'P2' },
    { id: 'rw-1', type: 'mc', stem: 'First R&W', choices: [{ id: 'A', text: 'a' }], correctAnswer: 'B', skills: ['inferences'], domain: 'information-and-ideas', section: 'reading-writing', moduleIndex: 0, questionIndex: 0, passage: 'P1' },
    { id: 'm-1', type: 'spr', stem: 'x=?', choices: null, correctAnswer: '4', skills: ['linear-equations'], domain: 'algebra', section: 'math', moduleIndex: 1, questionIndex: 0, questionTable: { rows: [['a', 'b']] } },
  ],
  answers: { '0-0': 'B', '0-1': 'C', '1-0': '4' },
  diagnosticData: { questionDetails: { '0-0': { timeSpent: 30 } }, navigationPattern: 'linear' },
  scoreBand: { low: 1000, high: 1100 },
  routes: { rw: 'hard', math: 'easy' },
};

describe('rebuildSittingTest', () => {
  it('regroups the flat snapshot into ordered modules with the runner/engine question shape', () => {
    const test = rebuildSittingTest(SNAP);
    expect(test.id).toBe('mini-diagnostic-v1');
    expect(test.isMiniDiagnostic).toBe(true);
    expect(test.modules).toHaveLength(2);
    expect(test.modules[0].section).toBe('reading-writing');
    expect(test.modules[0].title).toBe('Reading & Writing Module 1');
    // questionIndex wins over array order.
    expect(test.modules[0].questions.map((q) => q.id)).toEqual(['rw-1', 'rw-2']);
    expect(test.modules[0].questions[0]).toEqual(expect.objectContaining({ question: 'First R&W', stem: 'First R&W', passage: 'P1', correctAnswer: 'B', domain: 'information-and-ideas' }));
    expect(test.modules[1].section).toBe('math');
    expect(test.modules[1].questions[0].questionTable).toEqual({ rows: [['a', 'b']] });
  });

  it('returns null without questions', () => {
    expect(rebuildSittingTest(null)).toBeNull();
    expect(rebuildSittingTest({ questionsSnapshot: [] })).toBeNull();
  });
});

describe('loadDiagnosticSitting', () => {
  it('returns the rebuilt triple for a diagnostic snapshot', async () => {
    loadAttemptSnapshot.mockResolvedValue(SNAP);
    const out = await loadDiagnosticSitting({ userId: 'u1', attemptId: 'a1' });
    expect(loadAttemptSnapshot).toHaveBeenCalledWith('u1', 'a1');
    expect(out.test.id).toBe(DIAGNOSTIC_SITTING_TEST_ID);
    expect(out.answers).toEqual(SNAP.answers);
    expect(out.diagnosticData).toBe(SNAP.diagnosticData);
    expect(out.scoreBand).toEqual({ low: 1000, high: 1100 });
    expect(out.routes).toEqual({ rw: 'hard', math: 'easy' });
    expect(out.attemptId).toBe('a1');
  });

  it('is null for a missing doc, a practice-test attempt, or missing ids', async () => {
    loadAttemptSnapshot.mockResolvedValue(null);
    expect(await loadDiagnosticSitting({ userId: 'u1', attemptId: 'a1' })).toBeNull();
    loadAttemptSnapshot.mockResolvedValue({ ...SNAP, isDiagnostic: undefined });
    expect(await loadDiagnosticSitting({ userId: 'u1', attemptId: 'a1' })).toBeNull();
    expect(await loadDiagnosticSitting({ userId: 'u1' })).toBeNull();
    expect(await loadDiagnosticSitting({})).toBeNull();
  });
});
