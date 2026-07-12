/**
 * Chapter-body corpus — the heavy textbook content for every
 * `source.kind === 'body'` chapter (R&W and math alike).
 *
 * ChapterReader
 * dynamic-import()s it when an R&W chapter opens, so the chapter index (and
 * every screen that imports it) stays light. NEVER static-import this module
 * from src/data/chapters/index.js, rwChapters.js, or any component — that
 * would pull the whole corpus into the entry bundle.
 *
 * Keyed by chapter id. Each body file exports one blocks array following the
 * locked textbook template (docs/LEARN_TEXTBOOK_OVERHAUL_PLAN.md §4), gated
 * by src/data/chapters/__tests__/bodies.test.js.
 */

import { centralIdeasBlocks } from './centralIdeas';
import { commandOfEvidenceQuantitativeBlocks } from './commandOfEvidenceQuantitative';
import { commandOfEvidenceTextualBlocks } from './commandOfEvidenceTextual';
import { crossTextConnectionsBlocks } from './crossTextConnections';
import { inferencesBlocks } from './inferences';
import { textStructureAndPurposeBlocks } from './textStructureAndPurpose';
import { wordsInContextBlocks } from './wordsInContext';
// Grammar / Writing — lean per-skill lessons (replaced the dense boundaries +
// formStructureAndSense + transitions + rhetoricalSynthesis bodies 2026-07-12)
import { gTransitionsBlocks } from './gTransitions';
import { gRhetoricalSynthesisBlocks } from './gRhetoricalSynthesis';
import { gSentenceBoundariesBlocks } from './gSentenceBoundaries';
import { gCommasBlocks } from './gCommas';
import { gSubjectVerbAgreementBlocks } from './gSubjectVerbAgreement';
import { gPronounsBlocks } from './gPronouns';
import { gVerbsBlocks } from './gVerbs';
import { gModifiersParallelismBlocks } from './gModifiersParallelism';
import { gApostrophesBlocks } from './gApostrophes';
// Math — lean per-skill lessons (every math chapter is now source.kind 'body';
// the dense contentTab composition path was retired 2026-07-12).
import { solvingEquationsBlocks } from './solvingEquations';
import { mLinearEquationsBlocks } from './mLinearEquations';
import { mFunctionsBlocks } from './mFunctions';
import { mSystemsBlocks } from './mSystems';
import { inequalitiesBlocks } from './inequalities';
import { expressionsBlocks } from './expressions';
import { mExponentsBlocks } from './mExponents';
import { mQuadraticsBlocks } from './mQuadratics';
import { mTransformationsBlocks } from './mTransformations';
import { nonlinearEquationsBlocks } from './nonlinearEquations';
import { mPercentsBlocks } from './mPercents';
import { mStatisticsBlocks } from './mStatistics';
import { twoVariableDataBlocks } from './twoVariableData';
import { statisticalClaimsBlocks } from './statisticalClaims';
import { ratiosProportionsBlocks } from './ratiosProportions';
import { linesAnglesBlocks } from './linesAngles';
import { mRadiansBlocks } from './mRadians';
import { mTrianglesBlocks } from './mTriangles';
import { mRightTriangleTrigBlocks } from './mRightTriangleTrig';
import { mCirclesBlocks } from './mCircles';
import { mVolumeBlocks } from './mVolume';

export const CHAPTER_BODIES = {
  // Math (source.kind 'body') — lean per-skill lessons
  'math-solving-equations': solvingEquationsBlocks,
  'math-linear-equations': mLinearEquationsBlocks,
  'math-functions': mFunctionsBlocks,
  'math-systems': mSystemsBlocks,
  'math-inequalities': inequalitiesBlocks,
  'math-equivalent-expressions': expressionsBlocks,
  'math-exponents': mExponentsBlocks,
  'math-quadratics': mQuadraticsBlocks,
  'math-transformations': mTransformationsBlocks,
  'math-nonlinear-equations': nonlinearEquationsBlocks,
  'math-percents': mPercentsBlocks,
  'math-statistics': mStatisticsBlocks,
  'math-two-variable-data': twoVariableDataBlocks,
  'math-statistical-claims': statisticalClaimsBlocks,
  'math-dimensional-analysis': ratiosProportionsBlocks,
  'math-lines-angles': linesAnglesBlocks,
  'math-radians-degrees': mRadiansBlocks,
  'math-triangles': mTrianglesBlocks,
  'math-right-triangle-trig': mRightTriangleTrigBlocks,
  'math-circles': mCirclesBlocks,
  'math-volume': mVolumeBlocks,
  // Reading (still dense — lean rewrite pending in a later wave)
  'rw-central-ideas': centralIdeasBlocks,
  'rw-inferences': inferencesBlocks,
  'rw-command-of-evidence-textual': commandOfEvidenceTextualBlocks,
  'rw-command-of-evidence-quantitative': commandOfEvidenceQuantitativeBlocks,
  'rw-words-in-context': wordsInContextBlocks,
  'rw-text-structure-and-purpose': textStructureAndPurposeBlocks,
  'rw-cross-text-connections': crossTextConnectionsBlocks,
  // Writing & Grammar — lean per-skill lessons
  'rw-transitions': gTransitionsBlocks,
  'rw-rhetorical-synthesis': gRhetoricalSynthesisBlocks,
  'rw-sentence-boundaries': gSentenceBoundariesBlocks,
  'rw-commas': gCommasBlocks,
  'rw-subject-verb-agreement': gSubjectVerbAgreementBlocks,
  'rw-pronouns': gPronounsBlocks,
  'rw-verbs': gVerbsBlocks,
  'rw-modifiers-parallelism': gModifiersParallelismBlocks,
  'rw-apostrophes': gApostrophesBlocks,
};
