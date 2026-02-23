# PerformSAT Design System Spec

## 1. Design Tokens (JSON Representation)
```json
{
  "colors": {
    "neutrals": {
      "white": "#FFFFFF",
      "slate-50": "#F8FAFC",
      "slate-100": "#F1F5F9",
      "slate-200": "#E2E8F0",
      "slate-300": "#CBD5E1",
      "slate-400": "#94A3B8",
      "slate-500": "#64748B",
      "slate-600": "#475569",
      "slate-700": "#334155",
      "slate-800": "#1E293B",
      "slate-900": "#0F172A"
    },
    "brand": {
      "orange-400": "#FB923C",
      "orange-500": "#F97316",
      "orange-600": "#EA580C",
      "amber-400": "#FBBF24",
      "peach-100": "#FFEDD5"
    },
    "semantic": {
      "success-100": "#D1FAE5",
      "success-600": "#059669",
      "warning-100": "#FEF3C7",
      "warning-600": "#D97706",
      "error-100": "#FFE4E6",
      "error-600": "#E11D48",
      "info-100": "#E0F2FE",
      "info-600": "#0284C7"
    },
    "gradients": {
      "brandPrimary": "linear-gradient(135deg, #FF7E5F 0%, #FEB47B 100%)",
      "brandWarm": "linear-gradient(135deg, #FFF7ED 0%, #FFEDD5 100%)",
      "surfaceGlow": "0 4px 14px 0 rgba(255, 126, 95, 0.39)"
    }
  },
  "typography": {
    "fonts": {
      "ui": "'Inter', sans-serif",
      "reading": "'Georgia', serif",
      "mono": "'Fira Code', monospace"
    },
    "scale": {
      "xs": { "size": "0.75rem", "lineHeight": "1rem" },
      "sm": { "size": "0.875rem", "lineHeight": "1.25rem" },
      "base": { "size": "1rem", "lineHeight": "1.5rem" },
      "lg": { "size": "1.125rem", "lineHeight": "1.75rem" },
      "xl": { "size": "1.25rem", "lineHeight": "1.75rem" },
      "2xl": { "size": "1.5rem", "lineHeight": "2rem" },
      "3xl": { "size": "1.875rem", "lineHeight": "2.25rem" },
      "4xl": { "size": "2.25rem", "lineHeight": "2.5rem" }
    }
  },
  "spacing": {
    "1": "0.25rem", "2": "0.5rem", "3": "0.75rem", "4": "1rem", 
    "6": "1.5rem", "8": "2rem", "12": "3rem", "16": "4rem"
  },
  "radii": {
    "sm": "0.25rem",
    "md": "0.375rem",
    "lg": "0.5rem",
    "xl": "0.75rem",
    "2xl": "1rem",
    "full": "9999px"
  },
  "shadows": {
    "sm": "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    "md": "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    "lg": "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    "brand": "0 4px 14px 0 rgba(255, 126, 95, 0.39)"
  }
}
```

## 2. Core Components

### Primary Button
- **Background:** `brandPrimary` gradient.
- **Text Color:** `white` (WCAG AA compliant).
- **Border Radius:** `lg` (8px) for a modern, slightly soft feel.
- **Padding:** px-6, py-3 for standard size.
- **Typography:** `ui` font, `base` size, `font-semibold`.
- **States:**
  - **Hover:** Slightly brighter gradient (e.g., #FF8A6E to #FFC192), adds `brand` shadow.
  - **Focus:** Ring 2px `orange-400`, offset 2px.
  - **Disabled:** Background `slate-200`, text `slate-400`, cursor not-allowed.

### Secondary/Ghost Button
- **Background:** Transparent.
- **Text Color:** `slate-700`.
- **Border:** 1px solid `slate-300`.
- **States:**
  - **Hover:** Background `slate-50`, text `slate-900`, border `slate-400`.
  - **Active:** Background `slate-100`.

### Multiple Choice Option Card
- **Background:** `white`.
- **Border:** 1px solid `slate-200`.
- **Border Radius:** `xl` (12px).
- **Padding:** p-4.
- **States:**
  - **Hover:** Border `slate-300`, background `slate-50`.
  - **Selected:** Border 2px `orange-500`, background `brandWarm`, `surfaceGlow` shadow. Text color remains dark `slate-800` for readability.
  - **Correct (Review mode):** Border 2px `success-600`, background `success-100`.
  - **Incorrect (Review mode):** Border 2px `error-600`, background `error-100`.

### Data Card
- **Background:** `white`.
- **Border Radius:** `2xl` (16px).
- **Shadow:** `sm` by default, `md` on hover.
- **Border:** 1px solid `slate-200`.

### AI Tutor Chat Bubble
- **User Message:** Background `slate-100`, text `slate-800`, border radius `xl` (bottom-right `sm`).
- **AI Message:** Background `white`, border 1px `slate-200`, text `slate-800`, border radius `xl` (bottom-left `sm`). Optional: A tiny orange accent line on the left border.

## 3. Screen Blueprint: Student Dashboard
- **Layout:** Top Navigation Bar (Logo left, Profile right). Main content max-width 1200px, centered.
- **Hero Section:**
  - A large `Data Card` displaying "Your Target: 1500".
  - Uses the `ScoreSlider` component. The slider track uses the `brandPrimary` gradient.
- **Next Up Section:**
  - A grid of 2-3 smaller `Data Cards`.
  - "Take Practice Test 4" CTA uses `Primary Button`.
- **Diagnostic Widget:**
  - Displays mini bar charts or radial progress circles using `orange-500` for Math and `amber-400` for Reading/Writing.

## 4. Interaction & Edge Cases
- **Answer Selection:** When an option is clicked, it instantly switches to the 'Selected' state. A subtle scale transform (e.g., `scale(1.02)`) runs for 150ms.
- **10-Minute Warning:** The timer text (normally `slate-700`) turns `warning-600` and pulses gently (opacity 0.7 to 1.0) 3 times, without a blocking modal.
- **Empty State (Diagnostic):** A friendly illustration (perhaps a telescope or magnifying glass) in grayscale with a subtle orange accent. Text: "Take your first practice test to unlock your skill diagnostics!"
- **AI Tutor Loading:** Three small dots animating in a wave inside the AI message bubble, using `slate-400`.
