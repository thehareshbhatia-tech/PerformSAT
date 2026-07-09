/**
 * Learn-tab chapter index — the single source of truth for the textbook TOC.
 *
 * This module is deliberately LIGHT: it never imports the contentTabs corpus
 * (~1.2MB). Math chapters carry only a `moduleId` string in `source`; the block
 * data is resolved lazily by ChapterReader via a dynamic import. So importing
 * this index (e.g. from the Learn TOC) does not pull the corpus into the bundle.
 *
 * Exports:
 *   - LEARN_UNITS   — ordered [{ id, label, section, chapterIds }]
 *   - ALL_CHAPTERS  — flat array of every chapter object
 *   - getChapter(id)
 *
 * Chapter object shape:
 *   { id, unitId, title, blurb, readMinutes, cbSkills: [slug...], source }
 * where `source` is one of:
 *   { kind: 'contentTab', moduleId }  — render allContentTabs[moduleId].sections.learn
 *   { kind: 'blocks', blocks: [...] } — render the authored blocks directly
 *
 * The strategy + R&W chapters are AUTHORED BY A PARALLEL AGENT in
 * ./strategyChapters and ./rwChapters. They must tag each chapter with one of
 * the unit ids in UNIT_REGISTRY below. Empty arrays are tolerated: a unit with
 * zero chapters simply does not render.
 */

import { mathChapters } from './mathChapters';
import { rwChapters } from './rwChapters';
import { strategyChapters } from './strategyChapters';

/**
 * The three top-level sections of the Learn tab, in render order, with their
 * student-facing section headers.
 */
export const LEARN_SECTIONS = [
  { id: 'strategy', label: 'The Digital SAT' },
  { id: 'math', label: 'Math' },
  { id: 'rw', label: 'Reading & Writing' },
];

/**
 * Ordered registry of every unit. Each unit belongs to a section and carries a
 * student-facing label. Chapters are attached to a unit by matching `unitId`.
 * The parallel content agent authors strategy + R&W chapters against these ids.
 */
const UNIT_REGISTRY = [
  // ── Strategy (section header: "The Digital SAT") ──
  { id: 'strategy-foundations', label: 'How the Digital SAT Works', section: 'strategy' },
  { id: 'strategy-tactics', label: 'Test-Taking Tactics', section: 'strategy' },

  // ── Math (section header: "Math") ──
  { id: 'math-algebra', label: 'Algebra', section: 'math' },
  { id: 'math-advanced', label: 'Advanced Math', section: 'math' },
  { id: 'math-problem-solving', label: 'Problem-Solving and Data Analysis', section: 'math' },
  { id: 'math-geometry', label: 'Geometry and Trigonometry', section: 'math' },

  // ── Reading & Writing (section header: "Reading & Writing") ──
  { id: 'rw-information-ideas', label: 'Information and Ideas', section: 'rw' },
  { id: 'rw-craft-structure', label: 'Craft and Structure', section: 'rw' },
  { id: 'rw-expression-ideas', label: 'Expression of Ideas', section: 'rw' },
  { id: 'rw-conventions', label: 'Standard English Conventions', section: 'rw' },
];

/** Flat list of every chapter across all sections, in registry-unit order. */
export const ALL_CHAPTERS = [
  ...strategyChapters,
  ...mathChapters,
  ...rwChapters,
];

const CHAPTERS_BY_ID = new Map(ALL_CHAPTERS.map((c) => [c.id, c]));

/**
 * Look up a single chapter by its id.
 *
 * Use it when opening the reader from a chapter id held in view state.
 *
 * @param {string} id - chapter id (e.g. 'math-quadratics')
 * @returns {object|null} the chapter object, or null if unknown
 */
export function getChapter(id) {
  return CHAPTERS_BY_ID.get(id) || null;
}

/**
 * Ordered list of units, each with the ids of the chapters that belong to it
 * (in authored order). Units with no chapters keep an empty `chapterIds` array
 * so consumers can skip rendering them.
 *
 * @type {Array<{ id: string, label: string, section: string, chapterIds: string[] }>}
 */
export const LEARN_UNITS = UNIT_REGISTRY.map((unit) => ({
  ...unit,
  chapterIds: ALL_CHAPTERS.filter((c) => c.unitId === unit.id).map((c) => c.id),
}));
