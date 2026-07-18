import React from 'react';

/* ═══════════════════════════════════════════════════════
   DESIGN SYSTEM CONSTANTS
   ═══════════════════════════════════════════════════════ */
const COLORS = {
  grid: '#e2e8f0',
  axis: '#1e293b',
  axisLabel: '#64748b',
  primary: '#6366f1',
  secondary: '#f97316',
  accent1: '#06b6d4',
  accent2: '#ec4899',
  success: '#22c55e',
  warning: '#f59e0b',
  error: '#ef4444',
  text: '#0f172a',
  textMuted: '#94a3b8',
  bg: '#ffffff',
  bgSubtle: '#f8fafc',
  callout: '#fef3c7',
  calloutBorder: '#fbbf24',
};

// No wrapper style needed — parent .tb-figure provides card styling
const DIAGRAM_STYLE = {
  textAlign: 'center',
};

const FONT = 'var(--font-ui, system-ui, -apple-system, sans-serif)';

/* ═══════════════════════════════════════════════════════
   HELPER: coordinate system for a standard x-y plane
   ═══════════════════════════════════════════════════════ */
function makeCoordSystem({ originX, originY, scale }) {
  return (x, y) => [originX + x * scale, originY - y * scale];
}

/* ═══════════════════════════════════════════════════════
   HELPER: render grid, axes, and labels for coord planes
   ═══════════════════════════════════════════════════════ */
function renderGrid({ originX, originY, scale, xRange, yRange, width, height }) {
  const elements = [];
  // Vertical grid lines
  for (let i = xRange[0]; i <= xRange[1]; i++) {
    elements.push(
      <line key={`vg${i}`} x1={originX + i * scale} y1={10} x2={originX + i * scale} y2={height - 10}
        stroke={COLORS.grid} strokeWidth="0.5" />
    );
  }
  // Horizontal grid lines
  for (let i = yRange[0]; i <= yRange[1]; i++) {
    elements.push(
      <line key={`hg${i}`} x1={10} y1={originY - i * scale} x2={width - 10} y2={originY - i * scale}
        stroke={COLORS.grid} strokeWidth="0.5" />
    );
  }
  return elements;
}

function renderAxes({ originX, originY, width, height, pad = 20 }) {
  return (
    <g>
      {/* X axis */}
      <line x1={pad} y1={originY} x2={width - pad} y2={originY}
        stroke={COLORS.axis} strokeWidth="2" />
      <polygon points={`${width - pad},${originY} ${width - pad - 8},${originY - 4} ${width - pad - 8},${originY + 4}`}
        fill={COLORS.axis} />
      {/* Y axis */}
      <line x1={originX} y1={pad} x2={originX} y2={height - pad}
        stroke={COLORS.axis} strokeWidth="2" />
      <polygon points={`${originX},${pad} ${originX - 4},${pad + 8} ${originX + 4},${pad + 8}`}
        fill={COLORS.axis} />
      {/* Axis letters */}
      <text x={width - pad + 6} y={originY + 5} fontSize="13" fill={COLORS.axis}
        fontWeight="700" fontFamily={FONT}>x</text>
      <text x={originX + 6} y={pad - 2} fontSize="13" fill={COLORS.axis}
        fontWeight="700" fontFamily={FONT}>y</text>
    </g>
  );
}

function renderAxisLabels({ originX, originY, scale, xTicks, yTicks }) {
  return (
    <g>
      {xTicks.filter(i => i !== 0).map(i => (
        <text key={`xl${i}`} x={originX + i * scale} y={originY + 16}
          fontSize="11" fill={COLORS.axisLabel} textAnchor="middle" fontFamily={FONT}>{i}</text>
      ))}
      {yTicks.filter(i => i !== 0).map(i => (
        <text key={`yl${i}`} x={originX - 8} y={originY - i * scale + 4}
          fontSize="11" fill={COLORS.axisLabel} textAnchor="end" fontFamily={FONT}>{i}</text>
      ))}
    </g>
  );
}

/* ═══════════════════════════════════════════════════════
   HELPER: pill-shaped annotation label
   ═══════════════════════════════════════════════════════ */
function PillLabel({ x, y, text, color, bgColor, borderColor, fontSize = 13 }) {
  const padX = 12, padY = 4;
  const estWidth = text.length * (fontSize * 0.55) + padX * 2;
  return (
    <g>
      <rect x={x - estWidth / 2} y={y - fontSize - padY} width={estWidth} height={fontSize + padY * 2 + 2}
        rx={fontSize} fill={bgColor || '#fff'} stroke={borderColor || color} strokeWidth="1.5" />
      <text x={x} y={y} fontSize={fontSize} fill={color} fontWeight="700"
        textAnchor="middle" fontFamily={FONT}>{text}</text>
    </g>
  );
}

/* ═══════════════════════════════════════════════════════
   HELPER: teaching callout card (left-border accent)
   ═══════════════════════════════════════════════════════ */
function CalloutCard({ x, y, width, text, color, fontSize = 12 }) {
  const h = 32;
  return (
    <g>
      <rect x={x} y={y} width={width} height={h} rx="8" fill="#fff"
        stroke={COLORS.grid} strokeWidth="1" />
      <rect x={x} y={y} width="4" height={h} rx="2" fill={color} />
      <text x={x + 16} y={y + h / 2 + fontSize * 0.35} fontSize={fontSize}
        fill={COLORS.text} fontWeight="600" fontFamily={FONT}>{text}</text>
    </g>
  );
}

/* ═══════════════════════════════════════════════════════
   HELPER: formula card for 3D shapes
   ═══════════════════════════════════════════════════════ */
function FormulaCard({ x, y, width, formulas, color = COLORS.primary }) {
  const h = formulas.length * 24 + 16;
  return (
    <g>
      <rect x={x} y={y} width={width} height={h} rx="10" fill="#fff"
        stroke={COLORS.grid} strokeWidth="1" />
      <rect x={x} y={y} width="4" height={h} rx="2" fill={color} />
      {formulas.map((f, i) => (
        <text key={i} x={x + width / 2} y={y + 20 + i * 24} fontSize="14"
          fill={COLORS.text} fontWeight="700" textAnchor="middle" fontFamily={FONT}>{f}</text>
      ))}
    </g>
  );
}

/* ═══════════════════════════════════════════════════════
   HELPER: dimension arrow with label for 3D shapes
   ═══════════════════════════════════════════════════════ */
function DimensionArrow({ x1, y1, x2, y2, label, color = COLORS.secondary, offset = 0, labelSide = 'right' }) {
  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2;
  const dx = x2 - x1;
  const dy = y2 - y1;
  const len = Math.sqrt(dx * dx + dy * dy);
  const nx = -dy / len * offset;
  const ny = dx / len * offset;
  const lx = labelSide === 'right' ? mx + nx + 10 : mx + nx - 10;
  const ly = my + ny + 4;
  const anchor = labelSide === 'right' ? 'start' : 'end';

  return (
    <g>
      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth="1.5"
        strokeDasharray="5 3" />
      {/* arrowheads */}
      <circle cx={x1} cy={y1} r="2.5" fill={color} />
      <circle cx={x2} cy={y2} r="2.5" fill={color} />
      <text x={lx} y={ly} fontSize="14" fill={color} fontWeight="700"
        textAnchor={anchor} fontFamily={FONT}>{label}</text>
    </g>
  );
}

/* ═══════════════════════════════════════════════════════════════
   1. PARALLEL LINES — annotated teaching diagram
      Lines: y = 2x + 1 (primary) and y = 2x - 2 (secondary)
      Both have slope 2 — matching slope triangles shown.
   ═══════════════════════════════════════════════════════════════ */
const ParallelLinesDiagram = () => {
  const W = 480, H = 420;
  const oX = 140, oY = 290, sc = 40;
  const px = makeCoordSystem({ originX: oX, originY: oY, scale: sc });

  const line1Start = px(-2, -3);
  const line1End = px(4, 9);
  const line2Start = px(-1, -4);
  const line2End = px(5, 8);

  const tri1Base = px(1, 3);
  const tri1Run = px(2, 3);
  const tri1Rise = px(2, 5);

  const tri2Base = px(2, 2);
  const tri2Run = px(3, 2);
  const tri2Rise = px(3, 4);

  return (
    <div style={DIAGRAM_STYLE}>
      <svg viewBox={`0 0 ${W} ${H}`} style={{ maxWidth: 520, width: '100%' }}
        aria-label="Parallel lines diagram showing y equals 2x plus 1 and y equals 2x minus 2 with slope triangles">
        <defs>
          <linearGradient id="par-bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={COLORS.bgSubtle} />
            <stop offset="100%" stopColor="#f1f5f9" />
          </linearGradient>
        </defs>
        <rect width={W} height={H} fill="url(#par-bg)" rx="12" />

        {renderGrid({ originX: oX, originY: oY, scale: sc, xRange: [-3, 8], yRange: [-5, 10], width: W, height: H })}
        {renderAxes({ originX: oX, originY: oY, width: W, height: H })}
        {renderAxisLabels({ originX: oX, originY: oY, scale: sc,
          xTicks: [-2, -1, 1, 2, 3, 4, 5, 6, 7],
          yTicks: [-4, -3, -2, -1, 1, 2, 3, 4, 5, 6, 7, 8, 9]
        })}

        {/* Line 1: y = 2x + 1 */}
        <line x1={line1Start[0]} y1={line1Start[1]} x2={line1End[0]} y2={line1End[1]}
          stroke={COLORS.primary} strokeWidth="3" strokeLinecap="round" />

        {/* Slope triangle on line 1 */}
        <line x1={tri1Base[0]} y1={tri1Base[1]} x2={tri1Run[0]} y2={tri1Run[1]}
          stroke={COLORS.success} strokeWidth="2.5" strokeDasharray="6 3" />
        <line x1={tri1Run[0]} y1={tri1Run[1]} x2={tri1Rise[0]} y2={tri1Rise[1]}
          stroke={COLORS.accent2} strokeWidth="2.5" strokeDasharray="6 3" />
        <text x={(tri1Base[0] + tri1Run[0]) / 2} y={tri1Base[1] + 16}
          fontSize="12" fill={COLORS.success} fontWeight="700" textAnchor="middle" fontFamily={FONT}>run 1</text>
        <text x={tri1Run[0] + 14} y={(tri1Run[1] + tri1Rise[1]) / 2 + 4}
          fontSize="12" fill={COLORS.accent2} fontWeight="700" fontFamily={FONT}>rise 2</text>

        {/* Line 2: y = 2x - 2 */}
        <line x1={line2Start[0]} y1={line2Start[1]} x2={line2End[0]} y2={line2End[1]}
          stroke={COLORS.secondary} strokeWidth="3" strokeLinecap="round" />

        {/* Slope triangle on line 2 */}
        <line x1={tri2Base[0]} y1={tri2Base[1]} x2={tri2Run[0]} y2={tri2Run[1]}
          stroke={COLORS.success} strokeWidth="2.5" strokeDasharray="6 3" />
        <line x1={tri2Run[0]} y1={tri2Run[1]} x2={tri2Rise[0]} y2={tri2Rise[1]}
          stroke={COLORS.accent2} strokeWidth="2.5" strokeDasharray="6 3" />
        <text x={(tri2Base[0] + tri2Run[0]) / 2} y={tri2Base[1] + 16}
          fontSize="12" fill={COLORS.success} fontWeight="700" textAnchor="middle" fontFamily={FONT}>run 1</text>
        <text x={tri2Run[0] + 14} y={(tri2Run[1] + tri2Rise[1]) / 2 + 4}
          fontSize="12" fill={COLORS.accent2} fontWeight="700" fontFamily={FONT}>rise 2</text>

        {/* Equation labels (pill style) */}
        <PillLabel x={390} y={45} text="y = 2x + 1  (m = 2)" color={COLORS.primary}
          bgColor="#eef2ff" borderColor={COLORS.primary} />
        <PillLabel x={390} y={78} text="y = 2x - 2  (m = 2)" color={COLORS.secondary}
          bgColor="#fff7ed" borderColor={COLORS.secondary} />

        {/* Teaching callout */}
        <CalloutCard x={60} y={H - 42} width={360}
          text="Same slope = same steepness = never cross = PARALLEL"
          color={COLORS.success} fontSize={12} />
      </svg>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════
   2. PERPENDICULAR LINES — annotated teaching diagram
      Lines: y = 2x (primary, m=2) and y = -1/2 x (secondary, m=-1/2)
      Product: 2 x (-1/2) = -1. Right-angle marker at intersection.
   ═══════════════════════════════════════════════════════════════ */
const PerpendicularLinesDiagram = () => {
  const W = 500, H = 420;
  const oX = 220, oY = 230, sc = 40;
  const px = makeCoordSystem({ originX: oX, originY: oY, scale: sc });

  const l1a = px(-2, -4);
  const l1b = px(3, 6);
  const l2a = px(-4, 2);
  const l2b = px(5, -2.5);

  const triA = px(0, 0);
  const triB = px(1, 0);
  const triC = px(1, 2);

  const perpTriA = px(0, 0);
  const perpTriB = px(2, 0);
  const perpTriC = px(2, -1);

  return (
    <div style={DIAGRAM_STYLE}>
      <svg viewBox={`0 0 ${W} ${H}`} style={{ maxWidth: 540, width: '100%' }}
        aria-label="Perpendicular lines diagram showing y equals 2x and y equals negative one half x with right angle marker">
        <defs>
          <linearGradient id="perp-bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={COLORS.bgSubtle} />
            <stop offset="100%" stopColor="#f1f5f9" />
          </linearGradient>
        </defs>
        <rect width={W} height={H} fill="url(#perp-bg)" rx="12" />

        {renderGrid({ originX: oX, originY: oY, scale: sc, xRange: [-5, 7], yRange: [-5, 7], width: W, height: H })}
        {renderAxes({ originX: oX, originY: oY, width: W, height: H })}
        {renderAxisLabels({ originX: oX, originY: oY, scale: sc,
          xTicks: [-4, -3, -2, -1, 1, 2, 3, 4, 5, 6],
          yTicks: [-4, -3, -2, -1, 1, 2, 3, 4]
        })}

        {/* Line 1: y = 2x */}
        <line x1={l1a[0]} y1={l1a[1]} x2={l1b[0]} y2={l1b[1]}
          stroke={COLORS.primary} strokeWidth="3" strokeLinecap="round" />
        {/* Slope triangle for m = 2 */}
        <line x1={triA[0]} y1={triA[1]} x2={triB[0]} y2={triB[1]}
          stroke={COLORS.success} strokeWidth="2.5" strokeDasharray="5 3" />
        <line x1={triB[0]} y1={triB[1]} x2={triC[0]} y2={triC[1]}
          stroke={COLORS.accent2} strokeWidth="2.5" strokeDasharray="5 3" />
        <text x={(triA[0] + triB[0]) / 2} y={triA[1] + 18}
          fontSize="11" fill={COLORS.success} fontWeight="700" textAnchor="middle" fontFamily={FONT}>1</text>
        <text x={triB[0] + 14} y={(triB[1] + triC[1]) / 2 + 4}
          fontSize="11" fill={COLORS.accent2} fontWeight="700" fontFamily={FONT}>2</text>

        {/* Line 2: y = -1/2 x */}
        <line x1={l2a[0]} y1={l2a[1]} x2={l2b[0]} y2={l2b[1]}
          stroke={COLORS.secondary} strokeWidth="3" strokeLinecap="round" />
        {/* Slope triangle for m = -1/2 */}
        <line x1={perpTriA[0]} y1={perpTriA[1]} x2={perpTriB[0]} y2={perpTriB[1]}
          stroke={COLORS.success} strokeWidth="2.5" strokeDasharray="5 3" />
        <line x1={perpTriB[0]} y1={perpTriB[1]} x2={perpTriC[0]} y2={perpTriC[1]}
          stroke={COLORS.accent2} strokeWidth="2.5" strokeDasharray="5 3" />
        <text x={(perpTriA[0] + perpTriB[0]) / 2} y={perpTriA[1] + 18}
          fontSize="11" fill={COLORS.success} fontWeight="700" textAnchor="middle" fontFamily={FONT}>2</text>
        <text x={perpTriB[0] + 14} y={(perpTriB[1] + perpTriC[1]) / 2 + 4}
          fontSize="11" fill={COLORS.accent2} fontWeight="700" fontFamily={FONT}>-1</text>

        {/* Right-angle marker at origin */}
        <rect x={oX} y={oY - 14} width="14" height="14"
          fill="none" stroke={COLORS.accent1} strokeWidth="2.5" />

        {/* Equation labels */}
        <PillLabel x={400} y={38} text="y = 2x  (m = 2)" color={COLORS.primary}
          bgColor="#eef2ff" borderColor={COLORS.primary} />
        <PillLabel x={400} y={72} text={'y = -\u00bdx  (m = -\u00bd)'} color={COLORS.secondary}
          bgColor="#fff7ed" borderColor={COLORS.secondary} />

        {/* Negative reciprocal callout */}
        <CalloutCard x={40} y={H - 40} width={420}
          text={'Flip & negate: 2 \u2192 -\u00bd    Check: 2 \u00d7 (-\u00bd) = -1  \u2713  \u2192 PERPENDICULAR'}
          color={COLORS.warning} fontSize={12} />
      </svg>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════
   3. SLOPE FROM GRAPH
      Shows a line with two marked points, rise/run triangle,
      and slope calculation formula.
   ═══════════════════════════════════════════════════════════════ */
const SlopeFromGraphDiagram = () => {
  const W = 500, H = 440;
  const oX = 130, oY = 200, sc = 35;
  const px = (x, y) => [oX + x * sc, oY - y * sc];

  const [p1x, p1y] = px(0, 4);
  const [p2x, p2y] = px(5, 1);
  const [runEndX, runEndY] = px(5, 4);

  return (
    <div style={DIAGRAM_STYLE}>
      <svg viewBox={`0 0 ${W} ${H}`} style={{ maxWidth: 540, width: '100%' }}
        aria-label="Slope from graph diagram showing rise over run calculation with points (0,4) and (5,1)">
        <defs>
          <linearGradient id="sfg-bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={COLORS.bgSubtle} />
            <stop offset="100%" stopColor="#f1f5f9" />
          </linearGradient>
        </defs>
        <rect width={W} height={H} fill="url(#sfg-bg)" rx="12" />

        {renderGrid({ originX: oX, originY: oY, scale: sc, xRange: [-2, 9], yRange: [-4, 6], width: W, height: H })}
        {renderAxes({ originX: oX, originY: oY, width: W, height: H })}
        {renderAxisLabels({ originX: oX, originY: oY, scale: sc,
          xTicks: [-2, -1, 1, 2, 3, 4, 5, 6, 7, 8],
          yTicks: [-3, -2, -1, 1, 2, 3, 4, 5]
        })}

        {/* The line */}
        <line x1={px(-2, 5.2)[0]} y1={px(-2, 5.2)[1]} x2={px(8, -0.8)[0]} y2={px(8, -0.8)[1]}
          stroke={COLORS.primary} strokeWidth="3" strokeLinecap="round" />

        {/* Run arrow (horizontal) */}
        <line x1={p1x} y1={p1y} x2={runEndX} y2={runEndY}
          stroke={COLORS.success} strokeWidth="3" strokeLinecap="round" />
        <polygon points={`${runEndX},${runEndY} ${runEndX - 8},${runEndY - 5} ${runEndX - 8},${runEndY + 5}`}
          fill={COLORS.success} />

        {/* Rise arrow (vertical) */}
        <line x1={runEndX} y1={runEndY} x2={p2x} y2={p2y}
          stroke={COLORS.accent2} strokeWidth="3" strokeLinecap="round" />
        <polygon points={`${p2x},${p2y} ${p2x - 5},${p2y - 8} ${p2x + 5},${p2y - 8}`}
          fill={COLORS.accent2} />

        {/* Run / Rise labels */}
        <text x={(p1x + runEndX) / 2} y={p1y - 10} fontSize="16" fill={COLORS.success}
          fontWeight="800" textAnchor="middle" fontFamily={FONT}>5</text>
        <text x={runEndX + 14} y={(runEndY + p2y) / 2 + 5} fontSize="16" fill={COLORS.accent2}
          fontWeight="800" fontFamily={FONT}>-3</text>

        {/* Points with white stroke border */}
        <circle cx={p1x} cy={p1y} r="8" fill={COLORS.warning} stroke="#fff" strokeWidth="3" />
        <circle cx={p2x} cy={p2y} r="8" fill={COLORS.warning} stroke="#fff" strokeWidth="3" />

        {/* Point labels */}
        <PillLabel x={p1x + 40} y={p1y - 12} text="(0, 4)" color={COLORS.text}
          bgColor="#fff" borderColor={COLORS.grid} fontSize={12} />
        <PillLabel x={p2x + 40} y={p2y - 12} text="(5, 1)" color={COLORS.text}
          bgColor="#fff" borderColor={COLORS.grid} fontSize={12} />

        {/* Formula card */}
        <rect x={100} y={H - 76} width={300} height={60} rx="12" fill="#fff"
          stroke={COLORS.grid} strokeWidth="1.5" />
        <rect x={100} y={H - 76} width="4" height={60} rx="2" fill={COLORS.primary} />
        <text x={148} y={H - 48} fontSize="16" fill={COLORS.accent2} fontWeight="700" fontFamily={FONT}>Rise</text>
        <line x1={138} y1={H - 42} x2={190} y2={H - 42} stroke={COLORS.text} strokeWidth="2" />
        <text x={148} y={H - 26} fontSize="16" fill={COLORS.success} fontWeight="700" fontFamily={FONT}>Run</text>
        <text x={210} y={H - 38} fontSize="20" fill={COLORS.text} fontWeight="700" fontFamily={FONT}>=</text>
        <text x={250} y={H - 48} fontSize="16" fill={COLORS.text} fontWeight="700" fontFamily={FONT}>-3</text>
        <line x1={242} y1={H - 42} x2={282} y2={H - 42} stroke={COLORS.text} strokeWidth="2" />
        <text x={256} y={H - 26} fontSize="16" fill={COLORS.text} fontWeight="700" fontFamily={FONT}>5</text>
      </svg>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════
   4. Y-INTERCEPT DIAGRAM
      Shows a line crossing the y-axis with callout annotation.
   ═══════════════════════════════════════════════════════════════ */
const YInterceptDiagram = () => {
  const W = 500, H = 440;
  const oX = 220, oY = 200, sc = 35;
  const px = (x, y) => [oX + x * sc, oY - y * sc];

  const [la, lb] = [px(-3, -3), px(2, 7)];
  const yIntPx = px(0, 3);

  return (
    <div style={DIAGRAM_STYLE}>
      <svg viewBox={`0 0 ${W} ${H}`} style={{ maxWidth: 540, width: '100%' }}
        aria-label="Y-intercept diagram showing where the line y equals 2x plus 3 crosses the y-axis at point (0, 3)">
        <defs>
          <linearGradient id="yint-bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={COLORS.bgSubtle} />
            <stop offset="100%" stopColor="#f1f5f9" />
          </linearGradient>
          <marker id="yint-arrow" markerWidth="10" markerHeight="10" refX="5" refY="3" orient="auto">
            <polygon points="0 0, 10 3, 0 6" fill={COLORS.secondary} />
          </marker>
        </defs>
        <rect width={W} height={H} fill="url(#yint-bg)" rx="12" />

        {renderGrid({ originX: oX, originY: oY, scale: sc, xRange: [-3, 7], yRange: [-4, 6], width: W, height: H })}
        {renderAxes({ originX: oX, originY: oY, width: W, height: H })}
        {renderAxisLabels({ originX: oX, originY: oY, scale: sc,
          xTicks: [-3, -2, -1, 1, 2, 3, 4, 5, 6],
          yTicks: [-4, -3, -2, -1, 1, 2, 3, 4, 5]
        })}

        {/* The line */}
        <line x1={la[0]} y1={la[1]} x2={lb[0]} y2={lb[1]}
          stroke={COLORS.primary} strokeWidth="3" strokeLinecap="round" />

        {/* Highlight on y-axis near intercept */}
        <line x1={oX} y1={oY - 5 * sc} x2={oX} y2={yIntPx[1] + 20}
          stroke={COLORS.warning} strokeWidth="6" opacity="0.2" />

        {/* Y-intercept point */}
        <circle cx={yIntPx[0]} cy={yIntPx[1]} r="10" fill={COLORS.warning}
          stroke="#fff" strokeWidth="3" />

        {/* Annotation arrow */}
        <line x1={yIntPx[0] + 50} y1={yIntPx[1] - 30} x2={yIntPx[0] + 15} y2={yIntPx[1] - 7}
          stroke={COLORS.secondary} strokeWidth="2.5" markerEnd="url(#yint-arrow)" />

        {/* Annotation labels */}
        <PillLabel x={yIntPx[0] + 100} y={yIntPx[1] - 40} text="Y-intercept" color={COLORS.secondary}
          bgColor="#fff7ed" borderColor={COLORS.secondary} fontSize={14} />
        <text x={yIntPx[0] + 100} y={yIntPx[1] - 18} fontSize="13" fill={COLORS.secondary}
          fontWeight="600" textAnchor="middle" fontFamily={FONT}>(0, 3)</text>

        {/* Equation label */}
        <PillLabel x={365} y={268} text="y = 2x + 3" color={COLORS.primary}
          bgColor="#eef2ff" borderColor={COLORS.primary} fontSize={16} />

        {/* Teaching callout */}
        <CalloutCard x={70} y={H - 54} width={360}
          text="The line crosses the y-axis at (0, 3)"
          color={COLORS.warning} fontSize={13} />
      </svg>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════
   5. PARABOLA FROM GRAPH
      Shows y = 2(x-2)^2 - 3 with vertex, y-intercept, mirror point.
   ═══════════════════════════════════════════════════════════════ */
const ParabolaFromGraphDiagram = () => {
  const W = 500, H = 440;
  const oX = 200, oY = 260, sc = 35;
  const px = (x, y) => [oX + x * sc, oY - y * sc];

  const vertex = px(2, -3);
  const yInt = px(0, 5);
  const mirror = px(4, 5);

  const points = [];
  for (let t = -0.5; t <= 4.5; t += 0.1) {
    const y = 2 * (t - 2) * (t - 2) - 3;
    const [pxVal, pyVal] = px(t, y);
    points.push(`${pxVal},${pyVal}`);
  }

  return (
    <div style={DIAGRAM_STYLE}>
      <svg viewBox={`0 0 ${W} ${H}`} style={{ maxWidth: 540, width: '100%' }}
        aria-label="Parabola diagram showing y equals 2 times (x minus 2) squared minus 3 with vertex at (2, -3)">
        <defs>
          <linearGradient id="para-bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={COLORS.bgSubtle} />
            <stop offset="100%" stopColor="#f1f5f9" />
          </linearGradient>
        </defs>
        <rect width={W} height={H} fill="url(#para-bg)" rx="12" />

        {renderGrid({ originX: oX, originY: oY, scale: sc, xRange: [-3, 8], yRange: [-5, 7], width: W, height: H })}
        {renderAxes({ originX: oX, originY: oY, width: W, height: H })}
        {renderAxisLabels({ originX: oX, originY: oY, scale: sc,
          xTicks: [-2, -1, 1, 2, 3, 4, 5, 6],
          yTicks: [-4, -3, -2, -1, 1, 2, 3, 4, 5, 6]
        })}

        {/* Axis of symmetry */}
        <line x1={vertex[0]} y1={20} x2={vertex[0]} y2={oY + 30}
          stroke={COLORS.textMuted} strokeWidth="1" strokeDasharray="4 3" />

        {/* The parabola */}
        <polyline points={points.join(' ')} fill="none"
          stroke={COLORS.primary} strokeWidth="3" strokeLinecap="round" />

        {/* Vertex point */}
        <circle cx={vertex[0]} cy={vertex[1]} r="8" fill={COLORS.warning}
          stroke="#fff" strokeWidth="3" />
        <PillLabel x={vertex[0] + 56} y={vertex[1] + 5} text="(2, -3) vertex" color={COLORS.text}
          bgColor="#fff" borderColor={COLORS.grid} fontSize={12} />

        {/* Y-intercept */}
        <circle cx={yInt[0]} cy={yInt[1]} r="7" fill={COLORS.success}
          stroke="#fff" strokeWidth="3" />
        <PillLabel x={yInt[0] - 42} y={yInt[1] - 10} text="(0, 5)" color={COLORS.text}
          bgColor="#fff" borderColor={COLORS.grid} fontSize={12} />

        {/* Mirror point */}
        <circle cx={mirror[0]} cy={mirror[1]} r="7" fill={COLORS.success}
          stroke="#fff" strokeWidth="3" />
        <PillLabel x={mirror[0] + 42} y={mirror[1] - 10} text="(4, 5)" color={COLORS.text}
          bgColor="#fff" borderColor={COLORS.grid} fontSize={12} />

        {/* Equation card */}
        <rect x={290} y={H - 80} width={180} height={60} rx="12" fill="#fff"
          stroke={COLORS.grid} strokeWidth="1.5" />
        <rect x={290} y={H - 80} width="4" height={60} rx="2" fill={COLORS.primary} />
        <text x={384} y={H - 54} fontSize="14" fill={COLORS.primary} fontWeight="700"
          textAnchor="middle" fontFamily={FONT}>y = 2(x - 2)² - 3</text>
        <text x={384} y={H - 34} fontSize="13" fill={COLORS.axisLabel} fontWeight="600"
          textAnchor="middle" fontFamily={FONT}>y = 2x² - 8x + 5</text>
      </svg>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════
   6. SLOPE FROM TABLE
      Shows x/y value table with delta arcs and slope formula.
   ═══════════════════════════════════════════════════════════════ */
const SlopeFromTableDiagram = () => {
  const xs = [1, 3, 5, 7];
  const ys = [2, 5, 8, 11];
  const dx = 2;
  const dy = 3;

  const colW = 80;
  const rowH = 44;
  const tableX = 50;
  const tableY = 30;
  const cols = xs.length + 1;
  const rows = 3;
  const tW = cols * colW;
  const tH = rows * rowH;
  const W = tW + 180;
  const H = tableY + tH + 130;

  return (
    <div style={DIAGRAM_STYLE}>
      <svg viewBox={`0 0 ${W} ${H}`} style={{ maxWidth: 600, width: '100%' }}
        aria-label="Slope from table showing x values 1, 3, 5, 7 and y values 2, 5, 8, 11 with constant differences">
        <defs>
          <linearGradient id="sft-bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={COLORS.bgSubtle} />
            <stop offset="100%" stopColor="#f1f5f9" />
          </linearGradient>
        </defs>
        <rect width={W} height={H} fill="url(#sft-bg)" rx="12" />

        {/* Table lines */}
        {Array.from({ length: rows + 1 }, (_, i) => (
          <line key={`h${i}`} x1={tableX} y1={tableY + i * rowH} x2={tableX + tW} y2={tableY + i * rowH}
            stroke={COLORS.grid} strokeWidth="1.5" />
        ))}
        {Array.from({ length: cols + 1 }, (_, i) => (
          <line key={`v${i}`} x1={tableX + i * colW} y1={tableY} x2={tableX + i * colW} y2={tableY + tH}
            stroke={COLORS.grid} strokeWidth="1.5" />
        ))}

        {/* Header backgrounds */}
        <rect x={tableX} y={tableY} width={tW} height={rowH} fill="#eef2ff" rx="0" />
        <rect x={tableX} y={tableY + rowH} width={colW} height={rowH} fill="#eef2ff" />
        <rect x={tableX} y={tableY + rowH * 2} width={colW} height={rowH} fill="#eef2ff" />

        {/* Header row */}
        {xs.map((x, i) => (
          <text key={`xh${i}`} x={tableX + (i + 1) * colW + colW * 0.5} y={tableY + rowH * 0.5 + 6}
            textAnchor="middle" fontSize="14" fontWeight="600" fill={COLORS.axisLabel} fontFamily={FONT}>{x}</text>
        ))}

        {/* x row */}
        <text x={tableX + colW * 0.5} y={tableY + rowH + rowH * 0.5 + 6}
          textAnchor="middle" fontSize="15" fontWeight="700" fill={COLORS.primary} fontFamily={FONT}>x</text>
        {xs.map((x, i) => (
          <text key={`xv${i}`} x={tableX + (i + 1) * colW + colW * 0.5} y={tableY + rowH + rowH * 0.5 + 6}
            textAnchor="middle" fontSize="14" fill={COLORS.text} fontFamily={FONT}>{x}</text>
        ))}

        {/* y row */}
        <text x={tableX + colW * 0.5} y={tableY + rowH * 2 + rowH * 0.5 + 6}
          textAnchor="middle" fontSize="15" fontWeight="700" fill={COLORS.accent2} fontFamily={FONT}>y</text>
        {ys.map((y, i) => (
          <text key={`yv${i}`} x={tableX + (i + 1) * colW + colW * 0.5} y={tableY + rowH * 2 + rowH * 0.5 + 6}
            textAnchor="middle" fontSize="14" fill={COLORS.text} fontFamily={FONT}>{y}</text>
        ))}

        {/* Delta x arcs (above header) */}
        {xs.slice(0, -1).map((_, i) => {
          const cx1 = tableX + (i + 1) * colW + colW * 0.5;
          const cx2 = tableX + (i + 2) * colW + colW * 0.5;
          const midX = (cx1 + cx2) / 2;
          const arcY = tableY - 2;
          return (
            <g key={`dxa${i}`}>
              <path d={`M ${cx1} ${arcY} Q ${midX} ${arcY - 24} ${cx2} ${arcY}`}
                fill="none" stroke={COLORS.primary} strokeWidth="2" strokeDasharray="4 2" />
              <text x={midX} y={arcY - 26} textAnchor="middle" fontSize="11"
                fontWeight="700" fill={COLORS.primary} fontFamily={FONT}>+{dx}</text>
            </g>
          );
        })}

        {/* Delta y arcs (below table) */}
        {ys.slice(0, -1).map((_, i) => {
          const cx1 = tableX + (i + 1) * colW + colW * 0.5;
          const cx2 = tableX + (i + 2) * colW + colW * 0.5;
          const midX = (cx1 + cx2) / 2;
          const arcY = tableY + tH + 4;
          return (
            <g key={`dya${i}`}>
              <path d={`M ${cx1} ${arcY} Q ${midX} ${arcY + 24} ${cx2} ${arcY}`}
                fill="none" stroke={COLORS.accent2} strokeWidth="2" strokeDasharray="4 2" />
              <text x={midX} y={arcY + 36} textAnchor="middle" fontSize="11"
                fontWeight="700" fill={COLORS.accent2} fontFamily={FONT}>+{dy}</text>
            </g>
          );
        })}

        {/* Formula card */}
        <rect x={tableX + 30} y={tableY + tH + 64} width={tW - 60} height={50} rx="12" fill="#fff"
          stroke={COLORS.grid} strokeWidth="1.5" />
        <rect x={tableX + 30} y={tableY + tH + 64} width="4" height={50} rx="2" fill={COLORS.primary} />
        <text x={tableX + tW * 0.35} y={tableY + tH + 82} fontSize="14" fill={COLORS.accent2}
          fontWeight="700" fontFamily={FONT}>{'\u0394'}y</text>
        <line x1={tableX + tW * 0.28} y1={tableY + tH + 86} x2={tableX + tW * 0.45} y2={tableY + tH + 86}
          stroke={COLORS.text} strokeWidth="2" />
        <text x={tableX + tW * 0.35} y={tableY + tH + 102} fontSize="14" fill={COLORS.primary}
          fontWeight="700" fontFamily={FONT}>{'\u0394'}x</text>
        <text x={tableX + tW * 0.52} y={tableY + tH + 94} fontSize="18" fill={COLORS.text}
          fontWeight="700" fontFamily={FONT}>=</text>
        <text x={tableX + tW * 0.62} y={tableY + tH + 82} fontSize="14" fill={COLORS.text}
          fontWeight="700" fontFamily={FONT}>+{dy}</text>
        <line x1={tableX + tW * 0.58} y1={tableY + tH + 86} x2={tableX + tW * 0.72} y2={tableY + tH + 86}
          stroke={COLORS.text} strokeWidth="2" />
        <text x={tableX + tW * 0.62} y={tableY + tH + 102} fontSize="14" fill={COLORS.text}
          fontWeight="700" fontFamily={FONT}>+{dx}</text>
      </svg>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════
   7. RIGHT TRIANGLE (Pythagorean theorem)
   ═══════════════════════════════════════════════════════════════ */
const RightTriangleDiagram = () => (
  <div style={DIAGRAM_STYLE}>
    <svg viewBox="0 0 420 340" style={{ maxWidth: 440, width: '100%' }}
      aria-label="Right triangle diagram showing Pythagorean theorem a squared plus b squared equals c squared">
      <defs>
        <linearGradient id="rt-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={COLORS.bgSubtle} />
          <stop offset="100%" stopColor="#f1f5f9" />
        </linearGradient>
        <linearGradient id="rt-fill" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#eef2ff" />
          <stop offset="100%" stopColor="#e0e7ff" />
        </linearGradient>
      </defs>
      <rect width="420" height="340" fill="url(#rt-bg)" rx="12" />

      {/* Triangle with gradient fill */}
      <polygon points="60,260 340,260 340,80" fill="url(#rt-fill)"
        stroke={COLORS.primary} strokeWidth="3" strokeLinejoin="round" />

      {/* Right-angle marker */}
      <rect x="316" y="236" width="24" height="24" fill="none"
        stroke={COLORS.accent1} strokeWidth="2.5" />

      {/* Side labels */}
      <PillLabel x={200} y={284} text="a" color={COLORS.primary}
        bgColor="#eef2ff" borderColor={COLORS.primary} fontSize={16} />
      <PillLabel x={356} y={175} text="b" color={COLORS.accent2}
        bgColor="#fce7f3" borderColor={COLORS.accent2} fontSize={16} />
      <text x={175} y={155} fontSize="16" fill={COLORS.secondary} fontWeight="700"
        transform="rotate(-32,175,155)" fontFamily={FONT}>c (hypotenuse)</text>

      {/* Formula card */}
      <FormulaCard x={90} y={296} width={240} formulas={['a\u00b2 + b\u00b2 = c\u00b2']} color={COLORS.primary} />
    </svg>
  </div>
);

/* ═══════════════════════════════════════════════════════════════
   8. SPECIAL TRIANGLES (45-45-90 and 30-60-90)
   ═══════════════════════════════════════════════════════════════ */
const SpecialTrianglesDiagram = () => (
  <div style={DIAGRAM_STYLE}>
    <svg viewBox="0 0 540 300" style={{ maxWidth: 580, width: '100%' }}
      aria-label="Special triangles diagram showing 45-45-90 and 30-60-90 triangles with side ratios">
      <defs>
        <linearGradient id="st-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={COLORS.bgSubtle} />
          <stop offset="100%" stopColor="#f1f5f9" />
        </linearGradient>
        <linearGradient id="st-fill1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#eef2ff" />
          <stop offset="100%" stopColor="#e0e7ff" />
        </linearGradient>
        <linearGradient id="st-fill2" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={COLORS.callout} />
          <stop offset="100%" stopColor="#fde68a" />
        </linearGradient>
      </defs>
      <rect width="540" height="300" fill="url(#st-bg)" rx="12" />

      {/* Section labels */}
      <text x={110} y={26} fontSize="14" fill={COLORS.primary} fontWeight="700"
        textAnchor="middle" fontFamily={FONT}>45-45-90</text>
      <text x={390} y={26} fontSize="14" fill={COLORS.warning} fontWeight="700"
        textAnchor="middle" fontFamily={FONT}>30-60-90</text>

      {/* 45-45-90 triangle */}
      <polygon points="30,250 180,250 180,100" fill="url(#st-fill1)"
        stroke={COLORS.primary} strokeWidth="2.5" strokeLinejoin="round" />
      <rect x="158" y="228" width="22" height="22" fill="none"
        stroke={COLORS.accent1} strokeWidth="2" />
      <text x={105} y={270} fontSize="14" fill={COLORS.primary} fontWeight="700"
        textAnchor="middle" fontFamily={FONT}>x</text>
      <text x={194} y={180} fontSize="14" fill={COLORS.primary} fontWeight="700"
        fontFamily={FONT}>x</text>
      <text x={82} y={162} fontSize="14" fill={COLORS.secondary} fontWeight="700"
        transform="rotate(-45,82,162)" fontFamily={FONT}>x{'\u221A'}2</text>
      <PillLabel x={58} y={100} text="45\u00b0" color={COLORS.axisLabel}
        bgColor="#fff" borderColor={COLORS.grid} fontSize={12} />
      <PillLabel x={162} y={100} text="45\u00b0" color={COLORS.axisLabel}
        bgColor="#fff" borderColor={COLORS.grid} fontSize={12} />
      <text x={168} y={248} fontSize="11" fill={COLORS.axisLabel} fontWeight="600"
        fontFamily={FONT}>90\u00b0</text>

      {/* Divider */}
      <line x1={260} y1={40} x2={260} y2={280} stroke={COLORS.grid} strokeWidth="1" strokeDasharray="4 3" />

      {/* 30-60-90 triangle */}
      <polygon points="290,250 500,250 500,100" fill="url(#st-fill2)"
        stroke={COLORS.warning} strokeWidth="2.5" strokeLinejoin="round" />
      <rect x="478" y="228" width="22" height="22" fill="none"
        stroke={COLORS.accent1} strokeWidth="2" />
      <text x={395} y={270} fontSize="14" fill={COLORS.warning} fontWeight="700"
        textAnchor="middle" fontFamily={FONT}>x{'\u221A'}3</text>
      <text x={514} y={180} fontSize="14" fill={COLORS.warning} fontWeight="700"
        fontFamily={FONT}>x</text>
      <text x={374} y={162} fontSize="14" fill={COLORS.secondary} fontWeight="700"
        transform="rotate(-35,374,162)" fontFamily={FONT}>2x</text>
      <PillLabel x={316} y={245} text="30\u00b0" color={COLORS.axisLabel}
        bgColor="#fff" borderColor={COLORS.grid} fontSize={12} />
      <PillLabel x={478} y={100} text="60\u00b0" color={COLORS.axisLabel}
        bgColor="#fff" borderColor={COLORS.grid} fontSize={12} />
      <text x={488} y={248} fontSize="11" fill={COLORS.axisLabel} fontWeight="600"
        fontFamily={FONT}>90\u00b0</text>
    </svg>
  </div>
);

/* ═══════════════════════════════════════════════════════════════
   9. SIMILAR TRIANGLES
   ═══════════════════════════════════════════════════════════════ */
const SimilarTrianglesDiagram = () => (
  <div style={DIAGRAM_STYLE}>
    <svg viewBox="0 0 500 280" style={{ maxWidth: 520, width: '100%' }}
      aria-label="Similar triangles diagram showing two proportional triangles with scale factor 1.5">
      <defs>
        <linearGradient id="sim-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={COLORS.bgSubtle} />
          <stop offset="100%" stopColor="#f1f5f9" />
        </linearGradient>
        <linearGradient id="sim-fill1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#eef2ff" />
          <stop offset="100%" stopColor="#e0e7ff" />
        </linearGradient>
        <linearGradient id="sim-fill2" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={COLORS.callout} />
          <stop offset="100%" stopColor="#fde68a" />
        </linearGradient>
      </defs>
      <rect width="500" height="280" fill="url(#sim-bg)" rx="12" />

      {/* Small triangle */}
      <polygon points="40,210 160,210 100,100" fill="url(#sim-fill1)"
        stroke={COLORS.primary} strokeWidth="2.5" strokeLinejoin="round" />
      <text x={100} y={230} fontSize="14" fill={COLORS.primary} fontWeight="700"
        textAnchor="middle" fontFamily={FONT}>6</text>
      <text x={55} y={152} fontSize="14" fill={COLORS.primary} fontWeight="700"
        fontFamily={FONT}>4</text>
      <text x={142} y={152} fontSize="14" fill={COLORS.primary} fontWeight="700"
        fontFamily={FONT}>5</text>
      <text x={100} y={92} fontSize="12" fill={COLORS.axisLabel} fontWeight="600"
        textAnchor="middle" fontFamily={FONT}>A</text>
      <text x={30} y={218} fontSize="12" fill={COLORS.axisLabel} fontWeight="600"
        fontFamily={FONT}>B</text>
      <text x={168} y={218} fontSize="12" fill={COLORS.axisLabel} fontWeight="600"
        fontFamily={FONT}>C</text>

      {/* Scale factor arrow */}
      <line x1={185} y1={140} x2={235} y2={140} stroke={COLORS.secondary}
        strokeWidth="2.5" strokeDasharray="4 2" />
      <polygon points="237,140 229,136 229,144" fill={COLORS.secondary} />
      <PillLabel x={210} y={128} text={'\u00d71.5'} color={COLORS.secondary}
        bgColor="#fff7ed" borderColor={COLORS.secondary} fontSize={13} />

      {/* Big triangle (scale 1.5) */}
      <polygon points="260,230 440,230 350,80" fill="url(#sim-fill2)"
        stroke={COLORS.warning} strokeWidth="2.5" strokeLinejoin="round" />
      <text x={350} y={252} fontSize="14" fill={COLORS.warning} fontWeight="700"
        textAnchor="middle" fontFamily={FONT}>9</text>
      <text x={288} y={152} fontSize="14" fill={COLORS.warning} fontWeight="700"
        fontFamily={FONT}>6</text>
      <text x={410} y={152} fontSize="14" fill={COLORS.warning} fontWeight="700"
        fontFamily={FONT}>7.5</text>
      <text x={350} y={72} fontSize="12" fill={COLORS.axisLabel} fontWeight="600"
        textAnchor="middle" fontFamily={FONT}>D</text>
      <text x={250} y={238} fontSize="12" fill={COLORS.axisLabel} fontWeight="600"
        fontFamily={FONT}>E</text>
      <text x={448} y={238} fontSize="12" fill={COLORS.axisLabel} fontWeight="600"
        fontFamily={FONT}>F</text>
    </svg>
  </div>
);

/* ═══════════════════════════════════════════════════════════════
   10. TRIANGLE AREA
   ═══════════════════════════════════════════════════════════════ */
const TriangleAreaDiagram = () => (
  <div style={DIAGRAM_STYLE}>
    <svg viewBox="0 0 420 290" style={{ maxWidth: 440, width: '100%' }}
      aria-label="Triangle area diagram showing base and height with formula Area equals one half times base times height">
      <defs>
        <linearGradient id="ta-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={COLORS.bgSubtle} />
          <stop offset="100%" stopColor="#f1f5f9" />
        </linearGradient>
        <linearGradient id="ta-fill" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#eef2ff" />
          <stop offset="100%" stopColor="#e0e7ff" />
        </linearGradient>
      </defs>
      <rect width="420" height="290" fill="url(#ta-bg)" rx="12" />

      {/* Triangle */}
      <polygon points="50,220 340,220 200,60" fill="url(#ta-fill)"
        stroke={COLORS.primary} strokeWidth="3" strokeLinejoin="round" />

      {/* Height line (dashed) */}
      <line x1="200" y1="60" x2="200" y2="220" stroke={COLORS.accent2}
        strokeWidth="2.5" strokeDasharray="6 3" />
      <rect x="188" y="208" width="12" height="12" fill="none"
        stroke={COLORS.accent1} strokeWidth="2" />

      {/* Labels */}
      <PillLabel x={195} y={240} text="base (b)" color={COLORS.primary}
        bgColor="#eef2ff" borderColor={COLORS.primary} fontSize={14} />
      <text x={214} y={144} fontSize="14" fill={COLORS.accent2} fontWeight="700"
        fontFamily={FONT}>height (h)</text>

      {/* Formula card */}
      <FormulaCard x={110} y={256} width={200} formulas={['Area = \u00bd \u00d7 b \u00d7 h']} color={COLORS.primary} />
    </svg>
  </div>
);

/* ═══════════════════════════════════════════════════════════════
   11. CIRCLE PARTS (radius, diameter, circumference)
   ═══════════════════════════════════════════════════════════════ */
const CirclePartsDiagram = () => (
  <div style={DIAGRAM_STYLE}>
    <svg viewBox="0 0 420 350" style={{ maxWidth: 440, width: '100%' }}
      aria-label="Circle parts diagram showing radius, diameter, circumference, and area formulas">
      <defs>
        <linearGradient id="cp-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={COLORS.bgSubtle} />
          <stop offset="100%" stopColor="#f1f5f9" />
        </linearGradient>
        <linearGradient id="cp-fill" cx="50%" cy="50%" r="50%" fx="40%" fy="40%">
          <stop offset="0%" stopColor="#eef2ff" />
          <stop offset="100%" stopColor="#c7d2fe" />
        </linearGradient>
      </defs>
      <rect width="420" height="350" fill="url(#cp-bg)" rx="12" />

      {/* Circle with gradient fill */}
      <circle cx="210" cy="155" r="100" fill="url(#cp-fill)"
        stroke={COLORS.primary} strokeWidth="3" />

      {/* Center dot */}
      <circle cx="210" cy="155" r="4" fill={COLORS.axis} />

      {/* Radius */}
      <line x1="210" y1="155" x2="310" y2="155" stroke={COLORS.secondary}
        strokeWidth="3" strokeLinecap="round" />
      <PillLabel x={260} y={145} text="r" color={COLORS.secondary}
        bgColor="#fff7ed" borderColor={COLORS.secondary} fontSize={14} />

      {/* Diameter (dashed) */}
      <line x1="110" y1="155" x2="310" y2="155" stroke={COLORS.primary}
        strokeWidth="2" strokeDasharray="6 3" />
      <PillLabel x={160} y={178} text="d = 2r" color={COLORS.primary}
        bgColor="#eef2ff" borderColor={COLORS.primary} fontSize={13} />

      {/* Circumference label */}
      <PillLabel x={210} y={38} text="C = 2\u03c0r" color={COLORS.accent1}
        bgColor="#ecfeff" borderColor={COLORS.accent1} fontSize={14} />

      {/* Area formula card */}
      <FormulaCard x={110} y={290} width={200} formulas={['Area = \u03c0r\u00b2']} color={COLORS.primary} />
    </svg>
  </div>
);

/* ═══════════════════════════════════════════════════════════════
   12. ARC LENGTH / SECTOR AREA
   ═══════════════════════════════════════════════════════════════ */
const ArcLengthDiagram = () => {
  const cx = 200, cy = 165, r = 100;

  return (
    <div style={DIAGRAM_STYLE}>
      <svg viewBox="0 0 420 360" style={{ maxWidth: 440, width: '100%' }}
        aria-label="Arc length and sector area diagram showing a 90 degree sector with formulas">
        <defs>
          <linearGradient id="al-bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={COLORS.bgSubtle} />
            <stop offset="100%" stopColor="#f1f5f9" />
          </linearGradient>
          <linearGradient id="al-sector" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={COLORS.callout} />
            <stop offset="100%" stopColor="#fde68a" />
          </linearGradient>
        </defs>
        <rect width="420" height="360" fill="url(#al-bg)" rx="12" />

        {/* Full circle outline */}
        <circle cx={cx} cy={cy} r={r} fill="none" stroke={COLORS.grid} strokeWidth="2" />

        {/* Sector fill */}
        <path d={`M ${cx} ${cy} L ${cx} ${cy - r} A ${r} ${r} 0 0 1 ${cx + r} ${cy} Z`}
          fill="url(#al-sector)" stroke={COLORS.warning} strokeWidth="2.5" />

        {/* Arc highlight */}
        <path d={`M ${cx} ${cy - r} A ${r} ${r} 0 0 1 ${cx + r} ${cy}`}
          fill="none" stroke={COLORS.secondary} strokeWidth="4" strokeLinecap="round" />

        {/* Center + radii */}
        <circle cx={cx} cy={cy} r="4" fill={COLORS.axis} />
        <line x1={cx} y1={cy} x2={cx} y2={cy - r}
          stroke={COLORS.primary} strokeWidth="2" strokeLinecap="round" />
        <line x1={cx} y1={cy} x2={cx + r} y2={cy}
          stroke={COLORS.primary} strokeWidth="2" strokeLinecap="round" />

        {/* Radius label */}
        <PillLabel x={cx - 18} y={cy - 50} text="r" color={COLORS.primary}
          bgColor="#eef2ff" borderColor={COLORS.primary} fontSize={14} />

        {/* Angle label */}
        <text x={cx + 20} y={cy - 18} fontSize="14" fill={COLORS.axisLabel}
          fontWeight="700" fontFamily={FONT}>{'\u03b8'}</text>

        {/* Arc label */}
        <PillLabel x={cx + 78} y={cy - 82} text="arc" color={COLORS.secondary}
          bgColor="#fff7ed" borderColor={COLORS.secondary} fontSize={13} />

        {/* Formula cards */}
        <FormulaCard x={30} y={300} width={170}
          formulas={['Arc = (\u03b8/360)\u00b72\u03c0r']} color={COLORS.secondary} />
        <FormulaCard x={220} y={300} width={170}
          formulas={['Sector = (\u03b8/360)\u00b7\u03c0r\u00b2']} color={COLORS.warning} />
      </svg>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════
   13. CIRCLE EQUATION  (x-h)^2 + (y-k)^2 = r^2
   ═══════════════════════════════════════════════════════════════ */
const CircleEquationDiagram = () => {
  const W = 460, H = 380;
  const oX = 200, oY = 210, sc = 30;
  const px = makeCoordSystem({ originX: oX, originY: oY, scale: sc });
  const h = 2, k = 3, r = 3;
  const center = px(h, k);

  return (
    <div style={DIAGRAM_STYLE}>
      <svg viewBox={`0 0 ${W} ${H}`} style={{ maxWidth: 480, width: '100%' }}
        aria-label="Circle equation diagram showing (x minus 2) squared plus (y minus 3) squared equals 9 centered at (2, 3) with radius 3">
        <defs>
          <linearGradient id="ce-bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={COLORS.bgSubtle} />
            <stop offset="100%" stopColor="#f1f5f9" />
          </linearGradient>
        </defs>
        <rect width={W} height={H} fill="url(#ce-bg)" rx="12" />

        {renderGrid({ originX: oX, originY: oY, scale: sc, xRange: [-3, 12], yRange: [-3, 10], width: W, height: H })}
        {renderAxes({ originX: oX, originY: oY, width: W, height: H })}
        {renderAxisLabels({ originX: oX, originY: oY, scale: sc,
          xTicks: [-2, -1, 1, 2, 3, 4, 5, 6, 7],
          yTicks: [-2, -1, 1, 2, 3, 4, 5, 6, 7, 8]
        })}

        {/* Circle */}
        <circle cx={center[0]} cy={center[1]} r={r * sc} fill="#eef2ff"
          fillOpacity="0.4" stroke={COLORS.primary} strokeWidth="3" />

        {/* Center */}
        <circle cx={center[0]} cy={center[1]} r="5" fill={COLORS.secondary} />

        {/* Radius line */}
        <line x1={center[0]} y1={center[1]} x2={center[0] + r * sc} y2={center[1]}
          stroke={COLORS.secondary} strokeWidth="2.5" strokeLinecap="round" />
        <PillLabel x={center[0] + 48} y={center[1] - 10} text="r = 3" color={COLORS.secondary}
          bgColor="#fff7ed" borderColor={COLORS.secondary} fontSize={13} />

        {/* Center label */}
        <PillLabel x={center[0] + 12} y={center[1] + 22} text="(2, 3)" color={COLORS.text}
          bgColor="#fff" borderColor={COLORS.grid} fontSize={12} />

        {/* Equation card */}
        <FormulaCard x={100} y={H - 48} width={260}
          formulas={['(x - 2)\u00b2 + (y - 3)\u00b2 = 9']} color={COLORS.primary} />
      </svg>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════
   14. CUBE DIAGRAM (isometric-style with gradient fills)
   ═══════════════════════════════════════════════════════════════ */
const CubeDiagram = () => (
  <div style={DIAGRAM_STYLE}>
    <svg viewBox="0 0 320 290" style={{ maxWidth: 340, width: '100%' }}
      aria-label="Cube diagram showing a 3D cube with side length s and volume formula V equals s cubed">
      <defs>
        <linearGradient id="cube-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={COLORS.bgSubtle} />
          <stop offset="100%" stopColor="#f1f5f9" />
        </linearGradient>
        <linearGradient id="cube-front" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#c7d2fe" />
          <stop offset="100%" stopColor="#a5b4fc" />
        </linearGradient>
        <linearGradient id="cube-top" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#e0e7ff" />
          <stop offset="100%" stopColor="#c7d2fe" />
        </linearGradient>
        <linearGradient id="cube-side" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#818cf8" />
          <stop offset="100%" stopColor="#6366f1" />
        </linearGradient>
      </defs>
      <rect width="320" height="290" fill="url(#cube-bg)" rx="12" />

      {/* Back face (hidden edges - dashed) */}
      <line x1="100" y1="180" x2="240" y2="180" stroke={COLORS.primary} strokeWidth="1.5" strokeDasharray="4 3" />
      <line x1="240" y1="40" x2="240" y2="180" stroke={COLORS.primary} strokeWidth="1.5" strokeDasharray="4 3" />
      <line x1="200" y1="20" x2="240" y2="40" stroke={COLORS.primary} strokeWidth="1.5" strokeDasharray="4 3" />

      {/* Front face */}
      <polygon points="100,40 240,40 240,180 100,180" fill="url(#cube-front)"
        stroke={COLORS.primary} strokeWidth="2" />
      {/* Top face */}
      <polygon points="60,20 100,40 240,40 200,20" fill="url(#cube-top)"
        stroke={COLORS.primary} strokeWidth="2" />
      {/* Left face */}
      <polygon points="60,20 60,160 100,180 100,40" fill="url(#cube-side)"
        stroke={COLORS.primary} strokeWidth="2" opacity="0.85" />
      {/* Front bottom + right visible edges */}
      <line x1="60" y1="160" x2="200" y2="160" stroke={COLORS.primary} strokeWidth="2" />
      <line x1="200" y1="20" x2="200" y2="160" stroke={COLORS.primary} strokeWidth="2" />

      {/* Dimension labels */}
      <DimensionArrow x1={50} y1={160} x2={50} y2={20} label="s" color={COLORS.secondary} offset={-12} labelSide="left" />
      <DimensionArrow x1={100} y1={192} x2={240} y2={192} label="s" color={COLORS.secondary} offset={0} />
      <DimensionArrow x1={250} y1={180} x2={250} y2={40} label="s" color={COLORS.secondary} offset={0} />

      {/* Formula card */}
      <FormulaCard x={80} y={240} width={160} formulas={['V = s\u00b3']} color={COLORS.primary} />
    </svg>
  </div>
);

/* ═══════════════════════════════════════════════════════════════
   15. RECTANGULAR PRISM DIAGRAM
   ═══════════════════════════════════════════════════════════════ */
const RectangularPrismDiagram = () => (
  <div style={DIAGRAM_STYLE}>
    <svg viewBox="0 0 360 290" style={{ maxWidth: 380, width: '100%' }}
      aria-label="Rectangular prism diagram showing length, width, height with volume formula V equals l times w times h">
      <defs>
        <linearGradient id="rp-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={COLORS.bgSubtle} />
          <stop offset="100%" stopColor="#f1f5f9" />
        </linearGradient>
        <linearGradient id="rp-front" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#c7d2fe" />
          <stop offset="100%" stopColor="#a5b4fc" />
        </linearGradient>
        <linearGradient id="rp-top" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#e0e7ff" />
          <stop offset="100%" stopColor="#c7d2fe" />
        </linearGradient>
        <linearGradient id="rp-side" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#818cf8" />
          <stop offset="100%" stopColor="#6366f1" />
        </linearGradient>
      </defs>
      <rect width="360" height="290" fill="url(#rp-bg)" rx="12" />

      {/* Hidden edges (dashed) */}
      <line x1="80" y1="180" x2="260" y2="180" stroke={COLORS.primary} strokeWidth="1.5" strokeDasharray="4 3" />
      <line x1="260" y1="60" x2="260" y2="180" stroke={COLORS.primary} strokeWidth="1.5" strokeDasharray="4 3" />
      <line x1="220" y1="40" x2="260" y2="60" stroke={COLORS.primary} strokeWidth="1.5" strokeDasharray="4 3" />

      {/* Front face */}
      <polygon points="80,60 260,60 260,180 80,180" fill="url(#rp-front)"
        stroke={COLORS.primary} strokeWidth="2" />
      {/* Top face */}
      <polygon points="40,40 80,60 260,60 220,40" fill="url(#rp-top)"
        stroke={COLORS.primary} strokeWidth="2" />
      {/* Left face */}
      <polygon points="40,40 40,160 80,180 80,60" fill="url(#rp-side)"
        stroke={COLORS.primary} strokeWidth="2" opacity="0.85" />
      {/* Front visible edges */}
      <line x1="40" y1="160" x2="220" y2="160" stroke={COLORS.primary} strokeWidth="2" />
      <line x1="220" y1="40" x2="220" y2="160" stroke={COLORS.primary} strokeWidth="2" />

      {/* Dimension labels */}
      <DimensionArrow x1={80} y1={195} x2={260} y2={195} label="l" color={COLORS.secondary} />
      <DimensionArrow x1={275} y1={180} x2={275} y2={60} label="h" color={COLORS.accent2} />
      <DimensionArrow x1={30} y1={160} x2={30} y2={40} label="w" color={COLORS.success} offset={-10} labelSide="left" />

      {/* Formula card */}
      <FormulaCard x={90} y={240} width={180} formulas={['V = l \u00d7 w \u00d7 h']} color={COLORS.primary} />
    </svg>
  </div>
);

/* ═══════════════════════════════════════════════════════════════
   16. CYLINDER DIAGRAM
   ═══════════════════════════════════════════════════════════════ */
const CylinderDiagram = () => (
  <div style={DIAGRAM_STYLE}>
    <svg viewBox="0 0 320 330" style={{ maxWidth: 340, width: '100%' }}
      aria-label="Cylinder diagram showing radius r and height h with volume formula V equals pi r squared h">
      <defs>
        <linearGradient id="cyl-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={COLORS.bgSubtle} />
          <stop offset="100%" stopColor="#f1f5f9" />
        </linearGradient>
        <linearGradient id="cyl-body" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#818cf8" />
          <stop offset="30%" stopColor="#a5b4fc" />
          <stop offset="70%" stopColor="#c7d2fe" />
          <stop offset="100%" stopColor="#818cf8" />
        </linearGradient>
        <linearGradient id="cyl-top" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#e0e7ff" />
          <stop offset="100%" stopColor="#c7d2fe" />
        </linearGradient>
      </defs>
      <rect width="320" height="330" fill="url(#cyl-bg)" rx="12" />

      {/* Body */}
      <rect x="85" y="75" width="150" height="150" fill="url(#cyl-body)" stroke="none" opacity="0.6" />
      <line x1="85" y1="75" x2="85" y2="225" stroke={COLORS.primary} strokeWidth="2.5" />
      <line x1="235" y1="75" x2="235" y2="225" stroke={COLORS.primary} strokeWidth="2.5" />

      {/* Top ellipse */}
      <ellipse cx="160" cy="75" rx="75" ry="22" fill="url(#cyl-top)"
        stroke={COLORS.primary} strokeWidth="2.5" />

      {/* Bottom ellipse (front half solid, back half dashed) */}
      <path d={`M 85 225 A 75 22 0 0 1 235 225`}
        fill="none" stroke={COLORS.primary} strokeWidth="2" strokeDasharray="4 3" />
      <path d={`M 85 225 A 75 22 0 0 0 235 225`}
        fill="none" stroke={COLORS.primary} strokeWidth="2.5" />
      <ellipse cx="160" cy="225" rx="75" ry="22" fill="#a5b4fc" fillOpacity="0.3" stroke="none" />

      {/* Radius */}
      <line x1="160" y1="75" x2="235" y2="75" stroke={COLORS.secondary}
        strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="160" cy="75" r="3" fill={COLORS.secondary} />
      <PillLabel x={198} y={62} text="r" color={COLORS.secondary}
        bgColor="#fff7ed" borderColor={COLORS.secondary} fontSize={14} />

      {/* Height dimension */}
      <DimensionArrow x1={255} y1={75} x2={255} y2={225} label="h" color={COLORS.accent2} />

      {/* Formula card */}
      <FormulaCard x={75} y={275} width={170} formulas={['V = \u03c0r\u00b2h']} color={COLORS.primary} />
    </svg>
  </div>
);

/* ═══════════════════════════════════════════════════════════════
   17. SPHERE DIAGRAM
   ═══════════════════════════════════════════════════════════════ */
const SphereDiagram = () => (
  <div style={DIAGRAM_STYLE}>
    <svg viewBox="0 0 320 320" style={{ maxWidth: 340, width: '100%' }}
      aria-label="Sphere diagram showing radius r with volume formula V equals four thirds pi r cubed">
      <defs>
        <linearGradient id="sph-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={COLORS.bgSubtle} />
          <stop offset="100%" stopColor="#f1f5f9" />
        </linearGradient>
        <radialGradient id="sph-fill" cx="35%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#e0e7ff" />
          <stop offset="50%" stopColor="#c7d2fe" />
          <stop offset="100%" stopColor="#818cf8" />
        </radialGradient>
      </defs>
      <rect width="320" height="320" fill="url(#sph-bg)" rx="12" />

      {/* Sphere */}
      <circle cx="160" cy="140" r="95" fill="url(#sph-fill)" fillOpacity="0.7"
        stroke={COLORS.primary} strokeWidth="3" />

      {/* Equator ellipse (dashed) */}
      <ellipse cx="160" cy="140" rx="95" ry="25" fill="none"
        stroke={COLORS.primary} strokeWidth="1.5" strokeDasharray="5 3" />

      {/* Radius */}
      <line x1="160" y1="140" x2="255" y2="140" stroke={COLORS.secondary}
        strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="160" cy="140" r="4" fill={COLORS.secondary} />
      <PillLabel x={208} y={130} text="r" color={COLORS.secondary}
        bgColor="#fff7ed" borderColor={COLORS.secondary} fontSize={16} />

      {/* Formula card */}
      <FormulaCard x={65} y={268} width={190} formulas={['V = (4/3)\u03c0r\u00b3']} color={COLORS.primary} />
    </svg>
  </div>
);

/* ═══════════════════════════════════════════════════════════════
   18. CONE DIAGRAM
   ═══════════════════════════════════════════════════════════════ */
const ConeDiagram = () => (
  <div style={DIAGRAM_STYLE}>
    <svg viewBox="0 0 320 330" style={{ maxWidth: 340, width: '100%' }}
      aria-label="Cone diagram showing radius r and height h with volume formula V equals one third pi r squared h">
      <defs>
        <linearGradient id="cone-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={COLORS.bgSubtle} />
          <stop offset="100%" stopColor="#f1f5f9" />
        </linearGradient>
        <linearGradient id="cone-body" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#c7d2fe" />
          <stop offset="50%" stopColor="#a5b4fc" />
          <stop offset="100%" stopColor="#818cf8" />
        </linearGradient>
      </defs>
      <rect width="320" height="330" fill="url(#cone-bg)" rx="12" />

      {/* Cone body */}
      <polygon points="160,40 85,225 235,225" fill="url(#cone-body)" fillOpacity="0.6"
        stroke={COLORS.primary} strokeWidth="2.5" strokeLinejoin="round" />

      {/* Base ellipse */}
      <path d={`M 85 225 A 75 20 0 0 1 235 225`}
        fill="none" stroke={COLORS.primary} strokeWidth="1.5" strokeDasharray="4 3" />
      <path d={`M 85 225 A 75 20 0 0 0 235 225`}
        fill="none" stroke={COLORS.primary} strokeWidth="2.5" />
      <ellipse cx="160" cy="225" rx="75" ry="20" fill="#a5b4fc" fillOpacity="0.25" stroke="none" />

      {/* Height (dashed) */}
      <line x1="160" y1="40" x2="160" y2="225" stroke={COLORS.accent2}
        strokeWidth="2" strokeDasharray="6 3" />
      <text x={170} y={135} fontSize="14" fill={COLORS.accent2} fontWeight="700"
        fontFamily={FONT}>h</text>

      {/* Radius */}
      <line x1="160" y1="225" x2="235" y2="225" stroke={COLORS.secondary}
        strokeWidth="2.5" strokeLinecap="round" />
      <PillLabel x={198} y={248} text="r" color={COLORS.secondary}
        bgColor="#fff7ed" borderColor={COLORS.secondary} fontSize={14} />

      {/* Formula card */}
      <FormulaCard x={65} y={278} width={190} formulas={['V = (1/3)\u03c0r\u00b2h']} color={COLORS.primary} />
    </svg>
  </div>
);

/* ═══════════════════════════════════════════════════════════════
   19. MEAN / MEDIAN / OUTLIER
   ═══════════════════════════════════════════════════════════════ */
const MeanMedianDiagram = () => {
  const data = [2, 3, 4, 5, 7, 8, 9, 10, 25];
  const mean = data.reduce((a, b) => a + b, 0) / data.length;
  const median = data[4];
  const barW = 30, barGap = 8, baseX = 44, baseY = 185;
  const W = 480, H = 280;

  return (
    <div style={DIAGRAM_STYLE}>
      <svg viewBox={`0 0 ${W} ${H}`} style={{ maxWidth: 500, width: '100%' }}
        aria-label="Mean and median diagram with bar chart showing how an outlier pulls the mean but not the median">
        <defs>
          <linearGradient id="mm-bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={COLORS.bgSubtle} />
            <stop offset="100%" stopColor="#f1f5f9" />
          </linearGradient>
          <linearGradient id="mm-bar" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="#a5b4fc" />
            <stop offset="100%" stopColor="#c7d2fe" />
          </linearGradient>
          <linearGradient id="mm-outlier" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="#fca5a5" />
            <stop offset="100%" stopColor="#fecaca" />
          </linearGradient>
        </defs>
        <rect width={W} height={H} fill="url(#mm-bg)" rx="12" />

        {/* Bars */}
        {data.map((v, i) => {
          const x = baseX + i * (barW + barGap);
          const h = v * 6;
          const isOutlier = v === 25;
          return (
            <g key={i}>
              <rect x={x} y={baseY - h} width={barW} height={h}
                fill={isOutlier ? 'url(#mm-outlier)' : 'url(#mm-bar)'}
                stroke={isOutlier ? COLORS.error : COLORS.primary}
                strokeWidth="1.5" rx="4" />
              <text x={x + barW / 2} y={baseY + 14} fontSize="11" fill={COLORS.text}
                fontWeight="600" textAnchor="middle" fontFamily={FONT}>{v}</text>
            </g>
          );
        })}

        {/* Baseline */}
        <line x1="34" y1={baseY} x2={W - 40} y2={baseY}
          stroke={COLORS.textMuted} strokeWidth="1.5" />

        {/* Mean marker */}
        {(() => {
          const mx = baseX + (mean / 25) * (data.length * (barW + barGap));
          return (
            <g>
              <line x1={mx} y1={baseY + 22} x2={mx} y2={baseY + 38}
                stroke={COLORS.secondary} strokeWidth="2.5" />
              <polygon points={`${mx},${baseY + 20} ${mx - 5},${baseY + 27} ${mx + 5},${baseY + 27}`}
                fill={COLORS.secondary} />
              <PillLabel x={mx} y={baseY + 54} text={`Mean \u2248 ${mean.toFixed(1)}`}
                color={COLORS.secondary} bgColor="#fff7ed" borderColor={COLORS.secondary} fontSize={11} />
            </g>
          );
        })()}

        {/* Median marker */}
        {(() => {
          const mdx = baseX + 4 * (barW + barGap) + barW / 2;
          return (
            <g>
              <line x1={mdx} y1={baseY - median * 6 - 8} x2={mdx} y2={baseY - median * 6 - 22}
                stroke={COLORS.primary} strokeWidth="2.5" />
              <polygon points={`${mdx},${baseY - median * 6 - 6} ${mdx - 5},${baseY - median * 6 - 13} ${mdx + 5},${baseY - median * 6 - 13}`}
                fill={COLORS.primary} />
              <PillLabel x={mdx + 4} y={baseY - median * 6 - 30}
                text={`Median = ${median}`} color={COLORS.primary}
                bgColor="#eef2ff" borderColor={COLORS.primary} fontSize={11} />
            </g>
          );
        })()}

        {/* Outlier label */}
        <PillLabel x={baseX + 8 * (barW + barGap) + barW / 2} y={baseY - 25 * 6 - 10}
          text="Outlier" color={COLORS.error} bgColor="#fef2f2" borderColor={COLORS.error} fontSize={11} />

        {/* Callout */}
        <CalloutCard x={260} y={H - 40} width={200}
          text="Outlier pulls mean, not median"
          color={COLORS.warning} fontSize={12} />
      </svg>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════
   20. HORIZONTAL SHIFT
   ═══════════════════════════════════════════════════════════════ */
const HorizontalShiftDiagram = () => {
  const W = 460, H = 300;
  const oX = 200, oY = 190, sc = 30;
  const px = makeCoordSystem({ originX: oX, originY: oY, scale: sc });

  const origPts = [];
  const shiftPts = [];
  for (let x = -3; x <= 3; x += 0.2) {
    origPts.push(px(x, x * x * 0.5).join(','));
    shiftPts.push(px(x + 2, x * x * 0.5).join(','));
  }

  return (
    <div style={DIAGRAM_STYLE}>
      <svg viewBox={`0 0 ${W} ${H}`} style={{ maxWidth: 480, width: '100%' }}
        aria-label="Horizontal shift diagram showing f(x) shifted right 2 units to become f(x minus 2)">
        <defs>
          <linearGradient id="hs-bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={COLORS.bgSubtle} />
            <stop offset="100%" stopColor="#f1f5f9" />
          </linearGradient>
          <marker id="h-arr" markerWidth="8" markerHeight="8" refX="4" refY="3" orient="auto">
            <polygon points="0 0,8 3,0 6" fill={COLORS.secondary} />
          </marker>
        </defs>
        <rect width={W} height={H} fill="url(#hs-bg)" rx="12" />

        {renderAxes({ originX: oX, originY: oY, width: W, height: H })}

        {/* Original curve (dashed, muted) */}
        <polyline points={origPts.join(' ')} fill="none" stroke={COLORS.textMuted}
          strokeWidth="3" strokeDasharray="6 3" strokeLinecap="round" />

        {/* Shifted curve (solid) */}
        <polyline points={shiftPts.join(' ')} fill="none" stroke={COLORS.primary}
          strokeWidth="3" strokeLinecap="round" />

        {/* Labels */}
        <PillLabel x={oX} y={18} text="f(x)" color={COLORS.textMuted}
          bgColor="#fff" borderColor={COLORS.grid} fontSize={12} />
        <PillLabel x={oX + 60} y={18} text="f(x - 2)" color={COLORS.primary}
          bgColor="#eef2ff" borderColor={COLORS.primary} fontSize={12} />

        {/* Shift arrow */}
        <line x1={oX} y1={oY + 10} x2={oX + 56} y2={oY + 10}
          stroke={COLORS.secondary} strokeWidth="2.5" markerEnd="url(#h-arr)" />
        <text x={oX + 28} y={oY + 28} fontSize="12" fill={COLORS.secondary}
          fontWeight="700" textAnchor="middle" fontFamily={FONT}>+2 right</text>

        {/* Teaching callout */}
        <CalloutCard x={90} y={H - 38} width={280}
          text="f(x - h) shifts RIGHT h units (opposite sign)"
          color={COLORS.success} fontSize={12} />
      </svg>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════
   21. VERTICAL SHIFT
   ═══════════════════════════════════════════════════════════════ */
const VerticalShiftDiagram = () => {
  const W = 460, H = 300;
  const oX = 200, oY = 190, sc = 30;
  const px = makeCoordSystem({ originX: oX, originY: oY, scale: sc });

  const origPts = [];
  const shiftPts = [];
  for (let x = -3; x <= 3; x += 0.2) {
    const y = x * x * 0.5;
    origPts.push(px(x, y).join(','));
    shiftPts.push(px(x, y + 2).join(','));
  }

  return (
    <div style={DIAGRAM_STYLE}>
      <svg viewBox={`0 0 ${W} ${H}`} style={{ maxWidth: 480, width: '100%' }}
        aria-label="Vertical shift diagram showing f(x) shifted up 2 units to become f(x) plus 2">
        <defs>
          <linearGradient id="vs-bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={COLORS.bgSubtle} />
            <stop offset="100%" stopColor="#f1f5f9" />
          </linearGradient>
          <marker id="v-arr" markerWidth="8" markerHeight="8" refX="4" refY="3" orient="auto">
            <polygon points="0 0,8 3,0 6" fill={COLORS.secondary} />
          </marker>
        </defs>
        <rect width={W} height={H} fill="url(#vs-bg)" rx="12" />

        {renderAxes({ originX: oX, originY: oY, width: W, height: H })}

        {/* Original curve (dashed, muted) */}
        <polyline points={origPts.join(' ')} fill="none" stroke={COLORS.textMuted}
          strokeWidth="3" strokeDasharray="6 3" strokeLinecap="round" />

        {/* Shifted curve (solid) */}
        <polyline points={shiftPts.join(' ')} fill="none" stroke={COLORS.accent2}
          strokeWidth="3" strokeLinecap="round" />

        {/* Labels */}
        <PillLabel x={oX - 70} y={oY - 2} text="f(x)" color={COLORS.textMuted}
          bgColor="#fff" borderColor={COLORS.grid} fontSize={12} />
        <PillLabel x={oX - 70} y={oY - sc * 2 - 2} text="f(x) + 2" color={COLORS.accent2}
          bgColor="#fce7f3" borderColor={COLORS.accent2} fontSize={12} />

        {/* Shift arrow */}
        <line x1={oX - 10} y1={oY} x2={oX - 10} y2={oY - sc * 2 + 4}
          stroke={COLORS.secondary} strokeWidth="2.5" markerEnd="url(#v-arr)" />
        <text x={oX - 24} y={oY - sc + 4} fontSize="12" fill={COLORS.secondary}
          fontWeight="700" textAnchor="end" fontFamily={FONT}>+2 up</text>

        {/* Teaching callout */}
        <CalloutCard x={90} y={H - 38} width={280}
          text="f(x) + k shifts UP k units"
          color={COLORS.success} fontSize={12} />
      </svg>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════
   22. EXPONENTIAL GROWTH / DECAY
   ═══════════════════════════════════════════════════════════════ */
const ExponentialGrowthDiagram = () => {
  const W = 440, H = 310;
  const oX = 80, oY = 230, sc = 30;
  const px = makeCoordSystem({ originX: oX, originY: oY, scale: sc });

  const growthPts = [];
  const decayPts = [];
  for (let x = 0; x <= 7; x += 0.2) {
    growthPts.push(px(x, Math.pow(1.4, x)).join(','));
    decayPts.push(px(x, 6 * Math.pow(0.7, x)).join(','));
  }

  return (
    <div style={DIAGRAM_STYLE}>
      <svg viewBox={`0 0 ${W} ${H}`} style={{ maxWidth: 460, width: '100%' }}
        aria-label="Exponential growth and decay diagram showing f(x) equals a times b to the x power">
        <defs>
          <linearGradient id="eg-bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={COLORS.bgSubtle} />
            <stop offset="100%" stopColor="#f1f5f9" />
          </linearGradient>
        </defs>
        <rect width={W} height={H} fill="url(#eg-bg)" rx="12" />

        {renderAxes({ originX: oX, originY: oY, width: W, height: H })}

        {/* Growth curve */}
        <polyline points={growthPts.join(' ')} fill="none" stroke={COLORS.success}
          strokeWidth="3" strokeLinecap="round" />

        {/* Decay curve */}
        <polyline points={decayPts.join(' ')} fill="none" stroke={COLORS.error}
          strokeWidth="3" strokeLinecap="round" />

        {/* Labels */}
        <PillLabel x={280} y={44} text="Growth (b > 1)" color={COLORS.success}
          bgColor="#f0fdf4" borderColor={COLORS.success} fontSize={12} />
        <PillLabel x={300} y={204} text="Decay (0 < b < 1)" color={COLORS.error}
          bgColor="#fef2f2" borderColor={COLORS.error} fontSize={12} />

        {/* Formula callout */}
        <CalloutCard x={100} y={H - 40} width={240}
          text={'f(x) = a \u00b7 b\u02e3'}
          color={COLORS.warning} fontSize={13} />
      </svg>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════
   23. PERCENT CHANGE
   ═══════════════════════════════════════════════════════════════ */
const PercentChangeDiagram = () => {
  const W = 420, H = 220;

  return (
    <div style={DIAGRAM_STYLE}>
      <svg viewBox={`0 0 ${W} ${H}`} style={{ maxWidth: 440, width: '100%' }}
        aria-label="Percent change diagram showing old value 80 to new value 100 equals 25 percent increase">
        <defs>
          <linearGradient id="pc-bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={COLORS.bgSubtle} />
            <stop offset="100%" stopColor="#f1f5f9" />
          </linearGradient>
          <linearGradient id="pc-old" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#c7d2fe" />
            <stop offset="100%" stopColor="#a5b4fc" />
          </linearGradient>
          <linearGradient id="pc-new" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#bbf7d0" />
            <stop offset="100%" stopColor="#86efac" />
          </linearGradient>
          <marker id="pc-arr" markerWidth="8" markerHeight="8" refX="4" refY="3" orient="auto">
            <polygon points="0 0,8 3,0 6" fill={COLORS.secondary} />
          </marker>
        </defs>
        <rect width={W} height={H} fill="url(#pc-bg)" rx="12" />

        {/* Old bar */}
        <rect x="50" y="36" width="120" height="50" rx="10" fill="url(#pc-old)"
          stroke={COLORS.primary} strokeWidth="2" />
        <text x="110" y="66" fontSize="15" fill={COLORS.text} fontWeight="700"
          textAnchor="middle" fontFamily={FONT}>Old: 80</text>

        {/* New bar */}
        <rect x="250" y="36" width="120" height="50" rx="10" fill="url(#pc-new)"
          stroke={COLORS.success} strokeWidth="2" />
        <text x="310" y="66" fontSize="15" fill={COLORS.text} fontWeight="700"
          textAnchor="middle" fontFamily={FONT}>New: 100</text>

        {/* Arrow */}
        <line x1="176" y1="61" x2="244" y2="61" stroke={COLORS.secondary}
          strokeWidth="2.5" markerEnd="url(#pc-arr)" />
        <text x="210" y="54" fontSize="11" fill={COLORS.secondary} fontWeight="700"
          textAnchor="middle" fontFamily={FONT}>change</text>

        {/* Formula card */}
        <rect x="50" y="110" width="320" height="90" rx="12" fill="#fff"
          stroke={COLORS.grid} strokeWidth="1.5" />
        <rect x="50" y="110" width="4" height="90" rx="2" fill={COLORS.warning} />
        <text x="210" y="140" fontSize="14" fill={COLORS.text} fontWeight="700"
          textAnchor="middle" fontFamily={FONT}>(New - Old) / Old {'\u00d7'} 100%</text>
        <text x="210" y="164" fontSize="14" fill={COLORS.axisLabel} fontWeight="600"
          textAnchor="middle" fontFamily={FONT}>(100 - 80) / 80 {'\u00d7'} 100%</text>
        <text x="210" y="190" fontSize="16" fill={COLORS.success} fontWeight="800"
          textAnchor="middle" fontFamily={FONT}>= 25% increase</text>
      </svg>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════
   24. ADAPTIVE MODULE FLOW  (Strategy ch 1 — signature concept)
      Module 1 (fixed mix) → branch on accuracy →
      harder, higher-ceiling Module 2  OR  easier, capped Module 2.
   ═══════════════════════════════════════════════════════════════ */
const AdaptiveModuleFlowDiagram = () => {
  const W = 600, H = 380;
  return (
    <div style={DIAGRAM_STYLE}>
      <svg viewBox={`0 0 ${W} ${H}`} style={{ maxWidth: 640, width: '100%' }}
        aria-label="Adaptive module flow diagram: Module 1 performance routes you to a harder higher-ceiling Module 2 or an easier lower-ceiling Module 2">
        <defs>
          <linearGradient id="amf-bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={COLORS.bgSubtle} />
            <stop offset="100%" stopColor="#f1f5f9" />
          </linearGradient>
          <linearGradient id="amf-m1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#eef2ff" />
            <stop offset="100%" stopColor="#e0e7ff" />
          </linearGradient>
          <linearGradient id="amf-hard" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#f0fdf4" />
            <stop offset="100%" stopColor="#dcfce7" />
          </linearGradient>
          <linearGradient id="amf-easy" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#fff7ed" />
            <stop offset="100%" stopColor="#ffedd5" />
          </linearGradient>
          <marker id="amf-arr-g" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto">
            <polygon points="0 0, 8 3, 0 6" fill={COLORS.success} />
          </marker>
          <marker id="amf-arr-o" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto">
            <polygon points="0 0, 8 3, 0 6" fill={COLORS.secondary} />
          </marker>
          <marker id="amf-arr-p" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto">
            <polygon points="0 0, 8 3, 0 6" fill={COLORS.primary} />
          </marker>
        </defs>
        <rect width={W} height={H} fill="url(#amf-bg)" rx="12" />

        {/* Connectors (drawn first, under the cards) */}
        <line x1={180} y1={200} x2={244} y2={200}
          stroke={COLORS.primary} strokeWidth="2.5" markerEnd="url(#amf-arr-p)" />
        {/* branch to harder M2 */}
        <line x1={256} y1={196} x2={392} y2={96}
          stroke={COLORS.success} strokeWidth="2.5" markerEnd="url(#amf-arr-g)" />
        {/* branch to easier M2 */}
        <line x1={256} y1={204} x2={392} y2={300}
          stroke={COLORS.secondary} strokeWidth="2.5" markerEnd="url(#amf-arr-o)" />

        {/* Module 1 card */}
        <rect x={28} y={150} width={152} height={100} rx="14" fill="url(#amf-m1)"
          stroke={COLORS.primary} strokeWidth="2.5" />
        <text x={104} y={186} fontSize="17" fill={COLORS.primary} fontWeight="800"
          textAnchor="middle" fontFamily={FONT}>Module 1</text>
        <text x={104} y={210} fontSize="12" fill={COLORS.text} fontWeight="600"
          textAnchor="middle" fontFamily={FONT}>fixed mix, same for all</text>
        <text x={104} y={230} fontSize="11" fill={COLORS.axisLabel} fontWeight="600"
          textAnchor="middle" fontFamily={FONT}>{'easy · medium · hard'}</text>

        {/* Branch node */}
        <circle cx={250} cy={200} r="7" fill={COLORS.axis} />

        {/* Branch labels */}
        <PillLabel x={318} y={140} text="score well" color={COLORS.success}
          bgColor="#f0fdf4" borderColor={COLORS.success} fontSize={12} />
        <PillLabel x={318} y={266} text="miss too many" color={COLORS.secondary}
          bgColor="#fff7ed" borderColor={COLORS.secondary} fontSize={12} />

        {/* Harder Module 2 card */}
        <rect x={398} y={44} width={178} height={104} rx="14" fill="url(#amf-hard)"
          stroke={COLORS.success} strokeWidth="2.5" />
        <text x={476} y={76} fontSize="15" fill={COLORS.success} fontWeight="800"
          textAnchor="middle" fontFamily={FONT}>{'Module 2 — Harder'}</text>
        <text x={476} y={100} fontSize="12" fill={COLORS.text} fontWeight="700"
          textAnchor="middle" fontFamily={FONT}>higher score ceiling</text>
        <text x={476} y={122} fontSize="11" fill={COLORS.axisLabel} fontWeight="600"
          textAnchor="middle" fontFamily={FONT}>reaches the top scores</text>
        {/* ceiling gauge — full */}
        <rect x={556} y={58} width="10" height="76" rx="5" fill="#fff" stroke={COLORS.grid} strokeWidth="1" />
        <rect x={556} y={58} width="10" height="76" rx="5" fill={COLORS.success} opacity="0.85" />

        {/* Easier Module 2 card */}
        <rect x={398} y={252} width={178} height={104} rx="14" fill="url(#amf-easy)"
          stroke={COLORS.secondary} strokeWidth="2.5" />
        <text x={476} y={284} fontSize="15" fill={COLORS.secondary} fontWeight="800"
          textAnchor="middle" fontFamily={FONT}>{'Module 2 — Easier'}</text>
        <text x={476} y={308} fontSize="12" fill={COLORS.text} fontWeight="700"
          textAnchor="middle" fontFamily={FONT}>lower score ceiling</text>
        <text x={476} y={330} fontSize="11" fill={COLORS.axisLabel} fontWeight="600"
          textAnchor="middle" fontFamily={FONT}>top score is capped</text>
        {/* ceiling gauge — capped */}
        <rect x={556} y={266} width="10" height="76" rx="5" fill="#fff" stroke={COLORS.grid} strokeWidth="1" />
        <rect x={556} y={266 + 76 * 0.45} width="10" height={76 * 0.55} rx="5" fill={COLORS.secondary} opacity="0.85" />
      </svg>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════
   25. SCORE COMPOSITION  (Strategy ch 1)
      R&W (200–800) + Math (200–800) = Composite (400–1600).
   ═══════════════════════════════════════════════════════════════ */
const ScoreCompositionDiagram = () => {
  const W = 560, H = 190;
  return (
    <div style={DIAGRAM_STYLE}>
      <svg viewBox={`0 0 ${W} ${H}`} style={{ maxWidth: 580, width: '100%' }}
        aria-label="Score composition diagram: Reading and Writing 200 to 800 plus Math 200 to 800 equals a composite of 400 to 1600">
        <defs>
          <linearGradient id="sc-bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={COLORS.bgSubtle} />
            <stop offset="100%" stopColor="#f1f5f9" />
          </linearGradient>
          <linearGradient id="sc-rw" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#eef2ff" />
            <stop offset="100%" stopColor="#e0e7ff" />
          </linearGradient>
          <linearGradient id="sc-m" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#fff7ed" />
            <stop offset="100%" stopColor="#ffedd5" />
          </linearGradient>
          <linearGradient id="sc-t" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f0fdf4" />
            <stop offset="100%" stopColor="#dcfce7" />
          </linearGradient>
        </defs>
        <rect width={W} height={H} fill="url(#sc-bg)" rx="12" />

        {/* R&W section box */}
        <rect x={26} y={56} width={150} height={78} rx="12" fill="url(#sc-rw)"
          stroke={COLORS.primary} strokeWidth="2.5" />
        <text x={101} y={90} fontSize="13" fill={COLORS.primary} fontWeight="800"
          textAnchor="middle" fontFamily={FONT}>Reading &amp; Writing</text>
        <text x={101} y={114} fontSize="15" fill={COLORS.text} fontWeight="700"
          textAnchor="middle" fontFamily={FONT}>{'200–800'}</text>

        <text x={196} y={102} fontSize="26" fill={COLORS.axisLabel} fontWeight="800"
          textAnchor="middle" fontFamily={FONT}>+</text>

        {/* Math section box */}
        <rect x={216} y={56} width={150} height={78} rx="12" fill="url(#sc-m)"
          stroke={COLORS.secondary} strokeWidth="2.5" />
        <text x={291} y={90} fontSize="13" fill={COLORS.secondary} fontWeight="800"
          textAnchor="middle" fontFamily={FONT}>Math</text>
        <text x={291} y={114} fontSize="15" fill={COLORS.text} fontWeight="700"
          textAnchor="middle" fontFamily={FONT}>{'200–800'}</text>

        <text x={386} y={102} fontSize="26" fill={COLORS.axisLabel} fontWeight="800"
          textAnchor="middle" fontFamily={FONT}>=</text>

        {/* Composite box */}
        <rect x={406} y={46} width={128} height={98} rx="12" fill="url(#sc-t)"
          stroke={COLORS.success} strokeWidth="2.5" />
        <text x={470} y={84} fontSize="13" fill={COLORS.success} fontWeight="800"
          textAnchor="middle" fontFamily={FONT}>Composite</text>
        <text x={470} y={112} fontSize="18" fill={COLORS.text} fontWeight="800"
          textAnchor="middle" fontFamily={FONT}>{'400–1600'}</text>

        <text x={W / 2} y={30} fontSize="12" fill={COLORS.axisLabel} fontWeight="600"
          textAnchor="middle" fontFamily={FONT}>Each section scores 200 to 800; the two add up.</text>
      </svg>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════
   26. MODULE TIME BUDGET  (Strategy ch 2 — pacing)
      Per-module time laid out as a budget bar; per-question pace.
   ═══════════════════════════════════════════════════════════════ */
const ModuleTimeBudgetDiagram = () => {
  const W = 560, H = 250;
  const barX = 46;
  const maxW = 430;          // width for the longest module (35 min)
  const rwW = maxW * (32 / 35);
  const mathW = maxW;
  const ticks = 4;           // quarter-budget guides

  const budgetBar = (y, width, fill, stroke, title, inside, pace) => (
    <g>
      <text x={barX} y={y - 10} fontSize="13" fill={stroke} fontWeight="800" fontFamily={FONT}>{title}</text>
      <rect x={barX} y={y} width={width} height={40} rx="10" fill={fill} stroke={stroke} strokeWidth="2" />
      {Array.from({ length: ticks - 1 }, (_, i) => (
        <line key={i} x1={barX + (width * (i + 1)) / ticks} y1={y + 4}
          x2={barX + (width * (i + 1)) / ticks} y2={y + 36}
          stroke="#fff" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.8" />
      ))}
      <text x={barX + 14} y={y + 25} fontSize="13" fill={COLORS.text} fontWeight="700" fontFamily={FONT}>{inside}</text>
      <text x={barX + width + 8} y={y + 25} fontSize="12" fill={COLORS.axisLabel} fontWeight="700" fontFamily={FONT}>{pace}</text>
    </g>
  );

  return (
    <div style={DIAGRAM_STYLE}>
      <svg viewBox={`0 0 ${W} ${H}`} style={{ maxWidth: 580, width: '100%' }}
        aria-label="Per-module time budget: Reading and Writing gives 32 minutes for 27 questions, Math gives 35 minutes for 22 questions">
        <defs>
          <linearGradient id="tb-bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={COLORS.bgSubtle} />
            <stop offset="100%" stopColor="#f1f5f9" />
          </linearGradient>
          <linearGradient id="tb-rw" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#c7d2fe" />
            <stop offset="100%" stopColor="#a5b4fc" />
          </linearGradient>
          <linearGradient id="tb-m" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#fed7aa" />
            <stop offset="100%" stopColor="#fdba74" />
          </linearGradient>
        </defs>
        <rect width={W} height={H} fill="url(#tb-bg)" rx="12" />

        {budgetBar(64, rwW, 'url(#tb-rw)', COLORS.primary,
          'Reading & Writing module',
          '27 questions', '32 min')}
        {budgetBar(160, mathW, 'url(#tb-m)', COLORS.secondary,
          'Math module',
          '22 questions', '35 min')}

        {/* pace callout */}
        <CalloutCard x={46} y={H - 40} width={470}
          text={'Per question: R&W about 1:10   ·   Math about 1:35'}
          color={COLORS.warning} fontSize={13} />
      </svg>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════
   27. SENTENCE BOUNDARY  (R&W Boundaries — core mental model)
      Two independent clauses: valid joiners vs the comma splice.
   ═══════════════════════════════════════════════════════════════ */
const SentenceBoundaryDiagram = () => {
  const W = 600, H = 336;
  const optCard = (x, mark, label) => (
    <g>
      <rect x={x} y={150} width={166} height={62} rx="12" fill="#f0fdf4"
        stroke={COLORS.success} strokeWidth="2" />
      <text x={x + 83} y={182} fontSize="18" fill={COLORS.success} fontWeight="800"
        textAnchor="middle" fontFamily={FONT}>{mark}</text>
      <text x={x + 83} y={201} fontSize="11" fill={COLORS.text} fontWeight="700"
        textAnchor="middle" fontFamily={FONT}>{label}</text>
      <text x={x + 150} y={167} fontSize="14" fill={COLORS.success} fontWeight="800" fontFamily={FONT}>{'✓'}</text>
    </g>
  );
  return (
    <div style={DIAGRAM_STYLE}>
      <svg viewBox={`0 0 ${W} ${H}`} style={{ maxWidth: 620, width: '100%' }}
        aria-label="Sentence boundary diagram: two independent clauses joined by a period, semicolon, or comma plus FANBOYS are correct; a comma alone is a comma splice">
        <defs>
          <linearGradient id="sb-bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={COLORS.bgSubtle} />
            <stop offset="100%" stopColor="#f1f5f9" />
          </linearGradient>
        </defs>
        <rect width={W} height={H} fill="url(#sb-bg)" rx="12" />

        {/* Two independent clauses */}
        <rect x={40} y={30} width={222} height={62} rx="12" fill="#eef2ff"
          stroke={COLORS.primary} strokeWidth="2" />
        <text x={151} y={58} fontSize="13" fill={COLORS.text} fontWeight="700"
          textAnchor="middle" fontFamily={FONT}>The lab ran overnight</text>
        <text x={151} y={80} fontSize="11" fill={COLORS.primary} fontWeight="700"
          textAnchor="middle" fontFamily={FONT}>independent clause</text>

        <text x={300} y={66} fontSize="20" fill={COLORS.axisLabel} fontWeight="800"
          textAnchor="middle" fontFamily={FONT}>+</text>

        <rect x={338} y={30} width={222} height={62} rx="12" fill="#eef2ff"
          stroke={COLORS.primary} strokeWidth="2" />
        <text x={449} y={58} fontSize="13" fill={COLORS.text} fontWeight="700"
          textAnchor="middle" fontFamily={FONT}>the results came by morning</text>
        <text x={449} y={80} fontSize="11" fill={COLORS.primary} fontWeight="700"
          textAnchor="middle" fontFamily={FONT}>independent clause</text>

        {/* Rule heading */}
        <text x={W / 2} y={128} fontSize="13" fill={COLORS.text} fontWeight="700"
          textAnchor="middle" fontFamily={FONT}>Two complete sentences? Join with exactly one of these:</text>

        {/* Valid joiners */}
        {optCard(40, '.', 'period')}
        {optCard(217, ';', 'semicolon')}
        {optCard(394, ', and', 'comma + FANBOYS')}

        {/* The error */}
        <rect x={150} y={244} width={300} height={64} rx="12" fill="#fef2f2"
          stroke={COLORS.error} strokeWidth="2" />
        <text x={172} y={284} fontSize="20" fill={COLORS.error} fontWeight="800" fontFamily={FONT}>,</text>
        <text x={196} y={272} fontSize="13" fill={COLORS.text} fontWeight="700" fontFamily={FONT}>comma alone</text>
        <text x={196} y={292} fontSize="11" fill={COLORS.error} fontWeight="700" fontFamily={FONT}>comma splice &mdash; wrong</text>
        <text x={430} y={282} fontSize="18" fill={COLORS.error} fontWeight="800"
          textAnchor="middle" fontFamily={FONT}>{'✗'}</text>
      </svg>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════
   28. SUBJECT–VERB AGREEMENT  (R&W Form, Structure & Sense)
      Strip the middle phrase; match the real subject to the verb.
   ═══════════════════════════════════════════════════════════════ */
const SubjectVerbAgreementDiagram = () => {
  const W = 600, H = 260;
  return (
    <div style={DIAGRAM_STYLE}>
      <svg viewBox={`0 0 ${W} ${H}`} style={{ maxWidth: 620, width: '100%' }}
        aria-label="Subject-verb agreement diagram: the subject box is singular, the phrase in between is a decoy, and the verb must agree with the subject not the decoy">
        <defs>
          <linearGradient id="sv-bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={COLORS.bgSubtle} />
            <stop offset="100%" stopColor="#f1f5f9" />
          </linearGradient>
        </defs>
        <rect width={W} height={H} fill="url(#sv-bg)" rx="12" />

        {/* Agreement arc */}
        <path d="M 92 96 Q 300 34 452 96" fill="none"
          stroke={COLORS.success} strokeWidth="2.5" strokeDasharray="6 4" />
        <PillLabel x={300} y={54} text="subject + verb must agree" color={COLORS.success}
          bgColor="#f0fdf4" borderColor={COLORS.success} fontSize={12} />

        {/* Subject */}
        <text x={92} y={128} fontSize="19" fill={COLORS.primary} fontWeight="800"
          textAnchor="middle" fontFamily={FONT}>The box</text>
        <line x1={54} y1={138} x2={130} y2={138} stroke={COLORS.primary} strokeWidth="2.5" />
        <text x={92} y={158} fontSize="11" fill={COLORS.primary} fontWeight="700"
          textAnchor="middle" fontFamily={FONT}>subject (singular)</text>

        {/* Decoy phrase */}
        <text x={252} y={128} fontSize="17" fill={COLORS.textMuted} fontWeight="600"
          textAnchor="middle" fontFamily={FONT}>of old letters</text>
        <line x1={196} y1={122} x2={308} y2={122} stroke={COLORS.error} strokeWidth="2" />
        <text x={252} y={158} fontSize="11" fill={COLORS.axisLabel} fontWeight="700"
          textAnchor="middle" fontFamily={FONT}>decoy phrase &mdash; ignore</text>

        {/* Verb */}
        <text x={452} y={128} fontSize="19" fill={COLORS.secondary} fontWeight="800"
          textAnchor="middle" fontFamily={FONT}>was heavy</text>
        <text x={452} y={158} fontSize="11" fill={COLORS.secondary} fontWeight="700"
          textAnchor="middle" fontFamily={FONT}>verb</text>

        {/* Correct vs wrong */}
        <rect x={96} y={196} width={180} height={44} rx="10" fill="#f0fdf4"
          stroke={COLORS.success} strokeWidth="2" />
        <text x={114} y={223} fontSize="15" fill={COLORS.success} fontWeight="800" fontFamily={FONT}>{'✓'}</text>
        <text x={136} y={223} fontSize="13" fill={COLORS.text} fontWeight="700" fontFamily={FONT}>was (singular)</text>

        <rect x={320} y={196} width={200} height={44} rx="10" fill="#fef2f2"
          stroke={COLORS.error} strokeWidth="2" />
        <text x={338} y={223} fontSize="15" fill={COLORS.error} fontWeight="800" fontFamily={FONT}>{'✗'}</text>
        <text x={360} y={223} fontSize="13" fill={COLORS.text} fontWeight="700" fontFamily={FONT}>were (matches decoy)</text>
      </svg>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════
   29. TRANSITION MAP  (R&W Transitions)
      The five transition families and their signal words.
   ═══════════════════════════════════════════════════════════════ */
const TransitionMapDiagram = () => {
  const W = 560, H = 372;
  const rows = [
    { label: 'Contrast', words: 'however · but · yet · nevertheless', color: COLORS.error, bg: '#fef2f2' },
    { label: 'Cause / Result', words: 'therefore · thus · so · as a result', color: COLORS.secondary, bg: '#fff7ed' },
    { label: 'Addition', words: 'also · in addition · moreover', color: COLORS.primary, bg: '#eef2ff' },
    { label: 'Example', words: 'for example · for instance', color: COLORS.accent1, bg: '#ecfeff' },
    { label: 'Time', words: 'previously · today · later', color: COLORS.warning, bg: '#fffbeb' },
  ];
  const rowH = 56, gap = 10, top = 44;
  return (
    <div style={DIAGRAM_STYLE}>
      <svg viewBox={`0 0 ${W} ${H}`} style={{ maxWidth: 580, width: '100%' }}
        aria-label="Transition map: five families — contrast, cause and result, addition, example, and time — with their signal words">
        <defs>
          <linearGradient id="tm-bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={COLORS.bgSubtle} />
            <stop offset="100%" stopColor="#f1f5f9" />
          </linearGradient>
        </defs>
        <rect width={W} height={H} fill="url(#tm-bg)" rx="12" />

        <text x={W / 2} y={28} fontSize="13" fill={COLORS.text} fontWeight="700"
          textAnchor="middle" fontFamily={FONT}>Name the relationship, then pick from its family.</text>

        {rows.map((r, i) => {
          const y = top + i * (rowH + gap);
          return (
            <g key={r.label}>
              <rect x={30} y={y} width={500} height={rowH} rx="10" fill={r.bg}
                stroke={COLORS.grid} strokeWidth="1" />
              <rect x={30} y={y} width="5" height={rowH} rx="2.5" fill={r.color} />
              <text x={52} y={y + rowH / 2 + 5} fontSize="14" fill={r.color} fontWeight="800"
                fontFamily={FONT}>{r.label}</text>
              <text x={200} y={y + rowH / 2 + 5} fontSize="13" fill={COLORS.text} fontWeight="600"
                fontFamily={FONT}>{r.words}</text>
            </g>
          );
        })}
      </svg>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════
   30. INEQUALITY NUMBER LINE  (Algebra — Inequalities)
      x > 2 (open circle, shade right) and x ≤ −1 (closed, shade left).
   ═══════════════════════════════════════════════════════════════ */
const InequalityNumberLineDiagram = () => {
  const W = 560, H = 300;
  const oX = 280, sc = 44;
  const px = (v) => oX + v * sc;
  const ticks = [-4, -3, -2, -1, 0, 1, 2, 3, 4];

  const NumberLine = ({ y }) => (
    <g>
      <line x1={50} y1={y} x2={510} y2={y} stroke={COLORS.axis} strokeWidth="2" />
      <polygon points={`510,${y} 502,${y - 4} 502,${y + 4}`} fill={COLORS.axis} />
      <polygon points={`50,${y} 58,${y - 4} 58,${y + 4}`} fill={COLORS.axis} />
      {ticks.map((t) => (
        <g key={t}>
          <line x1={px(t)} y1={y - 5} x2={px(t)} y2={y + 5} stroke={COLORS.axis} strokeWidth="1.5" />
          <text x={px(t)} y={y + 22} fontSize="11" fill={COLORS.axisLabel} textAnchor="middle" fontFamily={FONT}>{t}</text>
        </g>
      ))}
    </g>
  );

  return (
    <div style={DIAGRAM_STYLE}>
      <svg viewBox={`0 0 ${W} ${H}`} style={{ maxWidth: 580, width: '100%' }}
        aria-label="Number lines for x greater than 2 with an open circle shaded right, and x less than or equal to negative 1 with a closed circle shaded left">
        <defs>
          <linearGradient id="inl-bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={COLORS.bgSubtle} />
            <stop offset="100%" stopColor="#f1f5f9" />
          </linearGradient>
        </defs>
        <rect width={W} height={H} fill="url(#inl-bg)" rx="12" />

        {/* Row 1: x > 2 — open circle at 2, shade right */}
        <text x={50} y={52} fontSize="15" fill={COLORS.secondary} fontWeight="800" fontFamily={FONT}>x &gt; 2</text>
        <NumberLine y={92} />
        <line x1={px(2)} y1={92} x2={504} y2={92} stroke={COLORS.secondary} strokeWidth="5" strokeLinecap="round" />
        <polygon points={`512,92 500,86 500,98`} fill={COLORS.secondary} />
        <circle cx={px(2)} cy={92} r="7" fill="#fff" stroke={COLORS.secondary} strokeWidth="3" />

        {/* Row 2: x ≤ −1 — closed circle at −1, shade left */}
        <text x={50} y={162} fontSize="15" fill={COLORS.primary} fontWeight="800" fontFamily={FONT}>x ≤ −1</text>
        <NumberLine y={202} />
        <line x1={56} y1={202} x2={px(-1)} y2={202} stroke={COLORS.primary} strokeWidth="5" strokeLinecap="round" />
        <polygon points={`48,202 60,196 60,208`} fill={COLORS.primary} />
        <circle cx={px(-1)} cy={202} r="7" fill={COLORS.primary} stroke="#fff" strokeWidth="2.5" />

        <CalloutCard x={80} y={252} width={400} color={COLORS.warning}
          text="Open circle: endpoint excluded · Closed circle: endpoint included" />
      </svg>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════
   31. SYSTEMS INTERSECTION  (Algebra — Systems of Equations)
      y = x + 1 and y = −x + 5 crossing at the solution (2, 3).
   ═══════════════════════════════════════════════════════════════ */
const SystemsIntersectionDiagram = () => {
  const W = 500, H = 440;
  const oX = 115, oY = 350, sc = 45;
  const px = (x, y) => [oX + x * sc, oY - y * sc];
  const [ix, iy] = px(2, 3);

  return (
    <div style={DIAGRAM_STYLE}>
      <svg viewBox={`0 0 ${W} ${H}`} style={{ maxWidth: 540, width: '100%' }}
        aria-label="Two lines, y equals x plus 1 and y equals negative x plus 5, crossing at the single solution point (2, 3)">
        <defs>
          <linearGradient id="sys-bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={COLORS.bgSubtle} />
            <stop offset="100%" stopColor="#f1f5f9" />
          </linearGradient>
        </defs>
        <rect width={W} height={H} fill="url(#sys-bg)" rx="12" />

        {renderGrid({ originX: oX, originY: oY, scale: sc, xRange: [-2, 8], yRange: [-1, 6], width: W, height: H })}
        {renderAxes({ originX: oX, originY: oY, width: W, height: H })}
        {renderAxisLabels({ originX: oX, originY: oY, scale: sc,
          xTicks: [-1, 1, 2, 3, 4, 5, 6, 7], yTicks: [1, 2, 3, 4, 5] })}

        {/* y = x + 1 */}
        <line x1={px(-1.6, -0.6)[0]} y1={px(-1.6, -0.6)[1]} x2={px(4.6, 5.6)[0]} y2={px(4.6, 5.6)[1]}
          stroke={COLORS.primary} strokeWidth="3" strokeLinecap="round" />
        <PillLabel x={px(4.4, 5.9)[0]} y={px(4.4, 5.9)[1]} text="y = x + 1" color={COLORS.primary}
          bgColor="#fff" fontSize={12} />

        {/* y = −x + 5 */}
        <line x1={px(-0.6, 5.6)[0]} y1={px(-0.6, 5.6)[1]} x2={px(6.4, -1.4)[0]} y2={px(6.4, -1.4)[1]}
          stroke={COLORS.secondary} strokeWidth="3" strokeLinecap="round" />
        <PillLabel x={px(0.2, 6)[0] + 10} y={px(0.2, 6)[1] - 4} text="y = −x + 5" color={COLORS.secondary}
          bgColor="#fff" fontSize={12} />

        {/* Solution point */}
        <circle cx={ix} cy={iy} r="9" fill={COLORS.warning} stroke="#fff" strokeWidth="3" />
        <PillLabel x={ix + 62} y={iy - 16} text="(2, 3)" color={COLORS.text}
          bgColor="#fff" borderColor={COLORS.grid} fontSize={13} />

        <CalloutCard x={90} y={H - 52} width={340} color={COLORS.warning}
          text="One point sits on both lines — that point is the solution." />
      </svg>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════
   32. SCATTERPLOT MODEL  (PSDA — Scatterplots & Data Models)
      Dots = data, line = model; one point annotated actual vs predicted.
   ═══════════════════════════════════════════════════════════════ */
const ScatterplotModelDiagram = () => {
  const W = 520, H = 440;
  const oX = 60, oY = 360, sc = 44;
  const px = (x, y) => [oX + x * sc, oY - y * sc];
  const pts = [
    [1, 1.8], [2, 2.0], [2.6, 3.1], [3.5, 2.9], [4.2, 3.9],
    [5, 3.6], [6.5, 4.6], [7.2, 5.7], [7.8, 5.3],
  ];
  const m = 0.55, b = 1.2;
  const hx = 5.8, hyActual = 4.9, hyPred = m * hx + b;
  const [ax, ay] = px(hx, hyActual);
  const [qx, qy] = px(hx, hyPred);

  return (
    <div style={DIAGRAM_STYLE}>
      <svg viewBox={`0 0 ${W} ${H}`} style={{ maxWidth: 560, width: '100%' }}
        aria-label="Scatterplot with a line of best fit: dots are the data, the line is the model, and one highlighted point shows the gap between its actual value and the value the line predicts">
        <defs>
          <linearGradient id="scm-bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={COLORS.bgSubtle} />
            <stop offset="100%" stopColor="#f1f5f9" />
          </linearGradient>
        </defs>
        <rect width={W} height={H} fill="url(#scm-bg)" rx="12" />

        {renderAxes({ originX: oX, originY: oY, width: W, height: H })}

        {/* Model line */}
        <line x1={px(0.4, m * 0.4 + b)[0]} y1={px(0.4, m * 0.4 + b)[1]}
          x2={px(8.4, m * 8.4 + b)[0]} y2={px(8.4, m * 8.4 + b)[1]}
          stroke={COLORS.primary} strokeWidth="3" strokeLinecap="round" />

        {/* Data dots */}
        {pts.map(([x, y], i) => {
          const [cx, cy] = px(x, y);
          return <circle key={i} cx={cx} cy={cy} r="6" fill={COLORS.warning} stroke="#fff" strokeWidth="2" />;
        })}

        {/* Highlighted point: actual vs predicted */}
        <line x1={ax} y1={ay} x2={qx} y2={qy} stroke={COLORS.accent2} strokeWidth="2" strokeDasharray="5 3" />
        <circle cx={ax} cy={ay} r="7" fill={COLORS.accent2} stroke="#fff" strokeWidth="2.5" />
        <circle cx={qx} cy={qy} r="6" fill={COLORS.primary} stroke="#fff" strokeWidth="2.5" />
        <PillLabel x={ax + 62} y={ay - 8} text="actual (data)" color={COLORS.accent2} bgColor="#fff" fontSize={12} />
        <PillLabel x={qx + 84} y={qy + 22} text="predicted (line)" color={COLORS.primary} bgColor="#fff" fontSize={12} />

        {/* Legend pills */}
        <PillLabel x={150} y={52} text="dots = what happened" color={COLORS.warning} bgColor="#fff" fontSize={12} />
        <PillLabel x={368} y={52} text="line = the model" color={COLORS.primary} bgColor="#fff" fontSize={12} />

        <CalloutCard x={70} y={H - 48} width={380} color={COLORS.warning}
          text="Always ask which one the question is about: the dots, or the line." />
      </svg>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════
   33. TRANSVERSAL ANGLES  (Geometry — Lines, Angles & Congruence)
      Parallel lines cut by a transversal: equal corresponding angles,
      co-interior pair summing to 180°.
   ═══════════════════════════════════════════════════════════════ */
const TransversalAnglesDiagram = () => {
  const W = 560, H = 400;
  const y1 = 130, y2 = 270;
  // Transversal through both lines
  const tx = (y) => 150 + (y - 40) / 1.19;
  const ix1 = tx(y1), ix2 = tx(y2);

  return (
    <div style={DIAGRAM_STYLE}>
      <svg viewBox={`0 0 ${W} ${H}`} style={{ maxWidth: 580, width: '100%' }}
        aria-label="Two parallel lines cut by a transversal: corresponding angles marked equal, and a co-interior pair adding to 180 degrees">
        <defs>
          <linearGradient id="tv-bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={COLORS.bgSubtle} />
            <stop offset="100%" stopColor="#f1f5f9" />
          </linearGradient>
        </defs>
        <rect width={W} height={H} fill="url(#tv-bg)" rx="12" />

        {/* Parallel lines with direction arrows */}
        {[y1, y2].map((y) => (
          <g key={y}>
            <line x1={55} y1={y} x2={505} y2={y} stroke={COLORS.axis} strokeWidth="2.5" />
            <polygon points={`470,${y} 458,${y - 6} 458,${y + 6}`} fill={COLORS.axisLabel} />
          </g>
        ))}

        {/* Transversal */}
        <line x1={150} y1={40} x2={410} y2={350} stroke={COLORS.primary} strokeWidth="2.5" />

        {/* Corresponding angles (equal) — below-right at each intersection */}
        <path d={`M ${ix1 + 34} ${y1} A 34 34 0 0 1 ${ix1 + 22} ${y1 + 26}`} fill="none" stroke={COLORS.success} strokeWidth="3" />
        <text x={ix1 + 52} y={y1 + 28} fontSize="15" fill={COLORS.success} fontWeight="800" fontFamily={FONT}>a°</text>
        <path d={`M ${ix2 + 34} ${y2} A 34 34 0 0 1 ${ix2 + 22} ${y2 + 26}`} fill="none" stroke={COLORS.success} strokeWidth="3" />
        <text x={ix2 + 52} y={y2 + 28} fontSize="15" fill={COLORS.success} fontWeight="800" fontFamily={FONT}>a°</text>

        {/* Co-interior angle — above-right at the lower intersection */}
        <path d={`M ${ix2 + 34} ${y2} A 34 34 0 0 0 ${ix2 - 22} ${y2 - 26}`} fill="none" stroke={COLORS.secondary} strokeWidth="3" />
        <text x={ix2 + 44} y={y2 - 34} fontSize="14" fill={COLORS.secondary} fontWeight="800" fontFamily={FONT}>180° − a°</text>

        <CalloutCard x={70} y={H - 52} width={430} color={COLORS.success}
          text="Matching corners are equal · same-side interior angles add to 180°" />
      </svg>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════
   34. RADIAN ARC  (Geometry — Radians & Degrees)
      An arc exactly one radius long marks 1 radian; 180° = π anchors
      every conversion.
   ═══════════════════════════════════════════════════════════════ */
const RadianArcDiagram = () => {
  const W = 560, H = 400;
  const cx = 170, cy = 205, r = 125;
  const rad = 57.3 * (Math.PI / 180);
  const ex = cx + r * Math.cos(rad), ey = cy - r * Math.sin(rad);

  return (
    <div style={DIAGRAM_STYLE}>
      <svg viewBox={`0 0 ${W} ${H}`} style={{ maxWidth: 580, width: '100%' }}
        aria-label="A circle where an arc exactly one radius long spans an angle of 1 radian, with the anchor fact that 180 degrees equals pi radians">
        <defs>
          <linearGradient id="ra-bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={COLORS.bgSubtle} />
            <stop offset="100%" stopColor="#f1f5f9" />
          </linearGradient>
        </defs>
        <rect width={W} height={H} fill="url(#ra-bg)" rx="12" />

        <circle cx={cx} cy={cy} r={r} fill="none" stroke={COLORS.grid} strokeWidth="2" />
        <circle cx={cx} cy={cy} r="4" fill={COLORS.axis} />

        {/* Two radii bounding the 1-radian angle */}
        <line x1={cx} y1={cy} x2={cx + r} y2={cy} stroke={COLORS.axis} strokeWidth="2.5" />
        <line x1={cx} y1={cy} x2={ex} y2={ey} stroke={COLORS.axis} strokeWidth="2.5" />
        <text x={cx + r / 2 - 8} y={cy + 20} fontSize="15" fill={COLORS.text} fontWeight="700" fontFamily={FONT}>r</text>

        {/* The arc of length r */}
        <path d={`M ${cx + r} ${cy} A ${r} ${r} 0 0 0 ${ex} ${ey}`}
          fill="none" stroke={COLORS.accent2} strokeWidth="5" strokeLinecap="round" />
        <PillLabel x={cx + r + 4} y={cy - r / 2 - 14} text="arc length = r" color={COLORS.accent2} bgColor="#fff" fontSize={12} />

        {/* Angle marker */}
        <path d={`M ${cx + 38} ${cy} A 38 38 0 0 0 ${cx + 38 * Math.cos(rad)} ${cy - 38 * Math.sin(rad)}`}
          fill="none" stroke={COLORS.primary} strokeWidth="2.5" />
        <text x={cx + 52} y={cy - 16} fontSize="13" fill={COLORS.primary} fontWeight="800" fontFamily={FONT}>1 rad</text>

        {/* Anchor + conversion cards */}
        <CalloutCard x={330} y={120} width={200} color={COLORS.primary} text="180° = π radians" />
        <CalloutCard x={330} y={166} width={200} color={COLORS.secondary} text="° → rad: × π⁄180" fontSize={12} />
        <CalloutCard x={330} y={212} width={200} color={COLORS.secondary} text="rad → °: × 180⁄π" fontSize={12} />

        <CalloutCard x={70} y={H - 52} width={420} color={COLORS.accent2}
          text="1 radian: the angle whose arc is exactly one radius long" />
      </svg>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════
   35. TRIG SIDE LABELING  (Geometry — Right-Triangle Trigonometry)
      Opposite / adjacent / hypotenuse relative to θ + SOH-CAH-TOA.
   ═══════════════════════════════════════════════════════════════ */
const TrigSideLabelingDiagram = () => {
  const W = 560, H = 400;
  const A = [110, 300], B = [430, 300], C = [430, 110];

  return (
    <div style={DIAGRAM_STYLE}>
      <svg viewBox={`0 0 ${W} ${H}`} style={{ maxWidth: 580, width: '100%' }}
        aria-label="Right triangle with the angle theta marked: the opposite side faces theta, the adjacent side touches it, and the hypotenuse is across from the right angle">
        <defs>
          <linearGradient id="tsl-bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={COLORS.bgSubtle} />
            <stop offset="100%" stopColor="#f1f5f9" />
          </linearGradient>
        </defs>
        <rect width={W} height={H} fill="url(#tsl-bg)" rx="12" />

        {/* Sides */}
        <line x1={A[0]} y1={A[1]} x2={B[0]} y2={B[1]} stroke={COLORS.success} strokeWidth="4" strokeLinecap="round" />
        <line x1={B[0]} y1={B[1]} x2={C[0]} y2={C[1]} stroke={COLORS.accent2} strokeWidth="4" strokeLinecap="round" />
        <line x1={A[0]} y1={A[1]} x2={C[0]} y2={C[1]} stroke={COLORS.primary} strokeWidth="4" strokeLinecap="round" />

        {/* Right-angle marker at B */}
        <path d={`M ${B[0] - 18} ${B[1]} L ${B[0] - 18} ${B[1] - 18} L ${B[0]} ${B[1] - 18}`}
          fill="none" stroke={COLORS.axis} strokeWidth="2" />

        {/* θ at A */}
        <path d={`M ${A[0] + 46} ${A[1]} A 46 46 0 0 0 ${A[0] + 38} ${A[1] - 25}`}
          fill="none" stroke={COLORS.warning} strokeWidth="3" />
        <text x={A[0] + 58} y={A[1] - 12} fontSize="17" fill={COLORS.warning} fontWeight="800" fontFamily={FONT}>θ</text>

        {/* Side labels */}
        <text x={(A[0] + B[0]) / 2} y={A[1] + 26} fontSize="14" fill={COLORS.success} fontWeight="800"
          textAnchor="middle" fontFamily={FONT}>adjacent — touches θ</text>
        <text x={B[0] + 14} y={(B[1] + C[1]) / 2 + 5} fontSize="14" fill={COLORS.accent2} fontWeight="800"
          fontFamily={FONT}>opposite</text>
        <text x={(A[0] + C[0]) / 2 - 24} y={(A[1] + C[1]) / 2 - 16} fontSize="14" fill={COLORS.primary} fontWeight="800"
          textAnchor="end" fontFamily={FONT}>hypotenuse</text>

        {/* SOH-CAH-TOA card */}
        <rect x={70} y={H - 64} width={420} height={44} rx="10" fill="#fff" stroke={COLORS.grid} strokeWidth="1" />
        <rect x={70} y={H - 64} width="4" height={44} rx="2" fill={COLORS.warning} />
        <text x={100} y={H - 37} fontSize="13.5" fontWeight="700" fontFamily={FONT}>
          <tspan fill={COLORS.accent2}>sin θ = opp⁄hyp</tspan>
          <tspan fill={COLORS.text} dx="14">·</tspan>
          <tspan fill={COLORS.success} dx="14">cos θ = adj⁄hyp</tspan>
          <tspan fill={COLORS.text} dx="14">·</tspan>
          <tspan fill={COLORS.primary} dx="14">tan θ = opp⁄adj</tspan>
        </text>
      </svg>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════
   REGISTRY — maps visualType strings to components
   ═══════════════════════════════════════════════════════════════ */
const visualRegistry = {
  parallelLinesDiagram: ParallelLinesDiagram,
  perpendicularLinesDiagram: PerpendicularLinesDiagram,
  slopeFromGraphDiagram: SlopeFromGraphDiagram,
  slopeFromTableDiagram: SlopeFromTableDiagram,
  yInterceptDiagram: YInterceptDiagram,
  parabolaFromGraphDiagram: ParabolaFromGraphDiagram,
  rightTriangleDiagram: RightTriangleDiagram,
  specialTrianglesDiagram: SpecialTrianglesDiagram,
  similarTrianglesDiagram: SimilarTrianglesDiagram,
  triangleAreaDiagram: TriangleAreaDiagram,
  circlePartsDiagram: CirclePartsDiagram,
  arcLengthDiagram: ArcLengthDiagram,
  circleEquationDiagram: CircleEquationDiagram,
  cubeDiagram: CubeDiagram,
  rectangularPrismDiagram: RectangularPrismDiagram,
  cylinderDiagram: CylinderDiagram,
  sphereDiagram: SphereDiagram,
  coneDiagram: ConeDiagram,
  meanMedianDiagram: MeanMedianDiagram,
  horizontalShiftDiagram: HorizontalShiftDiagram,
  verticalShiftDiagram: VerticalShiftDiagram,
  exponentialGrowthDiagram: ExponentialGrowthDiagram,
  percentChangeDiagram: PercentChangeDiagram,
  adaptiveModuleFlowDiagram: AdaptiveModuleFlowDiagram,
  scoreCompositionDiagram: ScoreCompositionDiagram,
  moduleTimeBudgetDiagram: ModuleTimeBudgetDiagram,
  sentenceBoundaryDiagram: SentenceBoundaryDiagram,
  subjectVerbAgreementDiagram: SubjectVerbAgreementDiagram,
  transitionMapDiagram: TransitionMapDiagram,
  inequalityNumberLineDiagram: InequalityNumberLineDiagram,
  systemsIntersectionDiagram: SystemsIntersectionDiagram,
  scatterplotModelDiagram: ScatterplotModelDiagram,
  transversalAnglesDiagram: TransversalAnglesDiagram,
  radianArcDiagram: RadianArcDiagram,
  trigSideLabelingDiagram: TrigSideLabelingDiagram,
};

const LessonVisualRenderer = ({ type }) => {
  const Component = visualRegistry[type];
  if (!Component) {
    if (process.env.NODE_ENV === 'development') {
      console.warn(`LessonVisualRenderer: unknown visualType "${type}"`);
    }
    return null;
  }
  return <Component />;
};

export { visualRegistry };
export default LessonVisualRenderer;
