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
// Shape transforms — convert authoring-friendly `passage` into the structured
// fields PracticeTest.jsx expects for three skills:
//
//   cross-text-connections    →  passages: [{ label, text }, ...]
//   command-of-evidence-quant →  passage + questionTable: { type, caption, headers, rows }
//   rhetorical-synthesis      →  studentNotes: { intro, bullets, goal? }
//
// Subagents may emit either the flat `passage` form (legacy / simple) or
// the already-structured form. Transforms are idempotent: items that
// already carry the structured field pass through untouched. Items in the
// flat form get parsed; if the parse fails (regex doesn't match), the
// transform throws so a malformed authored item halts assembly rather
// than silently corrupting the bank.
// ---------------------------------------------------------------------------

function transformCrossText(item) {
  if (item.passages && Array.isArray(item.passages) && item.passages.length >= 2) {
    // Already structured.
    const { passage: _drop, ...rest } = item;
    return rest;
  }
  if (!item.passage) {
    throw new Error(`q${item.id}: cross-text item has neither passage nor passages`);
  }
  // Match "Text 1\n\n<content1>\n\nText 2\n\n<content2>" (with possible
  // trailing whitespace). Allow Text-N labels in case CB-style 3+ texts
  // appear (rare; fall back to Text 1/2 only).
  const re = /^Text 1\s*\n+([\s\S]+?)\n+Text 2\s*\n+([\s\S]+?)\s*$/;
  const m = item.passage.match(re);
  if (!m) {
    throw new Error(`q${item.id}: cross-text passage does not match "Text 1\\n\\n…\\n\\nText 2\\n\\n…" pattern`);
  }
  const { passage: _drop, ...rest } = item;
  return {
    ...rest,
    passages: [
      { label: 'Text 1', text: m[1].trim() },
      { label: 'Text 2', text: m[2].trim() },
    ],
  };
}

function transformCOEQuant(item) {
  if (item.questionTable) {
    return item;
  }
  if (!item.passage || !/\n\s*\|/.test(item.passage)) {
    // No table embedded — COE-Q can be table-free (passage-only data
    // references). Pass through unchanged.
    return item;
  }
  const lines = item.passage.split('\n');
  const tableStart = lines.findIndex(l => /^\s*\|/.test(l));
  if (tableStart === -1) return item;

  // Caption: walk back from tableStart over non-blank lines. Caption is
  // the contiguous block of non-blank, non-pipe lines just above the table.
  let captionStart = tableStart;
  while (captionStart > 0 && lines[captionStart - 1].trim() !== '' && !/^\s*\|/.test(lines[captionStart - 1])) {
    captionStart--;
  }
  const captionLines = lines.slice(captionStart, tableStart).map(l => l.trim()).filter(Boolean);
  const caption = captionLines.join(' ');

  // Prose passage: everything before the caption block, trimmed of trailing blanks.
  let proseEnd = captionStart - 1;
  while (proseEnd >= 0 && lines[proseEnd].trim() === '') proseEnd--;
  const passage = lines.slice(0, proseEnd + 1).join('\n').trim();

  // Table parse: header / separator / rows. Cells split on `|`, slice(1,-1)
  // drops the leading and trailing pipe halves.
  const tableLines = lines.slice(tableStart).filter(l => /^\s*\|/.test(l));
  if (tableLines.length < 3) {
    throw new Error(`q${item.id}: COE-Q table has only ${tableLines.length} pipe-lines (need header + separator + at least 1 row)`);
  }
  const cells = (line) => line.split('|').slice(1, -1).map(c => c.trim());
  const headers = cells(tableLines[0]);
  // Validate separator looks like |---|---|...
  if (!/^\s*\|[\s|:-]+\|\s*$/.test(tableLines[1])) {
    throw new Error(`q${item.id}: COE-Q table second pipe-line ${JSON.stringify(tableLines[1])} doesn't look like a separator`);
  }
  const rows = tableLines.slice(2).map(cells);
  if (rows.some(r => r.length !== headers.length)) {
    throw new Error(`q${item.id}: COE-Q table has ragged rows (header has ${headers.length} cols)`);
  }

  return {
    ...item,
    passage,
    questionTable: {
      type: 'table',
      caption,
      headers,
      rows,
    },
  };
}

function transformRhetSyn(item) {
  if (item.studentNotes) {
    const { passage: _drop, ...rest } = item;
    return rest;
  }
  if (!item.passage) {
    throw new Error(`q${item.id}: rhet-syn item has neither passage nor studentNotes`);
  }
  // Pattern: "<intro line>:\n\n- bullet\n- bullet\n..."
  const bulletStart = item.passage.indexOf('\n\n- ');
  if (bulletStart === -1) {
    throw new Error(`q${item.id}: rhet-syn passage doesn't contain "\\n\\n- " bullet boundary`);
  }
  const intro = item.passage.slice(0, bulletStart).trim();
  const bulletsBlock = item.passage.slice(bulletStart + 2);
  const bullets = bulletsBlock
    .split('\n')
    .filter(l => l.startsWith('- '))
    .map(l => l.slice(2).trim());
  if (bullets.length < 3) {
    throw new Error(`q${item.id}: rhet-syn has only ${bullets.length} bullets (CB pattern is 4-6)`);
  }

  // Goal extraction: rhet-syn questions follow the pattern
  //   "The student wants to <goal>. <canonical question>"
  // If matched, the leading "The student wants to..." sentence becomes
  // studentNotes.goal and is stripped from the question.
  let goal = '';
  let question = item.question || '';
  const goalRe = /^(The student wants to[^.]+\.)\s+(.+)$/;
  const gm = question.match(goalRe);
  if (gm) {
    goal = gm[1].trim();
    question = gm[2].trim();
  }

  const { passage: _drop, ...rest } = item;
  return {
    ...rest,
    question,
    studentNotes: {
      intro,
      bullets,
      ...(goal ? { goal } : {}),
    },
  };
}

/**
 * Apply skill-specific shape transforms after `cleanItem`. Idempotent:
 * items already in structured form pass through unchanged.
 */
function transformItemShape(item) {
  switch (item.skill) {
    case 'cross-text-connections':
      return transformCrossText(item);
    case 'command-of-evidence-quantitative':
      return transformCOEQuant(item);
    case 'rhetorical-synthesis':
      return transformRhetSyn(item);
    default:
      return item;
  }
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
  const m1Items = items.filter(it => it.qIndex <= 27).map(it => transformItemShape(cleanItem(it.item)));
  const m2Items = items.filter(it => it.qIndex > 27).map(it => transformItemShape(cleanItem(it.item)));
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
  transformCrossText,
  transformCOEQuant,
  transformRhetSyn,
  transformItemShape,
  emitTestFile,
  assembleTest,
};
