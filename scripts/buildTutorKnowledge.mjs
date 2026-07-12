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
  const bullets = text.split(/\n\s*-\s+/).slice(1); // drop preamble before first bullet
  for (const raw of bullets) {
    const b = raw.replace(/\*\*/g, '').trim();               // strip bold markers
    const m = b.match(/^([a-z][a-z0-9-]{3,})\b\s*(?:signals)?\s*[:—-]\s*([\s\S]+)/);
    if (m && !out[m[1]]) out[m[1]] = m[2].replace(/\s+/g, ' ').trim();
  }
  return out;
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
  const diag = keyedBullets(section(body, 'Diagnostic indicators'));
  const rem = keyedBullets(section(body, 'Remediation pathways'));
  // ordered misconception ids as they appear (authors lead with the root cause)
  const order = [];
  const om = section(body, 'Misconceptions').matchAll(/\n\s*-\s*\*\*([a-z0-9-]+)\*\*/g);
  for (const x of om) order.push(x[1]);
  return { id, domain: fm.domain, skills, mentalModel, misc, diag, rem, order };
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
const MAX_MODELS = 2, MAX_MISC = 4;
function clip(s, n) { s = (s || '').replace(/\s+/g, ' ').trim(); return s.length > n ? s.slice(0, n - 1).trimEnd() + '…' : s; }

const KNOWLEDGE = {};
for (const [cb, idsRaw] of Object.entries(cbToNodes)) {
  const isMath = cb in MATH_MAP;
  const ids = [...idsRaw, ...(isMath ? MATH_META : [])].filter(id => nodes[id]);
  // mental models: from the first (most central) nodes
  const models = [];
  for (const id of ids) { if (nodes[id].mentalModel) models.push(clip(nodes[id].mentalModel, 180)); if (models.length >= MAX_MODELS) break; }
  // misconceptions: the leading (root) misconception of each node, in map order, deduped
  const seen = new Set(), misc = [];
  for (const id of ids) {
    const n = nodes[id];
    const mid = n.order[0];
    if (!mid || seen.has(mid)) continue;
    seen.add(mid);
    const belief = clip(firstSentence(n.misc[mid] || '', 200), 180);
    const tell = clip(firstSentence(n.diag[mid] || '', 160), 150);
    const fix = clip(firstSentence(n.rem[mid] || '', 160), 150);
    if (belief) misc.push({ b: belief, t: tell, f: fix });
    if (misc.length >= MAX_MISC) break;
  }
  KNOWLEDGE[cb] = { models, misc };
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
 * Shape: { [cbSkillSlug]: { models: string[], misc: [{ b, t, f }] } }
 *   models = mental-model one-liners; misc = { b: belief/why, t: how to detect, f: how to fix }
 */
export const TUTOR_KNOWLEDGE = ${JSON.stringify(KNOWLEDGE, null, 2)};

export default TUTOR_KNOWLEDGE;
`;
fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, header);

const nMisc = Object.values(KNOWLEDGE).reduce((a, k) => a + k.misc.length, 0);
const bytes = Buffer.byteLength(header);
console.log(`wrote ${OUT}`);
console.log(`  CB skills covered: ${Object.keys(KNOWLEDGE).length}  (${Object.keys(cbToNodes).filter(k=>RW_CB_SLUGS.has(k)).length} RW + ${Object.keys(MATH_MAP).length} math)`);
console.log(`  misconception briefs: ${nMisc}   file size: ${(bytes/1024).toFixed(1)}KB`);
const empties = Object.entries(KNOWLEDGE).filter(([, v]) => v.misc.length === 0).map(([k]) => k);
if (empties.length) console.log(`  WARN empty briefs: ${empties.join(', ')}`);
