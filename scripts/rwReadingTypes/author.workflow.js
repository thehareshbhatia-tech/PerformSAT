export const meta = {
  name: 'rw-reading-type-author',
  description: 'Author + grade new R&W reading items to fill the 5 thin question-type buckets to a drillable depth',
  phases: [
    { title: 'Author', detail: 'one item per candidate, topic-diversified' },
    { title: 'Grade', detail: '5-dim CB rubric, accept all-dims ≥4' },
  ],
};

// Fixed plan for the 5 thin buckets (over-generate to absorb grader rejects;
// target final ≥6). `current` = items already in the bucket. Anchors (real bank
// items of each type) live in the config file, which each authoring agent reads.
const CONFIG_PATH = '/Users/hareshbhatia/PerformSAT/scripts/rwReadingTypes/data/author-config.json';
const config = [
  { bucket: 'wic-example-or-illustration', skill: 'words-in-context',            author: 6, current: 2 },
  { bucket: 'inf-prediction-expectation',  skill: 'inferences',                  author: 8, current: 1 },
  { bucket: 'rs-emphasize-similarity',     skill: 'rhetorical-synthesis',        author: 8, current: 1 },
  { bucket: 'rs-present-claim',            skill: 'rhetorical-synthesis',        author: 5, current: 3 },
  { bucket: 'coe-text-illustrate-quote',   skill: 'command-of-evidence-textual', author: 8, current: 1 },
];

// What makes an item belong to each bucket + the exact stem to use.
const BUCKET_DEFS = {
  'wic-example-or-illustration': {
    stem: 'Which choice completes the text with the most logical and precise word or phrase?',
    def: 'A Words-in-Context fill-the-blank where the operative context clue is an EXAMPLE, a list, or a specific concrete instance that signals the blank\'s meaning (e.g., "such as", enumerated cases, a named instance). The passage gives one or more examples that pin down the precise word for a single blank (____). The blank is one precise word or short phrase; the four choices are plausible single words/short phrases, only one precisely fitting.',
  },
  'inf-prediction-expectation': {
    stem: 'Which choice most logically completes the text?',
    def: 'An Inferences item where the passage sets up a situation and the correct completion is what one would EXPECT or PREDICT to follow / be true as a consequence — an anticipated outcome the evidence points toward, not a flat restatement of given facts. The passage ends needing a logical completion; the four choices are full clauses, one of which is the well-supported expectation.',
  },
  'rs-emphasize-similarity': {
    stem: 'Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    studentNotesGoal: 'emphasize a similarity (or shared feature) between two things',
    def: 'A Rhetorical Synthesis item. studentNotes has {intro, bullets (4-5 factual notes describing TWO subjects), goal}. The goal must be phrased "The student wants to emphasize a similarity between [X] and [Y]." The correct choice foregrounds what the two subjects SHARE, drawing only on the notes. Distractors are accurate but emphasize a difference, only one subject, or an irrelevant detail.',
  },
  'rs-present-claim': {
    stem: 'Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    studentNotesGoal: "present a scholar's or author's central claim / argument",
    def: 'A Rhetorical Synthesis item. studentNotes has {intro, bullets (4-5 factual notes about a scholar/author and their work), goal}. The goal must be phrased "The student wants to present [Name]\'s central claim about [topic]." The correct choice states that person\'s main thesis, drawn from the notes. Distractors give peripheral biographical detail, a method, or a sub-point rather than the central claim.',
  },
  'coe-text-illustrate-quote': {
    stemTemplate: 'Which quotation from {WORK} most effectively illustrates the claim?',
    def: 'A Command-of-Evidence (textual) item. The passage states a CLAIM about a literary work (a poem or prose excerpt), then notes that a student wants a quotation that illustrates the claim. The four choices are QUOTATIONS from the work; exactly one directly illustrates the stated claim. INTEGRITY: invent a FICTIONAL work by a FICTIONAL author and write all four original quotations yourself — never attribute quotations to a real author/work. The stem must name the fictional work in quotation marks.',
  },
};

const TOPICS = [
  'marine biology', 'ancient trade routes', 'abstract painting', 'exoplanet detection',
  'sign-language linguistics', 'behavioral economics', 'volcanology', 'Baroque music',
  'urban archaeology', 'soil ecology', 'self-healing materials', 'oral-history methods',
];
const LITERARY = [
  'a contemplative nature poem', 'a narrative poem about a sea voyage', 'a short lyric about memory',
  'a poem about a ruined garden', 'a dramatic monologue', 'a poem about migration',
  'a pastoral poem', 'a poem about a city at dawn',
];

const ITEM_SCHEMA = {
  type: 'object',
  additionalProperties: false,
  properties: {
    difficulty: { type: 'string', enum: ['easy', 'medium', 'hard'] },
    passage: { type: ['string', 'null'] },
    studentNotes: {
      type: ['object', 'null'],
      additionalProperties: false,
      properties: {
        intro: { type: 'string' },
        bullets: { type: 'array', items: { type: 'string' } },
        goal: { type: 'string' },
      },
    },
    question: { type: 'string' },
    choices: {
      type: 'array',
      minItems: 4,
      maxItems: 4,
      items: {
        type: 'object',
        additionalProperties: false,
        properties: { id: { type: 'string' }, text: { type: 'string' } },
        required: ['id', 'text'],
      },
    },
    correctAnswer: { type: 'string', enum: ['A', 'B', 'C', 'D'] },
    explanation: { type: 'string' },
  },
  required: ['difficulty', 'question', 'choices', 'correctAnswer', 'explanation'],
};

const GRADE_SCHEMA = {
  type: 'object',
  additionalProperties: false,
  properties: {
    stemClarity: { type: 'integer', minimum: 1, maximum: 5 },
    distractorQuality: { type: 'integer', minimum: 1, maximum: 5 },
    formatNotation: { type: 'integer', minimum: 1, maximum: 5 },
    difficultyCalibration: { type: 'integer', minimum: 1, maximum: 5 },
    typeFit: { type: 'integer', minimum: 1, maximum: 5 },
    factualIntegrity: { type: 'integer', minimum: 1, maximum: 5 },
    notes: { type: 'string' },
  },
  required: ['stemClarity', 'distractorQuality', 'formatNotation', 'difficultyCalibration', 'typeFit', 'factualIntegrity'],
};

function authorPrompt(task) {
  const d = BUCKET_DEFS[task.bucket];
  const isLit = task.bucket === 'coe-text-illustrate-quote';
  const topic = isLit ? LITERARY[task.i % LITERARY.length] : TOPICS[task.i % TOPICS.length];
  const stem = d.stem || (d.stemTemplate ? d.stemTemplate.replace('{WORK}', '"<your fictional work title>"') : '');
  const goalLine = d.studentNotesGoal ? `\nThe studentNotes.goal must express: "${d.studentNotesGoal}".` : '';
  return `You are a Digital SAT item writer. Author ONE original, exam-authentic Reading & Writing question for the "${task.skill}" skill, of question type "${task.bucket}".

TYPE DEFINITION:
${d.def}${goalLine}

QUESTION STEM (use this exact wording${d.stemTemplate ? ', naming your fictional work' : ''}): ${stem}

Read this file and find the object whose "bucket" === "${task.bucket}"; its "anchors" are 1-3 real bank items of this exact type. Match their voice, length, and difficulty:
${CONFIG_PATH}

Requirements:
- Topic hint (for variety, do NOT copy any anchor's topic): ${topic}.
- Exactly four choices A–D; exactly one correct. Distractors must be plausible and tempting, wrong for a clear reason.
- The item MUST genuinely be question type "${task.bucket}" — the defining clue/relation/goal above must be what decides the answer.
- INTEGRITY: ${isLit ? 'Invent a fictional work + fictional author; write all four quotations yourself. Never quote or attribute to a real author/work.' : 'Original expository prose. Keep any general factual claims accurate; prefer describing phenomena over attributing specific findings to real named individuals. Do not fabricate specific false facts about real people.'}
- Write a 2-4 sentence explanation that names the correct answer and says why it fits the type, plus why the key distractor fails.
- Put the passage in \`passage\` (or the notes in \`studentNotes\`), not both. Output ONLY the structured item.`;
}

function gradePrompt(item, task) {
  return `You are a strict Digital SAT content reviewer. Score this authored "${task.bucket}" (${task.skill}) item on each dimension 1-5 (5 = College-Board grade). Be critical.

ITEM:
${JSON.stringify(item, null, 1)}

Dimensions:
- stemClarity: is the prompt + passage/notes unambiguous and well-formed?
- distractorQuality: are all three distractors plausible yet clearly wrong for a stated reason (no throwaways, no second defensible answer)?
- formatNotation: correct SAT format (four A–D choices, proper stem, blank/notes structure as required)?
- difficultyCalibration: appropriate, non-trivial SAT difficulty (not a giveaway, not unfair)?
- typeFit: does it GENUINELY test question type "${task.bucket}" as defined (the right clue/relation/goal decides the answer)?
- factualIntegrity: are claims accurate / not fabricated, and (for literary items) is the work fictional with original quotations (no real-author misattribution)?

Return integer scores for all six dimensions plus brief notes. Do not inflate scores.`;
}

// Flatten to candidate tasks.
const tasks = [];
for (const c of config) {
  for (let i = 0; i < c.author; i++) {
    tasks.push({ bucket: c.bucket, skill: c.skill, i });
  }
}
log(`Authoring ${tasks.length} candidates across ${config.length} thin buckets`);

const ACCEPT_MIN = 4;
const graded = await pipeline(
  tasks,
  (task) => agent(authorPrompt(task), { label: `author:${task.bucket}#${task.i}`, phase: 'Author', schema: ITEM_SCHEMA })
    .then((item) => (item ? { task, item } : null)),
  (prev) => {
    if (!prev) return null;
    return agent(gradePrompt(prev.item, prev.task), { label: `grade:${prev.task.bucket}#${prev.task.i}`, phase: 'Grade', schema: GRADE_SCHEMA, effort: 'high' })
      .then((g) => {
        if (!g) return null;
        const dims = [g.stemClarity, g.distractorQuality, g.formatNotation, g.difficultyCalibration, g.typeFit, g.factualIntegrity];
        const min = Math.min(...dims);
        const total = dims.reduce((a, b) => a + b, 0);
        return { bucket: prev.task.bucket, skill: prev.task.skill, item: prev.item, grade: g, min, total, accept: min >= ACCEPT_MIN };
      });
  },
);

const all = graded.filter(Boolean);
const accepted = all.filter((r) => r.accept).sort((a, b) => b.total - a.total);

// Per-bucket summary.
const summary = {};
for (const c of config) {
  const got = accepted.filter((r) => r.bucket === c.bucket);
  summary[c.bucket] = { authored: c.author, accepted: got.length, current: c.current, final: c.current + got.length };
}
log(`Accepted ${accepted.length}/${all.length} authored items`);

return {
  totals: { authored: all.length, accepted: accepted.length },
  summary,
  accepted: accepted.map((r) => ({ bucket: r.bucket, skill: r.skill, total: r.total, min: r.min, item: r.item })),
  rejected: all.filter((r) => !r.accept).map((r) => ({ bucket: r.bucket, min: r.min, notes: r.grade.notes })),
};
