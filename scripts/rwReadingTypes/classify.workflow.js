export const meta = {
  name: 'rw-reading-type-classify',
  description: 'Classify 171 untyped R&W reading items into question-type sub-buckets via a 3-voter diverse-lens panel with adjudication on splits',
  phases: [
    { title: 'Classify', detail: '3 diverse-lens voters per batch' },
    { title: 'Adjudicate', detail: 'resolve 3-way splits' },
  ],
};

// args = manifest array: [{ skill, batch, file (absolute), ids:[...] }]
let batches = args;
if (typeof batches === 'string') { try { batches = JSON.parse(batches); } catch (e) { /* leave as-is */ } }
if (batches && !Array.isArray(batches) && Array.isArray(batches.batches)) batches = batches.batches;
if (!Array.isArray(batches)) {
  throw new Error(`workflow args must be an array of batch descriptors; received ${typeof batches}: ${JSON.stringify(batches).slice(0, 200)}`);
}

// ── Per-skill sub-type taxonomy (MECE; each has an *-other escape) ───────────
const TAXONOMY = {
  'words-in-context': {
    axis: 'Classify by the dominant CONTEXT CLUE the passage uses to fix the correct word/phrase. If more than one applies, pick the most specific in this priority: contrast > cause-effect > example/illustration > restatement.',
    buckets: [
      { slug: 'wic-contrast', desc: 'A contrast/concession cue (but, however, unlike, whereas, rather than, despite, yet) makes the blank mean the OPPOSITE of a nearby stated idea.' },
      { slug: 'wic-cause-effect', desc: 'Causal or conditional logic (because, since, so that, as a result, thus, if…then) determines the correct word.' },
      { slug: 'wic-example-or-illustration', desc: 'Specific examples, a list, or a concrete instance ("such as", enumerated cases) signals the word\'s meaning.' },
      { slug: 'wic-restatement', desc: 'The surrounding text defines, restates, or directly elaborates the same idea (synonym, appositive, definition) so the word names what was just described.' },
      { slug: 'wic-other', desc: 'No single clue above clearly dominates.' },
    ],
  },
  'inferences': {
    axis: 'Classify by the LOGICAL RELATION the correct completion supplies to make the passage cohere.',
    buckets: [
      { slug: 'inf-cause-effect', desc: 'The completion states a cause, mechanism, or an effect/consequence of what precedes.' },
      { slug: 'inf-contrast-qualification', desc: 'The completion is a concession, contrast, exception, or limitation (but/however/although/yet, or logical tension).' },
      { slug: 'inf-generalization-conclusion', desc: 'The completion is a general conclusion, principle, or summary drawn from the specific evidence given.' },
      { slug: 'inf-comparison', desc: 'The completion expresses how two things compare — more/less, greater/smaller, similar/different in degree.' },
      { slug: 'inf-prediction-expectation', desc: 'The completion is what one would expect or predict to follow given the setup.' },
      { slug: 'inf-other', desc: 'None of the above relations clearly dominates.' },
    ],
  },
  'cross-text-connections': {
    axis: 'Classify by how the author of Text 2 would MOST LIKELY respond to Text 1, as shown by the correct answer.',
    buckets: [
      { slug: 'ctc-disagree-challenge', desc: "Text 2's author would reject, dispute, or argue against Text 1's claim." },
      { slug: 'ctc-qualify-complicate', desc: "Text 2's author would partly accept Text 1 but qualify, limit, complicate, or add a caveat." },
      { slug: 'ctc-support-extend', desc: "Text 2's author would agree with and reinforce or extend Text 1's claim." },
      { slug: 'ctc-alternative-explanation', desc: "Text 2's author would offer a DIFFERENT explanation or mechanism for the same phenomenon/evidence." },
      { slug: 'ctc-other', desc: 'The relationship does not clearly fit the above.' },
    ],
  },
  'rhetorical-synthesis': {
    axis: 'Classify by the rhetorical GOAL stated in studentNotes.goal ("The student wants to …").',
    buckets: [
      { slug: 'rs-emphasize-significance', desc: 'Goal: emphasize/highlight the significance, importance, contribution, or insight of something.' },
      { slug: 'rs-emphasize-difference', desc: 'Goal: emphasize a difference, distinction, or contrast between two things.' },
      { slug: 'rs-emphasize-similarity', desc: 'Goal: emphasize a similarity or shared feature between two things.' },
      { slug: 'rs-introduce-unfamiliar', desc: 'Goal: introduce a subject/work/argument to an audience unfamiliar with it.' },
      { slug: 'rs-present-claim', desc: "Goal: present or state someone's central claim/argument." },
      { slug: 'rs-explain-finding', desc: 'Goal: explain or describe how/what/why — a finding, method, or specific feature.' },
      { slug: 'rs-other', desc: 'Goal does not fit the above.' },
    ],
  },
};

const LENSES = [
  { key: 'text', inst: 'LENS — Decide primarily from the PASSAGE/notes and the correct answer: identify the operative signal in the text itself.' },
  { key: 'explanation', inst: 'LENS — Decide primarily from the EXPLANATION: it states why the correct answer is right; map that reasoning to a bucket.' },
  { key: 'distractor', inst: 'LENS — Decide by contrasting the CORRECT answer against the DISTRACTORS: what relationship/clue does the right answer satisfy that the wrong ones violate?' },
];

const VOTER_SCHEMA = {
  type: 'object',
  additionalProperties: false,
  properties: {
    classifications: {
      type: 'array',
      items: {
        type: 'object',
        additionalProperties: false,
        properties: {
          id: { type: 'number' },
          type: { type: 'string', description: 'exactly one bucket slug' },
          confidence: { type: 'string', enum: ['high', 'medium', 'low'] },
        },
        required: ['id', 'type', 'confidence'],
      },
    },
  },
  required: ['classifications'],
};

const ADJ_SCHEMA = {
  type: 'object',
  additionalProperties: false,
  properties: {
    classifications: {
      type: 'array',
      items: {
        type: 'object',
        additionalProperties: false,
        properties: {
          id: { type: 'number' },
          type: { type: 'string' },
          rationale: { type: 'string' },
        },
        required: ['id', 'type'],
      },
    },
  },
  required: ['classifications'],
};

function bucketList(tax) {
  return tax.buckets.map((b) => `  - ${b.slug}: ${b.desc}`).join('\n');
}

function voterPrompt(batch, tax, lens) {
  return `You are an expert Digital SAT item writer classifying "${batch.skill}" Reading & Writing questions into question-type buckets.

Read this JSON file (an array of items, each with: id, question, passage/passages/studentNotes, choices, correctAnswer, explanation):
${batch.file}

Classify EACH of these ${batch.ids.length} items by id: ${batch.ids.join(', ')}

Assign exactly ONE bucket slug per item from:
${bucketList(tax)}

${tax.axis}

${lens.inst}

Use *-other ONLY when nothing else genuinely fits — prefer a specific bucket. Return a classification for every id listed. Output ONLY the structured result.`;
}

function adjPrompt(batch, tax, splits) {
  const lines = splits.map((s) => `  id ${s.id}: voters proposed [${s.candidates.join(', ') || 'no votes'}]`).join('\n');
  return `You are the senior adjudicator for "${batch.skill}" Digital SAT question-type classification. The 3-voter panel SPLIT on these items (no majority). Read each item from this file and decide the single best bucket.

File: ${batch.file}

Buckets:
${bucketList(tax)}

${tax.axis}

Split items and the buckets each voter proposed:
${lines}

For each id, read its passage/notes, correct answer, and explanation, then choose the single best-fitting bucket slug (you may pick a bucket no voter proposed if it fits better). Give a one-line rationale. Output ONLY the structured result.`;
}

// ── Reconcile 3 votes per item ───────────────────────────────────────────────
function reconcile(batchIds, voterResults) {
  const byId = {};
  for (const vr of voterResults) {
    if (!vr || !Array.isArray(vr.classifications)) continue;
    for (const c of vr.classifications) {
      if (c && typeof c.id === 'number' && c.type) (byId[c.id] ??= []).push(c.type);
    }
  }
  const final = {};
  const splits = [];
  for (const id of batchIds) {
    const votes = byId[id] || [];
    const tally = {};
    votes.forEach((t) => { tally[t] = (tally[t] || 0) + 1; });
    const sorted = Object.entries(tally).sort((a, b) => b[1] - a[1]);
    if (sorted.length && sorted[0][1] >= 2) {
      final[id] = { type: sorted[0][0], agreement: `${sorted[0][1]}/${votes.length}`, confidence: sorted[0][1] === 3 ? 'high' : 'medium', votes };
    } else {
      splits.push({ id, candidates: votes });
    }
  }
  return { final, splits };
}

phase('Classify');
const perBatch = await pipeline(batches, async (batch) => {
  const tax = TAXONOMY[batch.skill];
  if (!tax) return batch.ids.map((id) => ({ id, skill: batch.skill, type: 'unknown', agreement: 'no-taxonomy', confidence: 'low', votes: [] }));

  const votes = await parallel(LENSES.map((lens) => () =>
    agent(voterPrompt(batch, tax, lens), {
      label: `vote:${batch.skill}#${batch.batch}:${lens.key}`,
      phase: 'Classify',
      schema: VOTER_SCHEMA,
    })));

  const { final, splits } = reconcile(batch.ids, votes);

  if (splits.length) {
    const adj = await agent(adjPrompt(batch, tax, splits), {
      label: `adjudicate:${batch.skill}#${batch.batch}`,
      phase: 'Adjudicate',
      schema: ADJ_SCHEMA,
      effort: 'high',
    });
    if (adj && Array.isArray(adj.classifications)) {
      for (const c of adj.classifications) {
        final[c.id] = { type: c.type, agreement: 'adjudicated', confidence: 'medium', votes: (splits.find((s) => s.id === c.id)?.candidates) || [], rationale: c.rationale };
      }
    }
  }

  const fallback = tax.buckets[tax.buckets.length - 1].slug; // *-other
  return batch.ids.map((id) => ({
    id, skill: batch.skill,
    ...(final[id] || { type: fallback, agreement: 'unresolved', confidence: 'low', votes: [] }),
  }));
});

// ── Assemble result ──────────────────────────────────────────────────────────
const detail = perBatch.flat().filter(Boolean);
const map = {};
const byType = {};
let splitsCount = 0;
let unresolved = 0;
for (const d of detail) {
  map[d.id] = d.type;
  byType[d.type] = (byType[d.type] || 0) + 1;
  if (d.agreement === 'adjudicated') splitsCount++;
  if (d.agreement === 'unresolved') unresolved++;
}

log(`Classified ${detail.length} items into ${Object.keys(byType).length} buckets · ${splitsCount} adjudicated · ${unresolved} unresolved`);

return {
  count: detail.length,
  byType,
  adjudicated: splitsCount,
  unresolved,
  map,
  detail,
};
