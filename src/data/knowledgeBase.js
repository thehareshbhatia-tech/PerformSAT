/**
 * Knowledge Base for AI Tutor
 * Extracts and organizes educational content from all lesson modules
 * for use with RAG (Retrieval-Augmented Generation)
 */

import { allLessons } from './lessons';

// Helper to extract text content from content blocks
const extractTextFromBlocks = (blocks) => {
  if (!blocks) return [];

  const textContent = [];

  blocks.forEach(block => {
    if (block.type === 'text' && block.content) {
      textContent.push(block.content);
    }
    if (block.type === 'formula') {
      const formulaText = block.label
        ? `${block.label}: ${block.content || ''}`
        : block.content || '';
      if (formulaText) textContent.push(`Formula - ${formulaText}`);
    }
    if (block.type === 'example') {
      const exampleText = block.title
        ? `${block.title}: ${block.content || ''}`
        : block.content || '';
      if (exampleText) textContent.push(`Example - ${exampleText}`);
    }
    if (block.type === 'list' && block.items) {
      textContent.push(...block.items);
    }
  });

  return textContent;
};

// Build knowledge base from all lessons
export const buildKnowledgeBase = () => {
  const knowledge = [];

  Object.entries(allLessons).forEach(([moduleId, lessons]) => {
    lessons.forEach(lesson => {
      const entry = {
        moduleId,
        lessonId: lesson.id,
        title: lesson.title,
        type: lesson.type,
        section: lesson.section,
        duration: lesson.duration,
        videoId: lesson.videoId || null,
        tagline: lesson.hero?.tagline || '',
        subtitle: lesson.hero?.subtitle || '',
        content: [],
        searchText: ''
      };

      // Extract content from text lessons
      if (lesson.content?.blocks) {
        entry.content = extractTextFromBlocks(lesson.content.blocks);
      }

      // Build searchable text
      entry.searchText = [
        entry.title,
        entry.section,
        entry.tagline,
        entry.subtitle,
        ...entry.content
      ].join(' ').toLowerCase();

      knowledge.push(entry);
    });
  });

  return knowledge;
};

// Search knowledge base for relevant content
export const searchKnowledge = (query, moduleId = null, limit = 5) => {
  const knowledge = buildKnowledgeBase();
  const queryTerms = query.toLowerCase().split(/\s+/);

  let results = knowledge;

  // Filter by module if specified
  if (moduleId) {
    results = results.filter(k => k.moduleId === moduleId);
  }

  // Score each entry by relevance
  results = results.map(entry => {
    let score = 0;

    queryTerms.forEach(term => {
      // Exact title match (highest priority)
      if (entry.title.toLowerCase().includes(term)) score += 10;
      // Section match
      if (entry.section.toLowerCase().includes(term)) score += 5;
      // Content match
      if (entry.searchText.includes(term)) score += 1;
    });

    return { ...entry, score };
  });

  // Sort by score and return top results
  return results
    .filter(r => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
};

// Get full lesson context for current lesson
export const getLessonContext = (moduleId, lessonId) => {
  const knowledge = buildKnowledgeBase();
  const currentLesson = knowledge.find(
    k => k.moduleId === moduleId && k.lessonId === lessonId
  );

  if (!currentLesson) return null;

  // Get related lessons from same section
  const relatedLessons = knowledge.filter(
    k => k.moduleId === moduleId &&
        k.section === currentLesson.section &&
        k.lessonId !== lessonId
  );

  return {
    current: currentLesson,
    related: relatedLessons.slice(0, 3),
    moduleContext: knowledge
      .filter(k => k.moduleId === moduleId && k.content.length > 0)
      .slice(0, 5)
  };
};

// Get teaching style examples from content
export const getTeachingStyleExamples = () => {
  const knowledge = buildKnowledgeBase();

  // Find lessons with rich content to extract teaching style
  const richLessons = knowledge
    .filter(k => k.content.length >= 3)
    .slice(0, 10);

  return richLessons.map(lesson => ({
    title: lesson.title,
    content: lesson.content.slice(0, 5)
  }));
};

// Export the full knowledge base for debugging
export const knowledgeBase = buildKnowledgeBase();
