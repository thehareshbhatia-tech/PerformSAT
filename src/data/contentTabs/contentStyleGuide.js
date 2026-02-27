/**
 * Content Style Guide — Tutor-Grade v2
 *
 * This file defines the pedagogical patterns, voice standards, and block
 * templates that every content tab must follow. It is imported by the
 * quality-check script for automated enforcement.
 *
 * ═══════════════════════════════════════════════════════════════════════
 * VOICE & TONE
 * ═══════════════════════════════════════════════════════════════════════
 *
 * 1. Direct instruction — address the student as "you" only when giving
 *    a concrete action ("Plug in x = 0").  Avoid "you should know."
 * 2. Concept-first — start every section with WHY before HOW.
 *    Bad:  "The formula is A = πr²."
 *    Good: "Area measures the space inside the circle — square the
 *           radius, multiply by π."
 * 3. SAT-anchored — every lesson names at least one concrete prompt
 *    archetype ("The stem says 'which equivalent form reveals…'").
 * 4. Anti-filler — no frequency claims ("the SAT loves"), no vague
 *    importance cues ("this is crucial").  Every sentence adds signal.
 * 5. Math precision — all math in LaTeX ($...$), no unicode fractions.
 *
 * ═══════════════════════════════════════════════════════════════════════
 * SECTION PLAYBOOKS
 * ═══════════════════════════════════════════════════════════════════════
 */

/**
 * coreConcepts:
 *   Block 1 — intuition text:  WHY the concept matters + what it means
 *   Block 2 — formal rule:     formula / formulaGrid / table
 *   Block 3 — keyInsight:      the one thing that connects concept to SAT
 */
export const CORE_CONCEPTS_TEMPLATE = [
  { type: 'text', content: '[Intuitive explanation — build mental model before giving formula]' },
  { type: 'formula', label: '[Name]', content: '$$[LaTeX]$$' },
  { type: 'keyInsight', content: '[Single insight that connects this concept to how the SAT tests it]' },
];

/**
 * satPatterns:
 *   Block 1 — callout (info):  recognition cue + first move
 *   Block 2 — trapCard:        realistic wrong path + precise correction
 *   Block 3 — tip:             decision rule ("if X, do Y; if Z, do W")
 */
export const SAT_PATTERNS_TEMPLATE = [
  { type: 'callout', variant: 'info', title: '[SAT Prompt Archetype]', content: '"[Exact phrasing student will see]" — Recognition cue: [what to scan for]. First move: [concrete action].' },
  { type: 'trapCard', title: '[Specific Trap Name]', wrong: '[Exact mistake path]', correction: '[Why it is wrong + the correct approach]' },
  { type: 'tip', content: '**Decision rule:** [If condition A → action A]. [If condition B → action B]. [The trigger that determines the choice].' },
];

/**
 * methods:
 *   Block 1 — steps:    numbered procedure with decision points
 *   Block 2 — tip:      "when to use" this method vs. alternatives
 */
export const METHODS_TEMPLATE = [
  { type: 'steps', title: '[Method Name]', items: ['[Step 1 — concrete action]', '[Step 2 — concrete action]', '[Step 3 — check / verify]'] },
  { type: 'tip', content: '**When to use:** [trigger condition]. **Alternative:** [fallback method if this one stalls].' },
];

/**
 * workedExamples:
 *   Minimum 2 examples with difficulty progression.
 *   At least 1 should demonstrate a common-trap recovery.
 */
export const WORKED_EXAMPLES_TEMPLATE = [
  { type: 'example', difficulty: 'Medium', problem: '[SAT-realistic setup]', steps: [
    { label: '[Action verb]', content: '[Calculation with LaTeX]' },
    { label: 'Answer', content: '[Boxed / bold final answer]' },
  ] },
  { type: 'example', difficulty: 'Hard', problem: '[Multi-step or trap-recovery]', steps: [
    { label: '[Action verb]', content: '[Step with common mistake noted]' },
    { label: 'Answer', content: '[Final answer]' },
  ] },
];

/**
 * commonTraps:
 *   Each trapCard names the specific SAT distractor it maps to.
 *   Correction must include the correct procedure, not just "don't do X."
 */
export const COMMON_TRAPS_TEMPLATE = [
  { type: 'trapCard', title: '[Trap Name — specific, not generic]', wrong: '[Exact student mistake with numbers]', correction: '[Why wrong + correct method + general principle]' },
  { type: 'trapCard', title: '[Second Trap Name]', wrong: '[Different mistake path]', correction: '[Corrective procedure]' },
];

/**
 * speedStrategy:
 *   At least 1 strategyCard with a timing estimate.
 *   Strategies must be SAT-specific (DESMOS, answer-choice elimination, etc.)
 */
export const SPEED_STRATEGY_TEMPLATE = [
  { type: 'strategyCard', title: '[Strategy Name]', icon: '⚡', timing: '~Xs', content: '[When to deploy + exact shortcut + why it saves time]' },
];

/**
 * checkpoint:
 *   1 retrieval question (tests recall of the lesson's core concept)
 *   1 transfer question (applies the concept in a new context)
 */
export const CHECKPOINT_TEMPLATE = [
  { type: 'checkpointQuestion', number: 1, question: '[Retrieval — direct application of core formula/rule]', answer: '[Step-by-step solution]' },
  { type: 'checkpointQuestion', number: 2, question: '[Transfer — same concept, unfamiliar context]', answer: '[Step-by-step solution]' },
];

/**
 * SAT Archetype Map — which modules map to which question archetypes.
 * Used by quality checks to ensure every archetype is covered.
 */
export const SAT_ARCHETYPE_MAP = {
  'linear-equations':        ['interpret-slope-intercept', 'write-from-context', 'parallel-perpendicular', 'graph-equation-match'],
  'quadratics':              ['form-matching', 'vertex-max-min', 'discriminant-solutions', 'factoring-roots'],
  'systems':                 ['substitution', 'elimination', 'no-solution-infinite', 'word-problem-systems'],
  'functions':               ['evaluate-compose', 'domain-range', 'transformations', 'interpret-graph'],
  'exponents':               ['exponent-rules', 'exponential-growth-decay', 'radical-simplification'],
  'equivalent-expressions':  ['factor-expand', 'combine-like-terms', 'rational-expressions'],
  'percents':                ['percent-change', 'percent-of', 'successive-percent', 'reverse-percent'],
  'statistics':              ['mean-median-mode', 'standard-deviation-conceptual', 'margin-of-error', 'data-interpretation'],
  'triangles':               ['pythagorean-theorem', 'special-triangles', 'similar-triangles', 'soh-cah-toa'],
  'circles':                 ['area-circumference', 'arc-sector', 'completing-the-square', 'tangent-lines'],
  'volume':                  ['cylinder-cone-sphere', 'composite-solids', 'scaling-volume'],
  'transformations':         ['translations', 'reflections', 'function-transformations'],
  'radians-degrees':         ['conversion', 'unit-circle', 'arc-with-radians'],
  'dimensional-analysis':    ['unit-conversion', 'rate-problems', 'multi-step-conversion'],
};
