// SATBoxPlot.jsx - Box-and-whisker plot for SAT-style one-variable-data items.
//
// Renders a horizontal box plot from a five-number summary:
//   { min, q1, median, q3, max }
//
// Visual style matches the rest of the SAT graph family: black axis, light
// gray gridlines, Arial labels. Box is unfilled (white interior) with thick
// black borders; median is a thick vertical bar inside the box; whiskers are
// thin horizontal lines extending to min/max.
//
// Supports an optional `outliers` array of x-values plotted as small circles
// just above the axis line.

import React from 'react';
import { SAT_GRAPH_STYLES } from './SATGraphCore';

const SATBoxPlot = ({
  min,
  q1,
  median,
  q3,
  max,
  outliers = [],
  xMin: providedXMin,
  xMax: providedXMax,
  xGridStep,
  xLabelStep,
  xLabel = '',
  title = '',
  width = 420,
  height = 180,
}) => {
  const styles = SAT_GRAPH_STYLES;

  // Determine axis range with 5-10% padding on each side
  const dataMin = Math.min(min, ...outliers);
  const dataMax = Math.max(max, ...outliers);
  const range = dataMax - dataMin || 1;
  const pad = range * 0.08;
  const xMin = providedXMin !== undefined ? providedXMin : Math.floor((dataMin - pad) * 10) / 10;
  const xMax = providedXMax !== undefined ? providedXMax : Math.ceil((dataMax + pad) * 10) / 10;

  // Pick sensible default grid/label step if not given (5-10 ticks)
  const autoStep = (() => {
    const span = xMax - xMin;
    const roughStep = span / 8;
    const magnitude = Math.pow(10, Math.floor(Math.log10(roughStep)));
    const norm = roughStep / magnitude;
    let nice;
    if (norm < 1.5) nice = 1;
    else if (norm < 3) nice = 2;
    else if (norm < 7) nice = 5;
    else nice = 10;
    return nice * magnitude;
  })();
  const gridStep = xGridStep || autoStep;
  const labelStep = xLabelStep || gridStep;

  // SVG geometry
  const padding = { top: 30, right: 20, bottom: 50, left: 20 };
  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;
  const xToSvg = (x) => padding.left + ((x - xMin) / (xMax - xMin)) * chartWidth;

  // Box vertical span — sits centered in the chart area
  const boxTop = padding.top + chartHeight * 0.25;
  const boxBottom = padding.top + chartHeight * 0.75;
  const whiskerY = padding.top + chartHeight * 0.5;
  const axisY = height - padding.bottom + 8;

  // Gridlines + ticks
  const gridXs = [];
  for (let x = Math.ceil(xMin / gridStep) * gridStep; x <= xMax + 1e-9; x += gridStep) {
    gridXs.push(Number(x.toFixed(6)));
  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      margin: '16px 0',
    }}>
      <svg width={width} height={height} style={{ background: styles.colors.background }}>
        {title && (
          <text x={width / 2} y={16} textAnchor="middle" fontFamily={styles.font.primary} fontSize={14} fontWeight="bold">
            {title}
          </text>
        )}

        {/* Gridlines */}
        {gridXs.map((g) => (
          <line key={`g-${g}`} x1={xToSvg(g)} y1={padding.top} x2={xToSvg(g)} y2={axisY} stroke={styles.colors.gridLine} strokeWidth={styles.strokeWidth.grid} />
        ))}

        {/* Whiskers — horizontal line from min to max */}
        <line x1={xToSvg(min)} y1={whiskerY} x2={xToSvg(max)} y2={whiskerY} stroke={styles.colors.axis} strokeWidth={1.5} />
        {/* Whisker caps */}
        <line x1={xToSvg(min)} y1={boxTop + chartHeight * 0.08} x2={xToSvg(min)} y2={boxBottom - chartHeight * 0.08} stroke={styles.colors.axis} strokeWidth={2} />
        <line x1={xToSvg(max)} y1={boxTop + chartHeight * 0.08} x2={xToSvg(max)} y2={boxBottom - chartHeight * 0.08} stroke={styles.colors.axis} strokeWidth={2} />

        {/* Box from Q1 to Q3 */}
        <rect x={xToSvg(q1)} y={boxTop} width={xToSvg(q3) - xToSvg(q1)} height={boxBottom - boxTop} fill="#ffffff" stroke={styles.colors.axis} strokeWidth={2} />

        {/* Median line */}
        <line x1={xToSvg(median)} y1={boxTop} x2={xToSvg(median)} y2={boxBottom} stroke={styles.colors.axis} strokeWidth={2.5} />

        {/* Outliers (if any) */}
        {outliers.map((o, i) => (
          <circle key={`o-${i}`} cx={xToSvg(o)} cy={whiskerY} r={3.5} fill="none" stroke={styles.colors.axis} strokeWidth={1.5} />
        ))}

        {/* Axis line */}
        <line x1={padding.left} y1={axisY} x2={width - padding.right} y2={axisY} stroke={styles.colors.axis} strokeWidth={styles.strokeWidth.axis} />

        {/* Tick labels */}
        {gridXs.map((g) => {
          // Show label only at labelStep intervals
          const showLabel = Math.abs(g / labelStep - Math.round(g / labelStep)) < 1e-6;
          if (!showLabel) return null;
          return (
            <g key={`tick-${g}`}>
              <line x1={xToSvg(g)} y1={axisY} x2={xToSvg(g)} y2={axisY + 5} stroke={styles.colors.axis} strokeWidth={styles.strokeWidth.tick} />
              <text x={xToSvg(g)} y={axisY + 18} textAnchor="middle" fontFamily={styles.font.axis} fontSize={styles.fontSize.tickLabel}>
                {Number.isInteger(g) ? g : g.toFixed(1)}
              </text>
            </g>
          );
        })}

        {/* x-axis label */}
        {xLabel && (
          <text x={width / 2} y={height - 6} textAnchor="middle" fontFamily={styles.font.primary} fontSize={styles.fontSize.axisLabel} fontStyle="italic">
            {xLabel}
          </text>
        )}
      </svg>
    </div>
  );
};

export default SATBoxPlot;
