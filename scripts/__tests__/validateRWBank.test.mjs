#!/usr/bin/env node
/**
 * Test suite for scripts/validateRWBank.mjs.
 * Mirrors the lightweight assert(cond, label) style used by
 * scripts/__tests__/calibrateModule.test.mjs.
 *
 * Run: node scripts/__tests__/validateRWBank.test.mjs
 *
 * Covers (per S2 of the R&W pipeline autoplan):
 *   - validateStem: canonical / variant / unknown-skill / no-match
 *   - validateStemDistribution: ≥80% canonical → clean; <80% → violation
 *   - validateDistractorWords: denylist token + pattern firing; clean choice
 *   - validateEntityRegistry: registered name OK; unregistered → violation
 *   - validateChoiceUniqueness: ≤max repeats clean; >max → violation
 *   - validateBankSkeletons: distinct passages clean; near-duplicates fire
 *   - validateWithinTestCloning: distinct/duplicate within one test
 *   - extractEntities: people + works extraction
 *   - CLI driver: --validate-sources, --all, --check=, --test=, F13 parse-error
 */
import fs from 'fs';
import os from 'os';
import path from 'path';
import { spawnSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..', '..');
const SCRIPT = path.join(ROOT, 'scripts', 'validateRWBank.mjs');

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
// Fixture builders — synthesize R&W items, source DBs, and a tempdir layout
// matching the production layout that validateRWBank expects.
// ---------------------------------------------------------------------------

function makeTempDir(prefix) {
  return fs.mkdtempSync(path.join(os.tmpdir(), prefix));
}

/** Build a minimal R&W item with overrides. Defaults to a clean
 *  words-in-context item using the canonical stem + clean choices. */
function rwItem(overrides = {}) {
  return {
    id: overrides.id || 1,
    type: 'multiple-choice',
    difficulty: 'medium',
    band: 3,
    domain: 'craft-and-structure',
    skill: 'words-in-context',
    passage: 'A short prose excerpt about a writer at work, walking by the river each morning, watching the geese arrive in autumn.',
    question: 'Which choice completes the text with the most logical and precise word or phrase?',
    choices: [
      { id: 'A', text: 'gather' },
      { id: 'B', text: 'evade' },
      { id: 'C', text: 'arrive' },
      { id: 'D', text: 'depart' },
    ],
    correctAnswer: 'C',
    explanation: 'Choice C is correct because the geese arrive in autumn.',
    ...overrides,
  };
}

/**
 * Write a synthetic practiceTest${n}RW.js into `dir`. `items` is split
 * evenly across the two modules (the lints don't depend on module shape;
 * indexRWQuestionLines needs the standard `modules: [{questions: [...]}]`
 * structure though).
 */
function writeFixtureRWTest(dir, testN, items) {
  const half = Math.ceil(items.length / 2);
  const m1 = items.slice(0, half).map(i => JSON.stringify(i, null, 2)).join(',\n');
  const m2 = items.slice(half).map(i => JSON.stringify(i, null, 2)).join(',\n');
  const file = path.join(dir, `practiceTest${testN}RW.js`);
  const src = `// Synthetic R&W fixture for tests.
export const practiceTest${testN}RW = {
  id: "practice-test-${testN}-rw",
  modules: [
    { id: "module-1", title: "M1", timeLimit: 32, questions: [
${m1}
    ] },
    { id: "module-2", title: "M2", timeLimit: 32, questions: [
${m2}
    ] }
  ]
};

export default practiceTest${testN}RW;
`;
  fs.writeFileSync(file, src);
  return file;
}

/** Write the four source DB JSON files into `<rwSourcesDir>`. Empty values
 *  use sensible defaults so every loader returns a non-empty array. */
function writeFixtureSources(rwSourcesDir, opts = {}) {
  fs.mkdirSync(rwSourcesDir, { recursive: true });
  fs.writeFileSync(
    path.join(rwSourcesDir, 'researchers.json'),
    JSON.stringify(opts.researchers || [
      { name: 'Robin Wall Kimmerer', field: 'botany', publications: [] },
      { name: 'Marie Tharp', field: 'oceanography', publications: [] },
    ])
  );
  fs.writeFileSync(
    path.join(rwSourcesDir, 'literaryWorks.json'),
    JSON.stringify(opts.literaryWorks || [
      { author: 'Walt Whitman', title: 'Leaves of Grass', year: 1855, excerpts: [] },
    ])
  );
  fs.writeFileSync(
    path.join(rwSourcesDir, 'crossTextPairs.json'),
    JSON.stringify(opts.crossTextPairs || [
      { text1: 'A', text2: 'B', engagement: 'agree' },
    ])
  );
  fs.writeFileSync(
    path.join(rwSourcesDir, 'quantitativeData.json'),
    JSON.stringify(opts.quantitativeData || [
      { source: 'Pew', table: 'tbl', findings: [] },
    ])
  );
}

/** Lay out a complete fixture environment (RW_TESTS_DIR + RW_GEN_DIR with
 *  rwSources/ populated). Returns { genDir, testsDir, env } ready to pass
 *  to spawnSync. PDF cache is intentionally absent so the pdf-uniqueness
 *  lint soft-fails to a warning (validated separately). */
function setupFixtureEnv(prefix, items, sourceOverrides) {
  const genDir = makeTempDir(`${prefix}-gen-`);
  const testsDir = makeTempDir(`${prefix}-tests-`);
  writeFixtureSources(path.join(genDir, 'rwSources'), sourceOverrides);
  writeFixtureRWTest(testsDir, 1, items);
  return {
    genDir,
    testsDir,
    env: { ...process.env, RW_GEN_DIR: genDir, RW_TESTS_DIR: testsDir },
  };
}

// ---------------------------------------------------------------------------
// Bring the validateRWBank module into scope (dynamic import).
// ---------------------------------------------------------------------------

const mod = await import(`file://${SCRIPT}`);
const {
  validateStem,
  validateStemDistribution,
  validateChoiceUniqueness,
  validateBankSkeletons,
  validateEntityRegistry,
  validateDistractorWords,
  validateWithinTestCloning,
  extractEntities,
  RW_STEM_REGISTRY,
} = mod;

// ===========================================================================
// 1. validateStem — canonical / variant / unknown / no-match
// ===========================================================================

console.log('\n[1] validateStem');
{
  const canonical = rwItem();
  const r1 = validateStem(canonical);
  assert(r1.ok && !r1.isVariant, 'canonical words-in-context stem passes as canonical');

  const variant = rwItem({
    skill: 'text-structure-and-purpose',
    question: 'Which choice best describes the overall structure of the text?',
  });
  const r2 = validateStem(variant);
  assert(r2.ok && r2.isVariant, 'documented variant stem passes as variant');

  const unknown = rwItem({
    skill: 'made-up-skill',
    question: 'Whatever',
  });
  const r3 = validateStem(unknown);
  assert(!r3.ok && r3.reason === 'unknown-skill', 'unknown skill returns unknown-skill reason');

  const wrong = rwItem({
    skill: 'words-in-context',
    question: 'Pick the best answer below.',
  });
  const r4 = validateStem(wrong);
  assert(!r4.ok && r4.reason === 'no-match', 'mismatched stem returns no-match reason');

  // Sanity: registry populated for the 11 R&W skills.
  assert(Object.keys(RW_STEM_REGISTRY).length >= 7, 'RW_STEM_REGISTRY has at least 7 skills');
}

// ===========================================================================
// 2. validateStemDistribution — ≥80% canonical clean; <80% violation
// ===========================================================================

console.log('\n[2] validateStemDistribution');
{
  // 9 canonical + 1 unknown stem = 90% → clean
  const cleanItems = [
    ...Array.from({ length: 9 }, (_, i) => rwItem({ id: i + 1 })),
    rwItem({ id: 10, skill: 'made-up' }), // unknown-skill is excluded from rate
  ];
  const r1 = validateStemDistribution(cleanItems);
  assert(r1.violations.length === 0, '90% canonical → no stem-distribution violation');

  // 5 canonical + 5 wrong-but-known = 50% canonical → violation
  const dirtyItems = [
    ...Array.from({ length: 5 }, (_, i) => rwItem({ id: i + 1 })),
    ...Array.from({ length: 5 }, (_, i) => rwItem({ id: i + 6, question: 'Pick the best.' })),
  ];
  const r2 = validateStemDistribution(dirtyItems);
  assert(r2.violations.length === 1, '50% canonical → one stem-distribution violation');
  assert(/words-in-context/.test(r2.violations[0].message), 'violation names the offending skill');

  // <5 items → no violation regardless of rate
  const tiny = [rwItem({ question: 'wrong' })];
  const r3 = validateStemDistribution(tiny);
  assert(r3.violations.length === 0, 'fewer than 5 items → no stem-distribution violation');
}

// ===========================================================================
// 3. validateDistractorWords — denylist token, pattern, clean
// ===========================================================================

console.log('\n[3] validateDistractorWords');
{
  const clean = rwItem();
  const r1 = validateDistractorWords(clean);
  assert(r1.length === 0, 'clean choices produce no distractor-word violations');

  const denylistToken = rwItem({
    choices: [
      { id: 'A', text: 'comprehensiver' },
      { id: 'B', text: 'normal' },
      { id: 'C', text: 'normal' },
      { id: 'D', text: 'normal' },
    ],
  });
  const r2 = validateDistractorWords(denylistToken);
  assert(r2.length >= 1 && /comprehensiver/.test(r2[0].message), 'denylist token "comprehensiver" fires');

  const patternMatch = rwItem({
    choices: [
      { id: 'A', text: 'more comprehensiver' },
      { id: 'B', text: 'fine' },
      { id: 'C', text: 'fine' },
      { id: 'D', text: 'fine' },
    ],
  });
  const r3 = validateDistractorWords(patternMatch);
  assert(r3.length >= 1, 'multi-word pattern "more comprehensiver" fires');

  const apostrophe = rwItem({
    choices: [
      { id: 'A', text: "the library's' wing" },
      { id: 'B', text: 'a' }, { id: 'C', text: 'b' }, { id: 'D', text: 'c' },
    ],
  });
  const r4 = validateDistractorWords(apostrophe);
  assert(r4.length >= 1, "double-apostrophe possessive (library's') fires");
}

// ===========================================================================
// 4. validateEntityRegistry — registered names allowed; unknowns flagged
// ===========================================================================

console.log('\n[4] validateEntityRegistry');
{
  const researchers = [{ name: 'Robin Wall Kimmerer', field: 'botany' }];
  const literaryWorks = [
    { author: 'Walt Whitman', title: 'Leaves of Grass' },
  ];
  const alwaysAllow = new Set(['Walt Whitman']);

  // Registered researcher name in a passage → no violation.
  const ok = rwItem({
    passage: 'Researcher Robin Wall Kimmerer studies moss.',
  });
  const r1 = validateEntityRegistry(ok, researchers, literaryWorks, alwaysAllow);
  assert(r1.length === 0, 'registered researcher → no entity-registry violation');

  // Unregistered researcher name → violation. Pattern B uses lowercase
  // descriptors ("the researcher X"), so the test sentence is constructed
  // accordingly; a sentence-initial "Researcher" wouldn't match.
  const bad = rwItem({
    passage: 'In her dissertation, the researcher Inez Park ran the experiment in 2009.',
  });
  const r2 = validateEntityRegistry(bad, researchers, literaryWorks, alwaysAllow);
  assert(r2.length === 1 && /Inez Park/.test(r2[0].message), 'unregistered researcher fires entity-registry');

  // Italicized title not in literaryWorks → work violation.
  const badWork = rwItem({
    passage: 'In her debut novel *The Imagined Coast*, the narrator wanders.',
  });
  const r3 = validateEntityRegistry(badWork, researchers, literaryWorks, alwaysAllow);
  assert(r3.some(v => /literary work/.test(v.message)), 'unregistered work title fires entity-registry');
}

// ===========================================================================
// 5. validateChoiceUniqueness — clean ≤max; violation >max
// ===========================================================================

console.log('\n[5] validateChoiceUniqueness');
{
  const distractor = 'It contradicts the calm tone established earlier in the passage.';
  // 2 items sharing the distractor → at the max threshold → no violation.
  const okBank = [
    { testN: 1, line: 100, item: rwItem({ id: 1, choices: [
      { id: 'A', text: distractor }, { id: 'B', text: 'unique distractor B for item 1' },
      { id: 'C', text: 'unique distractor C for item 1' }, { id: 'D', text: 'right answer 1' },
    ] }) },
    { testN: 2, line: 200, item: rwItem({ id: 2, choices: [
      { id: 'A', text: distractor }, { id: 'B', text: 'unique distractor B for item 2' },
      { id: 'C', text: 'unique distractor C for item 2' }, { id: 'D', text: 'right answer 2' },
    ] }) },
  ];
  const r1 = validateChoiceUniqueness(okBank);
  assert(r1.length === 0, '2 items sharing one distractor → no choice-uniqueness violation (max=2)');

  // 4 items sharing it → violation.
  const badBank = [
    ...okBank,
    { testN: 3, line: 300, item: rwItem({ id: 3, choices: [
      { id: 'A', text: distractor }, { id: 'B', text: 'B3 distinct distractor here' },
      { id: 'C', text: 'C3 distinct distractor here' }, { id: 'D', text: 'right answer 3' },
    ] }) },
    { testN: 4, line: 400, item: rwItem({ id: 4, choices: [
      { id: 'A', text: distractor }, { id: 'B', text: 'B4 distinct distractor here' },
      { id: 'C', text: 'C4 distinct distractor here' }, { id: 'D', text: 'right answer 4' },
    ] }) },
  ];
  const r2 = validateChoiceUniqueness(badBank);
  assert(r2.length === 1, '4 items sharing one distractor → one choice-uniqueness violation');
  assert(/4 items/.test(r2[0].message), 'violation message names the count');
  assert(r2[0].testN === 1 && r2[0].line === 100, 'violation attributed to first occurrence');
}

// ===========================================================================
// 6. validateBankSkeletons — distinct passages clean; clones fire
// ===========================================================================

console.log('\n[6] validateBankSkeletons');
{
  // Distinct passages from different domains.
  const okBank = [
    { testN: 1, line: 50, item: rwItem({ id: 1, passage: 'The botanist documented twenty-three native fern species along the river bend.' }) },
    { testN: 2, line: 60, item: rwItem({ id: 2, passage: 'Astronomers measured the comet velocity using radio-frequency triangulation methods.' }) },
    { testN: 3, line: 70, item: rwItem({ id: 3, passage: 'Theatergoers in postwar London queued for hours to see the experimental works.' }) },
  ];
  const r1 = validateBankSkeletons(okBank);
  assert(r1.length === 0, 'distinct passages → no bank-skeleton violation');

  // Two near-identical openings across tests should fire.
  const cloneA = 'The Mediterranean monk seal Monachus monachus was once present in coastal regions of southern Europe and northern Africa.';
  const cloneB = 'The Mediterranean monk seal Monachus monachus was once present in coastal regions of southern Europe and the Atlantic shore.';
  const cloneBank = [
    { testN: 1, line: 50, item: rwItem({ id: 1, passage: cloneA }) },
    { testN: 2, line: 60, item: rwItem({ id: 2, passage: cloneB }) },
  ];
  const r2 = validateBankSkeletons(cloneBank);
  assert(r2.length >= 1, 'near-duplicate cross-test passage → bank-skeleton violation');
  assert(/mirrors/.test(r2[0].message), 'violation message contains "mirrors"');
}

// ===========================================================================
// 7. validateWithinTestCloning — within-test pairwise
// ===========================================================================

console.log('\n[7] validateWithinTestCloning');
{
  const distinct = [
    { testN: 1, line: 50, item: rwItem({ id: 1, passage: 'Wetland scientists tracked salinity changes across the estuary over twenty years.' }) },
    { testN: 1, line: 70, item: rwItem({ id: 2, passage: 'A historian uncovered correspondence revealing the cartographer\'s late-career doubts.' }) },
  ];
  const r1 = validateWithinTestCloning(distinct, 1);
  assert(r1.length === 0, 'distinct passages within one test → no within-test-cloning violation');

  // Same passage → Jaccard = 1.0 > 0.30
  const sharedPassage = 'The lighthouse keeper recorded weather observations every six hours for forty-three consecutive years.';
  const cloned = [
    { testN: 1, line: 50, item: rwItem({ id: 1, passage: sharedPassage }) },
    { testN: 1, line: 70, item: rwItem({ id: 2, passage: sharedPassage }) },
  ];
  const r2 = validateWithinTestCloning(cloned, 1);
  assert(r2.length === 1, 'identical passages within one test → one within-test-cloning violation');
  assert(r2[0].testN === 1, 'violation has correct testN');
}

// ===========================================================================
// 8. extractEntities — pulls out people + works
// ===========================================================================

console.log('\n[8] extractEntities');
{
  // Pattern A (title): "Dr. Robin Wall Kimmerer".
  // Pattern B (descriptor + name): "the geologist Marie Tharp".
  // Bare "Marie Tharp" in the wild is intentionally not extracted — the
  // function is conservative; downstream allowlists handle false negatives.
  const passage = 'Dr. Robin Wall Kimmerer described moss in *Gathering Moss*, while the geologist Marie Tharp produced the seafloor map.';
  const { people, works } = extractEntities(passage);
  assert(people.some(p => p.name === 'Robin Wall Kimmerer'), 'extracts "Robin Wall Kimmerer" via Dr. title (Pattern A)');
  assert(people.some(p => p.name === 'Marie Tharp'), 'extracts "Marie Tharp" via "the geologist" descriptor (Pattern B)');
  assert(works.some(w => w.title === 'Gathering Moss'), 'extracts italicized work title');

  const empty = extractEntities('');
  assert(empty.people.length === 0 && empty.works.length === 0, 'empty passage → empty extraction');
}

// ===========================================================================
// 9. CLI driver — --validate-sources, --all, --check=, --test=, F13
// ===========================================================================

console.log('\n[9] CLI driver');

// 9a. --validate-sources happy path on synthesized source files.
{
  const genDir = makeTempDir('rwval-src-');
  writeFixtureSources(path.join(genDir, 'rwSources'));
  const env = { ...process.env, RW_GEN_DIR: genDir };
  const r = spawnSync('node', [SCRIPT, '--validate-sources'], { env });
  const stdout = (r.stdout || '').toString();
  assert(r.status === 0, `--validate-sources exit 0 with valid sources (got ${r.status})`);
  assert(/OK\s+researchers\.json/.test(stdout), '--validate-sources reports OK for researchers.json');
  assert(/OK\s+literaryWorks\.json/.test(stdout), '--validate-sources reports OK for literaryWorks.json');
}

// 9b. --validate-sources fails on broken source.
{
  const genDir = makeTempDir('rwval-broken-');
  writeFixtureSources(path.join(genDir, 'rwSources'));
  // Corrupt one file: make researchers.json a non-array object.
  fs.writeFileSync(path.join(genDir, 'rwSources', 'researchers.json'), '{}');
  const env = { ...process.env, RW_GEN_DIR: genDir };
  const r = spawnSync('node', [SCRIPT, '--validate-sources'], { env });
  const stdout = (r.stdout || '').toString();
  assert(r.status === 1, '--validate-sources exits 1 on non-array source');
  assert(/source-schema/.test(stdout), 'emits source-schema violation');
}

// 9c. --test=1 against a clean fixture bank → exit 0. Each item gets a
// distinct passage so bank-skeleton / within-test-cloning don't cross-fire.
{
  const cleanItems = [
    rwItem({ id: 1, passage: 'Wetland scientists tracked salinity changes across the estuary over twenty years.' }),
    rwItem({ id: 2, passage: 'A historian uncovered correspondence revealing the cartographer late-career doubts.' }),
    rwItem({ id: 3, skill: 'text-structure-and-purpose',
      question: 'Which choice best states the main purpose of the text?',
      passage: 'Theatergoers in postwar London queued for hours to see the experimental works.' }),
    rwItem({ id: 4, passage: 'Astronomers measured the comet velocity using radio-frequency triangulation methods.' }),
  ];
  const { env } = setupFixtureEnv('rwval-clean', cleanItems);
  const r1 = spawnSync('node', [SCRIPT, '--test=1'], { env });
  assert(r1.status === 0, `--test=1 against clean fixture exits 0 (got ${r1.status}, stderr=${(r1.stderr||'').toString().slice(0,200)})`);
  assert(/0 violation/.test((r1.stderr || '').toString()), 'summary reports 0 violations on clean fixture');
}

// 9d. --test=1 with a known-bad item → exit 1, stem-verbatim emitted.
{
  const dirtyItems = [
    rwItem({ id: 1, question: 'Pick the best.' }),
    rwItem({ id: 2 }),
    rwItem({ id: 3 }),
    rwItem({ id: 4 }),
  ];
  const { env } = setupFixtureEnv('rwval-stem', dirtyItems);
  const r = spawnSync('node', [SCRIPT, '--test=1'], { env });
  const stdout = (r.stdout || '').toString();
  assert(r.status === 1, '--test=1 with bad stem exits 1');
  assert(/stem-verbatim/.test(stdout), 'emits stem-verbatim violation');
  assert(/practiceTest1RW\.js/.test(stdout), 'violation cites the file by name');
}

// 9e. --check=stem narrows output to stem violations.
{
  const mixedItems = [
    rwItem({ id: 1, question: 'Pick the best.' }), // stem fail
    rwItem({ id: 2, choices: [
      { id: 'A', text: 'comprehensiver' }, { id: 'B', text: 'b' },
      { id: 'C', text: 'c' }, { id: 'D', text: 'd' },
    ] }), // distractor fail
    rwItem({ id: 3 }),
    rwItem({ id: 4 }),
  ];
  const { env } = setupFixtureEnv('rwval-checkfilter', mixedItems);
  const r = spawnSync('node', [SCRIPT, '--test=1', '--check=stem'], { env });
  const stdout = (r.stdout || '').toString();
  assert(r.status === 1, '--check=stem with stem fail exits 1');
  assert(/stem-verbatim/.test(stdout), '--check=stem includes stem-verbatim');
  assert(!/distractor-word/.test(stdout), '--check=stem excludes distractor-word');
}

// 9f. F13 — malformed fixture file emits parse-error rather than aborting.
{
  const genDir = makeTempDir('rwval-f13-gen-');
  const testsDir = makeTempDir('rwval-f13-tests-');
  writeFixtureSources(path.join(genDir, 'rwSources'));
  // Test 1: malformed (unbalanced braces). Test 2: well-formed.
  fs.writeFileSync(
    path.join(testsDir, 'practiceTest1RW.js'),
    'export const practiceTest1RW = { modules: [ { questions: [ { id: 1, // unterminated\n'
  );
  writeFixtureRWTest(testsDir, 2, [rwItem(), rwItem({ id: 2 })]);
  const env = { ...process.env, RW_GEN_DIR: genDir, RW_TESTS_DIR: testsDir };
  const r = spawnSync('node', [SCRIPT, '--test=1,2'], { env });
  const stdout = (r.stdout || '').toString();
  assert(r.status === 1, 'malformed fixture causes nonzero exit');
  assert(/parse-error/.test(stdout), 'emits parse-error violation for malformed fixture');
  assert(/practiceTest1RW\.js/.test(stdout), 'parse-error cites the failing file');
  // Validate Test 2 was still processed (no parse-error for it):
  const lines = stdout.split('\n').filter(Boolean);
  const p2errors = lines.filter(l => /practiceTest2RW\.js.*parse-error/.test(l));
  assert(p2errors.length === 0, 'well-formed sibling Test 2 still processes');
}

// 9g. parseArgs rejects bad input.
{
  const genDir = makeTempDir('rwval-badargs-');
  writeFixtureSources(path.join(genDir, 'rwSources'));
  const env = { ...process.env, RW_GEN_DIR: genDir };
  const noArgs = spawnSync('node', [SCRIPT], { env });
  assert(noArgs.status === 1, 'no args → exit 1');
  const badN = spawnSync('node', [SCRIPT, '--test=99'], { env });
  assert(badN.status === 1, '--test=99 → exit 1');
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
