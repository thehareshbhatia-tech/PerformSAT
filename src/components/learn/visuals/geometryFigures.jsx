/**
 * Geometry lesson figures — FIGURE LANGUAGE v2 (textbook ink discipline).
 * See ./figureLanguage.js for the full language. Genre here: unfilled ink
 * shapes, right-angle square ticks, thin angle arcs with the angle letter
 * inside, italic vertex/side letters, side lengths as plain serif labels.
 * ONE accent per figure on the taught element; ACCENT_WASH only when a
 * region (a sector) is the subject. "Not drawn to scale" belongs in the
 * caption, never inside the SVG.
 */
import React from 'react';
import {
  INK, INK_MUTED, ACCENT, ACCENT_WASH, SERIF, DIAGRAM_STYLE,
  AxisArrow, XTick, YTick,
} from './figureLanguage';

/* ═══════════════════════════════════════════════════════════════
   RIGHT TRIANGLE (Pythagorean theorem)
   ═══════════════════════════════════════════════════════════════ */
export const RightTriangleDiagram = () => {
  const A = [60, 250], B = [360, 250], C = [360, 80];
  return (
    <div style={DIAGRAM_STYLE}>
      <svg viewBox="0 0 400 288" style={{ maxWidth: 440, width: '100%' }}
        aria-label="Right triangle with legs a and b and hypotenuse c, the side opposite the right angle">
        {/* the triangle, unfilled ink */}
        <polygon points={`${A[0]},${A[1]} ${B[0]},${B[1]} ${C[0]},${C[1]}`}
          fill="none" stroke={INK} strokeWidth="1.4" strokeLinejoin="round" />

        {/* right-angle square tick at B */}
        <path d={`M ${B[0] - 14} ${B[1]} L ${B[0] - 14} ${B[1] - 14} L ${B[0]} ${B[1] - 14}`}
          fill="none" stroke={INK} strokeWidth="1" />

        {/* legs, plain italic serif */}
        <text x={210} y={272} fontSize="14.5" fill={INK} textAnchor="middle"
          fontFamily={SERIF} fontStyle="italic">a</text>
        <text x={372} y={170} fontSize="14.5" fill={INK}
          fontFamily={SERIF} fontStyle="italic">b</text>

        {/* hypotenuse label — the taught element, in accent */}
        <text x={203} y={156} fontSize="15" fill={ACCENT} textAnchor="middle"
          fontFamily={SERIF} fontStyle="italic">c</text>
      </svg>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════
   SPECIAL TRIANGLES (45-45-90 and 30-60-90, side by side)
   ═══════════════════════════════════════════════════════════════ */
export const SpecialTrianglesDiagram = () => (
  <div style={DIAGRAM_STYLE}>
    <svg viewBox="0 0 540 280" style={{ maxWidth: 580, width: '100%' }}
      aria-label="A 45-45-90 triangle with sides x, x, and x root 2, and a 30-60-90 triangle with sides x, x root 3, and 2x; the hypotenuse ratios are highlighted">
      {/* ── 45-45-90 ── vertices (40,240) (190,240) (190,90) */}
      <polygon points="40,240 190,240 190,90" fill="none" stroke={INK}
        strokeWidth="1.4" strokeLinejoin="round" />
      {/* right-angle square at (190,240) */}
      <path d="M 177 240 L 177 227 L 190 227" fill="none" stroke={INK} strokeWidth="1" />
      {/* 45° arcs, angle value inside */}
      <path d="M 64 240 A 24 24 0 0 0 57 223" fill="none" stroke={INK} strokeWidth="1" />
      <text x={81} y={228} fontSize="12" fill={INK} textAnchor="middle" fontFamily={SERIF}>45°</text>
      <path d="M 190 116 A 26 26 0 0 1 171.6 108.4" fill="none" stroke={INK} strokeWidth="1" />
      <text x={172} y={136} fontSize="12" fill={INK} textAnchor="middle" fontFamily={SERIF}>45°</text>
      {/* equal-leg tick marks */}
      <line x1={115} y1={235} x2={115} y2={245} stroke={INK} strokeWidth="1" />
      <line x1={185} y1={165} x2={195} y2={165} stroke={INK} strokeWidth="1" />
      {/* side ratios */}
      <text x={115} y={262} fontSize="14" fill={INK} textAnchor="middle"
        fontFamily={SERIF} fontStyle="italic">x</text>
      <text x={202} y={170} fontSize="14" fill={INK}
        fontFamily={SERIF} fontStyle="italic">x</text>
      <text x={103} y={158} fontSize="14" fill={ACCENT} textAnchor="end" fontFamily={SERIF}>
        <tspan fontStyle="italic">x</tspan>√2</text>

      {/* ── 30-60-90 ── vertices (300,240) (490,240) (490,130) */}
      <polygon points="300,240 490,240 490,130" fill="none" stroke={INK}
        strokeWidth="1.4" strokeLinejoin="round" />
      {/* right-angle square at (490,240) */}
      <path d="M 477 240 L 477 227 L 490 227" fill="none" stroke={INK} strokeWidth="1" />
      {/* 30° and 60° arcs, angle value inside */}
      <path d="M 330 240 A 30 30 0 0 0 326 225" fill="none" stroke={INK} strokeWidth="1" />
      <text x={350} y={231} fontSize="12" fill={INK} textAnchor="middle" fontFamily={SERIF}>30°</text>
      <path d="M 490 152 A 22 22 0 0 1 471 141" fill="none" stroke={INK} strokeWidth="1" />
      <text x={469} y={170} fontSize="12" fill={INK} textAnchor="middle" fontFamily={SERIF}>60°</text>
      {/* side ratios */}
      <text x={395} y={262} fontSize="14" fill={INK} textAnchor="middle" fontFamily={SERIF}>
        <tspan fontStyle="italic">x</tspan>√3</text>
      <text x={500} y={190} fontSize="14" fill={INK}
        fontFamily={SERIF} fontStyle="italic">x</text>
      <text x={390} y={174} fontSize="14" fill={ACCENT} textAnchor="end" fontFamily={SERIF}>
        2<tspan fontStyle="italic">x</tspan></text>
    </svg>
  </div>
);

/* ═══════════════════════════════════════════════════════════════
   SIMILAR TRIANGLES (matching angle marks, scale factor ×1.5)
   ═══════════════════════════════════════════════════════════════ */
export const SimilarTrianglesDiagram = () => (
  <div style={DIAGRAM_STYLE}>
    <svg viewBox="0 0 500 292" style={{ maxWidth: 540, width: '100%' }}
      aria-label="Two similar triangles with matching angle marks: triangle ABC with sides 4, 5, and 6 is scaled by 1.5 to triangle DEF with sides 6, 7.5, and 9">
      {/* small triangle ABC — A(95,125) B(40,230) C(180,230); drawn to the
          4 : 5 : 6 proportion so the labels read true */}
      <polygon points="40,230 180,230 95,125" fill="none" stroke={INK}
        strokeWidth="1.4" strokeLinejoin="round" />
      {/* vertex letters, italic */}
      <text x={95} y={115} fontSize="13" fill={INK} textAnchor="middle"
        fontFamily={SERIF} fontStyle="italic">A</text>
      <text x={28} y={238} fontSize="13" fill={INK} textAnchor="middle"
        fontFamily={SERIF} fontStyle="italic">B</text>
      <text x={192} y={238} fontSize="13" fill={INK} textAnchor="middle"
        fontFamily={SERIF} fontStyle="italic">C</text>
      {/* side lengths, plain serif */}
      <text x={110} y={252} fontSize="13.5" fill={INK} textAnchor="middle" fontFamily={SERIF}>6</text>
      <text x={56} y={175} fontSize="13.5" fill={INK} textAnchor="middle" fontFamily={SERIF}>4</text>
      <text x={148} y={173} fontSize="13.5" fill={INK} textAnchor="middle" fontFamily={SERIF}>5</text>
      {/* matching angle marks: single at A, double at B */}
      <path d="M 105.7 138.2 A 17 17 0 0 1 87.1 140.1" fill="none" stroke={INK} strokeWidth="1.1" />
      <path d="M 55 230 A 15 15 0 0 0 47 216.7" fill="none" stroke={INK} strokeWidth="1.1" />
      <path d="M 60 230 A 20 20 0 0 0 49.3 212.3" fill="none" stroke={INK} strokeWidth="1.1" />

      {/* scale factor — the taught element, in accent */}
      <line x1={196} y1={180} x2={238} y2={180} stroke={ACCENT} strokeWidth="1.3" />
      <polygon points="244,180 236,176.5 236,183.5" fill={ACCENT} />
      <text x={220} y={168} fontSize="13" fill={ACCENT} textAnchor="middle"
        fontFamily={SERIF}>× 1.5</text>

      {/* large triangle DEF — the same shape scaled by exactly 1.5:
          D(342.5,97.5) E(260,255) F(470,255) */}
      <polygon points="260,255 470,255 342.5,97.5" fill="none" stroke={INK}
        strokeWidth="1.4" strokeLinejoin="round" />
      <text x={343} y={88} fontSize="13" fill={INK} textAnchor="middle"
        fontFamily={SERIF} fontStyle="italic">D</text>
      <text x={248} y={263} fontSize="13" fill={INK} textAnchor="middle"
        fontFamily={SERIF} fontStyle="italic">E</text>
      <text x={482} y={263} fontSize="13" fill={INK} textAnchor="middle"
        fontFamily={SERIF} fontStyle="italic">F</text>
      <text x={365} y={277} fontSize="13.5" fill={INK} textAnchor="middle" fontFamily={SERIF}>9</text>
      <text x={290} y={174} fontSize="13.5" fill={INK} textAnchor="middle" fontFamily={SERIF}>6</text>
      <text x={417} y={172} fontSize="13.5" fill={INK} textAnchor="middle" fontFamily={SERIF}>7.5</text>
      {/* matching angle marks: single at D, double at E */}
      <path d="M 353.2 110.7 A 17 17 0 0 1 334.6 112.6" fill="none" stroke={INK} strokeWidth="1.1" />
      <path d="M 275 255 A 15 15 0 0 0 267 241.7" fill="none" stroke={INK} strokeWidth="1.1" />
      <path d="M 280 255 A 20 20 0 0 0 269.3 237.3" fill="none" stroke={INK} strokeWidth="1.1" />
    </svg>
  </div>
);

/* ═══════════════════════════════════════════════════════════════
   TRIANGLE AREA (base and perpendicular height)
   ═══════════════════════════════════════════════════════════════ */
export const TriangleAreaDiagram = () => (
  <div style={DIAGRAM_STYLE}>
    <svg viewBox="0 0 420 270" style={{ maxWidth: 460, width: '100%' }}
      aria-label="Triangle with base b and a dashed height h drawn perpendicular from the apex to the base, marked with a right-angle square at its foot">
      {/* the triangle, unfilled ink */}
      <polygon points="60,230 380,230 250,70" fill="none" stroke={INK}
        strokeWidth="1.4" strokeLinejoin="round" />

      {/* the height — the taught element, dashed accent with its foot square */}
      <line x1={250} y1={70} x2={250} y2={230} stroke={ACCENT} strokeWidth="1.3"
        strokeDasharray="4 3" />
      <path d="M 238 230 L 238 218 L 250 218" fill="none" stroke={ACCENT} strokeWidth="1" />
      <text x={260} y={155} fontSize="14.5" fill={ACCENT}
        fontFamily={SERIF} fontStyle="italic">h</text>

      {/* base, plain italic serif */}
      <text x={200} y={252} fontSize="14.5" fill={INK} textAnchor="middle"
        fontFamily={SERIF} fontStyle="italic">b</text>
    </svg>
  </div>
);

/* ═══════════════════════════════════════════════════════════════
   CIRCLE PARTS (radius, diameter) — approved v2 exemplar, moved
   verbatim from LessonVisualRenderer.jsx
   ═══════════════════════════════════════════════════════════════ */
export const CirclePartsDiagram = () => {
  const cx = 175, cy = 150, r = 110;
  // radius drawn to 40° above horizontal so it reads separately from the diameter
  const rx = cx + r * Math.cos(-0.7), ry = cy + r * Math.sin(-0.7);
  return (
    <div style={DIAGRAM_STYLE}>
      <svg viewBox="0 0 350 300" style={{ maxWidth: 380, width: '100%' }}
        aria-label="Circle diagram labeling the center O, a radius r, and a diameter d">
        {/* the circle, unfilled ink */}
        <circle cx={cx} cy={cy} r={r} fill="none" stroke={INK} strokeWidth="1.4" />

        {/* center */}
        <circle cx={cx} cy={cy} r="3" fill={INK} />
        <text x={cx - 6} y={cy + 18} fontSize="14" fill={INK} fontFamily={SERIF} fontStyle="italic">O</text>

        {/* radius — the taught element, in accent */}
        <line x1={cx} y1={cy} x2={rx} y2={ry} stroke={ACCENT} strokeWidth="1.4" />
        <text x={(cx + rx) / 2 + 4} y={(cy + ry) / 2 - 7} fontSize="14.5" fill={ACCENT}
          fontFamily={SERIF} fontStyle="italic">r</text>

        {/* diameter, dashed ink through the center */}
        <line x1={cx - r} y1={cy} x2={cx + r} y2={cy} stroke={INK} strokeWidth="1"
          strokeDasharray="4 3" />
        <circle cx={cx - r} cy={cy} r="2.5" fill={INK} />
        <circle cx={cx + r} cy={cy} r="2.5" fill={INK} />
        <text x={cx - r / 2 - 8} y={cy - 8} fontSize="14.5" fill={INK}
          fontFamily={SERIF} fontStyle="italic">d</text>
      </svg>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════
   ARC LENGTH / SECTOR (central angle θ cuts off an arc and a sector)
   ═══════════════════════════════════════════════════════════════ */
export const ArcLengthDiagram = () => {
  const cx = 170, cy = 175, r = 110;
  // sector spans 20° to 90° above horizontal — a generic θ, not a quarter turn
  const p1 = [cx + r * Math.cos(Math.PI / 9), cy - r * Math.sin(Math.PI / 9)]; // 20°
  const p2 = [cx, cy - r];                                                     // 90°
  return (
    <div style={DIAGRAM_STYLE}>
      <svg viewBox="0 0 340 300" style={{ maxWidth: 380, width: '100%' }}
        aria-label="Circle with a shaded sector: the central angle θ between two radii r cuts off the highlighted arc">
        {/* the sector — the taught region, in accent wash */}
        <path d={`M ${cx} ${cy} L ${p2[0]} ${p2[1]} A ${r} ${r} 0 0 1 ${p1[0]} ${p1[1]} Z`}
          fill={ACCENT_WASH} stroke="none" />

        {/* the circle, unfilled ink */}
        <circle cx={cx} cy={cy} r={r} fill="none" stroke={INK} strokeWidth="1.4" />
        <circle cx={cx} cy={cy} r="3" fill={INK} />

        {/* bounding radii */}
        <line x1={cx} y1={cy} x2={p2[0]} y2={p2[1]} stroke={INK} strokeWidth="1.4" />
        <line x1={cx} y1={cy} x2={p1[0]} y2={p1[1]} stroke={INK} strokeWidth="1.4" />
        <text x={cx - 9} y={cy - 50} fontSize="14" fill={INK} textAnchor="end"
          fontFamily={SERIF} fontStyle="italic">r</text>

        {/* central angle, thin arc with θ inside */}
        <path d={`M 196.3 165.4 A 28 28 0 0 0 ${cx} 147`} fill="none" stroke={INK} strokeWidth="1" />
        <text x={195} y={143} fontSize="13.5" fill={INK} textAnchor="middle"
          fontFamily={SERIF} fontStyle="italic">θ</text>

        {/* the arc — the taught element, in accent */}
        <path d={`M ${p2[0]} ${p2[1]} A ${r} ${r} 0 0 1 ${p1[0]} ${p1[1]}`}
          fill="none" stroke={ACCENT} strokeWidth="2.2" strokeLinecap="round" />
        <text x={246} y={72} fontSize="13" fill={ACCENT} fontFamily={SERIF}>arc</text>
      </svg>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════
   CIRCLE EQUATION  (x − 2)² + (y − 3)² = 9  →  center (2, 3), r = 3
   ═══════════════════════════════════════════════════════════════ */
export const CircleEquationDiagram = () => {
  const oX = 110, oY = 280, sc = 32;
  const ccx = oX + 2 * sc, ccy = oY - 3 * sc; // center (2, 3)
  const rPx = 3 * sc;
  return (
    <div style={DIAGRAM_STYLE}>
      <svg viewBox="0 0 360 312" style={{ maxWidth: 400, width: '100%' }}
        aria-label="Circle on the coordinate plane centered at (2, 3) with radius 3; dashed guides mark the center's distance from each axis">
        {/* axes */}
        <line x1={70} y1={oY} x2={336} y2={oY} stroke={INK} strokeWidth="1.25" />
        <AxisArrow x={336} y={oY} dir="right" />
        <line x1={oX} y1={300} x2={oX} y2={52} stroke={INK} strokeWidth="1.25" />
        <AxisArrow x={oX} y={52} dir="up" />
        <text x={342} y={oY + 4} fontSize="14" fill={INK} fontFamily={SERIF} fontStyle="italic">x</text>
        <text x={oX - 4} y={46} fontSize="14" fill={INK} fontFamily={SERIF} fontStyle="italic">y</text>

        {/* only the ticks the figure uses */}
        <XTick x={ccx} axisY={oY} label="2" />
        <YTick y={ccy} axisX={oX} label="3" />

        {/* dashed guides from the center to each axis (h and k) */}
        <line x1={ccx} y1={ccy} x2={ccx} y2={oY} stroke={INK_MUTED} strokeWidth="1"
          strokeDasharray="4 3" />
        <line x1={oX} y1={ccy} x2={ccx} y2={ccy} stroke={INK_MUTED} strokeWidth="1"
          strokeDasharray="4 3" />

        {/* the circle, unfilled ink */}
        <circle cx={ccx} cy={ccy} r={rPx} fill="none" stroke={INK} strokeWidth="1.4" />

        {/* center as an ink dot with plain coordinates */}
        <circle cx={ccx} cy={ccy} r="3.5" fill={INK} />
        <text x={ccx + 8} y={ccy - 8} fontSize="13" fill={INK} fontFamily={SERIF}>(2, 3)</text>

        {/* the radius — the taught element, in accent */}
        <line x1={ccx} y1={ccy} x2={ccx + rPx} y2={ccy} stroke={ACCENT} strokeWidth="1.4" />
        <text x={ccx + rPx / 2} y={ccy + 18} fontSize="13.5" fill={ACCENT} textAnchor="middle"
          fontFamily={SERIF}><tspan fontStyle="italic">r</tspan> = 3</text>
      </svg>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════
   TRANSVERSAL ANGLES (parallel lines cut by a transversal)
   ═══════════════════════════════════════════════════════════════ */
export const TransversalAnglesDiagram = () => {
  const y1 = 100, y2 = 230;
  const tx = (y) => 150 + (y - 30) / 1.15; // transversal through (150, 30), slope 1.15
  const ix1 = tx(y1), ix2 = tx(y2);
  // transversal direction ≈ 49° below horizontal
  const c = Math.cos(0.855), s = Math.sin(0.855);
  return (
    <div style={DIAGRAM_STYLE}>
      <svg viewBox="0 0 520 330" style={{ maxWidth: 560, width: '100%' }}
        aria-label="Two parallel lines cut by a transversal: the corresponding angles marked a degrees at each intersection are equal, and the co-interior angle at the lower intersection measures 180 degrees minus a degrees">
        {/* the parallel lines, with matching chevron marks */}
        {[y1, y2].map((y) => (
          <g key={y}>
            <line x1={40} y1={y} x2={480} y2={y} stroke={INK} strokeWidth="1.4" />
            <path d={`M 432 ${y - 4} L 442 ${y} L 432 ${y + 4}`} fill="none"
              stroke={INK} strokeWidth="1.25" />
          </g>
        ))}

        {/* the transversal */}
        <line x1={150} y1={30} x2={tx(310)} y2={310} stroke={INK} strokeWidth="1.4" />

        {/* corresponding angles — the taught equal pair, in accent */}
        {[[ix1, y1], [ix2, y2]].map(([ix, y]) => (
          <g key={y}>
            <path d={`M ${ix + 26} ${y} A 26 26 0 0 1 ${ix + 26 * c} ${y + 26 * s}`}
              fill="none" stroke={ACCENT} strokeWidth="1.3" />
            <text x={ix + 41} y={y + 22} fontSize="13" fill={ACCENT} textAnchor="middle"
              fontFamily={SERIF}><tspan fontStyle="italic">a</tspan>°</text>
          </g>
        ))}

        {/* co-interior angle at the lower intersection, in ink */}
        <path d={`M ${ix2 + 30} ${y2} A 30 30 0 0 0 ${ix2 - 30 * c} ${y2 - 30 * s}`}
          fill="none" stroke={INK} strokeWidth="1" />
        <text x={ix2 + 20} y={y2 - 44} fontSize="12.5" fill={INK} textAnchor="middle"
          fontFamily={SERIF}>180° − <tspan fontStyle="italic">a</tspan>°</text>
      </svg>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════
   RADIAN ARC (an arc exactly one radius long spans 1 radian)
   ═══════════════════════════════════════════════════════════════ */
export const RadianArcDiagram = () => {
  const cx = 170, cy = 190, r = 120;
  const rad = 1; // the taught angle: exactly 1 radian ≈ 57.3°
  const ex = cx + r * Math.cos(rad), ey = cy - r * Math.sin(rad);
  return (
    <div style={DIAGRAM_STYLE}>
      <svg viewBox="0 0 340 330" style={{ maxWidth: 380, width: '100%' }}
        aria-label="Circle in which the arc spanning a central angle of 1 radian is exactly one radius long: the radius and the highlighted arc are both labeled r">
        {/* the 1-radian sector — the taught region, in accent wash */}
        <path d={`M ${cx} ${cy} L ${cx + r} ${cy} A ${r} ${r} 0 0 0 ${ex} ${ey} Z`}
          fill={ACCENT_WASH} stroke="none" />

        {/* the circle, unfilled ink */}
        <circle cx={cx} cy={cy} r={r} fill="none" stroke={INK} strokeWidth="1.4" />
        <circle cx={cx} cy={cy} r="3" fill={INK} />

        {/* two radii bounding the angle */}
        <line x1={cx} y1={cy} x2={cx + r} y2={cy} stroke={INK} strokeWidth="1.4" />
        <line x1={cx} y1={cy} x2={ex} y2={ey} stroke={INK} strokeWidth="1.4" />
        <text x={cx + 60} y={cy + 18} fontSize="14" fill={INK} textAnchor="middle"
          fontFamily={SERIF} fontStyle="italic">r</text>

        {/* the angle, thin arc with its measure inside */}
        <path d={`M ${cx + 30} ${cy} A 30 30 0 0 0 ${cx + 30 * Math.cos(rad)} ${cy - 30 * Math.sin(rad)}`}
          fill="none" stroke={INK} strokeWidth="1" />
        <text x={cx + 41} y={cy - 20} fontSize="12.5" fill={INK}
          fontFamily={SERIF}>1 radian</text>

        {/* the arc, exactly one radius long — the taught element, in accent */}
        <path d={`M ${cx + r} ${cy} A ${r} ${r} 0 0 0 ${ex} ${ey}`}
          fill="none" stroke={ACCENT} strokeWidth="2.2" strokeLinecap="round" />
        <text x={cx + 121} y={cy - 61} fontSize="14" fill={ACCENT}
          fontFamily={SERIF} fontStyle="italic">r</text>
      </svg>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════
   TRIG SIDE LABELING (opposite / adjacent / hypotenuse relative to θ)
   ═══════════════════════════════════════════════════════════════ */
export const TrigSideLabelingDiagram = () => {
  const A = [70, 260], B = [410, 260], C = [410, 100];
  return (
    <div style={DIAGRAM_STYLE}>
      <svg viewBox="0 0 500 300" style={{ maxWidth: 540, width: '100%' }}
        aria-label="Right triangle with acute angle θ marked: the side opposite θ, the side adjacent to θ, and the hypotenuse across from the right angle">
        {/* the triangle, unfilled ink */}
        <polygon points={`${A[0]},${A[1]} ${B[0]},${B[1]} ${C[0]},${C[1]}`}
          fill="none" stroke={INK} strokeWidth="1.4" strokeLinejoin="round" />

        {/* right-angle square tick at B */}
        <path d={`M ${B[0] - 14} ${B[1]} L ${B[0] - 14} ${B[1] - 14} L ${B[0]} ${B[1] - 14}`}
          fill="none" stroke={INK} strokeWidth="1" />

        {/* θ and the side roles it defines — the taught labeling, in accent */}
        <path d={`M ${A[0] + 34} ${A[1]} A 34 34 0 0 0 100.8 245.5`}
          fill="none" stroke={ACCENT} strokeWidth="1.3" />
        <text x={121} y={253} fontSize="14.5" fill={ACCENT}
          fontFamily={SERIF} fontStyle="italic">θ</text>
        <text x={240} y={282} fontSize="13.5" fill={ACCENT} textAnchor="middle"
          fontFamily={SERIF}>adjacent</text>
        <text x={422} y={185} fontSize="13.5" fill={ACCENT}
          fontFamily={SERIF}>opposite</text>

        {/* the hypotenuse name does not depend on θ — plain ink */}
        <text x={232} y={168} fontSize="13.5" fill={INK} textAnchor="middle"
          fontFamily={SERIF}>hypotenuse</text>
      </svg>
    </div>
  );
};
