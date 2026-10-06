#!/usr/bin/env node
/**
 * copyrightGate.mjs — "is this ours, or is it College Board's?" check for every
 * math and R&W item SEVA serves (2026-10-04, register v3).
 *
 * Why a second gate: the older uniqueness gate (calibrateModule.checkUniquenessSliding)
 * compares WORDS and skips any stem under 12 tokens. Official-register math is terse
 * ("If 2x + 3 = 9, what is the value of 6x - 1?"), so a copied item can be short and
 * share almost no prose with its source — what it shares is the MATH: the equation,
 * the numbers, the answer choices. This gate compares those.
 *
 * Corpora (both gitignored, never committed — College Board content):
 *   scripts/generated/cbEducatorQBank.json / cbEducatorQBankRW.json   Educator Question Bank (3,308 items)
 *   knowledge/reference/official-tests/sat-practice-test-N-digital.pdf  Bluebook practice tests 1-11
 *
 * Math rules (per item, stem + table + choices):
 *   FAIL equation   — a contiguous run of >= 7 canonical math tokens with >= 2 numbers (one of them not 0/1/2)
 *                     is shared with an official item, or our whole stem expression (>= 5 tokens, >= 2 numbers)
 *                     appears inside one.
 *   FAIL numbers    — >= 4 of our distinct numbers (0, 1, 2 ignored) are shared with ONE official item and they
 *                     are >= 70% of ours. (Practice-test PDFs: same rule inside an 80-word window.)
 *   FAIL choices    — >= 3 of our 4 answer choices are identical to an official item's, ignoring trivial ones.
 *   WARN            — 3 shared numbers incl. two >= 11; one shared non-stock 8-word phrase.
 * Prose rules (math stems and R&W passages/choices):
 *   FAIL phrase     — >= 2 shared 8-word phrases with one official source that are not stock phrases
 *                     (stock = occurs in 2+ distinct official items, e.g. "which choice completes the text with the").
 *
 * Usage:
 *   node scripts/copyrightGate.mjs census [--tests] [--drills] [--rw] [--json=out.json]   # audit live content
 *   node scripts/copyrightGate.mjs probe --text="If $2x + 3 = 9$, what is the value of $6x - 1$?"
 *   node scripts/copyrightGate.mjs selftest                                                 # controls must fail/pass
 * Library: import { checkMath, checkProse } from './copyrightGate.mjs'
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import { execSync } from 'child_process';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const GEN = path.join(ROOT, 'scripts', 'generated');
const PT_DIR = path.join(ROOT, 'knowledge', 'reference', 'official-tests');
const PT_CACHE = path.join(PT_DIR, 'official_tests_text.json');

// ─── canonical math tokens ─────────────────────────────────────────────────
const FN = new Set(['sqrt', 'sin', 'cos', 'tan', 'pi', 'abs']);
const normNum = (s) => {
  let t = String(s).replace(/,/g, '');
  if (/^\d*\.\d+$/.test(t)) t = String(Number(t));
  return t;
};
function splitLetters(word, out) {
  if (FN.has(word)) { out.push(word); return; }
  for (const ch of word) out.push(ch.toLowerCase());
}
/** MathML alttext ("StartFraction 12 x plus 28 Over 4 EndFraction") → tokens */
export function altToTokens(alt) {
  const s = String(alt)
    .replace(/left parenthesis/g, ' ( ').replace(/right parenthesis/g, ' ) ')
    .replace(/left bracket/g, ' ( ').replace(/right bracket/g, ' ) ')
    .replace(/less than or equals( to)?/g, ' < ').replace(/greater than or equals( to)?/g, ' > ')
    .replace(/less than/g, ' < ').replace(/greater than/g, ' > ')
    .replace(/not equals/g, ' != ')
    .replace(/percent sign/g, ' % ').replace(/dollar sign/g, ' ').replace(/degrees?/g, ' ')
    .replace(/StartFraction/g, ' ( ').replace(/EndFraction/g, ' ) ').replace(/\bOver\b/g, ' / ')
    .replace(/StartRoot/g, ' sqrt ( ').replace(/EndRoot/g, ' ) ').replace(/RootIndex \S+/g, ' ')
    .replace(/StartAbsoluteValue|EndAbsoluteValue/g, ' | ')
    .replace(/\bsquared\b/g, ' ^ 2 ').replace(/\bcubed\b/g, ' ^ 3 ').replace(/Superscript/g, ' ^ ').replace(/Baseline/g, ' ')
    .replace(/\bupper\b/g, ' ').replace(/\bline segment\b/g, ' ').replace(/\bangle\b/g, ' ')
    .replace(/\bplus\b/g, ' + ').replace(/\b(minus|negative)\b/g, ' - ').replace(/\bequals\b/g, ' = ')
    .replace(/\b(times|dot)\b/g, ' * ').replace(/\bcomma\b/g, ' , ')
    .replace(/\bsine\b/g, ' sin ').replace(/\bcosine\b/g, ' cos ').replace(/\btangent\b/g, ' tan ')
    .replace(/−/g, ' - ');
  const out = [];
  for (const w of s.split(/\s+/).filter(Boolean)) {
    if (/^\d[\d,]*(\.\d+)?$|^\.\d+$/.test(w)) out.push(normNum(w));
    else if (/^[+\-=*/^()<>|,%]$|^!=$/.test(w)) out.push(w);
    else if (/^[a-zA-Z]$/.test(w)) out.push(w.toLowerCase());
    else if (FN.has(w)) out.push(w);
    // other words (units, "italic", spelled numbers) carry no math identity
  }
  return out;
}
/** LaTeX (our KaTeX inline) → the same token alphabet */
export function latexToTokens(tex) {
  let s = String(tex)
    .replace(/(\d)\{,\}(\d)/g, '$1$2').replace(/\\left|\\right|\\displaystyle|\\[,;!: ]|~/g, ' ')
    .replace(/\\text\{[^}]*\}|\\mathrm\{[^}]*\}|\\textbf\{[^}]*\}/g, ' ')
    .replace(/\\(cdot|times)/g, ' * ').replace(/\\(le|leq)\b/g, ' < ').replace(/\\(ge|geq)\b/g, ' > ').replace(/\\(ne|neq)\b/g, ' != ')
    .replace(/\\pi\b/g, ' pi ').replace(/\\(sin|cos|tan)\b/g, ' $1 ').replace(/\\%/g, ' % ').replace(/\\\$/g, ' ')
    .replace(/\\(circ|angle|degree|overline|overleftrightarrow|overrightarrow|triangle|quad|qquad)\b/g, ' ')
    .replace(/−/g, '-').replace(/\\lvert|\\rvert|\\vert|\\mid/g, ' | ');
  let i = 0; const out = [];
  const group = () => { // parse {…} or a single token, return token list
    while (s[i] === ' ') i++;
    if (s[i] === '{') { i++; const t = seq('}'); i++; return t; }
    const t = []; atom(t); return t;
  };
  const atom = (o) => {
    const c = s[i];
    if (c === undefined) return;
    if (/\d|\./.test(c) && /[\d.]/.test(s.slice(i, i + 2))) { let j = i; while (j < s.length && /[\d.,]/.test(s[j]) && !(s[j] === ',' && !/\d/.test(s[j + 1] || ''))) j++; const raw = s.slice(i, j).replace(/[.,]$/, ''); o.push(normNum(raw)); i += Math.max(raw.length, 1); return; }
    if (c === '\\') {
      const m = s.slice(i).match(/^\\([a-zA-Z]+)/);
      if (m) {
        i += m[0].length; const cmd = m[1];
        if (cmd === 'frac' || cmd === 'dfrac' || cmd === 'tfrac') { const a = group(); const b = group(); o.push('(', ...a, '/', ...b, ')'); return; }
        if (cmd === 'sqrt') { if (s[i] === '[') { const k = s.indexOf(']', i); i = k + 1; } const a = group(); o.push('sqrt', '(', ...a, ')'); return; }
        if (FN.has(cmd)) { o.push(cmd); return; }
        return; // unknown command: drop
      }
      i++; return;
    }
    if (c === '^') { i++; const a = group(); o.push('^', ...a); return; }
    if (c === '_') { i++; group(); return; } // subscripts are labels
    if (/[+\-=*/()<>|,%]/.test(c)) { o.push(c); i++; return; }
    if (c === '[') { o.push('('); i++; return; }
    if (c === ']') { o.push(')'); i++; return; }
    if (/[a-zA-Z]/.test(c)) { let j = i; while (j < s.length && /[a-zA-Z]/.test(s[j])) j++; splitLetters(s.slice(i, j), o); i = j; return; }
    i++;
  };
  const seq = (end) => { const o = []; while (i < s.length && s[i] !== end) { if (s[i] === '{') { i++; o.push(...seq('}')); i++; continue; } atom(o); } return o; };
  out.push(...seq(undefined));
  return out;
}
/** math spans of an item field: $…$ (money \$ masked), plus bare digits in prose (numbers outside math) */
function mathSpans(text) {
  const t = String(text || '').replace(/\\\$/g, ' ');
  return [...t.matchAll(/\$([^$]+)\$/g)].map(m => m[1]);
}
const isNum = (t) => /^-?\d*\.?\d+$/.test(t);
const proseNumbers = (text) => (String(text || '').replace(/\$[^$]*\$/g, ' ').match(/\d[\d,]*(\.\d+)?/g) || []).map(normNum);

// ─── prose shingles ────────────────────────────────────────────────────────
const SH = 8;
const words = (t) => String(t || '').toLowerCase().replace(/&[a-z]+;/g, ' ').replace(/\$[^$]*\$/g, ' m ').replace(/\[[^\]]*\]/g, ' m ').replace(/[^a-z0-9' ]+/g, ' ').split(/\s+/).filter(Boolean);
const shingles = (t) => { const w = words(t); const out = new Set(); for (let i = 0; i + SH <= w.length; i++) out.add(w.slice(i, i + SH).join(' ')); return out; };

// ─── corpora ───────────────────────────────────────────────────────────────
let _C = null;
function htmlAlts(html) { return [...String(html || '').matchAll(/alttext="([^"]*)"/g)].map(m => m[1].replace(/&[a-z]+;/g, ' ')); }
function ptText() {
  if (fs.existsSync(PT_CACHE)) return JSON.parse(fs.readFileSync(PT_CACHE, 'utf8'));
  if (!fs.existsSync(PT_DIR)) return [];
  const py = [
    'import fitz, json, glob, re, os, sys',
    'out=[]',
    "for f in sorted(glob.glob(os.path.join(sys.argv[1], 'sat-practice-test-*-digital.pdf'))):",
    "    d=fitz.open(f); t=' '.join(p.get_text() for p in d)",
    "    t=re.sub(r'Unauthorized copying or reuse of any part of this page is illegal\\.?',' ',t)",
    "    out.append({'file':os.path.basename(f),'text':t})",
    'print(json.dumps(out))',
  ].join('\n');
  const tmp = path.join(PT_DIR, '.extract_pt.py'); fs.writeFileSync(tmp, py);
  const res = JSON.parse(execSync(`python3 "${tmp}" "${PT_DIR}"`, { maxBuffer: 1e9 }).toString());
  fs.unlinkSync(tmp);
  fs.writeFileSync(PT_CACHE, JSON.stringify(res));
  return res;
}
export function corpora() {
  if (_C) return _C;
  const mathItems = [];
  const gram = new Map(); // 5-gram of math tokens → Set(item index)
  const numIdx = new Map(); // number → Set(item index)
  const cbm = JSON.parse(fs.readFileSync(path.join(GEN, 'cbEducatorQBank.json'), 'utf8')).items;
  for (const v of Object.values(cbm)) {
    const stemAlts = [...htmlAlts(v.stimulusHtml), ...htmlAlts(v.stemHtml)];
    const tokens = stemAlts.map(altToTokens);
    const choices = (v.answerOptions || []).map(o => htmlAlts(o.contentHtml).flatMap(altToTokens).join(' ') || String(o.contentPlain || '').toLowerCase().trim());
    const textOnly = (h) => String(h || '').replace(/<svg[\s\S]*?<\/svg>/g, ' ').replace(/<figure[\s\S]*?<\/figure>/g, ' ').replace(/<math[\s\S]*?<\/math>/g, ' ').replace(/<[^>]+>/g, ' ').replace(/&[a-z]+;/g, ' ');
    const plainNums = (textOnly(v.stimulusHtml) + ' ' + textOnly(v.stemHtml)).match(/\d[\d,]*(\.\d+)?/g) || []; // figure descriptions (axis ticks) carry no identity
    const nums = new Set([...tokens.flat().filter(isNum), ...plainNums.map(normNum), ...(v.answerOptions || []).flatMap(o => htmlAlts(o.contentHtml).flatMap(altToTokens).filter(isNum))]);
    const idx = mathItems.length;
    mathItems.push({ id: v.questionId, skill: v.skill, tokens, choices, nums, stem: v.stemPlain });
    for (const tk of tokens) for (let i = 0; i + 5 <= tk.length; i++) { const g = tk.slice(i, i + 5).join(' '); if (!gram.has(g)) gram.set(g, new Set()); gram.get(g).add(idx); }
    for (const n of nums) { if (!numIdx.has(n)) numIdx.set(n, new Set()); numIdx.get(n).add(idx); }
  }
  // prose sources: math stems (plain), R&W stimuli + choices, practice-test full text
  const sources = [];
  for (const v of Object.values(cbm)) sources.push({ id: `qbank-math ${v.questionId}`, text: `${v.stimulusPlain || ''} ${v.stemPlain || ''}` });
  const cbr = JSON.parse(fs.readFileSync(path.join(GEN, 'cbEducatorQBankRW.json'), 'utf8')).items;
  for (const v of Object.values(cbr)) sources.push({ id: `qbank-rw ${v.questionId}`, text: `${v.stimulusPlain || ''} ${(v.answerOptions || []).map(o => o.contentPlain).join(' ')}` });
  const pts = ptText();
  const shIdx = new Map(); const shCount = new Map();
  sources.forEach((s, k) => { for (const g of shingles(s.text)) { if (!shIdx.has(g)) shIdx.set(g, new Set()); shIdx.get(g).add(k); } });
  for (const [g, set] of shIdx) shCount.set(g, set.size);
  // practice tests: shingles keyed to the file (not counted toward stock: a test repeats its own directions)
  const ptSh = new Map();
  pts.forEach((p) => { for (const g of shingles(p.text)) { if (!ptSh.has(g)) ptSh.set(g, new Set()); ptSh.get(g).add(p.file); } });
  // directions/stock phrases repeated across practice tests are stock too
  for (const [g, files] of ptSh) if (files.size >= 3) shCount.set(g, Math.max(shCount.get(g) || 0, 2));
  // practice-test number windows
  const ptNums = pts.map(p => {
    const w = p.text.split(/\s+/); const pos = [];
    w.forEach((x, k) => { const m = x.match(/^\(?(-?\d[\d,]*(\.\d+)?)/); if (m) pos.push([k, normNum(m[1].replace(/^-/, ''))]); });
    return { file: p.file, pos };
  });
  _C = { mathItems, gram, numIdx, sources, shIdx, shCount, ptSh, ptNums };
  return _C;
}

// ─── math check ────────────────────────────────────────────────────────────
function longestRun(a, b) {
  let best = { len: 0, at: 0 }; const dp = new Array(b.length + 1).fill(0);
  for (let i = 1; i <= a.length; i++) {
    let prev = 0;
    for (let j = 1; j <= b.length; j++) {
      const tmp = dp[j];
      dp[j] = a[i - 1] === b[j - 1] ? prev + 1 : 0;
      if (dp[j] > best.len) best = { len: dp[j], at: i - dp[j] };
      prev = tmp;
    }
  }
  return best;
}
const TRIVIAL = new Set(['0', '1', '2']);
const MATH_PHRASE_FAIL = 5; // math stems are formulaic: 5+ non-stock 8-word runs with ONE official item = its sentence template, lifted
const RARE_DF = 12; // a number used by <= 12 of the 1,463 official math items
const nontrivial = (n) => !TRIVIAL.has(n);
/** item: { question, questionTable?, questionFormula?, choices?, correctAnswer? } (our authored/live shape) */
export function checkMath(item) {
  const C = corpora(); const fails = [], warns = [];
  const fields = [item.question, item.questionFormula, ...(item.questionTable ? [item.questionTable.headers, ...(item.questionTable.rows || [])].flat() : [])].filter(Boolean).map(String);
  const spans = fields.flatMap(mathSpans).map(latexToTokens).filter(t => t.length);
  const choiceTok = (item.choices || []).map(c => String(c.text).replace(/\\\$/g, ' ').replace(/\$([^$]+)\$/g, (_, m) => ` ${latexToTokens(m).join(' ')} `).toLowerCase().replace(/\s+/g, ' ').trim());
  const nums = new Set([
    ...spans.flat().filter(isNum), ...fields.flatMap(proseNumbers),
    ...(item.choices || []).flatMap(c => [...mathSpans(c.text).map(latexToTokens).flat().filter(isNum), ...proseNumbers(c.text)]),
    ...(item.choices ? [] : [normNum(String(item.correctAnswer || '').replace(/^-/, ''))].filter(isNum)),
  ].map(n => n.replace(/^-/, '')));
  // 1. equation runs
  const cand = new Map();
  for (const tk of spans) for (let i = 0; i + 5 <= tk.length; i++) { const g = tk.slice(i, i + 5).join(' '); for (const k of C.gram.get(g) || []) cand.set(k, (cand.get(k) || 0) + 1); }
  for (const k of cand.keys()) {
    const off = C.mathItems[k];
    for (const a of spans) for (const b of off.tokens) {
      const r = longestRun(a, b); if (r.len < 5) continue;
      const run = a.slice(r.at, r.at + r.len);
      const rn = run.filter((t, k) => isNum(t) && run[k - 1] !== '^'); // exponents are structure, not identity
      const hasOp = run.some(t => ['=', '+', '-', '*', '/', '<', '>'].includes(t));
      const hasVar = run.some((t, k) => /^[a-z]$/.test(t) && run[k + 1] !== '(');
      const wholeOfficial = r.len === b.length && b.length >= 6 && rn.length >= 2 && rn.some(nontrivial) && hasOp && hasVar;
      if (rn.length >= 3 && rn.filter(nontrivial).length >= 2 && hasOp) fails.push(`equation: "${run.join(' ')}" is shared with official item ${off.id} (${off.skill}) — change the numbers`);
      else if (wholeOfficial) fails.push(`equation: official item ${off.id}'s whole expression "${run.join(' ')}" appears in this item — change the numbers`);
      else if (r.len >= 7 && rn.length >= 2 && rn.some(nontrivial) && hasOp) warns.push(`equation: "${run.join(' ')}" also appears in official item ${off.id}`);
    }
  }
  // 2. numbers — only RARE numbers carry identity (df = how many official items use it; 3, 4, 10, 36 are everywhere)
  const mine = [...nums].filter(nontrivial);
  const rare = (n) => (C.numIdx.get(n)?.size || 0) <= RARE_DF;
  if (mine.length >= 3) {
    const tally = new Map();
    for (const n of mine) for (const k of C.numIdx.get(n) || []) tally.set(k, (tally.get(k) || 0) + 1);
    for (const [k, c] of tally) {
      if (c < 3) continue;
      const off = C.mathItems[k];
      const shared = mine.filter(n => off.nums.has(n)); const sr = shared.filter(rare);
      if ((sr.length >= 3 && shared.length >= 4) || (sr.length >= 2 && shared.length >= 5)) fails.push(`numbers: shares ${shared.join(', ')} (rare: ${sr.join(', ')}) with official item ${off.id} (${off.skill}) — retune the numbers`);
      else if (sr.length >= 2 && shared.length >= 3) warns.push(`numbers: shares ${shared.join(', ')} with official item ${off.id}`);
    }
  }
  // 3. choices — only IDENTIFYING choices count: an expression of 3+ tokens with a number, or a single rare number.
  //    Stock sets ("Zero / Exactly one / Exactly two / Infinitely many", "increasing linear / …") are format, not content.
  if (choiceTok.length === 4) {
    const ident = (t) => { const tk = t.split(' '); return (tk.length >= 3 && tk.some(isNum)) || (tk.length === 1 && isNum(tk[0]) && rare(tk[0].replace(/^-/, ''))); };
    const mineIdent = [...new Set(choiceTok.filter(ident))];
    if (mineIdent.length >= 3) for (const off of C.mathItems) {
      if (off.choices.length !== 4) continue;
      const set = new Set(off.choices.map(t => t.replace(/\s+/g, ' ').trim()));
      const same = mineIdent.filter(t => set.has(t));
      const expr = same.some(t => t.split(' ').length >= 3);
      if ((same.length >= 3 && expr) || same.length === 4) fails.push(`choices: ${same.length} answer choices equal official item ${off.id}'s (${same.join(' | ')})`);
      else if (same.length >= 3) warns.push(`choices: 3 numeric choices equal official item ${off.id}'s (${same.join(' | ')})`);
    }
  }
  // 4. practice-test PDFs: number window
  if (mine.length >= 4) {
    for (const p of C.ptNums) {
      const pos = p.pos; let lo = 0; const cnt = new Map(); let hit = null;
      const want = new Set(mine);
      for (let hi = 0; hi < pos.length; hi++) {
        if (want.has(pos[hi][1])) cnt.set(pos[hi][1], (cnt.get(pos[hi][1]) || 0) + 1);
        while (pos[hi][0] - pos[lo][0] > 80) { const n = pos[lo][1]; if (cnt.has(n)) { cnt.set(n, cnt.get(n) - 1); if (!cnt.get(n)) cnt.delete(n); } lo++; }
        if (cnt.size >= 4 && cnt.size >= 0.8 * mine.length && [...cnt.keys()].filter(rare).length >= 3) { hit = [...cnt.keys()]; break; }
      }
      if (hit) fails.push(`numbers: ${hit.join(', ')} appear together in ${p.file} — retune the numbers`);
    }
  }
  // 5. prose phrases
  const pr = checkProse(fields.join(' ') + ' ' + (item.choices || []).map(c => c.text).join(' '), { failAt: MATH_PHRASE_FAIL });
  fails.push(...pr.fails); warns.push(...pr.warns);
  return { fails: [...new Set(fails)], warns: [...new Set(warns)] };
}

/** text: any prose (an R&W passage + choices, a math stem) */
export function checkProse(text, { failAt = 2 } = {}) {
  const C = corpora(); const fails = [], warns = [];
  const all = [...shingles(text)]; const total = all.length;
  const mine = all.filter(g => (C.shCount.get(g) || 0) < 2);
  const bySrc = new Map();
  for (const g of mine) {
    for (const k of C.shIdx.get(g) || []) { const id = C.sources[k].id; if (!bySrc.has(id)) bySrc.set(id, []); bySrc.get(id).push(g); }
    for (const f of C.ptSh.get(g) || []) { if (!bySrc.has(f)) bySrc.set(f, []); bySrc.get(f).push(g); }
  }
  for (const [id, gs] of bySrc) {
    if (gs.length >= failAt && (failAt <= 2 || gs.length >= 0.5 * total)) fails.push(`phrase: ${gs.length} 8-word runs shared with ${id} (e.g. "${gs[0]}") — reword`);
    else warns.push(`phrase: one 8-word run shared with ${id} ("${gs[0]}")`);
  }
  return { fails, warns };
}

// ─── CLI ───────────────────────────────────────────────────────────────────
async function loadBundle(file) {
  const m = await import(pathToFileURL(file).href + `?t=${Date.now()}`);
  return m.default || Object.values(m).find(v => v && typeof v === 'object');
}
async function liveItems({ tests, drills, rw }) {
  const out = [];
  const T = path.join(ROOT, 'src', 'data', 'practiceTests');
  for (let n = 1; n <= 12; n++) {
    if (tests) {
      for (const [suf, mods] of [['', ['m1', 'm2']], ['M2Easy', ['m2easy']]]) {
        const d = await loadBundle(path.join(T, `practiceTest${n}${suf}.js`));
        const modules = d.modules || [d];
        modules.forEach((m, i) => m.questions.forEach(q => out.push({ kind: 'math', id: `test${n}-${mods[i]}-q${String(q.id).padStart(2, '0')}`, item: q })));
      }
    }
    if (rw) {
      for (const [suf, mods] of [['RW', ['m1', 'm2']], ['RWM2Easy', ['m2easy']]]) {
        const d = await loadBundle(path.join(T, `practiceTest${n}${suf}.js`));
        const modules = d.modules || [d];
        modules.forEach((m, i) => m.questions.forEach(q => out.push({ kind: 'rw', id: `test${n}-rw-${mods[i]}-${q.id}`, item: q })));
      }
    }
  }
  if (drills) {
    const B = path.join(ROOT, 'src', 'data', 'questions', 'bank');
    for (const f of ['algebra', 'advancedMath', 'problemSolving', 'geometry']) {
      const src = fs.readFileSync(path.join(B, `${f}.js`), 'utf8').replace(/^import.*$/mg, '').replace(/export const (\w+)\s*=/, 'module.exports =');
      const mod = { exports: null }; new Function('module', src)(mod);
      for (const q of mod.exports) out.push({ kind: 'math', id: q.id, item: q });
    }
    // topic drill files (served through the same drill routing)
    const Q = path.join(ROOT, 'src', 'data', 'questions');
    for (const f of ['circles', 'dimensionalAnalysis', 'equivalentExpressions', 'exponents', 'functions', 'linearEquations', 'percents', 'quadratics', 'radiansDegrees', 'statistics', 'systems', 'transformations', 'triangles', 'volume']) {
      const m = await import(pathToFileURL(path.join(Q, `${f}.js`)).href);
      const obj = Object.values(m).find(v => v && typeof v === 'object' && !Array.isArray(v)) || {};
      for (const [sec, list] of Object.entries(obj)) for (const q of list || []) out.push({ kind: 'math', id: `topic-${f}-${sec.replace(/\W+/g, '_')}-${q.id}`, item: q });
    }
  }
  if (rw) {
    // drill-only R&W reading items
    const m = await import(pathToFileURL(path.join(ROOT, 'src', 'data', 'questions', 'rwBank', 'authoredReadingItems.js')).href);
    for (const q of m.authoredReadingItems || []) out.push({ kind: 'rw', id: `rwfill-${q.id}`, item: q });
  }
  return out;
}
export function rwText(q) {
  const parts = [q.passage, ...(q.passages || []).map(p => p.text), ...(q.studentNotes?.bullets || []), ...(q.choices || []).map(c => c.text)];
  return parts.filter(Boolean).join(' ');
}
function selftest() {
  const ctl = [
    { want: 'fail', item: { question: 'If $2x + 3 = 9$, what is the value of $6x - 1$?' } },                                   // QBank fa80893a, verbatim
    { want: 'fail', item: { question: 'The function $f$ is defined by $f(x) = 25x + 30$. What is the value of $f(x)$ when $x = 2$?', choices: [{ id: 'A', text: '$50$' }, { id: 'B', text: '$57$' }, { id: 'C', text: '$80$' }, { id: 'D', text: '$110$' }] } },
    { want: 'fail', item: { question: 'Line $k$ is defined by $y = -\\frac{17}{3}x + 5$. Line $j$ is perpendicular to line $k$ in the $xy$-plane. What is the slope of line $j$?' } },
    { want: 'pass', item: { question: '$5x + 8 = 43$\nWhat value of $x$ is the solution to the given equation?', choices: [{ id: 'A', text: '$7$' }, { id: 'B', text: '$8.6$' }, { id: 'C', text: '$10.2$' }, { id: 'D', text: '$35$' }] } },
  ];
  let bad = 0;
  for (const c of ctl) {
    const r = checkMath(c.item); const got = r.fails.length ? 'fail' : 'pass';
    console.log(`${got === c.want ? 'ok  ' : 'BAD '} want ${c.want} got ${got}: ${c.item.question.slice(0, 60)}${r.fails.length ? '\n      ' + r.fails.join('\n      ') : ''}`);
    if (got !== c.want) bad++;
  }
  const rwc = checkProse('In 1977, legendary Puerto Rican performer Rita Moreno won an Emmy Award, making her one of the rare talents to earn the highest honors in television, music, film, and stage entertainment');
  console.log(`${rwc.fails.length ? 'ok  ' : 'BAD '} want fail got ${rwc.fails.length ? 'fail' : 'pass'}: verbatim QBank R&W passage`);
  if (!rwc.fails.length) bad++;
  if (bad) { console.error(`${bad} control(s) misbehaved`); process.exit(1); }
  console.log('selftest passed');
}
const isMain = process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (isMain) {
  const args = Object.fromEntries(process.argv.slice(3).map(a => { const m = a.match(/^--([\w-]+)(?:=(.*))?$/); return m ? [m[1], m[2] === undefined ? true : m[2]] : [a, true]; }));
  const cmd = process.argv[2];
  if (cmd === 'selftest') selftest();
  else if (cmd === 'probe') { const r = checkMath({ question: String(args.text || '') }); console.log(JSON.stringify(r, null, 1)); }
  else if (cmd === 'census') {
    const sel = { tests: !!args.tests, drills: !!args.drills, rw: !!args.rw };
    if (!sel.tests && !sel.drills && !sel.rw) Object.assign(sel, { tests: true, drills: true, rw: true });
    const items = await liveItems(sel); corpora();
    const report = []; let nf = 0, nw = 0;
    for (const x of items) {
      const r = x.kind === 'math' ? checkMath(x.item) : checkProse(rwText(x.item));
      if (r.fails.length || r.warns.length) report.push({ id: x.id, kind: x.kind, ...r });
      if (r.fails.length) { nf++; console.log(`FAIL ${x.id}: ${r.fails.join(' || ')}`); }
      if (r.warns.length) nw++;
    }
    console.log(`\n${items.length} items · ${nf} fail · ${nw} warn`);
    if (args.json) fs.writeFileSync(String(args.json), JSON.stringify(report, null, 1));
  } else { console.error('usage: census|probe|selftest'); process.exit(1); }
}
