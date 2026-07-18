/**
 * 3D-solid lesson figures — FIGURE LANGUAGE v2 (textbook ink).
 *
 * Genre conventions: thin ink outlines with dashed hidden edges
 * (strokeDasharray "3.5 3"), oblique / elliptical perspective, dimensions
 * measured with thin leader lines + small end ticks outside the solid where
 * possible, italic serif dimension letters. One accent per figure on the
 * single taught dimension (the radius, typically). No formula cards — the
 * chapter prose carries V = ... .
 */
import React from 'react';
import { INK, ACCENT, SERIF, DIAGRAM_STYLE } from './figureLanguage';

/* ═══════════════════════════════════════════════════════════════
   CUBE
   Oblique cube: front square 140, depth receding up-right (+54, −36).
   Hidden vertex is the back-bottom-left; its three edges are dashed.
   The equal edge length s is measured on three mutually perpendicular
   leaders — width (accent), height, and depth.
   ═══════════════════════════════════════════════════════════════ */
export const CubeDiagram = () => {
  // front face
  const A = [86, 52], B = [226, 52], C = [226, 192], D = [86, 192];
  // back face (depth offset +54, −36); Dp is the hidden vertex
  const Ap = [140, 16], Bp = [280, 16], Cp = [280, 156], Dp = [140, 156];
  return (
    <div style={DIAGRAM_STYLE}>
      <svg viewBox="0 0 320 244" style={{ maxWidth: 340, width: '100%' }}
        aria-label="Cube drawn in oblique perspective with hidden edges dashed; leader lines outside the solid measure the equal edge length s along its width, height, and depth">
        {/* hidden edges (meet at the back-bottom-left vertex) */}
        <line x1={D[0]} y1={D[1]} x2={Dp[0]} y2={Dp[1]} stroke={INK} strokeWidth="1" strokeDasharray="3.5 3" />
        <line x1={Dp[0]} y1={Dp[1]} x2={Ap[0]} y2={Ap[1]} stroke={INK} strokeWidth="1" strokeDasharray="3.5 3" />
        <line x1={Dp[0]} y1={Dp[1]} x2={Cp[0]} y2={Cp[1]} stroke={INK} strokeWidth="1" strokeDasharray="3.5 3" />

        {/* front face */}
        <polygon points={`${A} ${B} ${C} ${D}`} fill="none" stroke={INK} strokeWidth="1.4" />
        {/* visible receding edges */}
        <line x1={A[0]} y1={A[1]} x2={Ap[0]} y2={Ap[1]} stroke={INK} strokeWidth="1.4" />
        <line x1={B[0]} y1={B[1]} x2={Bp[0]} y2={Bp[1]} stroke={INK} strokeWidth="1.4" />
        <line x1={C[0]} y1={C[1]} x2={Cp[0]} y2={Cp[1]} stroke={INK} strokeWidth="1.4" />
        {/* visible back edges */}
        <line x1={Ap[0]} y1={Ap[1]} x2={Bp[0]} y2={Bp[1]} stroke={INK} strokeWidth="1.4" />
        <line x1={Bp[0]} y1={Bp[1]} x2={Cp[0]} y2={Cp[1]} stroke={INK} strokeWidth="1.4" />

        {/* width s — the taught edge length, measured below in accent */}
        <line x1={D[0]} y1={214} x2={C[0]} y2={214} stroke={ACCENT} strokeWidth="1" />
        <line x1={D[0]} y1={209} x2={D[0]} y2={219} stroke={ACCENT} strokeWidth="1" />
        <line x1={C[0]} y1={209} x2={C[0]} y2={219} stroke={ACCENT} strokeWidth="1" />
        <text x={(D[0] + C[0]) / 2} y={233} fontSize="14.5" fill={ACCENT} textAnchor="middle"
          fontFamily={SERIF} fontStyle="italic">s</text>

        {/* height s, measured left of the solid */}
        <line x1={64} y1={A[1]} x2={64} y2={D[1]} stroke={INK} strokeWidth="1" />
        <line x1={59} y1={A[1]} x2={69} y2={A[1]} stroke={INK} strokeWidth="1" />
        <line x1={59} y1={D[1]} x2={69} y2={D[1]} stroke={INK} strokeWidth="1" />
        <text x={50} y={(A[1] + D[1]) / 2 + 4} fontSize="14.5" fill={INK} textAnchor="end"
          fontFamily={SERIF} fontStyle="italic">s</text>

        {/* depth s, measured on a leader parallel to the receding bottom-right
            edge, offset outward along its normal (0.554, 0.832) */}
        <line x1={237.1} y1={208.6} x2={291.1} y2={172.6} stroke={INK} strokeWidth="1" />
        <line x1={234.3} y1={204.4} x2={239.9} y2={212.8} stroke={INK} strokeWidth="1" />
        <line x1={288.3} y1={168.4} x2={293.9} y2={176.8} stroke={INK} strokeWidth="1" />
        <text x={273} y={203} fontSize="14.5" fill={INK} textAnchor="middle"
          fontFamily={SERIF} fontStyle="italic">s</text>
      </svg>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════
   RECTANGULAR PRISM
   Oblique prism, front face 200 × 104, depth receding up-right
   (+52, −35). Same hidden-vertex treatment as the cube. Length and
   height leaders in ink; the receding depth w — the dimension the
   oblique drawing exists to convey — carries the accent.
   ═══════════════════════════════════════════════════════════════ */
export const RectangularPrismDiagram = () => {
  // front face
  const A = [70, 53], B = [270, 53], C = [270, 157], D = [70, 157];
  // back face (depth offset +52, −35); Dp is the hidden vertex
  const Ap = [122, 18], Bp = [322, 18], Cp = [322, 122], Dp = [122, 122];
  return (
    <div style={DIAGRAM_STYLE}>
      <svg viewBox="0 0 360 208" style={{ maxWidth: 380, width: '100%' }}
        aria-label="Rectangular prism drawn in oblique perspective with hidden edges dashed; leader lines outside the solid measure the length l, the width w, and the height h">
        {/* hidden edges (meet at the back-bottom-left vertex) */}
        <line x1={D[0]} y1={D[1]} x2={Dp[0]} y2={Dp[1]} stroke={INK} strokeWidth="1" strokeDasharray="3.5 3" />
        <line x1={Dp[0]} y1={Dp[1]} x2={Ap[0]} y2={Ap[1]} stroke={INK} strokeWidth="1" strokeDasharray="3.5 3" />
        <line x1={Dp[0]} y1={Dp[1]} x2={Cp[0]} y2={Cp[1]} stroke={INK} strokeWidth="1" strokeDasharray="3.5 3" />

        {/* front face */}
        <polygon points={`${A} ${B} ${C} ${D}`} fill="none" stroke={INK} strokeWidth="1.4" />
        {/* visible receding edges */}
        <line x1={A[0]} y1={A[1]} x2={Ap[0]} y2={Ap[1]} stroke={INK} strokeWidth="1.4" />
        <line x1={B[0]} y1={B[1]} x2={Bp[0]} y2={Bp[1]} stroke={INK} strokeWidth="1.4" />
        <line x1={C[0]} y1={C[1]} x2={Cp[0]} y2={Cp[1]} stroke={INK} strokeWidth="1.4" />
        {/* visible back edges */}
        <line x1={Ap[0]} y1={Ap[1]} x2={Bp[0]} y2={Bp[1]} stroke={INK} strokeWidth="1.4" />
        <line x1={Bp[0]} y1={Bp[1]} x2={Cp[0]} y2={Cp[1]} stroke={INK} strokeWidth="1.4" />

        {/* length l, measured below the front face */}
        <line x1={D[0]} y1={179} x2={C[0]} y2={179} stroke={INK} strokeWidth="1" />
        <line x1={D[0]} y1={174} x2={D[0]} y2={184} stroke={INK} strokeWidth="1" />
        <line x1={C[0]} y1={174} x2={C[0]} y2={184} stroke={INK} strokeWidth="1" />
        <text x={(D[0] + C[0]) / 2} y={198} fontSize="14.5" fill={INK} textAnchor="middle"
          fontFamily={SERIF} fontStyle="italic">l</text>

        {/* height h, measured left of the solid */}
        <line x1={48} y1={A[1]} x2={48} y2={D[1]} stroke={INK} strokeWidth="1" />
        <line x1={43} y1={A[1]} x2={53} y2={A[1]} stroke={INK} strokeWidth="1" />
        <line x1={43} y1={D[1]} x2={53} y2={D[1]} stroke={INK} strokeWidth="1" />
        <text x={34} y={(A[1] + D[1]) / 2 + 4} fontSize="14.5" fill={INK} textAnchor="end"
          fontFamily={SERIF} fontStyle="italic">h</text>

        {/* width w — the receding depth, the taught element, in accent;
            leader parallel to the bottom-right edge, offset along its
            normal (0.558, 0.829) */}
        <line x1={281.2} y1={173.6} x2={333.2} y2={138.6} stroke={ACCENT} strokeWidth="1" />
        <line x1={278.4} y1={169.5} x2={284.0} y2={177.7} stroke={ACCENT} strokeWidth="1" />
        <line x1={330.4} y1={134.5} x2={336.0} y2={142.7} stroke={ACCENT} strokeWidth="1" />
        <text x={315} y={169} fontSize="14.5" fill={ACCENT} textAnchor="middle"
          fontFamily={SERIF} fontStyle="italic">w</text>
      </svg>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════
   CYLINDER — approved v2 exemplar, moved verbatim from
   LessonVisualRenderer.jsx (only the constants now come from
   './figureLanguage').
   ═══════════════════════════════════════════════════════════════ */
export const CylinderDiagram = () => {
  const cx = 140, rx = 78, ry = 24, topY = 60, botY = 230;
  return (
    <div style={DIAGRAM_STYLE}>
      <svg viewBox="0 0 300 290" style={{ maxWidth: 320, width: '100%' }}
        aria-label="Cylinder diagram labeling the radius r of the circular base and the height h">
        {/* top ellipse, full outline */}
        <ellipse cx={cx} cy={topY} rx={rx} ry={ry} fill="none" stroke={INK} strokeWidth="1.4" />

        {/* sides */}
        <line x1={cx - rx} y1={topY} x2={cx - rx} y2={botY} stroke={INK} strokeWidth="1.4" />
        <line x1={cx + rx} y1={topY} x2={cx + rx} y2={botY} stroke={INK} strokeWidth="1.4" />

        {/* bottom ellipse: front half solid, hidden back half dashed */}
        <path d={`M ${cx - rx} ${botY} A ${rx} ${ry} 0 0 0 ${cx + rx} ${botY}`}
          fill="none" stroke={INK} strokeWidth="1.4" />
        <path d={`M ${cx - rx} ${botY} A ${rx} ${ry} 0 0 1 ${cx + rx} ${botY}`}
          fill="none" stroke={INK} strokeWidth="1" strokeDasharray="3.5 3" />

        {/* radius on the top face — the taught element, in accent */}
        <circle cx={cx} cy={topY} r="2.5" fill={ACCENT} />
        <line x1={cx} y1={topY} x2={cx + rx} y2={topY} stroke={ACCENT} strokeWidth="1.4" />
        <text x={cx + rx / 2 - 3} y={topY - 8} fontSize="14.5" fill={ACCENT}
          fontFamily={SERIF} fontStyle="italic">r</text>

        {/* height, measured outside the solid with small end ticks */}
        <line x1={cx + rx + 22} y1={topY} x2={cx + rx + 22} y2={botY} stroke={INK} strokeWidth="1" />
        <line x1={cx + rx + 17} y1={topY} x2={cx + rx + 27} y2={topY} stroke={INK} strokeWidth="1" />
        <line x1={cx + rx + 17} y1={botY} x2={cx + rx + 27} y2={botY} stroke={INK} strokeWidth="1" />
        <text x={cx + rx + 32} y={(topY + botY) / 2 + 5} fontSize="14.5" fill={INK}
          fontFamily={SERIF} fontStyle="italic">h</text>
      </svg>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════
   SPHERE
   Ink silhouette circle; the equator is a construction line, so the
   full ellipse is dashed. The radius — the only dimension a sphere
   has — is drawn in the equatorial plane from an accent center dot
   out to the surface, so it shows true length.
   ═══════════════════════════════════════════════════════════════ */
export const SphereDiagram = () => {
  const cx = 140, cy = 124, r = 104, eqRy = 30;
  return (
    <div style={DIAGRAM_STYLE}>
      <svg viewBox="0 0 280 248" style={{ maxWidth: 300, width: '100%' }}
        aria-label="Sphere drawn as an ink circle with a dashed equatorial ellipse; the radius r runs from the center dot to the surface">
        {/* silhouette */}
        <circle cx={cx} cy={cy} r={r} fill="none" stroke={INK} strokeWidth="1.4" />

        {/* equatorial ellipse, dashed construction line */}
        <ellipse cx={cx} cy={cy} rx={r} ry={eqRy} fill="none" stroke={INK}
          strokeWidth="1" strokeDasharray="3.5 3" />

        {/* radius — the taught element, in accent, drawn in the
            equatorial plane so it shows true length */}
        <circle cx={cx} cy={cy} r="2.5" fill={ACCENT} />
        <line x1={cx} y1={cy} x2={cx + r} y2={cy} stroke={ACCENT} strokeWidth="1.4" />
        <text x={cx + r / 2 - 3} y={cy - 10} fontSize="14.5" fill={ACCENT}
          fontFamily={SERIF} fontStyle="italic">r</text>
      </svg>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════
   CONE
   Apex-up cone: slant sides in ink, base ellipse front half solid /
   back half dashed. The height is an interior construction line, so
   it is drawn dashed from apex to base center with a right-angle
   square tick where it meets the radius. The base radius carries
   the accent.
   ═══════════════════════════════════════════════════════════════ */
export const ConeDiagram = () => {
  const apexX = 150, apexY = 20, cy = 214, rx = 96, ry = 24;
  return (
    <div style={DIAGRAM_STYLE}>
      <svg viewBox="0 0 300 248" style={{ maxWidth: 320, width: '100%' }}
        aria-label="Cone diagram showing the dashed height h from the apex perpendicular to the center of the circular base and the radius r of the base">
        {/* slant sides */}
        <line x1={apexX} y1={apexY} x2={apexX - rx} y2={cy} stroke={INK} strokeWidth="1.4" />
        <line x1={apexX} y1={apexY} x2={apexX + rx} y2={cy} stroke={INK} strokeWidth="1.4" />

        {/* base ellipse: front half solid, hidden back half dashed */}
        <path d={`M ${apexX - rx} ${cy} A ${rx} ${ry} 0 0 0 ${apexX + rx} ${cy}`}
          fill="none" stroke={INK} strokeWidth="1.4" />
        <path d={`M ${apexX - rx} ${cy} A ${rx} ${ry} 0 0 1 ${apexX + rx} ${cy}`}
          fill="none" stroke={INK} strokeWidth="1" strokeDasharray="3.5 3" />

        {/* height, an interior construction line: dashed, with a
            right-angle square tick where it meets the base radius */}
        <line x1={apexX} y1={apexY} x2={apexX} y2={cy} stroke={INK} strokeWidth="1"
          strokeDasharray="3.5 3" />
        <rect x={apexX} y={cy - 9} width="9" height="9" fill="none" stroke={INK} strokeWidth="1" />
        <text x={apexX - 10} y={(apexY + cy) / 2 + 4} fontSize="14.5" fill={INK}
          textAnchor="end" fontFamily={SERIF} fontStyle="italic">h</text>

        {/* base radius — the taught element, in accent */}
        <circle cx={apexX} cy={cy} r="2.5" fill={ACCENT} />
        <line x1={apexX} y1={cy} x2={apexX + rx} y2={cy} stroke={ACCENT} strokeWidth="1.4" />
        <text x={apexX + rx / 2 + 4} y={cy - 8} fontSize="14.5" fill={ACCENT}
          fontFamily={SERIF} fontStyle="italic">r</text>
      </svg>
    </div>
  );
};
