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
import { inequalitiesBlocks } from './inequalities';
import { nonlinearEquationsBlocks } from './nonlinearEquations';
import { twoVariableDataBlocks } from './twoVariableData';
import { statisticalClaimsBlocks } from './statisticalClaims';
import { ratiosProportionsBlocks } from './ratiosProportions';
import { linesAnglesBlocks } from './linesAngles';
import { solvingEquationsBlocks } from './solvingEquations';
import { expressionsBlocks } from './expressions';

export const CHAPTER_BODIES = {
  // Math (source.kind 'body')
  'math-inequalities': inequalitiesBlocks,
  'math-nonlinear-equations': nonlinearEquationsBlocks,
  'math-two-variable-data': twoVariableDataBlocks,
  'math-statistical-claims': statisticalClaimsBlocks,
  'math-dimensional-analysis': ratiosProportionsBlocks,
  'math-lines-angles': linesAnglesBlocks,
  'math-solving-equations': solvingEquationsBlocks,
  'math-equivalent-expressions': expressionsBlocks,
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
