# Quality Gates & Acceptance Tests

## UX Flow Tests
1. **Continuous Progression:** A user starts at Lesson 1 of a module. They can click "Mark Complete & Continue" (or the next lesson in the rail) repeatedly to reach the end of the module *without ever needing to click a "Back" button to return to a list view*.
2. **Deep-Link Resume:** If a user is on Lesson 3 and refreshes the page, the workspace reloads directly into Lesson 3 with the correct rail selection and AI context. (Depends on how routing is ultimately wired, but state must persist).
3. **Non-Adjacent Jumping:** A user on Lesson 1 can click Lesson 5 in the rail. The LessonStage updates immediately to Lesson 5. The AI Coach context updates silently without losing the chat thread history.
4. **Content Type Handling:** Transitioning from a video lesson to a text-only lesson correctly unmounts the video player and renders the text blocks seamlessly, without layout jumping.

## Accessibility Tests (WCAG AA)
1. **Keyboard Traversal:** A user can navigate the entire LearnRail using only the `Tab` and `Arrow` keys. Focus states must be clearly visible (e.g., an orange outline).
2. **Player Accessibility:** If a video is present, the user can tab into the video player controls.
3. **Contrast:** All text in the LearnRail, LessonStage, and AICoachPane meets at least a 4.5:1 contrast ratio against its background. Special attention to orange accent text on light backgrounds.
4. **Screen Reader Context:** The "Up Next" button announces what lesson is coming next (e.g., `aria-label="Mark complete and continue to lesson: What is the Slope?"`).
5. **Mobile Overlays:** When the mobile menu drawer or AI coach overlay is open, focus is trapped within the overlay, and the background content has `aria-hidden="true"`.

## Performance Tests
1. **Layout Stability:** Changing lessons does not cause the LearnRail or AICoachPane to shift position or resize. The LessonStage content updates smoothly.
2. **Video Mount/Unmount:** Switching between video lessons quickly does not leave orphaned audio playing or cause memory leaks. The player component must unmount cleanly.

## Visual Quality (Apple Grade)
1. **Glassmorphism Consistency:** The `backdrop-filter` on the rail and coach pane works correctly against the `var(--color-slate-50)` background, especially if ambient gradients are used behind them.
2. **Typography Hierarchy:** Headings in the LessonStage use tight tracking (`-0.02em`) and the body text is legible (`1.0625rem`, `1.6` line height) matching the spec.
3. **Restrained Branding:** The brand orange is used *only* for active states (rail selection), primary calls to action (Up Next button), and the ambient video halo. It is not overused on large structural elements.
