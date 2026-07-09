/**
 * tutorEngagement — pure selectors that drive the tutor chat's engagement
 * surfaces: the personalized welcome, trap-aware starter chip, and the
 * contextual follow-up prompts shown under each assistant reply.
 *
 * All functions are pure reads over the practiceContext object the practice
 * shells pass to AiTutorChat. They lean on the answer key's parsed per-choice
 * misconceptions (see selectors/choiceMisconceptions.js) so the chips can ask
 * about the student's ACTUAL slip instead of a generic "why was I wrong".
 */
import { extractChoiceMisconceptions } from './choiceMisconceptions';

/**
 * The student's parsed trap for the CURRENT wrong answer, from the bank's
 * answer-key analysis. Null unless the answer is revealed, recorded wrong,
 * and the explanation carries a parseable reason for that specific choice
 * (or a Common Mistakes paragraph for fill-ins).
 * @param {Object} practiceContext shell-provided context (explanation, userAnswer, ...)
 * @returns {{choiceId: string|null, reason: string}|null}
 */
export const getStudentMisconception = (practiceContext) => {
  if (!practiceContext?.answerRevealed) return null;
  if (practiceContext.isCorrect !== false) return null;
  try {
    const parsed = extractChoiceMisconceptions(practiceContext.explanation || '');
    const key = practiceContext.userAnswer;
    if (key != null && parsed[key]) {
      return { choiceId: String(key), reason: parsed[key] };
    }
    const isFillin = !practiceContext.choices || practiceContext.choices.length === 0;
    if (isFillin && parsed._common) {
      return { choiceId: null, reason: parsed._common };
    }
  } catch {
    // Unparseable explanation — callers fall back to generic copy.
  }
  return null;
};

/**
 * Contextual follow-up prompts for the row under the latest assistant reply.
 * Adapts to the answer state: wrong answers lead with the trap (when the
 * answer key names it), correct answers upgrade toward speed and pattern
 * recognition, unrevealed questions stay in hint territory.
 * @param {Object|null} practiceContext shell-provided context, or null
 * @param {boolean} isPracticeQuestion true when a practice item is active
 * @returns {string[]} at most 3 de-duplicated prompt strings
 */
export const buildFollowUpPrompts = (practiceContext, isPracticeQuestion) => {
  const prompts = [];
  if (isPracticeQuestion && practiceContext) {
    const revealed = practiceContext.answerRevealed;
    const similar = practiceContext.section === 'rw'
      ? 'Show me a similar question'
      : 'Give me a similar problem';
    if (revealed && practiceContext.isCorrect === false) {
      // Trap-aware loop: the parsed misconception makes "avoid the trap" a
      // question the model answers with the student's ACTUAL slip.
      if (getStudentMisconception(practiceContext)) {
        prompts.push('How do I avoid that trap next time?');
      }
      const letter = practiceContext.selectedAnswer
        ? String(practiceContext.selectedAnswer).trim().charAt(0)
        : '';
      prompts.push(/^[A-D]$/.test(letter) ? `Why was ${letter} wrong?` : 'Why was my answer wrong?');
      prompts.push(similar, 'Explain that a different way');
    } else if (revealed && practiceContext.isCorrect === true) {
      // They got it — upgrade toward speed and transfer, not re-explanation.
      prompts.push('Was there a faster way?', "What's the pattern to remember?", similar);
    } else {
      prompts.push('Explain that a different way', similar);
      if (!revealed) prompts.push('Can you give me a hint?');
    }
  } else {
    prompts.push('Explain that a different way', 'Can you give an example?');
  }
  return [...new Set(prompts)].slice(0, 3);
};

/**
 * Personalized empty-state welcome for a revealed WRONG answer whose trap the
 * answer key names. Null means "use the existing generic copy". The reason
 * text itself is deliberately NOT shown here (it can carry LaTeX the plain
 * welcome card cannot typeset) — the hook sends the student into chat, where
 * the model states the slip with proper math rendering.
 * @param {Object|null} practiceContext shell-provided context, or null
 * @returns {{title: string, body: string}|null}
 */
export const buildTrapWelcome = (practiceContext) => {
  const misconception = getStudentMisconception(practiceContext);
  if (!misconception) return null;
  const letter = misconception.choiceId ? String(misconception.choiceId).trim().charAt(0) : '';
  const picked = /^[A-D]$/.test(letter) ? `You picked ${letter} — and` : 'That miss is a known trap —';
  return {
    title: "Let's fix that one",
    body: `${picked} I know the exact trap behind it. Ask me anything, or start below.`,
  };
};
