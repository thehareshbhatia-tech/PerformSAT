#!/usr/bin/env node
/**
 * Reorder Module 2 of every practice test so the difficulty curve ramps from
 * upper-medium into top-of-band hard, instead of opening with H7 and scattering
 * mediums randomly.
 *
 * Target order (medium positions, in priority order):
 *   [1, 2, 3, 5, 7, 13]
 *
 * Whichever of those positions are still available given the test's medium
 * count get filled with mediums (in their original relative order); hards fill
 * everything else (also in their original relative order). Easies are not
 * expected in M2 hard track but are treated as mediums for ordering purposes
 * if they appear.
 *
 * Each question's `id` field is updated to match its new position so the
 * id == position convention is preserved.
 *
 * Module 1 is left untouched (its 5E/9M/8H ramp is already correct).
 *
 * Usage:
 *   node scripts/reorderModule2.mjs --dry-run            # report only, no writes
 *   node scripts/reorderModule2.mjs                       # apply to all 12 tests
 *   node scripts/reorderModule2.mjs --test=1,3,5          # apply to listed tests
 */

import fs from 'fs';
import path from 'path';
import vm from 'vm';
import { fileURLToPath } from 'url';
import { indexQuestionLines, M2_MEDIUM_PRIORITY_POSITIONS } from './calibrateModule.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');
const TESTS_DIR = path.join(ROOT, 'src', 'data', 'practiceTests');

const MEDIUM_PRIORITY_POSITIONS = M2_MEDIUM_PRIORITY_POSITIONS;
const M2_LENGTH = 22;

function parseArgs() {
  const args = process.argv.slice(2);
  const DRY = args.includes('--dry-run');
  const T = args.find(a => a.startsWith('--test='));
  const tests = T
    ? T.split('=')[1].split(',').map(n => parseInt(n, 10))
    : Array.from({ length: 12 }, (_, i) => i + 1);
  return { dry: DRY, tests };
}

function loadPracticeTest(n) {
  const file = path.join(TESTS_DIR, `practiceTest${n}.js`);
  let src = fs.readFileSync(file, 'utf8');
  src = src.replace(/^export\s+const\s+/gm, 'var ').replace(/^export\s+default\s+[^;]+;?$/gm, '');
  const ctx = {};
  vm.createContext(ctx);
  vm.runInContext(src, ctx);
  return ctx[`practiceTest${n}`];
}

function computeNewOrder(questions) {
  const mediums = [];
  const hards = [];
  const others = [];
  for (const q of questions) {
    if (q.difficulty === 'medium') mediums.push(q);
    else if (q.difficulty === 'hard') hards.push(q);
    else others.push(q);
  }
  // Treat any non-medium / non-hard items (rare in M2 hard track) as mediums.
  if (others.length > 0) {
    console.warn(`  [warning] ${others.length} non-medium/hard question(s) in M2 — placing them at medium positions`);
    mediums.unshift(...others);
  }
  if (questions.length !== M2_LENGTH) {
    throw new Error(`expected ${M2_LENGTH} questions in M2, got ${questions.length}`);
  }
  const N_M = mediums.length;
  if (N_M > MEDIUM_PRIORITY_POSITIONS.length) {
    throw new Error(`too many mediums (${N_M}) — priority list has ${MEDIUM_PRIORITY_POSITIONS.length} slots`);
  }
  const mediumPositions = new Set(MEDIUM_PRIORITY_POSITIONS.slice(0, N_M));
  const out = new Array(M2_LENGTH);
  let mIdx = 0, hIdx = 0;
  for (let pos = 1; pos <= M2_LENGTH; pos++) {
    if (mediumPositions.has(pos)) {
      out[pos - 1] = mediums[mIdx++];
    } else {
      out[pos - 1] = hards[hIdx++];
    }
  }
  if (mIdx !== mediums.length || hIdx !== hards.length) {
    throw new Error(`reorder accounting mismatch: mediums ${mIdx}/${mediums.length}, hards ${hIdx}/${hards.length}`);
  }
  return out;
}

function difficultyCode(q) {
  return q.difficulty === 'easy' ? 'E' : q.difficulty === 'medium' ? 'M' : 'H';
}

function describeOrder(questions) {
  return questions.map(q => `${difficultyCode(q)}${q.band ?? '?'}`).join(' ');
}

function reorderTestFile(n, { dry } = {}) {
  const file = path.join(TESTS_DIR, `practiceTest${n}.js`);
  const src = fs.readFileSync(file, 'utf8');
  const lines = src.split('\n');
  const pt = loadPracticeTest(n);
  const m2Questions = (pt.modules[1] && pt.modules[1].questions) || [];

  // Identify each M2 question's source line range.
  const lineIndex = indexQuestionLines(src);
  const m2LineEntries = lineIndex.filter(e => e.moduleIndex === 1);
  if (m2LineEntries.length !== m2Questions.length) {
    throw new Error(`line index has ${m2LineEntries.length} M2 entries but parsed test has ${m2Questions.length}`);
  }

  // Pair each parsed question with its source-text block.
  const blocks = m2Questions.map((q, i) => {
    const entry = m2LineEntries[i];
    // Extract lines [startLine .. endLine] (1-indexed inclusive).
    const text = lines.slice(entry.startLine - 1, entry.endLine).join('\n');
    return { q, startLine: entry.startLine, endLine: entry.endLine, text };
  });

  // Strip a trailing comma (and any trailing whitespace) from each block.
  // The closing brace may or may not have ',' on the same line; normalize.
  for (const b of blocks) {
    b.text = b.text.replace(/,\s*$/, '');
  }

  // Original/new order summaries (for the report).
  const originalOrder = describeOrder(m2Questions);
  const newQuestions = computeNewOrder(m2Questions);
  const newOrder = describeOrder(newQuestions);

  // Build a map from question reference (object identity) to its source text.
  const blockBySrcOrder = new Map(blocks.map(b => [b.q, b.text]));

  // Update each block's `id: <number>` line to match its NEW position.
  // Scope: only the question-level id at the very top of the block (avoid
  // matching nested choice ids like `id: "A"`). The pattern requires `id:`
  // followed by an integer literal, anchored at the start of a line.
  const reorderedBlocks = newQuestions.map((q, idx) => {
    const newPos = idx + 1;
    let text = blockBySrcOrder.get(q);
    text = text.replace(
      /(\n|^)([ \t]*)id:\s*\d+/m,
      (_match, lead, ws) => `${lead}${ws}id: ${newPos}`,
    );
    return text;
  });

  // Reassemble: prefix (lines before first M2 question) + new blocks + suffix.
  const firstStart = m2LineEntries[0].startLine;          // 1-indexed
  const lastEnd = m2LineEntries[m2LineEntries.length - 1].endLine; // 1-indexed
  const prefix = lines.slice(0, firstStart - 1).join('\n');
  // Skip the line numbered `lastEnd` itself; start suffix at `lastEnd` index
  // (lines is 0-indexed, lastEnd is 1-indexed line of last `}`). The line at
  // lastEnd in the array is index lastEnd-1, so suffix starts at lastEnd.
  const suffix = lines.slice(lastEnd).join('\n');

  // Join blocks with ',\n' between but no trailing comma after the last.
  const reorderedSection = reorderedBlocks
    .map((t, i) => t + (i < reorderedBlocks.length - 1 ? ',' : ''))
    .join('\n');

  const newSrc = prefix + '\n' + reorderedSection + '\n' + suffix;

  // Sanity check: the reconstructed file should still be parseable JS and
  // contain the same set of question ids (by their stem text) — only order
  // and the id field should change.
  validateRewrite(n, newSrc, m2Questions);

  // Verify the new order's M2 difficulties match the priority pattern.
  validateOrderingPattern(newQuestions, n);

  if (!dry) {
    fs.writeFileSync(file, newSrc);
  }

  return { file, originalOrder, newOrder, dry };
}

function validateRewrite(n, newSrc, originalM2Questions) {
  // Re-parse the new source and confirm M2 has the same set of stems and
  // the new id sequence is 1..22.
  let src = newSrc;
  src = src.replace(/^export\s+const\s+/gm, 'var ').replace(/^export\s+default\s+[^;]+;?$/gm, '');
  const ctx = {};
  vm.createContext(ctx);
  try {
    vm.runInContext(src, ctx);
  } catch (e) {
    throw new Error(`rewritten practiceTest${n}.js does not parse: ${e.message}`);
  }
  const newPt = ctx[`practiceTest${n}`];
  const newM2 = (newPt.modules[1] && newPt.modules[1].questions) || [];
  if (newM2.length !== originalM2Questions.length) {
    throw new Error(`M2 length changed: was ${originalM2Questions.length}, now ${newM2.length}`);
  }
  const oldStems = new Set(originalM2Questions.map(q => q.question));
  const newStems = new Set(newM2.map(q => q.question));
  if (oldStems.size !== newStems.size) {
    throw new Error(`M2 stem set size changed: was ${oldStems.size}, now ${newStems.size}`);
  }
  for (const s of oldStems) {
    if (!newStems.has(s)) throw new Error(`stem missing after reorder: "${s.slice(0, 80)}…"`);
  }
  // ids must be 1..22 in order
  for (let i = 0; i < newM2.length; i++) {
    if (newM2[i].id !== i + 1) {
      throw new Error(`M2 id at position ${i + 1} is ${newM2[i].id} (expected ${i + 1})`);
    }
  }
}

function validateOrderingPattern(questions, n) {
  const N_M = questions.filter(q => q.difficulty === 'medium').length;
  const expected = new Set(MEDIUM_PRIORITY_POSITIONS.slice(0, N_M));
  for (let i = 0; i < questions.length; i++) {
    const pos = i + 1;
    const isMedium = questions[i].difficulty === 'medium';
    const shouldBeMedium = expected.has(pos);
    if (isMedium !== shouldBeMedium) {
      throw new Error(`test ${n} M2 position ${pos}: difficulty ${questions[i].difficulty} but expected ${shouldBeMedium ? 'medium' : 'hard'}`);
    }
  }
}

function main() {
  const { dry, tests } = parseArgs();
  console.log(`Reordering Module 2 ${dry ? '(DRY RUN)' : '(WRITING FILES)'} for tests: ${tests.join(', ')}`);
  console.log(`Medium priority positions: [${MEDIUM_PRIORITY_POSITIONS.join(', ')}]`);
  console.log();
  let ok = 0, failed = 0;
  for (const n of tests) {
    try {
      const r = reorderTestFile(n, { dry });
      console.log(`Test ${String(n).padStart(2, ' ')}:`);
      console.log(`  before: ${r.originalOrder}`);
      console.log(`  after:  ${r.newOrder}`);
      ok++;
    } catch (e) {
      console.error(`Test ${n}: FAILED — ${e.message}`);
      failed++;
    }
    console.log();
  }
  console.log(`Done: ${ok} ok, ${failed} failed${dry ? ' (no files written)' : ''}`);
  if (failed > 0) process.exit(1);
}

main();
