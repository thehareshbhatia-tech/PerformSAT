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

describe('renderChatMarkdown blocks', () => {
  test('renders a fenced code block as <pre><code>', () => {
    const html = renderToHtml('Here:\n```\nx = 2\ny = 3\n```\nDone');
    expect(html).toContain('<pre');
    expect(html).toContain('<code');
    expect(html).toContain('x = 2');
    expect(html).toContain('y = 3');
  });

  test('escaped HTML inside a code block stays inert', () => {
    const html = renderToHtml('```\n<img onerror=alert(1)>\n```');
    expect(html).toContain('&lt;img');
    expect(html).not.toContain('<img');
  });

  test('renders a pipe table with header + rows', () => {
    const html = renderToHtml('| Choice | Trap |\n| --- | --- |\n| A | surface match |\n| B | scope shift |');
    expect(html).toContain('<table');
    expect(html).toContain('<th');
    expect(html).toContain('Choice');
    expect(html).toContain('surface match');
    expect(html).toContain('scope shift');
  });
});

// Currency-vs-math: the tutor now emits $...$ LaTeX (the LaTeX ban was flipped),
// and SAT problems are full of money. A money $ must never be paired with a real
// math $ — these pin the currency-protection rule.
describe('renderChatMarkdown currency + math', () => {
  test('a lone currency amount renders as a literal dollar, not math', () => {
    const html = renderToHtml('The ticket costs $10.');
    expect(html).toContain('$10');
    expect(html).not.toContain('class="katex"');
  });

  test('two currency amounts do not pair into a bogus math span', () => {
    const html = renderToHtml('It costs $10 and the rate is $5 per hour.');
    expect(html).toContain('$10');
    expect(html).toContain('$5');
    expect(html).not.toContain('class="katex"');
    // The text between the two $ must survive as words, not become math.
    expect(html).toContain('the rate is');
  });

  test('currency with commas and cents stays literal', () => {
    const html = renderToHtml('Revenue was $1,200 and change was $3.50.');
    expect(html).toContain('$1,200');
    expect(html).toContain('$3.50');
    expect(html).not.toContain('class="katex"');
  });

  test('a real math span next to money: math renders, money stays literal', () => {
    const html = renderToHtml('Solve $2x = 10$ when each ticket is $5.');
    expect(html).toContain('class="katex"'); // the equation rendered
    expect(html).toContain('$5');            // the money stayed literal
    expect(html).not.toContain('$2x = 10$'); // the equation is NOT shown raw
  });

  test('a math token that starts with a digit is not mistaken for currency', () => {
    const html = renderToHtml('Here $2x + 3 = 7$ is the equation.');
    expect(html).toContain('class="katex"');
    expect(html).not.toContain('$2x + 3 = 7$');
  });

  test('$5/hour: the $5 is money, /hour is text', () => {
    const html = renderToHtml('The pay is $5/hour.');
    expect(html).toContain('$5');
    expect(html).toContain('/hour');
    expect(html).not.toContain('class="katex"');
  });

  test('common math renders: fraction, sqrt, inequality, percent, display', () => {
    expect(renderToHtml('Half is $\\frac{1}{2}$.')).toContain('class="katex"');
    expect(renderToHtml('Root: $\\sqrt{x}$.')).toContain('class="katex"');
    expect(renderToHtml('When $x < 5$ holds.')).toContain('class="katex"');
    expect(renderToHtml('That is $50\\%$.')).toContain('class="katex"');
    expect(renderToHtml('$$x^2 + 6x - 4 = 0$$')).toContain('class="katex"');
  });

  test('an unbalanced lone $ before non-money degrades to literal text (no crash)', () => {
    const html = renderToHtml('The cost variable is written $cost in the model.');
    expect(html).toContain('$cost');
    expect(html).not.toContain('class="katex"');
  });

  test('explicitly escaped \\$ inside math renders a dollar sign', () => {
    const html = renderToHtml('The price model is $p = \\$10 + 2q$.');
    expect(html).toContain('class="katex"');
  });
});

// Inline graphs: a ```seva-graph``` block renders a real SVG diagram in place;
// malformed / streaming / unsupported blocks degrade to prose and never dump JSON.
describe('renderChatMarkdown inline graphs', () => {
  const graphBlock = (obj) => '```seva-graph\n' + JSON.stringify(obj) + '\n```';

  test('a valid graph block renders an SVG and keeps the surrounding prose', () => {
    const text = `The two lines meet here:\n\n${graphBlock({
      type: 'twoLineGraph',
      params: { intersection: { x: 2, y: 3 }, slope1: 1, slope2: -1 },
    })}\n\nSo the solution is (2, 3).`;
    const html = renderToHtml(text);
    expect(html).toContain('<svg');
    expect(html).toContain('The two lines meet here');
    expect(html).toContain('So the solution is');
    // The raw block/JSON must never be shown.
    expect(html).not.toContain('seva-graph');
    expect(html).not.toContain('intersection');
  });

  test('a malformed graph block degrades to prose with no SVG and no raw JSON', () => {
    const text = 'Before.\n\n```seva-graph\n{ not valid json }\n```\n\nAfter.';
    const html = renderToHtml(text);
    expect(html).toContain('Before.');
    expect(html).toContain('After.');
    expect(html).not.toContain('<svg');
    expect(html).not.toContain('seva-graph');
    expect(html).not.toContain('not valid json');
  });

  test('an unclosed (streaming) graph block hides its partial JSON', () => {
    const text = 'Let me graph that:\n\n```seva-graph\n{ "type": "parabola", "par';
    const html = renderToHtml(text);
    expect(html).toContain('Let me graph that');
    expect(html).not.toContain('<svg');
    expect(html).not.toContain('seva-graph');
    expect(html).not.toContain('parabola');
  });

  test('an unsupported graph type degrades to prose', () => {
    const text = `A.\n\n${graphBlock({ type: 'pieChart', params: {} })}\n\nB.`;
    const html = renderToHtml(text);
    expect(html).toContain('A.');
    expect(html).toContain('B.');
    expect(html).not.toContain('<svg');
    expect(html).not.toContain('pieChart');
  });
});

// The LRU cache must be transparent: identical source returns the SAME element
// tree (a cache hit, so streaming skips re-typesetting stable earlier messages)
// while different source still produces distinct, correct output.
describe('renderChatMarkdown LRU cache', () => {
  test('identical input returns the identical (cached) element tree', () => {
    const src = 'Solve $2x = 10$ then check.';
    const a = renderMarkdown(src);
    const b = renderMarkdown(src);
    expect(a).toBe(b);
  });

  test('different input still renders its own correct output', () => {
    const one = renderToHtml('First $x^2$ message');
    const two = renderToHtml('Second $y^3$ message');
    expect(one).toContain('First');
    expect(two).toContain('Second');
    expect(one).not.toContain('Second');
  });
});

describe('renderChatMarkdown emphasis vs operators', () => {
  test('spaced asterisks (multiplication in prose) are not italicized', () => {
    const html = renderToHtml('Compute 2 * 3 and then 4 * 5.');
    expect(html).not.toContain('<em>');
    expect(html).toContain('2 * 3');
  });

  test('real italic still renders', () => {
    const html = renderToHtml('That is the *key* idea.');
    expect(html).toContain('<em>key</em>');
  });

  test('bold still renders', () => {
    const html = renderToHtml('This is **important** advice.');
    expect(html).toContain('<strong>important</strong>');
  });
});
