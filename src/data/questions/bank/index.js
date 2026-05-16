import { algebraBank } from './algebra';
import { problemSolvingBank } from './problemSolving';
import { advancedMathBank } from './advancedMath';
import { geometryBank } from './geometry';
import { allQuestions as topicQuestionsByModule } from '../index';
import { extractSatPattern } from '../extractSatPattern';
import { PATTERN_TO_CB_SKILL } from '../cbSkillTaxonomy';
import { makeLogger } from '../../../utils/log';

const log = makeLogger('drill-routing');

// NOTE: `generatedOfficial.js` (1,750 items produced by the regex-based
// `pdf-first-strict-rewrite` pipeline) is intentionally *not* wired in here.
// That pipeline mutates numbers and names independently across stem, choices,
// and explanation, producing internally-incoherent items (numbers in the
// stem don't match the explanation, names disagree, etc.). The file is kept
// on disk so the pipeline can be repaired or replaced later, but the
// runtime drill flow only sees hand-authored content.

// ── Topic-file domain mapping ────────────────────────────────────────────────
// Topic files in `src/data/questions/{topic}.js` are hand-authored, calibrated
// SAT-style questions. They tag `skills` per question but lack a `domain`
// field — we infer it from the topic name so the bank's domain index works.
const TOPIC_DOMAIN = {
  'linear-equations':       'algebra',
  'systems':                'algebra',
  'functions':              'algebra',
  'equivalent-expressions': 'algebra',
  'quadratics':             'advanced-math',
  'exponents':              'advanced-math',
  'transformations':        'advanced-math',
  'percents':               'problem-solving',
  'dimensional-analysis':   'problem-solving',
  'statistics':             'problem-solving',
  'circles':                'geometry',
  'triangles':              'geometry',
  'volume':                 'geometry',
  'radians-degrees':        'geometry',
};

const sectionSlug = (s) => String(s).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

function flattenTopicQuestions(byModule) {
  const out = [];
  for (const [moduleId, sections] of Object.entries(byModule || {})) {
    const domain = TOPIC_DOMAIN[moduleId] || 'algebra';
    for (const [sectionName, questions] of Object.entries(sections || {})) {
      for (const q of (questions || [])) {
        if (!q || !Array.isArray(q.choices) || q.choices.length < 2) continue;
        out.push({
          ...q,
          // Namespace the ID — topic files use per-section integer IDs that collide
          // both within a topic (across sections) and across the bank's string IDs.
          id: `topic-${moduleId}-${sectionSlug(sectionName)}-${q.id}`,
          domain,
          type: q.type || 'multiple-choice',
          skills: Array.isArray(q.skills) ? q.skills : [],
          difficulty: q.difficulty || 'medium',
          authoredBy: q.authoredBy || 'performsat-engine',
          // Provenance back to the source topic file
          sourceModuleId: moduleId,
          sourceSectionName: sectionName,
          sourceQuestionId: q.id,
        });
      }
    }
  }
  return out;
}

const topicBank = flattenTopicQuestions(topicQuestionsByModule);

export const questionBank = [
  ...algebraBank,
  ...problemSolvingBank,
  ...advancedMathBank,
  ...geometryBank,
  ...topicBank,
];

const bankIndex = new Map(questionBank.map(q => [q.id, q]));
const skillIndex = new Map();
const domainIndex = new Map();
const difficultyIndex = new Map();

// Drill-routing indexes for the two-tier cascade in getTargetedWeaknessSet.
// `patternIndex` powers Tier 1 (exact SAT Pattern). `styleIndex` powers
// Tier 2 (sourceStyleRef). `patternToStyle` is the bank-derived
// many-to-one mapping that lets diagnosis-time SAT Patterns fall back to
// their parent sourceStyleRef when Tier 1 pool is too thin. Built once at
// module load from the bank items themselves — the bank IS the source of
// truth for this mapping.
const patternIndex = new Map();
const styleIndex = new Map();
const patternToStyle = new Map();
// CB skill index — maps each of the 19 official CB math skill slugs to the
// items whose SAT Pattern maps to that skill. Populated below via
// `PATTERN_TO_CB_SKILL`. Drives the Practice Bank UI's CB-skill-level
// "Mixed practice" drill.
const cbSkillIndex = new Map();

questionBank.forEach(q => {
  (q.skills || []).forEach(sid => {
    if (!skillIndex.has(sid)) skillIndex.set(sid, []);
    skillIndex.get(sid).push(q);
  });
  if (!domainIndex.has(q.domain)) domainIndex.set(q.domain, []);
  domainIndex.get(q.domain).push(q);

  if (!difficultyIndex.has(q.difficulty)) difficultyIndex.set(q.difficulty, []);
  difficultyIndex.get(q.difficulty).push(q);

  // Drill-routing indexes — driven by lazy extraction from explanation
  // (so adding a new bank item with the standard `**SAT Pattern: ...**`
  // header automatically registers it for Tier 1 matching).
  const satPattern = extractSatPattern(q.explanation);
  if (satPattern) {
    if (!patternIndex.has(satPattern)) patternIndex.set(satPattern, []);
    patternIndex.get(satPattern).push(q);
    if (q.sourceStyleRef && !patternToStyle.has(satPattern)) {
      patternToStyle.set(satPattern, q.sourceStyleRef);
    }
    const cbSkill = PATTERN_TO_CB_SKILL[satPattern];
    if (cbSkill) {
      if (!cbSkillIndex.has(cbSkill)) cbSkillIndex.set(cbSkill, []);
      cbSkillIndex.get(cbSkill).push(q);
    }
  }
  if (q.sourceStyleRef) {
    if (!styleIndex.has(q.sourceStyleRef)) styleIndex.set(q.sourceStyleRef, []);
    styleIndex.get(q.sourceStyleRef).push(q);
  }
});

export const SKILL_ALIAS_MAP = {
  // ── Statistics / Data ────────────────────────────────────────────────────
  'mean-median-mode':            ['calculate-mean', 'find-median', 'find-mode'],
  'statistics':                  ['calculate-mean', 'standard-deviation-concept', 'find-median'],
  'Statistics':                  ['calculate-mean', 'standard-deviation-concept', 'find-median'],
  'data-interpretation':         ['calculate-mean', 'standard-deviation-concept'],
  'Data interpretation':         ['calculate-mean', 'standard-deviation-concept'],
  'data-analysis':               ['calculate-mean', 'standard-deviation-concept', 'margin-of-error'],
  'Data Analysis':               ['calculate-mean', 'standard-deviation-concept', 'margin-of-error'],
  'standard-deviation':          ['standard-deviation-concept'],
  'Standard Deviation':          ['standard-deviation-concept'],
  'median':                      ['find-median'],
  'Median':                      ['find-median'],
  'mean':                        ['calculate-mean'],
  'find-mean':                   ['calculate-mean'],
  'dot-plots':                   ['find-median', 'calculate-mean', 'range-calculation'],
  'frequency-tables':            ['calculate-mean', 'find-median'],
  'bar-charts':                  ['calculate-mean'],
  'Bar Graphs':                  ['calculate-mean'],
  'scatterplots':                ['calculate-mean', 'margin-of-error'],
  'Scatterplots':                ['calculate-mean', 'margin-of-error'],
  'line-of-best-fit':            ['margin-of-error', 'slope-from-points'],
  'Line of Best Fit':            ['margin-of-error', 'slope-from-points'],
  'linear-regression':           ['slope-from-points', 'margin-of-error'],
  'sampling':                    ['margin-of-error', 'standard-deviation-concept'],
  'Sampling':                    ['margin-of-error', 'standard-deviation-concept'],
  'statistical-inference':       ['margin-of-error', 'standard-deviation-concept'],
  'Statistical Inference':       ['margin-of-error', 'standard-deviation-concept'],
  'Statistical inference':       ['margin-of-error', 'standard-deviation-concept'],
  'summation':                   ['calculate-mean', 'weighted-mean'],
  'two-way-tables':              ['two-way-table', 'probability-basics', 'calculate-mean'],
  'Two-Way Tables':              ['two-way-table', 'probability-basics', 'calculate-mean'],
  'two-way-table':               ['calculate-mean', 'find-median', 'margin-of-error'],
  'probability':                 ['probability-basics', 'margin-of-error'],
  'Probability':                 ['probability-basics', 'margin-of-error'],
  'probability-basics':          ['margin-of-error', 'standard-deviation-concept'],
  'conditional-probability':     ['margin-of-error', 'standard-deviation-concept', 'calculate-mean'],
  'Conditional Probability':     ['margin-of-error', 'standard-deviation-concept', 'calculate-mean'],

  // ── Percentages / Ratios / Rates ─────────────────────────────────────────
  'percents':                    ['percent-change', 'percent-of-value'],
  'percentages':                 ['percent-change', 'percent-of-value', 'percent-word-problems'],
  'Percentages':                 ['percent-change', 'percent-of-value', 'percent-word-problems'],
  'Percent':                     ['percent-change', 'percent-of-value'],
  'Percent Change':              ['percent-change', 'successive-percent-change'],
  'percent-increase':            ['percent-change', 'successive-percent-change'],
  'Perimeter and Area':          ['triangle-area', 'circle-area'],
  'ratios':                      ['percent-of-value', 'unit-conversion'],
  'Ratios':                      ['percent-of-value', 'unit-conversion'],
  'Ratios and proportions':      ['percent-of-value', 'unit-conversion', 'rate-conversion'],
  'ratio-proportion':            ['percent-of-value', 'unit-conversion', 'rate-conversion'],
  'proportions':                 ['percent-of-value', 'unit-conversion', 'rate-conversion'],
  'Proportions':                 ['percent-of-value', 'unit-conversion', 'rate-conversion'],
  'Unit Rate':                   ['rate-conversion', 'unit-conversion'],
  'Unit rates':                  ['rate-conversion', 'unit-conversion'],
  'unit-rates':                  ['rate-conversion', 'unit-conversion'],
  'Unit Conversion':             ['unit-conversion'],
  'Unit conversion':             ['unit-conversion'],
  'rate-problems':               ['rate-conversion', 'word-problem-to-equation'],
  'Rates':                       ['rate-conversion', 'word-problem-to-equation'],
  'density':                     ['word-problem-to-equation', 'rate-conversion'],
  'Population Density':          ['word-problem-to-equation', 'rate-conversion'],
  'dimensional-analysis':        ['unit-conversion', 'rate-conversion'],

  // ── Linear Algebra ────────────────────────────────────────────────────────
  'linear-equations':            ['word-problem-to-equation', 'slope-intercept-form'],
  'Linear Equations':            ['word-problem-to-equation', 'slope-intercept-form'],
  'Linear equations':            ['word-problem-to-equation', 'slope-intercept-form'],
  'linear-functions':            ['slope-intercept-form', 'function-evaluation'],
  'Linear functions':            ['slope-intercept-form', 'function-evaluation'],
  'linear-models':               ['word-problem-to-equation', 'slope-intercept-form'],
  'Linear models':               ['word-problem-to-equation', 'slope-intercept-form'],
  'linear-expressions':          ['slope-intercept-form', 'word-problem-to-equation'],
  'linear-inequalities':         ['word-problem-to-equation', 'slope-intercept-form'],
  'Linear Inequalities':         ['word-problem-to-equation', 'slope-intercept-form'],
  'Linear inequalities':         ['word-problem-to-equation', 'slope-intercept-form'],
  'Linear function interpretation': ['slope-intercept-form', 'function-notation'],
  'slope':                       ['slope-from-points', 'slope-intercept-form'],
  'Slope':                       ['slope-from-points', 'slope-intercept-form'],
  'slope-interpretation':        ['slope-from-points', 'slope-intercept-form'],
  'Rate of Change':              ['slope-from-points', 'slope-intercept-form'],
  'point-slope-form':            ['slope-from-points', 'slope-intercept-form'],
  'intercepts':                  ['slope-intercept-form', 'word-problem-to-equation'],
  'x-intercept':                 ['slope-intercept-form', 'finding-roots-factoring'],
  'coordinate-geometry':         ['slope-from-points', 'slope-intercept-form'],
  'Coordinate Geometry':         ['slope-from-points', 'slope-intercept-form'],
  'Graph Analysis':              ['slope-from-points', 'slope-intercept-form'],
  'Graph Interpretation':        ['slope-intercept-form', 'function-notation'],
  'reading-graphs':              ['slope-intercept-form', 'function-notation'],
  'parallel-lines':              ['parallel-line-slope', 'writing-parallel-equation'],
  'Parallel Lines':              ['parallel-line-slope', 'writing-parallel-equation'],
  'Parallel lines':              ['parallel-line-slope', 'writing-parallel-equation'],
  'perpendicular-lines':         ['perpendicular-negative-reciprocal', 'writing-perpendicular-equation'],
  'Perpendicular Lines':         ['perpendicular-negative-reciprocal', 'writing-perpendicular-equation'],
  'solving-equations':           ['word-problem-to-equation', 'slope-intercept-form'],
  'Solving Equations':           ['word-problem-to-equation', 'slope-intercept-form'],
  'Solving equations':           ['word-problem-to-equation', 'slope-intercept-form'],
  'solving-inequalities':        ['word-problem-to-equation', 'setting-up-systems'],
  'inequalities':                ['word-problem-to-equation', 'setting-up-systems'],
  'Inequalities':                ['word-problem-to-equation', 'setting-up-systems'],
  'Linear Inequalities':         ['word-problem-to-equation', 'slope-intercept-form'],
  'word-problems':               ['word-problem-to-equation'],
  'Word Problems':               ['word-problem-to-equation'],
  'Translating word problems':   ['word-problem-to-equation'],
  'rearranging-formulas':        ['function-evaluation', 'word-problem-to-equation'],
  'Rearranging formulas':        ['function-evaluation', 'word-problem-to-equation'],
  'formula-rearrangement':       ['function-evaluation', 'word-problem-to-equation'],
  'Physics Applications':        ['word-problem-to-equation'],
  'modeling':                    ['word-problem-to-equation', 'function-evaluation'],
  'interpretation':              ['function-notation', 'slope-intercept-form'],
  'multi-step-reasoning':        ['word-problem-to-equation', 'function-evaluation'],

  // ── Systems of Equations ──────────────────────────────────────────────────
  'systems-of-equations':        ['system-solution-types', 'setting-up-systems', 'substitution-method', 'elimination-method'],
  'Systems of Equations':        ['system-solution-types', 'setting-up-systems', 'substitution-method', 'elimination-method'],
  'Systems of equations':        ['system-solution-types', 'setting-up-systems', 'substitution-method', 'elimination-method'],
  'systems-of-inequalities':     ['system-solution-types', 'setting-up-systems'],
  'Systems of Inequalities':     ['system-solution-types', 'setting-up-systems'],
  'substitution':                ['substitution-method'],
  'Substitution':                ['substitution-method'],
  'elimination':                 ['elimination-method'],
  'graphing-systems':            ['graphing-systems'],
  'no-solution':                 ['infinite-solutions-condition', 'system-solution-types'],
  'Infinitely Many Solutions':   ['infinite-solutions-condition'],
  'infinite-solutions':          ['infinite-solutions-condition'],
  'Special solutions':           ['infinite-solutions-condition', 'system-solution-types'],

  // ── Functions ─────────────────────────────────────────────────────────────
  'function-interpretation':     ['function-notation', 'slope-intercept-form'],
  'evaluating-functions':        ['function-evaluation'],
  'Function Evaluation':         ['function-evaluation'],
  'function-equations':          ['function-evaluation', 'finding-function-from-conditions'],
  'function-identification':     ['function-evaluation', 'function-notation'],
  'function-operations':         ['function-composition', 'function-evaluation'],
  'function-domain':             ['domain-restrictions'],
  'domain':                      ['domain-restrictions'],
  'Functions':                   ['function-evaluation', 'function-notation'],
  'Function Composition':        ['function-composition'],
  'Composed Functions':          ['function-composition'],
  'piecewise-functions':         ['function-evaluation', 'function-notation'],
  'graph-transformations':       ['function-transformations'],
  'Transformations':             ['function-transformations'],
  'translations':                ['function-transformations'],
  'horizontal-shifts':           ['function-transformations'],
  'vertical-shifts':             ['function-transformations'],
  'reflections':                 ['function-transformations'],
  'arithmetic-sequences':        ['word-problem-to-equation', 'function-evaluation'],
  'modeling':                    ['word-problem-to-equation', 'function-evaluation'],

  // ── Quadratics / Polynomials ──────────────────────────────────────────────
  'quadratics':                  ['identify-quadratic', 'finding-roots-factoring'],
  'quadratic-functions':         ['identify-quadratic', 'vertex-formula', 'parabola-direction'],
  'Quadratic Functions':         ['identify-quadratic', 'vertex-formula', 'parabola-direction'],
  'Quadratic functions':         ['identify-quadratic', 'vertex-formula'],
  'quadratic-equations':         ['identify-quadratic', 'finding-roots-factoring', 'discriminant-analysis'],
  'Quadratic Equations':         ['identify-quadratic', 'finding-roots-factoring', 'discriminant-analysis'],
  'Quadratic equations':         ['identify-quadratic', 'finding-roots-factoring', 'discriminant-analysis'],
  'quadratic-expressions':       ['identify-quadratic', 'converting-quadratic-forms'],
  'quadratic-formula':           ['discriminant-analysis', 'finding-roots-factoring'],
  'Quadratic Formula':           ['discriminant-analysis', 'finding-roots-factoring'],
  'quadratic-systems':           ['system-solution-types', 'identify-quadratic'],
  'discriminant':                ['discriminant-analysis'],
  'Discriminant':                ['discriminant-analysis'],
  'vertex':                      ['vertex-formula', 'vertex-form'],
  'Vertex Form':                 ['vertex-form', 'vertex-formula'],
  'Quadratic Vertex':            ['vertex-formula', 'vertex-form'],
  'completing-the-square':       ['completing-square-circles', 'vertex-form'],
  'Completing the Square':       ['completing-square-circles', 'vertex-form'],
  'circle-equations':            ['circle-equation'],
  'Circle Equations':            ['circle-equation'],
  'factoring':                   ['finding-roots-factoring', 'difference-of-squares'],
  'Factoring':                   ['finding-roots-factoring', 'difference-of-squares'],
  'Polynomial Factoring':        ['finding-roots-factoring', 'difference-of-squares'],
  'factored-form':               ['finding-roots-factoring', 'roots-from-factors'],
  'special-products':            ['perfect-square-trinomial', 'difference-of-squares'],
  'zeros':                       ['finding-roots-factoring', 'roots-from-factors'],
  'Zeros':                       ['finding-roots-factoring', 'roots-from-factors'],
  'zero-product-property':       ['finding-roots-factoring', 'roots-from-factors'],
  'sum-of-roots':                ['roots-from-factors', 'finding-roots-factoring'],
  'vietas-formulas':             ['roots-from-factors', 'finding-roots-factoring'],
  'remainder-theorem':           ['finding-roots-factoring', 'roots-from-factors'],
  'polynomial-operations':       ['distributive-property', 'combining-like-terms'],
  'Polynomial Addition':         ['combining-like-terms'],
  'Polynomial Equations':        ['finding-roots-factoring', 'roots-from-factors'],
  'Polynomial Functions':        ['finding-roots-factoring', 'function-evaluation'],
  'Polynomials':                 ['combining-like-terms', 'distributive-property', 'finding-roots-factoring'],
  'polynomials':                 ['combining-like-terms', 'distributive-property', 'finding-roots-factoring'],
  'polynomial-functions':        ['finding-roots-factoring', 'function-evaluation'],
  'polynomial-expansion':        ['distributive-property', 'combining-like-terms'],
  'algebraic-manipulation':      ['distributive-property', 'combining-like-terms'],
  'Algebraic Manipulation':      ['distributive-property', 'combining-like-terms'],
  'algebraic-expressions':       ['distributive-property', 'combining-like-terms'],
  'Evaluating Expressions':      ['function-evaluation', 'distributive-property'],
  'Expressions':                 ['distributive-property', 'combining-like-terms'],
  'equivalent-expressions':      ['distributive-property', 'combining-like-terms'],

  // ── Exponents / Exponentials / Radicals ───────────────────────────────────
  'exponents':                   ['exponent-laws', 'zero-negative-exponents'],
  'Exponents':                   ['exponent-laws', 'zero-negative-exponents'],
  'exponent-rules':              ['exponent-laws', 'zero-negative-exponents'],
  'Exponent Rules':              ['exponent-laws', 'zero-negative-exponents'],
  'Exponents and radicals':      ['exponent-laws', 'zero-negative-exponents'],
  'scientific-notation':         ['exponent-laws', 'zero-negative-exponents'],
  'exponential-functions':       ['exponential-growth-decay', 'exponential-y-intercept'],
  'Exponential Functions':       ['exponential-growth-decay', 'exponential-y-intercept'],
  'Exponential functions':       ['exponential-growth-decay', 'exponential-y-intercept'],
  'Exponential Equations':       ['exponential-growth-decay', 'exponential-y-intercept'],
  'Exponential Growth':          ['exponential-growth-decay'],
  'exponential-growth':          ['exponential-growth-decay'],
  'Exponential Decay':           ['exponential-growth-decay'],
  'half-life':                   ['exponential-growth-decay'],
  'doubling':                    ['exponential-growth-decay'],
  'comparing-exponentials':      ['comparing-exponentials'],
  'radicals':                    ['simplifying-rational-expressions', 'exponent-laws'],
  'radical-equations':           ['simplifying-rational-expressions'],
  'Radical Equations':           ['simplifying-rational-expressions'],
  'radical-functions':           ['simplifying-rational-expressions', 'function-evaluation'],
  'rationalizing-denominators':  ['simplifying-rational-expressions'],
  'rational-expressions':        ['simplifying-rational-expressions'],
  'Rational Expressions':        ['simplifying-rational-expressions'],
  'rational-functions':          ['simplifying-rational-expressions', 'function-evaluation'],
  'Rational Functions':          ['simplifying-rational-expressions'],
  'Rational Equations':          ['simplifying-rational-expressions'],
  'fractions':                   ['percent-of-value', 'simplifying-rational-expressions'],
  'absolute-value-equations':    ['word-problem-to-equation', 'slope-intercept-form'],
  'Absolute Value Equations':    ['word-problem-to-equation', 'slope-intercept-form'],
  'Absolute value equations':    ['word-problem-to-equation', 'slope-intercept-form'],
  'Absolute Value':              ['word-problem-to-equation', 'slope-intercept-form'],
  'Absolute Value Functions':    ['function-notation', 'function-transformations'],

  // ── Trigonometry ──────────────────────────────────────────────────────────
  'trigonometry':                ['soh-cah-toa', 'special-right-triangles'],
  'Trigonometry':                ['soh-cah-toa', 'special-right-triangles'],
  'right-triangle-trig':         ['soh-cah-toa', 'special-right-triangles'],
  'trig-identities':             ['soh-cah-toa', 'special-right-triangles'],
  'radians-degrees':             ['degrees-to-radians', 'radians-to-degrees'],

  // ── Geometry ──────────────────────────────────────────────────────────────
  'triangles':                   ['pythagorean-theorem', 'triangle-angle-sum', 'triangle-area'],
  'Triangles':                   ['pythagorean-theorem', 'triangle-angle-sum', 'triangle-area'],
  'right-triangles':             ['pythagorean-theorem', 'soh-cah-toa', 'special-right-triangles'],
  'Right Triangles':             ['pythagorean-theorem', 'soh-cah-toa', 'special-right-triangles'],
  'Special Right Triangles':     ['special-right-triangles'],
  'Special Triangles':           ['special-right-triangles'],
  'Pythagorean Theorem':         ['pythagorean-theorem'],
  'similar-triangles':           ['similar-triangles'],
  'Similar Triangles':           ['similar-triangles'],
  'Similar triangles':           ['similar-triangles'],
  'triangle-angles':             ['triangle-angle-sum'],
  'Triangle Angles':             ['triangle-angle-sum'],
  'Triangle area':               ['triangle-area'],
  'isosceles-triangles':         ['triangle-angle-sum', 'triangle-area'],
  'triangle-congruence':         ['similar-triangles', 'triangle-angle-sum'],
  'Congruent Triangles':         ['similar-triangles', 'triangle-angle-sum'],
  'angles':                      ['triangle-angle-sum'],
  'Angle Relationships':         ['triangle-angle-sum', 'parallel-line-slope'],
  'angle-measures':              ['triangle-angle-sum'],
  'angle-relationships':         ['triangle-angle-sum', 'parallel-line-slope'],
  'exterior-angles':             ['triangle-angle-sum'],
  'polygons':                    ['triangle-angle-sum'],
  'Transversals':                ['triangle-angle-sum', 'parallel-line-slope'],
  'transversals':                ['triangle-angle-sum', 'parallel-line-slope'],
  'circles':                     ['circle-equation', 'circle-area', 'circle-parts'],
  'Circles':                     ['circle-equation', 'circle-area', 'circle-parts'],
  'Circles and Squares':         ['circle-equation', 'circle-area'],
  'inscribed-shapes':            ['circle-equation', 'circle-area'],
  'area':                        ['triangle-area', 'sector-area', 'circle-area'],
  'Area':                        ['triangle-area', 'sector-area', 'circle-area'],
  'rectangles':                  ['triangle-area', 'circle-area'],
  'squares':                     ['triangle-area', 'circle-area'],
  'volume':                      ['volume-prism', 'volume-sphere', 'volume-pyramid-cone'],
  'Volume':                      ['volume-prism', 'volume-sphere', 'volume-pyramid-cone'],
  'cube-volume':                 ['volume-prism'],
  'cylinders':                   ['volume-prism', 'volume-pyramid-cone'],
  'sphere-volume':               ['volume-sphere'],
  'surface-area':                ['volume-prism', 'squared-cubed-units'],
  'tables':                      ['table-to-equation', 'calculate-mean'],
  'geometry':                    ['pythagorean-theorem', 'triangle-area', 'circle-area', 'volume-prism'],
  'Geometry':                    ['pythagorean-theorem', 'triangle-area', 'circle-area', 'volume-prism'],

  // ── Broad / Catch-all domains ────────────────────────────────────────────
  'algebra':                     ['word-problem-to-equation', 'slope-intercept-form', 'slope-from-points'],
  'Algebra':                     ['word-problem-to-equation', 'slope-intercept-form', 'slope-from-points'],
  'Advanced Math':               ['identify-quadratic', 'finding-roots-factoring', 'exponential-growth-decay'],
  'Problem Solving':             ['word-problem-to-equation', 'percent-word-problems'],
  'Problem-Solving and Data Analysis': ['word-problem-to-equation', 'calculate-mean', 'percent-change'],
  'Arithmetic':                  ['percent-change', 'percent-of-value'],
};

function resolveSkillIds(rawIds) {
  const resolved = new Set();
  for (const id of rawIds) {
    if (skillIndex.has(id)) {
      resolved.add(id);
    }
    const aliases = SKILL_ALIAS_MAP[id];
    if (aliases) {
      aliases.forEach(a => resolved.add(a));
    }
  }
  return [...resolved];
}

export const getQuestionById = (id) => bankIndex.get(id) || null;

// Applies the difficulty / excludeIds / limit options uniformly across all
// pool-builder accessors. Keeps the post-filter surface DRY across Tier 1,
// Tier 2, and Tier 3 of `getTargetedWeaknessSet`.
const applyFilters = (input, { difficulty, excludeIds = [], limit } = {}) => {
  let results = input;
  if (difficulty) results = results.filter(q => q.difficulty === difficulty);
  if (excludeIds.length) results = results.filter(q => !excludeIds.includes(q.id));
  if (limit) results = results.slice(0, limit);
  return results;
};

export const getQuestionsBySkillIds = (skillIds, opts = {}) => {
  const resolved = resolveSkillIds(skillIds);
  const seen = new Set();
  const results = [];
  resolved.forEach(sid => {
    (skillIndex.get(sid) || []).forEach(q => {
      if (!seen.has(q.id)) {
        seen.add(q.id);
        results.push(q);
      }
    });
  });
  return applyFilters(results, opts);
};

export const getQuestionsByDomain = (domain, opts = {}) => {
  return applyFilters([...(domainIndex.get(domain) || [])], opts);
};

/**
 * Look up bank items by official College Board math skill slug (one of the
 * 19 slugs in `cbSkillTaxonomy.js`, e.g., `linear-equations-one-variable`).
 *
 * Powers the Practice Bank UI's CB-skill-level "Mixed practice" button —
 * students get a shuffled drill of every item under that skill regardless
 * of the underlying pattern granularity.
 *
 * @param {string} cbSkillSlug — CB skill slug (post-taxonomy)
 * @param {object} [opts] — { difficulty, excludeIds, limit }
 * @returns {Question[]} items whose SAT Pattern maps to this CB skill.
 */
export const getQuestionsByCBSkill = (cbSkillSlug, opts = {}) => {
  return applyFilters([...(cbSkillIndex.get(cbSkillSlug) || [])], opts);
};

/**
 * Look up bank items by exact SAT Pattern tag (kebab-cased). Powers Tier 1
 * of the drill-routing cascade in `getTargetedWeaknessSet`.
 *
 * @param {string[]} patterns — kebab-cased pattern keys (deduped, unioned)
 * @param {object} [opts] — { difficulty, excludeIds, limit }
 * @returns {Question[]} deduped, filtered pool. Empty if no patterns hit.
 */
export const getQuestionsBySatPatterns = (patterns, opts = {}) => {
  const seen = new Set();
  const results = [];
  patterns.forEach(p => {
    (patternIndex.get(p) || []).forEach(q => {
      if (!seen.has(q.id)) {
        seen.add(q.id);
        results.push(q);
      }
    });
  });
  return applyFilters(results, opts);
};

/**
 * Look up bank items by sourceStyleRef (a broader category than SAT
 * Pattern — multiple SAT Patterns roll up to one sourceStyleRef). Powers
 * Tier 2 of the drill-routing cascade.
 *
 * @param {string[]} styles — sourceStyleRef values (deduped, unioned)
 * @param {object} [opts] — { difficulty, excludeIds, limit }
 * @returns {Question[]} deduped, filtered pool. Empty if no styles hit.
 */
export const getQuestionsByStyles = (styles, opts = {}) => {
  const seen = new Set();
  const results = [];
  styles.forEach(s => {
    (styleIndex.get(s) || []).forEach(q => {
      if (!seen.has(q.id)) {
        seen.add(q.id);
        results.push(q);
      }
    });
  });
  return applyFilters(results, opts);
};

const shuffle = (arr) => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

// ── Drill-routing cascade thresholds ──────────────────────────────────────
// See docs/DRILL_ROUTING_PLAN.md for calibration rationale.
//
/** Minimum bank items required to serve a Tier 1 (exact SAT Pattern) drill.
 *  Below this, cascade falls through to Tier 2. Calibrated to ~one round
 *  size (rounds are 8 questions per AssignedPracticeShell wiring). */
const TIER1_PATTERN_THRESHOLD = 8;

/** Minimum bank items required to serve a Tier 2 (sourceStyleRef) drill.
 *  Below this, cascade falls through to skill-level matching (Tier 3,
 *  the legacy behavior). */
const TIER2_STYLE_THRESHOLD = 12;

// Selects `count` items from a pool, optionally honoring a difficultyMix
// (a {easy, medium, hard} ratio summing to ~1). Extracted from the
// original `getTargetedWeaknessSet` so each cascade tier can reuse it.
const selectFromPool = (pool, count, difficultyMix) => {
  if (difficultyMix) {
    const easy = shuffle(pool.filter(q => q.difficulty === 'easy'))
      .slice(0, Math.ceil(count * (difficultyMix.easy || 0.3)));
    const medium = shuffle(pool.filter(q => q.difficulty === 'medium'))
      .slice(0, Math.ceil(count * (difficultyMix.medium || 0.45)));
    const hard = shuffle(pool.filter(q => q.difficulty === 'hard'))
      .slice(0, Math.ceil(count * (difficultyMix.hard || 0.25)));
    return shuffle([...easy, ...medium, ...hard]).slice(0, count);
  }
  return shuffle(pool).slice(0, count);
};

/**
 * Build a targeted drill pool for a set of weaknesses, applying the
 * three-tier cascade described in docs/DRILL_ROUTING_PLAN.md:
 *
 *   1. Tier 1 — exact SAT Pattern match (weakness.missedPatterns).
 *      Fires when pool ≥ TIER1_PATTERN_THRESHOLD.
 *   2. Tier 2 — derived sourceStyleRef (parent category of patterns).
 *      Fires when pool ≥ TIER2_STYLE_THRESHOLD.
 *   3. Tier 3 — skill-level matching (legacy behavior). Always fires as
 *      the floor; if even that is empty, expand to domain.
 *
 * Legacy weaknesses (hydrated from Firestore plans saved before this
 * change) have no `missedPatterns` field → Tier 1 + Tier 2 short-circuit
 * on empty input → Tier 3 fires with byte-identical behavior to today.
 *
 * @param {object} args
 * @param {Array} args.weakSkills — weakness objects (may carry missedPatterns)
 * @param {Array} [args.errorTypes] — preserved for API compat (unused today)
 * @param {object} [args.difficultyMix] — { easy, medium, hard } ratios
 * @param {number} [args.count=10] — number of drill questions to return
 * @param {string[]} [args.excludeIds] — question IDs to skip
 * @returns {Question[]} shuffled drill pool
 */
// eslint-disable-next-line no-unused-vars
export const getTargetedWeaknessSet = ({
  weakSkills = [],
  errorTypes = [],
  difficultyMix,
  count = 10,
  excludeIds = [],
  // Threshold overrides — primarily for unit tests. Production callers
  // omit these and pick up the module-level defaults below. Lowering
  // them is a deliberate v1 → v2 tuning lever, not an API surface to
  // call from app code.
  tier1Threshold = TIER1_PATTERN_THRESHOLD,
  tier2Threshold = TIER2_STYLE_THRESHOLD,
}) => {
  // ── Tier 1 — exact SAT Pattern ──────────────────────────────────────
  const patterns = weakSkills.flatMap(w =>
    Array.isArray(w?.missedPatterns) ? w.missedPatterns : []
  );
  if (patterns.length) {
    const pool = getQuestionsBySatPatterns(patterns, { excludeIds });
    if (pool.length >= tier1Threshold) {
      log.info(`Tier 1 (satPattern) matched, pool=${pool.length}`);
      return selectFromPool(pool, count, difficultyMix);
    }
  }

  // ── Tier 2 — derived sourceStyleRef ─────────────────────────────────
  const derivedStyles = [...new Set(
    patterns.map(p => patternToStyle.get(p)).filter(Boolean)
  )];
  if (derivedStyles.length) {
    const pool = getQuestionsByStyles(derivedStyles, { excludeIds });
    if (pool.length >= tier2Threshold) {
      log.info(`Tier 2 (sourceStyleRef) matched, pool=${pool.length}`);
      return selectFromPool(pool, count, difficultyMix);
    }
  }

  // ── Tier 3 — skill (legacy behavior, preserved byte-identically) ────
  const skillIds = weakSkills.map(w => w.skillId || w.skill || w);
  let pool = getQuestionsBySkillIds(skillIds, { excludeIds });

  if (pool.length === 0 && weakSkills.length > 0) {
    const domains = [...new Set(weakSkills.map(w => w.domain).filter(Boolean))];
    domains.forEach(d => {
      pool.push(...getQuestionsByDomain(d, { excludeIds }));
    });
  }

  log.info(`Tier 3 (skill) matched, pool=${pool.length}`);
  return selectFromPool(pool, count, difficultyMix);
};

export const getBankStats = () => {
  const stats = { total: questionBank.length, byDomain: {}, byDifficulty: {}, bySkill: {} };
  domainIndex.forEach((qs, d) => { stats.byDomain[d] = qs.length; });
  difficultyIndex.forEach((qs, d) => { stats.byDifficulty[d] = qs.length; });
  skillIndex.forEach((qs, sid) => { stats.bySkill[sid] = qs.length; });
  return stats;
};

/**
 * Surfaces the drill-routing index state for testing and diagnostics.
 * Exposes pool sizes per SAT Pattern / sourceStyleRef and the
 * pattern→style mapping coverage. Read-only — returned objects are
 * fresh copies, never the live Maps.
 */
export const getBankRoutingStats = () => {
  const byPattern = {};
  patternIndex.forEach((qs, p) => { byPattern[p] = qs.length; });
  const byStyle = {};
  styleIndex.forEach((qs, s) => { byStyle[s] = qs.length; });
  const patternToStyleEntries = {};
  patternToStyle.forEach((style, pattern) => { patternToStyleEntries[pattern] = style; });
  return {
    distinctPatterns: patternIndex.size,
    distinctStyles: styleIndex.size,
    patternToStyleCoverage: patternToStyle.size,
    byPattern,
    byStyle,
    patternToStyle: patternToStyleEntries,
    // Hand-authored bank items lacking a parseable SAT Pattern. Should
    // be 0 in production — protective regression guard. Hand-authored
    // items live in the `bank/{algebra,problemSolving,advancedMath,
    // geometry}.js` shards and don't carry `sourceModuleId` (only
    // topic-flattened items do — those predate the test-bundle format
    // and don't have SAT Pattern headers, which is expected).
    bankItemsWithoutPattern: questionBank.filter(
      q => !q.sourceModuleId && !extractSatPattern(q.explanation),
    ).length,
  };
};

// Thresholds exported for test verification (read-only).
export const DRILL_ROUTING_THRESHOLDS = Object.freeze({
  TIER1_PATTERN: TIER1_PATTERN_THRESHOLD,
  TIER2_STYLE: TIER2_STYLE_THRESHOLD,
});

/**
 * decideTier — returns which routing tier WOULD fire for the given
 * weakness set, WITHOUT actually selecting questions. Useful for:
 *
 *   1. Instrumenting drill launches with accurate `tier` classification
 *      (the drill shells use this to tag `drill_started` events).
 *   2. UI-side decisions that depend on whether Tier 1 is going to fire
 *      (e.g., the chip-precision gate, which currently uses
 *      getBankRoutingStats().byPattern[slug] directly — equivalent at
 *      single-pattern weaknesses, but decideTier handles multi-pattern
 *      union and Tier 2 derivation correctly).
 *   3. Future drill-routing telemetry where we want to know what would
 *      have fired without paying the cost of selection.
 *
 * Cascade logic mirrors getTargetedWeaknessSet exactly — same thresholds,
 * same union-of-patterns and union-of-styles construction. Pure read,
 * no side effects, no shuffle. Two callers means two places that must
 * stay in sync; the parity is pinned by tests.
 *
 * @param {object} args
 * @param {Array} args.weakSkills — weakness objects (may carry missedPatterns)
 * @param {string[]} [args.excludeIds] — IDs to subtract from pool sizes
 * @returns {{tier: 'pattern'|'style'|'skill'|'empty', poolSize: number, matchedPatterns: string[], matchedStyles: string[]}}
 *
 * Tier values:
 *   - 'pattern' — Tier 1 fires; pattern pool ≥ TIER1_PATTERN_THRESHOLD
 *   - 'style'   — Tier 2 fires; pattern pool sub-threshold but derived
 *                  style pool ≥ TIER2_STYLE_THRESHOLD
 *   - 'skill'   — Tier 3 fires (legacy); skill-based pool is non-empty
 *                  OR weakSkills has at least one entry (domain fallback)
 *   - 'empty'   — no weakness inputs at all
 */
export const decideTier = ({ weakSkills = [], excludeIds = [] } = {}) => {
  if (!Array.isArray(weakSkills) || weakSkills.length === 0) {
    return { tier: 'empty', poolSize: 0, matchedPatterns: [], matchedStyles: [] };
  }

  // Tier 1 probe — exact pattern pool size
  const patterns = weakSkills.flatMap(w =>
    Array.isArray(w?.missedPatterns) ? w.missedPatterns : []
  );
  if (patterns.length) {
    const pool = getQuestionsBySatPatterns(patterns, { excludeIds });
    if (pool.length >= TIER1_PATTERN_THRESHOLD) {
      return {
        tier: 'pattern',
        poolSize: pool.length,
        matchedPatterns: [...new Set(patterns)],
        matchedStyles: [],
      };
    }
  }

  // Tier 2 probe — derived style pool size
  const derivedStyles = [...new Set(
    patterns.map(p => patternToStyle.get(p)).filter(Boolean)
  )];
  if (derivedStyles.length) {
    const pool = getQuestionsByStyles(derivedStyles, { excludeIds });
    if (pool.length >= TIER2_STYLE_THRESHOLD) {
      return {
        tier: 'style',
        poolSize: pool.length,
        matchedPatterns: [...new Set(patterns)],
        matchedStyles: derivedStyles,
      };
    }
  }

  // Tier 3 — skill-based; matches getTargetedWeaknessSet's fallthrough.
  // We don't compute the actual skill pool size here (it's a separate
  // accessor and somewhat expensive); poolSize=0 communicates "we don't
  // know the size, only that this tier fires."
  return {
    tier: 'skill',
    poolSize: 0,
    matchedPatterns: [...new Set(patterns)],
    matchedStyles: derivedStyles,
  };
};
