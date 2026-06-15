// partitionReviewQueue → buildDailySession → reviewService → firebase/config,
// which calls getAuth(app) at import. Mock it (per setupTests.js convention).
jest.mock('../../../firebase/config', () => ({ auth: {}, db: {}, default: {} }));

import { partitionReviewQueue, testLabel } from '../planReviewQueue';

const daysAgo = (n) => new Date(Date.now() - n * 24 * 60 * 60 * 1000).toISOString();

describe('testLabel', () => {
  it('parses a trailing number into "Test N"', () => {
    expect(testLabel('practice-test-3')).toBe('Test 3');
    expect(testLabel('practiceTest12')).toBe('Test 12');
  });
  it('title-cases non-numbered ids', () => {
    expect(testLabel('diagnostic')).toBe('Diagnostic');
    expect(testLabel('full-length-a')).toBe('Full Length A');
  });
  it('is null-safe', () => {
    expect(testLabel(null)).toBe('Test');
    expect(testLabel('')).toBe('Test');
  });
});

describe('partitionReviewQueue', () => {
  it('returns empty groups for an empty queue', () => {
    const out = partitionReviewQueue({});
    expect(out.testGroups).toEqual([]);
    expect(out.drillGroups).toEqual([]);
    expect(out.sessionSize).toBe(0);
  });

  it('groups test misses by testId and labels them, drills by sectionName', () => {
    const queue = {
      a: { moduleId: 'test::practice-test-3::std', sectionName: 'Algebra', questionId: '0-2', wrongCount: 1, nextReviewDate: daysAgo(2) },
      b: { moduleId: 'test::practice-test-3::std', sectionName: 'Geometry', questionId: '1-4', wrongCount: 1, nextReviewDate: daysAgo(2) },
      c: { moduleId: 'test::practice-test-1::easy', sectionName: 'Algebra', questionId: '0-1', wrongCount: 1, nextReviewDate: daysAgo(2) },
      d: { moduleId: 'bank', sectionName: 'Vertex form', questionId: 'q-77', wrongCount: 1, nextReviewDate: daysAgo(2) },
      e: { moduleId: 'bank', sectionName: 'Vertex form', questionId: 'q-78', wrongCount: 1, nextReviewDate: daysAgo(2) },
      f: { moduleId: 'free-practice-mod', sectionName: 'Commas', questionId: 3, wrongCount: 1, nextReviewDate: daysAgo(2) },
    };
    const out = partitionReviewQueue(queue);

    // Test groups: practice-test-3 (2 items) before practice-test-1 (1 item)
    expect(out.testGroups.map((g) => g.testId)).toEqual(['practice-test-3', 'practice-test-1']);
    expect(out.testGroups[0]).toMatchObject({ label: 'Test 3', count: 2, hasOverdue: true });
    expect(out.testGroups[1]).toMatchObject({ label: 'Test 1', count: 1 });

    // Drill groups: bank "Vertex form" (2) before legacy "Commas" (1)
    expect(out.drillGroups.map((g) => g.name)).toEqual(['Vertex form', 'Commas']);
    expect(out.drillGroups[0]).toMatchObject({ name: 'Vertex form', count: 2 });

    expect(out.sessionSize).toBe(6);
  });

  it('flags overdue groups distinctly from due-today', () => {
    const queue = {
      overdue: { moduleId: 'test::practice-test-2::std', sectionName: 'Algebra', questionId: '0-0', wrongCount: 1, nextReviewDate: daysAgo(5) },
    };
    const out = partitionReviewQueue(queue);
    expect(out.testGroups[0].hasOverdue).toBe(true);
  });
});
