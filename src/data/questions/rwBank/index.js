/**
 * R&W drill bank — flattened from `src/data/practiceTests/practiceTest{N}RW.js`.
 *
 * The 12 R&W practice tests embed their questions inside test/module bundles.
 * For Study Plan focus area drills we need a flat, skill-indexed pool that
 * mirrors the math bank API. This module flattens at import time, builds the
 * indices, and exports the same surface area as `data/questions/bank/index.js`
 * so the dispatcher in `StudyPlanDashboard.jsx` can route by section without
 * caring about the bank's internal layout.
 *
 * See `AUTHORING_SPEC.md` (this directory) for the canonical 11 R&W skills,
 * the 4 R&W domains, and the post-flatten item shape.
 *
 * Hard merge blocker T6 from /autoplan Phase 3 was averted at audit: all 648
 * R&W items are `type: 'multiple-choice'`. Items with embedded data tables
 * carry a `questionTable` field (~48 of 648), but the question itself is
 * still MCQ.
 */

import { practiceTest1RW } from '../../practiceTests/practiceTest1RW';
import { practiceTest2RW } from '../../practiceTests/practiceTest2RW';
import { practiceTest3RW } from '../../practiceTests/practiceTest3RW';
import { practiceTest4RW } from '../../practiceTests/practiceTest4RW';
import { practiceTest5RW } from '../../practiceTests/practiceTest5RW';
import { practiceTest6RW } from '../../practiceTests/practiceTest6RW';
import { practiceTest7RW } from '../../practiceTests/practiceTest7RW';
import { practiceTest8RW } from '../../practiceTests/practiceTest8RW';
import { practiceTest9RW } from '../../practiceTests/practiceTest9RW';
import { practiceTest10RW } from '../../practiceTests/practiceTest10RW';
import { practiceTest11RW } from '../../practiceTests/practiceTest11RW';
import { practiceTest12RW } from '../../practiceTests/practiceTest12RW';
import { deriveRWPattern } from './deriveRWPattern';

const RW_TEST_SOURCES = [
  { num: 1,  bundle: practiceTest1RW  },
  { num: 2,  bundle: practiceTest2RW  },
  { num: 3,  bundle: practiceTest3RW  },
  { num: 4,  bundle: practiceTest4RW  },
  { num: 5,  bundle: practiceTest5RW  },
  { num: 6,  bundle: practiceTest6RW  },
  { num: 7,  bundle: practiceTest7RW  },
  { num: 8,  bundle: practiceTest8RW  },
  { num: 9,  bundle: practiceTest9RW  },
  { num: 10, bundle: practiceTest10RW },
  { num: 11, bundle: practiceTest11RW },
  { num: 12, bundle: practiceTest12RW },
];

// ─── Canonical taxonomy ──────────────────────────────────────────────────────

export const RW_CANONICAL_SKILLS = [
  'central-ideas-and-details',
  'inferences',
  'command-of-evidence-textual',
  'command-of-evidence-quantitative',
  'words-in-context',
  'text-structure-and-purpose',
  'cross-text-connections',
  'boundaries',
  'form-structure-and-sense',
  'transitions',
  'rhetorical-synthesis',
];

export const RW_DOMAINS = [
  'information-and-ideas',
  'craft-and-structure',
  'standard-english-conventions',
  'expression-of-ideas',
];

// Skill → domain — derived from the test data (each skill maps to exactly one
// domain in the College Board taxonomy).
const RW_SKILL_TO_DOMAIN = {
  'central-ideas-and-details':         'information-and-ideas',
  'inferences':                        'information-and-ideas',
  'command-of-evidence-textual':       'information-and-ideas',
  'command-of-evidence-quantitative':  'information-and-ideas',
  'words-in-context':                  'craft-and-structure',
  'text-structure-and-purpose':        'craft-and-structure',
  'cross-text-connections':            'craft-and-structure',
  'boundaries':                        'standard-english-conventions',
  'form-structure-and-sense':          'standard-english-conventions',
  'transitions':                       'expression-of-ideas',
  'rhetorical-synthesis':              'expression-of-ideas',
};

/**
 * Alias map for R&W skill IDs. Mirrors `SKILL_ALIAS_MAP` in the math bank.
 * Variants surface from diagnostic engine, AI tutor outputs, and human-typed
 * weakness labels — they need to resolve to the canonical IDs above.
 */
export const RW_SKILL_ALIAS_MAP = {
  // Information and Ideas
  'central-ideas-and-details':       ['central-ideas-and-details'],
  'central ideas and details':       ['central-ideas-and-details'],
  'central-ideas':                   ['central-ideas-and-details'],
  'main-idea':                       ['central-ideas-and-details'],
  'main idea':                       ['central-ideas-and-details'],
  'Central Ideas and Details':       ['central-ideas-and-details'],

  'inferences':                      ['inferences'],
  'inference':                       ['inferences'],
  'Inferences':                      ['inferences'],

  'command-of-evidence-textual':     ['command-of-evidence-textual'],
  'command-of-evidence':             ['command-of-evidence-textual', 'command-of-evidence-quantitative'],
  'textual-evidence':                ['command-of-evidence-textual'],
  'evidence-textual':                ['command-of-evidence-textual'],
  'Command of Evidence (Textual)':   ['command-of-evidence-textual'],

  'command-of-evidence-quantitative': ['command-of-evidence-quantitative'],
  'quantitative-evidence':            ['command-of-evidence-quantitative'],
  'evidence-quantitative':            ['command-of-evidence-quantitative'],
  'Command of Evidence (Quantitative)': ['command-of-evidence-quantitative'],
  'data-evidence':                    ['command-of-evidence-quantitative'],
  'table-evidence':                   ['command-of-evidence-quantitative'],

  // Craft and Structure
  'words-in-context':                ['words-in-context'],
  'words in context':                ['words-in-context'],
  'vocabulary':                      ['words-in-context'],
  'vocab':                           ['words-in-context'],
  'Words in Context':                ['words-in-context'],
  'word-meaning':                    ['words-in-context'],

  'text-structure-and-purpose':      ['text-structure-and-purpose'],
  'text-structure':                  ['text-structure-and-purpose'],
  'purpose':                         ['text-structure-and-purpose'],
  'Text Structure and Purpose':      ['text-structure-and-purpose'],
  'function-of-sentence':            ['text-structure-and-purpose'],

  'cross-text-connections':          ['cross-text-connections'],
  'cross-text':                      ['cross-text-connections'],
  'paired-passages':                 ['cross-text-connections'],
  'Cross-Text Connections':          ['cross-text-connections'],
  'Cross-text Connections':          ['cross-text-connections'],

  // Standard English Conventions
  'boundaries':                      ['boundaries'],
  'punctuation':                     ['boundaries'],
  'sentence-boundaries':             ['boundaries'],
  'commas':                          ['boundaries'],
  'semicolons':                      ['boundaries'],
  'Boundaries':                      ['boundaries'],

  'form-structure-and-sense':        ['form-structure-and-sense'],
  'form-structure':                  ['form-structure-and-sense'],
  'grammar':                         ['form-structure-and-sense'],
  'subject-verb-agreement':          ['form-structure-and-sense'],
  'pronoun-agreement':               ['form-structure-and-sense'],
  'Form, Structure, and Sense':      ['form-structure-and-sense'],

  // Expression of Ideas
  'transitions':                     ['transitions'],
  'transition-words':                ['transitions'],
  'Transitions':                     ['transitions'],

  'rhetorical-synthesis':            ['rhetorical-synthesis'],
  'rhetorical synthesis':            ['rhetorical-synthesis'],
  'notes':                           ['rhetorical-synthesis'],
  'student-notes':                   ['rhetorical-synthesis'],
  'synthesis':                       ['rhetorical-synthesis'],
  'Rhetorical Synthesis':            ['rhetorical-synthesis'],
};

// ─── Flatten ─────────────────────────────────────────────────────────────────

/**
 * Flatten the 12 R&W test bundles into a flat array of drill-shaped items.
 * Namespaces IDs as `rw-test{N}-{moduleId}-{originalId}` and adds:
 *   - `skills: [skill]` (array form for math-bank API parity)
 *   - `section: 'rw'` (section-tag contract)
 *   - `sourceTest`, `sourceModuleId`, `sourceQuestionId` (provenance)
 *   - `authoredBy: 'performsat-rw-pipeline'`
 *   - `calculatorAllowed: false` (R&W never allows calculator)
 *
 * Filters out items missing required fields (skill, choices, correctAnswer)
 * with a console.warn — the source test data has been lint-clean since the
 * R&W pipeline shipped, so this is defensive only.
 */
function flattenRWBank() {
  const out = [];
  let dropped = 0;

  for (const { num, bundle } of RW_TEST_SOURCES) {
    if (!bundle || !Array.isArray(bundle.modules)) continue;
    for (const module of bundle.modules) {
      if (!module || !Array.isArray(module.questions)) continue;
      const moduleId = module.id || `module-${num}`;
      for (const q of module.questions) {
        if (!q || !q.skill || !Array.isArray(q.choices) || q.choices.length < 2 || !q.correctAnswer) {
          dropped++;
          continue;
        }
        out.push({
          ...q,
          id: `rw-test${num}-${moduleId}-${q.id}`,
          sourceTest: num,
          sourceModuleId: moduleId,
          sourceQuestionId: q.id,
          skill: q.skill,
          skills: [q.skill],
          domain: q.domain || RW_SKILL_TO_DOMAIN[q.skill] || 'craft-and-structure',
          section: 'rw',
          // Tier-1 pattern slug (deterministic, from deriveRWPattern) or null.
          // Same function the diagnostic engine uses, so the tag an item is
          // indexed under matches the missedPattern a wrong answer emits.
          rwPattern: deriveRWPattern(q),
          difficulty: q.difficulty || 'medium',
          type: q.type || 'multiple-choice',
          authoredBy: q.authoredBy || 'performsat-rw-pipeline',
          calculatorAllowed: false,
        });
      }
    }
  }

  if (dropped > 0) {
    // eslint-disable-next-line no-console
    console.warn(`[performsat:rwBank] flatten dropped ${dropped} R&W items missing required fields`);
  }

  return out;
}

/**
 * Canonical section deriver for a skill id. Keyed off the single source of
 * truth (RW_CANONICAL_SKILLS) so prediction, diagnostic, and tutor code all
 * agree on what counts as R&W — no drift between separately-maintained lists.
 * Unknown / math skill ids return 'math'.
 *
 * @param {string} skillId - canonical skill id
 * @returns {('rw'|'math')}
 */
export const getSkillSection = (skillId) => (RW_CANONICAL_SKILLS.includes(skillId) ? 'rw' : 'math');

export const rwQuestionBank = flattenRWBank();

// ─── Indices ────────────────────────────────────────────────────────────────

const bankIndex = new Map(rwQuestionBank.map(q => [q.id, q]));
const skillIndex = new Map();
const domainIndex = new Map();
const difficultyIndex = new Map();

rwQuestionBank.forEach(q => {
  (q.skills || []).forEach(sid => {
    if (!skillIndex.has(sid)) skillIndex.set(sid, []);
    skillIndex.get(sid).push(q);
  });
  if (!domainIndex.has(q.domain)) domainIndex.set(q.domain, []);
  domainIndex.get(q.domain).push(q);
  if (!difficultyIndex.has(q.difficulty)) difficultyIndex.set(q.difficulty, []);
  difficultyIndex.get(q.difficulty).push(q);
});

// Pattern index (Phase 4 P3): the R&W analog of the math bank's patternIndex.
// Only items with a non-null rwPattern are indexed; everything else routes
// Tier-3 by skill.
const patternIndex = new Map();
rwQuestionBank.forEach(q => {
  if (q.rwPattern) {
    if (!patternIndex.has(q.rwPattern)) patternIndex.set(q.rwPattern, []);
    patternIndex.get(q.rwPattern).push(q);
  }
});

// ─── Skill resolution ───────────────────────────────────────────────────────

function resolveSkillIds(rawIds) {
  const resolved = new Set();
  for (const id of (rawIds || [])) {
    if (!id) continue;
    if (skillIndex.has(id)) resolved.add(id);
    const aliases = RW_SKILL_ALIAS_MAP[id];
    if (aliases) aliases.forEach(a => {
      if (skillIndex.has(a)) resolved.add(a);
    });
  }
  return [...resolved];
}

// ─── Public API (mirrors math bank) ──────────────────────────────────────────

/**
 * @param {string} id  Namespaced item ID (e.g., 'rw-test1-module-1-101').
 * @returns {object | null}
 */
export const getQuestionById = (id) => bankIndex.get(id) || null;

/**
 * @param {string[]} skillIds  Canonical or alias IDs from RW_SKILL_ALIAS_MAP.
 * @param {object} [opts]
 * @param {'easy'|'medium'|'hard'} [opts.difficulty]
 * @param {string[]} [opts.excludeIds]
 * @param {number} [opts.limit]
 * @returns {object[]}
 */
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
  if (excludeIds.length) {
    const exc = new Set(excludeIds);
    results = results.filter(q => !exc.has(q.id));
  }
  if (limit) results = results.slice(0, limit);
  return results;
};

/**
 * @param {string} domain  One of RW_DOMAINS or null/undefined for all.
 */
export const getQuestionsByDomain = (domain, opts = {}) => {
  const { difficulty, excludeIds = [], limit } = opts;
  let results = [...(domainIndex.get(domain) || [])];
  if (difficulty) results = results.filter(q => q.difficulty === difficulty);
  if (excludeIds.length) {
    const exc = new Set(excludeIds);
    results = results.filter(q => !exc.has(q.id));
  }
  if (limit) results = results.slice(0, limit);
  return results;
};

// Tier-1 firing threshold — mirrors the math bank's TIER1_PATTERN (=8). Defined
// locally to avoid coupling the R&W bank to the math bank module.
export const RW_TIER1_PATTERN_THRESHOLD = 8;

/**
 * Tier-1 selector: questions carrying any of the given R&W pattern slugs
 * (from deriveRWPattern). Mirrors the math bank's getQuestionsBySatPatterns.
 *
 * @param {string[]|string} patterns  pattern slug(s)
 * @param {object} [opts]
 * @param {string[]} [opts.excludeIds]
 * @returns {object[]}
 */
export const getQuestionsByPattern = (patterns, opts = {}) => {
  const { excludeIds = [] } = opts;
  const slugs = Array.isArray(patterns) ? patterns : [patterns];
  const seen = new Set();
  const exc = new Set(excludeIds);
  const results = [];
  slugs.forEach(slug => {
    (patternIndex.get(slug) || []).forEach(q => {
      if (!seen.has(q.id) && !exc.has(q.id)) {
        seen.add(q.id);
        results.push(q);
      }
    });
  });
  return results;
};

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/**
 * Mirror of math bank's `getTargetedWeaknessSet`. Selects a balanced drill set
 * for a list of weak R&W skills. `excludeIds` is the primary mechanism for
 * keeping test-already-seen items out of the drill (Phase 1 M5).
 *
 * ── Phase 2 / Drill Routing audit (TODO #1) ──
 *
 * The math bank implements a three-tier cascade (SAT Pattern → sourceStyleRef
 * → skill). The R&W bank does NOT implement Tier 1/2 because:
 *
 *   1. Only ~6 of 648 R&W items (<1%) carry a `**SAT Pattern: <Title>**`
 *      header — all in practiceTest9RW.js with vocab-specific patterns
 *      (Verb Connotation in Context, Tier-2 Vocabulary in Context,
 *      Adjective Register in Context, Multi-word Collocation in Context).
 *      Far too sparse for any pattern bucket to reach the Tier-1 threshold
 *      of 8 items.
 *   2. The R&W diagnostic engine produces NO `missedPatterns` field on
 *      weaknesses (only math wrong items contribute to that set —
 *      diagnosticEngine.js:917 only runs on items with `q.satPattern`).
 *   3. R&W items have a different finer-grain signal that COULD power a
 *      future cascade (passage type, question-stem pattern like "Which
 *      choice most strongly supports...", error-class taxonomy) — but
 *      adopting it requires (a) a new R&W pattern taxonomy and (b) bulk
 *      retro-tagging the 648 items.
 *
 * **Decision:** Defer R&W exact-match routing until real diagnostic
 * telemetry shows which dimension matters most for student outcomes
 * (passage type? question stem family? error class?). Until then, R&W
 * stays on Tier-3 (skill+domain) routing, which is already production
 * behavior. The `missedPatterns` parameter is accepted here for API
 * symmetry with the math bank — when R&W patterns ARE eventually
 * authored, this function's signature won't change.
 *
 * Future work: see `TODOS.md` "R&W exact-match parity" — kept on the
 * list, but DECISION made.
 *
 * @param {object} opts
 * @param {Array<{skillId: string, domain?: string, missedPatterns?: string[]}>} opts.weakSkills
 *   Weakness objects. `missedPatterns` accepted for API symmetry with math
 *   bank — currently a no-op for R&W (always empty in practice).
 * @param {string[]} [opts.errorTypes]  Reserved for future filtering; currently ignored.
 * @param {{easy: number, medium: number, hard: number}} [opts.difficultyMix]
 * @param {number} [opts.count=10]
 * @param {string[]} [opts.excludeIds]
 * @returns {object[]}
 */
export const getTargetedWeaknessSet = ({
  weakSkills = [],
  errorTypes = [],     // eslint-disable-line no-unused-vars
  difficultyMix,
  count = 10,
  excludeIds = [],
} = {}) => {
  // Tier-1 head (Phase 4 P3): when the weaknesses carry R&W pattern slugs
  // (emitted by diagnosticEngine via deriveRWPattern for boundaries /
  // transitions / text-structure items) and the matched pool clears the
  // threshold, serve from the exact-pattern pool. Otherwise fall through to the
  // skill-level pool below — byte-identical to the pre-P3 behavior for any
  // weakness without missedPatterns. There is no Tier-2 style layer for R&W,
  // so the cascade is Tier-1 pattern -> Tier-3 skill.
  const missedPatterns = [...new Set(
    weakSkills.flatMap(w => (Array.isArray(w.missedPatterns) ? w.missedPatterns : [])),
  )].filter(Boolean);
  const patternPool = missedPatterns.length > 0
    ? getQuestionsByPattern(missedPatterns, { excludeIds })
    : [];

  const skillIds = weakSkills.map(w => w.skillId || w.skill || w);
  let pool = patternPool.length >= RW_TIER1_PATTERN_THRESHOLD
    ? patternPool
    : getQuestionsBySkillIds(skillIds, { excludeIds });

  if (pool.length === 0 && weakSkills.length > 0) {
    // Domain fallback — if no skill matched, pull from the weak skill's domain.
    const domains = [...new Set(weakSkills.map(w => w.domain).filter(Boolean))];
    domains.forEach(d => {
      pool.push(...getQuestionsByDomain(d, { excludeIds }));
    });
  }

  if (difficultyMix) {
    const easy = shuffle(pool.filter(q => q.difficulty === 'easy'))
      .slice(0, Math.ceil(count * (difficultyMix.easy ?? 0.30)));
    const medium = shuffle(pool.filter(q => q.difficulty === 'medium'))
      .slice(0, Math.ceil(count * (difficultyMix.medium ?? 0.45)));
    const hard = shuffle(pool.filter(q => q.difficulty === 'hard'))
      .slice(0, Math.ceil(count * (difficultyMix.hard ?? 0.25)));
    return shuffle([...easy, ...medium, ...hard]).slice(0, count);
  }

  return shuffle(pool).slice(0, count);
};

export const getBankStats = () => {
  const stats = {
    total: rwQuestionBank.length,
    byDomain: {},
    byDifficulty: {},
    bySkill: {},
    bySourceTest: {},
  };
  domainIndex.forEach((qs, d) => { stats.byDomain[d] = qs.length; });
  difficultyIndex.forEach((qs, d) => { stats.byDifficulty[d] = qs.length; });
  skillIndex.forEach((qs, sid) => { stats.bySkill[sid] = qs.length; });
  rwQuestionBank.forEach(q => {
    const t = q.sourceTest || 'unknown';
    stats.bySourceTest[t] = (stats.bySourceTest[t] || 0) + 1;
  });
  return stats;
};

/**
 * Pattern-pool sizes for the drill chip's threshold gate — the R&W analog of
 * the math bank's getBankRoutingStats. chip-shown ≡ pool >= threshold ≡ Tier-1
 * was viable, so the "Practicing: <pattern>" chip never overpromises.
 *
 * @returns {{ byPattern: Object<string, number> }}
 */
export const getRWBankRoutingStats = () => {
  const byPattern = {};
  patternIndex.forEach((qs, slug) => { byPattern[slug] = qs.length; });
  return { byPattern };
};
