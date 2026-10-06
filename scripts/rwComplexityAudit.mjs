#!/usr/bin/env node
/**
 * R&W complexity audit: is each passage no harder to READ than College Board's
 * passages for the same skill and difficulty?
 *
 * Features (passage text = passage | both passages | student-note bullets):
 *   words   passage words
 *   wps     mean words per sentence
 *   hard    share of words with 3+ syllables (capitalized names excluded)
 *   longest longest sentence, in words
 *   choice  mean words per answer choice
 *
 * An item is flagged when wps, hard or longest exceeds the QBank p95 for its
 * skill × difficulty (with a small margin), or when two features both exceed p90.
 *
 * Usage:
 *   node scripts/rwComplexityAudit.mjs                 # summary per skill
 *   node scripts/rwComplexityAudit.mjs --json=out.json # per-item rows + flags
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import { rwSkillKey } from './registerGate.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const args = Object.fromEntries(process.argv.slice(2).map(a => { const m = a.match(/^--([\w-]+)(?:=(.*))?$/); return m ? [m[1], m[2] === undefined ? true : m[2]] : [a, true]; }));
const DIFF = { easy: 'E', medium: 'M', hard: 'H', E: 'E', M: 'M', H: 'H' };

const syllables = (w) => { const s = w.toLowerCase().replace(/[^a-z]/g, ''); if (s.length <= 3) return 1; const g = s.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '').replace(/^y/, '').match(/[aeiouy]{1,2}/g); return Math.max(1, g ? g.length : 1); };
function textFeatures(text) {
  const t = String(text || '').replace(/_{2,}/g, ' BLANK ').replace(/\s+/g, ' ').trim();
  const sents = t.split(/(?<=[.!?])\s+(?=[A-Z"“(])/).filter(s => /[a-zA-Z]/.test(s));
  const words = t.split(/\s+/).filter(w => /[a-zA-Z]/.test(w));
  const content = words.filter((w, i) => !(/^[A-Z]/.test(w) && i > 0 && !/[.!?]$/.test(words[i - 1] || '')));
  const hard = content.filter(w => syllables(w) >= 3).length;
  const lens = sents.map(s => s.split(/\s+/).filter(w => /[a-zA-Z]/.test(w)).length);
  return { words: words.length, wps: sents.length ? +(words.length / sents.length).toFixed(1) : 0, hard: content.length ? +(hard / content.length).toFixed(3) : 0, longest: Math.max(0, ...lens) };
}
const wc = (s) => String(s || '').split(/\s+/).filter(w => /[a-zA-Z0-9]/.test(w)).length;

// ─── QBank ──────────────────────────────────────────────────────────────────
const SKILL_SLUG = (label, hasTable) => {
  const l = label.toLowerCase();
  if (l.startsWith('command of evidence')) return hasTable ? 'command-of-evidence-quantitative' : 'command-of-evidence-textual';
  return l.replace(/,/g, '').replace(/\s+/g, '-');
};
function qbankRows() {
  const { items } = JSON.parse(fs.readFileSync(path.join(__dirname, 'generated/cbEducatorQBankRW.json'), 'utf8'));
  return Object.values(items).map(v => {
    const hasTable = /<table|<figure|<svg/.test(v.stimulusHtml || '');
    const stim = String(v.stimulusHtml || '').replace(/<table[\s\S]*?<\/table>/g, ' ').replace(/<figure[\s\S]*?<\/figure>/g, ' ').replace(/<svg[\s\S]*?<\/svg>/g, ' ').replace(/<\/(p|li)>/g, '. ').replace(/<[^>]+>/g, ' ').replace(/&[a-z]+;/g, ' ').replace(/\.\s*\./g, '.');
    const choices = (v.answerOptions || []).map(o => o.contentPlain || '');
    return { id: v.questionId, skill: SKILL_SLUG(v.skill, hasTable), diff: v.difficulty, f: { ...textFeatures(stim), choice: choices.length ? +(choices.reduce((a, c) => a + wc(c), 0) / choices.length).toFixed(1) : 0 } };
  });
}

// ─── Ours ───────────────────────────────────────────────────────────────────
const passageOf = (q) => q.passage || (q.passages || []).map(p => p.text).join(' ') || (q.studentNotes?.bullets || []).join('. ');
function rowFor(id, q) {
  const choices = (q.choices || []).map(c => c.text || '');
  return { id, skill: rwSkillKey(q), diff: DIFF[q.difficulty] || null, f: { ...textFeatures(passageOf(q)), choice: choices.length ? +(choices.reduce((a, c) => a + wc(c), 0) / choices.length).toFixed(1) : 0 } };
}
async function ourRows() {
  const out = [];
  const T = path.join(ROOT, 'src/data/practiceTests');
  for (let n = 1; n <= 12; n++) for (const [suf, mods] of [['RW', ['m1', 'm2']], ['RWM2Easy', ['m2easy']]]) {
    const m = await import(pathToFileURL(path.join(T, `practiceTest${n}${suf}.js`)).href);
    const d = m.default || Object.values(m).find(v => v && typeof v === 'object');
    (d.modules || [d]).forEach((mm, i) => mm.questions.forEach(q => out.push(rowFor(`test${n}-rw-${mods[i]}-${q.id}`, q))));
  }
  const m = await import(pathToFileURL(path.join(ROOT, 'src/data/questions/rwBank/authoredReadingItems.js')).href);
  for (const q of m.authoredReadingItems || []) out.push(rowFor(`rwfill-${q.id}`, q));
  return out;
}

const pct = (arr, p) => { if (!arr.length) return null; const s = [...arr].sort((a, b) => a - b); return s[Math.min(s.length - 1, Math.floor(p * (s.length - 1)))]; };
const FEATS = ['words', 'wps', 'hard', 'longest', 'choice'];
const qb = qbankRows();
const norms = {};
for (const r of qb) for (const key of [`${r.skill}|${r.diff}`, `${r.skill}|*`]) (norms[key] = norms[key] || []).push(r);
const stat = {};
for (const [k, rs] of Object.entries(norms)) { stat[k] = { n: rs.length }; for (const ft of FEATS) { const v = rs.map(r => r.f[ft]); stat[k][ft] = { p50: pct(v, 0.5), p90: pct(v, 0.9), p95: pct(v, 0.95) }; } }
const MARGIN = { wps: 3, hard: 0.04, longest: 6 };
const ours = (await ourRows()).map(r => {
  const key = stat[`${r.skill}|${r.diff}`]?.n >= 10 ? `${r.skill}|${r.diff}` : `${r.skill}|*`;
  const S = stat[key]; const flags = [];
  if (S) {
    for (const ft of Object.keys(MARGIN)) if (r.f[ft] > S[ft].p95 + MARGIN[ft]) flags.push(`${ft} ${r.f[ft]} > CB p95 ${S[ft].p95}`);
    const over90 = ['wps', 'hard', 'longest', 'choice'].filter(ft => r.f[ft] > S[ft].p90);
    if (!flags.length && over90.length >= 2) flags.push(`denser than CB p90 on ${over90.map(ft => `${ft} ${r.f[ft]} (p90 ${S[ft].p90})`).join(', ')}`);
  }
  return { ...r, key, flags };
});
console.log(`QBank R&W rows ${qb.length} · our R&W items ${ours.length} · flagged ${ours.filter(r => r.flags.length).length}`);
const skills = [...new Set(ours.map(r => r.skill))].sort();
for (const s of skills) {
  const o = ours.filter(r => r.skill === s); const S = stat[`${s}|*`];
  if (!S) { console.log(`  ${s}: no CB norm`); continue; }
  console.log(`  ${s.padEnd(34)} n=${String(o.length).padStart(3)} flagged ${String(o.filter(r => r.flags.length).length).padStart(2)} · median ours/CB  wps ${pct(o.map(r => r.f.wps), .5)}/${S.wps.p50}  hard ${pct(o.map(r => r.f.hard), .5)}/${S.hard.p50}  longest ${pct(o.map(r => r.f.longest), .5)}/${S.longest.p50}  choice ${pct(o.map(r => r.f.choice), .5)}/${S.choice.p50}`);
}
if (args.json) { fs.writeFileSync(args.json, JSON.stringify(ours, null, 1)); console.log(`wrote ${args.json}`); }
