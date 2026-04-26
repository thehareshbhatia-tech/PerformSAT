import React from 'react';
import katex from 'katex';

export const MathText = ({ children, text, className = '', style = {} }) => {
  const content = text !== undefined ? text : children;

  const renderMath = (inputText) => {
    if (!inputText) return '';

    let result = String(inputText);

    // Step 0: Protect escaped dollar signs (\$) BEFORE any processing
    // This handles \$25 style currency notation
    const ESCAPED_DOLLAR_PLACEHOLDER = '\uFFFD';
    result = result.replace(/\\\$/g, ESCAPED_DOLLAR_PLACEHOLDER);

    // Step 0.5: Convert Markdown tables to HTML BEFORE newline conversion
    // Detects consecutive lines starting/ending with | and converts to <table>
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

    // Step 1: Convert newlines to <br> BEFORE math processing
    // This must happen before KaTeX renders, as KaTeX SVG output contains newlines
    // that should NOT be converted to <br> tags
    const NEWLINE_PLACEHOLDER = '\uFFFC';
    result = result.replace(/\n/g, NEWLINE_PLACEHOLDER);

    // Step 2: Protect currency amounts ($12.50) BEFORE math processing
    // Only match currency with decimal (e.g., $12.50) to avoid matching math like $5$
    // BUT skip currency detection if the string looks like a math expression (starts with $ and ends with $)
    const CURRENCY_PLACEHOLDER = '\uFFFE';
    const currencies = [];
    const trimmed = result.trim();
    const isMathExpression = (trimmed.startsWith('$') && trimmed.endsWith('$')) ||
                             (trimmed.startsWith('$$') && trimmed.endsWith('$$'));

    if (!isMathExpression) {
      result = result.replace(/\$(\d+(?:,\d{3})*\.\d{2})(?=[\s,;:.!?)}\]]|$)/g, (match, amount) => {
        currencies.push(amount);
        return CURRENCY_PLACEHOLDER;
      });
    }

    // Step 3: Display math $$...$$
    result = result.replace(/\$\$([\s\S]*?)\$\$/g, (match, latex) => {
      try {
        // Restore newline placeholders + escaped-dollar placeholders before KaTeX renders.
        // KaTeX understands \$ as a literal dollar sign in math mode; passing the raw
        // U+FFFD placeholder triggers a "Unrecognized Unicode character" warning.
        const cleanLatex = latex
          .replace(new RegExp(NEWLINE_PLACEHOLDER, 'g'), '\n')
          .replace(new RegExp(ESCAPED_DOLLAR_PLACEHOLDER, 'g'), '\\$');
        return katex.renderToString(cleanLatex.trim(), {
          displayMode: true,
          throwOnError: false
        });
      } catch (e) {
        console.warn('KaTeX display math error:', e);
        return match;
      }
    });

    // Step 4: Inline math $...$
    result = result.replace(/\$([^\$]+?)\$/g, (match, latex) => {
      try {
        // Restore newline placeholders + escaped-dollar placeholders before KaTeX renders.
        const cleanLatex = latex
          .replace(new RegExp(NEWLINE_PLACEHOLDER, 'g'), '\n')
          .replace(new RegExp(ESCAPED_DOLLAR_PLACEHOLDER, 'g'), '\\$');
        return katex.renderToString(cleanLatex.trim(), {
          displayMode: false,
          throwOnError: false
        });
      } catch (e) {
        console.warn('KaTeX inline math error:', e);
        return match;
      }
    });

    // Step 5: Restore currency amounts with $ sign
    let currencyIndex = 0;
    result = result.replace(new RegExp(CURRENCY_PLACEHOLDER, 'g'), () => {
      return '$' + currencies[currencyIndex++];
    });

    // Step 6: Restore escaped dollar signs as $ (e.g., \$25 becomes $25)
    result = result.replace(new RegExp(ESCAPED_DOLLAR_PLACEHOLDER, 'g'), '$');

    // Step 7: Convert newline placeholders to <br> for proper line breaks
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
