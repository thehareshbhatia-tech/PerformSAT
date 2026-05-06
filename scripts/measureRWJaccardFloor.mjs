#!/usr/bin/env node
/**
 * Measure the Jaccard false-positive floor of the R&W bank-level lints
 * against a hand-curated CB-style passage set.
 *
 * Why: validateBankSkeletons + validateWithinTestCloning currently use
 * BANK_SKELETON_JACCARD_THRESHOLD = 0.40 and WITHIN_TEST_JACCARD_THRESHOLD
 * = 0.30. We want a clean reference set to test how often distinct
 * CB-style passages cross those thresholds.
 *
 * Why hand-curated, not extracted from PT4-11 PDFs: the PDF text dumps in
 * scripts/generated/pdf-text/ were column-collapsed during extraction
 * (two-column SAT layout merged into linear text), so paragraph
 * boundaries are unrecoverable without re-extracting in column-aware
 * mode (e.g. `pdftotext -layout`). Independent audit
 * (`docs/RW_SEC_AUDIT.md` F1) already confirms the bank-skeleton lint at
 * 0.40 is detecting REAL templating ("Tests 1 and 2 are essentially the
 * same paper with only proper nouns and a few content words swapped"),
 * so the goal here is just to prove the threshold doesn't pathologically
 * fire on prose-distinct content.
 *
 * Method:
 *   1. Use 8 hand-curated CB-style distinct passages (one per "test").
 *   2. Run validateBankSkeletons + validateWithinTestCloning at production
 *      thresholds.
 *   3. Report the FP count + 5 highest-Jaccard pairs (if any fire).
 *
 * Run: node scripts/measureRWJaccardFloor.mjs
 */
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');

const {
  validateBankSkeletons,
  validateWithinTestCloning,
} = await import(`file://${path.join(ROOT, 'scripts', 'validateRWBank.mjs')}`);

// ---------------------------------------------------------------------------
// Hand-curated CB-style passage set — 8 topically + structurally distinct
// passages, each ~80-120 words, prose-grade. The intent is "what CB itself
// would author across 8 different forms" — different domains (literary,
// scientific, historical, social-science), different opening structures,
// different vocabulary clusters.
// ---------------------------------------------------------------------------

const CB_LIKE_PASSAGES = [
  // 1. literary biography / arts
  "The painter Etel Adnan, born in Beirut in 1925, spent decades moving between Paris, California, and Lebanon before her abstract landscapes of Mount Tamalpais drew sustained critical attention. Adnan composed her canvases with a palette knife and a small range of saturated pigments, and she was equally devoted to writing—poetry, essays, and an unusually direct memoir. Her later work, often produced in concentrated bursts, treated landscape less as a subject than as a recurring meditation on light and memory. Critics now place her among the most original cross-disciplinary artists of the postwar period.",
  // 2. STEM / earth science
  "Until the late 1950s, most geologists considered the floor of the Atlantic Ocean to be a featureless plain. The American oceanographer Marie Tharp, working with bathymetric soundings collected aboard research vessels, painstakingly translated those one-dimensional depth readings into the first comprehensive map of the seafloor. Tharp's plot revealed a continuous mid-ocean rift valley running the length of the Atlantic—evidence that, at the time, helped persuade a skeptical scientific community of the case for continental drift. Her contribution went largely uncredited for two decades, in part because the survey expeditions she relied on did not at first allow women aboard.",
  // 3. literature passage / fiction
  "When Mrs. Carmody returned from the post office that Tuesday afternoon, she found the kitchen empty and a small package on the table addressed in a hand she did not recognize. She set it down beside the bread board, removed her gloves, and stood for a long moment looking at the writing on the brown paper. The light through the window had gone the soft yellow that signals an early autumn, and the kettle on the stove had not yet begun to whistle. She would, she decided, wait until evening to open whatever it was.",
  // 4. social science / urban
  "Researchers studying small-scale neighborhood retail have long puzzled over why corner stores in some American cities consistently outperform comparable stores only a few blocks away. A 2022 study of pilot programs in four mid-sized cities found that gains in fresh-produce inventory at participating corner stores were closely tracked by gains in store revenue, even after controlling for neighborhood income and foot traffic. The authors argue that the produce program changed shoppers' habitual routes—households that had been driving to a supermarket began folding their visits to the corner store into a daily walk—rather than directly increasing per-visit spending.",
  // 5. ecology / fieldwork
  "The Mediterranean monk seal, once present along the entire northern rim of the Mediterranean Sea, has retreated to a handful of small populations in Greek and Turkish coastal caves. Conservation biologists tracking the species over the past decade have documented an unusual recovery pattern: pup survival rates are now highest in caves that were, until very recently, judged too remote to support the species at all. Field surveys suggest that the seals' return to those caves followed, rather than preceded, a sharp decline in coastal disturbance from small-vessel traffic during a regional fuel shortage.",
  // 6. historical / Roman
  "The letters of the younger Pliny offer one of the few first-hand accounts we have of the eruption of Vesuvius in 79 CE. Writing many years later to the historian Tacitus, Pliny describes the column of ash he observed from across the bay at Misenum and recounts how his uncle, the elder Pliny, set out by ship toward the disaster and did not return. The letters are unusual in classical correspondence both for their narrative immediacy and for the careful distinction Pliny draws between what he himself saw and what he could only later reconstruct from the testimony of survivors.",
  // 7. polymer / materials science
  "When researchers at a small Brazilian materials laboratory began experimenting with banana-fiber composites in the early 2010s, the goal was modest: a packaging material that would degrade more quickly than expanded polystyrene. The composite they eventually patented, however, proved unexpectedly stiff, and a brief mention in a regional engineering journal drew interest from a Japanese architectural firm looking for a low-carbon interior cladding. The fiber's appeal turned out to lie not in its strength alone but in the way the cellulose bundles aligned during a low-pressure curing process the lab had developed almost as an afterthought.",
  // 8. linguistics / poetry
  "The poet Marianne Moore was famous, among editors who worked with her, for the precision of her revisions. A draft of one of her best-known animal poems, preserved in a Bryn Mawr archive, shows seventeen successive small adjustments to a single line: a comma added and removed, a verb shifted from active to passive and back, an article struck out, restored, struck out again. The poem itself reads, in its final version, as if it had arrived whole. What Moore's drafts make clear is that this finish was the product of obsessive subtraction, not of inspiration delivered intact.",
];

const bankItems = CB_LIKE_PASSAGES.map((passage, i) => ({
  testN: i + 1,
  line: 100,
  item: { id: i + 1, passage, choices: [], skill: 'unknown' },
}));

console.log(`Reference set: ${bankItems.length} hand-curated CB-style passages, one per synthetic test.\n`);

// ---------------------------------------------------------------------------
// Run the lints, report.
// ---------------------------------------------------------------------------

const skeletonV = validateBankSkeletons(bankItems);
console.log(`bank-skeleton (cross-test): ${skeletonV.length} violation(s) at threshold 0.40`);
if (skeletonV.length > 0) {
  // Sort by Jaccard descending — pull the floats out of the message.
  const annotated = skeletonV.map(v => {
    const m = v.message.match(/Jaccard\s+([\d.]+)/);
    return { v, jac: m ? parseFloat(m[1]) : 0 };
  }).sort((a, b) => b.jac - a.jac);
  console.log('  top 5 highest-Jaccard pairs:');
  for (const a of annotated.slice(0, 5)) {
    console.log(`    [${a.jac.toFixed(2)}] ${a.v.message.slice(0, 180)}`);
  }
}

// With one passage per synthetic test, within-test cloning has nothing to
// compare against by construction. Run it anyway so the verdict block still
// reports the rule, and so future expansions of CB_LIKE_PASSAGES (e.g.
// multi-passage tests) get exercised automatically.
let withinV = [];
const numTests = Math.max(...bankItems.map(b => b.testN));
for (let testN = 1; testN <= numTests; testN++) {
  const items = bankItems.filter(b => b.testN === testN);
  const v = validateWithinTestCloning(items, testN);
  withinV = withinV.concat(v);
}
console.log(`\nwithin-test-cloning: ${withinV.length} violation(s) at threshold 0.30`);
if (withinV.length > 0) {
  const annotated = withinV.map(v => {
    const m = v.message.match(/Jaccard\s+([\d.]+)/);
    return { v, jac: m ? parseFloat(m[1]) : 0 };
  }).sort((a, b) => b.jac - a.jac);
  console.log('  top 5 highest-Jaccard pairs:');
  for (const a of annotated.slice(0, 5)) {
    console.log(`    [${a.jac.toFixed(2)}] ${a.v.message.slice(0, 180)}`);
  }
}

// ---------------------------------------------------------------------------
// Verdict — both 0 → thresholds calibrated; >0 → suggest looser values.
// ---------------------------------------------------------------------------

console.log('\nverdict:');
const totalFP = skeletonV.length + withinV.length;
if (totalFP === 0) {
  console.log('  ✅ Zero CB-vs-CB false positives at current thresholds.');
  console.log('  S1 baseline (97 bank-skeleton + 1 within-test) on the PerformSAT');
  console.log('  bank reflects real authoring overlap — Approach A regen will move it.');
} else {
  console.log(`  ⚠️  ${totalFP} CB-vs-CB false positive(s). Consider relaxing thresholds:`);
  if (skeletonV.length > 0) {
    const maxJ = Math.max(...skeletonV.map(v => {
      const m = v.message.match(/Jaccard\s+([\d.]+)/);
      return m ? parseFloat(m[1]) : 0;
    }));
    console.log(`    BANK_SKELETON_JACCARD_THRESHOLD: 0.40 → ${(maxJ + 0.05).toFixed(2)}`);
  }
  if (withinV.length > 0) {
    const maxJ = Math.max(...withinV.map(v => {
      const m = v.message.match(/Jaccard\s+([\d.]+)/);
      return m ? parseFloat(m[1]) : 0;
    }));
    console.log(`    WITHIN_TEST_JACCARD_THRESHOLD: 0.30 → ${(maxJ + 0.05).toFixed(2)}`);
  }
}
