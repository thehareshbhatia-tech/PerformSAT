# Plan: Unique, Focused Content Tab Per Lesson

## Problem Summary

1. **Same content for every lesson in a module**  
   Content tabs are keyed only by `activeModule`. So when a user is on "Parallel Lines" vs "Perpendicular Lines" vs "What Is the Slope?", they all see the same full Linear Equations content tab.

2. **Overwhelming**  
   Each module’s single content tab has up to 8 sections (Core Concepts, SAT Patterns, Methods, Common Traps, Worked Examples, Visual Models, Speed & Strategy, Checkpoint) with many blocks each, so it feels like one large reference dump.

## Goals

- **Unique content per lesson**  
  e.g. "Parallel Lines" content tab ≠ "Perpendicular Lines" content tab; each lesson (or each logical topic) has its own focused content.

- **Less overwhelming**  
  Fewer sections and blocks per view; only what’s relevant to that lesson.

---

## Current Architecture (Brief)

| Piece | Location | Behavior |
|-------|----------|----------|
| Lessons | `src/data/lessons/*.js` | Per-module arrays with `id`, `title`, `section`, `type` (lesson \| video), optional `content.blocks`. |
| Content tabs | `src/data/contentTabs/*.js` + `index.js` | One object per **module** in `allContentTabs`. Key = `moduleId`. |
| Lookup | `LearnWorkspace.jsx`, `App.jsx` | `contentTab = allContentTabs[moduleId]` — no lesson id used. |
| Renderer | `ContentTabRenderer.jsx` | Renders whatever `contentTab` is passed (sections + blocks). |

So: **content is per-module, not per-lesson.**

---

## Plan Overview

1. **Introduce lesson-level content**  
   Define content tabs (or content configs) per lesson (or per “topic” that maps 1:1 to a lesson), so each lesson can have its own unique tab.

2. **Change lookup to (moduleId, lessonId)**  
   Resolve content by current lesson; fall back to module-level or minimal content when no lesson-specific tab exists.

3. **Reduce overwhelm**  
   Use fewer sections per lesson (e.g. 2–4), smaller block counts, and lesson-specific copy so each tab is scoped and digestible.

4. **Reuse and split existing content**  
   Where the current module tab is rich, split or copy sections/blocks into the right lesson-specific tabs (e.g. parallel vs perpendicular) instead of showing everything everywhere.

---

## Phase 1: Data Model & Lookup

### 1.1 Lesson-level content shape

- Keep the existing **content tab schema** (`schema.js`: sections, blocks, block types) so `ContentTabRenderer` can stay as-is.
- Add a **lesson-level content map** so we can look up by `(moduleId, lessonId)`.

**Option A – One map file per module (recommended)**  
- Add e.g. `src/data/contentTabs/lessons/linearEquationsLessons.js` that exports:
  - A map: `lessonId → contentTab` (same shape as current module content tab, but smaller).
- Other modules get similar files: `trianglesLessons.js`, `systemsLessons.js`, etc.
- Central index: `src/data/contentTabs/lessonContentIndex.js` that:
  - Imports all lesson content maps.
  - Exports `getContentTabForLesson(moduleId, lessonId)`:
    - Returns `lessonContent[lessonId]` if present.
    - Else returns `allContentTabs[moduleId]` (current behavior) or a minimal “Overview” tab so we don’t break existing modules during rollout.

**Option B – Inline in lesson definitions**  
- Add optional `contentTab` (or `contentTabRef`) on each lesson in `src/data/lessons/*.js`.
- Resolver: if `currentLesson.contentTab` exists, use it; else fall back to `allContentTabs[moduleId]`.
- Pros: co-located. Cons: lesson files get large; content lives in two places (lesson files vs contentTabs).

**Recommendation:** Option A so content stays in `contentTabs`, and we can author/edit lesson content in one place per module.

### 1.2 Resolver usage

- In `LearnWorkspace.jsx` (and any other place that passes a content tab):
  - Replace:
    - `contentTab = allContentTabs[moduleId]`
  - With:
    - `contentTab = getContentTabForLesson(moduleId, activeLessonId)` (or equivalent).
- Ensure `activeLessonId` is the current lesson’s `id` (number). Video lessons can keep using the same resolver; you may still show a short “Video summary” from the module or lesson content if desired.

---

## Phase 2: Scoping Content Per Lesson (Reduce Overwhelm)

### 2.1 Sections per lesson

- **Limit sections per lesson** to 2–4 instead of 8.  
  Examples for a single lesson:
  - Core concepts (1–2 blocks)
  - One of: SAT pattern **or** Method **or** Common trap
  - Optional: one short Worked example or Checkpoint
- Not every lesson needs SAT Patterns, Methods, Common Traps, Speed Strategy, etc. Assign sections only when they fit that lesson’s topic.

### 2.2 Block budgets

- Reuse existing `BLOCK_BUDGET` / `maxBlocksInitially` in schema, but **set lower defaults for lesson-level tabs** (e.g. 2–3 blocks shown before “Show more”).
- Prefer fewer, higher-signal blocks per section (e.g. one formula, one callout, one short example).

### 2.3 Lesson-specific examples

- **Parallel Lines (e.g. lesson id 12):**  
  Content tab should include only parallel-related material: same slope / different intercept, no solution in systems, maybe one SAT pattern and one trap (e.g. “same slope, different intercept”).
- **Perpendicular Lines (e.g. lesson id 22):**  
  Only perpendicular: negative reciprocal, one method (flip and negate), one trap (“flip only, forgot negate”), one worked example.
- **“What Is the Slope?” (e.g. lesson id 2):**  
  Slope definition, rise/run, one short example; no parallel/perpendicular.

This keeps each tab **unique and focused**.

---

## Phase 3: Content Authoring Strategy

### 3.1 Which lessons get custom tabs first

- **Non-video lessons** that currently show the full module tab are the priority (e.g. Linear Equations lessons 1–6, 12, 22).
- **Video lessons** can continue to use:
  - A short “Video summary” (e.g. from module or a small lesson-specific summary), and/or
  - No content tab (current behavior in some flows) or a one-section “Key idea” tab.

### 3.2 Splitting existing module content

- For Linear Equations (and others), **audit** `linearEquationsContent.js`:
  - Tag or copy blocks/sections that are “parallel only”, “perpendicular only”, “slope only”, “intercepts only”, etc.
- Build lesson-specific content tabs by:
  - **Copying** those blocks into the corresponding lesson entry in `linearEquationsLessons.js` (or the new `lessons/linearEquationsLessons.js` map).
  - **Writing** 1–2 new blocks where needed so the lesson tab is clearly unique (e.g. “Parallel Lines” tab has its own intro and one key formula; “Perpendicular Lines” has negative reciprocal and one trap).
- Leave the **module-level** `linearEquationsContent.js` as the fallback for lessons that don’t yet have a custom tab, or as an “Full module reference” linked from the module overview later.

### 3.3 Naming and structure

- In the lesson content map, key by **numeric lesson id** (e.g. `12`, `22`) to match `currentLesson.id`.
- Each entry: `{ moduleId, title, sections: { ... } }` — same as current content tab, so no changes to `ContentTabRenderer` or schema.

---

## Phase 4: UI/UX Adjustments (Optional)

- **“Show more”**  
  Keep it; with smaller per-lesson tabs, fewer sections will need it, but it still helps for the occasional longer lesson.
- **Module-level “Full reference”**  
  Consider a link or button on the lesson view: “See full Linear Equations reference” that opens the current module-wide tab in a modal or new view, so power users aren’t left without the big reference.
- **Empty state**  
  If `getContentTabForLesson` returns nothing (e.g. new module with no lesson content yet), show the existing module tab or a short “No lesson-specific content yet; here’s the module overview” message.

---

## Implementation Order

1. **Add resolver and lesson map (Phase 1)**  
   - Add `getContentTabForLesson(moduleId, lessonId)` and one lesson-content file (e.g. Linear Equations) with 2–3 example lessons (e.g. Parallel Lines, Perpendicular Lines, one other).  
   - Wire `LearnWorkspace` and any `App.jsx` usage to use the resolver.  
   - Verify: switching between “Parallel Lines” and “Perpendicular Lines” shows different content (or at least different titles/placeholders).

2. **Define unique content for priority lessons (Phases 2 & 3)**  
   - For Linear Equations: author small, unique content tabs for lessons 1, 2, 12 (Parallel), 22 (Perpendicular).  
   - Use 2–4 sections and reduced block counts per lesson.  
   - Split/copy from `linearEquationsContent.js` where it helps.

3. **Roll out to other modules**  
   - Add lesson-content maps for other modules (Functions, Systems, Triangles, etc.) and gradually add lesson-specific tabs so each content tab is unique where it matters.

4. **Tighten defaults and optional UI (Phase 4)**  
   - Lower default “max blocks initially” for lesson-level tabs if needed; add “Full module reference” link if desired.

---

## File Change Summary

| Action | File / area |
|--------|-------------|
| Add | `src/data/contentTabs/lessonContentIndex.js` — `getContentTabForLesson(moduleId, lessonId)`. |
| Add | `src/data/contentTabs/lessons/linearEquationsLessons.js` (and later other modules) — map `lessonId → contentTab`. |
| Modify | `LearnWorkspace.jsx` — use `getContentTabForLesson(moduleId, activeLessonId)` instead of `allContentTabs[moduleId]`. |
| Modify | `App.jsx` (if it renders content tab by module only) — use same resolver with `activeModule` and `activeLesson`. |
| Keep | `ContentTabRenderer.jsx`, `schema.js` — no change to schema or block types. |
| Optional | `schema.js` — add a smaller `DEFAULT_MAX_BLOCKS_INITIALLY` for lesson-level content or a flag. |

---

## Success Criteria

- **Unique:** “Parallel Lines” content tab is visibly different from “Perpendicular Lines” (different headings, copy, examples).
- **Focused:** Each lesson’s tab has 2–4 sections and a small number of blocks so it doesn’t feel overwhelming.
- **Backward compatible:** Lessons without a custom tab still show the module-level tab (or a clear fallback) so existing modules keep working.

This plan gives you a clear path from “one big tab per module” to “one unique, focused tab per lesson” while reducing overwhelm and reusing the existing content and renderer.
