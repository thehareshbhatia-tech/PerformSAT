/**
 * Mastery-band read accessors over the per-question `bankPractice` map
 * (`{ [questionId]: { c: lastCorrect, n: attempts, t: iso } }`). Layers a
 * coverage percentage and a qualitative band (unseen / learning / strong /
 * focus) on top of the raw counts from `progressForIds` so the Practice Bank
 * can show the student's real progress instead of catalog share.
 */

import { progressForIds } from './bankProgress';

/** Qualitative mastery bands for a set of practiced questions. */
export const MASTERY_BANDS = Object.freeze({
  UNSEEN: 'unseen',
  LEARNING: 'learning',
  STRONG: 'strong',
  FOCUS: 'focus',
});

/**
 * Aggregates mastery over a set of question IDs: progress counts plus
 * coverage percentage and mastery band. Use anywhere the UI needs to show a
 * student-progress signal for a domain / topic / question type.
 *
 * Band rules: 0 practiced → unseen; ≥3 practiced with accuracy < 60 → focus;
 * ≥4 practiced with accuracy ≥ 80 → strong; otherwise → learning.
 *
 * @param {Array<string|number>} ids - question ids belonging to a domain / topic / type
 * @param {Object<string, {c: boolean, n: number}>|null|undefined} bankPractice
 * @returns {{ total: number, practiced: number, correct: number, accuracy: number|null, coveragePct: number, band: string }}
 */
export function masteryForIds(ids, bankPractice) {
  const prog = progressForIds(ids, bankPractice);
  const coveragePct = prog.total > 0 ? Math.round((prog.practiced / prog.total) * 100) : 0;
  let band = MASTERY_BANDS.LEARNING;
  if (prog.practiced === 0) {
    band = MASTERY_BANDS.UNSEEN;
  } else if (prog.practiced >= 3 && prog.accuracy !== null && prog.accuracy < 60) {
    band = MASTERY_BANDS.FOCUS;
  } else if (prog.practiced >= 4 && prog.accuracy >= 80) {
    band = MASTERY_BANDS.STRONG;
  }
  return { ...prog, coveragePct, band };
}

/**
 * Counts how many of the given skill nodes (each carrying a `.qids` array)
 * land in the strong vs focus mastery band. Use for section-level rollups
 * like the Practice Bank hero stats.
 *
 * @param {Array<{qids: Array<string|number>}>} skillNodes - topic-level nodes with question id lists
 * @param {Object<string, {c: boolean, n: number}>|null|undefined} bankPractice
 * @returns {{ strongCount: number, focusCount: number }}
 */
export function masterySummary(skillNodes, bankPractice) {
  const nodes = Array.isArray(skillNodes) ? skillNodes : [];
  let strongCount = 0;
  let focusCount = 0;
  for (const node of nodes) {
    const { band } = masteryForIds(node?.qids || [], bankPractice);
    if (band === MASTERY_BANDS.STRONG) strongCount += 1;
    else if (band === MASTERY_BANDS.FOCUS) focusCount += 1;
  }
  return { strongCount, focusCount };
}
