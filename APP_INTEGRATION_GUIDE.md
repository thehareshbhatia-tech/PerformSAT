# App.jsx Integration Guide

The final step is to update `src/App.jsx` to integrate all the new Firebase backend components. Here's what needs to be done:

## Current State

Your `src/App.jsx` is currently a 10,408-line monolithic file with:
- Hardcoded lesson data (now extracted to `src/data/lessons/`)
- Simulated authentication
- In-memory progress tracking
- No routing

## Target State

A modern React app with:
- Firebase authentication
- Real-time progress sync
- Admin dashboard for principals
- Student view for students
- React Router for navigation

## Required Changes to App.jsx

### 1. Add Imports

```javascript
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './hooks/useAuth';
import { useProgress } from './hooks/useProgress';
import MagicLinkLogin from './components/Auth/MagicLinkLogin';
import AuthCallback from './components/Auth/AuthCallback';
import AdminDashboard from './components/Admin/AdminDashboard';
import StudentDetail from './components/Admin/StudentDetail';
import { allLessons } from './data/lessons';
```

### 2. Create a New App Component Structure

```javascript
const App = () => {
  const { user, loading, sendMagicLink, logout } = useAuth();
  const { completedLessons, markLessonComplete, getModuleProgress } = useProgress(user?.uid);

  // Your existing modules array
  const modules = [ /* ... keep existing modules array ... */ ];

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={
          user ? (
            user.role === 'principal' ? <Navigate to="/admin" /> : <StudentView />
          ) : (
            <MagicLinkLogin onSendLink={sendMagicLink} />
          )
        } />

        <Route path="/auth/verify" element={
          <AuthCallback onComplete={() => window.location.href = '/'} />
        } />

        {/* Protected Student Routes */}
        <Route path="/modules" element={
          user && user.role === 'student' ? <StudentView /> : <Navigate to="/" />
        } />

        {/* Protected Admin Routes */}
        <Route path="/admin" element={
          user && user.role === 'principal' ? (
            <AdminDashboard user={user} modules={modules} />
          ) : (
            <Navigate to="/" />
          )
        } />

        <Route path="/admin/student/:userId" element={
          user && user.role === 'principal' ? (
            <StudentDetail modules={modules} />
          ) : (
            <Navigate to="/" />
          )
        } />
      </Routes>
    </BrowserRouter>
  );
};
```

### 3. Keep Your Existing Student View Components

You can keep most of your existing lesson viewing code, but update it to:
- Use `completedLessons` from `useProgress` instead of local state
- Call `markLessonComplete()` from the hook instead of local setState
- Import `allLessons` from `'./data/lessons'` instead of hardcoding

### 4. Update Progress Tracking

Replace this:
```javascript
const [completedLessons, setCompletedLessons] = useState({});

const markLessonComplete = (moduleId, lessonId) => {
  setCompletedLessons(prev => ({
    ...prev,
    [`${moduleId}-${lessonId}`]: true
  }));
};
```

With this:
```javascript
const { completedLessons, markLessonComplete, getModuleProgress } = useProgress(user?.uid);

// When marking lesson complete:
markLessonComplete(moduleId, lessonId, {
  title: lesson.title,
  type: lesson.type
});
```

### 5. Update Header/Navigation

Replace the logout logic:
```javascript
// Old
const handleLogout = () => {
  setUser(null);
};

// New
const { logout } = useAuth();
// Call logout() when user clicks logout button
```

## Alternative: Quick Start Template

If you want to start fresh with a clean App.jsx, here's a minimal template:

```javascript
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './hooks/useAuth';
import { useProgress } from './hooks/useProgress';
import MagicLinkLogin from './components/Auth/MagicLinkLogin';
import AuthCallback from './components/Auth/AuthCallback';
import AdminDashboard from './components/Admin/AdminDashboard';
import StudentDetail from './components/Admin/StudentDetail';
import { allLessons } from './data/lessons';

// Your existing modules array
const modules = [
  { id: 'linear-equations', title: 'Linear Equations', description: 'Slope, intercepts, and graphing lines', lessonCount: 24 },
  { id: 'functions', title: 'Functions', description: 'Function notation and graph interpretation', lessonCount: 10 },
  { id: 'systems', title: 'System of Equations', description: 'Solving for multiple unknowns', lessonCount: 14 },
  { id: 'transformations', title: 'Transformations', description: 'Shifting, stretching, and reflecting functions', lessonCount: 15 },
  { id: 'exponents', title: 'Exponents & Exponential Functions', description: 'Exponent rules and growth/decay models', lessonCount: 12 },
  { id: 'percents', title: 'Percents', description: 'Percent change and word problems', lessonCount: 17 },
  { id: 'equivalent-expressions', title: 'Equivalent Expressions', description: 'Verifying equivalence with DESMOS', lessonCount: 3 },
  { id: 'quadratics', title: 'Quadratics', description: 'Parabolas, factoring, and the quadratic formula', lessonCount: 27 },
  { id: 'dimensional-analysis', title: 'Dimensional Analysis', description: 'Unit conversions and word problem setup', lessonCount: 5 },
  { id: 'statistics', title: 'Statistics', description: 'Mean, median, standard deviation, and data analysis', lessonCount: 25 },
  { id: 'radians-degrees', title: 'Radians & Degrees', description: 'Angle measure conversions', lessonCount: 4 },
  { id: 'circles', title: 'Circles', description: 'Circle equations, arcs, and sectors', lessonCount: 33 },
  { id: 'volume', title: 'Volume', description: '3D shapes and composite figures', lessonCount: 16 },
  { id: 'triangles', title: 'Triangles', description: 'Pythagorean theorem and trigonometry', lessonCount: 35 }
];

const App = () => {
  const { user, loading, sendMagicLink, logout } = useAuth();
  const { completedLessons, markLessonComplete, getModuleProgress, isLessonCompleted } = useProgress(user?.uid);

  // Your existing state for navigation
  const [activeModule, setActiveModule] = useState(null);
  const [activeLesson, setActiveLesson] = useState(null);
  const [view, setView] = useState('modules');

  if (loading) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        Loading...
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          !user ? (
            <MagicLinkLogin onSendLink={sendMagicLink} />
          ) : user.role === 'principal' ? (
            <Navigate to="/admin" />
          ) : (
            // Your existing student view JSX here
            <div>Student View - Modules, Lessons, etc.</div>
          )
        } />

        <Route path="/auth/verify" element={
          <AuthCallback onComplete={() => window.location.href = '/'} />
        } />

        <Route path="/admin" element={
          user && user.role === 'principal' ? (
            <AdminDashboard user={user} modules={modules} />
          ) : (
            <Navigate to="/" />
          )
        } />

        <Route path="/admin/student/:userId" element={
          user && user.role === 'principal' ? (
            <StudentDetail modules={modules} />
          ) : (
            <Navigate to="/" />
          )
        } />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
```

## Step-by-Step Migration Plan

### Option A: Gradual Migration (Recommended)
1. Create a backup of your current App.jsx
2. Add the new imports at the top
3. Replace authentication logic with `useAuth()`
4. Replace progress tracking with `useProgress()`
5. Wrap everything in `<BrowserRouter>`
6. Add admin routes
7. Test thoroughly

### Option B: Fresh Start
1. Rename current `App.jsx` to `App.old.jsx`
2. Create new `App.jsx` with the template above
3. Copy over your existing lesson rendering JSX into the student view section
4. Update references to use new hooks
5. Test thoroughly

## Testing Checklist

After updating App.jsx:

- [ ] Run `npm install` to ensure all dependencies are installed
- [ ] Run `npm start` and check for compilation errors
- [ ] Test login flow (magic link)
- [ ] Test lesson completion (check Firestore)
- [ ] Test admin dashboard (with principal account)
- [ ] Test student detail view
- [ ] Test logout
- [ ] Test page refresh (session persistence)

## Common Issues

### Issue: "useAuth is not a function"
**Solution:** Check that the import path is correct: `import { useAuth } from './hooks/useAuth';`

### Issue: "Cannot read property 'uid' of null"
**Solution:** Add conditional check: `useProgress(user?.uid)` instead of `useProgress(user.uid)`

### Issue: Admin dashboard not showing
**Solution:** Verify user role is set correctly in Firestore users collection

### Issue: Progress not saving
**Solution:**
1. Check that Firebase config is loaded (check `.env.local`)
2. Verify Firestore security rules are deployed
3. Check browser console for Firebase errors

## Need Help?

If you need help integrating App.jsx:
1. Check the browser console for errors
2. Review the existing code structure
3. Test each hook individually
4. Verify Firebase is initialized correctly

The backend infrastructure is complete - this is just the final integration step!
