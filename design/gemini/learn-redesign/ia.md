# Information Architecture Redesign

## Core Pattern: Learning Workspace
A unified layout where the user can see their place in the channel, the current lesson content, the video, and their progression without ever having to click "back".

**Key Structural Components:**

1.  **Global Shell (`AppShell`)**
    *   Remains the top-level application navigation container.
    *   Learn workspace is a specific route/view inside the shell.

2.  **Learning Workspace Container (`LearnWorkspace`)**
    *   The orchestrator component.
    *   Manages layout structure: Rail (Left) + Center Content + AI/Extras (Right).
    *   Holds the current module and lesson state context.

3.  **Module & Lesson Rail (`LearnRail`)**
    *   **Position:** Fixed left sidebar.
    *   **Content:**
        *   Module Header (Title, progress bar).
        *   Collapsible sections (e.g., "Introduction", "Core Concepts").
        *   Lesson items within sections (Title, icon (video/text), completion status).
    *   **Behavior:** Clicking a lesson updates the active lesson state in the workspace *without* reloading the page or unmounting the rail. Highlights the currently active lesson.

4.  **Main Content Area (`LessonContentPane`)**
    *   **Position:** Center stage.
    *   **Content:**
        *   Lesson Header (Title, tagline, time estimate).
        *   If the lesson has a video: The `VideoPane` sits at the top of the content area.
        *   Rich Text Content: Blocks of text, formulas, examples, and key takeaways rendered below the video (or as the primary content if no video).
        *   **Up Next / Continue Path:** At the bottom of the content, a clear, prominent block showing the *next* lesson in the sequence and a button to advance.

5.  **Video Player (`VideoPane`)**
    *   **Position:** Top of the `LessonContentPane` (when applicable).
    *   **Content:**
        *   YouTube embed.
        *   Interactive transcript/chapter markers (if available) tightly coupled to the video timestamp state.

6.  **AI Tutor / Assistant Pane (`AITutorPane`)**
    *   **Position:** Fixed right sidebar (or collapsible overlay on smaller screens).
    *   **Behavior:** Remains mounted across lesson changes so chat history and context are not lost when navigating between lessons in the same module.

## Interaction Flow

**Entering Learn:**
1.  User clicks "Learn" in the main nav.
2.  Route `/app/learn` (or `view === 'modules'`) displays the high-level module grid.
3.  User clicks a module card (e.g., "Linear Equations").

**Entering the Workspace:**
1.  Route changes to `/app/learn/linear-equations` (or `setActiveModule('linear-equations')` and view switches to the workspace).
2.  The `LearnWorkspace` mounts.
3.  The `LearnRail` populates with the sections and lessons for "Linear Equations".
4.  By default, the first uncompleted lesson (or the first lesson overall if all are completed) is selected.
5.  The `LessonContentPane` displays the content for that selected lesson.

**Progressing:**
1.  User finishes the lesson (watches video, reads text).
2.  User clicks "Mark Complete & Next" at the bottom of the `LessonContentPane` (or in the `UpNextCard`).
3.  The `activeLesson` state updates.
4.  The `LearnRail` updates the completion checkmark and moves the active highlight to the next lesson.
5.  The `LessonContentPane` updates with the new lesson content. The video player loads the new video ID. The page scrolls to the top. The overall layout does *not* shift or unmount.

## Data Model Requirements

To support this UI, the `Lesson` object needs to be robust:
*   `id`: string
*   `title`: string
*   `type`: 'video' | 'text' | 'interactive'
*   `section`: string
*   `estimatedMinutes`: number
*   `videoId`: string (optional)
*   `hero`: { tagline, subtitle } (optional)
*   `content`: Array of content blocks (text, formulas, images)

The Workspace state needs:
*   `activeModuleId`: string
*   `activeLessonId`: string
*   `moduleProgress`: object (from `useProgress`)
