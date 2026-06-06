import React from 'react';
import { radius, typography } from '../../design/tokens';

/**
 * Avatar — the student's face everywhere in the app.
 *
 * Renders the uploaded profile photo (`user.photoDataUrl`, a small data-URL
 * JPEG stored on the user doc) when present, otherwise the familiar
 * first-initial circle. One component so the sidebar, profile hero, and any
 * future surface stay visually in sync.
 *
 * @param {object} props
 * @param {object} props.user - needs firstName/email and optional photoDataUrl
 * @param {number} [props.size] - px square
 * @param {string} [props.background] - CSS background for the initial fallback
 * @param {number} [props.fontSize] - initial-letter size, defaults to size*0.4
 */
const Avatar = ({ user, size = 36, background = 'var(--color-brand-primary)', fontSize }) => {
  const name = user?.firstName || user?.email || 'Student';
  const common = {
    width: `${size}px`,
    height: `${size}px`,
    borderRadius: radius.full,
    flexShrink: 0,
  };

  if (user?.photoDataUrl) {
    return (
      <img
        src={user.photoDataUrl}
        alt={`${name}'s profile photo`}
        style={{ ...common, objectFit: 'cover', display: 'block' }}
      />
    );
  }

  return (
    <div
      role="img"
      aria-label={`Avatar for ${name}`}
      style={{
        ...common,
        background,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: `${fontSize || Math.round(size * 0.4)}px`,
        fontWeight: typography.weights.bold,
      }}
    >
      {name[0].toUpperCase()}
    </div>
  );
};

export default Avatar;
