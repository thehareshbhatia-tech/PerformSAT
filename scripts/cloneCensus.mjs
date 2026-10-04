#!/usr/bin/env node
/**
 * cloneCensus.mjs — find same-template clones across the 12 math tests (register v3, 2026-10-04).
 *
 * Stock CB sentences repeat on purpose, so wording alone is not a clone. A clone is the same SAT Pattern
 * written with the same sentence template and only the numbers changed (digit-masked trigram Dice ≥ 0.90),
 * in two different tests or modules. A returning student reads that as "the same question again".
 *
 *   node scripts/cloneCensus.mjs [--test=N] [--threshold=0.9]
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const AUTH = path.join(ROOT, 'scripts', 'generated', 'authored', 'tests2');
const args = Object.fromEntries(process.argv.slice(2).map(a => { const m = a.match(/^--([\w-]+)(?:=(.*))?$/); return m ? [m[1], m[2] ?? true] : [a, true]; }));
const TH = Number(args.threshold || 0.9);
const norm = (s) => String(s || '').toLowerCase().replace(/\$[^$]*\$/g, ' m ').replace(/\d+([.,]\d+)?/g, '#').replace(/\s+/g, ' ').trim();
const tri = (s) => { const m = new Map(); for (let i = 0; i < s.length - 2; i++) { const t = s.slice(i, i + 3); m.set(t, (m.get(t) || 0) + 1); } return m; };
const dice = (a, b) => { let i = 0, sa = 0, sb = 0; for (const [k, v] of a) { sa += v; i += Math.min(v, b.get(k) || 0); } for (const v of b.values()) sb += v; return sa + sb ? 2 * i / (sa + sb) : 0; };
const items = [];
for (const dir of fs.readdirSync(AUTH)) for (const f of fs.readdirSync(path.join(AUTH, dir))) {
  if (!f.endsWith('.json')) continue;
  const a = JSON.parse(fs.readFileSync(path.join(AUTH, dir, f), 'utf8'));
  const pat = (String(a.explanation).match(/\*\*SAT Pattern:\s*([^*]+?)\s*\*\*/) || [])[1] || '';
  const n = norm(a.question); if (n.length < 25) continue;
  items.push({ id: `${dir}/${f.replace('.json', '')}`, test: dir, pat, t: tri(n), q: a.question });
}
const pairs = [];
for (let i = 0; i < items.length; i++) for (let j = i + 1; j < items.length; j++) {
  const A = items[i], B = items[j]; if (A.pat !== B.pat || !A.pat) continue;
  if (args.test && A.test !== `test${args.test}` && B.test !== `test${args.test}`) continue;
  const d = dice(A.t, B.t); if (d >= TH) pairs.push({ d, a: A, b: B });
}
pairs.sort((x, y) => y.d - x.d);
for (const p of pairs) console.log(`${p.d.toFixed(2)}  ${p.a.id} ~ ${p.b.id}  [${p.a.pat}]\n      ${p.a.q.slice(0, 110).replace(/\n/g, ' ')}\n      ${p.b.q.slice(0, 110).replace(/\n/g, ' ')}`);
console.log(`\n${pairs.length} same-pattern template clone pair(s) at Dice ≥ ${TH} across ${items.length} items`);
