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

  // Bold support (added 2026-07-18): the Learn grammar tables render **bold**
  // (and *italic* sentences carrying a **bold** word) through MathText. Before
  // this, MathText only did single-* italic, so **word** surfaced literal
  // asterisks in table cells. These pin the render and its escape-safety.
  describe('markdown bold', () => {
    it('renders **word** as <strong>, no literal asterisks', () => {
      const html = render("**it's** = it is / it has");
      expect(html).toContain('<strong>');
      expect(html).toContain('</strong>');
      expect(html).not.toContain('**');
    });
    it('renders an outer *italic* sentence with a nested **bold** word', () => {
      const html = render('*The **dogs** ran across the yard.*');
      expect(html).toContain('<em>');
      expect(html).toContain('<strong>dogs</strong>');
      expect(html).not.toContain('**');
    });
    it('renders bold inside a markdown table cell', () => {
      const table = ['| A | B |', '| --- | --- |', "| **it's** | its |"].join('\n');
      const html = render(table);
      expect(html).toContain('<table');
      expect(html).toContain('<strong>');
      expect(html).not.toContain('**');
    });
    it('escapes markup inside bold (bold runs on already-escaped text)', () => {
      const html = render('**<img src=x onerror="alert(1)">**');
      expect(html).not.toContain('<img');
      expect(html).toContain('&lt;img');
      expect(html).toContain('<strong>');
    });
  });

  // KaTeX HTML is stashed as "trusted" and injected raw (that is how real math
  // reaches the DOM). The invariant that keeps that safe is KaTeX's default
  // trust:false — no call site may pass trust:true or a global config that
  // enables HTML commands. If anyone ever flips that, \href / \htmlData would
  // become live HTML injection with no other guard. These tests fail loudly if
  // that invariant breaks. (Escape-first protects everything EXCEPT the trusted
  // KaTeX chunk, so this is the one path the byte-escaping can't cover.)
  // With trust:false, KaTeX renders these HTML-injecting commands as inert red
  // ERROR nodes (mathcolor #cc0000) — the raw source echoes only inside the
  // escaped <annotation> text, never as a live element or attribute. The robust
  // signal is therefore: no injected element (<a>/<img>/<iframe>) and no live
  // handler/scheme ATTRIBUTE (on…="…", href="javascript:"). A plain substring
  // like "onclick=" would false-positive on the inert annotation echo, so these
  // assert the attribute form (quote-delimited), which only trust:true emits.
  describe('KaTeX trust:false invariant (raw-injected math must stay inert)', () => {
    it('\\href with a javascript: URL produces no live anchor', () => {
      const html = render('Click $\\href{javascript:alert(1)}{here}$ now.');
      expect(html).not.toMatch(/<a\b/i);
      expect(html).not.toMatch(/(href|src)\s*=\s*"javascript:/i);
      // Proof trust:false is active: \href degraded to a KaTeX error node.
      expect(html).toContain('#cc0000');
    });

    it('\\htmlData / \\htmlId inject no live attributes', () => {
      const html = render('$x \\htmlData{onclick=alert(1)}{y}$ and $\\htmlId{z}{w}$');
      expect(html).not.toMatch(/\son\w+\s*=\s*"/i); // no live event-handler attr
      expect(html).not.toMatch(/\sid\s*=\s*"z"/i); // \htmlId did not set an id
      expect(html).toContain('#cc0000');
    });

    it('\\includegraphics injects no <img>', () => {
      const html = render('$\\includegraphics{https://x/y.png}$');
      expect(html).not.toMatch(/<img\b/i);
      expect(html).toContain('#cc0000');
    });
  });
});
