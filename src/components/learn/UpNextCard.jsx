import React from 'react';
import { DataCard } from '../ui/DataCard';
import { PrimaryButton } from '../ui/Button';

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
    <DataCard style={{ marginTop: '40px', padding: '20px 24px', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
      <div>
        <div className="up-next-card__label">Up Next</div>
        <div className="up-next-card__title">{nextLesson.title}</div>
        <div className="up-next-card__type">
          {nextLesson.type === 'video' ? '▶ Video' : '◉ Lesson'} · {nextLesson.duration || '5 min'}
        </div>
      </div>
      <PrimaryButton onClick={onAdvance} style={{ flexShrink: 0, padding: '10px 20px', borderRadius: 'var(--radius-md)' }}>
        Continue →
      </PrimaryButton>
    </DataCard>
  );
};

export default UpNextCard;
