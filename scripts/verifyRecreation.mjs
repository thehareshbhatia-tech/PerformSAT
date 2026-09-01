#!/usr/bin/env node
/**
 * Central verification for the official-calibration test rebuild
 * (docs/TEST_RECREATION_SPEC.md). Runs the uniqueness gate with the CORRECT
 * corpus shape (the cache `items` OBJECT — an array of cache values silently
 * indexes nothing in indexCorpus and passes everything), plus KaTeX $-pair
 * checks, over every recreated file of one test.
 *
 * Usage:
 *   node scripts/verifyRecreation.mjs --test=1
 *
 * Exit 1 on any failure. Shell validators (lint, validateRWBank, jest
 * testBundleIntegrity, auditMissingDiagrams) are run separately by the
 * orchestrator — this script owns what they don't cover.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { checkUniqueness } from './calibrateModule.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const GEN = path.join(ROOT, 'scripts', 'generated');
const TESTS = path.join(ROOT, 'src', 'data', 'practiceTests');

const testN = (() => {
  const a = process.argv.find(a => a.startsWith('--test='));
  if (!a) { console.error('need --test=N'); process.exit(1); }
  return parseInt(a.split('=')[1], 10);
})();

const mathCache = JSON.parse(fs.readFileSync(path.join(GEN, 'cbEducatorQBank.json'), 'utf8')).items;
const rwCache = JSON.parse(fs.readFileSync(path.join(GEN, 'cbEducatorQBankRW.json'), 'utf8')).items;

// sanity: the gate must actually catch a verbatim official stem
{
  const probe = Object.values(mathCache).find(v => (v.stemPlain || '').split(' ').length > 20);
  const r = checkUniqueness(probe.stemPlain, mathCache);
  if (r.pass) {
    console.error('FATAL: uniqueness gate control failed — a verbatim official stem passed. Corpus shape bug.');
    process.exit(1);
  }
}

let failures = 0;
const flag = (where, msg) => { failures++; console.error(`FAIL ${where}: ${msg}`); };

function checkDollarPairs(text, where) {
  // strip escaped \$ then count unescaped $
  const n = (text.replace(/\\\$/g, '').match(/\$/g) || []).length;
  if (n % 2 !== 0) flag(where, `unbalanced $ delimiters (${n})`);
}

function uniq(text, cache, where) {
  if (!text || text.split(/\s+/).length < 8) return; // too short to fingerprint
  const r = checkUniqueness(text, cache);
  if (!r.pass) flag(where, `uniqueness gate: jaccard=${r.jaccard} ngram=${r.ngramOverlap} closest=${r.closestQbankId}`);
}

// ---- math JS files (regex extraction of stems/explanations) ----
function checkMathFile(file) {
  const p = path.join(TESTS, file);
  if (!fs.existsSync(p)) { flag(file, 'missing'); return; }
  const src = fs.readFileSync(p, 'utf8');
  const stems = [...src.matchAll(/question:\s*"((?:[^"\\]|\\.)*)"/g)].map(m => m[1]);
  const expl = [...src.matchAll(/explanation:\s*"((?:[^"\\]|\\.)*)"/g)].map(m => m[1]);
  if (!stems.length) flag(file, 'no stems extracted');
  stems.forEach((s, i) => {
    uniq(s.replace(/\\n/g, ' '), mathCache, `${file} stem#${i + 1}`);
    checkDollarPairs(s, `${file} stem#${i + 1}`);
  });
  expl.forEach((e, i) => checkDollarPairs(e, `${file} explanation#${i + 1}`));
  console.log(`${file}: ${stems.length} stems checked`);
}

// ---- RW authored JSON + easy-variant JS ----
function rwTextOf(item) {
  // NOTE: item.question is deliberately EXCLUDED — R&W stems are mandated
  // verbatim canonical CB stock stems (RW_STEM_REGISTRY), so they match
  // official items by design. Passages, notes, and choices must be original.
  const parts = [];
  if (item.passage) parts.push(item.passage);
  if (Array.isArray(item.passages)) parts.push(...item.passages.map(p => p.text));
  if (item.studentNotes?.bullets) parts.push(...item.studentNotes.bullets);
  for (const c of item.choices || []) parts.push(c.text);
  return parts.join(' ');
}

function checkRWAuthored() {
  const dir = path.join(GEN, 'authored', `test${testN}`);
  const files = fs.readdirSync(dir).filter(f => /^q\d+\.json$/.test(f)).sort();
  if (files.length !== 54) flag(`authored/test${testN}`, `expected 54 files, found ${files.length}`);
  for (const f of files) {
    let item;
    try { item = JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8')); }
    catch (e) { flag(f, `JSON parse: ${e.message}`); continue; }
    uniq(rwTextOf(item), rwCache, `authored/${f}`);
    const words = (item.passage || '').split(/\s+/).filter(Boolean).length;
    if (words > 160) flag(f, `passage ${words} words (>160)`);
  }
  console.log(`authored/test${testN}: ${files.length} items checked`);
}

function checkRWEasy() {
  const p = path.join(TESTS, `practiceTest${testN}RWM2Easy.js`);
  const src = fs.readFileSync(p, 'utf8');
  const passages = [...src.matchAll(/"passage":\s*"((?:[^"\\]|\\.)*)"/g)].map(m => m[1]);
  passages.forEach((s, i) => uniq(s.replace(/\\n/g, ' '), rwCache, `RWM2Easy passage#${i + 1}`));
  console.log(`practiceTest${testN}RWM2Easy.js: ${passages.length} passages checked`);
}

checkMathFile(`practiceTest${testN}.js`);
checkMathFile(`practiceTest${testN}M2Easy.js`);
checkRWAuthored();
checkRWEasy();

if (failures) { console.error(`\n${failures} failure(s)`); process.exit(1); }
console.log('\nAll recreation checks passed.');
