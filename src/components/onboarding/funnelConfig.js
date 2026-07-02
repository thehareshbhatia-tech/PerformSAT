/**
 * Pre-signup onboarding funnel — content + profile mapping.
 *
 * All question/interstitial copy lives here as data so the flow component
 * stays a dumb renderer and the copy is unit-testable (no emoji, option
 * counts, id uniqueness). buildFunnelProfile is the single translation
 * point from quiz answers to users/{uid} profile fields.
 */

/** Persisted schema version for users/{uid}.onboardingProfile. */
export const FUNNEL_VERSION = 1;

/**
 * Staging-format version for the in-progress localStorage state. Separate
 * from FUNNEL_VERSION: bumping this discards half-finished sessions when
 * the step table changes shape, WITHOUT implying the persisted answers
 * schema changed.
 */
export const FUNNEL_STORAGE_VERSION = 3;

/** localStorage key for in-progress funnel state (pre-auth staging). */
export const FUNNEL_STORAGE_KEY = 'seva:onboardingFunnel:v1';

export const DEFAULT_FUNNEL_GOAL = 1400;

/**
 * The quiz's real arc, surfaced as chapters: eyebrow labels above each
 * question and the four segments of the progress bar. Tones map to the
 * tri-color brand (orange action / purple focus / lime mastery, navy ink).
 */
export const FUNNEL_CHAPTERS = [
  { id: 'test', label: 'Your test', tone: 'orange' },
  { id: 'how', label: 'How you work', tone: 'purple' },
  { id: 'way', label: "What's in the way", tone: 'lime' },
  { id: 'why', label: 'Why it matters', tone: 'navy' },
];

/**
 * Question definitions, in flow order. `id` is the answers-object key;
 * option `value`s are stable slugs persisted into onboardingProfile —
 * never rename them once shipped. `chapter` indexes FUNNEL_CHAPTERS.
 */
export const FUNNEL_QUESTIONS = [
  {
    id: 'timing',
    chapter: 0,
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
    chapter: 0,
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
    chapter: 0,
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
    chapter: 1,
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
    chapter: 1,
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
    chapter: 1,
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
    chapter: 2,
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
    chapter: 2,
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
    chapter: 3,
    title: 'What would hitting your target actually change?',
    options: [
      { value: 'colleges', label: 'Which colleges I can realistically aim for' },
      { value: 'scholarships', label: 'Scholarship money' },
      { value: 'self', label: 'Proving to myself I can do it' },
      { value: 'pressure', label: 'Less pressure from everyone around me' },
    ],
  },
  // Pre-gate micro-commitment (Headway pattern: an easy yes right before the
  // ask builds buy-in). Both answers are affirmative on purpose — this is a
  // commitment device, not a filter — and it calls back INT-B's
  // "twenty minutes" promise.
  {
    id: 'commitment',
    chapter: 3,
    title: 'Could you give this 20 focused minutes a day?',
    options: [
      { value: 'allin', label: "I'm in — let's do this" },
      { value: 'try', label: "I'll do my best" },
    ],
  },
];

/**
 * Interstitial copy. The reassure heading adapts to the `feeling` answer
 * and the student's name (see reassureHeading). Visuals are rendered by
 * the flow component (keyed on `visual`) — pure CSS/SVG product-truth
 * cards, no testimonials.
 */
export const FUNNEL_INTERSTITIALS = {
  reassure: {
    id: 'reassure',
    visual: 'trajectory',
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

/**
 * Reassure-interstitial heading: mirrors the feeling answer back, with the
 * student's name woven in when we have one.
 */
export function reassureHeading(feeling, name = '') {
  const n = (name || '').trim();
  switch (feeling) {
    case 'confident':
      return n ? `Good, ${n}. Let's turn that into points.` : "Good. Let's turn that into points.";
    case 'fine':
      return n ? `${n}, that's a solid place to start from.` : "That's a solid place to start from.";
    case 'stressed':
    case 'heavy':
      return n ? `That feeling is common, ${n} — and fixable.` : 'That feeling is common — and fixable.';
    default:
      return 'Wherever you start, the path is the same.';
  }
}

/**
 * The plan-build interlude: four staged lines assembling the plan from the
 * student's own answers. Rendered on the funnel's single navy screen,
 * immediately before the path reveal.
 */
export function buildInterludeLines(answers = {}, goal = DEFAULT_FUNNEL_GOAL, name = '') {
  const n = (name || '').trim();
  const timingPhrase = {
    lt2m: 'a test in the next 2 months',
    '2to6m': 'a test 2–6 months out',
    gt6m: 'a runway of 6+ months',
    undecided: 'a test date still to be picked',
  }[answers.timing];
  return [
    n ? `Reading your answers, ${n}` : 'Reading your answers',
    'Locating where your points are hiding',
    timingPhrase ? `Calibrating pacing for ${timingPhrase}` : 'Calibrating your pacing',
    `Setting the bar at ${goal}`,
  ];
}

/**
 * Honest authority strip on the path screen — real content inventory only
 * (same rounded-down numbers the landing page asserts). Never student
 * counts or score promises.
 */
export const FUNNEL_PROOF_POINTS = [
  '2,200+ hand-authored questions',
  '12 full-length practice tests',
  'Every explanation written by a person',
];

/**
 * Flow order. `name` collects the personalization thread; `build` is the
 * auto-advancing plan-assembly interlude; chapters interleave with
 * interstitials at each chapter turn.
 */
export const FUNNEL_STEPS = [
  { type: 'name', id: 'name' },
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
  { type: 'question', id: 'commitment' },
  { type: 'goal', id: 'goal' },
  { type: 'build', id: 'build' },
  { type: 'path', id: 'path' },
  { type: 'signup', id: 'signup' },
];

/**
 * Per-chapter fill fractions (0..1) for the segmented progress bar.
 * Chapter spans are step-index ranges over FUNNEL_STEPS; everything at or
 * past the build interlude reads as complete.
 */
const BUILD_STEP_INDEX = FUNNEL_STEPS.findIndex((s) => s.type === 'build');
const CHAPTER_SPANS = [
  { start: 1, end: 4 },
  { start: 5, end: 8 },
  { start: 9, end: 11 },
  { start: 12, end: 14 },
];

export function chapterFills(stepIndex) {
  return CHAPTER_SPANS.map(({ start, end }) => {
    if (stepIndex >= BUILD_STEP_INDEX) return 1;
    const span = end + 1 - start;
    return Math.min(1, Math.max(0, (stepIndex - start) / span));
  });
}

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
