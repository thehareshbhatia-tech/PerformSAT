#!/usr/bin/env node
/**
 * Automated test suite for the PDF-First Official Question Bank Pipeline.
 * Runs: node scripts/testPipeline.mjs
 *
 * Tests the extract → rewrite → validate → publish chain and the
 * bank integration layer (skill alias resolution, selectors).
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');

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
// 1. Test: Extract output exists and has expected shape
// ---------------------------------------------------------------------------

console.log('\n[1] Extract output');
const extractedPath = path.join(ROOT, 'scripts', 'generated', 'pdfExtracted.json');
assert(fs.existsSync(extractedPath), 'pdfExtracted.json exists');

const extracted = JSON.parse(fs.readFileSync(extractedPath, 'utf8'));
assert(Array.isArray(extracted.questions), 'extracted.questions is an array');
assert(extracted.questions.length > 0, 'extracted.questions is non-empty');
assert(extracted.count === extracted.questions.length, 'extracted.count matches array length');
assert(extracted.pipeline === 'pdf-first', 'pipeline is pdf-first');

const q0 = extracted.questions[0];
assert(typeof q0.sourceRef === 'string' && q0.sourceRef.startsWith('pdf-test-'), 'sourceRef has pdf-test- prefix');
assert(typeof q0.rawStem === 'string' && q0.rawStem.length > 5, 'rawStem is non-trivial');
assert(typeof q0.domain === 'string', 'domain is set');
assert(Array.isArray(q0.skills) && q0.skills.length > 0, 'skills array is non-empty');
assert(typeof q0.module === 'number', 'module number present');
assert(typeof q0.ocrConfidence === 'number', 'ocrConfidence present');
assert(typeof q0.difficulty === 'string', 'difficulty present');

const latexPreserved = extracted.questions.some(q => (q.rawStem || '').includes('$'));
assert(latexPreserved, 'LaTeX ($) preserved in at least some questions');

// ---------------------------------------------------------------------------
// 2. Test: Rewrite output
// ---------------------------------------------------------------------------

console.log('\n[2] Rewrite output');
const rewrittenPath = path.join(ROOT, 'scripts', 'generated', 'pdfRewritten.json');
assert(fs.existsSync(rewrittenPath), 'pdfRewritten.json exists');

const rewritten = JSON.parse(fs.readFileSync(rewrittenPath, 'utf8'));
assert(Array.isArray(rewritten.questions), 'rewritten.questions is an array');
assert(rewritten.rewrittenCount === rewritten.questions.length, 'rewrittenCount matches');
assert(rewritten.questions.length >= 1500, `rewritten count >= 1500 for 2K bank (got ${rewritten.questions.length})`);
assert(rewritten.pipeline === 'pdf-first-strict-rewrite', 'pipeline label correct');

const r0 = rewritten.questions[0];
assert(typeof r0.id === 'string' && r0.id.startsWith('bank-off-'), 'rewritten id has correct prefix');
assert(['algebra', 'problem-solving', 'advanced-math', 'geometry'].includes(r0.domain), 'valid domain');
assert(Array.isArray(r0.skills) && r0.skills.length > 0, 'skills array present');
assert(['easy', 'medium', 'hard'].includes(r0.difficulty), 'valid difficulty');
assert(['multiple-choice', 'fill-in'].includes(r0.type), 'valid type');
assert(typeof r0.question === 'string' && r0.question.length > 10, 'question stem present');
assert(typeof r0.explanation === 'string' && r0.explanation.length > 20, 'explanation present');
assert(typeof r0.sourceRef === 'string', 'sourceRef provenance present');
assert(Array.isArray(r0.tags) && r0.tags.includes('pdf-rewritten'), 'tagged pdf-rewritten');
assert(r0.authoredBy === 'performsat-engine', 'authoredBy set');
assert(typeof r0.rewriteVersion === 'number', 'rewriteVersion present');

const mcItems = rewritten.questions.filter(q => q.type === 'multiple-choice');
const allMcHave4 = mcItems.every(q => Array.isArray(q.choices) && q.choices.length === 4);
assert(allMcHave4, 'all MC items have exactly 4 choices');

const fillInItems = rewritten.questions.filter(q => q.type === 'fill-in');
const allFillHaveAnswer = fillInItems.every(q => q.correctAnswer !== undefined && q.correctAnswer !== null);
assert(allFillHaveAnswer, 'all fill-in items have correctAnswer');

// ---------------------------------------------------------------------------
// 3. Test: Validate output + rejection report
// ---------------------------------------------------------------------------

console.log('\n[3] Validate output');
const validatedPath = path.join(ROOT, 'scripts', 'generated', 'pdfValidated.json');
assert(fs.existsSync(validatedPath), 'pdfValidated.json exists');

const validated = JSON.parse(fs.readFileSync(validatedPath, 'utf8'));
assert(validated.validCount > 0, `validCount > 0 (got ${validated.validCount})`);
assert(typeof validated.rejected === 'number', 'rejected count present');
assert(validated.validCount + validated.rejected === rewritten.questions.length,
  `valid + rejected = rewritten total (${validated.validCount} + ${validated.rejected} = ${rewritten.questions.length})`);

const rejectionPath = path.join(ROOT, 'scripts', 'generated', 'pdfRejections.json');
if (validated.rejected > 0) {
  assert(fs.existsSync(rejectionPath), 'pdfRejections.json exists when rejections > 0');
  const rejections = JSON.parse(fs.readFileSync(rejectionPath, 'utf8'));
  assert(Array.isArray(rejections.rejections), 'rejections array exists');
  if (rejections.rejections.length > 0) {
    const r0 = rejections.rejections[0];
    assert(typeof r0.id === 'string', 'rejection has id');
    assert(typeof r0.reason === 'string', 'rejection has reason');
    assert(typeof r0.jaccard === 'number', 'rejection has jaccard score');
    assert(typeof r0.ngram === 'number', 'rejection has ngram score');
  }
}

// ---------------------------------------------------------------------------
// 4. Test: Published bank shard — REMOVED
// ---------------------------------------------------------------------------
// generatedOfficial.js was deleted in Day 0 cleanup. The PDF-first-strict-rewrite
// pipeline produced 1,750 incoherent items (numbers, names, references mismatched
// across stem/choices/explanation independently). The pipeline can be repaired
// or replaced (LLM-authored variants + arithmetic-coherence validator) before
// any future re-wiring. Until then, the published-bank-shard test is moot.
//
// If the pipeline is rebuilt, restore the relevant `assert(...)` checks here
// against the new shard path.

console.log('\n[4] Published bank shard — SKIPPED (generatedOfficial.js removed; pipeline parked)');

// ---------------------------------------------------------------------------
// 5. Test: Bank index wiring
// ---------------------------------------------------------------------------

console.log('\n[5] Bank index wiring');
const indexContent = fs.readFileSync(path.join(ROOT, 'src', 'data', 'questions', 'bank', 'index.js'), 'utf8');
// generatedOfficial.js is intentionally NOT wired into runtime — the regex
// rewrite pipeline produces incoherent items. Lock that out at the assertion
// level so a future careless re-import is caught here.
assert(!indexContent.includes("import { generatedOfficialBank }"),
  'index does NOT import generatedOfficialBank (incoherent regex output)');
assert(!indexContent.includes('...generatedOfficialBank'),
  'index does NOT spread generatedOfficialBank into questionBank');
assert(indexContent.includes("from '../index'"),
  'index pulls hand-authored topic questions instead');
assert(indexContent.includes('SKILL_ALIAS_MAP'), 'index has skill alias bridge');
assert(indexContent.includes('resolveSkillIds'), 'index has resolveSkillIds function');
assert(indexContent.includes('getTargetedWeaknessSet'), 'index exports getTargetedWeaknessSet');

// ---------------------------------------------------------------------------
// 6. Test: Skill and domain coverage
// ---------------------------------------------------------------------------

console.log('\n[6] Skill and domain coverage');
const domainSet = new Set(validated.questions.map(q => q.domain));
assert(domainSet.has('algebra'), 'has algebra questions');
assert(domainSet.has('problem-solving'), 'has problem-solving questions');
assert(domainSet.has('advanced-math'), 'has advanced-math questions');
assert(domainSet.has('geometry'), 'has geometry questions');

const allSkills = new Set();
validated.questions.forEach(q => (q.skills || []).forEach(s => allSkills.add(s)));
assert(allSkills.size >= 15, `at least 15 distinct skills covered (got ${allSkills.size})`);

// Verify coverage of all four domain groups
const domainCounts = {};
validated.questions.forEach(q => { domainCounts[q.domain] = (domainCounts[q.domain] || 0) + 1; });
assert(domainCounts['algebra'] >= 10, `algebra >= 10 (got ${domainCounts['algebra'] || 0})`);
assert(domainCounts['problem-solving'] >= 5, `problem-solving >= 5 (got ${domainCounts['problem-solving'] || 0})`);
assert(domainCounts['advanced-math'] >= 5, `advanced-math >= 5 (got ${domainCounts['advanced-math'] || 0})`);
assert(domainCounts['geometry'] >= 5, `geometry >= 5 (got ${domainCounts['geometry'] || 0})`);

// Verify difficulty mix
const diffCounts = {};
validated.questions.forEach(q => { diffCounts[q.difficulty] = (diffCounts[q.difficulty] || 0) + 1; });
assert(diffCounts['easy'] >= 5, `easy >= 5 (got ${diffCounts['easy'] || 0})`);
assert(diffCounts['medium'] >= 10, `medium >= 10 (got ${diffCounts['medium'] || 0})`);
assert(diffCounts['hard'] >= 10, `hard >= 10 (got ${diffCounts['hard'] || 0})`);

// ---------------------------------------------------------------------------
// 7. Test: No duplicate IDs across full bank
// ---------------------------------------------------------------------------

console.log('\n[7] Cross-bank ID uniqueness');
const allBankIds = new Set();
let dupeCount = 0;

const handBanks = [
  { path: 'algebra.js', name: 'algebraBank' },
  { path: 'problemSolving.js', name: 'problemSolvingBank' },
  { path: 'advancedMath.js', name: 'advancedMathBank' },
  { path: 'geometry.js', name: 'geometryBank' },
];
for (const b of handBanks) {
  const content = fs.readFileSync(path.join(ROOT, 'src', 'data', 'questions', 'bank', b.path), 'utf8');
  const idMatches = content.match(/id:\s*'bank-[^']+'/g) || [];
  for (const m of idMatches) {
    const id = m.replace(/id:\s*'/, '').replace(/'$/, '');
    if (allBankIds.has(id)) dupeCount++;
    allBankIds.add(id);
  }
}
for (const q of validated.questions) {
  if (allBankIds.has(q.id)) dupeCount++;
  allBankIds.add(q.id);
}
assert(dupeCount === 0, `no duplicate IDs across banks (found ${dupeCount})`);

// ---------------------------------------------------------------------------
// 8. Test: Source provenance and uniqueness metadata
// ---------------------------------------------------------------------------

console.log('\n[8] Provenance and uniqueness');
const allBankIdsProvenance = new Set(validated.questions.map(q => q.id));
assert(allBankIdsProvenance.size === validated.questions.length, 'all bank IDs are unique');

const allFromTests = validated.questions.every(q => q.tags.some(t => t.startsWith('source-test-')));
assert(allFromTests, 'all items have source-test- tag');

const testNumbers = new Set(validated.questions.map(q => {
  const tag = q.tags.find(t => t.startsWith('source-test-'));
  return tag ? parseInt(tag.replace('source-test-', '')) : null;
}).filter(Boolean));
assert(testNumbers.size >= 5, `questions from >= 5 different tests (got ${testNumbers.size})`);

// ---------------------------------------------------------------------------
// 9. Test: Study plan integration points
// ---------------------------------------------------------------------------

console.log('\n[9] Study plan integration');
const practiceTestContent = fs.readFileSync(path.join(ROOT, 'src', 'components', 'PracticeTest.jsx'), 'utf8');
assert(practiceTestContent.includes('getTargetedWeaknessSet'), 'PracticeTest imports getTargetedWeaknessSet');

const dashboardContent = fs.readFileSync(path.join(ROOT, 'src', 'components', 'StudyPlanDashboard.jsx'), 'utf8');
assert(dashboardContent.includes('getQuestionById'), 'StudyPlanDashboard imports getQuestionById');
assert(dashboardContent.includes('targetedQuestionIds'), 'StudyPlanDashboard uses targetedQuestionIds');

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
