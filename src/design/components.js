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
    /* No outline:'none' — let the global *:focus-visible ring (design/global.css)
       show on keyboard focus; mouse focus is suppressed there via :not(:focus-visible). */
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
    transform: 'scale(0.97)',
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
    borderColor: colors.surface.grayMedium,
  },
  tertiary: {
    backgroundColor: 'transparent',
    color: colors.accent.orange,
    fontWeight: typography.weights.medium,
    borderRadius: radius.sm,
    height: '44px',
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
    transform: 'scale(0.97)',
  },
  ghost: {
    backgroundColor: 'transparent',
    color: colors.text.secondary,
    fontWeight: typography.weights.regular,
    borderRadius: radius.sm,
    height: '44px',
    padding: `0 ${spacing.sm}`,
  },
  ghostHover: {
    backgroundColor: colors.surface.gray,
    color: colors.text.primary,
  },
  icon: {
    width: '40px',
    height: '40px',
    borderRadius: radius.full,
    backgroundColor: 'transparent',
    padding: 0,
  },
  iconHover: {
    backgroundColor: colors.surface.gray,
  },
};

export const cardStyles = {
  // Flat — no border, no shadow. For nested/inline content areas
  flat: {
    backgroundColor: colors.surface.gray,
    borderRadius: radius.md,
    padding: spacing.md,
    border: 'none',
    boxShadow: 'none',
  },
  // Subtle — light border, no shadow. Quiet background cards
  subtle: {
    backgroundColor: colors.surface.white,
    borderRadius: radius.lg,
    padding: spacing.lg,
    border: `1px solid ${colors.surface.grayDark}`,
    boxShadow: 'none',
  },
  // Default — border + slight shadow. Standard content cards
  base: {
    backgroundColor: colors.surface.white,
    borderRadius: radius.lg,
    padding: spacing.lg,
    border: `1px solid ${colors.surface.grayDark}`,
    boxShadow: shadows.sm,
  },
  // Prominent — no border, stronger shadow. CTAs, hero sections
  prominent: {
    backgroundColor: colors.surface.white,
    borderRadius: radius.lg,
    padding: spacing.lg,
    border: 'none',
    boxShadow: shadows.md,
  },
  // Elevated — large shadow. Modals, popovers
  elevated: {
    backgroundColor: colors.surface.white,
    borderRadius: radius.lg,
    padding: spacing.lg,
    border: 'none',
    boxShadow: shadows.lg,
  },
  // Interactive — for clickable cards
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
    transform: 'scale(1.01)',
    borderColor: colors.surface.grayMedium,
  },
  // Dark — for hero/featured sections
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
    /* No outline:'none' — keyboard focus shows the global *:focus-visible ring.
       The focus/error/success variants below still apply richer treatment when wired. */
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
