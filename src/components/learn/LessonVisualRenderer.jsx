import React from 'react';

/**
 * LessonVisualRenderer — dispatches a diagramRef visualType to its figure.
 *
 * FIGURE LANGUAGE v2 (2026-07-18): every figure follows the textbook ink
 * discipline defined in visuals/figureLanguage.js (thin near-black ink, one
 * brand-orange accent on the taught element, serif labels, no grids/pills/
 * cards/gradients inside SVGs). Figures live in genre modules under
 * visuals/ — add new figures there and register them here. Gate:
 * __tests__/lessonVisuals.test.js (every registry entry renders SVG with an
 * aria-label; every corpus diagramRef must resolve to a registered key).
 */
import {
  ParallelLinesDiagram, PerpendicularLinesDiagram, SlopeFromGraphDiagram,
  SlopeFromTableDiagram, YInterceptDiagram, ParabolaFromGraphDiagram,
  HorizontalShiftDiagram, VerticalShiftDiagram, ExponentialGrowthDiagram,
  SystemsIntersectionDiagram,
} from './visuals/coordinateFigures';
import {
  RightTriangleDiagram, SpecialTrianglesDiagram, SimilarTrianglesDiagram,
  TriangleAreaDiagram, CirclePartsDiagram, ArcLengthDiagram,
  CircleEquationDiagram, TransversalAnglesDiagram, RadianArcDiagram,
  TrigSideLabelingDiagram,
} from './visuals/geometryFigures';
import {
  CubeDiagram, RectangularPrismDiagram, CylinderDiagram, SphereDiagram,
  ConeDiagram,
} from './visuals/solidFigures';
import {
  MeanMedianDiagram, ScatterplotModelDiagram, InequalityNumberLineDiagram,
  PercentChangeDiagram,
} from './visuals/dataFigures';
import {
  SentenceBoundaryDiagram, SubjectVerbAgreementDiagram, TransitionMapDiagram,
} from './visuals/rwFigures';
import {
  AdaptiveModuleFlowDiagram, ScoreCompositionDiagram, ModuleTimeBudgetDiagram,
} from './visuals/testMechanicsFigures';

const visualRegistry = {
  parallelLinesDiagram: ParallelLinesDiagram,
  perpendicularLinesDiagram: PerpendicularLinesDiagram,
  slopeFromGraphDiagram: SlopeFromGraphDiagram,
  slopeFromTableDiagram: SlopeFromTableDiagram,
  yInterceptDiagram: YInterceptDiagram,
  parabolaFromGraphDiagram: ParabolaFromGraphDiagram,
  rightTriangleDiagram: RightTriangleDiagram,
  specialTrianglesDiagram: SpecialTrianglesDiagram,
  similarTrianglesDiagram: SimilarTrianglesDiagram,
  triangleAreaDiagram: TriangleAreaDiagram,
  circlePartsDiagram: CirclePartsDiagram,
  arcLengthDiagram: ArcLengthDiagram,
  circleEquationDiagram: CircleEquationDiagram,
  cubeDiagram: CubeDiagram,
  rectangularPrismDiagram: RectangularPrismDiagram,
  cylinderDiagram: CylinderDiagram,
  sphereDiagram: SphereDiagram,
  coneDiagram: ConeDiagram,
  meanMedianDiagram: MeanMedianDiagram,
  horizontalShiftDiagram: HorizontalShiftDiagram,
  verticalShiftDiagram: VerticalShiftDiagram,
  exponentialGrowthDiagram: ExponentialGrowthDiagram,
  percentChangeDiagram: PercentChangeDiagram,
  adaptiveModuleFlowDiagram: AdaptiveModuleFlowDiagram,
  scoreCompositionDiagram: ScoreCompositionDiagram,
  moduleTimeBudgetDiagram: ModuleTimeBudgetDiagram,
  sentenceBoundaryDiagram: SentenceBoundaryDiagram,
  subjectVerbAgreementDiagram: SubjectVerbAgreementDiagram,
  transitionMapDiagram: TransitionMapDiagram,
  inequalityNumberLineDiagram: InequalityNumberLineDiagram,
  systemsIntersectionDiagram: SystemsIntersectionDiagram,
  scatterplotModelDiagram: ScatterplotModelDiagram,
  transversalAnglesDiagram: TransversalAnglesDiagram,
  radianArcDiagram: RadianArcDiagram,
  trigSideLabelingDiagram: TrigSideLabelingDiagram,
};

const LessonVisualRenderer = ({ type }) => {
  const Component = visualRegistry[type];
  if (!Component) {
    if (process.env.NODE_ENV === 'development') {
      console.warn(`LessonVisualRenderer: unknown visualType "${type}"`);
    }
    return null;
  }
  return <Component />;
};

export { visualRegistry };
export default LessonVisualRenderer;
