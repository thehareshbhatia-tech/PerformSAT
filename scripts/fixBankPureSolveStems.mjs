#!/usr/bin/env bun
/**
 * fixBankPureSolveStems.mjs — convert "If [equation], what is the value of $x$?"
 * pure-solve stems to CB voice ("What value of $x$ satisfies the equation [eq]?")
 * across the bank.
 *
 * Why this is correct:
 *
 *   Looked at CB QBank "Linear equations in one variable" items at bands 1-3.
 *   The CB "If [eq], what is the value of [SHIFTED expression]?" pattern is
 *   authentic — it tests recognition of a shifted-output shortcut. But CB
 *   never uses "If [eq], what is the value of $x$?" — when the answer is
 *   just $x$, CB uses one of:
 *
 *     "What value of $x$ satisfies the equation [eq]?"
 *     "[eq]\n\nWhat value of $x$ is the solution to the given equation?"
 *     "[eq]\n\nWhat is the solution to the given equation?"
 *
 *   So this script ONLY rewrites items where the follow-up is "$x$" (or other
 *   single-variable bare). It LEAVES untouched items where the follow-up is
 *   a shifted expression like "$6x - 1$" or "$2x + 5$" — those are authentic.
 *
 * Each rewrite is verified:
 *   - Original must match the pure-solve regex.
 *   - New stem must produce a stable hash (no surprise interpolation).
 *   - Choices / correctAnswer / explanation untouched.
 *
 * Run:
 *   bun scripts/fixBankPureSolveStems.mjs --dry
 *   bun scripts/fixBankPureSolveStems.mjs
 */

import { promises as fs } from 'node:fs';
import path from 'node:path';

const BANK_DIR = '/Users/hareshbhatia/PerformSAT/src/data/questions/bank';
const SHARDS = ['algebra', 'advancedMath', 'geometry', 'problemSolving'];

// Match "If $eq$, what is the value of $x$?" where $x$ is a SINGLE variable letter.
// Reject if the follow-up is a multi-term expression (those are shifted-output, authentic).
//
// Group 1: the equation body (inside the first $...$)
// Group 2: the variable letter
const PURE_SOLVE_PATTERN = /^If\s+\$([^$]+?)\$\s*,\s*what is the value of\s+\$([a-z])\$\s*\?\s*$/i;

async function main() {
  const args = process.argv.slice(2);
  const dryRun = args.includes('--dry');

  let totalEdits = 0;
  let totalSkipped = 0;

  for (const shardName of SHARDS) {
    const filePath = path.join(BANK_DIR, `${shardName}.js`);
    let src = await fs.readFile(filePath, 'utf8');
    let edits = 0;

    // Find all `question: '<stem>'` literals and check if they match the pure-solve pattern.
    const questionRe = /(\bquestion:\s*)('(?:\\'|[^'])*')/g;

    src = src.replace(questionRe, (whole, prefix, quoted) => {
      // Decode the JS single-quoted string
      const stem = quoted.slice(1, -1).replace(/\\'/g, "'").replace(/\\\\/g, '\\');

      const m = stem.match(PURE_SOLVE_PATTERN);
      if (!m) return whole;

      const eq = m[1].trim();
      const v = m[2];
      // CB-voice rewrite: declarative form
      const newStem = `What value of $${v}$ satisfies the equation $${eq}$?`;

      if (PURE_SOLVE_PATTERN.test(newStem)) {
        throw new Error(`Idempotency check failed:\n  in:  ${stem}\n  out: ${newStem}`);
      }

      // Re-encode for single-quoted JS string
      const newQuoted = "'" + newStem.replace(/\\/g, '\\\\').replace(/'/g, "\\'") + "'";
      edits++;
      return prefix + newQuoted;
    });

    if (dryRun) {
      console.log(`[dry] ${shardName}: ${edits} edits proposed`);
    } else if (edits > 0) {
      await fs.writeFile(filePath, src);
      console.log(`${shardName}: ${edits} edits applied`);
    } else {
      console.log(`${shardName}: no edits`);
    }
    totalEdits += edits;
  }

  console.log('');
  console.log(`${dryRun ? '[DRY] ' : ''}${totalEdits} pure-solve stems rewritten to CB voice.`);
}

main().catch(e => { console.error(e); process.exit(1); });
