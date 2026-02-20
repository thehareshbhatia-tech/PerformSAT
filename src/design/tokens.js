// PerformSAT Design System — Single Source of Truth
// All components should import tokens from this file.
// Do NOT define color/typography/spacing constants inline in components.

export const colors = {
  text: {
    primary: '#0a0a0a',
    secondary: '#525252',
    tertiary: '#737373',
    muted: '#a3a3a3',
    inverse: '#ffffff',
  },
  accent: {
    orange: '#ea580c',
    orangeHover: '#c2410c',
    orangeLight: '#fff7ed',
    orangeMuted: '#ffedd5',
    teal: '#0d9488',
    tealLight: '#f0fdfa',
    purple: '#7c3aed',
    purpleLight: '#f5f3ff',
  },
  surface: {
    white: '#ffffff',
    offWhite: '#fafafa',
    gray: '#f5f5f5',
    grayDark: '#e5e5e5',
    grayMedium: '#d4d4d4',
    dark: '#171717',
  },
  semantic: {
    success: '#16a34a',
    successLight: '#f0fdf4',
    successBg: '#dcfce7',
    error: '#dc2626',
    errorLight: '#fef2f2',
    errorBg: '#fee2e2',
    info: '#2563eb',
    infoLight: '#eff6ff',
    infoBg: '#dbeafe',
    warning: '#f59e0b',
    warningLight: '#fffbeb',
    warningBg: '#fef3c7',
  },
  overlay: 'rgba(0, 0, 0, 0.4)',
  skeleton: '#e5e5e5',
  focus: 'rgba(234, 88, 12, 0.4)',
  badge: {
    gold: '#f59e0b',
    silver: '#94a3b8',
    bronze: '#d97706',
  },
};

export const typography = {
  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Arial, sans-serif',
  fontFamilyMath: 'Georgia, "Times New Roman", serif',
  fontFamilyMono: '"SF Mono", "Fira Code", "Fira Mono", Menlo, Consolas, monospace',
  sizes: {
    caption: '0.625rem',   // 10px
    xs: '0.6875rem',       // 11px
    sm: '0.8125rem',       // 13px
    base: '0.9375rem',     // 15px
    md: '1.0625rem',       // 17px
    lg: '1.1875rem',       // 19px
    xl: '1.375rem',        // 22px
    '2xl': '1.75rem',      // 28px
    '3xl': '2.25rem',      // 36px
    '4xl': '3rem',         // 48px
    display: '4rem',       // 64px
  },
  weights: {
    regular: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    heavy: '900',
  },
  lineHeights: {
    tight: '1.2',
    normal: '1.5',
    relaxed: '1.7',
  },
  letterSpacing: {
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.1em',
  },
};

export const spacing = {
  xs: '0.5rem',    // 8px
  sm: '0.75rem',   // 12px
  md: '1rem',      // 16px
  lg: '1.5rem',    // 24px
  xl: '2rem',      // 32px
  '2xl': '3rem',   // 48px
  '3xl': '4rem',   // 64px
  '4xl': '5rem',   // 80px
};

export const radius = {
  sm: '8px',
  md: '12px',
  lg: '16px',
  xl: '24px',
  '2xl': '32px',
  full: '9999px',
};

export const shadows = {
  none: 'none',
  sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
  md: '0 4px 12px rgba(0, 0, 0, 0.08)',
  lg: '0 8px 24px rgba(0, 0, 0, 0.12)',
  xl: '0 16px 48px rgba(0, 0, 0, 0.16)',
  inner: 'inset 0 2px 4px rgba(0, 0, 0, 0.05)',
  focus: '0 0 0 3px rgba(234, 88, 12, 0.4)',
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

// Backward-compatible "design" object for gradual migration
// Components can import this while transitioning from the old inline tokens
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
