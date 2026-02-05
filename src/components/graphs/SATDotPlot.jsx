// SATDotPlot.jsx - Dot plot component for SAT-style statistics questions
import React from 'react';
import { SAT_GRAPH_STYLES } from './SATGraphCore';

/**
 * Convert raw data array to value/count format
 */
const rawDataToValueCount = (rawData) => {
  const counts = {};
  rawData.forEach(value => {
    counts[value] = (counts[value] || 0) + 1;
  });
  return Object.entries(counts)
    .map(([value, count]) => ({ value: Number(value), count }))
    .sort((a, b) => a.value - b.value);
};

const SATDotPlot = ({
  data = [],           // Format: [{ value, count }, ...]
  sets = [],           // Alternative: [{ name, data: [...] }, ...] for multi-set
  xLabel = '',
  title = '',
  xMin: providedXMin,
  xMax: providedXMax,
  xRange: providedXRange,
  width: providedWidth,
  height: providedHeight,
  dotRadius = 6,
  dotColor = '#000000',
  layout = 'vertical', // 'vertical' (stacked) or 'horizontal' (side by side)
}) => {
  const styles = SAT_GRAPH_STYLES;

  // Handle multi-set format
  const isMultiSet = sets && sets.length > 0;
  const setCount = isMultiSet ? sets.length : 1;

  // For horizontal layout, make width wider to fit sets side by side
  const isHorizontal = layout === 'horizontal' && isMultiSet;
  const width = providedWidth || (isHorizontal ? 280 * setCount + 40 : 320);
  const height = providedHeight || (isHorizontal ? 200 : (isMultiSet ? 120 * setCount + 40 : 150));

  // Calculate padding
  const padding = { top: 30, right: 30, bottom: 50, left: 30 };
  const chartWidth = isHorizontal
    ? (width - padding.left - padding.right - (setCount - 1) * 20) / setCount
    : width - padding.left - padding.right;

  // Determine x range
  let xMin, xMax;
  if (providedXRange) {
    [xMin, xMax] = providedXRange;
  } else if (isMultiSet) {
    const allValues = sets.flatMap(s => s.data);
    xMin = providedXMin !== undefined ? providedXMin : Math.min(...allValues);
    xMax = providedXMax !== undefined ? providedXMax : Math.max(...allValues);
  } else {
    const values = data.map(d => d.value);
    xMin = providedXMin !== undefined ? providedXMin : Math.min(...values);
    xMax = providedXMax !== undefined ? providedXMax : Math.max(...values);
  }
  const xRangeSpan = xMax - xMin || 1;

  // Render single dot plot
  const renderSingleDotPlot = (plotData, yOffset, plotHeight, setName = null, xOffset = 0, plotWidth = chartWidth) => {
    const maxCount = Math.max(...plotData.map(d => d.count), 1);
    // Reserve space for title (25px) and baseline labels (25px)
    const titleSpace = setName ? 25 : 0;
    const availableHeight = plotHeight - titleSpace - 25;
    // Ensure minimum spacing so dots don't overlap (at least 2.2x radius)
    const dotSpacing = Math.max(dotRadius * 2.2, availableHeight / maxCount);
    const baselineY = yOffset + plotHeight - 20;

    // Local x scale for this plot
    const localXScale = (value) => xOffset + padding.left + ((value - xMin) / xRangeSpan) * plotWidth;

    return (
      <g key={setName || 'single'}>
        {/* Set name - positioned at top of plot area */}
        {setName && (
          <text
            x={xOffset + padding.left + plotWidth / 2}
            y={yOffset + 12}
            textAnchor="middle"
            fontFamily={styles.font.axis}
            fontSize={12}
            fontWeight="bold"
            fill={styles.colors.axis}
          >
            {setName}
          </text>
        )}

        {/* Number line */}
        <line
          x1={xOffset + padding.left}
          y1={baselineY}
          x2={xOffset + padding.left + plotWidth}
          y2={baselineY}
          stroke={styles.colors.axis}
          strokeWidth={styles.strokeWidth.axis}
        />

        {/* Tick marks */}
        {plotData.map((item) => {
          const x = localXScale(item.value);
          return (
            <g key={`tick-${setName}-${item.value}`}>
              <line
                x1={x}
                y1={baselineY - 4}
                x2={x}
                y2={baselineY + 4}
                stroke={styles.colors.axis}
                strokeWidth={styles.strokeWidth.tick}
              />
              <text
                x={x}
                y={baselineY + 16}
                textAnchor="middle"
                fontFamily={styles.font.axis}
                fontSize={styles.fontSize.tickLabel}
                fill={styles.colors.axis}
              >
                {item.value}
              </text>
            </g>
          );
        })}

        {/* Dots */}
        {plotData.map((item) => {
          const x = localXScale(item.value);
          const dots = [];
          for (let i = 0; i < item.count; i++) {
            const y = baselineY - dotRadius - 4 - i * dotSpacing;
            dots.push(
              <circle
                key={`dot-${setName}-${item.value}-${i}`}
                cx={x}
                cy={y}
                r={dotRadius}
                fill={dotColor}
              />
            );
          }
          return dots;
        })}
      </g>
    );
  };

  return (
    <svg
      width={width}
      height={height}
      style={{
        background: styles.colors.background,
        border: `1px solid ${styles.colors.border}`,
      }}
    >
      {/* Title */}
      {title && (
        <text
          x={width / 2}
          y={20}
          textAnchor="middle"
          fontFamily={styles.font.axis}
          fontSize={14}
          fontWeight="bold"
          fill={styles.colors.axis}
        >
          {title}
        </text>
      )}

      {/* Multi-set or single plot */}
      {isMultiSet ? (
        sets.map((set, index) => {
          const processedData = rawDataToValueCount(set.data);

          if (isHorizontal) {
            // Horizontal layout: side by side
            const plotHeight = height - padding.top - padding.bottom;
            const yOffset = padding.top;
            const xOffset = index * (chartWidth + 20);
            return renderSingleDotPlot(processedData, yOffset, plotHeight, set.name, xOffset, chartWidth);
          } else {
            // Vertical layout: stacked
            const plotHeight = (height - padding.top - padding.bottom) / setCount;
            const yOffset = padding.top + index * plotHeight;
            return renderSingleDotPlot(processedData, yOffset, plotHeight, set.name, 0, chartWidth);
          }
        })
      ) : (
        renderSingleDotPlot(data, padding.top, height - padding.top - padding.bottom)
      )}

      {/* X-axis label */}
      {xLabel && (
        <text
          x={width / 2}
          y={height - 8}
          textAnchor="middle"
          fontFamily={styles.font.axis}
          fontSize={11}
          fill={styles.colors.axis}
        >
          {xLabel}
        </text>
      )}
    </svg>
  );
};

export default SATDotPlot;
