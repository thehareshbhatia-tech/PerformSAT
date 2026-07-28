#!/usr/bin/env node
/**
 * buildTutorKnowledge.mjs — compile the SAT knowledge graph (knowledge/graph/**)
 * into a compact, tutor-injectable dataset keyed by College Board skill slug.
 *
 * For each CB skill we emit a short "expert brief": one mental-model line and the
 * top misconceptions (belief + how to detect it + how to fix it), distilled from
 * the graph nodes that serve that skill. The tutor injects the brief for the
 * current question's skill(s) so it can name ROOT CAUSES from our own taxonomy
 * even when a bank item's authored explanation is thin.
 *
 * Output: src/data/knowledge/tutorKnowledge.js  (generated — do not hand-edit).
 * Run:    node scripts/buildTutorKnowledge.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const GRAPH = path.join(ROOT, 'knowledge', 'graph');
const OUT = path.join(ROOT, 'src', 'data', 'knowledge', 'tutorKnowledge.js');

// ---- parse a node file into structured pieces -------------------------------
const delink = (s) => (s || '').replace(/\[\[([a-z0-9-]+)\]\]/g, (_, x) => x.replace(/-/g, ' '));
function firstSentence(s, max = 220) {
  const t = delink(s).replace(/\s+/g, ' ').trim();
  const m = t.match(/^.*?[.!?](?:\s|$)/);
  return (m ? m[0] : t).trim().slice(0, max);
}
// Lead text up to `max` chars, cut at the last full sentence that fits (unlike
// firstSentence, keeps MULTIPLE sentences — used where one sentence is too thin,
// e.g. teaching-notes tiers and mastery criteria).
function leadText(s, max = 230) {
  const t = delink(s).replace(/\*\*/g, '').replace(/\s+/g, ' ').trim();
  if (t.length <= max) return t;
  const head = t.slice(0, max);
  const cut = Math.max(head.lastIndexOf('. '), head.lastIndexOf('! '), head.lastIndexOf('? '));
  return cut > 60 ? head.slice(0, cut + 1) : head.trimEnd() + '…';
}
function section(body, name) {
  const re = new RegExp(`## ${name}\\s*\\n([\\s\\S]*?)(?:\\n## |\\n?$)`);
  const m = body.match(re);
  return m ? m[1] : '';
}
// The mental-model section states the ONE compact model, often as a **headline**
// followed by elaboration, sometimes as a lead-in before a bulleted procedure.
// Take the lead prose (drop list/numbered lines), then accumulate sentences until
// we have a substantive statement (short headlines like "Solve for x." get their
// following sentence appended).
function mentalModelOf(body) {
  const s = section(body, 'Mental model');
  const bold = s.match(/\*\*(.+?)\*\*/s);
  if (!bold) return '';
  const t = delink(bold[1]).replace(/\s+/g, ' ').trim();
  // keep only a clean, complete-sentence headline; skip terse labels / fragments
  if (t.length >= 25 && t.length <= 200 && /\s/.test(t) && /[.!?]$/.test(t)) return t;
  return '';
}
// Pull id-keyed bullets tolerant of every format the nodes use:
//   - **id** — text     - **id:** text     - **id signals:** text     - id: text
// Strategy: split into bullets, read the leading kebab token as the id, take the rest.
function keyedBullets(text) {
  const out = {};
  // '\n'+ so bullet #1 (no preceding newline after the header) is also a split boundary —
  // otherwise slice(1) drops it, silently losing each node's ROOT (lead) misconception.
  const bullets = ('\n' + text).split(/\n\s*-\s+/).slice(1);
  for (const raw of bullets) {
    const b = raw.replace(/\*\*/g, '').trim();               // strip bold markers
    const m = b.match(/^([a-z][a-z0-9-]{3,})\b\s*(?:signals)?\s*[:—-]\s*([\s\S]+)/);
    if (m && !out[m[1]]) out[m[1]] = m[2].replace(/\s+/g, ' ').trim();
  }
  return out;
}
// First bullet of a section as plain text, any leading "id:" / "id —" / "a / b:" key stripped.
// Positional fallback for detect/fix: some nodes key Diagnostic/Remediation bullets by an
// abbreviated id or write them as prose, so an exact misconception-id lookup misses. Sections
// are authored lead-misconception-first, so bullet #1 aligns with the lead misconception —
// which is exactly the one the brief renders (order[0]).
function firstBullet(text) {
  const t = '\n' + (text || '');
  // dash bullet first; fall back to a numbered-list item — some nodes author their
  // Diagnostic/Remediation sections as numbered process lists ("1. …/2. …"), and a
  // dash-only match would leave the lead misconception's cue empty (e.g. dropped-middle-term).
  let m = t.match(/\n\s*-\s+([\s\S]*?)(?=\n\s*-\s+|\n## |$)/);
  if (!m) m = t.match(/\n\s*\d+\.\s+([\s\S]*?)(?=\n\s*\d+\.\s+|\n## |$)/);
  if (!m) return '';
  let b = delink(m[1]).replace(/\*\*/g, '').replace(/\s+/g, ' ').trim();
  b = b.replace(/^[a-z][a-z0-9-]{3,}(?:\s*\/\s*[a-z][a-z0-9-]+)*\s*(?:signals)?\s*[:—-]\s+/i, '');
  return b.trim();
}
// The "Expert reasoning process" section leads with the highest-leverage moves —
// the actual how-an-expert-solves-it method. Distill its first 1-2 steps into
// compact lines (the tutor's "skillful" half, complementing the misconception map),
// stripped of wikilinks, bold, routing pointers, and unverified-claim flags.
function expertApproach(body) {
  const s = section(body, 'Expert reasoning process');
  if (!s) return [];
  // Prepend '\n' so the FIRST step (which has no preceding newline after the header)
  // is also a split boundary — otherwise slice(1) would silently drop step 1.
  let items = ('\n' + s).split(/\n\s*\d+\.\s+/).slice(1);        // numbered steps
  if (items.length === 0) items = ('\n' + s).split(/\n\s*-\s+/).slice(1); // fallback: bullets
  const steps = [];
  for (const raw of items) {
    if (steps.length >= 4) break;
    let step = delink(raw).replace(/\*\*/g, '').replace(/\s+/g, ' ').trim();
    step = step.replace(/\(\s*(?:un)?verified-claim[^)]*\)/gi, '')
               .replace(/\([^)]*owns the routing[^)]*\)/gi, '')
               .replace(/\s{2,}/g, ' ').trim();
    step = firstSentence(step, 190).trim();
    if (step.length > 15) steps.push(step);
  }
  return steps;
}
// Level-differentiated coaching lines from "## Teaching notes". Nodes author four
// tiers — Struggling / Average / Advanced / 1500+ — in two bold formats
// ("- **Struggling**: ..." and "- **Struggling:** ...") plus a merged
// "**Advanced / 1500+**" variant. Returns { s, a, v, x } (whichever tiers exist).
function teachingTiers(body) {
  const s = section(body, 'Teaching notes');
  if (!s) return null;
  const tiers = {};
  const KEY = { struggling: 's', average: 'a', advanced: 'v', '1500+': 'x' };
  const re = /\n\s*-\s+\*\*(Struggling|Average|Advanced\s*\/\s*1500\+|Advanced|1500\+)\s*(?:\*\*\s*[:—-]|[:—-]?\s*\*\*\s*[:—-]?)\s*([\s\S]*?)(?=\n\s*-\s+\*\*|\n## |$)/gi;
  for (const m of ('\n' + s).matchAll(re)) {
    const label = m[1].toLowerCase().replace(/\s+/g, ' ').trim();
    const text = leadText(m[2], 230);
    if (!text) continue;
    if (label.startsWith('advanced /')) { tiers.v ??= text; tiers.x ??= text; }
    else if (KEY[label] && !tiers[KEY[label]]) tiers[KEY[label]] = text;
  }
  return Object.keys(tiers).length ? tiers : null;
}
function parseNode(file) {
  const raw = fs.readFileSync(file, 'utf8');
  const fm = {};
  const fmM = raw.match(/^---\n([\s\S]*?)\n---/);
  if (fmM) for (const line of fmM[1].split('\n')) {
    const mm = line.match(/^(\w+):\s*(.*)$/);
    if (mm) fm[mm[1]] = mm[2].replace(/#.*$/, '').trim();
  }
  const body = raw.replace(/^---\n[\s\S]*?\n---\n/, '');
  const id = fm.id || path.basename(file, '.md');
  const skills = (fm.skill || '').replace(/[[\]]/g, '').split(',').map(s => s.trim()).filter(Boolean);
  const mentalModel = mentalModelOf(body);
  const misc = keyedBullets(section(body, 'Misconceptions'));
  const diagSec = section(body, 'Diagnostic indicators');
  const remSec = section(body, 'Remediation pathways');
  const diag = keyedBullets(diagSec);
  const rem = keyedBullets(remSec);
  const diagFirst = firstBullet(diagSec);   // positional fallback (lead misconception)
  const remFirst = firstBullet(remSec);
  // ordered misconception ids as they appear (authors lead with the root cause).
  // '\n'+ so the FIRST (root) misconception — which has no preceding newline — is captured.
  const order = [];
  const om = ('\n' + section(body, 'Misconceptions')).matchAll(/\n\s*-\s*\*\*([a-z0-9-]+)\*\*/g);
  for (const x of om) order.push(x[1]);
  const teach = teachingTiers(body);
  const mastery = leadText(section(body, 'Mastery criteria'), 200);
  return { id, domain: fm.domain, skills, mentalModel, approach: expertApproach(body), misc, diag, rem, diagFirst, remFirst, order, teach, mastery };
}

const nodes = {};
for (const sec of ['rw', 'math']) {
  for (const f of fs.readdirSync(path.join(GRAPH, sec)).filter(x => x.endsWith('.md'))) {
    const n = parseNode(path.join(GRAPH, sec, f));
    n.section = sec;
    nodes[n.id] = n;
  }
}

// ---- CB skill -> node ids ----------------------------------------------------
// RW: graph skill tokens map to CB-RW slugs with three spelling normalizations.
const RW_SKILL_NORMALIZE = {
  'central-ideas-details': 'central-ideas-and-details',
  'text-structure-purpose': 'text-structure-and-purpose',
  'form-structure-sense': 'form-structure-and-sense',
  // pass-throughs already match CB: inferences, command-of-evidence-textual,
  // command-of-evidence-quantitative, words-in-context, cross-text-connections,
  // boundaries, transitions, rhetorical-synthesis
};
const RW_CB_SLUGS = new Set([
  'central-ideas-and-details','inferences','command-of-evidence-textual',
  'command-of-evidence-quantitative','words-in-context','text-structure-and-purpose',
  'cross-text-connections','boundaries','form-structure-and-sense','transitions',
  'rhetorical-synthesis',
]);

// Math: curated CB-skill -> node ids (CB math skills are coarse; nodes are fine).
const MATH_MAP = {
  'linear-equations-one-variable': ['linear-equation-balance-peeling','formula-rearrangement','order-of-operations','fraction-operations','solve-for-the-asked-quantity','absolute-value-as-distance'],
  'linear-functions': ['slope-as-rate-of-change','interpret-linear-parameters','unit-anchored-interpretation','linear-model-four-slots','linearity-constant-rate-model'],
  'linear-equations-two-variables': ['linear-form-fluency','slope-as-rate-of-change','intercepts-as-anchors','line-from-known-facts','parallel-perpendicular-slopes','standard-form-combined-total'],
  'linear-systems': ['linear-system-method-selection','linear-system-solution-as-intersection','linear-system-solution-count','system-from-two-constraints','system-combination-target','system-parameter-tuning'],
  'linear-inequalities': ['inequality-direction-logic','inequality-regions-and-point-testing','inequality-translation-and-integer-bounds','compound-inequality-operations','absolute-value-as-distance'],
  'equivalent-expressions': ['cancellation-legality','binomial-product-templates','dropped-middle-term','coefficient-matching-identities','chunking-repeated-structure','exponent-rules-factor-counting','negative-fractional-exponents','radical-simplification-principal-root','expression-as-unit'],
  'nonlinear-equations': ['completing-square-quadratic-formula','quadratic-method-selection','sum-product-factoring','zeros-roots-factors-identity','discriminant-trichotomy','extraneous-solutions-non-reversible-moves','vieta-root-aggregates','line-parabola-intersections','common-base-exponent-equations'],
  'nonlinear-functions': ['function-as-io-machine','function-composition-chains','graph-as-io-pairs','shifts-input-vs-output-edits','inside-zero-anchor','vertex-by-symmetry','parabola-fast-feature-read','quadratic-form-conversion-triangle','zeros-roots-factors-identity','exponential-model-anatomy','growth-factor-vs-rate'],
  'ratios-rates-proportions': ['proportion-setup-template','ratio-part-whole-discipline','unit-cancellation-chain','unit-magnitude-sanity-check'],
  'percentages': ['percent-as-multiplier','percent-three-slots','successive-percent-rebasing','reverse-percent-recovery'],
  'one-variable-data': ['mean-as-total','median-as-position','spread-range-and-sd','distribution-shape-and-outlier-effects','box-plot-reading','data-display-decoding'],
  'two-variable-data': ['data-display-decoding','linear-vs-exponential-classification','exponential-model-anatomy','growth-factor-vs-rate'],
  'probability': ['probability-as-pool-share','two-way-table-probability'],
  'inference-margin-of-error': ['margin-of-error-interpretation','sample-to-population-estimation'],
  'statistical-claims': ['statistical-claim-legality','sampling-validity-two-dials'],
  'area-and-volume': ['scaling-laws-k-k2-k3','triangle-properties-toolkit','radians-and-arc-length'],
  'lines-angles-triangles': ['angle-chasing-ritual','parallel-lines-two-angle-families','triangle-angle-sum-and-exterior-shortcut','triangle-properties-toolkit','congruence-criteria-and-correspondence','similarity-as-scaling','similarity-configurations','pythagorean-theorem-and-triples','special-right-triangles'],
  'right-triangles-trig': ['soh-cah-toa-and-cofunction','special-right-triangles','pythagorean-theorem-and-triples','radians-and-arc-length'],
  'circles': ['radians-and-arc-length','pythagorean-theorem-and-triples','scaling-laws-k-k2-k3'],
};
// Cross-cutting math meta-skills appended (lightly) to every math skill.
const MATH_META = ['answer-the-asked-question','method-selection-by-answer-form','magnitude-sanity-checks'];

// build RW map from normalized skill frontmatter
const cbToNodes = {};
for (const n of Object.values(nodes)) {
  if (n.section !== 'rw') continue;
  for (const s of n.skills) {
    const cb = RW_SKILL_NORMALIZE[s] || s;
    if (!RW_CB_SLUGS.has(cb)) continue; // skip cross-links like cross-text-relationship-taxonomy
    (cbToNodes[cb] ||= []).push(n.id);
  }
}
for (const [cb, ids] of Object.entries(MATH_MAP)) cbToNodes[cb] = ids.slice();

// ---- assemble the compact brief per CB skill --------------------------------
const MAX_MODELS = 2, MAX_MISC = 8;
function clip(s, n) { s = (s || '').replace(/\s+/g, ' ').trim(); return s.length > n ? s.slice(0, n - 1).trimEnd() + '…' : s; }

const KNOWLEDGE = {};
for (const [cb, idsRaw] of Object.entries(cbToNodes)) {
  const isMath = cb in MATH_MAP;
  const ids = [...idsRaw, ...(isMath ? MATH_META : [])].filter(id => nodes[id]);
  // mental models: from the first (most central) nodes
  const models = [];
  for (const id of ids) { if (nodes[id].mentalModel) models.push(clip(nodes[id].mentalModel, 180)); if (models.length >= MAX_MODELS) break; }
  // misconceptions: pass 1 takes each node's ROOT misconception (breadth across the
  // skill's concepts); pass 2 goes back for the 2nd/3rd misconception of each node
  // (depth) until the cap. The positional diagFirst/remFirst fallback aligns only
  // with the ROOT, so depth-pass entries use exact-id detect/fix matches only.
  const seen = new Set(), misc = [];
  const addMisc = (n, mid, positionalOk) => {
    if (!mid || seen.has(mid) || misc.length >= MAX_MISC) return;
    const belief = clip(firstSentence(n.misc[mid] || '', 200), 180);
    if (!belief) return;
    seen.add(mid);
    const tell = clip(firstSentence(n.diag[mid] || (positionalOk ? n.diagFirst : '') || '', 160), 150);
    const fix = clip(firstSentence(n.rem[mid] || (positionalOk ? n.remFirst : '') || '', 160), 150);
    misc.push({ b: belief, t: tell, f: fix });
  };
  // Primary (skill-specific) nodes fill the map first — breadth then depth; the
  // cross-cutting META nodes only take leftover slots (their habits live in the
  // playbook now, so they must not crowd out real skill misconceptions).
  const primaryIds = idsRaw.filter(id => nodes[id]);
  for (const id of primaryIds) { addMisc(nodes[id], nodes[id].order[0], true); if (misc.length >= MAX_MISC) break; }
  depth: for (let rank = 1; rank <= 2; rank++) {
    for (const id of primaryIds) { addMisc(nodes[id], nodes[id].order[rank], false); if (misc.length >= MAX_MISC) break depth; }
  }
  for (const id of ids) { addMisc(nodes[id], nodes[id].order[0], true); if (misc.length >= MAX_MISC) break; }
  // expert method: the leading solve-steps from the central (first available) node —
  // the "how an expert works this" that complements the misconception map.
  let approach = [];
  for (const id of ids) { if (nodes[id].approach?.length) { approach = nodes[id].approach.slice(0, 4); break; } }
  // mastery criteria + level-differentiated teaching notes: from the first node
  // that carries them (the primary node for the skill, in practice).
  let mastery = '', teach = null;
  for (const id of ids) {
    if (!mastery && nodes[id].mastery) mastery = clip(nodes[id].mastery, 200);
    if (!teach && nodes[id].teach) teach = nodes[id].teach;
    if (mastery && teach) break;
  }
  KNOWLEDGE[cb] = { models, approach, misc, mastery, teach };
}

// ---- cross-cutting expert playbook (per section) -----------------------------
// The graph's Cross-cutting strategy nodes hold the authors' section-wide habits
// (triage, elimination discipline, Desmos judgment, sanity checks). None of them
// key to a single CB skill, so they never ride the per-skill briefs — they are
// emitted here as an always-on playbook the tutor injects once per conversation.
const PLAYBOOK_NODES = {
  math: ['answer-the-asked-question', 'method-selection-by-answer-form', 'magnitude-sanity-checks',
         'desmos-decision-framework', 'desmos-execution-playbook', 'error-proofing-protocol',
         'engineered-shortcut-recognition', 'expression-as-unit'],
  rw: ['question-first-reading-protocol', 'predict-then-verify', 'transition-category-system',
       'mechanics-shortcut-protocol', 'distractor-species-taxonomy',
       'polarity-first-elimination', 'context-window-discipline', 'test-writer-mental-model'],
};
const PLAYBOOK = { math: [], rw: [] };
for (const [sec, ids] of Object.entries(PLAYBOOK_NODES)) {
  for (const id of ids) {
    const n = nodes[id];
    if (!n) continue;
    // one line per habit: the vivid mental-model headline + the first expert move
    let line = n.mentalModel || '';
    const step = n.approach?.[0] || '';
    if (step && line.length + step.length < 290) line = line ? `${line} ${step}` : step;
    line = clip(line, 290);
    if (line) PLAYBOOK[sec].push(line);
  }
}

// ---- emit --------------------------------------------------------------------
const header = `/**
 * tutorKnowledge.js — GENERATED by scripts/buildTutorKnowledge.mjs. Do not hand-edit.
 *
 * Compact expert misconception briefs distilled from the SAT knowledge graph
 * (knowledge/graph/**), keyed by College Board skill slug. Consumed by
 * src/services/selectors/tutorKnowledgeContext.js to inject root-cause guidance
 * into the AI tutor's cached system prefix. Regenerate after graph edits.
 *
 * Shape: { [cbSkillSlug]: { models, approach, misc, mastery, teach } }
 *   models   = mental-model one-liners (the hook/metaphor)
 *   approach = expert solve-steps distilled from "Expert reasoning process" (the method)
 *   misc     = { b: belief/why, t: how to detect, f: how to fix } — roots first, then depth
 *   mastery  = what mastery of this skill looks like (from "Mastery criteria")
 *   teach    = level-differentiated coaching { s: struggling, a: average, v: advanced, x: 1500+ }
 *
 * EXPERT_PLAYBOOK: cross-cutting section-wide expert habits (triage, elimination,
 * Desmos judgment, sanity checks) — one array per section, injected once per
 * conversation by buildTutorPlaybookContext.
 */
export const TUTOR_KNOWLEDGE = ${JSON.stringify(KNOWLEDGE, null, 2)};

export const EXPERT_PLAYBOOK = ${JSON.stringify(PLAYBOOK, null, 2)};

export default TUTOR_KNOWLEDGE;
`;
fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, header);

const nMisc = Object.values(KNOWLEDGE).reduce((a, k) => a + k.misc.length, 0);
const nApproach = Object.values(KNOWLEDGE).reduce((a, k) => a + (k.approach?.length || 0), 0);
const bytes = Buffer.byteLength(header);
console.log(`wrote ${OUT}`);
console.log(`  CB skills covered: ${Object.keys(KNOWLEDGE).length}  (${Object.keys(cbToNodes).filter(k=>RW_CB_SLUGS.has(k)).length} RW + ${Object.keys(MATH_MAP).length} math)`);
console.log(`  misconception briefs: ${nMisc}   expert-method steps: ${nApproach}   file size: ${(bytes/1024).toFixed(1)}KB`);
console.log(`  playbook lines: math ${PLAYBOOK.math.length} / rw ${PLAYBOOK.rw.length}`);
const empties = Object.entries(KNOWLEDGE).filter(([, v]) => v.misc.length === 0).map(([k]) => k);
if (empties.length) console.log(`  WARN empty briefs: ${empties.join(', ')}`);
const noApproach = Object.entries(KNOWLEDGE).filter(([, v]) => !v.approach?.length).map(([k]) => k);
if (noApproach.length) console.log(`  WARN no expert-method: ${noApproach.join(', ')}`);
const noMastery = Object.entries(KNOWLEDGE).filter(([, v]) => !v.mastery).map(([k]) => k);
if (noMastery.length) console.log(`  WARN no mastery line: ${noMastery.join(', ')}`);
const noTeach = Object.entries(KNOWLEDGE).filter(([, v]) => !v.teach).map(([k]) => k);
if (noTeach.length) console.log(`  WARN no teaching tiers: ${noTeach.join(', ')}`);
