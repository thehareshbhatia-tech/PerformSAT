#!/usr/bin/env node
// Turns question-bank items into carousel post JSON scaffolds.
//
//   node bank-to-post.mjs --stats
//   node bank-to-post.mjs --list --domain algebra --limit 20
//   node bank-to-post.mjs --make bank-alg-003 --slug challenge-rate-per-mile --part 3
//
// The bank explanations already carry everything a challenge post needs: the
// correct choice, a per-distractor trap analysis, and a Test Day Takeaway. This
// reads that structure and emits cover/question/reveal/rule/cta.
//
// Only items that convert to clean unicode are offered — anything with LaTeX we
// can't render is rejected rather than shipped with a stray backslash.
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const BANK_DIR = join(HERE, '../../src/data/questions/bank');
const SHARDS = [
  ['algebra.js', 'algebraBank'],
  ['advancedMath.js', 'advancedMathBank'],
  ['geometry.js', 'geometryBank'],
  ['problemSolving.js', 'problemSolvingBank'],
];

// ── LaTeX → unicode ──────────────────────────────────────────────────────────
const SUP = { '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹', '+': '⁺', '-': '⁻', '−': '⁻', 'n': 'ⁿ', 'x': 'ˣ' };
const SUB = { '0': '₀', '1': '₁', '2': '₂', '3': '₃', '4': '₄', '5': '₅', '6': '₆', '7': '₇', '8': '₈', '9': '₉', 'n': 'ₙ', 'x': 'ₓ' };

const toScript = (s, map) => [...s].every((c) => map[c]) ? [...s].map((c) => map[c]).join('') : null;

function delatex(input) {
  if (input == null) return '';
  let s = String(input);

  // Digit-group braces first — \frac{20{,}800}{1.30} would otherwise defeat the
  // non-nesting fraction match below and leak raw LaTeX.
  s = s.replace(/\{,\}/g, ',');

  // Fractions: \frac{a}{b} / \dfrac{a}{b}. Simple atoms → a/b, else (a)/(b).
  const fracRe = /\\[dt]?frac\{([^{}]*)\}\{([^{}]*)\}/g;
  for (let i = 0; i < 6 && fracRe.test(s); i++) {
    s = s.replace(/\\[dt]?frac\{([^{}]*)\}\{([^{}]*)\}/g, (_, a, b) => {
      const wrap = (t) => (/^[A-Za-z0-9.,]+$/.test(t) ? t : `(${t})`);
      return `${wrap(a)}/${wrap(b)}`;
    });
  }

  s = s.replace(/\\sqrt\{([^{}]*)\}/g, (_, a) => `√${/^[A-Za-z0-9]+$/.test(a) ? a : `(${a})`}`);
  s = s.replace(/\\sqrt\s*(\w)/g, '√$1');

  // Super/subscripts.
  s = s.replace(/\^\{([^{}]+)\}/g, (m, a) => toScript(a, SUP) ?? `^${a}`);
  s = s.replace(/\^(-?\w)/g, (m, a) => toScript(a, SUP) ?? m);
  s = s.replace(/_\{([^{}]+)\}/g, (m, a) => toScript(a, SUB) ?? `_${a}`);
  s = s.replace(/_(\w)/g, (m, a) => toScript(a, SUB) ?? m);

  const SYM = [
    [/\\times/g, '×'], [/\\cdot/g, '·'], [/\\div/g, '÷'],
    [/\\leq?\b/g, '≤'], [/\\geq?\b/g, '≥'], [/\\neq/g, '≠'],
    [/\\pm/g, '±'], [/\\mp/g, '∓'], [/\\approx/g, '≈'],
    [/\\pi\b/g, 'π'], [/\\theta\b/g, 'θ'], [/\\infty/g, '∞'],
    [/\\Rightarrow/g, ' → '], [/\\rightarrow/g, ' → '], [/\\to\b/g, ' → '],
    [/\\ldots/g, '…'], [/\\dots/g, '…'],
    // Currency is escaped as \$ inside math; park it so the delimiter strip
    // below doesn't eat it along with the $…$ fences.
    [/\\%/g, '%'], [/\\\$/g, '@@USD@@'], [/\\&/g, '&'],
    [/\\left/g, ''], [/\\right/g, ''], [/\\checkmark/g, ''],
    [/\\!/g, ''], [/\\,/g, ' '], [/\\;/g, ' '], [/\\ /g, ' '],
    [/\\text\{([^{}]*)\}/g, '$1'], [/\\mathrm\{([^{}]*)\}/g, '$1'],
  ];
  for (const [re, to] of SYM) s = s.replace(re, to);

  s = s.replace(/\{,\}/g, ',');       // 5{,}632 → 5,632
  s = s.replace(/\$/g, '');            // drop math delimiters
  s = s.replace(/\{|\}/g, '');         // leftover grouping braces
  s = s.replace(/@@USD@@/g, '$');     // restore currency
  // Typographic minus only in math position — never inside hyphenated words
  // like "30-mile" or "y-intercept".
  s = s.replace(/(^|[^A-Za-z0-9])-(?= ?[\d(A-Za-z√.])/g, '$1−');
  // Inside expressions (2a-5, x-3) the hyphen is subtraction; "30-mile" and
  // "y-intercept" are excluded because a letter, not a digit, follows.
  s = s.replace(/([A-Za-z0-9])-(?=\d)/g, '$1−');
  s = s.replace(/[ \t]{2,}/g, ' ').trim();
  return s;
}

// An item is only usable if nothing LaTeX survived the conversion.
const isClean = (s) => !/\\/.test(s);

// ── Bank loading ─────────────────────────────────────────────────────────────
function loadShard(file, exportName) {
  const src = readFileSync(join(BANK_DIR, file), 'utf8');
  const body = src.replace(new RegExp(`^export const ${exportName}\\s*=`), 'return');
  // Pure data literal, no imports — safe to evaluate directly.
  return new Function(`${body}`)();
}

function loadBank() {
  const out = [];
  for (const [file, name] of SHARDS) {
    for (const q of loadShard(file, name)) out.push(q);
  }
  return out;
}

// ── Explanation parsing ──────────────────────────────────────────────────────
function parseExplanation(exp) {
  const out = { pattern: null, fastWay: null, takeaway: null, traps: {}, commonMistakes: null };
  if (!exp) return out;

  const pat = exp.match(/\*\*SAT Pattern:\s*([^*]+)\*\*/);
  if (pat) out.pattern = pat[1].trim();

  const fast = exp.match(/\*\*The Fast Way[^:]*:\*\*\s*([\s\S]*?)(?=\n\n|\*\*)/);
  if (fast) out.fastWay = fast[1].trim();

  const take = exp.match(/\*\*Test Day Takeaway:\*\*\s*([\s\S]*?)$/);
  if (take) out.takeaway = take[1].trim();

  const cm = exp.match(/\*\*Common Mistakes:\*\*\s*([\s\S]*?)(?=\n\n|\*\*Test Day)/);
  if (cm) out.commonMistakes = cm[1].trim();

  // * Choice A ($214$): the poll margin without scaling up.
  const trapBlock = exp.match(/\*\*Why the wrong answers are tempting:\*\*\s*([\s\S]*?)(?=\n\n\*\*|$)/);
  if (trapBlock) {
    const lineRe = /^\*\s*Choice\s+([A-D])\s*(?:\(([^)]*)\))?\s*:\s*(.+)$/gm;
    let m;
    while ((m = lineRe.exec(trapBlock[1]))) {
      out.traps[m[1]] = m[3].trim().replace(/\s+/g, ' ');
    }
  }
  return out;
}

function correctLetter(q, exp) {
  if (q.correctAnswer && /^[A-D]$/.test(q.correctAnswer)) return q.correctAnswer;
  const m = (exp || '').match(/\*\*Choice ([A-D]) is correct/);
  return m ? m[1] : null;
}

// ── Candidate selection ──────────────────────────────────────────────────────
function toCandidate(q) {
  if (q.type !== 'multiple-choice') return null;
  if (!Array.isArray(q.choices) || q.choices.length !== 4) return null;
  if (q.diagram || q.figure || q.table) return null;          // needs art we can't render
  if (/graph|figure|table|shown above|diagram/i.test(q.question || '')) return null;

  const parsed = parseExplanation(q.explanation);
  const letter = correctLetter(q, q.explanation);
  if (!letter) return null;
  if (Object.keys(parsed.traps).length < 2) return null;       // trap analysis is the whole point
  if (!parsed.takeaway) return null;

  const stem = delatex(q.question);
  const choices = q.choices.map((c) => delatex(c.text ?? c));
  const takeaway = delatex(parsed.takeaway);
  const idx = 'ABCD'.indexOf(letter);
  if (idx < 0 || !choices[idx]) return null;

  const trapLetter = Object.keys(parsed.traps)[0] === letter
    ? Object.keys(parsed.traps)[1]
    : Object.keys(parsed.traps)[0];
  if (!trapLetter) return null;
  const trapIdx = 'ABCD'.indexOf(trapLetter);
  const trapWhy = delatex(parsed.traps[trapLetter]);

  const pattern = parsed.pattern ? delatex(parsed.pattern) : null;
  // The reveal renders fastWay and the rule slide renders pattern, so both have
  // to survive conversion too — not just the stem and choices.
  const fastWay = parsed.fastWay
    ? delatex(parsed.fastWay).replace(/\s*(?:,?\s*which is|This is)\s+[Cc]hoice\s+[A-D]\.?/g, '').trim()
    : null;

  const all = [stem, ...choices, takeaway, trapWhy, pattern, fastWay].filter(Boolean);
  if (!all.every(isClean)) return null;
  if (stem.length > 175) return null;                          // question slide overflows
  if (choices.some((c) => c.length > 34)) return null;
  if (takeaway.length > 320) return null;

  return {
    id: q.id,
    domain: q.domain,
    skills: q.skills || [],
    difficulty: q.difficulty,
    pattern,
    stem,
    choices,
    correctIdx: idx,
    correctText: choices[idx],
    trapIdx,
    trapWhy,
    takeaway,
    fastWay,
  };
}

// Trim to at most `maxSentences` sentences and `maxWords` words — the reveal
// slide collides with the footer past roughly three sentences.
// Keeps whole sentences only — a body cut mid-clause reads as broken copy, so
// drop the trailing sentence instead of trimming inside one.
function tighten(text, maxSentences = 3, maxWords = 38) {
  const sentences = text.split(/(?<=[.!?])\s+/).slice(0, maxSentences);
  const kept = [];
  let words = 0;
  for (const s of sentences) {
    const n = s.split(/\s+/).length;
    if (kept.length && words + n > maxWords) break;
    kept.push(s);
    words += n;
  }
  return kept.join(' ').trim();
}

// Bank trap prose is sometimes a noun phrase ("an arithmetic slip…") and
// sometimes a verb phrase ("used the original slope…"). A colon is the one
// connector that stays grammatical for both.
const joinTrap = (letter, choiceText, why) =>
  `Most students pick ${letter} (${choiceText}): ${why}`;

const SUBJECT_CHIP = {
  algebra: 'SAT Math',
  'advanced-math': 'SAT Math',
  geometry: 'SAT Math',
  'problem-solving': 'SAT Math',
};

function buildPost(cand, { slug, part, seconds = 15, daysUntil }) {
  const trapLetter = 'ABCD'[cand.trapIdx];
  const trapText = cand.choices[cand.trapIdx];
  // Lead with why the answer is right, then name the trap the way a tutor would.
  // The reveal already stacks stem + four choice pills, so the body gets about
  // three rendered lines before it reaches the footer. The trap sentence is the
  // whole point of the post, so it always stays — the method line is what gives
  // way when the pair runs long.
  const trapSentence = `${joinTrap(trapLetter, trapText, cand.trapWhy).replace(/[.\s]*$/, '')}.`;
  let why = cand.fastWay ? tighten(cand.fastWay, 1, 20) : '';
  if (why && !/[.!?]$/.test(why)) why += '.';
  const words = (t) => t.split(/\s+/).length;
  const revealBody = why && words(why) + words(trapSentence) <= 40
    ? `${why} ${trapSentence}`
    : trapSentence;

  const caption = [
    daysUntil ? `${daysUntil} days until the August SAT.` : null,
    '',
    `The ${seconds}-second test${part ? `, round ${part}` : ''}. Most students pick the same wrong answer — comment your time and your pick.`,
    '',
    'Seva tells you WHY you missed it: content gap, trap answer, or rushing. Free trial — link in bio.',
    '',
    '#SAT #SATprep #SATmath #augustSAT #digitalSAT #sathacks #sattips #studytok #testprep',
  ].filter((l) => l !== null).join('\n');

  return {
    slug,
    _source: { bankId: cand.id, skills: cand.skills, difficulty: cand.difficulty, pattern: cand.pattern },
    caption,
    slides: [
      {
        type: 'cover',
        eyebrow: SUBJECT_CHIP[cand.domain] || 'SAT Math',
        title: `Solve this in ==${seconds} seconds== — most pick the trap`,
        badge: part ? `The ${seconds}-second test, round ${part}` : `The ${seconds}-second test`,
        stamp: 'August SAT',
      },
      {
        type: 'question',
        eyebrow: `The ${seconds}-second test`,
        stem: cand.stem,
        choices: cand.choices,
        prompt: 'Time yourself. Comment your time and your answer.',
      },
      {
        type: 'reveal',
        eyebrow: 'The answer',
        title: `${'ABCD'[cand.correctIdx]} — ${cand.correctText}`,
        body: revealBody,
        // No tip: the body already names the trap, and the extra callout pushes
        // this slide into the footer.
        choices: cand.choices,
        correct: cand.correctIdx,
        trap: cand.trapIdx,
      },
      {
        type: 'rule',
        eyebrow: 'The pattern',
        title: cand.pattern || 'The rule behind it',
        body: cand.takeaway,
        tip: null,
      },
      {
        type: 'cta',
        eyebrow: 'Why you actually miss questions',
        title: "Seva doesn't just grade you. It tells you *why* you fell for the trap.",
        points: [
          'Every miss diagnosed: content gap, trap answer, or rushing',
          'A study plan that rebuilds itself around your mistakes',
          'Real Bluebook-style practice tests and drills',
        ],
      },
    ],
  };
}

// ── CLI ──────────────────────────────────────────────────────────────────────
const argv = process.argv.slice(2);
const flag = (name) => {
  const i = argv.indexOf(`--${name}`);
  return i >= 0 ? (argv[i + 1] ?? true) : null;
};
const has = (name) => argv.includes(`--${name}`);

const bank = loadBank();
const candidates = bank.map(toCandidate).filter(Boolean);

if (has('stats')) {
  const byDomain = {};
  const byDiff = {};
  for (const c of candidates) {
    byDomain[c.domain] = (byDomain[c.domain] || 0) + 1;
    byDiff[c.difficulty] = (byDiff[c.difficulty] || 0) + 1;
  }
  console.log(`bank items:        ${bank.length}`);
  console.log(`carousel-ready:    ${candidates.length}`);
  console.log('by domain:', byDomain);
  console.log('by difficulty:', byDiff);
  process.exit(0);
}

if (has('list')) {
  const domain = flag('domain');
  const difficulty = flag('difficulty');
  const limit = Number(flag('limit') || 25);
  let rows = candidates;
  if (domain) rows = rows.filter((c) => c.domain === domain);
  if (difficulty) rows = rows.filter((c) => c.difficulty === difficulty);
  for (const c of rows.slice(0, limit)) {
    console.log(`${c.id}  [${c.difficulty}] ${(c.pattern || '').slice(0, 38).padEnd(38)} ${c.stem.slice(0, 70)}`);
  }
  console.log(`\n${rows.length} matching candidates.`);
  process.exit(0);
}

if (has('preview')) {
  const domain = flag('domain');
  const difficulty = flag('difficulty');
  const limit = Number(flag('limit') || 8);
  const skip = Number(flag('skip') || 0);
  let rows = candidates;
  if (domain) rows = rows.filter((c) => c.domain === domain);
  if (difficulty) rows = rows.filter((c) => c.difficulty === difficulty);
  for (const c of rows.slice(skip, skip + limit)) {
    const post = buildPost(c, { slug: 'preview' });
    const [, q, reveal, rule] = post.slides;
    console.log(`\n━━ ${c.id} [${c.difficulty}] ${c.pattern || ''}`);
    console.log(`Q:      ${q.stem}`);
    console.log(`        ${q.choices.map((t, i) => `${'ABCD'[i]}) ${t}`).join('   ')}`);
    console.log(`ANSWER: ${reveal.title}`);
    console.log(`REVEAL: ${reveal.body}`);
    console.log(`RULE:   ${rule.title} — ${rule.body}`);
  }
  process.exit(0);
}

const makeId = flag('make');
if (makeId) {
  const cand = candidates.find((c) => c.id === makeId);
  if (!cand) {
    console.error(`${makeId} is not a carousel-ready candidate. Run --list to see options.`);
    process.exit(1);
  }
  const slug = flag('slug') || `challenge-${makeId}`;
  const post = buildPost(cand, {
    slug,
    part: flag('part') ? Number(flag('part')) : null,
    seconds: Number(flag('seconds') || 15),
    daysUntil: flag('days') ? Number(flag('days')) : null,
  });
  const dest = join(HERE, 'posts', `${slug}.json`);
  if (existsSync(dest) && !has('force')) {
    console.error(`${dest} exists — pass --force to overwrite.`);
    process.exit(1);
  }
  writeFileSync(dest, `${JSON.stringify(post, null, 2)}\n`);
  console.log(`wrote posts/${slug}.json  (from ${makeId})`);
  process.exit(0);
}

console.log(`Usage:
  node bank-to-post.mjs --stats
  node bank-to-post.mjs --list [--domain algebra] [--difficulty medium] [--limit 25]
  node bank-to-post.mjs --make <bankId> --slug <slug> [--part N] [--seconds 15] [--days 21] [--force]`);
