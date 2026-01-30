// SATCircleDiagrams.jsx - Circle-related geometry diagrams for SAT questions
import React from 'react';
import { SAT_GRAPH_STYLES } from './SATGraphCore';

const styles = SAT_GRAPH_STYLES;

/**
 * CircleWithSector - Circle with a sector/arc marked
 */
export const CircleWithSector = ({
  centralAngle = 90,
  radius: providedRadius,
  labelCenter = 'O',
  labelPoint1 = 'A',
  labelPoint2 = 'B',
  showAngleLabel = false,
  showAngleArc = false,
  showRadii = true,
  width = 280,
  height = 280,
}) => {
  const centerX = width / 2;
  const centerY = height / 2;
  const radius = providedRadius || Math.min(width, height) / 2 - 40;

  // Convert angle to radians (start from right, go counterclockwise)
  const startAngle = 0;
  const endAngle = (centralAngle * Math.PI) / 180;

  // Calculate arc endpoints
  const x1 = centerX + radius * Math.cos(startAngle);
  const y1 = centerY - radius * Math.sin(startAngle);
  const x2 = centerX + radius * Math.cos(endAngle);
  const y2 = centerY - radius * Math.sin(endAngle);

  // Arc path (large arc flag depends on angle > 180)
  const largeArcFlag = centralAngle > 180 ? 1 : 0;
  const arcPath = `M ${x1} ${y1} A ${radius} ${radius} 0 ${largeArcFlag} 0 ${x2} ${y2}`;

  // Sector path (filled)
  const sectorPath = `M ${centerX} ${centerY} L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArcFlag} 0 ${x2} ${y2} Z`;

  // Angle arc for display
  const angleArcRadius = 25;
  const angleX2 = centerX + angleArcRadius * Math.cos(endAngle);
  const angleY2 = centerY - angleArcRadius * Math.sin(endAngle);
  const angleArcPath = `M ${centerX + angleArcRadius} ${centerY} A ${angleArcRadius} ${angleArcRadius} 0 0 0 ${angleX2} ${angleY2}`;

  // Label positions
  const labelOffset = 20;
  const point1LabelX = x1 + labelOffset * Math.cos(startAngle);
  const point1LabelY = y1 - labelOffset * Math.sin(startAngle);
  const point2LabelX = x2 + labelOffset * Math.cos(endAngle);
  const point2LabelY = y2 - labelOffset * Math.sin(endAngle);

  // Angle label position
  const angleLabelAngle = endAngle / 2;
  const angleLabelRadius = 40;
  const angleLabelX = centerX + angleLabelRadius * Math.cos(angleLabelAngle);
  const angleLabelY = centerY - angleLabelRadius * Math.sin(angleLabelAngle);

  return (
    <svg
      width={width}
      height={height}
      style={{
        background: styles.colors.background,
        border: `1px solid ${styles.colors.border}`,
      }}
    >
      {/* Circle */}
      <circle
        cx={centerX}
        cy={centerY}
        r={radius}
        fill="none"
        stroke={styles.colors.axis}
        strokeWidth={styles.strokeWidth.axis}
      />

      {/* Sector fill (light) */}
      <path
        d={sectorPath}
        fill="rgba(0, 0, 0, 0.05)"
        stroke="none"
      />

      {/* Radii */}
      {showRadii && (
        <>
          <line
            x1={centerX}
            y1={centerY}
            x2={x1}
            y2={y1}
            stroke={styles.colors.axis}
            strokeWidth={styles.strokeWidth.dataLine}
          />
          <line
            x1={centerX}
            y1={centerY}
            x2={x2}
            y2={y2}
            stroke={styles.colors.axis}
            strokeWidth={styles.strokeWidth.dataLine}
          />
        </>
      )}

      {/* Arc highlight */}
      <path
        d={arcPath}
        fill="none"
        stroke={styles.colors.dataLine}
        strokeWidth={styles.strokeWidth.dataLine + 1}
      />

      {/* Angle arc */}
      {showAngleArc && (
        <path
          d={angleArcPath}
          fill="none"
          stroke={styles.colors.axis}
          strokeWidth={1}
        />
      )}

      {/* Center point */}
      <circle
        cx={centerX}
        cy={centerY}
        r={3}
        fill={styles.colors.axis}
      />

      {/* Center label */}
      <text
        x={centerX - 15}
        y={centerY + 5}
        fontFamily={styles.font.axis}
        fontSize={styles.fontSize.tickLabel}
        fill={styles.colors.axis}
      >
        {labelCenter}
      </text>

      {/* Point 1 label */}
      <text
        x={point1LabelX}
        y={point1LabelY + 5}
        fontFamily={styles.font.axis}
        fontSize={styles.fontSize.tickLabel}
        fill={styles.colors.axis}
        textAnchor="middle"
      >
        {labelPoint1}
      </text>

      {/* Point 2 label */}
      <text
        x={point2LabelX}
        y={point2LabelY + 5}
        fontFamily={styles.font.axis}
        fontSize={styles.fontSize.tickLabel}
        fill={styles.colors.axis}
        textAnchor="middle"
      >
        {labelPoint2}
      </text>

      {/* Angle label */}
      {showAngleLabel && (
        <text
          x={angleLabelX}
          y={angleLabelY}
          fontFamily={styles.font.axis}
          fontSize={styles.fontSize.tickLabel - 1}
          fill={styles.colors.axis}
          textAnchor="middle"
        >
          {centralAngle}°
        </text>
      )}
    </svg>
  );
};

/**
 * CircleWithSquare - Square inscribed in a circle
 */
export const CircleWithSquare = ({
  labels = { A: 'A', B: 'B', C: 'C', D: 'D', O: 'O' },
  showDiagonals = false,
  width = 280,
  height = 280,
}) => {
  const centerX = width / 2;
  const centerY = height / 2;
  const radius = Math.min(width, height) / 2 - 40;

  // Square vertices on circle (rotated 45° for aesthetic)
  const angle45 = Math.PI / 4;
  const vertices = [
    { x: centerX + radius * Math.cos(angle45), y: centerY - radius * Math.sin(angle45), label: labels.A || 'A' },
    { x: centerX + radius * Math.cos(angle45 + Math.PI / 2), y: centerY - radius * Math.sin(angle45 + Math.PI / 2), label: labels.B || 'B' },
    { x: centerX + radius * Math.cos(angle45 + Math.PI), y: centerY - radius * Math.sin(angle45 + Math.PI), label: labels.C || 'C' },
    { x: centerX + radius * Math.cos(angle45 + 3 * Math.PI / 2), y: centerY - radius * Math.sin(angle45 + 3 * Math.PI / 2), label: labels.D || 'D' },
  ];

  // Square path
  const squarePath = vertices.map((v, i) => (i === 0 ? `M ${v.x} ${v.y}` : `L ${v.x} ${v.y}`)).join(' ') + ' Z';

  return (
    <svg
      width={width}
      height={height}
      style={{
        background: styles.colors.background,
        border: `1px solid ${styles.colors.border}`,
      }}
    >
      {/* Circle */}
      <circle
        cx={centerX}
        cy={centerY}
        r={radius}
        fill="none"
        stroke={styles.colors.axis}
        strokeWidth={styles.strokeWidth.axis}
      />

      {/* Square */}
      <path
        d={squarePath}
        fill="rgba(0, 0, 0, 0.03)"
        stroke={styles.colors.dataLine}
        strokeWidth={styles.strokeWidth.dataLine}
      />

      {/* Diagonals */}
      {showDiagonals && (
        <>
          <line
            x1={vertices[0].x}
            y1={vertices[0].y}
            x2={vertices[2].x}
            y2={vertices[2].y}
            stroke={styles.colors.gridLine}
            strokeWidth={1}
            strokeDasharray="4,4"
          />
          <line
            x1={vertices[1].x}
            y1={vertices[1].y}
            x2={vertices[3].x}
            y2={vertices[3].y}
            stroke={styles.colors.gridLine}
            strokeWidth={1}
            strokeDasharray="4,4"
          />
        </>
      )}

      {/* Center point */}
      <circle
        cx={centerX}
        cy={centerY}
        r={3}
        fill={styles.colors.axis}
      />

      {/* Center label */}
      <text
        x={centerX + 10}
        y={centerY - 5}
        fontFamily={styles.font.axis}
        fontSize={styles.fontSize.tickLabel}
        fill={styles.colors.axis}
      >
        {labels.O || 'O'}
      </text>

      {/* Vertex labels */}
      {vertices.map((v, i) => {
        const labelOffset = 15;
        const angle = angle45 + (i * Math.PI) / 2;
        const labelX = v.x + labelOffset * Math.cos(angle);
        const labelY = v.y - labelOffset * Math.sin(angle);
        return (
          <text
            key={`vertex-${i}`}
            x={labelX}
            y={labelY + 5}
            fontFamily={styles.font.axis}
            fontSize={styles.fontSize.tickLabel}
            fill={styles.colors.axis}
            textAnchor="middle"
          >
            {v.label}
          </text>
        );
      })}
    </svg>
  );
};

/**
 * CircleInscribed - Circle with inscribed angle
 */
export const CircleInscribed = ({
  inscribedAngle = 45,
  labelCenter = 'O',
  labelPoints = ['P', 'Q', 'R'],
  showCentralAngle = false,
  width = 280,
  height = 280,
}) => {
  const centerX = width / 2;
  const centerY = height / 2;
  const radius = Math.min(width, height) / 2 - 40;

  // Central angle is twice the inscribed angle
  const centralAngleRad = (inscribedAngle * 2 * Math.PI) / 180;

  // Point positions on circle
  // Q is at the top, P and R create the inscribed angle from Q
  const qAngle = Math.PI / 2; // Q at top
  const pAngle = qAngle - centralAngleRad / 2 - Math.PI / 4;
  const rAngle = qAngle + centralAngleRad / 2 + Math.PI / 4;

  const Q = { x: centerX + radius * Math.cos(qAngle), y: centerY - radius * Math.sin(qAngle) };
  const P = { x: centerX + radius * Math.cos(pAngle), y: centerY - radius * Math.sin(pAngle) };
  const R = { x: centerX + radius * Math.cos(rAngle), y: centerY - radius * Math.sin(rAngle) };

  return (
    <svg
      width={width}
      height={height}
      style={{
        background: styles.colors.background,
        border: `1px solid ${styles.colors.border}`,
      }}
    >
      {/* Circle */}
      <circle
        cx={centerX}
        cy={centerY}
        r={radius}
        fill="none"
        stroke={styles.colors.axis}
        strokeWidth={styles.strokeWidth.axis}
      />

      {/* Lines from inscribed angle vertex to arc endpoints */}
      <line
        x1={Q.x}
        y1={Q.y}
        x2={P.x}
        y2={P.y}
        stroke={styles.colors.dataLine}
        strokeWidth={styles.strokeWidth.dataLine}
      />
      <line
        x1={Q.x}
        y1={Q.y}
        x2={R.x}
        y2={R.y}
        stroke={styles.colors.dataLine}
        strokeWidth={styles.strokeWidth.dataLine}
      />

      {/* Central angle lines (optional) */}
      {showCentralAngle && (
        <>
          <line
            x1={centerX}
            y1={centerY}
            x2={P.x}
            y2={P.y}
            stroke={styles.colors.gridLine}
            strokeWidth={1}
            strokeDasharray="4,4"
          />
          <line
            x1={centerX}
            y1={centerY}
            x2={R.x}
            y2={R.y}
            stroke={styles.colors.gridLine}
            strokeWidth={1}
            strokeDasharray="4,4"
          />
        </>
      )}

      {/* Center point */}
      <circle
        cx={centerX}
        cy={centerY}
        r={3}
        fill={styles.colors.axis}
      />

      {/* Points on circle */}
      <circle cx={Q.x} cy={Q.y} r={4} fill={styles.colors.pointFill} />
      <circle cx={P.x} cy={P.y} r={4} fill={styles.colors.pointFill} />
      <circle cx={R.x} cy={R.y} r={4} fill={styles.colors.pointFill} />

      {/* Labels */}
      <text
        x={centerX - 15}
        y={centerY + 5}
        fontFamily={styles.font.axis}
        fontSize={styles.fontSize.tickLabel}
        fill={styles.colors.axis}
      >
        {labelCenter}
      </text>

      <text
        x={Q.x}
        y={Q.y - 15}
        fontFamily={styles.font.axis}
        fontSize={styles.fontSize.tickLabel}
        fill={styles.colors.axis}
        textAnchor="middle"
      >
        {labelPoints[0] || 'Q'}
      </text>

      <text
        x={P.x + 15}
        y={P.y + 5}
        fontFamily={styles.font.axis}
        fontSize={styles.fontSize.tickLabel}
        fill={styles.colors.axis}
        textAnchor="middle"
      >
        {labelPoints[1] || 'P'}
      </text>

      <text
        x={R.x - 15}
        y={R.y + 5}
        fontFamily={styles.font.axis}
        fontSize={styles.fontSize.tickLabel}
        fill={styles.colors.axis}
        textAnchor="middle"
      >
        {labelPoints[2] || 'R'}
      </text>
    </svg>
  );
};

export default { CircleWithSector, CircleWithSquare, CircleInscribed };
