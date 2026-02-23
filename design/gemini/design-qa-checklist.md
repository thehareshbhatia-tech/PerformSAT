# PerformSAT - Design QA Checklist

## 1. Visual Consistency
- [ ] Do all Primary Buttons use the `brandPrimary` gradient?
- [ ] Are all data cards using the `2xl` (16px) border radius and `slate-200` border?
- [ ] Is the orange gradient *avoided* behind dense text or math equations?
- [ ] Are shadows soft and subtle, primarily using the defined shadow tokens?

## 2. Accessibility (A11y)
- [ ] Does white text (#FFFFFF) on the `brandPrimary` background pass WCAG AA (at least 4.5:1 for normal text)?
- [ ] Are focus rings clearly visible (e.g., 2px orange outline) when tabbing through multiple-choice options?
- [ ] Do success/error states rely on icons or text in addition to green/red colors? (e.g., Checkmark for correct, X for incorrect).

## 3. Responsiveness
- [ ] Does the top navigation collapse into a hamburger menu on screens < 768px?
- [ ] Do the Dashboard grid cards stack vertically on mobile?
- [ ] Does the Practice Test split-screen (passage on left, questions on right) stack vertically on smaller screens (passage on top, questions below)?

## 4. Interaction Completeness
- [ ] Do all buttons have defined Hover, Focus, and Disabled states?
- [ ] Is the Multiple Choice Option Card's selected state clearly distinct from its hover state?
- [ ] Are empty states and loading states defined for all dynamic data widgets?
