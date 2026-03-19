import { algebraBank } from './algebra';
import { problemSolvingBank } from './problemSolving';
import { advancedMathBank } from './advancedMath';
import { geometryBank } from './geometry';
import { generatedOfficialBank } from './generatedOfficial';

export const questionBank = [
  ...algebraBank,
  ...problemSolvingBank,
  ...advancedMathBank,
  ...geometryBank,
  ...generatedOfficialBank,
];

const bankIndex = new Map(questionBank.map(q => [q.id, q]));
const skillIndex = new Map();
const domainIndex = new Map();
const difficultyIndex = new Map();

questionBank.forEach(q => {
  (q.skills || []).forEach(sid => {
    if (!skillIndex.has(sid)) skillIndex.set(sid, []);
    skillIndex.get(sid).push(q);
  });
  if (!domainIndex.has(q.domain)) domainIndex.set(q.domain, []);
  domainIndex.get(q.domain).push(q);

  if (!difficultyIndex.has(q.difficulty)) difficultyIndex.set(q.difficulty, []);
  difficultyIndex.get(q.difficulty).push(q);
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
  'probability':                 ['probability-basics', 'margin-of-error'],
  'Probability':                 ['probability-basics', 'margin-of-error'],
  'conditional-probability':     ['conditional-probability', 'probability-basics'],
  'Conditional Probability':     ['conditional-probability', 'probability-basics'],

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
  'proportions':                 ['percent-of-value', 'unit-conversion', 'rate-conversion'],
  'Proportions':                 ['percent-of-value', 'unit-conversion', 'rate-conversion'],
  'Unit Rate':                   ['rate-conversion', 'unit-conversion'],
  'Unit rates':                  ['rate-conversion', 'unit-conversion'],
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

export const getQuestionsBySkillIds = (skillIds, opts = {}) => {
  const { difficulty, excludeIds = [], limit } = opts;
  const resolved = resolveSkillIds(skillIds);
  const seen = new Set();
  let results = [];
  resolved.forEach(sid => {
    (skillIndex.get(sid) || []).forEach(q => {
      if (!seen.has(q.id)) {
        seen.add(q.id);
        results.push(q);
      }
    });
  });
  if (difficulty) results = results.filter(q => q.difficulty === difficulty);
  if (excludeIds.length) results = results.filter(q => !excludeIds.includes(q.id));
  if (limit) results = results.slice(0, limit);
  return results;
};

export const getQuestionsByDomain = (domain, opts = {}) => {
  const { difficulty, excludeIds = [], limit } = opts;
  let results = [...(domainIndex.get(domain) || [])];
  if (difficulty) results = results.filter(q => q.difficulty === difficulty);
  if (excludeIds.length) results = results.filter(q => !excludeIds.includes(q.id));
  if (limit) results = results.slice(0, limit);
  return results;
};

const shuffle = (arr) => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

export const getTargetedWeaknessSet = ({ weakSkills = [], errorTypes = [], difficultyMix, count = 10, excludeIds = [] }) => {
  const skillIds = weakSkills.map(w => w.skillId || w.skill || w);
  let pool = getQuestionsBySkillIds(skillIds, { excludeIds });

  if (pool.length === 0 && weakSkills.length > 0) {
    const domains = [...new Set(weakSkills.map(w => w.domain).filter(Boolean))];
    domains.forEach(d => {
      pool.push(...getQuestionsByDomain(d, { excludeIds }));
    });
  }

  if (difficultyMix) {
    const easy = shuffle(pool.filter(q => q.difficulty === 'easy')).slice(0, Math.ceil(count * (difficultyMix.easy || 0.3)));
    const medium = shuffle(pool.filter(q => q.difficulty === 'medium')).slice(0, Math.ceil(count * (difficultyMix.medium || 0.45)));
    const hard = shuffle(pool.filter(q => q.difficulty === 'hard')).slice(0, Math.ceil(count * (difficultyMix.hard || 0.25)));
    return shuffle([...easy, ...medium, ...hard]).slice(0, count);
  }

  return shuffle(pool).slice(0, count);
};

export const getBankStats = () => {
  const stats = { total: questionBank.length, byDomain: {}, byDifficulty: {}, bySkill: {} };
  domainIndex.forEach((qs, d) => { stats.byDomain[d] = qs.length; });
  difficultyIndex.forEach((qs, d) => { stats.byDifficulty[d] = qs.length; });
  skillIndex.forEach((qs, sid) => { stats.bySkill[sid] = qs.length; });
  return stats;
};
