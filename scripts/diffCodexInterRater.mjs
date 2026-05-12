#!/usr/bin/env bun
/**
 * diffCodexInterRater.mjs — same agreement diff, but for codex's tags.
 * Also computes Claude-vs-codex agreement (the actual inter-rater number).
 */

import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.join(__dirname, 'audit-output');
const REPO_ROOT = path.resolve(__dirname, '..');

const blind = JSON.parse(await fs.readFile(path.join(OUT_DIR, 'inter-rater-blind.json'), 'utf8'));
const answers = JSON.parse(await fs.readFile(path.join(OUT_DIR, 'inter-rater-answer-key.json'), 'utf8'));
const claudeTags = JSON.parse(await fs.readFile(path.join(OUT_DIR, 'inter-rater-my-tags.json'), 'utf8')).tags;
const codexTags = JSON.parse(await fs.readFile(path.join(OUT_DIR, 'codex-tags.json'), 'utf8')).tags;

// Load aliases
const aliasSrc = await fs.readFile(
  path.join(REPO_ROOT, 'src/data/questions/extractSatPattern.js'),
  'utf8',
);
const aliasBlock = aliasSrc.match(/Object\.freeze\(\{([\s\S]*?)\}\)/);
const aliases = {};
const kvRe = /'([^']+)'\s*:\s*'([^']+)'/g;
let m;
while ((m = kvRe.exec(aliasBlock[1])) !== null) aliases[m[1]] = m[2];

const byId = new Map(answers.map((a) => [a.sampleId, a]));
const blindById = new Map(blind.map((b) => [b.sampleId, b]));

function scoreAgreement(myTag, otherTag) {
  if (!myTag || !otherTag) return 'MISSING';
  const myAliased = aliases[myTag] || myTag;
  const otherAliased = aliases[otherTag] || otherTag;
  if (myTag === otherTag) return 'STRICT';
  if (myAliased === otherAliased) return 'ALIAS';
  return 'DISAGREE';
}

const sids = Object.keys(claudeTags).sort((a, b) => Number(a.slice(1)) - Number(b.slice(1)));
const rows = [];
for (const sid of sids) {
  const a = byId.get(sid);
  if (!a) continue;
  const gt = a.groundTruthPatternAliased;
  const gtRaw = a.groundTruthPatternRaw;
  const claude = claudeTags[sid];
  const codex = codexTags[sid];
  rows.push({
    sampleId: sid,
    test: a.test,
    module: a.module,
    itemId: a.itemId,
    stemPreview: (blindById.get(sid)?.stem || '').slice(0, 80).replace(/\n/g, ' '),
    ground: gt,
    groundRaw: gtRaw,
    claude,
    codex,
    claudeVsGround: scoreAgreement(claude, gt),
    codexVsGround: scoreAgreement(codex, gt),
    claudeVsCodex: scoreAgreement(claude, codex),
  });
}

function pct(rows, key, level) {
  const n = rows.filter((r) => r[key] === level).length;
  return { n, pct: ((n / rows.length) * 100).toFixed(1) };
}

const summary = {
  total: rows.length,
  claudeVsGround: {
    STRICT: pct(rows, 'claudeVsGround', 'STRICT'),
    ALIAS: pct(rows, 'claudeVsGround', 'ALIAS'),
    DISAGREE: pct(rows, 'claudeVsGround', 'DISAGREE'),
  },
  codexVsGround: {
    STRICT: pct(rows, 'codexVsGround', 'STRICT'),
    ALIAS: pct(rows, 'codexVsGround', 'ALIAS'),
    DISAGREE: pct(rows, 'codexVsGround', 'DISAGREE'),
  },
  claudeVsCodex: {
    STRICT: pct(rows, 'claudeVsCodex', 'STRICT'),
    ALIAS: pct(rows, 'claudeVsCodex', 'ALIAS'),
    DISAGREE: pct(rows, 'claudeVsCodex', 'DISAGREE'),
  },
};

await fs.writeFile(
  path.join(OUT_DIR, 'inter-rater-codex-diff.json'),
  JSON.stringify({ summary, rows }, null, 2),
);

console.log('Three-way agreement:');
console.log(JSON.stringify(summary, null, 2));

console.log('\n=== Items where Claude AND codex disagree with ground (likely real tag issues) ===');
for (const r of rows.filter((r) => r.claudeVsGround === 'DISAGREE' && r.codexVsGround === 'DISAGREE')) {
  console.log(`\n  ${r.sampleId} (test ${r.test} ${r.module} q${r.itemId}):`);
  console.log(`    stem: ${r.stemPreview}`);
  console.log(`    ground: ${r.ground} ("${r.groundRaw}")`);
  console.log(`    claude: ${r.claude}`);
  console.log(`    codex:  ${r.codex}`);
  console.log(`    claude-vs-codex: ${r.claudeVsCodex}`);
}

console.log('\n=== Items where Claude AND codex agree (but BOTH disagree with ground — strongest signal) ===');
let strongMisses = 0;
for (const r of rows) {
  if (r.claudeVsGround === 'DISAGREE' && r.codexVsGround === 'DISAGREE' && r.claudeVsCodex !== 'DISAGREE') {
    strongMisses++;
    console.log(`\n  ${r.sampleId}: ground=${r.ground}, both raters=${r.claude}/${r.codex}, agreement=${r.claudeVsCodex}`);
  }
}
console.log(`\nTotal "both raters disagree with ground but agree with each other": ${strongMisses}`);
