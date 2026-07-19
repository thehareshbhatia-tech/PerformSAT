/**
 * groundTruth.js — deterministic ground-truth diagnosis + plan enrichment.
 *
 * Extracted verbatim from PracticeTest.jsx (2026-06-09) so the upcoming
 * mini-diagnostic onboarding flow can share the exact same logic without
 * copy-paste drift. Consumed by PracticeTest.jsx on test completion (both
 * the Phase 1 deterministic plan and the Phase 2 hybrid plan paths).
 *
 * Bundle constraint (see src/__tests__/bundleGuard.test.js): this module
 * must stay statically corpus-free. The two bank routers that
 * enrichPlanWithGroundTruth needs (math + R&W getTargetedWeaknessSet) are
 * therefore hydrated through corpusLoader's memoized dynamic imports at
 * module evaluation time and read synchronously at call time — the same
 * stash-the-namespace pattern App.jsx uses for practiceRoutingRef.
 */

import { loadMathBank, loadRWBank } from '../data/corpusLoader';
import { logWarn } from '../utils/log';

// Hydrated bank namespaces. Kick-off happens at module scope so that by the
// time enrichPlanWithGroundTruth runs (a test or mini-diagnostic completion,
// minutes after this chunk evaluates — and after App.jsx's idle
// preloadCorpus pre-warm), both are resolved. corpusLoader memoizes the
// import promises, so this never double-fetches.
let mathBankNs = null;
let rwBankNs = null;

/**
 * Resolves once both bank namespaces are hydrated. Await this before calling
 * enrichPlanWithGroundTruth from a flow that runs immediately after module
 * load (e.g. the mini-diagnostic onboarding, or unit tests).
 *
 * @returns {Promise<void>}
 */
export const groundTruthBanksReady = Promise.all([
  loadMathBank().then((ns) => { mathBankNs = ns; }),
  loadRWBank().then((ns) => { rwBankNs = ns; }),
]).then(() => {});

const ERROR_TYPE_LABELS = {
  conceptual_gap: 'Conceptual Gap',
  procedural_error: 'Procedural Error',
  trap_susceptibility: 'Trap Answer',
  time_pressure: 'Time Pressure',
  careless_error: 'Careless Mistake',
  unanswered: 'Unanswered',
};

/**
 * Build the deterministic "ground truth" diagnosis from a diagnostic-engine
 * report + raw per-question telemetry. The weaknesses entries are the
 * DRILL-shape contract consumed by getTargetedWeaknessSet and
 * StudyPlanDashboard (see CLAUDE.md "The weakness shape contract").
 *
 * @param {object} diagReport  runDiagnostic() output (skillAnalysis,
 *                             trendAnalysis, answerPatterns, stamina,
 *                             questionAnalysis)
 * @param {object} rawTelemetry  per-question telemetry keyed `modIdx-qIdx`
 *                               ({ usedCalculator, ... })
 * @returns {{strengths: Array, weaknesses: Array, calculatorDependency: object|null,
 *           eliminationEffectiveness: object|null, persistentWeaknesses: Array,
 *           staminaInsight: object|null}}
 */
export function buildGroundTruthDiagnosis(diagReport, rawTelemetry) {
  const { skillAnalysis, trendAnalysis, answerPatterns, stamina } = diagReport;
  const questionAnalysis = diagReport.questionAnalysis || [];

  // Cap the drill-shape list at 8 with section balance: a math-heavy (or
  // R&W-heavy) diagnosis must not crowd the other section out of Focus Areas
  // entirely — each section keeps at most 6 of the 8 slots when both have
  // weaknesses. Order within the cap preserves the engine's severity sort.
  const allWeak = skillAnalysis?.weakSkills || [];
  const cappedWeak = (() => {
    if (allWeak.length <= 8) return allWeak;
    const hasBoth = allWeak.some(s => (s.section || 'math') === 'rw')
      && allWeak.some(s => (s.section || 'math') !== 'rw');
    const perSectionCap = hasBoth ? 6 : 8;
    const counts = { math: 0, rw: 0 };
    const picked = [];
    for (const s of allWeak) {
      if (picked.length >= 8) break;
      const sec = (s.section || 'math') === 'rw' ? 'rw' : 'math';
      if (counts[sec] >= perSectionCap) continue;
      counts[sec] += 1;
      picked.push(s);
    }
    // Backfill if a section ran out before the cap filled.
    for (const s of allWeak) {
      if (picked.length >= 8) break;
      if (!picked.includes(s)) picked.push(s);
    }
    return picked;
  })();

  const weakSkills = cappedWeak.map(s => {
    const errLabel = ERROR_TYPE_LABELS[s.primaryErrorType] || s.primaryErrorType || 'mixed';
    const avgTime = computeAvgTimeForSkill(s.skillId, questionAnalysis);
    // Guard degenerate timing: avg under 5s/q means missing or rapid-click
    // telemetry — "avg 0s/q" in a student-facing sentence reads as broken.
    const timeNote = avgTime >= 5 ? `, avg ${avgTime}s/q` : '';
    const historyNote = s.historicalMastery !== null
      ? `, historical mastery ${s.historicalMastery}%`
      : ', first time tested';
    const trendNote = s.trend === 'improving' ? ' (improving)' : s.trend === 'declining' ? ' (declining)' : '';
    return {
      skillId: s.skillId,
      skill: s.name,
      evidence: `${s.correct}/${s.total} correct, primary error: ${errLabel}${timeNote}${historyNote}${trendNote}`,
      accuracy: s.testAccuracy,
      // Blank-excluded accuracy + sample-size honesty tier (additive fields;
      // legacy weaknesses without them read as before via the ?? fallbacks
      // in consumers).
      contentAccuracy: s.contentAccuracy ?? s.testAccuracy,
      evidenceLevel: s.evidenceLevel || 'suspected',
      errorType: errLabel,
      domain: s.domain,
      modules: s.modules || [],
      sections: s.sections || [],
      // section-tag contract (Day 0 + Day 1-2 of Acely-parity ship list): the
      // diagnostic engine now tags each skill with its test subject — math or
      // rw — based on the canonical R&W skill list. See diagnosticEngine.js
      // RW_SKILL_SET. Fall back to 'math' for legacy/unknown skills (rollback
      // safety per `services/selectors/weaknesses.js`).
      section: s.section || 'math',
      // Drill-routing: distinct SAT Patterns the student missed for this
      // skill. Feeds Tier 1 of getTargetedWeaknessSet. Empty array on
      // legacy plans (analyzeSkills wasn't aggregating this field then),
      // which short-circuits Tier 1 + Tier 2 cleanly.
      missedPatterns: Array.isArray(s.missedPatterns) ? s.missedPatterns : [],
    };
  });

  const strongSkills = (skillAnalysis?.strongSkills || []).slice(0, 5).map(s => {
    const avgTime = computeAvgTimeForSkill(s.skillId, questionAnalysis);
    const timeNote = avgTime >= 5 ? `, avg ${avgTime}s/q` : '';
    const trendNote = s.trend === 'improving' ? ' and still improving' : '';
    return {
      skill: s.name,
      evidence: `${s.correct}/${s.total} correct${timeNote}${trendNote}`,
      accuracy: s.testAccuracy,
      domain: s.domain,
    };
  });

  let calculatorDependency = null;
  if (rawTelemetry && questionAnalysis.length > 0) {
    let calcCount = 0;
    let easyWithCalc = 0;
    Object.entries(rawTelemetry).forEach(([key, telem]) => {
      if (telem?.usedCalculator) {
        calcCount++;
        const qa = questionAnalysis.find(q => q.key === key);
        if (qa?.difficulty === 'easy') easyWithCalc++;
      }
    });
    const pct = Math.round((calcCount / questionAnalysis.length) * 100);
    calculatorDependency = {
      usagePercent: pct,
      easyQuestionsWithCalculator: easyWithCalc,
      insight: pct > 60
        ? `Used calculator on ${pct}% of questions — consider building mental math fluency`
        : pct > 30
        ? `Calculator used on ${pct}% of questions — reasonable usage`
        : `Light calculator usage (${pct}%) — strong mental math`,
    };
  }

  let eliminationEffectiveness = null;
  if (answerPatterns?.answerChanges) {
    const { answerChanges } = answerPatterns;
    if (answerChanges.total > 0) {
      eliminationEffectiveness = {
        totalChanges: answerChanges.total,
        changedToCorrect: answerChanges.changedToCorrect,
        changedToWrong: answerChanges.changedToWrong,
        accuracy: answerChanges.firstInstinctAccuracy,
        insight: answerChanges.advice,
      };
    }
  }

  const persistentWeaknesses = (trendAnalysis?.persistentWeaknesses || []).slice(0, 5).map(pw => ({
    skill: pw.name,
    testsWeak: pw.testCount,
    insight: `Weak across ${pw.testCount} tests — needs focused remediation`,
  }));

  let staminaInsight = null;
  if (stamina?.hasData) {
    staminaInsight = {
      score: stamina.staminaScore,
      rating: stamina.rating,
      dropoff: stamina.dropoff,
      message: stamina.message,
    };
  }

  return { strengths: strongSkills, weaknesses: weakSkills, calculatorDependency, eliminationEffectiveness, persistentWeaknesses, staminaInsight };
}

function computeAvgTimeForSkill(skillId, questionAnalysis) {
  const relevant = (questionAnalysis || []).filter(q =>
    (q.skills || []).includes(skillId)
  );
  if (relevant.length === 0) return 0;
  const total = relevant.reduce((s, q) => s + (q.timeSpent || 0), 0);
  return Math.round(total / relevant.length);
}

/**
 * Copy the ground-truth diagnosis onto a study plan (mutates + returns it)
 * and, when the plan has no targeted question IDs yet, route each weakness
 * to its bank by section and fill targetedQuestionIds/-Meta.
 *
 * @param {object|null} plan  deterministic or hybrid study plan (mutated)
 * @param {object} groundTruth  buildGroundTruthDiagnosis() output
 * @returns {object|null} the same plan, enriched
 */
export function enrichPlanWithGroundTruth(plan, groundTruth) {
  if (!plan) return plan;
  plan.strengths = groundTruth.strengths;
  plan.weaknesses = groundTruth.weaknesses;
  plan.calculatorDependency = groundTruth.calculatorDependency;
  plan.eliminationEffectiveness = groundTruth.eliminationEffectiveness;
  plan.persistentWeaknesses = groundTruth.persistentWeaknesses;
  plan.staminaInsight = groundTruth.staminaInsight;

  if (!plan.targetedQuestionIds || plan.targetedQuestionIds.length === 0) {
    // Bank chunks not hydrated yet (call raced module load — unreachable from
    // PracticeTest, whose completion runs minutes after evaluation). Leave
    // targetedQuestionIds unset so a later enrich pass can fill it.
    if (!mathBankNs || !rwBankNs) {
      logWarn('groundTruth', 'enrichPlanWithGroundTruth called before bank hydration — skipping targeted-question fill');
      return plan;
    }
    const weakSkillPayload = (groundTruth.weaknesses || []).map(w => ({
      skillId: w.skillId || null,
      domain: w.domain,
      section: w.section === 'rw' ? 'rw' : 'math',
      // Carry missedPatterns so both banks' Tier-1 cascade can fire (math SAT
      // patterns, R&W deriveRWPattern slugs); falls through to skill otherwise.
      missedPatterns: Array.isArray(w.missedPatterns) ? w.missedPatterns : undefined,
    })).filter(w => w.skillId);
    if (weakSkillPayload.length > 0) {
      // Route each weakness to its bank by section, then merge. Before this,
      // the math bank was the only source, so R&W focus areas contributed zero
      // questions to the flat assignment (their skill ids resolve to nothing
      // in the math bank).
      const mathWeak = weakSkillPayload.filter(w => w.section === 'math');
      const rwWeak = weakSkillPayload.filter(w => w.section === 'rw');
      const difficultyMix = { easy: 0.3, medium: 0.45, hard: 0.25 };
      const targeted = [
        ...(mathWeak.length > 0 ? mathBankNs.getTargetedWeaknessSet({ weakSkills: mathWeak, count: 15, difficultyMix }) : []),
        ...(rwWeak.length > 0 ? rwBankNs.getTargetedWeaknessSet({ weakSkills: rwWeak, count: 15, difficultyMix }) : []),
      ];
      plan.targetedQuestionIds = targeted.map(q => q.id);
      plan.targetedQuestionMeta = targeted.map(q => ({
        id: q.id,
        domain: q.domain,
        skills: q.skills,
        difficulty: q.difficulty,
      }));
    }
  }
  return plan;
}
