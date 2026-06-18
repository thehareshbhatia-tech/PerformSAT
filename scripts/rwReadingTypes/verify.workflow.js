export const meta = {
  name: 'rw-authored-verify',
  description: 'Independently re-solve each authored R&W item (blind to the key) with two solvers; pass only items both solve to the intended key with a single defensible answer + integrity OK',
  phases: [{ title: 'Verify', detail: 'two blind solvers per item' }],
};

// args = { items:[{idx,bucket,skill,key}], file:"<abs path to authored-blind.json>" }
let a = args;
if (typeof a === 'string') { try { a = JSON.parse(a); } catch (e) { /* noop */ } }
const items = a.items;
const FILE = a.file;
if (!Array.isArray(items) || !FILE) throw new Error('args must be { items:[...], file:"..." }');

const SCHEMA = {
  type: 'object',
  additionalProperties: false,
  properties: {
    chosen: { type: 'string', enum: ['A', 'B', 'C', 'D'] },
    soleDefensible: { type: 'boolean', description: 'true if exactly one choice is defensible' },
    integrityOK: { type: 'boolean', description: 'claims accurate; literary works fictional with original quotations (no real-author misattribution)' },
    notes: { type: 'string' },
  },
  required: ['chosen', 'soleDefensible', 'integrityOK'],
};

function prompt(item, lens) {
  return `You are an expert Digital SAT solver. Solve ONE Reading & Writing item INDEPENDENTLY and critically.

Read the item at index ${item.idx} (match the "idx" field) in this JSON array. Each entry has: bucket, skill, question, passage/studentNotes, choices. There is NO answer key — decide yourself.
${FILE}

Skill: ${item.skill}. Intended question type: ${item.bucket}.

${lens}

Determine:
- chosen: which single choice (A–D) is correct.
- soleDefensible: is EXACTLY ONE choice defensible (no second-best that's also arguably correct, no zero correct)?
- integrityOK: are the passage's claims accurate/non-fabricated? For a "coe-text-illustrate-quote" item, the literary work MUST be fictional with original quotations — flag false if it attributes quotations to a real author/work.

Output ONLY the structured verdict.`;
}

const LENSES = [
  'Solve it the way a careful test-taker would: find the answer the passage best supports.',
  'Solve it as a skeptical reviewer hunting for a second defensible answer or a flawed key.',
];

phase('Verify');
const results = await parallel(items.map((item) => async () => {
  const votes = await parallel(LENSES.map((lens) => () =>
    agent(prompt(item, lens), { label: `verify:${item.bucket}#${item.idx}`, phase: 'Verify', schema: SCHEMA })));
  const ok = votes.filter(Boolean);
  const bothChoseKey = ok.length === 2 && ok.every((v) => v.chosen === item.key);
  const sole = ok.every((v) => v.soleDefensible);
  const integrity = ok.every((v) => v.integrityOK);
  return {
    idx: item.idx,
    bucket: item.bucket,
    key: item.key,
    votes: ok.map((v) => ({ chosen: v.chosen, sole: v.soleDefensible, integrity: v.integrityOK, notes: v.notes })),
    pass: bothChoseKey && sole && integrity,
    reason: bothChoseKey ? (sole ? (integrity ? 'pass' : 'integrity') : 'ambiguous') : 'key-mismatch',
  };
}));

const verdicts = results.filter(Boolean);
const passed = verdicts.filter((v) => v.pass).map((v) => v.idx);
const failed = verdicts.filter((v) => !v.pass);

log(`Verified ${verdicts.length} items · ${passed.length} pass · ${failed.length} fail`);

return {
  total: verdicts.length,
  passedIdx: passed,
  failed: failed.map((v) => ({ idx: v.idx, bucket: v.bucket, key: v.key, reason: v.reason, votes: v.votes })),
};
