/**
 * performanceTiles.js — combined, section-level practice signal for the three
 * colorful home tiles (orange Practice Accuracy + green Strongest Section +
 * purple Biggest Opportunity).
 *
 * Pure selector (no Firebase) so it's unit-testable in isolation, alongside
 * the other dashboard derived-state helpers (weaknesses, recentTest,
 * latestTestStats).
 *
 * These tiles used to read the FROZEN, math-only `practiceProgress`, so the %
 * stopped updating after the 2026-06-12 writer excision and R&W could never
 * appear. This blends the two real "practice" sources into one per-section
 * (Math vs R&W) raw correct/total tally.
 */

import { getSkillSection } from '../../data/questions/rwBank/taxonomy';
import { getLatestTestStats } from './latestTestStats';

export const SECTION_LABEL = { math: 'Math', rw: 'Reading & Writing' };

/**
 * Build the combined practice-performance signal for the home tiles.
 *
 * Sources blended into one per-section raw correct/total tally:
 *   - live drills: `skillProgress[skillId] = { attempts, correct, ... }`,
 *     bucketed to math|rw via the canonical R&W skill list (getSkillSection);
 *   - the most recent full-length test: per-section raw counts from
 *     getLatestTestStats (moduleScores grouped by section).
 *
 * Use it to render the orange accuracy %, and to pick the strongest /
 * biggest-opportunity SECTION (Math vs R&W — only two buckets).
 *
 * @param {Object} skillProgress - per-skill mastery records (live drill data)
 * @param {Object} practiceTestResults - keyed by testId
 * @returns {{ hasData: boolean, overall: {correct:number,total:number,percent:number},
 *   sections: {math: object|null, rw: object|null},
 *   strongest: {key:string,label:string,accuracy:number}|null,
 *   opportunity: {key:string,label:string,accuracy:(number|null),empty?:boolean}|null }}
 */
export function buildPerformanceTiles(skillProgress, practiceTestResults) {
  const counts = { math: { correct: 0, total: 0 }, rw: { correct: 0, total: 0 } };

  // 1) Live drills — skillProgress is keyed by skillId; getSkillSection maps
  //    each to 'math'|'rw' off the canonical R&W skill list.
  Object.entries(skillProgress || {}).forEach(([skillId, rec]) => {
    if (!rec || typeof rec.attempts !== 'number' || rec.attempts <= 0) return;
    const sec = getSkillSection(skillId);
    counts[sec].correct += (typeof rec.correct === 'number' ? rec.correct : 0);
    counts[sec].total += rec.attempts;
  });

  // 2) Most recent full-length test — raw per-section correct/total. Blending
  //    raw counts (not averaging two percentages) keeps the number honest: a
  //    44-question test isn't drowned out by a 5-question drill, or vice versa.
  const testStats = getLatestTestStats(practiceTestResults);
  ['math', 'rw'].forEach((k) => {
    const s = testStats && testStats[k];
    if (s && typeof s.total === 'number' && s.total > 0) {
      counts[k].correct += (typeof s.correct === 'number' ? s.correct : 0);
      counts[k].total += s.total;
    }
  });

  const pct = (c) => (c.total > 0 ? Math.round((c.correct / c.total) * 100) : null);
  const sections = {
    math: counts.math.total > 0 ? { ...counts.math, accuracy: pct(counts.math) } : null,
    rw: counts.rw.total > 0 ? { ...counts.rw, accuracy: pct(counts.rw) } : null,
  };

  const oc = counts.math.correct + counts.rw.correct;
  const ot = counts.math.total + counts.rw.total;
  const overall = { correct: oc, total: ot, percent: ot > 0 ? Math.round((oc / ot) * 100) : 0 };

  // Strongest / biggest-opportunity at the SECTION level (only two buckets).
  const present = ['math', 'rw'].filter((k) => sections[k]);
  let strongest = null;
  let opportunity = null;
  if (present.length === 2) {
    const [hi, lo] = sections.math.accuracy >= sections.rw.accuracy ? ['math', 'rw'] : ['rw', 'math'];
    strongest = { key: hi, label: SECTION_LABEL[hi], accuracy: sections[hi].accuracy };
    opportunity = { key: lo, label: SECTION_LABEL[lo], accuracy: sections[lo].accuracy };
  } else if (present.length === 1) {
    const k = present[0];
    const other = k === 'math' ? 'rw' : 'math';
    strongest = { key: k, label: SECTION_LABEL[k], accuracy: sections[k].accuracy };
    // Only one section practiced — name the other as the opportunity (no % yet).
    opportunity = { key: other, label: SECTION_LABEL[other], accuracy: null, empty: true };
  }

  return { hasData: ot > 0, overall, sections, strongest, opportunity };
}
