#!/usr/bin/env node
/**
 * runTier1.mjs — orchestrate the Tier 1 bank growth pipeline.
 *
 * For each pattern at exactly 4 items, runs:
 *   1. authorMathItem.mjs — generate N candidates via Claude
 *   2. gradeCandidates.mjs — score on 5-dim rubric, gate at ≥4/5 on every dim
 *   3. appendCandidates.mjs — write accepted items into the correct bank shard
 *
 * Then runs `npm run bank:validate` and re-runs the audit to report depth
 * changes.
 *
 * Usage:
 *   ANTHROPIC_API_KEY=... node scripts/runTier1.mjs                  # all 50 patterns
 *   ANTHROPIC_API_KEY=... node scripts/runTier1.mjs --patterns=slope-from-two-points,basic-probability   # subset
 *   ANTHROPIC_API_KEY=... node scripts/runTier1.mjs --count=10       # candidates per pattern (default 10)
 *   ANTHROPIC_API_KEY=... node scripts/runTier1.mjs --target-depth=10 # stop when pattern reaches this many items (default 10)
 *   ANTHROPIC_API_KEY=... node scripts/runTier1.mjs --skip-grade     # skip the grader (author + validate only — for fast iteration)
 *
 * Idempotency: if a pattern is already at or above --target-depth, it's skipped.
 * Candidate JSONL files are cached in scripts/generated/ — re-running on the
 * same pattern reuses them unless --force is passed.
 */

import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawn } from 'node:child_process';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(__dirname, '..');
const TARGETS_PATH = path.join(REPO_ROOT, 'scripts/audit-output/tier1-target-patterns.json');
const INV_PATH = path.join(REPO_ROOT, 'scripts/audit-output/practice-bank-inventory.json');
const GEN_DIR = path.join(REPO_ROOT, 'scripts/generated');

function parseArgs() {
  const args = {};
  for (const a of process.argv.slice(2)) {
    const m = a.match(/^--([\w-]+)(?:=(.*))?$/);
    if (m) args[m[1]] = m[2] === undefined ? true : m[2];
  }
  return args;
}

function run(cmd, args, opts = {}) {
  return new Promise((resolve, reject) => {
    const proc = spawn(cmd, args, { stdio: 'inherit', cwd: REPO_ROOT, ...opts });
    proc.on('exit', code => code === 0 ? resolve() : reject(new Error(`${cmd} ${args.join(' ')} exited ${code}`)));
    proc.on('error', reject);
  });
}

async function exists(p) {
  try { await fs.access(p); return true; } catch { return false; }
}

async function refreshAudit() {
  await run('node', ['scripts/auditPracticeBank.mjs']);
}

async function patternCount(slug) {
  const inv = JSON.parse(await fs.readFile(INV_PATH, 'utf8'));
  for (const d of inv.math.domains) {
    const surf = d.surfaced.find(p => p.slug === slug);
    if (surf) return surf.count;
    const hid = d.hidden.find(p => p.slug === slug);
    if (hid) return hid.count;
  }
  return 0;
}

async function main() {
  const args = parseArgs();
  const count = parseInt(args.count || '10', 10);
  const targetDepth = parseInt(args['target-depth'] || '10', 10);
  const skipGrade = !!args['skip-grade'];
  const force = !!args.force;
  const model = args.model;

  // Auth: by default, uses `claude` CLI (Max OAuth). To use the SDK, set USE_ANTHROPIC_SDK=1.
  const useSdk = process.env.USE_ANTHROPIC_SDK === '1';
  if (useSdk && !process.env.ANTHROPIC_API_KEY) {
    console.error('ERROR: USE_ANTHROPIC_SDK=1 set but ANTHROPIC_API_KEY missing');
    process.exit(2);
  }
  if (!(await exists(TARGETS_PATH))) {
    console.error(`Targets file not found: ${TARGETS_PATH}`);
    console.error('Generate it first by running the inventory probe in scripts/auditPracticeBank.mjs.');
    process.exit(2);
  }

  let targets = JSON.parse(await fs.readFile(TARGETS_PATH, 'utf8'));
  if (args.patterns) {
    const filter = new Set(args.patterns.split(','));
    targets = targets.filter(t => filter.has(t.slug));
    if (!targets.length) {
      console.error('No targets matched --patterns filter');
      process.exit(2);
    }
  }

  console.log(`=== Tier 1 pipeline ===`);
  console.log(`Targets: ${targets.length}`);
  console.log(`Candidates per pattern: ${count}`);
  console.log(`Target depth: ${targetDepth}`);
  console.log(`Grader gate: ${skipGrade ? 'SKIPPED' : 'enabled'}`);
  console.log('');

  const stats = { processed: 0, skipped: 0, authorFailures: 0, totalAppended: 0 };

  for (let i = 0; i < targets.length; i++) {
    const t = targets[i];
    const slug = t.slug;
    console.log(`\n── [${i + 1}/${targets.length}] ${slug} (${t.domain}) ──`);

    const current = await patternCount(slug);
    if (current >= targetDepth) {
      console.log(`  Already at depth ${current} ≥ ${targetDepth} — skip.`);
      stats.skipped++;
      continue;
    }
    console.log(`  Current depth: ${current}. Generating ${count} candidates...`);

    const candPath = path.join(GEN_DIR, `candidate-items-${slug}.jsonl`);
    const accPath = path.join(GEN_DIR, `accepted-items-${slug}.jsonl`);

    // 1. Author (or use cached candidates if present and not forced)
    if (force || !(await exists(candPath))) {
      try {
        const authorArgs = ['scripts/authorMathItem.mjs', `--slug=${slug}`, `--count=${count}`];
        if (model) authorArgs.push(`--model=${model}`);
        await run('node', authorArgs);
      } catch (e) {
        console.log(`  AUTHOR FAILED: ${e.message}`);
        stats.authorFailures++;
        continue;
      }
    } else {
      console.log(`  Using cached candidates: ${candPath}`);
    }

    if (!(await exists(candPath))) {
      console.log(`  No candidates produced (validation rejected all). Skipping.`);
      stats.authorFailures++;
      continue;
    }

    // 2. Grade (unless --skip-grade)
    let toAppend = candPath;
    if (!skipGrade) {
      try {
        const gradeArgs = ['scripts/gradeCandidates.mjs', `--in=${candPath}`];
        if (model) gradeArgs.push(`--model=${model}`);
        await run('node', gradeArgs);
      } catch (e) {
        console.log(`  GRADE FAILED: ${e.message}`);
        continue;
      }
      if (!(await exists(accPath))) {
        console.log(`  Grader accepted 0 items. Skipping append.`);
        continue;
      }
      toAppend = accPath;
    }

    // 3. Append accepted items to the bank shard
    try {
      await run('node', ['scripts/appendCandidates.mjs', `--in=${toAppend}`]);
    } catch (e) {
      console.log(`  APPEND FAILED: ${e.message}`);
      continue;
    }

    // 4. Refresh audit to reflect new state for next iteration
    await refreshAudit();
    const newCount = await patternCount(slug);
    console.log(`  ${slug}: ${current} → ${newCount} items`);
    stats.totalAppended += (newCount - current);
    stats.processed++;
  }

  // 5. Final validation
  console.log('\n=== Running final bank validation ===');
  try {
    await run('npm', ['run', 'bank:validate']);
  } catch (e) {
    console.log(`  bank:validate failed: ${e.message}`);
    console.log('  (Fix violations before pushing — pre-existing test-file violations are not from this batch)');
  }

  console.log('\n=== TIER 1 RUN SUMMARY ===');
  console.log(`Patterns processed: ${stats.processed}`);
  console.log(`Patterns skipped (already at depth): ${stats.skipped}`);
  console.log(`Author failures: ${stats.authorFailures}`);
  console.log(`Total items appended: ${stats.totalAppended}`);
  console.log('');
  console.log('Next: review the diff, then `git add` + `git commit` + `! git push origin main`');
}

main().catch(e => { console.error('FATAL:', e); process.exit(1); });
