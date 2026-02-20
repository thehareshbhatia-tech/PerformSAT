// Shared component style factories
// Usage: const style = buttonStyles.primary;
import { colors, typography, spacing, radius, shadows, transitions } from './tokens';

export const buttonStyles = {
  base: {
    fontFamily: typography.fontFamily,
    fontSize: typography.sizes.base,
    fontWeight: typography.weights.semibold,
    border: 'none',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.xs,
    transition: `all ${transitions.fast}`,
    outline: 'none',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
  },
  primary: {
    backgroundColor: colors.accent.orange,
    color: colors.text.inverse,
    borderRadius: radius.md,
    height: '48px',
    padding: `0 ${spacing.lg}`,
  },
  primaryHover: {
    backgroundColor: colors.accent.orangeHover,
    transform: 'scale(0.98)',
  },
  secondary: {
    backgroundColor: 'transparent',
    color: colors.text.primary,
    fontWeight: typography.weights.medium,
    borderRadius: radius.md,
    height: '44px',
    padding: `0 ${spacing.lg}`,
    border: `1px solid ${colors.surface.grayDark}`,
  },
  secondaryHover: {
    backgroundColor: colors.surface.gray,
    borderColor: colors.text.muted,
  },
  tertiary: {
    backgroundColor: 'transparent',
    color: colors.accent.orange,
    fontWeight: typography.weights.medium,
    borderRadius: radius.sm,
    height: '40px',
    padding: `0 ${spacing.md}`,
  },
  tertiaryHover: {
    backgroundColor: colors.accent.orangeLight,
  },
  destructive: {
    backgroundColor: colors.semantic.error,
    color: colors.text.inverse,
    borderRadius: radius.md,
    height: '48px',
    padding: `0 ${spacing.lg}`,
  },
  destructiveHover: {
    backgroundColor: '#b91c1c',
    transform: 'scale(0.98)',
  },
  ghost: {
    backgroundColor: 'transparent',
    color: colors.text.secondary,
    fontWeight: typography.weights.regular,
    borderRadius: radius.sm,
    height: '36px',
    padding: `0 ${spacing.sm}`,
  },
  ghostHover: {
    backgroundColor: colors.surface.gray,
    color: colors.text.primary,
  },
};

export const cardStyles = {
  base: {
    backgroundColor: colors.surface.white,
    borderRadius: radius.lg,
    padding: spacing.lg,
    border: `1px solid ${colors.surface.grayDark}`,
    boxShadow: shadows.sm,
  },
  elevated: {
    backgroundColor: colors.surface.white,
    borderRadius: radius.lg,
    padding: spacing.lg,
    border: 'none',
    boxShadow: shadows.lg,
  },
  interactive: {
    backgroundColor: colors.surface.white,
    borderRadius: radius.lg,
    padding: spacing.lg,
    border: `1px solid ${colors.surface.grayDark}`,
    boxShadow: shadows.sm,
    cursor: 'pointer',
    transition: `all ${transitions.normal}`,
  },
  interactiveHover: {
    boxShadow: shadows.md,
    transform: 'translateY(-2px)',
    borderColor: colors.accent.orangeMuted,
  },
  dark: {
    backgroundColor: colors.surface.dark,
    color: colors.text.inverse,
    borderRadius: radius.lg,
    padding: spacing.lg,
    border: 'none',
  },
};

export const inputStyles = {
  base: {
    fontFamily: typography.fontFamily,
    fontSize: typography.sizes.base,
    height: '48px',
    borderRadius: radius.md,
    padding: `0 ${spacing.md}`,
    border: `1px solid ${colors.surface.grayDark}`,
    outline: 'none',
    transition: `all ${transitions.fast}`,
    backgroundColor: colors.surface.white,
    color: colors.text.primary,
    width: '100%',
    boxSizing: 'border-box',
  },
  focus: {
    borderColor: colors.accent.orange,
    boxShadow: shadows.focus,
  },
  error: {
    borderColor: colors.semantic.error,
    boxShadow: '0 0 0 3px rgba(220, 38, 38, 0.2)',
  },
  success: {
    borderColor: colors.semantic.success,
  },
  disabled: {
    backgroundColor: colors.surface.gray,
    color: colors.text.muted,
    cursor: 'not-allowed',
  },
};

export const tabStyles = {
  bar: {
    display: 'flex',
    gap: spacing.xs,
    borderBottom: `1px solid ${colors.surface.grayDark}`,
    position: 'relative',
  },
  tab: {
    fontFamily: typography.fontFamily,
    fontSize: typography.sizes.sm,
    fontWeight: typography.weights.medium,
    color: colors.text.tertiary,
    padding: `${spacing.sm} ${spacing.md}`,
    border: 'none',
    background: 'none',
    cursor: 'pointer',
    transition: `color ${transitions.fast}`,
    position: 'relative',
  },
  tabActive: {
    color: colors.accent.orange,
    fontWeight: typography.weights.semibold,
  },
  indicator: {
    position: 'absolute',
    bottom: '-1px',
    height: '2px',
    backgroundColor: colors.accent.orange,
    borderRadius: '1px',
    transition: `all ${transitions.normal}`,
  },
};

export const badgeStyles = {
  base: {
    fontFamily: typography.fontFamily,
    fontSize: typography.sizes.xs,
    fontWeight: typography.weights.semibold,
    padding: `2px ${spacing.xs}`,
    borderRadius: radius.full,
    display: 'inline-flex',
    alignItems: 'center',
  },
  success: {
    backgroundColor: colors.semantic.successLight,
    color: colors.semantic.success,
  },
  error: {
    backgroundColor: colors.semantic.errorLight,
    color: colors.semantic.error,
  },
  info: {
    backgroundColor: colors.semantic.infoLight,
    color: colors.semantic.info,
  },
  warning: {
    backgroundColor: colors.semantic.warningLight,
    color: colors.semantic.warning,
  },
  neutral: {
    backgroundColor: colors.surface.gray,
    color: colors.text.secondary,
  },
};
