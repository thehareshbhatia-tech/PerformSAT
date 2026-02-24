# Gemini 3.1 Pro Prompt Sequence (Execution Contract)

This document contains the exact prompts you will feed into Gemini 3.1 Pro to execute the Learn UX redesign.

## Prompt 1: Initial Context & Information Architecture

**Prompt:**
> I am redesigning the Learn section of my SAT prep application. The goal is to eliminate fragmented back-button navigation and unify the video, text content, and course outline into a single, cohesive "Learning Workspace." I want the aesthetic to be premium, Apple-level (ambient intelligence, glassmorphism, restrained gradients) and decidedly NOT "vibecoded".
>
> I have attached the Information Architecture specification (`ia.md`), the Visual Language tokens (`visuals.md`), and the Component Contracts (`components.md`).
>
> Please confirm you understand the core goal: replacing the old `setView('list')` vs `setView('lesson')` state switching with a unified `<LearnWorkspace />` orchestrator that renders the `<LearnRail />` and `<LessonContentPane />` side-by-side, handling lesson switching in-place.

## Prompt 2: Design System & Primitives (Batch A)

**Prompt:**
> Great. Let's start building. First, I need you to update my `src/design-tokens.css` file with the new Learn Workspace specifics defined in `visuals.md`.
>
> Once that's done, create the foundation for the left sidebar: `src/components/learn/LearnRail.jsx`.
> Requirements:
> - Follow the Component Contract strictly.
> - Implement the Hover, Active (current lesson), and Completed visual states using the new CSS variables.
> - Ensure clicking a lesson calls `onSelectLesson(lessonId)` instead of unmounting the view.
> - Make it scrollable independently of the main page.
> Provide the full code for `LearnRail.jsx` and the CSS token additions.

## Prompt 3: Workspace Orchestrator & Content Pane (Batch B)

**Prompt:**
> Now, let's build the orchestrator and the main stage.
>
> 1. Create `src/components/learn/LearnWorkspace.jsx`. This component receives `moduleId`, `initialLessonId`, and the progress hooks. It must hold the `activeLesson` state and render the `LearnRail` and `LessonContentPane` side-by-side.
> 2. Create `src/components/learn/LessonContentPane.jsx`. This receives the data for the `activeLesson`. Implement the in-place transition motion specs from `visuals.md` (fade-out, fade-in, scroll-to-top) when the lesson ID changes.
>
> Do not implement the Video Pane or AI Tutor yet. Just handle the layout grid, the state management, and rendering generic text content blocks. Provide the code for both components.

## Prompt 4: Video Integration & "Up Next" (Batch C)

**Prompt:**
> Next, let's integrate the video and progression mechanics.
>
> 1. Create `src/components/learn/VideoPane.jsx`. Implement the ambient radial glow behind the player (defined in `visuals.md`). Hook up the YouTube iframe (you can use a generic placeholder or react-youtube wrapper) and manage the timestamp state, bubbling it up to the `LearnWorkspace`.
> 2. Create `src/components/learn/UpNextCard.jsx`. Render this at the bottom of the `LessonContentPane`. It must prominently display the *next* lesson title and a primary CTA to "Mark Complete & Continue". Clicking this CTA should fire the workspace's progression handler.
>
> Provide the code for both components and show how they are integrated into `LessonContentPane`.

## Prompt 5: AI Tutor & Final Polish (Batch D)

**Prompt:**
> Finally, we need to handle the AI Tutor and ensure state continuity.
>
> 1. Adapt the existing `AiTutorChat` component (we'll call the wrapper `src/components/learn/AiTutorPane.jsx`). Place it as the rightmost column in the `LearnWorkspace` (or a collapsible overlay on smaller screens).
> 2. The critical requirement: When `LearnWorkspace` changes the `activeLesson`, the `AiTutorPane` must *not* unmount and must *not* clear its chat history. It should instead append a hidden system message informing the LLM of the new lesson context.
> 3. Provide the code for `AiTutorPane.jsx` and the final updated `LearnWorkspace.jsx` showing the complete 3-pane layout (Rail, Content, Tutor) with responsive collapse behavior.
