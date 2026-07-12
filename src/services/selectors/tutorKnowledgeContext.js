/**
 * Tutor expert-misconception context.
 *
 * The tutor's existing per-item trap analysis is parsed from the bank item's
 * authored `explanation`; when that text is thin the model has to GUESS the
 * mistake behind a wrong answer, which frontier models do unreliably. This
 * selector injects our own expert misconception taxonomy (distilled from the SAT
 * knowledge graph, keyed by College Board skill) for the skill(s) the current
 * question tests, so the tutor can name the ROOT CAUSE — the belief, how to
 * detect it, how to fix it — independent of how well the item was annotated.
 *
 * Rides the cached stable prefix (per-question-stable, like the skill-history
 * block). Hard char cap keeps it from ballooning the prompt / latency.
 */

import { TUTOR_KNOWLEDGE } from '../../data/knowledge/tutorKnowledge';
import { getCBSkillForPattern } from '../../data/questions/cbSkillTaxonomy';

const MAX_CHARS = 1400;
const MAX_SKILLS = 2;   // most questions test 1; cap the rare multi-skill case
const MAX_MISC = 3;     // top misconceptions per skill (authors lead with the root)

// Bank items store a fine-grained internal `skills` vocabulary that is neither the
// CB skill slug nor the drill `pattern` slug. R&W items already carry a CB slug in
// `item.skill`; math items carry these. Map each math bank skill to its CB skill so
// the knowledge lookup (keyed by CB slug) resolves. Kept here because the tutor is
// the only consumer today; promote to cbSkillTaxonomy if others need it.
const BANK_SKILL_TO_CB = {
  // Algebra — linear equations (one variable)
  'word-problem-to-equation': 'linear-equations-one-variable',
  'word-problems': 'linear-equations-one-variable',
  'distributive-property': 'linear-equations-one-variable',
  // Algebra — linear functions
  'slope-intercept-form': 'linear-functions',
  'slope-from-points': 'linear-functions',
  'linear-functions': 'linear-functions',
  'table-to-equation': 'linear-functions',
  'function-notation': 'linear-functions',
  // Algebra — lines in the plane
  'coordinate-geometry': 'linear-equations-two-variables',
  'parallel-line-slope': 'linear-equations-two-variables',
  'perpendicular-negative-reciprocal': 'linear-equations-two-variables',
  'writing-parallel-equation': 'linear-equations-two-variables',
  'writing-perpendicular-equation': 'linear-equations-two-variables',
  // Algebra — systems
  'systems-of-equations': 'linear-systems',
  'substitution-method': 'linear-systems',
  'elimination-method': 'linear-systems',
  'graphing-systems': 'linear-systems',
  'setting-up-systems': 'linear-systems',
  'system-solution-types': 'linear-systems',
  'infinite-solutions-condition': 'linear-systems',
  // Algebra — inequalities
  'inequalities': 'linear-inequalities',
  // Advanced — equivalent expressions
  'algebraic-expressions': 'equivalent-expressions',
  'difference-of-squares': 'equivalent-expressions',
  'exponent-laws': 'equivalent-expressions',
  'zero-negative-exponents': 'equivalent-expressions',
  'factoring': 'equivalent-expressions',
  'perfect-square-trinomial': 'equivalent-expressions',
  'polynomials': 'equivalent-expressions',
  'rational-expressions': 'equivalent-expressions',
  'simplifying-rational-expressions': 'equivalent-expressions',
  // Advanced — nonlinear equations
  'quadratic-equations': 'nonlinear-equations',
  'quadratics': 'nonlinear-equations',
  'quadratic-factoring': 'nonlinear-equations',
  'quadratic-formula': 'nonlinear-equations',
  'finding-roots-factoring': 'nonlinear-equations',
  'roots-from-factors': 'nonlinear-equations',
  'radical-equations': 'nonlinear-equations',
  // Advanced — nonlinear functions
  'function-transformations': 'nonlinear-functions',
  'function-interpretation': 'nonlinear-functions',
  'function-notation-application': 'nonlinear-functions',
  'finding-function-from-conditions': 'nonlinear-functions',
  'identify-quadratic': 'nonlinear-functions',
  'parabola-direction': 'nonlinear-functions',
  'vertex-form': 'nonlinear-functions',
  'vertex-formula': 'nonlinear-functions',
  'converting-quadratic-forms': 'nonlinear-functions',
  'domain-restrictions': 'nonlinear-functions',
  'exponential-functions': 'nonlinear-functions',
  'exponential-y-intercept': 'nonlinear-functions',
  'comparing-exponentials': 'nonlinear-functions',
  // Problem-solving — ratios/rates/proportions
  'ratios': 'ratios-rates-proportions',
  'proportion-setup': 'ratios-rates-proportions',
  'rate-conversion': 'ratios-rates-proportions',
  // Problem-solving — percentages
  'percent-of-value': 'percentages',
  'percent-change': 'percentages',
  'percent-decimal-conversion': 'percentages',
  'percent-word-problems': 'percentages',
  'successive-percent-change': 'percentages',
  // Problem-solving — one-variable data
  'calculate-mean': 'one-variable-data',
  'weighted-mean': 'one-variable-data',
  'find-median': 'one-variable-data',
  'find-mode': 'one-variable-data',
  'range-calculation': 'one-variable-data',
  'standard-deviation-concept': 'one-variable-data',
  'data-analysis': 'one-variable-data',
  // Problem-solving — two-variable data
  'scatterplots': 'two-variable-data',
  // Problem-solving — probability
  'probability-basics': 'probability',
  'conditional-probability': 'probability',
  'two-way-table': 'probability',
  // Problem-solving — statistical claims / inference
  'causation-vs-association': 'statistical-claims',
  'observational-vs-experimental': 'statistical-claims',
  'sampling-and-generalization': 'statistical-claims',
  // Geometry — area & volume
  'circle-area': 'area-and-volume',
  'circumference': 'area-and-volume',
  'volume-prism': 'area-and-volume',
  'volume-pyramid-cone': 'area-and-volume',
  'volume-sphere': 'area-and-volume',
  'volume-scaling': 'area-and-volume',
  'squared-cubed-units': 'area-and-volume',
  // Geometry — lines, angles, triangles
  'angles': 'lines-angles-triangles',
  'triangles': 'lines-angles-triangles',
  'triangle-types': 'lines-angles-triangles',
  'triangle-inequality': 'lines-angles-triangles',
  'similar-triangles': 'lines-angles-triangles',
  // Geometry — right triangles & trig
  'pythagorean-theorem': 'right-triangles-trig',
  'right-triangles': 'right-triangles-trig',
  'special-right-triangles': 'right-triangles-trig',
  'soh-cah-toa': 'right-triangles-trig',
  'trigonometry': 'right-triangles-trig',
  'degrees-to-radians': 'right-triangles-trig',
  'radians-to-degrees': 'right-triangles-trig',
  'radian-measure-understanding': 'right-triangles-trig',
  // Geometry — circles
  'circle-equation': 'circles',
  'circle-parts': 'circles',
  'completing-square-circles': 'circles',
  'tangent-lines': 'circles',
};

/**
 * Resolve an item skill token to a CB skill slug our knowledge base is keyed on.
 * Order: already a CB slug (R&W items + direct) → math bank-skill map → the
 * drill pattern→CB resolver. Returns null when nothing maps (safe: no injection).
 * @param {string} skill
 * @returns {string|null}
 */
export const resolveCbSkill = (skill) => {
  if (!skill) return null;
  if (TUTOR_KNOWLEDGE[skill]) return skill;
  if (BANK_SKILL_TO_CB[skill]) return BANK_SKILL_TO_CB[skill];
  const cb = getCBSkillForPattern(skill);
  if (cb?.slug && TUTOR_KNOWLEDGE[cb.slug]) return cb.slug;
  return null;
};

/**
 * Build the `>>> EXPERT MISCONCEPTION MAP <<<` block for the tutor prompt.
 * For each skill the current question tests, emit the expert mental model and the
 * top misconceptions (belief + how to detect + how to fix). Returns '' when no
 * skill resolves. Pure — safe to memoize per question.
 *
 * @param {Object} args
 * @param {string[]} [args.skills] - item skill tokens the active question tests
 * @returns {string} the prompt block, or '' when there is nothing to say
 */
export const buildTutorKnowledgeContext = ({ skills } = {}) => {
  if (!Array.isArray(skills) || skills.length === 0) return '';

  const cbSlugs = [];
  for (const s of skills) {
    const cb = resolveCbSkill(s);
    if (cb && !cbSlugs.includes(cb)) cbSlugs.push(cb);
    if (cbSlugs.length >= MAX_SKILLS) break;
  }
  if (cbSlugs.length === 0) return '';

  const parts = [
    '>>> EXPERT MISCONCEPTION MAP <<<',
    'When the student errs, diagnose the ROOT CAUSE below — do not just mark it wrong. Our expert misconception map for the skill(s) this question tests:',
  ];
  for (const cb of cbSlugs) {
    const k = TUTOR_KNOWLEDGE[cb];
    if (!k) continue;
    if (k.models && k.models[0]) parts.push(`How an expert holds this skill: ${k.models[0]}`);
    (k.misc || []).slice(0, MAX_MISC).forEach((m) => {
      let line = `- ${m.b}`;
      if (m.t) line += ` [detect: ${m.t}]`;
      if (m.f) line += ` [fix: ${m.f}]`;
      parts.push(line);
    });
  }
  if (parts.length <= 2) return '';

  // Hard cap — drop trailing lines (later skill first) rather than emit a bloated
  // block; keep whole lines so nothing reads half-formed.
  let block = parts.join('\n');
  if (block.length > MAX_CHARS) {
    while (parts.length > 3 && parts.join('\n').length > MAX_CHARS) parts.pop();
    block = parts.join('\n');
    if (block.length > MAX_CHARS) block = block.slice(0, MAX_CHARS);
  }
  return block;
};
