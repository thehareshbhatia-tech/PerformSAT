// Export all SAT-style graph components
export {
  SAT_GRAPH_STYLES,
  createCoordinateSystem,
  createClipPath,
  renderAxes,
  renderGrid,
  generateId,
} from './SATGraphCore';

// BULLETPROOF: Base coordinate system with validation
export {
  BaseCoordinateSystem,
  LinearGraphContent,
  CubicGraphContent,
  LinearGraph,
  TwoLineGraph,
  validateParams,
  calculateYInterceptFromIntersection,
  verifyPointOnLine,
} from './BaseCoordinateSystem';

// Diagram validator for automated testing
export {
  validateDiagram,
  validatePracticeTest,
  validateAllPracticeTests,
  reportValidationResults,
  runStartupValidation,
} from './DiagramValidator';

// Graph components (existing)
export { default as SATLinearGraph } from './SATLinearGraph';
export { default as SATTwoLineGraph } from './SATTwoLineGraph';
export { default as SATScatterplot } from './SATScatterplot';
export { default as SATParabola } from './SATParabola';
export { default as SATLineGraph } from './SATLineGraph';

// New components
export { default as SATBarChart } from './SATBarChart';
export { default as SATDotPlot } from './SATDotPlot';
export { default as SATBoxPlot } from './SATBoxPlot';
export { default as SATTable } from './SATTable';
export { default as SATParallelLines } from './SATParallelLines';
export { default as SATIntersectingLines } from './SATIntersectingLines';
export { default as SATPiecewiseLinear } from './SATPiecewiseLinear';
export { default as SATCubicGraph } from './SATCubicGraph';

// Circle diagrams
export {
  CircleWithSector,
  CircleWithSquare,
  CircleInscribed,
} from './SATCircleDiagrams';

// Triangle diagrams
export {
  RightTriangle,
  TriangleWithAngles,
  RightTriangleWithAltitude,
  SimilarTriangles,
} from './SATTriangleDiagrams';
