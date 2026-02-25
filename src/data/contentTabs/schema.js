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
};

/**
 * Validate a module's content tab data.
 * Sections are optional — only validates sections that are present.
 */
export function validateContentTab(moduleId, contentTab) {
  const errors = [];

  if (!contentTab) {
    errors.push(`${moduleId}: contentTab is null/undefined`);
    return { valid: false, errors };
  }

  if (!contentTab.moduleId || contentTab.moduleId !== moduleId) {
    errors.push(`${moduleId}: moduleId mismatch`);
  }

  if (!contentTab.title) {
    errors.push(`${moduleId}: missing title`);
  }

  if (!contentTab.sections || typeof contentTab.sections !== 'object') {
    errors.push(`${moduleId}: missing sections object`);
    return { valid: false, errors };
  }

  for (const [sectionId, section] of Object.entries(contentTab.sections)) {
    if (!section.title) {
      errors.push(`${moduleId}.${sectionId}: missing title`);
    }
    if (!Array.isArray(section.blocks) || section.blocks.length === 0) {
      errors.push(`${moduleId}.${sectionId}: blocks must be a non-empty array`);
    }
  }

  return { valid: errors.length === 0, errors };
}
