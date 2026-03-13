import React from 'react';
import { MathText } from './MathText';

/**
 * Splits text on markdown emphasis (**bold**, *accent*, `code`) and renders
 * each fragment through MathText so $...$ / $$...$$ are also parsed.
 *
 * Import and use anywhere educational content may contain mixed
 * markdown emphasis + LaTeX math.
 */
export const renderRichText = (text) => {
  if (!text) return null;
  return String(text).split(/(\*\*.*?\*\*|\*.*?\*|`[^`]+`)/).map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={i} style={{ fontWeight: 600, color: 'var(--color-slate-900)' }}>
          <MathText>{part.slice(2, -2)}</MathText>
        </strong>
      );
    }
    if (part.startsWith('*') && part.endsWith('*')) {
      return (
        <em key={i} style={{ color: 'var(--color-brand-orange-600)', fontStyle: 'normal', fontWeight: 500 }}>
          <MathText>{part.slice(1, -1)}</MathText>
        </em>
      );
    }
    if (part.startsWith('`') && part.endsWith('`')) {
      return (
        <code key={i} style={{
          fontFamily: 'Georgia, "Times New Roman", serif', fontStyle: 'italic',
          background: 'var(--color-slate-100)', padding: '2px 6px', borderRadius: 'var(--radius-sm)',
          fontSize: '0.9em', color: 'var(--color-slate-900)',
        }}>{part.slice(1, -1)}</code>
      );
    }
    return <MathText key={i}>{part}</MathText>;
  });
};

/**
 * Component wrapper — accepts children string and renders through renderRichText.
 * Use as <RichMathText>some **bold** with $x^2$</RichMathText>
 */
const RichMathText = ({ children, text, className = '', style = {} }) => {
  const content = text !== undefined ? text : children;
  if (!content) return null;
  return (
    <span className={className} style={style}>
      {renderRichText(content)}
    </span>
  );
};

export default RichMathText;
