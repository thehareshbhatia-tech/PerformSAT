/**
 * finishMiniDiagnostic — turn a completed 24-question check-in into a real
 * starter study plan using the SAME pipeline a full practice test uses.
 *
 * No parallel diagnosis system: we build a synthetic 2-module test object,
 * run the real runDiagnostic, the real buildGroundTruthDiagnosis, the real
 * generateStudyPlan, and persist through the real artifact path. The first
 * full practice test then supersedes this plan through the existing
 * previousPlan/computePlanDelta machinery with zero new code.
 *
 * BUNDLE WARNING: this module statically imports studyPlanGenerator and
 * hybridStudyPlanService (both bundle-guard-forbidden in the main chunk).
 * It must only ever be imported from the lazy-loaded MiniDiagnosticShell
 * chunk — never from App.jsx or any other main-chunk module. Same pattern
 * as PracticeTest.jsx (also a lazy chunk with these imports).
 */
import { runDiagnostic, getQuestionSkills } from '../diagnosticEngine';
import { isAnswerCorrect } from '../scoring';
import { buildPlanProfile } from '../studySchedule';
import { generateStudyPlan } from '../studyPlanGenerator';
import { persistDeterministicArtifact } from '../hybridStudyPlanService';
import {
  buildGroundTruthDiagnosis,
  enrichPlanWithGroundTruth,
  groundTruthBanksReady,
} from '../groundTruth';
import { recordSkillAttemptsBatch } from '../skillService';
import { computeScoreBand } from './scoreBand';
import { logError, logInfo } from '../../utils/log';

export const MINI_DIAGNOSTIC_TEST_ID = 'mini-diagnostic-v1';

/** Plans generated here carry this marker so dashboards can frame them as a
 *  starter plan ("take a full test to sharpen it") until a real test lands. */
export const MINI_DIAGNOSTIC_PLAN_SOURCE = 'mini-diagnostic';

/** How long a finish-pipeline Firestore write may run before we declare it failed. */
const WRITE_TIMEOUT_MS = 15000;

/**
 * Races a promise against a rejection timer — same load-bearing pattern (and
 * timeout/error) as useProgress's private withTimeout: with the Firestore web
 * SDK's default memory persistence, writes HANG (stay pending forever) on
 * network loss instead of rejecting. Without this, a student finishing on
 * flaky wifi sits on "Building your starter plan" indefinitely; a rejection
 * lands on the shell's error screen, whose "Try again" re-runs the finish.
 * Exported for tests only.
 *
 * @param {Promise} promise - The write promise to race
 * @param {number} [ms=WRITE_TIMEOUT_MS] - Timeout in milliseconds
 * @returns {Promise} Rejects with Error('save-timeout') when the timer wins
 */
export const withTimeout = (promise, ms = WRITE_TIMEOUT_MS) => {
  let timer;
  return Promise.race([
    promise,
    new Promise((_, reject) => {
      timer = setTimeout(() => reject(new Error('save-timeout')), ms);
    }),
  ]).finally(() => clearTimeout(timer));
};

/**
 * Build the synthetic test object the diagnostic engine consumes. Module
 * order matches the official section order (R&W first), and the section
 * names match what PracticeTest feeds runDiagnostic for real tests.
 */
export function buildSyntheticTest(rwQuestions, mathQuestions) {
  return {
    id: MINI_DIAGNOSTIC_TEST_ID,
    name: 'Quick Check-In',
    isMiniDiagnostic: true,
    modules: [
      { section: 'reading-writing', name: 'Reading & Writing', questions: rwQuestions },
      { section: 'math', name: 'Math', questions: mathQuestions },
    ],
  };
}

/**
 * Mirror of PracticeTest's per-question questionDetails mapping, so the
 * error-taxonomy classifier sees the identical telemetry shape it was
 * built against.
 */
function buildQuestionDetails(test, answers, telemetry, eliminatedChoices) {
  const questionDetails = {};
  test.modules.forEach((mod, modIdx) => {
    mod.questions.forEach((q, qIdx) => {
      const key = `${modIdx}-${qIdx}`;
      const telem = telemetry[key] || {};
      questionDetails[key] = {
        timeSpent: Math.round((telem.timeSpent || 0) * 10) / 10,
        visits: telem.visits || 0,
        answerChanges: (telem.answerChanges || []).length,
        answerChangeEvents: (telem.answerChanges || []).map(ev => ({
          from: ev.from, to: ev.to, timestamp: ev.timestamp,
        })),
        usedCalculator: telem.usedCalculator || false,
        markedForReview: telem.markedForReview || false,
        eliminatedChoices: eliminatedChoices[key] || [],
        isCorrect: isAnswerCorrect(q, answers[key]),
        difficulty: q.difficulty || null,
        skills: getQuestionSkills(q),
      };
    });
  });
  return questionDetails;
}

/** Per-domain correct/total fold for the lean miniDiagnostic record. */
function buildDomainSummary(questions, answers, modIdx) {
  const byDomain = {};
  questions.forEach((q, qIdx) => {
    const domain = q.domain || 'unknown';
    if (!byDomain[domain]) byDomain[domain] = { correct: 0, total: 0 };
    byDomain[domain].total += 1;
    if (isAnswerCorrect(q, answers[`${modIdx}-${qIdx}`])) byDomain[domain].correct += 1;
  });
  return byDomain;
}

/**
 * Per-domain fold across EVERY module of one section — the multi-module
 * (Diagnostic v2 runner) equivalent of buildDomainSummary. answers stay keyed
 * by the test's own `${modIdx}-${qIdx}` space.
 */
function buildSectionDomainSummary(test, answers, section) {
  const byDomain = {};
  test.modules.forEach((mod, modIdx) => {
    if ((mod.section || null) !== section) return;
    mod.questions.forEach((q, qIdx) => {
      const domain = q.domain || 'unknown';
      if (!byDomain[domain]) byDomain[domain] = { correct: 0, total: 0 };
      byDomain[domain].total += 1;
      if (isAnswerCorrect(q, answers[`${modIdx}-${qIdx}`])) byDomain[domain].correct += 1;
    });
  });
  return byDomain;
}

/**
 * Run the full diagnose-and-plan pipeline on a completed mini-diagnostic.
 *
 * Persists the deterministic plan artifact (artifact path handles the
 * currentStudyPlanArtifactId pointer) and seeds skillProgress with the 24
 * answers, but does NOT touch practiceTestResults (a 24-item check-in must
 * never enter score history / projections) and does NOT write the
 * progress.miniDiagnostic record or users.onboardingCompletedAt — the
 * caller owns those via useProgress/useAuth so optimistic state stays
 * coherent.
 *
 * Diagnostic v2 (runner-hosted) callers pass `effectiveTest` — the full
 * multi-module test object the student actually saw (post-M2-routing), with
 * `answers` keyed to ITS `${modIdx}-${qIdx}` space — plus `routes` (the M2
 * variants actually served, feeding the route-aware band) and `navigation`
 * (the runner's real navigation classification). The v1 shell keeps calling
 * with rwQuestions/mathQuestions and is byte-identical.
 *
 * @returns {Promise<{plan, diagReport, groundTruth, scoreBand, miniDiagnosticRecord}>}
 */
export async function finishMiniDiagnostic({
  user,
  rwQuestions,
  mathQuestions,
  answers,
  telemetry = {},
  eliminatedChoices = {},
  attemptId,
  answeredQuestionIds = [],
  completedLessons = {},
  practiceProgress = {},
  effectiveTest = null,
  routes = null,
  navigation = null,
  scoreAnchor = null,
}) {
  if (!user?.uid) throw new Error('finishMiniDiagnostic: user.uid required');

  const test = effectiveTest || buildSyntheticTest(rwQuestions, mathQuestions);
  const questionDetails = buildQuestionDetails(test, answers, telemetry, eliminatedChoices);
  const telemetryValues = Object.values(telemetry);
  const diagnosticData = {
    questionDetails,
    navigationPattern: navigation?.navigationPattern || 'linear',
    totalNavigationEvents: navigation?.totalNavigationEvents || 0,
    // Pacing evidence from the timed runner (v2): per-module clock remainders
    // feed diagnosticEngine's time analysis — absent on v1 shell sittings.
    ...(navigation?.moduleTimeRemaining ? { moduleTimeRemaining: navigation.moduleTimeRemaining } : {}),
    questionsVisitedMultipleTimes: telemetryValues.filter(t => (t.visits || 0) > 1).length,
    calculatorUsageCount: telemetryValues.filter(t => t.usedCalculator).length,
    markedForReviewCount: telemetryValues.filter(t => t.markedForReview).length,
    // Route metadata: scoreTest/runDiagnostic read these so an easy-routed
    // section grades on the easy scale column (same contract as real tests).
    ...(routes?.math ? { mathRoute: routes.math } : {}),
    ...(routes?.rw ? { rwRoute: routes.rw } : {}),
  };

  // Real engine, synthetic test. skillProgress {} + previousTests {} — this
  // is the student's first signal, the in-test seed handles classification.
  const diagReport = runDiagnostic(
    test, answers, diagnosticData,
    {},
    { targetScore: user.targetScore, currentScore: user.currentScore, testDate: user.testDate },
    {},
  );

  const groundTruth = buildGroundTruthDiagnosis(diagReport, telemetry);

  // Honest coarse band (never a point estimate) for the results screen —
  // computed before plan generation so the plan's score-gap framing ("N
  // points to your goal") agrees with the band the student just saw. The
  // engine's raw scaled score for a 24-item synthetic test undershoots the
  // calibrated band, so the band midpoint becomes the plan's currentScore.
  const answersById = {};
  test.modules.forEach((mod, modIdx) => {
    mod.questions.forEach((q, qIdx) => {
      const a = answers[`${modIdx}-${qIdx}`];
      if (a !== undefined && a !== null && a !== '') answersById[q.id] = a;
    });
  });
  const sectionItems = (section) => test.modules
    .filter((m) => (m.section || null) === section)
    .flatMap((m) => m.questions);
  const rwItems = effectiveTest ? sectionItems('reading-writing') : rwQuestions;
  const mathItems = effectiveTest ? sectionItems('math') : mathQuestions;
  const totalServed = rwItems.length + mathItems.length;
  const answeredCount = Object.values(answers)
    .filter((a) => a !== undefined && a !== null && a !== '').length;
  const scoreBand = computeScoreBand({
    rwItems,
    mathItems,
    answersById,
    rwRoute: routes?.rw || 'hard',
    mathRoute: routes?.math || 'hard',
    // Widen the band on thin sittings (v2 only — v1 keeps its fixed margins).
    lowEvidence: !!effectiveTest && totalServed > 0 && answeredCount / totalServed < 0.8,
  });
  const bandMidpoint = Math.round((scoreBand.low + scoreBand.high) / 2 / 10) * 10;
  // A check-in's band over-samples the plan's focus skills, so its center
  // reads LOW — every score surface refuses it (scoreBandFocusWeighted), and
  // the plan generator must too: fed raw, it becomes arc.startScore and the
  // student's "Estimated now" drops after two weeks of studying. Anchor the
  // regenerated plan on the last trustworthy midpoint the caller passed; the
  // fresh center only anchors when no trusted prior exists.
  const isCheckinVariant = (test.diagnosticVariant || 'full') === 'checkin';
  const planScaled = (isCheckinVariant && Number.isFinite(scoreAnchor)) ? scoreAnchor : bandMidpoint;
  const planDiagnostic = {
    ...diagReport,
    score: { ...(diagReport.score || {}), scaled: planScaled },
  };

  const detPlan = generateStudyPlan(
    planDiagnostic,
    buildPlanProfile(user),
    completedLessons,
    practiceProgress,
    null, // no previous plan — this IS the starter
    null,
    answeredQuestionIds,
  );

  // The shell can finish seconds after chunk load — make sure the banks
  // behind getTargetedWeaknessSet are hydrated before enriching.
  await groundTruthBanksReady;
  const plan = enrichPlanWithGroundTruth({ ...detPlan }, groundTruth);
  if (diagReport.difficultyAnalysis) {
    plan.difficultyAnalysis = diagReport.difficultyAnalysis;
  }
  plan.planSource = MINI_DIAGNOSTIC_PLAN_SOURCE;
  plan.basedOnTest = MINI_DIAGNOSTIC_TEST_ID;

  const miniDiagnosticRecord = {
    attemptId: attemptId || null,
    completedAt: new Date().toISOString(),
    scoreBand,
    domains: effectiveTest
      ? {
          rw: buildSectionDomainSummary(test, answers, 'reading-writing'),
          math: buildSectionDomainSummary(test, answers, 'math'),
        }
      : {
          rw: buildDomainSummary(rwQuestions, answers, 0),
          math: buildDomainSummary(mathQuestions, answers, 1),
        },
    itemIds: [...rwItems.map(q => q.id), ...mathItems.map(q => q.id)].filter(Boolean),
    answeredCount: Object.keys(answers).length,
    totalCount: totalServed,
    // v2 provenance: which experience produced this record and what the
    // adaptive routing actually served (null = no routing happened — the
    // check-in ships no Module-2 variants). Absent on v1 shell records.
    ...(effectiveTest ? {
      diagnosticVariant: test.diagnosticVariant || 'full',
      routes: { rw: routes?.rw ?? null, math: routes?.math ?? null },
      // The check-in deliberately over-samples the plan's focus skills, so
      // its band is NOT a representative score — the save path carries the
      // last full-variant band forward instead of overwriting the baseline.
      scoreBandFocusWeighted: (test.diagnosticVariant || 'full') === 'checkin',
    } : {}),
  };

  // Persist the artifact (sets the currentStudyPlanArtifactId pointer).
  // withTimeout covers every write inside (artifact addDoc + the plan-mirror
  // pointer/preview write on the progress doc) so an offline hang rejects
  // into the shell's error screen instead of stranding "finishing" forever.
  await withTimeout(persistDeterministicArtifact(user.uid, plan, {
    attemptId: attemptId || null,
    sourceTestId: MINI_DIAGNOSTIC_TEST_ID,
  }));
  logInfo('miniDiagnostic', 'starter-plan artifact persisted');

  // Seed skillProgress with the session's evidence (one read + one write).
  // Non-blocking: a failed seed degrades mastery freshness, not the plan.
  const skillEntries = [];
  test.modules.forEach((mod, modIdx) => {
    mod.questions.forEach((q, qIdx) => {
      const skills = getQuestionSkills(q);
      if (skills.length > 0) {
        skillEntries.push({ skills, correct: isAnswerCorrect(q, answers[`${modIdx}-${qIdx}`]) });
      }
    });
  });
  recordSkillAttemptsBatch(user.uid, skillEntries).catch((err) => {
    logError('miniDiagnostic', 'skillProgress seed failed (non-blocking)', err);
  });

  return { plan, diagReport, groundTruth, scoreBand, miniDiagnosticRecord };
}
