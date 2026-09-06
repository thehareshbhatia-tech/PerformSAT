#!/usr/bin/env node
/**
 * recreateBank.mjs — orchestrator for the drill-bank recreation
 * (docs/BANK_RECREATION_SPEC.md). Mirrors the test-recreation pipeline:
 * authored JSON per item → gates → splice into the live source file.
 *
 * Sources: the 4 hand-authored math shards (src/data/questions/bank/*.js)
 * and the 14 topic files (src/data/questions/{topic}.js). Every item keeps its
 * id + routing metadata (skills, difficulty, type, SAT Pattern header,
 * sourceStyleRef, …); only the student-facing content is replaced.
 *
 * Usage:
 *   node scripts/recreateBank.mjs manifest [--all | --source=algebra]
 *   node scripts/recreateBank.mjs check    --chunk=algebra-01 | --source=X | --all
 *   node scripts/recreateBank.mjs assemble --source=X | --all   [--dry]
 *   node scripts/recreateBank.mjs verify   --source=X | --all
 *   node scripts/recreateBank.mjs status
 *   node scripts/recreateBank.mjs solvesheet --chunk=algebra-01
 *
 * Authored JSON lives at scripts/generated/authored/bank/{source}/{fileId}.json
 * (committed). Manifests + chunks at scripts/generated/bankRecreation/ (gitignored).
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import { indexCorpus, checkUniquenessSliding, tokenize } from './calibrateModule.mjs';
import { CB_MATH_SKILLS, PATTERN_TO_CB_SKILL } from '../src/data/questions/cbSkillTaxonomy.js';
import { extractSatPattern } from '../src/data/questions/extractSatPattern.js';

const CB_LABEL = new Map(CB_MATH_SKILLS.map(s => [s.slug, s.label]));
function cbSkillOf(q) {
  const slug = extractSatPattern(q.explanation);
  const cb = slug ? PATTERN_TO_CB_SKILL[slug] : null;
  return cb ? { cbSkillSlug: cb, cbSkillLabel: CB_LABEL.get(cb) || cb, patternSlug: slug } : { cbSkillSlug: null, cbSkillLabel: null, patternSlug: slug };
}

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const GEN = path.join(ROOT, 'scripts', 'generated');
const AUTHORED = path.join(GEN, 'authored', 'bank');
const WORK = path.join(GEN, 'bankRecreation');
const CHUNK_SIZE = 60;

const TOPIC_DOMAIN = {
  'linear-equations': 'algebra', systems: 'algebra', functions: 'algebra', 'equivalent-expressions': 'algebra',
  quadratics: 'advanced-math', exponents: 'advanced-math', transformations: 'advanced-math',
  percents: 'problem-solving', 'dimensional-analysis': 'problem-solving', statistics: 'problem-solving',
  circles: 'geometry', triangles: 'geometry', volume: 'geometry', 'radians-degrees': 'geometry',
};

export const SOURCES = {
  algebra:        { kind: 'shard', file: 'src/data/questions/bank/algebra.js',        exportName: 'algebraBank' },
  problemSolving: { kind: 'shard', file: 'src/data/questions/bank/problemSolving.js', exportName: 'problemSolvingBank' },
  advancedMath:   { kind: 'shard', file: 'src/data/questions/bank/advancedMath.js',   exportName: 'advancedMathBank' },
  geometry:       { kind: 'shard', file: 'src/data/questions/bank/geometry.js',       exportName: 'geometryBank' },
  'linear-equations':       { kind: 'topic', file: 'src/data/questions/linearEquations.js',       exportName: 'linearEquationsQuestions' },
  circles:                  { kind: 'topic', file: 'src/data/questions/circles.js',               exportName: 'circlesQuestions' },
  'dimensional-analysis':   { kind: 'topic', file: 'src/data/questions/dimensionalAnalysis.js',   exportName: 'dimensionalAnalysisQuestions' },
  'equivalent-expressions': { kind: 'topic', file: 'src/data/questions/equivalentExpressions.js', exportName: 'equivalentExpressionsQuestions' },
  exponents:                { kind: 'topic', file: 'src/data/questions/exponents.js',             exportName: 'exponentsQuestions' },
  functions:                { kind: 'topic', file: 'src/data/questions/functions.js',             exportName: 'functionsQuestions' },
  percents:                 { kind: 'topic', file: 'src/data/questions/percents.js',              exportName: 'percentsQuestions' },
  quadratics:               { kind: 'topic', file: 'src/data/questions/quadratics.js',            exportName: 'quadraticsQuestions' },
  'radians-degrees':        { kind: 'topic', file: 'src/data/questions/radiansDegrees.js',        exportName: 'radiansDegreesQuestions' },
  statistics:               { kind: 'topic', file: 'src/data/questions/statistics.js',            exportName: 'statisticsQuestions' },
  systems:                  { kind: 'topic', file: 'src/data/questions/systems.js',               exportName: 'systemsQuestions' },
  transformations:          { kind: 'topic', file: 'src/data/questions/transformations.js',       exportName: 'transformationsQuestions' },
  triangles:                { kind: 'topic', file: 'src/data/questions/triangles.js',             exportName: 'trianglesQuestions' },
  volume:                   { kind: 'topic', file: 'src/data/questions/volume.js',                exportName: 'volumeQuestions' },
};

const SUPPORTED_DIAGRAM_TYPES = new Set([
  'rationalFunction', 'quadraticVertex', 'quadratic', 'absoluteValue', 'coordinatePoints', 'quadraticIntercepts',
  'scatterplot', 'linearLine', 'simpleLine', 'table', 'linearFunctionGraph', 'wavyFunction', 'generalFunction',
  'dotPlot', 'boxPlot', 'dataTable', 'linearGraph', 'parabola', 'barChart', 'circleWithSector', 'circleWithSquare',
  'circleWithInscribedTriangle', 'intersectingLines', 'piecewiseLinear', 'cubicGraph', 'parallelLines', 'twoLineGraph',
  'twoWayTable', 'rightTriangle', 'triangleWithAngles', 'rightTriangleWithAltitude', 'similarTriangles', 'nestedRightTriangles',
]);

// Mirrors scripts/auditMissingDiagrams.mjs CUES — a stem naming a visual must carry one.
const VISUAL_CUE_RE = /\b(scatter[\s-]?plots?|line of best fit|residuals?|box[\s-]?plots?|dot[\s-]?plots?|line plots?|histograms?|bar (?:chart|graph)s?|frequency (?:distribution|table)|two[\s-]?way table|contingency table|table (?:above|below|shown|gives|shows)|(?:the|following) table|(?:the )?figure (?:above|below|shown)|the figure shows|in the figure|(?:the diagram|the picture|the drawing) (?:above|below|shown)|graph\b[^.\n]{0,40}\bis shown|a graph shows)\b/i;

// Content fields an authoring agent may set. Everything else is frozen from the source item.
const CONTENT_FIELDS = ['question', 'diagram', 'questionTable', 'questionFormula', 'choices', 'correctAnswer', 'hint', 'explanation'];
const AUTHORED_META_FIELDS = ['distractorNotes', 'choiceOrderNote', 'figureNote'];

// ─── helpers ────────────────────────────────────────────────────────────────
const args = Object.fromEntries(process.argv.slice(3).map(a => { const m = a.match(/^--([\w-]+)(?:=(.*))?$/); return m ? [m[1], m[2] === undefined ? true : m[2]] : [a, true]; }));
const cmd = process.argv[2];
const sectionSlug = s => String(s).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const kebab = sectionSlug;
const patternTitleOf = expl => { const m = String(expl || '').match(/\*\*SAT Pattern:\s*([^*]+?)\s*\*\*/); return m ? m[1] : null; };
const wordCount = s => String(s || '').replace(/\\\$/g, 'S').replace(/\$[^$]*\$/g, 'M').split(/\s+/).filter(Boolean).length; // escaped \$ (money) is not a math delimiter
const dollarBalanced = s => ((String(s || '').replace(/\\\$/g, '').match(/\$/g) || []).length % 2) === 0;
const numericOf = t => {
  let s = String(t ?? '').replace(/\$/g, '').replace(/\\,/g, '').replace(/\{,\}/g, '').replace(/,/g, '').trim();
  // \frac{a}{b}, -\frac{a}{b}, \dfrac, and plain a/b
  const fr = s.match(/^(-?)\\d?frac\{(-?\d*\.?\d+)\}\{(-?\d*\.?\d+)\}$/);
  if (fr) return (fr[1] === '-' ? -1 : 1) * parseFloat(fr[2]) / parseFloat(fr[3]);
  const sl = s.match(/^(-?\d*\.?\d+)\/(\d*\.?\d+)$/);
  if (sl) return parseFloat(sl[1]) / parseFloat(sl[2]);
  s = s.replace(/\\[a-zA-Z]+/g, '').replace(/[{}\s]/g, '');
  if (!/^-?\d*\.?\d+$/.test(s)) return NaN;
  return parseFloat(s);
};
const median = a => { if (!a.length) return null; const b = [...a].sort((x, y) => x - y); return b[Math.floor(b.length / 2)]; };

function fileIdOf(kind, meta) {
  return kind === 'shard' ? meta.id : `${meta.moduleId}__${sectionSlug(meta.sectionName)}__${meta.id}`;
}
function keyOf(kind, meta) {
  return kind === 'shard' ? meta.id : `${meta.moduleId}::${meta.sectionName}::${meta.id}`;
}

async function loadSource(name) {
  const src = SOURCES[name];
  if (!src) throw new Error(`unknown source ${name}`);
  const mod = await import(pathToFileURL(path.join(ROOT, src.file)).href + `?t=${Date.now()}`);
  const data = mod[src.exportName];
  const items = [];
  if (src.kind === 'shard') {
    data.forEach((q, i) => items.push({ meta: { id: q.id, index: i }, q }));
  } else {
    for (const [sectionName, arr] of Object.entries(data)) {
      arr.forEach((q, i) => items.push({ meta: { id: q.id, moduleId: name, sectionName, index: i }, q }));
    }
  }
  return { src, data, items };
}

function frozenOf(kind, item, name) {
  const { q, meta } = item;
  if (kind === 'shard') {
    return {
      id: q.id, domain: q.domain, skills: q.skills, difficulty: q.difficulty, type: q.type,
      calculatorAllowed: q.calculatorAllowed, tags: q.tags, sourceStyleRef: q.sourceStyleRef,
      sourceRef: q.sourceRef, createdAt: q.createdAt, band: q.band,
      patternTitle: patternTitleOf(q.explanation),
    };
  }
  return {
    id: q.id, moduleId: name, sectionName: meta.sectionName, domain: TOPIC_DOMAIN[name],
    skills: q.skills, difficulty: q.difficulty, type: q.type || 'multiple-choice',
    hasHint: typeof q.hint === 'string' && q.hint.length > 0, patternTitle: null,
  };
}

// ─── manifest ───────────────────────────────────────────────────────────────
async function manifest(names) {
  fs.mkdirSync(path.join(WORK, 'manifest'), { recursive: true });
  fs.mkdirSync(path.join(WORK, 'chunks'), { recursive: true });
  const index = [];
  for (const name of names) {
    const { src, items } = await loadSource(name);
    const rows = items.map(it => {
      const f = frozenOf(src.kind, it, name);
      const q = it.q;
      const choicesNumeric = Array.isArray(q.choices) && q.choices.length === 4 && q.choices.every(c => !Number.isNaN(numericOf(c.text)));
      return {
        fileId: fileIdOf(src.kind, f), key: keyOf(src.kind, f), source: name, ...f,
        ...cbSkillOf(q),
        hasDiagram: !!q.diagram, diagramType: q.diagram?.type || null, hasQuestionTable: !!q.questionTable,
        hasQuestionFormula: !!q.questionFormula, choicesNumeric,
        currentStem: String(q.question || '').slice(0, 220),
        currentCorrectAnswer: q.correctAnswer,
      };
    });
    fs.writeFileSync(path.join(WORK, 'manifest', `${name}.json`), JSON.stringify(rows, null, 1));
    // chunks: contiguous slices; keep whole topic sections together when possible
    const chunks = [];
    for (let i = 0; i < rows.length; i += CHUNK_SIZE) chunks.push(rows.slice(i, i + CHUNK_SIZE));
    chunks.forEach((rowsInChunk, ci) => {
      const id = `${name}-${String(ci + 1).padStart(2, '0')}`;
      const withFig = rowsInChunk.filter(r => r.hasDiagram || r.hasQuestionTable).length;
      const figureTarget = Math.max(withFig, Math.round(rowsInChunk.length * 0.2));
      const chunk = { chunk: id, source: name, kind: src.kind, file: src.file, count: rowsInChunk.length, figureTarget, existingFigures: withFig, items: rowsInChunk };
      fs.writeFileSync(path.join(WORK, 'chunks', `${id}.json`), JSON.stringify(chunk, null, 1));
      index.push({ chunk: id, source: name, kind: src.kind, count: rowsInChunk.length, figureTarget, existingFigures: withFig });
    });
    console.log(`${name}: ${rows.length} items → ${chunks.length} chunk(s)`);
  }
  const prev = fs.existsSync(path.join(WORK, 'chunks.json')) ? JSON.parse(fs.readFileSync(path.join(WORK, 'chunks.json'), 'utf8')) : [];
  const merged = [...prev.filter(p => !index.some(n => n.chunk === p.chunk)), ...index].sort((a, b) => a.chunk.localeCompare(b.chunk));
  fs.writeFileSync(path.join(WORK, 'chunks.json'), JSON.stringify(merged, null, 1));
}

// ─── authored JSON loading ─────────────────────────────────────────────────
function readAuthored(name, fileId) {
  const p = path.join(AUTHORED, name, `${fileId}.json`);
  if (!fs.existsSync(p)) return null;
  try { return { data: JSON.parse(fs.readFileSync(p, 'utf8')), path: p }; }
  catch (e) { return { error: `JSON parse: ${e.message}`, path: p }; }
}

// ─── corpora for uniqueness ────────────────────────────────────────────────
let _official = null;
function officialIndex() {
  if (_official) return _official;
  const cache = JSON.parse(fs.readFileSync(path.join(GEN, 'cbEducatorQBank.json'), 'utf8')).items;
  _official = indexCorpus(cache);
  // control: a verbatim official stem must fail
  const probe = Object.values(cache).find(v => (v.stemPlain || '').split(' ').length > 20);
  if (checkUniquenessSliding(probe.stemPlain, _official).pass) throw new Error('uniqueness gate control failed — corpus shape bug');
  return _official;
}
let _tests = null;
function testStemIndex() {
  if (_tests) return _tests;
  const list = [];
  const dir = path.join(ROOT, 'src', 'data', 'practiceTests');
  for (const f of fs.readdirSync(dir)) {
    if (!/^practiceTest\d+(M2Easy)?\.js$/.test(f)) continue;
    const src = fs.readFileSync(path.join(dir, f), 'utf8');
    [...src.matchAll(/question:\s*"((?:[^"\\]|\\.)*)"/g)].forEach((m, i) => list.push({ id: `${f}#${i + 1}`, text: m[1].replace(/\\n/g, ' ') }));
  }
  _tests = indexCorpus(list);
  return _tests;
}

// ─── check ─────────────────────────────────────────────────────────────────
function scaffoldErrors(a, frozen, kind) {
  const errs = [];
  const e = String(a.explanation || '');
  if (kind === 'shard') {
    const title = patternTitleOf(e);
    if (!title) errs.push('explanation missing **SAT Pattern: …** header');
    else if (title !== frozen.patternTitle) errs.push(`SAT Pattern header "${title}" ≠ frozen "${frozen.patternTitle}"`);
    if (!e.startsWith('**SAT Pattern:')) errs.push('explanation must START with the SAT Pattern header');
  } else if (/\*\*SAT Pattern:/.test(e)) {
    errs.push('topic items carry no SAT Pattern header (routing derives from the section)');
  }
  if (frozen.type === 'multiple-choice') {
    const m = e.match(/\*\*Choice ([A-D]) is correct\.\*\*/);
    if (!m) errs.push('missing **Choice X is correct.** line');
    else if (m[1] !== a.correctAnswer) errs.push(`explanation says Choice ${m[1]} but correctAnswer is ${a.correctAnswer}`);
    if (!/\*\*Why the wrong answers are tempting:\*\*/.test(e)) errs.push('missing **Why the wrong answers are tempting:** section');
    for (const L of ['A', 'B', 'C', 'D']) {
      if (L === a.correctAnswer) continue;
      if (!new RegExp(`\\*\\s*Choice ${L}\\b`).test(e)) errs.push(`no distractor line for Choice ${L}`);
    }
    if (/\*\*Common Mistakes:\*\*/.test(e)) errs.push('MC explanations use the distractor section, not Common Mistakes');
  } else {
    if (!/\*\*The correct answer is [^*]+\*\*/.test(e)) errs.push('fill-in missing **The correct answer is …** line');
    if (!/\*\*Common Mistakes:\*\*/.test(e)) errs.push('fill-in missing **Common Mistakes:** section');
    if (/\*\*Why the wrong answers are tempting:\*\*/.test(e)) errs.push('fill-in explanations use Common Mistakes, not the distractor section');
    const m = e.match(/\*\*The correct answer is \$?([^$*]+?)\$?\.?\*\*/);
    if (m) {
      const said = numericOf(m[1]); const want = numericOf(a.correctAnswer);
      if (!Number.isNaN(said) && !Number.isNaN(want) && Math.abs(said - want) > 1e-9) errs.push(`explanation answer ${m[1]} ≠ correctAnswer ${a.correctAnswer}`);
    }
  }
  if (!/\*\*The Fast Way/.test(e)) errs.push('missing **The Fast Way (~Ns):**');
  if (!/\*\*The Full Solution:\*\*/.test(e)) errs.push('missing **The Full Solution:**');
  if (!/\*\*Test Day Takeaway:\*\*/.test(e)) errs.push('missing **Test Day Takeaway:**');
  return errs;
}

function checkItem(row, authored, ctx) {
  const errs = []; const warns = [];
  const a = authored;
  if (a.id !== undefined && String(a.id) !== String(row.id)) errs.push(`id mismatch ${a.id} vs ${row.id}`);
  for (const k of ['domain', 'skills', 'difficulty', 'type', 'sourceStyleRef']) {
    if (a[k] !== undefined && JSON.stringify(a[k]) !== JSON.stringify(row[k])) warns.push(`${k} in JSON ignored (frozen ${JSON.stringify(row[k])})`);
  }
  for (const k of Object.keys(a)) {
    if (!CONTENT_FIELDS.includes(k) && !AUTHORED_META_FIELDS.includes(k) && !['id', 'domain', 'skills', 'difficulty', 'type', 'sourceStyleRef', 'patternTitle', 'moduleId', 'sectionName'].includes(k)) warns.push(`unknown field "${k}" ignored`);
  }
  if (!a.question || wordCount(a.question) < 4) errs.push('question missing/too short');
  const wc = wordCount(a.question);
  if (wc < 10 && row.type === 'multiple-choice' && !a.diagram) warns.push(`stem only ${wc} words`);
  if (wc > 90) warns.push(`stem ${wc} words (>90)`);
  for (const [k, v] of Object.entries({ question: a.question, explanation: a.explanation, hint: a.hint, questionFormula: a.questionFormula })) {
    if (v && !dollarBalanced(v)) errs.push(`${k}: unbalanced $`);
    if (v && /\\"/.test(v)) errs.push(`${k}: backslash-escaped quote (\\") renders as a literal backslash — use a plain "`);
  }
  if (row.type === 'multiple-choice') {
    if (!Array.isArray(a.choices) || a.choices.length !== 4) errs.push('MC needs exactly 4 choices');
    else {
      const ids = a.choices.map(c => c.id).join('');
      if (ids !== 'ABCD') errs.push(`choice ids must be A,B,C,D in order (got ${ids})`);
      a.choices.forEach(c => { if (!c.text || !dollarBalanced(c.text)) errs.push(`choice ${c.id}: empty or unbalanced $`); });
      const texts = a.choices.map(c => String(c.text).trim());
      if (new Set(texts).size !== 4) errs.push('duplicate choice text');
      const nums = a.choices.map(c => numericOf(c.text));
      if (!nums.some(Number.isNaN)) {
        const asc = nums.every((v, i) => i === 0 || v > nums[i - 1]);
        if (!asc && !a.choiceOrderNote) errs.push('numeric choices not ascending (add choiceOrderNote with the rationale if intentional)');
        ctx.numeric++; if (asc) ctx.ascending++;
      }
    }
    if (!['A', 'B', 'C', 'D'].includes(a.correctAnswer)) errs.push('correctAnswer must be A-D');
    if (a.distractorNotes) for (const L of Object.keys(a.distractorNotes)) if (L === a.correctAnswer) warns.push(`distractorNotes has the correct letter ${L}`);
  } else {
    if (a.choices) errs.push('fill-in must not have choices');
    const ca = String(a.correctAnswer ?? '').trim();
    if (!ca) errs.push('fill-in correctAnswer missing');
    else if (!/^-?\d*\.?\d+$|^-?\d+\/\d+$/.test(ca)) errs.push(`fill-in correctAnswer "${ca}" must be a number or fraction`);
    else if (ca.length > (ca.startsWith('-') ? 6 : 5)) errs.push(`fill-in correctAnswer "${ca}" exceeds the Bluebook grid (5 characters, 6 with a leading minus) — retune the numbers`);
  }
  if (row.kind === 'topic' && row.hasHint && !(a.hint && a.hint.length > 5)) errs.push('topic item needs a hint');
  if (a.diagram) {
    if (!a.diagram.type || !SUPPORTED_DIAGRAM_TYPES.has(a.diagram.type)) errs.push(`unsupported diagram type ${a.diagram?.type}`);
    if (!a.diagram.params || typeof a.diagram.params !== 'object') errs.push('diagram.params missing');
    else if (JSON.stringify(a.diagram.params).includes('$')) errs.push('diagram.params contains "$" — diagram renderers (DataTableDiagram, SATTable, SVG labels) print raw text, not KaTeX; write plain text there (questionTable cells DO render KaTeX)');
    if (a.diagram.params && typeof a.diagram.params === 'object' && a.diagram.type === 'scatterplot') {
      // The renderer draws bestFitLine from xMin to xMax with no clip path and plots every point as given.
      const P = a.diagram.params; const num = v => typeof v === 'number' && Number.isFinite(v);
      if ([P.xMin, P.xMax, P.yMin, P.yMax].every(num)) {
        const eps = 1e-9;
        (Array.isArray(P.points) ? P.points : []).forEach((pt, i) => {
          const [x, y] = Array.isArray(pt) ? pt : [pt?.x, pt?.y];
          if (num(x) && num(y) && (x < P.xMin - eps || x > P.xMax + eps || y < P.yMin - eps || y > P.yMax + eps)) errs.push(`scatterplot point #${i + 1} (${x}, ${y}) lies outside the axis window`);
        });
        const L = P.bestFitLine;
        if (L && num(L.slope) && num(L.intercept)) {
          for (const x of [P.xMin, P.xMax]) { const y = L.slope * x + L.intercept; if (y < P.yMin - eps || y > P.yMax + eps) warns.push(`bestFitLine leaves the plot window at x=${x} (y=${y}); the renderer does not clip — adjust xMin/xMax/yMin/yMax`); }
        }
      }
    }
  }
  if (a.questionTable && (!Array.isArray(a.questionTable.headers) || !Array.isArray(a.questionTable.rows))) errs.push('questionTable needs headers[] and rows[]');
  if (VISUAL_CUE_RE.test(a.question || '') && !a.diagram && !a.questionTable) errs.push('stem names a visual (table/figure/plot) but carries no diagram/questionTable');
  if (a.explanation && a.explanation.includes('```')) {
    const opens = (a.explanation.match(/```[ \t]*seva-figure\b/g) || []).length;
    const total = (a.explanation.match(/```/g) || []).length;
    if (total !== opens * 2) errs.push('stray ``` in explanation (only closed seva-figure blocks allowed)');
  }
  errs.push(...scaffoldErrors(a, row, row.kind));
  ctx.stems.push({ id: row.fileId, text: a.question, difficulty: row.difficulty });
  if (a.diagram || a.questionTable) ctx.figures++;
  return { errs, warns };
}

function uniquenessErrors(stemsById, { skipTests = false } = {}) {
  const errs = [];
  const off = officialIndex();
  const tests = skipTests ? null : testStemIndex();
  const toks = stemsById.map(s => ({ id: s.id, set: new Set(tokenize(s.text)) }));
  for (const s of stemsById) {
    const n = tokenize(s.text).length;
    if (n < 12) continue;
    const r = checkUniquenessSliding(s.text, off);
    if (!r.pass) errs.push(`${s.id}: too close to official item ${r.closestId} (jaccard ${r.jaccard}, ngram ${r.ngramOverlap})`);
    if (tests) { const t = checkUniquenessSliding(s.text, tests); if (!t.pass) errs.push(`${s.id}: too close to practice-test stem ${t.closestId} (jaccard ${t.jaccard})`); }
  }
  // intra-set near-duplicates (bank items must not clone each other)
  for (let i = 0; i < toks.length; i++) for (let j = i + 1; j < toks.length; j++) {
    const A = toks[i].set, B = toks[j].set; if (A.size < 8 || B.size < 8) continue;
    let inter = 0; for (const v of A) if (B.has(v)) inter++;
    const jac = inter / (A.size + B.size - inter);
    if (jac >= 0.78) errs.push(`${toks[i].id} ~ ${toks[j].id}: near-duplicate stems (jaccard ${jac.toFixed(2)})`);
  }
  return errs;
}

async function check(selection) {
  const rows = await selectRows(selection);
  const ctx = { numeric: 0, ascending: 0, figures: 0, stems: [] };
  let errors = 0, missing = 0, checked = 0;
  const lens = { easy: [], medium: [], hard: [] };
  for (const row of rows) {
    const got = readAuthored(row.source, row.fileId);
    if (!got) { missing++; continue; }
    if (got.error) { errors++; console.error(`FAIL ${row.fileId}: ${got.error}`); continue; }
    checked++;
    const { errs, warns } = checkItem(row, got.data, ctx);
    warns.forEach(w => console.warn(`warn ${row.fileId}: ${w}`));
    if (errs.length) { errors += errs.length; errs.forEach(e => console.error(`FAIL ${row.fileId}: ${e}`)); }
    if (lens[row.difficulty]) lens[row.difficulty].push(wordCount(got.data.question));
  }
  const uerrs = args['no-uniq'] ? [] : uniquenessErrors(ctx.stems);
  uerrs.forEach(e => console.error(`FAIL ${e}`)); errors += uerrs.length;
  console.log(`\nchecked ${checked}/${rows.length} (missing ${missing}) · figures ${ctx.figures} (${(100 * ctx.figures / Math.max(1, checked)).toFixed(0)}%) · numeric ascending ${ctx.ascending}/${ctx.numeric} · stem medians E${median(lens.easy)}/M${median(lens.medium)}/H${median(lens.hard)}`);
  if (errors) { console.error(`${errors} error(s)`); process.exit(1); }
  console.log('check passed');
}

async function selectRows(selection) {
  const rows = [];
  if (selection.chunk) {
    const p = path.join(WORK, 'chunks', `${selection.chunk}.json`);
    if (!fs.existsSync(p)) throw new Error(`no chunk ${selection.chunk} — run manifest first`);
    const c = JSON.parse(fs.readFileSync(p, 'utf8'));
    rows.push(...c.items.map(r => ({ ...r, kind: c.kind })));
  } else {
    const names = selection.all ? Object.keys(SOURCES) : [selection.source];
    for (const name of names) {
      const { src, items } = await loadSource(name);
      for (const it of items) { const f = frozenOf(src.kind, it, name); rows.push({ ...f, fileId: fileIdOf(src.kind, f), key: keyOf(src.kind, f), source: name, kind: src.kind }); }
    }
  }
  return rows;
}

// ─── source-file span parsing (string/comment-aware) ───────────────────────
function findSpans(text, kind) {
  // returns [{ start, end, sectionName|null }] for each item object literal in source order
  const spans = [];
  let i = 0, depth = 0, inStr = null, esc = false, inLine = false, inBlock = false;
  const stack = []; // depth → { kind:'obj'|'arr', start }
  let currentSection = null;
  const itemDepth = kind === 'shard' ? 2 : 3; // shard: [ { } ] → depth2 ; topic: { "Sec": [ { } ] } → depth3
  while (i < text.length) {
    const c = text[i], n = text[i + 1];
    if (inLine) { if (c === '\n') inLine = false; i++; continue; }
    if (inBlock) { if (c === '*' && n === '/') { inBlock = false; i += 2; continue; } i++; continue; }
    if (inStr) { if (esc) esc = false; else if (c === '\\') esc = true; else if (c === inStr) inStr = null; i++; continue; }
    if (c === '/' && n === '/') { inLine = true; i += 2; continue; }
    if (c === '/' && n === '*') { inBlock = true; i += 2; continue; }
    if (c === '"' || c === "'" || c === '`') { inStr = c; i++; continue; }
    if (c === '{' || c === '[') {
      depth++; stack.push({ kind: c === '{' ? 'obj' : 'arr', start: i });
      if (kind === 'topic' && depth === 2 && c === '[') {
        // section key precedes: look back for "Name": 
        const back = text.slice(Math.max(0, i - 200), i);
        const m = back.match(/["']([^"']+)["']\s*:\s*$/);
        currentSection = m ? m[1] : currentSection;
      }
      i++; continue;
    }
    if (c === '}' || c === ']') {
      const open = stack.pop();
      if (depth === itemDepth && c === '}' && open?.kind === 'obj') spans.push({ start: open.start, end: i + 1, sectionName: currentSection });
      depth--; i++; continue;
    }
    i++;
  }
  return spans;
}

// ─── serializer ────────────────────────────────────────────────────────────
const IDENT = /^[A-Za-z_$][\w$]*$/;
const keyStr = k => (IDENT.test(k) ? k : JSON.stringify(k));
function serializeInline(v) {
  if (v === null || v === undefined) return 'null';
  if (typeof v === 'string') return JSON.stringify(v);
  if (typeof v === 'number' || typeof v === 'boolean') return String(v);
  if (Array.isArray(v)) return `[${v.map(serializeInline).join(', ')}]`;
  return `{ ${Object.entries(v).filter(([, x]) => x !== undefined).map(([k, x]) => `${keyStr(k)}: ${serializeInline(x)}`).join(', ')} }`;
}
function serializeItem(item, indent, notes) {
  const pad = ' '.repeat(indent), pad2 = ' '.repeat(indent + 2), pad3 = ' '.repeat(indent + 4);
  const lines = [`${pad}{`];
  for (const [k, v] of Object.entries(item)) {
    if (v === undefined) continue;
    if (k === 'choices' && Array.isArray(v)) {
      lines.push(`${pad2}choices: [`);
      v.forEach((c, idx) => {
        const note = notes && notes[c.id];
        if (note) lines.push(`${pad3}// distractor: ${String(note).replace(/\n/g, ' ')}`);
        lines.push(`${pad3}${serializeInline(c)}${idx < v.length - 1 ? ',' : ''}`);
      });
      lines.push(`${pad2}],`);
      continue;
    }
    lines.push(`${pad2}${keyStr(k)}: ${serializeInline(v)},`);
  }
  lines[lines.length - 1] = lines[lines.length - 1].replace(/,$/, '');
  lines.push(`${pad}}`);
  return lines.join('\n');
}

const KEY_ORDER_SHARD = ['id', 'domain', 'skills', 'difficulty', 'band', 'type', 'question', 'questionFormula', 'questionTable', 'diagram', 'choices', 'correctAnswer', 'explanation', 'calculatorAllowed', 'tags', 'sourceStyleRef', 'sourceRef', 'authoredBy', 'createdAt'];
const KEY_ORDER_TOPIC = ['id', 'difficulty', 'type', 'question', 'questionFormula', 'questionTable', 'diagram', 'choices', 'correctAnswer', 'hint', 'explanation', 'skills'];

function mergeItem(kind, oldQ, a) {
  const merged = { ...oldQ };
  for (const k of CONTENT_FIELDS) {
    if (a[k] !== undefined && a[k] !== null) merged[k] = a[k];
    else if (['diagram', 'questionTable', 'questionFormula'].includes(k)) delete merged[k]; // content-shaped extras are replaced wholesale
    else if (k === 'choices' && oldQ.type === 'fill-in') delete merged[k];
  }
  if (oldQ.type === 'fill-in' || merged.type === 'fill-in') delete merged.choices;
  if (kind === 'shard') merged.authoredBy = 'seva-bank-recreation';
  const order = kind === 'shard' ? KEY_ORDER_SHARD : KEY_ORDER_TOPIC;
  const out = {};
  for (const k of order) if (merged[k] !== undefined) out[k] = merged[k];
  for (const k of Object.keys(merged)) if (out[k] === undefined && merged[k] !== undefined) out[k] = merged[k];
  return out;
}

const deepEq = (a, b) => JSON.stringify(a) === JSON.stringify(b);

function chunkAllowList(chunkArg) {
  if (!chunkArg) return null;
  const allow = new Set();
  for (const c of String(chunkArg).split(',')) {
    const p = path.join(WORK, 'chunks', `${c.trim()}.json`);
    if (!fs.existsSync(p)) throw new Error(`no chunk ${c}`);
    for (const r of JSON.parse(fs.readFileSync(p, 'utf8')).items) allow.add(`${r.source}/${r.fileId}`);
  }
  return allow;
}

async function assemble(names, { dry = false, chunks = null } = {}) {
  const allow = chunkAllowList(chunks);
  for (const name of names) {
    const { src, items } = await loadSource(name);
    const file = path.join(ROOT, src.file);
    const text = fs.readFileSync(file, 'utf8');
    const spans = findSpans(text, src.kind);
    if (spans.length !== items.length) throw new Error(`${name}: parsed ${spans.length} item spans but module has ${items.length} items`);
    // map spans ↔ items in order; verify ids line up
    const plan = []; let replaced = 0; const expected = new Map();
    items.forEach((it, i) => {
      const span = spans[i];
      const idInSpan = text.slice(span.start, span.end).match(/\bid:\s*("([^"]*)"|'([^']*)'|(\d+))/);
      const spanId = idInSpan ? (idInSpan[2] ?? idInSpan[3] ?? idInSpan[4]) : null;
      if (String(spanId) !== String(it.q.id)) throw new Error(`${name}: span ${i} id ${spanId} ≠ module item ${it.q.id}`);
      if (src.kind === 'topic' && span.sectionName !== it.meta.sectionName) throw new Error(`${name}: span ${i} section ${span.sectionName} ≠ ${it.meta.sectionName}`);
      const f = frozenOf(src.kind, it, name);
      const got = readAuthored(name, fileIdOf(src.kind, f));
      if (!got || got.error) { plan.push({ span, text: null }); return; }
      if (allow && !allow.has(`${name}/${fileIdOf(src.kind, f)}`)) { plan.push({ span, text: null }); return; }
      const ctx = { numeric: 0, ascending: 0, figures: 0, stems: [] };
      const { errs } = checkItem({ ...f, fileId: fileIdOf(src.kind, f), source: name, kind: src.kind }, got.data, ctx);
      if (errs.length) throw new Error(`${name}/${fileIdOf(src.kind, f)}: authored JSON fails check — run check first (${errs[0]})`);
      const merged = mergeItem(src.kind, it.q, got.data);
      expected.set(i, merged);
      const indent = span.start - text.lastIndexOf('\n', span.start) - 1;
      plan.push({ span, text: serializeItem(merged, indent, got.data.distractorNotes).trimStart() });
      replaced++;
    });
    let out = ''; let cursor = 0;
    plan.forEach(({ span, text: t }) => {
      if (t === null) return;
      out += text.slice(cursor, span.start) + t; cursor = span.end;
    });
    out += text.slice(cursor);
    if (dry) { console.log(`${name}: would replace ${replaced}/${items.length} items`); continue; }
    if (replaced === 0) { console.log(`${name}: nothing to assemble`); continue; }
    fs.writeFileSync(file, out);
    // re-import and verify: untouched identical, replaced == expected
    const after = await loadSource(name);
    if (after.items.length !== items.length) throw new Error(`${name}: item count changed after assembly (${after.items.length} vs ${items.length}) — REVERT`);
    after.items.forEach((it, i) => {
      const want = expected.has(i) ? expected.get(i) : items[i].q;
      if (!deepEq(it.q, want)) throw new Error(`${name}: item ${i} (${it.q.id}) differs from expected after assembly — inspect file`);
      if (src.kind === 'topic' && it.meta.sectionName !== items[i].meta.sectionName) throw new Error(`${name}: section order changed`);
    });
    console.log(`${name}: assembled ${replaced}/${items.length} items (verified by re-import)`);
  }
}

// ─── verify (post-assembly, live files) ────────────────────────────────────
async function verify(names) {
  let errors = 0; const stems = [];
  for (const name of names) {
    const { src, items } = await loadSource(name);
    let recreated = 0;
    for (const it of items) {
      const f = frozenOf(src.kind, it, name);
      const fileId = fileIdOf(src.kind, f);
      const got = readAuthored(name, fileId);
      if (!got || got.error) continue;
      recreated++;
      const q = it.q;
      if (!deepEq(q, mergeItem(src.kind, q, got.data))) { errors++; console.error(`FAIL ${name}/${fileId}: live item ≠ authored JSON (not assembled or drifted)`); }
      const ctx = { numeric: 0, ascending: 0, figures: 0, stems: [] };
      const { errs } = checkItem({ ...f, fileId, source: name, kind: src.kind }, got.data, ctx);
      errs.forEach(e => { errors++; console.error(`FAIL ${name}/${fileId}: ${e}`); });
      stems.push({ id: `${name}/${fileId}`, text: q.question });
    }
    console.log(`${name}: ${recreated}/${items.length} recreated items verified`);
  }
  const u = uniquenessErrors(stems); u.forEach(e => { errors++; console.error(`FAIL ${e}`); });
  if (errors) { console.error(`${errors} failure(s)`); process.exit(1); }
  console.log('verify passed');
}

// ─── status ────────────────────────────────────────────────────────────────
async function status() {
  const table = [];
  let T = 0, A = 0, L = 0, F = 0, N = 0, ASC = 0;
  for (const name of Object.keys(SOURCES)) {
    const { src, items } = await loadSource(name);
    let authored = 0, live = 0, figures = 0, numeric = 0, asc = 0;
    for (const it of items) {
      const f = frozenOf(src.kind, it, name);
      const got = readAuthored(name, fileIdOf(src.kind, f));
      if (got && !got.error) { authored++; if (deepEq(it.q, mergeItem(src.kind, it.q, got.data))) live++; }
      if (it.q.diagram || it.q.questionTable) figures++;
      if (Array.isArray(it.q.choices) && it.q.choices.length === 4) { const nums = it.q.choices.map(c => numericOf(c.text)); if (!nums.some(Number.isNaN)) { numeric++; if (nums.every((v, i) => i === 0 || v >= nums[i - 1])) asc++; } }
    }
    table.push({ source: name, items: items.length, authored, live, figures: `${figures} (${(100 * figures / items.length).toFixed(0)}%)`, ascending: numeric ? `${asc}/${numeric}` : '-' });
    T += items.length; A += authored; L += live; F += figures; N += numeric; ASC += asc;
  }
  console.table(table);
  console.log(`TOTAL ${T} items · authored ${A} · live ${L} · figures ${F} (${(100 * F / T).toFixed(1)}%) · numeric ascending ${ASC}/${N} (${(100 * ASC / Math.max(1, N)).toFixed(0)}%)`);
}

// ─── solvesheet (for independent re-derivation agents) ─────────────────────
async function solvesheet(chunkId) {
  const c = JSON.parse(fs.readFileSync(path.join(WORK, 'chunks', `${chunkId}.json`), 'utf8'));
  const out = [];
  for (const row of c.items) {
    const got = readAuthored(row.source, row.fileId);
    if (!got || got.error) continue;
    const a = got.data;
    out.push({ fileId: row.fileId, type: row.type, difficulty: row.difficulty, question: a.question, diagram: a.diagram || null, questionTable: a.questionTable || null, questionFormula: a.questionFormula || null, choices: a.choices || null, correctAnswer: a.correctAnswer, explanation: a.explanation });
  }
  const p = path.join(WORK, 'solvesheets', `${chunkId}.json`);
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, JSON.stringify(out, null, 1));
  console.log(`${p}: ${out.length} items`);
}

// ─── main ──────────────────────────────────────────────────────────────────
(async () => {
  const names = args.all ? Object.keys(SOURCES) : (args.source ? String(args.source).split(',') : null);
  switch (cmd) {
    case 'manifest': await manifest(names || Object.keys(SOURCES)); break;
    case 'check': await check({ chunk: args.chunk, source: args.source, all: args.all }); break;
    case 'assemble': {
      let n = names;
      if (!n && args.chunk) n = [...new Set(String(args.chunk).split(',').map(c => c.trim().replace(/-\d+$/, '')))];
      if (!n) throw new Error('need --source, --all, or --chunk');
      await assemble(n, { dry: !!args.dry, chunks: args.chunk || null }); break;
    }
    case 'verify': await verify(names || Object.keys(SOURCES)); break;
    case 'status': await status(); break;
    case 'solvesheet': await solvesheet(args.chunk); break;
    default: console.error('usage: recreateBank.mjs manifest|check|assemble|verify|status|solvesheet'); process.exit(1);
  }
})().catch(e => { console.error(e.stack || e.message); process.exit(1); });
