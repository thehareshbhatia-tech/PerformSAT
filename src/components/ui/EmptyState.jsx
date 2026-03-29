import React from 'react';
import { colors, typography, spacing, radius } from '../../design/tokens';
import { Button } from './Button';

const EmptyState = ({
  icon,
  title,
  description,
  actionLabel,
  onAction,
  compact = false,
}) => (
  <div style={{
    textAlign: 'center',
    padding: compact ? spacing.xl : spacing['2xl'],
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: spacing.md,
  }}>
    {icon && (
      <div style={{
        width: compact ? '48px' : '64px',
        height: compact ? '48px' : '64px',
        borderRadius: radius.full,
        backgroundColor: colors.surface.gray,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: compact ? '20px' : '28px',
      }}>
        {icon}
      </div>
    )}
    <div>
      <h3 style={{
        fontSize: compact ? typography.sizes.base : typography.sizes.lg,
        fontWeight: typography.weights.semibold,
        color: colors.text.primary,
        marginBottom: spacing.xs,
        fontFamily: typography.fontFamily,
      }}>
        {title}
      </h3>
      {description && (
        <p style={{
          fontSize: typography.sizes.sm,
          color: colors.text.tertiary,
          maxWidth: '320px',
          margin: '0 auto',
          lineHeight: typography.lineHeights.relaxed,
          fontFamily: typography.fontFamily,
        }}>
          {description}
        </p>
      )}
    </div>
    {actionLabel && onAction && (
      <Button
        onClick={onAction}
        variant="primary"
        style={{ marginTop: spacing.xs }}
      >
        {actionLabel}
      </Button>
    )}
  </div>
);

export default EmptyState;
