// Wordmark.jsx — the Seva brand wordmark.
//
// Italic Fraunces (variable serif) with the SOFT axis cranked for swashy
// editorial terminals on the v / a. Single word, no icon. Mirrors Acely's
// editorial publication feel but with more typographic personality.
//
// `tone` controls contrast: "dark" (default) renders deep navy for light
// backgrounds; "light" renders white for dark backgrounds. `size` scales
// the text (sm / md / lg). All other typography lives inside this component
// so the mark stays identical everywhere.

import React from 'react';

const SIZES = {
  // All-caps wants positive tracking — letters need room to breathe.
  sm: { fontSize: '16px', letterSpacing: '0.04em' },
  md: { fontSize: '20px', letterSpacing: '0.05em' },
  lg: { fontSize: '26px', letterSpacing: '0.06em' },
};

const TONES = {
  dark:  { color: '#021F35' },          // deep navy (matches sidebar bg)
  light: { color: '#FFFFFF' },
};

// Fraunces variable axes:
//   opsz 144  — display optical sizing (more contrast in strokes)
//   wght 700  — bold body
//   SOFT 100  — max softness, gives the swashy italic terminals
const FRAUNCES_SETTINGS = '"opsz" 144, "SOFT" 100';

const Wordmark = ({ size = 'md', tone = 'dark', as: As = 'span', style, ...rest }) => {
  const sizeStyle = SIZES[size] || SIZES.md;
  const toneStyle = TONES[tone] || TONES.dark;
  return (
    <As
      style={{
        fontFamily: '"Fraunces", "Lora", "Merriweather", "New York", Georgia, serif',
        fontStyle: 'italic',
        fontWeight: 700,
        fontVariationSettings: FRAUNCES_SETTINGS,
        lineHeight: 1,
        userSelect: 'none',
        ...sizeStyle,
        ...toneStyle,
        ...style,
      }}
      {...rest}
    >
      SEVA
    </As>
  );
};

export default Wordmark;
