/**
 * Test-mechanics lesson figures — FIGURE LANGUAGE v2 (textbook ink).
 *
 * v2 rewrites of the strategy-chapter concept figures. Each is re-thought as
 * board-work rather than a reskinned flowchart: a margin-sketch decision tree
 * (module flow), typeset arithmetic with under-brackets (score composition),
 * and plain ink-outline proportion bars (time budget). Thin near-black ink,
 * serif labels, ONE orange accent per figure on the single taught element.
 * See figureLanguage.js for the full language.
 */
import React from 'react';
import { INK, INK_MUTED, ACCENT, SERIF, DIAGRAM_STYLE } from './figureLanguage';

/** Small solid arrowhead at (x, y), pointing along the direction from (fromX, fromY). */
const BranchArrowhead = ({ fromX, fromY, x, y, fill }) => {
  const a = Math.atan2(y - fromY, x - fromX);
  const len = 7, half = 3.5;
  const bx = x - len * Math.cos(a);
  const by = y - len * Math.sin(a);
  const nx = half * Math.sin(a);
  const ny = -half * Math.cos(a);
  return (
    <polygon points={`${x},${y} ${bx + nx},${by + ny} ${bx - nx},${by - ny}`} fill={fill} />
  );
};

/* ═══════════════════════════════════════════════════════════════
   ADAPTIVE MODULE FLOW  (Strategy — how the adaptive test routes)
   A decision tree sketched in a book margin: Module 1 forks by
   performance into a harder or easier Module 2. Accent on the
   branch that keeps the score ceiling open.
   ═══════════════════════════════════════════════════════════════ */
export const AdaptiveModuleFlowDiagram = () => {
  const W = 600, H = 192;
  const fork = { x: 215, y: 88 };
  const hardTip = { x: 352, y: 24 };
  const easyTip = { x: 352, y: 152 };
  return (
    <div style={DIAGRAM_STYLE}>
      <svg viewBox={`0 0 ${W} ${H}`} style={{ maxWidth: 620, width: '100%' }}
        aria-label="Decision-tree sketch of the adaptive test: Module 1, the same fixed mix for everyone, branches by performance to a harder Module 2 that keeps the top scores in reach or an easier Module 2 whose top score is capped">
        {/* Module 1 node — plain serif text, no box */}
        <text x={110} y={92} fontSize="15" fill={INK} textAnchor="middle"
          fontFamily={SERIF}>Module 1</text>
        <text x={110} y={112} fontSize="12" fill={INK_MUTED} textAnchor="middle"
          fontFamily={SERIF}>same mix for everyone</text>
        <text x={110} y={130} fontSize="12" fill={INK_MUTED} textAnchor="middle"
          fontFamily={SERIF}>easy · medium · hard</text>

        {/* stem to the fork */}
        <line x1={150} y1={fork.y} x2={fork.x} y2={fork.y} stroke={INK} strokeWidth="1.4" />
        <circle cx={fork.x} cy={fork.y} r="2.5" fill={INK} />

        {/* upper branch — raises the ceiling; the one taught element, in accent */}
        <line x1={fork.x} y1={fork.y} x2={hardTip.x} y2={hardTip.y}
          stroke={ACCENT} strokeWidth="1.4" />
        <BranchArrowhead fromX={fork.x} fromY={fork.y} x={hardTip.x} y={hardTip.y} fill={ACCENT} />
        <text x={272} y={44} fontSize="12" fill={INK_MUTED} textAnchor="middle"
          fontFamily={SERIF} fontStyle="italic">score well</text>

        {/* lower branch, in ink */}
        <line x1={fork.x} y1={fork.y} x2={easyTip.x} y2={easyTip.y}
          stroke={INK} strokeWidth="1.4" />
        <BranchArrowhead fromX={fork.x} fromY={fork.y} x={easyTip.x} y={easyTip.y} fill={INK} />
        <text x={258} y={146} fontSize="12" fill={INK_MUTED} textAnchor="middle"
          fontFamily={SERIF} fontStyle="italic">miss too many</text>

        {/* branch outcomes — plain serif nodes with the ceiling consequence beneath */}
        <text x={364} y={28} fontSize="15" fill={INK} fontFamily={SERIF}>Module 2 — harder</text>
        <text x={364} y={48} fontSize="12" fill={INK_MUTED} fontFamily={SERIF}>
          higher ceiling — top scores stay in reach</text>

        <text x={364} y={156} fontSize="15" fill={INK} fontFamily={SERIF}>Module 2 — easier</text>
        <text x={364} y={176} fontSize="12" fill={INK_MUTED} fontFamily={SERIF}>
          lower ceiling — the top score is capped</text>
      </svg>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════
   SCORE COMPOSITION  (Strategy ch 1)
   Typeset arithmetic: 200–800 + 200–800 = 400–1600, with thin
   under-brackets naming the two sections and the composite.
   Accent on the total range only.
   ═══════════════════════════════════════════════════════════════ */
export const ScoreCompositionDiagram = () => {
  const W = 456, H = 84;
  const lineY = 36;      // baseline of the arithmetic line
  const brkY = 44;       // top of the under-brackets
  const labelY = 68;     // baseline of the bracket labels
  const bracket = (x1, w) => `M ${x1} ${brkY} v 6 h ${w} v -6`;
  return (
    <div style={DIAGRAM_STYLE}>
      <svg viewBox={`0 0 ${W} ${H}`} style={{ maxWidth: 480, width: '100%' }}
        aria-label="Score composition set as arithmetic: 200 to 800 for Reading and Writing plus 200 to 800 for Math equals the 400 to 1600 composite">
        {/* the arithmetic, typeset in serif — numbers roman */}
        <text x={92} y={lineY} fontSize="19" fill={INK} textAnchor="middle"
          fontFamily={SERIF}>200–800</text>
        <text x={158} y={lineY} fontSize="19" fill={INK} textAnchor="middle"
          fontFamily={SERIF}>+</text>
        <text x={224} y={lineY} fontSize="19" fill={INK} textAnchor="middle"
          fontFamily={SERIF}>200–800</text>
        <text x={290} y={lineY} fontSize="19" fill={INK} textAnchor="middle"
          fontFamily={SERIF}>=</text>
        {/* the composite range — the one taught element, in accent */}
        <text x={376} y={lineY} fontSize="19" fill={ACCENT} textAnchor="middle"
          fontFamily={SERIF}>400–1600</text>

        {/* thin under-brackets naming each span */}
        <path d={bracket(56, 72)} fill="none" stroke={INK} strokeWidth="1" />
        <text x={92} y={labelY} fontSize="12" fill={INK_MUTED} textAnchor="middle"
          fontFamily={SERIF} fontStyle="italic">Reading &amp; Writing</text>

        <path d={bracket(188, 72)} fill="none" stroke={INK} strokeWidth="1" />
        <text x={224} y={labelY} fontSize="12" fill={INK_MUTED} textAnchor="middle"
          fontFamily={SERIF} fontStyle="italic">Math</text>

        <path d={bracket(334, 84)} fill="none" stroke={INK} strokeWidth="1" />
        <text x={376} y={labelY} fontSize="12" fill={INK_MUTED} textAnchor="middle"
          fontFamily={SERIF} fontStyle="italic">composite score</text>
      </svg>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════
   MODULE TIME BUDGET  (Strategy ch 2 — pacing)
   Plain ink-outline bars proportional to 32 and 35 minutes, each
   divided into one cell per question so Math's wider cells show
   the slower pace. Accent on the per-question pace numbers.
   ═══════════════════════════════════════════════════════════════ */
export const ModuleTimeBudgetDiagram = () => {
  const W = 520, H = 196;
  const barX = 40;
  const barH = 22;
  const maxW = 440;                      // 35 minutes at full width
  const rwW = Math.round(maxW * (32 / 35));   // 402 — proportional to 32 minutes
  const cellTicks = (x, y, width, count) =>
    Array.from({ length: count - 1 }, (_, i) => (
      <line key={i}
        x1={x + (width * (i + 1)) / count} y1={y}
        x2={x + (width * (i + 1)) / count} y2={y + barH}
        stroke={INK_MUTED} strokeWidth="0.75" />
    ));
  return (
    <div style={DIAGRAM_STYLE}>
      <svg viewBox={`0 0 ${W} ${H}`} style={{ maxWidth: 540, width: '100%' }}
        aria-label="Time-budget bars proportional to module length: Reading and Writing gives 27 questions in 32 minutes, about 1 minute 10 seconds per question; Math gives 22 questions in 35 minutes, about 1 minute 35 seconds per question">
        {/* Reading & Writing — 32 min */}
        <text x={barX} y={30} fontSize="13.5" fill={INK}
          fontFamily={SERIF}>{'Reading & Writing — 27 questions, 32 min'}</text>
        <rect x={barX} y={40} width={rwW} height={barH} fill="none"
          stroke={INK} strokeWidth="1.4" />
        {cellTicks(barX, 40, rwW, 27)}
        <text x={barX} y={86} fontSize="12.5" fill={INK_MUTED}
          fontFamily={SERIF} fontStyle="italic">about{' '}
          <tspan fill={ACCENT} fontStyle="normal">1:10</tspan> per question</text>

        {/* Math — 35 min */}
        <text x={barX} y={128} fontSize="13.5" fill={INK}
          fontFamily={SERIF}>{'Math — 22 questions, 35 min'}</text>
        <rect x={barX} y={138} width={maxW} height={barH} fill="none"
          stroke={INK} strokeWidth="1.4" />
        {cellTicks(barX, 138, maxW, 22)}
        <text x={barX} y={184} fontSize="12.5" fill={INK_MUTED}
          fontFamily={SERIF} fontStyle="italic">about{' '}
          <tspan fill={ACCENT} fontStyle="normal">1:35</tspan> per question</text>
      </svg>
    </div>
  );
};
