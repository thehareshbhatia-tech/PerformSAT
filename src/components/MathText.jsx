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

    // Step 1: Protect currency amounts ($12.50) BEFORE math processing
    // Only match currency with decimal (e.g., $12.50) to avoid matching math like $5$
    const CURRENCY_PLACEHOLDER = '\uFFFE';
    const currencies = [];
    result = result.replace(/\$(\d+(?:,\d{3})*\.\d{2})(?=[\s,;:.!?)}\]]|$)/g, (match, amount) => {
      currencies.push(amount);
      return CURRENCY_PLACEHOLDER;
    });

    // Step 2: Display math $$...$$
    result = result.replace(/\$\$([\s\S]*?)\$\$/g, (match, latex) => {
      try {
        return katex.renderToString(latex.trim(), {
          displayMode: true,
          throwOnError: false
        });
      } catch (e) {
        console.warn('KaTeX display math error:', e);
        return match;
      }
    });

    // Step 3: Inline math $...$
    result = result.replace(/\$([^\$]+?)\$/g, (match, latex) => {
      try {
        return katex.renderToString(latex.trim(), {
          displayMode: false,
          throwOnError: false
        });
      } catch (e) {
        console.warn('KaTeX inline math error:', e);
        return match;
      }
    });

    // Step 4: Restore currency amounts with $ sign
    let currencyIndex = 0;
    result = result.replace(new RegExp(CURRENCY_PLACEHOLDER, 'g'), () => {
      return '$' + currencies[currencyIndex++];
    });

    // Step 5: Restore escaped dollar signs as $ (e.g., \$25 becomes $25)
    result = result.replace(new RegExp(ESCAPED_DOLLAR_PLACEHOLDER, 'g'), '$');

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
