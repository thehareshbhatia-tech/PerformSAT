/**
 * Math chapters for the Learn tab.
 *
 * Each chapter WRAPS a module's existing rich content by carrying only its
 * `moduleId` string in `source` — the chapter body is composed lazily by
 * ChapterReader via composeChapterBlocks.js, which concatenates the module's
 * PER-LESSON learn + practice tabs (contentTabs/lessons/) in catalog order.
 * Nothing here pulls the corpus into the bundle that imports this file.
 *
 * moduleIds are verified against allContentTabs (contentTabs/index.js).
 * unitIds match the four math units in index.js UNIT_REGISTRY.
 * cbSkills are slugs from src/data/questions/cbSkillTaxonomy.js (CB_MATH_SKILLS).
 * readMinutes are calibrated from the COMPOSED per-lesson volume (~180wpm) —
 * composeChapterBlocks.test.js pins the estimate to the data.
 */

/**
 * Most math chapters wrap an existing lesson module (source.kind 'contentTab');
 * chapters authored to the locked textbook template carry a body id instead
 * (source.kind 'body'), resolved from ./bodies via ChapterReader.
 * @type {Array<{id:string,unitId:string,title:string,blurb:string,readMinutes:number,cbSkills:string[],source:({kind:'contentTab',moduleId:string}|{kind:'body',bodyId:string})}>}
 */
export const mathChapters = [
  // ── Algebra ────────────────────────────────────────────────────────────────
  {
    id: 'math-solving-equations',
    unitId: 'math-algebra',
    title: 'Solving Equations & Rearranging Formulas',
    blurb: 'Peel an equation to isolate a variable, handle variables on both sides, rearrange a formula for any letter, and solve for the exact quantity asked.',
    readMinutes: 18,
    cbSkills: ['linear-equations-one-variable'],
    source: { kind: 'body', bodyId: 'math-solving-equations' },
  },
  {
    id: 'math-linear-equations',
    unitId: 'math-algebra',
    title: 'Linear Equations',
    blurb: 'Solve, rearrange, and interpret lines across one and two variables.',
    readMinutes: 21,
    cbSkills: ['linear-equations-one-variable', 'linear-equations-two-variables'],
    source: { kind: 'contentTab', moduleId: 'linear-equations' },
  },
  {
    id: 'math-functions',
    unitId: 'math-algebra',
    title: 'Functions',
    blurb: 'Read function notation, evaluate inputs and outputs, and interpret slope as a rate of change.',
    readMinutes: 7,
    cbSkills: ['linear-functions'],
    source: { kind: 'contentTab', moduleId: 'functions' },
  },
  {
    id: 'math-systems',
    unitId: 'math-algebra',
    title: 'Systems of Equations',
    blurb: 'Solve two-equation systems by substitution and elimination and recognize special-case solutions.',
    readMinutes: 16,
    cbSkills: ['linear-systems'],
    source: { kind: 'contentTab', moduleId: 'systems' },
  },
  {
    id: 'math-inequalities',
    unitId: 'math-algebra',
    title: 'Inequalities & Absolute Value',
    blurb: 'Solve one- and two-variable inequalities, compound chains, and absolute value read as distance — with the one rule that flips the sign.',
    readMinutes: 17,
    cbSkills: ['linear-inequalities'],
    source: { kind: 'body', bodyId: 'math-inequalities' },
  },

  // ── Advanced Math ───────────────────────────────────────────────────────────
  {
    id: 'math-equivalent-expressions',
    unitId: 'math-advanced',
    title: 'Working with Expressions',
    blurb: 'Expand, factor, and re-shape expressions — including the binomial templates and coefficient-matching moves the SAT leans on.',
    readMinutes: 15,
    cbSkills: ['equivalent-expressions'],
    source: { kind: 'body', bodyId: 'math-equivalent-expressions' },
  },
  {
    id: 'math-exponents',
    unitId: 'math-advanced',
    title: 'Exponents & Exponential Functions',
    blurb: 'Apply exponent rules and model growth and decay with exponential functions.',
    readMinutes: 6,
    cbSkills: ['equivalent-expressions', 'nonlinear-functions'],
    source: { kind: 'contentTab', moduleId: 'exponents' },
  },
  {
    id: 'math-quadratics',
    unitId: 'math-advanced',
    title: 'Quadratic Functions & Equations',
    blurb: 'Solve quadratics, switch between forms, and read the graph for vertex, roots, and intercepts.',
    readMinutes: 15,
    cbSkills: ['nonlinear-equations', 'nonlinear-functions'],
    source: { kind: 'contentTab', moduleId: 'quadratics' },
  },
  {
    id: 'math-transformations',
    unitId: 'math-advanced',
    title: 'Function Transformations',
    blurb: 'Shift, stretch, and reflect graphs and predict how the equation changes with them.',
    readMinutes: 9,
    cbSkills: ['nonlinear-functions'],
    source: { kind: 'contentTab', moduleId: 'transformations' },
  },
  {
    id: 'math-nonlinear-equations',
    unitId: 'math-advanced',
    title: 'Radicals, Rationals & Hidden Quadratics',
    blurb: 'Solve radical and rational equations, hidden quadratics, remainders, and line-parabola systems — always checking against the original.',
    readMinutes: 18,
    cbSkills: ['nonlinear-equations'],
    source: { kind: 'body', bodyId: 'math-nonlinear-equations' },
  },

  // ── Problem-Solving and Data Analysis ───────────────────────────────────────
  {
    id: 'math-percents',
    unitId: 'math-problem-solving',
    title: 'Percents',
    blurb: 'Work percent-of, percent change, and reverse-percent problems without losing the base.',
    readMinutes: 8,
    cbSkills: ['percentages'],
    source: { kind: 'contentTab', moduleId: 'percents' },
  },
  {
    id: 'math-statistics',
    unitId: 'math-problem-solving',
    title: 'Statistics & Data',
    blurb: 'Interpret center and spread, read distributions, and reason about probability and margin of error.',
    readMinutes: 24,
    cbSkills: ['one-variable-data', 'probability', 'inference-margin-of-error'],
    source: { kind: 'contentTab', moduleId: 'statistics' },
  },
  {
    id: 'math-two-variable-data',
    unitId: 'math-problem-solving',
    title: 'Scatterplots & Data Models',
    blurb: 'Read scatterplots and lines of best fit, tell predicted from actual, and choose linear vs exponential models.',
    readMinutes: 16,
    cbSkills: ['two-variable-data'],
    source: { kind: 'body', bodyId: 'math-two-variable-data' },
  },
  {
    id: 'math-statistical-claims',
    unitId: 'math-problem-solving',
    title: 'Studies, Samples & Statistical Claims',
    blurb: 'Judge what a study can and cannot conclude — sampling, cause vs association, and margin of error.',
    readMinutes: 15,
    cbSkills: ['statistical-claims', 'inference-margin-of-error'],
    source: { kind: 'body', bodyId: 'math-statistical-claims' },
  },
  {
    id: 'math-dimensional-analysis',
    unitId: 'math-problem-solving',
    title: 'Ratios, Rates & Proportions',
    blurb: 'Set up proportions, split ratios into parts, combine rates, and chain unit conversions with a magnitude check.',
    readMinutes: 16,
    cbSkills: ['ratios-rates-proportions'],
    source: { kind: 'body', bodyId: 'math-dimensional-analysis' },
  },

  // ── Geometry and Trigonometry ───────────────────────────────────────────────
  {
    id: 'math-lines-angles',
    unitId: 'math-geometry',
    title: 'Lines, Angles & Congruence',
    blurb: 'Chase angles across parallel lines and triangles, apply congruence and similarity criteria, decompose areas, and scale by k, k squared, and k cubed.',
    readMinutes: 20,
    cbSkills: ['lines-angles-triangles'],
    source: { kind: 'body', bodyId: 'math-lines-angles' },
  },
  {
    id: 'math-radians-degrees',
    unitId: 'math-geometry',
    title: 'Radians & Degrees',
    blurb: 'Convert between radians and degrees and place angles on the unit circle.',
    readMinutes: 6,
    cbSkills: ['right-triangles-trig'],
    source: { kind: 'contentTab', moduleId: 'radians-degrees' },
  },
  {
    id: 'math-triangles',
    unitId: 'math-geometry',
    title: 'Triangles & Trigonometry',
    blurb: 'Use angle relationships, similarity, the Pythagorean theorem, and right-triangle trig.',
    readMinutes: 25,
    cbSkills: ['lines-angles-triangles', 'right-triangles-trig'],
    source: { kind: 'contentTab', moduleId: 'triangles' },
  },
  {
    id: 'math-circles',
    unitId: 'math-geometry',
    title: 'Circles',
    blurb: 'Work with circle equations, arc length, sector area, and lines tangent to a circle.',
    readMinutes: 21,
    cbSkills: ['circles'],
    source: { kind: 'contentTab', moduleId: 'circles' },
  },
  {
    id: 'math-volume',
    unitId: 'math-geometry',
    title: 'Area & Volume',
    blurb: 'Apply area and volume formulas and scale them across similar figures.',
    readMinutes: 16,
    cbSkills: ['area-and-volume'],
    source: { kind: 'contentTab', moduleId: 'volume' },
  },
];
