/**
 * Chat Session Service
 * Manages persistent AI chat sessions in Firestore with sessionStorage write-through cache.
 * Firestore path: progress/{userId}/aiChatSessions/{sessionId}
 */

import { db } from '../firebase/config';
import {
  doc, collection, addDoc, getDoc, getDocs, updateDoc, setDoc,
  query, where, orderBy, limit as firestoreLimit, serverTimestamp, Timestamp
} from 'firebase/firestore';

// Debounce tracking
const pendingWrites = new Map();
const DEBOUNCE_INTERVAL_MS = 30000; // 30 seconds
const DEBOUNCE_MESSAGE_COUNT = 3;

/**
 * Save a new chat session to Firestore
 */
export const saveSession = async (userId, sessionData) => {
  if (!userId) throw new Error('userId required');

  const sessionsRef = collection(db, 'progress', userId, 'aiChatSessions');
  const docRef = await addDoc(sessionsRef, {
    moduleId: sessionData.moduleId || null,
    lessonId: sessionData.lessonId || null,
    lessonTitle: sessionData.lessonTitle || null,
    context: sessionData.context || 'lesson',
    messages: sessionData.messages || [],
    messageCount: sessionData.messages?.length || 0,
    startedAt: serverTimestamp(),
    lastMessageAt: serverTimestamp(),
    topicsDiscussed: sessionData.topicsDiscussed || [],
    summary: null,
    keyInsights: null,
    teachingApproachNotes: null,
  });

  // Update sessionStorage cache
  try {
    const cacheKey = `aiChatSession_${userId}_${sessionData.moduleId}_${sessionData.lessonId}`;
    sessionStorage.setItem(cacheKey, JSON.stringify({
      sessionId: docRef.id,
      ...sessionData,
    }));
  } catch (e) {
    // Storage full — non-critical
  }

  return docRef.id;
};

/**
 * Update session messages with debouncing.
 * Writes immediately if messageCount threshold hit, otherwise debounces by time.
 */
export const updateSessionMessages = async (userId, sessionId, messages, force = false) => {
  if (!userId || !sessionId) return;

  const key = `${userId}_${sessionId}`;
  const pending = pendingWrites.get(key);
  const messageCount = messages.length;

  // Check if we should write now
  const shouldWriteNow = force ||
    (pending && messageCount - pending.lastWrittenCount >= DEBOUNCE_MESSAGE_COUNT);

  if (shouldWriteNow) {
    // Clear any pending timer
    if (pending?.timer) clearTimeout(pending.timer);
    pendingWrites.delete(key);

    const sessionRef = doc(db, 'progress', userId, 'aiChatSessions', sessionId);
    await updateDoc(sessionRef, {
      messages: messages.map(m => ({
        role: m.role,
        content: m.content,
        timestamp: m.timestamp || new Date().toISOString(),
      })),
      messageCount,
      lastMessageAt: serverTimestamp(),
    });

    pendingWrites.set(key, { lastWrittenCount: messageCount });
    return;
  }

  // Set up debounced write
  if (pending?.timer) clearTimeout(pending.timer);

  const timer = setTimeout(async () => {
    try {
      const sessionRef = doc(db, 'progress', userId, 'aiChatSessions', sessionId);
      await updateDoc(sessionRef, {
        messages: messages.map(m => ({
          role: m.role,
          content: m.content,
          timestamp: m.timestamp || new Date().toISOString(),
        })),
        messageCount: messages.length,
        lastMessageAt: serverTimestamp(),
      });
      pendingWrites.set(key, { lastWrittenCount: messages.length });
    } catch (e) {
      console.error('Debounced session write failed:', e);
    }
  }, DEBOUNCE_INTERVAL_MS);

  pendingWrites.set(key, {
    timer,
    lastWrittenCount: pending?.lastWrittenCount || 0,
  });
};

/**
 * Load the active session for a module/lesson, or the most recent sessions.
 */
export const loadActiveSession = async (userId, moduleId, lessonId) => {
  if (!userId) return null;

  // Check sessionStorage cache first
  try {
    const cacheKey = `aiChatSession_${userId}_${moduleId}_${lessonId}`;
    const cached = sessionStorage.getItem(cacheKey);
    if (cached) {
      const parsed = JSON.parse(cached);
      if (parsed.sessionId && parsed.messages?.length > 0) {
        // Verify session still exists in Firestore (async, non-blocking)
        return parsed;
      }
    }
  } catch (e) {
    // Ignore cache errors
  }

  // Query Firestore
  try {
    const sessionsRef = collection(db, 'progress', userId, 'aiChatSessions');
    const q = query(
      sessionsRef,
      where('moduleId', '==', moduleId),
      where('lessonId', '==', lessonId),
      orderBy('lastMessageAt', 'desc'),
      firestoreLimit(1)
    );

    const snapshot = await getDocs(q);
    if (snapshot.empty) return null;

    const sessionDoc = snapshot.docs[0];
    const data = sessionDoc.data();

    // Update cache
    try {
      const cacheKey = `aiChatSession_${userId}_${moduleId}_${lessonId}`;
      sessionStorage.setItem(cacheKey, JSON.stringify({
        sessionId: sessionDoc.id,
        ...data,
      }));
    } catch (e) {
      // Non-critical
    }

    return { sessionId: sessionDoc.id, ...data };
  } catch (e) {
    console.error('Failed to load session from Firestore:', e);
    return null;
  }
};

/**
 * Load recent sessions for a user (for learning memory context)
 */
export const loadRecentSessions = async (userId, count = 5) => {
  if (!userId) return [];

  try {
    const sessionsRef = collection(db, 'progress', userId, 'aiChatSessions');
    const q = query(
      sessionsRef,
      orderBy('lastMessageAt', 'desc'),
      firestoreLimit(count)
    );

    const snapshot = await getDocs(q);
    return snapshot.docs.map(d => ({ sessionId: d.id, ...d.data() }));
  } catch (e) {
    console.error('Failed to load recent sessions:', e);
    return [];
  }
};

/**
 * Get the learningMemory field from the progress document
 */
export const getLearningMemory = async (userId) => {
  if (!userId) return null;

  try {
    const progressRef = doc(db, 'progress', userId);
    const progressDoc = await getDoc(progressRef);

    if (!progressDoc.exists()) return null;

    return progressDoc.data()?.learningMemory || null;
  } catch (e) {
    console.error('Failed to load learning memory:', e);
    return null;
  }
};

/**
 * Update the learningMemory field on the progress document
 */
export const updateLearningMemory = async (userId, learningMemory) => {
  if (!userId) return;

  try {
    const progressRef = doc(db, 'progress', userId);
    await updateDoc(progressRef, { learningMemory });
  } catch (e) {
    console.error('Failed to update learning memory:', e);
  }
};

/**
 * Flush any pending debounced writes (call on unmount)
 */
export const flushPendingWrites = async (userId, sessionId) => {
  const key = `${userId}_${sessionId}`;
  const pending = pendingWrites.get(key);
  if (pending?.timer) {
    clearTimeout(pending.timer);
    pendingWrites.delete(key);
  }
};

export default {
  saveSession,
  updateSessionMessages,
  loadActiveSession,
  loadRecentSessions,
  getLearningMemory,
  updateLearningMemory,
  flushPendingWrites,
};
