#!/usr/bin/env node
/**
 * Question Bank Validator
 *
 * Validates ALL bank shards (hand-authored + generated official) against the
 * AUTHORING_SPEC schema, checks for duplicates, skill coverage, and
 * cross-shard text-similarity thresholds.
 */

import { algebraBank } from '../src/data/questions/bank/algebra.js';
import { problemSolvingBank } from '../src/data/questions/bank/problemSolving.js';
import { advancedMathBank } from '../src/data/questions/bank/advancedMath.js';
import { geometryBank } from '../src/data/questions/bank/geometry.js';
import { generatedOfficialBank } from '../src/data/questions/bank/generatedOfficial.js';

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
  'margin-of-error', 'unit-conversion', 'squared-cubed-units', 'rate-conversion',
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
const generated = [...generatedOfficialBank];
const bank = [...handAuthored, ...generated];

const errors = [];
const warnings = [];
const ids = new Set();
const skillCoverage = {};
const domainCounts = {};
const diffCounts = {};

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
  }
  if (!q.explanation) errors.push(`${label}: missing explanation`);

  (q.skills || []).forEach(s => { skillCoverage[s] = (skillCoverage[s] || 0) + 1; });
  domainCounts[q.domain] = (domainCounts[q.domain] || 0) + 1;
  diffCounts[q.difficulty] = (diffCounts[q.difficulty] || 0) + 1;
});

const CROSS_SIMILARITY_THRESHOLD = 0.92;
let similarPairs = 0;

if (generated.length > 0 && handAuthored.length > 0) {
  const handTokens = handAuthored.map(q => ({ id: q.id, tokens: tokenize(q.question) }));
  const genTokens = generated.map(q => ({ id: q.id, tokens: tokenize(q.question) }));

  for (const g of genTokens) {
    for (const h of handTokens) {
      const sim = jaccardSimilarity(g.tokens, h.tokens);
      if (sim >= CROSS_SIMILARITY_THRESHOLD) {
        warnings.push(`High similarity (${(sim * 100).toFixed(0)}%) between generated ${g.id} and hand-authored ${h.id}`);
        similarPairs++;
      }
    }
  }
}

console.log('\n=== QUESTION BANK VALIDATION ===');
console.log(`Total questions: ${bank.length} (hand-authored: ${handAuthored.length}, generated: ${generated.length})`);
console.log(`Unique IDs: ${ids.size}`);
console.log('\nBy domain:', domainCounts);
console.log('By difficulty:', diffCounts);
console.log(`Skills covered: ${Object.keys(skillCoverage).length} / ${TAXONOMY_SKILLS.length}`);

const uncovered = TAXONOMY_SKILLS.filter(s => !skillCoverage[s]);
if (uncovered.length > 0) {
  console.log(`\nWARNING: ${uncovered.length} taxonomy skills not covered:`, uncovered);
}

if (similarPairs > 0) {
  console.log(`\nSimilarity check: ${similarPairs} generated/hand-authored pairs above ${(CROSS_SIMILARITY_THRESHOLD * 100).toFixed(0)}% threshold`);
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
