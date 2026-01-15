/**
 * AI Tutor Service
 * Handles communication with Firebase Cloud Function for SAT tutoring
 * Uses Claude Haiku 4.5 via secure backend proxy
 */

import { getLessonContext, searchKnowledge } from '../data/knowledgeBase';
import { getTranscriptContext, formatTime } from './transcriptService';

// Cloud Function URL
const AI_TUTOR_URL = 'https://aitutor-ki77ua6x2a-uc.a.run.app';

// System prompt that defines the teaching style
const SYSTEM_PROMPT = `You are an expert SAT Math tutor. Your teaching style is:

1. **Clear and Direct**: Break down complex problems into numbered steps
2. **Why-Focused**: Always explain the reasoning behind each step, not just what to do
3. **Pattern-Based**: Highlight "Golden Rules" and key insights students should memorize
4. **Encouraging**: Be supportive but direct - students appreciate honest, clear guidance
5. **SAT-Specific**: Reference SAT formulas and common test patterns when relevant

When answering questions:
- If a student asks "why did he do that step?" - refer to the VIDEO TRANSCRIPT CONTEXT below if available, or ask them to describe the specific step they're asking about
- If no transcript context is available and the student asks about "that step" or "what he just did", politely ask them to describe what step they're referring to (e.g., "Could you describe the specific step or what numbers/equation you're looking at?")
- If confused about a concept - break it down with a simple example first
- If stuck on a problem - guide them step by step, don't just give the answer
- Use markdown formatting for math expressions when helpful

Remember: You're helping students understand SAT math, not just memorize procedures.`;

// Build context message from lesson content
const buildContextMessage = (lessonContext) => {
  if (!lessonContext) return '';

  const { current, related } = lessonContext;

  let context = `\n\n--- CURRENT LESSON CONTEXT ---\n`;
  context += `Topic: ${current.title}\n`;
  context += `Section: ${current.section}\n`;

  if (current.content.length > 0) {
    context += `\nLesson Content:\n`;
    current.content.forEach((item, i) => {
      context += `${i + 1}. ${item}\n`;
    });
  }

  if (related.length > 0) {
    context += `\nRelated Topics in This Section:\n`;
    related.forEach(r => {
      context += `- ${r.title}\n`;
    });
  }

  return context;
};

// Build video transcript context
const buildVideoContext = (transcriptContext, videoTimestamp) => {
  if (!transcriptContext) return '';

  let context = `\n\n--- VIDEO TRANSCRIPT CONTEXT ---\n`;
  context += `Student is at timestamp: ${formatTime(videoTimestamp)}\n\n`;

  if (transcriptContext.before) {
    context += `What was just said (before ${formatTime(videoTimestamp)}):\n`;
    context += `"${transcriptContext.before}"\n\n`;
  }

  if (transcriptContext.current) {
    context += `What is being said RIGHT NOW:\n`;
    context += `>>> "${transcriptContext.current}" <<<\n\n`;
  }

  if (transcriptContext.after) {
    context += `What comes next:\n`;
    context += `"${transcriptContext.after}"\n`;
  }

  context += `\nWhen the student asks about "that step" or "this part", they're referring to what's being discussed around ${formatTime(videoTimestamp)} in the video.\n`;

  return context;
};

// Main chat function - uses Firebase Cloud Function (secure)
export const chatWithTutor = async (
  messages,
  currentModuleId,
  currentLessonId,
  _apiKey, // No longer needed - kept for backward compatibility
  videoContext = null // { transcript, currentTime }
) => {
  // Get lesson context
  const lessonContext = getLessonContext(currentModuleId, currentLessonId);

  // Get the latest user message
  const latestUserMessage = messages[messages.length - 1];

  // Search for additional relevant content
  const searchResults = searchKnowledge(
    latestUserMessage.content,
    currentModuleId,
    3
  );

  // Build enhanced system message with context
  let enhancedSystem = SYSTEM_PROMPT;

  // Add video transcript context if available (most important for "why did he do that")
  if (videoContext?.transcript && videoContext?.currentTime !== undefined) {
    const transcriptContext = getTranscriptContext(
      videoContext.transcript,
      videoContext.currentTime,
      60 // 60 seconds window
    );
    enhancedSystem += buildVideoContext(transcriptContext, videoContext.currentTime);
  } else if (videoContext?.currentTime !== undefined) {
    // Video lesson but no transcript available
    enhancedSystem += `\n\n--- VIDEO LESSON INFO ---\n`;
    enhancedSystem += `The student is watching a video lesson at timestamp: ${formatTime(videoContext.currentTime)}\n`;
    enhancedSystem += `Note: Video transcript is not available for this video. If the student asks about a specific step, ask them to describe what they're seeing.\n`;
  }

  // Add lesson context
  if (lessonContext) {
    enhancedSystem += buildContextMessage(lessonContext);
  }

  // Add search results
  if (searchResults.length > 0) {
    enhancedSystem += '\n\n--- ADDITIONAL RELEVANT CONTENT ---\n';
    searchResults.forEach(result => {
      if (result.content.length > 0) {
        enhancedSystem += `\n${result.title}:\n`;
        result.content.slice(0, 3).forEach(c => {
          enhancedSystem += `- ${c}\n`;
        });
      }
    });
  }

  // Prepare messages for Claude API
  const claudeMessages = messages.map(m => ({
    role: m.role === 'assistant' ? 'assistant' : 'user',
    content: m.content
  }));

  try {
    const response = await fetch(AI_TUTOR_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messages: claudeMessages,
        system: enhancedSystem
      })
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to get response from AI Tutor');
    }

    const data = await response.json();
    return data.content;
  } catch (error) {
    console.error('AI Tutor Error:', error);
    throw error;
  }
};

// Quick answer for simple questions (uses less context)
export const quickAnswer = async (question) => {
  try {
    const response = await fetch(AI_TUTOR_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messages: [{ role: 'user', content: question }],
        system: SYSTEM_PROMPT
      })
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to get response');
    }

    const data = await response.json();
    return data.content;
  } catch (error) {
    console.error('Quick Answer Error:', error);
    throw error;
  }
};
