/**
 * Lesson-aware content tab resolver.
 *
 * getContentTabForLesson(moduleId, lessonId)
 *   1. Returns the lesson-specific tab if one exists.
 *   2. Falls back to the module-level tab from allContentTabs.
 *   3. Returns null when neither is available.
 *
 * ── Migration rollout (by non-video lesson count) ──
 *
 * Phase 1 (done):  linear-equations      — 6 lessons
 * Phase 2 (done):  triangles (11), circles (10), statistics (8)
 * Phase 3 (done):  systems (7), volume (7), quadratics (6)
 * Phase 4 (done):  functions (3), exponents (3)
 * Phase 5 (done):  percents (4), transformations (4),
 *                  dimensional-analysis (2),
 *                  equivalent-expressions (1), radians-degrees (1)
 *
 * To add a module: create lessons/<moduleName>Lessons.js exporting a
 * lessonId→contentTab map, import it here, and register it in
 * lessonTabsByModule. Run validateAll.js and dedupeCheck.js after.
 */

import { allContentTabs } from './index';
import { linearEquationsLessonTabs } from './lessons/linearEquationsLessons';
import { functionsLessonTabs } from './lessons/functionsLessons';
import { systemsLessonTabs } from './lessons/systemsLessons';
import { quadraticsLessonTabs } from './lessons/quadraticsLessons';
import { trianglesLessonTabs } from './lessons/trianglesLessons';
import { circlesLessonTabs } from './lessons/circlesLessons';
import { volumeLessonTabs } from './lessons/volumeLessons';
import { statisticsLessonTabs } from './lessons/statisticsLessons';
import { exponentsLessonTabs } from './lessons/exponentsLessons';
import { percentsLessonTabs } from './lessons/percentsLessons';
import { transformationsLessonTabs } from './lessons/transformationsLessons';
import { equivalentExpressionsLessonTabs } from './lessons/equivalentExpressionsLessons';
import { radiansDegreesLessonTabs } from './lessons/radiansDegreesLessons';
import { dimensionalAnalysisLessonTabs } from './lessons/dimensionalAnalysisLessons';

const lessonTabsByModule = {
  'linear-equations': linearEquationsLessonTabs,
  'functions': functionsLessonTabs,
  'systems': systemsLessonTabs,
  'quadratics': quadraticsLessonTabs,
  'triangles': trianglesLessonTabs,
  'circles': circlesLessonTabs,
  'volume': volumeLessonTabs,
  'statistics': statisticsLessonTabs,
  'exponents': exponentsLessonTabs,
  'percents': percentsLessonTabs,
  'transformations': transformationsLessonTabs,
  'equivalent-expressions': equivalentExpressionsLessonTabs,
  'radians-degrees': radiansDegreesLessonTabs,
  'dimensional-analysis': dimensionalAnalysisLessonTabs,
};

export function getContentTabForLesson(moduleId, lessonId) {
  const moduleLessonTabs = lessonTabsByModule[moduleId];
  if (moduleLessonTabs && lessonId != null && moduleLessonTabs[lessonId]) {
    return moduleLessonTabs[lessonId];
  }
  return allContentTabs[moduleId] || null;
}
