// Wordmark.jsx — the SEVA brand wordmark: all-caps "SEVA" in rounded Baloo 2
// where the S is the tri-color mark and each remaining letter carries one brand
// color — E orange, V purple, A lime. One component feeds every render site
// (landing header/footer, sidebar, mobile header, legal pages, boot screen).
//
// The wordmark is intentionally multi-color on every background (it matches the
// collapsed sidebar's tri-color S mark). `tone` is still accepted for API
// compatibility but no longer changes the letter colors. `size` (sm/md/lg)
// scales the lockup; pass `fontSize` (px) to override (boot screen).

import React from 'react';
import Mark, { LOGO_COLORS, LOGO_FONT } from './Mark';

const SIZES = { sm: 18, md: 24, lg: 30 };

// Each letter after the tri-color S takes one band color, in band order.
const LETTERS = [
  { ch: 'E', color: LOGO_COLORS.orange },
  { ch: 'V', color: LOGO_COLORS.purple },
  { ch: 'A', color: LOGO_COLORS.lime },
];

// eslint-disable-next-line no-unused-vars
const Wordmark = ({ size = 'md', tone = 'dark', fontSize, as: As = 'span', style, ...rest }) => {
  const px = fontSize || SIZES[size] || SIZES.md;
  const letterStyle = {
    fontFamily: LOGO_FONT,
    fontWeight: 800,
    fontSize: `${px}px`,
    lineHeight: 0.9,
    letterSpacing: '-0.02em',
  };
  return (
    <As
      aria-label="SEVA"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: `${Math.round(px * 0.11)}px`,
        lineHeight: 1,
        userSelect: 'none',
        ...style,
      }}
      {...rest}
    >
      <Mark size={px} decorative />
      {LETTERS.map(({ ch, color }) => (
        <span key={ch} style={{ ...letterStyle, color }}>{ch}</span>
      ))}
    </As>
  );
};

export default Wordmark;
