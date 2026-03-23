import React from 'react';

const wrapStyle = {
  background: 'linear-gradient(135deg, #f8f9fa 0%, #f1f3f4 100%)',
  borderRadius: 16,
  padding: '32px',
  margin: '24px 0',
  textAlign: 'center',
};

/**
 * Parallel Lines Diagram
 * Equation: y = 2x + 1 (orange) and y = 2x + 5 (blue)
 *
 * Coordinate system: viewBox 0..300 x 0..200
 * Axes: x-axis at y=170, y-axis at x=30
 * Pixel mapping: 1 unit = 25px horizontal, 25px vertical (y inverted)
 * Origin (0,0) at pixel (30, 170)
 *
 * Line 1 (y = 2x + 1):
 *   (0, 1) → px(30, 145), (4, 9) → px(130, -55) → clip to viewBox
 *   Using x=-0.5..5.5 for full coverage:
 *   (-0.5, 0) → px(17, 170), (5, 11) → px(155, -105) → clipped
 *   Practical: (0, 1) → (30, 145) and (3, 7) → (105, 20)
 *
 * Line 2 (y = 2x + 5):
 *   (0, 5) → px(30, 45), (2.5, 10) → px(92, -80)
 *   Practical: (-1, 3) → (5, 95) and (1.5, 8) → (67, -30) → clip
 *   Using: (-2, 1) → px(-20, 145) and (1, 7) → (55, 20)
 */
const ParallelLinesDiagram = () => {
  const ox = 30, oy = 170, s = 25;
  const px = (x, y) => [ox + x * s, oy - y * s];

  const [x1a, y1a] = px(0, 1);
  const [x1b, y1b] = px(3, 7);
  const [x2a, y2a] = px(-2, 1);
  const [x2b, y2b] = px(1, 7);

  return (
    <div style={wrapStyle}>
      <svg viewBox="0 0 300 200" style={{ maxWidth: 350, width: '100%' }}>
        <defs>
          <pattern id="ct-grid-par" width="25" height="25" patternUnits="userSpaceOnUse">
            <path d="M 25 0 L 0 0 0 25" fill="none" stroke="#e5e7eb" strokeWidth="0.5"/>
          </pattern>
        </defs>
        <rect width="300" height="200" fill="url(#ct-grid-par)"/>

        <line x1="30" y1="170" x2="280" y2="170" stroke="#9ca3af" strokeWidth="1.5"/>
        <line x1="30" y1="20" x2="30" y2="170" stroke="#9ca3af" strokeWidth="1.5"/>
        <text x="275" y="185" fontSize="12" fill="#6b7280">x</text>
        <text x="15" y="25" fontSize="12" fill="#6b7280">y</text>
        <text x="24" y="183" fontSize="10" fill="#6b7280">0</text>

        <line x1={x1a} y1={y1a} x2={x1b} y2={y1b} stroke="#ea580c" strokeWidth="3" strokeLinecap="round"/>
        <line x1={x2a} y1={y2a} x2={x2b} y2={y2b} stroke="#3b82f6" strokeWidth="3" strokeLinecap="round"/>

        <circle cx={x1a} cy={y1a} r="3" fill="#ea580c"/>
        <circle cx={x2b} cy={y2b} r="3" fill="#3b82f6"/>

        <text x="115" y="15" fontSize="13" fill="#ea580c" fontWeight="600">y = 2x + 1</text>
        <text x="70" y="15" fontSize="13" fill="#3b82f6" fontWeight="600">y = 2x + 5</text>
        <text x="150" y="195" fontSize="11" fill="#6b7280" textAnchor="middle">Same slope (m = 2), different y-intercepts</text>
      </svg>
    </div>
  );
};

/**
 * Perpendicular Lines Diagram
 * Equation: y = 2x (orange, slope 2) and y = -0.5x (blue, slope -1/2)
 * Slopes: 2 × (-1/2) = -1  ✓
 *
 * Coordinate system: viewBox 0..300 x 0..220
 * Origin at center: pixel (150, 100)
 * Scale: 1 unit = 30px
 *
 * Line 1 (y = 2x): (-2, -4)→px(90, 220) to (2, 4)→px(210, -20) → clip
 * Line 2 (y = -0.5x): (-4, 2)→px(30, 40) to (4, -2)→px(270, 160)
 */
const PerpendicularLinesDiagram = () => {
  const cx = 150, cy = 100, s = 30;
  const px = (x, y) => [cx + x * s, cy - y * s];

  const [l1ax, l1ay] = px(-1.5, -3);
  const [l1bx, l1by] = px(2, 4);
  const [l2ax, l2ay] = px(-3.5, 1.75);
  const [l2bx, l2by] = px(4, -2);

  return (
    <div style={wrapStyle}>
      <svg viewBox="0 0 300 220" style={{ maxWidth: 350, width: '100%' }}>
        <defs>
          <pattern id="ct-grid-perp" width="30" height="30" patternUnits="userSpaceOnUse">
            <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#e5e7eb" strokeWidth="0.5"/>
          </pattern>
        </defs>
        <rect width="300" height="200" fill="url(#ct-grid-perp)"/>

        <line x1="150" y1="10" x2="150" y2="190" stroke="#9ca3af" strokeWidth="1.5"/>
        <line x1="20" y1="100" x2="280" y2="100" stroke="#9ca3af" strokeWidth="1.5"/>
        <text x="275" y="115" fontSize="12" fill="#6b7280">x</text>
        <text x="155" y="20" fontSize="12" fill="#6b7280">y</text>

        <line x1={l1ax} y1={l1ay} x2={l1bx} y2={l1by} stroke="#ea580c" strokeWidth="3" strokeLinecap="round"/>
        <line x1={l2ax} y1={l2ay} x2={l2bx} y2={l2by} stroke="#3b82f6" strokeWidth="3" strokeLinecap="round"/>

        <rect x="143" y="100" width="14" height="14" fill="none" stroke="#10b981" strokeWidth="2" transform="rotate(-14.04 150 100)"/>

        <text x="215" y="25" fontSize="13" fill="#ea580c" fontWeight="600">m = 2</text>
        <text x="225" y="175" fontSize="13" fill="#3b82f6" fontWeight="600">m = −½</text>
        <text x="150" y="210" fontSize="11" fill="#6b7280" textAnchor="middle">Slopes are negative reciprocals: 2 × (−½) = −1</text>
      </svg>
    </div>
  );
};

/**
 * Slope from Graph Diagram
 * Plotted line passes through (0, 4) and (5, 1).
 *   slope = (1 − 4)/(5 − 0) = −3/5
 * Rise = −3 (down), Run = 5 (right)
 *
 * Coordinate system: viewBox 0..500 x 0..420
 * Origin at pixel (130, 190), 1 unit = 35px
 */
const SlopeFromGraphDiagram = () => {
  const ox = 130, oy = 190, s = 35;
  const px = (x, y) => [ox + x * s, oy - y * s];

  const [p1x, p1y] = px(0, 4);
  const [p2x, p2y] = px(5, 1);

  const [runEndX, runEndY] = px(5, 4);

  return (
    <div style={{ ...wrapStyle, padding: 40 }}>
      <svg viewBox="0 0 500 420" style={{ maxWidth: 550, width: '100%' }}>
        <rect x="0" y="0" width="500" height="420" fill="#fff"/>

        {[-2,-1,0,1,2,3,4,5,6,7,8].map(i => (
          <line key={`vg${i}`} x1={ox + i*s} y1="30" x2={ox + i*s} y2="330" stroke="#d1d5db" strokeWidth="1"/>
        ))}
        {[-4,-3,-2,-1,0,1,2,3,4,5].map(i => (
          <line key={`hg${i}`} x1="60" y1={oy - i*s} x2="420" y2={oy - i*s} stroke="#d1d5db" strokeWidth="1"/>
        ))}

        <line x1="60" y1={oy} x2="420" y2={oy} stroke="#000" strokeWidth="2"/>
        <line x1={ox} y1="30" x2={ox} y2="330" stroke="#000" strokeWidth="2"/>
        <polygon points={`420,${oy} 408,${oy-6} 408,${oy+6}`} fill="#000"/>
        <polygon points={`${ox},30 ${ox-6},42 ${ox+6},42`} fill="#000"/>

        <text x="430" y={oy+5} fontSize="20" fill="#000" fontWeight="700" fontFamily="system-ui">x</text>
        <text x={ox+5} y="25" fontSize="20" fill="#000" fontWeight="700" fontFamily="system-ui">y</text>

        {[-2,-1,1,2,3,4,5,6,7,8].map(i => (
          <text key={`xn${i}`} x={ox + i*s} y={oy+18} fontSize="13" fill="#000" textAnchor="middle" fontFamily="system-ui">{i}</text>
        ))}
        <text x={ox - 8} y={oy+18} fontSize="13" fill="#000" textAnchor="middle" fontFamily="system-ui">0</text>
        {[-4,-3,-2,-1,1,2,3,4,5].map(i => (
          <text key={`yn${i}`} x={ox - 12} y={oy - i*s + 5} fontSize="13" fill="#000" textAnchor="end" fontFamily="system-ui">{i}</text>
        ))}

        <line x1={px(-2, 5.2)[0]} y1={px(-2, 5.2)[1]} x2={px(8, -0.8)[0]} y2={px(8, -0.8)[1]} stroke="#ef4444" strokeWidth="4" strokeLinecap="round"/>

        <circle cx={p1x} cy={p1y} r="10" fill="#fbbf24" stroke="#000" strokeWidth="2"/>
        <circle cx={p2x} cy={p2y} r="10" fill="#fbbf24" stroke="#000" strokeWidth="2"/>

        <text x={p1x + 12} y={p1y - 10} fontSize="13" fill="#000" fontWeight="600" fontFamily="system-ui">(0, 4)</text>
        <text x={p2x + 12} y={p2y - 10} fontSize="13" fill="#000" fontWeight="600" fontFamily="system-ui">(5, 1)</text>

        <line x1={p1x} y1={p1y} x2={runEndX} y2={runEndY} stroke="#22c55e" strokeWidth="5"/>
        <polygon points={`${runEndX},${runEndY} ${runEndX-10},${runEndY-8} ${runEndX-10},${runEndY+8}`} fill="#22c55e"/>

        <line x1={runEndX} y1={runEndY} x2={p2x} y2={p2y} stroke="#ec4899" strokeWidth="5"/>
        <polygon points={`${p2x},${p2y} ${p2x-10},${p2y-15} ${p2x+10},${p2y-15}`} fill="#ec4899"/>

        <text x={(p1x + runEndX) / 2} y={p1y - 12} fontSize="24" fill="#22c55e" fontWeight="800" fontFamily="system-ui" textAnchor="middle">5</text>
        <text x={runEndX + 18} y={(runEndY + p2y) / 2 + 6} fontSize="24" fill="#ec4899" fontWeight="800" fontFamily="system-ui">−3</text>

        <rect x="100" y="350" width="300" height="60" rx="10" fill="#fff" stroke="#e5e7eb" strokeWidth="2"/>
        <text x="148" y="372" fontSize="18" fill="#ec4899" fontWeight="700" fontFamily="system-ui">Rise</text>
        <line x1="138" y1="378" x2="190" y2="378" stroke="#000" strokeWidth="2"/>
        <text x="148" y="398" fontSize="18" fill="#22c55e" fontWeight="700" fontFamily="system-ui">Run</text>
        <text x="210" y="388" fontSize="24" fill="#000" fontWeight="700" fontFamily="system-ui">=</text>
        <text x="255" y="372" fontSize="20" fill="#000" fontWeight="700" fontFamily="system-ui">−3</text>
        <line x1="248" y1="378" x2="290" y2="378" stroke="#000" strokeWidth="2"/>
        <text x="264" y="400" fontSize="20" fill="#000" fontWeight="700" fontFamily="system-ui">5</text>
      </svg>
    </div>
  );
};

/**
 * Y-Intercept Diagram
 * Equation: y = 2x + 3
 * Y-intercept: (0, 3)
 *
 * Coordinate system: viewBox 0..500 x 0..420
 * Origin at pixel (220, 190), 1 unit = 35px
 *
 * Plotted points for the line:
 *   (-3, -3) → px(115, 295)  and  (2, 7) → px(290, -55) — clip to viewBox
 *   Verify: y = 2(-3)+3 = -3 ✓;  y = 2(2)+3 = 7 ✓
 *   y-intercept: (0, 3) → px(220, 85)  — y = 2(0)+3 = 3 ✓
 */
const YInterceptDiagram = () => {
  const cx = 220, oy = 190, s = 35;
  const px = (x, y) => [cx + x * s, oy - y * s];

  const [la, lb] = [px(-3, -3), px(2, 7)];
  const yIntPx = px(0, 3);

  return (
    <div style={{ ...wrapStyle, padding: 40 }}>
      <svg viewBox="0 0 500 420" style={{ maxWidth: 550, width: '100%' }}>
        <rect x="0" y="0" width="500" height="420" fill="#fff"/>

        {[-3,-2,-1,0,1,2,3,4,5,6].map(i => (
          <line key={`vg${i}`} x1={cx + i*s} y1="30" x2={cx + i*s} y2="330" stroke="#d1d5db" strokeWidth="1"/>
        ))}
        {[-4,-3,-2,-1,0,1,2,3,4,5].map(i => (
          <line key={`hg${i}`} x1="80" y1={oy - i*s} x2="440" y2={oy - i*s} stroke="#d1d5db" strokeWidth="1"/>
        ))}

        <line x1="80" y1={oy} x2="440" y2={oy} stroke="#000" strokeWidth="2"/>
        <line x1={cx} y1="30" x2={cx} y2="330" stroke="#000" strokeWidth="2"/>
        <polygon points={`440,${oy} 428,${oy-6} 428,${oy+6}`} fill="#000"/>
        <polygon points={`${cx},30 ${cx-6},42 ${cx+6},42`} fill="#000"/>

        <text x="450" y={oy+5} fontSize="20" fill="#000" fontWeight="700" fontFamily="system-ui">x</text>
        <text x={cx+5} y="25" fontSize="20" fill="#000" fontWeight="700" fontFamily="system-ui">y</text>

        {[-3,-2,-1,1,2,3,4,5,6].map(i => (
          <text key={`xn${i}`} x={cx + i*s} y={oy+18} fontSize="13" fill="#000" textAnchor="middle" fontFamily="system-ui">{i}</text>
        ))}
        <text x={cx - 8} y={oy+18} fontSize="13" fill="#000" textAnchor="middle" fontFamily="system-ui">0</text>
        {[-4,-3,-2,-1,1,2,3,4,5].map(i => (
          <text key={`yn${i}`} x={cx - 12} y={oy - i*s + 5} fontSize="13" fill="#000" textAnchor="end" fontFamily="system-ui">{i}</text>
        ))}

        <line x1={la[0]} y1={la[1]} x2={lb[0]} y2={lb[1]} stroke="#3b82f6" strokeWidth="4" strokeLinecap="round"/>

        <circle cx={yIntPx[0]} cy={yIntPx[1]} r="12" fill="#f59e0b" stroke="#000" strokeWidth="3"/>

        <line x1={cx} y1="30" x2={cx} y2={yIntPx[1] + 20} stroke="#f59e0b" strokeWidth="6" opacity="0.3"/>

        <defs>
          <marker id="ct-arrowhead" markerWidth="10" markerHeight="10" refX="5" refY="3" orient="auto">
            <polygon points="0 0, 10 3, 0 6" fill="#ea580c" />
          </marker>
        </defs>
        <line x1={yIntPx[0] + 50} y1={yIntPx[1] - 30} x2={yIntPx[0] + 15} y2={yIntPx[1] - 7} stroke="#ea580c" strokeWidth="3" markerEnd="url(#ct-arrowhead)"/>
        <text x={yIntPx[0] + 60} y={yIntPx[1] - 40} fontSize="18" fill="#ea580c" fontWeight="700" fontFamily="system-ui">Y-intercept</text>
        <text x={yIntPx[0] + 60} y={yIntPx[1] - 18} fontSize="16" fill="#ea580c" fontWeight="600" fontFamily="system-ui">(0, 3)</text>

        <rect x="310" y="250" width="110" height="45" rx="8" fill="#fff" stroke="#3b82f6" strokeWidth="2"/>
        <text x="365" y="278" fontSize="20" fill="#3b82f6" fontWeight="700" fontFamily="system-ui" textAnchor="middle">y = 2x + 3</text>

        <rect x="80" y="355" width="360" height="50" rx="10" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2"/>
        <text x="260" y="385" fontSize="16" fill="#92400e" fontWeight="600" fontFamily="system-ui" textAnchor="middle">The line crosses the y-axis at (0, 3)</text>
      </svg>
    </div>
  );
};

/**
 * Parabola from Graph Diagram (for quadratics lesson 23)
 * Equation: y = 2(x − 2)² − 3 = 2x² − 8x + 5
 * Vertex: (2, −3), Y-intercept: (0, 5), extra point: (4, 5)
 *
 * Coordinate system: viewBox 0..500 x 0..420
 * Origin at pixel (200, 250), 1 unit = 35px
 */
const ParabolaFromGraphDiagram = () => {
  const cx = 200, oy = 250, s = 35;
  const px = (x, y) => [cx + x * s, oy - y * s];

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
    <div style={{ ...wrapStyle, padding: 40 }}>
      <svg viewBox="0 0 500 420" style={{ maxWidth: 550, width: '100%' }}>
        <rect x="0" y="0" width="500" height="420" fill="#fff"/>

        {[-3,-2,-1,0,1,2,3,4,5,6,7].map(i => (
          <line key={`vg${i}`} x1={cx + i*s} y1="20" x2={cx + i*s} y2="380" stroke="#d1d5db" strokeWidth="1"/>
        ))}
        {[-5,-4,-3,-2,-1,0,1,2,3,4,5,6].map(i => (
          <line key={`hg${i}`} x1="60" y1={oy - i*s} x2="460" y2={oy - i*s} stroke="#d1d5db" strokeWidth="1"/>
        ))}

        <line x1="60" y1={oy} x2="460" y2={oy} stroke="#000" strokeWidth="2"/>
        <line x1={cx} y1="20" x2={cx} y2="380" stroke="#000" strokeWidth="2"/>
        <polygon points={`460,${oy} 448,${oy-6} 448,${oy+6}`} fill="#000"/>
        <polygon points={`${cx},20 ${cx-6},32 ${cx+6},32`} fill="#000"/>

        <text x="468" y={oy+5} fontSize="18" fill="#000" fontWeight="700" fontFamily="system-ui">x</text>
        <text x={cx+5} y="18" fontSize="18" fill="#000" fontWeight="700" fontFamily="system-ui">y</text>

        {[-2,-1,1,2,3,4,5,6].map(i => (
          <text key={`xn${i}`} x={cx + i*s} y={oy+18} fontSize="12" fill="#000" textAnchor="middle" fontFamily="system-ui">{i}</text>
        ))}
        <text x={cx - 8} y={oy+18} fontSize="12" fill="#000" textAnchor="middle" fontFamily="system-ui">0</text>
        {[-4,-3,-2,-1,1,2,3,4,5,6].map(i => (
          <text key={`yn${i}`} x={cx - 10} y={oy - i*s + 4} fontSize="12" fill="#000" textAnchor="end" fontFamily="system-ui">{i}</text>
        ))}

        <polyline points={points.join(' ')} fill="none" stroke="#3b82f6" strokeWidth="3.5" strokeLinecap="round"/>

        <circle cx={vertex[0]} cy={vertex[1]} r="10" fill="#f59e0b" stroke="#000" strokeWidth="2.5"/>
        <text x={vertex[0] + 14} y={vertex[1] + 5} fontSize="13" fill="#000" fontWeight="600" fontFamily="system-ui">(2, −3) vertex</text>

        <circle cx={yInt[0]} cy={yInt[1]} r="8" fill="#22c55e" stroke="#000" strokeWidth="2"/>
        <text x={yInt[0] - 55} y={yInt[1] - 10} fontSize="13" fill="#000" fontWeight="600" fontFamily="system-ui">(0, 5)</text>

        <circle cx={mirror[0]} cy={mirror[1]} r="8" fill="#22c55e" stroke="#000" strokeWidth="2"/>
        <text x={mirror[0] + 12} y={mirror[1] - 10} fontSize="13" fill="#000" fontWeight="600" fontFamily="system-ui">(4, 5)</text>

        <rect x="290" y="340" width="180" height="60" rx="10" fill="#fff" stroke="#3b82f6" strokeWidth="2"/>
        <text x="380" y="365" fontSize="15" fill="#3b82f6" fontWeight="700" fontFamily="system-ui" textAnchor="middle">y = 2(x − 2)² − 3</text>
        <text x="380" y="388" fontSize="14" fill="#6b7280" fontWeight="600" fontFamily="system-ui" textAnchor="middle">y = 2x² − 8x + 5</text>
      </svg>
    </div>
  );
};

/**
 * Slope from Table Diagram
 * Shows a data table with x/y values, highlights Δy and Δx between consecutive
 * rows, and derives the slope formula step at the bottom.
 *
 * Table data:  x: 1,3,5,7   y: 2,5,8,11
 * Δx = 2, Δy = 3 → slope = 3/2
 */
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

  const arrowStartX = tableX + tW + 20;
  const arrowEndX = arrowStartX + 60;
  const dxY = tableY + rowH * 0.5;
  const dyY = tableY + rowH * 1.5 + rowH;

  return (
    <div style={wrapStyle}>
      <svg viewBox={`0 0 ${arrowEndX + 90} ${tableY + tH + 120}`} style={{ maxWidth: 600, width: '100%' }}>
        <rect x="0" y="0" width={arrowEndX + 90} height={tableY + tH + 120} fill="#fff" rx="8"/>

        {Array.from({ length: rows + 1 }, (_, i) => (
          <line key={`h${i}`} x1={tableX} y1={tableY + i * rowH} x2={tableX + tW} y2={tableY + i * rowH} stroke="#d1d5db" strokeWidth="1.5"/>
        ))}
        {Array.from({ length: cols + 1 }, (_, i) => (
          <line key={`v${i}`} x1={tableX + i * colW} y1={tableY} x2={tableX + i * colW} y2={tableY + tH} stroke="#d1d5db" strokeWidth="1.5"/>
        ))}

        <rect x={tableX} y={tableY} width={colW} height={rowH} fill="#f1f5f9"/>
        <rect x={tableX} y={tableY + rowH} width={colW} height={rowH} fill="#f1f5f9"/>
        <rect x={tableX} y={tableY + rowH * 2} width={colW} height={rowH} fill="#f1f5f9"/>
        <rect x={tableX} y={tableY} width={tW} height={rowH} fill="#f1f5f9"/>

        <text x={tableX + colW * 0.5} y={tableY + rowH * 0.5 + 6} textAnchor="middle" fontSize="16" fontWeight="700" fill="#334155" fontFamily="system-ui"> </text>
        {xs.map((x, i) => (
          <text key={`xh${i}`} x={tableX + (i + 1) * colW + colW * 0.5} y={tableY + rowH * 0.5 + 6} textAnchor="middle" fontSize="15" fontWeight="600" fill="#334155" fontFamily="system-ui">{x}</text>
        ))}

        <text x={tableX + colW * 0.5} y={tableY + rowH + rowH * 0.5 + 6} textAnchor="middle" fontSize="16" fontWeight="700" fill="#3b82f6" fontFamily="system-ui">x</text>
        {xs.map((x, i) => (
          <text key={`xv${i}`} x={tableX + (i + 1) * colW + colW * 0.5} y={tableY + rowH + rowH * 0.5 + 6} textAnchor="middle" fontSize="15" fill="#000" fontFamily="system-ui">{x}</text>
        ))}

        <text x={tableX + colW * 0.5} y={tableY + rowH * 2 + rowH * 0.5 + 6} textAnchor="middle" fontSize="16" fontWeight="700" fill="#ec4899" fontFamily="system-ui">y</text>
        {ys.map((y, i) => (
          <text key={`yv${i}`} x={tableX + (i + 1) * colW + colW * 0.5} y={tableY + rowH * 2 + rowH * 0.5 + 6} textAnchor="middle" fontSize="15" fill="#000" fontFamily="system-ui">{y}</text>
        ))}

        {xs.slice(0, -1).map((_, i) => {
          const cx1 = tableX + (i + 1) * colW + colW * 0.5;
          const cx2 = tableX + (i + 2) * colW + colW * 0.5;
          const midX = (cx1 + cx2) / 2;
          const arcY = tableY + rowH - 4;
          return (
            <g key={`dxa${i}`}>
              <path d={`M ${cx1} ${arcY} Q ${midX} ${arcY - 24} ${cx2} ${arcY}`} fill="none" stroke="#3b82f6" strokeWidth="2" strokeDasharray="4 2"/>
              <text x={midX} y={arcY - 26} textAnchor="middle" fontSize="12" fontWeight="700" fill="#3b82f6" fontFamily="system-ui">+{dx}</text>
            </g>
          );
        })}

        {ys.slice(0, -1).map((_, i) => {
          const cx1 = tableX + (i + 1) * colW + colW * 0.5;
          const cx2 = tableX + (i + 2) * colW + colW * 0.5;
          const midX = (cx1 + cx2) / 2;
          const arcY = tableY + rowH * 2 + rowH + 4;
          return (
            <g key={`dya${i}`}>
              <path d={`M ${cx1} ${arcY} Q ${midX} ${arcY + 24} ${cx2} ${arcY}`} fill="none" stroke="#ec4899" strokeWidth="2" strokeDasharray="4 2"/>
              <text x={midX} y={arcY + 36} textAnchor="middle" fontSize="12" fontWeight="700" fill="#ec4899" fontFamily="system-ui">+{dy}</text>
            </g>
          );
        })}

        <rect x={tableX + 30} y={tableY + tH + 60} width={tW - 60} height={50} rx="10" fill="#fff" stroke="#e5e7eb" strokeWidth="2"/>
        <text x={tableX + tW * 0.35} y={tableY + tH + 78} fontSize="16" fill="#ec4899" fontWeight="700" fontFamily="system-ui">Δy</text>
        <line x1={tableX + tW * 0.28} y1={tableY + tH + 82} x2={tableX + tW * 0.45} y2={tableY + tH + 82} stroke="#000" strokeWidth="2"/>
        <text x={tableX + tW * 0.35} y={tableY + tH + 98} fontSize="16" fill="#3b82f6" fontWeight="700" fontFamily="system-ui">Δx</text>
        <text x={tableX + tW * 0.52} y={tableY + tH + 90} fontSize="20" fill="#000" fontWeight="700" fontFamily="system-ui">=</text>
        <text x={tableX + tW * 0.62} y={tableY + tH + 78} fontSize="16" fill="#000" fontWeight="700" fontFamily="system-ui">+{dy}</text>
        <line x1={tableX + tW * 0.58} y1={tableY + tH + 82} x2={tableX + tW * 0.72} y2={tableY + tH + 82} stroke="#000" strokeWidth="2"/>
        <text x={tableX + tW * 0.62} y={tableY + tH + 98} fontSize="16" fill="#000" fontWeight="700" fontFamily="system-ui">+{dx}</text>
      </svg>
    </div>
  );
};

const visualRegistry = {
  parallelLinesDiagram: ParallelLinesDiagram,
  perpendicularLinesDiagram: PerpendicularLinesDiagram,
  slopeFromGraphDiagram: SlopeFromGraphDiagram,
  slopeFromTableDiagram: SlopeFromTableDiagram,
  yInterceptDiagram: YInterceptDiagram,
  parabolaFromGraphDiagram: ParabolaFromGraphDiagram,
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
