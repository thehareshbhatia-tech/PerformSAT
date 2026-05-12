#!/usr/bin/env bun
/**
 * auditBandCalibration.mjs — list items whose stem length suggests
 * difficulty miscalibration. Used when the codex grader is offline
 * (rate-limited) and we need a local heuristic to triage.
 *
 * Stem-length thresholds (calibrated against passing items from the
 * 2026-05-12 grading runs):
 *
 *   - HARD items   < 100 chars: SUSPECT (most CB hard items are 150+ chars)
 *   - MEDIUM items < 60 chars:  SUSPECT (most CB medium items are 100+ chars)
 *
 * This is a precision-tuned heuristic, not a gate. Items that pass the
 * threshold might still fail the grader (and vice versa). Use this to
 * generate a triage list for manual review.
 *
 * Run:
 *   bun scripts/auditBandCalibration.mjs                # text report
 *   bun scripts/auditBandCalibration.mjs --json         # JSONL
 *   bun scripts/auditBandCalibration.mjs --skill=NAME   # filter by skill
 */

import path from 'node:path';
import { pathToFileURL } from 'node:url';

const BANK_DIR = '/Users/hareshbhatia/PerformSAT/src/data/questions/bank';
const SHARDS = ['algebra', 'advancedMath', 'geometry', 'problemSolving'];

const HARD_STEM_THRESHOLD = 100;
const MEDIUM_STEM_THRESHOLD = 60;

async function loadAll() {
  const items = [];
  for (const shard of SHARDS) {
    const url = pathToFileURL(path.join(BANK_DIR, `${shard}.js`)).href + '?t=' + Date.now();
    const mod = await import(url);
    const arr = Object.values(mod).find(Array.isArray) || mod.default;
    for (const item of arr) items.push({ ...item, _shard: shard });
  }
  return items;
}

const args = process.argv.slice(2);
const jsonMode = args.includes('--json');
const skillArg = args.find(a => a.startsWith('--skill='));
const filterSkill = skillArg ? skillArg.split('=')[1] : null;

const items = await loadAll();
const suspects = [];

for (const item of items) {
  if (filterSkill && !(item.skills || []).includes(filterSkill)) continue;
  const stem = item.question || '';
  const stemLen = stem.length;
  const threshold = item.difficulty === 'hard' ? HARD_STEM_THRESHOLD
                  : item.difficulty === 'medium' ? MEDIUM_STEM_THRESHOLD
                  : null;
  if (threshold && stemLen < threshold) {
    // Also check: does the stem contain a "real" multi-step indicator?
    // If the stem has ≥2 math expressions OR a "given...what is..." pattern,
    // it may still be appropriately calibrated despite being short.
    const mathBlocks = (stem.match(/\$[^$]+\$/g) || []).length;
    const hasGiven = /\bgiven\b|\bdefined by\b|\bequations?\b|\bsystem\b/i.test(stem);
    // Multi-step or "given" stems often hide complexity in choice analysis,
    // so de-emphasize but don't filter out.
    suspects.push({
      id: item.id,
      shard: item._shard,
      difficulty: item.difficulty,
      type: item.type,
      skills: (item.skills || []).join(','),
      stemLen,
      threshold,
      mathBlocks,
      hasGiven,
      sourceStyleRef: item.sourceStyleRef,
      excerpt: stem.slice(0, 120),
    });
  }
}

if (jsonMode) {
  for (const s of suspects) console.log(JSON.stringify(s));
  process.exit(0);
}

// Sort: hard items first, then by stem length ascending (most suspect first)
suspects.sort((a, b) => {
  if (a.difficulty !== b.difficulty) return a.difficulty === 'hard' ? -1 : 1;
  return a.stemLen - b.stemLen;
});

const hardCount = suspects.filter(s => s.difficulty === 'hard').length;
const medCount = suspects.filter(s => s.difficulty === 'medium').length;

console.log(`Band-calibration audit — ${items.length} items scanned`);
console.log(`Suspects: ${suspects.length} total (${hardCount} hard, ${medCount} medium)`);
console.log(`  Hard threshold:   < ${HARD_STEM_THRESHOLD} chars stem`);
console.log(`  Medium threshold: < ${MEDIUM_STEM_THRESHOLD} chars stem`);
console.log('');

const printRows = (rows, label) => {
  if (!rows.length) return;
  console.log(`--- ${label} (${rows.length}) ---`);
  for (const s of rows.slice(0, 50)) {
    const flag = s.hasGiven ? '[given]' : s.mathBlocks >= 2 ? '[multi-math]' : '[short]';
    console.log(`  ${s.id} (${s.skills}) len=${s.stemLen} ${flag}`);
    console.log(`    ${s.excerpt}`);
  }
  if (rows.length > 50) console.log(`  ... ${rows.length - 50} more`);
  console.log('');
};

printRows(suspects.filter(s => s.difficulty === 'hard'), 'HARD items below threshold');
printRows(suspects.filter(s => s.difficulty === 'medium'), 'MEDIUM items below threshold');
