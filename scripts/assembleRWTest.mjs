#!/usr/bin/env node
/**
 * R&W test assembler — Phase 6 prep.
 *
 * Walks `scripts/generated/authored/test{N}/q{NN}.json`, sorts by the
 * blueprint qIndex, splits items into Module 1 (qIndex 1-27) and Module 2
 * (qIndex 28-54), and emits a syntactically valid
 * `practiceTest{N}RW.js` matching the shape of the existing bank files
 * (`src/data/practiceTests/practiceTest{1..12}RW.js`).
 *
 * Usage:
 *   node scripts/assembleRWTest.mjs --test=1
 *   node scripts/assembleRWTest.mjs --test=1 --out=/tmp/out.js
 *   node scripts/assembleRWTest.mjs --test=1 --allow-stubs   # bypass _stub guard
 *   node scripts/assembleRWTest.mjs --test=1 --ship          # overwrite production bank
 *   node scripts/assembleRWTest.mjs --all
 *
 * Output:
 *   default → scripts/generated/assembled/practiceTest{N}RW.js  (staging)
 *   --ship  → src/data/practiceTests/practiceTest{N}RW.js       (production overwrite)
 *
 * Safety guards:
 *   - Refuses to emit if any authored item has `_stub: true`, unless
 *     `--allow-stubs` is set. This lets us round-trip the assembler
 *     against S4's stub bank for testing without ever writing stub
 *     content into the production tree.
 *   - Refuses to emit if any qIndex 1-54 is missing on disk (the
 *     manifest must report status="done" for every slot).
 *   - `--ship` is opt-in only; default is staging output.
 *
 * Exit code: 0 on success, 1 on any guard failure or read error.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');
const GEN_DIR = process.env.RW_GEN_DIR || path.join(ROOT, 'scripts', 'generated');
const AUTHORED_DIR = path.join(GEN_DIR, 'authored');
const MANIFEST_DIR = path.join(GEN_DIR, 'manifests');
const ASSEMBLED_DIR = path.join(GEN_DIR, 'assembled');
const TESTS_DIR = process.env.RW_TESTS_DIR || path.join(ROOT, 'src', 'data', 'practiceTests');

// ---------------------------------------------------------------------------
// CLI
// ---------------------------------------------------------------------------

function parseArgs(argv) {
  const args = argv.slice(2);
  const TEST_ARG = args.find(a => a.startsWith('--test='));
  const OUT_ARG = args.find(a => a.startsWith('--out='));
  const ALL = args.includes('--all');
  const ALLOW_STUBS = args.includes('--allow-stubs');
  const SHIP = args.includes('--ship');

  if (!TEST_ARG && !ALL) {
    throw new Error('--test=<n> or --all is required');
  }
  if (OUT_ARG && (ALL || SHIP)) {
    throw new Error('--out=<path> is incompatible with --all and --ship');
  }
  const testNumbers = ALL
    ? Array.from({ length: 12 }, (_, i) => i + 1)
    : TEST_ARG.split('=')[1].split(',').map(n => parseInt(n, 10));
  for (const n of testNumbers) {
    if (!Number.isInteger(n) || n < 1 || n > 12) {
      throw new Error(`--test value must be 1-12 (got ${n})`);
    }
  }
  return {
    testNumbers,
    out: OUT_ARG ? OUT_ARG.split('=').slice(1).join('=') : null,
    allowStubs: ALLOW_STUBS,
    ship: SHIP,
  };
}

// ---------------------------------------------------------------------------
// Read + validate authored items
// ---------------------------------------------------------------------------

/** Load the manifest if it exists; return null otherwise (the file-on-disk
 *  count is the authoritative check, manifest is just additional context). */
function tryLoadManifest(testN) {
  const p = path.join(MANIFEST_DIR, `practiceTest${testN}RW-manifest.json`);
  if (!fs.existsSync(p)) return null;
  return JSON.parse(fs.readFileSync(p, 'utf8'));
}

/**
 * Walk q01.json...q54.json for the given test. Returns the array of items
 * sorted by qIndex (1-54). Throws if any are missing — partial assembly
 * would silently truncate the test and we'd rather fail loudly.
 */
function loadAuthoredItems(testN) {
  const dir = path.join(AUTHORED_DIR, `test${testN}`);
  if (!fs.existsSync(dir)) {
    throw new Error(`no authored items for test ${testN} at ${dir}`);
  }
  const items = [];
  const missing = [];
  for (let q = 1; q <= 54; q++) {
    const f = path.join(dir, `q${String(q).padStart(2, '0')}.json`);
    if (!fs.existsSync(f)) {
      missing.push(q);
      continue;
    }
    items.push({ qIndex: q, item: JSON.parse(fs.readFileSync(f, 'utf8')) });
  }
  if (missing.length > 0) {
    throw new Error(`test ${testN} missing q${missing.map(q => String(q).padStart(2, '0')).join(', q')} in ${dir}`);
  }
  return items;
}

/** Strip authoring-only metadata (`_stub`, `module`) so the emitted file
 *  matches the shape of the existing bank items. */
function cleanItem(item) {
  const { _stub, module: _mod, ...clean } = item;
  return clean;
}

// ---------------------------------------------------------------------------
// Emit
// ---------------------------------------------------------------------------

const HEADER_TEMPLATE = (testN) => `// Practice Test ${testN} — SAT Reading & Writing (R&W)
// Auto-assembled by scripts/assembleRWTest.mjs from the authored JSON in
// scripts/generated/authored/test${testN}/. Do not hand-edit this file —
// re-run the assembler against the manifest to regenerate.
//
// 2 Modules, 27 questions each (54 total) in 32 minutes per module.
// Distribution per module follows the official digital SAT R&W blueprint:
//   * Information and Ideas: ~10 (Central Ideas/Details, Inferences,
//     Command of Evidence — Textual, Command of Evidence — Quantitative)
//   * Craft and Structure: ~7 (Words in Context, Text Structure & Purpose,
//     Cross-Text Connections)
//   * Standard English Conventions: ~6 (Boundaries, Form/Structure/Sense)
//   * Expression of Ideas: ~4 (Transitions, Rhetorical Synthesis / Notes)
//
// All passages are ORIGINAL prose written for this practice test. No
// passages are taken or paraphrased from College Board materials, prep
// books, or other copyrighted sources.

`;

function formatModule(moduleIndex, items) {
  const lines = [
    `    {`,
    `      id: "module-${moduleIndex}",`,
    `      title: "Module ${moduleIndex}",`,
    `      timeLimit: 32,`,
    `      questions: [`,
  ];
  items.forEach((item, i) => {
    const json = JSON.stringify(item, null, 2);
    // Indent each line of the JSON by 8 spaces so it nests inside the
    // questions array. Trailing comma between questions, none after last.
    const indented = json.split('\n').map(l => '        ' + l).join('\n');
    lines.push(indented + (i < items.length - 1 ? ',' : ''));
  });
  lines.push(`      ]`);
  lines.push(`    }`);
  return lines.join('\n');
}

function emitTestFile(testN, items) {
  const m1Items = items.filter(it => it.qIndex <= 27).map(it => cleanItem(it.item));
  const m2Items = items.filter(it => it.qIndex > 27).map(it => cleanItem(it.item));
  if (m1Items.length !== 27 || m2Items.length !== 27) {
    throw new Error(`test ${testN}: expected 27 items per module, got M1=${m1Items.length} M2=${m2Items.length}`);
  }
  const body = [
    HEADER_TEMPLATE(testN),
    `export const practiceTest${testN}RW = {`,
    `  id: "practice-test-${testN}-rw",`,
    `  title: "Practice Test ${testN} — Reading & Writing",`,
    `  description: "Full-length SAT Reading & Writing practice test with 2 modules",`,
    `  section: "reading-writing",`,
    `  totalQuestions: 54,`,
    `  timePerModule: 32,`,
    `  modules: [`,
    formatModule(1, m1Items) + ',',
    formatModule(2, m2Items),
    `  ]`,
    `};`,
    ``,
    `export default practiceTest${testN}RW;`,
    ``,
  ].join('\n');
  return body;
}

// ---------------------------------------------------------------------------
// Per-test driver
// ---------------------------------------------------------------------------

function assembleTest(testN, opts) {
  const items = loadAuthoredItems(testN);
  const stubsPresent = items.filter(({ item }) => item._stub === true);
  if (stubsPresent.length > 0 && !opts.allowStubs) {
    throw new Error(
      `test ${testN}: refusing to assemble — ${stubsPresent.length} of 54 items are stubs `
      + `(_stub: true). Re-author with --real, or pass --allow-stubs to bypass for testing.`
    );
  }

  // Optional manifest sanity check — surface useful warnings, but don't
  // gate on it (manifest may be missing in edge cases like manual recovery).
  const manifest = tryLoadManifest(testN);
  if (manifest) {
    const notDone = manifest.items.filter(it => it.status !== 'done');
    if (notDone.length > 0) {
      console.error(`  test ${testN}: warning — manifest reports ${notDone.length} non-done slots: ${notDone.map(it => 'q' + it.qIndex).slice(0, 5).join(', ')}${notDone.length > 5 ? '…' : ''}`);
    }
  }

  const body = emitTestFile(testN, items);

  // Resolve output path: --out (single test only), --ship (production), or staging default.
  let outPath;
  if (opts.out) {
    outPath = opts.out;
  } else if (opts.ship) {
    outPath = path.join(TESTS_DIR, `practiceTest${testN}RW.js`);
  } else {
    fs.mkdirSync(ASSEMBLED_DIR, { recursive: true });
    outPath = path.join(ASSEMBLED_DIR, `practiceTest${testN}RW.js`);
  }
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, body);

  const stubNote = stubsPresent.length > 0 ? ` (with ${stubsPresent.length} stubs — staging only)` : '';
  console.log(`  test ${testN}: assembled 54 items → ${path.relative(ROOT, outPath)}${stubNote}`);
  return { testN, outPath, itemCount: items.length, stubCount: stubsPresent.length };
}

// ---------------------------------------------------------------------------
// main()
// ---------------------------------------------------------------------------

function main() {
  const opts = parseArgs(process.argv);
  console.log(`assembleRWTest.mjs — tests=${opts.testNumbers.join(',')} ship=${opts.ship} allowStubs=${opts.allowStubs}`);
  const results = [];
  for (const testN of opts.testNumbers) {
    try {
      results.push(assembleTest(testN, opts));
    } catch (e) {
      console.error(`  test ${testN}: ✗ ${e.message}`);
      results.push({ testN, error: e.message });
    }
  }
  const ok = results.filter(r => !r.error).length;
  const failed = results.length - ok;
  console.log(`\nSummary: ${ok}/${results.length} tests assembled${failed > 0 ? ` (${failed} failed)` : ''}`);
  process.exit(failed > 0 ? 1 : 0);
}

function isMainModule() {
  const entry = process.argv[1];
  if (!entry) return false;
  return import.meta.url === `file://${entry}`
    || import.meta.url.endsWith(path.basename(entry));
}

if (isMainModule()) {
  try {
    main();
  } catch (e) {
    console.error(e.message);
    process.exit(1);
  }
}

export {
  parseArgs,
  loadAuthoredItems,
  cleanItem,
  emitTestFile,
  assembleTest,
};
