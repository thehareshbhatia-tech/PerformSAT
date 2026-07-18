/**
 * dataFigures.jsx — FIGURE v2 rewrites (textbook ink style) for the
 * data / number-sense group of Learn-tab lesson figures:
 *
 *   MeanMedianDiagram · ScatterplotModelDiagram ·
 *   InequalityNumberLineDiagram · PercentChangeDiagram
 *
 * Design language: src/components/learn/visuals/figureLanguage.js
 * (thin near-black ink, one orange accent on the taught element,
 * serif labels, no grids / cards / pills / gradients).
 */
import React from 'react';
import {
  INK, INK_MUTED, ACCENT, SERIF, DIAGRAM_STYLE, AxisArrow, XTick,
} from './figureLanguage';

/** Small solid arrowhead at (x, y), rotated `angle` degrees (0 = pointing
 *  right), in any ink. Same 7 x 3.5 geometry as AxisArrow — used where an
 *  arrowhead must point left, sit on a curve, or take the accent color. */
const Head = ({ x, y, angle, color }) => (
  <g transform={`translate(${x} ${y}) rotate(${angle})`}>
    <polygon points="0,0 -7,-3.5 -7,3.5" fill={color} />
  </g>
);

/* ═══════════════════════════════════════════════════════════════
   MEAN / MEDIAN / OUTLIER — a dot plot on a number line.
   Nine ink dots, one far right at 25. The median keeps its place
   at 7 (ink tick); the mean sits to its right at ≈ 8.1, drawn as
   an accent balance-point fulcrum dragged toward the outlier.
   ═══════════════════════════════════════════════════════════════ */
export const MeanMedianDiagram = () => {
  const data = [2, 3, 4, 5, 7, 8, 9, 10, 25];
  const mean = data.reduce((a, b) => a + b, 0) / data.length; // ≈ 8.1
  const median = 7;
  const x = (v) => 46 + v * 18;
  const lineY = 66;
  const mx = x(mean);

  return (
    <div style={DIAGRAM_STYLE}>
      <svg viewBox="0 0 560 112" style={{ maxWidth: 560, width: '100%' }}
        aria-label="Dot plot of nine values with one outlier at 25: the median stays at 7 while the mean is pulled toward the outlier, to about 8.1">
        {/* number line */}
        <line x1={36} y1={lineY} x2={512} y2={lineY} stroke={INK} strokeWidth="1.25" />
        <AxisArrow x={520} y={lineY} dir="right" />
        <Head x={28} y={lineY} angle={180} color={INK} />
        {[0, 5, 10, 15, 20, 25].map((t) => (
          <XTick key={t} x={x(t)} axisY={lineY} label={t} />
        ))}

        {/* the data, as ink dots above the line */}
        {data.map((v) => (
          <circle key={v} cx={x(v)} cy={lineY - 9} r="3.5" fill={INK} />
        ))}
        <text x={x(25)} y={40} fontSize="12" fill={INK_MUTED} textAnchor="middle"
          fontFamily={SERIF} fontStyle="italic">outlier</text>

        {/* median — a small ink tick above its dot */}
        <line x1={x(median)} y1={34} x2={x(median)} y2={50} stroke={INK} strokeWidth="1" />
        <text x={x(median)} y={26} fontSize="12.5" fill={INK} textAnchor="middle"
          fontFamily={SERIF} fontStyle="italic">median = {median}</text>

        {/* mean — the taught element: an accent balance point under the
            line, dragged to the right of the median by the outlier */}
        <polygon points={`${mx},68 ${mx - 6.5},80 ${mx + 6.5},80`} fill={ACCENT} />
        <text x={mx} y={102} fontSize="12.5" fill={ACCENT} textAnchor="middle"
          fontFamily={SERIF} fontStyle="italic">mean ≈ {mean.toFixed(1)}</text>
      </svg>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════
   SCATTERPLOT & MODEL — ink data dots, the fitted line in accent,
   one point's residual as a thin dashed vertical down to the line,
   labeled actual / predicted.
   ═══════════════════════════════════════════════════════════════ */
export const ScatterplotModelDiagram = () => {
  const oX = 52, oY = 306, sc = 42;
  const px = (x, y) => [oX + x * sc, oY - y * sc];
  const pts = [
    [1, 1.8], [2, 2.0], [2.6, 3.1], [3.5, 2.9], [4.2, 3.9],
    [5, 3.6], [6.5, 4.6], [7.2, 5.7], [7.8, 5.3],
  ];
  const m = 0.55, b = 1.2;
  const hx = 5.8, hyActual = 5.45, hyPred = m * hx + b;
  const [ax, ay] = px(hx, hyActual);
  const [, qy] = px(hx, hyPred);
  const [l1x, l1y] = px(0.4, m * 0.4 + b);
  const [l2x, l2y] = px(8.4, m * 8.4 + b);

  return (
    <div style={DIAGRAM_STYLE}>
      <svg viewBox="0 0 470 330" style={{ maxWidth: 480, width: '100%' }}
        aria-label="Scatterplot with a fitted line: the dots are the data, the line is the model, and a thin dashed vertical marks one point's gap between its actual value and the value the line predicts">
        {/* axes — first quadrant, no grid, no ticks (none are read) */}
        <line x1={oX} y1={oY} x2={436} y2={oY} stroke={INK} strokeWidth="1.25" />
        <AxisArrow x={444} y={oY} dir="right" />
        <line x1={oX} y1={oY} x2={oX} y2={54} stroke={INK} strokeWidth="1.25" />
        <AxisArrow x={oX} y={46} dir="up" />
        <text x={452} y={oY + 4} fontSize="14" fill={INK} fontFamily={SERIF} fontStyle="italic">x</text>
        <text x={oX - 4} y={38} fontSize="14" fill={INK} fontFamily={SERIF} fontStyle="italic">y</text>

        {/* the model — the taught element, in accent */}
        <line x1={l1x} y1={l1y} x2={l2x} y2={l2y} stroke={ACCENT} strokeWidth="1.6" />

        {/* the data, in ink */}
        {pts.map(([x, y], i) => {
          const [cx, cy] = px(x, y);
          return <circle key={i} cx={cx} cy={cy} r="3" fill={INK} />;
        })}

        {/* one point's residual: dashed drop from the dot to the line */}
        <line x1={ax} y1={ay + 4.5} x2={ax} y2={qy} stroke={INK} strokeWidth="1"
          strokeDasharray="3 2.5" />
        <circle cx={ax} cy={ay} r="3.5" fill={INK} />
        <text x={ax + 9} y={ay + 4} fontSize="12.5" fill={INK} fontFamily={SERIF}
          fontStyle="italic">actual</text>
        <text x={ax + 9} y={qy + 10} fontSize="12.5" fill={INK} fontFamily={SERIF}
          fontStyle="italic">predicted</text>
      </svg>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════
   INEQUALITY NUMBER LINE — two clean number lines.
   x > 2: open circle at 2, solution ray runs right into an accent
   arrowhead. x ≤ −1: closed circle at −1, ray runs left. The ray,
   its endpoint circle, and its arrowhead are the one accent per row.
   ═══════════════════════════════════════════════════════════════ */
export const InequalityNumberLineDiagram = () => {
  const px = (v) => 280 + v * 52;
  const ticks = [-4, -3, -2, -1, 0, 1, 2, 3, 4];
  const num = (t) => (t < 0 ? `−${-t}` : t);

  const Row = ({ y, openAt }) => (
    <g>
      {ticks.map((t) => (t === openAt
        ? (
          <text key={t} x={px(t)} y={y + 18} fontSize="12.5" fill={INK}
            textAnchor="middle" fontFamily={SERIF}>{num(t)}</text>
        )
        : <XTick key={t} x={px(t)} axisY={y} label={num(t)} />))}
    </g>
  );

  return (
    <div style={DIAGRAM_STYLE}>
      <svg viewBox="0 0 560 180" style={{ maxWidth: 580, width: '100%' }}
        aria-label="Two number lines: x greater than 2 shown as an open circle at 2 with a ray to the right, and x less than or equal to negative 1 shown as a closed circle at negative 1 with a ray to the left">
        {/* ── row 1: x > 2 ── */}
        <text x={60} y={30} fontSize="14.5" fill={INK} fontFamily={SERIF}>
          <tspan fontStyle="italic">x</tspan> &gt; 2</text>
        {/* line drawn in two pieces so the open circle is a true gap */}
        <line x1={60} y1={64} x2={379.5} y2={64} stroke={INK} strokeWidth="1.25" />
        <line x1={388.5} y1={64} x2={508} y2={64} stroke={INK} strokeWidth="1.25" />
        <Head x={52} y={64} angle={180} color={INK} />
        <Row y={64} openAt={2} />
        {/* solution ray, open endpoint — the taught element */}
        <line x1={388.5} y1={64} x2={509} y2={64} stroke={ACCENT} strokeWidth="2" />
        <Head x={516} y={64} angle={0} color={ACCENT} />
        <circle cx={px(2)} cy={64} r="4.5" fill="none" stroke={ACCENT} strokeWidth="1.6" />
        <text x={px(2)} y={48} fontSize="11.5" fill={INK_MUTED} textAnchor="middle"
          fontFamily={SERIF} fontStyle="italic">open</text>

        {/* ── row 2: x ≤ −1 ── */}
        <text x={60} y={118} fontSize="14.5" fill={INK} fontFamily={SERIF}>
          <tspan fontStyle="italic">x</tspan> ≤ −1</text>
        <line x1={60} y1={150} x2={508} y2={150} stroke={INK} strokeWidth="1.25" />
        <AxisArrow x={516} y={150} dir="right" />
        <Row y={150} />
        {/* solution ray, closed endpoint — the taught element */}
        <line x1={59} y1={150} x2={223.5} y2={150} stroke={ACCENT} strokeWidth="2" />
        <Head x={52} y={150} angle={180} color={ACCENT} />
        <circle cx={px(-1)} cy={150} r="4.5" fill={ACCENT} />
        <text x={px(-1)} y={134} fontSize="11.5" fill={INK_MUTED} textAnchor="middle"
          fontFamily={SERIF} fontStyle="italic">closed</text>
      </svg>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════
   PERCENT CHANGE — board-work, not boxes: 80 carried to 100 by an
   accent × 1.25 arrow over the top, and back by an ink ÷ 1.25
   arrow beneath. Same 80 → 100 numbers the v1 figure used.
   ═══════════════════════════════════════════════════════════════ */
export const PercentChangeDiagram = () => {
  // arrowheads take the curve's end tangent (end minus control point)
  const aFwd = Math.atan2(56 - 10, 264 - 180) * 180 / Math.PI;
  const aBack = Math.atan2(92 - 138, 96 - 180) * 180 / Math.PI;

  return (
    <div style={DIAGRAM_STYLE}>
      <svg viewBox="0 0 360 142" style={{ maxWidth: 380, width: '100%' }}
        aria-label="Percent change written as a multiplier: 80 times 1.25 gives 100, and dividing 100 by 1.25 returns to 80">
        {/* the two values, typeset large */}
        <text x={64} y={76} fontSize="27" fill={INK} textAnchor="middle"
          fontFamily={SERIF}>80</text>
        <text x={296} y={76} fontSize="27" fill={INK} textAnchor="middle"
          fontFamily={SERIF}>100</text>

        {/* forward: × 1.25 — the taught element, in accent */}
        <path d="M 94 56 Q 180 10 264 56" fill="none" stroke={ACCENT} strokeWidth="1.4" />
        <Head x={264} y={56} angle={aFwd} color={ACCENT} />
        <text x={180} y={24} fontSize="15" fill={ACCENT} textAnchor="middle"
          fontFamily={SERIF}>× 1.25</text>

        {/* back: ÷ 1.25, in ink beneath */}
        <path d="M 266 92 Q 180 138 96 92" fill="none" stroke={INK} strokeWidth="1.25" />
        <Head x={96} y={92} angle={aBack} color={INK} />
        <text x={180} y={134} fontSize="15" fill={INK} textAnchor="middle"
          fontFamily={SERIF}>÷ 1.25</text>
      </svg>
    </div>
  );
};
