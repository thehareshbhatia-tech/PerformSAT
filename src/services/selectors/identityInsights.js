/**
 * identityInsights.js — "How you test" facts mined from signals the plan
 * already carries but never showed anyone.
 *
 * hybridStudyPlanService grafts groundTruth diagnosis fields onto the
 * persisted plan (eliminationEffectiveness, staminaInsight,
 * calculatorDependency) — until the 2026-06 personalization overhaul they
 * were written to Firestore and rendered nowhere. These are the most
 * "this app knows ME" facts the product owns: how the student changes
 * answers, how they fade late in a module, how they lean on the calculator.
 *
 * Every insight is significance-gated: thin or degenerate data renders
 * NOTHING rather than filler. An empty array means hide the section.
 */

/**
 * Build up to three identity insights from a persisted study plan.
 *
 * @param {object|null|undefined} studyPlan — the merged plan artifact
 * @returns {Array<{ key: string, stat: string, label: string, text: string }>}
 */
export function getIdentityInsights(studyPlan) {
  if (!studyPlan || typeof studyPlan !== 'object') return [];
  const out = [];

  // ── Answer-change behavior ────────────────────────────────────────────
  // Needs at least 3 changes to say anything about instinct vs. revision.
  const elim = studyPlan.eliminationEffectiveness;
  if (elim && typeof elim.totalChanges === 'number' && elim.totalChanges >= 3) {
    const toWrong = elim.changedToWrong || 0;
    const toCorrect = elim.changedToCorrect || 0;
    if (toWrong > toCorrect) {
      out.push({
        key: 'answer-changes',
        stat: `${toWrong} of ${elim.totalChanges}`,
        label: 'answer changes went right-to-wrong',
        text: 'Your first instinct is usually right. Change an answer only when you can name the exact mistake.',
      });
    } else if (toCorrect > toWrong) {
      out.push({
        key: 'answer-changes',
        stat: `${toCorrect} of ${elim.totalChanges}`,
        label: 'answer changes fixed a mistake',
        text: 'Your second look is reliable — keep budgeting time to revisit flagged questions.',
      });
    }
    // toWrong === toCorrect says nothing actionable; render nothing.
  }

  // ── Stamina / late-module fade ────────────────────────────────────────
  // A dropoff under 15% is normal noise; only a real fade earns a card.
  const stamina = studyPlan.staminaInsight;
  if (stamina && typeof stamina.dropoff === 'number' && stamina.dropoff >= 15) {
    out.push({
      key: 'stamina',
      stat: `-${Math.round(stamina.dropoff)}%`,
      label: 'accuracy from module start to end',
      text: 'Fatigue takes these points, not content. Full-length timed sections build the endurance back.',
    });
  }

  // ── Calculator dependency ─────────────────────────────────────────────
  // Only meaningful when heavy use includes easy questions.
  const calc = studyPlan.calculatorDependency;
  if (
    calc &&
    typeof calc.usagePercent === 'number' &&
    calc.usagePercent >= 60 &&
    (calc.easyQuestionsWithCalculator || 0) >= 3
  ) {
    out.push({
      key: 'calculator',
      stat: `${calc.usagePercent}%`,
      label: 'of questions used the calculator',
      text: `${calc.easyQuestionsWithCalculator} were easy ones — doing those in your head is free speed.`,
    });
  }

  return out.slice(0, 3);
}

/**
 * Summarize how often the prediction engine has called the student's
 * struggle areas before a test — the "trust this plan" evidence.
 *
 * Returns null unless at least one resolved prediction with accuracy
 * data exists AND at least one was a hit (a 0-for-N record would only
 * undermine the plan, and N=0 says nothing).
 *
 * @param {Array|null|undefined} predictionLog — /progress predictionLog entries
 * @returns {{ hits: number, total: number } | null}
 */
export function getPredictionTrust(predictionLog) {
  if (!Array.isArray(predictionLog)) return null;
  const validated = predictionLog.filter(
    p => p && p.resolved && p.accuracy && typeof p.accuracy.struggleSkillsHit === 'number'
  );
  if (validated.length === 0) return null;
  const hits = validated.filter(p => p.accuracy.struggleSkillsHit >= 1).length;
  if (hits === 0) return null;
  return { hits, total: validated.length };
}
