// Workspace Shell and Pane Contracts

// src/components/learn/LearnWorkspace.jsx
// Main container. Holds state for `activeModuleId`, `activeLessonId`.
// Exposes context for child panes to consume.

import React, { useState, useMemo, useEffect } from 'react';
import { allLessons } from '../../data/lessons';
// other imports

export const LearnWorkspace = ({ initialModuleId, initialLessonId, onExit, useProgress }) => {
  const [activeModuleId, setActiveModuleId] = useState(initialModuleId);
  const [activeLessonId, setActiveLessonId] = useState(initialLessonId);

  // Derive flat sequence and sections
  const currentModuleLessons = useMemo(() => allLessons[activeModuleId] || [], [activeModuleId]);
  
  // Expose progression helpers
  const handleNext = () => { /* advance to next lesson in flat sequence */ };
  const handlePrevious = () => { /* go back */ };

  return (
    <div className="learn-workspace-container">
      <LearnRail 
        lessons={currentModuleLessons}
        activeLessonId={activeLessonId}
        onSelectLesson={setActiveLessonId}
        onBack={onExit}
      />
      <LessonStage 
        lesson={currentModuleLessons.find(l => l.id === activeLessonId)}
        onNext={handleNext}
        onPrevious={handlePrevious}
      />
      <AICoachPane 
        lesson={currentModuleLessons.find(l => l.id === activeLessonId)}
        moduleId={activeModuleId}
      />
    </div>
  );
};
