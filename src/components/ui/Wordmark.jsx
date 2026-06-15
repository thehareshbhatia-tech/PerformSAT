// Wordmark.jsx — the SEVA brand lockup: the tri-color "S" mark + the rounded
// lowercase "seva" wordmark (Baloo 2). One component feeds every render site
// (landing header/footer, sidebar, mobile header, legal pages, boot screen) so
// the mark stays identical everywhere.
//
// `tone` controls the wordmark text color: "dark" (default) renders brand
// purple for light backgrounds; "light" renders white for dark backgrounds
// (the navy sidebar). The S mark is tri-color in both. `size` (sm/md/lg) scales
// the lockup; pass `fontSize` (px) to override for special cases (boot screen).

import React from 'react';
import Mark, { LOGO_COLORS, LOGO_FONT } from './Mark';

const SIZES = { sm: 18, md: 24, lg: 30 };

const WORD_COLOR = {
  dark:  LOGO_COLORS.purple, // on light backgrounds
  light: '#FFFFFF',          // on dark backgrounds (navy sidebar)
};

const Wordmark = ({ size = 'md', tone = 'dark', fontSize, as: As = 'span', style, ...rest }) => {
  const px = fontSize || SIZES[size] || SIZES.md;
  const wordColor = WORD_COLOR[tone] || WORD_COLOR.dark;
  return (
    <As
      aria-label="Seva"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: `${Math.round(px * 0.3)}px`,
        lineHeight: 1,
        userSelect: 'none',
        ...style,
      }}
      {...rest}
    >
      <Mark size={Math.round(px * 1.18)} decorative />
      <span
        style={{
          fontFamily: LOGO_FONT,
          fontWeight: 700,
          fontSize: `${px}px`,
          letterSpacing: '0.005em',
          color: wordColor,
          lineHeight: 1,
        }}
      >
        seva
      </span>
    </As>
  );
};

export default Wordmark;
