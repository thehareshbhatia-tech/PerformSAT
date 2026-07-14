/**
 * Math chapters for the Learn tab.
 *
 * Every math chapter is now a LEAN "review / cheat-sheet" lesson (adopted
 * 2026-07-12): one focused SAT skill per chapter, taught in short plain-language
 * sections with a couple of worked examples and check-yourself questions. The
 * lesson BODIES live in ./bodies/ (source.kind 'body', keyed by chapter id) and
 * are dynamic-imported by ChapterReader — this module stays light and NEVER
 * imports the bodies corpus. (Chapters previously wrapped the video-lesson
 * contentTabs corpus via composeChapterBlocks; that dense path is retired.)
 *
 * unitIds match the four math units in index.js UNIT_REGISTRY.
 * cbSkills are slugs from src/data/questions/cbSkillTaxonomy.js (CB_MATH_SKILLS).
 * readMinutes are lean-lesson editorial estimates (short read + a few examples).
 *
 * @type {Array<{id:string,unitId:string,title:string,blurb:string,readMinutes:number,cbSkills:string[],source:{kind:'body',bodyId:string}}>}
 */
export const mathChapters = [
  // ── Algebra ────────────────────────────────────────────────────────────────
  {
    id: 'math-foundations',
    unitId: 'math-algebra',
    title: 'Number Foundations',
    blurb: 'Fractions, negative signs, order of operations, and the number line — the quiet arithmetic every other math question is built on.',
    readMinutes: 9,
    cbSkills: [],
    source: { kind: 'body', bodyId: 'math-foundations' },
  },
  {
    id: 'math-solving-equations',
    unitId: 'math-algebra',
    title: 'Solving Equations & Rearranging Formulas',
    blurb: 'Peel an equation to isolate a variable, handle variables on both sides, rearrange a formula for any letter, and solve for the exact quantity asked.',
    readMinutes: 4,
    cbSkills: ['linear-equations-one-variable'],
    source: { kind: 'body', bodyId: 'math-solving-equations' },
  },
  {
    id: 'math-linear-equations',
    unitId: 'math-algebra',
    title: 'Linear Equations',
    blurb: 'Solve, rearrange, and interpret lines across one and two variables.',
    readMinutes: 4,
    cbSkills: ['linear-equations-one-variable', 'linear-equations-two-variables'],
    source: { kind: 'body', bodyId: 'math-linear-equations' },
  },
  {
    id: 'math-functions',
    unitId: 'math-algebra',
    title: 'Functions',
    blurb: 'Read function notation, evaluate inputs and outputs, and interpret slope as a rate of change.',
    readMinutes: 4,
    cbSkills: ['linear-functions'],
    source: { kind: 'body', bodyId: 'math-functions' },
  },
  {
    id: 'math-systems',
    unitId: 'math-algebra',
    title: 'Systems of Equations',
    blurb: 'Solve two-equation systems by substitution and elimination and recognize special-case solutions.',
    readMinutes: 4,
    cbSkills: ['linear-systems'],
    source: { kind: 'body', bodyId: 'math-systems' },
  },
  {
    id: 'math-inequalities',
    unitId: 'math-algebra',
    title: 'Inequalities & Absolute Value',
    blurb: 'Solve one- and two-variable inequalities, compound chains, and absolute value read as distance — with the one rule that flips the sign.',
    readMinutes: 4,
    cbSkills: ['linear-inequalities'],
    source: { kind: 'body', bodyId: 'math-inequalities' },
  },

  // ── Advanced Math ───────────────────────────────────────────────────────────
  {
    id: 'math-equivalent-expressions',
    unitId: 'math-advanced',
    title: 'Working with Expressions',
    blurb: 'Expand, factor, and re-shape expressions — including the binomial templates and coefficient-matching moves the SAT leans on.',
    readMinutes: 4,
    cbSkills: ['equivalent-expressions'],
    source: { kind: 'body', bodyId: 'math-equivalent-expressions' },
  },
  {
    id: 'math-exponents',
    unitId: 'math-advanced',
    title: 'Exponents & Exponential Functions',
    blurb: 'Apply exponent rules and model growth and decay with exponential functions.',
    readMinutes: 4,
    cbSkills: ['equivalent-expressions', 'nonlinear-functions'],
    source: { kind: 'body', bodyId: 'math-exponents' },
  },
  {
    id: 'math-quadratics',
    unitId: 'math-advanced',
    title: 'Quadratic Functions & Equations',
    blurb: 'Solve quadratics, switch between forms, and read the graph for vertex, roots, and intercepts.',
    readMinutes: 4,
    cbSkills: ['nonlinear-equations', 'nonlinear-functions'],
    source: { kind: 'body', bodyId: 'math-quadratics' },
  },
  {
    id: 'math-transformations',
    unitId: 'math-advanced',
    title: 'Function Transformations',
    blurb: 'Shift, stretch, and reflect graphs and predict how the equation changes with them.',
    readMinutes: 4,
    cbSkills: ['nonlinear-functions'],
    source: { kind: 'body', bodyId: 'math-transformations' },
  },
  {
    id: 'math-nonlinear-equations',
    unitId: 'math-advanced',
    title: 'Radicals, Rationals & Hidden Quadratics',
    blurb: 'Solve radical and rational equations, hidden quadratics, remainders, and line-parabola systems — always checking against the original.',
    readMinutes: 4,
    cbSkills: ['nonlinear-equations'],
    source: { kind: 'body', bodyId: 'math-nonlinear-equations' },
  },

  // ── Problem-Solving and Data Analysis ───────────────────────────────────────
  {
    id: 'math-percents',
    unitId: 'math-problem-solving',
    title: 'Percents',
    blurb: 'Work percent-of, percent change, and reverse-percent problems without losing the base.',
    readMinutes: 4,
    cbSkills: ['percentages'],
    source: { kind: 'body', bodyId: 'math-percents' },
  },
  {
    id: 'math-statistics',
    unitId: 'math-problem-solving',
    title: 'Statistics & Data',
    blurb: 'Interpret center and spread, read distributions, and reason about probability and margin of error.',
    readMinutes: 4,
    cbSkills: ['one-variable-data', 'probability', 'inference-margin-of-error'],
    source: { kind: 'body', bodyId: 'math-statistics' },
  },
  {
    id: 'math-two-variable-data',
    unitId: 'math-problem-solving',
    title: 'Scatterplots & Data Models',
    blurb: 'Read scatterplots and lines of best fit, tell predicted from actual, and choose linear vs exponential models.',
    readMinutes: 4,
    cbSkills: ['two-variable-data'],
    source: { kind: 'body', bodyId: 'math-two-variable-data' },
  },
  {
    id: 'math-statistical-claims',
    unitId: 'math-problem-solving',
    title: 'Studies, Samples & Statistical Claims',
    blurb: 'Judge what a study can and cannot conclude — sampling, cause vs association, and margin of error.',
    readMinutes: 4,
    cbSkills: ['statistical-claims', 'inference-margin-of-error'],
    source: { kind: 'body', bodyId: 'math-statistical-claims' },
  },
  {
    id: 'math-dimensional-analysis',
    unitId: 'math-problem-solving',
    title: 'Ratios, Rates & Proportions',
    blurb: 'Set up proportions, split ratios into parts, combine rates, and chain unit conversions with a magnitude check.',
    readMinutes: 4,
    cbSkills: ['ratios-rates-proportions'],
    source: { kind: 'body', bodyId: 'math-dimensional-analysis' },
  },

  // ── Geometry and Trigonometry ───────────────────────────────────────────────
  {
    id: 'math-lines-angles',
    unitId: 'math-geometry',
    title: 'Lines, Angles & Congruence',
    blurb: 'Chase angles across parallel lines and triangles, apply congruence and similarity criteria, decompose areas, and scale by k, k squared, and k cubed.',
    readMinutes: 4,
    cbSkills: ['lines-angles-triangles'],
    source: { kind: 'body', bodyId: 'math-lines-angles' },
  },
  {
    id: 'math-radians-degrees',
    unitId: 'math-geometry',
    title: 'Radians & Degrees',
    blurb: 'Convert between radians and degrees and place angles on the unit circle.',
    readMinutes: 4,
    cbSkills: ['right-triangles-trig'],
    source: { kind: 'body', bodyId: 'math-radians-degrees' },
  },
  {
    id: 'math-triangles',
    unitId: 'math-geometry',
    title: 'Triangles',
    blurb: 'Use angle relationships, the Pythagorean theorem, special right triangles, and similarity.',
    readMinutes: 4,
    cbSkills: ['lines-angles-triangles'],
    source: { kind: 'body', bodyId: 'math-triangles' },
  },
  {
    id: 'math-right-triangle-trig',
    unitId: 'math-geometry',
    title: 'Right-Triangle Trigonometry',
    blurb: 'Use SOH-CAH-TOA to find sides and angles, and apply the sine-cosine cofunction shortcut.',
    readMinutes: 4,
    cbSkills: ['right-triangles-trig'],
    source: { kind: 'body', bodyId: 'math-right-triangle-trig' },
  },
  {
    id: 'math-circles',
    unitId: 'math-geometry',
    title: 'Circles',
    blurb: 'Work with circle equations, arc length, sector area, and lines tangent to a circle.',
    readMinutes: 4,
    cbSkills: ['circles'],
    source: { kind: 'body', bodyId: 'math-circles' },
  },
  {
    id: 'math-volume',
    unitId: 'math-geometry',
    title: 'Area & Volume',
    blurb: 'Apply area and volume formulas and scale them across similar figures.',
    readMinutes: 4,
    cbSkills: ['area-and-volume'],
    source: { kind: 'body', bodyId: 'math-volume' },
  },
];
