import { db } from '../firebase/config';
import { doc, getDoc, updateDoc, setDoc, collection, addDoc, serverTimestamp } from 'firebase/firestore';

const STUDY_PLAN_URL = process.env.REACT_APP_STUDY_PLAN_URL ||
  'https://us-central1-performsat-production.cloudfunctions.net/generateStudyPlan';

/**
 * Calls the Cloud Function to generate a study plan from diagnostic data.
 * Returns the structured plan object.
 */
export const generateStudyPlan = async (diagnosticReport, userProfile = {}, previousPlans = []) => {
  const response = await fetch(STUDY_PLAN_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      diagnosticReport: sanitizeDiagnostic(diagnosticReport),
      userProfile,
      previousPlans: previousPlans.slice(-2).map(p => ({ summary: p.summary })),
    }),
  });

  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    throw new Error(err.error || `Study plan generation failed (${response.status})`);
  }

  const { plan, generatedAt, model } = await response.json();
  return { plan, generatedAt, model };
};

/**
 * Persists a study plan artifact and updates the pointer on the progress doc.
 */
export const saveStudyPlanArtifact = async (userId, plan, metadata = {}) => {
  if (!userId || !plan) return null;

  const progressRef = doc(db, 'progress', userId);
  const artifactData = {
    plan,
    generatedAt: metadata.generatedAt || new Date().toISOString(),
    sourceTestId: metadata.sourceTestId || null,
    model: metadata.model || 'unknown',
    status: 'active',
    createdAt: serverTimestamp(),
  };

  const artifactRef = await addDoc(
    collection(db, 'progress', userId, 'studyPlanArtifacts'),
    artifactData
  );

  const preview = {
    headline: plan.summary?.headline || 'Study Plan',
    weeksCount: plan.weeks?.length || 0,
    generatedAt: artifactData.generatedAt,
    totalActivities: (plan.weeks || []).reduce((s, w) => s + (w.activities?.length || 0), 0),
  };

  const progressSnap = await getDoc(progressRef);
  const updatePayload = {
    currentStudyPlanArtifactId: artifactRef.id,
    studyPlanPreview: preview,
    studyPlan: plan,
    lastUpdated: serverTimestamp(),
  };

  if (progressSnap.exists()) {
    await updateDoc(progressRef, updatePayload);
  } else {
    await setDoc(progressRef, { userId, ...updatePayload }, { merge: true });
  }

  return artifactRef.id;
};

/**
 * Fetches the latest study plan artifact for a user.
 */
export const getLatestStudyPlanArtifact = async (userId) => {
  if (!userId) return null;

  const progressRef = doc(db, 'progress', userId);
  const snap = await getDoc(progressRef);
  if (!snap.exists()) return null;

  const data = snap.data();
  const artifactId = data.currentStudyPlanArtifactId;
  if (!artifactId) return null;

  const artifactRef = doc(db, 'progress', userId, 'studyPlanArtifacts', artifactId);
  const artifactSnap = await getDoc(artifactRef);
  if (!artifactSnap.exists()) return null;

  return { id: artifactSnap.id, ...artifactSnap.data() };
};

function sanitizeDiagnostic(report) {
  if (!report) return {};
  return {
    score: report.score,
    errorPatterns: report.errorPatterns ? {
      totalWrong: report.errorPatterns.totalWrong,
      summary: (report.errorPatterns.summary || []).map(s => ({
        type: s.type, label: s.label, count: s.count, percentage: s.percentage,
      })),
      dominantPattern: report.errorPatterns.dominantPattern ? {
        type: report.errorPatterns.dominantPattern.type,
        label: report.errorPatterns.dominantPattern.label,
      } : null,
    } : {},
    domainAnalysis: (report.domainAnalysis || []).map(d => ({
      domain: d.domain, displayName: d.displayName,
      accuracy: d.accuracy, correct: d.correct, total: d.total,
    })),
    skillAnalysis: {
      weakSkills: (report.skillAnalysis?.weakSkills || []).slice(0, 8).map(s => ({
        name: s.name, testAccuracy: s.testAccuracy, primaryErrorType: s.primaryErrorType,
        modules: s.modules, sections: s.sections,
      })),
      strongSkills: (report.skillAnalysis?.strongSkills || []).slice(0, 5).map(s => ({
        name: s.name, testAccuracy: s.testAccuracy,
      })),
    },
    difficultyAnalysis: report.difficultyAnalysis,
    timeAnalysis: report.timeAnalysis ? {
      avgTimePerQuestion: report.timeAnalysis.avgTimePerQuestion,
      fadeEffect: report.timeAnalysis.fadeEffect,
    } : {},
    trendAnalysis: report.trendAnalysis ? {
      hasHistory: report.trendAnalysis.hasHistory,
      trend: report.trendAnalysis.trend,
      scoreChange: report.trendAnalysis.scoreChange,
    } : {},
    mistakeFingerprint: report.mistakeFingerprint ? {
      archetypeLabel: report.mistakeFingerprint.archetypeLabel,
      archetypeDescription: report.mistakeFingerprint.archetypeDescription,
    } : {},
    prioritizedActions: (report.prioritizedActions || []).slice(0, 6).map(a => ({
      title: a.title, category: a.category, estimatedGain: a.estimatedGain,
    })),
  };
}
