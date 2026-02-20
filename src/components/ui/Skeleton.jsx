import React, { useEffect } from 'react';
import { colors, radius } from '../../design/tokens';
import { injectAnimations } from '../../design/animations';

const Skeleton = ({ width = '100%', height = '16px', borderRadius, style, variant = 'text' }) => {
  useEffect(() => { injectAnimations(); }, []);

  const variants = {
    text: { width, height, borderRadius: borderRadius || '4px' },
    circle: { width: height, height, borderRadius: '50%' },
    card: { width, height: height || '120px', borderRadius: borderRadius || radius.lg },
    ring: { width: height, height, borderRadius: '50%', border: `4px solid ${colors.skeleton}`, backgroundColor: 'transparent' },
  };

  return (
    <div
      aria-hidden="true"
      style={{
        backgroundColor: variant === 'ring' ? 'transparent' : colors.skeleton,
        animation: 'skeletonPulse 1.5s ease-in-out infinite',
        ...variants[variant],
        ...style,
      }}
    />
  );
};

// Pre-built skeleton layouts for common screens
export const DashboardSkeleton = () => (
  <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
    <Skeleton variant="card" height="160px" />
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Skeleton variant="card" height="100px" style={{ flex: 1 }} />
      <Skeleton variant="card" height="100px" style={{ flex: 1 }} />
    </div>
    <Skeleton variant="card" height="200px" />
  </div>
);

export const CardSkeleton = ({ lines = 3 }) => (
  <div style={{
    padding: '1.5rem',
    backgroundColor: colors.surface.white,
    borderRadius: radius.lg,
    border: `1px solid ${colors.surface.grayDark}`,
  }}>
    <Skeleton width="60%" height="20px" style={{ marginBottom: '12px' }} />
    {Array.from({ length: lines }).map((_, i) => (
      <Skeleton
        key={i}
        width={i === lines - 1 ? '40%' : '100%'}
        height="14px"
        style={{ marginBottom: '8px' }}
      />
    ))}
  </div>
);

export const QuestionSkeleton = () => (
  <div style={{ padding: '1.5rem', maxWidth: '720px', margin: '0 auto' }}>
    <Skeleton width="80px" height="14px" style={{ marginBottom: '1.5rem' }} />
    <Skeleton width="100%" height="20px" style={{ marginBottom: '8px' }} />
    <Skeleton width="90%" height="20px" style={{ marginBottom: '2rem' }} />
    {[1, 2, 3, 4].map(i => (
      <Skeleton key={i} width="100%" height="48px" style={{ marginBottom: '12px', borderRadius: radius.md }} />
    ))}
  </div>
);

export default Skeleton;
