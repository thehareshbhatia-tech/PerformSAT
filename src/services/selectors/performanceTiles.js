/**
 * performanceTiles.js — data for the three colorful home tiles (orange
 * Practice Accuracy + green Strongest Section + purple Biggest Opportunity).
 *
 * Pure selector (no Firebase) so it's unit-testable in isolation, alongside
 * the other dashboard derived-state helpers (weaknesses, recentTest,
 * latestTestStats).
 *
 * SOURCE: the most recent full-length practice test. That is the ONLY clean,
 * true-count, section-separated accuracy signal we have. Earlier versions:
 *   - read the FROZEN, math-only `practiceProgress` (stale since 2026-06-12);
 *   - then summed per-skill `skillProgress`, which is NOT a question counter —
 *     one question tagged with N skills increments N tallies, and it's fed by
 *     both drills AND tests, so the totals were wildly inflated (the infamous
 *     "6376 of 25706 questions"). There is no clean per-question record of
 *     correctness for the assigned/adaptive drill path to blend in honestly.
 * So all three tiles now describe ONE coherent thing: your latest test.
 */

import { getLatestTestStats } from './latestTestStats';

export const SECTION_LABEL = { math: 'Math', rw: 'Reading & Writing' };

/**
 * Build the performance-tile data from the most recent scored practice test.
 *
 * Every percentage is plain accuracy (correct ÷ answered) and every tile
 * carries the raw count behind it, so "82%" always reads as "37 of 45".
 *
 * @param {Object} practiceTestResults - keyed by testId
 * @returns {{ hasData: boolean,
 *   overall: {correct:number,total:number,percent:number},
 *   sections: {math: object|null, rw: object|null},
 *   strongest: {key,label,accuracy,correct,total}|null,
 *   opportunity: {key,label,accuracy,correct,total,empty?}|null }}
 */
export function buildPerformanceTiles(practiceTestResults) {
  const empty = {
    hasData: false,
    overall: { correct: 0, total: 0, percent: 0 },
    sections: { math: null, rw: null },
    strongest: null,
    opportunity: null,
  };

  const stats = getLatestTestStats(practiceTestResults);
  if (!stats) return empty;

  // Per-section accuracy needs real raw counts (correct/total). A section that
  // only carries a scaled score (no moduleScores rows) can't show accuracy.
  const sectionOf = (s) => {
    if (!s || typeof s.correct !== 'number' || typeof s.total !== 'number' || s.total <= 0) return null;
    return { correct: s.correct, total: s.total, accuracy: Math.round((s.correct / s.total) * 100) };
  };
  const sections = { math: sectionOf(stats.math), rw: sectionOf(stats.rw) };

  // Overall: prefer the test's own raw score; fall back to summing sections.
  let oc;
  let ot;
  if (typeof stats.rawScore === 'number' && typeof stats.totalQuestions === 'number' && stats.totalQuestions > 0) {
    oc = stats.rawScore;
    ot = stats.totalQuestions;
  } else {
    oc = (sections.math?.correct || 0) + (sections.rw?.correct || 0);
    ot = (sections.math?.total || 0) + (sections.rw?.total || 0);
  }
  const overall = { correct: oc, total: ot, percent: ot > 0 ? Math.round((oc / ot) * 100) : 0 };

  const mk = (k, extra = {}) => ({
    key: k, label: SECTION_LABEL[k], accuracy: sections[k].accuracy,
    correct: sections[k].correct, total: sections[k].total, ...extra,
  });

  const present = ['math', 'rw'].filter((k) => sections[k]);
  let strongest = null;
  let opportunity = null;
  if (present.length === 2) {
    const [hi, lo] = sections.math.accuracy >= sections.rw.accuracy ? ['math', 'rw'] : ['rw', 'math'];
    strongest = mk(hi);
    opportunity = mk(lo);
  } else if (present.length === 1) {
    const k = present[0];
    const other = k === 'math' ? 'rw' : 'math';
    strongest = mk(k);
    // Only one section on the latest test — name the other as the thing to try.
    opportunity = { key: other, label: SECTION_LABEL[other], accuracy: null, correct: null, total: null, empty: true };
  }

  return { hasData: ot > 0 || present.length > 0, overall, sections, strongest, opportunity };
}
