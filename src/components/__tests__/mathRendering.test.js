import katex from 'katex';
import { renderToStaticMarkup } from 'react-dom/server';
import { MathText } from '../MathText';

/**
 * Extracted rendering logic from MathText — tests the regex pipeline
 * that converts $...$ / $$...$$ to KaTeX HTML while protecting currency
 * and escaped dollar signs.
 */
const renderMath = (inputText) => {
  if (!inputText) return '';
  let result = String(inputText);

  const ESCAPED_DOLLAR = '\uFFFD';
  result = result.replace(/\\\$/g, ESCAPED_DOLLAR);

  const CURRENCY = '\uFFFE';
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

  return result;
};

describe('Math rendering pipeline', () => {
  describe('inline math ($...$)', () => {
    it('renders simple inline math', () => {
      const html = renderMath('Solve $x^2 = 4$ for x.');
      expect(html).toContain('katex');
      expect(html).not.toContain('$x^2 = 4$');
    });

    it('renders y = mx + b inline', () => {
      const html = renderMath('Translate into $y = mx + b$.');
      expect(html).toContain('katex');
      expect(html).not.toContain('$y = mx + b$');
    });

    it('renders multiple inline expressions', () => {
      const html = renderMath('Given $a$ and $b$, find $a + b$.');
      expect(html).toContain('katex');
      expect(html).not.toContain('$a$');
      expect(html).not.toContain('$b$');
    });
  });

  describe('display math ($$...$$)', () => {
    it('renders display math', () => {
      const html = renderMath('$$x = \\frac{-b \\pm \\sqrt{b^2-4ac}}{2a}$$');
      expect(html).toContain('katex');
      expect(html).not.toContain('$$');
    });
  });

  describe('currency protection', () => {
    it('preserves $12.50 as literal currency', () => {
      const html = renderMath('The price is $12.50 per item.');
      expect(html).toContain('$12.50');
      expect(html).not.toContain('katex');
    });

    it('preserves $1,250.00', () => {
      const html = renderMath('Total: $1,250.00.');
      expect(html).toContain('$1,250.00');
    });
  });

  describe('escaped dollar signs', () => {
    it('renders \\$ as literal $', () => {
      const html = renderMath('Costs \\$25 each.');
      expect(html).toContain('$25');
      expect(html).not.toContain('katex');
    });
  });

  describe('malformed / invalid LaTeX', () => {
    it('does not crash on invalid LaTeX', () => {
      const html = renderMath('$\\invalidcommand{oops}$');
      expect(typeof html).toBe('string');
    });

    it('does not crash on unclosed delimiters', () => {
      const html = renderMath('Just a $5 bill');
      expect(typeof html).toBe('string');
    });
  });

  describe('plain text passthrough', () => {
    it('returns plain text unchanged when no math', () => {
      const text = 'No math here, just words.';
      expect(renderMath(text)).toBe(text);
    });

    it('returns empty string for null/undefined', () => {
      expect(renderMath(null)).toBe('');
      expect(renderMath(undefined)).toBe('');
    });
  });
});

/**
 * REAL-pipeline regressions — rendered through the actual <MathText>
 * component (react-dom/server), not the extracted copy above, so changes to
 * src/components/MathText.jsx are what these assert against.
 *
 * Bug: the balanced-math guard read its LaTeX signal off `result` AFTER the
 * \$ → placeholder strip, and its char class had no `%`. A line whose only
 * command is \% (or whose only backslash was \$ currency) tested command-free,
 * so currency detection ran and ate a "$N.NN " math opener — mis-pairing every
 * later $ and garbling the rest of the line (bank-am-275, bank-alg-343,
 * PT3 M1 Q6, ...).
 */
describe('balanced-math LaTeX signal reads the pre-strip input (real MathText)', () => {
  const renderReal = (text) => renderToStaticMarkup(<MathText text={text} />);
  const texSegments = (html) =>
    [...html.matchAll(/<annotation encoding="application\/x-tex">([^<]*)<\/annotation>/g)]
      .map((m) => m[1]);

  it('keeps math spans paired when the only LaTeX command is \\%', () => {
    const html = renderReal('**The Fast Way:** $1.03 = 1 + 0.03$ is the growth factor, so a $3\\%$ rate');
    // The prose between the two spans stays plain text — before the fix it was
    // swallowed into a mis-paired math segment ("$ is the growth factor, so a $").
    expect(html).toContain(' is the growth factor, so a ');
    // Exactly the two authored spans render as math.
    expect(texSegments(html)).toEqual(['1.03 = 1 + 0.03', '3\\%']);
  });

  it('keeps math spans paired when the only backslash is escaped \\$ currency', () => {
    const html = renderReal('He deposits \\$5.00, and the balance is $5.00 + 0.25d$ after $d$ days.');
    expect(html).toContain(' after ');
    expect(texSegments(html)).toEqual(['5.00 + 0.25d', 'd']);
    // The escaped currency is restored as a literal dollar amount.
    expect(html).toContain('$5.00,');
  });

  it('still protects bare $N.NN currency in command-free prose', () => {
    const html = renderReal('The price is $12.50 per item and tax adds $1.25 more.');
    expect(html).toContain('$12.50');
    expect(html).toContain('$1.25');
    expect(html).not.toContain('katex');
  });

  it('still renders escaped \\$ currency literally when no math is present', () => {
    const html = renderReal('Costs \\$25 each.');
    expect(html).toContain('$25');
    expect(html).not.toContain('katex');
  });
});
