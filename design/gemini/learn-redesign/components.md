# Learn Component Contracts & State Matrix

This document defines the exact props, state structures, and component boundaries that Gemini 3.1 Pro must generate to build the unified `LearnWorkspace`.

## Core Orchestrator: `<LearnWorkspace />`

This component replaces the fragmented view states in `App.jsx`. It manages the layout and provides context to the child panes.

**State Managed:**
- `activeModuleId` (string)
- `activeLessonId` (string)
- `videoTimestamp` (number) - Managed at the workspace level so the AI Tutor Pane and Video Pane can synchronize.
- `videoTranscript` (object) - Synced with the active lesson.

**Props (passed from App/Router):**
- `moduleId` (string) - Passed via route params or state from `App.jsx`.
- `initialLessonId` (string) - Passed via route params.
- `onNavigateToDashboard` (function)
- `useProgress` hook data: `completedLessons`, `markLessonComplete`

**Children:**
- `<LearnRail />` (Left)
- `<LessonContentPane />` (Center)
- `<AiTutorPane />` (Right)

---

## 1. `<LearnRail />`

The persistent sidebar showing the module's structure and the user's progress.

**Props:**
- `moduleInfo` (object): Metadata about the current module (title, id).
- `sections` (array of objects): The lessons grouped by section name.
  - Shape: `[{ sectionName: 'Intro', lessons: [ { id, title, type } ] }]`
- `activeLessonId` (string): To highlight the current lesson.
- `completedLessons` (object/array): To show checkmarks next to finished lessons.
- `onSelectLesson` (function): `(lessonId) => void`. Updates the workspace state.

**State Matrix / Visual Variants:**
- **Status:** `pending` (dim text), `completed` (green checkmark), `locked` (if strict ordering is enforced - optional).
- **Selection:** `active` (brand orange highlight, bold text), `inactive` (default).

---

## 2. `<LessonContentPane />`

The main stage. It receives the selected lesson data and renders the appropriate content blocks.

**Props:**
- `lesson` (object): The full data object for the `activeLessonId`.
  - Shape: `{ id, title, type: 'video'|'text', videoId?, hero?: {}, content: [] }`
- `nextLesson` (object | null): The data object for the subsequent lesson in the module sequence.
- `onMarkCompleteAndNext` (function): `() => void`. Triggers progression.
- `isCompleted` (boolean): Current completion status.
- `videoState`: Hooks for the video player (timestamp, ready state).

**Children:**
- `<VideoPane />` (Rendered conditionally at the top if `lesson.type === 'video'`)
- `<RichTextRenderer />` (Maps over `lesson.content` blocks)
- `<UpNextCard />` (Rendered at the very bottom)

**State Matrix / Visual Variants:**
- **Scroll State:** Tracks scroll position to trigger floating headers or "back to top" actions (optional).
- **Transition State:** Manages the fade-in/fade-out animation when `lesson.id` changes.

---

## 3. `<VideoPane />`

A wrapper around the YouTube player that adds Apple-like aesthetics (ambient glow) and handles timestamp sync.

**Props:**
- `videoId` (string)
- `onTimestampUpdate` (function): `(timeInSeconds) => void`.
- `title` (string): Used for accessibility labels.

**State Matrix / Visual Variants:**
- **Loading:** Skeleton loader or blurred placeholder before the iframe is ready.
- **Ready:** The interactive player.
- **Error:** Fallback UI if the YouTube embed fails.

---

## 4. `<UpNextCard />`

The progression catalyst at the bottom of the `LessonContentPane`.

**Props:**
- `currentLessonId` (string)
- `nextLesson` (object | null): `{ id, title, type, estimatedMinutes }`
- `onAdvance` (function): The `onMarkCompleteAndNext` handler from the workspace.

**State Matrix / Visual Variants:**
- **Has Next:** Displays the title of the next lesson, an icon indicating its type (video/text), and a primary "Mark Complete & Continue" button.
- **End of Module:** If `nextLesson` is null, displays a celebratory "Module Complete!" state with a secondary button to "Return to Dashboard" or "Start Practice".

---

## 5. `<AiTutorPane />` (Adapted from existing `<AiTutorChat />`)

The AI assistant panel. Must be refactored slightly to accept changing context without resetting the chat history.

**Props:**
- `moduleId` (string)
- `lessonId` (string) - When this changes, the pane should *append* a hidden system message updating its context, rather than clearing the `messages` array.
- `videoTimestamp` (number)
- `videoTranscript` (object)

**State Matrix / Visual Variants:**
- **Desktop:** Fixed width pane (e.g., `350px`) docked to the right side of the `LearnWorkspace`.
- **Mobile/Tablet:** Hidden by default, toggled via a floating action button (FAB) in the bottom right corner.
