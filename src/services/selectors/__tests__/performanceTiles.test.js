/**
 * buildPerformanceTiles.test.js — the home-screen performance tiles (orange
 * Practice Accuracy + green Strongest Section + purple Biggest Opportunity).
 *
 * These tiles used to read the FROZEN, math-only `practiceProgress`, so the %
 * stopped updating after the 2026-06-12 writer excision and R&W could never
 * appear. The rewrite blends live drills (skillProgress, both sections) with
 * the most recent full test (per-section raw counts) into one combined,
 * section-level signal. This pins that behavior.
 */

import { buildPerformanceTiles } from '../performanceTiles';

// A scoreable multi-section attempt: 18/22 Math, 12/18 R&W.
const TEST_RESULTS = {
  t1: {
    testTitle: 'Practice Test 1',
    lastAttemptAt: 2000,
    attempts: [{
      completedAt: 2000,
      scaledScore: 1200,
      rawScore: 30,
      totalQuestions: 40,
      isMultiSection: true,
      sectionScores: { math: 600, 'reading-writing': 600 },
      moduleScores: [
        { moduleSection: 'math', score: 18, total: 22 },
        { moduleSection: 'reading-writing', score: 12, total: 18 },
      ],
    }],
  },
};

describe('buildPerformanceTiles — combined, section-level practice tiles', () => {
  test('blends drill (skillProgress) + latest test counts per section', () => {
    const skillProgress = {
      'linear-equations': { attempts: 10, correct: 9 }, // math drills
      'functions': { attempts: 5, correct: 3 },         // math drills
      'words-in-context': { attempts: 8, correct: 4 },  // R&W drills
      'boundaries': { attempts: 4, correct: 3 },        // R&W drills
    };
    const r = buildPerformanceTiles(skillProgress, TEST_RESULTS);

    // Math: drills 12/15 + test 18/22 = 30/37 = 81%
    expect(r.sections.math).toEqual({ correct: 30, total: 37, accuracy: 81 });
    // R&W: drills 7/12 + test 12/18 = 19/30 = 63%
    expect(r.sections.rw).toEqual({ correct: 19, total: 30, accuracy: 63 });
    // Overall: 49/67 = 73%
    expect(r.overall).toEqual({ correct: 49, total: 67, percent: 73 });
    expect(r.hasData).toBe(true);
  });

  test('strongest = higher-accuracy section, opportunity = lower (both as sections)', () => {
    const skillProgress = {
      'linear-equations': { attempts: 10, correct: 9 },
      'words-in-context': { attempts: 8, correct: 4 },
    };
    const r = buildPerformanceTiles(skillProgress, TEST_RESULTS);
    expect(r.strongest.key).toBe('math');
    expect(r.strongest.label).toBe('Math');
    expect(r.opportunity.key).toBe('rw');
    expect(r.opportunity.label).toBe('Reading & Writing');
    expect(r.strongest.accuracy).toBeGreaterThan(r.opportunity.accuracy);
  });

  test('R&W skill IDs bucket to R&W via getSkillSection (not math)', () => {
    const r = buildPerformanceTiles({ 'words-in-context': { attempts: 6, correct: 3 } }, {});
    expect(r.sections.math).toBeNull();
    expect(r.sections.rw).toEqual({ correct: 3, total: 6, accuracy: 50 });
    expect(r.strongest.key).toBe('rw');
  });

  test('only one section practiced → opportunity names the other, no %', () => {
    const r = buildPerformanceTiles({ 'linear-equations': { attempts: 4, correct: 2 } }, {});
    expect(r.strongest).toEqual({ key: 'math', label: 'Math', accuracy: 50 });
    expect(r.opportunity).toEqual({ key: 'rw', label: 'Reading & Writing', accuracy: null, empty: true });
    expect(r.hasData).toBe(true);
  });

  test('no data → hasData false, no strongest/opportunity, 0% overall', () => {
    const r = buildPerformanceTiles({}, {});
    expect(r.hasData).toBe(false);
    expect(r.strongest).toBeNull();
    expect(r.opportunity).toBeNull();
    expect(r.overall.percent).toBe(0);
  });

  test('zero-attempt skill records are ignored', () => {
    const r = buildPerformanceTiles({ 'functions': { attempts: 0, correct: 0 } }, {});
    expect(r.hasData).toBe(false);
  });
});
