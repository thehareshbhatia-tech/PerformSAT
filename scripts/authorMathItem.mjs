#!/usr/bin/env node
/**
 * authorMathItem.mjs — AI-author candidate math bank items for a target pattern.
 *
 * Usage:
 *   node scripts/authorMathItem.mjs --slug=slope-from-two-points --count=10
 *
 * Output: scripts/generated/candidate-items-{slug}.jsonl
 *
 * Auth: uses the `claude` CLI (Claude Code), which uses the user's Claude
 * Max OAuth session — no ANTHROPIC_API_KEY required. To override and use
 * the Anthropic SDK directly, set USE_ANTHROPIC_SDK=1 and ANTHROPIC_API_KEY.
 *
 * Pipeline position: this is the AUTHORING step. Items are then graded by
 * gradeCandidates.mjs (5-dim rubric); only items scoring 4+/5 across all
 * dims are appended to the bank shard. See scripts/runTier1.mjs for the
 * full author → grade → accept pipeline.
 *
 * Guardrails enforced in the prompt AND post-hoc validator:
 *   1. Pattern header slugifies to exactly the target slug (no parens in the
 *      `**SAT Pattern: ...**` header — those become long-tail variant slugs).
 *   2. Stem does not contain auditMissingDiagrams visual-cue phrases unless
 *      the item carries a `diagram` field.
 *   3. sourceStyleRef matches the target slug.
 *   4. authoredBy = 'performsat-engine'; createdAt = today.
 *   5. Required fields present: id, domain, skills, difficulty, type,
 *      question, correctAnswer, explanation, calculatorAllowed, tags,
 *      sourceStyleRef, authoredBy, createdAt.
 */

import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawn } from 'node:child_process';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(__dirname, '..');
const INV_PATH = path.join(REPO_ROOT, 'scripts/audit-output/practice-bank-inventory.json');
const OUT_DIR = path.join(REPO_ROOT, 'scripts/generated');

// Mirrors auditMissingDiagrams.mjs CUES. Any match in the stem without a
// `diagram` field is a guardrail violation.
const VISUAL_CUE_RE = /\b(scatter[\s-]?plots?|line of best fit|residuals?|box[\s-]?plots?|dot[\s-]?plots?|line plots?|histograms?|bar (?:chart|graph)s?|frequency (?:distribution|table)|two[\s-]?way table|contingency table|table (?:above|below|shown|gives|shows)|(?:the|following) table|(?:the )?figure (?:above|below|shown)|the figure shows|in the figure|(?:the diagram|the picture|the drawing) (?:above|below|shown))\b/i;

const DOMAIN_TO_FILE = {
  'algebra': 'algebra.js',
  'advanced-math': 'advancedMath.js',
  'problem-solving': 'problemSolving.js',
  'geometry': 'geometry.js',
};

const DOMAIN_TO_ID_PREFIX = {
  'algebra': 'bank-alg',
  'advanced-math': 'bank-am',
  'problem-solving': 'bank-ps',
  'geometry': 'bank-geo',
};

function parseArgs() {
  const args = {};
  for (const a of process.argv.slice(2)) {
    const m = a.match(/^--([\w-]+)(?:=(.*))?$/);
    if (m) args[m[1]] = m[2] === undefined ? true : m[2];
  }
  return args;
}

function kebab(s) {
  return String(s || '').trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function patternFromExplanation(text) {
  const m = String(text || '').match(/\*\*SAT Pattern:\s*([^*]+?)\s*\*\*/);
  return m ? kebab(m[1]) : null;
}

function titleCase(slug) {
  return slug.split('-').map(w => w[0]?.toUpperCase() + w.slice(1)).join(' ');
}

/**
 * Call Claude via the `claude` CLI in non-interactive mode. Uses the user's
 * Claude Max OAuth session — no API key needed.
 *
 * @param {string} prompt - user message text
 * @param {object} opts - { model: 'opus'|'sonnet'|'haiku' or full ID }
 * @returns {Promise<string>} the assistant's text reply
 */
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

async function main() {
  const args = parseArgs();
  const slug = args.slug;
  const count = parseInt(args.count || '10', 10);
  const model = args.model || 'opus';
  const useSdk = process.env.USE_ANTHROPIC_SDK === '1';

  if (!slug) {
    console.error('Usage: node scripts/authorMathItem.mjs --slug=<pattern-slug> [--count=10] [--model=opus]');
    process.exit(2);
  }
  if (useSdk && !process.env.ANTHROPIC_API_KEY) {
    console.error('ERROR: USE_ANTHROPIC_SDK=1 set but ANTHROPIC_API_KEY missing');
    process.exit(2);
  }

  // 1. Locate pattern in inventory
  const inv = JSON.parse(await fs.readFile(INV_PATH, 'utf8'));
  let target = null;
  for (const d of inv.math.domains) {
    const surf = d.surfaced.find(p => p.slug === slug);
    if (surf) { target = { ...surf, domain: d.domain, label: d.label }; break; }
    const hid = d.hidden.find(p => p.slug === slug);
    if (hid) { target = { ...hid, domain: d.domain, label: d.label }; break; }
  }
  if (!target) {
    console.error('Pattern not found in inventory:', slug);
    process.exit(2);
  }

  console.log(`Target: ${slug}  (domain=${target.domain}, current=${target.count} items)`);

  // 2. Load full anchor items from the bank shard
  const shardPath = path.join(REPO_ROOT, 'src/data/questions/bank', DOMAIN_TO_FILE[target.domain]);
  const shardSrc = await fs.readFile(shardPath, 'utf8');

  // Extract up to 3 anchor items: each starts at a line containing `id: '<ID>'`
  // and ends at the matching `}` followed by `,` or end-of-array. Use a
  // brace-counting walk instead of regex (the items contain {}).
  const anchorIds = target.samples.slice(0, 3).map(s => s.id);
  const anchors = [];
  for (const id of anchorIds) {
    const startMatch = shardSrc.indexOf(`id: '${id}'`);
    if (startMatch < 0) continue;
    // Walk backwards to find the opening `{`
    let s = startMatch;
    while (s > 0 && shardSrc[s] !== '{') s--;
    // Walk forwards to find the matching `}`
    let depth = 0, e = s;
    while (e < shardSrc.length) {
      if (shardSrc[e] === '{') depth++;
      else if (shardSrc[e] === '}') { depth--; if (depth === 0) { e++; break; } }
      e++;
    }
    anchors.push(shardSrc.slice(s, e));
  }

  // 3. Find next available ID in the domain shard
  const prefix = DOMAIN_TO_ID_PREFIX[target.domain];
  const idMatches = [...shardSrc.matchAll(new RegExp(`${prefix}-(\\d+)`, 'g'))].map(m => parseInt(m[1], 10));
  const startId = Math.max(...idMatches) + 1;
  console.log(`  ${anchors.length} anchors extracted. Next ID: ${prefix}-${startId}.`);

  // 4. Build prompt
  const today = new Date().toISOString().slice(0, 10);
  const patternTitle = titleCase(slug);

  const userPrompt = `You are authoring original digital-SAT math practice items for the PerformSAT/SEVA question bank.

TARGET PATTERN: ${slug}
PATTERN TITLE (use VERBATIM in the explanation header): ${patternTitle}
DOMAIN: ${target.domain}
COUNT: ${count} new items

=== HARD RULES (violations are auto-rejected by the validator) ===

1. The explanation MUST start with this EXACT header line (no parenthetical qualifiers, no variants):
   **SAT Pattern: ${patternTitle}**

2. The stem MUST NOT contain visual-cue phrases unless you also include a "diagram" field. Forbidden phrases include: "scatterplot", "line of best fit", "residual", "the figure", "the table above/below/shown", "histogram", "box plot", "dot plot". For pattern items that traditionally relate to a chart, reword to use algebraic phrasing instead (e.g., "linear model", "using y-hat = ...").

3. sourceStyleRef must be exactly: ${slug}

4. Every distractor in choices must encode a SPECIFIC common student mistake (sign error, wrong formula, off-by-one, dropped term, swapped operation). The explanation's "Why the wrong answers are tempting" block must name the mistake for each wrong choice.

5. All scenarios, numbers, and contexts must be ORIGINAL — do not reproduce or near-clone College Board items. Transform contexts (different scenarios), change all values.

=== BANK ITEM SCHEMA ===

Each item must be a JSON object with these fields (no extras, no comments):

{
  "id": "${prefix}-NNN",
  "domain": "${target.domain}",
  "skills": [<one or more skill IDs — see anchors below for valid values>],
  "difficulty": "easy" | "medium" | "hard",
  "type": "multiple-choice" | "fill-in",
  "question": "<stem text; LaTeX inline via $...$>",
  "choices": [{"id":"A","text":"..."},{"id":"B","text":"..."},{"id":"C","text":"..."},{"id":"D","text":"..."}],
  "correctAnswer": "A" | "B" | "C" | "D",
  "explanation": "<markdown with required structure — see below>",
  "calculatorAllowed": true | false,
  "tags": [],
  "sourceStyleRef": "${slug}",
  "authoredBy": "performsat-engine",
  "createdAt": "${today}"
}

For fill-in items: OMIT the choices field. correctAnswer is the numeric/string answer.

=== EXPLANATION STRUCTURE (required) ===

**SAT Pattern: ${patternTitle}**

**Choice X is correct.**

**The Fast Way (~Ns):** <one-line method, e.g., the shortcut a sharp student would use>

**The Full Solution:**
<step-by-step derivation with LaTeX>

**Why the wrong answers are tempting:**
* Choice A: <specific mistake this distractor encodes>
* Choice B: <specific mistake>
* Choice C: <specific mistake>
(omit the row for the correct answer)

**Test Day Takeaway:** <one-line strategic insight, generalizable>

=== DIFFICULTY MIX TARGET ===

For ${count} items, aim for roughly:
- 30% easy (single-step, direct application)
- 45% medium (2-3 steps, one common-mistake distractor)
- 25% hard (multi-step reasoning, subtle traps)

=== IDS ===

Assign sequential IDs starting at ${prefix}-${startId}. So the first item is "${prefix}-${startId}", second is "${prefix}-${startId + 1}", etc.

=== STYLE ANCHORS ===

Here are ${anchors.length} existing items for this pattern. Use them to calibrate VOICE and DIFFICULTY but do not reproduce or near-clone them. Each new item should have a completely different scenario and numbers:

${anchors.map((a, i) => `--- Anchor ${i + 1} ---\n${a}`).join('\n\n')}

=== OUTPUT ===

Return a single JSON array of ${count} items. No prose before or after. No markdown fences. No comments. Just \`[ {...}, {...}, ... ]\`.`;

  // 5. Call Claude (via CLI by default, SDK if USE_ANTHROPIC_SDK=1)
  console.log(`  Calling ${useSdk ? 'Anthropic SDK' : 'claude CLI'} model=${model}...`);
  const t0 = Date.now();
  let text;
  if (useSdk) {
    const { default: Anthropic } = await import('@anthropic-ai/sdk');
    const client = new Anthropic();
    const response = await client.messages.create({
      model: model.startsWith('claude-') ? model : `claude-${model}-4-7`,
      max_tokens: 16000,
      messages: [{ role: 'user', content: userPrompt }],
    });
    text = response.content.map(c => c.type === 'text' ? c.text : '').join('');
  } else {
    text = await callClaudeCLI(userPrompt, { model });
  }
  const elapsed = ((Date.now() - t0) / 1000).toFixed(1);
  console.log(`  Response: ${text.length} chars, ${elapsed}s`);

  // 6. Parse JSON
  let candidates;
  try {
    const cleaned = text.replace(/^```(?:json)?\s*/, '').replace(/```\s*$/, '').trim();
    candidates = JSON.parse(cleaned);
  } catch (e) {
    console.error('JSON parse failed:', e.message);
    console.error('First 400 chars:', text.slice(0, 400));
    console.error('Last 400 chars:', text.slice(-400));
    process.exit(1);
  }
  if (!Array.isArray(candidates)) {
    console.error('Expected JSON array, got:', typeof candidates);
    process.exit(1);
  }
  console.log(`  Parsed ${candidates.length} candidates`);

  // 7. Validate each candidate
  const validated = [];
  const rejected = [];
  const requiredFields = ['id', 'domain', 'skills', 'difficulty', 'type', 'question', 'correctAnswer', 'explanation', 'calculatorAllowed', 'tags', 'sourceStyleRef', 'authoredBy', 'createdAt'];

  for (const item of candidates) {
    const issues = [];
    for (const f of requiredFields) {
      if (item[f] === undefined || item[f] === null) issues.push(`missing field: ${f}`);
    }
    if (item.type === 'multiple-choice' && (!Array.isArray(item.choices) || item.choices.length !== 4)) {
      issues.push(`multiple-choice needs 4 choices, got ${item.choices?.length}`);
    }
    const actualSlug = patternFromExplanation(item.explanation);
    if (actualSlug !== slug) {
      issues.push(`pattern header slugifies to "${actualSlug}", expected "${slug}"`);
    }
    if (item.question && VISUAL_CUE_RE.test(item.question) && !item.diagram) {
      issues.push(`stem has visual cue "${item.question.match(VISUAL_CUE_RE)[0]}" but no diagram field`);
    }
    if (item.sourceStyleRef !== slug) {
      issues.push(`sourceStyleRef "${item.sourceStyleRef}" doesn't match expected "${slug}"`);
    }
    if (item.domain !== target.domain) {
      issues.push(`domain "${item.domain}" doesn't match target "${target.domain}"`);
    }
    if (issues.length) {
      rejected.push({ item, issues });
    } else {
      validated.push(item);
    }
  }

  console.log(`  Validated: ${validated.length}/${candidates.length}`);
  if (rejected.length) {
    console.log(`  Rejections (${rejected.length}):`);
    for (const r of rejected) {
      console.log(`   - ${r.item?.id || '(no id)'}: ${r.issues.join('; ')}`);
    }
  }

  // 8. Write outputs
  await fs.mkdir(OUT_DIR, { recursive: true });
  const outPath = args.out || path.join(OUT_DIR, `candidate-items-${slug}.jsonl`);
  const rejPath = outPath.replace(/\.jsonl$/, '.rejected.jsonl');
  if (validated.length) await fs.writeFile(outPath, validated.map(JSON.stringify).join('\n') + '\n');
  if (rejected.length) await fs.writeFile(rejPath, rejected.map(JSON.stringify).join('\n') + '\n');

  console.log('');
  console.log('=== SUMMARY ===');
  console.log(`Pattern: ${slug}`);
  console.log(`Candidates: ${candidates.length}`);
  console.log(`Validated: ${validated.length}`);
  console.log(`Rejected:  ${rejected.length}`);
  if (validated.length) console.log(`Output:    ${outPath}`);
  if (rejected.length) console.log(`Rejected:  ${rejPath}`);
  console.log('');
  console.log('Next step: grade with `bun scripts/gradeBankAuthenticity.mjs --candidates=' + outPath + '` (when grader wrapper is built)');
}

main().catch(e => { console.error('FATAL:', e); process.exit(1); });
