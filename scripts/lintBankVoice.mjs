#!/usr/bin/env bun
/**
 * lintBankVoice.mjs — mechanical lint for SAT-voice drift in bank items.
 *
 * Scans the four math bank shards (algebra, advancedMath, geometry, problemSolving)
 * for the most common drift patterns away from the CB stem voice documented in
 * docs/CB_AUTHENTICITY_RUBRIC.md.
 *
 * This is a precision-tuned linter — every rule has a concrete CB-anchored
 * counter-example in CB_AUTHENTICITY_RUBRIC.md or cbEducatorQBank.json. False
 * positives are minimized by checking surrounding context.
 *
 * Run:
 *   bun scripts/lintBankVoice.mjs
 *   bun scripts/lintBankVoice.mjs --shard=algebra
 *   bun scripts/lintBankVoice.mjs --json > scripts/generated/bank-voice-violations.json
 *
 * Output:
 *   stdout: per-item violation lines (severity:rule:bankId — stem excerpt)
 *   --json: structured JSONL
 *
 * Exit code: 0 always (this is a report, not a gate). To gate CI later, wire in
 *   a --strict mode that exits 1 on any severity=error.
 */

import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const REPO_ROOT = path.resolve(__dirname, '..');
const BANK_DIR = path.join(REPO_ROOT, 'src/data/questions/bank');

const SHARDS = ['algebra', 'advancedMath', 'geometry', 'problemSolving'];

// ---------------------------------------------------------------------------
// Rules
// ---------------------------------------------------------------------------
//
// Each rule has: id, severity, test(item) → null | { reason, excerpt }
//
// severity = 'error' is a hard CB-mismatch (the stem voice is wrong, or notation
// is broken, or the item violates the rubric structurally).
//
// severity = 'warn' is a soft drift (the item still works but reads like a
// textbook problem, not a CB problem).
//
// CB voice anchors (from cbEducatorQBank.json, verified at audit time):
//   - "The function $f$ is defined by $f(x) = ...$. ..."
//   - "The function $f$ is defined by $f(x) = ...$. What is the value of $f(c)$?"
//   - "The function $f$ is defined by $f(x) = ...$. For what value of $x$ does ..."
//   - "[equation]. The given equation represents ..."
//   - "[equation]. The equation shown ..."
//   - "A [noun] ... [equation]. [follow-up sentence asking the question]"
//
// Never uses: "If $f(x) = ...$, what is ..." (textbook voice; CB always names
// the function first in a declarative sentence, then asks).

const RULES = [
  {
    id: 'stem-if-function-opener',
    severity: 'error',
    description: 'Stem opens with "If $f(x) = " — CB voice uses "The function $f$ is defined by $f(x) = ..."',
    test: (item) => {
      // Match: stem starts with "If $f(x) =" / "If $g(x) =" / "If $h(x) =" etc.,
      // followed somewhere by "what is" or "for what value".
      // This catches the most common bank drift (about half of function-notation items).
      const stem = item.question || '';
      if (/^\s*If\s+\$[fghpqrFGHPQR]\s*\(\s*[a-z]\s*\)\s*=/i.test(stem)) {
        // Only flag if the question is a function-evaluation or solve-for-input
        // pattern. Skip stems that present a system/inequality with multiple
        // conditions (those legitimately use "If" as a conditional).
        if (/what is/i.test(stem) || /for what value/i.test(stem) || /value of/i.test(stem)) {
          return {
            reason: 'CB voice: replace with "The function $f$ is defined by $f(x) = ...$. What is the value of $f(c)$?" / "For what value of $x$ does $f(x) = c$?"',
            excerpt: stem.slice(0, 120),
          };
        }
      }
      return null;
    },
  },

  {
    id: 'stem-if-with-question',
    severity: 'warn',
    description: 'Stem opens with "If [equation], what is..." — soft form of CB-voice drift, but sometimes acceptable for genuine conditionals',
    test: (item) => {
      const stem = item.question || '';
      // Stricter pattern: opens with "If ", then a math statement, then ", what" — but NOT a function-call form (those are caught by the harder rule above).
      if (/^\s*If\s+\$[^$]+\$\s*,?\s+(what|for what)/i.test(stem)) {
        // Exclude if it's the function-call form (already caught above)
        if (/^\s*If\s+\$[fghpqrFGHPQR]\s*\(/i.test(stem)) return null;
        return {
          reason: 'Consider rephrasing — CB prefers "The equation shown..." or "[equation]. What is the value of..." over "If [equation], what is..."',
          excerpt: stem.slice(0, 120),
        };
      }
      return null;
    },
  },

  {
    id: 'stem-conversational-when',
    severity: 'warn',
    description: 'Stem uses "what is X when Y" — CB voice uses "What is the value of X" + restructure',
    test: (item) => {
      const stem = item.question || '';
      // "what is the value of x when f(x) = ..." — pretty narrow signal
      if (/what is the value of \$?\w+\$?\s+when\s+\$?[fghpqr]\s*\(/i.test(stem)) {
        return {
          reason: 'CB voice: "For what value of $x$ does $f(x) = c$?" instead of "what is the value of $x$ when $f(x) = c$?"',
          excerpt: stem.slice(0, 120),
        };
      }
      return null;
    },
  },

  {
    id: 'latex-mixed-delimiters',
    severity: 'error',
    description: 'LaTeX uses \\(...\\) or \\[...\\] — CB style requires $...$ exclusively',
    test: (item) => {
      const text = (item.question || '') + ' ' + (item.explanation || '');
      if (/\\\(|\\\)|\\\[|\\\]/.test(text)) {
        // Exclude legitimate \checkmark etc.
        const filtered = text.replace(/\\check/g, '').replace(/\\Rightarrow/g, '').replace(/\\Leftarrow/g, '').replace(/\\cdot/g, '').replace(/\\frac/g, '').replace(/\\sqrt/g, '').replace(/\\text/g, '').replace(/\\pi/g, '').replace(/\\pm/g, '').replace(/\\le/g, '').replace(/\\ge/g, '').replace(/\\ne/g, '').replace(/\\neq/g, '').replace(/\\leq/g, '').replace(/\\geq/g, '').replace(/\\circ/g, '').replace(/\\angle/g, '').replace(/\\overline/g, '').replace(/\\triangle/g, '').replace(/\\parallel/g, '').replace(/\\perp/g, '').replace(/\\sin/g, '').replace(/\\cos/g, '').replace(/\\tan/g, '').replace(/\\log/g, '').replace(/\\ln/g, '').replace(/\\infty/g, '').replace(/\\quad/g, '').replace(/\\,/g, '').replace(/\\;/g, '').replace(/\\!/g, '').replace(/\\\\/g, '');
        if (/\\\(|\\\)|\\\[|\\\]/.test(filtered)) {
          return {
            reason: 'Replace \\(...\\) or \\[...\\] with $...$',
            excerpt: filtered.slice(0, 120),
          };
        }
      }
      return null;
    },
  },

  {
    id: 'html-entities',
    severity: 'error',
    description: 'Bare HTML entities like &#x02212; or &nbsp; — must be decoded',
    test: (item) => {
      const text = (item.question || '') + ' ' + (item.explanation || '');
      const m = text.match(/&#x[0-9a-f]+;|&[a-z]{2,8};/i);
      if (m && !['&amp;', '&lt;', '&gt;', '&quot;', '&apos;'].includes(m[0])) {
        return {
          reason: 'Decode HTML entity to plain text (Unicode or LaTeX)',
          excerpt: text.slice(Math.max(0, m.index - 20), m.index + 40),
        };
      }
      return null;
    },
  },

  {
    id: 'mathspeak-residue',
    severity: 'error',
    description: 'MathSpeak alttext leakage: StartFraction, Superscript, "left parenthesis", etc.',
    test: (item) => {
      const text = (item.question || '') + ' ' + (item.explanation || '');
      // Use word boundaries to avoid matching MathSpeak fragments inside legit words
      // ("subscript" in "subscription", "baseline" as math vocab, etc.).
      // Also require MathSpeak terms to appear in the SAT-attextual context (multiple
      // terms together, or alongside the bracketed `[...]` MathML delimiters).
      if (/\b(StartFraction|EndFraction|Superscript|Baseline)\b/.test(text)) {
        // Case-sensitive: real MathSpeak uses PascalCase (StartFraction). Legit
        // English usage is lowercase ("baseline performance"). This neatly
        // filters out the false positives in bank-ps-009 and bank-alg-092.
        return {
          reason: 'MathSpeak residue — extract from QBank without alttext or replace manually',
          excerpt: text.match(/\b(StartFraction|EndFraction|Superscript|Subscript|left parenthesis|right parenthesis|Baseline|or equals)\b[^.]{0,60}/)?.[0] || '',
        };
      }
      if (/\b(left parenthesis|right parenthesis|or equals)\b/i.test(text)) {
        return {
          reason: 'MathSpeak residue — extract from QBank without alttext or replace manually',
          excerpt: text.match(/\b(left parenthesis|right parenthesis|or equals)\b[^.]{0,60}/i)?.[0] || '',
        };
      }
      return null;
    },
  },

  {
    id: 'explanation-missing-sat-pattern',
    severity: 'error',
    description: 'Explanation must open with **SAT Pattern: <name>**',
    test: (item) => {
      const expl = item.explanation || '';
      if (!/^\*\*SAT Pattern:\s+[^*]+\*\*/i.test(expl)) {
        return {
          reason: 'Explanation must open with "**SAT Pattern: <name>**" on first line',
          excerpt: expl.slice(0, 80),
        };
      }
      return null;
    },
  },

  {
    id: 'explanation-missing-choice-correct',
    severity: 'error',
    description: 'Explanation must contain **Choice X is correct.** (MC) or **The correct answer is...** (FIB)',
    test: (item) => {
      const expl = item.explanation || '';
      if (item.type === 'multiple-choice') {
        if (!/\*\*Choice [A-D] is correct\.\*\*/i.test(expl)) {
          return {
            reason: 'MC items need "**Choice X is correct.**" marker',
            excerpt: expl.slice(0, 200),
          };
        }
      } else if (item.type === 'fill-in') {
        if (!/\*\*(The correct answer is|The answer is)/i.test(expl)) {
          return {
            reason: 'Fill-in items need "**The correct answer is $N$.**" marker',
            excerpt: expl.slice(0, 200),
          };
        }
      }
      return null;
    },
  },

  {
    id: 'explanation-missing-distractor-block',
    severity: 'warn',
    description: 'MC explanation lacks "Why the wrong answers are tempting" or "Common Mistakes" block',
    test: (item) => {
      if (item.type !== 'multiple-choice') return null;
      const expl = item.explanation || '';
      // Look for either the preferred header or the alternative
      const hasBlock = /\*\*Why the wrong answers/i.test(expl)
        || /\*\*Common Mistakes/i.test(expl)
        || /\*\*Distractor (analysis|breakdown)/i.test(expl)
        // Also accept items that list each wrong choice inline (A, B, C with derivations)
        || (/(?:^|\n)\*\s*[ABCD][:\s)]/m.test(expl) && expl.match(/(?:^|\n)\*\s*[ABCD]/gm)?.length >= 2);
      if (!hasBlock) {
        return {
          reason: 'Add "**Why the wrong answers are tempting:**" block with one bullet per distractor naming the misconception',
          excerpt: expl.slice(-200),
        };
      }
      return null;
    },
  },

  {
    id: 'distractor-no-derivation',
    severity: 'warn',
    description: 'Distractor bullets lack derivation (just "wrong" or "incorrect")',
    test: (item) => {
      if (item.type !== 'multiple-choice') return null;
      const expl = item.explanation || '';
      // Find the "Why" section (until end or next bold header) and check that
      // each lettered bullet has at least 15 chars of derivation.
      const m = expl.match(/\*\*(Why the wrong answers|Common Mistakes)[^*]*\*\*\s*([\s\S]+?)(?=\*\*|$)/i);
      if (!m) return null; // Caught by missing-distractor-block rule
      const block = m[2];
      const bulletMatches = block.match(/(?:^|\n)\*\s*[A-D][:\s)][^\n*]+/gm) || [];
      const shortBullets = bulletMatches.filter(b => b.length < 25); // very short = lazy
      if (shortBullets.length >= 1) {
        return {
          reason: `Distractor bullet(s) too short (${shortBullets.length} short of ${bulletMatches.length}). Each should name the misconception AND show the wrong derivation.`,
          excerpt: shortBullets[0].trim().slice(0, 120),
        };
      }
      return null;
    },
  },

  {
    id: 'stem-too-short',
    severity: 'warn',
    description: 'Stem under 30 chars — likely too terse for a real SAT item',
    test: (item) => {
      const stem = item.question || '';
      if (stem.length < 30) {
        return {
          reason: `Stem only ${stem.length} chars — real CB stems usually 40-300 chars with explicit context`,
          excerpt: stem,
        };
      }
      return null;
    },
  },

  {
    id: 'choices-not-four',
    severity: 'error',
    description: 'MC items must have exactly 4 choices',
    test: (item) => {
      if (item.type !== 'multiple-choice') return null;
      const choices = item.choices || [];
      if (choices.length !== 4) {
        return {
          reason: `Has ${choices.length} choices; CB requires exactly 4`,
          excerpt: choices.map(c => c.id || '?').join(','),
        };
      }
      const ids = choices.map(c => c.id).sort().join('');
      if (ids !== 'ABCD') {
        return {
          reason: `Choice IDs are ${ids}; must be A, B, C, D`,
          excerpt: ids,
        };
      }
      // Check no duplicate answers
      const texts = choices.map(c => c.text);
      if (new Set(texts).size < texts.length) {
        return {
          reason: 'Duplicate choice text — two choices have the same text',
          excerpt: texts.join(' | '),
        };
      }
      return null;
    },
  },

  {
    id: 'stem-uses-given-not-shown',
    severity: 'warn',
    description: 'Stem uses "given equation" without showing it on its own line — CB style displays equations',
    test: (item) => {
      const stem = item.question || '';
      // "The given equation" or "the equation above" only makes sense if an equation precedes it
      if (/the\s+given\s+(equation|expression|inequality|function)/i.test(stem)) {
        // Look for a display equation prefix (the equation appears alone before the prose)
        // Heuristic: must start with `$...$` or have a `\n` before the prose.
        const hasDisplay = /^\$[^$]+\$\s*\n/.test(stem) || /^\$[^$]+\$\s+[A-Z]/.test(stem);
        if (!hasDisplay) {
          return {
            reason: 'Reference "the given equation" requires the equation to appear first (as a display line). Otherwise restructure as "The equation $eq$..."',
            excerpt: stem.slice(0, 120),
          };
        }
      }
      return null;
    },
  },
];

// ---------------------------------------------------------------------------
// Bank loading
// ---------------------------------------------------------------------------

async function loadShard(shardName) {
  const filePath = path.join(BANK_DIR, `${shardName}.js`);
  const url = pathToFileURL(filePath).href;
  const mod = await import(url + '?t=' + Date.now());
  // Each shard exports either a named array (e.g. ALGEBRA_BANK) or default
  for (const key of Object.keys(mod)) {
    if (Array.isArray(mod[key])) return mod[key];
  }
  if (Array.isArray(mod.default)) return mod.default;
  throw new Error(`Could not find array export in ${shardName}.js`);
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  const args = process.argv.slice(2);
  const shardArg = args.find(a => a.startsWith('--shard='));
  const jsonMode = args.includes('--json');
  const verbose = args.includes('--verbose');
  const wantedShards = shardArg ? [shardArg.split('=')[1]] : SHARDS;

  const allViolations = [];

  for (const shardName of wantedShards) {
    const items = await loadShard(shardName);
    for (const item of items) {
      for (const rule of RULES) {
        const result = rule.test(item);
        if (result) {
          allViolations.push({
            shard: shardName,
            bankId: item.id,
            rule: rule.id,
            severity: rule.severity,
            skills: item.skills || [],
            difficulty: item.difficulty,
            type: item.type,
            sourceStyleRef: item.sourceStyleRef,
            reason: result.reason,
            excerpt: result.excerpt,
          });
        }
      }
    }
  }

  if (jsonMode) {
    for (const v of allViolations) process.stdout.write(JSON.stringify(v) + '\n');
    return;
  }

  // Group by rule and report counts
  const byRule = new Map();
  for (const v of allViolations) {
    if (!byRule.has(v.rule)) byRule.set(v.rule, []);
    byRule.get(v.rule).push(v);
  }

  const totalItems = (await Promise.all(wantedShards.map(loadShard))).reduce((s, arr) => s + arr.length, 0);

  console.log(`Bank voice lint — ${totalItems} items across ${wantedShards.join(', ')}`);
  console.log(`Total violations: ${allViolations.length} (errors: ${allViolations.filter(v => v.severity === 'error').length}, warnings: ${allViolations.filter(v => v.severity === 'warn').length})`);
  console.log('');

  const sortedRules = [...byRule.entries()].sort((a, b) => b[1].length - a[1].length);
  for (const [ruleId, vs] of sortedRules) {
    const rule = RULES.find(r => r.id === ruleId);
    const errCount = vs.filter(v => v.severity === 'error').length;
    const warnCount = vs.filter(v => v.severity === 'warn').length;
    console.log(`[${rule.severity.toUpperCase()}] ${ruleId} (${vs.length} hits, ${errCount}E/${warnCount}W)`);
    console.log(`  ${rule.description}`);
    if (verbose) {
      for (const v of vs.slice(0, 8)) {
        console.log(`    ${v.bankId} (${v.shard}): ${v.excerpt}`);
      }
      if (vs.length > 8) console.log(`    ... ${vs.length - 8} more`);
    } else {
      const sampleIds = vs.slice(0, 5).map(v => v.bankId).join(', ');
      console.log(`    sample: ${sampleIds}${vs.length > 5 ? '...' : ''}`);
    }
    console.log('');
  }

  // Items with multiple violations (worst offenders)
  const byItem = new Map();
  for (const v of allViolations) {
    if (!byItem.has(v.bankId)) byItem.set(v.bankId, []);
    byItem.get(v.bankId).push(v);
  }
  const worstItems = [...byItem.entries()]
    .filter(([_, vs]) => vs.length >= 2)
    .sort((a, b) => b[1].length - a[1].length)
    .slice(0, 20);

  if (worstItems.length) {
    console.log('--- Worst offenders (≥2 rule hits) ---');
    for (const [id, vs] of worstItems) {
      console.log(`  ${id}: ${vs.map(v => v.rule).join(' + ')}`);
    }
  }
}

main().catch(e => { console.error(e); process.exit(1); });
