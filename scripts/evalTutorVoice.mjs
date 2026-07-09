#!/usr/bin/env node
/**
 * evalTutorVoice.mjs — does the AI tutor sound like a person?
 *
 * Extracts the LIVE system prompts from src/services/aiTutorService.js, runs
 * realistic student scenarios through the exact production model settings
 * (claude-sonnet-4-6, thinking disabled, effort medium, max_tokens 3000), and
 * lints every reply for the AI-tells the VOICE section bans: formulaic
 * openers, closing ceremony, missing contractions, exclamation spam,
 * bullet-pointed conversation, self-reference as an AI.
 *
 * Usage:
 *   ANTHROPIC_API_KEY=sk-ant-... node scripts/evalTutorVoice.mjs
 *   ANTHROPIC_API_KEY=... node scripts/evalTutorVoice.mjs --scenario=frustrated
 *   ANTHROPIC_API_KEY=... node scripts/evalTutorVoice.mjs --full   # print full replies
 *
 * Exit code 0 when every scenario passes the lint; 1 otherwise — safe to wire
 * into a pre-deploy check later.
 */
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const API_KEY = process.env.ANTHROPIC_API_KEY;
if (!API_KEY) {
  console.error('ANTHROPIC_API_KEY is required. Usage: ANTHROPIC_API_KEY=... node scripts/evalTutorVoice.mjs');
  process.exit(1);
}

const args = process.argv.slice(2);
const onlyScenario = (args.find((a) => a.startsWith('--scenario=')) || '').split('=')[1] || null;
const printFull = args.includes('--full');

// ── Extract the live prompts from the service source ────────────────────────
// The prompts are template literals; internal backticks are escaped (\`), so
// the raw sequence "`;" only appears at each literal's true end.
const source = readFileSync(join(ROOT, 'src/services/aiTutorService.js'), 'utf8');

const extractLiteral = (constName) => {
  const start = source.indexOf(`const ${constName} = \``);
  if (start === -1) throw new Error(`Could not find ${constName} in aiTutorService.js`);
  const bodyStart = start + `const ${constName} = \``.length;
  const end = source.indexOf('`;', bodyStart);
  if (end === -1) throw new Error(`Unterminated literal for ${constName}`);
  return source
    .slice(bodyStart, end)
    .replace(/\\`/g, '`')
    .replace(/\\\$\{/g, '${');
};

const TUTOR_VOICE = extractLiteral('TUTOR_VOICE');
// The prompts interpolate ${TUTOR_VOICE}; substitute it the way the bundle does.
const SYSTEM_PROMPT = extractLiteral('SYSTEM_PROMPT').replace('${TUTOR_VOICE}', TUTOR_VOICE);

// ── Scenarios: realistic practice contexts + student messages ───────────────
const QUESTION_CONTEXT = `
>>> PRACTICE QUESTION CONTEXT <<<
The student is working on this SAT Math practice question:
DIFFICULTY: MEDIUM
SKILLS TESTED: Linear equations in two variables
TYPE: Multiple choice

QUESTION: A gym charges a one-time membership fee of $50 plus $15 per month. Which equation gives the total cost C, in dollars, after m months?

ANSWER CHOICES:
A) C = 50m + 15
B) C = 15m + 50
C) C = 65m
D) C = 15m - 50

>>> ANSWER HAS BEEN REVEALED — EXPERT BREAKDOWN MODE <<<
STUDENT CHOSE: A
RESULT: WRONG
CORRECT ANSWER: B
FULL EXPLANATION: **Choice B is correct.** The monthly rate $15$ multiplies the number of months $m$, and the one-time fee $50$ is the constant.
**Why the wrong answers are tempting:**
* Choice A ($C = 50m + 15$): swaps the rate and the fee — treats the one-time fee as if it repeats monthly.
* Choice C ($C = 65m$): adds the fee into the monthly rate.
* Choice D ($C = 15m - 50$): subtracts the fee instead of adding it.

THE STUDENT'S SPECIFIC ERROR (from the answer key): Choice A = swaps the rate and the fee — treats the one-time fee as if it repeats monthly. Do not guess at their mistake — this IS their mistake; coach them on recognizing and avoiding exactly this trap.
`;

const SCENARIOS = [
  {
    id: 'frustrated',
    label: 'Frustrated student, wrong answer',
    system: SYSTEM_PROMPT + '\n\n' + QUESTION_CONTEXT,
    messages: [{ role: 'user', content: "ugh i ALWAYS mix these up. i'm so bad at word problems" }],
  },
  {
    id: 'quick',
    label: 'Quick narrow question',
    system: SYSTEM_PROMPT + '\n\n' + QUESTION_CONTEXT,
    messages: [{ role: 'user', content: 'why is it B and not A' }],
  },
  {
    id: 'followup',
    label: 'Multi-turn follow-up (opener variety check)',
    system: SYSTEM_PROMPT + '\n\n' + QUESTION_CONTEXT,
    messages: [
      { role: 'user', content: 'why is it B and not A' },
      { role: 'assistant', content: "B puts the $15 where it belongs — multiplying the months. The $50 fee happens once, so it stands alone as the constant. A swaps them: it charges you the $50 fee every single month and tacks the monthly rate on once. Same numbers, opposite jobs." },
      { role: 'user', content: 'ok but how do i not fall for that next time' },
    ],
  },
  {
    id: 'wantsanswer',
    label: 'Wants the answer (Socratic, pre-reveal)',
    system: SYSTEM_PROMPT + '\n\n' + QUESTION_CONTEXT.replace(/>>> ANSWER HAS BEEN REVEALED[\s\S]*$/, ''),
    messages: [{ role: 'user', content: 'just tell me the answer i dont have time' }],
  },
];

// ── The AI-tell lint ─────────────────────────────────────────────────────────
const BANNED_PATTERNS = [
  [/^\s*(great|good|excellent|awesome) question/i, 'formulaic opener ("Great question")'],
  [/^\s*(certainly|absolutely|of course|sure)[!,.]/i, 'formulaic opener ("Certainly!")'],
  [/i'?d be happy to/i, '"I\'d be happy to"'],
  [/let'?s dive in/i, '"Let\'s dive in"'],
  [/it'?s worth noting/i, '"It\'s worth noting"'],
  [/i hope this helps/i, '"I hope this helps"'],
  [/feel free to (ask|reach)/i, '"Feel free to ask"'],
  [/does (that|this) make sense\s*\?\s*$/im, 'closing "Does that make sense?"'],
  [/as an ai\b|as a language model|i'?m an ai\b/i, 'self-identifies as AI'],
  [/the information provided|based on the context/i, 'mentions its context'],
];

const lintReply = (text) => {
  const problems = [];
  for (const [re, label] of BANNED_PATTERNS) {
    if (re.test(text)) problems.push(label);
  }
  const bangs = (text.match(/!/g) || []).length;
  if (bangs > 1) problems.push(`${bangs} exclamation points (max 1)`);
  // Stiff register: uncontracted forms in prose. Allow a couple (quotes of the
  // question, formal statements); flag when they dominate.
  const stiff = (text.match(/\b(do not|that is|it is|you are|there is)\b/gi) || []).length;
  const loose = (text.match(/\b(don't|that's|it's|you're|there's|here's|can't|won't|isn't)\b/gi) || []).length;
  if (stiff > 2 && stiff > loose) problems.push(`stiff register (${stiff} uncontracted vs ${loose} contracted)`);
  // Bullet-pointed conversation: lists in a short reply.
  const bullets = (text.match(/^\s*[-*•]\s/gm) || []).length;
  if (bullets > 0 && text.length < 500) problems.push(`${bullets} bullets in a short reply`);
  return problems;
};

// ── Run ──────────────────────────────────────────────────────────────────────
const callClaude = async (system, messages) => {
  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': API_KEY,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model: 'claude-sonnet-4-6',
      max_tokens: 3000,
      thinking: { type: 'disabled' },
      output_config: { effort: 'medium' },
      system,
      messages,
    }),
  });
  if (!res.ok) throw new Error(`API ${res.status}: ${(await res.text()).slice(0, 300)}`);
  const data = await res.json();
  return (data.content || []).filter((b) => b.type === 'text').map((b) => b.text).join('');
};

let failures = 0;
for (const scenario of SCENARIOS) {
  if (onlyScenario && scenario.id !== onlyScenario) continue;
  process.stdout.write(`\n━━━ ${scenario.label} (${scenario.id}) ━━━\n`);
  try {
    const reply = await callClaude(scenario.system, scenario.messages);
    const problems = lintReply(reply);
    const preview = printFull ? reply : reply.slice(0, 600) + (reply.length > 600 ? '\n…[truncated, use --full]' : '');
    console.log(preview);
    if (problems.length) {
      failures++;
      console.log(`\nVOICE LINT: FAIL — ${problems.join('; ')}`);
    } else {
      console.log(`\nVOICE LINT: PASS (${reply.length} chars)`);
    }
  } catch (err) {
    failures++;
    console.error(`ERROR: ${err.message}`);
  }
}

console.log(`\n${failures === 0 ? 'ALL SCENARIOS PASS' : `${failures} scenario(s) FAILED the voice lint`}`);
process.exit(failures === 0 ? 0 : 1);
