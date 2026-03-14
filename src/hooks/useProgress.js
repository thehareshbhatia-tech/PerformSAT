import { useState, useEffect, useRef } from 'react';
import { db } from '../firebase/config';
import { doc, onSnapshot, updateDoc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore';
import { markLessonComplete as markComplete, markLessonIncomplete } from '../services/progressService';
import { recordPracticeAttempt as recordAttempt } from '../services/practiceService';
import { getDueReviewCount, getReviewStats } from '../services/reviewService';
import { recordSkillAttempts, getSkillDiagnosticSummary as getDiagnostic, getSkillBreakdown as getBreakdown } from '../services/skillService';
import { recordPracticeTestResult as recordTestResult, getPracticeTestBestScore, getPracticeTestAttempts, saveTestProgress as saveProgress, clearTestProgress as clearProgress, getInProgressTest } from '../services/practiceTestService';
import { getStudyPlanArtifact, getLatestStudyPlanArtifact } from '../services/hybridStudyPlanService';

/**
 * Hook for managing user progress with real-time Firestore sync
 * @param {string} userId - User ID
 * @returns {Object} Progress state and functions
 */
export const useProgress = (userId) => {
  const [completedLessons, setCompletedLessons] = useState({});
  const [practiceProgress, setPracticeProgress] = useState({});
  const [reviewQueue, setReviewQueue] = useState({});
  const [skillProgress, setSkillProgress] = useState({});
  const [practiceTestResults, setPracticeTestResults] = useState({});
  const [inProgressTests, setInProgressTests] = useState({});
  const [studyPlan, setStudyPlan] = useState(null);
  const [studyPlanMeta, setStudyPlanMeta] = useState({ artifactId: null, preview: null });
  const studyPlanWriteInFlight = useRef(false);
  const hydratingArtifact = useRef(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!userId) {
      setLoading(false);
      return;
    }

    const progressRef = doc(db, 'progress', userId);

    // Set up real-time listener
    const unsubscribe = onSnapshot(
      progressRef,
      (docSnap) => {
        if (docSnap.exists()) {
          const data = docSnap.data();

          // Handle both old format (fields with dots) and new format (nested object)
          let completedLessonsData = {};

          if (data.completedLessons && Object.keys(data.completedLessons).length > 0) {
            // New format: nested object
            completedLessonsData = data.completedLessons;
          } else {
            // Old format: check for fields with "completedLessons." prefix
            Object.keys(data).forEach(key => {
              if (key.startsWith('completedLessons.')) {
                const lessonKey = key.replace('completedLessons.', '');
                completedLessonsData[lessonKey] = data[key];
              }
            });
          }

          setCompletedLessons(completedLessonsData);

          // Also get practice progress
          setPracticeProgress(data.practiceProgress || {});

          // Get review queue
          setReviewQueue(data.reviewQueue || {});

          // Get skill progress
          setSkillProgress(data.skillProgress || {});

          // Get practice test results
          setPracticeTestResults(data.practiceTestResults || {});

          // Get in-progress tests
          setInProgressTests(data.inProgressTests || {});

          // Hydrate study plan: artifact-first, with legacy root field fallback.
          // Guard: never wipe an optimistic plan that saveStudyPlan() set while
          // the artifact write is still in flight or hydration hasn't resolved.
          const incomingPlan = data.studyPlan || null;
          const artifactId = data.currentStudyPlanArtifactId || null;

          setStudyPlanMeta({
            artifactId,
            preview: data.studyPlanPreview || null,
          });

          if (incomingPlan?.weeks?.length) {
            setStudyPlan(incomingPlan);
            studyPlanWriteInFlight.current = false;
          } else if (!hydratingArtifact.current) {
            hydratingArtifact.current = true;

            const hydrate = artifactId
              ? getStudyPlanArtifact(userId, artifactId)
              : getLatestStudyPlanArtifact(userId);

            const source = artifactId ? `pointer:${artifactId}` : 'latest-query';
            console.log('[useProgress] Hydrating study plan via', source);

            hydrate.then(art => {
              if (art?.plan?.weeks?.length) {
                console.log('[useProgress] Artifact hydrated OK via', source, '— weeks:', art.plan.weeks.length);
                setStudyPlan(art.plan);
                studyPlanWriteInFlight.current = false;
                setStudyPlanMeta(prev => ({
                  ...prev,
                  artifactId: art.id,
                }));
              } else if (!studyPlanWriteInFlight.current) {
                // Only clear if no optimistic plan is in flight
                setStudyPlan(prev => prev?.weeks?.length ? prev : null);
              }
            }).catch(err => {
              console.error('[useProgress] Artifact hydration failed:', err);
              if (!studyPlanWriteInFlight.current) {
                setStudyPlan(prev => prev?.weeks?.length ? prev : null);
              }
            }).finally(() => {
              hydratingArtifact.current = false;
            });
          }
          // If hydratingArtifact is already in progress, don't touch studyPlan —
          // the pending hydration or the optimistic value should remain.
        } else {
          setCompletedLessons({});
          setPracticeProgress({});
          setReviewQueue({});
          setSkillProgress({});
          setPracticeTestResults({});
          setInProgressTests({});
          setStudyPlan(null);
          setStudyPlanMeta({ artifactId: null, preview: null });
        }
        setLoading(false);
      },
      (err) => {
        console.error('Error listening to progress:', err);
        setError(err.message);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, [userId]);

  /**
   * Marks a lesson as complete with optimistic update
   * @param {string} moduleId - Module ID
   * @param {number} lessonId - Lesson ID
   * @param {Object} lessonData - Lesson metadata
   */
  const markLessonComplete = async (moduleId, lessonId, lessonData) => {
    const lessonKey = `${moduleId}-${lessonId}`;

    // Optimistic update
    setCompletedLessons(prev => ({
      ...prev,
      [lessonKey]: {
        completed: true,
        moduleId,
        lessonId,
        lessonTitle: lessonData.title,
        lessonType: lessonData.type,
        completedAt: new Date()
      }
    }));

    try {
      await markComplete(userId, moduleId, lessonId, lessonData);
    } catch (err) {
      console.error('Failed to mark lesson complete:', err);
      // Rollback optimistic update
      setCompletedLessons(prev => {
        const updated = { ...prev };
        delete updated[lessonKey];
        return updated;
      });
      setError(err.message);
    }
  };

  /**
   * Toggles lesson completion status
   * @param {string} moduleId - Module ID
   * @param {number} lessonId - Lesson ID
   * @param {Object} lessonData - Lesson metadata
   */
  const toggleLessonComplete = async (moduleId, lessonId, lessonData) => {
    const lessonKey = `${moduleId}-${lessonId}`;
    const isCompleted = completedLessons[lessonKey]?.completed;

    if (isCompleted) {
      // Optimistic update for incomplete
      setCompletedLessons(prev => ({
        ...prev,
        [lessonKey]: {
          ...prev[lessonKey],
          completed: false
        }
      }));

      try {
        await markLessonIncomplete(userId, moduleId, lessonId);
      } catch (err) {
        console.error('Failed to mark lesson incomplete:', err);
        // Rollback
        setCompletedLessons(prev => ({
          ...prev,
          [lessonKey]: {
            ...prev[lessonKey],
            completed: true
          }
        }));
        setError(err.message);
      }
    } else {
      await markLessonComplete(moduleId, lessonId, lessonData);
    }
  };

  /**
   * Checks if a lesson is completed
   * @param {string} moduleId - Module ID
   * @param {number} lessonId - Lesson ID
   * @returns {boolean}
   */
  const isLessonCompleted = (moduleId, lessonId) => {
    const lessonKey = `${moduleId}-${lessonId}`;
    return completedLessons[lessonKey]?.completed || false;
  };

  /**
   * Gets module progress percentage
   * @param {string} moduleId - Module ID
   * @param {number} totalLessons - Total lessons in module
   * @returns {number} Completion percentage (0-100)
   */
  const getModuleProgress = (moduleId, totalLessons) => {
    if (!totalLessons || totalLessons === 0) return 0;

    const completedCount = Object.keys(completedLessons).filter(key => {
      return key.startsWith(`${moduleId}-`) && completedLessons[key]?.completed;
    }).length;

    return Math.round((completedCount / totalLessons) * 100);
  };

  // ===== Practice Progress Functions =====
  // Note: These functions now work with section names (e.g., "Deriving Equations")
  // instead of lesson IDs for section-based practice

  /**
   * Records a practice attempt with optimistic update
   * Also records skill attempts for each question answered
   * @param {string} moduleId - Module ID
   * @param {string} sectionName - Section name (e.g., "Deriving Equations")
   * @param {Object} answers - Answers object { questionId: { selected, correct, skills } }
   * @param {number} score - Number correct
   * @param {number} totalQuestions - Total questions
   */
  const recordPracticeAttempt = async (moduleId, sectionName, answers, score, totalQuestions) => {
    const practiceKey = `${moduleId}-${sectionName}`;

    // Optimistic update
    setPracticeProgress(prev => ({
      ...prev,
      [practiceKey]: {
        bestScore: prev[practiceKey] ? Math.max(prev[practiceKey].bestScore, score) : score,
        totalAttempts: prev[practiceKey] ? prev[practiceKey].totalAttempts + 1 : 1,
        lastAttemptAt: new Date(),
        lastAnswers: answers
      }
    }));

    try {
      await recordAttempt(userId, moduleId, sectionName, answers, score, totalQuestions);

      // Record skill attempts for each answered question
      for (const [questionId, answerData] of Object.entries(answers)) {
        if (answerData.skills && answerData.skills.length > 0) {
          await recordSkillAttempts(userId, answerData.skills, answerData.correct);
        }
      }
    } catch (err) {
      console.error('Failed to record practice attempt:', err);
      setError(err.message);
    }
  };

  /**
   * Checks if a section has been practiced
   * @param {string} moduleId - Module ID
   * @param {string} sectionName - Section name
   * @returns {boolean}
   */
  const hasPracticed = (moduleId, sectionName) => {
    const practiceKey = `${moduleId}-${sectionName}`;
    return !!practiceProgress[practiceKey];
  };

  /**
   * Gets best score for a section
   * @param {string} moduleId - Module ID
   * @param {string} sectionName - Section name
   * @returns {number} Best score or 0
   */
  const getBestScore = (moduleId, sectionName) => {
    const practiceKey = `${moduleId}-${sectionName}`;
    return practiceProgress[practiceKey]?.bestScore || 0;
  };

  /**
   * Gets practice progress for a specific section
   * @param {string} moduleId - Module ID
   * @param {string} sectionName - Section name
   * @returns {Object|null}
   */
  const getSectionPracticeProgress = (moduleId, sectionName) => {
    const practiceKey = `${moduleId}-${sectionName}`;
    return practiceProgress[practiceKey] || null;
  };

  // ===== Review Queue Functions =====

  /**
   * Gets count of questions due for review
   * @returns {number}
   */
  const getDueCount = () => {
    return getDueReviewCount(reviewQueue);
  };

  /**
   * Gets review statistics
   * @returns {{ dueCount: number, totalCount: number, masteredRecently: number }}
   */
  const getReviewStatistics = () => {
    return getReviewStats(reviewQueue);
  };

  // ===== Skill Progress Functions =====

  /**
   * Gets skill diagnostic summary for the dashboard
   * @returns {Object} Diagnostic summary with weak/strong skills, domain progress
   */
  const getSkillDiagnosticSummary = () => {
    return getDiagnostic(skillProgress);
  };

  /**
   * Gets hierarchical skill breakdown (domain > module > section > skills)
   * @returns {Object} Hierarchical skill breakdown
   */
  const getSkillBreakdown = () => {
    return getBreakdown(skillProgress);
  };

  // ===== Practice Test Results Functions =====

  /**
   * Records a practice test result with optimistic update
   * @param {string} testId - Test ID
   * @param {string} testTitle - Test title
   * @param {Object} results - Test results { rawScore, totalQuestions, scaledScore, timedMode, moduleScores }
   */
  const recordPracticeTestAttempt = async (testId, testTitle, results) => {
    console.log('[useProgress] recordPracticeTestAttempt called:', { userId, testId, testTitle, results });

    // Optimistic update
    setPracticeTestResults(prev => {
      const existing = prev[testId];
      const attemptData = {
        completedAt: new Date().toISOString(),
        rawScore: results.rawScore,
        totalQuestions: results.totalQuestions,
        scaledScore: results.scaledScore,
        timedMode: results.timedMode,
        moduleScores: results.moduleScores,
        diagnosticData: results.diagnosticData || null,
        scoringVersion: results.scoringVersion || null,
        thetaEstimate: results.thetaEstimate ?? null,
        standardError: results.standardError ?? null,
        routeTaken: results.routeTaken || null,
      };

      if (existing) {
        return {
          ...prev,
          [testId]: {
            ...existing,
            attempts: [...(existing.attempts || []), attemptData],
            bestScaledScore: Math.max(existing.bestScaledScore, results.scaledScore),
            bestRawScore: Math.max(existing.bestRawScore, results.rawScore),
            totalAttempts: existing.totalAttempts + 1,
            lastAttemptAt: new Date()
          }
        };
      } else {
        return {
          ...prev,
          [testId]: {
            testId,
            testTitle,
            attempts: [attemptData],
            bestScaledScore: results.scaledScore,
            bestRawScore: results.rawScore,
            totalAttempts: 1,
            lastAttemptAt: new Date()
          }
        };
      }
    });

    try {
      console.log('[useProgress] Calling Firestore recordTestResult...');
      await recordTestResult(userId, testId, testTitle, results);
      console.log('[useProgress] Firestore save successful!');
    } catch (err) {
      console.error('[useProgress] Failed to record practice test result:', err);
      setError(err.message);
    }
  };

  /**
   * Gets best SAT score for a test
   * @param {string} testId - Test ID
   * @returns {number|null} Best scaled score or null
   */
  const getTestBestScore = (testId) => {
    return getPracticeTestBestScore(practiceTestResults, testId);
  };

  /**
   * Gets number of attempts for a test
   * @param {string} testId - Test ID
   * @returns {number} Number of attempts
   */
  const getTestAttempts = (testId) => {
    return getPracticeTestAttempts(practiceTestResults, testId);
  };

  // ===== In-Progress Test Functions =====

  /**
   * Saves test progress (called when user answers questions or navigates)
   * @param {string} testId - Test ID
   * @param {Object} progressData - Current progress state
   */
  const saveTestProgress = async (testId, progressData) => {
    if (!userId) return;

    // Optimistic update
    setInProgressTests(prev => ({
      ...prev,
      [testId]: {
        testId,
        ...progressData,
        lastSavedAt: new Date().toISOString()
      }
    }));

    try {
      await saveProgress(userId, testId, progressData);
    } catch (err) {
      console.error('Failed to save test progress:', err);
    }
  };

  /**
   * Clears test progress (called when test is completed or abandoned)
   * @param {string} testId - Test ID
   */
  const clearTestProgress = async (testId) => {
    if (!userId) return;

    // Optimistic update
    setInProgressTests(prev => {
      const { [testId]: _, ...rest } = prev;
      return rest;
    });

    try {
      await clearProgress(userId, testId);
    } catch (err) {
      console.error('Failed to clear test progress:', err);
    }
  };

  /**
   * Gets in-progress test data
   * @param {string} testId - Test ID
   * @returns {Object|null} In-progress data or null
   */
  const getTestProgress = (testId) => {
    return getInProgressTest(inProgressTests, testId);
  };

  /**
   * Checks if a test has saved progress
   * @param {string} testId - Test ID
   * @returns {boolean}
   */
  const hasTestProgress = (testId) => {
    return !!inProgressTests[testId];
  };

  // ===== Study Plan Functions =====

  /**
   * Saves a study plan to Firestore
   * @param {Object} plan - The generated study plan
   */
  const saveStudyPlan = async (plan) => {
    if (!userId || !plan) return;

    console.log('[useProgress] saveStudyPlan called, hasWeeks:', !!plan?.weeks, 'weeksCount:', plan?.weeks?.length || 0);

    // Set guard so onSnapshot hydration won't wipe this optimistic plan
    studyPlanWriteInFlight.current = true;
    setStudyPlan(plan);
  };

  /**
   * Marks a study plan activity as complete
   * @param {number} weekIndex - Index of the week (0-based)
   * @param {number} activityIndex - Index of the activity within the week (0-based)
   */
  const markStudyActivityComplete = async (weekIndex, activityIndex) => {
    if (!userId || !studyPlan) return;

    // Optimistic update
    setStudyPlan(prev => {
      if (!prev || !prev.weeks || !prev.weeks[weekIndex]) return prev;
      const updated = JSON.parse(JSON.stringify(prev));
      if (updated.weeks[weekIndex].activities[activityIndex]) {
        updated.weeks[weekIndex].activities[activityIndex].completed = true;
        updated.weeks[weekIndex].activities[activityIndex].completedAt = new Date().toISOString();
      }
      return updated;
    });

    try {
      // Update the artifact doc if we have a pointer
      const artId = studyPlanMeta.artifactId;
      if (artId) {
        const artRef = doc(db, 'progress', userId, 'studyPlanArtifacts', artId);
        const artSnap = await getDoc(artRef);
        if (artSnap.exists()) {
          const artData = artSnap.data();
          const plan = artData.plan ? JSON.parse(JSON.stringify(artData.plan)) : null;
          if (plan?.weeks?.[weekIndex]?.activities?.[activityIndex]) {
            plan.weeks[weekIndex].activities[activityIndex].completed = true;
            plan.weeks[weekIndex].activities[activityIndex].completedAt = new Date().toISOString();
            await updateDoc(artRef, { plan });
          }
        }
      }
      // Also update legacy root field if present
      const progressRef = doc(db, 'progress', userId);
      const progressSnap = await getDoc(progressRef);
      if (progressSnap.exists()) {
        const data = progressSnap.data();
        if (data.studyPlan?.weeks?.[weekIndex]?.activities?.[activityIndex]) {
          const plan = JSON.parse(JSON.stringify(data.studyPlan));
          plan.weeks[weekIndex].activities[activityIndex].completed = true;
          plan.weeks[weekIndex].activities[activityIndex].completedAt = new Date().toISOString();
          await updateDoc(progressRef, { studyPlan: plan });
        }
      }
    } catch (err) {
      console.error('[useProgress] Failed to mark activity complete:', err);
      setError(err.message);
    }
  };

  /**
   * Unmarks a study plan activity (sets it back to incomplete)
   * @param {number} weekIndex - Index of the week (0-based)
   * @param {number} activityIndex - Index of the activity within the week (0-based)
   */
  const unmarkStudyActivityComplete = async (weekIndex, activityIndex) => {
    if (!userId || !studyPlan) return;

    // Optimistic update
    setStudyPlan(prev => {
      if (!prev || !prev.weeks || !prev.weeks[weekIndex]) return prev;
      const updated = JSON.parse(JSON.stringify(prev));
      if (updated.weeks[weekIndex].activities[activityIndex]) {
        updated.weeks[weekIndex].activities[activityIndex].completed = false;
        delete updated.weeks[weekIndex].activities[activityIndex].completedAt;
      }
      return updated;
    });

    try {
      const artId = studyPlanMeta.artifactId;
      if (artId) {
        const artRef = doc(db, 'progress', userId, 'studyPlanArtifacts', artId);
        const artSnap = await getDoc(artRef);
        if (artSnap.exists()) {
          const artData = artSnap.data();
          const plan = artData.plan ? JSON.parse(JSON.stringify(artData.plan)) : null;
          if (plan?.weeks?.[weekIndex]?.activities?.[activityIndex]) {
            plan.weeks[weekIndex].activities[activityIndex].completed = false;
            delete plan.weeks[weekIndex].activities[activityIndex].completedAt;
            await updateDoc(artRef, { plan });
          }
        }
      }
      const progressRef = doc(db, 'progress', userId);
      const progressSnap = await getDoc(progressRef);
      if (progressSnap.exists()) {
        const data = progressSnap.data();
        if (data.studyPlan?.weeks?.[weekIndex]?.activities?.[activityIndex]) {
          const plan = JSON.parse(JSON.stringify(data.studyPlan));
          plan.weeks[weekIndex].activities[activityIndex].completed = false;
          delete plan.weeks[weekIndex].activities[activityIndex].completedAt;
          await updateDoc(progressRef, { studyPlan: plan });
        }
      }
    } catch (err) {
      console.error('[useProgress] Failed to unmark activity:', err);
      setError(err.message);
    }
  };

  return {
    completedLessons,
    practiceProgress,
    reviewQueue,
    skillProgress,
    practiceTestResults,
    inProgressTests,
    studyPlan,
    studyPlanMeta,
    loading,
    error,
    markLessonComplete,
    toggleLessonComplete,
    isLessonCompleted,
    getModuleProgress,
    // Practice functions (section-based)
    recordPracticeAttempt,
    hasPracticed,
    getBestScore,
    getSectionPracticeProgress,
    // Review queue functions
    getDueCount,
    getReviewStatistics,
    // Skill progress functions
    getSkillDiagnosticSummary,
    getSkillBreakdown,
    // Practice test results functions
    recordPracticeTestAttempt,
    getTestBestScore,
    getTestAttempts,
    // In-progress test functions
    saveTestProgress,
    clearTestProgress,
    getTestProgress,
    hasTestProgress,
    // Study plan functions
    saveStudyPlan,
    markStudyActivityComplete,
    unmarkStudyActivityComplete
  };
};
