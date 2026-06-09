import React from 'react';
import { colors as designColors, typography as designTypo, shadows as designShadows } from '../design/tokens';

// Minimal slice of the AiTutorChat design object — extracted alongside the
// button (Stage 1 code-split) so this file stays a tiny eager import while
// AiTutorChat itself (katex + aiTutorService + knowledgeBase) loads lazily.
const design = {
  colors: {
    text: { primary: designColors.text.primary },
    accent: { orange: designColors.accent.orange },
  },
  typography: { fontFamily: designTypo.fontFamily },
  shadow: { medium: designShadows.md },
};

// Ask Perform Button Component - Apple-inspired
export const AiTutorButton = ({ onClick, isOpen }) => {
  return (
    <button
      onClick={onClick}
      aria-label={isOpen ? "Close AI Tutor chat" : "Open AI Tutor chat"}
      aria-expanded={isOpen}
      style={{
        height: '52px',
        borderRadius: '26px',
        background: isOpen
          ? design.colors.text.primary
          : design.colors.accent.orange,
        border: 'none',
        boxShadow: isOpen
          ? design.shadow.medium
          : '0 4px 14px rgba(234, 88, 12, 0.35)',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 32px',
        transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
        fontFamily: design.typography.fontFamily,
      }}
      onMouseOver={(e) => {
        if (!isOpen) {
          e.currentTarget.style.transform = 'scale(1.03)';
          e.currentTarget.style.boxShadow = '0 6px 20px rgba(234, 88, 12, 0.45)';
        } else {
          e.currentTarget.style.transform = 'scale(1.02)';
        }
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.boxShadow = isOpen
          ? design.shadow.medium
          : '0 4px 14px rgba(234, 88, 12, 0.35)';
      }}
    >
      <span style={{
        color: 'white',
        fontWeight: '600',
        fontSize: '16px',
        letterSpacing: '-0.02em',
        whiteSpace: 'nowrap'
      }}>
        {isOpen ? 'Close' : 'Ask SEVA'}
      </span>
    </button>
  );
};

export default AiTutorButton;
