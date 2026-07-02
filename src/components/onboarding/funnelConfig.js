/**
 * Pre-signup onboarding funnel — content + profile mapping.
 *
 * All question/interstitial copy lives here as data so the flow component
 * stays a dumb renderer and the copy is unit-testable (no emoji, option
 * counts, id uniqueness). buildFunnelProfile is the single translation
 * point from quiz answers to users/{uid} profile fields.
 */

export const FUNNEL_VERSION = 1;

/** localStorage key for in-progress funnel state (pre-auth staging). */
export const FUNNEL_STORAGE_KEY = 'seva:onboardingFunnel:v1';

export const DEFAULT_FUNNEL_GOAL = 1400;

/**
 * Question definitions, in flow order. `id` is the answers-object key;
 * option `value`s are stable slugs persisted into onboardingProfile —
 * never rename them once shipped.
 */
export const FUNNEL_QUESTIONS = [
  {
    id: 'timing',
    title: 'When are you taking the SAT?',
    options: [
      { value: 'lt2m', label: 'In the next 2 months' },
      { value: '2to6m', label: '2–6 months from now' },
      { value: 'gt6m', label: 'More than 6 months out' },
      { value: 'undecided', label: "I haven't picked a date yet" },
    ],
  },
  {
    id: 'baseline',
    title: 'Where are you starting from?',
    options: [
      { value: 'sat', label: "I've taken the real SAT" },
      { value: 'psat', label: "I've taken the PSAT" },
      { value: 'practice', label: "I've done practice tests on my own" },
      { value: 'fresh', label: 'Starting completely fresh' },
    ],
  },
  {
    id: 'feeling',
    title: 'Honestly — how do you feel about this test?',
    options: [
      { value: 'confident', label: 'Confident. I just need reps' },
      { value: 'fine', label: 'Mostly fine, a little on edge' },
      { value: 'stressed', label: 'Stressed when I think about it' },
      { value: 'heavy', label: "It's genuinely weighing on me" },
    ],
  },
  {
    id: 'stuckHabit',
    title: 'When a question stumps you, what do you usually do?',
    options: [
      { value: 'wrestle', label: 'Wrestle with it until it clicks' },
      { value: 'explanation', label: 'Read the explanation and move on' },
      { value: 'ask', label: 'Ask a teacher, tutor, or friend' },
      { value: 'skip', label: 'Skip it and hope' },
    ],
  },
  {
    id: 'studyWindow',
    title: 'When would studying realistically happen?',
    options: [
      { value: 'morning', label: 'Before school or in free periods' },
      { value: 'evening', label: 'Evenings, after everything else' },
      { value: 'weekend', label: 'Mostly weekends' },
      { value: 'flexible', label: 'Wherever it fits' },
    ],
  },
  {
    id: 'sessionLength',
    title: 'How long is a real study session for you?',
    options: [
      { value: '15m', label: 'About 15 focused minutes' },
      { value: '30m', label: 'Around half an hour' },
      { value: '60m', label: 'An hour or more' },
      { value: 'varies', label: 'Depends on the day' },
    ],
  },
  {
    id: 'blocker',
    title: 'What gets between you and studying?',
    options: [
      { value: 'procrastinate', label: 'I keep putting it off' },
      { value: 'lost', label: "I don't know where to start" },
      { value: 'busy', label: 'School already takes everything I have' },
      { value: 'plateau', label: "I study, but the score won't move" },
    ],
  },
  {
    id: 'testReaction',
    title: 'How do practice tests usually leave you feeling?',
    options: [
      { value: 'motivated', label: 'Ready to attack my weak spots' },
      { value: 'deflated', label: 'Deflated by the number' },
      { value: 'unsure', label: 'Unsure what to fix first' },
      { value: 'avoid', label: 'I avoid taking them' },
    ],
  },
  {
    id: 'motivation',
    title: 'What would hitting your target actually change?',
    options: [
      { value: 'colleges', label: 'Which colleges I can realistically aim for' },
      { value: 'scholarships', label: 'Scholarship money' },
      { value: 'self', label: 'Proving to myself I can do it' },
      { value: 'pressure', label: 'Less pressure from everyone around me' },
    ],
  },
];

/**
 * Interstitial copy. INT-A's heading adapts to the `feeling` answer;
 * everything else is static. Visuals are rendered by the flow component
 * (keyed on `visual`) — pure CSS/SVG product-truth cards, no testimonials.
 */
export const FUNNEL_INTERSTITIALS = {
  reassure: {
    id: 'reassure',
    visual: 'trajectory',
    headingByFeeling: {
      confident: "Good. Let's turn that into points.",
      fine: "That's a solid place to start from.",
      stressed: 'That feeling is common — and fixable.',
      heavy: 'That feeling is common — and fixable.',
    },
    defaultHeading: 'Wherever you start, the path is the same.',
    body:
      'Score plateaus usually aren’t about effort. They come from studying everything instead of the handful of question types actually costing you points. SEVA finds those, and builds your plan around them.',
    cta: 'Continue',
  },
  rightMinutes: {
    id: 'rightMinutes',
    visual: 'diagnosis',
    heading: "Hours don't raise scores. The right minutes do.",
    body:
      'Twenty minutes on the question types you actually miss beats two unfocused hours on everything else. Your 15-minute check-in pinpoints exactly where your points are hiding.',
    cta: 'Continue',
  },
  neverStuck: {
    id: 'neverStuck',
    visual: 'tutor',
    heading: "Stuck shouldn't be a dead end.",
    body:
      'Every SEVA question ends with a real explanation — why the right answer is right, why each wrong one is tempting — plus a tutor you can ask anything, as many times as it takes.',
    cta: 'Continue',
  },
};

/** Flow order: questions interleaved with interstitials, then goal → path → signup. */
export const FUNNEL_STEPS = [
  { type: 'question', id: 'timing' },
  { type: 'question', id: 'baseline' },
  { type: 'question', id: 'feeling' },
  { type: 'interstitial', id: 'reassure' },
  { type: 'question', id: 'stuckHabit' },
  { type: 'question', id: 'studyWindow' },
  { type: 'question', id: 'sessionLength' },
  { type: 'interstitial', id: 'rightMinutes' },
  { type: 'question', id: 'blocker' },
  { type: 'question', id: 'testReaction' },
  { type: 'interstitial', id: 'neverStuck' },
  { type: 'question', id: 'motivation' },
  { type: 'goal', id: 'goal' },
  { type: 'path', id: 'path' },
  { type: 'signup', id: 'signup' },
];

/**
 * Context line under the goal slider — mirrors the tiers students actually
 * ask about without naming a school list as a promise.
 */
export function goalContextLine(goal) {
  if (goal >= 1500) return 'Competitive for the most selective schools in the country';
  if (goal >= 1400) return 'Strong for highly competitive universities';
  if (goal >= 1300) return 'Above the national average — solid for most flagships';
  if (goal >= 1150) return 'A real, reachable improvement target';
  return 'Every point from here is momentum';
}

/** Snap to the SAT's 10-point grid and clamp to the composite range. */
export function normalizeFunnelGoal(goal) {
  const n = Number(goal);
  if (!Number.isFinite(n)) return DEFAULT_FUNNEL_GOAL;
  return Math.min(1600, Math.max(400, Math.round(n / 10) * 10));
}

/**
 * Translate funnel answers into the users/{uid} profile fields written at
 * signup. Pure — the only bridge between quiz slugs and profile schema.
 *
 * goalScale:'composite' must always accompany targetScore: it is the
 * provenance flag that stops normalizeProfileGoal from re-migrating
 * (doubling) sub-800 goals on the next hydration.
 *
 * @param {Object} answers - {questionId: optionValue} from the funnel
 * @param {number} goal - target score from the goal slider
 * @param {string} [completedAt] - ISO stamp (injectable for tests)
 * @returns {{targetScore:number, goalScale:'composite', hasTakenSAT:boolean, onboardingProfile:Object}}
 */
export function buildFunnelProfile(answers = {}, goal = DEFAULT_FUNNEL_GOAL, completedAt = new Date().toISOString()) {
  const cleanAnswers = {};
  for (const q of FUNNEL_QUESTIONS) {
    const v = answers[q.id];
    if (typeof v === 'string' && q.options.some((o) => o.value === v)) {
      cleanAnswers[q.id] = v;
    }
  }
  return {
    targetScore: normalizeFunnelGoal(goal),
    goalScale: 'composite',
    // hasTakenSAT keeps the legacy signup-doc semantics: a real SAT sitting,
    // not practice exposure. The PSAT/practice detail lives in the answers.
    hasTakenSAT: cleanAnswers.baseline === 'sat',
    onboardingProfile: {
      version: FUNNEL_VERSION,
      completedAt,
      answers: cleanAnswers,
    },
  };
}
