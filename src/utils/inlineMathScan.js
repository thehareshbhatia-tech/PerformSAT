/**
 * Strict inline-math delimiter scanner — the ONE pairing implementation shared
 * by every `$...$` renderer (chat markdown, MathText, RichMathText).
 *
 * Why it exists (2026-07-15): each renderer had grown its own `$` pairing, and
 * two of them could garble an entire message from a single stray or misread
 * dollar sign: a currency heuristic that ate the OPENING `$` of math starting
 * with a bare number ("$3 + 4 = 7$") orphaned its closer, and the naive
 * non-greedy `/\$([^$]+?)\$/` pairing let any unbalanced `$` swallow prose
 * across sentences into math mode (KaTeX then renders the prose as spaced-out
 * italic symbols).
 *
 * Pairing rules (KaTeX auto-render / pandoc conventions):
 *   - the opener `$` must be immediately followed by a non-space;
 *   - the closer is the FIRST later `$`, must be immediately preceded by a
 *     non-space, and must NOT be immediately followed by a digit (keeps
 *     "$5-$10" money ranges literal);
 *   - the span may not contain a line break (configurable — MathText replaces
 *     real newlines with a placeholder char before pairing) and is capped in
 *     length.
 * Anything that fails the rules stays literal text, so plain currency
 * ("$10 and $1,200") needs no special-casing and one bad delimiter can never
 * cascade past its own line.
 *
 * When to use: call findInlineMathSpans to locate spans (e.g. to mask math
 * before markdown splitting), or pairInlineMath to replace each span through
 * a render callback.
 */

const DEFAULTS = {
  maxLen: 300,
  // Characters that terminate a span (a span must stay on one "line").
  lineBreakChars: '\n',
  // When true, a closer may be preceded by whitespace IF the last non-space
  // character of the span is a math operator — the authored-bank idiom
  // "$|expr| = $ a negative number" / "$1 - $ discount rate" / "Mean $> $".
  // Off by default (chat/AI text keeps the strict rule: "$10 and $15" must
  // never pair), on for MathText whose input is authored and lint-gated.
  operatorSpacedClose: false,
};

// A span that is just a number (optionally with thousands commas, decimals,
// and a trailing dash) is money-shaped: "$5-$10" pairing "5-" must stay
// literal. Used to scope the digit-after-closer rejection so "$\times$2"
// (authored multiplication before a digit) still renders as math.
const MONEY_SHAPED = /^\d[\d,]*(?:\.\d+)?\s*[-–—]?$/;
const OPERATOR_END = /[=<>+\-−±]\s+$/;

/**
 * Find all valid inline `$...$` spans in a string.
 * @param {string} str - text to scan (must NOT contain `$$` display math —
 *   extract that first; a `$$` here is treated as two literal dollars)
 * @param {{maxLen?: number, lineBreakChars?: string}} [opts]
 * @returns {Array<{start: number, end: number, latex: string}>} spans, where
 *   start/end index the opening/closing `$` inclusive and latex is the inner text
 */
export const findInlineMathSpans = (str, opts = {}) => {
  const { maxLen, lineBreakChars, operatorSpacedClose } = { ...DEFAULTS, ...opts };
  const spans = [];
  let i = 0;
  while (i < str.length) {
    if (str[i] !== '$') { i += 1; continue; }
    const next = str[i + 1];
    if (next === undefined || next === '$' || /\s/.test(next)) { i += 1; continue; }
    const close = str.indexOf('$', i + 1);
    if (close === -1) break; // no more dollars at all — nothing left to pair
    const latex = str.slice(i + 1, close);
    const afterClose = str[close + 1];
    const closerTouchesText = !/\s/.test(str[close - 1]);
    const closerAfterOperator = operatorSpacedClose && OPERATOR_END.test(latex);
    const valid = latex.length <= maxLen
      && ![...lineBreakChars].some((c) => latex.includes(c))
      && (closerTouchesText || closerAfterOperator)
      && !(afterClose !== undefined && /\d/.test(afterClose) && MONEY_SHAPED.test(latex));
    if (valid) {
      spans.push({ start: i, end: close, latex });
      i = close + 1;
    } else {
      i += 1;
    }
  }
  return spans;
};

/**
 * Replace every valid inline `$...$` span via a render callback; everything
 * else (including invalid/unpaired dollars) passes through untouched.
 * @param {string} str - text to scan (display `$$` must be extracted first)
 * @param {(latex: string, original: string) => string} render - returns the
 *   replacement for one span; receives the inner latex and the full `$...$`
 * @param {{maxLen?: number, lineBreakChars?: string}} [opts]
 * @returns {string} the text with math spans replaced
 */
export const pairInlineMath = (str, render, opts = {}) => {
  const spans = findInlineMathSpans(str, opts);
  if (spans.length === 0) return str;
  let out = '';
  let cursor = 0;
  for (const { start, end, latex } of spans) {
    out += str.slice(cursor, start);
    out += render(latex, str.slice(start, end + 1));
    cursor = end + 1;
  }
  out += str.slice(cursor);
  return out;
};
