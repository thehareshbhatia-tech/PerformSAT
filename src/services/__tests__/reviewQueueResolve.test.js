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
