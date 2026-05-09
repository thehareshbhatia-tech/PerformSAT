// PerformSAT Design System — Single Source of Truth
// We map these legacy token names directly to our new CSS variables
// defined in src/design-tokens.css so that old components automatically
// inherit the new orange-gradient Acely-inspired design system.

export const colors = {
  text: {
    primary: 'var(--color-slate-900)',
    secondary: 'var(--color-slate-600)',
    tertiary: 'var(--color-slate-500)',
    muted: 'var(--color-slate-400)',
    inverse: 'var(--color-white)',
  },
  accent: {
    orange: 'var(--color-brand-primary)',
    orangeHover: 'var(--color-brand-primary-hover)',
    orangeLight: 'var(--color-brand-primary-light)',
    orangeMuted: 'var(--color-brand-primary-light)', // Using primary-light for muted
    teal: 'var(--color-info-600)', // Mapping legacy teal to semantic info
    tealLight: 'var(--color-info-100)',
    purple: 'var(--color-brand-primary)', // Mapping legacy purple to brand primary
    purpleLight: 'var(--color-brand-primary-light)',
  },
  surface: {
    white: 'var(--color-white)',
    offWhite: 'var(--color-slate-50)',
    gray: 'var(--color-slate-100)',
    grayDark: 'var(--color-slate-200)',
    grayMedium: 'var(--color-slate-300)',
    dark: 'var(--color-slate-800)',
  },
  semantic: {
    success: 'var(--color-success-600)',
    successLight: 'var(--color-success-100)',
    successBg: 'var(--color-success-100)',
    error: 'var(--color-error-600)',
    errorLight: 'var(--color-error-100)',
    errorBg: 'var(--color-error-100)',
    info: 'var(--color-info-600)',
    infoLight: 'var(--color-info-100)',
    infoBg: 'var(--color-info-100)',
    warning: 'var(--color-warning-600)',
    warningLight: 'var(--color-warning-100)',
    warningBg: 'var(--color-warning-100)',
  },
  overlay: 'rgba(15, 23, 42, 0.4)', // slate-900 with opacity
  skeleton: 'var(--color-slate-200)',
  focus: 'var(--color-brand-primary)',
  badge: {
    gold: 'var(--color-warning-600)',
    silver: 'var(--color-slate-400)',
    bronze: 'var(--color-brand-amber-400)',
  },
};

export const typography = {
  fontFamily: 'var(--font-ui)',
  fontFamilyMath: 'var(--font-reading)',
  fontFamilyMono: '"Fira Code", monospace',
  // Two-typeface lockup (Day 5 of Acely-parity batch).
  // Use these aliases for new surfaces instead of fontFamily/fontFamilyMath
  // so the intent is explicit at the call site.
  //   ui        — buttons, persistent metrics, numerals, dense-info chrome
  //   narrative — diagnostic sentence, weakness names, "what changed" deltas,
  //               empty-state copy, anything that reads like editorial prose
  ui: 'var(--font-ui)',
  narrative: 'var(--font-reading)',
  sizes: {
    caption: '0.625rem',
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    md: '1.125rem',
    lg: '1.25rem',
    xl: '1.5rem',
    '2xl': '1.875rem',
    '3xl': '2.25rem',
    '4xl': '3rem',
    display: '4rem',
  },
  weights: {
    regular: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    heavy: '900',
  },
  lineHeights: {
    tight: '1.25',
    normal: '1.5',
    relaxed: '1.75',
  },
  letterSpacing: {
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.1em',
  },
};

export const spacing = {
  xs: '0.5rem',
  sm: '0.75rem',
  md: '1rem',
  lg: '1.5rem',
  xl: '2rem',
  '2xl': '3rem',
  '3xl': '4rem',
  '4xl': '5rem',
};

export const radius = {
  sm: 'var(--radius-sm)',
  md: 'var(--radius-md)',
  lg: 'var(--radius-lg)',
  xl: 'var(--radius-xl)',
  '2xl': 'var(--radius-2xl)',
  full: 'var(--radius-full)',
};

export const shadows = {
  none: 'none',
  sm: 'var(--shadow-sm)',
  md: 'var(--shadow-md)',
  lg: 'var(--shadow-lg)',
  xl: 'var(--shadow-lg)',
  inner: 'inset 0 2px 4px rgba(0, 0, 0, 0.05)',
  focus: '0 0 0 3px rgba(234, 88, 12, 0.4)', // brand primary
};

export const transitions = {
  fast: '150ms cubic-bezier(0.25, 0.1, 0.25, 1)',
  normal: '250ms cubic-bezier(0.25, 0.1, 0.25, 1)',
  slow: '350ms cubic-bezier(0.25, 0.1, 0.25, 1)',
  spring: '500ms cubic-bezier(0.34, 1.56, 0.64, 1)',
  sheet: '300ms cubic-bezier(0.32, 0.72, 0, 1)',
};

export const breakpoints = {
  mobile: 375,
  tablet: 768,
  desktop: 1024,
  wide: 1440,
};

export const zIndex = {
  base: 0,
  dropdown: 100,
  sticky: 200,
  overlay: 300,
  modal: 400,
  toast: 500,
  tooltip: 600,
};

const design = {
  colors,
  typography,
  spacing,
  radius,
  shadows,
  transitions,
  breakpoints,
  zIndex,
};

export default design;
