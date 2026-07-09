/**
 * Composer for contentTab-source Learn chapters.
 *
 * The module-level tabs in allContentTabs are thin summaries (~1.4k chars);
 * the real textbook depth (~1MB) lives in the PER-LESSON tab maps under
 * contentTabs/lessons/, resolved by getContentTabForLesson. This module
 * concatenates a module's per-lesson content — in the module's canonical
 * lesson order — into ONE flat blocks array for the chapter reader.
 *
 * BUNDLE NOTE: this file statically imports the lesson catalog + the whole
 * contentTabs corpus. It must ONLY ever be loaded via dynamic import()
 * (ChapterReader does this) — never import it statically from anything on
 * the main-chunk path, including chapters/index.js.
 */

import { allLessons } from '../lessons';
import { allContentTabs } from '../contentTabs';
import { getContentTabForLesson } from '../contentTabs/lessonContentIndex';

/**
 * Composes the full reading body for a contentTab-source chapter.
 *
 * Walks the module's text lessons (type 'lesson', skipping videos) in catalog
 * order, resolves each lesson's tab, and appends its learn blocks followed by
 * its practice blocks (worked example + checkpoint) under a heading carrying
 * the lesson title. Lessons that fall back to the shared module-level tab are
 * deduped: that tab is included at most once, as an intro at the top. When a
 * module has no per-lesson tabs at all, falls back to the module tab's learn
 * section as before.
 *
 * @param {string} moduleId - contentTabs module id (e.g. 'linear-equations')
 * @returns {{ blocks: Array<object> }|null} a section object for SectionContent,
 *   or null when the module has no content at all
 */
export function composeChapterSection(moduleId) {
  const moduleTab = allContentTabs[moduleId] || null;
  const textLessons = (allLessons[moduleId] || []).filter((l) => l.type === 'lesson');

  const blocks = [];
  const seenTabs = new Set();
  let usedModuleFallback = false;

  textLessons.forEach((lesson) => {
    const tab = getContentTabForLesson(moduleId, lesson.id);
    if (!tab) return;
    if (tab === moduleTab) { usedModuleFallback = true; return; } // dedupe fallback; intro handled below
    if (seenTabs.has(tab)) return; // two lessons sharing one tab render it once
    seenTabs.add(tab);

    const learnBlocks = Array.isArray(tab.sections?.learn?.blocks) ? tab.sections.learn.blocks : [];
    const practiceBlocks = Array.isArray(tab.sections?.practice?.blocks) ? tab.sections.practice.blocks : [];
    if (learnBlocks.length === 0 && practiceBlocks.length === 0) return;

    // One h3-level divider per lesson. Many lesson tabs open with a heading
    // that repeats the lesson title — drop that duplicate.
    blocks.push({ type: 'heading', content: lesson.title });
    const dedupedLearn = (learnBlocks[0]?.type === 'heading'
      && String(learnBlocks[0].content).trim().toLowerCase() === String(lesson.title).trim().toLowerCase())
      ? learnBlocks.slice(1)
      : learnBlocks;
    blocks.push(...dedupedLearn, ...practiceBlocks);
  });

  // Module-level tab as a one-time intro when any lesson fell back to it —
  // or as the whole (legacy) body when no per-lesson tabs exist.
  const moduleLearnBlocks = Array.isArray(moduleTab?.sections?.learn?.blocks)
    ? moduleTab.sections.learn.blocks
    : [];
  if (blocks.length === 0) {
    return moduleLearnBlocks.length > 0 ? { blocks: moduleLearnBlocks } : null;
  }
  if (usedModuleFallback && moduleLearnBlocks.length > 0) {
    return { blocks: [...moduleLearnBlocks, ...blocks] };
  }
  return { blocks };
}
