#!/usr/bin/env bun
/**
 * diffInterRater.mjs — compare my blind tags vs ground truth.
 *
 * Three agreement levels:
 *   STRICT — my slug exactly matches ground-truth canonical slug
 *   ALIAS  — my slug ≠ canonical, but PATTERN_ALIASES would map mine to it
 *   CONCEPT — different slug + alias map doesn't bridge, but the concepts
 *             are pedagogically equivalent (judged by the rater)
 *   DISAGREE — different concept altogether
 */

import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.join(__dirname, 'audit-output');
const REPO_ROOT = path.resolve(__dirname, '..');

const blind = JSON.parse(await fs.readFile(path.join(OUT_DIR, 'inter-rater-blind.json'), 'utf8'));
const answers = JSON.parse(await fs.readFile(path.join(OUT_DIR, 'inter-rater-answer-key.json'), 'utf8'));
const myTags = JSON.parse(await fs.readFile(path.join(OUT_DIR, 'inter-rater-my-tags.json'), 'utf8'));

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

const rows = [];
for (const [sid, myTag] of Object.entries(myTags.tags)) {
  const a = byId.get(sid);
  if (!a) continue;
  const gt = a.groundTruthPatternAliased;
  const gtRaw = a.groundTruthPatternRaw;
  const myAliased = aliases[myTag] || myTag;
  let level;
  if (myTag === gt) level = 'STRICT';
  else if (myAliased === gt) level = 'ALIAS';
  else if (gt === aliases[myTag]) level = 'ALIAS';
  else level = 'DISAGREE'; // we'll re-classify some as CONCEPT manually below
  rows.push({
    sampleId: sid,
    test: a.test,
    module: a.module,
    itemId: a.itemId,
    stemPreview: (blindById.get(sid)?.stem || '').slice(0, 100).replace(/\n/g, ' '),
    myTag,
    myAliased,
    groundTruthSlug: a.groundTruthPatternSlug,
    groundTruthAliased: gt,
    groundTruthRaw: gtRaw,
    level,
  });
}

const summary = {
  total: rows.length,
  STRICT: rows.filter((r) => r.level === 'STRICT').length,
  ALIAS: rows.filter((r) => r.level === 'ALIAS').length,
  DISAGREE: rows.filter((r) => r.level === 'DISAGREE').length,
};

await fs.writeFile(
  path.join(OUT_DIR, 'inter-rater-diff.json'),
  JSON.stringify({ summary, rows }, null, 2),
);

console.log('Inter-rater agreement summary:');
console.log(JSON.stringify(summary, null, 2));
console.log(`Strict agreement: ${((summary.STRICT / summary.total) * 100).toFixed(1)}%`);
console.log(`Strict+alias agreement: ${(((summary.STRICT + summary.ALIAS) / summary.total) * 100).toFixed(1)}%`);
console.log('\nDisagreements (raw — some may be CONCEPT-equivalent on manual review):');
for (const r of rows.filter((x) => x.level === 'DISAGREE')) {
  console.log(`\n  ${r.sampleId} (test ${r.test} ${r.module} q${r.itemId}):`);
  console.log(`    stem: ${r.stemPreview}`);
  console.log(`    my:        ${r.myTag} → aliased: ${r.myAliased}`);
  console.log(`    ground:    ${r.groundTruthSlug} → aliased: ${r.groundTruthAliased}`);
  console.log(`    raw title: ${r.groundTruthRaw}`);
}
