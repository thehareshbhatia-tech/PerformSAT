/**
 * Regression: ISSUE-001 — markdown italic *foo* rendered as literal asterisks
 * Found by /qa on 2026-05-07
 * Report: .gstack/qa-reports/qa-report-localhost-3000-2026-05-07.md
 *
 * Symptom: book titles like "*Blindspot: Hidden Biases of Good People*"
 * surfaced as literal asterisks across choices, COE-Q tables, studentNotes
 * bullets/goal, and explanations because MathText had no italic step.
 *
 * Fix: src/components/MathText.jsx → renderMath() Step 0.4 converts
 * single-asterisk *foo* to <em>foo</em> before any math/currency/newline
 * processing.
 *
 * Tests below mirror the regex pipeline in MathText so this file can run
 * standalone (no React mount). Same approach as mathRendering.test.js.
 */

import katex from 'katex';

const renderMath = (inputText) => {
  if (!inputText) return '';
  let result = String(inputText);

  const ESCAPED_DOLLAR = '�';
  result = result.replace(/\\\$/g, ESCAPED_DOLLAR);

  // Step 0.4: markdown italic — the patch under test.
  result = result.replace(/\*([^*\n]+?)\*/g, '<em>$1</em>');

  const NEWLINE = '￼';
  result = result.replace(/\n/g, NEWLINE);

  const CURRENCY = '￾';
  const currencies = [];
  const trimmed = result.trim();
  const isMathExpr = (trimmed.startsWith('$') && trimmed.endsWith('$')) ||
                     (trimmed.startsWith('$$') && trimmed.endsWith('$$'));
  if (!isMathExpr) {
    result = result.replace(/\$(\d+(?:,\d{3})*\.\d{2})(?=[\s,;:.!?)}\]]|$)/g, (_, amt) => {
      currencies.push(amt);
      return CURRENCY;
    });
  }

  result = result.replace(/\$\$([\s\S]*?)\$\$/g, (match, latex) => {
    try { return katex.renderToString(latex.trim(), { displayMode: true, throwOnError: false }); }
    catch { return match; }
  });
  result = result.replace(/\$([^\$]+?)\$/g, (match, latex) => {
    try { return katex.renderToString(latex.trim(), { displayMode: false, throwOnError: false }); }
    catch { return match; }
  });

  let ci = 0;
  result = result.replace(new RegExp(CURRENCY, 'g'), () => '$' + currencies[ci++]);
  result = result.replace(new RegExp(ESCAPED_DOLLAR, 'g'), '$');
  result = result.replace(new RegExp(NEWLINE, 'g'), '<br>');

  return result;
};

describe('ISSUE-001: markdown italic in MathText', () => {
  // The exact precondition that triggered the bug: a CB book title in a
  // rhetorical-synthesis bullet (Test 1 Q26 used "Art + Soul: A Journey
  // into the World of Aboriginal Art"). The choice button rendered the
  // raw asterisks because MathText had no italic step.
  it('converts a single book title to <em>', () => {
    const html = renderMath('Hetti Perkins, in *Art + Soul: A Journey into the World of Aboriginal Art* (2010), argues...');
    expect(html).toContain('<em>Art + Soul: A Journey into the World of Aboriginal Art</em>');
    expect(html).not.toMatch(/\*Art \+ Soul/);
  });

  it('converts multiple titles in the same string (Test 1 Q26 had 3 occurrences)', () => {
    const html = renderMath('Both *Coming of Age in Samoa* and *Sex and Temperament* established Mead as a public intellectual.');
    expect(html).toContain('<em>Coming of Age in Samoa</em>');
    expect(html).toContain('<em>Sex and Temperament</em>');
    expect((html.match(/<em>/g) || []).length).toBe(2);
  });

  it('converts single-word emphasis (the bank emits "*give*", "*to*", "*more*")', () => {
    const html = renderMath('The verb *give* takes a different complement than *to*.');
    expect(html).toContain('<em>give</em>');
    expect(html).toContain('<em>to</em>');
  });

  // Edge cases the regex must handle without breaking other features.
  it('does not match across newlines (avoids greedy paragraph spans)', () => {
    const html = renderMath('First line *opens here\nthen second line closes here*');
    // Neither side closes within a single line, so no <em> tag at all.
    expect(html).not.toContain('<em>');
    // Asterisks pass through unchanged (they did not look like italic).
    expect(html).toContain('*opens here');
    expect(html).toContain('closes here*');
  });

  it('does not match empty *...* pairs', () => {
    const html = renderMath('Empty ** between');
    expect(html).not.toContain('<em></em>');
  });

  it('does not corrupt inline math containing * (multiplication)', () => {
    const html = renderMath('Compute $a * b$ where a, b are scalars.');
    // Italic step runs BEFORE math; the regex needs `*X*` with content,
    // and `* b` then `* w` doesn't match cleanly. Confirm KaTeX still ran.
    expect(html).toContain('katex');
    // No stray <em> tags swallowed the math expression.
    expect(html.match(/<em>/g)?.length || 0).toBeLessThanOrEqual(1);
  });

  it('does not corrupt currency or display math when italic is also present', () => {
    const html = renderMath('In *Whitewalling*, prices reached $1,250.00 per piece.');
    expect(html).toContain('<em>Whitewalling</em>');
    expect(html).toContain('$1,250.00');
  });

  it('plain text without asterisks passes through unchanged', () => {
    const html = renderMath('No italics, no math, just plain prose.');
    expect(html).toBe('No italics, no math, just plain prose.');
  });

  it('preserves leading/trailing context around an italicized span', () => {
    const html = renderMath('Pre *italic* post');
    expect(html).toBe('Pre <em>italic</em> post');
  });

  // Confirm the bug-precondition repro: the exact string from Test 1 Q26
  // choice A. Before the fix this produced literal asterisks in the DOM.
  it('repro: Test 1 Q26 choice A title renders italic', () => {
    const choiceA = 'In *Art + Soul: A Journey into the World of Aboriginal Art* (2010), Australian art historian Hetti Perkins argues that Aboriginal Australian painting is best understood not as decorative regional ornament...';
    const html = renderMath(choiceA);
    expect(html).toContain('<em>Art + Soul: A Journey into the World of Aboriginal Art</em>');
    // No stray asterisks anywhere in the output — they were either
    // converted to <em> markers or there were none to begin with.
    expect(html).not.toContain('*');
  });
});
