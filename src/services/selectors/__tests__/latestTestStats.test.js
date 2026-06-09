/**
 * latestTestStats.test.js — pins the real-data derivation behind the
 * dashboard "Practice Test Results" card (replaces the fabricated '43/44' /
 * '91%' / '+3% vs last exam' placeholders). Null-not-fake contract: any
 * stat that can't be proven from the attempt data comes back null.
 */

import { getLatestTestStats } from '../latestTestStats';

const attempt = (over = {}) => ({
  completedAt: '2026-06-01T10:00:00.000Z',
  rawScore: 40,
  totalQuestions: 44,
  scaledScore: 680,
  isMultiSection: false,
  sectionScores: null,
  moduleScores: null,
  ...over,
});

describe('getLatestTestStats — guards', () => {
  test('null / empty / malformed input → null', () => {
    expect(getLatestTestStats(null)).toBeNull();
    expect(getLatestTestStats(undefined)).toBeNull();
    expect(getLatestTestStats({})).toBeNull();
    expect(getLatestTestStats({ t1: { attempts: [] } })).toBeNull();
    expect(getLatestTestStats('nope')).toBeNull();
  });

  test('attempts without a numeric scaledScore are skipped', () => {
    expect(getLatestTestStats({ t1: { attempts: [{ rawScore: 10 }] } })).toBeNull();
  });
});

describe('getLatestTestStats — single legacy math-only attempt', () => {
  const stats = getLatestTestStats({
    t1: { testTitle: 'Practice Test 1', attempts: [attempt()] },
  });

  test('headline numbers come from the attempt', () => {
    expect(stats.scaledScore).toBe(680);
    expect(stats.rawScore).toBe(40);
    expect(stats.totalQuestions).toBe(44);
    expect(stats.accuracy).toBe(91); // 40/44
    expect(stats.testTitle).toBe('Practice Test 1');
    expect(stats.attemptCount).toBe(1);
  });

  test('no previous attempt → both deltas null (no fake "+3%")', () => {
    expect(stats.scoreDelta).toBeNull();
    expect(stats.accuracyDelta).toBeNull();
  });

  test('legacy single-section row → headline IS the math section; rw null', () => {
    expect(stats.math).toEqual({ scaled: 680, correct: 40, total: 44 });
    expect(stats.rw).toBeNull();
  });
});

describe('getLatestTestStats — deltas across attempts', () => {
  test('latest-vs-previous by completedAt, order-independent across tests', () => {
    const stats = getLatestTestStats({
      // Newer attempt listed FIRST in an earlier-keyed test row — ordering
      // must come from timestamps, not object/array order.
      t2: {
        attempts: [attempt({ completedAt: '2026-06-05T10:00:00.000Z', scaledScore: 700, rawScore: 42 })],
      },
      t1: { attempts: [attempt()] },
    });
    expect(stats.scaledScore).toBe(700);
    expect(stats.scoreDelta).toBe(20);   // 700 - 680
    expect(stats.accuracyDelta).toBe(4); // 95 - 91
  });

  test('negative movement reports honestly', () => {
    const stats = getLatestTestStats({
      t1: {
        attempts: [
          attempt(),
          attempt({ completedAt: '2026-06-06T10:00:00.000Z', scaledScore: 640, rawScore: 36 }),
        ],
      },
    });
    expect(stats.scoreDelta).toBe(-40);
    expect(stats.accuracyDelta).toBe(-9); // 82 - 91
  });

  test('scale mismatch (section prev vs composite latest) → scoreDelta null', () => {
    const stats = getLatestTestStats({
      t1: { attempts: [attempt()] },
      t2: {
        attempts: [attempt({
          completedAt: '2026-06-07T10:00:00.000Z',
          scaledScore: 1320,
          isMultiSection: true,
          rawScore: 80,
          totalQuestions: 98,
        })],
      },
    });
    expect(stats.scoreDelta).toBeNull();
    // accuracy is scale-free, so its delta still computes
    expect(stats.accuracyDelta).toBe(82 - 91);
  });
});

describe('getLatestTestStats — per-section breakdown', () => {
  test('multi-section attempt maps sectionScores + sums moduleScores raw counts', () => {
    const stats = getLatestTestStats({
      t1: {
        attempts: [attempt({
          scaledScore: 1320,
          isMultiSection: true,
          rawScore: 84,
          totalQuestions: 98,
          sectionScores: { math: 660, 'reading-writing': 660 },
          moduleScores: [
            { moduleTitle: 'R&W Module 1', moduleSection: 'reading-writing', score: 24, total: 27 },
            { moduleTitle: 'R&W Module 2', moduleSection: 'reading-writing', score: 22, total: 27 },
            { moduleTitle: 'Math Module 1', moduleSection: 'math', score: 20, total: 22 },
            { moduleTitle: 'Math Module 2', moduleSection: 'math', score: 18, total: 22 },
          ],
        })],
      },
    });
    expect(stats.math).toEqual({ scaled: 660, correct: 38, total: 44 });
    expect(stats.rw).toEqual({ scaled: 660, correct: 46, total: 54 });
  });

  test('multi-section without section data → no fabricated math fallback', () => {
    const stats = getLatestTestStats({
      t1: { attempts: [attempt({ scaledScore: 1200, isMultiSection: true })] },
    });
    expect(stats.math).toBeNull();
    expect(stats.rw).toBeNull();
  });

  test('single-section R&W run does not masquerade as math', () => {
    const stats = getLatestTestStats({
      t1: {
        attempts: [attempt({
          scaledScore: 620,
          sectionScores: { 'reading-writing': 620 },
          moduleScores: [
            { moduleSection: 'reading-writing', score: 40, total: 54 },
          ],
        })],
      },
    });
    expect(stats.math).toBeNull();
    expect(stats.rw).toEqual({ scaled: 620, correct: 40, total: 54 });
  });
});
