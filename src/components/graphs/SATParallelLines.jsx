// SATParallelLines.jsx - Parallel lines with transversal for angle problems
import React from 'react';
import {
  SAT_GRAPH_STYLES,
  SAT_FIGURE_STYLE,
  SAT_FIGURE_FONT,
  LABEL_HALO,
  isVariableLabel,
} from './SATGraphCore';

const styles = SAT_GRAPH_STYLES;

const SATParallelLines = ({
  angles = {},          // { top: ['x°', ''], bottom: ['', 'y°'] }
  lineLabels = [],      // ['m', 'n', 't'] for lines m, n and transversal t
  showParallelMarks = true,
  width = 300,
  height = 250,
}) => {
  const padding = 40;

  // Line positions
  const line1Y = padding + 50;      // Top parallel line
  const line2Y = height - padding - 50;  // Bottom parallel line

  // Transversal endpoints (crossing both lines at an angle)
  const transversalAngle = 65; // degrees from horizontal
  const tanAngle = Math.tan((transversalAngle * Math.PI) / 180);

  // Points where transversal crosses the lines
  const centerX = width / 2;
  const intersect1X = centerX - (line1Y - padding) / tanAngle * 0.3;
  const intersect2X = centerX + (line2Y - line1Y) / tanAngle * 0.3;

  // Transversal line endpoints
  const transStart = [intersect1X - 30, padding];
  const transEnd = [intersect2X + 30, height - padding];

  // Calculate actual intersection points
  const slope = (transEnd[1] - transStart[1]) / (transEnd[0] - transStart[0]);
  const getXForY = (y) => transStart[0] + (y - transStart[1]) / slope;

  const intersect1 = [getXForY(line1Y), line1Y];
  const intersect2 = [getXForY(line2Y), line2Y];

  // Angle arc drawing helper
  const drawAngleArc = (center, startAngle, endAngle, radius = 25, label) => {
    const startRad = (startAngle * Math.PI) / 180;
    const endRad = (endAngle * Math.PI) / 180;

    const x1 = center[0] + radius * Math.cos(startRad);
    const y1 = center[1] - radius * Math.sin(startRad);
    const x2 = center[0] + radius * Math.cos(endRad);
    const y2 = center[1] - radius * Math.sin(endRad);

    const largeArc = Math.abs(endAngle - startAngle) > 180 ? 1 : 0;
    const sweep = endAngle > startAngle ? 0 : 1;

    // Push the label well clear of the transversal — algebraic measures like
    // "(3x+10)°" are wide, so they need more standoff than a bare "x°".
    const midAngle = ((startAngle + endAngle) / 2 * Math.PI) / 180;
    const labelGap = radius + 26;
    const labelX = center[0] + labelGap * Math.cos(midAngle);
    const labelY = center[1] - labelGap * Math.sin(midAngle);

    return (
      <g>
        <path
          d={`M ${x1} ${y1} A ${radius} ${radius} 0 ${largeArc} ${sweep} ${x2} ${y2}`}
          fill="none"
          stroke={styles.colors.axis}
          strokeWidth={1.25}
        />
        {label && (
          <text
            x={labelX}
            y={labelY}
            fontFamily={SAT_FIGURE_FONT}
            fontStyle={isVariableLabel(label) ? 'italic' : 'normal'}
            fontSize={14}
            fill={styles.colors.axis}
            textAnchor="middle"
            dominantBaseline="central"
            {...LABEL_HALO}
          >
            {label}
          </text>
        )}
      </g>
    );
  };

  // Calculate transversal angle with horizontal
  const transAngle = Math.atan2(transEnd[1] - transStart[1], transEnd[0] - transStart[0]) * 180 / Math.PI;

  // Angles at top intersection
  const topAngles = angles.top || [];
  // Angles at bottom intersection
  const bottomAngles = angles.bottom || [];

  return (
    <svg
      width={width}
      height={height}
      style={SAT_FIGURE_STYLE}
    >
      {/* Parallel line 1 (top) */}
      <line
        x1={padding}
        y1={line1Y}
        x2={width - padding}
        y2={line1Y}
        stroke={styles.colors.dataLine}
        strokeWidth={styles.strokeWidth.dataLine}
      />

      {/* Parallel line 2 (bottom) */}
      <line
        x1={padding}
        y1={line2Y}
        x2={width - padding}
        y2={line2Y}
        stroke={styles.colors.dataLine}
        strokeWidth={styles.strokeWidth.dataLine}
      />

      {/* Transversal */}
      <line
        x1={transStart[0]}
        y1={transStart[1]}
        x2={transEnd[0]}
        y2={transEnd[1]}
        stroke={styles.colors.dataLine}
        strokeWidth={styles.strokeWidth.dataLine}
      />

      {/* Parallel marks — matching chevron arrowheads ON each line (the SAT
          convention for "these lines are parallel"), placed left of the
          transversal so they stay clear of the angle labels. */}
      {showParallelMarks && (
        <>
          <polyline
            points={`${padding + 26},${line1Y - 5} ${padding + 32},${line1Y} ${padding + 26},${line1Y + 5}`}
            fill="none"
            stroke={styles.colors.axis}
            strokeWidth={1.5}
            strokeLinejoin="round"
            strokeLinecap="round"
          />
          <polyline
            points={`${padding + 26},${line2Y - 5} ${padding + 32},${line2Y} ${padding + 26},${line2Y + 5}`}
            fill="none"
            stroke={styles.colors.axis}
            strokeWidth={1.5}
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        </>
      )}

      {/* Angle arcs at top intersection */}
      {topAngles[0] && drawAngleArc(intersect1, 180, 180 - transAngle, 28, topAngles[0])}
      {topAngles[1] && drawAngleArc(intersect1, 0, 180 - transAngle, 28, topAngles[1])}

      {/* Angle arcs at bottom intersection */}
      {bottomAngles[0] && drawAngleArc(intersect2, 180, 180 - transAngle, 28, bottomAngles[0])}
      {bottomAngles[1] && drawAngleArc(intersect2, 0, 180 - transAngle, 28, bottomAngles[1])}

      {/* Angle arcs and labels for x, y, z object format */}
      {angles.x !== undefined &&
        drawAngleArc(intersect1, 180, 180 - transAngle, 28, typeof angles.x === 'boolean' ? 'x°' : angles.x)
      }
      {angles.y !== undefined &&
        drawAngleArc(intersect2, 180, 180 - transAngle, 28, typeof angles.y === 'boolean' ? 'y°' : angles.y)
      }
      {angles.z !== undefined &&
        drawAngleArc(intersect2, 0, -transAngle, 28, typeof angles.z === 'boolean' ? 'z°' : angles.z)
      }

      {/* Line labels */}
      {lineLabels[0] && (
        <text
          x={width - padding + 10}
          y={line1Y + 5}
          fontFamily={SAT_FIGURE_FONT}
          fontSize={14}
          fontStyle="italic"
          fill={styles.colors.axis}
          {...LABEL_HALO}
        >
          {lineLabels[0]}
        </text>
      )}
      {lineLabels[1] && (
        <text
          x={width - padding + 10}
          y={line2Y + 5}
          fontFamily={SAT_FIGURE_FONT}
          fontSize={14}
          fontStyle="italic"
          fill={styles.colors.axis}
          {...LABEL_HALO}
        >
          {lineLabels[1]}
        </text>
      )}
      {lineLabels[2] && (
        <text
          x={transEnd[0] + 10}
          y={transEnd[1]}
          fontFamily={SAT_FIGURE_FONT}
          fontSize={14}
          fontStyle="italic"
          fill={styles.colors.axis}
          {...LABEL_HALO}
        >
          {lineLabels[2]}
        </text>
      )}
    </svg>
  );
};

export default SATParallelLines;
