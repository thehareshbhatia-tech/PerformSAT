export const meta = {
  name: 'ai-tutor-understand',
  description: 'Map the SEVA AI tutor (UI, prompts, proxy, coach modes, launch) and benchmark it against best-in-class to produce a ranked improvement opportunity map (visual + message)',
  phases: [
    { title: 'Map', detail: 'parallel readers over each dimension' },
    { title: 'Synthesize', detail: 'rank + group into a plan' },
  ],
};

const C = '/Users/hareshbhatia/PerformSAT/src/components';
const S = '/Users/hareshbhatia/PerformSAT/src/services';
const FN = '/Users/hareshbhatia/PerformSAT/functions/src/index.ts';

// Grounding the API dimension + synthesis in the current Claude API reference
// (from the claude-api skill, loaded in the main session 2026-06-18):
const API_CONTEXT = `CLAUDE API REFERENCE (current, for grounding — the tutor proxies Anthropic Claude):
- Models: claude-opus-4-8 (most capable, $5/$25 per Mtok, 1M ctx) is the default for quality; claude-sonnet-4-6 (faster/cheaper, $3/$15) is defensible for an interactive low-latency chat. The tutor currently uses claude-sonnet-4-6.
- Streaming: STRONGLY recommended for chat / long output / high max_tokens (prevents timeouts; tokens appear live). The tutor is currently NON-streaming (a long pause before the whole answer appears).
- Adaptive thinking: thinking:{type:"adaptive"} lets the model decide depth — improves reasoning/explanation quality. With streaming, set display:"summarized" to show a thinking indicator. Tutor currently sends no thinking.
- Effort: output_config:{effort:"low|medium|high"} trades quality vs latency/cost. medium is a good chat balance.
- Prompt caching: cache the STABLE prefix (frozen system prompt + per-question context) so multi-turn follow-ups are ~10x cheaper + faster. Cache-bust risks: timestamps/UUIDs/non-deterministic JSON in the system prompt. Tutor currently does no caching.
- Prompting on 4.6/4.8: these models follow instructions LITERALLY — aggressive "CRITICAL: YOU MUST" language overtriggers; dial it back. Lead with the outcome; calibrate verbosity.
- max_tokens 16000 non-streaming risks SDK/HTTP timeouts; streaming removes that.
- The official @anthropic-ai/sdk (TypeScript) is cleaner than raw fetch and gives streaming/typed errors for free; raw fetch is acceptable since the project already uses it.`;

const DIMENSIONS = [
  {
    key: 'ui-ux',
    title: 'Tutor chat UI/UX (visual)',
    prompt: `Read ${C}/AiTutorChat.jsx (the chat UI, ~1661 lines), plus ${C}/AiTutorButton.jsx, ${C}/ui/AiTutorChatBubble.jsx, and ${C}/CoachModePicker.jsx. Map the CURRENT visual/interaction design: layout (panel/modal/sidebar?), message bubbles + rendering (markdown/math/SolutionExplanation), the composer/input, loading/typing states, coach-mode UI, empty/first-run state, error states, mobile responsiveness, animations/transitions, and the design tokens it uses. Then identify VISUAL + INTERACTION weaknesses and concrete opportunities to make it best-in-class (vs Claude.ai / ChatGPT / Khanmigo tutor UIs): e.g. streaming token rendering, message actions, suggested-reply chips, better math/diagram rendering, typing indicator, scroll behavior, accessibility, polish. Be specific with file:line.`,
  },
  {
    key: 'prompt-coaching',
    title: 'Prompt construction + coaching quality (message)',
    prompt: `Read ${S}/aiTutorService.js (~794 lines), the prompt-building code in ${C}/AiTutorChat.jsx, ${S}/aiCoachModes.js (the 4 coach modes), and ${S}/selectors/desmosTip.js. Map HOW the tutor's messages are constructed: system prompt(s), how question/passage/answer/explanation context is injected, math vs R&W handling, the Desmos playbook, the "intelligence context" (student fingerprint / weaknesses / predictions), conversation history handling, and the 4 coach modes (hint ladder, mistake replay, teach-back, exam strategy) — note that CoachModePicker.jsx exists but appears UNUSED. Then identify MESSAGE-QUALITY / PEDAGOGY weaknesses and concrete improvements: prompt tuning for current Claude models (literal instruction-following — flag any "CRITICAL/MUST" overtriggering), Socratic vs answer-giving balance, error-specific feedback, encouragement calibration, surfacing the unused coach modes, and grounding answers in the actual question. Be specific with file:line.\n\n${API_CONTEXT}`,
  },
  {
    key: 'proxy-api',
    title: 'Proxy + Claude API usage (message infra)',
    prompt: `Read the AI tutor endpoint(s) in ${FN} (search for "aiTutor", "anthropic", "/v1/messages" — around lines 223-400). Map the CURRENT API call: model, max_tokens, streaming (yes/no), thinking, effort, prompt caching, system prompt placement, error handling, auth/rate-limiting, and how the client (${S}/aiTutorService.js) calls it. Then identify concrete API best-practice upgrades to make responses faster + better, grounded in the reference below: streaming SSE end-to-end, adaptive thinking + summarized display, prompt caching of the stable prefix, model choice (Opus 4.8 quality vs Sonnet 4.6 latency), effort, and whether to adopt the official SDK. Flag any correctness/robustness bugs (timeout risk at max_tokens 16000 non-streaming, missing stop_reason handling, etc.). Be specific with file:line.\n\n${API_CONTEXT}`,
  },
  {
    key: 'launch-loop',
    title: 'Launch, context wiring + closed loop',
    prompt: `Trace how the AI tutor is LAUNCHED and what CONTEXT it receives. Read ${C}/AiTutorButton.jsx and grep the repo for where AiTutorChat is mounted (PracticeTest.jsx, AssignedPracticeShell.jsx, AdaptivePracticeShell.jsx, App.jsx, TestResults.jsx, StudyPlanDashboard.jsx). Map: where the tutor entry points are, what props/context each passes (current question, student answer, skills, fingerprint, intervention/prediction logs), and any telemetry. Identify gaps + opportunities: places the tutor SHOULD be reachable but isn't, context that SHOULD be passed but isn't, proactive-tutoring moments (e.g. after a wrong answer), and closed-loop signals (does tutor usage feed the study plan?). Be specific with file:line.`,
  },
  {
    key: 'benchmark',
    title: 'Best-in-class AI tutor benchmark',
    prompt: `Define what makes an AI tutor genuinely best-in-class for SAT prep, on BOTH axes. Use web search for current best practices + named competitors (Khanmigo, Acely, R.test/LearnQ, ChatGPT study mode) where useful. Cover: PEDAGOGY (Socratic questioning vs answer-giving, hint ladders, worked-example fading, error-specific remediation, metacognition/teach-back, encouragement calibration, knowing when to give the answer), and UX (streaming responses, math/diagram rendering, suggested follow-ups, message actions, mobile, latency, trust/citations to the passage or solution). Produce a concrete checklist of "what the best tutors do" that SEVA can be measured against, and the 8-12 highest-leverage things SEVA should adopt. Be concrete and prioritized.\n\n${API_CONTEXT}`,
  },
];

const FINDINGS_SCHEMA = {
  type: 'object',
  additionalProperties: false,
  properties: {
    currentState: { type: 'string', description: 'concise map of what exists today' },
    opportunities: {
      type: 'array',
      items: {
        type: 'object',
        additionalProperties: false,
        properties: {
          title: { type: 'string' },
          axis: { type: 'string', enum: ['visual', 'message', 'api', 'pedagogy', 'wiring'] },
          impact: { type: 'string', enum: ['high', 'medium', 'low'] },
          effort: { type: 'string', enum: ['S', 'M', 'L'] },
          detail: { type: 'string' },
          location: { type: 'string', description: 'file:line or component, if applicable' },
        },
        required: ['title', 'axis', 'impact', 'effort', 'detail'],
      },
    },
  },
  required: ['currentState', 'opportunities'],
};

phase('Map');
const findings = await pipeline(
  DIMENSIONS,
  (d) => agent(`${d.prompt}\n\nRead the ACTUAL source before reporting. Return a concise currentState map + a prioritized list of concrete opportunities (impact/effort tagged). Ground every opportunity in real code or a real best-practice — no filler.`,
    { label: `map:${d.key}`, phase: 'Map', schema: FINDINGS_SCHEMA })
    .then((r) => (r ? { dimension: d.key, title: d.title, ...r } : null)),
);

const clean = findings.filter(Boolean);

phase('Synthesize');
const SYNTH_SCHEMA = {
  type: 'object',
  additionalProperties: false,
  properties: {
    summary: { type: 'string', description: 'one-paragraph verdict on where the tutor stands today and the biggest levers' },
    quickWins: { type: 'array', items: { type: 'string' }, description: 'high-impact, low-effort (S) items to do first' },
    bigBets: { type: 'array', items: { type: 'string' }, description: 'high-impact larger efforts (M/L) worth doing' },
    visualPlan: { type: 'array', items: { type: 'string' }, description: 'ordered visual/UX redesign steps' },
    messagePlan: { type: 'array', items: { type: 'string' }, description: 'ordered message/pedagogy/API quality steps' },
    decisions: { type: 'array', items: { type: 'string' }, description: 'product/architecture decisions the user must make (e.g. model choice, streaming infra, redesign ambition)' },
  },
  required: ['summary', 'quickWins', 'bigBets', 'visualPlan', 'messagePlan', 'decisions'],
};

const synthesis = await agent(
  `You are the lead engineer + designer planning how to make the SEVA SAT AI tutor genuinely best-in-class, visually AND in message quality. Here are dimension-by-dimension findings from readers who studied the actual code + benchmarked competitors:\n\n${JSON.stringify(clean, null, 1)}\n\n${API_CONTEXT}\n\nSynthesize into a crisp, prioritized plan: a one-paragraph verdict, quick wins (high-impact/low-effort), big bets, an ordered visual/UX plan, an ordered message/pedagogy/API plan, and the key product/architecture DECISIONS the user must make (call out the streaming infrastructure change, the model choice quality-vs-latency tradeoff, and how ambitious the visual redesign should be). Be concrete and honest about effort.`,
  { label: 'synthesize', phase: 'Synthesize', schema: SYNTH_SCHEMA, effort: 'high' });

return { findings: clean, synthesis };
