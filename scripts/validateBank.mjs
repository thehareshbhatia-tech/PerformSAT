#!/usr/bin/env node
/**
 * Question Bank Validator
 *
 * Validates the hand-authored bank shards against the AUTHORING_SPEC schema,
 * checks for duplicates, skill coverage, and cross-shard text-similarity
 * thresholds.
 *
 * Note: `generatedOfficial.js` was deleted in the Day 0 cleanup of the
 * Acely-parity batch. The pipeline that produced it (regex-based
 * pdf-first-strict-rewrite) emitted internally-incoherent items (numbers,
 * names, references mismatched across stem/choices/explanation). The pipeline
 * source remains at `scripts/officialQuestionBankPipeline.mjs` for repair —
 * when the regex mutators are replaced with LLM-authored variants + an
 * arithmetic-coherence validator, restore the import + spread below.
 */

import { algebraBank } from '../src/data/questions/bank/algebra.js';
import { problemSolvingBank } from '../src/data/questions/bank/problemSolving.js';
import { advancedMathBank } from '../src/data/questions/bank/advancedMath.js';
import { geometryBank } from '../src/data/questions/bank/geometry.js';
import { rebalanceAnswerKey } from '../src/data/questions/bank/rebalanceAnswerKey.js';
import { parseFigureSpec } from '../src/utils/explanationFigures.js';

const VALID_DOMAINS = ['algebra', 'problem-solving', 'advanced-math', 'geometry'];
const VALID_DIFFICULTIES = ['easy', 'medium', 'hard'];
const VALID_TYPES = ['multiple-choice', 'fill-in'];

const TAXONOMY_SKILLS = [
  'slope-from-points', 'slope-intercept-form', 'word-problem-to-equation', 'table-to-equation',
  'function-evaluation', 'parallel-line-slope', 'writing-parallel-equation', 'perpendicular-negative-reciprocal',
  'writing-perpendicular-equation', 'system-solution-types', 'setting-up-systems', 'substitution-method',
  'elimination-method', 'graphing-systems', 'infinite-solutions-condition', 'function-notation', 'domain-restrictions',
  'function-composition', 'function-transformations', 'finding-function-from-conditions',
  'percent-decimal-conversion', 'percent-of-value', 'percent-change', 'percent-word-problems', 'successive-percent-change',
  'calculate-mean', 'weighted-mean', 'find-median', 'find-mode', 'range-calculation', 'standard-deviation-concept',
  'margin-of-error', 'probability-basics', 'conditional-probability', 'two-way-table',
  'unit-conversion', 'squared-cubed-units', 'rate-conversion',
  'identify-quadratic', 'parabola-direction', 'finding-roots-factoring', 'roots-from-factors', 'vertex-formula',
  'vertex-form', 'discriminant-analysis', 'converting-quadratic-forms', 'exponent-laws', 'zero-negative-exponents',
  'comparing-exponentials', 'exponential-growth-decay', 'exponential-y-intercept', 'distributive-property',
  'combining-like-terms', 'difference-of-squares', 'perfect-square-trinomial', 'simplifying-rational-expressions',
  'triangle-angle-sum', 'triangle-types', 'triangle-inequality', 'triangle-area', 'similar-triangles',
  'pythagorean-theorem', 'soh-cah-toa', 'special-right-triangles', 'circle-parts', 'circle-area', 'circumference',
  'arc-length', 'sector-area', 'circle-equation', 'completing-square-circles', 'tangent-lines',
  'volume-prism', 'volume-pyramid-cone', 'volume-sphere', 'volume-scaling',
  'degrees-to-radians', 'radians-to-degrees', 'radian-measure-understanding',
];

function tokenize(text) {
  return String(text)
    .replace(/\$[^$]*\$/g, '')
    .toLowerCase()
    .split(/[^a-z0-9]+/)
    .filter(t => t.length > 2);
}

function jaccardSimilarity(a, b) {
  const sa = new Set(a);
  const sb = new Set(b);
  const inter = [...sa].filter(x => sb.has(x)).length;
  const union = new Set([...sa, ...sb]).size;
  return union === 0 ? 0 : inter / union;
}

const handAuthored = [...algebraBank, ...problemSolvingBank, ...advancedMathBank, ...geometryBank];
const bank = [...handAuthored];

const errors = [];
const warnings = [];
const ids = new Set();
const skillCoverage = {};
const domainCounts = {};
const diffCounts = {};
const answerPos = { A: 0, B: 0, C: 0, D: 0 };

bank.forEach((q, i) => {
  const label = q.id || `Q[${i}]`;

  if (!q.id) errors.push(`${label}: missing id`);
  if (ids.has(q.id)) errors.push(`${label}: duplicate id "${q.id}"`);
  ids.add(q.id);

  if (!VALID_DOMAINS.includes(q.domain)) errors.push(`${label}: invalid domain "${q.domain}"`);
  if (!q.skills || q.skills.length === 0) errors.push(`${label}: missing skills`);
  if (!VALID_DIFFICULTIES.includes(q.difficulty)) errors.push(`${label}: invalid difficulty`);
  if (!VALID_TYPES.includes(q.type)) errors.push(`${label}: invalid type "${q.type}"`);
  if (!q.question) errors.push(`${label}: missing question stem`);
  if (q.type === 'multiple-choice') {
    if (!q.choices || q.choices.length !== 4) errors.push(`${label}: MC must have 4 choices`);
    if (!['A', 'B', 'C', 'D'].includes(q.correctAnswer)) errors.push(`${label}: MC correctAnswer must be A-D`);
    else answerPos[rebalanceAnswerKey(q).correctAnswer]++; // tally the SERVED (post-rebalance) position
  }
  if (!q.explanation) errors.push(`${label}: missing explanation`);

  // Drill-routing Tier 1 depends on every bank item having a parseable
  // `**SAT Pattern: <Title>**` header at the start of its explanation.
  // Missing items still ship (graceful fallthrough to Tier 2/3), but the
  // bank should stay fully covered — flag as an error to catch authoring
  // drift early. See docs/DRILL_ROUTING_PLAN.md.
  if (q.explanation && !/\*\*SAT Pattern:\s*([^*]+?)\s*\*\*/.test(q.explanation)) {
    errors.push(`${label}: explanation missing **SAT Pattern: <Title>** header`);
  }

  // Inline explanation figures (```seva-figure``` blocks). The render path
  // silently strips anything invalid so students never see raw JSON — which
  // means a typo'd block would silently LOSE its figure. Authored content must
  // therefore be fully valid here: every fence closed, every body parseable,
  // every type known to the QuestionDiagram dispatcher, and no stray ``` runs.
  if (q.explanation && q.explanation.includes('```')) {
    const opens = (q.explanation.match(/```[ \t]*seva-figure\b/g) || []).length;
    const closed = [...q.explanation.matchAll(/```[ \t]*seva-figure\b[^\n]*\n([\s\S]*?)```/g)];
    const totalFences = (q.explanation.match(/```/g) || []).length;
    if (closed.length !== opens) errors.push(`${label}: unclosed seva-figure fence`);
    if (totalFences !== closed.length * 2 + (opens - closed.length)) {
      errors.push(`${label}: stray \`\`\` in explanation — only seva-figure blocks may use fences`);
    }
    closed.forEach((m, i) => {
      if (!parseFigureSpec(m[1])) {
        errors.push(`${label}: seva-figure block ${i + 1} is invalid (bad JSON, unknown type, or bad shape)`);
      }
    });
  }

  (q.skills || []).forEach(s => { skillCoverage[s] = (skillCoverage[s] || 0) + 1; });
  domainCounts[q.domain] = (domainCounts[q.domain] || 0) + 1;
  diffCounts[q.difficulty] = (diffCounts[q.difficulty] || 0) + 1;
});

// Cross-shard similarity check (skipped — generatedOfficial.js parked, see header).
// When the rebuilt pipeline ships, restore this block:
//   for (const g of generatedTokens) for (const h of handTokens)
//     if (jaccardSimilarity(g.tokens, h.tokens) >= 0.92) warnings.push(...)

console.log('\n=== QUESTION BANK VALIDATION ===');
console.log(`Total questions: ${bank.length} (hand-authored only — generated bank parked)`);
console.log(`Unique IDs: ${ids.size}`);
console.log('\nBy domain:', domainCounts);
console.log('By difficulty:', diffCounts);

// Answer-key position distribution AS SERVED — after rebalanceAnswerKey runs at
// bank assembly. The raw shards skew ~59% A (and choices aren't shuffled at
// render), so a student could game drills by "guess A"; the load-time rebalance
// flattens the served bank to ~25% each. This check now guards that the
// rebalance keeps the served distribution balanced (warns, non-fatal, if it
// ever drifts outside a healthy band). See the 2026-06-27 bug audit (#14).
const mcTotal = answerPos.A + answerPos.B + answerPos.C + answerPos.D;
if (mcTotal > 0) {
  const pct = (n) => Math.round((n / mcTotal) * 100);
  console.log(`Answer-key position: A ${answerPos.A} (${pct(answerPos.A)}%), B ${answerPos.B} (${pct(answerPos.B)}%), C ${answerPos.C} (${pct(answerPos.C)}%), D ${answerPos.D} (${pct(answerPos.D)}%)`);
  const pcts = ['A', 'B', 'C', 'D'].map(k => pct(answerPos[k]));
  if (Math.max(...pcts) > 40 || Math.min(...pcts) < 12) {
    warnings.push(`answer-key position is skewed (A ${pcts[0]}% / B ${pcts[1]}% / C ${pcts[2]}% / D ${pcts[3]}%); choices are NOT shuffled at render — rebalance the bank toward ~25% each`);
  }
}
console.log(`Skills covered: ${Object.keys(skillCoverage).length} / ${TAXONOMY_SKILLS.length}`);

const uncovered = TAXONOMY_SKILLS.filter(s => !skillCoverage[s]);
if (uncovered.length > 0) {
  console.log(`\nWARNING: ${uncovered.length} taxonomy skills not covered:`, uncovered);
}

if (warnings.length > 0) {
  console.log(`\n${warnings.length} warnings:`);
  warnings.slice(0, 15).forEach(w => console.log(`  WARN: ${w}`));
  if (warnings.length > 15) console.log(`  ... and ${warnings.length - 15} more`);
}

if (errors.length > 0) {
  console.log(`\n${errors.length} ERRORS:`);
  errors.forEach(e => console.log(`  - ${e}`));
  process.exit(1);
} else {
  console.log('\nAll checks passed.');
}
