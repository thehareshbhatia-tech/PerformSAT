/**
 * R&W chapter-body corpus — the heavy textbook content for every
 * `source.kind === 'rwBody'` chapter in rwChapters.js.
 *
 * This module is the R&W twin of the math contentTabs corpus: ChapterReader
 * dynamic-import()s it when an R&W chapter opens, so the chapter index (and
 * every screen that imports it) stays light. NEVER static-import this module
 * from src/data/chapters/index.js, rwChapters.js, or any component — that
 * would pull the whole corpus into the entry bundle.
 *
 * Keyed by chapter id. Each body file exports one blocks array following the
 * locked textbook template (docs/LEARN_TEXTBOOK_OVERHAUL_PLAN.md §4).
 */

import { boundariesBlocks } from './boundaries';

export const RW_CHAPTER_BODIES = {
  'rw-boundaries': boundariesBlocks,
};
