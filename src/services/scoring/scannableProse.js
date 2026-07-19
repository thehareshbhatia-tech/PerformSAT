import { findInlineMathSpans } from '../../utils/inlineMathScan';

/**
 * Scannable layout for diagnosis prose (2026-07-19 user ruling — the same
 * one the AI tutor got on 07-15: "I don't want users to read paragraphs
 * like it is a book").
 *
 * These helpers restructure tutor-voice narrative for scanning WITHOUT
 * touching the words: the first sentence becomes a bold lead, the rest is
 * regrouped into 1-2 sentence paragraphs, and the numeric phrases — the
 * deciding words of a diagnosis — are marked for inline bolding. Nothing
 * is shortened, reordered, or templated; this is format only.
 */

// Sentence terminators we must NOT split after: mid-sentence abbreviations
// that appear in tutor prose. (Decimals like "0.75" are safe — no space
// follows the period — and math spans are masked before splitting.)
const ABBREV_RE = /(?:\b(?:vs|e\.g|i\.e|approx|Mr|Ms|Mrs|Dr|No)\.)$/;

// Private-use placeholders for $...$ math spans: marker + index char.
// Model/bank text can never contain these codepoints, so a token can't be
// forged from input (same stash model as MathText itself).
const MASK_MARK = '\uE0F0';
const MASK_BASE = 0xE200;
const MASK_RE = /\uE0F0([\uE200-\uE2FF])/g;

function maskMath(text) {
  const spans = findInlineMathSpans(text);
  if (spans.length === 0) return { masked: text, stash: [] };
  const stash = [];
  let out = '';
  let cursor = 0;
  spans.forEach((s) => {
    out += text.slice(cursor, s.start);
    out += MASK_MARK + String.fromCharCode(MASK_BASE + stash.length);
    stash.push(text.slice(s.start, s.end));
    cursor = s.end;
  });
  out += text.slice(cursor);
  return { masked: out, stash };
}

function unmaskMath(text, stash) {
  if (stash.length === 0) return text;
  return text.replace(MASK_RE, (_, idx) => stash[idx.charCodeAt(0) - MASK_BASE] ?? '');
}

/**
 * Split flowing prose into complete sentences.
 *
 * Respects decimals, common abbreviations, and $...$ math spans (masked so
 * an equation's punctuation can never split a sentence).
 *
 * @param {string} text - tutor-voice prose
 * @returns {string[]} sentences, punctuation kept
 */
export function splitSentences(text) {
  const raw = (text || '').trim();
  if (!raw) return [];
  const { masked, stash } = maskMath(raw);

  const out = [];
  let buf = '';
  const parts = masked.split(/(?<=[.!?])\s+(?=["'(]?[A-Z0-9])/);
  parts.forEach((part) => {
    buf = buf ? buf + ' ' + part : part;
    // Re-join when the split landed on an abbreviation ("45s vs. 70s").
    if (ABBREV_RE.test(buf.trim())) return;
    out.push(buf);
    buf = '';
  });
  if (buf) out.push(buf);

  return out.map((s) => unmaskMath(s, stash).trim()).filter(Boolean);
}

// A bold lead longer than this is itself a wall. Old stored narratives
// open with 40-word enumeration sentences; the cap keeps the anchor short.
const LEAD_MAX = 160;
// An enumeration-shaped sentence ("Three patterns cost you points: ...")
// splits naturally at an early colon — the label bolds, the tail flows.
const LEAD_COLON_MAX = 110;

function regroup(sentences) {
  const rest = [];
  for (let i = 0; i < sentences.length; i += 2) {
    rest.push(sentences.slice(i, i + 2).join(' '));
  }
  return rest;
}

/**
 * Restructure one prose blob into a scannable shape: a bold lead sentence
 * plus the remaining sentences regrouped into short (max 2-sentence)
 * paragraphs. Every word survives — this is layout, not editing.
 *
 * Lead discipline: a first sentence over ~160 chars would be a bold wall,
 * so it splits at an early colon when it has one (enumeration shape); with
 * no colon, `lead` comes back null and the caller renders everything as
 * body prose with numbers emphasized instead.
 *
 * @param {string} text - a composed diagnosis/behavior paragraph
 * @returns {{lead: string|null, rest: string[]}|null} null when text is empty
 */
export function buildScannable(text) {
  const sentences = splitSentences(text);
  if (sentences.length === 0) return null;
  const [first, ...tail] = sentences;

  if (first.length > LEAD_MAX) {
    const colonIdx = first.indexOf(':');
    if (colonIdx > 0 && colonIdx <= LEAD_COLON_MAX) {
      const remainder = first.slice(colonIdx + 1).trim();
      return {
        lead: first.slice(0, colonIdx + 1),
        rest: regroup(remainder ? [remainder, ...tail] : tail),
      };
    }
    return { lead: null, rest: regroup(sentences) };
  }

  return { lead: first, rest: regroup(tail) };
}

// The numeric phrases a student scans for: counts, times, percentages,
// fractions, point costs — with their unit words attached so the bold
// reads as one fact ("45 seconds", "4 of 7", "~30 points", "3/4").
const NUM = '\\d(?:[\\d,.]*\\d)?'; // number core — never ends on , or .
const NUM_PHRASE_RE = new RegExp(
  `([~≈]?${NUM}` +
  `(?:\\s?\\/\\s?${NUM})?` +       // optional fraction tail  3/4
  '(?:%|s\\b)?' +                  // optional % or bare-seconds "45s"
  '(?:-point)?' +                  // "50-point (gap)"
  `(?:\\s+(?:points?|seconds?|minutes?|questions?|answers?|switches?|misses?|blanks?|tests?|of\\s+${NUM}))?` +
  ')', 'g');

/**
 * Mark the numeric phrases in prose for inline bolding, leaving $...$ math
 * spans untouched (they render through MathText as-is).
 *
 * @param {string} text - one paragraph of prose
 * @returns {Array<{text: string, bold: boolean}>} ordered segments
 */
export function emphasizeNumbers(text) {
  const raw = (text || '');
  if (!raw) return [];
  const { masked, stash } = maskMath(raw);

  const segments = [];
  let cursor = 0;
  let m;
  NUM_PHRASE_RE.lastIndex = 0;
  while ((m = NUM_PHRASE_RE.exec(masked)) !== null) {
    if (m.index > cursor) segments.push({ text: masked.slice(cursor, m.index), bold: false });
    segments.push({ text: m[1], bold: true });
    cursor = m.index + m[1].length;
  }
  if (cursor < masked.length) segments.push({ text: masked.slice(cursor), bold: false });

  return segments
    .map((s) => ({ ...s, text: unmaskMath(s.text, stash) }))
    .filter((s) => s.text.length > 0);
}
