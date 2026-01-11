# PerformSAT - SAT Math Preparation Platform

A comprehensive SAT math preparation platform with video courses, progress tracking, and school-based administration.

## Features

### For Students
- 📚 **14 Math Modules** - Comprehensive SAT math curriculum covering 205+ lessons
- 🎥 **Video Lessons** - YouTube-integrated video tutorials
- ✅ **Progress Tracking** - Automatic lesson completion tracking across devices
- 🔐 **Passwordless Login** - Secure magic link authentication via email
- 📱 **Offline Support** - Continue learning even without internet

### For Principals/Administrators
- 📊 **Admin Dashboard** - Monitor all students in your school
- 👥 **Student Management** - View individual student progress
- 📈 **Analytics** - Track completion rates and engagement
- 🎯 **Module Breakdown** - See progress across all 14 modules per student

## Technology Stack

- **Frontend:** React 18.2
- **Backend:** Firebase (Authentication + Firestore Database)
- **Routing:** React Router v6
- **Styling:** Inline CSS (no external libraries)
- **Deployment:** Vercel / Firebase Hosting

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- A Google account (for Firebase)

### Quick Start

1. **Clone and Install**
   ```bash
   git clone <your-repo-url>
   cd PerformSAT
   npm install
   ```

2. **Firebase Setup**
   - Follow the detailed guide in [SETUP.md](SETUP.md)
   - Create Firebase project
   - Enable Authentication (Email Link)
   - Create Firestore database
   - Get Firebase credentials

3. **Configure Environment**
   ```bash
   # Copy template and fill in your Firebase credentials
   cp .env.local.template .env.local
   # Edit .env.local with your Firebase config
   ```

4. **Deploy Security Rules**
   ```bash
   firebase login
   firebase init
   firebase deploy --only firestore:rules
   firebase deploy --only firestore:indexes
   ```

5. **Create Test School**
   - Go to Firebase Console → Firestore
   - Create a `schools` collection
   - Add a document with required fields (see SETUP.md)

6. **Run Development Server**
   ```bash
   npm start
   ```

7. **Access the App**
   - Open http://localhost:3000
   - Sign in with email and school code
   - Check email for magic link

## Project Structure

```
PerformSAT/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Admin/
│   │   │   ├── AdminDashboard.jsx      # Principal dashboard
│   │   │   └── StudentDetail.jsx       # Individual student view
│   │   └── Auth/
│   │       ├── MagicLinkLogin.jsx      # Login form
│   │       └── AuthCallback.jsx        # Magic link handler
│   ├── data/
│   │   └── lessons/
│   │       ├── index.js                # All lessons export
│   │       └── [module].js             # Individual module lessons
│   ├── firebase/
│   │   └── config.js                   # Firebase initialization
│   ├── hooks/
│   │   ├── useAuth.js                  # Authentication hook
│   │   └── useProgress.js              # Progress tracking hook
│   ├── services/
│   │   ├── adminService.js             # Admin data fetching
│   │   ├── progressService.js          # Progress updates
│   │   └── schoolService.js            # School validation
│   ├── App.jsx                         # Main app (needs updating)
│   └── index.js
├── .env.local                          # Firebase credentials (DO NOT COMMIT)
├── .gitignore
├── firebase.json                       # Firebase config
├── firestore.rules                     # Security rules
├── firestore.indexes.json              # Database indexes
├── package.json
├── SETUP.md                            # Detailed setup guide
├── APP_INTEGRATION_GUIDE.md            # App.jsx integration help
└── README.md                           # This file
```

## Database Schema

### Collections

#### `schools/`
```javascript
{
  code: "SCHOOL2026",         // Unique school code
  name: "School Name",         // School name
  adminEmail: "principal@...", // Principal's email
  isActive: true,              // Active status
  createdAt: timestamp         // Creation date
}
```

#### `users/`
```javascript
{
  email: "student@...",        // User email
  firstName: "John",           // First name
  lastName: "Doe",             // Last name (optional)
  role: "student" | "principal", // User role
  schoolId: "schoolDocId",     // Reference to school
  schoolCode: "SCHOOL2026",    // School code
  createdAt: timestamp,        // Sign up date
  lastLoginAt: timestamp       // Last login
}
```

#### `progress/`
```javascript
{
  userId: "userDocId",         // Reference to user
  lastUpdated: timestamp,      // Last update time
  totalLessonsCompleted: 42,   // Total completed count
  completedLessons: {          // Completed lessons map
    "module-id-1": {
      completed: true,
      completedAt: timestamp,
      moduleId: "module-id",
      lessonId: 1,
      lessonTitle: "Lesson Title",
      lessonType: "lesson" | "video"
    }
  }
}
```

## Curriculum Overview

### 14 Modules (205 Total Lessons)

1. **Linear Equations** (24 lessons) - Slope, intercepts, graphing
2. **Functions** (10 lessons) - Function notation, interpretation
3. **Systems of Equations** (14 lessons) - Multiple unknowns
4. **Transformations** (15 lessons) - Function transformations
5. **Triangles** (35 lessons) - Pythagorean theorem, trigonometry
6. **Circles** (33 lessons) - Equations, arcs, sectors
7. **Dimensional Analysis** (5 lessons) - Unit conversions
8. **Percents** (17 lessons) - Percent change, word problems
9. **Exponents** (12 lessons) - Rules, growth/decay
10. **Quadratics** (27 lessons) - Parabolas, factoring
11. **Radians & Degrees** (4 lessons) - Angle conversions
12. **Equivalent Expressions** (3 lessons) - DESMOS verification
13. **Statistics** (25 lessons) - Mean, median, standard deviation
14. **Volume** (16 lessons) - 3D shapes, composite figures

## Authentication Flow

1. User enters email + school code + name
2. System validates school code in Firestore
3. Firebase sends magic link to user's email
4. User clicks link → authenticated and profile created
5. Session persists across devices and refreshes

## Role-Based Access

- **Students:** Access lessons, track progress, view own data
- **Principals:** View all students in their school, monitor progress

## Security

- Firestore security rules enforce role-based access
- Students can only read/write their own progress
- Principals can only access their school's students
- Magic links expire in 15 minutes
- Sensitive data (Firebase credentials) never committed to Git

## Deployment

### Firebase Hosting

```bash
npm run build
firebase deploy --only hosting
```

### Vercel

1. Push code to GitHub
2. Connect repo to Vercel
3. Add environment variables
4. Deploy

**Important:** Add your production domain to Firebase Authentication authorized domains!

## Development

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm start
```

### Build for Production

```bash
npm run build
```

### Deploy Firestore Rules

```bash
firebase deploy --only firestore:rules
```

## Environment Variables

Required environment variables in `.env.local`:

```
REACT_APP_FIREBASE_API_KEY=
REACT_APP_FIREBASE_AUTH_DOMAIN=
REACT_APP_FIREBASE_PROJECT_ID=
REACT_APP_FIREBASE_STORAGE_BUCKET=
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=
REACT_APP_FIREBASE_APP_ID=
```

## Current Status

### ✅ Completed
- Firebase configuration
- Authentication system (magic links)
- Progress tracking (real-time sync)
- Admin dashboard
- Student detail view
- Database security rules
- Lesson data extraction
- Documentation

### ⚠️ Pending
- **App.jsx Integration** - The main app file needs to be updated to use all new components
  - See [APP_INTEGRATION_GUIDE.md](APP_INTEGRATION_GUIDE.md) for detailed instructions

## Troubleshooting

See [SETUP.md](SETUP.md#troubleshooting) for common issues and solutions.

## Cost Estimates

Firebase Free Tier (Spark Plan):
- 50K Firestore reads/day
- 20K Firestore writes/day
- 1GB storage
- Unlimited auth users

**Estimate:** Free tier sufficient for < 500 students

## Support & Documentation

- **Setup Guide:** [SETUP.md](SETUP.md)
- **Integration Guide:** [APP_INTEGRATION_GUIDE.md](APP_INTEGRATION_GUIDE.md)
- **Implementation Plan:** `.claude/plans/twinkly-orbiting-beacon.md`

## License

Private - All rights reserved

## Author

Built with Claude Code for PerformSAT

---

**Next Step:** Follow [APP_INTEGRATION_GUIDE.md](APP_INTEGRATION_GUIDE.md) to complete the App.jsx integration and launch your application!
