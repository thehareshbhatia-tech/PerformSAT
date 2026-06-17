/**
 * explanationCodemod.mjs — extract / apply for the explanation-quality rewrite.
 *
 *   node scripts/explanationCodemod.mjs extract   > /dev/null   # writes JSONL
 *   node scripts/explanationCodemod.mjs apply  <patch.jsonl>     # splices files
 *   node scripts/explanationCodemod.mjs verify-roundtrip          # identity check
 *
 * Items are keyed by {file, idx} where idx is the 0-based order of appearance
 * of an explanation-bearing object within the file. This is collision-proof:
 * practice tests reuse `id` across modules, so id alone is not unique. Files
 * are never mutated between extract and apply, so idx is stable.
 *
 * apply() splices ONLY the explanation StringLiteral by character offset, so
 * every other byte of the hand-formatted source is preserved.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { parse } from '@babel/parser';
import _traverse from '@babel/traverse';
const traverse = _traverse.default;

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = path.join(ROOT, 'scripts', 'audit-output', 'math-explanations.jsonl');

// ── target file set: math bank shards + legacy topic files + math practice tests
function mathFiles() {
  const files = [];
  const bankDir = path.join(ROOT, 'src/data/questions/bank');
  for (const f of ['algebra.js', 'advancedMath.js', 'geometry.js', 'problemSolving.js']) {
    files.push(path.join(bankDir, f));
  }
  const qDir = path.join(ROOT, 'src/data/questions');
  const skipTopic = new Set(['cbSkillTaxonomy.js', 'extractSatPattern.js', 'index.js']);
  for (const f of fs.readdirSync(qDir)) {
    if (f.endsWith('.js') && !skipTopic.has(f) && !f.includes('__tests__')) files.push(path.join(qDir, f));
  }
  const ptDir = path.join(ROOT, 'src/data/practiceTests');
  for (const f of fs.readdirSync(ptDir)) {
    // math test bundles only: practiceTestN.js and practiceTestNM2Easy.js, NOT *RW.js
    if (/^practiceTest\d+(M2Easy)?\.js$/.test(f)) files.push(path.join(ptDir, f));
  }
  return files.filter((f) => fs.existsSync(f));
}

const rel = (f) => path.relative(ROOT, f);

// read a simple literal-ish value from an ObjectProperty value node
function litVal(node) {
  if (!node) return undefined;
  if (node.type === 'StringLiteral' || node.type === 'NumericLiteral' || node.type === 'BooleanLiteral') return node.value;
  if (node.type === 'ArrayExpression') {
    return node.elements.map((el) => {
      if (!el) return null;
      if (el.type === 'StringLiteral' || el.type === 'NumericLiteral') return el.value;
      if (el.type === 'ObjectExpression') return objToPlain(el);
      return undefined;
    });
  }
  if (node.type === 'ObjectExpression') return objToPlain(node);
  return undefined;
}
function getProp(objExpr, name) {
  for (const p of objExpr.properties) {
    if (p.type === 'ObjectProperty' && p.key && (p.key.name === name || p.key.value === name)) return p;
  }
  return null;
}
function objToPlain(objExpr) {
  const o = {};
  for (const p of objExpr.properties) {
    if (p.type !== 'ObjectProperty' || !p.key) continue;
    const k = p.key.name ?? p.key.value;
    o[k] = litVal(p.value);
  }
  return o;
}

// collect every explanation-bearing ObjectExpression in source order
function collectNodes(code) {
  const ast = parse(code, { sourceType: 'module', plugins: [] });
  const nodes = [];
  traverse(ast, {
    ObjectExpression(p) {
      const expl = getProp(p.node, 'explanation');
      if (expl && expl.value && expl.value.type === 'StringLiteral') {
        nodes.push({ obj: p.node, explNode: expl.value });
      }
    },
  });
  return nodes;
}

const SAT_PATTERN_RE = /\*\*SAT Pattern:\s*(.+?)\*\*/;

function extract() {
  const files = mathFiles();
  const stream = [];
  let total = 0;
  const perFile = {};
  for (const file of files) {
    const code = fs.readFileSync(file, 'utf8');
    const nodes = collectNodes(code);
    perFile[rel(file)] = nodes.length;
    nodes.forEach(({ obj, explNode }, idx) => {
      const explanation = explNode.value;
      const choicesNode = getProp(obj, 'choices');
      const rec = {
        file: rel(file),
        idx,
        id: litVal(getProp(obj, 'id')?.value),
        domain: litVal(getProp(obj, 'domain')?.value),
        difficulty: litVal(getProp(obj, 'difficulty')?.value),
        skills: litVal(getProp(obj, 'skills')?.value) || litVal(getProp(obj, 'skill')?.value),
        question: litVal(getProp(obj, 'question')?.value),
        choices: choicesNode ? litVal(choicesNode.value) : undefined,
        correctAnswer: litVal(getProp(obj, 'correctAnswer')?.value),
        satPattern: (explanation.match(SAT_PATTERN_RE) || [])[1] || null,
        explanation,
      };
      stream.push(JSON.stringify(rec));
      total++;
    });
  }
  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(OUT, stream.join('\n') + '\n');
  console.error(`[extract] ${total} explanations from ${files.length} files → ${rel(OUT)}`);
  console.error('[extract] per-file counts:');
  Object.entries(perFile).sort((a, b) => b[1] - a[1]).forEach(([f, n]) => console.error(`  ${n}\t${f}`));
}

// Double-quoted JS string literal via JSON.stringify — matches the source's
// existing explanation quote style, so identity round-trips are zero-diff and
// rewrite diffs show only the genuine content change.
function jsStringLiteral(s) {
  return JSON.stringify(String(s));
}

function apply(patchFile, { dryRun = false } = {}) {
  const patches = fs.readFileSync(patchFile, 'utf8').split('\n').filter(Boolean).map((l) => JSON.parse(l));
  const byFile = {};
  for (const p of patches) (byFile[p.file] ||= []).push(p);

  let applied = 0, headerWarnings = 0, missing = 0;
  for (const [relFile, ps] of Object.entries(byFile)) {
    const file = path.join(ROOT, relFile);
    let code = fs.readFileSync(file, 'utf8');
    const nodes = collectNodes(code);
    // build splice ops, descending by start so offsets stay valid
    const ops = [];
    for (const p of ps) {
      const node = nodes[p.idx];
      if (!node) { console.error(`[apply] MISSING ${relFile} idx=${p.idx}`); missing++; continue; }
      const oldStr = node.explNode.value;
      // safety: SAT Pattern header must be preserved byte-for-byte (drill routing)
      const oldHdr = (oldStr.match(SAT_PATTERN_RE) || [])[1] || null;
      const newHdr = (p.newExplanation.match(SAT_PATTERN_RE) || [])[1] || null;
      if (oldHdr && oldHdr !== newHdr) {
        console.error(`[apply] HEADER CHANGED ${relFile} idx=${p.idx} id=${p.id}: "${oldHdr}" -> "${newHdr}" (skipped)`);
        headerWarnings++; continue;
      }
      ops.push({ start: node.explNode.start, end: node.explNode.end, repl: jsStringLiteral(p.newExplanation) });
    }
    ops.sort((a, b) => b.start - a.start);
    for (const op of ops) {
      code = code.slice(0, op.start) + op.repl + code.slice(op.end);
      applied++;
    }
    if (!dryRun) fs.writeFileSync(file, code);
  }
  console.error(`[apply] ${dryRun ? '(dry-run) ' : ''}applied=${applied} headerSkipped=${headerWarnings} missing=${missing}`);
}

// identity round-trip: extract, then re-apply the SAME explanations; git diff must be empty
function verifyRoundtrip() {
  extract();
  const recs = fs.readFileSync(OUT, 'utf8').split('\n').filter(Boolean).map((l) => JSON.parse(l));
  const patch = recs.map((r) => JSON.stringify({ file: r.file, idx: r.idx, id: r.id, newExplanation: r.explanation }));
  const tmp = path.join(ROOT, 'scripts', 'audit-output', '_roundtrip.jsonl');
  fs.writeFileSync(tmp, patch.join('\n') + '\n');
  apply(tmp);
  console.error('[verify-roundtrip] applied identity patch — now run `git diff --stat` to confirm minimal/no change');
}

// split the extracted JSONL into per-batch input files (≤N items, grouped by
// source file so each agent rewrites coherent, same-domain items)
function split(batchSize = 12) {
  if (!fs.existsSync(OUT)) extract();
  const recs = fs.readFileSync(OUT, 'utf8').split('\n').filter(Boolean).map((l) => JSON.parse(l));
  const byFile = {};
  for (const r of recs) (byFile[r.file] ||= []).push(r);
  const dir = path.join(ROOT, 'scripts', 'audit-output', 'batches');
  fs.rmSync(dir, { recursive: true, force: true });
  fs.mkdirSync(dir, { recursive: true });
  const manifest = [];
  for (const [file, items] of Object.entries(byFile)) {
    for (let i = 0; i < items.length; i += batchSize) {
      const chunk = items.slice(i, i + batchSize);
      const n = String(manifest.length).padStart(3, '0');
      const name = `batch-${n}.in.jsonl`;
      fs.writeFileSync(path.join(dir, name), chunk.map((c) => JSON.stringify(c)).join('\n') + '\n');
      manifest.push({ name, file, count: chunk.length });
    }
  }
  fs.writeFileSync(path.join(dir, 'manifest.json'), JSON.stringify({ batchSize, total: recs.length, batches: manifest }, null, 2));
  console.error(`[split] ${recs.length} items → ${manifest.length} batches of ≤${batchSize} in ${rel(dir)}`);
}

// Parse the agents' sentinel-delimited output files into one patch JSONL.
// Each batch-NNN.out contains blocks:
//   <<<EXPL idx=0>>>
//   ...raw rewritten explanation (real backslashes/newlines, no escaping)...
//   <<<ENDEXPL>>>
// Batches are single-source-file, so the file path comes from the manifest.
function gather() {
  const dir = path.join(ROOT, 'scripts', 'audit-output', 'batches');
  const manifest = JSON.parse(fs.readFileSync(path.join(dir, 'manifest.json'), 'utf8'));
  const out = [];
  let goodBatches = 0, missing = [], rejected = [], totalBlocks = 0;
  const blockRe = /<<<EXPL idx=(\d+)>>>\n([\s\S]*?)\n<<<ENDEXPL>>>/g;
  manifest.batches.forEach((b, n) => {
    const id = String(n).padStart(3, '0');
    const fp = path.join(dir, `batch-${id}.out`);
    if (!fs.existsSync(fp)) { missing.push(id); return; }

    // expected idx set + original SAT-Pattern header per idx, from the .in
    const inRecs = fs.readFileSync(path.join(dir, `batch-${id}.in.jsonl`), 'utf8')
      .split('\n').filter(Boolean).map((l) => JSON.parse(l));
    const expected = new Map(inRecs.map((r) => [r.idx, r.satPattern]));

    // parsed blocks from the .out
    const txt = fs.readFileSync(fp, 'utf8');
    const blocks = [];
    let m; blockRe.lastIndex = 0;
    while ((m = blockRe.exec(txt)) !== null) blocks.push({ idx: Number(m[1]), text: m[2] });

    // VALIDATE alignment: idx set must match the .in exactly (no dup/extra/missing)
    const seen = new Set();
    let reason = null;
    for (const blk of blocks) {
      if (seen.has(blk.idx)) { reason = `duplicate idx ${blk.idx}`; break; }
      seen.add(blk.idx);
      if (!expected.has(blk.idx)) { reason = `extra idx ${blk.idx} not in batch`; break; }
      const origHdr = expected.get(blk.idx);
      const newHdr = (blk.text.match(SAT_PATTERN_RE) || [])[1] || null;
      if (origHdr && origHdr !== newHdr) { reason = `idx ${blk.idx} header "${newHdr}" != "${origHdr}"`; break; }
    }
    if (!reason && seen.size !== expected.size) reason = `count ${seen.size} != expected ${expected.size}`;
    if (reason) { rejected.push(`${id} (${reason})`); return; }

    for (const blk of blocks) { out.push(JSON.stringify({ file: b.file, idx: blk.idx, newExplanation: blk.text })); totalBlocks++; }
    goodBatches++;
  });
  const dest = path.join(ROOT, 'scripts', 'audit-output', 'all-patches.jsonl');
  fs.writeFileSync(dest, out.join('\n') + '\n');
  console.error(`[gather] ${totalBlocks} patches from ${goodBatches} validated batches → ${rel(dest)}`);
  if (rejected.length) console.error(`[gather] REJECTED ${rejected.length} misaligned batches: ${rejected.join('; ')}`);
  if (missing.length) console.error(`[gather] PENDING ${missing.length} batches (no .out): ${missing.slice(0, 8).join(',')}${missing.length > 8 ? ' …' : ''}`);
}

const mode = process.argv[2];
if (mode === 'extract') extract();
else if (mode === 'split') split(Number(process.argv[3]) || 12);
else if (mode === 'gather') gather();
else if (mode === 'apply') apply(process.argv[3], { dryRun: process.argv.includes('--dry-run') });
else if (mode === 'verify-roundtrip') verifyRoundtrip();
else { console.error('usage: explanationCodemod.mjs extract|apply <patch.jsonl>|verify-roundtrip'); process.exit(1); }
