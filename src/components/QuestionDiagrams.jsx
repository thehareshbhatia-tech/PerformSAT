import React from 'react';

/**
 * Professional SAT-style SVG diagram components for practice questions
 * These render mathematical graphs that match the College Board SAT format
 */

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
        borderRadius: '4px',
        border: '2px solid #343a40'
      }}
    >
      {/* Background */}
      <rect x="-8" y="-9.5" width="16" height="14" fill="#ffffff" />

      {/* Grid lines - lighter secondary grid */}
      {[-6, -4, -2, 2, 4, 6].map(x => (
        <line
          key={`v${x}`}
          x1={x} y1={-yMax - 0.5} x2={x} y2={-yMin + 0.5}
          stroke="#e9ecef"
          strokeWidth="0.05"
        />
      ))}
      {[-2, 2, 4, 6].map(y => (
        <line
          key={`h${y}`}
          x1={xMin - 0.5} y1={-y} x2={xMax + 0.5} y2={-y}
          stroke="#e9ecef"
          strokeWidth="0.05"
        />
      ))}

      {/* Main X-axis - thick black */}
      <line
        x1={xMin - 0.8} y1="0" x2={xMax + 0.8} y2="0"
        stroke="#212529"
        strokeWidth="0.12"
      />
      {/* X-axis arrow */}
      <polygon points={`${xMax + 0.8},0 ${xMax + 0.5},0.2 ${xMax + 0.5},-0.2`} fill="#212529" />

      {/* Main Y-axis - thick black */}
      <line
        x1="0" y1={-yMin + 0.8} x2="0" y2={-yMax - 0.8}
        stroke="#212529"
        strokeWidth="0.12"
      />
      {/* Y-axis arrow */}
      <polygon points={`0,${-yMax - 0.8} 0.2,${-yMax - 0.5} -0.2,${-yMax - 0.5}`} fill="#212529" />

      {/* Tick marks with numbers - X axis */}
      {[-6, -4, -2, 2, 4, 6].map(x => (
        <g key={`tx${x}`}>
          <line x1={x} y1="-0.2" x2={x} y2="0.2" stroke="#212529" strokeWidth="0.1" />
          <text
            x={x}
            y="0.9"
            fontSize="0.6"
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
          <line x1="-0.2" y1={-y} x2="0.2" y2={-y} stroke="#212529" strokeWidth="0.1" />
          <text
            x="-0.6"
            y={-y + 0.2}
            fontSize="0.6"
            textAnchor="end"
            fill="#495057"
            fontFamily="Arial, sans-serif"
          >
            {y}
          </text>
        </g>
      ))}

      {/* Origin O label */}
      <text x="-0.5" y="0.9" fontSize="0.6" fill="#495057" fontFamily="Arial, sans-serif">O</text>

      {/* Vertical asymptote - dashed gray line */}
      <line
        x1={asymptote} y1={-yMin + 0.5} x2={asymptote} y2={-yMax - 0.5}
        stroke="#868e96"
        strokeWidth="0.08"
        strokeDasharray="0.4,0.2"
      />

      {/* Function curve - thick dark blue */}
      <path
        d={curvePath}
        fill="none"
        stroke="#1864ab"
        strokeWidth="0.18"
        strokeLinecap="round"
      />

      {/* Marked points - solid dots with coordinates */}
      {showPoints.map(([px, py], i) => (
        <g key={i}>
          <circle
            cx={px}
            cy={-py}
            r="0.28"
            fill="#1864ab"
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

      {/* Function label */}
      <text
        x={xMax - 1.5}
        y={-yMax + 0.5}
        fontSize="0.6"
        fill="#1864ab"
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
        borderRadius: '4px',
        border: '2px solid #343a40'
      }}
    >
      {/* Grid lines */}
      {[-6, -4, -2, 2, 4, 6].map(x => (
        <line key={`v${x}`} x1={x} y1={-yMax - 0.5} x2={x} y2={-yMin + 0.5} stroke="#e9ecef" strokeWidth="0.05" />
      ))}
      {[-4, -2, 2, 4].map(y => (
        <line key={`h${y}`} x1={xMin - 0.5} y1={-y} x2={xMax + 0.5} y2={-y} stroke="#e9ecef" strokeWidth="0.05" />
      ))}

      {/* Axes */}
      <line x1={xMin - 0.8} y1="0" x2={xMax + 0.8} y2="0" stroke="#212529" strokeWidth="0.12" />
      <polygon points={`${xMax + 0.8},0 ${xMax + 0.5},0.2 ${xMax + 0.5},-0.2`} fill="#212529" />
      <line x1="0" y1={-yMin + 0.8} x2="0" y2={-yMax - 0.8} stroke="#212529" strokeWidth="0.12" />
      <polygon points={`0,${-yMax - 0.8} 0.2,${-yMax - 0.5} -0.2,${-yMax - 0.5}`} fill="#212529" />

      {/* Tick marks with numbers */}
      {[-6, -4, -2, 2, 4, 6].map(x => (
        <g key={`tx${x}`}>
          <line x1={x} y1="-0.2" x2={x} y2="0.2" stroke="#212529" strokeWidth="0.1" />
          <text x={x} y="0.9" fontSize="0.6" textAnchor="middle" fill="#495057" fontFamily="Arial, sans-serif">{x}</text>
        </g>
      ))}
      {[-4, -2, 2, 4].map(y => (
        <g key={`ty${y}`}>
          <line x1="-0.2" y1={-y} x2="0.2" y2={-y} stroke="#212529" strokeWidth="0.1" />
          <text x="-0.6" y={-y + 0.2} fontSize="0.6" textAnchor="end" fill="#495057" fontFamily="Arial, sans-serif">{y}</text>
        </g>
      ))}
      <text x="-0.5" y="0.9" fontSize="0.6" fill="#495057" fontFamily="Arial, sans-serif">O</text>

      {/* Parabola curve */}
      <path d={pathD} fill="none" stroke="#1864ab" strokeWidth="0.18" strokeLinecap="round" />

      {/* Vertex point */}
      {showVertex && (
        <g>
          <circle cx={h} cy={-k} r="0.28" fill="#c92a2a" />
          <text
            x={h + 0.5}
            y={-k + (k < 0 ? -0.5 : 0.8)}
            fontSize="0.55"
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
          <circle cx={px} cy={-py} r="0.25" fill="#1864ab" />
          <text x={px + 0.4} y={-py - 0.3} fontSize="0.5" fill="#212529" fontFamily="Arial, sans-serif">({px}, {py})</text>
        </g>
      ))}

      {/* Axis labels */}
      <text x={xMax + 0.5} y="-0.5" fontSize="0.7" fill="#212529" fontFamily="Times New Roman, serif" fontStyle="italic">x</text>
      <text x="0.5" y={-yMax - 0.3} fontSize="0.7" fill="#212529" fontFamily="Times New Roman, serif" fontStyle="italic">y</text>
      <text x={xMax - 1.5} y={-yMax + 0.5} fontSize="0.6" fill="#1864ab" fontFamily="Times New Roman, serif" fontStyle="italic">y = f(x)</text>
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
        borderRadius: '4px',
        border: '2px solid #343a40'
      }}
    >
      {/* Grid */}
      {[-6, -4, -2, 2, 4, 6].map(x => (
        <line key={`v${x}`} x1={x} y1={-yMax - 0.5} x2={x} y2={-yMin + 0.5} stroke="#e9ecef" strokeWidth="0.05" />
      ))}
      {[-4, -2, 2, 4].map(y => (
        <line key={`h${y}`} x1={xMin - 0.5} y1={-y} x2={xMax + 0.5} y2={-y} stroke="#e9ecef" strokeWidth="0.05" />
      ))}

      {/* Axes */}
      <line x1={xMin - 0.8} y1="0" x2={xMax + 0.8} y2="0" stroke="#212529" strokeWidth="0.12" />
      <polygon points={`${xMax + 0.8},0 ${xMax + 0.5},0.2 ${xMax + 0.5},-0.2`} fill="#212529" />
      <line x1="0" y1={-yMin + 0.8} x2="0" y2={-yMax - 0.8} stroke="#212529" strokeWidth="0.12" />
      <polygon points={`0,${-yMax - 0.8} 0.2,${-yMax - 0.5} -0.2,${-yMax - 0.5}`} fill="#212529" />

      {/* Tick marks */}
      {[-6, -4, -2, 2, 4, 6].map(x => (
        <g key={`tx${x}`}>
          <line x1={x} y1="-0.2" x2={x} y2="0.2" stroke="#212529" strokeWidth="0.1" />
          <text x={x} y="0.9" fontSize="0.6" textAnchor="middle" fill="#495057" fontFamily="Arial, sans-serif">{x}</text>
        </g>
      ))}
      {[-4, -2, 2, 4].map(y => (
        <g key={`ty${y}`}>
          <line x1="-0.2" y1={-y} x2="0.2" y2={-y} stroke="#212529" strokeWidth="0.1" />
          <text x="-0.6" y={-y + 0.2} fontSize="0.6" textAnchor="end" fill="#495057" fontFamily="Arial, sans-serif">{y}</text>
        </g>
      ))}
      <text x="-0.5" y="0.9" fontSize="0.6" fill="#495057" fontFamily="Arial, sans-serif">O</text>

      {/* V-shape: left arm */}
      <line
        x1={leftEndX} y1={-Math.min(leftEndY, yMax)}
        x2={h} y2={-k}
        stroke="#1864ab" strokeWidth="0.18" strokeLinecap="round"
      />

      {/* V-shape: right arm */}
      <line
        x1={h} y1={-k}
        x2={rightEndX} y2={-Math.min(rightEndY, yMax)}
        stroke="#1864ab" strokeWidth="0.18" strokeLinecap="round"
      />

      {/* Vertex */}
      <circle cx={h} cy={-k} r="0.28" fill="#c92a2a" />
      <text
        x={h + 0.5}
        y={-k + (k < 0 ? -0.5 : 0.8)}
        fontSize="0.55"
        fill="#212529"
        fontFamily="Arial, sans-serif"
        fontWeight="500"
      >
        ({h}, {k})
      </text>

      {/* Additional points */}
      {showPoints.map(([px, py], i) => (
        <g key={i}>
          <circle cx={px} cy={-py} r="0.25" fill="#1864ab" />
        </g>
      ))}

      {/* Labels */}
      <text x={xMax + 0.5} y="-0.5" fontSize="0.7" fill="#212529" fontFamily="Times New Roman, serif" fontStyle="italic">x</text>
      <text x="0.5" y={-yMax - 0.3} fontSize="0.7" fill="#212529" fontFamily="Times New Roman, serif" fontStyle="italic">y</text>
      <text x={xMax - 1.5} y={-yMax + 0.5} fontSize="0.6" fill="#1864ab" fontFamily="Times New Roman, serif" fontStyle="italic">y = f(x)</text>
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
        borderRadius: '4px',
        border: '2px solid #343a40'
      }}
    >
      {/* Grid */}
      {[2, 4, 6].map(x => (
        <line key={`v${x}`} x1={x} y1={-yMax - 0.5} x2={x} y2={-yMin + 0.5} stroke="#e9ecef" strokeWidth="0.05" />
      ))}
      {[2, 4, 6, 8, 10].map(y => (
        <line key={`h${y}`} x1={xMin - 0.5} y1={-y} x2={xMax + 0.5} y2={-y} stroke="#e9ecef" strokeWidth="0.05" />
      ))}

      {/* Axes */}
      <line x1={xMin - 0.8} y1="0" x2={xMax + 0.8} y2="0" stroke="#212529" strokeWidth="0.12" />
      <polygon points={`${xMax + 0.8},0 ${xMax + 0.5},0.2 ${xMax + 0.5},-0.2`} fill="#212529" />
      <line x1="0" y1={-yMin + 0.8} x2="0" y2={-yMax - 0.8} stroke="#212529" strokeWidth="0.12" />
      <polygon points={`0,${-yMax - 0.8} 0.2,${-yMax - 0.5} -0.2,${-yMax - 0.5}`} fill="#212529" />

      {/* Tick marks */}
      {[2, 4, 6].map(x => (
        <g key={`tx${x}`}>
          <line x1={x} y1="-0.2" x2={x} y2="0.2" stroke="#212529" strokeWidth="0.1" />
          <text x={x} y="0.9" fontSize="0.6" textAnchor="middle" fill="#495057" fontFamily="Arial, sans-serif">{x}</text>
        </g>
      ))}
      {[2, 4, 6, 8, 10].map(y => (
        <g key={`ty${y}`}>
          <line x1="-0.2" y1={-y} x2="0.2" y2={-y} stroke="#212529" strokeWidth="0.1" />
          <text x="-0.6" y={-y + 0.2} fontSize="0.6" textAnchor="end" fill="#495057" fontFamily="Arial, sans-serif">{y}</text>
        </g>
      ))}
      <text x="-0.5" y="0.9" fontSize="0.6" fill="#495057" fontFamily="Arial, sans-serif">O</text>

      {/* Points */}
      {points.map(([px, py], i) => (
        <g key={i}>
          <circle cx={px} cy={-py} r="0.32" fill="#1864ab" />
          <text
            x={px + 0.5}
            y={-py - 0.4}
            fontSize="0.6"
            fill="#212529"
            fontFamily="Arial, sans-serif"
            fontWeight="500"
          >
            ({px}, {py})
          </text>
        </g>
      ))}

      {/* Labels */}
      <text x={xMax + 0.5} y="-0.5" fontSize="0.7" fill="#212529" fontFamily="Times New Roman, serif" fontStyle="italic">x</text>
      <text x="0.5" y={-yMax - 0.3} fontSize="0.7" fill="#212529" fontFamily="Times New Roman, serif" fontStyle="italic">y</text>
      <text x={xMax - 2} y={-yMax + 0.5} fontSize="0.6" fill="#1864ab" fontFamily="Times New Roman, serif" fontStyle="italic">y = {label}(x)</text>
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
        borderRadius: '4px',
        border: '2px solid #343a40'
      }}
    >
      {/* Grid */}
      {[-2, 2, 4, 6].map(x => (
        <line key={`v${x}`} x1={x} y1={-yMax - 0.5} x2={x} y2={-yMin + 0.5} stroke="#e9ecef" strokeWidth="0.05" />
      ))}
      {[-4, -2, 2].map(y => (
        <line key={`h${y}`} x1={xMin - 0.5} y1={-y} x2={xMax + 0.5} y2={-y} stroke="#e9ecef" strokeWidth="0.05" />
      ))}

      {/* Axes */}
      <line x1={xMin - 0.8} y1="0" x2={xMax + 0.8} y2="0" stroke="#212529" strokeWidth="0.12" />
      <polygon points={`${xMax + 0.8},0 ${xMax + 0.5},0.2 ${xMax + 0.5},-0.2`} fill="#212529" />
      <line x1="0" y1={-yMin + 0.8} x2="0" y2={-yMax - 0.8} stroke="#212529" strokeWidth="0.12" />
      <polygon points={`0,${-yMax - 0.8} 0.2,${-yMax - 0.5} -0.2,${-yMax - 0.5}`} fill="#212529" />

      {/* Tick marks */}
      {[-2, 2, 4, 6].map(x => (
        <g key={`tx${x}`}>
          <line x1={x} y1="-0.2" x2={x} y2="0.2" stroke="#212529" strokeWidth="0.1" />
          <text x={x} y="0.8" fontSize="0.55" textAnchor="middle" fill="#495057" fontFamily="Arial, sans-serif">{x}</text>
        </g>
      ))}
      {[-4, -2, 2].map(y => (
        <g key={`ty${y}`}>
          <line x1="-0.2" y1={-y} x2="0.2" y2={-y} stroke="#212529" strokeWidth="0.1" />
          <text x="-0.5" y={-y + 0.2} fontSize="0.55" textAnchor="end" fill="#495057" fontFamily="Arial, sans-serif">{y}</text>
        </g>
      ))}
      <text x="-0.5" y="0.8" fontSize="0.55" fill="#495057" fontFamily="Arial, sans-serif">O</text>

      {/* Parabola */}
      <path d={pathD} fill="none" stroke="#1864ab" strokeWidth="0.18" strokeLinecap="round" />

      {/* X-intercepts - green dots */}
      <circle cx={x1} cy="0" r="0.28" fill="#2f9e44" />
      <text x={x1} y="1.1" fontSize="0.55" fill="#2f9e44" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="600">
        {x1}
      </text>

      <circle cx={x2} cy="0" r="0.28" fill="#2f9e44" />
      <text x={x2} y="1.1" fontSize="0.55" fill="#2f9e44" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="600">
        {x2}
      </text>

      {/* Labels */}
      <text x={xMax + 0.5} y="-0.5" fontSize="0.7" fill="#212529" fontFamily="Times New Roman, serif" fontStyle="italic">x</text>
      <text x="0.5" y={-yMax - 0.3} fontSize="0.7" fill="#212529" fontFamily="Times New Roman, serif" fontStyle="italic">y</text>
      <text x={xMax - 1.5} y={-yMax + 0.5} fontSize="0.6" fill="#1864ab" fontFamily="Times New Roman, serif" fontStyle="italic">y = f(x)</text>
    </svg>
  );
};

// Main QuestionDiagram component that switches based on type
const QuestionDiagram = ({ type, params }) => {
  switch (type) {
    case 'rationalFunction':
      return <RationalFunctionDiagram {...params} />;
    case 'quadraticVertex':
      return <QuadraticDiagram {...params} />;
    case 'absoluteValue':
      return <AbsoluteValueDiagram {...params} />;
    case 'coordinatePoints':
      return <CoordinatePointsDiagram {...params} />;
    case 'quadraticIntercepts':
      return <QuadraticInterceptsDiagram {...params} />;
    default:
      return null;
  }
};

export default QuestionDiagram;
