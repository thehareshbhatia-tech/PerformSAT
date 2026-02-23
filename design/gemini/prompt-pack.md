# Gemini Prompt Pack

This pack contains sequenced prompts for generating the design system, components, and screens for PerformSAT.

---

## 1. Product Information Architecture & Blueprint Prompt
**System Context:** Act as an expert UX/UI Designer mapping out an ed-tech platform.
**Prompt:**
> "Review the attached `design-brief.md` and `screen-inventory.md` for PerformSAT. Based on this, generate a comprehensive Information Architecture (IA) outline for the product. Define the user flow for:
> 1. A new user signing up, selecting a target score, and taking their first diagnostic test.
> 2. A returning user reviewing a diagnostic report and interacting with the AI Tutor on a weak topic.
> Please output the flows as bulleted steps with the primary screens they will touch, ensuring the flow is logical, minimizes friction, and encourages continuous practice."

---

## 2. Design System & Tokens Prompt
**System Context:** Act as an expert Design Systems Engineer.
**Prompt:**
> "Using the attached `style-guardrails.md`, generate a complete, JSON-like representation of the foundational Design Tokens for PerformSAT. I need:
> 1. A comprehensive color palette (Base neutrals, Primary orange gradients, Semantic colors, and Text colors).
> 2. A typography scale mapping (sizes, weights, line-heights) for both the UI font (e.g., Inter) and the reading passage font (e.g., Georgia).
> 3. Spacing and sizing scales (e.g., margins, paddings).
> 4. Border radii and elevation/shadow tokens.
> Ensure that any token pairing (e.g., `text-on-brandPrimary`) is annotated to confirm it meets WCAG AA contrast ratios."

---

## 3. Core Component Library Prompt
**System Context:** Act as an expert UI Designer building a robust component library.
**Prompt:**
> "Using the design tokens generated in step 2, define the visual specifications and states (default, hover, focus, disabled, active) for the following core components of PerformSAT:
> 1. Primary Button (using the orange gradient).
> 2. Secondary/Ghost Buttons.
> 3. Multiple Choice Option Radio Cards (for test questions).
> 4. Data Cards (for the dashboard, e.g., 'Target Score' or 'Next Lesson').
> 5. AI Tutor Chat Bubble (user message vs. AI message).
> 6. Tabs (for switching between Reading/Writing and Math).
> Provide the spec as a detailed text description of CSS/Tailwind-like properties for each state, ensuring clarity, Acely-like polish, and strict adherence to the orange-gradient guardrails."

---

## 4. Screen Composition Prompt (Example: Student Dashboard)
**System Context:** Act as a Senior Product Designer creating high-fidelity layout specs.
**Prompt:**
> "Design the layout for the 'Student Dashboard' screen defined in `screen-inventory.md`. Using the established components and tokens:
> 1. Describe the structural layout (e.g., Sidebar vs. Top Nav, Main Content Area).
> 2. Detail the exact components used in the hero section (e.g., ScoreSlider showing current vs. goal score using the orange gradient).
> 3. Detail the layout of the 'Next Up' recommendation and the 'Diagnostic Widget'.
> 4. Specify the responsive behavior for Mobile (e.g., how the sidebar collapses, how cards stack).
> Provide the composition as an annotated wireframe in text format, describing what goes where and the spacing between major sections."

---

## 5. Interaction & Edge Case Prompt
**System Context:** Act as a UX Researcher and Interaction Designer.
**Prompt:**
> "For the 'Practice Test' interface, detail the micro-interactions and edge states. Specifically:
> 1. What happens visually when a user selects an answer (motion, color change)?
> 2. How is the 10-minute warning on the test timer handled visually without being overly intrusive?
> 3. What is the Empty State for the 'Diagnostic Report' before a user has taken any tests? Provide the visual layout and copy.
> 4. How does the UI handle a loading state when generating an AI Tutor response? Describe the skeleton or animation used."
