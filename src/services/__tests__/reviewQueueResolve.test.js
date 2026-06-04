/**
 * Tests for the review queue feed + resolution contract (reviewQueueResolve.js).
 *
 * Pure module — no Firebase, no React — so this exercises the exact dispatch
 * logic App.jsx relies on: bank-fed drill misses resolve by id across banks,
 * legacy free-practice items resolve by section index, and the legacy path is
 * preserved unchanged.
 */

import {
  BANK_REVIEW_MODULE,
  reviewDisplaySection,
  buildBankReviewEntry,
  buildTestReviewEntry,
  resolveTestReviewItem,
  resolveReviewItemToQuestion,
} from '../reviewQueueResolve';

describe('reviewDisplaySection', () => {
  test('prefers domain, then first skill, then section, then a default', () => {
    expect(reviewDisplaySection({ domain: 'algebra', skills: ['x'] })).toBe('algebra');
    expect(reviewDisplaySection({ skills: ['slope-intercept-form'] })).toBe('slope-intercept-form');
    expect(reviewDisplaySection({ section: 'math' })).toBe('math');
    expect(reviewDisplaySection({})).toBe('Practice');
    expect(reviewDisplaySection(null)).toBe('Practice');
  });
});

describe('buildBankReviewEntry', () => {
  test('produces the bank-keyed triple addToReviewQueue stores', () => {
    expect(buildBankReviewEntry({ id: 'bank-geo-001', domain: 'geometry' })).toEqual({
      moduleId: 'bank',
      sectionName: 'geometry',
      questionId: 'bank-geo-001',
    });
  });

  test('null question yields a null questionId (no crash)', () => {
    expect(buildBankReviewEntry(null)).toEqual({
      moduleId: 'bank',
      sectionName: 'Practice',
      questionId: null,
    });
  });
});

describe('resolveReviewItemToQuestion — bank-fed items', () => {
  const Q = { id: 'bank-geo-001' };
  let resolveQuestionById, getQuestionsForSection;
  // Fresh mocks per test: CRA's jest resets mock implementations between tests.
  beforeEach(() => {
    resolveQuestionById = jest.fn((id) => (id === 'bank-geo-001' ? Q : null));
    getQuestionsForSection = jest.fn(() => []);
  });

  test('resolves a bank item by id across banks', () => {
    const item = { moduleId: BANK_REVIEW_MODULE, sectionName: 'geometry', questionId: 'bank-geo-001' };
    expect(resolveReviewItemToQuestion(item, { resolveQuestionById, getQuestionsForSection })).toBe(Q);
    expect(resolveQuestionById).toHaveBeenCalledWith('bank-geo-001');
    expect(getQuestionsForSection).not.toHaveBeenCalled(); // never falls into the index path
  });

  test('unknown bank id resolves to null (stale item)', () => {
    const item = { moduleId: BANK_REVIEW_MODULE, questionId: 'bank-gone-999' };
    expect(resolveReviewItemToQuestion(item, { resolveQuestionById, getQuestionsForSection })).toBeNull();
  });

  test('bank item with no resolver yields null (no crash)', () => {
    const item = { moduleId: BANK_REVIEW_MODULE, questionId: 'bank-geo-001' };
    expect(resolveReviewItemToQuestion(item, {})).toBeNull();
  });
});

describe('resolveReviewItemToQuestion — legacy free-practice items (unchanged path)', () => {
  const section = [{ id: 0 }, { id: 1 }, { id: 2 }];
  let getQuestionsForSection, resolveQuestionById;
  beforeEach(() => {
    getQuestionsForSection = jest.fn((m, s) => (m === 'circles' && s === 'arcs' ? section : []));
    resolveQuestionById = jest.fn();
  });

  test('resolves by numeric index', () => {
    const item = { moduleId: 'circles', sectionName: 'arcs', questionId: 2 };
    expect(resolveReviewItemToQuestion(item, { resolveQuestionById, getQuestionsForSection })).toBe(section[2]);
    expect(resolveQuestionById).not.toHaveBeenCalled(); // never hits the bank path
  });

  test('parses a string index', () => {
    const item = { moduleId: 'circles', sectionName: 'arcs', questionId: '1' };
    expect(resolveReviewItemToQuestion(item, { resolveQuestionById, getQuestionsForSection })).toBe(section[1]);
  });

  test('out-of-range index and non-numeric id resolve to null', () => {
    expect(resolveReviewItemToQuestion({ moduleId: 'circles', sectionName: 'arcs', questionId: 9 }, { getQuestionsForSection })).toBeNull();
    expect(resolveReviewItemToQuestion({ moduleId: 'circles', sectionName: 'arcs', questionId: 'abc' }, { getQuestionsForSection })).toBeNull();
  });

  test('null item / missing fields resolve to null', () => {
    expect(resolveReviewItemToQuestion(null, { getQuestionsForSection })).toBeNull();
    expect(resolveReviewItemToQuestion({ moduleId: 'circles' }, { getQuestionsForSection })).toBeNull();
  });
});

describe('buildTestReviewEntry', () => {
  test('encodes test id + variant in moduleId and position in questionId', () => {
    expect(buildTestReviewEntry('practice-test-3', {
      modIdx: 2,
      qIdx: 11,
      question: { id: 7, domain: 'algebra' },
    })).toEqual({
      moduleId: 'test::practice-test-3::std',
      sectionName: 'algebra',
      questionId: '2-11',
    });
  });

  test('marks items served from the Module 2 Easy variant', () => {
    const entry = buildTestReviewEntry('practice-test-3', {
      modIdx: 3,
      qIdx: 4,
      question: { id: 5, domain: 'geometry' },
      servedEasyVariant: true,
    });
    expect(entry.moduleId).toBe('test::practice-test-3::easy');
    expect(entry.questionId).toBe('3-4');
  });
});

describe('resolveReviewItemToQuestion — full-test items', () => {
  // Raw test ids restart at 1 inside every module — id 7 exists in BOTH the
  // R&W module and the math module here, exactly the collision the synthetic
  // resolved id has to defuse.
  const rwQ = { id: 7, stem: 'rw question', skills: ['boundaries'] };
  const mathQ = { id: 7, stem: 'math std question', skills: ['linear-equations'] };
  const easyQ = { id: 7, stem: 'math easy question', skills: ['linear-equations'] };
  const TEST = {
    id: 'practice-test-3',
    modules: [
      { section: 'reading-writing', questions: [{ id: 1 }, rwQ] },
      { section: 'reading-writing', questions: [] },
      { section: 'math', questions: [] },
      { section: 'math', questions: [{ id: 1 }, { id: 2 }, mathQ] },
    ],
    module2Easy: { questions: [easyQ] },
  };
  let getTestById, resolveQuestionById, getQuestionsForSection;
  beforeEach(() => {
    getTestById = jest.fn((id) => (id === 'practice-test-3' ? TEST : null));
    resolveQuestionById = jest.fn();
    getQuestionsForSection = jest.fn();
  });

  test('resolves a std item positionally with a synthetic globally-unique id', () => {
    const item = { moduleId: 'test::practice-test-3::std', sectionName: 'algebra', questionId: '3-2' };
    const q = resolveReviewItemToQuestion(item, { resolveQuestionById, getQuestionsForSection, getTestById });
    expect(q.stem).toBe('math std question');
    expect(q.id).toBe('tq::practice-test-3::std::3-2');
    expect(q.sourceTestId).toBe('practice-test-3');
    // never falls into the bank or legacy paths
    expect(resolveQuestionById).not.toHaveBeenCalled();
    expect(getQuestionsForSection).not.toHaveBeenCalled();
  });

  test('two misses sharing a raw test id resolve to DISTINCT synthetic ids', () => {
    const a = resolveTestReviewItem({ moduleId: 'test::practice-test-3::std', questionId: '0-1' }, getTestById);
    const b = resolveTestReviewItem({ moduleId: 'test::practice-test-3::std', questionId: '3-2' }, getTestById);
    expect(a.stem).toBe('rw question');
    expect(b.stem).toBe('math std question');
    expect(a.id).not.toBe(b.id); // raw q.id is 7 for both
  });

  test('easy-variant items resolve against module2Easy questions', () => {
    const item = { moduleId: 'test::practice-test-3::easy', sectionName: 'algebra', questionId: '3-0' };
    const q = resolveReviewItemToQuestion(item, { getTestById });
    expect(q.stem).toBe('math easy question');
    expect(q.id).toBe('tq::practice-test-3::easy::3-0');
  });

  test('stale items resolve to null: unknown test, out-of-range index, malformed moduleId', () => {
    expect(resolveTestReviewItem({ moduleId: 'test::gone-test::std', questionId: '0-0' }, getTestById)).toBeNull();
    expect(resolveTestReviewItem({ moduleId: 'test::practice-test-3::std', questionId: '3-99' }, getTestById)).toBeNull();
    expect(resolveTestReviewItem({ moduleId: 'test::practice-test-3::std', questionId: 'abc' }, getTestById)).toBeNull();
    expect(resolveTestReviewItem({ moduleId: 'test::practice-test-3', questionId: '0-0' }, getTestById)).toBeNull();
  });

  test('missing getTestById resolver yields null (no crash, no legacy fallthrough)', () => {
    const item = { moduleId: 'test::practice-test-3::std', sectionName: 'algebra', questionId: '3-2' };
    expect(resolveReviewItemToQuestion(item, { resolveQuestionById, getQuestionsForSection })).toBeNull();
    expect(getQuestionsForSection).not.toHaveBeenCalled();
  });
});
