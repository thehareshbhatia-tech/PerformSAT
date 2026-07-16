import React from 'react';
import { MathText } from './MathText';
import { findInlineMathSpans } from '../utils/inlineMathScan';

/**
 * Splits text on markdown emphasis (**bold**, *accent*, `code`) and renders
 * each fragment through MathText so $...$ / $$...$$ are also parsed.
 *
 * Import and use anywhere educational content may contain mixed
 * markdown emphasis + LaTeX math.
 *
 * Math is MASKED before the emphasis split (2026-07-15): a `*` inside a math
 * span ("$a * b$ and $c * d$") used to pair with a `*` in a neighboring span
 * or bullet, splitting both spans apart and rendering fragments of LaTeX as
 * prose. Spans are swapped for inert private-use tokens, the split runs on
 * the masked text, and each fragment restores its tokens before MathText
 * parses it.
 */
const MASK_OPEN = '';
const MASK_CLOSE = '';
const MASK_RE = /(\d+)/g;
const ESCAPED_DOLLAR = '\uE102';
const ESCAPED_DOLLAR_RE = /\uE102/g;

const maskMath = (text) => {
  const stash = [];
  // Authored currency is escaped as \$ (the MathText convention) — swap it
  // for an inert token FIRST so the span scanner never reads an escaped
  // dollar as a delimiter ("\$64 ... **\$80**" must not pair as math).
  let masked = text.replace(/\\\$/g, ESCAPED_DOLLAR);
  // Display math next ($$...$$ may span lines), then inline via the shared
  // strict scanner (authored content — operator-spaced closers allowed).
  masked = masked.replace(/\$\$[\s\S]*?\$\$/g, (m) => {
    stash.push(m);
    return MASK_OPEN + (stash.length - 1) + MASK_CLOSE;
  });
  const spans = findInlineMathSpans(masked, { operatorSpacedClose: true });
  if (spans.length) {
    let out = '';
    let cursor = 0;
    for (const { start, end } of spans) {
      out += masked.slice(cursor, start);
      stash.push(masked.slice(start, end + 1));
      out += MASK_OPEN + (stash.length - 1) + MASK_CLOSE;
      cursor = end + 1;
    }
    out += masked.slice(cursor);
    masked = out;
  }
  return { masked, stash };
};

const unmask = (fragment, stash) => fragment
  .replace(MASK_RE, (_, i) => stash[Number(i)] ?? '')
  .replace(ESCAPED_DOLLAR_RE, '\\$');

export const renderRichText = (text) => {
  if (!text) return null;
  const { masked, stash } = maskMath(String(text));
  return masked.split(/(\*\*.*?\*\*|\*.*?\*|`[^`]+`)/).map((rawPart, i) => {
    const part = unmask(rawPart, stash);
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={i} style={{ fontWeight: 600, color: 'var(--color-slate-900)' }}>
          <MathText>{part.slice(2, -2)}</MathText>
        </strong>
      );
    }
    if (part.startsWith('*') && part.endsWith('*')) {
      return (
        <em key={i} style={{ color: 'var(--color-brand-orange-600)', fontStyle: 'normal', fontWeight: 500 }}>
          <MathText>{part.slice(1, -1)}</MathText>
        </em>
      );
    }
    if (part.startsWith('`') && part.endsWith('`')) {
      return (
        <code key={i} style={{
          fontFamily: 'Georgia, "Times New Roman", serif', fontStyle: 'italic',
          background: 'var(--color-slate-100)', padding: '2px 6px', borderRadius: 'var(--radius-sm)',
          fontSize: '0.9em', color: 'var(--color-slate-900)',
        }}>{part.slice(1, -1)}</code>
      );
    }
    return <MathText key={i}>{part}</MathText>;
  });
};

/**
 * Component wrapper — accepts children string and renders through renderRichText.
 * Use as <RichMathText>some **bold** with $x^2$</RichMathText>
 */
const RichMathText = ({ children, text, className = '', style = {} }) => {
  const content = text !== undefined ? text : children;
  if (!content) return null;
  return (
    <span className={className} style={style}>
      {renderRichText(content)}
    </span>
  );
};

export default RichMathText;
