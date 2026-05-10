/**
 * completedTests.test.js — unit tests for Past-Test-Review pure selectors.
 *
 * Covers: input shape robustness (null/undefined/empty), sort ordering,
 * filtering by correctness, error-class grouping with skill→class mapping
 * fallback, stats computation.
 */

import {
  itemKey,
  getCompletedTests,
  getLatestAttempt,
  extractItemsFromAttempt,
  getWrongItems,
  groupItemsByErrorClass,
  findErrorClassForItem,
  computeReviewStats,
} from '../completedTests';

const dt = (iso) => new Date(iso).toISOString();

const makeAttempt = ({
  attemptId = 'a1',
  completedAt = dt('2026-05-09T10:00:00Z'),
  rawScore = 30,
  totalQuestions = 44,
  scaledScore = 1100,
  diagnosticData = null,
  moduleScores = [],
} = {}) => ({
  attemptId, completedAt, rawScore, totalQuestions, scaledScore,
  diagnosticData, moduleScores,
});

const makeQuestionDetails = (entries) => {
  const out = {};
  for (const e of entries) {
    out[itemKey(e.module, e.question)] = {
      isCorrect: e.correct,
      timeSpent: e.time ?? 30,
      visits: e.visits ?? 1,
      usedCalculator: e.calc ?? false,
      markedForReview: e.marked ?? false,
      difficulty: e.diff ?? 'medium',
      skills: e.skills ?? [],
      answerChanges: e.changes ?? 0,
    };
  }
  return out;
};

describe('itemKey', () => {
  it('formats `${modIdx}-${qIdx}`', () => {
    expect(itemKey(0, 5)).toBe('0-5');
    expect(itemKey(1, 22)).toBe('1-22');
  });
});

describe('getCompletedTests', () => {
  it('returns [] for null/undefined/non-object input', () => {
    expect(getCompletedTests(null)).toEqual([]);
    expect(getCompletedTests(undefined)).toEqual([]);
    expect(getCompletedTests('nope')).toEqual([]);
  });

  it('returns [] for empty practiceTestResults', () => {
    expect(getCompletedTests({})).toEqual([]);
  });

  it('skips tests with no attempts', () => {
    const data = {
      'test-1': { attempts: [] },
      'test-2': { /* no attempts key */ bestScaledScore: 1200 },
    };
    expect(getCompletedTests(data)).toEqual([]);
  });

  it('returns one entry per test with attempts, sorted by latest completedAt desc', () => {
    const oldA = makeAttempt({ completedAt: dt('2026-04-01T10:00:00Z'), scaledScore: 1100 });
    const newA = makeAttempt({ completedAt: dt('2026-05-09T10:00:00Z'), scaledScore: 1240 });
    const data = {
      'test-old': { testTitle: 'Test Old', attempts: [oldA], bestScaledScore: 1100, bestRawScore: 28, totalAttempts: 1 },
      'test-new': { testTitle: 'Test New', attempts: [newA], bestScaledScore: 1240, bestRawScore: 35, totalAttempts: 1 },
    };
    const result = getCompletedTests(data);
    expect(result.map(r => r.testId)).toEqual(['test-new', 'test-old']);
    expect(result[0].testTitle).toBe('Test New');
    expect(result[0].scaledScore).toBe(1240);
  });

  it('treats attempts[0] as the latest (matches practiceTestService trimAttempts ordering)', () => {
    const newA = makeAttempt({ attemptId: 'newest', completedAt: dt('2026-05-09T10:00:00Z') });
    const oldA = makeAttempt({ attemptId: 'older', completedAt: dt('2026-04-01T10:00:00Z') });
    const data = {
      'test-1': { testTitle: 'T1', attempts: [newA, oldA] },
    };
    const [entry] = getCompletedTests(data);
    expect(entry.latestAttemptId).toBe('newest');
  });

  it('includes bestScaledScore + totalAttempts when present', () => {
    const data = {
      'test-1': {
        testTitle: 'T1',
        attempts: [makeAttempt({ scaledScore: 1100 })],
        bestScaledScore: 1240,
        bestRawScore: 35,
        totalAttempts: 3,
      },
    };
    const [entry] = getCompletedTests(data);
    expect(entry.bestScaledScore).toBe(1240);
    expect(entry.bestRawScore).toBe(35);
    expect(entry.totalAttempts).toBe(3);
  });

  it('falls back to testId for testTitle when missing', () => {
    const data = { 'practice-test-7': { attempts: [makeAttempt()] } };
    const [entry] = getCompletedTests(data);
    expect(entry.testTitle).toBe('practice-test-7');
  });

  it('handles Firestore-shape timestamps { seconds }', () => {
    const newSec = Math.floor(new Date('2026-05-09T10:00:00Z').getTime() / 1000);
    const oldSec = Math.floor(new Date('2026-04-01T10:00:00Z').getTime() / 1000);
    const data = {
      'old': { attempts: [{ completedAt: { seconds: oldSec, nanoseconds: 0 } }] },
      'new': { attempts: [{ completedAt: { seconds: newSec, nanoseconds: 0 } }] },
    };
    const r = getCompletedTests(data);
    expect(r[0].testId).toBe('new');
  });
});

describe('getLatestAttempt', () => {
  it('returns null for missing test or no attempts', () => {
    expect(getLatestAttempt({}, 'test-x')).toBeNull();
    expect(getLatestAttempt({ 'test-x': { attempts: [] } }, 'test-x')).toBeNull();
    expect(getLatestAttempt(null, 'test-x')).toBeNull();
  });

  it('returns attempts[0] (newest-first ordering)', () => {
    const newest = makeAttempt({ attemptId: 'newest' });
    const data = { 'test-1': { attempts: [newest, makeAttempt({ attemptId: 'older' })] } };
    expect(getLatestAttempt(data, 'test-1').attemptId).toBe('newest');
  });
});

describe('extractItemsFromAttempt', () => {
  it('returns [] for null attempt or missing diagnosticData', () => {
    expect(extractItemsFromAttempt(null)).toEqual([]);
    expect(extractItemsFromAttempt({})).toEqual([]);
    expect(extractItemsFromAttempt({ diagnosticData: {} })).toEqual([]);
  });

  it('flattens questionDetails into per-item entries with parsed indices', () => {
    const attempt = makeAttempt({
      diagnosticData: {
        questionDetails: makeQuestionDetails([
          { module: 0, question: 1, correct: true, time: 12.5, skills: ['linear-eq'] },
          { module: 0, question: 2, correct: false, time: 45.2, skills: ['quadratics'] },
          { module: 1, question: 0, correct: true, time: 8.1 },
        ]),
      },
    });
    const items = extractItemsFromAttempt(attempt);
    expect(items).toHaveLength(3);
    expect(items[0]).toMatchObject({ moduleIndex: 0, questionIndex: 1, isCorrect: true, timeSpent: 12.5 });
    expect(items[1]).toMatchObject({ moduleIndex: 0, questionIndex: 2, isCorrect: false });
    expect(items[2]).toMatchObject({ moduleIndex: 1, questionIndex: 0 });
  });

  it('sorts items by (moduleIndex, questionIndex) ascending', () => {
    const attempt = makeAttempt({
      diagnosticData: {
        questionDetails: makeQuestionDetails([
          { module: 1, question: 0, correct: true },
          { module: 0, question: 5, correct: false },
          { module: 0, question: 1, correct: true },
        ]),
      },
    });
    const items = extractItemsFromAttempt(attempt);
    expect(items.map(i => i.key)).toEqual(['0-1', '0-5', '1-0']);
  });

  it('coerces missing/non-numeric fields to safe defaults', () => {
    const attempt = makeAttempt({
      diagnosticData: {
        questionDetails: { '0-0': { isCorrect: true } },  // bare-bones
      },
    });
    const [item] = extractItemsFromAttempt(attempt);
    expect(item.timeSpent).toBe(0);
    expect(item.visits).toBe(0);
    expect(item.skills).toEqual([]);
    expect(item.usedCalculator).toBe(false);
  });
});

describe('getWrongItems', () => {
  it('returns only items where !isCorrect', () => {
    const attempt = makeAttempt({
      diagnosticData: {
        questionDetails: makeQuestionDetails([
          { module: 0, question: 0, correct: true },
          { module: 0, question: 1, correct: false },
          { module: 0, question: 2, correct: false },
          { module: 0, question: 3, correct: true },
        ]),
      },
    });
    const wrong = getWrongItems(attempt);
    expect(wrong.map(i => i.questionIndex)).toEqual([1, 2]);
  });
});

describe('groupItemsByErrorClass', () => {
  const items = [
    { key: '0-0', skills: ['linear-eq'] },
    { key: '0-1', skills: ['linear-eq'] },
    { key: '0-2', skills: ['quadratics'] },
    { key: '0-3', skills: [] },
  ];

  it('returns {} for non-array items', () => {
    expect(groupItemsByErrorClass(null, {})).toEqual({});
    expect(groupItemsByErrorClass(undefined, {})).toEqual({});
  });

  it('buckets by skill→primaryErrorType from diagnosticReport.skillAnalysis.weakSkills', () => {
    const report = {
      skillAnalysis: {
        weakSkills: [
          { skillId: 'linear-eq', primaryErrorType: 'conceptual_gap' },
          { skillId: 'quadratics', primaryErrorType: 'procedural_error' },
        ],
      },
    };
    const grouped = groupItemsByErrorClass(items, report);
    expect(grouped.conceptual_gap.map(i => i.key)).toEqual(['0-0', '0-1']);
    expect(grouped.procedural_error.map(i => i.key)).toEqual(['0-2']);
    expect(grouped.mixed.map(i => i.key)).toEqual(['0-3']); // no skill → mixed
  });

  it('buckets all items as "mixed" when diagnosticReport is null', () => {
    const grouped = groupItemsByErrorClass(items, null);
    expect(grouped.mixed).toHaveLength(4);
  });

  it('buckets unmapped skills as "mixed"', () => {
    const report = {
      skillAnalysis: {
        weakSkills: [{ skillId: 'linear-eq', primaryErrorType: 'conceptual_gap' }],
      },
    };
    const grouped = groupItemsByErrorClass(items, report);
    expect(grouped.conceptual_gap).toHaveLength(2);
    expect(grouped.mixed.map(i => i.key)).toEqual(['0-2', '0-3']);
  });
});

describe('computeReviewStats', () => {
  it('returns zeros for null attempt', () => {
    expect(computeReviewStats(null)).toEqual({
      total: 0, correct: 0, wrong: 0, accuracy: 0, moduleScores: [],
    });
  });

  it('computes total/correct/wrong/accuracy', () => {
    const attempt = makeAttempt({
      moduleScores: [{ name: 'M1', score: 18 }, { name: 'M2', score: 12 }],
      diagnosticData: {
        questionDetails: makeQuestionDetails([
          { module: 0, question: 0, correct: true },
          { module: 0, question: 1, correct: true },
          { module: 0, question: 2, correct: false },
          { module: 0, question: 3, correct: false },
        ]),
      },
    });
    const stats = computeReviewStats(attempt);
    expect(stats).toMatchObject({
      total: 4, correct: 2, wrong: 2, accuracy: 50,
    });
    expect(stats.moduleScores).toHaveLength(2);
  });

  it('rounds accuracy', () => {
    const attempt = makeAttempt({
      diagnosticData: {
        questionDetails: makeQuestionDetails([
          { module: 0, question: 0, correct: true },
          { module: 0, question: 1, correct: true },
          { module: 0, question: 2, correct: false },
        ]),
      },
    });
    expect(computeReviewStats(attempt).accuracy).toBe(67); // 2/3 = 66.66... → 67
  });
});

describe('getCompletedTests requireItemDetails option', () => {
  it('keeps tests with diagnosticData.questionDetails', () => {
    const ptr = {
      'pt-1': {
        attempts: [
          makeAttempt({
            diagnosticData: {
              questionDetails: makeQuestionDetails([
                { module: 0, question: 0, correct: true },
              ]),
            },
          }),
        ],
      },
    };
    expect(getCompletedTests(ptr, { requireItemDetails: true })).toHaveLength(1);
    expect(getCompletedTests(ptr, { requireItemDetails: true })[0].hasItemDetails).toBe(true);
  });

  it('drops tests whose latest attempt has no questionDetails', () => {
    const ptr = {
      'pt-1': { attempts: [makeAttempt()] }, // diagnosticData omitted
    };
    expect(getCompletedTests(ptr, { requireItemDetails: true })).toEqual([]);
    // But the no-filter path keeps it for the count
    expect(getCompletedTests(ptr)).toHaveLength(1);
    expect(getCompletedTests(ptr)[0].hasItemDetails).toBe(false);
  });

  it('drops tests whose questionDetails is an empty object', () => {
    const ptr = {
      'pt-1': { attempts: [makeAttempt({ diagnosticData: { questionDetails: {} } })] },
    };
    expect(getCompletedTests(ptr, { requireItemDetails: true })).toEqual([]);
  });
});

describe('findErrorClassForItem', () => {
  const attemptWithSkills = () => makeAttempt({
    diagnosticData: {
      questionDetails: {
        '0-0': { isCorrect: false, timeSpent: 30, skills: ['slope-intercept-form'] },
        '0-1': { isCorrect: false, timeSpent: 12, skills: ['linear-equations'] },
        '0-2': { isCorrect: false, timeSpent: 30, skills: ['unknown-skill'] },
      },
    },
  });
  const diagReport = {
    skillAnalysis: {
      weakSkills: [
        { skillId: 'slope-intercept-form', primaryErrorType: 'conceptual_gap' },
        { skillId: 'linear-equations', primaryErrorType: 'time_pressure' },
      ],
    },
  };

  it('returns the class for an item whose skill is in weakSkills', () => {
    const items = extractItemsFromAttempt(attemptWithSkills());
    const target = items.find(i => i.key === '0-0');
    expect(findErrorClassForItem(target, attemptWithSkills(), diagReport)).toBe('conceptual_gap');
  });

  it('returns the right class when multiple skills/classes are present', () => {
    const items = extractItemsFromAttempt(attemptWithSkills());
    const target = items.find(i => i.key === '0-1');
    expect(findErrorClassForItem(target, attemptWithSkills(), diagReport)).toBe('time_pressure');
  });

  it('returns the mixed bucket for items whose skill is not in weakSkills', () => {
    const items = extractItemsFromAttempt(attemptWithSkills());
    const target = items.find(i => i.key === '0-2');
    expect(findErrorClassForItem(target, attemptWithSkills(), diagReport)).toBe('mixed');
  });

  it('returns null for missing inputs', () => {
    expect(findErrorClassForItem(null, attemptWithSkills(), diagReport)).toBeNull();
    expect(findErrorClassForItem({ key: '0-0' }, null, diagReport)).toBeNull();
    expect(findErrorClassForItem({}, attemptWithSkills(), diagReport)).toBeNull();
  });

  it('returns null for an item key not present in the attempt', () => {
    expect(findErrorClassForItem({ key: '99-99' }, attemptWithSkills(), diagReport)).toBeNull();
  });

  it('accepts a precomputed groups object as the second arg (fast shape)', () => {
    const items = extractItemsFromAttempt(attemptWithSkills());
    const groups = groupItemsByErrorClass(items, diagReport);
    const target = items.find(i => i.key === '0-0');
    // Same answer, no rebuild — the function detects this is a groups
    // object (no `attemptId`/`diagnosticData`/`completedAt` keys) and
    // skips the extract+group rebuild.
    expect(findErrorClassForItem(target, groups)).toBe('conceptual_gap');
  });

  it('returns the class for CORRECT items too — callers must guard isCorrect', () => {
    // The 6-class taxonomy is meaningless for items the student got right,
    // but the helper itself doesn't filter on isCorrect — it returns
    // whatever class the item's skill maps to. Callers (telemetry,
    // ReviewItemCard chip) are responsible for hiding the value when
    // isCorrect is true. This test pins the contract.
    const correctItemAttempt = makeAttempt({
      diagnosticData: {
        questionDetails: {
          '0-0': { isCorrect: true, timeSpent: 30, skills: ['slope-intercept-form'] },
        },
      },
    });
    const items = extractItemsFromAttempt(correctItemAttempt);
    const target = items.find(i => i.key === '0-0');
    expect(target.isCorrect).toBe(true);
    expect(findErrorClassForItem(target, correctItemAttempt, diagReport)).toBe('conceptual_gap');
  });
});
