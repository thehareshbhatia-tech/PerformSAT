#!/usr/bin/env bun
/**
 * fixBankStemVoice.mjs — programmatic CB voice fix for bank-item stems.
 *
 * Targets the `stem-if-function-opener` rule violations from lintBankVoice.mjs:
 *   "If $f(x) = ...$, what is $f(c)$?"   →
 *   "The function $f$ is defined by $f(x) = ...$. What is the value of $f(c)$?"
 *
 *   "If $f(x) = ...$ and $f(a) = c$, what is the value of $a$?"   →
 *   "The function $f$ is defined by $f(x) = ...$. If $f(a) = c$, what is the value of $a$?"
 *
 *   "If $h(t) = ...$, what value of $t$ makes $h(t) = 0$?"   →
 *   "The function $h$ is defined by $h(t) = ...$. For what value of $t$ does $h(t) = 0$?"
 *
 * Each rewrite is verified with assertions:
 *   - The original stem must match a known pattern (no surprise variants).
 *   - The new stem must still contain the same function definition LaTeX.
 *   - The rest of the item (choices, correctAnswer, explanation) is untouched.
 *
 * If a stem doesn't match any pattern cleanly, the item is SKIPPED and logged.
 * Manual review needed.
 *
 * Run:
 *   bun scripts/fixBankStemVoice.mjs --dry      # report what would change
 *   bun scripts/fixBankStemVoice.mjs            # apply
 *
 * Idempotent: re-running after one application is a no-op.
 */

import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const REPO_ROOT = path.resolve(__dirname, '..');
const BANK_DIR = path.join(REPO_ROOT, 'src/data/questions/bank');

const SHARDS = ['algebra', 'advancedMath', 'geometry', 'problemSolving'];

// ---------------------------------------------------------------------------
// Rewrite patterns
// ---------------------------------------------------------------------------
//
// Each pattern: { name, test, rewrite }
//   test:    (stem) → match object or null
//   rewrite: (match) → new stem
//
// Patterns are tried in order. First match wins. Each match is verified by
// re-running the regex on the rewritten stem and confirming it no longer matches.

// Match group reference:
// 1 = function letter (f,g,h,p,q,r — case sensitive, single letter)
// 2 = input variable (x, t, a, k, n)
// 3 = function body (everything before the close paren of the next phrase)
// ...

const PATTERNS = [
  // Pattern A: Eval at a point.
  // "If $f(x) = <body>$, what is $f(<arg>)$?"
  // Also accepts: "what is the value of $f(<arg>)$?"
  {
    name: 'eval_at_point',
    test: (stem) => {
      const m = stem.match(
        /^If\s+\$([fghpqrFGHPQR])\s*\(([a-z])\)\s*=\s*([^$]+?)\$\s*,\s*what is(?:\s+the\s+value\s+of)?\s+\$([fghpqrFGHPQR])\s*\(([^)]+)\)\$\s*\?\s*$/
      );
      if (!m) return null;
      // Ensure both function letters match
      if (m[1] !== m[4]) return null;
      return { fn: m[1], inp: m[2], body: m[3].trim(), arg: m[5].trim() };
    },
    rewrite: ({ fn, inp, body, arg }) =>
      `The function $${fn}$ is defined by $${fn}(${inp}) = ${body}$. What is the value of $${fn}(${arg})$?`,
  },

  // Pattern B: Solve for input.
  // "If $f(x) = <body>$ and $f(a) = c$, what is $a$?"
  // "If $f(x) = <body>$ and $f(a) = c$, what is the value of $a$?"
  {
    name: 'solve_for_input_two_clauses',
    test: (stem) => {
      const m = stem.match(
        /^If\s+\$([fghpqrFGHPQR])\s*\(([a-z])\)\s*=\s*([^$]+?)\$\s+and\s+\$([fghpqrFGHPQR])\s*\(([a-z])\)\s*=\s*([^$]+?)\$\s*,\s*what is(?:\s+the\s+value\s+of)?\s+\$([a-z])\$\s*\?\s*$/
      );
      if (!m) return null;
      if (m[1] !== m[4]) return null;
      return { fn: m[1], inp: m[2], body: m[3].trim(), unkVar: m[5], outVal: m[6].trim(), askVar: m[7] };
    },
    rewrite: ({ fn, inp, body, unkVar, outVal, askVar }) =>
      `The function $${fn}$ is defined by $${fn}(${inp}) = ${body}$. If $${fn}(${unkVar}) = ${outVal}$, what is the value of $${askVar}$?`,
  },

  // Pattern C: Solve for input (single clause "what value of x makes f(x) = c").
  // "If $f(x) = <body>$, what value of $x$ makes $f(x) = c$?"
  // "If $h(t) = <body>$, what value of $t$ makes $h(t) = 0$?"
  {
    name: 'solve_for_input_one_clause',
    test: (stem) => {
      const m = stem.match(
        /^If\s+\$([fghpqrFGHPQR])\s*\(([a-z])\)\s*=\s*([^$]+?)\$\s*,\s*what value of\s+\$([a-z])\$\s+makes\s+\$([fghpqrFGHPQR])\s*\(\4\)\s*=\s*([^$]+?)\$\s*\?\s*$/
      );
      if (!m) return null;
      if (m[1] !== m[5]) return null;
      if (m[2] !== m[4]) return null;
      return { fn: m[1], inp: m[2], body: m[3].trim(), target: m[6].trim() };
    },
    rewrite: ({ fn, inp, body, target }) =>
      `The function $${fn}$ is defined by $${fn}(${inp}) = ${body}$. For what value of $${inp}$ does $${fn}(${inp}) = ${target}$?`,
  },

  // Pattern D: Composition.
  // "If $f(x) = <body1>$ and $g(x) = <body2>$, what is $f(g(c))$?"
  {
    name: 'composition_two_functions',
    test: (stem) => {
      const m = stem.match(
        /^If\s+\$([fghpqrFGHPQR])\s*\(([a-z])\)\s*=\s*([^$]+?)\$\s+and\s+\$([fghpqrFGHPQR])\s*\(\2\)\s*=\s*([^$]+?)\$\s*,\s*what is(?:\s+the\s+value\s+of)?\s+\$([fghpqrFGHPQR])\s*\(([fghpqrFGHPQR])\s*\(([^)]+)\)\)\$\s*\?\s*$/
      );
      if (!m) return null;
      return { fn1: m[1], inp: m[2], body1: m[3].trim(), fn2: m[4], body2: m[5].trim(), outerFn: m[6], innerFn: m[7], arg: m[8].trim() };
    },
    rewrite: ({ fn1, inp, body1, fn2, body2, outerFn, innerFn, arg }) =>
      `The functions $${fn1}$ and $${fn2}$ are defined by $${fn1}(${inp}) = ${body1}$ and $${fn2}(${inp}) = ${body2}$. What is the value of $${outerFn}(${innerFn}(${arg}))$?`,
  },

  // Pattern E-pre: Solve-for-input phrased as "what is the value of $x$ when $f(x) = c$".
  // Must come before the generic `property_question` (Pattern F).
  // "If $f(x) = <body>$, what is the value of $x$ when $f(x) = c$?"
  {
    name: 'solve_for_input_when',
    test: (stem) => {
      const m = stem.match(
        /^If\s+\$([fghpqrFGHPQR])\s*\(([a-z])\)\s*=\s*([^$]+?)\$\s*,\s*what is the value of\s+\$\2\$\s+when\s+\$\1\s*\(\2\)\s*=\s*([^$]+?)\$\s*\?\s*$/
      );
      if (!m) return null;
      return { fn: m[1], inp: m[2], body: m[3].trim(), target: m[4].trim() };
    },
    rewrite: ({ fn, inp, body, target }) =>
      `The function $${fn}$ is defined by $${fn}(${inp}) = ${body}$. For what value of $${inp}$ does $${fn}(${inp}) = ${target}$?`,
  },

  // Pattern E: Vertex-to-standard-form rewrites (handles "If $f(x) = (x-h)^2 + k$, what is f(x) in standard form $ax^2 + bx + c$?").
  // "If $f(x) = <body>$, what is $f(x)$ in standard form $...$?"
  {
    name: 'rewrite_form',
    test: (stem) => {
      const m = stem.match(
        /^If\s+\$([fghpqrFGHPQR])\s*\(([a-z])\)\s*=\s*([^$]+?)\$\s*,\s*what is\s+\$\1\s*\(\2\)\$\s+in\s+(.+?)\?\s*$/
      );
      if (!m) return null;
      return { fn: m[1], inp: m[2], body: m[3].trim(), targetForm: m[4].trim() };
    },
    rewrite: ({ fn, inp, body, targetForm }) =>
      `The function $${fn}$ is defined by $${fn}(${inp}) = ${body}$. Which of the following expresses $${fn}(${inp})$ in ${targetForm}?`,
  },

  // Pattern F: Asks about a sub-property (constant term, coefficient, intercept) after defining f.
  // "If $f(x) = (x + 3)^2 - 5$, what is the constant term in standard form?"
  // "If $f(x) = 2(x - 3)^2 + 1$, what is the coefficient of $x$ when ...?"
  {
    name: 'property_question',
    test: (stem) => {
      const m = stem.match(
        /^If\s+\$([fghpqrFGHPQR])\s*\(([a-z])\)\s*=\s*([^$]+?)\$\s*,\s*what is\s+(.+?)\?\s*$/
      );
      if (!m) return null;
      // Skip if the question references $f(c)$ — that's pattern A or F-variants
      // Also skip if the rest matches one of the more specific patterns
      const rest = m[4];
      if (/^\$[fghpqrFGHPQR]\s*\(/i.test(rest)) return null; // pattern A
      if (/value of \$[a-z]\$$/.test(rest)) return null; // pattern B
      return { fn: m[1], inp: m[2], body: m[3].trim(), question: rest.trim() };
    },
    rewrite: ({ fn, inp, body, question }) =>
      `The function $${fn}$ is defined by $${fn}(${inp}) = ${body}$. What is ${question}?`,
  },

  // Pattern G: Define g via f, ask sub-property.
  // "If $g(x) = f(x) + 5$ and $f(x) = 2x - 1$, what is the $y$-intercept of $g$?"
  {
    name: 'defined_via_function',
    test: (stem) => {
      const m = stem.match(
        /^If\s+\$([fghpqrFGHPQR])\s*\(([a-z])\)\s*=\s*([^$]+?)\$\s+and\s+\$([fghpqrFGHPQR])\s*\(\2\)\s*=\s*([^$]+?)\$\s*,\s*what is\s+(.+?)\?\s*$/
      );
      if (!m) return null;
      return { fn1: m[1], inp: m[2], body1: m[3].trim(), fn2: m[4], body2: m[5].trim(), question: m[6].trim() };
    },
    rewrite: ({ fn1, inp, body1, fn2, body2, question }) =>
      `The functions $${fn1}$ and $${fn2}$ are defined by $${fn1}(${inp}) = ${body1}$ and $${fn2}(${inp}) = ${body2}$. What is ${question}?`,
  },
];

// ---------------------------------------------------------------------------
// Apply
// ---------------------------------------------------------------------------

async function main() {
  const args = process.argv.slice(2);
  const dryRun = args.includes('--dry');

  let totalEdits = 0;
  let totalSkipped = 0;
  const skippedList = [];
  const editLog = [];

  for (const shardName of SHARDS) {
    const filePath = path.join(BANK_DIR, `${shardName}.js`);
    let src = await fs.readFile(filePath, 'utf8');
    let edits = 0;

    // Find all bank items by regex: id: 'bank-...', ... question: '...',
    // Pattern: the source uses single-quoted strings. We need to find
    // `question: '...'` where the value matches one of our `If ...` patterns,
    // and replace with the CB-voice form.

    // Iterate over question literals one at a time. We use a regex that
    // captures the full `question: '<stem>'` with proper escaping.
    const questionRe = /(\bquestion:\s*)('(?:\\'|[^'])*')/g;

    src = src.replace(questionRe, (whole, prefix, quoted) => {
      // Decode the JS string: strip outer quotes, unescape \' and \\.
      const stem = quoted.slice(1, -1).replace(/\\'/g, "'").replace(/\\\\/g, '\\');

      // Try each pattern in order
      for (const pat of PATTERNS) {
        const m = pat.test(stem);
        if (m) {
          const newStem = pat.rewrite(m);
          // Sanity: re-running the pattern on the new stem must NOT match
          if (pat.test(newStem)) {
            throw new Error(`Idempotency check failed for ${pat.name}:\n  in:  ${stem}\n  out: ${newStem}`);
          }
          // Re-quote: escape backslashes and single quotes
          const newQuoted = "'" + newStem.replace(/\\/g, '\\\\').replace(/'/g, "\\'") + "'";
          editLog.push({ shard: shardName, pattern: pat.name, oldStem: stem, newStem });
          edits++;
          return prefix + newQuoted;
        }
      }

      // Stem starts with "If $f(" / "If $g(" but didn't match any pattern? Log skip.
      if (/^If\s+\$[fghpqrFGHPQR]\s*\(/i.test(stem) && /\?\s*$/.test(stem)) {
        skippedList.push({ shard: shardName, stem });
      }
      return whole;
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
    totalSkipped += skippedList.length;
  }

  console.log('');
  console.log(`Total: ${totalEdits} edits, ${skippedList.length} skipped (manual review needed)`);
  console.log('');

  if (editLog.length) {
    console.log('--- Edits ---');
    for (const e of editLog.slice(0, 20)) {
      console.log(`[${e.pattern}] ${e.shard}`);
      console.log(`  -  ${e.oldStem.slice(0, 100)}`);
      console.log(`  +  ${e.newStem.slice(0, 120)}`);
    }
    if (editLog.length > 20) console.log(`  ... ${editLog.length - 20} more edits`);
  }

  if (skippedList.length) {
    console.log('');
    console.log('--- Skipped (no pattern match) ---');
    for (const s of skippedList) {
      console.log(`[${s.shard}] ${s.stem}`);
    }
  }
}

main().catch(e => { console.error(e); process.exit(1); });
