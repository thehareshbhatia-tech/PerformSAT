import React from 'react';

const UpNextCard = ({ nextLesson, onAdvance }) => {
  if (!nextLesson) {
    return (
      <div className="module-complete-card">
        <div className="module-complete-card__icon">🎉</div>
        <div className="module-complete-card__title">Module Complete</div>
        <p className="module-complete-card__text">
          You've finished every lesson in this module. Great work!
        </p>
      </div>
    );
  }

  return (
    <div className="up-next-card">
      <div>
        <div className="up-next-card__label">Up Next</div>
        <div className="up-next-card__title">{nextLesson.title}</div>
        <div className="up-next-card__type">
          {nextLesson.type === 'video' ? '▶ Video' : '◉ Lesson'} · {nextLesson.duration || '5 min'}
        </div>
      </div>
      <button className="up-next-card__btn" onClick={onAdvance}>
        Continue →
      </button>
    </div>
  );
};

export default UpNextCard;
