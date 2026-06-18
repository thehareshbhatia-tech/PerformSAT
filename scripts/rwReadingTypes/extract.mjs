/**
 * extract.mjs — pull every R&W item from the 7 currently-untyped reading skills
 * out of the 12 practice-test bundles, apply the DETERMINISTIC sub-type rules
 * (stem / studentNotes.goal driven), and report what is left for the LLM panel.
 *
 * Outputs (under ./data/):
 *   - reading-items.json   — full content of all 408 reading items (for the
 *                            classification workflow to read)
 *   - deterministic.json   — { [rawQid]: 'type-slug' } for items resolved here
 *   - needs-llm.json       — array of rawQids still needing semantic classification
 *
 * Run: node scripts/rwReadingTypes/extract.mjs
 *
 * Keyed by the raw per-bundle question id (globally unique across the 12 R&W
 * bundles), mirroring rwGrammarType.js's RW_GRAMMAR_TYPE_BY_ID keying.
 */
import { writeFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO = join(__dirname, '..', '..');
const DATA = join(__dirname, 'data');
const LLM = join(DATA, 'llm');
mkdirSync(LLM, { recursive: true });

const READING_SKILLS = [
  'words-in-context',
  'central-ideas-and-details',
  'inferences',
  'command-of-evidence-quantitative',
  'command-of-evidence-textual',
  'cross-text-connections',
  'rhetorical-synthesis',
];

async function loadItems() {
  const out = [];
  for (let n = 1; n <= 12; n++) {
    const mod = await import(`${REPO}/src/data/practiceTests/practiceTest${n}RW.js`);
    const bundle = mod[`practiceTest${n}RW`] || mod.default;
    if (!bundle?.modules) continue;
    for (const m of bundle.modules) {
      for (const q of (m.questions || [])) {
        if (!q?.skill || !Array.isArray(q.choices) || q.choices.length < 2 || !q.correctAnswer) continue;
        if (!READING_SKILLS.includes(q.skill)) continue;
        out.push(q);
      }
    }
  }
  return out;
}

const norm = (s) => (s || '').toLowerCase().replace(/\s+/g, ' ').trim();

// ── Deterministic sub-type rules ────────────────────────────────────────────
function deterministicType(q) {
  const stem = norm(q.question);
  switch (q.skill) {
    case 'central-ideas-and-details':
      if (stem.includes('main idea')) return 'cid-main-idea';
      // "According to / Based on the text, what/how/why/which ..." = explicit retrieval
      if (/^(according to|based on) the text/.test(stem)) return 'cid-supporting-detail';
      return null;

    case 'command-of-evidence-quantitative':
      if (stem.includes('complete the statement')) return 'coe-quant-complete-statement';
      if (stem.includes('support the')) return 'coe-quant-support-claim'; // "support the claim" / "team's claim"
      return null;

    case 'command-of-evidence-textual':
      if (stem.includes('quotation') && stem.includes('illustrate')) return 'coe-text-illustrate-quote';
      if (stem.includes('finding') && stem.includes('support')) return 'coe-text-support-finding';
      return null;

    case 'rhetorical-synthesis': {
      const goal = norm(q.studentNotes?.goal);
      if (!goal) return null;
      if (/(a |an )?(difference|distinction|contrast)/.test(goal) || goal.includes('differ')) return 'rs-emphasize-difference';
      if (goal.includes('similarity') || goal.includes('in common') || goal.includes('shared')) return 'rs-emphasize-similarity';
      if (goal.includes('introduce')) return 'rs-introduce-unfamiliar';
      if (goal.includes('present')) return 'rs-present-claim';
      if (goal.startsWith('the student wants to explain') || goal.includes(' explain ') || goal.includes('describe')) return 'rs-explain-finding';
      if (goal.includes('emphasize') || goal.includes('highlight')) return 'rs-emphasize-significance';
      return null;
    }

    // Single-stem, semantic-only skills — always LLM:
    case 'words-in-context':
    case 'inferences':
    case 'cross-text-connections':
    default:
      return null;
  }
}

const items = await loadItems();

const deterministic = {};
const needsLlm = [];
const bucketCounts = {};
const perSkillResolved = {};

for (const q of items) {
  const t = deterministicType(q);
  if (t) {
    deterministic[q.id] = t;
    bucketCounts[t] = (bucketCounts[t] || 0) + 1;
    perSkillResolved[q.skill] = (perSkillResolved[q.skill] || 0) + 1;
  } else {
    needsLlm.push({ id: q.id, skill: q.skill });
  }
}

// Slim content payload for the workflow (raw qid is the join key).
const payload = items.map((q) => ({
  id: q.id,
  skill: q.skill,
  difficulty: q.difficulty,
  question: q.question,
  passage: q.passage || null,
  passages: q.passages || null,
  studentNotes: q.studentNotes || null,
  choices: q.choices,
  correctAnswer: q.correctAnswer,
  explanation: q.explanation,
}));

writeFileSync(join(DATA, 'reading-items.json'), JSON.stringify(payload, null, 1));
writeFileSync(join(DATA, 'deterministic.json'), JSON.stringify(deterministic, null, 1));
writeFileSync(join(DATA, 'needs-llm.json'), JSON.stringify(needsLlm, null, 1));

// Per-skill LLM input files: full content for items needing the semantic panel,
// so each classifier agent reads only its own skill's file. Keyed by raw qid.
const byId = new Map(payload.map((p) => [p.id, p]));
const llmIds = {};
for (const { id, skill } of needsLlm) (llmIds[skill] ??= []).push(id);
for (const [skill, ids] of Object.entries(llmIds)) {
  const rows = ids.map((id) => byId.get(id));
  writeFileSync(join(LLM, `${skill}.json`), JSON.stringify(rows, null, 1));
}
writeFileSync(join(DATA, 'llm-ids.json'), JSON.stringify(llmIds, null, 1));

// Pre-batched files (≤BATCH items each) so every classifier agent reads a
// tiny file instead of the full per-skill corpus. The manifest (absolute file
// paths) is what the classification workflow consumes as `args`.
const BATCH = 12;
const BATCHES = join(LLM, 'batches');
mkdirSync(BATCHES, { recursive: true });
const manifest = [];
for (const [skill, ids] of Object.entries(llmIds)) {
  for (let i = 0, b = 0; i < ids.length; i += BATCH, b++) {
    const slice = ids.slice(i, i + BATCH);
    const rows = slice.map((id) => byId.get(id));
    const name = `${skill}__${String(b).padStart(2, '0')}.json`;
    writeFileSync(join(BATCHES, name), JSON.stringify(rows, null, 1));
    manifest.push({ skill, batch: b, file: join(BATCHES, name), ids: slice });
  }
}
writeFileSync(join(BATCHES, 'manifest.json'), JSON.stringify(manifest, null, 1));
console.log(`\nWrote ${manifest.length} batch files + manifest under data/llm/batches/`);

// ── Report ───────────────────────────────────────────────────────────────────
const bySkill = {};
for (const q of items) bySkill[q.skill] = (bySkill[q.skill] || 0) + 1;

console.log(`TOTAL reading items: ${items.length}`);
console.log('\n=== Deterministic resolution by skill ===');
for (const s of READING_SKILLS) {
  const total = bySkill[s] || 0;
  const resolved = perSkillResolved[s] || 0;
  console.log(`  ${s.padEnd(34)} ${String(resolved).padStart(3)}/${String(total).padStart(3)} resolved · ${total - resolved} → LLM`);
}
console.log('\n=== Deterministic buckets (count) ===');
Object.entries(bucketCounts).sort((a, b) => b[1] - a[1]).forEach(([t, c]) =>
  console.log(`  ${String(c).padStart(3)}  ${t}`));
console.log(`\nResolved deterministically: ${Object.keys(deterministic).length}`);
console.log(`Need LLM panel: ${needsLlm.length}`);
const llmBySkill = {};
needsLlm.forEach(x => llmBySkill[x.skill] = (llmBySkill[x.skill] || 0) + 1);
console.log('  LLM split:', JSON.stringify(llmBySkill));
console.log(`\nWrote data/reading-items.json, data/deterministic.json, data/needs-llm.json`);
