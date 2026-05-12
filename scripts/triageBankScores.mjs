#!/usr/bin/env bun
/**
 * triageBankScores.mjs — read bank-quality-scores.jsonl, group items by what
 * action is needed.
 *
 * Buckets (highest priority first):
 *   CRITICAL — overall_cb_grade ≤ 2  (not CB-grade at all; full rewrite)
 *   REWRITE  — overall_cb_grade = 3  (close but below bar)
 *   PASSES   — overall_cb_grade ≥ 4  (meets rubric exit gate)
 *
 * Within REWRITE, classify by the worst sub-dim:
 *   - difficulty_calibration ≤ 2 → "top-of-band rewrite needed"
 *   - distractor_quality ≤ 3 → "tighten distractors"
 *   - stem_clarity ≤ 3 → "rewrite stem"
 *   - notation_polish ≤ 3 → "fix notation"
 *
 * Run:
 *   bun scripts/triageBankScores.mjs
 */

import { promises as fs } from 'node:fs';

const SCORES_PATH = '/Users/hareshbhatia/PerformSAT/scripts/generated/bank-quality-scores.jsonl';

const text = await fs.readFile(SCORES_PATH, 'utf8');
const items = text.trim().split('\n').filter(l => l.trim()).map(l => JSON.parse(l));

const critical = items.filter(i => i.overall_cb_grade <= 2);
const rewrite = items.filter(i => i.overall_cb_grade === 3);
const passes = items.filter(i => i.overall_cb_grade >= 4);

const avg = (key) => items.reduce((s, i) => s + i[key], 0) / items.length;

console.log(`Graded ${items.length} items.`);
console.log('');
console.log(`Dimension averages:`);
console.log(`  Stem clarity:           ${avg('stem_clarity').toFixed(2)}/5`);
console.log(`  Distractor quality:     ${avg('distractor_quality').toFixed(2)}/5`);
console.log(`  Notation polish:        ${avg('notation_polish').toFixed(2)}/5`);
console.log(`  Difficulty calibration: ${avg('difficulty_calibration').toFixed(2)}/5`);
console.log(`  Overall CB-grade:       ${avg('overall_cb_grade').toFixed(2)}/5`);
console.log('');
console.log(`Rubric exit gate (≥80% items with Overall ≥4): ${passes.length}/${items.length} = ${((passes.length / items.length) * 100).toFixed(1)}%`);
console.log('');

console.log(`CRITICAL (Overall ≤ 2, must full-rewrite): ${critical.length}`);
for (const i of critical) {
  console.log(`  ${i.id} (${i._difficulty} ${i._skill}): overall=${i.overall_cb_grade} — ${i.weakness_notes}`);
}
console.log('');

console.log(`REWRITE (Overall = 3, below bar): ${rewrite.length}`);
for (const i of rewrite) {
  const issues = [];
  if (i.stem_clarity <= 3) issues.push('stem');
  if (i.distractor_quality <= 3) issues.push('distractors');
  if (i.notation_polish <= 3) issues.push('notation');
  if (i.difficulty_calibration <= 2) issues.push('TOP-OF-BAND');
  console.log(`  ${i.id} (${i._difficulty} ${i._skill}): overall=${i.overall_cb_grade} [${issues.join(', ')}] — ${i.weakness_notes}`);
}
console.log('');

console.log(`PASSES (Overall ≥ 4): ${passes.length}`);
for (const i of passes) {
  console.log(`  ${i.id} (${i._difficulty} ${i._skill}): overall=${i.overall_cb_grade} ${i.weakness_notes ? '(note: ' + i.weakness_notes + ')' : ''}`);
}
