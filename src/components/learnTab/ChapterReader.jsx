import React, { useEffect, useMemo, useRef, useState } from 'react';
import { LEARN_UNITS, getChapter } from '../../data/chapters';
import { SectionContent } from '../learn/ContentTabRenderer';
import './ChapterReader.css';

// Per-section, registry-ordered chapter ids — drives Prev/Next. Navigation is
// deliberately fenced inside one section so the last Math chapter doesn't
// "Next" into the first Reading chapter (a real disorientation we shipped
// once: a Reading chapter offered "Previous: Area & Volume").
const SECTION_ORDERED_IDS = LEARN_UNITS.reduce((acc, u) => {
  if (!acc[u.section]) acc[u.section] = [];
  acc[u.section].push(...u.chapterIds);
  return acc;
}, {});
const SECTION_OF_UNIT = new Map(LEARN_UNITS.map((u) => [u.id, u.section]));

const ArrowLeft = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
       strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M19 12H5M11 18l-6-6 6-6" />
  </svg>
);
const ArrowRight = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
       strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);
const CheckIcon = ({ size = 14, strokeWidth = 3 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
       strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);
const ClockIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor"
       strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" />
  </svg>
);

/**
 * Lesson rail — the reader's left sidebar: back link, the current unit's
 * label + read-progress bar, and every lesson in the unit with its state
 * (read = lime check, current = orange number, upcoming = outlined number).
 * Hidden below 1100px (the article keeps its own inline back link there).
 */
const LessonRail = ({ unit, chapters, currentId, isRead, onBack, onOpenChapter }) => {
  const doneCount = chapters.filter((c) => isRead(c.id)).length;
  const pct = chapters.length ? Math.round((doneCount / chapters.length) * 100) : 0;
  return (
    <aside className="cr-rail">
      <button type="button" className="cr-back" onClick={onBack}>
        <ArrowLeft /> All chapters
      </button>
      <div className="cr-rail-unit">{unit.label}</div>
      <div className="cr-rail-progress" aria-label={`${doneCount} of ${chapters.length} lessons read`}>
        <div className="cr-rail-track" aria-hidden="true">
          <div className="cr-rail-fill" style={{ width: `${pct}%` }} />
        </div>
        <span className="cr-rail-count">{doneCount}/{chapters.length}</span>
      </div>
      <nav className="cr-rail-list" aria-label="Lessons in this unit">
        {chapters.map((c, i) => {
          const current = c.id === currentId;
          const read = isRead(c.id);
          const state = current ? 'is-current' : read ? 'is-read' : '';
          return (
            <button
              key={c.id}
              type="button"
              className={`cr-lesson ${state}`}
              aria-current={current ? 'page' : undefined}
              onClick={() => { if (!current) onOpenChapter(c.id); }}
            >
              <span className="cr-lesson-dot" aria-hidden="true">
                {read && !current ? <CheckIcon size={12} strokeWidth={3.2} /> : i + 1}
              </span>
              <span className="cr-lesson-body">
                <span className="cr-lesson-title">{c.title}</span>
                <span className="cr-lesson-meta">
                  {current ? `${c.readMinutes} min · reading now` : read ? 'Read' : `${c.readMinutes} min`}
                </span>
              </span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
};

/**
 * Chapter reader — the Learn tab's article view, rebuilt 2026-07-17 from the
 * user's "SEVA Learn (standalone)" mockup: lesson rail with per-lesson read
 * states + unit progress, a scroll-progress bar, Newsreader serif reading
 * typography, a card vocabulary for the content blocks (ChapterReader.css),
 * a "Ready to practice?" drill CTA, and prev/next lesson cards.
 *
 * Renders both source kinds through the SAME renderer (SectionContent): for a
 * `contentTab` source it lazily imports composeChapterBlocks; for a `body`
 * source it pulls the bodies corpus behind the same dynamic-import boundary.
 * All systems (completion map, practice/video hand-offs, fenced prev/next)
 * are unchanged — this is a design rebuild.
 *
 * @param {Object} props
 * @param {string} props.chapterId - id of the chapter to render
 * @param {(id: string) => boolean} props.isChapterComplete
 * @param {(id: string) => void} props.onToggleComplete - mark/unmark read
 * @param {() => void} props.onBack - return to the TOC
 * @param {(id: string) => void} props.onOpenChapter - open another chapter
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

  // Lazily-loaded body (see JSDoc above) — keeps the corpus out of the bundle.
  const [tabSection, setTabSection] = useState(null);
  const [tabError, setTabError] = useState(false);
  const isContentTab = chapter?.source?.kind === 'contentTab';
  const isBody = chapter?.source?.kind === 'body';

  // Scroll progress for the top bar. The window scrolls in this view (the
  // reader owns no inner scroll container), so track document scroll and
  // guard the divide when the chapter is shorter than the viewport.
  const [progress, setProgress] = useState(0);
  const ticking = useRef(false);
  useEffect(() => {
    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      window.requestAnimationFrame(() => {
        const el = document.scrollingElement || document.documentElement;
        const max = el.scrollHeight - el.clientHeight;
        setProgress(max > 0 ? Math.min(1, el.scrollTop / max) : 0);
        ticking.current = false;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [chapterId]);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [chapterId]);

  useEffect(() => {
    if (!isContentTab && !isBody) return undefined;
    let cancelled = false;
    setTabSection(null);
    setTabError(false);
    const load = isContentTab
      ? import('../../data/chapters/composeChapterBlocks')
          .then((mod) => mod.composeChapterSection(chapter.source.moduleId))
      : import('../../data/chapters/bodies')
          .then((mod) => {
            const blocks = mod.CHAPTER_BODIES[chapter.source.bodyId];
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
  }, [isContentTab, isBody, chapter?.source?.moduleId, chapter?.source?.bodyId]);

  const unit = useMemo(
    () => (chapter ? LEARN_UNITS.find((u) => u.id === chapter.unitId) : null),
    [chapter],
  );
  const unitChapters = useMemo(
    () => (unit ? unit.chapterIds.map((id) => getChapter(id)).filter(Boolean) : []),
    [unit],
  );
  const lessonIndex = unitChapters.findIndex((c) => c.id === chapterId);

  const { prevChapter, nextChapter } = useMemo(() => {
    const section = SECTION_OF_UNIT.get(chapter?.unitId);
    const ids = SECTION_ORDERED_IDS[section] || [];
    const idx = ids.indexOf(chapterId);
    return {
      prevChapter: idx > 0 ? getChapter(ids[idx - 1]) : null,
      nextChapter: idx >= 0 && idx < ids.length - 1 ? getChapter(ids[idx + 1]) : null,
    };
  }, [chapterId, chapter?.unitId]);

  if (!chapter) {
    return (
      <div className="cr-root">
        <div className="cr-columns">
          <div className="cr-stage">
            <article className="cr-article">
              <button type="button" className="cr-back" onClick={onBack}>
                <ArrowLeft /> All chapters
              </button>
              <p className="cr-missing">This chapter is not available yet.</p>
            </article>
          </div>
        </div>
      </div>
    );
  }

  const isRead = (id) => (isChapterComplete ? isChapterComplete(id) : false);
  const completed = isRead(chapter.id);
  const blocksSection = chapter.source?.kind === 'blocks' ? { blocks: chapter.source.blocks } : null;
  // Strategy chapters carry no cbSkills — there is nothing to focus in the
  // Practice Bank, so the drill CTA is hidden for them.
  const hasPracticeSkills = Array.isArray(chapter.cbSkills) && chapter.cbSkills.length > 0;

  return (
    <div className="cr-root">
      <div className="cr-progress" aria-hidden="true">
        <div className="cr-progress-fill" style={{ width: `${Math.round(progress * 100)}%` }} />
      </div>

      <div className="cr-columns">
        {unit && (
          <LessonRail
            unit={unit}
            chapters={unitChapters}
            currentId={chapter.id}
            isRead={isRead}
            onBack={onBack}
            onOpenChapter={onOpenChapter}
          />
        )}

        <div className="cr-stage">
          <article className="cr-article">
            <button type="button" className="cr-back cr-back--inline" onClick={onBack}>
              <ArrowLeft /> All chapters
            </button>

            <header className="cr-head">
              {unit && <div className="cr-eyebrow">{unit.label}</div>}
              <h1 className="cr-title">{chapter.title}</h1>
              <div className="cr-meta">
                <span className="cr-meta-item"><ClockIcon /> {chapter.readMinutes} min read</span>
                {lessonIndex >= 0 && (
                  <>
                    <span className="cr-meta-dot" aria-hidden="true" />
                    <span className="cr-meta-item">Lesson {lessonIndex + 1} of {unitChapters.length}</span>
                  </>
                )}
                {completed && (
                  <>
                    <span className="cr-meta-dot" aria-hidden="true" />
                    <span className="cr-meta-item cr-meta-read"><CheckIcon size={15} strokeWidth={2.4} /> Read</span>
                  </>
                )}
              </div>
            </header>

            <div className="cr-content">
              {(isContentTab || isBody) ? (
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
                className={`cr-readtoggle${completed ? ' is-done' : ''}`}
                onClick={() => onToggleComplete(chapter.id, { title: chapter.title, unitId: chapter.unitId })}
              >
                {completed ? (<><CheckIcon size={15} strokeWidth={2.6} /> Marked as read</>) : 'Mark as read'}
              </button>

              {hasPracticeSkills && (
                <div className="cr-drill-card">
                  <div className="cr-drill-copy">
                    <div className="cr-drill-title">Ready to practice?</div>
                    <div className="cr-drill-sub">Questions built directly on this lesson.</div>
                  </div>
                  <button type="button" className="cr-drill-btn" onClick={() => onPracticeSkills(chapter)}>
                    Start drill <ArrowRight size={16} />
                  </button>
                </div>
              )}

              {isContentTab && (
                <button
                  type="button"
                  className="cr-videos-link"
                  onClick={() => onWatchVideos(chapter.source.moduleId)}
                >
                  Watch the videos for this chapter
                </button>
              )}

              <nav className="cr-prevnext" aria-label="Chapter navigation">
                {prevChapter ? (
                  <button type="button" className="cr-prevnext-btn" onClick={() => onOpenChapter(prevChapter.id)}>
                    <span className="cr-prevnext-arrow"><ArrowLeft size={20} /></span>
                    <span className="cr-prevnext-body">
                      <span className="cr-prevnext-dir">Previous</span>
                      <span className="cr-prevnext-title">{prevChapter.title}</span>
                    </span>
                  </button>
                ) : <span />}
                {nextChapter ? (
                  <button type="button" className="cr-prevnext-btn cr-prevnext-btn--next" onClick={() => onOpenChapter(nextChapter.id)}>
                    <span className="cr-prevnext-body">
                      <span className="cr-prevnext-dir">Next lesson</span>
                      <span className="cr-prevnext-title">{nextChapter.title}</span>
                    </span>
                    <span className="cr-prevnext-arrow cr-prevnext-arrow--next"><ArrowRight size={20} /></span>
                  </button>
                ) : <span />}
              </nav>
            </footer>
          </article>
        </div>
      </div>
    </div>
  );
};

export default ChapterReader;
