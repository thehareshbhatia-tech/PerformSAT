#!/usr/bin/env bun
/**
 * topOfBand7.mjs — geo-163 final fix.
 *
 * topOfBand6 regressed geo-163 from 3 → 2 because the algebraic stem was
 * "verbose" (rater feedback) and the $20°/80°/100°$ distractors overlapped
 * (two of them shared the same supplementary-misconception root).
 *
 * Reversion strategy: keep the numeric form (no $x$), but
 *   (1) add "interior" to the given angle to fix the original clarity gap,
 *   (2) reshape distractors so each traces to a distinct, valid misconception:
 *         A) $25°$ — complementary rule (no theorem uses it; classic trap)
 *         B) $65°$ — correct (alt-int equal)
 *         C) $90°$ — assumes right angle from the transversal (no calculation)
 *         D) $115°$ — supplementary rule (same-side interior, NOT alt-int)
 *
 * Run: bun scripts/rewrites/topOfBand7.mjs
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const BANK_FILE = path.resolve(__dirname, '..', '..', 'src/data/questions/bank/geometry.js');

const REWRITES = [
  {
    id: 'bank-geo-163',
    block: `  { id: 'bank-geo-163', domain: 'geometry', skills: ['triangle-angle-sum'], difficulty: 'easy', type: 'multiple-choice',
    question: 'In the $xy$-plane, parallel lines $\\\\ell$ and $m$ are cut by a transversal. An interior angle formed at line $\\\\ell$ measures $65°$. What is the measure of the alternate interior angle formed at line $m$?',
    choices: [{ id: 'A', text: '$25°$' }, { id: 'B', text: '$65°$' }, { id: 'C', text: '$90°$' }, { id: 'D', text: '$115°$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Angles with Parallel Lines and Transversals**\\n\\n**Choice B is correct.**\\n\\n**The Fast Way (~5s):** Alternate interior angles formed by parallel lines and a transversal are CONGRUENT. The alternate interior angle measures $65°$.\\n\\n**The Full Solution:**\\nAlternate interior angles sit on opposite sides of the transversal, both in the interior region between the parallel lines. When the cut lines are parallel, alternate interior angles are equal in measure. Given angle: $65°$. Alternate interior angle: $65°$.\\n\\n**Why the wrong answers are tempting:**\\n* Choice A ($25°$): applies the COMPLEMENTARY rule ($90 - 65 = 25$) — no parallel-lines theorem uses complementary angles.\\n* Choice C ($90°$): assumes the transversal forms a right angle with line $m$ — but the problem says the angle at $\\\\ell$ is $65°$, and parallel lines mean the angles at $m$ match those at $\\\\ell$, so neither line has a right angle here.\\n* Choice D ($115°$): applies the SUPPLEMENTARY rule ($180 - 65 = 115$) — correct for same-side (co-interior) angles or linear pairs, not alternate interior.\\n\\n**Test Day Takeaway:** Parallel lines + transversal: corresponding and alternate (interior or exterior) angles are CONGRUENT; same-side (co-interior) angles and linear pairs are SUPPLEMENTARY. Memorize which is which.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'angles-with-parallel-lines-and-transversals', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },`,
  },
];

function replaceBlock(src, id, newBlock) {
  const startIdx = src.indexOf(`  { id: '${id}',`);
  if (startIdx === -1) return { ok: false, reason: 'not-found' };
  let endIdx = src.indexOf(`\n  { id: '`, startIdx + 1);
  if (endIdx === -1) endIdx = src.indexOf(`\n];`, startIdx);
  if (endIdx === -1) return { ok: false, reason: 'no-end-marker' };
  return { ok: true, next: src.slice(0, startIdx) + newBlock + src.slice(endIdx) };
}

let src = fs.readFileSync(BANK_FILE, 'utf8');
let applied = 0;
let skipped = 0;
for (const { id, block } of REWRITES) {
  const before = src.length;
  const result = replaceBlock(src, id, block);
  if (!result.ok) {
    console.log(`SKIP ${id}: ${result.reason}`);
    skipped++;
    continue;
  }
  src = result.next;
  console.log(`OK ${id}: ${before} → ${src.length}`);
  applied++;
}
fs.writeFileSync(BANK_FILE, src, 'utf8');
console.log(`\n${applied} applied, ${skipped} skipped.`);
