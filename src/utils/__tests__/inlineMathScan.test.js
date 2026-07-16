/**
 * Unit tests for the shared strict inline-math scanner + integration
 * regressions for the three renderers that use it (2026-07-15 sweep: one
 * stray/misread $ must never garble a message; money must stay literal).
 * The corpus-wide render-diff harness verified all 10,537 authored strings
 * render byte-identically under the new pairing except two WANTED fixes,
 * pinned below.
 */
import ReactDOMServer from 'react-dom/server';
import React from 'react';
import { findInlineMathSpans, pairInlineMath } from '../inlineMathScan';
import { MathText } from '../../components/MathText';
import { renderRichText } from '../../components/RichMathText';

const spans = (s, opts) => findInlineMathSpans(s, opts).map((x) => x.latex);
const mt = (s) => ReactDOMServer.renderToStaticMarkup(React.createElement(MathText, null, s));
const rr = (s) => ReactDOMServer.renderToStaticMarkup(React.createElement(React.Fragment, null, renderRichText(s)));

describe('findInlineMathSpans — pairing rules', () => {
  test('pairs math that starts with a bare number', () => {
    expect(spans('and $3 + 4 = 7$. done')).toEqual(['3 + 4 = 7']);
  });
  test('unbalanced dollar pairs nothing', () => {
    expect(spans('you saw $-7 in the equation and picked it')).toEqual([]);
  });
  test('never pairs across a line break', () => {
    expect(spans('short $5 here\nthen $x = 2$ there')).toEqual(['x = 2']);
  });
  test('money stays unpaired: amounts, ranges, thousands', () => {
    expect(spans('costs $10 and $1,200, between $5-$10')).toEqual([]);
  });
  test('money and math coexist', () => {
    expect(spans('pay $10 once, so $C = 10 + 5x$ total')).toEqual(['C = 10 + 5x']);
  });
  test('digit after closer allowed when span is NOT money-shaped ($\\times$2 idiom)', () => {
    expect(spans('0($\\times$2), 1($\\times$5)')).toEqual(['\\times', '\\times']);
  });
  test('operator-spaced closer requires opt-in (authored idiom)', () => {
    const text = 'true for $|expr| = $ a negative number';
    expect(spans(text)).toEqual([]);
    expect(spans(text, { operatorSpacedClose: true })).toEqual(['|expr| = ']);
  });
  test('pairInlineMath replaces spans and leaves the rest intact', () => {
    const out = pairInlineMath('a $x$ b $y$ c', (latex) => `[${latex}]`);
    expect(out).toBe('a [x] b [y] c');
  });
});

describe('MathText — money-garble regressions (corpus-verified fixes)', () => {
  test('percents stem: "$80 to $100" renders as literal currency, not math', () => {
    const html = mt('A price increases from $80 to $100. What is the percent increase?');
    expect(html).toContain('$80 to $100');
    expect(html).not.toContain('katex');
  });
  test('AI-narrative money without cents stays literal alongside math', () => {
    const html = mt('Your projected range is $1,200 wide, so focus where $x + 2 = 5$ style slips cost you.');
    expect(html).toContain('$1,200 wide');
    expect(html).toContain('katex');
  });
  test('an unbalanced dollar cannot swallow the rest of the text', () => {
    const html = mt('you saw $-7 in the equation and picked it directly as the answer.');
    expect(html).toContain('in the equation and picked it directly');
    expect(html).not.toContain('katex');
  });
  test('authored operator-spaced closers still render as math', () => {
    const html = mt('Mean $> $ median means a right skew.');
    expect(html).toContain('katex');
    expect(html).toContain('median means a right skew');
  });
});

describe('renderRichText — emphasis split is math-aware', () => {
  test('a * inside two math spans on one line no longer splits them as italics', () => {
    const html = rr('compute $a * b$ and then $c * d$ for the area');
    expect(html).toContain('katex');
    expect(html).toContain('and then');
    expect(html).not.toContain('<em');
  });
  test('bold around math still renders', () => {
    const html = rr('**$y = -5x - 2$.** Parallel lines share a slope.');
    expect(html).toContain('<strong');
    expect(html).toContain('katex');
  });
  test('escaped currency inside bold survives the mask round-trip', () => {
    const html = rr('Divide: \\$64 / 0.80 = **\\$80**. The 20% was already off.');
    expect(html).toContain('<strong');
    expect(html).toContain('$80');
  });
});
