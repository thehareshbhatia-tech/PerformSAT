import React, { useEffect, useRef } from 'react';

const LearnRail = ({ moduleLessons, moduleTitle, activeLessonId, onSelectLesson, onBack, isLessonCompleted, moduleId, moduleProgress }) => {
  const activeRef = useRef(null);

  useEffect(() => {
    if (activeRef.current) {
      activeRef.current.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }
  }, [activeLessonId]);

  const sections = moduleLessons.reduce((acc, lesson) => {
    const s = lesson.section || 'Lessons';
    if (!acc[s]) acc[s] = [];
    acc[s].push(lesson);
    return acc;
  }, {});

  return (
    <aside className="learn-rail">
      <div className="learn-rail__header">
        <button className="learn-rail__back" onClick={onBack}>
          ← All Modules
        </button>
        <h2 className="learn-rail__module-title">{moduleTitle}</h2>
        <div className="learn-rail__module-meta">
          {moduleLessons.length} lessons
        </div>
        <div className="learn-rail__progress-bar">
          <div className="learn-rail__progress-fill" style={{ width: `${moduleProgress}%` }} />
        </div>
      </div>

      <div className="learn-rail__sections">
        {Object.entries(sections).map(([sectionName, sectionLessons]) => (
          <div key={sectionName}>
            <div className="learn-rail__section-label">{sectionName}</div>
            {sectionLessons.map(lesson => {
              const isActive = lesson.id === activeLessonId;
              const completed = isLessonCompleted(moduleId, lesson.id);

              return (
                <div
                  key={lesson.id}
                  ref={isActive ? activeRef : null}
                  className={`learn-rail__item ${isActive ? 'learn-rail__item--active' : ''}`}
                  onClick={() => onSelectLesson(lesson.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onSelectLesson(lesson.id); }}}
                >
                  <div className={`learn-rail__item-icon ${
                    completed ? 'learn-rail__item-icon--completed' :
                    lesson.type === 'video' ? 'learn-rail__item-icon--video' :
                    'learn-rail__item-icon--lesson'
                  }`}>
                    {completed ? '✓' : lesson.type === 'video' ? '▶' : '◉'}
                  </div>
                  <span className="learn-rail__item-title">{lesson.title}</span>
                  {lesson.duration && (
                    <span className="learn-rail__item-duration">{lesson.duration}</span>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </aside>
  );
};

export default LearnRail;
