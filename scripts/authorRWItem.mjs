#!/usr/bin/env node
/**
 * R&W item authoring driver — Phase 5 of the autoplan.
 *
 * One driver per test. Walks a fixed (skill, difficulty) blueprint of
 * 54 items per test, calls the authoring back-end (stub or real Anthropic
 * SDK call gated by `--real`), persists each item as `q{NN}.json`, and
 * tracks progress + retries + token/cost telemetry via a per-test
 * manifest. `--resume` skips items already marked `done` and re-runs
 * failures.
 *
 * Usage:
 *   node scripts/authorRWItem.mjs --test=1                # stub authoring
 *   node scripts/authorRWItem.mjs --test=1 --real         # real LLM authoring
 *   node scripts/authorRWItem.mjs --test=1 --resume
 *   node scripts/authorRWItem.mjs --test=1 --q=14 --real
 *   node scripts/authorRWItem.mjs --all --real
 *   node scripts/authorRWItem.mjs --test=1 --dry-run
 *
 * Exit code: 0 if all items in the target ended up `done`, 1 if any
 * remained `failed` after retries (or on parseArgs failure).
 *
 * Output layout:
 *   scripts/generated/manifests/practiceTest{N}RW-manifest.json
 *   scripts/generated/authored/test{N}/q{NN}.json    # one per item
 *
 * The assembler (separate script, S6+) walks the authored/ dir and
 * splices items back into `src/data/practiceTests/practiceTest{N}RW.js`.
 *
 * Stub vs real authoring:
 *   - Stub (default, no `--real`): per-item lint-clean using canonical stems +
 *     registered entities. Fast (~1ms/item). Bank-level lints WILL fire on
 *     stubs — they're a harness check, not a content check. Use this to
 *     exercise the manifest, --resume, --q=, --dry-run plumbing.
 *   - Real (`--real`): calls Anthropic Messages API with the full rubric
 *     (`docs/CB_RW_AUTHENTICITY_RUBRIC.md`) cached as the system prompt;
 *     each per-item call only sends the slot spec + a chosen source, so
 *     subsequent calls hit the cache (~21K tokens, ~$0.06 → $0.006 per
 *     read). Adaptive thinking, structured-output JSON schema, per-call
 *     telemetry written to the manifest. Requires ANTHROPIC_API_KEY.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import Anthropic from '@anthropic-ai/sdk';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');
const GEN_DIR = process.env.RW_GEN_DIR || path.join(ROOT, 'scripts', 'generated');
const RW_SOURCES_DIR = path.join(GEN_DIR, 'rwSources');
const MANIFEST_DIR = path.join(GEN_DIR, 'manifests');
const AUTHORED_DIR = path.join(GEN_DIR, 'authored');

// Pulled from validateRWBank so stub questions match the registry's canonical
// stem for their declared skill — the per-item stem lint then passes.
const { RW_STEM_REGISTRY } = await import(`file://${path.join(ROOT, 'scripts', 'validateRWBank.mjs')}`);

// ---------------------------------------------------------------------------
// BLUEPRINT — 54-item (skill, difficulty, module) sequence per test.
// ---------------------------------------------------------------------------
//
// Extracted 2026-05-06 from `src/data/practiceTests/practiceTest4RW.js`
// (existing reference test). The structural order matches the official
// digital SAT R&W blueprint:
//
//   Module 1 (27): WiC×3, TS&P×2, CTC×2, CID×3, Inf×3, COE alt×4 (Q/T/Q/T),
//                  SEC alt×6 (B/F/B/F/B/F), Trans×2, RhetSyn×2
//   Module 2 (27): same shape, harder difficulty distribution
//
// Per memory feedback: vocab first, notes (rhetorical-synthesis) last;
// COE and Conventions ALTERNATE within their clusters, not grouped.
//
// This blueprint may shift in S5/S6 as we cross-check against CB official
// PT4-11 PDFs. Treat it as the starting point, not a contract.

const BLUEPRINT = [
  // --- Module 1 ---
  { qIndex: 1,  module: 1, skill: 'words-in-context',                difficulty: 'easy'   },
  { qIndex: 2,  module: 1, skill: 'words-in-context',                difficulty: 'easy'   },
  { qIndex: 3,  module: 1, skill: 'words-in-context',                difficulty: 'medium' },
  { qIndex: 4,  module: 1, skill: 'text-structure-and-purpose',      difficulty: 'medium' },
  { qIndex: 5,  module: 1, skill: 'text-structure-and-purpose',      difficulty: 'easy'   },
  { qIndex: 6,  module: 1, skill: 'cross-text-connections',          difficulty: 'medium' },
  { qIndex: 7,  module: 1, skill: 'cross-text-connections',          difficulty: 'hard'   },
  { qIndex: 8,  module: 1, skill: 'central-ideas-and-details',       difficulty: 'easy'   },
  { qIndex: 9,  module: 1, skill: 'central-ideas-and-details',       difficulty: 'medium' },
  { qIndex: 10, module: 1, skill: 'central-ideas-and-details',       difficulty: 'medium' },
  { qIndex: 11, module: 1, skill: 'inferences',                      difficulty: 'medium' },
  { qIndex: 12, module: 1, skill: 'inferences',                      difficulty: 'medium' },
  { qIndex: 13, module: 1, skill: 'inferences',                      difficulty: 'hard'   },
  { qIndex: 14, module: 1, skill: 'command-of-evidence-quantitative', difficulty: 'medium' },
  { qIndex: 15, module: 1, skill: 'command-of-evidence-textual',     difficulty: 'medium' },
  { qIndex: 16, module: 1, skill: 'command-of-evidence-quantitative', difficulty: 'hard'   },
  { qIndex: 17, module: 1, skill: 'command-of-evidence-textual',     difficulty: 'medium' },
  { qIndex: 18, module: 1, skill: 'boundaries',                      difficulty: 'easy'   },
  { qIndex: 19, module: 1, skill: 'form-structure-and-sense',        difficulty: 'easy'   },
  { qIndex: 20, module: 1, skill: 'boundaries',                      difficulty: 'medium' },
  { qIndex: 21, module: 1, skill: 'form-structure-and-sense',        difficulty: 'medium' },
  { qIndex: 22, module: 1, skill: 'boundaries',                      difficulty: 'medium' },
  { qIndex: 23, module: 1, skill: 'form-structure-and-sense',        difficulty: 'medium' },
  { qIndex: 24, module: 1, skill: 'transitions',                     difficulty: 'medium' },
  { qIndex: 25, module: 1, skill: 'transitions',                     difficulty: 'hard'   },
  { qIndex: 26, module: 1, skill: 'rhetorical-synthesis',            difficulty: 'medium' },
  { qIndex: 27, module: 1, skill: 'rhetorical-synthesis',            difficulty: 'hard'   },
  // --- Module 2 (harder ramp) ---
  { qIndex: 28, module: 2, skill: 'words-in-context',                difficulty: 'medium' },
  { qIndex: 29, module: 2, skill: 'words-in-context',                difficulty: 'medium' },
  { qIndex: 30, module: 2, skill: 'words-in-context',                difficulty: 'hard'   },
  { qIndex: 31, module: 2, skill: 'text-structure-and-purpose',      difficulty: 'medium' },
  { qIndex: 32, module: 2, skill: 'text-structure-and-purpose',      difficulty: 'medium' },
  { qIndex: 33, module: 2, skill: 'cross-text-connections',          difficulty: 'hard'   },
  { qIndex: 34, module: 2, skill: 'cross-text-connections',          difficulty: 'hard'   },
  { qIndex: 35, module: 2, skill: 'central-ideas-and-details',       difficulty: 'medium' },
  { qIndex: 36, module: 2, skill: 'central-ideas-and-details',       difficulty: 'medium' },
  { qIndex: 37, module: 2, skill: 'central-ideas-and-details',       difficulty: 'hard'   },
  { qIndex: 38, module: 2, skill: 'inferences',                      difficulty: 'medium' },
  { qIndex: 39, module: 2, skill: 'inferences',                      difficulty: 'hard'   },
  { qIndex: 40, module: 2, skill: 'inferences',                      difficulty: 'hard'   },
  { qIndex: 41, module: 2, skill: 'command-of-evidence-quantitative', difficulty: 'medium' },
  { qIndex: 42, module: 2, skill: 'command-of-evidence-textual',     difficulty: 'medium' },
  { qIndex: 43, module: 2, skill: 'command-of-evidence-quantitative', difficulty: 'hard'   },
  { qIndex: 44, module: 2, skill: 'command-of-evidence-textual',     difficulty: 'medium' },
  { qIndex: 45, module: 2, skill: 'boundaries',                      difficulty: 'medium' },
  { qIndex: 46, module: 2, skill: 'form-structure-and-sense',        difficulty: 'medium' },
  { qIndex: 47, module: 2, skill: 'boundaries',                      difficulty: 'medium' },
  { qIndex: 48, module: 2, skill: 'form-structure-and-sense',        difficulty: 'medium' },
  { qIndex: 49, module: 2, skill: 'boundaries',                      difficulty: 'hard'   },
  { qIndex: 50, module: 2, skill: 'form-structure-and-sense',        difficulty: 'hard'   },
  { qIndex: 51, module: 2, skill: 'transitions',                     difficulty: 'hard'   },
  { qIndex: 52, module: 2, skill: 'transitions',                     difficulty: 'hard'   },
  { qIndex: 53, module: 2, skill: 'rhetorical-synthesis',            difficulty: 'hard'   },
  { qIndex: 54, module: 2, skill: 'rhetorical-synthesis',            difficulty: 'hard'   },
];

const SKILL_TO_DOMAIN = {
  'words-in-context': 'craft-and-structure',
  'text-structure-and-purpose': 'craft-and-structure',
  'cross-text-connections': 'craft-and-structure',
  'central-ideas-and-details': 'information-and-ideas',
  'inferences': 'information-and-ideas',
  'command-of-evidence-textual': 'information-and-ideas',
  'command-of-evidence-quantitative': 'information-and-ideas',
  'boundaries': 'standard-english-conventions',
  'form-structure-and-sense': 'standard-english-conventions',
  'transitions': 'expression-of-ideas',
  'rhetorical-synthesis': 'expression-of-ideas',
};

const DIFFICULTY_TO_BAND = { easy: 2, medium: 3, hard: 4 };

// ---------------------------------------------------------------------------
// CLI — parseArgs (mirrors validateRWBank shape)
// ---------------------------------------------------------------------------

function parseArgs(argv) {
  const args = argv.slice(2);
  const TEST_ARG = args.find(a => a.startsWith('--test='));
  const Q_ARG = args.find(a => a.startsWith('--q='));
  const ALL = args.includes('--all');
  const RESUME = args.includes('--resume');
  const DRY_RUN = args.includes('--dry-run');
  const REAL = args.includes('--real');

  if (!TEST_ARG && !ALL) {
    throw new Error('--test=<n> or --all is required');
  }
  const testNumbers = ALL
    ? Array.from({ length: 12 }, (_, i) => i + 1)
    : TEST_ARG.split('=')[1].split(',').map(n => parseInt(n, 10));
  for (const n of testNumbers) {
    if (!Number.isInteger(n) || n < 1 || n > 12) {
      throw new Error(`--test value must be 1-12 (got ${n})`);
    }
  }
  const qIndexes = Q_ARG
    ? Q_ARG.split('=')[1].split(',').map(n => parseInt(n, 10))
    : null;
  if (qIndexes) {
    for (const q of qIndexes) {
      if (!Number.isInteger(q) || q < 1 || q > 54) {
        throw new Error(`--q value must be 1-54 (got ${q})`);
      }
    }
  }
  return { testNumbers, qIndexes, resume: RESUME, dryRun: DRY_RUN, real: REAL };
}

// ---------------------------------------------------------------------------
// Source DB loaders + stub source picker
// ---------------------------------------------------------------------------

function loadJson(p) {
  return JSON.parse(fs.readFileSync(p, 'utf8'));
}

function loadSources() {
  return {
    researchers: loadJson(path.join(RW_SOURCES_DIR, 'researchers.json')),
    literaryWorks: loadJson(path.join(RW_SOURCES_DIR, 'literaryWorks.json')),
    crossTextPairs: loadJson(path.join(RW_SOURCES_DIR, 'crossTextPairs.json')),
    quantitativeData: loadJson(path.join(RW_SOURCES_DIR, 'quantitativeData.json')),
  };
}

/**
 * Deterministic source pick: hash (testN, qIndex) into the appropriate DB.
 * Distinct (testN, qIndex) tuples map to distinct entries when the DB is
 * large enough — researchers.json (100) easily covers all 648 items in
 * the bank, but with collisions every 100 picks. That's fine for stubs;
 * S5 prompts will pick by skill-suitability rather than pure hash.
 */
function pickSource(skill, testN, qIndex, sources) {
  const seed = testN * 1000 + qIndex;
  // Skills with literary anchor → prefer literaryWorks; everything else →
  // researchers. This is rough but enough for the stub's per-item lint
  // pass on validateEntityRegistry (registered name OR registered work).
  const usesLiterary = skill === 'words-in-context' || skill === 'text-structure-and-purpose';
  if (usesLiterary && sources.literaryWorks.length > 0) {
    return { kind: 'literary', entry: sources.literaryWorks[seed % sources.literaryWorks.length] };
  }
  return { kind: 'researcher', entry: sources.researchers[seed % sources.researchers.length] };
}

// ---------------------------------------------------------------------------
// Stub authoring back-end
// ---------------------------------------------------------------------------

/**
 * Build a stub item for the given blueprint slot. Lint expectations:
 *   - validateStem: ✅ uses RW_STEM_REGISTRY[skill].canonical
 *   - validatePdfUniqueness: ✅ stub prose is LLM-free fabrication, not in PT4-11
 *   - validateEntityRegistry: ✅ uses real name from researchers.json /
 *       literaryWorks.json
 *   - validateDistractorWords: ✅ all clean dictionary words
 *   - validateChoiceUniqueness: ⚠️ stubs reuse the same choice template per
 *       skill family — bank-level run will flag this; expected until S5
 *   - validateBankSkeletons: ⚠️ stub passages share structural opening per
 *       skill — also expected to fire bank-level until S5
 */
function stubAuthorOne({ testN, qIndex, module: mod, skill, difficulty }, sources) {
  const source = pickSource(skill, testN, qIndex, sources);
  const passage = stubPassage(source);
  const stem = (RW_STEM_REGISTRY[skill] && RW_STEM_REGISTRY[skill].canonical)
    || 'Which choice best completes the text?';
  const choices = stubChoicesFor(skill, qIndex);

  return {
    id: testN * 100 + qIndex,
    type: 'multiple-choice',
    difficulty,
    band: DIFFICULTY_TO_BAND[difficulty] || 3,
    domain: SKILL_TO_DOMAIN[skill] || 'information-and-ideas',
    skill,
    module: mod,
    passage,
    question: stem,
    choices,
    correctAnswer: 'C',
    explanation: '[stub explanation — replaced in S5 by the real authoring prompt output]',
    _stub: true, // marker so the assembler can refuse to ship stubs
  };
}

function stubPassage({ kind, entry }) {
  if (kind === 'literary') {
    // Literary stub — names the author and a real work title from the entry.
    return `In ${entry.title}, ${entry.author} explores themes of ${(entry.themes || ['perception']).slice(0, 2).join(' and ')}, often returning to images that resist easy summary. The work, first published in ${entry.year}, has been read across generations as both an artifact of its moment and an open invitation to readers in later periods. Critics have continued to disagree about which thread carries the most weight.`;
  }
  // Researcher stub — names the researcher and grounds in their actual field.
  const knownFor = (entry.knownFor || ['the topic']).slice(0, 1)[0];
  const claim = entry.publications && entry.publications[0] && entry.publications[0].claim
    ? entry.publications[0].claim
    : `findings that have shifted prior assumptions in ${entry.field || 'the field'}`;
  return `In recent fieldwork, the ${entry.field || 'researcher'} ${entry.name} has examined ${knownFor}. Across multiple sites and review by independent teams, the analysis suggests that ${claim}. The work points to several open questions for follow-up study.`;
}

// Distinct distractor pools per qIndex prevent the simple "all four choices
// are the same template" failure of the original stub pass. Choice-uniqueness
// will still fire bank-level (since stubs cycle through ~20 pools) — that's
// expected until S5 prompts produce real per-item distractor diversity.
const STUB_CHOICE_POOLS = [
  ['scrutinize', 'overlook', 'reconcile', 'dismiss'],
  ['gather', 'evade', 'arrive', 'depart'],
  ['confirm the prevailing view', 'undermine the prevailing view', 'broaden the prevailing view', 'rephrase the prevailing view'],
  ['narrow the inquiry', 'extend the inquiry', 'redirect the inquiry', 'abandon the inquiry'],
  ['the team underestimated the variability of the data', 'the team underestimated the role of seasonal effects', 'the team underestimated the contribution of long-term trends', 'the team underestimated the influence of measurement noise'],
  ['the researchers assumed a uniform climate baseline', 'the researchers assumed a uniform sampling protocol', 'the researchers assumed a uniform population structure', 'the researchers assumed a uniform measurement instrument'],
  ['the data contradict the predicted relationship', 'the data partially confirm the predicted relationship', 'the data confirm the predicted relationship', 'the data are silent on the predicted relationship'],
];

function stubChoicesFor(skill, qIndex) {
  const pool = STUB_CHOICE_POOLS[qIndex % STUB_CHOICE_POOLS.length];
  return pool.map((text, i) => ({ id: 'ABCD'[i], text }));
}

// ---------------------------------------------------------------------------
// Real authoring back-end (Anthropic SDK)
// ---------------------------------------------------------------------------
//
// The full rubric goes into the `system` prompt with a `cache_control`
// breakpoint. On the first call the rubric is written to cache (~1.25× the
// base input price); every subsequent call reads from cache (~0.1×). With
// the rubric at ~21K tokens and 648 items in the bank, caching saves
// roughly $40 of system-prompt cost per regen on Sonnet 4.6 alone.
//
// Adaptive thinking is enabled per skill guidance — Claude decides when to
// think and how deep based on the slot's difficulty/skill. Output is
// constrained via `output_config.format` JSON schema so the response is a
// directly-parseable item shape. Token + cost telemetry from response.usage
// is written back to the manifest entry for cost tracking.

const RUBRIC_PATH = path.join(ROOT, 'docs', 'CB_RW_AUTHENTICITY_RUBRIC.md');
const REAL_MODEL = 'claude-sonnet-4-6';

// Lazy-loaded so missing rubric / API key only error when --real is used.
let _rubricText = null;
let _anthropicClient = null;

function loadRubricOnce() {
  if (_rubricText !== null) return _rubricText;
  if (!fs.existsSync(RUBRIC_PATH)) {
    throw new Error(`rubric missing at ${RUBRIC_PATH} — required for --real authoring`);
  }
  _rubricText = fs.readFileSync(RUBRIC_PATH, 'utf8');
  return _rubricText;
}

function getAnthropicClient() {
  if (_anthropicClient !== null) return _anthropicClient;
  if (!process.env.ANTHROPIC_API_KEY) {
    throw new Error(
      'ANTHROPIC_API_KEY env var is required for --real authoring. '
      + 'Set it (e.g. `! export ANTHROPIC_API_KEY=sk-...`) and try again.'
    );
  }
  _anthropicClient = new Anthropic();
  return _anthropicClient;
}

// JSON schema for the authored item — matches the existing R&W item shape
// (see `feedback_rw_module_flow` memory + practiceTestNRW.js). Variants
// like `passages` (cross-text) / `studentNotes` (rhetorical-synthesis) /
// `questionTable` (COE-quantitative) aren't part of this base schema; the
// model can include the relevant content inside `passage` for stub-grade
// outputs in S5, and the schema can grow to allow them in S6 when we have
// real cross-text + notes prompts.
const ITEM_SCHEMA = {
  type: 'object',
  properties: {
    id: { type: 'integer' },
    type: { const: 'multiple-choice' },
    difficulty: { enum: ['easy', 'medium', 'hard'] },
    band: { type: 'integer' },
    domain: {
      enum: ['craft-and-structure', 'information-and-ideas', 'standard-english-conventions', 'expression-of-ideas'],
    },
    skill: {
      enum: [
        'words-in-context', 'text-structure-and-purpose', 'cross-text-connections',
        'central-ideas-and-details', 'inferences',
        'command-of-evidence-textual', 'command-of-evidence-quantitative',
        'boundaries', 'form-structure-and-sense',
        'transitions', 'rhetorical-synthesis',
      ],
    },
    passage: { type: 'string' },
    question: { type: 'string' },
    choices: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          id: { enum: ['A', 'B', 'C', 'D'] },
          text: { type: 'string' },
        },
        required: ['id', 'text'],
        additionalProperties: false,
      },
    },
    correctAnswer: { enum: ['A', 'B', 'C', 'D'] },
    explanation: { type: 'string' },
  },
  required: ['id', 'type', 'difficulty', 'band', 'domain', 'skill', 'passage', 'question', 'choices', 'correctAnswer', 'explanation'],
  additionalProperties: false,
};

// Sonnet 4.6 pricing as of 2026 cache: $3 input / $15 output per 1M tokens.
// Cache write = 1.25× input; cache read = 0.1× input.
const SONNET_INPUT_PER_TOKEN = 3 / 1_000_000;
const SONNET_OUTPUT_PER_TOKEN = 15 / 1_000_000;
const SONNET_CACHE_WRITE_PER_TOKEN = SONNET_INPUT_PER_TOKEN * 1.25;
const SONNET_CACHE_READ_PER_TOKEN = SONNET_INPUT_PER_TOKEN * 0.1;

function calcCostUSD(usage) {
  return (
    (usage.input_tokens || 0) * SONNET_INPUT_PER_TOKEN
    + (usage.cache_creation_input_tokens || 0) * SONNET_CACHE_WRITE_PER_TOKEN
    + (usage.cache_read_input_tokens || 0) * SONNET_CACHE_READ_PER_TOKEN
    + (usage.output_tokens || 0) * SONNET_OUTPUT_PER_TOKEN
  );
}

function buildUserMessage({ testN, qIndex, mod, skill, difficulty, source }) {
  let sourceSummary;
  if (source.kind === 'researcher') {
    const r = source.entry;
    const knownFor = (r.knownFor || []).join(', ');
    const sampleClaim = r.publications && r.publications[0] && r.publications[0].claim;
    sourceSummary = [
      `Source kind: researcher`,
      `Name: ${r.name}`,
      `Field: ${r.field || 'unspecified'}`,
      r.affiliation ? `Affiliation: ${r.affiliation}` : null,
      knownFor ? `Known for: ${knownFor}` : null,
      sampleClaim ? `Sample documented claim: ${sampleClaim}` : null,
      r.passagePromptHint ? `Passage hint: ${r.passagePromptHint}` : null,
    ].filter(Boolean).join('\n');
  } else {
    const w = source.entry;
    sourceSummary = [
      `Source kind: literary work`,
      `Author: ${w.author}`,
      `Work: ${w.title} (${w.year})`,
      w.genre ? `Genre: ${w.genre}` : null,
      w.themes ? `Themes: ${(w.themes || []).join(', ')}` : null,
    ].filter(Boolean).join('\n');
  }

  return [
    `Author one R&W item for the following slot:`,
    ``,
    `  testN: ${testN}`,
    `  qIndex: ${qIndex} (id should be ${testN * 100 + qIndex})`,
    `  module: ${mod}`,
    `  skill: ${skill}`,
    `  difficulty: ${difficulty}`,
    ``,
    `Anchor the item on this source — use its named entity/title verbatim;`,
    `do NOT invent researchers, works, or studies:`,
    ``,
    sourceSummary,
    ``,
    `Constraints:`,
    `- Use the canonical stem for "${skill}" from §1 of the rubric, verbatim.`,
    `- Four choices A/B/C/D, each ≤80 words. No malformed words. Distractors plausible per §2.`,
    `- Passage: 50-150 words for non-cross-text skills, original prose, distinct from CB PT4-11 PDFs (§10).`,
    `- Per §9 invariants: do NOT reuse skeletons or templated openings from other items in the bank.`,
    `- Return ONLY the JSON item per the output schema. No commentary, no markdown fences.`,
  ].join('\n');
}

async function realAuthorOne(slot, sources) {
  const { testN, qIndex, module: mod, skill, difficulty } = slot;
  const source = pickSource(skill, testN, qIndex, sources);
  const userMessage = buildUserMessage({ testN, qIndex, mod, skill, difficulty, source });
  const client = getAnthropicClient();
  const rubric = loadRubricOnce();

  const response = await client.messages.create({
    model: REAL_MODEL,
    max_tokens: 8000,
    thinking: { type: 'adaptive' },
    system: [
      {
        type: 'text',
        text: 'You are an expert SAT R&W item author. Adhere strictly to the rubric below — every item you produce must pass the rubric\'s per-item rules and the bank-level invariants.\n\n' + rubric,
        cache_control: { type: 'ephemeral' },
      },
    ],
    messages: [{ role: 'user', content: userMessage }],
    output_config: {
      format: { type: 'json_schema', schema: ITEM_SCHEMA },
    },
  });

  // With output_config.format, the model emits exactly one JSON text block
  // matching the schema. Parse it; if parsing fails, the schema enforcement
  // surfaced something we should debug, so re-throw with the raw text.
  const textBlock = response.content.find(b => b.type === 'text');
  if (!textBlock) {
    throw new Error(`real authoring returned no text block (stop_reason=${response.stop_reason})`);
  }
  let item;
  try {
    item = JSON.parse(textBlock.text);
  } catch (e) {
    throw new Error(`real authoring returned non-JSON output: ${textBlock.text.slice(0, 200)}…`);
  }
  return { item, usage: response.usage };
}

// ---------------------------------------------------------------------------
// Manifest persistence
// ---------------------------------------------------------------------------

function manifestPath(testN) {
  return path.join(MANIFEST_DIR, `practiceTest${testN}RW-manifest.json`);
}

function authoredItemPath(testN, qIndex) {
  return path.join(AUTHORED_DIR, `test${testN}`, `q${String(qIndex).padStart(2, '0')}.json`);
}

function loadOrInitManifest(testN) {
  const p = manifestPath(testN);
  if (fs.existsSync(p)) {
    return JSON.parse(fs.readFileSync(p, 'utf8'));
  }
  return {
    testN,
    version: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    items: BLUEPRINT.map(b => ({
      qIndex: b.qIndex,
      module: b.module,
      skill: b.skill,
      difficulty: b.difficulty,
      status: 'pending',
      retries: 0,
      lastError: null,
      outputPath: null,
      elapsedMs: null,
    })),
  };
}

function saveManifest(manifest) {
  manifest.updatedAt = new Date().toISOString();
  fs.mkdirSync(MANIFEST_DIR, { recursive: true });
  fs.writeFileSync(manifestPath(manifest.testN), JSON.stringify(manifest, null, 2));
}

// ---------------------------------------------------------------------------
// Per-test driver
// ---------------------------------------------------------------------------

async function authorTest(testN, opts, sources) {
  const manifest = loadOrInitManifest(testN);
  // Filter to the slots we should touch this run.
  const candidates = manifest.items.filter(it => {
    if (opts.qIndexes && !opts.qIndexes.includes(it.qIndex)) return false;
    if (opts.resume && it.status === 'done') return false;
    return true;
  });

  if (candidates.length === 0) {
    console.log(`  test ${testN}: nothing to do (resume=${opts.resume}, q=${opts.qIndexes ? opts.qIndexes.join(',') : 'all'})`);
    return { testN, attempted: 0, succeeded: 0, failed: 0, costUSD: 0 };
  }

  let succeeded = 0;
  let failed = 0;
  let totalCost = 0;
  const totalSlots = manifest.items.length;
  const mode = opts.real ? 'real' : 'stub';
  fs.mkdirSync(path.join(AUTHORED_DIR, `test${testN}`), { recursive: true });

  for (const slot of candidates) {
    const label = `[T${testN}Q${String(slot.qIndex).padStart(2, '0')} / ${totalSlots}] ${slot.skill} ${slot.difficulty}`;
    if (opts.dryRun) {
      console.log(`  ${label} … (dry-run, skipped)`);
      continue;
    }
    const t0 = Date.now();
    slot.status = 'authoring';
    saveManifest(manifest);

    try {
      const result = opts.real
        ? await realAuthorOne({ testN, ...slot }, sources)
        : { item: stubAuthorOne({ testN, ...slot }, sources), usage: null };
      const out = authoredItemPath(testN, slot.qIndex);
      fs.writeFileSync(out, JSON.stringify(result.item, null, 2));
      slot.status = 'done';
      slot.outputPath = path.relative(ROOT, out);
      slot.lastError = null;
      slot.elapsedMs = Date.now() - t0;
      slot.authoringMode = mode;
      // Token + cost telemetry on real authoring; null on stub to keep
      // manifest entries shape-stable between modes.
      if (result.usage) {
        slot.inputTokens = result.usage.input_tokens || 0;
        slot.cacheReadTokens = result.usage.cache_read_input_tokens || 0;
        slot.cacheWriteTokens = result.usage.cache_creation_input_tokens || 0;
        slot.outputTokens = result.usage.output_tokens || 0;
        slot.costUSD = calcCostUSD(result.usage);
        totalCost += slot.costUSD;
      } else {
        slot.inputTokens = slot.cacheReadTokens = slot.cacheWriteTokens = slot.outputTokens = null;
        slot.costUSD = null;
      }
      succeeded++;
      const cacheNote = result.usage
        ? ` $${slot.costUSD.toFixed(4)} cache:${slot.cacheReadTokens || 0}r/${slot.cacheWriteTokens || 0}w`
        : '';
      console.log(`  ${label} … ✓ ${slot.elapsedMs}ms (${mode})${cacheNote}`);
    } catch (e) {
      slot.status = 'failed';
      slot.retries = (slot.retries || 0) + 1;
      slot.lastError = e.message;
      slot.elapsedMs = Date.now() - t0;
      failed++;
      console.error(`  ${label} … ✗ ${e.message}`);
    } finally {
      saveManifest(manifest);
    }
  }

  return { testN, attempted: candidates.length, succeeded, failed, costUSD: totalCost };
}

// ---------------------------------------------------------------------------
// main()
// ---------------------------------------------------------------------------

async function main() {
  const opts = parseArgs(process.argv);
  const mode = opts.real ? 'real' : 'stub';
  console.log(`authorRWItem.mjs — mode=${mode} tests=${opts.testNumbers.join(',')} resume=${opts.resume} dryRun=${opts.dryRun}${opts.qIndexes ? ' q=' + opts.qIndexes.join(',') : ''}`);
  const sources = loadSources();

  let totalAttempted = 0;
  let totalSucceeded = 0;
  let totalFailed = 0;
  let totalCost = 0;
  for (const testN of opts.testNumbers) {
    const r = await authorTest(testN, opts, sources);
    totalAttempted += r.attempted;
    totalSucceeded += r.succeeded;
    totalFailed += r.failed;
    totalCost += r.costUSD || 0;
  }

  const costSuffix = totalCost > 0 ? ` ($${totalCost.toFixed(4)} on ${REAL_MODEL})` : '';
  console.log(`\nSummary: ${totalSucceeded}/${totalAttempted} authored, ${totalFailed} failed across ${opts.testNumbers.length} test(s)${costSuffix}`);
  process.exit(totalFailed > 0 ? 1 : 0);
}

function isMainModule() {
  const entry = process.argv[1];
  if (!entry) return false;
  return import.meta.url === `file://${entry}`
    || import.meta.url.endsWith(path.basename(entry));
}

if (isMainModule()) {
  main().catch(e => {
    console.error(e.message);
    process.exit(1);
  });
}

// Exports for testing.
export {
  BLUEPRINT,
  SKILL_TO_DOMAIN,
  DIFFICULTY_TO_BAND,
  REAL_MODEL,
  ITEM_SCHEMA,
  parseArgs,
  pickSource,
  stubAuthorOne,
  realAuthorOne,
  buildUserMessage,
  calcCostUSD,
  loadOrInitManifest,
  saveManifest,
  manifestPath,
  authoredItemPath,
};
