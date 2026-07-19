/**
 * Tutor skill-history context.
 *
 * Injecting a student's recent per-skill history + unmastered prerequisites into
 * the tutor's context was Khan Academy's entire measured quality gain (+6pp
 * next-item correctness). This selector compacts that signal for the CURRENT
 * question's skills so the tutor can calibrate explanation depth to the level
 * the student has actually demonstrated. Conciseness is a verified latency lever,
 * so the block is hard-capped — never let it balloon the prompt.
 */

import { buildLongitudinalEvidence, buildSkillHistoryForAI } from '../studyPlanMerger';
import { getSkillById } from '../../data/skillTaxonomy';

// Conciseness beat model swaps 10:1 on latency — keep this block tight.
const MAX_CHARS = 600;
const MAX_RELATED = 3;

const skillName = (id) => getSkillById(id)?.name || id;

// Trend from the per-test accuracy series (oldest -> newest) that
// buildSkillHistoryForAI already produces. A swing of 10+ points reads as real.
const trendOf = (appearances = []) => {
  if (appearances.length < 2) return 'limited history';
  const first = appearances[0]?.accuracy ?? 0;
  const last = appearances[appearances.length - 1]?.accuracy ?? 0;
  if (last - first >= 10) return 'improving';
  if (first - last >= 10) return 'declining';
  return 'flat';
};

/**
 * Build a compact `>>> STUDENT SKILL HISTORY <<<` block for the tutor prompt.
 * For each skill the current question tests it states demonstrated accuracy,
 * trend, and attempt count; then lists up to three of the student's weakest
 * OTHER skills in the same domain(s) as "related weak areas". Returns '' when
 * there is no usable history. Pure — safe to memoize per question.
 *
 * @param {Object} args
 * @param {Object} [args.practiceTestResults] - useProgress practiceTestResults map
 * @param {Object} [args.skillProgress] - useProgress skillProgress map (drill evidence)
 * @param {string[]} [args.skills] - skill ids the active question tests
 * @returns {string} the prompt block, or '' when there is nothing to say
 */
export const buildTutorSkillContext = ({ practiceTestResults, skillProgress = null, skills } = {}) => {
  if (!Array.isArray(skills) || skills.length === 0) return '';
  if (!practiceTestResults || Object.keys(practiceTestResults).length === 0) return '';

  let evidence;
  try {
    // skillProgress folds recent drill results into weightedAccuracy — without
    // it the tutor kept telling students they were weak at skills they had
    // already drilled back to health since the last test.
    evidence = buildLongitudinalEvidence(practiceTestResults, skillProgress);
  } catch {
    return '';
  }
  const rawHistory = evidence?.skillHistory || {};
  if (Object.keys(rawHistory).length === 0) return '';

  const forAI = buildSkillHistoryForAI(rawHistory);

  // ── Lines for the skills THIS question tests ──
  const currentSet = new Set(skills);
  const currentLines = [];
  const domains = new Set();
  skills.forEach((id) => {
    const data = rawHistory[id];
    const domain = getSkillById(id)?.domain;
    if (domain) domains.add(domain);
    if (!data || (data.attempts < 1 && !data.recentDrill)) return;
    // Recency-weighted, drill-blended figure when available; lifetime average
    // as the legacy fallback.
    const accuracy = data.weightedAccuracy
      ?? (data.attempts > 0 ? Math.round((data.correct / data.attempts) * 100) : null);
    if (accuracy === null) return;
    const trend = trendOf(forAI[id]?.appearances);
    const drillNote = data.recentDrill
      ? `; ${data.recentDrill.accuracy}% over ${data.recentDrill.attempts} recent drills`
      : '';
    const testCount = data.attempts > 0 ? `${data.attempts} past attempts` : 'no test attempts yet';
    currentLines.push(`- ${skillName(id)}: ${accuracy}% (${testCount}${drillNote}) (${trend}).`);
  });

  // ── Weakest OTHER skills in the same domain(s) ──
  const related = Object.entries(rawHistory)
    .filter(([id, d]) => !currentSet.has(id) && d.attempts >= 2 && domains.has(getSkillById(id)?.domain))
    .map(([id, d]) => ({ id, accuracy: Math.round((d.correct / d.attempts) * 100) }))
    .sort((a, b) => a.accuracy - b.accuracy)
    .slice(0, MAX_RELATED);

  if (currentLines.length === 0 && related.length === 0) return '';

  const parts = ['>>> STUDENT SKILL HISTORY <<<'];
  parts.push('Calibrate explanation depth to what this student has demonstrated on the skill(s) this question tests: struggling means go slower and rebuild the foundation; strong means move faster and sharpen edge cases.');
  if (currentLines.length > 0) {
    parts.push('This question tests:');
    parts.push(...currentLines);
  }
  if (related.length > 0) {
    parts.push(`Related weak areas: ${related.map((r) => `${skillName(r.id)} (${r.accuracy}%)`).join(', ')}.`);
  }

  let block = parts.join('\n');
  // Hard cap — drop related first, then trailing skill lines, rather than emit
  // a bloated block. Prefer whole-line truncation so nothing reads half-formed.
  if (block.length > MAX_CHARS) {
    while (parts.length > 2 && parts.join('\n').length > MAX_CHARS) {
      parts.pop();
    }
    block = parts.join('\n');
    if (block.length > MAX_CHARS) block = block.slice(0, MAX_CHARS);
  }
  return block;
};
