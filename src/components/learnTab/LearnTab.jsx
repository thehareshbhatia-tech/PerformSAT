import React, { useMemo } from 'react';
import { LEARN_SECTIONS, LEARN_UNITS, getChapter } from '../../data/chapters';
import './LearnTab.css';

const CheckIcon = () => (
  <svg className="lt-check" width="18" height="18" viewBox="0 0 24 24" fill="none"
       stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

/**
 * Learn tab — a single-page table of contents for the SEVA textbook.
 *
 * Renders the top-level sections (The Digital SAT, Reading Comprehension,
 * Writing & Grammar, Math) in a fixed order, each with the units it contains
 * and a simple numbered chapter list. Empty units/sections are skipped.
 * Clicking a row opens the reader.
 *
 * @param {Object} props
 * @param {Object} props.chaptersRead - map of { [chapterId]: { completed } }
 * @param {(chapterId: string) => void} props.onOpenChapter - open the reader
 * @returns {JSX.Element}
 */
const LearnTab = ({ chaptersRead = {}, onOpenChapter }) => {
  const isRead = (id) => !!chaptersRead[id]?.completed;

  // Build the render model once: sections → units → numbered chapters, with
  // per-section progress. Chapters are numbered continuously within a section.
  const sections = useMemo(() => {
    return LEARN_SECTIONS.map((section) => {
      const units = LEARN_UNITS
        .filter((u) => u.section === section.id && u.chapterIds.length > 0)
        .map((u) => ({
          ...u,
          chapters: u.chapterIds.map((id) => getChapter(id)).filter(Boolean),
        }))
        .filter((u) => u.chapters.length > 0);

      let n = 0;
      const numberedUnits = units.map((u) => ({
        ...u,
        chapters: u.chapters.map((c) => ({ chapter: c, number: ++n })),
      }));

      const total = n;
      const completed = numberedUnits.reduce(
        (acc, u) => acc + u.chapters.filter(({ chapter }) => isRead(chapter.id)).length,
        0,
      );

      return { ...section, units: numberedUnits, total, completed };
    }).filter((s) => s.total > 0);
  }, [chaptersRead]);

  return (
    <div className="lt-root">
      <header className="lt-page-head">
        <h1 className="lt-page-title">Learn</h1>
        <p className="lt-page-sub">Read the SEVA textbook, one chapter at a time. Everything the digital SAT tests, explained plainly.</p>
      </header>

      {sections.map((section) => (
        <section key={section.id} className="lt-section">
          <div className="lt-section-head">
            <h2 className="lt-section-title">{section.label}</h2>
            <span className="lt-section-progress">{section.completed} of {section.total}</span>
          </div>
          <div className="lt-progress-track" aria-hidden="true">
            <div
              className="lt-progress-fill"
              style={{ width: `${section.total ? Math.round((section.completed / section.total) * 100) : 0}%` }}
            />
          </div>

          {section.units.map((unit) => (
            <div key={unit.id} className="lt-unit">
              <h3 className="lt-unit-title">{unit.label}</h3>
              <ul className="lt-chapter-list">
                {unit.chapters.map(({ chapter, number }) => {
                  const read = isRead(chapter.id);
                  return (
                    <li key={chapter.id}>
                      <button
                        type="button"
                        className={`lt-chapter-row${read ? ' is-read' : ''}`}
                        onClick={() => onOpenChapter(chapter.id)}
                      >
                        <span className="lt-chapter-num">{number}</span>
                        <span className="lt-chapter-body">
                          <span className="lt-chapter-title">{chapter.title}</span>
                          <span className="lt-chapter-blurb">{chapter.blurb}</span>
                        </span>
                        <span className="lt-chapter-meta">
                          <span className="lt-chapter-time">{chapter.readMinutes} min</span>
                          {read && <CheckIcon />}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </section>
      ))}
    </div>
  );
};

export default LearnTab;
