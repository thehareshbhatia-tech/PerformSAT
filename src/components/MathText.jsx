import React from 'react';
import katex from 'katex';

/**
 * MathText Component - Renders LaTeX math notation using KaTeX
 *
 * Usage:
 *   <MathText>Solve $\frac{3}{4}x = 12$ for $x$.</MathText>
 *
 * Supports:
 *   - Inline math: $...$
 *   - Display math: $$...$$ (centered on own line)
 *
 * Common LaTeX codes:
 *   - Fractions: \frac{a}{b}
 *   - Exponents: x^2 or x^{n+1}
 *   - Square root: \sqrt{x}
 *   - Cube root: \sqrt[3]{x}
 *   - Pi: \pi
 *   - Degrees: 90^\circ
 *   - Inequalities: \leq, \geq, \neq
 *   - Plus/minus: \pm
 *   - Absolute value: |x|
 *   - Angle: \angle ABC
 *   - Triangle: \triangle ABC
 */
export const MathText = ({ children, text, className = '', style = {} }) => {
  // Support both `text` prop (for backward compatibility) and `children`
  const content = text !== undefined ? text : children;

  const renderMath = (inputText) => {
    if (!text) return '';

    let result = String(text);

    // Display math: $$...$$ (must be processed first to avoid conflict with inline)
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

    // Inline math: $...$
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

/**
 * MathBlock Component - For standalone math equations (display mode)
 * Renders as a block-level element
 */
export const MathBlock = ({ children, className = '', style = {} }) => {
  const renderDisplayMath = (text) => {
    if (!text) return '';

    try {
      // Remove $$ delimiters if present
      const latex = String(text).replace(/^\$\$|\$\$$/g, '').trim();
      return katex.renderToString(latex, {
        displayMode: true,
        throwOnError: false
      });
    } catch (e) {
      console.warn('KaTeX block math error:', e);
      return String(text);
    }
  };

  return (
    <div
      className={className}
      style={{ textAlign: 'center', margin: '1rem 0', ...style }}
      dangerouslySetInnerHTML={{ __html: renderDisplayMath(children) }}
    />
  );
};

export default MathText;
