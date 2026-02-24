/**
 * useAnalytics — React hook that wires analytics lifecycle events
 * (session start/end) and exposes convenient track helpers.
 */

import { useEffect, useRef, useCallback } from 'react';
import {
  trackSessionStart,
  trackSessionEnd,
  trackTestCompleted,
  trackReviewSessionDone,
  trackRecoveryDrillDone,
  trackPacingDrillDone,
  trackCoachModeUsed,
  trackPlanActivityCompleted,
  flushEvents,
} from '../services/analyticsService';

export const useAnalytics = (userId) => {
  const sessionStart = useRef(null);

  useEffect(() => {
    if (!userId) return;
    sessionStart.current = Date.now();
    trackSessionStart(userId);

    const handleBeforeUnload = () => {
      if (sessionStart.current) {
        const minutes = Math.round((Date.now() - sessionStart.current) / 60_000);
        trackSessionEnd(userId, minutes);
        flushEvents(userId);
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      handleBeforeUnload();
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [userId]);

  return {
    trackTestCompleted: useCallback(
      (scaledScore, rawScore, timedMode) => trackTestCompleted(userId, scaledScore, rawScore, timedMode),
      [userId]
    ),
    trackReviewDone: useCallback(
      (itemCount, accuracy, streakDay) => trackReviewSessionDone(userId, itemCount, accuracy, streakDay),
      [userId]
    ),
    trackRecoveryDrill: useCallback(
      (errorType, accuracy, minutes) => trackRecoveryDrillDone(userId, errorType, accuracy, minutes),
      [userId]
    ),
    trackPacingDrill: useCallback(
      (modeId, accuracy, avgTime) => trackPacingDrillDone(userId, modeId, accuracy, avgTime),
      [userId]
    ),
    trackCoachMode: useCallback(
      (modeId, messageCount) => trackCoachModeUsed(userId, modeId, messageCount),
      [userId]
    ),
    trackPlanActivity: useCallback(
      (activityType, weekIndex) => trackPlanActivityCompleted(userId, activityType, weekIndex),
      [userId]
    ),
  };
};
