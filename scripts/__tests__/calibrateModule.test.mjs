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
const { tokenize, checkUniqueness, analyzeDomainCoverage, lintPracticeTest, indexQuestionLines } = mod;

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
  assert(cov.current.Algebra === 7, `Test 1 M1 has 7 Algebra (got ${cov.current.Algebra})`);
  assert(cov.current['Advanced Math'] === 9, `Test 1 M1 has 9 Advanced Math (got ${cov.current['Advanced Math']})`);
  assert(cov.current['Problem-Solving and Data Analysis'] === 4, `Test 1 M1 has 4 PSDA (got ${cov.current['Problem-Solving and Data Analysis']})`);
  assert(cov.current['Geometry and Trigonometry'] === 2, `Test 1 M1 has 2 Geo-Trig (got ${cov.current['Geometry and Trigonometry']})`);
  // Gaps signal under-coverage on Geo-Trig and PSDA.
  assert(cov.gap['Geometry and Trigonometry'] === -2, `Geo-Trig gap is -2 (got ${cov.gap['Geometry and Trigonometry']})`);
  assert(cov.gap['Problem-Solving and Data Analysis'] === -1, `PSDA gap is -1 (got ${cov.gap['Problem-Solving and Data Analysis']})`);

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
  const m2 = [];
  for (let i = 1; i <= 22; i++) {
    const diff = i <= 5 ? 'easy' : (i <= 14 ? 'medium' : 'hard');
    const band = i <= 5 ? 3 : (i <= 14 ? 5 : 7);
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
  assert(report.violations.length > 0, 'lintPracticeTest finds violations on real Test 1 (band missing etc.)');
  const sample = report.violations[0];
  assert(typeof sample.line === 'number' && sample.line > 0, 'violation has numeric line number');
  assert(typeof sample.rule === 'string' && sample.rule.length > 0, 'violation has rule name');
  assert(typeof sample.message === 'string' && sample.message.length > 0, 'violation has descriptive message');
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
