/**
 * coordinateFigures.jsx — FIGURE v2 (textbook ink) rewrites of the Learn-tab
 * coordinate-plane lesson figures. See src/components/learn/visuals/
 * figureLanguage.js for the full design language. Thin near-black ink for
 * structure, one orange accent on the taught element, serif labels, no grid,
 * only the ticks each figure uses.
 *
 * Exports (component names owned by the v1 registry in LessonVisualRenderer):
 *   ParallelLinesDiagram, PerpendicularLinesDiagram, SlopeFromGraphDiagram,
 *   SlopeFromTableDiagram, YInterceptDiagram, ParabolaFromGraphDiagram,
 *   HorizontalShiftDiagram, VerticalShiftDiagram, ExponentialGrowthDiagram,
 *   SystemsIntersectionDiagram
 */
import React from 'react';
import {
  INK, INK_MUTED, ACCENT, SERIF, DIAGRAM_STYLE, AxisArrow, XTick, YTick,
} from './figureLanguage';

/** Shared bare axes: ink lines + small arrowheads + italic x / y letters. */
function PlaneAxes({ xStart, xEnd, yStart, yEnd, oX, oY }) {
  return (
    <g>
      <line x1={xStart} y1={oY} x2={xEnd} y2={oY} stroke={INK} strokeWidth="1.25" />
      <AxisArrow x={xEnd} y={oY} dir="right" />
      <line x1={oX} y1={yStart} x2={oX} y2={yEnd} stroke={INK} strokeWidth="1.25" />
      <AxisArrow x={oX} y={yEnd} dir="up" />
      <text x={xEnd + 4} y={oY + 4} fontSize="14" fill={INK} fontFamily={SERIF}
        fontStyle="italic">x</text>
      <text x={oX - 4} y={yEnd - 6} fontSize="14" fill={INK} fontFamily={SERIF}
        fontStyle="italic">y</text>
    </g>
  );
}

/** Accent difference arrow arced between two column centers of a table. */
function DiffArrow({ x1, x2, baseY, below, label }) {
  const mid = (x1 + x2) / 2;
  const ctrlY = below ? baseY + 22 : baseY - 22;
  const ang = (Math.atan2(baseY - ctrlY, x2 - mid) * 180) / Math.PI;
  const labelY = below ? baseY + 36 : baseY - 30;
  return (
    <g>
      <path d={`M ${x1} ${baseY} Q ${mid} ${ctrlY} ${x2} ${baseY}`}
        fill="none" stroke={ACCENT} strokeWidth="1.3" />
      <polygon points="0,0 -7,-2.6 -7,2.6" fill={ACCENT}
        transform={`translate(${x2}, ${baseY}) rotate(${ang})`} />
      <text x={mid} y={labelY} fontSize="12.5" fill={ACCENT} textAnchor="middle"
        fontFamily={SERIF}>{label}</text>
    </g>
  );
}

/* ═══════════════════════════════════════════════════════════════
   PARALLEL LINES — y = 2x + 1 and y = 2x − 2 in ink; the taught
   element (equal slope) carried by twin accent slope triangles.
   ═══════════════════════════════════════════════════════════════ */
export const ParallelLinesDiagram = () => {
  const oX = 150, oY = 205, sc = 34;
  const px = (x, y) => [oX + x * sc, oY - y * sc];

  const [l1ax, l1ay] = px(-2.4, -3.8);
  const [l1bx, l1by] = px(2.05, 5.1);
  const [l2ax, l2ay] = px(-0.9, -3.8);
  const [l2bx, l2by] = px(3.55, 5.1);

  // Slope triangle on y = 2x + 1: (0.5, 2) → (1.5, 2) → (1.5, 4)
  const [t1ax, t1ay] = px(0.5, 2);
  const [t1kx, t1ky] = px(1.5, 2);
  const [t1bx, t1by] = px(1.5, 4);
  // Slope triangle on y = 2x − 2: (1.5, 1) → (2.5, 1) → (2.5, 3)
  const [t2ax, t2ay] = px(1.5, 1);
  const [t2kx, t2ky] = px(2.5, 1);
  const [t2bx, t2by] = px(2.5, 3);

  return (
    <div style={DIAGRAM_STYLE}>
      <svg viewBox="0 0 440 360" style={{ maxWidth: 460, width: '100%' }}
        aria-label="Two parallel lines, y equals 2x plus 1 and y equals 2x minus 2, each with a matching slope triangle rising 2 for every run of 1">
        <PlaneAxes xStart={36} xEnd={412} yStart={330} yEnd={26} oX={oX} oY={oY} />

        {/* the two lines, in ink */}
        <line x1={l1ax} y1={l1ay} x2={l1bx} y2={l1by} stroke={INK} strokeWidth="1.6" />
        <line x1={l2ax} y1={l2ay} x2={l2bx} y2={l2by} stroke={INK} strokeWidth="1.6" />

        {/* equation labels */}
        <text x={206} y={42} fontSize="13" fill={INK} textAnchor="end" fontFamily={SERIF}>
          <tspan fontStyle="italic">y</tspan> = 2<tspan fontStyle="italic">x</tspan> + 1</text>
        <text x={280} y={48} fontSize="13" fill={INK} fontFamily={SERIF}>
          <tspan fontStyle="italic">y</tspan> = 2<tspan fontStyle="italic">x</tspan> − 2</text>

        {/* twin slope triangles — the taught element, in accent */}
        <path d={`M ${t1ax} ${t1ay} L ${t1kx} ${t1ky} L ${t1bx} ${t1by}`} fill="none"
          stroke={ACCENT} strokeWidth="1.4" />
        <rect x={t1kx - 8} y={t1ky - 8} width="8" height="8" fill="none"
          stroke={ACCENT} strokeWidth="1" />
        <text x={(t1ax + t1kx) / 2} y={t1ay + 15} fontSize="13" fill={ACCENT}
          textAnchor="middle" fontFamily={SERIF}>1</text>
        <text x={t1kx + 7} y={(t1ky + t1by) / 2 + 4} fontSize="13" fill={ACCENT}
          fontFamily={SERIF}>2</text>

        <path d={`M ${t2ax} ${t2ay} L ${t2kx} ${t2ky} L ${t2bx} ${t2by}`} fill="none"
          stroke={ACCENT} strokeWidth="1.4" />
        <rect x={t2kx - 8} y={t2ky - 8} width="8" height="8" fill="none"
          stroke={ACCENT} strokeWidth="1" />
        <text x={(t2ax + t2kx) / 2} y={t2ay + 15} fontSize="13" fill={ACCENT}
          textAnchor="middle" fontFamily={SERIF}>1</text>
        <text x={t2kx + 7} y={(t2ky + t2by) / 2 + 4} fontSize="13" fill={ACCENT}
          fontFamily={SERIF}>2</text>
      </svg>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════
   PERPENDICULAR LINES — y = 2x and y = −½x + 5 crossing at (2, 4);
   ink slope triangles carry 2 and −½, the accent right-angle mark
   at the crossing is the taught element.
   ═══════════════════════════════════════════════════════════════ */
export const PerpendicularLinesDiagram = () => {
  const oX = 110, oY = 225, sc = 34;
  const px = (x, y) => [oX + x * sc, oY - y * sc];

  const [l1ax, l1ay] = px(-0.9, -1.8);
  const [l1bx, l1by] = px(2.9, 5.8);
  const [l2ax, l2ay] = px(-1.6, 5.8);
  const [l2bx, l2by] = px(6.4, 1.8);

  // intersection (2, 4), right-angle mark set into the right-hand wedge
  const [ix, iy] = px(2, 4);
  const s = 12, r5 = Math.sqrt(5);
  const u1 = [s / r5, (-2 * s) / r5];   // along y = 2x, up-right
  const u2 = [(2 * s) / r5, s / r5];    // along y = −½x + 5, down-right
  const sq = [
    [ix + u1[0], iy + u1[1]],
    [ix + u1[0] + u2[0], iy + u1[1] + u2[1]],
    [ix + u2[0], iy + u2[1]],
  ];

  // ink slope triangle on y = 2x: (0.5, 1) → (1.5, 1) → (1.5, 3)
  const [t1ax, t1ay] = px(0.5, 1);
  const [t1kx, t1ky] = px(1.5, 1);
  const [t1bx, t1by] = px(1.5, 3);
  // ink slope triangle on y = −½x + 5: (3, 3.5) → (5, 3.5) → (5, 2.5)
  const [t2ax, t2ay] = px(3, 3.5);
  const [t2kx, t2ky] = px(5, 3.5);
  const [t2bx, t2by] = px(5, 2.5);

  return (
    <div style={DIAGRAM_STYLE}>
      <svg viewBox="0 0 420 320" style={{ maxWidth: 440, width: '100%' }}
        aria-label="Perpendicular lines y equals 2x and y equals negative one half x plus 5 crossing at a right angle marked with a small square, with slope triangles showing slopes 2 and negative one half">
        <PlaneAxes xStart={34} xEnd={392} yStart={292} yEnd={26} oX={oX} oY={oY} />

        {/* the two lines, in ink */}
        <line x1={l1ax} y1={l1ay} x2={l1bx} y2={l1by} stroke={INK} strokeWidth="1.6" />
        <line x1={l2ax} y1={l2ay} x2={l2bx} y2={l2by} stroke={INK} strokeWidth="1.6" />

        {/* equation labels */}
        <text x={216} y={36} fontSize="13" fill={INK} fontFamily={SERIF}>
          <tspan fontStyle="italic">y</tspan> = 2<tspan fontStyle="italic">x</tspan></text>
        <text x={338} y={184} fontSize="13" fill={INK} textAnchor="middle" fontFamily={SERIF}>
          <tspan fontStyle="italic">y</tspan> = −½<tspan fontStyle="italic">x</tspan> + 5</text>

        {/* ink slope triangles */}
        <path d={`M ${t1ax} ${t1ay} L ${t1kx} ${t1ky} L ${t1bx} ${t1by}`} fill="none"
          stroke={INK} strokeWidth="1" />
        <text x={(t1ax + t1kx) / 2} y={t1ay + 15} fontSize="12.5" fill={INK}
          textAnchor="middle" fontFamily={SERIF}>1</text>
        <text x={t1kx + 7} y={(t1ky + t1by) / 2 + 4} fontSize="12.5" fill={INK}
          fontFamily={SERIF}>2</text>

        <path d={`M ${t2ax} ${t2ay} L ${t2kx} ${t2ky} L ${t2bx} ${t2by}`} fill="none"
          stroke={INK} strokeWidth="1" />
        <text x={(t2ax + t2kx) / 2} y={t2ay - 10} fontSize="12.5" fill={INK}
          textAnchor="middle" fontFamily={SERIF}>2</text>
        <text x={t2kx + 7} y={(t2ky + t2by) / 2 + 4} fontSize="12.5" fill={INK}
          fontFamily={SERIF}>−1</text>

        {/* right-angle mark at the crossing — the taught element, in accent */}
        <path d={`M ${sq[0][0]} ${sq[0][1]} L ${sq[1][0]} ${sq[1][1]} L ${sq[2][0]} ${sq[2][1]}`}
          fill="none" stroke={ACCENT} strokeWidth="1.4" />
      </svg>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════
   SLOPE FROM GRAPH — approved v2 exemplar, moved verbatim.
   Line through (0, 4) and (5, 1) with an accent slope triangle.
   ═══════════════════════════════════════════════════════════════ */
export const SlopeFromGraphDiagram = () => {
  const W = 440, H = 340;
  const oX = 70, oY = 290, sc = 46;
  const px = (x, y) => [oX + x * sc, oY - y * sc];

  const [ax, ay] = px(0, 4);   // point (0, 4)
  const [bx, by] = px(5, 1);   // point (5, 1)
  const [kx, ky] = px(5, 4);   // corner of the slope triangle
  const [l1x, l1y] = px(-0.8, 4.48);
  const [l2x, l2y] = px(6.6, 0.04);

  return (
    <div style={DIAGRAM_STYLE}>
      <svg viewBox={`0 0 ${W} ${H}`} style={{ maxWidth: 440, width: '100%' }}
        aria-label="Slope from graph diagram showing rise over run calculation with points (0,4) and (5,1)">
        {/* axes */}
        <line x1={oX - 46} y1={oY} x2={W - 24} y2={oY} stroke={INK} strokeWidth="1.25" />
        <AxisArrow x={W - 24} y={oY} dir="right" />
        <line x1={oX} y1={oY + 22} x2={oX} y2={26} stroke={INK} strokeWidth="1.25" />
        <AxisArrow x={oX} y={26} dir="up" />
        <text x={W - 20} y={oY + 4} fontSize="14" fill={INK} fontFamily={SERIF} fontStyle="italic">x</text>
        <text x={oX - 4} y={20} fontSize="14" fill={INK} fontFamily={SERIF} fontStyle="italic">y</text>

        {/* only the ticks the figure uses */}
        <line x1={px(5, 0)[0]} y1={oY - 4} x2={px(5, 0)[0]} y2={oY + 4} stroke={INK} strokeWidth="1" />
        <text x={px(5, 0)[0]} y={oY + 18} fontSize="12.5" fill={INK} textAnchor="middle" fontFamily={SERIF}>5</text>
        <line x1={oX - 4} y1={px(0, 1)[1]} x2={oX + 4} y2={px(0, 1)[1]} stroke={INK} strokeWidth="1" />
        <text x={oX - 9} y={px(0, 1)[1] + 4} fontSize="12.5" fill={INK} textAnchor="end" fontFamily={SERIF}>1</text>
        <line x1={oX - 4} y1={px(0, 4)[1]} x2={oX + 4} y2={px(0, 4)[1]} stroke={INK} strokeWidth="1" />
        <text x={oX - 9} y={px(0, 4)[1] + 4} fontSize="12.5" fill={INK} textAnchor="end" fontFamily={SERIF}>4</text>

        {/* the line, in ink */}
        <line x1={l1x} y1={l1y} x2={l2x} y2={l2y} stroke={INK} strokeWidth="1.6" />

        {/* slope triangle — the one taught element, in accent */}
        <path d={`M ${ax} ${ay} L ${kx} ${ky} L ${bx} ${by}`} fill="none"
          stroke={ACCENT} strokeWidth="1.4" />
        <rect x={kx - 9} y={ky} width="9" height="9" fill="none" stroke={ACCENT} strokeWidth="1" />
        <text x={(ax + kx) / 2} y={ay - 9} fontSize="13.5" fill={ACCENT} textAnchor="middle" fontFamily={SERIF}>
          <tspan fontStyle="italic">Δx</tspan> = 5</text>
        <text x={kx + 10} y={(ky + by) / 2 + 4} fontSize="13.5" fill={ACCENT} fontFamily={SERIF}>
          <tspan fontStyle="italic">Δy</tspan> = −3</text>

        {/* points as small ink dots with plain coordinate labels */}
        <circle cx={ax} cy={ay} r="3.5" fill={INK} />
        <circle cx={bx} cy={by} r="3.5" fill={INK} />
        <text x={ax + 8} y={ay - 12} fontSize="13" fill={INK} fontFamily={SERIF}>(0, 4)</text>
        <text x={bx - 8} y={by + 22} fontSize="13" fill={INK} textAnchor="end" fontFamily={SERIF}>(5, 1)</text>
      </svg>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════
   SLOPE FROM TABLE — thin ink rules and serif numerals; accent
   arrows above and below show the constant +2 in x and +3 in y.
   ═══════════════════════════════════════════════════════════════ */
export const SlopeFromTableDiagram = () => {
  const xs = [1, 3, 5, 7];
  const ys = [2, 5, 8, 11];
  const tX = 42, tY = 54, headW = 44, colW = 58, rowH = 34;
  const tW = headW + xs.length * colW;             // 276
  const centers = xs.map((_, i) => tX + headW + i * colW + colW / 2);
  const xRowY = tY + rowH * 0.5 + 5;
  const yRowY = tY + rowH * 1.5 + 5;

  return (
    <div style={DIAGRAM_STYLE}>
      <svg viewBox="0 0 360 180" style={{ maxWidth: 380, width: '100%' }}
        aria-label="Table of x values 1, 3, 5, 7 and y values 2, 5, 8, 11 with accent arrows showing a constant change of plus 2 in x and plus 3 in y">
        {/* thin ink rules */}
        {[0, 1, 2].map((i) => (
          <line key={`h${i}`} x1={tX} y1={tY + i * rowH} x2={tX + tW} y2={tY + i * rowH}
            stroke={INK} strokeWidth="1" />
        ))}
        {[0, 1, 2, 3, 4, 5].map((i) => {
          const x = i === 0 ? tX : tX + headW + (i - 1) * colW;
          return (
            <line key={`v${i}`} x1={x} y1={tY} x2={x} y2={tY + 2 * rowH}
              stroke={INK} strokeWidth="1" />
          );
        })}

        {/* header column: italic variables */}
        <text x={tX + headW / 2} y={xRowY} fontSize="14" fill={INK} textAnchor="middle"
          fontFamily={SERIF} fontStyle="italic">x</text>
        <text x={tX + headW / 2} y={yRowY} fontSize="14" fill={INK} textAnchor="middle"
          fontFamily={SERIF} fontStyle="italic">y</text>

        {/* values: roman serif numerals */}
        {xs.map((v, i) => (
          <text key={`x${i}`} x={centers[i]} y={xRowY} fontSize="13.5" fill={INK}
            textAnchor="middle" fontFamily={SERIF}>{v}</text>
        ))}
        {ys.map((v, i) => (
          <text key={`y${i}`} x={centers[i]} y={yRowY} fontSize="13.5" fill={INK}
            textAnchor="middle" fontFamily={SERIF}>{v}</text>
        ))}

        {/* constant differences — the taught element, in accent */}
        {centers.slice(0, -1).map((c, i) => (
          <DiffArrow key={`dx${i}`} x1={c} x2={centers[i + 1]} baseY={tY - 4}
            below={false} label="+2" />
        ))}
        {centers.slice(0, -1).map((c, i) => (
          <DiffArrow key={`dy${i}`} x1={c} x2={centers[i + 1]} baseY={tY + 2 * rowH + 4}
            below label="+3" />
        ))}
      </svg>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════
   Y-INTERCEPT — the line y = 2x + 3 in ink; the crossing point
   (0, 3) on the y-axis is the taught element, in accent.
   ═══════════════════════════════════════════════════════════════ */
export const YInterceptDiagram = () => {
  const oX = 170, oY = 250, sc = 34;
  const px = (x, y) => [oX + x * sc, oY - y * sc];

  const [lax, lay] = px(-2.5, -2);
  const [lbx, lby] = px(1.6, 6.2);
  const [bx, by] = px(0, 3);

  return (
    <div style={DIAGRAM_STYLE}>
      <svg viewBox="0 0 400 350" style={{ maxWidth: 420, width: '100%' }}
        aria-label="Line y equals 2x plus 3 crossing the y-axis at the point (0, 3), the y-intercept">
        <PlaneAxes xStart={40} xEnd={372} yStart={322} yEnd={26} oX={oX} oY={oY} />

        {/* the line, in ink */}
        <line x1={lax} y1={lay} x2={lbx} y2={lby} stroke={INK} strokeWidth="1.6" />
        <text x={232} y={48} fontSize="13" fill={INK} fontFamily={SERIF}>
          <tspan fontStyle="italic">y</tspan> = 2<tspan fontStyle="italic">x</tspan> + 3</text>

        {/* the y-intercept — the taught element, in accent */}
        <circle cx={bx} cy={by} r="3.5" fill={ACCENT} />
        <text x={bx + 11} y={by + 12} fontSize="13" fill={ACCENT} fontFamily={SERIF}>(0, 3)</text>
      </svg>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════
   PARABOLA FROM GRAPH — y = 2(x − 2)² − 3 as one smooth ink path;
   dashed axis of symmetry, ink mirror points, accent vertex.
   ═══════════════════════════════════════════════════════════════ */
export const ParabolaFromGraphDiagram = () => {
  const oX = 120, oY = 270, scX = 42, scY = 26;
  const px = (x, y) => [oX + x * scX, oY - y * scY];

  // Exact quadratic Bezier for y = 2(x − 2)² − 3 on x ∈ [−0.25, 4.25]
  const [p0x, p0y] = px(-0.25, 7.125);
  const [p2x, p2y] = px(4.25, 7.125);
  const [pcx, pcy] = px(2, -13.125);

  const [vx, vy] = px(2, -3);
  const [ax, ay] = px(0, 5);
  const [mx, my] = px(4, 5);

  return (
    <div style={DIAGRAM_STYLE}>
      <svg viewBox="0 0 470 390" style={{ maxWidth: 500, width: '100%' }}
        aria-label="Parabola y equals 2 times (x minus 2) squared minus 3 with its vertex (2, negative 3) in accent, dashed axis of symmetry x equals 2, and mirror points (0, 5) and (4, 5)">
        <PlaneAxes xStart={40} xEnd={430} yStart={375} yEnd={30} oX={oX} oY={oY} />

        {/* dashed axis of symmetry */}
        <line x1={vx} y1={74} x2={vx} y2={343} stroke={INK_MUTED} strokeWidth="1"
          strokeDasharray="4 3" />
        <text x={vx + 6} y={82} fontSize="12.5" fill={INK_MUTED} fontFamily={SERIF}>
          <tspan fontStyle="italic">x</tspan> = 2</text>

        {/* the parabola, one smooth ink path */}
        <path d={`M ${p0x} ${p0y} Q ${pcx} ${pcy} ${p2x} ${p2y}`} fill="none"
          stroke={INK} strokeWidth="1.6" />
        <text x={306} y={80} fontSize="13" fill={INK} fontFamily={SERIF}>
          <tspan fontStyle="italic">y</tspan> = 2(<tspan fontStyle="italic">x</tspan> − 2)² − 3</text>

        {/* mirror points, plain ink */}
        <circle cx={ax} cy={ay} r="3.5" fill={INK} />
        <circle cx={mx} cy={my} r="3.5" fill={INK} />
        <text x={ax + 9} y={ay - 3} fontSize="13" fill={INK} fontFamily={SERIF}>(0, 5)</text>
        <text x={mx - 9} y={my - 3} fontSize="13" fill={INK} textAnchor="end"
          fontFamily={SERIF}>(4, 5)</text>

        {/* the vertex — the taught element, in accent */}
        <circle cx={vx} cy={vy} r="3.5" fill={ACCENT} />
        <text x={vx} y={vy + 22} fontSize="13" fill={ACCENT} textAnchor="middle"
          fontFamily={SERIF}>(2, −3)</text>
      </svg>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════
   HORIZONTAL SHIFT — f(x) dashed, f(x − 2) solid ink; the accent
   arrow between matching points is the taught element.
   ═══════════════════════════════════════════════════════════════ */
export const HorizontalShiftDiagram = () => {
  const oX = 150, oY = 240, sc = 34;
  const px = (x, y) => [oX + x * sc, oY - y * sc];

  // f(x) = x²/2 on [−3, 3] and f(x − 2) on [−1, 5], exact Beziers
  const [o0x, o0y] = px(-3, 4.5);
  const [o2x, o2y] = px(3, 4.5);
  const [ocx, ocy] = px(0, -4.5);
  const [s0x, s0y] = px(-1, 4.5);
  const [s2x, s2y] = px(5, 4.5);
  const [scx, scy] = px(2, -4.5);

  // arrow between matching points: (2, 2) on f to (4, 2) on the image
  const [aax, aay] = px(2, 2);
  const [abx, aby] = px(4, 2);

  return (
    <div style={DIAGRAM_STYLE}>
      <svg viewBox="0 0 400 290" style={{ maxWidth: 440, width: '100%' }}
        aria-label="The curve f of x dashed, and the same curve shifted 2 units right as f of (x minus 2), with an accent arrow showing the shift">
        <PlaneAxes xStart={30} xEnd={372} yStart={268} yEnd={30} oX={oX} oY={oY} />

        {/* original curve, dashed reference ink */}
        <path d={`M ${o0x} ${o0y} Q ${ocx} ${ocy} ${o2x} ${o2y}`} fill="none"
          stroke={INK_MUTED} strokeWidth="1.4" strokeDasharray="5 4" />
        {/* shifted curve, solid ink */}
        <path d={`M ${s0x} ${s0y} Q ${scx} ${scy} ${s2x} ${s2y}`} fill="none"
          stroke={INK} strokeWidth="1.6" />

        {/* curve labels */}
        <text x={o0x} y={76} fontSize="13" fill={INK_MUTED} textAnchor="middle" fontFamily={SERIF}>
          <tspan fontStyle="italic">y</tspan> = <tspan fontStyle="italic">f</tspan>(<tspan fontStyle="italic">x</tspan>)</text>
        <text x={316} y={76} fontSize="13" fill={INK} textAnchor="middle" fontFamily={SERIF}>
          <tspan fontStyle="italic">y</tspan> = <tspan fontStyle="italic">f</tspan>(<tspan fontStyle="italic">x</tspan> − 2)</text>

        {/* the shift — the taught element, in accent */}
        <line x1={aax} y1={aay} x2={abx - 7} y2={aby} stroke={ACCENT} strokeWidth="1.4" />
        <polygon points={`${abx},${aby} ${abx - 7},${aby - 3.5} ${abx - 7},${aby + 3.5}`}
          fill={ACCENT} />
        <text x={(aax + abx) / 2} y={aay - 10} fontSize="13" fill={ACCENT}
          textAnchor="middle" fontFamily={SERIF}>+2</text>
      </svg>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════
   VERTICAL SHIFT — f(x) dashed, f(x) + 2 solid ink; the accent
   arrow between matching points is the taught element.
   ═══════════════════════════════════════════════════════════════ */
export const VerticalShiftDiagram = () => {
  const oX = 195, oY = 232, scX = 34, scY = 30;
  const px = (x, y) => [oX + x * scX, oY - y * scY];

  // f(x) = x²/2 on [−3, 3] and f(x) + 2 on [−2.6, 2.6], exact Beziers
  const [o0x, o0y] = px(-3, 4.5);
  const [o2x, o2y] = px(3, 4.5);
  const [ocx, ocy] = px(0, -4.5);
  const [s0x, s0y] = px(-2.6, 5.38);
  const [s2x, s2y] = px(2.6, 5.38);
  const [scx, scy] = px(0, -1.38);

  // arrow between matching points: (2, 2) on f up to (2, 4) on the image
  const [aax, aay] = px(2, 2);
  const [abx, aby] = px(2, 4);

  return (
    <div style={DIAGRAM_STYLE}>
      <svg viewBox="0 0 400 290" style={{ maxWidth: 440, width: '100%' }}
        aria-label="The curve f of x dashed, and the same curve shifted 2 units up as f of x plus 2, with an accent arrow showing the shift">
        <PlaneAxes xStart={36} xEnd={372} yStart={262} yEnd={30} oX={oX} oY={oY} />

        {/* original curve, dashed reference ink */}
        <path d={`M ${o0x} ${o0y} Q ${ocx} ${ocy} ${o2x} ${o2y}`} fill="none"
          stroke={INK_MUTED} strokeWidth="1.4" strokeDasharray="5 4" />
        {/* shifted curve, solid ink */}
        <path d={`M ${s0x} ${s0y} Q ${scx} ${scy} ${s2x} ${s2y}`} fill="none"
          stroke={INK} strokeWidth="1.6" />

        {/* curve labels */}
        <text x={o2x + 8} y={o2y + 4} fontSize="13" fill={INK_MUTED} fontFamily={SERIF}>
          <tspan fontStyle="italic">y</tspan> = <tspan fontStyle="italic">f</tspan>(<tspan fontStyle="italic">x</tspan>)</text>
        <text x={s0x - 8} y={s0y - 4} fontSize="13" fill={INK} textAnchor="end" fontFamily={SERIF}>
          <tspan fontStyle="italic">y</tspan> = <tspan fontStyle="italic">f</tspan>(<tspan fontStyle="italic">x</tspan>) + 2</text>

        {/* the shift — the taught element, in accent */}
        <line x1={aax} y1={aay} x2={abx} y2={aby + 7} stroke={ACCENT} strokeWidth="1.4" />
        <polygon points={`${abx},${aby} ${abx - 3.5},${aby + 7} ${abx + 3.5},${aby + 7}`}
          fill={ACCENT} />
        <text x={aax + 9} y={(aay + aby) / 2 + 4} fontSize="13" fill={ACCENT}
          fontFamily={SERIF}>+2</text>
      </svg>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════
   EXPONENTIAL GROWTH / DECAY — two smooth ink curves from their
   initial values on the y-axis; the accent falls on the condition
   on b that decides which shape you get.
   ═══════════════════════════════════════════════════════════════ */
export const ExponentialGrowthDiagram = () => {
  const oX = 70, oY = 240, scX = 42, scY = 26;
  const px = (x, y) => [oX + x * scX, oY - y * scY];

  const growthPath = [];
  const decayPath = [];
  for (let x = 0; x <= 6.001; x += 0.1) {
    const [gx, gy] = px(x, Math.pow(1.4, x));
    const [dx, dy] = px(x, 6 * Math.pow(0.7, x));
    growthPath.push(`${growthPath.length === 0 ? 'M' : 'L'} ${gx.toFixed(1)} ${gy.toFixed(1)}`);
    decayPath.push(`${decayPath.length === 0 ? 'M' : 'L'} ${dx.toFixed(1)} ${dy.toFixed(1)}`);
  }

  return (
    <div style={DIAGRAM_STYLE}>
      <svg viewBox="0 0 430 290" style={{ maxWidth: 460, width: '100%' }}
        aria-label="Two exponential curves: one growing from initial value 1 when b is greater than 1, and one decaying toward the x-axis from initial value 6 when b is between 0 and 1">
        <PlaneAxes xStart={30} xEnd={400} yStart={268} yEnd={26} oX={oX} oY={oY} />

        {/* only the ticks the figure uses: the two initial values */}
        <YTick y={px(0, 1)[1]} axisX={oX} label="1" />
        <YTick y={px(0, 6)[1]} axisX={oX} label="6" />

        {/* the curves, smooth ink paths */}
        <path d={growthPath.join(' ')} fill="none" stroke={INK} strokeWidth="1.6"
          strokeLinejoin="round" />
        <path d={decayPath.join(' ')} fill="none" stroke={INK} strokeWidth="1.6"
          strokeLinejoin="round" />

        {/* labels — the deciding condition on b carries the accent */}
        <text x={296} y={56} fontSize="13" fill={INK} textAnchor="end"
          fontFamily={SERIF}>growth</text>
        <text x={296} y={74} fontSize="13" fill={ACCENT} textAnchor="end" fontFamily={SERIF}>
          <tspan fontStyle="italic">b</tspan> &gt; 1</text>
        <text x={322} y={166} fontSize="13" fill={INK} textAnchor="end"
          fontFamily={SERIF}>decay</text>
        <text x={322} y={184} fontSize="13" fill={ACCENT} textAnchor="end" fontFamily={SERIF}>
          0 &lt; <tspan fontStyle="italic">b</tspan> &lt; 1</text>
      </svg>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════
   SYSTEMS INTERSECTION — y = x + 1 and y = −x + 5 in ink; the one
   shared point (2, 3) in accent, with dashed drops to each axis.
   ═══════════════════════════════════════════════════════════════ */
export const SystemsIntersectionDiagram = () => {
  const oX = 110, oY = 250, sc = 38;
  const px = (x, y) => [oX + x * sc, oY - y * sc];

  const [l1ax, l1ay] = px(-1.5, -0.5);
  const [l1bx, l1by] = px(4.6, 5.6);
  const [l2ax, l2ay] = px(-0.6, 5.6);
  const [l2bx, l2by] = px(5.8, -0.8);
  const [ix, iy] = px(2, 3);

  return (
    <div style={DIAGRAM_STYLE}>
      <svg viewBox="0 0 420 320" style={{ maxWidth: 440, width: '100%' }}
        aria-label="Lines y equals x plus 1 and y equals negative x plus 5 crossing at the single solution point (2, 3), with dashed drops to 2 on the x-axis and 3 on the y-axis">
        <PlaneAxes xStart={36} xEnd={390} yStart={296} yEnd={26} oX={oX} oY={oY} />

        {/* only the ticks the figure uses */}
        <XTick x={ix} axisY={oY} label="2" />
        <YTick y={iy} axisX={oX} label="3" />

        {/* dashed drops from the solution to each axis */}
        <line x1={ix} y1={iy} x2={ix} y2={oY} stroke={INK_MUTED} strokeWidth="1"
          strokeDasharray="4 3" />
        <line x1={ix} y1={iy} x2={oX} y2={iy} stroke={INK_MUTED} strokeWidth="1"
          strokeDasharray="4 3" />

        {/* the two lines, in ink */}
        <line x1={l1ax} y1={l1ay} x2={l1bx} y2={l1by} stroke={INK} strokeWidth="1.6" />
        <line x1={l2ax} y1={l2ay} x2={l2bx} y2={l2by} stroke={INK} strokeWidth="1.6" />

        {/* equation labels */}
        <text x={292} y={42} fontSize="13" fill={INK} fontFamily={SERIF}>
          <tspan fontStyle="italic">y</tspan> = <tspan fontStyle="italic">x</tspan> + 1</text>
        <text x={80} y={42} fontSize="13" fill={INK} textAnchor="end" fontFamily={SERIF}>
          <tspan fontStyle="italic">y</tspan> = −<tspan fontStyle="italic">x</tspan> + 5</text>

        {/* the shared point — the taught element, in accent */}
        <circle cx={ix} cy={iy} r="3.5" fill={ACCENT} />
        <text x={ix + 20} y={iy + 5} fontSize="13" fill={ACCENT} fontFamily={SERIF}>(2, 3)</text>
      </svg>
    </div>
  );
};
