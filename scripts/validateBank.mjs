import { algebraBank } from '../src/data/questions/bank/algebra.js';
import { problemSolvingBank } from '../src/data/questions/bank/problemSolving.js';
import { advancedMathBank } from '../src/data/questions/bank/advancedMath.js';
import { geometryBank } from '../src/data/questions/bank/geometry.js';

const bank = [...algebraBank, ...problemSolvingBank, ...advancedMathBank, ...geometryBank];

const errors = [];
const ids = new Set();
const skillCoverage = {};
const domainCounts = {};
const diffCounts = {};

bank.forEach((q, i) => {
  if (!q.id) errors.push(`Q[${i}]: missing id`);
  if (ids.has(q.id)) errors.push(`Q[${i}]: duplicate id "${q.id}"`);
  ids.add(q.id);

  if (!['algebra', 'problem-solving', 'advanced-math', 'geometry'].includes(q.domain)) {
    errors.push(`${q.id}: invalid domain "${q.domain}"`);
  }
  if (!q.skills || q.skills.length === 0) errors.push(`${q.id}: missing skills`);
  if (!['easy', 'medium', 'hard'].includes(q.difficulty)) errors.push(`${q.id}: invalid difficulty`);
  if (!['multiple-choice', 'fill-in'].includes(q.type)) errors.push(`${q.id}: invalid type "${q.type}"`);
  if (!q.question) errors.push(`${q.id}: missing question stem`);
  if (q.type === 'multiple-choice') {
    if (!q.choices || q.choices.length !== 4) errors.push(`${q.id}: MC must have 4 choices`);
    if (!['A', 'B', 'C', 'D'].includes(q.correctAnswer)) errors.push(`${q.id}: MC correctAnswer must be A-D`);
  }
  if (!q.explanation) errors.push(`${q.id}: missing explanation`);

  (q.skills || []).forEach(s => { skillCoverage[s] = (skillCoverage[s] || 0) + 1; });
  domainCounts[q.domain] = (domainCounts[q.domain] || 0) + 1;
  diffCounts[q.difficulty] = (diffCounts[q.difficulty] || 0) + 1;
});

console.log(`\n=== QUESTION BANK VALIDATION ===`);
console.log(`Total questions: ${bank.length}`);
console.log(`Unique IDs: ${ids.size}`);
console.log(`\nBy domain:`, domainCounts);
console.log(`By difficulty:`, diffCounts);
console.log(`Skills covered: ${Object.keys(skillCoverage).length}`);

const uncovered = ['slope-from-points', 'slope-intercept-form', 'word-problem-to-equation', 'table-to-equation',
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
  'degrees-to-radians', 'radians-to-degrees', 'radian-measure-understanding'
].filter(s => !skillCoverage[s]);

if (uncovered.length > 0) {
  console.log(`\nWARNING: ${uncovered.length} taxonomy skills not covered:`, uncovered);
}

if (errors.length > 0) {
  console.log(`\n${errors.length} ERRORS:`);
  errors.forEach(e => console.log(`  - ${e}`));
  process.exit(1);
} else {
  console.log(`\nAll checks passed.`);
}
