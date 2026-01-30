// SATScatterplot.jsx - Scatter plot with auto-scaling and optional best-fit line
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
 * Calculate auto-range for axis based on data points
 */
const calculateAutoRange = (points, axis, includeZero = true) => {
  const values = points.map(p => axis === 'x' ? p[0] : p[1]);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;
  const padding = range * 0.1;

  let finalMin = Math.floor(min - padding);
  let finalMax = Math.ceil(max + padding);

  // Include zero if data is close to it
  if (includeZero) {
    if (finalMin > 0 && min < range * 0.5) finalMin = 0;
    if (finalMax < 0 && max > -range * 0.5) finalMax = 0;
  }

  return [finalMin, finalMax];
};

const SATScatterplot = ({
  points = [],
  xRange: providedXRange,
  yRange: providedYRange,
  xLabel = 'x',
  yLabel = 'y',
  showBestFitLine = false,
  bestFitLine = null,
  pointColor = null,
  pointRadius = null,
  width = 320,
  height = 280,
  xTickInterval,
  yTickInterval,
  gridInterval = 1,
}) => {
  const componentId = useMemo(() => generateId(), []);
  const styles = SAT_GRAPH_STYLES;

  // Auto-calculate ranges if not provided
  const xRange = providedXRange || calculateAutoRange(points, 'x');
  const yRange = providedYRange || calculateAutoRange(points, 'y');

  // Auto-calculate tick intervals if not provided
  const xTick = xTickInterval || Math.ceil((xRange[1] - xRange[0]) / 10);
  const yTick = yTickInterval || Math.ceil((yRange[1] - yRange[0]) / 10);

  // Create coordinate system
  const coordSystem = useMemo(() =>
    createCoordinateSystem({
      xRange,
      yRange,
      svgDimensions: { width, height },
      padding: { top: 30, right: 30, bottom: 50, left: 50 },
    }),
    [xRange, yRange, width, height]
  );

  // Create clip path
  const { clipPathId, ClipPathDef } = useMemo(
    () => createClipPath(componentId, coordSystem.bounds),
    [componentId, coordSystem.bounds]
  );

  // Calculate best-fit line endpoints if showing
  let lineStart, lineEnd;
  if (showBestFitLine && bestFitLine) {
    const [xMin, xMax] = xRange;
    const y1 = bestFitLine.slope * xMin + bestFitLine.yIntercept;
    const y2 = bestFitLine.slope * xMax + bestFitLine.yIntercept;
    lineStart = coordSystem.toSVG(xMin, y1);
    lineEnd = coordSystem.toSVG(xMax, y2);
  }

  const pColor = pointColor || styles.colors.pointFill;
  const pRadius = pointRadius || styles.dimensions.pointRadius;

  return (
    <svg
      width={width}
      height={height}
      style={{
        background: styles.colors.background,
        border: `1px solid ${styles.colors.border}`,
      }}
    >
      <ClipPathDef />

      {/* Grid */}
      {renderGrid(coordSystem, { xInterval: gridInterval, yInterval: gridInterval })}

      {/* Axes with custom labels */}
      {renderAxes(coordSystem, {
        xTickInterval: xTick,
        yTickInterval: yTick,
        xAxisLabel: xLabel,
        yAxisLabel: yLabel,
      })}

      {/* Best-fit line (clipped) */}
      {showBestFitLine && bestFitLine && (
        <g clipPath={`url(#${clipPathId})`}>
          <line
            x1={lineStart.x}
            y1={lineStart.y}
            x2={lineEnd.x}
            y2={lineEnd.y}
            stroke={styles.colors.dataLine}
            strokeWidth={styles.strokeWidth.dataLine}
            strokeDasharray="5,3"
          />
        </g>
      )}

      {/* Data points */}
      {points.map(([x, y], i) => {
        const pos = coordSystem.toSVG(x, y);
        return (
          <circle
            key={`point-${i}`}
            cx={pos.x}
            cy={pos.y}
            r={pRadius}
            fill={pColor}
          />
        );
      })}
    </svg>
  );
};

export default SATScatterplot;
