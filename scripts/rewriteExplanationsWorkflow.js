// Workflow script for the explanation-quality rewrite (see docs/EXPLANATION_REWRITE_RESUME.md).
// Run via the Workflow tool: Workflow({ scriptPath: "<this file>", args: { batches: [...] } })
//   args.batches : explicit list of batch numbers to process (preferred on resume)
//   args.start / args.end : inclusive-exclusive range fallback ([start, end))
// Re-split first so batch .in.jsonl files reflect the committed state:
//   node scripts/explanationCodemod.mjs extract && node scripts/explanationCodemod.mjs split 12
export const meta = {
  name: 'rewrite-explanations',
  description: 'Rewrite SEVA math explanations to the crisp/clear/confident standard, adversarially verified for correctness + clean LaTeX',
  phases: [
    { title: 'Rewrite', detail: 'one agent per ≤12-item batch, follows AUTHORING_EXPLANATIONS.md' },
    { title: 'Verify', detail: 'adversarial: re-solve math, enforce notation, restore SAT-Pattern header' },
  ],
}

const ROOT = '/Users/hareshbhatia/PerformSAT'
const DIR = ROOT + '/scripts/audit-output/batches'
const SPEC = ROOT + '/docs/AUTHORING_EXPLANATIONS.md'

// Pending batches as of the 2026-06-16 pause (132/257 already applied + committed).
// Hard-embedded because the Workflow `args` did not plumb through last run.
const PENDING = [98,111,112,114,115,116,118,119,120,121,122,123,124,125,126,127,129,137,138,139,142,145,148,149,152,156,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256]
// The rewrite is COMPLETE (all 257 batches applied + committed). To re-run
// specific batches in the future, pass args.batches = [..]; PENDING is kept as
// the historical record of what remained at the 2026-06-16 pause.
let nums = []
if (args && Array.isArray(args.batches)) nums = args.batches.slice()
else if (args && typeof args.start === 'number') { for (let i = args.start; i < (args.end || 257); i++) nums.push(i) }
void PENDING
const pad = (n) => String(n).padStart(3, '0')

const STATUS = {
  type: 'object',
  properties: { batch: { type: 'string' }, items: { type: 'number' }, fixed: { type: 'number' }, notes: { type: 'string' } },
  required: ['batch', 'items'],
  additionalProperties: true,
}

const rewritePrompt = (id) => `You rewrite SAT math explanations to a fixed house standard. This is data quality work — be exact.

STEP 1 — Read the rules in full: ${SPEC}
STEP 2 — Read the batch: ${DIR}/batch-${id}.in.jsonl
  It is JSONL (one JSON object per line). Each object has: idx, id, domain, difficulty, skills, question, choices (array of {id,text}), correctAnswer, satPattern, and explanation (the CURRENT explanation you will replace).

For EVERY item in the batch, write a NEW explanation that:
- Correctly explains why \`correctAnswer\` is right. Re-solve the problem yourself. If your reasoning does not land on \`correctAnswer\`, YOUR explanation is wrong — fix it. NEVER change or contradict the answer.
- Copies the \`**SAT Pattern: <name>**\` header VERBATIM from the current explanation (identical words and capitalization). If the current explanation has no such header, do not invent one.
- References the real choice letters (A–D) and the real answer value.
- Uses ONLY the notation rules from the spec: all math in $...$ ; \\frac{}{} not bare / inside math ; braces on multi-char exponents/subscripts ( x^{12}, V_{\\text{new}} ) ; \\Rightarrow \\le \\ge \\neq \\times \\div \\cdot \\pi (never unicode ⇒ ≤ × ÷ π) ; degrees ^\\circ ; \\% for percent (never raw %) ; \\$ for currency ; NEVER put / or \\frac inside \\text{} ; every $ paired.
- Follows the house structure (SAT Pattern → answer verdict → The Fast Way → The Full Solution → Why the wrong answers / Common Mistakes → Test Day Takeaway) and the crisp/clear/confident voice. No emojis, no [TRAP:] tokens, no HTML.

STEP 3 — Write ${DIR}/batch-${id}.draft using EXACTLY this block format, one block per item, RAW text — do NOT JSON-escape, do NOT double backslashes, write real newlines and real LaTeX backslashes:
<<<EXPL idx=0>>>
**SAT Pattern: ...**

...full rewritten explanation...
<<<ENDEXPL>>>

The idx in each header MUST equal the item's idx field. Include EVERY item from the batch, in order. Put nothing else in the file.

Return {batch:"${id}", items:<count written>, notes:"<anything notable>"}.`

const verifyPrompt = (id) => `You are an adversarial reviewer of rewritten SAT math explanations. Assume each rewrite is wrong until you prove it right.

STEP 1 — Read the rules: ${SPEC}
STEP 2 — Read the originals: ${DIR}/batch-${id}.in.jsonl (JSONL; has question, choices, correctAnswer, satPattern, and the original explanation).
STEP 3 — Read the draft rewrites: ${DIR}/batch-${id}.draft (blocks: <<<EXPL idx=N>>> ... <<<ENDEXPL>>>).

For EACH item, check the draft HARD:
(a) CORRECTNESS — re-solve independently. The explanation's math must be correct and arrive at \`correctAnswer\`. If wrong, contradictory, or hand-wavy, REWRITE it correctly.
(b) RENDERABLE NOTATION — every $ paired; no bare / inside math (use \\frac); multi-char ^{}/_{} braced; no raw % (use \\%); no unicode math (⇒ ° × ÷ ≤ ≥ ≠ π → LaTeX); no / or \\frac inside \\text{}; \\$ for currency. Fix every violation.
(c) HEADER — the \`**SAT Pattern: ...**\` line must be byte-identical to the original's. Restore if changed.
(d) STRUCTURE & VOICE — house sections, crisp/clear/confident, no emojis, no [TRAP:] tokens, no HTML.

STEP 4 — Write the FINAL explanation for EVERY item (corrected where needed) to ${DIR}/batch-${id}.out in the SAME block format, RAW text, no escaping. CRITICAL: the set of idx values you write MUST exactly equal the set in the .in (no missing, no extra, no duplicates) — a misaligned idx set makes gather reject the whole batch.

Return {batch:"${id}", items:<count>, fixed:<how many corrected>, notes:"<top issues>"}.`

const results = await pipeline(
  nums,
  (n) => agent(rewritePrompt(pad(n)), { label: `rewrite:${pad(n)}`, phase: 'Rewrite', schema: STATUS }),
  (rw, n) => agent(verifyPrompt(pad(n)), { label: `verify:${pad(n)}`, phase: 'Verify', schema: STATUS }),
)

const ok = results.filter(Boolean)
const fixed = ok.reduce((s, r) => s + (r.fixed || 0), 0)
log(`done: ${ok.length}/${nums.length} batches verified, ${fixed} items corrected`)
return { batchesRequested: nums.length, batchesVerified: ok.length, itemsFixed: fixed }
