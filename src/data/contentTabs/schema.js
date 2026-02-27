/**
 * Content Tab Schema
 *
 * Each module content tab has up to 8 sections.
 * Sections are optional — only present sections render.
 *
 * Section metadata (optional):
 * - summary: short intro shown first
 * - maxBlocksInitially: cap on blocks shown before "Show more" (default from BLOCK_BUDGET)
 *
 * Block metadata (optional):
 * - priority: 'high' | 'medium' | 'low' — high-priority blocks shown first when collapsed
 *
 * ── Math Notation ──
 * All symbolic math must use LaTeX wrapped in dollar signs:
 *   Inline:  $m = \\frac{y_2 - y_1}{x_2 - x_1}$
 *   Display: $$y = mx + b$$
 * ContentTabRenderer routes all text through KaTeX via MathText.
 * Do NOT use unicode fractions (³⁄₅) or ad-hoc symbols; use LaTeX equivalents.
 *
 * ── Visual Block Types ──
 * The following block types render SVG diagrams directly:
 *   parallelLinesDiagram, perpendicularLinesDiagram,
 *   slopeFromGraphDiagram, yInterceptDiagram
 * Use { type: 'diagramRef', visualType: '<name>' } for inline diagram embedding.
 */

export const SECTION_IDS = {
  CORE_CONCEPTS: 'coreConcepts',
  SAT_PATTERNS: 'satPatterns',
  METHODS: 'methods',
  COMMON_TRAPS: 'commonTraps',
  WORKED_EXAMPLES: 'workedExamples',
  VISUAL_MODELS: 'visualModels',
  SPEED_STRATEGY: 'speedStrategy',
  CHECKPOINT: 'checkpoint',
};

export const SECTION_LABELS = {
  [SECTION_IDS.CORE_CONCEPTS]: 'Core Concepts',
  [SECTION_IDS.SAT_PATTERNS]: 'SAT Patterns',
  [SECTION_IDS.METHODS]: 'Methods',
  [SECTION_IDS.COMMON_TRAPS]: 'Common Traps',
  [SECTION_IDS.WORKED_EXAMPLES]: 'Worked Examples',
  [SECTION_IDS.VISUAL_MODELS]: 'Visual Models',
  [SECTION_IDS.SPEED_STRATEGY]: 'Speed & Strategy',
  [SECTION_IDS.CHECKPOINT]: 'Checkpoint',
};

export const SECTION_ORDER = [
  SECTION_IDS.CORE_CONCEPTS,
  SECTION_IDS.SAT_PATTERNS,
  SECTION_IDS.METHODS,
  SECTION_IDS.COMMON_TRAPS,
  SECTION_IDS.WORKED_EXAMPLES,
  SECTION_IDS.VISUAL_MODELS,
  SECTION_IDS.SPEED_STRATEGY,
  SECTION_IDS.CHECKPOINT,
];

export const BLOCK_BUDGET = {
  [SECTION_IDS.CORE_CONCEPTS]: 6,
  [SECTION_IDS.SAT_PATTERNS]: 6,
  [SECTION_IDS.METHODS]: 7,
  [SECTION_IDS.COMMON_TRAPS]: 5,
  [SECTION_IDS.WORKED_EXAMPLES]: 3,
  [SECTION_IDS.VISUAL_MODELS]: 5,
  [SECTION_IDS.SPEED_STRATEGY]: 5,
  [SECTION_IDS.CHECKPOINT]: 2,
};

/** Default number of blocks shown before "Show more" when section has many blocks. */
export const DEFAULT_MAX_BLOCKS_INITIALLY = 4;

export const CONTENT_BLOCK_TYPES = {
  HEADING: 'heading',
  TEXT: 'text',
  FORMULA: 'formula',
  CALLOUT: 'callout',
  TABLE: 'table',
  STEPS: 'steps',
  COMPARISON: 'comparison',
  EXAMPLE: 'example',
  TRAP_CARD: 'trapCard',
  TIP: 'tip',
  DIAGRAM_REF: 'diagramRef',
  CHECKPOINT_QUESTION: 'checkpointQuestion',
  KEY_INSIGHT: 'keyInsight',
  STRATEGY_CARD: 'strategyCard',
  FORMULA_GRID: 'formulaGrid',
  ICON_ROW: 'iconRow',
  PARALLEL_LINES_DIAGRAM: 'parallelLinesDiagram',
  PERPENDICULAR_LINES_DIAGRAM: 'perpendicularLinesDiagram',
  SLOPE_FROM_GRAPH_DIAGRAM: 'slopeFromGraphDiagram',
  Y_INTERCEPT_DIAGRAM: 'yInterceptDiagram',
};

/**
 * ── Title-to-Required-Block Quality Matrix ──
 * Lessons whose titles imply a specific artifact must include it.
 */
const TITLE_BLOCK_REQUIREMENTS = [
  { pattern: /\btable\b/i, requiredTypes: ['table'], label: 'table block' },
  { pattern: /\bfrom.*(graph|visual)\b/i, requiredTypes: ['slopeFromGraphDiagram', 'yInterceptDiagram', 'parallelLinesDiagram', 'perpendicularLinesDiagram', 'diagramRef'], label: 'visual/diagram block' },
];

const BLOCK_REQUIRED_FIELDS = {
  table:              ['headers', 'rows'],
  steps:              ['items'],
  example:            ['problem', 'steps'],
  trapCard:           ['wrong'],
  checkpointQuestion: ['question', 'answer'],
  formulaGrid:        ['items'],
  iconRow:            ['items'],
  formula:            ['content'],
  callout:            ['content'],
  comparison:         ['items'],
};

const SUPPORTED_VISUAL_TYPES = [
  'parallelLinesDiagram', 'perpendicularLinesDiagram',
  'slopeFromGraphDiagram', 'yInterceptDiagram',
  'parabolaFromGraphDiagram',
];

/**
 * ── Tutor-Grade v2 Quality Rubric ──
 * Every section must contain high-signal, pedagogically strong content.
 * Requirements are defined per-section so automated checks can enforce them.
 */

export const SECTION_QUALITY = {
  coreConcepts: {
    minBlocks: 2,
    requiredElements: [
      { label: 'intuition or explanation', matchTypes: ['text', 'keyInsight'] },
      { label: 'formal rule or formula',   matchTypes: ['formula', 'formulaGrid', 'callout', 'table'] },
    ],
  },
  satPatterns: {
    minBlocks: 3,
    requiredElements: [
      { label: 'pattern archetype',  matchTypes: ['callout', 'example'] },
      { label: 'trap or recovery',   matchTypes: ['trapCard', 'callout', 'comparison'] },
      { label: 'decision rule',      matchTypes: ['tip', 'strategyCard', 'keyInsight'] },
    ],
  },
  methods: {
    minBlocks: 1,
    requiredElements: [
      { label: 'step-by-step procedure or worked example', matchTypes: ['steps', 'example'] },
    ],
  },
  commonTraps: {
    minBlocks: 1,
    requiredElements: [
      { label: 'trap card', matchTypes: ['trapCard'] },
    ],
  },
  workedExamples: {
    minBlocks: 1,
    requiredElements: [
      { label: 'worked example', matchTypes: ['example'] },
    ],
  },
  visualModels: {
    minBlocks: 1,
    requiredElements: [],
  },
  speedStrategy: {
    minBlocks: 1,
    requiredElements: [
      { label: 'strategy or tip', matchTypes: ['strategyCard', 'tip', 'callout'] },
    ],
  },
  checkpoint: {
    minBlocks: 1,
    requiredElements: [
      { label: 'checkpoint question', matchTypes: ['checkpointQuestion'] },
    ],
  },
};

/**
 * Phrases that signal generic, low-value filler content.
 * Applies to ALL sections, not just satPatterns.
 */
export const LOW_SIGNAL_PATTERNS = [
  /the SAT loves/i,
  /college board (often|frequently|typically) (tests|asks)/i,
  /\d+[–-]\d+ questions per/i,
  /you (should|need to|must) (know|understand|remember)/i,
  /this is (important|key|crucial)/i,
  /this is (a |an )?(common|important|key|critical)/i,
  /remember (that |to )?always/i,
  /make sure (you |to )/i,
  /it('|')s important to/i,
];

// Legacy aliases for backward compatibility with satPatternsQualityCheck.js
export const SAT_PATTERNS_MIN_BLOCKS = SECTION_QUALITY.satPatterns.minBlocks;
export const SAT_PATTERNS_REQUIRED_ELEMENTS = SECTION_QUALITY.satPatterns.requiredElements;
export const SAT_PATTERNS_LOW_SIGNAL = LOW_SIGNAL_PATTERNS.slice(0, 5);

/**
 * Validate a content tab (module-level or lesson-level).
 * Returns { valid, errors, warnings }.
 */
export function validateContentTab(moduleId, contentTab) {
  const errors = [];
  const warnings = [];

  if (!contentTab) {
    errors.push(`${moduleId}: contentTab is null/undefined`);
    return { valid: false, errors, warnings };
  }

  if (!contentTab.moduleId || contentTab.moduleId !== moduleId) {
    errors.push(`${moduleId}: moduleId mismatch`);
  }

  if (!contentTab.title) {
    errors.push(`${moduleId}: missing title`);
  }

  if (!contentTab.sections || typeof contentTab.sections !== 'object') {
    errors.push(`${moduleId}: missing sections object`);
    return { valid: false, errors, warnings };
  }

  const allBlockTypes = new Set();

  for (const [sectionId, section] of Object.entries(contentTab.sections)) {
    if (!section.title) {
      errors.push(`${moduleId}.${sectionId}: missing title`);
    }
    if (!Array.isArray(section.blocks) || section.blocks.length === 0) {
      errors.push(`${moduleId}.${sectionId}: blocks must be a non-empty array`);
      continue;
    }

    const budget = BLOCK_BUDGET[sectionId];
    if (budget && section.blocks.length > budget) {
      warnings.push(`${moduleId}.${sectionId}: ${section.blocks.length} blocks exceeds budget of ${budget}`);
    }

    for (let i = 0; i < section.blocks.length; i++) {
      const block = section.blocks[i];
      allBlockTypes.add(block.type);

      const required = BLOCK_REQUIRED_FIELDS[block.type];
      if (required) {
        for (const field of required) {
          if (block[field] === undefined || block[field] === null) {
            errors.push(`${moduleId}.${sectionId}.block[${i}] (${block.type}): missing required field '${field}'`);
          }
        }
      }

      if (block.type === 'diagramRef' && block.visualType) {
        if (!SUPPORTED_VISUAL_TYPES.includes(block.visualType)) {
          warnings.push(`${moduleId}.${sectionId}.block[${i}]: diagramRef visualType '${block.visualType}' not in supported list`);
        }
      }
    }
  }

  if (contentTab.title) {
    for (const rule of TITLE_BLOCK_REQUIREMENTS) {
      if (rule.pattern.test(contentTab.title)) {
        const hasRequired = rule.requiredTypes.some(t => allBlockTypes.has(t));
        if (!hasRequired) {
          warnings.push(`${moduleId}: title "${contentTab.title}" implies a ${rule.label}, but none found in blocks`);
        }
      }
    }
  }

  // ── Tutor-Grade v2: per-section quality checks ──
  for (const [sectionId, section] of Object.entries(contentTab.sections)) {
    const quality = SECTION_QUALITY[sectionId];
    if (!quality || !Array.isArray(section.blocks)) continue;

    if (section.blocks.length < quality.minBlocks) {
      warnings.push(`${moduleId}.${sectionId}: only ${section.blocks.length} blocks — minimum ${quality.minBlocks} for tutor-grade quality`);
    }

    const sectionBlockTypes = section.blocks.map(b => b.type);
    for (const req of quality.requiredElements) {
      if (!req.matchTypes.some(t => sectionBlockTypes.includes(t))) {
        warnings.push(`${moduleId}.${sectionId}: missing ${req.label} (expected one of: ${req.matchTypes.join(', ')})`);
      }
    }

    const sectionText = section.blocks
      .map(b => [b.content, b.wrong, b.title, b.question, b.correction].filter(Boolean).join(' '))
      .join(' ');
    for (const pattern of LOW_SIGNAL_PATTERNS) {
      if (pattern.test(sectionText)) {
        warnings.push(`${moduleId}.${sectionId}: low-signal phrase — "${sectionText.match(pattern)?.[0]}"`);
      }
    }
  }

  return { valid: errors.length === 0, errors, warnings };
}
