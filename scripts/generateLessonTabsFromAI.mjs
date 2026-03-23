#!/usr/bin/env node
/**
 * Generate lesson-level Learn/Practice content tabs.
 *
 * This script supports two modes:
 * 1) Deterministic expert generator (default, no API key required)
 * 2) Optional model-assisted generation (future-ready, if API keys are provided)
 *
 * Usage:
 *   node scripts/generateLessonTabsFromAI.mjs --modules linear-equations,statistics
 *   node scripts/generateLessonTabsFromAI.mjs --all
 *   node scripts/generateLessonTabsFromAI.mjs --all --dry-run
 */

import fs from 'fs';
import path from 'path';
import vm from 'vm';
import { createRequire } from 'module';

const ROOT = process.cwd();
const require = createRequire(import.meta.url);
const LESSONS_DIR = path.join(ROOT, 'src/data/lessons');
const TABS_DIR = path.join(ROOT, 'src/data/contentTabs/lessons');
const REPORT_PATH = path.join(ROOT, 'scripts/.last-content-tab-generation-report.json');
const TRANSCRIPT_URL = 'https://gettranscript-ki77ua6x2a-uc.a.run.app';

const MODULE_CONFIG = {
  'linear-equations': {
    lessonsFile: 'linearEquations.js',
    lessonsExport: 'linearEquationsLessons',
    tabsFile: 'linearEquationsLessons.js',
    tabsExport: 'linearEquationsLessonTabs',
    title: 'Linear Equations',
    satPatterns: [
      'slope/intercept swap',
      'sign error when moving terms',
      'parallel vs perpendicular confusion',
    ],
    strategy: 'Direction check first, then intercept/slope match.',
    formula: '$$m = \\frac{y_2 - y_1}{x_2 - x_1},\\quad y = mx + b$$',
    webSeed: ['linear equation', 'slope intercept form'],
  },
  functions: {
    lessonsFile: 'functions.js',
    lessonsExport: 'functionsLessons',
    tabsFile: 'functionsLessons.js',
    tabsExport: 'functionsLessonTabs',
    title: 'Functions',
    satPatterns: [
      'input/output swap',
      'domain restriction missed',
      'composition order reversed',
    ],
    strategy: 'Translate notation to plain language before solving.',
    formula: '$$(f \\circ g)(x) = f(g(x))$$',
    webSeed: ['function notation', 'domain and range'],
  },
  systems: {
    lessonsFile: 'systems.js',
    lessonsExport: 'systemsLessons',
    tabsFile: 'systemsLessons.js',
    tabsExport: 'systemsLessonTabs',
    title: 'Systems of Equations',
    satPatterns: [
      'elimination sign mismatch',
      'infinitely many vs no solution confusion',
      'substitution arithmetic drift',
    ],
    strategy: 'Classify solution type before computing exact values.',
    formula: '$$\\text{No solution} \\Rightarrow \\text{parallel lines},\\ \\text{Infinite} \\Rightarrow \\text{same line}$$',
    webSeed: ['system of equations', 'elimination method'],
  },
  quadratics: {
    lessonsFile: 'quadratics.js',
    lessonsExport: 'quadraticsLessons',
    tabsFile: 'quadraticsLessons.js',
    tabsExport: 'quadraticsLessonTabs',
    title: 'Quadratics',
    satPatterns: [
      'vertex misread from standard form',
      'factor sign mismatch',
      'discriminant interpretation error',
    ],
    strategy: 'Choose form (standard/factored/vertex) based on what the question asks.',
    formula: '$$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$',
    webSeed: ['quadratic function', 'discriminant'],
  },
  triangles: {
    lessonsFile: 'triangles.js',
    lessonsExport: 'trianglesLessons',
    tabsFile: 'trianglesLessons.js',
    tabsExport: 'trianglesLessonTabs',
    title: 'Triangles',
    satPatterns: [
      'special triangle ratio misuse',
      'area/perimeter confusion',
      'similarity proportion mismatch',
    ],
    strategy: 'Tag triangle type first (right/similar/isosceles) before computing.',
    formula: '$$a^2 + b^2 = c^2,\\quad \\text{Area} = \\frac{1}{2}bh$$',
    webSeed: ['special right triangles', 'triangle similarity'],
  },
  circles: {
    lessonsFile: 'circles.js',
    lessonsExport: 'circlesLessons',
    tabsFile: 'circlesLessons.js',
    tabsExport: 'circlesLessonTabs',
    title: 'Circles',
    satPatterns: [
      'radius/diameter confusion',
      'arc length proportion error',
      'center form sign flip',
    ],
    strategy: 'Convert wording into radius-first quantities immediately.',
    formula: '$$A = \\pi r^2,\\ C = 2\\pi r,\\ (x-h)^2 + (y-k)^2 = r^2$$',
    webSeed: ['circle equations', 'arc length'],
  },
  volume: {
    lessonsFile: 'volume.js',
    lessonsExport: 'volumeLessons',
    tabsFile: 'volumeLessons.js',
    tabsExport: 'volumeLessonTabs',
    title: 'Volume',
    satPatterns: [
      'using area formula instead of volume',
      'unit scaling error',
      'diameter used as radius',
    ],
    strategy: 'Write full formula with labels before plugging values.',
    formula: '$$V_{\\text{cyl}} = \\pi r^2 h,\\quad V_{\\text{cone}} = \\frac{1}{3}\\pi r^2 h,\\quad V_{\\text{sphere}} = \\frac{4}{3}\\pi r^3$$',
    webSeed: ['volume formulas', 'surface area vs volume'],
  },
  statistics: {
    lessonsFile: 'statistics.js',
    lessonsExport: 'statisticsLessons',
    tabsFile: 'statisticsLessons.js',
    tabsExport: 'statisticsLessonTabs',
    title: 'Statistics',
    satPatterns: [
      'mean/median confusion under outliers',
      'wrong denominator in conditional probability',
      'interval misread in margin-of-error',
    ],
    strategy: 'Decide the statistic type first, then apply its dedicated rule.',
    formula: '$$\\bar{x} = \\frac{\\sum x}{n},\\quad P(A\\mid B)=\\frac{P(A\\cap B)}{P(B)}$$',
    webSeed: ['margin of error', 'conditional probability'],
  },
  exponents: {
    lessonsFile: 'exponents.js',
    lessonsExport: 'exponentsLessons',
    tabsFile: 'exponentsLessons.js',
    tabsExport: 'exponentsLessonTabs',
    title: 'Exponents',
    satPatterns: [
      'power-of-a-power not distributed',
      'negative exponent sign confusion',
      'fractional exponent misread',
    ],
    strategy: 'Rewrite every exponent expression to a common base before comparing.',
    formula: '$$a^m a^n = a^{m+n},\\quad (a^m)^n = a^{mn},\\quad a^{-n} = \\frac{1}{a^n}$$',
    webSeed: ['exponent rules', 'rational exponents'],
  },
  percents: {
    lessonsFile: 'percents.js',
    lessonsExport: 'percentsLessons',
    tabsFile: 'percentsLessons.js',
    tabsExport: 'percentsLessonTabs',
    title: 'Percents',
    satPatterns: [
      'percent of vs percent increase confusion',
      'double percent change direction mistake',
      'reverse percent setup error',
    ],
    strategy: 'Convert percent language to decimal equations before solving.',
    formula: '$$\\text{Percent change} = \\frac{\\text{new} - \\text{old}}{\\text{old}}$$',
    webSeed: ['percent change formula', 'reverse percentage'],
  },
  transformations: {
    lessonsFile: 'transformations.js',
    lessonsExport: 'transformationsLessons',
    tabsFile: 'transformationsLessons.js',
    tabsExport: 'transformationsLessonTabs',
    title: 'Transformations',
    satPatterns: [
      'inside vs outside transformation swapped',
      'reflection sign error',
      'horizontal shift direction confusion',
    ],
    strategy: 'Read transformed form from inside-out: inside changes x, outside changes y.',
    formula: '$$g(x)=a\\,f(b(x-h))+k$$',
    webSeed: ['function transformations', 'translations reflections'],
  },
  'equivalent-expressions': {
    lessonsFile: 'equivalentExpressions.js',
    lessonsExport: 'equivalentExpressionsLessons',
    tabsFile: 'equivalentExpressionsLessons.js',
    tabsExport: 'equivalentExpressionsLessonTabs',
    title: 'Equivalent Expressions',
    satPatterns: [
      'distribution sign errors',
      'factoring common term missed',
      'invalid cancellation in rational expressions',
    ],
    strategy: 'Expand and refactor strategically to reveal what the question asks.',
    formula: '$$a(b+c)=ab+ac,\\quad x^2-y^2=(x-y)(x+y)$$',
    webSeed: ['equivalent expressions algebra', 'factoring identities'],
  },
  'radians-degrees': {
    lessonsFile: 'radiansDegrees.js',
    lessonsExport: 'radiansDegreesLessons',
    tabsFile: 'radiansDegreesLessons.js',
    tabsExport: 'radiansDegreesLessonTabs',
    title: 'Radians and Degrees',
    satPatterns: [
      'degree/radian conversion inverted',
      'arc length formula mismatch',
      'unit circle coordinate sign error',
    ],
    strategy: 'Lock unit first (degrees or radians), then convert once.',
    formula: '$$\\pi\\ \\text{rad} = 180^\\circ,\\quad s = r\\theta\\ (\\theta\\ \\text{in radians})$$',
    webSeed: ['radian degree conversion', 'unit circle'],
  },
  'dimensional-analysis': {
    lessonsFile: 'dimensionalAnalysis.js',
    lessonsExport: 'dimensionalAnalysisLessons',
    tabsFile: 'dimensionalAnalysisLessons.js',
    tabsExport: 'dimensionalAnalysisLessonTabs',
    title: 'Dimensional Analysis',
    satPatterns: [
      'conversion factor upside-down',
      'unit cancellation skipped',
      'multi-step ratio chaining errors',
    ],
    strategy: 'Write units on every number and cancel units left-to-right.',
    formula: '$$\\text{value}\\times\\frac{\\text{target unit}}{\\text{current unit}}$$',
    webSeed: ['dimensional analysis', 'unit conversion'],
  },
};

function parseArgs(argv) {
  const args = {
    all: false,
    modules: [],
    dryRun: false,
    includeWeb: true,
    includeTranscripts: true,
  };
  for (let i = 0; i < argv.length; i += 1) {
    const token = argv[i];
    if (token === '--all') args.all = true;
    else if (token === '--dry-run') args.dryRun = true;
    else if (token === '--no-web') args.includeWeb = false;
    else if (token === '--no-transcripts') args.includeTranscripts = false;
    else if (token === '--modules') {
      const value = argv[i + 1] || '';
      args.modules = value.split(',').map((x) => x.trim()).filter(Boolean);
      i += 1;
    }
  }
  return args;
}

function ensureKnownModules(moduleIds) {
  const unknown = moduleIds.filter((id) => !MODULE_CONFIG[id]);
  if (unknown.length) {
    throw new Error(`Unknown modules: ${unknown.join(', ')}`);
  }
}

function loadExportFromFile(filePath, exportName) {
  const code = fs.readFileSync(filePath, 'utf8');
  const cjsCode = `${code.replace(/export const /g, 'const ')}\nmodule.exports = { ${exportName} };`;
  const sandbox = {
    module: { exports: {} },
    exports: {},
    require,
    console,
  };
  vm.runInNewContext(cjsCode, sandbox, { filename: filePath });
  return sandbox.module.exports[exportName];
}

function stripHtml(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

async function safeFetchText(url) {
  try {
    const res = await fetch(url, { method: 'GET' });
    if (!res.ok) return '';
    const text = await res.text();
    return stripHtml(text).slice(0, 1600);
  } catch {
    return '';
  }
}

async function fetchWikiSummary(topic) {
  try {
    const slug = encodeURIComponent(topic.replace(/\s+/g, '_'));
    const res = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${slug}`);
    if (!res.ok) return '';
    const json = await res.json();
    return (json.extract || '').trim();
  } catch {
    return '';
  }
}

async function fetchTranscript(videoId) {
  try {
    const res = await fetch(`${TRANSCRIPT_URL}?videoId=${videoId}`);
    if (!res.ok) return null;
    const json = await res.json();
    return json;
  } catch {
    return null;
  }
}

function transcriptSnippet(transcript) {
  if (!transcript || !Array.isArray(transcript.segments)) return '';
  return transcript.segments
    .slice(0, 12)
    .map((s) => s.text || '')
    .join(' ')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 420);
}

function pickSectionVideo(lesson, moduleLessons) {
  const sameSectionVideo = moduleLessons.find((l) => l.section === lesson.section && l.videoId);
  return sameSectionVideo?.videoId || moduleLessons.find((l) => l.videoId)?.videoId || null;
}

function sentence(text) {
  const normalized = String(text || '').replace(/\s+/g, ' ').trim();
  if (!normalized) return '';
  const withPeriod = /[.!?]$/.test(normalized) ? normalized : `${normalized}.`;
  return withPeriod;
}

function firstNonEmpty(...values) {
  for (const v of values) {
    if (v && String(v).trim()) return String(v).trim();
  }
  return '';
}

function extractSeedBlock(seedTab, type) {
  return seedTab?.sections?.learn?.blocks?.find((b) => b.type === type)
    || seedTab?.sections?.practice?.blocks?.find((b) => b.type === type)
    || null;
}

const VISUAL_RULES = [
  // ── Linear equations ──
  { pattern: /slope.*table/i, visualType: 'slopeFromTableDiagram', caption: 'Finding slope from a table: compute Δy/Δx between any two rows.' },
  { pattern: /slope.*graph/i, visualType: 'slopeFromGraphDiagram', caption: 'Finding slope from a graph: count rise over run between two grid-intersection points.' },
  { pattern: /y.?intercept/i, visualType: 'yInterceptDiagram', caption: 'The y-intercept is the point where the line crosses the y-axis (x = 0).' },
  { pattern: /parallel\s+lines?/i, visualType: 'parallelLinesDiagram', caption: 'Parallel lines share equal slopes but different y-intercepts, so they never cross.' },
  { pattern: /perpendicular\s+lines?/i, visualType: 'perpendicularLinesDiagram', caption: 'Perpendicular lines meet at 90° — their slopes are negative reciprocals that multiply to −1.' },
  // ── Quadratics ──
  { pattern: /parabola|vertex\s+form|standard\s+form.*graph|graph.*equation/i, visualType: 'parabolaFromGraphDiagram', caption: 'A parabola with vertex, y-intercept, and mirror point labeled.' },
  { pattern: /deriving.*equation|graph.*quadratic/i, visualType: 'parabolaFromGraphDiagram', caption: 'Extract vertex and a second point from the graph to write the equation.' },
  { pattern: /discriminant/i, visualType: 'parabolaFromGraphDiagram', caption: 'The discriminant determines how many times the parabola crosses the x-axis.' },
  { pattern: /completing the square/i, visualType: 'parabolaFromGraphDiagram', caption: 'Completing the square converts standard form to vertex form, revealing the turning point.' },
  { pattern: /introduction to quadratics/i, visualType: 'parabolaFromGraphDiagram', caption: 'Every quadratic makes a U-shaped parabola — the vertex is the turning point.' },
  { pattern: /roots|zeros|x.?intercepts/i, visualType: 'parabolaFromGraphDiagram', caption: 'Roots are where the parabola crosses the x-axis (y = 0).' },
  // ── Triangles ──
  { pattern: /pythagorean/i, visualType: 'rightTriangleDiagram', caption: 'A right triangle with legs a, b and hypotenuse c illustrating a² + b² = c².' },
  { pattern: /special right/i, visualType: 'specialTrianglesDiagram', caption: '45-45-90 and 30-60-90 triangles with their fixed side ratios.' },
  { pattern: /similar/i, visualType: 'similarTrianglesDiagram', caption: 'Two similar triangles with matching angles and proportional sides.' },
  { pattern: /area of a triangle/i, visualType: 'triangleAreaDiagram', caption: 'Triangle with base and height labeled: Area = ½ × base × height.' },
  // ── Circles ──
  { pattern: /parts of a circle/i, visualType: 'circlePartsDiagram', caption: 'Circle with radius, diameter, and circumference labeled.' },
  { pattern: /arc length/i, visualType: 'arcLengthDiagram', caption: 'A central angle defines an arc — arc length is a fraction of the full circumference.' },
  { pattern: /sector area/i, visualType: 'arcLengthDiagram', caption: 'Sector area is a fraction of the full circle area, determined by the central angle.' },
  { pattern: /equation.*circle|circle.*equation|standard form.*circle/i, visualType: 'circleEquationDiagram', caption: 'Circle on a coordinate plane showing center (h, k) and radius r.' },
  // ── Volume ──
  { pattern: /volume of a cube|cube example/i, visualType: 'cubeDiagram', caption: 'A cube with edge length s — volume = s³.' },
  { pattern: /rectangular prism|box/i, visualType: 'rectangularPrismDiagram', caption: 'A rectangular prism with length, width, and height labeled.' },
  { pattern: /cylinder/i, visualType: 'cylinderDiagram', caption: 'A cylinder with radius r and height h labeled.' },
  { pattern: /sphere/i, visualType: 'sphereDiagram', caption: 'A sphere with radius r labeled.' },
  { pattern: /cone/i, visualType: 'coneDiagram', caption: 'A cone with radius r and height h labeled.' },
  // ── Statistics ──
  { pattern: /mean|average/i, visualType: 'meanMedianDiagram', caption: 'A number line showing how the mean is the balance point of the data.' },
  { pattern: /median/i, visualType: 'meanMedianDiagram', caption: 'A sorted data set with the median (middle value) highlighted.' },
  { pattern: /outlier/i, visualType: 'meanMedianDiagram', caption: 'Outliers pull the mean but barely affect the median.' },
  // ── Transformations ──
  { pattern: /horizontal translation/i, visualType: 'horizontalShiftDiagram', caption: 'f(x − h) shifts the graph right by h units; f(x + h) shifts left.' },
  { pattern: /vertical translation/i, visualType: 'verticalShiftDiagram', caption: 'f(x) + k shifts the graph up by k units; f(x) − k shifts down.' },
  { pattern: /what is a transformation/i, visualType: 'verticalShiftDiagram', caption: 'Transformations shift, stretch, or reflect a function graph.' },
  // ── Exponents ──
  { pattern: /exponential functions|exponential growth|exponential decay/i, visualType: 'exponentialGrowthDiagram', caption: 'Exponential growth (b > 1) curves up; exponential decay (0 < b < 1) curves down.' },
  // ── Percents ──
  { pattern: /percent change|increase|decrease/i, visualType: 'percentChangeDiagram', caption: 'Percent change = (new − old) / old × 100%. The denominator is always the original value.' },
];

function pickVisual(lesson) {
  const haystack = `${lesson.title} ${lesson.section || ''}`;
  for (const rule of VISUAL_RULES) {
    if (rule.pattern.test(haystack)) return { visualType: rule.visualType, caption: rule.caption };
  }
  return null;
}

const LESSON_SEMANTIC_RULES = {
  volume: [
    {
      match: /volume of a cube|cube example/i,
      formula: '$$V=s^3$$',
      trap: 'using cylinder/cone/sphere formulas on cube problems',
      strategy: 'Identify the solid first: cube means one edge length, then cube it.',
      visualType: 'cubeDiagram',
      visualCaption: 'A cube with edge length s — volume = s³.',
    },
    {
      match: /rectangular prism|box/i,
      formula: '$$V=lwh$$',
      trap: 'mixing surface area with volume in prism questions',
      strategy: 'Label length, width, and height explicitly before multiplying.',
      visualType: 'rectangularPrismDiagram',
      visualCaption: 'A rectangular prism labeled with length, width, and height.',
    },
    {
      match: /cylinder/i,
      formula: '$$V=\\pi r^2h$$',
      trap: 'using diameter as radius in cylinder formulas',
      strategy: 'Convert diameter to radius before squaring.',
      visualType: 'cylinderDiagram',
      visualCaption: 'A cylinder with radius r and height h labeled.',
    },
    {
      match: /sphere/i,
      formula: '$$V=\\frac{4}{3}\\pi r^3$$',
      trap: 'using the area formula instead of sphere volume',
      strategy: 'Check exponent and coefficient: sphere volume always includes $\\frac{4}{3}$ and $r^3$.',
      visualType: 'sphereDiagram',
      visualCaption: 'A sphere with radius r labeled.',
    },
    {
      match: /cone/i,
      formula: '$$V=\\frac{1}{3}\\pi r^2h$$',
      trap: 'forgetting the $\\frac{1}{3}$ in cone volume',
      strategy: 'Compute cylinder volume first, then take one-third.',
      visualType: 'coneDiagram',
      visualCaption: 'A cone with radius r and height h labeled.',
    },
    {
      match: /triangular prism/i,
      formula: '$$V=Bh=\\left(\\frac{1}{2}b_\\triangle h_\\triangle\\right)L$$',
      trap: 'using triangle area alone and forgetting prism length',
      strategy: 'First find the triangular base area, then multiply by prism length.',
    },
  ],
  quadratics: [
    {
      match: /discriminant/i,
      formula: '$$\\Delta=b^2-4ac$$',
      trap: 'using the quadratic formula when only root count is asked',
      strategy: 'Map wording to discriminant sign: two/one/none real roots.',
      visualType: 'parabolaFromGraphDiagram',
      visualCaption: 'Discriminant sign determines whether the parabola crosses the x-axis 2, 1, or 0 times.',
    },
    {
      match: /vertex|vertex form/i,
      formula: '$$x_{\\text{vertex}}=-\\frac{b}{2a},\\quad y_{\\text{vertex}}=f\\!\\left(-\\frac{b}{2a}\\right)$$',
      trap: 'confusing x-coordinate of the vertex with min/max value',
      strategy: 'Answer the exact ask: x-location or minimum/maximum y-value.',
      visualType: 'parabolaFromGraphDiagram',
      visualCaption: 'Vertex is the turning point: read x-location and min/max value separately.',
    },
    {
      match: /roots|zeros|solutions/i,
      formula: '$$x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}$$',
      trap: 'sign errors when translating factors to roots',
      strategy: 'Use factoring when clean; use quadratic formula when factoring is messy.',
    },
  ],
  statistics: [
    {
      match: /mean|average/i,
      formula: '$$\\bar{x}=\\frac{\\sum x}{n}$$',
      trap: 'averaging averages without weighting by group size',
      strategy: 'Compute total sum and total count first, then divide.',
      visualType: 'meanMedianDiagram',
      visualCaption: 'The mean is the balance point of the data set.',
    },
    {
      match: /median/i,
      formula: '$$\\text{Median}=\\text{middle value after sorting}$$',
      trap: 'taking the middle of an unsorted list',
      strategy: 'Sort first, then locate one middle value (odd n) or average two (even n).',
      visualType: 'meanMedianDiagram',
      visualCaption: 'A sorted data set with the median (middle value) highlighted.',
    },
    {
      match: /conditional probability|probability/i,
      formula: '$$P(A\\mid B)=\\frac{P(A\\cap B)}{P(B)}$$',
      trap: 'using grand total in denominator for conditional questions',
      strategy: 'Given B means denominator is restricted to group B only.',
    },
    {
      match: /margin of error/i,
      formula: '$$\\text{Interval}=\\hat{p}\\pm\\text{MOE}$$',
      trap: 'confusing interval endpoints with margin of error value',
      strategy: 'Find lower and upper bounds first, then interpret claims against the full interval.',
    },
  ],
  percents: [
    {
      match: /percent change|increase|decrease/i,
      formula: '$$\\text{Percent change}=\\frac{\\text{new}-\\text{old}}{\\text{old}}\\times100\\%$$',
      trap: 'dividing by new value instead of original value',
      strategy: 'Original value always belongs in the denominator.',
      visualType: 'percentChangeDiagram',
      visualCaption: 'Percent change always divides by the original (old) value.',
    },
    {
      match: /percent of|what percent/i,
      formula: '$$\\text{part}=\\left(\\frac{p}{100}\\right)\\times\\text{whole}$$',
      trap: 'swapping part and whole when translating wording',
      strategy: 'Translate words explicitly: is = equals, of = multiply, what = unknown.',
    },
  ],
  transformations: [
    {
      match: /horizontal translation/i,
      formula: '$$g(x)=f(x-h)\\Rightarrow\\text{shift right }h,\\quad g(x)=f(x+h)\\Rightarrow\\text{shift left }h$$',
      trap: 'moving graph in same direction as inside sign',
      strategy: 'Inside sign and horizontal shift direction are opposite.',
      visualType: 'horizontalShiftDiagram',
      visualCaption: 'f(x − h) shifts right, f(x + h) shifts left — opposite of the sign inside.',
    },
    {
      match: /vertical translation/i,
      formula: '$$g(x)=f(x)+k\\Rightarrow\\text{up }k,\\quad g(x)=f(x)-k\\Rightarrow\\text{down }k$$',
      trap: 'treating outside constants as horizontal shifts',
      strategy: 'Outside constants only move y-values.',
      visualType: 'verticalShiftDiagram',
      visualCaption: 'f(x) + k shifts the entire graph up by k units.',
    },
  ],
  circles: [
    {
      match: /area of a circle/i,
      formula: '$$A=\\pi r^2$$',
      trap: 'using diameter directly as radius in area formula',
      strategy: 'Convert diameter to radius before squaring.',
      visualType: 'circlePartsDiagram',
      visualCaption: 'Circle with radius r labeled — area fills the interior.',
    },
    {
      match: /circumference/i,
      formula: '$$C=2\\pi r=\\pi d$$',
      trap: 'using area formula when circumference is asked',
      strategy: 'Circumference is distance around, not interior area.',
      visualType: 'circlePartsDiagram',
      visualCaption: 'Circumference is the full distance around the circle.',
    },
    {
      match: /arc length/i,
      formula: '$$s=\\frac{\\theta}{360^\\circ}\\cdot2\\pi r\\quad\\text{or}\\quad s=r\\theta\\ (\\theta\\text{ in radians})$$',
      trap: 'using sector area formula for arc length',
      strategy: 'Arc length uses circumference proportion, not area proportion.',
      visualType: 'arcLengthDiagram',
      visualCaption: 'Arc length is a fraction of the circumference, determined by the central angle.',
    },
    {
      match: /sector area/i,
      formula: '$$A_{\\text{sector}}=\\frac{\\theta}{360^\\circ}\\cdot\\pi r^2$$',
      trap: 'using arc length formula for sector area',
      strategy: 'Sector area is a fraction of the full circle area.',
      visualType: 'arcLengthDiagram',
      visualCaption: 'Sector area is a pie-slice fraction of the total circle area.',
    },
    {
      match: /equation.*circle|circle.*equation|standard form.*circle/i,
      formula: '$$(x-h)^2+(y-k)^2=r^2$$',
      trap: 'confusing center signs — (x − h) means center x is +h',
      strategy: 'Read signs carefully: the center is (h, k), with opposite signs from the equation.',
      visualType: 'circleEquationDiagram',
      visualCaption: 'Circle on a coordinate plane showing center (h, k) and radius r.',
    },
  ],
  exponents: [
    {
      match: /laws of exponents/i,
      formula: '$$a^ma^n=a^{m+n},\\quad \\frac{a^m}{a^n}=a^{m-n},\\quad (a^m)^n=a^{mn}$$',
      trap: 'adding exponents in power-of-a-power expressions',
      strategy: 'Same base multiplication adds exponents; power of a power multiplies exponents.',
    },
    {
      match: /exponential functions|exponential growth|exponential decay/i,
      formula: '$$f(x)=a\\cdot b^x,\\quad b=1+r\\text{ (growth)},\\ b=1-r\\text{ (decay)}$$',
      trap: 'using growth rate as base directly',
      strategy: 'Convert rate to factor before substituting.',
      visualType: 'exponentialGrowthDiagram',
      visualCaption: 'Exponential growth curves up (b > 1); decay curves down toward zero (0 < b < 1).',
    },
  ],
  'linear-equations': [
    {
      match: /parallel\s+lines?/i,
      formula: '$$m_1=m_2,\\quad b_1\\ne b_2$$',
      trap: 'treating same slope and same intercept as parallel',
      strategy: 'Parallel means equal slopes but different intercepts.',
      visualType: 'parallelLinesDiagram',
      visualCaption: 'Parallel lines have equal slopes and never intersect.',
    },
    {
      match: /perpendicular\s+lines?/i,
      formula: '$$m_1\\cdot m_2=-1\\quad\\text{(negative reciprocals)}$$',
      trap: 'negating slope without taking reciprocal',
      strategy: 'Flip and negate to get perpendicular slope.',
      visualType: 'perpendicularLinesDiagram',
      visualCaption: 'Perpendicular slopes are negative reciprocals and multiply to -1.',
    },
    {
      match: /slope.*table/i,
      formula: '$$m=\\frac{\\Delta y}{\\Delta x}$$',
      trap: 'using only y-change as slope when x-step is not 1',
      strategy: 'Always compute both \\(\\Delta y\\) and \\(\\Delta x\\) from table rows.',
      visualType: 'slopeFromTableDiagram',
      visualCaption: 'Table slope comes from change in y divided by change in x between rows.',
    },
    {
      match: /slope.*graph/i,
      formula: '$$m=\\frac{y_2-y_1}{x_2-x_1}=\\frac{\\text{rise}}{\\text{run}}$$',
      trap: 'missing negative sign for downward lines',
      strategy: 'Direction check first, then count rise and run.',
      visualType: 'slopeFromGraphDiagram',
      visualCaption: 'Graph slope is rise over run, with sign determined by line direction.',
    },
    {
      match: /y.?intercept/i,
      formula: '$$y=mx+b\\Rightarrow y\\text{-intercept}=b,\\quad Ax+By=C\\Rightarrow y\\text{-intercept}=\\frac{C}{B}$$',
      trap: 'confusing slope coefficient with y-intercept',
      strategy: 'Set x = 0 to verify y-intercept in any form.',
      visualType: 'yInterceptDiagram',
      visualCaption: 'The y-intercept is the point where the graph crosses the y-axis.',
    },
  ],
  triangles: [
    {
      match: /pythagorean/i,
      formula: '$$a^2+b^2=c^2$$',
      trap: 'labeling the wrong side as the hypotenuse',
      strategy: 'Hypotenuse is always opposite the 90° angle and alone on one side of the equation.',
      visualType: 'rightTriangleDiagram',
      visualCaption: 'A right triangle with legs a, b and hypotenuse c labeled.',
    },
    {
      match: /special right/i,
      formula: '$$45\\text{-}45\\text{-}90:\\ x:x:x\\sqrt{2}\\qquad 30\\text{-}60\\text{-}90:\\ x:x\\sqrt{3}:2x$$',
      trap: 'mixing up which side gets √2 vs √3',
      strategy: 'Shortest side is opposite the smallest angle; hypotenuse is always the longest.',
      visualType: 'specialTrianglesDiagram',
      visualCaption: '45-45-90 and 30-60-90 triangles with their fixed side ratios.',
    },
    {
      match: /similar/i,
      formula: '$$\\frac{a_1}{a_2}=\\frac{b_1}{b_2}=\\frac{c_1}{c_2}$$',
      trap: 'setting up proportions with non-corresponding sides',
      strategy: 'Match vertices first, then set up proportions with corresponding sides.',
      visualType: 'similarTrianglesDiagram',
      visualCaption: 'Two similar triangles with matching angles and proportional sides.',
    },
    {
      match: /area of a triangle/i,
      formula: '$$A=\\frac{1}{2}bh$$',
      trap: 'using a slant side as the height instead of the perpendicular height',
      strategy: 'Height must be perpendicular to the chosen base.',
      visualType: 'triangleAreaDiagram',
      visualCaption: 'Triangle with base and perpendicular height labeled.',
    },
  ],
};

function resolveLessonSemantics({ moduleId, lesson, moduleCfg }) {
  const defaults = {
    formula: moduleCfg.formula,
    trap: moduleCfg.satPatterns[lesson.id % moduleCfg.satPatterns.length],
    strategy: moduleCfg.strategy,
    visualType: null,
    visualCaption: '',
  };
  const rules = LESSON_SEMANTIC_RULES[moduleId] || [];
  for (const rule of rules) {
    if (rule.match.test(lesson.title)) {
      return {
        formula: rule.formula || defaults.formula,
        trap: rule.trap || defaults.trap,
        strategy: rule.strategy || defaults.strategy,
        visualType: rule.visualType || defaults.visualType,
        visualCaption: rule.visualCaption || defaults.visualCaption,
      };
    }
  }
  return defaults;
}

/**
 * Topic-specific content library. Each entry maps a regex on `lesson.title`
 * to rich, lesson-aware instructional content that replaces generic filler.
 * Falls back to module-level defaults when no match is found.
 */
const TOPIC_CONTENT = {
  'quadratics': [
    {
      match: /introduction to quadratics/i,
      intuition: 'A quadratic is any equation where the highest power of the variable is $2$. Unlike a line, which increases or decreases forever, a quadratic **turns around** — it has a highest or lowest point. On a graph it makes a U-shape called a **parabola**.',
      explanation: 'The standard form is $y = ax^2 + bx + c$. The coefficient $a$ controls **direction**: when $a > 0$ the parabola opens upward (has a minimum); when $a < 0$ it opens downward (has a maximum). The SAT tests this in one sentence: "what is the **minimum** value?" tells you $a > 0$, and "maximum" tells you $a < 0$.',
      trapWhy: 'CB offers the $y$-intercept $c$ as an answer when the question asks for the vertex value, because students who only read the constant term fall for this.',
      trapFix: 'Check what the question asks: "minimum/maximum **value**" = $y$-coordinate of the vertex, not the constant $c$. Always locate the vertex before answering.',
      microExample: 'Given $y = 2x^2 - 8x + 5$: $a = 2 > 0$ so the parabola opens **up** (minimum exists). The minimum value is the $y$-coordinate of the vertex, not $5$.',
    },
    {
      match: /roots/i,
      intuition: 'The roots (also called zeros, solutions, or x-intercepts) are the $x$-values where the parabola crosses the $x$-axis — that is, where $y = 0$. A quadratic can have 2, 1, or 0 real roots depending on whether the parabola crosses, touches, or misses the axis.',
      explanation: 'Set the equation equal to zero and solve. Three methods: **factoring** (fastest when integers work), **quadratic formula** (always works), and **graphing/DESMOS** (visual confirmation). On the SAT, the question wording tells you which to use: "what are the solutions?" → factor or formula; "how many solutions?" → discriminant.',
      trapWhy: 'When a quadratic factors as $(x - 3)(x + 5) = 0$, the roots are $x = 3$ and $x = -5$. Students frequently write $x = -3$ and $x = 5$ — flipping the signs from the factored form.',
      trapFix: 'After factoring, set each factor equal to zero separately: $(x - 3) = 0 \\Rightarrow x = 3$, $(x + 5) = 0 \\Rightarrow x = -5$. The sign in the answer is always the **opposite** of the sign inside the parenthesis.',
      microExample: 'Factor $x^2 + 2x - 15 = 0$: find two numbers that multiply to $-15$ and add to $+2$. Those are $+5$ and $-3$. So $(x + 5)(x - 3) = 0$, giving $x = -5$ or $x = 3$.',
    },
    {
      match: /vertex($|\s)/i,
      intuition: 'The vertex is the single most important point on a parabola — it is the **turning point** where the curve changes direction. If the parabola opens upward, the vertex is the **minimum**; if downward, the **maximum**.',
      explanation: 'From standard form $y = ax^2 + bx + c$: the $x$-coordinate of the vertex is $h = \\frac{-b}{2a}$. Plug $h$ back in to get $k = f(h)$, the $y$-coordinate. From vertex form $y = a(x - h)^2 + k$: read the vertex directly as $(h, k)$. **Critical distinction on the SAT**: "at what value of $x$?" asks for $h$. "What is the minimum/maximum value?" asks for $k$.',
      trapWhy: 'In vertex form $y = 3(x - 4)^2 + 7$, the vertex is $(4, 7)$. Students write $(-4, 7)$ because they forget the formula uses $(x \\mathbf{-} h)$, so $h$ has the opposite sign of what appears in the parenthesis.',
      trapFix: 'Read vertex form as $y = a(x - (\\text{positive } h))^2 + k$. If you see $(x - 4)$, then $h = +4$. If you see $(x + 3)$, rewrite as $(x - (-3))$, so $h = -3$.',
      microExample: '$y = -2(x + 1)^2 + 9$. Rewrite: $(x + 1) = (x - (-1))$, so $h = -1$, $k = 9$. Vertex: $(-1, 9)$. Since $a = -2 < 0$, this is the **maximum** value, so the maximum is $9$.',
    },
    {
      match: /vertex\s+form/i,
      intuition: 'Vertex form is the version of a quadratic that shows you the vertex **immediately** — no calculation needed. It looks like $y = a(x - h)^2 + k$ where $(h, k)$ is the vertex.',
      explanation: 'This form is the fastest path to answer "minimum/maximum" questions. You can convert standard form to vertex form by **completing the square**: take $y = ax^2 + bx + c$, factor $a$ from the first two terms, complete the square inside, and simplify. On the SAT, if the equation is already in vertex form, just read $(h, k)$ directly.',
      trapWhy: 'Students forget that $a$ scales the parabola. In $y = 5(x - 2)^2 + 3$, the vertex is $(2, 3)$ regardless of $a = 5$. But students sometimes multiply $k$ by $a$ and report $15$ as the minimum.',
      trapFix: 'The $k$ value IS the minimum/maximum — do not multiply it by $a$. The $a$ value only controls how wide or narrow the parabola is and its direction.',
      microExample: 'Convert $y = x^2 - 6x + 11$ to vertex form: $y = (x^2 - 6x + 9) + 2 = (x - 3)^2 + 2$. Vertex: $(3, 2)$, minimum value is $2$.',
    },
    {
      match: /discriminant/i,
      intuition: 'The discriminant is the expression under the square root in the quadratic formula: $\\Delta = b^2 - 4ac$. It tells you **how many real solutions** the equation has without actually solving it.',
      explanation: 'Three cases: (1) $\\Delta > 0$: two distinct real roots — the parabola crosses the $x$-axis twice. (2) $\\Delta = 0$: exactly one real root (a repeated root) — the parabola just touches the $x$-axis. (3) $\\Delta < 0$: no real roots — the parabola never reaches the $x$-axis. The SAT often phrases this as "for what value of $k$ does the equation have no real solutions?" — set $\\Delta < 0$ and solve the inequality.',
      trapWhy: 'Students confuse "no real solutions" with "no solutions at all." On the SAT, "no real solutions" means $\\Delta < 0$. Students also mix up the direction of the inequality: they set $\\Delta > 0$ when the question says "no real solutions."',
      trapFix: 'Map the wording directly: "no real solutions" → $\\Delta < 0$. "Exactly one solution" → $\\Delta = 0$. "Two real solutions" → $\\Delta > 0$. Write this mapping before computing.',
      microExample: 'For $2x^2 + 5x + k = 0$: $\\Delta = 25 - 8k$. No real solutions when $25 - 8k < 0$, so $k > \\frac{25}{8} = 3.125$.',
    },
    {
      match: /completing the square/i,
      intuition: 'Completing the square is a method that rewrites any quadratic into vertex form. It works by creating a perfect square trinomial inside the expression, which reveals the vertex directly.',
      explanation: 'Start with $ax^2 + bx + c$. If $a \\neq 1$, factor $a$ from the first two terms. Take half of the coefficient of $x$, square it, add and subtract it inside. Factor the perfect square and simplify. Result: $a(x - h)^2 + k$.',
      trapWhy: 'When $a \\neq 1$, students forget to factor out $a$ first, or they forget that adding a value inside the parenthesis after factoring $a$ actually adds $a \\times (\\text{value})$ to the equation — so the compensating subtraction must also be scaled.',
      trapFix: 'Always factor $a$ first. When you add $(b/2a)^2$ inside the parenthesis, you subtract $a \\cdot (b/2a)^2$ outside to keep the equation balanced.',
      microExample: 'Complete the square for $3x^2 + 12x + 7$: factor 3 from first two terms → $3(x^2 + 4x) + 7$. Half of $4$ is $2$, squared is $4$. Add and subtract: $3(x^2 + 4x + 4 - 4) + 7 = 3(x + 2)^2 - 12 + 7 = 3(x + 2)^2 - 5$. Vertex: $(-2, -5)$.',
    },
    {
      match: /deriving standard form|graph.*equation/i,
      intuition: 'Sometimes the SAT gives you a graph and asks you to write the equation. You need to extract key features from the graph (roots, vertex, a point) and use them to build the equation.',
      explanation: 'Three paths: (1) If you can read the roots $r_1, r_2$ from the graph → factored form: $y = a(x - r_1)(x - r_2)$, then use another point to find $a$. (2) If you can read the vertex $(h, k)$ → vertex form: $y = a(x - h)^2 + k$, then use another point to find $a$. (3) DESMOS regression: enter the points and fit a quadratic.',
      trapWhy: 'Students read the vertex but forget they still need one more point to determine $a$. Without $a$, there are infinitely many parabolas through that vertex.',
      trapFix: 'After writing the form with the vertex or roots, always plug in one additional point from the graph to solve for $a$. Then expand to standard form if the question requires it.',
      microExample: 'A graph shows vertex $(2, -3)$ and passes through $(0, 5)$. Vertex form: $y = a(x - 2)^2 - 3$. Plug in $(0, 5)$: $5 = a(4) - 3 \\Rightarrow a = 2$. Equation: $y = 2(x-2)^2 - 3 = 2x^2 - 8x + 5$.',
    },
  ],
  'functions': [
    {
      match: /^what is a function/i,
      intuition: 'A function is a rule that assigns exactly one output to each input. Think of it as a machine: you put in a number ($x$), the machine applies a rule, and out comes exactly one result $f(x)$.',
      explanation: 'On the SAT, $f(x)$ is NOT "$f$ times $x$" — it means "the output of function $f$ when the input is $x$." When the question says "find $f(3)$," it means substitute $x = 3$ into the rule and compute the output. This notation distinction is the single most tested concept in the functions module.',
      trapWhy: 'Students see $f(3)$ and multiply $f \\times 3$. Others confuse $f(x) = 5$ (finding the input that gives output $5$) with $f(5)$ (finding the output when input is $5$).',
      trapFix: 'Read $f(3)$ as "plug in $3$ for $x$." Read "$f(x) = 5$" as "find the $x$ that makes the output $5$." These are opposite directions — input-to-output vs output-to-input.',
      microExample: 'If $f(x) = 2x + 1$, then $f(3) = 2(3) + 1 = 7$. If $f(x) = 5$, then $2x + 1 = 5$, so $x = 2$.',
    },
    {
      match: /function notation/i,
      intuition: 'Function notation $f(x)$ is just a compact way to name a rule and show what input it takes. The letter $f$ is the name, and the $(x)$ tells you the input variable.',
      explanation: 'Multiple notations appear on the SAT: $f(x)$, $g(x)$, $h(t)$. The letter changes but the logic is identical — plug in the value inside the parentheses for every occurrence of the variable in the rule. When you see $g(a + 1)$, replace every $x$ in $g$\'s rule with $(a + 1)$.',
      trapWhy: 'Students forget to substitute $(a + 1)$ everywhere $x$ appears. In $g(x) = x^2 + 3x$, $g(a+1) = (a+1)^2 + 3(a+1)$, not $(a+1)^2 + 3x$.',
      trapFix: 'Circle every $x$ in the function rule. Replace ALL of them with the new input — not just the first one.',
      microExample: '$g(x) = x^2 - 4x$. Find $g(3)$: $= (3)^2 - 4(3) = 9 - 12 = -3$.',
    },
    {
      match: /composition/i,
      intuition: 'Composition means using the output of one function as the input of another. $f(g(x))$ means: first compute $g(x)$, then feed that result into $f$.',
      explanation: 'Work inside-out: $(f \\circ g)(x) = f(g(x))$. First evaluate the inner function $g(x)$, then substitute that result into $f$. The order matters — $f(g(x)) \\neq g(f(x))$ in general.',
      trapWhy: 'Students reverse the order: they compute $f$ first instead of $g$. In $f(g(2))$, you must find $g(2)$ first, not $f(2)$.',
      trapFix: 'Always start with the innermost function. Write it as a two-step process: Step 1: compute inner. Step 2: plug result into outer.',
      microExample: '$f(x) = x + 3$, $g(x) = 2x$. Find $f(g(4))$: Step 1: $g(4) = 8$. Step 2: $f(8) = 11$.',
    },
  ],
  'systems': [
    {
      match: /what is a system/i,
      intuition: 'A system of equations is two or more equations that share the same variables. The solution is the point (or points) where ALL equations are true simultaneously — graphically, where the lines intersect.',
      explanation: 'On the SAT, systems appear in three flavors: (1) **One solution** — the lines cross at exactly one point (different slopes). (2) **No solution** — the lines are parallel (same slope, different intercepts). (3) **Infinitely many solutions** — the lines are identical (same slope AND same intercept). CB tests whether you can classify the system before solving.',
      trapWhy: 'Students waste time solving for exact $(x, y)$ values when the question only asks "how many solutions?" — a classification question that requires comparing slopes, not computing intersection points.',
      trapFix: 'Read the question first. If it asks "how many solutions," compare slopes and intercepts immediately. Only compute exact values when the question asks "what is $x$?" or "what is $x + y$?"',
      microExample: '$y = 2x + 3$ and $y = 2x - 1$: same slope ($2$), different intercepts ($3 \\neq -1$) → parallel → **no solution**.',
    },
    {
      match: /types of solutions/i,
      intuition: 'The number of solutions tells you how the lines relate geometrically. This is one of the most commonly tested system concepts on the SAT.',
      explanation: 'Compare the equations in slope-intercept form: Same slope + different intercept = parallel = **no solution**. Same slope + same intercept = same line = **infinitely many**. Different slopes = they must cross somewhere = **exactly one solution**. For standard form $ax + by = c$, compare the ratios $a_1/a_2$, $b_1/b_2$, $c_1/c_2$.',
      trapWhy: 'Students confuse "infinitely many solutions" with "no solution." Both involve the same slope, but they differ in whether the intercepts also match.',
      trapFix: 'Parallel (no solution) = same slope, DIFFERENT intercept. Same line (infinite solutions) = same slope, SAME intercept. Write both conditions down before answering.',
      microExample: '$3x + 6y = 12$ and $x + 2y = 4$: divide first equation by $3$ → $x + 2y = 4$. Same equation! → **infinitely many solutions**.',
    },
    {
      match: /substitution/i,
      intuition: 'Substitution works by solving one equation for one variable, then plugging that expression into the other equation. It reduces a two-variable problem to a one-variable problem.',
      explanation: 'Step 1: Pick the equation where one variable is easiest to isolate. Step 2: Solve for that variable. Step 3: Substitute into the other equation. Step 4: Solve and back-substitute. Best when one equation already has a variable isolated (e.g., $y = 3x + 1$).',
      trapWhy: 'Students substitute into the SAME equation they solved, getting a tautology like $y = y$ instead of a useful result.',
      trapFix: 'Always substitute into the OTHER equation — the one you did NOT rearrange.',
      microExample: '$y = 2x + 1$ and $3x + y = 11$. Substitute: $3x + (2x + 1) = 11$ → $5x = 10$ → $x = 2$, $y = 5$.',
    },
    {
      match: /elimination/i,
      intuition: 'Elimination works by adding or subtracting equations to cancel one variable entirely. It is often faster than substitution when both equations are in standard form.',
      explanation: 'Step 1: Align equations in $ax + by = c$ form. Step 2: Multiply one or both equations so that one variable has equal (or opposite) coefficients. Step 3: Add or subtract to eliminate that variable. Step 4: Solve for the remaining variable and back-substitute.',
      trapWhy: 'Students add equations when they should subtract (or vice versa), doubling a variable instead of canceling it. This happens when the matching coefficients have the same sign.',
      trapFix: 'Same sign → subtract. Opposite signs → add. Check after combining: one variable should be completely gone.',
      microExample: '$2x + 3y = 7$ and $2x - y = 3$. Same $x$-coefficient, same sign → subtract: $4y = 4$ → $y = 1$, $x = 2$.',
    },
  ],
  'triangles': [
    {
      match: /what is a triangle/i,
      intuition: 'A triangle has three sides, three angles, and those angles always add to $180°$. This single fact — the angle sum property — is the foundation of nearly every triangle question on the SAT.',
      explanation: 'On the SAT, the angle-sum property is tested directly ("find the third angle") and indirectly (in multi-step problems). If two angles are given, the third is $180° - (\\text{angle}_1 + \\text{angle}_2)$. In isosceles triangles, two equal sides mean two equal base angles.',
      trapWhy: 'Students set up the equation correctly but forget that an exterior angle equals the sum of the two non-adjacent interior angles — not $180°$ minus one angle.',
      trapFix: 'Interior angles: sum to $180°$. Exterior angle at any vertex = sum of the two remote interior angles. Write the correct formula first.',
      microExample: 'Triangle with angles $40°$, $65°$, and $x$: $x = 180 - 40 - 65 = 75°$.',
    },
    {
      match: /pythagorean/i,
      intuition: 'The Pythagorean theorem $a^2 + b^2 = c^2$ applies ONLY to right triangles. $c$ is always the hypotenuse — the longest side, opposite the right angle.',
      explanation: 'On the SAT, you use it to find a missing side when two sides are given. CB also tests Pythagorean triples — integer side lengths that satisfy the theorem without computation: $3$-$4$-$5$, $5$-$12$-$13$, $8$-$15$-$17$, and their multiples.',
      trapWhy: 'Students label the wrong side as the hypotenuse — especially in word problems where the triangle is described but not drawn. If the longest side is squared on the wrong side of the equation, the answer is wrong.',
      trapFix: 'The hypotenuse is ALWAYS the side opposite the $90°$ angle and ALWAYS the longest side. It goes alone on one side: $a^2 + b^2 = c^2$ where $c$ = hypotenuse.',
      microExample: 'A right triangle has legs $6$ and $8$. Hypotenuse: $\\sqrt{36 + 64} = \\sqrt{100} = 10$. (This is a $3$-$4$-$5$ triple $\\times 2$.)',
    },
    {
      match: /special right/i,
      intuition: 'Two special right triangles appear constantly on the SAT: the $45°$-$45°$-$90°$ and the $30°$-$60°$-$90°$. Each has a fixed ratio of side lengths that lets you find any side from any other side without the Pythagorean theorem.',
      explanation: '$45$-$45$-$90$: sides are $x : x : x\\sqrt{2}$. $30$-$60$-$90$: sides are $x : x\\sqrt{3} : 2x$. The shortest side is always opposite the smallest angle. On the SAT, identify the triangle type first, then use the ratio.',
      trapWhy: 'Students mix up which side gets $\\sqrt{2}$ vs $\\sqrt{3}$. In a $30$-$60$-$90$ triangle, students put $\\sqrt{3}$ on the hypotenuse instead of the side opposite $60°$.',
      trapFix: 'For $30$-$60$-$90$: shortest side ($x$) is opposite $30°$. Medium side ($x\\sqrt{3}$) is opposite $60°$. Longest side ($2x$) is the hypotenuse opposite $90°$.',
      microExample: 'A $30$-$60$-$90$ triangle has hypotenuse $10$. Then $x = 5$ (half hypotenuse). Short leg $= 5$, long leg $= 5\\sqrt{3}$.',
    },
    {
      match: /similar/i,
      intuition: 'Similar triangles have the same shape but different sizes. All corresponding angles are equal, and all corresponding sides are in the same ratio (the scale factor).',
      explanation: 'On the SAT, similarity is established by AA (two pairs of equal angles), SAS, or SSS ratio. Once similar, set up a proportion: $\\frac{\\text{side}_1}{\\text{corresponding side}_2} = \\frac{\\text{side}_1}{\\text{corresponding side}_2}$. Cross-multiply and solve.',
      trapWhy: 'Students set up the proportion with non-corresponding sides — matching a leg to a hypotenuse or the wrong order of vertices.',
      trapFix: 'Label the triangles with matching vertices. Then each ratio uses sides from the SAME position in each triangle. Check: ratios should all simplify to the same scale factor.',
      microExample: 'Triangle $ABC \\sim DEF$ with $AB = 6$, $DE = 9$, $BC = 8$. Scale factor $= 9/6 = 3/2$. So $EF = 8 \\times 3/2 = 12$.',
    },
  ],
  'circles': [
    {
      match: /parts of a circle/i,
      intuition: 'Every circle question on the SAT starts with one relationship: the diameter is twice the radius ($d = 2r$). Everything else — area, circumference, arc length — is built from the radius.',
      explanation: 'Key parts: **Radius** ($r$) = center to edge. **Diameter** ($d = 2r$) = edge to edge through center. **Circumference** ($C = 2\\pi r$) = distance around. **Area** ($A = \\pi r^2$) = space inside. The SAT often gives the diameter and expects you to convert to radius before applying formulas.',
      trapWhy: 'Students plug the diameter directly into $\\pi r^2$, getting an area $4\\times$ too large. If diameter $= 10$, then $r = 5$ and $A = 25\\pi$, not $100\\pi$.',
      trapFix: 'First step on every circle problem: "Am I given radius or diameter?" If diameter, divide by $2$ immediately and write $r = d/2$.',
      microExample: 'A circle has diameter $14$. Radius $= 7$. Area $= \\pi(7)^2 = 49\\pi$. Circumference $= 2\\pi(7) = 14\\pi$.',
    },
    {
      match: /area of a circle/i,
      intuition: 'Area measures the space inside the circle. It grows with the **square** of the radius — doubling the radius quadruples the area.',
      explanation: '$A = \\pi r^2$. On the SAT, area questions test: (1) basic computation from radius or diameter, (2) reverse — given the area, find the radius, (3) comparison — how does area change when radius changes? Since $A \\propto r^2$, if $r$ doubles, $A$ quadruples.',
      trapWhy: 'Students confuse area ($\\pi r^2$) with circumference ($2\\pi r$). Both have $\\pi$ and $r$, but area uses $r$ squared.',
      trapFix: 'Area = space INSIDE (squared). Circumference = distance AROUND (not squared). If the answer has $r^2$, it is area.',
      microExample: 'A circle has area $36\\pi$. Then $r^2 = 36$, so $r = 6$. Circumference $= 2\\pi(6) = 12\\pi$.',
    },
    {
      match: /arc length/i,
      intuition: 'An arc is a portion of the circumference. Arc length is the "fraction of the circle" times the full circumference.',
      explanation: 'Arc length $= \\frac{\\theta}{360°} \\times 2\\pi r$ (degrees) or $s = r\\theta$ (radians). The SAT gives you the central angle and radius, and asks for the arc. The key: arc length is a **proportion** of the full circumference.',
      trapWhy: 'Students use the formula for area of a sector ($\\frac{\\theta}{360°} \\times \\pi r^2$) when the question asks for arc length, or vice versa. Arc length has $2\\pi r$, sector area has $\\pi r^2$.',
      trapFix: 'Arc LENGTH → $\\frac{\\theta}{360} \\times 2\\pi r$ (distance around). Sector AREA → $\\frac{\\theta}{360} \\times \\pi r^2$ (space inside). Length = $1D$, Area = $2D$.',
      microExample: 'Central angle $= 90°$, radius $= 4$. Arc length $= \\frac{90}{360} \\times 2\\pi(4) = \\frac{1}{4} \\times 8\\pi = 2\\pi$.',
    },
    {
      match: /equation.*circle|circle.*equation|standard form.*circle/i,
      intuition: 'The equation of a circle in the coordinate plane is $(x - h)^2 + (y - k)^2 = r^2$, where $(h, k)$ is the center and $r$ is the radius.',
      explanation: 'On the SAT, the equation often appears in expanded form: $x^2 + y^2 + Dx + Ey + F = 0$. To find center and radius, you must **complete the square** for both $x$ and $y$ terms. The center is the opposite sign of what appears in the parentheses.',
      trapWhy: 'In $(x - 3)^2 + (y + 2)^2 = 25$, the center is $(3, -2)$ and $r = 5$. Students write center $(-3, 2)$ — flipping signs like the vertex form trap in quadratics.',
      trapFix: 'Same rule as vertex form: the sign inside is the OPPOSITE of the coordinate. $(x - 3)$ means $h = +3$. $(y + 2)$ means $k = -2$. And $r^2 = 25$ means $r = 5$, not $25$.',
      microExample: '$(x + 1)^2 + (y - 4)^2 = 16$. Center: $(-1, 4)$. Radius: $\\sqrt{16} = 4$.',
    },
  ],
  'statistics': [
    {
      match: /what is the mean/i,
      intuition: 'The mean (average) is the sum of all values divided by the count. It is the "balance point" of the data — the value where the data would balance if placed on a number line.',
      explanation: '$\\bar{x} = \\frac{\\sum x}{n}$. On the SAT, mean questions usually involve: (1) finding a missing value given the mean, (2) understanding how adding/removing a value changes the mean, (3) combining two groups. For a missing value: $\\text{sum} = \\text{mean} \\times n$, then subtract the known values.',
      trapWhy: 'When combining groups, students average the two means instead of computing the weighted mean. If group A (10 students, mean 80) and group B (30 students, mean 90), the combined mean is NOT $(80 + 90)/2 = 85$.',
      trapFix: 'Combined mean $= \\frac{\\text{total sum}}{\\text{total count}} = \\frac{10(80) + 30(90)}{40} = \\frac{3500}{40} = 87.5$. Always use total sum ÷ total count.',
      microExample: 'Five test scores: $72, 85, 90, 88, x$. Mean $= 84$. Sum $= 84 \\times 5 = 420$. Known sum $= 335$. So $x = 420 - 335 = 85$.',
    },
    {
      match: /outlier/i,
      intuition: 'An outlier is an extremely high or low value that pulls the mean toward it. The median, however, barely moves — it only depends on the middle position, not the extreme values.',
      explanation: 'On the SAT: "which measure is most affected by the outlier?" → **mean**. "Which measure best represents the typical value when there\'s an outlier?" → **median**. A high outlier increases the mean; a low outlier decreases it. The median only shifts by one position at most.',
      trapWhy: 'Students think both mean and median are equally affected. CB designs questions where removing an outlier changes the mean dramatically but barely touches the median.',
      trapFix: 'Mean = sensitive to outliers (extreme values). Median = resistant to outliers (middle value). Mode = unaffected unless the outlier is repeated.',
      microExample: 'Data: $2, 3, 4, 5, 100$. Mean $= 22.8$ (pulled up by $100$). Median $= 4$ (unaffected by $100$).',
    },
    {
      match: /what is the median/i,
      intuition: 'The median is the middle value when all data points are sorted in order. If there is an even number of values, the median is the average of the two middle values.',
      explanation: 'Step 1: Sort all values from least to greatest. Step 2: If $n$ is odd, the median is the value at position $(n+1)/2$. If $n$ is even, the median is the average of the values at positions $n/2$ and $n/2 + 1$.',
      trapWhy: 'Students forget to sort the data first and pick the middle of the unsorted list, which is just a random value.',
      trapFix: 'Always sort first. Circle the middle value(s). If two middle values, average them.',
      microExample: 'Data: $7, 2, 9, 4, 5$. Sorted: $2, 4, 5, 7, 9$. Median $= 5$ (third of five values).',
    },
    {
      match: /conditional probability|probability/i,
      intuition: 'Conditional probability asks: "given that something is already true, what is the probability of another event?" It narrows the sample space to only the cases where the condition holds.',
      explanation: '$P(A \\mid B) = \\frac{P(A \\cap B)}{P(B)}$. On the SAT, this usually appears with a two-way frequency table. "Given that a student is male, what is the probability they prefer math?" → look at the MALE row only, then find the math count divided by the male total.',
      trapWhy: 'Students divide by the grand total instead of the conditional group total. "Given male" means the denominator is the total number of males, not all students.',
      trapFix: '"Given B" → denominator is B\'s total. Numerator is the overlap of A and B. Ignore everything outside of B.',
      microExample: '50 males total, 20 prefer math. $P(\\text{math} \\mid \\text{male}) = 20/50 = 0.40$. NOT $20/200$ (grand total).',
    },
    {
      match: /margin of error/i,
      intuition: 'The margin of error tells you how much a survey result might differ from the true population value. A confidence interval is: sample statistic $\\pm$ margin of error.',
      explanation: 'On the SAT: "68% of respondents prefer X, with a margin of error of $\\pm 3\\%$" means the true value is between $65\\%$ and $71\\%$. Larger sample → smaller margin of error. The SAT tests interpretation, not calculation.',
      trapWhy: 'Students think a larger margin of error means the study is more reliable (it is the opposite). Others confuse the confidence interval boundaries with the margin of error itself.',
      trapFix: 'Margin of error = half the width of the confidence interval. Bigger sample → narrower interval → more precision → smaller margin of error.',
      microExample: 'Survey: $55\\% \\pm 4\\%$. Confidence interval: $[51\\%, 59\\%]$. We cannot conclude the true value exceeds $60\\%$ because $59\\% < 60\\%$.',
    },
  ],
  'exponents': [
    {
      match: /laws of exponents/i,
      intuition: 'Exponent laws are shortcuts for multiplication and division of powers. Every exponent rule is just a pattern that emerges from the definition of exponents as repeated multiplication.',
      explanation: 'The three core rules: (1) **Product rule**: $a^m \\cdot a^n = a^{m+n}$ — same base, add exponents. (2) **Quotient rule**: $\\frac{a^m}{a^n} = a^{m-n}$ — same base, subtract exponents. (3) **Power rule**: $(a^m)^n = a^{mn}$ — power of a power, multiply exponents. These only work when the bases are the same.',
      trapWhy: 'Students add exponents when they should multiply (power rule vs product rule). $\\left(x^3\\right)^2 = x^6$, not $x^5$.',
      trapFix: 'Multiplying → add exponents. Raising a power to a power → multiply exponents. Same base is required for both.',
      microExample: '$\\frac{x^7}{x^3} = x^{7-3} = x^4$. $(x^3)^2 = x^{3 \\times 2} = x^6$. $x^3 \\cdot x^2 = x^{3+2} = x^5$.',
    },
    {
      match: /comparing exponential/i,
      intuition: 'To compare exponential expressions, rewrite them with the same base. Once the bases match, the larger exponent means the larger value (if the base is greater than $1$).',
      explanation: 'Strategy: express both sides as powers of the same base. $8^3$ vs $4^5$: rewrite as $(2^3)^3 = 2^9$ vs $(2^2)^5 = 2^{10}$. Since $2^{10} > 2^9$, $4^5 > 8^3$.',
      trapWhy: 'Students compare the "visible" exponents ($3$ vs $5$) without converting to the same base. The visible exponent is meaningless when the bases differ.',
      trapFix: 'Always convert to the same base first. Then compare the resulting exponents. If the base is between $0$ and $1$, the comparison flips.',
      microExample: 'Which is larger: $9^4$ or $27^3$? Rewrite: $(3^2)^4 = 3^8$ vs $(3^3)^3 = 3^9$. $3^9 > 3^8$, so $27^3$ is larger.',
    },
    {
      match: /exponential functions/i,
      intuition: 'An exponential function has the variable in the exponent: $f(x) = a \\cdot b^x$. If $b > 1$, the function grows (exponential growth). If $0 < b < 1$, it decays (exponential decay).',
      explanation: '$a$ = initial value (when $x = 0$, $f(0) = a$). $b$ = growth/decay factor. Growth rate $r$: $b = 1 + r$ (growth) or $b = 1 - r$ (decay). The SAT tests interpretation: "the value increases by $15\\%$ each year" means $b = 1.15$.',
      trapWhy: 'Students confuse the growth rate with the growth factor. A $15\\%$ increase means $b = 1.15$, not $b = 0.15$ or $b = 15$.',
      trapFix: 'Growth factor $= 1 +$ rate. So $15\\%$ growth → $b = 1 + 0.15 = 1.15$. $20\\%$ decay → $b = 1 - 0.20 = 0.80$.',
      microExample: 'A population of $500$ grows by $8\\%$ per year. Model: $P = 500(1.08)^t$. After $3$ years: $P = 500(1.08)^3 \\approx 630$.',
    },
  ],
  'percents': [
    {
      match: /introduction to percents/i,
      intuition: 'Percent means "per hundred." $45\\%$ simply means $45$ out of $100$, or $0.45$ as a decimal, or $\\frac{45}{100}$ as a fraction.',
      explanation: 'Converting between forms: Percent → decimal: divide by $100$ (move decimal left $2$). Decimal → percent: multiply by $100$. Fraction → percent: divide numerator by denominator, then multiply by $100$. The SAT tests whether you can move fluidly between these forms.',
      trapWhy: 'Students move the decimal the wrong direction: $5\\% = 0.50$ (wrong) instead of $0.05$ (correct).',
      trapFix: 'Percent to decimal: always move the decimal point two places LEFT. $5\\% = 0.05$, $150\\% = 1.50$.',
      microExample: '$72\\% = 0.72 = \\frac{72}{100} = \\frac{18}{25}$.',
    },
    {
      match: /percent of/i,
      intuition: '"What is $30\\%$ of $200$?" translates directly to math: "what" = $x$, "is" = $=$, "percent" = $/100$, "of" = $\\times$. So: $x = 0.30 \\times 200 = 60$.',
      explanation: 'The word "of" always means multiply. Set up the equation by translating English to math: **is** → $=$, **of** → $\\times$, **what** → $x$, **percent** → $\\div 100$. Then solve.',
      trapWhy: 'Students reverse "percent of" vs "what percent." "$20$ is what percent of $80$?" is $20 = \\frac{x}{100} \\times 80$, not $x = 0.20 \\times 80$.',
      trapFix: 'Translate word by word. "Is" places the equals sign. "Of" places multiplication. Solve for the unknown.',
      microExample: '"$45$ is what percent of $180$?" → $45 = \\frac{x}{100} \\times 180$ → $x = \\frac{45 \\times 100}{180} = 25\\%$.',
    },
    {
      match: /percent change/i,
      intuition: 'Percent change measures how much a value increased or decreased relative to its **original** (starting) value. The denominator is always the original.',
      explanation: '$\\text{Percent change} = \\frac{\\text{new} - \\text{old}}{\\text{old}} \\times 100\\%$. Positive result = increase. Negative result = decrease. On the SAT, "by what percent did X increase?" always means: difference divided by the ORIGINAL value.',
      trapWhy: 'Students divide by the new value instead of the old value. If price goes from $\\$50$ to $\\$60$, the increase is $\\frac{10}{50} = 20\\%$, not $\\frac{10}{60} \\approx 16.7\\%$.',
      trapFix: 'Denominator = ORIGINAL value. Always. If the problem says "increase," the original is the smaller number. If "decrease," the original is the larger number.',
      microExample: 'Price goes from $\\$80$ to $\\$100$. Change $= \\frac{100 - 80}{80} \\times 100\\% = 25\\%$ increase.',
    },
  ],
  'volume': [
    {
      match: /what is volume/i,
      intuition: 'Volume measures the amount of 3D space inside a solid. While area is measured in square units ($\\text{cm}^2$), volume is measured in **cubic** units ($\\text{cm}^3$).',
      explanation: 'On the SAT, volume formulas are provided on the reference sheet — you do not need to memorize them. Your job is to (1) identify the correct shape, (2) plug in the right values (especially radius vs diameter), and (3) compute accurately.',
      trapWhy: 'Students use area formulas when volume is asked, or use diameter where the formula requires radius. The reference sheet says $r$, not $d$.',
      trapFix: 'Step 1: Identify the shape. Step 2: Check — did they give radius or diameter? If diameter, divide by $2$. Step 3: Plug into the formula from the reference sheet.',
      microExample: 'A cylinder has diameter $6$ and height $10$. Radius $= 3$. $V = \\pi(3)^2(10) = 90\\pi$. NOT $\\pi(6)^2(10)$.',
    },
    {
      match: /rectangular prism/i,
      intuition: 'A rectangular prism is just a box. Its volume is length $\\times$ width $\\times$ height. This is the simplest 3D volume formula.',
      explanation: '$V = lwh$. On the SAT, these appear in word problems: "a box is $5$ cm long, $3$ cm wide, and $8$ cm tall." Just multiply the three dimensions. For surface area: $SA = 2(lw + lh + wh)$.',
      trapWhy: 'Students confuse volume (cubic units) with surface area (square units). Volume fills the inside; surface area covers the outside.',
      trapFix: 'Volume = $lwh$ (one multiplication). Surface area = $2(lw + lh + wh)$ (sum of face areas). Check which one the question asks.',
      microExample: 'Box: $4 \\times 6 \\times 3$. Volume $= 72$ cubic units. Surface area $= 2(24 + 12 + 18) = 108$ square units.',
    },
    {
      match: /cylinder/i,
      intuition: 'A cylinder is a circle extended into 3D. Its volume is the area of the circular base times the height: $V = \\pi r^2 h$.',
      explanation: 'The formula $V = \\pi r^2 h$ combines the base area ($\\pi r^2$) with the height ($h$). On the SAT, the main trap is using diameter instead of radius.',
      trapWhy: 'If the problem says "the diameter of the base is $10$," students plug $10$ into $r$, getting $V = 100\\pi h$ instead of the correct $V = 25\\pi h$.',
      trapFix: 'Circle "radius" or "diameter" in the problem. If diameter, divide by $2$ BEFORE plugging in. Write $r = d/2$ as your first step.',
      microExample: 'Cylinder: diameter $= 8$, height $= 5$. Radius $= 4$. $V = \\pi(4)^2(5) = 80\\pi$.',
    },
  ],
  'transformations': [
    {
      match: /what is a transformation/i,
      intuition: 'A transformation changes a function\'s graph by moving, flipping, or stretching it. On the SAT, translations (shifts) are tested far more than reflections or stretches.',
      explanation: 'The general form $g(x) = a \\cdot f(b(x - h)) + k$ encodes all transformations: $h$ shifts horizontally, $k$ shifts vertically, $a$ stretches/reflects vertically, $b$ stretches/reflects horizontally. Read from inside-out: inside changes $x$ (horizontal), outside changes $y$ (vertical).',
      trapWhy: 'Students think $f(x - 3)$ shifts LEFT $3$ (it shifts RIGHT). The horizontal direction is counterintuitive — it goes OPPOSITE to the sign.',
      trapFix: 'Vertical: $+ k$ → up, $- k$ → down (intuitive). Horizontal: $- h$ → RIGHT, $+ h$ → LEFT (opposite of what you expect).',
      microExample: '$f(x) = x^2$. Then $f(x - 2) + 3 = (x-2)^2 + 3$ shifts RIGHT $2$ and UP $3$. Vertex moves from $(0,0)$ to $(2,3)$.',
    },
    {
      match: /vertical translation/i,
      intuition: 'Vertical translations move the entire graph up or down. Adding a constant OUTSIDE the function moves it up; subtracting moves it down.',
      explanation: '$f(x) + k$ shifts UP $k$ units. $f(x) - k$ shifts DOWN $k$ units. Every $y$-value changes by $k$; $x$-values stay the same. The shape of the graph is unchanged.',
      trapWhy: 'Students confuse vertical shifts with horizontal shifts. In $f(x) + 3$, the $+3$ is OUTSIDE → vertical shift UP. In $f(x + 3)$, the $+3$ is INSIDE → horizontal shift LEFT.',
      trapFix: 'Outside the function → vertical. Inside the function (affecting $x$) → horizontal. Check where the number lives.',
      microExample: '$f(x) = x^2$. $f(x) + 5 = x^2 + 5$ → every point moves UP $5$. Vertex: $(0, 0) → (0, 5)$.',
    },
    {
      match: /horizontal translation/i,
      intuition: 'Horizontal translations move the graph left or right. The direction is OPPOSITE to the sign inside the function — this is the most counterintuitive rule in transformations.',
      explanation: '$f(x - h)$ shifts RIGHT $h$ units. $f(x + h)$ shifts LEFT $h$ units. Think of it as: the graph needs to "compensate" by moving in the opposite direction to keep the same outputs.',
      trapWhy: 'Students see $f(x + 3)$ and think it shifts right (positive = right). It actually shifts LEFT. This is the #1 transformation error on the SAT.',
      trapFix: 'Inside the function: $-h$ → right, $+h$ → left. The sign is OPPOSITE to the direction. Check by plugging in: $f(x - 3)$ at $x = 3$ gives $f(0)$, which is the original graph\'s value at $0$ — so the graph moved RIGHT.',
      microExample: '$f(x) = |x|$. $f(x + 2) = |x + 2|$ shifts LEFT $2$. The vertex moves from $(0,0)$ to $(-2, 0)$.',
    },
  ],
  'equivalent-expressions': [
    {
      match: /equivalent expressions/i,
      intuition: 'Two expressions are equivalent if they produce the same value for every possible input. On the SAT, you prove equivalence by expanding, factoring, or simplifying one expression into the other.',
      explanation: 'Three main strategies: (1) **Expand** — distribute and combine like terms to see if they match. (2) **Factor** — pull out common factors or use special identities ($a^2 - b^2 = (a-b)(a+b)$). (3) **Plug in** — substitute a simple value into both expressions; if the results differ, they are NOT equivalent.',
      trapWhy: 'Students cancel terms incorrectly in fractions. $\\frac{x^2 + x}{x} = x + 1$, NOT $x^2 + 1$. You can only cancel factors, not terms.',
      trapFix: 'Factor the numerator first, THEN cancel common factors with the denominator. Never cancel individual terms across a fraction bar.',
      microExample: 'Is $\\frac{x^2 - 9}{x + 3}$ equivalent to $x - 3$? Factor: $\\frac{(x-3)(x+3)}{x+3} = x - 3$ ✓ (for $x \\neq -3$).',
    },
  ],
  'radians-degrees': [
    {
      match: /radians.*degrees|degrees.*radians/i,
      intuition: 'Degrees and radians are two ways to measure angles. $180° = \\pi$ radians. This one conversion factor is all you need.',
      explanation: 'Degrees → radians: multiply by $\\frac{\\pi}{180}$. Radians → degrees: multiply by $\\frac{180}{\\pi}$. Common values to memorize: $90° = \\frac{\\pi}{2}$, $60° = \\frac{\\pi}{3}$, $45° = \\frac{\\pi}{4}$, $30° = \\frac{\\pi}{6}$.',
      trapWhy: 'Students multiply by $\\frac{180}{\\pi}$ when they should multiply by $\\frac{\\pi}{180}$ (converting degrees to radians), or vice versa.',
      trapFix: 'Check your answer: degrees should be a "normal" number (30, 45, 60, 90, etc.). Radians should involve $\\pi$ and be a fraction of $\\pi$. If your radian answer is $> 7$, you probably converted the wrong direction.',
      microExample: 'Convert $120°$ to radians: $120 \\times \\frac{\\pi}{180} = \\frac{2\\pi}{3}$.',
    },
  ],
  'dimensional-analysis': [
    {
      match: /dimensional analysis/i,
      intuition: 'Dimensional analysis is unit conversion — multiplying by conversion factors that equal $1$ so the value changes form but not magnitude. Units cancel just like numbers in fractions.',
      explanation: 'Set up a chain of fractions where the unit you want to cancel appears in the denominator. Write units on every number. Cancel units left to right. The remaining unit should be your target.',
      trapWhy: 'Students flip the conversion factor — putting the unit they want to cancel in the numerator instead of the denominator. This multiplies the unit instead of canceling it.',
      trapFix: 'The unit you want to GET RID OF goes in the denominator. The unit you WANT goes in the numerator. Check: the old unit should cancel.',
      microExample: 'Convert $5$ miles to feet: $5\\ \\text{mi} \\times \\frac{5280\\ \\text{ft}}{1\\ \\text{mi}} = 26{,}400\\ \\text{ft}$. "mi" cancels.',
    },
    {
      match: /squared.*cubic|cubic.*squared/i,
      intuition: 'When converting squared or cubic units, you must apply the conversion factor twice (for squared) or three times (for cubic). This is because area and volume are multi-dimensional.',
      explanation: '$1\\ \\text{ft}^2 = (12\\ \\text{in})^2 = 144\\ \\text{in}^2$. $1\\ \\text{ft}^3 = (12\\ \\text{in})^3 = 1728\\ \\text{in}^3$. The conversion factor gets raised to the same power as the unit.',
      trapWhy: 'Students multiply by $12$ instead of $144$ when converting square feet to square inches. The factor is squared for area, cubed for volume.',
      trapFix: 'Square the conversion factor for area. Cube it for volume. $1\\ \\text{yd}^2 = 9\\ \\text{ft}^2$ (not $3$). $1\\ \\text{yd}^3 = 27\\ \\text{ft}^3$ (not $3$).',
      microExample: 'Convert $2\\ \\text{m}^2$ to $\\text{cm}^2$: $2 \\times (100)^2 = 2 \\times 10{,}000 = 20{,}000\\ \\text{cm}^2$.',
    },
  ],
  'linear-equations': [
    {
      match: /^linear equations$/i,
      intuition: 'A linear equation describes a relationship where the change in $y$ is **constant** for every unit change in $x$. On a graph, this always produces a straight line — hence the name.',
      explanation: 'The SAT tests linear equations through three forms — each reveals different information instantly. **Slope-intercept** ($y = mx + b$) shows slope and $y$-intercept directly. **Standard form** ($Ax + By = C$) reveals both intercepts ($C/A$ and $C/B$) and slope ($-A/B$). **Point-slope** ($y - y_1 = m(x - x_1)$) shows a specific point the line passes through. CB designs answer choices so students who convert to the wrong form waste time and make sign errors.',
      trapWhy: 'CB always offers the $y$-intercept when the question asks for slope (and vice versa). In $y = 3x + 7$, the answer choices will include both $3$ and $7$.',
      trapFix: 'Before computing anything, circle what the question actually asks: "slope," "y-intercept," "x-intercept," or "value at $x = ...$." Then pick the form that shows that value directly — never convert unless forced.',
      microExample: 'Given $4x + 2y = 12$: slope $= -A/B = -4/2 = -2$, $y$-intercept $= C/B = 12/2 = 6$, $x$-intercept $= C/A = 12/4 = 3$. Three values in under 10 seconds.',
    },
    {
      match: /what is the slope/i,
      intuition: 'Slope is the **rate of change** — it measures how much $y$ changes for every one-unit increase in $x$. On the SAT, slope is almost never tested in isolation; it is always embedded in a real-world context where the slope has a specific meaning.',
      explanation: 'In context problems, slope is the "**per**" quantity. A gym that charges "\\$25 **per** month plus a \\$50 sign-up fee" gives $y = 25x + 50$ where slope $= 25$. The words "per," "each," "every," and "for each" are the universal trigger — that number is always the slope. The constant/fixed/initial value is the $y$-intercept.',
      trapWhy: 'CB places both the slope and the $y$-intercept as answer choices. In $y = 25x + 50$, the choices will include "25" and "50" for both "What does 25 represent?" and "What does 50 represent?" Students who rush pick the wrong one.',
      trapFix: 'Slope = the "per" quantity (per month, per item). Intercept = the fixed/initial/flat value. Match the wording first, compute second.',
      microExample: 'A plumber charges a \\$75 service call fee plus \\$40 per hour. Equation: $C = 40h + 75$. "What does $40$ represent?" → the hourly rate (slope). "What does $75$ represent?" → the flat service fee ($y$-intercept).',
    },
    {
      match: /slope.*two coordinates|slope.*formula/i,
      intuition: 'When you know any two points on a line, you can compute the slope. This is one of the most commonly tested skills — the SAT gives you two points in a table, in text, or on a graph, and asks for the slope.',
      explanation: 'The slope formula is $m = \\frac{y_2 - y_1}{x_2 - x_1}$. Plug in any two points $(x_1, y_1)$ and $(x_2, y_2)$. The order does not matter as long as you are consistent — both subtractions must go in the same direction.',
      trapWhy: 'Students subtract $x$-values in one order and $y$-values in the other, producing the negative of the correct slope. Another trap: dividing $\\Delta x$ by $\\Delta y$ instead of $\\Delta y$ by $\\Delta x$.',
      trapFix: 'Always label your points first: $(x_1, y_1)$ and $(x_2, y_2)$. Then compute $\\Delta y = y_2 - y_1$ and $\\Delta x = x_2 - x_1$ separately before dividing. Check: is the line going up or down? The sign of the slope must match.',
      microExample: 'Points: $(2, 5)$ and $(6, 13)$. $\\Delta y = 13 - 5 = 8$, $\\Delta x = 6 - 2 = 4$. Slope $= 8/4 = 2$. The line goes up, slope is positive. ✓',
    },
    {
      match: /slope.*table/i,
      intuition: 'When the SAT gives you a table of $x$ and $y$ values, it is testing whether you can extract the slope. The key insight: pick any two rows, compute $\\Delta y / \\Delta x$. But the $x$-values do not always increase by $1$ — if you forget to divide by the actual $\\Delta x$, you get the wrong slope.',
      explanation: 'From any two rows: slope $= \\frac{\\Delta y}{\\Delta x} = \\frac{y_2 - y_1}{x_2 - x_1}$. If $x$ increases by $2$ and $y$ increases by $6$, the slope is $6/2 = 3$, not $6$. Always check the step size in the $x$-column.',
      trapWhy: 'The SAT deliberately uses non-unit $x$-steps ($+2$, $+3$, $+5$) so that students who only read the $y$-column changes report those as the slope.',
      trapFix: 'Before computing, write down $\\Delta x$ from the table. If $\\Delta x \\neq 1$, you must divide $\\Delta y$ by $\\Delta x$.',
      microExample: 'Table: $x = 1, 3, 5, 7$ and $y = 2, 5, 8, 11$. $\\Delta x = 2$, $\\Delta y = 3$. Slope $= 3/2 = 1.5$. Not $3$.',
    },
    {
      match: /slope.*graph/i,
      intuition: 'When the SAT shows a graph, your first move is to check **direction**. Line going down left-to-right → negative slope → immediately eliminate every positive-slope answer. That one observation cuts the choices in half in 3 seconds.',
      explanation: 'To find the exact slope from a graph: pick two points where the line clearly crosses grid intersections. Count the **rise** (vertical change) and **run** (horizontal change). Slope $= \\text{rise} / \\text{run}$. Remember: downward rise is negative.',
      trapWhy: 'Students count the rise and run correctly but forget the sign. A line going down 3 units over 5 units to the right has slope $-3/5$, not $3/5$.',
      trapFix: 'After counting rise and run, check: does the line go up or down? Up = positive slope, down = negative slope. Attach the correct sign.',
      microExample: 'A line passes through $(0, 4)$ and $(5, 1)$. Rise $= 1 - 4 = -3$, Run $= 5 - 0 = 5$. Slope $= -3/5$.',
    },
    {
      match: /y.?intercept/i,
      intuition: 'The $y$-intercept is where the line crosses the $y$-axis — the value of $y$ when $x = 0$. In real-world contexts, this is the **starting value** or **initial condition** before any changes occur.',
      explanation: 'In slope-intercept form $y = mx + b$, the $y$-intercept is $b$. In standard form $Ax + By = C$, the $y$-intercept is $C/B$ (set $x = 0$ and solve). On a graph, it is the $y$-value where the line touches the vertical axis.',
      trapWhy: 'In $y = 3x + 7$, CB offers $3$ as an answer choice for "what is the $y$-intercept?" because students confuse the slope coefficient with the intercept.',
      trapFix: 'The $y$-intercept is always the **constant term** in slope-intercept form. If the equation is in standard form, plug $x = 0$ and solve for $y$.',
      microExample: 'Given $3x + 5y = 30$: $y$-intercept $= 30/5 = 6$. The line crosses the $y$-axis at $(0, 6)$.',
    },
    {
      match: /parallel\s+lines?/i,
      intuition: 'Parallel lines never intersect — they run in the same direction forever. Algebraically, this means they have the **same slope** but different $y$-intercepts.',
      explanation: 'Two lines are parallel if and only if $m_1 = m_2$ and $b_1 \\neq b_2$. On the SAT, "parallel" questions often give you one equation and ask you to find or identify another line with the same slope. In system-of-equations contexts, parallel lines mean the system has **no solution**.',
      trapWhy: 'Students confuse "same slope" with "same equation." If slopes AND intercepts are equal, it is the same line (infinitely many solutions), not parallel (no solution).',
      trapFix: 'Parallel → same slope, different intercept → no intersection → no solution. Same line → same slope AND same intercept → infinitely many solutions.',
      microExample: 'Line 1: $y = 2x + 3$. A parallel line through $(1, 7)$: slope must be $2$. Using point-slope: $y - 7 = 2(x - 1) \\Rightarrow y = 2x + 5$.',
    },
    {
      match: /perpendicular\s+lines?/i,
      intuition: 'Perpendicular lines meet at a $90°$ angle. The key relationship: their slopes are **negative reciprocals** of each other — flip the fraction and change the sign.',
      explanation: 'If line 1 has slope $m$, a perpendicular line has slope $-1/m$. The product of perpendicular slopes is always $-1$: $m_1 \\times m_2 = -1$. On the SAT, if you see a slope of $2/3$, the perpendicular slope is $-3/2$.',
      trapWhy: 'Students either forget to flip (they write $-2/3$ instead of $-3/2$) or forget to negate (they write $3/2$ instead of $-3/2$). Both errors are common and CB designs choices to catch each one.',
      trapFix: 'Two steps, every time: (1) flip the fraction, (2) change the sign. Check: multiply the two slopes — the result must be $-1$.',
      microExample: 'A line has slope $4$ (i.e., $4/1$). Perpendicular slope: flip → $1/4$, negate → $-1/4$. Check: $4 \\times (-1/4) = -1$. ✓',
    },
    {
      match: /deriving.*context|deriving.*equation/i,
      intuition: 'The SAT frequently gives you a word problem and asks you to write a linear equation. The trick is translating the English into math by identifying the slope (rate) and $y$-intercept (starting value).',
      explanation: 'Step 1: Identify the two quantities (what changes and what it depends on). Step 2: Find the rate of change — the "per" quantity is the slope. Step 3: Find the initial value — the fixed/starting amount is the $y$-intercept. Step 4: Assemble into $y = mx + b$.',
      trapWhy: 'Students swap the slope and intercept in context problems, especially when the numbers are similar in magnitude.',
      trapFix: 'The "per" word always marks the slope. The lump-sum, one-time, initial, or fixed value is always the $y$-intercept.',
      microExample: 'A taxi charges \\$3.50 per mile plus a \\$2.00 base fare. Equation: $C = 3.50m + 2.00$ where $C$ is cost and $m$ is miles.',
    },
  ],
};

function findTopicContent(moduleId, lesson) {
  const topics = TOPIC_CONTENT[moduleId];
  if (!topics) return null;
  for (const entry of topics) {
    if (entry.match.test(lesson.title)) return entry;
  }
  return null;
}

function buildDeterministicTab({ moduleId, lesson, moduleCfg, seedTab, transcriptText, webNote }) {
  const seedSummary = seedTab?.sections?.learn?.summary || '';
  const seedExample = extractSeedBlock(seedTab, 'example');
  const seedCheckpoint = extractSeedBlock(seedTab, 'checkpointQuestion');

  const lessonContext = `${lesson.title}${lesson.section ? ` (${lesson.section})` : ''}`;
  const semantic = resolveLessonSemantics({ moduleId, lesson, moduleCfg });
  const trap = semantic.trap;
  const topicContent = findTopicContent(moduleId, lesson);

  const cleanTranscript = transcriptText
    ? transcriptText.slice(0, 250).replace(/From your lesson delivery[:.]\s*/gi, '').replace(/\s+/g, ' ').trim()
    : '';

  const webEnrichment = webNote
    ? webNote.slice(0, 250).replace(/\s+/g, ' ').trim()
    : '';

  // ── Summary ──
  const STALE_SUMMARY_PATTERNS = [
    /recognition cues, trap avoidance/i,
    /at SAT level:/i,
  ];
  const seedSummaryIsStale = STALE_SUMMARY_PATTERNS.some((p) => p.test(seedSummary));
  const freshSummary = topicContent
    ? topicContent.intuition.slice(0, 220)
    : `This lesson covers ${lessonContext}. You will learn the core concept, see how the SAT tests it, practice identifying the most efficient approach, and study the traps CB uses in the answer choices.`;
  const summary = seedSummaryIsStale || !seedSummary ? freshSummary : seedSummary;

  // ── §1 Concept framing: what is this and why it matters ──
  const conceptFraming = topicContent?.intuition
    || `${lessonContext} is a foundational skill on the SAT Math section. Understanding the underlying concept — not just memorizing formulas — allows you to recognize the pattern in seconds, regardless of how the question is worded.`;

  // ── §2 Detailed explanation ──
  const explanationText = topicContent?.explanation
    || `On the SAT, ${lessonContext} questions test your ability to translate wording into math. The key is a two-step decision process: first, identify exactly what the question is asking (value, relationship, count, or behavior). Second, choose the representation — algebraic, graphical, or numerical — that exposes the answer most directly. ${semantic.strategy}`;

  // ── §3 Transcript enrichment (woven into explanation when available) ──
  const explanationWithContext = cleanTranscript
    ? `${explanationText} ${sentence(cleanTranscript)}`
    : explanationText;

  // ── §4 Web enrichment (appended as additional academic context) ──
  const fullExplanation = webEnrichment
    ? `${explanationWithContext} ${sentence(webEnrichment)}`
    : explanationWithContext;

  // ── Trap content ──
  const trapWhy = topicContent?.trapWhy
    || `On the SAT, the most common mistake in ${lessonContext} problems is ${trap}. This happens because students rush through the setup phase, reading the question quickly and making assumptions about what is being asked.`;
  const trapFix = topicContent?.trapFix
    || `Before computing, re-read the question and underline the exact quantity it asks for. After solving, verify that your answer matches the requested form (value, equation, expression, or description). This two-second check eliminates the most common trap.`;

  // ── Strategy ──
  const strategyText = topicContent
    ? `${semantic.strategy} ${topicContent.trapFix ? 'Use the correction rule above as your final verification step before selecting an answer.' : ''}`
    : `${semantic.strategy} On test day, spend the first 5 seconds on recognition (what type of problem is this?) and the last 5 seconds on verification (does my answer match what was asked?).`;

  // ── Practice content ──
  const exampleProblem = seedExample?.problem
    || (topicContent?.microExample
      ? `Apply the ${moduleCfg.title} concept from "${lesson.title}": ${topicContent.microExample.split('.')[0]}.`
      : `A student encounters an SAT ${moduleCfg.title} question about ${lesson.title}. Identify the fastest valid method, execute cleanly, and verify the answer form.`);

  const exampleSteps = Array.isArray(seedExample?.steps) && seedExample.steps.length > 0
    ? seedExample.steps
    : [
        {
          label: 'Identify the pattern',
          content: `Read the question carefully. This is a ${lessonContext} problem. The SAT trap here is ${trap}. Translate the wording into a clean algebraic setup before computing.`,
        },
        {
          label: 'Apply the core method',
          content: `Use the formula ${semantic.formula}. Keep all signs and units explicit at each step to prevent distractor-level errors.`,
        },
        {
          label: 'Verify and select',
          content: `Check: does the final answer match what the question asks for? Eliminate the trap answer (${trap}), then confirm your selection.`,
        },
      ];

  const checkpointQuestion = seedCheckpoint?.question
    || (topicContent?.microExample
      ? `Using the method from this lesson, modify one value in the example above and predict how the answer changes. Explain why.`
      : `In one sentence, state the decision rule for "${lesson.title}." Then apply it to a new scenario where one variable changes.`);
  const checkpointAnswer = seedCheckpoint?.answer
    || (topicContent?.trapFix
      ? `Apply the rule: ${topicContent.trapFix.split('.')[0]}. Then compute with the modified value and verify the result.`
      : `Identify the pattern type, choose the direct method, compute with clean structure, and verify the answer form matches the question.`);

  const visual = semantic.visualType
    ? { visualType: semantic.visualType, caption: semantic.visualCaption }
    : pickVisual(lesson);

  // ── Build textbook-style Learn blocks ──
  const learnBlocks = [];

  // §1 — Concept framing: what is this and why does it matter?
  learnBlocks.push({
    type: 'heading',
    content: lesson.title,
  });
  learnBlocks.push({
    type: 'text',
    content: sentence(conceptFraming),
  });

  // §2 — Detailed explanation with transcript/web context
  learnBlocks.push({
    type: 'text',
    content: sentence(fullExplanation),
  });

  // §3 — Visual model (when available, placed after explanation for context)
  if (visual) {
    learnBlocks.push({
      type: 'diagramRef',
      visualType: visual.visualType,
      description: visual.caption,
    });
  }

  // §4 — Formal rule / core formula
  learnBlocks.push({
    type: 'formula',
    label: `${lesson.title} — Core Rule`,
    content: semantic.formula,
    note: `Use this after identifying what the question asks. Do not apply blindly.`,
  });

  // §5 — Quick worked micro-example (when topic content provides one)
  if (topicContent?.microExample) {
    learnBlocks.push({
      type: 'callout',
      variant: 'success',
      title: 'Quick Example',
      content: topicContent.microExample,
    });
  }

  // §6 — Common Mistake: why students get this wrong and how to fix it
  learnBlocks.push({
    type: 'heading',
    content: 'Common Mistake',
  });
  learnBlocks.push({
    type: 'text',
    content: `${trapWhy} ${trapFix}`.replace(/\s+/g, ' ').trim(),
  });

  // §7 — Test-Day Strategy: what to do in the last 10 seconds
  learnBlocks.push({
    type: 'heading',
    content: 'Test-Day Strategy',
  });
  learnBlocks.push({
    type: 'text',
    content: strategyText.replace(/\s+/g, ' ').trim(),
  });

  return {
    moduleId,
    title: lesson.title,
    sections: {
      learn: {
        title: 'Learn',
        summary,
        blocks: learnBlocks.slice(0, 12),
      },
      practice: {
        title: 'Practice',
        summary: `Put "${lesson.title}" into practice with a worked example and a checkpoint question.`,
        blocks: [
          {
            type: 'example',
            difficulty: seedExample?.difficulty || 'Medium',
            problem: exampleProblem,
            steps: exampleSteps,
          },
          {
            type: 'checkpointQuestion',
            question: checkpointQuestion,
            answer: checkpointAnswer,
          },
        ],
      },
    },
  };
}

function applyGuardrails(tab) {
  const banned = [
    /the SAT loves/gi,
    /this is important/gi,
    /you should know/gi,
    /keep in mind/gi,
  ];
  const videoMeta = [
    /From the video:\s*/gi,
    /From your lesson delivery[:.]\s*/gi,
    /As demonstrated in the video[:.]\s*/gi,
    /The instructor showed[:.]\s*/gi,
    /From video instruction[:.]\s*/gi,
    /From the videos?:\s*/gi,
    /In the video[,:]\s*/gi,
  ];
  const replacement = (txt) => {
    let out = txt;
    for (const pattern of banned) {
      out = out.replace(pattern, 'Use this rule');
    }
    for (const pattern of videoMeta) {
      out = out.replace(pattern, '');
    }
    return out.replace(/\s+/g, ' ').trim();
  };

  const cleanTextFields = (obj) => {
    Object.keys(obj).forEach((key) => {
      const value = obj[key];
      if (typeof value === 'string') obj[key] = replacement(value);
      else if (Array.isArray(value)) value.forEach((item) => typeof item === 'object' && item && cleanTextFields(item));
      else if (value && typeof value === 'object') cleanTextFields(value);
    });
  };

  const next = structuredClone(tab);

  const learnBlocks = next?.sections?.learn?.blocks;
  if (Array.isArray(learnBlocks)) {
    next.sections.learn.blocks = learnBlocks.filter(
      (b) => !(b.type === 'callout' && /video/i.test(b.title || '')),
    );
  }

  cleanTextFields(next);
  return next;
}

function serializeTabsObject(exportName, tabsObject) {
  return `export const ${exportName} = ${JSON.stringify(tabsObject, null, 2)};\n`;
}

async function collectWebResearch(moduleId, moduleCfg, includeWeb) {
  if (!includeWeb) return '';
  const wikiPieces = await Promise.all(moduleCfg.webSeed.map((topic) => fetchWikiSummary(topic)));
  const raw = [...wikiPieces]
    .filter(Boolean)
    .join(' ')
    .replace(/Client Challenge[^.]*\./gi, '')
    .replace(/JavaScript is disabled[^.]*\./gi, '')
    .trim();
  return raw.slice(0, 800);
}

function qualityIssues(tab) {
  const issues = [];
  const learnBlocks = tab?.sections?.learn?.blocks || [];
  const practiceBlocks = tab?.sections?.practice?.blocks || [];
  const hasType = (blocks, type) => blocks.some((b) => b.type === type);

  if (!hasType(learnBlocks, 'text')) issues.push('missing learn text block');
  if (!hasType(learnBlocks, 'heading')) issues.push('missing learn heading block');
  if (!hasType(learnBlocks, 'formula')) issues.push('missing learn formula');
  if (!hasType(practiceBlocks, 'example')) issues.push('missing practice example');
  if (!hasType(practiceBlocks, 'checkpointQuestion')) issues.push('missing practice checkpointQuestion');

  const textBlocks = learnBlocks.filter((b) => b.type === 'text');
  if (textBlocks.length < 3) issues.push(`low prose density: only ${textBlocks.length} text blocks`);

  const allText = JSON.stringify(tab);
  if (/Client Challenge|JavaScript is disabled|required part of this site/i.test(allText)) {
    issues.push('contains low-signal web challenge text');
  }
  return issues;
}

async function generateModuleTabs(moduleId, opts, report) {
  const cfg = MODULE_CONFIG[moduleId];
  const lessonsPath = path.join(LESSONS_DIR, cfg.lessonsFile);
  const tabsPath = path.join(TABS_DIR, cfg.tabsFile);
  const lessons = loadExportFromFile(lessonsPath, cfg.lessonsExport);
  const existingTabs = fs.existsSync(tabsPath) ? loadExportFromFile(tabsPath, cfg.tabsExport) : {};

  const moduleWebNote = await collectWebResearch(moduleId, cfg, opts.includeWeb);
  const outputTabs = {};
  let changed = 0;
  let fallbackToSeed = 0;

  for (const lesson of lessons) {
    const lessonId = Number(lesson.id);
    const seedTab = existingTabs?.[lessonId];
    const videoId = lesson.videoId || (opts.includeTranscripts ? pickSectionVideo(lesson, lessons) : null);
    const transcript = opts.includeTranscripts && videoId ? await fetchTranscript(videoId) : null;
    const transcriptText = transcriptSnippet(transcript);

    const generated = buildDeterministicTab({
      moduleId,
      lesson,
      moduleCfg: cfg,
      seedTab,
      transcriptText,
      webNote: moduleWebNote,
    });
    const guarded = applyGuardrails(generated);
    const issues = qualityIssues(guarded);
    if (issues.length > 0 && seedTab) {
      outputTabs[lessonId] = seedTab;
      fallbackToSeed += 1;
    } else {
      outputTabs[lessonId] = guarded;
    }

    if (JSON.stringify(seedTab || {}) !== JSON.stringify(outputTabs[lessonId])) changed += 1;
  }

  const payload = serializeTabsObject(cfg.tabsExport, outputTabs);
  if (!opts.dryRun) fs.writeFileSync(tabsPath, payload, 'utf8');

  report.modules[moduleId] = {
    lessons: lessons.length,
    changed,
    fallbackToSeed,
    file: path.relative(ROOT, tabsPath),
  };
}

async function run() {
  const args = parseArgs(process.argv.slice(2));
  const targetModules = args.all ? Object.keys(MODULE_CONFIG) : args.modules;
  if (!targetModules.length) {
    throw new Error('Provide --all or --modules <comma-separated-module-ids>');
  }
  ensureKnownModules(targetModules);

  const report = {
    generatedAt: new Date().toISOString(),
    dryRun: args.dryRun,
    options: {
      includeWeb: args.includeWeb,
      includeTranscripts: args.includeTranscripts,
    },
    modules: {},
  };

  for (const moduleId of targetModules) {
    // eslint-disable-next-line no-await-in-loop
    await generateModuleTabs(moduleId, args, report);
    console.log(`[content-tab-generator] completed ${moduleId}`);
  }

  fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, 2), 'utf8');
  console.log(`[content-tab-generator] report saved to ${path.relative(ROOT, REPORT_PATH)}`);
}

run().catch((err) => {
  console.error('[content-tab-generator] failed:', err.message);
  process.exit(1);
});
