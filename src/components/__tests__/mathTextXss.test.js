import { renderToStaticMarkup } from 'react-dom/server';
import { MathText } from '../MathText';

/**
 * XSS regression suite for MathText. The component renders LLM-generated
 * narratives, AI plan summaries, and AI-authored bank strings through
 * dangerouslySetInnerHTML, so every non-math / non-structural byte of input
 * MUST be HTML-escaped. Legitimate math, tables and emphasis must still render
 * (the escape-first + private-use-token-stash pipeline guarantees both).
 */
const render = (text) => renderToStaticMarkup(<MathText text={text} />);

// The literal payload we must never see reach the DOM as a live element.
const IMG = '<img src=x onerror="alert(1)">';

describe('MathText XSS hardening', () => {
  it('escapes a raw <img onerror> in plain narrative text', () => {
    const html = render(`Here is an image ${IMG} in the middle.`);
    expect(html).not.toContain('<img');
    expect(html).not.toContain('onerror="alert(1)"');
    // Escaped form is present instead.
    expect(html).toContain('&lt;img');
  });

  it('escapes a raw <script> in narrative text', () => {
    const html = render('Watch out <script>steal()</script> for this.');
    expect(html).not.toContain('<script>');
    expect(html).toContain('&lt;script&gt;');
  });

  it('escapes injected markup inside a markdown table cell', () => {
    const table = [
      '| Name | Value |',
      '| --- | --- |',
      `| ${IMG} | 3 |`,
    ].join('\n');
    const html = render(table);
    // The table itself renders...
    expect(html).toContain('<table');
    expect(html).toContain('<td');
    // ...but the cell payload is inert.
    expect(html).not.toContain('<img');
    expect(html).not.toContain('onerror="alert(1)"');
    expect(html).toContain('&lt;img');
  });

  it('escapes markup adjacent to real math while the math still renders', () => {
    const html = render(`Solve $x^2 = 4$ then beware ${IMG}`);
    // Math renders.
    expect(html).toContain('katex');
    expect(html).not.toContain('$x^2 = 4$');
    // Adjacent payload is neutralized.
    expect(html).not.toContain('<img');
    expect(html).toContain('&lt;img');
  });

  it('does not let a payload smuggle a closing tag to break out of the span', () => {
    const html = render('</span><img src=x onerror="alert(1)"><span>');
    expect(html).not.toContain('<img');
    // The outer wrapper span is still the only structural span/close we emit;
    // the injected closer is escaped.
    expect(html).toContain('&lt;/span&gt;');
  });

  it('preserves < and > inside legitimate LaTeX (not escaped away)', () => {
    // $a < b$ is real math — the inequality must reach KaTeX, not become &lt;.
    const html = render('The relationship $a < b$ holds.');
    expect(html).toContain('katex');
    // KaTeX emits the inequality in its MathML annotation verbatim.
    expect(html).toContain('a &lt; b'); // annotation text is itself escaped by KaTeX
    // No unrendered raw dollar math remains.
    expect(html).not.toContain('$a < b$');
  });

  it('still renders plain math and currency unchanged', () => {
    expect(render('Price is $12.50 today.')).toContain('$12.50');
    const m = render('Compute $$x = \\frac{1}{2}$$.');
    expect(m).toContain('katex');
  });
});
