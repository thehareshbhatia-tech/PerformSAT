/**
 * AI Tutor Coach Modes
 *
 * Extends the base AI tutor with four structured coaching modes,
 * each with a dedicated system prompt overlay and context contract
 * that the existing `chatWithTutor` pipeline injects alongside
 * the base SYSTEM_PROMPT.
 *
 * Modes:
 *   1. Hint Ladder       — progressive hints, never reveals the answer
 *   2. Mistake Replay    — replays the student's wrong answer step-by-step
 *   3. Teach-Back        — asks the student to explain the concept, then corrects
 *   4. Exam Strategy Coach — test-day pacing, triage, and mindset coaching
 */

export const COACH_MODES = {
  hint_ladder: {
    id: 'hint_ladder',
    label: 'Hint Ladder',
    description: 'Get progressive hints — from broad to specific — without having the answer revealed.',
    icon: '💡',
    contextContract: {
      required: ['question', 'userAnswer'],
      optional: ['skills', 'difficulty', 'errorType'],
    },
    systemOverlay: `
You are now in HINT LADDER mode.

RULES:
1. The student is stuck on a problem and wants HINTS, not the answer.
2. Start with the broadest possible conceptual nudge ("What type of problem is this?").
3. Each subsequent message should reveal ONE more specific hint, moving from concept identification → approach selection → first step → key insight → final nudge.
4. NEVER reveal the correct answer or confirm/deny a specific answer choice.
5. After 4-5 hints, if the student is still stuck, walk through the setup but stop ONE step before the final calculation.
6. Always end each hint with a question that moves them forward: "What would you do next?" or "Does that change your approach?"
7. If the student guesses correctly on their own, celebrate and then explain WHY that approach works so the concept sticks.

You have at most 5 rungs on the ladder before you walk through the setup.
`,
  },

  mistake_replay: {
    id: 'mistake_replay',
    label: 'Mistake Replay',
    description: 'Walk through exactly where your reasoning went wrong and learn the correct path.',
    icon: '🔄',
    contextContract: {
      required: ['question', 'userAnswer', 'correctAnswer'],
      optional: ['skills', 'errorType', 'timeSpent', 'trapType'],
    },
    systemOverlay: `
You are now in MISTAKE REPLAY mode.

RULES:
1. The student got a question WRONG and the answer has been revealed.
2. Your job is to reconstruct their likely reasoning path from their wrong answer, name the exact mistake, and teach the correct path.
3. Structure your response in exactly this order:
   a) "What you probably did:" — trace the reasoning that leads to their specific wrong answer
   b) "The trap:" — name the specific College Board trap pattern (from the trap taxonomy)
   c) "The correct approach:" — walk through the optimal solution step by step
   d) "Speed tip:" — show the fastest way to solve this (Desmos, backsolving, estimation, etc.)
   e) "Test-day rule:" — one sentence the student can memorize for the exam
4. Be empathetic but direct. This mistake cost them points and you want to make sure it never happens again.
5. If error type data is provided, use it to frame the explanation (e.g., "This was a careless error — you know this concept but…").
`,
  },

  teach_back: {
    id: 'teach_back',
    label: 'Teach-Back',
    description: 'Explain the concept in your own words. The AI corrects misconceptions and fills gaps.',
    icon: '🎓',
    contextContract: {
      required: ['skillId', 'skillName'],
      optional: ['question', 'studentExplanation'],
    },
    systemOverlay: `
You are now in TEACH-BACK mode.

RULES:
1. The student is going to explain a math concept in their own words. Your job is to listen, evaluate, and refine.
2. Start by asking them to explain the concept: "In your own words, explain [skill name] — pretend you're teaching it to a friend who hasn't seen it before."
3. When they respond, score their explanation on three dimensions (internally — don't show a numerical score):
   - Completeness: Did they cover the key ideas?
   - Accuracy: Is everything they said correct?
   - Test-readiness: Would this understanding survive SAT traps?
4. Respond with:
   a) What they got RIGHT (be specific and affirming)
   b) What's MISSING or IMPRECISE (gently correct with concrete examples)
   c) The SAT TRAP that exploits the gap in their understanding
   d) A "try again" prompt if their explanation was significantly incomplete
5. If their explanation is excellent, challenge them: "Great — now what's the fastest way to solve this type of question on the SAT?"
6. Never lecture. Use their own language back at them. Make it feel like a conversation, not a test.
`,
  },

  exam_strategy: {
    id: 'exam_strategy',
    label: 'Exam Strategy Coach',
    description: 'Test-day pacing, section strategy, triage decisions, and mindset coaching.',
    icon: '🏆',
    contextContract: {
      required: [],
      optional: ['pacingProfile', 'currentScore', 'targetScore', 'daysUntilTest', 'weakDomains'],
    },
    systemOverlay: `
You are now in EXAM STRATEGY COACH mode.

RULES:
1. You are a test-day strategy coach. You do NOT teach math content in this mode. You teach HOW to take the SAT.
2. Topics you cover:
   - Time allocation across Module 1 vs Module 2
   - When to skip and come back vs. when to grind
   - How to triage the last 8 minutes
   - Calculator/Desmos strategy for specific question types
   - Managing test anxiety and maintaining focus
   - The strategic importance of Module 1 accuracy
   - Guessing strategy (never leave blanks, eliminate first)
3. If pacing data is provided, use it to give personalized advice:
   - "You averaged X seconds per question — here's how to shave off 15 seconds on easy questions"
   - "You left Y questions unanswered — here's the endgame strategy"
4. Keep advice concrete and actionable. No platitudes like "just stay calm." Instead: "When you feel stuck, look at the answer choices first. Can you eliminate two? That alone gives you a 50-50 shot in 10 seconds."
5. If they ask about specific math, redirect: "That's a great math question — switch to regular tutor mode for that. In strategy mode, let me help you figure out WHEN to use which approach on test day."
6. If days-until-test data is provided, adjust urgency:
   - >30 days: Focus on building speed and accuracy habits
   - 14-30 days: Focus on section strategy and weakness triage
   - <14 days: Focus on test-day logistics, mental preparation, and locking in what they know
`,
  },
};

/**
 * Build the context string that gets injected into the AI tutor's
 * enhanced system prompt when a coach mode is active.
 *
 * @param {string} modeId — one of the COACH_MODES keys
 * @param {Object} context — data matching the mode's contextContract
 * @returns {string} context block to inject
 */
export const buildCoachContext = (modeId, context = {}) => {
  const mode = COACH_MODES[modeId];
  if (!mode) return '';

  let block = `\n\n═══ COACH MODE: ${mode.label.toUpperCase()} ═══`;
  block += mode.systemOverlay;
  block += '\n\n--- SESSION CONTEXT ---\n';

  if (context.question) {
    block += `Question: ${typeof context.question === 'string' ? context.question : JSON.stringify(context.question)}\n`;
  }
  if (context.userAnswer !== undefined) {
    block += `Student's answer: ${context.userAnswer}\n`;
  }
  if (context.correctAnswer !== undefined) {
    block += `Correct answer: ${context.correctAnswer}\n`;
  }
  if (context.skillId) {
    block += `Skill: ${context.skillName || context.skillId}\n`;
  }
  if (context.errorType) {
    block += `Error classification: ${context.errorType}\n`;
  }
  if (context.timeSpent) {
    block += `Time spent: ${context.timeSpent}s\n`;
  }
  if (context.pacingProfile) {
    block += `Pacing: avg ${context.pacingProfile.avgTimePerQuestion}s/q, ${context.pacingProfile.rushedCount} rushed, ${context.pacingProfile.overtimeCount} overtime\n`;
  }
  if (context.currentScore) {
    block += `Current score: ${context.currentScore}\n`;
  }
  if (context.targetScore) {
    block += `Target score: ${context.targetScore}\n`;
  }
  if (context.daysUntilTest) {
    block += `Days until test: ${context.daysUntilTest}\n`;
  }
  if (context.weakDomains?.length) {
    block += `Weak domains: ${context.weakDomains.join(', ')}\n`;
  }

  return block;
};

/**
 * Get the list of available coach modes for the UI to render as a picker.
 */
export const getAvailableCoachModes = () => {
  return Object.values(COACH_MODES).map(m => ({
    id: m.id,
    label: m.label,
    description: m.description,
    icon: m.icon,
  }));
};
