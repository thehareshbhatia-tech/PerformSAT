# Apple-Grade Design System & Interaction Spec for Learn Workspace

## Visual Language: "Ambient Intelligence"

To achieve the "Apple-level, non-vibecoded" aesthetic requested, the Learn workspace must prioritize:

1.  **Restraint:** Gradients are accents, not floods. The primary surface is a breathable, soft off-white or deep slate (depending on dark/light mode), allowing the content to stand out.
2.  **Depth & Material:** Use translucency (`backdrop-filter: blur`) and subtle, multi-layered shadows to establish hierarchy (Rail vs. Content vs. AI Pane). This mimics VisionOS/iOS glassmorphism.
3.  **Rhythm & Space:** Generous margins (`32px` to `64px` between major sections). Typography must follow a strict scale (e.g., San Francisco Pro or Inter, with tight tracking on headings and relaxed leading on body text).
4.  **Brand Accents:** The signature orange gradient (`linear-gradient(135deg, #FF9F0A 0%, #FF5E3A 100%)`) is reserved for primary actions, active states (like the current lesson indicator in the rail), and subtle ambient glows behind the video player.

## Design Tokens (Learn Workspace Additions)

These tokens extend the existing `src/design-tokens.css` file. Gemini must use these specific CSS variables for the implementation.

```css
/* Learn Workspace Specifics */
--color-learn-rail-bg: rgba(245, 245, 247, 0.65); /* Apple Hardware Off-White, translucent */
--color-learn-rail-border: rgba(0, 0, 0, 0.05);
--color-learn-content-bg: #FFFFFF;
--color-learn-ai-pane-bg: rgba(255, 255, 255, 0.85);

/* Active Lesson Highlight (Rail) */
--color-lesson-active-bg: rgba(255, 149, 0, 0.08); /* Brand orange, very low opacity */
--color-lesson-active-text: var(--color-brand-orange-600);
--color-lesson-active-border: var(--color-brand-orange-500);

/* Status Icons */
--color-status-complete: var(--color-semantic-success); /* e.g., #34C759 */
--color-status-pending: var(--color-slate-300);

/* Typography Adjustments */
--font-learn-body: 16px; /* Slightly larger for long-form reading */
--line-height-learn-body: 1.6;

/* Depth & Material */
--shadow-workspace-pane: 0 4px 24px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.02);
--blur-workspace-rail: blur(20px);
```

## Interaction Principles & Motion Specs

The goal is a fluid, continuous journey. Hard unmounts and sudden flashes are forbidden.

1.  **In-Place Transitions (The Core UX Feature):**
    *   When navigating from Lesson A to Lesson B via the Rail or "Next" button:
    *   The `LearnWorkspace` shell remains static.
    *   The `LessonContentPane` content fades out (`opacity: 0`, `duration: 150ms`, `easing: ease-in`).
    *   The new content fades in and slides up slightly (`opacity: 1`, `transform: translateY(0)`, `duration: 250ms`, `easing: cubic-bezier(0.2, 0.8, 0.2, 1)`).
    *   The scroll position of the `LessonContentPane` resets to the top seamlessly during the transition.

2.  **The Learn Rail (Left Sidebar):**
    *   **Default State:** Lessons are subtle, dim text.
    *   **Hover State:** Background shifts to a very light gray (`rgba(0,0,0,0.02)`), text darkens. Cursor changes to pointer.
    *   **Active State (Current Lesson):** Background highlights with a faint orange tint (`--color-lesson-active-bg`), a 2px left border appears in solid orange, and text weight increases to 600.
    *   **Completed State:** A subtle green checkmark icon (`--color-status-complete`) appears next to the title.

3.  **Video Player & Ambient Glow:**
    *   To frame the video (the focal point of the lesson), place a subtle, diffuse radial gradient behind the player container using the brand colors. This gives the player a premium, theater-like presence.
    *   *Spec:* `radial-gradient(circle at 50% 50%, rgba(255, 149, 0, 0.15) 0%, transparent 60%)` positioned absolutely behind the video iframe.

4.  **"Up Next" & Progression (Bottom of Content):**
    *   As the user scrolls to the bottom of the lesson content, an `UpNextCard` should be clearly visible.
    *   It should feature the next lesson's title, estimated time, and a prominent `PrimaryButton` (solid orange gradient) to "Mark Complete & Continue".
    *   **Motion:** Clicking this button triggers the In-Place Transition (Point 1) and updates the completion state in the Rail simultaneously.

5.  **AI Tutor Pane (Right Sidebar):**
    *   On desktop (`>= 1024px`), this pane is fixed to the right side of the workspace.
    *   **Crucial:** It does *not* reload or lose its chat history when the active lesson changes. It merely updates its internal context (e.g., updating the hidden system prompt with the new lesson's transcript).
    *   On tablet/mobile, it becomes a floating, collapsible overlay accessible via a FAB (Floating Action Button).
