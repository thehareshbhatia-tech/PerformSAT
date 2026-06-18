/**
 * appendAuthored.mjs — turn the rw-reading-type-author workflow output into:
 *   - src/data/questions/rwBank/authoredReadingItems.js  (the drill-only shard)
 *   - data/authored.json  ({ rawId: bucket } merged by buildMap.mjs into the map)
 *
 * Input: data/authored-result.json — the workflow's `accepted` array, shape
 *   [{ bucket, skill, total, min, item:{ difficulty, passage?|studentNotes?,
 *      question, choices, correctAnswer, explanation } }]
 *
 * Run: node scripts/rwReadingTypes/appendAuthored.mjs
 * Then: node scripts/rwReadingTypes/buildMap.mjs   (regenerate rwReadingType.js)
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO = join(__dirname, '..', '..');
const DATA = join(__dirname, 'data');
const SHARD = join(REPO, 'src', 'data', 'questions', 'rwBank', 'authoredReadingItems.js');
const START_ID = 9001;

const SKILL_DOMAIN = {
  'words-in-context': 'craft-and-structure',
  'inferences': 'information-and-ideas',
  'rhetorical-synthesis': 'expression-of-ideas',
  'command-of-evidence-textual': 'information-and-ideas',
};

const raw = JSON.parse(readFileSync(join(DATA, 'authored-raw.json'), 'utf8'));
if (!Array.isArray(raw)) throw new Error('authored-raw.json must be an array of accepted items');

// Keep only items that passed blind verification (verify-pass.json = idx array).
let survivors = raw;
try {
  const passIdx = new Set(JSON.parse(readFileSync(join(DATA, 'verify-pass.json'), 'utf8')));
  survivors = raw.filter((_, idx) => passIdx.has(idx));
  console.log(`Verification survivors: ${survivors.length}/${raw.length}`);
} catch {
  console.warn('⚠ verify-pass.json not found — ingesting ALL graded items (no verification filter).');
}

// Stable order: by bucket, then by descending grade, so id assignment is deterministic.
survivors.sort((a, b) => (a.bucket < b.bucket ? -1 : a.bucket > b.bucket ? 1 : (b.total || 0) - (a.total || 0)));

const LETTERS = ['A', 'B', 'C', 'D'];

// Debias answer position: authoring agents cluster the key (e.g. all 'A').
// Cycle the correct answer through A/B/C/D by sequence index, preserving the
// distractors' relative order. Returns the new choices/key AND the old→new
// letter bijection so the explanation's letter references can be remapped.
function rebalance(choices, key, seq) {
  const target = seq % 4;
  const correct = choices.find((c) => c.id === key);
  const others = choices.filter((c) => c.id !== key); // preserve relative order
  const ordered = [];
  let oi = 0;
  for (let p = 0; p < 4; p++) ordered.push(p === target ? correct : others[oi++]);
  const oldToNew = {};
  const newChoices = ordered.map((c, i) => { oldToNew[c.id] = LETTERS[i]; return { id: LETTERS[i], text: c.text }; });
  return { choices: newChoices, correctAnswer: LETTERS[target], oldToNew };
}

// Remap every choice-letter reference in the explanation through the bijection.
// Covers the phrasings the authored explanations actually use.
function remapExplanation(expl, m) {
  const sub = (L) => m[L] || L;
  return (expl || '')
    .replace(/\b(Choice|choice|Option|option)\s+([A-D])\b/g, (_, w, L) => `${w} ${sub(L)}`)
    .replace(/\b(answer|answers)\s+(is|are)\s+([A-D])\b/g, (_, w, v, L) => `${w} ${v} ${sub(L)}`)
    .replace(/\b([A-D])\s+(and|&|or)\s+([A-D])\b/g, (_, L1, c, L2) => `${sub(L1)} ${c} ${sub(L2)}`)
    .replace(/\(([A-D])\)/g, (_, L) => `(${sub(L)})`);
}

const shardItems = [];
const authoredMap = {};
const perBucket = {};
const warnings = [];
let id = START_ID;
let seq = 0;

for (const rec of survivors) {
  const it = rec.item;
  const { choices, correctAnswer, oldToNew } = rebalance(it.choices, it.correctAnswer, seq);
  const explanation = remapExplanation(it.explanation, oldToNew);
  // Consistency check: if the explanation names "answer is X", it must now be
  // the new correctAnswer.
  const named = explanation.match(/\banswer\s+is\s+([A-D])\b/);
  if (named && named[1] !== correctAnswer) {
    warnings.push(`id ${id} (${rec.bucket}): explanation says answer ${named[1]} but key is ${correctAnswer}`);
  }
  const obj = {
    id,
    type: 'multiple-choice',
    difficulty: it.difficulty || 'medium',
    band: 3,
    domain: SKILL_DOMAIN[rec.skill] || 'craft-and-structure',
    skill: rec.skill,
    question: it.question,
    choices,
    correctAnswer,
    explanation,
    authoredBy: 'performsat-reading-type-fill',
    _meta: { authoredFor: rec.bucket },
  };
  if (it.studentNotes) obj.studentNotes = it.studentNotes;
  else obj.passage = it.passage;
  shardItems.push(obj);
  authoredMap[id] = rec.bucket;
  perBucket[rec.bucket] = (perBucket[rec.bucket] || 0) + 1;
  id += 1;
  seq += 1;
}

if (warnings.length) {
  console.warn(`\n⚠ ${warnings.length} explanation/key inconsistencies after remap:`);
  warnings.forEach((w) => console.warn('  ' + w));
}

const header = `/**
 * authoredReadingItems — drill-only R&W reading items authored to fill thin
 * question-type buckets (rare reading sub-types under the drillable threshold in
 * the 12 practice tests). NEVER part of a practice test; flattened by index.js
 * alongside the test bundles (namespaced \`rw-authored-<id>\`). Type tags live in
 * rwReadingType.js (RW_READING_TYPE_BY_ID), keyed by these raw ids (>=${START_ID}).
 *
 * Generated by scripts/rwReadingTypes/appendAuthored.mjs from the
 * rw-reading-type-author workflow output — do not edit by hand.
 */
export const authoredReadingItems = `;

writeFileSync(SHARD, header + JSON.stringify(shardItems, null, 2) + ';\n');
writeFileSync(join(DATA, 'authored.json'), JSON.stringify(authoredMap, null, 1));

console.log(`Wrote ${shardItems.length} authored items → authoredReadingItems.js (ids ${START_ID}..${id - 1})`);
console.log('Per-bucket authored:', JSON.stringify(perBucket));
console.log('Next: node scripts/rwReadingTypes/buildMap.mjs');
