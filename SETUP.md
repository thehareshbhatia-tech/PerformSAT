# PerformSAT Backend Setup Guide

This guide will help you set up the Supabase backend for user authentication and progress tracking.

## Prerequisites

- A Supabase account (sign up at https://supabase.com)
- Node.js and npm installed
- Your Supabase project URL: `https://lqhcaoznsondeibnqzio.supabase.co`

## Step 1: Get Your Supabase Credentials

1. Go to your Supabase dashboard: https://supabase.com/dashboard
2. Select your project (or create a new one if you haven't already)
3. Go to **Settings** → **API**
4. Copy the following:
   - **Project URL** (you already have this)
   - **anon/public key** (this is safe to use in the browser)

## Step 2: Configure Environment Variables

1. Open the `.env` file in the root directory of this project
2. Replace `your_supabase_anon_key_here` with your actual anon key:

```env
REACT_APP_SUPABASE_URL=https://lqhcaoznsondeibnqzio.supabase.co
REACT_APP_SUPABASE_ANON_KEY=your_actual_anon_key_here
```

**Important:** Never commit your `.env` file to git. It's already added to `.gitignore`.

## Step 3: Set Up the Database

1. Go to your Supabase dashboard
2. Click on **SQL Editor** in the left sidebar
3. Click **New Query**
4. Copy the entire contents of `database/schema.sql` from this project
5. Paste it into the SQL editor
6. Click **Run** to execute the SQL

This will create:
- A `user_progress` table to track lesson completion
- Row Level Security (RLS) policies to protect user data
- Indexes for better performance
- Automatic timestamp updates

## Step 4: Configure Authentication

1. In your Supabase dashboard, go to **Authentication** → **Settings**
2. Under **Auth Providers**, make sure **Email** is enabled
3. Configure email templates if desired (optional)
4. Set **Site URL** to your app's URL (for development: `http://localhost:3000`)

### Email Confirmation (Optional)

By default, Supabase requires email confirmation for new signups. For development/testing:

1. Go to **Authentication** → **Settings**
2. Scroll down to **Email Auth**
3. Toggle off **Enable email confirmations** (only for development)

## Step 5: Install Dependencies

```bash
npm install
```

The Supabase client library has already been added to your `package.json`.

## Step 6: Start the Application

```bash
npm start
```

The app will open at http://localhost:3000

## Features

### Authentication
- **Sign Up**: New users can create accounts with email, password, and name
- **Login**: Existing users can log in with email and password
- **Logout**: Users can securely log out
- **Session Management**: User sessions are automatically maintained

### Progress Tracking
- **Lesson Completion**: Mark lessons as complete
- **Persistent Storage**: Progress is saved to Supabase and synced across devices
- **Real-time Updates**: Progress updates are reflected immediately
- **Module Progress**: Track completion percentage for each module

## Database Schema

### user_progress table

| Column | Type | Description |
|--------|------|-------------|
| id | UUID | Primary key |
| user_id | UUID | References auth.users(id) |
| module_id | TEXT | The module identifier |
| lesson_id | TEXT | The lesson identifier |
| completed | BOOLEAN | Whether the lesson is completed |
| completed_at | TIMESTAMP | When the lesson was completed |
| created_at | TIMESTAMP | When the record was created |
| updated_at | TIMESTAMP | When the record was last updated |

## Security

The database uses Row Level Security (RLS) to ensure:
- Users can only read their own progress
- Users can only modify their own progress
- No user can access another user's data

## Project Structure

```
src/
├── App.jsx                      # Main application component (updated with Supabase)
├── supabaseClient.js           # Supabase client configuration
├── hooks/
│   ├── useAuth.js              # Authentication hook
│   └── useProgress.js          # Progress tracking hook
├── services/
│   ├── authService.js          # Authentication service functions
│   └── progressService.js      # Progress tracking service functions
└── index.js                    # React entry point

database/
└── schema.sql                  # Database schema and policies

.env                            # Environment variables (not committed to git)
.env.example                    # Example environment variables
```

## API Functions

### Authentication Service (`authService.js`)

- `signUp(email, password, name)` - Register a new user
- `signIn(email, password)` - Log in an existing user
- `signOut()` - Log out the current user
- `getCurrentUser()` - Get the currently authenticated user
- `getSession()` - Get the current session
- `onAuthStateChange(callback)` - Listen to auth state changes
- `resetPassword(email)` - Send password reset email

### Progress Service (`progressService.js`)

- `markLessonComplete(userId, moduleId, lessonId)` - Mark a lesson as complete
- `markLessonIncomplete(userId, moduleId, lessonId)` - Mark a lesson as incomplete
- `getUserProgress(userId)` - Get all progress for a user
- `getModuleProgress(userId, moduleId)` - Get progress for a specific module
- `isLessonCompleted(userId, moduleId, lessonId)` - Check if a lesson is completed
- `deleteProgress(userId, moduleId, lessonId)` - Delete a progress entry
- `getUserStats(userId)` - Get completion statistics for a user

## Troubleshooting

### "Missing Supabase environment variables"
- Make sure you've created the `.env` file with the correct values
- Restart the development server after updating `.env`

### Authentication errors
- Verify your Supabase URL and anon key are correct
- Check that Email authentication is enabled in Supabase
- Make sure you've run the database schema SQL

### Progress not saving
- Verify the `user_progress` table exists in your database
- Check that RLS policies are enabled
- Ensure you're logged in (user is authenticated)

## Next Steps

1. Test user registration and login
2. Test lesson completion tracking
3. Verify progress persistence across sessions
4. Customize the authentication flow if needed
5. Add additional features like password reset UI

## Support

For Supabase-specific issues, check:
- [Supabase Documentation](https://supabase.com/docs)
- [Supabase Community](https://github.com/supabase/supabase/discussions)

## Security Notes

- Never commit `.env` files to version control
- Always use environment variables for sensitive data
- The anon key is safe to use in the browser (it respects RLS policies)
- Keep your service role key secret (not used in this project)
