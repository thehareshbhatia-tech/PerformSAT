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

/** @type {Array<{id:string,unitId:string,title:string,blurb:string,readMinutes:number,cbSkills:string[],source:{kind:'contentTab',moduleId:string}}>} */
export const mathChapters = [
  // ── Algebra ────────────────────────────────────────────────────────────────
  {
    id: 'math-linear-equations',
    unitId: 'math-algebra',
    title: 'Linear Equations & Inequalities',
    blurb: 'Solve, rearrange, and interpret lines and inequalities across one and two variables.',
    readMinutes: 21,
    cbSkills: ['linear-equations-one-variable', 'linear-equations-two-variables', 'linear-inequalities'],
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

  // ── Advanced Math ───────────────────────────────────────────────────────────
  {
    id: 'math-equivalent-expressions',
    unitId: 'math-advanced',
    title: 'Equivalent Expressions',
    blurb: 'Factor, expand, and simplify expressions into the form a question is really asking for.',
    readMinutes: 7,
    cbSkills: ['equivalent-expressions'],
    source: { kind: 'contentTab', moduleId: 'equivalent-expressions' },
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
    blurb: 'Interpret center and spread, read scatterplots, and reason about lines of best fit.',
    readMinutes: 24,
    cbSkills: ['one-variable-data', 'two-variable-data'],
    source: { kind: 'contentTab', moduleId: 'statistics' },
  },
  {
    id: 'math-dimensional-analysis',
    unitId: 'math-problem-solving',
    title: 'Ratios, Rates & Units',
    blurb: 'Set up proportions and chain unit conversions to move cleanly between quantities.',
    readMinutes: 4,
    cbSkills: ['ratios-rates-proportions'],
    source: { kind: 'contentTab', moduleId: 'dimensional-analysis' },
  },

  // ── Geometry and Trigonometry ───────────────────────────────────────────────
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
