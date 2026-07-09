/**
 * Choice-misconception parser.
 *
 * Bank explanations already carry per-choice trap analysis authored by a human
 * (e.g. `* Choice A ($120$): steps back $5$ months instead of $4$.`) and a
 * `**Common Mistakes:**` paragraph for fill-ins. Frontier models reliably FAIL
 * to infer a misconception from a wrong answer but coach well when it is stated
 * explicitly (GuideEval). This pure parser lifts those stated reasons out of the
 * markdown so the tutor can be handed the student's exact mistake instead of
 * being asked to guess it.
 */

// Anchor on each "Choice <LETTER> ...: " lead-in. `[^:\n]*` swallows an optional
// parenthetical value (which never contains a colon) up to the colon, so both
// `* Choice A ($75$): reason` bullets and inline `Choice A (...): reason` match.
// "**Choice B is correct.**" has no colon before its newline, so it is skipped.
const CHOICE_ANCHOR = /Choice\s+([A-Z])\b[^:\n]*:[ \t]*/g;

/**
 * Parse per-choice misconception reasons out of an explanation's markdown.
 * Handles both the bulleted "Why the wrong answers are tempting" list and inline
 * "Choice A (...): reason" variants, plus the fill-in "Common Mistakes" paragraph
 * (returned under the `_common` key). LaTeX in the reasons is kept intact.
 * Returns {} for anything non-string or unparseable — never throws.
 *
 * @param {string} explanationMarkdown - a bank item's `explanation` field
 * @returns {Object<string,string>} { A: reason, B: reason, ..., _common?: text }
 */
export const extractChoiceMisconceptions = (explanationMarkdown) => {
  if (typeof explanationMarkdown !== 'string' || explanationMarkdown.length === 0) {
    return {};
  }
  const md = explanationMarkdown;
  const out = {};

  // Collect every choice anchor with the index where its reason text starts.
  const anchors = [];
  let m;
  CHOICE_ANCHOR.lastIndex = 0;
  while ((m = CHOICE_ANCHOR.exec(md)) !== null) {
    anchors.push({ id: m[1], start: m.index, reasonStart: CHOICE_ANCHOR.lastIndex });
    // Guard against a pathological zero-width match looping forever.
    if (CHOICE_ANCHOR.lastIndex === m.index) CHOICE_ANCHOR.lastIndex++;
  }

  anchors.forEach((a, i) => {
    const hardEnd = i + 1 < anchors.length ? anchors[i + 1].start : md.length;
    let reason = md.slice(a.reasonStart, hardEnd);
    // A reason ends at the first newline or the next bold header (e.g.
    // "**Test Day Takeaway:**"), whichever comes first.
    const cut = reason.search(/\n|\*\*/);
    if (cut >= 0) reason = reason.slice(0, cut);
    reason = reason.trim();
    // First-wins: keep the first stated reason if a letter somehow repeats.
    if (reason && !out[a.id]) out[a.id] = reason;
  });

  // Fill-in items list their traps in a single "Common Mistakes:" paragraph.
  const cm = md.match(/Common Mistakes:\*\*[ \t]*([\s\S]*?)(?:\n\n|\n?\*\*|$)/);
  if (cm && cm[1] && cm[1].trim()) out._common = cm[1].trim();

  return out;
};
