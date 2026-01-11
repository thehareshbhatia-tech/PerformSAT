// Quick test to verify Firebase auth is working
const { initializeApp } = require('firebase/app');
const { getAuth, sendSignInLinkToEmail } = require('firebase/auth');

const firebaseConfig = {
  apiKey: "AIzaSyDDeuSNVlNmi7xaDyAlDaplX0GQoJY_sn4",
  authDomain: "performsat-production.firebaseapp.com",
  projectId: "performsat-production",
  storageBucket: "performsat-production.firebasestorage.app",
  messagingSenderId: "579528917036",
  appId: "1:579528917036:web:1d285f40d3fa9b962c9189"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const testEmail = 'student@test.com';

const actionCodeSettings = {
  url: 'http://localhost:3000/auth/verify',
  handleCodeInApp: true,
};

console.log('Testing magic link send to:', testEmail);
console.log('Redirect URL:', actionCodeSettings.url);

sendSignInLinkToEmail(auth, testEmail, actionCodeSettings)
  .then(() => {
    console.log('✅ Magic link sent successfully!');
    console.log('Check email at:', testEmail);
    process.exit(0);
  })
  .catch((error) => {
    console.error('❌ Error sending magic link:');
    console.error('Code:', error.code);
    console.error('Message:', error.message);
    process.exit(1);
  });
