import React from 'react';
import {
  SATLinearGraph,
  SATTwoLineGraph,
  SATScatterplot,
  SATParabola,
  SATLineGraph,
  SATBarChart,
  SATDotPlot,
  SATTable,
  SATParallelLines,
  SATIntersectingLines,
  SATPiecewiseLinear,
  SATCubicGraph,
  CircleWithSector,
  CircleWithSquare,
  CircleInscribed,
  RightTriangle,
  TriangleWithAngles,
  RightTriangleWithAltitude,
  SimilarTriangles,
} from './graphs';

/**
 * Professional SAT-style SVG diagram components for practice questions
 * These render mathematical graphs that match the College Board SAT format
 */

// SAT-Style Diagram Constants - matches College Board format
const SAT_DIAGRAM = {
  axis: { stroke: '#000000', strokeWidth: 0.08 },
  gridline: { stroke: '#e5e5e5', strokeWidth: 0.03 },
  curve: { stroke: '#000000', strokeWidth: 0.12 },
  point: { fill: '#000000', r: 0.18 },
  text: { fill: '#000000', fontFamily: "'Arial', sans-serif" },
  axisLabel: { fill: '#000000', fontFamily: "'Times New Roman', serif", fontStyle: 'italic' },
  tableBorder: '#000000',
  barFill: '#9ca3af',
};

// Helper function to generate path for rational function f(x) = a/(x+b)
const generateRationalCurvePath = (a, b, xMin, xMax, yMin, yMax) => {
  const asymptote = -b;
  const points = [];
  const step = 0.08;

  // Left side of asymptote
  for (let x = xMin; x < asymptote - 0.2; x += step) {
    const y = a / (x + b);
    if (y >= yMin && y <= yMax) {
      points.push({ x, y, side: 'left' });
    }
  }

  // Right side of asymptote
  for (let x = asymptote + 0.2; x <= xMax; x += step) {
    const y = a / (x + b);
    if (y >= yMin && y <= yMax) {
      points.push({ x, y, side: 'right' });
    }
  }

  // Build path strings for each side
  const leftPoints = points.filter(p => p.side === 'left');
  const rightPoints = points.filter(p => p.side === 'right');

  let pathD = '';

  if (leftPoints.length > 0) {
    pathD += `M ${leftPoints[0].x} ${-leftPoints[0].y}`;
    for (let i = 1; i < leftPoints.length; i++) {
      pathD += ` L ${leftPoints[i].x} ${-leftPoints[i].y}`;
    }
  }

  if (rightPoints.length > 0) {
    pathD += ` M ${rightPoints[0].x} ${-rightPoints[0].y}`;
    for (let i = 1; i < rightPoints.length; i++) {
      pathD += ` L ${rightPoints[i].x} ${-rightPoints[i].y}`;
    }
  }

  return pathD;
};

// SAT-Style Rational Function Diagram: f(x) = a/(x+b)
export const RationalFunctionDiagram = ({ a, b, showPoints = [] }) => {
  const xMin = -7, xMax = 7, yMin = -4, yMax = 8;
  const asymptote = -b;
  const curvePath = generateRationalCurvePath(a, b, xMin, xMax, yMin, yMax);

  return (
    <svg
      width="340"
      height="300"
      viewBox="-8 -9.5 16 14"
      style={{
        background: '#ffffff',
        border: '1px solid #d1d5db'
      }}
    >
      {/* Background */}
      <rect x="-8" y="-9.5" width="16" height="14" fill="#ffffff" />

      {/* Grid lines - very light */}
      {[-6, -4, -2, 2, 4, 6].map(x => (
        <line
          key={`v${x}`}
          x1={x} y1={-yMax - 0.5} x2={x} y2={-yMin + 0.5}
          stroke="#f0f0f0"
          strokeWidth="0.03"
        />
      ))}
      {[-2, 2, 4, 6].map(y => (
        <line
          key={`h${y}`}
          x1={xMin - 0.5} y1={-y} x2={xMax + 0.5} y2={-y}
          stroke="#f0f0f0"
          strokeWidth="0.03"
        />
      ))}

      {/* Main X-axis - thin clean line */}
      <line
        x1={xMin - 0.8} y1="0" x2={xMax + 0.8} y2="0"
        stroke="#212529"
        strokeWidth="0.08"
      />
      {/* X-axis arrow - smaller */}
      <polygon points={`${xMax + 0.8},0 ${xMax + 0.55},0.12 ${xMax + 0.55},-0.12`} fill="#212529" />

      {/* Main Y-axis - thin clean line */}
      <line
        x1="0" y1={-yMin + 0.8} x2="0" y2={-yMax - 0.8}
        stroke="#212529"
        strokeWidth="0.08"
      />
      {/* Y-axis arrow - smaller */}
      <polygon points={`0,${-yMax - 0.8} 0.12,${-yMax - 0.55} -0.12,${-yMax - 0.55}`} fill="#212529" />

      {/* Tick marks with numbers - X axis */}
      {[-6, -4, -2, 2, 4, 6].map(x => (
        <g key={`tx${x}`}>
          <line x1={x} y1="-0.15" x2={x} y2="0.15" stroke="#212529" strokeWidth="0.06" />
          <text
            x={x}
            y="0.8"
            fontSize="0.5"
            textAnchor="middle"
            fill="#495057"
            fontFamily="Arial, sans-serif"
          >
            {x}
          </text>
        </g>
      ))}

      {/* Tick marks with numbers - Y axis */}
      {[-2, 2, 4, 6].map(y => (
        <g key={`ty${y}`}>
          <line x1="-0.15" y1={-y} x2="0.15" y2={-y} stroke="#212529" strokeWidth="0.06" />
          <text
            x="-0.5"
            y={-y + 0.18}
            fontSize="0.5"
            textAnchor="end"
            fill="#495057"
            fontFamily="Arial, sans-serif"
          >
            {y}
          </text>
        </g>
      ))}

      {/* Origin O label */}
      <text x="-0.4" y="0.8" fontSize="0.5" fill="#495057" fontFamily="Arial, sans-serif">O</text>

      {/* Vertical asymptote - dashed gray line */}
      <line
        x1={asymptote} y1={-yMin + 0.5} x2={asymptote} y2={-yMax - 0.5}
        stroke="#868e96"
        strokeWidth="0.08"
        strokeDasharray="0.4,0.2"
      />

      {/* Function curve - SAT-style black */}
      <path
        d={curvePath}
        fill="none"
        stroke={SAT_DIAGRAM.curve.stroke}
        strokeWidth={SAT_DIAGRAM.curve.strokeWidth}
        strokeLinecap="round"
      />

      {/* Marked points - solid black dots with coordinates */}
      {showPoints.map(([px, py], i) => (
        <g key={i}>
          <circle
            cx={px}
            cy={-py}
            r={SAT_DIAGRAM.point.r}
            fill={SAT_DIAGRAM.point.fill}
          />
          <text
            x={px > 0 ? px + 0.5 : px - 0.5}
            y={py > 4 ? -py + 0.7 : -py - 0.4}
            fontSize="0.55"
            fill="#212529"
            fontFamily="Arial, sans-serif"
            fontWeight="500"
            textAnchor={px > 0 ? "start" : "end"}
          >
            ({px}, {py})
          </text>
        </g>
      ))}

      {/* Axis labels */}
      <text
        x={xMax + 0.5}
        y="-0.5"
        fontSize="0.7"
        fill="#212529"
        fontFamily="Times New Roman, serif"
        fontStyle="italic"
      >
        x
      </text>
      <text
        x="0.5"
        y={-yMax - 0.3}
        fontSize="0.7"
        fill="#212529"
        fontFamily="Times New Roman, serif"
        fontStyle="italic"
      >
        y
      </text>

      {/* Function label - SAT-style black */}
      <text
        x={xMax - 1.5}
        y={-yMax + 0.5}
        fontSize="0.6"
        fill={SAT_DIAGRAM.text.fill}
        fontFamily="Times New Roman, serif"
        fontStyle="italic"
      >
        y = f(x)
      </text>
    </svg>
  );
};

// SAT-Style Quadratic Function Diagram with vertex
export const QuadraticDiagram = ({ vertex, a = 0.5, showPoints = [], showVertex = true }) => {
  const [h, k] = vertex;
  const xMin = -7, xMax = 7, yMin = -6, yMax = 6;

  // Generate parabola path: y = a(x-h)² + k
  const points = [];
  for (let x = xMin; x <= xMax; x += 0.15) {
    const y = a * Math.pow(x - h, 2) + k;
    if (y >= yMin && y <= yMax) {
      points.push({ x, y });
    }
  }

  let pathD = '';
  if (points.length > 0) {
    pathD = `M ${points[0].x} ${-points[0].y}`;
    for (let i = 1; i < points.length; i++) {
      pathD += ` L ${points[i].x} ${-points[i].y}`;
    }
  }

  return (
    <svg
      width="340"
      height="300"
      viewBox="-8 -7.5 16 14"
      style={{
        background: '#ffffff',
        border: '1px solid #d1d5db'
      }}
    >
      {/* Grid lines */}
      {[-6, -4, -2, 2, 4, 6].map(x => (
        <line key={`v${x}`} x1={x} y1={-yMax - 0.5} x2={x} y2={-yMin + 0.5} stroke="#f0f0f0" strokeWidth="0.03" />
      ))}
      {[-4, -2, 2, 4].map(y => (
        <line key={`h${y}`} x1={xMin - 0.5} y1={-y} x2={xMax + 0.5} y2={-y} stroke="#f0f0f0" strokeWidth="0.03" />
      ))}

      {/* Axes */}
      <line x1={xMin - 0.8} y1="0" x2={xMax + 0.8} y2="0" stroke="#212529" strokeWidth="0.08" />
      <polygon points={`${xMax + 0.8},0 ${xMax + 0.55},0.12 ${xMax + 0.55},-0.12`} fill="#212529" />
      <line x1="0" y1={-yMin + 0.8} x2="0" y2={-yMax - 0.8} stroke="#212529" strokeWidth="0.08" />
      <polygon points={`0,${-yMax - 0.8} 0.12,${-yMax - 0.55} -0.12,${-yMax - 0.55}`} fill="#212529" />

      {/* Tick marks with numbers */}
      {[-6, -4, -2, 2, 4, 6].map(x => (
        <g key={`tx${x}`}>
          <line x1={x} y1="-0.15" x2={x} y2="0.15" stroke="#212529" strokeWidth="0.06" />
          <text x={x} y="0.8" fontSize="0.5" textAnchor="middle" fill="#495057" fontFamily="Arial, sans-serif">{x}</text>
        </g>
      ))}
      {[-4, -2, 2, 4].map(y => (
        <g key={`ty${y}`}>
          <line x1="-0.15" y1={-y} x2="0.15" y2={-y} stroke="#212529" strokeWidth="0.06" />
          <text x="-0.5" y={-y + 0.18} fontSize="0.5" textAnchor="end" fill="#495057" fontFamily="Arial, sans-serif">{y}</text>
        </g>
      ))}
      <text x="-0.4" y="0.8" fontSize="0.5" fill="#495057" fontFamily="Arial, sans-serif">O</text>

      {/* Parabola curve */}
      <path d={pathD} fill="none" stroke="#000000" strokeWidth="0.12" strokeLinecap="round" />

      {/* Vertex point */}
      {showVertex && (
        <g>
          <circle cx={h} cy={-k} r="0.2" fill="#c92a2a" />
          <text
            x={h + 0.5}
            y={-k + (k < 0 ? -0.5 : 0.8)}
            fontSize="0.5"
            fill="#212529"
            fontFamily="Arial, sans-serif"
            fontWeight="500"
          >
            ({h}, {k})
          </text>
        </g>
      )}

      {/* Additional marked points */}
      {showPoints.map(([px, py], i) => (
        <g key={i}>
          <circle cx={px} cy={-py} r="0.18" fill="#000000" />
          <text x={px + 0.4} y={-py - 0.3} fontSize="0.45" fill="#212529" fontFamily="Arial, sans-serif">({px}, {py})</text>
        </g>
      ))}

      {/* Axis labels */}
      <text x={xMax + 0.5} y="-0.5" fontSize="0.6" fill="#212529" fontFamily="Times New Roman, serif" fontStyle="italic">x</text>
      <text x="0.5" y={-yMax - 0.3} fontSize="0.6" fill="#212529" fontFamily="Times New Roman, serif" fontStyle="italic">y</text>
      <text x={xMax - 1.5} y={-yMax + 0.5} fontSize="0.55" fill="#000000" fontFamily="Times New Roman, serif" fontStyle="italic">y = f(x)</text>
    </svg>
  );
};

// SAT-Style Absolute Value Diagram
export const AbsoluteValueDiagram = ({ vertex, slope = 1, showPoints = [] }) => {
  const [h, k] = vertex;
  const xMin = -7, xMax = 7, yMin = -5, yMax = 6;

  // Clamp line endpoints to visible area
  const leftEndX = xMin;
  const leftEndY = k + slope * Math.abs(leftEndX - h);
  const rightEndX = xMax;
  const rightEndY = k + slope * Math.abs(rightEndX - h);

  return (
    <svg
      width="340"
      height="280"
      viewBox="-8 -7.5 16 13"
      style={{
        background: '#ffffff',
        border: '1px solid #d1d5db'
      }}
    >
      {/* Grid */}
      {[-6, -4, -2, 2, 4, 6].map(x => (
        <line key={`v${x}`} x1={x} y1={-yMax - 0.5} x2={x} y2={-yMin + 0.5} stroke="#f0f0f0" strokeWidth="0.03" />
      ))}
      {[-4, -2, 2, 4].map(y => (
        <line key={`h${y}`} x1={xMin - 0.5} y1={-y} x2={xMax + 0.5} y2={-y} stroke="#f0f0f0" strokeWidth="0.03" />
      ))}

      {/* Axes */}
      <line x1={xMin - 0.8} y1="0" x2={xMax + 0.8} y2="0" stroke="#212529" strokeWidth="0.08" />
      <polygon points={`${xMax + 0.8},0 ${xMax + 0.55},0.12 ${xMax + 0.55},-0.12`} fill="#212529" />
      <line x1="0" y1={-yMin + 0.8} x2="0" y2={-yMax - 0.8} stroke="#212529" strokeWidth="0.08" />
      <polygon points={`0,${-yMax - 0.8} 0.12,${-yMax - 0.55} -0.12,${-yMax - 0.55}`} fill="#212529" />

      {/* Tick marks */}
      {[-6, -4, -2, 2, 4, 6].map(x => (
        <g key={`tx${x}`}>
          <line x1={x} y1="-0.15" x2={x} y2="0.15" stroke="#212529" strokeWidth="0.06" />
          <text x={x} y="0.8" fontSize="0.5" textAnchor="middle" fill="#495057" fontFamily="Arial, sans-serif">{x}</text>
        </g>
      ))}
      {[-4, -2, 2, 4].map(y => (
        <g key={`ty${y}`}>
          <line x1="-0.15" y1={-y} x2="0.15" y2={-y} stroke="#212529" strokeWidth="0.06" />
          <text x="-0.5" y={-y + 0.18} fontSize="0.5" textAnchor="end" fill="#495057" fontFamily="Arial, sans-serif">{y}</text>
        </g>
      ))}
      <text x="-0.4" y="0.8" fontSize="0.5" fill="#495057" fontFamily="Arial, sans-serif">O</text>

      {/* V-shape: left arm */}
      <line
        x1={leftEndX} y1={-Math.min(leftEndY, yMax)}
        x2={h} y2={-k}
        stroke="#000000" strokeWidth="0.12" strokeLinecap="round"
      />

      {/* V-shape: right arm */}
      <line
        x1={h} y1={-k}
        x2={rightEndX} y2={-Math.min(rightEndY, yMax)}
        stroke="#000000" strokeWidth="0.12" strokeLinecap="round"
      />

      {/* Vertex */}
      <circle cx={h} cy={-k} r="0.2" fill="#c92a2a" />
      <text
        x={h + 0.5}
        y={-k + (k < 0 ? -0.5 : 0.8)}
        fontSize="0.5"
        fill="#212529"
        fontFamily="Arial, sans-serif"
        fontWeight="500"
      >
        ({h}, {k})
      </text>

      {/* Additional points */}
      {showPoints.map(([px, py], i) => (
        <g key={i}>
          <circle cx={px} cy={-py} r="0.18" fill="#000000" />
        </g>
      ))}

      {/* Labels */}
      <text x={xMax + 0.5} y="-0.5" fontSize="0.6" fill="#212529" fontFamily="Times New Roman, serif" fontStyle="italic">x</text>
      <text x="0.5" y={-yMax - 0.3} fontSize="0.6" fill="#212529" fontFamily="Times New Roman, serif" fontStyle="italic">y</text>
      <text x={xMax - 1.5} y={-yMax + 0.5} fontSize="0.55" fill="#000000" fontFamily="Times New Roman, serif" fontStyle="italic">y = f(x)</text>
    </svg>
  );
};

// SAT-Style Coordinate Points Diagram (just points on a grid)
export const CoordinatePointsDiagram = ({ points = [], label = "f" }) => {
  const xMin = -2, xMax = 8, yMin = -2, yMax = 12;

  return (
    <svg
      width="320"
      height="300"
      viewBox="-3 -13 12 16"
      style={{
        background: '#ffffff',
        border: '1px solid #d1d5db'
      }}
    >
      {/* Grid */}
      {[2, 4, 6].map(x => (
        <line key={`v${x}`} x1={x} y1={-yMax - 0.5} x2={x} y2={-yMin + 0.5} stroke="#f0f0f0" strokeWidth="0.03" />
      ))}
      {[2, 4, 6, 8, 10].map(y => (
        <line key={`h${y}`} x1={xMin - 0.5} y1={-y} x2={xMax + 0.5} y2={-y} stroke="#f0f0f0" strokeWidth="0.03" />
      ))}

      {/* Axes */}
      <line x1={xMin - 0.8} y1="0" x2={xMax + 0.8} y2="0" stroke="#212529" strokeWidth="0.08" />
      <polygon points={`${xMax + 0.8},0 ${xMax + 0.55},0.12 ${xMax + 0.55},-0.12`} fill="#212529" />
      <line x1="0" y1={-yMin + 0.8} x2="0" y2={-yMax - 0.8} stroke="#212529" strokeWidth="0.08" />
      <polygon points={`0,${-yMax - 0.8} 0.12,${-yMax - 0.55} -0.12,${-yMax - 0.55}`} fill="#212529" />

      {/* Tick marks */}
      {[2, 4, 6].map(x => (
        <g key={`tx${x}`}>
          <line x1={x} y1="-0.15" x2={x} y2="0.15" stroke="#212529" strokeWidth="0.06" />
          <text x={x} y="0.8" fontSize="0.5" textAnchor="middle" fill="#495057" fontFamily="Arial, sans-serif">{x}</text>
        </g>
      ))}
      {[2, 4, 6, 8, 10].map(y => (
        <g key={`ty${y}`}>
          <line x1="-0.15" y1={-y} x2="0.15" y2={-y} stroke="#212529" strokeWidth="0.06" />
          <text x="-0.5" y={-y + 0.18} fontSize="0.5" textAnchor="end" fill="#495057" fontFamily="Arial, sans-serif">{y}</text>
        </g>
      ))}
      <text x="-0.4" y="0.8" fontSize="0.5" fill="#495057" fontFamily="Arial, sans-serif">O</text>

      {/* Points */}
      {points.map(([px, py], i) => (
        <g key={i}>
          <circle cx={px} cy={-py} r="0.22" fill="#000000" />
          <text
            x={px + 0.5}
            y={-py - 0.4}
            fontSize="0.5"
            fill="#212529"
            fontFamily="Arial, sans-serif"
            fontWeight="500"
          >
            ({px}, {py})
          </text>
        </g>
      ))}

      {/* Labels */}
      <text x={xMax + 0.5} y="-0.5" fontSize="0.6" fill="#212529" fontFamily="Times New Roman, serif" fontStyle="italic">x</text>
      <text x="0.5" y={-yMax - 0.3} fontSize="0.6" fill="#212529" fontFamily="Times New Roman, serif" fontStyle="italic">y</text>
      <text x={xMax - 2} y={-yMax + 0.5} fontSize="0.55" fill="#000000" fontFamily="Times New Roman, serif" fontStyle="italic">y = {label}(x)</text>
    </svg>
  );
};

// SAT-Style Quadratic with X-Intercepts shown
export const QuadraticInterceptsDiagram = ({ intercepts, vertex = null }) => {
  const [x1, x2] = intercepts;
  const h = (x1 + x2) / 2;
  const k = -Math.pow((x2 - x1) / 2, 2) * 0.3; // Scale for better visibility
  const xMin = -4, xMax = 8, yMin = -6, yMax = 4;

  // Generate parabola path
  const points = [];
  for (let x = xMin; x <= xMax; x += 0.15) {
    const y = 0.3 * (x - x1) * (x - x2);
    if (y >= yMin && y <= yMax) {
      points.push({ x, y });
    }
  }

  let pathD = '';
  if (points.length > 0) {
    pathD = `M ${points[0].x} ${-points[0].y}`;
    for (let i = 1; i < points.length; i++) {
      pathD += ` L ${points[i].x} ${-points[i].y}`;
    }
  }

  return (
    <svg
      width="340"
      height="280"
      viewBox="-5 -5 14 11"
      style={{
        background: '#ffffff',
        border: '1px solid #d1d5db'
      }}
    >
      {/* Grid */}
      {[-2, 2, 4, 6].map(x => (
        <line key={`v${x}`} x1={x} y1={-yMax - 0.5} x2={x} y2={-yMin + 0.5} stroke="#f0f0f0" strokeWidth="0.03" />
      ))}
      {[-4, -2, 2].map(y => (
        <line key={`h${y}`} x1={xMin - 0.5} y1={-y} x2={xMax + 0.5} y2={-y} stroke="#f0f0f0" strokeWidth="0.03" />
      ))}

      {/* Axes */}
      <line x1={xMin - 0.8} y1="0" x2={xMax + 0.8} y2="0" stroke="#212529" strokeWidth="0.08" />
      <polygon points={`${xMax + 0.8},0 ${xMax + 0.55},0.12 ${xMax + 0.55},-0.12`} fill="#212529" />
      <line x1="0" y1={-yMin + 0.8} x2="0" y2={-yMax - 0.8} stroke="#212529" strokeWidth="0.08" />
      <polygon points={`0,${-yMax - 0.8} 0.12,${-yMax - 0.55} -0.12,${-yMax - 0.55}`} fill="#212529" />

      {/* Tick marks */}
      {[-2, 2, 4, 6].map(x => (
        <g key={`tx${x}`}>
          <line x1={x} y1="-0.15" x2={x} y2="0.15" stroke="#212529" strokeWidth="0.06" />
          <text x={x} y="0.75" fontSize="0.5" textAnchor="middle" fill="#495057" fontFamily="Arial, sans-serif">{x}</text>
        </g>
      ))}
      {[-4, -2, 2].map(y => (
        <g key={`ty${y}`}>
          <line x1="-0.15" y1={-y} x2="0.15" y2={-y} stroke="#212529" strokeWidth="0.06" />
          <text x="-0.45" y={-y + 0.18} fontSize="0.5" textAnchor="end" fill="#495057" fontFamily="Arial, sans-serif">{y}</text>
        </g>
      ))}
      <text x="-0.4" y="0.75" fontSize="0.5" fill="#495057" fontFamily="Arial, sans-serif">O</text>

      {/* Parabola */}
      <path d={pathD} fill="none" stroke="#000000" strokeWidth="0.12" strokeLinecap="round" />

      {/* X-intercepts - green dots */}
      <circle cx={x1} cy="0" r="0.2" fill="#2f9e44" />
      <text x={x1} y="1" fontSize="0.5" fill="#2f9e44" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="600">
        {x1}
      </text>

      <circle cx={x2} cy="0" r="0.2" fill="#2f9e44" />
      <text x={x2} y="1" fontSize="0.5" fill="#2f9e44" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="600">
        {x2}
      </text>

      {/* Labels */}
      <text x={xMax + 0.5} y="-0.5" fontSize="0.6" fill="#212529" fontFamily="Times New Roman, serif" fontStyle="italic">x</text>
      <text x="0.5" y={-yMax - 0.3} fontSize="0.6" fill="#212529" fontFamily="Times New Roman, serif" fontStyle="italic">y</text>
      <text x={xMax - 1.5} y={-yMax + 0.5} fontSize="0.55" fill="#000000" fontFamily="Times New Roman, serif" fontStyle="italic">y = f(x)</text>
    </svg>
  );
};

// SAT-Style Table Diagram (for table-to-equation questions)
export const TableDiagram = ({ rows = [], xHeader = "x", yHeader = "f(x)" }) => {
  const cellWidth = 80;
  const cellHeight = 36;
  const headerHeight = 40;
  const tableWidth = cellWidth * 2;
  const tableHeight = headerHeight + rows.length * cellHeight;

  return (
    <svg
      width={tableWidth + 4}
      height={tableHeight + 4}
      viewBox={`0 0 ${tableWidth + 4} ${tableHeight + 4}`}
      style={{
        background: '#ffffff'
      }}
    >
      {/* Table border - SAT-style black */}
      <rect
        x="2"
        y="2"
        width={tableWidth}
        height={tableHeight}
        fill="none"
        stroke={SAT_DIAGRAM.tableBorder}
        strokeWidth="1.5"
      />

      {/* Header row background - white for SAT style */}
      <rect
        x="2"
        y="2"
        width={tableWidth}
        height={headerHeight}
        fill="#ffffff"
        stroke="none"
      />

      {/* Vertical divider between columns - black */}
      <line
        x1={2 + cellWidth}
        y1="2"
        x2={2 + cellWidth}
        y2={tableHeight + 2}
        stroke={SAT_DIAGRAM.tableBorder}
        strokeWidth="1"
      />

      {/* Horizontal line under header - thicker for SAT style */}
      <line
        x1="2"
        y1={2 + headerHeight}
        x2={tableWidth + 2}
        y2={2 + headerHeight}
        stroke={SAT_DIAGRAM.tableBorder}
        strokeWidth="1.5"
      />

      {/* Header text */}
      <text
        x={2 + cellWidth / 2}
        y={2 + headerHeight / 2 + 5}
        fontSize="16"
        fontWeight="600"
        textAnchor="middle"
        fill="#212529"
        fontFamily="Times New Roman, serif"
        fontStyle="italic"
      >
        {xHeader}
      </text>
      <text
        x={2 + cellWidth + cellWidth / 2}
        y={2 + headerHeight / 2 + 5}
        fontSize="16"
        fontWeight="600"
        textAnchor="middle"
        fill="#212529"
        fontFamily="Times New Roman, serif"
        fontStyle="italic"
      >
        {yHeader}
      </text>

      {/* Data rows */}
      {rows.map((row, i) => {
        const rowY = 2 + headerHeight + i * cellHeight;
        return (
          <g key={i}>
            {/* Horizontal line between rows (except first) */}
            {i > 0 && (
              <line
                x1="2"
                y1={rowY}
                x2={tableWidth + 2}
                y2={rowY}
                stroke="#e5e7eb"
                strokeWidth="1"
              />
            )}
            {/* X value */}
            <text
              x={2 + cellWidth / 2}
              y={rowY + cellHeight / 2 + 5}
              fontSize="15"
              textAnchor="middle"
              fill="#212529"
              fontFamily="Arial, sans-serif"
            >
              {row[0]}
            </text>
            {/* Y value */}
            <text
              x={2 + cellWidth + cellWidth / 2}
              y={rowY + cellHeight / 2 + 5}
              fontSize="15"
              textAnchor="middle"
              fill="#212529"
              fontFamily="Arial, sans-serif"
            >
              {row[1]}
            </text>
          </g>
        );
      })}
    </svg>
  );
};

// SAT-Style Scatterplot Diagram (for best-fit line questions)
export const ScatterplotDiagram = ({ points = [], xLabel = "x", yLabel = "y", xMax = 10, yMax = 10 }) => {
  const xMin = 0, yMin = 0;

  return (
    <svg
      width="320"
      height="280"
      viewBox={`-1.5 ${-yMax - 1.5} ${xMax + 3} ${yMax + 3}`}
      style={{
        background: '#ffffff',
        border: '1px solid #d1d5db'
      }}
    >
      {/* Grid lines */}
      {Array.from({ length: Math.floor(xMax / 2) + 1 }, (_, i) => i * 2).filter(x => x > 0).map(x => (
        <line key={`v${x}`} x1={x} y1={-yMax - 0.3} x2={x} y2={0.3} stroke="#f0f0f0" strokeWidth="0.03" />
      ))}
      {Array.from({ length: Math.floor(yMax / 2) + 1 }, (_, i) => i * 2).filter(y => y > 0).map(y => (
        <line key={`h${y}`} x1={-0.3} y1={-y} x2={xMax + 0.3} y2={-y} stroke="#f0f0f0" strokeWidth="0.03" />
      ))}

      {/* Main X-axis */}
      <line x1="-0.5" y1="0" x2={xMax + 0.8} y2="0" stroke="#212529" strokeWidth="0.08" />
      <polygon points={`${xMax + 0.8},0 ${xMax + 0.55},0.1 ${xMax + 0.55},-0.1`} fill="#212529" />

      {/* Main Y-axis */}
      <line x1="0" y1="0.5" x2="0" y2={-yMax - 0.8} stroke="#212529" strokeWidth="0.08" />
      <polygon points={`0,${-yMax - 0.8} 0.1,${-yMax - 0.55} -0.1,${-yMax - 0.55}`} fill="#212529" />

      {/* X-axis tick marks and labels */}
      {Array.from({ length: Math.floor(xMax / 2) + 1 }, (_, i) => i * 2).filter(x => x > 0).map(x => (
        <g key={`tx${x}`}>
          <line x1={x} y1="-0.12" x2={x} y2="0.12" stroke="#212529" strokeWidth="0.06" />
          <text x={x} y="0.6" fontSize="0.45" textAnchor="middle" fill="#495057" fontFamily="Arial, sans-serif">{x}</text>
        </g>
      ))}

      {/* Y-axis tick marks and labels */}
      {Array.from({ length: Math.floor(yMax / 2) + 1 }, (_, i) => i * 2).filter(y => y > 0).map(y => (
        <g key={`ty${y}`}>
          <line x1="-0.12" y1={-y} x2="0.12" y2={-y} stroke="#212529" strokeWidth="0.06" />
          <text x="-0.35" y={-y + 0.13} fontSize="0.45" textAnchor="end" fill="#495057" fontFamily="Arial, sans-serif">{y}</text>
        </g>
      ))}

      {/* Origin */}
      <text x="-0.35" y="0.6" fontSize="0.45" fill="#495057" fontFamily="Arial, sans-serif">O</text>

      {/* Scatter points - solid black dots */}
      {points.map(([px, py], i) => (
        <circle key={i} cx={px} cy={-py} r="0.18" fill="#212529" />
      ))}

      {/* Axis labels */}
      <text x={xMax + 0.5} y="-0.4" fontSize="0.5" fill="#212529" fontFamily="Times New Roman, serif" fontStyle="italic">{xLabel}</text>
      <text x="0.4" y={-yMax - 0.2} fontSize="0.5" fill="#212529" fontFamily="Times New Roman, serif" fontStyle="italic">{yLabel}</text>
    </svg>
  );
};

// SAT-Style Linear Line Diagram (line passing through two points)
export const LinearLineDiagram = ({ points = [], xLabel = "x", yLabel = "y", xRange = [-1, 10], yRange = [-1, 10], showLabels = true }) => {
  const [xMin, xMax] = xRange;
  const [yMin, yMax] = yRange;

  // Calculate line equation from two points
  let linePathD = '';
  if (points.length >= 2) {
    const [x1, y1] = points[0];
    const [x2, y2] = points[1];
    const slope = (y2 - y1) / (x2 - x1);
    const intercept = y1 - slope * x1;

    // Extend line to edges of visible area
    const lineStartX = xMin - 1;
    const lineStartY = slope * lineStartX + intercept;
    const lineEndX = xMax + 1;
    const lineEndY = slope * lineEndX + intercept;

    linePathD = `M ${lineStartX} ${-lineStartY} L ${lineEndX} ${-lineEndY}`;
  }

  return (
    <svg
      width="320"
      height="280"
      viewBox={`${xMin - 1.5} ${-yMax - 1.5} ${xMax - xMin + 3} ${yMax - yMin + 3}`}
      style={{
        background: '#ffffff',
        border: '1px solid #d1d5db'
      }}
    >
      {/* Grid lines */}
      {Array.from({ length: Math.floor((xMax - xMin) / 10) * 5 + 1 }, (_, i) => xMin + i * 10).filter(x => x !== 0 && x >= xMin && x <= xMax).map(x => (
        <line key={`v${x}`} x1={x} y1={-yMax - 0.3} x2={x} y2={-yMin + 0.3} stroke="#f0f0f0" strokeWidth="0.2" />
      ))}
      {Array.from({ length: Math.floor((yMax - yMin) / 10) * 5 + 1 }, (_, i) => yMin + i * 10).filter(y => y !== 0 && y >= yMin && y <= yMax).map(y => (
        <line key={`h${y}`} x1={xMin - 0.3} y1={-y} x2={xMax + 0.3} y2={-y} stroke="#f0f0f0" strokeWidth="0.2" />
      ))}

      {/* Main X-axis */}
      <line x1={xMin - 0.5} y1="0" x2={xMax + 0.8} y2="0" stroke="#212529" strokeWidth="0.5" />
      <polygon points={`${xMax + 0.8},0 ${xMax + 0.4},0.8 ${xMax + 0.4},-0.8`} fill="#212529" />

      {/* Main Y-axis */}
      <line x1="0" y1={-yMin + 0.5} x2="0" y2={-yMax - 0.8} stroke="#212529" strokeWidth="0.5" />
      <polygon points={`0,${-yMax - 0.8} 0.8,${-yMax - 0.4} -0.8,${-yMax - 0.4}`} fill="#212529" />

      {/* Tick marks - every 10 units for larger scales, or every unit for smaller */}
      {(() => {
        const step = xMax > 20 ? 20 : 10;
        return Array.from({ length: Math.floor(xMax / step) + 1 }, (_, i) => i * step)
          .filter(x => x > 0 && x <= xMax)
          .map(x => (
            <g key={`tx${x}`}>
              <line x1={x} y1="-0.8" x2={x} y2="0.8" stroke="#212529" strokeWidth="0.3" />
              <text x={x} y="4" fontSize="3.5" textAnchor="middle" fill="#495057" fontFamily="Arial, sans-serif">{x}</text>
            </g>
          ));
      })()}

      {(() => {
        const step = yMax > 20 ? 20 : 10;
        return Array.from({ length: Math.floor(yMax / step) + 1 }, (_, i) => i * step)
          .filter(y => y > 0 && y <= yMax)
          .map(y => (
            <g key={`ty${y}`}>
              <line x1="-0.8" y1={-y} x2="0.8" y2={-y} stroke="#212529" strokeWidth="0.3" />
              <text x="-2.5" y={-y + 1.2} fontSize="3.5" textAnchor="end" fill="#495057" fontFamily="Arial, sans-serif">{y}</text>
            </g>
          ));
      })()}

      {/* Origin */}
      <text x="-2.5" y="4" fontSize="3.5" fill="#495057" fontFamily="Arial, sans-serif">O</text>

      {/* Line */}
      {linePathD && (
        <path d={linePathD} fill="none" stroke="#212529" strokeWidth="0.8" />
      )}

      {/* Points - if we want to show them */}
      {showLabels && points.map(([px, py], i) => (
        <g key={i}>
          <circle cx={px} cy={-py} r="1.5" fill="#212529" />
        </g>
      ))}

      {/* Axis labels */}
      <text x={xMax - 4} y="7" fontSize="4" fill="#212529" fontFamily="Times New Roman, serif" fontStyle="italic">{xLabel}</text>
      <text x="2.5" y={-yMax + 2.5} fontSize="4" fill="#212529" fontFamily="Times New Roman, serif" fontStyle="italic">{yLabel}</text>
    </svg>
  );
};

// SAT-Style Simple Line Diagram (for smaller coordinate systems)
export const SimpleLineDiagram = ({ points = [], xMax = 6, yMax = 12 }) => {
  // Calculate line equation and extend
  let linePathD = '';
  if (points.length >= 2) {
    const [x1, y1] = points[0];
    const [x2, y2] = points[1];
    const slope = (y2 - y1) / (x2 - x1);
    const intercept = y1 - slope * x1;

    const lineStartX = -0.5;
    const lineStartY = slope * lineStartX + intercept;
    const lineEndX = xMax + 0.5;
    const lineEndY = slope * lineEndX + intercept;

    linePathD = `M ${lineStartX} ${-lineStartY} L ${lineEndX} ${-lineEndY}`;
  }

  return (
    <svg
      width="300"
      height="280"
      viewBox={`-1.5 ${-yMax - 1.5} ${xMax + 3} ${yMax + 3}`}
      style={{
        background: '#ffffff',
        border: '1px solid #d1d5db'
      }}
    >
      {/* Grid */}
      {Array.from({ length: xMax + 1 }, (_, i) => i).filter(x => x > 0).map(x => (
        <line key={`v${x}`} x1={x} y1={-yMax - 0.3} x2={x} y2="0.3" stroke="#f0f0f0" strokeWidth="0.03" />
      ))}
      {Array.from({ length: yMax + 1 }, (_, i) => i).filter(y => y > 0 && y % 2 === 0).map(y => (
        <line key={`h${y}`} x1="-0.3" y1={-y} x2={xMax + 0.3} y2={-y} stroke="#f0f0f0" strokeWidth="0.03" />
      ))}

      {/* Axes */}
      <line x1="-0.5" y1="0" x2={xMax + 0.8} y2="0" stroke="#212529" strokeWidth="0.08" />
      <polygon points={`${xMax + 0.8},0 ${xMax + 0.55},0.12 ${xMax + 0.55},-0.12`} fill="#212529" />
      <line x1="0" y1="0.5" x2="0" y2={-yMax - 0.8} stroke="#212529" strokeWidth="0.08" />
      <polygon points={`0,${-yMax - 0.8} 0.12,${-yMax - 0.55} -0.12,${-yMax - 0.55}`} fill="#212529" />

      {/* Tick marks */}
      {Array.from({ length: xMax + 1 }, (_, i) => i).filter(x => x > 0).map(x => (
        <g key={`tx${x}`}>
          <line x1={x} y1="-0.12" x2={x} y2="0.12" stroke="#212529" strokeWidth="0.06" />
          <text x={x} y="0.6" fontSize="0.45" textAnchor="middle" fill="#495057" fontFamily="Arial, sans-serif">{x}</text>
        </g>
      ))}
      {Array.from({ length: yMax + 1 }, (_, i) => i).filter(y => y > 0 && y % 2 === 0).map(y => (
        <g key={`ty${y}`}>
          <line x1="-0.12" y1={-y} x2="0.12" y2={-y} stroke="#212529" strokeWidth="0.06" />
          <text x="-0.35" y={-y + 0.13} fontSize="0.45" textAnchor="end" fill="#495057" fontFamily="Arial, sans-serif">{y}</text>
        </g>
      ))}
      <text x="-0.35" y="0.6" fontSize="0.45" fill="#495057" fontFamily="Arial, sans-serif">O</text>

      {/* Line */}
      {linePathD && (
        <path d={linePathD} fill="none" stroke="#212529" strokeWidth="0.1" />
      )}

      {/* Points */}
      {points.map(([px, py], i) => (
        <circle key={i} cx={px} cy={-py} r="0.15" fill="#212529" />
      ))}

      {/* Axis labels */}
      <text x={xMax + 0.5} y="-0.4" fontSize="0.5" fill="#212529" fontFamily="Times New Roman, serif" fontStyle="italic">x</text>
      <text x="0.4" y={-yMax - 0.2} fontSize="0.5" fill="#212529" fontFamily="Times New Roman, serif" fontStyle="italic">y</text>
    </svg>
  );
};

// SAT-Style Dot Plot Diagram (for statistics questions)
export const DotPlotDiagram = ({ sets = [], xRange = [0, 10], title = "" }) => {
  const [xMin, xMax] = xRange;
  const plotWidth = 300;
  const plotHeight = sets.length === 2 ? 200 : 120;
  const margin = { top: 20, right: 20, bottom: 40, left: 20 };
  const innerWidth = plotWidth - margin.left - margin.right;
  const innerHeight = plotHeight - margin.top - margin.bottom;
  const setHeight = innerHeight / sets.length;

  const xScale = (x) => margin.left + ((x - xMin) / (xMax - xMin)) * innerWidth;

  // Count occurrences of each value
  const countData = (data) => {
    const counts = {};
    data.forEach(val => {
      counts[val] = (counts[val] || 0) + 1;
    });
    return counts;
  };

  return (
    <svg
      width={plotWidth}
      height={plotHeight}
      style={{
        background: '#ffffff',
        border: '1px solid #d1d5db'
      }}
    >
      {sets.map((set, setIndex) => {
        const counts = countData(set.data);
        const setY = margin.top + setIndex * setHeight;
        const baselineY = setY + setHeight - 20;

        return (
          <g key={setIndex}>
            {/* Set label */}
            <text
              x={plotWidth / 2}
              y={setY + 12}
              fontSize="10"
              fontWeight="600"
              textAnchor="middle"
              fill="#212529"
              fontFamily="Arial, sans-serif"
            >
              {set.name}
            </text>

            {/* Baseline */}
            <line
              x1={margin.left}
              y1={baselineY}
              x2={plotWidth - margin.right}
              y2={baselineY}
              stroke="#212529"
              strokeWidth="1"
            />

            {/* X-axis labels */}
            {Array.from({ length: xMax - xMin + 1 }, (_, i) => xMin + i).map(x => (
              <g key={x}>
                <line
                  x1={xScale(x)}
                  y1={baselineY}
                  x2={xScale(x)}
                  y2={baselineY + 4}
                  stroke="#212529"
                  strokeWidth="0.75"
                />
                <text
                  x={xScale(x)}
                  y={baselineY + 14}
                  fontSize="9"
                  textAnchor="middle"
                  fill="#495057"
                  fontFamily="Arial, sans-serif"
                >
                  {x}
                </text>
              </g>
            ))}

            {/* Dots */}
            {Object.entries(counts).map(([value, count]) => {
              const x = xScale(parseInt(value));
              return Array.from({ length: count }, (_, i) => (
                <circle
                  key={`${value}-${i}`}
                  cx={x}
                  cy={baselineY - 9 - i * 10}
                  r="4"
                  fill="#212529"
                />
              ));
            })}
          </g>
        );
      })}
    </svg>
  );
};

// SAT-Style Circle Geometry Diagram (for inscribed angle questions)
export const CircleGeometryDiagram = ({ center = "O", points = [], inscribedAngle = "", centralAngle = "" }) => {
  const size = 280;
  const cx = size / 2;
  const cy = size / 2;
  const radius = 100;

  // Calculate point positions on circle
  const getPointOnCircle = (angle) => ({
    x: cx + radius * Math.cos(angle * Math.PI / 180),
    y: cy + radius * Math.sin(angle * Math.PI / 180)
  });

  // Default positions for points P, Q, R, S around the circle
  const pointAngles = { P: -60, Q: 30, R: 120, S: 200, E: -30, D: 60 };
  const pointPositions = {};
  points.forEach(p => {
    pointPositions[p] = getPointOnCircle(pointAngles[p] || 0);
  });

  return (
    <svg
      width={size}
      height={size}
      style={{
        background: '#ffffff',
        border: '1px solid #d1d5db'
      }}
    >
      {/* Circle */}
      <circle
        cx={cx}
        cy={cy}
        r={radius}
        fill="none"
        stroke="#212529"
        strokeWidth="1.5"
      />

      {/* Center point */}
      <circle cx={cx} cy={cy} r="3" fill="#212529" />
      <text
        x={cx + 10}
        y={cy + 5}
        fontSize="13"
        fontWeight="600"
        fill="#212529"
        fontFamily="Arial, sans-serif"
      >
        {center}
      </text>

      {/* Points on circle */}
      {points.map(p => {
        const pos = pointPositions[p];
        if (!pos) return null;
        return (
          <g key={p}>
            <circle cx={pos.x} cy={pos.y} r="3" fill="#212529" />
            <text
              x={pos.x + (pos.x > cx ? 10 : -10)}
              y={pos.y + (pos.y > cy ? 14 : -7)}
              fontSize="13"
              fontWeight="600"
              textAnchor={pos.x > cx ? "start" : "end"}
              fill="#212529"
              fontFamily="Arial, sans-serif"
            >
              {p}
            </text>
          </g>
        );
      })}

      {/* Draw lines connecting points if needed */}
      {points.length >= 2 && (
        <>
          {/* Connect adjacent points */}
          {points.slice(0, -1).map((p, i) => {
            const p1 = pointPositions[p];
            const p2 = pointPositions[points[i + 1]];
            if (!p1 || !p2) return null;
            return (
              <line
                key={`line-${i}`}
                x1={p1.x}
                y1={p1.y}
                x2={p2.x}
                y2={p2.y}
                stroke="#212529"
                strokeWidth="1"
              />
            );
          })}
          {/* Connect last to first if 3+ points */}
          {points.length >= 3 && (
            <line
              x1={pointPositions[points[points.length - 1]]?.x}
              y1={pointPositions[points[points.length - 1]]?.y}
              x2={pointPositions[points[0]]?.x}
              y2={pointPositions[points[0]]?.y}
              stroke="#212529"
              strokeWidth="1"
            />
          )}
        </>
      )}

      {/* Draw radii to center if central angle */}
      {centralAngle && points.length >= 2 && (
        <>
          <line
            x1={cx}
            y1={cy}
            x2={pointPositions[points[0]]?.x}
            y2={pointPositions[points[0]]?.y}
            stroke="#212529"
            strokeWidth="1"
          />
          <line
            x1={cx}
            y1={cy}
            x2={pointPositions[points[points.length - 1]]?.x}
            y2={pointPositions[points[points.length - 1]]?.y}
            stroke="#212529"
            strokeWidth="1"
          />
        </>
      )}
    </svg>
  );
};

// SAT-Style Piecewise Linear Diagram
export const PiecewiseLinearDiagram = ({ points = [], xRange = [-5, 6], yRange = [-3, 6], label = "f(x)" }) => {
  const [xMin, xMax] = xRange;
  const [yMin, yMax] = yRange;

  // Build path from points
  let pathD = '';
  if (points.length > 0) {
    pathD = `M ${points[0][0]} ${-points[0][1]}`;
    for (let i = 1; i < points.length; i++) {
      pathD += ` L ${points[i][0]} ${-points[i][1]}`;
    }
  }

  return (
    <svg
      width="340"
      height="280"
      viewBox={`${xMin - 1.5} ${-yMax - 1.5} ${xMax - xMin + 3} ${yMax - yMin + 3}`}
      style={{
        background: '#ffffff',
        border: '1px solid #d1d5db'
      }}
    >
      {/* Grid lines */}
      {Array.from({ length: xMax - xMin + 1 }, (_, i) => xMin + i).filter(x => x !== 0).map(x => (
        <line key={`v${x}`} x1={x} y1={-yMax - 0.3} x2={x} y2={-yMin + 0.3} stroke="#f0f0f0" strokeWidth="0.03" />
      ))}
      {Array.from({ length: yMax - yMin + 1 }, (_, i) => yMin + i).filter(y => y !== 0).map(y => (
        <line key={`h${y}`} x1={xMin - 0.3} y1={-y} x2={xMax + 0.3} y2={-y} stroke="#f0f0f0" strokeWidth="0.03" />
      ))}

      {/* X-axis */}
      <line x1={xMin - 0.5} y1="0" x2={xMax + 0.8} y2="0" stroke="#212529" strokeWidth="0.08" />
      <polygon points={`${xMax + 0.8},0 ${xMax + 0.55},0.12 ${xMax + 0.55},-0.12`} fill="#212529" />

      {/* Y-axis */}
      <line x1="0" y1={-yMin + 0.5} x2="0" y2={-yMax - 0.8} stroke="#212529" strokeWidth="0.08" />
      <polygon points={`0,${-yMax - 0.8} 0.12,${-yMax - 0.55} -0.12,${-yMax - 0.55}`} fill="#212529" />

      {/* Tick marks */}
      {Array.from({ length: xMax - xMin + 1 }, (_, i) => xMin + i).filter(x => x !== 0).map(x => (
        <g key={`tx${x}`}>
          <line x1={x} y1="-0.12" x2={x} y2="0.12" stroke="#212529" strokeWidth="0.06" />
          <text x={x} y="0.6" fontSize="0.45" textAnchor="middle" fill="#495057" fontFamily="Arial, sans-serif">{x}</text>
        </g>
      ))}
      {Array.from({ length: yMax - yMin + 1 }, (_, i) => yMin + i).filter(y => y !== 0).map(y => (
        <g key={`ty${y}`}>
          <line x1="-0.12" y1={-y} x2="0.12" y2={-y} stroke="#212529" strokeWidth="0.06" />
          <text x="-0.35" y={-y + 0.13} fontSize="0.45" textAnchor="end" fill="#495057" fontFamily="Arial, sans-serif">{y}</text>
        </g>
      ))}

      {/* Origin */}
      <text x="-0.35" y="0.55" fontSize="0.45" fill="#495057" fontFamily="Arial, sans-serif">O</text>

      {/* Piecewise line */}
      <path d={pathD} fill="none" stroke="#000000" strokeWidth="0.1" strokeLinecap="round" strokeLinejoin="round" />

      {/* Points */}
      {points.map(([px, py], i) => (
        <circle key={i} cx={px} cy={-py} r="0.14" fill="#000000" />
      ))}

      {/* Label */}
      <text x={xMax - 0.5} y={-yMax + 0.5} fontSize="0.55" fill="#000000" fontFamily="Times New Roman, serif" fontStyle="italic">{label}</text>
    </svg>
  );
};

// SAT-Style Bar Chart Diagram
export const BarChartDiagram = ({ data = [], title = "", xLabel = "", yLabel = "" }) => {
  const width = 320;
  const height = 240;
  const margin = { top: 30, right: 20, bottom: 50, left: 50 };
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  const maxValue = Math.max(...data.map(d => d.value));
  const barWidth = innerWidth / data.length - 10;

  const yScale = (val) => innerHeight - (val / maxValue) * innerHeight;

  return (
    <svg
      width={width}
      height={height}
      style={{
        background: '#ffffff',
        border: '1px solid #d1d5db'
      }}
    >
      {/* Title */}
      {title && (
        <text
          x={width / 2}
          y={18}
          fontSize="11"
          fontWeight="600"
          textAnchor="middle"
          fill="#212529"
          fontFamily="Arial, sans-serif"
        >
          {title}
        </text>
      )}

      <g transform={`translate(${margin.left}, ${margin.top})`}>
        {/* Y-axis */}
        <line x1="0" y1="0" x2="0" y2={innerHeight} stroke="#212529" strokeWidth="1" />

        {/* Y-axis labels */}
        {[0, 0.25, 0.5, 0.75, 1].map(frac => {
          const val = Math.round(maxValue * frac);
          return (
            <g key={frac}>
              <line x1="-4" y1={yScale(val)} x2="0" y2={yScale(val)} stroke="#212529" strokeWidth="0.75" />
              <text x="-8" y={yScale(val) + 4} fontSize="9" textAnchor="end" fill="#495057" fontFamily="Arial, sans-serif">
                {val}
              </text>
              {frac > 0 && (
                <line x1="0" y1={yScale(val)} x2={innerWidth} y2={yScale(val)} stroke="#e5e7eb" strokeWidth="0.5" />
              )}
            </g>
          );
        })}

        {/* X-axis */}
        <line x1="0" y1={innerHeight} x2={innerWidth} y2={innerHeight} stroke="#212529" strokeWidth="1" />

        {/* Bars */}
        {data.map((d, i) => {
          const x = i * (innerWidth / data.length) + 5;
          const barHeight = innerHeight - yScale(d.value);
          return (
            <g key={i}>
              <rect
                x={x}
                y={yScale(d.value)}
                width={barWidth}
                height={barHeight}
                fill="#9ca3af"
                stroke="#333333"
                strokeWidth="0.5"
              />
              {/* Value label on bar */}
              <text
                x={x + barWidth / 2}
                y={yScale(d.value) - 4}
                fontSize="9"
                fontWeight="600"
                textAnchor="middle"
                fill="#212529"
                fontFamily="Arial, sans-serif"
              >
                ${d.value}
              </text>
              {/* X-axis label */}
              <text
                x={x + barWidth / 2}
                y={innerHeight + 14}
                fontSize="9"
                textAnchor="middle"
                fill="#495057"
                fontFamily="Arial, sans-serif"
              >
                {d.label}
              </text>
            </g>
          );
        })}

        {/* Y-axis label */}
        {yLabel && (
          <text
            x={-innerHeight / 2}
            y={-35}
            fontSize="10"
            textAnchor="middle"
            fill="#212529"
            fontFamily="Arial, sans-serif"
            transform="rotate(-90)"
          >
            {yLabel}
          </text>
        )}
      </g>
    </svg>
  );
};

// SAT-Style Two-Way Table Diagram (for multi-column tables like probability questions)
export const TwoWayTableDiagram = ({ headers = [], rows = [], title = "" }) => {
  const cellWidth = 60;
  const firstColWidth = 70;
  const cellHeight = 32;
  const headerHeight = 36;
  const tableWidth = firstColWidth + (headers.length - 1) * cellWidth;
  const tableHeight = headerHeight + rows.length * cellHeight;

  return (
    <svg
      width={tableWidth + 4}
      height={tableHeight + 4}
      viewBox={`0 0 ${tableWidth + 4} ${tableHeight + 4}`}
      style={{
        background: '#ffffff'
      }}
    >
      {/* Table border */}
      <rect
        x="2"
        y="2"
        width={tableWidth}
        height={tableHeight}
        fill="none"
        stroke={SAT_DIAGRAM.tableBorder}
        strokeWidth="1.5"
      />

      {/* Header row background */}
      <rect
        x="2"
        y="2"
        width={tableWidth}
        height={headerHeight}
        fill="#f8f9fa"
        stroke="none"
      />

      {/* Vertical dividers */}
      <line
        x1={2 + firstColWidth}
        y1="2"
        x2={2 + firstColWidth}
        y2={tableHeight + 2}
        stroke={SAT_DIAGRAM.tableBorder}
        strokeWidth="1"
      />
      {headers.slice(2).map((_, i) => (
        <line
          key={`vd${i}`}
          x1={2 + firstColWidth + (i + 1) * cellWidth}
          y1="2"
          x2={2 + firstColWidth + (i + 1) * cellWidth}
          y2={tableHeight + 2}
          stroke="#e5e7eb"
          strokeWidth="1"
        />
      ))}

      {/* Horizontal line under header */}
      <line
        x1="2"
        y1={2 + headerHeight}
        x2={tableWidth + 2}
        y2={2 + headerHeight}
        stroke={SAT_DIAGRAM.tableBorder}
        strokeWidth="1.5"
      />

      {/* Header text */}
      {headers.map((header, i) => {
        const x = i === 0
          ? 2 + firstColWidth / 2
          : 2 + firstColWidth + (i - 0.5) * cellWidth;
        return (
          <text
            key={`h${i}`}
            x={x}
            y={2 + headerHeight / 2 + 5}
            fontSize="12"
            fontWeight="600"
            textAnchor="middle"
            fill="#212529"
            fontFamily="Arial, sans-serif"
          >
            {header}
          </text>
        );
      })}

      {/* Data rows */}
      {rows.map((row, rowIndex) => {
        const rowY = 2 + headerHeight + rowIndex * cellHeight;
        const isLastRow = rowIndex === rows.length - 1;
        return (
          <g key={rowIndex}>
            {/* Horizontal line between rows */}
            {rowIndex > 0 && (
              <line
                x1="2"
                y1={rowY}
                x2={tableWidth + 2}
                y2={rowY}
                stroke={isLastRow ? SAT_DIAGRAM.tableBorder : "#e5e7eb"}
                strokeWidth={isLastRow ? "1" : "1"}
              />
            )}
            {/* Row cells */}
            {row.map((cell, colIndex) => {
              const x = colIndex === 0
                ? 2 + firstColWidth / 2
                : 2 + firstColWidth + (colIndex - 0.5) * cellWidth;
              return (
                <text
                  key={`c${rowIndex}-${colIndex}`}
                  x={x}
                  y={rowY + cellHeight / 2 + 5}
                  fontSize="12"
                  fontWeight={colIndex === 0 || isLastRow ? "600" : "400"}
                  textAnchor="middle"
                  fill="#212529"
                  fontFamily="Arial, sans-serif"
                >
                  {cell}
                </text>
              );
            })}
          </g>
        );
      })}
    </svg>
  );
};

// SAT-Style Parallel Lines with Transversal Diagram
export const ParallelLinesDiagram = ({ angles = {}, lineLabels = { m: "m", n: "n" } }) => {
  const size = 280;
  const margin = 30;

  // Parallel lines positions
  const line1Y = size * 0.35;
  const line2Y = size * 0.65;

  // Transversal crosses both lines
  const transStartX = margin + 30;
  const transEndX = size - margin - 30;
  const transStartY = margin;
  const transEndY = size - margin;

  // Calculate intersection points
  const slope = (transEndY - transStartY) / (transEndX - transStartX);
  const intersect1X = transStartX + (line1Y - transStartY) / slope;
  const intersect2X = transStartX + (line2Y - transStartY) / slope;

  return (
    <svg
      width={size}
      height={size}
      style={{
        background: '#ffffff',
        border: '1px solid #d1d5db'
      }}
    >
      {/* Parallel line m */}
      <line
        x1={margin}
        y1={line1Y}
        x2={size - margin}
        y2={line1Y}
        stroke="#212529"
        strokeWidth="1.5"
      />
      <text
        x={size - margin + 8}
        y={line1Y + 5}
        fontSize="14"
        fontStyle="italic"
        fill="#212529"
        fontFamily="Times New Roman, serif"
      >
        {lineLabels.m}
      </text>

      {/* Parallel line n */}
      <line
        x1={margin}
        y1={line2Y}
        x2={size - margin}
        y2={line2Y}
        stroke="#212529"
        strokeWidth="1.5"
      />
      <text
        x={size - margin + 8}
        y={line2Y + 5}
        fontSize="14"
        fontStyle="italic"
        fill="#212529"
        fontFamily="Times New Roman, serif"
      >
        {lineLabels.n}
      </text>

      {/* Transversal */}
      <line
        x1={transStartX}
        y1={transStartY}
        x2={transEndX}
        y2={transEndY}
        stroke="#212529"
        strokeWidth="1.5"
      />

      {/* Angle labels at intersection with line m */}
      {angles.x && (
        <text
          x={intersect1X + 15}
          y={line1Y - 10}
          fontSize="14"
          fontStyle="italic"
          fill="#212529"
          fontFamily="Times New Roman, serif"
        >
          x°
        </text>
      )}
      {angles.y && (
        <text
          x={intersect1X - 25}
          y={line1Y + 20}
          fontSize="14"
          fontStyle="italic"
          fill="#212529"
          fontFamily="Times New Roman, serif"
        >
          y°
        </text>
      )}

      {/* Angle labels at intersection with line n */}
      {angles.z && (
        <text
          x={intersect2X + 15}
          y={line2Y - 10}
          fontSize="14"
          fontStyle="italic"
          fill="#212529"
          fontFamily="Times New Roman, serif"
        >
          z°
        </text>
      )}

      {/* Parallel marks (arrows) */}
      <text x={margin + 40} y={line1Y - 5} fontSize="12" fill="#212529">›</text>
      <text x={margin + 50} y={line1Y - 5} fontSize="12" fill="#212529">›</text>
      <text x={margin + 40} y={line2Y - 5} fontSize="12" fill="#212529">›</text>
      <text x={margin + 50} y={line2Y - 5} fontSize="12" fill="#212529">›</text>
    </svg>
  );
};

// SAT-Style Two Lines System Diagram (for systems of equations)
// Supports both slope/intercept and points-based line definitions
export const TwoLineSystemDiagram = ({ line1 = {}, line2 = {}, intersection = null, xRange = [-6, 6], yRange = [-6, 6], showIntersection = true }) => {
  const [xMin, xMax] = xRange;
  const [yMin, yMax] = yRange;

  // Helper function to get line endpoints from either slope/intercept or points
  const getLineEndpoints = (line, xMin, xMax) => {
    if (line.points && line.points.length >= 2) {
      // Calculate slope and intercept from two points
      const [x1, y1] = line.points[0];
      const [x2, y2] = line.points[1];
      const slope = (y2 - y1) / (x2 - x1);
      const intercept = y1 - slope * x1;
      return {
        y1: slope * xMin + intercept,
        y2: slope * xMax + intercept
      };
    } else {
      // Use slope and intercept directly
      const { slope = 0, yIntercept = 0 } = line;
      return {
        y1: slope * xMin + yIntercept,
        y2: slope * xMax + yIntercept
      };
    }
  };

  const line1Endpoints = getLineEndpoints(line1, xMin, xMax);
  const line2Endpoints = getLineEndpoints(line2, xMin, xMax);

  return (
    <svg
      width="320"
      height="280"
      viewBox={`${xMin - 1.5} ${-yMax - 1.5} ${xMax - xMin + 3} ${yMax - yMin + 3}`}
      style={{
        background: '#ffffff',
        border: '1px solid #d1d5db'
      }}
    >
      {/* Grid */}
      {Array.from({ length: Math.ceil((xMax - xMin) / 2) + 1 }, (_, i) => xMin + i * 2)
        .filter(x => x !== 0 && x >= xMin && x <= xMax)
        .map(x => (
          <line key={`v${x}`} x1={x} y1={-yMax} x2={x} y2={-yMin} stroke="#f0f0f0" strokeWidth="0.03" />
        ))}
      {Array.from({ length: Math.ceil((yMax - yMin) / 2) + 1 }, (_, i) => yMin + i * 2)
        .filter(y => y !== 0 && y >= yMin && y <= yMax)
        .map(y => (
          <line key={`h${y}`} x1={xMin} y1={-y} x2={xMax} y2={-y} stroke="#f0f0f0" strokeWidth="0.03" />
        ))}

      {/* X-axis */}
      <line x1={xMin - 0.5} y1="0" x2={xMax + 0.8} y2="0" stroke="#212529" strokeWidth="0.08" />
      <polygon points={`${xMax + 0.8},0 ${xMax + 0.55},0.18 ${xMax + 0.55},-0.18`} fill="#212529" />

      {/* Y-axis */}
      <line x1="0" y1={-yMin + 0.5} x2="0" y2={-yMax - 0.8} stroke="#212529" strokeWidth="0.08" />
      <polygon points={`0,${-yMax - 0.8} 0.18,${-yMax - 0.55} -0.18,${-yMax - 0.55}`} fill="#212529" />

      {/* Tick marks */}
      {[-4, -2, 2, 4].filter(x => x >= xMin && x <= xMax).map(x => (
        <g key={`tx${x}`}>
          <line x1={x} y1="-0.15" x2={x} y2="0.15" stroke="#212529" strokeWidth="0.06" />
          <text x={x} y="0.7" fontSize="0.5" textAnchor="middle" fill="#495057" fontFamily="Arial, sans-serif">{x}</text>
        </g>
      ))}
      {[-4, -2, 2, 4].filter(y => y >= yMin && y <= yMax).map(y => (
        <g key={`ty${y}`}>
          <line x1="-0.15" y1={-y} x2="0.15" y2={-y} stroke="#212529" strokeWidth="0.06" />
          <text x="-0.45" y={-y + 0.18} fontSize="0.5" textAnchor="end" fill="#495057" fontFamily="Arial, sans-serif">{y}</text>
        </g>
      ))}

      {/* Origin */}
      <text x="-0.4" y="0.7" fontSize="0.5" fill="#495057" fontFamily="Arial, sans-serif">O</text>

      {/* Line 1 */}
      <line
        x1={xMin}
        y1={-Math.max(yMin, Math.min(yMax, line1Endpoints.y1))}
        x2={xMax}
        y2={-Math.max(yMin, Math.min(yMax, line1Endpoints.y2))}
        stroke="#212529"
        strokeWidth="0.1"
      />

      {/* Line 2 */}
      <line
        x1={xMin}
        y1={-Math.max(yMin, Math.min(yMax, line2Endpoints.y1))}
        x2={xMax}
        y2={-Math.max(yMin, Math.min(yMax, line2Endpoints.y2))}
        stroke="#212529"
        strokeWidth="0.1"
      />

      {/* Intersection point */}
      {intersection && (
        <g>
          <circle cx={intersection[0]} cy={-intersection[1]} r="0.2" fill="#c92a2a" />
          <text
            x={intersection[0] + 0.5}
            y={-intersection[1] - 0.4}
            fontSize="0.5"
            fill="#212529"
            fontFamily="Arial, sans-serif"
            fontWeight="500"
          >
            ({intersection[0]}, {intersection[1]})
          </text>
        </g>
      )}

      {/* Axis labels */}
      <text x={xMax + 0.4} y="-0.4" fontSize="0.6" fill="#212529" fontFamily="Times New Roman, serif" fontStyle="italic">x</text>
      <text x="0.4" y={-yMax - 0.2} fontSize="0.6" fill="#212529" fontFamily="Times New Roman, serif" fontStyle="italic">y</text>
    </svg>
  );
};

// SAT-Style Triangle Geometry Diagram
export const TriangleGeometryDiagram = ({ vertices = ["A", "B", "C"], rightAngle = "", altitude = null }) => {
  const size = 280;
  const margin = 40;

  // Default triangle positions
  const positions = {
    A: { x: margin, y: size - margin },
    B: { x: size / 2, y: margin + 20 },
    C: { x: size - margin, y: size - margin }
  };

  // Calculate D if altitude exists (foot of altitude on AC)
  let altitudePoint = null;
  if (altitude && altitude.from && altitude.to && altitude.on) {
    // D is on AC, positioned roughly in the middle-ish
    altitudePoint = {
      x: positions.A.x + (positions.C.x - positions.A.x) * 0.45,
      y: positions.A.y
    };
  }

  return (
    <svg
      width={size}
      height={size}
      style={{
        background: '#ffffff',
        border: '1px solid #d1d5db'
      }}
    >
      {/* Triangle sides */}
      <line x1={positions.A.x} y1={positions.A.y} x2={positions.B.x} y2={positions.B.y} stroke="#212529" strokeWidth="1.5" />
      <line x1={positions.B.x} y1={positions.B.y} x2={positions.C.x} y2={positions.C.y} stroke="#212529" strokeWidth="1.5" />
      <line x1={positions.C.x} y1={positions.C.y} x2={positions.A.x} y2={positions.A.y} stroke="#212529" strokeWidth="1.5" />

      {/* Altitude line if exists */}
      {altitudePoint && (
        <line
          x1={positions.B.x}
          y1={positions.B.y}
          x2={altitudePoint.x}
          y2={altitudePoint.y}
          stroke="#212529"
          strokeWidth="1"
          strokeDasharray="4,2"
        />
      )}

      {/* Right angle marker - larger, cleaner square */}
      {rightAngle && (
        <rect
          x={positions[rightAngle].x - 10}
          y={positions[rightAngle].y - 10}
          width="10"
          height="10"
          fill="none"
          stroke="#212529"
          strokeWidth="0.75"
        />
      )}

      {/* Vertex labels */}
      {vertices.map(v => {
        const pos = positions[v];
        if (!pos) return null;
        return (
          <text
            key={v}
            x={pos.x + (v === 'B' ? 0 : v === 'A' ? -12 : 12)}
            y={pos.y + (v === 'B' ? -8 : 16)}
            fontSize="14"
            fontWeight="600"
            textAnchor="middle"
            fill="#212529"
            fontFamily="Arial, sans-serif"
          >
            {v}
          </text>
        );
      })}

      {/* Altitude point label (D) */}
      {altitudePoint && altitude.to && (
        <text
          x={altitudePoint.x}
          y={altitudePoint.y + 18}
          fontSize="14"
          fontWeight="600"
          textAnchor="middle"
          fill="#212529"
          fontFamily="Arial, sans-serif"
        >
          {altitude.to}
        </text>
      )}
    </svg>
  );
};

// SAT-Style Linear Graph (for function graphs)
export const LinearGraphDiagram = ({ slope, yIntercept, xRange = [-10, 10], yRange = [-10, 10], showPoints = [], label = "g(x)", axisLabels = {} }) => {
  const [xMin, xMax] = xRange;
  const [yMin, yMax] = yRange;

  // Calculate line endpoints
  const y1 = slope * xMin + yIntercept;
  const y2 = slope * xMax + yIntercept;

  return (
    <svg
      width="320"
      height="280"
      viewBox={`${xMin - 1.5} ${-yMax - 1.5} ${xMax - xMin + 3} ${yMax - yMin + 3}`}
      style={{
        background: '#ffffff',
        border: '1px solid #d1d5db'
      }}
    >
      {/* Grid */}
      {Array.from({ length: Math.ceil((xMax - xMin) / 2) + 1 }, (_, i) => xMin + i * 2).filter(x => x !== 0 && x >= xMin && x <= xMax).map(x => (
        <line key={`v${x}`} x1={x} y1={-yMax} x2={x} y2={-yMin} stroke="#f0f0f0" strokeWidth="0.03" />
      ))}
      {Array.from({ length: Math.ceil((yMax - yMin) / 2) + 1 }, (_, i) => yMin + i * 2).filter(y => y !== 0 && y >= yMin && y <= yMax).map(y => (
        <line key={`h${y}`} x1={xMin} y1={-y} x2={xMax} y2={-y} stroke="#f0f0f0" strokeWidth="0.03" />
      ))}

      {/* X-axis */}
      <line x1={xMin - 0.5} y1="0" x2={xMax + 0.8} y2="0" stroke="#212529" strokeWidth="0.08" />
      <polygon points={`${xMax + 0.8},0 ${xMax + 0.55},0.18 ${xMax + 0.55},-0.18`} fill="#212529" />

      {/* Y-axis */}
      <line x1="0" y1={-yMin + 0.5} x2="0" y2={-yMax - 0.8} stroke="#212529" strokeWidth="0.08" />
      <polygon points={`0,${-yMax - 0.8} 0.18,${-yMax - 0.55} -0.18,${-yMax - 0.55}`} fill="#212529" />

      {/* Tick marks */}
      {[-5, 5].map(x => (
        <g key={`tx${x}`}>
          <line x1={x} y1="-0.15" x2={x} y2="0.15" stroke="#212529" strokeWidth="0.06" />
          <text x={x} y="0.85" fontSize="0.6" textAnchor="middle" fill="#495057" fontFamily="Arial, sans-serif">{x}</text>
        </g>
      ))}
      {[-5, 5].map(y => (
        <g key={`ty${y}`}>
          <line x1="-0.15" y1={-y} x2="0.15" y2={-y} stroke="#212529" strokeWidth="0.06" />
          <text x="-0.5" y={-y + 0.2} fontSize="0.6" textAnchor="end" fill="#495057" fontFamily="Arial, sans-serif">{y}</text>
        </g>
      ))}

      {/* Line */}
      <line x1={xMin} y1={-y1} x2={xMax} y2={-y2} stroke="#000000" strokeWidth="0.1" />

      {/* Points */}
      {showPoints.map(([px, py], i) => (
        <circle key={i} cx={px} cy={-py} r="0.18" fill="#000000" />
      ))}

      {/* Label */}
      <text x={xMax - 1} y={-yMax + 0.8} fontSize="0.6" fill="#000000" fontFamily="Times New Roman, serif" fontStyle="italic">{label}</text>
    </svg>
  );
};

// Main QuestionDiagram component that switches based on type
const QuestionDiagram = ({ type, params }) => {
  switch (type) {
    // Legacy components (kept for backward compatibility)
    case 'rationalFunction':
      return <RationalFunctionDiagram {...params} />;
    case 'absoluteValue':
      return <AbsoluteValueDiagram {...params} />;
    case 'coordinatePoints':
      return <CoordinatePointsDiagram {...params} />;
    case 'quadraticIntercepts':
      return <QuadraticInterceptsDiagram {...params} />;
    case 'linearLine':
      return <LinearLineDiagram {...params} />;

    // SAT-style graph components (primary)
    case 'linearGraph':
    case 'simpleLine':
    case 'satLinearGraph':
      return <SATLinearGraph {...params} />;

    case 'twoLineSystem':
    case 'twoLineGraph':
    case 'satTwoLineGraph':
      return <SATTwoLineGraph {...params} />;

    case 'scatterplot':
    case 'satScatterplot':
      return <SATScatterplot {...params} />;

    case 'quadraticVertex':
    case 'parabola':
    case 'satParabola':
      return <SATParabola {...params} />;

    case 'lineGraph':
    case 'satLineGraph':
      return <SATLineGraph {...params} />;

    // New SAT-style components
    case 'barChart':
    case 'bar-graph':
      return <SATBarChart {...params} />;

    case 'dotPlot':
      return <SATDotPlot {...params} />;

    case 'table':
    case 'twoWayTable':
      return <SATTable {...params} />;

    case 'piecewiseLinear':
      return <SATPiecewiseLinear {...params} />;

    case 'cubicGraph':
      return <SATCubicGraph {...params} />;

    // Parallel and intersecting lines
    case 'parallelLines':
      return <SATParallelLines {...params} />;

    case 'intersecting-lines':
    case 'intersectingLines':
      return <SATIntersectingLines {...params} />;

    // Circle diagrams
    case 'circleWithSector':
    case 'circle-sector':
      return <CircleWithSector {...params} />;

    case 'circleWithSquare':
    case 'square-in-circle':
      return <CircleWithSquare {...params} />;

    case 'circleInscribed':
    case 'circleGeometry':
      return <CircleInscribed {...params} />;

    // Triangle diagrams
    case 'rightTriangle':
    case 'triangle':
      return <RightTriangle {...params} />;

    case 'triangleWithAngles':
      return <TriangleWithAngles {...params} />;

    case 'rightTriangleWithAltitude':
    case 'right-triangle-altitude':
      return <RightTriangleWithAltitude {...params} />;

    case 'similarTriangles':
      return <SimilarTriangles {...params} />;

    default:
      // Try to render as legacy component if available
      console.warn(`Unknown diagram type: ${type}`);
      return null;
  }
};

export default QuestionDiagram;
