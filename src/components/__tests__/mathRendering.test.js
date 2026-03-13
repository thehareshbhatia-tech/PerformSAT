import katex from 'katex';

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
