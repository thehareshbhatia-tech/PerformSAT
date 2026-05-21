#!/usr/bin/env node
/**
 * gradeCandidates.mjs — score candidate bank items on the 5-dim CB authenticity
 * rubric using Claude. Accept items with all dimensions ≥ 4.
 *
 * Usage:
 *   ANTHROPIC_API_KEY=... node scripts/gradeCandidates.mjs --in=scripts/generated/candidate-items-{slug}.jsonl
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
import Anthropic from '@anthropic-ai/sdk';

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

async function gradeItem(client, item, model) {
  const prompt = RUBRIC + '\n\n' + JSON.stringify(item, null, 2);
  const response = await client.messages.create({
    model,
    max_tokens: 600,
    messages: [{ role: 'user', content: prompt }],
  });
  const text = response.content.map(c => c.type === 'text' ? c.text : '').join('');
  const cleaned = text.replace(/^```(?:json)?\s*/, '').replace(/```\s*$/, '').trim();
  let scores;
  try {
    scores = JSON.parse(cleaned);
  } catch (e) {
    return { error: 'parse_failed', raw: text.slice(0, 300) };
  }
  return scores;
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
  const model = args.model || 'claude-opus-4-7';

  if (!inPath) {
    console.error('Usage: node scripts/gradeCandidates.mjs --in=<candidates.jsonl> [--model=claude-opus-4-7]');
    process.exit(2);
  }
  if (!process.env.ANTHROPIC_API_KEY) {
    console.error('ERROR: ANTHROPIC_API_KEY env var required');
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
  console.log(`Model: ${model}, accept floor: all dims ≥ ${ACCEPT_FLOOR}/5\n`);

  const client = new Anthropic();
  const accepted = [];
  const rejected = [];

  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    process.stdout.write(`  [${i + 1}/${items.length}] ${item.id}... `);
    const scores = await gradeItem(client, item, model);
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
