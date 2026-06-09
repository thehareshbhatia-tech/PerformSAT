#!/usr/bin/env node
/**
 * contentInventory.mjs — derive the real content counts behind landing-page copy.
 *
 * Single source of truth for every number the marketing surface claims.
 * Re-run this before touching any count in src/components/LandingPage.jsx
 * (and keep the copy AT OR BELOW the derived numbers — never inflate;
 * round DOWN to a clean number).
 *
 * Counting is delegated to scripts/auditPracticeBank.mjs (the canonical
 * bank counter, which loads the shards/topic files/R&W bundles the way
 * production does) so this script can never drift from the audit.
 *
 * Run: node scripts/contentInventory.mjs
 */

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const INVENTORY_JSON = path.join(__dirname, 'audit-output', 'practice-bank-inventory.json');

// Round DOWN to the nearest clean step — the honesty rule for marketing copy.
const roundDown = (n, step) => Math.floor(n / step) * step;

async function main() {
  // 1. Re-derive bank counts via the canonical audit (writes audit-output/*).
  execFileSync('node', [path.join(__dirname, 'auditPracticeBank.mjs')], {
    cwd: ROOT,
    stdio: ['ignore', 'ignore', 'inherit'],
  });
  const inv = JSON.parse(await fs.readFile(INVENTORY_JSON, 'utf8'));

  // 2. Full-length tests: one R&W bundle per assembled test (each base
  //    practiceTestN.js carries M1+M2; M2Easy is a variant, not a new test).
  const testFiles = (await fs.readdir(path.join(ROOT, 'src/data/practiceTests')))
    .filter((f) => /^practiceTest\d+RW\.js$/.test(f));

  const counts = {
    mathBankItems: inv.math.totalItems,
    rwBankItems: inv.rw.totalItems,
    totalQuestions: inv.math.totalItems + inv.rw.totalItems,
    fullLengthTests: testFiles.length,
    surfacedDrillPatterns: inv.math.totalSurfacedPatterns,
  };

  const copyTokens = {
    totalQuestions: `${roundDown(counts.totalQuestions, 100).toLocaleString('en-US')}+`,
    mathBankItems: `${roundDown(counts.mathBankItems, 100).toLocaleString('en-US')}+`,
    rwBankItems: `${roundDown(counts.rwBankItems, 100).toLocaleString('en-US')}+`,
    surfacedDrillPatterns: `${roundDown(counts.surfacedDrillPatterns, 10)}+`,
    fullLengthTests: String(counts.fullLengthTests), // exact — tests don't round
  };

  console.log('SEVA content inventory (derived from source, not hardcoded)');
  console.log('-----------------------------------------------------------');
  for (const [k, v] of Object.entries(counts)) console.log(`${k.padEnd(22)} ${v}`);
  console.log('');
  console.log('Landing-copy tokens (rounded DOWN — safe to claim)');
  console.log('-----------------------------------------------------------');
  for (const [k, v] of Object.entries(copyTokens)) console.log(`${k.padEnd(22)} ${v}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
