/**
 * Pure parsing for the deterministic math-verification pass (tutorMathCheck).
 * No Firebase or Anthropic SDK imports, so it is unit-testable with node --test
 * (same pattern as stripePolicy.ts / tutorSystemBlocks.ts).
 *
 * The checker is a Khanmigo-style guardrail: a cheap second model reads the AI
 * tutor's reply and the KNOWN correct answer and returns strict JSON saying
 * whether the reply contains a certain math error. This module parses that
 * model output DEFENSIVELY and FAIL-OPEN: any malformed, fenced, or ambiguous
 * output resolves to {ok:true} so a checker hiccup can never block or scare a
 * student. The endpoint mirrors this — every non-auth path returns 200.
 */

/** Result of a math-verification pass. correction is present only when !ok. */
export interface MathCheckResult {
  ok: boolean;
  correction?: string;
}

/**
 * Parse the fact-checker model's raw text into a MathCheckResult. Tolerates
 * surrounding prose and ```json code fences, extracts the first JSON object,
 * and parses it. Returns {ok:false, correction} ONLY when the model clearly
 * said ok:false AND supplied a non-empty correction string; every other
 * outcome — parse failure, garbage, ok non-boolean, or ok:false with no
 * usable correction — fails open to {ok:true}. Never throws.
 * @param {unknown} raw the model's text output (or anything, defensively)
 * @return {MathCheckResult} {ok:true} unless a correction is certain
 */
export function parseMathCheckResult(raw: unknown): MathCheckResult {
  if (typeof raw !== "string") return {ok: true};

  let text = raw.trim();
  // Strip a ```json fence (or a bare ``` fence) if the model wrapped output.
  const fence = text.match(/```(?:json)?\s*([\s\S]*?)```/i);
  if (fence) text = fence[1].trim();

  // Extract the first {...} object, tolerating leading/trailing prose.
  const jsonMatch = text.match(/\{[\s\S]*\}/);
  if (!jsonMatch) return {ok: true};

  let parsed: unknown;
  try {
    parsed = JSON.parse(jsonMatch[0]);
  } catch {
    return {ok: true};
  }

  if (parsed == null || typeof parsed !== "object" || Array.isArray(parsed)) {
    return {ok: true};
  }
  const obj = parsed as Record<string, unknown>;

  // Only a definite ok:false with a usable correction flags an error. Anything
  // else (ok:true, ok missing/non-boolean, or ok:false without a correction)
  // is treated as "no certain error" — fail open.
  if (obj.ok === false) {
    const correction = obj.correction;
    if (typeof correction === "string" && correction.trim().length > 0) {
      return {ok: false, correction: correction.trim()};
    }
    return {ok: true};
  }

  return {ok: true};
}
