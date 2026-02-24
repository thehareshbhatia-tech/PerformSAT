// Responsive Rules and Fallback Interactions

// Desktop View (> 1024px)
// - Fixed three-pane layout.
// - Left: LearnRail (approx. 280px wide).
// - Center: LessonStage (fluid, takes remaining width).
// - Right: AICoachPane (approx. 320px wide).

// Tablet View (768px - 1024px)
// - Fixed two-pane layout.
// - Left: LearnRail (approx. 260px wide).
// - Center: LessonStage (fluid, takes remaining width).
// - Right: AICoachPane is hidden by default. A Floating Action Button (FAB) appears in the bottom right corner (e.g., an AI icon).
//   - Clicking the FAB opens the AICoachPane as a slide-in overlay from the right, partially covering the LessonStage.
//   - The overlay should have a close button to dismiss it.
//   - When the overlay is open, clicking outside it (on the LessonStage) should close it.

// Mobile View (< 768px)
// - Single-pane layout.
// - Center: LessonStage takes full width.
// - Left: LearnRail is hidden. A hamburger menu icon (or a "Menu" button) appears in the top navigation bar or breadcrumb area.
//   - Clicking the menu icon opens the LearnRail as a slide-in drawer from the left, covering the LessonStage.
//   - The drawer should have a close button or close when clicking outside.
//   - Selecting a lesson from the drawer should close the drawer and update the LessonStage.
// - Right: AICoachPane remains accessible via the FAB, sliding in from the right as an overlay.

// Common Fallbacks & Accessibility
// - All overlays (LearnRail drawer, AICoachPane overlay) must use Focus Traps when open to prevent tab navigation into the hidden background content.
// - Provide `aria-hidden="true"` to background content when an overlay is open.
// - Ensure close buttons in overlays are clearly focusable and labeled (e.g., `aria-label="Close menu"`).
// - The "Up Next" card at the bottom of the LessonStage is crucial for mobile, as the LearnRail is hidden. It must be prominent to ensure users can progress without opening the menu.
