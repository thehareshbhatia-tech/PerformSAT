#!/usr/bin/env node
/**
 * registerGate.mjs — does a math item READ like a College Board item? (register v3, 2026-10-04)
 *
 * Measured on the Educator Question Bank (1,303 no-figure math items, prose words with math masked):
 *   median E19 / M23 / H28 · 42% ≤ 20 words · 27% open with the equation · 20% > 45 words ·
 *   62% close on a stock question (a final-sentence opener CB uses 3+ times).
 * SEVA's 2026-09 tests measured E31/M33/H36 · 4% ≤ 20 · 1% equation-first · 26% stock. The v2 spec
 * targeted E32/M40/H49 — that target, plus a wording-freshness gate that punished stock phrasing,
 * produced the drift. docs/TEST_REGISTER_V3_SPEC.md is the authoring side of this file.
 *
 * Item level (registerItem):   FAIL hint/definition sentences, non-CB phrasings, stems over the hard cap.
 *                              WARN story wrapper on a pure-math skill, over the soft cap.
 * Module level (registerModule): FAIL when a module's distribution is off the official one
 *                              (share ≤ 20 words, equation-first share, median band, stock-close share).
 *
 *   node scripts/registerGate.mjs census [--tests] [--drills]     # report live content
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const GEN = path.join(ROOT, 'scripts', 'generated');

/** prose words with $…$ math masked out (money \$ is prose) */
export const proseWords = (s) => String(s || '').replace(/\\\$/g, 'S').replace(/\$[^$]*\$/g, ' M ').split(/\s+/).filter(w => /[a-zA-Z]/.test(w) && w !== 'M').length;
export const opensWithMath = (s) => /^\s*\$/.test(String(s || ''));

// ─── stock closing questions, mined from the official bank ─────────────────
const normQ = (s) => String(s).replace(/\\\$/g, 'S').replace(/\*\{[^}]*\}/g, '').replace(/\[[^\]]*\]/g, 'M').replace(/\$[^$]*\$/g, 'M').replace(/\s+/g, ' ').replace(/ ([?,.])/g, '$1').replace(/ -(?=[a-z])/g, '-').trim();
const lastSentence = (s) => { const ss = normQ(s).split(/(?<=[.?])\s+(?=[A-Z])/); return ss[ss.length - 1] || ''; };
export const frameOf = (s) => lastSentence(s).replace(/\b\d+(\.\d+)?\b/g, 'N').split(' ').slice(0, 6).join(' ');
let _frames = null;
export function stockFrames() {
  if (_frames) return _frames;
  const items = Object.values(JSON.parse(fs.readFileSync(path.join(GEN, 'cbEducatorQBank.json'), 'utf8')).items);
  const m = new Map(); for (const v of items) { const f = frameOf(v.stemPlain || ''); m.set(f, (m.get(f) || 0) + 1); }
  _frames = new Set([...m].filter(([, c]) => c >= 3).map(([f]) => f));
  return _frames;
}

// ─── item rules ────────────────────────────────────────────────────────────
// Official medians E19/M23/H28. Soft cap = where an official item of that difficulty is already unusual
// (~80th percentile); hard cap = beyond what the official bank does at all without a figure/table.
export const CAPS = { easy: { soft: 32, hard: 55 }, medium: { soft: 38, hard: 62 }, hard: { soft: 45, hard: 70 } };
const BANNED = [
  [/\b(Note|Recall|Remember) that\b/i, 'a "note/recall that" sentence teaches inside the stem — College Board never does'],
  [/\b(is|are) called\b/i, 'the stem defines a term ("…is called…") — College Board assumes the term'],
  [/\bis defined as\b/i, '"is defined as" defines a term — use "The function f is defined by …" or drop the definition'],
  [/(^|[.?]\s+)Because\b/, 'a "Because …" clause gives away a step of the solution'],
  [/\b(so|which means|this means) that\b.*\b(angle|right angle|parallel|perpendicular)\b/i, 'the stem states a conclusion the student should reach'],
  [/\bEach (choice|option) below\b|\bWhich of those\b|\bthe choices below\b/i, 'refers to the choices in a way College Board does not ("Each choice below…")'],
  [/\b(meets|satisfies) (both|all) (of )?(the |these )?(requirements|conditions)\b|\bthe following (requirements|conditions)\b/i, 'requirement-list phrasing — state the condition directly ("If the equation has two distinct real solutions, …")'],
  [/\bhorizontal axis\b|\bvertical axis\b/i, 'College Board says "x-axis" / "y-axis"'],
  [/\bThe table (gives|lists|summarizes|records|reports|displays)\b/, 'College Board writes "The table shows"'],
  [/\b(graph|figure|table|diagram) (above|below)\b/i, 'College Board writes "the graph shown" / "the table shows", never above/below'],
  [/\bHint\b|\bTip\b/, 'no hints in a stem'],
  [/\bsmallest positive integer value of [a-z$\\{}]+ that\b/i, 'write "the least possible value of …"'],
];
// pure-math skills: a story here is decoration (CB states these bare); contexts belong to modeling/interpretation skills
const PURE_SKILLS = new Set(['Equivalent expressions', 'Nonlinear equations in one variable and systems of equations in two variables', 'Circles', 'Linear equations in one variable', 'Systems of two linear equations in two variables', 'Right triangles and trigonometry', 'Lines, angles, and triangles']);
const STORY_RE = /\b(engineer|technician|analyst|ecologist|scientist|researcher|designer|planner|architect|biologist|chemist|surveyor|programmer|manager|contractor|official|crew|laboratory|lab|company|factory|plant|club|team|shop|store|farm|museum|agency|program)\b/i;

/**
 * registerItem — register errors/warnings for one math item.
 * @param {object} q  item: { question, diagram?, questionTable?, choices? }
 * @param {{difficulty:'easy'|'medium'|'hard', cbSkillLabel?:string}} meta
 * @returns {{errs:string[], warns:string[], words:number, eqFirst:boolean, stock:boolean}}
 */
export function registerItem(q, meta = {}) {
  const errs = [], warns = [];
  const stem = String(q.question || '');
  const words = proseWords(stem); const fig = !!(q.diagram || q.questionTable);
  const cap = CAPS[meta.difficulty] || CAPS.medium;
  for (const [re, why] of BANNED) if (re.test(stem)) errs.push(`register: ${why}`);
  if (!fig && words > cap.hard) errs.push(`register: ${words} prose words — over the ${meta.difficulty} cap of ${cap.hard} (official median ${{ easy: 19, medium: 23, hard: 28 }[meta.difficulty] || 23}); cut the setup`);
  else if (!fig && words > cap.soft) warns.push(`register: ${words} prose words (soft cap ${cap.soft}) — fine for a real word problem, otherwise trim`);
  if (meta.cbSkillLabel && PURE_SKILLS.has(meta.cbSkillLabel) && STORY_RE.test(stem) && !fig) warns.push(`register: a story ("${stem.match(STORY_RE)[0]}") on a pure-math skill (${meta.cbSkillLabel}) — College Board usually states these bare`);
  for (const c of q.choices || []) if (proseWords(c.text) > 30) warns.push(`register: choice ${c.id} is ${proseWords(c.text)} words`);
  return { errs, warns, words, eqFirst: opensWithMath(stem), stock: stockFrames().has(frameOf(stem)), fig };
}

/**
 * registerModule — distribution check for one module (22 items) or a drill chunk.
 * Targets are the official shares with slack for a 22-item sample.
 * @param {Array<{q:object, difficulty:string}>} rows
 */
export const MODULE_TARGETS = { short: 0.30, eqFirst: 0.18, stock: 0.45, median: { easy: [12, 26], medium: [15, 30], hard: [18, 35] } };
export function registerModule(rows, { label = 'module', strict = true } = {}) {
  const errs = [], info = {};
  const r = rows.map(x => ({ ...registerItem(x.q, x), difficulty: x.difficulty }));
  const noFig = r.filter(x => !x.fig);
  const share = (f) => noFig.length ? noFig.filter(f).length / noFig.length : 1;
  info.short = share(x => x.words <= 20); info.eqFirst = r.length ? r.filter(x => x.eqFirst).length / r.length : 1; info.stock = r.length ? r.filter(x => x.stock).length / r.length : 1;
  const med = (a) => { const b = [...a].sort((x, y) => x - y); return b.length ? b[Math.floor(b.length / 2)] : null; };
  info.median = {};
  for (const d of ['easy', 'medium', 'hard']) { const xs = noFig.filter(x => x.difficulty === d).map(x => x.words); info.median[d] = med(xs); if (strict && xs.length >= 3) { const [lo, hi] = MODULE_TARGETS.median[d]; if (info.median[d] > hi) errs.push(`${label}: ${d} median ${info.median[d]} prose words > ${hi} (official ${{ easy: 19, medium: 23, hard: 28 }[d]})`); } }
  const pct = (x) => `${Math.round(x * 100)}%`;
  if (strict) {
    if (info.short < MODULE_TARGETS.short) errs.push(`${label}: only ${pct(info.short)} of no-figure stems are ≤ 20 words (official 42%, need ≥ ${pct(MODULE_TARGETS.short)})`);
    if (info.eqFirst < MODULE_TARGETS.eqFirst) errs.push(`${label}: only ${pct(info.eqFirst)} of stems open with the equation (official 27%, need ≥ ${pct(MODULE_TARGETS.eqFirst)})`);
    if (info.stock < MODULE_TARGETS.stock) errs.push(`${label}: only ${pct(info.stock)} close on a stock College Board question (official 62%, need ≥ ${pct(MODULE_TARGETS.stock)})`);
  }
  return { errs, info };
}

// ─── CLI census ────────────────────────────────────────────────────────────
const isMain = process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (isMain && process.argv[2] === 'census') {
  const T = path.join(ROOT, 'src', 'data', 'practiceTests');
  let itemErrs = 0, modErrs = 0; const all = [];
  for (let n = 1; n <= 12; n++) for (const [suf, mods] of [['', ['m1', 'm2']], ['M2Easy', ['m2easy']]]) {
    const m = await import(pathToFileURL(path.join(T, `practiceTest${n}${suf}.js`)).href); const d = m.default || Object.values(m)[0];
    (d.modules || [d]).forEach((mm, i) => {
      const rows = mm.questions.map(q => ({ q, difficulty: q.difficulty })); all.push(...rows);
      rows.forEach(x => { const r = registerItem(x.q, x); itemErrs += r.errs.length; });
      const r = registerModule(rows, { label: `test${n}-${mods[i]}` }); modErrs += r.errs.length;
      console.log(`test${n}-${mods[i]}: short ${Math.round(r.info.short * 100)}% · eqFirst ${Math.round(r.info.eqFirst * 100)}% · stock ${Math.round(r.info.stock * 100)}% · medians E${r.info.median.easy}/M${r.info.median.medium}/H${r.info.median.hard} · ${r.errs.length} module fails`);
    });
  }
  console.log(`\nitem-level register fails: ${itemErrs} · module-level fails: ${modErrs}`);
}

// ─── R&W register (2026-10-04) ─────────────────────────────────────────────
// Official passage lengths (words) per skill from the Educator Question Bank R&W cache: p50 / p90.
// Rhetorical Synthesis counts the bullets only (CB's stimulus adds the 12-word intro line).
export const RW_LEN = {
  'words-in-context': [54, 71], 'text-structure-and-purpose': [91, 123], 'cross-text-connections': [142, 160],
  'central-ideas-and-details': [89, 119], 'command-of-evidence-textual': [107, 140], 'command-of-evidence-quantitative': [80, 130],
  inferences: [101, 120], boundaries: [47, 59], 'form-structure-and-sense': [45, 58], transitions: [55, 65], 'rhetorical-synthesis': [68, 87],
};
export const RW_CHOICE_P90 = { 'central-ideas-and-details': 30, inferences: 27, 'text-structure-and-purpose': 25, 'cross-text-connections': 30, 'command-of-evidence-textual': 36, 'command-of-evidence-quantitative': 36, 'rhetorical-synthesis': 28 };
const rwWords = (s) => String(s || '').split(/\s+/).filter(w => /[a-zA-Z0-9]/.test(w)).length;
export const rwSkillKey = (q) => { const s = String(q.skill || ''); if (/evidence/.test(s)) return q.questionTable ? 'command-of-evidence-quantitative' : 'command-of-evidence-textual'; if (/form-structure|structure-and-sense/.test(s) && s !== 'text-structure-and-purpose') return 'form-structure-and-sense'; return s; };
export const rwPassageWords = (q) => q.passage ? rwWords(q.passage) : q.passages ? q.passages.reduce((n, p) => n + rwWords(p.text), 0) : q.studentNotes ? q.studentNotes.bullets.reduce((n, b) => n + rwWords(b), 0) : 0;
/** rwRegisterItem — passage/choice length against the official distribution for the skill */
export function rwRegisterItem(q) {
  const errs = [], warns = []; const k = rwSkillKey(q); const L = RW_LEN[k]; const w = rwPassageWords(q);
  if (L) { if (w > Math.round(L[1] * 1.05)) errs.push(`register: passage ${w} words — over the official ${k} p90 of ${L[1]} (median ${L[0]}); trim`); else if (w > Math.round(L[0] * 1.15)) warns.push(`register: passage ${w} words (official median ${L[0]})`); }
  const cp = RW_CHOICE_P90[k]; if (cp) for (const c of q.choices || []) if (rwWords(c.text) > cp) warns.push(`register: choice ${c.id} ${rwWords(c.text)} words (official p90 ${cp})`);
  return { errs, warns, words: w, skill: k };
}
if (isMain && process.argv[2] === 'rwcensus') {
  const T = path.join(ROOT, 'src', 'data', 'practiceTests'); const by = {}; let over = 0, n = 0;
  for (let t = 1; t <= 12; t++) for (const suf of ['RW', 'RWM2Easy']) {
    const m = await import(pathToFileURL(path.join(T, `practiceTest${t}${suf}.js`)).href); const d = m.default || Object.values(m)[0];
    for (const mm of d.modules || [d]) for (const q of mm.questions) { const r = rwRegisterItem(q); n++; if (r.errs.length) over++; (by[r.skill] = by[r.skill] || []).push(r.words); }
  }
  const med = (a) => { const b = [...a].sort((x, y) => x - y); return b[Math.floor(b.length / 2)]; };
  for (const [k, ws] of Object.entries(by)) console.log(`${k.padEnd(34)} n=${String(ws.length).padStart(3)} median ${med(ws)} (official ${RW_LEN[k]?.[0]}) · over p90: ${ws.filter(w => RW_LEN[k] && w > Math.round(RW_LEN[k][1] * 1.05)).length}`);
  console.log(`\n${over} of ${n} R&W items over the official p90 for their skill`);
}
