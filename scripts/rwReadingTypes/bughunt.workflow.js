export const meta = {
  name: 'drill-flow-bughunt',
  description: 'Audit the Practice Bank → drill flow for broken affordances, dead handlers, test-vs-drill parity gaps, and state leaks; adversarially verify each finding',
  phases: [
    { title: 'Audit', detail: 'one finder per dimension' },
    { title: 'Verify', detail: 'skeptic confirms each finding is a real bug' },
  ],
};

const F = '/Users/hareshbhatia/PerformSAT/src/components';
const APP = '/Users/hareshbhatia/PerformSAT/src/App.jsx';

// The just-fixed calculator bug as the worked example of the bug CLASS:
// AssignedPracticeShell/AdaptivePracticeShell render a "Calculator" button that
// toggles App's showCalculator, but App never rendered the Desmos calculator in
// the practice view (it was defined only inside PracticeTest). Button lit up,
// nothing appeared. Look for MORE bugs of this kind (and others) in the drill flow.
const CONTEXT = `WORKED EXAMPLE of the bug class (already fixed, do NOT re-report): the drill shells showed a "Calculator" button that toggled App state and highlighted, but App never rendered the calculator component in the practice view — so clicking it did nothing. A real, user-visible "broken affordance." Hunt for OTHER bugs like this and any other defects in the Practice Bank → drill flow.`;

const DIMENSIONS = [
  {
    key: 'assigned-shell',
    prompt: `Audit ${F}/AssignedPracticeShell.jsx (the production drill UI) AND how ${APP} wires it (view==='practice', practiceMode==='assigned'; search App.jsx for <AssignedPracticeShell and the handlers it passes). For EVERY interactive affordance (buttons, toggles, callbacks: onCheckAnswer, onNextQuestion, onAdvanceToNextRound, onTrySimilar, onShowHint, onNavigateToQuestion, onToggleCalculator, onRetry, round interstitial, hint panel, etc.): does clicking it actually do what it claims? Flag any button that toggles state nothing consumes, any prop the shell USES but App does NOT pass (undefined handler → no-op or crash), any handler that no-ops, and any feature that silently fails.`,
  },
  {
    key: 'adaptive-shell',
    prompt: `Audit ${F}/AdaptivePracticeShell.jsx AND its wiring in ${APP} (view==='practice', practiceMode==='adaptive'; the <AdaptivePracticeShell render). Same audit: every button/toggle/callback (Grid toggle, calculator, check, next, hint, navigate, relaunch). Flag broken affordances, props used-but-not-passed, dead toggles, no-op handlers. Note that AdaptivePracticeShell gets FEWER props from App than AssignedPracticeShell — check whether anything it relies on is missing.`,
  },
  {
    key: 'practicebank-launch',
    prompt: `Audit ${F}/PracticeBank.jsx and its onStartPractice wiring in ${APP} (search for onStartPractice, startAssignedPractice, and how the practice-bank 'section' and source flow). Check the launchers (launchQuickDrill, launchFullSection, launchTodaysMix, launchDomainMixed, launchSkillDrill, launchPatternDrill, resume): do they pass the correct section (math vs rw), correct question ids, and a 'practice-bank-*' source so the back button returns to the bank? Flag mis-routing, wrong section tag, empty pools that launch a broken drill, or a launcher that lands the user in the wrong shell.`,
  },
  {
    key: 'test-vs-drill-parity',
    prompt: `Compare ${F}/PracticeTest.jsx (full test) against the drill shells (${F}/AssignedPracticeShell.jsx, ${F}/AdaptivePracticeShell.jsx). PracticeTest offers tools: Desmos calculator (just fixed for drills), SATReferenceSheet (showReference), annotation/highlight, etc. For EACH math tool/feature in PracticeTest: is there a button for it in the drill shells that does nothing (broken affordance — a real bug), or is it simply absent (a possible enhancement, not a bug)? Report only the BROKEN-AFFORDANCE cases as bugs; list absent-but-no-button cases separately as low-severity gaps.`,
  },
  {
    key: 'tool-state-lifecycle',
    prompt: `Audit the calculator/tool state lifecycle across ${APP} (showCalculator state, its ESC handler, the back handlers studyPlanBackHandler/practiceBankBackHandler/pastTestReviewBackHandler) and the shells. Bugs to look for: showCalculator NOT reset when switching questions / finishing a drill / navigating away (calculator stuck open over the wrong screen); calculator showing for R&W when it shouldn't (section gating holes); the App-level showCalculator colliding with PracticeTest's own showCalculator; the Desmos instance leaking/not destroyed. Report concrete state bugs with file:line.`,
  },
];

const FINDINGS_SCHEMA = {
  type: 'object',
  additionalProperties: false,
  properties: {
    findings: {
      type: 'array',
      items: {
        type: 'object',
        additionalProperties: false,
        properties: {
          title: { type: 'string' },
          file: { type: 'string' },
          line: { type: 'string' },
          severity: { type: 'string', enum: ['high', 'medium', 'low'] },
          repro: { type: 'string' },
          why_bug: { type: 'string' },
          proposed_fix: { type: 'string' },
        },
        required: ['title', 'file', 'severity', 'repro', 'why_bug', 'proposed_fix'],
      },
    },
  },
  required: ['findings'],
};

const VERDICT_SCHEMA = {
  type: 'object',
  additionalProperties: false,
  properties: {
    isRealBug: { type: 'boolean' },
    confidence: { type: 'string', enum: ['high', 'medium', 'low'] },
    severity: { type: 'string', enum: ['high', 'medium', 'low'] },
    reasoning: { type: 'string' },
  },
  required: ['isRealBug', 'confidence', 'reasoning'],
};

phase('Audit');
const perDim = await pipeline(
  DIMENSIONS,
  (d) => agent(`${CONTEXT}\n\n${d.prompt}\n\nRead the actual source (Read/Grep). Report ONLY concrete, code-grounded defects with file + line + how it breaks for the user + a specific fix. Do not invent issues; if a dimension is clean, return an empty findings array.`,
    { label: `audit:${d.key}`, phase: 'Audit', schema: FINDINGS_SCHEMA }),
  (res, d) => {
    if (!res || !Array.isArray(res.findings) || res.findings.length === 0) return [];
    // Verify each finding with an independent skeptic.
    return parallel(res.findings.map((f) => async () => {
      const v = await agent(`Independently verify this claimed bug in the SEVA drill flow. READ the cited code yourself before judging. Default to isRealBug=false unless the code clearly confirms a real, user-visible defect (not intended behavior, not a non-issue).\n\nClaim: ${f.title}\nFile: ${f.file} ${f.line || ''}\nWhy claimed a bug: ${f.why_bug}\nRepro: ${f.repro}`,
        { label: `verify:${d.key}:${(f.title || '').slice(0, 30)}`, phase: 'Verify', schema: VERDICT_SCHEMA, effort: 'high' });
      if (!v) return null;
      return { title: f.title, file: f.file, line: f.line, severity: f.severity, repro: f.repro, proposed_fix: f.proposed_fix, dimension: d.key, verdict: v };
    }));
  },
);

const all = perDim.flat().filter(Boolean);
const confirmed = all.filter((f) => f.verdict?.isRealBug);
const dismissed = all.filter((f) => f.verdict && !f.verdict.isRealBug);

log(`Found ${all.length} candidate issues · ${confirmed.length} confirmed real bugs · ${dismissed.length} dismissed`);

const rank = (s) => (s === 'high' ? 0 : s === 'medium' ? 1 : 2);
confirmed.sort((a, b) => rank(a.severity) - rank(b.severity));

return {
  confirmed: confirmed.map((f) => ({ title: f.title, file: f.file, line: f.line, severity: (f.verdict && f.verdict.severity) || f.severity, repro: f.repro, proposed_fix: f.proposed_fix, confidence: f.verdict.confidence, reasoning: f.verdict.reasoning })),
  dismissed: dismissed.map((f) => ({ title: f.title, reason: f.verdict.reasoning })),
};
