import React from 'react';

const wrapStyle = {
  background: 'linear-gradient(135deg, #f8f9fa 0%, #f1f3f4 100%)',
  borderRadius: 16,
  padding: '32px',
  margin: '24px 0',
  textAlign: 'center',
};

/* ═══════════════════════════════════════════════════════
   HELPER: coordinate system for a standard x-y plane
   ═══════════════════════════════════════════════════════ */
function makeCoordSystem({ originX, originY, scale }) {
  return (x, y) => [originX + x * scale, originY - y * scale];
}

/* ═══════════════════════════════════════════════════════
   PARALLEL LINES — annotated teaching diagram
   Lines: y = 2x + 1 (orange) and y = 2x − 2 (blue)
   Both have slope 2 — matching slope triangles shown.
   ═══════════════════════════════════════════════════════ */
const ParallelLinesDiagram = () => {
  const px = makeCoordSystem({ originX: 140, originY: 280, scale: 40 });

  const line1Start = px(-2, -3);
  const line1End   = px(4, 9);
  const line2Start = px(-1, -4);
  const line2End   = px(5, 8);

  const tri1Base = px(1, 3);
  const tri1Run  = px(2, 3);
  const tri1Rise = px(2, 5);

  const tri2Base = px(2, 2);
  const tri2Run  = px(3, 2);
  const tri2Rise = px(3, 4);

  return (
    <div style={wrapStyle}>
      <svg viewBox="0 0 480 400" style={{ maxWidth: 520, width: '100%' }}>
        <rect width="480" height="400" fill="#fff"/>

        {/* grid */}
        {Array.from({ length: 13 }, (_, i) => i - 3).map(i => (
          <line key={`v${i}`} x1={140 + i * 40} y1="20" x2={140 + i * 40} y2="360" stroke="#e5e7eb" strokeWidth="0.7"/>
        ))}
        {Array.from({ length: 12 }, (_, i) => i - 5).map(i => (
          <line key={`h${i}`} x1="20" y1={280 - i * 40} x2="460" y2={280 - i * 40} stroke="#e5e7eb" strokeWidth="0.7"/>
        ))}

        {/* axes */}
        <line x1="20" y1="280" x2="460" y2="280" stroke="#1e293b" strokeWidth="2"/>
        <line x1="140" y1="20" x2="140" y2="360" stroke="#1e293b" strokeWidth="2"/>
        <text x="460" y="296" fontSize="14" fill="#1e293b" fontWeight="700">x</text>
        <text x="148" y="28" fontSize="14" fill="#1e293b" fontWeight="700">y</text>

        {/* axis labels */}
        {[-2,-1,1,2,3,4,5,6,7].map(i => (
          <text key={`xl${i}`} x={140 + i * 40} y="298" fontSize="11" fill="#64748b" textAnchor="middle">{i}</text>
        ))}
        {[-4,-3,-2,-1,1,2,3,4,5,6].map(i => (
          <text key={`yl${i}`} x="128" y={280 - i * 40 + 4} fontSize="11" fill="#64748b" textAnchor="end">{i}</text>
        ))}

        {/* line 1: y = 2x + 1 */}
        <line x1={line1Start[0]} y1={line1Start[1]} x2={line1End[0]} y2={line1End[1]}
              stroke="#ea580c" strokeWidth="3.5" strokeLinecap="round" opacity="0.9"/>

        {/* slope triangle on line 1 */}
        <line x1={tri1Base[0]} y1={tri1Base[1]} x2={tri1Run[0]} y2={tri1Run[1]}
              stroke="#22c55e" strokeWidth="3" strokeDasharray="6 3"/>
        <line x1={tri1Run[0]} y1={tri1Run[1]} x2={tri1Rise[0]} y2={tri1Rise[1]}
              stroke="#ec4899" strokeWidth="3" strokeDasharray="6 3"/>
        <text x={(tri1Base[0] + tri1Run[0]) / 2} y={tri1Base[1] + 16} fontSize="13" fill="#22c55e" fontWeight="700" textAnchor="middle">run 1</text>
        <text x={tri1Run[0] + 14} y={(tri1Run[1] + tri1Rise[1]) / 2 + 4} fontSize="13" fill="#ec4899" fontWeight="700">rise 2</text>

        {/* line 2: y = 2x − 2 */}
        <line x1={line2Start[0]} y1={line2Start[1]} x2={line2End[0]} y2={line2End[1]}
              stroke="#3b82f6" strokeWidth="3.5" strokeLinecap="round" opacity="0.9"/>

        {/* slope triangle on line 2 */}
        <line x1={tri2Base[0]} y1={tri2Base[1]} x2={tri2Run[0]} y2={tri2Run[1]}
              stroke="#22c55e" strokeWidth="3" strokeDasharray="6 3"/>
        <line x1={tri2Run[0]} y1={tri2Run[1]} x2={tri2Rise[0]} y2={tri2Rise[1]}
              stroke="#ec4899" strokeWidth="3" strokeDasharray="6 3"/>
        <text x={(tri2Base[0] + tri2Run[0]) / 2} y={tri2Base[1] + 16} fontSize="13" fill="#22c55e" fontWeight="700" textAnchor="middle">run 1</text>
        <text x={tri2Run[0] + 14} y={(tri2Run[1] + tri2Rise[1]) / 2 + 4} fontSize="13" fill="#ec4899" fontWeight="700">rise 2</text>

        {/* equation labels */}
        <rect x="310" y="28" width="145" height="26" rx="6" fill="#fff8f0" stroke="#ea580c" strokeWidth="1.5"/>
        <text x="382" y="47" fontSize="13" fill="#ea580c" fontWeight="700" textAnchor="middle">y = 2x + 1  (m = 2)</text>

        <rect x="310" y="60" width="145" height="26" rx="6" fill="#eff6ff" stroke="#3b82f6" strokeWidth="1.5"/>
        <text x="382" y="79" fontSize="13" fill="#3b82f6" fontWeight="700" textAnchor="middle">y = 2x − 2  (m = 2)</text>

        {/* teaching callout */}
        <rect x="60" y="365" width="360" height="30" rx="8" fill="#f0fdf4" stroke="#22c55e" strokeWidth="1.5"/>
        <text x="240" y="385" fontSize="13" fill="#15803d" fontWeight="600" textAnchor="middle">Same slope → same steepness → lines never cross → PARALLEL</text>
      </svg>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════
   PERPENDICULAR LINES — annotated teaching diagram
   Lines: y = 2x (orange, m=2)  and  y = −½x (blue, m=−½)
   Product: 2 × (−½) = −1   Right-angle marker at intersection.
   ═══════════════════════════════════════════════════════ */
const PerpendicularLinesDiagram = () => {
  const px = makeCoordSystem({ originX: 220, originY: 220, scale: 40 });

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
    <div style={wrapStyle}>
      <svg viewBox="0 0 500 400" style={{ maxWidth: 540, width: '100%' }}>
        <rect width="500" height="400" fill="#fff"/>

        {/* grid */}
        {Array.from({ length: 14 }, (_, i) => i - 5).map(i => (
          <line key={`v${i}`} x1={220 + i * 40} y1="10" x2={220 + i * 40} y2="370" stroke="#e5e7eb" strokeWidth="0.7"/>
        ))}
        {Array.from({ length: 11 }, (_, i) => i - 5).map(i => (
          <line key={`h${i}`} x1="20" y1={220 - i * 40} x2="480" y2={220 - i * 40} stroke="#e5e7eb" strokeWidth="0.7"/>
        ))}

        {/* axes */}
        <line x1="20" y1="220" x2="480" y2="220" stroke="#1e293b" strokeWidth="2"/>
        <line x1="220" y1="10" x2="220" y2="370" stroke="#1e293b" strokeWidth="2"/>
        <text x="478" y="236" fontSize="14" fill="#1e293b" fontWeight="700">x</text>
        <text x="228" y="18" fontSize="14" fill="#1e293b" fontWeight="700">y</text>

        {[-4,-3,-2,-1,1,2,3,4,5,6].map(i => (
          <text key={`xl${i}`} x={220 + i * 40} y="238" fontSize="11" fill="#64748b" textAnchor="middle">{i}</text>
        ))}
        {[-4,-3,-2,-1,1,2,3,4].map(i => (
          <text key={`yl${i}`} x="208" y={220 - i * 40 + 4} fontSize="11" fill="#64748b" textAnchor="end">{i}</text>
        ))}

        {/* line 1: y = 2x */}
        <line x1={l1a[0]} y1={l1a[1]} x2={l1b[0]} y2={l1b[1]}
              stroke="#ea580c" strokeWidth="3.5" strokeLinecap="round"/>
        {/* slope triangle for m = 2 */}
        <line x1={triA[0]} y1={triA[1]} x2={triB[0]} y2={triB[1]} stroke="#22c55e" strokeWidth="3" strokeDasharray="5 3"/>
        <line x1={triB[0]} y1={triB[1]} x2={triC[0]} y2={triC[1]} stroke="#ec4899" strokeWidth="3" strokeDasharray="5 3"/>
        <text x={(triA[0] + triB[0]) / 2} y={triA[1] + 18} fontSize="12" fill="#22c55e" fontWeight="700" textAnchor="middle">1</text>
        <text x={triB[0] + 14} y={(triB[1] + triC[1]) / 2 + 4} fontSize="12" fill="#ec4899" fontWeight="700">2</text>

        {/* line 2: y = −½x */}
        <line x1={l2a[0]} y1={l2a[1]} x2={l2b[0]} y2={l2b[1]}
              stroke="#3b82f6" strokeWidth="3.5" strokeLinecap="round"/>
        {/* slope triangle for m = −½ */}
        <line x1={perpTriA[0]} y1={perpTriA[1]} x2={perpTriB[0]} y2={perpTriB[1]} stroke="#22c55e" strokeWidth="3" strokeDasharray="5 3"/>
        <line x1={perpTriB[0]} y1={perpTriB[1]} x2={perpTriC[0]} y2={perpTriC[1]} stroke="#ec4899" strokeWidth="3" strokeDasharray="5 3"/>
        <text x={(perpTriA[0] + perpTriB[0]) / 2} y={perpTriA[1] + 18} fontSize="12" fill="#22c55e" fontWeight="700" textAnchor="middle">2</text>
        <text x={perpTriB[0] + 14} y={(perpTriB[1] + perpTriC[1]) / 2 + 4} fontSize="12" fill="#ec4899" fontWeight="700">−1</text>

        {/* right-angle marker at origin */}
        <rect x="220" y="206" width="14" height="14" fill="none" stroke="#10b981" strokeWidth="2.5"/>

        {/* labels */}
        <rect x="330" y="20" width="150" height="26" rx="6" fill="#fff8f0" stroke="#ea580c" strokeWidth="1.5"/>
        <text x="405" y="38" fontSize="13" fill="#ea580c" fontWeight="700" textAnchor="middle">y = 2x   (m = 2)</text>

        <rect x="330" y="52" width="150" height="26" rx="6" fill="#eff6ff" stroke="#3b82f6" strokeWidth="1.5"/>
        <text x="405" y="70" fontSize="13" fill="#3b82f6" fontWeight="700" textAnchor="middle">y = −½x  (m = −½)</text>

        {/* negative reciprocal callout */}
        <rect x="40" y="373" width="420" height="24" rx="6" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1.5"/>
        <text x="250" y="390" fontSize="13" fill="#92400e" fontWeight="600" textAnchor="middle">Flip & negate: 2 → −½     Check: 2 × (−½) = −1  ✓  → PERPENDICULAR</text>
      </svg>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════
   SLOPE FROM GRAPH
   ═══════════════════════════════════════════════════════ */
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

/* ═══════════════════════════════════════════════════════
   Y-INTERCEPT DIAGRAM
   ═══════════════════════════════════════════════════════ */
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

/* ═══════════════════════════════════════════════════════
   PARABOLA FROM GRAPH
   ═══════════════════════════════════════════════════════ */
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

/* ═══════════════════════════════════════════════════════
   SLOPE FROM TABLE
   ═══════════════════════════════════════════════════════ */
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

  const arrowEndX = tableX + tW + 80;

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

/* ═══════════════════════════════════════════════════════
   RIGHT TRIANGLE DIAGRAM (Pythagorean)
   ═══════════════════════════════════════════════════════ */
const RightTriangleDiagram = () => (
  <div style={wrapStyle}>
    <svg viewBox="0 0 420 320" style={{ maxWidth: 440, width: '100%' }}>
      <rect width="420" height="320" fill="#fff" rx="8"/>
      {/* triangle */}
      <polygon points="60,260 340,260 340,80" fill="#eff6ff" stroke="#3b82f6" strokeWidth="3" strokeLinejoin="round"/>
      {/* right-angle marker */}
      <rect x="316" y="236" width="24" height="24" fill="none" stroke="#10b981" strokeWidth="2.5"/>
      {/* side labels */}
      <text x="200" y="285" fontSize="20" fill="#3b82f6" fontWeight="700" textAnchor="middle">a</text>
      <text x="355" y="175" fontSize="20" fill="#ec4899" fontWeight="700">b</text>
      <text x="175" y="155" fontSize="20" fill="#ea580c" fontWeight="700" transform="rotate(-32,175,155)">c (hypotenuse)</text>
      {/* formula */}
      <rect x="90" y="294" width="240" height="24" rx="6" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1.5"/>
      <text x="210" y="312" fontSize="15" fill="#92400e" fontWeight="700" textAnchor="middle">a² + b² = c²</text>
    </svg>
  </div>
);

/* ═══════════════════════════════════════════════════════
   SPECIAL TRIANGLES (45-45-90 and 30-60-90)
   ═══════════════════════════════════════════════════════ */
const SpecialTrianglesDiagram = () => (
  <div style={wrapStyle}>
    <svg viewBox="0 0 520 280" style={{ maxWidth: 560, width: '100%' }}>
      <rect width="520" height="280" fill="#fff" rx="8"/>

      {/* 45-45-90 */}
      <polygon points="30,240 170,240 170,100" fill="#eff6ff" stroke="#3b82f6" strokeWidth="2.5" strokeLinejoin="round"/>
      <rect x="148" y="218" width="22" height="22" fill="none" stroke="#10b981" strokeWidth="2"/>
      <text x="100" y="260" fontSize="14" fill="#3b82f6" fontWeight="700" textAnchor="middle">x</text>
      <text x="183" y="175" fontSize="14" fill="#3b82f6" fontWeight="700">x</text>
      <text x="80" y="160" fontSize="14" fill="#ea580c" fontWeight="700" transform="rotate(-45,80,160)">x√2</text>
      <text x="55" y="96" fontSize="13" fill="#64748b" fontWeight="600">45°</text>
      <text x="140" y="96" fontSize="13" fill="#64748b" fontWeight="600">45°</text>
      <text x="155" y="238" fontSize="13" fill="#64748b" fontWeight="600">90°</text>

      {/* 30-60-90 */}
      <polygon points="280,240 480,240 480,100" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2.5" strokeLinejoin="round"/>
      <rect x="458" y="218" width="22" height="22" fill="none" stroke="#10b981" strokeWidth="2"/>
      <text x="380" y="260" fontSize="14" fill="#f59e0b" fontWeight="700" textAnchor="middle">x√3</text>
      <text x="494" y="175" fontSize="14" fill="#f59e0b" fontWeight="700">x</text>
      <text x="360" y="160" fontSize="14" fill="#ea580c" fontWeight="700" transform="rotate(-35,360,160)">2x</text>
      <text x="304" y="236" fontSize="13" fill="#64748b" fontWeight="600">30°</text>
      <text x="450" y="96" fontSize="13" fill="#64748b" fontWeight="600">60°</text>
      <text x="465" y="238" fontSize="13" fill="#64748b" fontWeight="600">90°</text>
    </svg>
  </div>
);

/* ═══════════════════════════════════════════════════════
   SIMILAR TRIANGLES
   ═══════════════════════════════════════════════════════ */
const SimilarTrianglesDiagram = () => (
  <div style={wrapStyle}>
    <svg viewBox="0 0 480 260" style={{ maxWidth: 500, width: '100%' }}>
      <rect width="480" height="260" fill="#fff" rx="8"/>

      {/* small triangle */}
      <polygon points="40,200 160,200 100,100" fill="#eff6ff" stroke="#3b82f6" strokeWidth="2.5" strokeLinejoin="round"/>
      <text x="100" y="220" fontSize="14" fill="#3b82f6" fontWeight="700" textAnchor="middle">6</text>
      <text x="55" y="148" fontSize="14" fill="#3b82f6" fontWeight="700">4</text>
      <text x="140" y="148" fontSize="14" fill="#3b82f6" fontWeight="700">5</text>
      <text x="100" y="92" fontSize="12" fill="#64748b" fontWeight="600" textAnchor="middle">A</text>
      <text x="32" y="210" fontSize="12" fill="#64748b" fontWeight="600">B</text>
      <text x="168" y="210" fontSize="12" fill="#64748b" fontWeight="600">C</text>

      {/* big triangle (scale 1.5) */}
      <polygon points="250,220 430,220 340,80" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2.5" strokeLinejoin="round"/>
      <text x="340" y="242" fontSize="14" fill="#f59e0b" fontWeight="700" textAnchor="middle">9</text>
      <text x="278" y="148" fontSize="14" fill="#f59e0b" fontWeight="700">6</text>
      <text x="400" y="148" fontSize="14" fill="#f59e0b" fontWeight="700">7.5</text>
      <text x="340" y="72" fontSize="12" fill="#64748b" fontWeight="600" textAnchor="middle">D</text>
      <text x="240" y="228" fontSize="12" fill="#64748b" fontWeight="600">E</text>
      <text x="438" y="228" fontSize="12" fill="#64748b" fontWeight="600">F</text>

      {/* ratio callout */}
      <text x="200" y="135" fontSize="14" fill="#ea580c" fontWeight="700" textAnchor="middle">×1.5</text>
      <line x1="175" y1="140" x2="225" y2="140" stroke="#ea580c" strokeWidth="2" strokeDasharray="4 2"/>
    </svg>
  </div>
);

/* ═══════════════════════════════════════════════════════
   TRIANGLE AREA
   ═══════════════════════════════════════════════════════ */
const TriangleAreaDiagram = () => (
  <div style={wrapStyle}>
    <svg viewBox="0 0 400 260" style={{ maxWidth: 420, width: '100%' }}>
      <rect width="400" height="260" fill="#fff" rx="8"/>
      <polygon points="50,210 330,210 200,60" fill="#eff6ff" stroke="#3b82f6" strokeWidth="2.5" strokeLinejoin="round"/>
      {/* height line (dashed) */}
      <line x1="200" y1="60" x2="200" y2="210" stroke="#ec4899" strokeWidth="2.5" strokeDasharray="6 3"/>
      <rect x="188" y="198" width="12" height="12" fill="none" stroke="#10b981" strokeWidth="2"/>
      {/* labels */}
      <text x="190" y="224" fontSize="16" fill="#3b82f6" fontWeight="700" textAnchor="middle">base (b)</text>
      <text x="212" y="140" fontSize="15" fill="#ec4899" fontWeight="700">height (h)</text>
      {/* formula */}
      <rect x="100" y="234" width="200" height="24" rx="6" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1.5"/>
      <text x="200" y="252" fontSize="15" fill="#92400e" fontWeight="700" textAnchor="middle">Area = ½ × b × h</text>
    </svg>
  </div>
);

/* ═══════════════════════════════════════════════════════
   CIRCLE PARTS (radius, diameter, circumference)
   ═══════════════════════════════════════════════════════ */
const CirclePartsDiagram = () => (
  <div style={wrapStyle}>
    <svg viewBox="0 0 400 320" style={{ maxWidth: 420, width: '100%' }}>
      <rect width="400" height="320" fill="#fff" rx="8"/>
      <circle cx="200" cy="150" r="100" fill="#eff6ff" stroke="#3b82f6" strokeWidth="3"/>
      {/* center dot */}
      <circle cx="200" cy="150" r="5" fill="#1e293b"/>
      {/* radius */}
      <line x1="200" y1="150" x2="300" y2="150" stroke="#ea580c" strokeWidth="3"/>
      <text x="250" y="140" fontSize="14" fill="#ea580c" fontWeight="700" textAnchor="middle">r</text>
      {/* diameter */}
      <line x1="100" y1="150" x2="300" y2="150" stroke="#3b82f6" strokeWidth="2" strokeDasharray="6 3"/>
      <text x="150" y="170" fontSize="14" fill="#3b82f6" fontWeight="700" textAnchor="middle">d = 2r</text>
      {/* circumference arc label */}
      <text x="200" y="40" fontSize="13" fill="#10b981" fontWeight="700" textAnchor="middle">Circumference = 2πr</text>
      {/* area callout */}
      <rect x="100" y="280" width="200" height="28" rx="6" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1.5"/>
      <text x="200" y="300" fontSize="14" fill="#92400e" fontWeight="700" textAnchor="middle">Area = πr²</text>
    </svg>
  </div>
);

/* ═══════════════════════════════════════════════════════
   ARC LENGTH / SECTOR AREA
   ═══════════════════════════════════════════════════════ */
const ArcLengthDiagram = () => {
  const cx = 200, cy = 160, r = 100;
  const angle = 90;
  const rad = (angle * Math.PI) / 180;
  const endX = cx + r * Math.cos(-rad + Math.PI / 2);
  const endY = cy - r * Math.sin(-rad + Math.PI / 2);

  return (
    <div style={wrapStyle}>
      <svg viewBox="0 0 400 330" style={{ maxWidth: 420, width: '100%' }}>
        <rect width="400" height="330" fill="#fff" rx="8"/>
        <circle cx={cx} cy={cy} r={r} fill="none" stroke="#d1d5db" strokeWidth="2"/>
        {/* sector fill */}
        <path d={`M ${cx} ${cy} L ${cx} ${cy - r} A ${r} ${r} 0 0 1 ${cx + r} ${cy} Z`}
              fill="#fef3c7" stroke="#f59e0b" strokeWidth="2.5"/>
        {/* arc highlight */}
        <path d={`M ${cx} ${cy - r} A ${r} ${r} 0 0 1 ${cx + r} ${cy}`}
              fill="none" stroke="#ea580c" strokeWidth="4"/>
        {/* center + radii */}
        <circle cx={cx} cy={cy} r="4" fill="#1e293b"/>
        <line x1={cx} y1={cy} x2={cx} y2={cy - r} stroke="#3b82f6" strokeWidth="2"/>
        <line x1={cx} y1={cy} x2={cx + r} y2={cy} stroke="#3b82f6" strokeWidth="2"/>
        <text x={cx - 14} y={cy - 50} fontSize="14" fill="#3b82f6" fontWeight="700">r</text>
        {/* angle label */}
        <text x={cx + 18} y={cy - 18} fontSize="14" fill="#64748b" fontWeight="700">θ</text>
        {/* arc label */}
        <text x={cx + 75} y={cy - 80} fontSize="13" fill="#ea580c" fontWeight="700">arc</text>
        {/* formulas */}
        <rect x="40" y="286" width="160" height="28" rx="6" fill="#fff" stroke="#ea580c" strokeWidth="1.5"/>
        <text x="120" y="306" fontSize="13" fill="#ea580c" fontWeight="700" textAnchor="middle">Arc = (θ/360)·2πr</text>
        <rect x="220" y="286" width="160" height="28" rx="6" fill="#fff" stroke="#f59e0b" strokeWidth="1.5"/>
        <text x="300" y="306" fontSize="13" fill="#92400e" fontWeight="700" textAnchor="middle">Sector = (θ/360)·πr²</text>
      </svg>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════
   CIRCLE EQUATION  (x−h)² + (y−k)² = r²
   ═══════════════════════════════════════════════════════ */
const CircleEquationDiagram = () => {
  const px = makeCoordSystem({ originX: 200, originY: 200, scale: 30 });
  const h = 2, k = 3, r = 3;
  const center = px(h, k);

  return (
    <div style={wrapStyle}>
      <svg viewBox="0 0 440 360" style={{ maxWidth: 460, width: '100%' }}>
        <rect width="440" height="360" fill="#fff" rx="8"/>

        {Array.from({ length: 15 }, (_, i) => i - 3).map(i => (
          <line key={`v${i}`} x1={200 + i * 30} y1="10" x2={200 + i * 30} y2="340" stroke="#e5e7eb" strokeWidth="0.7"/>
        ))}
        {Array.from({ length: 13 }, (_, i) => i - 3).map(i => (
          <line key={`h${i}`} x1="20" y1={200 - i * 30} x2="420" y2={200 - i * 30} stroke="#e5e7eb" strokeWidth="0.7"/>
        ))}

        <line x1="20" y1="200" x2="420" y2="200" stroke="#1e293b" strokeWidth="2"/>
        <line x1="200" y1="10" x2="200" y2="340" stroke="#1e293b" strokeWidth="2"/>

        <circle cx={center[0]} cy={center[1]} r={r * 30} fill="#eff6ff" fillOpacity="0.5" stroke="#3b82f6" strokeWidth="3"/>
        <circle cx={center[0]} cy={center[1]} r="5" fill="#ea580c"/>
        <line x1={center[0]} y1={center[1]} x2={center[0] + r * 30} y2={center[1]} stroke="#ea580c" strokeWidth="2.5"/>
        <text x={center[0] + 45} y={center[1] - 8} fontSize="14" fill="#ea580c" fontWeight="700">r = 3</text>
        <text x={center[0] + 8} y={center[1] + 18} fontSize="13" fill="#1e293b" fontWeight="600">(2, 3)</text>

        <rect x="100" y="324" width="240" height="28" rx="6" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1.5"/>
        <text x="220" y="344" fontSize="14" fill="#92400e" fontWeight="700" textAnchor="middle">(x − 2)² + (y − 3)² = 9</text>
      </svg>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════
   CUBE DIAGRAM
   ═══════════════════════════════════════════════════════ */
const CubeDiagram = () => (
  <div style={wrapStyle}>
    <svg viewBox="0 0 300 260" style={{ maxWidth: 320, width: '100%' }}>
      <rect width="300" height="260" fill="#fff" rx="8"/>
      {/* back face */}
      <polygon points="100,40 240,40 240,180 100,180" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2"/>
      {/* top face */}
      <polygon points="60,20 100,40 240,40 200,20" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="2"/>
      {/* left face */}
      <polygon points="60,20 60,160 100,180 100,40" fill="#93c5fd" stroke="#3b82f6" strokeWidth="2"/>
      {/* front edges */}
      <line x1="60" y1="160" x2="200" y2="160" stroke="#3b82f6" strokeWidth="2"/>
      <line x1="200" y1="20" x2="200" y2="160" stroke="#3b82f6" strokeWidth="2"/>
      {/* edge label */}
      <text x="30" y="95" fontSize="18" fill="#ea580c" fontWeight="700">s</text>
      <text x="130" y="200" fontSize="18" fill="#ea580c" fontWeight="700" textAnchor="middle">s</text>
      <text x="250" y="115" fontSize="18" fill="#ea580c" fontWeight="700">s</text>
      {/* formula */}
      <rect x="70" y="220" width="160" height="28" rx="6" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1.5"/>
      <text x="150" y="240" fontSize="15" fill="#92400e" fontWeight="700" textAnchor="middle">V = s³</text>
    </svg>
  </div>
);

/* ═══════════════════════════════════════════════════════
   RECTANGULAR PRISM DIAGRAM
   ═══════════════════════════════════════════════════════ */
const RectangularPrismDiagram = () => (
  <div style={wrapStyle}>
    <svg viewBox="0 0 340 260" style={{ maxWidth: 360, width: '100%' }}>
      <rect width="340" height="260" fill="#fff" rx="8"/>
      <polygon points="80,60 260,60 260,180 80,180" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2"/>
      <polygon points="40,40 80,60 260,60 220,40" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="2"/>
      <polygon points="40,40 40,160 80,180 80,60" fill="#93c5fd" stroke="#3b82f6" strokeWidth="2"/>
      <line x1="40" y1="160" x2="220" y2="160" stroke="#3b82f6" strokeWidth="2"/>
      <line x1="220" y1="40" x2="220" y2="160" stroke="#3b82f6" strokeWidth="2"/>
      <text x="170" y="200" fontSize="16" fill="#ea580c" fontWeight="700" textAnchor="middle">l</text>
      <text x="22" y="105" fontSize="16" fill="#ec4899" fontWeight="700">h</text>
      <text x="280" y="125" fontSize="16" fill="#22c55e" fontWeight="700">w</text>
      <rect x="80" y="220" width="180" height="28" rx="6" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1.5"/>
      <text x="170" y="240" fontSize="15" fill="#92400e" fontWeight="700" textAnchor="middle">V = l × w × h</text>
    </svg>
  </div>
);

/* ═══════════════════════════════════════════════════════
   CYLINDER DIAGRAM
   ═══════════════════════════════════════════════════════ */
const CylinderDiagram = () => (
  <div style={wrapStyle}>
    <svg viewBox="0 0 300 300" style={{ maxWidth: 320, width: '100%' }}>
      <rect width="300" height="300" fill="#fff" rx="8"/>
      {/* body */}
      <rect x="80" y="70" width="140" height="150" fill="#dbeafe" stroke="none"/>
      <line x1="80" y1="70" x2="80" y2="220" stroke="#3b82f6" strokeWidth="2.5"/>
      <line x1="220" y1="70" x2="220" y2="220" stroke="#3b82f6" strokeWidth="2.5"/>
      {/* top ellipse */}
      <ellipse cx="150" cy="70" rx="70" ry="20" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="2.5"/>
      {/* bottom ellipse */}
      <ellipse cx="150" cy="220" rx="70" ry="20" fill="#93c5fd" stroke="#3b82f6" strokeWidth="2.5"/>
      {/* radius */}
      <line x1="150" y1="70" x2="220" y2="70" stroke="#ea580c" strokeWidth="2.5"/>
      <circle cx="150" cy="70" r="3" fill="#ea580c"/>
      <text x="185" y="62" fontSize="14" fill="#ea580c" fontWeight="700" textAnchor="middle">r</text>
      {/* height */}
      <line x1="240" y1="70" x2="240" y2="220" stroke="#ec4899" strokeWidth="2" strokeDasharray="6 3"/>
      <text x="256" y="150" fontSize="14" fill="#ec4899" fontWeight="700">h</text>
      {/* formula */}
      <rect x="65" y="258" width="170" height="28" rx="6" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1.5"/>
      <text x="150" y="278" fontSize="15" fill="#92400e" fontWeight="700" textAnchor="middle">V = πr²h</text>
    </svg>
  </div>
);

/* ═══════════════════════════════════════════════════════
   SPHERE DIAGRAM
   ═══════════════════════════════════════════════════════ */
const SphereDiagram = () => (
  <div style={wrapStyle}>
    <svg viewBox="0 0 300 290" style={{ maxWidth: 320, width: '100%' }}>
      <rect width="300" height="290" fill="#fff" rx="8"/>
      <circle cx="150" cy="130" r="95" fill="#dbeafe" stroke="#3b82f6" strokeWidth="3"/>
      <ellipse cx="150" cy="130" rx="95" ry="25" fill="none" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="5 3"/>
      <line x1="150" y1="130" x2="245" y2="130" stroke="#ea580c" strokeWidth="2.5"/>
      <circle cx="150" cy="130" r="4" fill="#ea580c"/>
      <text x="198" y="122" fontSize="16" fill="#ea580c" fontWeight="700" textAnchor="middle">r</text>
      <rect x="55" y="250" width="190" height="28" rx="6" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1.5"/>
      <text x="150" y="270" fontSize="14" fill="#92400e" fontWeight="700" textAnchor="middle">V = (4/3)πr³</text>
    </svg>
  </div>
);

/* ═══════════════════════════════════════════════════════
   CONE DIAGRAM
   ═══════════════════════════════════════════════════════ */
const ConeDiagram = () => (
  <div style={wrapStyle}>
    <svg viewBox="0 0 300 300" style={{ maxWidth: 320, width: '100%' }}>
      <rect width="300" height="300" fill="#fff" rx="8"/>
      {/* body */}
      <polygon points="150,40 80,220 220,220" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2.5" strokeLinejoin="round"/>
      <ellipse cx="150" cy="220" rx="70" ry="18" fill="#93c5fd" stroke="#3b82f6" strokeWidth="2.5"/>
      {/* height */}
      <line x1="150" y1="40" x2="150" y2="220" stroke="#ec4899" strokeWidth="2" strokeDasharray="6 3"/>
      <text x="160" y="135" fontSize="14" fill="#ec4899" fontWeight="700">h</text>
      {/* radius */}
      <line x1="150" y1="220" x2="220" y2="220" stroke="#ea580c" strokeWidth="2.5"/>
      <text x="185" y="240" fontSize="14" fill="#ea580c" fontWeight="700" textAnchor="middle">r</text>
      <rect x="55" y="258" width="190" height="28" rx="6" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1.5"/>
      <text x="150" y="278" fontSize="14" fill="#92400e" fontWeight="700" textAnchor="middle">V = (1/3)πr²h</text>
    </svg>
  </div>
);

/* ═══════════════════════════════════════════════════════
   MEAN / MEDIAN / OUTLIER
   ═══════════════════════════════════════════════════════ */
const MeanMedianDiagram = () => {
  const data = [2, 3, 4, 5, 7, 8, 9, 10, 25];
  const mean = data.reduce((a, b) => a + b, 0) / data.length;
  const median = data[4];
  const barW = 28, barGap = 6, baseX = 40, baseY = 180;

  return (
    <div style={wrapStyle}>
      <svg viewBox="0 0 460 260" style={{ maxWidth: 480, width: '100%' }}>
        <rect width="460" height="260" fill="#fff" rx="8"/>
        {/* bars */}
        {data.map((v, i) => {
          const x = baseX + i * (barW + barGap);
          const h = v * 6;
          return (
            <g key={i}>
              <rect x={x} y={baseY - h} width={barW} height={h} fill={v === 25 ? '#fca5a5' : '#93c5fd'} rx="3"/>
              <text x={x + barW / 2} y={baseY + 14} fontSize="11" fill="#1e293b" fontWeight="600" textAnchor="middle">{v}</text>
            </g>
          );
        })}
        {/* baseline */}
        <line x1="30" y1={baseY} x2="420" y2={baseY} stroke="#94a3b8" strokeWidth="1.5"/>
        {/* mean marker */}
        {(() => {
          const mx = baseX + (mean / 25) * (data.length * (barW + barGap));
          return (
            <g>
              <line x1={mx} y1={baseY + 22} x2={mx} y2={baseY + 40} stroke="#ea580c" strokeWidth="2.5"/>
              <polygon points={`${mx},${baseY + 20} ${mx - 6},${baseY + 28} ${mx + 6},${baseY + 28}`} fill="#ea580c"/>
              <text x={mx} y={baseY + 54} fontSize="12" fill="#ea580c" fontWeight="700" textAnchor="middle">Mean ≈ {mean.toFixed(1)}</text>
            </g>
          );
        })()}
        {/* median marker */}
        {(() => {
          const mdx = baseX + 4 * (barW + barGap) + barW / 2;
          return (
            <g>
              <line x1={mdx} y1={baseY - median * 6 - 8} x2={mdx} y2={baseY - median * 6 - 24} stroke="#3b82f6" strokeWidth="2.5"/>
              <polygon points={`${mdx},${baseY - median * 6 - 6} ${mdx - 6},${baseY - median * 6 - 14} ${mdx + 6},${baseY - median * 6 - 14}`} fill="#3b82f6"/>
              <text x={mdx + 4} y={baseY - median * 6 - 30} fontSize="12" fill="#3b82f6" fontWeight="700" textAnchor="middle">Median = {median}</text>
            </g>
          );
        })()}
        {/* outlier label */}
        <text x={baseX + 8 * (barW + barGap) + barW / 2} y={baseY - 25 * 6 - 8} fontSize="11" fill="#dc2626" fontWeight="700" textAnchor="middle">Outlier</text>
        {/* callout */}
        <rect x="260" y="220" width="190" height="30" rx="6" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1.5"/>
        <text x="355" y="241" fontSize="12" fill="#92400e" fontWeight="600" textAnchor="middle">Outlier pulls mean, not median</text>
      </svg>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════
   HORIZONTAL SHIFT
   ═══════════════════════════════════════════════════════ */
const HorizontalShiftDiagram = () => {
  const px = makeCoordSystem({ originX: 200, originY: 180, scale: 30 });

  const origPts = [];
  const shiftPts = [];
  for (let x = -3; x <= 3; x += 0.2) {
    origPts.push(px(x, x * x * 0.5).join(','));
    shiftPts.push(px(x + 2, x * x * 0.5).join(','));
  }

  return (
    <div style={wrapStyle}>
      <svg viewBox="0 0 440 280" style={{ maxWidth: 460, width: '100%' }}>
        <rect width="440" height="280" fill="#fff" rx="8"/>
        <line x1="20" y1="180" x2="420" y2="180" stroke="#1e293b" strokeWidth="2"/>
        <line x1="200" y1="10" x2="200" y2="270" stroke="#1e293b" strokeWidth="2"/>
        <polyline points={origPts.join(' ')} fill="none" stroke="#94a3b8" strokeWidth="3" strokeDasharray="6 3"/>
        <polyline points={shiftPts.join(' ')} fill="none" stroke="#3b82f6" strokeWidth="3"/>
        <text x="200" y="14" fontSize="13" fill="#94a3b8" fontWeight="700" textAnchor="middle">f(x)</text>
        <text x="260" y="14" fontSize="13" fill="#3b82f6" fontWeight="700" textAnchor="middle">f(x − 2)</text>
        {/* arrow */}
        <line x1="200" y1="190" x2="260" y2="190" stroke="#ea580c" strokeWidth="2.5" markerEnd="url(#h-arr)"/>
        <defs><marker id="h-arr" markerWidth="8" markerHeight="8" refX="4" refY="3" orient="auto"><polygon points="0 0,8 3,0 6" fill="#ea580c"/></marker></defs>
        <text x="230" y="208" fontSize="12" fill="#ea580c" fontWeight="700" textAnchor="middle">+2 right</text>
        <rect x="100" y="248" width="240" height="26" rx="6" fill="#f0fdf4" stroke="#22c55e" strokeWidth="1.5"/>
        <text x="220" y="266" fontSize="12" fill="#15803d" fontWeight="600" textAnchor="middle">f(x − h) shifts RIGHT h units (opposite sign)</text>
      </svg>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════
   VERTICAL SHIFT
   ═══════════════════════════════════════════════════════ */
const VerticalShiftDiagram = () => {
  const px = makeCoordSystem({ originX: 200, originY: 180, scale: 30 });

  const origPts = [];
  const shiftPts = [];
  for (let x = -3; x <= 3; x += 0.2) {
    const y = x * x * 0.5;
    origPts.push(px(x, y).join(','));
    shiftPts.push(px(x, y + 2).join(','));
  }

  return (
    <div style={wrapStyle}>
      <svg viewBox="0 0 440 280" style={{ maxWidth: 460, width: '100%' }}>
        <rect width="440" height="280" fill="#fff" rx="8"/>
        <line x1="20" y1="180" x2="420" y2="180" stroke="#1e293b" strokeWidth="2"/>
        <line x1="200" y1="10" x2="200" y2="270" stroke="#1e293b" strokeWidth="2"/>
        <polyline points={origPts.join(' ')} fill="none" stroke="#94a3b8" strokeWidth="3" strokeDasharray="6 3"/>
        <polyline points={shiftPts.join(' ')} fill="none" stroke="#ec4899" strokeWidth="3"/>
        <text x="130" y="178" fontSize="13" fill="#94a3b8" fontWeight="700">f(x)</text>
        <text x="130" y="118" fontSize="13" fill="#ec4899" fontWeight="700">f(x) + 2</text>
        {/* arrow */}
        <line x1="190" y1="180" x2="190" y2="120" stroke="#ea580c" strokeWidth="2.5" markerEnd="url(#v-arr)"/>
        <defs><marker id="v-arr" markerWidth="8" markerHeight="8" refX="4" refY="3" orient="auto"><polygon points="0 0,8 3,0 6" fill="#ea580c"/></marker></defs>
        <text x="175" y="155" fontSize="12" fill="#ea580c" fontWeight="700" textAnchor="end">+2 up</text>
        <rect x="100" y="248" width="240" height="26" rx="6" fill="#f0fdf4" stroke="#22c55e" strokeWidth="1.5"/>
        <text x="220" y="266" fontSize="12" fill="#15803d" fontWeight="600" textAnchor="middle">f(x) + k shifts UP k units</text>
      </svg>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════
   EXPONENTIAL GROWTH / DECAY
   ═══════════════════════════════════════════════════════ */
const ExponentialGrowthDiagram = () => {
  const px = makeCoordSystem({ originX: 80, originY: 220, scale: 30 });

  const growthPts = [];
  const decayPts = [];
  for (let x = 0; x <= 7; x += 0.2) {
    growthPts.push(px(x, Math.pow(1.4, x)).join(','));
    decayPts.push(px(x, 6 * Math.pow(0.7, x)).join(','));
  }

  return (
    <div style={wrapStyle}>
      <svg viewBox="0 0 420 290" style={{ maxWidth: 440, width: '100%' }}>
        <rect width="420" height="290" fill="#fff" rx="8"/>
        <line x1="60" y1="220" x2="400" y2="220" stroke="#1e293b" strokeWidth="2"/>
        <line x1="80" y1="10" x2="80" y2="260" stroke="#1e293b" strokeWidth="2"/>
        <text x="400" y="236" fontSize="13" fill="#1e293b" fontWeight="700">x</text>
        <text x="86" y="14" fontSize="13" fill="#1e293b" fontWeight="700">y</text>
        <polyline points={growthPts.join(' ')} fill="none" stroke="#22c55e" strokeWidth="3"/>
        <polyline points={decayPts.join(' ')} fill="none" stroke="#ef4444" strokeWidth="3"/>
        <text x="260" y="50" fontSize="13" fill="#22c55e" fontWeight="700">Growth (b &gt; 1)</text>
        <text x="260" y="200" fontSize="13" fill="#ef4444" fontWeight="700">Decay (0 &lt; b &lt; 1)</text>
        <rect x="100" y="256" width="220" height="26" rx="6" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1.5"/>
        <text x="210" y="274" fontSize="12" fill="#92400e" fontWeight="700" textAnchor="middle">f(x) = a · bˣ</text>
      </svg>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════
   PERCENT CHANGE
   ═══════════════════════════════════════════════════════ */
const PercentChangeDiagram = () => (
  <div style={wrapStyle}>
    <svg viewBox="0 0 400 200" style={{ maxWidth: 420, width: '100%' }}>
      <rect width="400" height="200" fill="#fff" rx="8"/>
      {/* old bar */}
      <rect x="50" y="40" width="120" height="50" rx="8" fill="#93c5fd" stroke="#3b82f6" strokeWidth="2"/>
      <text x="110" y="70" fontSize="16" fill="#1e3a5f" fontWeight="700" textAnchor="middle">Old: 80</text>
      {/* new bar */}
      <rect x="230" y="40" width="120" height="50" rx="8" fill="#86efac" stroke="#22c55e" strokeWidth="2"/>
      <text x="290" y="70" fontSize="16" fill="#14532d" fontWeight="700" textAnchor="middle">New: 100</text>
      {/* arrow */}
      <line x1="175" y1="65" x2="225" y2="65" stroke="#ea580c" strokeWidth="2.5" markerEnd="url(#pc-arr)"/>
      <defs><marker id="pc-arr" markerWidth="8" markerHeight="8" refX="4" refY="3" orient="auto"><polygon points="0 0,8 3,0 6" fill="#ea580c"/></marker></defs>
      <text x="200" y="58" fontSize="12" fill="#ea580c" fontWeight="700" textAnchor="middle">change</text>
      {/* formula */}
      <rect x="50" y="120" width="300" height="60" rx="10" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2"/>
      <text x="200" y="146" fontSize="15" fill="#92400e" fontWeight="700" textAnchor="middle">(100 − 80) / 80 × 100%</text>
      <text x="200" y="168" fontSize="16" fill="#15803d" fontWeight="800" textAnchor="middle">= 25% increase</text>
    </svg>
  </div>
);

/* ═══════════════════════════════════════════════════════
   REGISTRY — maps visualType strings to components
   ═══════════════════════════════════════════════════════ */
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
