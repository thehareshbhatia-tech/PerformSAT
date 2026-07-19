import { authFetch } from './authFetch';

const STUDY_PLAN_URL = process.env.REACT_APP_STUDY_PLAN_URL ||
  'https://us-central1-performsat-production.cloudfunctions.net/generateStudyPlan';

/** How long the AI plan call may run before we abort it. The generateStudyPlan
 *  Cloud Function makes an LLM call — observed ~68s in practice — so the ceiling
 *  is generous (it runs off the critical path as best-effort augmentation), but
 *  bounded so a cold/mis-deployed function that never responds can't leave the
 *  request pending forever. On timeout the deterministic plan stands. */
const AI_PLAN_TIMEOUT_MS = 120000;

/**
 * Calls the Cloud Function to narrate a study plan from diagnostic data.
 * The deterministic plan's structure is passed IN (compact weeks) so the
 * model narrates the real weeks instead of inventing a parallel plan the
 * merger would discard. Returns the structured narration object. Aborts
 * after AI_PLAN_TIMEOUT_MS so a slow/hung function rejects instead of
 * hanging the caller indefinitely.
 */
export const generateStudyPlan = async (diagnosticReport, userProfile = {}, previousPlans = [], longitudinalContext = null, deterministicPlan = null) => {
  const payload = {
    diagnosticReport: sanitizeDiagnostic(diagnosticReport),
    userProfile,
    // Previous plan: summary + compact week structure so deltaFromPrevious
    // can compare real plans (the server used to see only the last headline).
    previousPlans: previousPlans.slice(-2).map(p => ({
      summary: p.summary,
      weeks: (p.weeks || []).slice(0, 6).map(w => ({
        weekNumber: w.weekNumber,
        title: w.title,
        focusSkills: (w.focusSkills || []).slice(0, 3),
      })),
    })),
  };
  if (longitudinalContext) {
    payload.longitudinalContext = longitudinalContext;
  }
  if (deterministicPlan?.weeks?.length) {
    // The signal-aware Do-This-First pick — the server marks THIS activity in
    // the prompt so nextActionReason narrates the CTA it's attached to.
    if (deterministicPlan.nextAction?.title) {
      payload.nextActionTitle = deterministicPlan.nextAction.title;
    }
    payload.deterministicWeeks = deterministicPlan.weeks.map(w => ({
      weekNumber: w.weekNumber,
      focusSkills: (w.focusSkills || []).slice(0, 3),
      activities: (w.activities || []).slice(0, 10).map(a => ({
        type: a.type,
        title: a.title,
        skillName: a.skillName || null,
      })),
    }));
  }

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), AI_PLAN_TIMEOUT_MS);
  let response;
  try {
    response = await authFetch(STUDY_PLAN_URL, {
      method: 'POST',
      body: JSON.stringify(payload),
      signal: controller.signal,
    });
  } catch (err) {
    if (err.name === 'AbortError') throw new Error('Study plan generation timed out');
    throw err;
  } finally {
    clearTimeout(timer);
  }

  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    throw new Error(err.error || `Study plan generation failed (${response.status})`);
  }

  const { plan, generatedAt, model } = await response.json();
  return { plan, generatedAt, model };
};

export function sanitizeDiagnostic(report) {
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
        // Blank-excluded accuracy + sample-size honesty tier (evidence rework)
        contentAccuracy: s.contentAccuracy, evidenceLevel: s.evidenceLevel,
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
    // The prompt's "## Stamina" section keyed on stamina.hasData was dead for
    // months — this sanitizer never included the field.
    stamina: report.stamina?.hasData ? {
      hasData: true,
      rating: report.stamina.rating,
      staminaScore: report.stamina.staminaScore,
      dropoff: report.stamina.dropoff,
      message: report.stamina.message,
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
