# Route & State Migration Strategy

Currently, the PerformSAT app uses a manual `view` state in `src/App.jsx` instead of a router like `react-router-dom`.

```javascript
const [view, setView] = useState('dashboard');
const [activeModule, setActiveModule] = useState(null);
const [activeLesson, setActiveLesson] = useState(null);
```

To eliminate the fragmented "back button" experience without rewriting the entire app to use React Router (which might be out of scope for a targeted UI redesign), we will implement a "nested state" pattern specifically for the Learn experience.

## Phase 1: The `LearnWorkspace` Wrapper

Instead of having `view === 'list'` and `view === 'lesson'` as completely separate top-level cases in `App.jsx`, we consolidate them into a single `view === 'learn_workspace'`.

When `view === 'learn_workspace'`, `App.jsx` renders `<LearnWorkspace />`, passing it the `activeModule` and `activeLesson`.

## Phase 2: State Delegation

1.  **Module Selection (Dashboard -> Workspace):**
    *   User clicks a module card on the dashboard (or the `modules` view).
    *   `App.jsx` calls `setActiveModule('linear-equations')`.
    *   Instead of calling `setView('list')`, it calls `setView('learn_workspace')`.
    *   *Crucial Logic:* If `activeLesson` is null when entering the workspace, the `LearnWorkspace` component automatically determines the first uncompleted lesson (or the first lesson overall) and sets the `activeLesson` state.

2.  **In-Workspace Navigation (Rail & Up Next):**
    *   The `<LearnRail>` and `<LessonContentPane>` live *inside* the `<LearnWorkspace>`.
    *   When a user clicks a lesson in the rail, or clicks "Up Next" at the bottom of a lesson, it triggers an `onSelectLesson(lessonId)` callback.
    *   This callback updates `activeLesson` in `App.jsx` (or locally within the workspace if we lift state down, but keeping it in App is safer for global progress tracking).
    *   Because `view` remains `'learn_workspace'`, the layout doesn't unmount. Only the `LessonContentPane` updates its props, triggering the fade-in/fade-out transition.

3.  **Exiting the Workspace:**
    *   The only "Back" button should be a breadcrumb at the top left of the workspace (e.g., `< Back to Modules`).
    *   Clicking this calls `setView('modules')` and `setActiveModule(null)`.

## Example Refactoring Pattern (Gemini Target)

**Before (`App.jsx` pseudo-code):**
```jsx
{view === 'list' && (
  <div>
     <button onClick={() => setView('dashboard')}>Back</button>
     <LessonList onSelect={(id) => { setActiveLesson(id); setView('lesson'); }} />
  </div>
)}

{view === 'lesson' && (
  <div>
     <button onClick={() => { setActiveLesson(null); setView('list'); }}>Back</button>
     {renderLessonContent()}
  </div>
)}
```

**After (`App.jsx` pseudo-code):**
```jsx
{view === 'learn_workspace' && (
  <LearnWorkspace
    moduleId={activeModule}
    lessonId={activeLesson}
    onLessonChange={(id) => setActiveLesson(id)}
    onExit={() => { setActiveModule(null); setActiveLesson(null); setView('modules'); }}
    useProgressData={useProgressHookData}
  />
)}
```

## State Continuity for AI Tutor

The AI Tutor (`AiTutorChat` or `AiTutorPane`) must be rendered as a sibling to the `LessonContentPane` inside the `LearnWorkspace`.

When `activeLesson` changes, the tutor component receives new props (`lessonId`, `videoTranscript`). It must *not* reset its `messages` array state on prop change. Instead, it should silently inject a system context message to inform the LLM that the user is now looking at a new lesson.
