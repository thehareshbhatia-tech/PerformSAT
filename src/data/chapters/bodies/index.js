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
 * by src/data/chapters/__tests__/rwBodies.test.js.
 */

import { boundariesBlocks } from './boundaries';
import { centralIdeasBlocks } from './centralIdeas';
import { commandOfEvidenceQuantitativeBlocks } from './commandOfEvidenceQuantitative';
import { commandOfEvidenceTextualBlocks } from './commandOfEvidenceTextual';
import { crossTextConnectionsBlocks } from './crossTextConnections';
import { formStructureAndSenseBlocks } from './formStructureAndSense';
import { inferencesBlocks } from './inferences';
import { rhetoricalSynthesisBlocks } from './rhetoricalSynthesis';
import { textStructureAndPurposeBlocks } from './textStructureAndPurpose';
import { transitionsBlocks } from './transitions';
import { wordsInContextBlocks } from './wordsInContext';

export const CHAPTER_BODIES = {
  'rw-central-ideas': centralIdeasBlocks,
  'rw-inferences': inferencesBlocks,
  'rw-command-of-evidence-textual': commandOfEvidenceTextualBlocks,
  'rw-command-of-evidence-quantitative': commandOfEvidenceQuantitativeBlocks,
  'rw-words-in-context': wordsInContextBlocks,
  'rw-text-structure-and-purpose': textStructureAndPurposeBlocks,
  'rw-cross-text-connections': crossTextConnectionsBlocks,
  'rw-transitions': transitionsBlocks,
  'rw-rhetorical-synthesis': rhetoricalSynthesisBlocks,
  'rw-boundaries': boundariesBlocks,
  'rw-form-structure-and-sense': formStructureAndSenseBlocks,
};
