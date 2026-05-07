#!/usr/bin/env node
/**
 * R&W bank lint script — implements the rubric in
 * docs/CB_RW_AUTHENTICITY_RUBRIC.md §8 (lint spec) and §9 (bank invariants).
 *
 * Mirrors scripts/calibrateModule.mjs (Math) but R&W-specific. Reuses
 * tokenize() / checkUniqueness() / loadPdfCorpus() / indexCorpus() from the
 * Math lint and adds R&W-specific checks (stem registry, entity registry,
 * passage skeletons, distractor non-words, etc.).
 *
 * Usage:
 *   node scripts/validateRWBank.mjs --test=1
 *   node scripts/validateRWBank.mjs --all
 *   node scripts/validateRWBank.mjs --validate-sources
 *   node scripts/validateRWBank.mjs --validate-sources --strict
 *   node scripts/validateRWBank.mjs --check=stem,entity --test=3
 *
 * Exit code: 1 on any violation, 0 if clean.
 *
 * Output format (mirrors calibrateModule):
 *   practiceTest3RW.js:412 stem-verbatim: skill "X" stem "Y" but expected "Z"
 *
 * Exports — see the bottom of this module for the export list.
 */

import fs from 'fs';
import path from 'path';
import vm from 'vm';
import { fileURLToPath } from 'url';

import {
  tokenize,
  checkUniqueness,
  checkUniquenessSliding,
  indexCorpus,
  loadPdfCorpus,
} from './calibrateModule.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');
const GEN_DIR = process.env.RW_GEN_DIR || path.join(ROOT, 'scripts', 'generated');
const RW_SOURCES_DIR = path.join(GEN_DIR, 'rwSources');
const TESTS_DIR = process.env.RW_TESTS_DIR || path.join(ROOT, 'src', 'data', 'practiceTests');
const PDF_TEXT_DIR = path.join(GEN_DIR, 'pdf-text');

// ---------------------------------------------------------------------------
// RW_STEM_REGISTRY — verbatim canonical stems per skill (rubric §1.1–§1.11).
// ---------------------------------------------------------------------------
//
// Each entry is { canonical: string, variants: string[] }. Variants use
// `[VAR]` placeholders for clauses that legitimately differ (work title,
// author, goal verb). The matcher strips placeholders and compares prefix +
// suffix patterns.
//
// **2026-05-06 (S3/F11) — Bank-mislabeling finding.** Cross-checking the
// registry against PT4-11 PDFs (`scripts/generated/pdf-text/`) showed the
// canonicals here are accurate to CB. The 0% canonical-stem rate that S1's
// `--all` reported on text-structure-and-purpose, cross-text-connections,
// command-of-evidence-textual, and command-of-evidence-quantitative is
// caused by systemic skill mislabeling in the existing bank: e.g., 23
// items tagged `command-of-evidence-textual` use the COE-quantitative
// "Which choice most effectively uses data from the table…" stem, and
// 24 items tagged `text-structure-and-purpose` use the words-in-context
// canonical. Approach A's whole-bank regen retags items by stem at
// authoring time, so this resolves wholesale rather than via per-item
// patches. Do NOT relax these canonicals to accommodate the drifted bank.

export const RW_STEM_REGISTRY = {
  'words-in-context': {
    canonical: 'Which choice completes the text with the most logical and precise word or phrase?',
    variants: [
      // The legacy "As used in the text, what does the word \"X\" most nearly mean?" form
      // is documented as a CB historical variant for direct-meaning items.
      'As used in the text, what does the word "[VAR]" most nearly mean?',
    ],
  },
  'text-structure-and-purpose': {
    canonical: 'Which choice best states the main purpose of the text?',
    variants: [
      'Which choice best describes the overall structure of the text?',
      'Which choice best describes the function of the underlined sentence in the text as a whole?',
      'Which choice best describes the function of the underlined sentence in the text?',
      'Which choice best describes the function of the [VAR] sentence in the overall structure of the text?',
      'Which choice best describes what is happening in the text?',
    ],
  },
  'cross-text-connections': {
    // CB's dominant pattern in PT4-11 is "respond to the [thing] presented/discussed
    // in Text N" — confirmed by grep against scripts/generated/pdf-text/. The
    // current PerformSAT bank uses "respond to the claim made by the researchers
    // in Text 1" which is a drift from CB's "presented in" / "discussed in"
    // forms. We deliberately do NOT add "made by" as a variant; Approach A
    // regen will move bank items onto the canonical CB phrasing.
    canonical: 'Based on the texts, how would [VAR] most likely respond to the [VAR] presented in [VAR]?',
    variants: [
      'Based on the texts, both authors would most likely agree with which statement?',
      'Based on the texts, how would [VAR] most likely characterize [VAR]?',
      // Observed in PT5/PT6: "respond to the 'conventional wisdom' discussed in Text 1?"
      'Based on the texts, how would [VAR] most likely respond to the [VAR] discussed in [VAR]?',
    ],
  },
  'central-ideas-and-details': {
    canonical: 'Which choice best states the main idea of the text?',
    variants: [
      'According to the text, [VAR]?',
    ],
  },
  inferences: {
    canonical: 'Which choice most logically completes the text?',
    variants: [],
  },
  'command-of-evidence-textual': {
    canonical: 'Which quotation from [VAR] most effectively illustrates the claim?',
    variants: [
      'Which quotation from [VAR] would most effectively support the [VAR]?',
      'Which quotation from a hypothetical research paper would best support the [VAR]?',
      'Which finding from [VAR], if true, would most directly support the [VAR]?',
      'Which finding from [VAR], if true, would most directly weaken [VAR]?',
      'Which finding, if true, would most directly support the [VAR]?',
      'Which finding, if true, would most directly weaken [VAR]?',
    ],
  },
  'command-of-evidence-quantitative': {
    canonical: 'Which choice most effectively uses data from the [VAR] to complete [VAR]?',
    variants: [
      'Which choice most effectively uses data from the [VAR] to support [VAR]?',
      'Which choice best describes data from the [VAR] that support [VAR]?',
      'Which choice best describes data from the [VAR] that support the [VAR]?',
    ],
  },
  boundaries: {
    canonical: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    variants: [],
  },
  'form-structure-and-sense': {
    canonical: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    variants: [],
  },
  transitions: {
    canonical: 'Which choice completes the text with the most logical transition?',
    variants: [],
  },
  'rhetorical-synthesis': {
    canonical: 'Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    variants: [
      // Authoring style places the goal sentence as a separate prefix paragraph in `passage`,
      // leaving only the second sentence in `question`. The full canonical from rubric §1.11
      // is also accepted when the entire stem appears in `question`.
      'The student wants to [VAR]. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    ],
  },
};

// All 11 R&W skills (matches the keys of RW_STEM_REGISTRY). Used to validate
// item.skill against a closed set.
const RW_SKILLS = Object.freeze(Object.keys(RW_STEM_REGISTRY));

// ---------------------------------------------------------------------------
// RW_SKILL_BLUEPRINT — per-module expected skill counts (rubric §9).
// ---------------------------------------------------------------------------
//
// Per-module skill distribution for a 27-item module. Each domain has a
// min/max range; the lint reports a violation when the observed count is
// outside [min, max].

export const RW_SKILL_BLUEPRINT = {
  // Information and Ideas: central-ideas-and-details + inferences
  //                         + command-of-evidence-textual + command-of-evidence-quantitative
  'information-and-ideas': { min: 8, max: 10 },
  // Craft and Structure: words-in-context + text-structure-and-purpose
  //                       + cross-text-connections
  'craft-and-structure': { min: 6, max: 8 },
  // Standard English Conventions: boundaries + form-structure-and-sense
  'standard-english-conventions': { min: 5, max: 7 },
  // Expression of Ideas: transitions + rhetorical-synthesis
  'expression-of-ideas': { min: 3, max: 5 },
  // Per-module total (per CB-blueprint).
  totalPerModule: 27,
};

// Map each skill to its parent domain.
const SKILL_TO_DOMAIN = {
  'words-in-context': 'craft-and-structure',
  'text-structure-and-purpose': 'craft-and-structure',
  'cross-text-connections': 'craft-and-structure',
  'central-ideas-and-details': 'information-and-ideas',
  inferences: 'information-and-ideas',
  'command-of-evidence-textual': 'information-and-ideas',
  'command-of-evidence-quantitative': 'information-and-ideas',
  boundaries: 'standard-english-conventions',
  'form-structure-and-sense': 'standard-english-conventions',
  transitions: 'expression-of-ideas',
  'rhetorical-synthesis': 'expression-of-ideas',
};

// ---------------------------------------------------------------------------
// CLI parsing
// ---------------------------------------------------------------------------

function parseArgs(argv) {
  const args = argv.slice(2);
  const TEST_ARG = args.find(a => a.startsWith('--test='));
  const CHECK_ARG = args.find(a => a.startsWith('--check='));
  const ALL = args.includes('--all');
  const VALIDATE_SOURCES = args.includes('--validate-sources');
  const STRICT = args.includes('--strict');

  if (VALIDATE_SOURCES) {
    return { mode: 'validate-sources', strict: STRICT };
  }

  const testNumbers = ALL
    ? Array.from({ length: 12 }, (_, i) => i + 1)
    : (TEST_ARG ? TEST_ARG.split('=')[1].split(',').map(n => parseInt(n, 10)) : null);

  if (!testNumbers && !ALL) {
    throw new Error('--test=<n> or --all is required (or --validate-sources)');
  }

  for (const n of (testNumbers || [])) {
    if (!Number.isInteger(n) || n < 1 || n > 12) {
      throw new Error(`--test value must be 1-12 (got ${n})`);
    }
  }

  const checks = CHECK_ARG ? CHECK_ARG.split('=')[1].split(',').map(s => s.trim()) : null;

  return { mode: ALL ? 'all' : 'test', testNumbers, checks };
}

// ---------------------------------------------------------------------------
// Loaders
// ---------------------------------------------------------------------------

function loadRWPracticeTest(n) {
  const file = path.join(TESTS_DIR, `practiceTest${n}RW.js`);
  let src = fs.readFileSync(file, 'utf8');
  src = src.replace(/^export\s+const\s+/gm, 'var ').replace(/^export\s+default\s+[^;]+;?$/gm, '');
  const ctx = {};
  vm.createContext(ctx);
  vm.runInContext(src, ctx);
  return { pt: ctx[`practiceTest${n}RW`], src, file };
}

function loadJsonSafely(p, label) {
  if (!fs.existsSync(p)) {
    throw new Error(`${label} missing at ${p}`);
  }
  return JSON.parse(fs.readFileSync(p, 'utf8'));
}

function loadResearchers() {
  return loadJsonSafely(path.join(RW_SOURCES_DIR, 'researchers.json'), 'researchers.json');
}

function loadLiteraryWorks() {
  return loadJsonSafely(path.join(RW_SOURCES_DIR, 'literaryWorks.json'), 'literaryWorks.json');
}

function loadCrossTextPairs() {
  return loadJsonSafely(path.join(RW_SOURCES_DIR, 'crossTextPairs.json'), 'crossTextPairs.json');
}

function loadQuantitativeData() {
  return loadJsonSafely(path.join(RW_SOURCES_DIR, 'quantitativeData.json'), 'quantitativeData.json');
}

// ---------------------------------------------------------------------------
// Question-line indexer (mirrors calibrateModule.indexQuestionLines but for RW
// test files where each question may contain a multi-line `passage` field).
// ---------------------------------------------------------------------------
//
// The R&W test file has the same shape as the Math test file (modules array,
// each with a questions array of object literals), so we can reuse the same
// approach: track depth-0 braces inside a `questions: [` array.

function indexRWQuestionLines(src) {
  const lines = src.split('\n');
  const result = [];
  const moduleStarts = [];
  let modulesOpened = false;
  for (let i = 0; i < lines.length; i++) {
    const ln = lines[i];
    if (!modulesOpened && /modules\s*:\s*\[/.test(ln)) modulesOpened = true;
    if (modulesOpened && /questions\s*:\s*\[/.test(ln)) moduleStarts.push(i);
  }

  for (let mi = 0; mi < moduleStarts.length; mi++) {
    const startIdx = moduleStarts[mi];
    let depth = 0;
    let qStart = -1;
    let posInModule = 0;
    let inString = false;
    let stringChar = '';
    let prevChar = '';
    let arrayClosed = false;
    let pastArrayOpen = false;

    for (let i = startIdx; i < lines.length && !arrayClosed; i++) {
      const ln = lines[i];
      let j = 0;
      if (!pastArrayOpen) {
        const m = ln.match(/questions\s*:\s*\[/);
        if (m) {
          j = m.index + m[0].length;
          pastArrayOpen = true;
        }
      }
      for (; j < ln.length; j++) {
        const c = ln[j];
        if (inString) {
          if (c === stringChar && prevChar !== '\\') inString = false;
          prevChar = c;
          continue;
        }
        if (c === '"' || c === "'" || c === '`') {
          inString = true;
          stringChar = c;
          prevChar = c;
          continue;
        }
        if (c === '/' && j + 1 < ln.length && ln[j + 1] === '/') break;
        if (c === '{') {
          if (depth === 0) qStart = i;
          depth++;
        } else if (c === '}') {
          depth--;
          if (depth === 0 && qStart >= 0) {
            posInModule++;
            result.push({
              moduleIndex: mi,
              modulePosition: posInModule,
              startLine: qStart + 1,
              endLine: i + 1,
            });
            qStart = -1;
          }
        } else if (c === ']' && depth === 0) {
          arrayClosed = true;
          break;
        }
        prevChar = c;
      }
    }
  }
  return result;
}

// ---------------------------------------------------------------------------
// Shared violation collector
// ---------------------------------------------------------------------------

function makeViolations() {
  const list = [];
  return {
    push(testN, line, rule, message) {
      list.push({ testN, line, rule, message });
    },
    list,
  };
}

// ---------------------------------------------------------------------------
// Lint check #1 — validateStem (verbatim canonical stem per skill)
// ---------------------------------------------------------------------------
//
// Per item: check item.question against the canonical stem registered for
// item.skill. If it doesn't match, check the variants (which may contain
// `[VAR]` placeholders for the parts that legitimately differ — author
// names, work titles, goal verbs).
//
// Two return shapes:
//   - validateStem(item) -> { ok, expected, observed, isVariant }
//   - validateStemDistribution(items) -> { perSkill: { [skill]: { canonical, variant, total } }, violations }

/**
 * Compare an observed stem to a registry pattern that may contain `[VAR]`
 * placeholders. The placeholder matches any non-empty span of characters
 * (lazy). Returns true if the observed string matches the pattern exactly
 * apart from placeholder substitutions.
 */
function stemMatchesPattern(observed, pattern) {
  if (!observed || !pattern) return false;
  if (!pattern.includes('[VAR]')) return observed.trim() === pattern.trim();
  // Convert [VAR] placeholders to a tolerant regex. Escape regex specials in
  // the surrounding literal text. Use lazy matching so adjacent placeholders
  // don't gobble each other.
  const parts = pattern.split('[VAR]').map(p => p.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  const re = new RegExp('^' + parts.join('(.+?)') + '$');
  return re.test(observed.trim());
}

/**
 * Check a single item's stem (item.question) against the registry for its
 * declared skill. Returns:
 *   { ok: boolean, isVariant: boolean, expected: string, observed: string, allowed: string[] }
 */
export function validateStem(item) {
  const skill = item && item.skill;
  const observed = (item && item.question) || '';
  const entry = RW_STEM_REGISTRY[skill];
  if (!entry) {
    return {
      ok: false,
      isVariant: false,
      expected: null,
      observed,
      allowed: [],
      reason: 'unknown-skill',
    };
  }
  // Canonical stems for cross-text-connections, COE-textual, and
  // COE-quantitative contain [VAR] placeholders (work title, dataset
  // name, hypothesis). When the canonical is a pattern, match it via
  // stemMatchesPattern; only fall back to exact equality for the
  // placeholder-free canonicals.
  if (entry.canonical.includes('[VAR]')) {
    if (stemMatchesPattern(observed, entry.canonical)) {
      return { ok: true, isVariant: false, expected: entry.canonical, observed, allowed: [entry.canonical, ...entry.variants] };
    }
  } else if (observed.trim() === entry.canonical.trim()) {
    return { ok: true, isVariant: false, expected: entry.canonical, observed, allowed: [entry.canonical, ...entry.variants] };
  }
  for (const v of entry.variants) {
    if (stemMatchesPattern(observed, v)) {
      return { ok: true, isVariant: true, expected: v, observed, allowed: [entry.canonical, ...entry.variants] };
    }
  }
  // Some R&W items put the goal sentence ("The student wants to ...") into
  // the `passage` field and only the second sentence into `question`. Tolerate
  // that for rhetorical-synthesis when the canonical stem is the second
  // sentence.
  if (skill === 'rhetorical-synthesis') {
    const second = 'Which choice most effectively uses relevant information from the notes to accomplish this goal?';
    if (observed.trim() === second.trim()) {
      return { ok: true, isVariant: true, expected: second, observed, allowed: [entry.canonical, ...entry.variants] };
    }
  }
  return {
    ok: false,
    isVariant: false,
    expected: entry.canonical,
    observed,
    allowed: [entry.canonical, ...entry.variants],
    reason: 'no-match',
  };
}

/**
 * Bank-level rule: ≥80% of items per skill must use the canonical stem; the
 * rest must be one of the documented variants. Returns:
 *   { perSkill: { [skill]: { canonical, variant, total, canonicalPct } }, violations: [{ skill, message }] }
 */
export function validateStemDistribution(items) {
  const perSkill = {};
  for (const it of items) {
    const skill = it.skill;
    if (!skill) continue;
    const r = validateStem(it);
    if (!perSkill[skill]) perSkill[skill] = { canonical: 0, variant: 0, fail: 0, total: 0 };
    perSkill[skill].total++;
    if (r.ok) {
      if (r.isVariant) perSkill[skill].variant++;
      else perSkill[skill].canonical++;
    } else {
      perSkill[skill].fail++;
    }
  }
  const violations = [];
  for (const [skill, c] of Object.entries(perSkill)) {
    const eligible = c.total - c.fail; // skills tested by stems we recognized
    if (eligible === 0) continue;
    const pct = Math.round(100 * c.canonical / Math.max(1, c.total));
    c.canonicalPct = pct;
    if (pct < 80 && c.total >= 5) {
      violations.push({
        skill,
        message: `stem-distribution: skill "${skill}" canonical-stem rate is ${pct}% (below 80%)`,
      });
    }
  }
  return { perSkill, violations };
}

// ---------------------------------------------------------------------------
// Lint check #2 — validatePdfUniqueness (Jaccard / 3-gram vs PT4-11 PDFs)
// ---------------------------------------------------------------------------
//
// Reuse Math's checkUniqueness/checkUniquenessSliding/loadPdfCorpus. Apply
// per item to passage, joined choices, and explanation.

const RW_MIN_TOKENS_FOR_CHECK = 12;

/**
 * Run the PDF-uniqueness checks against an item's passage / choices /
 * explanation. Returns a list of { rule, message, line } violation seeds
 * that the caller will attach to the test/file.
 *
 * @param {object} item — the question record
 * @param {Array} pdfCorpus — pre-indexed PT4-11 sliding-window corpus
 * @param {number} startLine — line number for the item (for output)
 * @returns {Array<{ line, rule, message }>}
 */
/**
 * Derive a single passage-equivalent text string from an item, regardless
 * of whether the item uses the legacy `passage` field, the structured
 * `passages: [{label,text}]` cross-text form, or the rhet-syn
 * `studentNotes: {intro, bullets, goal}` form. Used by lints that operate
 * on natural-language passage content (entity registry, pdf uniqueness,
 * skeleton fingerprinting). Returns '' if the item carries no passage
 * content.
 */
export function getPassageText(item) {
  if (!item) return '';
  if (typeof item.passage === 'string' && item.passage.trim()) {
    return item.passage;
  }
  if (Array.isArray(item.passages) && item.passages.length > 0) {
    return item.passages
      .map(p => (p && typeof p.text === 'string') ? p.text : '')
      .filter(Boolean)
      .join('\n\n');
  }
  if (item.studentNotes && typeof item.studentNotes === 'object') {
    const sn = item.studentNotes;
    const intro = typeof sn.intro === 'string' ? sn.intro : '';
    const bullets = Array.isArray(sn.bullets)
      ? sn.bullets.map(b => `- ${b}`).join('\n')
      : '';
    return [intro, bullets].filter(Boolean).join('\n\n');
  }
  return '';
}

export function validatePdfUniqueness(item, pdfCorpus, startLine) {
  const out = [];
  if (!pdfCorpus || pdfCorpus.length === 0) return out;

  // 2a — passage (handles legacy passage / structured passages / studentNotes)
  const passage = getPassageText(item);
  if (passage.trim()) {
    const tokens = tokenize(passage);
    if (tokens.length >= RW_MIN_TOKENS_FOR_CHECK) {
      const u = checkUniquenessSliding(passage, pdfCorpus);
      if (!u.pass) {
        out.push({
          line: startLine,
          rule: 'pdf-uniqueness-passage',
          message: `pdf-uniqueness-passage: passage Jaccard ${u.jaccard} / 3-gram ${u.ngramOverlap} vs ${u.closestId} (thresholds 0.78 / 0.60)`,
        });
      }
    }
  }
  // 2b — joined choices
  if (Array.isArray(item.choices)) {
    const joined = item.choices.map(c => (c && c.text) || '').join(' ');
    const tokens = tokenize(joined);
    if (tokens.length >= RW_MIN_TOKENS_FOR_CHECK) {
      const u = checkUniqueness(joined, indexCorpusFromArray(pdfCorpus));
      if (!u.pass) {
        out.push({
          line: startLine,
          rule: 'pdf-uniqueness-choices',
          message: `pdf-uniqueness-choices: choice block Jaccard ${u.jaccard} / 3-gram ${u.ngramOverlap} vs ${u.closestQbankId} (thresholds 0.78 / 0.60)`,
        });
      }
    }
  }
  // 2c — explanation (sliding window)
  const exp = item.explanation || '';
  if (exp.trim()) {
    const u = checkUniquenessSliding(exp, pdfCorpus);
    if (!u.pass) {
      out.push({
        line: startLine,
        rule: 'pdf-uniqueness-explanation',
        message: `pdf-uniqueness-explanation: explanation window Jaccard ${u.jaccard} / 3-gram ${u.ngramOverlap} vs ${u.closestId} (thresholds 0.78 / 0.60)`,
      });
    }
  }
  return out;
}

// indexCorpusFromArray: helper to reuse the Math indexCorpus shape when we
// already have a pre-indexed corpus (the Array form). checkUniqueness expects
// the QBank-shaped object; converting from indexed corpus → object preserves
// the comparison.
function indexCorpusFromArray(indexedCorpus) {
  // checkUniqueness internally reindexes via indexCorpus. We pass an object
  // shaped like { id: { stemPlain: text } } so it walks the same path.
  const obj = {};
  for (const win of indexedCorpus) obj[win.id] = { stemPlain: win.text };
  return obj;
}

// ---------------------------------------------------------------------------
// Lint check #6 — validateChoiceUniqueness (distractor strings across bank)
// ---------------------------------------------------------------------------
//
// Build a frequency map of every choice text (normalized) across the bank.
// Fail if any single choice string appears in >2 items. Optional argument
// is the per-test items list with item.testN/item.id for reporting.

const CHOICE_UNIQUENESS_MAX_REPEATS = 2;

/**
 * Normalize a choice text for cross-test comparison:
 *   - lowercase
 *   - collapse whitespace
 *   - strip leading/trailing punctuation
 */
function normalizeChoice(text) {
  if (!text) return '';
  return text
    .toLowerCase()
    .replace(/\s+/g, ' ')
    .replace(/^[\s\p{P}]+|[\s\p{P}]+$/gu, '')
    .trim();
}

/**
 * Cross-bank check: any single choice text that appears in >max items.
 * Returns violations of the form { line, rule, message, items }.
 *
 * @param {Array} bankItems — flat array of { testN, line, item } across all 12 tests
 * @param {object} [opts] — { max: 2 (default) }
 */
export function validateChoiceUniqueness(bankItems, opts = {}) {
  const max = opts.max || CHOICE_UNIQUENESS_MAX_REPEATS;
  const counts = new Map(); // normalized -> { original, occurrences: [{ testN, line, qid }] }
  for (const b of bankItems) {
    const item = b.item;
    if (!Array.isArray(item.choices)) continue;
    for (const c of item.choices) {
      if (!c || !c.text) continue;
      const norm = normalizeChoice(c.text);
      // Skip very short strings — single words ("indicate", "however,") will
      // legitimately recur and don't indicate template cloning.
      if (norm.length < 20) continue;
      if (!counts.has(norm)) counts.set(norm, { original: c.text, occurrences: [] });
      counts.get(norm).occurrences.push({
        testN: b.testN, line: b.line, qid: item.id,
      });
    }
  }
  const violations = [];
  for (const [norm, info] of counts.entries()) {
    // Cross-item uniqueness: SEC items legitimately reuse the same phrase
    // across all 4 choices (only the punctuation/wording varies). Dedupe
    // by item id so intra-item repeats don't trip the cross-item lint.
    const distinctItems = new Map(); // qid -> first occurrence
    for (const o of info.occurrences) {
      const key = `T${o.testN}Q${o.qid}`;
      if (!distinctItems.has(key)) distinctItems.set(key, o);
    }
    if (distinctItems.size > max) {
      const list = Array.from(distinctItems.keys()).join(', ');
      const first = info.occurrences[0];
      violations.push({
        testN: first.testN,
        line: first.line,
        rule: 'choice-uniqueness',
        message: `choice-uniqueness: distractor "${truncateForMsg(info.original)}" appears in ${distinctItems.size} items (max ${max}). Items: [${list}]`,
        norm,
        occurrences: Array.from(distinctItems.values()),
      });
    }
  }
  return violations;
}

function truncateForMsg(s, n = 80) {
  if (!s) return '';
  if (s.length <= n) return s;
  return s.slice(0, n - 1) + '…';
}

// ---------------------------------------------------------------------------
// Lint check #3 — validateBankSkeletons (passage skeleton detection across bank)
// ---------------------------------------------------------------------------
//
// THE most important new check — catches templated cross-test passages.
// For each item, compute a skeleton fingerprint:
//   1. Strip proper nouns (capitalized words not at sentence start, plus
//      proper-noun spans like "Dr. Aiyana Standing Bear")
//   2. Normalize numbers to [NUM] and 4-digit years to [YEAR]
//   3. Take the first 12 tokens after stripping (the "opening fingerprint")
//   4. Plus the full normalized passage tokens for Jaccard comparison
// Pairwise compare every item to every other item:
//   - Fail when first-12-token openings match exactly between items in
//     different tests
//   - Fail when normalized-passage Jaccard > 0.40 between any two items

const BANK_SKELETON_JACCARD_THRESHOLD = 0.40;
const BANK_SKELETON_OPENING_TOKENS = 12;

const TITLE_PREFIXES = new Set([
  'Dr.', 'Dr', 'Mr.', 'Mr', 'Mrs.', 'Mrs', 'Ms.', 'Ms', 'Prof.', 'Prof',
  'Professor', 'Sir', 'Lady', 'Lord', 'St.', 'St',
]);

/**
 * Strip proper nouns from a string. The simple rule: replace any capitalized
 * word that is not at the start of a sentence with [PERSON]. Then collapse
 * runs of [PERSON] tokens into a single placeholder. Quotation marks are
 * stripped.
 *
 * Also normalizes:
 *   - 4-digit years (1700-2099) → [YEAR]
 *   - other multi-digit numbers → [NUM]
 *   - title-stripped names ("Dr.", "Prof.")
 */
function stripProperNouns(text) {
  if (!text) return '';
  // First, split into sentences (very crude — split on `. ` boundaries).
  const sentences = text.split(/(?<=[.!?])\s+/);
  const out = [];
  for (const s of sentences) {
    // Strip explicit titles first ("Dr. X", "Professor Y").
    let cleaned = s.replace(/\b(Dr|Prof|Mr|Mrs|Ms|Sir|Lady|Lord|St)\.?\s+[A-Z][a-zA-Z]+(?:\s+[A-Z][a-zA-Z]+)*/g, '[PERSON]');
    // Walk word-by-word: keep the first word's capitalization as-is, replace
    // any other capitalized word run with [PERSON].
    const words = cleaned.split(/\s+/);
    const replaced = [];
    let firstWord = true;
    let inPersonRun = false;
    for (const w of words) {
      if (!w) continue;
      const isCap = /^[A-Z][a-zA-Z'-]+$/.test(w) || /^[A-Z][a-zA-Z'-]+,$/.test(w);
      const isAcronym = /^[A-Z]{2,}$/.test(w);
      if (firstWord) {
        replaced.push(w);
        firstWord = false;
        inPersonRun = false;
        continue;
      }
      if (isCap || isAcronym) {
        if (!inPersonRun) {
          replaced.push('[PERSON]');
          inPersonRun = true;
        }
        // skip duplicates
      } else {
        replaced.push(w);
        inPersonRun = false;
      }
    }
    out.push(replaced.join(' '));
  }
  let result = out.join(' ');
  // Normalize numeric values.
  result = result.replace(/\b(1[7-9]\d{2}|20\d{2})\b/g, '[YEAR]');
  result = result.replace(/\b\d+(\.\d+)?\b/g, '[NUM]');
  // Collapse repeated placeholders.
  result = result.replace(/(\[PERSON\]\s+){2,}/g, '[PERSON] ');
  return result;
}

/**
 * Compute a passage's opening-token fingerprint: first N tokens after
 * stripping proper nouns and collapsing whitespace. Returns the joined
 * string (canonical form for equality comparison).
 */
function passageOpeningFingerprint(passage, n = BANK_SKELETON_OPENING_TOKENS) {
  if (!passage) return '';
  const stripped = stripProperNouns(passage);
  const tokens = stripped
    .toLowerCase()
    .replace(/[^a-z0-9\[\]\s]/g, ' ')
    .split(/\s+/)
    .filter(t => t.length > 0);
  return tokens.slice(0, n).join(' ');
}

/**
 * Compute a passage's normalized token set (proper-nouns stripped + numbers
 * normalized) for Jaccard comparison.
 */
function passageNormalizedTokens(passage) {
  if (!passage) return new Set();
  const stripped = stripProperNouns(passage);
  return new Set(
    stripped
      .toLowerCase()
      .replace(/[^a-z0-9\[\]\s]/g, ' ')
      .split(/\s+/)
      .filter(t => t.length > 1)
  );
}

function jaccardSets(a, b) {
  if (a.size === 0 && b.size === 0) return 0;
  let inter = 0;
  const small = a.size < b.size ? a : b;
  const large = a.size < b.size ? b : a;
  for (const v of small) if (large.has(v)) inter++;
  const uni = a.size + b.size - inter;
  return uni === 0 ? 0 : inter / uni;
}

/**
 * Bank-level: pairwise compare every item's passage to every other item's.
 * Returns violations — one per pair that crosses thresholds.
 *
 * @param {Array} bankItems - flat list { testN, line, item } across all 12 tests
 * @returns {Array<{ testN, line, rule, message }>}
 */
export function validateBankSkeletons(bankItems) {
  // Pre-compute fingerprints once.
  const fps = bankItems
    .filter(b => b.item && b.item.passage)
    .map(b => ({
      testN: b.testN,
      line: b.line,
      qid: b.item.id,
      opening: passageOpeningFingerprint(b.item.passage),
      tokenSet: passageNormalizedTokens(b.item.passage),
      passage: b.item.passage,
    }))
    .filter(b => b.tokenSet.size >= 8);

  const violations = [];
  // De-duplicate: report each distinct A↔B pair once.
  const seenPairs = new Set();
  for (let i = 0; i < fps.length; i++) {
    for (let j = i + 1; j < fps.length; j++) {
      const A = fps[i];
      const B = fps[j];
      // Skip same-test same-question (paranoia).
      if (A.testN === B.testN && A.qid === B.qid) continue;
      const pairKey = `${Math.min(A.testN, B.testN)}-${A.qid}-${Math.max(A.testN, B.testN)}-${B.qid}`;
      if (seenPairs.has(pairKey)) continue;
      seenPairs.add(pairKey);

      // Opening exact match across different tests:
      const openingMatch = A.testN !== B.testN
        && A.opening === B.opening
        && A.opening.split(' ').filter(Boolean).length >= 6;
      // Jaccard of normalized tokens above threshold:
      const jac = jaccardSets(A.tokenSet, B.tokenSet);
      const jaccardMatch = jac > BANK_SKELETON_JACCARD_THRESHOLD;

      if (openingMatch || jaccardMatch) {
        const reason = [];
        if (openingMatch) reason.push(`shared 12-token opening`);
        if (jaccardMatch) reason.push(`Jaccard ${jac.toFixed(2)}`);
        const otherFile = `practiceTest${B.testN}RW.js`;
        const thisFile = `practiceTest${A.testN}RW.js`;
        const opening = A.opening.length > 60 ? A.opening.slice(0, 60) + '…' : A.opening;
        violations.push({
          testN: A.testN,
          line: A.line,
          rule: 'bank-skeleton',
          message: `bank-skeleton: passage at ${thisFile}:${A.line} mirrors ${otherFile}:${B.line} (${reason.join(', ')}, opening "${opening}")`,
        });
      }
    }
  }
  return violations;
}

// ---------------------------------------------------------------------------
// Lint check #4 — validateEntityRegistry (every named person/work is real)
// ---------------------------------------------------------------------------
//
// Extract named entities from the passage:
//   pattern: [Title]? [FirstName] [LastName(s)] (e.g., "Dr. Robin Wall Kimmerer")
// Cross-check against researchers.json (full name match), and literaryWorks.json
// (author field). Allow real well-known historical figures via a small
// "always-allow" list (populated from literaryWorks.json + manual seed).

// Always-allow list: real verifiable historical / canonical figures whose
// names commonly appear in CB R&W passages and that may not be in
// researchers.json. Populated by:
//   - literaryWorks.json authors (added at runtime)
//   - manual seed below (canonical historical / literary figures, scientists,
//     and public-domain artists who appear in PT 4-11 PDFs)
const ALWAYS_ALLOW_SEED = new Set([
  // SAT R&W canonical literary authors
  'Walt Whitman', 'Susan Glaspell', 'Angelina Weld Grimké', 'Walt Whitman',
  'Frederick Douglass', 'Rosa Parks', 'Marie Tharp', 'Bessie Coleman', 'Hedy Lamarr',
  'Ann Petry', 'Edith Wharton', 'Marianne Moore', 'Jerome K. Jerome',
  'Anton Chekhov', 'Katherine Mansfield', 'Charlotte Perkins Gilman',
  'James Baldwin', 'Herman Melville', 'Sarah Orne Jewett', 'Kate Chopin',
  'Mary E. Wilkins Freeman', 'Stephen Crane', 'Willa Cather', 'Theodore Dreiser',
  'William Dean Howells', 'Mark Twain', 'Bret Harte', 'Zora Neale Hurston',
  'Langston Hughes', 'Claude McKay', 'Jean Toomer', 'Nella Larsen',
  'Sui Sin Far', 'Edith Maude Eaton', 'Mary Antin', 'Anzia Yezierska',
  'Emily Dickinson', 'William Wordsworth', 'John Keats', 'Christina Rossetti',
  'William Butler Yeats', 'Robert Frost', 'Carl Sandburg', 'Wallace Stevens',
  'T.S. Eliot', 'Frances Hodgson Burnett', 'Elizabeth von Arnim', 'Jean Webster',
  'Betty Smith', 'Edgar Allan Poe', 'Nathaniel Hawthorne', 'Henry James',
  'Thomas Hardy', 'Jack London', 'Lu Xun', 'Mori Ōgai', 'Natsume Sōseki',
  'Guy de Maupassant', 'Honoré de Balzac', 'Thomas Mann', 'Hugo von Hofmannsthal',
  'Benito Pérez Galdós', 'Emilia Pardo Bazán', 'Horacio Quiroga', 'Jorge Luis Borges',
  // CB-cited researchers / scientists
  'Daniella DellaGiustina', 'Vanessa Galvez', 'Marie Watt', 'Norma Sklarek',
  'Antonia Brico', 'Soo Sunny Park', 'Lê Lương Minh', 'Pliny the Younger',
  'Tacitus', 'Robin Wall Kimmerer', 'Chukwuebuka Okolo', 'Lani Tsinnajinnie',
  'Michael Garcia', 'Zora Hurston',
  // Historical educators / mentors who appear as named figures in
  // researcher biographies (legitimate cross-references, not protagonists).
  'Carter G. Woodson', 'Franz Boas', 'W. E. B. Du Bois',
  'Ida B. Wells', 'Booker T. Washington', 'William Lloyd Garrison',
  'Wendell Phillips', 'Charles Lenox Remond', 'Sojourner Truth',
  'Frederick Douglass',
  // Common single names that mark known regions / institutions
  'Babylonian', 'Roman', 'Saharan', 'African', 'Atlantic', 'Pacific',
  'Pompeii', 'Herculaneum', 'Misenum',
  // Saint-named idioms / eponymous diseases-and-conditions extracted from
  // "St. X" patterns by Pattern A. These are medical / cultural terms,
  // not researcher names, but the regex correctly matches the form.
  "Vitus's Dance", 'Bright', "Bright's Disease", 'Anthony', "Anthony's Fire",
  'Elmo', "Elmo's Fire", 'Helena', "Helena's Comet",
]);

/**
 * Extract candidate named entities from a passage. Looks for:
 *   1. [Title]? [Cap] [Cap]+ — multi-word names like "Marie Tharp" or
 *      "Dr. Aiyana Standing Bear" or "the architect Yusuf Adisa"
 *   2. Italicized titles ( *Title* ) — work titles
 *   3. Quoted titles ("Title") — work titles
 *
 * Returns:
 *   { people: [{ name, span }], works: [{ title, span }] }
 *
 * Note: this is intentionally conservative. False positives (a sentence
 * starting with a person's name) get filtered later via the always-allow
 * + registry check.
 */
export function extractEntities(passage) {
  if (!passage) return { people: [], works: [] };
  const people = [];
  const works = [];

  // --- People ---
  // A "name token" is one of:
  //   - a multi-letter capitalized word, including Unicode upper/lower
  //     letters so non-ASCII names like "Ürge-Vorsatz", "DellaGiustina",
  //     "Pérez Galdós" tokenize correctly
  //   - a single-capital initial with period ("J.", "F.")
  //   - a lowercase nobiliary particle ("de", "van", "von", "der", "del",
  //     "du", "la", "le", "wa", "al", "bin", "ben") followed by a cap word —
  //     so "Asha de Vos" or "W. E. B. Du Bois" tokenize as full names
  //     instead of truncating at the first lowercase token.
  const NAME_TOKEN = "(?:(?:de|van|von|der|del|du|la|le|wa|al|bin|ben)\\s+\\p{Lu}[\\p{L}'-]+|\\p{Lu}[\\p{L}'-]+|\\p{Lu}\\.)";

  // Pattern A: explicit title followed by 1-3 capitalized words
  //   matches: Dr. Robin Wall Kimmerer, Professor Aditi Rao
  const titleRe = new RegExp(`\\b(Dr|Prof|Mr|Mrs|Ms|Sir|Professor|Lady|Lord|St)\\.?\\s+(${NAME_TOKEN}(?:\\s+${NAME_TOKEN}){1,3})`, 'gu');
  let m;
  while ((m = titleRe.exec(passage)) !== null) {
    people.push({ name: m[2], full: `${m[1]} ${m[2]}`, withTitle: true });
  }

  // Pattern B: descriptor introduction — "the [discipline] [Name1] [Name2]"
  //   matches: "the geologist Marie Tharp", "the architect Yusuf Adisa",
  //   "transportation researcher Aditi Rao", "scientist Daniella DellaGiustina"
  const descriptors = [
    'researcher', 'scientist', 'geologist', 'biologist', 'chemist',
    'physicist', 'astronomer', 'archaeologist', 'historian', 'architect',
    'engineer', 'composer', 'conductor', 'poet', 'writer', 'novelist',
    'painter', 'sculptor', 'photographer', 'critic', 'philosopher',
    'linguist', 'sociologist', 'economist', 'anthropologist', 'botanist',
    'ecologist', 'meteorologist', 'hydrologist', 'oceanographer',
    'mathematician', 'choreographer', 'designer', 'curator', 'mycologist',
    'paleontologist', 'ethnobotanist', 'astrophysicist', 'climatologist',
    'cosmologist', 'epidemiologist', 'zoologist', 'glaciologist',
    'volcanologist', 'mineralogist', 'palynologist', 'cellist', 'pianist',
    'violinist', 'sociolinguist', 'urbanist', 'planner', 'translator',
    'editor', 'illustrator', 'metallurgist', 'arborist', 'archivist',
    'astronomer', 'oceanographer', 'sailor', 'demographer', 'statistician',
    'psychologist', 'neuroscientist',
  ];
  const descRe = new RegExp(`\\b(?:the\\s+)?(?:${descriptors.join('|')})\\s+(${NAME_TOKEN}(?:\\s+${NAME_TOKEN}){0,3})`, 'gu');
  while ((m = descRe.exec(passage)) !== null) {
    people.push({ name: m[1], full: m[1], withTitle: false });
  }

  // --- Works ---
  // Pattern: italicized titles (*Title*) and quoted titles ("Title")
  // The R&W files use markdown italic for emphasis on terms (e.g. *worse*),
  // so be slightly conservative — only treat as a work when the italics span
  // ≥2 words OR contains a capital letter mid-span.
  const italicRe = /\*([^*\n]{2,80})\*/g;
  while ((m = italicRe.exec(passage)) !== null) {
    const t = m[1].trim();
    if (!t) continue;
    const wordCount = t.split(/\s+/).length;
    const hasMidCap = /\s[A-Z]/.test(t);
    if (wordCount >= 2 && (hasMidCap || t[0] === t[0].toUpperCase())) {
      works.push({ title: t, raw: m[0] });
    }
  }
  // Quoted titles: short quoted spans of 2-15 words (skip dialogue).
  // American typography places a trailing comma inside the closing quote
  // (`"Title,"`) so we strip a trailing comma/semicolon/colon from the
  // extracted span before lookup; otherwise the captured title doesn't
  // match its registry entry.
  const quoteRe = /"([A-Z][^"]{2,80})"/g;
  while ((m = quoteRe.exec(passage)) !== null) {
    let t = m[1].trim().replace(/[,;:]+$/, '').trim();
    if (!t) continue;
    const words = t.split(/\s+/);
    // Title-case heuristic: real titles either are a single capitalized
    // word ("Walden", "Trifles") or contain 2+ capitalized words ("On the
    // Origin of Mitosing Cells", "Letter to Thomas Auld"). Dialogue spans
    // like "Frome had been a smart fellow once" capitalize only the first
    // word and would false-positive otherwise.
    const capWords = words.filter(w => /^[A-Z]/.test(w)).length;
    const looksLikeTitle = words.length === 1 || capWords >= 2;
    // Skip dialogue: pure sentence-like spans (ending with `.` or `!`) and
    // very long quotes are exempt — they're usually quotations, not titles.
    if (words.length <= 8 && !/[.!?]$/.test(t) && looksLikeTitle) {
      works.push({ title: t, raw: m[0] });
    }
  }

  return { people, works };
}

/**
 * Cross-check extracted entities against the source registries.
 *
 * @param {object} item - the question
 * @param {Array} researchers - researchers.json
 * @param {Array} literaryWorks - literaryWorks.json
 * @param {Set<string>} alwaysAllow - extra always-allow set (literary authors etc.)
 * @returns {Array<{ rule, message, kind }>}
 */
export function validateEntityRegistry(item, researchers, literaryWorks, alwaysAllow) {
  const out = [];
  if (!item) return out;
  const passageText = getPassageText(item);
  if (!passageText) return out;

  // Index registries for fast lookup.
  const researcherSet = new Set(
    (researchers || []).map(r => (r.name || '').trim()).filter(Boolean)
  );
  const literaryAuthorSet = new Set(
    (literaryWorks || []).map(w => (w.author || '').trim()).filter(Boolean)
  );
  // Known work-titles include both canonical literary works AND scholarly
  // publication titles cited in researchers.json. We also fold in the
  // pre-colon "main title" form ("South to America" alongside "South to
  // America: A Journey…") because passages routinely cite the short form,
  // not the full subtitle.
  const expandTitle = (t) => {
    if (!t) return [];
    const trimmed = t.trim();
    if (!trimmed) return [];
    const beforeColon = trimmed.split(':')[0].trim();
    return beforeColon !== trimmed && beforeColon ? [trimmed, beforeColon] : [trimmed];
  };
  const literaryTitleSet = new Set([
    ...(literaryWorks || []).flatMap(w => expandTitle(w.title)),
    ...(researchers || []).flatMap(r => (r.publications || []).flatMap(p => expandTitle(p.title))),
  ]);
  const allowSet = new Set([
    ...alwaysAllow,
    ...researcherSet,
    ...literaryAuthorSet,
  ]);

  const { people, works } = extractEntities(passageText);

  // Track per-passage names already reported (don't duplicate per item).
  const reportedNames = new Set();
  for (const p of people) {
    const name = p.name && p.name.trim();
    if (!name) continue;
    if (reportedNames.has(name)) continue;
    if (allowSet.has(name)) continue;
    // Exact match at registry. Try also Last-name only for two-word names.
    if (researcherSet.has(name)) continue;
    if (literaryAuthorSet.has(name)) continue;
    // Fallback: a name that's just a last name we've already seen via title:
    // skip — we report only the introducing form.
    reportedNames.add(name);
    out.push({
      kind: 'person',
      rule: 'entity-registry',
      message: `entity-registry: researcher "${name}" not in researchers.json or literaryWorks.json`,
      name,
    });
  }
  for (const w of works) {
    if (!w.title) continue;
    if (literaryTitleSet.has(w.title)) continue;
    out.push({
      kind: 'work',
      rule: 'entity-registry',
      message: `entity-registry: literary work "${w.title}" not in literaryWorks.json`,
      title: w.title,
    });
  }
  return out;
}

// ---------------------------------------------------------------------------
// Lint check #5 — validateDistractorWords (every word in choices is a word)
// ---------------------------------------------------------------------------
//
// Use a curated denylist of audit-flagged non-words. Optionally augment with
// a wordlist if `words` package is available (left as a soft dictionary check
// — fails closed by default).

// Denylist of audit-flagged malformed tokens. These are exact (case-insensitive)
// matches; any choice text containing one of these tokens fires a
// distractor-word violation.
const DISTRACTOR_DENYLIST_TOKENS = new Set([
  'comprehensiver', 'comprehensivest', 'more comprehensiver',
  'complexs', 'detaileder', 'detailedest', 'more detaileder',
  // possessive doubles / mismatched apostrophes
  "library's'", 'librarys', "denmark's'", 'valleys\'s', "valleys's",
  // pronoun apostrophe nonsense
  "whom's", "which's",
  // any token ending with `'s'` (single-quote double): pure bank fingerprint
  // (legitimate possessive-of-plural is `parents'`, never `parent's'`)
]);

// Pattern denylist: tokens that match these regexes are non-words.
const DISTRACTOR_DENYLIST_PATTERNS = [
  // double-apostrophe possessive: "Library's'"
  /\b[A-Za-z]+'s'\b/,
  // wrong comparative/superlative on already-comparative words (-er-er, -est-er)
  /\b(more|most)\s+\w+er\b/i,
  /\bcomprehensiv(?:er|est)\b/i,
  /\bdetaileder\b/i,
];

/**
 * Tokenize a choice text into rough word tokens (preserves apostrophes inside
 * the token so "library's'" survives as a single token to test against the
 * denylist).
 */
function choiceTokenize(text) {
  if (!text) return [];
  // Split on whitespace and dashes; keep apostrophes inside tokens.
  return text
    .replace(/[—–]/g, ' ')
    .split(/\s+/)
    .map(t => t.replace(/^[\s,.;:?!()[\]"<>{}]+|[\s,.;:?!()[\]"<>{}]+$/g, ''))
    .filter(Boolean);
}

/**
 * Per-item lint: any non-word in any choice is a hard fail.
 *
 * @param {object} item - question record
 * @returns {Array<{ rule, message }>}
 */
export function validateDistractorWords(item) {
  const out = [];
  if (!Array.isArray(item.choices)) return out;
  for (const c of item.choices) {
    if (!c || !c.text) continue;
    const tokens = choiceTokenize(c.text);
    const offenders = new Set();
    for (const t of tokens) {
      const lower = t.toLowerCase();
      if (DISTRACTOR_DENYLIST_TOKENS.has(lower)) {
        offenders.add(t);
        continue;
      }
      for (const re of DISTRACTOR_DENYLIST_PATTERNS) {
        if (re.test(t)) {
          offenders.add(t);
          break;
        }
      }
    }
    // Also pattern-test the whole choice (catches multi-word patterns like
    // "more comprehensiver", "more detaileder").
    for (const re of DISTRACTOR_DENYLIST_PATTERNS) {
      const m = c.text.match(re);
      if (m) offenders.add(m[0]);
    }
    if (offenders.size > 0) {
      for (const off of offenders) {
        out.push({
          rule: 'distractor-word',
          message: `distractor-word: choice ${c.id} contains non-word "${off}"`,
        });
      }
    }
  }
  return out;
}

// ---------------------------------------------------------------------------
// Lint check #7 — validateWithinTestCloning (no two passages ≥0.30 Jaccard)
// ---------------------------------------------------------------------------
//
// For each test, pairwise compare every item's passage to every other item's
// (within the same test only). Fail when Jaccard > 0.30 between any two.

const WITHIN_TEST_JACCARD_THRESHOLD = 0.30;

/**
 * Per-test pairwise passage comparison.
 *
 * @param {Array} testItems - items in the test, each { line, item }
 * @param {number} testN
 * @returns {Array<{ testN, line, rule, message }>}
 */
export function validateWithinTestCloning(testItems, testN) {
  const fps = testItems
    .filter(b => b.item && b.item.passage)
    .map(b => ({
      line: b.line,
      qid: b.item.id,
      tokens: passageNormalizedTokens(b.item.passage),
    }))
    .filter(b => b.tokens.size >= 8);

  const violations = [];
  const seen = new Set();
  for (let i = 0; i < fps.length; i++) {
    for (let j = i + 1; j < fps.length; j++) {
      const A = fps[i];
      const B = fps[j];
      if (A.qid === B.qid) continue;
      const key = `${Math.min(A.qid, B.qid)}-${Math.max(A.qid, B.qid)}`;
      if (seen.has(key)) continue;
      seen.add(key);
      const jac = jaccardSets(A.tokens, B.tokens);
      if (jac > WITHIN_TEST_JACCARD_THRESHOLD) {
        violations.push({
          testN,
          line: A.line,
          rule: 'within-test-cloning',
          message: `within-test-cloning: practiceTest${testN}RW.js:${A.line} ↔ practiceTest${testN}RW.js:${B.line} share Jaccard ${jac.toFixed(2)} (threshold ${WITHIN_TEST_JACCARD_THRESHOLD})`,
        });
      }
    }
  }
  return violations;
}

// ---------------------------------------------------------------------------
// CLI driver
// ---------------------------------------------------------------------------
//
// `main()` dispatches by `--validate-sources` (schema check on the source
// JSON files) vs the lint pipeline (`--all` or `--test=N[,M…]`, optionally
// narrowed with `--check=stem,entity,…`). Output convention mirrors
// calibrateModule.mjs:
//
//   <file>:<line> <rule>: <message>          (per-violation, on stdout)
//   N violation(s) across K test(s) — M items linted   (summary, on stderr)
//
// Exit code is 1 if any violation fired, 0 otherwise. Bank-level findings
// (stem-distribution, choice-uniqueness, bank-skeleton) are attributed to
// the first occurrence's file:line where possible; pure bank-wide ones use
// `bank:0` as a synthetic source.

// `--check=` filter: pass-through `null` runs everything; an explicit list
// keeps only matching rule families. Names match the `rule:` prefix in
// emitted messages so `--check=stem,entity` is self-documenting.
function makeChecksFilter(checks) {
  if (!checks || checks.length === 0) return () => true;
  const set = new Set(checks);
  return (name) => set.has(name);
}

/**
 * `--validate-sources` mode: minimal schema check on the four source JSON
 * files. Per Eng F17, deeper schema validation and URL-rot scanning are
 * deferred to a future `scripts/checkSourceUrls.mjs`; this mode only
 * verifies each file loads, parses, and is a non-empty array.
 */
function runValidateSources({ strict }) {
  const sources = [
    { name: 'researchers.json', loader: loadResearchers },
    { name: 'literaryWorks.json', loader: loadLiteraryWorks },
    { name: 'crossTextPairs.json', loader: loadCrossTextPairs },
    { name: 'quantitativeData.json', loader: loadQuantitativeData },
  ];
  const violations = [];
  for (const s of sources) {
    try {
      const data = s.loader();
      if (!Array.isArray(data)) {
        violations.push({ file: s.name, line: 1, message: `source-schema: ${s.name} must export a JSON array (got ${typeof data})` });
        continue;
      }
      if (data.length === 0) {
        violations.push({ file: s.name, line: 1, message: `source-empty: ${s.name} contains 0 entries` });
        continue;
      }
      console.log(`OK   ${s.name}: ${data.length} entries`);
    } catch (e) {
      violations.push({ file: s.name, line: 1, message: `source-load: ${s.name} failed to load (${e.message})` });
    }
  }
  for (const v of violations) console.log(`${v.file}:${v.line} ${v.message}`);
  console.error(`\n${violations.length} source violation(s)${strict ? ' [strict]' : ''}`);
  process.exit(violations.length > 0 ? 1 : 0);
}

/**
 * `--all` / `--test=N` driver: load the target tests, build a flat bank-items
 * array, run every per-item / bank-level / per-test lint, aggregate the
 * violations, sort by test then line, and exit nonzero if any fired.
 */
function runLint({ mode, testNumbers, checks }) {
  const targetTests = mode === 'all'
    ? Array.from({ length: 12 }, (_, i) => i + 1)
    : testNumbers;
  const enabled = makeChecksFilter(checks);

  // Source DBs — fail fast on missing/corrupt files. Every meaningful lint
  // mode needs at least researchers / literaryWorks (for the entity-allow
  // set), so loading them up front gives a clear error if rwSources/ is
  // unset. crossTextPairs / quantitativeData are reserved for future
  // per-skill checks; load lazily when those lints land.
  const researchers = loadResearchers();
  const literaryWorks = loadLiteraryWorks();
  // crossTextPairs.json supplies the canonical Author 1 / Author 2 pairings
  // for cross-text-connections items. Fold both authors into alwaysAllow so
  // CTC items don't fail entity-registry just because the source DB for
  // pairs is separate from researchers.json.
  let crossTextPairs = [];
  try {
    crossTextPairs = loadCrossTextPairs();
  } catch (e) {
    console.error(`warning: crossTextPairs.json unavailable — CTC entity-registry checks may over-flag (${e.message})`);
  }

  // For each registered name, also include its trailing-period-stripped
  // form so passages that drop the period from "Jr.", "Sr.", or "St."
  // suffixes still match. ("Roger Pielke Jr" should look up the same
  // entry as "Roger Pielke Jr.")
  const expandName = (s) => {
    const t = (s || '').trim();
    if (!t) return [];
    const noTrailingPeriod = t.replace(/\.$/, '');
    return noTrailingPeriod !== t ? [t, noTrailingPeriod] : [t];
  };
  const alwaysAllow = new Set([
    ...ALWAYS_ALLOW_SEED,
    ...literaryWorks.flatMap(w => expandName(w.author)),
    ...crossTextPairs.flatMap(p => expandName(p?.text1?.author).concat(expandName(p?.text2?.author))),
  ]);

  // PDF corpus is whole-bank: per-item PDF uniqueness compares against the
  // entire PT4-11 cache (PTs 1-3 and 12 have no CB PDF, but the check still
  // fingerprints against the 8 available forms). Soft-fail to empty corpus
  // if the cache is absent — it's a developer-machine artifact, not a
  // shipped bank invariant.
  let pdfCorpus = [];
  if (enabled('pdf')) {
    try {
      pdfCorpus = loadPdfCorpus();
    } catch (e) {
      console.error(`warning: PDF corpus unavailable — pdf-uniqueness lints will be skipped (${e.message})`);
      pdfCorpus = [];
    }
  }

  const violations = [];
  const bankItems = []; // flat: { testN, file, line, item }

  // F13: wrap each loadRWPracticeTest in try/catch. A vm.runInContext parse
  // error in one file becomes a single `parse-error` violation rather than
  // aborting the whole run. (F13's deeper JSON-balance pre-check for
  // better line numbers is deferred to a follow-up.)
  for (const testN of targetTests) {
    let pt, src, file;
    try {
      ({ pt, src, file } = loadRWPracticeTest(testN));
    } catch (e) {
      violations.push({
        testN,
        file: `practiceTest${testN}RW.js`,
        line: 1,
        message: `parse-error: practiceTest${testN}RW.js failed to load (${e.message})`,
      });
      continue;
    }
    const fileBase = path.basename(file);
    if (!pt || !Array.isArray(pt.modules)) {
      violations.push({
        testN,
        file: fileBase,
        line: 1,
        message: `parse-error: practiceTest${testN}RW.js exports no .modules array`,
      });
      continue;
    }
    const lineIndex = indexRWQuestionLines(src);
    for (let mi = 0; mi < pt.modules.length; mi++) {
      const mod = pt.modules[mi];
      const qs = mod && Array.isArray(mod.questions) ? mod.questions : [];
      for (let qi = 0; qi < qs.length; qi++) {
        const li = lineIndex.find(L => L.moduleIndex === mi && L.modulePosition === qi + 1);
        bankItems.push({
          testN,
          file: fileBase,
          line: li ? li.startLine : 1,
          item: qs[qi],
        });
      }
    }
  }

  // ---- Per-item lints -----------------------------------------------------
  for (const b of bankItems) {
    if (enabled('stem')) {
      const r = validateStem(b.item);
      if (!r.ok) {
        const skill = (b.item && b.item.skill) || '<no-skill>';
        const observed = (r.observed || '').slice(0, 100);
        const msg = r.reason === 'unknown-skill'
          ? `stem-verbatim: skill "${skill}" not in registry — no canonical stem`
          : `stem-verbatim: skill "${skill}" stem ${JSON.stringify(observed)} (expected ${JSON.stringify(r.expected)})`;
        violations.push({ testN: b.testN, file: b.file, line: b.line, message: msg });
      }
    }
    if (enabled('pdf') && pdfCorpus.length > 0) {
      for (const s of validatePdfUniqueness(b.item, pdfCorpus, b.line)) {
        violations.push({ testN: b.testN, file: b.file, line: s.line, message: s.message });
      }
    }
    if (enabled('entity')) {
      for (const s of validateEntityRegistry(b.item, researchers, literaryWorks, alwaysAllow)) {
        violations.push({ testN: b.testN, file: b.file, line: b.line, message: s.message });
      }
    }
    if (enabled('distractor')) {
      for (const s of validateDistractorWords(b.item)) {
        violations.push({ testN: b.testN, file: b.file, line: b.line, message: s.message });
      }
    }
  }

  // ---- Bank-level lints ---------------------------------------------------
  if (enabled('stem-distribution')) {
    const { violations: vs } = validateStemDistribution(bankItems.map(b => b.item));
    for (const v of vs) {
      violations.push({ testN: 0, file: 'bank', line: 0, message: v.message });
    }
  }
  if (enabled('choice-uniqueness')) {
    for (const v of validateChoiceUniqueness(bankItems)) {
      violations.push({
        testN: v.testN,
        file: `practiceTest${v.testN}RW.js`,
        line: v.line,
        message: v.message,
      });
    }
  }
  if (enabled('skeleton')) {
    for (const v of validateBankSkeletons(bankItems)) {
      violations.push({
        testN: v.testN,
        file: `practiceTest${v.testN}RW.js`,
        line: v.line,
        message: v.message,
      });
    }
  }

  // ---- Per-test lints -----------------------------------------------------
  if (enabled('within-test-cloning')) {
    for (const testN of targetTests) {
      const items = bankItems.filter(b => b.testN === testN);
      for (const v of validateWithinTestCloning(items, testN)) {
        violations.push({
          testN: v.testN,
          file: `practiceTest${v.testN}RW.js`,
          line: v.line,
          message: v.message,
        });
      }
    }
  }

  // ---- Emit ---------------------------------------------------------------
  // Sort by testN numerically (0 = bank-wide synthesized rows first), then
  // by line. Alphabetic sort would put PT10 before PT1, which is annoying
  // when triaging a long output.
  violations.sort((a, b) => {
    if (a.testN !== b.testN) return a.testN - b.testN;
    return (a.line || 0) - (b.line || 0);
  });
  for (const v of violations) {
    console.log(`${v.file}:${v.line || 0} ${v.message}`);
  }
  // Summary on stderr so stdout stays a clean stream of violations.
  console.error(`\n${violations.length} violation(s) across ${targetTests.length} test(s) — ${bankItems.length} items linted`);
  process.exit(violations.length > 0 ? 1 : 0);
}

function main() {
  const opts = parseArgs(process.argv);
  if (opts.mode === 'validate-sources') {
    return runValidateSources(opts);
  }
  return runLint(opts);
}

function isMainModule() {
  const entry = process.argv[1];
  if (!entry) return false;
  return import.meta.url === `file://${entry}`
    || import.meta.url.endsWith(path.basename(entry));
}

if (isMainModule()) {
  try {
    main();
  } catch (e) {
    console.error(e.message);
    process.exit(1);
  }
}
