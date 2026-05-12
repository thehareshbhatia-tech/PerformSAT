#!/usr/bin/env bun
/**
 * retagMultiStep.mjs — re-tag the 7 word-problem multi-step test items.
 *
 * Each item is uniquely identified by its explanation prefix (SAT Pattern
 * line + Choice/Answer line + Fast Way prefix). We do a literal string
 * find-replace; backslashes in the LaTeX are pre-escaped in the source.
 */

import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(__dirname, '..');

// Each entry: file, oldAnchor (substring), newAnchor (substring after replace).
// oldAnchor / newAnchor differ only in the SAT Pattern title.
const RETAGS = [
  {
    file: 'practiceTest1.js',
    findExpl: '**SAT Pattern: Multi-Step Linear Equation**\\n\\n**Choice B is correct.**\\n\\n**The Fast Way (~40s):** Total $= 5n',
    replaceExpl: '**SAT Pattern: Word-Problem to Multi-Step Linear**\\n\\n**Choice B is correct.**\\n\\n**The Fast Way (~40s):** Total $= 5n',
  },
  {
    file: 'practiceTest2.js',
    findExpl: '**SAT Pattern: Multi-Step Linear Equation**\\n\\n**Choice B is correct.**\\n\\n**The Fast Way (~30s):** Let $n =$ number of $7$-',
    replaceExpl: '**SAT Pattern: Word-Problem to Multi-Step Linear**\\n\\n**Choice B is correct.**\\n\\n**The Fast Way (~30s):** Let $n =$ number of $7$-',
  },
  {
    file: 'practiceTest3.js',
    findExpl: '**SAT Pattern: Multi-Step Linear Equation**\\n\\n**Choice B is correct.**\\n\\n**The Fast Way (~40s):** Total $= 4r + r + (r + 3',
    replaceExpl: '**SAT Pattern: Word-Problem to Multi-Step Linear**\\n\\n**Choice B is correct.**\\n\\n**The Fast Way (~40s):** Total $= 4r + r + (r + 3',
  },
  {
    file: 'practiceTest7.js',
    findExpl: '**SAT Pattern: Multi-Step Linear Equation**\\n\\n**Choice B is correct.**\\n\\n**The Fast Way (~40s):** Total $= 4r + r + (r + 2',
    replaceExpl: '**SAT Pattern: Word-Problem to Multi-Step Linear**\\n\\n**Choice B is correct.**\\n\\n**The Fast Way (~40s):** Total $= 4r + r + (r + 2',
  },
  {
    file: 'practiceTest8.js',
    findExpl: '**SAT Pattern: Multi-Step Linear Equation**\\n\\n**The correct answer is $8$.**\\n\\n**The Fast Way (~15s):** ${}3.50 + 2.25m',
    replaceExpl: '**SAT Pattern: Linear Cost Equation Setup**\\n\\n**The correct answer is $8$.**\\n\\n**The Fast Way (~15s):** ${}3.50 + 2.25m',
  },
  {
    file: 'practiceTest8.js',
    findExpl: '**SAT Pattern: Multi-Step Linear Equation**\\n\\n**Choice C is correct.**\\n\\n**The Fast Way (~40s):** Total $= 4n + n + (n + 5',
    replaceExpl: '**SAT Pattern: Word-Problem to Multi-Step Linear**\\n\\n**Choice C is correct.**\\n\\n**The Fast Way (~40s):** Total $= 4n + n + (n + 5',
  },
  {
    file: 'practiceTest9.js',
    findExpl: '**SAT Pattern: Multi-Step Linear Equation**\\n\\n**Choice B is correct.**\\n\\n**The Fast Way (~40s):** Total $= 4n + n + (n + 3',
    replaceExpl: '**SAT Pattern: Word-Problem to Multi-Step Linear**\\n\\n**Choice B is correct.**\\n\\n**The Fast Way (~40s):** Total $= 4n + n + (n + 3',
  },
];

let total = 0, skipped = 0;
for (const r of RETAGS) {
  const fp = path.join(REPO_ROOT, 'src/data/practiceTests', r.file);
  let src = await fs.readFile(fp, 'utf8');
  if (!src.includes(r.findExpl)) {
    console.log('  SKIP ' + r.file + ': anchor not found (already re-tagged?)');
    skipped++;
    continue;
  }
  // Verify uniqueness
  let count = 0;
  let pos = 0;
  while ((pos = src.indexOf(r.findExpl, pos)) !== -1) {
    count++;
    pos += r.findExpl.length;
  }
  if (count > 1) {
    console.log('  AMBIGUOUS ' + r.file + ': anchor matches ' + count + ' times — skipping');
    skipped++;
    continue;
  }
  src = src.replace(r.findExpl, r.replaceExpl);
  await fs.writeFile(fp, src);
  console.log('  OK   ' + r.file + ': ' + r.findExpl.slice(0, 60).replace(/\\n/g, '↵') + '...');
  total++;
}
console.log('\nDone: ' + total + ' edits applied, ' + skipped + ' skipped.');
