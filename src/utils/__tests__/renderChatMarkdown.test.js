/**
 * XSS-hardening tests for the chat markdown renderer.
 *
 * renderMarkdown feeds three dangerouslySetInnerHTML sinks (paragraphs,
 * headers, list items). These tests pin the escape-first contract: raw
 * model output can never inject live markup, while markdown formatting
 * and KaTeX math keep rendering.
 *
 * @testing-library/react is not installed, so assertions run on the
 * serialized HTML string via ReactDOMServer.renderToStaticMarkup.
 */
import ReactDOMServer from 'react-dom/server';
import renderMarkdown from '../renderChatMarkdown';

const renderToHtml = (text) => ReactDOMServer.renderToStaticMarkup(renderMarkdown(text));

describe('renderChatMarkdown XSS hardening', () => {
  test('escapes an img onerror payload in a paragraph', () => {
    const html = renderToHtml('Hello <img src=x onerror=alert(1)> world');
    expect(html).toContain('&lt;img src=x onerror=alert(1)&gt;');
    expect(html).not.toContain('<img');
  });

  test('escapes a script tag', () => {
    const html = renderToHtml('<script>alert(1)</script>');
    expect(html).not.toContain('<script');
    expect(html).toContain('&lt;script&gt;');
  });

  test('escapes an svg onload payload inside a list item', () => {
    const html = renderToHtml('- <svg onload=alert(1)>');
    expect(html).toContain('<li');
    expect(html).not.toContain('<svg');
    expect(html).toContain('&lt;svg onload=alert(1)&gt;');
  });

  test('escapes an svg onload payload inside a header', () => {
    const html = renderToHtml('# <svg onload=alert(1)>');
    expect(html).not.toContain('<svg');
    expect(html).toContain('&lt;svg onload=alert(1)&gt;');
  });

  test('escapes an svg onload payload inside a plain paragraph', () => {
    const html = renderToHtml('<svg onload=alert(1)>');
    expect(html).toContain('<p');
    expect(html).not.toContain('<svg');
    expect(html).toContain('&lt;svg onload=alert(1)&gt;');
  });

  test('escapes a bare ampersand', () => {
    const html = renderToHtml('5 & 6');
    expect(html).toContain('5 &amp; 6');
  });
});

describe('renderChatMarkdown formatting preservation', () => {
  test('bold, italic, and inline code still render', () => {
    const html = renderToHtml('**bold** and *em* and `code`');
    expect(html).toContain('<strong>bold</strong>');
    expect(html).toContain('<em>em</em>');
    expect(html).toContain('<code');
    expect(html).toContain('code</code>');
  });

  test('double-underscore bold still renders', () => {
    const html = renderToHtml('__strong__ text');
    expect(html).toContain('<strong>strong</strong>');
  });

  test('inline code keeps its style attribute', () => {
    const html = renderToHtml('`x`');
    expect(html).toContain('<code style=');
  });

  test('HTML-significant characters inside inline code are escaped entities', () => {
    const html = renderToHtml('`a < b & c > d`');
    expect(html).toContain('a &lt; b &amp; c &gt; d');
    expect(html).not.toContain('a < b');
  });

  test('ordered and unordered lists still render', () => {
    const html = renderToHtml('1. first\n2. second\n\n- bullet one\n- bullet two');
    expect(html).toContain('<ol');
    expect(html).toContain('<ul');
    expect(html).toContain('<li');
    expect(html).toContain('first');
    expect(html).toContain('bullet two');
  });

  test('headers still render with their text', () => {
    const html = renderToHtml('## Section title');
    expect(html).toContain('Section title');
    expect(html).not.toContain('##');
  });

  test('horizontal rule still renders', () => {
    const html = renderToHtml('above\n---\nbelow');
    expect(html).toContain('<hr');
  });
});

describe('renderChatMarkdown KaTeX preservation', () => {
  test('inline math containing < still renders as KaTeX', () => {
    const html = renderToHtml('$x < 5$');
    expect(html).toContain('class="katex"');
    // The raw latex must not leak as visible escaped text outside the
    // KaTeX annotation markup.
    expect(html).not.toContain('$x');
  });

  test('display math renders with surrounding text intact', () => {
    const html = renderToHtml('Solve $$\\frac{a}{b}$$ now');
    expect(html).toContain('katex-display');
    expect(html).toContain('Solve');
    expect(html).toContain('now');
  });

  test('\\( \\) inline and \\[ \\] display delimiters render as KaTeX', () => {
    const inline = renderToHtml('Value \\(y + 2\\) here');
    expect(inline).toContain('class="katex"');
    const display = renderToHtml('\\[z^2\\]');
    expect(display).toContain('katex-display');
  });

  test('math inside a list item renders as KaTeX', () => {
    const html = renderToHtml('- Try $x^2$ first');
    expect(html).toContain('<li');
    expect(html).toContain('class="katex"');
  });

  test('markdown regexes do not corrupt KaTeX output (asterisks in latex)', () => {
    const html = renderToHtml('$a * b * c$ stays math');
    expect(html).toContain('class="katex"');
    expect(html).toContain('stays math');
  });

  test('escaped dollars are not treated as math', () => {
    const html = renderToHtml('Costs \\$5 and \\$10 total');
    expect(html).not.toContain('class="katex"');
    expect(html).toContain('$5');
    expect(html).toContain('$10');
  });
});

describe('renderChatMarkdown edge cases', () => {
  test('returns null for empty input', () => {
    expect(renderMarkdown('')).toBeNull();
    expect(renderMarkdown(null)).toBeNull();
    expect(renderMarkdown(undefined)).toBeNull();
  });

  test('private-use token characters in model text cannot forge a stash lookup', () => {
    const html = renderToHtml('weird \uE0000\uE001 token text');
    // No KaTeX was stashed, so nothing should be substituted and no markup
    // should appear; the text content survives.
    expect(html).toContain('weird');
    expect(html).toContain('text');
    expect(html).not.toContain('class="katex"');
  });
});
