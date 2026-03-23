#!/usr/bin/env node
/**
 * Additional guardrails for generated lesson tabs.
 * Complements existing src/data/contentTabs/* quality scripts.
 */

import fs from 'fs';
import path from 'path';
import vm from 'vm';
import { createRequire } from 'module';

const ROOT = process.cwd();
const LESSON_TABS_DIR = path.join(ROOT, 'src/data/contentTabs/lessons');
const require = createRequire(import.meta.url);

const BANNED_PHRASES = [
  /the SAT loves/i,
  /this is important/i,
  /you should know/i,
  /practice makes perfect/i,
  /keep in mind/i,
];

const FORBIDDEN_VIDEO_PHRASES = [
  /from your lesson delivery/i,
  /as demonstrated in the video/i,
  /the instructor showed/i,
  /from video instruction/i,
  /from the video/i,
  /in the video/i,
];

const VISUAL_EXPECTED_PATTERNS = [
  // linear equations
  { titlePattern: /slope.*table/i, visualType: 'slopeFromTableDiagram' },
  { titlePattern: /slope.*graph/i, visualType: 'slopeFromGraphDiagram' },
  { titlePattern: /y.?intercept/i, visualType: 'yInterceptDiagram' },
  { titlePattern: /parallel\s+lines?/i, visualType: 'parallelLinesDiagram' },
  { titlePattern: /perpendicular\s+lines?/i, visualType: 'perpendicularLinesDiagram' },
  // quadratics
  { titlePattern: /parabola|vertex\s+form|standard\s+form.*graph|graph.*equation/i, visualType: 'parabolaFromGraphDiagram' },
  { titlePattern: /discriminant/i, visualType: 'parabolaFromGraphDiagram' },
  { titlePattern: /completing the square/i, visualType: 'parabolaFromGraphDiagram' },
  { titlePattern: /introduction to quadratics/i, visualType: 'parabolaFromGraphDiagram' },
  { titlePattern: /roots|zeros|x.?intercepts/i, visualType: 'parabolaFromGraphDiagram' },
  // triangles
  { titlePattern: /pythagorean/i, visualType: 'rightTriangleDiagram' },
  { titlePattern: /special right/i, visualType: 'specialTrianglesDiagram' },
  { titlePattern: /similar/i, visualType: 'similarTrianglesDiagram' },
  { titlePattern: /area of a triangle/i, visualType: 'triangleAreaDiagram' },
  // circles
  { titlePattern: /parts of a circle/i, visualType: 'circlePartsDiagram' },
  { titlePattern: /area of a circle/i, visualType: 'circlePartsDiagram' },
  { titlePattern: /circumference/i, visualType: 'circlePartsDiagram' },
  { titlePattern: /arc length/i, visualType: 'arcLengthDiagram' },
  { titlePattern: /sector area/i, visualType: 'arcLengthDiagram' },
  { titlePattern: /equation.*circle|circle.*equation|standard form.*circle/i, visualType: 'circleEquationDiagram' },
  // volume
  { titlePattern: /volume of a cube|cube example/i, visualType: 'cubeDiagram' },
  { titlePattern: /rectangular prism|box/i, visualType: 'rectangularPrismDiagram' },
  { titlePattern: /cylinder/i, visualType: 'cylinderDiagram' },
  { titlePattern: /sphere/i, visualType: 'sphereDiagram' },
  { titlePattern: /cone/i, visualType: 'coneDiagram' },
  // statistics
  { titlePattern: /mean|average/i, visualType: 'meanMedianDiagram' },
  { titlePattern: /median/i, visualType: 'meanMedianDiagram' },
  // transformations
  { titlePattern: /horizontal translation/i, visualType: 'horizontalShiftDiagram' },
  { titlePattern: /vertical translation/i, visualType: 'verticalShiftDiagram' },
  // exponents
  { titlePattern: /exponential functions|exponential growth|exponential decay/i, visualType: 'exponentialGrowthDiagram' },
  // percents
  { titlePattern: /percent change|increase|decrease/i, visualType: 'percentChangeDiagram' },
];

const NARRATIVE_LANDMARKS = ['heading', 'text', 'formula', 'heading', 'text'];

const OVER_TEMPLATED_PHRASES = [
  /Use this before calculation to cut distractors early and preserve time for hard items/i,
  /Students often lose points by falling for .+ when speed-reading answer choices or skipping structure checks/i,
  /run the decision rule first, then solve\. Verify sign\/units\/form before selecting an option/i,
  /Identify the cue, choose the fastest valid method, execute with clean structure/i,
  /recognition cues, trap avoidance, and fast decision rules/i,
];

const CARD_HEAVY_TYPES = ['keyInsight', 'trapCard', 'strategyCard'];
const MAX_CARD_BLOCKS = 1;
const MIN_LEARN_TEXT_BLOCKS = 3;
const MIN_LEARN_BLOCK_TYPES = 3;

const LESSON_SEMANTIC_GUARDRAILS = [
  {
    titlePattern: /volume of a cube|cube example/i,
    required: [/s\^3/i, /volume/i],
    forbidden: [/v_\{\\text\{cyl\}\}/i, /v_\{\\text\{cone\}\}/i, /v_\{\\text\{sphere\}\}/i, /\\pi\s*r\^2\s*h/i],
    requiredVisual: 'cubeDiagram',
  },
  {
    titlePattern: /rectangular prism|box/i,
    required: [/(lwh|length.*width.*height)/i],
    forbidden: [/s\^3/i, /\\frac\{4\}\{3\}\\pi r\^3/i],
    requiredVisual: 'rectangularPrismDiagram',
  },
  {
    titlePattern: /cylinder/i,
    required: [/\\pi\s*r\^2\s*h/i],
    forbidden: [/s\^3/i],
    requiredVisual: 'cylinderDiagram',
  },
  {
    titlePattern: /sphere/i,
    required: [/\\frac\{4\}\{3\}\\pi r\^3/i],
    forbidden: [/\\pi\s*r\^2\s*h/i],
    requiredVisual: 'sphereDiagram',
  },
  {
    titlePattern: /cone/i,
    required: [/\\frac\{1\}\{3\}\\pi r\^2h|\\frac\{1\}\{3\}\\pi r\^2\s*h/i],
    forbidden: [/s\^3/i],
    requiredVisual: 'coneDiagram',
  },
  {
    titlePattern: /triangular prism/i,
    required: [/(bh|base area|triangular base)/i],
    forbidden: [/s\^3/i],
  },
  {
    titlePattern: /discriminant/i,
    required: [/(b\^2\s*-\s*4ac|\\Delta)/i],
    forbidden: [/s\^3/i],
    requiredVisual: 'parabolaFromGraphDiagram',
  },
  {
    titlePattern: /vertex|vertex form/i,
    required: [/(-b\/2a|vertex)/i],
    forbidden: [/v_\{\\text\{cyl\}\}/i],
    requiredVisual: 'parabolaFromGraphDiagram',
  },
  {
    titlePattern: /slope.*table/i,
    required: [/(\\Delta y|delta y|change in y)/i, /(\\Delta x|delta x|change in x)/i],
    requiredVisual: 'slopeFromTableDiagram',
  },
  {
    titlePattern: /slope.*graph/i,
    required: [/(rise|run)/i],
    requiredVisual: 'slopeFromGraphDiagram',
  },
  {
    titlePattern: /y.?intercept/i,
    required: [/(x\s*=\s*0|y-intercept)/i],
    requiredVisual: 'yInterceptDiagram',
  },
  {
    titlePattern: /pythagorean/i,
    required: [/a\^2\s*\+\s*b\^2\s*=\s*c\^2|pythagorean/i],
    requiredVisual: 'rightTriangleDiagram',
  },
  {
    titlePattern: /special right/i,
    required: [/45.*45.*90|30.*60.*90/i],
    requiredVisual: 'specialTrianglesDiagram',
  },
  {
    titlePattern: /parallel\s+lines?/i,
    required: [/(same slope|equal slope|m_1\s*=\s*m_2)/i],
    requiredVisual: 'parallelLinesDiagram',
  },
  {
    titlePattern: /perpendicular\s+lines?/i,
    required: [/(negative reciprocal|m_1.*m_2.*=.*-1)/i],
    requiredVisual: 'perpendicularLinesDiagram',
  },
];

function loadExport(filePath) {
  const raw = fs.readFileSync(filePath, 'utf8');
  const exportNameMatch = raw.match(/export const (\w+) =/);
  if (!exportNameMatch) return null;
  const exportName = exportNameMatch[1];
  const cjsCode = `${raw.replace(/export const /g, 'const ')}\nmodule.exports = { ${exportName} };`;
  const sandbox = { module: { exports: {} }, exports: {}, require, console };
  vm.runInNewContext(cjsCode, sandbox, { filename: filePath });
  return sandbox.module.exports[exportName];
}

function allTextFromTab(tab) {
  const bucket = [];
  const walk = (value) => {
    if (typeof value === 'string') bucket.push(value);
    else if (Array.isArray(value)) value.forEach(walk);
    else if (value && typeof value === 'object') Object.values(value).forEach(walk);
  };
  walk(tab);
  return bucket.join(' ');
}

function hasType(section, type) {
  return Array.isArray(section?.blocks) && section.blocks.some((b) => b.type === type);
}

function hasDiagramVisual(section, visualType) {
  return Array.isArray(section?.blocks) && section.blocks.some(
    (b) => b.type === 'diagramRef' && b.visualType === visualType,
  );
}

function checkNarrativeOrder(blocks) {
  const types = blocks.map((b) => b.type);
  let cursor = 0;
  for (const t of types) {
    if (cursor < NARRATIVE_LANDMARKS.length && t === NARRATIVE_LANDMARKS[cursor]) {
      cursor += 1;
    }
  }
  return cursor >= NARRATIVE_LANDMARKS.length;
}

function lessonCorpus(tab) {
  const learnBlocks = tab?.sections?.learn?.blocks || [];
  const formulaText = learnBlocks
    .filter((b) => b.type === 'formula')
    .map((b) => b.content || '')
    .join(' ');
  const proseText = learnBlocks
    .map((b) => [b.content, b.note, b.title, b.description].filter(Boolean).join(' '))
    .join(' ');
  return `${formulaText} ${proseText}`.replace(/\s+/g, ' ').trim();
}

function runSemanticGuardrails(label, tab, learn, errors) {
  const title = tab.title || '';
  const corpus = lessonCorpus(tab);
  for (const rule of LESSON_SEMANTIC_GUARDRAILS) {
    if (!rule.titlePattern.test(title)) continue;
    if (Array.isArray(rule.required)) {
      for (const re of rule.required) {
        if (!re.test(corpus)) {
          errors.push(`${label}: semantic mismatch — lesson "${title}" is missing required concept pattern (${re})`);
        }
      }
    }
    if (Array.isArray(rule.forbidden)) {
      for (const re of rule.forbidden) {
        if (re.test(corpus)) {
          errors.push(`${label}: semantic mismatch — lesson "${title}" contains incompatible concept pattern (${re})`);
        }
      }
    }
    if (rule.requiredVisual && !hasDiagramVisual(learn, rule.requiredVisual)) {
      errors.push(`${label}: semantic mismatch — lesson "${title}" must include visual '${rule.requiredVisual}'`);
    }
  }
}

function validateLessonTab(label, tab) {
  const warnings = [];
  const errors = [];
  const learn = tab?.sections?.learn;
  const practice = tab?.sections?.practice;

  if (!learn || !practice) {
    errors.push(`${label}: missing learn/practice section`);
    return { warnings, errors };
  }

  if (!hasType(learn, 'text')) warnings.push(`${label}: learn missing narrative text block`);
  if (!hasType(learn, 'formula')) warnings.push(`${label}: learn missing formula block`);
  if (!hasType(practice, 'example')) warnings.push(`${label}: practice missing example`);
  if (!hasType(practice, 'checkpointQuestion')) warnings.push(`${label}: practice missing checkpointQuestion`);

  const text = allTextFromTab(tab);
  BANNED_PHRASES.forEach((re) => {
    if (re.test(text)) warnings.push(`${label}: low-signal phrase match (${re})`);
  });

  const learnBlocks = learn.blocks || [];
  const hasVideoCallout = learnBlocks.some(
    (b) => b.type === 'callout' && /video/i.test(b.title || ''),
  );
  if (hasVideoCallout) {
    errors.push(`${label}: contains forbidden "From Video Instruction" callout block`);
  }

  FORBIDDEN_VIDEO_PHRASES.forEach((re) => {
    if (re.test(text)) errors.push(`${label}: contains forbidden video meta-phrase (${re})`);
  });

  const title = tab.title || '';
  for (const { titlePattern, visualType } of VISUAL_EXPECTED_PATTERNS) {
    if (titlePattern.test(title) && !hasDiagramVisual(learn, visualType)) {
      warnings.push(`${label}: lesson "${title}" should include visual '${visualType}' but doesn't`);
    }
  }

  // Card-heavy check: flag if too many card-type blocks remain
  const cardCount = learnBlocks.filter((b) => CARD_HEAVY_TYPES.includes(b.type)).length;
  if (cardCount > MAX_CARD_BLOCKS) {
    warnings.push(`${label}: card-heavy Learn tab — ${cardCount} card blocks (keyInsight/trapCard/strategyCard). Prefer heading+text prose.`);
  }

  // Prose density check: learn should have enough text blocks
  const textBlockCount = learnBlocks.filter((b) => b.type === 'text').length;
  if (textBlockCount < MIN_LEARN_TEXT_BLOCKS) {
    warnings.push(`${label}: low prose density — only ${textBlockCount} text blocks (need ${MIN_LEARN_TEXT_BLOCKS}+)`);
  }

  const uniqueBlockTypes = new Set(learnBlocks.map((b) => b.type));
  if (uniqueBlockTypes.size < MIN_LEARN_BLOCK_TYPES) {
    warnings.push(`${label}: shallow Learn tab — only ${uniqueBlockTypes.size} distinct block types (need ${MIN_LEARN_BLOCK_TYPES}+)`);
  }

  OVER_TEMPLATED_PHRASES.forEach((re) => {
    if (re.test(text)) {
      warnings.push(`${label}: over-templated phrasing detected (${re.source.slice(0, 50)}…)`);
    }
  });

  if (!checkNarrativeOrder(learnBlocks)) {
    warnings.push(`${label}: Learn blocks deviate from expected narrative scaffold order`);
  }

  runSemanticGuardrails(label, tab, learn, errors);

  return { warnings, errors };
}

function main() {
  const files = fs.readdirSync(LESSON_TABS_DIR).filter((f) => f.endsWith('Lessons.js'));
  let totalWarnings = 0;
  let totalErrors = 0;
  let checked = 0;

  files.forEach((file) => {
    const map = loadExport(path.join(LESSON_TABS_DIR, file));
    if (!map) return;
    Object.entries(map).forEach(([lessonId, tab]) => {
      checked += 1;
      const label = `${file}[${lessonId}]`;
      const result = validateLessonTab(label, tab);
      totalWarnings += result.warnings.length;
      totalErrors += result.errors.length;
      result.errors.forEach((e) => console.error(`✗ ${e}`));
      result.warnings.forEach((w) => console.warn(`⚠ ${w}`));
    });
  });

  console.log(`\nGuardrail check complete`);
  console.log(`Tabs checked: ${checked}`);
  console.log(`Errors: ${totalErrors}`);
  console.log(`Warnings: ${totalWarnings}`);
  process.exit(totalErrors > 0 ? 1 : 0);
}

main();
