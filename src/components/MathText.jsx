import React from 'react';
import katex from 'katex';

export const MathText = ({ children, text, className = '', style = {} }) => {
  const content = text !== undefined ? text : children;

  const renderMath = (inputText) => {
    if (!inputText) return '';

    let result = String(inputText);

    // Step A: strip zero-width / BOM characters and normalize non-breaking
    // spaces. These silently break KaTeX ("No character metrics for ...") or
    // throw off the $-delimiter pairing, and are invisible in source review.
    result = result
      .replace(/[\u200B\u200C\u200D\u2060\uFEFF]/g, '')
      .replace(/\u00A0/g, ' ');

    // Step 0: Protect escaped dollar signs (\$) BEFORE any processing.
    // Handles \$25 style currency notation. Private-use placeholder so it
    // survives every later regex untouched.
    const ESCAPED_DOLLAR_PLACEHOLDER = '\uE000';
    result = result.replace(/\\\$/g, ESCAPED_DOLLAR_PLACEHOLDER);

    // Step 1: Convert Markdown tables to HTML. Must run on the raw text while
    // newlines are still real \n (the row detector keys on them) and before
    // math rendering so any $...$ in a cell stays literal for Step 4.
    result = result.replace(
      /(^|\n)((?:\|[^\n]*\|\s*\n){2,}\|[^\n]*\|)/g,
      (match, prefix, tableBlock) => {
        const lines = tableBlock.split('\n').filter(l => l.trim());
        if (lines.length < 2) return match;
        // Second line must be the separator (|---|---|)
        if (!/^\|[\s\-:|]+\|$/.test(lines[1].trim())) return match;

        const parseCells = (row) =>
          row.split('|').slice(1, -1).map(c => c.trim());

        const headers = parseCells(lines[0]);
        const dataRows = lines.slice(2).map(parseCells);

        let html = '<table style="border-collapse:collapse;margin:12px auto;font-size:15px;">';
        html += '<thead><tr>';
        for (const h of headers) {
          html += '<th style="border:1px solid rgba(0,0,0,0.15);padding:8px 16px;background:#f5f5f7;font-weight:600;text-align:center;">' + h + '</th>';
        }
        html += '</tr></thead><tbody>';
        for (const row of dataRows) {
          html += '<tr>';
          for (const cell of row) {
            html += '<td style="border:1px solid rgba(0,0,0,0.15);padding:8px 16px;text-align:center;">' + cell + '</td>';
          }
          html += '</tr>';
        }
        html += '</tbody></table>';

        return prefix + html;
      }
    );

    // Step 2: Convert newlines to a placeholder BEFORE math processing. KaTeX
    // SVG output contains newlines that should NOT become <br>; we restore real
    // newlines just before each KaTeX call and convert the survivors at the end.
    const NEWLINE_PLACEHOLDER = '\uE001';
    result = result.replace(/\n/g, NEWLINE_PLACEHOLDER);

    // Step 3: Protect currency amounts ($12.50) BEFORE math extraction so a
    // currency $ never pairs with a later inline $x$. Deliberately matches only
    // $NN.NN (cents required): a cents-optional guard ($45) creates so many
    // placeholders that, in strings mixing currency with math, they leak into
    // mis-paired math segments and crash KaTeX. Authored content escapes
    // currency as \$, so this stays minimal. Skip when the whole string is one
    // math expression ($...$ / $$...$$) — every $ is a delimiter then.
    const CURRENCY_PLACEHOLDER = '\uE002';
    const currencies = [];
    const trimmed = result.trim();
    const isMathExpression = (trimmed.startsWith('$') && trimmed.endsWith('$')) ||
                             (trimmed.startsWith('$$') && trimmed.endsWith('$$'));

    // Escaped \$ are already placeholders, so this counts only unescaped $.
    // When they're balanced (even) and LaTeX is present, every $ is a math
    // delimiter \u2014 skip currency so a math span beginning with a decimal like
    // "$0.30 \times 80$" is not mis-grabbed as "$0.30" currency (which would
    // leave the closing $ unpaired and crash the whole segment). An odd count
    // means one $ really is stray currency, so detection still runs.
    // The LaTeX signal must read the ORIGINAL input, not `result`: Step 0 has
    // already eaten the backslash of every escaped \$, and \% has no letter,
    // so a line whose only commands are \% (or whose only backslash was \$
    // currency) would test command-free here and get a math opener like
    // "$1.03 " consumed as currency, garbling the rest of the line. The
    // escaped-dollar placeholder itself also counts as a signal — a \$ means
    // the content was authored LaTeX-aware.
    const dollarCount = (result.match(/\$/g) || []).length;
    const hasLatexCmd = /\\[a-zA-Z%]/.test(String(inputText)) ||
      result.includes(ESCAPED_DOLLAR_PLACEHOLDER);
    const balancedMath = dollarCount >= 2 && dollarCount % 2 === 0 && hasLatexCmd;

    if (!isMathExpression && !balancedMath) {
      result = result.replace(/\$(\d+(?:,\d{3})*\.\d{2})(?=[\s,;:.!?)}\]]|$)/g, (match, amount) => {
        currencies.push(amount);
        return CURRENCY_PLACEHOLDER;
      });
    }

    // Step 4: Render math spans into HTML placeholders NOW — display $$...$$
    // first, then inline $...$. Doing this before the Markdown-italic step
    // guarantees a `*` inside an inline math expression (e.g. $a * b$) is never
    // seen by the italic regex, which would otherwise inject <em> into LaTeX.
    const MATH_OPEN = '\uE003';
    const MATH_CLOSE = '\uE004';
    const mathHtml = [];
    const renderSeg = (latex, displayMode, original) => {
      const clean = latex
        .replace(new RegExp(NEWLINE_PLACEHOLDER, 'g'), '\n')
        .replace(new RegExp(ESCAPED_DOLLAR_PLACEHOLDER, 'g'), '\\$')
        .trim();
      let html;
      try {
        html = katex.renderToString(clean, { displayMode, throwOnError: false });
      } catch (e) {
        // throwOnError:false rarely throws, but keep the raw text as a fallback.
        console.warn('KaTeX render error:', e);
        html = original;
      }
      mathHtml.push(html);
      return MATH_OPEN + (mathHtml.length - 1) + MATH_CLOSE;
    };
    result = result.replace(/\$\$([\s\S]*?)\$\$/g, (m, latex) => renderSeg(latex, true, m));
    result = result.replace(/\$([^\$]+?)\$/g, (m, latex) => renderSeg(latex, false, m));

    // Step 5: Markdown italic *foo* → <em>foo</em>. Math is already masked
    // above, so the only `*` left are genuine emphasis (book titles, etc.).
    //  - Single-line only ([^*\n]+? blocks runaway matches across paragraphs).
    //  - Single-* only; we don't currently use **bold** in the bank.
    result = result.replace(/\*([^*\n]+?)\*/g, '<em>$1</em>');

    // Step 6: Restore rendered math HTML.
    result = result.replace(new RegExp(MATH_OPEN + '(\\d+)' + MATH_CLOSE, 'g'), (m, i) => mathHtml[+i]);

    // Step 7: Restore currency amounts with $ sign.
    let currencyIndex = 0;
    result = result.replace(new RegExp(CURRENCY_PLACEHOLDER, 'g'), () => {
      return '$' + currencies[currencyIndex++];
    });

    // Step 8: Restore escaped dollar signs as literal $ (e.g., \$25 → $25).
    result = result.replace(new RegExp(ESCAPED_DOLLAR_PLACEHOLDER, 'g'), '$');

    // Step 9: Convert surviving newline placeholders to <br>.
    result = result.replace(new RegExp(NEWLINE_PLACEHOLDER, 'g'), '<br>');

    return result;
  };

  return (
    <span
      className={className}
      style={style}
      dangerouslySetInnerHTML={{ __html: renderMath(content) }}
    />
  );
};

export const MathBlock = ({ children, className = '', style = {} }) => {
  if (!children) return null;

  try {
    const latex = String(children).replace(/^\$\$|\$\$$/g, '').trim();
    const html = katex.renderToString(latex, { displayMode: true, throwOnError: false });
    return (
      <div
        className={className}
        style={{ textAlign: 'center', margin: '1rem 0', ...style }}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  } catch (e) {
    return <div className={className} style={style}>{String(children)}</div>;
  }
};

export default MathText;
