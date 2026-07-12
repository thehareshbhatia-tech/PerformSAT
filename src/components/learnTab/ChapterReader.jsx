import React, { useEffect, useMemo, useRef, useState } from 'react';
import { LEARN_UNITS, getChapter } from '../../data/chapters';
import { SectionContent } from '../learn/ContentTabRenderer';
import './ChapterReader.css';

// Flat, registry-ordered list of chapter ids across the whole TOC — drives
// Prev/Next. Built once at module load from the unit registry.
const ORDERED_CHAPTER_IDS = LEARN_UNITS.flatMap((u) => u.chapterIds);

const ArrowLeft = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
       strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M19 12H5M11 18l-6-6 6-6" />
  </svg>
);
const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
       strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);
const CheckIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor"
       strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

/**
 * Chapter reader — a clean article view for one Learn chapter.
 *
 * Renders both source kinds through the SAME renderer (SectionContent): for a
 * `contentTab` source it lazily imports composeChapterBlocks, which stitches
 * the module's per-lesson learn + practice tabs into one body; for a `blocks`
 * source it wraps the authored blocks. Footer offers complete-toggle,
 * practice/video hand-offs, and prev/next navigation.
 *
 * @param {Object} props
 * @param {string} props.chapterId - id of the chapter to render
 * @param {(id: string) => boolean} props.isChapterComplete
 * @param {(id: string) => void} props.onToggleComplete - mark/unmark complete
 * @param {() => void} props.onBack - return to the TOC
 * @param {(id: string) => void} props.onOpenChapter - open another chapter (prev/next)
 * @param {(chapter: object) => void} props.onPracticeSkills - land the Practice tab on this chapter's skills
 * @param {(moduleId: string) => void} props.onWatchVideos - open the module's videos
 * @returns {JSX.Element|null}
 */
const ChapterReader = ({
  chapterId,
  isChapterComplete,
  onToggleComplete,
  onBack,
  onOpenChapter,
  onPracticeSkills,
  onWatchVideos,
}) => {
  const chapter = getChapter(chapterId);
  const stageRef = useRef(null);

  // Lazily-COMPOSED body for contentTab-source chapters: the composer chunk
  // (composeChapterBlocks) concatenates the module's per-lesson learn +
  // practice content — the module-level tab alone is a thin summary. The
  // dynamic import keeps the lesson catalog + contentTabs corpus (~1.3MB)
  // out of the entry bundle; it loads only when a math chapter is opened.
  const [tabSection, setTabSection] = useState(null);
  const [tabError, setTabError] = useState(false);

  const isContentTab = chapter?.source?.kind === 'contentTab';
  // R&W textbook chapters keep their bodies in the rwBodies corpus, behind
  // the same dynamic-import boundary as the math contentTabs corpus, so the
  // chapter index (and every screen that imports it) stays light.
  const isRwBody = chapter?.source?.kind === 'rwBody';

  useEffect(() => {
    if (stageRef.current) stageRef.current.scrollTo({ top: 0 });
  }, [chapterId]);

  useEffect(() => {
    if (!isContentTab && !isRwBody) return undefined;
    let cancelled = false;
    setTabSection(null);
    setTabError(false);
    const load = isContentTab
      ? import('../../data/chapters/composeChapterBlocks')
          .then((mod) => mod.composeChapterSection(chapter.source.moduleId))
      : import('../../data/chapters/rwBodies')
          .then((mod) => {
            const blocks = mod.RW_CHAPTER_BODIES[chapter.source.bodyId];
            return Array.isArray(blocks) && blocks.length ? { blocks } : null;
          });
    load
      .then((section) => {
        if (cancelled) return;
        if (section) setTabSection(section);
        else setTabError(true);
      })
      .catch(() => { if (!cancelled) setTabError(true); });
    return () => { cancelled = true; };
  }, [isContentTab, isRwBody, chapter?.source?.moduleId, chapter?.source?.bodyId]);

  const unit = useMemo(
    () => (chapter ? LEARN_UNITS.find((u) => u.id === chapter.unitId) : null),
    [chapter],
  );

  const { prevChapter, nextChapter } = useMemo(() => {
    const idx = ORDERED_CHAPTER_IDS.indexOf(chapterId);
    return {
      prevChapter: idx > 0 ? getChapter(ORDERED_CHAPTER_IDS[idx - 1]) : null,
      nextChapter: idx >= 0 && idx < ORDERED_CHAPTER_IDS.length - 1
        ? getChapter(ORDERED_CHAPTER_IDS[idx + 1]) : null,
    };
  }, [chapterId]);

  if (!chapter) {
    return (
      <div className="cr-root">
        <button type="button" className="cr-back" onClick={onBack}>
          <ArrowLeft /> All chapters
        </button>
        <p className="cr-missing">This chapter is not available yet.</p>
      </div>
    );
  }

  const completed = isChapterComplete ? isChapterComplete(chapter.id) : false;
  const blocksSection = chapter.source?.kind === 'blocks' ? { blocks: chapter.source.blocks } : null;
  // Strategy chapters carry no cbSkills — there is nothing to focus in the
  // Practice Bank, so the "Practice these skills" CTA is hidden for them.
  const hasPracticeSkills = Array.isArray(chapter.cbSkills) && chapter.cbSkills.length > 0;

  return (
    <div className="cr-root" ref={stageRef}>
      <button type="button" className="cr-back" onClick={onBack}>
        <ArrowLeft /> All chapters
      </button>

      <article className="cr-article">
        <header className="cr-head">
          {unit && <div className="cr-eyebrow">{unit.label}</div>}
          <h1 className="cr-title">{chapter.title}</h1>
          <div className="cr-meta">{chapter.readMinutes} min read</div>
        </header>

        <div className="cr-content">
          {(isContentTab || isRwBody) ? (
            tabSection ? (
              <SectionContent section={tabSection} />
            ) : tabError ? (
              <p className="cr-missing">We could not load this chapter. Check your connection and try again.</p>
            ) : (
              <div className="cr-loading" aria-live="polite">Loading chapter…</div>
            )
          ) : blocksSection ? (
            <SectionContent section={blocksSection} />
          ) : (
            <p className="cr-missing">This chapter has no content yet.</p>
          )}
        </div>

        <footer className="cr-footer">
          <button
            type="button"
            className={`cr-complete-btn${completed ? ' is-done' : ''}`}
            onClick={() => onToggleComplete(chapter.id, { title: chapter.title, unitId: chapter.unitId })}
          >
            {completed ? (<><CheckIcon /> Completed</>) : 'Mark chapter complete'}
          </button>

          {(hasPracticeSkills || isContentTab) && (
            <div className="cr-keepgoing">
              <span className="cr-keepgoing-label">Keep going</span>
              <div className="cr-keepgoing-actions">
                {hasPracticeSkills && (
                  <button type="button" className="cr-ghost-btn" onClick={() => onPracticeSkills(chapter)}>
                    Practice these skills
                  </button>
                )}
                {isContentTab && (
                  <button
                    type="button"
                    className="cr-ghost-btn"
                    onClick={() => onWatchVideos(chapter.source.moduleId)}
                  >
                    Watch the videos
                  </button>
                )}
              </div>
            </div>
          )}

          <nav className="cr-prevnext" aria-label="Chapter navigation">
            {prevChapter ? (
              <button type="button" className="cr-prevnext-btn" onClick={() => onOpenChapter(prevChapter.id)}>
                <ArrowLeft />
                <span className="cr-prevnext-body">
                  <span className="cr-prevnext-dir">Previous</span>
                  <span className="cr-prevnext-title">{prevChapter.title}</span>
                </span>
              </button>
            ) : <span />}
            {nextChapter ? (
              <button type="button" className="cr-prevnext-btn cr-prevnext-btn--next" onClick={() => onOpenChapter(nextChapter.id)}>
                <span className="cr-prevnext-body">
                  <span className="cr-prevnext-dir">Next</span>
                  <span className="cr-prevnext-title">{nextChapter.title}</span>
                </span>
                <ArrowRight />
              </button>
            ) : <span />}
          </nav>
        </footer>
      </article>
    </div>
  );
};

export default ChapterReader;
