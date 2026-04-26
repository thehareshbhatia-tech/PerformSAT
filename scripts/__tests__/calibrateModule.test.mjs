#!/usr/bin/env node
/**
 * Test suite for scripts/calibrateModule.mjs.
 * Mirrors the lightweight assert(cond,label) style used in scripts/testPipeline.mjs.
 *
 * Run: node scripts/__tests__/calibrateModule.test.mjs
 *
 * Covers:
 *   - tokenize() lowercase/punctuation/stopword behaviour
 *   - checkUniqueness() pass/fail against cached QBank stems
 *   - analyzeDomainCoverage() on Test 1 (real fixture) + a synthetic balanced module
 *   - --module=1 produces report file at expected path (uses CALIBRATE_OUTPUT_DIR)
 *   - --module=2 --track=hard / --track=easy filter as documented
 *   - lintPracticeTest() rejects badly-formed synthetic test
 *   - lintPracticeTest() passes a well-formed synthetic test
 */
import fs from 'fs';
import os from 'os';
import path from 'path';
import vm from 'vm';
import { spawnSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..', '..');
const SCRIPT = path.join(ROOT, 'scripts', 'calibrateModule.mjs');

let passed = 0;
let failed = 0;
const failures = [];

function assert(condition, label) {
  if (condition) {
    passed++;
  } else {
    failed++;
    failures.push(label);
    console.error(`  FAIL: ${label}`);
  }
}

// ---------------------------------------------------------------------------
// Fixtures: synthesized practice tests written to a temp dir for lint+calibrate
// ---------------------------------------------------------------------------

function makeTempDir(prefix) {
  return fs.mkdtempSync(path.join(os.tmpdir(), prefix));
}

/** Build a well-formed question with the given index and difficulty/band. */
function wellFormedMc(id, difficulty, band, opts = {}) {
  const skills = opts.skills || ['solving-equations'];
  const stem = opts.stem || `If $2x + ${id} = ${id + 5}$, what is the value of $${id}x + 1$?`;
  return `{
  id: ${id},
  type: "multiple-choice",
  difficulty: "${difficulty}",
  band: ${band},
  question: ${JSON.stringify(stem)},
  choices: [
    { id: "A", text: "$1$", misconception: "stops one step early" },
    { id: "B", text: "$2$", misconception: "applies inverse operation" },
    { id: "C", text: "$3$", misconception: "off-by-one error" },
    { id: "D", text: "$4$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Word-to-Expression Translation**\\n\\n**Choice D is correct.**\\n\\nWalkthrough: solve and substitute.\\n\\n**Why the wrong answers are tempting:**\\n• Choice A: stops one step early.\\n• Choice B: inverse operation.\\n• Choice C: off-by-one.",
  skills: ${JSON.stringify(skills)}
}`;
}

/**
 * Write a practice test file for the given test number into `dir`. Returns
 * the practice test object (parsed) and the absolute file path.
 *
 * `m1Questions` and `m2Questions` are arrays of question literal strings (as
 * produced by wellFormedMc or hand-written for negative tests).
 */
function writeFixtureTest(dir, testN, m1Questions, m2Questions) {
  const file = path.join(dir, `practiceTest${testN}.js`);
  const src = `// Synthetic fixture for tests.
export const practiceTest${testN} = {
  id: "practice-test-${testN}",
  title: "Practice Test ${testN}",
  description: "Synthetic fixture",
  totalQuestions: ${m1Questions.length + m2Questions.length},
  timePerModule: 35,
  modules: [
    {
      id: "module-1",
      title: "Module 1",
      timeLimit: 35,
      questions: [
${m1Questions.join(',\n')}
      ]
    },
    {
      id: "module-2",
      title: "Module 2",
      timeLimit: 35,
      questions: [
${m2Questions.join(',\n')}
      ]
    }
  ]
};

export default practiceTest${testN};
`;
  fs.writeFileSync(file, src);
  return file;
}

/** Generate a balanced 7/6/5/4 module, useful for analyzeDomainCoverage tests. */
function balancedModuleQuestions() {
  // 7 algebra
  const algebra = ['linear-functions', 'solving-equations', 'systems-of-equations',
    'linear-inequalities', 'slope', 'word-problems', 'inequalities'];
  // 6 advanced-math
  const advanced = ['quadratic-equations', 'factoring', 'exponential-functions',
    'polynomial-operations', 'vertex-form', 'discriminant'];
  // 5 PSDA
  const psda = ['percents', 'ratios', 'probability', 'two-way-tables', 'statistics'];
  // 4 geo-trig
  const geo = ['triangles', 'circles', 'volume', 'right-triangles'];
  const all = [
    ...algebra.map(s => [s]),
    ...advanced.map(s => [s]),
    ...psda.map(s => [s]),
    ...geo.map(s => [s]),
  ];
  return { questions: all.map(skills => ({ skills })) };
}

// ---------------------------------------------------------------------------
// Bring the calibrateModule module into scope (dynamic import).
// ---------------------------------------------------------------------------

const mod = await import(`file://${SCRIPT}`);
const {
  tokenize,
  checkUniqueness,
  checkUniquenessSliding,
  indexCorpus,
  loadPdfCorpus,
  analyzeDomainCoverage,
  lintPracticeTest,
  indexQuestionLines,
} = mod;

// ---------------------------------------------------------------------------
// 1. tokenize
// ---------------------------------------------------------------------------

console.log('\n[1] tokenize');
{
  const t1 = tokenize('The cat is on the mat.');
  // 'cat' and 'mat' should survive; 'the', 'is', 'on' are stopwords
  assert(t1.includes('cat'), 'tokenize keeps content word "cat"');
  assert(t1.includes('mat'), 'tokenize keeps content word "mat"');
  assert(!t1.includes('the'), 'tokenize drops stopword "the"');
  assert(!t1.includes('is'), 'tokenize drops stopword "is"');

  const t2 = tokenize('What is the VALUE of $f(x)$ when $x = 2$?');
  // "value" and "function" are math stopwords; "f", "x", "2" should remain (math/digits)
  assert(!t2.includes('value'), 'tokenize drops math stopword "value"');
  assert(t2.includes('2'), 'tokenize keeps digit "2"');
  assert(t2.every(t => t === t.toLowerCase()), 'tokenize lowercases all tokens');

  // Punctuation / LaTeX delimiters get stripped (they map to spaces).
  const t3 = tokenize('Solve $3x^2 + 5x - 7 = 0$ for x.');
  assert(t3.includes('3x'), 'tokenize keeps alphanum tokens like "3x"');
  assert(t3.includes('0'), 'tokenize keeps digit "0"');
  assert(tokenize('').length === 0, 'tokenize handles empty input');
}

// ---------------------------------------------------------------------------
// 2. checkUniqueness — original passes; verbatim QBank clone fails.
// ---------------------------------------------------------------------------

console.log('\n[2] checkUniqueness');
{
  // Pull a known cached QBank stem for the negative test.
  const qbankRaw = fs.readFileSync(path.join(ROOT, 'scripts', 'generated', 'cbEducatorQBank.json'), 'utf8');
  const qbankAll = JSON.parse(qbankRaw).items || {};
  const cachedIds = Object.keys(qbankAll).filter(id => qbankAll[id] && qbankAll[id].stemPlain && qbankAll[id].stemPlain.length > 30);
  assert(cachedIds.length > 0, 'QBank has at least one cached stem to compare against');
  // Use a small subset (first 50 cached items) to keep runtime quick.
  const qbankSubset = {};
  for (const id of cachedIds.slice(0, 50)) qbankSubset[id] = qbankAll[id];

  // Verbatim clone of the first cached stem -> should FAIL (combined > thresholds).
  const firstStem = qbankSubset[cachedIds[0]].stemPlain;
  const verbatim = checkUniqueness(firstStem, qbankSubset);
  assert(verbatim.pass === false, 'checkUniqueness rejects verbatim QBank clone');
  assert(verbatim.closestQbankId === cachedIds[0], 'verbatim clone identifies the source QBank id');
  assert(verbatim.jaccard >= 0.99, `verbatim clone has near-1.0 jaccard (got ${verbatim.jaccard})`);

  // An obviously original PerformSAT stem should pass.
  const original = "A unicycle club's total membership grew by exactly twelve riders during a month called Floralis.";
  const originalRes = checkUniqueness(original, qbankSubset);
  assert(originalRes.pass === true, `checkUniqueness passes a clearly original stem (got jaccard=${originalRes.jaccard}, ngram=${originalRes.ngramOverlap})`);

  // Result contract.
  assert(typeof originalRes.jaccard === 'number', 'result has numeric jaccard');
  assert(typeof originalRes.ngramOverlap === 'number', 'result has numeric ngramOverlap');
  assert(originalRes.jaccard >= 0 && originalRes.jaccard <= 1, 'jaccard in [0,1]');
  assert(originalRes.ngramOverlap >= 0 && originalRes.ngramOverlap <= 1, 'ngramOverlap in [0,1]');
}

// ---------------------------------------------------------------------------
// 3. analyzeDomainCoverage — Test 1 has 7/9/4/2 distribution; balanced module = 0 gaps.
// ---------------------------------------------------------------------------

console.log('\n[3] analyzeDomainCoverage');
{
  // Load real Test 1 module 1.
  const file = path.join(ROOT, 'src', 'data', 'practiceTests', 'practiceTest1.js');
  let src = fs.readFileSync(file, 'utf8');
  src = src.replace(/^export\s+const\s+/gm, 'var ').replace(/^export\s+default\s+[^;]+;?$/gm, '');
  const ctx = {};
  vm.createContext(ctx);
  vm.runInContext(src, ctx);
  const m1 = ctx.practiceTest1.modules[0];

  const cov = analyzeDomainCoverage(m1);
  // After round-7 recalibration, Test 1 M1 hits the canonical 7/6/5/4 mix.
  assert(cov.current.Algebra === 7, `Test 1 M1 has 7 Algebra (got ${cov.current.Algebra})`);
  assert(cov.current['Advanced Math'] === 6, `Test 1 M1 has 6 Advanced Math (got ${cov.current['Advanced Math']})`);
  assert(cov.current['Problem-Solving and Data Analysis'] === 5, `Test 1 M1 has 5 PSDA (got ${cov.current['Problem-Solving and Data Analysis']})`);
  assert(cov.current['Geometry and Trigonometry'] === 4, `Test 1 M1 has 4 Geo-Trig (got ${cov.current['Geometry and Trigonometry']})`);
  // Gaps are zero now that the M1 domain mix matches the target.
  assert(cov.gap['Geometry and Trigonometry'] === 0, `Geo-Trig gap is 0 (got ${cov.gap['Geometry and Trigonometry']})`);
  assert(cov.gap['Problem-Solving and Data Analysis'] === 0, `PSDA gap is 0 (got ${cov.gap['Problem-Solving and Data Analysis']})`);

  // Synthesized 7/6/5/4 module: every gap zero.
  const balanced = balancedModuleQuestions();
  const balCov = analyzeDomainCoverage(balanced);
  assert(balCov.current.Algebra === 7, `balanced fixture: 7 Algebra (got ${balCov.current.Algebra})`);
  assert(balCov.current['Advanced Math'] === 6, `balanced fixture: 6 Advanced Math (got ${balCov.current['Advanced Math']})`);
  assert(balCov.current['Problem-Solving and Data Analysis'] === 5, `balanced fixture: 5 PSDA (got ${balCov.current['Problem-Solving and Data Analysis']})`);
  assert(balCov.current['Geometry and Trigonometry'] === 4, `balanced fixture: 4 Geo-Trig (got ${balCov.current['Geometry and Trigonometry']})`);
  const allZero = Object.values(balCov.gap).every(g => g === 0);
  assert(allZero, `balanced fixture: zero gaps across all domains (got ${JSON.stringify(balCov.gap)})`);
}

// ---------------------------------------------------------------------------
// 4. CLI: --module=1 produces a report file at the expected path.
//    --module=2 --track=hard|easy filters appropriately.
// ---------------------------------------------------------------------------

console.log('\n[4] CLI calibration modes (--module=1, --module=2 --track=...)');
{
  const outDir = makeTempDir('calibrate-out-');
  const testsDir = path.join(ROOT, 'src', 'data', 'practiceTests');

  const env = {
    ...process.env,
    CALIBRATE_OUTPUT_DIR: outDir,
    CALIBRATE_TESTS_DIR: testsDir,
  };

  // --module=1
  {
    const r = spawnSync('node', [SCRIPT, '--test=1', '--module=1'], { env });
    assert(r.status === 0, `--module=1 exits 0 (got ${r.status}, stderr=${(r.stderr || '').toString().slice(0, 200)})`);
    const f = path.join(outDir, 'module1-calibration-test-1.md');
    assert(fs.existsSync(f), `--module=1 writes module1-calibration-test-1.md`);
    const body = fs.readFileSync(f, 'utf8');
    assert(/Module 1 Calibration/.test(body), '--module=1 report begins with Module 1 Calibration heading');
    assert(/Domain coverage/.test(body), '--module=1 report includes Domain coverage section');
  }

  // --module=2 --track=hard
  {
    const r = spawnSync('node', [SCRIPT, '--test=1', '--module=2', '--track=hard'], { env });
    assert(r.status === 0, `--module=2 hard exits 0 (got ${r.status})`);
    const f = path.join(outDir, 'module2-calibration-test-1-hard.md');
    assert(fs.existsSync(f), `--module=2 --track=hard writes module2-calibration-test-1-hard.md`);
    const body = fs.readFileSync(f, 'utf8');
    assert(/Module 2 Calibration \(hard track\)/.test(body), 'hard-track report header includes "(hard track)"');
    assert(/score_band[^>]*>=\s*6/.test(body) || /score_band_range_cd\s*>=\s*6/.test(body),
      'hard-track filter description references score_band >= 6');
  }

  // --module=2 --track=easy
  {
    const r = spawnSync('node', [SCRIPT, '--test=1', '--module=2', '--track=easy'], { env });
    assert(r.status === 0, `--module=2 easy exits 0 (got ${r.status})`);
    const f = path.join(outDir, 'module2-calibration-test-1-easy.md');
    assert(fs.existsSync(f), `--module=2 --track=easy writes module2-calibration-test-1-easy.md`);
    const body = fs.readFileSync(f, 'utf8');
    assert(/Module 2 Calibration \(easy track\)/.test(body), 'easy-track report header includes "(easy track)"');
    assert(/score_band/.test(body), 'easy-track filter description references score_band threshold');
  }

  // --module=2 with no --track is rejected.
  {
    const r = spawnSync('node', [SCRIPT, '--test=1', '--module=2'], { env });
    assert(r.status === 1, `--module=2 without --track exits 1 (got ${r.status})`);
  }
}

// ---------------------------------------------------------------------------
// 5. Lint: well-formed synthetic test passes; bad synthetic test fails per rule.
// ---------------------------------------------------------------------------

console.log('\n[5] lint: synthesized well-formed test passes');
{
  const dir = makeTempDir('lint-good-');
  const m1 = [];
  for (let i = 1; i <= 22; i++) {
    const diff = i <= 5 ? 'easy' : (i <= 14 ? 'medium' : 'hard');
    const band = i <= 5 ? 3 : (i <= 14 ? 5 : 7);
    m1.push(wellFormedMc(i, diff, band, { stem: `If $${i}x + ${i + 1} = ${i + 7}$, what is $${i}x + 3$?` }));
  }
  // M2 (hard track) must place mediums at the priority positions [1,2,3,5,7,13]
  // and hards everywhere else, otherwise the m2-difficulty-order rule fires.
  const M2_MED_POS = new Set([1, 2, 3, 5, 7, 13]);
  const m2 = [];
  for (let i = 1; i <= 22; i++) {
    const diff = M2_MED_POS.has(i) ? 'medium' : 'hard';
    const band = M2_MED_POS.has(i) ? 5 : 7;
    m2.push(wellFormedMc(i, diff, band, { stem: `Suppose $f(${i}) = ${i + 100}$ and $g(x) = f(x) - ${i}$. Find $g(${i})$.` }));
  }
  // Test number must be 1-12 (parseArgs constraint). Use test=2 — the temp
  // CALIBRATE_TESTS_DIR isolates this from the real practiceTest2.js.
  writeFixtureTest(dir, 2, m1, m2);

  const env = { ...process.env, CALIBRATE_TESTS_DIR: dir };
  const r = spawnSync('node', [SCRIPT, '--lint', '--test=2'], { env });
  // We can't fully guarantee uniqueness vs the live QBank, but the synthesized
  // stems above are deliberately uncommon. Allow either: zero violations,
  // or only `uniqueness`-rule violations (treated as informational here).
  const stdout = (r.stdout || '').toString();
  const violationLines = stdout.split('\n').filter(l => l.includes('violation:'));
  const nonUniqueness = violationLines.filter(l => !/uniqueness/.test(l));
  assert(nonUniqueness.length === 0, `well-formed lint has zero non-uniqueness violations (got ${nonUniqueness.length}: ${nonUniqueness[0] || ''})`);
}

console.log('\n[6] lint: synthesized bad test fails');
{
  const dir = makeTempDir('lint-bad-');
  // Bad question 1: missing band, only 3 choices, malformed explanation, \(...\) LaTeX.
  // We escape the backslash twice: once for the JS template literal in this test
  // file, once so the resulting fixture file contains a literal `\(`.
  const bad1 = `{
  id: 1,
  type: "multiple-choice",
  difficulty: "easy",
  question: "Solve \\\\(2x + 3 = 7\\\\). What is x?",
  choices: [
    { id: "A", text: "$1$" },
    { id: "B", text: "$2$" },
    { id: "C", text: "$3$" }
  ],
  correctAnswer: "B",
  explanation: "Choice B because.",
  skills: ["solving-equations"]
}`;
  // Bad question 2: orphan correctAnswer letter, band out of range
  const bad2 = `{
  id: 2,
  type: "multiple-choice",
  difficulty: "easy",
  band: 9,
  question: "If $x = 5$, what is $x + 1$?",
  choices: [
    { id: "A", text: "$5$" },
    { id: "B", text: "$6$" },
    { id: "C", text: "$7$" },
    { id: "D", text: "$8$" }
  ],
  correctAnswer: "E",
  explanation: "**SAT Pattern: Word-to-Expression Translation**\\n\\n**Choice E is correct.**\\n",
  skills: ["solving-equations"]
}`;
  // Module 2 placeholder (well-formed) — keep test focused on M1 violations.
  const okM2 = wellFormedMc(1, 'easy', 3, { stem: 'A perfectly innocuous original calibration probe sentence about exponential decay rates.' });

  // Use test=3 — temp CALIBRATE_TESTS_DIR isolates from real practiceTest3.js.
  writeFixtureTest(dir, 3, [bad1, bad2], [okM2]);

  const env = { ...process.env, CALIBRATE_TESTS_DIR: dir };
  const r = spawnSync('node', [SCRIPT, '--lint', '--test=3'], { env });
  assert(r.status === 1, `bad lint exits 1 (got ${r.status})`);
  const stdout = (r.stdout || '').toString();

  assert(/band-missing|missing 'band'/.test(stdout), 'bad lint reports missing band on Q1');
  assert(/choice-count|exactly 4 choices/.test(stdout), 'bad lint reports MC choice count != 4');
  assert(/forbidden LaTeX/.test(stdout),
    `bad lint reports forbidden LaTeX delimiters (saw: ${stdout.split('\n').filter(l => l.toLowerCase().includes('latex')).slice(0,1).join('') || '(none)'})`);
  assert(/explanation-pattern-opener|must open with "\*\*SAT Pattern/.test(stdout),
    'bad lint reports missing **SAT Pattern: opener');
  assert(/answer-orphan|not one of the choice ids/.test(stdout),
    'bad lint reports orphaned correctAnswer letter');
  assert(/band-range|must be integer in 1-7/.test(stdout),
    'bad lint reports band out of range (Q2 band=9)');
}

// ---------------------------------------------------------------------------
// 7. Direct lintPracticeTest API — verify return shape & line numbers
// ---------------------------------------------------------------------------

console.log('\n[7] lintPracticeTest API surface');
{
  const dir = makeTempDir('lint-api-');
  const ok = wellFormedMc(1, 'easy', 3, { stem: 'A truly distinctive prompt referencing dodecahedron lattice rotations.' });
  writeFixtureTest(dir, 97, [ok], [ok]);

  // Temporarily patch the module's TESTS_DIR by re-importing with env hint.
  // Note: TESTS_DIR is captured at module top, so we rely on spawning the CLI
  // here. Direct API test on the real Test 1 to verify return shape:
  const qbankRaw = fs.readFileSync(path.join(ROOT, 'scripts', 'generated', 'cbEducatorQBank.json'), 'utf8');
  const qbankItems = JSON.parse(qbankRaw).items || {};
  // Use a small subset for speed.
  const subset = {};
  let n = 0;
  for (const [id, it] of Object.entries(qbankItems)) {
    if (it && it.stemPlain) { subset[id] = it; n++; if (n >= 100) break; }
  }
  const report = lintPracticeTest({ testN: 1, qbankItems: subset });
  assert(typeof report.file === 'string' && report.file.endsWith('practiceTest1.js'),
    'lintPracticeTest returns file path');
  assert(Array.isArray(report.violations), 'lintPracticeTest returns violations array');
  // After round-7 recalibration, Test 1 lints clean. Use a synthesized bad
  // test (test 8 below) to verify violation shape.
  // Just verify the API surface returns the expected shape even when zero
  // violations: file path string, violations array.
  assert(report.violations.length === 0,
    `lintPracticeTest reports zero violations on cleaned-up Test 1 (got ${report.violations.length})`);
}

// ---------------------------------------------------------------------------
// 8. indexQuestionLines — sanity-check on real Test 1 source
// ---------------------------------------------------------------------------

console.log('\n[8] indexQuestionLines sanity check');
{
  const file = path.join(ROOT, 'src', 'data', 'practiceTests', 'practiceTest1.js');
  const src = fs.readFileSync(file, 'utf8');
  const idx = indexQuestionLines(src);
  // Test 1 has 22 questions per module × 2 modules = 44 entries.
  assert(idx.length === 44, `indexQuestionLines finds 44 questions on Test 1 (got ${idx.length})`);
  // First entry is Module 1 Q1, starts at the line containing `{` near id: 1.
  const first = idx[0];
  assert(first.moduleIndex === 0 && first.modulePosition === 1, 'first entry is module 0, position 1');
  assert(first.startLine > 0 && first.endLine > first.startLine, 'first entry has valid line range');
  // Module break: entry 23 should be Module 2 Q1.
  const m2first = idx[22];
  assert(m2first.moduleIndex === 1 && m2first.modulePosition === 1, 'entry 22 is module 1 (M2), position 1');
}

// ---------------------------------------------------------------------------
// 9. indexCorpus — accepts QBank object OR a window list; pre-tokenizes once.
// ---------------------------------------------------------------------------

console.log('\n[9] indexCorpus');
{
  const qbObj = {
    'a': { stemPlain: 'A pleasant cathedral has thirteen windows on the north wall.' },
    'b': { stimulusPlain: 'Stimulus only items also index via stimulusPlain.' },
    'c': { stemPlain: '' }, // empty -> skipped
    'd': null,              // null -> skipped
  };
  const idx = indexCorpus(qbObj);
  assert(idx.length === 2, `indexCorpus drops empty/null items (got ${idx.length}, expected 2)`);
  assert(idx.every(e => e.tokenSet instanceof Set && e.grams instanceof Set), 'indexCorpus pre-builds Set fields');

  const winList = [
    { id: 'w0', text: 'first window of pdf text alpha bravo charlie' },
    { id: 'w1', text: 'second window of pdf text delta echo foxtrot' },
  ];
  const idx2 = indexCorpus(winList);
  assert(idx2.length === 2, `indexCorpus accepts array form (got ${idx2.length})`);
  assert(idx2[0].id === 'w0', 'array form preserves id');
}

// ---------------------------------------------------------------------------
// 10. loadPdfCorpus — produces a non-empty index from cached PT 4-11 text.
// ---------------------------------------------------------------------------

console.log('\n[10] loadPdfCorpus');
{
  // The repo's scripts/generated/pdf-text/ should be populated locally
  // (run `node scripts/extractCBPracticeTestText.mjs` once). Test is gated
  // on directory existence so it runs cleanly on machines without the cache.
  const dir = path.join(ROOT, 'scripts', 'generated', 'pdf-text');
  const cached = fs.existsSync(dir) && fs.readdirSync(dir).some(f => f.endsWith('.txt'));
  if (cached) {
    const corpus = loadPdfCorpus({ dir });
    assert(corpus.length > 1000, `loadPdfCorpus produces >1000 windows (got ${corpus.length})`);
    assert(corpus.every(w => w.tokenSet instanceof Set), 'pdf corpus windows are pre-indexed');
    assert(corpus.every(w => /\.txt#\d+$/.test(w.id)), 'pdf window ids look like "<file>.txt#<n>"');
  } else {
    console.log('  (skipped — pdf-text cache absent; run scripts/extractCBPracticeTestText.mjs)');
  }

  // Non-existent dir w/ requireCache=false returns empty array.
  const empty = loadPdfCorpus({ dir: '/no/such/dir', requireCache: false });
  assert(Array.isArray(empty) && empty.length === 0, 'requireCache=false on missing dir returns []');

  // Non-existent dir w/ requireCache=true throws.
  let threw = false;
  try { loadPdfCorpus({ dir: '/no/such/dir', requireCache: true }); }
  catch (e) { threw = /missing/.test(e.message); }
  assert(threw, 'requireCache=true on missing dir throws with a "missing" message');
}

// ---------------------------------------------------------------------------
// 11. checkUniquenessSliding — windowing catches a verbatim slice in a long field.
// ---------------------------------------------------------------------------

console.log('\n[11] checkUniquenessSliding');
{
  const corpus = indexCorpus([
    { id: 'pdf#1', text: 'lattice basis dodecahedron seventy three twelve unicycle dragonfly emerald algorithm vector projection eigenvalue rotation matrix' },
  ]);

  // A long authored explanation that contains the corpus phrase verbatim somewhere
  // in the middle should hard-fail when the window slides over the matching segment.
  const hostile =
    'In this practice problem we begin by reviewing the rubric and recalling that ' +
    'lattice basis dodecahedron seventy three twelve unicycle dragonfly emerald algorithm vector projection eigenvalue rotation matrix ' +
    'and then continue with completely original prose describing the next step in our explanation pattern.';
  const r1 = checkUniquenessSliding(hostile, corpus);
  assert(r1.pass === false, `sliding window flags the planted verbatim phrase (jaccard=${r1.jaccard}, ngram=${r1.ngramOverlap})`);
  assert(r1.closestId === 'pdf#1', 'sliding window identifies the source corpus id');
  assert(typeof r1.authoredOffset === 'number' && r1.authoredOffset >= 0, 'sliding window reports the authoredOffset');

  // A clean explanation with no overlap should pass.
  const safe = 'A wholly distinctive narrative describing pomegranate dispersal patterns at the equinox in the southern archipelago.';
  const r2 = checkUniquenessSliding(safe, corpus);
  assert(r2.pass === true, `clean text passes the sliding window (jaccard=${r2.jaccard}, ngram=${r2.ngramOverlap})`);

  // Short input (below window size) falls back to single-pass comparison.
  const r3 = checkUniquenessSliding('only twelve tokens here are short of the window size limit', corpus);
  assert(typeof r3.pass === 'boolean', 'sliding window handles short input with single-pass fallback');
}

// ---------------------------------------------------------------------------
// 12. lint: pdfCorpus rule fires on synthesized verbatim PDF copy.
// ---------------------------------------------------------------------------

console.log('\n[12] lint with pdfCorpus catches PDF-copied stem/choices/explanation');
{
  // Build a tiny synthetic PDF corpus (an indexed array) and a fixture test
  // whose Q1 deliberately copies a long verbatim slice across each field.
  // Use a 30+ token phrase so the sliding-window check on the explanation
  // can hit the production thresholds (jaccard > 0.78 OR 3-gram > 0.60) when
  // the window aligns over the planted region.
  const pdfWindows = [
    {
      id: 'fake-pt99.txt#0',
      text:
        'flagship aurora borealis cantilever dominion ephemeral granite hemlock illuminated jacaranda kestrel lithograph mahogany ' +
        'nostalgic oblivion pinnacle quagmire resilience saxophone tidewater unflagging volcano whippoorwill xenon yardstick zephyr',
    },
  ];
  const pdfCorpus = indexCorpus(pdfWindows);
  assert(pdfCorpus.length === 1, 'synthetic pdf corpus has one window');

  // 26-token verbatim slice — long enough that any 25-token window aligned
  // over it has overwhelming jaccard + trigram overlap with the corpus.
  const copiedSlice = pdfWindows[0].text;
  const dir = makeTempDir('lint-pdf-');
  const badStemQ = `{
  id: 1,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "${copiedSlice}",
  choices: [
    { id: "A", text: "$1$", misconception: "stops one step early" },
    { id: "B", text: "$2$", misconception: "applies inverse operation" },
    { id: "C", text: "$3$", misconception: "off-by-one error" },
    { id: "D", text: "$4$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Word-to-Expression Translation**\\n\\n**Choice D is correct.**\\n\\nThe canonical solution proceeds in three steps and references familiar identities while carefully checking each substitution and recording one operation per line for clarity to the reader.\\n\\n**Why the wrong answers are tempting:**\\n• Choice A: stops early.\\n• Choice B: inverse op.\\n• Choice C: off-by-one.",
  skills: ["solving-equations"]
}`;
  // Q2 copies the slice in the explanation only.
  const badExpQ = `{
  id: 2,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "An entirely original ophthalmologist counts seventeen distinct chrysanthemum varietals in the rooftop sunroom.",
  choices: [
    { id: "A", text: "$1$", misconception: "stops one step early" },
    { id: "B", text: "$2$", misconception: "applies inverse operation" },
    { id: "C", text: "$3$", misconception: "off-by-one error" },
    { id: "D", text: "$4$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Word-to-Expression Translation**\\n\\n**Choice D is correct.**\\n\\nIntro paragraph free of overlap goes here. Now we paste a forbidden phrase: ${copiedSlice} and continue with original wrap-up prose to show the explanation can still otherwise be normal.\\n\\n**Why the wrong answers are tempting:**\\n• Choice A: stops early.\\n• Choice B: inverse op.\\n• Choice C: off-by-one.",
  skills: ["solving-equations"]
}`;
  // Q3 copies the slice across all four answer choices (joined choices rule).
  const tokens = copiedSlice.split(' ');
  const chunk = (a, b) => tokens.slice(a, b).join(' ');
  const badChoicesQ = `{
  id: 3,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "A different but original sentence about whittling pinewood gondolas in late autumn frost.",
  choices: [
    { id: "A", text: "${chunk(0,7)}", misconception: "stops one step early" },
    { id: "B", text: "${chunk(7,14)}", misconception: "applies inverse operation" },
    { id: "C", text: "${chunk(14,20)}", misconception: "off-by-one error" },
    { id: "D", text: "${chunk(20,26)}" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Word-to-Expression Translation**\\n\\n**Choice D is correct.**\\n\\nA clean walkthrough that does not borrow any phrasing from the corpus, with each step on its own line and verifying the answer at the end with a quick substitution.\\n\\n**Why the wrong answers are tempting:**\\n• Choice A: stops early.\\n• Choice B: inverse op.\\n• Choice C: off-by-one.",
  skills: ["solving-equations"]
}`;
  const okM2 = wellFormedMc(1, 'easy', 3, { stem: 'A truly distinctive prompt referencing dodecahedron lattice rotations.' });

  writeFixtureTest(dir, 4, [badStemQ, badExpQ, badChoicesQ], [okM2]);

  // Tiny qbank subset so the QBank rule still has something to compare against.
  const qbankRaw = fs.readFileSync(path.join(ROOT, 'scripts', 'generated', 'cbEducatorQBank.json'), 'utf8');
  const qbankAll = JSON.parse(qbankRaw).items || {};
  const qbankSubset = {};
  let n = 0;
  for (const [id, it] of Object.entries(qbankAll)) {
    if (it && it.stemPlain) { qbankSubset[id] = it; if (++n >= 30) break; }
  }

  // Direct API test (we have to call lintPracticeTest so we can pass the synthetic pdfCorpus).
  // Use CALIBRATE_TESTS_DIR to point the loader at our temp fixture.
  process.env.CALIBRATE_TESTS_DIR = dir;
  // Fresh import of the module so it picks up the env var.
  const fresh = await import(`file://${SCRIPT}?reload=${Date.now()}`);
  const report = fresh.lintPracticeTest({ testN: 4, qbankItems: qbankSubset, pdfCorpus });
  delete process.env.CALIBRATE_TESTS_DIR;

  const ruleNames = report.violations.map(v => v.rule);
  assert(ruleNames.includes('pdf-uniqueness-stem'),
    `lint flags Q1 stem copy (got rules: ${[...new Set(ruleNames)].join(', ')})`);
  assert(ruleNames.includes('pdf-uniqueness-explanation'),
    `lint flags Q2 explanation copy (got rules: ${[...new Set(ruleNames)].join(', ')})`);
  assert(ruleNames.includes('pdf-uniqueness-choices'),
    `lint flags Q3 joined-choices copy (got rules: ${[...new Set(ruleNames)].join(', ')})`);

  // The okM2 question should NOT be flagged for any pdf-uniqueness rule.
  const m2Violations = report.violations.filter(v => /^module 2/.test(v.message));
  const m2Pdf = m2Violations.filter(v => v.rule.startsWith('pdf-uniqueness'));
  assert(m2Pdf.length === 0,
    `clean Module 2 question is not flagged by pdf rules (got ${m2Pdf.length}: ${m2Pdf.map(v => v.rule).join(',')})`);
}

// ---------------------------------------------------------------------------
// 13. lint without pdfCorpus skips the new rules (back-compat).
// ---------------------------------------------------------------------------

console.log('\n[13] lint without pdfCorpus skips the pdf rules');
{
  const dir = makeTempDir('lint-nopdf-');
  const m1 = [wellFormedMc(1, 'easy', 3, { stem: 'A wholly original probe about meandering creek hydrology measurements.' })];
  writeFixtureTest(dir, 5, m1, m1);

  const qbankRaw = fs.readFileSync(path.join(ROOT, 'scripts', 'generated', 'cbEducatorQBank.json'), 'utf8');
  const qbankAll = JSON.parse(qbankRaw).items || {};
  const qbankSubset = {};
  let n = 0;
  for (const [id, it] of Object.entries(qbankAll)) {
    if (it && it.stemPlain) { qbankSubset[id] = it; if (++n >= 20) break; }
  }

  process.env.CALIBRATE_TESTS_DIR = dir;
  const fresh = await import(`file://${SCRIPT}?reload=${Date.now()}_nopdf`);
  // No pdfCorpus arg — back-compat path.
  const report = fresh.lintPracticeTest({ testN: 5, qbankItems: qbankSubset });
  delete process.env.CALIBRATE_TESTS_DIR;

  const pdfRules = report.violations.filter(v => v.rule.startsWith('pdf-uniqueness'));
  assert(pdfRules.length === 0, `omitting pdfCorpus skips pdf-uniqueness rules (got ${pdfRules.length})`);
}

// ---------------------------------------------------------------------------
// 14. lint: m2-difficulty-order rule fires when mediums aren't at priority positions.
// ---------------------------------------------------------------------------

console.log('\n[14] lint m2-difficulty-order rule');
{
  const dir = makeTempDir('lint-m2order-');

  // Build a valid M1 (5E/9M/8H ramp) and an INVALID M2 — 6 mediums, but at
  // positions 6, 7, 8, 9, 10, 11 instead of [1,2,3,5,7,13].
  const m1 = [];
  for (let i = 1; i <= 22; i++) {
    const diff = i <= 5 ? 'easy' : (i <= 14 ? 'medium' : 'hard');
    const band = i <= 5 ? 3 : (i <= 14 ? 5 : 7);
    m1.push(wellFormedMc(i, diff, band, { stem: `For the m1 entry $${i}$, what is the integer $${i + 1}$ minus $${i - 1}$?` }));
  }
  const wrongM2 = [];
  const WRONG_MED_POS = new Set([6, 7, 8, 9, 10, 11]); // not the priority list
  for (let i = 1; i <= 22; i++) {
    const diff = WRONG_MED_POS.has(i) ? 'medium' : 'hard';
    const band = WRONG_MED_POS.has(i) ? 5 : 7;
    wrongM2.push(wellFormedMc(i, diff, band, { stem: `For the m2 entry $${i}$, compute $${i * 3}$ divided by $${i + 1}$.` }));
  }
  writeFixtureTest(dir, 6, m1, wrongM2);

  const env = { ...process.env, CALIBRATE_TESTS_DIR: dir, SKIP_PDF_LINT: '1' };
  const r = spawnSync('node', [SCRIPT, '--lint', '--test=6'], { env });
  assert(r.status === 1, `m2-order lint exits 1 (got ${r.status})`);
  const stdout = (r.stdout || '').toString();
  // The rule name only appears in the byCategory summary — count violation
  // lines by their message shape ("module 2 Q\d+ ... pattern expects ...").
  const orderLines = stdout.split('\n').filter(l => /module 2 Q\d+ difficulty=.* pattern expects/.test(l));
  assert(orderLines.length >= 4, `multiple m2-difficulty-order violations on bad fixture (got ${orderLines.length})`);
  assert(/m2-difficulty-order:\s*\d+/.test(stdout), 'byCategory summary lists m2-difficulty-order count');

  // Now build a CORRECT M2 and confirm the rule does not fire.
  const okM2 = [];
  const PRIORITY = new Set([1, 2, 3, 5, 7, 13]);
  for (let i = 1; i <= 22; i++) {
    const diff = PRIORITY.has(i) ? 'medium' : 'hard';
    const band = PRIORITY.has(i) ? 5 : 7;
    okM2.push(wellFormedMc(i, diff, band, { stem: `For the ok m2 entry $${i}$, find $${i * 4}$ minus $${i + 2}$.` }));
  }
  const dir2 = makeTempDir('lint-m2order-ok-');
  writeFixtureTest(dir2, 7, m1, okM2);

  const env2 = { ...process.env, CALIBRATE_TESTS_DIR: dir2, SKIP_PDF_LINT: '1' };
  const r2 = spawnSync('node', [SCRIPT, '--lint', '--test=7'], { env2 });
  const stdout2 = (r2.stdout || '').toString();
  const orderLines2 = stdout2.split('\n').filter(l => /m2-difficulty-order/.test(l));
  assert(orderLines2.length === 0, `correctly-ordered M2 has zero m2-difficulty-order violations (got ${orderLines2.length})`);
}

// ---------------------------------------------------------------------------
// Summary
// ---------------------------------------------------------------------------

console.log('\n========================================');
console.log(`RESULTS: ${passed} passed, ${failed} failed`);
if (failures.length > 0) {
  console.log('\nFailures:');
  failures.forEach(f => console.log(`  - ${f}`));
  process.exit(1);
} else {
  console.log('All tests passed.');
}
