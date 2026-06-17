# Explanation quality overhaul — COMPLETE (2026-06-17)

> **Status: DONE.** All 257/257 batches applied. Render audit = 0 real KaTeX errors.
> 1601 tests green. Visual check passed. Commits d6df35d + 293e953 + 2d1ca94 +
> the tidy commit are local and **ready to push** (`git push origin main`). The
> notes below are the historical runbook from when the work was in progress.

---

# Explanation quality overhaul — resume notes

Goal: fix render bugs in math explanations (exponents/radicals/fractions, stray
`$`, leaked `[TRAP:]` tokens) **and** rewrite all math explanations to the
crisp/clear/confident standard in `docs/AUTHORING_EXPLANATIONS.md`.

## Status

**Phase 1 — renderer hardening: DONE, committed.** `MathText.jsx` (math masked
before italic; zero-width/NBSP strip; conservative currency) + `SolutionExplanation.jsx`
(`/`→`\frac` converter guarded against `\text{}` and sub/superscripts). Reusable
render-audit gate at `src/data/__tests__/explanationRenderAudit.test.js`. 1601 tests green.

**Phase 2 — full rewrite of 2,908 math explanations across 42 files: IN PROGRESS.**
- **132 / 257 batches applied + committed** (≈1,532 explanations), each adversarially
  verified (re-solved, notation enforced, SAT-Pattern header preserved). Spot-checked: excellent.
- **125 batches pending** (rewrite and/or verify failed on a burst of API 500s and the
  session limit). Explicit list (also mirrored to `scripts/audit-output/pending-batches.json`
  when present):

```json
[98,111,112,114,115,116,118,119,120,121,122,123,124,125,126,127,129,137,138,139,142,145,148,149,152,156,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256]
```

Note: batch numbering is positional and stable across re-extract/re-split (same files,
same per-file item counts, same order), so these numbers stay valid after resume re-splits.
- Apply is lossless + safe: AST splice of only the `explanation` literal; `gather`
  rejects any batch whose `.out` idx-set or SAT-Pattern headers don't match its `.in`
  (this caught + dropped misaligned batch 098 — it is in the pending list).

## How the pipeline fits together

```
explanationCodemod.mjs extract      → scripts/audit-output/math-explanations.jsonl (2908 items, keyed {file, idx})
explanationCodemod.mjs split 12     → scripts/audit-output/batches/batch-NNN.in.jsonl + manifest.json
Workflow(rewriteExplanationsWorkflow.js)
   per batch: rewrite agent → batch-NNN.draft ; verify agent → batch-NNN.out  (sentinel <<<EXPL idx=N>>>…<<<ENDEXPL>>> blocks)
explanationCodemod.mjs gather       → validates each .out vs its .in → scripts/audit-output/all-patches.jsonl
explanationCodemod.mjs apply all-patches.jsonl   → splices explanation literals into source
```

## To resume (after the session limit resets)

```bash
cd ~/PerformSAT
# 1. refresh batch inputs from the CURRENT (partially-rewritten) source
node scripts/explanationCodemod.mjs extract
node scripts/explanationCodemod.mjs split 12         # batch numbering is stable (same files/counts/order)
```
Then run the workflow on the pending batches only (the saved scriptPath also works):
```
Workflow({ scriptPath: "/Users/hareshbhatia/PerformSAT/scripts/rewriteExplanationsWorkflow.js",
           args: { batches: <contents of scripts/audit-output/pending-batches.json> } })
```
When it finishes:
```bash
node scripts/explanationCodemod.mjs gather           # check REJECTED/PENDING counts; re-run any rejected batches
node scripts/explanationCodemod.mjs apply scripts/audit-output/all-patches.jsonl
CI=true npx react-scripts test --watchAll=false --testPathPattern=explanationRenderAudit   # drive katex-error-* toward 0
CI=true npx react-scripts test --watchAll=false      # full suite must stay green
```
Then a final targeted **audit→0 fix pass**: any remaining `katex-error-author` /
`katex-error-converter-induced` items (mostly the legacy `topic-*.js` malformed-`$`
and the percent `%` cluster) get a small focused rewrite/fix round.

## Known detector false positives (ignore in the audit report)

- `italic-asterisk-in-math`: single `*` (multiplication / bullet) renders fine.
- `silent-superscript` on `a^nb^nc^n`, `ax^by^c`: each `^x` takes one token — correct.
- `unbalanced-braces` when a segment contains escaped `\$` inside math (e.g.
  `$\frac{\$48}{\$120}$`): the static counter splits on `$`; the real renderer
  protects `\$` first and renders fine.

The categories that matter are **`katex-error-author`** and **`katex-error-converter-induced`**.

## Then

- Visual check in the browser (per house workflow): open a few rewritten explanations
  (easy/med/hard, algebra + advanced + geometry) and confirm clean rendering.
- Hand to user to `git push origin main` (do NOT push until the full rewrite + audit→0 is complete).
- Optional follow-up: R&W explanations (prose, no math-render bugs) — separate voice pass.
