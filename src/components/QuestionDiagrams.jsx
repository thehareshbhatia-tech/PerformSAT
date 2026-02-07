import React from 'react';
import SATLinearGraph from './graphs/SATLinearGraph';
import SATParabola from './graphs/SATParabola';
import SATBarChart from './graphs/SATBarChart';
import { CircleWithSector, CircleWithSquare } from './graphs/SATCircleDiagrams';
import SATIntersectingLines from './graphs/SATIntersectingLines';
import SATPiecewiseLinear from './graphs/SATPiecewiseLinear';
import SATCubicGraph from './graphs/SATCubicGraph';
import SATParallelLines from './graphs/SATParallelLines';
import SATTwoLineGraph from './graphs/SATTwoLineGraph';
import SATTable from './graphs/SATTable';
import SATDotPlot from './graphs/SATDotPlot';

/**
 * Professional SAT-style SVG diagram components for practice questions
 * Matching Test Innovators style: gray background, white grid, -10 to 10 axes
 */

// =============================================================================
// SHARED GRID COMPONENT - Test Innovators Style
// =============================================================================
const SATGrid = ({
  size = 300,
  padding = 30,
  xMin = -10,
  xMax = 10,
  yMin = -10,
  yMax = 10,
  children
}) => {
  const gridArea = size - 2 * padding;
  const xRange = xMax - xMin;
  const yRange = yMax - yMin;
  const unitSizeX = gridArea / xRange;
  const unitSizeY = gridArea / yRange;

  // Convert math coords to SVG coords
  const toX = (x) => padding + (x - xMin) * unitSizeX;
  const toY = (y) => padding + (yMax - y) * unitSizeY;

  // Determine which labels to show (only major ones)
  const getXLabels = () => {
    if (xRange <= 12) return Array.from({ length: xRange + 1 }, (_, i) => xMin + i).filter(x => x !== 0 && x % 2 === 0);
    if (xRange <= 24) return Array.from({ length: xRange + 1 }, (_, i) => xMin + i).filter(x => x !== 0 && x % 5 === 0);
    return [xMin, Math.round(xMin/2), Math.round(xMax/2), xMax].filter(x => x !== 0);
  };

  const getYLabels = () => {
    if (yRange <= 12) return Array.from({ length: yRange + 1 }, (_, i) => yMin + i).filter(y => y !== 0 && y % 2 === 0);
    if (yRange <= 24) return Array.from({ length: yRange + 1 }, (_, i) => yMin + i).filter(y => y !== 0 && y % 5 === 0);
    return [yMin, Math.round(yMin/2), Math.round(yMax/2), yMax].filter(y => y !== 0);
  };

  return (
    <svg width={size} height={size} style={{ display: 'block', margin: '0 auto' }}>
      {/* Light gray background */}
      <rect x={padding} y={padding} width={gridArea} height={gridArea} fill="#e5e5e5" />

      {/* White grid lines - every unit */}
      {Array.from({ length: xRange + 1 }, (_, i) => xMin + i).map(n => (
        <line key={`v${n}`} x1={toX(n)} y1={padding} x2={toX(n)} y2={size - padding} stroke="white" strokeWidth="1" />
      ))}
      {Array.from({ length: yRange + 1 }, (_, i) => yMin + i).map(n => (
        <line key={`h${n}`} x1={padding} y1={toY(n)} x2={size - padding} y2={toY(n)} stroke="white" strokeWidth="1" />
      ))}

      {/* X-axis with arrow */}
      <line x1={padding - 10} y1={toY(0)} x2={size - padding + 10} y2={toY(0)} stroke="#444" strokeWidth="1.5" />
      <polygon points={`${size - padding + 18},${toY(0)} ${size - padding + 8},${toY(0) - 4} ${size - padding + 8},${toY(0) + 4}`} fill="#444" />

      {/* Y-axis with arrow */}
      <line x1={toX(0)} y1={size - padding + 10} x2={toX(0)} y2={padding - 10} stroke="#444" strokeWidth="1.5" />
      <polygon points={`${toX(0)},${padding - 18} ${toX(0) - 4},${padding - 8} ${toX(0) + 4},${padding - 8}`} fill="#444" />

      {/* Y label */}
      <text x={toX(0) + 8} y={padding - 10} fontSize="14" fontFamily="Times New Roman, serif" fontStyle="italic" fill="#333">y</text>

      {/* X-axis labels */}
      {getXLabels().map(x => (
        <text key={`xl${x}`} x={toX(x)} y={toY(0) + 15} fontSize="12" fontFamily="Arial, sans-serif" textAnchor="middle" fill="#333">{x}</text>
      ))}

      {/* Y-axis labels */}
      {getYLabels().map(y => (
        <text key={`yl${y}`} x={toX(0) - 5} y={toY(y) + 4} fontSize="12" fontFamily="Arial, sans-serif" textAnchor="end" fill="#333">{y}</text>
      ))}

      {/* Clip path for drawing inside grid only */}
      <defs>
        <clipPath id="gridClip">
          <rect x={padding} y={padding} width={gridArea} height={gridArea} />
        </clipPath>
      </defs>

      {/* Render children with coordinate conversion functions */}
      {typeof children === 'function' ? children({ toX, toY, padding, gridArea }) : children}
    </svg>
  );
};

// =============================================================================
// LINEAR FUNCTION DIAGRAM - y = mx + b
// =============================================================================
export const LinearFunctionGraphDiagram = ({ slope = 2, yIntercept = -4 }) => {
  const getY = (x) => slope * x + yIntercept;

  return (
    <SATGrid>
      {({ toX, toY }) => (
        <line
          x1={toX(-15)} y1={toY(getY(-15))}
          x2={toX(15)} y2={toY(getY(15))}
          stroke="#333" strokeWidth="2"
          clipPath="url(#gridClip)"
        />
      )}
    </SATGrid>
  );
};

// =============================================================================
// RATIONAL FUNCTION DIAGRAM - f(x) = a/(x+b) + c
// =============================================================================
export const RationalFunctionDiagram = ({ a = 6, b = 2, c = 0, xMin: domainMin, label, showPoints = [] }) => {
  const asymptote = -b;
  const xLo = domainMin !== undefined ? domainMin : -10;

  // Generate curve path
  const generatePath = (toX, toY) => {
    const step = 0.1;
    let leftPath = '';
    let rightPath = '';

    // Left of asymptote
    for (let x = xLo; x < asymptote - 0.3; x += step) {
      const y = a / (x + b) + c;
      if (y >= -10 && y <= 10) {
        if (!leftPath) leftPath = `M ${toX(x)} ${toY(y)}`;
        else leftPath += ` L ${toX(x)} ${toY(y)}`;
      }
    }

    // Right of asymptote
    const rightStart = Math.max(asymptote + 0.3, xLo);
    for (let x = rightStart; x <= 10; x += step) {
      const y = a / (x + b) + c;
      if (y >= -10 && y <= 10) {
        if (!rightPath) rightPath = `M ${toX(x)} ${toY(y)}`;
        else rightPath += ` L ${toX(x)} ${toY(y)}`;
      }
    }

    return leftPath + ' ' + rightPath;
  };

  return (
    <SATGrid>
      {({ toX, toY }) => (
        <g clipPath="url(#gridClip)">
          {/* Vertical asymptote dashed line (only if visible in domain) */}
          {asymptote >= xLo && (
            <line
              x1={toX(asymptote)} y1={toY(10)}
              x2={toX(asymptote)} y2={toY(-10)}
              stroke="#999" strokeWidth="1" strokeDasharray="5,5"
            />
          )}
          {/* Horizontal asymptote dashed line */}
          {c !== 0 && (
            <line
              x1={toX(xLo)} y1={toY(c)}
              x2={toX(10)} y2={toY(c)}
              stroke="#999" strokeWidth="1" strokeDasharray="5,5"
            />
          )}
          {/* Curve */}
          <path d={generatePath(toX, toY)} fill="none" stroke="#333" strokeWidth="2" />
          {/* Points */}
          {showPoints.map(([px, py], i) => (
            <circle key={i} cx={toX(px)} cy={toY(py)} r="5" fill="#333" />
          ))}
          {/* Label */}
          {label && (
            <text x={toX(8)} y={toY(c + 1.5)} fontFamily="Georgia, serif" fontSize="14" fontStyle="italic" fill="#333">
              {label}
            </text>
          )}
        </g>
      )}
    </SATGrid>
  );
};

// =============================================================================
// QUADRATIC DIAGRAM - y = a(x-h)² + k
// =============================================================================
export const QuadraticDiagram = ({ vertex = [0, 0], a = 0.5, showPoints = [], showVertex = true }) => {
  const [h, k] = vertex;

  const generatePath = (toX, toY) => {
    let path = '';
    for (let x = -10; x <= 10; x += 0.2) {
      const y = a * Math.pow(x - h, 2) + k;
      if (y >= -10 && y <= 10) {
        if (!path) path = `M ${toX(x)} ${toY(y)}`;
        else path += ` L ${toX(x)} ${toY(y)}`;
      }
    }
    return path;
  };

  return (
    <SATGrid>
      {({ toX, toY }) => (
        <g clipPath="url(#gridClip)">
          <path d={generatePath(toX, toY)} fill="none" stroke="#333" strokeWidth="2" />
          {showVertex && <circle cx={toX(h)} cy={toY(k)} r="5" fill="#333" />}
          {showPoints.map(([px, py], i) => (
            <circle key={i} cx={toX(px)} cy={toY(py)} r="5" fill="#333" />
          ))}
        </g>
      )}
    </SATGrid>
  );
};

// =============================================================================
// ABSOLUTE VALUE DIAGRAM - y = a|x-h| + k
// =============================================================================
export const AbsoluteValueDiagram = ({ vertex = [0, 0], slope = 1, showPoints = [] }) => {
  const [h, k] = vertex;

  return (
    <SATGrid>
      {({ toX, toY }) => (
        <g clipPath="url(#gridClip)">
          {/* Left arm */}
          <line
            x1={toX(-10)} y1={toY(k + slope * Math.abs(-10 - h))}
            x2={toX(h)} y2={toY(k)}
            stroke="#333" strokeWidth="2"
          />
          {/* Right arm */}
          <line
            x1={toX(h)} y1={toY(k)}
            x2={toX(10)} y2={toY(k + slope * Math.abs(10 - h))}
            stroke="#333" strokeWidth="2"
          />
          {/* Vertex */}
          <circle cx={toX(h)} cy={toY(k)} r="5" fill="#333" />
          {showPoints.map(([px, py], i) => (
            <circle key={i} cx={toX(px)} cy={toY(py)} r="5" fill="#333" />
          ))}
        </g>
      )}
    </SATGrid>
  );
};

// =============================================================================
// COORDINATE POINTS DIAGRAM - Just points on grid
// =============================================================================
export const CoordinatePointsDiagram = ({ points = [], xMin = -10, xMax = 10, yMin = -10, yMax = 10 }) => {
  return (
    <SATGrid xMin={xMin} xMax={xMax} yMin={yMin} yMax={yMax}>
      {({ toX, toY }) => (
        <g>
          {points.map(([px, py], i) => (
            <circle key={i} cx={toX(px)} cy={toY(py)} r="5" fill="#333" />
          ))}
        </g>
      )}
    </SATGrid>
  );
};

// =============================================================================
// QUADRATIC INTERCEPTS DIAGRAM - Parabola with x-intercepts marked
// =============================================================================
export const QuadraticInterceptsDiagram = ({ intercepts = [0, 4], vertex = null }) => {
  const [x1, x2] = intercepts;
  const h = (x1 + x2) / 2;
  const k = -0.3 * Math.pow((x2 - x1) / 2, 2);

  const generatePath = (toX, toY) => {
    let path = '';
    for (let x = -10; x <= 10; x += 0.2) {
      const y = 0.3 * (x - x1) * (x - x2);
      if (y >= -10 && y <= 10) {
        if (!path) path = `M ${toX(x)} ${toY(y)}`;
        else path += ` L ${toX(x)} ${toY(y)}`;
      }
    }
    return path;
  };

  return (
    <SATGrid>
      {({ toX, toY }) => (
        <g clipPath="url(#gridClip)">
          <path d={generatePath(toX, toY)} fill="none" stroke="#333" strokeWidth="2" />
          <circle cx={toX(x1)} cy={toY(0)} r="5" fill="#333" />
          <circle cx={toX(x2)} cy={toY(0)} r="5" fill="#333" />
        </g>
      )}
    </SATGrid>
  );
};

// =============================================================================
// SCATTERPLOT DIAGRAM - Points for best-fit questions
// =============================================================================
export const ScatterplotDiagram = ({ points = [], xMax = 10, yMax = 10, bestFitLine }) => {
  return (
    <SATGrid xMin={0} xMax={xMax} yMin={0} yMax={yMax}>
      {({ toX, toY }) => (
        <g>
          {bestFitLine && (
            <line
              x1={toX(0)}
              y1={toY(bestFitLine.intercept)}
              x2={toX(xMax)}
              y2={toY(bestFitLine.slope * xMax + bestFitLine.intercept)}
              stroke="#2563eb"
              strokeWidth={2}
              strokeDasharray="6,3"
            />
          )}
          {points.map(([px, py], i) => (
            <circle key={i} cx={toX(px)} cy={toY(py)} r="4" fill="#333" />
          ))}
        </g>
      )}
    </SATGrid>
  );
};

// =============================================================================
// LINEAR LINE DIAGRAM - Line through points
// =============================================================================
export const LinearLineDiagram = ({ points = [], xRange = [-10, 10], yRange = [-10, 10] }) => {
  const [xMin, xMax] = xRange;
  const [yMin, yMax] = yRange;

  let slope = 1, intercept = 0;
  if (points.length >= 2) {
    const [x1, y1] = points[0];
    const [x2, y2] = points[1];
    slope = (y2 - y1) / (x2 - x1);
    intercept = y1 - slope * x1;
  }

  const getY = (x) => slope * x + intercept;

  return (
    <SATGrid xMin={xMin} xMax={xMax} yMin={yMin} yMax={yMax}>
      {({ toX, toY }) => (
        <g clipPath="url(#gridClip)">
          <line
            x1={toX(xMin - 5)} y1={toY(getY(xMin - 5))}
            x2={toX(xMax + 5)} y2={toY(getY(xMax + 5))}
            stroke="#333" strokeWidth="2"
          />
          {points.map(([px, py], i) => (
            <circle key={i} cx={toX(px)} cy={toY(py)} r="5" fill="#333" />
          ))}
        </g>
      )}
    </SATGrid>
  );
};

// =============================================================================
// SIMPLE LINE DIAGRAM - Small coordinate system
// =============================================================================
export const SimpleLineDiagram = ({ points = [], xMax = 6, yMax = 12 }) => {
  let slope = 1, intercept = 0;
  if (points.length >= 2) {
    const [x1, y1] = points[0];
    const [x2, y2] = points[1];
    slope = (y2 - y1) / (x2 - x1);
    intercept = y1 - slope * x1;
  }

  const getY = (x) => slope * x + intercept;

  return (
    <SATGrid xMin={-1} xMax={xMax} yMin={-1} yMax={yMax}>
      {({ toX, toY }) => (
        <g clipPath="url(#gridClip)">
          <line
            x1={toX(-2)} y1={toY(getY(-2))}
            x2={toX(xMax + 2)} y2={toY(getY(xMax + 2))}
            stroke="#333" strokeWidth="2"
          />
          {points.map(([px, py], i) => (
            <circle key={i} cx={toX(px)} cy={toY(py)} r="5" fill="#333" />
          ))}
        </g>
      )}
    </SATGrid>
  );
};

// =============================================================================
// WAVY FUNCTION DIAGRAM - Cubic-like curve
// =============================================================================
export const WavyFunctionDiagram = ({ crossings = [-2, 1.5, 4.5], horizontalLine = 2.5 }) => {
  const generatePath = (toX, toY) => {
    let path = '';
    for (let x = -10; x <= 10; x += 0.1) {
      const y = -0.15 * (x - crossings[0]) * (x - crossings[1]) * (x - crossings[2]) + horizontalLine;
      if (y >= -10 && y <= 10) {
        if (!path) path = `M ${toX(x)} ${toY(y)}`;
        else path += ` L ${toX(x)} ${toY(y)}`;
      }
    }
    return path;
  };

  return (
    <SATGrid>
      {({ toX, toY }) => (
        <g clipPath="url(#gridClip)">
          {/* Horizontal reference line */}
          <line
            x1={toX(-10)} y1={toY(horizontalLine)}
            x2={toX(10)} y2={toY(horizontalLine)}
            stroke="#999" strokeWidth="1" strokeDasharray="5,5"
          />
          {/* Curve */}
          <path d={generatePath(toX, toY)} fill="none" stroke="#333" strokeWidth="2" />
        </g>
      )}
    </SATGrid>
  );
};

// =============================================================================
// GENERAL FUNCTION DIAGRAM - Passes through specific points
// =============================================================================
export const GeneralFunctionDiagram = ({ points = [[0, 3], [1, -2]], xRange = [-10, 10], yRange = [-10, 10] }) => {
  const [xMin, xMax] = xRange;
  const [yMin, yMax] = yRange;

  // Create a curve passing through points (simple linear interpolation for 2 points)
  let slope = 1, intercept = 0;
  if (points.length >= 2) {
    const [x1, y1] = points[0];
    const [x2, y2] = points[1];
    slope = (y2 - y1) / (x2 - x1);
    intercept = y1 - slope * x1;
  }

  const getY = (x) => slope * x + intercept;

  return (
    <SATGrid xMin={xMin} xMax={xMax} yMin={yMin} yMax={yMax}>
      {({ toX, toY }) => (
        <g clipPath="url(#gridClip)">
          <line
            x1={toX(xMin - 2)} y1={toY(getY(xMin - 2))}
            x2={toX(xMax + 2)} y2={toY(getY(xMax + 2))}
            stroke="#333" strokeWidth="2"
          />
          {points.map(([px, py], i) => (
            <circle key={i} cx={toX(px)} cy={toY(py)} r="5" fill="#333" />
          ))}
        </g>
      )}
    </SATGrid>
  );
};

// =============================================================================
// TABLE DIAGRAM - For x/f(x) tables (2 columns)
// =============================================================================
export const TableDiagram = ({ rows = [], xHeader = "x", yHeader = "f(x)" }) => {
  return (
    <table style={{
      borderCollapse: 'collapse',
      fontSize: '14px',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      margin: '0 auto'
    }}>
      <thead>
        <tr>
          <th style={{ padding: '8px 24px', border: '1px solid #ccc', background: '#e8f4fc', fontWeight: '500', fontStyle: 'italic' }}>{xHeader}</th>
          <th style={{ padding: '8px 24px', border: '1px solid #ccc', background: '#e8f4fc', fontWeight: '500', fontStyle: 'italic' }}>{yHeader}</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i}>
            <td style={{ padding: '6px 24px', border: '1px solid #ccc', textAlign: 'center' }}>{row[0]}</td>
            <td style={{ padding: '6px 24px', border: '1px solid #ccc', textAlign: 'center' }}>{row[1]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

// =============================================================================
// DATA TABLE DIAGRAM - For multi-column tables (like probability tables)
// =============================================================================
export const DataTableDiagram = ({ headers = [], rows = [] }) => {
  return (
    <table style={{
      borderCollapse: 'collapse',
      fontSize: '14px',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      margin: '0 auto'
    }}>
      <thead>
        <tr>
          {headers.map((header, i) => (
            <th key={i} style={{
              padding: '8px 16px',
              border: '1px solid #ccc',
              background: i === 0 ? '#f5f5f5' : '#e8f4fc',
              fontWeight: '500',
              textAlign: 'center'
            }}>
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIdx) => (
          <tr key={rowIdx}>
            {row.map((cell, colIdx) => (
              <td key={colIdx} style={{
                padding: '6px 16px',
                border: '1px solid #ccc',
                background: colIdx === 0 ? '#f9f9f9' : '#fff',
                textAlign: colIdx === 0 ? 'left' : 'center'
              }}>
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

// =============================================================================
// DOT PLOT DIAGRAM - For comparing distributions
// =============================================================================
export const DotPlotDiagram = ({
  data1 = [],
  data2 = [],
  title1 = "Data Set 1",
  title2 = "Data Set 2",
  xMin = 0,
  xMax = 10
}) => {
  const width = 340;
  const plotHeight = 80;
  const totalHeight = plotHeight * 2 + 60;
  const padding = 40;
  const plotWidth = width - 2 * padding;
  const scale = plotWidth / (xMax - xMin);

  const renderDotPlot = (data, yOffset, title) => {
    return (
      <g transform={`translate(0, ${yOffset})`}>
        {/* Title */}
        <text x={padding} y={-5} fontSize="12" fontFamily="Arial, sans-serif" fill="#333" fontWeight="500">{title}</text>

        {/* Axis line */}
        <line x1={padding} y1={plotHeight - 20} x2={width - padding} y2={plotHeight - 20} stroke="#444" strokeWidth="1.5" />

        {/* Tick marks and labels */}
        {Array.from({ length: xMax - xMin + 1 }, (_, i) => xMin + i).map(x => (
          <g key={x}>
            <line x1={padding + (x - xMin) * scale} y1={plotHeight - 20} x2={padding + (x - xMin) * scale} y2={plotHeight - 15} stroke="#444" strokeWidth="1" />
            <text x={padding + (x - xMin) * scale} y={plotHeight - 5} fontSize="10" textAnchor="middle" fill="#333">{x}</text>
          </g>
        ))}

        {/* Dots */}
        {data.map((item, i) => {
          const dots = [];
          for (let d = 0; d < item.count; d++) {
            dots.push(
              <circle
                key={`${i}-${d}`}
                cx={padding + (item.value - xMin) * scale}
                cy={plotHeight - 28 - d * 12}
                r="5"
                fill="#333"
              />
            );
          }
          return dots;
        })}
      </g>
    );
  };

  return (
    <svg width={width} height={totalHeight} style={{ display: 'block', margin: '0 auto' }}>
      <rect width={width} height={totalHeight} fill="#f5f5f5" />
      {renderDotPlot(data1, 20, title1)}
      {renderDotPlot(data2, plotHeight + 50, title2)}
    </svg>
  );
};

// =============================================================================
// MAIN QUESTION DIAGRAM COMPONENT - Switch based on type
// =============================================================================
const QuestionDiagram = ({ type, params }) => {
  switch (type) {
    case 'rationalFunction':
      return <RationalFunctionDiagram {...params} />;
    case 'quadraticVertex':
    case 'quadratic':
      return <QuadraticDiagram {...params} />;
    case 'absoluteValue':
      return <AbsoluteValueDiagram {...params} />;
    case 'coordinatePoints':
      return <CoordinatePointsDiagram {...params} />;
    case 'quadraticIntercepts':
      return <QuadraticInterceptsDiagram {...params} />;
    case 'scatterplot':
      return <ScatterplotDiagram {...params} />;
    case 'linearLine':
      return <LinearLineDiagram {...params} />;
    case 'simpleLine':
      return <SimpleLineDiagram {...params} />;
    case 'table': {
      // Multi-column tables (3+ columns) use DataTableDiagram
      if (params.headers && params.headers.length > 2) {
        return <DataTableDiagram {...params} />;
      }
      // 2-column tables: map headers array to xHeader/yHeader if needed
      const xHeader = params.xHeader || (params.headers && params.headers[0]) || 'x';
      const yHeader = params.yHeader || (params.headers && params.headers[1]) || 'f(x)';
      return <TableDiagram {...params} xHeader={xHeader} yHeader={yHeader} />;
    }
    case 'linearFunctionGraph':
      return <LinearFunctionGraphDiagram {...params} />;
    case 'wavyFunction':
      return <WavyFunctionDiagram {...params} />;
    case 'generalFunction':
      return <GeneralFunctionDiagram {...params} />;
    case 'dotPlot':
      return <SATDotPlot {...params} />;
    case 'dataTable':
      return <DataTableDiagram {...params} />;

    // --- Types delegating to graphs/ components ---
    case 'linearGraph':
      return <SATLinearGraph {...params} highlightPoints={params.showPoints || params.highlightPoints} />;
    case 'parabola':
      return <SATParabola {...params} />;
    case 'barChart':
      return <SATBarChart {...params} />;
    case 'circleWithSector':
      return <CircleWithSector {...params} />;
    case 'circleWithSquare':
      return <CircleWithSquare {...params} />;
    case 'intersectingLines':
      return <SATIntersectingLines {...params} />;
    case 'piecewiseLinear':
      return <SATPiecewiseLinear {...params} title={params.label || params.title} />;
    case 'cubicGraph':
      return <SATCubicGraph {...params} />;
    case 'parallelLines': {
      const lineLabelsArray = params.lineLabels
        ? (Array.isArray(params.lineLabels)
            ? params.lineLabels
            : [params.lineLabels.m, params.lineLabels.n, params.lineLabels.t].filter(Boolean))
        : [];
      return <SATParallelLines {...params} lineLabels={lineLabelsArray} />;
    }
    case 'twoLineGraph':
      return <SATTwoLineGraph {...params} />;
    case 'twoWayTable':
      return <SATTable {...params} />;

    default:
      return null;
  }
};

export default QuestionDiagram;
