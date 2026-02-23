# PerformSAT - Screen Inventory & Information Architecture

## 1. Onboarding & Auth
- **Sign Up / Login:** Clean, welcoming entry point.
- **Onboarding Flow:** Set target score, select dream colleges (`CollegePicker`), choose test date.

## 2. Dashboard / Home (`StudentDashboard`)
- **Hero:** Current estimated score vs. goal score (`ScoreSlider`).
- **Next Up:** Recommendation engine (e.g., "Take Practice Test 3" or "Review Algebra").
- **Diagnostic Widget:** Quick glance at recent performance (`DashboardDiagnosticWidget`).

## 3. Practice Test Flow (`PracticeTestLayout`, `PracticeTest`)
- **Test Intro:** Rules, timing, start button.
- **Testing Interface:** Mimics Bluebook (split screen for Reading, calculator for Math, timer, question navigator).
- **Question Types:** Text, math expressions (`MathText`), graphs (`QuestionRenderer`, `SATLineGraph`, etc.).

## 4. Results & Diagnostics
- **Test Results (`TestResults`):** High-level summary of a completed test.
- **Diagnostic Report (`DiagnosticReport`):** Deep dive into performance across categories (Reading, Writing, Math).
- **Skill Breakdown (`SkillBreakdownPanel`, `SkillDiagnosticSummary`):** Granular view of specific skills (e.g., "Heart of Algebra" vs. "Passport to Advanced Math").

## 5. Learning & Practice
- **Lesson Browser (`LessonBrowser`):** Topic-based directory of lessons.
- **Practice Lesson (`PracticeLesson`):** Interactive mini-quiz with step-by-step solutions (`SolutionExplanation`).
- **AI Tutor (`AiTutorChat`, `ProactiveHint`):** Conversational interface for personalized help.

## 6. Settings & Profile
- **Profile (`Profile`):** User details, subscription status, notification preferences.

## 7. Global Elements (`AppShell`)
- **Navigation:** Top or side nav depending on viewport.
- **Empty States (`EmptyState`):** Encouraging illustrations when no data exists.
- **Loading / Errors (`Skeleton`, `ErrorBoundary`):** Smooth transitions and helpful error recovery.
