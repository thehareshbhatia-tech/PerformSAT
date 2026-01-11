# Troubleshooting Progress Tracking

## Issue: Lessons not being marked as complete

### What to Check:

1. **Go to Firebase Console**: https://console.firebase.google.com/project/performsat-production/firestore/databases/-default-/data/

2. **Check for these collections**:
   - `schools` - Should have 1 document (TEST2026)
   - `users` - Should have 2 documents (principal + student)
   - `progress` - Should appear after marking a lesson complete

3. **Click on the `users` collection**:
   - You should see TWO documents
   - One with email: thehareshbhatia@gmail.com (role: principal)
   - One with email: hareshrajbhatia@gmail.com (role: student)
   - Note the document IDs (the random strings)

4. **After clicking "Mark Complete" as a student**:
   - Refresh the Firestore page
   - Look for a `progress` collection
   - It should have a document with the same ID as your student user
   - Click on it to see the completed lessons

## Expected Behavior:

When you click "Mark Complete":
1. Button should change from orange to green
2. Text should change to "✓ Completed"
3. Progress bar should update
4. Data should save to Firestore

## If Button Doesn't Change:

The issue is likely one of these:
1. User object is null (not logged in properly)
2. useProgress hook isn't loading
3. Lesson data isn't being found

## Quick Test:

1. Log in as student (hareshrajbhatia@gmail.com)
2. Open browser console (F12)
3. Type this in console:
   ```javascript
   localStorage.getItem('emailForSignIn')
   ```
4. It should show your email
5. If it shows null, you're not authenticated properly

## Manual Firestore Check:

Go to Firestore Console and verify:

### Collection: `schools`
- Should have 1 document
- Field `code`: "TEST2026"
- Field `isActive`: true

### Collection: `users`
- Should have 2 documents
- Each with: email, role, schoolId, schoolCode

### Collection: `progress` (created after first lesson completion)
- Should have document(s) matching user IDs
- Contains: completedLessons, totalLessonsCompleted

## Still Not Working?

Check browser console for errors when clicking "Mark Complete". Look for:
- Firebase permission errors
- Missing user errors
- Network errors

The most common issue is that the user profile wasn't created properly in Firestore during signup.
