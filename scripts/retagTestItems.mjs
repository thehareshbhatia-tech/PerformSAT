#!/usr/bin/env bun
/**
 * retagTestItems.mjs — apply granularity-revision re-tags to test bundle items.
 *
 * Reads a hand-curated list of (test, module, id, oldTitle, newTitle) tuples
 * and rewrites the SAT Pattern header inside each item's explanation string.
 *
 * Idempotent: re-running after one application is a no-op (the old title
 * won't be found anymore).
 *
 * Run: bun scripts/retagTestItems.mjs
 */

import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(__dirname, '..');

// Hand-curated list. Each entry was classified by reading the stem.
// BUILD = write the model from a verbal scenario (doubles, triples, decay).
// INTERPRET = the model is given; decode what its parameters mean (% per period,
//             initial value, etc.).
const RETAGS = [
  // B1: Exponential split
  { test: 1, module: 'module1', id: 8, kind: 'BUILD', oldTitle: 'Exponential Growth/Decay' },
  { test: 1, module: 'module2', id: 14, kind: 'INTERPRET', oldTitle: 'Exponential Growth/Decay' },
  { test: 2, module: 'module2', id: 14, kind: 'INTERPRET', oldTitle: 'Exponential Growth/Decay' },
  { test: 3, module: 'module2', id: 13, kind: 'INTERPRET', oldTitle: 'Exponential Growth/Decay' },
  { test: 4, module: 'module1', id: 14, kind: 'BUILD', oldTitle: 'Exponential Growth/Decay' },
  { test: 4, module: 'module2', id: 13, kind: 'INTERPRET', oldTitle: 'Exponential Growth/Decay' },
  { test: 5, module: 'module1', id: 6, kind: 'INTERPRET', oldTitle: 'Exponential Growth/Decay' },
  { test: 5, module: 'module2', id: 18, kind: 'INTERPRET', oldTitle: 'Exponential Growth/Decay' },
  { test: 6, module: 'module2', id: 14, kind: 'INTERPRET', oldTitle: 'Exponential Growth/Decay' },
  { test: 7, module: 'module1', id: 10, kind: 'BUILD', oldTitle: 'Exponential Growth/Decay' },
  { test: 9, module: 'module1', id: 6, kind: 'BUILD', oldTitle: 'Exponential Growth/Decay' },
  { test: 9, module: 'module2', id: 14, kind: 'INTERPRET', oldTitle: 'Exponential Growth/Decay' },
  { test: 10, module: 'module1', id: 7, kind: 'BUILD', oldTitle: 'Exponential Growth/Decay' },
  { test: 10, module: 'module1', id: 18, kind: 'INTERPRET', oldTitle: 'Exponential Growth/Decay' },
  { test: 11, module: 'module2', id: 7, kind: 'BUILD', oldTitle: 'Exponential Growth with Period' },
  { test: 11, module: 'module2', id: 10, kind: 'INTERPRET', oldTitle: 'Exponential Growth/Decay' },
];

const NEW_TITLE_BY_KIND = {
  BUILD: 'Exponential Growth Model',
  INTERPRET: 'Exponential Growth Interpretation',
};

async function loadBundle(testNum) {
  const url = pathToFileURL(
    path.join(REPO_ROOT, 'src/data/practiceTests', `practiceTest${testNum}.js`),
  ).href;
  // Force re-import (in case multiple test bundles are loaded)
  const mod = await import(url + '?t=' + Date.now());
  return mod[`practiceTest${testNum}`];
}

async function main() {
  // Group retags by test for efficient file ops
  const byTest = new Map();
  for (const r of RETAGS) {
    if (!byTest.has(r.test)) byTest.set(r.test, []);
    byTest.get(r.test).push(r);
  }

  let totalEdits = 0;
  let totalSkipped = 0;

  for (const [testNum, retags] of byTest) {
    const filePath = path.join(REPO_ROOT, 'src/data/practiceTests', `practiceTest${testNum}.js`);
    let src = await fs.readFile(filePath, 'utf8');
    const bundle = await loadBundle(testNum);

    for (const r of retags) {
      const moduleIdx = r.module === 'module1' ? 0 : 1;
      const item = bundle.modules[moduleIdx].questions.find((q) => q.id === r.id);
      if (!item) {
        console.log(`  SKIP test${testNum} ${r.module} q${r.id}: not found`);
        totalSkipped++;
        continue;
      }
      const newTitle = NEW_TITLE_BY_KIND[r.kind];
      const oldPattern = `**SAT Pattern: ${r.oldTitle}**`;
      const newPattern = `**SAT Pattern: ${newTitle}**`;

      // The explanation in the file is a JS string literal. We need to find
      // the unique anchor — use the question stem combined with the old title
      // to disambiguate items with similar stems.
      //
      // Strategy: search for the explanation pattern AND a chunk of the stem
      // (first 60 chars) and verify uniqueness. Actually the simpler approach
      // is to find the explanation prefix combined with the stem to identify
      // the right item.
      const stem = item.question.slice(0, 80);

      // Build a regex that finds: stem (escaped) ... explanation: ... oldPattern
      // and replaces just the title within the explanation.
      const escStem = stem.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      // Search for the explanation line containing the old title, anchored
      // by the stem appearing in the same item (within ~500 chars before).
      const re = new RegExp(
        `(${escStem}[\\s\\S]{0,5000}?explanation:\\s*["'\\\`])(\\*\\*SAT Pattern: ${r.oldTitle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\*\\*)`,
      );
      const m = src.match(re);
      if (!m) {
        console.log(`  SKIP test${testNum} ${r.module} q${r.id}: anchor not found`);
        console.log(`    stem prefix: ${stem.slice(0, 40)}...`);
        console.log(`    old title:   ${r.oldTitle}`);
        totalSkipped++;
        continue;
      }
      const replacement = m[1] + newPattern;
      src = src.replace(m[0], replacement);
      console.log(`  OK   test${testNum} ${r.module} q${r.id}: "${r.oldTitle}" → "${newTitle}"`);
      totalEdits++;
    }

    await fs.writeFile(filePath, src);
  }

  console.log(`\nDone: ${totalEdits} edits applied, ${totalSkipped} skipped.`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
