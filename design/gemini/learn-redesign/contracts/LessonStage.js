// Lesson Stage Contract

// src/components/learn/LessonStage.jsx
// Main content area. Wraps video and text content.

import React from 'react';
// other imports

export const LessonStage = ({ lesson, onNext, onPrevious, nextLesson }) => {
  if (!lesson) return <div>Loading...</div>;

  return (
    <main className="lesson-stage">
      {/* 1. Universal Header (Title, tagline, metadata) */}
      <header className="lesson-header">
        {lesson.hero?.tagline && <span className="tagline">{lesson.hero.tagline}</span>}
        <h1>{lesson.title}</h1>
        {lesson.hero?.subtitle && <p className="subtitle">{lesson.hero.subtitle}</p>}
      </header>

      {/* 2. Video Player (if video lesson) */}
      {lesson.type === 'video' && lesson.videoId && (
        <VideoPane videoId={lesson.videoId} title={lesson.title} />
      )}

      {/* 3. Text Content / Blocks (Always rendered below video or directly below header) */}
      <div className="lesson-content-blocks">
        {lesson.content?.blocks?.map((block, index) => (
          <ContentRenderer key={index} block={block} />
        ))}
      </div>

      {/* 4. Progression / Up Next */}
      <UpNextCard 
        currentLessonId={lesson.id} 
        nextLesson={nextLesson} 
        onAdvance={onNext} 
      />
    </main>
  );
};
