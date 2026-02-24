// Navigation Contracts

// src/components/learn/LearnRail.jsx
// Left sidebar showing sections and lessons

export const LearnRail = ({ lessons, activeLessonId, onSelectLesson, onBack }) => {
  // 1. Group lessons by `section` string property
  // 2. Render clickable rows for each lesson
  // 3. Highlight row if lesson.id === activeLessonId
  // 4. Clicking calls onSelectLesson(lesson.id) -- no full page navigation!
  
  return (
    <aside className="learn-rail">
      <button onClick={onBack}>← Back to Modules</button>
      {/* Scrollable list of sections and lessons */}
    </aside>
  );
};

// src/components/learn/UpNextCard.jsx
// Appears at the bottom of the LessonStage content area

export const UpNextCard = ({ currentLessonId, nextLesson, onAdvance }) => {
  if (!nextLesson) {
    return <div className="module-complete">Module Complete!</div>;
  }
  
  return (
    <div className="up-next-card">
      <h4>Up Next</h4>
      <h3>{nextLesson.title}</h3>
      <button onClick={onAdvance}>Mark Complete & Continue</button>
    </div>
  );
};
