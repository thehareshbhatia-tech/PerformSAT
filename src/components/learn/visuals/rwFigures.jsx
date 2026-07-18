/**
 * R&W lesson figures — FIGURE LANGUAGE v2 (textbook ink discipline).
 *
 * Marked-up sentences, not flowcharts: thin ink brackets under clauses,
 * ONE orange accent on the element each figure teaches, a tutor squiggle
 * under an error, serif labels. Reference material is typeset like a page
 * from a writer's handbook — small-caps headers over roman word lists,
 * separated by hairline rules. No boxes, no pills, no checkmarks.
 *
 * See src/components/learn/visuals/figureLanguage.js for the full contract.
 */
import React from 'react';
import { INK, INK_MUTED, ACCENT, SERIF, DIAGRAM_STYLE } from './figureLanguage';

/* ═══════════════════════════════════════════════════════════════
   SENTENCE BOUNDARIES  (R&W Boundaries)
   Two independent clauses; one seam written four ways. The three
   legal joins carry the accent; the comma splice gets the squiggle.
   ═══════════════════════════════════════════════════════════════ */
export const SentenceBoundaryDiagram = () => {
  const W = 600, H = 300;
  // one seam, written four ways — a tutor marking the join point on the board
  const seamRow = (y, seam, after, note) => (
    <g>
      <text x={60} y={y} fontSize="15" fill={INK} fontFamily={SERIF}>…ran overnight
        <tspan fill={ACCENT}>{seam}</tspan> {after} results…</text>
      <text x={W - 40} y={y} fontSize="12" fill={INK_MUTED} textAnchor="end"
        fontFamily={SERIF} fontStyle="italic">{note}</text>
    </g>
  );
  return (
    <div style={DIAGRAM_STYLE}>
      <svg viewBox={`0 0 ${W} ${H}`} style={{ maxWidth: 620, width: '100%' }}
        aria-label="Sentence boundary diagram: two independent clauses joined by a period, semicolon, or comma plus FANBOYS are correct; a comma alone is a comma splice">
        {/* the sentence, with each clause bracketed and named */}
        <text x={60} y={44} fontSize="15.5" fill={INK} fontFamily={SERIF}>The lab ran overnight
          <tspan fill={INK_MUTED}>  ?  </tspan>the results came by morning</text>
        <path d="M 62 56 v 6 h 148 v -6" fill="none" stroke={INK_MUTED} strokeWidth="1" />
        <text x={136} y={78} fontSize="11.5" fill={INK_MUTED} textAnchor="middle"
          fontFamily={SERIF} fontStyle="italic">independent clause</text>
        <path d="M 252 56 v 6 h 196 v -6" fill="none" stroke={INK_MUTED} strokeWidth="1" />
        <text x={350} y={78} fontSize="11.5" fill={INK_MUTED} textAnchor="middle"
          fontFamily={SERIF} fontStyle="italic">independent clause</text>

        {/* the three legal joins, seam marked in accent */}
        {seamRow(130, '.', 'The', 'period')}
        {seamRow(162, ';', 'the', 'semicolon')}
        {seamRow(194, ', and', 'the', 'comma + FANBOYS')}

        {/* the splice, marked with a tutor's squiggle */}
        {seamRow(246, ',', 'the', 'comma alone — comma splice')}
        <path d="M 146 254 q 5 5 10 0 t 10 0 t 10 0 t 10 0 t 10 0" fill="none"
          stroke={ACCENT} strokeWidth="1.3" />
      </svg>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════
   SUBJECT–VERB AGREEMENT  (R&W Form, Structure & Sense)
   One marked-up sentence: the interrupting phrase struck out in ink,
   a thin accent arc carrying the subject to its verb, and the decoy
   choice repeated below with the tutor's squiggle under the error.
   ═══════════════════════════════════════════════════════════════ */
export const SubjectVerbAgreementDiagram = () => {
  const W = 600, H = 178;
  return (
    <div style={DIAGRAM_STYLE}>
      <svg viewBox={`0 0 ${W} ${H}`} style={{ maxWidth: 620, width: '100%' }}
        aria-label="Subject-verb agreement diagram: in the sentence 'The box of old letters was heavy,' the interrupting phrase 'of old letters' is struck out, an arc connects the singular subject to the verb 'was,' and the decoy choice 'were' is marked as an error">
        {/* agreement arc: subject → verb, over the struck phrase */}
        <path d="M 112 52 Q 186 16 260 54" fill="none" stroke={ACCENT} strokeWidth="1.3" />
        <polygon points="260,54 251.9,53.4 254.8,47.7" fill={ACCENT} />
        <text x={186} y={24} fontSize="11.5" fill={ACCENT} textAnchor="middle"
          fontFamily={SERIF} fontStyle="italic">agree</text>

        {/* the sentence, marked up */}
        <text x={88} y={72} fontSize="15.5" fill={INK} fontFamily={SERIF}>The box
          <tspan fill={INK_MUTED}> of old letters </tspan>
          <tspan fill={ACCENT}>was</tspan> heavy.</text>
        {/* strike the interrupting phrase — read past it */}
        <line x1={142} y1={67} x2={244} y2={67} stroke={INK} strokeWidth="1" />

        {/* bracket + label under the real subject; note under the verb */}
        <path d="M 88 84 v 6 h 49 v -6" fill="none" stroke={INK_MUTED} strokeWidth="1" />
        <text x={112} y={106} fontSize="11.5" fill={INK_MUTED} textAnchor="middle"
          fontFamily={SERIF} fontStyle="italic">subject (singular)</text>
        <text x={260} y={106} fontSize="11.5" fill={INK_MUTED} textAnchor="middle"
          fontFamily={SERIF} fontStyle="italic">was (singular)</text>

        {/* the decoy choice, squiggled like a tutor's correction */}
        <text x={88} y={150} fontSize="15" fill={INK} fontFamily={SERIF}>The box of old letters were heavy.</text>
        <path d="M 243 157 q 5 5 10 0 t 10 0 t 10 0" fill="none"
          stroke={ACCENT} strokeWidth="1.3" />
        <text x={W - 30} y={150} fontSize="12" fill={INK_MUTED} textAnchor="end"
          fontFamily={SERIF} fontStyle="italic">were matches the decoy “letters”</text>
      </svg>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════
   TRANSITION FAMILIES  (R&W Transitions)
   A typeset reference sheet: small-caps family headers over roman
   word lists, separated by hairline rules — a page from a writer's
   handbook, not colored rows. Accent carries the family names only.
   ═══════════════════════════════════════════════════════════════ */
export const TransitionMapDiagram = () => {
  const W = 560, H = 352;
  const families = [
    { name: 'CONTRAST', words: 'however · but · yet · nevertheless · on the other hand' },
    { name: 'CAUSE AND EFFECT', words: 'therefore · thus · consequently · as a result' },
    { name: 'ADDITION', words: 'also · in addition · moreover · furthermore' },
    { name: 'EXAMPLE', words: 'for example · for instance · in particular' },
    { name: 'TIME', words: 'previously · meanwhile · today · later' },
  ];
  const top = 30, groupH = 70;
  return (
    <div style={DIAGRAM_STYLE}>
      <svg viewBox={`0 0 ${W} ${H}`} style={{ maxWidth: 580, width: '100%' }}
        aria-label="Transition word reference sheet: five families — contrast, cause and effect, addition, example, and time — each listed with its common signal words, separated by hairline rules">
        {families.map((f, i) => {
          const y = top + i * groupH;
          return (
            <g key={f.name}>
              <text x={60} y={y} fontSize="12.5" letterSpacing="2" fill={ACCENT}
                fontFamily={SERIF}>{f.name}</text>
              <text x={60} y={y + 23} fontSize="14" fill={INK}
                fontFamily={SERIF}>{f.words}</text>
              {i < families.length - 1 && (
                <line x1={60} y1={y + 41} x2={500} y2={y + 41}
                  stroke={INK_MUTED} strokeWidth="0.75" opacity="0.45" />
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
};
