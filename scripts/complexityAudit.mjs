#!/usr/bin/env node
/**
 * Complexity audit: is each math item no more complex than what College Board
 * prints for the same skill and difficulty?
 *
 * Features are computed the same way for our items (LaTeX → KaTeX MathML) and
 * for Educator Question Bank items (their own MathML), so the comparison is
 * apples to apples:
 *   words    prose words in the stem (math removed)
 *   nums     numeric literals in stem math + prose
 *   digits   longest numeric literal (digits only)
 *   dec      1 if any non-integer literal appears in the stem
 *   ops      operators + fractions + powers + roots in stem math
 *   vars     distinct letters used as variables in stem math
 *   cnums    numeric literals across all four choices (MC only)
 *   cops     operator/structure count across choices (MC only)
 *
 * An item is flagged when a feature exceeds the QBank p95 for its CB skill at
 * its difficulty (and, for counts, the excess is real: at least +2 over p95).
 *
 * Usage:
 *   node scripts/complexityAudit.mjs                 # summary
 *   node scripts/complexityAudit.mjs --json=out.json # per-item rows + flags
 *   node scripts/complexityAudit.mjs --norms         # print QBank p50/p95 per skill × difficulty
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import katex from 'katex';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const args = Object.fromEntries(process.argv.slice(2).map(a => { const m = a.match(/^--([\w-]+)(?:=(.*))?$/); return m ? [m[1], m[2] === undefined ? true : m[2]] : [a, true]; }));

const { getCBSkillForPattern, CB_MATH_SKILLS } = await import(pathToFileURL(path.join(ROOT, 'src/data/questions/cbSkillTaxonomy.js')).href);
const { extractSatPattern } = await import(pathToFileURL(path.join(ROOT, 'src/data/questions/extractSatPattern.js')).href);
const SLUG_TO_CODE = Object.fromEntries(CB_MATH_SKILLS.map(s => [s.slug, s.code]));
const CODE_TO_LABEL = Object.fromEntries(CB_MATH_SKILLS.map(s => [s.code, s.label]));
const DIFF = { easy: 'E', medium: 'M', hard: 'H', E: 'E', M: 'M', H: 'H' };

// ─── MathML feature counting (shared) ───────────────────────────────────────
const OPS = new Set(['+', '-', '−', '×', '·', '⋅', '÷', '/', '*', '=', '<', '>', '≤', '≥', '±']);
function mathmlFeatures(ml) {
  const mn = [...ml.matchAll(/<mn[^>]*>([^<]*)<\/mn>/g)].map(m => m[1].replace(/[,\s]/g, ''));
  const mi = [...ml.matchAll(/<mi[^>]*>([^<]*)<\/mi>/g)].map(m => m[1]).filter(s => /^[a-zA-Z]$/.test(s));
  const mo = [...ml.matchAll(/<mo[^>]*>([^<]*)<\/mo>/g)].map(m => m[1].replace(/&minus;|&#x2212;|&#8722;/g, '−').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&le;/g, '≤').replace(/&ge;/g, '≥').replace(/&times;/g, '×').trim()).filter(s => OPS.has(s));
  const struct = (ml.match(/<mfrac|<msup|<msqrt|<mroot/g) || []).length;
  return { mn, mi, ops: mo.length + struct };
}
function latexToMathML(tex) {
  try { return katex.renderToString(tex, { output: 'mathml', throwOnError: false }); } catch { return ''; }
}
function oursMath(s) {
  const str = String(s || '').replace(/\\\$/g, '\u0001');
  const segs = [...str.matchAll(/\$([^$]+)\$/g)].map(m => m[1].replace(/\u0001/g, ''));
  const prose = str.replace(/\$[^$]+\$/g, ' ');
  return { ml: segs.map(latexToMathML).join(' '), prose };
}
const proseNums = (p) => (String(p).match(/\b\d[\d,]*(\.\d+)?\b/g) || []).map(n => n.replace(/,/g, ''));
const proseWords = (p) => String(p).split(/\s+/).filter(w => /[a-zA-Z]/.test(w)).length;

function featuresFrom({ stemMl, stemProse, choiceMls }) {
  const f = mathmlFeatures(stemMl);
  const nums = [...f.mn, ...proseNums(stemProse)].filter(n => /\d/.test(n));
  const digits = Math.max(0, ...nums.map(n => n.replace(/\D/g, '').length));
  const dec = nums.some(n => /\.\d/.test(n)) ? 1 : 0;
  const out = { words: proseWords(stemProse), nums: nums.length, digits, dec, ops: f.ops, vars: new Set(f.mi).size };
  if (choiceMls) {
    let cn = 0, co = 0;
    for (const c of choiceMls) { const g = mathmlFeatures(c.ml); cn += g.mn.length + proseNums(c.prose).length; co += g.ops; }
    out.cnums = cn; out.cops = co;
  }
  return out;
}

// ─── QBank ──────────────────────────────────────────────────────────────────
function qbankRows() {
  const { items } = JSON.parse(fs.readFileSync(path.join(__dirname, 'generated/cbEducatorQBank.json'), 'utf8'));
  return Object.values(items).map(v => {
    const html = (v.stimulusHtml || '') + ' ' + (v.stemHtml || '');
    const noTables = html.replace(/<table[\s\S]*?<\/table>/g, ' ').replace(/<figure[\s\S]*?<\/figure>/g, ' ');
    const maths = [...noTables.matchAll(/<math[\s\S]*?<\/math>/g)].map(m => m[0]).join(' ');
    const prose = noTables.replace(/<math[\s\S]*?<\/math>/g, ' ').replace(/<[^>]+>/g, ' ').replace(/&[a-z]+;/g, ' ');
    let choiceMls = null;
    if (v.type === 'mcq' && Array.isArray(v.answerOptions)) {
      choiceMls = v.answerOptions.map(o => { const h = o.contentHtml || o.content || ''; return { ml: [...h.matchAll(/<math[\s\S]*?<\/math>/g)].map(m => m[0]).join(' '), prose: h.replace(/<math[\s\S]*?<\/math>/g, ' ').replace(/<[^>]+>/g, ' ') }; });
    }
    return { id: v.questionId, code: v.skillCode, diff: v.difficulty, mc: v.type === 'mcq', f: featuresFrom({ stemMl: maths, stemProse: prose, choiceMls }) };
  });
}

// ─── Ours ───────────────────────────────────────────────────────────────────
async function loadModule(file) {
  const m = await import(pathToFileURL(file).href);
  return m.default || Object.values(m).find(v => v && typeof v === 'object');
}
const TOPIC_CODE = { circles: 'S.D.', dimensionalAnalysis: 'Q.A.', equivalentExpressions: 'P.A.', exponents: 'P.A.', functions: 'P.C.', linearEquations: 'H.B.', percents: 'Q.B.', quadratics: 'P.B.', radiansDegrees: 'S.D.', statistics: 'Q.C.', systems: 'H.D.', transformations: 'P.C.', triangles: 'S.B.', volume: 'S.A.' };
const DOMAIN_PREFIX = { algebra: 'H', 'advanced-math': 'P', advancedMath: 'P', 'problem-solving': 'Q', problemSolving: 'Q', geometry: 'S' };
function codeFor(q) {
  const pat = q.satPattern || extractSatPattern(q.explanation || '');
  if (pat) { const sk = getCBSkillForPattern(pat); if (sk?.code) return sk.code; }
  for (const s of q.skills || []) { const sk = getCBSkillForPattern(s); if (sk?.code) return sk.code; }
  return null;
}
function rowFor(id, q, source, topic) {
  const stem = oursMath(q.question);
  const mc = Array.isArray(q.choices) && q.choices.length > 0;
  const choiceMls = mc ? q.choices.map(c => { const o = oursMath(c.text); return { ml: o.ml, prose: o.prose }; }) : null;
  return { id, source, code: codeFor(q) || (topic && TOPIC_CODE[topic]) || (DOMAIN_PREFIX[q.domain] ? DOMAIN_PREFIX[q.domain] + '*' : null), diff: DIFF[q.difficulty] || null, mc, figure: !!(q.diagram || q.graphData || q.graph || q.figure || q.questionTable), f: featuresFrom({ stemMl: stem.ml, stemProse: stem.prose, choiceMls }), q };
}
async function ourRows() {
  const out = [];
  const T = path.join(ROOT, 'src/data/practiceTests');
  for (let n = 1; n <= 12; n++) {
    for (const [suf, mods] of [['', ['m1', 'm2']], ['M2Easy', ['m2easy']]]) {
      const d = await loadModule(path.join(T, `practiceTest${n}${suf}.js`));
      (d.modules || [d]).forEach((m, i) => m.questions.forEach(q => out.push(rowFor(`test${n}-${mods[i]}-q${String(q.id).padStart(2, '0')}`, q, 'test'))));
    }
  }
  const B = path.join(ROOT, 'src/data/questions/bank');
  for (const f of ['algebra', 'advancedMath', 'problemSolving', 'geometry']) {
    const src = fs.readFileSync(path.join(B, `${f}.js`), 'utf8').replace(/^import.*$/mg, '').replace(/export const (\w+)\s*=/, 'module.exports =');
    const mod = { exports: null }; new Function('module', src)(mod);
    for (const q of mod.exports) out.push(rowFor(q.id, q, 'drill'));
  }
  const Q = path.join(ROOT, 'src/data/questions');
  for (const f of ['circles', 'dimensionalAnalysis', 'equivalentExpressions', 'exponents', 'functions', 'linearEquations', 'percents', 'quadratics', 'radiansDegrees', 'statistics', 'systems', 'transformations', 'triangles', 'volume']) {
    const mod = await import(pathToFileURL(path.join(Q, `${f}.js`)).href);
    const obj = Object.values(mod).find(v => v && typeof v === 'object' && !Array.isArray(v));
    for (const [section, list] of Object.entries(obj || {})) for (const q of list || []) out.push(rowFor(`topic-${f}-${section.replace(/\W+/g, '_')}-${q.id}`, q, 'topic', f));
  }
  return out;
}

// ─── Norms + flags ──────────────────────────────────────────────────────────
// --json is an OUTPUT path. Refuse to clobber content (two reviewers lost item files this way).
function safeOut(p) {
  const abs = path.resolve(p);
  if (abs.startsWith(path.join(ROOT, 'src')) || abs.startsWith(path.join(ROOT, 'scripts')) || abs.startsWith(path.join(ROOT, 'docs'))) { console.error(`refusing to write audit output inside the repo content tree: ${abs} (use a scratch path)`); process.exit(1); }
  if (fs.existsSync(abs)) { try { const j = JSON.parse(fs.readFileSync(abs, 'utf8')); if (!Array.isArray(j) || (j[0] && !('flags' in j[0]))) throw 0; } catch { console.error(`refusing to overwrite ${abs}: not a previous audit output`); process.exit(1); } }
  return abs;
}
const pct = (arr, p) => { if (!arr.length) return null; const s = [...arr].sort((a, b) => a - b); return s[Math.min(s.length - 1, Math.floor(p * (s.length - 1)))]; };
const FEATS = ['words', 'nums', 'digits', 'dec', 'ops', 'vars', 'cnums', 'cops'];
function buildNorms(qb) {
  const norms = {};
  const groups = {};
  for (const r of qb) {
    for (const key of [`${r.code}|${r.diff}`, `${r.code}|*`, `${r.code[0]}*|${r.diff}`, `${r.code[0]}*|*`]) (groups[key] = groups[key] || []).push(r);
  }
  for (const [key, rs] of Object.entries(groups)) {
    norms[key] = { n: rs.length };
    for (const ft of FEATS) {
      const vals = rs.filter(r => r.f[ft] !== undefined).map(r => r.f[ft]);
      norms[key][ft] = { p50: pct(vals, 0.5), p95: pct(vals, 0.95), max: vals.length ? Math.max(...vals) : null };
    }
    norms[key].decShare = rs.filter(r => r.f.dec).length / rs.length;
  }
  return norms;
}
const MARGIN = { words: 8, nums: 2, digits: 1, ops: 3, vars: 1, cnums: 3, cops: 4 };
function flagsFor(r, norms) {
  const key = r.diff && norms[`${r.code}|${r.diff}`]?.n >= 8 ? `${r.code}|${r.diff}` : `${r.code}|*`;
  const N = norms[key];
  if (!N) return { key: null, flags: [] };
  const flags = [];
  for (const ft of Object.keys(MARGIN)) {
    const v = r.f[ft]; const lim = N[ft]?.p95;
    if (v === undefined || lim === null || lim === undefined) continue;
    if (v > Math.max(lim + MARGIN[ft], N[ft].max)) flags.push(`${ft} ${v} > CB max ${N[ft].max} (p95 ${lim})`);
  }
  if (r.f.dec && N.decShare < 0.05) flags.push(`decimal in stem (CB ${Math.round(N.decShare * 100)}% for this skill)`);
  return { key, flags };
}

// ─── CLI ────────────────────────────────────────────────────────────────────
const qb = qbankRows();
const norms = buildNorms(qb);
if (args.norms) {
  for (const [k, N] of Object.entries(norms).sort()) {
    if (k.endsWith('|*')) continue;
    console.log(`${k.padEnd(8)} n=${String(N.n).padStart(3)} ${FEATS.map(ft => `${ft} ${N[ft].p50}/${N[ft].p95}/${N[ft].max}`).join('  ')}  dec ${Math.round(N.decShare * 100)}%  ${CODE_TO_LABEL[k.split('|')[0]] || ''}`);
  }
  process.exit(0);
}
const ours = await ourRows();
const rows = ours.map(r => ({ ...r, ...flagsFor(r, norms) }));
const unmapped = rows.filter(r => !r.code).length;
const flagged = rows.filter(r => r.flags.length);
const bySource = {};
for (const r of rows) { const s = bySource[r.source] = bySource[r.source] || { n: 0, flagged: 0 }; s.n++; if (r.flags.length) s.flagged++; }
console.log(`QBank norm rows: ${qb.length} · our math items: ${rows.length} · unmapped skill: ${unmapped}`);
for (const [s, v] of Object.entries(bySource)) console.log(`  ${s.padEnd(6)} ${v.n} items · ${v.flagged} over CB complexity (${(100 * v.flagged / v.n).toFixed(1)}%)`);
const byFeat = {};
for (const r of flagged) for (const f of r.flags) { const k = f.split(' ')[0]; byFeat[k] = (byFeat[k] || 0) + 1; }
console.log('  by feature:', byFeat);
// Medians ours vs CB, per difficulty
for (const d of ['E', 'M', 'H']) {
  const o = rows.filter(r => r.diff === d && !r.figure), c = qb.filter(r => r.diff === d);
  console.log(`  ${d}: median ours/CB  ` + ['words', 'nums', 'digits', 'ops', 'cops'].map(ft => `${ft} ${pct(o.map(r => r.f[ft]).filter(v => v !== undefined), 0.5)}/${pct(c.map(r => r.f[ft]).filter(v => v !== undefined), 0.5)}`).join('  ') + `  dec ${Math.round(100 * o.filter(r => r.f.dec).length / o.length)}%/${Math.round(100 * c.filter(r => r.f.dec).length / c.length)}%`);
}
if (args.json) {
  fs.writeFileSync(safeOut(args.json), JSON.stringify(rows.map(({ q, ...r }) => ({ ...r, text: [q.question, ...(q.choices || []).map(c => c.text)].join(' || '), key: q.correctAnswer })), null, 1));
  console.log(`wrote ${args.json}`);
}
