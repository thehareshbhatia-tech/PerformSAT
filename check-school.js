const { initializeApp } = require('firebase/app');
const { getFirestore, collection, getDocs } = require('firebase/firestore');

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY || "AIzaSyDDeuSNVlNmi7xaDyAlDaplX0GQoJY_sn4",
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN || "performsat-production.firebaseapp.com",
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID || "performsat-production",
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET || "performsat-production.firebasestorage.app",
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID || "579528917036",
  appId: process.env.REACT_APP_FIREBASE_APP_ID || "1:579528917036:web:1d285f40d3fa9b962c9189"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function checkSchools() {
  try {
    const schoolsRef = collection(db, 'schools');
    const snapshot = await getDocs(schoolsRef);
    
    if (snapshot.empty) {
      console.log('❌ No schools found in database!');
      console.log('\nYou need to create a school in Firebase Console:');
      console.log('1. Go to: https://console.firebase.google.com/project/performsat-production/firestore');
      console.log('2. Click "Start collection" or "+ Start collection"');
      console.log('3. Collection ID: schools');
      console.log('4. Add document with these fields:');
      console.log('   - code (string): TEST2026');
      console.log('   - name (string): Test High School');
      console.log('   - adminEmail (string): your-email@example.com');
      console.log('   - isActive (boolean): true');
      console.log('   - createdAt (timestamp): current time');
    } else {
      console.log('✅ Found schools in database:\n');
      snapshot.forEach(doc => {
        console.log(`School ID: ${doc.id}`);
        console.log('Data:', JSON.stringify(doc.data(), null, 2));
        console.log('---');
      });
    }
    process.exit(0);
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

checkSchools();
