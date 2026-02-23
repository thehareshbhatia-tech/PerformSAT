# PerformSAT - Style Guardrails

## Acely-Inspired Quality Targets (Structure & Polish)
PerformSAT borrows the *level of polish* and *clarity* from Acely AI, not its exact visual assets.
- **Hierarchy & Layout:** Ample whitespace, card-based content grouping, and clear typographic distinction between headings, metadata, and body text.
- **Data Density:** Don't cram too much onto one screen. Use progressive disclosure (accordions, tabs, drill-down panels) for complex diagnostics.
- **Clarity over Cleverness:** Ensure all calls-to-action (CTAs) are unmistakably actionable. The interface should feel like a serious, yet modern educational tool.
- **Consistency:** Use a strict spacing scale (e.g., 4px, 8px, 16px, 24px, 32px) and consistent border radii (e.g., 8px for small inputs, 12px for cards).

## The Original Signature: Orange-Gradient Visual Language
To differentiate PerformSAT, we use a distinct, energetic orange-gradient brand language instead of the typical "ed-tech blue".

### Color Strategy
- **Base Neutrals:** Clean whites (#FFFFFF) and very light grays (e.g., #F8FAFC, #F1F5F9) for backgrounds to ensure high contrast for reading test questions. Deep slate/charcoal (e.g., #0F172A, #1E293B) for primary text.
- **Primary Gradients (The "Signature"):**
  - **`brandPrimary`:** A vibrant orange-to-amber gradient (e.g., #FF7E5F to #FEB47B). Used *only* for primary buttons, active states, and high-impact visual moments (e.g., achieving a goal score).
  - **`brandWarm`:** A softer, subtle peach gradient for secondary accents or subtle card backgrounds (e.g., highlighting a specific hint or an AI tutor message bubble).
  - **`surfaceGlow`:** Very faint orange/yellow glows or drop shadows to emphasize active/selected elements (e.g., a selected multiple-choice answer).
- **Semantic Colors:**
  - **`success`:** A harmonious, warm green (e.g., #10B981) that doesn't clash with the orange.
  - **`warning`:** A golden yellow (e.g., #F59E0B) that complements the orange palette.
  - **`error`:** A crisp, distinct red/rose (e.g., #E11D48) for incorrect answers.
  - **`info`:** A muted, warm blue or teal (e.g., #0EA5E9) for neutral information.

### Usage Constraints for Orange Gradients
- **No Gradient Overload:** Do *not* use gradients for dense data areas, reading passages, or math equation backgrounds. They must remain pure white/neutral.
- **Emphasis Only:** Reserve gradients for the "Hero" section, main CTA buttons, progress bars (`ScoreSlider`), and focus states.
- **Text Readability:** Never place long-form body text over a gradient. Ensure white text (#FFFFFF) on the `brandPrimary` gradient meets WCAG AA contrast.

### Typography
- **Primary Font:** A clean, geometric sans-serif (e.g., Inter, Plus Jakarta Sans, or similar) for UI elements, headings, and numbers.
- **Reading Font:** A highly legible serif or standard sans-serif (e.g., Georgia or Arial, mimicking the Bluebook app) specifically for the reading passages and test questions to simulate the real exam environment.

### Elevation & Shadow
- **Soft & Layered:** Use soft, diffused drop shadows with a slight warm tint (e.g., mixing a tiny bit of orange into the gray shadow) for floating elements like the `AiTutorChat` widget, modals, and sticky navbars.
- **Flat by Default:** Most content cards should use a subtle 1px border (e.g., #E2E8F0) rather than heavy drop shadows to keep the UI feeling lightweight.

### Motion Principles
- **Snappy & Encouraging:** Interactions should feel fast and responsive.
- **Micro-interactions:** Add subtle scale-up effects on buttons when hovered, and a satisfying "pop" or smooth fill animation when a user selects an answer or completes a lesson.
