// SATTwoLineGraph.jsx - Two intersecting lines with guaranteed mathematical accuracy
// BULLETPROOF: Validates parameters and guarantees intersection accuracy
import React, { useMemo } from 'react';
import {
  SAT_GRAPH_STYLES,
  createCoordinateSystem,
  createClipPath,
  renderAxes,
  renderGrid,
  generateId,
  LABEL_HALO,
} from './SATGraphCore';
import { validateParams, calculateYInterceptFromIntersection, verifyPointOnLine } from './BaseCoordinateSystem';

/**
 * CRITICAL: Calculate y-intercepts FROM the intersection point
 * This GUARANTEES both lines pass through the intersection point.
 *
 * Given: intersection point (ix, iy) and slopes m1, m2
 * Line 1: y = m1 * x + b1  where b1 = iy - m1 * ix
 * Line 2: y = m2 * x + b2  where b2 = iy - m2 * ix
 *
 * PROOF: At x = ix:
 * Line 1: y = m1 * ix + (iy - m1 * ix) = iy
 * Line 2: y = m2 * ix + (iy - m2 * ix) = iy
 */
const calculateLineParams = (intersection, slope1, slope2) => {
  const { x: ix, y: iy } = intersection;

  // Calculate y-intercepts from intersection point
  const b1 = iy - slope1 * ix;
  const b2 = iy - slope2 * ix;

  return {
    line1: { slope: slope1, yIntercept: b1 },
    line2: { slope: slope2, yIntercept: b2 },
  };
};

const SATTwoLineGraph = ({
  intersection,
  slope1,
  slope2,
  xRange = [-6, 6],
  yRange = [-6, 6],
  showIntersection = true,
  line1Color = null,
  line2Color = null,
  width = 320,
  height = 280,
  xTickInterval = 2,
  yTickInterval = 2,
  gridInterval = 1,
  showValidationErrors = process.env.NODE_ENV === 'development',
}) => {
  const componentId = useMemo(() => generateId(), []);
  const styles = SAT_GRAPH_STYLES;

  // BULLETPROOF: Validate all parameters
  const validationErrors = useMemo(() => {
    const errors = [];

    // Validate intersection exists and has correct format
    if (!intersection) {
      errors.push('Missing required: intersection point');
    } else if (typeof intersection.x !== 'number' || typeof intersection.y !== 'number') {
      errors.push('intersection must have numeric x and y properties');
    }

    // Validate slopes
    if (typeof slope1 !== 'number' || !isFinite(slope1)) {
      errors.push('slope1 must be a finite number');
    }
    if (typeof slope2 !== 'number' || !isFinite(slope2)) {
      errors.push('slope2 must be a finite number');
    }
    if (slope1 === slope2) {
      errors.push('slope1 and slope2 must be different (parallel lines don\'t intersect)');
    }

    // Validate ranges
    const xCheck = validateParams.range(xRange, 'xRange');
    if (!xCheck.valid) errors.push(xCheck.error);
    const yCheck = validateParams.range(yRange, 'yRange');
    if (!yCheck.valid) errors.push(yCheck.error);

    // Validate intersection is within range
    if (intersection && errors.length === 0) {
      const rangeCheck = validateParams.pointInRange(intersection, xRange, yRange, 'intersection');
      if (!rangeCheck.valid) errors.push(rangeCheck.error);
    }

    return errors;
  }, [intersection, slope1, slope2, xRange, yRange]);

  // Show validation errors in development
  if (validationErrors.length > 0) {
    if (showValidationErrors) {
      return (
        <svg width={width} height={height} style={{ background: '#fff', border: '2px solid #cc0000' }}>
          <text x={10} y={20} fill="#cc0000" fontSize={12} fontFamily="Arial" fontWeight="bold">TwoLineGraph Validation Error:</text>
          {validationErrors.map((err, i) => (
            <text key={i} x={10} y={40 + i * 16} fill="#cc0000" fontSize={11} fontFamily="Arial">{err}</text>
          ))}
        </svg>
      );
    }
    return null;
  }

  // Use specified colors or default to black
  const color1 = line1Color || styles.colors.dataLine;
  const color2 = line2Color || styles.colors.dataLine;

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

  // Calculate line parameters from intersection point (CRITICAL for accuracy)
  const { line1, line2 } = useMemo(
    () => calculateLineParams(intersection, slope1, slope2),
    [intersection, slope1, slope2]
  );

  // Calculate line endpoints (extend beyond visible range)
  const [xMin, xMax] = xRange;
  const extendedXMin = xMin - 20;
  const extendedXMax = xMax + 20;

  // Line 1 endpoints
  const line1Y1 = line1.slope * extendedXMin + line1.yIntercept;
  const line1Y2 = line1.slope * extendedXMax + line1.yIntercept;
  const line1Start = coordSystem.toSVG(extendedXMin, line1Y1);
  const line1End = coordSystem.toSVG(extendedXMax, line1Y2);

  // Line 2 endpoints
  const line2Y1 = line2.slope * extendedXMin + line2.yIntercept;
  const line2Y2 = line2.slope * extendedXMax + line2.yIntercept;
  const line2Start = coordSystem.toSVG(extendedXMin, line2Y1);
  const line2End = coordSystem.toSVG(extendedXMax, line2Y2);

  // Intersection point in SVG coordinates
  const intersectionSVG = coordSystem.toSVG(intersection.x, intersection.y);

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

      {/* Lines (clipped) */}
      <g clipPath={`url(#${clipPathId})`}>
        {/* Line 1 */}
        <line
          x1={line1Start.x}
          y1={line1Start.y}
          x2={line1End.x}
          y2={line1End.y}
          stroke={color1}
          strokeWidth={styles.strokeWidth.dataLine}
        />

        {/* Line 2 */}
        <line
          x1={line2Start.x}
          y1={line2Start.y}
          x2={line2End.x}
          y2={line2End.y}
          stroke={color2}
          strokeWidth={styles.strokeWidth.dataLine}
        />
      </g>

      {/* Axes — after the data path so haloed tick labels paint over it */}
      {renderAxes(coordSystem, { xTickInterval, yTickInterval })}

      {/* Intersection point */}
      {showIntersection && (
        <g>
          <circle
            cx={intersectionSVG.x}
            cy={intersectionSVG.y}
            r={styles.dimensions.highlightRadius}
            fill={styles.colors.pointHighlight}
          />
          <text
            x={intersectionSVG.x + 10}
            y={intersectionSVG.y - 10}
            fontFamily={styles.font.axis}
            fontSize={styles.fontSize.tickLabel}
            fill={styles.colors.axis}
            fontWeight="500"
            {...LABEL_HALO}
          >
            ({intersection.x}, {intersection.y})
          </text>
        </g>
      )}
    </svg>
  );
};

export default SATTwoLineGraph;
