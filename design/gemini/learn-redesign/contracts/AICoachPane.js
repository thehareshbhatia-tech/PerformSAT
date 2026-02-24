// AI Coach Pane Contract

// src/components/learn/AICoachPane.jsx
// Persistent right-side pane containing the AiTutorChat.

import React, { useEffect, useRef } from 'react';
import AiTutorChat from '../AiTutorChat';

export const AICoachPane = ({ lesson, moduleId, videoTranscript, videoTimestamp }) => {
  const previousLessonId = useRef(lesson?.id);

  useEffect(() => {
    if (lesson && previousLessonId.current !== lesson.id) {
      // 1. Detect lesson change
      // 2. Instead of unmounting `AiTutorChat` and losing history, 
      //    we rely on AiTutorChat (or a modified version) to append 
      //    a hidden system context message informing the LLM of the new topic.
      
      // Example (assuming AiTutorChat accepts an onContextChange prop):
      // onContextChange({
      //   type: 'system_context_update',
      //   content: `User has moved to lesson: ${lesson.title}. Focus assistance on this topic.`
      // });
      
      previousLessonId.current = lesson.id;
    }
  }, [lesson]);

  return (
    <aside className="ai-coach-pane">
      <AiTutorChat
        isOpen={true} // Always open in desktop mode
        onClose={() => {}} // No-op on desktop, handles collapse on mobile
        moduleId={moduleId}
        lessonId={lesson?.id}
        lessonTitle={lesson?.title}
        isVideoLesson={lesson?.type === 'video'}
        videoTranscript={videoTranscript}
        videoTimestamp={videoTimestamp}
        // ... any new props needed for silent context updates ...
      />
    </aside>
  );
};
