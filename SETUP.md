# PerformSAT Backend Setup Guide

This guide will walk you through setting up the Firebase backend for your PerformSAT application.

## Prerequisites

- Node.js and npm installed
- A Google account for Firebase
- Git (for version control)

## Step 1: Install Dependencies

First, install all the required packages:

```bash
npm install
```

This will install:
- `firebase` - Firebase SDK for authentication and database
- `react-router-dom` - For client-side routing (admin dashboard)

## Step 2: Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project" or "Create a project"
3. Enter project name: **PerformSAT-Production** (or your preferred name)
4. Click "Continue"
5. Optionally enable Google Analytics
6. Click "Create project"

## Step 3: Enable Firebase Services

### A. Authentication

1. In Firebase Console, click **Authentication** in the left sidebar
2. Click **"Get started"**
3. Go to the **"Sign-in method"** tab
4. Find **"Email/Password"** and click on it
5. Enable **"Email link (passwordless sign-in)"** (toggle it ON)
6. Click **"Save"**

### B. Firestore Database

1. In Firebase Console, click **Firestore Database** in the left sidebar
2. Click **"Create database"**
3. Select **"Start in production mode"**
4. Choose a location (e.g., `us-central1` or closest to your users)
5. Click **"Enable"**

### C. Firebase Hosting (Optional - for deployment)

1. In Firebase Console, click **Hosting** in the left sidebar
2. Click **"Get started"** to enable it

## Step 4: Get Firebase Configuration

1. In Firebase Console, click the **gear icon** (⚙️) next to "Project Overview"
2. Select **"Project settings"**
3. Scroll down to **"Your apps"** section
4. Click the **Web icon** (`</>`) to add a web app
5. Give it a nickname: **"PerformSAT Web App"**
6. Click **"Register app"**
7. You'll see a `firebaseConfig` object - copy these values

## Step 5: Configure Environment Variables

1. Create a `.env.local` file in the project root (already exists as template)
2. Fill in your Firebase credentials:

```env
REACT_APP_FIREBASE_API_KEY=your-api-key-here
REACT_APP_FIREBASE_AUTH_DOMAIN=your-project-id.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=your-project-id
REACT_APP_FIREBASE_STORAGE_BUCKET=your-project-id.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
REACT_APP_FIREBASE_APP_ID=your-app-id
```

**Important:** Never commit `.env.local` to Git (it's already in `.gitignore`)

## Step 6: Deploy Firestore Security Rules

Install Firebase CLI:

```bash
npm install -g firebase-tools
```

Login to Firebase:

```bash
firebase login
```

Initialize Firebase in your project:

```bash
firebase init
```

Select:
- Firestore
- Hosting

Deploy security rules:

```bash
firebase deploy --only firestore:rules
firebase deploy --only firestore:indexes
```

## Step 7: Create Test School Data

Before you can test the app, create at least one school in Firestore:

1. Go to Firebase Console → Firestore Database
2. Click **"Start collection"**
3. Collection ID: `schools`
4. Click **"Next"**
5. Add a document with these fields:

```
Document ID: (Auto-generate)

Fields:
- code: "TEST2026" (string)
- name: "Test High School" (string)
- adminEmail: "principal@test.com" (string) - use your email if you want admin access
- isActive: true (boolean)
- createdAt: [Click "Add field" → select "timestamp" type → use current time]
```

6. Click **"Save"**

## Step 8: Run the Application

Start the development server:

```bash
npm start
```

The app will open at `http://localhost:3000`

## Step 9: Test the Application

### Test Student Flow:

1. Go to `http://localhost:3000`
2. Enter your email, name, and school code (**TEST2026**)
3. Click "Send Magic Link"
4. Check your email for the magic link
5. Click the link to sign in
6. You should land on the modules view

### Test Principal Flow:

1. Use the email you set as `adminEmail` in the school document
2. Follow the same steps as student
3. After signing in, you should see the admin dashboard instead of modules
4. You'll see student list, statistics, and can click on any student to see their progress

## Step 10: Deploy to Production (Optional)

### Deploy to Firebase Hosting:

```bash
npm run build
firebase deploy --only hosting
```

Your app will be live at: `https://your-project-id.firebaseapp.com`

### Deploy to Vercel (Alternative):

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Add environment variables in Vercel dashboard
5. Deploy

**Important:** Add your production URL to Firebase Authentication:
1. Firebase Console → Authentication → Settings
2. Add your domain to "Authorized domains"

## Troubleshooting

### Issue: "Firebase: Error (auth/unauthorized-domain)"
**Solution:** Add your domain to Firebase Authentication authorized domains:
- Firebase Console → Authentication → Settings → Authorized domains

### Issue: "Permission denied" when accessing Firestore
**Solution:** Make sure you've deployed the security rules:
```bash
firebase deploy --only firestore:rules
```

### Issue: Magic link not working
**Solution:**
- Check that Email Link authentication is enabled in Firebase Console
- Verify the action URL in Authentication settings
- Check spam folder for the email

### Issue: Student can't see their progress after refresh
**Solution:**
- Verify Firestore security rules are deployed
- Check browser console for errors
- Ensure offline persistence is working (check Firebase config)

## Next Steps

### Create More Schools:

Repeat Step 7 to create schools for different institutions. Each school needs:
- Unique code (e.g., "LINCOLN2026", "OAKWOOD2026")
- School name
- Principal's email
- isActive set to true

### Add Additional Principals:

When a principal signs up, Firebase automatically detects if their email matches the `adminEmail` field in a school document and assigns them the "principal" role.

### Monitor Usage:

1. Firebase Console → Analytics - User engagement
2. Firestore Database - Monitor read/write operations
3. Authentication - Track sign-in methods and users

## Security Best Practices

1. **Never share your `.env.local` file** - It contains sensitive credentials
2. **Review Firestore security rules** - Ensure students can only access their own data
3. **Monitor Firebase usage** - Set up billing alerts to avoid unexpected costs
4. **Enable App Check** (Advanced) - Protect your app from abuse
5. **Backup your data** - Export Firestore data regularly

## Cost Estimates

Firebase Free Tier (Spark Plan) includes:
- 50K reads/day for Firestore
- 20K writes/day for Firestore
- 1GB storage
- Unlimited authentication users

For most small to medium schools (< 500 students), the free tier should be sufficient.

## Support

If you encounter any issues:
1. Check the browser console for error messages
2. Review Firebase Console for authentication/database errors
3. Verify all environment variables are set correctly
4. Ensure security rules are deployed

## Architecture Overview

```
Frontend (React)
├── Authentication (Magic Link via Firebase Auth)
├── Progress Tracking (Real-time Firestore sync)
├── Admin Dashboard (Role-based access)
└── Student View (Lesson content + progress)

Backend (Firebase)
├── Authentication (Passwordless email)
├── Firestore Database
│   ├── schools/ (school codes and info)
│   ├── users/ (student and principal profiles)
│   └── progress/ (lesson completion tracking)
└── Security Rules (Role-based access control)
```

## File Structure

```
/Users/hareshbhatia/PerformSAT/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Admin/
│   │   │   ├── AdminDashboard.jsx
│   │   │   └── StudentDetail.jsx
│   │   └── Auth/
│   │       ├── MagicLinkLogin.jsx
│   │       └── AuthCallback.jsx
│   ├── data/
│   │   └── lessons/
│   │       ├── index.js (all lessons)
│   │       ├── linearEquations.js
│   │       ├── functions.js
│   │       └── ... (other modules)
│   ├── firebase/
│   │   └── config.js
│   ├── hooks/
│   │   ├── useAuth.js
│   │   └── useProgress.js
│   ├── services/
│   │   ├── adminService.js
│   │   ├── progressService.js
│   │   └── schoolService.js
│   ├── App.jsx (main app - needs updating)
│   └── index.js
├── .env.local (your Firebase credentials - DO NOT COMMIT)
├── .gitignore
├── firebase.json
├── firestore.rules
├── firestore.indexes.json
└── package.json
```

---

**Important Note:** The `src/App.jsx` file still contains the old code and needs to be refactored to use all the new components and Firebase integration. This is the final step to complete the backend integration.
