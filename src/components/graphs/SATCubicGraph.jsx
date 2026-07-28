// SATCubicGraph.jsx - Cubic polynomial function graph
import React, { useMemo } from 'react';
import {
  SAT_GRAPH_STYLES,
  createCoordinateSystem,
  createClipPath,
  renderAxes,
  renderGrid,
  generateId,
} from './SATGraphCore';

/**
 * Generate cubic curve points
 * f(x) = a(x - r1)(x - r2)(x - r3) or f(x) = ax³ + bx² + cx + d
 */
const generateCubicPoints = (params, xMin, xMax, numPoints = 100) => {
  const step = (xMax - xMin) / numPoints;
  const points = [];

  const { a = 1, b = 0, c = 0, d = 0, roots } = params;

  for (let i = 0; i <= numPoints; i++) {
    const x = xMin + i * step;
    let y;

    if (roots && roots.length === 3) {
      // Factored form: y = a(x - r1)(x - r2)(x - r3)
      const [r1, r2, r3] = roots;
      y = a * (x - r1) * (x - r2) * (x - r3);
    } else {
      // Standard form: y = ax³ + bx² + cx + d
      y = a * Math.pow(x, 3) + b * Math.pow(x, 2) + c * x + d;
    }

    points.push({ x, y });
  }

  return points;
};

/**
 * Convert points to SVG path string
 */
const cubicToPath = (points, coordSystem, yMin, yMax) => {
  // Filter and clip points to visible range
  const paddedYMin = yMin - (yMax - yMin) * 2;
  const paddedYMax = yMax + (yMax - yMin) * 2;

  const visiblePoints = points.filter(p => p.y >= paddedYMin && p.y <= paddedYMax);

  if (visiblePoints.length < 2) return '';

  const svgPoints = visiblePoints.map(p => coordSystem.toSVG(p.x, p.y));

  let path = `M ${svgPoints[0].x} ${svgPoints[0].y}`;
  for (let i = 1; i < svgPoints.length; i++) {
    path += ` L ${svgPoints[i].x} ${svgPoints[i].y}`;
  }

  return path;
};

const SATCubicGraph = ({
  // Coefficients for ax³ + bx² + cx + d
  a = 1,
  b = 0,
  c = 0,
  d = 0,
  roots,              // Alternative: [r1, r2, r3] for factored form
  highlightPoints = [], // [[x, y], ...] - key points to highlight
  points: providedPoints = [], // Alternative: plot specific points
  showPoints = false, // Whether to render providedPoints as visible dots
  xRange = [-10, 10],
  yRange = [-10, 10],
  label = '',
  width: providedWidth,
  height: providedHeight,
  xTickInterval: providedXTick,
  yTickInterval: providedYTick,
  gridInterval = 1,
}) => {
  const componentId = useMemo(() => generateId(), []);
  const styles = SAT_GRAPH_STYLES;

  const [xMin, xMax] = xRange;
  const [yMin, yMax] = yRange;

  // Auto-calculate tick intervals and dimensions based on range
  const xSpan = xMax - xMin;
  const ySpan = yMax - yMin;
  const xTickInterval = providedXTick || (xSpan <= 12 ? 1 : 2);
  const yTickInterval = providedYTick || (ySpan <= 12 ? 1 : 2);
  const width = providedWidth || (xSpan <= 12 ? 360 : 320);
  const height = providedHeight || (ySpan <= 12 ? 320 : 280);

  // Create coordinate system
  const coordSystem = useMemo(() =>
    createCoordinateSystem({
      xRange,
      yRange,
      svgDimensions: { width, height },
      padding: { top: 25, right: 45, bottom: 45, left: 45 },
    }),
    [xRange, yRange, width, height]
  );

  // Create clip path
  const { clipPathId, ClipPathDef } = useMemo(
    () => createClipPath(componentId, coordSystem.bounds),
    [componentId, coordSystem.bounds]
  );

  // Generate cubic path
  const cubicPath = useMemo(() => {
    const points = generateCubicPoints({ a, b, c, d, roots }, xMin - 5, xMax + 5, 200);
    return cubicToPath(points, coordSystem, yMin, yMax);
  }, [a, b, c, d, roots, xMin, xMax, yMin, yMax, coordSystem]);

  return (
    <svg
      width={width}
      height={height}
      style={{
        background: styles.colors.background,
        border: `1px solid ${styles.colors.border}`,
        borderRadius: 12,
      }}
    >
      <ClipPathDef />

      {/* Grid */}
      {renderGrid(coordSystem, { xInterval: gridInterval, yInterval: gridInterval })}

      {/* Cubic curve (clipped) */}
      <g clipPath={`url(#${clipPathId})`}>
        <path
          d={cubicPath}
          fill="none"
          stroke={styles.colors.dataLine}
          strokeWidth={styles.strokeWidth.dataLine}
        />
      </g>

      {/* Axes — after the data path so haloed tick labels paint over it */}
      {renderAxes(coordSystem, { xTickInterval, yTickInterval })}

      {/* BUG FIX 2: Only render highlight points if array exists and has elements */}
      {highlightPoints && highlightPoints.length > 0 && highlightPoints.map(([x, y], i) => {
        const pos = coordSystem.toSVG(x, y);
        return (
          <circle
            key={`highlight-${i}`}
            cx={pos.x}
            cy={pos.y}
            r={styles.dimensions.highlightRadius}
            fill={styles.colors.pointHighlight}
          />
        );
      })}

      {/* Only render provided points if showPoints is true */}
      {showPoints && providedPoints && providedPoints.length > 0 && providedPoints.map(([x, y], i) => {
        const pos = coordSystem.toSVG(x, y);
        return (
          <circle
            key={`point-${i}`}
            cx={pos.x}
            cy={pos.y}
            r={styles.dimensions.pointRadius}
            fill={styles.colors.pointFill}
          />
        );
      })}

      {/* Label - positioned in empty space away from the curve */}
      {label && (() => {
        // Find empty space by checking curve position at corners
        const evalCubic = (x) => {
          if (roots && roots.length === 3) {
            const [r1, r2, r3] = roots;
            return a * (x - r1) * (x - r2) * (x - r3);
          }
          return a * Math.pow(x, 3) + b * Math.pow(x, 2) + c * x + d;
        };

        // Check curve y-value near left and right edges
        const curveAtLeft = evalCubic(xMin + 1);
        const curveAtRight = evalCubic(xMax - 1);
        const midY = (yMin + yMax) / 2;

        // Place label in the corner farthest from the curve
        let placementX, placementY;
        if (curveAtRight > midY) {
          // Curve is high on the right → place label in upper-left (curve is low there)
          placementX = xMin + 2;
          placementY = yMax - (yMax - yMin) * 0.1;
        } else if (curveAtLeft > midY) {
          // Curve is high on the left → place label in lower-right
          placementX = xMax - 1;
          placementY = yMin + (yMax - yMin) * 0.25;
        } else {
          // Curve is low → place label in upper-right
          placementX = xMax - 1;
          placementY = yMax - (yMax - yMin) * 0.1;
        }

        const labelPos = coordSystem.toSVG(placementX, placementY);

        return (
          <text
            x={labelPos.x}
            y={labelPos.y}
            fontFamily={styles.font.axis}
            fontSize={14}
            fontStyle="italic"
            fill={styles.colors.axis}
            stroke="#ffffff"
            strokeWidth={3}
            paintOrder="stroke"
            textAnchor="end"
          >
            {label}
          </text>
        );
      })()}
    </svg>
  );
};

export default SATCubicGraph;
