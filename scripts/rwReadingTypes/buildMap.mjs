/**
 * buildMap.mjs — merge the deterministic classifications (data/deterministic.json)
 * with the LLM-panel classifications (data/classification.json, written from the
 * rw-reading-type-classify workflow result) into the authoritative reading-type
 * map, then generate src/data/questions/rwBank/rwReadingType.js.
 *
 * Mirrors rwGrammarType.js: a per-item map keyed by RAW question id (globally
 * unique across the 12 R&W bundles), consulted by deriveRWPattern.js.
 *
 * Run: node scripts/rwReadingTypes/buildMap.mjs
 *   (after the workflow result is saved to data/classification.json)
 *
 * Validates that EVERY untyped reading item resolves to a type, and reports
 * buckets below the drillable threshold (these feed the authoring phase).
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO = join(__dirname, '..', '..');
const DATA = join(__dirname, 'data');
const OUT = join(REPO, 'src', 'data', 'questions', 'rwBank', 'rwReadingType.js');
const MIN_DRILLABLE = 4;

// Human labels for every surfaced reading sub-type. *-other buckets are
// intentionally absent → PracticeBank's RW_TYPE_LABELS filter hides them, so
// residual items stay skill-level (Tier-3) with no misleading "type" chip.
const LABELS = {
  // Information and Ideas
  'cid-main-idea': 'Main idea',
  'cid-supporting-detail': 'Supporting detail',
  'inf-cause-effect': 'Cause and effect',
  'inf-contrast-qualification': 'Contrast or qualification',
  'inf-generalization-conclusion': 'Generalization',
  'inf-comparison': 'Comparison',
  'inf-prediction-expectation': 'Prediction',
  'coe-text-support-finding': 'Support a hypothesis (finding)',
  'coe-text-illustrate-quote': 'Illustrate a claim (quotation)',
  'coe-quant-complete-statement': 'Complete the statement (data)',
  'coe-quant-support-claim': 'Support a claim with data',
  // Craft and Structure
  'wic-contrast': 'Contrast clue',
  'wic-cause-effect': 'Cause-and-effect clue',
  'wic-example-or-illustration': 'Example clue',
  'wic-restatement': 'Restatement clue',
  'ctc-disagree-challenge': 'Text 2 challenges Text 1',
  'ctc-qualify-complicate': 'Text 2 qualifies Text 1',
  'ctc-support-extend': 'Text 2 supports Text 1',
  'ctc-alternative-explanation': 'Text 2 offers an alternative',
  // Expression of Ideas
  'rs-emphasize-significance': 'Emphasize significance',
  'rs-emphasize-difference': 'Emphasize a difference',
  'rs-emphasize-similarity': 'Emphasize a similarity',
  'rs-introduce-unfamiliar': 'Introduce to a new audience',
  'rs-present-claim': 'Present a central claim',
  'rs-explain-finding': 'Explain a finding',
};

const det = JSON.parse(readFileSync(join(DATA, 'deterministic.json'), 'utf8'));
let llm = {};
try {
  llm = JSON.parse(readFileSync(join(DATA, 'classification.json'), 'utf8'));
} catch {
  console.warn('⚠ data/classification.json not found — run the classify workflow and save its `map` there first. Building with deterministic only.');
}
let authored = {};
try {
  authored = JSON.parse(readFileSync(join(DATA, 'authored.json'), 'utf8'));
} catch {
  // No authored fills yet — fine.
}

// Merge: deterministic wins over llm (no overlap expected); authored items have
// their own raw-id namespace (>=9001), so no collision. All keys are raw qids.
const merged = {};
for (const [id, t] of Object.entries(llm)) merged[Number(id)] = t;
for (const [id, t] of Object.entries(det)) merged[Number(id)] = t;
for (const [id, t] of Object.entries(authored)) merged[Number(id)] = t;

// Validate against the full reading-item set.
const allReading = JSON.parse(readFileSync(join(DATA, 'reading-items.json'), 'utf8'));
const missing = allReading.filter((q) => merged[q.id] == null).map((q) => q.id);
if (missing.length) {
  console.error(`✗ ${missing.length} reading items have NO type:`, missing.slice(0, 30));
}

// Bucket counts.
const counts = {};
for (const t of Object.values(merged)) counts[t] = (counts[t] || 0) + 1;
const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);

console.log(`Merged map: ${Object.keys(merged).length} items / ${allReading.length} reading items`);
console.log('\n=== Buckets (count · drillable? · labeled?) ===');
for (const [t, c] of sorted) {
  const drillable = c >= MIN_DRILLABLE ? 'OK ' : 'THIN';
  const labeled = LABELS[t] ? `"${LABELS[t]}"` : (t.endsWith('-other') ? '(hidden)' : '⚠ NO LABEL');
  console.log(`  ${String(c).padStart(3)}  ${drillable}  ${t.padEnd(32)} ${labeled}`);
}

const thin = sorted.filter(([t, c]) => c < MIN_DRILLABLE && !t.endsWith('-other'));
const surfaced = sorted.filter(([t, c]) => c >= MIN_DRILLABLE && LABELS[t]);
console.log(`\nSurfaced (≥${MIN_DRILLABLE} & labeled): ${surfaced.length} new reading question types`);
console.log(`Thin (<${MIN_DRILLABLE}, need authoring): ${thin.map(([t, c]) => `${t}(${c})`).join(', ') || 'none'}`);

// ── Generate rwReadingType.js ────────────────────────────────────────────────
const mapEntries = Object.entries(merged)
  .sort((a, b) => Number(a[0]) - Number(b[0]))
  .map(([id, t]) => `  ${id}: '${t}',`)
  .join('\n');

const labelEntries = Object.entries(LABELS)
  .map(([slug, label]) => `  '${slug}': '${label.replace(/'/g, "\\'")}',`)
  .join('\n');

const file = `/**
 * Authoritative reading-skill question-type tags for the 7 R&W skills that have
 * no deterministic punctuation/grammar signal: words-in-context,
 * central-ideas-and-details, inferences, command-of-evidence-textual,
 * command-of-evidence-quantitative, cross-text-connections, rhetorical-synthesis.
 *
 * The grammar/punctuation skills are typed in rwGrammarType.js + deriveRWPattern.js.
 * These reading skills used to surface NO question types in the Practice Bank
 * (just a single "Drill" button). This map gives each item a question-type
 * sub-bucket so PracticeBank can offer the same fine-grained drilling math has.
 *
 * ── How each item was typed ──────────────────────────────────────────────────
 * Deterministic (stem / studentNotes.goal): central-ideas (main-idea vs detail),
 * command-of-evidence-quantitative (complete-statement vs support-claim),
 * command-of-evidence-textual (support-finding vs illustrate-quote), and most
 * rhetorical-synthesis (goal-driven). Semantic (3-voter diverse-lens panel with
 * adjudication, scripts/rwReadingTypes/classify.workflow.js): words-in-context
 * (context-clue type), inferences (logical relation), cross-text-connections
 * (Text 2's stance), and residual synthesis. Last generated by
 * scripts/rwReadingTypes/buildMap.mjs.
 *
 * ── Keying ───────────────────────────────────────────────────────────────────
 * Keyed by the raw, per-bundle question id (globally unique across the 12 R&W
 * bundles) — the only id present on BOTH item shapes deriveRWPattern sees: the
 * flattened bank item (sourceQuestionId) and the raw bundle item (id). Mirrors
 * rwGrammarType.js exactly.
 */
export const RW_READING_TYPE_BY_ID = {
${mapEntries}
};

/**
 * Human labels for the surfaced reading question types (used by the Practice
 * Bank type chips + the "Practicing: <type>" drill chip). \`*-other\` buckets are
 * intentionally omitted so residual items stay skill-level with no type chip.
 */
export const RW_READING_TYPE_LABELS = {
${labelEntries}
};

/**
 * Returns the authoritative reading sub-type slug for an item (or null), or
 * \`undefined\` if the item is not in the map (caller should fall back). Accepts
 * either item shape: flattened bank items carry \`sourceQuestionId\`; raw bundle
 * items carry a numeric \`id\`.
 *
 * @param {object} item - an R&W item (bundle shape or flattened bank shape)
 * @returns {string|null|undefined}
 */
export function getReadingType(item) {
  if (!item) return undefined;
  const rawId = item.sourceQuestionId != null ? item.sourceQuestionId : item.id;
  if (rawId == null) return undefined;
  return Object.prototype.hasOwnProperty.call(RW_READING_TYPE_BY_ID, rawId)
    ? RW_READING_TYPE_BY_ID[rawId]
    : undefined;
}
`;

writeFileSync(OUT, file);
console.log(`\nWrote ${OUT}`);
