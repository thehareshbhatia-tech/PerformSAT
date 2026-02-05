// SATLinearGraph.jsx - Single line graph with slope and y-intercept
// BULLETPROOF: Uses validated coordinate system
import React, { useMemo } from 'react';
import {
  SAT_GRAPH_STYLES,
  createCoordinateSystem,
  createClipPath,
  renderAxes,
  renderGrid,
  generateId,
} from './SATGraphCore';
import { validateParams } from './BaseCoordinateSystem';

const SATLinearGraph = ({
  slope,
  yIntercept,
  xRange = [-10, 10],
  yRange = [-10, 10],
  highlightPoints = [],
  label = '',
  width = 320,
  height = 280,
  xTickInterval = 2,
  yTickInterval = 2,
  gridInterval = 1,
  showValidationErrors = process.env.NODE_ENV === 'development',
}) => {
  const componentId = useMemo(() => generateId(), []);
  const styles = SAT_GRAPH_STYLES;

  // Validate parameters
  const validationErrors = useMemo(() => {
    const errors = [];
    if (typeof slope !== 'number' || !isFinite(slope)) {
      errors.push('slope must be a finite number');
    }
    if (typeof yIntercept !== 'number' || !isFinite(yIntercept)) {
      errors.push('yIntercept must be a finite number');
    }
    const xCheck = validateParams.range(xRange, 'xRange');
    if (!xCheck.valid) errors.push(xCheck.error);
    const yCheck = validateParams.range(yRange, 'yRange');
    if (!yCheck.valid) errors.push(yCheck.error);
    return errors;
  }, [slope, yIntercept, xRange, yRange]);

  // Show validation errors in development
  if (validationErrors.length > 0) {
    if (showValidationErrors) {
      return (
        <svg width={width} height={height} style={{ background: '#fff', border: '2px solid #cc0000' }}>
          <text x={10} y={20} fill="#cc0000" fontSize={12} fontFamily="Arial">LinearGraph Error:</text>
          {validationErrors.map((err, i) => (
            <text key={i} x={10} y={40 + i * 16} fill="#cc0000" fontSize={11} fontFamily="Arial">{err}</text>
          ))}
        </svg>
      );
    }
    return null;
  }

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

  // Calculate line endpoints (extend beyond visible range for clipping)
  const [xMin, xMax] = xRange;
  const extendedXMin = xMin - 10;
  const extendedXMax = xMax + 10;
  const y1 = slope * extendedXMin + yIntercept;
  const y2 = slope * extendedXMax + yIntercept;

  const startPoint = coordSystem.toSVG(extendedXMin, y1);
  const endPoint = coordSystem.toSVG(extendedXMax, y2);

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

      {/* Grid (behind everything) */}
      {renderGrid(coordSystem, { xInterval: gridInterval, yInterval: gridInterval })}

      {/* Axes */}
      {renderAxes(coordSystem, { xTickInterval, yTickInterval })}

      {/* Line (clipped to graph area) */}
      <g clipPath={`url(#${clipPathId})`}>
        <line
          x1={startPoint.x}
          y1={startPoint.y}
          x2={endPoint.x}
          y2={endPoint.y}
          stroke={styles.colors.dataLine}
          strokeWidth={styles.strokeWidth.dataLine}
        />
      </g>

      {/* BUG FIX 2: Only render highlight points if array exists and has elements */}
      {highlightPoints && highlightPoints.length > 0 && highlightPoints.map(([x, y], i) => {
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

      {/* Label - positioned near the line on the right side */}
      {label && (() => {
        // Calculate where line intersects near right edge of graph
        const labelX = xMax - 1;
        const labelY = slope * labelX + yIntercept;
        const labelPos = coordSystem.toSVG(labelX, labelY);

        // Offset label above the line (negative y in SVG moves up)
        const yOffset = slope >= 0 ? -12 : 18;

        return (
          <text
            x={labelPos.x}
            y={labelPos.y + yOffset}
            fontFamily={styles.font.axis}
            fontSize={14}
            fontStyle="italic"
            fill={styles.colors.axis}
            textAnchor="end"
          >
            {label}
          </text>
        );
      })()}
    </svg>
  );
};

export default SATLinearGraph;
