// Mark.jsx — the SEVA logo mark.
//
// A rounded "S" (Baloo 2, heavy) painted with three horizontal brand bands —
// orange / purple / lime — by clipping a vertical gradient to the glyph
// (background-clip: text). Self-contained, no SVG asset: it scales with the
// `size` prop and inherits the loaded webfont, so it stays crisp at any size.
//
// Pair with <Wordmark> for the full "S seva" lockup, or use standalone (the
// collapsed sidebar, the favicon source).

import React from 'react';

// The mark's three bands. Kept here so the favicon/OG generator and the UI
// share one source of truth for the logo colors.
export const LOGO_COLORS = {
  orange: '#D5572B',
  purple: '#9A72C8',
  lime:   '#C6EE4E',
};

export const LOGO_FONT = '"Baloo 2", "Quicksand", system-ui, sans-serif';

// Vertical band split: orange top ~42%, purple middle, lime bottom ~40% —
// matched to the brand artwork.
const BAND_GRADIENT =
  `linear-gradient(180deg, ${LOGO_COLORS.orange} 0 42%, ${LOGO_COLORS.purple} 42% 60%, ${LOGO_COLORS.lime} 60% 100%)`;

const Mark = ({ size = 28, as: As = 'span', title = 'Seva', decorative = false, style, ...rest }) => {
  const a11y = decorative
    ? { 'aria-hidden': 'true' }
    : { role: 'img', 'aria-label': title };
  return (
    <As
      {...a11y}
      style={{
        fontFamily: LOGO_FONT,
        fontWeight: 800,
        fontSize: `${size}px`,
        lineHeight: 0.9,
        letterSpacing: '-0.02em',
        display: 'inline-block',
        backgroundImage: BAND_GRADIENT,
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        color: 'transparent',
        WebkitTextFillColor: 'transparent',
        userSelect: 'none',
        ...style,
      }}
      {...rest}
    >
      S
    </As>
  );
};

export default Mark;
