# PerformSAT - Code Handoff Spec & Scaffolding

This document provides the developer handoff specification and actual CSS scaffolding for the PerformSAT Orange-Gradient Design System.

## 1. CSS Design Tokens Scaffolding (`src/design-tokens.css`)

Since the project uses raw React without Tailwind, we provide CSS variables (custom properties) that map directly to our design system spec.

```css
:root {
  /* Neutrals */
  --color-white: #FFFFFF;
  --color-slate-50: #F8FAFC;
  --color-slate-100: #F1F5F9;
  --color-slate-200: #E2E8F0;
  --color-slate-300: #CBD5E1;
  --color-slate-400: #94A3B8;
  --color-slate-500: #64748B;
  --color-slate-600: #475569;
  --color-slate-700: #334155;
  --color-slate-800: #1E293B;
  --color-slate-900: #0F172A;

  /* Brand */
  --color-brand-orange-400: #FB923C;
  --color-brand-orange-500: #F97316;
  --color-brand-orange-600: #EA580C;
  --color-brand-amber-400: #FBBF24;
  --color-brand-peach-100: #FFEDD5;

  /* Semantic */
  --color-success-100: #D1FAE5;
  --color-success-600: #059669;
  --color-warning-100: #FEF3C7;
  --color-warning-600: #D97706;
  --color-error-100: #FFE4E6;
  --color-error-600: #E11D48;
  --color-info-100: #E0F2FE;
  --color-info-600: #0284C7;

  /* Gradients */
  --gradient-brand-primary: linear-gradient(135deg, #FF7E5F 0%, #FEB47B 100%);
  --gradient-brand-warm: linear-gradient(135deg, #FFF7ED 0%, #FFEDD5 100%);
  
  /* Shadows */
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  --shadow-brand-glow: 0 4px 14px 0 rgba(255, 126, 95, 0.39);

  /* Typography */
  --font-ui: 'Inter', system-ui, sans-serif;
  --font-reading: 'Georgia', serif;

  /* Radii */
  --radius-sm: 0.25rem;
  --radius-md: 0.375rem;
  --radius-lg: 0.5rem;
  --radius-xl: 0.75rem;
  --radius-2xl: 1rem;
  --radius-full: 9999px;
}
```

## 2. Component Scaffolding Rules

When building React components, strictly adhere to these CSS variables. Avoid hardcoding hex values or raw pixel sizes for padding/margins.

### Example: Primary Button
```jsx
// src/components/ui/PrimaryButton.jsx
import React from 'react';
import './PrimaryButton.css'; // Contains the styles utilizing the CSS variables

export const PrimaryButton = ({ children, onClick, disabled }) => {
  return (
    <button 
      className="btn-primary" 
      onClick={onClick} 
      disabled={disabled}
    >
      {children}
    </button>
  );
};
```

```css
/* src/components/ui/PrimaryButton.css */
.btn-primary {
  background: var(--gradient-brand-primary);
  color: var(--color-white);
  border: none;
  border-radius: var(--radius-lg);
  padding: 0.75rem 1.5rem;
  font-family: var(--font-ui);
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}

.btn-primary:hover:not(:disabled) {
  box-shadow: var(--shadow-brand-glow);
  transform: translateY(-1px);
}

.btn-primary:focus {
  outline: 2px solid var(--color-brand-orange-400);
  outline-offset: 2px;
}

.btn-primary:disabled {
  background: var(--color-slate-200);
  color: var(--color-slate-400);
  cursor: not-allowed;
  box-shadow: none;
}
```

## 3. Implementation Handoff Notes

1. **Global Styles**: Import `design-tokens.css` at the top of your `src/index.js` or `src/App.jsx` to ensure all variables are globally available.
2. **Typography Setup**: Ensure the `Inter` font is imported (e.g., via Google Fonts in `public/index.html`).
3. **Responsive Design**: Use standard CSS media queries for breakpoints (e.g., `@media (max-width: 768px)` for mobile) and utilize CSS grid/flexbox to achieve the structural layouts defined in the `screen-blueprint`.
