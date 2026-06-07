import { getRecentMisses } from '../recentMisses';

const attempt = (overrides = {}) => ({
  completedAt: '2026-06-05T10:00:00Z',
  routeTaken: 'hard',
  diagnosticData: {
    questionDetails: {
      '0-0': { isCorrect: true, skills: ['ratios'], difficulty: 'easy', timeSpent: 30 },
      '0-1': { isCorrect: false, skills: ['slope-intercept-form'], difficulty: 'medium', timeSpent: 95 },
      '1-2': { isCorrect: false, skills: ['quadratic-equations'], difficulty: 'hard', timeSpent: 140 },
      '1-3': { isCorrect: false, skills: ['percents'], difficulty: 'easy', timeSpent: 20 },
      '1-4': { isCorrect: false, skills: ['circle-equations'], difficulty: 'hard', timeSpent: 60 },
    },
  },
  ...overrides,
});

const results = (a = attempt()) => ({
  'practice-test-1': { attempts: [a], lastAttemptAt: a.completedAt },
});

const bundle = {
  id: 'practice-test-1',
  modules: [
    {
      section: 'math',
      questions: [
        { id: 1, question: 'Q00 stem', skills: ['ratios'] },
        { id: 2, question: 'Q01 stem about slope', skills: ['slope-intercept-form'] },
      ],
    },
    {
      section: 'math',
      questions: [
        { id: 1, question: 'M2 q0', skills: ['x'] },
        { id: 2, question: 'M2 q1', skills: ['y'] },
        { id: 3, question: 'M2 q2 quadratics', skills: ['quadratic-equations'] },
        { id: 4, question: 'M2 q3 percents', skills: ['percents'] },
        { id: 5, question: 'M2 q4 circles', skills: ['circle-equations'] },
      ],
    },
  ],
  module2Easy: {
    questions: [
      { id: 1, question: 'EASY q0', skills: ['x'] },
      { id: 2, question: 'EASY q1', skills: ['y'] },
      { id: 3, question: 'EASY q2', skills: ['linear-equations'] },
      { id: 4, question: 'EASY q3', skills: ['percents'] },
      { id: 5, question: 'EASY q4', skills: ['circle-equations'] },
    ],
  },
};

describe('getRecentMisses', () => {
  it('returns [] with no results / no diagnosticData', () => {
    expect(getRecentMisses(null)).toEqual([]);
    expect(getRecentMisses({})).toEqual([]);
    expect(getRecentMisses(results(attempt({ diagnosticData: null })))).toEqual([]);
  });

  it('returns only misses, hardest-then-slowest first, capped at 3', () => {
    const out = getRecentMisses(results());
    expect(out).toHaveLength(3);
    expect(out.map(m => m.key)).toEqual(['1-2', '1-4', '0-1']); // hard 140s, hard 60s, medium
    expect(out.every(m => m.skills.length > 0)).toBe(true);
  });

  it('resolves stems from the bundle when skills agree', () => {
    const out = getRecentMisses(results(), { resolveTest: () => bundle });
    expect(out[0].stem).toBe('M2 q2 quadratics');
    expect(out[0].question.id).toBe(3);
    expect(out[0].question.section).toBe('math');
  });

  it('reconstructs the easy-route Module 2 before resolving stems', () => {
    const out = getRecentMisses(results(attempt({ routeTaken: 'easy' })), { resolveTest: () => bundle });
    // 1-2 recorded skills=quadratic-equations, but easy variant has linear-equations
    // at that slot → skills mismatch → stem dropped, synthetic question kept.
    const m12 = out.find(m => m.key === '1-2');
    expect(m12.stem).toBeNull();
    expect(m12.question).toEqual({ skills: ['quadratic-equations'], section: 'math' });
    // 1-4 matches in both variants → easy stem shown.
    const m14 = out.find(m => m.key === '1-4');
    expect(m14.stem).toBe('EASY q4');
  });

  it('drops stems (never the row) when the bundle is unresolvable', () => {
    const out = getRecentMisses(results(), { resolveTest: () => null });
    expect(out).toHaveLength(3);
    expect(out.every(m => m.stem === null)).toBe(true);
    expect(out[0].question).toEqual({ skills: ['quadratic-equations'], section: 'math' });
  });

  it('tags rw sections for the retry dispatcher', () => {
    const rwBundle = {
      modules: [{ section: 'reading-writing', questions: [null, { id: 'rw-1', question: 'RW stem', skills: ['boundaries'] }] }],
    };
    const a = attempt({
      diagnosticData: { questionDetails: { '0-1': { isCorrect: false, skills: ['boundaries'], difficulty: 'medium', timeSpent: 50 } } },
    });
    const out = getRecentMisses(results(a), { resolveTest: () => rwBundle });
    expect(out[0].question.section).toBe('rw');
    expect(out[0].stem).toBe('RW stem');
  });
});
