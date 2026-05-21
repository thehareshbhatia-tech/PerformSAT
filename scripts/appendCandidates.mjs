#!/usr/bin/env node
/**
 * appendCandidates.mjs — append accepted candidate items into the correct
 * bank shard file as valid JS object literals.
 *
 * Usage:
 *   node scripts/appendCandidates.mjs --in=scripts/generated/accepted-items-{slug}.jsonl
 *
 * The JSONL is read, items are grouped by `domain`, and each group is
 * appended to its bank shard (algebra.js / advancedMath.js / problemSolving.js
 * / geometry.js) before the closing `];`. Items are formatted as compact
 * one-line JS object literals matching the style of bank-alg-280 etc.
 *
 * Idempotency: if an ID already exists in the shard, that item is skipped.
 * Safe to re-run.
 */

import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(__dirname, '..');

const DOMAIN_TO_FILE = {
  'algebra': 'src/data/questions/bank/algebra.js',
  'advanced-math': 'src/data/questions/bank/advancedMath.js',
  'problem-solving': 'src/data/questions/bank/problemSolving.js',
  'geometry': 'src/data/questions/bank/geometry.js',
};

function parseArgs() {
  const args = {};
  for (const a of process.argv.slice(2)) {
    const m = a.match(/^--([\w-]+)(?:=(.*))?$/);
    if (m) args[m[1]] = m[2] === undefined ? true : m[2];
  }
  return args;
}

// Serialize a value as a JS literal matching the bank's style:
// - Strings: single-quoted, internal single quotes and backslashes escaped,
//   newlines as \n.
// - Numbers, booleans, null: native.
// - Arrays: bracketed, comma-separated.
// - Objects: braced, `key: value` (unquoted keys).
function jsLiteral(v) {
  if (v === null) return 'null';
  if (typeof v === 'string') {
    // If string contains a single quote and no double quote, use double quotes.
    if (v.includes("'") && !v.includes('"')) {
      return '"' + v
        .replace(/\\/g, '\\\\')
        .replace(/"/g, '\\"')
        .replace(/\n/g, '\\n')
        .replace(/\r/g, '\\r')
        .replace(/\t/g, '\\t') + '"';
    }
    return "'" + v
      .replace(/\\/g, '\\\\')
      .replace(/'/g, "\\'")
      .replace(/\n/g, '\\n')
      .replace(/\r/g, '\\r')
      .replace(/\t/g, '\\t') + "'";
  }
  if (typeof v === 'number' || typeof v === 'boolean') return String(v);
  if (Array.isArray(v)) {
    return '[' + v.map(x => jsLiteral(x)).join(', ') + ']';
  }
  if (typeof v === 'object') {
    const entries = Object.entries(v);
    const pairs = entries.map(([k, val]) => `${k}: ${jsLiteral(val)}`);
    return '{ ' + pairs.join(', ') + ' }';
  }
  return 'undefined';
}

async function main() {
  const args = parseArgs();
  const inPath = args.in;
  if (!inPath) {
    console.error('Usage: node scripts/appendCandidates.mjs --in=<accepted-items.jsonl>');
    process.exit(2);
  }

  const raw = await fs.readFile(inPath, 'utf8');
  const items = raw.split('\n').filter(Boolean).map(l => JSON.parse(l));
  console.log(`Loaded ${items.length} items from ${inPath}`);

  // Group by domain
  const byDomain = {};
  for (const item of items) {
    if (!DOMAIN_TO_FILE[item.domain]) {
      console.error(`Skipping ${item.id}: unknown domain "${item.domain}"`);
      continue;
    }
    (byDomain[item.domain] = byDomain[item.domain] || []).push(item);
  }

  let totalAppended = 0;
  let totalSkipped = 0;

  for (const [domain, dItems] of Object.entries(byDomain)) {
    const shardPath = path.join(REPO_ROOT, DOMAIN_TO_FILE[domain]);
    const shardSrc = await fs.readFile(shardPath, 'utf8');

    // Idempotency: filter out items whose IDs already exist
    const existingIds = new Set([...shardSrc.matchAll(/id:\s*['"]([^'"]+)['"]/g)].map(m => m[1]));
    const toAppend = [];
    for (const item of dItems) {
      if (existingIds.has(item.id)) {
        totalSkipped++;
      } else {
        toAppend.push(item);
      }
    }

    if (toAppend.length === 0) {
      console.log(`  ${domain}: nothing to append (all ${dItems.length} IDs already present)`);
      continue;
    }

    // Locate the closing `];` and walk backward to find the `}` that closes
    // the last item. Insert `,` + new items between them.
    const beforeClose = shardSrc.lastIndexOf('];');
    if (beforeClose < 0) {
      console.error(`  ${domain}: closing ]; not found, aborting`);
      continue;
    }

    let i = beforeClose - 1;
    while (i > 0 && /\s/.test(shardSrc[i])) i--;
    if (shardSrc[i] !== '}') {
      console.error(`  ${domain}: expected } before ];, found "${shardSrc[i]}"; aborting`);
      continue;
    }

    // Build appended block. Each new item gets a leading newline + indent.
    const appendBlock = toAppend.map(item => '\n\n  ' + jsLiteral(item)).join(',');

    // Insert: shardSrc[0..i+1] + ',' + appendBlock + shardSrc[i+1..end]
    const newSrc = shardSrc.slice(0, i + 1) + ',' + appendBlock + shardSrc.slice(i + 1);

    await fs.writeFile(shardPath, newSrc);
    console.log(`  ${domain}: appended ${toAppend.length} items to ${DOMAIN_TO_FILE[domain]}`);
    totalAppended += toAppend.length;
  }

  console.log('');
  console.log('=== SUMMARY ===');
  console.log(`Appended: ${totalAppended}`);
  console.log(`Skipped (already present): ${totalSkipped}`);
  console.log('');
  console.log('Next: `npm run bank:validate` to confirm; then `node scripts/auditPracticeBank.mjs` to see depth changes.');
}

main().catch(e => { console.error('FATAL:', e); process.exit(1); });
