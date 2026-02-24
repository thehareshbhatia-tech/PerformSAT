# Learn Flow Audit

## Current Architecture

The Learn flow currently uses a multi-view switching pattern managed at the `App.jsx` level. It does not use distinct React Router paths for nested content.

**State Management (`src/App.jsx`):**
- `view`: String representing the current screen ('dashboard', 'modules', 'list', 'lesson').
- `activeModule`: String representing the currently selected module (e.g., 'linear-equations').
- `activeLesson`: Number representing the ID of the currently selected lesson within the module.

**Data Flow:**
- Modules are loaded from `src/data/lessons/index.js`.
- When `view === 'modules'`, a grid of module cards is shown.
- When a module is clicked, `setActiveModule(moduleId)` and `setView('list')` are called.
- When `view === 'list'`, the lessons for the `activeModule` are grouped by section and displayed as a list.
- When a lesson is clicked, `setActiveLesson(lessonId)` and `setView('lesson')` are called.

## Fragmentation & Pain Points

1. **Back Button Context Loss:**
   - Inside a lesson (`view === 'lesson'`), clicking "Back" calls `setView('list')` and `setActiveLesson(null)`. This completely unmounts the lesson content and video player, returning the user to the list view. To go to the *next* lesson, the user must find it in the list and click it, triggering another full view switch.
   - Inside the list view (`view === 'list'`), clicking "Back" calls `setView('dashboard')` and `setActiveModule(null)`. This returns them to the dashboard, losing their place in the course catalog.

2. **Video/Content Separation:**
   - In `renderLessonContent()` within `App.jsx`, lessons are split by type:
     - `if (currentLesson.type === 'video')`: Renders a YouTube player and the AI Tutor side-by-side. Text content is largely absent.
     - `if (currentLesson.type === 'text')`: Renders a hero banner and scrolling text/formula blocks.
   - This prevents a unified experience where a video can be accompanied by rich, synchronized lesson notes.

3. **Previous/Next Flow:**
   - The Previous/Next buttons at the bottom of a lesson *do* update `activeLesson` without changing the view, which is good.
   - However, because the list is not visible simultaneously, the user has no context of where they are in the module, how many lessons remain in the section, or what's coming up next without clicking "Back" to the list view.

## Target Architecture (Nested Routing & Layout)

To fix this, we need a nested routing structure or a persistent layout component where the navigation (list of lessons) and the content (the active lesson) coexist.

- `LearnWorkspace`: The parent container.
- `LearnRail`: A persistent sidebar showing the module's sections and lessons. Clicking a lesson here updates the `activeLesson` state *without* changing the main view.
- `LessonContentPane`: The main content area. If the lesson has a video, it shows the `VideoPane` at the top and the text content below it (or alongside it).
