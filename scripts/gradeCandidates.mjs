#!/usr/bin/env node
/**
 * gradeCandidates.mjs — score candidate bank items on the 5-dim CB authenticity
 * rubric using Claude. Accept items with all dimensions ≥ 4.
 *
 * Usage:
 *   node scripts/gradeCandidates.mjs --in=scripts/generated/candidate-items-{slug}.jsonl
 *
 * Auth: uses the `claude` CLI (Claude Code), which uses the user's Claude
 * Max OAuth session — no ANTHROPIC_API_KEY required. To override and use
 * the Anthropic SDK directly, set USE_ANTHROPIC_SDK=1 and ANTHROPIC_API_KEY.
 *
 * Outputs:
 *   scripts/generated/accepted-items-{slug}.jsonl   — items passing the 4/5 floor on every dim
 *   scripts/generated/rejected-items-{slug}.jsonl   — items with at least one dim < 4 (incl. scores + reasons)
 *
 * Relationship to gradeBankAuthenticity.mjs:
 *   That script uses codex (OpenAI) to grade items ALREADY in the bank,
 *   anchored to real CB QBank items. This script is a pre-merge gate that
 *   uses Claude to grade CANDIDATE items (not yet in the bank). For
 *   higher-rigor cross-model validation, you can still run
 *   gradeBankAuthenticity.mjs after merging.
 */

import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawn } from 'node:child_process';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(__dirname, '..');
const OUT_DIR = path.join(REPO_ROOT, 'scripts/generated');

// 5-dim acceptance floor. Items must score ≥ this on every dimension.
const ACCEPT_FLOOR = 4;

function parseArgs() {
  const args = {};
  for (const a of process.argv.slice(2)) {
    const m = a.match(/^--([\w-]+)(?:=(.*))?$/);
    if (m) args[m[1]] = m[2] === undefined ? true : m[2];
  }
  return args;
}

const RUBRIC = `Score this SAT math practice item against the 5-dimension College Board authenticity rubric. Each dimension is an integer 1-5.

DIMENSIONS:
1. stemClarity (1=ambiguous or two-part; 3=workable; 5=crisp, one unambiguous question)
2. distractorQuality (1=lazy/random distractors; 3=plausible; 5=each wrong choice encodes a SPECIFIC named common student mistake)
3. notation (1=inconsistent LaTeX or missing $...$; 3=mostly correct; 5=CB-grade typography — consistent fractions, units, spacing)
4. difficulty (1=mis-calibrated vs labeled difficulty; 3=plausible; 5=matches the labeled difficulty exactly, no easy/hard mismatch)
5. overall (1=obviously bank-quality; 3=passable; 5=indistinguishable from an official CB item)

ACCEPTANCE CRITERIA: All dims ≥ ${ACCEPT_FLOOR}/5.

Return ONLY a JSON object (no prose, no fences):
{
  "stemClarity": N,
  "distractorQuality": N,
  "notation": N,
  "difficulty": N,
  "overall": N,
  "reasons": "<one short sentence — REQUIRED if any dim < 4, briefly stating what would have to change to lift to a 4 or 5>"
}

ITEM:
`;

function callClaudeCLI(prompt, opts = {}) {
  return new Promise((resolve, reject) => {
    const args = [
      '-p',
      '--output-format', 'json',
      '--model', opts.model || 'opus',
      '--no-session-persistence',
      '--exclude-dynamic-system-prompt-sections',
    ];
    const proc = spawn('claude', args, { stdio: ['pipe', 'pipe', 'inherit'] });
    let stdout = '';
    proc.stdout.on('data', c => { stdout += c.toString(); });
    proc.on('error', reject);
    proc.on('exit', code => {
      if (code !== 0) return reject(new Error(`claude exited ${code}`));
      try {
        const env = JSON.parse(stdout);
        if (env.is_error) return reject(new Error(`claude error: ${env.result || 'unknown'}`));
        resolve(env.result || '');
      } catch (e) {
        reject(new Error(`couldn't parse claude output envelope: ${e.message}; raw: ${stdout.slice(0, 200)}`));
      }
    });
    proc.stdin.write(prompt);
    proc.stdin.end();
  });
}

async function gradeItem(item, model, useSdk, sdkClient) {
  const prompt = RUBRIC + '\n\n' + JSON.stringify(item, null, 2);
  let text;
  try {
    if (useSdk) {
      const response = await sdkClient.messages.create({
        model: model.startsWith('claude-') ? model : `claude-${model}-4-7`,
        max_tokens: 600,
        messages: [{ role: 'user', content: prompt }],
      });
      text = response.content.map(c => c.type === 'text' ? c.text : '').join('');
    } else {
      text = await callClaudeCLI(prompt, { model });
    }
  } catch (e) {
    return { error: 'call_failed', detail: e.message };
  }
  const cleaned = text.replace(/^```(?:json)?\s*/, '').replace(/```\s*$/, '').trim();
  try {
    return JSON.parse(cleaned);
  } catch (e) {
    return { error: 'parse_failed', raw: text.slice(0, 300) };
  }
}

function isAccepted(scores) {
  if (!scores || scores.error) return false;
  return (
    typeof scores.stemClarity === 'number' && scores.stemClarity >= ACCEPT_FLOOR &&
    typeof scores.distractorQuality === 'number' && scores.distractorQuality >= ACCEPT_FLOOR &&
    typeof scores.notation === 'number' && scores.notation >= ACCEPT_FLOOR &&
    typeof scores.difficulty === 'number' && scores.difficulty >= ACCEPT_FLOOR &&
    typeof scores.overall === 'number' && scores.overall >= ACCEPT_FLOOR
  );
}

async function main() {
  const args = parseArgs();
  const inPath = args.in;
  const model = args.model || 'opus';
  const useSdk = process.env.USE_ANTHROPIC_SDK === '1';

  if (!inPath) {
    console.error('Usage: node scripts/gradeCandidates.mjs --in=<candidates.jsonl> [--model=opus]');
    process.exit(2);
  }
  if (useSdk && !process.env.ANTHROPIC_API_KEY) {
    console.error('ERROR: USE_ANTHROPIC_SDK=1 set but ANTHROPIC_API_KEY missing');
    process.exit(2);
  }

  const raw = await fs.readFile(inPath, 'utf8');
  const items = raw.split('\n').filter(Boolean).map((l, i) => {
    try { return JSON.parse(l); } catch (e) {
      console.error(`Line ${i + 1}: JSON parse failed: ${e.message}`);
      return null;
    }
  }).filter(Boolean);

  console.log(`Grading ${items.length} candidates from ${inPath}`);
  console.log(`Model: ${model} via ${useSdk ? 'Anthropic SDK' : 'claude CLI'}, accept floor: all dims ≥ ${ACCEPT_FLOOR}/5\n`);

  let sdkClient = null;
  if (useSdk) {
    const { default: Anthropic } = await import('@anthropic-ai/sdk');
    sdkClient = new Anthropic();
  }
  const accepted = [];
  const rejected = [];

  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    process.stdout.write(`  [${i + 1}/${items.length}] ${item.id}... `);
    const scores = await gradeItem(item, model, useSdk, sdkClient);
    if (scores.error) {
      console.log(`PARSE ERROR — counted as rejected`);
      rejected.push({ ...item, _scores: scores, _reason: 'grader parse failed' });
      continue;
    }
    const accept = isAccepted(scores);
    const dims = `[${scores.stemClarity}/${scores.distractorQuality}/${scores.notation}/${scores.difficulty}/${scores.overall}]`;
    console.log(`${dims} ${accept ? 'ACCEPT' : 'REJECT'}${scores.reasons ? ' — ' + scores.reasons : ''}`);
    if (accept) {
      accepted.push({ ...item, _scores: scores });
    } else {
      rejected.push({ ...item, _scores: scores });
    }
  }

  // Strip the _scores annotation from accepted items before writing (clean items)
  const acceptedClean = accepted.map(({ _scores, ...item }) => item);

  await fs.mkdir(OUT_DIR, { recursive: true });
  const baseName = path.basename(inPath, '.jsonl').replace(/^candidate-items-/, '');
  const accPath = path.join(OUT_DIR, `accepted-items-${baseName}.jsonl`);
  const rejPath = path.join(OUT_DIR, `rejected-items-${baseName}.jsonl`);
  if (acceptedClean.length) await fs.writeFile(accPath, acceptedClean.map(JSON.stringify).join('\n') + '\n');
  if (rejected.length) await fs.writeFile(rejPath, rejected.map(JSON.stringify).join('\n') + '\n');

  console.log('');
  console.log('=== SUMMARY ===');
  console.log(`Candidates graded: ${items.length}`);
  console.log(`Accepted:          ${accepted.length}  (${(100 * accepted.length / items.length).toFixed(0)}%)`);
  console.log(`Rejected:          ${rejected.length}`);
  if (accepted.length) console.log(`Accepted file:     ${accPath}`);
  if (rejected.length) console.log(`Rejected file:     ${rejPath}`);
  console.log('');
  console.log('Next: append accepted items to the bank shard with scripts/appendCandidates.mjs');
}

main().catch(e => { console.error('FATAL:', e); process.exit(1); });
