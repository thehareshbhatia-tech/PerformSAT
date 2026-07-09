/**
 * Content Tab Schema — Learn + Practice v2 (textbook-style)
 *
 * Every content tab (lesson-level or module fallback) uses exactly two sections:
 *   1. learn    — textbook-style narrative: heading/text prose, formulas as
 *                 inline inserts, callouts only for micro-examples.
 *                 Trap and strategy guidance is integrated as prose subsections
 *                 (heading + text), NOT as separate card blocks.
 *   2. practice — one worked example + one checkpoint question
 *
 * ── Authoring Principles ──
 *   - Learn sections should read as a continuous story, not stacked cards
 *   - Prefer heading + text blocks over keyInsight / trapCard / strategyCard
 *   - Lesson semantics must match the exact topic title (formula/trap/strategy alignment)
 *   - Worked examples must be SAT-realistic
 *   - Checkpoints use retrieval practice: question → hidden answer
 *   - All math uses LaTeX dollar signs ($...$, $$...$$)
 *   - No filler phrases
 *
 * ── Block metadata (optional) ──
 * - priority: 'high' | 'medium' | 'low'
 */

export const SECTION_IDS = {
  LEARN: 'learn',
  PRACTICE: 'practice',
};

export const SECTION_LABELS = {
  [SECTION_IDS.LEARN]: 'Learn',
  [SECTION_IDS.PRACTICE]: 'Practice',
};

export const SECTION_ORDER = [
  SECTION_IDS.LEARN,
  SECTION_IDS.PRACTICE,
];

export const BLOCK_BUDGET = {
  [SECTION_IDS.LEARN]: 12,
  [SECTION_IDS.PRACTICE]: 4,
};

export const DEFAULT_MAX_BLOCKS_INITIALLY = 6;
export const LESSON_DEFAULT_MAX_BLOCKS = 6;

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
  SLOPE_FROM_TABLE_DIAGRAM: 'slopeFromTableDiagram',
  Y_INTERCEPT_DIAGRAM: 'yInterceptDiagram',
};

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
  'slopeFromGraphDiagram', 'slopeFromTableDiagram',
  'yInterceptDiagram', 'parabolaFromGraphDiagram',
  // Strategy + R&W chapter diagrams
  'adaptiveModuleFlowDiagram', 'scoreCompositionDiagram',
  'moduleTimeBudgetDiagram', 'sentenceBoundaryDiagram',
  'subjectVerbAgreementDiagram', 'transitionMapDiagram',
];

export const SECTION_QUALITY = {
  learn: {
    minBlocks: 6,
    requiredElements: [
      { label: 'narrative prose', matchTypes: ['text'] },
      { label: 'section heading', matchTypes: ['heading'] },
      { label: 'formula or formalization', matchTypes: ['formula', 'formulaGrid', 'table'] },
      { label: 'semantic coherence to lesson title', matchTypes: ['text', 'formula'] },
    ],
  },
  practice: {
    minBlocks: 2,
    requiredElements: [
      { label: 'worked example', matchTypes: ['example'] },
      { label: 'checkpoint question', matchTypes: ['checkpointQuestion'] },
    ],
  },
};

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
  /don'?t forget to/i,
  /keep in mind (that )?/i,
  /practice makes perfect/i,
  /let'?s (take a |have a )?look at/i,
  /in this (lesson|section|module)/i,
  /as (we|you) (can |will )?(see|learn|discover)/i,
];

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

  const sectionIds = Object.keys(contentTab.sections);

  if (!sectionIds.includes('learn')) {
    errors.push(`${moduleId}: missing required "learn" section`);
  }
  if (!sectionIds.includes('practice')) {
    errors.push(`${moduleId}: missing required "practice" section`);
  }

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

  for (const [sectionId, section] of Object.entries(contentTab.sections)) {
    const quality = SECTION_QUALITY[sectionId];
    if (!quality || !Array.isArray(section.blocks)) continue;

    if (section.blocks.length < quality.minBlocks) {
      warnings.push(`${moduleId}.${sectionId}: only ${section.blocks.length} blocks — minimum ${quality.minBlocks}`);
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
