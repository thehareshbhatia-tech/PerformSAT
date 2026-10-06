#!/usr/bin/env node
/**
 * Does College Board ever ask this? Search every official source we hold:
 * the Educator Question Bank (math + R&W, incl. the "new 300" set) and the
 * Bluebook practice tests 1-11 (segmented text).
 *
 * Usage:
 *   node scripts/cbSearch.mjs --q="box plot"                 # regex, case-insensitive
 *   node scripts/cbSearch.mjs --q="compounded" --section=math --n=5
 *   node scripts/cbSearch.mjs --q="standard deviation" --difficulty=E
 *
 * Prints hit counts per source and up to --n snippets (default 4). Items are
 * Ⓒ College Board: use the result to decide WHETHER an archetype is on the
 * test and at what difficulty, never to copy an item.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const args = Object.fromEntries(process.argv.slice(2).map(a => { const m = a.match(/^--([\w-]+)(?:=(.*))?$/); return m ? [m[1], m[2] === undefined ? true : m[2]] : [a, true]; }));
if (!args.q) { console.error('need --q="regex"'); process.exit(1); }
const re = new RegExp(args.q, 'i');
const n = parseInt(args.n || '4', 10);
const sec = args.section; // math | rw

const out = [];
for (const [s, file] of [['math', 'cbEducatorQBank.json'], ['rw', 'cbEducatorQBankRW.json']]) {
  if (sec && sec !== s) continue;
  const { items } = JSON.parse(fs.readFileSync(path.join(__dirname, 'generated', file), 'utf8'));
  for (const v of Object.values(items)) {
    if (args.difficulty && v.difficulty !== args.difficulty) continue;
    const text = `${v.stimulusPlain || ''} ${v.stemPlain || ''} ${(v.answerOptions || []).map(o => o.contentPlain).join(' | ')}`;
    if (re.test(text)) out.push({ src: `qbank-${s}`, id: v.questionId, tag: `${v.skill} · ${v.difficulty}`, text });
  }
}
const segPath = path.join(ROOT, 'knowledge/reference/official-tests/official_tests_segments.json');
if (fs.existsSync(segPath) && !args.difficulty) {
  for (const g of JSON.parse(fs.readFileSync(segPath, 'utf8'))) {
    if (sec && g.section !== sec) continue;
    if (re.test(g.text)) out.push({ src: 'bluebook-pt', id: `PT${g.test} ${g.section} q${g.q}`, tag: '', text: g.text });
  }
}
const counts = out.reduce((m, x) => ((m[x.src] = (m[x.src] || 0) + 1), m), {});
const byDiff = out.filter(x => x.src.startsWith('qbank')).reduce((m, x) => { const d = x.tag.split('· ')[1]; m[d] = (m[d] || 0) + 1; return m; }, {});
console.log(`/${args.q}/i → ${out.length} official hits`, counts, Object.keys(byDiff).length ? `QBank by difficulty ${JSON.stringify(byDiff)}` : '');
for (const x of out.slice(0, n)) {
  const i = Math.max(0, x.text.search(re) - 120);
  console.log(`\n[${x.src} ${x.id}${x.tag ? ' · ' + x.tag : ''}]\n…${x.text.slice(i, i + 360).replace(/\s+/g, ' ')}…`);
}
