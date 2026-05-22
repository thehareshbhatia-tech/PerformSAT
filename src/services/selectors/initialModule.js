// Pick the starting module index for a PracticeTest session.
//
// Priority: saved progress > requested section > module 0.
//
// Context: the test-list UI shows separate "Reading and Writing" and "Math"
// rows on each test card. Clicking the Math row's Timed/Untimed dropdown
// must land the user on Math Module 1, not R&W Module 1. That requires
// passing the clicked section identity through to PracticeTest's initial
// state. Extracted to its own file so it is unit-testable without pulling
// in PracticeTest's Firebase-dependent import chain.
export function pickInitialModuleIndex(test, savedProgress, initialSection) {
  if (savedProgress?.currentModule != null) return savedProgress.currentModule;
  if (initialSection) {
    const idx = test?.modules?.findIndex((m) => m.section === initialSection);
    if (idx >= 0) return idx;
  }
  return 0;
}
